/* ============================================================
   SQ INTERACTIVE — ANALYTICS & TRACKING
   GA4: G-GYP19H93BR
   Hotjar / ContentSquare: hjid 6545315
   ============================================================ */
(function () {
  'use strict';

  /* ── Hotjar / Contentsquare — loaded ONLY after analytics consent ──
     Consent is handled by js/consent.js (localStorage key "sq_consent_v1").
     Nothing below runs until the visitor clicks Accept. */
  var hjLoaded = false;
  function loadHotjar() {
    if (hjLoaded) return;
    hjLoaded = true;
    (function(c,s,q,u,a,r,e){
      c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
      c._hjSettings={hjid:a};
      r=s.getElementsByTagName('head')[0];
      e=s.createElement('script');
      e.async=true;
      e.src=q+c._hjSettings.hjid+u;
      r.appendChild(e);
    })(window,document,'https://static.hj.contentsquare.net/c/csq-','.js',6545315);
  }
  function analyticsGranted() {
    try {
      var c = JSON.parse(localStorage.getItem('sq_consent_v1') || 'null');
      return !!(c && c.analytics === true && (Date.now() - c.ts) < 15552000000);
    } catch (e) { return false; }
  }
  if (analyticsGranted()) loadHotjar();
  window.addEventListener('sq:consent', function (e) {
    if (e.detail && e.detail.analytics === true) loadHotjar();
  });

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

  /* ── Lead / traffic context (no PII) ──
     First-touch UTM + referrer kept for the session so form events
     still carry source after the visitor navigates to /contact/. */
  var FIRST_TOUCH_KEY = 'sq_first_touch_v1';

  function readUrlParams() {
    var p = new URLSearchParams(window.location.search);
    var refHost = '';
    try {
      if (document.referrer) refHost = new URL(document.referrer).hostname;
    } catch (e) {}
    return {
      page_path: window.location.pathname,
      page_location: window.location.href.split('#')[0],
      page_title: document.title,
      utm_source: p.get('utm_source') || undefined,
      utm_medium: p.get('utm_medium') || undefined,
      utm_campaign: p.get('utm_campaign') || undefined,
      utm_content: p.get('utm_content') || undefined,
      utm_term: p.get('utm_term') || undefined,
      gclid: p.get('gclid') || undefined,
      referrer_host: refHost || undefined,
      traffic_source: p.get('utm_source') || refHost || '(direct)'
    };
  }

  function getFirstTouch() {
    try {
      var raw = sessionStorage.getItem(FIRST_TOUCH_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    var ctx = readUrlParams();
    try { sessionStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(ctx)); } catch (e) {}
    return ctx;
  }

  function leadContext(extra) {
    var first = getFirstTouch();
    var now = readUrlParams();
    var out = {
      event_category: 'Lead',
      page_path: now.page_path,
      page_location: now.page_location,
      page_title: now.page_title,
      traffic_source: first.traffic_source || now.traffic_source,
      utm_source: first.utm_source || now.utm_source,
      utm_medium: first.utm_medium || now.utm_medium,
      utm_campaign: first.utm_campaign || now.utm_campaign,
      utm_content: first.utm_content || now.utm_content,
      utm_term: first.utm_term || now.utm_term,
      gclid: first.gclid || now.gclid,
      referrer_host: first.referrer_host || now.referrer_host,
      landing_page: first.page_path
    };
    if (extra) {
      Object.keys(extra).forEach(function(k) {
        if (extra[k] !== undefined && extra[k] !== null && extra[k] !== '') out[k] = extra[k];
      });
    }
    return out;
  }

  function sendLeadEvent(name, extra) {
    if (typeof gtag === 'undefined') return;
    gtag('event', name, leadContext(extra));
  }

  // Used by contact form success/fail handlers (no PII).
  window.sqTrackLead = function(name, extra) {
    sendLeadEvent(name, extra || {});
  };
  window.sqLeadContext = leadContext;

  /* ── Contact / form page views ── */
  function trackContactPageView() {
    var path = window.location.pathname.replace(/\/+$/, '') || '/';
    var isContact = path === '/contact' || path.indexOf('/contact/') === 0;
    var isThankYou = path === '/thank-you' || path.indexOf('/thank-you') === 0 ||
      /thank-you\.html$/i.test(window.location.pathname);
    if (!isContact && !isThankYou) return;
    sendLeadEvent('contact_page_view', {
      form_page: isThankYou ? 'thank_you' : 'contact',
      event_label: isThankYou ? 'thank_you' : 'contact'
    });
  }

  /* ── Form tracking ── */
  function trackForms() {
    document.querySelectorAll('form').forEach(function(form, i) {
      var formId = form.id || form.getAttribute('name') || ('form_' + (i + 1));
      var started = false;
      form.querySelectorAll('input,textarea,select').forEach(function(inp) {
        inp.addEventListener('focus', function() {
          if (!started) {
            started = true;
            sendLeadEvent('form_start', {
              form_id: formId,
              event_label: formId
            });
          }
        });
      });
      form.addEventListener('submit', function() {
        var projectType = '';
        try {
          var sel = form.querySelector('[name="project_type"]');
          if (sel && sel.value) projectType = String(sel.value).slice(0, 80);
        } catch (e) {}
        sendLeadEvent('form_submit', {
          form_id: formId,
          event_label: formId,
          project_type: projectType || undefined,
          submission_status: 'attempt'
        });
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
    getFirstTouch(); // capture landing UTMs early
    trackWebVitals();
    trackPageLoad();
    trackErrors();
    trackEngagement();
    trackCTAs();
    trackWhatsApp();
    trackContactPageView();
    trackForms();
    trackVideos();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
