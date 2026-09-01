const body = document.body;
const menu = document.querySelector('.menu-btn');
const loader = document.querySelector('#loader');
const loaderBar = document.querySelector('#loader-bar');
const loaderPercent = document.querySelector('#loader-percent');

let progress = 0;
const loadingTimer = setInterval(() => {
  progress = Math.min(progress + Math.floor(Math.random() * 12) + 5, 100);
  loaderBar.style.width = `${progress}%`;
  loaderPercent.textContent = `${String(progress).padStart(2, '0')}%`;
  if (progress === 100) {
    clearInterval(loadingTimer);
    setTimeout(() => {
      loader.classList.add('is-done');
      body.classList.remove('is-loading');
    }, 350);
  }
}, 90);

window.addEventListener('load', () => {
  setTimeout(() => {
    progress = 100;
    loaderBar.style.width = '100%';
    loaderPercent.textContent = '100%';
  }, 180);
});

menu?.addEventListener('click', () => {
  const isOpen = body.classList.toggle('menu-open');
  menu.textContent = isOpen ? 'CLOSE' : 'MENU';
  menu.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => {
  body.classList.remove('menu-open');
  if (menu) {
    menu.textContent = 'MENU';
    menu.setAttribute('aria-expanded', 'false');
  }
}));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal, .project, .stack-card').forEach((element) => revealObserver.observe(element));

document.querySelectorAll('.project').forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    if (window.matchMedia('(max-width: 850px)').matches) return;
    const rect = card.getBoundingClientRect();
    const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -2;
    const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});
