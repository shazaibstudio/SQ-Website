/* ============================================================
   SQ INTERACTIVE — ANALYTICS & TRACKING
   GA4: G-GYP19H93BR
   Hotjar / ContentSquare: hjid 6545315
   ============================================================ */
(function () {
  'use strict';

  /* ── Hotjar / ContentSquare ── */
  (function(c,s,q,u,a,r,e){
    c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
    c._hjSettings={hjid:6545315};
    r=s.getElementsByTagName('head')[0];
    e=s.createElement('script');
    e.async=true;
    e.src=q+c._hjSettings.hjid+u;
    r.appendChild(e);
  })(window,document,'https://static.hj.contentsquare.net/uxa/','.js');

  /* ContentSquare tag */
  (function(){
    var cs=document.createElement('script');
    cs.async=true;
    cs.src='https://t.contentsquare.net/uxa/c97b2acc48ee8.js';
    document.head.appendChild(cs);
  })();

  /* ── Core Web Vitals ── */
  function trackWebVitals() {
    if (!('PerformanceObserver' in window)) return;

    try {
      new PerformanceObserver(function(list) {
        var last = list.getEntries().slice(-1)[0];
        if (typeof gtag !== 'undefined') {
          gtag('event', 'LCP', { event_category: 'Web Vitals', value: Math.round(last.startTime), non_interaction: true });
        }
      }).observe({ type: 'largest-contentful-paint', buffered: true });
    } catch(e) {}

    try {
      new PerformanceObserver(function(list) {
        var fi = list.getEntries()[0];
        if (typeof gtag !== 'undefined') {
          gtag('event', 'FID', { event_category: 'Web Vitals', value: Math.round(fi.processingStart - fi.startTime), non_interaction: true });
        }
      }).observe({ type: 'first-input', buffered: true });
    } catch(e) {}

    try {
      var cls = 0;
      new PerformanceObserver(function(list) {
        list.getEntries().forEach(function(e) { if (!e.hadRecentInput) cls += e.value; });
        if (typeof gtag !== 'undefined') {
          gtag('event', 'CLS', { event_category: 'Web Vitals', value: Math.round(cls * 1000), non_interaction: true });
        }
      }).observe({ type: 'layout-shift', buffered: true });
    } catch(e) {}
  }

  /* ── Page load timing ── */
  function trackPageLoad() {
    window.addEventListener('load', function() {
      var nav = performance.getEntriesByType('navigation')[0];
      if (!nav || typeof gtag === 'undefined') return;
      gtag('event', 'page_load_time',    { event_category: 'Performance', value: Math.round(nav.loadEventEnd - nav.fetchStart), non_interaction: true });
      gtag('event', 'dom_content_loaded',{ event_category: 'Performance', value: Math.round(nav.domContentLoadedEventEnd - nav.fetchStart), non_interaction: true });
      gtag('event', 'ttfb',              { event_category: 'Performance', value: Math.round(nav.responseStart - nav.fetchStart), non_interaction: true });
    });
  }

  /* ── JS error tracking ── */
  function trackErrors() {
    window.addEventListener('error', function(e) {
      if (typeof gtag !== 'undefined') gtag('event', 'javascript_error', { event_category: 'Error', event_label: e.message, non_interaction: true });
    });
    window.addEventListener('unhandledrejection', function(e) {
      if (typeof gtag !== 'undefined') gtag('event', 'promise_rejection', { event_category: 'Error', event_label: String(e.reason), non_interaction: true });
    });
  }

  /* ── Scroll depth ── */
  function trackEngagement() {
    var maxScroll = 0;
    var milestones = [25, 50, 75, 90];
    window.addEventListener('scroll', function() {
      var pct = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (pct > maxScroll) {
        maxScroll = pct;
        if (milestones.includes(pct) && typeof gtag !== 'undefined') {
          gtag('event', 'scroll_depth', { event_category: 'Engagement', event_label: pct + '%', value: pct, non_interaction: true });
        }
      }
    }, { passive: true });

    /* Time on page */
    var t0 = Date.now();
    window.addEventListener('beforeunload', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'time_on_page', { event_category: 'Engagement', value: Math.round((Date.now() - t0) / 1000), non_interaction: true });
      }
    });
  }

  /* ── CTA click tracking ── */
  function trackCTAs() {
    document.addEventListener('click', function(e) {
      var el = e.target.closest('[data-cta]');
      if (el && typeof gtag !== 'undefined') {
        gtag('event', 'cta_click', {
          event_category: 'CTA',
          event_label: el.getAttribute('data-cta'),
          cta_text: el.textContent.trim().slice(0, 60),
          page_path: window.location.pathname
        });
      }
    });
  }

  /* ── WhatsApp click tracking ── */
  function trackWhatsApp() {
    document.addEventListener('click', function(e) {
      var el = e.target.closest('a[href*="wa.me"]');
      if (el && typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
          event_category: 'Contact',
          event_label: window.location.pathname,
          non_interaction: false
        });
      }
    });
  }

  /* ── Form tracking ── */
  function trackForms() {
    document.querySelectorAll('form').forEach(function(form, i) {
      var started = false;
      form.querySelectorAll('input,textarea,select').forEach(function(inp) {
        inp.addEventListener('focus', function() {
          if (!started) {
            started = true;
            if (typeof gtag !== 'undefined') gtag('event', 'form_start', { event_category: 'Form', event_label: 'Form ' + (i+1) });
          }
        });
      });
      form.addEventListener('submit', function() {
        if (typeof gtag !== 'undefined') gtag('event', 'form_submit', { event_category: 'Form', event_label: 'Form ' + (i+1) });
      });
    });
  }

  /* ── Video tracking ── */
  function trackVideos() {
    document.querySelectorAll('video').forEach(function(v, i) {
      v.addEventListener('play', function() {
        if (typeof gtag !== 'undefined') gtag('event', 'video_play', { event_category: 'Video', event_label: 'Video ' + (i+1), non_interaction: true });
      });
      v.addEventListener('ended', function() {
        if (typeof gtag !== 'undefined') gtag('event', 'video_complete', { event_category: 'Video', event_label: 'Video ' + (i+1), non_interaction: true });
      });
    });
  }

  /* ── Init ── */
  function init() {
    trackWebVitals();
    trackPageLoad();
    trackErrors();
    trackEngagement();
    trackCTAs();
    trackWhatsApp();
    trackForms();
    trackVideos();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
