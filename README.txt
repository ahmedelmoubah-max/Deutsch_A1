Deutsch A1 – Firebase Lernplattform

NEUE ADMIN-FUNKTIONEN
- Gruppenverwaltung mit Gruppenname und täglicher Pflicht-Lernzeit.
- Pro Gruppe Lektionen freigeben oder sperren.
- Schüler einer Gruppe zuweisen.
- Individuelle Lektionenfreigabe pro Schüler (überschreibt Gruppenregel).
- Individuelle tägliche Pflicht-Lernzeit pro Schüler (leer = Gruppenregel).
- Tagesaktivität: aktive Browserzeit, Login-Zähler pro Tag, letzte Anmeldung; Zeitdetails pro Schüler und pro Lektion im Admin-Dashboard.
- Filter: seit 7 Tagen inaktiv, noch nie eingeloggt, Tagesziel nicht erreicht/erreicht.
- Schwierige Tests/Lektionen: letzter Test unter 60% wird markiert; Versuche werden gezählt.
- Ergebnisse, Gruppen und Aktivität werden zentral in Firebase gespeichert.

FIREBASE
- Project: test-c1899
- Plattformdaten: /deutschA1
- Die Root-Pfade /users und /staffUsers des anderen Projekts bleiben in den Rules enthalten.
- firebase-database-rules.json in Realtime Database > Rules veröffentlichen.
- Admin UID muss unter /deutschA1/admins/UID den Boolean-Wert true haben.
- Bereits verwendete Admin-UID: rgXlgbKBlift0izQZ3Q2tEn9uD63 (nur verwenden, wenn sie wirklich zu admin@gmail.com gehört).

WICHTIG ZUR ZEITERFASSUNG
- Die Lernzeit wird ungefähr alle 15 Sekunden erfasst, solange die Plattform im sichtbaren Browser-Tab geöffnet ist.
- Die Tages-Login-Zahl zählt erfolgreiche manuelle Anmeldungen, nicht bloßes Neuladen der Seite.
- Die Lernzeit ist eine Browser-Aktivitätsmessung und kann nicht beweisen, dass der Schüler tatsächlich aufmerksam gelernt hat.
- Aktivitäten aus extern eingebetteten Übungen werden über das Progress-Bridge an die Hauptseite gemeldet.

KONTOERSTELLUNG
- Schülerkonten werden mit Firebase Authentication angelegt und Profile unter /deutschA1/users/UID gespeichert.
- Gmail-Generator erstellt nur einen Adressvorschlag, kein echtes Gmail-Postfach.
- Für das endgültige Löschen eines Firebase-Authentication-Kontos oder das Setzen fremder Passwörter wird eine sichere Cloud Function benötigt.

START
- ZIP vollständig entpacken.
- Im Projektordner einen Webserver starten: python -m http.server 8000
- http://localhost:8000 öffnen.


FIREBASE RULES FIX (groups permission denied)
- Publish the updated firebase-database-rules.json in Firebase Realtime Database > Rules.
- Authenticated users can READ group configuration (/deutschA1/groups), because the student
  app needs to read the group assigned to the signed-in student.
- Only an authenticated admin listed as true at /deutschA1/admins/UID can WRITE group settings.
- Students cannot write groups or read other students' profiles/results.


ADMIN VOCABULARY TEST MODULE
- Open the admin dashboard and choose "فتح لوحة اختبار المفردات".
- The module checks Firebase Authentication and /deutschA1/admins/{uid} before loading.
- Students and groups are read from /deutschA1/users and /deutschA1/groups.
- Group words, texts and images are stored at /deutschA1/vocabularyTestContent/{groupId}.
- Per-student vocabulary test history is stored at /deutschA1/vocabularyTests/{uid}.
- Publish the complete updated firebase-database-rules.json in Realtime Database > Rules.
- Student/group creation remains managed by the main Deutsch A1 admin dashboard.


INTERACTIVE LESSON POSTERS (LESSONS 7, 8, 9)
- Lektion 7: pages/wie-wo-und-wann-interaktiv.html
- Lektion 8: pages/unterwegs-interaktiv.html
- Lektion 9: pages/unter-freunden-flohmarkt-interaktiv.html
- Students open each poster from the matching lesson detail page under A1.2.
- Existing lesson tests remain available separately under the "Teste" area.
- Existing lesson/group access controls apply: lessons 7, 8, and 9 use access keys 7, 8, and 9.


ADMIN STUDENT DETAILS
- Click a student's name in the Admin Dashboard > Alle Schüler table.
- A details dialog shows the student's name, email, Firebase UID/student code,
  group, account status, daily target, last login and account creation date.
- Email and student code can be copied from the dialog.
- Firebase Authentication does not expose existing passwords. The dialog
  provides the existing password-reset email action instead; passwords are
  not stored in plaintext in Realtime Database.


