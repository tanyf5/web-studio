document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  // Is the section in viewport?
  function checkSectionInViewport() {
    navLinks.forEach(link => {
      const targetId = link.getAttribute('href').substring(1);
      const section = document.getElementById(targetId);

      if (section) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', checkSectionInViewport);
  window.addEventListener('resize', checkSectionInViewport);

  checkSectionInViewport();

  const scrollToSection = event => {
    event.preventDefault();

    const headerHeight = document.querySelector('header').offsetHeight;
    const targetId = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const targetPosition = targetSection.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
  });
});

// Mobile menu

const mobileMenu = document.querySelector('.mobile-menu');
const openMenuBtn = document.querySelector('.burger-icon');
const closeMenuBtn = document.querySelector('.close-mob-menu-btn');
const closeMenuLinks = document.querySelectorAll('.menu-nav-link');
const closeMenuContacts = document.querySelectorAll('.menu-link-address');
const closeMenuSocs = document.querySelectorAll('.menu-li-social-media-link');
const body = document.body;

const toggleMenu = () => {
  const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');
  body.classList.toggle('no-scroll', mobileMenu.classList.contains('is-open'));
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

closeMenuLinks.forEach(item => item.addEventListener('click', toggleMenu));
closeMenuContacts.forEach(item => item.addEventListener('click', toggleMenu));
closeMenuSocs.forEach(item => item.addEventListener('click', toggleMenu));

// Scroll + header height

const scrollToSection = event => {
  event.preventDefault();

  const headerHeight = document.querySelector('header').offsetHeight;
  const targetId = event.target.getAttribute('href');
  const targetSection = document.querySelector(targetId);

  if (targetSection) {
    const targetPosition = targetSection.offsetTop - headerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }
};

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', scrollToSection);
});

document.querySelectorAll('.menu-nav-link').forEach(link => {
  link.addEventListener('click', scrollToSection);
});
