
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
let adminResultsRealtimeRef = null;
let adminResultsRealtimeHandler = null;
let adminResultsRealtimeSignature = "";
let currentStudentProfile = null;
let currentStudentGroup = null;
let adminStudentFilter = "all";
let adminGroupFilter = "all";
let adminAnalyticsGroupFilter = "all";
let adminAnalyticsStudentFilter = "all";
let adminSection = "home";
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
let adminResultsGroupId = "all";
let adminResultsStudentId = "all";
let adminResultsLessonFilter = "all";
let adminResultsTypeFilter = "all";
let studentProgressLessonFilter = "all";
let studentResultsExpanded = false;
let studentResultsActiveTool = "";
let adminExerciseHeatmapMode = "performance";
let editingGroupId = null;
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
    currentStudentGroup = null;
    if (currentStudentProfile.groupId) {
      const groupSnap = await firebaseDb.ref(`${DEUTSCH_A1_PATH}/groups/${currentStudentProfile.groupId}`).once("value");
      currentStudentGroup = groupSnap.val() || null;
    }
  } else {
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
  cloudResults[currentUser.id][moduleId] = {
    ...result,
    attempts:(Number(previous.attempts)||0)+(isNewAttempt?1:0),
    bestPercent:Math.max(Number(previous.bestPercent)||0, Number(result.percent)||0)
  };
  localStorage.setItem(AUTH_RESULTS_KEY, JSON.stringify(cloudResults));
  if (firebaseReady && !demoMode) {
    firebaseDb.ref(`${DEUTSCH_A1_PATH}/results/${currentUser.id}/${moduleId}`).transaction(current => {
      const old = current || {};
      return {
        ...result,
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
    exerciseLabels:data.exerciseLabels && typeof data.exerciseLabels==="object" ? data.exerciseLabels : {},
    stageByExercise:data.stageByExercise && typeof data.stageByExercise==="object" ? data.stageByExercise : {},
    stageLabels:data.stageLabels && typeof data.stageLabels==="object" ? data.stageLabels : {},
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
    // Refresh the visible results page when a student submits or visits an exercise.
    if(page==="admin" && adminSection==="results"){
      const scrollTop=window.scrollY||0;
      render();
      if(typeof window.scrollTo==="function") window.scrollTo(0,scrollTop);
    }
  };
  adminResultsRealtimeRef.on("value",adminResultsRealtimeHandler,error=>{
    console.error("Admin results live sync failed:",error);
  });
}

function stopAdminResultsRealtimeSync(){
  if(adminResultsRealtimeRef && adminResultsRealtimeHandler){
    try{adminResultsRealtimeRef.off("value",adminResultsRealtimeHandler);}catch(error){console.warn(error);}
  }
  adminResultsRealtimeRef=null;
  adminResultsRealtimeHandler=null;
  adminResultsRealtimeSignature="";
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
function getStudentLessonAccess(lessonIndex){
  if(!currentUser || currentUser.role!=="student") return true;
  const key=String(Number(lessonIndex)+1);
  const own=currentStudentProfile && currentStudentProfile.lessonAccess;
  if(own && Object.prototype.hasOwnProperty.call(own,key)) return own[key] !== false;
  const group=currentStudentGroup && currentStudentGroup.lessonAccess;
  if(group && Object.prototype.hasOwnProperty.call(group,key)) return group[key] !== false;
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
  const lessonAccess={};
  document.querySelectorAll('input[name="groupLessons"]:checked').forEach(input=>lessonAccess[input.value]=true);
  for(let i=1;i<=10;i++) if(!Object.prototype.hasOwnProperty.call(lessonAccess,String(i))) lessonAccess[String(i)]=false;
  if(!name){showToast("Bitte einen Gruppennamen eingeben.");return;}
  const id=editingGroupId || (`group_${Date.now()}_${Math.random().toString(36).slice(2,7)}`);
  const old=cloudGroups[id]||{};
  const group={...old,id,name,requiredDailyMinutes:required,lessonAccess,updatedAt:new Date().toISOString(),createdAt:old.createdAt||new Date().toISOString()};
  firebaseDb.ref(`${DEUTSCH_A1_PATH}/groups/${id}`).set(group).then(async()=>{
    editingGroupId=null;await loadDeutschA1Data();render();showToast("Gruppe wurde gespeichert.");
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
let competitionSelectedLessons = [];
let competitionQuestionCount = 10;
let competitionWholeExercises = false;
let competitionExerciseSelections = {};
let competitionExerciseDrafts = {};
let competitionExerciseTileDrafts = {};
// Catalog metadata only: no answer keys or full questions are sent to students.
const competitionTestCatalog = [{"name":"Hallo & Herkunft","types":[{"name":"Verben","count":5},{"name":"Nomen","count":3},{"name":"Adjektive","count":3},{"name":"Präpositionen","count":3},{"name":"Grammatik","count":3}]},{"name":"Familie","types":[{"name":"Verben","count":7},{"name":"Nomen","count":18},{"name":"Adjektive","count":9},{"name":"Präpositionen","count":5},{"name":"Grammatik","count":5}]},{"name":"Wohnen","types":[{"name":"Verben","count":3},{"name":"Nomen","count":3},{"name":"Adjektive","count":3},{"name":"Präpositionen","count":3},{"name":"Grammatik","count":3}]},{"name":"Essen und Trinken","types":[{"name":"Verben","count":3},{"name":"Nomen","count":3},{"name":"Adjektive","count":3},{"name":"Präpositionen","count":3},{"name":"Grammatik","count":3}]},{"name":"Mein Alltag","types":[{"name":"Verben","count":3},{"name":"Nomen","count":3},{"name":"Adjektive","count":3},{"name":"Präpositionen","count":3},{"name":"Grammatik","count":3}]},{"name":"Meine Stadt, meine Wohnung","types":[{"name":"Zusatztest · Wörter verbinden","count":10},{"name":"Zusatztest · Artikel-Detektiv","count":12},{"name":"Zusatztest · Übersetzungsquiz","count":8},{"name":"Zusatztest · Lückensätze","count":8},{"name":"Zusatztest · Satzbau-Werkstatt","count":5},{"name":"Zusatztest · Wo bist du? – Präpositionen","count":6},{"name":"Zusatztest · Verben im Alltag","count":8},{"name":"Zusatztest · Adjektive-Duell","count":4},{"name":"Zusatztest · Lesen und verstehen","count":5},{"name":"Zusatztest · Fehler-Polizei","count":5},{"name":"Zusatztest · Wörter sortieren","count":12},{"name":"Zusatztest · Übersetzungswerkstatt","count":5},{"name":"Zusatztest · Abschlusstest","count":12}]},{"name":"Wie, wo und wann?","types":[{"name":"Zusatztest · Wörter verbinden","count":10},{"name":"Zusatztest · Wetter-Detektiv","count":8},{"name":"Zusatztest · Jahreszeiten und Monate","count":8},{"name":"Zusatztest · Wochentage ergänzen","count":5},{"name":"Zusatztest · Lückensätze","count":8},{"name":"Zusatztest · Satzbau-Werkstatt","count":5},{"name":"Zusatztest · am oder im?","count":8},{"name":"Zusatztest · Verben im Präsens","count":8},{"name":"Zusatztest · Wie, wo oder wann?","count":8},{"name":"Zusatztest · Hördetektiv (Satzverständnis)","count":5},{"name":"Zusatztest · Lesen und verstehen","count":5},{"name":"Zusatztest · Fehler-Polizei","count":5},{"name":"Zusatztest · Wörter sortieren","count":12},{"name":"Zusatztest · Übersetzungswerkstatt","count":5},{"name":"Zusatztest · Abschlusstest","count":12}]},{"name":"Unterwegs","types":[{"name":"Zusatztest · Wörter verbinden","count":10},{"name":"Zusatztest · Artikel-Detektiv","count":12},{"name":"Zusatztest · Übersetzungsquiz","count":8},{"name":"Zusatztest · Lückensätze","count":8},{"name":"Zusatztest · Buchstabensalat","count":8},{"name":"Zusatztest · Satzbau-Werkstatt","count":5},{"name":"Zusatztest · Mit dem Bus oder mit der Bahn?","count":6},{"name":"Zusatztest · Verben unterwegs","count":8},{"name":"Zusatztest · Adjektive-Match","count":8},{"name":"Zusatztest · Lesen und verstehen","count":5},{"name":"Zusatztest · Fehler-Polizei","count":5},{"name":"Zusatztest · Wörter sortieren","count":12},{"name":"Zusatztest · Übersetzungswerkstatt","count":5},{"name":"Zusatztest · Abschlusstest","count":12}]},{"name":"Unter Freunden – Der Flohmarkt","types":[{"name":"Zusatztest · Wörter verbinden","count":10},{"name":"Zusatztest · Artikel-Detektiv","count":12},{"name":"Zusatztest · Übersetzungsquiz","count":10},{"name":"Zusatztest · Lückensätze","count":8},{"name":"Zusatztest · Buchstabensalat","count":8},{"name":"Zusatztest · Satzbau-Werkstatt","count":5},{"name":"Zusatztest · Adjektive im Flohmarkt","count":8},{"name":"Zusatztest · Verben richtig konjugieren","count":8},{"name":"Zusatztest · Adjektive verbinden","count":8},{"name":"Zusatztest · Lesen und verstehen","count":6},{"name":"Zusatztest · Dialog ergänzen","count":4},{"name":"Zusatztest · Fehler-Polizei","count":8},{"name":"Zusatztest · Wörter sortieren","count":16},{"name":"Zusatztest · Übersetzungswerkstatt","count":8},{"name":"Zusatztest · Abschlusstest","count":15}]},{"name":"Gesundheit & Termine","types":[{"name":"Verben","count":3},{"name":"Nomen","count":3},{"name":"Adjektive","count":3},{"name":"Präpositionen","count":3},{"name":"Grammatik","count":3}]}];
let competitionSelectedTestTypes = {};
let competitionExpandedLesson = null;
function competitionEnsureTypes(lessonIndex){
  const all=competitionTestCatalog[lessonIndex]?.types||[];
  const current=competitionSelectedTestTypes[lessonIndex];
  if(!Array.isArray(current)){
    competitionSelectedTestTypes[lessonIndex]=all.map((_,i)=>i);
  }
  return competitionSelectedTestTypes[lessonIndex];
}
function competitionAvailableQuestionCount(){
  return competitionSelectedLessons.reduce((total,lessonIndex)=>{
    const types=competitionTestCatalog[lessonIndex]?.types||[];
    return total+competitionEnsureTypes(lessonIndex).reduce((num,typeIndex)=>num+(types[typeIndex]?.count||0),0);
  },0);
}
function competitionTypeTitle(name){
  return String(name||'Test').replace(/^L7 A1\.1\s*·\s*/,'').replace(/^Zusatztest\s*·\s*/,'').trim();
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
let competitionGlobalStats = [];

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
    const tab=new URLSearchParams(window.location.hash.replace(/^#/,"")).get("tab");
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
function levelLessons(){
  return selectedLevel === "A1.1" ? [0,1,2,3,4] : [5,6,7,8,9];
}
function header(){
  const name = escapeHtml(currentUser?.name || "متعلّم");
  const pageTitles = {
    home:"اليوم", "learn-hub":"تعلّم", levels:"تعلّم", "level-home":"تعلّم",
    "a2-level-home":"تعلّم", "a2-lesson-html":"تعلّم", "a2-course-content":"تعلّم",
    lessons:"تعلّم", "lesson-hub":"تعلّم", "lesson-podcasts":"تعلّم",
    podcasts:"تعلّم", "podcast-player":"تعلّم", tests:"تعلّم",
    "test-categories":"تعلّم", "standalone-lesson-test":"تعلّم",
    lesson:"تعلّم", "interactive-lesson-poster":"تعلّم", dialogue:"تعلّم",
    "intro-dialogue":"تعلّم", numbers:"تعلّم", essen:"تعلّم",
    freizeit:"تعلّم", stadt:"تعلّم", "family-tree":"تعلّم",
    category:"تعلّم", learning:"تعلّم", test:"تعلّم",
    "test-result":"تعلّم", "custom-content":"تعلّم", talk:"تكلّم", sessions:"الجلسات",
    community:"المجتمع", competition:"المنافسة", "student-results":"تقدّمي", settings:"الإعدادات"
  };
  const title = pageTitles[page] || "Deutsch";
  const level = ["a2-level-home","a2-lesson-html","a2-course-content","a2-test-html"].includes(page) ? "A2" : (selectedLevel || "A1.1");
  if(page==="student-results"){
    return `<header class="student-topbar student-topbar-progress">
      <div class="student-topbar-brand"><span class="student-brand-copy"><strong>تقدّمي</strong><small>${name} · ${level}</small></span></div>
      <div class="student-topbar-actions">
        <button class="student-icon-btn" type="button" data-action="student-notifications" aria-label="الإشعارات" title="الإشعارات"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg></button>
        <button class="student-icon-btn" type="button" data-action="student-settings" aria-label="الإعدادات" title="الإعدادات">⚙</button>
      </div>
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
  if(["learn-hub","levels","level-home","a2-level-home","a2-lesson-html","a2-course-content","a2-test-html","lessons","lesson-hub","lesson-podcasts","podcasts","podcast-player","tests","test-categories","standalone-lesson-test","lesson","interactive-lesson-poster","dialogue","intro-dialogue","numbers","essen","freizeit","stadt","family-tree","category","learning","test","test-result","custom-content"].includes(page)) return "learn";
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
    ["sessions","الجلسات"],
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
    "learn-hub","levels","level-home","a2-level-home","lessons","lesson-hub","lesson-podcasts",
    "tests","test-categories","lesson","category","learning","test","test-result",
    "sessions","community","settings"
  ]);
  const backControl = pagesWithHeaderBack.has(page)
    ? `<div class="student-page-back-row"><button type="button" class="student-page-back" data-action="back"><span aria-hidden="true">→</span><span>رجوع</span></button></div>`
    : "";
  return studentLayout(`${backControl}<section class="student-page-heading">
    <p class="student-eyebrow">${eyebrow}</p>
    <h1>${title}</h1>
    <p>${subtitle}</p>
  </section><div class="student-page-content">${content}</div>`);
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

function renderHome(){
  const lessonIndex = getHomeLessonIndex();
  rememberHomeLesson(lessonIndex);
  const todayLesson = lessons[lessonIndex] || lessons[0];
  const todayLevel = lessonIndex < 5 ? "A1.1" : "A1.2";
  selectedLevel = todayLevel;

  const plan = readDailyPlan();
  const taskMeta = [
    {id:"vocab",icon:"🔁",title:"مراجعة 9 كلمات",time:"6 د",detail:`راجع مفردات ${todayLesson.name}`},
    {id:"listening",icon:"👂",title:"تدريب الاستماع",time:"18 د",detail:"استمع إلى حوار ألماني قصير"},
    {id:"grammar",icon:"📐",title:"تمرين القواعد",time:"13 د",detail:`اختبر فهمك لقواعد ${todayLevel}`}
  ];
  const doneCount = Object.values(plan.tasks).filter(Boolean).length;
  const dailyPlanCount = Number(Boolean(plan.goals.lesson)) + Number(Boolean(plan.goals.practice));
  const lessonProgress = lessonIndex + 1;
  const dailyPercent = Math.round(doneCount/3*100);
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

  const taskRows = taskMeta.map(task=>`
    <article class="daily-task-row ${plan.tasks[task.id]?"is-done":""}">
      <span class="daily-task-icon">${task.icon}</span>
      <div class="daily-task-copy"><strong>${task.title}</strong><small>${task.detail}</small></div>
      <span class="daily-task-time">${task.time}</span>
      ${plan.tasks[task.id]
        ? `<span class="daily-task-done">✓ تم</span>`
        : `<button type="button" class="daily-task-start" data-action="daily-open" data-task="${task.id}">ابدأ</button><button type="button" class="daily-task-check" data-action="daily-complete" data-task="${task.id}" aria-label="تحديد المهمة كمكتملة">✓</button>`}
    </article>`).join("");

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
      <div class="daily-progress-rings" role="img" aria-label="تقدم اليوم: ${doneCount} من 3 دروس، ${dailyPlanCount} من 2 من خطة اليوم، ${lessonProgress} من 10 في الوحدة">
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
          <div class="daily-progress-item"><span class="daily-progress-dot red"></span><span>دروس اليوم</span><strong>${doneCount}/3</strong></div>
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
    ${demoMode?`<p class="demo-mode-note">أنت الآن في وضع معاينة الواجهة. البيانات المعروضة تجريبية ومحفوظة محلياً فقط.</p>`:""}
  `;
  app.innerHTML = studentLayout(content,"home");
}
function renderLearnHub(){
  const levels = [
    {id:"A1",title:"المستوى الأساسي",desc:"تعلّم الأساسيات والتواصل في الحياة اليومية",tone:"green",available:true},
    {id:"A2",title:"المستوى الأساسي الأعلى",desc:"توسيع المفردات والتعبير في مواقف يومية أكثر · 10 دروس متاحة",tone:"blue",available:true},
    {id:"B1",title:"المستوى المتوسط",desc:"التعبير عن الآراء والتجارب بشكل أوضح وأطول",tone:"orange",available:false},
    {id:"B2",title:"المستوى المتقدم الأعلى",desc:"التواصل بطلاقة ومناقشة مواضيع معقدة",tone:"purple",available:false}
  ];
  const levelCards = levels.map(level=>`
    <button type="button" class="learn-level-card learn-level-${level.tone} ${level.available?"is-available":"is-coming"}"
      data-action="level-path" data-level="${level.id}" aria-label="اختيار المستوى ${level.id}">
      <span class="learn-level-top">
        <strong>${level.id}</strong>
        <span class="learn-level-bars" aria-hidden="true"><i></i><i></i><i></i></span>
      </span>
      <b>${level.title}</b>
      <small>${level.desc}</small>
      <span class="learn-level-arrow" aria-hidden="true">→</span>
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
      <p class="learn-level-note">المتاح حالياً: دروس A1 و10 دروس من مستوى A2.</p>
    </section>
  `;
  app.innerHTML = studentLayout(content,"learn");
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
      if(!/^(A1|A2)_\d+$/.test(id) || !record || typeof record!=="object") return;
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
    page=level==="A2"?"a2-lesson-html":(lessonSectionReturnPage||"lesson-hub");
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
    page=level==="A2"?"a2-level-home":"level-home";
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
  if(!["lesson-section-html","a2-course-content"].includes(page)) return;
  saveActiveCourseBeforeExit();
  document.documentElement.classList.remove("challenge-fullscreen-open");
  document.body.classList.remove("challenge-fullscreen-open");
  page=active.level==="A2"?"a2-level-home":"level-home";
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
    lesson,index,completed:completedForLesson(lesson.number)||!!getCourseProgress("A2",lesson.number)?.completed,unlocked:true
  }));
  const currentIndex = statuses.find(item=>!item.completed)?.index ?? -1;
  const nextLesson = statuses.find(item=>item.index===currentIndex) || statuses[0];
  const completedCount = statuses.filter(item=>item.completed).length;
  const progress = a2CourseLessons.length ? Math.round(completedCount/a2CourseLessons.length*100) : 0;

  const lessonCards = statuses.map(item=>{
    const {lesson,index}=item;
    const state = item.completed ? "completed" : index===currentIndex ? "current" : "available";
    const saved=getCourseProgress("A2",lesson.number);
    const stateLabel = state==="completed" ? "مكتمل" : saved?.startedAt ? `متابعة ${courseProgressPercent(saved)}%` : state==="current" ? "قيد التعلّم" : "متاح";
    const stateIcon = state==="completed" ? "✓" : state==="current" ? "●" : "•";
    return `<button type="button" class="level-lesson-card is-${state}" data-action="a2-lesson" data-lesson-no="${lesson.number}" aria-label="${escapeHtml(`الدرس ${lesson.number}: ${lesson.arabic} · ${stateLabel}`)}">
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
    : `<div class="level-complete-note"><span aria-hidden="true">🏆</span><strong>أحسنت! أكملت جميع الدروس</strong></div>`;

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
  const timeout=setTimeout(()=>controller.abort(),name==="createCompetitionRoom"?30000:18000);
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
    const detail=result.error||result.message||`Supabase HTTP ${response.status}`;
    const error=new Error(detail);
    error.code=result.code||`http_${response.status}`;
    error.status=response.status;
    throw error;
  }
  return {data:result.data??result};
}
// Use the UID of the user actually authenticated with Firebase. The cached
// currentUser profile may be out of sync when the auth session changes.
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
  if(competitionRoomId){
    if(!competitionRoomData){
      app.innerHTML=pageShell("المنافسة","كنوجدّو الغرفة…","لحظة، كنجيبو معلومات المنافسة.",`<div class="competition-loading">🏆 جاري الاتصال بالغرفة…</div>`);
      return;
    }
    renderCompetitionRoom();
    return;
  }
  // Selection is user-controlled: do not automatically re-check L1/the last lesson.
  const lessonsMarkup=lessons.map((lesson,index)=>{
    const allowed=getStudentLessonAccess(index);
    const selected=competitionSelectedLessons.includes(index);
    return `<button type="button" class="competition-lesson-chip ${selected?"selected":""} ${allowed?"":"locked"}" data-action="competition-lesson" data-lesson="${index}" ${allowed?"":"disabled"}>
      <span class="competition-lesson-check">${selected?"✓":""}</span><strong>L${index+1}</strong><small>${escapeHtml(competitionTestCatalog[index]?.name||lesson.name)}</small>
    </button>`;
  }).join("");
  // The chosen lesson opens its Test sections underneath the lesson grid.
  if(competitionExpandedLesson===null || !competitionSelectedLessons.includes(competitionExpandedLesson)){
    competitionExpandedLesson=competitionSelectedLessons[0]??null;
  }
  const activeLessonIndex=competitionExpandedLesson;
  const activeTypes=activeLessonIndex===null?[]:(competitionTestCatalog[activeLessonIndex]?.types||[]);
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
        <small>${escapeHtml(competitionTestCatalog[activeLessonIndex]?.name||"")} · اختار التمارين اللي بغيتي</small></div>
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
  const content=`
    <section class="competition-hero">
      <div class="competition-hero-icon">🏆</div>
      <div><span>تحدّى أصحابك</span><h2>كل جواب صحيح يقرّبك للصدارة!</h2><p>اختار الدرس، جمع النقاط، وطلع فلوحة المتصدرين.</p></div>
      <div class="competition-my-points"><strong>${Number(myStats.totalPoints)||0}</strong><small>مجموع نقاطك</small></div>
    </section>

    <div class="competition-create-grid">
      <section class="competition-card">
        <div class="competition-card-heading"><span>⚡</span><div><h3>أنشئ منافسة</h3><p>صايب غرفة وشارك الرمز مع صحابك</p></div></div>
        <div class="competition-mode-picker">
          <button type="button" class="${competitionMode==="duel"?"active":""}" data-action="competition-mode" data-mode="duel"><strong>👤 1 ضد 1</strong><small>صاحب الغرفة هو اللي كيبدأ المنافسة</small></button>
          <button type="button" class="${competitionMode==="group"?"active":""}" data-action="competition-mode" data-mode="group"><strong>👥 مجموعة</strong><small>حتى 20 تلميذ</small></button>
        </div>
        <div class="competition-field-head"><strong>اختار الدروس</strong><small>ضغط مرة باش تختار، ومرة ثانية باش تحيد المارك</small></div>
        <div class="competition-lesson-grid">${lessonsMarkup}</div>
        <p class="competition-source-hint">📘 L6–L9: التمارين من صفحات Test الأصلية ديال كل درس. L1–L5 وL10: اختبارات الأصناف المدمجة فالموقع.</p>
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
        <button type="button" class="competition-primary-btn" data-action="competition-create" ${competitionBusy||!competitionSelectedLessons.length||!availableQuestions||selectedTypesTotal<competitionSelectedLessons.length?"disabled":""}>${competitionBusy?"كنوجدّو المنافسة…":"🏆 إنشاء غرفة المنافسة"}</button>
        <p class="competition-hint">غادي يتولد رمز خاص بالغرفة. صيفطو للتلميذ أو للمجموعة باش ينضمو.</p>
      </section>

      <section class="competition-card competition-join-card">
        <div class="competition-card-heading"><span>🔑</span><div><h3>انضم لمنافسة</h3><p>دخل الرمز اللي عطاك صاحبك</p></div></div>
        <form id="competitionJoinForm" class="competition-join-form">
          <label for="competitionJoinCode">رمز المنافسة</label>
          <input id="competitionJoinCode" name="code" type="text" maxlength="6" minlength="6" autocomplete="off" placeholder="مثال: A7K9P2" required>
          <button type="submit" class="competition-secondary-btn" ${competitionBusy?"disabled":""}>انضم للغرفة ←</button>
        </form>
        <div class="competition-howto"><strong>كيفاش كتخدم؟</strong><p>دخل للغرفة، تسنّى حتى يكونو جوج لاعبين على الأقل، ومن بعد غير صاحب الغرفة اللي يضغط Start باش تبدا المنافسة عند الجميع.</p></div>
      </section>
    </div>

    <section class="competition-card competition-global-card">
      <div class="competition-card-heading"><span>🌍</span><div><h3>المتصدرون</h3><p>ترتيب مجموع نقاط المنافسات</p></div></div>
      ${leaderboard?`<div class="competition-global-list">${leaderboard}</div>`:`<div class="competition-empty">مازال ما تسجلات حتى منافسة. كون أول بطل!</div>`}
    </section>
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
  const submit=app.querySelector('[data-action="competition-submit-uebung"]');
  if(!submit)return;
  const cards=[...app.querySelectorAll(".competition-uebung-item[data-question-index]:not(.submitted)")];
  submit.disabled=competitionSubmitting||cards.some(card=>{
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
async function loadCompetitionStats(){
  if(!firebaseReady||!firebaseAuth?.currentUser)return;
  try{
    const result=await competitionCallable("getCompetitionStats",{});
    const nextStats=Array.isArray(result.data?.stats)?result.data.stats:[];
    const changed=JSON.stringify(nextStats)!==JSON.stringify(competitionGlobalStats);
    competitionGlobalStats=nextStats;
    if(changed&&page==="competition"&&!competitionRoomId)renderCompetition();
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
  if(!firebaseReady||!firebaseAuth?.currentUser){showToast("خاصك تدخل بحساب التلميذ باش تنشئ منافسة حقيقية.");return;}
  const selected=competitionSelectedLessons.filter(index=>(index===10?getStudentLessonAccess(6):getStudentLessonAccess(index)));
  if(!selected.length){showToast("اختار درساً واحداً على الأقل.");return;}
  const countField=document.getElementById("competitionCustomCount");
  const available=competitionAvailableQuestionCount();
  const requestedCount=competitionWholeExercises ? available : Number(countField?.value??competitionQuestionCount);
  if(!Number.isInteger(requestedCount)||requestedCount<1||requestedCount>available){
    showToast(`اختار عدد الأسئلة بين 1 و ${available}.`);return;
  }
  const testTypes=competitionSelectedTypePayload();
  if(selected.some(index=>!testTypes[String(index)]?.length)){
    showToast("اختار نوع تمرين واحد على الأقل لكل درس.");return;
  }
  competitionQuestionCount=requestedCount;
  competitionBusy=true;renderCompetition();
  try{
    const result=await competitionCallable("createCompetitionRoom",{
      mode:competitionMode,lessonIndices:selected,questionCount:competitionQuestionCount,testTypes,
      wholeExercises:competitionWholeExercises
    });
    const payload=result?.data||{};
    const generatedCode=String(payload.code||"").trim().toUpperCase();
    const generatedRoomId=String(payload.roomId||"").trim();
    if(!/^[A-Z0-9]{6}$/.test(generatedCode)||!generatedRoomId){
      throw new Error("Supabase ما رجّعش رمز الغرفة. تأكد من نشر Edge Function competition.");
    }

    // Display the server-generated code immediately. Do not wait for
    // the Realtime Database listener before showing the room to its creator.
    competitionRoomCode=generatedCode;
    competitionRoomId=generatedRoomId;
    competitionExerciseSelections={};competitionExerciseDrafts={};competitionExerciseTileDrafts={};
    const creatorUid=firebaseAuth.currentUser.uid;
    const creatorName=currentUser?.name||currentStudentProfile?.name||firebaseAuth.currentUser.displayName||"متعلّم";
    competitionRoomData={
      id:generatedRoomId,
      code:generatedCode,
      createdBy:creatorUid,
      isCreator:true,
      creatorName,
      mode:competitionMode,
      status:"waiting",
      lessonIndices:selected.slice(),
      lessonNames:selected.map(index=>competitionTestCatalog[index]?.name||lessons[index]?.name||`L${index+1}`),
      questionCount:competitionQuestionCount,
      questions:[],
      members:{
        [creatorUid]:{
          uid:creatorUid,name:creatorName,score:0,answeredCount:0,
          correctCount:0,finished:false,joinedAt:Date.now()
        }
      }
    };
    renderCompetitionRoom();
    listenCompetitionRoom(generatedRoomId);
    // Room already has a large styled code card with Copy/Share actions.
    // Avoid a second unstyled/blocking pop-up over the room.
    closeCompetitionCodeDialog();
    showToast("تخلقات الغرفة! نسخ الرمز وصيفطو للتلميذ الثاني.");
  }catch(error){
    console.error("Create competition failed:",error);
    showCompetitionCreationError(error);
  }finally{competitionBusy=false;if(page==="competition")renderCompetition();}
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
function renderSettings(){
  const profile = currentStudentProfile || {};
  const displayPrefs = readUiDisplayPreferences();
  const textPercent = Math.round(displayPrefs.textScale * 100);
  const iconPercent = Math.round(displayPrefs.iconScale * 100);
  const content = `
    <section class="settings-profile-card"><span class="settings-avatar">${escapeHtml((currentUser?.name||"S").slice(0,1).toUpperCase())}</span><div><h2>${escapeHtml(currentUser?.name||"متعلّم")}</h2><p>${escapeHtml(currentUser?.email||"")}</p><span class="settings-level-badge">المستوى الحالي · A1</span></div></section>
    <section class="dashboard-section"><div class="dashboard-section-head"><div><span class="section-overline">الحساب</span><h2>معلومات الحساب</h2></div></div><div class="settings-list">
      <div><span>الاسم</span><strong>${escapeHtml(profile.name||currentUser?.name||"—")}</strong></div>
      <div><span>البريد الإلكتروني</span><strong dir="ltr">${escapeHtml(profile.email||currentUser?.email||"—")}</strong></div>
      <div><span>الدور</span><strong>متعلّم</strong></div>
      <div><span>المستوى المتاح حالياً</span><strong>A1 · 10 دروس</strong></div>
    </div></section>
    <section class="dashboard-section"><div class="dashboard-section-head"><div><span class="section-overline">التفضيلات</span><h2>إعدادات التعلّم</h2></div></div><div class="settings-note"><strong>لغة الواجهة: العربية</strong><p>لغة الشرح والترجمة هي العربية، أما أمثلة التعلّم والحوارات فتبقى بالألمانية حتى تتدرّب عليها.</p></div></section>
    <section class="dashboard-section ui-display-settings">
      <div class="dashboard-section-head"><div><span class="section-overline">سهولة القراءة</span><h2>حجم الكتابة والأيقونات</h2></div></div>
      <p class="ui-display-intro">اختار الحجم اللي مريح لعينيك. التغيير كيتطبّق مباشرة على صفحات المنصة والتمارين وكيبقى محفوظ.</p>
      <div class="ui-scale-control">
        <div class="ui-scale-heading"><label for="uiTextScale">حجم الكتابة</label><output id="uiTextScaleValue" for="uiTextScale">${textPercent}%</output></div>
        <input class="ui-scale-slider" id="uiTextScale" type="range" min="90" max="130" step="1" value="${textPercent}">
        <div class="ui-scale-hints"><span>أصغر</span><span>أكبر</span></div>
      </div>
      <div class="ui-scale-control">
        <div class="ui-scale-heading"><label for="uiIconScale">حجم الأيقونات</label><output id="uiIconScaleValue" for="uiIconScale">${iconPercent}%</output></div>
        <input class="ui-scale-slider" id="uiIconScale" type="range" min="90" max="140" step="1" value="${iconPercent}">
        <div class="ui-scale-hints"><span>أصغر</span><span>أكبر</span></div>
      </div>
      <button type="button" class="ui-display-reset-btn" data-action="ui-reset-display">إرجاع الحجم الافتراضي</button>
    </section>
    <button type="button" class="settings-logout-btn" data-action="logout">تسجيل الخروج</button>
  `;
  app.innerHTML = pageShell("الإعدادات","إعدادات حسابك","راجع معلومات حسابك وتفضيلات التعلّم.",content);
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
      <div class="auth-divider"><span>أو</span></div>
      <button type="button" class="demo-login-btn" data-action="demo-login">استكشف التصميم · معاينة تجريبية</button>
      <small class="auth-demo-caption">المعاينة لا تحتاج حساباً ولا تحفظ بياناتك على الخادم.</small>
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

function renderAdmin(){
  if(!currentUser || currentUser.role!=="admin"){page="home";return renderHome();}
  const users=readUsers();
  const allResults=readAllResults();
  const today=localDateKey();
  const groupOptions=(selected)=>`<option value="">Ohne Gruppe</option>`+Object.entries(cloudGroups).filter(([id,g])=>g&&g._systemPlaceholder!==true&&!String(id).startsWith("__system_")).map(([id,g])=>`<option value="${escapeHtml(id)}" ${selected===id?"selected":""}>${escapeHtml(g.name||id)}</option>`).join("");
  const studentGroupFilterOptions=`<option value="all" ${adminGroupFilter==="all"?"selected":""}>Alle Gruppen</option><option value="__ungrouped__" ${adminGroupFilter==="__ungrouped__"?"selected":""}>Ohne Gruppe</option>`+Object.entries(cloudGroups).filter(([id,g])=>g&&g._systemPlaceholder!==true&&!String(id).startsWith("__system_")).map(([id,g])=>`<option value="${escapeHtml(id)}" ${adminGroupFilter===id?"selected":""}>${escapeHtml(g.name||id)}</option>`).join("");
  const realGroups=Object.entries(cloudGroups).filter(([id,g])=>g&&g._systemPlaceholder!==true&&!String(id).startsWith("__system_"));
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
    const allowed=Object.values(g.lessonAccess||{}).filter(Boolean).length;
    const groupUsers=users.filter(u=>u.groupId===id);
    const count=groupUsers.length;
    const groupSeconds=groupUsers.reduce((sum,u)=>sum+Number((((cloudActivity[u.id]||{})[today]||{}).totalSeconds)||0),0);
    const groupLogins=groupUsers.reduce((sum,u)=>sum+Number((((cloudActivity[u.id]||{})[today]||{}).loginCount)||0),0);
    return `<div class="admin-group-row"><div><strong>${escapeHtml(g.name||id)}</strong><small>${count} طالب · ${allowed}/10 دروس متاحة · ${Number(g.requiredDailyMinutes)||0} دقيقة/اليوم · اليوم: ${formatDuration(groupSeconds)}، ${groupLogins} دخول</small></div><div class="admin-group-row-actions"><button class="tiny-btn primary" data-action="admin-open-group" data-id="${escapeHtml(id)}">فتح المجموعة</button><button class="tiny-btn" data-action="admin-edit-group" data-id="${escapeHtml(id)}">تعديل</button><button class="tiny-btn danger" data-action="admin-delete-group" data-id="${escapeHtml(id)}">حذف</button></div></div>`;
  }).join(""):`<p class="admin-empty-note">مازال ما كاينة حتى مجموعة. زِد أول مجموعة من النموذج أعلاه.</p>`;
  const editing=editingGroupId && cloudGroups[editingGroupId] ? cloudGroups[editingGroupId] : {};
  const groupLessonChecks=Array.from({length:10},(_,i)=>{
    const no=i+1, checked=editingGroupId ? !!(editing.lessonAccess && editing.lessonAccess[String(no)]) : true;
    return `<label class="admin-lesson-check"><input type="checkbox" name="groupLessons" value="${no}" ${checked?"checked":""}><span>Lektion ${no}</span></label>`;
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
  const resultsVisibleUserIds = new Set(resultsVisibleUsers.map(user=>user.id));
  const resultsAnalyticsFilters={lesson:adminResultsLessonFilter,type:adminResultsTypeFilter};
  const resultsVisibleRows = resultRows.filter(row=>
    resultsVisibleUserIds.has(row.user.id) &&
    (adminResultsLessonFilter==="all" || adminResultLessonIndex(row.result)===Number(adminResultsLessonFilter)-1) &&
    (adminResultsTypeFilter==="all" || adminResultType(row.result)===adminResultsTypeFilter)
  );
  const resultsVisibleRowsMarkup = resultsVisibleRows.length ? resultsVisibleRows.map(({user,result})=>{
    const pct=adminResultPercent(result);
    const max=Number(result.maxPoints)||0;
    const visitedCount=Object.keys(result.visited||{}).filter(key=>result.visited[key]).length;
    const pointsLabel=max>0?`${Number(result.points)||0} / ${max}`:visitedCount?`${visitedCount} تمارين مفتوحة`:"—";
    const statusLabel=pct===null?(visitedCount?"قيد المحاولة":"لم يُقيّم"):pct<60?"يحتاج مراجعة":"جيد";
    const statusClass=pct===null?"neutral":pct<60?"warning":"active";
    return `<tr><td><strong>${escapeHtml(user.name||"—")}</strong><small>${escapeHtml(studentGroupName(user))}</small></td><td>${escapeHtml(result.title||result.moduleId||"اختبار")}</td><td><strong>${pointsLabel}</strong></td><td><span class="result-percent">${pct===null?"—":pct+"%"}</span></td><td>${Number(result.attempts)||1}×</td><td><span class="status-pill ${statusClass}">${statusLabel}</span></td><td>${result.updatedAt?new Date(result.updatedAt).toLocaleString("fr-FR"):"—"}</td></tr>`;
  }).join("") : `<tr><td colspan="7" class="empty-cell">ما كايناش نتائج فهاد الاختيار.</td></tr>`;
  const resultsActivityRowsMarkup = resultsVisibleUsers.length ? resultsVisibleUsers.map(user=>{
    const report=adminStudentAnalytics(user,resultsAnalyticsFilters);
    const typeLabel=adminResultsTypeFilter==="kurs"?"Kurs":adminResultsTypeFilter==="podcast"?"Podcast":"كل المحتوى";
    return `<tr><td><strong>${escapeHtml(user.name||"—")}</strong><small>${escapeHtml(user.email||"")}</small></td><td>${escapeHtml(studentGroupName(user))}</td><td>${escapeHtml(typeLabel)}</td><td><strong>${formatDuration(report.filteredSeconds)}</strong></td><td>${report.totalLogins}</td></tr>`;
  }).join("") : `<tr><td colspan="5" class="empty-cell">ما كاين حتى طالب فهاد الاختيار.</td></tr>`;
  const resultsActivityMarkup = `
    <section class="admin-panel"><div class="admin-section-head"><div><p class="admin-eyebrow">وقت التعلم</p><h2>نشاط الطلبة فـ ${adminResultsTypeFilter==="kurs"?"Kurs":"Podcast"}</h2><p>المدة المسجلة حسب المجموعة والطالب والدرس المختار.</p></div></div>
      <div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>الطالب</th><th>المجموعة</th><th>المحتوى</th><th>المدة</th><th>الدخولات</th></tr></thead><tbody>${resultsActivityRowsMarkup}</tbody></table></div>
    </section>`;
  const resultsWeakRows = resultsVisibleRows.filter(({result})=>{
    const pct=adminResultPercent(result); return pct!==null && pct<60;
  });
  const resultsWeakMarkup = resultsWeakRows.length ? resultsWeakRows.map(({user,result})=>{
    const pct=adminResultPercent(result);
    return `<div class="admin-difficulty-row"><div><strong>${escapeHtml(user.name||"—")}</strong><small>${escapeHtml(result.title||result.moduleId||"اختبار")}</small></div><span class="status-pill warning">${pct}% · ${Number(result.attempts)||1} محاولات</span></div>`;
  }).join("") : `<p class="admin-empty-note">ما كايناش نتائج ضعيفة أقل من 60% فهاد الاختيار.</p>`;
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

  const homeMarkup = `
    <section class="admin-welcome"><div><p class="admin-eyebrow">الرئيسية</p><h1>مرحبا بك فلوحة الإدارة</h1><p>نظرة سريعة على الطلبة والمجموعات ديالك.</p></div></section>
    <section class="admin-stats admin-home-stats">
      <article><span>👨‍🎓</span><div><small>مجموع الطلبة</small><strong>${users.length}</strong></div></article>
      <article><span>👥</span><div><small>المجموعات</small><strong>${realGroups.length}</strong></div></article>
      <article><span>📂</span><div><small>طلبة بدون مجموعة</small><strong>${unassignedCount}</strong></div></article>
    </section>
    <section class="admin-panel"><div class="admin-section-head"><div><p class="admin-eyebrow">المجموعات</p><h2>المجموعات ديالك</h2><p>اختار مجموعة باش تدخل للتفاصيل وتدبر الطلبة ديالها.</p></div><button class="outline-btn" data-action="admin-nav" data-section="groups">كل المجموعات ←</button></div><div class="admin-home-mini-grid">${homeGroupCards}</div></section>
    <section class="admin-panel"><div class="admin-section-head"><div><p class="admin-eyebrow">الطلبة</p><h2>آخر الطلبة المضافين</h2></div><span class="admin-count">${users.length} طالب</span></div><div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>الطالب</th><th>المجموعة</th><th>الحساب</th><th>التفاصيل</th></tr></thead><tbody>${homeStudentCards}</tbody></table></div></section>
  `;

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
      <div class="admin-section-head"><div><p class="admin-eyebrow">تفاصيل المجموعة</p><h2>${escapeHtml(selectedGroup.name||"المجموعة")}</h2><p>إضافة الطلبة ومتابعة الحسابات داخل هاد المجموعة.</p></div><span class="admin-count">${selectedGroupUsers.length} طالب</span></div>
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
      <div class="admin-section-head admin-group-students-heading"><div><p class="admin-eyebrow">طلبة المجموعة</p><h3>لائحة الطلبة</h3></div></div>
      <div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>الطالب</th><th>المجموعة</th><th>الحالة</th><th>آخر دخول</th><th>الإجراءات</th></tr></thead><tbody>${groupStudentRows}</tbody></table></div>
    </section>
  ` : `<section class="admin-panel admin-group-empty-detail"><p>اختار مجموعة من اللائحة باش تشوف الطلبة ديالها وتزيد طلبة جداد.</p></section>`;

  const groupsMarkupPage = `
    <section class="admin-welcome"><div><p class="admin-eyebrow">تدبير المجموعات</p><h1>المجموعات والطلبة</h1><p>أنشئ المجموعات، ومن داخل كل مجموعة زيد الطلبة باستعمال Generator.</p></div></section>
    <section class="admin-panel"><div class="admin-section-head"><div><p class="admin-eyebrow">مجموعة جديدة</p><h2>${editingGroupId?"تعديل المجموعة":"إضافة مجموعة"}</h2></div><span class="admin-section-icon">＋</span></div>
      <div class="admin-group-form">
        <div class="admin-form-grid"><label>اسم المجموعة<input id="groupName" type="text" value="${escapeHtml(editing.name||"")}" placeholder="مثلاً: A1 صباحي"></label><label>الوقت المطلوب يومياً (بالدقائق)<input id="groupRequiredMinutes" type="number" min="0" max="600" value="${editing.requiredDailyMinutes==null?30:Number(editing.requiredDailyMinutes)}"></label></div>
        <p class="admin-note">الدروس المتاحة لهذه المجموعة:</p><div class="admin-lesson-checks">${groupLessonChecks}</div>
        <div class="admin-form-actions"><button class="primary-btn" data-action="admin-save-group">${editingGroupId?"حفظ التعديلات":"إنشاء المجموعة"}</button>${editingGroupId?'<button class="outline-btn" data-action="admin-cancel-group-edit">إلغاء</button>':""}</div>
      </div>
    </section>
    <section class="admin-panel"><div class="admin-section-head"><div><p class="admin-eyebrow">كل المجموعات</p><h2>قائمة المجموعات</h2></div><span class="admin-count">${realGroups.length} مجموعات</span></div><div class="admin-group-list">${groupsMarkup}</div></section>
    ${groupDetailMarkup}
  `;

  const resultsMarkupPage = `
    <section class="admin-welcome"><div><p class="admin-eyebrow">النتائج والتقارير</p><h1>نتائج المجموعات والطلبة</h1><p>اختار المجموعة أولاً، ومن بعد تقدر تختار طالب من نفس المجموعة.</p></div></section>
    <section class="admin-panel admin-results-filter-panel">
      <div class="admin-results-filter-grid">
        <label>1. اختار المجموعة<select id="adminResultsGroupFilter">${resultsGroupOptions}</select></label>
        <label>2. اختار الطالب<select id="adminResultsStudentFilter">${resultsStudentOptions}</select></label>
        <label>3. اختار الدرس (Lektion)<select id="adminResultsLessonFilter">${resultsLessonOptions}</select></label>
        <label>4. نوع المحتوى<select id="adminResultsTypeFilter">${resultsTypeOptions}</select></label>
      </div>
      <p class="admin-note">اختار مجموعة واحدة أو طالب واحد لعرض تقريره فقط، ثم حدّد Lektion ونوع المحتوى: Kurs أو Podcast أو Test. المبيانات والنتائج ونقاط الضعف كلها كتتصفّى حسب الاختيارات. Kurs وPodcast كيتسجل ليهم وقت التعلم؛ النقط والتمارين كتظهر فـ Test.</p>
    </section>
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
        <div><h2>اختار المجموعة أو الطالب لعرض التقرير</h2><p>التقارير التفصيلية ما غاديش تبان كاملة دفعة وحدة. اختار مجموعة باش تشوف تقريرها بوحدها، أو اختار طالب باش تشوف التقرير الفردي ديالو.</p></div>
      </section>
    `}
    ${adminResultsTypeFilter==="kurs" || adminResultsTypeFilter==="podcast" ? resultsActivityMarkup : `
      <section class="admin-panel"><div class="admin-section-head"><div><p class="admin-eyebrow">نقاط الضعف</p><h2>الدروس والاختبارات التي تحتاج مراجعة</h2></div><span class="admin-count">${resultsWeakRows.length} نتائج ضعيفة</span></div><div class="admin-difficulty-list">${resultsWeakMarkup}</div></section>
      <section class="admin-panel"><div class="admin-section-head"><div><p class="admin-eyebrow">كل النتائج</p><h2>تفاصيل الاختبارات</h2></div><span class="admin-count">${resultsVisibleRows.length} اختبار</span></div><div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>الطالب / المجموعة</th><th>الاختبار / الدرس</th><th>النقط</th><th>النسبة</th><th>المحاولات</th><th>الحالة</th><th>التاريخ</th></tr></thead><tbody>${resultsVisibleRowsMarkup}</tbody></table></div></section>
    `}
    <p class="admin-local-warning">☁️ Firebase: المجموعات، حسابات الطلبة، الأنشطة والنتائج محفوظة تحت deutschA1.</p>
  `;

  const contentLibraryMarkup = renderAdminContentSection();
  const pagesManagerMarkup = renderAdminPagesSection();
  const adminMainContent = adminSection==="groups" ? groupsMarkupPage : adminSection==="results" ? resultsMarkupPage : adminSection==="content" ? contentLibraryMarkup : adminSection==="pages" ? pagesManagerMarkup : homeMarkup;
  const adminTitle = adminSection==="groups" ? "المجموعات" : adminSection==="results" ? "النتائج" : adminSection==="content" ? "المحتوى" : adminSection==="pages" ? "صفحات HTML" : "الرئيسية";

  app.innerHTML=`<div class="admin-page admin-layout-page">
    <header class="admin-topbar"><div class="admin-brand"><span class="admin-brand-mark">A1</span><div><strong>Admin Dashboard</strong><small>Deutsch A1 · Centre Alpha</small></div></div><div class="admin-user"><span>👤 Administrator</span><button class="logout-btn" data-action="logout">Abmelden</button></div></header>
    <div class="admin-shell">
      <aside class="admin-sidebar">
        <div class="admin-sidebar-caption">القائمة الرئيسية</div>
        <nav>
          <button class="${adminSection==="home"?"active":""}" data-action="admin-nav" data-section="home"><span>⌂</span> الصفحة الرئيسية</button>
          <button class="${adminSection==="groups"?"active":""}" data-action="admin-nav" data-section="groups"><span>👥</span> المجموعات</button>
          <button class="${adminSection==="results"?"active":""}" data-action="admin-nav" data-section="results"><span>📊</span> النتائج</button>
          <button class="${adminSection==="content"?"active":""}" data-action="admin-nav" data-section="content"><span>📚</span> الدروس والاختبارات</button>
          <button class="${adminSection==="pages"?"active":""}" data-action="admin-nav" data-section="pages"><span>🧩</span> محرر صفحات HTML</button>
        </nav>
        <div class="admin-sidebar-foot"><small>القسم الحالي</small><strong>${adminTitle}</strong></div>
      </aside>
      <main class="admin-content">${adminMainContent}</main>
    </div>
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
  const options=[`<option value="all" ${selected==="all"?"selected":""}>Alle</option>`,...lessons.map((lesson,index)=>
    `<option value="${index+1}" ${selected===String(index+1)?"selected":""}>L${index+1} · ${escapeHtml(lesson.name)}</option>`
  )].join("");
  return `<section class="student-progress-filter-card" aria-label="Fortschritt nach Lektionen filtern">
    <div class="student-progress-filter-copy">
      <span class="student-progress-filter-icon">☷</span>
      <span><small>Filter</small><strong>Lektionen</strong></span>
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
    {icon:"▥",tone:"blue",label:"تقدم الدروس",target:"resultsLessonProgress"},
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
  // Keep the metrics and shortcut grid visible as the main Progress dashboard.
  // Detailed analytics are opened one at a time in the full-screen tool view.
  const mainProgressDashboard=`
    <section class="progress-metrics-grid" id="resultsStats">
      <article class="progress-metric-card"><span>🔥</span><strong>${totalTests}</strong><small>اختبارات محفوظة</small></article>
      <article class="progress-metric-card"><span>🎯</span><strong>${average}</strong><small>متوسط النتائج</small></article>
      <article class="progress-metric-card"><span>📚</span><strong>${completedLessons}/${selectedLesson==="all"?lessons.length:1}</strong><small>دروس تم تقييمها</small></article>
      <article class="progress-metric-card"><span>⏱</span><strong>${escapeHtml(totalTime)}</strong><small>وقت التعلم</small></article>
    </section>
    <section class="progress-shortcuts-card">
      <div class="progress-shortcuts-head"><div><small>مساحتك التعليمية</small><h2>أدوات النتائج</h2></div><span class="progress-shortcuts-count">${weakCount} نقطة للمراجعة</span></div>
      <div class="progress-shortcuts-grid">${shortcutMarkup}</div>
    </section>`;
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
    resultsLessonProgress:lessonProgressMarkup
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
    resultsLessonProgress:"تقدم الدروس"
  };
  const activeToolMarkup=resultToolViews[studentResultsActiveTool]||"";
  const activeToolTitle=resultToolTitles[studentResultsActiveTool]||"";
  const fullscreenTool=activeToolMarkup?`
    <section class="student-results-tool-overlay" role="dialog" aria-modal="true" aria-label="${escapeHtml(activeToolTitle)}">
      <header class="student-results-tool-header">
        <button type="button" class="student-results-tool-back" data-action="student-results-tool-back"><span aria-hidden="true">←</span> رجوع</button>
        <div class="student-results-tool-heading"><small>أدوات النتائج</small><h1>${escapeHtml(activeToolTitle)}</h1></div>
      </header>
      <main class="student-results-tool-body">
        ${studentProgressLessonFilterMarkup(selectedLesson)}
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
    ${mainProgressDashboard}
    ${courseResultsMarkup}`;
  app.innerHTML=`<div class="student-results-promo">${studentLayout(content,"progress")}${fullscreenTool}</div>`;
}
function logout(){
  demoMode = false;
  stopAdminResultsRealtimeSync();
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
  const payload={exportedAt:new Date().toISOString(),users:readUsers(),results:readAllResults(),groups:cloudGroups,activity:cloudActivity,contentMeta:adminContentMeta};
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
  const forms = verbConjugations[item[0]] || [];
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
function getVerbExamples(item){
  return verbExamples[item[0]] || Array(6).fill(item[2]);
}
function renderVerbModal(){
  if(activeVerbCard===null || currentCategory!=="Verben" || learningTab!=="Bilder") return "";
  const it = items()[activeVerbCard];
  if(!it) return "";
  const forms = verbConjugations[it[0]] || [];
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
  const all = items();
  const tabNames = currentCategory==="Verben" ? ["Bilder","Texte","Hören","Konjugation"] : ["Bilder","Texte","Hören"];
  const tabIcons = {"Bilder":"🖼️","Texte":"📄","Hören":"🔊","Konjugation":"🔤"};
  const tabs = tabNames.map(tab => `<button class="tab-btn ${learningTab===tab?"active":""}" data-action="tab" data-tab="${tab}">${tabIcons[tab]} &nbsp; ${tab}</button>`).join("");
  let body = "";
  if(learningTab==="Konjugation" && currentCategory==="Verben"){
    const cards = all.map((it)=>{
      const forms = verbConjugations[it[0]] || [];
      const rows = pronouns.map((person,i)=>`<tr><td><strong>${person[0]}</strong><span class="person-translation">${person[1]}</span></td><td>${escapeHtml(forms[i] || "—")}</td></tr>`).join("");
      return `<article class="verb-conjugation-card">
        <div class="verb-card-head">
          <div class="verb-card-icon">${it[3]}</div>
          <div class="verb-card-title"><h3>${escapeHtml(it[0])}</h3><p>${escapeHtml(it[1])}</p></div>
          <span class="verb-level-tag">Präsens</span>
        </div>
        <table class="conjugation-table"><thead><tr><th>Person</th><th>Verbform</th></tr></thead><tbody>${rows}</tbody></table>
        <div class="verb-example"><div class="example-label">Beispiel</div><p>${escapeHtml(it[2])}</p></div>
      </article>`;
    }).join("");
    body = `<div class="verb-conjugation-intro"><div><strong>Verbkonjugation im Präsens</strong><p>Alle sechs Personen, die richtige Verbform und ein Beispielsatz.</p></div><span style="font-size:25px">📘</span></div>
      <div class="verb-conjugation-grid">${cards}</div>
      <div class="verb-conjugation-note"><strong>Merke dir:</strong> Bei <em>du</em> und <em>er/sie/es</em> ändert sich bei manchen Verben der Stamm, zum Beispiel <strong>sprechen → du sprichst</strong>, <strong>lesen → er liest</strong> und <strong>fahren → du fährst</strong>. Bei trennbaren Verben wie <strong>abbiegen</strong> steht <em>ab</em> im Satz meistens am Ende: <strong>Ich biege hier links ab.</strong></div>`;
  }else if(learningTab==="Bilder"){
    body = `<div class="word-grid">${all.map((it,i)=>`<article class="word-card ${currentCategory==="Verben"?"verb-word-card":""}">
      ${currentCategory==="Verben" ? `<button class="verb-word-trigger" data-action="verb-card" data-verb-index="${i}" aria-expanded="${activeVerbCard===i}">
        ${renderWordArt(it)}<h3>${escapeHtml(it[0])}</h3><p class="arabic">${escapeHtml(it[1])}</p>
      </button>` : `${renderWordArt(it)}<h3>${escapeHtml(it[0])}</h3><p class="arabic">${escapeHtml(it[1])}</p>`}
      <div class="example"><strong>Beispiel</strong>${escapeHtml(it[2])}</div>
    </article>`).join("")}</div>${renderVerbModal()}`;
  }else if(learningTab==="Texte"){
    body = `<div class="text-list">${all.map((it,i)=>`<article class="text-card">
      <div class="text-number">Beispiel ${String(i+1).padStart(2,"0")}</div><h3>${escapeHtml(it[2])}</h3><p><strong>${escapeHtml(it[0])}</strong> — ${escapeHtml(it[1])}</p>
      <div style="margin-top:15px"><button class="listen-btn" data-action="speak" data-text="${escapeHtml(it[2])}">🔊 Satz anhören</button></div>
    </article>`).join("")}</div>`;
  }else{
    body = `<div class="listen-list">${all.map((it,i)=>`<article class="listen-card">
      <div class="sound-icon">🔊</div><div class="listen-content"><h3>${escapeHtml(it[2])}</h3><p>${escapeHtml(it[0])} · ${escapeHtml(it[1])}</p></div>
      <button class="listen-btn" data-action="speak" data-text="${escapeHtml(it[2])}">Anhören</button>
    </article>`).join("")}</div><div class="section-card"><strong>🎧 Tipp zum Hörtraining</strong><p class="subtitle" style="margin-top:8px">Höre den Satz zweimal. Beim zweiten Mal sprich langsam mit und achte auf die Aussprache.</p></div>`;
  }
  const content = `<div class="pill">${categoryMeta[currentCategory].icon} ${currentCategory} <span>·</span> Lektion ${lessonNumber()}</div><div class="tabs">${tabs}</div>${body}`;
  app.innerHTML = pageShell("وضع التعلّم",currentCategory,`شاهد الأمثلة واستمع إلى النطق الألماني.`,content);
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
    stageByExercise:questionStages,stageLabels:questionStageLabels,contentType:"test"
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
  if(!currentUser){page="login";return renderLogin();}
  if(currentUser.role==="admin" && page==="admin-managed-html") return renderAdminManagedHtmlPage();
  if(currentUser.role==="admin"){page="admin";return renderAdmin();}
  if(page==="login"||page==="admin") page="home";
  if(page==="student-results") return renderStudentResults();
  if(page==="custom-content") return renderCustomContentPage();
  if(page==="learn-hub") return renderLearnHub();
  if(page==="talk") return renderTalk();
  if(page==="sessions") return renderSessions();
  if(page==="community") return renderCommunity();
  if(page==="competition") return renderCompetition();
  if(page==="settings") return renderSettings();
  if(page==="home") return renderHome();
  if(page==="levels") return renderLevels();
  if(page==="level-home") return renderLevelHome();
  if(page==="a2-level-home") return renderA2LevelHome();
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
  if(page==="student-results") page="home";
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
    if(document.getElementById("courseResumeDialog")){pendingCourseLaunch=null;closeCourseResumeDialog();}
    closePodcastWordPopup();
    closeAdminStudentDetails();
    if(page==="student-results" && studentResultsActiveTool){studentResultsActiveTool="";render();}
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
  if(target.id==="adminResultsGroupFilter"){adminResultsGroupId=target.value||"all";adminResultsStudentId="all";render();return;}
  if(target.id==="adminResultsStudentFilter"){adminResultsStudentId=target.value||"all";render();return;}
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
  if(target.matches("[data-competition-text-question]")){
    const index=Number(target.dataset.competitionTextQuestion);
    const question=competitionRoomData?.questions?.[index];
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
  else if(action==="competition-mode"){
    competitionMode=el.dataset.mode==="group"?"group":"duel";renderCompetition();return;
  }
  else if(action==="competition-lesson"){
    const idx=Number(el.dataset.lesson);
    if(!Number.isInteger(idx)||idx<0||idx>10||!(idx===10?getStudentLessonAccess(6):getStudentLessonAccess(idx)))return;
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
    competitionSelectedTestTypes[idx]=(competitionTestCatalog[idx]?.types||[]).map((_,i)=>i);
    renderCompetition();return;
  }
  else if(action==="competition-type"){
    const idx=Number(el.dataset.lesson),typeIndex=Number(el.dataset.type);
    const types=competitionTestCatalog[idx]?.types||[];
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
    const question=competitionRoomData?.questions?.[index];
    if(!question||!Number.isInteger(option)||option<0||option>3||option>=(question.options||[]).length)return;
    competitionExerciseSelections[index]=option;
    renderCompetitionRoom();
    competitionUpdateExerciseSubmitButton();
    return;
  }
  else if(action==="competition-exercise-tile"){
    const index=Number(el.dataset.questionIndex),tileIndex=Number(el.dataset.tileIndex);
    const question=competitionRoomData?.questions?.[index];
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
    renderCompetitionRoom();
    competitionUpdateExerciseSubmitButton();
    return;
  }
  else if(action==="competition-next"){
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
  else if(action==="demo-login"){
    startDemoSession();
    return;
  }
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
  else if(action==="level-path"){
    if(el.dataset.level==="A1"){selectedLevel="A1.1";page="level-home";render();}
    else if(el.dataset.level==="A2"){currentA2LessonNo=1;page="a2-level-home";render();}
    else showToast(`محتوى ${el.dataset.level} قيد الإعداد، والمتاح حالياً هو A1 وA2.`);
    return;
  }
  else if(action==="a2-lesson"){
    const lessonNo=Number(el.dataset.lessonNo);
    if(a2CourseLessons.some(item=>item.number===lessonNo)){
      currentA2LessonNo=lessonNo;page="a2-lesson-html";render();
    }
    return;
  }
  else if(action==="a2-stage-open"){
    const stage=el.dataset.stage||"explanation";
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
  if(action==="admin-nav"){adminSection=el.dataset.section||"home";render();return;}
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
  if(action==="admin-open-group"){adminSelectedGroupId=el.dataset.id||null;adminSection="groups";render();return;}
  if(action==="login-submit"){loginFromForm();return;}
  else if(action==="logout"){logout();return;}
  else if(action==="student-results"){page="student-results";studentResultsExpanded=false;studentResultsActiveTool="";render();return;}
  else if(action==="student-results-toggle"){studentResultsExpanded=!studentResultsExpanded;render();if(studentResultsExpanded){const panel=document.getElementById("studentResultsDetails");if(panel)panel.scrollIntoView({behavior:"smooth",block:"start"});}return;}
  else if(action==="student-results-jump"){
    const targetId=el.dataset.target||"";
    if(targetId){studentResultsActiveTool=targetId;render();}
    return;
  }
  else if(action==="student-results-tool-back"){
    studentResultsActiveTool="";
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
      firebaseDb.ref(`${DEUTSCH_A1_PATH}/results/${id}`).remove()
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
  else if(action==="admin-save-group"){saveGroupFromForm();return;}
  else if(action==="admin-edit-group"){editingGroupId=el.dataset.id;adminSection="groups";render();return;}
  else if(action==="admin-cancel-group-edit"){editingGroupId=null;render();return;}
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
      if([5,6,7,8].includes(currentLesson)){openLessonSectionPage("course");return;}
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
      currentCategory="Nomen";categoryReturnPage="lesson-hub";activeVerbCard=null;page="category";render();return;
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
  else if(action==="category-test"){currentCategory=el.dataset.category;testIndex=0;testScore=0;testChoice=null;testAnswered=false;testQuestionScores={};testQuestionLabels={};testReturnPage="test-categories";page="test";}
  else if(action==="open-standalone-lesson-test"){page="standalone-lesson-test";}
  else if(action==="close-standalone-lesson-test"){document.documentElement.classList.remove("challenge-fullscreen-open");document.body.classList.remove("challenge-fullscreen-open");page=testCategoriesReturnPage||"tests";render();return;}
  else if(action==="close-lesson-section-page"){saveActiveCourseBeforeExit();document.documentElement.classList.remove("challenge-fullscreen-open");document.body.classList.remove("challenge-fullscreen-open");page=lessonSectionReturnPage||"lesson-hub";render();return;}
  else if(action==="category"){currentCategory=el.dataset.category;categoryReturnPage="lesson";activeVerbCard=null;page="category";}
  else if(action==="learn"){learningTab="Bilder";activeVerbCard=null;page="learning";}
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
  else if(action==="tab"){learningTab=el.dataset.tab;}
  else if(action==="close-verb-modal"){
    if(el.classList.contains("verb-modal-backdrop") && event.target.closest(".verb-modal")) return;
    activeVerbCard=null;
    render();
    return;
  }
  else if(action==="verb-card"){
    if(currentCategory!=="Verben")return;
    const idx=Number(el.dataset.verbIndex);
    activeVerbCard = activeVerbCard===idx ? null : idx;
  }
  else if(action==="speak-verb"){
    const idx=Number(el.dataset.verbIndex);
    if(items()[idx]) speakVerbEntry(items()[idx]);
    return;
  }
  else if(action==="speak-form"){
    const idx=Number(el.dataset.verbIndex), formIndex=Number(el.dataset.formIndex);
    if(items()[idx]) speakOneVerbForm(items()[idx],formIndex);
    return;
  }
  else if(action==="speak"){speak(el.dataset.text||"");return;}
  else if(action==="start-test"){testIndex=0;testScore=0;testChoice=null;testAnswered=false;testQuestionScores={};testQuestionLabels={};testReturnPage="category";page="test";}
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
  else if(action==="retry-test"){testIndex=0;testScore=0;testChoice=null;testAnswered=false;testQuestionScores={};testQuestionLabels={};page="test";}
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
  if(event.key===UI_DISPLAY_PREFERENCES_KEY)applyUiDisplayPreferences();
});
window.addEventListener("resize",refreshUiTextBaselines);

function startDemoSession(){
  demoMode=true;
  currentStudentProfile={name:"Sara",email:"sara@example.com",active:true,lessonAccess:{}};
  currentStudentGroup=null;
  currentUser={id:"demo-student",role:"student",name:"Sara",email:"sara@example.com"};
  selectedLevel="A1.1";
  currentLesson=0;
  currentA2LessonNo=2;
  tutorLessonIndex=0;
  tutorTool="conversation";
  page="home";
  tutorScenario="cafe";
  tutorMessages=[];
  communityRoom=null;
  applyTabFromHash();
  render();
}

async function bootDeutschA1(){
  // Opening index.html directly from the extracted folder is a local preview.
  // It must not depend on Firebase Authentication or an internet connection.
  const localPreview = window.location.protocol === "file:" ||
    new URLSearchParams(window.location.search).get("preview") === "1";
  if(localPreview){
    startDemoSession();
    return;
  }
  if (!firebaseReady) { renderLogin(); setLoginMessage("Firebase konnte nicht initialisiert werden."); return; }
  firebaseAuth.onAuthStateChanged(async authUser => {
    if (demoMode) return;
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
