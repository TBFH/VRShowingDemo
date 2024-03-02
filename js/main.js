// Showcase Events
const showcase1Slide = document.querySelector('.showcase1-slide');
const showcase1Image = document.querySelectorAll('.showcase1-slide img');
const showcase2Slide = document.querySelector('.showcase2-slide');
const showcase2Image = document.querySelectorAll('.showcase2-slide img');

// Showcases Buttons
const Showcase1Btn = document.querySelector('.showcase1-btn');
const Showcase2Btn = document.querySelector('.showcase2-btn');

// Variables
let showcase1Count = 1;
let showcase2Count = 1;
let size = showcase1Image[0].clientWidth + 45;

// Initial Showcase Transform
showcase1Slide.style.transform = 'translateX(' + (-size * showcase1Count + 200) + 'px)';
showcase2Slide.style.transform = 'translateX(' + (-size * showcase2Count + 200) + 'px)';

// Showcases Buttons Listeners
Showcase1Btn.addEventListener('click', () => {
    if(showcase1Count >= showcase1Image.length - 1) return;
    showcase1Slide.style.transition = 'transform 0.4s ease-in-out';
    showcase1Count++;
    showcase1Slide.style.transform = 'translateX(' + (-size * showcase1Count + 200) + 'px)';
})
showcase1Slide.addEventListener('transitionend', () => {
    if(showcase1Count === showcase1Image.length - 1){
        showcase1Slide.style.transition = 'none';
        showcase1Count = 1;
        showcase1Slide.style.transform = 'translateX(' + (-size * showcase1Count + 200) + 'px)';
    }
})
Showcase2Btn.addEventListener('click', () => {
    if(showcase2Count <= 0) return;
    showcase2Slide.style.transition = 'transform 0.4s ease-in-out';
    showcase2Count--;
    showcase2Slide.style.transform = 'translateX(' + (-size * showcase2Count + 200) + 'px)';
})
showcase2Slide.addEventListener('transitionend', () => {
    if(showcase2Count === 0){
        showcase2Slide.style.transition = 'none';
        showcase2Count = showcase2Image.length - 2;
        showcase2Slide.style.transform = 'translateX(' + (-size * showcase2Count + 200) + 'px)';
    }
})

// Scroll Events
const home = document.querySelector('#home');
const preview = document.querySelector('#preview');
const preview1 = document.querySelector('#preview1');
const intro = document.querySelector('#intro');
const about = document.querySelector('#about');
const navLi = document.querySelectorAll('nav div ul li');

window.addEventListener('scroll', () => {
    let current = '';
    if(scrollY >= document.body.clientHeight - document.documentElement.clientHeight){
        // about
        current = about.getAttribute('id');
    } else if(scrollY >= document.body.clientHeight - document.documentElement.clientHeight - 450){
        // intro
        current = intro.getAttribute('id');
    } else if(scrollY >= preview.offsetTop - 300){
        // preview
        current = preview.getAttribute('id');
    } else {
        // home
        current = home.getAttribute('id');
    }

    navLi.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
    })
})
window.addEventListener('scroll', () => {
    if(scrollY >= preview1.offsetTop - 750){
        // preview1
        if(preview1.classList.contains('active')) return;
        preview1.classList.add('active');
    } else if(scrollY >= preview.offsetTop - 750){
        // preview
        if(preview.classList.contains('active')) return;
        preview.classList.add('active');
    }
})
