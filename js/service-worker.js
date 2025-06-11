/**
 * Service Worker for YOLO Travel Experience
 * Enables offline functionality and faster loading
 */

const CACHE_NAME = 'yolo-cache-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/sport.html',
    '/essen.html',
    '/relax.html',
    '/css/bootstrap.css',
    '/css/style.css',
    '/js/jquery-3.5.1.js',
    '/js/main.js',
    '/img/logo_new.png',
    '/img/favi-icon.png',
    '/fonts/averia-sans-libre-v17-latin-regular.woff2',
    '/fonts/raleway-v28-latin-regular.woff2'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS_TO_CACHE))
    );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
