document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.querySelector(".nav-links");
  const menuToggle = document.getElementById("menuToggle");
  const menuClose = document.getElementById("menuClose");
  const navLinks = document.querySelectorAll(".nav-links a");

  function showMenu() {
    if (window.innerWidth <= 768) {
      navMenu.classList.add("active");
      menuToggle.style.display = "none";
      menuClose.style.display = "block";
    }
  }

  function hideMenu() {
    if (window.innerWidth <= 768) {
      navMenu.classList.remove("active");
      menuToggle.style.display = "block";
      menuClose.style.display = "none";
    }
  }

  menuToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    showMenu();
  });

  menuClose.addEventListener("click", function (event) {
    event.stopPropagation();
    hideMenu();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hideMenu();
    });
  });

  document.addEventListener("click", function () {
    hideMenu();
  });

  navMenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  window.addEventListener("scroll", function () {
    if (navMenu.classList.contains("active")) {
      hideMenu();
    }
  });
});

// === End of Mobile Menu Toggle Script ===

// Set current year in footer
const currentYearElement = document.getElementById("currentYear");
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
} else {
  console.warn('Element with ID "currentYear" not found for footer.');
}

// === Hero Section Animation Script (from your previous version) ===
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const h1 = entry.target.querySelector("h1");
        const p = entry.target.querySelector("p.text-lg");
        const aTag = entry.target.querySelector("a.inline-block");
        const img = entry.target.querySelector("img.rounded-xl");

        if (h1 && !h1.classList.contains("visible")) {
          h1.classList.add("fade-in-up");
          setTimeout(() => h1.classList.add("visible"), 50);
          h1.style.transitionDelay = "0.1s";
        }
        if (p && !p.classList.contains("visible")) {
          p.classList.add("fade-in-up");
          setTimeout(() => p.classList.add("visible"), 50);
          p.style.transitionDelay = "0.3s";
        }
        if (aTag && !aTag.classList.contains("visible")) {
          aTag.classList.add("fade-in-up");
          setTimeout(() => aTag.classList.add("visible"), 50);
          aTag.style.transitionDelay = "0.5s";
        }
        if (img && !img.classList.contains("visible")) {
          img.classList.add("fade-in-up");
          setTimeout(() => img.classList.add("visible"), 50);
          img.style.transitionDelay = "0.2s";
        }

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

const heroSection = document.querySelector(".hero-section");
if (heroSection) {
  const elementsToAnimate = [
    heroSection.querySelector("h1"),
    heroSection.querySelector("p.text-lg"),
    heroSection.querySelector("a.inline-block"),
    heroSection.querySelector("img.rounded-xl"),
  ];

  elementsToAnimate.forEach((el) => {
    if (el && !el.classList.contains("visible")) {
      el.classList.add("fade-in-up");
    }
  });
  observer.observe(heroSection);
} else {
  console.warn("Hero section (.hero-section) not found for animations.");
}


// Slider

    document.addEventListener('DOMContentLoaded', function () {
        const slidesContainer = document.querySelector('.slides-container');
        const slides = document.querySelectorAll('.slide');
        const nextBtn = document.querySelector('.slider-nav.next');
        const prevBtn = document.querySelector('.slider-nav.prev');
        const dotsContainer = document.querySelector('.slider-dots');

        if (!slidesContainer) return; // Exit if slider isn't on the page

        let currentIndex = 0;
        let slideInterval;

        // Create dots
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                goToSlide(i);
                resetInterval();
            });
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function goToSlide(index) {
            slidesContainer.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
            currentIndex = index;
        }

        function nextSlide() {
            const newIndex = (currentIndex + 1) % slides.length;
            goToSlide(newIndex);
        }

        function prevSlide() {
            const newIndex = (currentIndex - 1 + slides.length) % slides.length;
            goToSlide(newIndex);
        }

        function startInterval() {
            slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        }

        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        // Event Listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetInterval();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetInterval();
            });
        }

        // Initial setup
        goToSlide(0);
        startInterval();
    });
