console.log("JS LOADED");
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

    const messageInput = form.querySelector('textarea');
    const message = messageInput.value.trim();

    if (message.length < 15) {
      formMessage.textContent =
        'Please describe your tattoo idea in more detail.';
      return;
    }

    formMessage.textContent =
      'Thank you! Your tattoo request has been sent.';
    form.reset();
  });
}



// =====================
// LIGHTBOX
// =====================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close-btn');

const galleryImages = document.querySelectorAll('.image-box img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentImageIndex = 0;

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentImageIndex = index;
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});
nextBtn.addEventListener('click', () => {
  currentImageIndex =
    (currentImageIndex + 1) % galleryImages.length;

  lightboxImg.src =
    galleryImages[currentImageIndex].src;
});

prevBtn.addEventListener('click', () => {
  currentImageIndex =
    (currentImageIndex - 1 + galleryImages.length) %
    galleryImages.length;

  lightboxImg.src =
    galleryImages[currentImageIndex].src;
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
document.addEventListener('keydown', (e) => {
  if (lightbox.style.display !== 'flex') return;

  if (e.key === 'ArrowRight') {
    currentImageIndex =
      (currentImageIndex + 1) % galleryImages.length;

    lightboxImg.src =
      galleryImages[currentImageIndex].src;
  }

  if (e.key === 'ArrowLeft') {
    currentImageIndex =
      (currentImageIndex - 1 + galleryImages.length) %
      galleryImages.length;

    lightboxImg.src =
      galleryImages[currentImageIndex].src;
  }

  if (e.key === 'Escape') {
    lightbox.style.display = 'none';
  }
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
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
const themeToggle = document.querySelector('.theme-toggle');

if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-theme');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');

  if (document.body.classList.contains('light-theme')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
});
const heroTitle = document.querySelector('.hero-title');
const text = 'Where Ink Meets Soul';
let index = 0;

function typeWriter() {
  if (index < text.length) {
    heroTitle.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  hero.style.backgroundPositionY = `${scrollY * 0.4}px`;
});
const filterButtons = document.querySelectorAll('.filter-btn');
const imageBoxes = document.querySelectorAll('.image-box');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    filterButtons.forEach(btn =>
      btn.classList.remove('active-filter')
    );

    button.classList.add('active-filter');

    imageBoxes.forEach(box => {
      const category = box.getAttribute('data-category');

      if (filter === 'all' || filter === category) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });
  });
});
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
const animatedItems = document.querySelectorAll(
  '.card, .style-card, .stat-box, .image-box'
);

window.addEventListener('scroll', () => {
  animatedItems.forEach((item, index) => {
    const top = item.getBoundingClientRect().top;

    if (top < window.innerHeight * 0.9) {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 120);
    }
  });
});
const textarea = document.querySelector('.contact-form textarea');
const charCounter = document.querySelector('.char-counter');

textarea.addEventListener('input', () => {
  const length = textarea.value.length;
  charCounter.textContent = `${length} / 200 characters`;
});
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});