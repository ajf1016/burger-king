window.addEventListener('scroll',function(){
    document.querySelector('header').classList.toggle('sticky',window.scrollY > 50);
    document.querySelector('.scroll-top').classList.toggle('active-btn',window.scrollY > 500);
    
})
let openBtn = document.querySelector('.open-btn-container');
let closeBtn = document.querySelector('.fa-times-circle');
let menu = document.querySelector('.mobile-menu');
let list = document.querySelector('.mobile-menu ul li');

openBtn.addEventListener('click',function(){
    menu.classList.add('active-slider');
    list.classList.add('active-transform')
})
closeBtn.addEventListener('click',function(){
    menu.classList.remove('active-slider');
})