'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0b9e92c84114ed5c4dd2025c3c9e1d2c",
"index.html": "b8e474485ebafed495e83ce7c5a92890",
"/": "b8e474485ebafed495e83ce7c5a92890",
"main.dart.js": "113eff13373b0285ebaa04037a5369fc",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "4f02af022cc0e767961f26574c95b2d6",
"icons/Icon-192.png": "5434b3ce12688c65c825dfb51dca855c",
"icons/Icon-maskable-192.png": "5434b3ce12688c65c825dfb51dca855c",
"icons/Icon-maskable-512.png": "73f74f3e501b158285d2af5e8d5907d2",
"icons/Icon-512.png": "73f74f3e501b158285d2af5e8d5907d2",
"manifest.json": "8c2fe0c7597f7252aa08e9a3c2d6efcb",
"assets/AssetManifest.json": "a4948f7ff79705a072082ed6dfcb112b",
"assets/NOTICES": "5d2bdfa1191fba4f80e7667d279fddd3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/core/assets/images/bg_blue_gradient_r8.svg": "cea86676e658dc6d1227228049990d7f",
"assets/packages/core/assets/images/picture_delivery_completed.png": "63a4af9c6e85e1a117d490abaa8eed7e",
"assets/packages/core/assets/images/bg_top_yellow_gradient.svg": "9078a004b6b41b0de29667f44a263e04",
"assets/packages/core/assets/images/icon_right_enter.svg": "4cd2421fd05874e628349640eeb13534",
"assets/packages/core/assets/images/picture_top_right_image.png": "9882f851635f9899b8e1e17cffea79e4",
"assets/packages/core/assets/images/icon_avatar_dark_blue.png": "658aa7214d1fed66dc940b8fab6cade1",
"assets/packages/core/assets/images/home_light_blue.svg": "545205f9b3390ad0f38164213106b070",
"assets/packages/core/assets/images/icon_home_dark_blue.png": "9473c670d1fdb0dd13a01ca4ed0d3cf7",
"assets/packages/core/assets/images/icon_report_dark_blue.png": "fa365c4f16d6daf0b2a03c7d41037f2d",
"assets/packages/core/assets/images/3.0x/icon_avatar_dark_blue.png": "12ddbe67cea5df7c3b9105e9ca14b0ed",
"assets/packages/core/assets/images/3.0x/icon_home_dark_blue.png": "e6a3c3a3e769cfb41da5cf22f792372f",
"assets/packages/core/assets/images/3.0x/icon_report_dark_blue.png": "d64679ef23914d4f497ca83dd3167c12",
"assets/packages/core/assets/images/3.0x/icon_calendar_dark_blue.png": "361267639476c26e4d089c2b74c4b2f7",
"assets/packages/core/assets/images/icon_calendar_dark_blue.png": "7ecc05faaf67186f81a6049e99d98a15",
"assets/packages/core/assets/images/bg_top_blue_gradient.svg": "a3935d5f42bbd6e061711468b4235b99",
"assets/packages/core/assets/images/icon_app_title.png": "d071b6168d97c89f685fa8b7b12abccc",
"assets/packages/core/assets/images/splash.png": "e889fd3d670d3a937c4b0f7bee2eb19b",
"assets/packages/core/assets/images/picture_delivery_received.png": "59a9389e2293907e0abebba1bcc18368",
"assets/packages/core/assets/images/picture_delivery_send_order.png": "effd0c669cb2d5be052272cc89fa03ee",
"assets/packages/core/assets/images/icon_calendar.svg": "0952832f7a0158f290380b17ea5765cb",
"assets/packages/core/assets/images/icon_report.svg": "0af34b90f9db2605d6fb0e0585a5f3d4",
"assets/packages/core/assets/images/picture_delivery_processing.png": "ad1ac60cdcdf3454b8fd4cd1393439c6",
"assets/packages/core/assets/images/icon_back_yellow.svg": "c2470e4f7a4695dc3587f6e128a1252e",
"assets/packages/core/assets/images/icon_notification.png": "fb8ed97b028c7cae3eefd179f6d35d6c",
"assets/packages/desktop_core/assets/images/icon_show_menu_bottom.svg": "8bb437353f78d435cd64f14a60250ff5",
"assets/packages/desktop_core/assets/images/icon_main_menu_open.png": "18ad9c762274c6644bb94af2027bbb06",
"assets/packages/desktop_core/assets/images/bg_left_nucleus_yellow.svg": "b4cd14e7175f15433239a1b894a553a7",
"assets/packages/desktop_core/assets/images/picture_left_bottom_special_mark.png": "8c3951b2f9b77d2314b7ef2008847e17",
"assets/packages/desktop_core/assets/images/icon_left_menu_calendar.svg": "2c04b874e0cfbee8c3a89588aad97d71",
"assets/packages/desktop_core/assets/images/picture_nucleus_special_mark.png": "6244373a44867fba2ce3a23299b9d7f3",
"assets/packages/desktop_core/assets/images/icon_main_menu_close.svg": "b9a5c39eeb00e1e411865c52976fd69b",
"assets/packages/desktop_core/assets/images/icon_left_menu_home.svg": "6ca9de62e018a6057e37bb508008cf36",
"assets/packages/desktop_core/assets/images/icon_left_menu_email.svg": "2dcffd00dd7381aa99955d1ba6e7b0f3",
"assets/packages/desktop_core/assets/images/bg_left_nucleus_blue.svg": "685fdbde18251bb6136d04c9b6a78f8e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
