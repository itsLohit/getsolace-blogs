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
  

  document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const selected = btn.getAttribute('data-category');
    document.querySelectorAll('.features__card.blog__post').forEach(card => {
      if (selected === 'All' || card.getAttribute('data-category') === selected) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

document.getElementById('searchBar').addEventListener('input', function() {
  const keyword = this.value.toLowerCase();
  document.querySelectorAll('.features__card.blog__post').forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(keyword) ? '' : 'none';
  });
});
