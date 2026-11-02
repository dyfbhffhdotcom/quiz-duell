const http=require("http"),fs=require("fs"),path=require("path");
const KEY=process.env.ADMIN_KEY||"admin";
const PORT=process.env.PORT||3000;
const PTS=[100,200,300,500];
const DATA=[
["Geographie",["Was ist die Hauptstadt von Frankreich?","Paris"],["Welcher Fluss ist der längste, der durch Deutschland fließt?","Der Rhein"],["Was ist die Hauptstadt von Australien?","Canberra"],["Welches ist das flächenmäßig kleinste Land der Erde?","Vatikanstadt"]],
["Fußball",["Wie viele Spieler stehen pro Team gleichzeitig auf dem Platz?","11"],["Welches Land wurde 2014 Weltmeister?","Deutschland"],["Wer ist Rekordtorschütze der Bundesliga?","Gerd Müller"],["Wer gewann die erste Fußball-WM 1930?","Uruguay"]],
["Pizza",["Aus welchem Land stammt die Pizza?","Italien"],["Welche Pizza hat Tomaten, Mozzarella und Basilikum?","Pizza Margherita"],["In welcher Stadt wurde die Pizza erfunden?","Neapel"],["Wie heißt der Pizzarand auf Italienisch?","Cornicione"]],
["Tiere",["Welches ist das größte Landtier?","Der Afrikanische Elefant"],["Wie viele Beine hat eine Spinne?","8"],["Wie nennt man ein junges Känguru?","Joey"],["Wie viele Herzen hat ein Oktopus?","3"]],
["Anime",["Wie heißt das gelbe Pokémon mit dem Blitzschwanz?","Pikachu"],["Wie heißt der Hauptcharakter von One Piece?","Monkey D. Ruffy"],["Wie heißt das Heimatdorf von Naruto?","Konohagakure (Dorf versteckt in den Blättern)"],["Wer ist der Autor des Mangas Attack on Titan?","Hajime Isayama"]],
["Flaggen",["Welche Farben hat die deutsche Flagge?","Schwarz-Rot-Gold"],["Welches Land hat einen roten Kreis auf weißem Grund?","Japan"],["Welches Land hat ein Ahornblatt auf der Flagge?","Kanada"],["Welches Land hat die einzige nicht-rechteckige Nationalflagge?","Nepal"]]
];
const fresh=keep=>({score:[0,0],turn:0,used:[],cur:null,players:keep||{}});
let S=fresh();
const clients=new Map();
const view=adm=>{const c=S.cur;return{admin:adm,score:S.score,turn:S.turn,used:S.used,players:S.players,cats:DATA.map(d=>d[0]),pts:PTS,
  cur:c?{ci:c.ci,r:c.r,show:c.show,q:DATA[c.ci][c.r+1][0],a:c.show?DATA[c.ci][c.r+1][1]:null}:null}};
const push=()=>clients.forEach((adm,res)=>res.write("data: "+JSON.stringify(view(adm))+"\n\n"));
setInterval(()=>clients.forEach((a,res)=>res.write(": ping\n\n")),20000);

function act(b){
  const adm=b.key===KEY;
  if(b.action==="join"){
    if(typeof b.id!=="string"||b.id.length>20||(!S.players[b.id]&&Object.keys(S.players).length>=40))return;
    S.players[b.id]={name:String(b.name||"Spieler").slice(0,20),team:b.team===1?1:0};return}
  if(!adm)return;
  if(b.action==="open"&&!S.cur&&PTS[b.r]&&DATA[b.ci]&&!S.used.includes(b.ci+"-"+b.r))S.cur={ci:b.ci,r:b.r,show:false};
  else if(b.action==="reveal"&&S.cur)S.cur.show=true;
  else if(b.action==="answer"&&S.cur&&S.cur.show){const p=PTS[S.cur.r];S.score[S.turn]+=b.ok?p:-p;S.turn=1-S.turn;S.used.push(S.cur.ci+"-"+S.cur.r);S.cur=null}
  else if(b.action==="cancel")S.cur=null;
  else if(b.action==="kick")delete S.players[b.id];
  else if(b.action==="reset")S=fresh(S.players);
}

http.createServer((req,res)=>{
  const u=new URL(req.url,"http://x");
  if(req.method==="GET"&&u.pathname==="/events"){
    res.writeHead(200,{"Content-Type":"text/event-stream","Cache-Control":"no-cache",Connection:"keep-alive"});
    const adm=u.searchParams.get("key")===KEY;clients.set(res,adm);
    res.write("data: "+JSON.stringify(view(adm))+"\n\n");
    req.on("close",()=>clients.delete(res));return}
  if(req.method==="POST"&&u.pathname==="/api"){
    let d="";req.on("data",c=>{d+=c;if(d.length>5000)req.destroy()});
    req.on("end",()=>{try{act(JSON.parse(d));push()}catch(e){}res.writeHead(204);res.end()});return}
  if(req.method==="GET"&&u.pathname==="/"){
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.end(fs.readFileSync(path.join(__dirname,"index.html")));return}
  res.writeHead(404);res.end("Nicht gefunden");
}).listen(PORT,()=>console.log("Quiz Duell läuft auf Port "+PORT));
