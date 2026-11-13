const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const { getDatabase } = require("firebase-admin/database");

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
