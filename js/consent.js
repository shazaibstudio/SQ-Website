/* ============================================================
   SQ INTERACTIVE — COOKIE CONSENT (Google Consent Mode v2)
   Defaults (all denied) are set inline in <head> BEFORE gtag.js.
   This file renders the banner, stores the choice in localStorage
   ("sq_consent_v1") and updates consent. Hotjar is gated in analytics.js.
   ============================================================ */
(function () {
  'use strict';
  var KEY = 'sq_consent_v1';
  var MAX_AGE = 1000 * 60 * 60 * 24 * 180; // re-ask after ~6 months

  function read() {
    try {
      var c = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (c && typeof c.analytics === 'boolean' && (Date.now() - c.ts) < MAX_AGE) return c;
    } catch (e) {}
    return null;
  }
  function save(analytics) {
    var c = { analytics: !!analytics, ts: Date.now(), v: 1 };
    try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) {}
    var state = analytics ? 'granted' : 'denied';
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: state, ad_storage: 'denied',
        ad_user_data: 'denied', ad_personalization: 'denied'
      });
    }
    try { window.dispatchEvent(new CustomEvent('sq:consent', { detail: c })); } catch (e) {}
    if (!analytics) clearAnalyticsCookies();
  }
  function clearAnalyticsCookies() {
    var host = location.hostname, parts = host.split('.');
    var domains = ['', host, '.' + host];
    if (parts.length > 1) domains.push('.' + parts.slice(-2).join('.'));
    document.cookie.split(';').forEach(function (kv) {
      var name = kv.split('=')[0].trim();
      if (/^(_ga|_gid|_gat|_hj|_cs_|_pk_)/.test(name)) {
        domains.forEach(function (d) {
          document.cookie = name + '=; Max-Age=0; path=/' + (d ? '; domain=' + d : '');
        });
      }
    });
  }

  var banner, lastFocus;
  function build() {
    banner = document.createElement('div');
    banner.className = 'sq-consent';
    banner.id = 'sq-consent';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-modal', 'false');
    banner.setAttribute('aria-labelledby', 'sq-consent-title');
    banner.setAttribute('aria-describedby', 'sq-consent-desc');
    banner.hidden = true;
    banner.innerHTML =
      '<div class="sq-consent__inner">' +
        '<h2 class="sq-consent__title" id="sq-consent-title">Cookies on this site</h2>' +
        '<p class="sq-consent__text" id="sq-consent-desc">We use essential storage to run this site and, with your permission, analytics cookies (Google Analytics, Hotjar) to understand how it\u2019s used. <a href="/cookie-policy/" class="sq-consent__link">Cookie Policy</a></p>' +
        '<div class="sq-consent__panel" id="sq-consent-panel" hidden>' +
          '<fieldset class="sq-consent__fieldset"><legend class="sq-consent__legend">Cookie settings</legend>' +
            '<label class="sq-consent__opt"><input type="checkbox" checked disabled> <span><strong>Essential</strong> \u2014 always on</span></label>' +
            '<label class="sq-consent__opt"><input type="checkbox" id="sq-consent-analytics"> <span><strong>Analytics</strong> \u2014 Google Analytics &amp; Hotjar (off by default)</span></label>' +
          '</fieldset>' +
        '</div>' +
        '<div class="sq-consent__actions">' +
          '<button type="button" class="sq-consent__btn sq-consent__btn--primary" data-act="accept">Accept</button>' +
          '<button type="button" class="sq-consent__btn" data-act="reject">Reject</button>' +
          '<button type="button" class="sq-consent__btn" data-act="settings" aria-expanded="false" aria-controls="sq-consent-panel">Settings</button>' +
          '<button type="button" class="sq-consent__btn sq-consent__btn--primary" data-act="save" hidden>Save</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(banner);
    banner.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-act]'); if (!b) return;
      var act = b.getAttribute('data-act');
      if (act === 'accept') { save(true); close(); }
      else if (act === 'reject') { save(false); close(); }
      else if (act === 'settings') { togglePanel(); }
      else if (act === 'save') { save(document.getElementById('sq-consent-analytics').checked); close(); }
    });
    banner.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && read()) close();
    });
  }
  function togglePanel(force) {
    var panel = banner.querySelector('#sq-consent-panel');
    var btn = banner.querySelector('[data-act="settings"]');
    var show = typeof force === 'boolean' ? force : panel.hidden;
    panel.hidden = !show;
    btn.setAttribute('aria-expanded', String(show));
    banner.querySelector('[data-act="save"]').hidden = !show;
    if (show) banner.querySelector('#sq-consent-analytics').focus();
  }
  function open(withSettings) {
    if (!banner) build();
    var c = read();
    banner.querySelector('#sq-consent-analytics').checked = !!(c && c.analytics);
    lastFocus = document.activeElement;
    banner.hidden = false;
    togglePanel(!!withSettings);
    if (!withSettings) banner.querySelector('[data-act="accept"]').focus({ preventScroll: true });
  }
  function close() {
    banner.hidden = true;
    if (lastFocus && lastFocus.focus && lastFocus !== document.body) lastFocus.focus({ preventScroll: true });
  }

  window.SQConsent = { open: open, get: read };
  function init() {
    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-cookie-settings]');
      if (t) { e.preventDefault(); open(true); }
    });
    if (!read()) open(false);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
