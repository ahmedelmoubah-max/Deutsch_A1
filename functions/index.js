const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const { getDatabase } = require("firebase-admin/database");
const crypto = require("crypto");
const COMPETITION_LESSONS = require("./competition-bank.json");

initializeApp({
  databaseURL: "https://test-c1899-default-rtdb.firebaseio.com"
});

exports.adminChangeStudentPassword = onCall(
  { region: "us-central1" },
  async (request) => {
    if (!request.auth) {
      throw new HttpsError("unauthenticated", "Bitte anmelden.");
    }

    const adminUid = request.auth.uid;
    const data = request.data || {};
    const studentUid = typeof data.studentUid === "string" ? data.studentUid.trim() : "";
    const newPassword = typeof data.newPassword === "string" ? data.newPassword : "";

    if (!studentUid || newPassword.length < 6 || newPassword.length > 128) {
      throw new HttpsError("invalid-argument", "Ungültige Schüler-ID oder Passwortlänge.");
    }

    const db = getDatabase();
    const adminSnapshot = await db.ref(`deutschA1/admins/${adminUid}`).get();
    if (adminSnapshot.val() !== true) {
      throw new HttpsError("permission-denied", "Nur ein registrierter Deutsch-A1-Administrator darf Passwörter ändern.");
    }

    if (studentUid === adminUid) {
      throw new HttpsError("permission-denied", "Diese Funktion ist nur für Schülerkonten vorgesehen.");
    }

    const targetAdminSnapshot = await db.ref(`deutschA1/admins/${studentUid}`).get();
    if (targetAdminSnapshot.val() === true) {
      throw new HttpsError("permission-denied", "Ein anderes Administratorkonto kann hier nicht geändert werden.");
    }

    const studentSnapshot = await db.ref(`deutschA1/users/${studentUid}`).get();
    const studentProfile = studentSnapshot.val();
    if (!studentProfile || studentProfile._systemPlaceholder === true) {
      throw new HttpsError("not-found", "Das Schülerprofil wurde nicht gefunden.");
    }

    try {
      await getAuth().updateUser(studentUid, { password: newPassword });
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        throw new HttpsError("not-found", "Das Schülerkonto wurde in Firebase Authentication nicht gefunden.");
      }
      if (error.code === "auth/invalid-password" || error.code === "auth/weak-password") {
        throw new HttpsError("invalid-argument", "Das Passwort erfüllt die Firebase-Passwortregeln nicht.");
      }
      console.error("adminChangeStudentPassword failed:", error.code || error.message);
      throw new HttpsError("internal", "Das Passwort konnte nicht aktualisiert werden.");
    }

    return { success: true, studentUid };
  }
);



// =========================================================
// Student competitions: secure room creation, joining and scoring
// =========================================================

const COMPETITION_ROOT = "deutschA1";
const COMPETITION_CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function competitionCode() {
  const bytes = crypto.randomBytes(6);
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += COMPETITION_CODE_CHARS[bytes[i] % COMPETITION_CODE_CHARS.length];
  }
  return code;
}

async function requireCompetitionStudent(uid) {
  const snapshot = await getDatabase().ref(`${COMPETITION_ROOT}/users/${uid}`).get();
  const profile = snapshot.val();
  if (!profile || profile.active === false || profile._systemPlaceholder === true) {
    throw new HttpsError("permission-denied", "حساب التلميذ غير نشط أو غير موجود.");
  }
  return profile;
}

async function requireCompetitionLessonAccess(profile, lessonIndices) {
  const db = getDatabase();
  let groupAccess = null;
  if (profile.groupId) {
    const groupSnapshot = await db.ref(`${COMPETITION_ROOT}/groups/${profile.groupId}/lessonAccess`).get();
    groupAccess = groupSnapshot.val() || null;
  }
  for (const index of lessonIndices) {
    const key = String(index + 1);
    if ((profile.lessonAccess && profile.lessonAccess[key] === false) ||
        (groupAccess && groupAccess[key] === false)) {
      throw new HttpsError("permission-denied", "كاين درس مختار ما عندكش الصلاحية تدخل ليه.");
    }
  }
}

