تحديث صفحات أقسام الدرس – Kurs / Test / Podcast / Sprechen

تم ربط بطاقات الدرس الأربع بصفحات HTML مستقلة تفتح بملء الشاشة:
- Kurs: pages/Kurs/lektion-N-kurs.html
- Test: pages/Test/lektion-N-test.html
- Podcast: pages/Podcast/lektion-N-podcast.html
- Sprechen: pages/Sprechen/lektion-N-sprechen.html

N هو رقم الدرس من 1 إلى 10.

تمت إضافة جميع الصفحات الأربعين إلى Admin > محرر صفحات HTML، ومقسمة حسب القسم.
صفحات Test للدروس 7 و8 و9 نُسخت من الاختبارات الموجودة سابقاً. صفحات Podcast للدروس التي لها ملفات صوتية تعرض روابط الملفات الحالية. باقي الصفحات فيها قالب جاهز للتحرير من Admin.

عند ضغط الطالب على أي قسم داخل الدرس، تفتح صفحة HTML المستقلة مباشرة بملء الشاشة مع زر رجوع للدرس.
لا يتم حفظ ملفات HTML في Firebase. الحفظ المباشر يتم محلياً داخل مجلد المشروع بعد اختيار مجلد المشروع من Admin.
ملف js/test-page-routes.js أصبح محملاً من index.html حتى تعمل روابط الاختبارات التي يحددها Admin.
