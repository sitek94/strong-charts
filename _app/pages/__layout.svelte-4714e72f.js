import{I as re,S as se,i as ae,s as le,e as E,t as O,k as M,c as $,a as h,h as R,d as o,m as S,b as s,J as z,g as D,K as r,L,M as C,N as ne,E as W,O as oe,P as ce,Q as ie,w as ue,x as ve,y as he,R as _e,T as pe,U as fe,q as X,o as Y,B as de}from"../chunks/index-bae2fa0a.js";const ge=()=>{const a=re("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session,updated:a.updated}},me={subscribe(a){return ge().page.subscribe(a)}};var be="/strong-charts/_app/assets/svelte-logo-87df40b8.svg";function ee(a,e,n){const l=a.slice();return l[2]=e[n].path,l[3]=e[n].name,l}function te(a){let e,n,l=a[3]+"",v,f,g;return{c(){e=E("li"),n=E("a"),v=O(l),g=M(),this.h()},l(i){e=$(i,"LI",{class:!0});var c=h(e);n=$(c,"A",{href:!0,class:!0});var w=h(n);v=R(w,l),w.forEach(o),g=S(c),c.forEach(o),this.h()},h(){s(n,"href",f=a[2]),s(n,"class","svelte-1ap2non"),s(e,"class","svelte-1ap2non"),z(e,"active",a[0].url.pathname===a[2])},m(i,c){D(i,e,c),r(e,n),r(n,v),r(e,g)},p(i,c){c&3&&z(e,"active",i[0].url.pathname===i[2])},d(i){i&&o(e)}}}function Ee(a){let e,n,l,v,f,g,i,c,w,B,b,I,u,t,m,A,y,k,G,V,H,K=a[1],d=[];for(let p=0;p<K.length;p+=1)d[p]=te(ee(a,K,p));return{c(){e=E("header"),n=E("div"),l=E("a"),v=E("img"),g=M(),i=E("nav"),c=L("svg"),w=L("path"),B=M(),b=E("ul");for(let p=0;p<d.length;p+=1)d[p].c();I=M(),u=L("svg"),t=L("path"),m=M(),A=E("div"),y=E("a"),k=L("svg"),G=L("title"),V=O("GitHub"),H=L("path"),this.h()},l(p){e=$(p,"HEADER",{class:!0});var x=h(e);n=$(x,"DIV",{class:!0});var _=h(n);l=$(_,"A",{href:!0,class:!0});var N=h(l);v=$(N,"IMG",{src:!0,alt:!0,class:!0}),N.forEach(o),_.forEach(o),g=S(x),i=$(x,"NAV",{class:!0});var q=h(i);c=C(q,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var U=h(c);w=C(U,"path",{d:!0,class:!0}),h(w).forEach(o),U.forEach(o),B=S(q),b=$(q,"UL",{class:!0});var Z=h(b);for(let T=0;T<d.length;T+=1)d[T].l(Z);Z.forEach(o),I=S(q),u=C(q,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var F=h(u);t=C(F,"path",{d:!0,class:!0}),h(t).forEach(o),F.forEach(o),q.forEach(o),m=S(x),A=$(x,"DIV",{class:!0});var J=h(A);y=$(J,"A",{target:!0,href:!0,class:!0});var Q=h(y);k=C(Q,"svg",{class:!0,role:!0,viewBox:!0,xmlns:!0});var P=h(k);G=C(P,"title",{});var j=h(G);V=R(j,"GitHub"),j.forEach(o),H=C(P,"path",{d:!0,class:!0}),h(H).forEach(o),P.forEach(o),Q.forEach(o),J.forEach(o),x.forEach(o),this.h()},h(){ne(v.src,f=be)||s(v,"src",f),s(v,"alt","SvelteKit"),s(v,"class","svelte-1ap2non"),s(l,"href","https://kit.svelte.dev"),s(l,"class","svelte-1ap2non"),s(n,"class","corner svelte-1ap2non"),s(w,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),s(w,"class","svelte-1ap2non"),s(c,"viewBox","0 0 2 3"),s(c,"aria-hidden","true"),s(c,"class","svelte-1ap2non"),s(b,"class","svelte-1ap2non"),s(t,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),s(t,"class","svelte-1ap2non"),s(u,"viewBox","0 0 2 3"),s(u,"aria-hidden","true"),s(u,"class","svelte-1ap2non"),s(i,"class","svelte-1ap2non"),s(H,"d","M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"),s(H,"class","svelte-1ap2non"),s(k,"class","github svelte-1ap2non"),s(k,"role","img"),s(k,"viewBox","0 0 24 24"),s(k,"xmlns","http://www.w3.org/2000/svg"),s(y,"target","_blank"),s(y,"href","https://github.com/sitek94/strong-charts"),s(y,"class","svelte-1ap2non"),s(A,"class","corner svelte-1ap2non"),s(e,"class","svelte-1ap2non")},m(p,x){D(p,e,x),r(e,n),r(n,l),r(l,v),r(e,g),r(e,i),r(i,c),r(c,w),r(i,B),r(i,b);for(let _=0;_<d.length;_+=1)d[_].m(b,null);r(i,I),r(i,u),r(u,t),r(e,m),r(e,A),r(A,y),r(y,k),r(k,G),r(G,V),r(k,H)},p(p,[x]){if(x&3){K=p[1];let _;for(_=0;_<K.length;_+=1){const N=ee(p,K,_);d[_]?d[_].p(N,x):(d[_]=te(N),d[_].c(),d[_].m(b,null))}for(;_<d.length;_+=1)d[_].d(1);d.length=K.length}},i:W,o:W,d(p){p&&o(e),oe(d,p)}}}function $e(a,e,n){let l;return ce(a,me,f=>n(0,l=f)),[l,[{path:"/",name:"Import data"},{path:"/exercises",name:"Exercises"}]]}class we extends se{constructor(e){super(),ae(this,e,$e,Ee,le,{})}}function ye(a){let e,n,l,v,f,g,i,c,w,B,b;e=new we({});const I=a[1].default,u=ie(I,a,a[0],null);return{c(){ue(e.$$.fragment),n=M(),l=E("main"),u&&u.c(),v=M(),f=E("footer"),g=E("p"),i=O("visit "),c=E("a"),w=O("kit.svelte.dev"),B=O(" to learn SvelteKit"),this.h()},l(t){ve(e.$$.fragment,t),n=S(t),l=$(t,"MAIN",{class:!0});var m=h(l);u&&u.l(m),m.forEach(o),v=S(t),f=$(t,"FOOTER",{class:!0});var A=h(f);g=$(A,"P",{});var y=h(g);i=R(y,"visit "),c=$(y,"A",{href:!0,class:!0});var k=h(c);w=R(k,"kit.svelte.dev"),k.forEach(o),B=R(y," to learn SvelteKit"),y.forEach(o),A.forEach(o),this.h()},h(){s(l,"class","svelte-1nw0d5b"),s(c,"href","https://kit.svelte.dev"),s(c,"class","svelte-1nw0d5b"),s(f,"class","svelte-1nw0d5b")},m(t,m){he(e,t,m),D(t,n,m),D(t,l,m),u&&u.m(l,null),D(t,v,m),D(t,f,m),r(f,g),r(g,i),r(g,c),r(c,w),r(g,B),b=!0},p(t,[m]){u&&u.p&&(!b||m&1)&&_e(u,I,t,t[0],b?fe(I,t[0],m,null):pe(t[0]),null)},i(t){b||(X(e.$$.fragment,t),X(u,t),b=!0)},o(t){Y(e.$$.fragment,t),Y(u,t),b=!1},d(t){de(e,t),t&&o(n),t&&o(l),u&&u.d(t),t&&o(v),t&&o(f)}}}function ke(a,e,n){let{$$slots:l={},$$scope:v}=e;return a.$$set=f=>{"$$scope"in f&&n(0,v=f.$$scope)},[v,l]}class Ae extends se{constructor(e){super(),ae(this,e,ke,ye,le,{})}}export{Ae as default};