DIRECT STUDENT PASSWORD CHANGE (Firebase Authentication)
- In Admin Dashboard > click a student's name > "Neues Passwort festlegen".
- Enter the new password twice and save. The callable Cloud Function updates
  Firebase Authentication for that student UID. The plaintext password is not
  written to Realtime Database or stored by this application.
- A protected Firebase Cloud Function is required because browser Firebase
  Authentication cannot update another user's password with the Admin SDK.
- Deploy once from the Deutsch_A1_Plattform project root:
    npm install -g firebase-tools
    firebase login
    firebase deploy --only functions
- The Firebase CLI project alias is set to test-c1899 in .firebaserc.
- Cloud Functions deployment may require the Firebase project to be on the
  Blaze (pay-as-you-go) billing plan and billing enabled.
- The function verifies the caller against /deutschA1/admins/{adminUid} and
  verifies the target under /deutschA1/users/{studentUid}; it refuses to modify
  admin accounts. Existing Realtime Database Rules do not need to be opened
  for this operation because the function uses the Admin SDK on the server.


ADMIN STUDENT GROUP FILTER
- The student list now has a dedicated group filter.
- Options include all groups, unassigned students, and each real Firebase group.
- The existing activity filter remains available and can be combined with the group filter.
- The filters use each student's groupId from /deutschA1/users and group names from /deutschA1/groups.
- No Firebase Rules change is needed for this UI-only filter.


ADMIN STUDENT DETAILS - PASSWORD FIELD
- The student details dialog shows a Passwort status instead of the Firebase UID.
- Existing passwords cannot be read from Firebase Authentication; the field
  explicitly says they are not retrievable for security reasons.
- To give the student a new password, use the Neues Passwort festlegen form
  in the same dialog. It updates Firebase Authentication through the protected
  adminChangeStudentPassword Cloud Function.
- The Firebase UID is no longer displayed in the student details dialog.


ADMIN LEARNING ANALYTICS
- Admin dashboard includes group-level and student-level learning reports.
- Group charts show average score per lesson and student-to-student comparison.
- Each student report shows average score per lesson, test attempts, total active
  learning time, login count, weak topics below 60%, not-yet-assessed categories,
  weak exercises and incomplete exercises where the exercise report supplies them.
- Exercise-level completed flags and score breakdowns are now forwarded from
  student-progress.js to the parent app and saved in deutschA1/results/{uid}/{moduleId}.
- Historical results that contain only aggregate points cannot be reconstructed
  into per-exercise mistakes; detailed exercise reports populate on new attempts.
- A lesson/category without a saved test result is labelled not yet assessed,
  not as proof the student never opened or studied it.
- Existing Firebase paths and Rules are reused; no Rules change is required.


ADMIN NAVIGATION RESTRUCTURE
- Admin area is reorganized into a sidebar with Home, Groups, and Results.
- Home contains a compact overview of student accounts and groups only.
- Groups page contains group creation/editing and a group detail view.
- Opening a group shows its members and an in-group student account generator.
  The generator proposes an email and password and creates the student account
  in Firebase using the existing secondary-auth account creation flow.
- Existing students can be reassigned to another group from the group member
  table; student management actions remain available.
- Results page uses cascading filters: choose a group first, then choose a
  student from that group. With all students selected, it shows the group
  analytics and each student's individual report. Selecting one student
  focuses the individual report and results table on that student.
- The new sidebar layout is responsive for desktop and mobile.


RESULTS FILTERS: LEKTION + CONTENT TYPE
- Results page has cascading group/student filters plus Lektion and content-type
  filters (Kurs, Podcast, Test).
- The selected lesson and content type are applied to result rows, weak-result
  lists, individual analytics and group analytics.
- Existing lesson test reports are classified as Test. Result records may also
  carry contentType/activityType/resourceType/kind/type metadata; IDs/titles
  containing podcast/audio or kurs/course are recognized.
- Activity tracking now stores active seconds by lesson and content type:
  course learning pages => kurs, podcast-player => podcast, test pages => test.
- Existing historical activity stored only total/page/lesson seconds, so it
  cannot be split retroactively by Kurs/Podcast/Test. The per-type time split
  starts after deploying this version.
- Student progress reporter accepts an optional final contentType argument;
  module IDs/titles containing podcast/audio or kurs/course are inferred.
- Kurs and Podcast currently report learning time; scored points/exercise
  breakdowns appear only when the corresponding page sends a progress report.


STUDENT LEARNING PATH REORGANIZATION
- After student login, the first page shows A1.1 and A1.2 directly.
- Selecting a level opens its Lektionen list (A1.1: Lektionen 1-5; A1.2: Lektionen 6-10).
- Selecting a Lektion opens a lesson hub with three choices: Kurs, Podcast, Test.
- Kurs opens the existing lesson content; Test opens the lesson's existing category or standalone test.
- Podcast opens only the selected lesson's podcast files. For lessons without a separate podcast file, the existing bilingual spoken dialogue is used as the listening activity.
- Back navigation follows the same hierarchy: level -> lesson -> Kurs/Podcast/Test.


