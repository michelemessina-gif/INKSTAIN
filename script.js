console.log("JS LOADED");

// =====================
// ELEMENT SELECTORS
// =====================

const body = document.body;
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

const logo = document.querySelector(".logo");
const progressBar = document.querySelector(".scroll-progress");

const sections = document.querySelectorAll("section");

const form = document.querySelector(".contact-form");
const formMessage = document.querySelector(".form-message");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close-btn");

const galleryImages = document.querySelectorAll(".image-box img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const counters = document.querySelectorAll(".counter");

const themeToggle = document.querySelector(".theme-toggle");

const hero = document.querySelector(".hero");
const heroTitle = document.querySelector(".hero-title");

const filterButtons = document.querySelectorAll(".filter-btn");
const imageBoxes = document.querySelectorAll(".image-box");

const backToTopBtn = document.querySelector(".back-to-top");

const animatedItems = document.querySelectorAll(
  ".card, .style-card, .stat-box, .image-box"
);

const textarea = document.querySelector(".contact-form textarea");
const charCounter = document.querySelector(".char-counter");

const menuToggle = document.querySelector(".menu-toggle");

// =====================
// LOGO CLICK
// =====================

if (logo) {
  logo.addEventListener("click", () => {
    alert("Welcome to InkStain 🔥");
  });
}

// =====================
// SCROLL EVENTS
// =====================

window.addEventListener("scroll", () => {

  // Header shrink
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Progress bar
  const scrollTop = window.scrollY;
  const pageHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrollPercent = (scrollTop / pageHeight) * 100;

  progressBar.style.width = `${scrollPercent}%`;

  // Reveal sections
  const trigger = window.innerHeight * 0.8;

  let current = "";

  sections.forEach(section => {

    const top = section.getBoundingClientRect().top;
    const sectionTop = section.offsetTop - 100;

    if (top < trigger) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  // Active nav links
  navLinks.forEach(link => {

    link.classList.remove("active-link");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-link");
    }
  });

  // Parallax hero
  hero.style.backgroundPositionY = `${window.scrollY * 0.4}px`;

  // Back to top button
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }

  // Reveal cards
  animatedItems.forEach((item, index) => {

    const top = item.getBoundingClientRect().top;

    if (top < window.innerHeight * 0.9) {

      setTimeout(() => {
        item.classList.add("visible");
      }, index * 120);

    }
  });
});

// =====================
// CONTACT FORM
// =====================

if (form) {

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const message = textarea.value.trim();

    if (message.length < 15) {

      formMessage.textContent =
        "Please describe your tattoo idea in more detail.";

      return;
    }

    formMessage.textContent =
      "Thank you! Your tattoo request has been sent.";

    form.reset();

    charCounter.textContent = "0 / 200 characters";
  });
}

// =====================
// LIGHTBOX
// =====================

let currentImageIndex = 0;

galleryImages.forEach((img, index) => {

  img.addEventListener("click", () => {

    currentImageIndex = index;

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

const updateLightboxImage = () => {
  lightboxImg.src = galleryImages[currentImageIndex].src;
};

nextBtn.addEventListener("click", () => {

  currentImageIndex =
    (currentImageIndex + 1) % galleryImages.length;

  updateLightboxImage();
});

prevBtn.addEventListener("click", () => {

  currentImageIndex =
    (currentImageIndex - 1 + galleryImages.length) %
    galleryImages.length;

  updateLightboxImage();
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {

  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

document.addEventListener("keydown", (e) => {

  if (lightbox.style.display !== "flex") return;

  if (e.key === "ArrowRight") {

    currentImageIndex =
      (currentImageIndex + 1) % galleryImages.length;

    updateLightboxImage();
  }

  if (e.key === "ArrowLeft") {

    currentImageIndex =
      (currentImageIndex - 1 + galleryImages.length) %
      galleryImages.length;

    updateLightboxImage();
  }

  if (e.key === "Escape") {
    lightbox.style.display = "none";
  }
});

// =====================
// COUNTER ANIMATION
// =====================

const animateCounters = () => {

  counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");

    let count = 0;

    const updateCounter = () => {

      if (count < target) {

        count += Math.ceil(target / 50);

        counter.textContent =
          count > target ? target : count;

        setTimeout(updateCounter, 30);
      }
    };

    updateCounter();
  });
};

animateCounters();

// =====================
// THEME TOGGLE
// =====================

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-theme");
}

themeToggle.addEventListener("click", () => {

  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

// =====================
// TYPEWRITER EFFECT
// =====================

const text = "Where Ink Meets Soul";

let index = 0;

function typeWriter() {

  if (index < text.length) {

    heroTitle.textContent += text.charAt(index);

    index++;

    setTimeout(typeWriter, 100);
  }
}

typeWriter();

// =====================
// GALLERY FILTER
// =====================

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    const filter = button.getAttribute("data-filter");

    filterButtons.forEach(btn => {
      btn.classList.remove("active-filter");
    });

    button.classList.add("active-filter");

    imageBoxes.forEach(box => {

      const category =
        box.getAttribute("data-category");

      if (filter === "all" || filter === category) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  });
});

// =====================
// BACK TO TOP
// =====================

backToTopBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// =====================
// PAGE LOAD
// =====================

window.addEventListener("load", () => {
  body.classList.add("loaded");
});

// =====================
// CHARACTER COUNTER
// =====================

textarea.addEventListener("input", () => {

  const length = textarea.value.length;

  charCounter.textContent =
    `${length} / 200 characters`;
});

// =====================
// MOBILE MENU
// =====================

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});