function cleanCompetitionName(value, fallback) {
  const name = String(value || fallback || "متعلّم").trim().slice(0, 50);
  return name || "متعلّم";
}

function shuffleCompetitionItems(items) {
  const output = items.slice();
  for (let i = output.length - 1; i > 0; i--) {
    const j = crypto.randomInt(i + 1);
    [output[i], output[j]] = [output[j], output[i]];
  }
  return output;
}

function buildServerCompetitionQuiz(lessonIndices, requestedCount) {
  const pool = [];
  const seen = new Set();
  lessonIndices.forEach((lessonIndex) => {
    const lesson = COMPETITION_LESSONS[lessonIndex];
    if (!lesson || !lesson.data) return;
    Object.entries(lesson.data).forEach(([category, entries]) => {
      (Array.isArray(entries) ? entries : []).forEach((entry) => {
        if (!Array.isArray(entry) || !entry[0] || !entry[1]) return;
        const word = String(entry[0]).trim();
        const meaning = String(entry[1]).trim();
        const key = `${word}|${meaning}`.toLowerCase();
        if (seen.has(key)) return;
        seen.add(key);
        pool.push({ word, meaning, category, lessonIndex, lessonName: lesson.name });
      });
    });
  });
  if (pool.length < 4) {
    throw new HttpsError("failed-precondition", "ما كايناش أسئلة كافية فالدروس المختارة.");
  }

  const selected = shuffleCompetitionItems(pool).slice(0, Math.min(requestedCount, pool.length));
  const questions = [];
  const correctIndices = [];
  selected.forEach((item) => {
    const distractors = [];
    shuffleCompetitionItems(pool.filter((other) =>
      other.meaning !== item.meaning && other.word !== item.word
    )).forEach((other) => {
      if (distractors.length < 3 && !distractors.includes(other.meaning)) {
        distractors.push(other.meaning);
      }
    });
    if (distractors.length !== 3) return;
    const options = shuffleCompetitionItems([item.meaning, ...distractors]);
    questions.push({
      prompt: `Was bedeutet „${item.word}“?`,
      options,
      lessonIndex: item.lessonIndex,
      lessonName: item.lessonName,
      category: item.category
    });
    correctIndices.push(options.indexOf(item.meaning));
  });
  if (questions.length < 5) {
    throw new HttpsError("failed-precondition", "ما قدرناش نجهزو خمسة أسئلة مختلفة على الأقل.");
  }
  return { questions, correctIndices };
}

function competitionRoomRef(roomId) {
  if (typeof roomId !== "string" || !/^[A-Za-z0-9_-]{8,80}$/.test(roomId)) {
    throw new HttpsError("invalid-argument", "رمز الغرفة غير صالح.");
  }
  return getDatabase().ref(`${COMPETITION_ROOT}/competitions/${roomId}`);
}

async function maybeCompleteCompetition(roomId) {
  const db = getDatabase();
  const roomRef = competitionRoomRef(roomId);
  const tx = await roomRef.transaction((room) => {
    if (!room) return;
    if (room.status === "active") {
      const members = Object.values(room.members || {});
      const total = Array.isArray(room.questions) ? room.questions.length : 0;
      if (members.length >= 2 && total > 0 && members.every((member) =>
        member && (member.finished === true || Number(member.answeredCount || 0) >= total)
      )) {
        room.status = "completed";
        room.completedAt = Date.now();
      } else {
        return;
      }
    }
    return room;
  });

  const room = tx.snapshot.val();
  if (!room || room.status !== "completed") return room;

  const members = Object.entries(room.members || {});
  const highestScore = members.reduce((max, [, member]) =>
    Math.max(max, Number(member.score) || 0), 0
  );
  await Promise.all(members.map(async ([uid, member]) => {
    const statsRef = db.ref(`${COMPETITION_ROOT}/competitionStats/${uid}`);
    await statsRef.transaction((current) => {
      current = current || {
        uid,
        name: cleanCompetitionName(member.name, "متعلّم"),
        totalPoints: 0,
        competitionsPlayed: 0,
        wins: 0,
        matches: {}
      };
      current.matches = current.matches || {};
      if (current.matches[roomId]) return current;

      const score = Number(member.score) || 0;
      current.uid = uid;
      current.name = cleanCompetitionName(member.name, current.name);
      current.totalPoints = (Number(current.totalPoints) || 0) + score;
      current.competitionsPlayed = (Number(current.competitionsPlayed) || 0) + 1;
      const won = score === highestScore;
      if (won) current.wins = (Number(current.wins) || 0) + 1;
      current.matches[roomId] = {
        score,
        won,
        completedAt: Number(room.completedAt) || Date.now()
      };
      return current;
    });
  }));
  return room;
}

