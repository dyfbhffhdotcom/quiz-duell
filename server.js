const http=require("http"),fs=require("fs"),path=require("path");
const KEY=process.env.ADMIN_KEY||"admin";
const PORT=process.env.PORT||3000;
const F=require("./fragen.js");
const ROUNDS=[
  {pts:[100,200,300,400,500],data:Array.isArray(F)?F:F.runde1},
  {pts:[200,400,600,1000],data:Array.isArray(F)?[]:(F.runde2||[])}
].filter(r=>r.data&&r.data.length);
const fresh=keep=>({score:[0,0,0],turn:0,round:0,used:[],cur:null,players:keep||{}});
let S=fresh();
const rd=()=>ROUNDS[S.round];
const clients=new Map();
const TN=["Team Rot","Team Blau","Team Grün"];
// aktive Teams = Teams mit mindestens einem Spieler (mindestens 2 Teams, damit geklaut werden kann)
const activeTeams=()=>{const a=[0,1,2].filter(t=>Object.values(S.players).some(p=>p.team===t));for(const t of [0,1,2])if(a.length<2&&!a.includes(t))a.push(t);return a.sort()};
const nextTeam=()=>{const a=activeTeams();for(let i=1;i<=3;i++){const t=(S.turn+i)%3;if(a.includes(t))return t}return S.turn};
const view=adm=>{const c=S.cur,R=rd(),D=R.data;return{admin:adm,score:S.score,turn:S.turn,active:activeTeams(),round:S.round,rounds:ROUNDS.length,used:S.used,players:S.players,cats:D.map(d=>d[0]),pts:R.pts,
  cur:c?{ci:c.ci,r:c.r,phase:c.phase,buzz:c.buzz,bt:c.bt,msg:c.msg,q:D[c.ci][c.r+1][0],img:D[c.ci][c.r+1][2]||null,a:(adm||c.phase==="done")?D[c.ci][c.r+1][1]:null}:null}};
const push=()=>clients.forEach((adm,res)=>res.write("data: "+JSON.stringify(view(adm))+"\n\n"));
setInterval(()=>clients.forEach((a,res)=>res.write(": ping\n\n")),20000);

function finish(msg){S.cur.phase="done";S.cur.msg=msg;S.used.push(S.cur.ci+"-"+S.cur.r)}
function act(b){
  if(b.action==="join"){
    if(typeof b.id!=="string"||b.id.length>20||(!S.players[b.id]&&Object.keys(S.players).length>=40))return;
    S.players[b.id]={name:String(b.name||"Spieler").slice(0,20),team:(b.team===1||b.team===2)?b.team:0};return}
  if(b.action==="buzz"){
    const c=S.cur,pl=S.players[b.id];
    if(c&&c.phase==="steal"&&c.buzz===null&&pl&&pl.team!==S.turn)c.buzz=b.id,c.bt=pl.team;return}
  if(b.key!==KEY)return;
  const c=S.cur,PTS=rd().pts,DATA=rd().data;
  if(b.action==="open"&&!c&&PTS[b.r]&&DATA[b.ci]&&!S.used.includes(b.ci+"-"+b.r)){if(!activeTeams().includes(S.turn))S.turn=nextTeam();S.cur={ci:b.ci,r:b.r,phase:"main",buzz:null,bt:null,msg:""}}
  else if(b.action==="judge"&&c){
    const p=PTS[c.r],h=p/2,t=S.turn,o=c.bt;
    if(c.phase==="main"){
      if(b.ok){S.score[t]+=p;finish(TN[t]+" hat es richtig! +"+p)}
      else{S.score[t]-=h;c.phase="steal";c.buzz=null}
    }else if(c.phase==="steal"&&c.buzz!==null){
      if(b.ok){S.score[o]+=h;finish(TN[o]+" klaut den Punkt! +"+h)}
      else{S.score[o]-=h;finish(TN[o]+" lag auch falsch: −"+h)}
    }
  }
  else if(b.action==="nosteal"&&c&&c.phase==="steal")finish("Niemand hat geklaut");
  else if(b.action==="next"&&c&&c.phase==="done"){
    S.turn=nextTeam();S.cur=null;
    if(S.used.length>=DATA.length*PTS.length&&S.round<ROUNDS.length-1){S.round++;S.used=[]}
  }
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
  if(req.method==="GET"&&u.pathname.startsWith("/bilder/")){
    const dir=path.join(__dirname,"bilder"),f=path.join(dir,path.basename(decodeURIComponent(u.pathname)));
    const T={".jpg":"image/jpeg",".jpeg":"image/jpeg",".png":"image/png",".webp":"image/webp",".gif":"image/gif"};
    const t=T[path.extname(f).toLowerCase()];
    if(t&&fs.existsSync(f)){res.writeHead(200,{"Content-Type":t,"Cache-Control":"public, max-age=3600"});res.end(fs.readFileSync(f));return}
  }
  res.writeHead(404);res.end("Nicht gefunden");
}).listen(PORT,()=>console.log("Quiz Duell läuft auf Port "+PORT));
