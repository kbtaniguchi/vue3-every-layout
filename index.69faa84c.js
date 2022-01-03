import{d as u,o as S,u as M,a as i,c as d,r as $,b as C,n as p,e as f,f as K,g as V,h as g,w as c,i as l,j as s,k as A,l as J,m as y,t as B,F as w,p as P,q as Q,s as X,v as Y}from"./vendor.253e261a.js";const Z=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const _ of r.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&o(_)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}};Z();var ee="/vue3-every-layout/icons.c0cc2b8f.svg";const I=document.createElement("style");document.head.appendChild(I);const m=a=>{const e=I.sheet;e!==null&&e.insertRule(a,e.cssRules.length)},k=()=>new Date().getTime().toString(16)+Math.floor(1e3*Math.random()).toString(16),te="_withSidebar_1ttli_2";var se={withSidebar:te},h=(a,e)=>{for(const[t,o]of e)a[t]=o;return a};const oe=["data-component-id"],ne=u({props:{side:{default:"left"},sideWidth:{default:"auto"},contentMin:{default:"50%"},space:{default:"var(--s0)"},noStretch:{type:Boolean,default:!1}},setup(a){const e=a,t=k();return S(()=>{const o=M(),n=`
  .${o.withSidebar}[data-component-id="${t}"] > ${e.side==="left"?":first-child":":last-child"} {
    flex-basis: ${e.sideWidth};
    flex-grow: 1;
  }
  `,r=`
  .${o.withSidebar}[data-component-id="${t}"] > ${e.side==="left"?":last-child":":first-child"} {
    flex-basis: 0;
    flex-grow: 999;
    min-width: ${e.contentMin};
  }
  `;m(n),m(r)}),(o,n)=>(i(),d("div",{"data-component-id":C(t),class:p(o.$style.withSidebar),style:f({gap:e.space,alignItems:e.noStretch?"flex-start":"stretch"})},[$(o.$slots,"default")],14,oe))}}),j={};j.$style=se;var ae=h(ne,[["__cssModules",j]]);const le="_stack_1usbb_2";var re={stack:le};const ce=["data-component-id"],ie=u({props:{space:{default:"var(--s0)"},recursive:{type:Boolean,default:!1},splitAfter:{default:0}},setup(a){const e=a,t=k();return S(()=>{const o=M(),n=`
  .${o.stack}[data-component-id="${t}"] ${e.recursive?"":">"} * + * {
    margin-top: ${e.space};
  }
  `;if(m(n),!e.splitAfter)return;const r=`
  .${o.stack}[data-component-id="${t}"]:only-child {
    height: 100%
  }
  `,_=`
  .${o.stack}[data-component-id="${t}"] > :nth-child(${e.splitAfter}) {
    margin-bottom: auto;
  }
  `;m(r),m(_)}),(o,n)=>(i(),d("div",{"data-component-id":C(t),class:p(o.$style.stack)},[$(o.$slots,"default")],10,ce))}}),W={};W.$style=re;var b=h(ie,[["__cssModules",W]]);const ue="_box_1k7hf_2",de="_heightStretch_1k7hf_9";var pe={box:ue,heightStretch:de};const _e=u({props:{padding:{default:"var(--s0)"},borderWidth:{default:"var(--border-thin)"},borderColor:{default:"var(--gray0)"},backgroundColor:{default:"inherit"},heightStretch:{type:Boolean,default:!1}},setup(a){const e=a;return(t,o)=>(i(),d("div",{class:p([t.$style.box,e.heightStretch?t.$style.heightStretch:""]),style:f({padding:e.padding,borderWidth:e.borderWidth,borderColor:e.borderColor,backgroundColor:e.backgroundColor})},[$(t.$slots,"default")],6))}}),H={};H.$style=pe;var N=h(_e,[["__cssModules",H]]);const he="_cluster_1hf6l_2";var fe={cluster:he};const me=u({props:{justify:{default:"flex-start"},align:{default:"flex-start"},space:{default:"var(--s0)"}},setup(a){const e=a;return(t,o)=>(i(),d("div",{class:p(t.$style.cluster),style:f({justifyContent:e.justify,alignItems:e.align,gap:e.space})},[$(t.$slots,"default")],6))}}),L={};L.$style=fe;var E=h(me,[["__cssModules",L]]);const $e="_withIcon_2ql58_2",ye="_flex_2ql58_7";var ve={withIcon:$e,flex:ye};const ge=["data-component-id","role","aria-label"],be=u({props:{space:{default:""},label:{default:""}},setup(a){const e=a,t=k();return S(()=>{if(!e.space)return;const n=`
  .${M().withIcon}[data-component-id="${t}"] > svg {
    margin-inline-end: ${e.space};
  }
  `;m(n)}),(o,n)=>(i(),d("span",{"data-component-id":C(t),class:p([o.$style.withIcon,e.space?o.$style.flex:""]),role:e.label?"img":"","aria-label":e.label},[$(o.$slots,"default")],10,ge))}}),F={};F.$style=ve;var Se=h(be,[["__cssModules",F]]);const Me="_menu_1lwli_2",Ce="_poweredBy_1lwli_18",we="_toolbar_1lwli_22",ke="_mainContent_1lwli_28";var xe={menu:Me,poweredBy:Ce,toolbar:we,mainContent:ke};const Pe=ee+"#hamburger",Ne=y("Vue3 Every Layout"),Ve=s("h2",null,"Layout Primitives",-1),Ae=s("ul",null,[s("li",null,"under construction...")],-1),Be=s("h2",null,"Composition Samples",-1),Ie=s("ul",null,[s("li",null,"under construction...")],-1),je=s("h2",null,"Appendix",-1),We=y("Modular Scale"),He=y("Color Palette"),Le=y(" powered by: "),Ee=s("ul",null,[s("li",null,[s("a",{href:"https://v3.ja.vuejs.org/"},"Vue.js")]),s("li",null,[s("a",{href:"https://every-layout.dev/"},"Every Layout")]),s("li",null,[s("a",{href:"https://www.refactoringui.com/"},"RefactoringUI")]),s("li",null,[s("a",{href:"https://hue360.herokuapp.com/"},"HUE/360")])],-1),Fe=[Le,Ee],Te=y("Home"),ze=s("span",null,"/",-1),De=s("svg",null,[s("use",{href:Pe})],-1),Oe=u({setup(a){const e=K(!0),t=()=>J().fullPath==="/",o=()=>{e.value=!e.value};return(n,r)=>{const _=V("router-link"),x=V("router-view");return i(),g(ae,null,{default:c(()=>[e.value?(i(),d("nav",{key:0,class:p(n.$style.menu)},[l(N,{"height-stretch":"",padding:"var(--s1)","border-width":"0"},{default:c(()=>[l(b,{"split-after":7},{default:c(()=>[s("h1",null,[l(_,{to:"/"},{default:c(()=>[Ne]),_:1})]),Ve,Ae,Be,Ie,je,s("ul",null,[s("li",null,[l(_,{to:"/modular-scale"},{default:c(()=>[We]),_:1})]),s("li",null,[l(_,{to:"/color-palette"},{default:c(()=>[He]),_:1})])]),s("aside",{class:p(n.$style.poweredBy)},Fe,2)]),_:1})]),_:1})],2)):A("",!0),s("main",{class:p(n.$style.mainContent)},[t()?A("",!0):(i(),d("div",{key:0,class:p(n.$style.toolbar)},[l(E,{space:"var(--s-1)",align:"center",justify:"space-between"},{default:c(()=>[l(E,null,{default:c(()=>[s("span",null,[l(_,{to:"/"},{default:c(()=>[Te]),_:1})]),ze]),_:1}),s("button",{onClick:o},[l(Se,null,{default:c(()=>[De,y(" "+B(e.value?"Hide Menu":"Show Menu"),1)]),_:1})])]),_:1})],2)),l(N,{padding:"var(--s1)","border-width":"0"},{default:c(()=>[l(x)]),_:1})],2)]),_:1})}}}),T={};T.$style=xe;var Re=h(Oe,[["__cssModules",T]]);const qe="_cover_1myvu_2";var Ge={cover:qe};const Ue=["data-component-id"],Ke=u({props:{centered:{default:"h1"},space:{default:"var(--s0)"},minHeight:{default:"100vh"},noPad:{type:Boolean,default:!1}},setup(a){const e=a,t=k();return S(()=>{const o=M(),n=`
  .${o.cover}[data-component-id="${t}"] > * {
    margin-top: ${e.space};
    margin-bottom: ${e.space};
  }
  `,r=`
  .${o.cover}[data-component-id="${t}"] > :first-child:not(${e.centered}) {
    margin-top: 0;
  }
  `,_=`
  .${o.cover}[data-component-id="${t}"] > :last-child:not(${e.centered}) {
    margin-bottom: 0;
  }
  `,x=`
  .${o.cover}[data-component-id="${t}"] > ${e.centered} {
    margin-top: auto;
    margin-bottom: auto;
  }
  `;m(n),m(r),m(_),m(x)}),(o,n)=>(i(),d("div",{"data-component-id":C(t),class:p(o.$style.cover),style:f({minHeight:e.minHeight,padding:e.noPad?0:e.space})},[$(o.$slots,"default")],14,Ue))}}),z={};z.$style=Ge;var D=h(Ke,[["__cssModules",z]]);const Je=s("h2",null,"Home",-1),Qe=u({setup(a){return(e,t)=>(i(),g(D,{centered:"h2","min-height":"80vh"},{default:c(()=>[Je]),_:1}))}});function*O(a,e){for(let t=a;t<=e;t++)yield t}const Xe="_grid_1gpuu_2";var Ye={grid:Xe};const Ze=u({props:{min:{default:"calc(var(--measure) / 3)"},space:{default:"var(--s0)"}},setup(a){const e=a;return(t,o)=>(i(),d("div",{class:p(t.$style.grid),style:f({gridGap:e.space,gridTemplateColumns:`repeat(auto-fit, minmax(min(${e.min}, 100%), 1fr))`})},[$(t.$slots,"default")],6))}}),R={};R.$style=Ye;var et=h(Ze,[["__cssModules",R]]);const tt="_textWhite_1il3t_2";var st={textWhite:tt};const ot=s("h4",null,"ex1. Applied to Button's back-ground-color",-1),nt=s("h4",null,"ex2. Darkest text on Lightest background",-1),at=u({props:{title:null,cssVarName:null},setup(a){const e=a,t=[...O(-3,3)];return(o,n)=>(i(),d(w,null,[s("h3",null,B(e.title),1),ot,l(et,{min:"5rem",class:p(o.$style.textWhite)},{default:c(()=>[(i(),d(w,null,P(t,r=>s("button",{key:"scaleNumber",style:f({backgroundColor:`var(${e.cssVarName}${r})`})}," \u30DC\u30BF\u30F3 ",4)),64))]),_:1},8,["class"]),nt,l(N,{style:f({backgroundColor:`var(${e.cssVarName}-3)`})},{default:c(()=>[s("p",{style:f({color:`var(${e.cssVarName}3)`})},"\u3042\u3044\u3046\u3048\u304A",4)]),_:1},8,["style"])],64))}}),q={};q.$style=st;var v=h(at,[["__cssModules",q]]);const lt="_textWhite_1il3t_2";var rt={textWhite:lt};const ct=s("h2",null,"Color Palette",-1),it=u({setup(a){return(e,t)=>(i(),g(b,null,{default:c(()=>[ct,l(v,{title:"Gray Scale","css-var-name":"--gray"}),l(v,{title:"Primary Color","css-var-name":"--primary-color"}),l(v,{title:"Accent Color: informative","css-var-name":"--informative-color"}),l(v,{title:"Accent Color: positive","css-var-name":"--positive-color"}),l(v,{title:"Accent Color: negative","css-var-name":"--negative-color"}),l(v,{title:"Accent Color: attentive","css-var-name":"--attentive-color"})]),_:1}))}}),G={};G.$style=rt;var ut=h(it,[["__cssModules",G]]);const dt="_boxPaddingScale_1yhzs_2";var pt={boxPaddingScale:dt};const _t=s("h2",null,"Modular Scale",-1),ht=s("h3",null,"ex1. Applied to Text's font-size",-1),ft=s("h3",null,"ex2. Applied to Box's padding",-1),mt=u({setup(a){const e=[...O(-5,5)];return(t,o)=>(i(),g(b,null,{default:c(()=>[_t,ht,l(b,null,{default:c(()=>[(i(),d(w,null,P(e,n=>s("div",{key:"scaleNumber",style:f({fontSize:`var(--s${n})`})}," \u3042\u3044\u3046\u3048\u304A ",4)),64))]),_:1}),ft,l(b,{class:p(t.$style.boxPaddingScale)},{default:c(()=>[(i(),d(w,null,P(e,n=>s("div",{key:"scaleNumber",style:f({padding:`var(--s${n})`})}," \u3042 ",4)),64))]),_:1},8,["class"])]),_:1}))}}),U={};U.$style=pt;var $t=h(mt,[["__cssModules",U]]);const yt=s("div",null,[s("h2",null,"Page Not Found"),s("p",null,"Please check your address bar.")],-1),vt=u({setup(a){return(e,t)=>(i(),g(D,{centered:"div","min-height":"100%"},{default:c(()=>[yt]),_:1}))}}),gt=Q({history:X(),routes:[{path:"/",component:Qe},{path:"/modular-scale",component:$t},{path:"/color-palette",component:ut},{path:"/:pathMatch(.*)*",component:vt}]});Y(Re).use(gt).mount("#app");
