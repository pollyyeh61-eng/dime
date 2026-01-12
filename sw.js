// dime 專屬簡化版 sw.js
self.addEventListener('install', (event) => {
  self.skipWaiting(); 
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
