// =====================
// LOGO CLICK
// =====================
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
const progressBar = document.querySelector('.scroll-progress');

if (logo) {
  logo.addEventListener('click', () => {
    alert('Welcome to InkStain 🔥');
  });
}


// =====================
// SMOOTH SCROLL NAV
// =====================
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');

if (window.scrollY > 50) {
  header.classList.add('scrolled');
} else {
  header.classList.remove('scrolled');
}

  const scrollTop = window.scrollY;
const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
const scrollPercent = (scrollTop / pageHeight) * 100;

progressBar.style.width = `${scrollPercent}%`;
  const trigger = window.innerHeight * 0.8;
  let current = '';

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const sectionTop = section.offsetTop - 100;

    if (top < trigger) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active-link');

    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active-link');
    }
  });
});


// =====================
// CONTACT FORM
// =====================
const form = document.querySelector('.contact-form');
const formMessage = document.querySelector('.form-message');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formMessage.textContent = 'Thank you! Your tattoo request has been sent.';
    form.reset();
  });
}


// =====================
// LIGHTBOX
// =====================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.image-box img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
// =====================
// COUNTER ANIMATION
// =====================
const counters = document.querySelectorAll('.counter');

const animateCounters = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const updateCounter = () => {
      if (count < target) {
        count += Math.ceil(target / 50);
        counter.textContent = count > target ? target : count;
        setTimeout(updateCounter, 30);
      }
    };

    updateCounter();
  });
};

animateCounters();