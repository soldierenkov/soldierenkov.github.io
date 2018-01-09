"use strict";
importScripts('sw-toolbox.js'); 
toolbox.precache(['index.html','generic.html','elements.html']); 
toolbox.precache(['/assets/css/main.css','/assets/css/font-awesome.min.css']); 
toolbox.precache(['/assets/js/application.js','/assets/js/jquery.min.js','/assets/js/main.js','/assets/js/skel.min.js','/assets/js/util.js']); 
toolbox.router.get('/images/*', toolbox.cacheFirst); 
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});