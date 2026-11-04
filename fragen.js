// ==========================================================
//  FRAGEN – hier kannst du alles selbst ändern
//  Jede Kategorie hat 4 Fragen: Runde 1 = 100/200/300/500, Runde 2 = 200/400/600/1000 Punkte.
//  Aufbau:  ["Kategoriename", ["Frage","Antwort"], ["Frage","Antwort"], ...]
//  Mit Bild:  ["Frage","Antwort","bild1.jpg"]  (Datei im Ordner "bilder" ODER ein https://-Link)
//  Achte auf die Anführungszeichen " " und die Kommas zwischen den Teilen.
//  Du kannst Kategorien löschen oder hinzufügen, das Spielfeld passt sich an.
// ==========================================================
module.exports={
// ---------- RUNDE 1: 100 / 200 / 300 / 500 Punkte ----------
runde1:[
  ["Flaggen",
    ["Welche Farben hat die französische Flagge?","Blau-Weiß-Rot"],
    ["Welches Land hat eine quadratische Flagge mit weißem Kreuz auf rotem Grund?","Schweiz"],
    ["Welches Land hat eine Zeder auf der Flagge?","Libanon"],
    ["Welches Himalaya-Land hat einen Drachen auf der Flagge?","Bhutan"]
  ],
  ["Gaming",
    ["Wie heißt der Klempner aus den Super-Mario-Spielen?","Mario"],
    ["Wie viele Pokémon gibt es in der ersten Generation?","151"],
    ["Was ist das seltenste natürlich generierte Erz in Minecraft?","Emerald"],
    ["Wie heißt die Organisation, die in Pokémon Schwarz und Weiß die Pokémon befreien will?","Team Plasma"]
  ],
  ["Filme & Serien",
    ["Wie heißt der Planet, auf dem Superman geboren wurde?","Krypton"],
    ["Warum wurde Kevin in „Kevin – Allein in New York“ von seiner Familie getrennt?","Sein Vater trägt denselben Mantel wie der Mann, dem Kevin hinterherläuft."],
    ["Wie heißt Tobey Maguires (Spidermans) bester Freund?","Harry Osborn"],
    ["Wie viele Möglichkeiten sieht Doctor Strange, in denen die Avengers gegen Thanos kämpfen?","14.000.605"]
  ],
  ["Wer bin ich?",
    ["Wer ist auf dem Bild?","Michael Scofield","bild1.webp"],
    ["Wer ist auf dem Bild?","Benjamin Netanyahu","bild2.jpg"],
    ["Wer ist auf dem Bild?","Crimson Kaido","bild3.png"],
    ["Wer ist auf dem Bild?","Neville","bild4.webp"]
  ],
  ["Tiere",
    ["Wie nennt man ein junges Pferd?","Fohlen"],
    ["Wie viele Herzen hat ein Oktopus?","3"],
    ["Welcher Vogel kann als einziger rückwärts fliegen?","Kolibri"],
    ["Wie heißt das größte lebende Reptil der Welt?","Leistenkrokodil"]
  ]
],

// ---------- RUNDE 2: doppelte Punkte (200 / 400 / 600 / 1000) ----------
// Kommt automatisch, sobald alle Felder aus Runde 1 gespielt sind.
runde2:[
  ["Finish the lyrics",
    ["Im in love with the...","Shape of You (Ed Sheeran)"],
    ["But Im a...","Creep (Radiohead)"],
    ["Hopped on the plane at LAX..","Am I gonna fit in? (Miley Cyrus)"],
    ["Her Body fit right in my hands, La-La-La","It Felt Like Ooh La-La-La (Shawn Mendes ft. Camila Cabello)"]
  ],
  ["Zurück in die Schule",
    ["Was ergibt 2 × 2 + 4 × 3 + 3?","19"],
    ["In welchem Jahr fiel die Berliner Mauer?","1989 (am 9. November)"],
    ["Welches Zellorganell ist hauptsächlich für die Energiegewinnung zuständig?","Mitochondrien"],
    ["Was ist ein Partizipialattribut?","Eine Erweiterung eines Nomens durch ein Partizip"]
  ],
  ["Was bin ich?",
    ["Ich bin gelb, leuchte am Himmel und verschwinde jeden Abend.","Die Sonne"],
    ["Ich habe vier Beine, kann aber nicht laufen. Ich werde meistens nachts benutzt.","Bett"],
    ["Ich habe Städte, aber keine Häuser. Ich habe Flüsse, aber kein Wasser. Ich habe Straßen, aber keine Autos.","Eine Landkarte"],
    ["Ich kann zerbrechen, ohne dass mich jemand berührt. Ich kann verloren gehen, obwohl man mich nicht sehen kann. Und wenn ich einmal weg bin, ist es schwer, mich zurückzubekommen.","Vertrauen"]
  ],
  ["Essen und Trinken",
    ["Aus welcher Frucht wird Ketchup hauptsächlich hergestellt?","Tomate"],
    ["Welche Nuss ist in Nutella?","Haselnuss"],
    ["Welche Frucht ist die Hauptzutat von Marzipan?","Keine – es besteht hauptsächlich aus Mandeln"],
    ["Was ist Gruyère?","Schweizer Hartkäse (Käse reicht als Antwort)"]
  ],
  ["Erkenne den YouTube-Titel",
    ["Von welchem YouTuber ist dieser Titel? „LEVEL = BLOCK (XXL DUO CHALLENGE)“","BastiGHG"],
    ["Von welchem YouTuber ist dieser Titel? „VERFLUCHTE NUMMERN AUS DEM DARK WEB ANRUFEN... 😳“","Kelvin und Marvin"],
    ["Von welchem YouTuber ist dieser Titel? „NICHT LACHEN Challenge mit STRAFEN & @papaplatte 💀🤣“","Rewinside"],
    ["Von welchem YouTuber ist dieser Titel? „Danke für die 1 Million Abonnenten auf Youtube ❤️“","Eligella"]
  ]
]
};
