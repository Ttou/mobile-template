import{f as k,r as d,b as v,t as h,G as w,H as S,d as g,I,m as r,n as y,J as B,c as t,K as e,L as O,q as a,N as F,S as E,P as N,O as l,Q as b,U as H}from"./chunk-libs-KRvFa_2g.js";import{u as R,a as A,C as D,W as T,_ as W}from"./index-9okEyw-J.js";function $(){const o=R(),n=k(()=>o.count);function s(){o.increment()}return{count:n,handleClick:s}}const J={getInfo(){return A.get("/demo/info")}};function P(){const o=d({title:"-"});async function n(){const s=w({message:"加载中",duration:0,forbidClick:!0});try{const i=await J.getInfo();o.title=i.title}finally{s.close()}}return v(()=>{n()}),{...h(o)}}function U(){const o=S();function n(){o.push({path:"/other"})}return{handleJumpOther:n}}function V(){const o=d({show:!1,popupRef:{}});function n(){o.show=!0}function s(){console.log("open popup")}return{...h(o),handleShow:n,handleOpen:s}}const L=g({name:D.INDEX.name,components:{Icon:I,Welcome:T},setup(){const o=$(),n=P(),s=V(),i=U();return{...o,...n,...s,...i}}}),u=o=>(b("data-v-10929aaa"),o=o(),H(),o),M={class:"page"},j={class:"section"},q=u(()=>e("h3",null,"Store",-1)),G={class:"section"},K=u(()=>e("h3",null,"弹出层",-1)),Q={class:"section"},X=u(()=>e("h3",null,"跳转页面",-1)),z={class:"section"},Y=u(()=>e("h3",null,"自定义图标",-1)),Z=u(()=>e("div",{class:"popup__content"},"哈哈",-1));function x(o,n,s,i,oo,no){const _=r("Welcome"),p=F,c=r("Icon"),m=E,f=N;return y(),B("div",M,[t(_,{msg:o.title},null,8,["msg"]),e("div",j,[q,e("p",null,O(o.count),1),t(p,{type:"primary",onClick:o.handleClick},{default:a(()=>[l("点击")]),_:1},8,["onClick"])]),e("div",G,[K,t(p,{type:"primary",onClick:o.handleShow},{default:a(()=>[l("点击")]),_:1},8,["onClick"])]),e("div",Q,[X,t(p,{type:"primary",onClick:o.handleJumpOther},{default:a(()=>[l("跳转")]),_:1},8,["onClick"])]),e("div",z,[Y,t(m,null,{default:a(()=>[t(c,{icon:"custom:coffee"}),t(c,{icon:"custom:chips"}),t(c,{icon:"custom:ice-cream"}),t(c,{icon:"custom:coke"}),t(c,{icon:"custom:hamburg"})]),_:1})]),t(f,{ref:"popupRef",show:o.show,"onUpdate:show":n[0]||(n[0]=C=>o.show=C),class:"popup",position:"center",closeable:"",onOpen:o.handleOpen},{default:a(()=>[Z]),_:1},8,["show","onOpen"])])}const so=W(L,[["render",x],["__scopeId","data-v-10929aaa"]]);export{so as default};
