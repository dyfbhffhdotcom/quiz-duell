// ==========================================================
//  FRAGEN – hier kannst du alles selbst ändern
//  Runde 1: 5 Fragen pro Kategorie = 100/200/300/400/500 Punkte
//  Runde 2: 5 Fragen pro Kategorie = 200/400/600/800/1000 Punkte
//  Aufbau:  ["Kategoriename", ["Frage","Antwort"], ["Frage","Antwort"], ...]
//  Mit Bild:  ["Frage","Antwort","bild1.jpg"]  (Datei im Ordner "bilder" ODER ein https://-Link)
//  Achte auf die Anführungszeichen " " und die Kommas zwischen den Teilen.
// ==========================================================
module.exports={
// ---------- RUNDE 1: 100 / 200 / 300 / 400 / 500 Punkte ----------
runde1:[
  ["Was bedeutet dieses Wort?",
    ["Was bedeutet „Pikant“?","Angenehm scharf, kräftig gewürzt, würzig oder herzhaft"],
    ["Was bedeutet „Kollaborieren“?","Mit jemandem zusammenarbeiten"],
    ["Was bedeutet „Fungieren“?","Eine bestimmte Funktion ausüben, eine Aufgabe übernehmen oder als etwas dienen"],
    ["Was bedeutet „Revidieren“?","Etwas überprüfen und aufgrund von Fehlern oder neuen Erkenntnissen ändern oder korrigieren (auch: renovieren)"],
    ["Was bedeutet „Extemporieren“?","Spontan, unvorbereitet und aus dem Stegreif sprechen oder auftreten (heutzutage auch: Freestyle)"]
  ],
  ["Wer machte dieses Lied?",
    ["Wer hat das Lied „Baller Los“ gemacht?","Mero"],
    ["Wer hat das Lied „Bamboleo“ gemacht?","Daniel Munoz / Gipsy Kings"],
    ["Wer hat das Lied „Madwomen“ gemacht?","Laufey"],
    ["Wer hat das Lied „Jane!“ gemacht?","The Long Faces"],
    ["Wer hat das Lied „The Sign“ gemacht?","Ace of Base"]
  ],
  ["Welche historische Person bin ich?",
    ["Wer hat im 2. Weltkrieg eines der berühmtesten Tagebücher geschrieben?","Anne Frank"],
    ["Wer ist der berühmteste Militärstratege im 19. Jahrhundert?","Napoleon Bonaparte"],
    ["Wer hat das größte zusammenhängende Landreich der Welt gebaut?","Dschingis Khan"],
    ["Wer zog als junges Bauernmädchen in den Hundertjährigen Krieg und endete auf dem Scheiterhaufen?","Jeanne d’Arc"],
    ["Wer war die einzige Frau, die jemals als offizielle Kaiserin das kaiserliche China regierte?","Wu Zetian"]
  ],
  ["Frauen, die Geschichte schrieben",
    ["Diese britische Monarchin saß von 1952 bis zu ihrem Tod im Jahr 2022 stolze 70 Jahre auf dem Thron und erlebte 15 britische Premierminister.","Königin Elisabeth II."],
    ["Wer war die berühmteste Person der Bürgerrechtsbewegung (Civil Rights Movement)?","Rosa Parks"],
    ["Diese katholische Ordensschwester widmete ihr Leben den Armen und Sterbenden in den Slums von Kalkutta, erhielt dafür 1979 den Friedensnobelpreis und wurde 2016 heiliggesprochen.","Mutter Teresa"],
    ["Trotz ihrer Blind- und Taubheit erlernte diese US-amerikanische Schriftstellerin und Aktivistin im späten 19. Jahrhundert mehrere Sprachen, machte als erste taubblinde Person einen Hochschulabschluss und kämpfte weltweit für Frauen- und Behindertenrechte.","Helen Keller"],
    ["Diese französische Modedesignerin revolutionierte in den 1920er Jahren die Damenmode, indem sie Frauen von engen Korsetts befreite, das „kleine Schwarze“ erfand und ein Parfüm kreierte, das bis heute ein absoluter Weltbestseller ist.","Coco Chanel"]
  ],
  ["Mythologie",
    ["In welcher Mythologie spielt God of War?","Griechische Mythologie"],
    ["Wer ist der Liebesgott, der mit Pfeil und Bogen schießt?","Amor"],
    ["Wer versteinert dich, wenn du ihr in die Augen guckst?","Medusa"],
    ["Wer ist der ägyptische Sonnengott?","Ra (Eye of Ra)"],
    ["Zu welcher Insel wurde König Arthur nach der Schlacht von Camlann gebracht?","Avalon"]
  ]
],

// ---------- RUNDE 2: doppelte Punkte (200 / 400 / 600 / 800 / 1000) ----------
// Kommt automatisch, sobald alle Felder aus Runde 1 gespielt sind.
runde2:[
  ["Welches Wort passt zu dieser Beschreibung?",
    ["Ein Gerät mit zwei Rädern, das man mit Muskelkraft durch Treten von Pedalen fortbewegt.","Fahrrad"],
    ["Die Angst vor engen, geschlossenen Räumen.","Klaustrophobie"],
    ["Ein optisches Phänomen in der Wüste oder auf heißem Asphalt, bei dem weit entfernte Objekte gespiegelt oder verzerrt erscheinen.","Fata Morgana"],
    ["Die Wissenschaft, die sich mit der Erforschung von Sternen, Planeten und dem Weltall beschäftigt.","Astronomie"],
    ["Ein kurzes, meist witziges oder ironisches Wortspiel, bei dem die Buchstaben eines Wortes neu angeordnet werden, um ein neues Wort zu bilden.","Anagramm"]
  ],
  ["Welcher Charakter ist hier beschrieben?",
    ["Ein Gummi-Teenager mit einem gestohlenen Hut prügelt sich auf der ganzen Welt durch Diktaturen, nur weil ihm Leute mal was zu essen gegeben haben.","Monkey D. Ruffy"],
    ["Ein überarbeiteter Angestellter ohne Haare schlägt Leute einmal und ist danach depressiv, weil er deswegen nicht mehr richtig einkaufen gehen oder Spaß haben kann.","Saitama"],
    ["Ein wütender Teenager, der eigentlich nur einmal ans Meer wollte, entwickelt massive Aggressionsprobleme gegen alles außerhalb seiner Stadtmauer und beißt sich ständig selbst in die Hand.","Eren"],
    ["Ein kleiner Junge mit fragwürdigen Erziehungsberechtigten opfert seine gesamte Lebenserwartung, um aus Rache für seinen erst kürzlich kennengelernten Freund eine Ameise totzuprügeln.","Gon"],
    ["Ein extrem wortkarger, einäugiger Mann schleppt ein viel zu großes Stück Eisen durch die Gegend und verbringt Jahre damit, seinem ehemaligen besten Freund wegen einer sehr toxischen Trennung hinterherzulaufen.","Guts"]
  ],
  ["Werbeslogans",
    ["Zu welcher Marke gehört der Slogan „Just Do It.“?","Nike"],
    ["Ergänze den Slogan: „Dann geh doch zu …“","Netto / Dann geh doch zu Netto"],
    ["Ergänze den Slogan: „… repariert, … tauscht aus.“","Carglass / Carglass repariert, Carglass tauscht aus."],
    ["Zu welcher Marke gehört der Slogan „Ich bin doch nicht blöd.“?","Media Markt"],
    ["Zu welcher Marke gehört der Slogan „Sind sie zu stark, bist du zu schwach.“?","Fisherman’s Friend"]
  ],
  ["Wahr oder Falsch",
    ["Goldfische haben ein Gedächtnis, das nur drei Sekunden anhält.","Falsch"],
    ["Die Chinesische Mauer ist das einzige von Menschenhand geschaffene Bauwerk, das man mit bloßem Auge vom Mond aus sehen kann.","Falsch"],
    ["In der Schweiz ist es gesetzlich verboten, nur ein einzelnes Meerschweinchen zu halten.","Wahr"],
    ["Bananen sind botanisch gesehen Beeren, Erdbeeren hingegen nicht.","Wahr"],
    ["Die Universität Oxford in England ist älter als das Reich der Azteken in Mexiko.","Wahr"]
  ],
  ["Schätzen",
    ["Wie viele Stufen muss man steigen, um die Spitze des Eiffelturms zu Fuß zu erreichen?","1.665 Stufen"],
    ["Aus wie vielen einzelnen Steinen besteht ein klassischer Zauberwürfel (Rubik’s Cube), ohne Zwischenräume?","26 Steine"],
    ["Wie viele Quadratmeter hat ein offizielles Fußballfeld bei internationalen Spielen?","7.140 Quadratmeter"],
    ["Wie viele Felder hat ein klassisches deutsches „Mensch ärgere Dich nicht“-Spielbrett insgesamt?","72 Felder"],
    ["Wie viele Wörter spricht ein Mensch im Durchschnitt an einem einzigen Tag?","16.000 Wörter"]
  ]
]
};
