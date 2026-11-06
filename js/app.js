
const categoryMeta = {
  "Verben": {icon:"⚡", desc:"Wichtige Tätigkeitswörter"},
  "Nomen": {icon:"🧩", desc:"Wörter mit der richtigen Begleitung"},
  "Adjektive": {icon:"🎨", desc:"Eigenschaften und Beschreibungen"},
  "Präpositionen": {icon:"🧭", desc:"Wo? Wohin? Mit wem?"},
  "Grammatik": {icon:"📘", desc:"Regeln einfach verstehen"}
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

let page = "home";
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
let dialogueReturnPage = "lesson";
let testReturnPage = "category";

const app = document.getElementById("app");
const toast = document.getElementById("toast");

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
  return `<header class="topbar">
    <div class="mini-brand"><div class="mini-mark">A1</div><div>Deutsch lernen<small>Dein Lernweg</small></div></div>
    <button class="back-btn" data-action="back">← Zurück</button>
  </header>`;
}
function pageShell(eyebrow,title,subtitle,content){
  return `<div class="shell">${header()}<section class="hero"><p class="eyebrow">${eyebrow}</p><h2 class="page-title">${title}</h2><p class="subtitle">${subtitle}</p></section>${content}<div class="footer">DEUTSCH A1 · Schritt für Schritt lernen</div></div>`;
}
function renderHome(){
  app.innerHTML = `<section class="home"><div class="home-inner">
    <div class="brand-logo"><img src="assets/images/brand-logo.jpg" alt="Centre Alpha – مركز ألفا للغات"></div>
    <div class="home-kicker">Willkommen auf deiner Lernplattform</div>
    <h1>Deutsch lernen<br><span>mit A1.</span></h1>
    <p>Lerne neue Wörter, entdecke einfache Texte und trainiere dein Hörverstehen – Lektion für Lektion.</p>
    <div class="home-a1">✦ &nbsp; NIVEAU A1 &nbsp; ✦</div><br>
    <button class="primary-btn" data-action="start">Jetzt starten <span class="arrow">→</span></button>
    <div class="home-note">Einfach · Interaktiv · Schritt für Schritt</div>
  </div></section>`;
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
  app.innerHTML = pageShell("Dein Sprachniveau","Wähle dein Niveau","Zwei Lernbereiche, zehn Lektionen. Wähle, womit du anfangen möchtest.",content);
}
function levelLabel(){ return selectedLevel==="A1.1" ? "Grundlagen" : "Weiterlernen"; }
function renderLevelHome(){
  const range = selectedLevel==="A1.1" ? "Lektionen 1–5" : "Lektionen 6–10";
  const content = `<div class="pill">✦ ${selectedLevel} <span>·</span> ${levelLabel()}</div>
    <div class="level-menu-grid">
      <button class="level-menu-card" data-action="open-lessons">
        <span class="level-menu-icon">📚</span><h3>Lektionen</h3>
        <p>Öffne die Lektionen und lerne Wörter, Grammatik und Beispielsätze.</p>
        <div class="level-menu-foot"><span>${range}</span><span>→</span></div>
      </button>
      <button class="level-menu-card" data-action="open-podcasts">
        <span class="level-menu-icon">🎧</span><h3>Podcast</h3>
        <p>Höre Dialoge aus deinem Niveau und übe die deutsche Aussprache.</p>
        <div class="level-menu-foot"><span>Dialoge anhören</span><span>→</span></div>
      </button>
      <button class="level-menu-card" data-action="open-tests">
        <span class="level-menu-icon">✓</span><h3>Teste</h3>
        <p>Prüfe dein Wissen mit kurzen Übungen zu den einzelnen Lektionen.</p>
        <div class="level-menu-foot"><span>Wissen überprüfen</span><span>→</span></div>
      </button>
    </div>`;
  app.innerHTML = pageShell("Dein Lernbereich",selectedLevel,"Wähle einen Bereich aus und lerne in deinem Tempo.",content);
}
function renderLessons(){
  const list = levelLessons().map(idx => `<button class="lesson-card" data-action="lesson" data-lesson="${idx}">
    <span class="lesson-number">${String(idx+1).padStart(2,"0")}</span>
    <h3>Lektion ${idx+1}</h3><p>${escapeHtml(lessons[idx].name)}</p>
  </button>`).join("");
  const content = `<div class="pill">✦ ${selectedLevel} <span>·</span> ${levelLabel()}</div><div class="lesson-grid">${list}</div>`;
  app.innerHTML = pageShell("Lektionen",selectedLevel,"Wähle eine Lektion aus und lerne in deinem Tempo.",content);
}
function renderPodcasts(){
  const list = levelLessons().map(idx => {
    const lessonNo = idx + 1;
    const files = podcastLibrary.filter(item => item.lesson === lessonNo);
    if(files.length){
      const entries = files.map(item => `<button class="podcast-file-card" data-action="podcast-file-open" data-podcast-id="${item.id}">
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
    return `<button class="lesson-card" data-action="podcast-open" data-lesson="${idx}">
      <span class="lesson-number">${String(lessonNo).padStart(2,"0")}</span>
      <h3>Lektion ${lessonNo}</h3><p>${escapeHtml(dialogues[idx].title)}</p>
      <div class="level-menu-foot"><span>Podcast anhören</span><span>▶</span></div>
    </button>`;
  }).join("");
  const content = `<div class="pill">🎧 ${selectedLevel} <span>·</span> Podcast</div><div class="podcast-groups">${list}</div>`;
  app.innerHTML = pageShell("Podcast",selectedLevel,"Wähle einen Dialog aus und höre die Sätze mit deutscher Aussprache.",content);
}
function renderPodcastPlayer(){
  const item = podcastLibrary.find(podcast => podcast.id === currentPodcastId);
  if(!item){ page="podcasts"; render(); return; }
  const content = `<div class="pill">🎧 Podcast <span>·</span> Lektion ${item.lesson}</div>
    <div class="podcast-player-card">
      <iframe id="podcastPlayerFrame" title="${escapeHtml(item.title)}" allow="autoplay"></iframe>
    </div>
    <div class="podcast-player-actions"><button class="back-btn" data-action="back">← Zurück zur Podcast-Übersicht</button></div>`;
  app.innerHTML = pageShell(`Podcast · Lektion ${item.lesson}`,escapeHtml(item.title),"Höre den Text, folge dem Audio-Lesetraining und nutze die interaktiven Funktionen.",content);
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
  const list = levelLessons().map(idx => `<button class="lesson-card" data-action="test-lesson-open" data-lesson="${idx}">
    <span class="lesson-number">${String(idx+1).padStart(2,"0")}</span>
    <h3>Lektion ${idx+1}</h3><p>${escapeHtml(lessons[idx].name)}</p>
    <div class="level-menu-foot"><span>Tests öffnen</span><span>→</span></div>
  </button>`).join("");
  const content = `<div class="pill">✓ ${selectedLevel} <span>·</span> Teste</div><div class="lesson-grid">${list}</div>`;
  app.innerHTML = pageShell("Teste",selectedLevel,"Wähle eine Lektion und danach einen Lernbereich für deinen Test.",content);
}


function renderAdjectiveChallenge(){
  // Open the existing 17-exercise / 5-stage activity as a full-viewport page.
  document.documentElement.classList.add("challenge-fullscreen-open");
  document.body.classList.add("challenge-fullscreen-open");
  app.innerHTML = `<div class="challenge-fullscreen-shell">
    <iframe id="adjectiveChallengeFrame" title="Meine Stadt, meine Wohnung – Test Lektion 6" loading="eager"></iframe>
    <button class="challenge-fullscreen-exit" type="button" data-action="close-adjective-challenge">← Zurück</button>
  </div>`;
  const frame = document.getElementById("adjectiveChallengeFrame");
  if(frame) frame.src = "pages/adjective-challenge.html";
}

function renderTestCategories(){
  // In Lektion 6 wird ausschließlich der eigenständige Stadt-/Wohnungstest angezeigt.
  const cats = currentLesson === 5 ? "" : Object.keys(categoryMeta).map(cat => `<button class="category-card" data-action="category-test" data-category="${cat}">
    <span class="category-icon">${categoryMeta[cat].icon}</span><h3>${cat}</h3><p>${(lessonData().data[cat]||[]).length} Fragen</p>
  </button>`).join("");
  const extraTest = currentLesson === 5 ? `<button class="category-card" data-action="open-adjective-challenge">
    <span class="category-icon">🏙️</span><h3>Meine Stadt, meine Wohnung</h3><p>17 interaktive Übungen · 5 Stufen</p>
  </button>` : "";
  const intro = currentLesson === 5 ? "Starte den interaktiven Test zu Meine Stadt und meine Wohnung." : "Wähle einen Bereich, den du testen möchtest.";
  const content = `<div class="pill">✓ Teste <span>·</span> Lektion ${lessonNumber()}</div><div class="section-card" style="margin-top:18px"><p class="subtitle">${intro}</p><div class="category-grid">${cats}${extraTest}</div></div>`;
  app.innerHTML = pageShell(`Lektion ${lessonNumber()}`,"Teste dein Wissen",escapeHtml(lessonData().name),content);
}
function renderLesson(){
  const cats = Object.keys(categoryMeta).map(cat => `<button class="category-card" data-action="category" data-category="${cat}">
    <span class="category-icon">${categoryMeta[cat].icon}</span><h3>${cat}</h3><p>${categoryMeta[cat].desc}</p>
  </button>`).join("");
  const dialogue = dialogues[currentLesson];
  const content = `<div class="pill">Lektion ${lessonNumber()} <span>·</span> ${escapeHtml(lessonData().name)}</div>
    <div class="dialogue-feature">
      <div class="dialogue-feature-icon">💬</div>
      <div class="dialogue-feature-copy"><h3>Dialog üben</h3><p>${escapeHtml(dialogue.intro)} Ein kompletter Dialog mit Beispielsätzen und Übersetzung.</p></div>
      <button class="primary-btn" data-action="open-dialogue">Dialog öffnen <span class="arrow">→</span></button>
    </div>
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
    <div class="section-card"><p class="subtitle">Oder wähle einen Lernbereich aus.</p><div class="category-grid">${cats}</div></div>`;
  app.innerHTML = pageShell(`Lektion ${lessonNumber()}`,escapeHtml(lessonData().name),"Lerne die Wörter, übe die Grammatik und sprich in Alltagssituationen.",content);
}


function renderNumbers(){
  const content = `<div class="pill">🔢 Zahlen <span>·</span> Lektion 1</div>
    <div class="numbers-embedded">
      <p style="margin:0 0 12px;color:#64718b;font-size:13px;line-height:1.6">Die interaktive Zahlen-Lernseite ist direkt hier eingebettet. Klicke auf eine Zahl oder ein Wort, um die deutsche Aussprache zu hören. Du kannst das Sprechtempo einstellen und die Aussprache wiederholen oder stoppen.</p>
      <iframe id="numbersStandaloneFrame" title="Die Zahlen – interaktiv mit deutscher Aussprache" style="display:block;width:100%;height:900px;border:0;border-radius:18px;background:#fff;box-shadow:0 12px 34px rgba(22,58,90,.12)" loading="eager"></iframe>
      <div style="margin-top:18px"><button class="back-btn" data-action="numbers-back">← Zurück zu Lektion 1</button></div>
    </div>`;
  app.innerHTML = pageShell("Lektion 1","Die Zahlen","Lerne deutsche Zahlen mit interaktiver Aussprache.",content);
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
  app.innerHTML = pageShell("Lektion 3","Essen und Trinken","Lerne Lebensmittel und Getränke mit interaktiver Aussprache.",content);
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
  app.innerHTML = pageShell("Lektion 6","Meine Stadt, meine Wohnung","Lerne Wörter und Sätze rund um die Stadt und die Wohnung.",content);
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
  app.innerHTML = pageShell("Lektion 5","Freizeit & Hobbys","Lerne Freizeitaktivitäten und Hobbys mit interaktiven Bildkarten und deutscher Aussprache.",content);
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
  app.innerHTML = pageShell("Familienstammbaum","Die Familie","Lerne Familienwörter mit deutscher Aussprache.",content);
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
  app.innerHTML = pageShell("Lektion 1","Sich vorstellen – Dialog","Übe Begrüßung und Vorstellung mit interaktiven Sprechblasen und deutscher Aussprache.",content);
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
  app.innerHTML = pageShell("Dialogtraining",escapeHtml(dialog.title),escapeHtml(dialog.intro),content);
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
  app.innerHTML = pageShell("Lernmodus",currentCategory,`Sieh dir die Beispiele an und übe die deutsche Aussprache.`,content);
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
  app.innerHTML = pageShell("Wissen testen",currentCategory,`Lektion ${lessonNumber()} · Beantworte die Fragen und prüfe dein Ergebnis.`,content);
}
function renderResult(){
  const total = items().length;
  const percent = Math.round(testScore/total*100);
  const emoji = percent===100?"🏆":percent>=60?"🌟":"💪";
  const message = percent===100?"Perfekt! Du hast alle Fragen richtig beantwortet.":percent>=60?"Gut gemacht! Wiederhole die Wörter, die noch schwierig waren.":"Weiter üben! Schau dir den Lernbereich noch einmal an und versuche es erneut.";
  const content = `<div class="result"><div class="result-emoji">${emoji}</div><h3>Test abgeschlossen!</h3><p>${escapeHtml(lessonData().name)} · ${currentCategory}</p><div class="result-score">${testScore} / ${total}</div><p>${message}</p>
    <button class="primary-btn" data-action="retry-test">Noch einmal testen <span class="arrow">↻</span></button>
    <button class="back-btn" data-action="test-home" style="margin-left:8px">Zurück</button></div>`;
  app.innerHTML = pageShell("Dein Ergebnis","Sehr gut geübt!","Jeder Schritt bringt dich deinem Deutschziel näher.",content);
}
function render(){
  if(page==="home") return renderHome();
  if(page==="levels") return renderLevels();
  if(page==="level-home") return renderLevelHome();
  if(page==="lessons") return renderLessons();
  if(page==="podcasts") return renderPodcasts();
  if(page==="podcast-player") return renderPodcastPlayer();
  if(page==="tests") return renderTests();
  if(page==="test-categories") return renderTestCategories();
  if(page==="adjective-challenge") return renderAdjectiveChallenge();
  if(page==="lesson") return renderLesson();
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
  if(page==="levels") page="home";
  else if(page==="level-home") page="levels";
  else if(page==="lessons"||page==="podcasts"||page==="tests") page="level-home";
  else if(page==="podcast-player") page="podcasts";
  else if(page==="test-categories") page="tests";
  else if(page==="adjective-challenge"){document.documentElement.classList.remove("challenge-fullscreen-open");document.body.classList.remove("challenge-fullscreen-open");page="test-categories";}
  else if(page==="lesson") page="lessons";
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
  if(event.key === "Escape") closePodcastWordPopup();
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

document.addEventListener("click",function(event){
  const el=event.target.closest("[data-action]");
  if(!el)return;
  const action=el.dataset.action;
  if(action==="start"){page="levels";}
  else if(action==="back"){back();return;}
  else if(action==="level"){selectedLevel=el.dataset.level;page="level-home";}
  else if(action==="open-lessons"){page="lessons";}
  else if(action==="open-podcasts"){page="podcasts";}
  else if(action==="open-tests"){page="tests";}
  else if(action==="lesson"){currentLesson=Number(el.dataset.lesson);activeVerbCard=null;page="lesson";}
  else if(action==="podcast-open"){currentLesson=Number(el.dataset.lesson);dialogueReturnPage="podcasts";page="dialogue";}
  else if(action==="podcast-file-open"){currentPodcastId=el.dataset.podcastId || "";page="podcast-player";}
  else if(action==="test-lesson-open"){currentLesson=Number(el.dataset.lesson);page="test-categories";}
  else if(action==="category-test"){currentCategory=el.dataset.category;testIndex=0;testScore=0;testChoice=null;testAnswered=false;testReturnPage="test-categories";page="test";}
  else if(action==="open-adjective-challenge"){currentLesson=5;page="adjective-challenge";}
  else if(action==="close-adjective-challenge"){document.documentElement.classList.remove("challenge-fullscreen-open");document.body.classList.remove("challenge-fullscreen-open");page="test-categories";render();return;}
  else if(action==="category"){currentCategory=el.dataset.category;activeVerbCard=null;page="category";}
  else if(action==="learn"){learningTab="Bilder";activeVerbCard=null;page="learning";}
  else if(action==="open-dialogue"){dialogueReturnPage="lesson";page=(currentLesson===0 ? "intro-dialogue" : "dialogue");}
  else if(action==="open-numbers"){page="numbers";}
  else if(action==="numbers-back"){page="lesson";}
  else if(action==="open-essen"){page="essen";}
  else if(action==="open-freizeit"){page="freizeit";}
  else if(action==="open-stadt"){page="stadt";}
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
  else if(action==="start-test"){testIndex=0;testScore=0;testChoice=null;testAnswered=false;testReturnPage="category";page="test";}
  else if(action==="choice"){if(!testAnswered){testChoice=Number(el.dataset.choice);}}
  else if(action==="check-answer"){if(testChoice!==null&&!testAnswered){if(testChoice===testIndex)testScore++;testAnswered=true;}}
  else if(action==="next-question"){if(testIndex<items().length-1){testIndex++;testChoice=null;testAnswered=false;}else{page="test-result";}}
  else if(action==="retry-test"){testIndex=0;testScore=0;testChoice=null;testAnswered=false;page="test";}
  else if(action==="category-home"){page="category";}
  else if(action==="test-home"){page=testReturnPage;}
  render();
});
render();
