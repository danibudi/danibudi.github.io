!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.c1f55c45ca93f97bb7348ad6fcda5189.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.e6211bbcb11eb09e1e40fbe11297e229.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.02ab784e2c82f6e9f7428c57caf615f9.js","discovery/main":"https://c.disquscdn.com/next/embed/discovery.bundle.c1279f7b6402d990698b3b99593a7fa9.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.06312f486473ce2fe234404c42354ec9.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed",paths:["lounge/main","discovery/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.f6a625ca8b85c1f2ea944c38c50ac38c.js",a.body.appendChild(c)}();