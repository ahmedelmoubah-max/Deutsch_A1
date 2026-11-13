
const categoryMeta = {
  "Verben": {icon:"⚡", desc:"Wichtige Tätigkeitswörter"},
  "Nomen": {icon:"🧩", desc:"Wörter mit der richtigen Begleitung"},
  "Adjektive": {icon:"🎨", desc:"Eigenschaften und Beschreibungen"},
  "Präpositionen": {icon:"🧭", desc:"Wo? Wohin? Mit wem?"},
  "Grammatik": {icon:"📘", desc:"Regeln einfach verstehen"}
};
const standaloneLessonTests = {
  5: { title: "Meine Stadt, meine Wohnung", file: "pages/adjective-challenge.html", description: "17 interaktive Übungen · 5 Stufen", icon: "🏙️" },
  6: { title: "Wie, wo und wann?", file: "pages/lektion-7-test.html", description: "Interaktive Übungen A1", icon: "🗓️" },
  7: { title: "Unterwegs", file: "pages/lektion-8-test.html", description: "Interaktive Übungen", icon: "🚌" },
  8: { title: "Unter Freunden – Der Flohmarkt", file: "pages/lektion-9-test.html", description: "Interaktive Übungen", icon: "🛍️" }
};
const interactiveLessonPosters = {
  6: { title: "Wie, wo und wann?", file: "pages/wie-wo-und-wann-interaktiv.html", description: "Wetter, Jahreszeiten und Zeitangaben – interaktive Bildkarte", icon: "🌦️" },
  7: { title: "Unterwegs", file: "pages/unterwegs-interaktiv.html", description: "Verkehrsmittel und unterwegs sein – interaktive Bildkarte", icon: "🚌" },
  8: { title: "Unter Freunden – Der Flohmarkt", file: "pages/unter-freunden-flohmarkt-interaktiv.html", description: "Wörter rund um den Flohmarkt – interaktive Bildkarte", icon: "🛍️" }
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

const podcastLibrary = [{"id":"podcast-5-1","lesson":5,"title":"Meine Freizeit – Audio-Lesetraining","file":"pages/podcasts/podcast-5-1.html"},{"id":"podcast-5-2","lesson":5,"title":"Meine Freizeit – Audio-Lesetraining Teil 2","file":"pages/podcasts/podcast-5-2.html"},{"id":"podcast-6-1","lesson":6,"title":"Einkaufen, Stadt und Land – Audio-Lesetraining","file":"pages/podcasts/podcast-6-1.html"},{"id":"podcast-6-2","lesson":6,"title":"Meine Stadt und meine Wohnung – Audio-Lesetraining","file":"pages/podcasts/podcast-6-2.html"},{"id":"podcast-7-1","lesson":7,"title":"Wetter, Stadt und Arbeit – Audio-Lesetraining","file":"pages/podcasts/podcast-7-1.html"},{"id":"podcast-7-2","lesson":7,"title":"Herbst, Winter und Wochenende – Audio-Lesetraining","file":"pages/podcasts/podcast-7-2.html"},{"id":"podcast-8-1","lesson":8,"title":"Verkehrsmittel und eine Reise nach Hamburg – Audio-Lesetraining","file":"pages/podcasts/podcast-8-1.html"},{"id":"podcast-8-2","lesson":8,"title":"In Hamburg und Verkehrsmittel – Audio-Lesetraining","file":"pages/podcasts/podcast-8-2.html"},{"id":"podcast-9-1","lesson":9,"title":"Ein Wochenende mit Freunden – Audio-Lesetraining","file":"pages/podcasts/podcast-9-1.html"},{"id":"podcast-9-2","lesson":9,"title":"Emma auf dem Flohmarkt – Audio-Lesetraining","file":"pages/podcasts/podcast-9-2.html"},{"id":"podcast-10-1","lesson":10,"title":"Sara entdeckt die Welt – Audio-Lesetraining","file":"pages/podcasts/podcast-10-1.html"},{"id":"podcast-10-2","lesson":10,"title":"Winterreisen und Urlaubserlebnisse – Audio-Lesetraining","file":"pages/podcasts/podcast-10-2.html"}];


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
let adminSelectedGroupId = null;
let adminResultsGroupId = "all";
let adminResultsStudentId = "all";
let adminResultsLessonFilter = "all";
let adminResultsTypeFilter = "all";
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
    source:"embedded-exercise",
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
  const listeningDialogue=(pageKey==="dialogue"||pageKey==="intro-dialogue") && (dialogueReturnPage==="lesson-podcasts"||dialogueReturnPage==="podcasts");
  const learningPages=[...coursePages,...testPages,...podcastPages];
  const contentType=(podcastPages.includes(pageKey)||listeningDialogue)?"podcast":testPages.includes(pageKey)?"test":coursePages.includes(pageKey)?"kurs":null;
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
let currentPodcastId = "";
let currentCategory = "Verben";
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
let podcastReturnPage = "podcasts";
let demoMode = false;
let tutorScenario = "cafe";
let tutorLessonIndex = 0;
let tutorTool = "conversation";
let tutorToolOpen = false;
let tutorMessages = [];
let communityRoom = null;

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
    tutorLessonIndex=getHomeLessonIndex();currentLesson=tutorLessonIndex;tutorTool="conversation";tutorToolOpen=false;tutorMessages=[];page="talk";
  }else if(tab==="sessions") page="sessions";
  else if(tab==="progress") page="student-results";
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
    lessons:"تعلّم", "lesson-hub":"تعلّم", "lesson-podcasts":"تعلّم",
    podcasts:"تعلّم", "podcast-player":"تعلّم", tests:"تعلّم",
    "test-categories":"تعلّم", "standalone-lesson-test":"تعلّم",
    lesson:"تعلّم", "interactive-lesson-poster":"تعلّم", dialogue:"تعلّم",
    "intro-dialogue":"تعلّم", numbers:"تعلّم", essen:"تعلّم",
    freizeit:"تعلّم", stadt:"تعلّم", "family-tree":"تعلّم",
    category:"تعلّم", learning:"تعلّم", test:"تعلّم",
    "test-result":"تعلّم", talk:"تكلّم", sessions:"الجلسات",
    community:"المجتمع", "student-results":"تقدّمي", settings:"الإعدادات"
  };
  const title = pageTitles[page] || "Deutsch";
  const level = selectedLevel || "A1.1";
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
  if(["learn-hub","levels","level-home","lessons","lesson-hub","lesson-podcasts","podcasts","podcast-player","tests","test-categories","standalone-lesson-test","lesson","interactive-lesson-poster","dialogue","intro-dialogue","numbers","essen","freizeit","stadt","family-tree","category","learning","test","test-result"].includes(page)) return "learn";
  return "home";
}

