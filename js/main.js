// ===== MOBILE MENU =====
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  mobileMenu.classList.toggle("show");
});

// Close menu on link click
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    mobileMenu.classList.remove("show");
  });
});

const navLinks = document.querySelectorAll(".nav-link");

// Mobile menu toggle
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Active link switching
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    mobileMenu.classList.add("hidden");
  });
});

// Scroll reveal animation
const reveals = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) {
      section.classList.add("reveal", "active");
    }
  });
});

const carousel = document.getElementById("servicesCarousel");

if (carousel && window.innerWidth < 768) {
  let scrollAmount = 0;

  setInterval(() => {
    scrollAmount += 280;

    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = 0;
    }

    carousel.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  }, 2500);
}


// Roadmap scroll animation
const roadmapItems = document.querySelectorAll(".roadmap-item");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  roadmapItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add("show");
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("testimonialCarousel");

  if (!carousel) return;

  const isMobile = window.matchMedia("(max-width: 767px)");

  let scrollInterval = null;

  function startAutoScroll() {
    let scrollAmount = 0;

    scrollInterval = setInterval(() => {
      scrollAmount += 300;

      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
      }

      carousel.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
    }, 2500);
  }

  function stopAutoScroll() {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = null;
    }
  }

  // Initial check
  if (isMobile.matches) {
    startAutoScroll();
  }

  // Listen for screen size change
  isMobile.addEventListener("change", (e) => {
    if (e.matches) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
  });
});


// Contact section animation
const contactElements = document.querySelectorAll(".fade-left, .fade-right");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  contactElements.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("show");
    }
  });
});


// ===== DARK MODE TOGGLE =====
const toggleBtn = document.getElementById("themeToggle");
const icon = toggleBtn.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  icon.classList.replace("fa-moon", "fa-sun");
}

// Toggle click
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    localStorage.setItem("theme", "light");
    icon.classList.replace("fa-sun", "fa-moon");
  }
});
