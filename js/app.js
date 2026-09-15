const button=document.getElementById('menuButton');
const menu=document.getElementById('mobileMenu');
button.addEventListener('click',()=>{const open=!menu.hidden;menu.hidden=open;button.setAttribute('aria-expanded',String(!open));});
menu.addEventListener('click',e=>{if(e.target===menu){menu.hidden=true;button.setAttribute('aria-expanded','false');}});
