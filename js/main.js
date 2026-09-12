/* ============================================================
   SQ INTERACTIVE — MAIN
   Scroll progress, footer year, reveal on scroll.
   No heavy dependencies.
   ============================================================ */

(function () {
  'use strict';

  /* ── Scroll progress bar ── */
  const progressBar = document.querySelector('.sq-scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', function () {
      const scrolled = window.scrollY;
      const total    = document.body.scrollHeight - window.innerHeight;
      progressBar.style.width = total > 0 ? (scrolled / total * 100) + '%' : '0%';
    }, { passive: true });
  }

  /* ── Footer year ── */
  const yearEl = document.getElementById('sq-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Reveal on scroll ── */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced && 'IntersectionObserver' in window) {
    const revealEls = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });

    revealEls.forEach(function (el) {
      el.classList.add('will-reveal');
      observer.observe(el);
    });
    
    // Stagger delay for sibling elements
    revealEls.forEach(function (el, i) {
      const siblings = el.parentElement ? el.parentElement.querySelectorAll('[data-reveal]') : [];
      if (siblings.length > 1) {
        const idx = Array.from(siblings).indexOf(el);
        if (idx > 0) el.style.transitionDelay = (idx * 80) + 'ms';
      }
    });
  } else {
    /* Reduced motion or no IntersectionObserver — show everything immediately */
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('is-revealed');
    });
  }

})();
