const CACHE_NAME = 'calculator-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/ici.png',  // Icon and app icon
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/videos/video3.mp4',
  '/videos/video4.mp4',
  '/videos/video5.mp4',
  '/videos/video6.mp4',
  '/videos/video7.mp4',
  '/videos/video8.mp4',
  '/videos/video9.mp4',
  '/videos/video10.mp4',
  '/videos/video11.mp4',
  '/photos/Photo1.JPG',
  '/photos/Photo2.JPG',
  '/photos/Photo3.JPG',
  '/photos/Photo4.JPG',
  '/photos/Photo5.JPG',
  '/photos/Photo6.JPG',
  '/photos/Photo7.JPG',
  '/photos/Photo8.JPG',
  '/photos/Photo9.JPG',
  '/photos/Photo10.JPG',
  '/photos/Photo11.JPG',
  '/photos/Photo12.JPG',
  '/photos/Photo13.JPG',
  '/photos/Photo14.JPG',
  // Add all photos used in your gallery
  '/css/styles.css', // Add your CSS if needed, or directly include inline in HTML
  '/js/main.js' // Add your JS file if separated
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
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
  );
});
