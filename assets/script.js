document.querySelectorAll('a[href^="#"]').forEach(function(link){link.addEventListener('click',function(e){var id=this.getAttribute('href');if(id==='#')e.preventDefault()})});
document.querySelector('.back-top').addEventListener('click',function(){window.scrollTo({top:0,left:0,behavior:'smooth'})});

var menuToggle=document.querySelector('.menu-toggle');
var siteNav=document.querySelector('#site-nav');
function setMenuOpen(open){
  menuToggle.setAttribute('aria-expanded',String(open));
  menuToggle.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');
  siteNav.classList.toggle('is-open',open);
}
menuToggle.addEventListener('click',function(){
  setMenuOpen(menuToggle.getAttribute('aria-expanded')!=='true');
});
siteNav.querySelectorAll('a').forEach(function(link){
  link.addEventListener('click',function(){setMenuOpen(false)});
});
document.addEventListener('keydown',function(event){
  if(event.key==='Escape'&&menuToggle.getAttribute('aria-expanded')==='true'){
    setMenuOpen(false);
    menuToggle.focus();
  }
});
document.addEventListener('click',function(event){
  if(menuToggle.getAttribute('aria-expanded')==='true'&&!event.target.closest('.header'))setMenuOpen(false);
});
window.addEventListener('resize',function(){
  if(window.innerWidth>1350)setMenuOpen(false);
});
