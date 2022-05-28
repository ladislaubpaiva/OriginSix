//Initial Data
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('#header .toggle');
const links = document.querySelectorAll('#header ul li a');
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;
const backToTopButton = document.querySelector('.back-to-top');
const sections = document.querySelectorAll('section[id]');
toggle.forEach((btn) => {
  btn.addEventListener('click', () => nav.classList.toggle('show'));
});
links.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});
//*Functions
function ShadowWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}
function backToTop() {
  if (scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}
function setActiveMenu() {
  const checkPoint = window.pageYOffset + (window.innerHeight / 8) * 4;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkPointStart = checkPoint >= sectionTop;
    const checkPointEnd = checkPoint <= sectionTop + sectionHeight;

    if (checkPointStart && checkPointEnd) {
      document.querySelector(`nav ul li a[href*=${sectionId}]`).classList.add('active');
    } else {
      document.querySelector(`nav ul li a[href*=${sectionId}]`).classList.remove('active');
    }
  });
}
//*Events
window.addEventListener('scroll', () => {
  ShadowWhenScroll();
  setActiveMenu();
  backToTop();
});

//?Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },
  keyboard: true,
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
  },
});
setInterval(() => {
  swiper.slideNext();
}, 4000);
//?Scroll Reveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
.swiper-pagination,
#contact .text ,#contact .links,
footer .brand, footer .social`,
  { interval: 100 }
);
