import{b as k,r as d,h as w,t as _,F as S,d as g,I as v,k as l,m as I,G as B,c as e,H as s,J as y,p as a,K as O,S as E,P as F,L as r,N,O as b}from"./chunk-libs-Kqqxeode.js";import{u as A,a as H,C as R,W as T,_ as W}from"./index-Qwj4jeuO.js";function $(){const o=A(),n=k(()=>o.count);function t(){o.increment()}return{count:n,handleClick:t}}const P={getInfo(){return H.get("/demo/info")}};function V(){const o=d({title:"-"});async function n(){const t=S({message:"加载中",duration:0,forbidClick:!0});try{const i=await P.getInfo();o.title=i.title}finally{t.close()}}return w(()=>{n()}),{..._(o)}}function D(){const o=d({show:!1,popupRef:{}});function n(){o.show=!0}function t(){console.log("open popup")}return{..._(o),handleShow:n,handleOpen:t}}const L=g({name:R.INDEX.name,components:{Icon:v,Welcome:T},setup(){const o=$(),n=V(),t=D();return{...o,...n,...t}}}),u=o=>(N("data-v-897cd548"),o=o(),b(),o),M={class:"page"},U={class:"section"},j=u(()=>s("h3",null,"Store",-1)),G={class:"section"},J=u(()=>s("h3",null,"弹出层",-1)),K={class:"section"},X=u(()=>s("h3",null,"自定义图标",-1)),q=u(()=>s("div",{class:"popup__content"},"哈哈",-1));function x(o,n,t,i,z,Q){const m=l("Welcome"),p=O,c=l("Icon"),f=E,h=F;return I(),B("div",M,[e(m,{msg:o.title},null,8,["msg"]),s("div",U,[j,s("p",null,y(o.count),1),e(p,{type:"primary",onClick:o.handleClick},{default:a(()=>[r("点击")]),_:1},8,["onClick"])]),s("div",G,[J,e(p,{type:"primary",onClick:o.handleShow},{default:a(()=>[r("点击")]),_:1},8,["onClick"])]),s("div",K,[X,e(f,null,{default:a(()=>[e(c,{icon:"custom:coffee"}),e(c,{icon:"custom:chips"}),e(c,{icon:"custom:ice-cream"}),e(c,{icon:"custom:coke"}),e(c,{icon:"custom:hamburg"})]),_:1})]),e(h,{ref:"popupRef",show:o.show,"onUpdate:show":n[0]||(n[0]=C=>o.show=C),class:"popup",position:"center",closeable:"",onOpen:o.handleOpen},{default:a(()=>[q]),_:1},8,["show","onOpen"])])}const oo=W(L,[["render",x],["__scopeId","data-v-897cd548"]]);export{oo as default};
