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