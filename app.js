const controller = new ScrollMagic.Controller();
const revealElements = document.getElementsByClassName("scroll_animation");

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

const aboutme = document.querySelector('.aboutme_link');
const myexperience = document.querySelector('.myexperience_link');
const contact = document.querySelector('.contact_link');
const mylogo = document.querySelector('.mylogo');


//스크롤 애니메이션 
for(var i=0; i<revealElements.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: revealElements[i],
        offset: 50,
        triggerHook: 0.9,
    })
    .setClassToggle(revealElements[i], "visible")
    .addTo(controller)
}

//햄버거바 클릭 이벤트
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
})

//페이지 스크롤이동

mylogo.addEventListener('click', () => {
    window.scrollTo(0,0);
})

aboutme.addEventListener('click', () => {
    document.querySelector('.aboutme').scrollIntoView({behavior: 'smooth'});
})

myexperience.addEventListener('click', () => {
    document.querySelector('.myexperience').scrollIntoView({behavior: 'smooth'});
})

contact.addEventListener('click', () => {
    document.querySelector('.contact').scrollIntoView({behavior: 'smooth'});
})

