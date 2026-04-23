// =====================
// LOGO CLICK
// =====================
const logo = document.querySelector('.logo');

if (logo) {
  logo.addEventListener('click', () => {
    alert('Welcome to InkStain 🔥');
  });
}


// =====================
// SMOOTH SCROLL NAV
// =====================
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// =====================
// GALLERY CLICK EFFECT
// =====================
document.querySelectorAll('.image-box img').forEach((img, index) => {
  img.addEventListener('click', () => {
    alert(`Opening artwork ${index + 1}`);
  });
});


// =====================
// SCROLL REVEAL
// =====================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.8;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < trigger) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});


// =====================
// ACTIVE NAV LINK
// =====================
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;

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

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your tattoo request has been sent.');
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