function studentBottomNav(active){
  const icons = {
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7"/><path d="M5.5 9.5V21h13V9.5"/><path d="M9 21v-7h6v7"/></svg>',
    learn: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7v14"/><path d="M3.5 5.5A2.5 2.5 0 0 1 6 3h6v18H6a2.5 2.5 0 0 0-2.5 2.5z"/><path d="M20.5 5.5A2.5 2.5 0 0 0 18 3h-6v18h6a2.5 2.5 0 0 1 2.5 2.5z"/></svg>',
    talk: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="2.5" width="6" height="12" rx="3"/><path d="M5 11.5a7 7 0 0 0 14 0"/><path d="M12 18.5V22M8.5 22h7"/></svg>',
    sessions: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V21"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-1.5a4 4 0 0 0-3-3.87M16 3.2a4 4 0 0 1 0 7.6"/></svg>',
    progress: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V11M10 20V4M16 20v-7M22 20H2"/></svg>',
    community: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a7.5 7.5 0 0 1-7.5 7.5H7l-4 2v-5.5A7.5 7.5 0 1 1 21 11.5Z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/></svg>'
  };
  const tabs = [
    ["home","اليوم"],
    ["learn","تعلّم"],
    ["talk","تكلّم"],
    ["sessions","الجلسات"],
    ["progress","تقدّمي"],
    ["community","المجتمع"]
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
  return studentLayout(`<section class="student-page-heading">
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
    {id:"A1",emoji:"🌱",title:"مبتدئ",desc:"الحروف، التعارف، الجمل اليومية",active:true},
    {id:"A2",emoji:"🌿",title:"مبتدئ متقدم",desc:"التواصل في مواقف الحياة اليومية"},
    {id:"B1",emoji:"🌳",title:"متوسط",desc:"التعبير عن الرأي والتجارب"},
    {id:"B2",emoji:"🏔️",title:"فوق المتوسط",desc:"النقاش وفهم النصوص المعقدة"},
    {id:"C1",emoji:"🚀",title:"متقدم",desc:"اللغة الأكاديمية والمهنية"},
    {id:"C2",emoji:"👑",title:"إتقان",desc:"فهم وتعبير بمستوى قريب من الناطقين"}
  ];
  const levelCards = levels.map(level=>`
    <button type="button" class="path-level-card ${level.active?"is-current":"is-locked"}" data-action="level-path" data-level="${level.id}">
      <span class="path-level-emoji">${level.emoji}</span><strong>${level.id}</strong><span>${level.title}</span><small>${level.desc}</small>
      <b>${level.active?"ابدأ المستوى ←":"🔒 قريباً"}</b>
    </button>`).join("");
  const content = `
    <section class="learning-current-card">
      <div><span class="section-overline">مسارك الحالي</span><h2>مستوى A1 – البداية الصحيحة</h2><p>10 دروس موجودة في المشروع الحالي، مقسّمة إلى A1.1 وA1.2.</p></div>
      <button type="button" class="primary-soft-btn" data-action="student-open-a1">فتح دروس A1 ←</button>
    </section>
    <section class="dashboard-section"><div class="dashboard-section-head"><div><span class="section-overline">من A1 إلى C2</span><h2>مراحل التعلّم</h2></div></div><div class="path-level-grid">${levelCards}</div></section>
    <section class="dashboard-section"><div class="dashboard-section-head"><div><span class="section-overline">تعلّم بالطريقة اللي تناسبك</span><h2>وحدات التعلّم</h2></div></div>
      <div class="learning-tools-grid">
        <button class="learning-tool-card" data-action="student-open-a1"><span class="tool-icon green">▦</span><strong>خططي ودروسي</strong><small>الدروس والوحدات</small></button>
        <button class="learning-tool-card" data-action="student-open-tests"><span class="tool-icon orange">🏆</span><strong>الامتحانات</strong><small>اختبر مستواك</small></button>
        <button class="learning-tool-card" data-action="student-open-podcasts"><span class="tool-icon blue">🎧</span><strong>استماع وقراءة</strong><small>حوارات وبودكاست</small></button>
        <button class="learning-tool-card" data-action="student-open-grammar"><span class="tool-icon purple">📐</span><strong>القواعد والأفعال</strong><small>شرح وأمثلة</small></button>
        <button class="learning-tool-card" data-action="student-open-vocab"><span class="tool-icon teal">Aa</span><strong>أساسيات الألمانية</strong><small>مفردات وتعبيرات</small></button>
        <button class="learning-tool-card" data-action="student-open-writing"><span class="tool-icon pink">✎</span><strong>الكتابة والإملاء</strong><small>تدريب كتابي</small></button>
      </div>
    </section>
    <p class="learning-scope-note">ملاحظة: المحتوى التعليمي المدمج حالياً هو A1. المستويات A2–C2 ظاهرة في خارطة الطريق، وتحتاج إضافة دروسها قبل فتحها.</p>
  `;
  app.innerHTML = pageShell("مسار التعلّم","من A1 إلى C2","مسار متدرّج خطوة بخطوة مع شرح بالعربية.",content);
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

  const content = `
    <section class="tutor-lesson-picker tutor-lesson-picker-standalone">
      <div class="tutor-section-heading"><strong>اختار الدرس</strong><small>المحادثة كتتبدّل حسب الدرس</small></div>
      <div class="tutor-lesson-strip">${lessonChoices}</div>
    </section>
    <section class="tutor-tools-section">
      <div class="tutor-section-heading"><strong>اختار طريقة التدريب</strong><small>15 تدريباً مرتبطاً بموضوع الدرس</small></div>
      <div class="tutor-tools-grid">${tools}</div>
    </section>
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
  renderTalk();
  const messagesNode = document.getElementById("tutorMessages");
  if(messagesNode) messagesNode.scrollTop = messagesNode.scrollHeight;
}
function startTutorVoice(){
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SpeechRecognition){showToast("الإملاء الصوتي غير مدعوم في هذا المتصفح. يمكنك الكتابة أو استعمال متصفح Chrome.");return;}
  const recognition = new SpeechRecognition();
  recognition.lang = "de-DE";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.onresult = event=>{
    const input = document.getElementById("tutorInput");
    if(input){input.value = event.results[0][0].transcript;sendTutorMessage();}
  };
  recognition.onerror = ()=>showToast("تعذّر التقاط الصوت. تأكد من صلاحية الميكروفون.");
  try{recognition.start();showToast("تحدث الآن بالألمانية…");}
  catch(error){showToast("تعذّر تشغيل الميكروفون. حاول مرة أخرى.");}
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

  const adminMainContent = adminSection==="groups" ? groupsMarkupPage : adminSection==="results" ? resultsMarkupPage : homeMarkup;
  const adminTitle = adminSection==="groups" ? "المجموعات" : adminSection==="results" ? "النتائج" : "الرئيسية";

  app.innerHTML=`<div class="admin-page admin-layout-page">
    <header class="admin-topbar"><div class="admin-brand"><span class="admin-brand-mark">A1</span><div><strong>Admin Dashboard</strong><small>Deutsch A1 · Centre Alpha</small></div></div><div class="admin-user"><span>👤 Administrator</span><button class="logout-btn" data-action="logout">Abmelden</button></div></header>
    <div class="admin-shell">
      <aside class="admin-sidebar">
        <div class="admin-sidebar-caption">القائمة الرئيسية</div>
        <nav>
          <button class="${adminSection==="home"?"active":""}" data-action="admin-nav" data-section="home"><span>⌂</span> الصفحة الرئيسية</button>
          <button class="${adminSection==="groups"?"active":""}" data-action="admin-nav" data-section="groups"><span>👥</span> المجموعات</button>
          <button class="${adminSection==="results"?"active":""}" data-action="admin-nav" data-section="results"><span>📊</span> النتائج</button>
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

function studentResultsLessonSummaryMarkup(byLesson){
  const visible=(byLesson||[]).filter(item=>item.average!==null);
  if(!visible.length){
    return `<section class="admin-panel" id="resultsReview">
      <div class="admin-section-head"><div><p class="admin-eyebrow">الدروس</p><h2>التقدم حسب الدروس</h2></div></div>
      <p class="admin-empty-note">من بعد ما تدير اختبارات أكثر، غادي تبان هنا نتائج كل درس.</p>
    </section>`;
  }
  return `<section class="admin-panel" id="resultsReview">
    <div class="admin-section-head"><div><p class="admin-eyebrow">الدروس</p><h2>التقدم حسب الدروس</h2></div></div>
    <div class="student-lesson-bars">${visible.map(item=>{
      const state=item.average>=80?"strong":item.average>=60?"good":"weak";
      return `<div class="student-lesson-bar-row">
        <div class="student-lesson-bar-head"><strong>L${item.index+1}</strong><span>${item.average}%</span></div>
        <div class="student-lesson-bar-track"><i class="${state}" style="width:${Math.max(6,item.average)}%"></i></div>
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
  const resultMap=readStudentResults(currentUser.id);
  const results=Object.values(resultMap||{})
    .filter(item=>item && typeof item==="object")
    .sort((a,b)=>String(b.updatedAt||b.createdAt||"").localeCompare(String(a.updatedAt||a.createdAt||"")));
  const testResults=results.filter(result=>adminResultType(result)==="test");
  const report=adminStudentAnalytics(currentUser,{lesson:"all",type:"test"});
  const averageValue=report && report.average!==null ? Number(report.average) : null;
  const average=averageValue===null ? "—" : `${averageValue}%`;
  const totalTests=testResults.length;
  const totalTime=formatDuration(Number(report && report.totalSeconds)||0);
  const lessonRows=report && report.byLesson ? report.byLesson : [];
  const completedLessons=lessonRows.filter(item=>item.average!==null).length;
  const completedExercises=lessonRows.reduce((sum,item)=>sum+(Number(item.completedExercises)||0),0);
  const totalExercises=lessonRows.reduce((sum,item)=>sum+(Number(item.totalExercises)||0),0);
  const progressPercent=totalExercises ? Math.max(0,Math.min(100,Math.round(completedExercises/totalExercises*100))) : 0;
  const remainingExercises=Math.max(0,totalExercises-completedExercises);
  const weakCount=(report && report.weakExercises ? report.weakExercises.length : 0);
  const levelLabel=String(selectedLevel||"A1.1").split(".")[0] || "A1";
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
    {icon:"♧",tone:"teal",label:"مع الآخرين",action:"student-nav",tab:"sessions"}
  ];
  const shortcutMarkup=shortcuts.map(item=>{
    const attrs=item.action=== "student-nav"
      ? `data-action="student-nav" data-tab="${item.tab}"`
      : `data-action="student-results-jump" data-target="${item.target}"`;
    return `<button type="button" class="progress-shortcut" ${attrs}>
      <span class="progress-shortcut-icon ${item.tone}">${item.icon}</span>
      <strong>${item.label}</strong>
    </button>`;
  }).join("");
  const content=`
    <section class="progress-course-card" id="resultsCourseProgress">
      <div class="progress-course-top">
        <div class="progress-level-badge">${escapeHtml(levelLabel)}</div>
        <div class="progress-course-copy"><small>مستواك الحالي</small><h2>المسار التعليمي</h2><span>${completedLessons} من ${lessons.length} دروس لها نتائج محفوظة</span></div>
        <div class="progress-course-count"><strong>${completedExercises}/${totalExercises||0}</strong><small>تمرين</small></div>
      </div>
      <div class="progress-course-track"><i style="width:${progressPercent}%"></i></div>
      <div class="progress-course-foot"><span>${totalExercises?`أنجزت ${progressPercent}% من التمارين المسجلة`:"ابدأ أول اختبار باش يظهر تقدمك هنا"}</span><strong>${totalExercises?`${remainingExercises} متبقي`:"جاهز للبداية"}</strong></div>
    </section>
    <section class="progress-metrics-grid" id="resultsStats">
      <article class="progress-metric-card"><span>🔥</span><strong>${totalTests}</strong><small>اختبارات محفوظة</small></article>
      <article class="progress-metric-card"><span>🎯</span><strong>${average}</strong><small>متوسط النتائج</small></article>
      <article class="progress-metric-card"><span>📚</span><strong>${completedLessons}/${lessons.length}</strong><small>دروس تم تقييمها</small></article>
      <article class="progress-metric-card"><span>⏱</span><strong>${escapeHtml(totalTime)}</strong><small>وقت التعلم</small></article>
    </section>
    <section class="progress-shortcuts-card">
      <div class="progress-shortcuts-head"><div><small>مساحتك التعليمية</small><h2>أدوات تقدّمك</h2></div><span class="progress-shortcuts-count">${weakCount} نقطة للمراجعة</span></div>
      <div class="progress-shortcuts-grid">${shortcutMarkup}</div>
    </section>
    <section class="student-results-two-col">
      ${studentResultsLessonSummaryMarkup(lessonRows)}
      <section class="admin-panel" id="resultsWeakPoints">
        <div class="admin-section-head"><div><p class="admin-eyebrow">تحليل الأداء</p><h2>نقاط تحتاج مراجعة</h2></div><span class="admin-count">${weakCount}</span></div>
        <div class="student-results-analysis-block">
          <h4>دروس تحتاج مراجعة</h4>
          ${weakLessonMarkup}
          <h4>تمارين ضعيفة</h4>
          ${weakExerciseMarkup}
        </div>
      </section>
    </section>
    ${studentResultsAchievementsMarkup(totalTests,averageValue,completedLessons,completedExercises)}
    ${studentResultsLineChartMarkup(testResults)}
    ${stageDetail}
    ${heatmap}
    ${studentResultsHistoryMarkup(testResults)}
    <section class="student-results-footer-cta"><button class="btn-primary" data-action="student-continue">تابع التعلّم <span class="arrow">←</span></button></section>`;
  app.innerHTML=`<div class="student-results-promo">${studentLayout(content,"progress")}</div>`;
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
  const payload={exportedAt:new Date().toISOString(),users:readUsers(),results:readAllResults(),groups:cloudGroups,activity:cloudActivity};
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="deutsch-a1-backup.json";a.click();URL.revokeObjectURL(url);
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
  </div>`;
  app.innerHTML = pageShell("مستواك","اختر مسارك","مستوى A1 مقسّم إلى A1.1 وA1.2 ويضم عشرة دروس.",content);
}
function levelLabel(){ return selectedLevel==="A1.1" ? "Grundlagen" : "Weiterlernen"; }
function renderLevelHome(){
  renderLessons();
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
function renderLessonHub(){
  const unlocked=getStudentLessonAccess(currentLesson);
  if(!unlocked){
    app.innerHTML=pageShell(`Lektion ${lessonNumber()}`,escapeHtml(lessonData().name),"هذا الدرس مقفل حالياً من طرف الإدارة.",`<div class="empty-state">اختار درساً متاحاً للمتابعة.</div>`);
    return;
  }
  const podcastCount=podcastLibrary.filter(item=>item.lesson===lessonNumber()).length;
  const podcastDescription=podcastCount
    ? `${podcastCount} Podcast${podcastCount>1?"s":""} ديال Lektion ${lessonNumber()} · Audio-Lesetraining`
    : "Höre den Dialog dieser Lektion mit deutscher Aussprache und Übersetzung.";
  const content=`
    <div class="lesson-hub-intro">
      <div class="pill">✦ ${selectedLevel} <span>·</span> Lektion ${lessonNumber()}</div>
      <h3>${escapeHtml(lessonData().name)}</h3>
      <p>اختار شنو بغيتي تدير فهاد الدرس: تعلم، سمع، ولا اختبر راسك.</p>
    </div>
    <div class="lesson-hub-grid">
      <button class="lesson-hub-card lesson-hub-course" data-action="open-course">
        <span class="lesson-hub-icon">📚</span><span class="lesson-hub-tag">LERNEN</span>
        <h3>Kurs</h3><p>Wörter, Grammatik, Erklärungen und Lernübungen dieser Lektion.</p>
        <span class="lesson-hub-link">Kurs öffnen <b>→</b></span>
      </button>
      <button class="lesson-hub-card lesson-hub-podcast" data-action="open-lesson-podcasts">
        <span class="lesson-hub-icon">🎧</span><span class="lesson-hub-tag">HÖREN</span>
        <h3>Podcast</h3><p>${escapeHtml(podcastDescription)}</p>
        <span class="lesson-hub-link">Podcast anhören <b>→</b></span>
      </button>
      <button class="lesson-hub-card lesson-hub-test" data-action="open-lesson-test">
        <span class="lesson-hub-icon">✓</span><span class="lesson-hub-tag">ÜBEN</span>
        <h3>Test</h3><p>Prüfe dein Wissen und übe die Inhalte aus Lektion ${lessonNumber()}.</p>
        <span class="lesson-hub-link">Test starten <b>→</b></span>
      </button>
      <button class="lesson-hub-card lesson-hub-talk" data-action="lesson-open-talk">
        <span class="lesson-hub-icon">🎙️</span><span class="lesson-hub-tag">SPRECHEN</span>
        <h3>محادثة الدرس</h3><p>تدرّب على حوار خاص بموضوع ${escapeHtml(lessonData().name)} مع تصحيح الجمل.</p>
        <span class="lesson-hub-link">ابدأ المحادثة <b>←</b></span>
      </button>
    </div>`;
  app.innerHTML=pageShell(`Lektion ${lessonNumber()}`,selectedLevel,`مساحة التعلّم · ${escapeHtml(lessonData().name)}`,content);
}
function renderLessonPodcasts(){
  const files=podcastLibrary.filter(item=>item.lesson===lessonNumber());
  const list=files.length ? files.map(item=>`<button class="podcast-file-card" data-action="podcast-file-open" data-podcast-id="${escapeHtml(item.id)}">
      <span class="podcast-file-icon">🎧</span><span class="podcast-file-copy"><strong>${escapeHtml(item.title)}</strong><small>Podcast · Lektion ${lessonNumber()} · Audio-Lesetraining</small></span><span class="podcast-file-arrow">▶</span>
    </button>`).join("") : `<button class="lesson-hub-card lesson-hub-podcast lesson-dialogue-fallback" data-action="lesson-podcast-dialog">
      <span class="lesson-hub-icon">💬</span><span class="lesson-hub-tag">DIALOG MIT AUDIO</span><h3>${escapeHtml(dialogues[currentLesson].title)}</h3>
      <p>Höre den Dialog Satz für Satz auf Deutsch und lies die arabische Übersetzung.</p><span class="lesson-hub-link">Dialog anhören <b>→</b></span>
    </button>`;
  const content=`<div class="pill">🎧 Podcast <span>·</span> Lektion ${lessonNumber()}</div><div class="podcast-file-list lesson-podcast-list">${list}</div>`;
  app.innerHTML=pageShell(`الدرس ${lessonNumber()}`,"الاستماع",escapeHtml(lessonData().name),content);
}
function renderPodcasts(){
  const list = levelLessons().map(idx => {
    const lessonNo = idx + 1;
    const files = podcastLibrary.filter(item => item.lesson === lessonNo);
    if(files.length){
      const unlocked=getStudentLessonAccess(idx);
      const entries = files.map(item => `<button class="podcast-file-card ${unlocked?"":"lesson-locked"}" data-action="podcast-file-open" data-podcast-id="${item.id}" ${unlocked?"":"disabled"}>
        <span class="podcast-file-icon">🎧</span>
        <span class="podcast-file-copy"><strong>${escapeHtml(item.title)}</strong><small>Audio-Lesetraining · Interaktiver Podcast</small></span>
        <span class="podcast-file-arrow">▶</span>
      </button>`).join("");
      return `<section class="podcast-lesson-group">
        <div class="podcast-lesson-head">
          <span class="lesson-number">${String(lessonNo).padStart(2,"0")}</span>
          <div><h3>Lektion ${lessonNo}</h3><p>${escapeHtml(lessons[idx].name)}</p></div>
        </div>
        <div class="podcast-file-list">${entries}</div>
      </section>`;
    }
    const unlocked=getStudentLessonAccess(idx);
    return `<button class="lesson-card ${unlocked?"":"lesson-locked"}" data-action="podcast-open" data-lesson="${idx}" ${unlocked?"":"disabled"}>
      <span class="lesson-number">${String(lessonNo).padStart(2,"0")}</span>
      <h3>Lektion ${lessonNo}</h3><p>${escapeHtml(dialogues[idx].title)}</p>
      <div class="level-menu-foot"><span>Podcast anhören</span><span>▶</span></div>
    </button>`;
  }).join("");
  const content = `<div class="pill">🎧 ${selectedLevel} <span>·</span> Podcast</div><div class="podcast-groups">${list}</div>`;
  app.innerHTML = pageShell("الاستماع",selectedLevel,"اختار حواراً واستمع إلى الجمل بالنطق الألماني الصحيح.",content);
}
function renderPodcastPlayer(){
  const item = podcastLibrary.find(podcast => podcast.id === currentPodcastId);
  if(!item){ page="podcasts"; render(); return; }
  const content = `<div class="pill">🎧 Podcast <span>·</span> Lektion ${item.lesson}</div>
    <div class="podcast-player-card">
      <iframe id="podcastPlayerFrame" title="${escapeHtml(item.title)}" allow="autoplay"></iframe>
    </div>
    <div class="podcast-player-actions"><button class="back-btn" data-action="back">← Zurück zur Podcast-Übersicht</button></div>`;
  app.innerHTML = pageShell(`استماع · الدرس ${item.lesson}`,escapeHtml(item.title),"استمع إلى النص وتابع القراءة الصوتية واستعمل أدوات التدريب.",content);
  const frame = document.getElementById("podcastPlayerFrame");
  if(frame){
    frame.addEventListener("load", function(){
      const updateHeight = () => {
        try {
          const doc = frame.contentDocument;
          if(!doc) return;
          const main = doc.querySelector("main") || doc.querySelector(".wrap") || doc.body;
          const contentHeight = Math.max(
            doc.documentElement ? doc.documentElement.scrollHeight : 0,
            doc.body ? doc.body.scrollHeight : 0,
            main ? Math.ceil(main.getBoundingClientRect().height + 35) : 0
          );
          frame.style.height = Math.max(850, contentHeight + 20) + "px";
        } catch(e) {}
      };
      updateHeight();
      window.setTimeout(updateHeight,250);
      window.setTimeout(updateHeight,900);
      try {
        frame.contentWindow.addEventListener("resize", updateHeight);
        if(frame.contentWindow.ResizeObserver){
          const observer = new frame.contentWindow.ResizeObserver(updateHeight);
          const doc = frame.contentDocument;
          if(doc && doc.documentElement) observer.observe(doc.documentElement);
          if(doc && doc.body) observer.observe(doc.body);
        }
      } catch(e) {}
    }, {once:true});
    frame.src = item.file;
  }
}
function renderTests(){
  const list = levelLessons().map(idx => {
    const standaloneTest = standaloneLessonTests[idx];
    const testTitle = standaloneTest ? standaloneTest.title : lessons[idx].name;
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
  if(standaloneLessonTests[currentLesson]){
    page = "standalone-lesson-test";
  }else{
    page = "test-categories";
  }
}
function renderStandaloneLessonTest(){
  const testPage = standaloneLessonTests[currentLesson];
  if(!testPage){ page = "test-categories"; return render(); }
  document.documentElement.classList.add("challenge-fullscreen-open");
  document.body.classList.add("challenge-fullscreen-open");
  app.innerHTML = `<div class="challenge-fullscreen-shell">
    <iframe id="standaloneLessonTestFrame" title="${escapeHtml(testPage.title)} – Test Lektion ${lessonNumber()}" loading="eager"></iframe>
  </div>`;
  const frame = document.getElementById("standaloneLessonTestFrame");
  if(frame) frame.src = testPage.file;
}

function renderTestCategories(){
  const standaloneTest = standaloneLessonTests[currentLesson];
  const cats = standaloneTest ? "" : Object.keys(categoryMeta).map(cat => `<button class="category-card" data-action="category-test" data-category="${cat}">
    <span class="category-icon">${categoryMeta[cat].icon}</span><h3>${cat}</h3><p>${(lessonData().data[cat]||[]).length} Fragen</p>
  </button>`).join("");
  const extraTest = standaloneTest ? `<button class="category-card" data-action="open-standalone-lesson-test">
    <span class="category-icon">${standaloneTest.icon}</span><h3>${escapeHtml(standaloneTest.title)}</h3><p>${escapeHtml(standaloneTest.description)}</p>
  </button>` : "";
  const intro = standaloneTest
    ? `Starte den vollständigen interaktiven Test zu ${escapeHtml(standaloneTest.title)}.`
    : "Wähle einen Bereich, den du testen möchtest.";
  const subtitle = standaloneTest ? escapeHtml(standaloneTest.title) : escapeHtml(lessonData().name);
  const content = `<div class="pill">✓ Teste <span>·</span> Lektion ${lessonNumber()}</div><div class="section-card" style="margin-top:18px"><p class="subtitle">${intro}</p><div class="category-grid">${cats}${extraTest}</div></div>`;
  app.innerHTML = pageShell(`الدرس ${lessonNumber()}`,"اختبر معلوماتك",subtitle,content);
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
    ${currentLesson===5 ? `<div class="stadt-feature">
      <div class="stadt-feature-icon">🏙️</div>
      <div class="stadt-feature-copy"><h3>Meine Stadt, meine Wohnung</h3><p>Entdecke Orte und Wörter rund um die Stadt und die Wohnung. Klicke auf das Bild, sieh die arabische Übersetzung und höre die deutsche Aussprache.</p></div>
      <button class="primary-btn" data-action="open-stadt">Interaktive Karte öffnen <span class="arrow">→</span></button>
    </div>` : ""}
    ${interactiveLessonPosters[currentLesson] ? `<div class="stadt-feature">
      <div class="stadt-feature-icon">${interactiveLessonPosters[currentLesson].icon}</div>
      <div class="stadt-feature-copy"><h3>${escapeHtml(interactiveLessonPosters[currentLesson].title)} – interaktive Lernkarte</h3><p>${escapeHtml(interactiveLessonPosters[currentLesson].description)}. Klicke auf die Bildbereiche, um die Wörter und arabischen Übersetzungen zu entdecken und die deutsche Aussprache zu hören.</p></div>
      <button class="primary-btn" data-action="open-interactive-poster">Interaktive Lernkarte öffnen <span class="arrow">→</span></button>
    </div>` : ""}
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
    frame.src=poster.file;
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
    frame.src = "pages/numbers.html";
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
    frame.src = "pages/essen.html";
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
    frame.src = "pages/meine-stadt.html";
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
    frame.src = "pages/freizeit.html";
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
    frame.src = "pages/family-tree.html";
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
    frame.src = "pages/intro-dialogue.html";
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
  if(testIndex>=all.length){page="test-result";render();return;}
  const question = all[testIndex];
  const options = all.map((it,idx)=>({text:it[1],idx}));
  const answerMarkup = options.map((opt,i)=>{
    let cls = "answer-option";
    if(testChoice===opt.idx) cls += " selected";
    if(testAnswered && opt.idx===testIndex) cls += " correct";
    else if(testAnswered && testChoice===opt.idx && testChoice!==testIndex) cls += " wrong";
    return `<button class="${cls}" data-action="choice" data-choice="${opt.idx}" ${testAnswered?"disabled":""}><span class="option-letter">${String.fromCharCode(65+i)}</span>${escapeHtml(opt.text)}</button>`;
  }).join("");
  const feedback = testAnswered ? `<div class="feedback ${testChoice===testIndex?"good":"bad"}">${testChoice===testIndex?"Richtig! Sehr gut.":"Noch nicht ganz. Die richtige Antwort ist: "+escapeHtml(question[1])}</div>` : "";
  const action = testAnswered
    ? `<button class="primary-btn" data-action="next-question">${testIndex===all.length-1?"Ergebnis ansehen":"Nächste Frage"} <span class="arrow">→</span></button>`
    : `<button class="primary-btn" data-action="check-answer" ${testChoice===null?"disabled":""} style="${testChoice===null?"opacity:.45;cursor:not-allowed":""}">Antwort prüfen</button>`;
  const content = `<div class="test-card">
    <div class="test-top"><span class="pill">${currentCategory}</span><span class="progress-label">Frage ${testIndex+1} von ${all.length}</span></div>
    <div class="progress-track"><div class="progress-fill" style="width:${((testIndex+1)/all.length)*100}%"></div></div>
    <h3 class="question">Was bedeutet „${escapeHtml(question[0])}“?</h3><p class="question-help">Wähle die passende Bedeutung auf Arabisch.</p>
    <div class="answer-list">${answerMarkup}</div>${feedback}<div class="test-actions">${action}</div>
  </div>`;
  app.innerHTML = pageShell("اختبر معلوماتك",currentCategory,`الدرس ${lessonNumber()} · أجب عن الأسئلة وتحقق من نتيجتك.`,content);
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
  const emoji = percent===100?"🏆":percent>=60?"🌟":"💪";
  const message = percent===100?"Perfekt! Du hast alle Fragen richtig beantwortet.":percent>=60?"Gut gemacht! Wiederhole die Wörter, die noch schwierig waren.":"Weiter üben! Schau dir den Lernbereich noch einmal an und versuche es erneut.";
  const content = `<div class="result"><div class="result-emoji">${emoji}</div><h3>Test abgeschlossen!</h3><p>${escapeHtml(lessonData().name)} · ${currentCategory}</p><div class="result-score">${testScore} / ${total}</div><p>${message}</p>
    <button class="primary-btn" data-action="retry-test">Noch einmal testen <span class="arrow">↻</span></button>
    <button class="back-btn" data-action="test-home" style="margin-left:8px">Zurück</button></div>`;
  app.innerHTML = pageShell("نتيجتك","أحسنت في التدريب!","كل خطوة تقرّبك أكثر من هدفك في تعلّم الألمانية.",content);
}
function render(){
  if(!currentUser){page="login";return renderLogin();}
  if(currentUser.role==="admin"){page="admin";return renderAdmin();}
  if(page==="login"||page==="admin") page="home";
  if(page==="student-results") return renderStudentResults();
  if(page==="learn-hub") return renderLearnHub();
  if(page==="talk") return renderTalk();
  if(page==="sessions") return renderSessions();
  if(page==="community") return renderCommunity();
  if(page==="settings") return renderSettings();
  if(page==="home") return renderHome();
  if(page==="levels") return renderLevels();
  if(page==="level-home") return renderLevelHome();
  if(page==="lessons") return renderLessons();
  if(page==="lesson-hub") return renderLessonHub();
  if(page==="lesson-podcasts") return renderLessonPodcasts();
  if(page==="podcasts") return renderPodcasts();
  if(page==="podcast-player") return renderPodcastPlayer();
  if(page==="tests") return renderTests();
  if(page==="test-categories") return renderTestCategories();
  if(page==="standalone-lesson-test") return renderStandaloneLessonTest();
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
  if(page==="community" && communityRoom){communityRoom=null;return render();}
  if(page==="student-results") page="home";
  else if(page==="learn-hub"||page==="talk"||page==="sessions"||page==="community"||page==="settings") page="home";
  else if(page==="levels") page="home";
  else if(page==="level-home") page="levels";
  else if(page==="lessons"||page==="podcasts"||page==="tests") page="levels";
  else if(page==="lesson-hub") page="lessons";
  else if(page==="lesson-podcasts") page="lesson-hub";
  else if(page==="podcast-player") page=podcastReturnPage||"podcasts";
  else if(page==="test-categories") page=testCategoriesReturnPage||"tests";
  else if(page==="standalone-lesson-test"){document.documentElement.classList.remove("challenge-fullscreen-open");document.body.classList.remove("challenge-fullscreen-open");page=testCategoriesReturnPage||"tests";}
  else if(page==="lesson") page=courseReturnPage||"lessons";
  else if(page==="interactive-lesson-poster") page="lesson";
  else if(page==="dialogue") page=dialogueReturnPage;
  else if(page==="intro-dialogue") page=dialogueReturnPage;
  else if(page==="numbers") page="lesson";
  else if(page==="essen") page="lesson";
  else if(page==="freizeit") page="lesson";
  else if(page==="stadt") page="lesson";
  else if(page==="family-tree") page="lesson";
  else if(page==="category") page="lesson";
  else if(page==="learning") page="category";
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
    closePodcastWordPopup();
    closeAdminStudentDetails();
  }
});
document.addEventListener("click",function(event){
  if(event.target && event.target.id==="adminStudentDetailsModal") closeAdminStudentDetails();
});
window.addEventListener("message",function(event){
  const frame = document.getElementById("podcastPlayerFrame");
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
  if(target.id==="adminStudentFilter"){adminStudentFilter=target.value||"all";render();return;}
  if(target.id==="adminGroupFilter"){adminGroupFilter=target.value||"all";render();return;}
  if(target.id==="adminAnalyticsGroupFilter"){adminAnalyticsGroupFilter=target.value||"all";render();return;}
  if(target.id==="adminAnalyticsStudentFilter"){adminAnalyticsStudentFilter=target.value||"all";render();return;}
  if(target.id==="adminResultsGroupFilter"){adminResultsGroupId=target.value||"all";adminResultsStudentId="all";render();return;}
  if(target.id==="adminResultsStudentFilter"){adminResultsStudentId=target.value||"all";render();return;}
  if(target.id==="adminResultsLessonFilter"){adminResultsLessonFilter=target.value||"all";render();return;}
  if(target.id==="adminResultsTypeFilter"){adminResultsTypeFilter=target.value||"all";render();return;}
  if(target.matches('[data-action="admin-assign-group"]')){
    assignStudentGroup(target.dataset.id,target.value);return;
  }
});

window.addEventListener("message",function(event){
  const ownedTestFrame=document.getElementById("standaloneLessonTestFrame");
  const fromOwnedTestFrame=!!ownedTestFrame && event.source===ownedTestFrame.contentWindow;
  const sameOrigin=event.origin===window.location.origin ||
    (window.location.protocol==="file:" && event.origin==="null");
  if(!sameOrigin && !fromOwnedTestFrame) return;
  const data=event.data;
  if(!data || typeof data!=="object") return;
  if(data.type==="deutsch-a1-progress-report"){
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
});

document.addEventListener("input",function(event){
  const target=event.target;
  if(!target)return;
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
  if(action==="student-nav"){
    const tab=el.dataset.tab;
    if(tab==="home") page="home";
    else if(tab==="learn") page="learn-hub";
    else if(tab==="talk"){tutorLessonIndex=currentLesson;tutorTool="conversation";tutorToolOpen=false;tutorMessages=[];page="talk";}
    else if(tab==="sessions") page="sessions";
    else if(tab==="community"){page="community";communityRoom=null;}
    else if(tab==="progress") page="student-results";
    render();return;
  }
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
    demoMode=true;
    currentStudentProfile={name:"Sara",email:"sara@example.com",active:true,lessonAccess:{}};
    currentStudentGroup=null;
    currentUser={id:"demo-student",role:"student",name:"Sara",email:"sara@example.com"};
    selectedLevel="A1.1";currentLesson=0;tutorLessonIndex=0;tutorTool="conversation";page="home";tutorScenario="cafe";tutorMessages=[];communityRoom=null;
    applyTabFromHash();render();return;
  }
  else if(action==="home-start-lesson"){
    currentLesson=getHomeLessonIndex();rememberHomeLesson(currentLesson);selectedLevel=currentLesson<5?"A1.1":"A1.2";
    if(!getStudentLessonAccess(currentLesson)){showToast("Diese Lektion wurde vom Administrator gesperrt.");return;}
    markDailyLessonStarted();page="lesson-hub";render();return;
  }
  else if(action==="daily-open"){openDailyTask(el.dataset.task);return;}
  else if(action==="daily-complete"){setDailyTaskDone(el.dataset.task);renderHome();return;}
  else if(action==="level-path"){
    if(el.dataset.level==="A1"){selectedLevel="A1.1";page="levels";render();}
    else showToast(`محتوى ${el.dataset.level} قيد الإعداد، والمتاح حالياً هو A1.`);
    return;
  }
  else if(action==="student-open-a1"){selectedLevel="A1.1";page="levels";render();return;}
  else if(action==="student-open-tests"){selectedLevel="A1.1";page="tests";render();return;}
  else if(action==="student-open-podcasts"){page="podcasts";render();return;}
  else if(action==="student-open-grammar"){selectedLevel="A1.1";currentLesson=0;currentCategory="Grammatik";page="category";render();return;}
  else if(action==="student-open-vocab"){selectedLevel="A1.1";currentLesson=0;currentCategory="Nomen";page="category";render();return;}
  else if(action==="student-open-writing"){selectedLevel="A1.1";currentLesson=0;page="lesson";render();return;}
  else if(action==="lesson-open-talk"){
    tutorLessonIndex=currentLesson;tutorTool="conversation";tutorToolOpen=false;tutorMessages=[];page="talk";render();return;
  }
  else if(action==="tutor-lesson"){
    const idx=Number(el.dataset.lesson);
    if(Number.isInteger(idx) && idx>=0 && idx<lessons.length){
      tutorLessonIndex=idx;rememberHomeLesson(idx);selectedLevel=idx<5?"A1.1":"A1.2";markDailyLessonStarted();tutorTool="conversation";tutorToolOpen=false;tutorMessages=loadTutorMessages();renderTalk();
    }
    return;
  }
  else if(action==="tutor-tool"){
    tutorTool=el.dataset.tool||"conversation";
    tutorMessages=loadTutorMessages();
    tutorToolOpen=true;
    renderTalk();
    if(tutorTool==="repeat") speak(getTutorProfile().sample);
    return;
  }
  else if(action==="tutor-tools-back"){
    tutorToolOpen=false;
    renderTalk();
    return;
  }
  else if(action==="tutor-prompt"){
    const input=document.getElementById("tutorInput");
    if(input){input.value=el.dataset.prompt||"";input.focus();}
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
  if(action==="admin-open-group"){adminSelectedGroupId=el.dataset.id||null;adminSection="groups";render();return;}
  if(action==="login-submit"){loginFromForm();return;}
  else if(action==="logout"){logout();return;}
  else if(action==="student-results"){page="student-results";render();return;}
  else if(action==="student-results-jump"){
    const target=document.getElementById(el.dataset.target||"");
    if(target) target.scrollIntoView({behavior:"smooth",block:"start"});
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
  else if(action==="admin-open-vocabulary"){window.location.href="pages/admin-vocabulary.html";return;}
  else if(action==="start"){page="levels";}
  else if(action==="back"){back();return;}
  else if(action==="level"){selectedLevel=el.dataset.level;page="lessons";}
  else if(action==="open-lessons"){page="lessons";}
  else if(action==="open-podcasts"){page="podcasts";}
  else if(action==="open-tests"){page="tests";}
  else if(action==="lesson"){
    const idx=Number(el.dataset.lesson);if(!getStudentLessonAccess(idx)){showToast("Diese Lektion wurde vom Administrator gesperrt.");return;}
    rememberHomeLesson(idx);selectedLevel=idx<5?"A1.1":"A1.2";markDailyLessonStarted();activeVerbCard=null;page="lesson-hub";
  }
  else if(action==="open-course"){if(!getStudentLessonAccess(currentLesson)){showToast("Diese Lektion wurde vom Administrator gesperrt.");return;}courseReturnPage="lesson-hub";activeVerbCard=null;page="lesson";}
  else if(action==="open-lesson-podcasts"){if(!getStudentLessonAccess(currentLesson)){showToast("Diese Lektion wurde vom Administrator gesperrt.");return;}page="lesson-podcasts";}
  else if(action==="lesson-podcast-dialog"){dialogueReturnPage="lesson-podcasts";page=(currentLesson===0 ? "intro-dialogue" : "dialogue");}
  else if(action==="open-lesson-test"){if(!getStudentLessonAccess(currentLesson)){showToast("Diese Lektion wurde vom Administrator gesperrt.");return;}openLessonTestEntry("lesson-hub");}
  else if(action==="podcast-open"){const idx=Number(el.dataset.lesson);if(!getStudentLessonAccess(idx)){showToast("Diese Lektion wurde vom Administrator gesperrt.");return;}currentLesson=idx;dialogueReturnPage="podcasts";page="dialogue";}
  else if(action==="podcast-file-open"){currentPodcastId=el.dataset.podcastId || "";podcastReturnPage=page==="lesson-podcasts"?"lesson-podcasts":"podcasts";page="podcast-player";}
  else if(action==="test-lesson-open"){const idx=Number(el.dataset.lesson);if(!getStudentLessonAccess(idx)){showToast("Diese Lektion wurde vom Administrator gesperrt.");return;}currentLesson=idx;openLessonTestEntry("tests");}
  else if(action==="category-test"){currentCategory=el.dataset.category;testIndex=0;testScore=0;testChoice=null;testAnswered=false;testQuestionScores={};testQuestionLabels={};testReturnPage="test-categories";page="test";}
  else if(action==="open-standalone-lesson-test"){page="standalone-lesson-test";}
  else if(action==="close-standalone-lesson-test"){document.documentElement.classList.remove("challenge-fullscreen-open");document.body.classList.remove("challenge-fullscreen-open");page=testCategoriesReturnPage||"tests";render();return;}
  else if(action==="category"){currentCategory=el.dataset.category;activeVerbCard=null;page="category";}
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

async function bootDeutschA1(){
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
