if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let f={};const s=e=>a(e,d),t={module:{uri:d},exports:f,require:s};i[d]=Promise.all(r.map((e=>t[e]||s(e)))).then((e=>(c(...e),f)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"b3b22c7e9890a05b84ec1c491e48c50c"},{url:"about/index.html",revision:"f4264c67128d51af937312fe4617e129"},{url:"archives/2022/07/index.html",revision:"d6b3828b092f58c234ca6c631d6807c9"},{url:"archives/2022/08/index.html",revision:"f20876eac9153d0be90483fc5a978645"},{url:"archives/2022/index.html",revision:"653c095abf07ddffdacc1aba3e2a0889"},{url:"archives/index.html",revision:"b914c761109da1110497e6cabbde80d4"},{url:"categories/index.html",revision:"dda1c9eab60d6bf073a9f54a1843b352"},{url:"categories/JavaScript-DOM/index.html",revision:"b51309f52a43962a8332aee1aa0ee9e1"},{url:"categories/JavaScript-DOM/JavaScript/index.html",revision:"b36e350d4e08e6a0693d4fbf6d8b3182"},{url:"categories/JavaScript-DOM/JavaScript/JavaScript/index.html",revision:"bf7daef143f6f46ab0d266f01926da37"},{url:"categories/JavaScript-DOM/JavaScript/JavaScript/JavaScript-DOM/index.html",revision:"dc6cb40c37729ecbf5df1440a0abf2c6"},{url:"categories/其他/index.html",revision:"663ab80d1a9ffab6821572c8f71f66fa"},{url:"categories/其他/其他/index.html",revision:"6ccc96660214177edd85e8a38a50ec4b"},{url:"categories/博客搭建/index.html",revision:"dc463d5131d208637450612b26f2ab0b"},{url:"categories/博客搭建/博客搭建/index.html",revision:"26f94b8e184d54cf2047fdae59b5337c"},{url:"categories/文档/index.html",revision:"525192492e4975935aa5808292f56fea"},{url:"categories/文档/文档/index.html",revision:"5f2b1892f74a68100d4e8cf02d26c48d"},{url:"categories/编程题/index.html",revision:"42fdc162808f31f74c6c8f10cbc5dba8"},{url:"categories/编程题/JavaScript/index.html",revision:"e90f3d360426877a1a656c6070062e06"},{url:"categories/编程题/JavaScript/JavaScript/index.html",revision:"33b7cf6ceead799964455a29ed988590"},{url:"categories/编程题/JavaScript/JavaScript/编程题/index.html",revision:"0ea14e151db0bd5794eba8b4bd3cc67c"},{url:"categories/转载/index.html",revision:"1f1c4628f088f98480790eb9b660f123"},{url:"categories/转载/已发布/index.html",revision:"96221c201adaf8cbafaf83d21ee835fd"},{url:"css/index.css",revision:"2d7ff5c119d5e3730bff95fbca9a648d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"0f1c3728451d529c5b29f200c7a47c4d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/logo.jpg",revision:"ebf15b688f3e477786f764e1e8cff10e"},{url:"index.html",revision:"360e75d43579cf448f83da21a54b66eb"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"posts/26RXQJW.html",revision:"b6f75135a0973a612b81b783e8c1c42f"},{url:"posts/2C471B1.html",revision:"4eb714e7ec0c3e6f3bf1f18c0c4f7314"},{url:"posts/2DKYQSB.html",revision:"28c44d206cbc2384eb31eb6fb3a79bfa"},{url:"posts/2VG5F47.html",revision:"0d0b4cbf9ed71189a00abeff28f945ef"},{url:"posts/3C0MK88.html",revision:"32c4b5957e640e41c1d53b3519b66f5f"},{url:"posts/4a17b156.html",revision:"130395a74f01dcd5aeeea1ae2ff8cba7"},{url:"posts/5c98fe12.html",revision:"d7916003e92063b979347fd45d5ddff7"},{url:"posts/79fe89cf.html",revision:"03c83153f234f96095a5fd607a2bddc0"},{url:"posts/S0FZ3J.html",revision:"8ced646cc10f3b71a344ce6b097f5a1c"},{url:"tags/blog/index.html",revision:"17ef51780c1df5fdd3c58d8a960e520e"},{url:"tags/CDN/index.html",revision:"e0584844b777ae3166d9a3cc32458333"},{url:"tags/github/index.html",revision:"e980c7dbf73417a5e355ee7ee7e15e16"},{url:"tags/Github/index.html",revision:"d9435dba38aa888d64bd8c1f99678590"},{url:"tags/hexo/index.html",revision:"3fa8c8422aa84fb3d3ca5c0c07d06edf"},{url:"tags/Hexo/index.html",revision:"58cda6f4631bf87ee7aad669cce32415"},{url:"tags/index.html",revision:"57b99b3d83bb66f14f96372608f04ffd"},{url:"tags/Java/index.html",revision:"125fbbb9517ed2e43eeeae25e9699d53"},{url:"tags/JavaScript-DOM/index.html",revision:"1d7f317fbf617d3d81b62c9a1da72e55"},{url:"tags/JavaScript/index.html",revision:"418786fb08e78a6676164da2613afe1e"},{url:"tags/leetcode/index.html",revision:"d0efc633e755f3259450ae76406e90bb"},{url:"tags/markdown/index.html",revision:"5fd6268b73e02318f337a02abe36aeea"},{url:"tags/图床/index.html",revision:"ff6bfc1178ff6a1d813c2bcba58592e2"},{url:"tags/技术名词/index.html",revision:"795fd2ad96549344ec15ce1d17c71630"},{url:"tags/算法/index.html",revision:"91c01be2a5771c92b3e6fd4c8f3eadbb"},{url:"tags/编程题/index.html",revision:"93bd25ce85e4d624451b8849ffd115a9"},{url:"tags/阅读笔记/index.html",revision:"f397182807ef525cdd5c106cb178f365"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
