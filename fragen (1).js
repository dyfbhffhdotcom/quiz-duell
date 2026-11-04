// ==========================================================
//  FRAGEN – hier kannst du alles selbst ändern
//  Runde 1: 5 Fragen pro Kategorie = 100/200/300/400/500 Punkte
//  Runde 2: 4 Fragen pro Kategorie = 200/400/600/1000 Punkte
//  Aufbau:  ["Kategoriename", ["Frage","Antwort"], ["Frage","Antwort"], ...]
//  Mit Bild:  ["Frage","Antwort","bild1.jpg"]  (Datei im Ordner "bilder" ODER ein https://-Link)
//  Achte auf die Anführungszeichen " " und die Kommas zwischen den Teilen.
//  Du kannst Kategorien löschen oder hinzufügen, das Spielfeld passt sich an.
// ==========================================================
module.exports={
// ---------- RUNDE 1: 100 / 200 / 300 / 400 / 500 Punkte ----------
runde1:[
  ["Essen",
    ["Was ist auf einer Pizza Margherita?","Basilikum, Mozzarella, Tomatensoße"],
    ["Aus welcher Hülsenfrucht wird Hummus hauptsächlich hergestellt?","Kichererbsen"],
    ["Welches Vitamin ist besonders reichlich in Paprika enthalten?","Vitamin C"],
    ["Welches Gewürz wird aus der getrockneten roten Frucht einer Orchideenpflanze gewonnen und häufig für Desserts verwendet?","Vanille"],
    ["Wie heißt der japanische fermentierte Sojabohnenkuchen, der für seinen starken Geruch und seine klebrige Konsistenz bekannt ist?","Natto"]
  ],
  ["ABA",
    ["Ist Akira ZZZ Tier?","Ja"],
    ["In Might Guy 3 Gate: Wie heißt sein erster Move?","Hidden Lotus"],
    ["Wie lang geht Enuma Elish?","10 Sekunden"],
    ["Wie viel kostet Gold Rain in ABA?","10000 Robux"],
    ["Wann wurde ABA released?","02/25/2018"]
  ],
  ["Zurück in die Schule",
    ["Ein Zug fährt 80 km pro Stunde. Wie viele Kilometer fährt er in 3 Stunden und 30 Minuten?","280 Kilometer"],
    ["Wie viele Bundesländer hat Deutschland?","16"],
    ["Wie nennt man ein Wort, das das Gegenteil eines anderen Wortes bedeutet?","Antonym (Gegenteilwort)"],
    ["Wie lautet die chemische Formel für Schwefelsäure?","H₂SO₄"],
    ["Wie heißt der Prozess, bei dem Pflanzen mithilfe von Sonnenlicht, Wasser und Kohlenstoffdioxid Sauerstoff und Zucker herstellen?","Fotosynthese"]
  ],
  ["Aus welchem Anime bin ich?",
    ["Ein Junge isst etwas Seltsames und bekommt plötzlich Superkräfte. Jetzt muss er gegen komische Wesen kämpfen und will der Beste werden.","One Piece"],
    ["Ein paar Menschen wohnen in einer ziemlich schlechten Gegend, weil draußen große Menschen herumlaufen, die offenbar nicht wissen, wie man sich benimmt. Irgendwann stellt sich heraus, dass die ganze Situation viel komplizierter ist als gedacht.","Attack on Titan"],
    ["Ein Kind wird von Erwachsenen in ein System gesteckt, in dem es ständig bewertet wird. Sein größtes Problem ist, dass er eigentlich gar keine Lust hat, daran teilzunehmen.","Classroom of the Elite"],
    ["Eine Gruppe junger Menschen versucht, ihre gesellschaftliche Position zu verbessern, während ein ziemlich ungewöhnliches Kommunikationsproblem immer wieder alles komplizierter macht.","Code Geass"],
    ["Ein Junge möchte unbedingt ein normales Leben führen, aber sein Alltag besteht hauptsächlich daraus, dass er mit einem sehr ungewöhnlichen Mädchen über völlig unnötige Dinge diskutiert.","The Disastrous Life of Saiki K."]
  ],
  ["Tiere",
    ["Welches Säugetier ist das größte Tier der Welt?","Der Blauwal"],
    ["Welches Tier hat drei Herzen?","Der Oktopus"],
    ["Welches Säugetier kann als einziges aktiv fliegen?","Die Fledermaus"],
    ["Welches Tier hat blaues Blut und kann mit seinen Kiemen auch Sauerstoff aus dem Wasser aufnehmen?","Der Pfeilschwanzkrebs"],
    ["Welches Tier besitzt die Fähigkeit, seine DNA-Reparatur besonders effektiv einzusetzen, und wird deshalb intensiv in der Krebsforschung untersucht?","Der Nacktmull"]
  ]
],

// ---------- RUNDE 2: doppelte Punkte (200 / 400 / 600 / 1000) ----------
// Kommt automatisch, sobald alle Felder aus Runde 1 gespielt sind.
runde2:[
  ["Was bin ich?",
    ["Ich habe Zähne, kann aber nicht beißen. Was bin ich?","Ein Kamm"],
    ["Ich werde nass, während ich andere trocken mache. Was bin ich?","Ein Handtuch"],
    ["Ich kann um die ganze Welt reisen, bleibe aber immer in einer Ecke. Was bin ich?","Eine Briefmarke"],
    ["Je mehr du von mir wegnimmst, desto größer werde ich. Was bin ich?","Ein Loch"]
  ],
  ["Wer hat das gesagt?",
    ["„Düntaplüt“","Adri"],
    ["„DU BLOCK SPAMMER“","Adri"],
    ["„Ja niemals hat er Black Flash... MEIN GAME“","Ibo"],
    ["„Omg ist das Adris Schwester? – Ja. – Oh wow“","Liyon"]
  ],
  ["Wer ist das?",
    ["Wer ist das?","Shaq","wer1.webp"],
    ["Wer ist das?","Mia Khalifa","wer2.webp"],
    ["Wer ist das?","Rock Lee (Z-Tier)","wer3.jpg"],
    ["Wer ist das?","Ibo","wer4.jpg"]
  ],
  ["Gaming",
    ["Wie heißt die Stadt, in der GTA V hauptsächlich spielt?","Los Santos"],
    ["Wie heißt der Geistjäger in Luigi's Mansion, der Luigi begleitet?","Professor I. Gidd"],
    ["Wie heißt die außerirdische Krankheit, mit der man sich in Subnautica infiziert und die von den Precursors untersucht wurde?","Kharaa-Bakterium (Kharaa Bacterium)"],
    ["Wie heißt das Königreich, in dem die Handlung von Elden Ring spielt?","Die Zwischenlande (The Lands Between)"]
  ],
  ["Flaggen",
    ["Welches Land hat eine Flagge mit einem roten Drachen auf weiß-grünem Hintergrund?","Wales"],
    ["Welches Land hat eine Nationalflagge mit einem weißen Halbmond und fünf weißen Sternen auf rotem Hintergrund?","Singapur"],
    ["Welches Land hat auf seiner Flagge einen goldenen Löwen, der ein Schwert hält?","Sri Lanka"],
    ["Welches Land besitzt eine Nationalflagge mit fünf diagonalen Streifen in den Farben Blau, Gelb, Rot, Weiß und Grün?","Seychellen"]
  ]
]
};
