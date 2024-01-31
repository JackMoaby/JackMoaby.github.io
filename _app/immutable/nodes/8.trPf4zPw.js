import{s as R,i as Y,n as H,e as y,f as x}from"../chunks/scheduler.8IMczg4P.js";import{S as T,i as X,h as d,s as S,j as J,k as g,n as j,f as m,d as A,o as M,u,e as F,p as _,q as w,D as Z,t as B,z as ee,a as z,x as te,c as ae,b as se,m as le,g as re,B as oe}from"../chunks/index.XFpmuITz.js";import{e as N}from"../chunks/each.6w4Ej4nR.js";function K(o,e,r){const s=o.slice();return s[1]=e[r],s}function L(o){let e,r=o[1]+"",s;return{c(){e=d("p"),s=J(r),this.h()},l(a){e=g(a,"P",{class:!0});var f=j(e);s=M(f,r),f.forEach(m),this.h()},h(){u(e,"class","tag poppins-semibold svelte-mafvaa")},m(a,f){F(a,e,f),_(e,s)},p(a,f){f&1&&r!==(r=a[1]+"")&&w(s,r)},d(a){a&&m(e)}}}function ne(o){let e,r,s,a,f,t,n,l=o[0].name+"",$,V,k,P=o[0].desc+"",D,q,b,I,E=N(o[0].tags),p=[];for(let c=0;c<E.length;c+=1)p[c]=L(K(o,E,c));return{c(){e=d("a"),r=d("div"),s=d("img"),f=S(),t=d("div"),n=d("p"),$=J(l),V=S(),k=d("p"),D=J(P),q=S(),b=d("div");for(let c=0;c<p.length;c+=1)p[c].c();this.h()},l(c){e=g(c,"A",{href:!0,class:!0});var h=j(e);r=g(h,"DIV",{class:!0});var i=j(r);s=g(i,"IMG",{src:!0,alt:!0,class:!0}),i.forEach(m),f=A(h),t=g(h,"DIV",{class:!0});var v=j(t);n=g(v,"P",{class:!0});var G=j(n);$=M(G,l),G.forEach(m),V=A(v),k=g(v,"P",{class:!0});var U=j(k);D=M(U,P),U.forEach(m),q=A(v),b=g(v,"DIV",{class:!0});var W=j(b);for(let C=0;C<p.length;C+=1)p[C].l(W);W.forEach(m),v.forEach(m),h.forEach(m),this.h()},h(){Y(s.src,a=o[0].imag)||u(s,"src",a),u(s,"alt","Jack M. Projects"),u(s,"class","svelte-mafvaa"),u(r,"class","project-image svelte-mafvaa"),u(n,"class","title poppins-bold svelte-mafvaa"),u(k,"class","description poppins-medium svelte-mafvaa"),u(b,"class","tags svelte-mafvaa"),u(t,"class","project-text svelte-mafvaa"),u(e,"href",I=o[0].href),u(e,"class","project svelte-mafvaa")},m(c,h){F(c,e,h),_(e,r),_(r,s),_(e,f),_(e,t),_(t,n),_(n,$),_(t,V),_(t,k),_(k,D),_(t,q),_(t,b);for(let i=0;i<p.length;i+=1)p[i]&&p[i].m(b,null)},p(c,[h]){if(h&1&&!Y(s.src,a=c[0].imag)&&u(s,"src",a),h&1&&l!==(l=c[0].name+"")&&w($,l),h&1&&P!==(P=c[0].desc+"")&&w(D,P),h&1){E=N(c[0].tags);let i;for(i=0;i<E.length;i+=1){const v=K(c,E,i);p[i]?p[i].p(v,h):(p[i]=L(v),p[i].c(),p[i].m(b,null))}for(;i<p.length;i+=1)p[i].d(1);p.length=E.length}h&1&&I!==(I=c[0].href)&&u(e,"href",I)},i:H,o:H,d(c){c&&m(e),Z(p,c)}}}function ce(o,e,r){let{project:s={}}=e;return o.$$set=a=>{"project"in a&&r(0,s=a.project)},[s]}class ie extends T{constructor(e){super(),X(this,e,ce,ne,R,{project:0})}}function O(o,e,r){const s=o.slice();return s[2]=e[r],s[3]=e,s[4]=r,s}function Q(o){let e,r,s;function a(t){o[1](t,o[2],o[3],o[4])}let f={};return o[2]!==void 0&&(f.project=o[2]),e=new ie({props:f}),y.push(()=>te(e,"project",a)),{c(){ae(e.$$.fragment)},l(t){se(e.$$.fragment,t)},m(t,n){le(e,t,n),s=!0},p(t,n){o=t;const l={};!r&&n&1&&(r=!0,l.project=o[2],x(()=>r=!1)),e.$set(l)},i(t){s||(B(e.$$.fragment,t),s=!0)},o(t){z(e.$$.fragment,t),s=!1},d(t){re(e,t)}}}function fe(o){let e,r,s=N(o[0]),a=[];for(let t=0;t<s.length;t+=1)a[t]=Q(O(o,s,t));const f=t=>z(a[t],1,1,()=>{a[t]=null});return{c(){e=d("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){e=g(t,"DIV",{class:!0});var n=j(e);for(let l=0;l<a.length;l+=1)a[l].l(n);n.forEach(m),this.h()},h(){u(e,"class","project-container svelte-1l675b6")},m(t,n){F(t,e,n);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(e,null);r=!0},p(t,[n]){if(n&1){s=N(t[0]);let l;for(l=0;l<s.length;l+=1){const $=O(t,s,l);a[l]?(a[l].p($,n),B(a[l],1)):(a[l]=Q($),a[l].c(),B(a[l],1),a[l].m(e,null))}for(oe(),l=s.length;l<a.length;l+=1)f(l);ee()}},i(t){if(!r){for(let n=0;n<s.length;n+=1)B(a[n]);r=!0}},o(t){a=a.filter(Boolean);for(let n=0;n<a.length;n+=1)z(a[n]);r=!1},d(t){t&&m(e),Z(a,t)}}}function pe(o,e,r){const s=[{name:"Noughts & Crosses Evaluation Bar",desc:"With a fast αβ-search to evaluate positions (in JS)",imag:"./projects/NoughtsAndCrossesEvalBar.png",href:"/apps/tictactoe",tags:["2024","FUNNY"]}];function a(f,t,n,l){n[l]=f,r(0,s)}return[s,a]}class me extends T{constructor(e){super(),X(this,e,pe,fe,R,{})}}export{me as component};