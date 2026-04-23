const logo = document.querySelector('.logo');

if (logo) {
  logo.addEventListener('click', () => {
    alert('Welcome to InkStain 🔥');
  });
}
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
const images = document.querySelectorAll('.image-box');

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    alert(`Opening artwork ${index + 1}`);
  });
});
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
document.querySelectorAll('.image-box').forEach(box => {
  box.addEventListener('click', () => {
    box.style.transform = 'scale(1.2)';
    
    setTimeout(() => {
      box.style.transform = 'scale(1)';
    }, 300);
  });
});
const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
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
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your tattoo request has been sent.');
  form.reset();
});
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