exports.createCompetitionRoom = onCall({ region: "us-central1" }, async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "سجّل الدخول أولاً.");
  const uid = request.auth.uid;
  const profile = await requireCompetitionStudent(uid);
  const data = request.data || {};
  const mode = data.mode === "group" ? "group" : "duel";
  const lessonIndices = Array.isArray(data.lessonIndices)
    ? [...new Set(data.lessonIndices.map(Number).filter((n) => Number.isInteger(n) && n >= 0 && n <= 9))]
    : [];
  const requestedCount = Number(data.questionCount);

  if (!lessonIndices.length || lessonIndices.length > 10) {
    throw new HttpsError("invalid-argument", "اختار درساً واحداً على الأقل.");
  }
  if (![5, 10, 15].includes(requestedCount)) {
    throw new HttpsError("invalid-argument", "اختار 5 أو 10 أو 15 سؤالاً.");
  }
  await requireCompetitionLessonAccess(profile, lessonIndices);

  // The server creates the question order and keeps the answer key private.
  const quiz = buildServerCompetitionQuiz(lessonIndices, requestedCount);
  const safeQuestions = quiz.questions;
  const answerIndices = quiz.correctIndices;

  const db = getDatabase();
  const roomId = db.ref(`${COMPETITION_ROOT}/competitions`).push().key;
  if (!roomId) throw new HttpsError("internal", "تعذّر إنشاء رمز الغرفة.");

  let code = "";
  let reserved = false;
  for (let attempt = 0; attempt < 12; attempt++) {
    const candidate = competitionCode();
    const codeRef = db.ref(`${COMPETITION_ROOT}/competitionCodes/${candidate}`);
    const tx = await codeRef.transaction((current) => current ? undefined : {
      roomId,
      createdAt: Date.now()
    });
    if (tx.committed) {
      code = candidate;
      reserved = true;
      break;
    }
  }
  if (!reserved) throw new HttpsError("resource-exhausted", "تعذّر توليد رمز فريد. حاول مرة أخرى.");

  const lessonNames = lessonIndices.map((index) => COMPETITION_LESSONS[index]?.name || `L${index + 1}`);
  const room = {
    id: roomId,
    code,
    createdBy: uid,
    creatorName: cleanCompetitionName(profile.name, request.auth.token.name),
    mode,
    status: "waiting",
    lessonIndices,
    lessonNames,
    questionCount: safeQuestions.length,
    questions: safeQuestions,
    createdAt: Date.now(),
    members: {
      [uid]: {
        uid,
        name: cleanCompetitionName(profile.name, request.auth.token.name),
        score: 0,
        answeredCount: 0,
        correctCount: 0,
        finished: false,
        joinedAt: Date.now()
      }
    }
  };

  try {
    await db.ref().update({
      [`${COMPETITION_ROOT}/competitions/${roomId}`]: room,
      [`${COMPETITION_ROOT}/competitionAnswers/${roomId}`]: { correctIndices: answerIndices }
    });
  } catch (error) {
    await db.ref(`${COMPETITION_ROOT}/competitionCodes/${code}`).remove().catch(() => {});
    console.error("createCompetitionRoom failed:", error);
    throw new HttpsError("internal", "تعذّر حفظ غرفة المنافسة.");
  }
  return { roomId, code };
});