STUDENT TEST DIRECT ENTRY
- When a lesson has a standalone interactive test configured, clicking Test
  from the lesson hub opens the actual interactive test page immediately.
- Selecting that lesson from the Tests list also opens its standalone test
  directly, without the intermediate "Teste dein Wissen" card page.
- The intermediate category selector remains for lessons that do not have
  a standalone test and use the built-in category-based quiz.
- Closing the standalone test or using Back returns to the correct origin
  (lesson hub or Tests list).
- Existing test pages, Firebase result reporting, and access checks are kept.


COURSE DIALOG VISIBILITY
- The "Dialog üben" block and its "Dialog öffnen" button are shown in Kurs
  only for Lektion 1 (the first lesson).
- The dialog block is hidden from all other Kurs lessons.
- Other lesson features, course categories, podcasts, tests, Firebase paths,
  and the previously added direct-test navigation are unchanged.


ADMIN: INDIVIDUAL LESSON ACCESS INSIDE GROUPS
- In Admin > Groups > open a group, each student row has a "تحديد الدروس"
  action that opens a visual lesson-permission editor.
- The editor lists Lektion 1-10, with lesson names and A1.1/A1.2 labels.
- Checked lessons are open to that student; unchecked lessons are blocked.
- Saving writes the student's own lessonAccess map to
  deutschA1/users/<uid>/lessonAccess in Firebase.
- A student's explicit lessonAccess takes precedence over the group's
  lessonAccess, allowing the admin to unlock or block lessons for one student.
- "إعدادات المجموعة" removes the individual override so the student inherits
  the group's lesson permissions again.
- This uses the existing admin Firebase write permission for user profiles;
  no database rules or other students' settings need to be changed.


ADMIN RESULTS: STAGE AND EXERCISE ANALYTICS
- Admin > Results filters by group, student, Lektion and content type (Kurs,
  Podcast, Test).
- Test reports now show the five stages (where available) and every exercise
  inside each stage, including points, percentage and a status label.
- Stage averages and individual exercise scores are used to identify weak
  stages and exercises below 60%, for individual students and whole groups.
- Embedded lesson tests send their stage names and exercise labels with the
  score data, so the report can show the original labels.
- The built-in vocabulary test now saves a score for each question as well.
- Kurs and Podcast filters show learning time by lesson and a per-student time
  table. Time is accumulated from the activity tracking system.
- Embedded test attempts are counted once per test session, even though
  progress is saved after each exercise.
- Older records that contain only an overall test score cannot be expanded
  retroactively into question/exercise-level scores. Detailed analysis is
  available for records that already contain scores, and for tests completed
  after this update.


ADMIN TEST VISITS + EXERCISE HEATMAP FIX
- Selecting a test stage is now recorded immediately.
- Opening an exercise is recorded immediately, even if the student leaves
  without completing it.
- The report distinguishes: not opened, opened but unfinished, completed,
  and scored/weak.
- Exercise time is accumulated while the student is inside each exercise.
- Admin > Results now includes the Question Performance Heatmap with
  View Performance and Time taken modes for individual students and groups.
- Visit-only activity is not treated as a 0% score.
- The detailed tracking is enabled for the embedded staged tests in
  Lektionen 6, 7, 8 and 9.
- Previously untracked visits cannot be reconstructed retroactively; visits
  from this update onward are recorded.


Deutsch A1 – Professional Stage & Exercise Dashboard

تم تحديث عرض نتائج المراحل والتمارين في لوحة الإدارة.

التغييرات:
- تصميم Dashboard منظم لكل Stage.
- بطاقات ملخص: المراحل المفتوحة، التمارين المفتوحة، النتائج المصححة، ونقاط الضعف.
- كل Stage قابلة للفتح والإغلاق.
- كل تمرين يظهر في بطاقة مستقلة مع النسبة، النقاط، الوقت، وحالة الدخول/الإكمال.
- دعم التقارير الفردية وتقارير المجموعة.
- تصميم متجاوب للهاتف والكمبيوتر.
- لم يتم تغيير Firebase Rules أو بنية تخزين النتائج أو تسجيل الدخول.

طريقة التثبيت:
1. فك ضغط ملف Patch.
2. استبدل الملفات الموجودة في مشروعك بنفس المسارات:
   js/app.js
   css/style.css
3. ارفع الملفين إلى الاستضافة بنفس المسارات.
4. حدّث المتصفح تحديثاً إجبارياً (Ctrl + Shift + R).

النسخة الكاملة ZIP تتضمن المشروع كاملاً بعد التحديث.

ملاحظة:
هذا التحديث خاص بتصميم عرض النتائج. يعتمد على بيانات Stufen والتمارين الموجودة في Firebase/نتائج الطلبة. لا يمكنه إنشاء نتائج تاريخية لم تكن مسجلة سابقاً.
