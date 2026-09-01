/**
 * SQ Interactive — Language & Translation System
 * Static JSON-based, no API calls
 * Handles EN/UR switching with localStorage persistence and RTL support
 */

(function() {
  'use strict';

  const CONFIG = {
    defaultLanguage: 'en',
    storageKey: 'sq-language',
    supportedLanguages: ['en', 'ur']
  };

  let currentLanguage = CONFIG.defaultLanguage;
  let translationCache = {};

  // Determine page namespace from body class
  function getPageNamespace() {
    const bodyClass = document.body.className;
    if (bodyClass.includes('page-home')) return 'home';
    if (bodyClass.includes('page-services')) return 'services';
    if (bodyClass.includes('page-work')) return 'work';
    if (bodyClass.includes('page-about')) return 'about';
    if (bodyClass.includes('page-how-we-work')) return 'how-we-work';
    if (bodyClass.includes('page-contact')) return 'contact';
    return 'common';
  }

  function init() {
    const savedLanguage = localStorage.getItem(CONFIG.storageKey);
    if (savedLanguage && CONFIG.supportedLanguages.includes(savedLanguage)) {
      currentLanguage = savedLanguage;
    }
    applyLanguage(currentLanguage);
    setupLanguageSwitcher();
  }

  function setupLanguageSwitcher() {
    document.querySelectorAll('[data-lang-switch]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang-switch');
        if (CONFIG.supportedLanguages.includes(lang)) {
          switchLanguage(lang);
        }
      });
    });
  }

  function switchLanguage(lang) {
    if (lang === currentLanguage) return;
    currentLanguage = lang;
    localStorage.setItem(CONFIG.storageKey, lang);
    applyLanguage(lang);
    window.dispatchEvent(new CustomEvent('sq:languagechange', { detail: { lang } }));
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';
    updateLanguageButtons(lang);
    loadAndTranslate(lang);
  }

  function updateLanguageButtons(lang) {
    document.querySelectorAll('[data-lang-switch]').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang-switch');
      btn.setAttribute('aria-pressed', btnLang === lang ? 'true' : 'false');
      btn.classList.toggle('sq-lang-btn--active', btnLang === lang);
    });
  }

  function loadAndTranslate(lang) {
    const namespaces = ['common', getPageNamespace()];
    Promise.all(namespaces.map(ns => loadNamespace(lang, ns)))
      .then(() => translateElements(lang))
      .catch(err => console.warn('Translation load failed:', err));
  }

  function loadNamespace(lang, namespace) {
    const cacheKey = `${lang}:${namespace}`;
    if (translationCache[cacheKey]) return Promise.resolve();

    return fetch(`/lang/${lang}/${namespace}.json`)
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(data => { translationCache[cacheKey] = data; });
  }

  function translateElements(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const translation = getTranslation(el.getAttribute('data-i18n'), lang);
      if (translation) {
        if (translation.includes('<')) {
          el.innerHTML = translation;
        } else {
          el.textContent = translation;
        }
      }
    });
  }

  function getTranslation(key, lang) {
    const [namespace, ...keyParts] = key.split('.');
    const data = translationCache[`${lang}:${namespace}`];
    if (!data) return null;

    let value = data;
    for (const part of keyParts) {
      if (value && typeof value === 'object' && part in value) {
        value = value[part];
      } else {
        return null;
      }
    }
    return value;
  }

  window.SQ_Language = {
    init,
    switchLanguage,
    getCurrentLanguage: () => currentLanguage,
    getTranslation
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
