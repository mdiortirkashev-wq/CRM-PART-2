const $=s=>document.querySelector(s),sum=n=>n.toLocaleString("ru-RU").replace(/\u00a0/g," ")+" so'm";
const avg=s=>{let a=Object.values(s.gr).flat();return(a.reduce((x,y)=>x+y,0)/a.length).toFixed(1)};
const paid=s=>PAY.some(p=>p.sid===s.id);
const pages=[["home","🏠","Bosh sahifa"],["students","🎓","Talabalar"],["classes","🏫","Sinflar"],["grades","📝","Baholar"],["att","✅","Davomat"],["pay","💳","To'lovlar"],["exit","🚪","Chiqish/qaytish"],["lib","🗂️","Dars uslublari"]];
function toast(m){let e=document.createElement("div");e.className="toast";e.textContent=m;document.body.appendChild(e);setTimeout(()=>e.remove(),2200)}
function modal(h){let e=document.createElement("div");e.className="modal";e.innerHTML='<div class="box">'+h+'</div>';e.onclick=x=>{if(x.target===e)e.remove()};document.body.appendChild(e);e.close=()=>e.remove();return e}
function go(p,a){page=p;arg=a||null;q="";render()}
function render(){
$("#nav").innerHTML='<div class="brand"><div class="logo">'+SCH.logo+'</div><div><b>'+SCH.name+'</b><small>Administrator</small></div></div>'+pages.map(p=>`<button class="${page===p[0]||(page==="prof"&&p[0]==="students")?"on":""}" onclick="go('${p[0]}')">${p[1]} <span class="t">${p[2]}</span></button>`).join("");
$("#main").innerHTML=V[page]();window.scrollTo(0,0)}
