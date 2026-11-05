/* ============================================================
   SQ Interactive — contact form rate limit
   Limit: 3 submissions / 10 minutes per hashed IP.
   Raw IPs are never stored or sent to our analytics — only a
   one-way SHA-256 hash (with site salt) is kept in localStorage.
   GitHub Pages has no server, so this runs in the browser.
   ============================================================ */
(function (global) {
  'use strict';

  var LIMIT = 3;
  var WINDOW_MS = 10 * 60 * 1000; // 10 minutes
  var STORAGE_KEY = 'sq_form_rl_v1';
  var SALT = 'sqinteractive.com|contact|rl|v1';
  var FRIENDLY =
    "You've reached the submission limit, please try again shortly.";

  function toHex(buffer) {
    var bytes = new Uint8Array(buffer);
    var out = '';
    for (var i = 0; i < bytes.length; i++) {
      out += bytes[i].toString(16).padStart(2, '0');
    }
    return out;
  }

  function sha256Hex(text) {
    var data = new TextEncoder().encode(text);
    return crypto.subtle.digest('SHA-256', data).then(toHex);
  }

  function readStore() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { v: 1, buckets: {} };
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return { v: 1, buckets: {} };
      if (!parsed.buckets || typeof parsed.buckets !== 'object') parsed.buckets = {};
      return parsed;
    } catch (e) {
      return { v: 1, buckets: {} };
    }
  }

  function writeStore(store) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch (e) {}
  }

  function prune(hits, now) {
    return (hits || []).filter(function (ts) {
      return typeof ts === 'number' && now - ts < WINDOW_MS;
    });
  }

  function browserFallbackMaterial() {
    var KEY = 'sq_form_rl_nonce';
    try {
      var existing = localStorage.getItem(KEY);
      if (existing && /^[a-f0-9]{32}$/i.test(existing)) return 'fallback:' + existing;
    } catch (e) {}
    var nonce = '';
    try {
      var bytes = new Uint8Array(16);
      crypto.getRandomValues(bytes);
      nonce = toHex(bytes.buffer);
      localStorage.setItem(KEY, nonce);
    } catch (e) {
      nonce = String(Date.now()) + Math.random().toString(16).slice(2);
    }
    return 'fallback:' + nonce;
  }

  function resolveMaterial() {
    // IP is read only to build the hash, then discarded — never written to storage.
    return fetch('https://api.ipify.org?format=json', {
      method: 'GET',
      cache: 'no-store',
      credentials: 'omit'
    })
      .then(function (r) {
        if (!r.ok) throw new Error('ip_lookup_failed');
        return r.json();
      })
      .then(function (j) {
        if (!j || !j.ip || typeof j.ip !== 'string') throw new Error('ip_missing');
        // Basic shape check; value never stored.
        if (!/^[0-9a-fA-F:.]+$/.test(j.ip) || j.ip.length > 45) throw new Error('ip_invalid');
        return 'ip:' + j.ip;
      })
      .catch(function () {
        // Fail open to a browser nonce so a dead IP API does not block real users.
        return browserFallbackMaterial();
      });
  }

  function getKeyHash() {
    return resolveMaterial().then(function (material) {
      return sha256Hex(SALT + '|' + material);
    });
  }

  function check() {
    return getKeyHash().then(function (keyHash) {
      var now = Date.now();
      var store = readStore();
      var hits = prune(store.buckets[keyHash], now);
      store.buckets[keyHash] = hits;
      // Drop empty foreign buckets to keep storage small
      Object.keys(store.buckets).forEach(function (k) {
        store.buckets[k] = prune(store.buckets[k], now);
        if (!store.buckets[k].length && k !== keyHash) delete store.buckets[k];
      });
      writeStore(store);
      var remaining = Math.max(0, LIMIT - hits.length);
      var retryAfterMs = hits.length ? Math.max(0, WINDOW_MS - (now - hits[0])) : 0;
      return {
        allowed: hits.length < LIMIT,
        keyHash: keyHash,
        remaining: remaining,
        retryAfterMs: retryAfterMs,
        limit: LIMIT,
        windowMs: WINDOW_MS,
        message: FRIENDLY
      };
    });
  }

  function record(keyHash) {
    var now = Date.now();
    var store = readStore();
    var hits = prune(store.buckets[keyHash], now);
    hits.push(now);
    store.buckets[keyHash] = hits;
    writeStore(store);
  }

  global.sqFormRateLimit = {
    LIMIT: LIMIT,
    WINDOW_MS: WINDOW_MS,
    MESSAGE: FRIENDLY,
    check: check,
    record: record
  };
})(window);
