// === Mobile Menu Toggle Script (Revised) ===
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.getElementById('menuToggle'); // Your hamburger icon
    const menuClose = document.getElementById('menuClose');   // Your close icon

    // Function to toggle the menu state
    function toggleMobileMenu() {
        if (!navLinks) {
            console.error('Mobile navigation links container (navLinks) not found.');
            return;
        }

        navLinks.classList.toggle('active'); // This class should make navLinks visible via CSS

        // Toggle visibility of menu icons
        if (menuToggle && menuClose) {
            if (navLinks.classList.contains('active')) {
                menuToggle.style.display = 'none';
                menuClose.style.display = 'block';
            } else {
                menuToggle.style.display = 'block';
                menuClose.style.display = 'none';
            }
        } else {
            if (!menuToggle) console.error('Menu toggle button (menuToggle) not found.');
            if (!menuClose) console.error('Menu close button (menuClose) not found.');
        }
    }

    // Add event listener to the hamburger icon
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    } else {
        console.error('Menu toggle button (menuToggle) not found. Click event not attached.');
    }

    // Add event listener to the close icon
    if (menuClose) {
        menuClose.addEventListener('click', toggleMobileMenu);
    } else {
        console.error('Menu close button (menuClose) not found. Click event not attached.');
    }

    // Close mobile menu when a link inside it is clicked
    if (navLinks) {
        const linksInNav = navLinks.querySelectorAll('li a');
        linksInNav.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    toggleMobileMenu(); // Close the menu
                }
            });
        });
    }
});
// === End of Mobile Menu Toggle Script ===

// Set current year in footer
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
} else {
    console.warn('Element with ID "currentYear" not found for footer.');
}


// === Hero Section Animation Script (from your previous version) ===
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const h1 = entry.target.querySelector('h1');
            const p = entry.target.querySelector('p.text-lg');
            const aTag = entry.target.querySelector('a.inline-block');
            const img = entry.target.querySelector('img.rounded-xl');

            if (h1 && !h1.classList.contains('visible')) { 
                h1.classList.add('fade-in-up');
                setTimeout(() => h1.classList.add('visible'), 50);
                h1.style.transitionDelay = '0.1s';
            }
            if (p && !p.classList.contains('visible')) { 
                p.classList.add('fade-in-up');
                setTimeout(() => p.classList.add('visible'), 50);
                p.style.transitionDelay = '0.3s';
            }
            if (aTag && !aTag.classList.contains('visible')) { 
                aTag.classList.add('fade-in-up');
                setTimeout(() => aTag.classList.add('visible'), 50);
                aTag.style.transitionDelay = '0.5s';
            }
            if (img && !img.classList.contains('visible')) { 
                img.classList.add('fade-in-up');
                setTimeout(() => img.classList.add('visible'), 50);
                img.style.transitionDelay = '0.2s';
            }
            
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.1 }); 

const heroSection = document.querySelector('.hero-section');
if (heroSection) {
    const elementsToAnimate = [
        heroSection.querySelector('h1'),
        heroSection.querySelector('p.text-lg'),
        heroSection.querySelector('a.inline-block'),
        heroSection.querySelector('img.rounded-xl')
    ];
    
    elementsToAnimate.forEach(el => {
        if (el && !el.classList.contains('visible')) { 
            el.classList.add('fade-in-up');
        }
    });
    observer.observe(heroSection);
} else {
    console.warn('Hero section (.hero-section) not found for animations.');
}
