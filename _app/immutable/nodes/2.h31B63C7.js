import{s as d,a as p,c as _,u as m,g,b as h}from"../chunks/scheduler.8IMczg4P.js";import{S as w,i as b,l as S,t as y,a as W}from"../chunks/index.XFpmuITz.js";import{g as u}from"../chunks/entry.MbVSrsvZ.js";function k(s){let n,o,a;p(s[5]);const r=s[4].default,t=_(r,s,s[3],null);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,i){t&&t.m(e,i),n=!0,o||(a=S(window,"resize",s[5]),o=!0)},p(e,[i]){t&&t.p&&(!n||i&8)&&m(t,r,e,e[3],n?h(r,e[3],i,null):g(e[3]),null)},i(e){n||(y(t,e),n=!0)},o(e){W(t,e),n=!1},d(e){t&&t.d(e),o=!1,a()}}}const f=800;function z(s,n,o){let{$$slots:a={},$$scope:r}=n,t=1/0,e=t>=f,i=null;function c(){o(0,t=window.innerWidth)}return s.$$set=l=>{"$$scope"in l&&o(3,r=l.$$scope)},s.$$.update=()=>{s.$$.dirty&1&&o(1,e=t>=f),s.$$.dirty&6&&(e!==i&&(e?u("/apps/naughts-and-crosses/desktop"):u("/apps/naughts-and-crosses/mobile")),o(2,i=e))},[t,e,i,r,a,c]}class C extends w{constructor(n){super(),b(this,n,z,k,d,{})}}export{C as component};
