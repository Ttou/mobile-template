import{c as A,q,P as M,m as w,n as B,T as D,j as O,M as K,U as X,V as G,f as C,L as Q,E as W,F as J,G as Y,e as _,W as Z,X as ee,B as x,Q as d}from"./ajax-0545a034.js";import{d as S,w as k,o as ne,H as te,c as n,m as E,r as oe,g as ae,a as N,S as P,b as $,e as ie,t as F,h as se,_ as m}from"./index-f20c7d74.js";let p=0;function le(e){e?(p||document.body.classList.add("van-toast--unclickable"),p++):p&&(p--,p||document.body.classList.remove("van-toast--unclickable"))}const[ce,g]=A("toast"),re=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],ue={icon:String,show:Boolean,type:w("text"),overlay:Boolean,message:B,iconSize:B,duration:D(2e3),position:w("middle"),teleport:[String,Object],wordBreak:String,className:O,iconPrefix:String,transition:w("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:O,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var U=S({name:ce,props:ue,emits:["update:show"],setup(e,{emit:o,slots:t}){let i,u=!1;const a=()=>{const c=e.show&&e.forbidClick;u!==c&&(u=c,le(u))},s=c=>o("update:show",c),f=()=>{e.closeOnClick&&s(!1)},l=()=>clearTimeout(i),y=()=>{const{icon:c,type:r,iconSize:b,iconPrefix:H,loadingType:V}=e;if(c||r==="success"||r==="fail")return n(K,{name:c||r,size:b,class:g("icon"),classPrefix:H},null);if(r==="loading")return n(X,{class:g("loading"),size:b,type:V},null)},j=()=>{const{type:c,message:r}=e;if(t.message)return n("div",{class:g("text")},[t.message()]);if(G(r)&&r!=="")return c==="html"?n("div",{key:0,class:g("text"),innerHTML:String(r)},null):n("div",{class:g("text")},[r])};return k(()=>[e.show,e.forbidClick],a),k(()=>[e.show,e.type,e.message,e.duration],()=>{l(),e.show&&e.duration>0&&(i=setTimeout(()=>{s(!1)},e.duration))}),ne(a),te(a),()=>n(M,E({class:[g([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:f,onClosed:l,"onUpdate:show":s},q(e,re)),{default:()=>[y(),j()]})}});const de={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let v=[],fe=!1,z=C({},de);const me=new Map;function L(e){return Q(e)?e:{message:e}}function ge(){const{instance:e,unmount:o}=J({setup(){const t=oe(""),{open:i,state:u,close:a,toggle:s}=Y(),f=()=>{},l=()=>n(U,E(u,{onClosed:f,"onUpdate:show":s}),null);return k(t,y=>{u.message=y}),ae().render=l,{open:i,close:a,message:t}}});return e}function he(){if(!v.length||fe){const e=ge();v.push(e)}return v[v.length-1]}function pe(e={}){if(!W)return{};const o=he(),t=L(e);return o.open(C({},z,me.get(t.type||z.type),t)),o}const ye=e=>o=>pe(C({type:e},L(o))),ve=ye("loading");_(U);const[I,we]=A("space"),ke={align:String,direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:8},wrap:Boolean,fill:Boolean};function R(e=[]){const o=[];return e.forEach(t=>{Array.isArray(t)?o.push(...t):t.type===P?o.push(...R(t.children)):o.push(t)}),o.filter(t=>{var i;return!(t&&(typeof Comment<"u"&&t.type===Comment||t.type===P&&((i=t.children)==null?void 0:i.length)===0||t.type===Text&&t.children.trim()===""))})}var Ce=S({name:I,props:ke,setup(e,{slots:o}){const t=N(()=>{var a;return(a=e.align)!=null?a:e.direction==="horizontal"?"center":""}),i=a=>typeof a=="number"?a+"px":a,u=a=>{const s={},f=`${i(Array.isArray(e.size)?e.size[0]:e.size)}`,l=`${i(Array.isArray(e.size)?e.size[1]:e.size)}`;return a?e.wrap?{marginBottom:l}:{}:(e.direction==="horizontal"&&(s.marginRight=f),(e.direction==="vertical"||e.wrap)&&(s.marginBottom=l),s)};return()=>{var a;const s=R((a=o.default)==null?void 0:a.call(o));return n("div",{class:[we({[e.direction]:e.direction,[`align-${t.value}`]:t.value,wrap:e.wrap,fill:e.fill})]},[s.map((f,l)=>n("div",{key:`item-${l}`,class:`${I}-item`,style:u(l===s.length-1)},[f]))])}}});const T=_(Ce);function Se(){const e=Z(),o=N(()=>e.count);function t(){e.increment()}return{count:o,handleClick:t}}const be={getInfo(){return ee.get("/demo/info")}};function Be(){const e=$({title:"-"});async function o(){const t=ve({message:"加载中",duration:0,forbidClick:!0});try{const i=await be.getInfo();e.title=i.title}finally{t.close()}}return ie(()=>{o()}),{...F(e)}}function Oe(){const e=$({show:!1,popupRef:{}});function o(){e.show=!0}function t(){console.log("open popup")}return{...F(e),handleShow:o,handleOpen:t}}const xe="view__KzK0f",Pe="section__BVOox",ze="popupContent__mbUT8",h={view:xe,section:Pe,popupContent:ze},Me=S({name:se.INDEX.name,setup(){const e=Se(),o=Be(),t=Oe();return{...e,...o,...t}},render(){return n("div",{class:h.view},[n("h2",null,[this.title]),n("div",{class:h.section},[n("h3",null,[m("Store")]),n("p",null,[this.count]),n(x,{type:"primary",onClick:this.handleClick},{default:()=>[m("点击")]})]),n("div",{class:h.section},[n("h3",null,[m("框架图标")]),n(T,null,{default:()=>[n(d,{icon:"ant-design:account-book-filled"},null),n(d,{icon:"ant-design:aim-outlined"},null),n(d,{icon:"ant-design:alert-filled"},null)]})]),n("div",{class:h.section},[n("h3",null,[m("弹出层")]),n(x,{type:"primary",onClick:this.handleShow},{default:()=>[m("点击")]})]),n("div",{class:h.section},[n("h3",null,[m("自定义图标")]),n(T,null,{default:()=>[n(d,{icon:"custom:coffee"},null),n(d,{icon:"custom:chips"},null),n(d,{icon:"custom:ice-cream"},null),n(d,{icon:"custom:coke"},null),n(d,{icon:"custom:hamburg"},null)]})]),n(M,{ref:"popupRef",show:this.show,"onUpdate:show":e=>this.show=e,position:"center",teleport:"#app",closeable:!0,onOpen:this.handleOpen},{default:()=>n("div",{class:h.popupContent},[m("哈哈")])})])}});export{Me as default};
