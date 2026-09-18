const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('copy-email')?.addEventListener('click', async () => {
  const email = 'Rahilzhk426@gmail.com';
  try {
    await navigator.clipboard.writeText(email);
    document.getElementById('copy-email').textContent = 'Copied ✓';
    setTimeout(() => document.getElementById('copy-email').textContent = 'Copy Email', 1800);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});
