import{S as K,i as Q,s as X,e as T,t as y,k as E,c as b,a as A,h as N,d as h,m as k,b as q,g as v,K as C,X as x,E as ee,w as te,x as re,y as ne,q as L,o as B,B as oe,W as ie,p as se,n as ae}from"../chunks/index-bae2fa0a.js";import{L as le}from"../chunks/link-6b83aca3.js";import{a as fe}from"../chunks/store-e7619eac.js";import"../chunks/paths-396f020f.js";import"../chunks/index-27c791b4.js";var P={},H={},O=34,$=10,W=13;function J(i){return new Function("d","return {"+i.map(function(t,e){return JSON.stringify(t)+": d["+e+'] || ""'}).join(",")+"}")}function ce(i,t){var e=J(i);return function(s,n){return t(e(s),n,i)}}function V(i){var t=Object.create(null),e=[];return i.forEach(function(s){for(var n in s)n in t||e.push(t[n]=n)}),e}function g(i,t){var e=i+"",s=e.length;return s<t?new Array(t-s+1).join(0)+e:e}function ue(i){return i<0?"-"+g(-i,6):i>9999?"+"+g(i,6):g(i,4)}function me(i){var t=i.getUTCHours(),e=i.getUTCMinutes(),s=i.getUTCSeconds(),n=i.getUTCMilliseconds();return isNaN(i)?"Invalid Date":ue(i.getUTCFullYear())+"-"+g(i.getUTCMonth()+1,2)+"-"+g(i.getUTCDate(),2)+(n?"T"+g(t,2)+":"+g(e,2)+":"+g(s,2)+"."+g(n,3)+"Z":s?"T"+g(t,2)+":"+g(e,2)+":"+g(s,2)+"Z":e||t?"T"+g(t,2)+":"+g(e,2)+"Z":"")}function pe(i){var t=new RegExp('["'+i+`
\r]`),e=i.charCodeAt(0);function s(r,f){var c,d,_=n(r,function(j,w){if(c)return c(j,w-1);d=j,c=f?ce(j,f):J(j)});return _.columns=d||[],_}function n(r,f){var c=[],d=r.length,_=0,j=0,w,F=d<=0,R=!1;r.charCodeAt(d-1)===$&&--d,r.charCodeAt(d-1)===W&&--d;function M(){if(F)return H;if(R)return R=!1,P;var I,S=_,U;if(r.charCodeAt(S)===O){for(;_++<d&&r.charCodeAt(_)!==O||r.charCodeAt(++_)===O;);return(I=_)>=d?F=!0:(U=r.charCodeAt(_++))===$?R=!0:U===W&&(R=!0,r.charCodeAt(_)===$&&++_),r.slice(S+1,I-1).replace(/""/g,'"')}for(;_<d;){if((U=r.charCodeAt(I=_++))===$)R=!0;else if(U===W)R=!0,r.charCodeAt(_)===$&&++_;else if(U!==e)continue;return r.slice(S,I)}return F=!0,r.slice(S,d)}for(;(w=M())!==H;){for(var D=[];w!==P&&w!==H;)D.push(w),w=M();f&&(D=f(D,j++))==null||c.push(D)}return c}function u(r,f){return r.map(function(c){return f.map(function(d){return m(c[d])}).join(i)})}function a(r,f){return f==null&&(f=V(r)),[f.map(m).join(i)].concat(u(r,f)).join(`
`)}function o(r,f){return f==null&&(f=V(r)),u(r,f).join(`
`)}function l(r){return r.map(p).join(`
`)}function p(r){return r.map(m).join(i)}function m(r){return r==null?"":r instanceof Date?me(r):t.test(r+="")?'"'+r.replace(/"/g,'""')+'"':r}return{parse:s,parseRows:n,format:a,formatBody:o,formatRows:l,formatRow:p,formatValue:m}}var he=pe(","),de=he.parse;function Z(i){let t,e,s,n,u,a;return{c(){t=T("h1"),e=y("Import data"),s=E(),n=T("input"),this.h()},l(o){t=b(o,"H1",{});var l=A(t);e=N(l,"Import data"),l.forEach(h),s=k(o),n=b(o,"INPUT",{type:!0,accept:!0}),this.h()},h(){q(n,"type","file"),q(n,"accept","text/csv")},m(o,l){v(o,t,l),C(t,e),v(o,s,l),v(o,n,l),u||(a=x(n,"change",i[2]),u=!0)},p:ee,d(o){o&&h(t),o&&h(s),o&&h(n),u=!1,a()}}}function G(i){let t,e,s,n,u;return n=new le({props:{to:"exercises",$$slots:{default:[_e]},$$scope:{ctx:i}}}),{c(){t=T("h1"),e=y("Data imported"),s=E(),te(n.$$.fragment)},l(a){t=b(a,"H1",{});var o=A(t);e=N(o,"Data imported"),o.forEach(h),s=k(a),re(n.$$.fragment,a)},m(a,o){v(a,t,o),C(t,e),v(a,s,o),ne(n,a,o),u=!0},i(a){u||(L(n.$$.fragment,a),u=!0)},o(a){B(n.$$.fragment,a),u=!1},d(a){a&&h(t),a&&h(s),oe(n,a)}}}function _e(i){let t;return{c(){t=y("Go to exercises")},l(e){t=N(e,"Go to exercises")},m(e,s){v(e,t,s)},d(e){e&&h(t)}}}function Y(i){let t,e;return{c(){t=T("h1"),e=y("Loading...")},l(s){t=b(s,"H1",{});var n=A(t);e=N(n,"Loading..."),n.forEach(h)},m(s,n){v(s,t,n),C(t,e)},d(s){s&&h(t)}}}function z(i){let t,e,s,n,u;return{c(){t=T("h1"),e=y("Something went wrong"),s=E(),n=T("p"),u=y("Check the console")},l(a){t=b(a,"H1",{});var o=A(t);e=N(o,"Something went wrong"),o.forEach(h),s=k(a),n=b(a,"P",{});var l=A(n);u=N(l,"Check the console"),l.forEach(h)},m(a,o){v(a,t,o),C(t,e),v(a,s,o),v(a,n,o),C(n,u)},d(a){a&&h(t),a&&h(s),a&&h(n)}}}function ge(i){let t,e,s,n,u,a,o=i[1]==="idle"&&Z(i),l=i[1]==="success"&&G(i),p=i[1]==="loading"&&Y(),m=i[1]==="error"&&z();return{c(){t=E(),e=T("div"),o&&o.c(),s=E(),l&&l.c(),n=E(),p&&p.c(),u=E(),m&&m.c(),this.h()},l(r){ie('[data-svelte="svelte-gpjllq"]',document.head).forEach(h),t=k(r),e=b(r,"DIV",{class:!0});var c=A(e);o&&o.l(c),s=k(c),l&&l.l(c),n=k(c),p&&p.l(c),u=k(c),m&&m.l(c),c.forEach(h),this.h()},h(){document.title="Import data",q(e,"class","content svelte-10k3ssc")},m(r,f){v(r,t,f),v(r,e,f),o&&o.m(e,null),C(e,s),l&&l.m(e,null),C(e,n),p&&p.m(e,null),C(e,u),m&&m.m(e,null),a=!0},p(r,[f]){r[1]==="idle"?o?o.p(r,f):(o=Z(r),o.c(),o.m(e,s)):o&&(o.d(1),o=null),r[1]==="success"?l?f&2&&L(l,1):(l=G(r),l.c(),L(l,1),l.m(e,n)):l&&(ae(),B(l,1,1,()=>{l=null}),se()),r[1]==="loading"?p||(p=Y(),p.c(),p.m(e,u)):p&&(p.d(1),p=null),r[1]==="error"?m||(m=z(),m.c(),m.m(e,null)):m&&(m.d(1),m=null)},i(r){a||(L(l),a=!0)},o(r){B(l),a=!1},d(r){r&&h(t),r&&h(e),o&&o.d(),l&&l.d(),p&&p.d(),m&&m.d()}}}function ve(i,t,e){let s="idle",n;function u(){n=this.files,e(0,n)}return i.$$.update=()=>{if(i.$$.dirty&1&&n){let a=n[0];const o=new FileReader;o.onabort=()=>console.log("file reading was aborted"),o.onerror=()=>console.log("file reading has failed"),o.onload=()=>{const p=o.result.toString().replace(/;/g,","),m=f=>f.toLowerCase().replace(/\s/g,"-").replace(/[^a-z0-9-]/g,""),r=de(p);try{const f=r.map(c=>{const d=c["Exercise Name"];return{date:new Date(c.Date),workoutName:c["Workout Name"],exerciseName:d,exerciseId:m(d),reps:+c.Reps,weight:+c.Weight,weightUnit:c["Weight Unit"]}});fe.set(f),e(1,s="success")}catch(f){console.error(f),e(1,s="error")}},o.readAsText(a)}},[n,s,u]}class be extends K{constructor(t){super(),Q(this,t,ve,ge,X,{})}}export{be as default};
