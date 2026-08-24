/* ============================================================
   SQ INTERACTIVE — NAV
   Scroll state, mobile toggle, active link detection.
   ============================================================ */

(function () {
  'use strict';

  const nav     = document.querySelector('.sq-nav');
  const toggle  = document.querySelector('.sq-nav__toggle');
  const mobile  = document.querySelector('.sq-nav__mobile');

  if (!nav) return;

  /* ── Scroll state ── */
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Mobile toggle ── */
  if (toggle && mobile) {
    toggle.addEventListener('click', function () {
      const isOpen = mobile.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && mobile.classList.contains('is-open')) {
        mobile.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    /* Close on mobile link click */
    mobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobile.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Active link ── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sq-nav__link, .sq-nav__mobile-link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
      link.classList.add('sq-nav__link--active');
      link.setAttribute('aria-current', 'page');
    }
  });

})();