exports.joinCompetitionRoom = onCall({ region: "us-central1" }, async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "سجّل الدخول أولاً.");
  const uid = request.auth.uid;
  const profile = await requireCompetitionStudent(uid);
  const code = String(request.data?.code || "").trim().toUpperCase();
  if (!/^[A-Z0-9]{6}$/.test(code)) {
    throw new HttpsError("invalid-argument", "رمز المنافسة غير صالح.");
  }

  const db = getDatabase();
  const codeSnapshot = await db.ref(`${COMPETITION_ROOT}/competitionCodes/${code}`).get();
  const roomId = codeSnapshot.child("roomId").val();
  if (!roomId) throw new HttpsError("not-found", "ما لقيناش غرفة بهاد الرمز.");

  const roomRef = competitionRoomRef(roomId);
  const name = cleanCompetitionName(profile.name, request.auth.token.name);
  let failure = "";
  const tx = await roomRef.transaction((room) => {
    if (!room) {
      failure = "missing";
      return;
    }
    if (room.status !== "waiting") {
      failure = "started";
      return;
    }
    room.members = room.members || {};
    if (room.members[uid]) return room;
    const limit = room.mode === "group" ? 20 : 2;
    if (Object.keys(room.members).length >= limit) {
      failure = "full";
      return;
    }
    room.members[uid] = {
      uid,
      name,
      score: 0,
      answeredCount: 0,
      correctCount: 0,
      finished: false,
      joinedAt: Date.now()
    };
    return room;
  });
  if (!tx.committed) {
    if (failure === "full") throw new HttpsError("resource-exhausted", "الغرفة عامرة.");
    if (failure === "started") throw new HttpsError("failed-precondition", "المنافسة بدات، ما بقاتش كتقبل لاعبين.");
    throw new HttpsError("not-found", "الغرفة ما بقاتش متاحة.");
  }
  return { roomId };
});

exports.startCompetitionRoom = onCall({ region: "us-central1" }, async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "سجّل الدخول أولاً.");
  const uid = request.auth.uid;
  const roomRef = competitionRoomRef(String(request.data?.roomId || ""));
  let failure = "";
  const tx = await roomRef.transaction((room) => {
    if (!room) {
      failure = "missing";
      return;
    }
    if (room.createdBy !== uid) {
      failure = "not-owner";
      return;
    }
    if (room.status !== "waiting") {
      failure = "started";
      return;
    }
    if (Object.keys(room.members || {}).length < 2) {
      failure = "need-player";
      return;
    }
    room.status = "active";
    room.startedAt = Date.now();
    return room;
  });
  if (!tx.committed) {
    if (failure === "not-owner") throw new HttpsError("permission-denied", "غير صاحب الغرفة اللي يقدر يبدا المنافسة.");
    if (failure === "need-player") throw new HttpsError("failed-precondition", "خاص تلميذ آخر ينضم قبل البداية.");
    if (failure === "started") throw new HttpsError("failed-precondition", "المنافسة بدات من قبل.");
    throw new HttpsError("not-found", "الغرفة غير موجودة.");
  }
  return { success: true };
});

