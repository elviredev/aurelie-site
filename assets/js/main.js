/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('bg-header')
                     : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)
bgHeader()

/*=============== VIDEO POPUP ===============*/
const video = () =>  {
  const btns = ['about-video-close', 'about-play-btn']
  const popup = document.getElementById('about-video')
  const iframe = document.getElementById('about-video-iframe')
  const src = iframe.src
  
  btns.forEach((btn) => {
    document.getElementById(btn).addEventListener('click', () => {
      if (popup.classList.contains('open')) {
        popup.classList.remove('open')
        iframe.src = ""
      } else {
        popup.classList.add('open')
        if (iframe.getAttribute('src') === "") {
          iframe.src = src
        }
      }
    })
  })
}
video()


/*=============== SWIPER SERVICES ===============*/
const swiperServices = new Swiper('.services__swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

/*=============== SWIPER TESTIMONIALS ===============*/
const swiperTestimonials = new Swiper('.testimonials__swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  slidesPerView: 'auto',
  pagination: {
    el: '.testimonials__pagination',
    clickable: true
  }
});

/*=============== MAPBOX ===============*/
mapboxgl.accessToken =
  "pk.eyJ1IjoiZWx2aXJlZGV2IiwiYSI6ImNtNGJjOGhrZDAyZWYyaXF6dWFzOWpjOGkifQ.3dtEPM4rxJj54jxJof7x5g";
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: [2.71494, 47.98918], // Maison de Santé Villemandeur location [lng, lat]
  zoom: 14, // starting zoom
});

// Add a marker at Maison de Santé Villemandeur 47.989263408079275, 2.714985551909102
new mapboxgl.Marker().setLngLat([2.71479, 47.98932]).addTo(map);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link')
    } else {
      sectionClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 2500,
  delay: 400,
  // reset: true // Animations repeat
})

sr.reveal(`.home__content, .services__data, .services__swiper, .testimonials__image-box, .testimonials__swiper, .footer__container`)
sr.reveal(`.home__images`, {origin: 'bottom', 'delay': 1000})
sr.reveal(`.about__img-box, .contact__map`, {origin: 'left'})
sr.reveal(`.about__data, .contact__data`, {origin: 'right'})
sr.reveal(`.specialisations__card, .price__card`, {interval: 150})