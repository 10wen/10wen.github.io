if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,a)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const f=e=>c(e,s),n={module:{uri:s},exports:d,require:f};i[s]=Promise.all(r.map((e=>n[e]||f(e)))).then((e=>(a(...e),d)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"f867e1922c629c4d6e9859a058213545"},{url:"about/index.html",revision:"9942d26d67ad072607b13886c9fb8ec1"},{url:"archives/2022/07/index.html",revision:"cf80b59de990e72551856855fbabdda2"},{url:"archives/2022/08/index.html",revision:"110aad13e0541b3133c3e82913e3df8b"},{url:"archives/2022/index.html",revision:"c9e785afb82714989723e8ee32f2c8a4"},{url:"archives/index.html",revision:"7f30b3ae131a051dc6a2ecd5764e323b"},{url:"categories/index.html",revision:"60c7d28de6a0b85a54938d7bd679d06a"},{url:"categories/转载/index.html",revision:"5a4459ef02b7ac8b79b15a10ea9e21c3"},{url:"categories/转载/已发布/index.html",revision:"1883c9d59021ad26999b9502e878c317"},{url:"css/index.css",revision:"2d7ff5c119d5e3730bff95fbca9a648d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"0f1c3728451d529c5b29f200c7a47c4d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"8476966ce05e3746dee70462ad6b9241"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"posts/3C7YZGC.html",revision:"0bf74c6fca62569fae52385f59eebe53"},{url:"posts/4a17b156.html",revision:"8734881739c80be0322c99bb61b21fa7"},{url:"posts/5c98fe12.html",revision:"02a4faafb3cc49861fe2ef6975b31cf0"},{url:"posts/79fe89cf.html",revision:"126ab17c3cb0ffafa631bb7ddc17c6de"},{url:"tags/blog/index.html",revision:"14e3ebb7754ca94df5805a0c8a538921"},{url:"tags/Hexo/index.html",revision:"2cb353d1e21e39cd9fbfb373465f77d4"},{url:"tags/index.html",revision:"60cc27a2c77007c26a8b89f0e5a0aac9"},{url:"tags/Java/index.html",revision:"38fbf219fcda9cca9e83ab03af5619d6"},{url:"tags/markdown/index.html",revision:"ae4e62989b6e33aa6efc5a6a50c3d613"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
