if ('IntersectionObserver' in window) {
    const appearOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px 0px 0px'
    }

    const appearOnScroll = new IntersectionObserver(function(
        sections,
        appearOnScroll
    ) {
        sections.forEach(section => {
            if(section.isIntersecting){
                section.target.classList.add('slide-up');
                appearOnScroll.unobserve(section.target);
            } else {
                return;
            }
        });        
    },
    appearOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hide');
        appearOnScroll.observe(section);
    })
} else {

}

let nav = document.getElementById('navbar');
let header = document.getElementById('header');

window.onscroll = function() {
    //console.log(document.documentElement.scrollTop);
    if(document.body.scrollTop >= header.offsetHeight/1.6 || document.documentElement.scrollTop >= header.offsetHeight/1.6) {
        nav.classList.add('nav-colored');
        nav.classList.remove('nav-transparent');
    } else {
        nav.classList.add('nav-transparent');
        nav.classList.remove('nav-colored');
    }
}

let txt = 'Welcome to my <span><</span>portfolio<span>/></span>',
    i = 0,
    speed = 90,
    writingTag = false,
    tagOpen = false,
    closingTag = false,
    type = true,
    tag = '',
    el = document.getElementById('typewriter'),
    temp = '';

function typeWriter() {
    if (i < txt.length) {
        //console.log(writingTag, tagOpen, closingTag, txt.charAt(i));

        if(txt.charAt(i) === '<'){
            if(!tagOpen){
                writingTag = true;
                speed = 0;
            } else if(txt.charAt(i+1) == '/' ){
                i++;
                writingTag = true;
                closingTag = true;
            }
        } else if(writingTag === true && txt.charAt(i) === '>'){
            if(closingTag){
                closingTag = false;
                writingTag = false;
                tagOpen = false;
                tag = '';
            } else {
                writingTag = false;
                tagOpen = true;
                speed = 90;
                let newTag = document.createElement(tag);
                tag = "";
                el.appendChild(newTag);
                temp = newTag;
                
            }
            type = false;
        } else if(writingTag && type){
            tag += txt.charAt(i);
        } 
        if(!writingTag && !closingTag && type){
            if(tagOpen){
                temp.innerHTML += txt.charAt(i);
            } else {
                el.innerHTML += txt.charAt(i);
            }
        } else {
            type = true;
        }
        
        i++;
        setTimeout(typeWriter, speed);
    }
  }

let navSlide = () => {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav-links');
    let navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((navLink, index) => {
            if(navLink.style.animation){
                navLink.style.animation = '';
            } else {
                navLink.style.animation = `fade-in-slide 0.5s ease forwards ${index/7 + 0.3}s`;
            }
        });

        // Burger animation
        burger.classList.toggle('toggle');
    });
}

typeWriter();
navSlide();