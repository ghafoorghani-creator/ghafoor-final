const CACHE='ghafor-ghani-v5';
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./profile.jpg','./background.jpg','./icon-1024.png','./manifest.webmanifest']))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
