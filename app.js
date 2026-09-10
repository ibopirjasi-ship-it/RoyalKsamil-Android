const app = document.querySelector('#app');
const screens = [...document.querySelectorAll('.screen')];
const navButtons = [...document.querySelectorAll('.bottom-nav button')];

function goTo(id) {
  const next = document.getElementById(id);
  if (!next) return;
  screens.forEach(screen => screen.classList.toggle('active', screen === next));
  navButtons.forEach(button => button.classList.toggle('active', button.dataset.go === id));
  app.dataset.screen = id;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('click', event => {
  const target = event.target.closest('[data-go]');
  if (target) goTo(target.dataset.go);

  const type = event.target.closest('.type');
  if (type) {
    document.querySelectorAll('.type').forEach(item => item.classList.remove('active'));
    type.classList.add('active');
  }
});

document.querySelector('#partner-form').addEventListener('submit', event => {
  event.preventDefault();
  const toast = document.querySelector('#toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
});

if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
