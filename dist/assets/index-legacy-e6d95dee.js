!function(){function e(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function t(t){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?e(Object(l),!0).forEach((function(e){o(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):e(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(e,t,o){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t,o,n,l,i,r){try{var a=e[i](r),s=a.value}catch(c){return void o(c)}a.done?t(s):Promise.resolve(s).then(n,l)}function l(e){return function(){var t=this,o=arguments;return new Promise((function(l,i){var r=e.apply(t,o);function a(e){n(r,l,i,a,s,"next",e)}function s(e){n(r,l,i,a,s,"throw",e)}a(void 0)}))}}System.register(["./ajax-legacy-939d99e9.js","./index-legacy-225db764.js"],(function(e,o){"use strict";var n,i,r,a,s,c,u,d,p,v,f,y,m,h,g,b,w,x,O,S,k,C,z,B,P,j,I,T,A,E,_,L,D,N,R,X,$,K,Y,H,M,U,q,V,F,G,J,Q,Z,W,ee,te,oe,ne,le,ie=document.createElement("style");return ie.textContent=".view__KzK0f{display:flex;align-items:center;justify-content:center;flex-flow:column nowrap;min-height:100vh;padding-bottom:16vw;box-sizing:border-box}.section__BVOox{display:flex;flex-flow:column nowrap;align-items:center}.popupContent__mbUT8{display:flex;justify-content:center;align-items:center;width:53.33333vw;height:53.33333vw;font-size:4.8vw}\n",document.head.appendChild(ie),{setters:[e=>{n=e.h,i=e.d,r=e.z,a=e.n,s=e.A,c=e.C,u=e.c,d=e.r,p=e.i,v=e.D,f=e.I,y=e.E,m=e.t,h=e.F,g=e.G,b=e.H,w=e.J,x=e.T,O=e.g,S=e.K,k=e.v,C=e.P,z=e.L,B=e.f,P=e.M,j=e.N,I=e.O,T=e.x,A=e.p,E=e.Q,_=e.R,L=e.S,D=e.q},e=>{N=e.g,R=e.c,X=e.d,$=e.a,K=e.r,Y=e.H,H=e.O,M=e.w,U=e.e,q=e.n,V=e.o,F=e.L,G=e.K,J=e.X,Q=e.Y,Z=e.m,W=e.G,ee=e.b,te=e.Z,oe=e.t,ne=e.f,le=e._}],execute:function(){function o(e){const t=N();t&&n(t.proxy,e)}const[ie,re]=i("loading"),ae=Array(12).fill(null).map(((e,t)=>R("i",{class:re("line",String(t+1))},null))),se=R("svg",{class:re("circular"),viewBox:"25 25 50 50"},[R("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),ce={size:a,type:s("circular"),color:String,vertical:Boolean,textSize:a,textColor:String};var ue=X({name:ie,props:ce,setup(e,{slots:t}){const o=$((()=>n({color:e.color},r(e.size)))),l=()=>{const n="spinner"===e.type?ae:se;return R("span",{class:re("spinner",e.type),style:o.value},[t.icon?t.icon():n])},i=()=>{var o;if(t.default)return R("span",{class:re("text"),style:{fontSize:c(e.textSize),color:null!=(o=e.textColor)?o:e.color}},[t.default()])};return()=>{const{type:t,vertical:o}=e;return R("div",{class:re([t,{vertical:o}]),"aria-live":"polite","aria-busy":!0},[l(),i()])}}});const de=u(ue),[pe,ve]=i("button"),fe=n({},d,{tag:s("button"),text:String,icon:String,type:s("default"),size:s("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:s("button"),loadingSize:a,loadingText:String,loadingType:String,iconPosition:s("left")});var ye=X({name:pe,props:fe,emits:["click"],setup(e,{emit:t,slots:o}){const n=p(),l=()=>e.loading?o.loading?o.loading():R(de,{size:e.loadingSize,type:e.loadingType,class:ve("loading")},null):o.icon?R("div",{class:ve("icon")},[o.icon()]):e.icon?R(f,{name:e.icon,class:ve("icon"),classPrefix:e.iconPrefix},null):void 0,i=()=>{let t;if(t=e.loading?e.loadingText:o.default?o.default():e.text,t)return R("span",{class:ve("text")},[t])},r=()=>{const{color:t,plain:o}=e;if(t){const e={color:o?t:"white"};return o||(e.background=t),t.includes("gradient")?e.border=0:e.borderColor=t,e}},a=o=>{e.loading?y(o):e.disabled||(t("click",o),n())};return()=>{const{tag:t,type:o,size:n,block:s,round:c,plain:u,square:d,loading:p,disabled:f,hairline:y,nativeType:m,iconPosition:h}=e,g=[ve([o,n,{plain:u,block:s,round:c,square:d,loading:p,disabled:f,hairline:y}]),{[v]:y}];return R(t,{type:m,class:g,style:r(),disabled:f,onClick:a},{default:()=>[R("div",{class:ve("content")},["left"===h&&l(),i(),"right"===h&&l()])]})}}});const me=u(ye),he={show:Boolean,zIndex:a,overlay:m,duration:a,teleport:[String,Object],lockScroll:m,lazyRender:m,beforeClose:Function,overlayStyle:Object,overlayClass:h,transitionAppear:Boolean,closeOnClickOverlay:m};let ge=0;const be="van-overflow-hidden";function we(e,t){const o=function(){const e=K(0),t=K(0),o=K(0),n=K(0),l=K(0),i=K(0),r=K(""),a=()=>{o.value=0,n.value=0,l.value=0,i.value=0,r.value=""};return{move:a=>{const s=a.touches[0];var c,u;o.value=(s.clientX<0?0:s.clientX)-e.value,n.value=s.clientY-t.value,l.value=Math.abs(o.value),i.value=Math.abs(n.value),(!r.value||l.value<10&&i.value<10)&&(r.value=(c=l.value)>(u=i.value)?"horizontal":u>c?"vertical":"")},start:o=>{a(),e.value=o.touches[0].clientX,t.value=o.touches[0].clientY},reset:a,startX:e,startY:t,deltaX:o,deltaY:n,offsetX:l,offsetY:i,direction:r,isVertical:()=>"vertical"===r.value,isHorizontal:()=>"horizontal"===r.value}}(),n=t=>{o.move(t);const n=o.deltaY.value>0?"10":"01",l=b(t.target,e.value),{scrollHeight:i,offsetHeight:r,scrollTop:a}=l;let s="11";0===a?s=r>=i?"00":"01":a+r>=i&&(s="10"),"11"===s||!o.isVertical()||parseInt(s,2)&parseInt(n,2)||y(t,!0)},l=()=>{document.addEventListener("touchstart",o.start),document.addEventListener("touchmove",n,{passive:!1}),ge||document.body.classList.add(be),ge++},i=()=>{ge&&(document.removeEventListener("touchstart",o.start),document.removeEventListener("touchmove",n),ge--,ge||document.body.classList.remove(be))},r=()=>t()&&i();g((()=>t()&&l())),Y(r),H(r),M(t,(e=>{e?l():i()}))}function xe(e){const t=K(!1);return M(e,(e=>{e&&(t.value=e)}),{immediate:!0}),e=>()=>t.value?e():null}const[Oe,Se]=i("overlay"),ke={show:Boolean,zIndex:a,duration:a,className:h,lockScroll:m,lazyRender:m,customStyle:Object};var Ce=X({name:Oe,props:ke,setup(e,{slots:t}){const o=K(),l=xe((()=>e.show||!e.lazyRender))((()=>{var l;const i=n(O(e.zIndex),e.customStyle);return S(e.duration)&&(i.animationDuration=`${e.duration}s`),U(R("div",{ref:o,style:i,class:[Se(),e.className]},[null==(l=t.default)?void 0:l.call(t)]),[[k,e.show]])}));return w("touchmove",(t=>{e.lockScroll&&y(t,!0)}),{target:o}),()=>R(x,{name:"van-fade",appear:!0},{default:l})}});const ze=u(Ce),Be=n({},he,{round:Boolean,position:s("center"),closeIcon:s("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:s("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[Pe,je]=i("popup");var Ie=X({name:Pe,inheritAttrs:!1,props:Be,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:n,slots:l}){let i,r;const a=K(),s=K(),c=xe((()=>e.show||!e.lazyRender)),u=$((()=>{const t={zIndex:a.value};if(S(e.duration)){t["center"===e.position?"animationDuration":"transitionDuration"]=`${e.duration}s`}return t})),d=()=>{i||(i=!0,a.value=void 0!==e.zIndex?+e.zIndex:z(),t("open"))},p=()=>{i&&B(e.beforeClose,{done(){i=!1,t("close"),t("update:show",!1)}})},v=o=>{t("clickOverlay",o),e.closeOnClickOverlay&&p()},y=()=>{if(e.overlay)return R(ze,{show:e.show,class:e.overlayClass,zIndex:a.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:v},{default:l["overlay-content"]})},m=e=>{t("clickCloseIcon",e),p()},h=()=>{if(e.closeable)return R(f,{role:"button",tabindex:0,name:e.closeIcon,class:[je("close-icon",e.closeIconPosition),P],classPrefix:e.iconPrefix,onClick:m},null)},g=()=>t("opened"),b=()=>t("closed"),O=e=>t("keydown",e),j=c((()=>{var t;const{round:o,position:i,safeAreaInsetTop:r,safeAreaInsetBottom:a}=e;return U(R("div",Z({ref:s,style:u.value,role:"dialog",tabindex:0,class:[je({round:o,[i]:i}),{"van-safe-area-top":r,"van-safe-area-bottom":a}],onKeydown:O},n),[null==(t=l.default)?void 0:t.call(l),h()]),[[k,e.show]])})),I=()=>{const{position:t,transition:o,transitionAppear:n}=e;return R(x,{name:o||("center"===t?"van-fade":`van-popup-slide-${t}`),appear:n,onAfterEnter:g,onAfterLeave:b},{default:j})};return M((()=>e.show),(e=>{e&&!i&&(d(),0===n.tabindex&&q((()=>{var e;null==(e=s.value)||e.focus()}))),!e&&i&&(i=!1,t("close"))})),o({popupRef:s}),we(s,(()=>e.show&&e.lockScroll)),w("popstate",(()=>{e.closeOnPopstate&&(p(),r=!1)})),V((()=>{e.show&&d()})),F((()=>{r&&(t("update:show",!0),r=!1)})),Y((()=>{e.show&&e.teleport&&(p(),r=!0)})),G(C,(()=>e.show)),()=>e.teleport?R(J,{to:e.teleport},{default:()=>[y(),I()]}):R(Q,null,[y(),I()])}});const Te=u(Ie);let Ae=0;const[Ee,_e]=i("toast"),Le=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],De={icon:String,show:Boolean,type:s("text"),overlay:Boolean,message:a,iconSize:a,duration:I(2e3),position:s("middle"),teleport:[String,Object],wordBreak:String,className:h,iconPrefix:String,transition:s("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:h,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var Ne=X({name:Ee,props:De,emits:["update:show"],setup(e,{emit:t,slots:o}){let n,l=!1;const i=()=>{const t=e.show&&e.forbidClick;l!==t&&(l=t,l?(Ae||document.body.classList.add("van-toast--unclickable"),Ae++):Ae&&(Ae--,Ae||document.body.classList.remove("van-toast--unclickable")))},r=e=>t("update:show",e),a=()=>{e.closeOnClick&&r(!1)},s=()=>clearTimeout(n),c=()=>{const{icon:t,type:o,iconSize:n,iconPrefix:l,loadingType:i}=e;return t||"success"===o||"fail"===o?R(f,{name:t||o,size:n,class:_e("icon"),classPrefix:l},null):"loading"===o?R(de,{class:_e("loading"),size:n,type:i},null):void 0},u=()=>{const{type:t,message:n}=e;return o.message?R("div",{class:_e("text")},[o.message()]):S(n)&&""!==n?"html"===t?R("div",{key:0,class:_e("text"),innerHTML:String(n)},null):R("div",{class:_e("text")},[n]):void 0};return M((()=>[e.show,e.forbidClick]),i),M((()=>[e.show,e.type,e.message,e.duration]),(()=>{s(),e.show&&e.duration>0&&(n=setTimeout((()=>{r(!1)}),e.duration))})),V(i),W(i),()=>R(Te,Z({class:[_e([e.position,"normal"===e.wordBreak?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:a,onClosed:s,"onUpdate:show":r},j(e,Le)),{default:()=>[c(),u()]})}});let Re=[],Xe=n({},{icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1});const $e=new Map;function Ke(e){return A(e)?e:{message:e}}function Ye(){const{instance:e,unmount:t}=function(e){const t=T(e),o=document.createElement("div");return document.body.appendChild(o),{instance:t.mount(o),unmount(){t.unmount(),document.body.removeChild(o)}}}({setup(){const e=K(""),{open:t,state:l,close:i,toggle:r}=function(){const e=ee({show:!1}),t=t=>{e.show=t},l=o=>{n(e,o,{transitionAppear:!0}),t(!0)},i=()=>t(!1);return o({open:l,close:i,toggle:t}),{open:l,close:i,state:e,toggle:t}}(),a=()=>{};return M(e,(e=>{l.message=e})),N().render=()=>R(Ne,Z(l,{onClosed:a,"onUpdate:show":r}),null),{open:t,close:i,message:e}}});return e}function He(e={}){if(!E)return{};const t=function(){if(!Re.length){const e=Ye();Re.push(e)}return Re[Re.length-1]}(),o=Ke(e);return t.open(n({},Xe,$e.get(o.type||Xe.type),o)),t}const Me=(Ue="loading",e=>He(n({type:Ue},Ke(e))));var Ue;u(Ne);const[qe,Ve]=i("space"),Fe={align:String,direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:8},wrap:Boolean,fill:Boolean};function Ge(e=[]){const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...e):e.type===Q?t.push(...Ge(e.children)):t.push(e)})),t.filter((e=>{var t;return!(e&&("undefined"!=typeof Comment&&e.type===Comment||e.type===Q&&0===(null==(t=e.children)?void 0:t.length)||e.type===Text&&""===e.children.trim()))}))}var Je=X({name:qe,props:Fe,setup(e,{slots:t}){const o=$((()=>{var t;return null!=(t=e.align)?t:"horizontal"===e.direction?"center":""})),n=e=>"number"==typeof e?e+"px":e,l=t=>{const o={},l=`${n(Array.isArray(e.size)?e.size[0]:e.size)}`,i=`${n(Array.isArray(e.size)?e.size[1]:e.size)}`;return t?e.wrap?{marginBottom:i}:{}:("horizontal"===e.direction&&(o.marginRight=l),("vertical"===e.direction||e.wrap)&&(o.marginBottom=i),o)};return()=>{var n;const i=Ge(null==(n=t.default)?void 0:n.call(t));return R("div",{class:[Ve({[e.direction]:e.direction,[`align-${o.value}`]:o.value,wrap:e.wrap,fill:e.fill})]},[i.map(((e,t)=>R("div",{key:`item-${t}`,class:`${qe}-item`,style:l(t===i.length-1)},[e])))])}}});const Qe=u(Je);const Ze={getInfo:()=>L.get("/demo/info")};function We(){const e=ee({title:"-"});function o(){return(o=l((function*(){const t=Me({message:"加载中",duration:0,forbidClick:!0});try{const o=yield Ze.getInfo();e.title=o.title}finally{t.close()}}))).apply(this,arguments)}return te((()=>{!function(){o.apply(this,arguments)}()})),t({},oe(e))}const et="view__KzK0f",tt="section__BVOox",ot="popupContent__mbUT8";e("default",X({name:ne.INDEX.name,setup(){const e=function(){const e=_();return{count:$((()=>e.count)),handleClick:function(){e.increment()}}}(),o=We(),n=function(){const e=ee({show:!1,popupRef:{}});return t(t({},oe(e)),{},{handleShow:function(){e.show=!0},handleOpen:function(){console.log("open popup")}})}();return t(t(t({},e),o),n)},render(){return R("div",{class:et},[R("h2",null,[this.title]),R("div",{class:tt},[R("h3",null,[le("Store")]),R("p",null,[this.count]),R(me,{type:"primary",onClick:this.handleClick},{default:()=>[le("点击")]})]),R("div",{class:tt},[R("h3",null,[le("框架图标")]),R(Qe,null,{default:()=>[R(D,{icon:"ant-design:account-book-filled"},null),R(D,{icon:"ant-design:aim-outlined"},null),R(D,{icon:"ant-design:alert-filled"},null)]})]),R("div",{class:tt},[R("h3",null,[le("弹出层")]),R(me,{type:"primary",onClick:this.handleShow},{default:()=>[le("点击")]})]),R("div",{class:tt},[R("h3",null,[le("自定义图标")]),R(Qe,null,{default:()=>[R(D,{icon:"custom:coffee"},null),R(D,{icon:"custom:chips"},null),R(D,{icon:"custom:ice-cream"},null),R(D,{icon:"custom-coke"},null),R(D,{icon:"custom-hamburg"},null)]})]),R(Te,{ref:"popupRef",show:this.show,"onUpdate:show":e=>this.show=e,position:"center",teleport:"#app",closeable:!0,onOpen:this.handleOpen},{default:()=>R("div",{class:ot},[le("哈哈")])})])}}))}}}))}();
