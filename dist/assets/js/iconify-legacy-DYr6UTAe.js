!function(){function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function e(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?t(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}System.register(["./vue-legacy-DuvGZ5Gb.js"],(function(t,n){"use strict";var o,r;return{setters:[t=>{o=t.k,r=t.A}],execute:function(){t("a",O);const n=/^[a-z0-9]+(-[a-z0-9]+)*$/,i=(t,e,n,o="")=>{const r=t.split(":");if("@"===t.slice(0,1)){if(r.length<2||r.length>3)return null;o=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const t=r.pop(),n=r.pop(),i={provider:r.length>0?r[0]:o,prefix:n,name:t};return e&&!c(i)?null:i}const i=r[0],s=i.split("-");if(s.length>1){const t={provider:o,prefix:s.shift(),name:s.join("-")};return e&&!c(t)?null:t}if(n&&""===o){const t={provider:o,prefix:"",name:i};return e&&!c(t,n)?null:t}return null},c=(t,e)=>!!t&&!(""!==t.provider&&!t.provider.match(n)||!(e&&""===t.prefix||t.prefix.match(n))||!t.name.match(n)),s=Object.freeze({left:0,top:0,width:16,height:16}),a=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),l=Object.freeze(e(e({},s),a)),f=Object.freeze(e(e({},l),{},{body:"",hidden:!1}));function u(t,e){const n=function(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const o=((t.rotate||0)+(e.rotate||0))%4;return o&&(n.rotate=o),n}(t,e);for(const o in f)o in a?o in t&&!(o in n)&&(n[o]=a[o]):o in e?n[o]=e[o]:o in t&&(n[o]=t[o]);return n}function d(t,e,n){const o=t.icons,r=t.aliases||Object.create(null);let i={};function c(t){i=u(o[t]||r[t],i)}return c(e),n.forEach(c),u(t,i)}function p(t,e){const n=[];if("object"!=typeof t||"object"!=typeof t.icons)return n;t.not_found instanceof Array&&t.not_found.forEach((t=>{e(t,null),n.push(t)}));const o=function(t){const e=t.icons,n=t.aliases||Object.create(null),o=Object.create(null);return Object.keys(e).concat(Object.keys(n)).forEach((function t(r){if(e[r])return o[r]=[];if(!(r in o)){o[r]=null;const e=n[r]&&n[r].parent,i=e&&t(e);i&&(o[r]=[e].concat(i))}return o[r]})),o}(t);for(const r in o){const i=o[r];i&&(e(r,d(t,r,i)),n.push(r))}return n}const h=e({provider:"",aliases:{},not_found:{}},s);function g(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function b(t){if("object"!=typeof t||null===t)return null;const e=t;if("string"!=typeof e.prefix||!t.icons||"object"!=typeof t.icons)return null;if(!g(t,h))return null;const o=e.icons;for(const i in o){const t=o[i];if(!i.match(n)||"string"!=typeof t.body||!g(t,f))return null}const r=e.aliases||Object.create(null);for(const i in r){const t=r[i],e=t.parent;if(!i.match(n)||"string"!=typeof e||!o[e]&&!r[e]||!g(t,f))return null}return e}const m=Object.create(null);function y(t,e){const n=m[t]||(m[t]=Object.create(null));return n[e]||(n[e]=function(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}(t,e))}function v(t,e){return b(e)?p(e,((e,n)=>{n?t.icons[e]=n:t.missing.add(e)})):[]}let x=!1;function w(t){return"boolean"==typeof t&&(x=t),x}function j(t,n){const o=i(t,!0,x);if(!o)return!1;return function(t,n,o){try{if("string"==typeof o.body)return t.icons[n]=e({},o),!0}catch(r){}return!1}(y(o.provider,o.prefix),o.name,n)}function O(t,e){if("object"!=typeof t)return!1;if("string"!=typeof e&&(e=t.provider||""),x&&!e&&!t.prefix){let e=!1;return b(t)&&(t.prefix="",p(t,((t,n)=>{n&&j(t,n)&&(e=!0)}))),e}const n=t.prefix;if(!c({provider:e,prefix:n,name:"a"}))return!1;return!!v(y(e,n),t)}const k=Object.freeze({width:null,height:null}),S=Object.freeze(e(e({},k),a)),E=/(-?[0-9.]*[0-9]+[0-9.]*)/g,I=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function M(t,e,n){if(1===e)return t;if(n=n||100,"number"==typeof t)return Math.ceil(t*e*n)/n;if("string"!=typeof t)return t;const o=t.split(E);if(null===o||!o.length)return t;const r=[];let i=o.shift(),c=I.test(i);for(;;){if(c){const t=parseFloat(i);isNaN(t)?r.push(i):r.push(Math.ceil(t*e*n)/n)}else r.push(i);if(i=o.shift(),void 0===i)return r.join("");c=!c}}const F=/\sid="(\S+)"/g,T="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let L=0;const C=Object.create(null);function P(t){return C[t]||C[""]}function _(t){let e;if("string"==typeof t.resources)e=[t.resources];else if(e=t.resources,!(e instanceof Array&&e.length))return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:!0===t.random,index:t.index||0,dataAfterTimeout:!1!==t.dataAfterTimeout}}const z=Object.create(null),A=["https://api.simplesvg.com","https://api.unisvg.com"],D=[];for(;A.length>0;)1===A.length||Math.random()>.5?D.push(A.shift()):D.push(A.pop());function N(t,e){const n=_(e);return null!==n&&(z[t]=n,!0)}function R(t){return z[t]}z[""]=_({resources:["https://api.iconify.design"].concat(D)});let $=(()=>{let t;try{if(t=fetch,"function"==typeof t)return t}catch(e){}})();const U={prepare:(t,e,n)=>{const o=[],r=function(t,e){const n=R(t);if(!n)return 0;let o;if(n.maxURL){let t=0;n.resources.forEach((e=>{const n=e;t=Math.max(t,n.length)}));const r=e+".json?icons=";o=n.maxURL-t-n.path.length-r.length}else o=0;return o}(t,e),i="icons";let c={type:i,provider:t,prefix:e,icons:[]},s=0;return n.forEach(((n,a)=>{s+=n.length+1,s>=r&&a>0&&(o.push(c),c={type:i,provider:t,prefix:e,icons:[]},s=n.length),c.icons.push(n)})),o.push(c),o},send:(t,e,n)=>{if(!$)return void n("abort",424);let o=function(t){if("string"==typeof t){const e=R(t);if(e)return e.path}return"/"}(e.provider);switch(e.type){case"icons":{const t=e.prefix,n=e.icons.join(",");o+=t+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const t=e.uri;o+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void n("abort",400)}let r=503;$(t+o).then((t=>{const e=t.status;if(200===e)return r=501,t.json();setTimeout((()=>{n(function(t){return 404===t}(e)?"abort":"next",e)}))})).then((t=>{"object"==typeof t&&null!==t?setTimeout((()=>{n("success",t)})):setTimeout((()=>{404===t?n("abort",t):n("next",r)}))})).catch((()=>{n("next",r)}))}};function q(t,e){t.forEach((t=>{const n=t.loaderCallbacks;n&&(t.loaderCallbacks=n.filter((t=>t.id!==e)))}))}let Q=0;var B={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function H(t,e,n,o){const r=t.resources.length,i=t.random?Math.floor(Math.random()*r):t.index;let c;if(t.random){let e=t.resources.slice(0);for(c=[];e.length>1;){const t=Math.floor(Math.random()*e.length);c.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}c=c.concat(e)}else c=t.resources.slice(i).concat(t.resources.slice(0,i));const s=Date.now();let a,l="pending",f=0,u=null,d=[],p=[];function h(){u&&(clearTimeout(u),u=null)}function g(){"pending"===l&&(l="aborted"),h(),d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function b(t,e){e&&(p=[]),"function"==typeof t&&p.push(t)}function m(){l="failed",p.forEach((t=>{t(void 0,a)}))}function y(){d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function v(){if("pending"!==l)return;h();const o=c.shift();if(void 0===o)return d.length?void(u=setTimeout((()=>{h(),"pending"===l&&(y(),m())}),t.timeout)):void m();const r={status:"pending",resource:o,callback:(e,n)=>{!function(e,n,o){const r="success"!==n;switch(d=d.filter((t=>t!==e)),l){case"pending":break;case"failed":if(r||!t.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=o,void m();if(r)return a=o,void(d.length||(c.length?v():m()));if(h(),y(),!t.random){const n=t.resources.indexOf(e.resource);-1!==n&&n!==t.index&&(t.index=n)}l="completed",p.forEach((t=>{t(o)}))}(r,e,n)}};d.push(r),f++,u=setTimeout(v,t.rotate),n(o,e,r.callback)}return"function"==typeof o&&p.push(o),setTimeout(v),function(){return{startTime:s,payload:e,status:l,queriesSent:f,queriesPending:d.length,subscribe:b,abort:g}}}function J(t){const n=e(e({},B),t);let o=[];function r(){o=o.filter((t=>"pending"===t().status))}return{query:function(t,e,i){const c=H(n,t,e,((t,e)=>{r(),i&&i(t,e)}));return o.push(c),c},find:function(t){return o.find((e=>t(e)))||null},setIndex:t=>{n.index=t},getIndex:()=>n.index,cleanup:r}}function V(){}const G=Object.create(null);function K(t,e,n){let o,r;if("string"==typeof t){const e=P(t);if(!e)return n(void 0,424),V;r=e.send;const i=function(t){if(!G[t]){const e=R(t);if(!e)return;const n={config:e,redundancy:J(e)};G[t]=n}return G[t]}(t);i&&(o=i.redundancy)}else{const e=_(t);if(e){o=J(e);const n=P(t.resources?t.resources[0]:"");n&&(r=n.send)}}return o&&r?o.query(e,r,n)().abort:(n(void 0,424),V)}const W="iconify2",X="iconify",Y=X+"-count",Z=X+"-version",tt=36e5;function et(t,e){try{return t.getItem(e)}catch(n){}}function nt(t,e,n){try{return t.setItem(e,n),!0}catch(o){}}function ot(t,e){try{t.removeItem(e)}catch(n){}}function rt(t,e){return nt(t,Y,e.toString())}function it(t){return parseInt(et(t,Y))||0}const ct={local:!0,session:!0},st={local:new Set,session:new Set};let at=!1;let lt="undefined"==typeof window?{}:window;function ft(t){const e=t+"Storage";try{if(lt&&lt[e]&&"number"==typeof lt[e].length)return lt[e]}catch(n){}ct[t]=!1}function ut(t,e){const n=ft(t);if(!n)return;const o=et(n,Z);if(o!==W){if(o){const t=it(n);for(let e=0;e<t;e++)ot(n,X+e.toString())}return nt(n,Z,W),void rt(n,0)}const r=Math.floor(Date.now()/tt)-168,i=t=>{const o=X+t.toString(),i=et(n,o);if("string"==typeof i){try{const n=JSON.parse(i);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>r&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&e(n,t))return!0}catch(c){}ot(n,o)}};let c=it(n);for(let s=c-1;s>=0;s--)i(s)||(s===c-1?(c--,rt(n,c)):st[t].add(s))}function dt(){if(!at){at=!0;for(const t in ct)ut(t,(t=>{const e=t.data,n=y(t.provider,e.prefix);if(!v(n,e).length)return!1;const o=e.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function pt(t,e){function n(n){let o;if(!ct[n]||!(o=ft(n)))return;const r=st[n];let i;if(r.size)r.delete(i=Array.from(r).shift());else if(i=it(o),i>=50||!rt(o,i+1))return;const c={cached:Math.floor(Date.now()/tt),provider:t.provider,data:e};return nt(o,X+i.toString(),JSON.stringify(c))}at||dt(),e.lastModified&&!function(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const o in ct)ut(o,(n=>{const o=n.data;return n.provider!==t.provider||o.prefix!==t.prefix||o.lastModified===e}));return!0}(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&delete(e=Object.assign({},e)).not_found,n("local")||n("session"))}function ht(){}function gt(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout((()=>{t.iconsLoaderFlag=!1,function(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout((()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const o=t.provider,r=t.prefix;e.forEach((e=>{const i=e.icons,c=i.pending.length;i.pending=i.pending.filter((e=>{if(e.prefix!==r)return!0;const c=e.name;if(t.icons[c])i.loaded.push({provider:o,prefix:r,name:c});else{if(!t.missing.has(c))return n=!0,!0;i.missing.push({provider:o,prefix:r,name:c})}return!1})),i.pending.length!==c&&(n||q([t],e.id),e.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),e.abort))}))})))}(t)})))}const bt=t("l",((t,e)=>{const n=function(t,e=!0,n=!1){const o=[];return t.forEach((t=>{const r="string"==typeof t?i(t,e,n):t;r&&o.push(r)})),o}(t,!0,w()),o=function(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort(((t,e)=>t.provider!==e.provider?t.provider.localeCompare(e.provider):t.prefix!==e.prefix?t.prefix.localeCompare(e.prefix):t.name.localeCompare(e.name)));let o={provider:"",prefix:"",name:""};return t.forEach((t=>{if(o.name===t.name&&o.prefix===t.prefix&&o.provider===t.provider)return;o=t;const r=t.provider,i=t.prefix,c=t.name,s=n[r]||(n[r]=Object.create(null)),a=s[i]||(s[i]=y(r,i));let l;l=c in a.icons?e.loaded:""===i||a.missing.has(c)?e.missing:e.pending;const f={provider:r,prefix:i,name:c};l.push(f)})),e}(n);if(!o.pending.length){let t=!0;return e&&setTimeout((()=>{t&&e(o.loaded,o.missing,o.pending,ht)})),()=>{t=!1}}const r=Object.create(null),c=[];let s,a;return o.pending.forEach((t=>{const{provider:e,prefix:n}=t;if(n===a&&e===s)return;s=e,a=n,c.push(y(e,n));const o=r[e]||(r[e]=Object.create(null));o[n]||(o[n]=[])})),o.pending.forEach((t=>{const{provider:e,prefix:n,name:o}=t,i=y(e,n),c=i.pendingIcons||(i.pendingIcons=new Set);c.has(o)||(c.add(o),r[e][n].push(o))})),c.forEach((t=>{const{provider:e,prefix:n}=t;r[e][n].length&&function(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout((()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:n}=t,o=t.iconsToLoad;let r;delete t.iconsToLoad,o&&(r=P(e))&&r.prepare(e,n,o).forEach((n=>{K(e,n,(e=>{if("object"!=typeof e)n.icons.forEach((e=>{t.missing.add(e)}));else try{const n=v(t,e);if(!n.length)return;const o=t.pendingIcons;o&&n.forEach((t=>{o.delete(t)})),pt(t,e)}catch(o){console.error(o)}gt(t)}))}))})))}(t,r[e][n])})),e?function(t,e,n){const o=Q++,r=q.bind(null,n,o);if(!e.pending.length)return r;const i={id:o,icons:e,callback:t,abort:r};return n.forEach((t=>{(t.loaderCallbacks||(t.loaderCallbacks=[])).push(i)})),r}(e,o,c):ht}));const mt=/[\s,]+/;function yt(t,e){e.split(mt).forEach((e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0}}))}function vt(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function o(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:o(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r/=e,r%1==0?o(r):0)}}return e}const xt=e(e({},S),{},{inline:!1}),wt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},jt={display:"inline-block"},Ot={backgroundColor:"currentColor"},kt={backgroundColor:"transparent"},St={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Et={webkitMask:Ot,mask:Ot,background:kt};for(const t in Et){const e=Et[t];for(const n in St)e[t+n]=St[n]}const It={};function Mt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}["horizontal","vertical"].forEach((t=>{const e=t.slice(0,1)+"Flip";It[t+"-flip"]=e,It[t.slice(0,1)+"-flip"]=e,It[t+"Flip"]=e}));const Ft=(t,n)=>{const o=function(t,n){const o=e({},t);for(const e in n){const t=n[e],r=typeof t;e in k?(null===t||t&&("string"===r||"number"===r))&&(o[e]=t):r===typeof o[e]&&(o[e]="rotate"===e?t%4:t)}return o}(xt,n),i=e({},wt),c=n.mode||"svg",s={},a=n.style,f="object"!=typeof a||a instanceof Array?{}:a;for(let e in n){const t=n[e];if(void 0!==t)switch(e){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":o[e]=!0===t||"true"===t||1===t;break;case"flip":"string"==typeof t&&yt(o,t);break;case"color":s.color=t;break;case"rotate":"string"==typeof t?o[e]=vt(t):"number"==typeof t&&(o[e]=t);break;case"ariaHidden":case"aria-hidden":!0!==t&&"true"!==t&&delete i["aria-hidden"];break;default:{const n=It[e];n?!0!==t&&"true"!==t&&1!==t||(o[n]=!0):void 0===xt[e]&&(i[e]=t)}}}const u=function(t,n){const o=e(e({},l),t),r=e(e({},S),n),i={left:o.left,top:o.top,width:o.width,height:o.height};let c=o.body;[o,r].forEach((t=>{const e=[],n=t.hFlip,o=t.vFlip;let r,s=t.rotate;switch(n?o?s+=2:(e.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),e.push("scale(-1 1)"),i.top=i.left=0):o&&(e.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),e.push("scale(1 -1)"),i.top=i.left=0),s<0&&(s-=4*Math.floor(s/4)),s%=4,s){case 1:r=i.height/2+i.top,e.unshift("rotate(90 "+r.toString()+" "+r.toString()+")");break;case 2:e.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:r=i.width/2+i.left,e.unshift("rotate(-90 "+r.toString()+" "+r.toString()+")")}s%2==1&&(i.left!==i.top&&(r=i.left,i.left=i.top,i.top=r),i.width!==i.height&&(r=i.width,i.width=i.height,i.height=r)),e.length&&(c=function(t,e,n){const o=function(t,e="defs"){let n="";const o=t.indexOf("<"+e);for(;o>=0;){const r=t.indexOf(">",o),i=t.indexOf("</"+e);if(-1===r||-1===i)break;const c=t.indexOf(">",i);if(-1===c)break;n+=t.slice(r+1,i).trim(),t=t.slice(0,o).trim()+t.slice(c+1)}return{defs:n,content:t}}(t);return r=o.defs,i=e+o.content+n,r?"<defs>"+r+"</defs>"+i:i;var r,i}(c,'<g transform="'+e.join(" ")+'">',"</g>"))}));const s=r.width,a=r.height,f=i.width,u=i.height;let d,p;null===s?(p=null===a?"1em":"auto"===a?u:a,d=M(p,f/u)):(d="auto"===s?f:s,p=null===a?M(d,u/f):"auto"===a?u:a);const h={},g=(t,e)=>{(t=>"unset"===t||"undefined"===t||"none"===t)(e)||(h[t]=e.toString())};g("width",d),g("height",p);const b=[i.left,i.top,f,u];return h.viewBox=b.join(" "),{attributes:h,viewBox:b,body:c}}(t,o),d=u.attributes;if(o.inline&&(s.verticalAlign="-0.125em"),"svg"===c){i.style=e(e({},s),f),Object.assign(i,d);let t=0,o=n.id;return"string"==typeof o&&(o=o.replace(/-/g,"_")),i.innerHTML=function(t,e=T){const n=[];let o;for(;o=F.exec(t);)n.push(o[1]);if(!n.length)return t;const r="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const o="function"==typeof e?e(n):e+(L++).toString(),i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")})),t=t.replace(new RegExp(r,"g"),"")}(u.body,o?()=>o+"ID"+t++:"iconifyVue"),r("svg",i)}const{body:p,width:h,height:g}=t,b="mask"===c||"bg"!==c&&-1!==p.indexOf("currentColor"),m=function(t,e){let n=-1===t.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in e)n+=" "+o+'="'+e[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}(p,e(e({},d),{},{width:h+"",height:g+""}));var y;return i.style=e(e(e(e({},s),{},{"--svg":(y=m,'url("'+function(t){return"data:image/svg+xml,"+function(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(t)}(y)+'")'),width:Mt(d.width),height:Mt(d.height)},jt),b?Ot:kt),f),r("span",i)};var Tt;if(w(!0),Tt=U,C[""]=Tt,"undefined"!=typeof document&&"undefined"!=typeof window){dt();const t=window;if(void 0!==t.IconifyPreload){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach((t=>{try{("object"!=typeof t||null===t||t instanceof Array||"object"!=typeof t.icons||"string"!=typeof t.prefix||!O(t))&&console.error(n)}catch(e){console.error(n)}}))}if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"==typeof e&&null!==e)for(let t in e){const n="IconifyProviders["+t+"] is invalid.";try{const o=e[t];if("object"!=typeof o||!o||void 0===o.resources)continue;N(t,o)||console.error(n)}catch(Ct){console.error(n)}}}}const Lt=e(e({},l),{},{body:""});t("I",o({inheritAttrs:!1,data:()=>({_name:"",_loadingIcon:null,iconMounted:!1,counter:0}),mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if("object"==typeof t&&null!==t&&"string"==typeof t.body)return this._name="",this.abortLoading(),{data:t};let n;if("string"!=typeof t||null===(n=i(t,!1,!0)))return this.abortLoading(),null;const o=function(t){const e="string"==typeof t?i(t,!0,x):t;if(e){const t=y(e.provider,e.prefix),n=e.name;return t.icons[n]||(t.missing.has(n)?null:void 0)}}(n);if(!o)return this._loadingIcon&&this._loadingIcon.name===t||(this.abortLoading(),this._name="",null!==o&&(this._loadingIcon={name:t,abort:bt([n],(()=>{this.counter++}))})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const r=["iconify"];return""!==n.prefix&&r.push("iconify--"+n.prefix),""!==n.provider&&r.push("iconify--"+n.provider),{data:o,classes:r}}},render(){this.counter;const t=this.$attrs,n=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad):null;if(!n)return Ft(Lt,t);let o=t;return n.classes&&(o=e(e({},t),{},{class:("string"==typeof t.class?t.class+" ":"")+n.classes.join(" ")})),Ft(e(e({},l),n.data),o)}}))}}}))}();
