ربط اختبارات HTML المضافة من Admin بصفحة النتائج

ما الذي تغير؟
- عند فتح HTML مضاف إلى Admin ضمن قسم Test، يضيف التطبيق جسر نتائج داخل iframe.
- الاختبارات التي تستعمل الدالة finish(id, correct, total) الموجودة في ملفات الاختبارات الحالية يتم رصدها تلقائياً.
- النتيجة تحفظ باستخدام نظام نتائج الطلاب الحالي، وترتبط بعنوان الاختبار ورقم الدرس ومعرّف الملف.
- تظهر النتيجة في صفحة نتائج الطالب، وفي جدول نتائج Admin، وتدخل ضمن تحليلات الاختبارات الخاصة بالدرس.
- كل مرة يفتح الطالب الاختبار تبدأ محاولة جديدة. التحديثات المتكررة داخل نفس المحاولة لا تزيد عدد المحاولات.

للاختبارات HTML التي لا تستعمل finish(id, correct, total):
أضف هذا السطر بعد حساب النتيجة النهائية:
window.DeutschA1Results.submit({ points: score, maxPoints: total });

ويمكن تمرير تفاصيل إضافية:
window.DeutschA1Results.submit({
  points: score,
  maxPoints: total,
  completedExercises: 8,
  totalExercises: 8,
  scores: {
    exercise1: { correct: 4, total: 5 },
    exercise2: { correct: 3, total: 3 }
  },
  scoreTotals: { exercise1: 5, exercise2: 3 },
  completed: { exercise1: true, exercise2: true },
  exerciseLabels: { exercise1: "Wortschatz", exercise2: "Grammatik" }
});

ملاحظات:
- الربط التلقائي يعمل لملفات HTML التفاعلية. PDF والصور والصوت لا تحتوي على نتيجة قابلة للتنقيط تلقائياً.
- ملفات HTML التي تستعمل finish بمعاملات مختلفة أو تستعمل JavaScript modules تحتاج إلى استدعاء DeutschA1Results.submit يدوياً عند انتهاء الاختبار.
- لا حاجة لتغيير Firebase Rules أو Supabase أو SQL؛ يستعمل الربط مسار النتائج الموجود في التطبيق.
- النتائج تحفظ في صفحة الطالب وAdmin. ترتيب المنافسة لا يتغير تلقائياً إلا إذا ربط الاختبار بنظام المنافسة نفسه.
