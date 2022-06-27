import{L as z,M as ee,S as X,i as Y,s as Z,e as m,N as G,k as I,t as P,c as _,a as g,O as L,d as v,m as $,h as q,b as n,f as J,g as U,J as o,P as Q,j as W,E as H,Q as te,R as se,w as oe,K as re,x as ne,T as le,y as ae,q as ie,o as ce,B as de}from"../chunks/index-73aad2e3.js";import{w as ue}from"../chunks/index-afa5a017.js";function F(e){return Object.prototype.toString.call(e)==="[object Date]"}function K(e,s,t,r){if(typeof t=="number"||F(t)){const l=r-t,a=(t-s)/(e.dt||1/60),c=e.opts.stiffness*l,i=e.opts.damping*a,f=(c-i)*e.inv_mass,u=(a+f)*e.dt;return Math.abs(u)<e.opts.precision&&Math.abs(l)<e.opts.precision?r:(e.settled=!1,F(t)?new Date(t.getTime()+u):t+u)}else{if(Array.isArray(t))return t.map((l,a)=>K(e,s[a],t[a],r[a]));if(typeof t=="object"){const l={};for(const a in t)l[a]=K(e,s[a],t[a],r[a]);return l}else throw new Error(`Cannot spring ${typeof t} values`)}}function ve(e,s={}){const t=ue(e),{stiffness:r=.15,damping:l=.8,precision:a=.01}=s;let c,i,f,u=e,M=e,S=1,k=0,y=!1;function O(h,p={}){M=h;const T=f={};if(e==null||p.hard||x.stiffness>=1&&x.damping>=1)return y=!0,c=z(),u=h,t.set(e=M),Promise.resolve();if(p.soft){const w=p.soft===!0?.5:+p.soft;k=1/(w*60),S=0}return i||(c=z(),y=!1,i=ee(w=>{if(y)return y=!1,i=null,!1;S=Math.min(S+k,1);const E={inv_mass:S,opts:x,settled:!0,dt:(w-c)*60/1e3},b=K(E,u,e,M);return c=w,u=e,t.set(e=b),E.settled&&(i=null),!E.settled})),new Promise(w=>{i.promise.then(()=>{T===f&&w()})})}const x={set:O,update:(h,p)=>O(h(M,e),p),subscribe:t.subscribe,stiffness:r,damping:l,precision:a};return x}function pe(e){let s,t,r,l,a,c,i,f,u=Math.floor(e[1]+1)+"",M,S,k,y=Math.floor(e[1])+"",O,x,h,p,T,w,E;return{c(){s=m("div"),t=m("button"),r=G("svg"),l=G("path"),a=I(),c=m("div"),i=m("div"),f=m("strong"),M=P(u),S=I(),k=m("strong"),O=P(y),x=I(),h=m("button"),p=G("svg"),T=G("path"),this.h()},l(b){s=_(b,"DIV",{class:!0});var d=g(s);t=_(d,"BUTTON",{"aria-label":!0,class:!0});var B=g(t);r=L(B,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var j=g(r);l=L(j,"path",{d:!0,class:!0}),g(l).forEach(v),j.forEach(v),B.forEach(v),a=$(d),c=_(d,"DIV",{class:!0});var N=g(c);i=_(N,"DIV",{class:!0,style:!0});var R=g(i);f=_(R,"STRONG",{class:!0,"aria-hidden":!0});var C=g(f);M=q(C,u),C.forEach(v),S=$(R),k=_(R,"STRONG",{class:!0});var D=g(k);O=q(D,y),D.forEach(v),R.forEach(v),N.forEach(v),x=$(d),h=_(d,"BUTTON",{"aria-label":!0,class:!0});var A=g(h);p=L(A,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var V=g(p);T=L(V,"path",{d:!0,class:!0}),g(T).forEach(v),V.forEach(v),A.forEach(v),d.forEach(v),this.h()},h(){n(l,"d","M0,0.5 L1,0.5"),n(l,"class","svelte-sx9eo4"),n(r,"aria-hidden","true"),n(r,"viewBox","0 0 1 1"),n(r,"class","svelte-sx9eo4"),n(t,"aria-label","Decrease the counter by one"),n(t,"class","svelte-sx9eo4"),n(f,"class","hidden svelte-sx9eo4"),n(f,"aria-hidden","true"),n(k,"class","svelte-sx9eo4"),n(i,"class","counter-digits svelte-sx9eo4"),J(i,"transform","translate(0, "+100*e[2]+"%)"),n(c,"class","counter-viewport svelte-sx9eo4"),n(T,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),n(T,"class","svelte-sx9eo4"),n(p,"aria-hidden","true"),n(p,"viewBox","0 0 1 1"),n(p,"class","svelte-sx9eo4"),n(h,"aria-label","Increase the counter by one"),n(h,"class","svelte-sx9eo4"),n(s,"class","counter svelte-sx9eo4")},m(b,d){U(b,s,d),o(s,t),o(t,r),o(r,l),o(s,a),o(s,c),o(c,i),o(i,f),o(f,M),o(i,S),o(i,k),o(k,O),o(s,x),o(s,h),o(h,p),o(p,T),w||(E=[Q(t,"click",e[4]),Q(h,"click",e[5])],w=!0)},p(b,[d]){d&2&&u!==(u=Math.floor(b[1]+1)+"")&&W(M,u),d&2&&y!==(y=Math.floor(b[1])+"")&&W(O,y),d&4&&J(i,"transform","translate(0, "+100*b[2]+"%)")},i:H,o:H,d(b){b&&v(s),w=!1,te(E)}}}function fe(e,s){return(e%s+s)%s}function he(e,s,t){let r,l,a=0;const c=ve();se(e,c,u=>t(1,l=u));const i=()=>t(0,a-=1),f=()=>t(0,a+=1);return e.$$.update=()=>{e.$$.dirty&1&&c.set(a),e.$$.dirty&2&&t(2,r=fe(l,1))},[a,l,r,c,i,f]}class ge extends X{constructor(s){super(),Y(this,s,he,pe,Z,{})}}function me(e){let s,t,r,l,a,c,i,f,u,M,S,k,y,O,x,h,p,T,w,E,b;return E=new ge({}),{c(){s=m("meta"),t=I(),r=m("section"),l=m("h1"),a=m("span"),c=m("picture"),i=m("source"),f=I(),u=m("img"),S=P(`

		to your new`),k=m("br"),y=P("SvelteKit app"),O=I(),x=m("h2"),h=P("try editing "),p=m("strong"),T=P("src/routes/index.svelte"),w=I(),oe(E.$$.fragment),this.h()},l(d){const B=re('[data-svelte="svelte-t32ptj"]',document.head);s=_(B,"META",{name:!0,content:!0}),B.forEach(v),t=$(d),r=_(d,"SECTION",{class:!0});var j=g(r);l=_(j,"H1",{class:!0});var N=g(l);a=_(N,"SPAN",{class:!0});var R=g(a);c=_(R,"PICTURE",{});var C=g(c);i=_(C,"SOURCE",{srcset:!0,type:!0}),f=$(C),u=_(C,"IMG",{src:!0,alt:!0,class:!0}),C.forEach(v),R.forEach(v),S=q(N,`

		to your new`),k=_(N,"BR",{}),y=q(N,"SvelteKit app"),N.forEach(v),O=$(j),x=_(j,"H2",{});var D=g(x);h=q(D,"try editing "),p=_(D,"STRONG",{});var A=g(p);T=q(A,"src/routes/index.svelte"),A.forEach(v),D.forEach(v),w=$(j),ne(E.$$.fragment,j),j.forEach(v),this.h()},h(){document.title="Home",n(s,"name","description"),n(s,"content","Svelte demo app"),n(i,"srcset","svelte-welcome.webp"),n(i,"type","image/webp"),le(u.src,M="svelte-welcome.png")||n(u,"src",M),n(u,"alt","Welcome"),n(u,"class","svelte-1egtvge"),n(a,"class","welcome svelte-1egtvge"),n(l,"class","svelte-1egtvge"),n(r,"class","svelte-1egtvge")},m(d,B){o(document.head,s),U(d,t,B),U(d,r,B),o(r,l),o(l,a),o(a,c),o(c,i),o(c,f),o(c,u),o(l,S),o(l,k),o(l,y),o(r,O),o(r,x),o(x,h),o(x,p),o(p,T),o(r,w),ae(E,r,null),b=!0},p:H,i(d){b||(ie(E.$$.fragment,d),b=!0)},o(d){ce(E.$$.fragment,d),b=!1},d(d){v(s),d&&v(t),d&&v(r),de(E)}}}const xe=!0;class ye extends X{constructor(s){super(),Y(this,s,null,me,Z,{})}}export{ye as default,xe as prerender};
