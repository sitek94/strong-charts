function N(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function q(){return Object.create(null)}function p(t){t.forEach(T)}function W(t){return typeof t=="function"}function ot(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ut(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function G(t){return Object.keys(t).length===0}function B(t,...n){if(t==null)return N;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function st(t){let n;return B(t,e=>n=e)(),n}function at(t,n,e){t.$$.on_destroy.push(B(n,e))}function ft(t,n,e,i){if(t){const c=O(t,n,e,i);return t[0](c)}}function O(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],l=Math.max(n.dirty.length,c.length);for(let o=0;o<l;o+=1)s[o]=n.dirty[o]|c[o];return s}return n.dirty|c}return n.dirty}function dt(t,n,e,i,c,s){if(c){const l=O(n,e,i,s);t.p(l,c)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function mt(t){return t==null?"":t}let w=!1;function J(){w=!0}function K(){w=!1}function Q(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&r.push(f)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,f=(c>0&&n[e[c]].claim_order<=u?c+1:Q(1,c,y=>n[e[y]].claim_order,u))-1;i[r]=e[f]+1;const a=f+1;e[a]=r,c=Math.max(a,c)}const s=[],l=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);o>=r;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);s.reverse(),l.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<l.length;r++){for(;u<s.length&&l[r].claim_order>=s[u].claim_order;)u++;const f=u<s.length?s[u]:null;t.insertBefore(l[r],f)}}function U(t,n){if(w){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function pt(t,n,e){w&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function gt(){return S(" ")}function xt(){return S("")}function bt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function $t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,c=!1){tt(t);const s=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function z(t,n,e,i){return P(t,c=>c.nodeName===n,c=>{const s=[];for(let l=0;l<c.attributes.length;l++){const o=c.attributes[l];e[o.name]||s.push(o.name)}s.forEach(l=>c.removeAttribute(l))},()=>i(n))}function wt(t,n,e){return z(t,n,e,X)}function vt(t,n,e){return z(t,n,e,Y)}function nt(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function Et(t){return nt(t," ")}function kt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function At(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Nt(t,n,e){t.classList[e?"add":"remove"](n)}function St(t,n=document.body){return Array.from(n.querySelectorAll(t))}let m;function h(t){m=t}function v(){if(!m)throw new Error("Function called outside component initialization");return m}function jt(t){v().$$.on_mount.push(t)}function Ct(t){v().$$.after_update.push(t)}function qt(t,n){v().$$.context.set(t,n)}function Mt(t){return v().$$.context.get(t)}const d=[],M=[],b=[],L=[],D=Promise.resolve();let k=!1;function F(){k||(k=!0,D.then(H))}function Lt(){return F(),D}function A(t){b.push(t)}const E=new Set;let x=0;function H(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),et(n.$$)}for(h(null),d.length=0,x=0;M.length;)M.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];E.has(e)||(E.add(e),e())}b.length=0}while(d.length);for(;L.length;)L.pop()();k=!1,E.clear(),h(t)}function et(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const $=new Set;let _;function Tt(){_={r:0,c:[],p:_}}function Bt(){_.r||p(_.c),_=_.p}function it(t,n){t&&t.i&&($.delete(t),t.i(n))}function Ot(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Pt(t,n){const e={},i={},c={$$scope:1};let s=t.length;for(;s--;){const l=t[s],o=n[s];if(o){for(const r in l)r in o||(i[r]=1);for(const r in o)c[r]||(e[r]=o[r],c[r]=1);t[s]=o}else for(const r in l)c[r]=1}for(const l in i)l in e||(e[l]=void 0);return e}function zt(t){return typeof t=="object"&&t!==null?t:{}}function Dt(t){t&&t.c()}function Ft(t,n){t&&t.l(n)}function rt(t,n,e,i){const{fragment:c,on_mount:s,on_destroy:l,after_update:o}=t.$$;c&&c.m(n,e),i||A(()=>{const r=s.map(T).filter(W);l?l.push(...r):p(r),t.$$.on_mount=[]}),o.forEach(A)}function ct(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(d.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ht(t,n,e,i,c,s,l,o=[-1]){const r=m;h(t);const u=t.$$={fragment:null,ctx:null,props:s,update:N,not_equal:c,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:q(),dirty:o,skip_bound:!1,root:n.target||r.$$.root};l&&l(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,y,...j)=>{const C=j.length?j[0]:y;return u.ctx&&c(u.ctx[a],u.ctx[a]=C)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](C),f&&lt(t,a)),y}):[],u.update(),f=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){J();const a=Z(n.target);u.fragment&&u.fragment.l(a),a.forEach(V)}else u.fragment&&u.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),K(),H()}h(r)}class It{$destroy(){ct(this,1),this.$destroy=N}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{zt as A,ct as B,I as C,Lt as D,N as E,B as F,p as G,W as H,Nt as I,U as J,Y as K,vt as L,ut as M,yt as N,at as O,ft as P,dt as Q,ht as R,It as S,_t as T,Mt as U,A as V,St as W,bt as X,st as Y,mt as Z,Z as a,$t as b,wt as c,V as d,X as e,At as f,pt as g,nt as h,Ht as i,kt as j,gt as k,xt as l,Et as m,Tt as n,Ot as o,Bt as p,it as q,qt as r,ot as s,S as t,Ct as u,jt as v,Dt as w,Ft as x,rt as y,Pt as z};
