document.querySelectorAll('a[href^="#"]').forEach(function(link){link.addEventListener('click',function(e){var id=this.getAttribute('href');if(id==='#')e.preventDefault()})});
document.querySelector('.back-top').addEventListener('click',function(){window.scrollTo({top:0,left:0,behavior:'smooth'})});
