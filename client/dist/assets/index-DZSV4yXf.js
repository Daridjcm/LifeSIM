import{c as Ee,m as be,a as ft,s as U,b as Me,n as wt,e as Ce,f as Xt,g as Yt,l as Ve,h as Ie,i as Te,j as Oe,r as m,k as x,o as $,p as st,q as Kt,v as Le,t as Nt,u as Jt,w as qt,x as Qt,y as Pe,z as A,A as j,B as rt,C as Re,M as it,D as L,E as De,F as ut,G as Zt,H as ze,I as Fe,J as We,K as He,L as Be,N as _e,O as Ge,P as te,Q as ee,R as je,S as ne,T as ke,U as Ue,V as se,W as re,X as ie,Y as $e,Z as Xe,_ as Ye,$ as et,a0 as Ke,a1 as Ne,a2 as Je,a3 as oe,a4 as qe,a5 as Qe,a6 as Ze,a7 as tn,a8 as dt,a9 as en,aa as Tt,ab as nn,ac as sn,ad as ae,ae as J,af as mt,ag as rn,ah as on,ai as an,aj as un,ak as nt,al as cn,am as ln,an as fn,ao as dn,ap as mn}from"./index-CnnVmQMM.js";import{aw as Ir,aq as Tr,aN as Or,aM as Lr,aJ as Pr,ar as Rr,as as Dr,aD as zr,aK as Fr,aL as Wr,bb as Hr,bc as Br,aB as _r,aV as Gr,aW as jr,aX as kr,aY as Ur,aC as $r,b9 as Xr,aZ as Yr,a_ as Kr,a$ as Nr,aE as Jr,aF as qr,az as Qr,b0 as Zr,aO as ti,b7 as ei,b8 as ni,d as si,au as ri,b1 as ii,b2 as oi,b3 as ai,ba as ui,aH as ci,b6 as li,aQ as fi,bd as di,aP as mi,aA as pi,aR as hi,at as gi,b4 as yi,aT as vi,aI as wi,aU as Si,aG as Ai,av as xi,b5 as Ei,aS as bi,ax as Mi,ay as Ci}from"./index-CnnVmQMM.js";function ue(t,e=100,n){const s=n({...t,keyframes:[0,e]}),r=Math.min(Ee(s),be);return{type:"keyframes",ease:i=>s.next(r*i).value/e,duration:ft(r)}}class pn{constructor(e){this.animation=e}get duration(){var e,n,s;const r=((n=(e=this.animation)===null||e===void 0?void 0:e.effect)===null||n===void 0?void 0:n.getComputedTiming().duration)||((s=this.options)===null||s===void 0?void 0:s.duration)||300;return ft(Number(r))}get time(){var e;return this.animation?ft(((e=this.animation)===null||e===void 0?void 0:e.currentTime)||0):0}set time(e){this.animation&&(this.animation.currentTime=U(e))}get speed(){return this.animation?this.animation.playbackRate:1}set speed(e){this.animation&&(this.animation.playbackRate=e)}get state(){return this.animation?this.animation.playState:"finished"}get startTime(){return this.animation?this.animation.startTime:null}get finished(){return this.animation?this.animation.finished:Promise.resolve()}play(){this.animation&&this.animation.play()}pause(){this.animation&&this.animation.pause()}stop(){!this.animation||this.state==="idle"||this.state==="finished"||(this.animation.commitStyles&&this.animation.commitStyles(),this.cancel())}flatten(){var e;this.animation&&((e=this.animation.effect)===null||e===void 0||e.updateTiming({easing:"linear"}))}attachTimeline(e){return this.animation&&Me(this.animation,e),wt}complete(){this.animation&&this.animation.finish()}cancel(){try{this.animation&&this.animation.cancel()}catch{}}}const hn=Ce({...Xt,...Te,...Ie,...Ve},Yt),ce=Oe(hn),Ns={renderer:Yt,...Xt};function gn(t,e,n){m.useInsertionEffect(()=>t.on(e,n),[t,e,n])}function le(t,e){let n;const s=()=>{const{currentTime:r}=e,o=(r===null?0:r.value)/100;n!==o&&t(o),n=o};return x.update(s,!0),()=>$(s)}const q=new WeakMap;let T;function yn(t,e){if(e){const{inlineSize:n,blockSize:s}=e[0];return{width:n,height:s}}else return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function vn({target:t,contentRect:e,borderBoxSize:n}){var s;(s=q.get(t))===null||s===void 0||s.forEach(r=>{r({target:t,contentSize:e,get size(){return yn(t,n)}})})}function wn(t){t.forEach(vn)}function Sn(){typeof ResizeObserver>"u"||(T=new ResizeObserver(wn))}function An(t,e){T||Sn();const n=st(t);return n.forEach(s=>{let r=q.get(s);r||(r=new Set,q.set(s,r)),r.add(e),T==null||T.observe(s)}),()=>{n.forEach(s=>{const r=q.get(s);r==null||r.delete(e),r!=null&&r.size||T==null||T.unobserve(s)})}}const Q=new Set;let k;function xn(){k=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};Q.forEach(n=>n(e))},window.addEventListener("resize",k)}function En(t){return Q.add(t),k||xn(),()=>{Q.delete(t),!Q.size&&k&&(k=void 0)}}function bn(t,e){return typeof t=="function"?En(t):An(t,e)}const Mn=50,Ot=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),Cn=()=>({time:0,x:Ot(),y:Ot()}),Vn={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Lt(t,e,n,s){const r=n[e],{length:i,position:o}=Vn[e],c=r.current,a=n.time;r.current=t[`scroll${o}`],r.scrollLength=t[`scroll${i}`]-t[`client${i}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=Kt(0,r.scrollLength,r.current);const u=s-a;r.velocity=u>Mn?0:Le(r.current-c,u)}function In(t,e,n){Lt(t,"x",e,n),Lt(t,"y",e,n),e.time=n}function Tn(t,e){const n={x:0,y:0};let s=t;for(;s&&s!==e;)if(s instanceof HTMLElement)n.x+=s.offsetLeft,n.y+=s.offsetTop,s=s.offsetParent;else if(s.tagName==="svg"){const r=s.getBoundingClientRect();s=s.parentElement;const i=s.getBoundingClientRect();n.x+=r.left-i.left,n.y+=r.top-i.top}else if(s instanceof SVGGraphicsElement){const{x:r,y:i}=s.getBBox();n.x+=r,n.y+=i;let o=null,c=s.parentNode;for(;!o;)c.tagName==="svg"&&(o=c),c=s.parentNode;s=o}else break;return n}const pt={start:0,center:.5,end:1};function Pt(t,e,n=0){let s=0;if(t in pt&&(t=pt[t]),typeof t=="string"){const r=parseFloat(t);t.endsWith("px")?s=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?s=r/100*document.documentElement.clientWidth:t.endsWith("vh")?s=r/100*document.documentElement.clientHeight:t=r}return typeof t=="number"&&(s=e*t),n+s}const On=[0,0];function Ln(t,e,n,s){let r=Array.isArray(t)?t:On,i=0,o=0;return typeof t=="number"?r=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?r=t.split(" "):r=[t,pt[t]?t:"0"]),i=Pt(r[0],n,s),o=Pt(r[1],e),i-o}const Pn={All:[[0,0],[1,1]]},Rn={x:0,y:0};function Dn(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function zn(t,e,n){const{offset:s=Pn.All}=n,{target:r=t,axis:i="y"}=n,o=i==="y"?"height":"width",c=r!==t?Tn(r,t):Rn,a=r===t?{width:t.scrollWidth,height:t.scrollHeight}:Dn(r),u={width:t.clientWidth,height:t.clientHeight};e[i].offset.length=0;let l=!e[i].interpolate;const d=s.length;for(let f=0;f<d;f++){const p=Ln(s[f],u[o],a[o],c[i]);!l&&p!==e[i].interpolatorOffsets[f]&&(l=!0),e[i].offset[f]=p}l&&(e[i].interpolate=Nt(e[i].offset,Jt(s),{clamp:!1}),e[i].interpolatorOffsets=[...e[i].offset]),e[i].progress=qt(0,1,e[i].interpolate(e[i].current))}function Fn(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let s=e;for(;s&&s!==t;)n.x.targetOffset+=s.offsetLeft,n.y.targetOffset+=s.offsetTop,s=s.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function Wn(t,e,n,s={}){return{measure:()=>Fn(t,s.target,n),update:r=>{In(t,n,r),(s.offset||s.target)&&zn(t,n,s)},notify:()=>e(n)}}const _=new WeakMap,Rt=new WeakMap,ct=new WeakMap,Dt=t=>t===document.documentElement?window:t;function St(t,{container:e=document.documentElement,...n}={}){let s=ct.get(e);s||(s=new Set,ct.set(e,s));const r=Cn(),i=Wn(e,t,r,n);if(s.add(i),!_.has(e)){const c=()=>{for(const f of s)f.measure()},a=()=>{for(const f of s)f.update(Qt.timestamp)},u=()=>{for(const f of s)f.notify()},l=()=>{x.read(c,!1,!0),x.read(a,!1,!0),x.update(u,!1,!0)};_.set(e,l);const d=Dt(e);window.addEventListener("resize",l,{passive:!0}),e!==document.documentElement&&Rt.set(e,bn(e,l)),d.addEventListener("scroll",l,{passive:!0})}const o=_.get(e);return x.read(o,!1,!0),()=>{var c;$(o);const a=ct.get(e);if(!a||(a.delete(i),a.size))return;const u=_.get(e);_.delete(e),u&&(Dt(e).removeEventListener("scroll",u),(c=Rt.get(e))===null||c===void 0||c(),window.removeEventListener("resize",u))}}function Hn({source:t,container:e,axis:n="y"}){t&&(e=t);const s={value:0},r=St(i=>{s.value=i[n].progress*100},{container:e,axis:n});return{currentTime:s,cancel:r}}const lt=new Map;function fe({source:t,container:e=document.documentElement,axis:n="y"}={}){t&&(e=t),lt.has(e)||lt.set(e,{});const s=lt.get(e);return s[n]||(s[n]=Pe()?new ScrollTimeline({source:e,axis:n}):Hn({source:e,axis:n})),s[n]}function Bn(t){return t.length===2}function de(t){return t&&(t.target||t.offset)}function _n(t,e){return Bn(t)||de(e)?St(n=>{t(n[e.axis].progress,n)},e):le(t,fe(e))}function Gn(t,e){if(t.flatten(),de(e))return t.pause(),St(n=>{t.time=t.duration*n[e.axis].progress},e);{const n=fe(e);return t.attachTimeline?t.attachTimeline(n,s=>(s.pause(),le(r=>{s.time=s.duration*r},n))):wt}}function jn(t,{axis:e="y",...n}={}){const s={axis:e,...n};return typeof t=="function"?_n(t,s):Gn(t,s)}function zt(t,e){Re(!!(!e||e.current))}const kn=()=>({scrollX:j(0),scrollY:j(0),scrollXProgress:j(0),scrollYProgress:j(0)});function me({container:t,target:e,layoutEffect:n=!0,...s}={}){const r=A(kn);return(n?rt:m.useEffect)(()=>(zt("target",e),zt("container",t),jn((o,{x:c,y:a})=>{r.scrollX.set(c.current),r.scrollXProgress.set(c.progress),r.scrollY.set(a.current),r.scrollYProgress.set(a.progress)},{...s,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0})),[t,e,JSON.stringify(s.offset)]),r}function Js(t){return me({container:t})}function qs(){return me()}function P(t){const e=A(()=>j(t)),{isStatic:n}=m.useContext(it);if(n){const[,s]=m.useState(t);m.useEffect(()=>e.on("change",s),[])}return e}function At(t,e){const n=P(e()),s=()=>n.set(e());return s(),rt(()=>{const r=()=>x.preRender(s,!1,!0),i=t.map(o=>o.on("change",r));return()=>{i.forEach(o=>o()),$(s)}}),n}function Qs(t,...e){const n=t.length;function s(){let r="";for(let i=0;i<n;i++){r+=t[i];const o=e[i];o&&(r+=L(o)?o.get():o)}return r}return At(e.filter(L),s)}function Ft(t){return typeof t=="number"?t:parseFloat(t)}function Zs(t,e={}){const{isStatic:n}=m.useContext(it),s=m.useRef(null),r=P(L(t)?Ft(t.get()):t),i=m.useRef(r.get()),o=m.useRef(()=>{}),c=()=>{const u=s.current;u&&u.time===0&&u.sample(Qt.delta),a(),s.current=De({keyframes:[r.get(),i.current],velocity:r.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:o.current})},a=()=>{s.current&&s.current.stop()};return m.useInsertionEffect(()=>r.attach((u,l)=>n?l(u):(i.current=u,o.current=l,x.update(c),r.get()),a),[JSON.stringify(e)]),rt(()=>{if(L(t))return t.on("change",u=>r.set(Ft(u)))},[r]),r}function Un(t){const e=m.useRef(0),{isStatic:n}=m.useContext(it);m.useEffect(()=>{if(n)return;const s=({timestamp:r,delta:i})=>{e.current||(e.current=r),t(r-e.current,i)};return x.update(s,!0),()=>$(s)},[t])}function tr(){const t=P(0);return Un(e=>t.set(e)),t}const $n=t=>t&&typeof t=="object"&&t.mix,Xn=t=>$n(t)?t.mix:void 0;function Yn(...t){const e=!Array.isArray(t[0]),n=e?0:-1,s=t[0+n],r=t[1+n],i=t[2+n],o=t[3+n],c=Nt(r,i,{mixer:Xn(i[0]),...o});return e?c(s):c}function Kn(t){ut.current=[],t();const e=At(ut.current,t);return ut.current=void 0,e}function ht(t,e,n,s){if(typeof t=="function")return Kn(t);const r=typeof e=="function"?e:Yn(e,n,s);return Array.isArray(t)?Wt(t,r):Wt([t],([i])=>r(i))}function Wt(t,e){const n=A(()=>[]);return At(t,()=>{n.length=0;const s=t.length;for(let r=0;r<s;r++)n[r]=t[r].get();return e(n)})}function er(t){const e=P(t.getVelocity()),n=()=>{const s=t.getVelocity();e.set(s),s&&x.update(n)};return gn(t,"change",()=>{x.update(n,!1,!0)}),e}function Nn(t){if(Zt.has(t))return"transform";if(ze.has(t))return Fe(t)}class Jn extends We{constructor(){super(...arguments),this.values=[]}add(e){const n=Nn(e);n&&(He(this.values,n),this.update())}update(){this.set(this.values.length?this.values.join(", "):"auto")}}function nr(){return A(()=>new Jn("auto"))}function qn(){!Be.current&&_e();const[t]=m.useState(Ge.current);return t}function sr(){const t=qn(),{reducedMotion:e}=m.useContext(it);return e==="never"?!1:e==="always"?!0:t}function Qn(t){t.values.forEach(e=>e.stop())}function gt(t,e){[...e].reverse().forEach(s=>{const r=t.getVariant(s);r&&ee(t,r),t.variantChildren&&t.variantChildren.forEach(i=>{gt(i,e)})})}function Zn(t,e){if(Array.isArray(e))return gt(t,e);if(typeof e=="string")return gt(t,[e]);ee(t,e)}function ts(){const t=new Set,e={subscribe(n){return t.add(n),()=>void t.delete(n)},start(n,s){const r=[];return t.forEach(i=>{r.push(te(i,n,{transitionOverride:s}))}),Promise.all(r)},set(n){return t.forEach(s=>{Zn(s,n)})},stop(){t.forEach(n=>{Qn(n)})},mount(){return()=>{e.stop()}}};return e}function pe(t){return m.useEffect(()=>()=>t(),[])}const he=(t,e,n)=>{const s=e-t;return((n-t)%s+s)%s+t};function ge(t,e){return je(t)?t[he(0,t.length,e)]:t}function xt(t){return typeof t=="object"&&!Array.isArray(t)}function ye(t,e,n,s){return typeof t=="string"&&xt(e)?st(t,n,s):t instanceof NodeList?Array.from(t):Array.isArray(t)?t:[t]}function es(t,e,n){return t*(e+1)}function Ht(t,e,n,s){var r;return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?n:(r=s.get(e))!==null&&r!==void 0?r:t}function ns(t,e,n){for(let s=0;s<t.length;s++){const r=t[s];r.at>e&&r.at<n&&(ke(t,r),s--)}}function ss(t,e,n,s,r,i){ns(t,r,i);for(let o=0;o<e.length;o++)t.push({value:e[o],at:ne(r,i,s[o]),easing:ge(n,o)})}function rs(t,e){for(let n=0;n<t.length;n++)t[n]=t[n]/(e+1)}function is(t,e){return t.at===e.at?t.value===null?1:e.value===null?-1:0:t.at-e.at}const os="easeInOut";function as(t,{defaultTransition:e={},...n}={},s,r){const i=e.duration||.3,o=new Map,c=new Map,a={},u=new Map;let l=0,d=0,f=0;for(let p=0;p<t.length;p++){const h=t[p];if(typeof h=="string"){u.set(h,d);continue}else if(!Array.isArray(h)){u.set(h.name,Ht(d,h.at,l,u));continue}let[g,y,v={}]=h;v.at!==void 0&&(d=Ht(d,v.at,l,u));let w=0;const R=(b,M,V,z=0,F=0)=>{const S=us(b),{delay:ot=0,times:C=Jt(S),type:at="keyframes",repeat:X,repeatType:Xs,repeatDelay:Ys=0,...xe}=M;let{ease:I=e.ease||"easeOut",duration:E}=M;const Et=typeof ot=="function"?ot(z,F):ot,bt=S.length,Mt=se(at)?at:r==null?void 0:r[at];if(bt<=2&&Mt){let W=100;if(bt===2&&fs(S)){const H=S[1]-S[0];W=Math.abs(H)}const Y={...xe};E!==void 0&&(Y.duration=U(E));const K=ue(Y,W,Mt);I=K.ease,E=K.duration}E??(E=i);const Ct=d+Et;C.length===1&&C[0]===0&&(C[1]=1);const Vt=C.length-S.length;if(Vt>0&&Ue(C,Vt),S.length===1&&S.unshift(null),X){E=es(E,X);const W=[...S],Y=[...C];I=Array.isArray(I)?[...I]:[I];const K=[...I];for(let H=0;H<X;H++){S.push(...W);for(let B=0;B<W.length;B++)C.push(Y[B]+(H+1)),I.push(B===0?"linear":ge(K,B-1))}rs(C,X)}const It=Ct+E;ss(V,S,I,C,Ct,It),w=Math.max(Et+E,w),f=Math.max(It,f)};if(L(g)){const b=Bt(g,c);R(y,v,_t("default",b))}else{const b=ye(g,y,s,a),M=b.length;for(let V=0;V<M;V++){y=y,v=v;const z=b[V],F=Bt(z,c);for(const S in y)R(y[S],cs(v,S),_t(S,F),V,M)}}l=d,d+=w}return c.forEach((p,h)=>{for(const g in p){const y=p[g];y.sort(is);const v=[],w=[],R=[];for(let M=0;M<y.length;M++){const{at:V,value:z,easing:F}=y[M];v.push(z),w.push(Kt(0,f,V)),R.push(F||"easeOut")}w[0]!==0&&(w.unshift(0),v.unshift(v[0]),R.unshift(os)),w[w.length-1]!==1&&(w.push(1),v.push(null)),o.has(h)||o.set(h,{keyframes:{},transition:{}});const b=o.get(h);b.keyframes[g]=v,b.transition[g]={...e,duration:f,ease:R,times:w,...n}}}),o}function Bt(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function _t(t,e){return e[t]||(e[t]=[]),e[t]}function us(t){return Array.isArray(t)?t:[t]}function cs(t,e){return t&&t[e]?{...t,...t[e]}:{...t}}const ls=t=>typeof t=="number",fs=t=>t.every(ls);function ds(t,e){return t in e}class ms extends re{constructor(){super(...arguments),this.type="object"}readValueFromInstance(e,n){if(ds(n,e)){const s=e[n];if(typeof s=="string"||typeof s=="number")return s}}getBaseTargetFromProps(){}removeValueFromRenderState(e,n){delete n.output[e]}measureInstanceViewportBox(){return ie()}build(e,n){Object.assign(e.output,n)}renderInstance(e,{output:n}){Object.assign(e,n)}sortInstanceNodePosition(){return 0}}function ps(t){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=$e(t)?new Xe(e):new Ye(e);n.mount(t),et.set(t,n)}function hs(t){const e={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},n=new ms(e);n.mount(t),et.set(t,n)}function gs(t,e){return L(t)||typeof t=="number"||typeof t=="string"&&!xt(e)}function ve(t,e,n,s){const r=[];if(gs(t,e))r.push(Ke(t,xt(e)&&e.default||e,n&&(n.default||n)));else{const i=ye(t,e,s),o=i.length;for(let c=0;c<o;c++){const a=i[c],u=a instanceof Element?ps:hs;et.has(a)||u(a);const l=et.get(a),d={...n};"delay"in d&&typeof d.delay=="function"&&(d.delay=d.delay(c,o)),r.push(...Ne(l,{...e,transition:d},{}))}}return r}function ys(t,e,n){const s=[];return as(t,e,n,{spring:Je}).forEach(({keyframes:i,transition:o},c)=>{s.push(...ve(c,i,o))}),s}function vs(t){return Array.isArray(t)&&t.some(Array.isArray)}function we(t){function e(n,s,r){let i=[];vs(n)?i=ys(n,s,t):i=ve(n,s,r,t);const o=new oe(i);return t&&t.animations.push(o),o}return e}const rr=we();function ir(){const t=A(()=>({current:null,animations:[]})),e=A(()=>we(t));return pe(()=>{t.animations.forEach(n=>n.stop())}),[t,e]}function ws(t,e,n){t.style.setProperty(`--${e}`,n)}function Ss(t,e,n){t.style[e]=n}const As=qe(()=>{try{document.createElement("div").animate({opacity:[1]})}catch{return!1}return!0}),Z=new WeakMap;function xs(t,e,n){for(let s=0;s<e.length;s++)e[s]===null&&(e[s]=s===0?n():e[s-1]),typeof e[s]=="number"&&Tt[t]&&(e[s]=Tt[t].transform(e[s]));!As()&&e.length<2&&e.unshift(n())}const Gt="easeOut";function jt(t){const e=Z.get(t)||new Map;return Z.set(t,e),Z.get(t)}class Es extends pn{constructor(e,n,s,r){const i=n.startsWith("--");Qe(typeof r.type!="string");const o=jt(e).get(n);o&&o.stop();const c=()=>n.startsWith("--")?e.style.getPropertyValue(n):window.getComputedStyle(e)[n];if(Array.isArray(s)||(s=[s]),xs(n,s,c),se(r.type)){const l=ue(r,100,r.type);r.ease=Ze()?l.ease:Gt,r.duration=U(l.duration),r.type="keyframes"}else r.ease=r.ease||Gt;const a=()=>{this.setValue(e,n,en(s,r)),this.cancel(),this.resolveFinishedPromise()},u=()=>{this.setValue=i?ws:Ss,this.options=r,this.updateFinishedPromise(),this.removeAnimation=()=>{const l=Z.get(e);l&&l.delete(n)}};tn()?(super(dt(e,n,s,r)),u(),r.autoplay===!1&&this.animation.pause(),this.animation.onfinish=a,jt(e).set(n,this)):(super(),u(),a())}then(e,n){return this.currentFinishedPromise.then(e,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}play(){this.state==="finished"&&this.updateFinishedPromise(),super.play()}cancel(){this.removeAnimation(),super.cancel()}}function bs(t,e,n,s){const r=st(t,s),i=r.length,o=[];for(let c=0;c<i;c++){const a=r[c],u={...n};typeof u.delay=="function"&&(u.delay=u.delay(c,i));for(const l in e){const d=e[l],f={...nn(u,l)};f.duration=f.duration?U(f.duration):f.duration,f.delay=U(f.delay||0),o.push(new Es(a,l,d,f))}}return o}const Se=t=>{function e(n,s,r){return new oe(bs(n,s,r,t))}return e},or=Se();function ar(){const t=A(()=>({current:null,animations:[]})),e=A(()=>Se(t));return pe(()=>{t.animations.forEach(n=>n.stop())}),[t,e]}function Ms(){const t=A(ts);return rt(t.mount,[]),t}const ur=Ms;function cr(t,e,n,s){m.useEffect(()=>{const r=t.current;if(n&&r)return sn(r,e,n,s)},[t,e,n,s])}class Cs{constructor(){this.componentControls=new Set}subscribe(e){return this.componentControls.add(e),()=>this.componentControls.delete(e)}start(e,n){this.componentControls.forEach(s=>{s.start(e.nativeEvent||e,n)})}}const Vs=()=>new Cs;function lr(){return A(Vs)}function Is(t){return t!==null&&typeof t=="object"&&ae in t}function fr(t){if(Is(t))return t[ae]}function Ts(){return Os}function Os(t){J.current&&(J.current.isUpdating=!1,J.current.blockUpdate(),t&&t())}function dr(){return m.useCallback(()=>{const e=J.current;e&&e.resetTree()},[])}function mr(...t){const e=m.useRef(0),[n,s]=m.useState(t[e.current]),r=m.useCallback(i=>{e.current=typeof i!="number"?he(0,t.length,e.current+1):i,s(t[e.current])},[t.length,...t]);return[n,r]}const Ls={some:0,all:1};function Ps(t,e,{root:n,margin:s,amount:r="some"}={}){const i=st(t),o=new WeakMap,c=u=>{u.forEach(l=>{const d=o.get(l.target);if(l.isIntersecting!==!!d)if(l.isIntersecting){const f=e(l);typeof f=="function"?o.set(l.target,f):a.unobserve(l.target)}else typeof d=="function"&&(d(l),o.delete(l.target))})},a=new IntersectionObserver(c,{root:n,rootMargin:s,threshold:typeof r=="number"?r:Ls[r]});return i.forEach(u=>a.observe(u)),()=>a.disconnect()}function pr(t,{root:e,margin:n,amount:s,once:r=!1}={}){const[i,o]=m.useState(!1);return m.useEffect(()=>{if(!t.current||r&&i)return;const c=()=>(o(!0),r?void 0:()=>o(!1)),a={root:e&&e.current||void 0,margin:n,amount:s};return Ps(t.current,c,a)},[e,t,n,r,s]),i}function hr(){const[t,e]=rn(),n=Ts(),s=m.useRef(-1);return m.useEffect(()=>{x.postRender(()=>x.postRender(()=>{e===s.current&&(mt.current=!1)}))},[e]),r=>{n(()=>{mt.current=!0,t(),r(),s.current=e+1})}}function gr(){mt.current=!1}const tt=(t,e)=>{const n=Zt.has(e)?"transform":e;return`${t}: ${n}`},O=new Map,G=new Map;function kt(t,e,n){var s;const r=tt(t,e),i=O.get(r);if(!i)return null;const{animation:o,startTime:c}=i;function a(){var u;(u=window.MotionCancelOptimisedAnimation)===null||u===void 0||u.call(window,t,e,n)}return o.onfinish=a,c===null||!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,t)?(a(),null):c}let N,D;const yt=new Set;function Rs(){yt.forEach(t=>{t.animation.play(),t.animation.startTime=t.startTime}),yt.clear()}function yr(t,e,n,s,r){if(window.MotionIsMounted)return;const i=t.dataset[on];if(!i)return;window.MotionHandoffAnimation=kt;const o=tt(i,e);D||(D=dt(t,e,[n[0],n[0]],{duration:1e4,ease:"linear"}),O.set(o,{animation:D,startTime:null}),window.MotionHandoffAnimation=kt,window.MotionHasOptimisedAnimation=(a,u)=>{if(!a)return!1;if(!u)return G.has(a);const l=tt(a,u);return!!O.get(l)},window.MotionHandoffMarkAsComplete=a=>{G.has(a)&&G.set(a,!0)},window.MotionHandoffIsComplete=a=>G.get(a)===!0,window.MotionCancelOptimisedAnimation=(a,u,l,d)=>{const f=tt(a,u),p=O.get(f);p&&(l&&d===void 0?l.postRender(()=>{l.postRender(()=>{p.animation.cancel()})}):p.animation.cancel(),l&&d?(yt.add(p),l.render(Rs)):(O.delete(f),O.size||(window.MotionCancelOptimisedAnimation=void 0)))},window.MotionCheckAppearSync=(a,u,l)=>{var d,f;const p=an(a);if(!p)return;const h=(d=window.MotionHasOptimisedAnimation)===null||d===void 0?void 0:d.call(window,p,u),g=(f=a.props.values)===null||f===void 0?void 0:f[u];if(!h||!g)return;const y=l.on("change",v=>{var w;g.get()!==v&&((w=window.MotionCancelOptimisedAnimation)===null||w===void 0||w.call(window,p,u),y())});return y});const c=()=>{D.cancel();const a=dt(t,e,n,s);N===void 0&&(N=performance.now()),a.startTime=N,O.set(o,{animation:a,startTime:N}),r&&r(a)};G.set(i,!1),D.ready?D.ready.then(c).catch(wt):c()}const vt=()=>({});class Ds extends re{constructor(){super(...arguments),this.measureInstanceViewportBox=ie}build(){}resetTransform(){}restoreTransform(){}removeValueFromRenderState(){}renderInstance(){}scrapeMotionValuesFromProps(){return vt()}getBaseTargetFromProps(){}readValueFromInstance(e,n,s){return s.initialState[n]||0}sortInstanceNodePosition(){return 0}}const zs=un({scrapeMotionValuesFromProps:vt,createRenderState:vt});function vr(t){const[e,n]=m.useState(t),s=zs({},!1),r=A(()=>new Ds({props:{onUpdate:o=>{n({...o})}},visualState:s,presenceContext:null},{initialState:t}));m.useLayoutEffect(()=>(r.mount({}),()=>r.unmount()),[r]);const i=A(()=>o=>te(r,o));return[e,i]}let Fs=0;const wr=({children:t})=>(m.useEffect(()=>{},[]),nt.jsx(cn,{id:A(()=>`asl-${Fs++}`),children:t})),Ws=1e5,Ut=t=>t>.001?1/t:Ws;function Sr(t){let e=P(1),n=P(1);const{visualElement:s}=m.useContext(ln);t?(e=t.scaleX||e,n=t.scaleY||n):s&&(e=s.getValue("scaleX",1),n=s.getValue("scaleY",1));const r=ht(e,Ut),i=ht(n,Ut);return{scaleX:r,scaleY:i}}const Ae=m.createContext(null);function Hs(t,e,n,s){if(!s)return t;const r=t.findIndex(l=>l.value===e);if(r===-1)return t;const i=s>0?1:-1,o=t[r+i];if(!o)return t;const c=t[r],a=o.layout,u=ne(a.min,a.max,.5);return i===1&&c.layout.max+n>u||i===-1&&c.layout.min+n<u?fn(t,r,r+i):t}function Bs({children:t,as:e="ul",axis:n="y",onReorder:s,values:r,...i},o){const c=A(()=>ce[e]),a=[],u=m.useRef(!1),l={axis:n,registerItem:(d,f)=>{const p=a.findIndex(h=>d===h.value);p!==-1?a[p].layout=f[n]:a.push({value:d,layout:f[n]}),a.sort(js)},updateOrder:(d,f,p)=>{if(u.current)return;const h=Hs(a,d,f,p);a!==h&&(u.current=!0,s(h.map(Gs).filter(g=>r.indexOf(g)!==-1)))}};return m.useEffect(()=>{u.current=!1}),nt.jsx(c,{...i,ref:o,ignoreStrict:!0,children:nt.jsx(Ae.Provider,{value:l,children:t})})}const _s=m.forwardRef(Bs);function Gs(t){return t.value}function js(t,e){return t.layout.min-e.layout.min}function $t(t,e=0){return L(t)?t:P(e)}function ks({children:t,style:e={},value:n,as:s="li",onDrag:r,layout:i=!0,...o},c){const a=A(()=>ce[s]),u=m.useContext(Ae),l={x:$t(e.x),y:$t(e.y)},d=ht([l.x,l.y],([g,y])=>g||y?1:"unset"),{axis:f,registerItem:p,updateOrder:h}=u;return nt.jsx(a,{drag:f,...o,dragSnapToOrigin:!0,style:{...e,x:l.x,y:l.y,zIndex:d},layout:i,onDrag:(g,y)=>{const{velocity:v}=y;v[f]&&h(n,l[f].get(),v[f]),r&&r(g,y)},onLayoutMeasure:g=>p(n,g),ref:c,ignoreStrict:!0,children:t})}const Us=m.forwardRef(ks),Ar=Object.freeze(Object.defineProperty({__proto__:null,Group:_s,Item:Us},Symbol.toStringTag,{value:"Module"}));function $s(t,e){if(t==="first")return 0;{const n=e-1;return t==="last"?n:n/2}}function xr(t=.1,{startDelay:e=0,from:n=0,ease:s}={}){return(r,i)=>{const o=typeof n=="number"?n:$s(n,i),c=Math.abs(o-r);let a=t*c;if(s){const u=i*t;a=dn(s)(a/u)*u}return e+a}}const Er=x,br=mn.reduce((t,e)=>(t[e]=n=>$(n),t),{});function Mr(t,e="end"){return n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);const s=n*t,r=e==="end"?Math.floor(s):Math.ceil(s);return qt(0,1,r/t)}}export{Ir as AcceleratedAnimation,Tr as AnimatePresence,wr as AnimateSharedLayout,Or as DeprecatedLayoutGroupContext,Cs as DragControls,Lr as FlatTree,cn as LayoutGroup,Pr as LayoutGroupContext,Rr as LazyMotion,Dr as MotionConfig,it as MotionConfigContext,ln as MotionContext,zr as MotionGlobalConfig,We as MotionValue,Fr as PresenceContext,Ar as Reorder,Wr as SwitchLayoutGroupContext,re as VisualElement,Hr as addPointerEvent,Br as addPointerInfo,_r as addScaleCorrector,rr as animate,or as animateMini,De as animateValue,te as animateVisualElement,ts as animationControls,Xt as animations,Gr as anticipate,jr as backIn,kr as backInOut,Ur as backOut,$r as buildTransform,Xr as calcLength,$ as cancelFrame,br as cancelSync,Yr as circIn,Kr as circInOut,Nr as circOut,qt as clamp,Jr as color,qr as complex,ie as createBox,Qr as createRendererMotionComponent,we as createScopedAnimate,Zr as cubicBezier,ti as delay,gr as disableInstantTransitions,ei as distance,ni as distance2D,si as domAnimation,ri as domMax,Ns as domMin,ii as easeIn,oi as easeInOut,ai as easeOut,ui as filterProps,ci as findSpring,x as frame,Qt as frameData,li as frameSteps,Ps as inView,fi as inertia,Nt as interpolate,Qe as invariant,di as isBrowser,mi as isDragActive,Is as isMotionComponent,L as isMotionValue,pi as isValidMotionProp,hi as keyframes,gi as m,un as makeUseVisualState,yi as mirrorEasing,vi as mix,ce as motion,j as motionValue,wt as noop,wi as optimizedAppearDataAttribute,Si as pipe,Kt as progress,Ai as px,xi as resolveMotionValue,Ei as reverseEasing,jn as scroll,St as scrollInfo,Je as spring,xr as stagger,yr as startOptimizedAppearAnimation,Mr as steps,Er as sync,bi as time,Yn as transform,fr as unwrapMotionComponent,ir as useAnimate,ar as useAnimateMini,ur as useAnimation,Ms as useAnimationControls,Un as useAnimationFrame,mr as useCycle,vr as useDeprecatedAnimatedState,Sr as useDeprecatedInvertedScale,cr as useDomEvent,lr as useDragControls,Js as useElementScroll,rn as useForceUpdate,pr as useInView,Ts as useInstantLayoutTransition,hr as useInstantTransition,Mi as useIsPresent,rt as useIsomorphicLayoutEffect,Qs as useMotionTemplate,P as useMotionValue,gn as useMotionValueEvent,Ci as usePresence,qn as useReducedMotion,sr as useReducedMotionConfig,dr as useResetProjection,me as useScroll,Zs as useSpring,tr as useTime,ht as useTransform,pe as useUnmountEffect,er as useVelocity,qs as useViewportScroll,nr as useWillChange,et as visualElementStore,he as wrap};
