# Madrasa CRM (prototip)
Ishga tushirish: index.html ni brauzerda oching, yoki papkada `python3 -m http.server 8000` -> http://localhost:8000
Tuzilma:
- index.html — sahifa skeleti
- css/style.css — dizayn tokenlari (och/qorong'i rejim), komponentlar, moslashuvchanlik
- js/data.js — namunaviy ma'lumotlar va holat
- js/core.js — yordamchi funksiyalar, modal, toast, navigatsiya, render
- js/views.js — bo'lim sahifalari (bosh sahifa, talabalar, sinflar, baholar, davomat, to'lovlar, chiqish/qaytish, dars uslublari)
- js/actions.js — formalar va amallar (qo'shish, belgilash, chek, taymer)
- js/main.js — taymer yangilanishi va ishga tushirish
Skriptlar tartibi muhim: data -> core -> views -> actions -> main.
