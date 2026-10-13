// Navigation scroll effect
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Mobile menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Simple form handler (demo)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Message sent ✓';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      form.reset();
    }, 2500);
  });
}
