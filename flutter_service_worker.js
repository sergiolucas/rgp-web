'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "62cceed1036b6ff04f0dbcd8715e8fa9",
"version.json": "0cd0c6f01e7da82264c98bb79f41f8d5",
"index.html": "aa5cb024182f26d6fb0137aae8b6c028",
"/": "aa5cb024182f26d6fb0137aae8b6c028",
"main.dart.js": "337fb4fafa3ea274e2302deeec8ed234",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d1d437f39577e7226d08d914fe3c5a16",
".git/config": "3cd84fbc05c97bb6489399d9d07543c5",
".git/objects/59/12a2aa5bf1d983e85bf5a5c47c554b23a69b70": "a7b463f52738044c752ffe2a6c74a9f6",
".git/objects/92/20529dec20620bd5168c0d295244635c978b1e": "bc80df5341a54c177fdeb33c4657690e",
".git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
".git/objects/6f/0e199b234e63280ff67557f7ec60d5f836cae2": "ff2acba4e246890dd06a4000a540485e",
".git/objects/04/a1ae69d336e7fe047b486e31951fd5df513efb": "816e0b170c036d2da0b13a51cfcc3897",
".git/objects/32/26a1896b30572c570f0cd781896805aaeccdf9": "092d7ed7d10de73d39ed1a200fe2106a",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/e0e4ec1e194e9d52798c93301b5f40faeca791": "af26790caebd7f07495fe1f535c23c2e",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/5f/c993b8fb734148f22ae4927c7d0ce1d280ce0a": "ede975df0c80d4b96d869b847658f6a4",
".git/objects/33/05f3a7d369fb26e9050b32aff3eff8df7aa0d2": "4a2b159547fa1eb441306dcaab255f29",
".git/objects/05/105ae35ea4677cf10a220ea9b6b78d0e9dd821": "2acbde02d5c7b0880d1de1ef5d4ff7c4",
".git/objects/02/d2e0468b6d269c11664802f7770f538e1aa88b": "7deb887c5c5d4ad59737d855c1b0491a",
".git/objects/b2/7df625c5199e5f38ba45257f79157dc5c30b75": "5448c76d95ea74f588922deb559f4d0a",
".git/objects/d9/d056074e741bca7a94cbab432fa86e225e5371": "c67a47aef98bd3f87f9bee55ac7413fe",
".git/objects/bb/df68c9c5286bcb3a03c3ef08fe3ddbd8bbb62e": "b268e2afb72f00e2d64c315b34e747e0",
".git/objects/bb/f951dacaaa570d72cf37bae866840c99370983": "c6d224585c63cec4ed270815843e2596",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/580e054ad6d9915b641e1823bfb9404940bdfc": "b333ae9dbf3648f2c3ec7d0f334c01ad",
".git/objects/df/7951f0e628525c1906bb5ac4ab4204bd13bcc8": "38adb779d7d16062412a4ccd43384852",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/a7a378b6fbc4131f310c6c0f24524fbada1a53": "b6128ccb85436b2b9c0654598378a6e2",
".git/objects/bd/951f4b9891edc113616e1e4cd17729ddd474c2": "439abddcb3cde39d7afb63d0303407e1",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/621bfa9ad98070883a2b3e3be05fce2ef62360": "cc2f5b10307ea46007605344e7ee6eff",
".git/objects/e5/bc085760952e2019e60530ea4314c69f1191da": "98aad41fa2c8f7b2b7c269b96cd1e204",
".git/objects/f4/c41f4541102852d81fdd7756d64e2ea4f8c2b6": "b3f71a07593c81467c74388f393979ea",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/9e940f205ff18e4ce61dc4524f228e869a2858": "9a4d61dc7c59bc5db0234a3f2718da24",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/1c0ab9d7f9ba8bd3c4e35492666b08d59a972d": "e9756b4f8d68ccdfb3b15a4891beca57",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/fe/1cb6b96954db229eadea7bbbb6d0a57395af75": "22a05968cddb96b28bbb92c30b31ce5b",
".git/objects/c8/70a48bdfd781a2716b38889b97ac50fb1bc5c1": "c587c29cc0684de370fb06e053a8111a",
".git/objects/ed/6c416a3547ee8aa67a64338e374803ec9f7653": "48c8ec64455c87cad715896dc18cbf59",
".git/objects/4e/e42ded5055ac05b059bc50f88d033be71639f5": "545fc5f3064157181caef3c290c1b2a0",
".git/objects/4e/0feac4945767444d034f09673a79286a1825ce": "f9cda13db403c84639fea44d442be423",
".git/objects/20/56218c86880e8fff61dd7c0f8507c2f3d08940": "dff5c3fe05e92328ad9d9e8635fbaa7f",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/27/23ef5ce6ad218f3e0a8218e617dd709308caba": "d0785bd84718fc9d8d39135770e7369f",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/89/95a0214a6b8c0645e4b488864ec6ea56217934": "29747fff88cfdc250e2603b45823ba5e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ca88cf59a414210c0f51aaf21017c6be88615f": "3a4f060c9264002b8b0e7bbfa8f1a6bc",
".git/objects/75/d0fee2dc63e0853800b9011d252d4c46a973bb": "47dff445a2cc724f7427a8d0079203dd",
".git/objects/81/785e6ef0d1061a5196ff2cce6cb71ad15ba380": "a48cd91cfff83e43d0b51c665abbdd05",
".git/objects/2a/f57630138cccf1b5eab26a7dbbeab6b532f04b": "e67328da9f81c30cf79507630e68c119",
".git/objects/88/67ae8d1ce3f1508246868c4af24c764cb26a92": "3b95648fd7a0b5ed278d9a7cdcc03b93",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/1a21509404dc778e5cffd4806eae88d2e4ba2d": "d820afba59dda1268501c5c7bea652d8",
".git/objects/36/20d84aed867264a7151620c69fb7bd43834983": "3a411125e595fb4a498f21911b0a5e77",
".git/objects/5c/b8acecd33126ccd54ccb68a46b512cf689ee1c": "9432bfe9978c54802e8855836d8e1d09",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/54/08ca34354784b6177bcfa33fff2356c9e318f4": "fc54beeb26ad326cc690fb4d8fae5e85",
".git/objects/53/96c892f548fcf5f03418b212d23facca1f479b": "0e823f75b41ceed6088f4af61fad1413",
".git/objects/97/97a1346829857ca30d469ef1afc9cf8b5b982b": "bb49d16a6f5cb2f844c5024307aaee32",
".git/objects/0f/9233d8d0a32ab2c01a40ffc0ee96af1c494f0f": "1616ee5729984455613b69b056a5754f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/52a243551a5957666d542d586118def3878ee2": "9eadc4965f56b0344cae846745b3e40b",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b6/651c27a152b4fa72eea5e7cc4245e1e729090b": "7d5b214f9f12d23eef52d6c49cf0d270",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/cde5f2c1fc297dcb5ae39197ec199315b7df6e": "95a4497feac1b0c6f43e8a87c59572e6",
".git/objects/a8/e4ce09e7ac83551c6fd4123fb9b025919d85e9": "b817f10b70d7f296772a4302106808ef",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/0e1e8207f007bb8f7fab0c5fdcb6bcb63f2ad5": "901d0525a46888fb6a9560b12ead8078",
".git/objects/f7/c08b943729fc492adbee571657bbc38fc87e13": "c79515d867d1886a5e34e401b4aaddc7",
".git/objects/e8/c643d540ecf0b694f1a1fc7f9bc1f22bcd2561": "5bcbb35b0c00e9f9bec33e920fc11f9c",
".git/objects/ff/9c01aa52ed50f36e743ecfb4b43d293adfa4af": "96be36786779df60e513906aae910b66",
".git/objects/c5/7e9d108937113b3192d35afff4df80dfa63157": "b76bc156946c376953f241c16d70ce6f",
".git/objects/f6/b23d64d3f25fc2622de0710e2f9853c1b5f763": "4185c5cf620e143af1ae023d8e9dcc9f",
".git/objects/e9/797ffc583e2ab2c68d68af0d6385ebeddbec62": "4b9e2c63e45304e063d4532ef2a5121f",
".git/objects/e0/6d5e7b6c5f62f9722d1101c57b37dc12a306f4": "8cc89f72dfc98537e843251972761ac2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/f602718d1bb67321655483373f431b65db75a0": "7fa5a3888ceb8803108f175f9565b20c",
".git/objects/48/1374baaa8f25c062ac50eb1de805bf182324d5": "3264c4bce81f4e13d34089d382212b30",
".git/objects/1e/2486ccb3cac6bd2877bb9766d49e49fcd67dd6": "9a5e446313cce1ab092e4451ae163085",
".git/objects/4a/d8e62533441b22761c1a6f8b5bb0b190be1729": "cb1e06fb3304888485e2723974bd5259",
".git/objects/85/549cc067358bdfb3575706885752decb87d6ce": "c9a66b55dd377fd88e3b4a72c7f7cb03",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/ff95d9c8da1770aa88b8b8dc58e02070cafc7b": "43fb82d4a69664cfb015bcf60f0f2954",
".git/objects/71/49979a0fc9c2618b9d0f73831ac0f915337529": "510499ebbd27b272227b27aa0a55a5e6",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/f142625cbe370b5defcce5e20e3a77bc4d3f48": "42983802c3a8bdc65e6f94a8d9a52898",
".git/objects/78/705db097cd5a663cbbadccfa195bc055785c23": "ce4714fb50e2a8b018311de0130c4b2c",
".git/objects/78/d19e21bffd87cb92267aad92b52b24c6610bac": "b9e763b2770538fca25e064a29552ad3",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d64978fb65cba153609bc487b5becacf",
".git/logs/refs/heads/master": "d64978fb65cba153609bc487b5becacf",
".git/logs/refs/remotes/origin/HEAD": "afc90a00f6d0f169b53618886b4e7c3d",
".git/logs/refs/remotes/origin/master": "ff7588e9b0e4ca89ce690f85ef9330bf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "a35ff939db100ff4d62136a4016b285c",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "a35ff939db100ff4d62136a4016b285c",
".git/index": "513f19a2ab83bb96538a6100051f40b9",
".git/COMMIT_EDITMSG": "3e3d5ef8b42bfe192645e3f63fd61a92",
".git/FETCH_HEAD": "46090f942e4ba8efe3d116faf289e282",
"assets/AssetManifest.json": "71d97b9ca52d7fbdaff20f5b7ef70498",
"assets/NOTICES": "ecfb98628a1de8aa9b4144e40f0618db",
"assets/FontManifest.json": "8b3a1182f42186221426cb67b4d177d5",
"assets/AssetManifest.bin.json": "b922d9ac527dbf824cd7e0d3dad242ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "10edbe05d1654ad02db16a0300dead3b",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/imgs/daemon.jpg": "b84b740b9ecb40e388ae3afe19c4c482",
"assets/assets/imgs/world_map.jpg": "653cd5fcebcadf165dc8dbf036e546be",
"assets/assets/imgs/archer.png": "1d734d3c2ac93d1540ed1ee5d3aed348",
"assets/assets/fonts/Afacad.ttf": "bcb243fc7479e61d776fbb462cb31252",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
