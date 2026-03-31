// ===========================
// Scroll Fade-in Animation
// ===========================
const fadeEls = document.querySelectorAll(
  '.checklist__item, .identity__card, .content__card, .result__item, .testimonial__card, .stat, .forwho__yes, .forwho__no'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ===========================
// Sticky CTA (scroll > 400px)
// ===========================
const stickyCta = document.createElement('div');
stickyCta.className = 'sticky-cta';
stickyCta.innerHTML = `
  <a href="#register" class="btn btn--primary">
    今すぐ設計図を無料で受け取る →
  </a>
`;
document.body.appendChild(stickyCta);

const registerSection = document.getElementById('register');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const registerTop = registerSection.getBoundingClientRect().top + scrollY;

  if (scrollY > 400 && scrollY < registerTop - 200) {
    stickyCta.classList.add('show');
  } else {
    stickyCta.classList.remove('show');
  }
}, { passive: true });

// ===========================
// Smooth scroll for anchor links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
