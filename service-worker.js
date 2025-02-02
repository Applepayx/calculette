const CACHE_NAME = 'calculator-pwa-cache-v2'; // Change version to update cache
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/ici.png',
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/photos/Photo1.JPG',
  '/photos/Photo2.JPG'
  // Only cache essential media to avoid size limits
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        return cachedResponse || fetch(event.request).catch(() => {
          return caches.match('/index.html'); // Fallback to home page if offline
        });
      })
  );
});