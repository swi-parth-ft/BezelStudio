const header = document.querySelector('.site-header');
const revealTargets = document.querySelectorAll('[data-reveal]');

const onScroll = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 8);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealTargets.forEach((el) => observer.observe(el));
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);
