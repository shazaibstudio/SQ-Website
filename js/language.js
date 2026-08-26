/**
 * SQ Interactive — Language & Translation System
 * Static JSON-based, no API calls
 * Handles EN/UR switching with localStorage persistence and RTL support
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    defaultLanguage: 'en',
    storageKey: 'sq-language',
    supportedLanguages: ['en', 'ur'],
    namespaces: ['common', 'home', 'services', 'chatbot']
  };

  // Language state
  let currentLanguage = CONFIG.defaultLanguage;
  let translationCache = {};

  /**
   * Initialize the language system
   * - Load persisted language from localStorage
   * - Set initial language
   * - Apply to DOM
   */
  function init() {
    // Check localStorage for saved language
    const savedLanguage = localStorage.getItem(CONFIG.storageKey);
    if (savedLanguage && CONFIG.supportedLanguages.includes(savedLanguage)) {
      currentLanguage = savedLanguage;
    }

    // Apply initial language
    applyLanguage(currentLanguage);

    // Listen for language switch events
    setupLanguageSwitcher();
  }

  /**
   * Setup event listeners for language switcher buttons
   * Buttons use data-lang-switch="en" or data-lang-switch="ur"
   */
  function setupLanguageSwitcher() {
    const buttons = document.querySelectorAll('[data-lang-switch]');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang-switch');
        if (CONFIG.supportedLanguages.includes(lang)) {
          switchLanguage(lang);
        }
      });
    });
  }

  /**
   * Switch to a new language
   * - Update state
   * - Persist to localStorage
   * - Apply to DOM
   * - Fire custom event for chatbot and other listeners
   */
  function switchLanguage(lang) {
    if (lang === currentLanguage) return; // No-op if already active
    
    currentLanguage = lang;
    localStorage.setItem(CONFIG.storageKey, lang);
    applyLanguage(lang);
    
    // Fire custom event so chatbot and other scripts can react
    window.dispatchEvent(new CustomEvent('sq:languagechange', {
      detail: { lang: lang }
    }));
  }

  /**
   * Apply language to the DOM
   * - Set lang attribute
   * - Set dir attribute (LTR for English, RTL for Urdu)
   * - Load relevant JSON files and translate elements
   * - Update button states
   */
  function applyLanguage(lang) {
    // Set document language and direction
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';

    // Update button states (aria-pressed and visual styling)
    updateLanguageButtons(lang);

    // Load and apply translations
    loadAndTranslate(lang);
  }

  /**
   * Update language switcher button states
   */
  function updateLanguageButtons(lang) {
    const buttons = document.querySelectorAll('[data-lang-switch]');
    buttons.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang-switch');
      if (btnLang === lang) {
        btn.setAttribute('aria-pressed', 'true');
        btn.classList.add('sq-lang-btn--active');
      } else {
        btn.setAttribute('aria-pressed', 'false');
        btn.classList.remove('sq-lang-btn--active');
      }
    });
  }

  /**
   * Load translation files and apply to DOM
   * Determines which namespaces are needed based on page
   */
  function loadAndTranslate(lang) {
    // Always load common namespace
    const namespacesToLoad = ['common'];
    
    // Determine current page and add its namespace
    const bodyClass = document.body.className;
    if (bodyClass.includes('page-home')) {
      namespacesToLoad.push('home');
    } else if (bodyClass.includes('page-services')) {
      namespacesToLoad.push('services');
    }
    // Add more conditions as needed for other pages

    // Load all needed JSON files
    Promise.all(namespacesToLoad.map(ns => loadNamespace(lang, ns)))
      .then(() => {
        // Apply translations to all [data-i18n] elements
        translateElements(lang);
      })
      .catch(err => {
        console.warn('Language system: failed to load translations, using fallback English', err);
      });
  }

  /**
   * Load a single namespace JSON file
   * Uses fetch with error handling
   */
  function loadNamespace(lang, namespace) {
    const cacheKey = `${lang}:${namespace}`;
    
    // Return from cache if available
    if (translationCache[cacheKey]) {
      return Promise.resolve();
    }

    const url = `/lang/${lang}/${namespace}.json`;
    
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${namespace} for language ${lang}`);
        }
        return response.json();
      })
      .then(data => {
        translationCache[cacheKey] = data;
      });
  }

  /**
   * Translate all [data-i18n] elements in the DOM
   * Uses dot notation to traverse nested objects:
   * data-i18n="nav.home" → translations.nav.home
   */
  function translateElements(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = getTranslation(key, lang);
      
      if (translation) {
        // Use innerHTML if translation contains HTML (e.g., <em> tags)
        if (translation.includes('<')) {
          el.innerHTML = translation;
        } else {
          el.textContent = translation;
        }
      }
      // If no translation found, keep original content (fallback to English in HTML)
    });
  }

  /**
   * Get translation by dot notation key
   * Example: "nav.home" retrieves obj.nav.home
   */
  function getTranslation(key, lang) {
    const [namespace, ...keyParts] = key.split('.');
    const cacheKey = `${lang}:${namespace}`;
    
    const data = translationCache[cacheKey];
    if (!data) return null;

    // Navigate through nested object using key parts
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

  /**
   * Get current language
   * Used by chatbot and other modules
   */
  function getCurrentLanguage() {
    return currentLanguage;
  }

  /**
   * Format string with replacements
   * Example: "© {year}" with { year: 2025 }
   */
  function formatString(str, replacements) {
    if (!replacements) return str;
    return str.replace(/{(\w+)}/g, (match, key) => replacements[key] || match);
  }

  /**
   * Public API
   */
  window.SQ_Language = {
    init: init,
    switchLanguage: switchLanguage,
    getCurrentLanguage: getCurrentLanguage,
    getTranslation: getTranslation,
    formatString: formatString
  };

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
