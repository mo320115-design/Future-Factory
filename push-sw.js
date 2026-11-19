/* معالج الإشعارات - Bashar Gold */
self.addEventListener("push", function (e) {
  var d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = { title: "Bashar Gold", body: e.data ? e.data.text() : "" }; }
  e.waitUntil(self.registration.showNotification(d.title || "Bashar Gold", {
    body: d.body || "", icon: "icon-192.png", badge: "icon-192.png",
    tag: "bg-new", renotify: true, dir: "rtl", lang: "ar", data: { url: d.url || "./" }
  }));
});
self.addEventListener("notificationclick", function (e) {
  e.notification.close();
  var u = (e.notification.data && e.notification.data.url) || "./";
  e.waitUntil(clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (l) {
    for (var i = 0; i < l.length; i++) { if ("focus" in l[i]) return l[i].focus(); }
    return clients.openWindow(u);
  }));
});
