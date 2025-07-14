// script.js

const toggleBtn = document.getElementById('lang-toggle');
let currentLang = 'ar';

toggleBtn.addEventListener('click', () => {
  const elements = document.querySelectorAll('[data-en]');
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  toggleBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';

  // Update language and direction
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  elements.forEach(el => {
    if (el.tagName === 'INPUT') {
      el.placeholder = el.getAttribute(`data-${currentLang}-placeholder`) || el.getAttribute(`data-${currentLang}`);
    } else {
      el.textContent = el.getAttribute(`data-${currentLang}`);
    }
  });
});

// Replace gallery images with free ready-to-use food images
const gallerySection = document.getElementById('gallery');
if (gallerySection) {
  gallerySection.innerHTML += `
    <div class="gallery">
      <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80" alt="Dish 1" width="200">
      <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80" alt="Dish 2" width="200">
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" alt="Dish 3" width="200">
    </div>
  `;
}
