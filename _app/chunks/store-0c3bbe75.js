var l=Object.defineProperty,p=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;var c=(e,t,s)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,f=(e,t)=>{for(var s in t||(t={}))u.call(t,s)&&c(e,s,t[s]);if(i)for(var s of i(t))a.call(t,s)&&c(e,s,t[s]);return e},S=(e,t)=>p(e,b(t));var x=(e,t)=>{var s={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&i)for(var r of i(e))t.indexOf(r)<0&&a.call(e,r)&&(s[r]=e[r]);return s};import{w as E,d as I}from"./index-41bc9e84.js";import{Y as g}from"./index-74752a43.js";const m="strong-charts__exercise-sets";function _(e,t){const s=localStorage.getItem(e);return s?JSON.parse(s):t||null}function w(e,t){localStorage.setItem(e,JSON.stringify(t))}function v(e){w(m,e)}function J(){return _(m,[]).map(r=>{var n=r,{date:t}=n,s=x(n,["date"]);return S(f({},s),{date:new Date(t)})})}const o=E(J());o.subscribe(e=>{v(e)});const N=I(o,e=>e.reduce((t,{exerciseId:s,exerciseName:r})=>{if(t.find(({id:d})=>d===s))return t;const n={id:s,name:r};return[...t,n]},[]));function j(e){return g(N).find(s=>s.id===e)}function y(e){return g(o).filter(s=>s.exerciseId===e)}export{y as a,o as b,N as e,j as g};