setInterval(()=>document.querySelectorAll(".tm").forEach(e=>{const s=Math.floor((Date.now()-e.dataset.t)/1000);e.textContent=String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0")}),1000);
render();
