if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const n=e=>c(e,s),f={module:{uri:s},exports:a,require:n};i[s]=Promise.all(d.map((e=>f[e]||n(e)))).then((e=>(r(...e),a)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"8b852577920b2c0c2ac00a4747be72ae"},{url:"about/index.html",revision:"4dd7a4afab19d12621b1cbd549ff09e9"},{url:"archives/2022/07/index.html",revision:"b2fee33ae9cc67bfce8b6b3e6d2ae72d"},{url:"archives/2022/08/index.html",revision:"fcae133c25018e5d154695939e9f8f2e"},{url:"archives/2022/index.html",revision:"b613de99628c3bab63ba49cede942a2e"},{url:"archives/index.html",revision:"a2fcc31b4448ae36068ae484e9af8e10"},{url:"categories/index.html",revision:"f9442c4d208449b3cad435203ce6d6e3"},{url:"categories/转载/index.html",revision:"54a7e69df752864a2dffdc330a83d957"},{url:"categories/转载/已发布/index.html",revision:"e4444dc70f3daec103e9272f87ea606c"},{url:"css/index.css",revision:"2d7ff5c119d5e3730bff95fbca9a648d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"0f1c3728451d529c5b29f200c7a47c4d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"f24f372af1c89de4e382e86f3dc8ad5b"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"posts/3C7YZGC.html",revision:"2c8c1a183dc3120a203c9bd9b3828150"},{url:"posts/4a17b156.html",revision:"51719450fd3d9f181e1b6919500b7257"},{url:"posts/5c98fe12.html",revision:"39086b0680f48d27e9d81cfeee0767bb"},{url:"posts/79fe89cf.html",revision:"23781d045cf6e8067cbddf5db8484e4c"},{url:"tags/blog/index.html",revision:"4081a82bbb542bf851d326d1182297ac"},{url:"tags/Hexo/index.html",revision:"42cefd272aeeb1cb26cc445c0acc86dc"},{url:"tags/index.html",revision:"ee111fbea1d28c28817c35e0729c6367"},{url:"tags/Java/index.html",revision:"8c26ea94c3877450adad19059510762d"},{url:"tags/markdown/index.html",revision:"5c624d5f399dc4768df7e6dea8121aca"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
