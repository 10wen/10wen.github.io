if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const f=e=>c(e,s),n={module:{uri:s},exports:a,require:f};i[s]=Promise.all(d.map((e=>n[e]||f(e)))).then((e=>(r(...e),a)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"8e83e78886683e894fc88717a5025eed"},{url:"about/index.html",revision:"452b2b0a4e2979fc3291db60e3cb1576"},{url:"archives/2022/07/index.html",revision:"30c2de296839f00987df2bfd093beaed"},{url:"archives/2022/08/index.html",revision:"14309ad880ef8030cb3a507359514b98"},{url:"archives/2022/index.html",revision:"dc5d59324456770f1d4d54cdc84fed5b"},{url:"archives/index.html",revision:"1c14302814f9c04ec07778690b21f6d5"},{url:"categories/index.html",revision:"ba9dd41da367f9e83c65b10a92dce6ad"},{url:"categories/转载/index.html",revision:"ca1bd593b17dd0b14d2c25231c723400"},{url:"categories/转载/已发布/index.html",revision:"87bd842aba9aeb560aa5807a432ca3f1"},{url:"css/index.css",revision:"2d7ff5c119d5e3730bff95fbca9a648d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"0f1c3728451d529c5b29f200c7a47c4d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"ac053b377cb807c7890ab14d7512df42"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"posts/3C7YZGC.html",revision:"484d74c883671f44e06d9dd15a4c444a"},{url:"posts/4a17b156.html",revision:"e059d54f704adbcb77a58a8a8ce9be4c"},{url:"posts/5c98fe12.html",revision:"3b5767122f2c8703c1658112e4df8fc1"},{url:"posts/79fe89cf.html",revision:"b0d09d66393ff5c7eec94a50f6f2ca85"},{url:"reprint-drafts/转载/test.html",revision:"334741c96709112d20ec2a0e7dfcb71f"},{url:"tags/blog/index.html",revision:"37f3eb9af7754b6e3d9d8cff440efd6d"},{url:"tags/Hexo/index.html",revision:"408f9e1b3fff7e372547edfb8ab698e6"},{url:"tags/index.html",revision:"e6c5b6f3e554a418c1e88b013e4243cc"},{url:"tags/Java/index.html",revision:"8a6a73bac6f2126311ee30f2d53bf298"},{url:"tags/markdown/index.html",revision:"02a22cb6d90ccbce168907b7740d796c"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
