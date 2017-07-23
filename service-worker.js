"use strict";function setOfCachedUrls(t){return t.keys().then(function(t){return t.map(function(t){return t.url})}).then(function(t){return new Set(t)})}var precacheConfig=[["/travel_time/index.html","b78ca51610efd8f5351bcce4dee24702"],["/travel_time/static/css/main.fb533d1f.css","457d1bb1d8b28dbd50ff8feaf8147f7e"],["/travel_time/static/js/main.a5ab5347.js","4f4658c49ef39ff8c412c995db0fc2c6"],["/travel_time/static/media/roboto-latin-100.01dbb814.woff2","01dbb814469dc501bd70cf9f13e0b880"],["/travel_time/static/media/roboto-latin-100.02fbb4cf.woff","02fbb4cff7f148a54db366fa4adf086f"],["/travel_time/static/media/roboto-latin-100.1009f067.eot","1009f0672b7a725a7561d004025ff21f"],["/travel_time/static/media/roboto-latin-100.bdd892cd.svg","bdd892cdf337fc8975aca7ccab6ea06c"],["/travel_time/static/media/roboto-latin-100italic.09bc4a69.eot","09bc4a695c3d2208ab07c09d64dda8ca"],["/travel_time/static/media/roboto-latin-100italic.5bfe254d.woff2","5bfe254da04d4f1a2ed78e818a55a214"],["/travel_time/static/media/roboto-latin-100italic.87528ba9.woff","87528ba9a6e829db88fd8d2b94b362b9"],["/travel_time/static/media/roboto-latin-100italic.98c79800.svg","98c79800498e557faaabd49d2fd7b428"],["/travel_time/static/media/roboto-latin-300.68b24b48.woff2","68b24b48f11ff8e947976b529c6f5941"],["/travel_time/static/media/roboto-latin-300.dc2e2189.woff","dc2e21898247b807422ac32ba45f58c6"],["/travel_time/static/media/roboto-latin-300.dd0bea1f.svg","dd0bea1f9a808d633492fa573039ca1d"],["/travel_time/static/media/roboto-latin-300.f83aa6d1.eot","f83aa6d195038f0103ad63b728d46c35"],["/travel_time/static/media/roboto-latin-300italic.31b2bbfb.woff2","31b2bbfb6f231552f1d5c5879664ae03"],["/travel_time/static/media/roboto-latin-300italic.4bcc85a5.woff","4bcc85a50fd0d42d5e416c56b39b8d71"],["/travel_time/static/media/roboto-latin-300italic.8f9f9012.eot","8f9f9012053df900bacca33e90a39144"],["/travel_time/static/media/roboto-latin-300italic.f8b0d5a9.svg","f8b0d5a9ac4006ad3031052476de8a24"],["/travel_time/static/media/roboto-latin-400.8681f434.svg","8681f434273fd6a267b1a16a035c5f79"],["/travel_time/static/media/roboto-latin-400.a2647ffe.woff2","a2647ffe169bbbd94a3238020354c732"],["/travel_time/static/media/roboto-latin-400.a9fc51fd.woff","a9fc51fd0214c75ee5953dda0f2a06a6"],["/travel_time/static/media/roboto-latin-400.c3453f44.eot","c3453f443cf8b548b6161300093c779b"],["/travel_time/static/media/roboto-latin-400italic.347bfb18.woff2","347bfb18c4e5fd1642089bd15bf3e628"],["/travel_time/static/media/roboto-latin-400italic.39c358e4.svg","39c358e4c78546f0f49e624bcbdc8e63"],["/travel_time/static/media/roboto-latin-400italic.bad78f93.woff","bad78f935b0182bd83ac29a45edcdb25"],["/travel_time/static/media/roboto-latin-400italic.e086010c.eot","e086010c63bb51850b7dc905a0c58c2e"],["/travel_time/static/media/roboto-latin-500.4b218fc7.woff2","4b218fc7ca179e548471ff37e3060081"],["/travel_time/static/media/roboto-latin-500.713a6623.eot","713a6623ad820be635f48050f204b4d6"],["/travel_time/static/media/roboto-latin-500.95204ac9.svg","95204ac95130828753c0ee0ada537c33"],["/travel_time/static/media/roboto-latin-500.ac8381d5.woff","ac8381d5023c0187e7a094726d204f6e"],["/travel_time/static/media/roboto-latin-500italic.01ef9f5b.woff","01ef9f5b9fc166ecdf86e02e34b8fd64"],["/travel_time/static/media/roboto-latin-500italic.4169600b.eot","4169600b774f104453205c0bfc27ed0f"],["/travel_time/static/media/roboto-latin-500italic.b5bd232e.svg","b5bd232e5ae7e364a0e75ba4e480dc03"],["/travel_time/static/media/roboto-latin-500italic.cfd2fe08.woff2","cfd2fe08211aadeccac1de3fb5d45ad5"],["/travel_time/static/media/roboto-latin-700.2b246a55.eot","2b246a5540c3706485cc74b0066b9711"],["/travel_time/static/media/roboto-latin-700.57888be7.svg","57888be7f3e68a7050452ea3157cf4de"],["/travel_time/static/media/roboto-latin-700.89b46943.woff","89b469433216121ca9d12c1aef1353d1"],["/travel_time/static/media/roboto-latin-700.aa3e8711.woff2","aa3e87117db2b3c27801cbb8dfe40c6c"],["/travel_time/static/media/roboto-latin-700italic.42b4247c.woff","42b4247cf22991d1c26d8f66eb8f38f8"],["/travel_time/static/media/roboto-latin-700italic.44663173.svg","4466317341560ee2759326c4723cae25"],["/travel_time/static/media/roboto-latin-700italic.5b2c1ede.woff2","5b2c1edeeb1ce5f7581a22a8cad42410"],["/travel_time/static/media/roboto-latin-700italic.7e4c7545.eot","7e4c75456c6d92b86060ae2139c013fc"],["/travel_time/static/media/roboto-latin-900.729ed001.eot","729ed0018076024f69415376817f3d59"],["/travel_time/static/media/roboto-latin-900.9c4bedee.svg","9c4bedeee9074a7ab438ff0e548d0fba"],["/travel_time/static/media/roboto-latin-900.fa058128.woff2","fa058128ab6fcaa61257208d085b4d57"],["/travel_time/static/media/roboto-latin-900.fceb24a6.woff","fceb24a67b9ab2b0074defd70c0c54d9"],["/travel_time/static/media/roboto-latin-900italic.450b4cf2.woff2","450b4cf2cbd89c75135c0d9db9ade5a2"],["/travel_time/static/media/roboto-latin-900italic.968fd8b5.woff","968fd8b51b2075525dc4780b2c7affb0"],["/travel_time/static/media/roboto-latin-900italic.9ab9a5a0.eot","9ab9a5a09490bde095f2f0ea68af942f"],["/travel_time/static/media/roboto-latin-900italic.9ede86e9.svg","9ede86e9a4bc062655d63c80f9d71d46"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(t,e){var a=new URL(t);return"/"===a.pathname.slice(-1)&&(a.pathname+=e),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(t,e,a,i){var c=new URL(t);return i&&c.pathname.match(i)||(c.search+=(c.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(t,e){if(0===t.length)return!0;var a=new URL(e).pathname;return t.some(function(t){return a.match(t)})},stripIgnoredUrlParameters=function(t,e){var a=new URL(t);return a.hash="",a.search=a.search.slice(1).split("&").map(function(t){return t.split("=")}).filter(function(t){return e.every(function(e){return!e.test(t[0])})}).map(function(t){return t.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(t){var e=t[0],a=t[1],i=new URL(e,self.location),c=createCacheKey(i,hashParamName,a,/\.\w{8}\./);return[i.toString(),c]}));self.addEventListener("install",function(t){t.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(e){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!e.has(a)){var i=new Request(a,{credentials:"same-origin"});return fetch(i).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(t){var e=new Set(urlsToCacheKeys.values());t.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(a){return Promise.all(a.map(function(a){if(!e.has(a.url))return t.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching);(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),e=urlsToCacheKeys.has(a));!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL("/travel_time/index.html",self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(t){return t.match(urlsToCacheKeys.get(a)).then(function(t){if(t)return t;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});