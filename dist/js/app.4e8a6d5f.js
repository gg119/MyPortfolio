(function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],l=0,f=[];l<c.length;l++)a=c[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"eedd73c0","chunk-00c5319a":"549ebc66"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1,"chunk-00c5319a":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"99bcb9c5","chunk-00c5319a":"1397db55"}[t]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.request=r,delete a[t],p.parentNode.removeChild(p),n(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t),s=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[t]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"26ec":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Footer")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"nav"}},[n("router-link",{staticClass:"nav-btn",attrs:{to:"/"}},[t._v("Home")]),n("router-link",{staticClass:"nav-btn",attrs:{to:"/about"}},[t._v("About")]),n("router-link",{staticClass:"nav-btn",attrs:{to:"/Contact"}},[t._v("Contact")])],1),n("router-view")],1)},c=[],u={},s=u,l=(n("e9c3"),n("2877")),f=Object(l["a"])(s,i,c,!1,null,"53af1960",null),p=f.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("footer",[r("img",{attrs:{src:n("5aa9"),alt:"Anything"}}),r("p",[t._v("© Copyright 2019 Geon Gayles")])])])}],g={},m=g,b=(n("7922"),Object(l["a"])(m,d,h,!1,null,"48a10861",null)),v=b.exports,y={components:{Header:p,Footer:v}},_=y,w=(n("034f"),Object(l["a"])(_,a,o,!1,null,null,null)),j=w.exports,x=n("8c4f"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("Projects")]),n("Swi")],1)},P=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("carousel",{attrs:{"per-page":1}},t._l(t.images,function(t){return n("slide",{key:t.alt},[n("Card",{attrs:{src:t.src,alt:t.alt,href:t.href}})],1)}),1),n("pagination")],1)},O=[],k=n("0a63"),E=n("b506"),H=n.n(E),$=n("8073"),T=n.n($),A=n("751d"),M=n.n(A),B=n("88b5"),D=n.n(B),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card"},[n("a",{attrs:{href:t.href}},[n("img",{staticStyle:{width:"100%"},attrs:{src:t.src,alt:t.alt}}),n("div",{staticClass:"container"},[n("h4",[n("b",[t._v(t._s(t.alt))])])])])])])},F=[],G={name:"Card",props:{src:String,alt:String,href:String}},q=G,J=(n("bbad"),Object(l["a"])(q,N,F,!1,null,"4658430e",null)),L=J.exports,U={name:"Swi",components:{Carousel:k["Carousel"],Slide:k["Slide"],Pagination:k["Pagination"],Card:L},data:function(){return{images:[{src:T.a,alt:"Hogger",href:"https://github.com/gg119/YUPOCH"},{src:H.a,alt:"Property Managment Website",href:"https://github.com/ArpMichaelB/Project-FDS"},{src:M.a,alt:"Dodge",href:"https://github.com/gg119/Dodge"},{src:D.a,alt:"Hit",href:"https://github.com/gg119/Hit"}]}}},W=U,Y=Object(l["a"])(W,S,O,!1,null,"138f01d9",null),z=Y.exports,I={name:"home",components:{Swi:z},title:"Home - Geon"},K=I,Q=Object(l["a"])(K,C,P,!1,null,null,null),R=Q.exports;r["a"].use(x["a"]);var V=new x["a"]({routes:[{path:"/",name:"home",component:R},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/contact",name:"contact",component:function(){return n.e("chunk-00c5319a").then(n.bind(null,"b8fa"))}}]});function X(t){var e=t.$options.title;if(e)return"function"===typeof e?e.call(t):e}var Z={created:function(){var t=X(this);t&&(document.title=t)}};r["a"].mixin(Z),r["a"].config.productionTip=!1,new r["a"]({router:V,render:function(t){return t(j)}}).$mount("#app")},"5aa9":function(t,e,n){t.exports=n.p+"img/madewithv.1eee2181.png"},"64a9":function(t,e,n){},"751d":function(t,e,n){t.exports=n.p+"img/Dodge.361b1d4a.gif"},7922:function(t,e,n){"use strict";var r=n("7f09"),a=n.n(r);a.a},"7f09":function(t,e,n){},8073:function(t,e,n){t.exports=n.p+"img/Hogger.2c7d19a3.gif"},"88b5":function(t,e,n){t.exports=n.p+"img/Hit.c290ffd8.png"},b506:function(t,e,n){t.exports=n.p+"img/PMProject-update.ec0c9eb6.jpg"},bbad:function(t,e,n){"use strict";var r=n("bdb1"),a=n.n(r);a.a},bdb1:function(t,e,n){},e9c3:function(t,e,n){"use strict";var r=n("26ec"),a=n.n(r);a.a}});
//# sourceMappingURL=app.4e8a6d5f.js.map