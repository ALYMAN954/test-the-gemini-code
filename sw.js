// Minimal service worker: lets the browser offer "install app". It does not cache anything,
// so the site always loads the latest version.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
