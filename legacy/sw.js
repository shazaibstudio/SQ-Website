const CACHE_NAME = 'sq-interactive-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/services.html',
  '/portfolio.html',
  '/about.html',
  '/contact.html',
  '/case-study.html',
  '/roi-calculator.html',
  '/css/main.css',
  '/js/main.js',
  '/images/no-background.png',
  '/favicon_192.png',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/aos@2.3.1/dist/aos.css',
  'https://unpkg.com/aos@2.3.1/dist/aos.js',
  'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        // Handle home redirects
        const url = new URL(event.request.url);
        if (url.pathname === '/' || url.pathname === '/home' || url.pathname === '/home.html') {
          return caches.match('/index.html') || fetch('/index.html');
        }
        
        return fetch(event.request).catch(() => {
          // Return 404 page for failed requests
          if (event.request.destination === 'document') {
            return caches.match('/404.html');
          }
        });
      })
  );
});