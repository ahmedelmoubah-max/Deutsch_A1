
const categoryMeta = {
  "Verben": {icon:"⚡", desc:"Wichtige Tätigkeitswörter"},
  "Nomen": {icon:"🧩", desc:"Wörter mit der richtigen Begleitung"},
  "Adjektive": {icon:"🎨", desc:"Eigenschaften und Beschreibungen"},
  "Präpositionen": {icon:"🧭", desc:"Wo? Wohin? Mit wem?"},
  "Grammatik": {icon:"📘", desc:"Regeln einfach verstehen"}
};
const standaloneLessonTests = {
  5: { title: "Meine Stadt, meine Wohnung", file: "pages/Test/lektion-6-test.html", description: "اختبار تفاعلي خاص بالدرس 6", icon: "🏙️" },
  6: { title: "Wie, wo und wann?", file: "pages/Test/lektion-7-test.html", description: "اختبار تفاعلي خاص بالدرس 7", icon: "🗓️" },
  7: { title: "Unterwegs", file: "pages/Test/lektion-8-test.html", description: "اختبار تفاعلي خاص بالدرس 8", icon: "🚌" },
  8: { title: "Unter Freunden – Der Flohmarkt", file: "pages/Test/lektion-9-test.html", description: "اختبار تفاعلي خاص بالدرس 9", icon: "🛍️" }
};

function getAdminTestPageRoutes(){
  const projectRoutes = window.DEUTSCH_A1_TEST_PAGE_ROUTES;
  if(projectRoutes && typeof projectRoutes === "object" && !Array.isArray(projectRoutes)) return projectRoutes;
  try{
    const routes = JSON.parse(localStorage.getItem(ADMIN_TEST_PAGE_ROUTES_KEY) || "{}");
    return routes && typeof routes === "object" && !Array.isArray(routes) ? routes : {};
  }catch(error){return {};}
}
async function saveAdminTestPageRoute(lessonNo,path){
  if(!adminPagesRootDirectoryHandle) throw new Error("اختار مجلد المشروع أولاً باش يتحفظ الربط داخل js/ بلا Firebase.");
  const routes = {...getAdminTestPageRoutes(), [String(lessonNo)]:path};
  const jsDirectory = await adminPagesRootDirectoryHandle.getDirectoryHandle("js",{create:true});
  const routeFile = await jsDirectory.getFileHandle("test-page-routes.js",{create:true});
  const writable = await routeFile.createWritable();
  await writable.write("window.DEUTSCH_A1_TEST_PAGE_ROUTES = "+JSON.stringify(routes,null,2)+";\n");
  await writable.close();
  window.DEUTSCH_A1_TEST_PAGE_ROUTES = routes;
  try{localStorage.setItem(ADMIN_TEST_PAGE_ROUTES_KEY,JSON.stringify(routes));}catch(error){}
  return routes;
}
function getLessonTestPage(lessonIndex){
  const lessonNo = Number(lessonIndex) + 1;
  const routes = getAdminTestPageRoutes();
  const assignedPath = normalizeManagedPagePath(routes[String(lessonNo)] || "");
  const path = assignedPath || `pages/Test/lektion-${lessonNo}-test.html`;
  const definition = managedPageDefinition(path) || managedPageMetaForPath(path);
  return {
    title: definition?.title || `Lektion ${lessonNo} – Test`,
    file: path,
    description: "اختبار HTML مستقل",
    icon: "📝"
  };
}
const interactiveLessonPosters = {
  5: { title: "Meine Stadt, meine Wohnung", file: "pages/Kurs/lektion-6-kurs.html", description: "Orte in der Stadt, Zimmer und Wohnung – interaktive Lernkarte", icon: "🏙️" },
  6: { title: "Wie, wo und wann?", file: "pages/Kurs/lektion-7-kurs.html", description: "Wetter, Jahreszeiten, Monate und Zeitangaben – interaktive Lernkarte", icon: "🌦️" },
  7: { title: "Unterwegs", file: "pages/Kurs/lektion-8-kurs.html", description: "Verkehrsmittel, Orientierung und unterwegs sein – interaktive Lernkarte", icon: "🚌" },
  8: { title: "Unter Freunden – Der Flohmarkt", file: "pages/Kurs/lektion-9-kurs.html", description: "Wortschatz rund um Flohmarkt, Preise und Einkaufen – interaktive Lernkarte", icon: "🛍️" }
};
const lessons = [
{ name:"Hallo & Herkunft", data:{
"Verben":[["heißen","يُدعى / اسمه","Ich heiße Sara.","👋"],["kommen","يأتي / ينحدر من","Ich komme aus Marokko.","🌍"],["sprechen","يتحدث","Ich spreche Deutsch.","🗣️"],["sein","يكون","Ich bin Sara. / Du bist nett.","✨"],["haben","يملك / عنده","Ich habe ein Buch. / Du hast Zeit.","📘"]],
"Nomen":[["der Name","الاسم","Mein Name ist Ali.","🪪"],["das Land","البلد","Marokko ist mein Land.","🌍"],["die Sprache","اللغة","Deutsch ist eine Sprache.","💬"]],
"Adjektive":[["freundlich","ودود","Sie ist sehr freundlich.","😊"],["neu","جديد","Ich bin neu hier.","✨"],["gut","جيد","Mir geht es gut.","👍"]],
"Präpositionen":[["aus","من","Ich komme aus Marokko.","🧳"],["in","في","Ich wohne in Rabat.","📍"],["mit","مع","Ich lerne mit Sara.","🤝"]],
"Grammatik":[["sein – ich bin","تصريف sein: أنا أكون","Ich bin Sara.","📘"],["W-Fragen","أسئلة مثل: Wie? Wo?","Wie heißt du?","❓"],["Personalpronomen","ضمائر الفاعل","Ich bin hier. Du bist hier.","👥"]]}},
{ name:"Familie", data:{
"Verben":[
["heißen","يُسمّى / اسمه","Meine Mutter heißt Amina.","👋"],
["haben","يملك / عنده","Ich habe einen Bruder und eine Schwester.","👨‍👩‍👧"],
["sein","يكون","Mein Vater ist freundlich.","✨"],
["wohnen","يسكن","Ich wohne mit meiner Familie in Tanger.","🏠"],
["leben","يعيش","Meine Großeltern leben in Marokko.","🌱"],
["besuchen","يزور","Wir besuchen unsere Großmutter am Sonntag.","🚶"],

["lieben","يحب","Ich liebe meine Familie.","❤️"]
],
"Nomen":[
["die Familie","العائلة","Meine Familie ist groß.","👨‍👩‍👧"],
["die Mutter","الأم","Meine Mutter heißt Amina.","👩"],
["der Vater","الأب","Mein Vater arbeitet in einer Firma.","👨"],
["die Eltern","الوالدان","Meine Eltern wohnen in Tanger.","🏡"],
["der Bruder","الأخ","Mein Bruder ist 18 Jahre alt.","🧑"],
["die Schwester","الأخت","Meine Schwester lernt Deutsch.","👧"],
["die Geschwister","الإخوة والأخوات","Ich habe drei Geschwister.","👫"],
["die Großmutter","الجدة","Meine Großmutter kocht sehr gut.","👵"],
["der Großvater","الجد","Mein Großvater ist sehr nett.","👴"],
["die Großeltern","الجدان","Ich besuche meine Großeltern.","🏠"],
["der Sohn","الابن","Ihr Sohn ist noch klein.","👦"],
["die Tochter","الابنة","Ihre Tochter heißt Sara.","👧"],
["der Onkel","العم / الخال","Mein Onkel wohnt in Rabat.","👨‍🦱"],
["die Tante","العمة / الخالة","Meine Tante ist freundlich.","👩‍🦱"],
["der Cousin","ابن العم / الخال","Mein Cousin spielt Fußball.","⚽"],
["die Cousine","بنت العم / الخال","Meine Cousine ist 20 Jahre alt.","🌷"],
["der Enkel","الحفيد","Mein Enkel ist fünf Jahre alt.","👦"],
["die Enkelin","الحفيدة","Meine Enkelin heißt Sara.","👧"]
],
"Adjektive":[
["jung","شاب / صغير السن","Meine Schwester ist jung.","🌱"],
["alt","كبير في السن","Mein Großvater ist 70 Jahre alt.","🧓"],
["nett","لطيف","Mein Bruder ist nett.","😊"],
["freundlich","ودود","Meine Tante ist freundlich.","🌼"],
["verheiratet","متزوج","Meine Eltern sind verheiratet.","💍"],
["ledig","أعزب / عزباء","Mein Onkel ist ledig.","🙂"],
["groß","كبير","Meine Familie ist groß.","👨‍👩‍👧‍👦"],
["klein","صغير","Meine Familie ist klein.","🏡"],
["zusammen","معاً","Wir essen zusammen.","🍽️"]
],
"Präpositionen":[
["mit","مع","Ich wohne mit meiner Familie.","🤝"],
["bei","عند / لدى","Ich wohne bei meinen Eltern.","🏡"],
["von","من / ديال","Das ist ein Foto von meiner Mutter.","📷"],
["zu","إلى / عند","Am Sonntag gehe ich zu meiner Oma.","➡️"],
["für","من أجل","Das Geschenk ist für meinen Vater.","🎁"]
],
"Grammatik":[
["mein / meine","أداة الملكية: ديالي","Das ist mein Vater. Das ist meine Mutter.","🔑"],
["dein / deine","أداة الملكية: ديالك","Ist das deine Schwester?","❓"],
["haben","تصريف haben","Ich habe zwei Brüder. Du hast eine Schwester.","📘"],
["Plural","صيغة الجمع","ein Bruder – zwei Brüder; eine Schwester – zwei Schwestern.","👥"],
["Possessivartikel","أدوات الملكية","Meine Eltern, dein Bruder, seine Schwester.","🧩"]
]}} ,
{ name:"Wohnen", data:{
"Verben":[["wohnen","يسكن","Ich wohne in einer Wohnung.","🏠"],["suchen","يبحث عن","Wir suchen ein Zimmer.","🔎"],["stehen","يقف / يوجد","Der Tisch steht hier.","🪑"]],
"Nomen":[["die Wohnung","الشقة","Die Wohnung ist schön.","🏢"],["das Zimmer","الغرفة","Mein Zimmer ist klein.","🛏️"],["der Tisch","الطاولة","Das Buch liegt auf dem Tisch.","🪑"]],
"Adjektive":[["groß","كبير","Die Wohnung ist groß.","🏡"],["klein","صغير","Das Zimmer ist klein.","📦"],["hell","مضيء","Die Küche ist hell.","☀️"]],
"Präpositionen":[["auf","فوق","Das Buch liegt auf dem Tisch.","⬆️"],["unter","تحت","Die Tasche ist unter dem Tisch.","⬇️"],["neben","بجانب","Der Stuhl steht neben dem Bett.","↔️"]],
"Grammatik":[["ein / eine","أداة نكرة","Das ist ein Tisch. Das ist eine Lampe.","📘"],["kein / keine","النفي مع الأسماء","Ich habe kein Auto.","🚫"],["es gibt","يوجد / كاين","In der Wohnung gibt es zwei Zimmer.","🏠"]]}},
{ name:"Essen und Trinken", data:{
"Verben":[["essen","يأكل","Ich esse gern Brot.","🍞"],["trinken","يشرب","Ich trinke Wasser.","🥛"],["kochen","يطبخ","Wir kochen zusammen.","🍳"]],
"Nomen":[["das Brot","الخبز","Das Brot ist frisch.","🍞"],["das Wasser","الماء","Ein Glas Wasser, bitte.","💧"],["der Apfel","التفاحة","Der Apfel ist rot.","🍎"]],
"Adjektive":[["lecker","لذيذ","Die Suppe ist lecker.","😋"],["warm","دافئ / ساخن","Der Tee ist warm.","☕"],["kalt","بارد","Das Wasser ist kalt.","🧊"]],
"Präpositionen":[["mit","مع / ب","Ich trinke Tee mit Milch.","🥛"],["ohne","بدون","Kaffee ohne Zucker, bitte.","☕"],["für","لأجل","Das ist für dich.","🎁"]],
"Grammatik":[["möchten","أودّ / بغيت","Ich möchte einen Tee.","📘"],["Akkusativ","حالة المفعول به","Ich esse einen Apfel.","🍎"],["gern","بكل سرور / كنحب","Ich trinke gern Kaffee.","☕"]]}},
{ name:"Mein Alltag", data:{
"Verben":[["arbeiten","يعمل","Ich arbeite von Montag bis Freitag.","💼"],["lernen","يتعلم","Wir lernen Deutsch.","📚"],["schlafen","ينام","Ich schlafe acht Stunden.","🌙"]],
"Nomen":[["der Tag","اليوم","Mein Tag beginnt früh.","🌤️"],["die Uhr","الساعة","Die Uhr ist neu.","🕒"],["der Morgen","الصباح","Am Morgen trinke ich Tee.","🌅"]],
"Adjektive":[["früh","مبكراً","Ich stehe früh auf.","🌅"],["spät","متأخراً","Heute komme ich spät.","🌙"],["müde","نعسان / عيان","Am Abend bin ich müde.","😴"]],
"Präpositionen":[["um","على الساعة","Der Kurs beginnt um neun Uhr.","🕘"],["am","في يوم / صباح","Am Montag arbeite ich.","📅"],["von … bis","من … حتى","Ich arbeite von acht bis vier.","⏰"]],
"Grammatik":[["trennbare Verben","الأفعال المنفصلة","Ich stehe um sieben Uhr auf.","📘"],["Präsens","زمن الحاضر","Ich lerne jeden Tag.","✍️"],["müssen","خاصني / يجب","Ich muss heute arbeiten.","📌"]]}},
{ name:"Freizeit & Hobbys", data:{
"Verben":[["spielen","يلعب","Ich spiele gern Fußball.","⚽"],["schwimmen","يسبح","Wir schwimmen am Samstag.","🏊"],["lesen","يقرأ","Sie liest ein Buch.","📖"]],
"Nomen":[["das Hobby","الهواية","Mein Hobby ist Musik.","🎸"],["der Sport","الرياضة","Sport macht Spaß.","🏀"],["das Buch","الكتاب","Das Buch ist interessant.","📚"]],
"Adjektive":[["interessant","مثير للاهتمام","Der Film ist interessant.","🎬"],["langweilig","ممل","Die Sendung ist langweilig.","🥱"],["aktiv","نشيط","Er ist sehr aktiv.","🏃"]],
"Präpositionen":[["nach","بعد / إلى","Nach der Arbeit lese ich.","📖"],["am","في يوم","Am Wochenende spiele ich Tennis.","🎾"],["um","على الساعة","Wir treffen uns um sechs.","🕕"]],
"Grammatik":[["können","يستطيع","Ich kann gut schwimmen.","📘"],["gern","كنحب ندير شي حاجة","Ich lese gern.","❤️"],["Verbposition","مكان الفعل","Heute spiele ich Fußball.","🔤"]]}},
{ name:"Einkaufen", data:{
"Verben":[["kaufen","يشتري","Ich kaufe Gemüse.","🛒"],["kosten","يكلّف / ثمنه","Wie viel kostet das?","💶"],["bezahlen","يؤدي / يخلّص","Ich bezahle bar.","💳"]],
"Nomen":[["der Preis","الثمن","Der Preis ist gut.","🏷️"],["die Tasche","الحقيبة","Die Tasche ist blau.","👜"],["das Geschäft","المتجر","Das Geschäft ist offen.","🏬"]],
"Adjektive":[["billig","رخيص","Das Brot ist billig.","🏷️"],["teuer","غالي","Die Jacke ist teuer.","💸"],["offen","مفتوح","Der Laden ist offen.","🚪"]],
"Präpositionen":[["für","من أجل","Das Geschenk ist für dich.","🎁"],["bei","عند / لدى","Ich kaufe bei diesem Händler.","🏪"],["in","في","Ich bin in einem Geschäft.","📍"]],
"Grammatik":[["Wie viel kostet …?","بشحال …؟","Wie viel kostet der Apfel?","📘"],["Akkusativ","المفعول به","Ich kaufe einen Pullover.","🛍️"],["Mengen","الكميات","Ein Kilo Äpfel, bitte.","⚖️"]]}},
{ name:"Arbeit & Beruf", data:{
"Verben":[["arbeiten","يعمل","Ich arbeite in einer Firma.","💼"],["suchen","يبحث","Ich suche eine Arbeit.","🔎"],["verdienen","يكسب المال","Sie verdient gut.","💶"]],
"Nomen":[["der Beruf","المهنة","Was ist dein Beruf?","🧑‍🔧"],["die Firma","الشركة","Die Firma ist in Berlin.","🏢"],["der Kollege","الزميل","Mein Kollege ist freundlich.","🤝"]],
"Adjektive":[["beschäftigt","مشغول","Heute bin ich beschäftigt.","📅"],["arbeitslos","عاطل عن العمل","Er ist gerade arbeitslos.","🧭"],["pünktlich","في الوقت","Sie ist immer pünktlich.","⏱️"]],
"Präpositionen":[["bei","لدى / في","Ich arbeite bei einer Firma.","🏢"],["als","بصفته / كـ","Ich arbeite als Fahrer.","🚚"],["seit","منذ","Ich lerne seit einem Jahr Deutsch.","📆"]],
"Grammatik":[["als + Beruf","العمل كمهنة","Ich arbeite als Fahrer.","📘"],["bei + Firma","العمل لدى شركة","Er arbeitet bei Siemens.","🏢"],["möchten","أرغب في","Ich möchte mich bewerben.","✉️"]]}},
{ name:"Stadt & Verkehr", data:{
"Verben":[["fahren","يسوق / يذهب بوسيلة نقل","Ich fahre mit dem Bus.","🚌"],["gehen","يمشي / يذهب","Ich gehe zum Bahnhof.","🚶"],["abbiegen","ينعطف","Biegen Sie links ab.","↩️"]],
"Nomen":[["die Straße","الشارع","Die Straße ist lang.","🛣️"],["der Bahnhof","محطة القطار","Der Bahnhof ist hier.","🚉"],["der Bus","الحافلة","Der Bus kommt gleich.","🚌"]],
"Adjektive":[["nah","قريب","Der Bahnhof ist nah.","📍"],["weit","بعيد","Die Schule ist weit.","🗺️"],["schnell","سريع","Der Zug ist schnell.","🚄"]],
"Präpositionen":[["zu","إلى","Ich gehe zum Arzt.","➡️"],["nach","إلى مدينة / بلد","Wir fahren nach Berlin.","🚆"],["an","عند / على","Die Haltestelle ist an der Ecke.","🚏"]],
"Grammatik":[["mit + Dativ","مع وسيلة النقل","Ich fahre mit dem Bus.","📘"],["Imperativ","صيغة الأمر","Gehen Sie geradeaus.","➡️"],["Weg fragen","السؤال عن الطريق","Wie komme ich zum Bahnhof?","🗺️"]]}},
{ name:"Gesundheit & Termine", data:{
"Verben":[["brauchen","يحتاج","Ich brauche einen Termin.","📅"],["helfen","يساعد","Der Arzt hilft mir.","🩺"],["warten","ينتظر","Ich warte im Wartezimmer.","⏳"]],
"Nomen":[["der Arzt","الطبيب","Der Arzt ist freundlich.","🩺"],["der Termin","الموعد","Mein Termin ist um zehn Uhr.","📅"],["der Kopf","الرأس","Mein Kopf tut weh.","🤕"]],
"Adjektive":[["krank","مريض","Heute bin ich krank.","🤒"],["gesund","بصحة جيدة","Obst ist gesund.","🍎"],["frei","فارغ / متاح","Ist morgen ein Termin frei?","🗓️"]],
"Präpositionen":[["zum","إلى الـ","Ich gehe zum Arzt.","➡️"],["seit","منذ","Ich bin seit zwei Tagen krank.","📆"],["um","على الساعة","Der Termin ist um elf Uhr.","🕚"]],
"Grammatik":[["sollen","ينبغي / خاص","Sie sollen viel Wasser trinken.","📘"],["Schmerzen haben","عنده ألم","Ich habe Kopfschmerzen.","🤕"],["Imperativ","صيغة الأمر","Nehmen Sie bitte Platz.","🪑"]]}}
];


const verbConjugations = {
  "heißen": ["heiße", "heißt", "heißt", "heißen", "heißt", "heißen"],
  "kommen": ["komme", "kommst", "kommt", "kommen", "kommt", "kommen"],
  "sprechen": ["spreche", "sprichst", "spricht", "sprechen", "sprecht", "sprechen"],
  "sein": ["bin", "bist", "ist", "sind", "seid", "sind"],
  "haben": ["habe", "hast", "hat", "haben", "habt", "haben"],
  "wohnen": ["wohne", "wohnst", "wohnt", "wohnen", "wohnt", "wohnen"],
  "leben": ["lebe", "lebst", "lebt", "leben", "lebt", "leben"],
  "besuchen": ["besuche", "besuchst", "besucht", "besuchen", "besucht", "besuchen"],
  "suchen": ["suche", "suchst", "sucht", "suchen", "sucht", "suchen"],
  "stehen": ["stehe", "stehst", "steht", "stehen", "steht", "stehen"],
  "essen": ["esse", "isst", "isst", "essen", "esst", "essen"],
  "trinken": ["trinke", "trinkst", "trinkt", "trinken", "trinkt", "trinken"],
  "kochen": ["koche", "kochst", "kocht", "kochen", "kocht", "kochen"],
  "arbeiten": ["arbeite", "arbeitest", "arbeitet", "arbeiten", "arbeitet", "arbeiten"],
  "lernen": ["lerne", "lernst", "lernt", "lernen", "lernt", "lernen"],
  "schlafen": ["schlafe", "schläfst", "schläft", "schlafen", "schlaft", "schlafen"],
  "spielen": ["spiele", "spielst", "spielt", "spielen", "spielt", "spielen"],
  "schwimmen": ["schwimme", "schwimmst", "schwimmt", "schwimmen", "schwimmt", "schwimmen"],
  "lesen": ["lese", "liest", "liest", "lesen", "lest", "lesen"],
  "kaufen": ["kaufe", "kaufst", "kauft", "kaufen", "kauft", "kaufen"],
  "kosten": ["koste", "kostest", "kostet", "kosten", "kostet", "kosten"],
  "bezahlen": ["bezahle", "bezahlst", "bezahlt", "bezahlen", "bezahlt", "bezahlen"],
  "verdienen": ["verdiene", "verdienst", "verdient", "verdienen", "verdient", "verdienen"],
  "fahren": ["fahre", "fährst", "fährt", "fahren", "fahrt", "fahren"],
  "gehen": ["gehe", "gehst", "geht", "gehen", "geht", "gehen"],
  "abbiegen": ["biege ... ab", "biegst ... ab", "biegt ... ab", "biegen ... ab", "biegt ... ab", "biegen ... ab"],
  "brauchen": ["brauche", "brauchst", "braucht", "brauchen", "braucht", "brauchen"],
  "helfen": ["helfe", "hilfst", "hilft", "helfen", "helft", "helfen"],
  "lieben": ["liebe", "liebst", "liebt", "lieben", "liebt", "lieben"],
  "warten": ["warte", "wartest", "wartet", "warten", "wartet", "warten"]
};
const verbExamples = {
  "heißen": ["Ich heiße Sara.", "Du heißt Ali.", "Er heißt Omar.", "Wir heißen Sara und Ali.", "Ihr heißt Sara und Ali.", "Sie heißen Sara und Ali."],
  "kommen": ["Ich komme aus Marokko.", "Du kommst aus Marokko.", "Er kommt aus Marokko.", "Wir kommen aus Marokko.", "Ihr kommt aus Marokko.", "Sie kommen aus Marokko."],
  "sprechen": ["Ich spreche Deutsch.", "Du sprichst Deutsch.", "Er spricht Deutsch.", "Wir sprechen Deutsch.", "Ihr sprecht Deutsch.", "Sie sprechen Deutsch."],
  "sein": ["Ich bin müde.", "Du bist freundlich.", "Er ist zu Hause.", "Wir sind Freunde.", "Ihr seid pünktlich.", "Sie sind hier."],
  "haben": ["Ich habe ein Buch.", "Du hast einen Stift.", "Er hat eine Tasche.", "Wir haben heute Deutschunterricht.", "Ihr habt heute Zeit.", "Sie haben eine Frage."],
  "wohnen": ["Ich wohne in Rabat.", "Du wohnst in Rabat.", "Er wohnt in Rabat.", "Wir wohnen in Rabat.", "Ihr wohnt in Rabat.", "Sie wohnen in Rabat."],
  "leben": ["Ich lebe in Marokko.", "Du lebst in Marokko.", "Er lebt in Marokko.", "Wir leben in Marokko.", "Ihr lebt in Marokko.", "Sie leben in Marokko."],
  "besuchen": ["Ich besuche meine Familie.", "Du besuchst deine Familie.", "Er besucht seine Familie.", "Wir besuchen unsere Familie.", "Ihr besucht eure Familie.", "Sie besuchen ihre Familie."],
  "suchen": ["Ich suche eine Wohnung.", "Du suchst eine Wohnung.", "Er sucht eine Wohnung.", "Wir suchen eine Wohnung.", "Ihr sucht eine Wohnung.", "Sie suchen eine Wohnung."],
  "stehen": ["Ich stehe an der Haltestelle.", "Du stehst an der Haltestelle.", "Er steht an der Haltestelle.", "Wir stehen an der Haltestelle.", "Ihr steht an der Haltestelle.", "Sie stehen an der Haltestelle."],
  "essen": ["Ich esse gern Brot.", "Du isst gern Brot.", "Er isst gern Brot.", "Wir essen gern Brot.", "Ihr esst gern Brot.", "Sie essen gern Brot."],
  "trinken": ["Ich trinke Wasser.", "Du trinkst Wasser.", "Er trinkt Wasser.", "Wir trinken Wasser.", "Ihr trinkt Wasser.", "Sie trinken Wasser."],
  "kochen": ["Ich koche heute Abend.", "Du kochst heute Abend.", "Er kocht heute Abend.", "Wir kochen heute Abend.", "Ihr kocht heute Abend.", "Sie kochen heute Abend."],
  "arbeiten": ["Ich arbeite in einer Firma.", "Du arbeitest in einer Firma.", "Er arbeitet in einer Firma.", "Wir arbeiten in einer Firma.", "Ihr arbeitet in einer Firma.", "Sie arbeiten in einer Firma."],
  "lernen": ["Ich lerne Deutsch.", "Du lernst Deutsch.", "Er lernt Deutsch.", "Wir lernen Deutsch.", "Ihr lernt Deutsch.", "Sie lernen Deutsch."],
  "schlafen": ["Ich schlafe acht Stunden.", "Du schläfst acht Stunden.", "Er schläft acht Stunden.", "Wir schlafen acht Stunden.", "Ihr schlaft acht Stunden.", "Sie schlafen acht Stunden."],
  "spielen": ["Ich spiele gern Fußball.", "Du spielst gern Fußball.", "Er spielt gern Fußball.", "Wir spielen gern Fußball.", "Ihr spielt gern Fußball.", "Sie spielen gern Fußball."],
  "schwimmen": ["Ich schwimme im Schwimmbad.", "Du schwimmst im Schwimmbad.", "Er schwimmt im Schwimmbad.", "Wir schwimmen im Schwimmbad.", "Ihr schwimmt im Schwimmbad.", "Sie schwimmen im Schwimmbad."],
  "lesen": ["Ich lese ein Buch.", "Du liest ein Buch.", "Er liest ein Buch.", "Wir lesen ein Buch.", "Ihr lest ein Buch.", "Sie lesen ein Buch."],
  "kaufen": ["Ich kaufe einen Apfel.", "Du kaufst einen Apfel.", "Er kauft einen Apfel.", "Wir kaufen einen Apfel.", "Ihr kauft einen Apfel.", "Sie kaufen einen Apfel."],
  "kosten": ["Ich koste zehn Euro pro Stunde.", "Du kostest zehn Euro pro Stunde.", "Er kostet zehn Euro pro Stunde.", "Wir kosten zehn Euro pro Stunde.", "Ihr kostet zehn Euro pro Stunde.", "Sie kosten zehn Euro pro Stunde."],
  "bezahlen": ["Ich bezahle die Rechnung.", "Du bezahlst die Rechnung.", "Er bezahlt die Rechnung.", "Wir bezahlen die Rechnung.", "Ihr bezahlt die Rechnung.", "Sie bezahlen die Rechnung."],
  "verdienen": ["Ich verdiene Geld.", "Du verdienst Geld.", "Er verdient Geld.", "Wir verdienen Geld.", "Ihr verdient Geld.", "Sie verdienen Geld."],
  "fahren": ["Ich fahre mit dem Bus zur Arbeit.", "Du fährst mit dem Bus zur Arbeit.", "Er fährt mit dem Bus zur Arbeit.", "Wir fahren mit dem Bus zur Arbeit.", "Ihr fahrt mit dem Bus zur Arbeit.", "Sie fahren mit dem Bus zur Arbeit."],
  "gehen": ["Ich gehe zur Schule.", "Du gehst zur Schule.", "Er geht zur Schule.", "Wir gehen zur Schule.", "Ihr geht zur Schule.", "Sie gehen zur Schule."],
  "abbiegen": ["Ich biege hier links ab.", "Du biegst hier links ab.", "Er biegt hier links ab.", "Wir biegen hier links ab.", "Ihr biegt hier links ab.", "Sie biegen hier links ab."],
  "brauchen": ["Ich brauche Hilfe.", "Du brauchst Hilfe.", "Er braucht Hilfe.", "Wir brauchen Hilfe.", "Ihr braucht Hilfe.", "Sie brauchen Hilfe."],
  "helfen": ["Ich helfe meiner Mutter.", "Du hilfst deiner Mutter.", "Er hilft seiner Mutter.", "Wir helfen unserer Mutter.", "Ihr helft eurer Mutter.", "Sie helfen ihrer Mutter."],
  "lieben": ["Ich liebe meine Familie.", "Du liebst deine Familie.", "Er liebt seine Familie.", "Wir lieben unsere Familie.", "Ihr liebt eure Familie.", "Sie lieben ihre Familie."],
  "warten": ["Ich warte auf den Bus.", "Du wartest auf den Bus.", "Er wartet auf den Bus.", "Wir warten auf den Bus.", "Ihr wartet auf den Bus.", "Sie warten auf den Bus."]
};

const pronouns = [
  ["ich", "أنا"], ["du", "أنت"], ["er / sie / es", "هو / هي"],
  ["wir", "نحن"], ["ihr", "أنتم"], ["sie / Sie", "هم / حضرتك"]
];

const dialogues = [{"title":"Hallo & Herkunft","intro":"Lerne, dich vorzustellen, nach dem Befinden, der Herkunft, dem Wohnort, dem Alter und den Sprachen zu fragen.","lines":[["Sara","Hallo! Ich heiße Sara. Wie heißt du?","سلام! سميتي سارة. شنو سميتك؟"],["Adam","Hallo Sara, ich heiße Adam. Wie geht's dir?","سلام سارة، سميتي آدم. كيداير؟"],["Sara","Mir geht's gut, danke. Und dir?","أنا بخير، شكراً. ونتا؟"],["Adam","Auch gut, danke. Woher kommst du?","حتى أنا بخير، شكراً. منين نتي؟"],["Sara","Ich komme aus Marokko, aus Tanger. Und du?","أنا من المغرب، من طنجة. ونتا؟"],["Adam","Ich komme aus Deutschland, aber ich wohne jetzt in Rabat.","أنا من ألمانيا، ولكن دابا ساكن فالرباط."],["Sara","Wo wohnst du genau?","فين ساكن بالضبط؟"],["Adam","Ich wohne in einer kleinen Wohnung im Zentrum.","ساكن فشقة صغيرة فالوسط ديال المدينة."],["Sara","Wie alt bist du?","شحال فعمرك؟"],["Adam","Ich bin 24 Jahre alt. Und du?","عندي 24 عام. ونتي؟"],["Sara","Ich bin 22 Jahre alt. Welche Sprachen sprichst du?","عندي 22 عام. شنو اللغات اللي كتهضر؟"],["Adam","Ich spreche Arabisch, Deutsch und ein bisschen Französisch.","كنهضر العربية والألمانية وشوية ديال الفرنسية."],["Sara","Sehr schön! Freut mich, dich kennenzulernen.","زوين! فرحانة بالتعارف معاك."],["Adam","Mich auch. Tschüss, bis bald!","حتى أنا. بالسلامة، حتى لمرة الجاية!"]]},{"title":"Meine Familie","intro":"Stelle deine Familie vor. Sprich über Eltern, Geschwister, Großeltern, Alter und Wohnort.","lines":[["Lina","Hallo Omar! Wie geht es dir?","سلام عمر! كيداير؟"],["Omar","Gut, danke. Und dir?","بخير، شكراً. ونتي؟"],["Lina","Auch gut. Wie groß ist deine Familie?","حتى أنا بخير. شحال كبيرة العائلة ديالك؟"],["Omar","Wir sind sechs Personen: meine Eltern, meine drei Geschwister und ich.","حنا ستة: الوالدين، وثلاثة ديال الخوت وأنا."],["Lina","Wie heißt deine Mutter?","شنو سميت الوالدة ديالك؟"],["Omar","Meine Mutter heißt Amina und mein Vater heißt Hassan.","الوالدة سميتها أمينة والوالد سميتو حسن."],["Lina","Hast du Brüder oder Schwestern?","واش عندك خوت ولا خواتات؟"],["Omar","Ich habe zwei Brüder und eine Schwester. Meine Schwester heißt Salma.","عندي جوج ديال الخوت وخت وحدة. ختي سميتها سلمى."],["Lina","Wie alt ist Salma?","شحال فعمر سلمى؟"],["Omar","Sie ist 16 Jahre alt. Mein älterer Bruder ist 22.","عندها 16 عام. خويا الكبير عندو 22 عام."],["Lina","Wohnst du bei deinen Eltern?","واش ساكن مع الوالدين ديالك؟"],["Omar","Ja, wir wohnen zusammen in Tanger. Meine Großeltern wohnen in Tétouan.","إيه، ساكنين مجموعين فطنجة. الجدود ساكنين فتطوان."],["Lina","Besuchst du deine Großeltern oft?","واش كتزور الجدود بزاف؟"],["Omar","Ja, wir besuchen sie jeden Sonntag. Wir essen zusammen und sprechen viel.","إيه، كنزوروهم كل نهار الأحد. كناكلو مجموعين وكنهضرو بزاف."],["Lina","Das ist schön. Familie ist sehr wichtig!","هادي حاجة زوينة. العائلة مهمة بزاف!"],["Omar","Ja, ich liebe meine Familie. Bis bald, Lina!","إيه، كنبغي العائلة ديالي. حتى لمرة الجاية لينا!"]]},{"title":"Meine Wohnung","intro":"Beschreibe eine Wohnung, frage nach Zimmern und übe Ortsangaben mit auf, unter und neben.","lines":[["Mina","Hallo! Suchst du eine Wohnung?","سلام! واش كتقلب على شقة؟"],["Youssef","Ja, ich suche eine kleine Wohnung in der Stadt.","إيه، كنقلب على شقة صغيرة فالمدينة."],["Mina","Wie viele Zimmer brauchst du?","شحال من بيت محتاج؟"],["Youssef","Zwei Zimmer und eine Küche. Gibt es einen Balkon?","جوج ديال البيوت وكوزينة. واش كاين بالكون؟"],["Mina","Ja, es gibt einen kleinen Balkon. Die Wohnung ist hell.","إيه، كاين بالكون صغير. الشقة مضوية."],["Youssef","Wo steht der Tisch?","فين كاينة الطابلة؟"],["Mina","Der Tisch steht neben dem Fenster.","الطابلة كاينة حدا الشرجم."],["Youssef","Und wo ist die Tasche?","وفين كاينة الشنطة؟"],["Mina","Sie ist unter dem Stuhl. Das Buch liegt auf dem Tisch.","كاينة تحت الكرسي. الكتاب فوق الطابلة."],["Youssef","Die Wohnung gefällt mir. Wie viel kostet sie?","عجبتني الشقة. بشحال الكراء ديالها؟"],["Mina","Sie kostet 400 Euro im Monat.","الكراء ديالها 400 أورو فالشهر."],["Youssef","Danke! Ich möchte die Wohnung gern sehen.","شكراً! بغيت نشوف الشقة."]]},{"title":"Essen und Trinken","intro":"Bestelle Essen und Getränke, sage, was du gern magst, und übe höfliche Wünsche.","lines":[["Kellner","Guten Tag! Was möchten Sie trinken?","نهارك سعيد! شنو بغيتي تشرب؟"],["Amir","Ich möchte ein Glas Wasser, bitte.","بغيت كاس ديال الما، عافاك."],["Kellner","Gern. Möchten Sie auch etwas essen?","بكل سرور. واش بغيتي حتى شي حاجة تاكل؟"],["Amir","Ja, ich möchte ein Sandwich und einen Salat.","إيه، بغيت ساندويتش وسلطة."],["Kellner","Möchten Sie Käse im Sandwich?","واش بغيتي الفرماج فالساندويتش؟"],["Amir","Ja, bitte. Aber ohne Zwiebeln.","إيه، عافاك. ولكن بلا بصلة."],["Kellner","Und möchten Sie Kaffee oder Tee?","وبغيتي القهوة ولا أتاي؟"],["Amir","Einen Tee mit Minze, bitte. Ich trinke gern Tee.","أتاي بالنعناع، عافاك. كنعجبني نشرب أتاي."],["Kellner","Natürlich. Sonst noch etwas?","بالطبع. شي حاجة أخرى؟"],["Amir","Nein, danke. Das ist alles.","لا، شكراً. هادا كلشي."],["Kellner","Hier bitte. Guten Appetit!","تفضل. بالصحة والراحة!"],["Amir","Danke schön!","شكراً بزاف!"]]},{"title":"Mein Alltag","intro":"Erzähle über Uhrzeiten, Arbeit, Deutschkurs und deine täglichen Gewohnheiten.","lines":[["Nora","Guten Morgen, Sami! Wann stehst du auf?","صباح الخير سامي! فوقاش كتفيق؟"],["Sami","Ich stehe um sieben Uhr auf.","كنفيق مع السبعة ديال الصباح."],["Nora","Was machst du am Morgen?","شنو كتدير فالصباح؟"],["Sami","Ich frühstücke und fahre um acht Uhr zur Arbeit.","كنفطر وكنمشي للخدمة مع الثمانية."],["Nora","Wo arbeitest du?","فين كتخدم؟"],["Sami","Ich arbeite von acht bis vier in einem Büro.","كنخدم من الثمانية حتى الربعة فمكتب."],["Nora","Lernst du auch Deutsch?","واش حتى نتا كتقرا الألمانية؟"],["Sami","Ja, mein Deutschkurs beginnt um sechs Uhr am Abend.","إيه، درس الألمانية ديالي كيبدا مع الستة ديال العشية."],["Nora","Bist du danach müde?","واش كتكون عيان من بعد؟"],["Sami","Ja, ein bisschen. Ich muss aber noch Hausaufgaben machen.","إيه، شوية. ولكن خاصني مازال ندير الواجب."],["Nora","Wann gehst du schlafen?","فوقاش كتمشي تنعس؟"],["Sami","Meistens um elf Uhr. Und du?","غالباً مع الحداش. ونتي؟"],["Nora","Ich schlafe um halb elf. Bis morgen!","كننعس مع العشرة ونص. حتى لغدا!"]]},{"title":"Freizeit & Hobbys","intro":"Frage nach Hobbys und Plänen und benutze gern und können.","lines":[["Adam","Hallo Lina! Was machst du gern in deiner Freizeit?","سلام لينا! شنو كيعجبك ديري فوقت الفراغ؟"],["Lina","Ich lese gern Bücher und höre Musik.","كنحب نقرا الكتب ونسمع الموسيقى."],["Adam","Machst du auch Sport?","واش كتديري حتى الرياضة؟"],["Lina","Ja, ich spiele Volleyball. Kannst du schwimmen?","إيه، كنلعب الكرة الطائرة. واش كتقدر تعوم؟"],["Adam","Ja, ich kann gut schwimmen, aber ich spiele nicht gern Volleyball.","إيه، كنعرف نعوم مزيان، ولكن ما كنعجبنيش نلعب الكرة الطائرة."],["Lina","Was machst du am Wochenende?","شنو كتدير فنهاية الأسبوع؟"],["Adam","Am Samstag spiele ich Fußball mit meinen Freunden.","نهار السبت كنلعب الكرة مع صحابي."],["Lina","Und am Sonntag?","ونهار الأحد؟"],["Adam","Am Sonntag lese ich oder sehe einen Film.","نهار الأحد كنقرا ولا كنتفرج فشي فيلم."],["Lina","Möchtest du am Samstag mit uns schwimmen gehen?","واش بغيتي تجي تعوم معانا نهار السبت؟"],["Adam","Ja, gern! Um wie viel Uhr treffen wir uns?","إيه، بكل سرور! مع شحال نتلاقاو؟"],["Lina","Um zehn Uhr vor dem Schwimmbad.","مع العشرة قدام المسبح."],["Adam","Super! Bis Samstag!","زوين! حتى للسبت!"]]},{"title":"Einkaufen","intro":"Frage nach Preisen, Mengen und Farben und bezahle im Geschäft.","lines":[["Verkäuferin","Guten Tag! Kann ich Ihnen helfen?","نهارك سعيد! نقدر نعاونك؟"],["Kundin","Ja, bitte. Wie viel kostet diese Tasche?","إيه، عافاك. بشحال هاد الشنطة؟"],["Verkäuferin","Sie kostet 25 Euro.","الثمن ديالها 25 أورو."],["Kundin","Oh, das ist ein bisschen teuer. Haben Sie eine billigere Tasche?","أوه، شوية غالية. واش عندكم شنطة أرخص؟"],["Verkäuferin","Ja, diese blaue Tasche kostet nur 15 Euro.","إيه، هاد الشنطة الزرقا ثمنها غير 15 أورو."],["Kundin","Die gefällt mir. Haben Sie auch Äpfel?","عجبتني. واش عندكم حتى التفاح؟"],["Verkäuferin","Ja. Ein Kilo Äpfel kostet zwei Euro.","إيه. كيلو ديال التفاح بجوج أورو."],["Kundin","Dann nehme ich eine Tasche und ein Kilo Äpfel.","إوا ناخد شنطة وكيلو ديال التفاح."],["Verkäuferin","Das macht zusammen 17 Euro.","المجموع هو 17 أورو."],["Kundin","Kann ich mit Karte bezahlen?","نقدر نخلص بالبطاقة؟"],["Verkäuferin","Ja, natürlich.","إيه، بالطبع."],["Kundin","Danke schön. Auf Wiedersehen!","شكراً بزاف. إلى اللقاء!"],["Verkäuferin","Auf Wiedersehen und einen schönen Tag!","إلى اللقاء ونهار سعيد!"]]},{"title":"Arbeit & Beruf","intro":"Sprich über deinen Beruf, deinen Arbeitsplatz, deine Erfahrung und deine Wünsche.","lines":[["Frau Klein","Guten Morgen. Was sind Sie von Beruf?","صباح الخير. شنو هي المهنة ديالك؟"],["Youssef","Ich bin Fahrer. Und Sie?","أنا سائق. ونتي؟"],["Frau Klein","Ich arbeite als Bürokauffrau in einer Firma.","كنخدم كموظفة إدارية فشركة."],["Youssef","Ich suche gerade eine Arbeit in Deutschland.","دابا كنقلب على خدمة فألمانيا."],["Frau Klein","Haben Sie schon Erfahrung?","واش عندك تجربة من قبل؟"],["Youssef","Ja, ich arbeite seit drei Jahren als Fahrer.","إيه، كنخدم كسائق من ثلاث سنين."],["Frau Klein","Sind Sie pünktlich und zuverlässig?","واش كتجي فالوقت ويمكن الاعتماد عليك؟"],["Youssef","Ja, ich bin pünktlich und fleißig.","إيه، كنجي فالوقت وكنخدم بجدية."],["Frau Klein","Warum möchten Sie bei unserer Firma arbeiten?","علاش بغيتي تخدم فالشركة ديالنا؟"],["Youssef","Ich möchte meine Deutschkenntnisse verbessern und in Ihrem Team arbeiten.","بغيت نحسن الألمانية ديالي ونخدم مع الفريق ديالكم."],["Frau Klein","Gut. Bitte schicken Sie uns Ihren Lebenslauf.","مزيان. عافاك صيفط لينا السيرة الذاتية ديالك."],["Youssef","Sehr gern. Vielen Dank für das Gespräch.","بكل سرور. شكراً بزاف على المقابلة."],["Frau Klein","Gern. Auf Wiedersehen!","بكل سرور. إلى اللقاء!"]]},{"title":"Stadt & Verkehr","intro":"Frage nach dem Weg und übe Verkehrsmittel, Richtungen und einfache Anweisungen.","lines":[["Touristin","Entschuldigung, wie komme ich zum Bahnhof?","سمح ليا، كيفاش نوصل لمحطة القطار؟"],["Passant","Gehen Sie hier geradeaus.","سير نيشان من هنا."],["Touristin","Wie weit ist der Bahnhof?","واش المحطة بعيدة؟"],["Passant","Nein, sie ist ganz nah. Gehen Sie bis zur Ampel.","لا، قريبة بزاف. سير حتى للضو."],["Touristin","Und dann?","ومن بعد؟"],["Passant","Biegen Sie links ab. Der Bahnhof ist neben der Bank.","دور على اليسار. المحطة حدا البنك."],["Touristin","Kann ich auch mit dem Bus fahren?","واش نقدر حتى نمشي بالطوبيس؟"],["Passant","Ja. Nehmen Sie den Bus Nummer fünf.","إيه. خد الطوبيس رقم خمسة."],["Touristin","Wo ist die Haltestelle?","فين كاينة محطة الطوبيس؟"],["Passant","Sie ist an der Ecke, gegenüber dem Café.","كاينة فالزاوية، مقابلة مع القهوة."],["Touristin","Vielen Dank für Ihre Hilfe!","شكراً بزاف على المساعدة ديالك!"],["Passant","Gern geschehen. Gute Fahrt!","بلا جميل. رحلة سعيدة!"]]},{"title":"Gesundheit & Termine","intro":"Vereinbare einen Termin, beschreibe Beschwerden und verstehe einfache Ratschläge.","lines":[["Mitarbeiterin","Guten Tag, Praxis Dr. Weber. Was kann ich für Sie tun?","نهارك سعيد، عيادة الدكتور فيبر. كيفاش نقدر نعاونك؟"],["Patient","Guten Tag. Ich brauche einen Termin beim Arzt.","نهارك سعيد. محتاج موعد عند الطبيب."],["Mitarbeiterin","Was fehlt Ihnen?","شنو كتحس؟"],["Patient","Ich bin krank und mein Kopf tut weh.","أنا مريض وراسي كيوجعني."],["Mitarbeiterin","Seit wann haben Sie Schmerzen?","من شحال هادي والوجع عندك؟"],["Patient","Seit zwei Tagen. Ich bin auch sehr müde.","من يومين. وحتى عيان بزاف."],["Mitarbeiterin","Haben Sie morgen um zehn Uhr Zeit?","واش عندك الوقت غدا مع العشرة؟"],["Patient","Ja, das passt. Vielen Dank.","إيه، مناسب. شكراً بزاف."],["Arzt","Guten Morgen. Was fehlt Ihnen?","صباح الخير. شنو كتحس؟"],["Patient","Ich habe Kopfschmerzen.","عندي الصداع."],["Arzt","Trinken Sie viel Wasser und ruhen Sie sich aus.","شرب بزاف ديال الما وارتاح."],["Patient","Muss ich Medikamente nehmen?","واش خاصني ناخد الدوا؟"],["Arzt","Ich untersuche Sie zuerst. Bitte warten Sie einen Moment.","غادي نفحصك اللول. عافاك تسنى شوية."],["Patient","In Ordnung. Danke, Herr Doktor.","حاضر. شكراً دكتور."]]}];

[lessons[2], lessons[3]] = [lessons[3], lessons[2]];
[dialogues[2], dialogues[3]] = [dialogues[3], dialogues[2]];
[lessons[4], lessons[5]] = [lessons[5], lessons[4]];
[dialogues[4], dialogues[5]] = [dialogues[5], dialogues[4]];

const podcastLibrary = [
  {id:'podcast-5-1',lesson:5,title:'Meine Freizeit – Audio-Lesetraining',file:'Lektion 5/Lina_Freizeit_Audio_Lesetraining_CENTER_POPUP_PAUSE.html',format:"html"},
  {id:'podcast-5-2',lesson:5,title:'Meine Freizeit – Audio-Lesetraining Teil 2',file:'Lektion 5/Lina_Freizeit_Audio_Lesetraining_Teil2.html',format:"html"},
  {id:'podcast-6-1',lesson:6,title:'Einkaufen, Stadt und Land – Audio-Lesetraining',file:'Lektion 6/Lina_Einkaufen_Stadt_Land_Audio_Lesetraining.html',format:"html"},
  {id:'podcast-6-2',lesson:6,title:'Meine Stadt und meine Wohnung – Audio-Lesetraining',file:'Lektion 6/Lina_Stadt_Wohnung_Audio_Lesetraining.html',format:"html"},
  {id:'podcast-7-1',lesson:7,title:'Wetter, Stadt und Arbeit – Audio-Lesetraining',file:'Lektion 7/Lina_Wetter_Stadt_Arbeit_Audio_Lesetraining.html',format:"html"},
  {id:'podcast-7-2',lesson:7,title:'Herbst, Winter und Wochenende – Audio-Lesetraining',file:'Lektion 7/Lina_Herbst_Winter_Wochenende_Audio_Lesetraining.html',format:"html"},
  {id:'podcast-8-1',lesson:8,title:'Verkehrsmittel und eine Reise nach Hamburg – Audio-Lesetraining',file:'Lektion 8/Lina_Verkehrsmittel_Hamburg_Audio_Lesetraining.html',format:"html"},
  {id:'podcast-8-2',lesson:8,title:'In Hamburg und Verkehrsmittel – Audio-Lesetraining',file:'Lektion 8/Lina_Hamburg_Verkehrsmittel_Teil2_Audio_Lesetraining.html',format:"html"},
  {id:'podcast-9-1',lesson:9,title:'Ein Wochenende mit Freunden – Audio-Lesetraining',file:'Lektion 9/Lina_Wochenende_Restaurant_Audio_Lesetraining.html',format:"html"},
  {id:'podcast-9-2',lesson:9,title:'Emma auf dem Flohmarkt – Audio-Lesetraining',file:'Lektion 9/Emma_Flohmarkt_Audio_Lesetraining.html',format:"html"},
  {id:'podcast-10-1',lesson:10,title:'Sara entdeckt die Welt – Audio-Lesetraining',file:'Lektion 10/Sara_Reisen_Jahreszeiten_Audio_Lesetraining.html',format:"html"},
  {id:'podcast-10-2',lesson:10,title:'Winterreisen und Urlaubserlebnisse – Audio-Lesetraining',file:'Lektion 10/Sara_Winterreisen_Urlaubserlebnisse_Audio_Lesetraining.html',format:"html"}
];

const managedHtmlPageDefinitions = [
  {path:"pages/B2/training/oesd-b2-bildbeschreibung.html",title:"ÖSD B2 – Bildbeschreibung",group:"B2 · Training Prüfung · Prüfungsmodelle"},
  {path:"pages/B2/training/oesd-b2-familie-zusammenleben.html",title:"ÖSD B2 – Familie und Zusammenleben",group:"B2 · Training Prüfung · Prüfungsmodelle"},
  {path:"pages/B2/training/oesd-b2-studium-lernen.html",title:"ÖSD B2 – Studium und Lernen",group:"B2 · Training Prüfung · Prüfungsmodelle"},
  {path:"pages/B2/training/oesd-b2-reisen-tourismus.html",title:"ÖSD B2 – Reisen und Tourismus",group:"B2 · Training Prüfung · Prüfungsmodelle"},
  {path:"pages/B2/training/oesd-b2-gesundheit-sport.html",title:"ÖSD B2 – Gesundheit und Sport",group:"B2 · Training Prüfung · Prüfungsmodelle"},
  {path:"pages/B2/training/oesd-b2-umwelt-klimaschutz.html",title:"ÖSD B2 – Umwelt und Klimaschutz",group:"B2 · Training Prüfung · Prüfungsmodelle"},
  {path:"pages/B2/training/oesd-b2-arbeit-und-beruf.html",title:"ÖSD B2 – Arbeit und Beruf",group:"B2 · Training Prüfung · Prüfungsmodelle"},
  {path:"pages/B2/training/b2-sprechen-training.html",title:"ÖSD B2 – Sprechen · Interaktives Training",group:"B2 · Training Prüfung · Sprechen"},
  {path:"pages/adjective-challenge.html",title:"Meine Stadt – Interaktive Übungen",group:"Tests & Übungen"},
  {path:"pages/test-center.html",title:"واجهة الاختبارات – اختيار وحل الاختبار",group:"Tests & Übungen"},
  {path:"pages/admin-vocabulary.html",title:"مفرداتي – إدارة المفردات",group:"إدارة وأدوات"},
  {path:"pages/lektion-7-test.html",title:"Lektion 7 – Wie, wo und wann?",group:"Tests & Übungen"},
  {path:"pages/lektion-8-test.html",title:"Lektion 8 – Unterwegs",group:"Tests & Übungen"},
  {path:"pages/lektion-9-test.html",title:"Lektion 9 – Unter Freunden",group:"Tests & Übungen"},
  {path:"pages/intro-dialogue.html",title:"Sich vorstellen – Dialog",group:"Interaktive Lektionen"},
  {path:"pages/numbers.html",title:"Die Zahlen",group:"Interaktive Lektionen"},
  {path:"pages/essen.html",title:"Essen und Trinken",group:"Interaktive Lektionen"},
  {path:"pages/freizeit.html",title:"Freizeit und Hobbys",group:"Interaktive Lektionen"},
  {path:"pages/family-tree.html",title:"Familienstammbaum",group:"Interaktive Lektionen"},
  {path:"pages/meine-stadt.html",title:"Meine Stadt und meine Wohnung",group:"Interaktive Lektionen"},
  {path:"pages/wie-wo-und-wann-interaktiv.html",title:"Wie, wo und wann? – Lernkarte",group:"Interaktive Lektionen"},
  {path:"pages/unter-freunden-flohmarkt-interaktiv.html",title:"Unter Freunden – Flohmarkt",group:"Interaktive Lektionen"},
  {path:"pages/unterwegs-interaktiv.html",title:"Unterwegs – Lernkarte",group:"Interaktive Lektionen"},
  {path:"Lektion 5/Lina_Freizeit_Audio_Lesetraining_CENTER_POPUP_PAUSE.html",title:"Podcast L5 – Teil 1",group:"Podcasts"},
  {path:"Lektion 5/Lina_Freizeit_Audio_Lesetraining_Teil2.html",title:"Podcast L5 – Teil 2",group:"Podcasts"},
  {path:"Lektion 6/Lina_Einkaufen_Stadt_Land_Audio_Lesetraining.html",title:"Podcast L6 – Teil 1",group:"Podcasts"},
  {path:"Lektion 6/Lina_Stadt_Wohnung_Audio_Lesetraining.html",title:"Podcast L6 – Teil 2",group:"Podcasts"},
  {path:"Lektion 7/Lina_Wetter_Stadt_Arbeit_Audio_Lesetraining.html",title:"Podcast L7 – Teil 1",group:"Podcasts"},
  {path:"Lektion 7/Lina_Herbst_Winter_Wochenende_Audio_Lesetraining.html",title:"Podcast L7 – Teil 2",group:"Podcasts"},
  {path:"Lektion 8/Lina_Verkehrsmittel_Hamburg_Audio_Lesetraining.html",title:"Podcast L8 – Teil 1",group:"Podcasts"},
  {path:"Lektion 8/Lina_Hamburg_Verkehrsmittel_Teil2_Audio_Lesetraining.html",title:"Podcast L8 – Teil 2",group:"Podcasts"},
  {path:"Lektion 9/Lina_Wochenende_Restaurant_Audio_Lesetraining.html",title:"Podcast L9 – Teil 1",group:"Podcasts"},
  {path:"Lektion 9/Emma_Flohmarkt_Audio_Lesetraining.html",title:"Podcast L9 – Teil 2",group:"Podcasts"},
  {path:"Lektion 10/Sara_Reisen_Jahreszeiten_Audio_Lesetraining.html",title:"Podcast L10 – Teil 1",group:"Podcasts"},
  {path:"Lektion 10/Sara_Winterreisen_Urlaubserlebnisse_Audio_Lesetraining.html",title:"Podcast L10 – Teil 2",group:"Podcasts"},
  {path:"pages/Kurs/lektion-1-kurs.html",title:"Lektion 1 – Kurs",group:"Kurs"},
  {path:"pages/Kurs/lektion-2-kurs.html",title:"Lektion 2 – Kurs",group:"Kurs"},
  {path:"pages/Kurs/lektion-3-kurs.html",title:"Lektion 3 – Kurs",group:"Kurs"},
  {path:"pages/Kurs/lektion-4-kurs.html",title:"Lektion 4 – Kurs",group:"Kurs"},
  {path:"pages/Kurs/lektion-5-kurs.html",title:"Lektion 5 – Kurs",group:"Kurs"},
  {path:"pages/Kurs/lektion-6-kurs.html",title:"Lektion 6 – Kurs",group:"Kurs"},
  {path:"pages/Kurs/lektion-7-kurs.html",title:"Lektion 7 – Kurs",group:"Kurs"},
  {path:"pages/Kurs/lektion-8-kurs.html",title:"Lektion 8 – Kurs",group:"Kurs"},
  {path:"pages/Kurs/lektion-9-kurs.html",title:"Lektion 9 – Kurs",group:"Kurs"},
  {path:"pages/Kurs/lektion-10-kurs.html",title:"Lektion 10 – Kurs",group:"Kurs"},
  {path:"pages/Kurs/A2/lektion-2-kurs.html",title:"A2 – Lektion 2: Gut aussehen",group:"Kurs A2"},
  {path:"pages/Kurs/A2/lektion-3-kurs.html",title:"A2 – Lektion 3: Familie und Freunde",group:"Kurs A2"},
  {path:"pages/Kurs/A2/lektion-4-kurs.html",title:"A2 – Lektion 4: Die Ferienwohnung",group:"Kurs A2"},
  {path:"pages/Kurs/A2/lektion-5-kurs.html",title:"A2 – Lektion 5: Guten Appetit",group:"Kurs A2"},
  {path:"pages/Test/lektion-1-test.html",title:"Lektion 1 – Test",group:"Test"},
  {path:"pages/Test/lektion-2-test.html",title:"Lektion 2 – Test",group:"Test"},
  {path:"pages/Test/lektion-3-test.html",title:"Lektion 3 – Test",group:"Test"},
  {path:"pages/Test/lektion-4-test.html",title:"Lektion 4 – Test",group:"Test"},
  {path:"pages/Test/lektion-5-test.html",title:"Lektion 5 – Test",group:"Test"},
  {path:"pages/Test/lektion-6-test.html",title:"Lektion 6 – Test",group:"Test"},
  {path:"pages/Test/lektion-7-test.html",title:"Lektion 7 – Test",group:"Test"},
  {path:"pages/Test/lektion-8-test.html",title:"Lektion 8 – Test",group:"Test"},
  {path:"pages/Test/lektion-9-test.html",title:"Lektion 9 – Test",group:"Test"},
  {path:"pages/Test/lektion-10-test.html",title:"Lektion 10 – Test",group:"Test"},
  {path:"pages/Podcast/lektion-1-podcast.html",title:"Lektion 1 – Podcast",group:"Podcast"},
  {path:"pages/Podcast/lektion-2-podcast.html",title:"Lektion 2 – Podcast",group:"Podcast"},
  {path:"pages/Podcast/lektion-3-podcast.html",title:"Lektion 3 – Podcast",group:"Podcast"},
  {path:"pages/Podcast/lektion-4-podcast.html",title:"Lektion 4 – Podcast",group:"Podcast"},
  {path:"pages/Podcast/lektion-5-podcast.html",title:"Lektion 5 – Podcast",group:"Podcast"},
  {path:"pages/Podcast/lektion-6-podcast.html",title:"Lektion 6 – Podcast",group:"Podcast"},
  {path:"pages/Podcast/lektion-7-podcast.html",title:"Lektion 7 – Podcast",group:"Podcast"},
  {path:"pages/Podcast/lektion-8-podcast.html",title:"Lektion 8 – Podcast",group:"Podcast"},
  {path:"pages/Podcast/lektion-9-podcast.html",title:"Lektion 9 – Podcast",group:"Podcast"},
  {path:"pages/Podcast/lektion-10-podcast.html",title:"Lektion 10 – Podcast",group:"Podcast"},
  {path:"pages/Sprechen/lektion-1-sprechen.html",title:"Lektion 1 – Sprechen",group:"Sprechen"},
  {path:"pages/Sprechen/lektion-2-sprechen.html",title:"Lektion 2 – Sprechen",group:"Sprechen"},
  {path:"pages/Sprechen/lektion-3-sprechen.html",title:"Lektion 3 – Sprechen",group:"Sprechen"},
  {path:"pages/Sprechen/lektion-4-sprechen.html",title:"Lektion 4 – Sprechen",group:"Sprechen"},
  {path:"pages/Sprechen/lektion-5-sprechen.html",title:"Lektion 5 – Sprechen",group:"Sprechen"},
  {path:"pages/Sprechen/lektion-6-sprechen.html",title:"Lektion 6 – Sprechen",group:"Sprechen"},
  {path:"pages/Sprechen/lektion-7-sprechen.html",title:"Lektion 7 – Sprechen",group:"Sprechen"},
  {path:"pages/Sprechen/lektion-8-sprechen.html",title:"Lektion 8 – Sprechen",group:"Sprechen"},
  {path:"pages/Sprechen/lektion-9-sprechen.html",title:"Lektion 9 – Sprechen",group:"Sprechen"},
  {path:"pages/Sprechen/lektion-10-sprechen.html",title:"Lektion 10 – Sprechen",group:"Sprechen"}
];

const AUTH_SESSION_KEY = "deutsch_a1_session_v2";
const AUTH_USERS_KEY = "deutsch_a1_users_cache_v2";
const AUTH_RESULTS_KEY = "deutsch_a1_results_cache_v2";
const DEUTSCH_A1_PATH = "deutschA1";
const firebaseConfig = {
  apiKey: "AIzaSyAUjg67MciQfxHkstbeWl9LUf3bwG_feCY",
  authDomain: "test-c1899.firebaseapp.com",
  databaseURL: "https://test-c1899-default-rtdb.firebaseio.com",
  projectId: "test-c1899",
  storageBucket: "test-c1899.firebasestorage.app",
  messagingSenderId: "854461855903",
  appId: "1:854461855903:web:b326d7622467abef640aaa",
  measurementId: "G-TPZ00TQCKF"
};

let firebaseApp = null, firebaseAuth = null, firebaseDb = null;
let firebaseReady = false;
let cloudUsers = [];
let cloudResults = {};
let cloudGroups = {};
let cloudActivity = {};
let cloudCourseProgress = {};
let cloudTaskProgress = {};
let adminResultsRealtimeRef = null;
let adminResultsRealtimeHandler = null;
let adminResultsRealtimeSignature = "";
let adminCourseProgressRealtimeRef = null;
let adminCourseProgressRealtimeHandler = null;
let adminCourseProgressRealtimeSignature = "";
let adminActivityRealtimeRef = null;
let adminActivityRealtimeHandler = null;
let adminActivityRealtimeSignature = "";
let adminTaskProgressRealtimeRef = null;
let adminTaskProgressRealtimeHandler = null;
let adminTaskProgressRealtimeSignature = "";
let studentGroupTasksRealtimeRef = null;
let studentGroupTasksRealtimeHandler = null;
let currentStudentProfile = null;
let currentStudentGroup = null;
let adminStudentFilter = "all";
let adminGroupFilter = "all";
let adminAnalyticsGroupFilter = "all";
let adminAnalyticsStudentFilter = "all";
let adminSection = "home";
let adminTaskGroupId = "";
let adminEditingTaskId = null;
let adminTaskDetailId = "";
let adminContentMeta = {};
let adminPagesRootDirectoryHandle = null;
const ADMIN_LOCAL_HTML_PAGES_KEY = "deutsch_a1_admin_local_html_pages_v1";
const ADMIN_TEST_PAGE_ROUTES_KEY = "deutsch_a1_admin_test_page_routes_v1";
let adminPageSelectedPath = "pages/adjective-challenge.html";
let managedHtmlPagePath = "";
let activeCustomContentMeta = null;
let activeCustomContentFile = null;
let customContentReturnPage = "lesson-hub";

let adminSelectedGroupId = null;
let adminGroupFullscreenOpen = false;
let adminResultsGroupId = "all";
let adminResultsStudentId = "all";
let adminResultsLessonFilter = "all";
let adminResultsTypeFilter = "all";
let adminProgressLessonStatusFilter = "";
let adminProgressMetricOpen = "";
let adminProgressMetricStudentId = "";
let studentLessonStatusFilter = "all";
let studentProgressLessonFilter = "all";
let studentResultsExpanded = false;
let studentResultsActiveTool = "";
let studentResultsReturnPage = "student-results";
let studentResultsActiveSkill = "vocab";
let studentResultsSkillDetailOpen = false;
let studentVocabularyReviewLesson = 6;
let studentVocabularyReviewLevel = "A1";
let studentVocabularyReviewCategory = "Verben";
let studentVocabularySelectedWord = null;
let studentVocabularyPracticeOpen = false;
let studentVocabularyPracticeFeedback = "";
let studentVocabularyTrainingMode = "";
let studentVocabularyTrainingFeedback = "";
let studentVocabularyTrainingOrder = [];
let studentVocabularyTrainingRevealed = false;
let studentVocabularyTrainingDone = false;
let studentVocabularyPracticeCompletedCount = 0;
let studentVocabularyTrainingScope = "word";
let studentVocabularyTrainingPool = [];
let studentVocabularyTrainingIndex = 0;
let studentVocabularyTrainingCategory = "Verben";
let studentSkillLearningLesson = 6;
let studentSkillLearningMode = "browse";
let studentSkillListeningIndex = 0;
let studentSkillListeningChoice = -1;
let studentSkillListeningChecked = false;
let studentSkillListeningScore = 0;
let studentSkillWritingIndex = 0;
let studentSkillWritingInput = "";
let studentSkillWritingChecked = false;
let studentSkillWritingScore = 0;
let studentSkillSpeakingIndex = 0;
let studentSkillSentenceIndex = 0;
let studentSkillSentenceOrder = [];
let studentSkillSentenceChecked = false;
let studentSkillSentenceScore = 0;

let testAttemptId = "";
let adminExerciseHeatmapMode = "performance";
let editingGroupId = null;
let adminGroupLevelDraft = null;
let adminGroupLessonDrafts = {};
let adminEditingStudentLessonsId = null;
let activityTimer = null;
let lastActivityTick = Date.now();
let secondaryAuth = null;

try {
  firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseAuth = firebase.auth();
  firebaseDb = firebase.database();
  firebaseReady = true;
} catch (error) {
  console.error("Firebase initialization failed:", error);
}

const ADMIN_CREDENTIALS = { email: "admin@gmail.com" };

function readUsers(){ return Array.isArray(cloudUsers) ? cloudUsers : []; }
function saveUsers(users){
  cloudUsers = Array.isArray(users) ? users : [];
  localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(cloudUsers));
  if (!firebaseReady) return;
  const updates = {};
  cloudUsers.forEach(user => {
    if (!user || !user.id || String(user.id).startsWith("__system_")) return;
    const safe = {uid:user.id, name:user.name || "", email:user.email || "", active:user.active !== false,
      createdAt:user.createdAt || new Date().toISOString(), updatedAt:new Date().toISOString()};
    updates[`${DEUTSCH_A1_PATH}/users/${user.id}`] = safe;
  });
  firebaseDb.ref().update(updates).catch(err => {
    console.error(err); showToast("Firebase konnte die Schülerdaten nicht speichern. Bitte Rules prüfen.");
  });
}
function readAllResults(){ return cloudResults || {}; }
function readSession(){ return null; }

async function loadDeutschA1Data(){
  if (!firebaseReady) throw new Error("Firebase ist nicht verfügbar.");
  if (currentUser && currentUser.role === "student") {
    const uid = currentUser.id;
    const [profileSnap, ownResultsSnap, ownActivitySnap] = await Promise.all([
      firebaseDb.ref(`${DEUTSCH_A1_PATH}/users/${uid}`).once("value"),
      firebaseDb.ref(`${DEUTSCH_A1_PATH}/results/${uid}`).once("value"),
      firebaseDb.ref(`${DEUTSCH_A1_PATH}/activity/${uid}`).once("value")
    ]);
    currentStudentProfile = profileSnap.val() || currentStudentProfile || {};
    cloudUsers = [{id:uid, ...(currentStudentProfile || {})}];
    cloudResults = {[uid]: ownResultsSnap.val() || {}};
    cloudActivity = {[uid]: ownActivitySnap.val() || {}};
    try{
      const ownTaskProgressSnap=await firebaseDb.ref(`${DEUTSCH_A1_PATH}/taskProgress/${uid}`).once("value");
      cloudTaskProgress = {[uid]: ownTaskProgressSnap.val() || {}};
    }catch(taskProgressReadError){
      cloudTaskProgress = {[uid]:{}};
      console.warn("Student task progress could not be read. Check Firebase taskProgress rules:",taskProgressReadError);
    }
    currentStudentGroup = null;
    if (currentStudentProfile.groupId) {
      const groupSnap = await firebaseDb.ref(`${DEUTSCH_A1_PATH}/groups/${currentStudentProfile.groupId}`).once("value");
      currentStudentGroup = groupSnap.val() || null;
      startStudentGroupTasksRealtimeSync(currentStudentProfile.groupId);
    }else stopStudentGroupTasksRealtimeSync();
  } else {
    stopStudentGroupTasksRealtimeSync();
    const [usersSnap, resultsSnap, groupsSnap, activitySnap] = await Promise.all([
      firebaseDb.ref(`${DEUTSCH_A1_PATH}/users`).once("value"),
      firebaseDb.ref(`${DEUTSCH_A1_PATH}/results`).once("value"),
      firebaseDb.ref(`${DEUTSCH_A1_PATH}/groups`).once("value"),
      firebaseDb.ref(`${DEUTSCH_A1_PATH}/activity`).once("value")
    ]);
    const rawUsers = usersSnap.val() || {};
    cloudUsers = Object.entries(rawUsers)
      .filter(([id, value]) => !String(id).startsWith("__system_") && !(value && value._systemPlaceholder))
      .map(([id, value]) => ({id, ...(value || {})}));
    const rawResults = resultsSnap.val() || {};
    cloudResults = {};
    Object.entries(rawResults).forEach(([uid, value]) => {
      if (String(uid).startsWith("__system_") || (value && value._systemPlaceholder)) return;
      cloudResults[uid] = value || {};
    });
    cloudGroups = groupsSnap.val() || {};
    cloudActivity = activitySnap.val() || {};
    try{
      const taskProgressSnap=await firebaseDb.ref(`${DEUTSCH_A1_PATH}/taskProgress`).once("value");
      cloudTaskProgress=taskProgressSnap.val()||{};
    }catch(taskProgressReadError){
      cloudTaskProgress={};
      console.warn("Admin task progress could not be read. Check Firebase taskProgress rules:",taskProgressReadError);
    }
  }
  if(currentUser?.role==="admin"){
    try{
      const courseProgressSnap=await firebaseDb.ref(`${DEUTSCH_A1_PATH}/courseProgress`).once("value");
      cloudCourseProgress=courseProgressSnap.val()||{};
    }catch(courseProgressError){
      cloudCourseProgress={};
      console.warn("Admin course progress could not be loaded. Check Firebase courseProgress read rules:",courseProgressError);
    }
  }
  try {
    const contentMetaSnap = await firebaseDb.ref(`${DEUTSCH_A1_PATH}/contentMeta`).once("value");
    adminContentMeta = contentMetaSnap.val() || {};
  } catch (contentError) {
    console.warn("Custom lesson content metadata could not be loaded. Check Firebase rules:", contentError);
    adminContentMeta = {};
  }
  if(currentUser?.role==="student") await loadStudentCourseProgressCloud();
  // HTML pages are static files under /pages and are never read from or written to Firebase.
  localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(cloudUsers));
  localStorage.setItem(AUTH_RESULTS_KEY, JSON.stringify(cloudResults));
  // Merge any exercise progress saved by an embedded page before the student signs out.
  if (currentUser && currentUser.role === "student") syncEmbeddedProgressFromLocalStorage();
  if (currentUser && currentUser.role === "admin") startAdminResultsRealtimeSync();
}

async function hashPassword(password){
  if(window.crypto && window.crypto.subtle && window.TextEncoder){
    const bytes = await window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(String(password)));
    return "sha256:" + Array.from(new Uint8Array(bytes)).map(b => b.toString(16).padStart(2,"0")).join("");
  }
  return "plain:" + String(password);
}
function createStudentAttemptId(){
  return `deutsch-${Date.now()}-${Math.random().toString(36).slice(2,10)}`;
}
function studentMergeItemHistory(previous,result){
  const history={...(previous && previous.itemHistory && typeof previous.itemHistory==="object" ? previous.itemHistory : {})};
  // Seed history from the last saved score when upgrading an older result record.
  if(!Object.keys(history).length && previous && previous.scores && typeof previous.scores==="object"){
    Object.entries(previous.scores).forEach(([key,value])=>{
      const correct=value && typeof value==="object" ? Number(value.correct)||0 : Number(value)||0;
      const total=value && typeof value==="object" ? Number(value.total)||0 : Number(previous.scoreTotals && previous.scoreTotals[key])||0;
      if(total>0) history[key]={correct,total,attempts:1,lastAttemptId:String(previous.attemptId||""),lastCorrect:correct,lastTotal:total,label:String(previous.exerciseLabels && previous.exerciseLabels[key] || key),kind:"exercise",parentExerciseId:key};
    });
  }
  const attemptId=String(result && result.attemptId || "");
  if(!attemptId) return history;
  const scores=result && result.scores && typeof result.scores==="object" ? result.scores : {};
  const itemScores=result && result.itemScores && typeof result.itemScores==="object" ? result.itemScores : {};
  const totals=result && result.scoreTotals && typeof result.scoreTotals==="object" ? result.scoreTotals : {};
  const labels=result && result.exerciseLabels && typeof result.exerciseLabels==="object" ? result.exerciseLabels : {};
  const itemLabels=result && result.itemLabels && typeof result.itemLabels==="object" ? result.itemLabels : {};
  const itemMeanings=result && result.itemMeanings && typeof result.itemMeanings==="object" ? result.itemMeanings : {};
  const itemSkillTypes=result && result.itemSkillTypes && typeof result.itemSkillTypes==="object" ? result.itemSkillTypes : {};
  const itemParents=result && result.itemParents && typeof result.itemParents==="object" ? result.itemParents : {};
  const combined={};
  Object.entries(scores).forEach(([key,value])=>{combined[key]={value,kind:"exercise",label:String(labels[key]||key),parentExerciseId:key};});
  Object.entries(itemScores).forEach(([key,value])=>{combined[key]={value,kind:"item",label:String(itemLabels[key]||key),meaning:String(itemMeanings[key]||""),skillType:String(itemSkillTypes[key]||""),parentExerciseId:String(itemParents[key]||"")};});
  // A page sends the full current score map after each exercise. Replace that
  // attempt's contribution instead of counting every progress update as a new try.
  Object.entries(history).forEach(([key,old])=>{
    if(old && old.lastAttemptId===attemptId && !Object.prototype.hasOwnProperty.call(combined,key)){
      old.correct=Math.max(0,(Number(old.correct)||0)-(Number(old.lastCorrect)||0));
      old.total=Math.max(0,(Number(old.total)||0)-(Number(old.lastTotal)||0));
      old.attempts=Math.max(0,(Number(old.attempts)||0)-1);
      old.lastAttemptId="";old.lastCorrect=0;old.lastTotal=0;
    }
  });
  Object.entries(combined).forEach(([key,entry])=>{
    const value=entry.value;
    const correct=value && typeof value==="object" ? Number(value.correct)||0 : Number(value)||0;
    const total=value && typeof value==="object" ? Number(value.total)||0 : Number(totals[key])||0;
    if(total<=0) return;
    const old=history[key] || {correct:0,total:0,attempts:0,label:entry.label,lastAttemptId:"",lastCorrect:0,lastTotal:0};
    const sameAttempt=old.lastAttemptId===attemptId;
    if(sameAttempt){
      old.correct=Math.max(0,(Number(old.correct)||0)-(Number(old.lastCorrect)||0)+correct);
      old.total=Math.max(0,(Number(old.total)||0)-(Number(old.lastTotal)||0)+total);
    }else{
      old.correct=(Number(old.correct)||0)+correct;
      old.total=(Number(old.total)||0)+total;
      old.attempts=(Number(old.attempts)||0)+1;
    }
    old.lastAttemptId=attemptId;old.lastCorrect=correct;old.lastTotal=total;
    old.label=String(entry.label||old.label||key);
    old.kind=entry.kind||old.kind||"exercise";
    old.parentExerciseId=String(entry.parentExerciseId||old.parentExerciseId||key);
    if(entry.meaning)old.meaning=entry.meaning;
    if(entry.skillType)old.skillType=entry.skillType;
    history[key]=old;
  });
  return history;
}
function saveStudentResult(moduleId,title,points,maxPoints,extra={}){
  if(!currentUser || currentUser.role !== "student") return;
  const total = Number(maxPoints) || 0;
  const score = Number(points) || 0;
  const result = {
    moduleId, title, points:score, maxPoints:total,
    percent:total ? Math.round(score/total*100) : 0,
    updatedAt:new Date().toISOString(), ...extra
  };
  if (!cloudResults[currentUser.id]) cloudResults[currentUser.id] = {};
  const previous = cloudResults[currentUser.id][moduleId] || {};
  const isNewAttempt = result.attemptId ? previous.attemptId !== result.attemptId : true;
  const itemHistory=studentMergeItemHistory(previous,result);
  cloudResults[currentUser.id][moduleId] = {
    ...result,
    itemHistory,
    itemHistoryAttemptId:String(result.attemptId || previous.itemHistoryAttemptId || previous.attemptId || ""),
    attempts:(Number(previous.attempts)||0)+(isNewAttempt?1:0),
    bestPercent:Math.max(Number(previous.bestPercent)||0, Number(result.percent)||0)
  };
  localStorage.setItem(AUTH_RESULTS_KEY, JSON.stringify(cloudResults));
  if (firebaseReady && !demoMode) {
    firebaseDb.ref(`${DEUTSCH_A1_PATH}/results/${currentUser.id}/${moduleId}`).transaction(current => {
      const old = current || {};
      return {
        ...result,
        learnedWords:{...(old.learnedWords&&typeof old.learnedWords==="object"?old.learnedWords:{}),...(result.learnedWords&&typeof result.learnedWords==="object"?result.learnedWords:{})},
        itemHistory:studentMergeItemHistory(old,result),
        itemHistoryAttemptId:String(result.attemptId || old.itemHistoryAttemptId || old.attemptId || ""),
        attempts:(Number(old.attempts)||0)+(result.attemptId ? (old.attemptId===result.attemptId?0:1) : 1),
        bestPercent:Math.max(Number(old.bestPercent)||0, Number(result.percent)||0)
      };
    }).catch(err => {
      console.error(err);
      showToast("Ergebnis konnte nicht in Firebase gespeichert werden.");
    });
  }
}

function saveEmbeddedProgressReport(data){
  if(!currentUser || currentUser.role !== "student" || !data || typeof data !== "object") return;
  const moduleId=String(data.moduleId||"exercise");
  const existing=cloudResults && cloudResults[currentUser.id] && cloudResults[currentUser.id][moduleId];
  const incomingTime=Date.parse(data.updatedAt||"")||0;
  const existingTime=Date.parse(existing && existing.updatedAt || "")||0;
  // Firebase is authoritative: never replace a newer cloud result with an older local cache.
  if(existing && existingTime > incomingTime) return;
  if(existing && data.attemptId && existing.attemptId===String(data.attemptId) && existingTime>=incomingTime) return;
  saveStudentResult(moduleId,String(data.title||moduleId),Number(data.points)||0,Number(data.maxPoints)||0,{
    completedExercises:Number(data.completedExercises)||0,
    totalExercises:Number(data.totalExercises)||0,
    completed:data.completed && typeof data.completed==="object" ? data.completed : {},
    visited:data.visited && typeof data.visited==="object" ? data.visited : {},
    visitedStages:data.visitedStages && typeof data.visitedStages==="object" ? data.visitedStages : {},
    exerciseSeconds:data.exerciseSeconds && typeof data.exerciseSeconds==="object" ? data.exerciseSeconds : {},
    scores:data.scores && typeof data.scores==="object" ? data.scores : {},
    scoreTotals:data.scoreTotals && typeof data.scoreTotals==="object" ? data.scoreTotals : {},
    itemScores:data.itemScores && typeof data.itemScores==="object" ? data.itemScores : {},
    itemLabels:data.itemLabels && typeof data.itemLabels==="object" ? data.itemLabels : {},
    itemMeanings:data.itemMeanings && typeof data.itemMeanings==="object" ? data.itemMeanings : {},
    itemSkillTypes:data.itemSkillTypes && typeof data.itemSkillTypes==="object" ? data.itemSkillTypes : {},
    itemParents:data.itemParents && typeof data.itemParents==="object" ? data.itemParents : {},
    exerciseLabels:data.exerciseLabels && typeof data.exerciseLabels==="object" ? data.exerciseLabels : {},
    stageByExercise:data.stageByExercise && typeof data.stageByExercise==="object" ? data.stageByExercise : {},
    stageLabels:data.stageLabels && typeof data.stageLabels==="object" ? data.stageLabels : {},
    skillType:String(data.skillType||""),
    attemptId:String(data.attemptId||""),
    contentType:String(data.contentType||"test"),
    lessonNumber:Number(data.lessonNumber)||0,
    customContentId:String(data.customContentId||""),
    source:String(data.source||"embedded-exercise"),
    updatedAt:data.updatedAt || new Date().toISOString()
  });
}

function syncEmbeddedProgressFromLocalStorage(rawValue){
  if(!currentUser || currentUser.role !== "student") return;
  try{
    const raw=rawValue === undefined
      ? localStorage.getItem("deutsch_a1_results_v1")
      : rawValue;
    if(!raw) return;
    const all=typeof raw === "string" ? JSON.parse(raw) : raw;
    const mine=all && all[currentUser.id];
    if(!mine || typeof mine !== "object") return;
    Object.values(mine).forEach(result=>{
      if(result && typeof result === "object") saveEmbeddedProgressReport(result);
    });
  }catch(error){
    console.warn("Embedded exercise progress could not be synchronized.",error);
  }
}

function refreshAdminResultsViewFromRealtime(){
  if(page==="admin" && adminSection==="results"){
    const scrollTop=window.scrollY||0;
    render();
    if(typeof window.scrollTo==="function") window.scrollTo(0,scrollTop);
  }
}
function refreshAdminTaskViewFromRealtime(){
  if(page==="admin" && adminSection==="tasks"){
    const scrollTop=window.scrollY||0;
    render();
    if(typeof window.scrollTo==="function") window.scrollTo(0,scrollTop);
  }
}
function stopStudentGroupTasksRealtimeSync(){
  if(studentGroupTasksRealtimeRef && studentGroupTasksRealtimeHandler){
    try{studentGroupTasksRealtimeRef.off("value",studentGroupTasksRealtimeHandler);}catch(error){console.warn(error);}
  }
  studentGroupTasksRealtimeRef=null;studentGroupTasksRealtimeHandler=null;
}
function startStudentGroupTasksRealtimeSync(groupId){
  stopStudentGroupTasksRealtimeSync();
  if(!firebaseReady||!firebaseDb||!groupId||!currentUser||currentUser.role!=="student")return;
  studentGroupTasksRealtimeRef=firebaseDb.ref(`${DEUTSCH_A1_PATH}/groups/${groupId}/dailyTasks`);
  studentGroupTasksRealtimeHandler=snapshot=>{
    if(!currentUser||currentUser.role!=="student"||currentStudentProfile?.groupId!==groupId)return;
    if(!currentStudentGroup)currentStudentGroup={};
    currentStudentGroup.dailyTasks=snapshot.val()||{};
    if(page==="home")renderHome();
  };
  studentGroupTasksRealtimeRef.on("value",studentGroupTasksRealtimeHandler,error=>{
    console.warn("Student group tasks live sync unavailable:",error);
  });
}
function startAdminResultsRealtimeSync(){
  if(!firebaseReady || !firebaseDb || !currentUser || currentUser.role!=="admin") return;
  stopAdminResultsRealtimeSync();

  adminResultsRealtimeRef=firebaseDb.ref(`${DEUTSCH_A1_PATH}/results`);
  adminResultsRealtimeHandler=snapshot=>{
    if(!currentUser || currentUser.role!=="admin") return;
    const raw=snapshot.val()||{};
    const signature=JSON.stringify(raw);
    if(signature===adminResultsRealtimeSignature) return;
    adminResultsRealtimeSignature=signature;
    const next={};
    Object.entries(raw).forEach(([uid,value])=>{
      if(String(uid).startsWith("__system_") || (value && value._systemPlaceholder)) return;
      next[uid]=value||{};
    });
    cloudResults=next;
    localStorage.setItem(AUTH_RESULTS_KEY,JSON.stringify(cloudResults));
    refreshAdminResultsViewFromRealtime();
  };
  adminResultsRealtimeRef.on("value",adminResultsRealtimeHandler,error=>{
    console.error("Admin results live sync failed:",error);
  });

  adminCourseProgressRealtimeRef=firebaseDb.ref(`${DEUTSCH_A1_PATH}/courseProgress`);
  adminCourseProgressRealtimeHandler=snapshot=>{
    if(!currentUser || currentUser.role!=="admin") return;
    const raw=snapshot.val()||{};
    const signature=JSON.stringify(raw);
    if(signature===adminCourseProgressRealtimeSignature) return;
    adminCourseProgressRealtimeSignature=signature;
    cloudCourseProgress=raw;
    refreshAdminResultsViewFromRealtime();
  };
  adminCourseProgressRealtimeRef.on("value",adminCourseProgressRealtimeHandler,error=>{
    console.warn("Admin course progress live sync unavailable:",error);
  });

  adminActivityRealtimeRef=firebaseDb.ref(`${DEUTSCH_A1_PATH}/activity`);
  adminActivityRealtimeHandler=snapshot=>{
    if(!currentUser || currentUser.role!=="admin") return;
    const raw=snapshot.val()||{};
    const signature=JSON.stringify(raw);
    if(signature===adminActivityRealtimeSignature) return;
    adminActivityRealtimeSignature=signature;
    cloudActivity=raw;
    refreshAdminResultsViewFromRealtime();
  };
  adminActivityRealtimeRef.on("value",adminActivityRealtimeHandler,error=>{
    console.warn("Admin activity live sync unavailable:",error);
  });

  adminTaskProgressRealtimeRef=firebaseDb.ref(`${DEUTSCH_A1_PATH}/taskProgress`);
  adminTaskProgressRealtimeHandler=snapshot=>{
    if(!currentUser || currentUser.role!=="admin") return;
    const raw=snapshot.val()||{};
    const signature=JSON.stringify(raw);
    if(signature===adminTaskProgressRealtimeSignature) return;
    adminTaskProgressRealtimeSignature=signature;
    cloudTaskProgress=raw;
    refreshAdminTaskViewFromRealtime();
  };
  adminTaskProgressRealtimeRef.on("value",adminTaskProgressRealtimeHandler,error=>{
    console.warn("Admin task progress live sync unavailable:",error);
  });
}
function stopAdminResultsRealtimeSync(){
  if(adminResultsRealtimeRef && adminResultsRealtimeHandler){
    try{adminResultsRealtimeRef.off("value",adminResultsRealtimeHandler);}catch(error){console.warn(error);}
  }
  if(adminCourseProgressRealtimeRef && adminCourseProgressRealtimeHandler){
    try{adminCourseProgressRealtimeRef.off("value",adminCourseProgressRealtimeHandler);}catch(error){console.warn(error);}
  }
  if(adminActivityRealtimeRef && adminActivityRealtimeHandler){
    try{adminActivityRealtimeRef.off("value",adminActivityRealtimeHandler);}catch(error){console.warn(error);}
  }
  if(adminTaskProgressRealtimeRef && adminTaskProgressRealtimeHandler){
    try{adminTaskProgressRealtimeRef.off("value",adminTaskProgressRealtimeHandler);}catch(error){console.warn(error);}
  }
  adminResultsRealtimeRef=null;
  adminResultsRealtimeHandler=null;
  adminResultsRealtimeSignature="";
  adminCourseProgressRealtimeRef=null;
  adminCourseProgressRealtimeHandler=null;
  adminCourseProgressRealtimeSignature="";
  adminActivityRealtimeRef=null;
  adminActivityRealtimeHandler=null;
  adminActivityRealtimeSignature="";
  adminTaskProgressRealtimeRef=null;
  adminTaskProgressRealtimeHandler=null;
  adminTaskProgressRealtimeSignature="";
}

function slugify(value){
  return String(value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
}
function readStudentResults(userId){ return readAllResults()[userId] || {}; }

function localDateKey(date=new Date()){
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
}
function formatDuration(seconds){
  const mins=Math.max(0,Math.floor((Number(seconds)||0)/60));
  const hours=Math.floor(mins/60), rest=mins%60;
  return hours ? `${hours} h ${rest} min` : `${rest} min`;
}
function studentRequiredMinutes(user){
  if(user && user.requiredDailyMinutes !== undefined && user.requiredDailyMinutes !== null && user.requiredDailyMinutes !== "")
    return Math.max(0, Number(user.requiredDailyMinutes)||0);
  const group = user && user.groupId ? cloudGroups[user.groupId] : null;
  return Math.max(0, Number(group && group.requiredDailyMinutes) || 30);
}
function studentGroupName(user){
  const group = user && user.groupId ? cloudGroups[user.groupId] : null;
  return group && group.name ? group.name : "Ohne Gruppe";
}
// Groups can now specify their lesson permissions separately for A1, A2, B1 and B2.
// Original A1 student overrides and legacy group.lessonAccess remain supported.
const GROUP_COURSE_LEVELS=["A1","A2","B1","B2"];
function normalizeGroupCourseLevel(level){
  const value=String(level||"A1").toUpperCase();
  return GROUP_COURSE_LEVELS.includes(value)?value:"A1";
}
function groupLessonAccessForLevel(group,level){
  const requestedLevel=normalizeGroupCourseLevel(level);
  const perLevel=group?.lessonAccessByLevel?.[requestedLevel];
  if(perLevel && typeof perLevel==="object")return perLevel;
  if(requestedLevel==="A1" && group?.lessonAccess && typeof group.lessonAccess==="object")return group.lessonAccess;
  return null;
}
const GROUP_UPPER_LEVEL_SECTIONS=[
  {id:"kurs",label:"Kurs",arabic:"الدروس",icon:"📚"},
  {id:"teste",label:"Teste",arabic:"اختبارات الدروس",icon:"📝"},
  {id:"training",label:"Training Prüfung",arabic:"التدريب على الامتحان",icon:"🎯"},
  {id:"pruefungen",label:"Prüfungen",arabic:"الامتحانات",icon:"🏆"}
];
function groupLevelAccessForLevel(group,level){
  const requestedLevel=normalizeGroupCourseLevel(level);
  const access=group?.levelAccess;
  return access && Object.prototype.hasOwnProperty.call(access,requestedLevel)
    ? access[requestedLevel]!==false
    : true;
}
function groupSectionAccessForLevel(group,level){
  const requestedLevel=normalizeGroupCourseLevel(level);
  const defaults={kurs:true,teste:true,training:true,pruefungen:true};
  const saved=group?.sectionAccessByLevel?.[requestedLevel];
  return saved && typeof saved==="object" ? {...defaults,...saved} : defaults;
}
// Competition access is separate from course access. A level is closed for a
// group until an administrator explicitly enables it in that group's settings.
function groupCompetitionLevelAccessForLevel(group,level){
  const requestedLevel=normalizeGroupCourseLevel(level);
  return group?.competitionLevelAccess?.[requestedLevel]===true;
}
function getStudentCompetitionLevelAccess(level){
  if(!currentUser || currentUser.role!=="student")return true;
  if(!currentStudentProfile?.groupId || !currentStudentGroup)return false;
  return groupCompetitionLevelAccessForLevel(currentStudentGroup,level);
}
function competitionLevelHasQuestionBank(level){
  // A1 and A2 have separate source-derived question banks; B1/B2 are still pending.
  return ["A1","A2"].includes(normalizeGroupCourseLevel(level));
}
function getStudentLevelAccess(level){
  if(!currentUser || currentUser.role!=="student")return true;
  const requestedLevel=normalizeGroupCourseLevel(level);
  // A group-level lock is authoritative; a student-specific setting may only add a restriction.
  if(!groupLevelAccessForLevel(currentStudentGroup,requestedLevel))return false;
  const own=currentStudentProfile?.levelAccess;
  return !(own && Object.prototype.hasOwnProperty.call(own,requestedLevel) && own[requestedLevel]===false);
}
function getStudentSectionAccess(level,section){
  if(!currentUser || currentUser.role!=="student")return true;
  const requestedLevel=normalizeGroupCourseLevel(level);
  if(!getStudentLevelAccess(requestedLevel))return false;
  const key=String(section||"");
  if(groupSectionAccessForLevel(currentStudentGroup,requestedLevel)[key]===false)return false;
  const own=currentStudentProfile?.sectionAccessByLevel?.[requestedLevel];
  return !(own && Object.prototype.hasOwnProperty.call(own,key) && own[key]===false);
}
function studentPageLevelRequirement(){
  if(["a2-level-home","a2-lesson-html","a2-course-content","a2-test-html"].includes(page))return "A2";
  if(["upper-level-home","upper-level-section","upper-level-course-lesson","upper-level-training-skill","upper-level-muendlich-subsection","upper-level-muendlich-model"].includes(page))return upperLevelInfo();
  if(["level-home","lessons","lesson-hub","lesson-podcasts","podcasts","podcast-player","tests","test-categories","standalone-lesson-test","lesson-section-html","lesson","interactive-lesson-poster","dialogue","intro-dialogue","numbers","essen","freizeit","stadt","family-tree","category","learning","test","test-result"].includes(page))return "A1";
  return "";
}
function studentPageSectionRequirement(){
  if(page==="upper-level-section")return upperLevelSelectedSection;
  if(page==="upper-level-course-lesson")return "kurs";
  if(["upper-level-training-skill","upper-level-muendlich-subsection","upper-level-muendlich-model"].includes(page))return "training";
  return "";
}
function groupLessonDefaultChecks(group,level){
  const saved=groupLessonAccessForLevel(group,level);
  return Object.fromEntries(Array.from({length:10},(_,index)=>{
    const no=String(index+1);
    return [no,saved && Object.prototype.hasOwnProperty.call(saved,no)?saved[no]!==false:true];
  }));
}
function groupLessonChecksMarkup(level,access){
  const courseLevel=normalizeGroupCourseLevel(level);
  return Array.from({length:10},(_,index)=>{
    const no=index+1;
    return `<label class="admin-lesson-check"><input type="checkbox" name="groupLessons" data-level="${courseLevel}" value="${no}" ${access[String(no)]!==false?"checked":""}><span>${courseLevel} · Lektion ${no}</span></label>`;
  }).join("");
}
function readGroupLessonChecks(level){
  const courseLevel=normalizeGroupCourseLevel(level);
  const container=document.getElementById(`groupLevelLessonChecks-${courseLevel}`);
  const selected=new Set(Array.from(container?.querySelectorAll('input[type="checkbox"][name="groupLessons"]:checked')||[],item=>String(item.value)));
  return Object.fromEntries(Array.from({length:10},(_,index)=>[String(index+1),selected.has(String(index+1))]));
}
function getStudentLessonAccess(lessonIndex,level="A1"){
  if(!currentUser || currentUser.role!=="student")return true;
  const key=String(Number(lessonIndex)+1);
  const requestedLevel=normalizeGroupCourseLevel(level);
  if(!getStudentLevelAccess(requestedLevel))return false;
  if(["B1","B2"].includes(requestedLevel) && !getStudentSectionAccess(requestedLevel,"kurs"))return false;
  const ownByLevel=currentStudentProfile?.lessonAccessByLevel?.[requestedLevel];
  if(ownByLevel && Object.prototype.hasOwnProperty.call(ownByLevel,key))return ownByLevel[key]!==false;
  if(requestedLevel==="A1"){
    const own=currentStudentProfile && currentStudentProfile.lessonAccess;
    if(own && Object.prototype.hasOwnProperty.call(own,key))return own[key]!==false;
  }
  const groupAccess=groupLessonAccessForLevel(currentStudentGroup,requestedLevel);
  if(groupAccess && Object.prototype.hasOwnProperty.call(groupAccess,key))return groupAccess[key]!==false;
  return true;
}
function recordStudentLogin(uid){
  if(!firebaseReady || !uid) return Promise.resolve();
  const key=localDateKey(), now=new Date().toISOString();
  const ref=firebaseDb.ref(`${DEUTSCH_A1_PATH}/activity/${uid}/${key}`);
  return ref.transaction(current=>{
    const data=current||{};
    data.loginCount=(Number(data.loginCount)||0)+1;
    data.lastLoginAt=now;
    data.lastSeenAt=now;
    return data;
  }).then(result=>{
    if(!cloudActivity[uid]) cloudActivity[uid]={};
    cloudActivity[uid][key]=result.snapshot.val() || {};
  });
}
function flushStudentActiveTime(){
  if(!currentUser || currentUser.role!=="student" || !firebaseReady) {
    lastActivityTick=Date.now(); return;
  }
  const now=Date.now();
  const elapsed=Math.max(0,Math.min(30,Math.round((now-lastActivityTick)/1000)));
  lastActivityTick=now;
  if(document.visibilityState==="hidden" || elapsed<1) return;
  const uid=currentUser.id, day=localDateKey(), nowIso=new Date().toISOString();
  const pageKey=String(page||"unknown");
  const testPages=["test","test-result","test-categories","standalone-lesson-test"];
  const coursePages=["lesson","interactive-lesson-poster","category","learning","dialogue","intro-dialogue","numbers","essen","freizeit","stadt","family-tree"];
  const podcastPages=["podcast-player","lesson-podcasts"];
  const activePodcastPage=pageKey==="podcasts" && (!!podcastFilterLesson || !!activePodcastSelection);
  const listeningDialogue=(pageKey==="dialogue"||pageKey==="intro-dialogue") && (dialogueReturnPage==="lesson-podcasts"||dialogueReturnPage==="podcasts");
  const learningPages=[...coursePages,...testPages,...podcastPages,...(activePodcastPage?["podcasts"]:[])];
  const contentType=(podcastPages.includes(pageKey)||activePodcastPage||listeningDialogue)?"podcast":testPages.includes(pageKey)?"test":coursePages.includes(pageKey)?"kurs":null;
  const lessonKey=String(Number(currentLesson)+1);
  const ref=firebaseDb.ref(`${DEUTSCH_A1_PATH}/activity/${uid}/${day}`);
  ref.transaction(current=>{
    const data=current||{};
    data.totalSeconds=(Number(data.totalSeconds)||0)+elapsed;
    data.pageSeconds=data.pageSeconds||{};
    data.pageSeconds[pageKey]=(Number(data.pageSeconds[pageKey])||0)+elapsed;
    if(learningPages.includes(pageKey)){
      data.lessonSeconds=data.lessonSeconds||{};
      data.lessonSeconds[lessonKey]=(Number(data.lessonSeconds[lessonKey])||0)+elapsed;
    }
    if(contentType){
      data.contentSeconds=data.contentSeconds||{};
      data.contentSeconds[lessonKey]=data.contentSeconds[lessonKey]||{};
      data.contentSeconds[lessonKey][contentType]=(Number(data.contentSeconds[lessonKey][contentType])||0)+elapsed;
    }
    data.lastSeenAt=nowIso;
    return data;
  }).catch(error=>console.warn("Activity tracking:",error));
}
function startStudentActivityTracking(){
  if(activityTimer) window.clearInterval(activityTimer);
  lastActivityTick=Date.now();
  activityTimer=window.setInterval(flushStudentActiveTime,15000);
  document.addEventListener("visibilitychange",()=>{lastActivityTick=Date.now();});
  window.addEventListener("focus",()=>{lastActivityTick=Date.now();});
  window.addEventListener("beforeunload",flushStudentActiveTime);
}
function getLatestLogin(activityByDay){
  let latest=null;
  Object.values(activityByDay||{}).forEach(day=>{
    if(day && day.lastLoginAt && (!latest || day.lastLoginAt>latest)) latest=day.lastLoginAt;
  });
  return latest;
}
function getActivityStatus(user, todayActivity){
  const latest=getLatestLogin(cloudActivity[user.id]||{});
  const inactive=!latest || (Date.now()-new Date(latest).getTime())>7*24*60*60*1000;
  const required=studentRequiredMinutes(user);
  const seconds=Number(todayActivity && todayActivity.totalSeconds)||0;
  const insufficient=required>0 && seconds < required*60;
  return {inactive,insufficient,required,seconds,latest,loginCount:Number(todayActivity && todayActivity.loginCount)||0};
}
function showStudentActivityDetails(uid){
  const user=readUsers().find(item=>item.id===uid);if(!user)return;
  const day=localDateKey(), activity=(cloudActivity[uid]||{})[day]||{};
  const lessonLines=Object.entries(activity.lessonSeconds||{}).sort((a,b)=>Number(a[0])-Number(b[0]))
    .map(([lesson,seconds])=>`Lektion ${lesson}: ${formatDuration(seconds)}`);
  const pageLines=Object.entries(activity.pageSeconds||{}).sort((a,b)=>b[1]-a[1])
    .map(([pageName,seconds])=>`${pageName}: ${formatDuration(seconds)}`);
  const text=[
    `Schüler: ${user.name}`,
    `Datum: ${day}`,
    `Anmeldungen: ${Number(activity.loginCount)||0}`,
    `Gesamte aktive Zeit: ${formatDuration(activity.totalSeconds)}`,
    "",
    "Zeit pro Lektion:",
    ...(lessonLines.length?lessonLines:["Noch keine Lektionen erfasst."]),
    "",
    "Zeit pro Bereich:",
    ...(pageLines.length?pageLines:["Noch keine Bereichsdaten."])
  ].join("\\n");
  window.alert(text);
}
function saveGroupFromForm(){
  if(!currentUser || currentUser.role!=="admin") return;
  const name=(document.getElementById("groupName")?.value||"").trim();
  const required=Math.max(0,Number(document.getElementById("groupRequiredMinutes")?.value)||0);
  if(!name){showToast("Bitte einen Gruppennamen eingeben.");return;}
  const id=editingGroupId || (`group_${Date.now()}_${Math.random().toString(36).slice(2,7)}`);
  const old=cloudGroups[id]||{};
  // Save every level's independent open/closed switch.
  const levelAccess=Object.fromEntries(GROUP_COURSE_LEVELS.map(courseLevel=>{
    const input=document.querySelector(`[data-group-level-access="${courseLevel}"]`);
    return [courseLevel,input ? input.checked : groupLevelAccessForLevel(old,courseLevel)];
  }));
  // Competition levels have their own per-group permissions, independent of course access.
  const competitionLevelAccess=Object.fromEntries(GROUP_COURSE_LEVELS.map(courseLevel=>{
    const input=document.querySelector(`[data-group-competition-level-access="${courseLevel}"]`);
    return [courseLevel,input ? input.checked : groupCompetitionLevelAccessForLevel(old,courseLevel)];
  }));
  // B1 and B2 each have four independent sections, matching the student's level dashboard.
  const sectionAccessByLevel={...(old.sectionAccessByLevel||{})};
  ["B1","B2"].forEach(courseLevel=>{
    const panel=document.getElementById(`groupLevelPanel-${courseLevel}`);
    const access={...groupSectionAccessForLevel(old,courseLevel)};
    panel?.querySelectorAll('input[data-group-section-access]').forEach(input=>{
      access[String(input.dataset.section||"")]=input.checked;
    });
    sectionAccessByLevel[courseLevel]=access;
  });
  // Save the four independent Kurs lesson lists together, including the closed accordions.
  const lessonAccessByLevel={
    ...(old.lessonAccessByLevel||{}),
    ...adminGroupLessonDrafts,
    ...Object.fromEntries(GROUP_COURSE_LEVELS.map(courseLevel=>[courseLevel,readGroupLessonChecks(courseLevel)]))
  };
  const level=normalizeGroupCourseLevel(adminGroupLevelDraft||old.level||"A1");
  const lessonAccess=lessonAccessByLevel.A1||groupLessonDefaultChecks(old,"A1");
  const group={...old,id,name,level,requiredDailyMinutes:required,levelAccess,competitionLevelAccess,sectionAccessByLevel,lessonAccessByLevel,
    // Keep the original A1 field for students and older clients that still read it.
    lessonAccess,
    updatedAt:new Date().toISOString(),createdAt:old.createdAt||new Date().toISOString()};
  firebaseDb.ref(`${DEUTSCH_A1_PATH}/groups/${id}`).set(group).then(async()=>{
    editingGroupId=null;adminGroupLevelDraft=null;adminGroupLessonDrafts={};
    await loadDeutschA1Data();render();showToast("Gruppe wurde gespeichert.");
  }).catch(error=>showToast("Gruppe konnte nicht gespeichert werden: "+error.message));
}
function assignStudentGroup(uid, groupId){
  const value=groupId || null;
  firebaseDb.ref(`${DEUTSCH_A1_PATH}/users/${uid}/groupId`).set(value).then(async()=>{
    await loadDeutschA1Data();render();showToast("Gruppe wurde zugewiesen.");
  }).catch(error=>showToast("Gruppenzuweisung fehlgeschlagen: "+error.message));
}
function saveStudentDailyMinutes(uid){
  const input=document.getElementById(`student-minutes-${uid}`);
  const raw=input ? input.value.trim() : "";
  const value=raw==="" ? null : Math.max(0,Number(raw)||0);
  firebaseDb.ref(`${DEUTSCH_A1_PATH}/users/${uid}/requiredDailyMinutes`).set(value).then(async()=>{
    await loadDeutschA1Data();render();showToast(value===null?"Student übernimmt jetzt die Gruppenzeit.":"Tägliche Lernzeit wurde gespeichert.");
  }).catch(error=>showToast("Lernzeit konnte nicht gespeichert werden: "+error.message));
}
function manageStudentLessonAccess(uid){
  if(!currentUser || currentUser.role!=="admin")return;
  const user=readUsers().find(item=>item.id===uid);
  if(!user)return;
  adminEditingStudentLessonsId=uid;
  render();
}
async function saveStudentLessonAccess(uid){
  if(!currentUser || currentUser.role!=="admin" || !firebaseReady)return;
  const user=readUsers().find(item=>item.id===uid);
  if(!user)return;
  const access={};
  document.querySelectorAll('input[name="studentLessonAccess"]:checked').forEach(input=>{
    const no=Number(input.value);
    if(Number.isInteger(no) && no>=1 && no<=10) access[String(no)]=true;
  });
  for(let no=1;no<=10;no++) if(!Object.prototype.hasOwnProperty.call(access,String(no))) access[String(no)]=false;
  try{
    await firebaseDb.ref(`${DEUTSCH_A1_PATH}/users/${uid}/lessonAccess`).set(access);
    adminEditingStudentLessonsId=null;
    await loadDeutschA1Data();
    render();
    showToast("دروس الطالب تحفّظات فـ Firebase.");
  }catch(error){
    showToast("ما قدرناش نحفظو الدروس: "+(error.message||error));
  }
}
async function resetStudentLessonAccess(uid){
  if(!currentUser || currentUser.role!=="admin" || !firebaseReady)return;
  const user=readUsers().find(item=>item.id===uid);
  if(!user)return;
  if(!window.confirm("إرجاع دروس هذا الطالب لإعدادات المجموعة؟"))return;
  try{
    await firebaseDb.ref(`${DEUTSCH_A1_PATH}/users/${uid}/lessonAccess`).remove();
    adminEditingStudentLessonsId=null;
    await loadDeutschA1Data();
    render();
    showToast("الطالب رجع كيتبع دروس المجموعة.");
  }catch(error){
    showToast("ما قدرناش نرجعو إعدادات المجموعة: "+(error.message||error));
  }
}
function closeStudentLessonAccess(){
  adminEditingStudentLessonsId=null;
  render();
}
function deleteGroup(groupId){
  if(!window.confirm("Gruppe löschen? Die Schüler bleiben erhalten und werden keiner Gruppe mehr zugeordnet."))return;
  const updates={};updates[`${DEUTSCH_A1_PATH}/groups/${groupId}`]=null;
  readUsers().filter(user=>user.groupId===groupId).forEach(user=>updates[`${DEUTSCH_A1_PATH}/users/${user.id}/groupId`]=null);
  firebaseDb.ref().update(updates).then(async()=>{editingGroupId=null;await loadDeutschA1Data();render();showToast("Gruppe wurde gelöscht.");})
    .catch(error=>showToast("Gruppe konnte nicht gelöscht werden: "+error.message));
}

let currentUser = readSession();
let page = currentUser ? (currentUser.role === "admin" ? "admin" : "home") : "login";
let selectedLevel = "A1.1";
let upperLevelSelected = "B1";
let upperLevelSelectedSection = "kurs";
let upperLevelSelectedTrainingSkill = "";
let upperLevelSelectedMundlichSection = "";
let upperLevelSelectedMuendlichModel = -1;
let upperLevelSelectedLessonNo = 1;
let currentLesson = 0;
let currentA2LessonNo = 1;
let currentA2TestNo = 1;
let a2TestReturnPage = "a2-level-home";
let lessonSectionType = "course";
let lessonSectionReturnPage = "lesson-hub";
let currentPodcastId = "";
let podcastFilterLesson = null;
let activePodcastSelection = null;
let activePodcastFile = null;
let activePodcastLoading = false;
let activePodcastError = "";
let currentCategory = "Verben";
let categoryReturnPage = "lesson";
let learningTab = "Bilder";
let learningSlideIndex = 0;
let activeVerbCard = null;
let testIndex = 0;
let testScore = 0;
let testChoice = null;
let testAnswered = false;
let testQuestionScores = {};
let testQuestionLabels = {};
let dialogueReturnPage = "lesson";
let testReturnPage = "category";
let testCategoriesReturnPage = "tests";
let courseReturnPage = "lessons";
let lessonHubReturnPage = "level-home";
let podcastReturnPage = "podcasts";
let demoMode = false;
let tutorScenario = "cafe";
let tutorLessonIndex = 0;
let talkReturnPage = "home";
let talkReturnLesson = 0;
let tutorTool = "conversation";
let tutorToolOpen = false;
let tutorKeyboardOpen = false;
let tutorExamplesOpen = false;
let tutorLessonFilterOpen = false;
let tutorVoiceCapture = false;
let tutorVoiceSession = null;
let tutorMessages = [];
let communityRoom = null;
let competitionMode = "duel";
let competitionSelectedLevel = "A1";
let competitionSelectedLessons = [];
let competitionQuestionCount = 10;
let competitionWholeExercises = false;
let competitionExerciseSelections = {};
let competitionExerciseDrafts = {};
let competitionExerciseTileDrafts = {};
// Catalog metadata only: no answer keys or full questions are sent to students.
const competitionTestCatalog = [{"name":"Hallo & Herkunft","types":[{"name":"Verben","count":5},{"name":"Nomen","count":3},{"name":"Adjektive","count":3},{"name":"Präpositionen","count":3},{"name":"Grammatik","count":3}]},{"name":"Familie","types":[{"name":"Verben","count":7},{"name":"Nomen","count":18},{"name":"Adjektive","count":9},{"name":"Präpositionen","count":5},{"name":"Grammatik","count":5}]},{"name":"Wohnen","types":[{"name":"Verben","count":3},{"name":"Nomen","count":3},{"name":"Adjektive","count":3},{"name":"Präpositionen","count":3},{"name":"Grammatik","count":3}]},{"name":"Essen und Trinken","types":[{"name":"Verben","count":3},{"name":"Nomen","count":3},{"name":"Adjektive","count":3},{"name":"Präpositionen","count":3},{"name":"Grammatik","count":3}]},{"name":"Mein Alltag","types":[{"name":"Verben","count":3},{"name":"Nomen","count":3},{"name":"Adjektive","count":3},{"name":"Präpositionen","count":3},{"name":"Grammatik","count":3}]},{"name":"Meine Stadt, meine Wohnung","types":[{"name":"Zusatztest · Wörter verbinden","count":10},{"name":"Zusatztest · Artikel-Detektiv","count":12},{"name":"Zusatztest · Übersetzungsquiz","count":8},{"name":"Zusatztest · Lückensätze","count":8},{"name":"Zusatztest · Satzbau-Werkstatt","count":5},{"name":"Zusatztest · Wo bist du? – Präpositionen","count":6},{"name":"Zusatztest · Verben im Alltag","count":8},{"name":"Zusatztest · Adjektive-Duell","count":4},{"name":"Zusatztest · Lesen und verstehen","count":5},{"name":"Zusatztest · Fehler-Polizei","count":5},{"name":"Zusatztest · Wörter sortieren","count":12},{"name":"Zusatztest · Übersetzungswerkstatt","count":5},{"name":"Zusatztest · Abschlusstest","count":12}]},{"name":"Wie, wo und wann?","types":[{"name":"Zusatztest · Wörter verbinden","count":10},{"name":"Zusatztest · Wetter-Detektiv","count":8},{"name":"Zusatztest · Jahreszeiten und Monate","count":8},{"name":"Zusatztest · Wochentage ergänzen","count":5},{"name":"Zusatztest · Lückensätze","count":8},{"name":"Zusatztest · Satzbau-Werkstatt","count":5},{"name":"Zusatztest · am oder im?","count":8},{"name":"Zusatztest · Verben im Präsens","count":8},{"name":"Zusatztest · Wie, wo oder wann?","count":8},{"name":"Zusatztest · Hördetektiv (Satzverständnis)","count":5},{"name":"Zusatztest · Lesen und verstehen","count":5},{"name":"Zusatztest · Fehler-Polizei","count":5},{"name":"Zusatztest · Wörter sortieren","count":12},{"name":"Zusatztest · Übersetzungswerkstatt","count":5},{"name":"Zusatztest · Abschlusstest","count":12}]},{"name":"Unterwegs","types":[{"name":"Zusatztest · Wörter verbinden","count":10},{"name":"Zusatztest · Artikel-Detektiv","count":12},{"name":"Zusatztest · Übersetzungsquiz","count":8},{"name":"Zusatztest · Lückensätze","count":8},{"name":"Zusatztest · Buchstabensalat","count":8},{"name":"Zusatztest · Satzbau-Werkstatt","count":5},{"name":"Zusatztest · Mit dem Bus oder mit der Bahn?","count":6},{"name":"Zusatztest · Verben unterwegs","count":8},{"name":"Zusatztest · Adjektive-Match","count":8},{"name":"Zusatztest · Lesen und verstehen","count":5},{"name":"Zusatztest · Fehler-Polizei","count":5},{"name":"Zusatztest · Wörter sortieren","count":12},{"name":"Zusatztest · Übersetzungswerkstatt","count":5},{"name":"Zusatztest · Abschlusstest","count":12}]},{"name":"Unter Freunden – Der Flohmarkt","types":[{"name":"Zusatztest · Wörter verbinden","count":10},{"name":"Zusatztest · Artikel-Detektiv","count":12},{"name":"Zusatztest · Übersetzungsquiz","count":10},{"name":"Zusatztest · Lückensätze","count":8},{"name":"Zusatztest · Buchstabensalat","count":8},{"name":"Zusatztest · Satzbau-Werkstatt","count":5},{"name":"Zusatztest · Adjektive im Flohmarkt","count":8},{"name":"Zusatztest · Verben richtig konjugieren","count":8},{"name":"Zusatztest · Adjektive verbinden","count":8},{"name":"Zusatztest · Lesen und verstehen","count":6},{"name":"Zusatztest · Dialog ergänzen","count":4},{"name":"Zusatztest · Fehler-Polizei","count":8},{"name":"Zusatztest · Wörter sortieren","count":16},{"name":"Zusatztest · Übersetzungswerkstatt","count":8},{"name":"Zusatztest · Abschlusstest","count":15}]},{"name":"Gesundheit & Termine","types":[{"name":"Verben","count":3},{"name":"Nomen","count":3},{"name":"Adjektive","count":3},{"name":"Präpositionen","count":3},{"name":"Grammatik","count":3}]}];
const a2CompetitionTestCatalog = [{"name":"Erfahrungen und Pläne","types":[]},{"name":"Gut aussehen","types":[{"name":"Übung 1 · Kleidungsstücke verbinden","count":12},{"name":"Übung 2 · Artikel-Detektiv","count":10},{"name":"Übung 3 · Farben-Quiz","count":10},{"name":"Übung 4 · Welche Kleidung passt?","count":4},{"name":"Übung 5 · Akkusativ – Was trage ich?","count":8},{"name":"Übung 6 · Das Verb tragen","count":7},{"name":"Übung 7 · Hat oder haben?","count":4},{"name":"Übung 8 · Wo? – Präpositionen","count":4},{"name":"Übung 10 · Vergleichssätze","count":6},{"name":"Übung 12 · Lesen und verstehen","count":5},{"name":"Übung 13 · Dialog in einer Boutique","count":5},{"name":"Übung 14 · Wortschatz sortieren","count":12},{"name":"Übung 15 · Als oder wie?","count":8},{"name":"Übung 17 · Abschlusstest","count":12}]},{"name":"Familie und Freunde","types":[{"name":"Übung 1 · Familienwörter verbinden","count":10},{"name":"Übung 2 · Artikel-Detektiv","count":12},{"name":"Übung 3 · Familien-Quiz","count":8},{"name":"Übung 4 · Familienbeziehungen","count":8},{"name":"Übung 7 · Welche Familie ist das?","count":6},{"name":"Übung 8 · Paare: männlich und weiblich","count":8},{"name":"Übung 9 · Adjektive-Duell","count":4},{"name":"Übung 10 · Hördetektiv","count":5},{"name":"Übung 11 · Lesen und verstehen","count":6},{"name":"Übung 14 · Wörter sortieren","count":12},{"name":"Übung 17 · Abschlusstest","count":12}]},{"name":"Die Ferienwohnung","types":[{"name":"Übung 1 · Wörter verbinden","count":10},{"name":"Übung 2 · Artikel-Detektiv","count":12},{"name":"Übung 3 · Übersetzungsquiz","count":8},{"name":"Übung 4 · Lückensätze","count":8},{"name":"Übung 7 · Wo bist du? – Präpositionen","count":8},{"name":"Übung 8 · Verben: stehen, stellen, liegen, legen, hängen","count":8},{"name":"Übung 9 · Verben und ihr Gegenteil","count":6},{"name":"Übung 10 · Hördetektiv","count":5},{"name":"Übung 11 · Lesen und verstehen","count":6},{"name":"Übung 14 · Wörter sortieren","count":12},{"name":"Übung 17 · Abschlusstest","count":12}]},{"name":"Guten Appetit","types":[{"name":"Übung 1 · Lebensmittel verbinden","count":10},{"name":"Übung 2 · Artikel-Detektiv","count":12},{"name":"Übung 4 · Lebensmittel-Verben","count":8},{"name":"Übung 7 · Akkusativ: Mengenangaben","count":6},{"name":"Übung 8 · Was passt nicht?","count":5},{"name":"Übung 9 · Müll richtig sortieren","count":4},{"name":"Übung 10 · Was ist falsch?","count":4},{"name":"Übung 11 · Lesen und verstehen","count":5},{"name":"Übung 12 · Dialog im Restaurant","count":5},{"name":"Übung 14 · Gast oder Kellner?","count":5},{"name":"Übung 15 · Konjunktiv II: Formen","count":12},{"name":"Übung 16 · Sätze ergänzen","count":8},{"name":"Übung 17 · Abschlusstest","count":12}]},{"name":"Gefühle und Streetart","types":[{"name":"Übung 1 · Gefühle erkennen","count":5},{"name":"Übung 2 · Gefühle und Situationen","count":5},{"name":"Übung 3 · Synonyme","count":5},{"name":"Übung 4 · Lückensätze: Gefühle","count":5},{"name":"Übung 5 · Streetart-Wortschatz","count":11},{"name":"Übung 6 · Lesen: Streetart in Berlin","count":10},{"name":"Übung 7 · Meinungen ausdrücken","count":5},{"name":"Übung 8 · dies- und Possessivpronomen","count":15},{"name":"Übung 9 · Reflexivpronomen","count":9},{"name":"Übung 10 · Reflexive Verben im Satz","count":14},{"name":"Übung 13 · Lesen: Open-Air-Kino","count":5},{"name":"Übung 14 · Zeitangaben und Dativ","count":13},{"name":"Übung 15 · Reflexivpronomen im Kontext","count":13},{"name":"Übung 17 · Abschlusstest","count":12}]},{"name":"Schule und Beruf","types":[{"name":"Übung 1 · Wortverbindungen","count":10},{"name":"Übung 2 · Was passt?","count":12},{"name":"Übung 3 · Übersetzungsquiz","count":8},{"name":"Übung 4 · Lückensätze","count":8},{"name":"Übung 7 · Mit oder ohne?","count":6},{"name":"Übung 8 · Modalverben im Präteritum","count":8},{"name":"Übung 9 · Ausdrücke zuordnen","count":4},{"name":"Übung 10 · Hördetektiv","count":5},{"name":"Übung 11 · Die Welt ist mein Büro","count":5},{"name":"Übung 14 · Grammatik sortieren","count":12},{"name":"Übung 17 · Abschlusstest","count":12}]},{"name":"Glück und Gesundheit","types":[{"name":"Übung 1 · Körper-Quiz","count":5},{"name":"Übung 2 · Körperteile verbinden","count":8},{"name":"Übung 3 · Richtig oder falsch?","count":5},{"name":"Übung 4 · Unser Herz","count":5},{"name":"Übung 5 · Was fehlt Ihnen?","count":6},{"name":"Übung 6 · Dr. Brinkmann und seine Patienten","count":5},{"name":"Übung 7 · Verben in der richtigen Form","count":5},{"name":"Übung 8 · Beim Arzt sprechen","count":5},{"name":"Übung 9 · Gefühle zuordnen","count":6},{"name":"Übung 10 · Positiv oder negativ?","count":8},{"name":"Übung 11 · Wer ist am glücklichsten?","count":5},{"name":"Übung 12 · in, seit oder bis?","count":7},{"name":"Übung 13 · von … bis","count":4},{"name":"Übung 14 · Vergleiche: als oder wie?","count":5},{"name":"Übung 16 · Adjektivendungen","count":8},{"name":"Übung 17 · Abschlusstest","count":12}]},{"name":"Flohmarkt und Wochenende","types":[{"name":"Abschlusstest","count":8}]},{"name":"Reisen und Urlaubserlebnisse","types":[{"name":"Abschlusstest","count":8}]}];
function competitionCatalogForLevel(level=competitionSelectedLevel){
  return normalizeGroupCourseLevel(level)==="A2"?a2CompetitionTestCatalog:competitionTestCatalog;
}
function competitionLessonsForLevel(level=competitionSelectedLevel){
  return normalizeGroupCourseLevel(level)==="A2"?a2CourseLessons:lessons;
}
function competitionLessonHasBank(index,level=competitionSelectedLevel){
  return Boolean(competitionCatalogForLevel(level)[Number(index)]?.types?.length);
}
function competitionLessonAccess(index,level=competitionSelectedLevel){
  const requestedLevel=normalizeGroupCourseLevel(level);
  return requestedLevel==="A1"&&Number(index)===10
    ?getStudentLessonAccess(6,"A1")
    :getStudentLessonAccess(Number(index),requestedLevel);
}
function competitionLessonName(index,level=competitionSelectedLevel){
  const lesson=competitionLessonsForLevel(level)[Number(index)];
  const bankLesson=competitionCatalogForLevel(level)[Number(index)];
  return bankLesson?.name||lesson?.title||lesson?.name||`L${Number(index)+1}`;
}
let competitionSelectedTestTypes = {};
let competitionExpandedLesson = null;
function competitionEnsureTypes(lessonIndex){
  const all=competitionCatalogForLevel()[lessonIndex]?.types||[];
  const current=competitionSelectedTestTypes[lessonIndex];
  if(!Array.isArray(current)){
    competitionSelectedTestTypes[lessonIndex]=all.map((_,i)=>i);
  }
  return competitionSelectedTestTypes[lessonIndex];
}
function competitionAvailableQuestionCount(){
  return competitionSelectedLessons.reduce((total,lessonIndex)=>{
    const types=competitionCatalogForLevel()[lessonIndex]?.types||[];
    return total+competitionEnsureTypes(lessonIndex).reduce((num,typeIndex)=>num+(types[typeIndex]?.count||0),0);
  },0);
}
function competitionTypeTitle(name){
  return String(name||'Test').replace(/^L7 A1\.1\s*·\s*/,'').replace(/^Zusatztest\s*·\s*/,'').replace(/^Übung\s*\d+\s*·\s*/,'').trim();
}
function competitionSelectedTypePayload(){
  return Object.fromEntries(competitionSelectedLessons.map(index=>[String(index),competitionEnsureTypes(index).slice()]));
}

let competitionRoomId = null;
let competitionRoomCode = "";
let competitionRoomData = null;
let competitionRoomPollTimer = null;
let competitionRoomPollBusy = false;
let competitionRoomLastSignature = "";
let competitionRoomError = "";
let competitionQuestionIndex = 0;
let competitionFeedback = null;
let competitionSubmitting = false;
let competitionBusy = false;
let competitionCreateMessage = "";
let competitionCreateMessageIsError = false;
let competitionGlobalStats = [];
let competitionPersonalRecords = [];
let competitionSelfChallengeId = "";
let competitionSelfChallengeData = null;
let competitionSelfFeedback = null;
let competitionSelfSubmitting = false;
function competitionSelfStorageKey(){
  const uid=competitionAuthenticatedUid();
  return uid?`deutsch_a1_self_challenge_v1_${uid}`:"";
}
function competitionActiveQuizData(){
  return competitionSelfChallengeId?competitionSelfChallengeData:competitionRoomData;
}
function renderActiveCompetitionQuiz(){
  if(competitionSelfChallengeId)renderCompetitionSelfChallenge();
  else renderCompetitionRoom();
}

const app = document.getElementById("app");
const toast = document.getElementById("toast");

const UI_DISPLAY_PREFERENCES_KEY = "deutsch_a1_ui_preferences_v1";
const UI_DISPLAY_DEFAULTS = { textScale: 1.08, iconScale: 1.12 };

function readUiDisplayPreferences(){
  try{
    const saved = JSON.parse(localStorage.getItem(UI_DISPLAY_PREFERENCES_KEY) || "{}") || {};
    const textScale = Number(saved.textScale);
    const iconScale = Number(saved.iconScale);
    return {
      textScale: Number.isFinite(textScale) ? Math.min(1.30, Math.max(0.90, textScale)) : UI_DISPLAY_DEFAULTS.textScale,
      iconScale: Number.isFinite(iconScale) ? Math.min(1.40, Math.max(0.90, iconScale)) : UI_DISPLAY_DEFAULTS.iconScale
    };
  }catch(error){
    return {...UI_DISPLAY_DEFAULTS};
  }
}

function saveUiDisplayPreferences(preferences){
  try{ localStorage.setItem(UI_DISPLAY_PREFERENCES_KEY, JSON.stringify(preferences)); }catch(error){}
}

function markUiScalableText(root){
  if(!root || !document.createTreeWalker) return;
  const start = root.nodeType === 1 ? root : root.parentElement;
  if(!start) return;

  const elements = new Set();
  const walker = document.createTreeWalker(start, NodeFilter.SHOW_TEXT, {
    acceptNode(node){
      if(!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if(!parent || parent.closest("script,style,noscript,svg,math")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  let node;
  while((node = walker.nextNode())) elements.add(node.parentElement);

  if(start.matches && start.matches("input,textarea,select")) elements.add(start);
  start.querySelectorAll && start.querySelectorAll("input,textarea,select").forEach(el=>elements.add(el));

  // Temporarily remove previous scaling classes so newly inserted text inherits
  // its true, unscaled CSS size before its baseline is recorded.
  const previouslyScaled = Array.from(document.querySelectorAll(".ui-scalable-text"));
  previouslyScaled.forEach(el=>el.classList.remove("ui-scalable-text"));
  elements.forEach(el=>{
    if(!el.dataset.uiBaseFontSize){
      const size = getComputedStyle(el).fontSize || "16px";
      el.dataset.uiBaseFontSize = size;
      el.style.setProperty("--ui-base-font-size", size);
    }
  });
  previouslyScaled.forEach(el=>el.classList.add("ui-scalable-text"));
  elements.forEach(el=>el.classList.add("ui-scalable-text"));
}

function markUiScalableIcons(root){
  if(!root) return;
  const selector = 'svg,[class*="icon"],.test-app-icon,.mini-mark,.brand-mark,.circle-icon,.stage-nav-icon';
  const candidates = [];
  if(root.nodeType === 1 && root.matches && root.matches(selector)) candidates.push(root);
  if(root.querySelectorAll) candidates.push(...root.querySelectorAll(selector));
  candidates.forEach(el=>{
    if(el.parentElement && el.parentElement.closest(".ui-scalable-icon")) return;
    el.classList.add("ui-scalable-icon");
  });
}

function applyUiDisplayPreferences(){
  const preferences = readUiDisplayPreferences();
  document.documentElement.style.setProperty("--ui-text-scale", String(preferences.textScale));
  document.documentElement.style.setProperty("--ui-icon-scale", String(preferences.iconScale));
  const root = document.getElementById("app") || document.body;
  markUiScalableText(root);
  markUiScalableIcons(root);

  // Keep same-origin lesson/test pages in sync while they are open.
  document.querySelectorAll("iframe").forEach(frame=>{
    try{
      frame.contentWindow.postMessage({
        type:"deutsch-a1-ui-preferences",
        preferences
      },"*");
    }catch(error){}
  });
}

function refreshUiTextBaselines(){
  const nodes = Array.from(document.querySelectorAll(".ui-scalable-text"));
  nodes.forEach(el=>el.classList.remove("ui-scalable-text"));
  nodes.forEach(el=>{
    const size = getComputedStyle(el).fontSize || el.dataset.uiBaseFontSize || "16px";
    el.dataset.uiBaseFontSize = size;
    el.style.setProperty("--ui-base-font-size", size);
  });
  nodes.forEach(el=>el.classList.add("ui-scalable-text"));
}



function setStudentPageForTab(tab){
  if(tab==="home") page="home";
  else if(tab==="learn") page="learn-hub";
  else if(tab==="talk"){
    talkReturnPage="home";talkReturnLesson=currentLesson;
    tutorLessonIndex=getHomeLessonIndex();currentLesson=tutorLessonIndex;tutorTool="conversation";tutorToolOpen=false;tutorMessages=[];page="talk";
  }else if(tab==="sessions") page="sessions";
  else if(tab==="progress"){studentResultsActiveTool="";page="student-results";}
  else if(tab==="community"){page="community";communityRoom=null;}
  else return false;
  return true;
}
function applyTabFromHash(){
  try{
    const route=new URLSearchParams(window.location.hash.replace(/^#/,""));
    if(route.get("return")==="b2-muendlich"){
      // V49: restore the exact B2/Mündlich menu after same-tab speaking training.
      upperLevelSelected="B2";
      upperLevelSelectedSection="training";
      upperLevelSelectedTrainingSkill="muendlich";
      upperLevelSelectedMundlichSection="";
      page="upper-level-training-skill";
      try{window.history.replaceState(window.history.state,"",window.location.pathname+window.location.search);}catch(e){}
      return true;
    }
    const tab=route.get("tab");
    return tab ? setStudentPageForTab(tab) : false;
  }catch(error){return false;}
}
window.addEventListener("hashchange",function(){
  if(currentUser && currentUser.role==="student" && applyTabFromHash()) render();
});


function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function lessonNumber(){ return currentLesson + 1; }
function lessonData(){ return lessons[currentLesson]; }
function items(){ return lessonData().data[currentCategory] || []; }
// The visual vocabulary uses the exact illustrated words from the corresponding
// standalone course lesson. Tests continue to use the original lessonData arrays.
function learningItems(){
  const courseLesson=window.DEUTSCH_LESSON_VOCABULARY && window.DEUTSCH_LESSON_VOCABULARY[String(lessonNumber())];
  const courseWords=courseLesson && courseLesson[currentCategory];
  if(!Array.isArray(courseWords) || !courseWords.length) return items();
  return courseWords.map(entry=>{
    const item=[String(entry.de||""),String(entry.ar||""),String(entry.example||""),"📚"];
    item.imageUrl=String(entry.image||"");
    item.groupTitle=String(entry.group||"");
    item.speakText=String(entry.speak||entry.de||"");
    return item;
  });
}
function levelLessons(){
  return selectedLevel === "A1.1" ? [0,1,2,3,4] : [5,6,7,8,9];
}
function header(){
  const name = escapeHtml(currentUser?.name || "متعلّم");
  const pageTitles = {
    home:"اليوم", "learn-hub":"تعلّم", levels:"تعلّم", "level-home":"تعلّم",
    "a2-level-home":"تعلّم", "a2-lesson-html":"تعلّم", "a2-course-content":"تعلّم",
    "upper-level-home":"تعلّم", "upper-level-section":"تعلّم", "upper-level-course-lesson":"تعلّم",
    lessons:"تعلّم", "lesson-hub":"تعلّم", "lesson-podcasts":"تعلّم",
    podcasts:"تعلّم", "podcast-player":"تعلّم", tests:"تعلّم",
    "test-categories":"تعلّم", "standalone-lesson-test":"تعلّم",
    lesson:"تعلّم", "interactive-lesson-poster":"تعلّم", dialogue:"تعلّم",
    "intro-dialogue":"تعلّم", numbers:"تعلّم", essen:"تعلّم",
    freizeit:"تعلّم", stadt:"تعلّم", "family-tree":"تعلّم",
    category:"تعلّم", learning:"تعلّم", test:"تعلّم",
    "test-result":"تعلّم", "custom-content":"تعلّم", talk:"تكلّم", sessions:"الجلسات",
    community:"المجتمع", competition:"المنافسة", "student-results":"تقدّمي", settings:settingsStrings().settings
  };
  const title = pageTitles[page] || "Deutsch";
  const level = ["upper-level-home","upper-level-section","upper-level-course-lesson"].includes(page) ? upperLevelInfo()
    : (["a2-level-home","a2-lesson-html","a2-course-content","a2-test-html"].includes(page) ? "A2" : (selectedLevel || "A1.1"));
  if(page==="student-results"){
    return `<header class="student-topbar student-topbar-progress student-results-header">
      <button class="student-results-header-trophy" type="button" data-action="student-results-jump" data-target="resultsAchievements" aria-label="الإنجازات" title="الإنجازات">🏆</button>
      <div class="student-results-header-title"><strong>نتائجي وإحصائياتي</strong><small>${name} · ${level}</small></div>
      <button class="student-results-header-settings" type="button" data-action="student-settings" aria-label="الإعدادات" title="الإعدادات">⚙</button>
    </header>`;
  }
  return `<header class="student-topbar">
    <div class="student-topbar-brand">
      <span class="student-brand-mark">D</span>
      <span class="student-brand-copy"><strong>${title}</strong><small>${name} · ${level}</small></span>
    </div>
    <div class="student-topbar-actions">
      <span class="student-greeting"><strong>${name}</strong><small>متعلّم نشط</small></span>
      <button class="student-icon-btn" type="button" data-action="student-notifications" aria-label="الإشعارات" title="الإشعارات">♧</button>
      <button class="student-icon-btn" type="button" data-action="student-settings" aria-label="الإعدادات" title="الإعدادات">⚙</button>
    </div>
  </header>`;
}
function studentNavActive(){
  if(page === "student-results") return "progress";
  if(page === "talk") return "talk";
  if(page === "sessions") return "sessions";
  if(page === "community") return "community";
  if(page === "competition") return "competition";
  if(["learn-hub","levels","level-home","a2-level-home","upper-level-home","upper-level-section","upper-level-training-skill","upper-level-muendlich-subsection","upper-level-muendlich-model","a2-lesson-html","a2-course-content","a2-test-html","lessons","lesson-hub","lesson-podcasts","podcasts","podcast-player","tests","test-categories","standalone-lesson-test","lesson","interactive-lesson-poster","dialogue","intro-dialogue","numbers","essen","freizeit","stadt","family-tree","category","learning","test","test-result","custom-content"].includes(page)) return "learn";
  return "home";
}

function studentBottomNav(active){
  const icons = {
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7"/><path d="M5.5 9.5V21h13V9.5"/><path d="M9 21v-7h6v7"/></svg>',
    learn: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7v14"/><path d="M3.5 5.5A2.5 2.5 0 0 1 6 3h6v18H6a2.5 2.5 0 0 0-2.5 2.5z"/><path d="M20.5 5.5A2.5 2.5 0 0 0 18 3h-6v18h6a2.5 2.5 0 0 1 2.5 2.5z"/></svg>',
    talk: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="2.5" width="6" height="12" rx="3"/><path d="M5 11.5a7 7 0 0 0 14 0"/><path d="M12 18.5V22M8.5 22h7"/></svg>',
    sessions: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V21"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-1.5a4 4 0 0 0-3-3.87M16 3.2a4 4 0 0 1 0 7.6"/></svg>',
    progress: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V11M10 20V4M16 20v-7M22 20H2"/></svg>',
    community: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a7.5 7.5 0 0 1-7.5 7.5H7l-4 2v-5.5A7.5 7.5 0 1 1 21 11.5Z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/></svg>',
    competition: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v4a4 4 0 0 1-8 0V4Z"/><path d="M8 6H5v2a4 4 0 0 0 4 4M16 6h3v2a4 4 0 0 1-4 4M12 12v5M8 21h8M10 17h4"/></svg>'
  };
  const tabs = [
    ["home","اليوم"],
    ["learn","تعلّم"],
    ["talk","تكلّم"],
    ["progress","تقدّمي"],
    ["community","المجتمع"],
    ["competition","المنافسة"]
  ];
  return `<nav class="student-bottom-nav" aria-label="التنقل الرئيسي">${tabs.map(([tab,label]) =>
    `<button type="button" class="student-nav-btn ${active===tab?"active":""}" data-action="student-nav" data-tab="${tab}" ${active===tab?'aria-current="page"':""}>
      <span class="student-nav-icon">${icons[tab]}</span><span>${label}</span>
    </button>`
  ).join("")}</nav>`;
}

function studentLayout(content, active){
  return `<div class="student-app" dir="rtl">${header()}<main class="student-main">${content}</main>${studentBottomNav(active || studentNavActive())}</div>`;
}

function pageShell(eyebrow,title,subtitle,content){
  const pagesWithHeaderBack = new Set([
    "learn-hub","levels","level-home","a2-level-home","upper-level-home","upper-level-section","upper-level-training-skill","upper-level-muendlich-subsection","upper-level-muendlich-model","upper-level-course-lesson","lessons","lesson-hub","lesson-podcasts",
    "tests","test-categories","lesson","category","learning","test","test-result",
    "sessions","community","settings"
  ]);
  const onSettings = page==="settings";
  const prefs = onSettings ? readSettingsLanguages() : null;
  const languageDir = prefs?.ui === "ar" || !prefs ? "rtl" : "ltr";
  const backText = onSettings ? settingsStrings().back : "رجوع";
  const backArrow = languageDir === "rtl" ? "→" : "←";
  const backControl = pagesWithHeaderBack.has(page)
    ? `<div class="student-page-back-row"><button type="button" class="student-page-back" data-action="back"><span aria-hidden="true">${backArrow}</span><span>${escapeHtml(backText)}</span></button></div>`
    : "";
  const result = `${backControl}<section class="student-page-heading">
    <p class="student-eyebrow">${eyebrow}</p>
    <h1>${title}</h1>
    <p>${subtitle}</p>
  </section><div class="student-page-content">${content}</div>`;
  return studentLayout(onSettings?`<div class="settings-page-lang-wrap" lang="${prefs.ui}" dir="${languageDir}">${result}</div>`:result);
}

function dailyPlanStorageKey(){
  return `deutsch_a1_daily_v1_${currentUser?.id || "guest"}_${localDateKey()}`;
}

function homeLessonStorageKey(){
  return `deutsch_a1_home_lesson_v1_${currentUser?.id || "guest"}`;
}

function getHomeLessonIndex(){
  try{
    const raw = localStorage.getItem(homeLessonStorageKey());
    if(raw !== null){
      const saved = Number(raw);
      if(Number.isInteger(saved) && saved>=0 && saved<lessons.length) return saved;
    }
  }catch(error){}
  return Number.isInteger(currentLesson) ? Math.max(0,Math.min(lessons.length-1,currentLesson)) : 0;
}

function rememberHomeLesson(index){
  const value = Number(index);
  if(!Number.isInteger(value) || value<0 || value>=lessons.length) return;
  currentLesson = value;
  try{ localStorage.setItem(homeLessonStorageKey(),String(value)); }catch(error){}
}

function readDailyPlan(){
  const defaults = {
    tasks:{vocab:false,listening:false,grammar:false},
    goals:{lesson:false,practice:false}
  };
  try{
    const saved = JSON.parse(localStorage.getItem(dailyPlanStorageKey()) || "{}") || {};
    const plan = {
      ...defaults,
      ...saved,
      tasks:{...defaults.tasks,...(saved.tasks||{})},
      goals:{...defaults.goals,...(saved.goals||{})}
    };
    if(Object.values(plan.tasks).some(Boolean)) plan.goals.practice = true;
    return plan;
  }catch(error){ return defaults; }
}

function saveDailyPlan(plan){
  try{ localStorage.setItem(dailyPlanStorageKey(),JSON.stringify(plan)); }catch(error){}
}

function markDailyLessonStarted(){
  const plan = readDailyPlan();
  plan.goals.lesson = true;
  saveDailyPlan(plan);
}

function setDailyTaskDone(taskId){
  const plan = readDailyPlan();
  if(!Object.prototype.hasOwnProperty.call(plan.tasks,taskId)) return;
  plan.tasks[taskId] = true;
  plan.goals.practice = true;
  saveDailyPlan(plan);
}

function openDailyTask(taskId){
  const lessonIndex = getHomeLessonIndex();
  rememberHomeLesson(lessonIndex);
  selectedLevel = lessonIndex < 5 ? "A1.1" : "A1.2";
  const plan = readDailyPlan();
  plan.goals.practice = true;
  saveDailyPlan(plan);
  if(taskId === "vocab"){
    currentCategory = "Nomen"; page = "category";
  }else if(taskId === "listening"){
    page = "podcasts";
  }else{
    page = "tests";
  }
  render();
}

function dailyTaskStageMeta(stage){
  const map={
    kurs:{icon:"📚",label:"Kurs · الدروس"},
    vocabulary:{icon:"📖",label:"Wortschatz · المفردات"},
    grammar:{icon:"📐",label:"Grammatik · القواعد"},
    teste:{icon:"📝",label:"Teste · الاختبارات"},
    "training-lesen":{icon:"📖",label:"Training Prüfung · Lesen"},
    "training-schreiben":{icon:"✍️",label:"Training Prüfung · Schreiben"},
    "training-hoeren":{icon:"🎧",label:"Training Prüfung · Hören"},
    "training-muendlich":{icon:"💬",label:"Training Prüfung · Mündlich"},
    pruefungen:{icon:"🏆",label:"Prüfungen · نماذج الامتحان"},
    general:{icon:"📌",label:"Aufgabe · مهمة عامة"}
  };
  return map[String(stage||"general")]||map.general;
}
function getStudentAssignedDailyTasksForToday(){
  if(!currentUser || currentUser.role!=="student" || !currentStudentGroup || demoMode)return [];
  const today=localDateKey();
  return Object.entries(currentStudentGroup.dailyTasks||{}).map(([id,task])=>({id,...(task||{})}))
    .filter(task=>{
      if(!task.id || task.published!==true)return false;
      const start=String(task.startDate||"").trim();
      const end=String(task.dueDate||"").trim();
      if(task.schedule==="daily"){
        if(start && today<start)return false;
        if(end && today>end)return false;
      }else{
        const visibleDate=start||end;
        if(visibleDate && visibleDate!==today)return false;
        if(end && today>end)return false;
      }
      if(task.targetMode==="students"){
        const targets=task.targetStudents||{};
        const assigned=Array.isArray(targets)?targets.includes(currentUser.id):targets[currentUser.id]===true;
        if(!assigned)return false;
      }
      return true;
    })
    .sort((a,b)=>({high:0,normal:1,low:2}[a.priority]??1)-({high:0,normal:1,low:2}[b.priority]??1)||String(a.dueDate||"9999-99-99").localeCompare(String(b.dueDate||"9999-99-99")));
}
function assignedTaskProgressKey(taskId,task){
  return task?.schedule==="daily"?`${taskId}_${localDateKey()}`:taskId;
}
function getStudentAssignedTaskProgress(taskId,task=null){
  const assigned=task||getStudentAssignedDailyTasksForToday().find(item=>item.id===taskId);
  const key=assignedTaskProgressKey(taskId,assigned);
  return cloudTaskProgress?.[currentUser?.id]?.[key]||{};
}
async function markStudentAssignedTaskStarted(taskId){
  if(!currentUser || currentUser.role!=="student" || !firebaseReady || demoMode)return;
  const task=getStudentAssignedDailyTasksForToday().find(item=>item.id===taskId);
  const progressKey=assignedTaskProgressKey(taskId,task);
  const previous=getStudentAssignedTaskProgress(taskId,task);
  const now=new Date().toISOString();
  const patch={startedAt:previous.startedAt||now,lastOpenedAt:now};
  await firebaseDb.ref(`${DEUTSCH_A1_PATH}/taskProgress/${currentUser.id}/${progressKey}`).update(patch);
  if(!cloudTaskProgress[currentUser.id])cloudTaskProgress[currentUser.id]={};
  cloudTaskProgress[currentUser.id][progressKey]={...previous,...patch};
}
async function completeStudentAssignedTask(taskId){
  if(!currentUser || currentUser.role!=="student" || !firebaseReady || demoMode){showToast("خاصك تكون داخل بحساب تلميذ باش يتسجل الإنجاز.");return;}
  const task=getStudentAssignedDailyTasksForToday().find(item=>item.id===taskId);
  if(!task)return;
  const progressKey=assignedTaskProgressKey(taskId,task);
  const now=new Date().toISOString();
  const previous=getStudentAssignedTaskProgress(taskId,task);
  const patch={startedAt:previous.startedAt||now,done:true,completedAt:now,updatedAt:now};
  try{
    await firebaseDb.ref(`${DEUTSCH_A1_PATH}/taskProgress/${currentUser.id}/${progressKey}`).update(patch);
    if(!cloudTaskProgress[currentUser.id])cloudTaskProgress[currentUser.id]={};
    cloudTaskProgress[currentUser.id][progressKey]={...previous,...patch};
    showToast("تسجلات المهمة كمكتملة. أحسنت!");
    renderHome();
  }catch(error){
    console.error("Assigned task completion could not be saved:",error);
    showToast("ما قدرناش نسجلو إنجاز المهمة. تحقق من Firebase Rules.");
  }
}
function openAssignedDailyTaskDefault(task){
  const level=normalizeGroupCourseLevel(currentStudentGroup?.level||"A1");
  const lessonNo=Math.max(1,Math.min(10,Number(task.lessonNo)||1));
  const stage=String(task.stage||"general");
  if(stage==="kurs"){
    if(level==="A1"){
      currentLesson=Math.max(0,Math.min(lessons.length-1,lessonNo-1));
      rememberHomeLesson(currentLesson);
      selectedLevel=currentLesson<5?"A1.1":"A1.2";
      lessonHubReturnPage="home";page="lesson-hub";
    }else if(level==="A2"){
      currentA2LessonNo=lessonNo;page="a2-lesson-html";
    }else{
      upperLevelSelected=level;upperLevelSelectedLessonNo=lessonNo;page="upper-level-course-lesson";
    }
  }else if(stage==="vocabulary"){
    if(level==="B1"||level==="B2"){
      showToast("باش تفتح مفردات B1/B2، زيد رابط المحتوى فإعداد المهمة.");
      return;
    }
    studentVocabularyReviewLevel=level;studentVocabularyReviewLesson=lessonNo;
    studentResultsReturnPage="home";studentResultsActiveTool="resultsVocabulary";studentResultsActiveSkill="vocab";studentResultsSkillDetailOpen=false;page="student-results";
  }else if(stage==="grammar" || stage==="teste"){
    if(level==="B1"||level==="B2"){
      upperLevelSelected=level;upperLevelSelectedSection="teste";page="upper-level-section";
    }else if(level==="A2"){
      currentA2LessonNo=lessonNo;
      if(stage==="teste" && a2CourseLessons.find(item=>item.number===lessonNo)?.test){currentA2TestNo=lessonNo;a2TestReturnPage="a2-lesson-html";page="a2-test-html";}
      else page="a2-lesson-html";
    }else if(stage==="grammar"){
      selectedLevel="A1.1";currentLesson=lessonNo-1;currentCategory="Grammatik";page="category";
    }else{
      selectedLevel="A1.1";currentLesson=lessonNo-1;page="tests";
    }
  }else if(stage.startsWith("training-")){
    const skill=stage.replace("training-","");
    if(level==="B1"||level==="B2"){
      upperLevelSelected=level;upperLevelSelectedSection="training";upperLevelSelectedTrainingSkill=skill;page="upper-level-training-skill";
    }else if(skill==="lesen"){
      showToast("باش تفتح تدريب Lesen فـ A1/A2، زيد رابط ملف القراءة فإعداد المهمة.");
      return;
    }else{
      const skillMap={schreiben:"writing",hoeren:"listening",muendlich:"speaking"};
      studentResultsReturnPage="home";studentResultsActiveTool="resultsSkills";studentResultsActiveSkill=skillMap[skill]||"sentences";studentResultsSkillDetailOpen=true;
      studentSkillLearningLesson=lessonNo;studentSkillLearningMode="browse";studentSkillResetPractice();page="student-results";
    }
  }else if(stage==="pruefungen"){
    if(level==="B1"||level==="B2"){
      upperLevelSelected=level;upperLevelSelectedSection="pruefungen";page="upper-level-section";
    }else if(level==="A2"){
      showToast("باش تفتح نموذج امتحان A2، زيد رابط النموذج فإعداد المهمة.");
      return;
    }else page="tests";
  }else if(stage==="general"){
    showToast(task.description||"راجع تعليمات المهمة، وإذا كان عندها رابط افتحو من بطاقة المهمة.");
    return;
  }
  render();
}
async function openAssignedDailyTask(taskId){
  const task=getStudentAssignedDailyTasksForToday().find(item=>item.id===taskId);
  if(!task)return;
  try{await markStudentAssignedTaskStarted(taskId);}catch(error){console.warn("Could not save assigned task start:",error);}
  const path=String(task.path||"").trim();
  if(path){
    if(/^https?:\/\//i.test(path))window.location.href=path;
    else window.location.href=path.replace(/^\/+/,"");
    return;
  }
  openAssignedDailyTaskDefault(task);
}

function renderHome(){
  const lessonIndex = getHomeLessonIndex();
  rememberHomeLesson(lessonIndex);
  const todayLesson = lessons[lessonIndex] || lessons[0];
  const todayLevel = lessonIndex < 5 ? "A1.1" : "A1.2";
  selectedLevel = todayLevel;

  const plan = readDailyPlan();
  const adminAssignedTasks = getStudentAssignedDailyTasksForToday();
  const adminControlsPlan = Boolean(currentStudentGroup && !demoMode);
  const taskMeta = adminControlsPlan
    ? adminAssignedTasks.map(task=>{
        const meta=dailyTaskStageMeta(task.stage);
        return {id:task.id,icon:task.icon||meta.icon,title:task.title||meta.label,detail:task.description||meta.label,time:`${Math.max(0,Number(task.durationMinutes)||0)} د`,assigned:true,dueDate:task.dueDate||""};
      })
    : [
        {id:"vocab",icon:"🔁",title:"مراجعة 9 كلمات",time:"6 د",detail:`راجع مفردات ${todayLesson.name}`},
        {id:"listening",icon:"👂",title:"تدريب الاستماع",time:"18 د",detail:"استمع إلى حوار ألماني قصير"},
        {id:"grammar",icon:"📐",title:"تمرين القواعد",time:"13 د",detail:`اختبر فهمك لقواعد ${todayLevel}`}
      ];
  const isTaskDone = task => task.assigned ? Boolean(getStudentAssignedTaskProgress(task.id).done) : Boolean(plan.tasks[task.id]);
  const doneCount = taskMeta.filter(isTaskDone).length;
  const totalDailyTasks = taskMeta.length;
  const dailyPlanCount = Number(Boolean(plan.goals.lesson)) + Number(Boolean(plan.goals.practice));
  const lessonProgress = lessonIndex + 1;
  const dailyPercent = totalDailyTasks ? Math.round(doneCount/totalDailyTasks*100) : 0;
  const planPercent = Math.round(dailyPlanCount/2*100);
  const unitPercent = Math.round(lessonProgress/lessons.length*100);
  const circumference = radius => 2*Math.PI*radius;
  const dash = (radius,percent) => `${(circumference(radius)*percent/100).toFixed(1)} ${circumference(radius).toFixed(1)}`;

  const dateLabel = new Date().toLocaleDateString("ar-MA",{weekday:"long",day:"numeric",month:"long"});
  const segments = Array.from({length:lessons.length},(_,index)=>
    `<span class="${index<lessonProgress?"is-active":""}"></span>`
  ).join("");

  const results = Object.values(readStudentResults(currentUser.id)||{}).filter(item=>item && typeof item==="object");
  const tests = results.filter(item=>adminResultType(item)==="test" || adminResultPercent(item)!==null);
  const average = tests.length ? Math.round(tests.reduce((sum,item)=>sum+(adminResultPercent(item)||0),0)/tests.length)+"%" : "—";

  const taskRows = taskMeta.length ? taskMeta.map(task=>{
    const done=isTaskDone(task);
    const openAction=task.assigned?"daily-open-assigned":"daily-open";
    const completeAction=task.assigned?"daily-complete-assigned":"daily-complete";
    const taskData=task.assigned?`data-task-id="${escapeHtml(task.id)}"`:`data-task="${escapeHtml(task.id)}"`;
    return `<article class="daily-task-row ${done?"is-done":""}">
      <span class="daily-task-icon">${task.icon}</span>
      <div class="daily-task-copy"><strong>${escapeHtml(task.title)}</strong><small>${escapeHtml(task.detail)}${task.dueDate?` · آخر أجل ${escapeHtml(task.dueDate)}`:""}</small></div>
      <span class="daily-task-time">${escapeHtml(task.time)}</span>
      ${done
        ? `<span class="daily-task-done">✓ تم</span>`
        : `<button type="button" class="daily-task-start" data-action="${openAction}" ${taskData}>ابدأ</button><button type="button" class="daily-task-check" data-action="${completeAction}" ${taskData} aria-label="تحديد المهمة كمكتملة">✓</button>`}
    </article>`;
  }).join("") : `<div class="daily-task-empty"><span>📋</span><strong>ما تحددات حتى مهمة لليوم</strong><small>المشرف ديال المجموعة غادي يضيف المهام هنا منين يجهز خطة اليوم.</small></div>`;

  const content = `
    <section class="daily-lesson-hero">
      <div class="daily-lesson-hero-top">
        <span class="daily-lesson-kicker">${todayLevel} · خطواتك التالية</span>
        <span class="daily-lesson-date">📅 ${dateLabel}</span>
      </div>
      <div class="daily-lesson-hero-main">
        <div class="daily-lesson-copy">
          <span class="daily-lesson-unit-tag">الوحدة ${lessonIndex<5?"الأولى":"الثانية"} · ${todayLevel}</span>
          <h2>الدرس ${lessonIndex+1} – ${escapeHtml(todayLesson.name)}</h2>
          <p>كمّل تعلّمك اليوم وخطوة بخطوة غادي تقرّب من هدفك في الألمانية.</p>
          <div class="daily-lesson-position">الدرس ${lessonIndex+1} من ${lessons.length} · ${unitPercent}% من المسار</div>
        </div>
        <button type="button" class="daily-lesson-play" data-action="home-start-lesson" aria-label="ابدأ درس اليوم">▶</button>
      </div>
      <div class="daily-lesson-segments" aria-label="تقدم الدروس">${segments}</div>
      <button type="button" class="daily-lesson-start-link" data-action="home-start-lesson">ابدأ درس اليوم <span>←</span></button>
    </section>

    <section class="daily-progress-panel">
      <div class="daily-progress-rings" role="img" aria-label="تقدم اليوم: ${doneCount} من ${totalDailyTasks} مهمة، ${dailyPlanCount} من 2 من خطة اليوم، ${lessonProgress} من 10 في الوحدة">
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="49" class="daily-ring-track"/>
          <circle cx="60" cy="60" r="49" class="daily-ring-blue" transform="rotate(-90 60 60)" stroke-dasharray="${dash(49,unitPercent)}"/>
          <circle cx="60" cy="60" r="37" class="daily-ring-track"/>
          <circle cx="60" cy="60" r="37" class="daily-ring-green" transform="rotate(-90 60 60)" stroke-dasharray="${dash(37,planPercent)}"/>
          <circle cx="60" cy="60" r="25" class="daily-ring-track"/>
          <circle cx="60" cy="60" r="25" class="daily-ring-red" transform="rotate(-90 60 60)" stroke-dasharray="${dash(25,dailyPercent)}"/>
        </svg>
        <div class="daily-ring-center"><strong>A1</strong><small>تقدّمي</small></div>
      </div>
      <div class="daily-progress-details">
        <span class="daily-progress-overline">متابعة التقدّم</span>
        <h3>خطواتك اليوم</h3>
        <div class="daily-progress-legend">
          <div class="daily-progress-item"><span class="daily-progress-dot red"></span><span>مهام اليوم</span><strong>${doneCount}/${totalDailyTasks}</strong></div>
          <div class="daily-progress-item"><span class="daily-progress-dot green"></span><span>خطة اليوم</span><strong>${dailyPlanCount}/2</strong></div>
          <div class="daily-progress-item"><span class="daily-progress-dot blue"></span><span>الوحدة</span><strong>${lessonProgress}/${lessons.length}</strong></div>
        </div>
      </div>
    </section>

    <section class="dashboard-mini-stats">
      <article><span class="dashboard-stat-icon purple">▤</span><strong>${lessons.length}</strong><small>دروس A1 متاحة</small></article>
      <article><span class="dashboard-stat-icon pink">↻</span><strong>${tests.length}</strong><small>اختبارات محفوظة</small></article>
      <article><span class="dashboard-stat-icon orange">◎</span><strong>${average}</strong><small>متوسط النتائج</small></article>
    </section>

    <section class="dashboard-section">
      <div class="dashboard-section-head"><div><span class="section-overline">خطة واضحة لكل يوم</span><h2>مهام خطة اليوم</h2></div><button type="button" class="text-link" data-action="student-nav" data-tab="learn">عرض المسار ←</button></div>
      <div class="daily-plan-card">${taskRows}</div>
    </section>

    <section class="dashboard-quick-grid">
      <button type="button" class="quick-action-card" data-action="student-nav" data-tab="talk"><span class="quick-action-icon violet">🎙</span><strong>تكلّم مع المدرّب</strong><small>تدرّب على المحادثة</small></button>
      <button type="button" class="quick-action-card" data-action="student-nav" data-tab="sessions"><span class="quick-action-icon green">👥</span><strong>جلسات مباشرة</strong><small>تدرّب مع متعلمين</small></button>
      <button type="button" class="quick-action-card" data-action="student-nav" data-tab="community"><span class="quick-action-icon blue">💬</span><strong>مجتمع المتعلمين</strong><small>تبادل الأسئلة والأفكار</small></button>
    </section>
  `;
  app.innerHTML = studentLayout(content,"home");
}
function renderLearnHub(){
  const levels = [
    {id:"A1",title:"المستوى الأساسي",desc:"تعلّم الأساسيات والتواصل في الحياة اليومية",tone:"green"},
    {id:"A2",title:"المستوى الأساسي الأعلى",desc:"توسيع المفردات والتعبير في مواقف يومية أكثر · 10 دروس متاحة",tone:"blue"},
    {id:"B1",title:"المستوى المتوسط",desc:"Kurs · Teste · Training Prüfung · Prüfungen",tone:"orange"},
    {id:"B2",title:"المستوى المتقدم الأعلى",desc:"Kurs · Teste · Training Prüfung · Prüfungen",tone:"purple"}
  ].map(level=>({...level,available:getStudentLevelAccess(level.id)}));
  const levelCards = levels.map(level=>`
    <button type="button" class="learn-level-card learn-level-${level.tone} ${level.available?"is-available":"is-locked"}"
      data-action="level-path" data-level="${level.id}" ${level.available?"":"disabled"}
      aria-label="اختيار المستوى ${level.id}${level.available?"":"، مقفل من الإدارة"}">
      <span class="learn-level-top">
        <strong>${level.id}</strong>
        <span class="learn-level-bars" aria-hidden="true"><i></i><i></i><i></i></span>
      </span>
      <b>${level.title}</b>
      <small>${level.desc}</small>
      <span class="learn-level-arrow" aria-hidden="true">${level.available?"→":"🔒"}</span>
      ${level.available?"":'<span class="learn-level-locked-label">مقفل من الإدارة</span>'}
    </button>`).join("");

  const content = `
    <section class="learn-home" aria-label="الصفحة الرئيسية للتعلّم">
      <header class="learn-home-heading">
        <h1>المعلّم الذكي</h1>
        <button type="button" class="learn-clear-chat" data-action="learn-reset-conversation">
          <span aria-hidden="true">▤</span> مسح المحادثة
        </button>
      </header>

      <button type="button" class="learn-voice-cta" data-action="learn-open-voice">
        <span class="learn-voice-mic" aria-hidden="true">♩</span>
        <strong>تحدّث مع المعلّم بصوتك</strong>
      </button>

      <section class="learn-level-section">
        <div class="learn-level-heading">
          <h2>اختر مستواك في الألمانية</h2>
          <p>للبدء في التعلّم والمحادثة</p>
        </div>
        <div class="learn-level-grid">${levelCards}</div>
      </section>

      <section class="learn-placement-card">
        <span class="learn-placement-icon" aria-hidden="true">🎓</span>
        <div class="learn-placement-copy">
          <strong>لست متأكداً من مستواك؟</strong>
          <small>قم باختبار تحديد المستوى الآن</small>
        </div>
        <button type="button" data-action="learn-placement-test">اختبار المستوى <span aria-hidden="true">←</span></button>
      </section>
      <p class="learn-level-note">يمكن للإدارة فتح أو قفل كل مستوى. ويحتوي كل من B1 وB2 على Kurs وTeste وTraining Prüfung وPrüfungen.</p>
    </section>
  `;
  app.innerHTML = studentLayout(content,"learn");
}


/* B1 / B2 level structure; register real files here once their lessons exist.
   Do not add placeholder questions or pretend that an exam has been published. */
const UPPER_LEVEL_SECTIONS=[
  {id:"kurs",label:"Kurs",arabic:"الدروس",description:"دروس اللغة الألمانية لهذا المستوى",icon:"📚",tone:"blue"},
  {id:"teste",label:"Teste",arabic:"اختبارات الدروس",description:"اختبارات قصيرة لمراجعة الدروس",icon:"📝",tone:"green"},
  {id:"training",label:"Training Prüfung",arabic:"التدريب على الامتحان",description:"تدريبات للاستعداد لامتحانات المستوى",icon:"🎯",tone:"orange"},
  {id:"pruefungen",label:"Prüfungen",arabic:"الامتحانات",description:"نماذج واختبارات شاملة للمستوى",icon:"🏆",tone:"purple"}
];
const UPPER_LEVEL_RESOURCE_LISTS={
  B1:{kurs:[],teste:[],training:[],pruefungen:[]},
  B2:{kurs:[],teste:[],training:[
    {skill:"muendlich",subsection:"models",title:"Bildbeschreibung",description:"ÖSD B2 · وصف الصورة",path:"pages/B2/training/oesd-b2-bildbeschreibung.html"},
    {skill:"muendlich",subsection:"models",title:"Familie und Zusammenleben",description:"ÖSD B2 · الأسرة والعيش المشترك",path:"pages/B2/training/oesd-b2-familie-zusammenleben.html"},
    {skill:"muendlich",subsection:"models",title:"Studium und Lernen",description:"ÖSD B2 · الدراسة والتعلّم",path:"pages/B2/training/oesd-b2-studium-lernen.html"},
    {skill:"muendlich",subsection:"models",title:"Reisen und Tourismus",description:"ÖSD B2 · السفر والسياحة",path:"pages/B2/training/oesd-b2-reisen-tourismus.html"},
    {skill:"muendlich",subsection:"models",title:"Gesundheit und Sport",description:"ÖSD B2 · الصحة والرياضة",path:"pages/B2/training/oesd-b2-gesundheit-sport.html"},
    {skill:"muendlich",subsection:"models",title:"Umwelt und Klimaschutz",description:"ÖSD B2 · البيئة وحماية المناخ",path:"pages/B2/training/oesd-b2-umwelt-klimaschutz.html"},
    {skill:"muendlich",subsection:"models",title:"Arbeit und Beruf",description:"ÖSD B2 · العمل والمهنة",path:"pages/B2/training/oesd-b2-arbeit-und-beruf.html"}
  ],pruefungen:[]}
};
// Four skill categories of the exam-training page for both B1 and B2.
// These are navigation shells, not fabricated official exam materials.
const UPPER_LEVEL_TRAINING_SKILLS=[
  {id:"lesen",label:"Lesen",arabic:"القراءة والفهم",description:"فهم النصوص والإعلانات والمراسلات واستخراج المعلومات.",icon:"📖",tone:"blue"},
  {id:"schreiben",label:"Schreiben",arabic:"الكتابة",description:"التدرّب على الرسائل والتعبير الكتابي وتنظيم الأفكار.",icon:"✍️",tone:"green"},
  {id:"hoeren",label:"Hören",arabic:"الاستماع",description:"تدريبات فهم المحادثات والمعلومات المسموعة.",icon:"🎧",tone:"orange"},
  {id:"muendlich",label:"Mündlich",arabic:"الامتحان الشفهي",description:"الحديث وعرض الأفكار والمناقشة والتعبير عن الرأي.",icon:"💬",tone:"purple"}
];

// Mündlich: four separate training areas for both B1 and B2.
// Their content is loaded only when actual lesson/exam resources are registered.
const UPPER_LEVEL_MUENDLICH_SECTIONS=[
  {id:"models",label:"Prüfungsmodelle",arabic:"نماذج الامتحانات",description:"نماذج الامتحانات الشفهية وأسئلة المحاكاة حسب المستوى.",icon:"📋",tone:"blue"},
  {id:"speaking",label:"Sprechen",arabic:"التدريب على التكلم",description:"تمارين العرض الشفهي والمناقشة والتعبير عن الرأي.",icon:"🗣️",tone:"purple"},
  {id:"writing",label:"Schreiben",arabic:"التدريب على الكتابة",description:"مهام الكتابة وتنظيم النصوص والرسائل.",icon:"✍️",tone:"green"},
  {id:"listening",label:"Hören",arabic:"التدريب على الاستماع",description:"فهم الحوارات والتسجيلات والأسئلة المرتبطة بها.",icon:"🎧",tone:"orange"}
];

function upperLevelInfo(){
  return upperLevelSelected==="B2"?"B2":"B1";
}
function renderUpperLevelHome(){
  const level=upperLevelInfo();
  const cards=UPPER_LEVEL_SECTIONS.map(item=>{
    const count=(UPPER_LEVEL_RESOURCE_LISTS[level]?.[item.id]||[]).length;
    const allowed=getStudentSectionAccess(level,item.id);
    return `<button type="button" class="upper-level-section-card upper-level-tone-${item.tone} ${allowed?"":"is-locked"}" data-action="upper-level-open-section" data-section="${item.id}" ${allowed?"":"disabled"} aria-label="${escapeHtml(level+' '+item.label+(allowed?"":" · مقفل من الإدارة"))}">
      <span class="upper-level-section-icon" aria-hidden="true">${item.icon}</span>
      <span class="upper-level-section-copy"><strong dir="ltr">${escapeHtml(item.label)}</strong><b>${escapeHtml(item.arabic)}</b><small>${escapeHtml(item.description)}</small></span>
      <span class="upper-level-section-meta">${allowed?(item.id==="training"?"4 مهارات":count ? `${count} ${count===1?"ملف":"ملفات"}` : "قابل لإضافة المحتوى"):"مقفل من الإدارة"}</span>
      <span class="upper-level-section-arrow" aria-hidden="true">${allowed?"←":"🔒"}</span>
    </button>`;
  }).join("");
  const content=`<section class="upper-level-dashboard" dir="rtl">
    <div class="upper-level-banner upper-level-banner-${level.toLowerCase()}">
      <div class="upper-level-banner-copy"><span>Deutsch lernen</span><h2 dir="ltr">${level}</h2><strong>${level==="B1"?"المستوى المتوسط":"المستوى المتقدم الأعلى"}</strong><p>اختر القسم الذي تريد الدخول إليه</p></div>
      <span class="upper-level-banner-art" aria-hidden="true">🎓</span>
    </div>
    <div class="upper-level-section-grid">${cards}</div>
    <p class="upper-level-availability-note">يمكنك الدخول إلى الأقسام المفتوحة من طرف الإدارة. كل قسم عنده صلاحية مستقلة.</p>
  </section>`;
  app.innerHTML=pageShell("مسارك التعليمي",`مستوى ${level}`,"الأقسام الأساسية للمستوى",content);
}
// Kurs for B1/B2 has ten lesson positions, just like A1/A2.
// Registration format, when real course files are supplied:
// UPPER_LEVEL_RESOURCE_LISTS.B1.kurs.push({number:1,title:"...",arabic:"...",description:"...",icon:"...",path:"pages/Kurs/B1/lektion-1-kurs.html"});
const UPPER_LEVEL_KURS_LESSON_COUNT=10;
const UPPER_LEVEL_KURS_PLACEHOLDER_ICONS=["📘","📚","📝","🗣️","💡","🧩","🎯","✍️","🎧","🏆"];
function upperLevelCourseLesson(level,no){
  const resources=UPPER_LEVEL_RESOURCE_LISTS[level]?.kurs||[];
  const numbered=resources.some(item=>Number(item?.number||item?.lessonNumber)>0);
  const found=resources.find(item=>Number(item.number||item.lessonNumber)===no)
    ||(!numbered?resources[no-1]:null);
  const entry=found&&typeof found==="object"?found:{};
  return {
    number:no,
    title:String(entry.arabic||entry.title||`Lektion ${no}`),
    description:String(entry.description||entry.subtitle||"محتوى الدرس ما زال ما تضافش"),
    icon:String(entry.icon||UPPER_LEVEL_KURS_PLACEHOLDER_ICONS[(no-1)%UPPER_LEVEL_KURS_PLACEHOLDER_ICONS.length]),
    path:String(entry.path||"").trim()
  };
}
function upperLevelCourseLessons(level){
  return Array.from({length:UPPER_LEVEL_KURS_LESSON_COUNT},(_,index)=>upperLevelCourseLesson(level,index+1));
}
function renderUpperLevelKursLessonGrid(level){
  const lessonsForLevel=upperLevelCourseLessons(level);
  const statuses=lessonsForLevel.map(lesson=>{
    const record=getCourseProgress(level,lesson.number);
    return {...lesson,progress:courseProgressPercent(record),completed:!!record?.completed,started:!!record?.startedAt,allowed:getStudentLessonAccess(lesson.number-1,level)};
  });
  const completedCount=statuses.filter(item=>item.completed).length;
  const progress=Math.round(completedCount/UPPER_LEVEL_KURS_LESSON_COUNT*100);
  const nextLesson=statuses.find(item=>item.allowed&&!item.completed)||null;
  const cards=statuses.map(item=>{
    const state=!item.allowed?"locked":item.completed?"completed":item.started?"current":item.path?"available":"pending";
    const stateLabel=!item.allowed?"مقفل من الإدارة":item.completed?"مكتمل":item.started?`متابعة ${item.progress}%`:item.path?"متاح":"لم يضف بعد";
    const stateIcon=!item.allowed?"×":item.completed?"✓":item.started?"●":item.path?"•":"·";
    return `<button type="button" class="level-lesson-card is-${state}" data-action="upper-level-course-open-lesson" data-lesson-no="${item.number}" ${item.allowed?"":"disabled"}
      aria-label="${escapeHtml(`${level} · الدرس ${item.number} · ${item.title} · ${stateLabel}`)}">
      <span class="level-lesson-art" aria-hidden="true">${escapeHtml(item.icon)}</span>
      <span class="level-lesson-copy">
        <span class="level-lesson-number">الدرس ${item.number}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(item.description)}</small>
      </span>
      <span class="level-lesson-side">
        <span class="level-lesson-status is-${state}"><i aria-hidden="true">${stateIcon}</i>${stateLabel}</span>
        <span class="level-lesson-arrow" aria-hidden="true">←</span>
      </span>
    </button>`;
  }).join("");
  const nextCta=nextLesson?`<button type="button" class="level-next-cta" data-action="upper-level-course-open-lesson" data-lesson-no="${nextLesson.number}">
      <span class="level-next-cta-icon" aria-hidden="true">←</span>
      <span class="level-next-cta-copy"><strong>${nextLesson.path?(nextLesson.started?"متابعة الدرس التالي":"ابدأ الدرس التالي"):"عرض الدرس التالي"}</strong>
      <small>${escapeHtml(`الدرس ${nextLesson.number} · ${nextLesson.title}`)}</small></span>
      <span class="level-next-cta-spark" aria-hidden="true">✦</span>
    </button>`:(statuses.some(item=>item.allowed)?`<div class="level-complete-note"><span aria-hidden="true">🏆</span><strong>أحسنت! أكملت جميع الدروس</strong></div>`:`<div class="level-complete-note"><span aria-hidden="true">🔒</span><strong>جميع الدروس مقفلة حالياً من الإدارة</strong></div>`);
  // This is the same full-screen progress/list/next-lesson layout as the A1 and A2 Kurs overview.
  app.innerHTML=`<div class="student-app level-home-app upper-level-kurs-app" dir="rtl">
    <header class="level-screen-topbar">
      <button type="button" class="level-screen-back" data-action="back" aria-label="رجوع للأقسام الأربعة"><span aria-hidden="true">←</span></button>
      <div class="level-screen-title"><small>مسارك التعليمي · Kurs</small><strong>مستوى ${escapeHtml(level)}</strong></div>
    </header>
    <main class="level-home-main">
      <section class="level-progress-card" aria-label="تقدمك في المستوى ${escapeHtml(level)}">
        <div class="level-progress-top"><div class="level-progress-title">
          <span class="level-progress-icon" aria-hidden="true">▥</span>
          <span><strong>تقدمك في المستوى</strong><small>${completedCount} من ${UPPER_LEVEL_KURS_LESSON_COUNT} دروس مكتملة</small></span>
        </div><span class="level-progress-percent">${progress}%</span></div>
        <div class="level-progress-track" role="progressbar" aria-label="نسبة التقدم في المستوى ${escapeHtml(level)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}"><span style="width:${progress}%"></span></div>
      </section>
      <section class="level-lessons-section">
        <div class="level-lessons-heading"><div>
          <span class="level-section-kicker">خطتك التعليمية</span>
          <h2>دروس المستوى <b>${UPPER_LEVEL_KURS_LESSON_COUNT}</b></h2>
        </div><small>تابع من حيث توقفت</small></div>
        <div class="level-lessons-list">${cards}</div>
      </section>
    </main>
    <div class="level-next-cta-wrap">${nextCta}</div>
  </div>`;
}
function renderUpperLevelCourseLesson(){
  const level=upperLevelInfo();
  const no=Math.min(UPPER_LEVEL_KURS_LESSON_COUNT,Math.max(1,Number(upperLevelSelectedLessonNo)||1));
  const lesson=upperLevelCourseLesson(level,no);
  if(lesson.path){
    // Future registered lesson pages can reuse the same native fullscreen iframe integration.
    document.documentElement.classList.add("challenge-fullscreen-open");
    document.body.classList.add("challenge-fullscreen-open");
    app.innerHTML=`<div class="challenge-fullscreen-shell lesson-section-fullscreen-shell">
      <iframe id="upperLevelCourseFrame" title="${escapeHtml(`${level} · Lektion ${no}`)}" loading="eager" allow="autoplay; fullscreen"></iframe>
    </div>`;
    const frame=document.getElementById("upperLevelCourseFrame");
    if(frame){trackCourseIframe(frame,level,no);loadManagedPageIntoFrame(frame,lesson.path);}
    return;
  }
  const content=`<section class="upper-level-course-style upper-level-coming-lesson" dir="rtl">
    <div class="lesson-detail-hero upper-level-shared-hero">
      <div class="lesson-detail-hero-copy">
        <span class="lesson-detail-hero-badge">Deutsch ${escapeHtml(level)} · Lektion ${no}</span>
        <h1>${escapeHtml(lesson.title)}</h1><h2>الدرس ${no}</h2>
        <small>مكان مخصّص لصفحة الكورس، بنفس تصميم دروس المستويات الأخرى.</small>
      </div>
      <div class="lesson-detail-hero-art" aria-hidden="true"><span class="lesson-detail-art-topic">${escapeHtml(lesson.icon)}</span></div>
    </div>
    <div class="upper-level-course-empty"><span aria-hidden="true">📚</span>
      <h3>محتوى هذا الدرس ما زال ما تضافش</h3>
      <p>صفحة Lektion ${no} من ${escapeHtml(level)} واجدة للتصميم. منين تزيد ملف HTML الحقيقي ديال الكورس غادي يفتح من هنا ويتسجل التقدم.</p>
    </div>
    <button type="button" class="upper-level-return" data-action="upper-level-course-back">رجوع لدروس ${escapeHtml(level)} <span aria-hidden="true">←</span></button>
  </section>`;
  app.innerHTML=pageShell(`Kurs ${level}`,`Lektion ${no}`,"دروس المستوى",content);
}
function renderUpperLevelSection(){
  const level=upperLevelInfo();
  const section=UPPER_LEVEL_SECTIONS.find(item=>item.id===upperLevelSelectedSection)||UPPER_LEVEL_SECTIONS[0];
  const resources=UPPER_LEVEL_RESOURCE_LISTS[level]?.[section.id]||[];

  if(section.id==="training"){
    const skillCards=UPPER_LEVEL_TRAINING_SKILLS.map((skill,index)=>`
      <button type="button" class="upper-level-training-skill-card lesson-detail-stage lesson-detail-stage-${["blue","green","amber","pink"][index]}"
        data-action="upper-level-training-skill" data-skill="${skill.id}" aria-label="${escapeHtml(`${level} · ${skill.label} · ${skill.arabic}`)}">
        <span class="lesson-detail-stage-icon" aria-hidden="true">${skill.icon}</span>
        <span class="lesson-detail-stage-copy"><strong dir="ltr">${skill.label}</strong><small>${skill.arabic}</small><span>${skill.description}</span></span>
        <span class="lesson-detail-stage-status">دخول <i aria-hidden="true">←</i></span>
      </button>`).join("");
    const content=`<section class="upper-level-course-style upper-level-training-menu" dir="rtl">
      <div class="lesson-detail-hero upper-level-shared-hero">
        <div class="lesson-detail-hero-copy">
          <span class="lesson-detail-hero-badge">Deutsch ${level}</span>
          <h1 dir="ltr">Training Prüfung</h1>
          <h2>التدريب على الامتحان</h2>
          <small>اختار المهارة اللي بغيتي تتدرّب عليها. نفس تقسيم المهارات فـ B1 وB2.</small>
        </div>
        <div class="lesson-detail-hero-art" aria-hidden="true"><span class="lesson-detail-art-topic">🎯</span></div>
      </div>
      <div class="lesson-detail-content-heading"><h2>أقسام التدريب</h2><span aria-hidden="true">▱</span></div>
      <nav class="upper-level-training-skill-grid" aria-label="Training Prüfung ${level}">${skillCards}</nav>
      <button type="button" class="upper-level-return" data-action="upper-level-return">رجوع للأقسام الأربعة <span aria-hidden="true">←</span></button>
    </section>`;
    app.innerHTML=pageShell(`مستوى ${level}`,"Training Prüfung","Lesen · Schreiben · Hören · Mündlich",content);
    return;
  }

  const items=resources.map((item,i)=>`<article class="upper-level-resource">
     <span class="upper-level-resource-index">${i+1}</span><div><strong>${escapeHtml(item.title||`المحتوى ${i+1}`)}</strong><small>${escapeHtml(item.description||"")}</small></div>
     <span class="upper-level-resource-arrow" aria-hidden="true">↗</span>
   </article>`).join("");

  if(section.id==="kurs"){
    renderUpperLevelKursLessonGrid(level);
    return;
  }

  const content=`<section class="upper-level-detail" dir="rtl">
    <header class="upper-level-detail-intro upper-level-tone-${section.tone}"><span class="upper-level-section-icon" aria-hidden="true">${section.icon}</span><div><small>${level}</small><h2 dir="ltr">${escapeHtml(section.label)}</h2><p>${escapeHtml(section.arabic)} · ${escapeHtml(section.description)}</p></div></header>
    ${items?`<div class="upper-level-resource-list">${items}</div>`:
    `<div class="upper-level-empty"><span aria-hidden="true">📂</span><h3>هاد القسم واجد</h3><p>مازال ما تضاف حتى درس أو اختبار ديال ${escapeHtml(level)} فـ ${escapeHtml(section.label)}. المحتوى غادي يظهر هنا منين يتضاف للمشروع.</p></div>`}
    <button type="button" class="upper-level-return" data-action="upper-level-return">رجوع للأقسام الأربعة <span aria-hidden="true">←</span></button>
  </section>`;
  app.innerHTML=pageShell(`مستوى ${level}`,section.label,section.arabic,content);
}

function renderUpperLevelTrainingSkill(){
  const level=upperLevelInfo();
  const skill=UPPER_LEVEL_TRAINING_SKILLS.find(item=>item.id===upperLevelSelectedTrainingSkill)||UPPER_LEVEL_TRAINING_SKILLS[0];
  // Future training HTML can be added to the level-specific resource list.
  // Do not display invented scores, audio or exam papers before they exist.
  if(skill.id==="muendlich")return renderUpperLevelMuendlichMenu(level,skill);
  const resources=(UPPER_LEVEL_RESOURCE_LISTS[level]?.training||[]).filter(item=>item.skill===skill.id);
  const items=resources.map((item,index)=>`<article class="upper-level-resource">
    <span class="upper-level-resource-index">${index+1}</span>
    <div><strong>${escapeHtml(item.title||skill.label)}</strong><small>${escapeHtml(item.description||"")}</small></div>
    <span class="upper-level-resource-arrow" aria-hidden="true">↗</span>
  </article>`).join("");
  const content=`<section class="upper-level-course-style upper-level-training-detail" dir="rtl">
    <div class="lesson-detail-hero upper-level-shared-hero">
      <div class="lesson-detail-hero-copy">
        <span class="lesson-detail-hero-badge">Training Prüfung · ${level}</span>
        <h1 dir="ltr">${escapeHtml(skill.label)}</h1>
        <h2>${escapeHtml(skill.arabic)}</h2>
        <small>${escapeHtml(skill.description)}</small>
      </div>
      <div class="lesson-detail-hero-art" aria-hidden="true"><span class="lesson-detail-art-topic">${skill.icon}</span></div>
    </div>
    <div class="lesson-detail-content-heading"><h2>تمارين ${escapeHtml(skill.label)}</h2><span aria-hidden="true">▱</span></div>
    ${items?`<div class="upper-level-resource-list">${items}</div>`:
      `<div class="upper-level-course-empty">
        <span aria-hidden="true">${skill.icon}</span>
        <h3>قسم ${escapeHtml(skill.label)} واجد</h3>
        <p>تمارين ${escapeHtml(level)} ديال ${escapeHtml(skill.label)} مازال ما تضافتش. ملي تضاف ملفات التدريب الحقيقية غادي تبان هنا.</p>
      </div>`}
    <button type="button" class="upper-level-return" data-action="upper-level-training-return">رجوع لأقسام Training Prüfung <span aria-hidden="true">←</span></button>
  </section>`;
  app.innerHTML=pageShell(`Training Prüfung · ${level}`,skill.label,skill.arabic,content);
}

function renderUpperLevelMuendlichMenu(level,skill){
  const cards=UPPER_LEVEL_MUENDLICH_SECTIONS.map((section,index)=>`
    <button type="button" class="upper-muendlich-card upper-muendlich-card-${section.tone} lesson-detail-stage lesson-detail-stage-${["blue","pink","green","amber"][index]}"
      data-action="upper-level-muendlich-open" data-section="${section.id}" aria-label="${escapeHtml(level+' · '+section.label+' · '+section.arabic)}">
      <span class="lesson-detail-stage-icon upper-muendlich-card-icon" aria-hidden="true">${section.icon}</span>
      <span class="lesson-detail-stage-copy upper-muendlich-card-copy">
        <strong dir="ltr">${escapeHtml(section.label)}</strong>
        <small>${escapeHtml(section.arabic)}</small>
        <span>${escapeHtml(section.description)}</span>
      </span>
      <span class="lesson-detail-stage-status">دخول <i aria-hidden="true">←</i></span>
    </button>`).join("");
  const content=`<section class="upper-level-course-style upper-muendlich-page" dir="rtl">
    <div class="lesson-detail-hero upper-level-shared-hero">
      <div class="lesson-detail-hero-copy">
        <span class="lesson-detail-hero-badge">Training Prüfung · ${escapeHtml(level)}</span>
        <h1 dir="ltr">Mündlich</h1><h2>${escapeHtml(skill.arabic)}</h2>
        <small>${escapeHtml(skill.description)}</small>
      </div>
      <div class="lesson-detail-hero-art" aria-hidden="true"><span class="lesson-detail-art-topic">💬</span></div>
    </div>
    <div class="lesson-detail-content-heading"><h2>أقسام Mündlich الأربعة</h2><span aria-hidden="true">▱</span></div>
    <nav class="upper-muendlich-grid" aria-label="أقسام Mündlich ${escapeHtml(level)}">${cards}</nav>
    <button type="button" class="upper-level-return" data-action="upper-level-training-return">رجوع إلى Training Prüfung <span aria-hidden="true">←</span></button>
  </section>`;
  app.innerHTML=pageShell(`Training Prüfung · ${level}`,"Mündlich","نماذج الامتحانات · التكلم · الكتابة · الاستماع",content);
}

// B2 Sprechen uses the browser's top-level document (same tab, not a popup
// or an iframe). This avoids permissions-policy denial of iframe microphone.
function b2SpeakingDirectUrl(){
  const url=new URL(managedPageAssetUrl("pages/B2/training/b2-sprechen-training.html"),window.location.href);
  url.searchParams.set("b2-microphone","v49");
  return url.href;
}
function openB2SpeakingInSameTab(){
  const url=b2SpeakingDirectUrl();
  try{
    // If the entire learning platform was embedded by a third-party LMS,
    // navigate the existing top-level tab with the user's click, not a popup.
    if(window.top && window.top!==window.self){window.top.location.assign(url);return;}
  }catch(error){console.warn("Top-level speaking navigation unavailable; using current tab",error);}
  window.location.assign(url);
}
function renderUpperLevelMuendlichSubsection(){
  const level=upperLevelInfo();
  const section=UPPER_LEVEL_MUENDLICH_SECTIONS.find(item=>item.id===upperLevelSelectedMundlichSection) || UPPER_LEVEL_MUENDLICH_SECTIONS[0];
  if(level==="B2" && section.id==="speaking"){
    // Fallback for restored/legacy navigation: never embed Sprechen in an iframe.
    const url=escapeHtml(b2SpeakingDirectUrl());
    app.innerHTML=pageShell("B2 · Training Prüfung","Sprechen","التدريب الصوتي داخل نفس التبويب",`
      <section class="upper-level-course-style" dir="rtl">
        <div class="lesson-detail-hero upper-level-shared-hero"><div class="lesson-detail-hero-copy">
          <span class="lesson-detail-hero-badge">B2 · Mündlich</span><h1>Sprechen</h1>
          <h2>تدريب الكلام</h2><small>باش يخدم إذن الميكروفون مباشرة، التدريب كيتفتح بملء الشاشة فهاد التبويب.</small>
        </div><div class="lesson-detail-hero-art" aria-hidden="true"><span class="lesson-detail-art-topic">🎙️</span></div></div>
        <a class="upper-level-return" href="${url}" target="_top">ابدأ التدريب الصوتي داخل نفس التبويب ←</a>
        <button type="button" class="upper-level-return" data-action="upper-level-muendlich-speaking-close">رجوع إلى Mündlich</button>
      </section>`);
    return;
  }
  const resources=(UPPER_LEVEL_RESOURCE_LISTS[level]?.training||[]).filter(item=>
    item && item.skill==="muendlich" && (item.subsection===section.id || item.category===section.id));
  const items=resources.map((item,index)=>item.path
    ? `<button type="button" class="upper-level-resource upper-level-model-button" data-action="upper-level-muendlich-model-open" data-model-index="${index}" aria-label="${escapeHtml('فتح نموذج '+(item.title||section.label))}">
        <span class="upper-level-resource-index">${index+1}</span>
        <span class="upper-level-model-copy"><strong dir="ltr">${escapeHtml(item.title||section.label)}</strong><small>${escapeHtml(item.description||"")}</small></span>
        <span class="upper-level-resource-arrow" aria-hidden="true">📄 ←</span>
      </button>`
    : `<article class="upper-level-resource"><span class="upper-level-resource-index">${index+1}</span><div><strong>${escapeHtml(item.title||section.label)}</strong><small>${escapeHtml(item.description||"")}</small></div></article>`
  ).join("");
  const content=`<section class="upper-level-course-style upper-muendlich-page upper-muendlich-subsection" dir="rtl">
    <div class="lesson-detail-hero upper-level-shared-hero">
      <div class="lesson-detail-hero-copy">
        <span class="lesson-detail-hero-badge">${escapeHtml(level)} · Mündlich</span>
        <h1 dir="ltr">${escapeHtml(section.label)}</h1>
        <h2>${escapeHtml(section.arabic)}</h2>
        <small>${escapeHtml(section.description)}</small>
      </div>
      <div class="lesson-detail-hero-art" aria-hidden="true"><span class="lesson-detail-art-topic">${section.icon}</span></div>
    </div>
    <div class="lesson-detail-content-heading"><h2>محتوى ${escapeHtml(section.label)}</h2><span aria-hidden="true">▱</span></div>
    ${items?`<div class="upper-level-resource-list">${items}</div>`:`<div class="upper-level-course-empty">
      <span aria-hidden="true">${section.icon}</span>
      <h3>قسم ${escapeHtml(section.label)} واجد</h3>
      <p>مازال ما تضَافش المحتوى الخاص بـ ${escapeHtml(section.arabic)} فالمستوى ${escapeHtml(level)}. منين يتضاف غادي يبان هنا.</p>
    </div>`}
    <button type="button" class="upper-level-return" data-action="upper-level-muendlich-return">رجوع إلى أقسام Mündlich <span aria-hidden="true">←</span></button>
  </section>`;
  app.innerHTML=pageShell(`Mündlich · ${level}`,section.label,section.arabic,content);
}

function renderUpperLevelMuendlichModel(){
  const level=upperLevelInfo();
  const resources=(UPPER_LEVEL_RESOURCE_LISTS[level]?.training||[]).filter(item=>
    item && item.skill==="muendlich" && item.subsection==="models" && item.path);
  const idx=Number(upperLevelSelectedMuendlichModel);
  const selected=Number.isInteger(idx) && idx>=0 && idx<resources.length ? resources[idx] : null;
  if(!selected){page="upper-level-muendlich-subsection";return renderUpperLevelMuendlichSubsection();}
  document.documentElement.classList.add("challenge-fullscreen-open");
  document.body.classList.add("challenge-fullscreen-open");
  app.innerHTML=`<div class="challenge-fullscreen-shell lesson-section-fullscreen-shell upper-level-model-fullscreen" role="region" aria-label="${escapeHtml(selected.title)}">
    <iframe id="upperMuendlichModelFrame" title="${escapeHtml('ÖSD B2 · '+selected.title)}" loading="eager" allow="autoplay; fullscreen"></iframe>
    <button type="button" class="challenge-fullscreen-exit upper-level-model-exit" data-action="upper-level-muendlich-model-close" aria-label="الرجوع إلى نماذج الامتحانات">← رجوع إلى Prüfungsmodelle</button>
  </div>`;
  const frame=document.getElementById("upperMuendlichModelFrame");
  if(frame)loadManagedPageIntoFrame(frame,selected.path);
}

const a2CourseLessons = [
  {number:1,title:"Erfahrungen und Pläne",arabic:"التجارب والخطط",icon:"🧭",path:"pages/Kurs/A2/lektion-1-kurs.html",test:""},
  {number:2,title:"Gut aussehen",arabic:"المظهر والأناقة",icon:"👗",path:"pages/Kurs/A2/lektion-2-kurs.html",test:"pages/Test/A2/lektion-2-test.html"},
  {number:3,title:"Familie und Freunde",arabic:"العائلة والأصدقاء",icon:"👨‍👩‍👧",path:"pages/Kurs/A2/lektion-3-kurs.html",test:"pages/Test/A2/lektion-3-test.html"},
  {number:4,title:"Die Ferienwohnung",arabic:"شقة العطلة",icon:"🏡",path:"pages/Kurs/A2/lektion-4-kurs.html",test:"pages/Test/A2/lektion-4-test.html"},
  {number:5,title:"Guten Appetit!",arabic:"الطعام والشراب",icon:"🍽️",path:"pages/Kurs/A2/lektion-5-kurs.html",test:"pages/Test/A2/lektion-5-test.html"},
  {number:6,title:"Deutsch A2 – Klick & Hör",arabic:"التعلّم بالنطق والاستماع",icon:"🎧",path:"pages/Kurs/A2/lektion-6-kurs.html",test:"pages/Test/A2/lektion-6-test.html"},
  {number:7,title:"Wetter, Jahreszeiten und Termine",arabic:"الطقس والفصول والمواعيد",icon:"🌦️",path:"pages/Kurs/A2/lektion-7-kurs.html",test:"pages/Test/A2/lektion-7-test.html"},
  {number:8,title:"Verkehrsmittel und Reisen",arabic:"وسائل النقل والسفر",icon:"🚌",path:"pages/Kurs/A2/lektion-8-kurs.html",test:"pages/Test/A2/lektion-8-test.html"},
  {number:9,title:"Flohmarkt und Wochenende",arabic:"سوق المستعمل وعطلة نهاية الأسبوع",icon:"🛍️",path:"pages/Kurs/A2/lektion-9-kurs.html",test:"pages/Test/A2/lektion-9-test.html"},
  {number:10,title:"Reisen und Urlaubserlebnisse",arabic:"السفر وتجارب العطلة",icon:"✈️",path:"pages/Kurs/A2/lektion-10-kurs.html",test:"pages/Test/A2/lektion-10-test.html"}
];

/* ===== Fullscreen Kurs + student-scoped resume (A1 / A2) =====
   Course files are independent HTML pages. No changes to their exercises are needed.
   Same-origin iframe inspection is used to remember the selected section and scroll. */
const COURSE_PROGRESS_PREFIX = "deutsch_a1_course_progress_v2";
let pendingCourseLaunch = null;
let courseResumeMode = "new";
let activeCourseFrame = null;
let activeCourseSaveTimer = null;
let courseRemoteWarned = false;

function courseProgressStorageKey(){
  return `${COURSE_PROGRESS_PREFIX}:${currentUser?.id || "anonymous"}`;
}
function courseProgressId(level, no){
  return `${String(level).toUpperCase()}_${Number(no)}`;
}
function courseProgressRecords(){
  try{
    const records = JSON.parse(localStorage.getItem(courseProgressStorageKey()) || "{}");
    return records && typeof records === "object" && !Array.isArray(records) ? records : {};
  }catch(error){return {};}
}
function getCourseProgress(level, no){
  return courseProgressRecords()[courseProgressId(level,no)] || null;
}
function courseProgressPercent(progress){
  if(!progress) return 0;
  if(progress.completed) return 100;
  // For slider lessons a stage counts as learned only when its quiz is finished.
  // Merely clicking a vocabulary tab must not be mistaken for finishing exercises.
  if(Array.isArray(progress.nativeStages) && progress.nativeStages.length){
    return Math.min(99,Math.round(progress.nativeStages.filter(item=>item?.done).length/progress.nativeStages.length*100));
  }
  const visited=Array.isArray(progress.visitedTabs) ? progress.visitedTabs.length : 0;
  const total=Math.max(0,Number(progress.totalTabs)||0);
  return total>1 ? Math.min(99,Math.round(visited/total*100)) : 0;
}
function saveCourseProgress(level,no,change,writeCloud=true){
  if(!currentUser || currentUser.role!=="student") return null;
  const id=courseProgressId(level,no);
  const records=courseProgressRecords();
  const previous=records[id] || {};
  const next={...previous,...change,level:String(level),lessonNumber:Number(no),
    startedAt:previous.startedAt||new Date().toISOString(), updatedAt:new Date().toISOString()};
  records[id]=next;
  try{localStorage.setItem(courseProgressStorageKey(),JSON.stringify(records));}catch(error){console.warn("Course progress could not be stored",error);}
  if(writeCloud && firebaseReady && firebaseDb && !demoMode){
    // A dedicated per-student node keeps course resume separate from graded test results.
    if(activeCourseSaveTimer) clearTimeout(activeCourseSaveTimer);
    activeCourseSaveTimer=setTimeout(()=>{
      const record=getCourseProgress(level,no);
      if(!record) return;
      firebaseDb.ref(`${DEUTSCH_A1_PATH}/courseProgress/${currentUser.id}/${id}`)
        .set(record).catch(error=>{
          if(!courseRemoteWarned){console.warn("Cloud sync for course progress requires Firebase courseProgress rules",error);courseRemoteWarned=true;}
        });
    },1100);
  }
  return next;
}

function recordStudentLearnedWord(level,no,german,meaning="",source="lesson"){
  if(!currentUser || currentUser.role!=="student")return false;
  const word=String(german||"").replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu,"").replace(/^\s*🔊\s*/,"").replace(/\s+/g," ").trim();
  if(!word || word.length>85 || /[.!?؟]$/.test(word))return false;
  const normalized=studentNormalizeSkillText(word);
  if(!normalized)return false;
  const safeKey=normalized.replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"") || `word-${Date.now()}`;
  const moduleId=`learned-words-${String(level||"A1").toLowerCase()}-${Number(no)}`;
  const previous=cloudResults?.[currentUser.id]?.[moduleId]||{};
  const learnedWords={...(previous.learnedWords&&typeof previous.learnedWords==="object"?previous.learnedWords:{})};
  const old=learnedWords[safeKey]||{};
  const resolvedMeaning=String(meaning||studentVocabularyMeaning(word)||old.meaning||"").trim();
  const now=new Date().toISOString();
  learnedWords[safeKey]={
    word,meaning:resolvedMeaning,
    firstLearnedAt:old.firstLearnedAt||now,
    lastSeenAt:now,
    source:String(source||old.source||"lesson").slice(0,40)
  };
  // Save in the student's existing results node so words sync across devices
  // using the same Firebase permissions as test results. This is not a graded score.
  saveStudentResult(moduleId,`Wortschatz · ${String(level||"A1")} · Lektion ${Number(no)}`,0,0,{
    contentType:"lesson-vocabulary",activityType:"lesson-vocabulary",source:"lesson-word-learning",
    lessonNumber:Number(no),level:String(level||"A1"),visited:{words:true},learnedWords,
    attemptId:`${moduleId}-word-list`
  });
  return true;
}

function attachVocabularyTracking(doc,level,no){
  if(!doc || doc.__deutschVocabularyTrackingAttached)return;
  try{doc.__deutschVocabularyTrackingAttached=true;}catch(error){}
  doc.addEventListener("click",event=>{
    const target=event.target?.closest?.('.item:not(.sentence),.word-card,.vocab-card,.vocabulary-card,.a2-vocab-card,.hotspot,.poster-hotspot,.term,[data-word],[data-german],[data-de],[data-say],[data-speak]');
    if(!target || target.closest('.sentence,.sentence-card,.dialogue-line,.a2-example-chip,[data-skill="sentences"]'))return;
    if(target.hasAttribute("data-speak") && !target.classList.contains("a2-vocab-card"))return;
    if(target.classList.contains("hotspot") && (target.classList.contains("ui")||target.classList.contains("title")))return;
    let german=target.dataset.word||target.dataset.german||target.dataset.de||target.dataset.say||target.dataset.speak||"";
    let arabic=target.dataset.meaning||target.dataset.translation||target.dataset.ar||"";
    const deNode=target.querySelector?.('.de-label,.word-de,.german,.de,.a2-vocab-de');
    const arNode=target.querySelector?.('.ar-label,.small-ar,.translation,.meaning,.ar,.a2-vocab-ar');
    if(!german && deNode)german=deNode.textContent||"";
    if(!arabic && arNode)arabic=arNode.textContent||"";
    const label=String(target.getAttribute("aria-label")||target.title||"").trim();
    if(label){
      const parts=label.split(/\s*[—–|]\s*/);
      if(!german && parts[0])german=parts[0].replace(/^(?:Aussprache hören:|Aussprache:|Höre|Hören:|Höre)\s*/i,"").trim();
      if(!arabic && parts.length>1)arabic=parts.slice(1).join(" — ").trim();
    }
    if(!german && target.classList.contains("term"))german=target.textContent||"";
    if(!german)return;
    recordStudentLearnedWord(level,no,german,arabic,"interactive-card");
  },true);
}

function trackStandaloneVocabularyFrame(frame,level,no){
  if(!frame || frame.dataset.vocabularyTrackingAttached==="1")return;
  frame.dataset.vocabularyTrackingAttached="1";
  frame.addEventListener("load",()=>{
    try{attachVocabularyTracking(frame.contentDocument,level,no);}catch(error){console.warn("Vocabulary tracking could not attach to lesson frame",error);}
  });
}
async function loadStudentCourseProgressCloud(){
  if(!currentUser || currentUser.role!=="student" || !firebaseReady || demoMode) return;
  const uid=currentUser.id;
  try{
    const snapshot=await firebaseDb.ref(`${DEUTSCH_A1_PATH}/courseProgress/${uid}`).once("value");
    if(!currentUser || currentUser.id!==uid) return;
    const remote=snapshot.val() || {};
    const local=courseProgressRecords();
    let modified=false;
    Object.entries(remote).forEach(([id,record])=>{
      if(!/^(A1|A2|B1|B2)_\d+$/.test(id) || !record || typeof record!=="object") return;
      if(!local[id] || Date.parse(record.updatedAt||0)>Date.parse(local[id].updatedAt||0)){
        local[id]=record;modified=true;
      }
    });
    if(modified) localStorage.setItem(courseProgressStorageKey(),JSON.stringify(local));
  }catch(error){
    if(!courseRemoteWarned){console.warn("Course progress will be saved on this browser until Firebase rules are enabled",error);courseRemoteWarned=true;}
  }
}
function closeCourseResumeDialog(){
  document.getElementById("courseResumeDialog")?.remove();
}
function askCourseResume(level,no,onLaunch){
  const existing=getCourseProgress(level,no);
  pendingCourseLaunch={level,no,onLaunch};
  if(existing && existing.startedAt){
    const percent=courseProgressPercent(existing);
    const label=existing.lastTabLabel ? `آخر جزء: ${escapeHtml(existing.lastTabLabel)}` : "تقدر ترجع لنفس المكان اللي وقفتي فيه.";
    const overlay=document.createElement("div");
    overlay.id="courseResumeDialog";
    overlay.className="course-resume-overlay";
    overlay.setAttribute("role","dialog");
    overlay.setAttribute("aria-modal","true");
    overlay.setAttribute("aria-labelledby","courseResumeTitle");
    overlay.innerHTML=`<div class="course-resume-card" dir="rtl">
      <span class="course-resume-icon" aria-hidden="true">📚</span>
      <h2 id="courseResumeTitle">بغيتي تكمل الدرس؟</h2>
      <p>بديتي الدرس ${Number(no)} من ${escapeHtml(level)} ومازال ما كملتيهش.</p>
      <div class="course-resume-summary"><strong>${escapeHtml(label)}</strong>
        ${percent?`<span>التقدّم: ${percent}%</span>`:""}</div>
      <div class="course-resume-actions">
        <button type="button" data-action="course-resume" class="course-resume-primary">▶ متابعة منين وقفت</button>
        <button type="button" data-action="course-restart" class="course-resume-secondary">↻ إعادة الدرس من الأول</button>
      </div>
      <button type="button" class="course-resume-cancel" data-action="course-resume-cancel">رجوع</button>
    </div>`;
    closeCourseResumeDialog();
    document.body.appendChild(overlay);
    overlay.querySelector(".course-resume-primary")?.focus();
    return;
  }
  launchPendingCourse("new");
}
function launchPendingCourse(mode){
  const pending=pendingCourseLaunch;
  closeCourseResumeDialog();
  pendingCourseLaunch=null;
  if(!pending) return;
  courseResumeMode=mode;
  if(mode==="restart" || mode==="new"){
    saveCourseProgress(pending.level,pending.no,{completed:false,lastTab:0,
      lastTabLabel:"",totalTabs:0,visitedTabs:[],scrollTop:0,scrollRatio:0,
      nativeStages:null,nativeQuiz:null,nativeStageResults:null,courseResultSignature:null,scorePerStage:10,legacyUnscoredStages:0,formDraft:null,
      startedAt:new Date().toISOString(),restartAt:mode==="restart"?new Date().toISOString():null},false);
  }
  // Resuming is a READ operation. Do not bump updatedAt on the parent record;
  // it could otherwise outrank the course's last real navigation checkpoint.
  pending.onLaunch();
}
/* ===== Embedded Kurs HTML bridge =====
  Runs inside same-origin lesson documents after they load. The back control is
  part of the lesson's own header, not a fixed button outside its content. */
function addLessonInternalBackButton(doc,level,no){
  if(!doc?.body || doc.getElementById("deutschLessonInternalBack")) return;
  const header=doc.querySelector("main > header,.shell > header,.wrap > header,.app > header,body > header,.top,.header");
  const parent=header || doc.querySelector("main,.shell,.wrap,.app") || doc.body;
  const button=doc.createElement("button");
  button.type="button";
  button.id="deutschLessonInternalBack";
  button.textContent=`← رجوع إلى الدرس ${Number(no)}`;
  button.setAttribute("aria-label","الرجوع إلى صفحة الدرس مع حفظ التقدم");
  button.addEventListener("click",()=>{
    saveActiveCourseBeforeExit();
    document.documentElement.classList.remove("challenge-fullscreen-open");
    document.body.classList.remove("challenge-fullscreen-open");
    page=["B1","B2"].includes(level)?"upper-level-section":(level==="A2"?"a2-lesson-html":(lessonSectionReturnPage||"lesson-hub"));
    render();
  });
  if(header){
    // Keep both navigation actions together at the right of the title.
    const nativeExit=doc.getElementById("deutschLessonInternalExit");
    if(nativeExit?.parentElement===header) header.insertBefore(button,nativeExit);
    else header.appendChild(button);
  } else parent.insertBefore(button,parent.firstChild);
  // Apps that don't have a standard header get their own in-page row.
  if(!header)button.classList.add("deutsch-lesson-back-no-header");

  // A real exit control inside the course HTML. Unlike "رجوع إلى الدرس",
  // it returns to the lesson list, preserving the active slide and quiz.
  let exitButton=doc.getElementById("deutschLessonInternalExit");
  if(!exitButton){
    exitButton=doc.createElement("button");
    exitButton.type="button";
    exitButton.id="deutschLessonInternalExit";
    exitButton.textContent="🚪 الخروج من الدرس";
    if(header) header.appendChild(exitButton);
    else parent.insertBefore(exitButton,button.nextSibling);
  }
  exitButton.setAttribute("aria-label","الخروج من الدرس والرجوع إلى قائمة الدروس مع حفظ التقدم");
  exitButton.addEventListener("click",event=>{
    // Capturing also takes precedence over the standalone-page fallback.
    event.preventDefault();
    event.stopImmediatePropagation();
    saveActiveCourseBeforeExit();
    document.documentElement.classList.remove("challenge-fullscreen-open");
    document.body.classList.remove("challenge-fullscreen-open");
    page=["B1","B2"].includes(level)?"upper-level-section":(level==="A2"?"a2-level-home":"level-home");
    render();
  },true);
  if(!header)exitButton.classList.add("deutsch-lesson-back-no-header");
  const backStyle=doc.createElement("style");
  backStyle.id="deutschLessonBackStyle";
  backStyle.textContent=`
    #deutschLessonInternalBack{flex:0 0 auto;display:inline-flex;align-items:center;
      justify-content:center;white-space:nowrap;margin-inline-start:auto;
      min-height:39px;padding:8px 13px;border:1px solid #c8d9ec;border-radius:12px;
      background:#fff;color:#21589c;font-family:Tahoma,Arial,sans-serif;
      font-size:13px;font-weight:700;box-shadow:0 3px 10px #24598a11;
      cursor:pointer;direction:rtl;position:relative;z-index:2}
    #deutschLessonInternalBack:hover{background:#edf5ff}
    #deutschLessonInternalBack:focus-visible{outline:3px solid #efac4e;outline-offset:2px}
    #deutschLessonInternalBack.deutsch-lesson-back-no-header{display:flex;margin:10px 12px 10px auto}
    #deutschLessonInternalExit{flex:0 0 auto;display:inline-flex;align-items:center;
      justify-content:center;white-space:nowrap;margin-inline-start:6px;
      min-height:39px;padding:8px 13px;border:1px solid #efc9c9;border-radius:12px;
      background:#fff8f8;color:#a12c36;font-family:Tahoma,Arial,sans-serif;
      font-size:13px;font-weight:700;box-shadow:0 3px 10px #9d33330a;
      cursor:pointer;direction:rtl;position:relative;z-index:2}
    #deutschLessonInternalExit:hover{background:#ffebed;border-color:#e5a4a9}
    #deutschLessonInternalExit:focus-visible{outline:3px solid #efac4e;outline-offset:2px}
    #deutschLessonInternalExit.deutsch-lesson-back-no-header{display:flex;margin:10px auto 10px 12px}
    @media(max-width:700px){
      #deutschLessonInternalBack,#deutschLessonInternalExit{font-size:12px;padding:7px 9px;white-space:normal}
      .top,main>header,.shell>header{flex-wrap:wrap}
    }
  `;
  (doc.head||doc.documentElement).appendChild(backStyle);
  // An official integration API for course HTML pages with custom interactions.
  // No marks are invented: report only returns real points sent by the lesson.
  try{
    doc.defaultView.DeutschLessonIntegration={
      level,lessonNumber:no,
      save(state){
        if(activeCourseFrame?.initializing || !state || typeof state!=="object")return;
        const updates={};
        if(Number.isInteger(Number(state.slideIndex))&&Number(state.slideIndex)>=0)updates.lastTab=Number(state.slideIndex);
        if(typeof state.label==="string")updates.lastTabLabel=state.label.slice(0,85);
        if(Number.isInteger(Number(state.totalSlides))&&Number(state.totalSlides)>0)updates.totalTabs=Number(state.totalSlides);
        if(state.completed===true)updates.completed=true;
        if(Object.keys(updates).length)saveCourseProgress(level,no,updates);
      },
      result(stageIndex,points,maxPoints,label){
        if(!Number.isInteger(Number(stageIndex))||!Number.isFinite(Number(points))||Number(maxPoints)<=0)return;
        const stage=Math.max(0,Math.floor(Number(stageIndex)));
        const record=getCourseProgress(level,no)||{};
        const results={...(record.nativeStageResults||{}),[stage]:{
          points:Math.max(0,Math.min(Number(maxPoints),Number(points))),
          maxPoints:Number(maxPoints),label:String(label||`المرحلة ${stage+1}`).slice(0,85)}};
        saveCourseProgress(level,no,{nativeStageResults:results});
        storeCourseStageResults(level,no,null,results);
      }
    };
  }catch(error){console.warn("Lesson integration could not be attached",error);}
  attachVocabularyTracking(doc,level,no);
}

function storeCourseStageResults(level,no,native,explicitResults){
  if(!currentUser || currentUser.role!=="student")return;
  const stages=Array.isArray(native?.stages)?native.stages:[];
  const saved=getCourseProgress(level,no)||{};
  const manual=explicitResults||saved.nativeStageResults||{};
  const count=stages.length||Math.max(0,Number(saved.totalTabs)||0);
  if(!count && !Object.keys(manual).length)return;
  const totalPerStage=Math.max(1,Number(native?.quizTotal)||Number(saved.scorePerStage)||10);
  const scores={},scoreTotals={},completedMap={},exerciseLabels={},stageByExercise={},stageLabels={};
  let points=0,maxPoints=0,finished=0;
  for(let i=0;i<count;i++){
    const unscoredLegacy=Math.max(0,Number(saved.legacyUnscoredStages)||0);
    const item=manual[i]||(i>=unscoredLegacy && stages[i]?.done ? {points:stages[i].score,maxPoints:totalPerStage} : null);
    if(!item)continue;
    const max=Math.max(1,Number(item.maxPoints)||totalPerStage);
    const correct=Math.max(0,Math.min(max,Number(item.points)||0));
    const key=`kurs-stage-${i+1}`;
    scores[key]={correct,total:max};scoreTotals[key]=max;completedMap[key]=true;
    exerciseLabels[key]=String(item.label||`المرحلة ${i+1}`);stageByExercise[key]=key;stageLabels[key]=exerciseLabels[key];
    points+=correct;maxPoints+=max;finished++;
  }
  if(!finished)return; // No quiz has actually been graded yet.
  const signature=JSON.stringify({points,maxPoints,finished,count,scores});
  if(saved.courseResultSignature===signature)return;
  saveCourseProgress(level,no,{courseResultSignature:signature,scorePerStage:totalPerStage},false);
  const moduleId=`kurs-${level.toLowerCase()}-lektion-${no}`;
  const attemptId=`${moduleId}-${saved.restartAt||saved.startedAt||"initial"}`;
  saveStudentResult(moduleId,`Kurs ${level} · Lektion ${no}`,points,maxPoints,{
    contentType:"kurs",activityType:"kurs",source:"lesson-html-bridge",
    lessonNumber:no,level,completedExercises:finished,totalExercises:count,
    completed:completedMap,scores,scoreTotals,exerciseLabels,stageByExercise,stageLabels,
    attemptId
  });
}

function findCourseTabs(doc){
  if(!doc) return [];
  const groupSelectors='[role="tablist"],.tabs,.tab-nav,.tab-bar,.tab-buttons,.nav-tabs,.course-tabs,.lesson-tabs,.section-tabs,.section-nav,.topic-tabs,.topic-nav,.unit-tabs,.slides-nav,.category-tabs,.nav-pills,.steps,.lesson-navigation';
  const candidates=Array.from(doc.querySelectorAll(groupSelectors));
  for(const group of candidates){
    const elements=Array.from(group.querySelectorAll('button,[role="tab"],a[data-tab],a[data-slide],a[href^="#"]'));
    if(elements.length>=2 && elements.length<=32 && elements.every(node=>node.offsetParent!==null)) return elements;
  }
  const direct=Array.from(doc.querySelectorAll('[role="tab"],button[data-tab],button[data-slide],button[data-section],button.tab,button.tab-btn,button.section-tab,button.topic-tab'));
  if(direct.length>=2 && direct.length<=32) return direct;
  // Fallback for independent HTML lessons that use an unnamed row of section buttons.
  for(const group of doc.querySelectorAll('nav,header,section,div')){
    const box=group.getBoundingClientRect();
    if(box.top>330 || box.bottom>650 || box.width<300 || box.height>160) continue;
    const buttons=Array.from(group.children).filter(el=>el.matches?.('button,[role="tab"]'));
    if(buttons.length>=3 && buttons.length<=20 && buttons.every(el=>el.offsetParent!==null)) return buttons;
  }
  return [];
}
function activeCourseTabIndex(tabs){
  return tabs.findIndex(tab=>tab.getAttribute("aria-selected")==="true" ||
    ["page","step","true"].includes(tab.getAttribute("aria-current")) ||
    ["active","is-active","selected","current"].some(name=>tab.classList.contains(name)));
}
function fitCoursePageToViewport(doc){
  // The overlay iframe already fills the viewport; independent lesson HTML files
  // often have their OWN centred max-width container (or deeply nested wrappers).
  // Remove only those layout limits: never scale images or change exercise markup.
  if(!doc?.body) return;
  if(!doc.getElementById("deutschCourseFullscreenStyle")){
    const style=doc.createElement("style");
    style.id="deutschCourseFullscreenStyle";
    style.textContent=`
      html,body{width:100%!important;min-width:0!important;max-width:none!important;min-height:100dvh!important;margin:0!important;box-sizing:border-box!important;}
      body{overflow-x:hidden!important;padding-inline:clamp(8px,1.4vw,24px)!important;}
      body *,body *::before,body *::after{box-sizing:border-box;}
      body > main,body > #app,body > #root,body > .container,body > .wrapper,body > .wrap,body > .shell,body > .app-shell,body > .kurs-shell,body > .course-shell,body > .course-container,body > .lesson-container,body > .page-container,
      main.course-container,main.lesson-container,main.kurs,main.course,main.main,
      #app > main,#app > .container,#root > main,#root > .container{
        max-width:none!important;width:100%!important;min-width:0!important;margin-inline:0!important;
      }
      img,svg,video,canvas{max-width:100%;}
      /* The course's own shell and deck must be edge-to-edge, not a 1060px panel. */
      body > main.shell,body > main.wrap,body > main,body > .wrap,body > .shell,
      body > .app,body > .container,body > #app,body > #root{
        width:100%!important;max-width:none!important;min-width:0!important;
        margin:0!important;padding:clamp(10px,1.4vw,20px)!important;
        border:0!important;border-radius:0!important;box-shadow:none!important;
      }
      main.shell > .deck,main > .deck,main > .panel,main > .course-card,
      .shell > .deck,.wrap > .deck{
        width:100%!important;max-width:none!important;margin-inline:0!important;
        border:0!important;border-radius:0!important;box-shadow:none!important;
        padding:clamp(10px,1.2vw,18px)!important;
      }
      @media(max-width:650px){body{padding-inline:0!important;} }
    `;
    (doc.head||doc.documentElement).appendChild(style);
  }
  const win=doc.defaultView;
  if(!win) return;
  const viewport=doc.documentElement.clientWidth || win.innerWidth;
  if(viewport<630) return; // keep each lesson's mobile/responsive card layout

  // Select only sizeable, roughly centred wrappers. A width rule may be on
  // .page / .content / a classless div, not one of the common named containers.
  // Do not expand individual cards, columns, navigation tabs or modal windows.
  const named='main,#app,#root,.container,.wrapper,.wrap,.shell,.app-shell,.kurs-shell,.course-shell,.course-content,.course-wrap,.course-container,.lesson-container,.page-container,.page-wrapper,.main-container,.content-wrapper,.poster-card,.lesson-page,.kurs-page';
  const candidates=new Set(doc.querySelectorAll(named));
  // Search the shallow DOM tree for other restricted ancestors, including
  // anonymous .outer/.inner wrappers used by the newer lesson templates.
  let parents=[doc.body];
  for(let depth=0;depth<6 && parents.length;depth++){
    const children=[];
    for(const parent of parents){
      for(const el of parent.children){
        if(!el.matches('main,section,article,div')) continue;
        candidates.add(el);
        if(el.children.length && !el.matches('button,.card,.tile,.item')) children.push(el);
      }
    }
    parents=children.slice(0,75);
  }
  for(const el of candidates){
    if(!el.isConnected || el===doc.body || el===doc.documentElement) continue;
    if(el.closest('[role="dialog"],.modal,.modal-bg,.course-resume-overlay')) continue;
    const style=win.getComputedStyle(el);
    if(style.position==='fixed' || style.position==='absolute' || style.display==='none') continue;
    const rect=el.getBoundingClientRect();
    if(rect.height<150 || rect.width<viewport*.45 || rect.width>=viewport*.96) continue;
    if(Math.abs(rect.left-(viewport-rect.right))>Math.max(110,viewport*.10)) continue;
    // If the layout is a grid/flex with multiple columns, don't force its
    // individual children to full width. Only uncap its outer container.
    const parentStyle=el.parentElement && win.getComputedStyle(el.parentElement);
    if(parentStyle && ['grid','inline-grid','flex','inline-flex'].includes(parentStyle.display)){
      const siblings=Array.from(el.parentElement.children).filter(item=>item.getBoundingClientRect().width>100);
      if(siblings.length>1) continue;
    }
    el.style.setProperty('max-width','none','important');
    el.style.setProperty('width','100%','important');
    el.style.setProperty('min-width','0','important');
    el.style.setProperty('margin-left','0','important');
    el.style.setProperty('margin-right','0','important');
  }
}

/* Read course-owned quiz/slider state without rewriting the independent lesson files.
   Supports the original staged Kurs HTML (SECTIONS/progress/goTo/startQuiz).
   Other course layouts still use the general tab/scroll fallback. */
function installNativeCourseChangeHook(win){
  if(!win) return;
  try{
    win.eval(`(function(){
      if(window.__deutschStageBridgeV6)return;
      window.__deutschStageBridgeV6=true;
      for(const name of ['goTo','startQuiz','renderQuestion','finishQuiz','forward','backward']){
        let fn;try{fn=eval(name);}catch(error){continue;}
        if(typeof fn!=='function')continue;
        // Assignment works with classic inline <script> function declarations.
        const wrap=function(...args){
          const value=fn.apply(this,args);
          window.dispatchEvent(new Event('deutsch-course-state-changed'));
          return value;
        };
        try{eval(name+' = wrap')}catch(error){}
      }
    })()`);
  }catch(error){console.warn('Native stage hooks unavailable',error);}
}
function readNativeCourseState(win){
  if(!win) return null;
  try{
    const raw=win.eval(`(function(){
      if(typeof progress==='undefined' || !Array.isArray(progress) || !progress.length || progress.length>64 ||
         !progress.every(p=>p && typeof p==='object' && typeof p.done==='boolean')) return null;
      const state={stages:progress.map(p=>({done:!!p.done,score:Number.isFinite(+p.score)?Math.max(0,+p.score):0})),
        current:typeof current==='number' && Number.isInteger(current)?current:null,
        quizTotal:typeof QUIZ_TOTAL==='number'&&QUIZ_TOTAL>0&&QUIZ_TOTAL<=100?QUIZ_TOTAL:10};
      if(typeof quizMode==='boolean' && quizMode && typeof quizIndex==='number'){
        state.quiz={active:true,index:quizIndex,score:typeof quizScore==='number'?quizScore:0,
          answered:typeof quizAnswered==='boolean' ? quizAnswered:false,
          questions:typeof quizQuestions!=='undefined' && Array.isArray(quizQuestions)?quizQuestions:null};
      }
      return JSON.stringify(state);
    })()`);
    if(typeof raw!=='string' || raw.length>250000) return null;
    const parsed=JSON.parse(raw);
    return parsed && Array.isArray(parsed.stages) ? parsed : null;
  }catch(error){return null;}
}
function restoreNativeCourseState(win,before){
  const currentNative=readNativeCourseState(win);
  if(!currentNative) return false;
  let stages=Array.isArray(before.nativeStages)?before.nativeStages.slice(0,64):[];
  // Compatibility with progress saved by the previous version of this app:
  // in these sequential courses reaching stage N requires passing all previous quizzes.
  if(!stages.length && Number(before.lastTab)>0){
    const last=Math.max(0,Math.min(currentNative.stages.length-1,Math.trunc(Number(before.lastTab))));
    stages=currentNative.stages.map((_,i)=>({done:i<last,score:0}));
    // Previously saved cursors had no grade information: do not invent zero-mark grades.
    saveCourseProgress(activeCourseFrame?.level||"A1",activeCourseFrame?.no||0,{legacyUnscoredStages:last},false);
  }
  const selected=Math.max(0,Math.min(currentNative.stages.length-1,
    Number.isFinite(Number(before.lastTab))?Math.trunc(Number(before.lastTab)):0));
  try{
    // JSON.stringify ensures the state is a JS literal, never executable course text.
    const stageData=JSON.stringify(stages.map(item=>({done:!!item?.done,
      score:Number.isFinite(+item?.score)?Math.max(0,+item.score):0})));
    win.eval(`(function(saved){
      if(typeof progress==='undefined'||!Array.isArray(progress))return;
      saved.forEach((value,i)=>{if(progress[i] && typeof progress[i]==='object'){
        progress[i].done=!!value.done; progress[i].score=value.score||0;
      }});
      if(typeof updateTabs==='function') updateTabs();
    })(${stageData})`);
    // goTo must run after the prerequisite quiz results have been restored.
    if(typeof win.eval('typeof goTo')==='string' && win.eval('typeof goTo')==='function'){
      win.eval(`goTo(${selected})`);
    }
    const quiz=before.nativeQuiz;
    const actual=Number(win.eval("typeof current==='number'?current:-1"));
    if(actual!==selected) return false;
    if(quiz?.active){
      const safeQuiz={index:Math.max(0,Math.min(99,Math.trunc(Number(quiz.index)||0))),
        score:Math.max(0,Math.trunc(Number(quiz.score)||0)),
        answered:quiz.answered===true,
        questions:Array.isArray(quiz.questions) ? quiz.questions.slice(0,100) : null};
      const payload=JSON.stringify(safeQuiz).replace(/</g,'\\u003c');
      win.eval(`(function(saved){
        if(typeof startQuiz!=='function'||typeof quizMode==='undefined')return;
        if(!quizMode)startQuiz();
        if(saved.questions && typeof quizQuestions!=='undefined'&&Array.isArray(quizQuestions)){
          quizQuestions.splice(0,quizQuestions.length,...saved.questions);
        }
        if(typeof quizQuestions!=='undefined'&&quizQuestions.length){
          quizScore=saved.score;
          if(saved.answered && saved.index>=quizQuestions.length-1){
            quizIndex=quizQuestions.length-1;
            if(typeof finishQuiz==='function')finishQuiz();
          }else{
            quizIndex=Math.max(0,Math.min(saved.index+(saved.answered?1:0),quizQuestions.length-1));
            if(typeof renderQuestion==='function')renderQuestion();
          }
        }
      })(${payload})`);
    }
    return true;
  }catch(error){
    console.warn('Could not restore native course state; using tab fallback',error);
    return false;
  }
}
function readCourseFormDraft(doc){
  const fields=Array.from(doc.querySelectorAll('input:not([type="file"]):not([type="password"]),textarea,select')).slice(0,80);
  const entries={};
  fields.forEach((field,i)=>{
    if(field.disabled||field.closest('[hidden]'))return;
    const key=(field.id ? '#'+field.id : field.name ? `[name="${field.name}"]` : `@${i}`);
    const value=field.type==="checkbox"||field.type==="radio" ? !!field.checked : String(field.value||'').slice(0,500);
    if(value!=='' && value!==false)entries[key]={value,index:i};
  });
  return Object.keys(entries).length ? entries : null;
}
function restoreCourseFormDraft(doc,draft){
  if(!draft || typeof draft!=="object")return;
  const fields=Array.from(doc.querySelectorAll('input:not([type="file"]):not([type="password"]),textarea,select')).slice(0,80);
  for(const [key,item] of Object.entries(draft)){
    if(!item || !Object.prototype.hasOwnProperty.call(item,"value"))continue;
    let node=null;
    if(key[0]==="#")node=doc.getElementById(key.slice(1));
    else if(key[0]==="@")node=fields[item.index];
    else try{node=doc.querySelector(key);}catch(error){}
    if(!node||node.disabled)continue;
    if(node.type==="checkbox"||node.type==="radio")node.checked=!!item.value;
    else node.value=String(item.value);
  }
}
function trackCourseIframe(frame,level,no){
  if(!frame) return;
  const launchMode=courseResumeMode;
  // Freeze the progress record BEFORE the embedded HTML can send any message.
  const launchSnapshot={...(getCourseProgress(level,no)||{})};
  activeCourseFrame={frame,level,no,initializing:true};
  frame.addEventListener('load',()=>{
    let doc,win;
    try{
      doc=frame.contentDocument;win=frame.contentWindow;
      if(!doc?.body || !win) return;
      // Ignore the temporary about:blank iframe: otherwise it overwrites the
      // previous position with slide 1 before the REAL lesson finishes loading.
      const expected=frame.dataset.managedPagePath || '';
      if(expected && (doc.location.href==='about:blank' || doc.location.href==='about:srcdoc')) return;
    }catch(error){return;}
    fitCoursePageToViewport(doc);
    addLessonInternalBackButton(doc,level,no);
    [80,350,900,1800].forEach(delay=>win.setTimeout(()=>{
      if(frame.isConnected && frame.contentDocument===doc) fitCoursePageToViewport(doc);
    },delay));
    const before=launchSnapshot;
    const priorTabs=Array.isArray(before.visitedTabs)?before.visitedTabs:[];
    let trackedIndex=Number.isInteger(Number(before.lastTab))?Number(before.lastTab):0;
    let restoreInProgress=launchMode==='resume';
    let lastSignature='';
    function snapshot(){
      if(!frame.isConnected || frame.contentDocument!==doc || restoreInProgress) return;
      const tabs=findCourseTabs(doc);
      const native=readNativeCourseState(win);
      const active=activeCourseTabIndex(tabs);
      const actualIndex=native && Number.isInteger(native.current)?native.current:active;
      if(actualIndex>=0 && (!tabs.length || actualIndex<tabs.length)) trackedIndex=actualIndex;
      const existing=getCourseProgress(level,no)||{};
      const visited=Array.from(new Set([
        ...(existing.visitedTabs||priorTabs),...(tabs.length?[trackedIndex]:[])
      ].filter(i=>Number.isInteger(i)&&i>=0&&(!tabs.length||i<tabs.length)))).sort((a,b)=>a-b);
      const top=Math.max(0,Math.round(win.scrollY||doc.scrollingElement?.scrollTop||0));
      const maxScroll=Math.max(0,(doc.scrollingElement?.scrollHeight||0)-win.innerHeight);
      const ratio=maxScroll?Math.min(1,top/maxScroll):0;
      // A lesson with quizzes is only complete when they are all finished;
      // visiting every visual tab is NOT course completion.
      const finishedNative=native && native.stages.every(stage=>stage.done);
      const completed=!!existing.completed || !!finishedNative;
      const value={lastTab:trackedIndex,totalTabs:tabs.length||native?.stages.length||0,
        visitedTabs:visited,lastTabLabel:tabs[trackedIndex]?.textContent?.replace(/\s+/g,' ').trim().slice(0,85)||'',
        scrollTop:top,scrollRatio:ratio,completed,formDraft:readCourseFormDraft(doc)};
      if(native){
        value.nativeStages=native.stages;
        value.nativeQuiz=native.quiz||null;
        value.scorePerStage=native.quizTotal||10;
      }
      const signature=JSON.stringify(value);
      if(signature!==lastSignature){
        lastSignature=signature;
        saveCourseProgress(level,no,value);
        if(native)storeCourseStageResults(level,no,native);
      }
    }
    if(activeCourseFrame?.frame===frame) activeCourseFrame.persist=snapshot;
    // Listen directly to the lesson's navigation/quiz lifecycle. Clicking
    // "next" changes the native index inside goTo(); a 700ms poll can miss
    // short visits (e.g. clicking Exit immediately afterwards).
    win.addEventListener('deutsch-course-state-changed',()=>{
      if(restoreInProgress)return;
      snapshot();
    });
    installNativeCourseChangeHook(win);
    if(launchMode==='resume'){
      // The saved index is authoritative until a real restore succeeds. Never
      // let a newly booted HTML page at stage 1 overwrite the saved stage.
      let attempts=0;
      const restoreSavedLocation=()=>{
        if(!frame.isConnected || frame.contentDocument!==doc) return;
        attempts++;
        let restored=false;
        try{
          const savedIndex=Math.max(0,Number(before.lastTab)||0);
          // New HTML courses restore state before their first paint. Trust it
          // when it matches the stored stage; otherwise use the parent bridge.
          const nativeNow=readNativeCourseState(win);
          const nativeAlreadyRestored=!!((win.DeutschCourseNativeSyncV8?.restored || win.DeutschCourseNativeSyncV7?.restored) && nativeNow);
          if(nativeAlreadyRestored){
            // The HTML owns the cursor: a newer native snapshot may repair a
            // stale parent record incorrectly overwritten with slide 1.
            before.lastTab=nativeNow.current;
            before.nativeStages=nativeNow.stages;
            before.nativeQuiz=nativeNow.quiz||null;
            trackedIndex=nativeNow.current;
            restored=true;
          }else{
            restored=restoreNativeCourseState(win,before);
          }
          const tabs=findCourseTabs(doc);
          const idx=Math.min(tabs.length-1,savedIndex);
          if(!restored && tabs.length && idx>=0 && idx!==activeCourseTabIndex(tabs)){
            tabs[idx].click();
            restored=activeCourseTabIndex(tabs)===idx;
          }
          if(!restored && savedIndex===0)restored=true;
          if(restored){
            const max=Math.max(0,(doc.scrollingElement?.scrollHeight||0)-win.innerHeight);
            const top=Math.min(max,Math.max(0,Number(before.scrollTop)||Math.round(max*(Number(before.scrollRatio)||0))));
            win.scrollTo({top,behavior:'instant'});
            restoreCourseFormDraft(doc,before.formDraft);
          }
        }catch(error){console.warn('Could not restore course slide',error);}
        if(restored || attempts>=8){
          restoreInProgress=false;
          if(activeCourseFrame?.frame===frame)activeCourseFrame.initializing=false;
          // An unsupported HTML file must not erase a lastTab we couldn't restore.
          if(restored) snapshot();
          else console.warn('This Kurs HTML needs an internal stage restore bridge:',level,no,before.lastTab);
        }else win.setTimeout(restoreSavedLocation,250);
      };
      // Fast first render; also retry for lessons that render their navigation asynchronously.
      win.setTimeout(restoreSavedLocation,80);
    }else{
      restoreInProgress=false;
      win.setTimeout(()=>{
        if(activeCourseFrame?.frame===frame)activeCourseFrame.initializing=false;
        const tabs=findCourseTabs(doc);
        if(launchMode==='restart' && tabs.length){
          try{tabs[0].click();win.scrollTo(0,0);}catch(error){}
        }
        snapshot();
      },400);
    }
    doc.addEventListener('click',event=>{
      const clicked=event.target?.closest?.('button,[role="tab"],a');
      if(!clicked)return;
      const clickedTab=findCourseTabs(doc).indexOf(clicked);
      if(clickedTab>=0 && !clicked.disabled){
        win.setTimeout(()=>{
          const tabs=findCourseTabs(doc);
          if(!tabs.length || activeCourseTabIndex(tabs)>=0)return; // real state wins
          trackedIndex=clickedTab;
          snapshot();
        },250);
      }
      const text=(clicked.textContent||'').trim();
      if(/(?:إنهاء|إكمال|أكملت|أنهيت)\s*(?:هذا\s*)?الدرس|finish\s*(?:the\s*)?lesson|complete\s*(?:the\s*)?lesson|lektion\s*abschlie(?:ß|ss)en/i.test(text) ||
         /(?:complete|finish)[-_]?(?:lesson|course)/i.test(clicked.dataset.action||'')){
        saveCourseProgress(level,no,{completed:true});
      }
      // A click can be blocked by the original course's prerequisites. Read
      // ACTUAL active slide after the event instead of trusting clicked tab.
      win.setTimeout(snapshot,150);
    },true);
    doc.addEventListener('scroll',snapshot,{capture:true,passive:true});
    doc.addEventListener('input',()=>win.setTimeout(snapshot,50),{capture:true,passive:true});
    doc.addEventListener('change',()=>win.setTimeout(snapshot,50),{capture:true,passive:true});
    const watchNodes=doc.querySelectorAll('.tabs,.tab-nav,.course-tabs,.section-tabs,#slideCount,.section-bar,.dots,#quizPanel');
    if(watchNodes.length && typeof win.MutationObserver==='function'){
      let queued=false;
      const changes=new win.MutationObserver(()=>{
        if(restoreInProgress || queued)return;
        queued=true;
        win.setTimeout(()=>{queued=false;snapshot();},0);
      });
      watchNodes.forEach(node=>changes.observe(node,{subtree:true,childList:true,attributes:true,characterData:true,
        attributeFilter:['aria-selected','aria-current','class','hidden']}));
      win.addEventListener('pagehide',()=>changes.disconnect(),{once:true});
    }
    win.addEventListener('pagehide',snapshot);
    doc.addEventListener('visibilitychange',()=>{if(doc.hidden)snapshot();});
    const timer=win.setInterval(()=>{
      if(!frame.isConnected || frame.contentDocument!==doc){win.clearInterval(timer);return;}
      snapshot();
    },700);
  });
}
function saveActiveCourseBeforeExit(){
  // iframe click/scroll/poll and pagehide already persist the last position.
  if(activeCourseFrame){
    // Persist synchronously while the iframe still exists, before render() removes it.
    try{
      (activeCourseFrame.frame.contentWindow?.DeutschCourseNativeSyncV8 || activeCourseFrame.frame.contentWindow?.DeutschCourseNativeSyncV7)?.save?.();
      activeCourseFrame.persist?.();
    }catch(error){}
    const record=getCourseProgress(activeCourseFrame.level,activeCourseFrame.no);
    if(record && firebaseReady && firebaseDb && !demoMode){
      const {level,no}=activeCourseFrame;
      firebaseDb.ref(`${DEUTSCH_A1_PATH}/courseProgress/${currentUser.id}/${courseProgressId(level,no)}`)
        .set(record).catch(()=>{});
    }
  }
  activeCourseFrame=null;
}
window.addEventListener("message",event=>{
  if(event.data?.type!=="deutsch-course-exit-request") return;
  const active=activeCourseFrame;
  if(!active?.frame || event.source!==active.frame.contentWindow) return;
  if(!["lesson-section-html","a2-course-content","upper-level-course-lesson"].includes(page)) return;
  saveActiveCourseBeforeExit();
  document.documentElement.classList.remove("challenge-fullscreen-open");
  document.body.classList.remove("challenge-fullscreen-open");
  page=["B1","B2"].includes(active.level)?"upper-level-section":(active.level==="A2"?"a2-level-home":"level-home");
  render();
});
/* ===== end course resume ===== */

function renderA2LevelHome(){
  // Keep the A2 overview visually and behaviorally aligned with the A1 lesson grid.
  const resultRows = Object.values(readStudentResults(currentUser?.id || "") || {}).filter(item=>item && typeof item==="object");
  const completedForLesson = lessonNo => resultRows.some(result=>{
    const resultNo = Number(result.lessonNo || result.lessonNumber || result.lesson || 0);
    if(resultNo !== lessonNo) return false;
    const completedMap = result.completed && typeof result.completed==="object" ? result.completed : {};
    const total = Number(result.totalExercises) || Object.keys(completedMap).length;
    const completed = Number(result.completedExercises) || Object.values(completedMap).filter(Boolean).length;
    return result.completed===true || (total>0 && completed>=total);
  });
  const statuses = a2CourseLessons.map((lesson,index)=>({
    lesson,index,completed:completedForLesson(lesson.number)||!!getCourseProgress("A2",lesson.number)?.completed,
    unlocked:getStudentLessonAccess(index,"A2")
  }));
  const currentIndex = statuses.find(item=>item.unlocked&&!item.completed)?.index ?? -1;
  const nextLesson = statuses.find(item=>item.index===currentIndex) || statuses.find(item=>item.unlocked) || null;
  const completedCount = statuses.filter(item=>item.completed).length;
  const progress = a2CourseLessons.length ? Math.round(completedCount/a2CourseLessons.length*100) : 0;

  const lessonCards = statuses.map(item=>{
    const {lesson,index}=item;
    const state = !item.unlocked ? "locked" : item.completed ? "completed" : index===currentIndex ? "current" : "available";
    const saved=getCourseProgress("A2",lesson.number);
    const stateLabel = state==="locked" ? "مقفل من الإدارة" : state==="completed" ? "مكتمل" : saved?.startedAt ? `متابعة ${courseProgressPercent(saved)}%` : state==="current" ? "قيد التعلّم" : "متاح";
    const stateIcon = state==="locked" ? "×" : state==="completed" ? "✓" : state==="current" ? "●" : "•";
    return `<button type="button" class="level-lesson-card is-${state}" data-action="a2-lesson" data-lesson-no="${lesson.number}" ${item.unlocked?"":"disabled"} aria-label="${escapeHtml(`الدرس ${lesson.number}: ${lesson.arabic} · ${stateLabel}`)}">
      <span class="level-lesson-art" aria-hidden="true">${lesson.icon}</span>
      <span class="level-lesson-copy">
        <span class="level-lesson-number">الدرس ${lesson.number}</span>
        <strong>${escapeHtml(lesson.arabic)}</strong>
        <small dir="ltr">${escapeHtml(lesson.title)}</small>
      </span>
      <span class="level-lesson-side">
        <span class="level-lesson-status is-${state}"><i aria-hidden="true">${stateIcon}</i>${stateLabel}</span>
        <span class="level-lesson-arrow" aria-hidden="true">←</span>
      </span>
    </button>`;
  }).join("");

  const nextCta = nextLesson
    ? `<button type="button" class="level-next-cta" data-action="a2-lesson" data-lesson-no="${nextLesson.lesson.number}">
        <span class="level-next-cta-icon" aria-hidden="true">←</span>
        <span class="level-next-cta-copy"><strong>${currentIndex>=0 ? "ابدأ الدرس التالي" : "راجع الدروس"}</strong><small>Lektion ${nextLesson.lesson.number} · ${escapeHtml(nextLesson.lesson.title)}</small></span>
        <span class="level-next-cta-spark" aria-hidden="true">✦</span>
      </button>`
    : statuses.some(item=>item.unlocked)?`<div class="level-complete-note"><span aria-hidden="true">🏆</span><strong>أحسنت! أكملت جميع الدروس</strong></div>`:`<div class="level-complete-note"><span aria-hidden="true">🔒</span><strong>جميع الدروس مقفلة حالياً من الإدارة</strong></div>`;

  app.innerHTML = `<div class="student-app level-home-app" dir="rtl">
    <header class="level-screen-topbar">
      <button type="button" class="level-screen-back" data-action="back" aria-label="رجوع"><span aria-hidden="true">←</span></button>
      <div class="level-screen-title"><small>مسارك التعليمي</small><strong>مستوى A2</strong></div>
    </header>
    <main class="level-home-main">
      <section class="level-hero" aria-labelledby="a2LevelHeroTitle">
        <div class="level-hero-visual" aria-hidden="true">
          <span class="level-hero-orbit"></span><span class="level-hero-cap">🎓</span>
          <span class="level-hero-book">📚</span><span class="level-hero-star">✦</span>
        </div>
        <div class="level-hero-copy">
          <span class="level-hero-kicker"><i aria-hidden="true"></i> رحلتك مستمرة خطوة بخطوة</span>
          <h1 id="a2LevelHeroTitle"><strong>A2</strong><span>المستوى الأساسي الأعلى</span></h1>
          <p>وسّع مفرداتك وطوّر قدرتك على التواصل بالألمانية.</p>
          <div class="level-hero-tags"><span>${a2CourseLessons.length} دروس</span><span>تطوير اللغة</span></div>
        </div>
      </section>
      <section class="level-progress-card" aria-label="تقدمك في المستوى A2">
        <div class="level-progress-top">
          <div class="level-progress-title"><span class="level-progress-icon" aria-hidden="true">▥</span>
            <span><strong>تقدمك في المستوى</strong><small>${completedCount} من ${a2CourseLessons.length} دروس مكتملة</small></span>
          </div>
          <span class="level-progress-percent">${progress}%</span>
        </div>
        <div class="level-progress-track" role="progressbar" aria-label="نسبة التقدم في المستوى A2" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}"><span style="width:${progress}%"></span></div>
      </section>
      <section class="level-lessons-section">
        <div class="level-lessons-heading">
          <div><span class="level-section-kicker">خطتك التعليمية</span><h2>دروس المستوى <b>${a2CourseLessons.length}</b></h2></div>
          <small>تابع من حيث توقفت</small>
        </div>
        <div class="level-lessons-list">${lessonCards}</div>
      </section>
    </main>
    <div class="level-next-cta-wrap">${nextCta}</div>
  </div>`;
}

function renderA2LessonHtmlPage(){
  const lesson = a2CourseLessons.find(item=>item.number===Number(currentA2LessonNo));
  if(!lesson){ page="a2-level-home"; return render(); }

  const descriptions = {
    1:"تعلّم كيف تتحدث عن التجارب والخطط باستعمال أمثلة واضحة.",
    2:"تعلّم وصف الملابس والمظهر والألوان والمقاسات.",
    3:"تحدّث عن العائلة والأصدقاء والعلاقات اليومية.",
    4:"تعلّم وصف شقة العطلة وحجز مكان للإقامة.",
    5:"تعرّف على الأطعمة والمشروبات وكيفية الطلب في المطعم.",
    6:"طوّر مهارات الاستماع والنطق والتواصل بالألمانية.",
    7:"تحدّث عن الطقس والفصول والمواعيد.",
    8:"تعلّم أسماء وسائل النقل والتخطيط للسفر.",
    9:"تعلّم مفردات سوق المستعمل وأنشطة نهاية الأسبوع.",
    10:"تحدّث عن السفر والعطلة والتجارب التي عشتها."
  };
  const savedCourse=getCourseProgress("A2",lesson.number);
  const savedCoursePercent=courseProgressPercent(savedCourse);
  const stages=[
    {id:"explanation",number:"1",title:"شرح الدرس",desc:`تعلّم أهم العبارات حول ${lesson.arabic} مع شرح وأمثلة واضحة.`,icon:"📖",tone:"blue",status:"ابدأ الآن",statusIcon:"▶"},
    {id:"vocabulary",number:"2",title:"المفردات المهمة",desc:"أهم الكلمات مع النطق والترجمة والأمثلة.",icon:"🏷️",tone:"green",status:"المفردات",statusIcon:"Aa"},
    {id:"practice",number:"3",title:"تمارين تطبيقية",desc:lesson.test?"حل الاختبار التفاعلي الخاص بهذا الدرس وتعرّف على نتيجتك.":"اختبر فهمك وطبّق ما تعلّمته في الدرس.",icon:"📝",tone:"amber",status:lesson.test?"ابدأ الاختبار":"تدرّب",statusIcon:"✓"},
    {id:"speaking",number:"4",title:"المحادثة العملية",desc:"تدرّب على الحوار باستعمال مفردات وتعبيرات هذا الدرس.",icon:"🤖",tone:"pink",status:"تحدّث",statusIcon:"💬"}
  ];
  const stageMarkup=stages.map((stage,index)=>`
    <button type="button" class="lesson-detail-stage lesson-detail-stage-${stage.tone} ${index===0?"is-primary":""}"
      data-action="a2-stage-open" data-stage="${stage.id}" aria-label="${escapeHtml(stage.title)}">
      <span class="lesson-detail-stage-icon" aria-hidden="true">${stage.icon}</span>
      <span class="lesson-detail-stage-copy">
        <strong>${stage.number}. ${stage.title}</strong>
        <small>${escapeHtml(stage.desc)}</small>
      </span>
      <span class="lesson-detail-stage-status"><i aria-hidden="true">${stage.statusIcon}</i>${stage.status}</span>
      <span class="lesson-detail-stage-arrow" aria-hidden="true">←</span>
    </button>`).join("");

  app.innerHTML=`<div class="student-app lesson-detail-app" dir="rtl">
    <main class="student-main lesson-detail-main">
      <section class="lesson-detail-page" aria-label="محتوى درس A2">
        <header class="lesson-detail-topbar">
          <button type="button" class="lesson-detail-back" data-action="close-a2-lesson" aria-label="رجوع">←</button>
          <button type="button" class="lesson-detail-podcast-mini" data-action="a2-stage-open" data-stage="speaking" aria-label="التدرب على النطق" title="التدرب على النطق">🎧</button>
          <div class="lesson-detail-level-label"><strong>A2</strong><span>مستوى</span></div>
        </header>
        <section class="lesson-detail-hero">
          <div class="lesson-detail-hero-copy">
            <span class="lesson-detail-hero-badge">A2.${lesson.number}</span>
            <h1>الدرس ${lesson.number}</h1>
            <h2>${escapeHtml(lesson.arabic)}</h2>
            <p dir="ltr">${escapeHtml(lesson.title)}</p>
            <small>${escapeHtml(descriptions[lesson.number]||"تعلّم أهم الكلمات والعبارات واستعملها في مواقف الحياة اليومية.")}</small>
          </div>
          <div class="lesson-detail-hero-art" aria-hidden="true">
            <span class="lesson-detail-art-spark">✦</span>
            <span class="lesson-detail-art-bubble">Hallo!</span>
            <span class="lesson-detail-art-topic">${lesson.icon}</span>
          </div>
        </section>
        <section class="lesson-detail-progress-card" aria-label="تقدمك في الدرس">
          <div class="lesson-detail-progress-ring"><strong>${savedCoursePercent}%</strong></div>
          <div class="lesson-detail-progress-copy">
            <strong>تقدمك في الدرس</strong>
            <small>${savedCourse?.completed?"تمّ إكمال الكورس ✓":savedCourse?.startedAt?"تقدمك محفوظ، تقدر تكمل منين وقفتي":"تقدّم الكورس كيتسجل تلقائياً"}</small>
            <div class="lesson-detail-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${savedCoursePercent}"><span style="width:${savedCoursePercent}%"></span></div>
          </div>
        </section>
        <div class="lesson-detail-content-heading"><h2>محتوى الدرس</h2><span aria-hidden="true">▱</span></div>
        <div class="lesson-detail-stage-list">${stageMarkup}</div>
        <div class="lesson-detail-footer">
          <button type="button" class="lesson-detail-start" data-action="a2-stage-open" data-stage="explanation">
            <span aria-hidden="true">▶</span><strong>${savedCourse?.startedAt&&!savedCourse?.completed?"متابعة الكورس":"ابدأ شرح الدرس"}</strong><i aria-hidden="true">←</i>
          </button>
        </div>
      </section>
    </main>
  </div>`;
}

function renderA2CourseContentPage(){
  const lesson = a2CourseLessons.find(item=>item.number===Number(currentA2LessonNo));
  if(!lesson){ page="a2-level-home"; return render(); }
  document.documentElement.classList.add("challenge-fullscreen-open");
  document.body.classList.add("challenge-fullscreen-open");
  app.innerHTML = `<div class="challenge-fullscreen-shell lesson-section-fullscreen-shell">
    <iframe id="a2LessonPageFrame" title="A2 – Lektion ${lesson.number} – ${escapeHtml(lesson.title)}" loading="eager" allow="autoplay; fullscreen"></iframe>
  </div>`;
  const frame=document.getElementById("a2LessonPageFrame");
  if(frame){trackCourseIframe(frame,"A2",lesson.number);loadManagedPageIntoFrame(frame,lesson.path);}
}

function renderA2TestHtmlPage(){
  const lesson = a2CourseLessons.find(item=>item.number===Number(currentA2TestNo));
  if(!lesson || !lesson.test){ page="a2-level-home"; return render(); }
  document.documentElement.classList.add("challenge-fullscreen-open");
  document.body.classList.add("challenge-fullscreen-open");
  app.innerHTML = `<div class="challenge-fullscreen-shell lesson-section-fullscreen-shell">
    <button type="button" class="challenge-fullscreen-exit" data-action="close-a2-test">← رجوع إلى دروس A2</button>
    <iframe id="a2TestPageFrame" title="A2 – Lektion ${lesson.number} – Test" loading="eager" allow="autoplay; fullscreen"></iframe>
  </div>`;
  const frame = document.getElementById("a2TestPageFrame");
  if(frame) loadManagedPageIntoFrame(frame, lesson.test);
}

const tutorLessonProfiles = [
  {
    title:"Hallo & Herkunft", label:"التعارف وتقديم النفس", goal:"قدّم اسمك وبلدك واللغات التي تتحدثها.",
    greeting:"Guten Tag! Wie heißen Sie und woher kommen Sie?",
    translation:"نهارك سعيد! ما اسمك ومن أين أنت؟",
    questions:["Wie heißen Sie?","Woher kommen Sie?","Welche Sprachen sprechen Sie?"],
    sample:"Ich heiße Sara. Ich komme aus Marokko. Ich spreche Arabisch und Deutsch.",
    keywords:["heiße","heisse","komme","marokko","spreche","sprache","wohne"],
    vocab:["heißen","kommen","sprechen","das Land","die Sprache"]
  },
  {
    title:"Familie", label:"العائلة والأسرة", goal:"تحدّث عن أفراد عائلتك واستعمل mein / meine.",
    greeting:"Erzählen Sie mir bitte von Ihrer Familie. Haben Sie Geschwister?",
    translation:"احكِ لي من فضلك عن عائلتك. هل لديك إخوة أو أخوات؟",
    questions:["Wie groß ist Ihre Familie?","Haben Sie Geschwister?","Wie heißt Ihre Mutter?"],
    sample:"Meine Familie ist groß. Ich habe einen Bruder und eine Schwester.",
    keywords:["familie","mutter","vater","bruder","schwester","geschwister","eltern"],
    vocab:["die Familie","die Mutter","der Vater","der Bruder","die Schwester"]
  },
  {
    title:"Wohnen", label:"السكن والمنزل", goal:"صف منزلك والغرف والأثاث.",
    greeting:"Wie wohnen Sie? Haben Sie eine Wohnung oder ein Haus?",
    translation:"كيف تسكن؟ هل عندك شقة أم منزل؟",
    questions:["Wie viele Zimmer hat Ihre Wohnung?","Was gibt es in Ihrem Wohnzimmer?","Wo ist die Küche?"],
    sample:"Ich wohne in einer Wohnung. Sie hat drei Zimmer und eine Küche.",
    keywords:["wohne","wohnung","haus","zimmer","küche","kuche","wohnzimmer","schlafzimmer"],
    vocab:["die Wohnung","das Haus","das Zimmer","die Küche","das Wohnzimmer"]
  },
  {
    title:"Essen und Trinken", label:"الأكل والشرب", goal:"اطلب الطعام والشراب وعبّر عمّا تحب.",
    greeting:"Guten Tag! Was möchten Sie essen und trinken?",
    translation:"نهارك سعيد! ماذا تريد أن تأكل وتشرب؟",
    questions:["Was essen Sie gern?","Was möchten Sie trinken?","Möchten Sie noch etwas?"],
    sample:"Ich möchte einen Kaffee und ein Stück Kuchen, bitte.",
    keywords:["esse","essen","trinke","trinken","kaffee","tee","wasser","brot","möchte","mag"],
    vocab:["essen","trinken","der Kaffee","das Wasser","das Brot"]
  },
  {
    title:"Mein Alltag", label:"الروتين اليومي", goal:"صف يومك واستعمل أوقات اليوم والأفعال اليومية.",
    greeting:"Wann stehen Sie normalerweise auf? Wie beginnt Ihr Tag?",
    translation:"متى تستيقظ عادةً؟ كيف يبدأ يومك؟",
    questions:["Wann stehen Sie auf?","Was machen Sie am Morgen?","Wann gehen Sie schlafen?"],
    sample:"Ich stehe um sieben Uhr auf. Dann frühstücke ich und gehe zur Arbeit.",
    keywords:["stehe","auf","morgen","frühstücke","fruhstucke","arbeite","gehe","schlafe","abend"],
    vocab:["aufstehen","frühstücken","arbeiten","schlafen","der Morgen"]
  },
  {
    title:"Freizeit & Hobbys", label:"وقت الفراغ والهوايات", goal:"تحدّث عن هواياتك وما تحب فعله.",
    greeting:"Was machen Sie gern in Ihrer Freizeit?",
    translation:"ماذا تحب أن تفعل في وقت فراغك؟",
    questions:["Was ist Ihr Hobby?","Treiben Sie gern Sport?","Was machen Sie am Wochenende?"],
    sample:"In meiner Freizeit höre ich Musik und spiele Fußball.",
    keywords:["freizeit","hobby","spiele","sport","musik","lese","schwimme","wochenende","gern"],
    vocab:["die Freizeit","das Hobby","spielen","lesen","Musik"]
  },
  {
    title:"Einkaufen", label:"التسوّق والشراء", goal:"اسأل عن الثمن والقياس واطلب ما تحتاجه.",
    greeting:"Guten Tag! Was möchten Sie heute kaufen?",
    translation:"نهارك سعيد! ماذا تريد أن تشتري اليوم؟",
    questions:["Was suchen Sie?","Welche Größe brauchen Sie?","Möchten Sie bar oder mit Karte bezahlen?"],
    sample:"Ich möchte eine Jacke kaufen. Wie viel kostet sie?",
    keywords:["kaufe","kaufen","suche","größe","grosse","kostet","preis","bezahlen","karte"],
    vocab:["kaufen","der Preis","die Größe","bezahlen","das Geschäft"]
  },
  {
    title:"Arbeit & Beruf", label:"العمل والمهنة", goal:"تحدّث عن مهنتك ومكان عملك.",
    greeting:"Was sind Sie von Beruf? Wo arbeiten Sie?",
    translation:"ما مهنتك؟ وأين تعمل؟",
    questions:["Was machen Sie beruflich?","Wo arbeiten Sie?","Gefällt Ihnen Ihre Arbeit?"],
    sample:"Ich arbeite als Lehrer. Ich arbeite in einer Schule.",
    keywords:["arbeit","arbeite","beruf","firma","kollege","lehrer","ärztin","arzt","büro"],
    vocab:["der Beruf","die Firma","arbeiten","der Kollege","das Büro"]
  },
  {
    title:"Stadt & Verkehr", label:"المدينة والمواصلات", goal:"اسأل عن الطريق وتحدّث عن وسائل النقل.",
    greeting:"Wie kommen Sie heute zur Arbeit oder zum Bahnhof?",
    translation:"كيف تذهب اليوم إلى العمل أو محطة القطار؟",
    questions:["Fahren Sie mit dem Bus oder mit dem Zug?","Wo ist der Bahnhof?","Wie komme ich ins Zentrum?"],
    sample:"Ich fahre mit dem Bus zum Bahnhof. Dann gehe ich zu Fuß.",
    keywords:["fahre","fahren","bus","zug","bahnhof","straße","strasse","links","rechts","zentrum"],
    vocab:["der Bus","der Zug","der Bahnhof","die Straße","fahren"]
  },
  {
    title:"Gesundheit & Termine", label:"الصحة والمواعيد", goal:"صف حالتك الصحية واحجز موعداً عند الطبيب.",
    greeting:"Guten Tag! Was fehlt Ihnen? Haben Sie Schmerzen?",
    translation:"نهارك سعيد! ما الذي يؤلمك؟ هل تشعر بألم؟",
    questions:["Wie fühlen Sie sich?","Seit wann haben Sie Schmerzen?","Wann ist Ihr Termin beim Arzt?"],
    sample:"Ich habe Kopfschmerzen. Ich möchte einen Termin beim Arzt.",
    keywords:["krank","gesund","schmerzen","kopfschmerzen","arzt","termin","weh","fühle","fuhle"],
    vocab:["der Arzt","der Termin","krank","gesund","die Schmerzen"]
  }
];

const tutorToolProfiles = [
  {id:"conversation",icon:"💬",title:"محادثات جاهزة",sub:"حوار خاص بالدرس"},
  {id:"sentence",icon:"▤",title:"قل جملة",sub:"كوّن جملة صحيحة"},
  {id:"repeat",icon:"🎧",title:"كرر بعدي",sub:"استمع وكرّر"},
  {id:"callcenter",icon:"🎧",title:"الكول سنتر",sub:"سؤال وجواب"},
  {id:"work",icon:"🧰",title:"مواقف العمل",sub:"لغة مهنية بسيطة"},
  {id:"daily",icon:"🩺",title:"مواقف يومية",sub:"تواصل في الحياة"},
  {id:"describe",icon:"🖼️",title:"وصف الأشياء",sub:"صف شيئاً من الدرس"},
  {id:"people",icon:"👥",title:"تحدث مع الناس",sub:"تعارف ونقاش"},
  {id:"interview",icon:"💼",title:"مقابلة عمل",sub:"تدرّب على الأسئلة"},
  {id:"review",icon:"🧠",title:"مراجعة الجمل",sub:"راجع وصحّح"},
  {id:"writing",icon:"✍️",title:"الكتابة",sub:"اكتب جمل قصيرة"},
  {id:"grammar",icon:"A↗",title:"قواعد بالكلام",sub:"طبّق القاعدة شفوياً"},
  {id:"complete",icon:"⭐",title:"محادثة كاملة",sub:"حوار من البداية للنهاية"},
  {id:"vocabulary",icon:"🔧",title:"مفردات الدرس",sub:"استعمل كلمات جديدة"},
  {id:"challenge",icon:"🏅",title:"تحدّي اليوم",sub:"اختبر سرعة إجابتك"}
];

function getTutorLessonIndex(){
  const value = Number(tutorLessonIndex);
  return Number.isInteger(value) ? Math.max(0,Math.min(lessons.length-1,value)) : Math.max(0,Math.min(lessons.length-1,currentLesson||0));
}
function getTutorProfile(){
  return tutorLessonProfiles[getTutorLessonIndex()] || tutorLessonProfiles[0];
}
function getTutorTool(){
  return tutorToolProfiles.find(item=>item.id===tutorTool) || tutorToolProfiles[0];
}
function tutorStorageKey(){
  return `deutsch_a1_tutor_v2_${currentUser?.id||"guest"}_lesson${getTutorLessonIndex()}_${tutorTool}`;
}
function tutorStartMessage(){
  const profile = getTutorProfile();
  const prompts = {
    conversation:profile.greeting,
    sentence:`Bilden Sie bitte einen Satz zum Thema „${profile.title}“.`,
    repeat:`Hören Sie zu und sprechen Sie nach: „${profile.sample}“`,
    callcenter:"Guten Tag! Wie kann ich Ihnen helfen?",
    work:profile.questions[1] || profile.greeting,
    daily:profile.greeting,
    describe:`Beschreiben Sie bitte etwas zum Thema „${profile.title}“.`,
    people:profile.greeting,
    interview:"Erzählen Sie bitte kurz etwas über sich.",
    review:`Schreiben Sie einen Satz zum Thema „${profile.title}“. Ich korrigiere ihn.`,
    writing:`Schreiben Sie bitte zwei kurze Sätze über „${profile.title}“.`,
    grammar:`Bilden Sie einen Satz mit den Wörtern aus „${profile.title}“.`,
    complete:profile.greeting,
    vocabulary:`Kennen Sie diese Wörter: ${profile.vocab.slice(0,3).join(", ")}?`,
    challenge:profile.questions[0] || profile.greeting
  };
  const translations = {
    conversation:profile.translation,
    sentence:"كوّن جملة بالألمانية حول موضوع الدرس.",
    repeat:"استمع إلى الجملة ثم حاول تكرارها بصوتك.",
    callcenter:"مرحباً! كيف يمكنني مساعدتك؟",
    work:"أجب عن سؤال مرتبط بموضوع الدرس والعمل.",
    daily:profile.translation,
    describe:"صف شيئاً مرتبطاً بموضوع الدرس بجملة أو جملتين.",
    people:profile.translation,
    interview:"قدّم نفسك في جمل قصيرة بالألمانية.",
    review:"اكتب جملة وسأساعدك على تصحيحها.",
    writing:"اكتب جملتين قصيرتين بالألمانية حول موضوع الدرس.",
    grammar:"استعمل كلمات الدرس في جملة صحيحة.",
    complete:profile.translation,
    vocabulary:"حاول استعمال المفردات الألمانية في جملة.",
    challenge:"أجب بسرعة وبجملة كاملة."
  };
  return {role:"assistant",text:prompts[tutorTool]||profile.greeting,translation:translations[tutorTool]||profile.translation};
}
function loadTutorMessages(){
  try{
    const saved = JSON.parse(localStorage.getItem(tutorStorageKey())||"null");
    if(Array.isArray(saved) && saved.length) return saved;
  }catch(error){}
  return [tutorStartMessage()];
}
function saveTutorMessages(){
  try{localStorage.setItem(tutorStorageKey(),JSON.stringify(tutorMessages));}catch(error){}
}
function tutorCorrection(value){
  const corrections = [
    {pattern:/\bich bin wohnen\b/i,correct:"Ich wohne.",note:"مع الفعل wohnen نقول Ich wohne، ولا نحتاج إلى bin."},
    {pattern:/\bich haben\b/i,correct:"Ich habe.",note:"مع الضمير ich نصرف haben إلى habe."},
    {pattern:/\bich gehen\b/i,correct:"Ich gehe.",note:"مع ich نقول gehe، لأن الفعل يتغير حسب الضمير."},
    {pattern:/\bich machen\b/i,correct:"Ich mache.",note:"مع ich نقول mache."},
    {pattern:/\bich essen\b/i,correct:"Ich esse.",note:"الفعل essen مع ich يصبح esse."},
    {pattern:/\bich trinken\b/i,correct:"Ich trinke.",note:"الفعل trinken مع ich يصبح trinke."},
    {pattern:/\bich fahren\b/i,correct:"Ich fahre.",note:"الفعل fahren مع ich يصبح fahre."},
    {pattern:/\bich komme\s+(marokko|deutschland|spanien|frankreich)\b/i,correct:null,note:"مع البلدان نقول: Ich komme aus Marokko. نحتاج إلى aus."},
    {pattern:/\bein kaffee\b/i,correct:"einen Kaffee",note:"Kaffee مذكّر، وبعد möchten نستخدم Akkusativ: einen Kaffee."}
  ];
  const match = corrections.find(item=>item.pattern.test(value));
  if(!match) return null;
  if(match.correct) {
    const fixed = value.replace(match.pattern,match.correct);
    return {text:`Fast richtig! Besser: „${fixed}“`,translation:`تصحيح صغير: ${match.note}`};
  }
  const countryMatch = value.match(/\bich komme\s+(marokko|deutschland|spanien|frankreich)\b/i);
  const country = countryMatch ? countryMatch[1].charAt(0).toUpperCase()+countryMatch[1].slice(1).toLowerCase() : "Marokko";
  return {text:`Fast richtig! Sagen Sie: „Ich komme aus ${country}.“`,translation:`تصحيح صغير: ${match.note}`};
}
function tutorReplyFor(text){
  const value = String(text||"").trim();
  const profile = getTutorProfile();
  const correction = tutorCorrection(value);
  if(correction) return correction;
  const words = value.split(/\s+/).filter(Boolean);
  if(words.length < 2){
    return {text:`Bitte antworten Sie mit einem ganzen Satz. Zum Beispiel: „${profile.sample}“`,translation:"حاول تجاوب بجملة كاملة، واستعمل المثال باش تعاونك."};
  }
  if(tutorTool==="repeat"){
    return {text:"Sehr gut! Noch einmal, bitte – langsam und deutlich.",translation:"ممتاز! عاود الجملة مرة أخرى بشوية وبنطق واضح."};
  }
  if(tutorTool==="vocabulary"){
    return {text:`Sehr gut! Versuchen Sie jetzt, „${profile.vocab[0]}“ in einem eigenen Satz zu benutzen.`,translation:`مزيان! دابا استعمل الكلمة ${profile.vocab[0]} في جملة من عندك.`};
  }
  if(tutorTool==="grammar"){
    return {text:"Gut gemacht! Denken Sie an die Satzstellung: Subjekt + Verb + Ergänzung.",translation:"تذكّر ترتيب الجملة الألمانية: الفاعل + الفعل في المرتبة الثانية + تكملة الجملة."};
  }
  if(tutorTool==="review" || tutorTool==="writing"){
    return {text:"Danke! Ihr Satz ist angekommen. Achten Sie auf Großschreibung der Nomen und die Position des Verbs.",translation:"شكراً! راجع كتابة الأسماء بحرف كبير ومكان الفعل في الجملة. هذا تصحيح تدريبي محلي وليس تحليلاً لغوياً شاملاً."};
  }
  const hasTopicWord = profile.keywords.some(word=>value.toLowerCase().includes(word.toLowerCase()));
  const userCount = tutorMessages.filter(message=>message.role==="user").length;
  const nextQuestion = profile.questions[Math.min(userCount,profile.questions.length-1)] || profile.questions[0];
  if(hasTopicWord || /\bich\b|\bmein\b|\bmeine\b/i.test(value)){
    return {text:`Sehr gut! Das ist ein guter Satz. ${nextQuestion}`,translation:"ممتاز! الجملة ديالك مناسبة لموضوع الدرس. نكملو بالسؤال التالي."};
  }
  return {text:`Gut versucht! Sie können sagen: „${profile.sample}“ ${nextQuestion}`,translation:`محاولة جيدة. استعمل الكلمات المرتبطة بموضوع ${profile.label}، وحاول تجاوب بجملة كاملة.`};
}
function renderTalk(){
  tutorLessonIndex = getTutorLessonIndex();
  const profile = getTutorProfile();
  if(!tutorMessages.length) tutorMessages = loadTutorMessages();
  // The robot conversation is now the default and only main Talk screen.
  // The former training-tools grid is intentionally removed from this flow.
  tutorTool = "conversation";
  tutorToolOpen = true;
  const level = tutorLessonIndex < 5 ? "A1.1" : "A1.2";
  const activeTool = getTutorTool();

  const lessonChoices = lessons.map((lesson,index)=>`
    <button type="button" class="tutor-lesson-chip ${index===tutorLessonIndex?"active":""}" data-action="tutor-lesson" data-lesson="${index}">
      <span>L${index+1}</span><small>${escapeHtml(lesson.name)}</small>
    </button>`).join("");

  const tools = tutorToolProfiles.map(tool=>`
    <button type="button" class="tutor-tool-card" data-action="tutor-tool" data-tool="${tool.id}">
      <span class="tutor-tool-icon">${tool.icon}</span><strong>${tool.title}</strong><small>${tool.sub}</small>
    </button>`).join("");

  const messages = tutorMessages.map(message=>`
    <div class="tutor-message ${message.role==="user"?"from-user":"from-teacher"}">
      <div class="tutor-bubble" dir="ltr">${escapeHtml(message.text)}</div>
      ${message.translation?`<p class="tutor-translation">${escapeHtml(message.translation)}</p>`:""}
      ${message.role==="assistant"?`<button type="button" class="tutor-replay" data-action="tutor-speak" data-text="${escapeHtml(message.text)}">🔊 إعادة الاستماع</button>`:""}
    </div>`).join("");

  const prompts = profile.questions.map(question=>
    `<button type="button" class="tutor-prompt-chip" data-action="tutor-prompt" data-prompt="${escapeHtml(question)}">${escapeHtml(question)}</button>`
  ).join("");

  // Lesson-specific conversation screen. It is used for the speaking section
  // inside every lesson and for the conversation tool in the tutor area.
  if(tutorTool==="conversation"){
    const sampleSentences = (String(profile.sample||"").match(/[^.!?]+[.!?]?/g)||[profile.sample||""]).map(item=>item.trim()).filter(Boolean).slice(0,2);
    const examples = sampleSentences.map(sentence=>`
      <div class="tutor-conversation-example">
        <button type="button" class="tutor-conversation-example-audio" data-action="tutor-speak" data-text="${escapeHtml(sentence)}" aria-label="استمع إلى الجملة"> 
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10v4h4l5 4V6l-5 4H4Z"/><path d="M16 9a5 5 0 0 1 0 6M18.5 6.5a8.5 8.5 0 0 1 0 11"/></svg>
        </button>
        <button type="button" class="tutor-conversation-example-text" data-action="tutor-prompt" data-prompt="${escapeHtml(sentence)}" dir="ltr">${escapeHtml(sentence)}</button>
        <span class="tutor-conversation-example-arrow" aria-hidden="true">›</span>
      </div>`).join("");

    const historyItems = tutorMessages
      .filter((message,index)=>!(index===0 && message.role==="assistant"))
      .slice(-8)
      .map(message=>`
        <article class="tutor-conversation-history-item ${message.role==="user"?"is-user":"is-teacher"}">
          <div class="tutor-conversation-history-bubble" dir="ltr">${escapeHtml(message.text)}</div>
          ${message.translation?`<p>${escapeHtml(message.translation)}</p>`:""}
          ${message.role==="assistant"?`<button type="button" data-action="tutor-speak" data-text="${escapeHtml(message.text)}" aria-label="إعادة الاستماع">🔊</button>`:""}
        </article>`).join("");

    const customMaterials = renderCustomContentFeatureCards("speaking",tutorLessonIndex+1,"مواد إضافية للمحادثة");
    const greetingText = profile.greeting || "Hallo! Wie geht es Ihnen?";
    const greetingTranslation = profile.translation || "مرحباً! كيف حالك؟";
    const fullscreenContent = `
      <main class="tutor-conversation-screen" dir="rtl">
        <section class="tutor-conversation-panel">
          <header class="tutor-conversation-header">
            <button type="button" class="tutor-conversation-back" data-action="back" aria-label="رجوع للدرس">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <div class="tutor-conversation-heading">
              <strong>المحادثة العملية</strong>
              <small>${escapeHtml(profile.title)} · Lektion ${tutorLessonIndex+1} · ${level}</small>
            </div>
            <span class="tutor-conversation-level">${level}</span>
          </header>

          <section class="tutor-conversation-lesson-filter ${tutorLessonFilterOpen?"is-open":"is-collapsed"}" aria-label="فلتر الدروس">
            <button type="button" class="tutor-conversation-lesson-filter-toggle" data-action="tutor-toggle-lesson-filter" aria-expanded="${tutorLessonFilterOpen?"true":"false"}">
              <div class="tutor-conversation-lesson-filter-heading">
                <strong>اختار الدرس</strong>
                <small>Lektion ${tutorLessonIndex+1} · ${escapeHtml(lessons[tutorLessonIndex].name)}</small>
              </div>
              <span class="tutor-conversation-filter-caret" aria-hidden="true">${tutorLessonFilterOpen?"▲":"▼"}</span>
            </button>
            <div class="tutor-conversation-lesson-filter-strip-wrap ${tutorLessonFilterOpen?"is-open":""}">
              <div class="tutor-conversation-lesson-filter-strip">${lessonChoices}</div>
            </div>
          </section>

          <section class="tutor-conversation-robot-stage" aria-label="المعلّم الذكي">
            <div class="tutor-conversation-spark tutor-conversation-spark-one">✦</div>
            <div class="tutor-conversation-spark tutor-conversation-spark-two">✧</div>
            <svg class="tutor-conversation-robot" viewBox="0 0 280 190" role="img" aria-label="روبوت المعلّم الذكي">
              <defs>
                <linearGradient id="tutorRobotHead" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#c9e4ff"/></linearGradient>
                <linearGradient id="tutorRobotBody" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a8e7ff"/><stop offset="1" stop-color="#3287e8"/></linearGradient>
                <linearGradient id="tutorRobotBlue" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4eaaff"/><stop offset="1" stop-color="#244bd5"/></linearGradient>
                <filter id="tutorRobotShadow" x="-30%" y="-30%" width="160%" height="170%"><feGaussianBlur stdDeviation="5"/></filter>
              </defs>
              <ellipse cx="140" cy="174" rx="51" ry="8" fill="#8ab9f0" opacity=".22" filter="url(#tutorRobotShadow)"/>
              <g fill="none" stroke="#76baff" stroke-linecap="round" stroke-width="3" opacity=".85">
                <path d="M18 96v18M27 88v34M36 78v54M45 91v28M54 99v12"/>
                <path d="M226 99v12M235 91v28M244 78v54M253 88v34M262 96v18"/>
                <path d="M8 105h7M265 105h7"/>
              </g>
              <path d="M140 17V7" stroke="#4c8fe9" stroke-width="4" stroke-linecap="round"/>
              <circle cx="140" cy="6" r="6" fill="#ffcf58" stroke="#fff" stroke-width="2"/>
              <path d="M106 57c0-22 15-37 34-37s34 15 34 37" fill="none" stroke="#78b9ff" stroke-width="7" stroke-linecap="round"/>
              <rect x="83" y="62" width="18" height="45" rx="9" fill="url(#tutorRobotBlue)"/>
              <rect x="179" y="62" width="18" height="45" rx="9" fill="url(#tutorRobotBlue)"/>
              <rect x="99" y="35" width="82" height="79" rx="27" fill="url(#tutorRobotHead)" stroke="#a9d7ff" stroke-width="3"/>
              <rect x="108" y="49" width="64" height="48" rx="17" fill="#183c83"/>
              <circle cx="127" cy="70" r="4.5" fill="#fff"/>
              <circle cx="153" cy="70" r="4.5" fill="#fff"/>
              <path d="M129 83q11 9 22 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
              <path d="M108 111q-10 12-7 27l13 17h52l13-17q3-15-7-27" fill="url(#tutorRobotBody)" stroke="#80caff" stroke-width="2"/>
              <path d="M119 117q21 13 42 0" fill="none" stroke="#fff" stroke-width="3" opacity=".75"/>
              <rect x="128" y="132" width="24" height="12" rx="6" fill="#1c68c9" opacity=".75"/>
              <circle cx="140" cy="138" r="3" fill="#fff"/>
              <path d="M108 125l-16 20M172 125l16 20" stroke="#3c83dc" stroke-width="9" stroke-linecap="round"/>
              <circle cx="91" cy="147" r="7" fill="#8bd5ff"/>
              <circle cx="189" cy="147" r="7" fill="#8bd5ff"/>
              <path d="M121 153l-8 13M159 153l8 13" stroke="#3d7fd8" stroke-width="8" stroke-linecap="round"/>
              <path d="M115 167h-8M165 167h8" stroke="#4d9ce8" stroke-width="5" stroke-linecap="round"/>
              <circle cx="106" cy="52" r="4" fill="#fff" opacity=".8"/>
            </svg>
          </section>

          <section class="tutor-conversation-greeting">
            <span class="tutor-conversation-greeting-kicker">Hallo!</span>
            <strong dir="ltr">${escapeHtml(greetingText)}</strong>
            <p>${escapeHtml(greetingTranslation)}</p>
            <button type="button" class="tutor-conversation-greeting-audio" data-action="tutor-speak" data-text="${escapeHtml(greetingText)}" aria-label="استمع إلى سؤال المعلّم">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10v4h4l5 4V6l-5 4H4Z"/><path d="M16 9a5 5 0 0 1 0 6M18.5 6.5a8.5 8.5 0 0 1 0 11"/></svg>
            </button>
          </section>

          <section class="tutor-conversation-history ${historyItems?"has-messages":"is-empty"}" aria-label="نص المحادثة" aria-live="polite">
            <header class="tutor-conversation-history-heading">
              <strong>نص المحادثة</strong>
              <small>الكلام اللي كتقولو غادي يبان هنا</small>
            </header>
            <div class="tutor-conversation-history-content" id="tutorConversationHistoryContent">
              ${historyItems || `<div class="tutor-conversation-empty"><span>🎙️</span><p>هضر بالألمانية، والكلام ديالك غادي يبان هنا.</p></div>`}
            </div>
            <div class="tutor-conversation-live" id="tutorLiveTranscript" aria-live="polite">جاهز للاستماع…</div>
          </section>

          <section class="tutor-conversation-examples ${tutorExamplesOpen?"is-open":"is-collapsed"}">
            <button type="button" class="tutor-conversation-examples-toggle" data-action="tutor-toggle-examples" aria-expanded="${tutorExamplesOpen?"true":"false"}">
              <h3><span>💡</span> Beispiel · جمل تساعدك في الرد</h3>
              <span class="tutor-conversation-filter-caret" aria-hidden="true">${tutorExamplesOpen?"▲":"▼"}</span>
            </button>
            <div class="tutor-conversation-example-list-wrap ${tutorExamplesOpen?"is-open":""}">
              <div class="tutor-conversation-example-list">${examples}</div>
            </div>
          </section>

          ${customMaterials?`<section class="tutor-conversation-extra">${customMaterials}</section>`:""}

          <section class="tutor-conversation-bottom-bar" aria-label="أدوات المحادثة">
            <div class="tutor-conversation-controls">
              <button type="button" class="tutor-conversation-side-control" data-action="tutor-keyboard-toggle" aria-label="فتح لوحة الكتابة" aria-pressed="${tutorKeyboardOpen?"true":"false"}">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M6 9h1M10 9h1M14 9h1M18 9h.5M6 12h1M10 12h1M14 12h1M18 12h.5M8 15h8"/></svg>
              </button>
              <button type="button" class="tutor-conversation-mic" data-action="tutor-voice" aria-label="تحدث الآن">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="2.5" width="6" height="12" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3.5M8.5 21.5h7"/></svg>
              </button>
              <button type="button" class="tutor-conversation-side-control" data-action="tutor-speak" data-text="${escapeHtml(greetingText)}" aria-label="استمع إلى المعلّم">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 4V5L7 9H3Z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/></svg>
              </button>
            </div>
            <p class="tutor-conversation-hint">${tutorKeyboardOpen?"اكتب جوابك بالألمانية":"اضغط وتحدث الآن"}</p>
            <form id="tutorForm" class="tutor-conversation-composer ${tutorKeyboardOpen?"is-open":""}">
              <input id="tutorInput" type="text" autocomplete="off" placeholder="اكتب جوابك بالألمانية..." aria-label="جوابك بالألمانية">
              <button type="submit" aria-label="إرسال الجواب">إرسال <span>←</span></button>
            </form>
          </section>
        </section>
      </main>
    `;
    app.innerHTML = fullscreenContent;
    return;
  }

  if(tutorToolOpen){
    const fullscreenContent = `
      <main class="tutor-fullscreen-tool" dir="rtl">
        <header class="tutor-fullscreen-header">
          <button type="button" class="tutor-fullscreen-back" data-action="tutor-tools-back">
            <span aria-hidden="true">→</span> رجوع للتداريب
          </button>
          <div class="tutor-fullscreen-title">
            <span class="tutor-fullscreen-tool-icon">${activeTool.icon}</span>
            <div>
              <strong>${escapeHtml(activeTool.title)}</strong>
              <small>${escapeHtml(profile.title)} · ${level} · Lektion ${tutorLessonIndex+1}</small>
            </div>
          </div>
          <button type="button" class="tutor-fullscreen-reset" data-action="tutor-reset" title="إعادة التدريب">إعادة</button>
        </header>

        <section class="tutor-fullscreen-chat">
          <div class="tutor-fullscreen-status">
            <span class="online-dot"></span>
            <div><strong>المدرّب جاهز</strong><small>${escapeHtml(activeTool.sub)}</small></div>
          </div>
          <div class="tutor-messages tutor-fullscreen-messages" id="tutorMessages">${messages}</div>
          <div class="tutor-prompt-row tutor-fullscreen-prompts">${prompts}</div>
          <form id="tutorForm" class="tutor-composer tutor-fullscreen-composer">
            <input id="tutorInput" type="text" autocomplete="off" placeholder="اكتب جوابك بالألمانية..." aria-label="رسالتك بالألمانية">
            <button type="submit" class="tutor-send-btn">إرسال ←</button>
          </form>
        </section>
      </main>
    `;
    app.innerHTML = fullscreenContent;
    return;
  }

  const speakingMaterials = renderCustomContentFeatureCards("speaking", tutorLessonIndex+1, "مواد إضافية للمحادثة");
  const talkBack = talkReturnPage === "lesson-hub"
    ? `<div class="student-page-back-row"><button type="button" class="student-page-back" data-action="back"><span aria-hidden="true">→</span><span>رجوع للدرس ${talkReturnLesson+1}</span></button></div>`
    : "";
  const content = `
    ${talkBack}
    <section class="tutor-lesson-picker tutor-lesson-picker-standalone">
      <div class="tutor-section-heading"><strong>اختار الدرس</strong><small>المحادثة كتتبدّل حسب الدرس</small></div>
      <div class="tutor-lesson-strip">${lessonChoices}</div>
    </section>
    <section class="tutor-tools-section">
      <div class="tutor-section-heading"><strong>اختار طريقة التدريب</strong><small>15 تدريباً مرتبطاً بموضوع الدرس</small></div>
      <div class="tutor-tools-grid">${tools}</div>
    </section>
    ${speakingMaterials}
  `;
  app.innerHTML = studentLayout(content,"talk");
}
function sendTutorMessage(event){
  if(event) event.preventDefault();
  const input = document.getElementById("tutorInput");
  const text = input ? input.value.trim() : "";
  if(!text) return;
  if(!tutorMessages.length) tutorMessages = loadTutorMessages();
  tutorMessages.push({role:"user",text});
  tutorMessages.push({role:"assistant",...tutorReplyFor(text)});
  saveTutorMessages();
  if(tutorTool==="conversation" && !tutorVoiceCapture) tutorKeyboardOpen=true;
  renderTalk();
  const messagesNode = document.getElementById("tutorConversationHistoryContent") || document.getElementById("tutorMessages") || document.querySelector(".tutor-conversation-history");
  if(messagesNode) messagesNode.scrollTop = messagesNode.scrollHeight;
}
function updateTutorVoiceUI(active, remainingMs=180000){
  const mic=document.querySelector('.tutor-conversation-mic');
  const hint=document.querySelector('.tutor-conversation-hint');
  if(mic){
    mic.classList.toggle('is-recording',!!active);
    mic.setAttribute('aria-pressed',active?'true':'false');
    mic.setAttribute('aria-label',active?'إيقاف وإرسال الكلام':'تحدث الآن');
    mic.title=active?'اضغط لإيقاف الاستماع وإرسال الكلام':'تحدث الآن لمدة تصل إلى 3 دقائق';
  }
  if(hint){
    hint.classList.toggle('is-recording',!!active);
    if(active){
      const seconds=Math.max(0,Math.ceil(remainingMs/1000));
      const minutes=String(Math.floor(seconds/60)).padStart(2,'0');
      const rest=String(seconds%60).padStart(2,'0');
      hint.textContent=`كنسمع ليك… ${minutes}:${rest} · اضغط لإيقاف وإرسال`;
    }else{
      hint.textContent='اضغط وتحدث الآن';
    }
  }
}
function updateTutorLiveTranscript(session){
  const liveNode=document.getElementById('tutorLiveTranscript');
  if(!liveNode) return;
  const visible=[...session.finalSegments,session.currentFinal,session.currentInterim]
    .filter(Boolean).join(' ').replace(/\s+/g,' ').trim();
  liveNode.textContent=visible || 'كنسمع ليك…';
  liveNode.classList.add('is-listening');
}
function finalizeTutorVoiceSession(session){
  if(!session || session.completed || tutorVoiceSession!==session) return;
  session.completed=true;
  clearTimeout(session.limitTimer);
  clearTimeout(session.restartTimer);
  clearTimeout(session.stopFallbackTimer);
  clearInterval(session.countdownTimer);
  const transcript=[...session.finalSegments,session.currentFinal,session.currentInterim]
    .filter(Boolean).join(' ').replace(/\s+/g,' ').trim();
  tutorVoiceSession=null;
  tutorVoiceCapture=false;
  updateTutorVoiceUI(false);
  const liveNode=document.getElementById('tutorLiveTranscript');
  if(transcript){
    const input=document.getElementById('tutorInput');
    if(input){
      input.value=transcript;
      tutorVoiceCapture=true;
      sendTutorMessage();
      tutorVoiceCapture=false;
    }else{
      if(!tutorMessages.length) tutorMessages=loadTutorMessages();
      tutorMessages.push({role:'user',text:transcript});
      tutorMessages.push({role:'assistant',...tutorReplyFor(transcript)});
      saveTutorMessages();
    }
    if(session.finishReason==='timeout') showToast('انتهت 3 دقائق، تم إرسال كلامك للمعلّم.');
    else if(session.finishReason==='manual') showToast('تم إرسال كلامك للمعلّم.');
    else if(session.error) showToast('تم إرسال الكلام الذي التقطه الميكروفون.');
  }else{
    if(liveNode){
      liveNode.textContent=session.error?'تعذّر التقاط الصوت. تحقق من صلاحية الميكروفون.':'ما سمعناش كلام واضح. حاول مرة أخرى.';
      liveNode.classList.remove('is-listening');
    }
    if(session.error==='not-allowed' || session.error==='service-not-allowed'){
      showToast('خاصك تسمح للموقع باستعمال الميكروفون.');
    }else if(session.error){
      showToast('تعذّر تشغيل الميكروفون. تأكد من الصلاحية وحاول مرة أخرى.');
    }else{
      showToast('ما تسجّل حتى كلام واضح. حاول مرة أخرى.');
    }
  }
}
function finishTutorVoiceSession(session,reason='manual'){
  if(!session || session.completed || session.finishing) return;
  session.finishing=true;
  session.finishReason=reason;
  clearTimeout(session.limitTimer);
  clearTimeout(session.restartTimer);
  clearInterval(session.countdownTimer);
  if(session.recognition && session.running){
    try{
      session.recognition.stop();
      session.stopFallbackTimer=setTimeout(()=>finalizeTutorVoiceSession(session),1400);
      return;
    }catch(error){
      session.running=false;
    }
  }
  finalizeTutorVoiceSession(session);
}
function startTutorVoice(){
  if(tutorVoiceSession && !tutorVoiceSession.completed){
    finishTutorVoiceSession(tutorVoiceSession,'manual');
    return;
  }
  const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SpeechRecognition){
    showToast('الإملاء الصوتي غير مدعوم في هذا المتصفح. استعمل Chrome أو Edge.');
    return;
  }

  const session={
    finalSegments:[],
    currentFinal:'',
    currentInterim:'',
    recognition:null,
    running:false,
    finishing:false,
    completed:false,
    deadline:Date.now()+180000,
    limitTimer:null,
    countdownTimer:null,
    restartTimer:null,
    stopFallbackTimer:null,
    startFailures:0,
    finishReason:'timeout',
    error:''
  };
  tutorVoiceSession=session;

  const startRecognitionRun=()=>{
    if(session.finishing || session.completed || tutorVoiceSession!==session) return;
    if(Date.now()>=session.deadline){
      finishTutorVoiceSession(session,'timeout');
      return;
    }
    const recognition=new SpeechRecognition();
    session.recognition=recognition;
    let runFinal='';
    let runInterim='';
    recognition.lang='de-DE';
    recognition.continuous=true;
    recognition.interimResults=true;
    recognition.maxAlternatives=1;
    recognition.onresult=event=>{
      const finalParts=[];
      const interimParts=[];
      for(let i=0;i<event.results.length;i++){
        const spoken=event.results[i][0]?.transcript || '';
        if(event.results[i].isFinal) finalParts.push(spoken);
        else interimParts.push(spoken);
      }
      runFinal=finalParts.join(' ').trim();
      runInterim=interimParts.join(' ').trim();
      session.currentFinal=runFinal;
      session.currentInterim=runInterim;
      updateTutorLiveTranscript(session);
    };
    recognition.onerror=event=>{
      const errorName=event?.error || 'recognition-error';
      if(errorName==='no-speech' || errorName==='aborted') return;
      session.error=errorName;
      finishTutorVoiceSession(session,'error');
    };
    recognition.onend=()=>{
      session.running=false;
      clearTimeout(session.stopFallbackTimer);
      if(runFinal) session.finalSegments.push(runFinal);
      else if(runInterim) session.finalSegments.push(runInterim);
      session.currentFinal='';
      session.currentInterim='';
      if(session.finishing || Date.now()>=session.deadline){
        if(!session.finishing) session.finishReason='timeout';
        session.finishing=true;
        finalizeTutorVoiceSession(session);
        return;
      }
      // Some browsers stop speech recognition after a pause. Restart it quietly
      // until the 3-minute limit, keeping all recognized segments together.
      session.restartTimer=setTimeout(startRecognitionRun,300);
    };
    try{
      recognition.start();
      session.running=true;
      session.startFailures=0;
    }catch(error){
      session.running=false;
      session.startFailures++;
      if(session.startFailures<=2 && Date.now()<session.deadline){
        session.restartTimer=setTimeout(startRecognitionRun,500);
      }else{
        session.error=error?.name || 'start-failed';
        finishTutorVoiceSession(session,'error');
      }
    }
  };

  const liveNode=document.getElementById('tutorLiveTranscript');
  if(liveNode){
    liveNode.textContent='كنسمع ليك… تكلم بالألمانية، عندك حتى 3 دقائق';
    liveNode.classList.add('is-listening');
  }
  updateTutorVoiceUI(true,180000);
  session.limitTimer=setTimeout(()=>finishTutorVoiceSession(session,'timeout'),180000);
  session.countdownTimer=setInterval(()=>{
    if(session.finishing || session.completed) return;
    const remaining=session.deadline-Date.now();
    updateTutorVoiceUI(true,remaining);
    if(remaining<=0) finishTutorVoiceSession(session,'timeout');
  },1000);
  startRecognitionRun();
  showToast('بدأ الاستماع بالألمانية. سيتوقف ويرسل الكلام بعد 3 دقائق، أو اضغط الميكروفون للإرسال قبل ذلك.');
}

/* =========================================================
   COMPETITION — live one-to-one and group challenges
   Questions are built from the same vocabulary data used by
   the existing lesson tests. Scores are validated by Cloud Functions.
   ========================================================= */
async function competitionCallable(name,payload){
  if(!firebaseReady || !firebaseAuth || !firebaseAuth.currentUser) {
    throw new Error("سجّل الدخول بحساب التلميذ باش تستعمل المنافسة.");
  }
  // Public configuration fallback: the app still connects if the hosting
  // service missed supabase-config.js during an update. Never place secret keys here.
  const cfg=window.DEUTSCH_A1_SUPABASE_CONFIG||{};
  const validUrl=String(cfg.url||"").trim().replace(/\/+$/,"");
  const validKey=String(cfg.anonKey||"").trim();
  const supabaseUrl=/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(validUrl)
    ? validUrl
    : "https://nqwaaapraiwbkagfssqo.supabase.co";
  const anonKey=validKey.startsWith("sb_publishable_")||validKey.startsWith("eyJ")
    ? validKey
    : "sb_publishable_4eqBTLOMzy-asbh4sUS6PQ_d1Z8ed9O";
  const idToken=await firebaseAuth.currentUser.getIdToken();
  // A stalled network request must not block room polling or starting a game forever.
  const controller=new AbortController();
  const timeout=setTimeout(()=>controller.abort(),name==="createCompetitionRoom"||name==="createSelfChallenge"?30000:18000);
  let response,responseText;
  try{
    response=await fetch(`${supabaseUrl}/functions/v1/competition`,{
      method:"POST",
      headers:{"Content-Type":"application/json","apikey":anonKey,"Authorization":`Bearer ${idToken}`},
      body:JSON.stringify({action:name,...(payload||{})}),
      signal:controller.signal
    });
    responseText=await response.text();
  }catch(networkError){
    if(networkError?.name==="AbortError"){
      throw new Error("الاتصال بخدمة المنافسة تأخر بزاف. جرّب إعادة المحاولة، وتأكد من Supabase.");
    }
    throw new Error("ما قدرناش نتصلو بخدمة Supabase. تأكد من الإنترنت ونشر Edge Function. (network)");
  }finally{clearTimeout(timeout);}
  let result={};
  try{result=JSON.parse(responseText||"{}");}catch(_error){}
  if(!response.ok||result.error){
    const source=result.error||result.message;
    const detail=typeof source==="string" ? source
      : source && typeof source==="object" ? (source.message||source.error_description||JSON.stringify(source))
      : `Supabase HTTP ${response.status}`;
    const error=new Error(String(detail));
    error.code=result.code||source?.code||`http_${response.status}`;
    error.status=response.status;
    throw error;
  }
  return {data:result.data??result};
}
// Use the UID of the user actually authenticated with Firebase. The cached
// currentUser profile may be out of sync when the auth session changes.
function competitionCreationMessageText(error){
  const msg=String(error?.message||"تعذر إنشاء الغرفة.");
  const status=Number(error?.status||0);
  if(/competition_self_challenges|competition_personal_records|42P01|does not exist/i.test(msg)){
    return "خاصك تشغّل ملف SQL ديال تحدّي النفس فـ Supabase SQL Editor قبل استعمال هاد الخاصية. "+msg;
  }
  if(status===401)return "خدمة المنافسة رفضت التحقق من الحساب (401). خاص مراجعة إعدادات Edge Function والتحقق من Firebase token. " + msg;
  if(status===403)return "ليس عند الحساب صلاحية إنشاء الغرفة (403). " + msg;
  if(status===404)return "خدمة competition غير موجودة على Supabase (404). خاص نشر Edge Function قبل إنشاء الغرف.";
  if(status>=500)return "خطأ في سيرفر المنافسة ("+status+"). " + msg;
  if(/failed to fetch|network|supabase|اتصال|internet|edge function/i.test(msg))return msg + " تأكد أن الموقع مفتوح عبر HTTPS، وأن خدمة competition منشورة على Supabase.";
  return msg;
}
function competitionCreateFeedback(message,isError=false){
  competitionCreateMessage=String(message||"");
  competitionCreateMessageIsError=!!isError;
  const box=document.getElementById("competitionCreationStatus");
  if(box){
    box.hidden=!competitionCreateMessage;
    box.textContent=competitionCreateMessage;
    box.style.color=isError?"#972c49":"#2052aa";
    box.style.background=isError?"#fff1f4":"#eaf2ff";
    box.style.borderColor=isError?"#f7b8c8":"#bccfff";
  }
}
function competitionCreateBusyUI(busy,action="competition-create"){
  const button=document.querySelector(`[data-action="${action}"]`);
  if(!button)return;
  button.disabled=busy;
  button.setAttribute("aria-busy",busy?"true":"false");
  button.textContent=busy
    ?(action==="competition-self-create"?"كنوجدّو تحدي نفسك…":"جاري الاتصال وإنشاء غرفة المنافسة…")
    :(action==="competition-self-create"?"ابدأ تحدّي نفسك":"🏆 إنشاء غرفة المنافسة");
}

function competitionAuthenticatedUid(){
  return firebaseAuth?.currentUser?.uid || currentUser?.id || "";
}
function competitionIsCreator(room){
  const uid=competitionAuthenticatedUid();
  // isCreator comes from an authenticated Supabase Edge Function response.
  return Boolean(room && (room.isCreator===true || (uid && room.createdBy===uid)));
}
function competitionMembers(){
  const members=competitionRoomData && competitionRoomData.members ? competitionRoomData.members : {};
  return Object.entries(members).map(([uid,member])=>({...member,uid}))
    .sort((a,b)=>(Number(b.score)||0)-(Number(a.score)||0));
}
function competitionLeaderboardMarkup(members){
  if(!members.length)return `<div class="competition-empty">مازال ما انضم حتى تلميذ.</div>`;
  return `<div class="competition-leaderboard">${members.map((member,index)=>`
    <div class="competition-rank-row ${member.uid===competitionAuthenticatedUid()?"is-me":""}">
      <span class="competition-rank">${index===0?"🥇":index===1?"🥈":index===2?"🥉":index+1}</span>
      <span class="competition-player-avatar">${escapeHtml((member.name||"؟").slice(0,1))}</span>
      <span class="competition-player-name"><strong>${escapeHtml(member.name||"متعلّم")}</strong><small>${Number(member.answeredCount)||0} / ${competitionRoomData?.questions?.length||0} سؤال</small></span>
      <strong class="competition-player-score">${Number(member.score)||0} <small>نقطة</small></strong>
    </div>`).join("")}</div>`;
}
function renderCompetition(){
  if(competitionSelfChallengeId){
    if(!competitionSelfChallengeData){
      app.innerHTML=pageShell("المنافسة","كنوجدّو تحدي نفسك…","لحظة، كنجيبو التحدي ديالك.",`<div class="competition-loading">🎯 جاري تحميل التحدي الشخصي…</div>`);
      return;
    }
    renderCompetitionSelfChallenge();
    return;
  }
  if(competitionRoomId){
    if(!competitionRoomData){
      app.innerHTML=pageShell("المنافسة","كنوجدّو الغرفة…","لحظة، كنجيبو معلومات المنافسة.",`<div class="competition-loading">🏆 جاري الاتصال بالغرفة…</div>`);
      return;
    }
    renderCompetitionRoom();
    return;
  }
  // Competition level access is granted separately by the administrator for each group.
  const allowedCompetitionLevels=GROUP_COURSE_LEVELS.filter(level=>getStudentCompetitionLevelAccess(level));
  if(!allowedCompetitionLevels.includes(competitionSelectedLevel)){
    competitionSelectedLevel=allowedCompetitionLevels.find(level=>competitionLevelHasQuestionBank(level))||allowedCompetitionLevels[0]||"A1";
    competitionSelectedLessons=[];competitionSelectedTestTypes={};competitionExpandedLesson=null;
  }
  const selectedCompetitionLevelAllowed=getStudentCompetitionLevelAccess(competitionSelectedLevel);
  const selectedCompetitionLevelHasBank=competitionLevelHasQuestionBank(competitionSelectedLevel);
  const levelCatalog=competitionCatalogForLevel(competitionSelectedLevel);
  const levelLessons=competitionLessonsForLevel(competitionSelectedLevel);
  const competitionLevelCards=GROUP_COURSE_LEVELS.map(level=>{
    const allowed=getStudentCompetitionLevelAccess(level);
    const hasBank=competitionLevelHasQuestionBank(level);
    const active=competitionSelectedLevel===level;
    const status=!allowed?"مقفل من الإدارة":hasBank?"متاح للمنافسة":"المستوى مفتوح · الاختبارات قيد الإضافة";
    const shortStatus=!allowed?"مقفل":hasBank?"متاح":"قريباً";
    return `<button type="button" class="competition-level-card competition-level-filter ${active?"is-selected":""} ${allowed?"is-open":"is-locked"} ${hasBank?"has-bank":"no-bank"}" data-action="competition-level" data-level="${level}" ${allowed?"":"disabled"} aria-pressed="${active}" aria-label="فلتر مستوى ${level}: ${status}" title="${status}">
      <strong class="competition-level-filter-code">${level}</strong>
      <span class="competition-level-filter-status">${allowed?(hasBank?"✓ ":"◷ "):"🔒 "}${shortStatus}</span>
    </button>`;
  }).join("");
  const competitionLevelNotice=!currentStudentProfile?.groupId
    ?"حسابك ما مربوط حتى بمجموعة. تواصل مع الإدارة باش تضيفك لمجموعة وتفتح ليك مستوى المنافسة."
    :!currentStudentGroup
      ?"ما قدرناش نجيبو إعدادات المجموعة ديالك. حدّث الصفحة أو تواصل مع الإدارة."
      :!allowedCompetitionLevels.length
        ?"الإدارة ما فتحت حتى مستوى للمنافسة فالمجموعة ديالك."
        :!selectedCompetitionLevelHasBank
          ?`المستوى ${competitionSelectedLevel} مفتوح للمجموعة ديالك، ولكن بنك أسئلة المنافسة ديالو مازال ما تضافش. حالياً بنوك المنافسة المتوفرة هي A1 وA2.`
          :"";
  const competitionLevelCanPlay=selectedCompetitionLevelAllowed&&selectedCompetitionLevelHasBank;
  // Selection is user-controlled: do not automatically re-check L1/the last lesson.
  const lessonsMarkup=competitionLevelCanPlay?levelLessons.map((lesson,index)=>{
    const allowed=competitionLessonAccess(index,competitionSelectedLevel);
    const hasBank=Boolean(levelCatalog[index]?.types?.length);
    const selected=competitionSelectedLessons.includes(index);
    const disabled=!allowed||!hasBank;
    return `<button type="button" class="competition-lesson-chip ${selected?"selected":""} ${disabled?"locked":""} ${hasBank?"":"no-bank"}" data-action="competition-lesson" data-lesson="${index}" ${disabled?"disabled":""} title="${hasBank?"":"التمارين التطبيقية لهذا الدرس غير متوفرة بعد"}">
      <span class="competition-lesson-check">${selected?"✓":""}</span><strong>L${index+1}</strong><small>${escapeHtml(competitionLessonName(index,competitionSelectedLevel))}</small>
    </button>`;
  }).join(""):"";
  // The chosen lesson opens its Test sections underneath the lesson grid.
  if(competitionExpandedLesson===null || !competitionSelectedLessons.includes(competitionExpandedLesson)){
    competitionExpandedLesson=competitionSelectedLessons[0]??null;
  }
  const activeLessonIndex=competitionExpandedLesson;
  const activeTypes=activeLessonIndex===null?[]:(levelCatalog[activeLessonIndex]?.types||[]);
  const activeSelected=activeLessonIndex===null?[]:competitionEnsureTypes(activeLessonIndex);
  const testTypesMarkup=activeTypes.map((type,typeIndex)=>{
    const checked=activeSelected.includes(typeIndex);
    return `<button type="button" class="competition-test-type ${checked?"chosen":""}" data-action="competition-type" data-lesson="${activeLessonIndex}" data-type="${typeIndex}" aria-pressed="${checked}">
      <span class="competition-type-check">${checked?"✓":""}</span>
      <span class="competition-type-title">${escapeHtml(competitionTypeTitle(type.name))}</span>
      <small>${type.count} سؤال</small>
    </button>`;
  }).join("");
  const selectedTypesTotal=competitionSelectedLessons.reduce((n,i)=>n+competitionEnsureTypes(i).length,0);
  const availableQuestions=competitionAvailableQuestionCount();
  if(availableQuestions>0 && competitionQuestionCount>availableQuestions)competitionQuestionCount=availableQuestions;
  if(competitionQuestionCount<1)competitionQuestionCount=1;
  const typePanel=activeLessonIndex===null?`<div class="competition-selection-empty" role="status">اختار درساً من الفوق باش تبان أنواع الأسئلة ديالو. تقدر تحدد أو تحيد المارك بحرية.</div>`:`
    <section class="competition-test-panel" aria-label="اختيار أنواع أسئلة الدرس">
      <div class="competition-test-panel-head">
        <div><strong>📚 Test ديال ${escapeHtml("L"+(activeLessonIndex+1))}</strong>
        <small>${escapeHtml(competitionLessonName(activeLessonIndex,competitionSelectedLevel))} · اختار التمارين اللي بغيتي</small></div>
        <div class="competition-test-tools"><button type="button" data-action="competition-types-all" data-lesson="${activeLessonIndex}">اختيار الكل</button><button type="button" data-action="competition-lesson-remove" data-lesson="${activeLessonIndex}">حيد الدرس</button></div>
      </div>
      ${competitionSelectedLessons.length>1?`<div class="competition-selected-lessons-tabs" role="group" aria-label="بدّل بين اختبارات الدروس المختارة">${competitionSelectedLessons.map(i=>`<button type="button" class="${i===activeLessonIndex?"active":""}" data-action="competition-open-lesson" data-lesson="${i}" aria-pressed="${i===activeLessonIndex}">تعديل ${"L"+(i+1)}</button>`).join("")}</div>`:""}
      <div class="competition-test-types">${testTypesMarkup}</div>
    </section>`;
  const stats=competitionGlobalStats.slice().sort((a,b)=>(Number(b.totalPoints)||0)-(Number(a.totalPoints)||0));
  const myStats=stats.find(item=>item.uid===competitionAuthenticatedUid())||{totalPoints:0,wins:0,competitionsPlayed:0};
  const leaderboard=stats.slice(0,5).map((item,index)=>`
    <div class="competition-global-row">
      <span>${index===0?"🥇":index===1?"🥈":index===2?"🥉":index+1}</span>
      <strong>${escapeHtml(item.name||"متعلّم")}</strong>
      <b>${Number(item.totalPoints)||0} نقطة</b>
    </div>`).join("");
  const personalRecordsMarkup=competitionPersonalRecords.slice(0,5).map((record,index)=>`
    <div class="competition-self-record-row">
      <div><strong>${escapeHtml((record.lessonNames||[]).join(" · ")||"اختبار شخصي")}</strong><small>${Number(record.attempts)||0} محاولات · ${Number(record.totalQuestions)||Number(record.questionCount)||0} سؤال</small></div>
      <b>${Number(record.bestScore)||0} نقطة</b>
    </div>`).join("");
  const competitionSourceHint=competitionSelectedLevel==="A2"?"📘 A2: الأسئلة مستخرجة من التمارين التطبيقية الأصلية للدروس 2–10.":"📘 A1: الأسئلة من بنك اختبارات الدروس والتمارين الإضافية الأصلية.";
  const selfInfoCard=`
    <section class="competition-card competition-self-info-card">
      <div class="competition-card-heading"><span>🎯</span><div><h3>أفضل نتائجك</h3><p>تتسجل تلقائياً وكتقدر تحسنها فكل محاولة</p></div></div>
      ${personalRecordsMarkup?`<div class="competition-self-record-list">${personalRecordsMarkup}</div>`:`<div class="competition-empty">مازال ما عندك حتى نتيجة شخصية. اختار الدروس وبدا أول تحدي ديالك!</div>`}
    </section>`;
  const content=`
    <section class="competition-hero">
      <div class="competition-hero-icon">🏆</div>
      <div><span>تحدّى أصحابك أو نافس نفسك</span><h2>كل محاولة فرصة باش تطوّر مستواك!</h2><p>تنافس مع التلاميذ أو قارن نتيجتك الحالية بأفضل نتيجة شخصية.</p></div>
      <div class="competition-my-points"><strong>${Number(myStats.totalPoints)||0}</strong><small>${competitionMode==="self"?"نقاط الغرف الجماعية":"مجموع نقاطك"}</small></div>
    </section>

    <section class="competition-level-picker" aria-label="اختيار مستوى المنافسة">
      <div class="competition-level-picker-heading"><div><strong>اختار مستوى المنافسة</strong><small>المستويات كتتحل من طرف الإدارة حسب المجموعة ديالك</small></div><span>المجموعة: ${escapeHtml(currentStudentGroup?.name||"غير معيّنة")}</span></div>
      <div class="competition-level-grid" role="group" aria-label="فلترة المنافسة حسب المستوى">${competitionLevelCards}</div>
    </section>
    ${competitionLevelCanPlay?`<div class="competition-create-grid">
      <section class="competition-card">
        <div class="competition-card-heading"><span>${competitionMode==="self"?"🎯":"⚡"}</span><div><h3>${competitionMode==="self"?"تحدّي شخصي":"أنشئ منافسة"}</h3><p>${competitionMode==="self"?"اختبر مستواك وسجّل أفضل نتيجة":"صايب غرفة وشارك الرمز مع صحابك"}</p></div></div>
        <div class="competition-mode-picker">
          <button type="button" class="${competitionMode==="duel"?"active":""}" data-action="competition-mode" data-mode="duel"><strong>👤 1 ضد 1</strong><small>تنافس مع تلميذ آخر</small></button>
          <button type="button" class="${competitionMode==="group"?"active":""}" data-action="competition-mode" data-mode="group"><strong>👥 مجموعة</strong><small>حتى 20 تلميذ</small></button>
          <button type="button" class="${competitionMode==="self"?"active":""}" data-action="competition-mode" data-mode="self"><strong>🎯 نافس نفسك</strong><small>قارن محاولاتك السابقة</small></button>
        </div>
        <div class="competition-field-head"><strong>اختار الدروس</strong><small>ضغط مرة باش تختار، ومرة ثانية باش تحيد المارك</small></div>
        <div class="competition-lesson-grid">${lessonsMarkup}</div>
        <p class="competition-source-hint">${escapeHtml(competitionSourceHint)}</p>
        ${typePanel}
        <div class="competition-full-exercise-choice">
          <label class="competition-full-exercise-label" for="competitionWholeExercises">
            <input id="competitionWholeExercises" type="checkbox" ${competitionWholeExercises?"checked":""}>
            <span><strong>📖 فتح Übung كامل كيفما فـ Test</strong><small>مثلاً Lückensätze: غادي يبان التمرين كامل بـ8 جمل والاختيارات الأصلية، وتتحسب نقاط كل جواب.</small></span>
          </label>
        </div>
        <div class="competition-field-head"><strong>${competitionWholeExercises?"عدد الأسئلة فالتداريب المختارة":"عدد الأسئلة"}</strong><small>كل جواب صحيح = 10 نقاط</small></div>
        <div class="competition-question-count-box">
          <label for="competitionCustomCount">كتب عدد الأسئلة اللي بغيتي</label>
          <div class="competition-count-input-row"><input id="competitionCustomCount" type="number" inputmode="numeric" min="1" max="${Math.max(availableQuestions,1)}" step="1" value="${availableQuestions?(competitionWholeExercises?availableQuestions:competitionQuestionCount):""}" placeholder="اختار تمارين أولاً" ${availableQuestions&&!competitionWholeExercises?"":"disabled"} aria-label="عدد أسئلة المنافسة"><span>سؤال</span></div>
          ${competitionWholeExercises?`<small class="competition-exercise-count-note">فهاد الوضع كنجيبو جميع أسئلة Übung اللي اخترتي، بلا تقطيع. تقدر تختار أو تحيد أي نوع من الفوق.</small>`:""}
          <small>الأسئلة المتاحة من التمارين المختارة: <strong id="competitionAvailableCount">${availableQuestions}</strong> · أنواع التمارين المختارة: ${selectedTypesTotal}</small>
        </div>
        ${competitionWholeExercises?"":`<div class="competition-count-picker">
          ${[5,10,15].map(count=>`<button type="button" class="${competitionQuestionCount===count?"active":""}" data-action="competition-count" data-count="${count}" ${count>availableQuestions?"disabled":""}>${count} أسئلة</button>`).join("")}
        </div>`}
        <button type="button" class="competition-primary-btn" data-action="${competitionMode==="self"?"competition-self-create":"competition-create"}" aria-describedby="competitionCreationStatus" ${competitionBusy?"disabled":""}>${competitionBusy?(competitionMode==="self"?"كنوجدّو تحدي نفسك…":"كنوجدّو المنافسة…"):(competitionMode==="self"?"🎯 ابدأ تحدّي نفسك":"🏆 إنشاء غرفة المنافسة")}</button>
        <p id="competitionCreationStatus" role="status" aria-live="polite" ${competitionCreateMessage?"":"hidden"} style="margin:9px 0;padding:11px 12px;border:1px solid ${competitionCreateMessageIsError?"#f7b8c8":"#bccfff"};border-radius:12px;line-height:1.7;font-size:12px;font-weight:800;color:${competitionCreateMessageIsError?"#972c49":"#2052aa"};background:${competitionCreateMessageIsError?"#fff1f4":"#eaf2ff"};">${escapeHtml(competitionCreateMessage)}</p>
        <p class="competition-hint">${competitionMode==="self"?"غادي تلعب بوحدك، وتتسجل أفضل نتيجة ديالك باش تقارنها مع المحاولات الجاية.":"غادي يتولد رمز خاص بالغرفة. صيفطو للتلميذ أو للمجموعة باش ينضمو."}</p>
      </section>

      ${competitionMode==="self"?selfInfoCard:`
      <section class="competition-card competition-join-card">
        <div class="competition-card-heading"><span>🔑</span><div><h3>انضم لمنافسة</h3><p>دخل الرمز اللي عطاك صاحبك</p></div></div>
        <form id="competitionJoinForm" class="competition-join-form">
          <label for="competitionJoinCode">رمز المنافسة</label>
          <input id="competitionJoinCode" name="code" type="text" maxlength="6" minlength="6" autocomplete="off" placeholder="مثال: A7K9P2" required>
          <button type="submit" class="competition-secondary-btn" ${competitionBusy?"disabled":""}>انضم للغرفة ←</button>
        </form>
        <div class="competition-howto"><strong>كيفاش كتخدم؟</strong><p>دخل للغرفة، تسنّى حتى يكونو جوج لاعبين على الأقل، ومن بعد غير صاحب الغرفة اللي يضغط Start باش تبدا المنافسة عند الجميع.</p></div>
      </section>`}
    </div>

    <section class="competition-card competition-global-card">
      <div class="competition-card-heading"><span>🌍</span><div><h3>المتصدرون</h3><p>ترتيب مجموع نقاط المنافسات</p></div></div>
      ${leaderboard?`<div class="competition-global-list">${leaderboard}</div>`:`<div class="competition-empty">مازال ما تسجلات حتى منافسة. كون أول بطل!</div>`}
    </section>
    </div>`:`<section class="competition-level-unavailable" role="status"><span>${selectedCompetitionLevelAllowed?"📘":"🔒"}</span><div><strong>${selectedCompetitionLevelAllowed?`المستوى ${competitionSelectedLevel} مفتوح`:"المنافسة غير متاحة حالياً"}</strong><p>${escapeHtml(competitionLevelNotice||"اختار مستوى مفتوح من الإدارة باش تبدا المنافسة.")}</p></div></section>`}
  `;
  // Do not recreate the entire app/header/navbar on every checkbox click.
  // Replacing only the setup view prevents scroll resets and visible flicker.
  const existingSetup=page==="competition"&&!competitionRoomId
    ?app.querySelector(".competition-setup-view"):null;
  if(existingSetup){
    const main=app.querySelector(".student-main");
    const mainScroll=main?.scrollTop||0;
    const pageScroll=window.scrollY||0;
    existingSetup.innerHTML=content;
    if(main&&Math.abs(main.scrollTop-mainScroll)>1)main.scrollTop=mainScroll;
    if(Math.abs((window.scrollY||0)-pageScroll)>1)window.scrollTo({top:pageScroll,behavior:"instant"});
    return;
  }
  app.innerHTML=pageShell("تحدّى وتعلّم","المنافسة بين التلاميذ","تنافس فردياً أو مع مجموعة، وتدرّب على اختبارات الدروس واجمع النقاط.",`<div class="competition-setup-view">${content}</div>`);
}

function competitionNormalizeExerciseAnswer(value){
  return String(value??"").toLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f]/g,"").replace(/ß/g,"ss")
    .replace(/\s+([.,!?;:])/g,"$1").replace(/[.,!?;:؛،؟]/g,"")
    .replace(/\s+/g," ").trim();
}
function competitionResolveExerciseText(question,value){
  const answer=competitionNormalizeExerciseAnswer(value);
  if(!answer)return null;
  const options=Array.isArray(question?.options)?question.options:[];
  const match=options.findIndex(option=>competitionNormalizeExerciseAnswer(option)===answer);
  if(match>=0)return match;
  const invalid=Number(question?.invalidIndex);
  return Number.isInteger(invalid)&&invalid>=0&&invalid<options.length?invalid:0;
}
function competitionUpdateExerciseSubmitButton(){
  const submit=app.querySelector('[data-action="competition-submit-uebung"],[data-action="competition-self-submit-uebung"]');
  if(!submit)return;
  const cards=[...app.querySelectorAll(".competition-uebung-item[data-question-index]:not(.submitted)")];
  submit.disabled=competitionSubmitting||competitionSelfSubmitting||cards.some(card=>{
    const index=Number(card.dataset.questionIndex);
    return !Number.isInteger(competitionExerciseSelections[index]);
  });
}
function competitionRenderExerciseItem(item,index,alreadyAnswered,disabled){
  const type=item.exerciseType||"choice";
  const options=Array.isArray(item.options)?item.options:[];
  const selected=competitionExerciseSelections[index];
  const note=item.note?`<div class="competition-uebung-note">${escapeHtml(item.note)}</div>`:"";
  if(alreadyAnswered)return `<div class="competition-uebung-item submitted" data-question-index="${index}">
    <div class="competition-uebung-prompt" dir="auto">${escapeHtml(item.prompt)}</div>${note}
    <div class="competition-uebung-submitted">✓ تسجّل الجواب</div></div>`;
  let control="";
  if(type==="sentence"||type==="scramble"){
    const isLetters=type==="scramble";
    const tiles=isLetters?(Array.isArray(item.letters)?item.letters:Array.from(String(item.scramble||"").replace(/\s+/g,""))):(Array.isArray(item.tiles)?item.tiles:[]);
    const draft=Array.isArray(competitionExerciseTileDrafts[index])?competitionExerciseTileDrafts[index]:[];
    const used=new Set(draft);
    const answerLine=draft.map(tileIndex=>`<button type="button" class="competition-tile-answer ${isLetters?"letter":""}" data-action="competition-exercise-tile" data-question-index="${index}" data-tile-index="${tileIndex}" data-tile-kind="${isLetters?"letters":"words"}" ${disabled?"disabled":""}>${escapeHtml(tiles[tileIndex]??"")} <span>×</span></button>`).join("");
    const bank=tiles.map((tile,tileIndex)=>`<button type="button" class="competition-tile-bank-item ${used.has(tileIndex)?"used":""} ${isLetters?"letter":""}" data-action="competition-exercise-tile" data-question-index="${index}" data-tile-index="${tileIndex}" data-tile-kind="${isLetters?"letters":"words"}" ${disabled||used.has(tileIndex)?"disabled":""}>${escapeHtml(tile)}</button>`).join("");
    control=`<div class="competition-tile-answer-line ${draft.length?"has-answer":""}">${answerLine||`<span class="competition-tile-placeholder">${isLetters?"رتّب الحروف هنا":"ركّب الجملة هنا"}</span>`}</div>
      <div class="competition-tile-bank">${bank}</div>`;
  }else if(type==="text"||item.answerMode==="text"||(type==="verb"&&item.answerMode!=="select")){
    const value=competitionExerciseDrafts[index]||"";
    control=`<input class="competition-uebung-input" type="text" data-competition-text-question="${index}" value="${escapeHtml(value)}" placeholder="${type==="verb"?"اكتب تصريف الفعل الصحيح…":type==="text"?"اكتب الجواب الصحيح…":"اكتب الكلمة المناسبة…"}" autocomplete="off" ${disabled?"disabled":""}>`;
  }else if(type==="fill"||type==="sorting"||type==="verb"){
    const choices=options.map((option,i)=>`<option value="${i}" ${selected===i?"selected":""}>${escapeHtml(option)}</option>`).join("");
    control=`<select class="competition-uebung-select" data-competition-exercise-question="${index}" aria-label="جواب السؤال ${index+1}" ${disabled?"disabled":""}>
      <option value="">— اختر الإجابة —</option>${choices}</select>`;
  }else{
    const style=type==="article"?"article":type==="matching"?"matching":"choice";
    control=`<div class="competition-exercise-options ${style}">${options.map((option,i)=>`<button type="button" class="competition-exercise-choice ${selected===i?"selected":""}" data-action="competition-exercise-choice" data-question-index="${index}" data-option="${i}" ${disabled?"disabled":""}>${escapeHtml(option)}</button>`).join("")}</div>`;
  }
  const promptClass=type==="article"?"competition-uebung-prompt article":type==="matching"?"competition-uebung-prompt matching":"competition-uebung-prompt";
  const extra=type==="scramble"&&item.scramble?`<div class="competition-scramble-hint">${escapeHtml(item.scramble)}</div>`:"";
  return `<div class="competition-uebung-item ${type==="sentence"?"sentence":""} ${type==="matching"?"matching":""}" data-question-index="${index}">
    <div class="${promptClass}" dir="auto">${escapeHtml(item.prompt)}</div>${note}${extra}${control}
  </div>`;
}

function renderCompetitionRoom(){
  if(!competitionRoomData){renderCompetition();return;}
  const room=competitionRoomData;
  const members=competitionMembers();
  const isCreator=competitionIsCreator(room);
  const myMember=room.members?.[competitionAuthenticatedUid()]||{};
  const total=(room.questions||[]).length;
  const roomCode=escapeHtml(room.code||competitionRoomCode||"------");
  const leaderboard=competitionLeaderboardMarkup(members);
  const roomErrorMarkup=competitionRoomError
    ?`<div class="competition-connection-error" role="alert">⚠️ ${escapeHtml(competitionRoomError)} <button type="button" data-action="competition-retry-room">عاود المحاولة</button></div>`:"";
  let content="";
  if(room.status==="waiting"){
    content=`
      <section class="competition-room-banner">
        <div><span>غرفة المنافسة</span><h2>${room.mode==="duel"?"منافسة 1 ضد 1":"منافسة جماعية"}</h2><p>${(room.lessonNames||[]).map(escapeHtml).join(" · ")}</p></div>
        <span class="competition-status waiting">${members.length>=2?"في انتظار Start من صاحب الغرفة":"في انتظار اللاعبين"}</span>
      </section>
      <section class="competition-code-card">
        <div class="competition-code-copy"><small>رمز الغرفة — شاركو مع أصحابك</small><strong>${roomCode}</strong><span>دخلو هاد الرمز باش ينضمو للمنافسة</span></div>
        <div class="competition-code-actions">
          <button type="button" data-action="competition-copy-code">نسخ الرمز</button>
          <button type="button" class="competition-share-code-btn" data-action="competition-share-code">مشاركة</button>
        </div>
      </section>
      <section class="competition-card"><div class="competition-card-heading"><span>👥</span><div><h3>اللاعبون (${members.length}/${room.mode==="duel"?2:20})</h3><p>الأسماء كتظهر مباشرة ملي ينضمّو</p></div></div>${leaderboard}
        ${isCreator?`
          ${room.mode==="duel"&&members.length<2?`<div class="competition-wait-note">صيفط الرمز للتلميذ الثاني. ملي يدخل، ضغط على «ابدأ المنافسة» باش تبدا عند بجوج.</div>`:""}
          <button type="button" class="competition-primary-btn" data-action="competition-start" ${members.length<2||competitionBusy?"disabled":""}>${competitionBusy?"كنفتحو التمارين…":"ابدأ المنافسة 🚀"}</button>
        `:`<div class="competition-wait-note">تسنّى صاحب الغرفة ${room.creatorName?`(${escapeHtml(room.creatorName)})`:""} يضغط «ابدأ المنافسة»…</div>`}
        ${roomErrorMarkup}
      </section>
      <button type="button" class="competition-text-btn" data-action="competition-leave">الخروج من الغرفة</button>
    `;
  }else if(room.status==="completed"){
    const sorted=members;
    const topScore=sorted.length?Number(sorted[0].score)||0:0;
    const winners=sorted.filter(item=>(Number(item.score)||0)===topScore);
    content=`
      <section class="competition-complete-hero"><span>🏆</span><h2>سالات المنافسة!</h2><p>${winners.map(item=>escapeHtml(item.name||"متعلّم")).join(" و ")} ${winners.length>1?"تعادلو فالمركز الأول":"ربح المنافسة"}.</p></section>
      <section class="competition-card"><div class="competition-card-heading"><span>🥇</span><div><h3>النتائج النهائية</h3><p>كل نقطة صحيحة تحسبات فالمجموع</p></div></div>${leaderboard}</section>
      <button type="button" class="competition-primary-btn" data-action="competition-leave">رجوع للمنافسة</button>
    `;
  }else{
    let question=room.questions?.[competitionQuestionIndex];
    if(!competitionFeedback&&!competitionSubmitting&&Number(myMember.answeredCount||0)>competitionQuestionIndex){
      competitionQuestionIndex=Number(myMember.answeredCount)||0;
      question=room.questions?.[competitionQuestionIndex];
    }
    // Keep feedback visible for the final answer/Übung until the player clicks Next.
    const finished=(Boolean(myMember.finished)||competitionQuestionIndex>=total) && !competitionFeedback;
    let quizMarkup="";
    if(!total){
      quizMarkup=`<div class="competition-loading" role="status">⏳ كنحمّلو تمارين المنافسة…</div>
        ${roomErrorMarkup}
        <button type="button" class="competition-secondary-btn" data-action="competition-retry-room">تحديث التمارين</button>`;
    }else if(finished){
      quizMarkup=`<div class="competition-finished-note"><span>⏳</span><h3>كملتي الأسئلة ديالك!</h3><p>النقاط ديالك تسجلات. تسنّى باقي اللاعبين يكملو باش تبان النتيجة النهائية.</p><strong>${Number(myMember.score)||0} نقطة</strong></div>`;
    }else if(question && question.groupId){
      const stageId=String(question.groupId);
      let start=competitionQuestionIndex;
      while(start>0 && room.questions[start-1]?.groupId===stageId)start--;
      let end=competitionQuestionIndex;
      while(end<total && room.questions[end]?.groupId===stageId)end++;
      const serverDone=Number(myMember.answeredCount)||0;
      const stageQuestions=room.questions.slice(start,end);
      const groupFinished=competitionFeedback?.groupEnd===end;
      const panels=stageQuestions.map((item,offset)=>{
        const idx=start+offset;
        return competitionRenderExerciseItem(item,idx,idx<serverDone,competitionSubmitting||groupFinished);
      }).join("");
      const pending=stageQuestions.some((_,offset)=>{
        const idx=start+offset;
        return idx>=serverDone && !Number.isInteger(competitionExerciseSelections[idx]);
      });
      const heading=escapeHtml(question.groupTitle||question.category||"Übung");
      const instruction=question.exerciseInstruction
        ?`<p class="competition-uebung-instruction">${escapeHtml(question.exerciseInstruction)}</p>`
        :`<p class="competition-uebung-instruction">حلّ التمرين بالطريقة المطلوبة، وكل جواب كيتصحح بوحدو وكيحسب فالنقط.</p>`;
      const result=groupFinished?
        `<div class="competition-uebung-result">✓ تصحّح التمرين: ${competitionFeedback.correctCount} من ${competitionFeedback.answeredCount} أجوبة صحيحة (+${competitionFeedback.pointsAwarded} نقطة)</div>
         <button type="button" class="competition-primary-btn" data-action="competition-next">${end>=total?"إنهاء الأسئلة":"التمرين التالي ←"}</button>`:
        `<button type="button" class="competition-primary-btn competition-uebung-submit" data-action="competition-submit-uebung" ${pending||competitionSubmitting?"disabled":""}>
          ${competitionSubmitting?"كنسجلو الأجوبة…":"تصحيح التمرين كامل"}</button>`;
      quizMarkup=`
        <div class="competition-question-top"><span>${start+1}–${end} من ${total} سؤال</span><span>${escapeHtml(question.lessonName||"الدرس")}</span></div>
        <div class="competition-question-progress"><span style="width:${Math.round((serverDone/Math.max(total,1))*100)}%"></span></div>
        <div class="competition-uebung-heading"><h3>${heading}</h3><span>${question.exerciseNumber?`ÜBUNG ${question.exerciseNumber}`:"ÜBUNG"}</span></div>
        ${instruction}
        <div class="competition-uebung-grid">${panels}</div>
        ${result}
      `;
    }else if(question){
      const options=(question.options||[]).map((option,index)=>{
        const chosen=competitionFeedback&&competitionFeedback.selectedIndex===index;
        return `<button type="button" class="competition-answer-option ${chosen?"chosen":""}" data-action="competition-answer" data-option="${index}" ${competitionFeedback||competitionSubmitting?"disabled":""}><span>${String.fromCharCode(65+index)}</span>${escapeHtml(option)}</button>`;
      }).join("");
      const feedback=competitionFeedback?`<div class="competition-answer-feedback ${competitionFeedback.correct?"correct":"wrong"}">${competitionFeedback.correct?"إجابة صحيحة! +10 نقاط 🎉":"ماشي هادي الإجابة الصحيحة. حظ موفق فالسؤال الجاي."}</div>`:"";
      const next=competitionFeedback?`<button type="button" class="competition-primary-btn" data-action="competition-next">${competitionQuestionIndex+1>=total?"إنهاء الأسئلة":"السؤال التالي ←"}</button>`:"";
      quizMarkup=`
        <div class="competition-question-top"><span>السؤال ${competitionQuestionIndex+1} من ${total}</span><span>${escapeHtml(question.lessonName||"الدرس")}</span></div>
        <div class="competition-question-progress"><span style="width:${Math.round((competitionQuestionIndex/Math.max(total,1))*100)}%"></span></div>
        <h3 class="competition-question-title" dir="ltr">${escapeHtml(question.prompt)}</h3>
        <div class="competition-answer-grid">${options}</div>
        ${feedback}${next}
      `;
    }
    content=`
      <section class="competition-room-banner active">
        <div><span>المنافسة مباشرة</span><h2>${room.mode==="duel"?"1 ضد 1":"منافسة جماعية"}</h2><p>${(room.lessonNames||[]).map(escapeHtml).join(" · ")}</p></div>
        <span class="competition-status live">● مباشرة</span>
      </section>
      <div class="competition-live-layout">
        <section class="competition-card competition-quiz-card">${quizMarkup}${total?roomErrorMarkup:""}</section>
        <section class="competition-card competition-score-card"><div class="competition-card-heading"><span>📊</span><div><h3>الترتيب المباشر</h3><p>النقاط كتتحدّث مباشرة</p></div></div>${leaderboard}</section>
      </div>
      <button type="button" class="competition-text-btn" data-action="competition-finish">إنهاء المنافسة والخروج</button>
    `;
  }
  const existingRoom=page==="competition"?app.querySelector(".competition-room-view"):null;
  if(existingRoom){
    const main=app.querySelector(".student-main");
    const scrollTop=main?.scrollTop||0;
    const windowTop=window.scrollY||0;
    existingRoom.innerHTML=content;
    if(main&&Math.abs(main.scrollTop-scrollTop)>1)main.scrollTop=scrollTop;
    if(Math.abs((window.scrollY||0)-windowTop)>1)window.scrollTo({top:windowTop,behavior:"instant"});
  }else{
    app.innerHTML=pageShell("المنافسة","غرفة "+roomCode,"تنافس مع زملائك واجمع أكبر عدد من النقاط.",`<div class="competition-room-view">${content}</div>`);
  }
}
function renderCompetitionSelfChallenge(){
  const challenge=competitionSelfChallengeData;
  if(!challenge){renderCompetition();return;}
  const questions=Array.isArray(challenge.questions)?challenge.questions:[];
  const total=questions.length;
  const answered=Math.min(Number(challenge.answeredCount)||0,total);
  const score=Number(challenge.score)||0;
  const correctCount=Number(challenge.correctCount)||0;
  const question=questions[competitionQuestionIndex];
  const lessonNames=(challenge.lessonNames||[]).map(escapeHtml).join(" · ");
  const progress=Math.round(answered/Math.max(total,1)*100);
  const previousBest=Number(challenge.previousBestScore)||0;
  const currentBest=Math.max(previousBest,Number(challenge.personalRecord?.bestScore)||0);
  let quizMarkup="";
  if(challenge.status==="completed"||answered>=total){
    const newRecord=score>previousBest;
    const difference=score-previousBest;
    const resultLine=newRecord
      ?`رقم قياسي شخصي جديد! زدت ${difference} نقطة على أفضل نتيجة سابقة.`
      :difference===0&&previousBest>0
        ?"حافظتي على أفضل نتيجة شخصية ديالك. حاول تزيد عليها فالمحاولة الجاية."
        :previousBest>0
          ?`باقي ليك ${Math.abs(difference)} نقطة باش ترجع لأفضل نتيجة ديالك.`
          :"بداية موفقة! عاود التحدي وحاول تحسن النتيجة ديالك.";
    quizMarkup=`
      <section class="competition-self-result">
        <span class="competition-self-result-icon">${newRecord?"🏆":"🎯"}</span>
        <p class="competition-self-result-kicker">نتيجة التحدي الشخصي</p>
        <h3>${score} / ${total*10} نقطة</h3>
        <div class="competition-self-result-stats">
          <div><strong>${correctCount}</strong><small>أجوبة صحيحة</small></div>
          <div><strong>${total-correctCount}</strong><small>أجوبة خاطئة</small></div>
          <div><strong>${Math.round(correctCount/Math.max(total,1)*100)}%</strong><small>النسبة</small></div>
        </div>
        <p class="competition-self-result-message">${resultLine}</p>
        <div class="competition-self-best-row"><span>أفضل نتيجة محفوظة</span><strong>${currentBest} نقطة</strong></div>
        <div class="competition-self-best-row"><span>عدد المحاولات</span><strong>${Number(challenge.personalRecord?.attempts)||1}</strong></div>
        <div class="competition-self-result-actions">
          <button type="button" class="competition-primary-btn" data-action="competition-self-retry">عاود نفس التحدي</button>
          <button type="button" class="competition-secondary-btn" data-action="competition-self-leave">رجوع للمنافسة</button>
        </div>
      </section>`;
  }else if(!total){
    quizMarkup=`<div class="competition-loading">ما لقايناش أسئلة فهاد التحدي.</div>`;
  }else if(question?.groupId){
    const stageId=String(question.groupId);
    let start=competitionQuestionIndex;
    while(start>0&&questions[start-1]?.groupId===stageId)start--;
    let end=competitionQuestionIndex;
    while(end<total&&questions[end]?.groupId===stageId)end++;
    const stageQuestions=questions.slice(start,end);
    const groupFinished=competitionSelfFeedback?.groupEnd===end;
    const panels=stageQuestions.map((item,offset)=>{
      const idx=start+offset;
      return competitionRenderExerciseItem(item,idx,idx<answered,competitionSelfSubmitting||groupFinished);
    }).join("");
    const pending=stageQuestions.some((_,offset)=>{
      const idx=start+offset;
      return idx>=answered&&!Number.isInteger(competitionExerciseSelections[idx]);
    });
    const heading=escapeHtml(question.groupTitle||question.category||"Übung");
    const instruction=question.exerciseInstruction
      ?`<p class="competition-uebung-instruction">${escapeHtml(question.exerciseInstruction)}</p>`
      :`<p class="competition-uebung-instruction">حلّ التمرين، وكل جواب صحيح كيزيدك 10 نقاط.</p>`;
    const result=groupFinished
      ?`<div class="competition-uebung-result">✓ تصحّح التمرين: ${competitionSelfFeedback.correctCount} من ${competitionSelfFeedback.answeredCount} أجوبة صحيحة (+${competitionSelfFeedback.pointsAwarded} نقطة)</div>
        <button type="button" class="competition-primary-btn" data-action="competition-next">${end>=total?"عرض النتيجة النهائية":"التمرين التالي ←"}</button>`
      :`<button type="button" class="competition-primary-btn competition-uebung-submit" data-action="competition-self-submit-uebung" ${pending||competitionSelfSubmitting?"disabled":""}>${competitionSelfSubmitting?"كنصححو الأجوبة…":"تصحيح التمرين كامل"}</button>`;
    quizMarkup=`
      <div class="competition-question-top"><span>${start+1}–${end} من ${total} سؤال</span><span>${escapeHtml(question.lessonName||"الدرس")}</span></div>
      <div class="competition-question-progress"><span style="width:${progress}%"></span></div>
      <div class="competition-uebung-heading"><h3>${heading}</h3><span>${question.exerciseNumber?`ÜBUNG ${question.exerciseNumber}`:"ÜBUNG"}</span></div>
      ${instruction}
      <div class="competition-uebung-grid">${panels}</div>
      ${result}`;
  }else if(question){
    const options=(question.options||[]).map((option,index)=>{
      const chosen=competitionSelfFeedback?.selectedIndex===index;
      return `<button type="button" class="competition-answer-option ${chosen?"chosen":""}" data-action="competition-self-answer" data-option="${index}" ${competitionSelfFeedback||competitionSelfSubmitting?"disabled":""}><span>${String.fromCharCode(65+index)}</span>${escapeHtml(option)}</button>`;
    }).join("");
    const feedback=competitionSelfFeedback?`<div class="competition-answer-feedback ${competitionSelfFeedback.correct?"correct":"wrong"}">${competitionSelfFeedback.correct?"إجابة صحيحة! +10 نقاط":"ماشي هادي الإجابة الصحيحة. حاول فالسؤال الجاي."}</div>`:"";
    const next=competitionSelfFeedback?`<button type="button" class="competition-primary-btn" data-action="competition-next">${competitionQuestionIndex+1>=total?"عرض النتيجة النهائية":"السؤال التالي ←"}</button>`:"";
    quizMarkup=`
      <div class="competition-question-top"><span>السؤال ${competitionQuestionIndex+1} من ${total}</span><span>${escapeHtml(question.lessonName||"الدرس")}</span></div>
      <div class="competition-question-progress"><span style="width:${progress}%"></span></div>
      <h3 class="competition-question-title" dir="ltr">${escapeHtml(question.prompt)}</h3>
      <div class="competition-answer-grid">${options}</div>
      ${feedback}${next}`;
  }
  const sideCard=`
    <section class="competition-card competition-score-card competition-self-progress-card">
      <div class="competition-card-heading"><span>📈</span><div><h3>التقدم ديالك</h3><p>هاد التحدي ضد أفضل نسخة منك</p></div></div>
      <div class="competition-self-live-score"><strong>${score}</strong><small>نقطة حالياً</small></div>
      <div class="competition-self-progress-line"><span style="width:${progress}%"></span></div>
      <div class="competition-self-progress-meta"><span>${answered} / ${total} سؤال</span><strong>${progress}%</strong></div>
      <div class="competition-self-best-row"><span>أفضل نتيجة سابقة</span><strong>${previousBest} نقطة</strong></div>
      <div class="competition-self-best-row"><span>الأجوبة الصحيحة</span><strong>${correctCount}</strong></div>
      <p class="competition-hint">كل جواب صحيح = 10 نقاط. النتيجة كتتحفظ فحسابك باش تقارنها مع المحاولات المقبلة.</p>
    </section>`;
  const content=`
    <section class="competition-room-banner active competition-self-banner">
      <div><span>تحدّي شخصي</span><h2>نافس نفسك</h2><p>${lessonNames||"اختبار ألماني"}</p></div>
      <span class="competition-status live">● ${challenge.status==="completed"?"مكتمل":"مباشر"}</span>
    </section>
    <div class="competition-live-layout">
      <section class="competition-card competition-quiz-card">${quizMarkup}</section>
      ${sideCard}
    </div>
    ${challenge.status==="completed"?"":`<button type="button" class="competition-text-btn" data-action="competition-self-leave">إيقاف التحدي والرجوع</button>`}
  `;
  const existing=page==="competition"?app.querySelector(".competition-self-view"):null;
  if(existing){
    const main=app.querySelector(".student-main");
    const scrollTop=main?.scrollTop||0;
    const windowTop=window.scrollY||0;
    existing.innerHTML=content;
    if(main&&Math.abs(main.scrollTop-scrollTop)>1)main.scrollTop=scrollTop;
    if(Math.abs((window.scrollY||0)-windowTop)>1)window.scrollTo({top:windowTop,behavior:"instant"});
  }else{
    app.innerHTML=pageShell("تحدّى وتعلّم","تحدّي نفسك","جاوب على الأسئلة، جمع النقاط، وحاول تحطم أفضل نتيجة شخصية ديالك.",`<div class="competition-self-view">${content}</div>`);
  }
}

function competitionRoomSignature(room){
  if(!room)return "";
  const members=Object.entries(room.members||{})
    .sort(([uidA],[uidB])=>uidA.localeCompare(uidB))
    .map(([uid,m])=>[
      uid,m?.name||"",Number(m?.score)||0,Number(m?.answeredCount)||0,
      Number(m?.correctCount)||0,Boolean(m?.finished),m?.joinedAt||""
    ]);
  return JSON.stringify({
    id:room.id||"",code:room.code||"",createdBy:room.createdBy||"",isCreator:room.isCreator===true,
    creatorName:room.creatorName||"",mode:room.mode||"",status:room.status||"",
    lessonIndices:room.lessonIndices||[],lessonNames:room.lessonNames||[],
    questionCount:room.questionCount||0,loadedQuestions:room.questions?.length||0,
    createdAt:room.createdAt||"",startedAt:room.startedAt||"",
    completedAt:room.completedAt||"",members
  });
}
function stopCompetitionRoomListener(){
  if(competitionRoomPollTimer)clearInterval(competitionRoomPollTimer);
  competitionRoomPollTimer=null;
  competitionRoomPollBusy=false;
  competitionRoomLastSignature="";
}
async function refreshCompetitionRoom(roomId){
  if(competitionRoomPollBusy||!roomId||roomId!==competitionRoomId)return;
  competitionRoomPollBusy=true;
  try{
    const result=await competitionCallable("getCompetitionRoom",{roomId});
    const room=result.data?.room;
    if(roomId!==competitionRoomId)return;
    if(!room)throw new Error("الغرفة ما بقاتش متاحة.");
    // Ignore an outdated in-flight response that would move an active game back to waiting.
    const priorStatus=competitionRoomData?.status;
    if(priorStatus && priorStatus!=="waiting" && room.status==="waiting")return;
    if(priorStatus==="completed" && room.status!=="completed")return;
    const nextSignature=competitionRoomSignature(room);
    const hasChanged=nextSignature!==competitionRoomLastSignature;
    const oldRoom=competitionRoomData;
    const oldMember=oldRoom?.members?.[competitionAuthenticatedUid()]||{};
    const previousQuestionIndex=competitionQuestionIndex;
    const previousError=competitionRoomError;
    competitionRoomError="";
    competitionRoomData=room;
    competitionRoomCode=room.code||competitionRoomCode;
    if(competitionRoomData?.members?.[competitionAuthenticatedUid()]&&!competitionFeedback&&!competitionSubmitting){
      competitionQuestionIndex=Number(competitionRoomData.members[competitionAuthenticatedUid()].answeredCount)||0;
    }
    const questionIndexChanged=previousQuestionIndex!==competitionQuestionIndex;
    if(hasChanged)competitionRoomLastSignature=nextSignature;
    if(page==="competition"&&(hasChanged||questionIndexChanged||previousError)){
      const newMember=room.members?.[competitionAuthenticatedUid()]||{};
      const quizStillOpen=oldRoom && oldRoom.status!=="waiting" && oldRoom.status!=="completed"
        && room.status!=="waiting" && room.status!=="completed"
        && oldRoom.questions?.length===room.questions?.length
        && !questionIndexChanged
        && Number(oldMember.answeredCount||0)===Number(newMember.answeredCount||0)
        && Boolean(oldMember.finished)===Boolean(newMember.finished);
      if(quizStillOpen&&!previousError){
        // Live score updates must not wipe out answers or keyboard focus.
        const scoreCard=app.querySelector(".competition-room-view .competition-score-card");
        if(scoreCard){
          scoreCard.innerHTML=`<div class="competition-card-heading"><span>📊</span><div><h3>الترتيب المباشر</h3><p>النقاط كتتحدّث مباشرة</p></div></div>${competitionLeaderboardMarkup(competitionMembers())}`;
        }else renderCompetitionRoom();
      }else renderCompetitionRoom();
    }
  }catch(error){
    console.error("Competition room refresh:",error);
    const message=error?.message||"ما قدرناش نتصلو بغرفة المنافسة.";
    if(competitionRoomError!==message){
      competitionRoomError=message;
      if(page==="competition")renderCompetition();
    }
  }finally{competitionRoomPollBusy=false;}
}
function listenCompetitionRoom(roomId){
  const optimisticRoom=competitionRoomId===roomId?competitionRoomData:null;
  stopCompetitionRoomListener();
  competitionRoomId=roomId;
  competitionRoomData=optimisticRoom;
  competitionRoomLastSignature=competitionRoomSignature(optimisticRoom);
  competitionRoomError="";
  competitionQuestionIndex=0;
  competitionFeedback=null;
  competitionSubmitting=false;
  competitionExerciseSelections={};competitionExerciseDrafts={};competitionExerciseTileDrafts={};
  refreshCompetitionRoom(roomId);
  competitionRoomPollTimer=setInterval(()=>refreshCompetitionRoom(roomId),2500);
}
async function refreshStudentCompetitionGroup(){
  if(!firebaseReady || currentUser?.role!=="student")return false;
  const groupId=String(currentStudentProfile?.groupId||"");
  if(!groupId){
    const changed=currentStudentGroup!==null;
    currentStudentGroup=null;
    return changed;
  }
  try{
    const snapshot=await firebaseDb.ref(`${DEUTSCH_A1_PATH}/groups/${groupId}`).once("value");
    const nextGroup=snapshot.val()||null;
    const changed=JSON.stringify(nextGroup)!==JSON.stringify(currentStudentGroup);
    currentStudentGroup=nextGroup;
    return changed;
  }catch(error){
    console.warn("Competition group access refresh failed:",error);
    return false;
  }
}
async function loadCompetitionStats(){
  if(!firebaseReady||!firebaseAuth?.currentUser)return;
  try{
    const groupAccessChanged=await refreshStudentCompetitionGroup();
    const result=await competitionCallable("getCompetitionStats",{});
    const nextStats=Array.isArray(result.data?.stats)?result.data.stats:[];
    const nextRecords=Array.isArray(result.data?.personalRecords)?result.data.personalRecords:[];
    const changed=JSON.stringify(nextStats)!==JSON.stringify(competitionGlobalStats)||JSON.stringify(nextRecords)!==JSON.stringify(competitionPersonalRecords);
    competitionGlobalStats=nextStats;
    competitionPersonalRecords=nextRecords;
    const storageKey=competitionSelfStorageKey();
    const savedChallengeId=storageKey?localStorage.getItem(storageKey):"";
    let restoredChallenge=false;
    if(savedChallengeId&&!competitionSelfChallengeId&&!competitionRoomId){
      try{
        const saved=await competitionCallable("getSelfChallenge",{challengeId:savedChallengeId});
        const challenge=saved.data?.challenge;
        if(challenge&&challenge.status!=="abandoned"){
          competitionSelfChallengeId=challenge.id;
          competitionSelfChallengeData=challenge;
          restoredChallenge=true;
          competitionQuestionIndex=Number(challenge.answeredCount)||0;
          competitionSelfFeedback=null;competitionSelfSubmitting=false;
          competitionExerciseSelections={};competitionExerciseDrafts={};competitionExerciseTileDrafts={};
        }else if(storageKey)localStorage.removeItem(storageKey);
      }catch(error){
        if(Number(error?.status)===404&&storageKey)localStorage.removeItem(storageKey);
        else console.warn("Self competition restore unavailable:",error);
      }
    }
    if((changed||restoredChallenge||groupAccessChanged)&&page==="competition"&&!competitionRoomId)renderCompetition();
  }catch(error){console.warn("Competition stats unavailable:",error);}
}

/* Competition room code display — actual server-confirmed code only. */
function closeCompetitionCodeDialog(){
  const existing=document.getElementById("competitionCodeDialogOverlay");
  if(existing)existing.remove();
}
function showCompetitionCodeDialog(code){
  if(!/^[A-Z0-9]{6}$/.test(String(code||"")))return;
  closeCompetitionCodeDialog();
  const overlay=document.createElement("div");
  overlay.id="competitionCodeDialogOverlay";
  overlay.className="competition-code-dialog-overlay";
  overlay.innerHTML=`<div class="competition-code-dialog" role="dialog" aria-modal="true" aria-labelledby="competitionDialogHeading" dir="rtl">
    <button type="button" class="competition-dialog-x" aria-label="إغلاق">×</button>
    <span class="competition-dialog-emoji">🏆</span>
    <h2 id="competitionDialogHeading">تخلقات غرفة المنافسة!</h2>
    <p>صيفط الرمز للتلميذ اللي غادي يتنافس معاك</p>
    <strong class="competition-dialog-code" dir="ltr"></strong>
    <div class="competition-dialog-actions"><button type="button" class="competition-dialog-copy">نسخ الرمز</button><button type="button" class="competition-dialog-close">دخول للغرفة</button></div>
  </div>`;
  overlay.querySelector(".competition-dialog-code").textContent=code;
  overlay.querySelector(".competition-dialog-x").addEventListener("click",closeCompetitionCodeDialog);
  overlay.querySelector(".competition-dialog-close").addEventListener("click",closeCompetitionCodeDialog);
  overlay.querySelector(".competition-dialog-copy").addEventListener("click",async()=>{
    try{await navigator.clipboard.writeText(code);showToast("تنسخ رمز المنافسة!");}
    catch(_error){window.prompt("نسخ الرمز:",code);}
  });
  overlay.addEventListener("click",event=>{if(event.target===overlay)closeCompetitionCodeDialog();});
  document.body.appendChild(overlay);
}
function showCompetitionCreationError(error){
  closeCompetitionCodeDialog();
  const msg=error?.message||"ما قدرناش ننشئو الغرفة.";
  const code=error?.code||"unknown";
  const overlay=document.createElement("div");
  overlay.id="competitionCodeDialogOverlay";
  overlay.className="competition-code-dialog-overlay";
  overlay.innerHTML=`<div class="competition-code-dialog is-error" role="alertdialog" aria-modal="true" aria-labelledby="competitionDialogHeading" dir="rtl">
    <button type="button" class="competition-dialog-x" aria-label="إغلاق">×</button>
    <span class="competition-dialog-emoji">⚠️</span>
    <h2 id="competitionDialogHeading">تعذّر إنشاء الغرفة</h2>
    <p class="competition-dialog-error"></p>
    <small class="competition-dialog-error-code"></small>
    <div class="competition-dialog-actions"><button type="button" class="competition-dialog-copy-error">نسخ تفاصيل الخطأ</button><button type="button" class="competition-dialog-close">حسناً</button></div>
  </div>`;
  overlay.querySelector(".competition-dialog-error").textContent=msg;
  overlay.querySelector(".competition-dialog-error-code").textContent=code;
  overlay.querySelector(".competition-dialog-x").addEventListener("click",closeCompetitionCodeDialog);
  overlay.querySelector(".competition-dialog-close").addEventListener("click",closeCompetitionCodeDialog);
  overlay.querySelector(".competition-dialog-copy-error").addEventListener("click",async()=>{
    try{await navigator.clipboard.writeText(`${code}: ${msg}`);showToast("تم نسخ تفاصيل الخطأ.");}
    catch(_error){window.prompt("تفاصيل الخطأ:",`${code}: ${msg}`);}
  });
  overlay.addEventListener("click",event=>{if(event.target===overlay)closeCompetitionCodeDialog();});
  document.body.appendChild(overlay);
}

async function createCompetition(){
  if(competitionBusy)return;
  if(!getStudentCompetitionLevelAccess(competitionSelectedLevel)){
    competitionCreateFeedback(`المستوى ${competitionSelectedLevel} مقفول من الإدارة للمجموعة ديالك.`,true);return;
  }
  if(!competitionLevelHasQuestionBank(competitionSelectedLevel)){
    competitionCreateFeedback(`بنك أسئلة المنافسة للمستوى ${competitionSelectedLevel} مازال ما تضافش.`,true);return;
  }
  // A local file is a demo preview: it cannot create shared rooms.
  if(location.protocol==="file:" || demoMode){
    competitionCreateFeedback("هاد نسخة المعاينة المحلية. الغرف الحقيقية خاصها حساب تلميذ مسجّل وموقع عبر HTTPS، ماشي فتح index.html مباشرة من الملفات.",true);
    return;
  }
  if(!firebaseReady||!firebaseAuth?.currentUser){
    competitionCreateFeedback("سجّل الدخول بحساب تلميذ حقيقي باش تقدر تنشئ غرفة المنافسة.",true);
    return;
  }
  const selected=competitionSelectedLessons.filter(index=>competitionLessonAccess(index,competitionSelectedLevel));
  if(!selected.length){competitionCreateFeedback("اختار درساً واحداً على الأقل باش تنشئ الغرفة.",true);return;}
  const countField=document.getElementById("competitionCustomCount");
  const available=competitionAvailableQuestionCount();
  const requestedCount=competitionWholeExercises ? available : Number(countField?.value??competitionQuestionCount);
  if(!Number.isInteger(requestedCount)||requestedCount<1||requestedCount>available){
    competitionCreateFeedback(`اختار عدد الأسئلة بين 1 و ${available}.`,true);return;
  }
  const testTypes=competitionSelectedTypePayload();
  if(selected.some(index=>!testTypes[String(index)]?.length)){
    competitionCreateFeedback("اختار نوع تمرين واحد على الأقل لكل درس.",true);return;
  }
  competitionQuestionCount=requestedCount;
  competitionBusy=true;
  // Do not re-render the whole page here. Re-rendering loses the user's scroll
  // position and makes the creation button appear to do nothing.
  competitionCreateBusyUI(true);
  competitionCreateFeedback("جاري الاتصال بخدمة المنافسة وإنشاء الغرفة… خليك فهاد الصفحة حتى يظهر الرمز أو رسالة الخطأ.");
  try{
    const result=await competitionCallable("createCompetitionRoom",{
      level:competitionSelectedLevel,mode:competitionMode,lessonIndices:selected,questionCount:competitionQuestionCount,testTypes,
      wholeExercises:competitionWholeExercises
    });
    const payload=result?.data||{};
    const serverRoom=payload.room&&typeof payload.room==="object"?payload.room:{};
    const generatedCode=String(payload.code||serverRoom.code||"").trim().toUpperCase();
    const generatedRoomId=String(payload.roomId||serverRoom.id||serverRoom.roomId||"").trim();
    if(!/^[A-Z0-9]{6}$/.test(generatedCode)||!generatedRoomId){
      throw new Error("الخدمة ما رجعاتش رمز صالح للغرفة. تأكد من استجابة Edge Function competition.");
    }
    competitionRoomCode=generatedCode;
    competitionRoomId=generatedRoomId;
    competitionCreateMessage="";
    competitionCreateMessageIsError=false;
    competitionExerciseSelections={};competitionExerciseDrafts={};competitionExerciseTileDrafts={};
    const creatorUid=firebaseAuth.currentUser.uid;
    const creatorName=currentUser?.name||currentStudentProfile?.name||firebaseAuth.currentUser.displayName||"متعلّم";
    competitionRoomData={
      id:generatedRoomId,code:generatedCode,createdBy:creatorUid,isCreator:true,creatorName,
      mode:competitionMode,status:"waiting",lessonIndices:selected.slice(),
      lessonNames:selected.map(index=>competitionLessonName(index,competitionSelectedLevel)),
      questionCount:competitionQuestionCount,questions:[],
      members:{[creatorUid]:{uid:creatorUid,name:creatorName,score:0,answeredCount:0,
        correctCount:0,finished:false,joinedAt:Date.now()}}
    };
    renderCompetitionRoom();
    listenCompetitionRoom(generatedRoomId);
    closeCompetitionCodeDialog();
    showToast("تخلقات الغرفة! نسخ الرمز وصيفطو للتلميذ الثاني.");
  }catch(error){
    console.error("Create competition failed:",error);
    const details=competitionCreationMessageText(error);
    competitionCreateFeedback("⚠️ "+details,true);
    // Keep existing modal to allow copying the full technical error for support.
    showCompetitionCreationError(error);
  }finally{
    competitionBusy=false;
    // Preserve selected lessons, types, entered count, and scroll position after
    // a failed request; only the button state changes.
    if(page==="competition"&&!competitionRoomId)competitionCreateBusyUI(false);
  }
}
async function createSelfCompetition(){
  if(competitionBusy)return;
  if(!getStudentCompetitionLevelAccess(competitionSelectedLevel)){
    competitionCreateFeedback(`المستوى ${competitionSelectedLevel} مقفول من الإدارة للمجموعة ديالك.`,true);return;
  }
  if(!competitionLevelHasQuestionBank(competitionSelectedLevel)){
    competitionCreateFeedback(`بنك أسئلة المنافسة للمستوى ${competitionSelectedLevel} مازال ما تضافش.`,true);return;
  }
  if(window.location.protocol==="file:"||demoMode){
    competitionCreateFeedback("تحدّي النفس الحقيقي كيحتاج حساب تلميذ مسجّل وفتح الموقع عبر HTTPS.",true);
    return;
  }
  if(!firebaseReady||!firebaseAuth?.currentUser){
    competitionCreateFeedback("سجّل الدخول بحساب التلميذ باش تحفظ أفضل نتيجة ديالك.",true);
    return;
  }
  const selected=competitionSelectedLessons.filter(index=>competitionLessonAccess(index,competitionSelectedLevel));
  if(!selected.length){competitionCreateFeedback("اختار درساً واحداً على الأقل باش تبدا تحدي نفسك.",true);return;}
  const countField=document.getElementById("competitionCustomCount");
  const available=competitionAvailableQuestionCount();
  const requestedCount=competitionWholeExercises?available:Number(countField?.value??competitionQuestionCount);
  if(!Number.isInteger(requestedCount)||requestedCount<1||requestedCount>available){
    competitionCreateFeedback(`اختار عدد الأسئلة بين 1 و ${available}.`,true);return;
  }
  const testTypes=competitionSelectedTypePayload();
  if(selected.some(index=>!testTypes[String(index)]?.length)){
    competitionCreateFeedback("اختار نوع تمرين واحد على الأقل لكل درس.",true);return;
  }
  competitionQuestionCount=requestedCount;
  competitionBusy=true;
  competitionCreateBusyUI(true,"competition-self-create");
  competitionCreateFeedback("كنحضّرو التحدي الشخصي وكنجيبو الأسئلة…");
  try{
    const result=await competitionCallable("createSelfChallenge",{
      level:competitionSelectedLevel,lessonIndices:selected,questionCount:requestedCount,testTypes,wholeExercises:competitionWholeExercises
    });
    const challenge=result.data?.challenge;
    if(!challenge?.id||!Array.isArray(challenge.questions)||!challenge.questions.length){
      throw new Error("ما وصلاتناش أسئلة التحدي من الخادم.");
    }
    competitionRoomId=null;competitionRoomData=null;
    competitionSelfChallengeId=String(challenge.id);
    competitionSelfChallengeData=challenge;
    competitionSelfFeedback=null;competitionSelfSubmitting=false;
    competitionQuestionIndex=0;
    competitionExerciseSelections={};competitionExerciseDrafts={};competitionExerciseTileDrafts={};
    competitionCreateMessage="";competitionCreateMessageIsError=false;
    const storageKey=competitionSelfStorageKey();
    if(storageKey)localStorage.setItem(storageKey,competitionSelfChallengeId);
    renderCompetitionSelfChallenge();
  }catch(error){
    console.error("Create self competition failed:",error);
    const message=competitionCreationMessageText(error);
    competitionCreateFeedback("⚠️ "+message,true);
    showToast(message);
  }finally{
    competitionBusy=false;
    if(page==="competition"&&!competitionSelfChallengeId)competitionCreateBusyUI(false,"competition-self-create");
  }
}
function competitionApplySelfAnswerResult(result){
  if(!competitionSelfChallengeData)return;
  competitionSelfChallengeData.score=Number(result.score)||0;
  competitionSelfChallengeData.correctCount=Number(result.correctCount)||0;
  competitionSelfChallengeData.answeredCount=Number(result.answeredCount)||0;
  competitionSelfChallengeData.status=result.finished?"completed":"active";
  if(result.previousBestScore!==undefined)competitionSelfChallengeData.previousBestScore=Number(result.previousBestScore)||0;
  if(result.personalRecord){
    competitionSelfChallengeData.personalRecord=result.personalRecord;
    const key=result.personalRecord.challengeKey;
    competitionPersonalRecords=[result.personalRecord,...competitionPersonalRecords.filter(item=>item.challengeKey!==key)]
      .sort((a,b)=>(Number(b.updatedAt?Date.parse(b.updatedAt):0)||0)-(Number(a.updatedAt?Date.parse(a.updatedAt):0)||0));
  }
}
async function submitSelfCompetitionChoice(selectedIndex){
  if(competitionSelfSubmitting||competitionSelfFeedback||!competitionSelfChallengeId||!competitionSelfChallengeData)return;
  const questionIndex=competitionQuestionIndex;
  const question=competitionSelfChallengeData.questions?.[questionIndex];
  if(!question||!Number.isInteger(selectedIndex)||selectedIndex<0||selectedIndex>=(question.options||[]).length)return;
  competitionSelfSubmitting=true;renderCompetitionSelfChallenge();
  try{
    const result=await competitionCallable("submitSelfChallengeAnswer",{
      challengeId:competitionSelfChallengeId,questionIndex,selectedIndex
    });
    competitionApplySelfAnswerResult(result.data||{});
    competitionSelfFeedback={qIndex:questionIndex,selectedIndex,correct:Boolean(result.data?.correct),pointsAwarded:Number(result.data?.pointsAwarded)||0};
  }catch(error){
    showToast(error.message||"ما قدرناش نسجلو الجواب.");
    try{
      const refreshed=await competitionCallable("getSelfChallenge",{challengeId:competitionSelfChallengeId});
      if(refreshed.data?.challenge){
        competitionSelfChallengeData=refreshed.data.challenge;
        competitionQuestionIndex=Number(competitionSelfChallengeData.answeredCount)||0;
        competitionSelfFeedback=null;
      }
    }catch(_refreshError){}
  }finally{
    competitionSelfSubmitting=false;
    renderCompetitionSelfChallenge();
  }
}
async function submitSelfCompetitionUebung(){
  if(competitionSelfSubmitting||competitionSelfFeedback||!competitionSelfChallengeId||!competitionSelfChallengeData)return;
  const questions=competitionSelfChallengeData.questions||[];
  const question=questions[competitionQuestionIndex];
  if(!question?.groupId)return;
  let groupStart=competitionQuestionIndex,groupEnd=competitionQuestionIndex;
  while(groupStart>0&&questions[groupStart-1]?.groupId===question.groupId)groupStart--;
  while(groupEnd<questions.length&&questions[groupEnd]?.groupId===question.groupId)groupEnd++;
  const serverCount=Number(competitionSelfChallengeData.answeredCount)||0;
  for(let index=Math.max(serverCount,groupStart);index<groupEnd;index++){
    if(!Number.isInteger(competitionExerciseSelections[index])){
      showToast("جاوب على جميع جمل Übung قبل التصحيح.");return;
    }
  }
  competitionSelfSubmitting=true;renderCompetitionSelfChallenge();
  let right=0,scored=0,submitted=0;
  try{
    for(let index=Math.max(serverCount,groupStart);index<groupEnd;index++){
      const result=await competitionCallable("submitSelfChallengeAnswer",{
        challengeId:competitionSelfChallengeId,questionIndex:index,selectedIndex:competitionExerciseSelections[index]
      });
      competitionApplySelfAnswerResult(result.data||{});
      right+=result.data?.correct?1:0;
      scored+=Number(result.data?.pointsAwarded)||0;
      submitted++;
    }
    if(competitionSelfChallengeData.status!=="completed"){
      competitionSelfFeedback={groupEnd,correctCount:right,answeredCount:submitted,pointsAwarded:scored};
    }
  }catch(error){
    showToast(error.message||"ما قدرناش نسجلو شي جواب. الأجوبة اللي تسجلات ما تضيعش.");
    try{
      const refreshed=await competitionCallable("getSelfChallenge",{challengeId:competitionSelfChallengeId});
      if(refreshed.data?.challenge){
        competitionSelfChallengeData=refreshed.data.challenge;
        competitionQuestionIndex=Number(competitionSelfChallengeData.answeredCount)||0;
        competitionSelfFeedback=null;
      }
    }catch(_refreshError){}
  }finally{
    competitionSelfSubmitting=false;
    renderCompetitionSelfChallenge();
  }
}
async function leaveSelfCompetition(){
  const challengeId=competitionSelfChallengeId;
  if(challengeId&&competitionSelfChallengeData?.status==="active"){
    try{await competitionCallable("abandonSelfChallenge",{challengeId});}
    catch(error){console.warn("Abandon self challenge:",error);}
  }
  const storageKey=competitionSelfStorageKey();
  if(storageKey)localStorage.removeItem(storageKey);
  competitionSelfChallengeId="";competitionSelfChallengeData=null;competitionSelfFeedback=null;competitionSelfSubmitting=false;
  competitionQuestionIndex=0;
  competitionExerciseSelections={};competitionExerciseDrafts={};competitionExerciseTileDrafts={};
  await loadCompetitionStats();
  if(page==="competition")renderCompetition();
}
function retrySelfCompetition(){
  const challenge=competitionSelfChallengeData;
  if(!challenge)return;
  competitionSelectedLessons=(challenge.lessonIndices||[]).slice();
  competitionSelectedTestTypes={...(challenge.testTypes||{})};
  competitionWholeExercises=challenge.wholeExercises===true;
  competitionQuestionCount=Number(challenge.questionCount)||10;
  competitionExpandedLesson=competitionSelectedLessons[0]??null;
  const storageKey=competitionSelfStorageKey();
  if(storageKey)localStorage.removeItem(storageKey);
  competitionSelfChallengeId="";competitionSelfChallengeData=null;competitionSelfFeedback=null;
  competitionQuestionIndex=0;
  competitionExerciseSelections={};competitionExerciseDrafts={};competitionExerciseTileDrafts={};
  competitionMode="self";
  renderCompetition();
  createSelfCompetition();
}

async function joinCompetition(event){
  if(event)event.preventDefault();
  if(competitionBusy)return;
  if(!firebaseReady||!firebaseAuth?.currentUser){showToast("خاصك تدخل بحساب التلميذ باش تنضم لمنافسة.");return;}
  const code=(document.getElementById("competitionJoinCode")?.value||"").trim().toUpperCase();
  if(!/^[A-Z0-9]{6}$/.test(code)){showToast("دخل رمز صحيح مكوّن من 6 حروف أو أرقام.");return;}
  competitionBusy=true;renderCompetition();
  try{
    const result=await competitionCallable("joinCompetitionRoom",{code});
    competitionRoomCode=code;
    listenCompetitionRoom(result.data.roomId);
  }catch(error){
    console.error("Join competition failed:",error);
    showToast(error.message||"ما قدرناش نلقاو هاد الغرفة أو راه عامرة.");
  }finally{competitionBusy=false;if(page==="competition")renderCompetition();}
}
async function startCompetition(){
  if(!competitionRoomId||competitionBusy||!competitionRoomData||competitionRoomData.status!=="waiting")return;
  if(!competitionIsCreator(competitionRoomData)){
    showToast("غير الحساب اللي صايب الغرفة يقدر يبدأ المنافسة.");
    return;
  }
  if(Object.keys(competitionRoomData.members||{}).length<2)return;
  const roomId=competitionRoomId;
  competitionBusy=true;
  competitionRoomError="";
  renderCompetitionRoom();
  try{
    await competitionCallable("startCompetitionRoom",{roomId});
    if(roomId!==competitionRoomId)return;
    // Don't wait for the 2.5s poll: retrieve the exercises immediately.
    // This also avoids showing "finished" before the server returns questions.
    const result=await competitionCallable("getCompetitionRoom",{roomId});
    if(roomId!==competitionRoomId)return;
    if(!result.data?.room)throw new Error("ما وصلاتناش بيانات التمارين من الخادم.");
    competitionRoomData=result.data.room;
    competitionRoomLastSignature=competitionRoomSignature(result.data.room);
    if(competitionRoomData.status==="waiting"){
      throw new Error("المنافسة ما بداتش من الخادم. جرّب تحديث الغرفة.");
    }
    competitionQuestionIndex=Number(competitionRoomData.members?.[competitionAuthenticatedUid()]?.answeredCount)||0;
    competitionFeedback=null;
    competitionExerciseSelections={};competitionExerciseDrafts={};competitionExerciseTileDrafts={};
  }catch(error){
    console.error("Competition start failed:",error);
    // A repeated Start or a delayed room update may overlap; check server state.
    let alreadyStarted=false;
    try{
      const synced=await competitionCallable("getCompetitionRoom",{roomId});
      if(roomId===competitionRoomId && synced.data?.room?.status!=="waiting" && synced.data?.room?.questions?.length){
        competitionRoomData=synced.data.room;
        competitionRoomLastSignature=competitionRoomSignature(synced.data.room);
        competitionRoomError="";
        alreadyStarted=true;
      }
    }catch(_syncError){}
    if(!alreadyStarted){
      competitionRoomError=error?.message||"ما قدرناش نبداو المنافسة.";
      showToast(competitionRoomError);
    }
  }finally{
    competitionBusy=false;
    if(page==="competition"&&roomId===competitionRoomId)renderCompetitionRoom();
  }
}
async function submitCompetitionUebung(){
  if(competitionSubmitting||competitionFeedback||!competitionRoomId||!competitionRoomData)return;
  const roomId=competitionRoomId;
  const questions=competitionRoomData.questions||[];
  const startIndex=competitionQuestionIndex;
  const question=questions[startIndex];
  if(!question?.groupId)return;
  let groupStart=startIndex,groupEnd=startIndex;
  while(groupStart>0 && questions[groupStart-1]?.groupId===question.groupId)groupStart--;
  while(groupEnd<questions.length && questions[groupEnd]?.groupId===question.groupId)groupEnd++;
  const member=competitionRoomData.members?.[competitionAuthenticatedUid()]||{};
  const serverCount=Number(member.answeredCount)||0;
  for(let index=Math.max(serverCount,groupStart);index<groupEnd;index++){
    if(!Number.isInteger(competitionExerciseSelections[index])){
      showToast("جاوب على جميع جمل Übung قبل التصحيح.");return;
    }
  }
  competitionSubmitting=true;
  renderCompetitionRoom();
  let right=0,scored=0,submitted=0;
  try{
    for(let index=Math.max(serverCount,groupStart);index<groupEnd;index++){
      // All answers are checked securely in Supabase, just as in single-question mode.
      const result=await competitionCallable("submitCompetitionAnswer",{
        roomId,questionIndex:index,selectedIndex:competitionExerciseSelections[index]
      });
      right+=result.data.correct?1:0;
      scored+=Number(result.data.pointsAwarded)||0;
      submitted++;
      const stateMember=competitionRoomData?.members?.[competitionAuthenticatedUid()];
      if(stateMember){
        stateMember.answeredCount=index+1;
        stateMember.score=Number(result.data.score)||0;
        stateMember.correctCount=(Number(stateMember.correctCount)||0)+(result.data.correct?1:0);
        stateMember.finished=Boolean(result.data.finished);
      }
    }
    competitionFeedback={groupEnd,correctCount:right,answeredCount:submitted,
      pointsAwarded:scored};
  }catch(error){
    showToast(error.message||"ما قدرناش نسجلو شي جواب. الأجوبة اللي تسجلات ما تضيعش.");
    // Return to the first unanswered question in the same Übung on refresh.
    competitionFeedback=null;
  }finally{
    competitionSubmitting=false;
    renderCompetitionRoom();
  }
}
async function submitCompetitionChoice(selectedIndex){
  if(competitionSubmitting||competitionFeedback||!competitionRoomId)return;
  if(!Number.isInteger(selectedIndex)||selectedIndex<0||selectedIndex>3)return;
  competitionSubmitting=true;renderCompetitionRoom();
  const questionIndex=competitionQuestionIndex;
  try{
    const result=await competitionCallable("submitCompetitionAnswer",{
      roomId:competitionRoomId,questionIndex,selectedIndex
    });
    competitionFeedback={
      qIndex:questionIndex,selectedIndex,correct:Boolean(result.data.correct),
      pointsAwarded:Number(result.data.pointsAwarded)||0
    };
  }catch(error){
    showToast(error.message||"ما قدرناش نسجلو الجواب.");
  }finally{competitionSubmitting=false;renderCompetitionRoom();}
}
async function finishCompetition(){
  if(!competitionRoomId)return;
  try{await competitionCallable("finishCompetitionRoom",{roomId:competitionRoomId});}
  catch(error){showToast(error.message||"ما قدرناش نساليو المنافسة.");}
}
async function leaveCompetition(){
  if(competitionRoomId){
    try{await competitionCallable("leaveCompetitionRoom",{roomId:competitionRoomId});}
    catch(error){console.warn("Leave competition:",error);}
  }
  stopCompetitionRoomListener();
  competitionRoomId=null;competitionRoomCode="";competitionRoomData=null;
  competitionQuestionIndex=0;competitionFeedback=null;competitionSubmitting=false;
  competitionRoomError="";
  competitionExerciseSelections={};competitionExerciseDrafts={};competitionExerciseTileDrafts={};
  await loadCompetitionStats();
  if(page==="competition")renderCompetition();
}
async function copyCompetitionCode(){
  const code=competitionRoomCode||competitionRoomData?.code||"";
  if(!code){showToast("رمز الغرفة مازال ما تجهزش.");return;}
  try{
    await navigator.clipboard.writeText(code);
    showToast("تنسخ رمز المنافسة. صيفطو لصاحبك!");
  }catch(error){
    window.prompt("نسخ رمز المنافسة:",code);
  }
}
async function shareCompetitionCode(){
  const code=competitionRoomCode||competitionRoomData?.code||"";
  if(!code){showToast("رمز الغرفة مازال ما تجهزش.");return;}
  const text=`انضم للمنافسة ديالي في Deutsch A1. استعمل الرمز: ${code}`;
  if(navigator.share){
    try{await navigator.share({title:"منافسة Deutsch A1",text});return;}
    catch(error){if(error?.name==="AbortError")return;}
  }
  await copyCompetitionCode();
}

function renderSessions(){
  const sessions = [
    {id:"a1-intro",level:"A1",title:"Sich vorstellen auf Deutsch",desc:"تدرّب على التعارف وتقديم النفس والأسئلة الأساسية.",tag:"للمبتدئين",duration:"15–20 دقيقة",icon:"👋"},
    {id:"a1-restaurant",level:"A1",title:"Im Restaurant bestellen",desc:"اطلب الطعام والشراب وتدرّب على حوار المطعم.",tag:"محادثة يومية",duration:"20 دقيقة",icon:"☕"},
    {id:"a2-weekend",level:"A2",title:"Mein Wochenende erzählen",desc:"احكِ على عطلة نهاية الأسبوع باستعمال الماضي.",tag:"A2",duration:"25 دقيقة",icon:"🌤️"}
  ];
  let booked = [];
  try{booked = JSON.parse(localStorage.getItem(`deutsch_a1_sessions_v1_${currentUser?.id||"guest"}`)||"[]");if(!Array.isArray(booked))booked=[];}catch(error){}
  const cards = sessions.map(session=>`
    <article class="session-card"><div class="session-card-top"><span class="session-icon">${session.icon}</span><span class="session-level">${session.level}</span></div><span class="session-tag">${session.tag}</span><h3>${session.title}</h3><p>${session.desc}</p><div class="session-meta"><span>⏱ ${session.duration}</span><span>💬 محادثة جماعية</span></div><button type="button" class="session-book-btn ${booked.includes(session.id)?"booked":""}" data-action="session-book" data-session="${session.id}">${booked.includes(session.id)?"✓ سُجّل اهتمامك":"سجّل اهتمامك"}</button></article>`).join("");
  const content = `
    <section class="sessions-intro-card"><span class="sessions-intro-icon">👥</span><div><h2>تدرّب مع متعلمين آخرين</h2><p>اختر موضوعاً مناسباً لمستواك واستعدّ للمحادثة بالألمانية.</p></div></section>
    <div class="dashboard-section-head"><div><span class="section-overline">تدريب جماعي</span><h2>جلسات مقترحة</h2></div><span class="demo-pill">نموذج تجريبي</span></div>
    <div class="sessions-grid">${cards}</div>
    <p class="feature-limit-note">هذه بطاقات نموذجية للتصميم فقط. التسجيل هنا يُحفظ على هذا الجهاز ولا ينشئ جلسة حقيقية أو اتصال فيديو. الجلسات المباشرة تحتاج خدمة حضور/فيديو وخادماً لإدارة المشاركين.</p>
  `;
  app.innerHTML = pageShell("الجلسات","جلسات مباشرة مع متعلمين","تكلّم مع أشخاص في نفس مستواك وتدرّب على مواقف الحياة اليومية.",content);
}
function bookDemoSession(sessionId){
  const key = `deutsch_a1_sessions_v1_${currentUser?.id||"guest"}`;
  let booked = [];
  try{booked = JSON.parse(localStorage.getItem(key)||"[]");if(!Array.isArray(booked))booked=[];}catch(error){}
  if(!booked.includes(sessionId)) booked.push(sessionId);
  localStorage.setItem(key,JSON.stringify(booked));
  renderSessions();
  showToast("تم حفظ اهتمامك بهذه الجلسة على هذا الجهاز فقط.");
}
const communityRooms = [
  {id:"general",title:"الغرفة العامة",level:"كل المستويات",emoji:"💬",desc:"أسئلة ومساعدة عامة"},
  {id:"A1",title:"غرفة A1",level:"مبتدئ",emoji:"🌱",desc:"تدرّب على الأساسيات"},
  {id:"A2",title:"غرفة A2",level:"مبتدئ متقدم",emoji:"🌿",desc:"تواصل في الحياة اليومية"},
  {id:"B1",title:"غرفة B1",level:"متوسط",emoji:"🌳",desc:"شارك تجاربك وآراءك"},
  {id:"B2",title:"غرفة B2",level:"فوق المتوسط",emoji:"🏔️",desc:"ناقش مواضيع متنوعة"},
  {id:"C1",title:"غرفة C1",level:"متقدم",emoji:"🚀",desc:"لغة مهنية وأكاديمية"},
  {id:"C2",title:"غرفة C2",level:"إتقان",emoji:"👑",desc:"نقاشات متقدمة وإتقان اللغة"}
];
function communityStorageKey(roomId){
  return `deutsch_a1_community_v1_${currentUser?.id||"guest"}_${roomId}`;
}
function loadCommunityMessages(roomId){
  try{
    const messages = JSON.parse(localStorage.getItem(communityStorageKey(roomId))||"[]");
    return Array.isArray(messages)?messages:[];
  }catch(error){return [];}
}
function renderCommunity(){
  const content = communityRoom ? (()=>{
    const room = communityRooms.find(item=>item.id===communityRoom) || communityRooms[0];
    const messages = loadCommunityMessages(room.id);
    const feed = messages.length ? messages.map(message=>`<article class="community-message"><strong>${escapeHtml(message.author)}</strong><p>${escapeHtml(message.text)}</p><small>${escapeHtml(message.time||"")}</small></article>`).join("") : `<div class="community-empty"><span>🌱</span><strong>بداية نقاش جديد</strong><p>مازال ما كايناش رسائل محفوظة في هاد الغرفة على هذا الجهاز. ابدأ أول نقاش!</p></div>`;
    return `<section class="community-room-head"><button type="button" class="community-back-btn" data-action="community-back">→ الغرف</button><span>${room.emoji}</span><div><h2>${room.title}</h2><p>${room.level}</p></div></section><div class="community-feed">${feed}</div><form id="communityForm" class="community-composer"><input id="communityInput" type="text" maxlength="500" placeholder="اكتب رسالة..." aria-label="رسالة المجتمع"><button type="submit">إرسال</button></form>`;
  })() : `
    <section class="community-feature-grid"><article class="community-feature-card"><span>💬</span><h2>الغرفة العامة</h2><p>تبادل الأسئلة والنصائح مع جميع المستويات.</p><button data-action="community-open-room" data-room="general">فتح الغرفة ←</button></article><article class="community-feature-card private"><span>✉️</span><h2>رسائلي الخاصة</h2><p>محادثات خاصة مع أصدقائك في المنصة.</p><span class="coming-soon-label">تحتاج تفعيل المراسلة</span></article></section>
    <div class="dashboard-section-head"><div><span class="section-overline">تعلّم مع الآخرين</span><h2>غرف المستويات</h2></div></div>
    <div class="community-room-grid">${communityRooms.filter(room=>room.id!=="general").map(room=>`<button class="community-room-card ${room.id==="A1"?"current":""}" data-action="community-open-room" data-room="${room.id}"><span>${room.emoji}</span><strong>${room.title}</strong><small>${room.level}</small><b>${room.desc} ←</b></button>`).join("")}</div>`;
  app.innerHTML = pageShell("مجتمع المتعلمين","مجتمع لكل مستوى","اسأل، شارك، وتعلّم مع أشخاص يدرسون الألمانية مثلك.",`${content}<p class="feature-limit-note">المجتمع في هذه النسخة تجريبي ومحلي: الرسائل تُحفظ في متصفحك فقط ولا تصل إلى متعلمين آخرين. تفعيل المحادثات المشتركة يتطلب إعداد صلاحيات Firebase وقواعد حماية للغرف والرسائل.</p>`);
}
function sendCommunityMessage(event){
  if(event) event.preventDefault();
  const input = document.getElementById("communityInput");
  const text = input ? input.value.trim() : "";
  if(!text || !communityRoom) return;
  const messages = loadCommunityMessages(communityRoom);
  messages.push({author:currentUser?.name||"أنا",text,time:new Date().toLocaleString("ar-MA")});
  localStorage.setItem(communityStorageKey(communityRoom),JSON.stringify(messages.slice(-100)));
  renderCommunity();
}
// Settings V10: separate full-screen pages, with independent saved language choices.
// The UI language applies to the Settings screens (not unrelated app screens).
const SETTINGS_LANGUAGES = {ar:"العربية",fr:"Français",en:"English"};
let settingsActivePanel = "account";
const SETTINGS_DICTIONARY = {
 ar:{
  settings:"الإعدادات",subtitle:"حسابك وتفضيلات التعلّم",back:"رجوع",settingsDesc:"اختار القسم اللي بغيتي تبدّل فيه الإعدادات.",
  studentProfile:"ملف المتعلّم",welcome:"مرحبا بك",currentLevel:"المستوى الحالي",learnComfort:"تعلّم على راحتك",level:"المستوى",uiLanguage:"لغة الإعدادات",accountType:"نوع الحساب",student:"متعلّم",
  account:"الحساب",accountTitle:"معلومات الحساب",accountDesc:"تفاصيل الحساب والمستوى",preferences:"التفضيلات",learnTitle:"إعدادات التعلّم",learnDesc:"اللغة والترجمة",display:"سهولة القراءة",displayTitle:"حجم الكتابة والأيقونات",displayDesc:"حجم مناسب لشاشتك",open:"فتح",name:"الاسم",email:"البريد الإلكتروني",role:"الدور",availableLevel:"المستوى المتاح حالياً",lessons:"10 دروس",
  uiLabel:"لغة واجهة الإعدادات",uiHelp:"يمكنك تبديل اللغة المستعملة داخل صفحات الإعدادات دون تغيير لغة الدرس الألماني.",translationLabel:"لغة ترجمة الدروس",translationHelp:"تُحفظ لغة الترجمة المفضلة بشكل مستقل وتُرسل لصفحات الدروس. الترجمات الأصلية المدمجة في صفحات HTML القديمة ستظل كما هي حتى تتوفر لها نسخ مترجمة.",langSaved:"تم حفظ اختيار اللغة.",displayHelp:"اختار الحجم اللي مريح لعينيك. التغيير كيتطبّق مباشرة على صفحات المنصة والتمارين وكيبقى محفوظ.",textSize:"حجم الكتابة",iconSize:"حجم الأيقونات",smaller:"أصغر",larger:"أكبر",reset:"إرجاع الحجم الافتراضي",logout:"تسجيل الخروج",saved:"التعديلات كتتحفظ تلقائياً على هاد الجهاز.",fullscreenHint:"صفحة مستقلة بعرض الشاشة كامل",choice:"اختار اللغة"
 },
 fr:{
  settings:"Paramètres",subtitle:"Compte et préférences d'apprentissage",back:"Retour",settingsDesc:"Choisissez une rubrique pour modifier ses paramètres.",
  studentProfile:"Profil de l'apprenant",welcome:"Bienvenue",currentLevel:"Niveau actuel",learnComfort:"Apprenez à votre rythme",level:"Niveau",uiLanguage:"Langue des paramètres",accountType:"Type de compte",student:"Apprenant",
  account:"Compte",accountTitle:"Informations du compte",accountDesc:"Coordonnées et niveau",preferences:"Préférences",learnTitle:"Préférences d'apprentissage",learnDesc:"Langue et traduction",display:"Lisibilité",displayTitle:"Taille du texte et des icônes",displayDesc:"Adapter l'affichage",open:"Ouvrir",name:"Nom",email:"Adresse e-mail",role:"Rôle",availableLevel:"Niveau accessible",lessons:"10 leçons",
  uiLabel:"Langue de l'interface des paramètres",uiHelp:"Changez la langue des écrans Paramètres sans modifier l'allemand des leçons.",translationLabel:"Langue de traduction des leçons",translationHelp:"Votre préférence de traduction est enregistrée et transmise aux leçons. Les anciennes pages HTML gardent leur traduction intégrée tant qu'une version traduite n'est pas disponible.",langSaved:"Préférence de langue enregistrée.",displayHelp:"Choisissez la taille la plus confortable. Les changements s'appliquent immédiatement et sont enregistrés.",textSize:"Taille du texte",iconSize:"Taille des icônes",smaller:"Plus petit",larger:"Plus grand",reset:"Rétablir les tailles par défaut",logout:"Se déconnecter",saved:"Vos préférences sont enregistrées automatiquement sur cet appareil.",fullscreenHint:"Écran indépendant en plein écran",choice:"Choisir une langue"
 },
 en:{
  settings:"Settings",subtitle:"Account and learning preferences",back:"Back",settingsDesc:"Choose a section to customize its settings.",
  studentProfile:"Learner profile",welcome:"Welcome",currentLevel:"Current level",learnComfort:"Learn at your own pace",level:"Level",uiLanguage:"Settings language",accountType:"Account type",student:"Learner",
  account:"Account",accountTitle:"Account information",accountDesc:"Your account and level",preferences:"Preferences",learnTitle:"Learning settings",learnDesc:"Languages and translation",display:"Readability",displayTitle:"Text and icon size",displayDesc:"Adjust your display",open:"Open",name:"Name",email:"Email address",role:"Role",availableLevel:"Available level",lessons:"10 lessons",
  uiLabel:"Settings interface language",uiHelp:"Change the language used on Settings screens without changing the German lesson material.",translationLabel:"Lesson translation language",translationHelp:"Your preferred translation language is saved and sent to lesson pages. Existing hard-coded translations in older HTML lessons remain unchanged until translated versions are available.",langSaved:"Language preference saved.",displayHelp:"Choose a comfortable text and icon size. Changes apply immediately and remain saved.",textSize:"Text size",iconSize:"Icon size",smaller:"Smaller",larger:"Larger",reset:"Restore default sizes",logout:"Log out",saved:"Changes are automatically saved on this device.",fullscreenHint:"Separate full-screen page",choice:"Choose language"
 }
};
function settingsPrefStorageKey(){return `deutsch_a1_settings_languages_v1_${currentUser?.id||"guest"}`;}
function readSettingsLanguages(){
 let data={};
 try{data=JSON.parse(localStorage.getItem(settingsPrefStorageKey())||"{}");}catch(error){}
 return {ui:SETTINGS_LANGUAGES[data.ui]?data.ui:"ar",translation:SETTINGS_LANGUAGES[data.translation]?data.translation:"ar"};
}
function saveSettingsLanguages(prefs){
 const cleaned={ui:SETTINGS_LANGUAGES[prefs.ui]?prefs.ui:"ar",translation:SETTINGS_LANGUAGES[prefs.translation]?prefs.translation:"ar"};
 try{
  localStorage.setItem(settingsPrefStorageKey(),JSON.stringify(cleaned));
  // This global key makes the translation preference available to standalone lesson HTML files.
  localStorage.setItem("deutsch_a1_translation_language_v1",cleaned.translation);
 }catch(error){}
 broadcastSettingsTranslationLanguage(cleaned);
}
function broadcastSettingsTranslationLanguage(prefs=readSettingsLanguages()){
 document.querySelectorAll("iframe").forEach(frame=>{
  try{frame.contentWindow.postMessage({type:"deutsch-a1-language-preferences",settingsLanguage:prefs.ui,translationLanguage:prefs.translation},"*");}catch(error){}
 });
}
function settingsStrings(){return SETTINGS_DICTIONARY[readSettingsLanguages().ui];}
function settingsLanguageOptions(selected){return Object.entries(SETTINGS_LANGUAGES).map(([code,label])=>`<option value="${code}" ${code===selected?"selected":""}>${label}</option>`).join("");}
// V30: local per-student preferences for the reference-style settings dashboard.
// Notifications and reminders here are *preferences*, not browser push subscriptions.
const SETTINGS_DASHBOARD_COPY={
 ar:{back:"رجوع",header:"الإعدادات",student:"حساب المتعلم",tagline:"خصص تجربتك وتحكم في التطبيق",account:"الحساب",accountDesc:"إدارة حسابك وبياناتك",language:"اللغة",languageDesc:"لغة صفحات الإعدادات",translation:"الترجمة",translationDesc:"ترجمة الكلمات والعبارات",notifications:"الإشعارات",notificationsDesc:"تفضيل التنبيهات والتحديثات",sound:"الصوت",soundDesc:"تشغيل نطق الكلمات والأمثلة",dark:"الوضع الليلي",darkDesc:"ألوان هادئة للقراءة ليلاً",reminders:"التذكيرات اليومية",remindersDesc:"تفضيل تذكيرات المذاكرة",privacy:"الخصوصية",privacyDesc:"معلومات البيانات والصلاحيات",help:"المساعدة",helpDesc:"إرشادات استعمال التطبيق",logout:"تسجيل الخروج",logoutDesc:"الخروج من حسابك الحالي",helpTitle:"كيف تستعمل الإعدادات؟",privacyTitle:"خصوصية معلوماتك",saved:"تُحفظ تفضيلات هذه الصفحة على جهازك",notes:"التنبيهات والتذكيرات التلقائية تحتاج تفعيل خدمة إشعارات منفصلة."},
 fr:{back:"Retour",header:"Paramètres",student:"Compte élève",tagline:"Personnalisez votre expérience d'apprentissage",account:"Compte",accountDesc:"Gérer votre profil",language:"Langue",languageDesc:"Langue des paramètres",translation:"Traduction",translationDesc:"Langue des traductions",notifications:"Notifications",notificationsDesc:"Préférence de notifications",sound:"Audio",soundDesc:"Prononciation des mots et exemples",dark:"Mode sombre",darkDesc:"Affichage sombre pour le soir",reminders:"Rappels quotidiens",remindersDesc:"Préférence de rappels",privacy:"Confidentialité",privacyDesc:"Informations sur vos données",help:"Aide",helpDesc:"Guide d'utilisation",logout:"Déconnexion",logoutDesc:"Quitter votre compte",helpTitle:"Comment utiliser les paramètres ?",privacyTitle:"Confidentialité",saved:"Préférences enregistrées sur cet appareil",notes:"L'envoi automatique de notifications requiert un service de notifications."},
 en:{back:"Back",header:"Settings",student:"Student account",tagline:"Personalize your learning experience",account:"Account",accountDesc:"Manage your profile",language:"Language",languageDesc:"Settings interface language",translation:"Translation",translationDesc:"Translation language",notifications:"Notifications",notificationsDesc:"Notification preference",sound:"Sound",soundDesc:"German word and example pronunciation",dark:"Dark mode",darkDesc:"Comfortable evening colors",reminders:"Daily reminders",remindersDesc:"Reminder preference",privacy:"Privacy",privacyDesc:"Your data and permissions",help:"Help",helpDesc:"How to use the app",logout:"Log out",logoutDesc:"Sign out of your account",helpTitle:"How to use Settings",privacyTitle:"Privacy information",saved:"Preferences are saved on this device",notes:"Automatic notifications and reminders require a separate notification service."}
};
function settingsDashboardStorageKey(){return `deutsch_a1_dashboard_preferences_v30_${currentUser?.id||"guest"}`;}
function readSettingsDashboardPrefs(){
 const defaults={notifications:false,sound:true,dark:false,reminders:false};
 try{
   const raw=JSON.parse(localStorage.getItem(settingsDashboardStorageKey())||"{}");
   if(raw&&typeof raw==="object")for(const k of Object.keys(defaults))if(typeof raw[k]==="boolean")defaults[k]=raw[k];
 }catch(e){}
 return defaults;
}
function saveSettingsDashboardPrefs(prefs){
 try{localStorage.setItem(settingsDashboardStorageKey(),JSON.stringify(prefs));}catch(e){}
}
function applySettingsDashboardTheme(){
 document.documentElement.classList.toggle("deutsch-night-mode",!!currentUser&&readSettingsDashboardPrefs().dark);
}
function settingsDashboardSwitch(key,label,description,icon,tone,active){
 return `<div class="settings-v30-setting">
   <span class="settings-v30-setting-icon settings-v30-tone-${tone}" aria-hidden="true">${icon}</span>
   <div class="settings-v30-setting-copy"><strong>${escapeHtml(label)}</strong><small>${escapeHtml(description)}</small></div>
   <button type="button" role="switch" aria-checked="${active?"true":"false"}" aria-label="${escapeHtml(label)}" class="settings-v30-toggle ${active?"is-on":""}" data-action="settings-v30-toggle" data-pref="${key}"><span></span></button>
 </div>`;
}
function settingsDashboardRow(label,description,icon,tone,panel,focus=""){
 return `<button type="button" class="settings-v30-link" data-action="settings-open-panel" data-panel="${panel}" ${focus?`data-focus="${focus}"`:""}>
  <span class="settings-v30-link-icon settings-v30-tone-${tone}" aria-hidden="true">${icon}</span>
  <span class="settings-v30-link-copy"><strong>${escapeHtml(label)}</strong><small>${escapeHtml(description)}</small></span>
  <span class="settings-v30-chevron" aria-hidden="true">‹</span>
 </button>`;
}
function settingsSectionCards(t){
 const sections=[
  {id:"account",icon:"👤",tone:"blue",eyebrow:t.account,title:t.accountTitle,desc:t.accountDesc},
  {id:"learning",icon:"📖",tone:"purple",eyebrow:t.preferences,title:t.learnTitle,desc:t.learnDesc},
  {id:"display",icon:"⚙",tone:"orange",eyebrow:t.display,title:t.displayTitle,desc:t.displayDesc}
 ];
 return sections.map(item=>`<button type="button" class="settings-ref-panel settings-section-open" data-action="settings-open-panel" data-panel="${item.id}" aria-label="${escapeHtml(item.open+': '+item.title)}"><span class="settings-ref-panel-icon settings-ref-panel-icon-${item.tone}" aria-hidden="true">${item.icon}</span><span class="settings-section-open-copy"><small class="settings-ref-panel-eyebrow">${escapeHtml(item.eyebrow)}</small><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.desc)}</small></span><span class="settings-section-chevron" aria-hidden="true">‹</span></button>`).join("");
}
function renderSettings(){
 const prefs=readSettingsLanguages(),lang=prefs.ui,dir=lang==="ar"?"rtl":"ltr";
 const t=SETTINGS_DASHBOARD_COPY[lang]||SETTINGS_DASHBOARD_COPY.ar;
 const toggles=readSettingsDashboardPrefs();
 const userName=escapeHtml(currentStudentProfile?.name||currentUser?.name||"Sara");
 const initials=escapeHtml(String(currentUser?.name||"S").trim().charAt(0).toUpperCase()||"S");
 const content=`<main class="settings-v30-screen" lang="${lang}" dir="${dir}" role="main">
   <div class="settings-v30-layout">
     <header class="settings-v30-top">
       <div class="settings-v30-person"><span class="settings-v30-person-avatar">${initials}</span><div><strong>${userName}</strong><small>${escapeHtml(t.student)} <i aria-hidden="true"></i></small></div></div>
       <div class="settings-v30-top-actions"><button type="button" class="settings-v30-icon-button" data-action="student-notifications" aria-label="${escapeHtml(t.notifications)}">♧</button><button type="button" class="settings-v30-back" data-action="back" aria-label="${escapeHtml(t.back)}">${lang==="ar"?"→":"←"} ${escapeHtml(t.back)}</button></div>
     </header>
     <section class="settings-v30-hero" aria-label="${escapeHtml(t.header)}">
       <span class="settings-v30-hero-mark" aria-hidden="true">⚙</span>
       <div class="settings-v30-hero-copy"><h1>${escapeHtml(t.header)}</h1><p>${escapeHtml(t.tagline)}</p></div>
       <span class="settings-v30-hero-books" aria-hidden="true">📚</span>
     </section>
     <nav class="settings-v30-links" aria-label="${escapeHtml(t.header)}">
       ${settingsDashboardRow(t.account,t.accountDesc,"👤","violet","account")}
       <div class="settings-v30-split">
         ${settingsDashboardRow(t.language,t.languageDesc,"🌐","blue","learning","settingsUiLanguage")}
         ${settingsDashboardRow(t.translation,t.translationDesc,"🈯","mint","learning","settingsTranslationLanguage")}
       </div>
     </nav>
     <section class="settings-v30-toggles" aria-label="${escapeHtml(t.header)}">
       ${settingsDashboardSwitch("notifications",t.notifications,t.notificationsDesc,"🔔","pink",toggles.notifications)}
       ${settingsDashboardSwitch("sound",t.sound,t.soundDesc,"🔊","orange",toggles.sound)}
       ${settingsDashboardSwitch("dark",t.dark,t.darkDesc,"☾","indigo",toggles.dark)}
       ${settingsDashboardSwitch("reminders",t.reminders,t.remindersDesc,"▦","amber",toggles.reminders)}
     </section>
     <nav class="settings-v30-links" aria-label="${escapeHtml(t.header)}">
       ${settingsDashboardRow(t.privacy,t.privacyDesc,"🛡️","mint","privacy")}
       ${settingsDashboardRow(t.help,t.helpDesc,"?","violet","help")}
     </nav>
     <button type="button" class="settings-v30-signout" data-action="logout"><span class="settings-v30-link-icon settings-v30-tone-pink" aria-hidden="true">↪</span><span><strong>${escapeHtml(t.logout)}</strong><small>${escapeHtml(t.logoutDesc)}</small></span></button>
     <p class="settings-v30-footnote">${escapeHtml(t.saved)}. ${escapeHtml(t.notes)}</p>
   </div>
 </main>`;
 app.innerHTML=content;
}
function renderSettingsDetail(){
 const prefs=readSettingsLanguages(),t=SETTINGS_DICTIONARY[prefs.ui];
 const rtl=prefs.ui==="ar",dir=rtl?"rtl":"ltr";
 const profile=currentStudentProfile||{};
 const displayPrefs=readUiDisplayPreferences();
 const textPercent=Math.round(displayPrefs.textScale*100),iconPercent=Math.round(displayPrefs.iconScale*100);
 const section=settingsActivePanel;
 const meta={account:{name:t.accountTitle,eyebrow:t.account,icon:"👤",tone:"blue"},learning:{name:t.learnTitle,eyebrow:t.preferences,icon:"🌐",tone:"purple"},display:{name:t.displayTitle,eyebrow:t.display,icon:"⚙",tone:"orange"},privacy:{name:SETTINGS_DASHBOARD_COPY[prefs.ui].privacyTitle,eyebrow:SETTINGS_DASHBOARD_COPY[prefs.ui].privacy,icon:"🛡️",tone:"blue"},help:{name:SETTINGS_DASHBOARD_COPY[prefs.ui].helpTitle,eyebrow:SETTINGS_DASHBOARD_COPY[prefs.ui].help,icon:"❔",tone:"purple"}}[section]||{name:t.accountTitle,eyebrow:t.account,icon:"👤",tone:"blue"};
 let body="";
 if(section==="account")body=`<section class="settings-detail-card"><div class="settings-detail-user"><span class="settings-ref-avatar">${escapeHtml((currentUser?.name||"S").slice(0,1).toUpperCase())}</span><div><strong>${escapeHtml(currentUser?.name||t.student)}</strong><small dir="auto">${escapeHtml(profile.email||currentUser?.email||"—")}</small></div></div>
  <div class="settings-ref-list settings-list"><div class="settings-ref-list-row"><span>${escapeHtml(t.name)}</span><strong>${escapeHtml(profile.name||currentUser?.name||"—")}</strong></div><div class="settings-ref-list-row"><span>${escapeHtml(t.email)}</span><strong dir="auto">${escapeHtml(profile.email||currentUser?.email||"—")}</strong></div><div class="settings-ref-list-row"><span>${escapeHtml(t.role)}</span><strong>${escapeHtml(t.student)}</strong></div><div class="settings-ref-list-row"><span>${escapeHtml(t.availableLevel)}</span><strong>A1 · ${escapeHtml(t.lessons)}</strong></div></div></section>`;
 if(section==="learning")body=`<section class="settings-detail-card"><div class="settings-detail-field"><span class="settings-detail-field-icon">🌐</span><label for="settingsUiLanguage">${escapeHtml(t.uiLabel)}</label><select id="settingsUiLanguage" class="settings-language-select" aria-label="${escapeHtml(t.uiLabel)}">${settingsLanguageOptions(prefs.ui)}</select><p>${escapeHtml(t.uiHelp)}</p></div><div class="settings-detail-field"><span class="settings-detail-field-icon">🗣️</span><label for="settingsTranslationLanguage">${escapeHtml(t.translationLabel)}</label><select id="settingsTranslationLanguage" class="settings-language-select" aria-label="${escapeHtml(t.translationLabel)}">${settingsLanguageOptions(prefs.translation)}</select><p>${escapeHtml(t.translationHelp)}</p><div class="settings-translation-preview"><span lang="de">Guten Morgen!</span><span aria-hidden="true">→</span><strong lang="${prefs.translation}">${escapeHtml({ar:"صباح الخير!",fr:"Bonjour !",en:"Good morning!"}[prefs.translation])}</strong></div></div></section>`;
 if(section==="display")body=`<section class="settings-detail-card ui-display-settings"><p class="ui-display-intro">${escapeHtml(t.displayHelp)}</p><div class="ui-scale-control"><div class="ui-scale-heading"><label for="uiTextScale">${escapeHtml(t.textSize)}</label><output id="uiTextScaleValue" for="uiTextScale">${textPercent}%</output></div><input class="ui-scale-slider" id="uiTextScale" type="range" min="90" max="130" step="1" value="${textPercent}"><div class="ui-scale-hints"><span>${escapeHtml(t.smaller)}</span><span>${escapeHtml(t.larger)}</span></div></div><div class="ui-scale-control"><div class="ui-scale-heading"><label for="uiIconScale">${escapeHtml(t.iconSize)}</label><output id="uiIconScaleValue" for="uiIconScale">${iconPercent}%</output></div><input class="ui-scale-slider" id="uiIconScale" type="range" min="90" max="140" step="1" value="${iconPercent}"><div class="ui-scale-hints"><span>${escapeHtml(t.smaller)}</span><span>${escapeHtml(t.larger)}</span></div></div><button type="button" class="ui-display-reset-btn" data-action="ui-reset-display">↺ ${escapeHtml(t.reset)}</button></section>`;
 if(section==="privacy")body=`<section class="settings-detail-card settings-v30-information"><h2>${escapeHtml(meta.name)}</h2><p>${prefs.ui==="ar"?"تُحفظ تفضيلات العرض والصوت في هذا المتصفح لحسابك الحالي. قد تُحفظ نتائج الدروس والتقدم على خادم المنصة عند اتصال التطبيق بحسابك. لا تُعرض هذه البيانات في صفحة الإعدادات لأشخاص آخرين.":prefs.ui==="fr"?"Les préférences d'affichage et de son sont enregistrées sur cet appareil. Les résultats de progression peuvent être stockés par votre compte en ligne.":"Display and audio preferences are saved in this browser. Your lesson progress may be stored with your online account."}</p><p>${prefs.ui==="ar"?"للتفاصيل حول تخزين بيانات التعلّم أو طلب حذفها، تواصل مع إدارة المنصة. تسجيل الخروج لا يحذف بياناتك تلقائياً.":prefs.ui==="fr"?"Pour les détails ou la suppression des données, contactez l'administration. Se déconnecter ne supprime pas vos résultats.":"For data details or deletion, contact the platform administrator. Signing out does not delete your results."}</p></section>`;
 if(section==="help")body=`<section class="settings-detail-card settings-v30-information"><h2>${escapeHtml(meta.name)}</h2><p>${prefs.ui==="ar"?"لتغيير اللغة والترجمة، ارجع للإعدادات واختر القسم المناسب. لتغيير حجم الخط والأيقونات يمكنك استعمال خيارات سهولة القراءة. زر الصوت يتحكم في النطق الآلي المدعوم داخل التطبيق.":prefs.ui==="fr"?"Modifiez les langues depuis Paramètres. Les tailles de texte et d'icônes restent réglables. Le bouton audio contrôle la prononciation intégrée.":"Change languages from Settings. Text and icon scaling remain available. The sound switch controls supported spoken pronunciation."}</p><button type="button" class="settings-v30-help-action" data-action="settings-open-panel" data-panel="display">${escapeHtml(t.displayTitle)}</button><p>${escapeHtml(SETTINGS_DASHBOARD_COPY[prefs.ui].notes)}</p></section>`;
 app.innerHTML=`<main class="settings-detail-screen" lang="${prefs.ui}" dir="${dir}" role="main"><div class="settings-detail-layout"><header class="settings-detail-topbar"><button type="button" class="settings-detail-back" data-action="settings-back" aria-label="${escapeHtml(t.back)}"><span aria-hidden="true">${rtl?'→':'←'}</span>${escapeHtml(t.back)}</button><span class="settings-detail-topbar-label">${escapeHtml(t.settings)}</span></header><div class="settings-detail-hero"><div class="settings-ref-panel-icon settings-ref-panel-icon-${meta.tone}" aria-hidden="true">${meta.icon}</div><span>${escapeHtml(meta.eyebrow)}</span><h1>${escapeHtml(meta.name)}</h1><p>${escapeHtml(t.fullscreenHint)}</p></div>${body}<p class="settings-detail-saved">✓ ${escapeHtml(t.saved)}</p></div></main>`;
}

function renderLogin(){
  app.innerHTML = `<main class="auth-page" dir="rtl">
    <section class="auth-card">
      <div class="auth-logo"><img src="assets/images/brand-logo.jpg" alt="شعار المنصة"></div>
      <div class="auth-kicker">DEUTSCH · A1–C2</div>
      <h1>مرحباً بعودتك 👋</h1>
      <p class="auth-subtitle">سجّل الدخول باش تكمّل رحلتك في تعلّم الألمانية.</p>
      <form id="loginForm" class="auth-form">
        <label for="loginEmail">البريد الإلكتروني</label><input id="loginEmail" type="email" autocomplete="username" placeholder="name@example.com" required>
        <label for="loginPassword">كلمة المرور</label><input id="loginPassword" type="password" autocomplete="current-password" placeholder="أدخل كلمة المرور" required>
        <button type="submit" class="primary-btn auth-submit">تسجيل الدخول <span class="arrow">←</span></button>
      </form>
      <p id="loginMessage" class="auth-message" role="status"></p>
      <div class="auth-help">حساب المتعلّم يتم إنشاؤه من طرف الإدارة.</div>
    </section>
  </main>`;
}
function setLoginMessage(message){ const node=document.getElementById("loginMessage"); if(node) node.textContent=message; }
async function loginFromForm(){
  const email=(document.getElementById("loginEmail")?.value || "").trim().toLowerCase();
  const password=document.getElementById("loginPassword")?.value || "";
  if(!email || !password){ setLoginMessage("Bitte E-Mail und Passwort eingeben."); return; }
  if(!firebaseReady){ setLoginMessage("Firebase ist nicht verbunden. Bitte Internet und Firebase-Konfiguration prüfen."); return; }
  setLoginMessage("Anmeldung läuft …");
  try {
    const credential = await firebaseAuth.signInWithEmailAndPassword(email, password);
    const uid = credential.user.uid;
    const adminSnap = await firebaseDb.ref(`${DEUTSCH_A1_PATH}/admins/${uid}`).once("value");
    if (adminSnap.val() === true) {
      currentUser = {id:uid, role:"admin", name:"Administrator", email:credential.user.email || email};
      await loadDeutschA1Data();
      page="admin"; render(); return;
    }
    const profileSnap = await firebaseDb.ref(`${DEUTSCH_A1_PATH}/users/${uid}`).once("value");
    const profile = profileSnap.val();
    if (!profile || profile.active === false || profile._systemPlaceholder) {
      await firebaseAuth.signOut();
      setLoginMessage("Dieses Schülerkonto wurde nicht gefunden oder ist deaktiviert.");
      return;
    }
    currentStudentProfile = profile;
    currentUser = {id:uid, role:"student", name:profile.name || email, email:profile.email || email};
    localStorage.setItem("deutsch_a1_session_v1", JSON.stringify({id:uid, role:"student"}));
    await loadDeutschA1Data();
    await recordStudentLogin(uid);
    startStudentActivityTracking();
    if(!applyTabFromHash()) page="home"; render();
  } catch(error) {
    console.error(error);
    const messages = {
      "auth/invalid-credential":"E-Mail oder Passwort ist falsch.",
      "auth/user-not-found":"Dieses Konto wurde nicht gefunden.",
      "auth/wrong-password":"E-Mail oder Passwort ist falsch.",
      "auth/too-many-requests":"Zu viele Versuche. Bitte später erneut versuchen.",
      "auth/network-request-failed":"Keine Internetverbindung."
    };
    setLoginMessage(messages[error.code] || ("Anmeldung fehlgeschlagen: " + (error.message || error.code)));
  }
}
function generatePassword(length=12){
  const chars="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%";
  let out="";
  const values=new Uint32Array(length);
  if(window.crypto?.getRandomValues) window.crypto.getRandomValues(values);
  else for(let i=0;i<length;i++) values[i]=Math.floor(Math.random()*chars.length);
  for(let i=0;i<length;i++) out += chars[values[i] % chars.length];
  return out;
}
async function copyStudentCredentials(){
  const email=(document.getElementById("newStudentEmail")?.value || "").trim();
  const password=document.getElementById("newStudentPassword")?.value || "";
  if(!email || !password){showToast("Generiere zuerst eine E-Mail-Adresse und ein Passwort.");return;}
  const text="E-Mail: "+email+"\nPasswort: "+password;
  try{await navigator.clipboard.writeText(text);showToast("Zugangsdaten wurden kopiert.");}
  catch(e){window.prompt("Kopiere diese Zugangsdaten:",text);}
}
function generateStudentCredentials(){
  const name=(document.getElementById("newStudentName")?.value || "student").trim();
  const base=slugify(name).replace(/-/g,"") || "student";
  const suffix=String(Math.floor(100+Math.random()*900));
  const emailField=document.getElementById("newStudentEmail");
  const passwordField=document.getElementById("newStudentPassword");
  if(emailField) emailField.value=base+suffix+"@gmail.com";
  if(passwordField) passwordField.value=generatePassword(12);
}
async function createStudentFromAdmin(){
  if(!currentUser || currentUser.role!=="admin" || !firebaseReady) return;
  const name=(document.getElementById("newStudentName")?.value || "").trim();
  const email=(document.getElementById("newStudentEmail")?.value || "").trim().toLowerCase();
  const password=document.getElementById("newStudentPassword")?.value || "";
  const groupId=(document.getElementById("newStudentGroup")?.value || "").trim() || null;
  if(!name || !email || password.length<6){showToast("Bitte Name, E-Mail und ein Passwort mit mindestens 6 Zeichen eingeben.");return;}
  if(groupId && !cloudGroups[groupId]){showToast("Die ausgewählte Gruppe wurde nicht gefunden. Bitte Dashboard aktualisieren.");return;}
  if(readUsers().some(user=>String(user.email).toLowerCase()===email)){showToast("Diese E-Mail-Adresse ist bereits registriert.");return;}
  try {
    // Use a secondary Firebase app so creating a pupil does not sign out the administrator.
    const secondaryName = "DeutschA1AccountCreator";
    let secondaryApp = firebase.apps.find(app => app.name === secondaryName);
    if (!secondaryApp) secondaryApp = firebase.initializeApp(firebaseConfig, secondaryName);
    secondaryAuth = secondaryApp.auth();
    const credential = await secondaryAuth.createUserWithEmailAndPassword(email, password);
    const uid = credential.user.uid;
    const profile = {uid, name, email, active:true, groupId, createdAt:new Date().toISOString(), source:"deutschA1_admin"};
    await firebaseDb.ref(`${DEUTSCH_A1_PATH}/users/${uid}`).set(profile);
    await secondaryAuth.signOut();
    cloudUsers.push({id:uid, ...profile});
    localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(cloudUsers));
    render();showToast("Schülerkonto wurde in Firebase erstellt.");
  } catch(error) {
    console.error(error);
    const messages = {
      "auth/email-already-in-use":"Diese E-Mail-Adresse ist bereits bei Firebase registriert.",
      "auth/weak-password":"Das Passwort ist zu schwach.",
      "auth/invalid-email":"Die E-Mail-Adresse ist ungültig.",
      "PERMISSION_DENIED":"Keine Schreibberechtigung für deutschA1/users. Bitte Firebase Rules prüfen."
    };
    showToast(messages[error.code] || ("Konto konnte nicht erstellt werden: " + (error.message || error.code)));
  }
}
function closeAdminStudentDetails(){
  const modal=document.getElementById("adminStudentDetailsModal");
  if(!modal)return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
}
function openAdminStudentDetails(id){
  if(!currentUser || currentUser.role!=="admin")return;
  const user=readUsers().find(item=>item.id===id);
  if(!user)return;
  const modal=document.getElementById("adminStudentDetailsModal");
  const body=document.getElementById("adminStudentDetailsBody");
  if(!modal || !body)return;
  const group=cloudGroups[user.groupId]||{};
  const today=localDateKey();
  const activity=(cloudActivity[user.id]||{})[today]||{};
  const status=getActivityStatus(user,activity);
  const created=user.createdAt ? new Date(user.createdAt).toLocaleString("de-DE") : "—";
  const latest=status.latest ? new Date(status.latest).toLocaleString("de-DE") : "Noch nie";
  const accountStatus=user.active===false ? "Deaktiviert" : "Aktiv";
  body.innerHTML=`
    <div class="admin-student-detail-grid">
      <div class="admin-student-detail-item"><span>Name</span><strong>${escapeHtml(user.name||"—")}</strong></div>
      <div class="admin-student-detail-item"><span>E-Mail-Adresse</span><strong>${escapeHtml(user.email||"—")}</strong></div>
      <div class="admin-student-detail-item"><span>Passwort</span><strong>Nicht auslesbar – aus Sicherheitsgründen</strong></div>
      <div class="admin-student-detail-item"><span>Gruppe</span><strong>${escapeHtml(group.name||"Ohne Gruppe")}</strong></div>
      <div class="admin-student-detail-item"><span>Kontostatus</span><strong>${escapeHtml(accountStatus)}</strong></div>
      <div class="admin-student-detail-item"><span>Tägliches Lernziel</span><strong>${Number(status.required)||0} Minuten</strong></div>
      <div class="admin-student-detail-item"><span>Letzter Login</span><strong>${escapeHtml(latest)}</strong></div>
      <div class="admin-student-detail-item"><span>Konto erstellt</span><strong>${escapeHtml(created)}</strong></div>
    </div>
    <div class="admin-student-password-editor">
      <strong>Neues Passwort festlegen</strong>
      <p>Lege ein neues Passwort fest. Es wird direkt in Firebase Authentication geändert und nicht in der Datenbank gespeichert.</p>
      <label for="adminStudentNewPassword">Neues Passwort</label>
      <input id="adminStudentNewPassword" type="password" minlength="6" maxlength="128" autocomplete="new-password" placeholder="Mindestens 6 Zeichen">
      <label for="adminStudentConfirmPassword">Passwort bestätigen</label>
      <input id="adminStudentConfirmPassword" type="password" minlength="6" maxlength="128" autocomplete="new-password" placeholder="Neues Passwort wiederholen">
      <button type="button" class="tiny-btn admin-student-password-save" data-action="admin-change-student-password" data-id="${escapeHtml(user.id)}">Neues Passwort in Firebase speichern</button>
      <p class="admin-student-password-hint">Das alte Passwort kann nicht angezeigt werden. Mit dieser Funktion wird es durch das neue Passwort ersetzt.</p>
    </div>
    <div class="admin-student-detail-actions">
      <button type="button" class="tiny-btn" data-action="admin-copy-student-email" data-id="${escapeHtml(user.id)}">E-Mail kopieren</button>

      <button type="button" class="tiny-btn" data-action="admin-reset-password" data-id="${escapeHtml(user.id)}">Reset-Link per E-Mail senden</button>
    </div>`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
}
async function changeAdminStudentPassword(id,button){
  if(!currentUser || currentUser.role!=="admin" || !firebaseReady){
    showToast("Nur ein angemeldeter Administrator kann Passwörter ändern.");
    return;
  }
  const user=readUsers().find(item=>item.id===id);
  if(!user){showToast("Schülerkonto nicht gefunden.");return;}
  const passwordInput=document.getElementById("adminStudentNewPassword");
  const confirmInput=document.getElementById("adminStudentConfirmPassword");
  const password=passwordInput ? passwordInput.value : "";
  const confirmation=confirmInput ? confirmInput.value : "";
  if(password.length<6 || password.length>128){
    showToast("Das neue Passwort muss mindestens 6 Zeichen haben.");
    if(passwordInput)passwordInput.focus();
    return;
  }
  if(password!==confirmation){
    showToast("Die beiden Passwörter stimmen nicht überein.");
    if(confirmInput)confirmInput.focus();
    return;
  }
  if(!window.firebase || typeof firebase.functions!=="function"){
    showToast("Firebase Functions SDK fehlt. Bitte die neue index.html hochladen.");
    return;
  }
  const originalText=button ? button.textContent : "";
  if(button){button.disabled=true;button.textContent="Wird gespeichert...";}
  try{
    const functions=firebase.functions(firebaseApp);
    functions.region("us-central1");
    const changePassword=functions.httpsCallable("adminChangeStudentPassword");
    await changePassword({studentUid:id,newPassword:password});
    if(passwordInput)passwordInput.value="";
    if(confirmInput)confirmInput.value="";
    showToast("Das Passwort wurde in Firebase Authentication erfolgreich geändert.");
  }catch(error){
    console.error("Admin password change failed:",error);
    const code=String(error.code||"");
    let message=error.message||"Unbekannter Fehler";
    if(code.includes("functions/unauthenticated"))message="Bitte erneut als Administrator anmelden.";
    else if(code.includes("functions/permission-denied"))message="Dieses Konto hat keine Administrator-Berechtigung.";
    else if(code.includes("functions/not-found"))message="Das Schülerkonto wurde in Firebase Authentication nicht gefunden.";
    else if(code.includes("functions/invalid-argument"))message="Das Passwort ist ungültig oder zu kurz.";
    else if(code.includes("functions/unavailable"))message="Die Cloud Function ist noch nicht bereit. Bitte zuerst deployen.";
    showToast("Passwort konnte nicht geändert werden: "+message);
  }finally{
    if(button){button.disabled=false;button.textContent=originalText;}
  }
}

async function copyAdminStudentField(id,field){
  if(!currentUser || currentUser.role!=="admin")return;
  const user=readUsers().find(item=>item.id===id);
  if(!user)return;
  const value=field==="email" ? String(user.email||"") : String(user.id||user.uid||"");
  if(!value){showToast("Diese Information ist nicht verfügbar.");return;}
  try{
    await navigator.clipboard.writeText(value);
    showToast(field==="email" ? "E-Mail-Adresse kopiert." : "Schüler-Code kopiert.");
  }catch(error){
    window.prompt(field==="email" ? "E-Mail-Adresse kopieren:" : "Schüler-Code kopieren:",value);
  }
}

function adminResultPercent(result){
  if(!result)return null;
  const max=Number(result.maxPoints)||0;
  const hasScoreMap=result.scores && typeof result.scores==="object" && Object.keys(result.scores).length>0;
  const hasVisits=result.visited && typeof result.visited==="object" && Object.keys(result.visited).length>0;
  const hasStageVisits=result.visitedStages && typeof result.visitedStages==="object" && Object.keys(result.visitedStages).length>0;
  if((hasVisits || hasStageVisits) && max<=0 && !hasScoreMap && !(Number(result.completedExercises)||0))return null;
  if(Number.isFinite(Number(result.percent))) return Math.max(0,Math.min(100,Number(result.percent)));
  return max>0 ? Math.max(0,Math.min(100,Math.round((Number(result.points)||0)/max*100))) : null;
}
function adminResultLessonIndex(result){
  const explicitLesson=Number(result && result.lessonNumber);
  if(Number.isInteger(explicitLesson) && explicitLesson>=1 && explicitLesson<=lessons.length) return explicitLesson-1;
  const raw=String(result && (result.moduleId||result.title)||"");
  const match=raw.match(/(?:lektion|podcast|kurs|course|test)[-_\s]?(\d{1,2})/i);
  if(match){
    const number=Number(match[1]);
    if(number>=1 && number<=lessons.length) return number-1;
  }
  const title=String(result && result.title||"").toLocaleLowerCase();
  const exact=lessons.findIndex(item=>title.includes(String(item.name||"").toLocaleLowerCase()));
  if(exact>=0)return exact;
  const standalone=Object.entries(standaloneLessonTests).find(([,item])=>title.includes(String(item.title||"").toLocaleLowerCase()));
  if(standalone)return Number(standalone[0]);
  return -1;
}
function adminResultType(result){
  const explicit=[result && result.contentType,result && result.activityType,result && result.resourceType,result && result.kind,result && result.type]
    .filter(Boolean).join(" ").toLocaleLowerCase();
  const raw=[result && result.moduleId,result && result.title,result && result.source].filter(Boolean).join(" ").toLocaleLowerCase();
  const value=explicit+" "+raw;
  if(/podcast|podcastfolge|audio|hoerbuch|hörbuch/.test(value))return "podcast";
  if(/\b(kurs|course|lesson-content|unterricht|lerninhalt)\b/.test(value))return "kurs";
  if(/test|quiz|pruefung|prüfung|exam|embedded-exercise|exercise/.test(value))return "test";
  // Existing lesson-* result IDs are generated by the lesson test pages in this project.
  if(/^lektion[-_\s]?\d{1,2}$/.test(String(result && result.moduleId||"").toLocaleLowerCase()))return "test";
  return "other";
}
function adminExerciseScoreRows(result){
  const scores=result && result.scores && typeof result.scores==="object" ? result.scores : {};
  const totals=result && result.scoreTotals && typeof result.scoreTotals==="object" ? result.scoreTotals : {};
  const labels=result && result.exerciseLabels && typeof result.exerciseLabels==="object" ? result.exerciseLabels : {};
  return Object.entries(scores).map(([key,value])=>{
    let points=0,max=0;
    if(value && typeof value==="object"){
      points=Number(value.correct)||0;
      max=Number(value.total)||0;
    }else{
      points=Number(value)||0;
      max=Number(totals[key])||0;
    }
    return {key,points,max,percent:max>0?Math.round(points/max*100):null,label:String(labels[key]||key.toUpperCase())};
  }).filter(item=>item.percent!==null);
}

const ADMIN_LESSON_STAGE_STRUCTURE = {
  5: [
    {id:"stage1",label:"الأساسيات",exercises:[["u1","Wörter verbinden"],["u2","Artikel-Detektiv"],["u3","Übersetzungsquiz"],["u4","Lückensätze"]]},
    {id:"stage2",label:"بناء الجمل",exercises:[["u5","Buchstabensalat"],["u6","Satzbau"],["u7","Präpositionen"],["u8","Verben"]]},
    {id:"stage3",label:"الفهم والتواصل",exercises:[["u9","Adjektive"],["u10","Hördetektiv"],["u11","Lesen"]]},
    {id:"stage4",label:"التدريب العملي",exercises:[["u12","Dialog"],["u13","Fehler finden"],["u14","Kategorien"]]},
    {id:"stage5",label:"الإنتاج والتقييم",exercises:[["u15","Übersetzen"],["u16","Schreiben"],["u17","Abschlusstest"]]}
  ],
  6: [
    {id:"stage1",label:"الأساسيات والكلمات",exercises:[["u1","Wörter verbinden"],["u2","Wetter-Detektiv"],["u3","Jahreszeiten"],["u4","Wochentage"]]},
    {id:"stage2",label:"بناء الجمل والقواعد",exercises:[["u5","Lückensätze"],["u6","Satzbau"],["u7","am oder im?"],["u8","Verben"]]},
    {id:"stage3",label:"الفهم والاستماع",exercises:[["u9","Wie, wo, wann?"],["u10","Hördetektiv"],["u11","Lesen"]]},
    {id:"stage4",label:"التواصل والتطبيق",exercises:[["u12","Dialog ergänzen"],["u13","Fehler-Polizei"],["u14","Wörter sortieren"]]},
    {id:"stage5",label:"الإنتاج والتقييم النهائي",exercises:[["u15","Übersetzen"],["u16","Schreibwerkstatt"],["u17","Abschlusstest"]]}
  ],
  7: [
    {id:"stage1",label:"Wortschatz & Artikel",exercises:[["u1","Wörter verbinden"],["u2","Artikel-Detektiv"],["u3","Übersetzungsquiz"],["u4","Lückensätze"]]},
    {id:"stage2",label:"Sätze & Grammatik",exercises:[["u5","Buchstabensalat"],["u6","Satzbau"],["u7","Mit + Dativ"],["u8","Verben"]]},
    {id:"stage3",label:"Hören & Verstehen",exercises:[["u9","Adjektive-Match"],["u10","Hördetektiv"],["u11","Lesen"]]},
    {id:"stage4",label:"Alltag & Orientierung",exercises:[["u12","Dialog"],["u13","Fehler-Polizei"],["u14","Wörter sortieren"]]},
    {id:"stage5",label:"Anwenden & Test",exercises:[["u15","Übersetzen"],["u16","Schreiben"],["u17","Abschlusstest"]]}
  ],
  8: [
    {id:"stage1",label:"Wortschatz & Artikel",exercises:[["u1","Wörter verbinden"],["u2","Artikel-Detektiv"],["u3","Übersetzungsquiz"],["u4","Lückensätze"]]},
    {id:"stage2",label:"Sätze & Grammatik",exercises:[["u5","Buchstabensalat"],["u6","Satzbau-Werkstatt"],["u7","Adjektive"],["u8","Verben"]]},
    {id:"stage3",label:"Hören & Verstehen",exercises:[["u9","Adjektive-Match"],["u10","Hördetektiv"],["u11","Lesen"]]},
    {id:"stage4",label:"Auf dem Flohmarkt",exercises:[["u12","Dialog"],["u13","Fehler-Polizei"],["u14","Wörter sortieren"]]},
    {id:"stage5",label:"Anwenden & Test",exercises:[["u15","Übersetzen"],["u16","Schreiben"],["u17","Abschlusstest"]]}
  ]
};
function adminDefaultStageForExercise(key){
  const match=String(key||"").match(/^u(\d+)$/i);
  if(!match)return "stage1";
  const no=Number(match[1]);
  return no<=4?"stage1":no<=8?"stage2":no<=11?"stage3":no<=14?"stage4":"stage5";
}
function adminBuildStageReports(results){
  const buckets={};
  (results||[]).filter(result=>result && adminResultType(result)==="test").forEach(result=>{
    const lessonIndex=adminResultLessonIndex(result);
    if(lessonIndex<0)return;
    const staticStages=ADMIN_LESSON_STAGE_STRUCTURE[lessonIndex]||null;
    const scores=result.scores && typeof result.scores==="object" ? result.scores : {};
    const completed=result.completed && typeof result.completed==="object" ? result.completed : {};
    const visited=result.visited && typeof result.visited==="object" ? result.visited : {};
    const visitedStages=result.visitedStages && typeof result.visitedStages==="object" ? result.visitedStages : {};
    const exerciseSeconds=result.exerciseSeconds && typeof result.exerciseSeconds==="object" ? result.exerciseSeconds : {};
    const labels=result.exerciseLabels && typeof result.exerciseLabels==="object" ? result.exerciseLabels : {};
    const stageMap=result.stageByExercise && typeof result.stageByExercise==="object" ? result.stageByExercise : {};
    const stageLabels=result.stageLabels && typeof result.stageLabels==="object" ? result.stageLabels : {};
    const keys=new Set([...Object.keys(scores),...Object.keys(completed),...Object.keys(visited),...Object.keys(exerciseSeconds)]);
    const dynamicStageIds=[...new Set([...keys].map(key=>stageMap[key]||adminDefaultStageForExercise(key)))];
    const hasStageExerciseIds=[...keys].some(key=>/^u\d+$/i.test(key));
    const stageDefs=staticStages && (hasStageExerciseIds || Object.keys(visitedStages).length>0)
      ? staticStages
      : dynamicStageIds.map((id,index)=>({id,label:stageLabels[id]||`Stage ${index+1}`,exercises:[...keys].filter(key=>(stageMap[key]||adminDefaultStageForExercise(key))===id).map(key=>[key,labels[key]||key.toUpperCase()])}));
    stageDefs.forEach((stage,stageIndex)=>{
      const stageKey=`${lessonIndex+1}:${stage.id}`;
      if(!buckets[stageKey])buckets[stageKey]={lessonIndex,stageId:stage.id,stageLabel:stageLabels[stage.id]||stage.label||`Stage ${stageIndex+1}`,stageEntered:visitedStages[stage.id]===true,exercises:{}};
      if(visitedStages[stage.id]===true)buckets[stageKey].stageEntered=true;
      stage.exercises.forEach(([key,fallbackLabel])=>{
        const value=scores[key];
        let points=null,max=null;
        if(value && typeof value==="object"){
          points=Number(value.correct)||0;
          max=Number(value.total)||0;
        }else if(value!==undefined && value!==null){
          points=Number(value)||0;
          max=Number((result.scoreTotals||{})[key])||0;
        }
        const percent=max>0?Math.round(points/max*100):null;
        const row={
          key,
          label:String(labels[key]||fallbackLabel||key.toUpperCase()),
          points,max,percent,
          completed:completed[key]===true,
          visited:visited[key]===true || completed[key]===true || percent!==null,
          exerciseSeconds:Number(exerciseSeconds[key])||0,
          attempted:visited[key]===true || percent!==null || completed[key]===true,
          updatedAt:result.updatedAt||"",
          title:result.title||result.moduleId||"Test"
        };
        const old=buckets[stageKey].exercises[key];
        if(!old || (row.updatedAt>=old.updatedAt)) buckets[stageKey].exercises[key]=row;
      });
    });
  });
  return Object.values(buckets).map(bucket=>{
    const exercises=Object.values(bucket.exercises).sort((a,b)=>Number(a.key.replace(/\D/g,""))-Number(b.key.replace(/\D/g,"")));
    const assessed=exercises.filter(item=>item.percent!==null);
    const points=assessed.reduce((sum,item)=>sum+item.points,0);
    const max=assessed.reduce((sum,item)=>sum+item.max,0);
    const average=assessed.length?(max>0?Math.round(points/max*100):Math.round(assessed.reduce((sum,item)=>sum+item.percent,0)/assessed.length)):null;
    return {
      lessonIndex:bucket.lessonIndex,stageId:bucket.stageId,stageLabel:bucket.stageLabel,
      exercises,average,assessedCount:assessed.length,totalExercises:exercises.length,
      visitedCount:exercises.filter(item=>item.visited).length,
      completedCount:exercises.filter(item=>item.completed).length,
      stageEntered:bucket.stageEntered || exercises.some(item=>item.visited),
      notVisitedCount:exercises.filter(item=>!item.visited).length,
      weakCount:assessed.filter(item=>item.percent<60).length,
      incompleteCount:exercises.filter(item=>item.visited&&!item.completed).length
    };
  }).sort((a,b)=>a.lessonIndex-b.lessonIndex||a.stageId.localeCompare(b.stageId));
}

function adminAnalyticsDurationBars(items){
  const max=Math.max(0,...items.map(item=>Number(item.value)||0));
  return `<div class="admin-analytics-bars admin-analytics-duration-bars">${items.map(item=>{
    const value=Math.max(0,Number(item.value)||0);
    const width=max>0?Math.max(value>0?3:0,value/max*100):0;
    return `<div class="admin-analytics-bar-row"><span>${escapeHtml(item.label)}</span><div class="admin-analytics-track"><i class="${value===0?"empty":""}" style="width:${width}%"></i></div><strong>${formatDuration(value)}</strong></div>`;
  }).join("")}</div>`;
}
function adminFormatExerciseTime(seconds){
  const value=Math.max(0,Math.round(Number(seconds)||0));
  if(value<60)return `${value} sec`;
  const minutes=Math.floor(value/60),rest=value%60;
  return rest?`${minutes} min ${rest} sec`:`${minutes} min`;
}
function adminStageChartLabel(stage){
  const match=String(stage.stageId||"").match(/^stage(\d+)$/i);
  return `L${stage.lessonIndex+1} · ${match?`Stufe ${match[1]}`:stage.stageLabel}`;
}
function adminStageKeyLabel(stage){
  const match=String(stage.stageId||"").match(/^stage(\d+)$/i);
  return match?`STAGE ${match[1]}`:"TEST";
}
function adminExerciseHeatmapMarkup(stageReports,groupMode=false){
  const items=(stageReports||[]).flatMap(stage=>(stage.exercises||[]).map(exercise=>({
    key:exercise.key,
    label:exercise.label,
    stageLabel:stage.stageLabel,
    stageId:stage.stageId,
    score:groupMode?exercise.average:exercise.percent,
    visited:groupMode?(Number(exercise.visitedCount)||0)>0:exercise.visited===true,
    visitedCount:groupMode?(Number(exercise.visitedCount)||0):(exercise.visited?1:0),
    seconds:groupMode?(Number(exercise.averageSeconds)||0):(Number(exercise.exerciseSeconds)||0),
    completed:groupMode?(Number(exercise.completedCount)||0)>0:exercise.completed===true
  })));
  if(!items.length)return `<p class="admin-analytics-muted">مازال ما تسجلات حتى حركة فالتمارين.</p>`;
  const mode=adminExerciseHeatmapMode==="time"?"time":"performance";
  const tileMarkup=items.map(item=>{
    let tone="untouched",value="—",status="ما دخلش ليه";
    if(mode==="time"){
      if(item.seconds>0){tone="time";value=adminFormatExerciseTime(item.seconds);status=item.visited?"وقت التمرين":"ما تسجّلش الوقت";}
      else if(item.visited){tone="visited";value="دخل ليه";status="مازال ما تسجّلش الوقت";}
    }else if(item.score!==null && item.score!==undefined){
      tone=item.score>=80?"high":item.score>=60?"medium":item.score>=40?"low":"very-low";
      value=`${item.score}%`;
      status=item.score>=80?"ممتاز":item.score>=60?"متوسط":item.score>=40?"ضعيف":"ضعيف بزاف";
    }else if(item.visited){
      tone="visited";value="دخل ليه";status=item.completed?"كمل التمرين":"بدا وما كملوش";
    }
    const cohortLabel=groupMode?`${item.visitedCount} طالب دخلو ليه`:status;
    return `<div class="admin-heatmap-tile ${tone}" title="${escapeHtml(item.label)} · ${escapeHtml(item.stageLabel)} · ${escapeHtml(cohortLabel)}">
      <small>${escapeHtml(item.stageId.replace("stage","S"))}</small>
      <strong>${escapeHtml(item.key.toUpperCase())}</strong>
      <b>${escapeHtml(value)}</b>
      <span>${escapeHtml(item.label)}</span>
      <em>${escapeHtml(cohortLabel)}</em>
    </div>`;
  }).join("");
  return `<section class="admin-exercise-heatmap">
    <header class="admin-heatmap-header">
      <div><p class="admin-eyebrow">EXERCISE PERFORMANCE</p><h4>Question Performance Heatmap</h4><small>كل مربع كيمثل تمرين من Stufe ديالو · ${items.length} تمرين</small></div>
      <div class="admin-heatmap-tabs">
        <button type="button" data-action="admin-heatmap-mode" data-mode="performance" class="${mode==="performance"?"active":""}">View Performance</button>
        <button type="button" data-action="admin-heatmap-mode" data-mode="time" class="${mode==="time"?"active":""}">Time taken</button>
      </div>
    </header>
    <div class="admin-heatmap-grid">${tileMarkup}</div>
    <div class="admin-heatmap-legend">
      ${mode==="performance"
        ? `<span><i class="high"></i> High (80%+)</span><span><i class="medium"></i> Medium (60–79%)</span><span><i class="low"></i> Low (40–59%)</span><span><i class="very-low"></i> Very Low (&lt;40%)</span><span><i class="visited"></i> دخل ليه بلا نتيجة</span><span><i class="untouched"></i> ما دخلش ليه</span>`
        : `<span><i class="time"></i> وقت مسجّل</span><span><i class="visited"></i> دخل ليه بلا وقت كافي</span><span><i class="untouched"></i> ما دخلش ليه</span>`}
    </div>
  </section>`;
}
function adminStageBreakdownMarkup(stageReports,groupMode=false,groupSize=0){
  if(!stageReports || !stageReports.length)return `<div class="admin-stage-empty"><span>📊</span><strong>مازال ما كايناش بيانات ديال المراحل</strong><small>ملي الطالب يفتح Stage أو تمرين، التفاصيل غادي تبان هنا.</small></div>`;
  const totalExercises=stageReports.reduce((sum,stage)=>sum+(groupMode?(stage.exercises||[]).length*Math.max(0,groupSize):(Number(stage.totalExercises)||0)),0);
  const openedExercises=stageReports.reduce((sum,stage)=>sum+(Number(stage.visitedCount)||0),0);
  const assessedExercises=stageReports.reduce((sum,stage)=>sum+(groupMode?(stage.exercises||[]).reduce((n,e)=>n+(Number(e.assessed)||0),0):(Number(stage.assessedCount)||0)),0);
  const weakExercises=stageReports.reduce((sum,stage)=>sum+(groupMode?(stage.exercises||[]).reduce((n,e)=>n+(Number(e.weakCount)||0),0):(Number(stage.weakCount)||0)),0);
  const enteredStages=stageReports.reduce((sum,stage)=>sum+(groupMode?(Number(stage.stageEnteredCount)||0):(stage.stageEntered?1:0)),0);
  const summaryItems=[
    {label:"المراحل المفتوحة",value:groupMode?`${enteredStages}/${stageReports.length*Math.max(1,groupSize)}`:`${enteredStages}/${stageReports.length}`,hint:groupMode?"دخول الطلبة للمراحل":"المراحل التي دخل إليها الطالب",tone:"blue"},
    {label:"التمارين المفتوحة",value:`${openedExercises}/${totalExercises||0}`,hint:"عدد مرات فتح التمارين",tone:"teal"},
    {label:"التمارين المصححة",value:assessedExercises,hint:"تمارين عندها نتيجة",tone:"violet"},
    {label:"نقاط الضعف",value:weakExercises,hint:"نتائج أقل من 60%",tone:"orange"}
  ];
  const summaryMarkup=summaryItems.map(item=>`<div class="admin-stage-summary-item ${item.tone}"><span>${escapeHtml(item.label)}</span><strong>${item.value}</strong><small>${escapeHtml(item.hint)}</small></div>`).join("");
  const cards=stageReports.map((stage,index)=>{
    const exercises=stage.exercises||[];
    const denominator=groupMode?exercises.length*Math.max(1,groupSize):(Number(stage.totalExercises)||exercises.length);
    const opened=Number(stage.visitedCount)||0;
    const entered=groupMode?(Number(stage.stageEnteredCount)||0):(stage.stageEntered?1:0);
    const score=stage.average===null||stage.average===undefined?null:Math.max(0,Math.min(100,Number(stage.average)||0));
    const visitPercent=denominator?Math.round(opened/denominator*100):0;
    const progress=score===null?visitPercent:score;
    const stageTone=score===null?(entered?"visited":"empty"):score<60?"weak":score<80?"mid":"good";
    const stageStatus=score===null?(entered?(groupMode?`${entered} دخلوا ليها`:"دخل ليها"):"مازال ما دخلش ليها"):score<60?"تحتاج مراجعة":score<80?"متوسطة":"جيدة";
    const stageNumber=(String(stage.stageId||"").match(/(\d+)/)||[])[1]||String(index+1);
    const assessed=groupMode?exercises.reduce((sum,e)=>sum+(Number(e.assessed)||0),0):(Number(stage.assessedCount)||0);
    const weak=groupMode?exercises.reduce((sum,e)=>sum+(Number(e.weakCount)||0),0):(Number(stage.weakCount)||0);
    const completed=groupMode?exercises.reduce((sum,e)=>sum+(Number(e.completedCount)||0),0):(Number(stage.completedCount)||0);
    const exerciseCards=exercises.map(exercise=>{
      const exerciseScore=groupMode?(exercise.average===null||exercise.average===undefined?null:Math.max(0,Math.min(100,Number(exercise.average)||0))):(exercise.percent===null||exercise.percent===undefined?null:Math.max(0,Math.min(100,Number(exercise.percent)||0)));
      const visited=groupMode?(Number(exercise.visitedCount)||0)>0:exercise.visited===true;
      const completedExercise=groupMode?(Number(exercise.completedCount)||0)>0:exercise.completed===true;
      const exerciseTone=exerciseScore===null?(visited?"visited":"empty"):exerciseScore<60?"weak":exerciseScore<80?"mid":"good";
      const exerciseStatus=exerciseScore!==null?(exerciseScore<60?"ضعيف":exerciseScore<80?"متوسط":"جيد"):visited?(completedExercise?"مكتمل":"دخل ليه · ما كملوش"):"ما دخلش ليه";
      const time=groupMode?(Number(exercise.averageSeconds)||0):(Number(exercise.exerciseSeconds)||0);
      const exerciseName=escapeHtml(exercise.label||exercise.key||"Übung");
      const exerciseKey=escapeHtml(String(exercise.key||"").toUpperCase());
      const scoreValue=exerciseScore===null?"—":`${exerciseScore}%`;
      const scoreDetail=groupMode
        ? `${Number(exercise.assessed)||0} نتائج مصححة · ${Number(exercise.weakCount)||0} ضعيفة`
        : exerciseScore!==null?`${Number(exercise.points)||0} / ${Number(exercise.max)||0} نقطة`:visited?(completedExercise?"كمل التمرين بلا نتيجة مصححة":"فتح التمرين ولم يكمله"):"لم يتم فتح هذا التمرين بعد";
      const visitDetail=groupMode?`${Number(exercise.visitedCount)||0}/${Math.max(1,groupSize)} طالب فتحوه · ${Number(exercise.completedCount)||0} كملوه`:completedExercise?"تم إكمال التمرين":visited?"تم فتح التمرين":"في انتظار الدخول";
      const bar=exerciseScore===null?0:exerciseScore;
      return `<article class="admin-stage-exercise-card ${exerciseTone}">
        <div class="admin-stage-exercise-top"><span class="admin-stage-exercise-code">${exerciseKey}</span><em class="admin-stage-state ${exerciseTone}">${exerciseStatus}</em></div>
        <h5>${exerciseName}</h5>
        <div class="admin-stage-exercise-scoreline"><strong>${scoreValue}</strong><span>${time?`◷ ${adminFormatExerciseTime(time)}`:"لا يوجد وقت مسجل"}</span></div>
        <div class="admin-stage-exercise-track"><i class="${exerciseTone}" style="width:${bar}%"></i></div>
        <div class="admin-stage-exercise-meta"><span>${escapeHtml(scoreDetail)}</span><span>${escapeHtml(visitDetail)}</span></div>
      </article>`;
    }).join("");
    return `<details class="admin-stage-card ${index===0?"is-featured":""}" ${index===0?"open":""}>
      <summary class="admin-stage-card-summary">
        <span class="admin-stage-number">${String(stageNumber).padStart(2,"0")}</span>
        <span class="admin-stage-title-wrap"><small>Lektion ${Number(stage.lessonIndex)+1} · ${escapeHtml(adminStageKeyLabel(stage))}</small><strong>${escapeHtml(stage.stageLabel||`Stage ${stageNumber}`)}</strong><span class="admin-stage-summary-sub">${groupMode?`${entered}/${Math.max(1,groupSize)} طالب دخلوا للمرحلة`:`${opened}/${denominator} تمارين مفتوحة`}</span></span>
        <span class="admin-stage-score-wrap"><strong class="admin-stage-score-value ${stageTone}">${score===null?"—":`${score}%`}</strong><em class="admin-stage-state ${stageTone}">${stageStatus}</em></span>
        <span class="admin-stage-chevron" aria-hidden="true">⌄</span>
      </summary>
      <div class="admin-stage-card-content">
        <div class="admin-stage-progress-head"><span>${score===null?"نسبة فتح التمارين":"متوسط الأداء"}</span><strong>${progress}%</strong></div>
        <div class="admin-stage-progress-track"><i class="${stageTone}" style="width:${progress}%"></i></div>
        <div class="admin-stage-mini-stats">
          <span><strong>${opened}</strong><small>${groupMode?"مرات فتح التمارين":"تمارين مفتوحة"}</small></span>
          <span><strong>${completed}</strong><small>تمارين مكتملة</small></span>
          <span><strong>${assessed}</strong><small>نتائج مصححة</small></span>
          <span><strong>${weak}</strong><small>نتائج ضعيفة</small></span>
        </div>
        <div class="admin-stage-exercise-grid">${exerciseCards||`<p class="admin-analytics-muted">لا توجد تمارين مسجلة في هذه المرحلة.</p>`}</div>
        <div class="admin-stage-card-footer"><span>${groupMode?`${opened}/${denominator} مرات فتح التمارين · ${entered}/${Math.max(1,groupSize)} طالب دخلوا للمرحلة`:`${opened}/${denominator} تمارين تم فتحها`}</span><span>${score===null?"لا توجد نتيجة نهائية بعد":`متوسط المرحلة ${score}%`}</span></div>
      </div>
    </details>`;
  }).join("");
  return `<section class="admin-stage-dashboard ${groupMode?"is-group":""}">
    <header class="admin-stage-dashboard-header"><div><p class="admin-eyebrow">STAGE ANALYTICS</p><h4>${groupMode?"تحليل مراحل المجموعة":"تحليل المراحل والتمارين"}</h4><p>${groupMode?"نظرة مقارنة على دخول الطلبة ونتائج التمارين داخل كل مرحلة.":"تفاصيل كل مرحلة: النتيجة، التمارين المفتوحة، الوقت ونقاط الضعف."}</p></div><span class="admin-stage-dashboard-badge">${stageReports.length} Stufen</span></header>
    <div class="admin-stage-summary-grid">${summaryMarkup}</div>
    <div class="admin-stage-card-list">${cards}</div>
  </section>`;
}

function adminGroupStageSummary(reports){
  const buckets={};
  reports.forEach(report=>(report.stageReports||[]).forEach(stage=>{
    const key=`${stage.lessonIndex+1}:${stage.stageId}`;
    if(!buckets[key])buckets[key]={lessonIndex:stage.lessonIndex,stageId:stage.stageId,stageLabel:stage.stageLabel,averages:[],exerciseMap:{},visitedCount:0,totalExercises:0,stageEnteredCount:0};
    if(stage.average!==null)buckets[key].averages.push(stage.average);
    if(stage.stageEntered)buckets[key].stageEnteredCount++;
    buckets[key].visitedCount+=stage.visitedCount||0;
    buckets[key].totalExercises+=stage.totalExercises||0;
    stage.exercises.forEach(exercise=>{
      const eKey=exercise.key;
      if(!buckets[key].exerciseMap[eKey])buckets[key].exerciseMap[eKey]={label:exercise.label,values:[],weakCount:0,visitedCount:0,completedCount:0,seconds:[]};
      const item=buckets[key].exerciseMap[eKey];
      if(exercise.percent!==null){
        item.values.push(exercise.percent);
        if(exercise.percent<60)item.weakCount++;
      }
      if(exercise.visited)item.visitedCount++;
      if(exercise.completed)item.completedCount++;
      if(exercise.exerciseSeconds>0)item.seconds.push(exercise.exerciseSeconds);
    });
  }));
  return Object.values(buckets).map(stage=>({
    ...stage,
    average:stage.averages.length?Math.round(stage.averages.reduce((a,b)=>a+b,0)/stage.averages.length):null,
    exercises:Object.entries(stage.exerciseMap).map(([key,item])=>({
      key,label:item.label,
      average:item.values.length?Math.round(item.values.reduce((a,b)=>a+b,0)/item.values.length):null,
      weakCount:item.weakCount,assessed:item.values.length,
      visitedCount:item.visitedCount,completedCount:item.completedCount,
      averageSeconds:item.seconds.length?Math.round(item.seconds.reduce((a,b)=>a+b,0)/item.seconds.length):0
    })).sort((a,b)=>(a.average??101)-(b.average??101))
  })).sort((a,b)=>a.lessonIndex-b.lessonIndex||a.stageId.localeCompare(b.stageId));
}

function adminStudentAnalytics(user,filters=null){
  const resultMap=readStudentResults(user.id);
  let results=Object.values(resultMap||{}).filter(item=>item && typeof item==="object");
  if(filters){
    if(filters.lesson!=="all" && filters.lesson!==undefined) results=results.filter(result=>adminResultLessonIndex(result)===Number(filters.lesson)-1);
    if(filters.type && filters.type!=="all") results=results.filter(result=>adminResultType(result)===filters.type);
  }
  const byLesson=lessons.map((lesson,index)=>{
    const lessonResults=results.filter(result=>adminResultLessonIndex(result)===index);
    const scoredLessonResults=lessonResults.filter(result=>adminResultPercent(result)!==null);
    const weightedPoints=scoredLessonResults.reduce((sum,result)=>sum+(Number(result.points)||0),0);
    const weightedMax=scoredLessonResults.reduce((sum,result)=>sum+(Number(result.maxPoints)||0),0);
    const average=scoredLessonResults.length ? (weightedMax>0 ? Math.round(weightedPoints/weightedMax*100) :
      Math.round(scoredLessonResults.reduce((sum,result)=>sum+adminResultPercent(result),0)/scoredLessonResults.length)) : null;
    const categories=filters && filters.lesson!=="all" && filters.lesson!==undefined && Number(filters.lesson)!==index+1 ? [] : Object.keys(lesson.data||{});
    const wholeLessonTest=lessonResults.some(result=>
      String(result.moduleId||"").toLowerCase()===`lektion-${index+1}` &&
      Number(result.totalExercises)>0 &&
      Number(result.completedExercises)>=Number(result.totalExercises) &&
      adminResultPercent(result)!==null
    );
    const testedCategories=wholeLessonTest ? categories : categories.filter(category=>lessonResults.some(result=>{
      const id=String(result.moduleId||"").toLowerCase();
      const title=String(result.title||"").toLowerCase();
      return adminResultPercent(result)!==null &&
        (id===`lektion-${index+1}-${slugify(category)}` || title.includes(`· ${category}`.toLowerCase()));
    }));
    const missingCategories=categories.filter(category=>!testedCategories.includes(category));
    const completedExercises=lessonResults.reduce((sum,result)=>sum+(Number(result.completedExercises)||0),0);
    const totalExercises=lessonResults.reduce((sum,result)=>sum+(Number(result.totalExercises)||0),0);
    let status="Noch kein Testergebnis";
    if(lessonResults.length){
      if(missingCategories.length)status="Teilweise bewertet";
      else if(average!==null && average<60)status="Schwach";
      else status="Gut";
    }
    return {index,lesson,results:lessonResults,average,categories,testedCategories,missingCategories,completedExercises,totalExercises,status};
  });
  const scoredResults=results.map(result=>({result,percent:adminResultPercent(result)})).filter(item=>item.percent!==null);
  const weightedPoints=scoredResults.reduce((sum,item)=>sum+(Number(item.result.points)||0),0);
  const weightedMax=scoredResults.reduce((sum,item)=>sum+(Number(item.result.maxPoints)||0),0);
  const average=scoredResults.length ? (weightedMax>0 ? Math.round(weightedPoints/weightedMax*100) :
    Math.round(scoredResults.reduce((sum,item)=>sum+item.percent,0)/scoredResults.length)) : null;
  const weakTopics=results.filter(result=>{
    const p=adminResultPercent(result);
    return p!==null && p<60;
  });
  const stageReports=adminBuildStageReports(results);
  const weakExercises=[];
  const incompleteExercises=[];
  results.forEach(result=>{
    adminExerciseScoreRows(result).filter(item=>item.percent<60).forEach(item=>{
      weakExercises.push({title:result.title||result.moduleId||"Test",...item});
    });
    const completed=result.completed && typeof result.completed==="object" ? result.completed : null;
    if(completed){
      const visited=result.visited && typeof result.visited==="object" ? result.visited : {};
      Object.entries(visited).filter(([key,seen])=>seen && completed[key]!==true).forEach(([key])=>{
        incompleteExercises.push({title:result.title||result.moduleId||"Test",key,status:"دخل ليه وما كملوش"});
      });
    }else{
      const total=Number(result.totalExercises)||0;
      const done=Number(result.completedExercises)||0;
      if(total>done)incompleteExercises.push({title:result.title||result.moduleId||"Test",key:`${total-done} von ${total} Übungen noch offen`});
    }
  });
  const activityDays=Object.values(cloudActivity[user.id]||{});
  const totalSeconds=activityDays.reduce((sum,day)=>sum+(Number(day && day.totalSeconds)||0),0);
  const totalLogins=activityDays.reduce((sum,day)=>sum+(Number(day && day.loginCount)||0),0);
  const lessonSeconds={};
  const contentSecondsByLessonType={};
  let contentTrackingAvailable=false;
  activityDays.forEach(day=>{
    Object.entries(day && day.lessonSeconds || {}).forEach(([key,value])=>{
      lessonSeconds[key]=(Number(lessonSeconds[key])||0)+(Number(value)||0);
    });
    Object.entries(day && day.contentSeconds || {}).forEach(([lessonKey,typeMap])=>{
      contentTrackingAvailable=true;
      contentSecondsByLessonType[lessonKey]=contentSecondsByLessonType[lessonKey]||{};
      Object.entries(typeMap||{}).forEach(([type,value])=>{
        contentSecondsByLessonType[lessonKey][type]=(Number(contentSecondsByLessonType[lessonKey][type])||0)+(Number(value)||0);
      });
    });
  });
  let filteredSeconds=totalSeconds;
  if(filters && (filters.lesson!=="all" || filters.type!=="all")){
    filteredSeconds=0;
    Object.entries(contentSecondsByLessonType).forEach(([lessonKey,typeMap])=>{
      if(filters.lesson!=="all" && String(filters.lesson)!==String(lessonKey))return;
      if(filters.type!=="all") filteredSeconds+=(Number(typeMap[filters.type])||0);
      else filteredSeconds+=Object.values(typeMap).reduce((sum,value)=>sum+(Number(value)||0),0);
    });
  }
  const attempts=results.reduce((sum,result)=>sum+(Number(result.attempts)||1),0);
  return {user,results,byLesson,average,weakTopics,weakExercises,incompleteExercises,totalSeconds,filteredSeconds,contentTrackingAvailable,totalLogins,lessonSeconds,contentSecondsByLessonType,stageReports,attempts,filters};
}
function adminAnalyticsBars(items,variant="default"){
  return `<div class="admin-analytics-bars ${variant==="detailed"?"admin-analytics-bars-detailed":""}">${items.map(item=>{
    const value=item.value===null || item.value===undefined ? null : Math.max(0,Math.min(100,Number(item.value)||0));
    return `<div class="admin-analytics-bar-row"><span>${escapeHtml(item.label)}</span><div class="admin-analytics-track"><i class="${value===null?"empty":value<60?"weak":""}" style="width:${value===null?0:value}%"></i></div><strong>${value===null?"—":value+"%"}</strong></div>`;
  }).join("")}</div>`;
}
function adminStudentAnalyticsCard(report,expanded=false){
  const {user,byLesson,average,results,weakTopics,weakExercises,incompleteExercises,totalSeconds,filteredSeconds,totalLogins,attempts,filters,contentTrackingAvailable,contentSecondsByLessonType,stageReports}=report;
  const selectedType=filters && filters.type ? filters.type : "all";
  const selectedLesson=filters && filters.lesson ? filters.lesson : "all";
  const isTimeType=selectedType==="kurs" || selectedType==="podcast";
  const reportTimeLabel=selectedType!=="all" ? `وقت ${selectedType==="kurs"?"Kurs":selectedType==="podcast"?"Podcast":"Test"}` : selectedLesson!=="all" ? `وقت Lektion ${selectedLesson}` : "Lernzeit";
  const reportTimeValue=formatDuration(filteredSeconds===undefined?totalSeconds:filteredSeconds);
  const weakLessonNames=byLesson.filter(item=>item.average!==null && item.average<60).map(item=>`L${item.index+1} (${item.average}%)`);
  const unassessed=byLesson.filter(item=>item.missingCategories.length).map(item=>`L${item.index+1}: ${item.missingCategories.join(", ")}`);
  const exerciseWeakMarkup=weakExercises.length
    ? `<ul>${weakExercises.slice(0,20).map(item=>`<li><strong>${escapeHtml(item.title)}</strong> · ${escapeHtml(item.label||item.key)}: ${item.percent}% (${item.points}/${item.max})</li>`).join("")}</ul>`
    : `<p class="admin-analytics-muted">${results.length?"لا توجد تمارين مسجلة بأقل من 60% في النتائج المتوفرة.":"لا توجد نتائج اختبارات بعد."}</p>`;
  const incompleteMarkup=incompleteExercises.length
    ? `<ul>${incompleteExercises.slice(0,20).map(item=>`<li><strong>${escapeHtml(item.title)}</strong> · ${escapeHtml(item.key)}${item.status?` — ${escapeHtml(item.status)}`:""}</li>`).join("")}</ul>`
    : `<p class="admin-analytics-muted">لا توجد تمارين غير مكتملة مسجلة في البيانات المتوفرة.</p>`;
  const weakTopicMarkup=weakTopics.length
    ? `<ul>${weakTopics.map(result=>`<li><strong>${escapeHtml(result.title||result.moduleId||"Test")}</strong>: ${adminResultPercent(result)}%</li>`).join("")}</ul>`
    : `<p class="admin-analytics-muted">لا توجد محاور اختبار بنتيجة أقل من 60%.</p>`;
  const weakLessonMarkup=weakLessonNames.length
    ? `<p class="admin-analytics-warning">${weakLessonNames.map(escapeHtml).join(" · ")}</p>${weakTopicMarkup}`
    : weakTopicMarkup;
  const unassessedMarkup=unassessed.length
    ? `<ul>${unassessed.slice(0,10).map(item=>`<li>${escapeHtml(item)}</li>`).join("")}</ul>`
    : `<p class="admin-analytics-muted">تم تسجيل اختبارات جميع محاور الدروس.</p>`;

  const durationBars=lessons.map((lesson,index)=>{
    const key=String(index+1);
    if(selectedLesson!=="all" && String(selectedLesson)!==key)return null;
    const typeMap=(contentSecondsByLessonType||{})[key]||{};
    const value=selectedType==="all"
      ? Object.values(typeMap).reduce((sum,n)=>sum+(Number(n)||0),0)
      : Number(typeMap[selectedType])||0;
    return {label:`L${key} · ${lesson.name||""}`,value};
  }).filter(Boolean);
  const durationChart=`<h4>${selectedType==="kurs"?"وقت Kurs حسب الدرس":selectedType==="podcast"?"وقت Podcast حسب الدرس":"وقت التعلم حسب الدرس"}</h4>${contentTrackingAvailable && durationBars.some(item=>item.value>0)?adminAnalyticsDurationBars(durationBars):`<p class="admin-analytics-muted">مازال ما تسجّلش وقت ${selectedType==="kurs"?"Kurs":selectedType==="podcast"?"Podcast":"المحتوى"} فهاد الاختيار. غادي يبان من بعد ما يدخل الطالب للمحتوى.</p>`}`;
  const testStageChart=stageReports.length
    ? `<h4>نتائج Stufen داخل الاختبارات</h4>${adminAnalyticsBars(stageReports.map(stage=>({label:adminStageChartLabel(stage),value:stage.average})),"detailed") }`
    : `<p class="admin-analytics-muted">تفاصيل Stufen والتمارين غادي تظهر من بعد ما الطالب يجاوب على التمارين ويسجل الاختبار.</p>`;
  const chart=selectedType==="test" ? testStageChart : isTimeType ? durationChart : `<h4>Ergebnisse nach Lektion</h4>${adminAnalyticsBars(byLesson.map(item=>({label:`L${item.index+1}`,value:item.average})))}`;
  const heatmapMarkup=!isTimeType ? adminExerciseHeatmapMarkup(stageReports,false) : "";
  const stageDetail=(!isTimeType && selectedType!=="podcast" && selectedType!=="kurs")
    ? `<section class="admin-stage-breakdown">${adminStageBreakdownMarkup(stageReports)}</section>`
    : "";
  const reportAverage=isTimeType?"—":average===null?"—":average+"%";
  const reportCountLabel=isTimeType?"المحتوى": "Tests";
  const reportCount=isTimeType?(selectedType==="kurs"?"Kurs": "Podcast"):results.length;
  return `<details class="admin-analytics-student-card" ${expanded?"open":""}>
    <summary><span class="admin-analytics-student-title"><strong>${escapeHtml(user.name||"Student")}</strong><small>${escapeHtml(studentGroupName(user))} · ${results.length} Tests</small></span><span class="admin-analytics-summary-score">${reportAverage}</span></summary>
    <div class="admin-analytics-card-body">
      <div class="admin-analytics-kpis"><div><small>${isTimeType?"النتيجة":"Durchschnitt"}</small><strong>${reportAverage}</strong></div><div><small>${reportCountLabel}</small><strong>${reportCount}</strong></div><div><small>Versuche</small><strong>${attempts}</strong></div><div><small>${escapeHtml(reportTimeLabel)}</small><strong>${reportTimeValue}</strong></div><div><small>Logins</small><strong>${totalLogins}</strong></div></div>
      ${chart}
      ${heatmapMarkup}
      ${stageDetail}
      ${!isTimeType?`<div class="admin-analytics-two-col">
        <section><h4>دروس تحتاج إلى مراجعة</h4>${weakLessonMarkup}${selectedType==="test"?"":`<h4>محاور لم تُقيّم بعد</h4>${unassessedMarkup}`}</section>
        <section><h4>تمارين ضعيفة (أقل من 60%)</h4>${exerciseWeakMarkup}<h4>تمارين غير مكتملة</h4>${incompleteMarkup}</section>
      </div>`:""}
      ${filters && (filters.type!=="all" || filters.lesson!=="all") && !contentTrackingAvailable ? `<p class="admin-analytics-note">تفصيل وقت Kurs / Podcast / Test حسب الدرس كيبدا يتسجل من بعد رفع هاد التحديث. النشاط القديم ما كانش كيفصل الوقت حسب النوع والدرس.</p>` : ""}
      ${!results.some(result=>(result.scores && Object.keys(result.scores).length)||(result.visited && Object.keys(result.visited).length)||(result.visitedStages && Object.keys(result.visitedStages).length)) && filters && (filters.type==="test" || filters.type==="all") ? `<p class="admin-analytics-note">تفاصيل كل تمرين كتظهر فالاختبارات الجديدة بعد التحديث. النتائج القديمة اللي فيها غير النقطة الإجمالية ما يمكنش استخراج الأخطاء ديال كل تمرين منها بأثر رجعي.</p>` : ""}
    </div>
  </details>`;
}

function adminGroupAnalyticsCard(groupId,groupName,groupUsers,filters=null){
  const reports=groupUsers.map(user=>adminStudentAnalytics(user,filters));
  const selectedType=filters && filters.type ? filters.type : "all";
  const selectedLesson=filters && filters.lesson ? filters.lesson : "all";
  const isTimeType=selectedType==="kurs" || selectedType==="podcast";
  const valid=reports.filter(report=>report.average!==null);
  const average=valid.length?Math.round(valid.reduce((sum,report)=>sum+report.average,0)/valid.length):null;
  const totalTests=reports.reduce((sum,report)=>sum+report.results.length,0);
  const groupLessonBars=lessons.map((lesson,index)=>{
    const values=reports.map(report=>report.byLesson[index].average).filter(value=>value!==null);
    return {label:`L${index+1}`,value:values.length?Math.round(values.reduce((sum,value)=>sum+value,0)/values.length):null};
  }).filter(item=>selectedLesson==="all" || item.label===`L${selectedLesson}`);
  const weakLessons=groupLessonBars.filter(item=>item.value!==null && item.value<60);
  const studentBars=reports.map(report=>({label:report.user.name||"Student",value:report.average})).sort((a,b)=>(a.value??-1)-(b.value??-1));
  const stageSummary=adminGroupStageSummary(reports);
  const groupStageChart=stageSummary.length
    ? adminAnalyticsBars(stageSummary.map(stage=>({label:adminStageChartLabel(stage),value:stage.average})),"detailed")
    : `<p class="admin-analytics-muted">مازال ما تسجلاتش نتائج مفصلة للمراحل داخل هاد المجموعة.</p>`;
  const groupStageDetail=adminStageBreakdownMarkup(stageSummary,true,groupUsers.length);
  const durationBars=lessons.map((lesson,index)=>{
    const key=String(index+1);
    if(selectedLesson!=="all" && selectedLesson!==key)return null;
    const seconds=reports.reduce((sum,report)=>{
      const typeMap=(report.contentSecondsByLessonType||{})[key]||{};
      const value=selectedType==="all"
        ? Object.values(typeMap).reduce((n,v)=>n+(Number(v)||0),0)
        : Number(typeMap[selectedType])||0;
      return sum+value;
    },0);
    return {label:`L${key} · ${lesson.name||""}`,value:seconds};
  }).filter(Boolean);
  const totalTime=durationBars.reduce((sum,item)=>sum+item.value,0);
  const weakExercises=stageSummary.flatMap(stage=>stage.exercises.map(exercise=>({...exercise,lessonIndex:stage.lessonIndex,stageLabel:stage.stageLabel}))).filter(item=>item.average!==null && item.average<60).sort((a,b)=>a.average-b.average);
  const weakExerciseMarkup=weakExercises.length
    ? `<ul>${weakExercises.slice(0,12).map(item=>`<li><strong>L${item.lessonIndex+1} · ${escapeHtml(item.stageLabel)}</strong> — ${escapeHtml(item.label)}: ${item.average}% (${item.weakCount}/${item.assessed} طلبة أقل من 60%)</li>`).join("")}</ul>`
    : `<p class="admin-analytics-muted">ما كايناش تمارين بمتوسط أقل من 60% فالمجموعة.</p>`;
  const groupHeatmapMarkup=!isTimeType && (selectedType==="test" || selectedType==="all")
    ? adminExerciseHeatmapMarkup(stageSummary,true)
    : "";
  const mainChart=isTimeType
    ? `<h4>وقت ${selectedType==="kurs"?"Kurs":"Podcast"} حسب الدرس · المجموعة كاملة</h4>${totalTime>0?adminAnalyticsDurationBars(durationBars):`<p class="admin-analytics-muted">مازال ما تسجّلش وقت المحتوى بهاد الفلتر.</p>`}`
    : selectedType==="test"
      ? `<h4>متوسط Stufen حسب الاختبارات</h4>${groupStageChart}`
      : `<h4>Durchschnitt nach Lektion</h4>${adminAnalyticsBars(groupLessonBars)}`;
  return `<article class="admin-analytics-group-card">
    <header><div><p class="admin-eyebrow">GRUPPENBERICHT</p><h3>${escapeHtml(groupName)}</h3></div><span class="admin-count">${groupUsers.length} Schüler</span></header>
    <div class="admin-analytics-kpis">
      ${isTimeType
        ? `<div><small>وقت ${selectedType==="kurs"?"Kurs":"Podcast"}</small><strong>${formatDuration(totalTime)}</strong></div><div><small>الطلبة</small><strong>${groupUsers.length}</strong></div><div><small>عندهم نشاط</small><strong>${reports.filter(report=>report.filteredSeconds>0).length}</strong></div>`
        : `<div><small>Gruppendurchschnitt</small><strong>${average===null?"—":average+"%"}</strong></div><div><small>Testergebnisse</small><strong>${totalTests}</strong></div><div><small>Bewertete Schüler</small><strong>${valid.length}/${groupUsers.length}</strong></div>${filters && (filters.type!=="all" || filters.lesson!=="all") ? `<div><small>${filters.type!=="all"?"Zeit "+(filters.type==="kurs"?"Kurs":filters.type==="podcast"?"Podcast":"Test"):"Zeit Lektion "+filters.lesson}</small><strong>${formatDuration(reports.reduce((sum,report)=>sum+(Number(report.filteredSeconds)||0),0))}</strong></div>` : ""}`}
    </div>
    ${mainChart}
    ${groupHeatmapMarkup}
    ${selectedType==="test" || selectedType==="all" ? `<section class="admin-stage-breakdown">${groupStageDetail}<div class="admin-group-weak-exercises"><h4>التمارين الأكثر صعوبة</h4>${weakExerciseMarkup}</div></section>` : ""}
    ${!isTimeType?`<h4>Vergleich der Schüler</h4>${adminAnalyticsBars(studentBars)}<p class="admin-analytics-warning">${weakLessons.length?`دروس المجموعة الضعيفة: ${weakLessons.map(item=>`${item.label} ${item.value}%`).join(" · ")}`:"لا توجد دروس بمتوسط أقل من 60% في النتائج المتوفرة."}</p>`:""}
  </article>`;
}

function adminProgressDashboardCourseRecords(userId){
  const records=cloudCourseProgress && cloudCourseProgress[userId];
  return records && typeof records==="object" && !Array.isArray(records) ? records : {};
}
function adminProgressDashboardResultLevel(result){
  const direct=String(result && (result.level||result.courseLevel||result.learningLevel)||"").toUpperCase();
  if(direct.includes("A2"))return "A2";
  if(direct.includes("A1"))return "A1";
  const raw=`${String(result && result.moduleId||"")} ${String(result && result.title||"")}`.toLowerCase();
  if(/(^|[^a-z0-9])a2([^a-z0-9]|$)|a2[-_]/.test(raw))return "A2";
  if(/(^|[^a-z0-9])a1([^a-z0-9]|$)|a1[-_]/.test(raw))return "A1";
  return "";
}

function progressLessonCatalog(level){
  const normalized=String(level||"A1").toUpperCase();
  if(normalized==="A2"){
    return (a2CourseLessons||[]).map(item=>({
      number:Number(item.number),title:item.title||`Lektion ${item.number}`,
      arabic:item.arabic||"",icon:item.icon||"📘"
    }));
  }
  return (lessons||[]).map((item,index)=>({
    number:index+1,title:item.name||`Lektion ${index+1}`,
    arabic:item.arabic||"",icon:"📘"
  }));
}
function progressLessonStatusKey(level,no){return `${String(level||"A1").toUpperCase()}_${Number(no)}`;}
function buildProgressLessonStatusRecords(courseRecords={},results=[],fallbackLevels=[]){
  const records=courseRecords&&typeof courseRecords==="object"?courseRecords:{};
  const resultList=Array.isArray(results)?results:[];
  const levels=new Set((fallbackLevels||[]).map(value=>String(value||"").toUpperCase()).filter(value=>["A1","A2"].includes(value)));
  Object.keys(records).forEach(key=>{
    const match=/^(A1|A2)_(\d+)$/i.exec(key);
    if(match)levels.add(match[1].toUpperCase());
  });
  resultList.forEach(result=>{
    const level=adminProgressDashboardResultLevel(result);
    if(level)levels.add(level);
  });
  if(!levels.size)levels.add("A1");
  const states=[];
  [...levels].sort().forEach(level=>{
    progressLessonCatalog(level).forEach(lesson=>{
      const no=lesson.number;
      const record=records[progressLessonStatusKey(level,no)]||{};
      const progress=Math.max(0,Math.min(100,Number(courseProgressPercent(record))||0));
      const lessonResults=resultList.filter(result=>
        (adminProgressDashboardResultLevel(result)||"A1")===level &&
        adminResultLessonIndex(result)===no-1
      );
      const doneFromResults=lessonResults.some(result=>
        Number(result.totalExercises)>0 &&
        Number(result.completedExercises)>=Number(result.totalExercises)
      );
      const hasResultActivity=lessonResults.some(result=>
        Number(result.totalExercises)>0 ||
        adminResultPercent(result)!==null ||
        (result.learnedWords&&Object.keys(result.learnedWords).length>0)
      );
      const completed=record.completed===true||progress>=100||doneFromResults;
      const inProgress=!completed&&(!!record.startedAt||progress>0||hasResultActivity);
      const doneExercises=lessonResults.reduce((sum,result)=>sum+(Number(result.completedExercises)||0),0);
      const totalExercises=lessonResults.reduce((sum,result)=>sum+(Number(result.totalExercises)||0),0);
      const resultProgress=totalExercises>0?Math.round(doneExercises/totalExercises*100):0;
      const effectiveProgress=completed?100:(progress>0?progress:resultProgress);
      states.push({
        key:progressLessonStatusKey(level,no),level,no,title:lesson.title,arabic:lesson.arabic,icon:lesson.icon,
        completed,inProgress,notStarted:!completed&&!inProgress,
        progress:Math.max(0,Math.min(100,effectiveProgress)),
        startedAt:record.startedAt||"",
        lastTabLabel:record.lastTabLabel||"",
        completedExercises:doneExercises,totalExercises
      });
    });
  });
  return states;
}
function progressLessonStatusKeyForState(state){
  return state.completed?"completed":state.inProgress?"inProgress":"notStarted";
}
function progressLessonStatusLabel(state){
  return state.completed?"درس متقن":state.inProgress?"قيد التعلّم":"لم يبدأ بعد";
}
function progressLessonStatusCounts(states){
  const list=states||[];
  return {
    all:list.length,
    completed:list.filter(item=>item.completed).length,
    inProgress:list.filter(item=>item.inProgress).length,
    notStarted:list.filter(item=>item.notStarted).length
  };
}
function lessonStatusFilterTabsMarkup(active,actionName){
  const tabs=[
    ["all","جميع الدروس","all"],
    ["completed","دروس متقنة","mastered"],
    ["inProgress","قيد التعلّم","in-progress"],
    ["notStarted","لم تبدأ","not-started"]
  ];
  return `<nav class="lesson-status-filter-tabs" aria-label="تصفية حالة الدروس">${tabs.map(([value,label,tone])=>
    `<button type="button" class="lesson-status-filter-tab ${tone} ${active===value?"active":""}" data-action="${actionName}" data-status="${value}" aria-pressed="${active===value?"true":"false"}">${label}</button>`
  ).join("")}</nav>`;
}
function lessonStatusDetailContentMarkup(states,statusFilter="all",groupMode=false){
  const allStates=Array.isArray(states)?states:[];
  const counts=groupMode
    ? allStates.reduce((sum,item)=>{
        sum.completed+=Number(item.completedCount)||0;
        sum.inProgress+=Number(item.inProgressCount)||0;
        sum.notStarted+=Number(item.notStartedCount)||0;
        sum.all+=Number(item.studentCount)||0;
        return sum;
      },{all:0,completed:0,inProgress:0,notStarted:0})
    : progressLessonStatusCounts(allStates);
  const filtered=allStates.filter(item=>statusFilter==="all"||(
    groupMode
      ? (Number(item[statusFilter==="completed"?"completedCount":statusFilter==="inProgress"?"inProgressCount":"notStartedCount"])||0)>0
      : !!item[statusFilter]
  ));
  const summary=`
    <div class="lesson-status-summary-grid">
      <article class="lesson-status-summary-card mastered"><span>✓</span><strong>${counts.completed}</strong><small>${groupMode?"حالات إتقان":"دروس متقنة"}</small></article>
      <article class="lesson-status-summary-card in-progress"><span>◷</span><strong>${counts.inProgress}</strong><small>${groupMode?"حالات تعلّم":"دروس قيد التعلّم"}</small></article>
      <article class="lesson-status-summary-card not-started"><span>○</span><strong>${counts.notStarted}</strong><small>${groupMode?"حالات لم تبدأ":"دروس لم تبدأ"}</small></article>
    </div>`;
  const cards=filtered.map(item=>{
    const lessonLabel=`${item.level} · L${item.no}`;
    if(groupMode){
      const students=(item.students||[]).filter(student=>statusFilter==="all"||student.status===statusFilter);
      const progress=item.studentCount?Math.round((item.completedCount/item.studentCount)*100):0;
      const studentRows=students.length?students.map(student=>`
        <div class="lesson-status-student-row">
          <div class="lesson-status-student-avatar">${escapeHtml(String(student.name||"ط").trim().slice(0,1)||"ط")}</div>
          <div class="lesson-status-student-copy"><strong>${escapeHtml(student.name||"التلميذ")}</strong><small>${student.status==="completed"?"درس متقن":student.status==="inProgress"?"قيد التعلّم":"لم يبدأ بعد"} · ${Number(student.progress)||0}%</small></div>
          <button type="button" class="lesson-status-student-open" data-action="admin-results-select-student" data-id="${escapeHtml(student.userId||"")}">عرض <span>←</span></button>
        </div>`).join(""):`<p class="lesson-status-empty">ما كاين حتى تلميذ فهاد الحالة لهذا الدرس.</p>`;
      return `<article class="lesson-status-lesson-card group">
        <header class="lesson-status-lesson-head"><span class="lesson-status-lesson-icon">${escapeHtml(item.icon||"📘")}</span><div><small>${lessonLabel}</small><h3>${escapeHtml(item.title||`الدرس ${item.no}`)}</h3><p>${escapeHtml(item.arabic||"")}</p></div><strong class="lesson-status-group-total">${item.studentCount} تلميذ</strong></header>
        <div class="lesson-status-group-counts">
          <span class="mastered"><i></i>${item.completedCount} متقن</span>
          <span class="in-progress"><i></i>${item.inProgressCount} قيد التعلّم</span>
          <span class="not-started"><i></i>${item.notStartedCount} لم يبدأ</span>
        </div>
        <div class="lesson-status-progress-track"><i style="width:${progress}%"></i></div>
        <div class="lesson-status-student-list">${studentRows}</div>
      </article>`;
    }
    const status=progressLessonStatusKeyForState(item);
    const tone=status==="completed"?"mastered":status==="inProgress"?"in-progress":"not-started";
    const detail=item.totalExercises>0?`${item.completedExercises||0} من ${item.totalExercises} تمريناً مكتملًا`:item.lastTabLabel?`آخر مرحلة: ${item.lastTabLabel}`:"لا توجد أنشطة مسجلة بعد";
    return `<article class="lesson-status-lesson-card">
      <header class="lesson-status-lesson-head"><span class="lesson-status-lesson-icon">${escapeHtml(item.icon||"📘")}</span><div><small>${lessonLabel}</small><h3>${escapeHtml(item.title||`الدرس ${item.no}`)}</h3><p>${escapeHtml(item.arabic||"")}</p></div><span class="lesson-status-pill ${tone}">${progressLessonStatusLabel(item)}</span></header>
      <div class="lesson-status-progress-track"><i class="${tone}" style="width:${Number(item.progress)||0}%"></i></div>
      <footer class="lesson-status-lesson-foot"><span>${escapeHtml(detail)}</span><strong>${Number(item.progress)||0}%</strong></footer>
    </article>`;
  }).join("");
  return `<div class="lesson-status-detail-content">
    ${summary}
    ${lessonStatusFilterTabsMarkup(statusFilter,groupMode?"admin-progress-lesson-status-filter":"student-results-lesson-status-filter")}
    <div class="lesson-status-lesson-grid">${cards||`<div class="lesson-status-empty-state"><span>📚</span><strong>لا توجد دروس في هذه الحالة</strong><small>جرّب اختيار حالة أخرى.</small></div>`}</div>
  </div>`;
}
function adminProgressLessonStatusGroupStates(metricsList){
  const map=new Map();
  (metricsList||[]).forEach(metrics=>{
    const user=metrics.user||{};
    (metrics.lessonStates||[]).forEach(state=>{
      if(!map.has(state.key)){
        map.set(state.key,{
          key:state.key,level:state.level,no:state.no,title:state.title,arabic:state.arabic,icon:state.icon,
          students:[],completedCount:0,inProgressCount:0,notStartedCount:0,studentCount:0
        });
      }
      const item=map.get(state.key);
      const status=progressLessonStatusKeyForState(state);
      item.students.push({
        userId:user.id||"",name:user.name||user.email||"التلميذ",
        status,progress:Number(state.progress)||0
      });
      item[status==="completed"?"completedCount":status==="inProgress"?"inProgressCount":"notStartedCount"]++;
      item.studentCount++;
    });
  });
  return [...map.values()].sort((a,b)=>a.level.localeCompare(b.level)||a.no-b.no);
}
function adminProgressLessonStatusOverlayMarkup(states,statusFilter,title,groupMode=false){
  return `<section class="student-results-tool-overlay lesson-status-fullscreen-overlay" role="dialog" aria-modal="true" aria-label="حالة الدروس">
    <header class="student-results-tool-header">
      <button type="button" class="student-results-tool-back" data-action="admin-progress-lesson-status-back"><span aria-hidden="true">←</span> رجوع للإحصائيات</button>
      <div class="student-results-tool-heading"><small>${groupMode?"تقدم المجموعة":"تقدم الطالب"}</small><h1>حالة الدروس</h1><p>${escapeHtml(title||"")}</p></div>
    </header>
    <main class="student-results-tool-body lesson-status-fullscreen-body">
      <div class="student-results-tool-content">${lessonStatusDetailContentMarkup(states,statusFilter,groupMode)}</div>
    </main>
  </section>`;
}

function adminProgressDashboardMetrics(user){
  const analytics=adminStudentAnalytics(user,{lesson:"all",type:"all"});
  const results=analytics.results||[];
  const courseRecords=adminProgressDashboardCourseRecords(user.id);
  const levels=new Set();
  Object.keys(courseRecords).forEach(key=>{
    const match=/^(A1|A2)_\d+$/i.exec(key);
    if(match)levels.add(match[1].toUpperCase());
  });
  results.forEach(result=>{
    const level=adminProgressDashboardResultLevel(result);
    if(level)levels.add(level);
  });
  if(!levels.size)levels.add("A1");
  const levelList=[...levels].sort((a,b)=>a.localeCompare(b));
  const lessonStates=buildProgressLessonStatusRecords(courseRecords,results,levelList);
  const completedLessons=lessonStates.filter(item=>item.completed).length;
  const inProgressLessons=lessonStates.filter(item=>item.inProgress).length;
  const notStartedLessons=lessonStates.filter(item=>item.notStarted).length;
  const startedLessons=completedLessons+inProgressLessons;
  const totalLessons=lessonStates.length;
  const lessonProgressPercent=totalLessons?Math.round(startedLessons/totalLessons*100):0;
  const hasCourseProgress=Object.keys(courseRecords).some(key=>/^(A1|A2)_\d+$/i.test(key));
  const courseAverageProgress=totalLessons?Math.round(lessonStates.reduce((sum,item)=>sum+item.progress,0)/totalLessons):0;
  const completedExercises=(analytics.byLesson||[]).reduce((sum,item)=>sum+(Number(item.completedExercises)||0),0);
  const totalExercises=(analytics.byLesson||[]).reduce((sum,item)=>sum+(Number(item.totalExercises)||0),0);
  const exerciseProgressPercent=totalExercises?Math.round(completedExercises/totalExercises*100):0;
  const overallProgressPercent=Math.max(0,Math.min(100,hasCourseProgress?courseAverageProgress:exerciseProgressPercent));
  const skillReport=studentBuildSkillReport(results,courseRecords);
  const vocabularySkill=skillReport.find(skill=>skill.id==="vocab")||{learnedItems:[],items:[]};
  const savedWordsCount=(vocabularySkill.learnedItems||[]).length;
  const reviewWordsCount=(vocabularySkill.items||[]).filter(item=>item.status==="medium"||item.status==="weak").length;
  const completedTasksCount=completedExercises;
  const totalTests=results.filter(result=>adminResultType(result)==="test").length;
  const activityByDay=cloudActivity?.[user.id]||{};
  const todayDate=new Date();
  todayDate.setHours(12,0,0,0);
  const todayKey=localDateKey(todayDate);
  const todayActivity=activityByDay[todayKey]||{};
  const dailyGoalMinutes=Math.max(0,Number(studentRequiredMinutes(user))||0);
  const todayMinutes=Math.floor((Number(todayActivity.totalSeconds)||0)/60);
  const dailyGoalPercent=dailyGoalMinutes>0?Math.min(100,Math.round(todayMinutes/dailyGoalMinutes*100)):0;
  const weekActivity=Array.from({length:7},(_,offset)=>{
    const date=new Date(todayDate);
    date.setDate(todayDate.getDate()-(6-offset));
    const key=localDateKey(date);
    const activity=activityByDay[key]||{};
    return {key,label:date.toLocaleDateString("ar-MA",{weekday:"short"}),minutes:Math.round((Number(activity.totalSeconds)||0)/60)};
  });
  const weekMinutes=weekActivity.reduce((sum,item)=>sum+item.minutes,0);
  const averageDailyMinutes=Math.round(weekMinutes/7);
  const maxWeekMinutes=Math.max(1,...weekActivity.map(item=>item.minutes));
  const weeklyBars=weekActivity.map(item=>{
    const height=item.minutes>0?Math.max(7,Math.round(item.minutes/maxWeekMinutes*100)):3;
    return `<div class="results-weekly-day" aria-label="${escapeHtml(item.label)}: ${item.minutes} دقيقة">
      <strong class="results-weekly-value">${item.minutes} د</strong>
      <div class="results-weekly-bar-track"><i style="height:${height}%"></i></div>
      <small>${escapeHtml(item.label)}</small>
    </div>`;
  }).join("");
  const hasActivityOn=date=>{
    const day=activityByDay[localDateKey(date)]||{};
    return (Number(day.totalSeconds)||0)>0 || (Number(day.loginCount)||0)>0;
  };
  let streakDate=new Date(todayDate);
  if(!hasActivityOn(streakDate))streakDate.setDate(streakDate.getDate()-1);
  let streakDays=0;
  for(let i=0;i<366 && hasActivityOn(streakDate);i++){
    streakDays++;
    streakDate.setDate(streakDate.getDate()-1);
  }
  return {
    user,levelLabel:levelList.join(" + "),overallProgressPercent,
    completedLessons,inProgressLessons,notStartedLessons,startedLessons,totalLessons,lessonProgressPercent,
    completedExercises,totalExercises,exerciseProgressPercent,completedTasksCount,
    savedWordsCount,reviewWordsCount,totalTests,averageScore:analytics.average,
    dailyGoalMinutes,todayMinutes,dailyGoalPercent,weekActivity,weekMinutes,averageDailyMinutes,weeklyBars,streakDays,
    skillReport,analytics,lessonStates
  };
}
function adminProgressDashboardAggregate(metricsList){
  const list=metricsList||[];
  const sum=key=>list.reduce((total,item)=>total+(Number(item[key])||0),0);
  const average=key=>list.length?Math.round(sum(key)/list.length):0;
  const scored=list.filter(item=>item.averageScore!==null && item.averageScore!==undefined);
  const levels=[...new Set(list.flatMap(item=>String(item.levelLabel||"").split(" + ").filter(Boolean)))];
  const weekActivity=Array.from({length:7},(_,index)=>({
    key:list[0]?.weekActivity?.[index]?.key||"",
    label:list[0]?.weekActivity?.[index]?.label||"",
    minutes:list.reduce((total,item)=>total+(Number(item.weekActivity?.[index]?.minutes)||0),0)
  }));
  const weekMinutes=weekActivity.reduce((total,item)=>total+item.minutes,0);
  const maxWeekMinutes=Math.max(1,...weekActivity.map(item=>item.minutes));
  const weeklyBars=weekActivity.map(item=>{
    const height=item.minutes>0?Math.max(7,Math.round(item.minutes/maxWeekMinutes*100)):3;
    return `<div class="results-weekly-day" aria-label="${escapeHtml(item.label)}: ${item.minutes} دقيقة">
      <strong class="results-weekly-value">${item.minutes} د</strong>
      <div class="results-weekly-bar-track"><i style="height:${height}%"></i></div>
      <small>${escapeHtml(item.label)}</small>
    </div>`;
  }).join("");
  const totalLessons=sum("totalLessons"),startedLessons=sum("startedLessons");
  return {
    levelLabel:levels.length===1?levels[0]:(levels.length?"متعدد المستويات":"—"),
    overallProgressPercent:average("overallProgressPercent"),
    completedLessons:sum("completedLessons"),inProgressLessons:sum("inProgressLessons"),
    notStartedLessons:sum("notStartedLessons"),startedLessons,totalLessons,
    lessonProgressPercent:totalLessons?Math.round(startedLessons/totalLessons*100):0,
    completedExercises:sum("completedExercises"),totalExercises:sum("totalExercises"),
    completedTasksCount:sum("completedTasksCount"),savedWordsCount:sum("savedWordsCount"),
    reviewWordsCount:sum("reviewWordsCount"),totalTests:sum("totalTests"),
    averageScore:scored.length?Math.round(scored.reduce((total,item)=>total+Number(item.averageScore),0)/scored.length):null,
    dailyGoalMinutes:sum("dailyGoalMinutes"),todayMinutes:sum("todayMinutes"),
    dailyGoalPercent:sum("dailyGoalMinutes")?Math.min(100,Math.round(sum("todayMinutes")/sum("dailyGoalMinutes")*100)):0,
    weekActivity,weekMinutes,averageDailyMinutes:Math.round(weekMinutes/7),weeklyBars,
    streakDays:average("streakDays"),studentCount:list.length
  };
}
function adminProgressDashboardMarkup(metrics,title,subtitle,groupMode=false,embeddedFilters=""){
  const savedWordsLabel=groupMode?"مفردة محفوظة لدى المجموعة":"مفردة محفوظة";
  const lessonLabel=groupMode?"دروس متقنة لدى المجموعة":"دروس متقنة";
  const streakLabel=groupMode?"متوسط أيام الاستمرارية":"يوماً متتالياً";
  const tasksLabel=groupMode?"مهمة مكتملة لدى المجموعة":"مهمة مكتملة";
  const goalTitle=groupMode?`هدف اليوم للمجموعة ${metrics.dailyGoalMinutes} دقيقة`:`${metrics.dailyGoalMinutes>0?`هدف الطالب اليومي ${metrics.dailyGoalMinutes} دقيقة`:"لم يتم تحديد هدف يومي"}`;
  const groupCount=groupMode?` · ${Number(metrics.studentCount)||0} متعلم` : "";
  const averageScoreMarkup=metrics.averageScore===null || metrics.averageScore===undefined
    ? ""
    : `<div class="admin-progress-average-score"><span>متوسط نتائج الاختبارات</span><strong>${metrics.averageScore}%</strong></div>`;
  return `<section class="admin-panel admin-progress-dashboard-panel">
    <div class="admin-section-head admin-progress-dashboard-heading">
      <div><p class="admin-eyebrow">لوحة التقدم والإحصائيات</p><h2>نتائج وإحصائيات التعلّم</h2><p>${escapeHtml(title)}${groupCount} · ${escapeHtml(subtitle||"نظرة شاملة على التقدم")}</p></div>
      <span class="admin-progress-dashboard-mark">🏆</span>
    </div>
    <div class="admin-progress-dashboard-canvas">${embeddedFilters}<div class="student-results-dashboard admin-student-results-dashboard">
      <section class="results-summary-card" aria-label="إجمالي التقدم والمستوى الحالي">
        <div class="results-summary-overall"><small>${groupMode?"متوسط التقدم داخل المجموعة":"إجمالي التقدم"}</small><strong>${metrics.overallProgressPercent}%</strong><div class="results-summary-track"><i style="width:${metrics.overallProgressPercent}%"></i></div></div>
        <div class="results-summary-level"><span class="results-summary-trophy" aria-hidden="true">🏆</span><div><small>${groupMode?"المستويات داخل المجموعة":"المستوى الحالي"}</small><strong>${escapeHtml(metrics.levelLabel||"—")}</strong></div></div>
      </section>
      <section class="results-dashboard-card results-learning-stats">
        <div class="results-section-heading"><h2>إحصائيات التعلم</h2><span aria-hidden="true">▥</span></div>
        <div class="results-stat-grid">
          <button type="button" class="results-stat-card words admin-results-metric-button" data-action="admin-progress-open-metric" data-metric="words" aria-label="عرض الكلمات المحفوظة"><span class="results-stat-icon">▰</span><strong>${metrics.savedWordsCount}</strong><small>${savedWordsLabel}</small></button>
          <button type="button" class="results-stat-card lessons admin-results-metric-button" data-action="admin-progress-open-metric" data-metric="lessons" aria-label="عرض الدروس المتقنة"><span class="results-stat-icon">📖</span><strong>${metrics.completedLessons}</strong><small>${lessonLabel}</small></button>
          <button type="button" class="results-stat-card streak admin-results-metric-button" data-action="admin-progress-open-metric" data-metric="streak" aria-label="عرض الأيام المتتالية"><span class="results-stat-icon">🔥</span><strong>${metrics.streakDays}</strong><small>${streakLabel}</small></button>
          <button type="button" class="results-stat-card tasks admin-results-metric-button" data-action="admin-progress-open-metric" data-metric="tasks" aria-label="عرض التمارين المكتملة"><span class="results-stat-icon">✓</span><strong>${metrics.completedTasksCount}</strong><small>${tasksLabel}</small></button>
        </div>
      </section>
      <div class="results-dashboard-two-col">
        <section class="results-dashboard-card results-daily-goal">
          <div class="results-section-heading"><h2>${groupMode?"هدف المجموعة اليوم":"هدف اليوم"}</h2><span aria-hidden="true">🎯</span></div>
          <strong class="results-goal-title">${escapeHtml(goalTitle)}</strong>
          <div class="results-goal-track"><i style="width:${metrics.dailyGoalPercent}%"></i></div>
          <div class="results-goal-meta"><strong>${metrics.dailyGoalMinutes>0?`${metrics.todayMinutes} / ${metrics.dailyGoalMinutes} دقيقة`:`${metrics.todayMinutes} دقيقة تعلم اليوم`}</strong><span>${metrics.dailyGoalMinutes>0?metrics.dailyGoalPercent+"%":""}</span></div>
        </section>
        <section class="results-dashboard-card results-lesson-status">
          <div class="results-section-heading"><h2>حالة الدروس</h2><span aria-hidden="true">📚</span></div>
          <div class="results-lesson-status-body">
            <button type="button" class="results-lesson-ring results-lesson-ring-button" data-action="admin-progress-open-lesson-status" data-status="all" aria-label="عرض جميع الدروس" style="--lesson-progress:${metrics.lessonProgressPercent}%"><span><strong>${metrics.startedLessons}/${metrics.totalLessons}</strong><small>${groupMode?"حالات الدروس":"دروس"}</small></span></button>
            <div class="results-lesson-legend">
              <button type="button" data-action="admin-progress-open-lesson-status" data-status="completed"><i class="mastered"></i><span>${metrics.completedLessons} دروس متقنة</span></button>
              <button type="button" data-action="admin-progress-open-lesson-status" data-status="inProgress"><i class="in-progress"></i><span>${metrics.inProgressLessons} دروس قيد التعلم</span></button>
              <button type="button" data-action="admin-progress-open-lesson-status" data-status="notStarted"><i class="not-started"></i><span>${metrics.notStartedLessons} دروس لم تبدأ بعد</span></button>
            </div>
          </div>
        </section>
      </div>
      <section class="results-dashboard-card results-vocabulary-card">
        <div class="results-section-heading"><h2>المفردات</h2><span aria-hidden="true">📖</span></div>
        <div class="results-vocabulary-content">
          <div class="results-vocabulary-illustration" aria-hidden="true"><span>🇩🇪</span><b>Wort</b></div>
          <button type="button" class="results-vocabulary-stat saved admin-results-vocab-button" data-action="admin-progress-open-metric" data-metric="words" aria-label="تفاصيل الكلمات المحفوظة"><strong>${metrics.savedWordsCount}<i>✓</i></strong><small>${savedWordsLabel}</small></button>
          <button type="button" class="results-vocabulary-stat review admin-results-vocab-button" data-action="admin-progress-open-metric" data-metric="review" aria-label="تفاصيل الكلمات التي تحتاج مراجعة"><strong>${metrics.reviewWordsCount}<i>↻</i></strong><small>${groupMode?"مفردة تحتاج إلى مراجعة":"مفردة تحتاج إلى مراجعة"}</small></button>
        </div>
      </section>
      <section class="results-dashboard-card results-weekly-card">
        <div class="results-weekly-heading"><div class="results-section-heading"><h2>متوسط مدة التعلّم اليومية</h2><span aria-hidden="true">◷</span></div><span class="results-weekly-average">◷ ${metrics.averageDailyMinutes} دقيقة</span></div>
        <div class="results-weekly-chart">${metrics.weeklyBars}</div>
      </section>
      ${averageScoreMarkup?`<div class="admin-progress-dashboard-average-wrap">${averageScoreMarkup}</div>`:""}
    </div></div>
  </section>`;
}
// V34: Admin drill-down pages are read-only and sourced from existing student records.
function adminProgressMetricInfo(metric){
  const map={
    words:{label:"الكلمات المحفوظة",icon:"📚",key:"savedWordsCount",description:"الكلمات اللي تفاعل معها المتعلم داخل الدروس وتخزّنات في التقدم"},
    review:{label:"كلمات تحتاج مراجعة",icon:"🔄",key:"reviewWordsCount",description:"الكلمات اللي تقيمات بنتيجة متوسطة أو ضعيفة"},
    lessons:{label:"الدروس المتقنة",icon:"📖",key:"completedLessons",description:"الدروس اللي تسجلات كمكتملة حسب التقدم والاختبارات"},
    streak:{label:"الأيام المتتالية",icon:"🔥",key:"streakDays",description:"النشاط اليومي المحفوظ فقاعدة البيانات"},
    tasks:{label:"التمارين المكتملة",icon:"✅",key:"completedTasksCount",description:"التمارين المكتملة كما هي مسجلة في نتائج الطالب"}
  };
  return map[metric]||map.words;
}
function adminProgressMetricFormatDate(value){
  if(!value)return "";
  const date=new Date(value);
  return Number.isFinite(date.getTime())?date.toLocaleDateString("ar-MA",{year:"numeric",month:"short",day:"numeric"}):"";
}
function adminProgressMetricEmpty(message){
  return `<div class="admin-metric-empty"><span aria-hidden="true">📭</span><strong>${escapeHtml(message)}</strong><p>التفاصيل كتظهر ملي كتكون البيانات مسجلة فحساب التلميذ ومزامنة مع Firebase.</p></div>`;
}
function adminProgressMetricStudentDetail(metrics,metric){
  const info=adminProgressMetricInfo(metric);
  const count=Number(metrics[info.key])||0;
  let entries="";
  if(metric==="words"){
    const words=(metrics.skillReport||[]).find(item=>item.id==="vocab")?.learnedItems||[];
    entries=words.map(item=>`<article class="admin-metric-record word">
      <div class="admin-metric-record-icon">🇩🇪</div>
      <div class="admin-metric-record-copy"><strong dir="ltr">${escapeHtml(item.label||"")}</strong><span>${escapeHtml(item.meaning||"لا توجد ترجمة مسجلة")}</span></div>
      <div class="admin-metric-record-meta"><b>${escapeHtml(String(item.level||"A1"))} · L${Number(item.lessonIndex)>=0?Number(item.lessonIndex)+1:"—"}</b>${item.learnedAt?`<small>${escapeHtml(adminProgressMetricFormatDate(item.learnedAt))}</small>`:""}</div>
    </article>`).join("");
  }else if(metric==="review"){
    const vocab=(metrics.skillReport||[]).find(item=>item.id==="vocab");
    entries=(vocab?.items||[]).filter(item=>item.status==="medium"||item.status==="weak").map(item=>`<article class="admin-metric-record">
      <div class="admin-metric-record-icon">${item.status==="weak"?"🔴":"🟠"}</div>
      <div class="admin-metric-record-copy"><strong dir="ltr">${escapeHtml(item.label||"")}</strong><span>${escapeHtml(item.meaning||item.sourceTitle||"")}</span></div>
      <div class="admin-metric-record-meta"><b>${Number(item.percent)||0}%</b><small>L${Number(item.lessonIndex)>=0?Number(item.lessonIndex)+1:"—"} · ${Number(item.attempts)||0} محاولات</small></div>
    </article>`).join("");
  }else if(metric==="lessons"){
    entries=(metrics.lessonStates||[]).filter(item=>item.completed).map(item=>`<article class="admin-metric-record">
      <div class="admin-metric-record-icon">${escapeHtml(item.icon||"📘")}</div>
      <div class="admin-metric-record-copy"><strong>${escapeHtml(item.title||`الدرس ${item.no}`)}</strong><span>${escapeHtml(item.arabic||"")}</span></div>
      <div class="admin-metric-record-meta"><b>${escapeHtml(item.level||"A1")} · L${Number(item.no)||"—"}</b><small>${Number(item.progress)||0}% · متقن</small></div>
    </article>`).join("");
  }else if(metric==="streak"){
    const activity=cloudActivity?.[metrics.user?.id]||{};
    const today=new Date();today.setHours(12,0,0,0);
    const dates=Array.from({length:30},(_,offset)=>{
      const date=new Date(today);date.setDate(today.getDate()-offset);
      const day=activity[localDateKey(date)]||{};
      const seconds=Math.max(0,Number(day.totalSeconds)||0);
      const visits=Math.max(0,Number(day.loginCount)||0);
      return {date,seconds,visits,active:seconds>0||visits>0};
    });
    entries=dates.map(item=>`<article class="admin-metric-record day ${item.active?"active":"inactive"}">
      <div class="admin-metric-record-icon">${item.active?"🟢":"⚪"}</div>
      <div class="admin-metric-record-copy"><strong>${escapeHtml(item.date.toLocaleDateString("ar-MA",{weekday:"long",day:"numeric",month:"long"}))}</strong><span>${item.active?"تم تسجيل نشاط":"ما تسجّل حتى نشاط"}</span></div>
      <div class="admin-metric-record-meta"><b>${Math.floor(item.seconds/60)} دقيقة</b><small>${item.visits} مرات دخول</small></div>
    </article>`).join("");
  }else if(metric==="tasks"){
    entries=(metrics.analytics?.results||[]).filter(item=>(Number(item.completedExercises)||0)>0).map(item=>{
      const done=Math.max(0,Number(item.completedExercises)||0);
      const total=Math.max(0,Number(item.totalExercises)||0);
      const level=adminProgressDashboardResultLevel(item)||"A1";
      const lesson=adminResultLessonIndex(item)+1;
      const when=adminProgressMetricFormatDate(item.updatedAt||item.completedAt||item.timestamp||item.createdAt);
      return `<article class="admin-metric-record">
        <div class="admin-metric-record-icon">✅</div>
        <div class="admin-metric-record-copy"><strong>${escapeHtml(item.title||item.moduleId||"تمارين الدرس")}</strong><span>${escapeHtml(level)} · L${lesson>0?lesson:"—"}${when?` · ${escapeHtml(when)}`:""}</span></div>
        <div class="admin-metric-record-meta"><b>${done} مكتمل</b><small>${total?`من ${total} تمرين`:"حسب النتائج المسجلة"}</small></div>
      </article>`;
    }).join("");
  }
  const extra=metric==="streak"?`<p class="admin-metric-footnote">هذه آخر 30 يوم من النشاط، أما الرقم أعلاه فهو عدد الأيام المتتالية الحالي.</p>`
    :metric==="words"?`<p class="admin-metric-footnote">حفظ الكلمة يعني التفاعل معاها داخل الدرس، وماشي بالضرورة الإتقان فالاختبار.</p>`
    :"";
  return `<div class="admin-metric-student-view">
    <section class="admin-metric-summary"><div><small>${escapeHtml(info.description)}</small><h2>${escapeHtml(metrics.user?.name||metrics.user?.email||"التلميذ")}</h2><p>${escapeHtml(metrics.user?.email||"")}</p></div><div class="admin-metric-summary-number"><strong>${count}</strong><span>${escapeHtml(info.label)}</span></div></section>
    <div class="admin-metric-section-caption"><h3>${escapeHtml(info.label)}</h3><span>${count} مسجل</span></div>
    <div class="admin-metric-record-list">${entries||adminProgressMetricEmpty("مازال ما تسجلات حتى تفاصيل لهذا الاختيار")}</div>
    ${extra}
  </div>`;
}
function adminProgressMetricOverlayMarkup(metric,groupUsers,groupTitle,selectedUser=null,drillUser=null){
  const info=adminProgressMetricInfo(metric);
  const actualUser=selectedUser||drillUser;
  const groupMode=!actualUser;
  const studentList=(Array.isArray(groupUsers)?groupUsers:[]).map(user=>({user,metrics:adminProgressDashboardMetrics(user)}));
  const count=actualUser?Number(adminProgressDashboardMetrics(actualUser)[info.key])||0:studentList.reduce((sum,item)=>sum+(Number(item.metrics[info.key])||0),0);
  const body=actualUser
    ?adminProgressMetricStudentDetail(adminProgressDashboardMetrics(actualUser),metric)
    :`<section class="admin-metric-summary"><div><small>إحصائيات التلاميذ حسب المجموعة</small><h2>${escapeHtml(groupTitle)}</h2><p>اختار تلميذ باش تشوف التفاصيل ديالو</p></div><div class="admin-metric-summary-number"><strong>${count}</strong><span>${metric==="streak"?"مجموع أيام الاستمرارية":"إجمالي "+info.label}</span></div></section>
       <div class="admin-metric-section-caption"><h3>تلاميذ المجموعة</h3><span>${studentList.length} تلميذ</span></div>
       <div class="admin-metric-member-list">${studentList.length?studentList.map(({user,metrics})=>`
         <button type="button" class="admin-metric-member" data-action="admin-progress-metric-select-student" data-id="${escapeHtml(user.id||"")}">
           <span class="admin-metric-member-avatar">${escapeHtml(String(user.name||user.email||"ط").trim().slice(0,1)||"ط")}</span>
           <span class="admin-metric-member-copy"><strong>${escapeHtml(user.name||user.email||"التلميذ")}</strong><small>${escapeHtml(user.email||"")}</small></span>
           <span class="admin-metric-member-count"><strong>${Number(metrics[info.key])||0}</strong><small>${escapeHtml(info.label)}</small></span><span class="admin-metric-member-arrow">←</span>
         </button>`).join(""):adminProgressMetricEmpty("ما كاين حتى تلميذ فهاد المجموعة")}</div>`;
  const goBack=drillUser&&!selectedUser?"admin-progress-metric-group-back":"admin-progress-metric-close";
  return `<section class="student-results-tool-overlay admin-metric-overlay" role="dialog" aria-modal="true" aria-label="تفاصيل ${escapeHtml(info.label)}">
    <header class="student-results-tool-header"><button type="button" class="student-results-tool-back" data-action="${goBack}"><span aria-hidden="true">←</span>${goBack==="admin-progress-metric-group-back"?"رجوع للمجموعة":"رجوع للنتائج"}</button>
      <div class="student-results-tool-heading"><small>لوحة النتائج · تفاصيل التلاميذ</small><h1>${info.icon} ${escapeHtml(info.label)}</h1></div>
    </header>
    <main class="student-results-tool-body admin-metric-body"><div class="student-results-tool-content admin-metric-content">${body}</div></main>
  </section>`;
}

function adminProgressDashboardForStudent(user,embeddedFilters=""){
  const metrics=adminProgressDashboardMetrics(user);
  const groupName=studentGroupName(user);
  return adminProgressDashboardMarkup(metrics,user.name||user.email||"الطالب",`${groupName} · ${user.email||""}`,false,embeddedFilters);
}
function adminProgressDashboardForGroup(groupName,groupUsers,embeddedFilters=""){
  const metricsList=(groupUsers||[]).map(user=>adminProgressDashboardMetrics(user));
  if(!metricsList.length){
    return `<section class="admin-panel admin-progress-dashboard-panel">
      <div class="admin-section-head admin-progress-dashboard-heading"><div><p class="admin-eyebrow">لوحة التقدم والإحصائيات</p><h2>نتائج وإحصائيات التعلّم</h2><p>${escapeHtml(groupName)}</p></div><span class="admin-progress-dashboard-mark" aria-hidden="true">🏆</span></div>
      <div class="admin-progress-dashboard-canvas">${embeddedFilters}<p class="admin-empty-note admin-results-no-members">ما كاين حتى طالب فهاد المجموعة باش نعرضو الإحصائيات.</p></div>
    </section>`;
  }
  const aggregate=adminProgressDashboardAggregate(metricsList);
  return adminProgressDashboardMarkup(aggregate,groupName,"متوسطات وإجماليات أعضاء المجموعة",true,embeddedFilters);
}

const ADMIN_DAILY_TASK_STAGES=[
  {id:"kurs",label:"Kurs · الدروس",icon:"📚"},
  {id:"vocabulary",label:"Wortschatz · المفردات",icon:"📖"},
  {id:"grammar",label:"Grammatik · القواعد",icon:"📐"},
  {id:"teste",label:"Teste · الاختبارات",icon:"📝"},
  {id:"training-lesen",label:"Training Prüfung · Lesen",icon:"📖"},
  {id:"training-schreiben",label:"Training Prüfung · Schreiben",icon:"✍️"},
  {id:"training-hoeren",label:"Training Prüfung · Hören",icon:"🎧"},
  {id:"training-muendlich",label:"Training Prüfung · Mündlich",icon:"💬"},
  {id:"pruefungen",label:"Prüfungen · نماذج الامتحان",icon:"🏆"},
  {id:"general",label:"Aufgabe · مهمة عامة",icon:"📌"}
];
function adminTaskStageLabel(stage){return ADMIN_DAILY_TASK_STAGES.find(item=>item.id===stage)?.label||"مهمة عامة";}
function adminTaskStageIcon(stage){return ADMIN_DAILY_TASK_STAGES.find(item=>item.id===stage)?.icon||"📌";}
function adminTaskTargetUsers(task,groupUsers){
  if(task?.targetMode!=="students")return groupUsers;
  const targets=task.targetStudents||{};
  return groupUsers.filter(user=>Array.isArray(targets)?targets.includes(user.id):targets[user.id]===true);
}
function safeAssignedTaskPath(value){
  const raw=String(value||"").trim();
  if(!raw)return "";
  if(/^https?:\/\//i.test(raw)){
    try{const url=new URL(raw);return ["http:","https:"].includes(url.protocol)?url.href:"";}catch(error){return "";}
  }
  const normalized=raw.replace(/\\/g,"/").replace(/^\/+/,"");
  if(!normalized.startsWith("pages/")||normalized.split("/").includes(".."))return "";
  return normalized;
}
function renderAdminDailyTasksSection(realGroups,users,today){
  if(!adminTaskGroupId||!cloudGroups[adminTaskGroupId])adminTaskGroupId=realGroups[0]?.[0]||"";
  const group=adminTaskGroupId?cloudGroups[adminTaskGroupId]:null;
  const groupUsers=group?users.filter(user=>user.groupId===adminTaskGroupId):[];
  const tasks=group?Object.entries(group.dailyTasks||{}).map(([id,task])=>({id,...(task||{})})).sort((a,b)=>String(b.updatedAt||b.createdAt||"").localeCompare(String(a.updatedAt||a.createdAt||""))):[];
  const editing=adminEditingTaskId?tasks.find(task=>task.id===adminEditingTaskId):null;
  if(adminEditingTaskId&&!editing)adminEditingTaskId=null;
  const current=editing||{};
  const publishedCount=tasks.filter(task=>task.published===true).length;
  const completedTotal=tasks.reduce((sum,task)=>{
    const targets=adminTaskTargetUsers(task,groupUsers);
    return sum+targets.filter(user=>cloudTaskProgress?.[user.id]?.[task.id]?.done).length;
  },0);
  const assignedTotal=tasks.reduce((sum,task)=>sum+adminTaskTargetUsers(task,groupUsers).length,0);
  const completionPercent=assignedTotal?Math.round(completedTotal/assignedTotal*100):0;
  const groupOptions=realGroups.map(([id,item])=>`<option value="${escapeHtml(id)}" ${id===adminTaskGroupId?"selected":""}>${escapeHtml(item.name||id)} · ${normalizeGroupCourseLevel(item.level)}</option>`).join("");
  const taskOptions=ADMIN_DAILY_TASK_STAGES.map(item=>`<option value="${item.id}" ${current.stage===item.id?"selected":""}>${item.icon} ${item.label}</option>`).join("");
  const studentChecks=groupUsers.length?groupUsers.map(user=>{
    const checked=current.targetMode==="students" && (Array.isArray(current.targetStudents)?current.targetStudents.includes(user.id):current.targetStudents?.[user.id]===true);
    return `<label class="admin-task-student-option"><input type="checkbox" name="adminTaskStudent" value="${escapeHtml(user.id)}" ${checked?"checked":""}><span><strong>${escapeHtml(user.name||"طالب")}</strong><small>${escapeHtml(user.email||"")}</small></span></label>`;
  }).join(""):`<p class="admin-empty-note">ما كاين حتى تلميذ فهاد المجموعة حالياً.</p>`;
  const taskCards=tasks.length?tasks.map(task=>{
    const targets=adminTaskTargetUsers(task,groupUsers);
    const progressKey=assignedTaskProgressKey(task.id,task);
    const done=targets.filter(user=>cloudTaskProgress?.[user.id]?.[progressKey]?.done).length;
    const started=targets.filter(user=>cloudTaskProgress?.[user.id]?.[progressKey]?.startedAt&&!cloudTaskProgress?.[user.id]?.[progressKey]?.done).length;
    const due=task.dueDate?`آخر أجل: ${escapeHtml(task.dueDate)}`:"بدون أجل محدد";
    return `<article class="admin-task-card ${task.published===true?"is-published":"is-draft"}">
      <div class="admin-task-card-main"><span class="admin-task-card-icon">${escapeHtml(task.icon||adminTaskStageIcon(task.stage))}</span><div class="admin-task-card-copy"><div class="admin-task-card-meta"><span>${escapeHtml(adminTaskStageLabel(task.stage))}</span><span class="${task.published===true?"published":"draft"}">${task.published===true?"منشورة":"مسودة / متوقفة"}</span></div><h3>${escapeHtml(task.title||"مهمة بدون عنوان")}</h3><p>${escapeHtml(task.description||"بدون وصف")}</p><small>${due} · ${Math.max(0,Number(task.durationMinutes)||0)} دقيقة · ${task.schedule==="daily"?"تظهر يومياً داخل الفترة":"مرة واحدة"}</small></div></div>
      <div class="admin-task-card-progress"><strong>${done}/${targets.length}</strong><span>أكملوا المهمة</span><i><b style="width:${targets.length?Math.round(done/targets.length*100):0}%"></b></i><small>${started} قيد الإنجاز · ${targets.length-done-started} لم يبدأوا</small></div>
      <div class="admin-task-card-actions"><button type="button" class="tiny-btn" data-action="admin-task-details" data-id="${escapeHtml(task.id)}">متابعة التلاميذ</button><button type="button" class="tiny-btn" data-action="admin-task-edit" data-id="${escapeHtml(task.id)}">تعديل</button><button type="button" class="tiny-btn" data-action="admin-task-toggle-published" data-id="${escapeHtml(task.id)}">${task.published===true?"إيقاف النشر":"نشر"}</button><button type="button" class="tiny-btn danger" data-action="admin-task-delete" data-id="${escapeHtml(task.id)}">حذف</button></div>
    </article>`;
  }).join(""):`<div class="admin-task-empty"><span>🗓️</span><h3>مازال ما تحددات حتى مهمة لهاد المجموعة</h3><p>أنشئ أول مهمة، اختار المرحلة والموعد، ومن بعد انشرها للتلاميذ.</p></div>`;
  let detailMarkup="";
  if(adminTaskDetailId){
    const task=tasks.find(item=>item.id===adminTaskDetailId);
    if(task){
      const targets=adminTaskTargetUsers(task,groupUsers);
      const progressKey=assignedTaskProgressKey(task.id,task);
      detailMarkup=`<section class="admin-panel admin-task-detail-panel"><div class="admin-section-head"><div><p class="admin-eyebrow">متابعة الإنجاز</p><h2>${escapeHtml(task.title||"المهمة")}</h2><p>${escapeHtml(adminTaskStageLabel(task.stage))} · ${targets.length} تلميذ مستهدف</p></div><button type="button" class="outline-btn" data-action="admin-task-close-details">إغلاق</button></div><div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>التلميذ</th><th>الحالة</th><th>بدأ في</th><th>أكمل في</th><th>إجراء</th></tr></thead><tbody>${targets.map(user=>{const progress=cloudTaskProgress?.[user.id]?.[progressKey]||{};const status=progress.done?'<span class="status-pill active">مكتملة</span>':progress.startedAt?'<span class="status-pill warning">قيد الإنجاز</span>':'<span class="status-pill inactive">لم تبدأ</span>';return `<tr><td><strong>${escapeHtml(user.name||"—")}</strong><small>${escapeHtml(user.email||"")}</small></td><td>${status}</td><td>${progress.startedAt?escapeHtml(new Date(progress.startedAt).toLocaleString("ar-MA")):"—"}</td><td>${progress.completedAt?escapeHtml(new Date(progress.completedAt).toLocaleString("ar-MA")):"—"}</td><td><button type="button" class="tiny-btn" data-action="admin-task-student-progress-toggle" data-id="${escapeHtml(user.id)}" data-task-id="${escapeHtml(task.id)}">${progress.done?"إعادة فتح":"تحديد كمكتملة"}</button></td></tr>`;}).join("")||'<tr><td colspan="5" class="empty-cell">لا يوجد تلاميذ مستهدفون.</td></tr>'}</tbody></table></div></section>`;
    }
  }
  if(!realGroups.length)return `<section class="admin-welcome"><div><p class="admin-eyebrow">Aufgabenverwaltung</p><h1>إدارة المهام اليومية</h1><p>أنشئ خططاً مختلفة لكل مجموعة وتابع إنجاز التلاميذ.</p></div></section><section class="admin-panel admin-task-empty"><span>👥</span><h2>خاصك تنشئ مجموعة أولاً</h2><p>المهام كتترتب حسب المجموعة. أنشئ مجموعة وأضف ليها التلاميذ، ومن بعد رجع لهنا.</p><button type="button" class="primary-btn" data-action="admin-nav" data-section="groups">فتح إدارة المجموعات</button></section>`;
  return `<section class="admin-welcome admin-task-welcome"><div><p class="admin-eyebrow">Aufgabenverwaltung · خطة التعلم</p><h1>إدارة المهام اليومية</h1><p>حدد شنو خاص كل مجموعة تدير، فاش تبدا المهمة، آخر أجل، والمرحلة التعليمية. تقدر تعيّنها للمجموعة كاملة أو لتلاميذ تختارهم.</p></div><div class="admin-task-welcome-actions"><span class="admin-task-welcome-icon">🗓️</span><button type="button" class="primary-btn" data-action="admin-task-new">＋ مهمة جديدة</button></div></section>
    <section class="admin-task-summary-grid"><article><span>👥</span><strong>${groupUsers.length}</strong><small>تلاميذ فالمجموعة</small></article><article><span>📋</span><strong>${tasks.length}</strong><small>مجموع المهام</small></article><article><span>🚀</span><strong>${publishedCount}</strong><small>مهام منشورة</small></article><article><span>✓</span><strong>${completionPercent}%</strong><small>نسبة الإنجاز</small></article></section>
    <section class="admin-panel admin-task-group-select-panel"><label for="adminTaskGroupSelect">اختار المجموعة</label><select id="adminTaskGroupSelect">${groupOptions}</select><span class="admin-task-level-chip">المستوى: ${normalizeGroupCourseLevel(group?.level||"A1")}</span><small>كل مجموعة عندها خطة مهام مستقلة.</small></section>
    <section class="admin-panel admin-task-form-panel"><div class="admin-section-head"><div><p class="admin-eyebrow">${editing?"تعديل المهمة":"مهمة جديدة"}</p><h2>${editing?"تعديل إعدادات المهمة":"إنشاء مهمة للتلاميذ"}</h2><p>المجموعة المختارة: ${escapeHtml(group?.name||"")} · ${normalizeGroupCourseLevel(group?.level||"A1")}</p></div><span class="admin-task-form-mark">＋</span></div>
      <div class="admin-task-form-grid">
        <label class="admin-task-field"><span>عنوان المهمة *</span><input id="adminTaskTitle" type="text" maxlength="100" value="${escapeHtml(current.title||"")}" placeholder="مثلاً: مراجعة مفردات Lektion 6"></label>
        <label class="admin-task-field"><span>المرحلة / القسم *</span><select id="adminTaskStage">${taskOptions}</select></label>
        <label class="admin-task-field"><span>رقم الدرس (اختياري)</span><select id="adminTaskLessonNo"><option value="">بدون درس محدد</option>${Array.from({length:10},(_,i)=>`<option value="${i+1}" ${Number(current.lessonNo)===i+1?"selected":""}>Lektion ${i+1}</option>`).join("")}</select></label>
        <label class="admin-task-field"><span>المدة المتوقعة بالدقائق</span><input id="adminTaskDuration" type="number" min="0" max="600" value="${Number(current.durationMinutes)||15}"></label>
        <label class="admin-task-field"><span>تاريخ البداية / يوم المهمة</span><input id="adminTaskStartDate" type="date" value="${escapeHtml(current.startDate||today)}"></label>
        <label class="admin-task-field"><span>آخر أجل</span><input id="adminTaskDueDate" type="date" value="${escapeHtml(current.dueDate||today)}"></label>
        <label class="admin-task-field"><span>طريقة العرض</span><select id="adminTaskSchedule"><option value="once" ${current.schedule!=="daily"?"selected":""}>مرة واحدة في التاريخ المحدد</option><option value="daily" ${current.schedule==="daily"?"selected":""}>كل يوم داخل الفترة</option></select></label>
        <label class="admin-task-field"><span>الأولوية</span><select id="adminTaskPriority"><option value="normal" ${!current.priority||current.priority==="normal"?"selected":""}>عادية</option><option value="high" ${current.priority==="high"?"selected":""}>مهمة جداً</option><option value="low" ${current.priority==="low"?"selected":""}>منخفضة</option></select></label>
        <label class="admin-task-field admin-task-field-wide"><span>الوصف والتعليمات للتلميذ</span><textarea id="adminTaskDescription" rows="3" maxlength="1200" placeholder="شرح المطلوب، عدد الكلمات أو الأسئلة، وطريقة الإنجاز...">${escapeHtml(current.description||"")}</textarea></label>
        <label class="admin-task-field admin-task-field-wide"><span>رابط المحتوى (اختياري)</span><input id="adminTaskPath" type="text" value="${escapeHtml(current.path||"")}" placeholder="pages/B2/training/... أو رابط https://..."><small>إلا حطيتي رابط، زر «ابدأ» غادي يفتح المحتوى مباشرة. خليه فارغ باش المنصة تفتح المرحلة المناسبة تلقائياً.</small></label>
        <label class="admin-task-field"><span>لمن نرسل المهمة؟</span><select id="adminTaskTargetMode"><option value="group" ${current.targetMode!=="students"?"selected":""}>جميع تلاميذ المجموعة</option><option value="students" ${current.targetMode==="students"?"selected":""}>تلاميذ محددون فقط</option></select></label>
        <label class="admin-task-field"><span>حالة المهمة</span><select id="adminTaskPublished"><option value="true" ${current.published!==false?"selected":""}>نشر للتلاميذ مباشرة</option><option value="false" ${current.published===false?"selected":""}>حفظ كمسودة</option></select></label>
      </div>
      <div class="admin-task-student-picker" id="adminTaskStudentPicker" ${current.targetMode==="students"?"":"hidden"}><div class="admin-task-student-picker-head"><strong>اختار التلاميذ المستهدفين</strong><div><button type="button" class="tiny-btn" data-action="admin-task-target-all" data-select="all">تحديد الكل</button><button type="button" class="tiny-btn" data-action="admin-task-target-all" data-select="none">إلغاء الكل</button></div></div><div class="admin-task-student-list" id="adminTaskStudentList">${studentChecks}</div></div>
      <div class="admin-form-actions"><button type="button" class="primary-btn" data-action="admin-task-save">${editing?"حفظ التعديلات":"إنشاء ونشر المهمة"}</button>${editing?'<button type="button" class="outline-btn" data-action="admin-task-cancel-edit">إلغاء التعديل</button>':""}</div>
    </section>
    <section class="admin-panel admin-task-list-panel"><div class="admin-section-head"><div><p class="admin-eyebrow">خطة المجموعة</p><h2>المهام المحددة</h2><p>تابع النشر والإنجاز وعدّل أي مهمة في أي وقت.</p></div><span class="admin-count">${tasks.length} مهمة</span></div><div class="admin-task-list">${taskCards}</div></section>
    ${detailMarkup}`;
}
async function saveAdminDailyTask(){
  if(!currentUser||currentUser.role!=="admin"||!firebaseReady){showToast("خاص صلاحية الأدمن واتصال Firebase.");return;}
  const groupId=document.getElementById("adminTaskGroupSelect")?.value||adminTaskGroupId;
  const group=cloudGroups[groupId];
  if(!group){showToast("اختار مجموعة صحيحة أولاً.");return;}
  const title=String(document.getElementById("adminTaskTitle")?.value||"").trim();
  const stage=String(document.getElementById("adminTaskStage")?.value||"general");
  const description=String(document.getElementById("adminTaskDescription")?.value||"").trim();
  const lessonRaw=document.getElementById("adminTaskLessonNo")?.value||"";
  const durationMinutes=Math.max(0,Math.min(600,Number(document.getElementById("adminTaskDuration")?.value)||0));
  const startDate=String(document.getElementById("adminTaskStartDate")?.value||localDateKey());
  const dueDate=String(document.getElementById("adminTaskDueDate")?.value||"");
  const schedule=document.getElementById("adminTaskSchedule")?.value==="daily"?"daily":"once";
  const priority=["high","normal","low"].includes(document.getElementById("adminTaskPriority")?.value)?document.getElementById("adminTaskPriority").value:"normal";
  const targetMode=document.getElementById("adminTaskTargetMode")?.value==="students"?"students":"group";
  const published=document.getElementById("adminTaskPublished")?.value!=="false";
  const pathRaw=document.getElementById("adminTaskPath")?.value||"";
  const path=safeAssignedTaskPath(pathRaw);
  if(!title){showToast("كتب عنوان المهمة أولاً.");return;}
  if(pathRaw.trim()&&!path){showToast("الرابط خاصو يكون رابط https أو مسار داخل pages/ بلا ../.");return;}
  if(dueDate&&startDate&&dueDate<startDate){showToast("آخر أجل ما يمكنش يكون قبل تاريخ البداية.");return;}
  const selectedIds=Array.from(document.querySelectorAll('input[name="adminTaskStudent"]:checked')).map(input=>input.value);
  if(targetMode==="students"&&!selectedIds.length){showToast("اختار تلميذ واحد على الأقل أو عيّن المهمة للمجموعة كاملة.");return;}
  const taskRef=firebaseDb.ref(`${DEUTSCH_A1_PATH}/groups/${groupId}/dailyTasks`);
  const taskId=adminEditingTaskId||taskRef.push().key;
  const old=group.dailyTasks?.[taskId]||{};
  const now=new Date().toISOString();
  const task={...old,id:taskId,title,description,stage,lessonNo:lessonRaw?Number(lessonRaw):null,durationMinutes,startDate,dueDate,schedule,priority,targetMode,targetStudents:targetMode==="students"?Object.fromEntries(selectedIds.map(id=>[id,true])):{},path,published,icon:adminTaskStageIcon(stage),createdAt:old.createdAt||now,updatedAt:now,createdBy:old.createdBy||currentUser.id};
  try{
    await taskRef.child(taskId).set(task);
    adminTaskGroupId=groupId;adminEditingTaskId=null;adminTaskDetailId=taskId;
    await loadDeutschA1Data();
    adminSection="tasks";render();
    showToast(published?"تنشرات المهمة وتعيّنات للتلاميذ.":"تحفظات المهمة كمسودة.");
  }catch(error){
    console.error("Daily task save failed:",error);
    showToast("ما قدرناش نحفظو المهمة. تحقق من صلاحيات Firebase Rules.");
  }
}
async function toggleAdminDailyTaskPublication(taskId){
  if(!currentUser||currentUser.role!=="admin")return;
  const group=cloudGroups[adminTaskGroupId];const task=group?.dailyTasks?.[taskId];if(!task)return;
  const published=task.published!==true;
  try{
    await firebaseDb.ref(`${DEUTSCH_A1_PATH}/groups/${adminTaskGroupId}/dailyTasks/${taskId}`).update({published,status:published?"published":"draft",updatedAt:new Date().toISOString()});
    await loadDeutschA1Data();render();showToast(published?"المهمة ولات منشورة للتلاميذ.":"توقف نشر المهمة.");
  }catch(error){console.error(error);showToast("تعذر تغيير حالة نشر المهمة: "+(error.message||"Firebase Rules"));}
}
async function deleteAdminDailyTask(taskId){
  if(!currentUser||currentUser.role!=="admin")return;
  const task=cloudGroups[adminTaskGroupId]?.dailyTasks?.[taskId];if(!task)return;
  if(!window.confirm(`واش متأكد بغيتي تحذف المهمة «${task.title||"بدون عنوان"}» من هاد المجموعة؟`))return;
  try{
    await firebaseDb.ref(`${DEUTSCH_A1_PATH}/groups/${adminTaskGroupId}/dailyTasks/${taskId}`).remove();
    if(adminTaskDetailId===taskId)adminTaskDetailId="";
    if(adminEditingTaskId===taskId)adminEditingTaskId=null;
    await loadDeutschA1Data();render();showToast("تحذفات المهمة من المجموعة.");
  }catch(error){console.error(error);showToast("تعذر حذف المهمة: "+(error.message||"Firebase Rules"));}
}
async function toggleAdminStudentTaskProgress(taskId,studentId){
  if(!currentUser||currentUser.role!=="admin")return;
  const task=cloudGroups[adminTaskGroupId]?.dailyTasks?.[taskId];
  const student=readUsers().find(user=>user.id===studentId&&user.groupId===adminTaskGroupId);
  if(!task||!student)return;
  const progressKey=assignedTaskProgressKey(taskId,task);
  const previous=cloudTaskProgress?.[studentId]?.[progressKey]||{};
  const now=new Date().toISOString();
  const patch=previous.done?{done:false,completedAt:null,updatedAt:now}:{done:true,startedAt:previous.startedAt||now,completedAt:now,updatedAt:now,markedByAdmin:true};
  try{
    await firebaseDb.ref(`${DEUTSCH_A1_PATH}/taskProgress/${studentId}/${progressKey}`).update(patch);
    if(!cloudTaskProgress[studentId])cloudTaskProgress[studentId]={};
    cloudTaskProgress[studentId][progressKey]={...previous,...patch};
    render();
    showToast(patch.done?"تسجلت المهمة كمكتملة لهذا التلميذ.":"ترجعات المهمة لقيد الإنجاز.");
  }catch(error){console.error(error);showToast("تعذر تحديث إنجاز التلميذ. تحقق من Firebase Rules.");}
}

function renderAdmin(){
  if(!currentUser || currentUser.role!=="admin"){page="home";return renderHome();}
  const users=readUsers();
  const allResults=readAllResults();
  const today=localDateKey();
  const groupOptions=(selected)=>`<option value="">Ohne Gruppe</option>`+Object.entries(cloudGroups).filter(([id,g])=>g&&g._systemPlaceholder!==true&&!String(id).startsWith("__system_")).map(([id,g])=>`<option value="${escapeHtml(id)}" ${selected===id?"selected":""}>${escapeHtml(g.name||id)}</option>`).join("");
  const studentGroupFilterOptions=`<option value="all" ${adminGroupFilter==="all"?"selected":""}>Alle Gruppen</option><option value="__ungrouped__" ${adminGroupFilter==="__ungrouped__"?"selected":""}>Ohne Gruppe</option>`+Object.entries(cloudGroups).filter(([id,g])=>g&&g._systemPlaceholder!==true&&!String(id).startsWith("__system_")).map(([id,g])=>`<option value="${escapeHtml(id)}" ${adminGroupFilter===id?"selected":""}>${escapeHtml(g.name||id)}</option>`).join("");
  const realGroups=Object.entries(cloudGroups).filter(([id,g])=>g&&g._systemPlaceholder!==true&&!String(id).startsWith("__system_"));
  if(!adminTaskGroupId||!cloudGroups[adminTaskGroupId])adminTaskGroupId=realGroups[0]?.[0]||"";
  const analyticsGroupOptions=`<option value="all" ${adminAnalyticsGroupFilter==="all"?"selected":""}>Alle Gruppen</option>`+realGroups.map(([id,g])=>`<option value="${escapeHtml(id)}" ${adminAnalyticsGroupFilter===id?"selected":""}>${escapeHtml(g.name||id)}</option>`).join("")+`<option value="__ungrouped__" ${adminAnalyticsGroupFilter==="__ungrouped__"?"selected":""}>Ohne Gruppe</option>`;
  const analyticsStudentOptions=`<option value="all" ${adminAnalyticsStudentFilter==="all"?"selected":""}>Alle Schüler</option>`+users.map(user=>`<option value="${escapeHtml(user.id)}" ${adminAnalyticsStudentFilter===user.id?"selected":""}>${escapeHtml(user.name||user.email||user.id)}</option>`).join("");
  const ungroupedExists=users.some(user=>!user.groupId);
  const selectedAnalyticsGroups=adminAnalyticsGroupFilter==="all" ? [...realGroups,...(ungroupedExists?[["__ungrouped__",{name:"Ohne Gruppe"}]]:[])] : adminAnalyticsGroupFilter==="__ungrouped__" ? [["__ungrouped__",{name:"Ohne Gruppe"}]] : realGroups.filter(([id])=>id===adminAnalyticsGroupFilter);
  const groupAnalyticsMarkup=selectedAnalyticsGroups.map(([id,g])=>{
    const groupUsers=users.filter(user=>id==="__ungrouped__" ? !user.groupId : user.groupId===id);
    return adminGroupAnalyticsCard(id,g.name||id,groupUsers);
  }).join("") || `<p class="admin-empty-note">Keine Gruppe mit Schülern gefunden.</p>`;
  const selectedAnalyticsStudents=adminAnalyticsStudentFilter==="all" ? users : users.filter(user=>user.id===adminAnalyticsStudentFilter);
  const studentAnalyticsMarkup=selectedAnalyticsStudents.length ? selectedAnalyticsStudents.map(user=>adminStudentAnalyticsCard(adminStudentAnalytics(user),adminAnalyticsStudentFilter!=="all")).join("") : `<p class="admin-empty-note">Keine Schüler für diese Auswahl gefunden.</p>`;
  const statusFor=user=>getActivityStatus(user,(cloudActivity[user.id]||{})[today]||{});
  const filteredUsers=users.filter(user=>{
    const userGroupId=String(user.groupId||"");
    if(adminGroupFilter==="__ungrouped__" && userGroupId!=="") return false;
    if(adminGroupFilter!=="all" && adminGroupFilter!=="__ungrouped__" && userGroupId!==String(adminGroupFilter)) return false;
    const s=statusFor(user);
    if(adminStudentFilter==="inactive") return s.inactive;
    if(adminStudentFilter==="insufficient") return !s.inactive && s.insufficient;
    if(adminStudentFilter==="compliant") return !s.inactive && !s.insufficient;
    if(adminStudentFilter==="never") return !s.latest;
    return true;
  });
  const studentsMarkup=filteredUsers.length?filteredUsers.map(user=>{
    const s=statusFor(user);
    const activityStatus=s.inactive?`<span class="status-pill inactive">Inaktiv (7+ Tage)</span>`:(s.insufficient?`<span class="status-pill warning">Zeit fehlt</span>`:`<span class="status-pill active">Ziel erreicht</span>`);
    const accountStatus=user.active===false?`<span class="status-pill inactive">Deaktiviert</span>`:`<span class="status-pill active">Aktiv</span>`;
    return `<tr>
      <td><button type="button" class="admin-student-name" data-action="admin-view-student" data-id="${escapeHtml(user.id)}" aria-label="Details für ${escapeHtml(user.name)} anzeigen"><strong>${escapeHtml(user.name)}</strong><small>${escapeHtml(user.email)}</small><span class="admin-student-name-hint">Daten anzeigen ↗</span></button></td>
      <td><select class="admin-inline-select" data-action="admin-assign-group" data-id="${escapeHtml(user.id)}">${groupOptions(user.groupId||"")}</select></td>
      <td>${accountStatus}<br>${activityStatus}</td>
      <td><strong>${s.loginCount}×</strong><small>${formatDuration(s.seconds)} heute</small></td>
      <td><input class="admin-minutes-input" id="student-minutes-${escapeHtml(user.id)}" type="number" min="0" max="600" placeholder="${s.required} min" value="${user.requiredDailyMinutes==null?"":Number(user.requiredDailyMinutes)}"><small>Leer = Gruppe</small><button class="tiny-btn" data-action="admin-save-student-minutes" data-id="${escapeHtml(user.id)}">Speichern</button></td>
      <td>${s.latest?new Date(s.latest).toLocaleString("de-DE"):"Noch nie"}</td>
      <td class="admin-row-actions">
        <button class="tiny-btn" data-action="admin-manage-access" data-id="${escapeHtml(user.id)}">تحديد الدروس</button>
        <button class="tiny-btn" data-action="admin-activity-details" data-id="${escapeHtml(user.id)}">Zeitdetails</button>
        <button class="tiny-btn" data-action="admin-edit-student" data-id="${escapeHtml(user.id)}">Bearbeiten</button>
        <button class="tiny-btn" data-action="admin-toggle-student" data-id="${escapeHtml(user.id)}">${user.active===false?"Aktivieren":"Deaktivieren"}</button>
        <button class="tiny-btn" data-action="admin-reset-password" data-id="${escapeHtml(user.id)}">Passwort</button>
        <button class="tiny-btn danger" data-action="admin-delete-student" data-id="${escapeHtml(user.id)}">Löschen</button>
      </td>
    </tr>`;
  }).join(""):`<tr><td colspan="7" class="empty-cell">Keine Schüler für diesen Filter gefunden.</td></tr>`;

  const resultRows=[];
  users.forEach(user=>Object.values(allResults[user.id]||{}).forEach(result=>resultRows.push({user,result})));
  resultRows.sort((a,b)=>String(b.result.updatedAt||"").localeCompare(String(a.result.updatedAt||"")));
  const resultsMarkup=resultRows.length?resultRows.map(({user,result})=>`<tr>
    <td><strong>${escapeHtml(user.name)}</strong><small>${escapeHtml(user.email)}</small></td>
    <td>${escapeHtml(result.title||result.moduleId||"Test")}</td>
    <td><strong>${Number(result.points)||0} / ${Number(result.maxPoints)||0}</strong></td>
    <td><span class="result-percent">${Number(result.percent)||0}%</span></td>
    <td>${Number(result.attempts)||1}×</td>
    <td>${Number(result.percent)<60?'<span class="status-pill warning">Schwierig</span>':'<span class="status-pill active">Gut</span>'}</td>
    <td>${result.updatedAt?new Date(result.updatedAt).toLocaleString("de-DE"):"—"}</td>
  </tr>`).join(""):`<tr><td colspan="7" class="empty-cell">Noch keine Testergebnisse gespeichert.</td></tr>`;
  const difficultRows=resultRows.filter(({result})=>Number(result.percent)<60);
  const difficultMarkup=difficultRows.length?difficultRows.map(({user,result})=>`<div class="admin-difficulty-row"><div><strong>${escapeHtml(user.name)}</strong><small>${escapeHtml(result.title||result.moduleId||"Lektion")}</small></div><span class="status-pill warning">${Number(result.percent)||0}% · ${Number(result.attempts)||1} Versuche</span></div>`).join(""):`<p class="admin-empty-note">Aktuell wurden keine schwierigen Tests erkannt. Tests unter 60% erscheinen hier.</p>`;
  const groupsMarkup=realGroups.length?realGroups.map(([id,g])=>{
    const groupLevel=normalizeGroupCourseLevel(g.level);
    const allowed=Object.values(groupLessonAccessForLevel(g,groupLevel)||{}).filter(Boolean).length;
    const enabledLevels=GROUP_COURSE_LEVELS.filter(level=>groupLevelAccessForLevel(g,level));
    const enabledLabel=enabledLevels.length?`المستويات الدراسية: ${enabledLevels.join(" · ")}`:"المستويات الدراسية مقفولة";
    const competitionEnabledLevels=GROUP_COURSE_LEVELS.filter(level=>groupCompetitionLevelAccessForLevel(g,level));
    const competitionLabel=competitionEnabledLevels.length?`المنافسة: ${competitionEnabledLevels.join(" · ")}`:"المنافسة مقفولة";
    const groupUsers=users.filter(u=>u.groupId===id);
    const count=groupUsers.length;
    const groupSeconds=groupUsers.reduce((sum,u)=>sum+Number((((cloudActivity[u.id]||{})[today]||{}).totalSeconds)||0),0);
    const groupLogins=groupUsers.reduce((sum,u)=>sum+Number((((cloudActivity[u.id]||{})[today]||{}).loginCount)||0),0);
    const dailyTaskCount=Object.values(g.dailyTasks||{}).filter(task=>task&&task.published===true).length;
    return `<div class="admin-group-row"><div><strong>${escapeHtml(g.name||id)}</strong><small>${escapeHtml(enabledLabel)} · ${escapeHtml(competitionLabel)} · ${count} طالب · ${allowed}/10 دروس في ${groupLevel} · ${dailyTaskCount} مهام منشورة · ${Number(g.requiredDailyMinutes)||0} دقيقة/اليوم · اليوم: ${formatDuration(groupSeconds)}، ${groupLogins} دخول</small></div><div class="admin-group-row-actions"><button class="tiny-btn primary" data-action="admin-open-group" data-id="${escapeHtml(id)}">فتح المجموعة</button><button class="tiny-btn" data-action="admin-open-group-tasks" data-id="${escapeHtml(id)}">المهام اليومية</button><button class="tiny-btn" data-action="admin-edit-group" data-id="${escapeHtml(id)}">تعديل</button><button class="tiny-btn danger" data-action="admin-delete-group" data-id="${escapeHtml(id)}">حذف</button></div></div>`;
  }).join(""):`<p class="admin-empty-note">مازال ما كاينة حتى مجموعة. زِد أول مجموعة من النموذج أعلاه.</p>`;
  const editing=editingGroupId && cloudGroups[editingGroupId] ? cloudGroups[editingGroupId] : {};
  const currentGroupLevel=normalizeGroupCourseLevel(adminGroupLevelDraft||editing.level||"A1");
  const competitionAccessMarkup=`<section class="admin-group-competition-access">
    <div class="admin-group-competition-access-head"><div><strong>مستويات المنافسة المتاحة لهذه المجموعة</strong><small>هاد الصلاحيات خاصة بالمنافسة فقط، وما كتبدلش صلاحيات الدروس العادية.</small></div><span>🏆</span></div>
    <div class="admin-group-competition-access-grid">
      ${GROUP_COURSE_LEVELS.map(level=>{
        const open=groupCompetitionLevelAccessForLevel(editing,level);
        return `<label class="admin-competition-level-option">
          <input type="checkbox" data-group-competition-level-access="${level}" ${open?"checked":""} aria-label="فتح المنافسة في ${level} لهذه المجموعة">
          <span class="admin-competition-level-option-level">${level}</span>
          <span class="admin-competition-level-option-state"><b class="is-on">مفتوح</b><b class="is-off">مقفول</b></span>
        </label>`;
      }).join("")}
    </div>
    <p class="admin-note">كل مجموعة عندها إعداد مستقل. إلا خليتي المستوى مقفول، التلاميذ ديال هاد المجموعة ما غاديش يقدرو ينشئو أو ينضمو لمنافسة فيه.</p>
  </section>`;
  const groupLessonPanels=GROUP_COURSE_LEVELS.map(level=>{
    const isOpen=level===currentGroupLevel;
    const enabled=groupLevelAccessForLevel(editing,level);
    const checks=groupLessonChecksMarkup(level,adminGroupLessonDrafts[level]||groupLessonDefaultChecks(editing,level));
    const panelId=`groupLevelPanel-${level}`;
    const checksId=`groupLevelLessonChecks-${level}`;
    const isUpperLevel=["B1","B2"].includes(level);
    const sectionAccess=groupSectionAccessForLevel(editing,level);
    const sectionControls=isUpperLevel?`
      <div class="admin-group-section-access">
        <div class="admin-group-section-access-heading">
          <strong>الأقسام المتاحة في ${level}</strong>
          <small>فعّل أو اقفل كل قسم بشكل مستقل، مثلما يظهر للطالب</small>
        </div>
        <div class="admin-group-section-access-grid">
          ${GROUP_UPPER_LEVEL_SECTIONS.map(section=>`
            <label class="admin-group-section-option">
              <input type="checkbox" data-group-section-access data-level="${level}" data-section="${section.id}" ${sectionAccess[section.id]!==false?"checked":""}>
              <span class="admin-group-section-option-icon" aria-hidden="true">${section.icon}</span>
              <span class="admin-group-section-option-copy"><strong dir="ltr">${section.label}</strong><small>${section.arabic}</small></span>
              <span class="admin-group-section-option-state" aria-hidden="true">✓</span>
            </label>`).join("")}
        </div>
      </div>`:"";
    return `<section class="admin-group-level-item ${isOpen?"is-open":""} ${enabled?"level-enabled":"level-disabled"}">
      <div class="admin-group-level-header">
        <button type="button" class="admin-group-level-toggle" data-action="admin-toggle-group-level" data-level="${level}" aria-expanded="${isOpen?"true":"false"}" aria-controls="${panelId}">
          <span class="admin-group-level-toggle-label">${level}</span>
          <span class="admin-group-level-toggle-meta">إعدادات المستوى والدروس</span>
          <span class="admin-group-level-toggle-icon" aria-hidden="true">⌄</span>
        </button>
        <label class="admin-level-access-toggle" title="تفعيل أو قفل المستوى ${level}">
          <input type="checkbox" data-group-level-access="${level}" ${enabled?"checked":""} aria-label="تفعيل المستوى ${level} للطلاب">
          <span class="admin-level-access-switch" aria-hidden="true"></span>
          <span class="admin-level-access-state"><b class="is-on">مفتوح</b><b class="is-off">مقفول</b></span>
        </label>
      </div>
      <div class="admin-group-level-panel" id="${panelId}" ${isOpen?"":"hidden"}>
        ${sectionControls}
        <div class="admin-group-lessons-toolbar">
          <p class="admin-note">${isUpperLevel?`دروس Kurs المتاحة في ${level}:`:`الدروس المتاحة في ${level}:`}</p>
          <div class="admin-group-lessons-tools" role="group" aria-label="تحديد دروس المستوى ${level}">
            <button type="button" class="admin-group-lessons-select-all" data-action="admin-group-lessons-toggle-all" data-level="${level}" data-select="all" aria-controls="${checksId}">✓ تحديد الكل</button>
            <button type="button" class="admin-group-lessons-clear-all" data-action="admin-group-lessons-toggle-all" data-level="${level}" data-select="none" aria-controls="${checksId}">× إلغاء تحديد الكل</button>
          </div>
        </div>
        <div class="admin-lesson-checks" id="${checksId}">${checks}</div>
        ${isUpperLevel?`<p class="admin-note">إعدادات الأقسام الأربعة مستقلة عن صلاحيات دروس Kurs. يمكنك مثلاً إغلاق Teste وترك Kurs وTraining Prüfung مفتوحين.</p>`:""}
      </div>
    </section>`;
  }).join("");
  const totalAttempts=resultRows.reduce((sum,row)=>sum+(Number(row.result.attempts)||1),0);
  const avg=resultRows.length?Math.round(resultRows.reduce((sum,row)=>sum+(Number(row.result.percent)||0),0)/resultRows.length):0;
  const todayLogins=users.reduce((sum,user)=>sum+statusFor(user).loginCount,0);
  const todaySeconds=users.reduce((sum,user)=>sum+statusFor(user).seconds,0);
  const inactiveCount=users.filter(user=>statusFor(user).inactive).length;
  const insufficientCount=users.filter(user=>!statusFor(user).inactive&&statusFor(user).insufficient).length;
  const selectedGroup = adminSelectedGroupId && cloudGroups[adminSelectedGroupId] ? cloudGroups[adminSelectedGroupId] : null;
  const selectedGroupUsers = selectedGroup ? users.filter(user=>user.groupId===adminSelectedGroupId) : [];
  const homeGroupCards = realGroups.length ? realGroups.slice(0,6).map(([id,g])=>{
    const count=users.filter(user=>user.groupId===id).length;
    return `<article class="admin-home-mini-card"><div class="admin-home-mini-icon">👥</div><div><strong>${escapeHtml(g.name||id)}</strong><small>${count} طالب</small></div><button class="tiny-btn" data-action="admin-open-group" data-id="${escapeHtml(id)}">فتح</button></article>`;
  }).join("") : `<p class="admin-empty-note">مازال ما كاينة حتى مجموعة.</p>`;
  const homeStudentCards = users.length ? users.slice().sort((a,b)=>String(b.createdAt||"").localeCompare(String(a.createdAt||""))).slice(0,7).map(user=>{
    return `<tr><td><button type="button" class="admin-student-name" data-action="admin-view-student" data-id="${escapeHtml(user.id)}"><strong>${escapeHtml(user.name||"—")}</strong><small>${escapeHtml(user.email||"")}</small></button></td><td>${escapeHtml(studentGroupName(user))}</td><td>${user.active===false?'<span class="status-pill inactive">موقوف</span>':'<span class="status-pill active">نشط</span>'}</td><td><button class="tiny-btn" data-action="admin-view-student" data-id="${escapeHtml(user.id)}">التفاصيل</button></td></tr>`;
  }).join("") : `<tr><td colspan="4" class="empty-cell">مازال ما تزاد حتى طالب.</td></tr>`;
  const unassignedCount=users.filter(user=>!user.groupId).length;
  const groupStudentRows=selectedGroupUsers.length ? selectedGroupUsers.map(user=>{
    const s=statusFor(user);
    const accountStatus=user.active===false?`<span class="status-pill inactive">موقوف</span>`:`<span class="status-pill active">نشط</span>`;
    const activityStatus=s.inactive?`<span class="status-pill inactive">غير نشط</span>`:(s.insufficient?`<span class="status-pill warning">وقت ناقص</span>`:`<span class="status-pill active">الهدف محقق</span>`);
    return `<tr>
      <td><button type="button" class="admin-student-name" data-action="admin-view-student" data-id="${escapeHtml(user.id)}"><strong>${escapeHtml(user.name||"—")}</strong><small>${escapeHtml(user.email||"")}</small></button></td>
      <td><select class="admin-inline-select" data-action="admin-assign-group" data-id="${escapeHtml(user.id)}">${groupOptions(user.groupId||"")}</select></td>
      <td>${accountStatus}<br>${activityStatus}</td>
      <td>${s.latest?new Date(s.latest).toLocaleDateString("fr-FR"):"—"}</td>
      <td class="admin-row-actions">
        <button class="tiny-btn" data-action="admin-manage-access" data-id="${escapeHtml(user.id)}">تحديد الدروس</button>
        <button class="tiny-btn" data-action="admin-edit-student" data-id="${escapeHtml(user.id)}">تعديل</button>
        <button class="tiny-btn" data-action="admin-reset-password" data-id="${escapeHtml(user.id)}">كلمة السر</button>
        <button class="tiny-btn danger" data-action="admin-delete-student" data-id="${escapeHtml(user.id)}">حذف</button>
      </td>
    </tr>`;
  }).join("") : `<tr><td colspan="5" class="empty-cell">مازال ما كاين حتى طالب فهاد المجموعة. استعمل Generator لإضافة أول طالب.</td></tr>`;

  const resultsGroupFilteredUsers = adminResultsGroupId==="all" ? users :
    adminResultsGroupId==="__ungrouped__" ? users.filter(user=>!user.groupId) :
    users.filter(user=>String(user.groupId||"")===String(adminResultsGroupId));
  const resultsStudentOptions = `<option value="all">جميع الطلبة فالمجموعة</option>` + resultsGroupFilteredUsers.map(user=>`<option value="${escapeHtml(user.id)}" ${adminResultsStudentId===user.id?"selected":""}>${escapeHtml(user.name||user.email||user.id)}</option>`).join("");
  const resultsGroupOptions = `<option value="all" ${adminResultsGroupId==="all"?"selected":""}>جميع المجموعات</option>` +
    realGroups.map(([id,g])=>`<option value="${escapeHtml(id)}" ${adminResultsGroupId===id?"selected":""}>${escapeHtml(g.name||id)}</option>`).join("") +
    `<option value="__ungrouped__" ${adminResultsGroupId==="__ungrouped__"?"selected":""}>بدون مجموعة</option>`;
  const resultsLessonOptions = `<option value="all" ${adminResultsLessonFilter==="all"?"selected":""}>جميع الدروس</option>` +
    lessons.map((lesson,index)=>`<option value="${index+1}" ${String(adminResultsLessonFilter)===String(index+1)?"selected":""}>Lektion ${index+1} · ${escapeHtml(lesson.name||"")}</option>`).join("");
  const resultsTypeOptions = [
    ["all","جميع الأنواع"],["kurs","Kurs"],["podcast","Podcast"],["test","Test"]
  ].map(([value,label])=>`<option value="${value}" ${adminResultsTypeFilter===value?"selected":""}>${label}</option>`).join("");
  const resultsVisibleUsers = adminResultsStudentId==="all" ? resultsGroupFilteredUsers : resultsGroupFilteredUsers.filter(user=>user.id===adminResultsStudentId);
  const resultsAnalyticsFilters={lesson:adminResultsLessonFilter,type:adminResultsTypeFilter};
  const resultsActivityRowsMarkup = resultsVisibleUsers.length ? resultsVisibleUsers.map(user=>{
    const report=adminStudentAnalytics(user,resultsAnalyticsFilters);
    const typeLabel=adminResultsTypeFilter==="kurs"?"Kurs":adminResultsTypeFilter==="podcast"?"Podcast":"كل المحتوى";
    return `<tr><td><strong>${escapeHtml(user.name||"—")}</strong><small>${escapeHtml(user.email||"")}</small></td><td>${escapeHtml(studentGroupName(user))}</td><td>${escapeHtml(typeLabel)}</td><td><strong>${formatDuration(report.filteredSeconds)}</strong></td><td>${report.totalLogins}</td></tr>`;
  }).join("") : `<tr><td colspan="5" class="empty-cell">ما كاين حتى طالب فهاد الاختيار.</td></tr>`;
  const resultsActivityMarkup = `
    <section class="admin-panel"><div class="admin-section-head"><div><p class="admin-eyebrow">وقت التعلم</p><h2>نشاط الطلبة فـ ${adminResultsTypeFilter==="kurs"?"Kurs":"Podcast"}</h2><p>المدة المسجلة حسب المجموعة والطالب والدرس المختار.</p></div></div>
      <div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>الطالب</th><th>المجموعة</th><th>المحتوى</th><th>المدة</th><th>الدخولات</th></tr></thead><tbody>${resultsActivityRowsMarkup}</tbody></table></div>
    </section>`;
  const resultsGroupPairs = adminResultsStudentId!=="all" || adminResultsGroupId==="all"
    ? []
    : adminResultsGroupId==="__ungrouped__"
      ? [["__ungrouped__",{name:"بدون مجموعة"}]]
      : realGroups.filter(([id])=>id===adminResultsGroupId);
  const resultsGroupAnalyticsMarkup = resultsGroupPairs.map(([id,g])=>{
    const members=resultsGroupFilteredUsers.filter(user=>id==="__ungrouped__"?!user.groupId:user.groupId===id);
    return adminGroupAnalyticsCard(id,g.name||id,members,resultsAnalyticsFilters);
  }).join("") || `<p class="admin-empty-note">اختار مجموعة باش تشوف التقرير ديالها.</p>`;
  const resultsStudentAnalyticsMarkup = resultsVisibleUsers.length ? resultsVisibleUsers.map(user=>adminStudentAnalyticsCard(adminStudentAnalytics(user,resultsAnalyticsFilters),adminResultsStudentId!=="all")).join("") : `<p class="admin-empty-note">ما كاين حتى طالب فهاد الاختيار.</p>`;
  const resultsEmbeddedFilterMarkup=`
    <section class="admin-results-embedded-filters" aria-label="فلاتر نتائج المجموعات والطلبة">
      <div class="admin-results-embedded-title">
        <div><span class="admin-results-embedded-eyebrow">تصفية الإحصائيات</span><h3>اختار المجموعة والطالب والدرس</h3></div>
        <span class="admin-results-embedded-icon" aria-hidden="true">⚙️</span>
      </div>
      <div class="admin-results-filter-grid">
        <label>1. اختار المجموعة<select id="adminResultsGroupFilter">${resultsGroupOptions}</select></label>
        <label>2. اختار الطالب<select id="adminResultsStudentFilter">${resultsStudentOptions}</select></label>
        <label>3. اختار الدرس (Lektion)<select id="adminResultsLessonFilter">${resultsLessonOptions}</select></label>
        <label>4. نوع المحتوى<select id="adminResultsTypeFilter">${resultsTypeOptions}</select></label>
      </div>
      <p class="admin-results-embedded-note">اختار مجموعة أو طالب، ومن بعد حدّد الدرس ونوع المحتوى (Kurs أو Podcast أو Test). المبيانات والتقارير كتتصفّى حسب الاختيار؛ وقت التعلّم فـ Kurs وPodcast، والنقط والتمارين فـ Test.</p>
    </section>`;
  const selectedProgressStudent=adminResultsStudentId!=="all" ? resultsGroupFilteredUsers.find(user=>String(user.id)===String(adminResultsStudentId)) : null;
  const selectedProgressGroupName=adminResultsGroupId==="all" ? "جميع المجموعات" : adminResultsGroupId==="__ungrouped__" ? "بدون مجموعة" : (cloudGroups[adminResultsGroupId]?.name||adminResultsGroupId);
  const adminProgressDashboardMarkup=adminSection!=="results" ? "" : (selectedProgressStudent
    ? adminProgressDashboardForStudent(selectedProgressStudent,resultsEmbeddedFilterMarkup)
    : adminProgressDashboardForGroup(selectedProgressGroupName,resultsGroupFilteredUsers,resultsEmbeddedFilterMarkup));
  const adminStatusMetricsList=adminSection==="results" && adminProgressLessonStatusFilter && !selectedProgressStudent
    ? resultsGroupFilteredUsers.map(user=>adminProgressDashboardMetrics(user))
    : [];
  const adminStatusStates=selectedProgressStudent
    ? (adminProgressLessonStatusFilter?adminProgressDashboardMetrics(selectedProgressStudent).lessonStates:[])
    : adminProgressLessonStatusGroupStates(adminStatusMetricsList);
  const metricSelectedUser=adminProgressMetricStudentId
    ?resultsGroupFilteredUsers.find(user=>String(user.id)===String(adminProgressMetricStudentId))||null
    :null;
  const adminProgressMetricOverlay=adminSection==="results" && adminProgressMetricOpen
    ?adminProgressMetricOverlayMarkup(
        adminProgressMetricOpen,resultsGroupFilteredUsers,selectedProgressGroupName,
        selectedProgressStudent,metricSelectedUser
      )
    :"";
  const adminProgressLessonStatusOverlay=adminSection==="results" && adminProgressLessonStatusFilter
    ? adminProgressLessonStatusOverlayMarkup(
        adminStatusStates,adminProgressLessonStatusFilter,
        selectedProgressStudent
          ? `${selectedProgressStudent.name||selectedProgressStudent.email||"الطالب"} · ${studentGroupName(selectedProgressStudent)}`
          : `${selectedProgressGroupName} · ${resultsGroupFilteredUsers.length} تلميذ`,
        !selectedProgressStudent
      )
    : "";

  const adminV31ActiveStudents=users.filter(user=>!statusFor(user).inactive);
  const adminV31StudentActivityPct=users.length?Math.round(adminV31ActiveStudents.length/users.length*100):0;
  const adminV31ActiveGroupCount=realGroups.filter(([id])=>adminV31ActiveStudents.some(user=>user.groupId===id)).length;
  const adminV31GroupActivityPct=realGroups.length?Math.round(adminV31ActiveGroupCount/realGroups.length*100):0;
  const adminV31LatestTimes=users.map(user=>statusFor(user).latest).filter(Boolean);
  const adminV31AnyActivity=adminV31LatestTimes.length>0;
  const adminV31FormatTime=value=>{
    const time=typeof value==="number"?value:Date.parse(String(value||""));
    if(!Number.isFinite(time))return "تاريخ غير محدد";
    return new Date(time).toLocaleString("ar-MA",{dateStyle:"medium",timeStyle:"short"});
  };
  const adminV31RecentEvents=[
    ...users.filter(user=>Number.isFinite(Date.parse(String(user.createdAt||"")))).map(user=>({
      at:Date.parse(String(user.createdAt)),type:"student",icon:"👤",title:`تمت إضافة التلميذ ${user.name||user.email||"الجديد"}`,
      sub:studentGroupName(user),id:user.id,label:"عرض التلميذ"
    })),
    ...realGroups.filter(([,g])=>Number.isFinite(Date.parse(String(g.createdAt||"")))).map(([id,g])=>({
      at:Date.parse(String(g.createdAt)),type:"group",icon:"👥",title:`تم إنشاء المجموعة ${g.name||id}`,
      sub:"المجموعات",id,label:"فتح المجموعة"
    })),
    ...resultRows.filter(({result})=>Number.isFinite(Date.parse(String(result.updatedAt||"")))).map(({user,result})=>({
      at:Date.parse(String(result.updatedAt)),type:"result",icon:"📈",title:`نتيجة جديدة للتلميذ ${user.name||user.email||""}`,
      sub:result.title||result.moduleId||"اختبار",id:user.id,label:"عرض التقارير"
    }))
  ].sort((a,b)=>b.at-a.at).slice(0,4);
  const adminV31EventsMarkup=adminV31RecentEvents.length?adminV31RecentEvents.map(event=>{
    const action=event.type==="student"?"admin-view-student":event.type==="group"?"admin-open-group":"admin-nav";
    const attr=event.type==="result"?'data-section="results"':`data-id="${escapeHtml(event.id||"")}"`;
    return `<article class="admin-v31-event">
      <span class="admin-v31-event-icon" aria-hidden="true">${event.icon}</span>
      <div class="admin-v31-event-copy"><strong>${escapeHtml(event.title)}</strong><small>${escapeHtml(event.sub)} · ${adminV31FormatTime(event.at)}</small></div>
      <button type="button" class="admin-v31-event-button" data-action="${action}" ${attr}>${event.label} <span aria-hidden="true">◀</span></button>
    </article>`;
  }).join(""):`<div class="admin-v31-empty"><span aria-hidden="true">📭</span><p>ما كاين حتى نشاط مسجل حالياً. الأحداث غادي تبان هنا ملي يتزاد طالب أو مجموعة أو نتيجة اختبار.</p></div>`;
  const adminV31OverviewStatus=adminV31AnyActivity
    ? `${adminV31ActiveStudents.length} من أصل ${users.length} تلميذ عندهم دخول مسجل خلال آخر 7 أيام`
    : "ما زال ما تسجل حتى دخول خلال آخر 7 أيام";
  const adminV31Gauge=adminV31StudentActivityPct;
  const adminV31TestResults=resultRows.filter(({result})=>adminResultType(result)==="test");
  const adminV31TestAverage=adminV31TestResults.length?Math.round(adminV31TestResults.reduce((total,entry)=>total+adminResultPercent(entry.result),0)/adminV31TestResults.length):null;
  const adminV31Performance=[
    {name:"متوسط نتائج الاختبارات",value:adminV31TestAverage,color:"green"},
    {name:"نشاط التلاميذ (7 أيام)",value:users.length?adminV31StudentActivityPct:null,color:"purple"},
    {name:"نشاط المجموعات (7 أيام)",value:realGroups.length?adminV31GroupActivityPct:null,color:"blue"}
  ];
  const adminV31PerformanceMarkup=adminV31Performance.map(metric=>`<div class="admin-v31-performance-item">
    <span>${escapeHtml(metric.name)}</span>
    <div class="admin-v31-performance-track"><i class="${metric.color}" style="width:${metric.value===null?0:metric.value}%"></i></div>
    <strong>${metric.value===null?"—":metric.value+"%"}</strong>
  </div>`).join("");
  const adminV31Shortcuts=[
    {section:"students",title:"إدارة التلاميذ",icon:"👩🏻‍🎓"},
    {section:"content",title:"إدارة الدروس",icon:"📖"},
    {section:"groups",title:"إدارة المجموعات",icon:"👥"},
    {section:"results",title:"التقارير",icon:"📊"},
    {section:"pages",title:"صفحات HTML",icon:"🧩"},
    {section:"settings",title:"الإعدادات",icon:"⚙️"}
  ].map(item=>`<button type="button" class="admin-v31-shortcut" data-action="admin-nav" data-section="${item.section}"><span>${item.icon}</span><strong>${item.title}</strong></button>`).join("");
  const homeMarkup = `<div class="admin-v31-home">
    <section class="admin-v31-stats" aria-label="إحصائيات المنصة">
      <article class="admin-v31-stat"><span class="admin-v31-stat-icon">👩🏻‍🎓</span><strong>${users.length.toLocaleString("en-US")}</strong><small>إجمالي التلاميذ</small></article>
      <article class="admin-v31-stat"><span class="admin-v31-stat-icon">👩🏻‍🏫</span><strong>—</strong><small>المعلمون · غير مفعّل</small></article>
      <article class="admin-v31-stat"><span class="admin-v31-stat-icon">👥</span><strong>${realGroups.length.toLocaleString("en-US")}</strong><small>المجموعات</small></article>
      <article class="admin-v31-stat"><span class="admin-v31-stat-icon">📖</span><strong>${lessons.length.toLocaleString("en-US")}</strong><small>دروس A1 الأساسية</small></article>
    </section>
    <section class="admin-v31-overview admin-v31-glass">
      <div class="admin-v31-gauge" style="--activity-value:${adminV31Gauge}%"><div><strong>${adminV31Gauge}%</strong><small>نشاط التلاميذ</small></div></div>
      <div class="admin-v31-overview-content"><h2>✨ نظرة عامة على المنصة</h2><p class="admin-v31-status"><span>✓</span> ${escapeHtml(adminV31OverviewStatus)}</p><small>آخر عرض: ${adminV31FormatTime(Date.now())} · المعطيات من الحسابات المسجلة</small></div>
      <div class="admin-v31-overview-art" aria-hidden="true">🏆<span>📚</span></div>
    </section>
    <div class="admin-v31-home-panels">
      <section class="admin-v31-section admin-v31-glass admin-v31-actions-panel">
        <h2>✨ إجراءات سريعة للإدارة</h2>
        <div class="admin-v31-shortcuts">${adminV31Shortcuts}</div>
      </section>
      <section class="admin-v31-section admin-v31-glass admin-v31-events-panel">
        <h2>✨ أحدث نشاط على المنصة</h2>
        <div class="admin-v31-events">${adminV31EventsMarkup}</div>
      </section>
    </div>
    <section class="admin-v31-section admin-v31-glass admin-v31-performance">
      <div class="admin-v31-performance-heading"><h2>✨ إحصائيات الأداء</h2><p>مؤشرات مستخرجة من النتائج والنشاط المسجل فعلياً</p></div>
      <div class="admin-v31-performance-content"><div class="admin-v31-performance-rows">${adminV31PerformanceMarkup}</div><div class="admin-v31-performance-art" aria-hidden="true">📊<span>↗</span></div></div>
    </section>
    <section class="admin-v31-section admin-v31-glass admin-v31-groups-summary">
      <div class="admin-section-head"><div><h2>مجموعاتك</h2><p>اختار مجموعة للاطلاع على تفاصيلها وتدبير التلاميذ</p></div><button type="button" class="outline-btn" data-action="admin-nav" data-section="groups">عرض جميع المجموعات</button></div>
      <div class="admin-home-mini-grid">${homeGroupCards}</div>
    </section>
  </div>`;

  const accessEditingUser = adminEditingStudentLessonsId ? users.find(user=>user.id===adminEditingStudentLessonsId) : null;
  const accessEditingGroup = accessEditingUser && accessEditingUser.groupId ? cloudGroups[accessEditingUser.groupId] : null;
  const studentLessonAccessChecks = accessEditingUser ? Array.from({length:10},(_,index)=>{
    const no=index+1, key=String(no);
    const own=accessEditingUser.lessonAccess && Object.prototype.hasOwnProperty.call(accessEditingUser.lessonAccess,key);
    const groupHas=accessEditingGroup && accessEditingGroup.lessonAccess && Object.prototype.hasOwnProperty.call(accessEditingGroup.lessonAccess,key);
    const allowed=own ? accessEditingUser.lessonAccess[key]!==false : groupHas ? accessEditingGroup.lessonAccess[key]!==false : true;
    const source=own ? "تخصيص فردي" : groupHas ? "حسب المجموعة" : "مفتوح افتراضياً";
    const lesson=lessons[index] || {};
    const level=no<=5 ? "A1.1" : "A1.2";
    return `<label class="admin-student-lesson-option">
      <input type="checkbox" name="studentLessonAccess" value="${no}" ${allowed?"checked":""}>
      <span class="admin-student-lesson-option-main"><strong>Lektion ${no}</strong><small>${escapeHtml(lesson.name||"")} · ${level}</small></span>
      <span class="admin-student-lesson-source">${source}</span>
    </label>`;
  }).join("") : "";
  const studentLessonAccessModal = accessEditingUser ? `
    <div class="admin-student-modal-backdrop open" id="adminStudentLessonAccessModal" aria-hidden="false">
      <section class="admin-student-modal admin-student-lesson-modal" role="dialog" aria-modal="true" aria-labelledby="adminStudentLessonAccessTitle">
        <header class="admin-student-modal-head">
          <div><p>تخصيص الدروس</p><h2 id="adminStudentLessonAccessTitle">${escapeHtml(accessEditingUser.name||accessEditingUser.email||"الطالب")}</h2></div>
          <button type="button" class="admin-student-modal-close" data-action="admin-close-student-lessons" aria-label="إغلاق">×</button>
        </header>
        <div class="admin-student-modal-body">
          <p class="admin-student-lesson-intro">اختار الدروس اللي بغيتي هاد الطالب يوصل ليها. هاد الإعداد الفردي كيقدر يفتح أو يسد درس بشكل مستقل على إعدادات المجموعة.</p>
          <div class="admin-student-lesson-legend"><span>✓ مفتوح للطالب</span><span>— مسدود على الطالب</span></div>
          <div class="admin-student-lesson-grid">${studentLessonAccessChecks}</div>
          <p class="admin-note">إلى بغيتي الطالب يرجع يتبع نفس الدروس المحددة للمجموعة، استعمل زر "إعدادات المجموعة".</p>
        </div>
        <footer class="admin-student-modal-foot admin-student-lesson-actions">
          <button type="button" class="outline-btn" data-action="admin-reset-student-lessons" data-id="${escapeHtml(accessEditingUser.id)}">إعدادات المجموعة</button>
          <span class="admin-student-lesson-spacer"></span>
          <button type="button" class="outline-btn" data-action="admin-close-student-lessons">إلغاء</button>
          <button type="button" class="primary-btn" data-action="admin-save-student-lessons" data-id="${escapeHtml(accessEditingUser.id)}">حفظ الدروس</button>
        </footer>
      </section>
    </div>` : "";

  const groupDetailMarkup = selectedGroup ? `
    <section class="admin-panel admin-group-detail-panel">
      <div class="admin-section-head"><div><p class="admin-eyebrow">تفاصيل المجموعة</p><h2>${escapeHtml(selectedGroup.name||"المجموعة")} <span class="admin-group-level-chip">${normalizeGroupCourseLevel(selectedGroup.level)}</span></h2><p>إضافة الطلبة ومتابعة الحسابات داخل هاد المجموعة.</p></div><span class="admin-count">${selectedGroupUsers.length} طالب</span></div>
      <div class="admin-section-head admin-group-students-heading"><div><p class="admin-eyebrow">طلبة المجموعة</p><h3>لائحة الطلبة</h3></div></div>
      <div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>الطالب</th><th>المجموعة</th><th>الحالة</th><th>آخر دخول</th><th>الإجراءات</th></tr></thead><tbody>${groupStudentRows}</tbody></table></div>
      <div class="admin-group-add-student">
        <div class="admin-group-add-student-heading"><div><h3>إضافة طالب للمجموعة</h3><p>كتب الاسم، ولد Gmail وكلمة السر، ومن بعد أنشئ الحساب مباشرة.</p></div><span>✨</span></div>
        <div class="admin-form-grid admin-generator-grid">
          <label>اسم الطالب<input id="newStudentName" type="text" placeholder="الاسم الكامل"></label>
          <label>Gmail<input id="newStudentEmail" type="email" placeholder="student123@gmail.com"></label>
          <label>كلمة السر<input id="newStudentPassword" type="text" placeholder="على الأقل 6 أحرف"></label>
          <input id="newStudentGroup" type="hidden" value="${escapeHtml(adminSelectedGroupId)}">
        </div>
        <div class="admin-form-actions">
          <button class="outline-btn" data-action="admin-generate">✨ توليد Gmail وكلمة السر</button>
          <button class="outline-btn" data-action="admin-copy-credentials">نسخ معلومات الدخول</button>
          <button class="primary-btn" data-action="admin-create-student">إنشاء حساب الطالب</button>
        </div>
        <p class="admin-note">Generator كيقترح عنوان Gmail وكلمة سر. الحساب كيتسجل فعلياً فـ Firebase، ولكن عنوان Gmail المقترح ما كيعنيش إنشاء بريد Gmail حقيقي.</p>
      </div>
    </section>
  ` : `<section class="admin-panel admin-group-empty-detail"><p>اختار مجموعة من اللائحة باش تشوف الطلبة ديالها وتزيد طلبة جداد.</p></section>`;

  const groupsMarkupPage = `
    <section class="admin-welcome"><div><p class="admin-eyebrow">تدبير المجموعات</p><h1>المجموعات والطلبة</h1><p>أنشئ المجموعات، ومن داخل كل مجموعة زيد الطلبة باستعمال Generator.</p></div></section>
    <section class="admin-panel"><div class="admin-section-head"><div><p class="admin-eyebrow">مجموعة جديدة</p><h2>${editingGroupId?"تعديل المجموعة":"إضافة مجموعة"}</h2></div><span class="admin-section-icon">＋</span></div>
      <div class="admin-group-form">
        <div class="admin-form-grid admin-group-basic-fields">
          <label>اسم المجموعة<input id="groupName" type="text" value="${escapeHtml(editing.name||"")}" placeholder="مثلاً: A1 صباحي"></label>
          <label>الوقت المطلوب يومياً (بالدقائق)<input id="groupRequiredMinutes" type="number" min="0" max="600" value="${editing.requiredDailyMinutes==null?30:Number(editing.requiredDailyMinutes)}"></label>
        </div>
        ${competitionAccessMarkup}
        <div class="admin-group-level-accordion">
          <div class="admin-group-level-accordion-heading">
            <strong>المستويات الدراسية والدروس المتاحة</strong>
            <span>اضغط على المستوى لفتح إعداداته أو إغلاقها</span>
          </div>
          ${groupLessonPanels}
        </div>
        <p class="admin-note">تقدر تفعّل أو تقفل كل مستوى للطلاب بشكل مستقل. وفي B1 وB2 تقدر أيضاً تتحكم في Kurs وTeste وTraining Prüfung وPrüfungen، ثم تحدد دروس Kurs لكل مستوى. جميع الاختيارات كتتحفظ معاً.</p>
        <div class="admin-form-actions"><button class="primary-btn" data-action="admin-save-group">${editingGroupId?"حفظ التعديلات":"إنشاء المجموعة"}</button>${editingGroupId?'<button class="outline-btn" data-action="admin-cancel-group-edit">إلغاء</button>':""}</div>
      </div>
    </section>
    <section class="admin-panel"><div class="admin-section-head"><div><p class="admin-eyebrow">كل المجموعات</p><h2>قائمة المجموعات</h2></div><span class="admin-count">${realGroups.length} مجموعات</span></div><div class="admin-group-list">${groupsMarkup}</div></section>
  `;

  const resultsMarkupPage = `
    <section class="admin-welcome"><div><p class="admin-eyebrow">النتائج والتقارير</p><h1>نتائج المجموعات والطلبة</h1><p>اختار المجموعة أولاً، ومن بعد تقدر تختار طالب من نفس المجموعة.</p></div></section>

    ${adminProgressDashboardMarkup}
    ${adminProgressLessonStatusOverlay}
    ${adminProgressMetricOverlay}
    ${adminResultsStudentId!=="all" ? `
      <section class="admin-panel admin-analytics-panel">
        <div class="admin-section-head"><div><p class="admin-eyebrow">التقرير الفردي</p><h2>نتائج الطالب المختار</h2></div><span class="admin-count">طالب واحد</span></div>
        <div class="admin-analytics-student-list">${resultsStudentAnalyticsMarkup}</div>
        <p class="admin-analytics-note">هاد التقرير كيعرض نتائج الطالب المختار فقط، مع الدروس والمحاور والتمارين اللي محتاجة مراجعة ومدة التعلم وعدد مرات الدخول.</p>
      </section>
    ` : adminResultsGroupId!=="all" ? `
      <section class="admin-panel admin-analytics-panel">
        <div class="admin-section-head"><div><p class="admin-eyebrow">تقرير المجموعة</p><h2>نتائج المجموعة المختارة</h2></div><span class="admin-count">${resultsGroupFilteredUsers.length} طالب</span></div>
        <div class="admin-analytics-group-grid">${resultsGroupAnalyticsMarkup}</div>
        <p class="admin-analytics-note">هاد التقرير كيجمع نتائج المجموعة المختارة فقط، وكيعرض متوسطها والنتائج حسب الدروس والمراحل والتمارين ومقارنة الطلبة داخل نفس المجموعة.</p>
      </section>
    ` : `
      <section class="admin-panel admin-results-prompt">
        <div class="admin-results-prompt-icon">📊</div>
        <div><h2>نظرة عامة على جميع المجموعات</h2><p>اللوحة أعلاه كتجمع تقدم جميع الطلبة. اختار مجموعة أو طالب من الفلاتر باش تشوف لوحة التقدم والتقرير بالتفصيل.</p></div>
      </section>
    `}
    ${adminResultsTypeFilter==="kurs" || adminResultsTypeFilter==="podcast" ? resultsActivityMarkup : ""}
    <p class="admin-local-warning">☁️ Firebase: المجموعات، حسابات الطلبة، الأنشطة والنتائج محفوظة تحت deutschA1.</p>
  `;

  const contentLibraryMarkup = renderAdminContentSection();
  const pagesManagerMarkup = renderAdminPagesSection();
  const adminDailyTasksMarkup = adminSection==="tasks" ? renderAdminDailyTasksSection(realGroups,users,today) : "";
  const adminV31StudentSection=`<section class="admin-welcome"><div><p class="admin-eyebrow">إدارة المتعلمين</p><h1>التلاميذ</h1><p>متابعة الحسابات، النشاط، المجموعات وصلاحيات الوصول إلى الدروس.</p></div><button type="button" class="primary-btn" data-action="admin-nav" data-section="groups">＋ إضافة تلميذ داخل مجموعة</button></section>
    <section class="admin-stats admin-v31-student-stats"><article><span>👨‍🎓</span><div><small>عدد التلاميذ</small><strong>${users.length}</strong></div></article><article><span>🟢</span><div><small>نشطوا خلال 7 أيام</small><strong>${adminV31ActiveStudents.length}</strong></div></article><article><span>👥</span><div><small>بدون مجموعة</small><strong>${unassignedCount}</strong></div></article></section>
    <section class="admin-panel"><div class="admin-section-head"><div><p class="admin-eyebrow">الحسابات المسجلة</p><h2>قائمة التلاميذ</h2><p>اضغط على اسم التلميذ لعرض التفاصيل أو استخدم أزرار الإدارة.</p></div><span class="admin-count">${filteredUsers.length} / ${users.length}</span></div>
      <div class="admin-v31-student-filters"><label>المجموعة<select id="adminGroupFilter">${studentGroupFilterOptions}</select></label><label>حالة النشاط<select id="adminStudentFilter"><option value="all" ${adminStudentFilter==="all"?"selected":""}>جميع التلاميذ</option><option value="compliant" ${adminStudentFilter==="compliant"?"selected":""}>حققوا الهدف</option><option value="insufficient" ${adminStudentFilter==="insufficient"?"selected":""}>وقت غير كافٍ</option><option value="inactive" ${adminStudentFilter==="inactive"?"selected":""}>غير نشطين</option><option value="never" ${adminStudentFilter==="never"?"selected":""}>لم يدخلوا بعد</option></select></label></div>
      <div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>التلميذ</th><th>المجموعة</th><th>الحساب والنشاط</th><th>الدخول اليوم</th><th>الهدف اليومي</th><th>آخر دخول</th><th>الإجراءات</th></tr></thead><tbody>${studentsMarkup}</tbody></table></div>
    </section>`;
  const adminV31TeacherSection=`<section class="admin-welcome"><div><p class="admin-eyebrow">هيكلة المنصة</p><h1>المعلمون</h1><p>مكان مخصص لتدبير المعلمين مستقبلاً.</p></div></section><section class="admin-panel admin-v31-empty-section"><span aria-hidden="true">👩🏻‍🏫</span><h2>حسابات المعلمين غير مفعّلة في هذه النسخة</h2><p>المنصة الحالية كتدعم حسابات الأدمن والتلاميذ، ولكن ما فيهاش بعد قاعدة بيانات أو صلاحيات مستقلة للمعلمين. ما غاديش نعرض أرقاماً غير موجودة أو زرّ إنشاء حساب غير مربوط.</p><button type="button" class="outline-btn" data-action="admin-nav" data-section="groups">الانتقال إلى المجموعات</button></section>`;
  const adminV31SettingsSection=`<section class="admin-welcome"><div><p class="admin-eyebrow">لوحة التحكم</p><h1>إعدادات الإدارة</h1><p>المداخل الأساسية لضبط الوصول والدرس والمحتوى.</p></div></section><div class="admin-v31-settings-grid">
    <section class="admin-panel"><span>👥</span><h2>المجموعات وصلاحيات الدروس</h2><p>حدّد الدروس المفتوحة ومدة التعلّم المطلوبة لكل مجموعة.</p><button type="button" class="outline-btn" data-action="admin-nav" data-section="groups">فتح إعدادات المجموعات</button></section>
    <section class="admin-panel"><span>👩🏻‍🎓</span><h2>حسابات التلاميذ</h2><p>تغيير صلاحيات الوصول ومراجعة حسابات الطلبة.</p><button type="button" class="outline-btn" data-action="admin-nav" data-section="students">فتح إدارة التلاميذ</button></section>
    <section class="admin-panel"><span>📚</span><h2>الدروس والملفات</h2><p>إضافة الملفات والأنشطة والاختبارات التعليمية.</p><button type="button" class="outline-btn" data-action="admin-nav" data-section="content">فتح إدارة المحتوى</button></section>
    <section class="admin-panel"><span>🧩</span><h2>صفحات HTML</h2><p>فتح محرر الصفحات ومسارات الاختبارات.</p><button type="button" class="outline-btn" data-action="admin-nav" data-section="pages">فتح محرر الصفحات</button></section>
  </div><section class="admin-panel admin-v31-logout-panel"><div><h2>تسجيل الخروج</h2><p>إنهاء جلسة الأدمن الحالية.</p></div><button type="button" class="logout-btn" data-action="logout">تسجيل الخروج</button></section>`;
  const adminGroupFullscreenMarkup = adminGroupFullscreenOpen && selectedGroup ? `
    <section class="admin-group-fullscreen" role="dialog" aria-modal="true" aria-label="تلاميذ مجموعة ${escapeHtml(selectedGroup.name||"المجموعة")}" dir="rtl">
      <header class="admin-group-fullscreen-header">
        <div class="admin-group-fullscreen-heading">
          <span class="admin-group-fullscreen-heading-icon" aria-hidden="true">👥</span>
          <div><small>المجموعات · لائحة التلاميذ</small><h1>${escapeHtml(selectedGroup.name||"المجموعة")}</h1></div>
        </div>
        <div class="admin-group-fullscreen-header-actions">
          <span class="admin-group-fullscreen-level">${normalizeGroupCourseLevel(selectedGroup.level)}</span>
          <span class="admin-group-fullscreen-count">${selectedGroupUsers.length} تلميذ</span>
          <button type="button" class="admin-group-fullscreen-back" data-action="admin-close-group-fullscreen" aria-label="رجوع إلى قائمة المجموعات">رجوع للمجموعات <span aria-hidden="true">←</span></button>
        </div>
      </header>
      <main class="admin-group-fullscreen-body" id="adminGroupFullscreenBody">
        <div class="admin-group-fullscreen-inner">${groupDetailMarkup}</div>
      </main>
    </section>` : "";

  const adminMainContent = adminSection==="students" ? adminV31StudentSection : adminSection==="teachers" ? adminV31TeacherSection : adminSection==="settings" ? adminV31SettingsSection : adminSection==="groups" ? groupsMarkupPage : adminSection==="tasks" ? adminDailyTasksMarkup : adminSection==="results" ? resultsMarkupPage : adminSection==="content" ? contentLibraryMarkup : adminSection==="pages" ? pagesManagerMarkup : homeMarkup;
  const adminTitles={home:"لوحة الإدارة",students:"التلاميذ",teachers:"المعلمون",groups:"المجموعات",tasks:"المهام اليومية",results:"التقارير",content:"الدروس",settings:"الإعدادات",pages:"محرر HTML"};
  const adminTitle=adminTitles[adminSection]||"لوحة الإدارة";

  app.innerHTML=`<div class="admin-page admin-layout-page admin-v31">
    <div class="admin-shell">
      <aside class="admin-sidebar" aria-label="القائمة الرئيسية للأدمن">
        <div class="admin-v31-sidebar-brand"><span class="admin-v31-logo">📚</span><strong>المنصة التعليمية</strong><small>لوحة التحكم والإدارة</small></div>
        <nav aria-label="أقسام الإدارة">
          <button class="${adminSection==="home"?"active":""}" data-action="admin-nav" data-section="home"><span>⌂</span> الرئيسية</button>
          <button class="${adminSection==="students"?"active":""}" data-action="admin-nav" data-section="students"><span>👩🏻‍🎓</span> التلاميذ</button>
          <button class="${adminSection==="content"?"active":""}" data-action="admin-nav" data-section="content"><span>📖</span> الدروس</button>
          <button class="${adminSection==="groups"?"active":""}" data-action="admin-nav" data-section="groups"><span>👥</span> المجموعات</button>
          <button class="${adminSection==="tasks"?"active":""}" data-action="admin-nav" data-section="tasks"><span>🗓️</span> المهام اليومية</button>
          <button class="${adminSection==="teachers"?"active":""}" data-action="admin-nav" data-section="teachers"><span>👩🏻‍🏫</span> المعلمون</button>
          <button class="${adminSection==="results"?"active":""}" data-action="admin-nav" data-section="results"><span>📊</span> التقارير</button>
          <button class="${adminSection==="settings"?"active":""}" data-action="admin-nav" data-section="settings"><span>⚙️</span> الإعدادات</button>
          <button class="${adminSection==="pages"?"active":""}" data-action="admin-nav" data-section="pages"><span>🧩</span> صفحات HTML</button>
        </nav>
        <div class="admin-v31-sidebar-foot"><span aria-hidden="true">🎓</span><small>تعلم الألمانية خطوة بخطوة</small></div>
      </aside>
      <main class="admin-content" id="adminMainContent">
        <header class="admin-v31-topbar">
          <div class="admin-v31-heading"><div class="admin-v31-heading-logo" aria-hidden="true">📚</div><div><h1>${escapeHtml(adminTitle)}</h1><p>تحكم في المنصة وتابع جميع الأقسام</p></div></div>
          <div class="admin-v31-user"><span class="admin-v31-hello">مرحباً، ${escapeHtml(currentUser.name||"مدير المنصة")}<small>مدير النظام</small></span><span class="admin-v31-avatar" aria-hidden="true">👨🏻‍💼</span><button type="button" class="admin-v31-signout" data-action="logout" title="تسجيل الخروج" aria-label="تسجيل الخروج">↪</button></div>
        </header>
        ${adminMainContent}
      </main>
    </div>
    ${adminGroupFullscreenMarkup}
    <div class="admin-student-modal-backdrop" id="adminStudentDetailsModal" aria-hidden="true">
      <section class="admin-student-modal" role="dialog" aria-modal="true" aria-labelledby="adminStudentDetailsTitle">
        <header class="admin-student-modal-head"><div><p>حساب الطالب</p><h2 id="adminStudentDetailsTitle">تفاصيل الطالب</h2></div><button type="button" class="admin-student-modal-close" data-action="admin-close-student-details" aria-label="إغلاق">×</button></header>
        <div class="admin-student-modal-body" id="adminStudentDetailsBody"></div>
        <footer class="admin-student-modal-foot"><button type="button" class="outline-btn" data-action="admin-close-student-details">إغلاق</button></footer>
      </section>
    </div>
    ${studentLessonAccessModal}
  </div>`;
}


const STUDENT_RESULT_SKILLS = [
  {id:"vocab",label:"المفردات",de:"Wortschatz",icon:"📚",description:"الكلمات والمعاني والأسماء والأفعال والصفات"},
  {id:"sentences",label:"تركيب الجمل",de:"Satzbau",icon:"🧩",description:"ترتيب الكلمات والقواعد وتكوين الجمل"},
  {id:"speaking",label:"الكلام والحوار",de:"Sprechen",icon:"💬",description:"الحوار والتواصل الشفهي"},
  {id:"writing",label:"الكتابة",de:"Schreiben",icon:"✍️",description:"الترجمة الكتابية وكتابة الكلمات والجمل"},
  {id:"listening",label:"الاستماع",de:"Hören",icon:"🎧",description:"فهم الكلمات والجمل المسموعة"}
];
function studentNormalizeSkillText(value){
  return String(value||"").toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ß/g,"ss").replace(/\s+/g," ").trim();
}
function studentSkillForResultRow(result,row){
  const moduleId=studentNormalizeSkillText(result && result.moduleId);
  const title=studentNormalizeSkillText(result && result.title);
  const label=studentNormalizeSkillText(row && row.label);
  const combined=`${moduleId} ${title} ${label}`;
  const explicit=studentNormalizeSkillText(row && row.skillType || result && result.skillType);
  if(["vocab","sentences","speaking","writing","listening"].includes(explicit))return explicit;
  const categoryMatch=moduleId.match(/^lektion-\d+-(verben|nomen|adjektive|prapositionen|grammatik)$/);
  if(categoryMatch)return categoryMatch[1]==="grammatik"?"sentences":"vocab";
  if(adminResultType(result)==="podcast" || /hoeren|horen|hordetektiv|audio|podcast|listening/.test(combined))return "listening";
  if(/sprechen|dialog|gespraech|aussprache|mundlich|konversation|speaking/.test(combined))return "speaking";
  if(/schreib|schrift|writing|ubersetzungswerkstatt|text verfassen|text schreiben/.test(combined))return "writing";
  if(/satzbau|luckensatze|grammatik|praposition|fehler|worter sortieren|am oder im|verbposition|konjug|verben im prasens|verben im alltag|wie, wo|wo oder wann|mit dem bus|worter ordnen/.test(combined))return "sentences";
  if(/wortschatz|worter verbinden|artikel-detektiv|ubersetzungsquiz|vokabel|wetter-detektiv|jahreszeiten|wochentage|adjektiv|nomen|gegenteile|kategorien|verben unterwegs|worter match/.test(combined))return "vocab";
  return null;
}
function studentSkillRowsForResult(result){
  const history=result && result.itemHistory && typeof result.itemHistory==="object" ? result.itemHistory : null;
  if(history && Object.keys(history).length){
    const rows=Object.entries(history).map(([key,value])=>{
      const points=Number(value && value.correct)||0;
      const max=Number(value && value.total)||0;
      return {key,label:String(value && value.label || (result.exerciseLabels && result.exerciseLabels[key]) || key),points,max,percent:max>0?Math.round(points/max*100):null,attempts:Math.max(1,Number(value && value.attempts)||1),kind:String(value && value.kind||"exercise"),parentExerciseId:String(value && value.parentExerciseId||key),meaning:String(value && value.meaning||""),skillType:String(value && value.skillType||"")};
    }).filter(item=>item.percent!==null);
    const detailedParents=new Set(rows.filter(item=>item.kind==="item" && item.parentExerciseId).map(item=>item.parentExerciseId));
    return rows.filter(item=>item.kind==="item" || !detailedParents.has(item.key));
  }
  return adminExerciseScoreRows(result).map(item=>({...item,attempts:Math.max(1,Number(result && result.attempts)||1)}));
}
function studentVocabularyMeaning(word){
  const target=studentNormalizeSkillText(word);
  if(!target)return "";
  for(const lesson of lessons){
    for(const entries of Object.values(lesson.data||{})){
      for(const entry of entries||[]){
        if(studentNormalizeSkillText(entry && entry[0])===target)return String(entry[1]||"");
      }
    }
  }
  const extraMeanings={
    "grosseltern":"الأجداد","der grossvater":"الجد","die grossmutter":"الجدة","eltern":"الوالدان",
    "der vater":"الأب","die mutter":"الأم","der onkel":"العم / الخال","die tante":"العمة / الخالة",
    "geschwister":"الإخوة والأخوات","der sohn":"الابن","der bruder":"الأخ","die tochter":"الابنة",
    "die schwester":"الأخت","der cousin":"ابن العم / الخال","die cousine":"ابنة العم / الخال",
    "enkel":"الأحفاد","der enkel":"الحفيد","die enkelin":"الحفيدة",
    "die zahlen":"الأرقام","eins":"واحد","zwei":"اثنان","drei":"ثلاثة","vier":"أربعة","funf":"خمسة",
    "sechs":"ستة","sieben":"سبعة","acht":"ثمانية","neun":"تسعة","zehn":"عشرة",
    "rad fahren":"ركوب الدراجة","freunde treffen":"لقاء الأصدقاء","ins kino gehen":"الذهاب إلى السينما",
    "feiern":"الاحتفال","in den park gehen":"الذهاب إلى الحديقة","musik horen":"الاستماع إلى الموسيقى",
    "computerspiele spielen":"لعب ألعاب الحاسوب","schwimmen":"السباحة","tanzen":"الرقص"
  };
  return extraMeanings[target]||"";
}
function studentBuildSkillReport(results,courseRecords={}){
  const buckets=Object.fromEntries(STUDENT_RESULT_SKILLS.map(skill=>[skill.id,{...skill,itemMap:{},learnedMap:{},points:0,max:0}]));
  const addLearnedWords=(record,lessonIndex)=>{
    const words=record?.learnedWords&&typeof record.learnedWords==="object"?Object.values(record.learnedWords):[];
    words.forEach(entry=>{
      const label=String(entry&&(entry.word||entry.de)||"").trim();
      const normalized=studentNormalizeSkillText(label);
      if(!label||!normalized)return;
      const key=`${lessonIndex}:${normalized}`;
      const old=buckets.vocab.learnedMap[key]||{key,label,lessonIndex,level:String(record.level||"A1"),meaning:"",learnedAt:"",source:"lesson"};
      old.label=label;
      old.level=String(record.level||old.level||"A1");
      old.meaning=String(entry.meaning||old.meaning||studentVocabularyMeaning(label)||"");
      old.learnedAt=String(entry.lastSeenAt||entry.firstLearnedAt||old.learnedAt||"");
      old.source=String(entry.source||old.source||"lesson");
      buckets.vocab.learnedMap[key]=old;
    });
  };
  (results||[]).forEach(result=>{
    if(!result || typeof result!=="object")return;
    const resultType=adminResultType(result);
    const lessonIndex=adminResultLessonIndex(result);
    addLearnedWords(result,lessonIndex);
    let rows=studentSkillRowsForResult(result);
    if(!rows.length){
      const percent=adminResultPercent(result);
      const points=Number(result.points)||0;
      const max=Number(result.maxPoints)||0;
      if(percent!==null && max>0)rows=[{key:"summary",label:String(result.title||result.moduleId||"نتيجة"),points,max,percent,attempts:Math.max(1,Number(result.attempts)||1)}];
    }
    rows.forEach(row=>{
      const skillId=studentSkillForResultRow(result,row);
      if(!skillId || !buckets[skillId] || row.percent===null || !(Number(row.max)>0))return;
      const label=String(row.label||row.key||"تمرين").trim();
      const normalized=studentNormalizeSkillText(label);
      const key=`${lessonIndex}:${normalized||String(row.key||"")}`;
      const old=buckets[skillId].itemMap[key] || {
        key,label,lessonIndex,points:0,max:0,attempts:0,sourceTitle:String(result.title||result.moduleId||"")
      };
      old.points+=Number(row.points)||0;
      old.max+=Number(row.max)||0;
      old.attempts+=Math.max(1,Number(row.attempts)||1);
      old.label=label||old.label;
      old.meaning=String(row.meaning||old.meaning||"");
      old.sourceTitle=String(result.title||old.sourceTitle||"");
      buckets[skillId].itemMap[key]=old;
    });
  });
  Object.values(courseRecords||{}).forEach(record=>{
    if(!record || typeof record!=="object")return;
    const lessonIndex=Number(record.lessonNumber)>=1?Number(record.lessonNumber)-1:-1;
    addLearnedWords(record,lessonIndex);
  });
  return STUDENT_RESULT_SKILLS.map(skill=>{
    const bucket=buckets[skill.id];
    const items=Object.values(bucket.itemMap).map(item=>{
      const percent=item.max>0?Math.round(item.points/item.max*100):null;
      return {...item,percent,meaning:item.meaning || (skill.id==="vocab"?studentVocabularyMeaning(item.label):""),status:percent===null?"unrated":percent>=80?"mastered":percent>=60?"medium":"weak"};
    }).sort((a,b)=>(a.percent??101)-(b.percent??101)||a.label.localeCompare(b.label));
    const points=items.reduce((sum,item)=>sum+item.points,0);
    const max=items.reduce((sum,item)=>sum+item.max,0);
    const average=max>0?Math.round(points/max*100):null;
    const learnedItems=Object.values(bucket.learnedMap||{}).sort((a,b)=>a.label.localeCompare(b.label));
    return {...skill,items,learnedItems,points,max,average,mastered:items.filter(item=>item.status==="mastered").length,medium:items.filter(item=>item.status==="medium").length,weak:items.filter(item=>item.status==="weak").length,assessed:items.length};
  });
}
function studentSkillStatusLabel(percent){
  if(percent===null || percent===undefined)return "لم يتم التقييم بعد";
  if(percent>=80)return "متقن";
  if(percent>=60)return "متوسط";
  return "يحتاج مراجعة";
}
function studentSkillOverviewMarkup(skillReport){
  const cards=(skillReport||[]).map(skill=>{
    const score=skill.average===null?"—":`${skill.average}%`;
    const status=studentSkillStatusLabel(skill.average);
    const tone=skill.average===null?"unrated":skill.average>=80?"mastered":skill.average>=60?"medium":"weak";
    return `<button type="button" class="student-skill-preview-item ${tone}" data-action="student-results-open-skill" data-skill="${skill.id}">
      <span class="student-skill-preview-icon">${skill.icon}</span>
      <strong>${escapeHtml(skill.label)}</strong>
      <b>${score}</b>
      <small>${escapeHtml(status)}</small>
      <em>${skill.assessed} عناصر مقيمة${skill.id==="vocab"&&skill.learnedItems?.length?` · ${skill.learnedItems.length} كلمة تعلمتها`:""}</em>
    </button>`;
  }).join("");
  return `<section class="student-skills-preview-card">
    <div class="student-skills-preview-head"><div><small>تحليل المهارات</small><h2>مستواك في الألمانية</h2><p>شوف شنو متقن وشنو خاصك تراجع في كل مهارة.</p></div><span>5</span></div>
    <div class="student-skills-preview-grid">${cards}</div>
    <button type="button" class="student-skills-open-all" data-action="student-results-jump" data-target="resultsSkills">عرض التحليل الكامل <span>←</span></button>
  </section>`;
}

const STUDENT_A2_VOCABULARY = {"1":{"Nomen":[{"de":"die Erfahrung","ar":"تجربة"},{"de":"das Erlebnis","ar":"حدث / تجربة"},{"de":"die Reise","ar":"رحلة"},{"de":"das Wochenende","ar":"نهاية الأسبوع"}],"Verben":[{"de":"besuchen","ar":"يزور","example":"Am Wochenende will ich meine Freunde besuchen.","exampleAr":"في عطلة نهاية الأسبوع أريد زيارة أصدقائي."},{"de":"erleben","ar":"يعيش تجربة","example":"Ich möchte etwas Neues erleben.","exampleAr":"أريد أن أعيش تجربة جديدة."},{"de":"ausprobieren","ar":"يجرّب","example":"Ich probiere ein neues Restaurant aus.","exampleAr":"أجرّب مطعماً جديداً."},{"de":"erzählen","ar":"يحكي","example":"Ich erzähle von meiner Reise.","exampleAr":"أحكي عن رحلتي."},{"de":"planen","ar":"يخطط","example":"Wir planen eine Reise.","exampleAr":"نخطط لرحلة."},{"de":"reisen","ar":"يسافر","example":"Nächstes Jahr möchte ich nach Deutschland reisen.","exampleAr":"أريد السفر إلى ألمانيا العام القادم."},{"de":"fahren","ar":"يذهب / يسافر بوسيلة نقل","example":"Wir sind letztes Jahr nach Agadir gefahren.","exampleAr":"سافرنا إلى أكادير العام الماضي."},{"de":"machen","ar":"يفعل / يقوم بـ","example":"Wir haben viele Fotos gemacht.","exampleAr":"التقطنا الكثير من الصور."}],"Adjektive":[{"de":"neu","ar":"جديد","example":"Ich habe ein neues Restaurant besucht.","exampleAr":"زرت مطعماً جديداً."}]},"2":{"Nomen":[{"de":"die Mütze","ar":"قبعة صوفية"},{"de":"der Anzug","ar":"بدلة"},{"de":"das Hemd","ar":"قميص"},{"de":"die Jacke","ar":"سترة"},{"de":"das Kleid","ar":"فستان"},{"de":"der Rock","ar":"تنورة"},{"de":"der Mantel","ar":"معطف"},{"de":"die Schuhe","ar":"أحذية"},{"de":"die Krawatte","ar":"ربطة عنق"},{"de":"die Hose","ar":"سروال"},{"de":"der Pullover","ar":"كنزة"},{"de":"die Stiefel","ar":"أحذية طويلة"},{"de":"die Bluse","ar":"بلوزة"},{"de":"die Jeans","ar":"جينز"},{"de":"der Schal","ar":"وشاح"},{"de":"der Gürtel","ar":"حزام"},{"de":"die Kappe","ar":"قبعة"},{"de":"die Turnschuhe","ar":"حذاء رياضي"},{"de":"die Socken","ar":"جوارب"},{"de":"die Handschuhe","ar":"قفازات"},{"de":"die Sandalen","ar":"صنادل"},{"de":"der Hut","ar":"قبعة"},{"de":"die Shorts","ar":"سروال قصير"},{"de":"die Farbe","ar":"اللون"},{"de":"die Größe","ar":"المقاس / الحجم"}],"Verben":[{"de":"suchen","ar":"يبحث عن","example":"Ich suche einen Pullover.","exampleAr":"أبحث عن كنزة."},{"de":"möchten","ar":"يودّ / يرغب","example":"Welche Farbe möchten Sie?","exampleAr":"أي لون تريد؟"},{"de":"brauchen","ar":"يحتاج","example":"Welche Größe brauchen Sie?","exampleAr":"ما المقاس الذي تحتاجه؟"},{"de":"anprobieren","ar":"يجرّب ارتداء","example":"Kann ich das anprobieren?","exampleAr":"هل يمكنني تجربة هذا؟"},{"de":"gefallen","ar":"يعجب","example":"Der Pullover gefällt mir.","exampleAr":"الكنزة تعجبني."},{"de":"passen","ar":"يناسب","example":"Es passt mir nicht.","exampleAr":"إنه لا يناسبني."},{"de":"nehmen","ar":"يأخذ","example":"Ich nehme es.","exampleAr":"سآخذه."},{"de":"tragen","ar":"يرتدي","example":"Ich trage einen Pullover.","exampleAr":"أنا أرتدي كنزة."}],"Adjektive":[{"de":"rot","ar":"أحمر"},{"de":"blau","ar":"أزرق"},{"de":"gelb","ar":"أصفر"},{"de":"grün","ar":"أخضر"},{"de":"schwarz","ar":"أسود"},{"de":"weiß","ar":"أبيض"},{"de":"grau","ar":"رمادي"},{"de":"braun","ar":"بني"},{"de":"rosa","ar":"وردي"},{"de":"orange","ar":"برتقالي"},{"de":"schön","ar":"جميل"},{"de":"groß","ar":"كبير"},{"de":"klein","ar":"صغير"},{"de":"lang","ar":"طويل"},{"de":"kurz","ar":"قصير"},{"de":"teuer","ar":"غالي"},{"de":"billig","ar":"رخيص"},{"de":"alt","ar":"قديم"},{"de":"neu","ar":"جديد"},{"de":"gut","ar":"جيد"},{"de":"hoch","ar":"مرتفع"},{"de":"bequem","ar":"مريح"},{"de":"modern","ar":"عصري"},{"de":"warm","ar":"دافئ"},{"de":"kalt","ar":"بارد"},{"de":"interessant","ar":"ممتع"},{"de":"schöner","ar":"أجمل"},{"de":"größer","ar":"أكبر"},{"de":"kleiner","ar":"أصغر"},{"de":"länger","ar":"أطول"},{"de":"kürzer","ar":"أقصر"},{"de":"teurer","ar":"أغلى"},{"de":"billiger","ar":"أرخص"},{"de":"älter","ar":"أقدم"},{"de":"jung","ar":"شاب"},{"de":"jünger","ar":"أصغر سنًّا"},{"de":"höher","ar":"أعلى"},{"de":"besser","ar":"أفضل"}]},"3":{"Nomen":[{"de":"der Vater","ar":"الأب"},{"de":"die Mutter","ar":"الأم"},{"de":"der Bruder","ar":"الأخ"},{"de":"die Schwester","ar":"الأخت"},{"de":"der Sohn","ar":"الابن"},{"de":"die Tochter","ar":"الابنة"},{"de":"der Opa","ar":"الجد"},{"de":"die Oma","ar":"الجدة"},{"de":"der Onkel","ar":"العم / الخال"},{"de":"die Tante","ar":"العمة / الخالة"},{"de":"der Cousin","ar":"ابن العم / ابن الخال"},{"de":"die Cousine","ar":"بنت العم / بنت الخال"},{"de":"die Familie","ar":"الأسرة"},{"de":"die Freunde","ar":"الأصدقاء"},{"de":"die Eltern","ar":"الوالدان"},{"de":"die Großeltern","ar":"الأجداد"},{"de":"die Geschwister","ar":"الإخوة"},{"de":"das Kind","ar":"الطفل"},{"de":"der Mann","ar":"الرجل"},{"de":"die Frau","ar":"المرأة"},{"de":"das Baby","ar":"الرضيع"}],"Verben":[{"de":"lieben","ar":"يحب"},{"de":"helfen","ar":"يساعد"},{"de":"sprechen","ar":"يتحدث"},{"de":"wohnen","ar":"يسكن"},{"de":"spielen","ar":"يلعب"},{"de":"lernen","ar":"يتعلم"},{"de":"lachen","ar":"يضحك"},{"de":"besuchen","ar":"يزور"}],"Adjektive":[{"de":"jung","ar":"شاب"},{"de":"alt","ar":"كبير السن"},{"de":"freundlich","ar":"ودود"},{"de":"nett","ar":"لطيف"},{"de":"schön","ar":"جميل"},{"de":"groß","ar":"كبير"},{"de":"klein","ar":"صغير"},{"de":"fleißig","ar":"مجتهد"},{"de":"intelligent","ar":"ذكي"}]},"4":{"Nomen":[{"de":"das Hotel","ar":"الفندق"},{"de":"die Ferienwohnung","ar":"شقة العطلة"},{"de":"der Campingplatz","ar":"مخيم"},{"de":"die Jugendherberge","ar":"نزل الشباب"},{"de":"das Hostel","ar":"نزل شبابي"},{"de":"das Wohnzimmer","ar":"غرفة الجلوس"},{"de":"das Schlafzimmer","ar":"غرفة النوم"},{"de":"die Küche","ar":"المطبخ"},{"de":"das Badezimmer","ar":"الحمام"},{"de":"der Balkon","ar":"الشرفة"},{"de":"der Garten","ar":"الحديقة"},{"de":"das Bett","ar":"السرير"},{"de":"das Sofa","ar":"الأريكة"},{"de":"der Tisch","ar":"الطاولة"},{"de":"der Stuhl","ar":"الكرسي"},{"de":"der Schrank","ar":"الخزانة"},{"de":"das Regal","ar":"الرف"},{"de":"die Lampe","ar":"المصباح"},{"de":"der Teppich","ar":"السجادة"}],"Verben":[{"de":"übernachten","ar":"يبيت / يقيم"},{"de":"mieten","ar":"يستأجر"},{"de":"kosten","ar":"يكلّف"},{"de":"suchen","ar":"يبحث عن"},{"de":"finden","ar":"يجد"},{"de":"tauschen","ar":"يبدّل / يتبادل"}],"Adjektive":[{"de":"teuer","ar":"غالي"},{"de":"billig","ar":"رخيص"},{"de":"schön","ar":"جميل"},{"de":"ruhig","ar":"هادئ"},{"de":"laut","ar":"مزعج"},{"de":"groß","ar":"كبير"},{"de":"klein","ar":"صغير"},{"de":"gut","ar":"جيد"},{"de":"toll","ar":"رائع"}]},"5":{"Nomen":[{"de":"der Apfel","ar":"التفاح"},{"de":"die Banane","ar":"الموز"},{"de":"die Tomaten","ar":"الطماطم"},{"de":"die Kartoffeln","ar":"البطاطس"},{"de":"die Zwiebeln","ar":"البصل"},{"de":"der Salat","ar":"السلطة"},{"de":"das Brot","ar":"الخبز"},{"de":"der Käse","ar":"الجبن"},{"de":"die Nudeln","ar":"المعكرونة"},{"de":"der Reis","ar":"الأرز"},{"de":"die Milch","ar":"الحليب"},{"de":"die Eier","ar":"البيض"},{"de":"die Dose","ar":"العلبة المعدنية"},{"de":"das Glas","ar":"المرطبان"},{"de":"die Flasche","ar":"القارورة"},{"de":"die Tüte","ar":"الكيس"},{"de":"das Päckchen","ar":"العلبة الصغيرة"},{"de":"das Kilo","ar":"الكيلوغرام"},{"de":"das Stück","ar":"قطعة"},{"de":"die Speisekarte","ar":"قائمة الطعام"},{"de":"der Kellner","ar":"النادل"},{"de":"die Rechnung","ar":"الفاتورة"},{"de":"das Trinkgeld","ar":"الإكرامية"},{"de":"der Müll","ar":"النفايات"},{"de":"die Tonne","ar":"حاوية النفايات"},{"de":"Selbstbedienung","ar":"خدمة ذاتية"},{"de":"Bioabfall","ar":"نفايات عضوية"},{"de":"das Papier","ar":"الورق"},{"de":"das Plastik","ar":"البلاستيك"}],"Verben":[{"de":"kaufen, ich kaufe","ar":"أشتري"},{"de":"essen, ich esse","ar":"آكل"},{"de":"trinken, ich trinke","ar":"أشرب"},{"de":"bestellen, ich bestelle","ar":"أطلب"},{"de":"bezahlen, ich bezahle","ar":"أدفع"},{"de":"wiegen, ich wiege","ar":"أزن"}],"Adjektive":[]},"6":{"Nomen":[{"de":"die Kunst","ar":"الفن"},{"de":"das Graffiti","ar":"الغرافيتي"},{"de":"die Streetart","ar":"فن الشارع"},{"de":"der Künstler","ar":"الفنان"},{"de":"der Protest","ar":"الاحتجاج"},{"de":"die Brücke","ar":"الجسر"},{"de":"schmutzig","ar":"متسخ"},{"de":"sauber","ar":"نظيف"},{"de":"die Polizei","ar":"الشرطة"},{"de":"Ich erinnere mich.","ar":"أتذكر."},{"de":"Ich beschwere mich.","ar":"أشتكي."},{"de":"Ich ärgere mich.","ar":"أنزعج."},{"de":"Ich fühle mich gut.","ar":"أشعر أنني بخير."},{"de":"das Open-Air-Kino","ar":"سينما الهواء الطلق"},{"de":"der Film","ar":"الفيلم"},{"de":"spannend","ar":"مشوق"},{"de":"traurig","ar":"حزين"},{"de":"romantisch","ar":"رومانسي"},{"de":"langweilig","ar":"ممل"},{"de":"lustig","ar":"مضحك"}],"Verben":[{"de":"sich freuen","ar":"يفرح"},{"de":"sich ärgern","ar":"ينزعج"},{"de":"sich fühlen","ar":"يشعر"},{"de":"sich erinnern","ar":"يتذكر"},{"de":"sich beschweren","ar":"يشتكي"},{"de":"sich setzen","ar":"يجلس"},{"de":"sich waschen","ar":"يغتسل"},{"de":"sich anziehen","ar":"يرتدي ملابسه"},{"de":"sich duschen","ar":"يستحم"},{"de":"sich interessieren","ar":"يهتم"}],"Adjektive":[{"de":"fröhlich","ar":"سعيد"},{"de":"traurig","ar":"حزين"},{"de":"wütend","ar":"غاضب"},{"de":"überrascht","ar":"متفاجئ"},{"de":"müde","ar":"نعسان"},{"de":"schmutzig","ar":"متسخ"},{"de":"sauber","ar":"نظيف"},{"de":"spannend","ar":"مشوّق"},{"de":"romantisch","ar":"رومانسي"},{"de":"langweilig","ar":"ممل"},{"de":"lustig","ar":"مضحك"}]},"7":{"Nomen":[{"de":"das Wetter","ar":"الطقس"},{"de":"die Jahreszeit","ar":"الفصل"},{"de":"der Frühling","ar":"الربيع"},{"de":"der Sommer","ar":"الصيف"},{"de":"der Herbst","ar":"الخريف"},{"de":"der Winter","ar":"الشتاء"},{"de":"der Regenschirm","ar":"المظلة"},{"de":"die Temperatur","ar":"درجة الحرارة"},{"de":"der Termin","ar":"الموعد"},{"de":"der Arzttermin","ar":"موعد الطبيب"},{"de":"der Kalender","ar":"التقويم"},{"de":"der Mai","ar":"ماي"},{"de":"der Zug","ar":"القطار"},{"de":"der Kuchen","ar":"الكعكة"}],"Verben":[{"de":"regnen","ar":"تمطر","example":"Wenn es regnet, nehme ich einen Regenschirm.","exampleAr":"عندما تمطر، آخذ معي مظلة."}],"Adjektive":[{"de":"kalt","ar":"بارد"},{"de":"warm","ar":"دافئ"},{"de":"sonnig","ar":"مشمس"},{"de":"windig","ar":"عاصف"}]},"8":{"Nomen":[{"de":"das Verkehrsmittel","ar":"وسيلة النقل"},{"de":"das Fahrrad","ar":"الدراجة"},{"de":"der Bus","ar":"الحافلة"},{"de":"die U-Bahn","ar":"المترو"},{"de":"der Zug","ar":"القطار"},{"de":"der Bahnhof","ar":"محطة القطار"},{"de":"die Ampel","ar":"إشارة المرور"},{"de":"das Carsharing","ar":"مشاركة السيارة"},{"de":"die Umwelt","ar":"البيئة"},{"de":"die Fahrt","ar":"الرحلة"}],"Verben":[{"de":"fahren","ar":"يقود / يذهب بوسيلة نقل","example":"Ich fahre mit dem Zug nach Hamburg.","exampleAr":"أذهب إلى هامبورغ بالقطار."},{"de":"ankommen","ar":"يصل","example":"Der Zug kommt um zehn Uhr an.","exampleAr":"يصل القطار في الساعة العاشرة."}],"Adjektive":[{"de":"billig","ar":"رخيص","example":"Fahrradfahren ist billig.","exampleAr":"ركوب الدراجة رخيص."},{"de":"gesund","ar":"صحي","example":"Fahrradfahren ist gesund.","exampleAr":"ركوب الدراجة صحي."},{"de":"gut","ar":"جيد","example":"Fahrradfahren ist gut für die Umwelt.","exampleAr":"ركوب الدراجة مفيد للبيئة."}]},"9":{"Nomen":[{"de":"der Flohmarkt","ar":"سوق السلع المستعملة"},{"de":"die Winterjacke","ar":"سترة شتوية"},{"de":"das Wörterbuch","ar":"قاموس"},{"de":"der Roman","ar":"رواية"},{"de":"die Gitarre","ar":"الغيتار"},{"de":"das Wochenende","ar":"نهاية الأسبوع"},{"de":"das Restaurant","ar":"المطعم"},{"de":"der Preis","ar":"الثمن"}],"Verben":[{"de":"kaufen","ar":"يشتري","example":"Tom möchte eine gebrauchte Gitarre kaufen.","exampleAr":"يريد توم شراء غيتار مستعمل."},{"de":"verkaufen","ar":"يبيع","example":"Ich verkaufe ein Wörterbuch.","exampleAr":"أبيع قاموساً."},{"de":"sich treffen","ar":"يلتقي","example":"Wir treffen uns am Samstag um elf Uhr.","exampleAr":"نلتقي يوم السبت في الساعة الحادية عشرة."},{"de":"bestellen","ar":"يطلب","example":"Ich bestelle Spaghetti mit Gemüse.","exampleAr":"أطلب سباغيتي بالخضروات."}],"Adjektive":[{"de":"gebraucht","ar":"مستعمل","example":"Ich suche eine gebrauchte Gitarre.","exampleAr":"أبحث عن غيتار مستعمل."},{"de":"günstig","ar":"مناسب السعر"}]},"10":{"Nomen":[{"de":"der Frühling","ar":"الربيع"},{"de":"das Meer","ar":"البحر"},{"de":"das Flugzeug","ar":"الطائرة"},{"de":"die Reise","ar":"الرحلة"},{"de":"das Kolosseum","ar":"الكولوسيوم"},{"de":"der Winter","ar":"الشتاء"},{"de":"die Zukunft","ar":"المستقبل"},{"de":"die Fotos","ar":"الصور"}],"Verben":[{"de":"blühen","ar":"يزهر","example":"Im Frühling blühen die Blumen.","exampleAr":"في الربيع تتفتح الأزهار."},{"de":"schwimmen","ar":"يسبح","example":"Im Sommer möchte Sara im Meer schwimmen.","exampleAr":"تريد سارة السباحة في البحر في الصيف."},{"de":"surfen","ar":"يركب الأمواج"},{"de":"segeln","ar":"يبحر"},{"de":"reisen","ar":"يسافر","example":"Ich würde gern nach Kanada reisen.","exampleAr":"أود السفر إلى كندا."},{"de":"besichtigen","ar":"يزور / يشاهد معلماً","example":"Wir haben das Kolosseum besichtigt.","exampleAr":"زرنا الكولوسيوم."},{"de":"Ski fahren","ar":"يتزلج","example":"Im Winter kann man Ski fahren.","exampleAr":"يمكن التزلج في الشتاء."},{"de":"snowboarden","ar":"يتزلج على اللوح","example":"Im Winter kann man snowboarden.","exampleAr":"يمكن التزلج على اللوح في الشتاء."}],"Adjektive":[]}};

function studentVocabularyReviewLessonName(lessonNo, level="A1"){
  const no=Number(lessonNo);
  if(String(level).toUpperCase()==="A2"){
    return a2CourseLessons.find(lesson=>lesson.number===no)?.title || `A2 · Lektion ${no}`;
  }
  const courseNames={
    6:"Meine Stadt",
    7:"Wie, wo und wann?",
    8:"Unterwegs",
    9:"Flohmarkt",
    10:"Reisen & Jahreszeiten"
  };
  return courseNames[no] || lessons[no-1]?.name || `Lektion ${no}`;
}
function studentVocabularyReviewIcon(word,category,fallback=""){
  if(fallback && fallback!=="📚")return fallback;
  const key=String(word||"").toLowerCase().replace(/\s*\([^)]*\)/g,"").trim();
  const icons={
    "gehen":"🚶","fahren":"🚌","kaufen":"🛒","einkaufen":"🛒","besuchen":"🏬",
    "wohnen":"🏠","finden":"📍","sprechen":"💬","lernen":"📖","spielen":"⚽",
    "arbeiten":"💼","schlafen":"🌙","essen":"🍎","trinken":"🥤","kochen":"🍳",
    "schwimmen":"🏊","lesen":"📚","suchen":"🔎","stehen":"🪑","abbiegen":"↩️",
    "bezahlen":"💳","kosten":"💶","verdienen":"💰","brauchen":"🧰","helfen":"🩺",
    "warten":"⏳","der kindergarten":"🧸","die schule":"🏫","der bahnhof":"🚉",
    "das café":"☕","das geschaft":"🛍️","das geschäft":"🛍️","das krankenhaus":"🏥",
    "die bank":"🏦","das kino":"🎬","das restaurant":"🍽️","die straße":"🛣️",
    "das büro":"🏢","die kirche":"⛪","der park":"🌳","die moschee":"🕌",
    "das wohnzimmer":"🛋️","das schlafzimmer":"🛏️","die küche":"🍳",
    "das badezimmer":"🛁","das haus":"🏠","die wohnung":"🏢","der balkon":"🌇",
    "der garten":"🌻","schön":"🌸","groß":"📏","klein":"🏡","ruhig":"😌",
    "laut":"🔊","teuer":"💰","billig":"🏷️","grün":"🌳","modern":"🏙️",
    "die mütze":"🧢","der anzug":"🤵","das hemd":"👔","die jacke":"🧥","das kleid":"👗","der rock":"👗","der mantel":"🧥","die schuhe":"👟","die krawatte":"👔","die hose":"👖","der pullover":"🧶","die stiefel":"🥾","die bluse":"👚","die jeans":"👖","der schal":"🧣","der gürtel":"🧷","die kappe":"🧢","die turnschuhe":"👟","die socken":"🧦","die handschuhe":"🧤","die sandalen":"🩴","der hut":"🎩","die shorts":"🩳",
    "die erfahrung":"🧠","das erlebnis":"✨","die familie":"👨‍👩‍👧","die freunde":"🧑‍🤝‍🧑","die eltern":"👨‍👩‍👦","die großeltern":"👵","das kind":"🧒","der vater":"👨","die mutter":"👩","der bruder":"👦","die schwester":"👧","der sohn":"👦","die tochter":"👧","der opa":"👴","die oma":"👵","der onkel":"👨","die tante":"👩","der cousin":"🧑","die cousine":"🧑",
    "das hotel":"🏨","die ferienwohnung":"🏡","der campingplatz":"🏕️","die jugendherberge":"🛏️","das hostel":"🏨","das wohnzimmer":"🛋️","das schlafzimmer":"🛏️","die küche":"🍳","das badezimmer":"🛁","der balkon":"🌇","der garten":"🌻","das bett":"🛏️","das sofa":"🛋️","der tisch":"🪑","der stuhl":"🪑","der schrank":"🚪","das regal":"📚","die lampe":"💡","der teppich":"🧶",
    "der apfel":"🍎","die banane":"🍌","die tomaten":"🍅","die kartoffeln":"🥔","die zwiebeln":"🧅","der salat":"🥗","das brot":"🍞","der käse":"🧀","die nudeln":"🍝","der reis":"🍚","die milch":"🥛","die eier":"🥚","die dose":"🥫","das glas":"🥛","die flasche":"🍼","die tüte":"🛍️","das päckchen":"📦","das kilo":"⚖️","das stück":"🧩","die speisekarte":"📋","der kellner":"🧑‍🍳","die rechnung":"🧾","das trinkgeld":"💶","der müll":"🗑️","die tonne":"🗑️","das papier":"📄","das plastik":"♻️",
    "die kunst":"🎨","das graffiti":"🎨","die streetart":"🖼️","der künstler":"🧑‍🎨","der protest":"📢","die brücke":"🌉","die polizei":"👮","das open-air-kino":"🎬","der film":"🎞️","das wetter":"🌦️","die jahreszeit":"🍂","der frühling":"🌷","der sommer":"☀️","der herbst":"🍁","der winter":"❄️","der regenschirm":"☂️","die temperatur":"🌡️","der termin":"📅","der arzttermin":"🩺","der kalender":"🗓️","der mai":"🌼","der zug":"🚆","der kuchen":"🍰",
    "das verkehrsmittel":"🚦","das fahrrad":"🚲","der bus":"🚌","die u-bahn":"🚇","der bahnhof":"🚉","die ampel":"🚦","das carsharing":"🚗","die umwelt":"🌍","die fahrt":"🛣️","der flohmarkt":"🛍️","die winterjacke":"🧥","das wörterbuch":"📖","der roman":"📕","die gitarre":"🎸","das restaurant":"🍽️","der preis":"💶","das meer":"🌊","das flugzeug":"✈️","das kolosseum":"🏛️","die zukunft":"🔮","die fotos":"📸",
    "fröhlich":"😄","traurig":"😢","wütend":"😠","überrascht":"😮","müde":"😴","schmutzig":"🧹","sauber":"✨","spannend":"🎬","romantisch":"💗","langweilig":"🥱","lustig":"😂","sonnig":"☀️","windig":"🌬️","gesund":"💚","gebraucht":"♻️","günstig":"🏷️"
  };
  if(icons[key])return icons[key];
  if(category==="Nomen")return "📚";
  if(category==="Verben")return "🏃";
  return "⭐";
}
function studentVocabularyReviewEntries(lessonNo,category,level=studentVocabularyReviewLevel){
  const courseLevel=String(level||"A1").toUpperCase()==="A2"?"A2":"A1";
  const no=Number(lessonNo)||1;
  let source=[];
  if(courseLevel==="A2"){
    source=STUDENT_A2_VOCABULARY[no]?.[category] || [];
  }else{
    const courseLesson=window.DEUTSCH_LESSON_VOCABULARY && window.DEUTSCH_LESSON_VOCABULARY[String(no)];
    const courseEntries=courseLesson && courseLesson[category];
    const fallbackEntries=lessons[no-1]?.data?.[category] || [];
    source=Array.isArray(courseEntries)&&courseEntries.length?courseEntries:fallbackEntries;
  }
  return source.map((entry,index)=>{
    let german="",meaning="",example="",speakText="",fallbackIcon="",exampleArabic="";
    if(Array.isArray(entry)){
      german=String(entry[0]||"");
      meaning=String(entry[1]||"");
      example=String(entry[2]||"");
      fallbackIcon=String(entry[3]||"");
      speakText=german;
    }else if(entry && typeof entry==="object"){
      german=String(entry.de||"");
      meaning=String(entry.ar||"");
      example=String(entry.example||"");
      speakText=String(entry.speak||entry.de||"");
      fallbackIcon=String(entry.icon||"");
      exampleArabic=String(entry.exampleAr||entry.arExample||entry.exampleTranslation||entry.example_ar||"");
    }
    const displayGerman=category==="Verben"?german.replace(/\s*\([^)]*\)\s*/g,"").trim():german;
    return {
      id:`${courseLevel}-${no}-${category}-${index}`,
      german:displayGerman || german,
      fullGerman:german,
      meaning,
      example,
      exampleArabic,
      category,
      lessonNo:no,
      level:courseLevel,
      speakText:speakText || german,
      icon:studentVocabularyReviewIcon(displayGerman||german,category,fallbackIcon)
    };
  }).filter(item=>item.german&&item.meaning);
}
function studentVocabularyWordKey(value){
  return String(value||"").toLocaleLowerCase("de").replace(/\s*\([^)]*\)/g,"").trim();
}
const A2_VOCABULARY_EXAMPLES = {"möchten":[["Ich möchte einen Pullover kaufen.","أود شراء كنزة."],["Welche Farbe möchten Sie?","أي لون تريد؟"],["Wir möchten heute bezahlen.","نود الدفع اليوم."]],"erleben":[["Ich möchte etwas Neues erleben.","أريد أن أعيش تجربة جديدة."],["Wir erleben einen schönen Tag.","نعيش يوماً جميلاً."],["Sie erlebt viel auf ihrer Reise.","تعيش تجارب كثيرة في رحلتها."]],"ausprobieren":[["Ich probiere ein neues Restaurant aus.","أجرّب مطعماً جديداً."],["Wir probieren ein neues Spiel aus.","نجرب لعبة جديدة."],["Möchtest du das auch ausprobieren?","هل تريد تجربة ذلك أيضاً؟"]],"erzählen":[["Ich erzähle von meiner Reise.","أحكي عن رحلتي."],["Sie erzählt eine interessante Geschichte.","تحكي قصة ممتعة."],["Wir erzählen unseren Freunden davon.","نحكي لأصدقائنا عن ذلك."]],"planen":[["Wir planen eine Reise.","نخطط لرحلة."],["Ich plane das Wochenende.","أخطط لعطلة نهاية الأسبوع."],["Sie plant ihren Urlaub.","تخطط لعطلتها."]],"machen":[["Wir haben viele Fotos gemacht.","التقطنا الكثير من الصور."],["Was machst du am Wochenende?","ماذا تفعل في نهاية الأسبوع؟"],["Ich mache meine Hausaufgaben.","أقوم بواجباتي."]],"anprobieren":[["Kann ich das anprobieren?","هل يمكنني تجربة هذا؟"],["Ich probiere die Jacke an.","أجرب السترة."],["Sie probiert die Schuhe an.","هي تجرب الحذاء."]],"gefallen":[["Der Pullover gefällt mir.","تعجبني الكنزة."],["Die Farbe gefällt dir.","يعجبك اللون."],["Die Schuhe gefallen mir.","تعجبني الأحذية."]],"passen":[["Die Jacke passt mir.","السترة تناسبني."],["Die Schuhe passen gut.","الحذاء مناسب."],["Die Hose passt nicht.","السروال لا يناسب."]],"nehmen":[["Ich nehme den Pullover.","سآخذ الكنزة."],["Ich nehme die blaue Jacke.","سآخذ السترة الزرقاء."],["Nimmst du auch einen Schal?","هل ستأخذ وشاحاً أيضاً؟"]],"tragen":[["Ich trage einen Pullover.","أرتدي كنزة."],["Sie trägt eine Bluse.","هي ترتدي بلوزة."],["Wir tragen warme Jacken.","نرتدي سترات دافئة."]],"übernachten":[["Ich übernachte im Hotel.","أبيت في الفندق."],["Wir übernachten in einer Ferienwohnung.","نقيم في شقة للعطلة."],["Wo übernachtest du im Urlaub?","أين تقيم في العطلة؟"]],"mieten":[["Ich miete eine Ferienwohnung.","أستأجر شقة للعطلة."],["Wir mieten ein kleines Haus.","نستأجر منزلاً صغيراً."],["Sie möchte ein Zimmer mieten.","تريد استئجار غرفة."]],"tauschen":[["Wir tauschen die Bücher.","نتبادل الكتب."],["Kann ich diese Jacke tauschen?","هل يمكنني تبديل هذه السترة؟"],["Sie tauscht ihre Wohnung.","هي تبدل شقتها."]],"bestellen":[["Ich bestelle einen Salat.","أطلب سلطة."],["Wir bestellen das Essen.","نطلب الطعام."],["Möchten Sie etwas trinken bestellen?","هل ترغب في طلب شيء للشرب؟"]],"wiegen":[["Ich wiege das Gemüse.","أزن الخضروات."],["Der Verkäufer wiegt die Äpfel.","البائع يزن التفاح."],["Wie viel wiegt die Tasche?","كم يزن هذا الكيس؟"]],"sich freuen":[["Ich freue mich auf das Wochenende.","أتطلع إلى عطلة نهاية الأسبوع."],["Wir freuen uns auf die Reise.","نتطلع إلى الرحلة."],["Sie freut sich über das Geschenk.","هي سعيدة بالهدية."]],"sich ärgern":[["Ich ärgere mich über den Lärm.","أنزعج من الضجيج."],["Er ärgert sich über den Fehler.","هو ينزعج من الخطأ."],["Wir ärgern uns nicht.","نحن لا ننزعج."]],"sich fühlen":[["Ich fühle mich müde.","أشعر بالتعب."],["Wie fühlst du dich heute?","كيف تشعر اليوم؟"],["Sie fühlt sich gut.","هي تشعر أنها بخير."]],"sich erinnern":[["Ich erinnere mich an den Film.","أتذكر الفيلم."],["Er erinnert sich an seine Reise.","يتذكر رحلته."],["Wir erinnern uns an den Tag.","نتذكر ذلك اليوم."]],"sich beschweren":[["Ich beschwere mich über den Lärm.","أشتكي من الضجيج."],["Sie beschwert sich beim Chef.","هي تشتكي لدى المدير."],["Wir beschweren uns nicht.","نحن لا نشتكي."]],"sich setzen":[["Ich setze mich auf das Sofa.","أجلس على الأريكة."],["Setz dich bitte hierhin.","اجلس هنا من فضلك."],["Wir setzen uns an den Tisch.","نجلس إلى الطاولة."]],"sich waschen":[["Ich wasche mich am Morgen.","أغتسل في الصباح."],["Das Kind wäscht sich.","الطفل يغتسل."],["Wir waschen uns die Hände.","نغسل أيدينا."]],"sich anziehen":[["Ich ziehe mich schnell an.","أرتدي ملابسي بسرعة."],["Sie zieht sich warm an.","هي ترتدي ملابس دافئة."],["Die Kinder ziehen sich an.","الأطفال يرتدون ملابسهم."]],"sich duschen":[["Ich dusche mich am Abend.","أستحم في المساء."],["Er duscht sich nach dem Sport.","يستحم بعد الرياضة."],["Wir duschen uns nach dem Schwimmen.","نستحم بعد السباحة."]],"sich interessieren":[["Ich interessiere mich für Kunst.","أهتم بالفن."],["Sie interessiert sich für Streetart.","هي تهتم بفن الشارع."],["Interessierst du dich für Filme?","هل تهتم بالأفلام؟"]],"regnen":[["Wenn es regnet, nehme ich einen Regenschirm.","عندما تمطر، آخذ معي مظلة."],["Heute regnet es stark.","تمطر بغزارة اليوم."],["Im Herbst regnet es oft.","غالباً ما تمطر في الخريف."]],"ankommen":[["Der Zug kommt um zehn Uhr an.","يصل القطار في الساعة العاشرة."],["Wir kommen am Bahnhof an.","نصل إلى محطة القطار."],["Wann kommt der Bus an?","متى تصل الحافلة؟"]],"verkaufen":[["Ich verkaufe ein Wörterbuch.","أبيع قاموساً."],["Sie verkauft ihre Winterjacke.","هي تبيع سترتها الشتوية."],["Wir verkaufen alte Bücher.","نبيع كتباً قديمة."]],"sich treffen":[["Wir treffen uns am Samstag.","نلتقي يوم السبت."],["Wann treffen wir uns?","متى نلتقي؟"],["Sie trifft ihre Freunde vor dem Bahnhof.","تلتقي أصدقاءها أمام محطة القطار."]],"blühen":[["Im Frühling blühen die Blumen.","في الربيع تتفتح الأزهار."],["Die Blumen blühen im Garten.","تتفتح الأزهار في الحديقة."],["Im April blühen viele Bäume.","في أبريل تتفتح أشجار كثيرة."]],"surfen":[["Im Sommer surfe ich im Meer.","في الصيف أركب الأمواج في البحر."],["Sie surft gern.","تحب ركوب الأمواج."],["Wir surfen am Strand.","نركب الأمواج عند الشاطئ."]],"segeln":[["Wir segeln am Wochenende.","نبحر في عطلة نهاية الأسبوع."],["Sie segelt auf dem Meer.","هي تبحر في البحر."],["Ich möchte segeln lernen.","أريد تعلم الإبحار."]],"besichtigen":[["Wir haben das Kolosseum besichtigt.","زرنا الكولوسيوم."],["Die Touristen besichtigen das Museum.","السياح يزورون المتحف."],["Morgen besichtigen wir die Stadt.","غداً سنزور المدينة."]],"ski fahren":[["Im Winter fahre ich Ski.","في الشتاء أتزلج."],["Wir fahren in den Bergen Ski.","نتزلج في الجبال."],["Kannst du Ski fahren?","هل تستطيع التزلج؟"]],"snowboarden":[["Im Winter kann man snowboarden.","يمكن التزلج على اللوح في الشتاء."],["Mein Bruder snowboardet gern.","أخي يحب التزلج على اللوح."],["Wir snowboarden in den Bergen.","نتزلج على اللوح في الجبال."]],"reisen":[["Nächstes Jahr möchte ich nach Deutschland reisen.","أريد السفر إلى ألمانيا العام القادم."],["Ich reise gern mit dem Zug.","أحب السفر بالقطار."],["Wir reisen im Sommer nach Italien.","نسافر إلى إيطاليا في الصيف."]]};
const A2_ADJECTIVE_EXAMPLES = {"fröhlich":[["Ich bin heute fröhlich.","أنا سعيد اليوم."],["Die Kinder sind fröhlich.","الأطفال سعداء."],["Sie sieht fröhlich aus.","تبدو سعيدة."]],"traurig":[["Der Film ist traurig.","الفيلم حزين."],["Er ist heute traurig.","هو حزين اليوم."],["Die Geschichte ist traurig.","القصة حزينة."]],"wütend":[["Der Mann ist wütend.","الرجل غاضب."],["Warum bist du wütend?","لماذا أنت غاضب؟"],["Sie ist nicht mehr wütend.","لم تعد غاضبة."]],"überrascht":[["Ich bin überrascht.","أنا متفاجئ."],["Sie ist sehr überrascht.","هي متفاجئة جداً."],["Wir sind über das Geschenk überrascht.","نحن متفاجئون بالهدية."]],"müde":[["Ich bin müde.","أنا متعب."],["Nach der Arbeit bin ich müde.","بعد العمل أكون متعباً."],["Das Kind ist schon müde.","الطفل متعب بالفعل."]],"schmutzig":[["Die Straße ist schmutzig.","الشارع متسخ."],["Meine Schuhe sind schmutzig.","حذائي متسخ."],["Das Fenster ist schmutzig.","النافذة متسخة."]],"sauber":[["Die Wohnung ist sauber.","الشقة نظيفة."],["Die Küche ist sauber.","المطبخ نظيف."],["Bitte halte dein Zimmer sauber.","من فضلك حافظ على غرفتك نظيفة."]],"spannend":[["Der Film ist spannend.","الفيلم مشوق."],["Das Buch ist sehr spannend.","الكتاب مشوق جداً."],["Die Geschichte ist spannend.","القصة مشوقة."]],"romantisch":[["Der Film ist romantisch.","الفيلم رومانسي."],["Das Restaurant ist romantisch.","المطعم رومانسي."],["Es ist ein romantischer Abend.","إنها أمسية رومانسية."]],"langweilig":[["Der Film ist langweilig.","الفيلم ممل."],["Die Aufgabe ist langweilig.","المهمة مملة."],["Der Unterricht ist nicht langweilig.","الدرس ليس مملاً."]],"lustig":[["Der Film ist lustig.","الفيلم مضحك."],["Das ist eine lustige Geschichte.","هذه قصة مضحكة."],["Mein Freund ist sehr lustig.","صديقي مرح جداً."]],"kalt":[["Heute ist es kalt.","الجو بارد اليوم."],["Im Winter ist es oft kalt.","غالباً ما يكون الجو بارداً في الشتاء."],["Das Wasser ist kalt.","الماء بارد."]],"warm":[["Im Sommer ist es warm.","الجو دافئ في الصيف."],["Heute ist das Wetter warm.","الطقس دافئ اليوم."],["Der Tee ist noch warm.","الشاي ما زال دافئاً."]],"sonnig":[["Heute ist es sonnig.","الجو مشمس اليوم."],["Im Sommer ist es oft sonnig.","غالباً ما يكون الجو مشمساً في الصيف."],["Morgen wird es sonnig.","سيكون الجو مشمساً غداً."]],"windig":[["Heute ist es windig.","الجو عاصف اليوم."],["Im Herbst ist es oft windig.","غالباً ما يكون الجو عاصفاً في الخريف."],["Es ist kalt und windig.","الجو بارد وعاصف."]],"gebraucht":[["Ich suche eine gebrauchte Gitarre.","أبحث عن غيتار مستعمل."],["Das Fahrrad ist gebraucht.","الدراجة مستعملة."],["Sie kauft eine gebrauchte Jacke.","تشتري سترة مستعملة."]],"günstig":[["Der Preis ist günstig.","الثمن مناسب."],["Das Angebot ist sehr günstig.","العرض مناسب جداً."],["Wir suchen eine günstige Wohnung.","نبحث عن شقة مناسبة السعر."]],"billig":[["Fahrradfahren ist billig.","ركوب الدراجة رخيص."],["Diese Tasche ist billig.","هذه الحقيبة رخيصة."],["Das Ticket ist nicht teuer, es ist billig.","التذكرة ليست غالية، بل رخيصة."]],"gesund":[["Fahrradfahren ist gesund.","ركوب الدراجة صحي."],["Obst ist gesund.","الفواكه صحية."],["Sport ist gut und gesund.","الرياضة جيدة وصحية."]],"neu":[["Ich habe ein neues Restaurant besucht.","زرت مطعماً جديداً."],["Das ist meine neue Jacke.","هذه سترتي الجديدة."],["Wir lernen ein neues Wort.","نتعلم كلمة جديدة."]],"gut":[["Fahrradfahren ist gut für die Umwelt.","ركوب الدراجة مفيد للبيئة."],["Das Wetter ist gut.","الطقس جيد."],["Die Idee ist gut.","الفكرة جيدة."]]};

function studentVocabularyWordExamples(item){
  if(!item)return [];
  const key=studentVocabularyWordKey(item.german);
  const category=item.category||"Verben";
  const meaning=item.meaning||"";
  if(category==="Verben"){
    if(key==="sprechen"){
      return [
        {de:"Ich spreche Deutsch.",ar:"أنا أتكلم الألمانية.",art:"🧑🏻‍🎓🇩🇪"},
        {de:"Er spricht mit seiner Lehrerin.",ar:"هو يتكلم مع معلمته.",art:"👨🏻‍🎓👩🏻‍🏫"},
        {de:"Wir sprechen heute über die Schule.",ar:"نحن نتكلم اليوم عن المدرسة.",art:"👨‍👩‍👧🏫"}
      ];
    }
    if(item.level==="A2" && A2_VOCABULARY_EXAMPLES[key]){
      return A2_VOCABULARY_EXAMPLES[key].map(([de,ar],index)=>({de,ar,art:["🧑🏻‍🎓","👩🏻‍🏫","👨‍👩‍👧"][index]||"🗣️"}));
    }
    const germanExamples=(verbExamples[key]||[]).slice(0,3);
    const arabicExamples={
      "heißen":["اسمي سارة.","اسمك علي.","اسمه عمر."],
      "kommen":["أنا من المغرب.","أنت من المغرب.","هو من المغرب."],
      "sein":["أنا متعب.","أنت ودود.","هو في المنزل."],
      "haben":["لدي كتاب.","لديك قلم.","لديه حقيبة."],
      "wohnen":["أسكن في الرباط.","تسكن في الرباط.","يسكن في الرباط."],
      "leben":["أعيش في المغرب.","تعيش في المغرب.","يعيش في المغرب."],
      "besuchen":["أزور عائلتي.","تزور عائلتك.","يزور عائلته."],
      "suchen":["أبحث عن شقة.","تبحث عن شقة.","يبحث عن شقة."],
      "stehen":["أقف عند محطة الحافلات.","تقف عند محطة الحافلات.","يقف عند محطة الحافلات."],
      "essen":["أحب أكل الخبز.","تحب أكل الخبز.","يحب أكل الخبز."],
      "trinken":["أشرب الماء.","تشرب الماء.","يشرب الماء."],
      "kochen":["أطبخ هذا المساء.","تطبخ هذا المساء.","يطبخ هذا المساء."],
      "arbeiten":["أعمل في شركة.","تعمل في شركة.","يعمل في شركة."],
      "lernen":["أتعلم الألمانية.","تتعلم الألمانية.","يتعلم الألمانية."],
      "schlafen":["أنام ثماني ساعات.","تنام ثماني ساعات.","ينام ثماني ساعات."],
      "spielen":["ألعب كرة القدم.","تلعب كرة القدم.","يلعب كرة القدم."],
      "schwimmen":["أسبح في المسبح.","تسبح في المسبح.","يسبح في المسبح."],
      "lesen":["أقرأ كتاباً.","تقرأ كتاباً.","يقرأ كتاباً."],
      "kaufen":["أشتري تفاحة.","تشتري تفاحة.","يشتري تفاحة."],
      "kosten":["أتقاضى عشرة يورو في الساعة.","تتقاضى عشرة يورو في الساعة.","يتقاضى عشرة يورو في الساعة."],
      "bezahlen":["أدفع الفاتورة.","تدفع الفاتورة.","يدفع الفاتورة."],
      "verdienen":["أكسب المال.","تكسب المال.","يكسب المال."],
      "fahren":["أذهب إلى العمل بالحافلة.","تذهب إلى العمل بالحافلة.","يذهب إلى العمل بالحافلة."],
      "gehen":["أذهب إلى المدرسة.","تذهب إلى المدرسة.","يذهب إلى المدرسة."],
      "abbiegen":["أنعطف هنا إلى اليسار.","تنعطف هنا إلى اليسار.","ينعطف هنا إلى اليسار."],
      "brauchen":["أحتاج إلى المساعدة.","تحتاج إلى المساعدة.","يحتاج إلى المساعدة."],
      "helfen":["أساعد أمي.","تساعد أمك.","يساعد أمه."],
      "lieben":["أحب عائلتي.","تحب عائلتك.","يحب عائلته."],
      "warten":["أنتظر الحافلة.","تنتظر الحافلة.","ينتظر الحافلة."]
    };
    if(germanExamples.length){
      const translations=arabicExamples[key]||[];
      return germanExamples.map((de,index)=>({
        de,
        ar:translations[index]||`مثال على استعمال الفعل «${meaning}».`,
        art:["🧑🏻‍🎓","👩🏻‍🏫","👨‍👩‍👧"][index]||"🗣️"
      }));
    }
    if(key==="finden"){
      return [
        {de:"Ich finde den Weg.",ar:"أجد الطريق.",art:"🧑🏻‍🎓"},
        {de:"Du findest den Bahnhof.",ar:"تجد محطة القطار.",art:"🚉"},
        {de:"Er findet die Schule.",ar:"يجد المدرسة.",art:"🏫"}
      ];
    }
    return [
      {de:item.example||`Ich möchte ${item.german}.`,ar:item.exampleArabic||`أريد أن ${meaning}.`,art:"🧑🏻‍🎓"},
      {de:`Wir können ${item.german}.`,ar:`نستطيع أن ${meaning}.`,art:"👩🏻‍🏫"},
      {de:`Kannst du ${item.german}?`,ar:`هل تستطيع أن ${meaning}؟`,art:"🗣️"}
    ];
  }

  const adjectiveArabic={
    "schön":"جميلة","klein":"صغيرة","groß":"كبيرة","gross":"كبيرة","ruhig":"هادئة",
    "laut":"صاخبة","teuer":"غالية","billig":"رخيصة","neu":"جديدة","alt":"قديمة",
    "jung":"صغيرة السن","freundlich":"ودودة","gut":"جيدة","schlecht":"سيئة",
    "modern":"عصرية","interessant":"ممتعة","langweilig":"مملة","warm":"دافئة",
    "kalt":"باردة","hell":"مضيئة","müde":"متعبة","früh":"مبكرة","spät":"متأخرة",
    "lecker":"لذيذة","aktiv":"نشيطة","nett":"لطيفة","offen":"مفتوحة"
  };
  if(category==="Adjektive"){
    if(item.level==="A2" && A2_ADJECTIVE_EXAMPLES[key]){
      return A2_ADJECTIVE_EXAMPLES[key].map(([de,ar],index)=>({de,ar,art:["🏠","🌤️","💬"][index]||"⭐"}));
    }
    const adjective=key;
    const ar=adjectiveArabic[adjective]||meaning;
    return [
      {de:`Das Zimmer ist ${item.german}.`,ar:`الغرفة ${ar}.`,art:"🏠"},
      {de:`Das Haus ist sehr ${item.german}.`,ar:`المنزل ${ar} جداً.`,art:"🏡"},
      {de:`Ich finde das sehr ${item.german}.`,ar:`أجد ذلك ${ar} جداً.`,art:"💬"}
    ];
  }

  const noun=String(item.german||"");
  const arabic=meaning||"هذه الكلمة";
  const sourceExample=item.example?{de:item.example,ar:item.exampleArabic||`المعنى: ${arabic}.`,art:"🧑🏻‍🎓"}:null;
  const generated=[
    {de:`Das Wort „${noun}“ ist wichtig.`,ar:`كلمة «${arabic}» مهمة.`,art:"📖"},
    {de:`Ich lerne das Wort „${noun}“.`,ar:`أنا أتعلم كلمة «${arabic}».`,art:"✍️"},
    {de:`Kannst du das Wort „${noun}“ sagen?`,ar:`هل يمكنك نطق كلمة «${arabic}»؟`,art:"🗣️"}
  ];
  const combined=sourceExample?[sourceExample,...generated]:generated;
  return combined.slice(0,3);
}
function studentVocabularyPracticeOptions(item){
  const pool=studentVocabularyReviewEntries(item.lessonNo||studentVocabularyReviewLesson,item.category||"Verben",item.level||studentVocabularyReviewLevel)
    .filter(entry=>entry.german!==item.german&&entry.meaning);
  const distractors=pool.slice(0,2).map(entry=>entry.meaning);
  const options=[...new Set([item.meaning,...distractors].filter(Boolean))].slice(0,3);
  while(options.length<3)options.push(["يتعلم","يسكن","يتحدث"][options.length]);
  const correctIndex=(Math.abs(String(item.german||"").split("").reduce((sum,ch)=>sum+ch.charCodeAt(0),0))%3);
  const shuffled=options.slice();
  const correct=shuffled.shift();
  shuffled.splice(correctIndex,0,correct);
  return shuffled.map((value,index)=>({value,correct:value===item.meaning}));
}
function studentVocabularyPracticeMarkup(item){
  return `<button type="button" class="student-vocab-practice-cta" data-action="student-vocab-start-practice"><span>📚</span><strong>تدرّب الآن</strong><b>▶</b></button><p class="student-vocab-practice-caption">اختر طريقة التدريب المناسبة لهذه الكلمة</p>`;
}
function studentVocabularyWordDetailMarkup(){
  const item=studentVocabularySelectedWord;
  if(!item)return `<div class="student-vocab-empty">اختَر كلمة من لائحة المفردات أولاً.</div>`;
  const examples=studentVocabularyWordExamples(item);
  const exampleCards=examples.map((example,index)=>`<article class="student-vocab-example-card">
    <div class="student-vocab-example-art" aria-hidden="true">${example.art||"🗣️"}</div>
    <div class="student-vocab-example-copy">
      <strong dir="ltr">${escapeHtml(example.de)}</strong>
      <p dir="rtl">${escapeHtml(example.ar)}</p>
    </div>
    <button type="button" class="student-vocab-example-sound" data-action="student-vocab-speak-example" data-speak="${escapeHtml(example.de)}" aria-label="استمع إلى المثال">🔊</button>
  </article>`).join("");
  return `<section class="student-vocabulary-word-detail" dir="rtl">
    <article class="student-vocab-word-hero">
      <div class="student-vocab-word-art" aria-hidden="true">${item.category==="Verben"?"💬":item.category==="Nomen"?"📚":"✨"}</div>
      <div class="student-vocab-word-main">
        <div class="student-vocab-word-german" dir="ltr">${escapeHtml(item.german)}</div>
        <div class="student-vocab-word-meaning">${escapeHtml(item.meaning)}</div>
      </div>
      <button type="button" class="student-vocab-word-sound" data-action="student-vocab-speak-word" data-speak="${escapeHtml(item.speakText||item.fullGerman||item.german)}" aria-label="استمع إلى نطق الكلمة">🔊</button>
    </article>
    <div class="student-vocab-word-meta">
      <span>📖 الدرس ${Number(item.lessonNo)||studentVocabularyReviewLesson}</span>
      <span>🏃 ${escapeHtml(item.category||"Verben")}</span>
      <span>☆ ${escapeHtml(item.level||"A1")}</span>
    </div>
    <div class="student-vocab-examples-title"><span></span><b>✨ 3 أمثلة</b><span></span></div>
    <div class="student-vocab-examples-list">${exampleCards}</div>
    ${studentVocabularyPracticeMarkup(item)}
  </section>`;
}


const studentVocabularyTrainingMethods=[
  {id:"choose",icon:"📋",title:"اختيار الجواب الصحيح",desc:"اختر الإجابة الصحيحة من بين عدة خيارات",level:"متوسط",tone:"orange",time:"3 دقائق"},
  {id:"complete",icon:"✏️",title:"أكمل الكلمة",desc:"املأ الحرف الناقص لتكمل الكلمة",level:"سهل",tone:"green",time:"2 دقائق"},
  {id:"listen",icon:"🎧",title:"استمع واختر",desc:"استمع إلى النطق واختر الكلمة الصحيحة",level:"متوسط",tone:"orange",time:"3 دقائق"},
  {id:"match",icon:"🔤",title:"طابق الكلمة مع المعنى",desc:"اختر المعنى المناسب للكلمة",level:"سهل",tone:"green",time:"2 دقائق"},
  {id:"repeat",icon:"🎙️",title:"تحدث وكرر",desc:"استمع إلى الكلمة ثم انطقها أو اكتبها",level:"متوسط",tone:"orange",time:"3 دقائق"},
  {id:"sentence",icon:"🧩",title:"رتب الجملة",desc:"رتب الكلمات لتكوين جملة صحيحة",level:"متوسط",tone:"orange",time:"4 دقائق"},
  {id:"quiz",icon:"🏆",title:"اختبار قصير",desc:"اختبار سريع لقياس فهمك للكلمة",level:"5 دقائق",tone:"purple",time:"5 دقائق"},
  {id:"review",icon:"📝",title:"مراجعة سريعة",desc:"راجع الكلمة ومعناها وتأكد من حفظها",level:"3 دقائق",tone:"purple",time:"3 دقائق"}
];
function studentVocabularyTrainingMethod(){
  return studentVocabularyTrainingMethods.find(method=>method.id===studentVocabularyTrainingMode)||null;
}
function studentVocabularyTrainingCategoryArabic(category){
  return ({Nomen:"الأسماء",Verben:"الأفعال",Adjektive:"الصفات"})[category]||"المفردات";
}
function studentVocabularyTrainingOptions(item,useGerman=false){
  const category=item.category||studentVocabularyReviewCategory||"Verben";
  const entries=studentVocabularyReviewEntries(item.lessonNo||studentVocabularyReviewLesson,category,item.level||studentVocabularyReviewLevel)
    .filter(entry=>studentVocabularyWordKey(entry.german)!==studentVocabularyWordKey(item.german)&&entry.meaning);
  const correct=useGerman?item.german:item.meaning;
  const distractors=entries.map(entry=>useGerman?entry.german:entry.meaning).filter(value=>value&&value!==correct);
  const values=[...new Set([correct,...distractors].filter(Boolean))].slice(0,4);
  const fallbacks={
    Nomen:{
      de:["die Stadt","die Straße","die Schule","das Geschäft"],
      ar:["المدينة","الشارع","المدرسة","المتجر"]
    },
    Verben:{
      de:["gehen","lernen","wohnen","sprechen"],
      ar:["يتعلم","يسكن","يتحدث","يذهب"]
    },
    Adjektive:{
      de:["schön","klein","ruhig","teuer"],
      ar:["جميل","صغير","هادئ","غالي"]
    }
  };
  const fallback=(fallbacks[category]||fallbacks.Verben)[useGerman?"de":"ar"];
  fallback.forEach(value=>{if(values.length<4&&!values.includes(value)&&value!==correct)values.push(value);});
  const seed=String(item.german||"").split("").reduce((sum,ch)=>sum+ch.charCodeAt(0),0);
  const ordered=values.filter(value=>value!==correct);
  ordered.splice(seed%values.length,0,correct);
  return ordered.map(value=>({value,correct:value===correct}));
}
function studentVocabularyTrainingSentence(item){
  const examples=studentVocabularyWordExamples(item);
  return examples[0]?.de||`Ich lerne ${item.german}.`;
}
function studentVocabularyTrainingGap(item){
  const word=String(item.german||"").trim();
  const chars=Array.from(word);
  const letterIndex=chars.findIndex((ch,index)=>/[a-zA-ZäöüÄÖÜß]/.test(ch)&&index>0&&index<chars.length-1);
  const index=letterIndex>=0?letterIndex:Math.max(0,Math.floor(chars.length/2));
  const answer=chars[index]||"";
  chars[index]="_";
  return {display:chars.join(""),answer,word};
}
function studentVocabularyTrainingComplete(){
  if(!studentVocabularyTrainingDone){studentVocabularyTrainingDone=true;studentVocabularyPracticeCompletedCount++;}
  studentVocabularyTrainingFeedback="correct";
}
function studentVocabularyTrainingHubMarkup(item){
  const categoryMode=studentVocabularyTrainingScope==="category"&&studentVocabularyTrainingPool.length>0;
  const categoryArabic=studentVocabularyTrainingCategoryArabic(studentVocabularyTrainingCategory);
  const categoryCount=studentVocabularyTrainingPool.length;
  const methods=studentVocabularyTrainingMethods.map(method=>`<button type="button" class="student-vocab-training-method" data-action="student-vocab-training-open-mode" data-mode="${method.id}">
    <span class="student-vocab-training-method-icon">${method.icon}</span>
    <span class="student-vocab-training-method-copy"><strong>${method.title}</strong><small>${method.desc}</small><em class="${method.tone}">${method.level}</em></span>
    <span class="student-vocab-training-play">▶</span>
  </button>`).join("");
  return `<section class="student-vocab-training-home" dir="rtl">
    <p class="student-vocab-training-subtitle">${categoryMode?`اختَر طريقة التدريب المناسبة لتدريب ${categoryArabic}`:"اختَر طريقة التدريب المناسبة لك"}</p>
    <div class="student-vocab-training-stats">
      <div><span>🔥</span><strong>${studentVocabularyPracticeCompletedCount} تمارين مكتملة</strong><small>في هذه الجلسة</small></div>
      <i></i>
      <div><span>☑️</span><strong>${categoryMode?`${categoryCount} كلمة` : escapeHtml(item.german)}</strong><small>${categoryMode?`من ${categoryArabic}`:"الكلمة التي تتدرّب عليها"}</small></div>
    </div>
    <article class="student-vocab-training-hero">
      <div class="student-vocab-training-hero-art">🎓<span>📚</span></div>
      <div><h2>تدرّب أكثر وتقدّم أسرع!</h2><p>${categoryMode?`تدرّب على ${categoryCount} من ${categoryArabic} في الدرس الحالي، وثبّت حفظك كلمة بكلمة.`:"مارس مهاراتك بطرق متنوعة وثبّت تعلّمك بشكل فعّال."}</p><small>${categoryMode?`تدريب على ${categoryArabic} · ${escapeHtml(studentVocabularyReviewLessonName(studentVocabularyTrainingPool[0]?.lessonNo||studentVocabularyReviewLesson,studentVocabularyTrainingPool[0]?.level||studentVocabularyReviewLevel))}`:`تدريب خاص بكلمة: <bdi dir="ltr">${escapeHtml(item.german)}</bdi>`}</small></div>
    </article>
    <div class="student-vocab-training-methods">${methods}</div>
  </section>`;
}
function studentVocabularyTrainingCategoryCompleteMarkup(){
  const categoryArabic=studentVocabularyTrainingCategoryArabic(studentVocabularyTrainingCategory);
  const count=studentVocabularyTrainingPool.length;
  return `<section class="student-vocab-training-complete" dir="rtl">
    <div class="student-vocab-training-complete-icon">🏆</div>
    <h2>أحسنت! أكملت التدريب</h2>
    <p>أنهيت التدريب على ${categoryArabic} في هذا الدرس.</p>
    <div class="student-vocab-training-complete-stats">
      <strong>${count}</strong><span>كلمة تمت مراجعتها</span>
    </div>
    <div class="student-vocab-training-complete-actions">
      <button type="button" data-action="student-vocab-training-restart-category">إعادة التدريب ↻</button>
      <button type="button" data-action="student-vocab-training-return-list">العودة إلى المفردات ←</button>
    </div>
  </section>`;
}
function studentVocabularyTrainingExerciseMarkup(item){
  const mode=studentVocabularyTrainingMethod();
  if(!mode)return studentVocabularyTrainingHubMarkup(item);
  const word=String(item.german||"");
  const examples=studentVocabularyWordExamples(item);
  const sentence=studentVocabularyTrainingSentence(item);
  const tokens=sentence.split(/\s+/).filter(Boolean);
  const shuffled=tokens.map((value,index)=>({value,index})).reverse();
  const ordered=studentVocabularyTrainingOrder.map(index=>tokens[index]);
  const feedback=studentVocabularyTrainingFeedback?`<p class="student-vocab-training-feedback ${studentVocabularyTrainingFeedback}">${studentVocabularyTrainingFeedback==="correct"?"ممتاز! إجابة صحيحة 🎉":"ليست صحيحة بعد، حاول مرة أخرى."}</p>`:"";
  let task="";
  if(mode.id==="choose"||mode.id==="match"||mode.id==="quiz"){
    const options=studentVocabularyTrainingOptions(item,false);
    const question=mode.id==="match"?"اختر المعنى الذي يطابق هذه الكلمة":mode.id==="quiz"?"اختبار سريع: ماذا تعني هذه الكلمة؟":"ما معنى الكلمة التالية؟";
    task=`<div class="student-vocab-training-question"><small>${question}</small><strong dir="ltr">${escapeHtml(word)}</strong></div><div class="student-vocab-training-options">${options.map(option=>`<button type="button" data-action="student-vocab-training-choice" data-correct="${option.correct?"1":"0"}" ${studentVocabularyTrainingDone?"disabled":""}>${escapeHtml(option.value)}</button>`).join("")}</div>`;
  }else if(mode.id==="listen"){
    const options=studentVocabularyTrainingOptions(item,true);
    task=`<div class="student-vocab-training-question"><small>استمع جيداً، ثم اختر الكلمة التي سمعتها</small><button type="button" class="student-vocab-training-listen" data-action="student-vocab-training-listen">🔊 استمع إلى النطق</button></div><div class="student-vocab-training-options">${options.map(option=>`<button type="button" data-action="student-vocab-training-choice" data-correct="${option.correct?"1":"0"}" ${studentVocabularyTrainingDone?"disabled":""} dir="ltr">${escapeHtml(option.value)}</button>`).join("")}</div>`;
  }else if(mode.id==="complete"){
    const gap=studentVocabularyTrainingGap(item);
    task=`<div class="student-vocab-training-question"><small>أكمل الحرف الناقص في الكلمة</small><strong dir="ltr" class="student-vocab-training-gap">${escapeHtml(gap.display)}</strong><p>اكتب الكلمة كاملة بالألمانية</p></div><div class="student-vocab-training-input-row"><input id="studentVocabularyTrainingInput" type="text" dir="ltr" autocomplete="off" placeholder="اكتب الكلمة هنا" value=""><button type="button" data-action="student-vocab-training-check-input">تحقق</button></div>`;
  }else if(mode.id==="repeat"){
    task=`<div class="student-vocab-training-question"><small>استمع إلى الكلمة وكرر نطقها</small><strong dir="ltr">${escapeHtml(word)}</strong><button type="button" class="student-vocab-training-listen" data-action="student-vocab-training-listen">🔊 استمع للنطق</button></div><div class="student-vocab-training-input-row"><input id="studentVocabularyTrainingInput" type="text" dir="ltr" autocomplete="off" placeholder="اكتب ما نطقت به"><button type="button" data-action="student-vocab-training-mic">🎙️</button><button type="button" data-action="student-vocab-training-check-input">تحقق</button></div><small class="student-vocab-training-hint">يمكنك استعمال الميكروفون إذا كان متاحاً في متصفحك.</small>`;
  }else if(mode.id==="sentence"){
    task=`<div class="student-vocab-training-question"><small>رتّب الكلمات لتكوين الجملة الصحيحة</small><strong dir="ltr">${escapeHtml(word)}</strong></div><div class="student-vocab-training-built" dir="ltr">${ordered.map((value,index)=>`<span>${escapeHtml(value)}</span>`).join(" ")||"اختر الكلمات بالترتيب الصحيح"}</div><div class="student-vocab-training-word-bank" dir="ltr">${shuffled.map(token=>`<button type="button" data-action="student-vocab-training-word" data-index="${token.index}" ${studentVocabularyTrainingOrder.includes(token.index)?"disabled":""}>${escapeHtml(token.value)}</button>`).join("")}</div><div class="student-vocab-training-controls"><button type="button" data-action="student-vocab-training-reset-order">إعادة الترتيب</button><button type="button" data-action="student-vocab-training-check-sentence">تحقق</button></div>`;
  }else if(mode.id==="review"){
    task=`<div class="student-vocab-training-review-card"><small>هل تتذكر معنى هذه الكلمة؟</small><strong dir="ltr">${escapeHtml(word)}</strong>${studentVocabularyTrainingRevealed?`<b>${escapeHtml(item.meaning)}</b>`:""}<button type="button" data-action="student-vocab-training-reveal">${studentVocabularyTrainingRevealed?"إخفاء المعنى":"كشف المعنى"}</button></div>`;
  }
  const categoryMode=studentVocabularyTrainingScope==="category"&&studentVocabularyTrainingPool.length>0;
  const progressLabel=categoryMode?`تدريب على ${studentVocabularyTrainingCategoryArabic(studentVocabularyTrainingCategory)}`:"تدريب على كلمة واحدة";
  const progressValue=categoryMode?`${Math.min(studentVocabularyTrainingIndex+1,studentVocabularyTrainingPool.length)} / ${studentVocabularyTrainingPool.length}`:"1 / 1";
  const nextAction=categoryMode?"student-vocab-training-next-word":"student-vocab-training-finish";
  const nextLabel=categoryMode?(studentVocabularyTrainingIndex+1<studentVocabularyTrainingPool.length?"الكلمة التالية ←":"إنهاء التدريب ✓"):"العودة إلى طرق التدريب ←";
  return `<section class="student-vocab-training-exercise" dir="rtl">
    <div class="student-vocab-training-exercise-progress"><span>${progressLabel}</span><b>${progressValue}</b></div>
    <div class="student-vocab-training-word-chip"><span>${categoryMode?`الكلمة ${studentVocabularyTrainingIndex+1} من ${studentVocabularyTrainingPool.length}`:"الكلمة المستهدفة"}</span><strong dir="ltr">${escapeHtml(word)}</strong><small>${escapeHtml(item.meaning)}</small></div>
    <article class="student-vocab-training-task-card"><div class="student-vocab-training-task-icon">${mode.icon}</div><h2>${mode.title}</h2><p>${mode.desc}</p>${task}${feedback}${studentVocabularyTrainingDone?`<button type="button" class="student-vocab-training-next" data-action="${nextAction}">${nextLabel}</button>`:""}</article>
  </section>`;
}
function studentVocabularyTrainingMarkup(){
  if(studentVocabularyTrainingScope==="category"&&studentVocabularyTrainingPool.length){
    if(studentVocabularyTrainingIndex>=studentVocabularyTrainingPool.length)return studentVocabularyTrainingCategoryCompleteMarkup();
    studentVocabularySelectedWord=studentVocabularyTrainingPool[studentVocabularyTrainingIndex]||studentVocabularySelectedWord;
  }
  const item=studentVocabularySelectedWord;
  if(!item)return `<div class="student-vocab-empty">اختَر كلمة أولاً من المفردات.</div>`;
  return studentVocabularyTrainingMode?studentVocabularyTrainingExerciseMarkup(item):studentVocabularyTrainingHubMarkup(item);
}

function studentVocabularyReviewMarkup(){
  const level=String(studentVocabularyReviewLevel||"A1").toUpperCase()==="A2"?"A2":"A1";
  const lessonCount=level==="A2"?a2CourseLessons.length:lessons.length;
  const lessonNo=Math.min(lessonCount,Math.max(1,Number(studentVocabularyReviewLesson)||(level==="A2"?1:6)));
  studentVocabularyReviewLesson=lessonNo;
  const category=["Nomen","Verben","Adjektive"].includes(studentVocabularyReviewCategory)?studentVocabularyReviewCategory:"Verben";
  const entries=studentVocabularyReviewEntries(lessonNo,category,level);
  const options=Array.from({length:lessonCount},(_,index)=>{
    const no=index+1;
    const label=studentVocabularyReviewLessonName(no,level);
    return `<option value="${no}" ${no===lessonNo?"selected":""}>${level} · L${no} ${escapeHtml(label)}</option>`;
  }).join("");
  const categoryButtons=[
    {id:"Nomen",label:"Nomen",icon:"♙"},
    {id:"Verben",label:"Verben",icon:"🏃"},
    {id:"Adjektive",label:"Adjektiv",icon:"☆"}
  ].map(item=>`<button type="button" class="student-vocab-category ${category===item.id?"active":""}" data-action="student-vocab-category" data-category="${item.id}" aria-pressed="${category===item.id}">
    <span>${item.icon}</span><strong>${item.label}</strong>
  </button>`).join("");
  const rows=entries.map(item=>{
    const searchText=`${item.german} ${item.fullGerman} ${item.meaning}`.toLocaleLowerCase();
    return `<button type="button" class="student-vocab-row" data-action="student-vocab-open-word"
      data-word="${escapeHtml(item.german)}" data-full-word="${escapeHtml(item.fullGerman)}"
      data-meaning="${escapeHtml(item.meaning)}" data-example="${escapeHtml(item.example)}"
      data-example-ar="${escapeHtml(item.exampleArabic||"")}" data-category="${escapeHtml(category)}"
      data-icon="${escapeHtml(item.icon)}" data-lesson="${lessonNo}" data-level="${level}"
      data-speak="${escapeHtml(item.speakText)}" data-search="${escapeHtml(searchText)}">
      <span class="student-vocab-row-icon" aria-hidden="true">${item.icon}</span>
      <span class="student-vocab-row-german" dir="ltr">${escapeHtml(item.german)}</span>
      <span class="student-vocab-row-meaning" dir="rtl">${escapeHtml(item.meaning)}</span>
      <span class="student-vocab-row-arrow" aria-hidden="true">›</span>
    </button>`;
  }).join("");
  return `<section class="student-vocabulary-review" dir="rtl" data-course-level="${level}">
    <header class="student-vocab-heading">
      <div class="student-vocab-book"><span>Aa</span><b>📖</b></div>
      <span class="student-vocab-heading-divider"></span>
      <div class="student-vocab-heading-copy"><h2>المفردات</h2><p>راجع الكلمات التي تعلمتها · ${level}</p></div>
    </header>
    <label class="student-vocab-search">
      <span aria-hidden="true">⌕</span>
      <input id="studentVocabularySearch" type="search" placeholder="ابحث عن كلمة ..." autocomplete="off" aria-label="ابحث عن كلمة">
    </label>
    <div class="student-vocab-lesson-filter">
      <span class="student-vocab-filter-icon" aria-hidden="true">▽</span>
      <label for="studentVocabularyLessonFilter">اختَر الدرس</label>
      <select id="studentVocabularyLessonFilter" aria-label="اختَر الدرس" data-level="${level}">${options}</select>
      <span class="student-vocab-funnel" aria-hidden="true">⚲</span>
    </div>
    <nav class="student-vocab-categories" aria-label="تصنيف المفردات">${categoryButtons}</nav>
    <button type="button" class="student-vocab-category-training" data-action="student-vocab-start-category-practice" data-category="${category}" data-lesson="${lessonNo}" data-level="${level}" ${entries.length?"":"disabled"}>
      <span class="student-vocab-category-training-icon">🎓</span>
      <span class="student-vocab-category-training-copy"><strong>تدرّب على ${studentVocabularyTrainingCategoryArabic(category)}</strong><small>اختبر نفسك في ${entries.length} ${entries.length===1?"كلمة":"كلمة من هذا الدرس"}</small></span>
      <span class="student-vocab-category-training-arrow">←</span>
    </button>
    <div class="student-vocab-list" id="studentVocabularyList">
      ${rows || `<div class="student-vocab-empty">ما كايناش كلمات فهاد التصنيف فهاد الدرس.</div>`}
    </div>
    <div class="student-vocab-search-empty" id="studentVocabularySearchEmpty" hidden>ما لقيناش كلمات مطابقة للبحث.</div>
  </section>`;
}


const STUDENT_SKILL_EXTRA_DIALOGUES = {
  6: {
    title:"Meine Stadt, meine Wohnung",
    intro:"تعرّف على أماكن المدينة ووصف المنزل والشقة.",
    lines:[
      ["Lina","Guten Morgen, Omar! Wo wohnst du?","صباح الخير عمر! فين ساكن؟"],
      ["Omar","Ich wohne in einer Wohnung im Zentrum.","ساكن في شقة في وسط المدينة."],
      ["Lina","Gibt es einen Park in deiner Nähe?","واش كاينة شي حديقة قريبة منك؟"],
      ["Omar","Ja, der Park ist neben dem Bahnhof.","نعم، الحديقة بجانب محطة القطار."],
      ["Lina","Wo kaufst du ein?","فين كتقضي أغراضك؟"],
      ["Omar","Ich gehe zum Supermarkt und zum Geschäft.","كنمشي للسوبرماركت وللمتجر."],
      ["Lina","Ist deine Wohnung groß?","واش الشقة ديالك كبيرة؟"],
      ["Omar","Nein, sie ist klein, aber sehr schön.","لا، صغيرة ولكن زوينة بزاف."],
      ["Lina","Wie viele Zimmer hat sie?","شحال فيها من غرفة؟"],
      ["Omar","Sie hat drei Zimmer, eine Küche und ein Bad.","فيها ثلاثة ديال الغرف ومطبخ وحمام."]
    ]
  },
  7: {
    title:"Wie, wo und wann?",
    intro:"تحدّث عن الطقس والفصول والشهور والوقت.",
    lines:[
      ["Mira","Wie ist das Wetter heute?","كيف داير الجو اليوم؟"],
      ["Sami","Es ist sonnig und warm.","الجو مشمس ودافئ."],
      ["Mira","In welcher Jahreszeit sind wir?","فأي فصل حنا دابا؟"],
      ["Sami","Wir sind im Frühling.","حنا في فصل الربيع."],
      ["Mira","Wann beginnt der Sommer?","فوقاش كيبدا الصيف؟"],
      ["Sami","Der Sommer beginnt im Juni.","الصيف كيبدا في يونيو."],
      ["Mira","Regnet es morgen?","واش غادي تشتي غدا؟"],
      ["Sami","Nein, morgen bleibt es trocken.","لا، غدا ما غاديش تشتي."],
      ["Mira","Was machst du im Winter?","شنو كتدير في الشتاء؟"],
      ["Sami","Ich trinke Tee und bleibe zu Hause.","كنشرب أتاي وكنبقى في الدار."]
    ]
  },
  8: {
    title:"Unterwegs",
    intro:"تدرّب على وسائل النقل والسؤال عن الطريق والتنقل.",
    lines:[
      ["Nora","Wie kommst du zur Schule?","كيفاش كتمشي للمدرسة؟"],
      ["Adam","Ich fahre mit dem Bus.","كنمشي بالطوبيس."],
      ["Nora","Nimmst du manchmal das Fahrrad?","واش كتركب البيكالة أحياناً؟"],
      ["Adam","Ja, wenn das Wetter schön ist.","نعم، ملي كيكون الجو زوين."],
      ["Nora","Wo ist die Haltestelle?","فين كاينة محطة الحافلة؟"],
      ["Adam","Sie ist neben dem Bahnhof.","كاينة بجانب محطة القطار."],
      ["Nora","Wie lange dauert die Fahrt?","شحال كتدوم الرحلة؟"],
      ["Adam","Ungefähr zwanzig Minuten.","تقريباً عشرين دقيقة."],
      ["Nora","Fährst du am Wochenende nach Hamburg?","واش غادي لهامبورغ في نهاية الأسبوع؟"],
      ["Adam","Ja, ich fahre mit dem Zug.","نعم، غادي بالقطار."]
    ]
  },
  9: {
    title:"Unter Freunden – Der Flohmarkt",
    intro:"تدرّب على الشراء والبيع والسؤال عن الأثمنة في سوق المستعمل.",
    lines:[
      ["Emma","Gehst du am Samstag zum Flohmarkt?","واش غادي لسوق المستعمل نهار السبت؟"],
      ["Lina","Ja, ich möchte eine Tasche kaufen.","نعم، بغيت نشري شنطة."],
      ["Emma","Wie viel kostet die Tasche?","بشحال هاد الشنطة؟"],
      ["Lina","Sie kostet zehn Euro.","ثمنها عشرة أورو."],
      ["Emma","Ist der Preis fest?","واش الثمن ثابت؟"],
      ["Lina","Nein, wir können handeln.","لا، نقدروا نتفاوضوا على الثمن."],
      ["Emma","Möchtest du auch Bücher kaufen?","واش بغيتي حتى تشري الكتب؟"],
      ["Lina","Ja, ich suche ein interessantes Buch.","نعم، كنقلب على كتاب ممتع."],
      ["Emma","Dann sehen wir uns um zehn Uhr.","إوا نتلاقاو مع العشرة."],
      ["Lina","Super, bis Samstag!","زوين، حتى للسبت!"]
    ]
  },
  10: {
    title:"Reisen und Jahreszeiten",
    intro:"تحدّث عن السفر والعطلة والفصول والرحلات.",
    lines:[
      ["Sara","Wohin möchtest du im Urlaub fahren?","فين بغيتي تمشي في العطلة؟"],
      ["Max","Ich möchte nach Österreich reisen.","بغيت نسافر للنمسا."],
      ["Sara","Was machst du dort im Winter?","شنو كتدير تما في الشتاء؟"],
      ["Max","Ich fahre Ski und trinke heißen Tee.","كنزلق بالتزلج وكنشرب أتاي سخون."],
      ["Sara","Und wohin fährst du im Sommer?","وفين كتمشي في الصيف؟"],
      ["Max","Ich fahre gern ans Meer.","كنحب نمشي للبحر."],
      ["Sara","Was nimmst du mit?","شنو غادي تاخد معاك؟"],
      ["Max","Ich nehme warme Kleidung und meinen Koffer.","غادي ناخد حوايج دافيين والفاليزة ديالي."],
      ["Sara","War deine letzte Reise schön?","واش كانت الرحلة الأخيرة ديالك زوينة؟"],
      ["Max","Ja, ich habe viele neue Orte gesehen.","نعم، شفت بزاف ديال الأماكن الجديدة."]
    ]
  }
};

function studentSkillLessonDialogue(lessonNo){
  const no=Math.max(1,Math.min(lessons.length,Number(lessonNo)||6));
  if(STUDENT_SKILL_EXTRA_DIALOGUES[no])return STUDENT_SKILL_EXTRA_DIALOGUES[no];
  const source=dialogues[no-1];
  if(source && Array.isArray(source.lines))return source;
  return {title:studentVocabularyReviewLessonName(no),intro:"تدرّب على جمل الدرس.",lines:[]};
}
function studentSkillLessonLines(lessonNo){
  const dialogue=studentSkillLessonDialogue(lessonNo);
  return (dialogue.lines||[]).filter(line=>Array.isArray(line)&&line[1]&&line[2]).map((line,index)=>({
    speaker:String(line[0]||""),
    german:String(line[1]||""),
    arabic:String(line[2]||""),
    index
  }));
}
function studentSkillNormalizeSentence(value){
  return String(value||"").toLocaleLowerCase("de").normalize("NFC")
    .replace(/[.,!?;:،؛؟…"'“”„]/g,"")
    .replace(/\s+/g," ").trim();
}
function studentSkillPracticeLimit(lessonNo){
  return Math.min(5,studentSkillLessonLines(lessonNo).length);
}
function studentSkillListeningQuestion(lessonNo,index){
  const lines=studentSkillLessonLines(lessonNo);
  if(!lines.length)return null;
  const targetIndex=(index*2+Math.max(0,Number(lessonNo)||1))%lines.length;
  const indexes=[targetIndex];
  for(let offset=1;indexes.length<Math.min(4,lines.length);offset++){
    const candidate=(targetIndex+offset*2+1)%lines.length;
    if(!indexes.includes(candidate))indexes.push(candidate);
  }
  const shift=(index+Number(lessonNo))%indexes.length;
  const rotated=indexes.slice(shift).concat(indexes.slice(0,shift));
  const options=rotated.map(lineIndex=>({label:lines[lineIndex].arabic,correct:lineIndex===targetIndex}));
  return {line:lines[targetIndex],options,correctIndex:options.findIndex(option=>option.correct)};
}
function studentSkillSentenceItems(lessonNo){
  const lines=studentSkillLessonLines(lessonNo);
  return lines.filter(item=>{
    const count=item.german.trim().split(/\s+/).length;
    return count>=3&&count<=11;
  }).slice(0,8);
}
function studentSkillShuffledTokens(sentence,index,lessonNo){
  const tokens=String(sentence||"").trim().split(/\s+/).map((text,tokenIndex)=>({text,tokenIndex}));
  let seed=((Number(lessonNo)||1)*7919+(Number(index)||0)*104729+17)>>>0;
  const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
  for(let i=tokens.length-1;i>0;i--){
    const j=Math.floor(random()*(i+1));
    [tokens[i],tokens[j]]=[tokens[j],tokens[i]];
  }
  return tokens;
}
function studentSkillResetPractice(){
  studentSkillListeningIndex=0;
  studentSkillListeningChoice=-1;
  studentSkillListeningChecked=false;
  studentSkillListeningScore=0;
  studentSkillWritingIndex=0;
  studentSkillWritingInput="";
  studentSkillWritingChecked=false;
  studentSkillWritingScore=0;
  studentSkillSpeakingIndex=0;
  studentSkillSentenceIndex=0;
  studentSkillSentenceOrder=[];
  studentSkillSentenceChecked=false;
  studentSkillSentenceScore=0;
}
function studentSkillCompleteMarkup(skillId,count,score=null){
  const skill=STUDENT_RESULT_SKILLS.find(item=>item.id===skillId);
  return `<section class="student-skill-practice-complete" dir="rtl">
    <div class="student-skill-practice-complete-icon">🏆</div>
    <h2>أحسنت! أكملت التدريب</h2>
    <p>أنهيت تدريب ${escapeHtml(skill?.label||"المهارة")} في ${escapeHtml(studentVocabularyReviewLessonName(studentSkillLearningLesson))}.</p>
    <div class="student-skill-practice-complete-stats">
      <div><b>${count}</b><span>تمارين مكتملة</span></div>
      ${score===null?"":`<div><b>${score}/${count}</b><span>إجابات صحيحة</span></div>`}
    </div>
    <div class="student-skill-practice-complete-actions">
      <button type="button" data-action="student-skill-restart">إعادة التدريب ↻</button>
      <button type="button" data-action="student-skill-back-content">العودة إلى محتوى الدرس ←</button>
    </div>
  </section>`;
}
function studentSkillPracticeMarkup(skillId,lessonNo){
  const lines=studentSkillLessonLines(lessonNo);
  const total=studentSkillPracticeLimit(lessonNo);
  if(skillId==="listening"){
    if(studentSkillListeningIndex>=total)return studentSkillCompleteMarkup(skillId,total,studentSkillListeningScore);
    const question=studentSkillListeningQuestion(lessonNo,studentSkillListeningIndex);
    const options=question.options.map((option,index)=>`<button type="button" class="student-skill-option ${studentSkillListeningChoice===index?"selected":""} ${studentSkillListeningChecked&&option.correct?"correct":""} ${studentSkillListeningChecked&&studentSkillListeningChoice===index&&!option.correct?"wrong":""}" data-action="student-skill-listening-option" data-option="${index}" ${studentSkillListeningChecked?"disabled":""}>${escapeHtml(option.label)}</button>`).join("");
    return `<section class="student-skill-practice-card" dir="rtl">
      <div class="student-skill-practice-progress"><span>سؤال الاستماع ${studentSkillListeningIndex+1} من ${total}</span><b>${Math.round((studentSkillListeningIndex/total)*100)}%</b></div>
      <div class="student-skill-practice-track"><i style="width:${Math.round((studentSkillListeningIndex/total)*100)}%"></i></div>
      <div class="student-skill-audio-prompt"><span>🎧</span><div><strong>استمع إلى الجملة الألمانية</strong><small>يمكنك إعادة تشغيلها أكثر من مرة.</small></div><button type="button" data-action="student-skill-listening-play" aria-label="استمع إلى الجملة">🔊</button></div>
      <button type="button" class="student-skill-play-sentence" data-action="student-skill-listening-play" data-text="${escapeHtml(question.line.german)}">▶ استمع للجملة</button>
      <h3>اختَر المعنى الصحيح للجملة:</h3>
      <div class="student-skill-options">${options}</div>
      ${studentSkillListeningChecked?`<div class="student-skill-feedback ${studentSkillListeningChoice===question.correctIndex?"correct":"wrong"}">${studentSkillListeningChoice===question.correctIndex?"إجابة صحيحة، أحسنت! ✓":`ليس هذا هو المعنى الصحيح. المعنى هو: ${escapeHtml(question.line.arabic)}`}</div>
      <button type="button" class="student-skill-next" data-action="student-skill-listening-next">${studentSkillListeningIndex+1<total?"السؤال التالي ←":"عرض النتيجة ✓"}</button>`:`<button type="button" class="student-skill-check" data-action="student-skill-listening-check" ${studentSkillListeningChoice<0?"disabled":""}>تحقق من الإجابة</button>`}
    </section>`;
  }
  if(skillId==="writing"){
    if(studentSkillWritingIndex>=total)return studentSkillCompleteMarkup(skillId,total,studentSkillWritingScore);
    const item=lines[studentSkillWritingIndex];
    return `<section class="student-skill-practice-card" dir="rtl">
      <div class="student-skill-practice-progress"><span>تمرين الكتابة ${studentSkillWritingIndex+1} من ${total}</span><b>${Math.round((studentSkillWritingIndex/total)*100)}%</b></div>
      <div class="student-skill-practice-track"><i style="width:${Math.round((studentSkillWritingIndex/total)*100)}%"></i></div>
      <div class="student-skill-writing-prompt"><span>✍️</span><div><strong>اكتب الجملة التي تسمعها</strong><small>${escapeHtml(item.arabic)}</small></div></div>
      <button type="button" class="student-skill-play-sentence" data-action="student-skill-writing-play">🔊 استمع إلى الجملة الألمانية</button>
      <textarea id="studentSkillWritingInput" class="student-skill-writing-input" rows="3" dir="ltr" placeholder="Schreiben Sie den Satz auf …" ${studentSkillWritingChecked?"disabled":""}>${escapeHtml(studentSkillWritingInput)}</textarea>
      ${studentSkillWritingChecked?`<div class="student-skill-feedback ${studentSkillNormalizeSentence(studentSkillWritingInput)===studentSkillNormalizeSentence(item.german)?"correct":"wrong"}">${studentSkillNormalizeSentence(studentSkillWritingInput)===studentSkillNormalizeSentence(item.german)?"ممتاز! كتبت الجملة بشكل صحيح. ✓":`راجع الكتابة، الجملة الصحيحة هي: <bdi dir="ltr">${escapeHtml(item.german)}</bdi>`}</div>
      <button type="button" class="student-skill-next" data-action="student-skill-writing-next">${studentSkillWritingIndex+1<total?"الجملة التالية ←":"عرض النتيجة ✓"}</button>`:`<button type="button" class="student-skill-check" data-action="student-skill-writing-check" ${studentSkillWritingInput.trim()?"":"disabled"}>تحقق من الكتابة</button>`}
    </section>`;
  }
  if(skillId==="speaking"){
    if(studentSkillSpeakingIndex>=lines.length)return studentSkillCompleteMarkup(skillId,lines.length);
    const item=lines[studentSkillSpeakingIndex];
    return `<section class="student-skill-practice-card student-skill-speaking-practice" dir="rtl">
      <div class="student-skill-practice-progress"><span>تدرّب على الحوار ${studentSkillSpeakingIndex+1} من ${lines.length}</span><b>${Math.round((studentSkillSpeakingIndex/lines.length)*100)}%</b></div>
      <div class="student-skill-practice-track"><i style="width:${Math.round((studentSkillSpeakingIndex/lines.length)*100)}%"></i></div>
      <div class="student-skill-dialogue-turn"><small>دور ${escapeHtml(item.speaker)}</small><h2 dir="ltr">${escapeHtml(item.german)}</h2><p>${escapeHtml(item.arabic)}</p><button type="button" data-action="student-skill-speaking-play">🔊 استمع ثم كرّر بصوتك</button></div>
      <p class="student-skill-speaking-tip">استمع للجملة، ثم حاول تكرارها بصوت واضح قبل الانتقال للجملة التالية.</p>
      <button type="button" class="student-skill-next" data-action="student-skill-speaking-next">${studentSkillSpeakingIndex+1<lines.length?"تدرّبت عليها — التالي ←":"أنهيت الحوار ✓"}</button>
    </section>`;
  }
  if(skillId==="sentences"){
    const items=studentSkillSentenceItems(lessonNo);
    if(studentSkillSentenceIndex>=items.length)return studentSkillCompleteMarkup(skillId,items.length,studentSkillSentenceScore);
    const item=items[studentSkillSentenceIndex];
    const tokens=studentSkillShuffledTokens(item.german,studentSkillSentenceIndex,lessonNo);
    const selectedSet=new Set(studentSkillSentenceOrder);
    const selectedMarkup=studentSkillSentenceOrder.map(tokenIndex=>{
      const token=tokens.find(entry=>entry.tokenIndex===tokenIndex);
      return token?`<button type="button" class="student-skill-word-chip chosen" data-action="student-skill-sentence-pick" data-token="${tokenIndex}">${escapeHtml(token.text)} ×</button>`:"";
    }).join("");
    const availableMarkup=tokens.filter(token=>!selectedSet.has(token.tokenIndex)).map(token=>`<button type="button" class="student-skill-word-chip" data-action="student-skill-sentence-pick" data-token="${token.tokenIndex}">${escapeHtml(token.text)}</button>`).join("");
    const isCorrect=studentSkillNormalizeSentence(studentSkillSentenceOrder.map(tokenIndex=>tokens.find(entry=>entry.tokenIndex===tokenIndex)?.text||"").join(" "))===studentSkillNormalizeSentence(item.german);
    return `<section class="student-skill-practice-card" dir="rtl">
      <div class="student-skill-practice-progress"><span>ترتيب الجمل ${studentSkillSentenceIndex+1} من ${items.length}</span><b>${Math.round((studentSkillSentenceIndex/items.length)*100)}%</b></div>
      <div class="student-skill-practice-track"><i style="width:${Math.round((studentSkillSentenceIndex/items.length)*100)}%"></i></div>
      <div class="student-skill-writing-prompt"><span>🧩</span><div><strong>رتّب الكلمات لتكوين جملة صحيحة</strong><small>${escapeHtml(item.arabic)}</small></div></div>
      <div class="student-skill-sentence-answer" dir="ltr">${selectedMarkup||`<span>اضغط على الكلمات بالترتيب الصحيح</span>`}</div>
      <div class="student-skill-word-bank" dir="ltr">${availableMarkup}</div>
      ${studentSkillSentenceChecked?`<div class="student-skill-feedback ${isCorrect?"correct":"wrong"}">${isCorrect?"أحسنت! ترتيب الجملة صحيح. ✓":`الترتيب الصحيح: <bdi dir="ltr">${escapeHtml(item.german)}</bdi>`}</div>
      <button type="button" class="student-skill-next" data-action="student-skill-sentence-next">${studentSkillSentenceIndex+1<items.length?"الجملة التالية ←":"عرض النتيجة ✓"}</button>`:`<div class="student-skill-practice-actions"><button type="button" class="student-skill-clear" data-action="student-skill-sentence-clear">مسح الترتيب</button><button type="button" class="student-skill-check" data-action="student-skill-sentence-check" ${studentSkillSentenceOrder.length===tokens.length?"":"disabled"}>تحقق من الجملة</button></div>`}
    </section>`;
  }
  return `<div class="student-skill-empty">لا توجد تمارين لهذا الاختيار.</div>`;
}
function studentSkillLessonLibraryMarkup(skillId){
  const lessonNo=Math.max(1,Math.min(lessons.length,Number(studentSkillLearningLesson)||6));
  const skill=STUDENT_RESULT_SKILLS.find(item=>item.id===skillId)||STUDENT_RESULT_SKILLS[1];
  const dialogue=studentSkillLessonDialogue(lessonNo);
  const lines=studentSkillLessonLines(lessonNo);
  const options=lessons.map((lesson,index)=>{
    const no=index+1;
    return `<option value="${no}" ${no===lessonNo?"selected":""}>L${no} ${escapeHtml(studentVocabularyReviewLessonName(no))}</option>`;
  }).join("");
  const lessonFilter=`<div class="student-vocab-lesson-filter student-skill-lesson-filter">
    <span class="student-vocab-filter-icon" aria-hidden="true">▽</span>
    <label for="studentSkillLessonFilter">اختَر الدرس</label>
    <select id="studentSkillLessonFilter" aria-label="اختَر الدرس">${options}</select>
    <span class="student-vocab-funnel" aria-hidden="true">⚲</span>
  </div>`;
  const icon={listening:"🎧",writing:"✍️",speaking:"💬",sentences:"🧩"}[skillId]||"📘";
  if(studentSkillLearningMode==="practice"){
    return `<section class="student-skill-learning-page" dir="rtl">
      <header class="student-skill-learning-heading"><span>${icon}</span><div><small>${escapeHtml(studentVocabularyReviewLessonName(lessonNo))}</small><h2>${escapeHtml(skill.label)}</h2><p>تدريب خاص بالدرس المختار</p></div></header>
      ${lessonFilter}
      <button type="button" class="student-skill-back-content" data-action="student-skill-back-content">← العودة إلى محتوى الدرس</button>
      ${studentSkillPracticeMarkup(skillId,lessonNo)}
    </section>`;
  }
  let content="";
  if(skillId==="speaking"){
    content=`<div class="student-skill-material-head"><div><h3>الحوار الخاص بالدرس</h3><p>${escapeHtml(dialogue.intro||"استمع إلى الحوار وتدرّب على نطقه.")}</p></div><button type="button" data-action="student-skill-play-dialogue" data-text="${escapeHtml(lines.map(line=>line.german).join(" "))}">▶ استمع للحوار كاملاً</button></div>
      <div class="student-skill-dialogue-list">${lines.map((line,index)=>`<article class="student-skill-dialogue-line"><div class="student-skill-dialogue-speaker">${escapeHtml(line.speaker||`Sprecher ${index+1}`)}</div><div class="student-skill-dialogue-copy"><strong dir="ltr">${escapeHtml(line.german)}</strong><small>${escapeHtml(line.arabic)}</small></div><button type="button" data-action="student-skill-speak-line" data-text="${escapeHtml(line.german)}" aria-label="استمع إلى الجملة">🔊</button></article>`).join("")}</div>`;
  }else if(skillId==="listening"){
    content=`<div class="student-skill-material-head"><div><h3>استمع إلى جمل الدرس</h3><p>شغّل الجمل الألمانية وحاول فهم معناها قبل إظهار الترجمة.</p></div><span>🎧</span></div>
      <div class="student-skill-material-list">${lines.slice(0,6).map((line,index)=>`<article class="student-skill-material-line"><span>${index+1}</span><div><strong dir="ltr">${escapeHtml(line.german)}</strong><small>${escapeHtml(line.arabic)}</small></div><button type="button" data-action="student-skill-speak-line" data-text="${escapeHtml(line.german)}">🔊</button></article>`).join("")}</div>`;
  }else if(skillId==="writing"){
    content=`<div class="student-skill-material-head"><div><h3>جمل للكتابة والإملاء</h3><p>استمع إلى الجملة وحاول كتابتها بنفسك في التدريب.</p></div><span>✍️</span></div>
      <div class="student-skill-material-list">${lines.slice(0,6).map((line,index)=>`<article class="student-skill-material-line"><span>${index+1}</span><div><strong>${escapeHtml(line.arabic)}</strong><small dir="ltr">${escapeHtml(line.german)}</small></div><button type="button" data-action="student-skill-speak-line" data-text="${escapeHtml(line.german)}">🔊</button></article>`).join("")}</div>`;
  }else{
    const sentenceItems=studentSkillSentenceItems(lessonNo);
    content=`<div class="student-skill-material-head"><div><h3>جمل الدرس</h3><p>راجع الجمل ومعانيها، ثم جرّب ترتيب الكلمات بنفسك.</p></div><span>🧩</span></div>
      <div class="student-skill-material-list">${sentenceItems.slice(0,6).map((line,index)=>`<article class="student-skill-material-line"><span>${index+1}</span><div><strong dir="ltr">${escapeHtml(line.german)}</strong><small>${escapeHtml(line.arabic)}</small></div><button type="button" data-action="student-skill-speak-line" data-text="${escapeHtml(line.german)}">🔊</button></article>`).join("")}</div>`;
  }
  const practiceLabel={listening:"ابدأ تدريب الاستماع",writing:"ابدأ تدريب الكتابة",speaking:"ابدأ التدريب على الحوار",sentences:"ابدأ تدريب تركيب الجمل"}[skillId]||"ابدأ التدريب";
  const practiceDesc={listening:"استمع إلى الجملة واختر معناها الصحيح.",writing:"استمع إلى الجملة ثم اكتبها بالألمانية.",speaking:"استمع إلى كل دور وكرّر الجمل بصوتك.",sentences:"رتّب الكلمات حتى تحصل على جملة صحيحة."}[skillId]||"تدرّب على محتوى الدرس.";
  return `<section class="student-skill-learning-page" dir="rtl">
    <header class="student-skill-learning-heading"><span>${icon}</span><div><small>${escapeHtml(studentVocabularyReviewLessonName(lessonNo))}</small><h2>${escapeHtml(skill.label)}</h2><p>${escapeHtml(skill.description)}</p></div></header>
    ${lessonFilter}
    <article class="student-skill-learning-hero"><div><strong>${escapeHtml(dialogue.title||studentVocabularyReviewLessonName(lessonNo))}</strong><p>${escapeHtml(practiceDesc)}</p></div><span>📚</span></article>
    ${content}
    <button type="button" class="student-skill-start-practice" data-action="student-skill-start-practice" data-skill="${skillId}"><span>▶</span>${practiceLabel}<b>←</b></button>
  </section>`;
}

function studentSkillAnalyticsMarkup(skillReport,activeSkill="vocab",showDetail=false){
  const current=(skillReport||[]).find(skill=>skill.id===activeSkill) || (skillReport||[])[0];
  if(!current)return `<section class="admin-panel"><p class="admin-analytics-muted">لا توجد بيانات للعرض.</p></section>`;
  const tabs=(skillReport||[]).map(skill=>`<button type="button" class="student-skill-tab ${skill.id===current.id?"active":""}" data-action="student-results-open-skill" data-skill="${skill.id}">
    <span>${skill.icon}</span><strong>${escapeHtml(skill.label)}</strong><small>${skill.average===null?"—":skill.average+"%"}</small>
  </button>`).join("");
  if(!showDetail){
    return `<section class="student-skills-analysis student-skills-picker">
      <nav class="student-skill-tabs" aria-label="المهارات">${tabs}</nav>
    </section>`;
  }
  const groups=[
    {key:"mastered",label:"متقن",description:"نتائج 80% أو أكثر",tone:"mastered",icon:"✓",items:current.items.filter(item=>item.status==="mastered")},
    {key:"medium",label:"متوسط",description:"نتائج من 60% إلى 79%",tone:"medium",icon:"◐",items:current.items.filter(item=>item.status==="medium")},
    {key:"weak",label:"ضعيف",description:"نتائج أقل من 60%",tone:"weak",icon:"!",items:current.items.filter(item=>item.status==="weak")}
  ];
  const groupMarkup=groups.map(group=>`<section class="student-skill-group ${group.tone}">
    <header><span class="student-skill-group-icon">${group.icon}</span><div><strong>${group.label}</strong><small>${group.description}</small></div><b>${group.items.length}</b></header>
    ${group.items.length?`<div class="student-skill-items">${group.items.map(item=>`<article class="student-skill-item ${group.tone}">
      <div class="student-skill-item-copy"><strong>${escapeHtml(item.label)}</strong>${item.meaning?`<small>${escapeHtml(item.meaning)}</small>`:""}<small class="student-skill-item-meta">${item.lessonIndex>=0?`L${item.lessonIndex+1} · `:""}${item.attempts} محاولة · ${item.points}/${item.max}</small></div>
      <div class="student-skill-item-score"><b>${item.percent}%</b><span>${escapeHtml(studentSkillStatusLabel(item.percent))}</span></div>
    </article>`).join("")}</div>`:`<p class="student-skill-group-empty">ما كاين حتى عنصر فهاد التصنيف حالياً.</p>`}
  </section>`).join("");
  const note=current.id==="speaking"?`<p class="student-skill-note">المؤشر الحالي كيقيس تمارين الحوار المسجّلة. تقييم النطق الصوتي الحقيقي يحتاج تمريناً يسجّل صوت المتعلم ويصححه.</p>`:
    current.id==="listening"?`<p class="student-skill-note">كيتم الحساب غير من تمارين الاستماع اللي عندها نتيجة محفوظة، وما كيتحسبش مجرد تشغيل الصوت.</p>`:
    current.id==="vocab"?`<p class="student-skill-note">الكلمات اللي ضغطتي عليها داخل الدروس كتظهر في «كلمات تعلمتها». النسبة والتصنيف كيتحسبو غير للكلمات اللي تقيّمات باختبار.</p>`:
    `<p class="student-skill-note">الحساب مبني على نتائج التمارين المصححة والمحاولات المحفوظة، وما كيتحسب حتى عنصر ما تمش تقييمه.</p>`;
  const learnedMarkup=current.id==="vocab"&&current.learnedItems?.length?`<section class="student-skill-group learned">
    <header><span class="student-skill-group-icon">📖</span><div><strong>الكلمات اللي تعلمتيها داخل الدروس</strong><small>تسجلات ملي ضغطتي على الكلمة وشفتِ معناها أو نطقها</small></div><b>${current.learnedItems.length}</b></header>
    <div class="student-skill-items">${current.learnedItems.map(item=>`<article class="student-skill-item learned">
      <div class="student-skill-item-copy"><strong dir="auto">${escapeHtml(item.label)}</strong>${item.meaning?`<small dir="auto">${escapeHtml(item.meaning)}</small>`:""}<small class="student-skill-item-meta">${item.level&&item.level!=="A1"?`${escapeHtml(item.level)} · `:""}${item.lessonIndex>=0?`L${item.lessonIndex+1} · `:""}${item.learnedAt?`آخر تفاعل ${escapeHtml(new Date(item.learnedAt).toLocaleDateString("ar"))}`:"تم التعرف عليها داخل الدرس"}</small></div>
      <div class="student-skill-item-score"><b>✓</b><span>تعلمتها</span></div>
    </article>`).join("")}</div>
  </section>`:"";
  const hasLearned=current.id==="vocab"&&current.learnedItems?.length>0;
  const empty=current.assessed===0&&!hasLearned?`<div class="student-skill-empty"><span>${current.icon}</span><strong>مازال ما كايناش نتائج مسجلة فهاد المهارة</strong><p>منين تكمل تمرين مصحح مرتبط بهاد المهارة، غادي يبان التحليل هنا.</p></div>`:"";
  const learningMarkup=current.id!=="vocab"?studentSkillLessonLibraryMarkup(current.id):"";
  return `<section class="student-skills-analysis student-skill-detail-screen">
    <section class="student-skill-detail-card">
      <div class="student-skill-detail-head"><div><small>${escapeHtml(current.de)}</small><h2>${escapeHtml(current.label)}</h2><p>${escapeHtml(current.description)}</p></div><div class="student-skill-main-score"><b>${current.average===null?"—":current.average+"%"}</b><small>${escapeHtml(studentSkillStatusLabel(current.average))}</small></div></div>
      ${current.assessed?`<div class="student-skill-progress-track"><i style="width:${current.average}%"></i></div>
      <div class="student-skill-counts"><div><b>${current.mastered}</b><span>متقن</span></div><div><b>${current.medium}</b><span>متوسط</span></div><div><b>${current.weak}</b><span>ضعيف</span></div></div>`:""}
      ${note}
    </section>
    ${learningMarkup}
    ${empty || `${current.assessed?`<div class="student-skill-groups">${groupMarkup}</div>`:""}${learnedMarkup}`}
  </section>`;
}

function studentResultsTrendPoints(results){
  return (results||[])
    .filter(result=>adminResultType(result)==="test" || adminResultPercent(result)!==null)
    .slice()
    .sort((a,b)=>String(a.updatedAt||a.createdAt||"").localeCompare(String(b.updatedAt||b.createdAt||"")))
    .map((result,index)=>{
      const lessonIndex=adminResultLessonIndex(result);
      const percent=adminResultPercent(result);
      const score=Number(result.points)||0;
      const max=Number(result.maxPoints)||0;
      return {
        index,
        lessonIndex,
        label:lessonIndex>=0?`L${lessonIndex+1}`:`T${index+1}`,
        title:String(result.title||result.moduleId||`اختبار ${index+1}`),
        percent:percent===null?0:percent,
        scoreLabel:max>0?`${score}/${max}`:"—",
        dateLabel:result.updatedAt?new Date(result.updatedAt).toLocaleDateString("de-DE"):"",
        hasScore:percent!==null
      };
    });
}

function studentResultsLineChartMarkup(results){
  const points=studentResultsTrendPoints(results);
  if(!points.length){
    return `<section class="admin-panel student-results-line-panel" id="resultsExamReadiness">
      <div class="admin-section-head"><div><p class="admin-eyebrow">تطور النتائج</p><h2>منحنى تقدّمك</h2></div></div>
      <div class="student-results-empty-chart">ابدأ أول اختبار، وغادي يبان هنا منحنى التقدم ديالك حسب المحاولات والنتائج.</div>
    </section>`;
  }
  const width=860, height=260, left=54, right=24, top=18, bottom=42;
  const innerW=width-left-right, innerH=height-top-bottom;
  const stepX=points.length===1 ? 0 : innerW/(points.length-1);
  const pointData=points.map((point,index)=>{
    const x=points.length===1 ? left+innerW/2 : left+(stepX*index);
    const y=top + (innerH - ((Math.max(0,Math.min(100,point.percent))/100)*innerH));
    return {...point,x,y};
  });
  const polyline=pointData.map(point=>`${point.x},${point.y}`).join(" ");
  const area=`${left},${top+innerH} ` + pointData.map(point=>`${point.x},${point.y}`).join(" ") + ` ${left+innerW},${top+innerH}`;
  const ticks=[0,25,50,75,100].map(value=>{
    const y=top + (innerH - (value/100)*innerH);
    return `<g><line x1="${left}" y1="${y}" x2="${left+innerW}" y2="${y}" class="student-line-grid"></line><text x="${left-10}" y="${y+4}" text-anchor="end" class="student-line-axis">${value}%</text></g>`;
  }).join("");
  const labels=pointData.map(point=>`<text x="${point.x}" y="${height-14}" text-anchor="middle" class="student-line-axis">${escapeHtml(point.label)}</text>`).join("");
  const circles=pointData.map(point=>`
    <g class="student-line-point-group">
      <circle cx="${point.x}" cy="${point.y}" r="5.5" class="student-line-point${point.hasScore?"":" empty"}"></circle>
      <text x="${point.x}" y="${point.y-13}" text-anchor="middle" class="student-line-value">${point.hasScore?point.percent+"%":"—"}</text>
      <title>${escapeHtml(point.title)} · ${point.hasScore?point.percent+"% · "+point.scoreLabel:"بدون نقطة"}${point.dateLabel?" · "+point.dateLabel:""}</title>
    </g>`).join("");
  const latest=pointData[pointData.length-1];
  return `<section class="admin-panel student-results-line-panel" id="resultsExamReadiness">
    <div class="admin-section-head">
      <div><p class="admin-eyebrow">تطور النتائج</p><h2>منحنى تقدّمك</h2></div>
      <span class="admin-count">${pointData.length} اختبار</span>
    </div>
    <div class="student-line-meta">
      <div><small>آخر نتيجة</small><strong>${latest.hasScore?latest.percent+"%":"—"}</strong></div>
      <div><small>آخر اختبار</small><strong>${escapeHtml(latest.label)}</strong></div>
      <div><small>آخر تحديث</small><strong>${escapeHtml(latest.dateLabel||"—")}</strong></div>
    </div>
    <div class="student-line-wrap">
      <svg viewBox="0 0 ${width} ${height}" class="student-line-chart" role="img" aria-label="Student progress line chart">
        ${ticks}
        <path d="M ${area}" class="student-line-area"></path>
        <polyline points="${polyline}" class="student-line-path"></polyline>
        ${circles}
        ${labels}
      </svg>
    </div>
  </section>`;
}

function studentProgressLessonFilterMarkup(selectedLesson="all"){
  const selected=String(selectedLesson||"all");
  const options=[`<option value="all" ${selected==="all"?"selected":""}>جميع الدروس</option>`,...lessons.map((lesson,index)=>
    `<option value="${index+1}" ${selected===String(index+1)?"selected":""}>L${index+1} · ${escapeHtml(lesson.name)}</option>`
  )].join("");
  return `<section class="student-progress-filter-card" aria-label="Fortschritt nach Lektionen filtern">
    <div class="student-progress-filter-copy">
      <span class="student-progress-filter-icon">☷</span>
      <span><small>تصفية</small><strong>الدروس</strong></span>
    </div>
    <label class="student-progress-filter-select">
      <select id="studentProgressLessonFilter" aria-label="Lektionen">${options}</select>
    </label>
  </section>`;
}

function studentResultsLessonSummaryMarkup(byLesson, selectedLesson="all"){
  const allRows=lessons.map((lesson,index)=>{
    const saved=(byLesson||[]).find(item=>Number(item.index)===index);
    return saved || {index,lesson,average:null,completedExercises:0,totalExercises:0,status:"لم تبدأ بعد"};
  });
  const selected=String(selectedLesson||"all");
  const shownRows=selected==="all" ? allRows : allRows.filter(item=>item.index===Number(selected)-1);
  const evaluated=shownRows.filter(item=>item.average!==null).length;
  // The overview follows the active lesson filter: all lessons for Alle,
  // or only the selected lesson when a specific Lektion is chosen.
  const completedTotal=shownRows.reduce((sum,item)=>sum+(Number(item.completedExercises)||0),0);
  const exerciseTotal=shownRows.reduce((sum,item)=>sum+(Number(item.totalExercises)||0),0);
  const completion=exerciseTotal>0?Math.max(0,Math.min(100,Math.round(completedTotal/exerciseTotal*100))):0;
  return `<section class="admin-panel student-lesson-progress-panel" id="resultsReview">
    <div class="admin-section-head"><div><p class="admin-eyebrow">Lektionen</p><h2>إنجاز التمارين حسب الدروس</h2></div></div>
    <div class="student-lesson-overall">
      <div class="student-lesson-overall-head"><div><strong>إنجاز التمارين</strong><small>${completedTotal} من ${exerciseTotal} تمريناً مكتملًا · ${evaluated} دروس لديها نتائج محفوظة</small></div><b>${completion}%</b></div>
      <div class="student-lesson-overall-track"><i style="width:${completion}%"></i></div>
    </div>
    <div class="student-lesson-bars">${shownRows.map(item=>{
      const hasScore=item.average!==null;
      const average=hasScore?Math.max(0,Math.min(100,Number(item.average)||0)):0;
      const done=Math.max(0,Number(item.completedExercises)||0);
      const total=Math.max(0,Number(item.totalExercises)||0);
      const hasExerciseProgress=total>0;
      const progress=hasExerciseProgress?Math.max(0,Math.min(100,Math.round(done/total*100))):0;
      const state=progress>=80?"strong":progress>=60?"good":"weak";
      const hasActivity=hasScore||hasExerciseProgress;
      const meta=hasExerciseProgress
        ? `<b>الإنجاز ${progress}% · ${Math.min(done,total)}/${total} تمارين</b>${hasScore?`<small>النتيجة ${average}%</small>`:""}`
        : hasScore?`<small>نتيجة الاختبار ${average}% · تفاصيل الإنجاز غير متوفرة</small>`:"لم تبدأ بعد";
      return `<div class="student-lesson-bar-row ${hasActivity?"has-result":"no-result"}">
        <div class="student-lesson-bar-head"><strong>L${item.index+1} · ${escapeHtml(item.lesson.name)}</strong><span class="student-lesson-bar-meta">${meta}</span></div>
        <div class="student-lesson-bar-track"><i class="${hasExerciseProgress?state:"empty"}" style="width:${hasExerciseProgress?Math.max(0,progress):0}%"></i></div>
      </div>`;
    }).join("")}</div>
  </section>`;
}
function studentResultsHistoryMarkup(results){
  if(!results.length){
    return `<section class="admin-panel" id="resultsHistory">
      <div class="admin-section-head"><div><p class="admin-eyebrow">سجل النتائج</p><h2>سجل الاختبارات</h2></div></div>
      <p class="admin-empty-note">لم يتم حفظ أي نتائج بعد. ابدأ أول Test لعرض التقدم والتحليل هنا.</p>
    </section>`;
  }
  return `<section class="admin-panel" id="resultsHistory">
    <div class="admin-section-head"><div><p class="admin-eyebrow">سجل النتائج</p><h2>سجل الاختبارات</h2></div><span class="admin-count">${results.length} اختبار</span></div>
    <div class="student-history-list">${results.map(result=>{
      const lessonIndex=adminResultLessonIndex(result);
      const type=adminResultType(result);
      const pct=adminResultPercent(result);
      const max=Number(result.maxPoints)||0;
      const points=Number(result.points)||0;
      return `<article class="student-history-card">
        <div class="student-history-top">
          <div>
            <small>${type==="test"?"اختبار":type==="kurs"?"درس":type==="podcast"?"استماع":"محتوى"}${lessonIndex>=0?` · الدرس ${lessonIndex+1}`:""}</small>
            <h3>${escapeHtml(result.title||result.moduleId||"نتيجة")}</h3>
          </div>
          <span class="student-history-badge ${pct===null?"neutral":pct>=80?"strong":pct>=60?"good":"weak"}">${pct===null?"—":pct+"%"}</span>
        </div>
        <div class="student-history-meta">
          <div><small>النقاط</small><strong>${max>0?`${points} / ${max}`:"—"}</strong></div>
          <div><small>تاريخ الحفظ</small><strong>${result.updatedAt?new Date(result.updatedAt).toLocaleDateString("ar-MA"):"—"}</strong></div>
        </div>
      </article>`;
    }).join("")}</div>
  </section>`;
}

function studentResultsAchievementsMarkup(totalTests, averageValue, completedLessons, completedExercises){
  const achievements = [
    {icon:"🏁",title:"أول اختبار",description:"أكمل أول اختبار واحفظ نتيجتك",earned:totalTests>=1,progress:Math.min(1,totalTests),goal:1,tone:"blue"},
    {icon:"🎯",title:"نتيجة قوية",description:"حقق متوسطاً لا يقل عن 80%",earned:averageValue!==null && averageValue>=80,progress:averageValue===null?0:Math.min(80,averageValue),goal:80,tone:"gold"},
    {icon:"📚",title:"متعلم مستمر",description:"احصل على نتائج في خمسة دروس",earned:completedLessons>=5,progress:Math.min(5,completedLessons),goal:5,tone:"green"},
    {icon:"🧠",title:"تدريب نشيط",description:"أكمل عشرين تمريناً",earned:completedExercises>=20,progress:Math.min(20,completedExercises),goal:20,tone:"purple"}
  ];
  return `<section class="admin-panel progress-achievements-panel" id="resultsAchievements">
    <div class="admin-section-head"><div><p class="admin-eyebrow">إنجازاتك</p><h2>الأوسمة والإنجازات</h2></div><span class="admin-count">${achievements.filter(item=>item.earned).length}/${achievements.length}</span></div>
    <div class="progress-achievements-grid">${achievements.map(item=>`<article class="progress-achievement-card ${item.earned?"earned":"locked"}">
      <span class="progress-achievement-icon ${item.tone}">${item.icon}</span>
      <div><strong>${item.title}</strong><small>${item.description}</small></div>
      <b>${item.earned?"مكتمل":`${item.progress}/${item.goal}`}</b>
    </article>`).join("")}</div>
  </section>`;
}

function renderStudentResults(){
  if(!currentUser || currentUser.role!=="student"){page="login";return renderLogin();}
  const selectedLesson=String(studentProgressLessonFilter||"all");
  const resultMap=readStudentResults(currentUser.id);
  const allResults=Object.values(resultMap||{})
    .filter(item=>item && typeof item==="object")
    .sort((a,b)=>String(b.updatedAt||b.createdAt||"").localeCompare(String(a.updatedAt||a.createdAt||"")));
  const results=selectedLesson==="all"
    ? allResults
    : allResults.filter(result=>adminResultLessonIndex(result)===Number(selectedLesson)-1);
  const testResults=results.filter(result=>adminResultType(result)==="test");
  const skillReport=studentBuildSkillReport(results);
  const report=adminStudentAnalytics(currentUser,{lesson:selectedLesson,type:"test"});
  const timeReport=adminStudentAnalytics(currentUser,{lesson:selectedLesson,type:"all"});
  const averageValue=report && report.average!==null ? Number(report.average) : null;
  const average=averageValue===null ? "—" : `${averageValue}%`;
  const totalTests=testResults.length;
  const selectedLessonKey=String(Number(selectedLesson));
  const selectedLessonSeconds=selectedLesson==="all"
    ? Number(timeReport && timeReport.totalSeconds)||0
    : (Number(timeReport && timeReport.filteredSeconds)||Number(timeReport && timeReport.lessonSeconds && timeReport.lessonSeconds[selectedLessonKey])||0);
  const totalTime=formatDuration(selectedLessonSeconds);
  const lessonRows=report && report.byLesson ? report.byLesson : [];
  const completedLessons=lessonRows.filter(item=>item.average!==null).length;
  const completedExercises=lessonRows.reduce((sum,item)=>sum+(Number(item.completedExercises)||0),0);
  const totalExercises=lessonRows.reduce((sum,item)=>sum+(Number(item.totalExercises)||0),0);
  // Completion and accuracy are different metrics: only completedExercises/totalExercises
  // determines progress; average/percent is the score on the exercises already attempted.
  const exerciseProgressPercent=totalExercises>0
    ? Math.max(0,Math.min(100,Math.round(completedExercises/totalExercises*100)))
    : 0;
  const remainingExercises=Math.max(0,totalExercises-completedExercises);
  const weakCount=(report && report.weakExercises ? report.weakExercises.length : 0);
  const levelLabel=String(selectedLevel||"A1.1").split(".")[0] || "A1";
  const selectedLessonName=selectedLesson==="all"?"":(lessons[Number(selectedLesson)-1]?.name||"");
  const progressTitle=selectedLesson==="all"
    ? "إنجاز التمارين في جميع الدروس"
    : `إنجاز التمارين في ${escapeHtml(selectedLessonName)}`;
  const lessonCountLabel=selectedLesson==="all"
    ? `${completedLessons} دروس لديها نتائج`
    : (completedLessons?"لديك نتيجة محفوظة لهذا الدرس":"لا توجد نتائج محفوظة لهذا الدرس");
  const weakExerciseMarkup=report && report.weakExercises && report.weakExercises.length
    ? `<ul class="student-results-bullet-list">${report.weakExercises.slice(0,8).map(item=>`<li><strong>${escapeHtml(item.title)}</strong> · ${escapeHtml(item.key)} — ${item.percent}%</li>`).join("")}</ul>`
    : `<p class="admin-analytics-muted">لا توجد تمارين ضعيفة أقل من 60% في النتائج المسجلة حالياً.</p>`;
  const weakLessonMarkup=report && report.byLesson && report.byLesson.some(item=>item.average!==null && item.average<60)
    ? `<ul class="student-results-bullet-list">${report.byLesson.filter(item=>item.average!==null && item.average<60).map(item=>`<li>L${item.index+1} — ${item.average}%</li>`).join("")}</ul>`
    : `<p class="admin-analytics-muted">ما كاين حتى درس بمتوسط أقل من 60% حالياً.</p>`;
  const stageDetail=report && report.stageReports && report.stageReports.length
    ? `<div id="resultsStages"><section class="admin-panel">
        <div class="admin-section-head"><div><p class="admin-eyebrow">المراحل والتمارين</p><h2>تحليل المراحل والتمارين</h2></div></div>
        <div class="student-results-stage-wrap">${adminStageBreakdownMarkup(report.stageReports)}</div>
      </section></div>`
    : "";
  const heatmap=report && report.stageReports && report.stageReports.length
    ? `<div id="resultsExercises"><section class="admin-panel">
        <div class="admin-section-head"><div><p class="admin-eyebrow">أداء التمارين</p><h2>تفاصيل التمارين</h2></div></div>
        ${adminExerciseHeatmapMarkup(report.stageReports,false)}
      </section></div>`
    : "";
  const shortcuts=[
    {icon:"◴",tone:"green",label:"استعدادك للامتحان",target:"resultsExamReadiness"},
    {icon:"◎",tone:"pink",label:"نقاط الضعف",target:"resultsWeakPoints"},
    {icon:"📊",tone:"blue",label:"تحليل المهارات",target:"resultsSkills"},
    {icon:"↻",tone:"violet",label:"مراجعة الكلمات",action:"student-nav",tab:"learn"},
    {icon:"☆",tone:"orange",label:"المحفوظات",action:"student-nav",tab:"learn"},
    {icon:"♙",tone:"purple",label:"شهاداتي",target:"resultsAchievements"},
    {icon:"▤",tone:"blue",label:"سجل الامتحانات",target:"resultsHistory"},
    {icon:"🏆",tone:"coral",label:"الأوسمة",target:"resultsAchievements"},
    {icon:"◉",tone:"green",label:"النقاط",target:"resultsStats"},
    {icon:"♧",tone:"cyan",label:"الأصدقاء",action:"student-nav",tab:"community"},
    {icon:"◎",tone:"indigo",label:"الترتيب العالمي",action:"student-nav",tab:"community"},
    {icon:"✎",tone:"pink",label:"الميزات",action:"student-nav",tab:"learn"},
    {icon:"♧",tone:"teal",label:"مع الآخرين",action:"student-nav",tab:"sessions"},
    {icon:"▥",tone:"blue",label:"حالة الدروس",target:"resultsLessonStatus"},
    {icon:"✓",tone:"green",label:"إنجاز التمارين",target:"resultsCourseProgress"},
    {icon:"▦",tone:"cyan",label:"تفاصيل التمارين",target:"resultsExercises"},
    {icon:"◫",tone:"indigo",label:"تحليل المراحل",target:"resultsStages"}
  ];
  const shortcutMarkup=shortcuts.map(item=>{
    const attrs=item.action==="student-nav"
      ? `data-action="student-nav" data-tab="${item.tab}"`
      : `data-action="student-results-jump" data-target="${item.target}"`;
    return `<button type="button" class="progress-shortcut" ${attrs}>
      <span class="progress-shortcut-icon ${item.tone}">${item.icon}</span>
      <strong>${item.label}</strong>
    </button>`;
  }).join("");
  // Dashboard values are derived from this student's saved course, result and activity records.
  const activityByDay=cloudActivity?.[currentUser.id]||{};
  const todayDate=new Date();
  todayDate.setHours(12,0,0,0);
  const todayKey=localDateKey(todayDate);
  const todayActivity=activityByDay[todayKey]||{};
  const dailyGoalMinutes=Math.max(0,Number(studentRequiredMinutes(currentUser))||0);
  const todayMinutes=Math.floor((Number(todayActivity.totalSeconds)||0)/60);
  const dailyGoalPercent=dailyGoalMinutes>0?Math.min(100,Math.round(todayMinutes/dailyGoalMinutes*100)):0;

  const weekActivity=Array.from({length:7},(_,offset)=>{
    const date=new Date(todayDate);
    date.setDate(todayDate.getDate()-(6-offset));
    const key=localDateKey(date);
    const activity=activityByDay[key]||{};
    return {key,label:date.toLocaleDateString("ar-MA",{weekday:"short"}),minutes:Math.round((Number(activity.totalSeconds)||0)/60)};
  });
  const weekMinutes=weekActivity.reduce((sum,item)=>sum+item.minutes,0);
  const averageDailyMinutes=Math.round(weekMinutes/7);
  const maxWeekMinutes=Math.max(1,...weekActivity.map(item=>item.minutes));
  const weeklyBars=weekActivity.map(item=>{
    const height=item.minutes>0?Math.max(7,Math.round(item.minutes/maxWeekMinutes*100)):3;
    return `<div class="results-weekly-day" aria-label="${escapeHtml(item.label)}: ${item.minutes} دقيقة">
      <strong class="results-weekly-value">${item.minutes} د</strong>
      <div class="results-weekly-bar-track"><i style="height:${height}%"></i></div>
      <small>${escapeHtml(item.label)}</small>
    </div>`;
  }).join("");

  const hasActivityOn=date=>{
    const day=activityByDay[localDateKey(date)]||{};
    return (Number(day.totalSeconds)||0)>0 || (Number(day.loginCount)||0)>0;
  };
  let streakDate=new Date(todayDate);
  if(!hasActivityOn(streakDate))streakDate.setDate(streakDate.getDate()-1);
  let streakDays=0;
  for(let i=0;i<366 && hasActivityOn(streakDate);i++){
    streakDays++;
    streakDate.setDate(streakDate.getDate()-1);
  }

  const savedCourseRecords=courseProgressRecords();
  const studentLessonStatusStates=buildProgressLessonStatusRecords(savedCourseRecords,allResults,[String(selectedLevel||"A1").split(".")[0]]);
  const masteredLessons=studentLessonStatusStates.filter(item=>item.completed).length;
  const inProgressLessons=studentLessonStatusStates.filter(item=>item.inProgress).length;
  const notStartedLessons=studentLessonStatusStates.filter(item=>item.notStarted).length;
  const startedLessons=masteredLessons+inProgressLessons;
  const totalStatusLessons=studentLessonStatusStates.length;
  const lessonProgressPercent=totalStatusLessons?Math.round(startedLessons/totalStatusLessons*100):0;
  const hasCourseProgress=studentLessonStatusStates.some(item=>item.completed||item.inProgress);
  const courseAverageProgress=totalStatusLessons?Math.round(studentLessonStatusStates.reduce((sum,item)=>sum+(Number(item.progress)||0),0)/totalStatusLessons):0;
  const overallProgressPercent=Math.max(0,Math.min(100,hasCourseProgress?courseAverageProgress:exerciseProgressPercent));
  const vocabularySkill=skillReport.find(skill=>skill.id==="vocab")||{learnedItems:[],items:[]};
  const savedWordsCount=(vocabularySkill.learnedItems||[]).length;
  const reviewWordsCount=(vocabularySkill.items||[]).filter(item=>item.status==="medium"||item.status==="weak").length;
  const completedTasksCount=Math.max(0,Number(completedExercises)||0);
  // The dashboard follows the supplied visual reference while keeping all displayed values live.
  const mainProgressDashboard=`
    <div class="student-results-dashboard">
      <section class="results-summary-card" aria-label="إجمالي التقدم والمستوى الحالي">
        <div class="results-summary-overall">
          <small>إجمالي التقدم</small>
          <strong>${overallProgressPercent}%</strong>
          <div class="results-summary-track"><i style="width:${overallProgressPercent}%"></i></div>
        </div>
        <div class="results-summary-level">
          <span class="results-summary-trophy" aria-hidden="true">🏆</span>
          <div><small>المستوى الحالي</small><strong>${escapeHtml(levelLabel)}</strong></div>
        </div>
      </section>

      <section class="results-dashboard-card results-learning-stats">
        <div class="results-section-heading"><h2>إحصائيات التعلم</h2><span aria-hidden="true">▥</span></div>
        <div class="results-stat-grid">
          <button type="button" class="results-stat-card words" data-action="student-results-open-skill-picker">
            <span class="results-stat-icon">▰</span><strong>${savedWordsCount}</strong><small>مفردة محفوظة</small>
          </button>
          <button type="button" class="results-stat-card lessons" data-action="student-results-open-lesson-status" data-status="completed">
            <span class="results-stat-icon">📖</span><strong>${masteredLessons}</strong><small>دروس متقنة</small>
          </button>
          <div class="results-stat-card streak">
            <span class="results-stat-icon">🔥</span><strong>${streakDays}</strong><small>يوماً متتالياً</small>
          </div>
          <button type="button" class="results-stat-card tasks" data-action="student-results-jump" data-target="resultsCourseProgress">
            <span class="results-stat-icon">✓</span><strong>${completedTasksCount}</strong><small>مهمة مكتملة</small>
          </button>
        </div>
      </section>

      <div class="results-dashboard-two-col">
        <section class="results-dashboard-card results-daily-goal">
          <div class="results-section-heading"><h2>هدف اليوم</h2><span aria-hidden="true">🎯</span></div>
          <strong class="results-goal-title">${dailyGoalMinutes>0?`هدفك اليومي ${dailyGoalMinutes} دقيقة`:"لم يتم تحديد هدف يومي"}</strong>
          <div class="results-goal-track"><i style="width:${dailyGoalPercent}%"></i></div>
          <div class="results-goal-meta"><strong>${dailyGoalMinutes>0?`${todayMinutes} / ${dailyGoalMinutes} دقيقة`:`${todayMinutes} دقيقة تعلم اليوم`}</strong><span>${dailyGoalMinutes>0?dailyGoalPercent+"%":""}</span></div>
        </section>

        <section class="results-dashboard-card results-lesson-status">
          <div class="results-section-heading"><h2>حالة الدروس</h2><span aria-hidden="true">📚</span></div>
          <div class="results-lesson-status-body">
            <button type="button" class="results-lesson-ring results-lesson-ring-button" data-action="student-results-open-lesson-status" data-status="all" aria-label="عرض جميع الدروس" style="--lesson-progress:${lessonProgressPercent}%">
              <span><strong>${startedLessons}/${totalStatusLessons}</strong><small>دروس</small></span>
            </button>
            <div class="results-lesson-legend">
              <button type="button" data-action="student-results-open-lesson-status" data-status="completed"><i class="mastered"></i><span>${masteredLessons} دروس متقنة</span></button>
              <button type="button" data-action="student-results-open-lesson-status" data-status="inProgress"><i class="in-progress"></i><span>${inProgressLessons} دروس قيد التعلم</span></button>
              <button type="button" data-action="student-results-open-lesson-status" data-status="notStarted"><i class="not-started"></i><span>${notStartedLessons} دروس لم تبدأ بعد</span></button>
            </div>
          </div>
          <button type="button" class="results-inline-link" data-action="student-results-open-lesson-status" data-status="all">تفاصيل تقدم الدروس <span>←</span></button>
        </section>
      </div>

      <section class="results-dashboard-card results-vocabulary-card">
        <div class="results-section-heading"><h2>المفردات</h2><span aria-hidden="true">📖</span></div>
        <div class="results-vocabulary-content">
          <div class="results-vocabulary-illustration" aria-hidden="true"><span>🇩🇪</span><b>Wort</b></div>
          <button type="button" class="results-vocabulary-stat saved" data-action="student-results-open-skill" data-skill="vocab">
            <strong>${savedWordsCount}<i>✓</i></strong><small>مفردة محفوظة</small>
          </button>
          <button type="button" class="results-vocabulary-stat review" data-action="student-results-open-skill" data-skill="vocab">
            <strong>${reviewWordsCount}<i>↻</i></strong><small>مفردة تحتاج إلى مراجعة</small>
          </button>
        </div>
      </section>

      <section class="results-dashboard-card results-weekly-card">
        <div class="results-weekly-heading">
          <div class="results-section-heading"><h2>متوسط مدة التعلّم اليومية</h2><span aria-hidden="true">◷</span></div>
          <span class="results-weekly-average">◷ ${averageDailyMinutes} دقيقة</span>
        </div>
        <div class="results-weekly-chart">${weeklyBars}</div>
      </section>

      <div class="results-dashboard-footer-actions">
        <button type="button" data-action="student-results-jump" data-target="resultsSkills">تحليل المهارات</button>
        <button type="button" data-action="student-results-jump" data-target="resultsHistory">سجل النتائج</button>
      </div>
    </div>`;
  const courseProgressMarkup=`
    <section class="progress-course-card" id="resultsCourseProgress">
      <div class="progress-course-top">
        <div class="progress-level-badge">${escapeHtml(levelLabel)}</div>
        <div class="progress-course-copy"><small>مستواك الحالي</small><h2>${progressTitle}</h2><span>${completedExercises} من ${totalExercises} تمريناً مكتملًا · ${lessonCountLabel}</span></div>
        <div class="progress-course-count"><strong>${completedExercises}/${totalExercises}</strong><small>تمارين</small></div>
      </div>
      <div class="progress-course-track"><i style="width:${exerciseProgressPercent}%"></i></div>
      <div class="progress-course-foot"><span>${exerciseProgressPercent}% من التمارين مكتملة</span><strong>${remainingExercises} تمريناً متبقياً</strong></div>
    </section>`;
  const lessonProgressMarkup=studentResultsLessonSummaryMarkup(lessonRows,selectedLesson);
  const weakPointsMarkup=`
    <section class="admin-panel" id="resultsWeakPoints">
      <div class="admin-section-head"><div><p class="admin-eyebrow">تحليل الأداء</p><h2>نقاط تحتاج مراجعة</h2></div><span class="admin-count">${weakCount}</span></div>
      <div class="student-results-analysis-block">
        <h4>دروس تحتاج مراجعة</h4>
        ${weakLessonMarkup}
        <h4>تمارين ضعيفة</h4>
        ${weakExerciseMarkup}
      </div>
    </section>`;
  const resultToolViews={
    resultsExamReadiness:studentResultsLineChartMarkup(testResults),
    resultsWeakPoints:weakPointsMarkup,
    resultsAchievements:studentResultsAchievementsMarkup(totalTests,averageValue,completedLessons,completedExercises),
    resultsHistory:studentResultsHistoryMarkup(testResults),
    resultsStats:`<section class="progress-metrics-grid progress-metrics-grid-fullscreen" id="resultsStats">
      <article class="progress-metric-card"><span>🔥</span><strong>${totalTests}</strong><small>اختبارات محفوظة</small></article>
      <article class="progress-metric-card"><span>🎯</span><strong>${average}</strong><small>متوسط النتائج</small></article>
      <article class="progress-metric-card"><span>📚</span><strong>${completedLessons}/${selectedLesson==="all"?lessons.length:1}</strong><small>دروس تم تقييمها</small></article>
      <article class="progress-metric-card"><span>⏱</span><strong>${escapeHtml(totalTime)}</strong><small>وقت التعلم</small></article>
    </section>`,
    resultsStages:stageDetail || `<section class="admin-panel"><div class="admin-section-head"><div><p class="admin-eyebrow">المراحل والتمارين</p><h2>تحليل المراحل</h2></div></div><p class="admin-analytics-muted">لا توجد تفاصيل مراحل محفوظة لهذا الاختيار بعد.</p></section>`,
    resultsExercises:heatmap || `<section class="admin-panel"><div class="admin-section-head"><div><p class="admin-eyebrow">أداء التمارين</p><h2>تفاصيل التمارين</h2></div></div><p class="admin-analytics-muted">لا توجد تفاصيل تمارين محفوظة لهذا الاختيار بعد.</p></section>`,
    resultsCourseProgress:courseProgressMarkup,
    resultsLessonProgress:lessonProgressMarkup,
    resultsLessonStatus:lessonStatusDetailContentMarkup(studentLessonStatusStates,studentLessonStatusFilter,false),
    resultsSkills:studentSkillAnalyticsMarkup(skillReport,studentResultsActiveSkill,studentResultsSkillDetailOpen),
    resultsVocabulary:studentVocabularyReviewMarkup(),
    resultsVocabularyWord:studentVocabularyWordDetailMarkup(),
    resultsVocabularyPractice:studentVocabularyTrainingMarkup()
  };
  const resultToolTitles={
    resultsExamReadiness:"استعدادك للامتحان",
    resultsWeakPoints:"نقاط الضعف",
    resultsAchievements:"الأوسمة والإنجازات",
    resultsHistory:"سجل الامتحانات",
    resultsStats:"النقاط والإحصائيات",
    resultsStages:"تحليل المراحل",
    resultsExercises:"تفاصيل التمارين",
    resultsCourseProgress:"إنجاز التمارين",
    resultsLessonProgress:"تقدم الدروس",
    resultsLessonStatus:"حالة الدروس",
    resultsSkills:"تحليل مهارات اللغة",
    resultsVocabulary:"المفردات",
    resultsVocabularyWord:"تفاصيل الكلمة",
    resultsVocabularyPractice:"التدريب"
  };
  const activeToolMarkup=resultToolViews[studentResultsActiveTool]||"";
  const selectedSkillForHeader=(skillReport||[]).find(skill=>skill.id===studentResultsActiveSkill);
  const isVocabularyTool=studentResultsActiveTool==="resultsVocabulary";
  const isVocabularyWordTool=studentResultsActiveTool==="resultsVocabularyWord";
  const isVocabularyPracticeTool=studentResultsActiveTool==="resultsVocabularyPractice";
  const isLessonStatusTool=studentResultsActiveTool==="resultsLessonStatus";
  const isVocabularyPracticeMode=isVocabularyPracticeTool&&!!studentVocabularyTrainingMode;
  const activePracticeMethod=studentVocabularyTrainingMethod();
  const isCategoryVocabularyTraining=isVocabularyPracticeTool&&studentVocabularyTrainingScope==="category"&&studentVocabularyTrainingPool.length>0;
  const activeToolTitle=isVocabularyPracticeMode?(activePracticeMethod?.title||"التدريب"):(isVocabularyPracticeTool?(isCategoryVocabularyTraining?`التدريب على ${studentVocabularyTrainingCategoryArabic(studentVocabularyTrainingCategory)}`:"التدريب"):(isVocabularyWordTool?"تفاصيل الكلمة":(isVocabularyTool?"المفردات":(studentResultsActiveTool==="resultsSkills"&&studentResultsSkillDetailOpen
    ?(selectedSkillForHeader?.label||"تحليل المهارة")
    :(resultToolTitles[studentResultsActiveTool]||"")))));
  const isSkillPicker=studentResultsActiveTool==="resultsSkills"&&!studentResultsSkillDetailOpen;
  const toolBackAction=isLessonStatusTool?"student-results-lesson-status-back":(isVocabularyPracticeMode?"student-results-practice-mode-back":(isVocabularyPracticeTool?"student-results-practice-back":(isVocabularyWordTool?"student-results-word-back":(isVocabularyTool?"student-results-vocab-back":(studentResultsActiveTool==="resultsSkills"&&studentResultsSkillDetailOpen?"student-results-skill-detail-back":"student-results-tool-back")))));
  const toolBackLabel=isLessonStatusTool?"رجوع للإحصائيات":(isVocabularyPracticeMode?"رجوع لاختيار التدريب":(isVocabularyPracticeTool?(isCategoryVocabularyTraining?"رجوع للمفردات":"رجوع للكلمة"):(isVocabularyWordTool?"رجوع للمفردات":((isVocabularyTool||(studentResultsActiveTool==="resultsSkills"&&studentResultsSkillDetailOpen))?"رجوع للمهارات":"رجوع"))));
  const toolEyebrow=isLessonStatusTool?"متابعة تقدمك الدراسي":(isVocabularyPracticeTool?(isCategoryVocabularyTraining?"تدرّب على مفردات الدرس":"تدرّب على الكلمة"):(isVocabularyWordTool?"المفردات":(isVocabularyTool?"مراجعة الكلمات":(studentResultsActiveTool==="resultsSkills"&&studentResultsSkillDetailOpen?"تحليل المهارات":"أدوات النتائج"))));
  const fullscreenTool=activeToolMarkup?`
    <section class="student-results-tool-overlay ${isSkillPicker?"student-results-skill-picker-overlay":""} ${isVocabularyTool?"student-results-vocabulary-overlay":""} ${isVocabularyWordTool?"student-results-vocabulary-word-overlay":""} ${isVocabularyPracticeTool?"student-results-vocabulary-practice-overlay":""} ${isLessonStatusTool?"student-results-lesson-status-overlay":""}" role="dialog" aria-modal="true" aria-label="${escapeHtml(activeToolTitle)}">
      <header class="student-results-tool-header ${isVocabularyWordTool?"student-results-vocabulary-word-header":""} ${isVocabularyPracticeTool?"student-results-vocabulary-practice-header":""}">
        <button type="button" class="student-results-tool-back" data-action="${toolBackAction}"><span aria-hidden="true">←</span> ${toolBackLabel}</button>
        <div class="student-results-tool-heading"><small>${toolEyebrow}</small><h1>${escapeHtml(activeToolTitle)}</h1></div>
      </header>
      <main class="student-results-tool-body ${isSkillPicker?"student-results-skill-picker-body":""} ${isVocabularyTool?"student-results-vocabulary-body":""} ${isVocabularyWordTool?"student-results-vocabulary-word-body":""} ${isVocabularyPracticeTool?"student-results-vocabulary-practice-body":""}">
        ${isSkillPicker||isVocabularyTool||isVocabularyWordTool||isVocabularyPracticeTool||isLessonStatusTool?"":studentProgressLessonFilterMarkup(selectedLesson)}
        <div class="student-results-tool-content">${activeToolMarkup}</div>
      </main>
    </section>`:"";
  // The main progress page contains only the dashboard and shortcuts. Each result tool
  // opens alone in a full-screen view; no analysis panels remain stacked underneath.
  const allCourseRecords=courseProgressRecords();
  const courseLines=Object.entries(allCourseRecords)
    .filter(([key,value])=>/^(A1|A2)_\d+$/.test(key) && value?.startedAt &&
      (selectedLesson==="all" || Number(value.lessonNumber)===Number(selectedLesson)))
    .sort((a,b)=>a[0].localeCompare(b[0]))
    .map(([key,record])=>{
      const pct=courseProgressPercent(record);
      const scored=allResults.find(result=>result?.moduleId===`kurs-${String(record.level).toLowerCase()}-lektion-${record.lessonNumber}`);
      return `<div class="course-results-item"><div><strong>${escapeHtml(record.level)} · Lektion ${record.lessonNumber}</strong>
      <small>${record.completed?"الدرس مكتمل":`المتابعة محفوظة · ${escapeHtml(record.lastTabLabel||"آخر مرحلة")}`}</small></div>
      <span>${pct}%</span>${scored&&Number(scored.maxPoints)>0 ? `<span>التمارين: ${Number(scored.points)||0}/${Number(scored.maxPoints)||0}</span>`:""}</div>`;
    }).join("");
  const courseResultsMarkup=`<section class="course-results-panel"><h2>📚 التقدّم فالكورسات</h2>
    ${courseLines||"<p>مازال ما بديتي حتى كورس.</p>"}</section>`;
  const content=activeToolMarkup?"":`
    ${studentProgressLessonFilterMarkup(selectedLesson)}
    ${mainProgressDashboard}`;
  app.innerHTML=`<div class="student-results-promo">${studentLayout(content,"progress")}${fullscreenTool}</div>`;
}
function logout(){
  demoMode = false;
  stopAdminResultsRealtimeSync();
  stopStudentGroupTasksRealtimeSync();
  if (firebaseReady) firebaseAuth.signOut().catch(console.error);
  localStorage.removeItem(AUTH_SESSION_KEY);localStorage.removeItem("deutsch_a1_session_v1");if(activityTimer)window.clearInterval(activityTimer);currentUser=null;currentStudentProfile=null;currentStudentGroup=null;page="login";
  if("speechSynthesis" in window) window.speechSynthesis.cancel();
  render();
}
function editStudent(id){
  const users=readUsers();const user=users.find(item=>item.id===id);if(!user)return;
  const name=window.prompt("Name des Schülers:",user.name);if(name===null)return;
  const email=window.prompt("E-Mail-Adresse:",user.email);if(email===null)return;
  const cleanName=name.trim(),cleanEmail=email.trim().toLowerCase();
  if(!cleanName || !cleanEmail.includes("@")){showToast("Bitte einen gültigen Namen und eine E-Mail-Adresse eingeben.");return;}
  if(users.some(item=>item.id!==id && item.email.toLowerCase()===cleanEmail)){showToast("Diese E-Mail-Adresse wird bereits verwendet.");return;}
  user.name=cleanName;user.email=cleanEmail;
  firebaseDb.ref(`${DEUTSCH_A1_PATH}/users/${id}`).update({name:cleanName,email:cleanEmail,updatedAt:new Date().toISOString()})
    .then(()=>{cloudUsers=users;render();showToast("Schülerdaten wurden aktualisiert.");})
    .catch(err=>showToast("Änderung fehlgeschlagen: "+err.message));
}
function clearStudentResults(id){
  const user=readUsers().find(item=>item.id===id);if(!user)return;
  if(!window.confirm("Alle Testergebnisse von "+user.name+" löschen?"))return;
  firebaseDb.ref(`${DEUTSCH_A1_PATH}/results/${id}`).remove().then(()=>{
    delete cloudResults[id];localStorage.setItem(AUTH_RESULTS_KEY,JSON.stringify(cloudResults));render();showToast("Testergebnisse wurden gelöscht.");
  }).catch(err=>showToast("Löschen fehlgeschlagen: "+err.message));
}
async function resetStudentPassword(id){
  const user=readUsers().find(item=>item.id===id);if(!user)return;
  if(!user.email)return;
  try {
    await firebaseAuth.sendPasswordResetEmail(user.email);
    showToast("Ein Link zum Ändern des Passworts wurde an "+user.email+" gesendet.");
  } catch(error) { showToast("Passwort-Link konnte nicht gesendet werden: "+error.message); }
}
function exportAdminBackup(){
  const payload={exportedAt:new Date().toISOString(),users:readUsers(),results:readAllResults(),groups:cloudGroups,activity:cloudActivity,taskProgress:cloudTaskProgress,contentMeta:adminContentMeta};
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="deutsch-a1-backup.json";a.click();URL.revokeObjectURL(url);
}


function customContentArea(item){
  const value = String(item?.area || item?.section || "").trim().toLowerCase();
  if(["course","podcast","test","speaking"].includes(value)) return value;
  // Backward compatibility for files uploaded before the four-section selector.
  return item?.kind === "test" ? "test" : "course";
}
function customContentAreaLabel(item){
  const labels = {
    course: "Lernen · Kurs",
    podcast: "Hören · Podcast",
    test: "Üben · Test",
    speaking: "Sprechen · محادثة"
  };
  return labels[customContentArea(item)] || "Lernen · Kurs";
}
function customContentEntries(kind, lessonNo, area){
  return Object.entries(adminContentMeta || {})
    .map(([id, item]) => ({id, ...(item || {})}))
    .filter(item => item.active !== false &&
      (!kind || item.kind === kind) &&
      (!lessonNo || Number(item.lessonNumber) === Number(lessonNo)) &&
      (!area || customContentArea(item) === area))
    .sort((a,b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
}
function customContentFileTypeLabel(item){
  const mime = String(item?.mimeType || "");
  if(mime === "application/pdf") return "PDF";
  if(mime === "text/html") return "HTML تفاعلي";
  if(mime.startsWith("image/")) return "صورة";
  if(mime.startsWith("audio/")) return "ملف صوتي";
  return "ملف";
}
function customContentIcon(item){
  const mime = String(item?.mimeType || "");
  if(mime === "application/pdf") return "📕";
  if(mime === "text/html") return "🌐";
  if(mime.startsWith("audio/")) return "🎧";
  if(mime.startsWith("image/")) return "🖼️";
  return "📎";
}
function renderCustomContentFeatureCards(area, lessonNo, heading){
  const kind = area === "test" ? "test" : "lesson";
  const items = customContentEntries(kind, lessonNo, area);
  if(!items.length) return "";
  const title = heading || ({
    course: "مواد إضافية للكورس",
    podcast: "ملفات الاستماع",
    test: "اختبارات إضافية",
    speaking: "مواد إضافية للمحادثة"
  }[area] || "محتوى إضافي");
  return `<section class="custom-content-feature-section">
    <div class="custom-content-section-head"><div><p>محتوى أضافه الأستاذ</p><h3>${escapeHtml(title)}</h3></div><span>${items.length} ملف</span></div>
    <div class="custom-content-feature-list">${items.map(item => `
      <article class="stadt-feature custom-content-feature">
        <div class="stadt-feature-icon">${customContentIcon(item)}</div>
        <div class="stadt-feature-copy">
          <h3>${escapeHtml(item.title || "محتوى إضافي")}</h3>
          <p>${escapeHtml(item.description || customContentFileTypeLabel(item))} · ${customContentFileTypeLabel(item)}</p>
        </div>
        <button type="button" class="primary-btn" data-action="open-custom-content" data-id="${escapeHtml(item.id)}">فتح المحتوى <span class="arrow">←</span></button>
      </article>`).join("")}</div>
  </section>`;
}
function renderAdminContentSection(){
  const entries = customContentEntries();
  const lessonOptions = lessons.map((lesson,index) =>
    `<option value="${index+1}">L${index+1} · ${escapeHtml(lesson.name)}</option>`
  ).join("");
  const rows = entries.length ? entries.map(item => `
    <tr>
      <td><strong>${escapeHtml(item.title || "محتوى بدون عنوان")}</strong><small>${escapeHtml(item.fileName || "")}</small></td>
      <td>${customContentAreaLabel(item)}</td>
      <td>L${Number(item.lessonNumber)||"—"}</td>
      <td>${customContentFileTypeLabel(item)}</td>
      <td>${item.sizeBytes ? (item.sizeBytes/1024/1024).toFixed(2)+" MB" : "—"}</td>
      <td>${item.createdAt ? new Date(item.createdAt).toLocaleDateString("ar-MA") : "—"}</td>
      <td><button type="button" class="tiny-btn danger" data-action="admin-content-delete" data-id="${escapeHtml(item.id)}">حذف</button></td>
    </tr>`).join("") : `<tr><td colspan="7" class="empty-cell">مازال ما زدتي حتى ملف إضافي.</td></tr>`;
  return `
    <section class="admin-welcome"><div><p class="admin-eyebrow">إدارة المحتوى</p><h1>إضافة محتوى للدرس</h1><p>رفع PDF أو HTML تفاعلي أو صورة أو ملف صوتي وربطو بأحد الأقسام الأربعة في الدروس العشرة.</p></div><span class="admin-count">${entries.length} ملف محفوظ</span></section>
    <section class="admin-panel custom-content-upload-panel">
      <div class="admin-section-head"><div><p class="admin-eyebrow">ملف جديد</p><h2>إضافة محتوى للطلاب</h2><p>اختار الدرس والقسم اللي بغيتي يبان فيه الملف: Kurs أو Podcast أو Test أو Sprechen.</p></div><span class="admin-section-icon">＋</span></div>
      <div class="admin-content-form-grid">
        <label>فين يبان الملف؟
          <select id="adminContentArea">
            <option value="course">📚 Lernen · Kurs</option>
            <option value="podcast">🎧 Hören · Podcast</option>
            <option value="test">✓ Üben · Test</option>
            <option value="speaking">🎙️ Sprechen · محادثة</option>
          </select>
        </label>
        <label>الدرس
          <select id="adminContentLesson">${lessonOptions}</select>
        </label>
        <label class="admin-content-title-field">عنوان المحتوى
          <input id="adminContentTitle" type="text" maxlength="90" placeholder="مثلاً: Lektion 7 – Übung 4">
        </label>
        <label class="admin-content-description-field">وصف مختصر (اختياري)
          <input id="adminContentDescription" type="text" maxlength="180" placeholder="شنو غادي يتعلم الطالب من هاد الملف؟">
        </label>
        <label class="admin-content-file-field">الملف
          <input id="adminContentFile" type="file" accept=".pdf,.html,.htm,.png,.jpg,.jpeg,.webp,.gif,.mp3,.m4a,.wav,.ogg,.webm,application/pdf,text/html,image/png,image/jpeg,image/webp,image/gif,audio/mpeg,audio/mp4,audio/wav,audio/ogg,audio/webm">
          <small>الأنواع المقبولة: PDF · HTML · صور · MP3 · M4A · WAV · OGG · WEBM. ما كاينش حد إضافي للحجم من طرف التطبيق؛ قد تطبق حدود Firebase والمتصفح.</small>
        </label>
      </div>
      <div class="admin-content-test-results-help">
        <strong>ربط نتيجة اختبار HTML بصفحة النتائج</strong>
        <p>إذا كان ملف HTML يستعمل الدالة finish(id, correct, total) بحال الاختبارات الموجودة في المنصة، غادي يتسجل التنقيط تلقائياً. لأي اختبار HTML آخر، نادِ الدالة التالية عند نهاية الاختبار:</p>
        <code>window.DeutschA1Results.submit({ points: score, maxPoints: total });</code>
        <small>النتيجة كتتحفظ باسم الطالب، عنوان الاختبار، ورقم الدرس، وكتظهر في نتائج الطالب وAdmin. ملفات PDF والصور ما كتتنقطش تلقائياً.</small>
      </div>
      <div class="admin-form-actions"><button type="button" class="primary-btn" data-action="admin-content-save">حفظ وإظهار للطلاب</button></div>
      <p class="admin-note">الملف كيتحفظ فـ Firebase Realtime Database بصلاحيات الأدمن فقط. HTML كيتعرض داخل إطار معزول (Sandbox)، والصوت كيتعرض بمشغل صوتي.</p>
    </section>
    <section class="admin-panel">
      <div class="admin-section-head"><div><p class="admin-eyebrow">المكتبة</p><h2>الدروس والاختبارات المضافة</h2></div><span class="admin-count">${entries.length} محتوى</span></div>
      <div class="admin-table-wrap"><table class="admin-table custom-content-admin-table"><thead><tr><th>العنوان / الملف</th><th>مكان العرض</th><th>الدرس</th><th>الصيغة</th><th>الحجم</th><th>تاريخ الإضافة</th><th>الإجراء</th></tr></thead><tbody>${rows}</tbody></table></div>
    </section>`;
}
function normalizeManagedPagePath(path){
  const value = String(path || "").trim().replace(/^\/+/, "");
  if(!/^pages\/[a-zA-Z0-9_./-]+\.html$/i.test(value) || value.includes("..") || value.includes("\\") || value.includes("//")) return "";
  return value;
}
function managedPageAssetUrl(path){
  const normalized = normalizeManagedPagePath(path);
  if(!normalized) return "";
  try{
    const appScript = Array.from(document.scripts).find(script=>script.src && /\/js\/app\.js(?:[?#]|$)/i.test(script.src));
    if(appScript){
      const scriptUrl = new URL(appScript.src, window.location.href);
      const appRoot = new URL("../", scriptUrl);
      return new URL(normalized, appRoot).href;
    }
    return new URL(normalized, document.baseURI || window.location.href).href;
  }catch(error){
    console.warn("Could not resolve managed page asset URL:", error);
    return normalized;
  }
}
function managedPageDefinition(path){
  return managedHtmlPageDefinitions.find(item=>item.path===path) || null;
}
function getLocalAdminHtmlPages(){
  try{
    const rows = JSON.parse(localStorage.getItem(ADMIN_LOCAL_HTML_PAGES_KEY) || "[]");
    return Array.isArray(rows) ? rows.filter(item=>item && normalizeManagedPagePath(item.path)) : [];
  }catch(error){return [];}
}
function rememberLocalAdminHtmlPage(path,title){
  const normalized = normalizeManagedPagePath(path);
  if(!normalized) return;
  const rows = getLocalAdminHtmlPages().filter(item=>item.path!==normalized);
  rows.unshift({path:normalized,title:String(title||normalized.split("/").pop()),updatedAt:new Date().toISOString()});
  localStorage.setItem(ADMIN_LOCAL_HTML_PAGES_KEY,JSON.stringify(rows.slice(0,100)));
}
function managedPageMetaForPath(path){
  return getLocalAdminHtmlPages().find(item=>item.path===path) || null;
}
function managedPageHtmlWithBase(html,path){
  const absolute = new URL(managedPageAssetUrl(path) || path, window.location.href);
  const baseHref = absolute.href.slice(0, absolute.href.lastIndexOf("/")+1);
  const baseTag = `<base href="${escapeHtml(baseHref)}">`;
  const source = String(html || "");
  if(/<base\b/i.test(source)) return source;
  if(/<head\b[^>]*>/i.test(source)) return source.replace(/<head\b([^>]*)>/i, match=>match+baseTag);
  return `<!doctype html><html><head><meta charset="utf-8">${baseTag}</head><body>${source}</body></html>`;
}
function loadManagedPageIntoFrame(frame,path){
  if(!frame) return;
  const normalized = normalizeManagedPagePath(path);
  if(!normalized){frame.src="about:blank";return;}
  frame.dataset.managedPagePath = normalized;
  // Static delivery only: student pages load directly from the project's /pages folder.
  // No Firebase lookup, srcdoc override, or managedPageFiles read is used here.
  frame.removeAttribute("srcdoc");
  const sourceUrl = managedPageAssetUrl(normalized) || normalized;
  // Give the real HTML document its OWN course snapshot BEFORE its inline
  // JavaScript initializes stage 1. The two windows share sessionStorage when
  // the course file is on the same origin as this app.
  let targetUrl=sourceUrl;
  // V48: force the newly deployed microphone page instead of a stale cached HTML.
  // Other managed lessons keep their existing URLs and resume behavior.
  if(normalized==="pages/B2/training/b2-sprechen-training.html"){
    try{
      const fresh=new URL(sourceUrl,window.location.href);
      fresh.searchParams.set("b2-microphone","v48");
      targetUrl=fresh.href;
    }catch(error){console.warn("Speaking page cache refresh unavailable",error);}
  }
  if(activeCourseFrame?.frame===frame && currentUser?.role==="student"){
    const {level,no}=activeCourseFrame;
    try{
      const address=new URL(sourceUrl,window.location.href);
      const saved=getCourseProgress(level,no)||null;
      if(courseResumeMode==='resume' && saved && Number(saved.lastTab)>0 &&
         !Array.isArray(saved.nativeStages) && !Number(saved.legacyUnscoredStages)){
        // Cursor-only legacy progress doesn't contain any quiz scores.
        saveCourseProgress(level,no,{legacyUnscoredStages:Number(saved.lastTab)},false);
      }
      sessionStorage.setItem("deutsch_course_launch_v8:"+address.pathname,JSON.stringify({
        version:8,mode:courseResumeMode,level,no,student:String(currentUser.id),
        saved,issuedAt:Date.now()
      }));
      // Cache-bust the HTML too, not just index/app.js. Otherwise a browser
      // can still execute an older stage-1-only course file.
      address.searchParams.set("deutsch-resume-v","8_20261118");
      targetUrl=address.href;
    }catch(error){console.warn("Could not share course bootstrap",error);}
  }
  frame.src=targetUrl;
}

function renderAdminManagedHtmlPage(){
  if(!currentUser || currentUser.role!=="admin"){page="home";return renderHome();}
  const path = normalizeManagedPagePath(managedHtmlPagePath);
  const definition = managedPageDefinition(path) || {title:path.split("/").pop()};
  app.innerHTML = `<div class="admin-page admin-managed-html-page"><header class="admin-topbar"><div class="admin-brand"><span class="admin-brand-mark">A1</span><div><strong>${escapeHtml(definition.title||"صفحة HTML")}</strong><small>معاينة صفحة مستقلة</small></div></div><div class="admin-user"><button class="outline-btn" data-action="admin-managed-html-back">رجوع إلى Admin</button></div></header><main class="admin-managed-html-frame-wrap"><iframe id="adminManagedHtmlFrame" title="${escapeHtml(definition.title||"صفحة HTML")}" loading="eager"></iframe></main></div>`;
  const frame = document.getElementById("adminManagedHtmlFrame");
  if(frame) loadManagedPageIntoFrame(frame,path);
}
function renderAdminPagesSection(){
  const lessonOptions = lessons.map((lesson,index) =>
    `<option value="${index+1}">L${index+1} · ${escapeHtml(lesson.name)}</option>`
  ).join("");
  const selected = adminPageSelectedPath || managedHtmlPageDefinitions[0].path;
  const selectedMeta = managedPageMetaForPath(selected);
  const selectedDef = managedPageDefinition(selected) || selectedMeta || {path:selected,title:selected.split("/").pop(),group:"صفحات مضافة"};
  const grouped = {};
  managedHtmlPageDefinitions.forEach(item=>(grouped[item.group] ||= []).push(item));
  const dynamicPages = getLocalAdminHtmlPages().filter(item=>!managedPageDefinition(item.path));
  if(dynamicPages.length) grouped["صفحات مضافة"] = dynamicPages;
  const options = Object.entries(grouped).map(([group,items])=>`<optgroup label="${escapeHtml(group)}">${items.map(item=>`<option value="${escapeHtml(item.path)}" ${item.path===selected?"selected":""}>${escapeHtml(item.title || item.path)}</option>`).join("")}</optgroup>`).join("");
  const status = selectedMeta ? "ملف محلي محفوظ في مجلد pages" : "ملف HTML أصلي داخل مجلد pages";
  return `
    <section class="admin-welcome admin-pages-welcome"><div><p class="admin-eyebrow">تحكم كامل في صفحات HTML</p><h1>محرر صفحات المنصة</h1><p>اختار صفحة من مجلد pages، حمّلها من مجلد المشروع أو من جهازك، عدّلها ثم احفظها مباشرة كملف HTML داخل pages. ملفات الصفحات لا تُخزَّن في Firebase.</p></div><span class="admin-count">${managedHtmlPageDefinitions.length + getLocalAdminHtmlPages().length} صفحة</span></section>
    <section class="admin-panel admin-pages-editor-panel">
      <div class="admin-section-head"><div><p class="admin-eyebrow">1 · اختيار الصفحة</p><h2>الصفحة اللي بغيتي تعدّل</h2></div><span class="admin-section-icon">✎</span></div>
      <div class="admin-pages-select-grid">
        <label>اختار الصفحة من اللائحة<select id="adminPageSelect">${options}</select></label>
        <div class="admin-pages-load-actions">
          <button type="button" class="outline-btn" data-action="admin-page-choose-folder">اختيار مجلد المشروع</button>
          <button type="button" class="primary-btn" data-action="admin-page-load">تحميل من pages</button>
          <button type="button" class="outline-btn" data-action="admin-page-import">تحميل من الجهاز</button>
        </div>
      </div>
      <div class="admin-pages-meta-grid">
        <label>عنوان الصفحة<input id="adminPageTitle" type="text" maxlength="120" value="${escapeHtml(selectedDef.title || selected.split("/").pop())}"></label>
        <label>مسار HTML – قابل للتعديل<input id="adminPagePath" type="text" maxlength="240" autocomplete="off" spellcheck="false" placeholder="pages/new-page.html" value="${escapeHtml(selected)}"></label>
      </div>
      <p class="admin-note admin-pages-path-help">اختار مجلد المشروع اللي فيه <code>index.html</code> و<code>pages/</code>. تقدر تبدّل المسار مثلاً إلى <code>pages/lektion-6-neu.html</code>؛ الحفظ كيكتب الملف مباشرة داخل مجلد pages والصفحة الأصلية كتبقى كما هي. ما كاين حتى حفظ لملفات HTML في Firebase.</p>
      <div class="admin-test-route-box">
        <div><strong>ربط صفحة HTML باختبار الدرس</strong><p>اختار مجلد المشروع أولاً، ثم رقم الدرس. غادي نكتب الربط داخل js/test-page-routes.js باش يخدم عند جميع التلاميذ من نفس المشروع، بلا Firebase.</p></div>
        <div class="admin-test-route-controls">
          <label>الدرس<select id="adminTestRouteLesson"><option value="">اختار الدرس</option>${lessonOptions}</select></label>
          <button type="button" class="primary-btn" data-action="admin-page-assign-test">ربط الصفحة باختبار الدرس</button>
        </div>
        <p class="admin-pages-status" id="adminTestRouteStatus">المسار الحالي: ${escapeHtml(selected)}</p>
      </div>
      <p class="admin-pages-status" id="adminPageStatus">الحالة: ${status}. اضغط على «تحميل الصفحة» باش تجيب الكود.</p>
    </section>
    <section class="admin-panel admin-pages-code-panel">
      <div class="admin-section-head"><div><p class="admin-eyebrow">2 · تعديل HTML</p><h2>محرر الكود</h2><p>تقدر تبدّل HTML وCSS وJavaScript داخل نفس الملف. خليك محافظ على أسماء الملفات والمسارات ديال الصور والصوت.</p></div><span class="admin-section-icon">&lt;/&gt;</span></div>
      <div class="admin-pages-file-actions">
        <input id="adminPageImportFile" type="file" accept=".html,.htm,text/html" hidden>
        <button type="button" class="outline-btn" data-action="admin-page-import">⬆️ استيراد ملف HTML من الجهاز</button>
        <button type="button" class="outline-btn" data-action="admin-page-export">⬇️ تصدير الصفحة كـ HTML</button>
      </div>
      <p class="admin-note admin-pages-import-note">الاستيراد كيدخل محتوى ملف HTML للمحرر ديال الصفحة المختارة. التصدير كيحمّل آخر كود ظاهر فالمحرر كملف .html على جهازك. الملفات المرتبطة بحال الصور وCSS وJavaScript الخارجية ما كتندمجش تلقائياً داخل ملف HTML. الحفظ المباشر كيتطلب اختيار مجلد المشروع من جهازك.</p>
      <textarea id="adminPageHtml" class="admin-page-html-editor" spellcheck="false" autocapitalize="off" autocomplete="off" placeholder="اضغط على تحميل الصفحة أو استيراد HTML باش يظهر الكود هنا..."></textarea>
      <div class="admin-pages-actions">
        <button type="button" class="outline-btn" data-action="admin-page-preview">معاينة التعديلات</button>
        <button type="button" class="primary-btn" data-action="admin-page-save-draft">حفظ مباشرة داخل مجلد pages</button>
        <button type="button" class="outline-btn" data-action="admin-page-export">تصدير HTML</button>
      </div>
      <p class="admin-note">الحفظ كيكتب ملف HTML مباشرة داخل مجلد pages اللي اخترتيه، بلا Firebase. إذا كانت المنصة منشورة على الإنترنت، خاصك من بعد ترفع مجلد pages المحدّث للاستضافة باش يشوفو الطلاب التغييرات.</p>
    </section>
    <section class="admin-panel admin-pages-preview-panel">
      <div class="admin-section-head"><div><p class="admin-eyebrow">3 · المعاينة</p><h2>كيفاش غادي تبان الصفحة؟</h2></div><span class="admin-count">Preview</span></div>
      <iframe id="adminPagePreviewFrame" title="معاينة صفحة HTML" sandbox="allow-scripts allow-forms allow-popups" referrerpolicy="no-referrer"></iframe>
    </section>`;
}
async function chooseAdminProjectFolder(){
  if(!currentUser || currentUser.role!=="admin"){showToast("خاصك تدخل بحساب الأدمن.");return;}
  if(typeof window.showDirectoryPicker !== "function"){
    showToast("المتصفح ما كيدعمش اختيار المجلدات. استعمل «تحميل من الجهاز» و«تصدير HTML».");
    return;
  }
  try{
    adminPagesRootDirectoryHandle = await window.showDirectoryPicker({mode:"readwrite",id:"deutsch-a1-project-root"});
    let hasIndex = false;
    try{await adminPagesRootDirectoryHandle.getFileHandle("index.html");hasIndex=true;}catch(_error){}
    const status = document.getElementById("adminPageStatus");
    if(status) status.textContent = hasIndex
      ? "تم اختيار مجلد المشروع بنجاح. دابا تقدر تحمّل وتحفظ ملفات pages مباشرة."
      : "تم اختيار المجلد. تأكد أنه هو مجلد المشروع اللي فيه index.html ومجلد pages.";
    showToast("تم ربط مجلد المشروع محلياً. ما غادي يتحفظ حتى ملف HTML في Firebase.");
  }catch(error){
    if(error && error.name==="AbortError") return;
    console.error("Project folder selection failed:",error);
    showToast("ما قدرناش نختارو المجلد: "+(error.message||"خطأ غير معروف"));
  }
}
async function getAdminLocalPageDirectory(path,create){
  const normalized = normalizeManagedPagePath(path);
  if(!normalized) throw new Error("مسار HTML غير صالح. خاصو يبدا بـ pages/ ويسالي بـ .html.");
  if(!adminPagesRootDirectoryHandle) throw new Error("اختار مجلد المشروع أولاً.");
  let directory = await adminPagesRootDirectoryHandle.getDirectoryHandle("pages",{create:Boolean(create)});
  const parts = normalized.split("/").slice(1);
  parts.pop();
  for(const part of parts) directory = await directory.getDirectoryHandle(part,{create:Boolean(create)});
  return directory;
}
async function readAdminLocalPageFile(path){
  const normalized = normalizeManagedPagePath(path);
  const directory = await getAdminLocalPageDirectory(normalized,false);
  const fileName = normalized.split("/").pop();
  const fileHandle = await directory.getFileHandle(fileName);
  const file = await fileHandle.getFile();
  return await file.text();
}
async function loadAdminPageIntoEditor(){
  if(!currentUser || currentUser.role!=="admin") return showToast("خاصك تدخل بحساب الأدمن.");
  const select = document.getElementById("adminPageSelect");
  const pathInput = document.getElementById("adminPagePath");
  const titleInput = document.getElementById("adminPageTitle");
  const htmlInput = document.getElementById("adminPageHtml");
  const status = document.getElementById("adminPageStatus");
  const sourcePath = normalizeManagedPagePath(select?.value || adminPageSelectedPath || pathInput?.value);
  const targetPath = normalizeManagedPagePath(pathInput?.value || sourcePath);
  if(!sourcePath) return showToast("اختار الصفحة الأصلية من اللائحة أولاً.");
  if(!targetPath) return showToast("مسار الحفظ غير صالح. استعمل pages/name.html.");
  adminPageSelectedPath = sourcePath;
  const definition = managedPageDefinition(sourcePath);
  if(status) status.textContent = `جاري قراءة ${sourcePath} من مجلد pages...`;
  try{
    let html = "";
    let sourceLabel = "مجلد pages المحلي";
    if(adminPagesRootDirectoryHandle){
      html = await readAdminLocalPageFile(sourcePath);
    }else{
      const response = await fetch(managedPageAssetUrl(sourcePath),{cache:"no-store",credentials:"same-origin"});
      if(!response.ok) throw new Error(`تعذر تحميل ${sourcePath} (HTTP ${response.status}).`);
      html = await response.text();
      sourceLabel = "ملفات الموقع";
    }
    if(!html.trim()) throw new Error(`الملف ${sourcePath} فارغ.`);
    if(titleInput) titleInput.value = definition?.title || managedPageMetaForPath(sourcePath)?.title || sourcePath.split("/").pop();
    if(htmlInput){htmlInput.value=html;htmlInput.dataset.sourcePath=sourcePath;htmlInput.dataset.targetPath=targetPath;}
    if(status) status.textContent = sourcePath===targetPath
      ? `تم تحميل ${sourcePath} مباشرة من ${sourceLabel}.`
      : `تم تحميل الأصل ${sourcePath} · مسار الحفظ الجديد: ${targetPath}.`;
    showToast("تحمّل الملف مباشرة. ما استعملناش Firebase.");
  }catch(error){
    console.error("Static HTML page load failed:",error);
    if(status) status.textContent = "فشل التحميل: "+(error.message||"خطأ غير معروف");
    showToast("ما قدرناش نحملو الملف. اختار مجلد المشروع أو استعمل «تحميل من الجهاز». السبب: "+(error.message||"تعذر الوصول للملف"));
  }
}

function previewAdminManagedPage(){
  const path = normalizeManagedPagePath(document.getElementById("adminPagePath")?.value || adminPageSelectedPath);
  const html = String(document.getElementById("adminPageHtml")?.value || "");
  const frame = document.getElementById("adminPagePreviewFrame");
  if(!path || !html.trim() || !frame){showToast("حمّل الصفحة أو كتب HTML قبل المعاينة.");return;}
  frame.srcdoc = managedPageHtmlWithBase(html,path);
}
function syncAdminManagedPageOption(path,title){
  const select = document.getElementById("adminPageSelect");
  if(!select || !path) return;
  let option = Array.from(select.options).find(item=>item.value===path);
  if(!option){
    let group = Array.from(select.querySelectorAll("optgroup")).find(item=>item.label==="صفحات مضافة");
    if(!group){group=document.createElement("optgroup");group.label="صفحات مضافة";select.appendChild(group);}
    option=document.createElement("option");option.value=path;group.appendChild(option);
  }
  option.textContent=title || path;
  select.value=path;
}
async function saveAdminManagedPage(){
  if(!currentUser || currentUser.role!=="admin"){showToast("خاصك تدخل بحساب الأدمن.");return;}
  const path = normalizeManagedPagePath(document.getElementById("adminPagePath")?.value || adminPageSelectedPath);
  const htmlInput = document.getElementById("adminPageHtml");
  const html = String(htmlInput?.value || "");
  const title = String(document.getElementById("adminPageTitle")?.value || "").trim();
  if(!path){showToast("مسار الصفحة غير صالح. استعمل pages/name.html.");return;}
  if(!title){showToast("كتب عنوان الصفحة.");return;}
  if(!html.trim()){showToast("حمّل الصفحة أو استورد HTML أولاً.");return;}
  const sourcePath = normalizeManagedPagePath(htmlInput?.dataset.sourcePath || adminPageSelectedPath);
  if(sourcePath && sourcePath!==path){
    if(!window.confirm(`غادي تنشئ/تحدّث ${path} بمحتوى ${sourcePath}. الصفحة الأصلية غتبقى كما هي. واش متأكد؟`)) return;
  }
  const button = app.querySelector('[data-action="admin-page-save-draft"]');
  if(button){button.disabled=true;button.dataset.originalText=button.textContent;button.textContent="جاري الحفظ في pages...";}
  try{
    if(!adminPagesRootDirectoryHandle){
      if(typeof window.showDirectoryPicker !== "function"){
        exportAdminManagedPage();
        showToast("المتصفح ما كيدعمش الحفظ المباشر للمجلد. تصدّر الملف وحطّو يدوياً داخل pages.");
        return;
      }
      adminPagesRootDirectoryHandle = await window.showDirectoryPicker({mode:"readwrite",id:"deutsch-a1-project-root"});
    }
    let permission = "granted";
    if(typeof adminPagesRootDirectoryHandle.queryPermission === "function"){
      permission = await adminPagesRootDirectoryHandle.queryPermission({mode:"readwrite"});
      if(permission!=="granted" && typeof adminPagesRootDirectoryHandle.requestPermission === "function"){
        permission = await adminPagesRootDirectoryHandle.requestPermission({mode:"readwrite"});
      }
    }
    if(permission!=="granted") throw new Error("المتصفح ما عطاش صلاحية الكتابة فالمجلد.");
    const normalized = normalizeManagedPagePath(path);
    const directory = await getAdminLocalPageDirectory(normalized,true);
    const fileName = normalized.split("/").pop();
    let exists = false;
    try{await directory.getFileHandle(fileName);exists=true;}catch(error){if(error && error.name!=="NotFoundError") throw error;}
    if(exists && sourcePath!==normalized && !window.confirm(`الملف ${normalized} موجود من قبل. واش بغيتي تعوّضو؟`)) return;
    const fileHandle = await directory.getFileHandle(fileName,{create:true});
    const writable = await fileHandle.createWritable();
    await writable.write(new Blob(["\uFEFF",html],{type:"text/html;charset=utf-8"}));
    await writable.close();
    rememberLocalAdminHtmlPage(normalized,title);
    adminPageSelectedPath = normalized;
    if(htmlInput){htmlInput.dataset.sourcePath=normalized;htmlInput.dataset.targetPath=normalized;}
    const pathInput = document.getElementById("adminPagePath");
    if(pathInput) pathInput.value=normalized;
    syncAdminManagedPageOption(normalized,title);
    const status = document.getElementById("adminPageStatus");
    if(status) status.textContent = `تحفظ الملف مباشرة داخل ${normalized}. لا توجد أي كتابة لصفحات HTML في Firebase.`;
    showToast(`تحفظ ${normalized} بنجاح داخل مجلد pages.`);
  }catch(error){
    console.error("Local HTML page save failed:",error);
    showToast("فشل الحفظ المحلي: "+(error.message||"خطأ غير معروف")+". تقدر تستعمل تصدير HTML كحل بديل.");
  }finally{
    if(button){button.disabled=false;button.textContent=button.dataset.originalText||"حفظ مباشرة داخل مجلد pages";delete button.dataset.originalText;}
  }
}

function importAdminManagedPageFile(file){
  if(!currentUser || currentUser.role!=="admin") {showToast("خاصك تدخل بحساب الأدمن.");return;}
  if(!file) return;
  const fileName = String(file.name || "");
  if(!/\.html?$/i.test(fileName)) {showToast("اختار ملف HTML أو HTM فقط.");return;}
  const path = normalizeManagedPagePath(document.getElementById("adminPagePath")?.value || adminPageSelectedPath);
  if(!path) {showToast("اختار الصفحة اللي بغيتي تستورد فيها HTML أولاً.");return;}
  const reader = new FileReader();
  reader.onload = () => {
    const html = String(reader.result || "");
    if(!html.trim()) {showToast("ملف HTML فارغ.");return;}
    const editor = document.getElementById("adminPageHtml");
    if(!editor) {showToast("محرر HTML ما بقاش ظاهر. عاود افتح قسم الصفحات.");return;}
    editor.value = html;
    const sourcePath = normalizeManagedPagePath(document.getElementById("adminPageSelect")?.value || adminPageSelectedPath);
    editor.dataset.sourcePath = sourcePath || path;
    const status = document.getElementById("adminPageStatus");
    if(status) status.textContent = `تم تحميل ${fileName} من جهازك. المصدر: ${sourcePath || fileName} · وجهة الحفظ: ${path}. عاين التعديلات قبل الحفظ أو النشر.`;
    showToast("تم استيراد ملف HTML محلياً. عاين التغييرات قبل الحفظ داخل pages.");
  };
  reader.onerror = () => showToast("ما قدرناش نقراو ملف HTML من الجهاز.");
  reader.readAsText(file, "UTF-8");
}
function exportAdminManagedPage(){
  if(!currentUser || currentUser.role!=="admin") {showToast("خاصك تدخل بحساب الأدمن.");return;}
  const path = normalizeManagedPagePath(document.getElementById("adminPagePath")?.value || adminPageSelectedPath);
  const html = String(document.getElementById("adminPageHtml")?.value || "");
  if(!path) {showToast("اختار صفحة صالحة قبل التصدير.");return;}
  if(!html.trim()) {showToast("المحرر فارغ. حمّل الصفحة أو استورد ملف HTML أولاً.");return;}
  const rawName = path.split("/").pop() || "page.html";
  const fileName = /\.html?$/i.test(rawName) ? rawName : `${rawName}.html`;
  try{
    const blob = new Blob(["\uFEFF",html],{type:"text/html;charset=utf-8"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(()=>URL.revokeObjectURL(url),1500);
    showToast(`تم تجهيز ${fileName} للتنزيل.`);
  }catch(error){
    console.error("HTML export failed:",error);
    showToast("فشل تصدير HTML: "+(error.message||"خطأ غير معروف"));
  }
}

function readFileAsDataUrl(file){
  return new Promise((resolve,reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("تعذر قراءة الملف."));
    reader.readAsDataURL(file);
  });
}
function customContentMime(file){
  const name = String(file?.name || "").toLowerCase();
  if(name.endsWith(".pdf")) return "application/pdf";
  if(name.endsWith(".html") || name.endsWith(".htm")) return "text/html";
  if(name.endsWith(".png")) return "image/png";
  if(name.endsWith(".jpg") || name.endsWith(".jpeg")) return "image/jpeg";
  if(name.endsWith(".webp")) return "image/webp";
  if(name.endsWith(".gif")) return "image/gif";
  if(name.endsWith(".mp3")) return "audio/mpeg";
  if(name.endsWith(".m4a")) return "audio/mp4";
  if(name.endsWith(".wav")) return "audio/wav";
  if(name.endsWith(".ogg") || name.endsWith(".oga")) return "audio/ogg";
  if(name.endsWith(".webm")) return "audio/webm";
  const detected = String(file?.type || "");
  return detected;
}
async function saveAdminContent(){
  if(!currentUser || currentUser.role !== "admin" || !firebaseReady){
    showToast("خاصك تدخل بحساب الأدمن باش تزيد المحتوى.");
    return;
  }
  const titleInput = document.getElementById("adminContentTitle");
  const descriptionInput = document.getElementById("adminContentDescription");
  const areaInput = document.getElementById("adminContentArea");
  const lessonInput = document.getElementById("adminContentLesson");
  const fileInput = document.getElementById("adminContentFile");
  const button = app.querySelector('[data-action="admin-content-save"]');
  const title = String(titleInput?.value || "").trim();
  const description = String(descriptionInput?.value || "").trim();
  const allowedAreas = ["course","podcast","test","speaking"];
  const area = allowedAreas.includes(String(areaInput?.value || "")) ? String(areaInput.value) : "course";
  const kind = area === "test" ? "test" : "lesson";
  const lessonNumber = Number(lessonInput?.value);
  const file = fileInput?.files?.[0];
  if(!title){showToast("كتب عنوان المحتوى.");titleInput?.focus();return;}
  if(!Number.isInteger(lessonNumber) || lessonNumber < 1 || lessonNumber > 10){showToast("اختار الدرس المناسب.");return;}
  if(!file){showToast("اختار PDF أو HTML أو صورة أو ملف صوتي.");fileInput?.focus();return;}
  const mimeType = customContentMime(file);
  const allowed = ["application/pdf","text/html","image/png","image/jpeg","image/webp","image/gif","audio/mpeg","audio/mp4","audio/wav","audio/x-wav","audio/ogg","audio/webm"];
  if(!allowed.includes(mimeType)){showToast("هاد الصيغة ما مدعماش. استعمل PDF أو HTML أو PNG/JPG/WEBP/GIF أو MP3/M4A/WAV/OGG.");return;}
  if(button){button.disabled=true;button.textContent="جاري الرفع والحفظ...";}
  try{
    const dataUrl = await readFileAsDataUrl(file);
    const base64 = dataUrl.split(",")[1] || "";
    if(!base64) throw new Error("الملف فارغ أو تعذر تحويله.");
    const id = firebaseDb.ref(`${DEUTSCH_A1_PATH}/contentMeta`).push().key;
    const now = new Date().toISOString();
    const meta = {
      id, title, description, kind, area, lessonNumber,
      level: lessonNumber <= 5 ? "A1.1" : "A1.2",
      fileName: String(file.name || "content").slice(0,160),
      mimeType, sizeBytes: Number(file.size)||0,
      createdAt: now, createdBy: currentUser.id, active: true
    };
    const updates = {};
    updates[`${DEUTSCH_A1_PATH}/contentMeta/${id}`] = meta;
    updates[`${DEUTSCH_A1_PATH}/contentFiles/${id}`] = {
      base64, mimeType, fileName: meta.fileName, uploadedAt: now
    };
    await firebaseDb.ref().update(updates);
    adminContentMeta[id] = meta;
    if(titleInput) titleInput.value = "";
    if(descriptionInput) descriptionInput.value = "";
    if(fileInput) fileInput.value = "";
    render();
    showToast("تحفظ المحتوى وولا ظاهر للطلاب داخل الدرس المختار.");
  }catch(error){
    console.error("Admin content upload failed:", error);
    showToast("ما قدرناش نحفظو الملف: " + (error.message || error.code || "خطأ غير معروف") + " · تأكد من Firebase Rules.");
  }finally{
    if(button){button.disabled=false;button.textContent="حفظ وإظهار للطلاب";}
  }
}
async function deleteAdminContent(id){
  if(!currentUser || currentUser.role !== "admin" || !firebaseReady || !id) return;
  const item = adminContentMeta[id];
  if(!item) return;
  if(!window.confirm(`حذف "${item.title || item.fileName || "المحتوى"}" من المنصة؟`)) return;
  try{
    const updates = {};
    updates[`${DEUTSCH_A1_PATH}/contentMeta/${id}`] = null;
    updates[`${DEUTSCH_A1_PATH}/contentFiles/${id}`] = null;
    await firebaseDb.ref().update(updates);
    delete adminContentMeta[id];
    render();
    showToast("تحذف المحتوى من مكتبة المنصة.");
  }catch(error){
    showToast("ما قدرناش نحذفو المحتوى: " + (error.message || error.code || "خطأ غير معروف"));
  }
}
function decodeBase64Utf8(base64){
  const binary = atob(String(base64 || ""));
  const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
  return new TextDecoder("utf-8").decode(bytes);
}

function customTestResultsBridgeScript(meta){
  const config = {
    id:String(meta && meta.id || ""),
    title:String(meta && meta.title || "اختبار إضافي"),
    lessonNumber:Number(meta && meta.lessonNumber) || 0
  };
  const safeConfig = JSON.stringify(config)
    .replace(/</g,"\\u003c")
    .replace(/\u2028/g,"\\u2028")
    .replace(/\u2029/g,"\\u2029");
  return `<script>
(function(){
  "use strict";
  const config=${safeConfig};
  const attemptId="admin-html-"+config.id+"-"+Date.now()+"-"+Math.random().toString(36).slice(2,10);
  const exerciseScores=Object.create(null);
  function send(report){
    const input=report && typeof report==="object" ? report : {};
    const points=Number(input.points ?? input.score ?? input.correct ?? 0);
    const maxPoints=Number(input.maxPoints ?? input.totalPoints ?? input.total ?? 0);
    if(!Number.isFinite(points)||!Number.isFinite(maxPoints)||maxPoints<=0) return false;
    const payload={
      type:"deutsch-a1-progress-report",
      moduleId:"custom-test-"+config.id+"-lektion-"+config.lessonNumber,
      title:config.title+" · Lektion "+config.lessonNumber,
      lessonNumber:config.lessonNumber,
      customContentId:config.id,
      contentType:"test",
      activityType:"test",
      source:"admin-custom-test",
      points:Math.max(0,points),
      maxPoints:Math.max(0,maxPoints),
      completedExercises:Number(input.completedExercises)||0,
      totalExercises:Number(input.totalExercises)||0,
      completed:input.completed && typeof input.completed==="object" ? input.completed : {},
      visited:input.visited && typeof input.visited==="object" ? input.visited : {},
      visitedStages:input.visitedStages && typeof input.visitedStages==="object" ? input.visitedStages : {},
      exerciseSeconds:input.exerciseSeconds && typeof input.exerciseSeconds==="object" ? input.exerciseSeconds : {},
      scores:input.scores && typeof input.scores==="object" ? input.scores : {},
      scoreTotals:input.scoreTotals && typeof input.scoreTotals==="object" ? input.scoreTotals : {},
      exerciseLabels:input.exerciseLabels && typeof input.exerciseLabels==="object" ? input.exerciseLabels : {},
      stageByExercise:input.stageByExercise && typeof input.stageByExercise==="object" ? input.stageByExercise : {},
      stageLabels:input.stageLabels && typeof input.stageLabels==="object" ? input.stageLabels : {},
      attemptId,
      updatedAt:new Date().toISOString()
    };
    try{window.parent.postMessage(payload,"*");return true;}catch(error){console.error("Deutsch A1 result bridge:",error);return false;}
  }
  window.DeutschA1Results=window.DeutschA1Results||{};
  window.DeutschA1Results.submit=function(report,maxPoints){
    if(typeof report==="number") return send({points:report,maxPoints});
    return send(report);
  };
  window.DeutschA1Results.complete=window.DeutschA1Results.submit;
  window.DeutschA1Results.update=window.DeutschA1Results.submit;

  // Automatic compatibility with the existing lesson HTML tests:
  // finish(exerciseId, correctAnswers, totalQuestions)
  function hookExistingFinish(){
    if(typeof window.finish!=="function" || window.finish.__deutschA1ResultBridge) return;
    const originalFinish=window.finish;
    const wrappedFinish=function(id,correct,total){
      const output=originalFinish.apply(this,arguments);
      const key=String(id||("exercise-"+Object.keys(exerciseScores).length));
      const right=Math.max(0,Number(correct)||0);
      const max=Math.max(0,Number(total)||0);
      if(max>0){
        exerciseScores[key]={correct:right,total:max};
        const scoreTotals={},scores={},completed={},exerciseLabels={},stageByExercise={};
        let points=0,maxPoints=0;
        Object.entries(exerciseScores).forEach(([exerciseId,value])=>{
          points+=value.correct;maxPoints+=value.total;
          scores[exerciseId]={correct:value.correct,total:value.total};
          scoreTotals[exerciseId]=value.total;
          completed[exerciseId]=true;
          const node=document.getElementById(exerciseId);
          const heading=node && node.querySelector("h2,h3,h4,.exercise-title");
          exerciseLabels[exerciseId]=heading ? String(heading.textContent||"").trim() : exerciseId;
          stageByExercise[exerciseId]="custom-html-test";
        });
        const totalExercises=document.querySelectorAll("[data-exercise-stars]").length || Object.keys(exerciseScores).length;
        send({
          points,maxPoints,
          completedExercises:Object.keys(exerciseScores).length,
          totalExercises,
          completed,
          scores,
          scoreTotals,
          exerciseLabels,
          stageByExercise,
          stageLabels:{"custom-html-test":"اختبار HTML إضافي"}
        });
      }
      return output;
    };
    wrappedFinish.__deutschA1ResultBridge=true;
    window.finish=wrappedFinish;
  }
  hookExistingFinish();
  document.addEventListener("DOMContentLoaded",hookExistingFinish,{once:true});
})();
</script>`;
}
function injectCustomTestResultsBridge(html,meta){
  const source=String(html||"");
  const bridge=customTestResultsBridgeScript(meta);
  const bodyClose=source.search(/<\/body\s*>/i);
  if(bodyClose>=0) return source.slice(0,bodyClose)+bridge+source.slice(bodyClose);
  const htmlClose=source.search(/<\/html\s*>/i);
  if(htmlClose>=0) return source.slice(0,htmlClose)+bridge+source.slice(htmlClose);
  return source+bridge;
}
async function openCustomContent(id){
  if(!currentUser || !firebaseReady) return;
  const meta = adminContentMeta[id];
  if(!meta || meta.active === false){showToast("هاد المحتوى ما بقاش متاح.");return;}
  const lessonIndex = Number(meta.lessonNumber) - 1;
  if(currentUser.role === "student" && !getStudentLessonAccess(lessonIndex)){
    showToast("هاد الدرس مقفل حالياً من طرف الإدارة.");return;
  }
  activeCustomContentMeta = {...meta, id:String(meta.id || id)};
  activeCustomContentFile = null;
  customContentReturnPage = page || "lesson-hub";
  page = "custom-content";
  render();
  try{
    const fileSnap = await firebaseDb.ref(`${DEUTSCH_A1_PATH}/contentFiles/${id}`).once("value");
    activeCustomContentFile = fileSnap.val();
    if(!activeCustomContentFile?.base64) throw new Error("ملف المحتوى غير موجود.");
    render();
  }catch(error){
    console.error("Custom content open failed:", error);
    showToast("ما قدرناش نفتح الملف: " + (error.message || error.code || "خطأ غير معروف"));
  }
}
function renderCustomContentPage(){
  const meta = activeCustomContentMeta;
  const file = activeCustomContentFile;
  if(!meta){
    page = "lesson-hub";
    return render();
  }
  if(!file){
    app.innerHTML = pageShell("محتوى الدرس", escapeHtml(meta.title || "محتوى إضافي"), "جاري تحميل الملف...", `<div class="custom-content-loading">جاري فتح المحتوى...</div>`);
    return;
  }
  const dataUrl = `data:${file.mimeType || meta.mimeType};base64,${file.base64}`;
  const fileName = escapeHtml(meta.fileName || "content");
  let viewer = "";
  if(meta.mimeType === "text/html"){
    viewer = `<iframe id="customContentHtmlFrame" class="custom-content-html-frame" title="${escapeHtml(meta.title)}" sandbox="allow-scripts allow-forms" referrerpolicy="no-referrer"></iframe>`;
  }else if(String(meta.mimeType || "").startsWith("image/")){
    viewer = `<div class="custom-content-image-wrap"><img src="${dataUrl}" alt="${escapeHtml(meta.title)}"></div>`;
  }else if(String(meta.mimeType || "").startsWith("audio/")){
    viewer = `<div class="custom-content-audio-wrap"><div class="custom-content-audio-icon">🎧</div><h3>${escapeHtml(meta.title || "ملف صوتي")}</h3><audio class="custom-content-audio-player" controls preload="metadata" src="${dataUrl}">المتصفح لا يدعم تشغيل الصوت.</audio></div>`;
  }else{
    viewer = `<iframe class="custom-content-pdf-frame" title="${escapeHtml(meta.title)}" src="${dataUrl}"></iframe>`;
  }
  const content = `<div class="custom-content-viewer-actions"><span>${customContentFileTypeLabel(meta)} · Lektion ${Number(meta.lessonNumber)}</span><a class="outline-btn" href="${dataUrl}" download="${fileName}">تحميل الملف</a><button class="back-btn" type="button" data-action="custom-content-back">رجوع</button></div>${viewer}`;
  app.innerHTML = pageShell(meta.kind === "test" ? "اختبار إضافي" : "درس إضافي", escapeHtml(meta.title || "محتوى إضافي"), escapeHtml(meta.description || lessons[Number(meta.lessonNumber)-1]?.name || ""), content);
  if(meta.mimeType === "text/html"){
    const frame = document.getElementById("customContentHtmlFrame");
    if(frame){
      const originalHtml = decodeBase64Utf8(file.base64);
      const isTestContent = meta.area === "test" || meta.kind === "test";
      frame.srcdoc = isTestContent
        ? injectCustomTestResultsBridge(originalHtml, meta)
        : originalHtml;
    }
  }
}

function renderLevels(){
  const content = `<div class="level-grid">
    <button class="level-card" data-action="level" data-level="A1.1">
      <div class="level-icon">A1.1</div><h3>A1.1</h3><p>Der erste Schritt: Grundlagen, einfache Wörter und erste Sätze.</p>
      <div class="card-foot"><span>Lektionen 1–5</span><span>↗</span></div>
    </button>
    <button class="level-card" data-action="level" data-level="A1.2">
      <div class="level-icon">A1.2</div><h3>A1.2</h3><p>Weiterlernen: Alltag, Freizeit, Einkaufen und mehr.</p>
      <div class="card-foot"><span>Lektionen 6–10</span><span>↗</span></div>
    </button>
    <button class="level-card" data-action="level-path" data-level="A2">
      <div class="level-icon">A2</div><h3>A2</h3><p>Vier interaktive Lektionen mit Bild und deutscher Aussprache.</p>
      <div class="card-foot"><span>Lektionen 2–5</span><span>↗</span></div>
    </button>
  </div>`;
  app.innerHTML = pageShell("مستواك","اختر مسارك","A1 يضم عشرة دروس، وأُضيفت أربعة دروس تفاعلية من مستوى A2.",content);
}
function levelLabel(){ return selectedLevel==="A1.1" ? "Grundlagen" : "Weiterlernen"; }
function renderLevelHome(){
  const lessonMeta = [
    {title:"التحية والتعارف", desc:"التعريف بنفسك وبلدك", icon:"🤝"},
    {title:"العائلة", desc:"التحدث عن الأسرة", icon:"👨‍👩‍👧"},
    {title:"السكن والمنزل", desc:"الغرف والأثاث ووصف البيت", icon:"🏠"},
    {title:"الأكل والشرب", desc:"الطعام والشراب والطلبات", icon:"🍽️"},
    {title:"الحياة اليومية", desc:"الروتين اليومي والوقت", icon:"⏰"},
    {title:"وقت الفراغ والهوايات", desc:"الأنشطة والرياضة والهوايات", icon:"⚽"},
    {title:"التسوق", desc:"الشراء والأسعار والمقاسات", icon:"🛍️"},
    {title:"العمل والمهنة", desc:"المهن والعمل والحياة المهنية", icon:"💼"},
    {title:"المدينة والمواصلات", desc:"الأماكن والتنقل ووسائل النقل", icon:"🚆"},
    {title:"الصحة والمواعيد", desc:"الصحة والأعراض وحجز المواعيد", icon:"🩺"}
  ];
  const resultRows = Object.values(readStudentResults(currentUser?.id || "") || {}).filter(item=>item && typeof item==="object");
  const completedForLesson = index => resultRows.some(result=>{
    if(adminResultLessonIndex(result)!==index) return false;
    const completedMap = result.completed && typeof result.completed==="object" ? result.completed : {};
    const total = Number(result.totalExercises) || Object.keys(completedMap).length;
    const completed = Number(result.completedExercises) || Object.values(completedMap).filter(Boolean).length;
    return result.completed===true || (total>0 && completed>=total);
  });
  const statuses = lessons.map((lesson,index)=>({
    index,
    unlocked:getStudentLessonAccess(index),
    completed:completedForLesson(index)||!!getCourseProgress("A1",index+1)?.completed
  }));
  const currentIndex = statuses.find(item=>item.unlocked && !item.completed)?.index ?? -1;
  const firstUnlockedIndex = statuses.find(item=>item.unlocked)?.index ?? -1;
  const nextLessonIndex = currentIndex >= 0 ? currentIndex : firstUnlockedIndex;
  const completedCount = statuses.filter(item=>item.completed).length;
  const progress = lessons.length ? Math.round(completedCount/lessons.length*100) : 0;
  const lessonCards = statuses.map(item=>{
    const meta = lessonMeta[item.index] || {title:lessons[item.index]?.name || `الدرس ${item.index+1}`,desc:"",icon:"📘"};
    const state = !item.unlocked ? "locked" : item.completed ? "completed" : item.index===currentIndex ? "current" : "available";
    const saved=getCourseProgress("A1",item.index+1);
    const stateLabel = state === "locked" ? "مقفل" : state === "completed" ? "مكتمل" : saved?.startedAt ? `متابعة ${courseProgressPercent(saved)}%` : state === "current" ? "قيد التعلّم" : "متاح";
    const stateIcon = state === "locked" ? "🔒" : state === "completed" ? "✓" : state === "current" ? "●" : "•";
    const disabled = item.unlocked ? "" : "disabled";
    return `<button type="button" class="level-lesson-card is-${state}" data-action="lesson" data-lesson="${item.index}" ${disabled} aria-label="${escapeHtml(`الدرس ${item.index+1}: ${meta.title} · ${stateLabel}`)}">
      <span class="level-lesson-art" aria-hidden="true">${meta.icon}</span>
      <span class="level-lesson-copy">
        <span class="level-lesson-number">الدرس ${item.index+1}</span>
        <strong>${escapeHtml(meta.title)}</strong>
        <small>${escapeHtml(meta.desc || lessons[item.index]?.name || "")}</small>
      </span>
      <span class="level-lesson-side">
        <span class="level-lesson-status is-${state}"><i aria-hidden="true">${stateIcon}</i>${stateLabel}</span>
        <span class="level-lesson-arrow" aria-hidden="true">${item.unlocked ? "←" : "🔒"}</span>
      </span>
    </button>`;
  }).join("");
  const nextCta = nextLessonIndex >= 0
    ? `<button type="button" class="level-next-cta" data-action="lesson" data-lesson="${nextLessonIndex}">
        <span class="level-next-cta-icon" aria-hidden="true">←</span>
        <span class="level-next-cta-copy"><strong>${currentIndex >= 0 ? "ابدأ الدرس التالي" : "راجع الدروس"}</strong><small>${currentIndex >= 0 ? `الدرس ${nextLessonIndex+1} · ${escapeHtml(lessonMeta[nextLessonIndex]?.title || lessons[nextLessonIndex]?.name || "")}` : "يمكنك إعادة أي درس متاح"}</small></span>
        <span class="level-next-cta-spark" aria-hidden="true">✦</span>
      </button>`
    : `<div class="level-complete-note"><span aria-hidden="true">🏆</span><strong>أحسنت! أكملت جميع الدروس</strong></div>`;

  app.innerHTML = `<div class="student-app level-home-app" dir="rtl">
    <header class="level-screen-topbar">
      <button type="button" class="level-screen-back" data-action="back" aria-label="رجوع"><span aria-hidden="true">←</span></button>
      <div class="level-screen-title"><small>مسارك التعليمي</small><strong>مستوى A1</strong></div>
    </header>
    <main class="level-home-main">
      <section class="level-hero" aria-labelledby="levelHeroTitle">
        <div class="level-hero-visual" aria-hidden="true">
          <span class="level-hero-orbit"></span>
          <span class="level-hero-cap">🎓</span>
          <span class="level-hero-book">📚</span>
          <span class="level-hero-star">✦</span>
        </div>
        <div class="level-hero-copy">
          <span class="level-hero-kicker"><i aria-hidden="true"></i> رحلتك تبدأ من هنا</span>
          <h1 id="levelHeroTitle"><strong>A1</strong><span>المستوى الأساسي</span></h1>
          <p>ابدأ رحلتك في تعلّم الألمانية، خطوة بخطوة.</p>
          <div class="level-hero-tags"><span>${lessons.length} دروس</span><span>أساسيات اللغة</span></div>
        </div>
      </section>

      <section class="level-progress-card" aria-label="تقدمك في المستوى A1">
        <div class="level-progress-top">
          <div class="level-progress-title">
            <span class="level-progress-icon" aria-hidden="true">▥</span>
            <span><strong>تقدمك في المستوى</strong><small>${completedCount} من ${lessons.length} دروس مكتملة</small></span>
          </div>
          <span class="level-progress-percent">${progress}%</span>
        </div>
        <div class="level-progress-track" role="progressbar" aria-label="نسبة التقدم في المستوى A1" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}"><span style="width:${progress}%"></span></div>
      </section>

      <section class="level-lessons-section">
        <div class="level-lessons-heading">
          <div><span class="level-section-kicker">خطتك التعليمية</span><h2>دروس المستوى <b>${lessons.length}</b></h2></div>
          <small>تابع من حيث توقفت</small>
        </div>
        <div class="level-lessons-list">${lessonCards}</div>
      </section>
    </main>
    <div class="level-next-cta-wrap">${nextCta}</div>
  </div>`;
}
function renderLessons(){
  const list = levelLessons().map(idx => {
    const unlocked=getStudentLessonAccess(idx);
    return `<button class="lesson-card ${unlocked?"":"lesson-locked"}" data-action="lesson" data-lesson="${idx}" ${unlocked?"":"disabled"}>
      <span class="lesson-number">${String(idx+1).padStart(2,"0")}</span>
      <h3>Lektion ${idx+1} ${unlocked?"":"🔒"}</h3><p>${escapeHtml(lessons[idx].name)}</p>
      <div class="level-menu-foot"><span>${unlocked?"Kurs · Podcast · Test":"Vom Administrator gesperrt"}</span><span>${unlocked?"→":"🔒"}</span></div>
    </button>`;
  }).join("");
  const content = `<div class="pill">✦ ${selectedLevel} <span>·</span> ${levelLabel()}</div><div class="lesson-grid">${list}</div>`;
  app.innerHTML = pageShell("مسارك التعليمي",selectedLevel,"اختار درساً، وستجد داخله الشرح والاستماع والاختبار.",content);
}
const lessonSectionPageConfig = {
  course: {folder:"Kurs", suffix:"kurs", label:"Kurs", title:"الكورس", icon:"📚"},
  test: {folder:"Test", suffix:"test", label:"Test", title:"الاختبار", icon:"✓"},
  podcast: {folder:"Podcast", suffix:"podcast", label:"Podcast", title:"Podcast", icon:"🎧"},
  speaking: {folder:"Sprechen", suffix:"sprechen", label:"Sprechen", title:"المحادثة", icon:"🎙️"}
};
function getLessonSectionPagePath(section, lessonNo){
  const config = lessonSectionPageConfig[section];
  if(!config) return "";
  const no = Number(lessonNo || lessonNumber());
  if(!Number.isInteger(no) || no < 1 || no > lessons.length) return "";
  if(section === "test"){
    const routes = getAdminTestPageRoutes();
    const assigned = normalizeManagedPagePath(routes[String(no)] || "");
    if(assigned) return assigned;
  }
  return `pages/${config.folder}/lektion-${no}-${config.suffix}.html`;
}
function openLessonSectionPage(section){
  if(!getStudentLessonAccess(currentLesson)){
    showToast("Diese Lektion wurde vom Administrator gesperrt.");
    return;
  }
  if(!lessonSectionPageConfig[section]){
    showToast("هذا القسم غير متاح حالياً.");
    return;
  }
  const launch=()=>{
    lessonSectionType=section;
    lessonSectionReturnPage="lesson-hub";
    page="lesson-section-html";
    render();
  };
  if(section==="course")askCourseResume("A1",lessonNumber(),launch);
  else launch();
}
function renderLessonSectionHtmlPage(){
  const config = lessonSectionPageConfig[lessonSectionType] || lessonSectionPageConfig.course;
  const path = getLessonSectionPagePath(lessonSectionType, lessonNumber());
  if(!path){
    page = lessonSectionReturnPage || "lesson-hub";
    return render();
  }
  document.documentElement.classList.add("challenge-fullscreen-open");
  document.body.classList.add("challenge-fullscreen-open");
  app.innerHTML = `<div class="challenge-fullscreen-shell lesson-section-fullscreen-shell">
    <iframe id="lessonSectionPageFrame" title="${escapeHtml(config.label)} – Lektion ${lessonNumber()}" loading="eager" allow="autoplay; fullscreen"></iframe>
  </div>`;
  const frame = document.getElementById("lessonSectionPageFrame");
  if(frame){
    if(lessonSectionType==="course")trackCourseIframe(frame,"A1",lessonNumber());
    loadManagedPageIntoFrame(frame, path);
  }
}

function renderLessonHub(){
  const unlocked=getStudentLessonAccess(currentLesson);
  if(!unlocked){
    app.innerHTML=pageShell(`Lektion ${lessonNumber()}`,escapeHtml(lessonData().name),"هذا الدرس مقفل حالياً من طرف الإدارة.",`<div class="empty-state">اختار درساً متاحاً للمتابعة.</div>`);
    return;
  }

  const arabicTitles=[
    "التحية والتعارف","العائلة والأسرة","الطعام والشراب","السكن والمنزل","وقت الفراغ والهوايات",
    "الحياة اليومية","التسوق والشراء","العمل والمهن","المدينة والمواصلات","الصحة والمواعيد"
  ];
  const heroIcons=["👋","👨‍👩‍👧","🥐","🏡","⚽","⏰","🛍️","💼","🚌","🩺"];
  const arabicDescriptions=[
    "تعلّم عبارات التحية والتعارف وتقديم نفسك بالألمانية.",
    "تعلّم كيف تتحدث عن عائلتك وأفرادها.",
    "تعرّف على أسماء الأطعمة والمشروبات وكيفية الطلب.",
    "تعلّم وصف المنزل والغرف والأثاث.",
    "تحدّث عن وقت الفراغ والهوايات والأنشطة.",
    "تعلّم الحديث عن الروتين اليومي والوقت والعمل.",
    "تعلّم التسوق والسؤال عن الأسعار والكميات.",
    "تعرّف على المهن ومكان العمل والخبرة.",
    "تعلّم السؤال عن الطريق ووسائل النقل.",
    "تعلّم وصف الحالة الصحية وحجز المواعيد."
  ];
  const arabicTitle=arabicTitles[currentLesson]||lessonData().name;
  const heroIcon=heroIcons[currentLesson]||"📘";
  const shortIntro=arabicDescriptions[currentLesson]||"تعلّم أهم الكلمات والعبارات واستعملها في مواقف الحياة اليومية.";
  const levelShort=(selectedLevel||"A1.1").split(".")[0];
  const hasDedicatedLessonTest=[5,6,7,8].includes(currentLesson);

  const savedCourse=getCourseProgress("A1",lessonNumber());
  const savedCoursePercent=courseProgressPercent(savedCourse);
  const stages=[
    {id:"explanation",number:"1",title:"شرح الدرس",desc:`تعلّم أهم العبارات حول ${arabicTitle} مع شرح وأمثلة واضحة.`,icon:"📖",tone:"blue",status:"ابدأ الآن",statusIcon:"▶"},
    {id:"vocabulary",number:"2",title:"المفردات المهمة",desc:"أهم الكلمات مع النطق والترجمة والأمثلة.",icon:"🏷️",tone:"green",status:"المفردات",statusIcon:"Aa"},
    {id:"practice",number:"3",title:"تمارين تطبيقية",desc:hasDedicatedLessonTest?"حل الاختبار التفاعلي الخاص بهذا الدرس وتعرّف على نتيجتك.":"اختبر فهمك وطبّق ما تعلّمته في الدرس.",icon:"📝",tone:"amber",status:hasDedicatedLessonTest?"ابدأ الاختبار":"تدرّب",statusIcon:"✓"},
    {id:"speaking",number:"4",title:"المحادثة العملية",desc:"تدرّب على الحوار مع المعلّم الذكي وصحّح جملك.",icon:"🤖",tone:"pink",status:"تحدّث",statusIcon:"💬"}
  ];
  const stageMarkup=stages.map((stage,index)=>`
    <button type="button" class="lesson-detail-stage lesson-detail-stage-${stage.tone} ${index===0?"is-primary":""}"
      data-action="lesson-stage-open" data-stage="${stage.id}" aria-label="${escapeHtml(stage.title)}">
      <span class="lesson-detail-stage-icon" aria-hidden="true">${stage.icon}</span>
      <span class="lesson-detail-stage-copy">
        <strong>${stage.number}. ${stage.title}</strong>
        <small>${escapeHtml(stage.desc)}</small>
      </span>
      <span class="lesson-detail-stage-status"><i aria-hidden="true">${stage.statusIcon}</i>${stage.status}</span>
      <span class="lesson-detail-stage-arrow" aria-hidden="true">←</span>
    </button>`).join("");

  const content=`
    <section class="lesson-detail-page" aria-label="محتوى الدرس">
      <header class="lesson-detail-topbar">
        <button type="button" class="lesson-detail-back" data-action="back" aria-label="رجوع">←</button>
        <button type="button" class="lesson-detail-podcast-mini" data-action="open-lesson-podcasts" aria-label="Podcast الدرس" title="Podcast الدرس">🎧</button>
        <div class="lesson-detail-level-label"><strong>${escapeHtml(levelShort)}</strong><span>مستوى</span></div>
      </header>

      <section class="lesson-detail-hero">
        <div class="lesson-detail-hero-copy">
          <span class="lesson-detail-hero-badge">${escapeHtml(selectedLevel||"A1.1")}</span>
          <h1>الدرس ${lessonNumber()}</h1>
          <h2>${escapeHtml(arabicTitle)}</h2>
          <p dir="ltr">${escapeHtml(lessonData().name)}</p>
          <small>${escapeHtml(shortIntro)}</small>
        </div>
        <div class="lesson-detail-hero-art" aria-hidden="true">
          <span class="lesson-detail-art-spark">✦</span>
          <span class="lesson-detail-art-bubble">Hallo!</span>
          ${currentLesson===0?`<span class="lesson-detail-art-person person-one">👨🏻‍🎓</span><span class="lesson-detail-art-person person-two">👩🏻‍🎓</span>`:`<span class="lesson-detail-art-topic">${heroIcon}</span>`}
        </div>
      </section>

      <section class="lesson-detail-progress-card" aria-label="تقدمك في الدرس">
        <div class="lesson-detail-progress-ring"><strong>${savedCoursePercent}%</strong></div>
        <div class="lesson-detail-progress-copy">
          <strong>تقدمك في الدرس</strong>
          <small>${savedCourse?.completed?"تمّ إكمال الكورس ✓":savedCourse?.startedAt?"تقدّمك محفوظ، تقدر تكمل منين وقفتي":"تقدّم الكورس كيتسجل تلقائياً"}</small>
          <div class="lesson-detail-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${savedCoursePercent}"><span style="width:${savedCoursePercent}%"></span></div>
        </div>
      </section>

      <div class="lesson-detail-content-heading"><h2>محتوى الدرس</h2><span aria-hidden="true">▱</span></div>
      <div class="lesson-detail-stage-list">${stageMarkup}</div>

      <div class="lesson-detail-footer">
        <button type="button" class="lesson-detail-start" data-action="lesson-stage-open" data-stage="explanation">
          <span aria-hidden="true">▶</span><strong>${savedCourse?.startedAt&&!savedCourse?.completed?"متابعة الكورس":"ابدأ شرح الدرس"}</strong><i aria-hidden="true">←</i>
        </button>
      </div>
    </section>`;
  app.innerHTML=`<div class="student-app lesson-detail-app" dir="rtl"><main class="student-main lesson-detail-main">${content}</main></div>`;
}
function selectPodcast(type,id){
  const normalizedType = type === "custom" ? "custom" : "builtin";
  let lessonNo = null;
  if(normalizedType === "builtin"){
    const item = podcastLibrary.find(entry=>entry.id===String(id));
    if(!item){showToast("هاد Podcast ما لقيناهش.");return;}
    lessonNo = Number(item.lesson);
  }else{
    const item = customContentEntries("lesson",null,"podcast").find(entry=>entry.id===String(id));
    if(!item){showToast("هاد الملف ما بقاش متاح.");return;}
    lessonNo = Number(item.lessonNumber);
  }
  activePodcastSelection = {type:normalizedType,id:String(id||"")};
  activePodcastFile = null;
  activePodcastLoading = normalizedType === "custom";
  activePodcastError = "";
  if(Number.isInteger(lessonNo) && lessonNo>=1 && lessonNo<=lessons.length){
    currentLesson = lessonNo-1;
    selectedLevel = currentLesson<5 ? "A1.1" : "A1.2";
  }
  render();
  if(normalizedType !== "custom") return;
  if(!firebaseReady){
    activePodcastLoading = false;
    activePodcastError = "تعذر الاتصال بقاعدة البيانات لفتح ملف Podcast.";
    render();
    return;
  }
  firebaseDb.ref(`${DEUTSCH_A1_PATH}/contentFiles/${id}`).once("value")
    .then(snapshot=>{
      if(!activePodcastSelection || activePodcastSelection.type!=="custom" || activePodcastSelection.id!==String(id)) return;
      const file = snapshot.val();
      if(!file || !file.base64) throw new Error("ملف الصوت غير موجود في Firebase.");
      activePodcastFile = file;
      activePodcastLoading = false;
      activePodcastError = "";
      render();
    })
    .catch(error=>{
      if(!activePodcastSelection || activePodcastSelection.type!=="custom" || activePodcastSelection.id!==String(id)) return;
      console.error("Podcast file load failed:",error);
      activePodcastLoading = false;
      activePodcastError = error.message || "ما قدرناش نفتحو ملف Podcast.";
      render();
    });
}
function renderPodcastInlinePlayer(){
  if(!activePodcastSelection) return `<div class="podcast-player-empty"><span>🎧</span><strong>اختار Podcast من اللائحة</strong><p>الصوت والنص غادي يبانوا هنا، بلا ما تخرج من هاد الصفحة.</p></div>`;
  const selection = activePodcastSelection;
  if(selection.type === "builtin"){
    const item = podcastLibrary.find(entry=>entry.id===selection.id);
    if(!item) return "";
    const player = item.format === "html"
      ? `<iframe id="podcastInlineFrame" class="podcast-inline-frame" title="${escapeHtml(item.title)}" src="${escapeHtml(item.file)}" loading="lazy" allow="autoplay"></iframe>`
      : `<audio class="podcast-inline-audio" controls preload="metadata" src="${escapeHtml(item.file)}">المتصفح لا يدعم تشغيل الصوت.</audio>`;
    return `<section class="podcast-inline-player"><div class="podcast-inline-head"><div><span class="podcast-inline-kicker">NOW PLAYING · LEKTION ${item.lesson}</span><h2>${escapeHtml(item.title)}</h2></div><button class="podcast-close-player" type="button" data-action="podcast-close-player" aria-label="إغلاق المشغل">×</button></div>${player}</section>`;
  }
  const meta = customContentEntries("lesson",null,"podcast").find(entry=>entry.id===selection.id);
  if(!meta) return "";
  if(activePodcastLoading) return `<section class="podcast-inline-player"><div class="podcast-inline-loading">جاري تحميل Podcast من Firebase...</div></section>`;
  if(activePodcastError) return `<section class="podcast-inline-player"><div class="podcast-inline-error">${escapeHtml(activePodcastError)}</div></section>`;
  if(!activePodcastFile?.base64) return `<section class="podcast-inline-player"><div class="podcast-inline-loading">اختار الملف مرة أخرى لفتحه.</div></section>`;
  const mime = String(activePodcastFile.mimeType || meta.mimeType || "");
  const dataUrl = `data:${mime};base64,${activePodcastFile.base64}`;
  let viewer = "";
  if(mime.startsWith("audio/")){
    viewer = `<audio class="podcast-inline-audio" controls preload="metadata" src="${dataUrl}">المتصفح لا يدعم تشغيل الصوت.</audio>`;
  }else if(mime === "text/html"){
    viewer = `<iframe id="podcastInlineFrame" class="podcast-inline-frame" title="${escapeHtml(meta.title)}" sandbox="allow-scripts allow-forms" referrerpolicy="no-referrer"></iframe>`;
  }else if(mime.startsWith("image/")){
    viewer = `<div class="podcast-inline-image"><img src="${dataUrl}" alt="${escapeHtml(meta.title)}"></div>`;
  }else if(mime === "application/pdf"){
    viewer = `<iframe class="podcast-inline-frame podcast-inline-pdf" title="${escapeHtml(meta.title)}" src="${dataUrl}"></iframe>`;
  }else{
    viewer = `<div class="podcast-inline-error">صيغة الملف ما كتدعمش العرض داخل Podcast.</div>`;
  }
  return `<section class="podcast-inline-player"><div class="podcast-inline-head"><div><span class="podcast-inline-kicker">مضاف من ADMIN · LEKTION ${Number(meta.lessonNumber)}</span><h2>${escapeHtml(meta.title || "Podcast")}</h2><p>${escapeHtml(meta.description || customContentFileTypeLabel(meta))}</p></div><button class="podcast-close-player" type="button" data-action="podcast-close-player" aria-label="إغلاق المشغل">×</button></div>${viewer}</section>`;
}
function enterPodcastPage(returnPage,lessonNo=null){
  podcastReturnPage = returnPage || "levels";
  podcastFilterLesson = Number.isInteger(Number(lessonNo)) && Number(lessonNo)>=1 && Number(lessonNo)<=lessons.length ? Number(lessonNo) : null;
  activePodcastSelection = null;
  activePodcastFile = null;
  activePodcastLoading = false;
  activePodcastError = "";
  page = "podcasts";
  render();
  // Refresh the metadata whenever the page opens so students already logged in
  // can see podcasts that the administrator has just added.
  if(firebaseReady){
    firebaseDb.ref(`${DEUTSCH_A1_PATH}/contentMeta`).once("value")
      .then(snapshot=>{
        adminContentMeta = snapshot.val() || {};
        if(page === "podcasts") render();
      })
      .catch(error=>console.warn("Podcast metadata refresh failed:",error));
  }
}
function renderLessonPodcasts(){
  enterPodcastPage("lesson-hub",lessonNumber());
}
function renderPodcastFullscreenSelection(){
  if(!activePodcastSelection) return "";
  const selection=activePodcastSelection;
  if(selection.type==="builtin"){
    const item=podcastLibrary.find(entry=>entry.id===selection.id);
    if(!item) return `<div class="podcast-fullscreen-message">هاد Podcast ما بقاش متاح.</div>`;
    return `<div class="podcast-fullscreen-player"><iframe class="podcast-fullscreen-frame" title="${escapeHtml(item.title)}" src="${escapeHtml(item.file)}" loading="eager" allow="autoplay; fullscreen"></iframe></div>`;
  }
  const meta=customContentEntries("lesson",null,"podcast").find(entry=>entry.id===selection.id);
  if(!meta) return `<div class="podcast-fullscreen-message">هاد الملف ما بقاش متاح.</div>`;
  if(activePodcastLoading) return `<div class="podcast-fullscreen-message">جاري تحميل Podcast من Firebase...</div>`;
  if(activePodcastError) return `<div class="podcast-fullscreen-message podcast-fullscreen-error">${escapeHtml(activePodcastError)}</div>`;
  if(!activePodcastFile?.base64) return `<div class="podcast-fullscreen-message">ما قدرناش نحمّلو هاد الملف. رجع للائحة وعاود اختارو.</div>`;
  const mime=String(activePodcastFile.mimeType||meta.mimeType||"");
  const dataUrl=`data:${mime};base64,${activePodcastFile.base64}`;
  if(mime.startsWith("audio/")){
    return `<div class="podcast-fullscreen-audio-panel"><div class="podcast-fullscreen-audio-copy"><span>HÖREN · LEKTION ${Number(meta.lessonNumber)||"—"}</span><h2>${escapeHtml(meta.title||"Podcast")}</h2><p>${escapeHtml(meta.description||"ملف صوتي مضاف من Admin")}</p><audio class="podcast-fullscreen-audio" controls preload="metadata" src="${dataUrl}">المتصفح لا يدعم تشغيل الصوت.</audio></div></div>`;
  }
  if(mime==="text/html"){
    return `<div class="podcast-fullscreen-player"><iframe id="podcastFullscreenFrame" class="podcast-fullscreen-frame" title="${escapeHtml(meta.title||"Podcast")}" sandbox="allow-scripts allow-forms" referrerpolicy="no-referrer"></iframe></div>`;
  }
  if(mime.startsWith("image/")){
    return `<div class="podcast-fullscreen-image"><img src="${dataUrl}" alt="${escapeHtml(meta.title||"Podcast")}"></div>`;
  }
  if(mime==="application/pdf"){
    return `<div class="podcast-fullscreen-player"><iframe class="podcast-fullscreen-frame" title="${escapeHtml(meta.title||"Podcast")}" src="${dataUrl}"></iframe></div>`;
  }
  return `<div class="podcast-fullscreen-message">صيغة الملف ما كتدعمش العرض داخل Podcast.</div>`;
}
function exitPodcastFullscreen(){
  document.documentElement.classList.remove("challenge-fullscreen-open");
  document.body.classList.remove("challenge-fullscreen-open");
  podcastFilterLesson=null;
  activePodcastSelection=null;
  activePodcastFile=null;
  activePodcastLoading=false;
  activePodcastError="";
  page=podcastReturnPage||"levels";
  render();
}
function returnPodcastToList(){
  activePodcastSelection=null;
  activePodcastFile=null;
  activePodcastLoading=false;
  activePodcastError="";
  renderPodcasts();
}
function renderPodcasts(){
  document.documentElement.classList.add("challenge-fullscreen-open");
  document.body.classList.add("challenge-fullscreen-open");
  const selected=!!activePodcastSelection;
  let selectedTitle="Podcast";
  let selectedSubtitle="Audio-Lesetraining";
  if(selected && activePodcastSelection.type==="builtin"){
    const item=podcastLibrary.find(entry=>entry.id===activePodcastSelection.id);
    if(item){selectedTitle=item.title;selectedSubtitle=`Lektion ${item.lesson} · Audio-Lesetraining`;}
  }else if(selected){
    const meta=customContentEntries("lesson",null,"podcast").find(entry=>entry.id===activePodcastSelection.id);
    if(meta){selectedTitle=meta.title||"Podcast";selectedSubtitle=`Lektion ${Number(meta.lessonNumber)||"—"} · مضاف من Admin`;}
  }
  if(selected){
    app.innerHTML=`<section class="podcast-fullscreen-shell">
      <header class="podcast-fullscreen-header">
        <div class="podcast-fullscreen-brand"><span class="podcast-fullscreen-mark">♫</span><div><strong>${escapeHtml(selectedTitle)}</strong><small>${escapeHtml(selectedSubtitle)}</small></div></div>
        <div class="podcast-fullscreen-actions"><button type="button" class="podcast-fullscreen-back" data-action="podcast-back-list">رجوع للائحة</button><button type="button" class="podcast-fullscreen-close" data-action="podcast-exit" aria-label="إغلاق">×</button></div>
      </header>
      ${renderPodcastFullscreenSelection()}
    </section>`;
    const frame=document.getElementById("podcastFullscreenFrame");
    if(frame && activePodcastSelection?.type==="custom" && activePodcastFile?.base64 && String(activePodcastFile.mimeType||"")==="text/html"){
      frame.srcdoc=decodeBase64Utf8(activePodcastFile.base64);
    }
    return;
  }
  const customEntries=customContentEntries("lesson",null,"podcast");
  const availableLessons=[...new Set([
    ...podcastLibrary.map(item=>Number(item.lesson)),
    ...customEntries.map(item=>Number(item.lessonNumber)).filter(value=>Number.isInteger(value)&&value>=1&&value<=lessons.length)
  ])].sort((a,b)=>a-b);
  const lessonNumbers=podcastFilterLesson?[Number(podcastFilterLesson)]:availableLessons;
  const groups=lessonNumbers.map(lessonNo=>{
    const lessonIndex=lessonNo-1;
    const unlocked=getStudentLessonAccess(lessonIndex);
    const lessonTitle=lessons[lessonIndex]?.name||`Lektion ${lessonNo}`;
    if(!unlocked){
      return `<section class="podcast-lesson-group podcast-lesson-locked"><div class="podcast-lesson-head"><span class="lesson-number">${String(lessonNo).padStart(2,"0")}</span><div><h3>Lektion ${lessonNo}</h3><p>${escapeHtml(lessonTitle)}</p></div><span class="podcast-lock-label">🔒 مقفل</span></div><p class="podcast-locked-note">هاد الدرس مقفل حالياً من طرف الإدارة.</p></section>`;
    }
    const nativeItems=podcastLibrary.filter(item=>Number(item.lesson)===lessonNo).map(item=>({
      id:item.id,type:"builtin",title:item.title,subtitle:"نص كامل + صوت · Audio-Lesetraining",icon:"📖"
    }));
    const customItems=customEntries.filter(item=>Number(item.lessonNumber)===lessonNo).map(item=>({
      id:item.id,type:"custom",title:item.title||"Podcast جديد",subtitle:`${item.description||customContentFileTypeLabel(item)} · مضاف من Admin`,icon:customContentIcon(item)
    }));
    const items=[...nativeItems,...customItems];
    const cards=items.length?items.map(item=>`<button type="button" class="podcast-file-card podcast-single-page-card" data-action="podcast-select" data-type="${item.type}" data-id="${escapeHtml(item.id)}">
      <span class="podcast-file-icon">${item.icon}</span><span class="podcast-file-copy"><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.subtitle)} · Lektion ${lessonNo}</small></span><span class="podcast-file-arrow">▶</span>
    </button>`).join(""):`<div class="podcast-no-files">مازال ما تزاد حتى Podcast لهاد الدرس.</div>`;
    return `<section class="podcast-lesson-group"><div class="podcast-lesson-head"><span class="lesson-number">${String(lessonNo).padStart(2,"0")}</span><div><h3>Lektion ${lessonNo}</h3><p>${escapeHtml(lessonTitle)}</p></div><span class="podcast-lesson-count">${items.length} ملف</span></div><div class="podcast-file-list">${cards}</div></section>`;
  }).join("");
  const totalCount=podcastFilterLesson
    ? podcastLibrary.filter(item=>Number(item.lesson)===Number(podcastFilterLesson)).length+customEntries.filter(item=>Number(item.lessonNumber)===Number(podcastFilterLesson)).length
    : podcastLibrary.length+customEntries.length;
  const filterControl=podcastFilterLesson
    ? `<button class="podcast-show-all" type="button" data-action="podcast-show-all">عرض جميع Podcasts</button>`
    : `<span class="podcast-total-count">${totalCount} ملف استماع</span>`;
  const empty=groups?`<div class="podcast-groups podcast-single-page-groups">${groups}</div>`:`<div class="podcast-fullscreen-message">مازال ما كاين حتى Podcast. الملفات اللي كتزيد من Admin غادي يبانوا هنا.</div>`;
  app.innerHTML=`<section class="podcast-fullscreen-shell">
    <header class="podcast-fullscreen-header">
      <div class="podcast-fullscreen-brand"><span class="podcast-fullscreen-mark">♫</span><div><strong>مكتبة Podcast</strong><small>HÖREN · AUDIO-LESETRAINING</small></div></div>
      <div class="podcast-fullscreen-actions">${filterControl}<button type="button" class="podcast-fullscreen-close" data-action="podcast-exit" aria-label="إغلاق">×</button></div>
    </header>
    <main class="podcast-fullscreen-list-body"><div class="podcast-fullscreen-intro"><h1>Podcast</h1><p>اختار الدرس ثم اختار التسجيل باش يتفتح بملء الشاشة.</p></div>${empty}</main>
  </section>`;
}

function renderPodcastPlayer(){
  if(currentPodcastId){
    activePodcastSelection={type:"builtin",id:currentPodcastId};
    const item=podcastLibrary.find(entry=>entry.id===currentPodcastId);
    if(item) podcastFilterLesson=Number(item.lesson);
  }
  page="podcasts";
  return renderPodcasts();
}
function renderTests(){
  const list = levelLessons().map(idx => {
    const standaloneTest = standaloneLessonTests[idx];
    const testTitle = lessons[idx].name;
    const unlocked=getStudentLessonAccess(idx);
    return `<button class="lesson-card ${unlocked?"":"lesson-locked"}" data-action="test-lesson-open" data-lesson="${idx}" ${unlocked?"":"disabled"}>
      <span class="lesson-number">${String(idx+1).padStart(2,"0")}</span>
      <h3>Lektion ${idx+1} ${unlocked?"":"🔒"}</h3><p>${escapeHtml(testTitle)}</p>
      <div class="level-menu-foot"><span>${unlocked?"Tests öffnen":"Gesperrt"}</span><span>${unlocked?"→":"🔒"}</span></div>
    </button>`;
  }).join("");
  const content = `<div class="pill">✓ ${selectedLevel} <span>·</span> Teste</div><div class="lesson-grid">${list}</div>`;
  app.innerHTML = pageShell("الاختبارات",selectedLevel,"اختار درساً ثم ابدأ الاختبار المناسب له.",content);
}


function openLessonTestEntry(returnPage){
  testCategoriesReturnPage = returnPage || "tests";
  testReturnPage = testCategoriesReturnPage;
  page = getLessonTestPage(currentLesson) ? "standalone-lesson-test" : "test-categories";
}
function renderStandaloneLessonTest(){
  const testPage = getLessonTestPage(currentLesson);
  if(!testPage){ page = "test-categories"; return render(); }
  document.documentElement.classList.add("challenge-fullscreen-open");
  document.body.classList.add("challenge-fullscreen-open");
  const exitLabel = testCategoriesReturnPage === "lesson-hub" ? "رجوع للدرس" : "رجوع للاختبارات";
  app.innerHTML = `<div class="challenge-fullscreen-shell">
    <button type="button" class="challenge-fullscreen-exit" data-action="close-standalone-lesson-test">← ${exitLabel}</button>
    <iframe id="standaloneLessonTestFrame" title="${escapeHtml(testPage.title)} – Test Lektion ${lessonNumber()}" loading="eager"></iframe>
  </div>`;
  const frame = document.getElementById("standaloneLessonTestFrame");
  if(frame) loadManagedPageIntoFrame(frame, testPage.file);
}

let testCenterFrameMessageBound = false;

function bindTestCenterFrameMessages(){
  if(testCenterFrameMessageBound) return;
  window.addEventListener("message", function(event){
    const frame = document.getElementById("testCenterFrame");
    if(!frame || event.source !== frame.contentWindow) return;
    const message = event.data || {};

    if(message.type === "test-center-height"){
      const height = Math.max(300, Math.min(2200, Number(message.height) || 520));
      frame.style.height = `${height}px`;
      return;
    }
    if(message.type !== "test-center-action") return;

    const action = message.action;
    if(action === "category-test"){
      currentCategory = String(message.category || "");
      testIndex = 0; testScore = 0; testChoice = null; testAnswered = false;
      testQuestionScores = {}; testQuestionLabels = {};
      testAttemptId = createStudentAttemptId();
      testReturnPage = "test-categories";
      page = "test";
    }else if(action === "open-standalone-lesson-test"){
      page = "standalone-lesson-test";
    }else if(action === "open-custom-content"){
      openCustomContent(String(message.id || ""));
      return;
    }else if(action === "choice"){
      if(!testAnswered) testChoice = Number(message.choice);
    }else if(action === "check-answer"){
      if(testChoice !== null && !testAnswered){
        const question = items()[testIndex] || [];
        const key = `q${testIndex+1}`;
        const correct = testChoice === testIndex;
        if(correct) testScore++;
        testQuestionScores[key] = {correct:correct?1:0,total:1};
        testQuestionLabels[key] = String(question[0] || `Frage ${testIndex+1}`);
        testAnswered = true;
      }
    }else if(action === "next-question"){
      if(testIndex < items().length-1){
        testIndex++; testChoice = null; testAnswered = false;
      }else{
        page = "test-result";
      }
    }else if(action === "retry-test"){
      testIndex = 0; testScore = 0; testChoice = null; testAnswered = false;
      testQuestionScores = {}; testQuestionLabels = {};
      testAttemptId = createStudentAttemptId();
      page = "test";
    }else if(action === "test-home"){
      page = testReturnPage || "test-categories";
    }else{
      return;
    }
    render();
  });
  testCenterFrameMessageBound = true;
}

function renderTestCenterFrame(mode, eyebrow, title, subtitle, data){
  bindTestCenterFrameMessages();
  const content = `<iframe id="testCenterFrame" class="test-center-frame" title="Test – ${escapeHtml(title)}" src="pages/test-center.html" loading="eager"></iframe>`;
  app.innerHTML = pageShell(eyebrow, escapeHtml(title), escapeHtml(subtitle), content);
  const frame = document.getElementById("testCenterFrame");
  if(!frame) return;
  const payload = {type:"test-center-init", mode, ...data};
  frame.addEventListener("load", function(){
    try{ frame.contentWindow.postMessage(payload, "*"); }catch(error){ console.error("Test center init failed:",error); }
  }, {once:true});
}

function renderTestCategories(){
  const directTestPage = getLessonTestPage(currentLesson);
  if(directTestPage){
    page = "standalone-lesson-test";
    return renderStandaloneLessonTest();
  }
  const standaloneTest = null;
  const categories = Object.keys(categoryMeta).map(name => ({
    name,
    icon: categoryMeta[name].icon,
    count: (lessonData().data[name] || []).length
  }));
  const customTestsHtml = renderCustomContentFeatureCards("test",lessonNumber(),"اختبارات إضافية من الأستاذ");
  renderTestCenterFrame(
    "categories",
    `الدرس ${lessonNumber()}`,
    "اختبر معلوماتك",
    lessonData().name,
    {
      lessonNumber: lessonNumber(),
      lessonName: lessonData().name,
      level: selectedLevel,
      categories,
      standaloneTest,
      customTestsHtml
    }
  );
}
function renderLesson(){
  const cats = Object.keys(categoryMeta).map(cat => `<button class="category-card" data-action="category" data-category="${cat}">
    <span class="category-icon">${categoryMeta[cat].icon}</span><h3>${cat}</h3><p>${categoryMeta[cat].desc}</p>
  </button>`).join("");
  const dialogue = dialogues[currentLesson];
  const content = `<div class="pill">Lektion ${lessonNumber()} <span>·</span> ${escapeHtml(lessonData().name)}</div>
    ${currentLesson===0 ? `<div class="dialogue-feature">
      <div class="dialogue-feature-icon">💬</div>
      <div class="dialogue-feature-copy"><h3>Dialog üben</h3><p>${escapeHtml(dialogue.intro)} Ein kompletter Dialog mit Beispielsätzen und Übersetzung.</p></div>
      <button class="primary-btn" data-action="open-dialogue">Dialog öffnen <span class="arrow">→</span></button>
    </div>` : ""}
    ${currentLesson===0 ? `<div class="numbers-feature">
      <div class="numbers-feature-icon">🔢</div>
      <div class="numbers-feature-copy"><h3>Die Zahlen</h3><p>Lerne deutsche Zahlen von eins bis zweitausend. Klicke auf die Zahlen und höre die deutsche Aussprache.</p></div>
      <button class="primary-btn" data-action="open-numbers">Zahlen öffnen <span class="arrow">→</span></button>
    </div>` : ""}
    ${currentLesson===1 ? `<div class="family-tree-feature">
      <div class="family-tree-feature-icon">🌳</div>
      <div class="family-tree-feature-copy"><h3>Familienstammbaum</h3><p>Entdecke die Familienmitglieder im Stammbaum: Großeltern, Eltern, Geschwister, Enkel und Enkelin.</p></div>
      <button class="primary-btn" data-action="open-family-tree">Stammbaum öffnen <span class="arrow">→</span></button>
    </div>` : ""}
    ${currentLesson===2 ? `<div class="essen-feature">
      <div class="essen-feature-icon">🍎</div>
      <div class="essen-feature-copy"><h3>Essen und Trinken</h3><p>Lerne Lebensmittel und Getränke mit interaktiven Bildkarten. Klicke auf die Karten und höre die deutsche Aussprache.</p></div>
      <button class="primary-btn" data-action="open-essen">Essen und Trinken öffnen <span class="arrow">→</span></button>
    </div>` : ""}
    ${currentLesson===4 ? `<div class="freizeit-feature">
      <div class="freizeit-feature-icon">🎯</div>
      <div class="freizeit-feature-copy"><h3>Freizeit – interaktive Vokabeln</h3><p>Lerne Freizeitaktivitäten mit einer interaktiven Bildkarte. Klicke auf eine Aktivität und höre die deutsche Aussprache.</p></div>
      <button class="primary-btn" data-action="open-freizeit">Freizeit öffnen <span class="arrow">→</span></button>
    </div>` : ""}
    ${interactiveLessonPosters[currentLesson] ? `<div class="stadt-feature">
      <div class="stadt-feature-icon">${interactiveLessonPosters[currentLesson].icon}</div>
      <div class="stadt-feature-copy"><h3>${escapeHtml(interactiveLessonPosters[currentLesson].title)} – interaktive Lernkarte</h3><p>${escapeHtml(interactiveLessonPosters[currentLesson].description)}. Klicke auf die Bildbereiche, um die Wörter und arabischen Übersetzungen zu entdecken und die deutsche Aussprache zu hören.</p></div>
      <button class="primary-btn" data-action="open-interactive-poster">Interaktive Lernkarte öffnen <span class="arrow">→</span></button>
    </div>` : ""}
    ${renderCustomContentFeatureCards("course",lessonNumber(),"مواد إضافية للكورس")}
    <div class="section-card"><p class="subtitle">Oder wähle einen Lernbereich aus.</p><div class="category-grid">${cats}</div></div>`;
  app.innerHTML = pageShell(`Lektion ${lessonNumber()}`,escapeHtml(lessonData().name),"تعلّم الكلمات، وتدرّب على القواعد، واستعمل الألمانية في مواقف الحياة اليومية.",content);
}

function renderInteractiveLessonPoster(){
  const poster = interactiveLessonPosters[currentLesson];
  if(!poster){page="lesson";return render();}
  const content = `<div class="interactive-poster-embedded">
    <p style="margin:0 0 12px;color:#64718b;font-size:13px;line-height:1.7">Klicke auf die verschiedenen Bildbereiche. Du siehst das deutsche Wort, die arabische Übersetzung und kannst die deutsche Aussprache anhören.</p>
    <iframe id="interactiveLessonPosterFrame" title="${escapeHtml(poster.title)} – interaktive Lernkarte" style="display:block;width:100%;height:700px;border:0;border-radius:18px;background:#fff;box-shadow:0 12px 34px rgba(22,58,90,.12)" loading="eager"></iframe>
    <div style="margin-top:18px"><button class="back-btn" data-action="interactive-poster-back">← Zurück zu Lektion ${lessonNumber()}</button></div>
  </div>`;
  app.innerHTML = pageShell(`Lektion ${lessonNumber()}`,escapeHtml(poster.title),"بطاقة تفاعلية مع النطق الألماني والترجمة العربية.",content);
  const frame = document.getElementById("interactiveLessonPosterFrame");
  if(frame){
    frame.addEventListener("load", function(){
      const updateHeight = () => {
        try{
          const doc=frame.contentDocument;
          if(!doc)return;
          const height=Math.max(
            doc.documentElement ? doc.documentElement.scrollHeight : 0,
            doc.body ? doc.body.scrollHeight : 0
          );
          frame.style.height=Math.max(420,height+18)+"px";
        }catch(e){}
      };
      updateHeight();
      try{
        frame.contentWindow.addEventListener("resize",updateHeight);
        if(frame.contentWindow.ResizeObserver){
          const observer=new frame.contentWindow.ResizeObserver(updateHeight);
          if(frame.contentDocument && frame.contentDocument.documentElement) observer.observe(frame.contentDocument.documentElement);
          if(frame.contentDocument && frame.contentDocument.body) observer.observe(frame.contentDocument.body);
        }
      }catch(e){}
    },{once:true});
    trackStandaloneVocabularyFrame(frame,"A1",lessonNumber());
    loadManagedPageIntoFrame(frame, poster.file);
  }
}


function renderNumbers(){
  const content = `<div class="pill">🔢 Zahlen <span>·</span> Lektion 1</div>
    <div class="numbers-embedded">
      <p style="margin:0 0 12px;color:#64718b;font-size:13px;line-height:1.6">Die interaktive Zahlen-Lernseite ist direkt hier eingebettet. Klicke auf eine Zahl oder ein Wort, um die deutsche Aussprache zu hören. Du kannst das Sprechtempo einstellen und die Aussprache wiederholen oder stoppen.</p>
      <iframe id="numbersStandaloneFrame" title="Die Zahlen – interaktiv mit deutscher Aussprache" style="display:block;width:100%;height:900px;border:0;border-radius:18px;background:#fff;box-shadow:0 12px 34px rgba(22,58,90,.12)" loading="eager"></iframe>
      <div style="margin-top:18px"><button class="back-btn" data-action="numbers-back">← Zurück zu Lektion 1</button></div>
    </div>`;
  app.innerHTML = pageShell("الدرس 1","الأرقام","تعلّم الأرقام الألمانية مع الاستماع إلى النطق.",content);
  const frame = document.getElementById("numbersStandaloneFrame");
  if(frame){
    frame.addEventListener("load", function(){
      const updateHeight = () => {
        try {
          const doc = frame.contentDocument;
          if(!doc) return;
          const main = doc.querySelector("main");
          const contentHeight = Math.max(
            doc.documentElement ? doc.documentElement.scrollHeight : 0,
            doc.body ? doc.body.scrollHeight : 0,
            main ? Math.ceil(main.getBoundingClientRect().height + 55) : 0
          );
          frame.style.height = Math.max(750, contentHeight + 20) + "px";
        } catch(e) {}
      };
      updateHeight();
      try {
        frame.contentWindow.addEventListener("resize", updateHeight);
        if(frame.contentWindow.ResizeObserver){
          const observer = new frame.contentWindow.ResizeObserver(updateHeight);
          const main = frame.contentDocument && frame.contentDocument.querySelector("main");
          if(main) observer.observe(main);
        }
      } catch(e) {}
    });
    trackStandaloneVocabularyFrame(frame,"A1",1);
    loadManagedPageIntoFrame(frame, "pages/numbers.html");
  }
}

function renderEssen(){
  const content = `<div class="pill">🍎 Essen und Trinken <span>·</span> Lektion 3</div>
    <div class="essen-embedded">
      <p style="margin:0 0 12px;color:#64718b;font-size:13px;line-height:1.6">Klicke auf die Bildkarten, um die Wörter zu lernen und die deutsche Aussprache zu hören. Du kannst die Aussprache wiederholen, stoppen und das Sprechtempo einstellen.</p>
      <iframe id="essenStandaloneFrame" title="Essen und Trinken – interaktive Vokabeln mit Aussprache" style="display:block;width:100%;height:900px;border:0;border-radius:18px;background:#fff;box-shadow:0 12px 34px rgba(22,58,90,.12)" loading="eager"></iframe>
      <div style="margin-top:18px"><button class="back-btn" data-action="essen-back">← Zurück zu Lektion 3</button></div>
    </div>`;
  app.innerHTML = pageShell("الدرس 3","الأكل والشرب","تعلّم أسماء المأكولات والمشروبات مع النطق.",content);
  const frame = document.getElementById("essenStandaloneFrame");
  if(frame){
    frame.addEventListener("load", function(){
      const updateHeight = () => {
        try {
          const doc = frame.contentDocument;
          if(!doc) return;
          const main = doc.querySelector("main");
          const contentHeight = Math.max(
            doc.documentElement ? doc.documentElement.scrollHeight : 0,
            doc.body ? doc.body.scrollHeight : 0,
            main ? Math.ceil(main.getBoundingClientRect().height + 55) : 0
          );
          frame.style.height = Math.max(750, contentHeight + 20) + "px";
        } catch(e) {}
      };
      updateHeight();
      try {
        frame.contentWindow.addEventListener("resize", updateHeight);
        if(frame.contentWindow.ResizeObserver){
          const observer = new frame.contentWindow.ResizeObserver(updateHeight);
          const main = frame.contentDocument && frame.contentDocument.querySelector("main");
          if(main) observer.observe(main);
        }
      } catch(e) {}
    });
    trackStandaloneVocabularyFrame(frame,"A1",3);
    loadManagedPageIntoFrame(frame, "pages/essen.html");
  }
}



function renderStadtWohnung(){
  const content = `<div class="pill">🏙️ Meine Stadt, meine Wohnung <span>·</span> Lektion 6</div>
    <div class="section-card" style="margin-top:0">
      <p class="subtitle" style="margin-bottom:16px">Klicke auf Orte, Gebäude oder Sätze im Bild. Die arabische Übersetzung wird angezeigt und die deutsche Aussprache startet automatisch.</p>
      <iframe id="stadtStandaloneFrame" title="Meine Stadt, meine Wohnung – interaktive Bildkarte" style="display:block;width:100%;height:900px;border:0;border-radius:18px;background:#fff;box-shadow:0 12px 34px rgba(22,58,90,.12)" loading="eager"></iframe>
      <div style="margin-top:18px"><button class="back-btn" data-action="stadt-back">← Zurück zu Lektion 6</button></div>
    </div>`;
  app.innerHTML = pageShell("الدرس 6","مدينتي وسكني","تعلّم كلمات وجملاً حول المدينة والسكن.",content);
  const frame = document.getElementById("stadtStandaloneFrame");
  if(frame){
    frame.addEventListener("load", function(){
      const updateHeight = () => {
        try {
          const doc = frame.contentDocument;
          if(!doc) return;
          const main = doc.querySelector("main");
          const contentHeight = Math.max(
            doc.documentElement ? doc.documentElement.scrollHeight : 0,
            doc.body ? doc.body.scrollHeight : 0,
            main ? Math.ceil(main.getBoundingClientRect().height + 35) : 0
          );
          frame.style.height = Math.max(420, contentHeight + 20) + "px";
        } catch(e) {}
      };
      updateHeight();
      try {
        frame.contentWindow.addEventListener("resize", updateHeight);
        if(frame.contentWindow.ResizeObserver){
          const observer = new frame.contentWindow.ResizeObserver(updateHeight);
          const main = frame.contentDocument && frame.contentDocument.querySelector("main");
          if(main) observer.observe(main);
        }
        const image = frame.contentDocument && frame.contentDocument.querySelector(".poster-wrap img");
        if(image && !image.complete) image.addEventListener("load", updateHeight, {once:true});
      } catch(e) {}
    });
    trackStandaloneVocabularyFrame(frame,"A1",6);
    loadManagedPageIntoFrame(frame, "pages/meine-stadt.html");
  }
}

function renderFreizeit(){
  const content = `<div class="pill">🎯 Freizeit <span>·</span> Lektion 5</div>
    <div class="freizeit-embedded">
      <p style="margin:0 0 12px;color:#536b7f;font-size:13px;line-height:1.6">Klicke auf eine Aktivität im Bild und höre die deutsche Aussprache. Du kannst die Aussprache wiederholen, stoppen und das Sprechtempo einstellen.</p>
      <iframe id="freizeitStandaloneFrame" title="Freizeit – interaktive Vokabeln mit Aussprache" style="display:block;width:100%;height:900px;border:0;border-radius:18px;background:#fff;box-shadow:0 12px 34px rgba(22,58,90,.12)" loading="eager"></iframe>
      <div style="margin-top:18px"><button class="back-btn" data-action="freizeit-back">← Zurück zu Lektion 5</button></div>
    </div>`;
  app.innerHTML = pageShell("الدرس 5","وقت الفراغ والهوايات","تعلّم أنشطة وقت الفراغ والهوايات باستعمال بطاقات تفاعلية.",content);
  const frame = document.getElementById("freizeitStandaloneFrame");
  if(frame){
    frame.addEventListener("load", function(){
      const updateHeight = () => {
        try {
          const doc = frame.contentDocument;
          if(!doc) return;
          const main = doc.querySelector("main");
          const contentHeight = Math.max(
            doc.documentElement ? doc.documentElement.scrollHeight : 0,
            doc.body ? doc.body.scrollHeight : 0,
            main ? Math.ceil(main.getBoundingClientRect().height + 55) : 0
          );
          frame.style.height = Math.max(750, contentHeight + 20) + "px";
        } catch(e) {}
      };
      updateHeight();
      try {
        frame.contentWindow.addEventListener("resize", updateHeight);
        if(frame.contentWindow.ResizeObserver){
          const observer = new frame.contentWindow.ResizeObserver(updateHeight);
          const main = frame.contentDocument && frame.contentDocument.querySelector("main");
          if(main) observer.observe(main);
        }
      } catch(e) {}
    });
    trackStandaloneVocabularyFrame(frame,"A1",5);
    loadManagedPageIntoFrame(frame, "pages/freizeit.html");
  }
}
function renderFamilyTree(){
  const content = `<div class="pill">🌳 Familie <span>·</span> Lektion 2</div>
    <div class="family-tree-embedded">
      <p class="family-tree-embedded-hint" style="margin:0 0 12px;color:#64718b;font-size:13px;line-height:1.6">Der interaktive Familienstammbaum ist direkt hier in Lektion 2 eingebettet. Klicke auf Wörter oder Bildbereiche, um die deutsche Aussprache zu hören.</p>
      <iframe id="familyTreeStandaloneFrame" title="Interaktiver Familienstammbaum mit deutscher Aussprache" style="display:block;width:100%;height:900px;border:0;border-radius:18px;background:#fff;box-shadow:0 12px 34px rgba(22,58,90,.12)" loading="eager"></iframe>
      <div style="margin-top:18px"><button class="back-btn" data-action="family-tree-back">← Zurück zu Lektion 2</button></div>
    </div>`;
  app.innerHTML = pageShell("شجرة العائلة","العائلة","تعلّم مفردات العائلة مع الاستماع إلى النطق الألماني.",content);
  const frame = document.getElementById("familyTreeStandaloneFrame");
  if(frame){
    frame.addEventListener("load", function(){
      const updateHeight = () => {
        try {
          const doc = frame.contentDocument;
          const embeddedPage = doc && doc.querySelector(".page");
          if(embeddedPage){
            frame.style.height = Math.max(650, Math.ceil(embeddedPage.getBoundingClientRect().height + 45)) + "px";
          }
        } catch(e) {}
      };
      updateHeight();
      try {
        frame.contentWindow.addEventListener("resize", updateHeight);
        if(frame.contentWindow.ResizeObserver){
          const observer = new frame.contentWindow.ResizeObserver(updateHeight);
          const embeddedPage = frame.contentDocument.querySelector(".page");
          if(embeddedPage) observer.observe(embeddedPage);
        }
      } catch(e) {}
    });
    trackStandaloneVocabularyFrame(frame,"A1",2);
    loadManagedPageIntoFrame(frame, "pages/family-tree.html");
  }
}

function speakFamilyTree(text){
  if(!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)){
    const status=document.getElementById("familyTreeStatus");
    if(status) status.textContent="Dein Browser unterstützt die Sprachausgabe nicht. Bitte öffne die Plattform in Chrome, Edge oder Safari.";
    return;
  }
  window.speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(text);
  utterance.lang="de-DE";
  utterance.pitch=1;
  const rate=document.getElementById("familyTreeRate");
  utterance.rate=rate ? (Number(rate.value)||0.9) : 0.9;
  const voices=window.speechSynthesis.getVoices();
  const germanVoice=voices.find(v=>/^de(-|_)/i.test(v.lang) && /de-DE/i.test(v.lang)) || voices.find(v=>/^de(-|_)/i.test(v.lang));
  if(germanVoice) utterance.voice=germanVoice;
  const status=document.getElementById("familyTreeStatus");
  if(status) status.textContent="Bereit zum Anhören: „"+text+"“";
  utterance.onstart=()=>{if(status)status.textContent="Wird ausgesprochen: „"+text+"“";};
  utterance.onend=()=>{if(status)status.textContent="Fertig: „"+text+"“";};
  utterance.onerror=()=>{if(status)status.textContent="Die Aussprache konnte nicht gestartet werden. Prüfe die Audio- und Spracheinstellungen.";};
  window.speechSynthesis.speak(utterance);
}


function renderIntroDialogue(){
  const content = `<div class="pill">💬 Sich vorstellen <span>·</span> Lektion 1</div>
    <div class="intro-dialogue-embedded">
      <p style="margin:0 0 12px;color:#536b7f;font-size:13px;line-height:1.6">Klicke auf die Sprechblasen, um den ganzen Satz zu hören, oder auf einzelne Wörter. Die Sprachausgabe startet nur, wenn du etwas anklickst.</p>
      <iframe id="introDialogueFrame" title="Sich vorstellen – interaktiver Dialog mit Aussprache" style="display:block;width:100%;height:1500px;border:0;border-radius:18px;background:#fff;box-shadow:0 12px 34px rgba(22,58,90,.12)" loading="eager"></iframe>
      <div style="margin-top:18px"><button class="back-btn" data-action="intro-dialogue-back">← Zurück zu Lektion 1</button></div>
    </div>`;
  app.innerHTML = pageShell("الدرس 1","حوار التعارف","تدرّب على التحية وتقديم النفس باستعمال حوار تفاعلي ونطق ألماني.",content);
  const frame = document.getElementById("introDialogueFrame");
  if(frame){
    frame.addEventListener("load", function(){
      const updateHeight = () => {
        try {
          const doc = frame.contentDocument;
          if(!doc) return;
          const main = doc.querySelector("main");
          const contentHeight = Math.max(
            doc.documentElement ? doc.documentElement.scrollHeight : 0,
            doc.body ? doc.body.scrollHeight : 0,
            main ? Math.ceil(main.getBoundingClientRect().height + 55) : 0
          );
          frame.style.height = Math.max(950, contentHeight + 20) + "px";
        } catch(e) {}
      };
      updateHeight();
      try {
        frame.contentWindow.addEventListener("resize", updateHeight);
        if(frame.contentWindow.ResizeObserver){
          const observer = new frame.contentWindow.ResizeObserver(updateHeight);
          const main = frame.contentDocument && frame.contentDocument.querySelector("main");
          if(main) observer.observe(main);
        }
      } catch(e) {}
    });
    loadManagedPageIntoFrame(frame, "pages/intro-dialogue.html");
  }
}
function renderDialogue(){
  const dialog = dialogues[currentLesson];
  const lines = dialog.lines.map((line,i)=>`<article class="dialogue-line">
    <div class="dialogue-speaker">${escapeHtml(line[0])}</div>
    <div class="dialogue-content"><p class="dialogue-german">${escapeHtml(line[1])}</p><p class="dialogue-translation">${escapeHtml(line[2])}</p></div>
    <button class="dialogue-audio" data-action="dialogue-line-audio" data-line-index="${i}" aria-label="Diesen Satz anhören" title="Diesen Satz anhören">🔊</button>
  </article>`).join("");
  const dialogueBackLabel = dialogueReturnPage==="podcasts" ? "← Zurück zum Podcast" : "← Zur Lektion";
  const content = `<div class="pill">💬 Dialog <span>·</span> Lektion ${lessonNumber()}</div>
    <div class="dialogue-actions">
      <button class="primary-btn" data-action="dialogue-speak">🔊 Dialog anhören</button>
      <button class="back-btn" data-action="dialogue-back">${dialogueBackLabel}</button>
    </div>
    <div class="dialogue-list">${lines}</div>
    <div class="dialogue-tips"><strong>So übst du:</strong> Lies zuerst den Dialog. Klicke auf 🔊 neben einem Satz, um nur diesen Satz zu hören. Der ganze Dialog wird nur abgespielt, wenn du auf „Dialog anhören“ klickst.</div>`;
  app.innerHTML = pageShell("تدريب الحوار",escapeHtml(dialog.title),escapeHtml(dialog.intro),content);
}
function renderCategory(){
  const content = `<div class="pill">${categoryMeta[currentCategory].icon} ${currentCategory} <span>·</span> Lektion ${lessonNumber()}</div>
    <div class="action-grid">
      <button class="action-card" data-action="learn"><div class="action-icon">📚</div><div><h3>Lernen</h3><p>Bilder ansehen, Beispiele lesen und Wörter anhören.</p></div><span class="action-arrow">→</span></button>
      <button class="action-card" data-action="start-test"><div class="action-icon">✓</div><div><h3>Test</h3><p>Prüfe dein Wissen mit kurzen Fragen.</p></div><span class="action-arrow">→</span></button>
    </div>`;
  app.innerHTML = pageShell(`${categoryMeta[currentCategory].icon} ${currentCategory}`,currentCategory,`Lektion ${lessonNumber()} · ${escapeHtml(lessonData().name)}. Lerne zuerst oder starte direkt den Test.`,content);
}
function renderInlineVerbConjugation(item, index){
  const forms = getVerbForms(item);
  const rows = pronouns.map((person,i)=>`<tr>
    <td><strong>${person[0]}</strong><span class="person-translation">${person[1]}</span></td>
    <td>${escapeHtml(forms[i] || "—")}</td>
    <td><button class="form-audio-btn" data-action="speak-form" data-verb-index="${index}" data-form-index="${i}" aria-label="Verbform anhören">🔊</button></td>
  </tr>`).join("");
  return `<div class="inline-conjugation">
    <div class="inline-conjugation-head"><strong>Konjugation · Präsens</strong><button class="listen-btn" data-action="speak-verb" data-verb-index="${index}">🔊 Anhören</button></div>
    <table class="conjugation-table"><thead><tr><th>Person</th><th>Verbform</th><th>Audio</th></tr></thead><tbody>${rows}</tbody></table>
    <div class="verb-example"><div class="example-label">Beispiel</div><p>${escapeHtml(item[2])}</p><div style="margin-top:8px"><button class="form-audio-btn" data-action="speak" data-text="${escapeHtml(item[2])}">🔊 Beispielsatz anhören</button></div></div>
    <p class="inline-conjugation-hint">Tippe auf „Anhören“, um alle Formen zu hören, oder auf 🔊 neben einer Form.</p>
  </div>`;
}
function getVerbKey(item){
  return String(item && item[0] || "").trim().split(/[\s(]/)[0].toLowerCase();
}
function getVerbForms(item){
  const key=getVerbKey(item);
  if(verbConjugations[key]) return verbConjugations[key];
  const special={
    einkaufen:["kaufe ein","kaufst ein","kauft ein","kaufen ein","kauft ein","kaufen ein"],
    finden:["finde","findest","findet","finden","findet","finden"],
    nehmen:["nehme","nimmst","nimmt","nehmen","nehmt","nehmen"],
    radfahren:["fahre Rad","fährst Rad","fährt Rad","fahren Rad","fahrt Rad","fahren Rad"],
    ankommen:["komme an","kommst an","kommt an","kommen an","kommt an","kommen an"],
    abfahren:["fahre ab","fährst ab","fährt ab","fahren ab","fahrt ab","fahren ab"],
    umsteigen:["steige um","steigst um","steigt um","steigen um","steigt um","steigen um"],
    tragen:["trage","trägst","trägt","tragen","tragt","tragen"],
    scheinen:["scheine","scheinst","scheint","scheinen","scheint","scheinen"],
    regnen:["regne","regnest","regnet","regnen","regnet","regnen"],
    schneien:["schneie","schneist","schneit","schneien","schneit","schneien"],
    wehen:["wehe","wehst","weht","wehen","weht","wehen"],
    gewittern:["gewittern","gewittern","gewittern","gewittern","gewittern","gewittern"]
  };
  if(special[key]) return special[key];
  if(/en$/.test(key)){
    const stem=key.slice(0,-2);
    return [`${stem}e`,`${stem}st`,`${stem}t`,key,`${stem}t`,key];
  }
  return Array(6).fill(key||"—");
}
function getVerbExamples(item){
  const key=getVerbKey(item);
  return verbExamples[key] || Array(6).fill(item[2] || item.speakText || item[0]);
}
function buildLearningSlides(all){
  const slides=[];
  for(let start=0;start<(all||[]).length;start+=6){
    const entries=all.slice(start,start+6).map((item,offset)=>({item,index:start+offset}));
    const groupTitles=[...new Set(entries.map(entry=>String(entry.item.groupTitle||"").trim()).filter(Boolean))];
    const title=groupTitles.length===1?groupTitles[0]:(currentCategory==="Nomen"?"Wortschatz":currentCategory);
    slides.push({title,items:entries});
  }
  return slides;
}
function renderLearningWordImage(item){
  if(item && item.imageUrl){
    return `<div class="learning-word-image"><img src="${escapeHtml(item.imageUrl)}" alt="${escapeHtml(item[0])}" loading="lazy" decoding="async"></div>`;
  }
  return `<div class="learning-word-image learning-word-image-fallback">${renderWordArt(item)}</div>`;
}
function renderVerbModal(){
  if(activeVerbCard===null || currentCategory!=="Verben" || learningTab!=="Bilder") return "";
  const it = learningItems()[activeVerbCard];
  if(!it) return "";
  const forms = getVerbForms(it);
  const examples = getVerbExamples(it);
  const rows = pronouns.map((person,i)=>`<div class="verb-person-row">
    <div class="verb-person-name"><strong>${person[0]}</strong><span>${person[1]}</span></div>
    <div class="verb-form-chip">${escapeHtml(forms[i] || "—")}</div>
    <div class="verb-person-example"><div class="example-label">Beispiel</div><p>${escapeHtml(examples[i])}</p></div>
    <button class="verb-row-audio" data-action="speak-form" data-verb-index="${activeVerbCard}" data-form-index="${i}" aria-label="Beispiel anhören">🔊</button>
  </div>`).join("");
  return `<div class="verb-modal-backdrop" data-action="close-verb-modal" role="presentation">
    <section class="verb-modal" role="dialog" aria-modal="true" aria-labelledby="verb-modal-heading">
      <button class="verb-modal-close" data-action="close-verb-modal" aria-label="Fenster schließen">×</button>
      <div class="verb-modal-title"><div class="verb-card-icon">${it[3]}</div><div><h2 id="verb-modal-heading">${escapeHtml(it[0])}</h2><p>${escapeHtml(it[1])} · Konjugation im Präsens</p></div></div>
      <div class="verb-person-list">${rows}</div>
      <div class="verb-modal-tip"><strong>Merke dir:</strong> Jede Zeile enthält die Verbform und einen Beispielsatz. Klicke auf 🔊, um genau diesen Beispielsatz zu hören.</div>
      <div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:20px">
        <button class="listen-btn" data-action="speak-verb" data-verb-index="${activeVerbCard}">🔊 Alle Beispiele anhören</button>
        <button class="primary-btn" data-action="close-verb-modal">Schließen</button>
      </div>
    </section>
  </div>`;
}
function speakVerbEntry(item){
  const examples = getVerbExamples(item);
  speak(`${item[0]}. ${examples.join(" ")}`);
}
function speakOneVerbForm(item, formIndex){
  const examples = getVerbExamples(item);
  speak(examples[formIndex] || item[2]);
}

const lesson1VerbIllustrations = {"heißen": {"note": "Jemand stellt sich vor und sagt: Ich heiße Sara.", "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 520\">\n<defs><linearGradient id=\"bg1\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop stop-color=\"#edf3ff\"/><stop offset=\"1\" stop-color=\"#fff4dc\"/></linearGradient></defs>\n<rect width=\"800\" height=\"520\" rx=\"36\" fill=\"url(#bg1)\"/>\n<rect x=\"54\" y=\"56\" width=\"240\" height=\"130\" rx=\"24\" fill=\"#ffffff\" opacity=\"0.95\"/>\n<text x=\"174\" y=\"108\" font-size=\"34\" text-anchor=\"middle\" fill=\"#42649b\" font-family=\"Arial\" font-weight=\"700\">Hallo!</text>\n<text x=\"174\" y=\"150\" font-size=\"24\" text-anchor=\"middle\" fill=\"#5c6f8f\" font-family=\"Arial\">Ich heiße Sara.</text>\n<circle cx=\"515\" cy=\"170\" r=\"60\" fill=\"#ffd3b5\"/>\n<path d=\"M455 160c10-52 114-60 130 0v20H455z\" fill=\"#6b4f8d\"/>\n<rect x=\"450\" y=\"232\" width=\"130\" height=\"135\" rx=\"28\" fill=\"#8db7ff\"/>\n<rect x=\"438\" y=\"264\" width=\"24\" height=\"116\" rx=\"12\" fill=\"#ffd3b5\"/>\n<rect x=\"568\" y=\"252\" width=\"24\" height=\"128\" rx=\"12\" fill=\"#ffd3b5\"/>\n<path d=\"M580 286c30 8 48 32 60 54\" stroke=\"#ffd3b5\" stroke-width=\"20\" stroke-linecap=\"round\"/>\n<path d=\"M449 286c-26 12-36 30-44 48\" stroke=\"#ffd3b5\" stroke-width=\"20\" stroke-linecap=\"round\"/>\n<rect x=\"458\" y=\"366\" width=\"46\" height=\"92\" rx=\"18\" fill=\"#5b6f9f\"/>\n<rect x=\"526\" y=\"366\" width=\"46\" height=\"92\" rx=\"18\" fill=\"#5b6f9f\"/>\n<circle cx=\"637\" cy=\"341\" r=\"16\" fill=\"#ffd3b5\"/>\n<rect x=\"605\" y=\"330\" width=\"104\" height=\"74\" rx=\"18\" fill=\"#fff\"/>\n<text x=\"657\" y=\"373\" font-size=\"28\" text-anchor=\"middle\" fill=\"#e15f64\" font-family=\"Arial\" font-weight=\"700\">Sara</text>\n</svg>"}, "kommen": {"note": "Eine Person kommt aus Marokko und reist in eine Stadt.", "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 520\">\n<defs><linearGradient id=\"bg2\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop stop-color=\"#ebf7ff\"/><stop offset=\"1\" stop-color=\"#fff6ea\"/></linearGradient></defs>\n<rect width=\"800\" height=\"520\" rx=\"36\" fill=\"url(#bg2)\"/>\n<circle cx=\"170\" cy=\"160\" r=\"76\" fill=\"#5ba3ff\"/>\n<path d=\"M140 150c32-48 88-46 114 8-11 52-52 82-92 82-14-26-19-60-22-90z\" fill=\"#3bb56e\"/>\n<path d=\"M126 133c36-9 76-9 113 0\" stroke=\"#ffe8c0\" stroke-width=\"6\" fill=\"none\"/>\n<path d=\"M360 320h228\" stroke=\"#7fa3d6\" stroke-width=\"14\" stroke-linecap=\"round\"/>\n<path d=\"M535 255l68 65-68 65\" fill=\"none\" stroke=\"#5f7db2\" stroke-width=\"18\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<circle cx=\"290\" cy=\"170\" r=\"52\" fill=\"#ffd3b5\"/>\n<path d=\"M250 160c12-44 91-47 95 6v18h-95z\" fill=\"#664a34\"/>\n<rect x=\"238\" y=\"221\" width=\"112\" height=\"126\" rx=\"26\" fill=\"#6fca9c\"/>\n<rect x=\"220\" y=\"246\" width=\"22\" height=\"110\" rx=\"11\" fill=\"#ffd3b5\"/>\n<rect x=\"346\" y=\"240\" width=\"20\" height=\"118\" rx=\"10\" fill=\"#ffd3b5\"/>\n<rect x=\"385\" y=\"282\" width=\"85\" height=\"86\" rx=\"16\" fill=\"#f6c35c\"/>\n<rect x=\"405\" y=\"262\" width=\"45\" height=\"24\" rx=\"10\" fill=\"#d39d39\"/>\n<rect x=\"250\" y=\"346\" width=\"40\" height=\"92\" rx=\"18\" fill=\"#5875a5\"/>\n<rect x=\"300\" y=\"346\" width=\"40\" height=\"92\" rx=\"18\" fill=\"#5875a5\"/>\n<text x=\"596\" y=\"180\" font-size=\"34\" fill=\"#43608f\" font-family=\"Arial\" font-weight=\"700\">Ich komme</text>\n<text x=\"596\" y=\"220\" font-size=\"26\" fill=\"#6f7f97\" font-family=\"Arial\">aus Marokko.</text>\n</svg>"}, "sprechen": {"note": "Zwei Personen sprechen miteinander: Hallo! Guten Tag!", "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 520\">\n<defs><linearGradient id=\"bg3\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop stop-color=\"#eef2ff\"/><stop offset=\"1\" stop-color=\"#eefdf4\"/></linearGradient></defs>\n<rect width=\"800\" height=\"520\" rx=\"36\" fill=\"url(#bg3)\"/>\n<rect x=\"100\" y=\"70\" width=\"186\" height=\"88\" rx=\"22\" fill=\"#fff\"/>\n<text x=\"193\" y=\"124\" font-size=\"34\" text-anchor=\"middle\" fill=\"#4b67a0\" font-family=\"Arial\" font-weight=\"700\">Hallo!</text>\n<path d=\"M170 156l-22 34 48-20\" fill=\"#fff\"/>\n<rect x=\"510\" y=\"92\" width=\"190\" height=\"88\" rx=\"22\" fill=\"#fff\"/>\n<text x=\"605\" y=\"146\" font-size=\"30\" text-anchor=\"middle\" fill=\"#4f7d61\" font-family=\"Arial\" font-weight=\"700\">Guten Tag!</text>\n<path d=\"M570 178l-26 36 50-20\" fill=\"#fff\"/>\n<circle cx=\"250\" cy=\"205\" r=\"54\" fill=\"#ffd3b5\"/><path d=\"M208 198c8-42 86-42 90 2v16h-90z\" fill=\"#66477d\"/>\n<rect x=\"198\" y=\"258\" width=\"108\" height=\"118\" rx=\"26\" fill=\"#7ca6ff\"/>\n<rect x=\"180\" y=\"286\" width=\"20\" height=\"100\" rx=\"10\" fill=\"#ffd3b5\"/><rect x=\"304\" y=\"286\" width=\"20\" height=\"100\" rx=\"10\" fill=\"#ffd3b5\"/>\n<rect x=\"212\" y=\"376\" width=\"36\" height=\"78\" rx=\"16\" fill=\"#5b6f9f\"/><rect x=\"256\" y=\"376\" width=\"36\" height=\"78\" rx=\"16\" fill=\"#5b6f9f\"/>\n<circle cx=\"550\" cy=\"205\" r=\"54\" fill=\"#ffd3b5\"/><path d=\"M510 196c8-42 82-42 86 4v16h-86z\" fill=\"#6b5135\"/>\n<rect x=\"498\" y=\"258\" width=\"108\" height=\"118\" rx=\"26\" fill=\"#86d5aa\"/>\n<rect x=\"480\" y=\"286\" width=\"20\" height=\"100\" rx=\"10\" fill=\"#ffd3b5\"/><rect x=\"604\" y=\"286\" width=\"20\" height=\"100\" rx=\"10\" fill=\"#ffd3b5\"/>\n<rect x=\"512\" y=\"376\" width=\"36\" height=\"78\" rx=\"16\" fill=\"#5b6f9f\"/><rect x=\"556\" y=\"376\" width=\"36\" height=\"78\" rx=\"16\" fill=\"#5b6f9f\"/>\n<path d=\"M335 274c46-26 84-26 130 0\" stroke=\"#91a7d8\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-dasharray=\"10 14\"/>\n</svg>"}, "sein": {"note": "Eine Person sagt, wer sie ist: Ich bin Sara.", "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 520\">\n<defs><linearGradient id=\"bg4\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop stop-color=\"#f1f5ff\"/><stop offset=\"1\" stop-color=\"#fdf1fb\"/></linearGradient></defs>\n<rect width=\"800\" height=\"520\" rx=\"36\" fill=\"url(#bg4)\"/>\n<circle cx=\"405\" cy=\"176\" r=\"72\" fill=\"#ffd3b5\"/>\n<path d=\"M338 170c14-66 128-68 136 2v24H338z\" fill=\"#7a5ca8\"/>\n<rect x=\"322\" y=\"254\" width=\"166\" height=\"150\" rx=\"34\" fill=\"#89c3ff\"/>\n<rect x=\"300\" y=\"286\" width=\"24\" height=\"122\" rx=\"12\" fill=\"#ffd3b5\"/>\n<rect x=\"486\" y=\"286\" width=\"24\" height=\"122\" rx=\"12\" fill=\"#ffd3b5\"/>\n<rect x=\"348\" y=\"404\" width=\"52\" height=\"92\" rx=\"18\" fill=\"#6676a7\"/>\n<rect x=\"410\" y=\"404\" width=\"52\" height=\"92\" rx=\"18\" fill=\"#6676a7\"/>\n<rect x=\"140\" y=\"86\" width=\"212\" height=\"120\" rx=\"24\" fill=\"#fff\"/>\n<text x=\"246\" y=\"138\" font-size=\"32\" text-anchor=\"middle\" fill=\"#4d679b\" font-family=\"Arial\" font-weight=\"700\">Ich bin</text>\n<text x=\"246\" y=\"178\" font-size=\"30\" text-anchor=\"middle\" fill=\"#e16b8c\" font-family=\"Arial\" font-weight=\"700\">Sara</text>\n<rect x=\"540\" y=\"116\" width=\"118\" height=\"140\" rx=\"20\" fill=\"#fff\"/>\n<circle cx=\"599\" cy=\"164\" r=\"32\" fill=\"#ffd3b5\"/><path d=\"M570 160c6-22 50-26 58 0v10h-58z\" fill=\"#77513f\"/>\n<rect x=\"566\" y=\"200\" width=\"66\" height=\"38\" rx=\"12\" fill=\"#86d5aa\"/>\n<text x=\"599\" y=\"293\" font-size=\"26\" text-anchor=\"middle\" fill=\"#6f7f97\" font-family=\"Arial\">sein</text>\n</svg>"}, "haben": {"note": "Eine Person hat ein Buch und sagt: Ich habe ein Buch.", "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 520\">\n<defs><linearGradient id=\"bg5\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop stop-color=\"#eef8ff\"/><stop offset=\"1\" stop-color=\"#fff7ef\"/></linearGradient></defs>\n<rect width=\"800\" height=\"520\" rx=\"36\" fill=\"url(#bg5)\"/>\n<circle cx=\"300\" cy=\"176\" r=\"64\" fill=\"#ffd3b5\"/>\n<path d=\"M243 172c10-56 103-60 114 4v20H243z\" fill=\"#624a34\"/>\n<rect x=\"228\" y=\"252\" width=\"144\" height=\"140\" rx=\"30\" fill=\"#91d0ff\"/>\n<rect x=\"206\" y=\"282\" width=\"22\" height=\"112\" rx=\"11\" fill=\"#ffd3b5\"/>\n<rect x=\"372\" y=\"276\" width=\"22\" height=\"118\" rx=\"11\" fill=\"#ffd3b5\"/>\n<rect x=\"258\" y=\"392\" width=\"42\" height=\"90\" rx=\"18\" fill=\"#6174a4\"/>\n<rect x=\"312\" y=\"392\" width=\"42\" height=\"90\" rx=\"18\" fill=\"#6174a4\"/>\n<rect x=\"430\" y=\"190\" width=\"170\" height=\"210\" rx=\"20\" fill=\"#f5d06a\"/>\n<rect x=\"442\" y=\"206\" width=\"146\" height=\"186\" rx=\"14\" fill=\"#fff6dc\"/>\n<rect x=\"502\" y=\"190\" width=\"24\" height=\"210\" rx=\"12\" fill=\"#dfa640\"/>\n<text x=\"515\" y=\"280\" font-size=\"32\" text-anchor=\"middle\" fill=\"#d27e28\" font-family=\"Arial\" font-weight=\"700\">Buch</text>\n<rect x=\"470\" y=\"72\" width=\"220\" height=\"88\" rx=\"22\" fill=\"#fff\"/>\n<text x=\"580\" y=\"127\" font-size=\"30\" text-anchor=\"middle\" fill=\"#4d689c\" font-family=\"Arial\" font-weight=\"700\">Ich habe ein Buch.</text>\n</svg>"}};
Object.values(lesson1VerbIllustrations).forEach(item => {
  item.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(item.svg);
});
function renderWordArt(item){
  const key = item[0];
  if(currentLesson===0 && currentCategory==="Verben" && lesson1VerbIllustrations[key]){
    const art = lesson1VerbIllustrations[key];
    return `<div class="picture-art picture-art--illustrated"><img src="${art.src}" alt="${escapeHtml(key)}"></div><div class="verb-visual-note"><strong>Bild erklärt:</strong> ${escapeHtml(art.note)}</div>`;
  }
  return `<div class="picture-art"><span>${item[3]}</span></div>`;
}

function renderLearning(){
  const all = learningItems();
  const slides = buildLearningSlides(all);
  if(learningSlideIndex<0 || learningSlideIndex>=slides.length) learningSlideIndex=0;
  const activeSlide=slides[learningSlideIndex] || {title:"",items:[]};
  const tabNames = currentCategory==="Verben" ? ["Bilder","Texte","Hören","Konjugation"] : ["Bilder","Texte","Hören"];
  const tabIcons = {"Bilder":"🖼️","Texte":"📄","Hören":"🔊","Konjugation":"🔤"};
  const tabs = tabNames.map(tab => `<button class="tab-btn ${learningTab===tab?"active":""}" data-action="tab" data-tab="${tab}">${tabIcons[tab]} &nbsp; ${tab}</button>`).join("");
  let body = "";
  if(learningTab==="Konjugation" && currentCategory==="Verben"){
    const cards = all.map((it)=>{
      const forms = getVerbForms(it);
      const rows = pronouns.map((person,i)=>`<tr><td><strong>${person[0]}</strong><span class="person-translation">${person[1]}</span></td><td>${escapeHtml(forms[i] || "—")}</td></tr>`).join("");
      return `<article class="verb-conjugation-card">
        <div class="verb-card-head">
          <div class="verb-card-icon">${it[3]}</div>
          <div class="verb-card-title"><h3>${escapeHtml(it[0])}</h3><p>${escapeHtml(it[1])}</p></div>
          <span class="verb-level-tag">Präsens</span>
        </div>
        <table class="conjugation-table"><thead><tr><th>Person</th><th>Verbform</th></tr></thead><tbody>${rows}</tbody></table>
        <div class="verb-example"><div class="example-label">Beispiel</div><p>${escapeHtml(getVerbExamples(it)[0] || it[2] || it[0])}</p></div>
      </article>`;
    }).join("");
    body = `<div class="verb-conjugation-intro"><div><strong>Verbkonjugation im Präsens</strong><p>Alle sechs Personen, die richtige Verbform und ein Beispielsatz.</p></div><span style="font-size:25px">📘</span></div>
      <div class="verb-conjugation-grid">${cards}</div>
      <div class="verb-conjugation-note"><strong>Merke dir:</strong> Bei <em>du</em> und <em>er/sie/es</em> ändert sich bei manchen Verben der Stamm, zum Beispiel <strong>sprechen → du sprichst</strong>, <strong>lesen → er liest</strong> und <strong>fahren → du fährst</strong>. Bei trennbaren Verben wie <strong>abbiegen</strong> steht <em>ab</em> im Satz meistens am Ende: <strong>Ich biege hier links ab.</strong></div>`;
  }else if(learningTab==="Bilder"){
    const categoryLabel=currentCategory==="Nomen"?"Wortschatz":currentCategory;
    const cards=activeSlide.items.map(({item:it,index:i})=>{
      const image=renderLearningWordImage(it);
      const wordContent=`${image}<h3>${escapeHtml(it[0])}</h3><p class="arabic">${escapeHtml(it[1])}</p>${it[2]&&it[2]!==it[0]?`<p class="learning-word-example">${escapeHtml(it[2])}</p>`:""}`;
      const main=currentCategory==="Verben"
        ? `<button class="verb-word-trigger learning-word-trigger" data-action="verb-card" data-verb-index="${i}" aria-expanded="${activeVerbCard===i}">${wordContent}</button>`
        : `<div class="learning-word-main">${wordContent}</div>`;
      return `<article class="word-card learning-image-card ${currentCategory==="Verben"?"learning-image-card-verb":""}">
        <div class="learning-word-card-top"><span class="learning-word-group">${escapeHtml(it.groupTitle||activeSlide.title||categoryLabel)}</span><button type="button" class="learning-word-audio" data-action="learning-word-audio" data-word-index="${i}" aria-label="Wort anhören" title="Wort anhören">🔊</button></div>
        ${main}
        <div class="learning-word-card-footer"><button type="button" class="word-learned-btn" data-action="student-learn-word" data-word-index="${i}">✓ تعلمت هذه الكلمة</button><span>${escapeHtml(categoryLabel)}</span></div>
      </article>`;
    }).join("");
    const slideCount=Math.max(1,slides.length);
    const dots=slides.map((slide,index)=>`<button type="button" class="learning-slide-dot ${index===learningSlideIndex?"active":""}" data-action="learning-slide-go" data-slide-index="${index}" aria-label="الصفحة ${index+1}" aria-current="${index===learningSlideIndex?"page":"false"}"></button>`).join("");
    body = `<section class="learning-slider">
      <div class="learning-slider-heading"><div><strong>${escapeHtml(activeSlide.title||categoryLabel)}</strong><small>${activeSlide.items.length} كلمات في هذه الصفحة</small></div><span class="learning-slide-counter">${learningSlideIndex+1} / ${slideCount}</span></div>
      <div class="word-grid learning-word-grid">${cards}</div>
      <div class="learning-slider-navigation"><button type="button" class="learning-slide-arrow" data-action="learning-slide-prev" ${learningSlideIndex===0?"disabled":""}>→ السابق</button><div class="learning-slide-dots">${dots}</div><button type="button" class="learning-slide-arrow" data-action="learning-slide-next" ${learningSlideIndex>=slides.length-1?"disabled":""}>التالي ←</button></div>
    </section>${renderVerbModal()}`;
  }else if(learningTab==="Texte"){
    body = `<div class="text-list">${all.map((it,i)=>`<article class="text-card">
      <div class="text-number">${escapeHtml(it.groupTitle||`Wort ${String(i+1).padStart(2,"0")}`)}</div><h3>${escapeHtml(it[2]||it[0])}</h3><p><strong>${escapeHtml(it[0])}</strong> — ${escapeHtml(it[1])}</p>
      <div style="margin-top:15px"><button class="listen-btn" data-action="learning-word-audio" data-word-index="${i}">🔊 Wort anhören</button></div>
    </article>`).join("")}</div>`;
  }else{
    body = `<div class="listen-list">${all.map((it,i)=>`<article class="listen-card">
      <div class="sound-icon">🔊</div><div class="listen-content"><h3>${escapeHtml(it[0])}</h3><p>${escapeHtml(it[1])}</p></div>
      <button class="listen-btn" data-action="learning-word-audio" data-word-index="${i}">Anhören</button>
    </article>`).join("")}</div><div class="section-card"><strong>🎧 Tipp zum Hörtraining</strong><p class="subtitle" style="margin-top:8px">Höre das Wort zweimal. Beim zweiten Mal sprich langsam mit und achte auf die Aussprache.</p></div>`;
  }
  const displayCategory=currentCategory==="Nomen"?"Vokabeln":currentCategory;
  const content = `<div class="pill">${categoryMeta[currentCategory].icon} ${displayCategory} <span>·</span> Lektion ${lessonNumber()}</div><div class="tabs">${tabs}</div>${body}`;
  app.innerHTML = pageShell("وضع التعلّم",displayCategory,`شاهد الصور، تعرّف على الكلمات واستمع إلى النطق الألماني.`,content);
}
function renderTest(){
  const all = items();
  if(testIndex >= all.length){page="test-result";render();return;}
  const question = all[testIndex] || [];
  renderTestCenterFrame(
    "question",
    "اختبر معلوماتك",
    currentCategory,
    `الدرس ${lessonNumber()} · أجب عن الأسئلة وتحقق من نتيجتك.`,
    {
      lessonNumber: lessonNumber(),
      lessonName: lessonData().name,
      category: currentCategory,
      questions: all,
      testIndex,
      testChoice,
      testAnswered,
      testScore
    }
  );
}
function renderResult(){
  const allQuestions=items();
  const total = allQuestions.length;
  const percent = Math.round(testScore/total*100);
  const questionScores={};
  const questionCompleted={};
  const questionLabels={};
  const questionStages={};
  Object.entries(testQuestionScores||{}).forEach(([key,value])=>{
    questionScores[key]=value;
    questionCompleted[key]=true;
    questionLabels[key]=testQuestionLabels[key]||key.toUpperCase();
    questionStages[key]=`category-${slugify(currentCategory)}`;
  });
  const questionStageId=`category-${slugify(currentCategory)}`;
  const questionStageLabels={[questionStageId]:currentCategory};
  saveStudentResult(`lektion-${lessonNumber()}-${slugify(currentCategory)}`,`${lessonData().name} · ${currentCategory}`,testScore,total,{
    completedExercises:Object.keys(questionScores).length,totalExercises:total,
    scores:questionScores,completed:questionCompleted,exerciseLabels:questionLabels,
    stageByExercise:questionStages,stageLabels:questionStageLabels,
    skillType:currentCategory==="Grammatik"?"sentences":"vocab",
    attemptId:testAttemptId || createStudentAttemptId(),contentType:"test"
  });
  renderTestCenterFrame(
    "result",
    "نتيجتك",
    "أحسنت في التدريب!",
    "كل خطوة تقرّبك أكثر من هدفك في تعلّم الألمانية.",
    {
      lessonNumber: lessonNumber(),
      lessonName: lessonData().name,
      category: currentCategory,
      score: testScore,
      total,
      percent
    }
  );
}
function render(){
  applySettingsDashboardTheme();
  if(!currentUser){page="login";return renderLogin();}
  if(currentUser.role==="admin" && page==="admin-managed-html") return renderAdminManagedHtmlPage();
  if(currentUser.role==="admin"){page="admin";return renderAdmin();}
  if(page==="login"||page==="admin") page="home";
  if(currentUser.role==="student"){
    const requiredLevel=studentPageLevelRequirement();
    if(requiredLevel && !getStudentLevelAccess(requiredLevel)){
      page="learn-hub";
      showToast(`المستوى ${requiredLevel} مقفل حالياً من الإدارة.`);
      return renderLearnHub();
    }
    const requiredSection=studentPageSectionRequirement();
    if(requiredLevel && requiredSection && !getStudentSectionAccess(requiredLevel,requiredSection)){
      page="upper-level-home";
      showToast(`قسم ${requiredSection} مقفل حالياً من الإدارة.`);
      return renderUpperLevelHome();
    }
  }
  if(page==="student-results") return renderStudentResults();
  if(page==="custom-content") return renderCustomContentPage();
  if(page==="learn-hub") return renderLearnHub();
  if(page==="talk") return renderTalk();
  if(page==="sessions") return renderSessions();
  if(page==="community") return renderCommunity();
  if(page==="competition") return renderCompetition();
  if(page==="settings") return renderSettings();
  if(page==="settings-detail") return renderSettingsDetail();
  if(page==="home") return renderHome();
  if(page==="levels") return renderLevels();
  if(page==="level-home") return renderLevelHome();
  if(page==="a2-level-home") return renderA2LevelHome();
  if(page==="upper-level-home") return renderUpperLevelHome();
  if(page==="upper-level-section") return renderUpperLevelSection();
  if(page==="upper-level-course-lesson") return renderUpperLevelCourseLesson();
  if(page==="upper-level-training-skill") return renderUpperLevelTrainingSkill();
  if(page==="upper-level-muendlich-subsection") return renderUpperLevelMuendlichSubsection();
  if(page==="upper-level-muendlich-model") return renderUpperLevelMuendlichModel();
  if(page==="a2-lesson-html") return renderA2LessonHtmlPage();
  if(page==="a2-course-content") return renderA2CourseContentPage();
  if(page==="a2-test-html") return renderA2TestHtmlPage();
  if(page==="lessons") return renderLessons();
  if(page==="lesson-hub") return renderLessonHub();
  if(page==="lesson-podcasts"){podcastReturnPage="lesson-hub";podcastFilterLesson=lessonNumber();page="podcasts";return renderPodcasts();}
  if(page==="podcasts") return renderPodcasts();
  if(page==="podcast-player") return renderPodcastPlayer();
  if(page==="tests") return renderTests();
  if(page==="test-categories") return renderTestCategories();
  if(page==="standalone-lesson-test") return renderStandaloneLessonTest();
  if(page==="lesson-section-html") return renderLessonSectionHtmlPage();
  if(page==="lesson") return renderLesson();
  if(page==="interactive-lesson-poster") return renderInteractiveLessonPoster();
  if(page==="dialogue") return renderDialogue();
  if(page==="intro-dialogue") return renderIntroDialogue();
  if(page==="numbers") return renderNumbers();
  if(page==="essen") return renderEssen();
  if(page==="freizeit") return renderFreizeit();
  if(page==="stadt") return renderStadtWohnung();
  if(page==="family-tree") return renderFamilyTree();
  if(page==="category") return renderCategory();
  if(page==="learning") return renderLearning();
  if(page==="test") return renderTest();
  if(page==="test-result") return renderResult();
}
function back(){
  if(page==="admin-managed-html"){page="admin";return render();}
  if(page==="community" && communityRoom){communityRoom=null;return render();}
  if(page==="settings-detail"){page="settings";settingsActivePanel="account";}
  else if(page==="student-results") page="home";
  else if(page==="talk"){
    page=talkReturnPage||"home";
    if(page==="lesson-hub") currentLesson=talkReturnLesson;
    tutorToolOpen=false;
    tutorKeyboardOpen=false;
  }
  else if(page==="learn-hub"||page==="sessions"||page==="community"||page==="competition"||page==="settings") page="home";
  else if(page==="levels") page="home";
  else if(page==="level-home") page="learn-hub";
  else if(page==="a2-level-home") page="learn-hub";
  else if(page==="upper-level-home") page="learn-hub";
  else if(page==="upper-level-section") page="upper-level-home";
  else if(page==="upper-level-course-lesson"){
    saveActiveCourseBeforeExit();
    document.documentElement.classList.remove("challenge-fullscreen-open");
    document.body.classList.remove("challenge-fullscreen-open");
    page="upper-level-section";
  }
  else if(page==="upper-level-training-skill") page="upper-level-section";
  else if(page==="upper-level-muendlich-subsection"){
    document.documentElement.classList.remove("challenge-fullscreen-open");
    document.body.classList.remove("challenge-fullscreen-open");
    page="upper-level-training-skill";
  }
  else if(page==="upper-level-muendlich-model"){
    document.documentElement.classList.remove("challenge-fullscreen-open");
    document.body.classList.remove("challenge-fullscreen-open");
    page="upper-level-muendlich-subsection";
  }
  else if(page==="a2-course-content"){
    saveActiveCourseBeforeExit();
    document.documentElement.classList.remove("challenge-fullscreen-open");
    document.body.classList.remove("challenge-fullscreen-open");
    page="a2-lesson-html";
  }
  else if(page==="a2-lesson-html" || page==="a2-test-html"){
    document.documentElement.classList.remove("challenge-fullscreen-open");
    document.body.classList.remove("challenge-fullscreen-open");
    page="a2-level-home";
  }
  else if(page==="lessons"||page==="tests") page="levels";
  else if(page==="podcasts"){
    document.documentElement.classList.remove("challenge-fullscreen-open");document.body.classList.remove("challenge-fullscreen-open");
    page=podcastReturnPage||"levels";podcastFilterLesson=null;activePodcastSelection=null;activePodcastFile=null;activePodcastLoading=false;activePodcastError="";
  }
  else if(page==="lesson-hub") page=lessonHubReturnPage||"level-home";
  else if(page==="lesson-podcasts"){page="podcasts";podcastReturnPage="lesson-hub";podcastFilterLesson=lessonNumber();}
  else if(page==="podcast-player") page="podcasts";
  else if(page==="test-categories") page=testCategoriesReturnPage||"tests";
  else if(page==="standalone-lesson-test"){document.documentElement.classList.remove("challenge-fullscreen-open");document.body.classList.remove("challenge-fullscreen-open");page=testCategoriesReturnPage||"tests";}
  else if(page==="lesson-section-html"){saveActiveCourseBeforeExit();document.documentElement.classList.remove("challenge-fullscreen-open");document.body.classList.remove("challenge-fullscreen-open");page=lessonSectionReturnPage||"lesson-hub";}
  else if(page==="lesson") page=courseReturnPage||"lessons";
  else if(page==="interactive-lesson-poster") page="lesson";
  else if(page==="dialogue") page=dialogueReturnPage;
  else if(page==="intro-dialogue") page=dialogueReturnPage;
  else if(page==="numbers") page="lesson";
  else if(page==="essen") page="lesson";
  else if(page==="freizeit") page="lesson";
  else if(page==="stadt") page="lesson";
  else if(page==="family-tree") page="lesson";
  else if(page==="category"){page=categoryReturnPage||"lesson";categoryReturnPage="lesson";}
  else if(page==="learning") page="category";
  else if(page==="custom-content") page=customContentReturnPage||"lesson-hub";
  else if(page==="test"||page==="test-result") page=testReturnPage;
  render();
}
function showToast(message){
  toast.textContent=message;toast.classList.add("show");
  window.clearTimeout(showToast.timer);showToast.timer=window.setTimeout(()=>toast.classList.remove("show"),2600);
}
function speak(text){
  if(!readSettingsDashboardPrefs().sound){showToast("الصوت متوقف من الإعدادات.");return;}
  if(!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)){
    showToast("Die Sprachausgabe wird von diesem Browser leider nicht unterstützt.");return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang="de-DE";utterance.rate=0.82;utterance.pitch=1;
  const voices=window.speechSynthesis.getVoices();
  const germanVoice=voices.find(v=>v.lang && v.lang.toLowerCase().startsWith("de"));
  if(germanVoice) utterance.voice=germanVoice;
  window.speechSynthesis.speak(utterance);
}
const podcastWordOverlay = document.getElementById("podcastWordOverlay");
const podcastWordGerman = document.getElementById("podcastWordGerman");
const podcastWordMeaning = document.getElementById("podcastWordMeaning");
const podcastWordClose = document.getElementById("podcastWordClose");
function closePodcastWordPopup(){
  if(!podcastWordOverlay) return;
  podcastWordOverlay.classList.remove("open");
  podcastWordOverlay.setAttribute("aria-hidden","true");
}
if(podcastWordClose) podcastWordClose.addEventListener("click",closePodcastWordPopup);
if(podcastWordOverlay) podcastWordOverlay.addEventListener("click",function(event){
  if(event.target === podcastWordOverlay) closePodcastWordPopup();
});
document.addEventListener("keydown",function(event){
  if(event.key === "Escape"){
    if(page==="upper-level-muendlich-subsection" && upperLevelInfo()==="B2" && upperLevelSelectedMundlichSection==="speaking"){
      document.documentElement.classList.remove("challenge-fullscreen-open");
      document.body.classList.remove("challenge-fullscreen-open");
      upperLevelSelectedTrainingSkill="muendlich";
      page="upper-level-training-skill";render();return;
    }
    if(page==="upper-level-muendlich-model"){
      document.documentElement.classList.remove("challenge-fullscreen-open");
      document.body.classList.remove("challenge-fullscreen-open");
      page="upper-level-muendlich-subsection";render();return;
    }
    if(page==="settings-detail"){page="settings";settingsActivePanel="account";render();return;}
    if(document.getElementById("courseResumeDialog")){pendingCourseLaunch=null;closeCourseResumeDialog();}
    closePodcastWordPopup();
    if(page==="admin" && adminGroupFullscreenOpen){
      const detailsModal=document.getElementById("adminStudentDetailsModal");
      if(detailsModal && detailsModal.classList.contains("open")){closeAdminStudentDetails();return;}
      if(adminEditingStudentLessonsId){adminEditingStudentLessonsId=null;render();return;}
      adminGroupFullscreenOpen=false;
      adminSelectedGroupId=null;
      render();
      return;
    }
    closeAdminStudentDetails();
    if(page==="student-results" && studentResultsActiveTool==="resultsLessonStatus"){studentLessonStatusFilter="all";studentResultsActiveTool="";render();return;}
    if(page==="student-results" && studentResultsActiveTool==="resultsVocabularyPractice" && studentVocabularyTrainingMode){studentVocabularyTrainingMode="";studentVocabularyTrainingFeedback="";studentVocabularyTrainingOrder=[];studentVocabularyTrainingRevealed=false;studentVocabularyTrainingDone=false;render();return;}
    if(page==="student-results" && studentResultsActiveTool==="resultsVocabularyPractice"){studentResultsActiveTool="resultsVocabularyWord";studentVocabularyTrainingMode="";render();return;}
    if(page==="student-results" && studentResultsActiveTool==="resultsVocabularyWord"){studentResultsActiveTool="resultsVocabulary";studentVocabularyPracticeOpen=false;studentVocabularyPracticeFeedback="";render();return;}
    if(page==="student-results" && studentResultsActiveTool==="resultsVocabulary"){studentResultsActiveTool="resultsSkills";studentResultsActiveSkill="vocab";studentResultsSkillDetailOpen=false;render();return;}
    if(page==="student-results" && studentResultsActiveTool==="resultsSkills" && studentResultsSkillDetailOpen){studentResultsSkillDetailOpen=false;render();return;}
    if(page==="student-results" && studentResultsActiveTool){
      studentResultsActiveTool="";
      studentResultsSkillDetailOpen=false;
      const returnPage=studentResultsReturnPage||"student-results";
      studentResultsReturnPage="student-results";
      if(returnPage!=="student-results")page=returnPage;
      render();
    }
  }
});
document.addEventListener("change",function(event){
  const target=event.target;
  if(!target)return;
  if(target.id==="adminTaskGroupSelect"){
    adminTaskGroupId=target.value||"";adminEditingTaskId=null;adminTaskDetailId="";render();return;
  }
  if(target.id==="adminTaskTargetMode"){
    const picker=document.getElementById("adminTaskStudentPicker");
    if(picker)picker.hidden=target.value!=="students";
  }
});

document.addEventListener("click",function(event){
  if(event.target && event.target.id==="adminStudentDetailsModal") closeAdminStudentDetails();
});
window.addEventListener("message",function(event){
  const frame = document.getElementById("podcastInlineFrame") || document.getElementById("podcastPlayerFrame");
  if(!frame || event.source !== frame.contentWindow) return;
  const data = event.data;
  if(!data || data.type !== "podcast-word-translation") return;
  podcastWordGerman.textContent = String(data.german || "");
  podcastWordMeaning.textContent = String(data.meaning || "");
  podcastWordOverlay.classList.add("open");
  podcastWordOverlay.setAttribute("aria-hidden","false");
});

document.addEventListener("change",function(event){
  const target=event.target;
  if(!target)return;
  if(target.id==="settingsUiLanguage" || target.id==="settingsTranslationLanguage"){
    const prefs=readSettingsLanguages();
    if(!SETTINGS_LANGUAGES[target.value])return;
    if(target.id==="settingsUiLanguage")prefs.ui=target.value;
    else prefs.translation=target.value;
    saveSettingsLanguages(prefs);
    renderSettingsDetail();
    showToast(settingsStrings().langSaved);
    return;
  }
  if(target.id==="studentVocabularyLessonFilter"){
    const lessonNo=Number(target.value);
    const lessonCount=studentVocabularyReviewLevel==="A2"?a2CourseLessons.length:lessons.length;
    if(Number.isInteger(lessonNo)&&lessonNo>=1&&lessonNo<=lessonCount){
      studentVocabularyReviewLesson=lessonNo;
      render();
    }
    return;
  }
  if(target.id==="studentSkillLessonFilter"){
    const lessonNo=Number(target.value);
    if(Number.isInteger(lessonNo)&&lessonNo>=1&&lessonNo<=lessons.length){
      studentSkillLearningLesson=lessonNo;
      studentSkillLearningMode="browse";
      studentSkillResetPractice();
      render();
    }
    return;
  }
  if(target.id==="adminPageImportFile"){
    const file = target.files && target.files[0];
    target.value = "";
    if(file) importAdminManagedPageFile(file);
    return;
  }
  if(target.id==="adminPageSelect"){
    const path = normalizeManagedPagePath(target.value);
    if(path){
      const pathInput = document.getElementById("adminPagePath");
      if(pathInput) pathInput.value = path;
      adminPageSelectedPath = path;
      const status = document.getElementById("adminPageStatus");
      if(status) status.textContent = `تم اختيار ${path}. اضغط «تحميل من pages» لجلب محتواها قبل التعديل.`;
    }
    return;
  }
  if(target.id==="competitionWholeExercises"){
    competitionWholeExercises=Boolean(target.checked);
    competitionExerciseSelections={};competitionExerciseDrafts={};competitionExerciseTileDrafts={};
    renderCompetition();return;
  }
  if(target.matches('select[data-competition-exercise-question]')){
    const index=Number(target.dataset.competitionExerciseQuestion);
    if(Number.isInteger(index)&&index>=0){
      if(target.value==="")delete competitionExerciseSelections[index];
      else competitionExerciseSelections[index]=Number(target.value);
    }
    competitionUpdateExerciseSubmitButton();
    return;
  }
  if(target.id==="competitionCustomCount"){
    const count=Number(target.value), max=competitionAvailableQuestionCount();
    if(!Number.isInteger(count)||count<1||count>max){
      showToast(`اختار عدد بين 1 و ${max}.`);
      target.value=String(competitionQuestionCount);
      return;
    }
    competitionQuestionCount=count;
    renderCompetition();return;
  }
  if(target.id==="adminStudentFilter"){adminStudentFilter=target.value||"all";render();return;}
  if(target.id==="adminGroupFilter"){adminGroupFilter=target.value||"all";render();return;}
  if(target.id==="adminAnalyticsGroupFilter"){adminAnalyticsGroupFilter=target.value||"all";render();return;}
  if(target.id==="adminAnalyticsStudentFilter"){adminAnalyticsStudentFilter=target.value||"all";render();return;}
  if(target.id==="adminResultsGroupFilter"){adminResultsGroupId=target.value||"all";adminResultsStudentId="all";adminProgressLessonStatusFilter="";adminProgressMetricOpen="";adminProgressMetricStudentId="";render();return;}
  if(target.id==="adminResultsStudentFilter"){adminResultsStudentId=target.value||"all";adminProgressLessonStatusFilter="";adminProgressMetricOpen="";adminProgressMetricStudentId="";render();return;}
  if(target.id==="adminResultsLessonFilter"){adminResultsLessonFilter=target.value||"all";render();return;}
  if(target.id==="adminResultsTypeFilter"){adminResultsTypeFilter=target.value||"all";render();return;}
  if(target.id==="studentProgressLessonFilter"){studentProgressLessonFilter=target.value||"all";render();return;}
  if(target.matches('[data-action="admin-assign-group"]')){
    assignStudentGroup(target.dataset.id,target.value);return;
  }
});

window.addEventListener("message",function(event){
  const ownedTestFrame=document.getElementById("standaloneLessonTestFrame");
  const customContentFrame=document.getElementById("customContentHtmlFrame");
  const fromOwnedTestFrame=!!ownedTestFrame && event.source===ownedTestFrame.contentWindow;
  const fromCustomContentFrame=!!customContentFrame && event.source===customContentFrame.contentWindow;
  const sameOrigin=event.origin===window.location.origin ||
    (window.location.protocol==="file:" && event.origin==="null");
  if(!sameOrigin && !fromOwnedTestFrame && !fromCustomContentFrame) return;
  const data=event.data;
  if(!data || typeof data!=="object") return;
  if(["deutsch-course-native-state-v8","deutsch-course-native-state-v7"].includes(data.type) &&
     activeCourseFrame?.frame?.contentWindow===event.source && sameOrigin){
    const {level,no}=activeCourseFrame;
    if(activeCourseFrame.initializing || data.level!==level || Number(data.lessonNumber)!==Number(no))return;
    const state=data.state;
    if(!state || !Number.isInteger(Number(state.lastTab)) ||
      Number(state.lastTab)<0 || Number(state.lastTab)>63)return;
    const native=readNativeCourseState(activeCourseFrame.frame.contentWindow);
    if(native && native.current!==Number(state.lastTab))return;
    const previous=getCourseProgress(level,no)||{};
    const updates={nativeResumeVersion:Number(state.nativeResumeVersion)||8,lastTab:Number(state.lastTab),nativeStages:state.nativeStages,
      nativeNavigationAt:state.nativeNavigationAt||new Date().toISOString(),navigationAt:state.navigationAt||new Date().toISOString(),
      nativeQuiz:state.nativeQuiz||null,completed:state.completed===true,
      totalTabs:Number(state.totalTabs)||previous.totalTabs||0,
      scrollTop:Number(state.scrollTop)||0};
    saveCourseProgress(level,no,updates);
    storeCourseStageResults(level,no,{stages:state.nativeStages,quizTotal:10});
    return;
  }
  if(data.type==="deutsch-a1-course-progress" && activeCourseFrame?.frame?.contentWindow===event.source && sameOrigin){
    if(activeCourseFrame.initializing)return;
    // postMessage is queued; stale stage-1 initialization messages can arrive
    // AFTER the lesson already restored stage 3 or 4. Compare native state.
    const claimed=Number(data.slideIndex);
    const actualNative=readNativeCourseState(activeCourseFrame.frame.contentWindow);
    if(actualNative && Number.isInteger(actualNative.current) && actualNative.current!==claimed)return;
    if(!actualNative){
      const doc=activeCourseFrame.frame.contentDocument;
      const selected=activeCourseTabIndex(findCourseTabs(doc));
      if(selected>=0 && selected!==claimed)return;
    }
    const {level,no}=activeCourseFrame;
    const updates={};
    if(Number.isInteger(Number(data.slideIndex)) && Number(data.slideIndex)>=0)updates.lastTab=Number(data.slideIndex);
    if(Number.isInteger(Number(data.totalSlides)) && Number(data.totalSlides)>1)updates.totalTabs=Number(data.totalSlides);
    if(typeof data.completed==="boolean")updates.completed=data.completed;
    if(typeof data.label==="string")updates.lastTabLabel=data.label.slice(0,85);
    if(Object.keys(updates).length)saveCourseProgress(level,no,updates);
    return;
  }
  if(data.type==="deutsch-a1-progress-report"){
    if(fromCustomContentFrame){
      const meta=activeCustomContentMeta;
      const isActiveAdminTest=!!meta && (meta.area==="test" || meta.kind==="test") &&
        String(data.customContentId||"")===String(meta.id||"");
      if(!isActiveAdminTest || currentUser?.role!=="student") return;
      saveEmbeddedProgressReport({
        ...data,
        moduleId:"custom-test-"+String(meta.id)+"-lektion-"+Number(meta.lessonNumber),
        title:String(meta.title||"اختبار إضافي")+" · Lektion "+Number(meta.lessonNumber),
        lessonNumber:Number(meta.lessonNumber),
        customContentId:String(meta.id||""),
        contentType:"test",
        activityType:"test",
        source:"admin-custom-test"
      });
      return;
    }
    saveEmbeddedProgressReport(data);
    return;
  }
  if(data.type==="deutsch-a1-close-test"){
    document.documentElement.classList.remove("challenge-fullscreen-open");
    document.body.classList.remove("challenge-fullscreen-open");
    page=testCategoriesReturnPage||"tests";
    render();
    return;
  }
  if(data.type==="deutsch-a1-app-nav"){
    saveActiveCourseBeforeExit();
    document.documentElement.classList.remove("challenge-fullscreen-open");
    document.body.classList.remove("challenge-fullscreen-open");
    if(setStudentPageForTab(data.tab)) render();
  }
});

// Fallback bridge: localStorage changes made inside a same-origin exercise iframe
// are also delivered to the parent window as a storage event. This catches reports
// even if a postMessage is interrupted while the iframe is closing or navigating.
window.addEventListener("storage",function(event){
  if(event.key === "deutsch_a1_results_v1" && event.newValue) {
    syncEmbeddedProgressFromLocalStorage(event.newValue);
  }
});
window.addEventListener("focus",function(){ syncEmbeddedProgressFromLocalStorage(); });

document.addEventListener("submit",function(event){
  if(event.target && event.target.id==="loginForm"){event.preventDefault();loginFromForm();return;}
  if(event.target && event.target.id==="tutorForm"){sendTutorMessage(event);return;}
  if(event.target && event.target.id==="communityForm"){sendCommunityMessage(event);return;}
  if(event.target && event.target.id==="competitionJoinForm"){joinCompetition(event);return;}
});

document.addEventListener("input",function(event){
  const target=event.target;
  if(!target)return;
  if(target.id==="studentVocabularySearch"){
    const query=String(target.value||"").trim().toLocaleLowerCase();
    const rows=Array.from(document.querySelectorAll(".student-vocab-row"));
    let visible=0;
    rows.forEach(row=>{
      const match=!query || String(row.dataset.search||"").toLocaleLowerCase().includes(query);
      row.hidden=!match;
      if(match)visible++;
    });
    const empty=document.getElementById("studentVocabularySearchEmpty");
    if(empty)empty.hidden=visible>0;
    return;
  }
  if(target.id==="studentSkillWritingInput"){
    studentSkillWritingInput=String(target.value||"");
    const checkButton=document.querySelector('[data-action="student-skill-writing-check"]');
    if(checkButton)checkButton.disabled=!studentSkillWritingInput.trim();
    return;
  }
  if(target.matches("[data-competition-text-question]")){
    const index=Number(target.dataset.competitionTextQuestion);
    const question=competitionActiveQuizData()?.questions?.[index];
    if(Number.isInteger(index)&&question){
      competitionExerciseDrafts[index]=target.value;
      const resolved=competitionResolveExerciseText(question,target.value);
      if(resolved===null)delete competitionExerciseSelections[index];
      else competitionExerciseSelections[index]=resolved;
      competitionUpdateExerciseSubmitButton();
    }
    return;
  }
  if(target.id==="uiTextScale" || target.id==="uiIconScale"){
    const preferences=readUiDisplayPreferences();
    if(target.id==="uiTextScale") preferences.textScale=Math.min(1.30,Math.max(0.90,(Number(target.value)||108)/100));
    if(target.id==="uiIconScale") preferences.iconScale=Math.min(1.40,Math.max(0.90,(Number(target.value)||112)/100));
    saveUiDisplayPreferences(preferences);
    applyUiDisplayPreferences();
    const output=document.getElementById(target.id==="uiTextScale"?"uiTextScaleValue":"uiIconScaleValue");
    if(output)output.textContent=Math.round(Number(target.value)||100)+"%";
  }
});

document.addEventListener("click",function(event){
  const el=event.target.closest("[data-action]");
  if(!el)return;
  const action=el.dataset.action;
  if(action==="settings-v30-toggle"){
    const pref=el.dataset.pref;
    if(!["notifications","sound","dark","reminders"].includes(pref))return;
    const prefs=readSettingsDashboardPrefs();
    prefs[pref]=!prefs[pref];
    saveSettingsDashboardPrefs(prefs);
    applySettingsDashboardTheme();
    if(pref==="sound"&&!prefs.sound&&"speechSynthesis" in window)window.speechSynthesis.cancel();
    renderSettings();
    if((pref==="notifications"||pref==="reminders")&&prefs[pref])showToast("تم حفظ التفضيل. الإشعارات والتذكيرات الفعلية تحتاج تفعيل خدمة الإشعارات.");
    return;
  }
  if(action==="settings-open-panel"){
    const section=el.dataset.panel;
    if(["account","learning","display","privacy","help"].includes(section)){
      settingsActivePanel=section;page="settings-detail";render();
      const focusId=el.dataset.focus;
      if(focusId)window.requestAnimationFrame(()=>{const field=document.getElementById(focusId);if(field)field.focus({preventScroll:true});});
    }
    return;
  }
  if(action==="settings-back"){
    settingsActivePanel="account";page="settings";render();return;
  }
  if(action==="course-resume"){launchPendingCourse("resume");return;}
  if(action==="course-restart"){launchPendingCourse("restart");return;}
  if(action==="course-resume-cancel"){pendingCourseLaunch=null;closeCourseResumeDialog();return;}
  if(action==="student-nav"){
    const tab=el.dataset.tab;
    if(tab==="home") page="home";
    else if(tab==="learn") page="learn-hub";
    else if(tab==="talk"){talkReturnPage="home";talkReturnLesson=currentLesson;tutorLessonIndex=currentLesson;tutorTool="conversation";tutorToolOpen=false;tutorMessages=[];page="talk";}
    else if(tab==="sessions") page="sessions";
    else if(tab==="community"){page="community";communityRoom=null;}
    else if(tab==="competition"){page="competition";loadCompetitionStats();}
    else if(tab==="progress"){page="student-results";studentResultsExpanded=false;studentResultsActiveTool="";}
    else studentResultsActiveTool="";
    render();return;
  }
  else if(action==="competition-level"){
    const level=normalizeGroupCourseLevel(el.dataset.level||"A1");
    if(!getStudentCompetitionLevelAccess(level)){
      showToast(`المستوى ${level} مقفول من الإدارة للمجموعة ديالك.`);return;
    }
    competitionSelectedLevel=level;
    competitionSelectedLessons=[];competitionSelectedTestTypes={};competitionExpandedLesson=null;
    competitionCreateMessage="";competitionCreateMessageIsError=false;
    if(!competitionLevelHasQuestionBank(level))showToast(`المستوى ${level} مفتوح، ولكن بنك أسئلة المنافسة ديالو مازال ما تضافش.`);
    renderCompetition();return;
  }
  else if(action==="competition-mode"){
    competitionMode=["duel","group","self"].includes(el.dataset.mode)?el.dataset.mode:"duel";
    competitionCreateMessage="";competitionCreateMessageIsError=false;
    renderCompetition();return;
  }
  else if(action==="competition-lesson"){
    const idx=Number(el.dataset.lesson);
    const levelLessons=competitionLessonsForLevel(competitionSelectedLevel);
    if(!Number.isInteger(idx)||idx<0||idx>=levelLessons.length||!competitionLessonHasBank(idx,competitionSelectedLevel)||!competitionLessonAccess(idx,competitionSelectedLevel))return;
    if(competitionSelectedLessons.includes(idx)){
      // Clicking a checked lesson removes its tick, including the last lesson.
      competitionSelectedLessons=competitionSelectedLessons.filter(i=>i!==idx);
      delete competitionSelectedTestTypes[idx];
      if(competitionExpandedLesson===idx)competitionExpandedLesson=competitionSelectedLessons[0]??null;
    }else{
      competitionSelectedLessons=[...competitionSelectedLessons,idx].sort((a,b)=>a-b);
      competitionEnsureTypes(idx);
      competitionExpandedLesson=idx;
    }
    renderCompetition();
    return;
  }
  else if(action==="competition-open-lesson"){
    const idx=Number(el.dataset.lesson);
    if(competitionSelectedLessons.includes(idx)){
      competitionExpandedLesson=idx;
      renderCompetition();
    }
    return;
  }
  else if(action==="competition-lesson-remove"){
    const idx=Number(el.dataset.lesson);
    if(!competitionSelectedLessons.includes(idx))return;
    competitionSelectedLessons=competitionSelectedLessons.filter(i=>i!==idx);
    delete competitionSelectedTestTypes[idx];
    competitionExpandedLesson=competitionSelectedLessons[0]??null;
    renderCompetition();return;
  }
  else if(action==="competition-types-all"){
    const idx=Number(el.dataset.lesson);
    if(!competitionSelectedLessons.includes(idx))return;
    competitionSelectedTestTypes[idx]=(competitionCatalogForLevel()[idx]?.types||[]).map((_,i)=>i);
    renderCompetition();return;
  }
  else if(action==="competition-type"){
    const idx=Number(el.dataset.lesson),typeIndex=Number(el.dataset.type);
    const types=competitionCatalogForLevel()[idx]?.types||[];
    if(!competitionSelectedLessons.includes(idx)||!Number.isInteger(typeIndex)||!types[typeIndex])return;
    const selected=competitionEnsureTypes(idx).slice();
    if(selected.includes(typeIndex)){
      // Permit unticking the last question type too; creation stays disabled until valid.
      competitionSelectedTestTypes[idx]=selected.filter(n=>n!==typeIndex);
    }else competitionSelectedTestTypes[idx]=[...selected,typeIndex].sort((a,b)=>a-b);
    renderCompetition();return;
  }
  else if(action==="competition-count"){
    const count=Number(el.dataset.count);
    const available=competitionAvailableQuestionCount();
    if(Number.isInteger(count)&&count>=1&&count<=available)competitionQuestionCount=count;
    renderCompetition();return;
  }
  else if(action==="competition-create"){createCompetition();return;}
  else if(action==="competition-self-create"){createSelfCompetition();return;}
  else if(action==="competition-self-answer"){submitSelfCompetitionChoice(Number(el.dataset.option));return;}
  else if(action==="competition-self-submit-uebung"){submitSelfCompetitionUebung();return;}
  else if(action==="competition-self-leave"){leaveSelfCompetition();return;}
  else if(action==="competition-self-retry"){retrySelfCompetition();return;}
  else if(action==="competition-copy-code"){copyCompetitionCode();return;}
  else if(action==="competition-share-code"){shareCompetitionCode();return;}
  else if(action==="competition-start"){startCompetition();return;}
  else if(action==="competition-retry-room"){
    const roomId=competitionRoomId;
    if(roomId){
      competitionRoomError="";
      renderCompetitionRoom();
      refreshCompetitionRoom(roomId);
    }
    return;
  }
  else if(action==="competition-answer"){submitCompetitionChoice(Number(el.dataset.option));return;}
  else if(action==="competition-exercise-choice"){
    const index=Number(el.dataset.questionIndex),option=Number(el.dataset.option);
    const question=competitionActiveQuizData()?.questions?.[index];
    if(!question||!Number.isInteger(option)||option<0||option>3||option>=(question.options||[]).length)return;
    competitionExerciseSelections[index]=option;
    renderActiveCompetitionQuiz();
    competitionUpdateExerciseSubmitButton();
    return;
  }
  else if(action==="competition-exercise-tile"){
    const index=Number(el.dataset.questionIndex),tileIndex=Number(el.dataset.tileIndex);
    const question=competitionActiveQuizData()?.questions?.[index];
    if(!question||!Number.isInteger(tileIndex))return;
    const kind=el.dataset.tileKind==="letters"?"letters":"words";
    const tiles=kind==="letters"?(question.letters||Array.from(String(question.scramble||"").replace(/\s+/g,""))):(question.tiles||[]);
    if(tileIndex<0||tileIndex>=tiles.length)return;
    const draft=Array.isArray(competitionExerciseTileDrafts[index])?competitionExerciseTileDrafts[index].slice():[];
    const at=draft.indexOf(tileIndex);
    if(at>=0)draft.splice(at,1);else draft.push(tileIndex);
    competitionExerciseTileDrafts[index]=draft;
    if(draft.length===tiles.length){
      const answer=draft.map(i=>tiles[i]).join(kind==="letters"?"":" ");
      const resolved=competitionResolveExerciseText(question,answer);
      competitionExerciseSelections[index]=resolved===null?Number(question.invalidIndex)||0:resolved;
    }else delete competitionExerciseSelections[index];
    renderActiveCompetitionQuiz();
    competitionUpdateExerciseSubmitButton();
    return;
  }
  else if(action==="competition-next"){
    if(competitionSelfChallengeId){
      const questions=competitionSelfChallengeData?.questions||[];
      const currentQuestion=questions[competitionQuestionIndex];
      if(currentQuestion?.groupId){
        while(questions[competitionQuestionIndex]?.groupId===currentQuestion.groupId)competitionQuestionIndex++;
      }else competitionQuestionIndex++;
      competitionSelfFeedback=null;
      competitionExerciseSelections={};competitionExerciseDrafts={};competitionExerciseTileDrafts={};
      renderCompetitionSelfChallenge();
      return;
    }
    const currentQuestion=competitionRoomData?.questions?.[competitionQuestionIndex];
    if(currentQuestion?.groupId){
      while(competitionRoomData?.questions?.[competitionQuestionIndex]?.groupId===currentQuestion.groupId){
        competitionQuestionIndex++;
      }
    }else competitionQuestionIndex++;
    competitionFeedback=null;
    competitionExerciseSelections={};competitionExerciseDrafts={};competitionExerciseTileDrafts={};
    renderCompetitionRoom();
    return;
  }
  else if(action==="competition-submit-uebung"){submitCompetitionUebung();return;}
  else if(action==="competition-finish"){finishCompetition();return;}
  else if(action==="competition-leave"){leaveCompetition();return;}
  else if(action==="student-settings"){page="settings";render();return;}
  else if(action==="ui-reset-display"){
    saveUiDisplayPreferences({...UI_DISPLAY_DEFAULTS});
    applyUiDisplayPreferences();
    render();
    showToast("رجعنا الحجم الافتراضي للكتابة والأيقونات.");
    return;
  }
  else if(action==="student-notifications"){showToast("ما كايناش إشعارات جديدة حالياً.");return;}
  else if(action==="home-start-lesson"){
    currentLesson=getHomeLessonIndex();rememberHomeLesson(currentLesson);selectedLevel=currentLesson<5?"A1.1":"A1.2";
    if(!getStudentLessonAccess(currentLesson)){showToast("Diese Lektion wurde vom Administrator gesperrt.");return;}
    lessonHubReturnPage="level-home";markDailyLessonStarted();page="lesson-hub";render();return;
  }
  else if(action==="learn-open-voice"){
    tutorLessonIndex=getHomeLessonIndex();currentLesson=tutorLessonIndex;rememberHomeLesson(tutorLessonIndex);
    selectedLevel=tutorLessonIndex<5?"A1.1":"A1.2";
    talkReturnPage="learn-hub";talkReturnLesson=tutorLessonIndex;
    tutorTool="conversation";tutorToolOpen=true;tutorMessages=loadTutorMessages();
    page="talk";render();return;
  }
  else if(action==="learn-reset-conversation"){
    tutorLessonIndex=getHomeLessonIndex();tutorTool="conversation";
    localStorage.removeItem(tutorStorageKey());tutorMessages=[];
    showToast("تم مسح المحادثة.");
    renderLearnHub();return;
  }
  else if(action==="learn-placement-test"){
    showToast("اختبار تحديد المستوى قيد الإعداد حالياً.");
    return;
  }
  else if(action==="daily-open"){openDailyTask(el.dataset.task);return;}
  else if(action==="daily-complete"){setDailyTaskDone(el.dataset.task);renderHome();return;}
  else if(action==="daily-open-assigned"){openAssignedDailyTask(el.dataset.taskId||"");return;}
  else if(action==="daily-complete-assigned"){completeStudentAssignedTask(el.dataset.taskId||"");return;}
  else if(action==="level-path"){
    const requestedLevel=normalizeGroupCourseLevel(el.dataset.level||"A1");
    if(!getStudentLevelAccess(requestedLevel)){showToast(`المستوى ${requestedLevel} مقفل حالياً من الإدارة.`);return;}
    if(requestedLevel==="A1"){selectedLevel="A1.1";page="level-home";render();}
    else if(requestedLevel==="A2"){currentA2LessonNo=1;page="a2-level-home";render();}
    else if(["B1","B2"].includes(requestedLevel)){upperLevelSelected=requestedLevel;page="upper-level-home";render();}
    else showToast("هذا المستوى غير معروف.");
    return;
  }
  else if(action==="upper-level-open-section"){
    const section=el.dataset.section;
    if(UPPER_LEVEL_SECTIONS.some(item=>item.id===section)){
      if(!getStudentSectionAccess(upperLevelInfo(),section)){showToast(`قسم ${section} مقفل حالياً من الإدارة.`);return;}
      upperLevelSelectedSection=section;
      page="upper-level-section";
      render();
    }
    return;
  }
  else if(action==="upper-level-return"){
    page="upper-level-home";render();return;
  }
  else if(action==="upper-level-course-open-lesson"){
    const no=Number(el.dataset.lessonNo);
    if(!Number.isInteger(no)||no<1||no>UPPER_LEVEL_KURS_LESSON_COUNT)return;
    const level=upperLevelInfo();
    if(!getStudentLevelAccess(level) || !getStudentSectionAccess(level,"kurs") || !getStudentLessonAccess(no-1,level)){showToast("هاد الدرس مقفل حالياً من طرف الإدارة.");return;}
    upperLevelSelectedLessonNo=no;
    const lesson=upperLevelCourseLesson(level,no);
    if(lesson.path){
      askCourseResume(level,no,()=>{page="upper-level-course-lesson";render();});
    }else{
      page="upper-level-course-lesson";
      render();
    }
    return;
  }
  else if(action==="upper-level-course-back"){
    page="upper-level-section";
    render();
    return;
  }
  else if(action==="upper-level-training-skill"){
    const skillId=el.dataset.skill||"";
    if(!getStudentSectionAccess(upperLevelInfo(),"training")){showToast("قسم Training Prüfung مقفل حالياً من الإدارة.");return;}
    if(UPPER_LEVEL_TRAINING_SKILLS.some(item=>item.id===skillId)){
      upperLevelSelectedTrainingSkill=skillId;
      page="upper-level-training-skill";
      render();
    }
    return;
  }
  else if(action==="upper-level-muendlich-open"){
    const sectionId=el.dataset.section||"";
    if(!getStudentSectionAccess(upperLevelInfo(),"training")){showToast("قسم Training Prüfung مقفل حالياً من الإدارة.");return;}
    if(UPPER_LEVEL_MUENDLICH_SECTIONS.some(section=>section.id===sectionId)){
      if(upperLevelInfo()==="B2" && sectionId==="speaking"){
        openB2SpeakingInSameTab();
        return;
      }
      upperLevelSelectedMundlichSection=sectionId;
      page="upper-level-muendlich-subsection";
      render();
    }
    return;
  }
  else if(action==="upper-level-muendlich-model-open"){
    if(upperLevelInfo()!=="B2" || upperLevelSelectedMundlichSection!=="models")return;
    const idx=Number(el.dataset.modelIndex);
    const resources=(UPPER_LEVEL_RESOURCE_LISTS.B2.training||[]).filter(item=>item && item.skill==="muendlich" && item.subsection==="models" && item.path);
    if(!Number.isInteger(idx)||idx<0||idx>=resources.length)return;
    upperLevelSelectedMuendlichModel=idx;
    page="upper-level-muendlich-model";
    render();
    return;
  }
  else if(action==="upper-level-muendlich-model-close"){
    document.documentElement.classList.remove("challenge-fullscreen-open");
    document.body.classList.remove("challenge-fullscreen-open");
    page="upper-level-muendlich-subsection";
    render();
    return;
  }
  else if(action==="upper-level-muendlich-speaking-close"){
    document.documentElement.classList.remove("challenge-fullscreen-open");
    document.body.classList.remove("challenge-fullscreen-open");
    upperLevelSelectedTrainingSkill="muendlich";
    page="upper-level-training-skill";
    render();
    return;
  }
  else if(action==="upper-level-muendlich-return"){
    document.documentElement.classList.remove("challenge-fullscreen-open");
    document.body.classList.remove("challenge-fullscreen-open");
    upperLevelSelectedTrainingSkill="muendlich";
    page="upper-level-training-skill";
    render();
    return;
  }
  else if(action==="upper-level-training-return"){
    upperLevelSelectedSection="training";
    page="upper-level-section";
    render();
    return;
  }
  else if(action==="a2-lesson"){
    const lessonNo=Number(el.dataset.lessonNo);
    if(a2CourseLessons.some(item=>item.number===lessonNo)){
      if(!getStudentLessonAccess(lessonNo-1,"A2")){showToast("هاد الدرس مقفل حالياً من طرف الإدارة.");return;}
      currentA2LessonNo=lessonNo;page="a2-lesson-html";render();
    }
    return;
  }
  else if(action==="a2-stage-open"){
    const stage=el.dataset.stage||"explanation";
    if(stage==="vocabulary"){
      studentResultsReturnPage="a2-lesson-html";
      studentVocabularyReviewLevel="A2";
      studentVocabularyReviewLesson=Number(currentA2LessonNo)||1;
      studentResultsActiveSkill="vocab";
      studentResultsActiveTool="resultsSkills";
      studentResultsSkillDetailOpen=false;
      studentSkillLearningLesson=Number(currentA2LessonNo)||1;
      page="student-results";
      render();
      return;
    }
    if(stage==="practice"){
      const lesson=a2CourseLessons.find(item=>item.number===Number(currentA2LessonNo));
      if(lesson && lesson.test){
        // Open the dedicated A2 test that belongs to the lesson currently being viewed.
        currentA2TestNo=lesson.number;
        a2TestReturnPage="a2-lesson-html";
        page="a2-test-html";
        render();
      }else{
        showToast("اختبار هذا الدرس غير موجود حالياً داخل ملفات A2.");
      }
    }else{
      askCourseResume("A2",Number(currentA2LessonNo),()=>{page="a2-course-content";render();});
    }
    return;
  }
  else if(action==="close-a2-course-content"){
    saveActiveCourseBeforeExit();
    document.documentElement.classList.remove("challenge-fullscreen-open");
    document.body.classList.remove("challenge-fullscreen-open");
    page="a2-lesson-html";render();return;
  }
  else if(action==="a2-test"){
    const lessonNo=Number(el.dataset.lessonNo);
    const lesson=a2CourseLessons.find(item=>item.number===lessonNo);
    if(lesson && lesson.test){currentA2TestNo=lessonNo;a2TestReturnPage="a2-level-home";page="a2-test-html";render();}
    return;
  }
  else if(action==="close-a2-lesson" || action==="close-a2-test"){
    document.documentElement.classList.remove("challenge-fullscreen-open");
    document.body.classList.remove("challenge-fullscreen-open");
    page=action==="close-a2-test" ? a2TestReturnPage : "a2-level-home";render();return;
  }
  else if(action==="student-open-a1"){selectedLevel="A1.1";page="level-home";render();return;}
  else if(action==="student-open-tests"){selectedLevel="A1.1";page="tests";render();return;}
  else if(action==="student-open-podcasts"){enterPodcastPage(page||"learn-hub");return;}
  else if(action==="student-open-grammar"){selectedLevel="A1.1";currentLesson=0;currentCategory="Grammatik";page="category";render();return;}
  else if(action==="student-open-vocab"){selectedLevel="A1.1";currentLesson=0;currentCategory="Nomen";page="category";render();return;}
  else if(action==="student-open-writing"){selectedLevel="A1.1";currentLesson=0;page="lesson";render();return;}
  else if(action==="lesson-open-talk"){
    if(!getStudentLessonAccess(currentLesson)){showToast("Diese Lektion wurde vom Administrator gesperrt.");return;}
    talkReturnPage="lesson-hub";
    talkReturnLesson=currentLesson;
    tutorLessonIndex=currentLesson;
    tutorTool="conversation";
    tutorToolOpen=true;
    tutorKeyboardOpen=false;
    tutorExamplesOpen=false;
    tutorLessonFilterOpen=false;
    tutorMessages=loadTutorMessages();
    page="talk";
    render();
    return;
  }
  else if(action==="tutor-lesson"){
    const idx=Number(el.dataset.lesson);
    if(Number.isInteger(idx) && idx>=0 && idx<lessons.length){
      tutorLessonIndex=idx;rememberHomeLesson(idx);selectedLevel=idx<5?"A1.1":"A1.2";markDailyLessonStarted();tutorTool="conversation";tutorToolOpen=false;tutorKeyboardOpen=false;tutorLessonFilterOpen=false;tutorMessages=loadTutorMessages();renderTalk();
    }
    return;
  }
  else if(action==="tutor-toggle-lesson-filter"){
    tutorLessonFilterOpen=!tutorLessonFilterOpen;
    renderTalk();
    return;
  }
  else if(action==="tutor-toggle-examples"){
    tutorExamplesOpen=!tutorExamplesOpen;
    renderTalk();
    return;
  }
  else if(action==="tutor-tool"){
    tutorTool=el.dataset.tool||"conversation";
    tutorMessages=loadTutorMessages();
    tutorKeyboardOpen=false;
    tutorToolOpen=true;
    renderTalk();
    if(tutorTool==="repeat") speak(getTutorProfile().sample);
    return;
  }
  else if(action==="tutor-tools-back"){
    tutorToolOpen=false;
    tutorKeyboardOpen=false;
    renderTalk();
    return;
  }
  else if(action==="tutor-prompt"){
    if(tutorToolOpen && tutorTool==="conversation" && !tutorKeyboardOpen){
      tutorKeyboardOpen=true;
      renderTalk();
    }
    const input=document.getElementById("tutorInput");
    if(input){input.value=el.dataset.prompt||"";input.focus();}
    return;
  }
  else if(action==="tutor-keyboard-toggle"){
    tutorKeyboardOpen=!tutorKeyboardOpen;
    renderTalk();
    if(tutorKeyboardOpen){
      const input=document.getElementById("tutorInput");
      if(input) input.focus();
    }
    return;
  }
  else if(action==="tutor-scenario"){
    tutorTool="conversation";tutorMessages=loadTutorMessages();renderTalk();return;
  }
  else if(action==="tutor-speak"){speak(el.dataset.text||"");return;}
  else if(action==="tutor-voice"){startTutorVoice();return;}
  else if(action==="tutor-reset"){localStorage.removeItem(tutorStorageKey());tutorMessages=loadTutorMessages();renderTalk();return;}
  else if(action==="session-book"){bookDemoSession(el.dataset.session||"");return;}
  else if(action==="community-open-room"){communityRoom=el.dataset.room||"general";page="community";renderCommunity();return;}
  else if(action==="community-back"){communityRoom=null;renderCommunity();return;}
  else if(action==="admin-heatmap-mode"){adminExerciseHeatmapMode=el.dataset.mode==="time"?"time":"performance";render();return;}
  if(action==="admin-task-new"){adminEditingTaskId=null;adminTaskDetailId="";render();return;}
  else if(action==="admin-task-save"){saveAdminDailyTask();return;}
  else if(action==="admin-task-edit"){adminEditingTaskId=el.dataset.id||null;adminTaskDetailId="";render();return;}
  else if(action==="admin-task-cancel-edit"){adminEditingTaskId=null;render();return;}
  else if(action==="admin-task-details"){adminTaskDetailId=el.dataset.id||"";adminEditingTaskId=null;render();return;}
  else if(action==="admin-task-close-details"){adminTaskDetailId="";render();return;}
  else if(action==="admin-task-toggle-published"){toggleAdminDailyTaskPublication(el.dataset.id||"");return;}
  else if(action==="admin-task-delete"){deleteAdminDailyTask(el.dataset.id||"");return;}
  else if(action==="admin-task-student-progress-toggle"){toggleAdminStudentTaskProgress(el.dataset.taskId||"",el.dataset.id||"");return;}
  else if(action==="admin-task-target-all"){
    const checked=el.dataset.select==="all";
    document.querySelectorAll('input[name="adminTaskStudent"]').forEach(input=>{input.checked=checked;});
    return;
  }
  else if(action==="admin-open-group-tasks"){
    adminTaskGroupId=el.dataset.id||"";adminEditingTaskId=null;adminTaskDetailId="";adminGroupFullscreenOpen=false;adminSelectedGroupId=null;adminSection="tasks";render();return;
  }
  if(action==="admin-nav"){adminGroupFullscreenOpen=false;adminSelectedGroupId=null;adminSection=el.dataset.section||"home";adminProgressLessonStatusFilter="";adminProgressMetricOpen="";adminProgressMetricStudentId="";if(adminSection!=="tasks"){adminEditingTaskId=null;adminTaskDetailId="";}render();return;}
  else if(action==="admin-progress-open-metric"){
    const metric=String(el.dataset.metric||"");
    if(["words","review","lessons","streak","tasks"].includes(metric)){
      adminProgressMetricOpen=metric;
      adminProgressMetricStudentId="";
      adminProgressLessonStatusFilter="";
      adminSection="results";
      render();
    }
    return;
  }
  else if(action==="admin-progress-metric-select-student"){
    const id=String(el.dataset.id||"");
    const student=readUsers().find(user=>String(user.id)===id);
    if(student && (adminResultsGroupId==="all" || (adminResultsGroupId==="__ungrouped__"?!student.groupId:String(student.groupId)===String(adminResultsGroupId)))){
      adminProgressMetricStudentId=id;
      render();
    }
    return;
  }
  else if(action==="admin-progress-metric-group-back"){
    adminProgressMetricStudentId="";
    render();return;
  }
  else if(action==="admin-progress-metric-close"){
    adminProgressMetricOpen="";
    adminProgressMetricStudentId="";
    render();return;
  }
  else if(action==="admin-progress-open-lesson-status"){
    adminProgressLessonStatusFilter=["all","completed","inProgress","notStarted"].includes(el.dataset.status)?el.dataset.status:"all";
    adminSection="results";
    render();
    return;
  }
  else if(action==="admin-progress-lesson-status-filter"){
    adminProgressLessonStatusFilter=["all","completed","inProgress","notStarted"].includes(el.dataset.status)?el.dataset.status:"all";
    render();
    return;
  }
  else if(action==="admin-progress-lesson-status-back"){
    adminProgressLessonStatusFilter="";
    render();
    return;
  }
  else if(action==="admin-results-select-student"){
    const id=String(el.dataset.id||"");
    const user=readUsers().find(item=>String(item.id)===id);
    if(user){
      adminResultsGroupId=user.groupId?String(user.groupId):"__ungrouped__";
      adminResultsStudentId=id;
      adminResultsLessonFilter="all";
      adminResultsTypeFilter="all";
      adminProgressLessonStatusFilter="";
      adminSection="results";
      render();
    }
    return;
  }
  else if(action==="admin-page-choose-folder"){chooseAdminProjectFolder();return;}
  else if(action==="admin-page-load"){loadAdminPageIntoEditor();return;}
  else if(action==="admin-page-import"){
    const path = normalizeManagedPagePath(document.getElementById("adminPagePath")?.value || adminPageSelectedPath);
    if(!path){showToast("اختار الصفحة الهدف أولاً.");return;}
    document.getElementById("adminPageImportFile")?.click();
    return;
  }
  else if(action==="admin-page-export"){exportAdminManagedPage();return;}
  else if(action==="admin-page-preview"){previewAdminManagedPage();return;}
  else if(action==="admin-page-save-draft"){saveAdminManagedPage();return;}
  else if(action==="admin-page-publish"){saveAdminManagedPage();return;}
  else if(action==="admin-page-assign-test"){
    if(!currentUser || currentUser.role!=="admin"){showToast("خاصك تدخل بحساب الأدمن.");return;}
    const lessonNo = Number(document.getElementById("adminTestRouteLesson")?.value);
    const path = normalizeManagedPagePath(document.getElementById("adminPagePath")?.value || adminPageSelectedPath);
    if(!Number.isInteger(lessonNo) || lessonNo<1 || lessonNo>lessons.length){showToast("اختار الدرس أولاً.");return;}
    if(!path){showToast("دخل مسار HTML صحيح داخل pages/ ويسالي بـ .html.");return;}
    saveAdminTestPageRoute(lessonNo,path).then(()=>{
      const status = document.getElementById("adminTestRouteStatus");
      if(status) status.textContent = `تم الربط داخل js/test-page-routes.js: Lektion ${lessonNo} ← ${path}. غادي يفتح الاختبار مباشرة بملء الشاشة.`;
      showToast(`تم ربط ${path} باختبار الدرس ${lessonNo} داخل المشروع.`);
    }).catch(error=>{
      console.error("Saving test page route failed:",error);
      showToast(error.message || "تعذر حفظ ربط الاختبار داخل مجلد المشروع.");
    });
    return;
  }
  else if(action==="admin-page-restore"){showToast("النسخ الاحتياطية كتدار من نظام الملفات ديالك. استعمل نسخة احتياطية من الملف داخل pages.");return;}
  else if(action==="admin-managed-html-back"){page="admin";render();return;}
  else if(action==="admin-content-save"){saveAdminContent();return;}
  else if(action==="admin-content-delete"){deleteAdminContent(el.dataset.id);return;}
  else if(action==="open-custom-content"){openCustomContent(el.dataset.id);return;}
  else if(action==="custom-content-back"){page=customContentReturnPage||"lesson-hub";activeCustomContentMeta=null;activeCustomContentFile=null;render();return;}
  if(action==="admin-open-group"){
    const groupId=el.dataset.id||"";
    if(!groupId || !cloudGroups[groupId]){showToast("المجموعة ما بقاتش متاحة.");return;}
    adminSelectedGroupId=groupId;
    adminGroupFullscreenOpen=true;
    adminSection="groups";
    render();
    return;
  }
  if(action==="admin-close-group-fullscreen"){
    adminGroupFullscreenOpen=false;
    adminSelectedGroupId=null;
    adminSection="groups";
    render();
    return;
  }
  if(action==="login-submit"){loginFromForm();return;}
  else if(action==="logout"){logout();return;}
  else if(action==="student-results"){studentVocabularyReviewLevel="A1";studentResultsReturnPage="student-results";page="student-results";studentResultsExpanded=false;studentResultsActiveTool="";studentResultsActiveSkill="vocab";studentResultsSkillDetailOpen=false;studentLessonStatusFilter="all";render();return;}
  else if(action==="student-results-toggle"){studentResultsExpanded=!studentResultsExpanded;render();if(studentResultsExpanded){const panel=document.getElementById("studentResultsDetails");if(panel)panel.scrollIntoView({behavior:"smooth",block:"start"});}return;}
  else if(action==="student-results-jump"){
    const targetId=el.dataset.target||"";
    if(targetId){
      studentResultsReturnPage="student-results";
      studentVocabularyReviewLevel="A1";
      studentResultsActiveTool=targetId==="resultsLessonProgress"?"resultsLessonStatus":targetId;
      studentLessonStatusFilter="all";
      studentResultsSkillDetailOpen=false;
      render();
    }
    return;
  }
  else if(action==="student-results-open-lesson-status"){
    studentLessonStatusFilter=["all","completed","inProgress","notStarted"].includes(el.dataset.status)?el.dataset.status:"all";
    studentResultsActiveTool="resultsLessonStatus";
    studentResultsSkillDetailOpen=false;
    render();
    return;
  }
  else if(action==="student-results-lesson-status-filter"){
    studentLessonStatusFilter=["all","completed","inProgress","notStarted"].includes(el.dataset.status)?el.dataset.status:"all";
    render();
    return;
  }
  else if(action==="student-results-lesson-status-back"){
    studentLessonStatusFilter="all";
    studentResultsActiveTool="";
    render();
    return;
  }
  else if(action==="student-results-open-skill-picker"){
    studentResultsReturnPage="student-results";
    studentVocabularyReviewLevel="A1";
    studentResultsActiveSkill="vocab";
    studentResultsActiveTool="resultsSkills";
    studentResultsSkillDetailOpen=false;
    render();
    return;
  }
  else if(action==="student-results-open-skill"){
    studentResultsActiveSkill=el.dataset.skill||"vocab";
    studentSkillLearningLesson=studentProgressLessonFilter==="all"?6:(Number(studentProgressLessonFilter)||6);
    studentSkillLearningMode="browse";
    studentSkillResetPractice();
    if(studentResultsActiveSkill==="vocab"){
      studentResultsActiveTool="resultsVocabulary";
      studentResultsSkillDetailOpen=false;
    }else{
      studentResultsActiveTool="resultsSkills";
      studentResultsSkillDetailOpen=true;
    }
    render();
    return;
  }
  else if(action==="student-results-skill-select"){
    studentResultsActiveSkill=el.dataset.skill||"vocab";
    studentSkillLearningLesson=studentProgressLessonFilter==="all"?6:(Number(studentProgressLessonFilter)||6);
    studentSkillLearningMode="browse";
    studentSkillResetPractice();
    if(studentResultsActiveSkill==="vocab"){
      studentResultsActiveTool="resultsVocabulary";
      studentResultsSkillDetailOpen=false;
    }else{
      studentResultsActiveTool="resultsSkills";
      studentResultsSkillDetailOpen=true;
    }
    render();
    return;
  }
  else if(action==="student-results-vocab-back"){
    studentResultsActiveTool="resultsSkills";
    studentResultsActiveSkill="vocab";
    studentResultsSkillDetailOpen=false;
    render();
    return;
  }
  else if(action==="student-skill-start-practice"){
    studentSkillLearningMode="practice";
    studentSkillResetPractice();
    render();
    return;
  }
  else if(action==="student-skill-back-content"){
    studentSkillLearningMode="browse";
    render();
    return;
  }
  else if(action==="student-skill-restart"){
    studentSkillResetPractice();
    studentSkillLearningMode="practice";
    render();
    return;
  }
  else if(action==="student-skill-speak-line"||action==="student-skill-play-dialogue"){
    const text=el.dataset.text||"";
    if(text)speak(text);
    return;
  }
  else if(action==="student-skill-listening-play"){
    const question=studentSkillListeningQuestion(studentSkillLearningLesson,studentSkillListeningIndex);
    const text=el.dataset.text||question?.line?.german||"";
    if(text)speak(text);
    return;
  }
  else if(action==="student-skill-listening-option"){
    if(studentSkillListeningChecked)return;
    studentSkillListeningChoice=Number(el.dataset.option);
    render();
    return;
  }
  else if(action==="student-skill-listening-check"){
    if(studentSkillListeningChoice<0){showToast("اختَر المعنى أولاً.");return;}
    if(studentSkillListeningChecked)return;
    const question=studentSkillListeningQuestion(studentSkillLearningLesson,studentSkillListeningIndex);
    if(studentSkillListeningChoice===question?.correctIndex)studentSkillListeningScore++;
    studentSkillListeningChecked=true;
    render();
    return;
  }
  else if(action==="student-skill-listening-next"){
    if(!studentSkillListeningChecked){showToast("تحقق من الإجابة أولاً.");return;}
    studentSkillListeningIndex++;
    studentSkillListeningChoice=-1;
    studentSkillListeningChecked=false;
    render();
    return;
  }
  else if(action==="student-skill-writing-play"){
    const item=studentSkillLessonLines(studentSkillLearningLesson)[studentSkillWritingIndex];
    if(item)speak(item.german);
    return;
  }
  else if(action==="student-skill-writing-check"){
    if(!studentSkillWritingInput.trim()){showToast("اكتب الجملة أولاً.");return;}
    if(studentSkillWritingChecked)return;
    const item=studentSkillLessonLines(studentSkillLearningLesson)[studentSkillWritingIndex];
    if(item&&studentSkillNormalizeSentence(studentSkillWritingInput)===studentSkillNormalizeSentence(item.german))studentSkillWritingScore++;
    studentSkillWritingChecked=true;
    render();
    return;
  }
  else if(action==="student-skill-writing-next"){
    if(!studentSkillWritingChecked){showToast("تحقق من الكتابة أولاً.");return;}
    studentSkillWritingIndex++;
    studentSkillWritingInput="";
    studentSkillWritingChecked=false;
    render();
    return;
  }
  else if(action==="student-skill-speaking-play"){
    const item=studentSkillLessonLines(studentSkillLearningLesson)[studentSkillSpeakingIndex];
    if(item)speak(item.german);
    return;
  }
  else if(action==="student-skill-speaking-next"){
    studentSkillSpeakingIndex++;
    render();
    return;
  }
  else if(action==="student-skill-sentence-pick"){
    if(studentSkillSentenceChecked)return;
    const token=Number(el.dataset.token);
    if(!Number.isInteger(token))return;
    if(studentSkillSentenceOrder.includes(token)){
      studentSkillSentenceOrder=studentSkillSentenceOrder.filter(value=>value!==token);
    }else{
      studentSkillSentenceOrder=[...studentSkillSentenceOrder,token];
    }
    render();
    return;
  }
  else if(action==="student-skill-sentence-clear"){
    if(studentSkillSentenceChecked)return;
    studentSkillSentenceOrder=[];
    render();
    return;
  }
  else if(action==="student-skill-sentence-check"){
    const item=studentSkillSentenceItems(studentSkillLearningLesson)[studentSkillSentenceIndex];
    if(!item)return;
    const tokens=studentSkillShuffledTokens(item.german,studentSkillSentenceIndex,studentSkillLearningLesson);
    if(studentSkillSentenceOrder.length!==tokens.length){showToast("رتّب جميع الكلمات أولاً.");return;}
    if(studentSkillSentenceChecked)return;
    const answer=studentSkillSentenceOrder.map(tokenIndex=>tokens.find(entry=>entry.tokenIndex===tokenIndex)?.text||"").join(" ");
    if(studentSkillNormalizeSentence(answer)===studentSkillNormalizeSentence(item.german))studentSkillSentenceScore++;
    studentSkillSentenceChecked=true;
    render();
    return;
  }
  else if(action==="student-skill-sentence-next"){
    if(!studentSkillSentenceChecked){showToast("تحقق من الجملة أولاً.");return;}
    studentSkillSentenceIndex++;
    studentSkillSentenceOrder=[];
    studentSkillSentenceChecked=false;
    render();
    return;
  }
  else if(action==="student-vocab-category"){
    const category=el.dataset.category||"Verben";
    if(["Nomen","Verben","Adjektive"].includes(category)){
      studentVocabularyReviewCategory=category;
      render();
    }
    return;
  }
  else if(action==="student-vocab-open-word"){
    const german=el.dataset.fullWord||el.dataset.speak||el.dataset.word||"";
    const meaning=el.dataset.meaning||"";
    const lessonNo=Number(el.dataset.lesson)||Number(studentVocabularyReviewLesson)||6;
    const level=String(el.dataset.level||studentVocabularyReviewLevel||"A1").toUpperCase()==="A2"?"A2":"A1";
    studentVocabularySelectedWord={
      german:el.dataset.word||german,
      fullGerman:german,
      meaning,
      example:el.dataset.example||"",
      exampleArabic:el.dataset.exampleAr||"",
      category:el.dataset.category||studentVocabularyReviewCategory,
      lessonNo,
      level,
      icon:el.dataset.icon||"📚",
      speakText:el.dataset.speak||german
    };
    studentVocabularyTrainingScope="word";
    studentVocabularyTrainingPool=[];
    studentVocabularyTrainingIndex=0;
    studentVocabularyPracticeOpen=false;
    studentVocabularyPracticeFeedback="";
    if(german)recordStudentLearnedWord(level,lessonNo,german,meaning,"vocabulary-review");
    studentResultsActiveTool="resultsVocabularyWord";
    render();
    return;
  }
  else if(action==="student-vocab-speak-word"){
    speak(el.dataset.speak||studentVocabularySelectedWord?.german||"");
    return;
  }
  else if(action==="student-vocab-speak-example"){
    speak(el.dataset.speak||"");
    return;
  }
  else if(action==="student-vocab-start-practice"){
    studentVocabularyTrainingScope="word";
    studentVocabularyTrainingPool=[];
    studentVocabularyTrainingIndex=0;
    studentVocabularyTrainingCategory=studentVocabularySelectedWord?.category||studentVocabularyReviewCategory||"Verben";
    studentVocabularyPracticeOpen=false;
    studentVocabularyTrainingMode="";
    studentVocabularyTrainingFeedback="";
    studentVocabularyTrainingOrder=[];
    studentVocabularyTrainingRevealed=false;
    studentVocabularyTrainingDone=false;
    studentResultsActiveTool="resultsVocabularyPractice";
    render();
    return;
  }
  else if(action==="student-vocab-start-category-practice"){
    const category=el.dataset.category||studentVocabularyReviewCategory||"Verben";
    const lessonNo=Number(el.dataset.lesson)||Number(studentVocabularyReviewLesson)||6;
    const level=String(el.dataset.level||studentVocabularyReviewLevel||"A1").toUpperCase()==="A2"?"A2":"A1";
    if(!["Nomen","Verben","Adjektive"].includes(category)){showToast("اختَر تصنيفاً صحيحاً للتدريب.");return;}
    const pool=studentVocabularyReviewEntries(lessonNo,category,level).filter(entry=>entry.german&&entry.meaning);
    if(!pool.length){showToast("لا توجد كلمات للتدريب في هذا التصنيف.");return;}
    studentVocabularyTrainingScope="category";
    studentVocabularyTrainingPool=pool;
    studentVocabularyTrainingIndex=0;
    studentVocabularyTrainingCategory=category;
    studentVocabularyReviewLevel=level;
    studentVocabularySelectedWord=pool[0];
    studentVocabularyTrainingMode="";
    studentVocabularyTrainingFeedback="";
    studentVocabularyTrainingOrder=[];
    studentVocabularyTrainingRevealed=false;
    studentVocabularyTrainingDone=false;
    studentVocabularyPracticeOpen=false;
    studentResultsActiveTool="resultsVocabularyPractice";
    render();
    return;
  }
  else if(action==="student-vocab-training-open-mode"){
    const mode=el.dataset.mode||"choose";
    if(studentVocabularyTrainingMethods.some(item=>item.id===mode)){
      studentVocabularyTrainingMode=mode;
      studentVocabularyTrainingFeedback="";
      studentVocabularyTrainingOrder=[];
      studentVocabularyTrainingRevealed=false;
      studentVocabularyTrainingDone=false;
      render();
    }
    return;
  }
  else if(action==="student-results-practice-back"){
    studentResultsActiveTool=studentVocabularyTrainingScope==="category"?"resultsVocabulary":"resultsVocabularyWord";
    if(studentVocabularyTrainingScope==="category"){
      studentVocabularyTrainingScope="word";
      studentVocabularyTrainingPool=[];
      studentVocabularyTrainingIndex=0;
    }
    studentVocabularyTrainingMode="";
    studentVocabularyTrainingFeedback="";
    studentVocabularyTrainingOrder=[];
    studentVocabularyTrainingRevealed=false;
    studentVocabularyTrainingDone=false;
    render();
    return;
  }
  else if(action==="student-results-practice-mode-back"){
    studentVocabularyTrainingMode="";
    studentVocabularyTrainingFeedback="";
    studentVocabularyTrainingOrder=[];
    studentVocabularyTrainingRevealed=false;
    studentVocabularyTrainingDone=false;
    render();
    return;
  }
  else if(action==="student-vocab-training-choice"){
    if(el.dataset.correct==="1")studentVocabularyTrainingComplete();
    else studentVocabularyTrainingFeedback="wrong";
    render();
    return;
  }
  else if(action==="student-vocab-training-listen"){
    if(studentVocabularySelectedWord)speak(studentVocabularySelectedWord.speakText||studentVocabularySelectedWord.fullGerman||studentVocabularySelectedWord.german);
    return;
  }
  else if(action==="student-vocab-training-check-input"){
    const input=document.getElementById("studentVocabularyTrainingInput");
    const entered=String(input?.value||"").trim().toLocaleLowerCase("de").replace(/[.!?]/g,"");
    const expected=String(studentVocabularySelectedWord?.german||"").trim().toLocaleLowerCase("de").replace(/[.!?]/g,"");
    if(entered&&entered===expected)studentVocabularyTrainingComplete();
    else studentVocabularyTrainingFeedback="wrong";
    render();
    return;
  }
  else if(action==="student-vocab-training-mic"){
    const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!Recognition){showToast("الميكروفون غير مدعوم هنا. اكتب الكلمة في الحقل.");return;}
    const recognition=new Recognition();recognition.lang="de-DE";recognition.interimResults=false;recognition.maxAlternatives=1;
    recognition.onresult=event=>{const input=document.getElementById("studentVocabularyTrainingInput");if(input)input.value=event.results?.[0]?.[0]?.transcript||"";};
    recognition.onerror=()=>showToast("لم نتمكن من التقاط الصوت. حاول مرة أخرى أو اكتب الكلمة.");
    try{recognition.start();showToast("تحدث بالألمانية الآن...");}catch(error){showToast("تعذر تشغيل الميكروفون.");}
    return;
  }
  else if(action==="student-vocab-training-word"){
    const index=Number(el.dataset.index);
    if(Number.isInteger(index)&&!studentVocabularyTrainingOrder.includes(index))studentVocabularyTrainingOrder.push(index);
    render();
    return;
  }
  else if(action==="student-vocab-training-reset-order"){
    studentVocabularyTrainingOrder=[];studentVocabularyTrainingFeedback="";render();return;
  }
  else if(action==="student-vocab-training-check-sentence"){
    const target=studentVocabularyTrainingSentence(studentVocabularySelectedWord).replace(/\s+/g," ").trim().toLocaleLowerCase("de");
    const tokens=target.split(/\s+/);
    const source=studentVocabularyTrainingSentence(studentVocabularySelectedWord).split(/\s+/);
    const built=studentVocabularyTrainingOrder.map(index=>source[index]).join(" ").replace(/\s+/g," ").trim().toLocaleLowerCase("de");
    if(studentVocabularyTrainingOrder.length===source.length&&built===target)studentVocabularyTrainingComplete();
    else studentVocabularyTrainingFeedback="wrong";
    render();return;
  }
  else if(action==="student-vocab-training-reveal"){
    studentVocabularyTrainingRevealed=!studentVocabularyTrainingRevealed;
    if(studentVocabularyTrainingRevealed)studentVocabularyTrainingComplete();
    render();return;
  }
  else if(action==="student-vocab-training-finish"){
    studentVocabularyTrainingMode="";studentVocabularyTrainingFeedback="";studentVocabularyTrainingOrder=[];studentVocabularyTrainingRevealed=false;studentVocabularyTrainingDone=false;render();return;
  }
  else if(action==="student-vocab-training-next-word"){
    if(studentVocabularyTrainingScope!=="category"||!studentVocabularyTrainingPool.length)return;
    if(!studentVocabularyTrainingDone){showToast("أكمل السؤال أولاً للانتقال إلى الكلمة التالية.");return;}
    studentVocabularyTrainingIndex++;
    studentVocabularyTrainingMode=studentVocabularyTrainingMode||"choose";
    studentVocabularyTrainingFeedback="";
    studentVocabularyTrainingOrder=[];
    studentVocabularyTrainingRevealed=false;
    studentVocabularyTrainingDone=false;
    if(studentVocabularyTrainingIndex<studentVocabularyTrainingPool.length){
      studentVocabularySelectedWord=studentVocabularyTrainingPool[studentVocabularyTrainingIndex];
    }
    render();
    return;
  }
  else if(action==="student-vocab-training-restart-category"){
    if(studentVocabularyTrainingScope!=="category"||!studentVocabularyTrainingPool.length)return;
    studentVocabularyTrainingIndex=0;
    studentVocabularySelectedWord=studentVocabularyTrainingPool[0];
    studentVocabularyTrainingMode="";
    studentVocabularyTrainingFeedback="";
    studentVocabularyTrainingOrder=[];
    studentVocabularyTrainingRevealed=false;
    studentVocabularyTrainingDone=false;
    render();
    return;
  }
  else if(action==="student-vocab-training-return-list"){
    studentResultsActiveTool="resultsVocabulary";
    studentVocabularyTrainingScope="word";
    studentVocabularyTrainingPool=[];
    studentVocabularyTrainingIndex=0;
    studentVocabularyTrainingMode="";
    studentVocabularyTrainingFeedback="";
    studentVocabularyTrainingOrder=[];
    studentVocabularyTrainingRevealed=false;
    studentVocabularyTrainingDone=false;
    render();
    return;
  }
  else if(action==="student-vocab-close-practice"){
    studentVocabularyPracticeOpen=false;
    studentVocabularyPracticeFeedback="";
    render();
    return;
  }
  else if(action==="student-vocab-practice-answer"){
    studentVocabularyPracticeFeedback=el.dataset.correct==="1"?"correct":"wrong";
    render();
    return;
  }
  else if(action==="student-results-word-back"){
    studentResultsActiveTool="resultsVocabulary";
    studentVocabularyPracticeOpen=false;
    studentVocabularyPracticeFeedback="";
    render();
    return;
  }
  else if(action==="student-results-skill-detail-back"){
    studentResultsSkillDetailOpen=false;
    render();
    return;
  }
  else if(action==="student-results-tool-back"){
    studentResultsSkillDetailOpen=false;
    studentResultsActiveTool="";
    const returnPage=studentResultsReturnPage||"student-results";
    studentResultsReturnPage="student-results";
    if(returnPage!=="student-results")page=returnPage;
    render();
    return;
  }
  else if(action==="student-continue"){page="levels";render();return;}
  else if(action==="admin-generate"){generateStudentCredentials();return;}
  else if(action==="admin-copy-credentials"){copyStudentCredentials();return;}
  else if(action==="admin-create-student"){createStudentFromAdmin();return;}
  else if(action==="admin-view-student"){openAdminStudentDetails(el.dataset.id);return;}
  else if(action==="admin-close-student-details"){closeAdminStudentDetails();return;}
  else if(action==="admin-copy-student-email"){copyAdminStudentField(el.dataset.id,"email");return;}
  else if(action==="admin-copy-student-code"){copyAdminStudentField(el.dataset.id,"code");return;}
  else if(action==="admin-change-student-password"){changeAdminStudentPassword(el.dataset.id,el);return;}
  else if(action==="admin-toggle-student"){
    const users=readUsers();const user=users.find(item=>item.id===el.dataset.id);
    if(user){user.active=user.active===false;firebaseDb.ref(`${DEUTSCH_A1_PATH}/users/${user.id}/active`).set(user.active)
      .then(()=>{cloudUsers=users;render();}).catch(err=>showToast("Status konnte nicht geändert werden: "+err.message));}return;
  }
  else if(action==="admin-edit-student"){editStudent(el.dataset.id);return;}
  else if(action==="admin-clear-results"){clearStudentResults(el.dataset.id);return;}
  else if(action==="admin-reset-password"){resetStudentPassword(el.dataset.id);return;}
  else if(action==="admin-delete-student"){
    if(!currentUser || currentUser.role !== "admin" || !firebaseReady) {
      showToast("Nur der Administrator kann Schülerkonten löschen.");
      return;
    }
    if(!window.confirm("Schülerprofil und alle Testergebnisse dauerhaft aus Deutsch A1 löschen?")) return;

    const id = el.dataset.id;
    if(!id || String(id).startsWith("__system_")) {
      showToast("Ungültiges Schülerkonto.");
      return;
    }

    el.disabled = true;
    Promise.all([
      firebaseDb.ref(`${DEUTSCH_A1_PATH}/users/${id}`).remove(),
      firebaseDb.ref(`${DEUTSCH_A1_PATH}/results/${id}`).remove(),
      firebaseDb.ref(`${DEUTSCH_A1_PATH}/taskProgress/${id}`).remove()
    ]).then(async () => {
      await loadDeutschA1Data();
      render();
      showToast("Schülerprofil und Testergebnisse wurden aus Firebase gelöscht.");
    }).catch(error => {
      console.error("Firebase delete failed:", error);
      el.disabled = false;
      showToast("Löschen in Firebase fehlgeschlagen: " + (error.message || error.code || "Unbekannter Fehler"));
    });
    return;
  }
  else if(action==="admin-toggle-group-level"){
    const level=normalizeGroupCourseLevel(el.dataset.level||"A1");
    const wasOpen=el.getAttribute("aria-expanded")==="true";
    // Keep the accordion to one open level at a time; clicking the open level closes it.
    document.querySelectorAll(".admin-group-level-toggle").forEach(button=>{
      button.setAttribute("aria-expanded","false");
      const panel=document.getElementById(button.getAttribute("aria-controls"));
      if(panel)panel.hidden=true;
      button.closest(".admin-group-level-item")?.classList.remove("is-open");
    });
    if(!wasOpen){
      el.setAttribute("aria-expanded","true");
      const panel=document.getElementById(el.getAttribute("aria-controls"));
      if(panel)panel.hidden=false;
      el.closest(".admin-group-level-item")?.classList.add("is-open");
    }
    // Retain the last chosen level for the group's existing primary-level field.
    adminGroupLevelDraft=level;
    return;
  }
  else if(action==="admin-group-lessons-toggle-all"){
    // Select or clear lessons only inside the matching level's accordion panel.
    const level=normalizeGroupCourseLevel(el.dataset.level||"A1");
    const checked=el.dataset.select==="all";
    const container=document.getElementById(`groupLevelLessonChecks-${level}`);
    if(container){
      container.querySelectorAll('input[type="checkbox"][name="groupLessons"]').forEach(input=>{input.checked=checked;});
    }
    return;
  }
  else if(action==="admin-save-group"){saveGroupFromForm();return;}
  else if(action==="admin-edit-group"){
    editingGroupId=el.dataset.id;
    adminGroupLevelDraft=normalizeGroupCourseLevel(cloudGroups[editingGroupId]?.level||"A1");
    adminGroupLessonDrafts={};adminSection="groups";render();return;
  }
  else if(action==="admin-cancel-group-edit"){
    editingGroupId=null;adminGroupLevelDraft=null;adminGroupLessonDrafts={};render();return;
  }
  else if(action==="admin-delete-group"){deleteGroup(el.dataset.id);return;}
  else if(action==="admin-manage-access"){manageStudentLessonAccess(el.dataset.id);return;}
  else if(action==="admin-save-student-lessons"){saveStudentLessonAccess(el.dataset.id);return;}
  else if(action==="admin-reset-student-lessons"){resetStudentLessonAccess(el.dataset.id);return;}
  else if(action==="admin-close-student-lessons"){closeStudentLessonAccess();return;}
  else if(action==="admin-activity-details"){showStudentActivityDetails(el.dataset.id);return;}
  else if(action==="admin-save-student-minutes"){saveStudentDailyMinutes(el.dataset.id);return;}
  else if(action==="admin-export"){exportAdminBackup();return;}
  else if(action==="admin-open-vocabulary"){managedHtmlPagePath="pages/admin-vocabulary.html";page="admin-managed-html";render();return;}
  else if(action==="start"){page="levels";}
  else if(action==="back"){back();return;}
  else if(action==="level"){selectedLevel=el.dataset.level;page="lessons";}
  else if(action==="open-lessons"){page="lessons";}
  else if(action==="open-podcasts"){enterPodcastPage(page||"levels");return;}
  else if(action==="open-tests"){page="tests";}
  else if(action==="lesson"){
    const idx=Number(el.dataset.lesson);if(!getStudentLessonAccess(idx)){showToast("Diese Lektion wurde vom Administrator gesperrt.");return;}
    lessonHubReturnPage = page==="lessons" ? "lessons" : "level-home";
    rememberHomeLesson(idx);selectedLevel=idx<5?"A1.1":"A1.2";markDailyLessonStarted();activeVerbCard=null;page="lesson-hub";
  }
  else if(action==="lesson-stage-open"){
    if(!getStudentLessonAccess(currentLesson)){showToast("هاد الدرس مقفل حالياً من طرف الإدارة.");return;}
    const stage=el.dataset.stage||"explanation";
    if(stage==="explanation"){
      activeVerbCard=null;
      if([4,5,6,7,8].includes(currentLesson)){openLessonSectionPage("course");return;}
      const coursePath=getLessonSectionPagePath("course",lessonNumber());
      if(window.location.protocol==="file:"){
        courseReturnPage="lesson-hub";page="lesson";render();return;
      }
      fetch(managedPageAssetUrl(coursePath)||coursePath,{method:"HEAD",cache:"no-store"}).then(response=>{
        if(response.ok && (response.headers.get("content-type")||"").includes("html"))openLessonSectionPage("course");
        else {courseReturnPage="lesson-hub";page="lesson";render();}
      }).catch(()=>{courseReturnPage="lesson-hub";page="lesson";render();});
      return;
    }
    if(stage==="vocabulary"){
      studentResultsReturnPage="lesson-hub";
      studentVocabularyReviewLevel="A1";
      studentResultsActiveSkill="vocab";
      studentResultsActiveTool="resultsSkills";
      studentResultsSkillDetailOpen=false;
      studentVocabularyReviewLesson=lessonNumber();
      activeVerbCard=null;
      page="student-results";
      render();
      return;
    }
    if(stage==="practice"){
      if([5,6,7,8].includes(currentLesson)){openLessonSectionPage("test");return;}
      currentCategory="Grammatik";categoryReturnPage="lesson-hub";activeVerbCard=null;page="category";render();return;
    }
    if(stage==="speaking"){
      tutorLessonIndex=currentLesson;talkReturnPage="lesson-hub";talkReturnLesson=currentLesson;
      tutorTool="conversation";tutorToolOpen=true;tutorKeyboardOpen=false;tutorMessages=loadTutorMessages();page="talk";renderTalk();return;
    }
    return;
  }
  else if(action==="open-course"){activeVerbCard=null;openLessonSectionPage("course");return;}
  else if(action==="open-lesson-podcasts"){
    if(!getStudentLessonAccess(currentLesson)){showToast("هاد الدرس مقفل حالياً من طرف الإدارة.");return;}
    enterPodcastPage("lesson-hub",lessonNumber());return;
  }
  else if(action==="lesson-podcast-dialog"){dialogueReturnPage="podcasts";page=(currentLesson===0 ? "intro-dialogue" : "dialogue");}
  else if(action==="open-lesson-test"){openLessonSectionPage("test");return;}
  else if(action==="podcast-open"){const idx=Number(el.dataset.lesson);if(!getStudentLessonAccess(idx)){showToast("Diese Lektion wurde vom Administrator gesperrt.");return;}currentLesson=idx;dialogueReturnPage="podcasts";page="dialogue";}
  else if(action==="podcast-section-open"){const idx=Number(el.dataset.lesson);if(!getStudentLessonAccess(idx)){showToast("Diese Lektion wurde vom Administrator gesperrt.");return;}currentLesson=idx;enterPodcastPage("podcasts",idx+1);return;}
  else if(action==="podcast-select"){selectPodcast(el.dataset.type||"builtin",el.dataset.id||"");return;}
  else if(action==="podcast-back-list"){returnPodcastToList();return;}
  else if(action==="podcast-exit"){exitPodcastFullscreen();return;}
  else if(action==="podcast-close-player"){activePodcastSelection=null;activePodcastFile=null;activePodcastLoading=false;activePodcastError="";render();return;}
  else if(action==="podcast-show-all"){podcastFilterLesson=null;activePodcastSelection=null;activePodcastFile=null;activePodcastLoading=false;activePodcastError="";render();return;}
  else if(action==="podcast-file-open"){currentPodcastId=el.dataset.podcastId||"";podcastFilterLesson=null;selectPodcast("builtin",currentPodcastId);return;}
  else if(action==="test-lesson-open"){const idx=Number(el.dataset.lesson);if(!getStudentLessonAccess(idx)){showToast("Diese Lektion wurde vom Administrator gesperrt.");return;}currentLesson=idx;openLessonTestEntry("tests");}
  else if(action==="category-test"){currentCategory=el.dataset.category;testIndex=0;testScore=0;testChoice=null;testAnswered=false;testQuestionScores={};testQuestionLabels={};testAttemptId=createStudentAttemptId();testReturnPage="test-categories";page="test";}
  else if(action==="open-standalone-lesson-test"){page="standalone-lesson-test";}
  else if(action==="close-standalone-lesson-test"){document.documentElement.classList.remove("challenge-fullscreen-open");document.body.classList.remove("challenge-fullscreen-open");page=testCategoriesReturnPage||"tests";render();return;}
  else if(action==="close-lesson-section-page"){saveActiveCourseBeforeExit();document.documentElement.classList.remove("challenge-fullscreen-open");document.body.classList.remove("challenge-fullscreen-open");page=lessonSectionReturnPage||"lesson-hub";render();return;}
  else if(action==="category"){currentCategory=el.dataset.category;categoryReturnPage="lesson";activeVerbCard=null;page="category";}
  else if(action==="learn"){learningTab="Bilder";learningSlideIndex=0;activeVerbCard=null;page="learning";}
  else if(action==="open-dialogue"){dialogueReturnPage="lesson";page=(currentLesson===0 ? "intro-dialogue" : "dialogue");}
  else if(action==="open-numbers"){page="numbers";}
  else if(action==="numbers-back"){page="lesson";}
  else if(action==="open-essen"){page="essen";}
  else if(action==="open-freizeit"){page="freizeit";}
  else if(action==="open-stadt"){page="stadt";}
  else if(action==="open-interactive-poster"){
    if(!getStudentLessonAccess(currentLesson)){showToast("Diese Lektion wurde vom Administrator gesperrt.");return;}
    page="interactive-lesson-poster";
  }
  else if(action==="interactive-poster-back"){page="lesson";}
  else if(action==="freizeit-back"){page="lesson";}
  else if(action==="stadt-back"){page="lesson";}
  else if(action==="essen-back"){page="lesson";}
  else if(action==="open-family-tree"){page="family-tree";}
  else if(action==="family-tree-back"){page="lesson";}
  else if(action==="family-tree-speak"){
    speakFamilyTree(el.dataset.say || "");
    return;
  }
  else if(action==="family-tree-stop"){
    if("speechSynthesis" in window) window.speechSynthesis.cancel();
    const status=document.getElementById("familyTreeStatus");
    if(status) status.textContent="Sprachausgabe gestoppt.";
    return;
  }
  else if(action==="dialogue-back"){page=dialogueReturnPage;}
  else if(action==="intro-dialogue-back"){page=dialogueReturnPage;}
  else if(action==="dialogue-line-audio"){
    const line=dialogues[currentLesson].lines[Number(el.dataset.lineIndex)];
    if(line) speak(line[1]);
    return;
  }
  else if(action==="dialogue-speak"){
    speak(dialogues[currentLesson].lines.map(line=>line[1]).join(" "));
    return;
  }
  else if(action==="tab"){learningTab=el.dataset.tab;learningSlideIndex=0;activeVerbCard=null;}
  else if(action==="learning-slide-prev"){
    learningSlideIndex=Math.max(0,learningSlideIndex-1);activeVerbCard=null;
  }
  else if(action==="learning-slide-next"){
    const slideTotal=buildLearningSlides(learningItems()).length;
    learningSlideIndex=Math.min(Math.max(0,slideTotal-1),learningSlideIndex+1);activeVerbCard=null;
  }
  else if(action==="learning-slide-go"){
    learningSlideIndex=Math.max(0,Number(el.dataset.slideIndex)||0);activeVerbCard=null;
  }
  else if(action==="learning-word-audio"){
    const idx=Number(el.dataset.wordIndex),word=learningItems()[idx];
    if(word){recordStudentLearnedWord("A1",lessonNumber(),word[0],word[1],"learning-audio");speak(word.speakText||word[0]);}
    return;
  }
  else if(action==="close-verb-modal"){
    if(el.classList.contains("verb-modal-backdrop") && event.target.closest(".verb-modal")) return;
    activeVerbCard=null;
    render();
    return;
  }
  else if(action==="verb-card"){
    if(currentCategory!=="Verben")return;
    const idx=Number(el.dataset.verbIndex);
    const word=learningItems()[idx];
    if(word)recordStudentLearnedWord("A1",lessonNumber(),word[0],word[1],"learning-card");
    activeVerbCard = activeVerbCard===idx ? null : idx;
  }
  else if(action==="student-learn-word"){
    const idx=Number(el.dataset.wordIndex);
    const word=learningItems()[idx];
    if(word){recordStudentLearnedWord("A1",lessonNumber(),word[0],word[1],"learning-card");showToast(`تسجلات الكلمة «${word[0]}» في نتائج الدرس.`);}
    return;
  }
  else if(action==="speak-verb"){
    const idx=Number(el.dataset.verbIndex);
    if(learningItems()[idx]) speakVerbEntry(learningItems()[idx]);
    return;
  }
  else if(action==="speak-form"){
    const idx=Number(el.dataset.verbIndex), formIndex=Number(el.dataset.formIndex);
    const word=learningItems()[idx];
    if(word) speakOneVerbForm(word,formIndex);
    return;
  }
  else if(action==="speak"){
    const spoken=String(el.dataset.text||"");
    const matchingWord=learningItems().find(item=>[item[0],item[2],item.speakText].some(value=>String(value||"").trim()===spoken.trim()));
    if(matchingWord)recordStudentLearnedWord("A1",lessonNumber(),matchingWord[0],matchingWord[1],"learning-audio");
    speak(spoken);return;
  }
  else if(action==="start-test"){testIndex=0;testScore=0;testChoice=null;testAnswered=false;testQuestionScores={};testQuestionLabels={};testAttemptId=createStudentAttemptId();testReturnPage="category";page="test";}
  else if(action==="choice"){if(!testAnswered){testChoice=Number(el.dataset.choice);}}
  else if(action==="check-answer"){
    if(testChoice!==null&&!testAnswered){
      const question=items()[testIndex]||[];
      const key=`q${testIndex+1}`;
      const correct=testChoice===testIndex;
      if(correct)testScore++;
      testQuestionScores[key]={correct:correct?1:0,total:1};
      testQuestionLabels[key]=String(question[0]||`Frage ${testIndex+1}`);
      testAnswered=true;
    }
  }
  else if(action==="next-question"){if(testIndex<items().length-1){testIndex++;testChoice=null;testAnswered=false;}else{page="test-result";}}
  else if(action==="retry-test"){testIndex=0;testScore=0;testChoice=null;testAnswered=false;testQuestionScores={};testQuestionLabels={};testAttemptId=createStudentAttemptId();page="test";}
  else if(action==="category-home"){page="category";}
  else if(action==="test-home"){page=testReturnPage;}
  render();
});

// Apply saved display preferences on every page and on newly rendered content.
applyUiDisplayPreferences();
if(app && window.MutationObserver){
  const uiDisplayObserver=new MutationObserver(records=>{
    records.forEach(record=>record.addedNodes.forEach(node=>{
      if(node.nodeType===1 || node.nodeType===3){
        markUiScalableText(node);
        markUiScalableIcons(node);
      }
    }));
  });
  uiDisplayObserver.observe(app,{childList:true,subtree:true});
}
window.addEventListener("storage",function(event){
  if(event.key===settingsDashboardStorageKey()){applySettingsDashboardTheme();if(page==="settings")renderSettings();}
  if(event.key===UI_DISPLAY_PREFERENCES_KEY)applyUiDisplayPreferences();
  if(event.key===settingsPrefStorageKey() && (page==="settings" || page==="settings-detail"))render();
});
window.addEventListener("resize",refreshUiTextBaselines);
document.addEventListener("load",event=>{if(event.target?.tagName==="IFRAME")broadcastSettingsTranslationLanguage();},true);

async function bootDeutschA1(){
  // All access now requires a real Firebase-authenticated student or administrator account.
  // Local file previews and the former Sara demo account are intentionally disabled.
  if (!firebaseReady) { renderLogin(); setLoginMessage("Firebase konnte nicht initialisiert werden."); return; }
  firebaseAuth.onAuthStateChanged(async authUser => {
    if (!authUser) {
      stopAdminResultsRealtimeSync();
      currentUser = null; page = "login"; render(); return;
    }
    try {
      const uid = authUser.uid;
      const adminSnap = await firebaseDb.ref(`${DEUTSCH_A1_PATH}/admins/${uid}`).once("value");
      if (adminSnap.val() === true) {
        currentUser = {id:uid, role:"admin", name:"Administrator", email:authUser.email || ""};
        await loadDeutschA1Data(); page="admin"; render(); return;
      }
      const profileSnap = await firebaseDb.ref(`${DEUTSCH_A1_PATH}/users/${uid}`).once("value");
      const profile = profileSnap.val();
      if (!profile || profile.active === false || profile._systemPlaceholder) {
        await firebaseAuth.signOut(); currentUser=null; page="login"; render();
        setLoginMessage("Dieses Schülerkonto wurde nicht gefunden oder ist deaktiviert."); return;
      }
      currentStudentProfile = profile;
      currentUser = {id:uid, role:"student", name:profile.name || authUser.email, email:profile.email || authUser.email};
      localStorage.setItem("deutsch_a1_session_v1", JSON.stringify({id:uid, role:"student"}));
      await loadDeutschA1Data();
      startStudentActivityTracking();
      if(!applyTabFromHash()) page="home"; render();
    } catch(error) {
      console.error(error); currentUser=null; page="login"; render();
      setLoginMessage("Daten konnten nicht geladen werden. Bitte Firebase Rules prüfen: "+error.message);
    }
  });
}
bootDeutschA1();



/* =========================================================
   V13 — Hide the student topbar on scroll down, show on scroll up
   ========================================================= */
function handleStudentTopbarScroll(event){
  const scroller = event.target;
  if(!scroller || !scroller.classList || !scroller.classList.contains("student-main")) return;
  const appRoot = scroller.closest(".student-app");
  if(!appRoot) return;

  const currentTop = Math.max(0, scroller.scrollTop || 0);
  const previousTop = Number(appRoot.dataset.topbarScrollTop || 0);
  const delta = currentTop - previousTop;

  if(currentTop <= 8){
    appRoot.classList.remove("student-topbar-hidden");
  }else if(delta > 4){
    appRoot.classList.add("student-topbar-hidden");
  }else if(delta < -4){
    appRoot.classList.remove("student-topbar-hidden");
  }

  appRoot.dataset.topbarScrollTop = String(currentTop);
}

document.addEventListener("scroll", handleStudentTopbarScroll, {capture:true, passive:true});
