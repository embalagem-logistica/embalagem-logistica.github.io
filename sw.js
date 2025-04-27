const cacheName = 'embalagemLog';

const filesToCache = [
  '/',
  '/css/main.css',
  '/css/vars.css',
  '/css/queries.css',
  '/js/nav.js'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(async function() {
    const cachedUrl = await fetch(e.request)
    .then(response => {
      return caches.open(cacheName).then(function(cache) {
        cache.put(e.request, response.clone());
        return response;
      });
    })
    .catch(function() {
      return caches.match(e.request);
    })

    return cachedUrl;
  }());
});
