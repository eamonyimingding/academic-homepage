// Tiny, dependency-free enhancements. All pages are readable without JavaScript.
(() => {
  const button = document.querySelector('.mobile-nav-button');
  const nav = document.querySelector('#primary-nav');
  if (button && nav) {
    const closeMenu = () => {
      nav.classList.remove('nav-open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open navigation');
    };
    button.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav-open');
      button.setAttribute('aria-expanded', String(isOpen));
      button.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }
  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
  const printButton = document.querySelector('[data-print]');
  if (printButton) printButton.addEventListener('click', () => window.print());
})();
