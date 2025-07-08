// main.js
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the toggle button and navigation menu
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
  
    // Defensive: Only add event if elements exist
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
  
        // Accessibility: Update aria-expanded for screen readers
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', (!expanded).toString());
        navMenu.setAttribute('aria-hidden', expanded.toString());
      });
    }
  });
  