exports.submitCompetitionAnswer = onCall({ region: "us-central1" }, async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "سجّل الدخول أولاً.");
  const uid = request.auth.uid;
  const roomId = String(request.data?.roomId || "");
  const questionIndex = Number(request.data?.questionIndex);
  const selectedIndex = Number(request.data?.selectedIndex);
  if (!Number.isInteger(questionIndex) || questionIndex < 0 ||
      !Number.isInteger(selectedIndex) || selectedIndex < 0 || selectedIndex > 3) {
    throw new HttpsError("invalid-argument", "الجواب غير صالح.");
  }

  const db = getDatabase();
  const roomRef = competitionRoomRef(roomId);
  const roomSnapshot = await roomRef.get();
  const room = roomSnapshot.val();
  if (!room || room.status !== "active") {
    throw new HttpsError("failed-precondition", "المنافسة ماشي نشيطة حالياً.");
  }
  const member = room.members?.[uid];
  if (!member) throw new HttpsError("permission-denied", "ماشي عضو فهاد المنافسة.");
  if (questionIndex !== Number(member.answeredCount || 0)) {
    throw new HttpsError("already-exists", "هاد السؤال تسجل من قبل أو خاصك تجاوب على السؤال السابق.");
  }
  if (questionIndex >= (room.questions || []).length) {
    throw new HttpsError("out-of-range", "ساليتي جميع الأسئلة.");
  }

  const answerSnapshot = await db.ref(`${COMPETITION_ROOT}/competitionAnswers/${roomId}/correctIndices/${questionIndex}`).get();
  const correctIndex = Number(answerSnapshot.val());
  if (!Number.isInteger(correctIndex) || correctIndex < 0 || correctIndex > 3) {
    throw new HttpsError("internal", "مفتاح الإجابة غير موجود.");
  }
  const correct = selectedIndex === correctIndex;
  const pointsAwarded = correct ? 10 : 0;
  const memberRef = roomRef.child(`members/${uid}`);
  const tx = await memberRef.transaction((current) => {
    if (!current || current.finished === true ||
        Number(current.answeredCount || 0) !== questionIndex) return;
    current.score = (Number(current.score) || 0) + pointsAwarded;
    current.answeredCount = questionIndex + 1;
    current.correctCount = (Number(current.correctCount) || 0) + (correct ? 1 : 0);
    current.lastAnswerAt = Date.now();
    if (current.answeredCount >= (room.questions || []).length) current.finished = true;
    return current;
  });
  if (!tx.committed) {
    throw new HttpsError("already-exists", "هاد الجواب تسجل من قبل.");
  }

  const updatedMember = tx.snapshot.val();
  await maybeCompleteCompetition(roomId);
  return {
    correct,
    pointsAwarded,
    score: Number(updatedMember.score) || 0,
    answeredCount: Number(updatedMember.answeredCount) || 0,
    finished: updatedMember.finished === true
  };
});

exports.finishCompetitionRoom = onCall({ region: "us-central1" }, async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "سجّل الدخول أولاً.");
  const uid = request.auth.uid;
  const roomId = String(request.data?.roomId || "");
  const roomRef = competitionRoomRef(roomId);
  const snapshot = await roomRef.get();
  const room = snapshot.val();
  if (!room || room.status !== "active" || !room.members?.[uid]) {
    throw new HttpsError("failed-precondition", "ما تقدرش تنهي هاد المنافسة.");
  }
  await roomRef.child(`members/${uid}`).update({ finished: true, finishedAt: Date.now() });
  await maybeCompleteCompetition(roomId);
  return { success: true };
});

exports.leaveCompetitionRoom = onCall({ region: "us-central1" }, async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "سجّل الدخول أولاً.");
  const uid = request.auth.uid;
  const roomId = String(request.data?.roomId || "");
  const roomRef = competitionRoomRef(roomId);
  const snapshot = await roomRef.get();
  const room = snapshot.val();
  if (!room || !room.members?.[uid]) return { success: true };

  if (room.status === "waiting" && room.createdBy === uid) {
    await getDatabase().ref().update({
      [`${COMPETITION_ROOT}/competitions/${roomId}`]: null,
      [`${COMPETITION_ROOT}/competitionCodes/${room.code}`]: null,
      [`${COMPETITION_ROOT}/competitionAnswers/${roomId}`]: null
    });
    return { success: true };
  }
  if (room.status === "waiting") {
    await roomRef.child(`members/${uid}`).remove();
  } else if (room.status === "active") {
    await roomRef.child(`members/${uid}`).update({ finished: true, finishedAt: Date.now() });
    await maybeCompleteCompetition(roomId);
  }
  return { success: true };
});
