Deutsch A1 — إصلاح توليد رمز المنافسة (Supabase)

شنو تصلّح؟
- Edge Function دابا فيها بنك أسئلة Tests ديال L1..L10 مباشرة داخل index.ts: ما بقاتش تحتاج competition.json أو competition-bank.json.
- التعامل مع Supabase legacy service_role ومفتاح sb_secret الجديد معاد للوضوح.
- إضافة log مراحل إنشاء الغرفة بلا عرض مفاتيح أو بيانات شخصية.
- واجهة التلميذ تعرض Popup برمز الغرفة الحقيقي من السيرفر بعد نجاح الحفظ.
- في حالة الفشل، Popup كيبيّن سبب الخطأ والكود لتسهيل التشخيص بلا تخمين.
- باقي المنافسة، اختبارات الدروس، Firebase Auth والنقط باقين كما كانو.

التركيب بلا Terminal:
1) Supabase Dashboard > Edge Functions > competition > Code.
2) افتح index.ts وبدّل المحتوى كامل بمحتوى EdgeFunction_index.ts من هاد ZIP.
3) اضغط Deploy. ما تحتاجش ترفع competition.json؛ بنك الأسئلة داخل index.ts.
4) Settings > Verify JWT with legacy secret: خليه OFF (الوظيفة كتتحقق من Firebase ID token بنفسها).
5) فالمنصة، بدّل js/app.js و css/style.css من ZIP، ومن بعد Refresh قوي (Cmd+Shift+R).
6) جرّب إنشاء غرفة بحساب تلميذ Firebase حقيقي.

مهم:
- ما تولّدش رمز عشوائي في المتصفح لأن التلميذ الثاني ما غاديش يقدر يدخل به إذا ما تسجلاتش الغرفة على Supabase.
- ما تبدلش SQL ولا Firebase Database Rules بسبب هاد التحديث.
- إذا تفتح Popup فيه خطأ، انسخ تفاصيل الخطأ وصيفط ليا النص أو Screenshot من Supabase > Edge Functions > competition > Logs.
- ما تشاركش secret/service_role key ولا Firebase ID token.
- الملفات صلحات محلياً؛ النشر الفعلي والاتصال الحي بـ Supabase خاص يتحقق من حسابك.
