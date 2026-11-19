/* لو عندك sw.js قديم: ما تستبدلوش، ضيف في أول سطر فيه: importScripts("push-sw.js"); */
importScripts("push-sw.js");
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
