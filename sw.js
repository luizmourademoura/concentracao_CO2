self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('CO2-Calc-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/co2-calculadora-luiz-moura.html',
        '/manifest.json',
        '/icons/icon-192x192.png',
        '/icons/icon-512x512.png',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
