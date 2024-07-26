const menuEle = document.querySelector("#menu-icon");
const navbarEle = document.querySelector(".navbar");

menuEle.addEventListener('click',() => {
    menuEle.classList.toggle('bx-x');
    navbarEle.classList.toggle('active')
})
const sectionsEle = document.querySelectorAll("section");
const navLinksEle = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sectionsEle.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinksEle.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id +']').classList.add('active')
            })
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)
    
    menuEle.classList.remove('bx-x');
    navbarEle.classList.remove('active')
}


ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .protfolio-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', "MERN stack developer", "App Developer", "Blooger"],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})