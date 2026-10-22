(() => {
  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const glyph = document.getElementById('menu-glyph');

  if (!nav || !toggle || !menu || !glyph) return;

  const setMenu = (open) => {
    menu.classList.toggle('is-hidden', !open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    glyph.textContent = open ? '×' : '☰';
  };

  toggle.addEventListener('click', () => setMenu(menu.classList.contains('is-hidden')));
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
  window.addEventListener('scroll', () => nav.classList.toggle('is-scrolled', window.scrollY > 18), { passive: true });
  setMenu(false);
})();
