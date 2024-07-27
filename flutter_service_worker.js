'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/NOTICES": "8b2d527fc29551a137be7f50787831e7",
"assets/AssetManifest.bin.json": "8d335251f5436bece0f118a1622f89d6",
"assets/FontManifest.json": "75e4d74555b5cdf78e5e46aa7166728c",
"assets/assets/flare/Teddy.flr": "8f695d1f858872f1bae5996ad362dd17",
"assets/assets/images/flutter_web_architecture.png": "e4b380cff4702e2250421be4d14ce7f0",
"assets/assets/images/a14_template_tool/flutter_games_casual_tool.png": "3f518edafb8e76499889d4c4a3b195f8",
"assets/assets/images/a14_template_tool/flutter_news_toolkit.png": "3b6392036c68fe41a027f6acd97f1506",
"assets/assets/images/community/flutteristas.jpeg": "72db17f7b62a3f12de7773f90c272713",
"assets/assets/images/community/flutter_community.png": "363f33f2614c1f0727bb3b8dbc8cc977",
"assets/assets/images/community/pub_dev.png": "e1fbb780e30d1989b5f39f82a3cf10a9",
"assets/assets/images/flutter_vs_rn/has_flutter_passed_rn.png": "d5d00aa0bcd7dc21856ae5f2ee5651e6",
"assets/assets/images/flutter_vs_rn/google_trends.gif": "c8d557182e79708ff93ea16f9eff7564",
"assets/assets/images/flutter_vs_rn/rn_architecture.png": "51f0b70ddc5a0d792be285bb1ab13ba9",
"assets/assets/images/a01_flutter_101/platform_support.png": "f1093826cf5d9e40451f2fb8ddc84a33",
"assets/assets/images/a01_flutter_101/Flutter%2520101.png": "639ad20d5eb993fe40d9c01b2189261f",
"assets/assets/images/google_logo.png": "9763e8dda662b619ba9768fb80ce35f6",
"assets/assets/images/dart_dev_tools.gif": "674961dbd13522a8b2b80b422716a2d4",
"assets/assets/images/about_me.jpg": "a6df0d9d4fbf893b882f083b069aad08",
"assets/assets/images/flutter_is_the_future.png": "ce4c4a0d1dc4db14df64c3f7741453f3",
"assets/assets/images/flutter_for_mobile/platform_channels.png": "2326714a314e40d563bb7594bbbe7c06",
"assets/assets/images/flutter_for_mobile/flutter_architecture.png": "18f23c36da5eaa86f6f4103e75e3b11c",
"assets/assets/images/qrcode_tech-andgar.me.png": "5d5cbbd338fd14410d6b3d8ec71a1072",
"assets/assets/images/flutter_for_toaster/toyota.png": "ca2cc54b26872006e806553c9024d25a",
"assets/assets/images/flutter_for_toaster/apple_tv.gif": "deae583ece60b9bb6c0f372ec774cd81",
"assets/assets/images/flutter_for_toaster/raspberry_pi.jpeg": "d5ef9c15aabe5dadf5316f304718935e",
"assets/assets/images/transition_to_flutter.png": "1a593976c7549bb42aa2574cf050f724",
"assets/assets/images/background_geio24.png": "13b4a5a5208dd33c3d06f03448cbfd9c",
"assets/assets/images/a02_flutter_s_strengths/flutter_foundation.png": "745a5dc845fa6612eca4da765345e25f",
"assets/assets/images/a02_flutter_s_strengths/ff/ff_05_portable.png": "dd4d5f376ee6cb219b1ab635793ff536",
"assets/assets/images/a02_flutter_s_strengths/ff/ff_02_productive.gif": "0c76eab4c31efdc9963f5029360e4a96",
"assets/assets/images/a02_flutter_s_strengths/ff/ff_04_open.png": "a056098c7036b854d0138670832d2d23",
"assets/assets/images/a02_flutter_s_strengths/ff/ff_03_beautiful.gif": "a28b215331eefb9cf28eb8effe237941",
"assets/assets/images/a02_flutter_s_strengths/ff/ff_01_fast.gif": "1c82456c3f1229758c7705c435fcef61",
"assets/assets/images/ubuntu_flutter_installer.jpeg": "ff182da574a1c8bac9e58e99410b7d7a",
"assets/assets/images/apps/realtor.png": "681bbc24570f1a961e9b8b17e9b9f4db",
"assets/assets/images/apps/hamilton.png": "9a4d87176e0502b1644585cf528a7a4d",
"assets/assets/images/apps/the_new_york_times.png": "5d88999537d940138ade8f5e7eac416f",
"assets/assets/images/apps/nubank.png": "cf942fdaae002f624f794aa02167d1d8",
"assets/assets/images/apps/philips.png": "333faf873b43683a8ff67ab8b6909615",
"assets/assets/images/apps/ebay.png": "bf82aaa02c03c0d20e8ed05e912e380d",
"assets/assets/images/apps/reflectly.png": "34678ab8e79b387a5ba9a850b5304eb8",
"assets/assets/images/apps/insight_timer.png": "4411c86d83a692845de729f16495faa7",
"assets/assets/images/apps/alibaba.png": "ba937900eddccfe48721b2168c1148cd",
"assets/assets/images/awesome_flutter.png": "e00d9ac72ad560c9ecb426bd12611e57",
"assets/assets/images/a13_tooling/Visual_Studio_Code_Icon.png": "5403c280490280c1dee3d3cd81687f07",
"assets/assets/images/a13_tooling/Android_Studio_Logo.png": "69bd8c3e215e6cbead52867ccdac9617",
"assets/assets/images/a13_tooling/IntelliJ_IDEA_Icon.png": "3fde7634739d32e389b1c35f9b367470",
"assets/assets/images/drawbacks_of_flutter.png": "93f0460eb5c15cf85939c6f872b30d01",
"assets/assets/images/google_io_extended.png": "070f27d1a98f5185a4dac4ccd3c03240",
"assets/assets/images/about_me_2023.jpg": "5ad4f6b73c422cf4074d475e026e71df",
"assets/assets/images/a03_flutter_around_you/companies/skandia-logo.png": "dd733fc01e5ce02d0dc56bc1552b8d04",
"assets/assets/images/a03_flutter_around_you/companies/LG_logo.png": "660f1cc6382334aca17f44caf138ad4e",
"assets/assets/images/a03_flutter_around_you/companies/Virgin-money-logo.png": "40f98bc107c6516411f32bbde92ddee5",
"assets/assets/images/a03_flutter_around_you/companies/american-airlines-logo.png": "9f1d6bb5dec0608eece2dfb47b289db1",
"assets/assets/images/a03_flutter_around_you/companies/UNIVERSAL-STUDIOS-logo.png": "e1d7a9fbd26bd32ef300a48fa70d8a17",
"assets/assets/images/a03_flutter_around_you/companies/bancolombia_logo.png": "062494e4afdffbe4f993478809a24666",
"assets/assets/images/a03_flutter_around_you/companies/ebay-logo.png": "ed8c52a0c253e41eb8d6ab0bf78af71d",
"assets/assets/images/a03_flutter_around_you/companies/US_Department_of_Veterans_Affairs_logo.png": "8c8d267ffca1e6d3a77f5d2a798208d5",
"assets/assets/images/a03_flutter_around_you/companies/here-logo.png": "ad7cffc2e8c119c3303a6a0bc6cdc2c1",
"assets/assets/images/a03_flutter_around_you/companies/Realtor.com-Logo.png": "982211d2c84fcbf4ffbe75637f064707",
"assets/assets/images/a03_flutter_around_you/companies/TONAL-logo.png": "51be1f5ba2d964688436a33b0e9a8eaf",
"assets/assets/images/a03_flutter_around_you/companies/SUPERCELL-logo.png": "1d3dc67da8c2a4104323daac03d20c21",
"assets/assets/images/a03_flutter_around_you/companies/HAMILTON-logo.png": "1305961fbee26458643c72f1e14786ee",
"assets/assets/images/a03_flutter_around_you/companies/Square-Logo.png": "f84a5909b6b10bac995d7415649fa3ee",
"assets/assets/images/a03_flutter_around_you/companies/TIZEN-logo.png": "b2e593c100d948eebce47624f4ae71ed",
"assets/assets/images/a03_flutter_around_you/companies/Surface-logo.png": "f3d71d63884e033d8ed81e5577f14039",
"assets/assets/images/a03_flutter_around_you/companies/Betterment-Logo.png": "0568f259277d5cf7ca9e13db6c65b02c",
"assets/assets/images/a03_flutter_around_you/companies/tide-logo.png": "705a6facd0a2c5c620fa43036b153364",
"assets/assets/images/a03_flutter_around_you/companies/The_New_York_Times_logo.png": "718e18e58d70d877f1ff375c0e465355",
"assets/assets/images/a03_flutter_around_you/companies/appflowy-logo.png": "82d3bf88d568c2f65d0671881ce4737a",
"assets/assets/images/a03_flutter_around_you/companies/CrowdSource-logo.png": "26c3fec69611889ff03755f01dc1457c",
"assets/assets/images/a03_flutter_around_you/companies/IRobot_logo.png": "f5a7fd0b1ca6f25d90fed9a746de4b2c",
"assets/assets/images/a03_flutter_around_you/companies/PHILIPS-hue.png": "87c75424a89171b057ec3bbbcabee303",
"assets/assets/images/a03_flutter_around_you/companies/Wallace-and-Gromit%2520AR-logo.png": "e339fe660ded172f0e49432f74447c86",
"assets/assets/images/a03_flutter_around_you/companies/WeChat_logo.png": "02a667a868be825511ab23f6a392ea14",
"assets/assets/images/a03_flutter_around_you/companies/ClickUp-logo.png": "c7b3d0df7d073b731e724222a8eb20e2",
"assets/assets/images/a03_flutter_around_you/companies/INVERTASE-logo.png": "43fbd9fcdaa433e83d1b7d044ff7a0e7",
"assets/assets/images/a03_flutter_around_you/companies/Bmw-logo.png": "9002c81a59a4ce489a9a2f1195e95424",
"assets/assets/images/a03_flutter_around_you/companies/Dream11-logo.png": "6b7753092abd02ba49b44e9f6b51cd24",
"assets/assets/images/a03_flutter_around_you/companies/amazon-logo.png": "483fd6a7ea5542b6a9bbb343a90dd0f8",
"assets/assets/images/a03_flutter_around_you/companies/GROUPON-logo.png": "e184b9aea7685bdf5cd3dce75fa03b54",
"assets/assets/images/a03_flutter_around_you/companies/alibaba.com-logo.png": "99ae3a2852ef2f9a1ae2e26fe9dae932",
"assets/assets/images/a03_flutter_around_you/companies/sua-musica-logo.png": "81b483cd55b3cd249815e9a11996a365",
"assets/assets/images/a03_flutter_around_you/companies/kotak-mahindra-bank-logo.png": "6497506f2bed575575ccb44762bf4527",
"assets/assets/images/a03_flutter_around_you/companies/rows-logo.png": "ffae011fd55793bad44857753831227b",
"assets/assets/images/a03_flutter_around_you/companies/Reflectly.png": "0717a5a79cf8d61819e2e8d68877942d",
"assets/assets/images/a03_flutter_around_you/companies/Tencent-logo.png": "f93a4da5f440cb50445e78af4579f65f",
"assets/assets/images/a03_flutter_around_you/companies/Abbey_Road_Studios_Logo.png": "58f87d2a5f31785a719ce8685aa544ce",
"assets/assets/images/a03_flutter_around_you/companies/lotum-logo.png": "3892811c763833361fa7cd89e1f93bcc",
"assets/assets/images/a03_flutter_around_you/companies/Baidu-Logo.png": "64a9d278335af27eb8468a292b711936",
"assets/assets/images/a03_flutter_around_you/companies/nubank-logo.png": "0afdba89ba32298fab32203c43425412",
"assets/assets/images/a03_flutter_around_you/companies/LogicMark_Logo.png": "a238cd65e0c9fd9134d9fb1620295668",
"assets/assets/images/a03_flutter_around_you/companies/Ubuntu-Logo.png": "e6ccea59417ab825485d73ab673878f6",
"assets/assets/images/a03_flutter_around_you/companies/TOYOTA-logo.png": "2adac249162f3e0531853e710540dc19",
"assets/assets/images/a03_flutter_around_you/companies/Credit-Agricole-Logo.png": "12718914fd66651db4c0f9abc0ff86e0",
"assets/assets/images/a03_flutter_around_you/companies/ByteDance.png": "87c57bc92f28bd8b4f7aa8481f047e86",
"assets/assets/images/a03_flutter_around_you/companies/SONOS-logo.png": "a5a62d8587d3eec4bc6c38b99d9343df",
"assets/assets/images/a03_flutter_around_you/companies/MGM-Resorts-logo.png": "2a1c229316fb3fcf787fdc8dff9de796",
"assets/assets/images/a03_flutter_around_you/google/crowdsource_logo.png": "b9de146687f69faa8581088815d3c94f",
"assets/assets/images/a03_flutter_around_you/google/google_earth_logo.png": "89626c583b83b9fe4219e607e7256077",
"assets/assets/images/a03_flutter_around_you/google/google_ads_logo.png": "151571dc0c19ee06c109204f98adf22d",
"assets/assets/images/a03_flutter_around_you/google/youtube_create_logo.png": "9208bf670efcd3e95eada591b160d8f4",
"assets/assets/images/a03_flutter_around_you/google/readalong_logo.png": "3c58b48cf509ab9869eea42333f087a5",
"assets/assets/images/a03_flutter_around_you/google/familylink_logo.png": "242cf28a0a846cbf2a4f89aa1520914c",
"assets/assets/images/a03_flutter_around_you/google/google_ads.png": "0d4d9d0c66ab96bd3d6ec407f35f72ca",
"assets/assets/images/a03_flutter_around_you/google/google_one_logo.png": "1a15b9967f3240c92601832dda4a7063",
"assets/assets/images/a03_flutter_around_you/google/google_classroom_logo.png": "6f5c8813595834792fc5c9d0903db7b1",
"assets/assets/images/a03_flutter_around_you/google/google_analytics_logo.png": "e96a0684c4b30b593e4dca25b55a0296",
"assets/assets/images/a03_flutter_around_you/google/google_pay_logo.png": "d46375dff628ebf41c5deb3897dd26ae",
"assets/assets/images/a03_flutter_around_you/google/google_cloudsearch_logo.png": "5ea306ae401bee3fb78549f787f5f0bf",
"assets/assets/images/a03_flutter_around_you/google/stadia.png": "46bdfd2f5974dcc73951eeafc2cc9f4d",
"assets/assets/images/a03_flutter_around_you/google/google_assistant.png": "494c37b107a135959a130160e9edd78b",
"assets/assets/icons/social_media/x-social-media-black-icon.svg": "122b86294c5e008d758bc286e2aefaf8",
"assets/assets/icons/social_media/github_icon.svg": "07883e93734b98cae0f7b9c55d287250",
"assets/assets/icons/social_media/medium_icon.svg": "1b6f56310ce357b2965ad06cd68767af",
"assets/assets/icons/social_media/youtube_icon.svg": "0628d6e0a002569ccb2c6f722dfbd0f4",
"assets/assets/icons/social_media/twitter_icon.svg": "2f105a3b77a41e7384dca8e706209d0b",
"assets/assets/icons/programming_language/dart_logo.svg": "6c0801f1f745f38855fb372297924347",
"assets/assets/translations/es-ES.json": "8c6befc97e7f1b56648fb0407d82de5c",
"assets/assets/translations/en-US.json": "4abd821a09101659c317b4262346c4f2",
"assets/assets/gif/Sorry_ASL.gif": "a5aa0a62877fd7ab1fb07d7442053158",
"assets/assets/gif/Question.gif": "dcda054a7075fd3ff150df4dcb7935d3",
"assets/fonts/ProductSans-BlackItalic.ttf": "d165693949a2366b8baef8ec592417dd",
"assets/fonts/ProductSans-Medium.ttf": "9c51beb79b8ab173abd924ce39178f0b",
"assets/fonts/ProductSans-Black.ttf": "909eeb19f58cc8c0bc45422f2745cc8a",
"assets/fonts/ProductSans-Regular.ttf": "b61c0ab33a818a0162f3e868babcef4b",
"assets/fonts/ProductSans-Bold.ttf": "a19a7b108b2e3961fc855c6ea5a6546f",
"assets/fonts/ProductSans-MediumItalic.ttf": "b7efc2304b5103df6a75befa88d42d40",
"assets/fonts/MaterialIcons-Regular.otf": "0c1207583d52a5e22964ba37cc7604c4",
"assets/fonts/ProductSans-Thin.ttf": "3c36b2574c62d41428b496b7512e952d",
"assets/fonts/ProductSans-Light.ttf": "5ea2ab343da06f7eb96ea959895665ea",
"assets/fonts/ProductSans-ThinItalic.ttf": "4b3b9e82158bd2a00b97eba4dd8d6cfa",
"assets/fonts/ProductSans-Italic.ttf": "af05b47de35fd5a5960ad1e440a4c0c7",
"assets/fonts/ProductSans-BoldItalic.ttf": "281acf49bbcece01beff18a4a59f9bfd",
"assets/fonts/ProductSans-LightItalic.ttf": "a7b47650ea4bfb29cc284c9d383a4db1",
"assets/AssetManifest.json": "c2017b031cab579ee2561c9aa7472bf1",
"assets/AssetManifest.bin": "e09af0975815879b98afa287b113a52f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/water.glsl": "62892fe68ff4436bf381a74a29731d8c",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"index.html": "a17335ea985df16bd173596936f68f70",
"/": "a17335ea985df16bd173596936f68f70",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"flutter_bootstrap.js": "b6b4e04046ad1d49a95d57a0bfa0dbae",
"main.dart.js": "e068febccf5705108f18b4be982bc0f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c81f25a8d1362ede544c1913a9c96ac1",
"version.json": "8f16ce436d486a373fa095f28bfede0b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
