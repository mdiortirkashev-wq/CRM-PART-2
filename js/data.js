const SCH={name:"Nur ul-Ilm madrasasi",logo:"🕌"};
const SUB=["Qur'on","Arab tili","Fiqh","Matematika"];
const CL=[{n:"5-sinf",c:"#0f7b5f",i:"📗",t:"Aziz ustoz"},{n:"6-sinf",c:"#2c6fbb",i:"📘",t:"Ma'mur ustoz"},{n:"7-sinf",c:"#b7791f",i:"📙",t:"Sodiq ustoz"},{n:"8-sinf",c:"#8e44ad",i:"📕",t:"Hamid ustoz"}];
const nm=["Abdulloh Karimov","Muhammad Yusupov","Ibrohim Rahimov","Yahyo Tursunov","Zayd Olimov","Usmon Nazarov","Bilol Hakimov","Hamza Saidov","Imron Qodirov","Anas Ergashev","Said Umarov","Omar Boboev"];
let ST=nm.map((n,i)=>({id:"T-"+(1001+i),n,cl:CL[i%4].n,act:i!==11,par:"Ota: "+n.split(" ")[1]+" aka",ph:"+998 90 "+(100+i*7)+" "+(20+i)+" "+(10+i),dob:(2010+i%4)+"-0"+(1+i%9)+"-1"+(i%9),gr:Object.fromEntries(SUB.map((s,j)=>[s,[3+(i+j)%3,4+(i*j)%2,3+(i+2*j)%3]])),att:{}}));
let PAY=[{no:"CH-0041",sid:"T-1001",amt:300000,per:"Oktyabr",how:"Naqd",d:"2026-10-03"},{no:"CH-0042",sid:"T-1003",amt:300000,per:"Oktyabr",how:"Karta",d:"2026-10-04"}];
let EX=[],CARDS=[{t:"Savol bilan boshlash",d:"Dars boshida 1 daqiqalik qiziqarli savol.",s:"Fiqh",p:"Boshlanish",m:"Doska",a:"Aziz ustoz",dt:"2026-09-12",f:false},{t:"Juftlikda takrorlash",d:"Talabalar o'tgan mavzuni bir-biriga aytib beradi.",s:"Qur'on",p:"Mustahkamlash",m:"Kartochkalar",a:"Ma'mur ustoz",dt:"2026-09-20",f:true}];
let page="home",arg=null,q="",fc="",fs="",gsel=null,adate="2026-10-05",asel="";
