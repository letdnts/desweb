// Alternar entre modo claro e escuro
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  toggleBtn.textContent = isDark ? '🌙' : '☀️';
});

// Alternar o menu sanduíche (mobile)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
