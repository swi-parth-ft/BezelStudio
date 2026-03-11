const header = document.querySelector('.site-header');
const revealTargets = document.querySelectorAll('[data-reveal]');
const heroVideo = document.querySelector('.hero-video');

const GA_MEASUREMENT_ID = 'G-CPP1GVYV96';

function initGoogleAnalytics() {
  const hasValidMeasurementId =
    GA_MEASUREMENT_ID && !GA_MEASUREMENT_ID.includes('REPLACE_WITH_YOUR_ID');
  const isProductionHost = /(^|\.)bezelstudio\.parthant\.com$/i.test(window.location.hostname);

  if (!hasValidMeasurementId || !isProductionHost) {
    return;
  }

  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
    GA_MEASUREMENT_ID
  )}`;
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
}

initGoogleAnalytics();

function hydrateHeroVideo() {
  if (!heroVideo || heroVideo.dataset.loaded === 'true') {
    return;
  }

  heroVideo.querySelectorAll('source[data-src]').forEach((source) => {
    source.src = source.dataset.src;
    source.removeAttribute('data-src');
  });

  heroVideo.load();
  heroVideo.dataset.loaded = 'true';
}

function initHeroVideoPlayback() {
  if (!heroVideo) {
    return;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isSmallViewport = window.matchMedia('(max-width: 960px)').matches;
  const saveDataEnabled = navigator.connection && navigator.connection.saveData;
  const effectiveType = navigator.connection && navigator.connection.effectiveType;
  const slowConnection = effectiveType === 'slow-2g' || effectiveType === '2g' || effectiveType === '3g';

  if (prefersReducedMotion || saveDataEnabled || isSmallViewport || slowConnection) {
    return;
  }

  const playVideo = () => {
    hydrateHeroVideo();
    heroVideo.play().catch(() => {});
  };

  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playVideo();
            videoObserver.disconnect();
          }
        });
      },
      { threshold: 0.45 }
    );
    videoObserver.observe(heroVideo);
  } else {
    playVideo();
  }

  heroVideo.addEventListener('click', playVideo, { once: true });
}

let lastScrollY = 0;
let scrollTicking = false;
let headerScrolled = false;

function applyHeaderScrollState() {
  scrollTicking = false;
  const nextState = lastScrollY > 8;
  if (nextState === headerScrolled) {
    return;
  }
  headerScrolled = nextState;
  header.classList.toggle('is-scrolled', nextState);
}

function onScroll() {
  lastScrollY = window.scrollY || window.pageYOffset || 0;
  if (scrollTicking) {
    return;
  }
  scrollTicking = true;
  window.requestAnimationFrame(applyHeaderScrollState);
}

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
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('load', onScroll);

// Promo Timer Logic
function updatePromoTimer() {
  const timerElements = document.querySelectorAll('#promo-timer, #promo-timer-mobile');
  if (!timerElements.length) return;

  const now = new Date();

  // Calculate next 2 AM
  const target = new Date(now);
  target.setHours(2, 0, 0, 0);

  // If 2 AM has already passed today, set it for tomorrow
  if (now > target) {
    target.setDate(target.getDate() + 1);
  }

  const diff = target - now;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const h = hours.toString().padStart(2, '0');
  const m = minutes.toString().padStart(2, '0');
  const s = seconds.toString().padStart(2, '0');

  timerElements.forEach((timerElement) => {
    timerElement.textContent = `Ends in ${h}:${m}:${s}`;
  });
}


// Update timer immediately and then every second
document.addEventListener('DOMContentLoaded', () => {
  updatePromoTimer();
  setInterval(updatePromoTimer, 1000);
  initHeroVideoPlayback();
});
