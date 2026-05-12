(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Ti(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Vf(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Un={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ea={duration:.5,overwrite:!1,delay:0},Jc,Ye,Me,Xn=1e8,me=1/Xn,gc=Math.PI*2,am=gc/4,om=0,Gf=Math.sqrt,lm=Math.cos,cm=Math.sin,Ge=function(t){return typeof t=="string"},Ae=function(t){return typeof t=="function"},Di=function(t){return typeof t=="number"},Qc=function(t){return typeof t>"u"},mi=function(t){return typeof t=="object"},mn=function(t){return t!==!1},tu=function(){return typeof window<"u"},Ha=function(t){return Ae(t)||Ge(t)},Wf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},en=Array.isArray,um=/random\([^)]+\)/g,hm=/,\s*/g,Iu=/(?:-?\.?\d|\.)+/gi,Xf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yf=/[+-]=-?[.\d]+/,fm=/[^,'"\[\]\s]+/gi,dm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,be,ii,vc,eu,On={},Fo={},qf,$f=function(t){return(Fo=Ls(t,On))&&Mn},nu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ta=function(t,e){return!e&&console.warn(t)},jf=function(t,e){return t&&(On[t]=e)&&Fo&&(Fo[t]=e)||On},ba=function(){return 0},pm={suppressEvents:!0,isStart:!0,kill:!1},Ao={suppressEvents:!0,kill:!1},mm={suppressEvents:!0},iu={},Zi=[],xc={},Kf,An={},Sl={},Uu=30,Ro=[],ru="",su=function(t){var e=t[0],n,i;if(mi(e)||Ae(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ro.length;i--&&!Ro[i].targetTest(e););n=Ro[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new vd(t[i],n)))||t.splice(i,1);return t},Dr=function(t){return t._gsap||su(Yn(t))[0]._gsap},Zf=function(t,e,n){return(n=t[e])&&Ae(n)?t[e]():Qc(n)&&t.getAttribute&&t.getAttribute(e)||n},_n=function(t,e){return(t=t.split(",")).forEach(e)||t},Re=function(t){return Math.round(t*1e5)/1e5||0},Te=function(t){return Math.round(t*1e7)/1e7||0},Ss=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},_m=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Bo=function(){var t=Zi.length,e=Zi.slice(0),n,i;for(xc={},Zi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},au=function(t){return!!(t._initted||t._startAt||t.add)},Jf=function(t,e,n,i){Zi.length&&!Ye&&Bo(),t.render(e,n,!!(Ye&&e<0&&au(t))),Zi.length&&!Ye&&Bo()},Qf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(fm).length<2?e:Ge(t)?t.trim():t},td=function(t){return t},Nn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},gm=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ls=function(t,e){for(var n in e)t[n]=e[n];return t},Ou=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=mi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},ko=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ha=function(t){var e=t.parent||be,n=t.keyframes?gm(en(t.keyframes)):Nn;if(mn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},vm=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},ed=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},rl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},nr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ir=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},xm=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Sc=function(t,e,n,i){return t._startAt&&(Ye?t._startAt.revert(Ao):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Sm=function r(t){return!t||t._ts&&r(t.parent)},Nu=function(t){return t._repeat?Ds(t._tTime,t=t.duration()+t._rDelay)*t:0},Ds=function(t,e){var n=Math.floor(t=Te(t/e));return t&&n===t?n-1:n},zo=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},sl=function(t){return t._end=Te(t._start+(t._tDur/Math.abs(t._ts||t._rts||me)||0))},al=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Te(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),sl(t),n._dirty||Ir(n,t)),t},nd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=zo(t.rawTime(),e),(!e._dur||Ua(0,e.totalDuration(),n)-e._tTime>me)&&e.render(n,!0)),Ir(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-me}},oi=function(t,e,n,i){return e.parent&&nr(e),e._start=Te((Di(n)?n:n||t!==be?Hn(t,n,e):t._time)+e._delay),e._end=Te(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ed(t,e,"_first","_last",t._sort?"_start":0),yc(e)||(t._recent=e),i||nd(t,e),t._ts<0&&al(t,t._tTime),t},id=function(t,e){return(On.ScrollTrigger||nu("scrollTrigger",e))&&On.ScrollTrigger.create(e,t)},rd=function(t,e,n,i,s){if(lu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ye&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Kf!==Pn.frame)return Zi.push(t),t._lazy=[s,i],1},ym=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},yc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Mm=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&ym(t)&&!(!t._initted&&yc(t))||(t._ts<0||t._dp._ts<0)&&!yc(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=Ua(0,t._tDur,e),u=Ds(l,o),t._yoyo&&u&1&&(a=1-a),u!==Ds(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ye||i||t._zTime===me||!e&&t._zTime){if(!t._initted&&rd(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?me:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Sc(t,e,n,!0),t._onUpdate&&!n&&Dn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Dn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&nr(t,1),!n&&!Ye&&(Dn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Em=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Is=function(t,e,n,i){var s=t._repeat,a=Te(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Te(a*(s+1)+t._rDelay*s):a,o>0&&!i&&al(t,t._tTime=t._tDur*o),t.parent&&sl(t),n||Ir(t.parent,t),t},Fu=function(t){return t instanceof pn?Ir(t):Is(t,t._dur)},Tm={_start:0,endTime:ba,totalDuration:ba},Hn=function r(t,e,n){var i=t.labels,s=t._recent||Tm,a=t.duration()>=Xn?s.endTime(!1):t._dur,o,l,c;return Ge(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(en(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},fa=function(t,e,n){var i=Di(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=mn(l.vars.inherit)&&l.parent;a.immediateRender=mn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Ie(e[0],a,e[s+1])},ur=function(t,e){return t||t===0?e(t):e},Ua=function(t,e,n){return n<t?t:n>e?e:n},Qe=function(t,e){return!Ge(t)||!(e=dm.exec(t))?"":e[1]},bm=function(t,e,n){return ur(n,function(i){return Ua(t,e,i)})},Mc=[].slice,sd=function(t,e){return t&&mi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&mi(t[0]))&&!t.nodeType&&t!==ii},wm=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ge(i)&&!e||sd(i,1)?(s=n).push.apply(s,Yn(i)):n.push(i)})||n},Yn=function(t,e,n){return Me&&!e&&Me.selector?Me.selector(t):Ge(t)&&!n&&(vc||!Us())?Mc.call((e||eu).querySelectorAll(t),0):en(t)?wm(t,n):sd(t)?Mc.call(t,0):t?[t]:[]},Ec=function(t){return t=Yn(t)[0]||Ta("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Yn(e,n.querySelectorAll?n:n===t?Ta("Invalid scope")||eu.createElement("div"):t)}},ad=function(t){return t.sort(function(){return .5-Math.random()})},od=function(t){if(Ae(t))return t;var e=mi(t)?t:{each:t},n=Ur(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,h=i;return Ge(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||e).length,p=a[_],m,M,S,x,A,w,E,P,y;if(!p){if(y=e.grid==="auto"?0:(e.grid||[1,Xn])[1],!y){for(E=-Xn;E<(E=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(p=a[_]=[],m=l?Math.min(y,_)*u-.5:i%y,M=y===Xn?0:l?_*h/y-.5:i/y|0,E=0,P=Xn,w=0;w<_;w++)S=w%y-m,x=M-(w/y|0),p[w]=A=c?Math.abs(c==="y"?x:S):Gf(S*S+x*x),A>E&&(E=A),A<P&&(P=A);i==="random"&&ad(p),p.max=E-P,p.min=P,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Qe(e.amount||e.each)||0,n=n&&_<0?km(n):n}return _=(p[f]-p.min)/p.max||0,Te(p.b+(n?n(_):_)*p.v)+p.u}},Tc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Te(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Di(n)?0:Qe(n))}},ld=function(t,e){var n=en(t),i,s;return!n&&mi(t)&&(i=n=t.radius||Xn,t.values?(t=Yn(t.values),(s=!Di(t[0]))&&(i*=i)):t=Tc(t.increment)),ur(e,n?Ae(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Xn,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-o,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:a,s||u===a||Di(a)?u:u+Qe(a)}:Tc(t))},cd=function(t,e,n,i){return ur(en(t)?!e:n===!0?!!(n=0):!i,function(){return en(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Am=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Rm=function(t,e){return function(n){return t(parseFloat(n))+(e||Qe(n))}},Cm=function(t,e,n){return hd(t,e,0,1,n)},ud=function(t,e,n){return ur(n,function(i){return t[~~e(i)]})},Pm=function r(t,e,n){var i=e-t;return en(t)?ud(t,r(0,t.length),e):ur(n,function(s){return(i+(s-t)%i)%i+t})},Lm=function r(t,e,n){var i=e-t,s=i*2;return en(t)?ud(t,r(0,t.length-1),e):ur(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},wa=function(t){return t.replace(um,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(hm);return cd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},hd=function(t,e,n,i,s){var a=e-t,o=i-n;return ur(s,function(l){return n+((l-t)/a*o||0)})},Dm=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=Ge(t),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(en(t)&&!en(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=e}else i||(t=Ls(en(t)?[]:{},t));if(!u){for(l in e)ou.call(o,t,l,"get",e[l]);s=function(g){return hu(g,o)||(a?t.p:t)}}}return ur(n,s)},Bu=function(t,e,n){var i=t.labels,s=Xn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Dn=function(t,e,n){var i=t.vars,s=i[e],a=Me,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Zi.length&&Bo(),o&&(Me=o),u=l?s.apply(c,l):s.call(c),Me=a,u},ea=function(t){return nr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ye),t.progress()<1&&Dn(t,"onInterrupt"),t},ms,fd=[],dd=function(t){if(t)if(t=!t.name&&t.default||t,tu()||t.headless){var e=t.name,n=Ae(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ba,render:hu,add:ou,kill:jm,modifier:$m,rawVars:0},a={targetTest:0,get:0,getSetter:uu,aliases:{},register:0};if(Us(),t!==i){if(An[e])return;Nn(i,Nn(ko(t,s),a)),Ls(i.prototype,Ls(s,ko(t,a))),An[i.prop=e]=i,t.targetTest&&(Ro.push(i),iu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}jf(e,i),t.register&&t.register(Mn,i,gn)}else fd.push(t)},pe=255,na={aqua:[0,pe,pe],lime:[0,pe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pe],navy:[0,0,128],white:[pe,pe,pe],olive:[128,128,0],yellow:[pe,pe,0],orange:[pe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pe,0,0],pink:[pe,192,203],cyan:[0,pe,pe],transparent:[pe,pe,pe,0]},yl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*pe+.5|0},pd=function(t,e,n){var i=t?Di(t)?[t>>16,t>>8&pe,t&pe]:0:na.black,s,a,o,l,c,u,h,f,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),na[t])i=na[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&pe,i&pe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&pe,t&pe]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Iu),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=yl(l+1/3,s,a),i[1]=yl(l,s,a),i[2]=yl(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Xf),n&&i.length<4&&(i[3]=1),i}else i=t.match(Iu)||na.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/pe,a=i[1]/pe,o=i[2]/pe,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(a-o)/d+(a<o?6:0):h===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},md=function(t){var e=[],n=[],i=-1;return t.split(Ji).forEach(function(s){var a=s.match(ps)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},ku=function(t,e,n){var i="",s=(t+i).match(Ji),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=pd(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=md(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Ji,"1").split(ps),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Ji),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},Ji=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in na)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),Im=/hsl[a]?\(/,_d=function(t){var e=t.join(" "),n;if(Ji.lastIndex=0,Ji.test(e))return n=Im.test(e),t[1]=ku(t[1],n),t[0]=ku(t[0],n,md(t[1])),!0},Aa,Pn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,d,g=function _(p){var m=r()-i,M=p===!0,S,x,A,w;if((m>t||m<0)&&(n+=m-e),i+=m,A=i-n,S=A-a,(S>0||M)&&(w=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,a+=S+(S>=s?4:s-S),x=1),M||(l=c(_)),x)for(d=0;d<o.length;d++)o[d](A,f,w,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){qf&&(!vc&&tu()&&(ii=vc=window,eu=ii.document||{},On.gsap=Mn,(ii.gsapVersions||(ii.gsapVersions=[])).push(Mn.version),$f(Fo||ii.GreenSockGlobals||!ii.gsap&&ii||{}),fd.forEach(dd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Aa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Aa=0,c=ba},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,m,M){var S=m?function(x,A,w,E){p(x,A,w,E),h.remove(S)}:p;return h.remove(p),o[M?"unshift":"push"](S),Us(),S},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},h}(),Us=function(){return!Aa&&Pn.wake()},ne={},Um=/^[\d.\-M][\d.\-,\s]/,Om=/["']/g,Nm=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Om,"").trim():+c,i=l.substr(o+1).trim();return e},Fm=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Bm=function(t){var e=(t+"").split("("),n=ne[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Nm(e[1])]:Fm(t).split(",").map(Qf)):ne._CE&&Um.test(t)?ne._CE("",t):n},km=function(t){return function(e){return 1-t(1-e)}},Ur=function(t,e){return t&&(Ae(t)?t:ne[t]||Bm(t))||e},Wr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return _n(t,function(o){ne[o]=On[o]=s,ne[a=o.toLowerCase()]=n;for(var l in s)ne[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ne[o+"."+l]=s[l]}),s},gd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ml=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/gc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*cm((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:gd(o);return s=gc/s,l.config=function(c,u){return r(t,c,u)},l},El=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:gd(n);return i.config=function(s){return r(t,s)},i};_n("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Wr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ne.Linear.easeNone=ne.none=ne.Linear.easeIn;Wr("Elastic",Ml("in"),Ml("out"),Ml());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Wr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Wr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Wr("Circ",function(r){return-(Gf(1-r*r)-1)});Wr("Sine",function(r){return r===1?1:-lm(r*am)+1});Wr("Back",El("in"),El("out"),El());ne.SteppedEase=ne.steps=On.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-me;return function(o){return((i*Ua(0,a,o)|0)+s)*n}}};Ea.ease=ne["quad.out"];_n("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ru+=r+","+r+"Params,"});var vd=function(t,e){this.id=om++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Zf,this.set=e?e.getSetter:uu},Ra=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Is(this,+e.duration,1,1),this.data=e.data,Me&&(this._ctx=Me,Me.data.push(this)),Aa||Pn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Is(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Us(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(al(this,n),!s._dp||s.parent||nd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&oi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===me||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Jf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Nu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Nu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ds(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-me?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?zo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-me?0:this._rts,this.totalTime(Ua(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),sl(this),xm(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Us(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==me&&(this._tTime-=me)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Te(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&oi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?zo(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=mm);var i=Ye;return Ye=n,au(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ye=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Fu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Fu(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Hn(this,n),mn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,mn(i)),this._dur||(this._zTime=-me),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-me:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-me,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-me)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ae(n)?n:td,l=function(){var u=i.then;i.then=null,s&&s(),Ae(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){ea(this)},r}();Nn(Ra.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-me,_prom:0,_ps:!1,_rts:1});var pn=function(r){Vf(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=mn(n.sortChildren),be&&oi(n.parent||be,Ti(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&id(Ti(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return fa(0,arguments,this),this},e.from=function(i,s,a){return fa(1,arguments,this),this},e.fromTo=function(i,s,a,o){return fa(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,ha(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ie(i,s,Hn(this,a),1),this},e.call=function(i,s,a){return oi(this,Ie.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Ie(i,a,Hn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ha(a).immediateRender=mn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,ha(o).immediateRender=mn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Te(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,p,m,M,S,x,A,w,E;if(this!==be&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,x=this._start,S=this._ts,m=!S,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=Te(u%p),u===l?(_=this._repeat,f=c):(A=Te(u/p),_=~~A,_&&_===A&&(f=c,_--),f>c&&(f=c)),A=Ds(this._tTime,p),!o&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),w&&_&1&&(f=c-f,E=1),_!==A&&!this._lock){var P=w&&A&1,y=P===(w&&_&1);if(_<A&&(P=!P),o=P?0:u%c?c:u,this._lock=1,this.render(o||(E?0:Te(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Dn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,A=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Em(this,Te(o),Te(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!A&&(Dn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!m){M=0,g&&(u+=this._zTime=-me);break}}d=g}else{d=this._last;for(var v=i<0?i:f;d;){if(g=d._prev,(d._act||v<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,a||Ye&&au(d)),f!==this._time||!this._ts&&!m){M=0,g&&(u+=this._zTime=v?-me:me);break}}d=g}}if(M&&!s&&(this.pause(),M.render(f>=o?0:-me)._zTime=f>=o?1:-1,this._ts))return this._start=x,sl(this),this.render(i,s,a);this._onUpdate&&!s&&Dn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&nr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Dn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Di(s)||(s=Hn(this,s,i)),!(i instanceof Ra)){if(en(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Ge(i))return this.addLabel(i,s);if(Ae(i))i=Ie.delayedCall(0,i);else return this}return this!==i?oi(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Xn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ie?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Ge(i)?this.removeLabel(i):Ae(i)?this.killTweensOf(i):(i.parent===this&&rl(this,i),i===this._recent&&(this._recent=this._last),Ir(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Te(Pn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Hn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Ie.delayedCall(0,s||ba,a);return o.data="isPause",this._hasPause=1,oi(this,o,Hn(this,i))},e.removePause=function(i){var s=this._first;for(i=Hn(this,i);s;)s._start===i&&s.data==="isPause"&&nr(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Xi!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Yn(i),l=this._first,c=Di(s),u;l;)l instanceof Ie?_m(l._targets,o)&&(c?(!Xi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Hn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Ie.to(a,Nn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||me,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Is(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,Nn({startAt:{time:Hn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Bu(this,Hn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Bu(this,Hn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+me)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Te(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ir(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ir(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=Xn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,oi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Te(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Is(a,a===be&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(be._ts&&(Jf(be,zo(i,be)),Kf=Pn.frame),Pn.frame>=Uu){Uu+=Un.autoSleep||120;var s=be._first;if((!s||!s._ts)&&Un.autoSleep&&Pn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Pn.sleep()}}},t}(Ra);Nn(pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var zm=function(t,e,n,i,s,a,o){var l=new gn(this._pt,t,e,0,1,Td,null,s),c=0,u=0,h,f,d,g,_,p,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=wa(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),f=n.match(xl)||[];h=xl.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Ss(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=xl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Yf.test(i)||m)&&(l.e=0),this._pt=l,l},ou=function(t,e,n,i,s,a,o,l,c,u){Ae(i)&&(i=i(s||0,t,a));var h=t[e],f=n!=="get"?n:Ae(h)?c?t[e.indexOf("set")||!Ae(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=Ae(h)?c?Xm:Md:cu,g;if(Ge(i)&&(~i.indexOf("random(")&&(i=wa(i)),i.charAt(1)==="="&&(g=Ss(f,i)+(Qe(f)||0),(g||g===0)&&(i=g))),!u||f!==i||bc)return!isNaN(f*i)&&i!==""?(g=new gn(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?qm:Ed,0,d),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!h&&!(e in t)&&nu(e,i),zm.call(this,t,e,f,i,d,l||Un.stringFilter,c))},Hm=function(t,e,n,i,s){if(Ae(t)&&(t=da(t,s,e,n,i)),!mi(t)||t.style&&t.nodeType||en(t)||Wf(t))return Ge(t)?da(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=da(t[o],s,e,n,i);return a},xd=function(t,e,n,i,s,a){var o,l,c,u;if(An[t]&&(o=new An[t]).init(s,o.rawVars?e[t]:Hm(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new gn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==ms))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Xi,bc,lu=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,M=m&&m.data==="nested"?m.vars.targets:p,S=t._overwrite==="auto"&&!Jc,x=t.timeline,A=i.easeReverse||h,w,E,P,y,v,D,U,L,W,X,j,H,F;if(x&&(!f||!s)&&(s="none"),t._ease=Ur(s,Ea.ease),t._rEase=A&&(Ur(A)||t._ease),t._from=!x&&!!i.runBackwards,t._from&&(t.ratio=1),!x||f&&!i.stagger){if(L=p[0]?Dr(p[0]).harness:0,H=L&&i[L.prop],w=ko(i,iu),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?Ao:pm),_._lazy=0),a){if(nr(t._startAt=Ie.set(p,Nn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&mn(l),startAt:null,delay:0,onUpdate:c&&function(){return Dn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ye||!o&&!d)&&t._startAt.revert(Ao),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),P=Nn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&mn(l),immediateRender:o,stagger:0,parent:m},w),H&&(P[L.prop]=H),nr(t._startAt=Ie.set(p,P)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ye?t._startAt.revert(Ao):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,me,me);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&mn(l)||l&&!g,E=0;E<p.length;E++){if(v=p[E],U=v._gsap||su(p)[E]._gsap,t._ptLookup[E]=X={},xc[U.id]&&Zi.length&&Bo(),j=M===p?E:M.indexOf(v),L&&(W=new L).init(v,H||w,t,j,M)!==!1&&(t._pt=y=new gn(t._pt,v,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(J){X[J]=y}),W.priority&&(D=1)),!L||H)for(P in w)An[P]&&(W=xd(P,w,t,j,v,M))?W.priority&&(D=1):X[P]=y=ou.call(t,v,P,"get",w[P],j,M,0,i.stringFilter);t._op&&t._op[E]&&t.kill(v,t._op[E]),S&&t._pt&&(Xi=t,be.killTweensOf(v,X,t.globalTime(e)),F=!t.parent,Xi=0),t._pt&&l&&(xc[U.id]=1)}D&&bd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!F,f&&e<=0&&x.render(Xn,!0,!0)},Vm=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return bc=1,t.vars[e]="+=0",lu(t,o),bc=0,l?Ta(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Re(n)+Qe(h.e)),h.b&&(h.b=u.s+Qe(h.b))},Gm=function(t,e){var n=t[0]?Dr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Ls({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Wm=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(en(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},da=function(t,e,n,i,s){return Ae(t)?t.call(e,n,i,s):Ge(t)&&~t.indexOf("random(")?wa(t):t},Sd=ru+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",yd={};_n(Sd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return yd[r]=1});var Ie=function(r){Vf(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ha(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||be,M=(en(n)||Wf(n)?Di(n[0]):"length"in i)?[n]:Yn(n),S,x,A,w,E,P,y,v;if(o._targets=M.length?su(M):Ta("GSAP target "+n+" not found. https://gsap.com",!Un.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Ha(c)||Ha(u)){i=o.vars;var D=i.easeReverse||i.yoyoEase;if(S=o.timeline=new pn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:M}),S.kill(),S.parent=S._dp=Ti(o),S._start=0,f||Ha(c)||Ha(u)){if(w=M.length,y=f&&od(f),mi(f))for(E in f)~Sd.indexOf(E)&&(v||(v={}),v[E]=f[E]);for(x=0;x<w;x++)A=ko(i,yd),A.stagger=0,D&&(A.easeReverse=D),v&&Ls(A,v),P=M[x],A.duration=+da(c,Ti(o),x,P,M),A.delay=(+da(u,Ti(o),x,P,M)||0)-o._delay,!f&&w===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),S.to(P,A,y?y(x,P,M):0),S._ease=ne.none;S.duration()?c=u=0:o.timeline=0}else if(g){ha(Nn(S.vars.defaults,{ease:"none"})),S._ease=Ur(g.ease||i.ease||"none");var U=0,L,W,X;if(en(g))g.forEach(function(j){return S.to(M,j,">")}),S.duration();else{A={};for(E in g)E==="ease"||E==="easeEach"||Wm(E,g[E],A,g.easeEach);for(E in A)for(L=A[E].sort(function(j,H){return j.t-H.t}),U=0,x=0;x<L.length;x++)W=L[x],X={ease:W.e,duration:(W.t-(x?L[x-1].t:0))/100*c},X[E]=W.v,S.to(M,X,U),U+=X.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return d===!0&&!Jc&&(Xi=Ti(o),be.killTweensOf(M),Xi=0),oi(m,Ti(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===Te(m._time)&&mn(h)&&Sm(Ti(o))&&m.data!=="nested")&&(o._tTime=-me,o.render(Math.max(0,-u)||0)),p&&id(Ti(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-me&&!u?l:i<me?0:i,f,d,g,_,p,m,M,S;if(!c)Mm(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=Te(h%_),h===l?(g=this._repeat,f=c):(p=Te(h/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(f=c-f),p=Ds(this._tTime,_),f===o&&!a&&this._initted&&g===p)return this._tTime=h,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(Te(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(rd(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var x=f<o;if(x!==this._inv){var A=x?o:c-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(x?-1:1)/A:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(f/c);if(this._from&&(this.ratio=M=1-M),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!p&&(Dn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;S&&S.render(i<0?i:S._dur*S._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Sc(this,i,s,a),Dn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Dn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Sc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&nr(this,1),!s&&!(u&&!o)&&(h||o||m)&&(Dn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Aa||Pn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||lu(this,c),u=this._ease(c/this._dur),Vm(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(al(this,0),this.parent||ed(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ea(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ye),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Xi&&Xi.vars.overwrite!==!0)._first||ea(this),this.parent&&a!==this.timeline.totalDuration()&&Is(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Yn(i):o,c=this._ptLookup,u=this._pt,h,f,d,g,_,p,m;if((!s||s==="all")&&vm(o,l))return s==="all"&&(this._pt=0),ea(this);for(h=this._op=this._op||[],s!=="all"&&(Ge(s)&&(_={},_n(s,function(M){return _[M]=1}),s=_),s=Gm(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(h[m]=s,g=f,d={}):(d=h[m]=h[m]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&rl(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&ea(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return fa(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return fa(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return be.killTweensOf(i,s,a)},t}(Ra);Nn(Ie.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});_n("staggerTo,staggerFrom,staggerFromTo",function(r){Ie[r]=function(){var t=new pn,e=Mc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var cu=function(t,e,n){return t[e]=n},Md=function(t,e,n){return t[e](n)},Xm=function(t,e,n,i){return t[e](i.fp,n)},Ym=function(t,e,n){return t.setAttribute(e,n)},uu=function(t,e){return Ae(t[e])?Md:Qc(t[e])&&t.setAttribute?Ym:cu},Ed=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},qm=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Td=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},hu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},$m=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},jm=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?rl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Km=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},bd=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},gn=function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Ed,this.d=l||this,this.set=c||cu,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Km,this.m=n,this.mt=s,this.tween=i},r}();_n(ru+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return iu[r]=1});On.TweenMax=On.TweenLite=Ie;On.TimelineLite=On.TimelineMax=pn;be=new pn({sortChildren:!1,defaults:Ea,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Un.stringFilter=_d;var Or=[],Co={},Zm=[],zu=0,Jm=0,Tl=function(t){return(Co[t]||Zm).map(function(e){return e()})},wc=function(){var t=Date.now(),e=[];t-zu>2&&(Tl("matchMediaInit"),Or.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=ii.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Tl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),zu=t,Tl("matchMedia"))},wd=function(){function r(e,n){this.selector=n&&Ec(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Jm++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ae(n)&&(s=i,i=n,n=Ae);var a=this,o=function(){var c=Me,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ec(s)),Me=a,h=i.apply(a,arguments),Ae(h)&&a._r.push(h),Me=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Ae?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Me;Me=null,n(this),Me=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ie&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof pn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ie)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Or.length;a--;)Or[a].id===this.id&&Or.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),Qm=function(){function r(e){this.contexts=[],this.scope=e,Me&&Me.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){mi(n)||(n={matches:n});var a=new wd(0,s||this.scope),o=a.conditions={},l,c,u;Me&&!a.selector&&(a.selector=Me.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=ii.matchMedia(n[c]),l&&(Or.indexOf(a)<0&&Or.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(wc):l.addEventListener("change",wc)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ho={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return dd(i)})},timeline:function(t){return new pn(t)},getTweensOf:function(t,e){return be.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ge(t)&&(t=Yn(t)[0]);var s=Dr(t||{}).get,a=n?td:Qf;return n==="native"&&(n=""),t&&(e?a((An[e]&&An[e].get||s)(t,e,n,i)):function(o,l,c){return a((An[o]&&An[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Yn(t),t.length>1){var i=t.map(function(u){return Mn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=An[e],o=Dr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;ms._pt=0,h.init(t,n?u+n:u,ms,0,[t]),h.render(1,h),ms._pt&&hu(1,ms)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=Mn.to(t,Nn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return be.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ur(t.ease,Ea.ease)),Ou(Ea,t||{})},config:function(t){return Ou(Un,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!An[o]&&!On[o]&&Ta(e+" effect requires "+o+" plugin.")}),Sl[e]=function(o,l,c){return n(Yn(o),Nn(l||{},s),c)},a&&(pn.prototype[e]=function(o,l,c){return this.add(Sl[e](o,mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ne[t]=Ur(e)},parseEase:function(t,e){return arguments.length?Ur(t,e):ne},getById:function(t){return be.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new pn(t),i,s;for(n.smoothChildTiming=mn(t.smoothChildTiming),be.remove(n),n._dp=0,n._time=n._tTime=be._time,i=be._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ie&&i.vars.onComplete===i._targets[0]))&&oi(n,i,i._start-i._delay),i=s;return oi(be,n,0),n},context:function(t,e){return t?new wd(t,e):Me},matchMedia:function(t){return new Qm(t)},matchMediaRefresh:function(){return Or.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||wc()},addEventListener:function(t,e){var n=Co[t]||(Co[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Co[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Pm,wrapYoyo:Lm,distribute:od,random:cd,snap:ld,normalize:Cm,getUnit:Qe,clamp:bm,splitColor:pd,toArray:Yn,selector:Ec,mapRange:hd,pipe:Am,unitize:Rm,interpolate:Dm,shuffle:ad},install:$f,effects:Sl,ticker:Pn,updateRoot:pn.updateRoot,plugins:An,globalTimeline:be,core:{PropTween:gn,globals:jf,Tween:Ie,Timeline:pn,Animation:Ra,getCache:Dr,_removeLinkedListItem:rl,reverting:function(){return Ye},context:function(t){return t&&Me&&(Me.data.push(t),t._ctx=Me),Me},suppressOverwrites:function(t){return Jc=t}}};_n("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ho[r]=Ie[r]});Pn.add(pn.updateRoot);ms=Ho.to({},{duration:0});var t_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},e_=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=t_(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},bl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Ge(s)&&(l={},_n(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}e_(o,s)}}}},Mn=Ho.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ye?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},bl("roundProps",Tc),bl("modifiers"),bl("snap",ld))||Ho;Ie.version=pn.version=Mn.version="3.15.0";qf=1;tu()&&Us();ne.Power0;ne.Power1;ne.Power2;ne.Power3;ne.Power4;ne.Linear;ne.Quad;ne.Cubic;ne.Quart;ne.Quint;ne.Strong;ne.Elastic;ne.Back;ne.SteppedEase;ne.Bounce;ne.Sine;ne.Expo;ne.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Hu,Yi,ys,fu,Rr,Vu,du,n_=function(){return typeof window<"u"},Ii={},yr=180/Math.PI,Ms=Math.PI/180,Xr=Math.atan2,Gu=1e8,pu=/([A-Z])/g,i_=/(left|right|width|margin|padding|x)/i,r_=/[\s,\(]\S/,ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ac=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},s_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},a_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},o_=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},l_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Ad=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Rd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},c_=function(t,e,n){return t.style[e]=n},u_=function(t,e,n){return t.style.setProperty(e,n)},h_=function(t,e,n){return t._gsap[e]=n},f_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},d_=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},p_=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},we="transform",vn=we+"Origin",m_=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Ii&&s){if(this.tfm=this.tfm||{},t!=="transform")t=ci[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=bi(i,o)}):this.tfm[t]=a.x?a[t]:bi(i,t),t===vn&&(this.tfm.zOrigin=a.zOrigin);else return ci.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(we)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(vn,e,"")),t=we}(s||e)&&this.props.push(t,e,s[t])},Cd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},__=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(pu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=du(),(!s||!s.isStart)&&!n[we]&&(Cd(n),i.zOrigin&&n[vn]&&(n[vn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Pd=function(t,e){var n={target:t,props:[],revert:__,save:m_};return t._gsap||Mn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Ld,Rc=function(t,e){var n=Yi.createElementNS?Yi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Yi.createElement(t);return n&&n.style?n:Yi.createElement(t)},In=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(pu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Os(e)||e,1)||""},Wu="O,Moz,ms,Ms,Webkit".split(","),Os=function(t,e,n){var i=e||Rr,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Wu[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Wu[a]:"")+t},Cc=function(){n_()&&window.document&&(Hu=window,Yi=Hu.document,ys=Yi.documentElement,Rr=Rc("div")||{style:{}},Rc("div"),we=Os(we),vn=we+"Origin",Rr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ld=!!Os("perspective"),du=Mn.core.reverting,fu=1)},Xu=function(t){var e=t.ownerSVGElement,n=Rc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ys.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ys.removeChild(n),s},Yu=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Dd=function(t){var e,n;try{e=t.getBBox()}catch{e=Xu(t),n=1}return e&&(e.width||e.height)||n||(e=Xu(t)),e&&!e.width&&!e.x&&!e.y?{x:+Yu(t,["x","cx","x1"])||0,y:+Yu(t,["y","cy","y1"])||0,width:0,height:0}:e},Id=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Dd(t))},ir=function(t,e){if(e){var n=t.style,i;e in Ii&&e!==vn&&(e=we),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(pu,"-$1").toLowerCase())):n.removeAttribute(e)}},qi=function(t,e,n,i,s,a){var o=new gn(t._pt,e,n,0,1,a?Rd:Ad);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},qu={deg:1,rad:1,turn:1},g_={grid:1,flex:1},rr=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Rr.style,l=i_.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,p,m;if(i===a||!s||qu[i]||qu[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),m=t.getCTM&&Id(t),(d||a==="%")&&(Ii[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[u],Re(d?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(f?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Yi||!_.appendChild)&&(_=Yi.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Pn.time&&!p.uncache)return Re(s/p.width*h);if(d&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=h+i,g=t[u],M?t.style[e]=M:ir(t,e)}else(d||a==="%")&&!g_[In(_,"display")]&&(o.position=In(t,"position")),_===t&&(o.position="static"),_.appendChild(Rr),g=Rr[u],_.removeChild(Rr),o.position="absolute";return l&&d&&(p=Dr(_),p.time=Pn.time,p.width=_[u]),Re(f?g*s/h:g&&s?h/g*s:0)},bi=function(t,e,n,i){var s;return fu||Cc(),e in ci&&e!=="transform"&&(e=ci[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ii[e]&&e!=="transform"?(s=Pa(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Go(In(t,vn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Vo[e]&&Vo[e](t,e,n)||In(t,e)||Zf(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?rr(t,e,s,n)+n:s},v_=function(t,e,n,i){if(!n||n==="none"){var s=Os(e,t,1),a=s&&In(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=In(t,"borderTopColor"))}var o=new gn(this._pt,t.style,e,0,1,Td),l=0,c=0,u,h,f,d,g,_,p,m,M,S,x,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=In(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=In(t,e)||i,_?t.style[e]=_:ir(t,e)),u=[n,i],_d(u),n=u[0],i=u[1],f=n.match(ps)||[],A=i.match(ps)||[],A.length){for(;h=ps.exec(i);)p=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),p.charAt(1)==="="&&(p=Ss(d,p)+x),m=parseFloat(p),S=p.substr((m+"").length),l=ps.lastIndex-S.length,S||(S=S||Un.units[e]||x,l===i.length&&(i+=S,o.e+=S)),x!==S&&(d=rr(t,e,_,S)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:d,c:m-d,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Rd:Ad;return Yf.test(i)&&(o.e=0),this._pt=o,o},$u={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},x_=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=$u[n]||n,e[1]=$u[i]||i,e.join(" ")},S_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ii[o]&&(l=1,o=o==="transformOrigin"?vn:we),ir(n,o);l&&(ir(n,we),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Pa(n,1),a.uncache=1,Cd(i)))}},Vo={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new gn(t._pt,e,n,0,0,S_);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Ca=[1,0,0,1,0,0],Ud={},Od=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ju=function(t){var e=In(t,we);return Od(e)?Ca:e.substr(7).match(Xf).map(Re)},mu=function(t,e){var n=t._gsap||Dr(t),i=t.style,s=ju(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ca:s):(s===Ca&&!t.offsetParent&&t!==ys&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,ys.appendChild(t)),s=ju(t),l?i.display=l:ir(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ys.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Pc=function(t,e,n,i,s,a){var o=t._gsap,l=s||mu(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],M=l[5],S=e.split(" "),x=parseFloat(S[0])||0,A=parseFloat(S[1])||0,w,E,P,y;n?l!==Ca&&(E=d*p-g*_)&&(P=x*(p/E)+A*(-_/E)+(_*M-p*m)/E,y=x*(-g/E)+A*(d/E)-(d*M-g*m)/E,x=P,A=y):(w=Dd(t),x=w.x+(~S[0].indexOf("%")?x/100*w.width:x),A=w.y+(~(S[1]||S[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&o.smooth?(m=x-c,M=A-u,o.xOffset=h+(m*d+M*_)-m,o.yOffset=f+(m*g+M*p)-M):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=A,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[vn]="0px 0px",a&&(qi(a,o,"xOrigin",c,x),qi(a,o,"yOrigin",u,A),qi(a,o,"xOffset",h,o.xOffset),qi(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+A)},Pa=function(t,e){var n=t._gsap||new vd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=In(t,vn)||"0",u,h,f,d,g,_,p,m,M,S,x,A,w,E,P,y,v,D,U,L,W,X,j,H,F,J,R,ot,Lt,Kt,q,et;return u=h=f=_=p=m=M=S=x=0,d=g=1,n.svg=!!(t.getCTM&&Id(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[we]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[we]!=="none"?l[we]:"")),i.scale=i.rotate=i.translate="none"),E=mu(t,n.svg),n.svg&&(n.uncache?(F=t.getBBox(),c=n.xOrigin-F.x+"px "+(n.yOrigin-F.y)+"px",H=""):H=!e&&t.getAttribute("data-svg-origin"),Pc(t,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,E)),A=n.xOrigin||0,w=n.yOrigin||0,E!==Ca&&(D=E[0],U=E[1],L=E[2],W=E[3],u=X=E[4],h=j=E[5],E.length===6?(d=Math.sqrt(D*D+U*U),g=Math.sqrt(W*W+L*L),_=D||U?Xr(U,D)*yr:0,M=L||W?Xr(L,W)*yr+_:0,M&&(g*=Math.abs(Math.cos(M*Ms))),n.svg&&(u-=A-(A*D+w*L),h-=w-(A*U+w*W))):(et=E[6],Kt=E[7],R=E[8],ot=E[9],Lt=E[10],q=E[11],u=E[12],h=E[13],f=E[14],P=Xr(et,Lt),p=P*yr,P&&(y=Math.cos(-P),v=Math.sin(-P),H=X*y+R*v,F=j*y+ot*v,J=et*y+Lt*v,R=X*-v+R*y,ot=j*-v+ot*y,Lt=et*-v+Lt*y,q=Kt*-v+q*y,X=H,j=F,et=J),P=Xr(-L,Lt),m=P*yr,P&&(y=Math.cos(-P),v=Math.sin(-P),H=D*y-R*v,F=U*y-ot*v,J=L*y-Lt*v,q=W*v+q*y,D=H,U=F,L=J),P=Xr(U,D),_=P*yr,P&&(y=Math.cos(P),v=Math.sin(P),H=D*y+U*v,F=X*y+j*v,U=U*y-D*v,j=j*y-X*v,D=H,X=F),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Re(Math.sqrt(D*D+U*U+L*L)),g=Re(Math.sqrt(j*j+et*et)),P=Xr(X,j),M=Math.abs(P)>2e-4?P*yr:0,x=q?1/(q<0?-q:q):0),n.svg&&(H=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Od(In(t,we)),H&&t.setAttribute("transform",H))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Re(d),n.scaleY=Re(g),n.rotation=Re(_)+o,n.rotationX=Re(p)+o,n.rotationY=Re(m)+o,n.skewX=M+o,n.skewY=S+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[vn]=Go(c)),n.xOffset=n.yOffset=0,n.force3D=Un.force3D,n.renderTransform=n.svg?M_:Ld?Nd:y_,n.uncache=0,n},Go=function(t){return(t=t.split(" "))[0]+" "+t[1]},wl=function(t,e,n){var i=Qe(e);return Re(parseFloat(e)+parseFloat(rr(t,"x",n+"px",i)))+i},y_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Nd(t,e)},dr="0deg",Ws="0px",pr=") ",Nd=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,S=n.zOrigin,x="",A=m==="auto"&&t&&t!==1||m===!0;if(S&&(h!==dr||u!==dr)){var w=parseFloat(u)*Ms,E=Math.sin(w),P=Math.cos(w),y;w=parseFloat(h)*Ms,y=Math.cos(w),a=wl(M,a,E*y*-S),o=wl(M,o,-Math.sin(w)*-S),l=wl(M,l,P*y*-S+S)}p!==Ws&&(x+="perspective("+p+pr),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(A||a!==Ws||o!==Ws||l!==Ws)&&(x+=l!==Ws||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+pr),c!==dr&&(x+="rotate("+c+pr),u!==dr&&(x+="rotateY("+u+pr),h!==dr&&(x+="rotateX("+h+pr),(f!==dr||d!==dr)&&(x+="skew("+f+", "+d+pr),(g!==1||_!==1)&&(x+="scale("+g+", "+_+pr),M.style[we]=x||"translate(0, 0)"},M_=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,S=parseFloat(a),x=parseFloat(o),A,w,E,P,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ms,c*=Ms,A=Math.cos(l)*h,w=Math.sin(l)*h,E=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Ms,y=Math.tan(c-u),y=Math.sqrt(1+y*y),E*=y,P*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),A*=y,w*=y)),A=Re(A),w=Re(w),E=Re(E),P=Re(P)):(A=h,P=f,w=E=0),(S&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(S=rr(d,"x",a,"px"),x=rr(d,"y",o,"px")),(g||_||p||m)&&(S=Re(S+g-(g*A+_*E)+p),x=Re(x+_-(g*w+_*P)+m)),(i||s)&&(y=d.getBBox(),S=Re(S+i/100*y.width),x=Re(x+s/100*y.height)),y="matrix("+A+","+w+","+E+","+P+","+S+","+x+")",d.setAttribute("transform",y),M&&(d.style[we]=y)},E_=function(t,e,n,i,s){var a=360,o=Ge(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?yr:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Gu)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Gu)%a-~~(c/a)*a)),t._pt=f=new gn(t._pt,e,n,i,c,s_),f.e=u,f.u="deg",t._props.push(n),f},Ku=function(t,e){for(var n in e)t[n]=e[n];return t},T_=function(t,e,n){var i=Ku({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[we]=e,o=Pa(n,1),ir(n,we),n.setAttribute("transform",c)):(c=getComputedStyle(n)[we],a[we]=e,o=Pa(n,1),a[we]=c);for(l in Ii)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=Qe(c),g=Qe(u),h=d!==g?rr(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new gn(t._pt,o,l,h,f-h,Ac),t._pt.u=g||0,t._props.push(l));Ku(o,i)};_n("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Vo[t>1?"border"+r:r]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(g){return bi(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,h)}});var Fd={name:"css",register:Cc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,f,d,g,_,p,m,M,S,x,A,w,E,P,y;fu||Cc(),this.styles=this.styles||Pd(t),P=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(An[_]&&xd(_,e,n,i,t,s)))){if(d=typeof u,g=Vo[_],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=wa(u)),g)g(this,t,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Ji.lastIndex=0,Ji.test(c)||(p=Qe(c),m=Qe(u),m?p!==m&&(c=rr(t,_,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),P.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Ge(c)&&~c.indexOf("random(")&&(c=wa(c)),Qe(c+"")||c==="auto"||(c+=Un.units[_]||Qe(bi(t,_))||""),(c+"").charAt(1)==="="&&(c=bi(t,_))):c=bi(t,_),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in ci&&(_==="autoAlpha"&&(f===1&&bi(t,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,o.visibility),qi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=ci[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in Ii,S){if(this.styles.save(_),y=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=In(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=t.style.perspective;t.style.perspective=u,u=In(t,"perspective"),v?t.style.perspective=v:ir(t,"perspective")}h=parseFloat(u)}if(x||(A=t._gsap,A.renderTransform&&!e.parseTransform||Pa(t,e.parseTransform),w=e.smoothOrigin!==!1&&A.smooth,x=this._pt=new gn(this._pt,o,we,0,1,A.renderTransform,A,0,-1),x.dep=1),_==="scale")this._pt=new gn(this._pt,A,"scaleY",A.scaleY,(M?Ss(A.scaleY,M+h):h)-A.scaleY||0,Ac),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(vn,0,o[vn]),u=x_(u),A.svg?Pc(t,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&qi(this,A,"zOrigin",A.zOrigin,m),qi(this,o,_,Go(c),Go(u)));continue}else if(_==="svgOrigin"){Pc(t,u,1,w,0,this);continue}else if(_ in Ud){E_(this,A,_,f,M?Ss(f,M+u):u);continue}else if(_==="smoothOrigin"){qi(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){T_(this,u,t);continue}}else _ in o||(_=Os(_)||_);if(S||(h||h===0)&&(f||f===0)&&!r_.test(u)&&_ in o)p=(c+"").substr((f+"").length),h||(h=0),m=Qe(u)||(_ in Un.units?Un.units[_]:p),p!==m&&(f=rr(t,_,c,m)),this._pt=new gn(this._pt,S?A:o,_,f,(M?Ss(f,M+h):h)-f,!S&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?l_:Ac),this._pt.u=m||0,S&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=o_):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=a_);else if(_ in o)v_.call(this,t,_,c,M?M+u:u);else if(_ in t)this.add(t,_,c||t[_],M?M+u:u,i,s);else if(_!=="parseTransform"){nu(_,u);continue}S||(_ in o?P.push(_,0,o[_]):typeof t[_]=="function"?P.push(_,2,t[_]()):P.push(_,1,c||t[_])),a.push(_)}}E&&bd(this)},render:function(t,e){if(e.tween._time||!du())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:bi,aliases:ci,getSetter:function(t,e,n){var i=ci[e];return i&&i.indexOf(",")<0&&(e=i),e in Ii&&e!==vn&&(t._gsap.x||bi(t,"x"))?n&&Vu===n?e==="scale"?f_:h_:(Vu=n||{})&&(e==="scale"?d_:p_):t.style&&!Qc(t.style[e])?c_:~e.indexOf("-")?u_:uu(t,e)},core:{_removeProperty:ir,_getMatrix:mu}};Mn.utils.checkPrefix=Os;Mn.core.getStyleSaver=Pd;(function(r,t,e,n){var i=_n(r+","+t+","+e,function(s){Ii[s]=1});_n(t,function(s){Un.units[s]="deg",Ud[s]=1}),ci[i[13]]=r+","+t,_n(n,function(s){var a=s.split(":");ci[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");_n("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Un.units[r]="px"});Mn.registerPlugin(Fd);var ve=Mn.registerPlugin(Fd)||Mn;ve.core.Tween;function b_(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function w_(r,t,e){return t&&b_(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var We,Po,Ln,$i,ji,Es,Bd,Mr,Ts,kd,Ri,Jn,zd,Hd=function(){return We||typeof window<"u"&&(We=window.gsap)&&We.registerPlugin&&We},Vd=1,_s=[],Qt=[],di=[],pa=Date.now,Lc=function(t,e){return e},A_=function(){var t=Ts.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,Qt),i.push.apply(i,di),Qt=n,di=i,Lc=function(a,o){return e[a](o)}},Qi=function(t,e){return~di.indexOf(t)&&di[di.indexOf(t)+1][e]},ma=function(t){return!!~kd.indexOf(t)},sn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},rn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Va="scrollLeft",Ga="scrollTop",Dc=function(){return Ri&&Ri.isPressed||Qt.cache++},Wo=function(t,e){var n=function i(s){if(s||s===0){Vd&&(Ln.history.scrollRestoration="manual");var a=Ri&&Ri.isPressed;s=i.v=Math.round(s)||(Ri&&Ri.iOS?1:0),t(s),i.cacheID=Qt.cache,a&&Lc("ss",s)}else(e||Qt.cache!==i.cacheID||Lc("ref"))&&(i.cacheID=Qt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},un={s:Va,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Wo(function(r){return arguments.length?Ln.scrollTo(r,Ne.sc()):Ln.pageXOffset||$i[Va]||ji[Va]||Es[Va]||0})},Ne={s:Ga,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:un,sc:Wo(function(r){return arguments.length?Ln.scrollTo(un.sc(),r):Ln.pageYOffset||$i[Ga]||ji[Ga]||Es[Ga]||0})},fn=function(t,e){return(e&&e._ctx&&e._ctx.selector||We.utils.toArray)(t)[0]||(typeof t=="string"&&We.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},R_=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},sr=function(t,e){var n=e.s,i=e.sc;ma(t)&&(t=$i.scrollingElement||ji);var s=Qt.indexOf(t),a=i===Ne.sc?1:2;!~s&&(s=Qt.push(t)-1),Qt[s+a]||sn(t,"scroll",Dc);var o=Qt[s+a],l=o||(Qt[s+a]=Wo(Qi(t,n),!0)||(ma(t)?i:Wo(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=We.getProperty(t,"scrollBehavior")==="smooth"),l},Ic=function(t,e,n){var i=t,s=t,a=pa(),o=a,l=e||50,c=Math.max(500,l*3),u=function(g,_){var p=pa();_||p-a>l?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},f=function(g){var _=o,p=s,m=pa();return(g||g===0)&&g!==i&&u(g),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Xs=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Zu=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Gd=function(){Ts=We.core.globals().ScrollTrigger,Ts&&Ts.core&&A_()},Wd=function(t){return We=t||Hd(),!Po&&We&&typeof document<"u"&&document.body&&(Ln=window,$i=document,ji=$i.documentElement,Es=$i.body,kd=[Ln,$i,ji,Es],We.utils.clamp,zd=We.core.context||function(){},Mr="onpointerenter"in Es?"pointer":"mouse",Bd=Ce.isTouch=Ln.matchMedia&&Ln.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ln||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Jn=Ce.eventTypes=("ontouchstart"in ji?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ji?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Vd=0},500),Po=1),Ts||Gd(),Po};un.op=Ne;Qt.cache=0;var Ce=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Po||Wd(We)||console.warn("Please gsap.registerPlugin(Observer)"),Ts||Gd();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,S=n.onPress,x=n.onRelease,A=n.onRight,w=n.onLeft,E=n.onUp,P=n.onDown,y=n.onChangeX,v=n.onChangeY,D=n.onChange,U=n.onToggleX,L=n.onToggleY,W=n.onHover,X=n.onHoverEnd,j=n.onMove,H=n.ignoreCheck,F=n.isNormalizer,J=n.onGestureStart,R=n.onGestureEnd,ot=n.onWheel,Lt=n.onEnable,Kt=n.onDisable,q=n.onClick,et=n.scrollSpeed,ut=n.capture,nt=n.allowClicks,Dt=n.lockAxis,Ct=n.onLockAxis;this.target=o=fn(o)||ji,this.vars=n,d&&(d=We.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,et=et||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ln.getComputedStyle(Es).lineHeight)||22);var B,Gt,yt,Et,gt,Ut,Pt,N=this,te=0,C=0,T=n.passive||!u&&n.passive!==!1,G=sr(o,un),Z=sr(o,Ne),Q=G(),tt=Z(),mt=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Jn[0]==="pointerdown",lt=ma(o),it=o.ownerDocument||$i,It=[0,0,0],rt=[0,0,0],Mt=0,$t=function(){return Mt=pa()},_t=function(xt,ie){return(N.event=xt)&&d&&R_(xt.target,d)||ie&&mt&&xt.pointerType!=="touch"||H&&H(xt,ie)},vt=function(){N._vx.reset(),N._vy.reset(),Gt.pause(),h&&h(N)},Ot=function(){var xt=N.deltaX=Zu(It),ie=N.deltaY=Zu(rt),ht=Math.abs(xt)>=i,kt=Math.abs(ie)>=i;D&&(ht||kt)&&D(N,xt,ie,It,rt),ht&&(A&&N.deltaX>0&&A(N),w&&N.deltaX<0&&w(N),y&&y(N),U&&N.deltaX<0!=te<0&&U(N),te=N.deltaX,It[0]=It[1]=It[2]=0),kt&&(P&&N.deltaY>0&&P(N),E&&N.deltaY<0&&E(N),v&&v(N),L&&N.deltaY<0!=C<0&&L(N),C=N.deltaY,rt[0]=rt[1]=rt[2]=0),(Et||yt)&&(j&&j(N),yt&&(p&&yt===1&&p(N),M&&M(N),yt=0),Et=!1),Ut&&!(Ut=!1)&&Ct&&Ct(N),gt&&(ot(N),gt=!1),B=0},Vt=function(xt,ie,ht){It[ht]+=xt,rt[ht]+=ie,N._vx.update(xt),N._vy.update(ie),c?B||(B=requestAnimationFrame(Ot)):Ot()},fe=function(xt,ie){Dt&&!Pt&&(N.axis=Pt=Math.abs(xt)>Math.abs(ie)?"x":"y",Ut=!0),Pt!=="y"&&(It[2]+=xt,N._vx.update(xt,!0)),Pt!=="x"&&(rt[2]+=ie,N._vy.update(ie,!0)),c?B||(B=requestAnimationFrame(Ot)):Ot()},Nt=function(xt){if(!_t(xt,1)){xt=Xs(xt,u);var ie=xt.clientX,ht=xt.clientY,kt=ie-N.x,bt=ht-N.y,zt=N.isDragging;N.x=ie,N.y=ht,(zt||(kt||bt)&&(Math.abs(N.startX-ie)>=s||Math.abs(N.startY-ht)>=s))&&(yt||(yt=zt?2:1),zt||(N.isDragging=!0),fe(kt,bt))}},I=N.onPress=function(Rt){_t(Rt,1)||Rt&&Rt.button||(N.axis=Pt=null,Gt.pause(),N.isPressed=!0,Rt=Xs(Rt),te=C=0,N.startX=N.x=Rt.clientX,N.startY=N.y=Rt.clientY,N._vx.reset(),N._vy.reset(),sn(F?o:it,Jn[1],Nt,T,!0),N.deltaX=N.deltaY=0,S&&S(N))},$=N.onRelease=function(Rt){if(!_t(Rt,1)){rn(F?o:it,Jn[1],Nt,!0);var xt=!isNaN(N.y-N.startY),ie=N.isDragging,ht=ie&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),kt=Xs(Rt);!ht&&xt&&(N._vx.reset(),N._vy.reset(),u&&nt&&We.delayedCall(.08,function(){if(pa()-Mt>300&&!Rt.defaultPrevented){if(Rt.target.click)Rt.target.click();else if(it.createEvent){var bt=it.createEvent("MouseEvents");bt.initMouseEvent("click",!0,!0,Ln,1,kt.screenX,kt.screenY,kt.clientX,kt.clientY,!1,!1,!1,!1,0,null),Rt.target.dispatchEvent(bt)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,h&&ie&&!F&&Gt.restart(!0),yt&&Ot(),m&&ie&&m(N),x&&x(N,ht)}},K=function(xt){return xt.touches&&xt.touches.length>1&&(N.isGesturing=!0)&&J(xt,N.isDragging)},at=function(){return(N.isGesturing=!1)||R(N)},ct=function(xt){if(!_t(xt)){var ie=G(),ht=Z();Vt((ie-Q)*et,(ht-tt)*et,1),Q=ie,tt=ht,h&&Gt.restart(!0)}},Ht=function(xt){if(!_t(xt)){xt=Xs(xt,u),ot&&(gt=!0);var ie=(xt.deltaMode===1?l:xt.deltaMode===2?Ln.innerHeight:1)*g;Vt(xt.deltaX*ie,xt.deltaY*ie,0),h&&!F&&Gt.restart(!0)}},re=function(xt){if(!_t(xt)){var ie=xt.clientX,ht=xt.clientY,kt=ie-N.x,bt=ht-N.y;N.x=ie,N.y=ht,Et=!0,h&&Gt.restart(!0),(kt||bt)&&fe(kt,bt)}},ce=function(xt){N.event=xt,W(N)},_e=function(xt){N.event=xt,X(N)},ee=function(xt){return _t(xt)||Xs(xt,u)&&q(N)};Gt=N._dc=We.delayedCall(f||.25,vt).pause(),N.deltaX=N.deltaY=0,N._vx=Ic(0,50,!0),N._vy=Ic(0,50,!0),N.scrollX=G,N.scrollY=Z,N.isDragging=N.isGesturing=N.isPressed=!1,zd(this),N.enable=function(Rt){return N.isEnabled||(sn(lt?it:o,"scroll",Dc),a.indexOf("scroll")>=0&&sn(lt?it:o,"scroll",ct,T,ut),a.indexOf("wheel")>=0&&sn(o,"wheel",Ht,T,ut),(a.indexOf("touch")>=0&&Bd||a.indexOf("pointer")>=0)&&(sn(o,Jn[0],I,T,ut),sn(it,Jn[2],$),sn(it,Jn[3],$),nt&&sn(o,"click",$t,!0,!0),q&&sn(o,"click",ee),J&&sn(it,"gesturestart",K),R&&sn(it,"gestureend",at),W&&sn(o,Mr+"enter",ce),X&&sn(o,Mr+"leave",_e),j&&sn(o,Mr+"move",re)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=Et=yt=!1,N._vx.reset(),N._vy.reset(),Q=G(),tt=Z(),Rt&&Rt.type&&I(Rt),Lt&&Lt(N)),N},N.disable=function(){N.isEnabled&&(_s.filter(function(Rt){return Rt!==N&&ma(Rt.target)}).length||rn(lt?it:o,"scroll",Dc),N.isPressed&&(N._vx.reset(),N._vy.reset(),rn(F?o:it,Jn[1],Nt,!0)),rn(lt?it:o,"scroll",ct,ut),rn(o,"wheel",Ht,ut),rn(o,Jn[0],I,ut),rn(it,Jn[2],$),rn(it,Jn[3],$),rn(o,"click",$t,!0),rn(o,"click",ee),rn(it,"gesturestart",K),rn(it,"gestureend",at),rn(o,Mr+"enter",ce),rn(o,Mr+"leave",_e),rn(o,Mr+"move",re),N.isEnabled=N.isPressed=N.isDragging=!1,Kt&&Kt(N))},N.kill=N.revert=function(){N.disable();var Rt=_s.indexOf(N);Rt>=0&&_s.splice(Rt,1),Ri===N&&(Ri=0)},_s.push(N),F&&ma(o)&&(Ri=N),N.enable(_)},w_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ce.version="3.15.0";Ce.create=function(r){return new Ce(r)};Ce.register=Wd;Ce.getAll=function(){return _s.slice()};Ce.getById=function(r){return _s.filter(function(t){return t.vars.id===r})[0]};Hd()&&We.registerPlugin(Ce);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var St,fs,Jt,ue,Rn,le,_u,Xo,La,_a,ia,Wa,Ze,ol,Uc,ln,Ju,Qu,ds,Xd,Al,Yd,on,Oc,qd,$d,Vi,Nc,gu,bs,vu,ga,Fc,Rl,Xa=1,Je=Date.now,Cl=Je(),$n=0,ra=0,th=function(t,e,n){var i=wn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},eh=function(t,e){return e&&(!wn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},C_=function r(){return ra&&requestAnimationFrame(r)},nh=function(){return ol=1},ih=function(){return ol=0},ri=function(t){return t},sa=function(t){return Math.round(t*1e5)/1e5||0},jd=function(){return typeof window<"u"},Kd=function(){return St||jd()&&(St=window.gsap)&&St.registerPlugin&&St},zr=function(t){return!!~_u.indexOf(t)},Zd=function(t){return(t==="Height"?vu:Jt["inner"+t])||Rn["client"+t]||le["client"+t]},Jd=function(t){return Qi(t,"getBoundingClientRect")||(zr(t)?function(){return Oo.width=Jt.innerWidth,Oo.height=vu,Oo}:function(){return wi(t)})},P_=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=Qi(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?Zd(s):t["client"+s])||0}},L_=function(t,e){return!e||~di.indexOf(t)?Jd(t):function(){return Oo}},ui=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=Qi(t,n))?a()-Jd(t)()[s]:zr(t)?(Rn[n]||le[n])-Zd(i):t[n]-t["offset"+i])},Ya=function(t,e){for(var n=0;n<ds.length;n+=3)(!e||~e.indexOf(ds[n+1]))&&t(ds[n],ds[n+1],ds[n+2])},wn=function(t){return typeof t=="string"},tn=function(t){return typeof t=="function"},aa=function(t){return typeof t=="number"},Er=function(t){return typeof t=="object"},Ys=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Yr=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},qr=Math.abs,Qd="left",tp="top",xu="right",Su="bottom",Nr="width",Fr="height",va="Right",xa="Left",Sa="Top",ya="Bottom",De="padding",Vn="margin",Ns="Width",yu="Height",Oe="px",Gn=function(t){return Jt.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},D_=function(t){var e=Gn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},rh=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},wi=function(t,e){var n=e&&Gn(t)[Uc]!=="matrix(1, 0, 0, 1, 0, 0)"&&St.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Yo=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},ep=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},I_=function(t){return function(e){return St.utils.snap(ep(t),e)}},Mu=function(t){var e=St.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},U_=function(t){return function(e,n){return Mu(ep(t))(e,n.direction)}},qa=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Ve=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},He=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},$a=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},sh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ja={toggleActions:"play",anticipatePin:0},qo={top:0,left:0,center:.5,bottom:1,right:1},Lo=function(t,e){if(wn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in qo?qo[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Ka=function(t,e,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=ue.createElement("div"),_=zr(n)||Qi(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=_?le:n.tagName==="IFRAME"?n.contentDocument.body:n,M=t.indexOf("start")!==-1,S=M?c:u,x="border-color:"+S+";font-size:"+h+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(x+=(i===Ne?xu:Su)+":"+(a+parseFloat(f))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=x,g.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Do(g,0,i,M),g},Do=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ns]=1,s["border"+o+Ns]=0,s[n.p]=e+"px",St.set(t,s)},jt=[],Bc={},Da,ah=function(){return Je()-$n>34&&(Da||(Da=requestAnimationFrame(Pi)))},$r=function(){(!on||!on.isPressed||on.startX>le.clientWidth)&&(Qt.cache++,on?Da||(Da=requestAnimationFrame(Pi)):Pi(),$n||Vr("scrollStart"),$n=Je())},Pl=function(){$d=Jt.innerWidth,qd=Jt.innerHeight},oa=function(t){Qt.cache++,(t===!0||!Ze&&!Yd&&!ue.fullscreenElement&&!ue.webkitFullscreenElement&&(!Oc||$d!==Jt.innerWidth||Math.abs(Jt.innerHeight-qd)>Jt.innerHeight*.25))&&Xo.restart(!0)},Hr={},O_=[],np=function r(){return He(Xt,"scrollEnd",r)||Cr(!0)},Vr=function(t){return Hr[t]&&Hr[t].map(function(e){return e()})||O_},bn=[],ip=function(t){for(var e=0;e<bn.length;e+=5)(!t||bn[e+4]&&bn[e+4].query===t)&&(bn[e].style.cssText=bn[e+1],bn[e].getBBox&&bn[e].setAttribute("transform",bn[e+2]||""),bn[e+3].uncache=1)},rp=function(){return Qt.forEach(function(t){return tn(t)&&++t.cacheID&&(t.rec=t())})},Eu=function(t,e){var n;for(ln=0;ln<jt.length;ln++)n=jt[ln],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));ga=!0,e&&ip(e),e||Vr("revert")},sp=function(t,e){Qt.cache++,(e||!cn)&&Qt.forEach(function(n){return tn(n)&&n.cacheID++&&(n.rec=0)}),wn(t)&&(Jt.history.scrollRestoration=gu=t)},cn,Br=0,oh,N_=function(){if(oh!==Br){var t=oh=Br;requestAnimationFrame(function(){return t===Br&&Cr(!0)})}},ap=function(){le.appendChild(bs),vu=!on&&bs.offsetHeight||Jt.innerHeight,le.removeChild(bs)},lh=function(t){return La(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Cr=function(t,e){if(Rn=ue.documentElement,le=ue.body,_u=[Jt,ue,Rn,le],$n&&!t&&!ga){Ve(Xt,"scrollEnd",np);return}ap(),cn=Xt.isRefreshing=!0,ga||rp();var n=Vr("refreshInit");Xd&&Xt.sort(),e||Eu(),Qt.forEach(function(i){tn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),jt.slice(0).forEach(function(i){return i.refresh()}),ga=!1,jt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Fc=1,lh(!0),jt.forEach(function(i){var s=ui(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),lh(!1),Fc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Qt.forEach(function(i){tn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),sp(gu,1),Xo.pause(),Br++,cn=2,Pi(2),jt.forEach(function(i){return tn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),cn=Xt.isRefreshing=!1,Vr("refresh")},kc=0,Io=1,Ma,Pi=function(t){if(t===2||!cn&&!ga){Xt.isUpdating=!0,Ma&&Ma.update(0);var e=jt.length,n=Je(),i=n-Cl>=50,s=e&&jt[0].scroll();if(Io=kc>s?-1:1,cn||(kc=s),i&&($n&&!ol&&n-$n>200&&($n=0,Vr("scrollEnd")),ia=Cl,Cl=n),Io<0){for(ln=e;ln-- >0;)jt[ln]&&jt[ln].update(0,i);Io=1}else for(ln=0;ln<e;ln++)jt[ln]&&jt[ln].update(0,i);Xt.isUpdating=!1}Da=0},zc=[Qd,tp,Su,xu,Vn+ya,Vn+va,Vn+Sa,Vn+xa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Uo=zc.concat([Nr,Fr,"boxSizing","max"+Ns,"max"+yu,"position",Vn,De,De+Sa,De+va,De+ya,De+xa]),F_=function(t,e,n){ws(n);var i=t._gsap;if(i.spacerIsNative)ws(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Ll=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=zc.length,a=e.style,o=t.style,l;s--;)l=zc[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Su]=o[xu]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Nr]=Yo(t,un)+Oe,a[Fr]=Yo(t,Ne)+Oe,a[De]=o[Vn]=o[tp]=o[Qd]="0",ws(i),o[Nr]=o["max"+Ns]=n[Nr],o[Fr]=o["max"+yu]=n[Fr],o[De]=n[De],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},B_=/([A-Z])/g,ws=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||St.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(B_,"-$1").toLowerCase())}},Za=function(t){for(var e=Uo.length,n=t.style,i=[],s=0;s<e;s++)i.push(Uo[s],n[Uo[s]]);return i.t=t,i},k_=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},Oo={left:0,top:0},ch=function(t,e,n,i,s,a,o,l,c,u,h,f,d,g){tn(t)&&(t=t(l)),wn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Lo("0"+t.substr(3),n):0));var _=d?d.time():0,p,m,M;if(d&&d.seek(0),isNaN(t)||(t=+t),aa(t))d&&(t=St.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),o&&Do(o,n,i,!0);else{tn(e)&&(e=e(l));var S=(t||"0").split(" "),x,A,w,E;M=fn(e,l)||le,x=wi(M)||{},(!x||!x.left&&!x.top)&&Gn(M).display==="none"&&(E=M.style.display,M.style.display="block",x=wi(M),E?M.style.display=E:M.style.removeProperty("display")),A=Lo(S[0],x[i.d]),w=Lo(S[1]||"0",n),t=x[i.p]-c[i.p]-u+A+s-w,o&&Do(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(g&&(l[g]=t||-.001,t<0&&(t=0)),a){var P=t+n,y=a._isStart;p="scroll"+i.d2,Do(a,P,i,y&&P>20||!y&&(h?Math.max(le[p],Rn[p]):a.parentNode[p])<=P+1),h&&(c=wi(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Oe))}return d&&M&&(p=wi(M),d.seek(f),m=wi(M),d._caScrollDist=p[i.p]-m[i.p],t=t/d._caScrollDist*f),d&&d.seek(_),d?t:Math.round(t)},z_=/(webkit|moz|length|cssText|inset)/i,uh=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===le){t._stOrig=s.cssText,o=Gn(t);for(a in o)!+a&&!z_.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;St.core.getCache(t).uncache=1,e.appendChild(t)}},op=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Ja=function(t,e,n){var i={};i[e.p]="+="+n,St.set(t,i)},hh=function(t,e){var n=sr(t,e),i="_scroll"+e.p2,s=function a(o,l,c,u,h){var f=a.tween,d=l.onComplete,g={};c=c||n();var _=op(n,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){Qt.cache++,a.tween&&Pi()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=St.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ve(t,"wheel",n.wheelHandler),Xt.isTouch&&Ve(t,"touchmove",n.wheelHandler),s},Xt=function(){function r(e,n){fs||r.register(St)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Nc(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ra){this.update=this.refresh=this.kill=ri;return}n=rh(wn(n)||aa(n)||n.nodeType?{trigger:n}:n,ja);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,S=s.once,x=s.snap,A=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,P=s.fastScrollEnd,y=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?un:Ne,D=!h&&h!==0,U=fn(n.scroller||Jt),L=St.core.getCache(U),W=zr(U),X=("pinType"in n?n.pinType:Qi(U,"pinType")||W&&"fixed")==="fixed",j=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],H=D&&n.toggleActions.split(" "),F="markers"in n?n.markers:ja.markers,J=W?0:parseFloat(Gn(U)["border"+v.p2+Ns])||0,R=this,ot=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Lt=P_(U,W,v),Kt=L_(U,W),q=0,et=0,ut=0,nt=sr(U,v),Dt,Ct,B,Gt,yt,Et,gt,Ut,Pt,N,te,C,T,G,Z,Q,tt,mt,lt,it,It,rt,Mt,$t,_t,vt,Ot,Vt,fe,Nt,I,$,K,at,ct,Ht,re,ce,_e;if(R._startClamp=R._endClamp=!1,R._dir=v,p*=45,R.scroller=U,R.scroll=E?E.time.bind(E):nt,Gt=nt(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Xd=1,n.refreshPriority===-9999&&(Ma=R)),L.tweenScroll=L.tweenScroll||{top:hh(U,Ne),left:hh(U,un)},R.tweenTo=Dt=L.tweenScroll[v.p],R.scrubDuration=function(ht){K=aa(ht)&&ht,K?$?$.duration(ht):$=St.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return m&&m(R)}}):($&&$.progress(1).kill(),$=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(h),Nt=0,l||(l=i.vars.id)),x&&((!Er(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in le.style&&St.set(W?[le,Rn]:U,{scrollBehavior:"auto"}),Qt.forEach(function(ht){return tn(ht)&&ht.target===(W?ue.scrollingElement||Rn:U)&&(ht.smooth=!1)}),B=tn(x.snapTo)?x.snapTo:x.snapTo==="labels"?I_(i):x.snapTo==="labelsDirectional"?U_(i):x.directional!==!1?function(ht,kt){return Mu(x.snapTo)(ht,Je()-et<500?0:kt.direction)}:St.utils.snap(x.snapTo),at=x.duration||{min:.1,max:2},at=Er(at)?_a(at.min,at.max):_a(at,at),ct=St.delayedCall(x.delay||K/2||.1,function(){var ht=nt(),kt=Je()-et<500,bt=Dt.tween;if((kt||Math.abs(R.getVelocity())<10)&&!bt&&!ol&&q!==ht){var zt=(ht-Et)/G,Ee=i&&!D?i.totalProgress():zt,Zt=kt?0:(Ee-I)/(Je()-ia)*1e3||0,Se=St.utils.clamp(-zt,1-zt,qr(Zt/2)*Zt/.185),ke=zt+(x.inertia===!1?0:Se),ye,ge,b=x,O=b.onStart,k=b.onInterrupt,z=b.onComplete;if(ye=B(ke,R),aa(ye)||(ye=ke),ge=Math.max(0,Math.round(Et+ye*G)),ht<=gt&&ht>=Et&&ge!==ht){if(bt&&!bt._initted&&bt.data<=qr(ge-ht))return;x.inertia===!1&&(Se=ye-zt),Dt(ge,{duration:at(qr(Math.max(qr(ke-Ee),qr(ye-Ee))*.185/Zt/.05||0)),ease:x.ease||"power3",data:qr(ge-ht),onInterrupt:function(){return ct.restart(!0)&&k&&Yr(R,k)},onComplete:function(){R.update(),q=nt(),i&&!D&&($?$.resetTo("totalProgress",ye,i._tTime/i._tDur):i.progress(ye)),Nt=I=i&&!D?i.totalProgress():R.progress,M&&M(R),z&&Yr(R,z)}},ht,Se*G,ge-ht-Se*G),O&&Yr(R,O,Dt.tween)}}else R.isActive&&q!==ht&&ct.restart(!0)}).pause()),l&&(Bc[l]=R),f=R.trigger=fn(f||d!==!0&&d),_e=f&&f._gsap&&f._gsap.stRevert,_e&&(_e=_e(R)),d=d===!0?f:fn(d),wn(o)&&(o={targets:f,className:o}),d&&(g===!1||g===Vn||(g=!g&&d.parentNode&&d.parentNode.style&&Gn(d.parentNode).display==="flex"?!1:De),R.pin=d,Ct=St.core.getCache(d),Ct.spacer?Z=Ct.pinState:(w&&(w=fn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ct.spacerIsNative=!!w,w&&(Ct.spacerState=Za(w))),Ct.spacer=mt=w||ue.createElement("div"),mt.classList.add("pin-spacer"),l&&mt.classList.add("pin-spacer-"+l),Ct.pinState=Z=Za(d)),n.force3D!==!1&&St.set(d,{force3D:!0}),R.spacer=mt=Ct.spacer,fe=Gn(d),$t=fe[g+v.os2],it=St.getProperty(d),It=St.quickSetter(d,v.a,Oe),Ll(d,mt,fe),tt=Za(d)),F){C=Er(F)?rh(F,sh):sh,N=Ka("scroller-start",l,U,v,C,0),te=Ka("scroller-end",l,U,v,C,0,N),lt=N["offset"+v.op.d2];var ee=fn(Qi(U,"content")||U);Ut=this.markerStart=Ka("start",l,ee,v,C,lt,0,E),Pt=this.markerEnd=Ka("end",l,ee,v,C,lt,0,E),E&&(ce=St.quickSetter([Ut,Pt],v.a,Oe)),!X&&!(di.length&&Qi(U,"fixedMarkers")===!0)&&(D_(W?le:U),St.set([N,te],{force3D:!0}),vt=St.quickSetter(N,v.a,Oe),Vt=St.quickSetter(te,v.a,Oe))}if(E){var Rt=E.vars.onUpdate,xt=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),Rt&&Rt.apply(E,xt||[])})}if(R.previous=function(){return jt[jt.indexOf(R)-1]},R.next=function(){return jt[jt.indexOf(R)+1]},R.revert=function(ht,kt){if(!kt)return R.kill(!0);var bt=ht!==!1||!R.enabled,zt=Ze;bt!==R.isReverted&&(bt&&(Ht=Math.max(nt(),R.scroll.rec||0),ut=R.progress,re=i&&i.progress()),Ut&&[Ut,Pt,N,te].forEach(function(Ee){return Ee.style.display=bt?"none":"block"}),bt&&(Ze=R,R.update(bt)),d&&(!A||!R.isActive)&&(bt?F_(d,mt,Z):Ll(d,mt,Gn(d),_t)),bt||R.update(bt),Ze=zt,R.isReverted=bt)},R.refresh=function(ht,kt,bt,zt){if(!((Ze||!R.enabled)&&!kt)){if(d&&ht&&$n){Ve(r,"scrollEnd",np);return}!cn&&ot&&ot(R),Ze=R,Dt.tween&&!bt&&(Dt.tween.kill(),Dt.tween=0),$&&$.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(se){return se.vars.immediateRender&&se.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ee=Lt(),Zt=Kt(),Se=E?E.duration():ui(U,v),ke=G<=.01||!G,ye=0,ge=zt||0,b=Er(bt)?bt.end:n.end,O=n.endTrigger||f,k=Er(bt)?bt.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),z=R.pinnedContainer=n.pinnedContainer&&fn(n.pinnedContainer,R),V=f&&Math.max(0,jt.indexOf(R))||0,st=V,ft,pt,At,Bt,wt,Tt,ae,Pe,qe,nn,Wt,Ft,ni;for(F&&Er(bt)&&(Ft=St.getProperty(N,v.p),ni=St.getProperty(te,v.p));st-- >0;)Tt=jt[st],Tt.end||Tt.refresh(0,1)||(Ze=R),ae=Tt.pin,ae&&(ae===f||ae===d||ae===z)&&!Tt.isReverted&&(nn||(nn=[]),nn.unshift(Tt),Tt.revert(!0,!0)),Tt!==jt[st]&&(V--,st--);for(tn(k)&&(k=k(R)),k=th(k,"start",R),Et=ch(k,f,Ee,v,nt(),Ut,N,R,Zt,J,X,Se,E,R._startClamp&&"_startClamp")||(d?-.001:0),tn(b)&&(b=b(R)),wn(b)&&!b.indexOf("+=")&&(~b.indexOf(" ")?b=(wn(k)?k.split(" ")[0]:"")+b:(ye=Lo(b.substr(2),Ee),b=wn(k)?k:(E?St.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Et):Et)+ye,O=f)),b=th(b,"end",R),gt=Math.max(Et,ch(b||(O?"100% 0":Se),O,Ee,v,nt()+ye,Pt,te,R,Zt,J,X,Se,E,R._endClamp&&"_endClamp"))||-.001,ye=0,st=V;st--;)Tt=jt[st]||{},ae=Tt.pin,ae&&Tt.start-Tt._pinPush<=Et&&!E&&Tt.end>0&&(ft=Tt.end-(R._startClamp?Math.max(0,Tt.start):Tt.start),(ae===f&&Tt.start-Tt._pinPush<Et||ae===z)&&isNaN(k)&&(ye+=ft*(1-Tt.progress)),ae===d&&(ge+=ft));if(Et+=ye,gt+=ye,R._startClamp&&(R._startClamp+=ye),R._endClamp&&!cn&&(R._endClamp=gt||-.001,gt=Math.min(gt,ui(U,v))),G=gt-Et||(Et-=.01)&&.001,ke&&(ut=St.utils.clamp(0,1,St.utils.normalize(Et,gt,Ht))),R._pinPush=ge,Ut&&ye&&(ft={},ft[v.a]="+="+ye,z&&(ft[v.p]="-="+nt()),St.set([Ut,Pt],ft)),d&&!(Fc&&R.end>=ui(U,v)))ft=Gn(d),Bt=v===Ne,At=nt(),rt=parseFloat(it(v.a))+ge,!Se&&gt>1&&(Wt=(W?ue.scrollingElement||Rn:U).style,Wt={style:Wt,value:Wt["overflow"+v.a.toUpperCase()]},W&&Gn(le)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Wt.style["overflow"+v.a.toUpperCase()]="scroll")),Ll(d,mt,ft),tt=Za(d),pt=wi(d,!0),Pe=X&&sr(U,Bt?un:Ne)(),g?(_t=[g+v.os2,G+ge+Oe],_t.t=mt,st=g===De?Yo(d,v)+G+ge:0,st&&(_t.push(v.d,st+Oe),mt.style.flexBasis!=="auto"&&(mt.style.flexBasis=st+Oe)),ws(_t),z&&jt.forEach(function(se){se.pin===z&&se.vars.pinSpacing!==!1&&(se._subPinOffset=!0)}),X&&nt(Ht)):(st=Yo(d,v),st&&mt.style.flexBasis!=="auto"&&(mt.style.flexBasis=st+Oe)),X&&(wt={top:pt.top+(Bt?At-Et:Pe)+Oe,left:pt.left+(Bt?Pe:At-Et)+Oe,boxSizing:"border-box",position:"fixed"},wt[Nr]=wt["max"+Ns]=Math.ceil(pt.width)+Oe,wt[Fr]=wt["max"+yu]=Math.ceil(pt.height)+Oe,wt[Vn]=wt[Vn+Sa]=wt[Vn+va]=wt[Vn+ya]=wt[Vn+xa]="0",wt[De]=ft[De],wt[De+Sa]=ft[De+Sa],wt[De+va]=ft[De+va],wt[De+ya]=ft[De+ya],wt[De+xa]=ft[De+xa],Q=k_(Z,wt,A),cn&&nt(0)),i?(qe=i._initted,Al(1),i.render(i.duration(),!0,!0),Mt=it(v.a)-rt+G+ge,Ot=Math.abs(G-Mt)>1,X&&Ot&&Q.splice(Q.length-2,2),i.render(0,!0,!0),qe||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Al(0)):Mt=G,Wt&&(Wt.value?Wt.style["overflow"+v.a.toUpperCase()]=Wt.value:Wt.style.removeProperty("overflow-"+v.a));else if(f&&nt()&&!E)for(pt=f.parentNode;pt&&pt!==le;)pt._pinOffset&&(Et-=pt._pinOffset,gt-=pt._pinOffset),pt=pt.parentNode;nn&&nn.forEach(function(se){return se.revert(!1,!0)}),R.start=Et,R.end=gt,Gt=yt=cn?Ht:nt(),!E&&!cn&&(Gt<Ht&&nt(Ht),R.scroll.rec=0),R.revert(!1,!0),et=Je(),ct&&(q=-1,ct.restart(!0)),Ze=0,i&&D&&(i._initted||re)&&i.progress()!==re&&i.progress(re||0,!0).render(i.time(),!0,!0),(ke||ut!==R.progress||E||_||i&&!i._initted)&&(i&&!D&&(i._initted||ut||i.vars.immediateRender!==!1)&&i.totalProgress(E&&Et<-.001&&!ut?St.utils.normalize(Et,gt,0):ut,!0),R.progress=ke||(Gt-Et)/G===ut?0:ut),d&&g&&(mt._pinOffset=Math.round(R.progress*Mt)),$&&$.invalidate(),isNaN(Ft)||(Ft-=St.getProperty(N,v.p),ni-=St.getProperty(te,v.p),Ja(N,v,Ft),Ja(Ut,v,Ft-(zt||0)),Ja(te,v,ni),Ja(Pt,v,ni-(zt||0))),ke&&!cn&&R.update(),u&&!cn&&!T&&(T=!0,u(R),T=!1)}},R.getVelocity=function(){return(nt()-yt)/(Je()-ia)*1e3||0},R.endAnimation=function(){Ys(R.callbackAnimation),i&&($?$.progress(1):i.paused()?D||Ys(i,R.direction<0,1):Ys(i,i.reversed()))},R.labelToScroll=function(ht){return i&&i.labels&&(Et||R.refresh()||Et)+i.labels[ht]/i.duration()*G||0},R.getTrailing=function(ht){var kt=jt.indexOf(R),bt=R.direction>0?jt.slice(0,kt).reverse():jt.slice(kt+1);return(wn(ht)?bt.filter(function(zt){return zt.vars.preventOverlaps===ht}):bt).filter(function(zt){return R.direction>0?zt.end<=Et:zt.start>=gt})},R.update=function(ht,kt,bt){if(!(E&&!bt&&!ht)){var zt=cn===!0?Ht:R.scroll(),Ee=ht?0:(zt-Et)/G,Zt=Ee<0?0:Ee>1?1:Ee||0,Se=R.progress,ke,ye,ge,b,O,k,z,V;if(kt&&(yt=Gt,Gt=E?nt():zt,x&&(I=Nt,Nt=i&&!D?i.totalProgress():Zt)),p&&d&&!Ze&&!Xa&&$n&&(!Zt&&Et<zt+(zt-yt)/(Je()-ia)*p?Zt=1e-4:Zt===1&&gt>zt+(zt-yt)/(Je()-ia)*p&&(Zt=.9999)),Zt!==Se&&R.enabled){if(ke=R.isActive=!!Zt&&Zt<1,ye=!!Se&&Se<1,k=ke!==ye,O=k||!!Zt!=!!Se,R.direction=Zt>Se?1:-1,R.progress=Zt,O&&!Ze&&(ge=Zt&&!Se?0:Zt===1?1:Se===1?2:3,D&&(b=!k&&H[ge+1]!=="none"&&H[ge+1]||H[ge],V=i&&(b==="complete"||b==="reset"||b in i))),y&&(k||V)&&(V||h||!i)&&(tn(y)?y(R):R.getTrailing(y).forEach(function(At){return At.endAnimation()})),D||($&&!Ze&&!Xa?($._dp._time-$._start!==$._time&&$.render($._dp._time-$._start),$.resetTo?$.resetTo("totalProgress",Zt,i._tTime/i._tDur):($.vars.totalProgress=Zt,$.invalidate().restart())):i&&i.totalProgress(Zt,!!(Ze&&(et||ht)))),d){if(ht&&g&&(mt.style[g+v.os2]=$t),!X)It(sa(rt+Mt*Zt));else if(O){if(z=!ht&&Zt>Se&&gt+1>zt&&zt+1>=ui(U,v),A)if(!ht&&(ke||z)){var st=wi(d,!0),ft=zt-Et;uh(d,le,st.top+(v===Ne?ft:0)+Oe,st.left+(v===Ne?0:ft)+Oe)}else uh(d,mt);ws(ke||z?Q:tt),Ot&&Zt<1&&ke||It(rt+(Zt===1&&!z?Mt:0))}}x&&!Dt.tween&&!Ze&&!Xa&&ct.restart(!0),o&&(k||S&&Zt&&(Zt<1||!Rl))&&La(o.targets).forEach(function(At){return At.classList[ke||S?"add":"remove"](o.className)}),a&&!D&&!ht&&a(R),O&&!Ze?(D&&(V&&(b==="complete"?i.pause().totalProgress(1):b==="reset"?i.restart(!0).pause():b==="restart"?i.restart(!0):i[b]()),a&&a(R)),(k||!Rl)&&(c&&k&&Yr(R,c),j[ge]&&Yr(R,j[ge]),S&&(Zt===1?R.kill(!1,1):j[ge]=0),k||(ge=Zt===1?1:3,j[ge]&&Yr(R,j[ge]))),P&&!ke&&Math.abs(R.getVelocity())>(aa(P)?P:2500)&&(Ys(R.callbackAnimation),$?$.progress(1):Ys(i,b==="reverse"?1:!Zt,1))):D&&a&&!Ze&&a(R)}if(Vt){var pt=E?zt/E.duration()*(E._caScrollDist||0):zt;vt(pt+(N._isFlipped?1:0)),Vt(pt)}ce&&ce(-zt/E.duration()*(E._caScrollDist||0))}},R.enable=function(ht,kt){R.enabled||(R.enabled=!0,Ve(U,"resize",oa),W||Ve(U,"scroll",$r),ot&&Ve(r,"refreshInit",ot),ht!==!1&&(R.progress=ut=0,Gt=yt=q=nt()),kt!==!1&&R.refresh())},R.getTween=function(ht){return ht&&Dt?Dt.tween:$},R.setPositions=function(ht,kt,bt,zt){if(E){var Ee=E.scrollTrigger,Zt=E.duration(),Se=Ee.end-Ee.start;ht=Ee.start+Se*ht/Zt,kt=Ee.start+Se*kt/Zt}R.refresh(!1,!1,{start:eh(ht,bt&&!!R._startClamp),end:eh(kt,bt&&!!R._endClamp)},zt),R.update()},R.adjustPinSpacing=function(ht){if(_t&&ht){var kt=_t.indexOf(v.d)+1;_t[kt]=parseFloat(_t[kt])+ht+Oe,_t[1]=parseFloat(_t[1])+ht+Oe,ws(_t)}},R.disable=function(ht,kt){if(ht!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,kt||$&&$.pause(),Ht=0,Ct&&(Ct.uncache=1),ot&&He(r,"refreshInit",ot),ct&&(ct.pause(),Dt.tween&&Dt.tween.kill()&&(Dt.tween=0)),!W)){for(var bt=jt.length;bt--;)if(jt[bt].scroller===U&&jt[bt]!==R)return;He(U,"resize",oa),W||He(U,"scroll",$r)}},R.kill=function(ht,kt){R.disable(ht,kt),$&&!kt&&$.kill(),l&&delete Bc[l];var bt=jt.indexOf(R);bt>=0&&jt.splice(bt,1),bt===ln&&Io>0&&ln--,bt=0,jt.forEach(function(zt){return zt.scroller===R.scroller&&(bt=1)}),bt||cn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,ht&&i.revert({kill:!1}),kt||i.kill()),Ut&&[Ut,Pt,N,te].forEach(function(zt){return zt.parentNode&&zt.parentNode.removeChild(zt)}),Ma===R&&(Ma=0),d&&(Ct&&(Ct.uncache=1),bt=0,jt.forEach(function(zt){return zt.pin===d&&bt++}),bt||(Ct.spacer=0)),n.onKill&&n.onKill(R)},jt.push(R),R.enable(!1,!1),_e&&_e(R),i&&i.add&&!G){var ie=R.update;R.update=function(){R.update=ie,Qt.cache++,Et||gt||R.refresh()},St.delayedCall(.01,R.update),G=.01,Et=gt=0}else R.refresh();d&&N_()},r.register=function(n){return fs||(St=n||Kd(),jd()&&window.document&&r.enable(),fs=ra),fs},r.defaults=function(n){if(n)for(var i in n)ja[i]=n[i];return ja},r.disable=function(n,i){ra=0,jt.forEach(function(a){return a[i?"kill":"disable"](n)}),He(Jt,"wheel",$r),He(ue,"scroll",$r),clearInterval(Wa),He(ue,"touchcancel",ri),He(le,"touchstart",ri),qa(He,ue,"pointerdown,touchstart,mousedown",nh),qa(He,ue,"pointerup,touchend,mouseup",ih),Xo.kill(),Ya(He);for(var s=0;s<Qt.length;s+=3)$a(He,Qt[s],Qt[s+1]),$a(He,Qt[s],Qt[s+2])},r.enable=function(){if(Jt=window,ue=document,Rn=ue.documentElement,le=ue.body,St){if(La=St.utils.toArray,_a=St.utils.clamp,Nc=St.core.context||ri,Al=St.core.suppressOverwrites||ri,gu=Jt.history.scrollRestoration||"auto",kc=Jt.pageYOffset||0,St.core.globals("ScrollTrigger",r),le){ra=1,bs=document.createElement("div"),bs.style.height="100vh",bs.style.position="absolute",ap(),C_(),Ce.register(St),r.isTouch=Ce.isTouch,Vi=Ce.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Oc=Ce.isTouch===1,Ve(Jt,"wheel",$r),_u=[Jt,ue,Rn,le],St.matchMedia?(r.matchMedia=function(u){var h=St.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},St.addEventListener("matchMediaInit",function(){rp(),Eu()}),St.addEventListener("matchMediaRevert",function(){return ip()}),St.addEventListener("matchMedia",function(){Cr(0,1),Vr("matchMedia")}),St.matchMedia().add("(orientation: portrait)",function(){return Pl(),Pl})):console.warn("Requires GSAP 3.11.0 or later"),Pl(),Ve(ue,"scroll",$r);var n=le.hasAttribute("style"),i=le.style,s=i.borderTopStyle,a=St.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=wi(le),Ne.m=Math.round(o.top+Ne.sc())||0,un.m=Math.round(o.left+un.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(le.setAttribute("style",""),le.removeAttribute("style")),Wa=setInterval(ah,250),St.delayedCall(.5,function(){return Xa=0}),Ve(ue,"touchcancel",ri),Ve(le,"touchstart",ri),qa(Ve,ue,"pointerdown,touchstart,mousedown",nh),qa(Ve,ue,"pointerup,touchend,mouseup",ih),Uc=St.utils.checkPrefix("transform"),Uo.push(Uc),fs=Je(),Xo=St.delayedCall(.2,Cr).pause(),ds=[ue,"visibilitychange",function(){var u=Jt.innerWidth,h=Jt.innerHeight;ue.hidden?(Ju=u,Qu=h):(Ju!==u||Qu!==h)&&oa()},ue,"DOMContentLoaded",Cr,Jt,"load",Cr,Jt,"resize",oa],Ya(Ve),jt.forEach(function(u){return u.enable(0,1)}),l=0;l<Qt.length;l+=3)$a(He,Qt[l],Qt[l+1]),$a(He,Qt[l],Qt[l+2])}else if(ue){var c=function u(){r.enable(),ue.removeEventListener("DOMContentLoaded",u)};ue.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Rl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Wa)||(Wa=i)&&setInterval(ah,i),"ignoreMobileResize"in n&&(Oc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ya(He)||Ya(Ve,n.autoRefreshEvents||"none"),Yd=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=fn(n),a=Qt.indexOf(s),o=zr(s);~a&&Qt.splice(a,o?6:2),i&&(o?di.unshift(Jt,i,le,i,Rn,i):di.unshift(s,i))},r.clearMatchMedia=function(n){jt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(wn(n)?fn(n):n).getBoundingClientRect(),o=a[s?Nr:Fr]*i||0;return s?a.right-o>0&&a.left+o<Jt.innerWidth:a.bottom-o>0&&a.top+o<Jt.innerHeight},r.positionInViewport=function(n,i,s){wn(n)&&(n=fn(n));var a=n.getBoundingClientRect(),o=a[s?Nr:Fr],l=i==null?o/2:i in qo?qo[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/Jt.innerWidth:(a.top+l)/Jt.innerHeight},r.killAll=function(n){if(jt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Hr.killAll||[];Hr={},i.forEach(function(s){return s()})}},r}();Xt.version="3.15.0";Xt.saveStyles=function(r){return r?La(r).forEach(function(t){if(t&&t.style){var e=bn.indexOf(t);e>=0&&bn.splice(e,5),bn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),St.core.getCache(t),Nc())}}):bn};Xt.revert=function(r,t){return Eu(!r,t)};Xt.create=function(r,t){return new Xt(r,t)};Xt.refresh=function(r){return r?oa(!0):(fs||Xt.register())&&Cr(!0)};Xt.update=function(r){return++Qt.cache&&Pi(r===!0?2:0)};Xt.clearScrollMemory=sp;Xt.maxScroll=function(r,t){return ui(r,t?un:Ne)};Xt.getScrollFunc=function(r,t){return sr(fn(r),t?un:Ne)};Xt.getById=function(r){return Bc[r]};Xt.getAll=function(){return jt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Xt.isScrolling=function(){return!!$n};Xt.snapDirectional=Mu;Xt.addEventListener=function(r,t){var e=Hr[r]||(Hr[r]=[]);~e.indexOf(t)||e.push(t)};Xt.removeEventListener=function(r,t){var e=Hr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Xt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,u){var h=[],f=[],d=St.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&tn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return tn(s)&&(s=s(),Ve(Xt,"refresh",function(){return s=t.batchMax()})),La(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(Xt.create(c))}),e};var fh=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Dl=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ce.isTouch?" pinch-zoom":""):"none",t===Rn&&r(le,e)},Qa={auto:1,scroll:1},H_=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||St.core.getCache(s),o=Je(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==le&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Qa[(l=Gn(s)).overflowY]||Qa[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!zr(s)&&(Qa[(l=Gn(s)).overflowY]||Qa[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},lp=function(t,e,n,i){return Ce.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&H_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ve(ue,Ce.eventTypes[0],ph,!1,!0)},onDisable:function(){return He(ue,Ce.eventTypes[0],ph,!0)}})},V_=/(input|label|select|textarea)/i,dh,ph=function(t){var e=V_.test(t.target.tagName);(e||dh)&&(t._gsapAllow=!0,dh=e)},G_=function(t){Er(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=fn(t.target)||Rn,u=St.core.globals().ScrollSmoother,h=u&&u.get(),f=Vi&&(t.content&&fn(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),d=sr(c,Ne),g=sr(c,un),_=1,p=(Ce.isTouch&&Jt.visualViewport?Jt.visualViewport.scale*Jt.visualViewport.width:Jt.outerWidth)/Jt.innerWidth,m=0,M=tn(i)?function(){return i(o)}:function(){return i||2.8},S,x,A=lp(c,t.type,!0,s),w=function(){return x=!1},E=ri,P=ri,y=function(){l=ui(c,Ne),P=_a(Vi?1:0,l),n&&(E=_a(0,ui(c,un))),S=Br},v=function(){f._gsap.y=sa(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(x){requestAnimationFrame(w);var F=sa(o.deltaY/2),J=P(d.v-F);if(f&&J!==d.v+d.offset){d.offset=J-d.v;var R=sa((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",d.cacheID=Qt.cache,Pi()}return!0}d.offset&&v(),x=!0},U,L,W,X,j=function(){y(),U.isActive()&&U.vars.scrollY>l&&(d()>l?U.progress(1)&&d(l):U.resetTo("scrollY",l))};return f&&St.set(f,{y:"+=0"}),t.ignoreCheck=function(H){return Vi&&H.type==="touchmove"&&D()||_>1.05&&H.type!=="touchstart"||o.isGesturing||H.touches&&H.touches.length>1},t.onPress=function(){x=!1;var H=_;_=sa((Jt.visualViewport&&Jt.visualViewport.scale||1)/p),U.pause(),H!==_&&Dl(c,_>1.01?!0:n?!1:"x"),L=g(),W=d(),y(),S=Br},t.onRelease=t.onGestureStart=function(H,F){if(d.offset&&v(),!F)X.restart(!0);else{Qt.cache++;var J=M(),R,ot;n&&(R=g(),ot=R+J*.05*-H.velocityX/.227,J*=fh(g,R,ot,ui(c,un)),U.vars.scrollX=E(ot)),R=d(),ot=R+J*.05*-H.velocityY/.227,J*=fh(d,R,ot,ui(c,Ne)),U.vars.scrollY=P(ot),U.invalidate().duration(J).play(.01),(Vi&&U.vars.scrollY>=l||R>=l-1)&&St.to({},{onUpdate:j,duration:J})}a&&a(H)},t.onWheel=function(){U._ts&&U.pause(),Je()-m>1e3&&(S=0,m=Je())},t.onChange=function(H,F,J,R,ot){if(Br!==S&&y(),F&&n&&g(E(R[2]===F?L+(H.startX-H.x):g()+F-R[1])),J){d.offset&&v();var Lt=ot[2]===J,Kt=Lt?W+H.startY-H.y:d()+J-ot[1],q=P(Kt);Lt&&Kt!==q&&(W+=q-Kt),d(q)}(J||F)&&Pi()},t.onEnable=function(){Dl(c,n?!1:"x"),Xt.addEventListener("refresh",j),Ve(Jt,"resize",j),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),A.enable()},t.onDisable=function(){Dl(c,!0),He(Jt,"resize",j),Xt.removeEventListener("refresh",j),A.kill()},t.lockAxis=t.lockAxis!==!1,o=new Ce(t),o.iOS=Vi,Vi&&!d()&&d(1),Vi&&St.ticker.add(ri),X=o._dc,U=St.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:op(d,d(),function(){return U.pause()})},onUpdate:Pi,onComplete:X.vars.onComplete}),o};Xt.sort=function(r){if(tn(r))return jt.sort(r);var t=Jt.pageYOffset||0;return Xt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Jt.innerHeight}),jt.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Xt.observe=function(r){return new Ce(r)};Xt.normalizeScroll=function(r){if(typeof r>"u")return on;if(r===!0&&on)return on.enable();if(r===!1){on&&on.kill(),on=r;return}var t=r instanceof Ce?r:G_(r);return on&&on.target===t.target&&on.kill(),zr(t.target)&&(on=t),t};Xt.core={_getVelocityProp:Ic,_inputObserver:lp,_scrollers:Qt,_proxies:di,bridge:{ss:function(){$n||Vr("scrollStart"),$n=Je()},ref:function(){return Ze}}};Kd()&&St.registerPlugin(Xt);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tu="164",W_=0,mh=1,X_=2,cp=1,Y_=2,Ei=3,ar=0,xn=1,Ai=2,tr=0,As=1,_h=2,gh=3,vh=4,q_=5,wr=100,$_=101,j_=102,K_=103,Z_=104,J_=200,Q_=201,tg=202,eg=203,Hc=204,Vc=205,ng=206,ig=207,rg=208,sg=209,ag=210,og=211,lg=212,cg=213,ug=214,hg=0,fg=1,dg=2,$o=3,pg=4,mg=5,_g=6,gg=7,up=0,vg=1,xg=2,er=0,Sg=1,yg=2,Mg=3,Eg=4,Tg=5,bg=6,wg=7,hp=300,Fs=301,Bs=302,Gc=303,Wc=304,ll=306,Xc=1e3,Pr=1001,Yc=1002,qn=1003,Ag=1004,to=1005,Qn=1006,Il=1007,Lr=1008,or=1009,Rg=1010,Cg=1011,fp=1012,dp=1013,ks=1014,Ki=1015,cl=1016,pp=1017,mp=1018,Oa=1020,Pg=35902,Lg=1021,Dg=1022,hi=1023,Ig=1024,Ug=1025,Rs=1026,Ia=1027,Og=1028,_p=1029,Ng=1030,gp=1031,vp=1033,Ul=33776,Ol=33777,Nl=33778,Fl=33779,xh=35840,Sh=35841,yh=35842,Mh=35843,Eh=36196,Th=37492,bh=37496,wh=37808,Ah=37809,Rh=37810,Ch=37811,Ph=37812,Lh=37813,Dh=37814,Ih=37815,Uh=37816,Oh=37817,Nh=37818,Fh=37819,Bh=37820,kh=37821,Bl=36492,zh=36494,Hh=36495,Fg=36283,Vh=36284,Gh=36285,Wh=36286,Bg=3200,kg=3201,zg=0,Hg=1,Gi="",si="srgb",hr="srgb-linear",bu="display-p3",ul="display-p3-linear",jo="linear",xe="srgb",Ko="rec709",Zo="p3",jr=7680,Xh=519,Vg=512,Gg=513,Wg=514,xp=515,Xg=516,Yg=517,qg=518,$g=519,Yh=35044,qh="300 es",Ci=2e3,Jo=2001;class Hs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kl=Math.PI/180,qc=180/Math.PI;function Na(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[r&255]+je[r>>8&255]+je[r>>16&255]+je[r>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function dn(r,t,e){return Math.max(t,Math.min(e,r))}function jg(r,t){return(r%t+t)%t}function zl(r,t,e){return(1-e)*r+e*t}function qs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class oe{constructor(t=0,e=0){oe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(dn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,i,s,a,o,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],M=i[1],S=i[4],x=i[7],A=i[2],w=i[5],E=i[8];return s[0]=a*_+o*M+l*A,s[3]=a*p+o*S+l*w,s[6]=a*m+o*x+l*E,s[1]=c*_+u*M+h*A,s[4]=c*p+u*S+h*w,s[7]=c*m+u*x+h*E,s[2]=f*_+d*M+g*A,s[5]=f*p+d*S+g*w,s[8]=f*m+d*x+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,g=e*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Hl.makeScale(t,e)),this}rotate(t){return this.premultiply(Hl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hl=new qt;function Sp(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Qo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Kg(){const r=Qo("canvas");return r.style.display="block",r}const $h={};function Zg(r){r in $h||($h[r]=!0,console.warn(r))}const jh=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kh=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),eo={[hr]:{transfer:jo,primaries:Ko,toReference:r=>r,fromReference:r=>r},[si]:{transfer:xe,primaries:Ko,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ul]:{transfer:jo,primaries:Zo,toReference:r=>r.applyMatrix3(Kh),fromReference:r=>r.applyMatrix3(jh)},[bu]:{transfer:xe,primaries:Zo,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Kh),fromReference:r=>r.applyMatrix3(jh).convertLinearToSRGB()}},Jg=new Set([hr,ul]),de={enabled:!0,_workingColorSpace:hr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Jg.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=eo[t].toReference,i=eo[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return eo[r].primaries},getTransfer:function(r){return r===Gi?jo:eo[r].transfer}};function Cs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Kr;class Qg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Kr===void 0&&(Kr=Qo("canvas")),Kr.width=t.width,Kr.height=t.height;const n=Kr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Kr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Cs(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cs(e[n]/255)*255):e[n]=Cs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let t0=0;class yp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Na(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Gl(i[a].image)):s.push(Gl(i[a]))}else s=Gl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Gl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Qg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let e0=0;class Sn extends Hs{constructor(t=Sn.DEFAULT_IMAGE,e=Sn.DEFAULT_MAPPING,n=Pr,i=Pr,s=Qn,a=Lr,o=hi,l=or,c=Sn.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Na(),this.name="",this.source=new yp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xc:t.x=t.x-Math.floor(t.x);break;case Pr:t.x=t.x<0?0:1;break;case Yc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xc:t.y=t.y-Math.floor(t.y);break;case Pr:t.y=t.y<0?0:1;break;case Yc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=hp;Sn.DEFAULT_ANISOTROPY=1;class Xe{constructor(t=0,e=0,n=0,i=1){Xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,x=(d+1)/2,A=(m+1)/2,w=(u+f)/4,E=(h+_)/4,P=(g+p)/4;return S>x&&S>A?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=w/n,s=E/n):x>A?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=w/i,s=P/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=E/s,i=P/s),this.set(n,i,s,e),this}let M=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n0 extends Hs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Xe(0,0,t,e),this.scissorTest=!1,this.viewport=new Xe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Sn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new yp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gr extends n0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mp extends Sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qn,this.minFilter=qn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class i0 extends Sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qn,this.minFilter=qn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fa{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let p=1-o;const m=l*f+c*d+u*g+h*_,M=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const A=Math.sqrt(S),w=Math.atan2(A,m*M);p=Math.sin(p*w)/A,o=Math.sin(o*w)/A}const x=o*M;if(l=l*p+f*x,c=c*p+d*x,u=u*p+g*x,h=h*p+_*x,p===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-o*d,t[e+2]=c*g+u*d+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(dn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,e=0,n=0){Y.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wl.copy(this).projectOnVector(t),this.sub(Wl)}reflect(t){return this.sub(Wl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(dn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wl=new Y,Zh=new Fa;class Ba{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,jn):jn.fromBufferAttribute(s,a),jn.applyMatrix4(t.matrixWorld),this.expandByPoint(jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),no.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),no.copy(n.boundingBox)),no.applyMatrix4(t.matrixWorld),this.union(no)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),io.subVectors(this.max,$s),Zr.subVectors(t.a,$s),Jr.subVectors(t.b,$s),Qr.subVectors(t.c,$s),Ni.subVectors(Jr,Zr),Fi.subVectors(Qr,Jr),mr.subVectors(Zr,Qr);let e=[0,-Ni.z,Ni.y,0,-Fi.z,Fi.y,0,-mr.z,mr.y,Ni.z,0,-Ni.x,Fi.z,0,-Fi.x,mr.z,0,-mr.x,-Ni.y,Ni.x,0,-Fi.y,Fi.x,0,-mr.y,mr.x,0];return!Xl(e,Zr,Jr,Qr,io)||(e=[1,0,0,0,1,0,0,0,1],!Xl(e,Zr,Jr,Qr,io))?!1:(ro.crossVectors(Ni,Fi),e=[ro.x,ro.y,ro.z],Xl(e,Zr,Jr,Qr,io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],jn=new Y,no=new Ba,Zr=new Y,Jr=new Y,Qr=new Y,Ni=new Y,Fi=new Y,mr=new Y,$s=new Y,io=new Y,ro=new Y,_r=new Y;function Xl(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){_r.fromArray(r,s);const o=i.x*Math.abs(_r.x)+i.y*Math.abs(_r.y)+i.z*Math.abs(_r.z),l=t.dot(_r),c=e.dot(_r),u=n.dot(_r);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const r0=new Ba,js=new Y,Yl=new Y;class hl{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):r0.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);const e=js.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(js,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(Yl)),this.expandByPoint(js.copy(t.center).sub(Yl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new Y,ql=new Y,so=new Y,Bi=new Y,$l=new Y,ao=new Y,jl=new Y;class Ep{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ql.copy(t).add(e).multiplyScalar(.5),so.copy(e).sub(t).normalize(),Bi.copy(this.origin).sub(ql);const s=t.distanceTo(e)*.5,a=-this.direction.dot(so),o=Bi.dot(this.direction),l=-Bi.dot(so),c=Bi.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ql).addScaledVector(so,f),d}intersectSphere(t,e){vi.subVectors(t.center,this.origin);const n=vi.dot(this.direction),i=vi.dot(vi)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,i,s){$l.subVectors(e,t),ao.subVectors(n,t),jl.crossVectors($l,ao);let a=this.direction.dot(jl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bi.subVectors(this.origin,t);const l=o*this.direction.dot(ao.crossVectors(Bi,ao));if(l<0)return null;const c=o*this.direction.dot($l.cross(Bi));if(c<0||l+c>a)return null;const u=-o*Bi.dot(jl);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(t,e,n,i,s,a,o,l,c,u,h,f,d,g,_,p){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,h,f,d,g,_,p)}set(t,e,n,i,s,a,o,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ts.setFromMatrixColumn(t,0).length(),s=1/ts.setFromMatrixColumn(t,1).length(),a=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(s0,t,a0)}lookAt(t,e,n){const i=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),ki.crossVectors(n,En),ki.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),ki.crossVectors(n,En)),ki.normalize(),oo.crossVectors(En,ki),i[0]=ki.x,i[4]=oo.x,i[8]=En.x,i[1]=ki.y,i[5]=oo.y,i[9]=En.y,i[2]=ki.z,i[6]=oo.z,i[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],S=n[7],x=n[11],A=n[15],w=i[0],E=i[4],P=i[8],y=i[12],v=i[1],D=i[5],U=i[9],L=i[13],W=i[2],X=i[6],j=i[10],H=i[14],F=i[3],J=i[7],R=i[11],ot=i[15];return s[0]=a*w+o*v+l*W+c*F,s[4]=a*E+o*D+l*X+c*J,s[8]=a*P+o*U+l*j+c*R,s[12]=a*y+o*L+l*H+c*ot,s[1]=u*w+h*v+f*W+d*F,s[5]=u*E+h*D+f*X+d*J,s[9]=u*P+h*U+f*j+d*R,s[13]=u*y+h*L+f*H+d*ot,s[2]=g*w+_*v+p*W+m*F,s[6]=g*E+_*D+p*X+m*J,s[10]=g*P+_*U+p*j+m*R,s[14]=g*y+_*L+p*H+m*ot,s[3]=M*w+S*v+x*W+A*F,s[7]=M*E+S*D+x*X+A*J,s[11]=M*P+S*U+x*j+A*R,s[15]=M*y+S*L+x*H+A*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*d-n*l*d)+_*(+e*l*d-e*c*f+s*a*f-i*a*d+i*c*u-s*l*u)+p*(+e*c*h-e*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+m*(-i*o*u-e*l*h+e*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],M=h*p*c-_*f*c+_*l*d-o*p*d-h*l*m+o*f*m,S=g*f*c-u*p*c-g*l*d+a*p*d+u*l*m-a*f*m,x=u*_*c-g*h*c+g*o*d-a*_*d-u*o*m+a*h*m,A=g*h*l-u*_*l-g*o*f+a*_*f+u*o*p-a*h*p,w=e*M+n*S+i*x+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=M*E,t[1]=(_*f*s-h*p*s-_*i*d+n*p*d+h*i*m-n*f*m)*E,t[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*m+n*l*m)*E,t[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*d-n*l*d)*E,t[4]=S*E,t[5]=(u*p*s-g*f*s+g*i*d-e*p*d-u*i*m+e*f*m)*E,t[6]=(g*l*s-a*p*s-g*i*c+e*p*c+a*i*m-e*l*m)*E,t[7]=(a*f*s-u*l*s+u*i*c-e*f*c-a*i*d+e*l*d)*E,t[8]=x*E,t[9]=(g*h*s-u*_*s-g*n*d+e*_*d+u*n*m-e*h*m)*E,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*m+e*o*m)*E,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*d-e*o*d)*E,t[12]=A*E,t[13]=(u*_*i-g*h*i+g*n*f-e*_*f-u*n*p+e*h*p)*E,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*p-e*o*p)*E,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*f+e*o*f)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,g=s*h,_=a*u,p=a*h,m=o*h,M=l*c,S=l*u,x=l*h,A=n.x,w=n.y,E=n.z;return i[0]=(1-(_+m))*A,i[1]=(d+x)*A,i[2]=(g-S)*A,i[3]=0,i[4]=(d-x)*w,i[5]=(1-(f+m))*w,i[6]=(p+M)*w,i[7]=0,i[8]=(g+S)*E,i[9]=(p-M)*E,i[10]=(1-(f+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ts.set(i[0],i[1],i[2]).length();const a=ts.set(i[4],i[5],i[6]).length(),o=ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Kn.copy(this);const c=1/s,u=1/a,h=1/o;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=h,Kn.elements[9]*=h,Kn.elements[10]*=h,e.setFromRotationMatrix(Kn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Ci){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(o===Ci)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Jo)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Ci){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(a-s),f=(e+t)*c,d=(n+i)*u;let g,_;if(o===Ci)g=(a+s)*h,_=-2*h;else if(o===Jo)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ts=new Y,Kn=new Ue,s0=new Y(0,0,0),a0=new Y(1,1,1),ki=new Y,oo=new Y,En=new Y,Jh=new Ue,Qh=new Fa;class Ui{constructor(t=0,e=0,n=0,i=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Tp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let o0=0;const tf=new Y,es=new Fa,xi=new Ue,lo=new Y,Ks=new Y,l0=new Y,c0=new Fa,ef=new Y(1,0,0),nf=new Y(0,1,0),rf=new Y(0,0,1),sf={type:"added"},u0={type:"removed"},ns={type:"childadded",child:null},Kl={type:"childremoved",child:null};class yn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const t=new Y,e=new Ui,n=new Fa,i=new Y(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new qt}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(ef,t)}rotateY(t){return this.rotateOnAxis(nf,t)}rotateZ(t){return this.rotateOnAxis(rf,t)}translateOnAxis(t,e){return tf.copy(t).applyQuaternion(this.quaternion),this.position.add(tf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ef,t)}translateY(t){return this.translateOnAxis(nf,t)}translateZ(t){return this.translateOnAxis(rf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lo.copy(t):lo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Ks,lo,this.up):xi.lookAt(lo,Ks,this.up),this.quaternion.setFromRotationMatrix(xi),i&&(xi.extractRotation(i.matrixWorld),es.setFromRotationMatrix(xi),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sf),ns.child=t,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(u0),Kl.child=t,this.dispatchEvent(Kl),Kl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sf),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,l0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,c0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}yn.DEFAULT_UP=new Y(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new Y,Si=new Y,Zl=new Y,yi=new Y,is=new Y,rs=new Y,af=new Y,Jl=new Y,Ql=new Y,tc=new Y;class li{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Zn.subVectors(t,e),i.cross(Zn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Zn.subVectors(i,e),Si.subVectors(n,e),Zl.subVectors(t,e);const a=Zn.dot(Zn),o=Zn.dot(Si),l=Zn.dot(Zl),c=Si.dot(Si),u=Si.dot(Zl),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static isFrontFacing(t,e,n,i){return Zn.subVectors(n,e),Si.subVectors(t,e),Zn.cross(Si).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Zn.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return li.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return li.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;is.subVectors(i,n),rs.subVectors(s,n),Jl.subVectors(t,n);const l=is.dot(Jl),c=rs.dot(Jl);if(l<=0&&c<=0)return e.copy(n);Ql.subVectors(t,i);const u=is.dot(Ql),h=rs.dot(Ql);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(is,a);tc.subVectors(t,s);const d=is.dot(tc),g=rs.dot(tc);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(rs,o);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return af.subVectors(s,i),o=(h-u)/(h-u+(d-g)),e.copy(i).addScaledVector(af,o);const m=1/(p+_+f);return a=_*m,o=f*m,e.copy(n).addScaledVector(is,a).addScaledVector(rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},co={h:0,s:0,l:0};function ec(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class he{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=de.workingColorSpace){if(t=jg(t,1),e=dn(e,0,1),n=dn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ec(a,s,t+1/3),this.g=ec(a,s,t),this.b=ec(a,s,t-1/3)}return de.toWorkingColorSpace(this,i),this}setStyle(t,e=si){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=si){const n=bp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}copyLinearToSRGB(t){return this.r=Vl(t.r),this.g=Vl(t.g),this.b=Vl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return de.fromWorkingColorSpace(Ke.copy(this),t),Math.round(dn(Ke.r*255,0,255))*65536+Math.round(dn(Ke.g*255,0,255))*256+Math.round(dn(Ke.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(Ke.copy(this),e);const n=Ke.r,i=Ke.g,s=Ke.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=si){de.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,i=Ke.b;return t!==si?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(co);const n=zl(zi.h,co.h,e),i=zl(zi.s,co.s,e),s=zl(zi.l,co.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new he;he.NAMES=bp;let h0=0;class ka extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Na(),this.name="",this.type="Material",this.blending=As,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hc,this.blendDst=Vc,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=$o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==ar&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hc&&(n.blendSrc=this.blendSrc),this.blendDst!==Vc&&(n.blendDst=this.blendDst),this.blendEquation!==wr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$o&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wu extends ka{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new Y,uo=new oe;class pi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Zg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)uo.fromBufferAttribute(this,e),uo.applyMatrix3(t),this.setXY(e,uo.x,uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),i=hn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yh&&(t.usage=this.usage),t}}class wp extends pi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ap extends pi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ti extends pi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let f0=0;const kn=new Ue,nc=new yn,ss=new Y,Tn=new Ba,Zs=new Ba,ze=new Y;class _i extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Na(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sp(t)?Ap:wp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,n){return kn.makeTranslation(t,e,n),this.applyMatrix4(kn),this}scale(t,e,n){return kn.makeScale(t,e,n),this.applyMatrix4(kn),this}lookAt(t){return nc.lookAt(t),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ti(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ba);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(Tn.min,Zs.min),Tn.expandByPoint(ze),ze.addVectors(Tn.max,Zs.max),Tn.expandByPoint(ze)):(Tn.expandByPoint(Zs.min),Tn.expandByPoint(Zs.max))}Tn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)ze.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ze));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ze.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(t,c),ze.add(ss)),i=Math.max(i,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new Y,l[P]=new Y;const c=new Y,u=new Y,h=new Y,f=new oe,d=new oe,g=new oe,_=new Y,p=new Y;function m(P,y,v){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,v),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,v),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),o[P].add(_),o[y].add(_),o[v].add(_),l[P].add(p),l[y].add(p),l[v].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,y=M.length;P<y;++P){const v=M[P],D=v.start,U=v.count;for(let L=D,W=D+U;L<W;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const S=new Y,x=new Y,A=new Y,w=new Y;function E(P){A.fromBufferAttribute(i,P),w.copy(A);const y=o[P];S.copy(y),S.sub(A.multiplyScalar(A.dot(y))).normalize(),x.crossVectors(w,y);const D=x.dot(l[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,D)}for(let P=0,y=M.length;P<y;++P){const v=M[P],D=v.start,U=v.count;for(let L=D,W=D+U;L<W;L+=3)E(t.getX(L+0)),E(t.getX(L+1)),E(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new Y,s=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,h=new Y;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new pi(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _i,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const of=new Ue,gr=new Ep,ho=new hl,lf=new Y,as=new Y,os=new Y,ls=new Y,ic=new Y,fo=new Y,po=new oe,mo=new oe,_o=new oe,cf=new Y,uf=new Y,hf=new Y,go=new Y,vo=new Y;class fi extends yn{constructor(t=new _i,e=new wu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(ic.fromBufferAttribute(h,t),a?fo.addScaledVector(ic,u):fo.addScaledVector(ic.sub(e),u))}e.add(fo)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(s),gr.copy(t.ray).recast(t.near),!(ho.containsPoint(gr.origin)===!1&&(gr.intersectSphere(ho,lf)===null||gr.origin.distanceToSquared(lf)>(t.far-t.near)**2))&&(of.copy(s).invert(),gr.copy(t.ray).applyMatrix4(of),!(n.boundingBox!==null&&gr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],M=Math.max(p.start,d.start),S=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let x=M,A=S;x<A;x+=3){const w=o.getX(x),E=o.getX(x+1),P=o.getX(x+2);i=xo(this,m,t,n,c,u,h,w,E,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const M=o.getX(p),S=o.getX(p+1),x=o.getX(p+2);i=xo(this,a,t,n,c,u,h,M,S,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],M=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=M,A=S;x<A;x+=3){const w=x,E=x+1,P=x+2;i=xo(this,m,t,n,c,u,h,w,E,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const M=p,S=p+1,x=p+2;i=xo(this,a,t,n,c,u,h,M,S,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function d0(r,t,e,n,i,s,a,o){let l;if(t.side===xn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===ar,o),l===null)return null;vo.copy(o),vo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(vo);return c<e.near||c>e.far?null:{distance:c,point:vo.clone(),object:r}}function xo(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,as),r.getVertexPosition(l,os),r.getVertexPosition(c,ls);const u=d0(r,t,e,n,as,os,ls,go);if(u){i&&(po.fromBufferAttribute(i,o),mo.fromBufferAttribute(i,l),_o.fromBufferAttribute(i,c),u.uv=li.getInterpolation(go,as,os,ls,po,mo,_o,new oe)),s&&(po.fromBufferAttribute(s,o),mo.fromBufferAttribute(s,l),_o.fromBufferAttribute(s,c),u.uv1=li.getInterpolation(go,as,os,ls,po,mo,_o,new oe)),a&&(cf.fromBufferAttribute(a,o),uf.fromBufferAttribute(a,l),hf.fromBufferAttribute(a,c),u.normal=li.getInterpolation(go,as,os,ls,cf,uf,hf,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new Y,materialIndex:0};li.getNormal(as,os,ls,h.normal),u.face=h}return u}class za extends _i{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ti(c,3)),this.setAttribute("normal",new ti(u,3)),this.setAttribute("uv",new ti(h,2));function g(_,p,m,M,S,x,A,w,E,P,y){const v=x/E,D=A/P,U=x/2,L=A/2,W=w/2,X=E+1,j=P+1;let H=0,F=0;const J=new Y;for(let R=0;R<j;R++){const ot=R*D-L;for(let Lt=0;Lt<X;Lt++){const Kt=Lt*v-U;J[_]=Kt*M,J[p]=ot*S,J[m]=W,c.push(J.x,J.y,J.z),J[_]=0,J[p]=0,J[m]=w>0?1:-1,u.push(J.x,J.y,J.z),h.push(Lt/E),h.push(1-R/P),H+=1}}for(let R=0;R<P;R++)for(let ot=0;ot<E;ot++){const Lt=f+ot+X*R,Kt=f+ot+X*(R+1),q=f+(ot+1)+X*(R+1),et=f+(ot+1)+X*R;l.push(Lt,Kt,et),l.push(Kt,q,et),F+=6}o.addGroup(d,F,y),d+=F,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function an(r){const t={};for(let e=0;e<r.length;e++){const n=zs(r[e]);for(const i in n)t[i]=n[i]}return t}function p0(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Rp(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const m0={clone:zs,merge:an};var _0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends ka{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_0,this.fragmentShader=g0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=p0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Cp extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new Y,ff=new oe,df=new oe;class Wn extends Cp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qc*2*Math.atan(Math.tan(kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,ff,df),e.subVectors(df,ff)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(kl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const cs=-90,us=1;class v0 extends yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wn(cs,us,t,e);i.layers=this.layers,this.add(i);const s=new Wn(cs,us,t,e);s.layers=this.layers,this.add(s);const a=new Wn(cs,us,t,e);a.layers=this.layers,this.add(a);const o=new Wn(cs,us,t,e);o.layers=this.layers,this.add(o);const l=new Wn(cs,us,t,e);l.layers=this.layers,this.add(l);const c=new Wn(cs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Pp extends Sn{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Fs,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class x0 extends Gr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Pp(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new za(5,5,5),s=new lr({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:tr});s.uniforms.tEquirect.value=e;const a=new fi(i,s),o=e.minFilter;return e.minFilter===Lr&&(e.minFilter=Qn),new v0(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const rc=new Y,S0=new Y,y0=new qt;class Tr{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=rc.subVectors(n,e).cross(S0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(rc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||y0.getNormalMatrix(t),i=this.coplanarPoint(rc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new hl,So=new Y;class Lp{constructor(t=new Tr,e=new Tr,n=new Tr,i=new Tr,s=new Tr,a=new Tr){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ci){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],M=i[13],S=i[14],x=i[15];if(n[0].setComponents(l-s,f-c,p-d,x-m).normalize(),n[1].setComponents(l+s,f+c,p+d,x+m).normalize(),n[2].setComponents(l+a,f+u,p+g,x+M).normalize(),n[3].setComponents(l-a,f-u,p-g,x-M).normalize(),n[4].setComponents(l-o,f-h,p-_,x-S).normalize(),e===Ci)n[5].setComponents(l+o,f+h,p+_,x+S).normalize();else if(e===Jo)n[5].setComponents(o,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(t){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(So.x=i.normal.x>0?t.max.x:t.min.x,So.y=i.normal.y>0?t.max.y:t.min.y,So.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(So)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dp(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function M0(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(r.bindBuffer(c,o),h.count===-1&&f.length===0&&r.bufferSubData(c,0,u),f.length!==0){for(let d=0,g=f.length;d<g;d++){const _=f[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(r.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class fl extends _i{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,f=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const M=m*f-a;for(let S=0;S<c;S++){const x=S*h-s;g.push(x,-M,0),_.push(0,0,1),p.push(S/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const S=M+c*m,x=M+c*(m+1),A=M+1+c*(m+1),w=M+1+c*m;d.push(S,x,w),d.push(x,A,w)}this.setIndex(d),this.setAttribute("position",new ti(g,3)),this.setAttribute("normal",new ti(_,3)),this.setAttribute("uv",new ti(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.width,t.height,t.widthSegments,t.heightSegments)}}var E0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,b0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,R0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,D0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,I0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,N0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Y0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,q0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",tv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ev=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,av=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ov=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_v=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ev=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ov=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Bv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,kv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$v=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ix=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ox=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_x=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ex=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Px=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ix=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:E0,alphahash_pars_fragment:T0,alphamap_fragment:b0,alphamap_pars_fragment:w0,alphatest_fragment:A0,alphatest_pars_fragment:R0,aomap_fragment:C0,aomap_pars_fragment:P0,batching_pars_vertex:L0,batching_vertex:D0,begin_vertex:I0,beginnormal_vertex:U0,bsdfs:O0,iridescence_fragment:N0,bumpmap_pars_fragment:F0,clipping_planes_fragment:B0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:H0,color_fragment:V0,color_pars_fragment:G0,color_pars_vertex:W0,color_vertex:X0,common:Y0,cube_uv_reflection_fragment:q0,defaultnormal_vertex:$0,displacementmap_pars_vertex:j0,displacementmap_vertex:K0,emissivemap_fragment:Z0,emissivemap_pars_fragment:J0,colorspace_fragment:Q0,colorspace_pars_fragment:tv,envmap_fragment:ev,envmap_common_pars_fragment:nv,envmap_pars_fragment:iv,envmap_pars_vertex:rv,envmap_physical_pars_fragment:mv,envmap_vertex:sv,fog_vertex:av,fog_pars_vertex:ov,fog_fragment:lv,fog_pars_fragment:cv,gradientmap_pars_fragment:uv,lightmap_pars_fragment:hv,lights_lambert_fragment:fv,lights_lambert_pars_fragment:dv,lights_pars_begin:pv,lights_toon_fragment:_v,lights_toon_pars_fragment:gv,lights_phong_fragment:vv,lights_phong_pars_fragment:xv,lights_physical_fragment:Sv,lights_physical_pars_fragment:yv,lights_fragment_begin:Mv,lights_fragment_maps:Ev,lights_fragment_end:Tv,logdepthbuf_fragment:bv,logdepthbuf_pars_fragment:wv,logdepthbuf_pars_vertex:Av,logdepthbuf_vertex:Rv,map_fragment:Cv,map_pars_fragment:Pv,map_particle_fragment:Lv,map_particle_pars_fragment:Dv,metalnessmap_fragment:Iv,metalnessmap_pars_fragment:Uv,morphinstance_vertex:Ov,morphcolor_vertex:Nv,morphnormal_vertex:Fv,morphtarget_pars_vertex:Bv,morphtarget_vertex:kv,normal_fragment_begin:zv,normal_fragment_maps:Hv,normal_pars_fragment:Vv,normal_pars_vertex:Gv,normal_vertex:Wv,normalmap_pars_fragment:Xv,clearcoat_normal_fragment_begin:Yv,clearcoat_normal_fragment_maps:qv,clearcoat_pars_fragment:$v,iridescence_pars_fragment:jv,opaque_fragment:Kv,packing:Zv,premultiplied_alpha_fragment:Jv,project_vertex:Qv,dithering_fragment:tx,dithering_pars_fragment:ex,roughnessmap_fragment:nx,roughnessmap_pars_fragment:ix,shadowmap_pars_fragment:rx,shadowmap_pars_vertex:sx,shadowmap_vertex:ax,shadowmask_pars_fragment:ox,skinbase_vertex:lx,skinning_pars_vertex:cx,skinning_vertex:ux,skinnormal_vertex:hx,specularmap_fragment:fx,specularmap_pars_fragment:dx,tonemapping_fragment:px,tonemapping_pars_fragment:mx,transmission_fragment:_x,transmission_pars_fragment:gx,uv_pars_fragment:vx,uv_pars_vertex:xx,uv_vertex:Sx,worldpos_vertex:yx,background_vert:Mx,background_frag:Ex,backgroundCube_vert:Tx,backgroundCube_frag:bx,cube_vert:wx,cube_frag:Ax,depth_vert:Rx,depth_frag:Cx,distanceRGBA_vert:Px,distanceRGBA_frag:Lx,equirect_vert:Dx,equirect_frag:Ix,linedashed_vert:Ux,linedashed_frag:Ox,meshbasic_vert:Nx,meshbasic_frag:Fx,meshlambert_vert:Bx,meshlambert_frag:kx,meshmatcap_vert:zx,meshmatcap_frag:Hx,meshnormal_vert:Vx,meshnormal_frag:Gx,meshphong_vert:Wx,meshphong_frag:Xx,meshphysical_vert:Yx,meshphysical_frag:qx,meshtoon_vert:$x,meshtoon_frag:jx,points_vert:Kx,points_frag:Zx,shadow_vert:Jx,shadow_frag:Qx,sprite_vert:tS,sprite_frag:eS},dt={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},ai={basic:{uniforms:an([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:an([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new he(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:an([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:an([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:an([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new he(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:an([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:an([dt.points,dt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:an([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:an([dt.common,dt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:an([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:an([dt.sprite,dt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:an([dt.common,dt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:an([dt.lights,dt.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};ai.physical={uniforms:an([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const yo={r:0,b:0,g:0},xr=new Ui,nS=new Ue;function iS(r,t,e,n,i,s,a){const o=new he(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function _(M){let S=!1;const x=g(M);x===null?m(o,l):x&&x.isColor&&(m(x,1),S=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil)}function p(M,S){const x=g(S);x&&(x.isCubeTexture||x.mapping===ll)?(u===void 0&&(u=new fi(new za(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:zs(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),xr.copy(S.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nS.makeRotationFromEuler(xr)),u.material.toneMapped=de.getTransfer(x.colorSpace)!==xe,(h!==x||f!==x.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new fi(new fl(2,2),new lr({name:"BackgroundMaterial",uniforms:zs(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=de.getTransfer(x.colorSpace)!==xe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,S){M.getRGB(yo,Rp(r)),n.buffers.color.setClear(yo.r,yo.g,yo.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),l=S,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(o,l)},render:_,addToRenderList:p}}function rS(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(v,D,U,L,W){let X=!1;const j=h(L,U,D);s!==j&&(s=j,c(s.object)),X=d(v,L,U,W),X&&g(v,L,U,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(v,D,U,L),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function h(v,D,U){const L=U.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let X=W[D.id];X===void 0&&(X={},W[D.id]=X);let j=X[L];return j===void 0&&(j=f(l()),X[L]=j),j}function f(v){const D=[],U=[],L=[];for(let W=0;W<e;W++)D[W]=0,U[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:L,object:v,attributes:{},index:null}}function d(v,D,U,L){const W=s.attributes,X=D.attributes;let j=0;const H=U.getAttributes();for(const F in H)if(H[F].location>=0){const R=W[F];let ot=X[F];if(ot===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor)),R===void 0||R.attribute!==ot||ot&&R.data!==ot.data)return!0;j++}return s.attributesNum!==j||s.index!==L}function g(v,D,U,L){const W={},X=D.attributes;let j=0;const H=U.getAttributes();for(const F in H)if(H[F].location>=0){let R=X[F];R===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(R=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(R=v.instanceColor));const ot={};ot.attribute=R,R&&R.data&&(ot.data=R.data),W[F]=ot,j++}s.attributes=W,s.attributesNum=j,s.index=L}function _(){const v=s.newAttributes;for(let D=0,U=v.length;D<U;D++)v[D]=0}function p(v){m(v,0)}function m(v,D){const U=s.newAttributes,L=s.enabledAttributes,W=s.attributeDivisors;U[v]=1,L[v]===0&&(r.enableVertexAttribArray(v),L[v]=1),W[v]!==D&&(r.vertexAttribDivisor(v,D),W[v]=D)}function M(){const v=s.newAttributes,D=s.enabledAttributes;for(let U=0,L=D.length;U<L;U++)D[U]!==v[U]&&(r.disableVertexAttribArray(U),D[U]=0)}function S(v,D,U,L,W,X,j){j===!0?r.vertexAttribIPointer(v,D,U,W,X):r.vertexAttribPointer(v,D,U,L,W,X)}function x(v,D,U,L){_();const W=L.attributes,X=U.getAttributes(),j=D.defaultAttributeValues;for(const H in X){const F=X[H];if(F.location>=0){let J=W[H];if(J===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(J=v.instanceColor)),J!==void 0){const R=J.normalized,ot=J.itemSize,Lt=t.get(J);if(Lt===void 0)continue;const Kt=Lt.buffer,q=Lt.type,et=Lt.bytesPerElement,ut=q===r.INT||q===r.UNSIGNED_INT||J.gpuType===dp;if(J.isInterleavedBufferAttribute){const nt=J.data,Dt=nt.stride,Ct=J.offset;if(nt.isInstancedInterleavedBuffer){for(let B=0;B<F.locationSize;B++)m(F.location+B,nt.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let B=0;B<F.locationSize;B++)p(F.location+B);r.bindBuffer(r.ARRAY_BUFFER,Kt);for(let B=0;B<F.locationSize;B++)S(F.location+B,ot/F.locationSize,q,R,Dt*et,(Ct+ot/F.locationSize*B)*et,ut)}else{if(J.isInstancedBufferAttribute){for(let nt=0;nt<F.locationSize;nt++)m(F.location+nt,J.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let nt=0;nt<F.locationSize;nt++)p(F.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Kt);for(let nt=0;nt<F.locationSize;nt++)S(F.location+nt,ot/F.locationSize,q,R,ot*et,ot/F.locationSize*nt*et,ut)}}else if(j!==void 0){const R=j[H];if(R!==void 0)switch(R.length){case 2:r.vertexAttrib2fv(F.location,R);break;case 3:r.vertexAttrib3fv(F.location,R);break;case 4:r.vertexAttrib4fv(F.location,R);break;default:r.vertexAttrib1fv(F.location,R)}}}}M()}function A(){P();for(const v in n){const D=n[v];for(const U in D){const L=D[U];for(const W in L)u(L[W].object),delete L[W];delete D[U]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const D=n[v.id];for(const U in D){const L=D[U];for(const W in L)u(L[W].object),delete L[W];delete D[U]}delete n[v.id]}function E(v){for(const D in n){const U=n[D];if(U[v.id]===void 0)continue;const L=U[v.id];for(const W in L)u(L[W].object),delete L[W];delete U[v.id]}}function P(){y(),a=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function sS(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<h;d++)this.render(c[d],u[d]);else{f.multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<f.length;_++)e.update(g,n,f[_])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function aS(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==hi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const E=w===cl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==or&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ki&&!E)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:x,maxSamples:A}}function oS(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Tr,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const M=s?0:n,S=M*4;let x=m.clippingState||null;l.value=x,x=u(g,f,S,d);for(let A=0;A!==S;++A)x[A]=e[A];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,x=d;S!==_;++S,x+=4)a.copy(h[S]).applyMatrix4(M,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function lS(r){let t=new WeakMap;function e(a,o){return o===Gc?a.mapping=Fs:o===Wc&&(a.mapping=Bs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Gc||o===Wc)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new x0(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class cS extends Cp{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gs=4,pf=[.125,.215,.35,.446,.526,.582],Ar=20,sc=new cS,mf=new he;let ac=null,oc=0,lc=0,cc=!1;const br=(1+Math.sqrt(5))/2,hs=1/br,_f=[new Y(-br,hs,0),new Y(br,hs,0),new Y(-hs,0,br),new Y(hs,0,br),new Y(0,br,-hs),new Y(0,br,hs),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class gf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ac,oc,lc),this._renderer.xr.enabled=cc,t.scissorTest=!1,Mo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fs||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:cl,format:hi,colorSpace:hr,depthBuffer:!1},i=vf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uS(s)),this._blurMaterial=hS(s,t,e)}return i}_compileMaterial(t){const e=new fi(this._lodPlanes[0],t);this._renderer.compile(e,sc)}_sceneToCubeUV(t,e,n,i){const o=new Wn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(mf),u.toneMapping=er,u.autoClear=!1;const d=new wu({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),g=new fi(new za,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(mf),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):M===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const S=this._cubeSize;Mo(i,M*S,m>2?S:0,S,S),u.setRenderTarget(i),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Fs||t.mapping===Bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xf());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new fi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Mo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,sc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_f[(i-s-1)%_f.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new fi(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ar-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Ar;p>Ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ar}`);const m=[];let M=0;for(let E=0;E<Ar;++E){const P=E/_,y=Math.exp(-P*P/2);m.push(y),E===0?M+=y:E<p&&(M+=2*y)}for(let E=0;E<m.length;E++)m[E]=m[E]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const x=this._sizeLods[i],A=3*x*(i>S-gs?i-S+gs:0),w=4*(this._cubeSize-x);Mo(e,A,w,3*x,2*x),l.setRenderTarget(e),l.render(h,sc)}}function uS(r){const t=[],e=[],n=[];let i=r;const s=r-gs+1+pf.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-gs?l=pf[a-r+gs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*d),S=new Float32Array(p*g*d),x=new Float32Array(m*g*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,P=w>2?0:-1,y=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];M.set(y,_*g*w),S.set(f,p*g*w);const v=[w,w,w,w,w,w];x.set(v,m*g*w)}const A=new _i;A.setAttribute("position",new pi(M,_)),A.setAttribute("uv",new pi(S,p)),A.setAttribute("faceIndex",new pi(x,m)),t.push(A),i>gs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vf(r,t,e){const n=new Gr(r,t,e);return n.texture.mapping=ll,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mo(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function hS(r,t,e){const n=new Float32Array(Ar),i=new Y(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function xf(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Sf(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Au(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fS(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Gc||l===Wc,u=l===Fs||l===Bs;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new gf(r)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new gf(r)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function dS(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function pS(r,t,e,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let S=0,x=M.length;S<x;S+=3){const A=M[S+0],w=M[S+1],E=M[S+2];f.push(A,w,w,E,E,A)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,x=M.length/3-1;S<x;S+=3){const A=S+0,w=S+1,E=S+2;f.push(A,w,w,E,E,A)}}else return;const p=new(Sp(f)?Ap:wp)(f,1);p.version=_;const m=s.get(h);m&&t.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function mS(r,t,e){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*a,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(f[p]/a,d[p]);else{_.multiDrawElementsWEBGL(n,d,0,s,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}}function h(f,d,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=d[M];for(let M=0;M<_.length;M++)e.update(m,n,_[M])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function _S(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function gS(r,t,e){const n=new WeakMap,i=new Xe;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let v=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let A=o.attributes.position.count*x,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const E=new Float32Array(A*w*4*h),P=new Mp(E,A,w,h);P.type=Ki,P.needsUpdate=!0;const y=x*4;for(let D=0;D<h;D++){const U=m[D],L=M[D],W=S[D],X=A*w*4*D;for(let j=0;j<U.count;j++){const H=j*y;g===!0&&(i.fromBufferAttribute(U,j),E[X+H+0]=i.x,E[X+H+1]=i.y,E[X+H+2]=i.z,E[X+H+3]=0),_===!0&&(i.fromBufferAttribute(L,j),E[X+H+4]=i.x,E[X+H+5]=i.y,E[X+H+6]=i.z,E[X+H+7]=0),p===!0&&(i.fromBufferAttribute(W,j),E[X+H+8]=i.x,E[X+H+9]=i.y,E[X+H+10]=i.z,E[X+H+11]=W.itemSize===4?i.w:1)}}f={count:h,texture:P,size:new oe(A,w)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function vS(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Ip extends Sn{constructor(t,e,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:Rs,u!==Rs&&u!==Ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Rs&&(n=ks),n===void 0&&u===Ia&&(n=Oa),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Up=new Sn,Op=new Ip(1,1);Op.compareFunction=xp;const Np=new Mp,Fp=new i0,Bp=new Pp,yf=[],Mf=[],Ef=new Float32Array(16),Tf=new Float32Array(9),bf=new Float32Array(4);function Vs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=yf[i];if(s===void 0&&(s=new Float32Array(i),yf[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Fe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Be(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function dl(r,t){let e=Mf[t];e===void 0&&(e=new Int32Array(t),Mf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function xS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function SS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;r.uniform2fv(this.addr,t),Be(e,t)}}function yS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;r.uniform3fv(this.addr,t),Be(e,t)}}function MS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;r.uniform4fv(this.addr,t),Be(e,t)}}function ES(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;bf.set(n),r.uniformMatrix2fv(this.addr,!1,bf),Be(e,n)}}function TS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;Tf.set(n),r.uniformMatrix3fv(this.addr,!1,Tf),Be(e,n)}}function bS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;Ef.set(n),r.uniformMatrix4fv(this.addr,!1,Ef),Be(e,n)}}function wS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function AS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;r.uniform2iv(this.addr,t),Be(e,t)}}function RS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;r.uniform3iv(this.addr,t),Be(e,t)}}function CS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;r.uniform4iv(this.addr,t),Be(e,t)}}function PS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function LS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;r.uniform2uiv(this.addr,t),Be(e,t)}}function DS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;r.uniform3uiv(this.addr,t),Be(e,t)}}function IS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;r.uniform4uiv(this.addr,t),Be(e,t)}}function US(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Op:Up;e.setTexture2D(t||s,i)}function OS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Fp,i)}function NS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Bp,i)}function FS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Np,i)}function BS(r){switch(r){case 5126:return xS;case 35664:return SS;case 35665:return yS;case 35666:return MS;case 35674:return ES;case 35675:return TS;case 35676:return bS;case 5124:case 35670:return wS;case 35667:case 35671:return AS;case 35668:case 35672:return RS;case 35669:case 35673:return CS;case 5125:return PS;case 36294:return LS;case 36295:return DS;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return OS;case 35680:case 36300:case 36308:case 36293:return NS;case 36289:case 36303:case 36311:case 36292:return FS}}function kS(r,t){r.uniform1fv(this.addr,t)}function zS(r,t){const e=Vs(t,this.size,2);r.uniform2fv(this.addr,e)}function HS(r,t){const e=Vs(t,this.size,3);r.uniform3fv(this.addr,e)}function VS(r,t){const e=Vs(t,this.size,4);r.uniform4fv(this.addr,e)}function GS(r,t){const e=Vs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function WS(r,t){const e=Vs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function XS(r,t){const e=Vs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function YS(r,t){r.uniform1iv(this.addr,t)}function qS(r,t){r.uniform2iv(this.addr,t)}function $S(r,t){r.uniform3iv(this.addr,t)}function jS(r,t){r.uniform4iv(this.addr,t)}function KS(r,t){r.uniform1uiv(this.addr,t)}function ZS(r,t){r.uniform2uiv(this.addr,t)}function JS(r,t){r.uniform3uiv(this.addr,t)}function QS(r,t){r.uniform4uiv(this.addr,t)}function ty(r,t,e){const n=this.cache,i=t.length,s=dl(e,i);Fe(n,s)||(r.uniform1iv(this.addr,s),Be(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Up,s[a])}function ey(r,t,e){const n=this.cache,i=t.length,s=dl(e,i);Fe(n,s)||(r.uniform1iv(this.addr,s),Be(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Fp,s[a])}function ny(r,t,e){const n=this.cache,i=t.length,s=dl(e,i);Fe(n,s)||(r.uniform1iv(this.addr,s),Be(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Bp,s[a])}function iy(r,t,e){const n=this.cache,i=t.length,s=dl(e,i);Fe(n,s)||(r.uniform1iv(this.addr,s),Be(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Np,s[a])}function ry(r){switch(r){case 5126:return kS;case 35664:return zS;case 35665:return HS;case 35666:return VS;case 35674:return GS;case 35675:return WS;case 35676:return XS;case 5124:case 35670:return YS;case 35667:case 35671:return qS;case 35668:case 35672:return $S;case 35669:case 35673:return jS;case 5125:return KS;case 36294:return ZS;case 36295:return JS;case 36296:return QS;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return iy}}class sy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=BS(e.type)}}class ay{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ry(e.type)}}class oy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const uc=/(\w+)(\])?(\[|\.)?/g;function wf(r,t){r.seq.push(t),r.map[t.id]=t}function ly(r,t,e){const n=r.name,i=n.length;for(uc.lastIndex=0;;){const s=uc.exec(n),a=uc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){wf(e,c===void 0?new sy(o,r,t):new ay(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new oy(o),wf(e,h)),e=h}}}class No{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);ly(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Af(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const cy=37297;let uy=0;function hy(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function fy(r){const t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(r);let n;switch(t===e?n="":t===Zo&&e===Ko?n="LinearDisplayP3ToLinearSRGB":t===Ko&&e===Zo&&(n="LinearSRGBToLinearDisplayP3"),r){case hr:case ul:return[n,"LinearTransferOETF"];case si:case bu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Rf(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+hy(r.getShaderSource(t),a)}else return i}function dy(r,t){const e=fy(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function py(r,t){let e;switch(t){case Sg:e="Linear";break;case yg:e="Reinhard";break;case Mg:e="OptimizedCineon";break;case Eg:e="ACESFilmic";break;case bg:e="AgX";break;case wg:e="Neutral";break;case Tg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function my(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function _y(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gy(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function la(r){return r!==""}function Cf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(r){return r.replace(vy,Sy)}const xy=new Map;function Sy(r,t){let e=Yt[t];if(e===void 0){const n=xy.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $c(e)}const yy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lf(r){return r.replace(yy,My)}function My(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Df(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ey(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===cp?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Y_?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ei&&(t="SHADOWMAP_TYPE_VSM"),t}function Ty(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Fs:case Bs:t="ENVMAP_TYPE_CUBE";break;case ll:t="ENVMAP_TYPE_CUBE_UV";break}return t}function by(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function wy(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case up:t="ENVMAP_BLENDING_MULTIPLY";break;case vg:t="ENVMAP_BLENDING_MIX";break;case xg:t="ENVMAP_BLENDING_ADD";break}return t}function Ay(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ry(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Ey(e),c=Ty(e),u=by(e),h=wy(e),f=Ay(e),d=my(e),g=_y(s),_=i.createProgram();let p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(la).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(la).join(`
`),m.length>0&&(m+=`
`)):(p=[Df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),m=[Df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==er?"#define TONE_MAPPING":"",e.toneMapping!==er?Yt.tonemapping_pars_fragment:"",e.toneMapping!==er?py("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,dy("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(la).join(`
`)),a=$c(a),a=Cf(a,e),a=Pf(a,e),o=$c(o),o=Cf(o,e),o=Pf(o,e),a=Lf(a),o=Lf(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=M+p+a,x=M+m+o,A=Af(i,i.VERTEX_SHADER,S),w=Af(i,i.FRAGMENT_SHADER,x);i.attachShader(_,A),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(D){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(_).trim(),L=i.getShaderInfoLog(A).trim(),W=i.getShaderInfoLog(w).trim();let X=!0,j=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,w);else{const H=Rf(i,A,"vertex"),F=Rf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+H+`
`+F)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||W==="")&&(j=!1);j&&(D.diagnostics={runnable:X,programLog:U,vertexShader:{log:L,prefix:p},fragmentShader:{log:W,prefix:m}})}i.deleteShader(A),i.deleteShader(w),P=new No(i,_),y=gy(i,_)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,cy)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=uy++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let Cy=0;class Py{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ly(t),e.set(t,n)),n}}class Ly{constructor(t){this.id=Cy++,this.code=t,this.usedTimes=0}}function Dy(r,t,e,n,i,s,a){const o=new Tp,l=new Py,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,v,D,U,L){const W=U.fog,X=L.geometry,j=y.isMeshStandardMaterial?U.environment:null,H=(y.isMeshStandardMaterial?e:t).get(y.envMap||j),F=H&&H.mapping===ll?H.image.height:null,J=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const R=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ot=R!==void 0?R.length:0;let Lt=0;X.morphAttributes.position!==void 0&&(Lt=1),X.morphAttributes.normal!==void 0&&(Lt=2),X.morphAttributes.color!==void 0&&(Lt=3);let Kt,q,et,ut;if(J){const ee=ai[J];Kt=ee.vertexShader,q=ee.fragmentShader}else Kt=y.vertexShader,q=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),ut=l.getFragmentShaderID(y);const nt=r.getRenderTarget(),Dt=L.isInstancedMesh===!0,Ct=L.isBatchedMesh===!0,B=!!y.map,Gt=!!y.matcap,yt=!!H,Et=!!y.aoMap,gt=!!y.lightMap,Ut=!!y.bumpMap,Pt=!!y.normalMap,N=!!y.displacementMap,te=!!y.emissiveMap,C=!!y.metalnessMap,T=!!y.roughnessMap,G=y.anisotropy>0,Z=y.clearcoat>0,Q=y.dispersion>0,tt=y.iridescence>0,mt=y.sheen>0,lt=y.transmission>0,it=G&&!!y.anisotropyMap,It=Z&&!!y.clearcoatMap,rt=Z&&!!y.clearcoatNormalMap,Mt=Z&&!!y.clearcoatRoughnessMap,$t=tt&&!!y.iridescenceMap,_t=tt&&!!y.iridescenceThicknessMap,vt=mt&&!!y.sheenColorMap,Ot=mt&&!!y.sheenRoughnessMap,Vt=!!y.specularMap,fe=!!y.specularColorMap,Nt=!!y.specularIntensityMap,I=lt&&!!y.transmissionMap,$=lt&&!!y.thicknessMap,K=!!y.gradientMap,at=!!y.alphaMap,ct=y.alphaTest>0,Ht=!!y.alphaHash,re=!!y.extensions;let ce=er;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ce=r.toneMapping);const _e={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Kt,fragmentShader:q,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:ut,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ct,instancing:Dt,instancingColor:Dt&&L.instanceColor!==null,instancingMorph:Dt&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:nt===null?r.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:hr,alphaToCoverage:!!y.alphaToCoverage,map:B,matcap:Gt,envMap:yt,envMapMode:yt&&H.mapping,envMapCubeUVHeight:F,aoMap:Et,lightMap:gt,bumpMap:Ut,normalMap:Pt,displacementMap:f&&N,emissiveMap:te,normalMapObjectSpace:Pt&&y.normalMapType===Hg,normalMapTangentSpace:Pt&&y.normalMapType===zg,metalnessMap:C,roughnessMap:T,anisotropy:G,anisotropyMap:it,clearcoat:Z,clearcoatMap:It,clearcoatNormalMap:rt,clearcoatRoughnessMap:Mt,dispersion:Q,iridescence:tt,iridescenceMap:$t,iridescenceThicknessMap:_t,sheen:mt,sheenColorMap:vt,sheenRoughnessMap:Ot,specularMap:Vt,specularColorMap:fe,specularIntensityMap:Nt,transmission:lt,transmissionMap:I,thicknessMap:$,gradientMap:K,opaque:y.transparent===!1&&y.blending===As&&y.alphaToCoverage===!1,alphaMap:at,alphaTest:ct,alphaHash:Ht,combine:y.combine,mapUv:B&&_(y.map.channel),aoMapUv:Et&&_(y.aoMap.channel),lightMapUv:gt&&_(y.lightMap.channel),bumpMapUv:Ut&&_(y.bumpMap.channel),normalMapUv:Pt&&_(y.normalMap.channel),displacementMapUv:N&&_(y.displacementMap.channel),emissiveMapUv:te&&_(y.emissiveMap.channel),metalnessMapUv:C&&_(y.metalnessMap.channel),roughnessMapUv:T&&_(y.roughnessMap.channel),anisotropyMapUv:it&&_(y.anisotropyMap.channel),clearcoatMapUv:It&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&_(y.sheenRoughnessMap.channel),specularMapUv:Vt&&_(y.specularMap.channel),specularColorMapUv:fe&&_(y.specularColorMap.channel),specularIntensityMapUv:Nt&&_(y.specularIntensityMap.channel),transmissionMapUv:I&&_(y.transmissionMap.channel),thicknessMapUv:$&&_(y.thicknessMap.channel),alphaMapUv:at&&_(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Pt||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!X.attributes.uv&&(B||at),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:Lt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,useLegacyLights:r._useLegacyLights,decodeVideoTexture:B&&y.map.isVideoTexture===!0&&de.getTransfer(y.map.colorSpace)===xe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ai,flipSided:y.side===xn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:re&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:re&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return _e.vertexUv1s=c.has(1),_e.vertexUv2s=c.has(2),_e.vertexUv3s=c.has(3),c.clear(),_e}function m(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)v.push(D),v.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(M(v,y),S(v,y),v.push(r.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function M(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function S(y,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.alphaToCoverage&&o.enable(20),y.push(o.mask)}function x(y){const v=g[y.type];let D;if(v){const U=ai[v];D=m0.clone(U.uniforms)}else D=y.uniforms;return D}function A(y,v){let D;for(let U=0,L=u.length;U<L;U++){const W=u[U];if(W.cacheKey===v){D=W,++D.usedTimes;break}}return D===void 0&&(D=new Ry(r,v,y,s),u.push(D)),D}function w(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function E(y){l.remove(y)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:A,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:P}}function Iy(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Uy(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function If(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Uf(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,d,g,_,p){let m=r[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},r[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),t++,m}function o(h,f,d,g,_,p){const m=a(h,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(h,f,d,g,_,p){const m=a(h,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(h,f){e.length>1&&e.sort(h||Uy),n.length>1&&n.sort(f||If),i.length>1&&i.sort(f||If)}function u(){for(let h=t,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Oy(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Uf,r.set(n,[a])):i>=s.length?(a=new Uf,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Ny(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new he};break;case"SpotLight":e={position:new Y,direction:new Y,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[t.id]=e,e}}}function Fy(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let By=0;function ky(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function zy(r){const t=new Ny,e=Fy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const i=new Y,s=new Ue,a=new Ue;function o(c,u){let h=0,f=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let g=0,_=0,p=0,m=0,M=0,S=0,x=0,A=0,w=0,E=0,P=0;c.sort(ky);const y=u===!0?Math.PI:1;for(let D=0,U=c.length;D<U;D++){const L=c[D],W=L.color,X=L.intensity,j=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=W.r*X*y,f+=W.g*X*y,d+=W.b*X*y;else if(L.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(L.sh.coefficients[F],X);P++}else if(L.isDirectionalLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*y),L.castShadow){const J=L.shadow,R=e.get(L);R.shadowBias=J.bias,R.shadowNormalBias=J.normalBias,R.shadowRadius=J.radius,R.shadowMapSize=J.mapSize,n.directionalShadow[g]=R,n.directionalShadowMap[g]=H,n.directionalShadowMatrix[g]=L.shadow.matrix,S++}n.directional[g]=F,g++}else if(L.isSpotLight){const F=t.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(W).multiplyScalar(X*y),F.distance=j,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,n.spot[p]=F;const J=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,J.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[p]=J.matrix,L.castShadow){const R=e.get(L);R.shadowBias=J.bias,R.shadowNormalBias=J.normalBias,R.shadowRadius=J.radius,R.shadowMapSize=J.mapSize,n.spotShadow[p]=R,n.spotShadowMap[p]=H,A++}p++}else if(L.isRectAreaLight){const F=t.get(L);F.color.copy(W).multiplyScalar(X),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=F,m++}else if(L.isPointLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*y),F.distance=L.distance,F.decay=L.decay,L.castShadow){const J=L.shadow,R=e.get(L);R.shadowBias=J.bias,R.shadowNormalBias=J.normalBias,R.shadowRadius=J.radius,R.shadowMapSize=J.mapSize,R.shadowCameraNear=J.camera.near,R.shadowCameraFar=J.camera.far,n.pointShadow[_]=R,n.pointShadowMap[_]=H,n.pointShadowMatrix[_]=L.shadow.matrix,x++}n.point[_]=F,_++}else if(L.isHemisphereLight){const F=t.get(L);F.skyColor.copy(L.color).multiplyScalar(X*y),F.groundColor.copy(L.groundColor).multiplyScalar(X*y),n.hemi[M]=F,M++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const v=n.hash;(v.directionalLength!==g||v.pointLength!==_||v.spotLength!==p||v.rectAreaLength!==m||v.hemiLength!==M||v.numDirectionalShadows!==S||v.numPointShadows!==x||v.numSpotShadows!==A||v.numSpotMaps!==w||v.numLightProbes!==P)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=m,n.point.length=_,n.hemi.length=M,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=A+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,v.directionalLength=g,v.pointLength=_,v.spotLength=p,v.rectAreaLength=m,v.hemiLength=M,v.numDirectionalShadows=S,v.numPointShadows=x,v.numSpotShadows=A,v.numSpotMaps=w,v.numLightProbes=P,n.version=By++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const S=c[m];if(S.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),h++}else if(S.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),d++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function Of(r){const t=new zy(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(u){t.setup(e,u)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Hy(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Of(r),t.set(i,[o])):s>=a.length?(o=new Of(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Vy extends ka{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gy extends ka{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Wy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yy(r,t,e){let n=new Lp;const i=new oe,s=new oe,a=new Xe,o=new Vy({depthPacking:kg}),l=new Gy,c={},u=e.maxTextureSize,h={[ar]:xn,[xn]:ar,[Ai]:Ai},f=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Wy,fragmentShader:Xy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new _i;g.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fi(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cp;let m=this.type;this.render=function(w,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const y=r.getRenderTarget(),v=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),U=r.state;U.setBlending(tr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const L=m!==Ei&&this.type===Ei,W=m===Ei&&this.type!==Ei;for(let X=0,j=w.length;X<j;X++){const H=w[X],F=H.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const J=F.getFrameExtents();if(i.multiply(J),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,F.mapSize.y=s.y)),F.map===null||L===!0||W===!0){const ot=this.type!==Ei?{minFilter:qn,magFilter:qn}:{};F.map!==null&&F.map.dispose(),F.map=new Gr(i.x,i.y,ot),F.map.texture.name=H.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const R=F.getViewportCount();for(let ot=0;ot<R;ot++){const Lt=F.getViewport(ot);a.set(s.x*Lt.x,s.y*Lt.y,s.x*Lt.z,s.y*Lt.w),U.viewport(a),F.updateMatrices(H,ot),n=F.getFrustum(),x(E,P,F.camera,H,this.type)}F.isPointLightShadow!==!0&&this.type===Ei&&M(F,P),F.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(y,v,D)};function M(w,E){const P=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Gr(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,P,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,P,d,_,null)}function S(w,E,P,y){let v=null;const D=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)v=D;else if(v=P.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=v.uuid,L=E.uuid;let W=c[U];W===void 0&&(W={},c[U]=W);let X=W[L];X===void 0&&(X=v.clone(),W[L]=X,E.addEventListener("dispose",A)),v=X}if(v.visible=E.visible,v.wireframe=E.wireframe,y===Ei?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:h[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=r.properties.get(v);U.light=P}return v}function x(w,E,P,y,v){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Ei)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const L=t.update(w),W=w.material;if(Array.isArray(W)){const X=L.groups;for(let j=0,H=X.length;j<H;j++){const F=X[j],J=W[F.materialIndex];if(J&&J.visible){const R=S(w,J,y,v);w.onBeforeShadow(r,w,E,P,L,R,F),r.renderBufferDirect(P,null,L,R,w,F),w.onAfterShadow(r,w,E,P,L,R,F)}}}else if(W.visible){const X=S(w,W,y,v);w.onBeforeShadow(r,w,E,P,L,X,null),r.renderBufferDirect(P,null,L,X,w,null),w.onAfterShadow(r,w,E,P,L,X,null)}}const U=w.children;for(let L=0,W=U.length;L<W;L++)x(U[L],E,P,y,v)}function A(w){w.target.removeEventListener("dispose",A);for(const P in c){const y=c[P],v=w.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}function qy(r){function t(){let I=!1;const $=new Xe;let K=null;const at=new Xe(0,0,0,0);return{setMask:function(ct){K!==ct&&!I&&(r.colorMask(ct,ct,ct,ct),K=ct)},setLocked:function(ct){I=ct},setClear:function(ct,Ht,re,ce,_e){_e===!0&&(ct*=ce,Ht*=ce,re*=ce),$.set(ct,Ht,re,ce),at.equals($)===!1&&(r.clearColor(ct,Ht,re,ce),at.copy($))},reset:function(){I=!1,K=null,at.set(-1,0,0,0)}}}function e(){let I=!1,$=null,K=null,at=null;return{setTest:function(ct){ct?ut(r.DEPTH_TEST):nt(r.DEPTH_TEST)},setMask:function(ct){$!==ct&&!I&&(r.depthMask(ct),$=ct)},setFunc:function(ct){if(K!==ct){switch(ct){case hg:r.depthFunc(r.NEVER);break;case fg:r.depthFunc(r.ALWAYS);break;case dg:r.depthFunc(r.LESS);break;case $o:r.depthFunc(r.LEQUAL);break;case pg:r.depthFunc(r.EQUAL);break;case mg:r.depthFunc(r.GEQUAL);break;case _g:r.depthFunc(r.GREATER);break;case gg:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=ct}},setLocked:function(ct){I=ct},setClear:function(ct){at!==ct&&(r.clearDepth(ct),at=ct)},reset:function(){I=!1,$=null,K=null,at=null}}}function n(){let I=!1,$=null,K=null,at=null,ct=null,Ht=null,re=null,ce=null,_e=null;return{setTest:function(ee){I||(ee?ut(r.STENCIL_TEST):nt(r.STENCIL_TEST))},setMask:function(ee){$!==ee&&!I&&(r.stencilMask(ee),$=ee)},setFunc:function(ee,Rt,xt){(K!==ee||at!==Rt||ct!==xt)&&(r.stencilFunc(ee,Rt,xt),K=ee,at=Rt,ct=xt)},setOp:function(ee,Rt,xt){(Ht!==ee||re!==Rt||ce!==xt)&&(r.stencilOp(ee,Rt,xt),Ht=ee,re=Rt,ce=xt)},setLocked:function(ee){I=ee},setClear:function(ee){_e!==ee&&(r.clearStencil(ee),_e=ee)},reset:function(){I=!1,$=null,K=null,at=null,ct=null,Ht=null,re=null,ce=null,_e=null}}}const i=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,M=null,S=null,x=null,A=null,w=new he(0,0,0),E=0,P=!1,y=null,v=null,D=null,U=null,L=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=j>=2);let F=null,J={};const R=r.getParameter(r.SCISSOR_BOX),ot=r.getParameter(r.VIEWPORT),Lt=new Xe().fromArray(R),Kt=new Xe().fromArray(ot);function q(I,$,K,at){const ct=new Uint8Array(4),Ht=r.createTexture();r.bindTexture(I,Ht),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let re=0;re<K;re++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D($,0,r.RGBA,1,1,at,0,r.RGBA,r.UNSIGNED_BYTE,ct):r.texImage2D($+re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ct);return Ht}const et={};et[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ut(r.DEPTH_TEST),s.setFunc($o),Ut(!1),Pt(mh),ut(r.CULL_FACE),Et(tr);function ut(I){c[I]!==!0&&(r.enable(I),c[I]=!0)}function nt(I){c[I]!==!1&&(r.disable(I),c[I]=!1)}function Dt(I,$){return u[I]!==$?(r.bindFramebuffer(I,$),u[I]=$,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=$),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=$),!0):!1}function Ct(I,$){let K=f,at=!1;if(I){K=h.get($),K===void 0&&(K=[],h.set($,K));const ct=I.textures;if(K.length!==ct.length||K[0]!==r.COLOR_ATTACHMENT0){for(let Ht=0,re=ct.length;Ht<re;Ht++)K[Ht]=r.COLOR_ATTACHMENT0+Ht;K.length=ct.length,at=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,at=!0);at&&r.drawBuffers(K)}function B(I){return d!==I?(r.useProgram(I),d=I,!0):!1}const Gt={[wr]:r.FUNC_ADD,[$_]:r.FUNC_SUBTRACT,[j_]:r.FUNC_REVERSE_SUBTRACT};Gt[K_]=r.MIN,Gt[Z_]=r.MAX;const yt={[J_]:r.ZERO,[Q_]:r.ONE,[tg]:r.SRC_COLOR,[Hc]:r.SRC_ALPHA,[ag]:r.SRC_ALPHA_SATURATE,[rg]:r.DST_COLOR,[ng]:r.DST_ALPHA,[eg]:r.ONE_MINUS_SRC_COLOR,[Vc]:r.ONE_MINUS_SRC_ALPHA,[sg]:r.ONE_MINUS_DST_COLOR,[ig]:r.ONE_MINUS_DST_ALPHA,[og]:r.CONSTANT_COLOR,[lg]:r.ONE_MINUS_CONSTANT_COLOR,[cg]:r.CONSTANT_ALPHA,[ug]:r.ONE_MINUS_CONSTANT_ALPHA};function Et(I,$,K,at,ct,Ht,re,ce,_e,ee){if(I===tr){g===!0&&(nt(r.BLEND),g=!1);return}if(g===!1&&(ut(r.BLEND),g=!0),I!==q_){if(I!==_||ee!==P){if((p!==wr||S!==wr)&&(r.blendEquation(r.FUNC_ADD),p=wr,S=wr),ee)switch(I){case As:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _h:r.blendFunc(r.ONE,r.ONE);break;case gh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case As:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _h:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case gh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,M=null,x=null,A=null,w.set(0,0,0),E=0,_=I,P=ee}return}ct=ct||$,Ht=Ht||K,re=re||at,($!==p||ct!==S)&&(r.blendEquationSeparate(Gt[$],Gt[ct]),p=$,S=ct),(K!==m||at!==M||Ht!==x||re!==A)&&(r.blendFuncSeparate(yt[K],yt[at],yt[Ht],yt[re]),m=K,M=at,x=Ht,A=re),(ce.equals(w)===!1||_e!==E)&&(r.blendColor(ce.r,ce.g,ce.b,_e),w.copy(ce),E=_e),_=I,P=!1}function gt(I,$){I.side===Ai?nt(r.CULL_FACE):ut(r.CULL_FACE);let K=I.side===xn;$&&(K=!K),Ut(K),I.blending===As&&I.transparent===!1?Et(tr):Et(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),i.setMask(I.colorWrite);const at=I.stencilWrite;a.setTest(at),at&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),te(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):nt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(I){y!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),y=I)}function Pt(I){I!==W_?(ut(r.CULL_FACE),I!==v&&(I===mh?r.cullFace(r.BACK):I===X_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):nt(r.CULL_FACE),v=I}function N(I){I!==D&&(X&&r.lineWidth(I),D=I)}function te(I,$,K){I?(ut(r.POLYGON_OFFSET_FILL),(U!==$||L!==K)&&(r.polygonOffset($,K),U=$,L=K)):nt(r.POLYGON_OFFSET_FILL)}function C(I){I?ut(r.SCISSOR_TEST):nt(r.SCISSOR_TEST)}function T(I){I===void 0&&(I=r.TEXTURE0+W-1),F!==I&&(r.activeTexture(I),F=I)}function G(I,$,K){K===void 0&&(F===null?K=r.TEXTURE0+W-1:K=F);let at=J[K];at===void 0&&(at={type:void 0,texture:void 0},J[K]=at),(at.type!==I||at.texture!==$)&&(F!==K&&(r.activeTexture(K),F=K),r.bindTexture(I,$||et[I]),at.type=I,at.texture=$)}function Z(){const I=J[F];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $t(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(I){Lt.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Lt.copy(I))}function Ot(I){Kt.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Kt.copy(I))}function Vt(I,$){let K=l.get($);K===void 0&&(K=new WeakMap,l.set($,K));let at=K.get(I);at===void 0&&(at=r.getUniformBlockIndex($,I.name),K.set(I,at))}function fe(I,$){const at=l.get($).get(I);o.get($)!==at&&(r.uniformBlockBinding($,at,I.__bindingPointIndex),o.set($,at))}function Nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},F=null,J={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,M=null,S=null,x=null,A=null,w=new he(0,0,0),E=0,P=!1,y=null,v=null,D=null,U=null,L=null,Lt.set(0,0,r.canvas.width,r.canvas.height),Kt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:ut,disable:nt,bindFramebuffer:Dt,drawBuffers:Ct,useProgram:B,setBlending:Et,setMaterial:gt,setFlipSided:Ut,setCullFace:Pt,setLineWidth:N,setPolygonOffset:te,setScissorTest:C,activeTexture:T,bindTexture:G,unbindTexture:Z,compressedTexImage2D:Q,compressedTexImage3D:tt,texImage2D:$t,texImage3D:_t,updateUBOMapping:Vt,uniformBlockBinding:fe,texStorage2D:rt,texStorage3D:Mt,texSubImage2D:mt,texSubImage3D:lt,compressedTexSubImage2D:it,compressedTexSubImage3D:It,scissor:vt,viewport:Ot,reset:Nt}}function $y(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return d?new OffscreenCanvas(C,T):Qo("canvas")}function _(C,T,G){let Z=1;const Q=te(C);if((Q.width>G||Q.height>G)&&(Z=G/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const tt=Math.floor(Z*Q.width),mt=Math.floor(Z*Q.height);h===void 0&&(h=g(tt,mt));const lt=T?g(tt,mt):h;return lt.width=tt,lt.height=mt,lt.getContext("2d").drawImage(C,0,0,tt,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+tt+"x"+mt+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==qn&&C.minFilter!==Qn}function m(C){r.generateMipmap(C)}function M(C,T,G,Z,Q=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let tt=T;if(T===r.RED&&(G===r.FLOAT&&(tt=r.R32F),G===r.HALF_FLOAT&&(tt=r.R16F),G===r.UNSIGNED_BYTE&&(tt=r.R8)),T===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(tt=r.R8UI),G===r.UNSIGNED_SHORT&&(tt=r.R16UI),G===r.UNSIGNED_INT&&(tt=r.R32UI),G===r.BYTE&&(tt=r.R8I),G===r.SHORT&&(tt=r.R16I),G===r.INT&&(tt=r.R32I)),T===r.RG&&(G===r.FLOAT&&(tt=r.RG32F),G===r.HALF_FLOAT&&(tt=r.RG16F),G===r.UNSIGNED_BYTE&&(tt=r.RG8)),T===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(tt=r.RG8UI),G===r.UNSIGNED_SHORT&&(tt=r.RG16UI),G===r.UNSIGNED_INT&&(tt=r.RG32UI),G===r.BYTE&&(tt=r.RG8I),G===r.SHORT&&(tt=r.RG16I),G===r.INT&&(tt=r.RG32I)),T===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(tt=r.RGB9_E5),T===r.RGBA){const mt=Q?jo:de.getTransfer(Z);G===r.FLOAT&&(tt=r.RGBA32F),G===r.HALF_FLOAT&&(tt=r.RGBA16F),G===r.UNSIGNED_BYTE&&(tt=mt===xe?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function S(C,T){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==qn&&C.minFilter!==Qn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function x(C){const T=C.target;T.removeEventListener("dispose",x),w(T),T.isVideoTexture&&u.delete(T)}function A(C){const T=C.target;T.removeEventListener("dispose",A),P(T)}function w(C){const T=n.get(C);if(T.__webglInit===void 0)return;const G=C.source,Z=f.get(G);if(Z){const Q=Z[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(C),Object.keys(Z).length===0&&f.delete(G)}n.remove(C)}function E(C){const T=n.get(C);r.deleteTexture(T.__webglTexture);const G=C.source,Z=f.get(G);delete Z[T.__cacheKey],a.memory.textures--}function P(C){const T=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let Q=0;Q<T.__webglFramebuffer[Z].length;Q++)r.deleteFramebuffer(T.__webglFramebuffer[Z][Q]);else r.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)r.deleteFramebuffer(T.__webglFramebuffer[Z]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=C.textures;for(let Z=0,Q=G.length;Z<Q;Z++){const tt=n.get(G[Z]);tt.__webglTexture&&(r.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(G[Z])}n.remove(C)}let y=0;function v(){y=0}function D(){const C=y;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),y+=1,C}function U(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function L(C,T){const G=n.get(C);if(C.isVideoTexture&&Pt(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(G,C,T);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+T)}function W(C,T){const G=n.get(C);if(C.version>0&&G.__version!==C.version){Lt(G,C,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+T)}function X(C,T){const G=n.get(C);if(C.version>0&&G.__version!==C.version){Lt(G,C,T);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+T)}function j(C,T){const G=n.get(C);if(C.version>0&&G.__version!==C.version){Kt(G,C,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+T)}const H={[Xc]:r.REPEAT,[Pr]:r.CLAMP_TO_EDGE,[Yc]:r.MIRRORED_REPEAT},F={[qn]:r.NEAREST,[Ag]:r.NEAREST_MIPMAP_NEAREST,[to]:r.NEAREST_MIPMAP_LINEAR,[Qn]:r.LINEAR,[Il]:r.LINEAR_MIPMAP_NEAREST,[Lr]:r.LINEAR_MIPMAP_LINEAR},J={[Vg]:r.NEVER,[$g]:r.ALWAYS,[Gg]:r.LESS,[xp]:r.LEQUAL,[Wg]:r.EQUAL,[qg]:r.GEQUAL,[Xg]:r.GREATER,[Yg]:r.NOTEQUAL};function R(C,T){if(T.type===Ki&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Qn||T.magFilter===Il||T.magFilter===to||T.magFilter===Lr||T.minFilter===Qn||T.minFilter===Il||T.minFilter===to||T.minFilter===Lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,H[T.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,H[T.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,H[T.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,F[T.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,F[T.minFilter]),T.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,J[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===qn||T.minFilter!==to&&T.minFilter!==Lr||T.type===Ki&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ot(C,T){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",x));const Z=T.source;let Q=f.get(Z);Q===void 0&&(Q={},f.set(Z,Q));const tt=U(T);if(tt!==C.__cacheKey){Q[tt]===void 0&&(Q[tt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Q[tt].usedTimes++;const mt=Q[C.__cacheKey];mt!==void 0&&(Q[C.__cacheKey].usedTimes--,mt.usedTimes===0&&E(T)),C.__cacheKey=tt,C.__webglTexture=Q[tt].texture}return G}function Lt(C,T,G){let Z=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=r.TEXTURE_3D);const Q=ot(C,T),tt=T.source;e.bindTexture(Z,C.__webglTexture,r.TEXTURE0+G);const mt=n.get(tt);if(tt.version!==mt.__version||Q===!0){e.activeTexture(r.TEXTURE0+G);const lt=de.getPrimaries(de.workingColorSpace),it=T.colorSpace===Gi?null:de.getPrimaries(T.colorSpace),It=T.colorSpace===Gi||lt===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let rt=_(T.image,!1,i.maxTextureSize);rt=N(T,rt);const Mt=s.convert(T.format,T.colorSpace),$t=s.convert(T.type);let _t=M(T.internalFormat,Mt,$t,T.colorSpace,T.isVideoTexture);R(Z,T);let vt;const Ot=T.mipmaps,Vt=T.isVideoTexture!==!0,fe=mt.__version===void 0||Q===!0,Nt=tt.dataReady,I=S(T,rt);if(T.isDepthTexture)_t=r.DEPTH_COMPONENT16,T.type===Ki?_t=r.DEPTH_COMPONENT32F:T.type===ks?_t=r.DEPTH_COMPONENT24:T.type===Oa&&(_t=r.DEPTH24_STENCIL8),fe&&(Vt?e.texStorage2D(r.TEXTURE_2D,1,_t,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,_t,rt.width,rt.height,0,Mt,$t,null));else if(T.isDataTexture)if(Ot.length>0){Vt&&fe&&e.texStorage2D(r.TEXTURE_2D,I,_t,Ot[0].width,Ot[0].height);for(let $=0,K=Ot.length;$<K;$++)vt=Ot[$],Vt?Nt&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,vt.width,vt.height,Mt,$t,vt.data):e.texImage2D(r.TEXTURE_2D,$,_t,vt.width,vt.height,0,Mt,$t,vt.data);T.generateMipmaps=!1}else Vt?(fe&&e.texStorage2D(r.TEXTURE_2D,I,_t,rt.width,rt.height),Nt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt.width,rt.height,Mt,$t,rt.data)):e.texImage2D(r.TEXTURE_2D,0,_t,rt.width,rt.height,0,Mt,$t,rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Vt&&fe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,I,_t,Ot[0].width,Ot[0].height,rt.depth);for(let $=0,K=Ot.length;$<K;$++)vt=Ot[$],T.format!==hi?Mt!==null?Vt?Nt&&e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,vt.width,vt.height,rt.depth,Mt,vt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,_t,vt.width,vt.height,rt.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?Nt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,vt.width,vt.height,rt.depth,Mt,$t,vt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,_t,vt.width,vt.height,rt.depth,0,Mt,$t,vt.data)}else{Vt&&fe&&e.texStorage2D(r.TEXTURE_2D,I,_t,Ot[0].width,Ot[0].height);for(let $=0,K=Ot.length;$<K;$++)vt=Ot[$],T.format!==hi?Mt!==null?Vt?Nt&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,vt.width,vt.height,Mt,vt.data):e.compressedTexImage2D(r.TEXTURE_2D,$,_t,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?Nt&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,vt.width,vt.height,Mt,$t,vt.data):e.texImage2D(r.TEXTURE_2D,$,_t,vt.width,vt.height,0,Mt,$t,vt.data)}else if(T.isDataArrayTexture)Vt?(fe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,I,_t,rt.width,rt.height,rt.depth),Nt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Mt,$t,rt.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,_t,rt.width,rt.height,rt.depth,0,Mt,$t,rt.data);else if(T.isData3DTexture)Vt?(fe&&e.texStorage3D(r.TEXTURE_3D,I,_t,rt.width,rt.height,rt.depth),Nt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Mt,$t,rt.data)):e.texImage3D(r.TEXTURE_3D,0,_t,rt.width,rt.height,rt.depth,0,Mt,$t,rt.data);else if(T.isFramebufferTexture){if(fe)if(Vt)e.texStorage2D(r.TEXTURE_2D,I,_t,rt.width,rt.height);else{let $=rt.width,K=rt.height;for(let at=0;at<I;at++)e.texImage2D(r.TEXTURE_2D,at,_t,$,K,0,Mt,$t,null),$>>=1,K>>=1}}else if(Ot.length>0){if(Vt&&fe){const $=te(Ot[0]);e.texStorage2D(r.TEXTURE_2D,I,_t,$.width,$.height)}for(let $=0,K=Ot.length;$<K;$++)vt=Ot[$],Vt?Nt&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,Mt,$t,vt):e.texImage2D(r.TEXTURE_2D,$,_t,Mt,$t,vt);T.generateMipmaps=!1}else if(Vt){if(fe){const $=te(rt);e.texStorage2D(r.TEXTURE_2D,I,_t,$.width,$.height)}Nt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Mt,$t,rt)}else e.texImage2D(r.TEXTURE_2D,0,_t,Mt,$t,rt);p(T)&&m(Z),mt.__version=tt.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Kt(C,T,G){if(T.image.length!==6)return;const Z=ot(C,T),Q=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+G);const tt=n.get(Q);if(Q.version!==tt.__version||Z===!0){e.activeTexture(r.TEXTURE0+G);const mt=de.getPrimaries(de.workingColorSpace),lt=T.colorSpace===Gi?null:de.getPrimaries(T.colorSpace),it=T.colorSpace===Gi||mt===lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const It=T.isCompressedTexture||T.image[0].isCompressedTexture,rt=T.image[0]&&T.image[0].isDataTexture,Mt=[];for(let K=0;K<6;K++)!It&&!rt?Mt[K]=_(T.image[K],!0,i.maxCubemapSize):Mt[K]=rt?T.image[K].image:T.image[K],Mt[K]=N(T,Mt[K]);const $t=Mt[0],_t=s.convert(T.format,T.colorSpace),vt=s.convert(T.type),Ot=M(T.internalFormat,_t,vt,T.colorSpace),Vt=T.isVideoTexture!==!0,fe=tt.__version===void 0||Z===!0,Nt=Q.dataReady;let I=S(T,$t);R(r.TEXTURE_CUBE_MAP,T);let $;if(It){Vt&&fe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,I,Ot,$t.width,$t.height);for(let K=0;K<6;K++){$=Mt[K].mipmaps;for(let at=0;at<$.length;at++){const ct=$[at];T.format!==hi?_t!==null?Vt?Nt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,0,0,ct.width,ct.height,_t,ct.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,Ot,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?Nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,0,0,ct.width,ct.height,_t,vt,ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,Ot,ct.width,ct.height,0,_t,vt,ct.data)}}}else{if($=T.mipmaps,Vt&&fe){$.length>0&&I++;const K=te(Mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,I,Ot,K.width,K.height)}for(let K=0;K<6;K++)if(rt){Vt?Nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Mt[K].width,Mt[K].height,_t,vt,Mt[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ot,Mt[K].width,Mt[K].height,0,_t,vt,Mt[K].data);for(let at=0;at<$.length;at++){const Ht=$[at].image[K].image;Vt?Nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,0,0,Ht.width,Ht.height,_t,vt,Ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,Ot,Ht.width,Ht.height,0,_t,vt,Ht.data)}}else{Vt?Nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,_t,vt,Mt[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ot,_t,vt,Mt[K]);for(let at=0;at<$.length;at++){const ct=$[at];Vt?Nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,0,0,_t,vt,ct.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,Ot,_t,vt,ct.image[K])}}}p(T)&&m(r.TEXTURE_CUBE_MAP),tt.__version=Q.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function q(C,T,G,Z,Q,tt){const mt=s.convert(G.format,G.colorSpace),lt=s.convert(G.type),it=M(G.internalFormat,mt,lt,G.colorSpace);if(!n.get(T).__hasExternalTextures){const rt=Math.max(1,T.width>>tt),Mt=Math.max(1,T.height>>tt);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,tt,it,rt,Mt,T.depth,0,mt,lt,null):e.texImage2D(Q,tt,it,rt,Mt,0,mt,lt,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Ut(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,Q,n.get(G).__webglTexture,0,gt(T)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,Q,n.get(G).__webglTexture,tt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function et(C,T,G){if(r.bindRenderbuffer(r.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let Z=r.DEPTH_COMPONENT24;if(G||Ut(T)){const Q=T.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Ki?Z=r.DEPTH_COMPONENT32F:Q.type===ks&&(Z=r.DEPTH_COMPONENT24));const tt=gt(T);Ut(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,tt,Z,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,Z,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,Z,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){const Z=gt(T);G&&Ut(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,T.width,T.height):Ut(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const Z=T.textures;for(let Q=0;Q<Z.length;Q++){const tt=Z[Q],mt=s.convert(tt.format,tt.colorSpace),lt=s.convert(tt.type),it=M(tt.internalFormat,mt,lt,tt.colorSpace),It=gt(T);G&&Ut(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,It,it,T.width,T.height):Ut(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,It,it,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,it,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ut(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),L(T.depthTexture,0);const Z=n.get(T.depthTexture).__webglTexture,Q=gt(T);if(T.depthTexture.format===Rs)Ut(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(T.depthTexture.format===Ia)Ut(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function nt(C){const T=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ut(T.__webglFramebuffer,C)}else if(G){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]=r.createRenderbuffer(),et(T.__webglDepthbuffer[Z],C,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),et(T.__webglDepthbuffer,C,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(C,T,G){const Z=n.get(C);T!==void 0&&q(Z.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&nt(C)}function Ct(C){const T=C.texture,G=n.get(C),Z=n.get(T);C.addEventListener("dispose",A);const Q=C.textures,tt=C.isWebGLCubeRenderTarget===!0,mt=Q.length>1;if(mt||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=T.version,a.memory.textures++),tt){G.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[lt]=[];for(let it=0;it<T.mipmaps.length;it++)G.__webglFramebuffer[lt][it]=r.createFramebuffer()}else G.__webglFramebuffer[lt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let lt=0;lt<T.mipmaps.length;lt++)G.__webglFramebuffer[lt]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(mt)for(let lt=0,it=Q.length;lt<it;lt++){const It=n.get(Q[lt]);It.__webglTexture===void 0&&(It.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&Ut(C)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let lt=0;lt<Q.length;lt++){const it=Q[lt];G.__webglColorRenderbuffer[lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[lt]);const It=s.convert(it.format,it.colorSpace),rt=s.convert(it.type),Mt=M(it.internalFormat,It,rt,it.colorSpace,C.isXRRenderTarget===!0),$t=gt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,$t,Mt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,G.__webglColorRenderbuffer[lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),et(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(tt){e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),R(r.TEXTURE_CUBE_MAP,T);for(let lt=0;lt<6;lt++)if(T.mipmaps&&T.mipmaps.length>0)for(let it=0;it<T.mipmaps.length;it++)q(G.__webglFramebuffer[lt][it],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,it);else q(G.__webglFramebuffer[lt],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(T)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let lt=0,it=Q.length;lt<it;lt++){const It=Q[lt],rt=n.get(It);e.bindTexture(r.TEXTURE_2D,rt.__webglTexture),R(r.TEXTURE_2D,It),q(G.__webglFramebuffer,C,It,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,0),p(It)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let lt=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(lt,Z.__webglTexture),R(lt,T),T.mipmaps&&T.mipmaps.length>0)for(let it=0;it<T.mipmaps.length;it++)q(G.__webglFramebuffer[it],C,T,r.COLOR_ATTACHMENT0,lt,it);else q(G.__webglFramebuffer,C,T,r.COLOR_ATTACHMENT0,lt,0);p(T)&&m(lt),e.unbindTexture()}C.depthBuffer&&nt(C)}function B(C){const T=C.textures;for(let G=0,Z=T.length;G<Z;G++){const Q=T[G];if(p(Q)){const tt=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,mt=n.get(Q).__webglTexture;e.bindTexture(tt,mt),m(tt),e.unbindTexture()}}}const Gt=[],yt=[];function Et(C){if(C.samples>0){if(Ut(C)===!1){const T=C.textures,G=C.width,Z=C.height;let Q=r.COLOR_BUFFER_BIT;const tt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=n.get(C),lt=T.length>1;if(lt)for(let it=0;it<T.length;it++)e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let it=0;it<T.length;it++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,mt.__webglColorRenderbuffer[it]);const It=n.get(T[it]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,It,0)}r.blitFramebuffer(0,0,G,Z,0,0,G,Z,Q,r.NEAREST),l===!0&&(Gt.length=0,yt.length=0,Gt.push(r.COLOR_ATTACHMENT0+it),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Gt.push(tt),yt.push(tt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,yt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),lt)for(let it=0;it<T.length;it++){e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,mt.__webglColorRenderbuffer[it]);const It=n.get(T[it]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.TEXTURE_2D,It,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const T=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function gt(C){return Math.min(i.maxSamples,C.samples)}function Ut(C){const T=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Pt(C){const T=a.render.frame;u.get(C)!==T&&(u.set(C,T),C.update())}function N(C,T){const G=C.colorSpace,Z=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==hr&&G!==Gi&&(de.getTransfer(G)===xe?(Z!==hi||Q!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function te(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=v,this.setTexture2D=L,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=j,this.rebindTextures=Dt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Ut}function jy(r,t){function e(n,i=Gi){let s;const a=de.getTransfer(i);if(n===or)return r.UNSIGNED_BYTE;if(n===pp)return r.UNSIGNED_SHORT_4_4_4_4;if(n===mp)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Pg)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Rg)return r.BYTE;if(n===Cg)return r.SHORT;if(n===fp)return r.UNSIGNED_SHORT;if(n===dp)return r.INT;if(n===ks)return r.UNSIGNED_INT;if(n===Ki)return r.FLOAT;if(n===cl)return r.HALF_FLOAT;if(n===Lg)return r.ALPHA;if(n===Dg)return r.RGB;if(n===hi)return r.RGBA;if(n===Ig)return r.LUMINANCE;if(n===Ug)return r.LUMINANCE_ALPHA;if(n===Rs)return r.DEPTH_COMPONENT;if(n===Ia)return r.DEPTH_STENCIL;if(n===Og)return r.RED;if(n===_p)return r.RED_INTEGER;if(n===Ng)return r.RG;if(n===gp)return r.RG_INTEGER;if(n===vp)return r.RGBA_INTEGER;if(n===Ul||n===Ol||n===Nl||n===Fl)if(a===xe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ul)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ul)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ol)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xh||n===Sh||n===yh||n===Mh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eh||n===Th||n===bh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Eh||n===Th)return a===xe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===bh)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wh||n===Ah||n===Rh||n===Ch||n===Ph||n===Lh||n===Dh||n===Ih||n===Uh||n===Oh||n===Nh||n===Fh||n===Bh||n===kh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===wh)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ah)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rh)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ch)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ph)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lh)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dh)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ih)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uh)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oh)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nh)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fh)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bh)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kh)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bl||n===zh||n===Hh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Bl)return a===xe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fg||n===Vh||n===Gh||n===Wh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Bl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Vh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class Ky extends Wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ca extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zy={type:"move"};class hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zy)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ca;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Sn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new lr({vertexShader:Jy,fragmentShader:Qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fi(new fl(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class eM extends Hs{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new tM,p=e.getContextAttributes();let m=null,M=null;const S=[],x=[],A=new oe;let w=null;const E=new Wn;E.layers.enable(1),E.viewport=new Xe;const P=new Wn;P.layers.enable(2),P.viewport=new Xe;const y=[E,P],v=new Ky;v.layers.enable(1),v.layers.enable(2);let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=S[q];return et===void 0&&(et=new hc,S[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=S[q];return et===void 0&&(et=new hc,S[q]=et),et.getGripSpace()},this.getHand=function(q){let et=S[q];return et===void 0&&(et=new hc,S[q]=et),et.getHandSpace()};function L(q){const et=x.indexOf(q.inputSource);if(et===-1)return;const ut=S[et];ut!==void 0&&(ut.update(q.inputSource,q.frame,c||a),ut.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",X);for(let q=0;q<S.length;q++){const et=x[q];et!==null&&(x[q]=null,S[q].disconnect(et))}D=null,U=null,_.reset(),t.setRenderTarget(m),d=null,f=null,h=null,i=null,M=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",W),i.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Gr(d.framebufferWidth,d.framebufferHeight,{format:hi,type:or,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,ut=null,nt=null;p.depth&&(nt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?Ia:Rs,ut=p.stencil?Oa:ks);const Dt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(Dt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Gr(f.textureWidth,f.textureHeight,{format:hi,type:or,depthTexture:new Ip(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function X(q){for(let et=0;et<q.removed.length;et++){const ut=q.removed[et],nt=x.indexOf(ut);nt>=0&&(x[nt]=null,S[nt].disconnect(ut))}for(let et=0;et<q.added.length;et++){const ut=q.added[et];let nt=x.indexOf(ut);if(nt===-1){for(let Ct=0;Ct<S.length;Ct++)if(Ct>=x.length){x.push(ut),nt=Ct;break}else if(x[Ct]===null){x[Ct]=ut,nt=Ct;break}if(nt===-1)break}const Dt=S[nt];Dt&&Dt.connect(ut)}}const j=new Y,H=new Y;function F(q,et,ut){j.setFromMatrixPosition(et.matrixWorld),H.setFromMatrixPosition(ut.matrixWorld);const nt=j.distanceTo(H),Dt=et.projectionMatrix.elements,Ct=ut.projectionMatrix.elements,B=Dt[14]/(Dt[10]-1),Gt=Dt[14]/(Dt[10]+1),yt=(Dt[9]+1)/Dt[5],Et=(Dt[9]-1)/Dt[5],gt=(Dt[8]-1)/Dt[0],Ut=(Ct[8]+1)/Ct[0],Pt=B*gt,N=B*Ut,te=nt/(-gt+Ut),C=te*-gt;et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(C),q.translateZ(te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const T=B+te,G=Gt+te,Z=Pt-C,Q=N+(nt-C),tt=yt*Gt/G*T,mt=Et*Gt/G*T;q.projectionMatrix.makePerspective(Z,Q,tt,mt,T,G),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function J(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;_.texture!==null&&(q.near=_.depthNear,q.far=_.depthFar),v.near=P.near=E.near=q.near,v.far=P.far=E.far=q.far,(D!==v.near||U!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,U=v.far,E.near=D,E.far=U,P.near=D,P.far=U,E.updateProjectionMatrix(),P.updateProjectionMatrix(),q.updateProjectionMatrix());const et=q.parent,ut=v.cameras;J(v,et);for(let nt=0;nt<ut.length;nt++)J(ut[nt],et);ut.length===2?F(v,E,P):v.projectionMatrix.copy(E.projectionMatrix),R(q,v,et)};function R(q,et,ut){ut===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(ut.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=qc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null};let ot=null;function Lt(q,et){if(u=et.getViewerPose(c||a),g=et,u!==null){const ut=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let nt=!1;ut.length!==v.cameras.length&&(v.cameras.length=0,nt=!0);for(let Ct=0;Ct<ut.length;Ct++){const B=ut[Ct];let Gt=null;if(d!==null)Gt=d.getViewport(B);else{const Et=h.getViewSubImage(f,B);Gt=Et.viewport,Ct===0&&(t.setRenderTargetTextures(M,Et.colorTexture,f.ignoreDepthValues?void 0:Et.depthStencilTexture),t.setRenderTarget(M))}let yt=y[Ct];yt===void 0&&(yt=new Wn,yt.layers.enable(Ct),yt.viewport=new Xe,y[Ct]=yt),yt.matrix.fromArray(B.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(B.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),Ct===0&&(v.matrix.copy(yt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),nt===!0&&v.cameras.push(yt)}const Dt=i.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Ct=h.getDepthInformation(ut[0]);Ct&&Ct.isValid&&Ct.texture&&_.init(t,Ct,i.renderState)}}for(let ut=0;ut<S.length;ut++){const nt=x[ut],Dt=S[ut];nt!==null&&Dt!==void 0&&Dt.update(nt,et,c||a)}_.render(t,v),ot&&ot(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Kt=new Dp;Kt.setAnimationLoop(Lt),this.setAnimationLoop=function(q){ot=q},this.dispose=function(){}}}const Sr=new Ui,nM=new Ue;function iM(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Rp(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,S,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===xn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===xn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),S=M.envMap,x=M.envMapRotation;if(S&&(p.envMap.value=S,Sr.copy(x),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),p.envMapRotation.value.setFromMatrix4(nM.makeRotationFromEuler(Sr)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const A=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*A,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rM(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const x=S.program;n.uniformBlockBinding(M,x)}function c(M,S){let x=i[M.id];x===void 0&&(g(M),x=u(M),i[M.id]=x,M.addEventListener("dispose",p));const A=S.program;n.updateUBOMapping(M,A);const w=t.render.frame;s[M.id]!==w&&(f(M),s[M.id]=w)}function u(M){const S=h();M.__bindingPointIndex=S;const x=r.createBuffer(),A=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,x),x}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const S=i[M.id],x=M.uniforms,A=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let w=0,E=x.length;w<E;w++){const P=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,v=P.length;y<v;y++){const D=P[y];if(d(D,w,y,A)===!0){const U=D.__offset,L=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let X=0;X<L.length;X++){const j=L[X],H=_(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,r.bufferSubData(r.UNIFORM_BUFFER,U+W,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,W),W+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,S,x,A){const w=M.value,E=S+"_"+x;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{const P=A[E];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return A[E]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(M){const S=M.uniforms;let x=0;const A=16;for(let E=0,P=S.length;E<P;E++){const y=Array.isArray(S[E])?S[E]:[S[E]];for(let v=0,D=y.length;v<D;v++){const U=y[v],L=Array.isArray(U.value)?U.value:[U.value];for(let W=0,X=L.length;W<X;W++){const j=L[W],H=_(j),F=x%A;F!==0&&A-F<H.boundary&&(x+=A-F),U.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=H.storage}}}const w=x%A;return w>0&&(x+=A-w),M.__size=x,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function p(M){const S=M.target;S.removeEventListener("dispose",p);const x=a.indexOf(S.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function m(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class sM{constructor(t={}){const{canvas:e=Kg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this._useLegacyLights=!1,this.toneMapping=er,this.toneMappingExposure=1;const S=this;let x=!1,A=0,w=0,E=null,P=-1,y=null;const v=new Xe,D=new Xe;let U=null;const L=new he(0);let W=0,X=e.width,j=e.height,H=1,F=null,J=null;const R=new Xe(0,0,X,j),ot=new Xe(0,0,X,j);let Lt=!1;const Kt=new Lp;let q=!1,et=!1;const ut=new Ue,nt=new Y,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ct(){return E===null?H:1}let B=n;function Gt(b,O){return e.getContext(b,O)}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tu}`),e.addEventListener("webglcontextlost",I,!1),e.addEventListener("webglcontextrestored",$,!1),e.addEventListener("webglcontextcreationerror",K,!1),B===null){const O="webgl2";if(B=Gt(O,b),B===null)throw Gt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let yt,Et,gt,Ut,Pt,N,te,C,T,G,Z,Q,tt,mt,lt,it,It,rt,Mt,$t,_t,vt,Ot,Vt;function fe(){yt=new dS(B),yt.init(),vt=new jy(B,yt),Et=new aS(B,yt,t,vt),gt=new qy(B),Ut=new _S(B),Pt=new Iy,N=new $y(B,yt,gt,Pt,Et,vt,Ut),te=new lS(S),C=new fS(S),T=new M0(B),Ot=new rS(B,T),G=new pS(B,T,Ut,Ot),Z=new vS(B,G,T,Ut),Mt=new gS(B,Et,N),it=new oS(Pt),Q=new Dy(S,te,C,yt,Et,Ot,it),tt=new iM(S,Pt),mt=new Oy,lt=new Hy(yt),rt=new iS(S,te,C,gt,Z,f,l),It=new Yy(S,Z,Et),Vt=new rM(B,Ut,Et,gt),$t=new sS(B,yt,Ut),_t=new mS(B,yt,Ut),Ut.programs=Q.programs,S.capabilities=Et,S.extensions=yt,S.properties=Pt,S.renderLists=mt,S.shadowMap=It,S.state=gt,S.info=Ut}fe();const Nt=new eM(S,B);this.xr=Nt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=yt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=yt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(X,j,!1))},this.getSize=function(b){return b.set(X,j)},this.setSize=function(b,O,k=!0){if(Nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,j=O,e.width=Math.floor(b*H),e.height=Math.floor(O*H),k===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(X*H,j*H).floor()},this.setDrawingBufferSize=function(b,O,k){X=b,j=O,H=k,e.width=Math.floor(b*k),e.height=Math.floor(O*k),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(R)},this.setViewport=function(b,O,k,z){b.isVector4?R.set(b.x,b.y,b.z,b.w):R.set(b,O,k,z),gt.viewport(v.copy(R).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(ot)},this.setScissor=function(b,O,k,z){b.isVector4?ot.set(b.x,b.y,b.z,b.w):ot.set(b,O,k,z),gt.scissor(D.copy(ot).multiplyScalar(H).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(b){gt.setScissorTest(Lt=b)},this.setOpaqueSort=function(b){F=b},this.setTransparentSort=function(b){J=b},this.getClearColor=function(b){return b.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(b=!0,O=!0,k=!0){let z=0;if(b){let V=!1;if(E!==null){const st=E.texture.format;V=st===vp||st===gp||st===_p}if(V){const st=E.texture.type,ft=st===or||st===ks||st===fp||st===Oa||st===pp||st===mp,pt=rt.getClearColor(),At=rt.getClearAlpha(),Bt=pt.r,wt=pt.g,Tt=pt.b;ft?(d[0]=Bt,d[1]=wt,d[2]=Tt,d[3]=At,B.clearBufferuiv(B.COLOR,0,d)):(g[0]=Bt,g[1]=wt,g[2]=Tt,g[3]=At,B.clearBufferiv(B.COLOR,0,g))}else z|=B.COLOR_BUFFER_BIT}O&&(z|=B.DEPTH_BUFFER_BIT),k&&(z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",I,!1),e.removeEventListener("webglcontextrestored",$,!1),e.removeEventListener("webglcontextcreationerror",K,!1),mt.dispose(),lt.dispose(),Pt.dispose(),te.dispose(),C.dispose(),Z.dispose(),Ot.dispose(),Vt.dispose(),Q.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",ee),Nt.removeEventListener("sessionend",Rt),xt.stop()};function I(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const b=Ut.autoReset,O=It.enabled,k=It.autoUpdate,z=It.needsUpdate,V=It.type;fe(),Ut.autoReset=b,It.enabled=O,It.autoUpdate=k,It.needsUpdate=z,It.type=V}function K(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function at(b){const O=b.target;O.removeEventListener("dispose",at),ct(O)}function ct(b){Ht(b),Pt.remove(b)}function Ht(b){const O=Pt.get(b).programs;O!==void 0&&(O.forEach(function(k){Q.releaseProgram(k)}),b.isShaderMaterial&&Q.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,k,z,V,st){O===null&&(O=Dt);const ft=V.isMesh&&V.matrixWorld.determinant()<0,pt=ke(b,O,k,z,V);gt.setMaterial(z,ft);let At=k.index,Bt=1;if(z.wireframe===!0){if(At=G.getWireframeAttribute(k),At===void 0)return;Bt=2}const wt=k.drawRange,Tt=k.attributes.position;let ae=wt.start*Bt,Pe=(wt.start+wt.count)*Bt;st!==null&&(ae=Math.max(ae,st.start*Bt),Pe=Math.min(Pe,(st.start+st.count)*Bt)),At!==null?(ae=Math.max(ae,0),Pe=Math.min(Pe,At.count)):Tt!=null&&(ae=Math.max(ae,0),Pe=Math.min(Pe,Tt.count));const qe=Pe-ae;if(qe<0||qe===1/0)return;Ot.setup(V,z,pt,k,At);let nn,Wt=$t;if(At!==null&&(nn=T.get(At),Wt=_t,Wt.setIndex(nn)),V.isMesh)z.wireframe===!0?(gt.setLineWidth(z.wireframeLinewidth*Ct()),Wt.setMode(B.LINES)):Wt.setMode(B.TRIANGLES);else if(V.isLine){let Ft=z.linewidth;Ft===void 0&&(Ft=1),gt.setLineWidth(Ft*Ct()),V.isLineSegments?Wt.setMode(B.LINES):V.isLineLoop?Wt.setMode(B.LINE_LOOP):Wt.setMode(B.LINE_STRIP)}else V.isPoints?Wt.setMode(B.POINTS):V.isSprite&&Wt.setMode(B.TRIANGLES);if(V.isBatchedMesh)V._multiDrawInstances!==null?Wt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances):Wt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Wt.renderInstances(ae,qe,V.count);else if(k.isInstancedBufferGeometry){const Ft=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ni=Math.min(k.instanceCount,Ft);Wt.renderInstances(ae,qe,ni)}else Wt.render(ae,qe)};function re(b,O,k){b.transparent===!0&&b.side===Ai&&b.forceSinglePass===!1?(b.side=xn,b.needsUpdate=!0,Ee(b,O,k),b.side=ar,b.needsUpdate=!0,Ee(b,O,k),b.side=Ai):Ee(b,O,k)}this.compile=function(b,O,k=null){k===null&&(k=b),p=lt.get(k),p.init(O),M.push(p),k.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),b!==k&&b.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(S._useLegacyLights);const z=new Set;return b.traverse(function(V){const st=V.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const pt=st[ft];re(pt,k,V),z.add(pt)}else re(st,k,V),z.add(st)}),M.pop(),p=null,z},this.compileAsync=function(b,O,k=null){const z=this.compile(b,O,k);return new Promise(V=>{function st(){if(z.forEach(function(ft){Pt.get(ft).currentProgram.isReady()&&z.delete(ft)}),z.size===0){V(b);return}setTimeout(st,10)}yt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let ce=null;function _e(b){ce&&ce(b)}function ee(){xt.stop()}function Rt(){xt.start()}const xt=new Dp;xt.setAnimationLoop(_e),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(b){ce=b,Nt.setAnimationLoop(b),b===null?xt.stop():xt.start()},Nt.addEventListener("sessionstart",ee),Nt.addEventListener("sessionend",Rt),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(O),O=Nt.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,O,E),p=lt.get(b,M.length),p.init(O),M.push(p),ut.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Kt.setFromProjectionMatrix(ut),et=this.localClippingEnabled,q=it.init(this.clippingPlanes,et),_=mt.get(b,m.length),_.init(),m.push(_),ie(b,O,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(F,J);const k=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1;k&&rt.addToRenderList(_,b),this.info.render.frame++,q===!0&&it.beginShadows();const z=p.state.shadowsArray;It.render(z,b,O),q===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=_.opaque,st=_.transmissive;if(p.setupLights(S._useLegacyLights),O.isArrayCamera){const ft=O.cameras;if(st.length>0)for(let pt=0,At=ft.length;pt<At;pt++){const Bt=ft[pt];kt(V,st,b,Bt)}k&&rt.render(b);for(let pt=0,At=ft.length;pt<At;pt++){const Bt=ft[pt];ht(_,b,Bt,Bt.viewport)}}else st.length>0&&kt(V,st,b,O),k&&rt.render(b),ht(_,b,O);E!==null&&(N.updateMultisampleRenderTarget(E),N.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(S,b,O),Ot.resetDefaultState(),P=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],q===!0&&it.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ie(b,O,k,z){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Kt.intersectsSprite(b)){z&&nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ut);const ft=Z.update(b),pt=b.material;pt.visible&&_.push(b,ft,pt,k,nt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Kt.intersectsObject(b))){const ft=Z.update(b),pt=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),nt.copy(b.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),nt.copy(ft.boundingSphere.center)),nt.applyMatrix4(b.matrixWorld).applyMatrix4(ut)),Array.isArray(pt)){const At=ft.groups;for(let Bt=0,wt=At.length;Bt<wt;Bt++){const Tt=At[Bt],ae=pt[Tt.materialIndex];ae&&ae.visible&&_.push(b,ft,ae,k,nt.z,Tt)}}else pt.visible&&_.push(b,ft,pt,k,nt.z,null)}}const st=b.children;for(let ft=0,pt=st.length;ft<pt;ft++)ie(st[ft],O,k,z)}function ht(b,O,k,z){const V=b.opaque,st=b.transmissive,ft=b.transparent;p.setupLightsView(k),q===!0&&it.setGlobalState(S.clippingPlanes,k),z&&gt.viewport(v.copy(z)),V.length>0&&bt(V,O,k),st.length>0&&bt(st,O,k),ft.length>0&&bt(ft,O,k),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function kt(b,O,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Gr(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float")?cl:or,minFilter:Lr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const st=p.state.transmissionRenderTarget[z.id],ft=z.viewport||v;st.setSize(ft.z,ft.w);const pt=S.getRenderTarget();S.setRenderTarget(st),S.getClearColor(L),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear();const At=S.toneMapping;S.toneMapping=er;const Bt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),q===!0&&it.setGlobalState(S.clippingPlanes,z),bt(b,k,z),N.updateMultisampleRenderTarget(st),N.updateRenderTargetMipmap(st),yt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let Tt=0,ae=O.length;Tt<ae;Tt++){const Pe=O[Tt],qe=Pe.object,nn=Pe.geometry,Wt=Pe.material,Ft=Pe.group;if(Wt.side===Ai&&qe.layers.test(z.layers)){const ni=Wt.side;Wt.side=xn,Wt.needsUpdate=!0,zt(qe,k,z,nn,Wt,Ft),Wt.side=ni,Wt.needsUpdate=!0,wt=!0}}wt===!0&&(N.updateMultisampleRenderTarget(st),N.updateRenderTargetMipmap(st))}S.setRenderTarget(pt),S.setClearColor(L,W),Bt!==void 0&&(z.viewport=Bt),S.toneMapping=At}function bt(b,O,k){const z=O.isScene===!0?O.overrideMaterial:null;for(let V=0,st=b.length;V<st;V++){const ft=b[V],pt=ft.object,At=ft.geometry,Bt=z===null?ft.material:z,wt=ft.group;pt.layers.test(k.layers)&&zt(pt,O,k,At,Bt,wt)}}function zt(b,O,k,z,V,st){b.onBeforeRender(S,O,k,z,V,st),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(S,O,k,z,b,st),V.transparent===!0&&V.side===Ai&&V.forceSinglePass===!1?(V.side=xn,V.needsUpdate=!0,S.renderBufferDirect(k,O,z,V,b,st),V.side=ar,V.needsUpdate=!0,S.renderBufferDirect(k,O,z,V,b,st),V.side=Ai):S.renderBufferDirect(k,O,z,V,b,st),b.onAfterRender(S,O,k,z,V,st)}function Ee(b,O,k){O.isScene!==!0&&(O=Dt);const z=Pt.get(b),V=p.state.lights,st=p.state.shadowsArray,ft=V.state.version,pt=Q.getParameters(b,V.state,st,O,k),At=Q.getProgramCacheKey(pt);let Bt=z.programs;z.environment=b.isMeshStandardMaterial?O.environment:null,z.fog=O.fog,z.envMap=(b.isMeshStandardMaterial?C:te).get(b.envMap||z.environment),z.envMapRotation=z.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Bt===void 0&&(b.addEventListener("dispose",at),Bt=new Map,z.programs=Bt);let wt=Bt.get(At);if(wt!==void 0){if(z.currentProgram===wt&&z.lightsStateVersion===ft)return Se(b,pt),wt}else pt.uniforms=Q.getUniforms(b),b.onBuild(k,pt,S),b.onBeforeCompile(pt,S),wt=Q.acquireProgram(pt,At),Bt.set(At,wt),z.uniforms=pt.uniforms;const Tt=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Tt.clippingPlanes=it.uniform),Se(b,pt),z.needsLights=ge(b),z.lightsStateVersion=ft,z.needsLights&&(Tt.ambientLightColor.value=V.state.ambient,Tt.lightProbe.value=V.state.probe,Tt.directionalLights.value=V.state.directional,Tt.directionalLightShadows.value=V.state.directionalShadow,Tt.spotLights.value=V.state.spot,Tt.spotLightShadows.value=V.state.spotShadow,Tt.rectAreaLights.value=V.state.rectArea,Tt.ltc_1.value=V.state.rectAreaLTC1,Tt.ltc_2.value=V.state.rectAreaLTC2,Tt.pointLights.value=V.state.point,Tt.pointLightShadows.value=V.state.pointShadow,Tt.hemisphereLights.value=V.state.hemi,Tt.directionalShadowMap.value=V.state.directionalShadowMap,Tt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Tt.spotShadowMap.value=V.state.spotShadowMap,Tt.spotLightMatrix.value=V.state.spotLightMatrix,Tt.spotLightMap.value=V.state.spotLightMap,Tt.pointShadowMap.value=V.state.pointShadowMap,Tt.pointShadowMatrix.value=V.state.pointShadowMatrix),z.currentProgram=wt,z.uniformsList=null,wt}function Zt(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=No.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Se(b,O){const k=Pt.get(b);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.instancingMorph=O.instancingMorph,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function ke(b,O,k,z,V){O.isScene!==!0&&(O=Dt),N.resetTextureUnits();const st=O.fog,ft=z.isMeshStandardMaterial?O.environment:null,pt=E===null?S.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:hr,At=(z.isMeshStandardMaterial?C:te).get(z.envMap||ft),Bt=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,wt=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Tt=!!k.morphAttributes.position,ae=!!k.morphAttributes.normal,Pe=!!k.morphAttributes.color;let qe=er;z.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(qe=S.toneMapping);const nn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Wt=nn!==void 0?nn.length:0,Ft=Pt.get(z),ni=p.state.lights;if(q===!0&&(et===!0||b!==y)){const Bn=b===y&&z.id===P;it.setState(z,b,Bn)}let se=!1;z.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ni.state.version||Ft.outputColorSpace!==pt||V.isBatchedMesh&&Ft.batching===!1||!V.isBatchedMesh&&Ft.batching===!0||V.isInstancedMesh&&Ft.instancing===!1||!V.isInstancedMesh&&Ft.instancing===!0||V.isSkinnedMesh&&Ft.skinning===!1||!V.isSkinnedMesh&&Ft.skinning===!0||V.isInstancedMesh&&Ft.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ft.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ft.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ft.instancingMorph===!1&&V.morphTexture!==null||Ft.envMap!==At||z.fog===!0&&Ft.fog!==st||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==it.numPlanes||Ft.numIntersection!==it.numIntersection)||Ft.vertexAlphas!==Bt||Ft.vertexTangents!==wt||Ft.morphTargets!==Tt||Ft.morphNormals!==ae||Ft.morphColors!==Pe||Ft.toneMapping!==qe||Ft.morphTargetsCount!==Wt)&&(se=!0):(se=!0,Ft.__version=z.version);let fr=Ft.currentProgram;se===!0&&(fr=Ee(z,O,V));let Lu=!1,Gs=!1,_l=!1;const $e=fr.getUniforms(),Oi=Ft.uniforms;if(gt.useProgram(fr.program)&&(Lu=!0,Gs=!0,_l=!0),z.id!==P&&(P=z.id,Gs=!0),Lu||y!==b){$e.setValue(B,"projectionMatrix",b.projectionMatrix),$e.setValue(B,"viewMatrix",b.matrixWorldInverse);const Bn=$e.map.cameraPosition;Bn!==void 0&&Bn.setValue(B,nt.setFromMatrixPosition(b.matrixWorld)),Et.logarithmicDepthBuffer&&$e.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&$e.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Gs=!0,_l=!0)}if(V.isSkinnedMesh){$e.setOptional(B,V,"bindMatrix"),$e.setOptional(B,V,"bindMatrixInverse");const Bn=V.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),$e.setValue(B,"boneTexture",Bn.boneTexture,N))}V.isBatchedMesh&&($e.setOptional(B,V,"batchingTexture"),$e.setValue(B,"batchingTexture",V._matricesTexture,N));const gl=k.morphAttributes;if((gl.position!==void 0||gl.normal!==void 0||gl.color!==void 0)&&Mt.update(V,k,fr),(Gs||Ft.receiveShadow!==V.receiveShadow)&&(Ft.receiveShadow=V.receiveShadow,$e.setValue(B,"receiveShadow",V.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Oi.envMap.value=At,Oi.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&O.environment!==null&&(Oi.envMapIntensity.value=O.environmentIntensity),Gs&&($e.setValue(B,"toneMappingExposure",S.toneMappingExposure),Ft.needsLights&&ye(Oi,_l),st&&z.fog===!0&&tt.refreshFogUniforms(Oi,st),tt.refreshMaterialUniforms(Oi,z,H,j,p.state.transmissionRenderTarget[b.id]),No.upload(B,Zt(Ft),Oi,N)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(No.upload(B,Zt(Ft),Oi,N),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&$e.setValue(B,"center",V.center),$e.setValue(B,"modelViewMatrix",V.modelViewMatrix),$e.setValue(B,"normalMatrix",V.normalMatrix),$e.setValue(B,"modelMatrix",V.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Bn=z.uniformsGroups;for(let vl=0,sm=Bn.length;vl<sm;vl++){const Du=Bn[vl];Vt.update(Du,fr),Vt.bind(Du,fr)}}return fr}function ye(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function ge(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,O,k){Pt.get(b.texture).__webglTexture=O,Pt.get(b.depthTexture).__webglTexture=k;const z=Pt.get(b);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const k=Pt.get(b);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,k=0){E=b,A=O,w=k;let z=!0,V=null,st=!1,ft=!1;if(b){const At=Pt.get(b);At.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(B.FRAMEBUFFER,null),z=!1):At.__webglFramebuffer===void 0?N.setupRenderTarget(b):At.__hasExternalTextures&&N.rebindTextures(b,Pt.get(b.texture).__webglTexture,Pt.get(b.depthTexture).__webglTexture);const Bt=b.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(ft=!0);const wt=Pt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(wt[O])?V=wt[O][k]:V=wt[O],st=!0):b.samples>0&&N.useMultisampledRTT(b)===!1?V=Pt.get(b).__webglMultisampledFramebuffer:Array.isArray(wt)?V=wt[k]:V=wt,v.copy(b.viewport),D.copy(b.scissor),U=b.scissorTest}else v.copy(R).multiplyScalar(H).floor(),D.copy(ot).multiplyScalar(H).floor(),U=Lt;if(gt.bindFramebuffer(B.FRAMEBUFFER,V)&&z&&gt.drawBuffers(b,V),gt.viewport(v),gt.scissor(D),gt.setScissorTest(U),st){const At=Pt.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,At.__webglTexture,k)}else if(ft){const At=Pt.get(b.texture),Bt=O||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,At.__webglTexture,k||0,Bt)}P=-1},this.readRenderTargetPixels=function(b,O,k,z,V,st,ft){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(pt=pt[ft]),pt){gt.bindFramebuffer(B.FRAMEBUFFER,pt);try{const At=b.texture,Bt=At.format,wt=At.type;if(!Et.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-z&&k>=0&&k<=b.height-V&&B.readPixels(O,k,z,V,vt.convert(Bt),vt.convert(wt),st)}finally{const At=E!==null?Pt.get(E).__webglFramebuffer:null;gt.bindFramebuffer(B.FRAMEBUFFER,At)}}},this.copyFramebufferToTexture=function(b,O,k=0){const z=Math.pow(2,-k),V=Math.floor(O.image.width*z),st=Math.floor(O.image.height*z);N.setTexture2D(O,0),B.copyTexSubImage2D(B.TEXTURE_2D,k,0,0,b.x,b.y,V,st),gt.unbindTexture()},this.copyTextureToTexture=function(b,O,k,z=0){const V=O.image.width,st=O.image.height,ft=vt.convert(k.format),pt=vt.convert(k.type);N.setTexture2D(k,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment),O.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,z,b.x,b.y,V,st,ft,pt,O.image.data):O.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,z,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,ft,O.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,z,b.x,b.y,ft,pt,O.image),z===0&&k.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(b,O,k,z,V=0){const st=b.max.x-b.min.x,ft=b.max.y-b.min.y,pt=b.max.z-b.min.z,At=vt.convert(z.format),Bt=vt.convert(z.type);let wt;if(z.isData3DTexture)N.setTexture3D(z,0),wt=B.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)N.setTexture2DArray(z,0),wt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);const Tt=B.getParameter(B.UNPACK_ROW_LENGTH),ae=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Pe=B.getParameter(B.UNPACK_SKIP_PIXELS),qe=B.getParameter(B.UNPACK_SKIP_ROWS),nn=B.getParameter(B.UNPACK_SKIP_IMAGES),Wt=k.isCompressedTexture?k.mipmaps[V]:k.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Wt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Wt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,b.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,b.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,b.min.z),k.isDataTexture||k.isData3DTexture?B.texSubImage3D(wt,V,O.x,O.y,O.z,st,ft,pt,At,Bt,Wt.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(wt,V,O.x,O.y,O.z,st,ft,pt,At,Wt.data):B.texSubImage3D(wt,V,O.x,O.y,O.z,st,ft,pt,At,Bt,Wt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Tt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ae),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Pe),B.pixelStorei(B.UNPACK_SKIP_ROWS,qe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,nn),V===0&&z.generateMipmaps&&B.generateMipmap(wt),gt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?N.setTextureCube(b,0):b.isData3DTexture?N.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?N.setTexture2DArray(b,0):N.setTexture2D(b,0),gt.unbindTexture()},this.resetState=function(){A=0,w=0,E=null,gt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===bu?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===ul?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class aM extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class kp extends ka{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const tl=new Y,el=new Y,Nf=new Ue,Js=new Ep,Eo=new hl,fc=new Y,Ff=new Y;class oM extends yn{constructor(t=new _i,e=new kp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)tl.fromBufferAttribute(e,i-1),el.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=tl.distanceTo(el);t.setAttribute("lineDistance",new ti(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),Eo.radius+=s,t.ray.intersectsSphere(Eo)===!1)return;Nf.copy(i).invert(),Js.copy(t.ray).applyMatrix4(Nf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,p=g-1;_<p;_+=c){const m=u.getX(_),M=u.getX(_+1),S=To(this,t,Js,l,m,M);S&&e.push(S)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(d),m=To(this,t,Js,l,_,p);m&&e.push(m)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,p=g-1;_<p;_+=c){const m=To(this,t,Js,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=To(this,t,Js,l,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function To(r,t,e,n,i,s){const a=r.geometry.attributes.position;if(tl.fromBufferAttribute(a,i),el.fromBufferAttribute(a,s),e.distanceSqToSegment(tl,el,fc,Ff)>n)return;fc.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(fc);if(!(l<t.near||l>t.far))return{distance:l,point:Ff.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}class Ru extends _i{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new Y,u=new oe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ti(a,3)),this.setAttribute("normal",new ti(o,3)),this.setAttribute("uv",new ti(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ru(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class lM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Bf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Bf(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tu);/**
 * @license lucide v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=(r,t,e=[])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",r);return Object.keys(t).forEach(i=>{n.setAttribute(i,String(t[i]))}),e.length&&e.forEach(i=>{const s=zp(...i);n.appendChild(s)}),n};var cM=([r,t,e])=>zp(r,t,e);/**
 * @license lucide v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=r=>Array.from(r.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{}),hM=r=>typeof r=="string"?r:!r||!r.class?"":r.class&&typeof r.class=="string"?r.class.split(" "):r.class&&Array.isArray(r.class)?r.class:"",fM=r=>r.flatMap(hM).map(e=>e.trim()).filter(Boolean).filter((e,n,i)=>i.indexOf(e)===n).join(" "),dM=r=>r.replace(/(\w)(\w*)(_|-|\s*)/g,(t,e,n)=>e.toUpperCase()+n.toLowerCase()),kf=(r,{nameAttr:t,icons:e,attrs:n})=>{var g;const i=r.getAttribute(t);if(i==null)return;const s=dM(i),a=e[s];if(!a)return console.warn(`${r.outerHTML} icon name was not found in the provided icons object.`);const o=uM(r),[l,c,u]=a,h={...c,"data-lucide":i,...n,...o},f=fM(["lucide",`lucide-${i}`,o,n]);f&&Object.assign(h,{class:f});const d=cM([l,h,u]);return(g=r.parentNode)==null?void 0:g.replaceChild(d,r)};/**
 * @license lucide v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=["svg",Hp,[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]]];/**
 * @license lucide v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=["svg",Hp,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=({icons:r={},nameAttr:t="data-lucide",attrs:e={}}={})=>{if(!Object.values(r).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${t}]`);if(Array.from(n).forEach(i=>kf(i,{nameAttr:t,icons:r,attrs:e})),t==="data-lucide"){const i=document.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(s=>kf(s,{nameAttr:"icon-name",icons:r,attrs:e})))}};function pl(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function gM(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function ml(r,t,e){return t&&gM(r.prototype,t),r}function vM(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function zf(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),e.push.apply(e,n)}return e}function dc(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?zf(Object(e),!0).forEach(function(n){vM(r,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):zf(Object(e)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(e,n))})}return r}function Vp(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&jc(r,t)}function ei(r){return ei=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ei(r)}function jc(r,t){return jc=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},jc(r,t)}function xM(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Gp(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function SM(r,t){return t&&(typeof t=="object"||typeof t=="function")?t:Gp(r)}function Wp(r){var t=xM();return function(){var n=ei(r),i;if(t){var s=ei(this).constructor;i=Reflect.construct(n,arguments,s)}else i=n.apply(this,arguments);return SM(this,i)}}function yM(r,t){for(;!Object.prototype.hasOwnProperty.call(r,t)&&(r=ei(r),r!==null););return r}function Li(r,t,e){return typeof Reflect<"u"&&Reflect.get?Li=Reflect.get:Li=function(i,s,a){var o=yM(i,s);if(o){var l=Object.getOwnPropertyDescriptor(o,s);return l.get?l.get.call(a):l.value}},Li(r,t,e||r)}function vs(r,t){return TM(r)||wM(r,t)||Xp(r,t)||RM()}function MM(r){return EM(r)||bM(r)||Xp(r)||AM()}function EM(r){if(Array.isArray(r))return Kc(r)}function TM(r){if(Array.isArray(r))return r}function bM(r){if(typeof Symbol<"u"&&Symbol.iterator in Object(r))return Array.from(r)}function wM(r,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var e=[],n=!0,i=!1,s=void 0;try{for(var a=r[Symbol.iterator](),o;!(n=(o=a.next()).done)&&(e.push(o.value),!(t&&e.length===t));n=!0);}catch(l){i=!0,s=l}finally{try{!n&&a.return!=null&&a.return()}finally{if(i)throw s}}return e}}function Xp(r,t){if(r){if(typeof r=="string")return Kc(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Kc(r,t)}}function Kc(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function AM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function RM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ps={el:document,name:"scroll",offset:[0,0],repeat:!1,smooth:!1,initPosition:{x:0,y:0},direction:"vertical",gestureDirection:"vertical",reloadOnContextChange:!1,lerp:.1,class:"is-inview",scrollbarContainer:!1,scrollbarClass:"c-scrollbar",scrollingClass:"has-scroll-scrolling",draggingClass:"has-scroll-dragging",smoothClass:"has-scroll-smooth",initClass:"has-scroll-init",getSpeed:!1,getDirection:!1,scrollFromAnywhere:!1,multiplier:1,firefoxMultiplier:50,touchMultiplier:2,resetNativeScroll:!0,tablet:{smooth:!1,direction:"vertical",gestureDirection:"vertical",breakpoint:1024},smartphone:{smooth:!1,direction:"vertical",gestureDirection:"vertical"}},Yp=function(){function r(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};pl(this,r),Object.assign(this,Ps,t),this.smartphone=Ps.smartphone,t.smartphone&&Object.assign(this.smartphone,t.smartphone),this.tablet=Ps.tablet,t.tablet&&Object.assign(this.tablet,t.tablet),this.namespace="locomotive",this.html=document.documentElement,this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.els={},this.currentElements={},this.listeners={},this.hasScrollTicking=!1,this.hasCallEventSet=!1,this.checkScroll=this.checkScroll.bind(this),this.checkResize=this.checkResize.bind(this),this.checkEvent=this.checkEvent.bind(this),this.instance={scroll:{x:0,y:0},limit:{x:this.html.offsetWidth,y:this.html.offsetHeight},currentElements:this.currentElements},this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",this.isMobile&&(this.direction=this[this.context].direction),this.direction==="horizontal"?this.directionAxis="x":this.directionAxis="y",this.getDirection&&(this.instance.direction=null),this.getDirection&&(this.instance.speed=0),this.html.classList.add(this.initClass),window.addEventListener("resize",this.checkResize,!1)}return ml(r,[{key:"init",value:function(){this.initEvents()}},{key:"checkScroll",value:function(){this.dispatchScroll()}},{key:"checkResize",value:function(){var e=this;this.resizeTick||(this.resizeTick=!0,requestAnimationFrame(function(){e.resize(),e.resizeTick=!1}))}},{key:"resize",value:function(){}},{key:"checkContext",value:function(){if(this.reloadOnContextChange){this.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1||this.windowWidth<this.tablet.breakpoint,this.isTablet=this.isMobile&&this.windowWidth>=this.tablet.breakpoint;var e=this.context;if(this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",e!=this.context){var n=e=="desktop"?this.smooth:this[e].smooth,i=this.context=="desktop"?this.smooth:this[this.context].smooth;n!=i&&window.location.reload()}}}},{key:"initEvents",value:function(){var e=this;this.scrollToEls=this.el.querySelectorAll("[data-".concat(this.name,"-to]")),this.setScrollTo=this.setScrollTo.bind(this),this.scrollToEls.forEach(function(n){n.addEventListener("click",e.setScrollTo,!1)})}},{key:"setScrollTo",value:function(e){e.preventDefault(),this.scrollTo(e.currentTarget.getAttribute("data-".concat(this.name,"-href"))||e.currentTarget.getAttribute("href"),{offset:e.currentTarget.getAttribute("data-".concat(this.name,"-offset"))})}},{key:"addElements",value:function(){}},{key:"detectElements",value:function(e){var n=this,i=this.instance.scroll.y,s=i+this.windowHeight,a=this.instance.scroll.x,o=a+this.windowWidth;Object.entries(this.els).forEach(function(l){var c=vs(l,2),u=c[0],h=c[1];if(h&&(!h.inView||e)&&(n.direction==="horizontal"?o>=h.left&&a<h.right&&n.setInView(h,u):s>=h.top&&i<h.bottom&&n.setInView(h,u)),h&&h.inView)if(n.direction==="horizontal"){var f=h.right-h.left;h.progress=(n.instance.scroll.x-(h.left-n.windowWidth))/(f+n.windowWidth),(o<h.left||a>h.right)&&n.setOutOfView(h,u)}else{var d=h.bottom-h.top;h.progress=(n.instance.scroll.y-(h.top-n.windowHeight))/(d+n.windowHeight),(s<h.top||i>h.bottom)&&n.setOutOfView(h,u)}}),this.hasScrollTicking=!1}},{key:"setInView",value:function(e,n){this.els[n].inView=!0,e.el.classList.add(e.class),this.currentElements[n]=e,e.call&&this.hasCallEventSet&&(this.dispatchCall(e,"enter"),e.repeat||(this.els[n].call=!1))}},{key:"setOutOfView",value:function(e,n){var i=this;this.els[n].inView=!1,Object.keys(this.currentElements).forEach(function(s){s===n&&delete i.currentElements[s]}),e.call&&this.hasCallEventSet&&this.dispatchCall(e,"exit"),e.repeat&&e.el.classList.remove(e.class)}},{key:"dispatchCall",value:function(e,n){this.callWay=n,this.callValue=e.call.split(",").map(function(s){return s.trim()}),this.callObj=e,this.callValue.length==1&&(this.callValue=this.callValue[0]);var i=new Event(this.namespace+"call");this.el.dispatchEvent(i)}},{key:"dispatchScroll",value:function(){var e=new Event(this.namespace+"scroll");this.el.dispatchEvent(e)}},{key:"setEvents",value:function(e,n){this.listeners[e]||(this.listeners[e]=[]);var i=this.listeners[e];i.push(n),i.length===1&&this.el.addEventListener(this.namespace+e,this.checkEvent,!1),e==="call"&&(this.hasCallEventSet=!0,this.detectElements(!0))}},{key:"unsetEvents",value:function(e,n){if(this.listeners[e]){var i=this.listeners[e],s=i.indexOf(n);s<0||(i.splice(s,1),i.index===0&&this.el.removeEventListener(this.namespace+e,this.checkEvent,!1))}}},{key:"checkEvent",value:function(e){var n=this,i=e.type.replace(this.namespace,""),s=this.listeners[i];!s||s.length===0||s.forEach(function(a){switch(i){case"scroll":return a(n.instance);case"call":return a(n.callValue,n.callWay,n.callObj);default:return a()}})}},{key:"startScroll",value:function(){}},{key:"stopScroll",value:function(){}},{key:"setScroll",value:function(e,n){this.instance.scroll={x:0,y:0}}},{key:"destroy",value:function(){var e=this;window.removeEventListener("resize",this.checkResize,!1),Object.keys(this.listeners).forEach(function(n){e.el.removeEventListener(e.namespace+n,e.checkEvent,!1)}),this.listeners={},this.scrollToEls.forEach(function(n){n.removeEventListener("click",e.setScrollTo,!1)}),this.html.classList.remove(this.initClass)}}]),r}(),CM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qp(r,t){return t={exports:{}},r(t,t.exports),t.exports}var $p=qp(function(r,t){(function(){function e(){var n=window,i=document;if("scrollBehavior"in i.documentElement.style&&n.__forceSmoothScrollPolyfill__!==!0)return;var s=n.HTMLElement||n.Element,a=468,o={scroll:n.scroll||n.scrollTo,scrollBy:n.scrollBy,elementScroll:s.prototype.scroll||h,scrollIntoView:s.prototype.scrollIntoView},l=n.performance&&n.performance.now?n.performance.now.bind(n.performance):Date.now;function c(x){var A=["MSIE ","Trident/","Edge/"];return new RegExp(A.join("|")).test(x)}var u=c(n.navigator.userAgent)?1:0;function h(x,A){this.scrollLeft=x,this.scrollTop=A}function f(x){return .5*(1-Math.cos(Math.PI*x))}function d(x){if(x===null||typeof x!="object"||x.behavior===void 0||x.behavior==="auto"||x.behavior==="instant")return!0;if(typeof x=="object"&&x.behavior==="smooth")return!1;throw new TypeError("behavior member of ScrollOptions "+x.behavior+" is not a valid value for enumeration ScrollBehavior.")}function g(x,A){if(A==="Y")return x.clientHeight+u<x.scrollHeight;if(A==="X")return x.clientWidth+u<x.scrollWidth}function _(x,A){var w=n.getComputedStyle(x,null)["overflow"+A];return w==="auto"||w==="scroll"}function p(x){var A=g(x,"Y")&&_(x,"Y"),w=g(x,"X")&&_(x,"X");return A||w}function m(x){for(;x!==i.body&&p(x)===!1;)x=x.parentNode||x.host;return x}function M(x){var A=l(),w,E,P,y=(A-x.startTime)/a;y=y>1?1:y,w=f(y),E=x.startX+(x.x-x.startX)*w,P=x.startY+(x.y-x.startY)*w,x.method.call(x.scrollable,E,P),(E!==x.x||P!==x.y)&&n.requestAnimationFrame(M.bind(n,x))}function S(x,A,w){var E,P,y,v,D=l();x===i.body?(E=n,P=n.scrollX||n.pageXOffset,y=n.scrollY||n.pageYOffset,v=o.scroll):(E=x,P=x.scrollLeft,y=x.scrollTop,v=h),M({scrollable:E,method:v,startTime:D,startX:P,startY:y,x:A,y:w})}n.scroll=n.scrollTo=function(){if(arguments[0]!==void 0){if(d(arguments[0])===!0){o.scroll.call(n,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:n.scrollX||n.pageXOffset,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:n.scrollY||n.pageYOffset);return}S.call(n,i.body,arguments[0].left!==void 0?~~arguments[0].left:n.scrollX||n.pageXOffset,arguments[0].top!==void 0?~~arguments[0].top:n.scrollY||n.pageYOffset)}},n.scrollBy=function(){if(arguments[0]!==void 0){if(d(arguments[0])){o.scrollBy.call(n,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:0,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:0);return}S.call(n,i.body,~~arguments[0].left+(n.scrollX||n.pageXOffset),~~arguments[0].top+(n.scrollY||n.pageYOffset))}},s.prototype.scroll=s.prototype.scrollTo=function(){if(arguments[0]!==void 0){if(d(arguments[0])===!0){if(typeof arguments[0]=="number"&&arguments[1]===void 0)throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left:typeof arguments[0]!="object"?~~arguments[0]:this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top:arguments[1]!==void 0?~~arguments[1]:this.scrollTop);return}var x=arguments[0].left,A=arguments[0].top;S.call(this,this,typeof x>"u"?this.scrollLeft:~~x,typeof A>"u"?this.scrollTop:~~A)}},s.prototype.scrollBy=function(){if(arguments[0]!==void 0){if(d(arguments[0])===!0){o.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},s.prototype.scrollIntoView=function(){if(d(arguments[0])===!0){o.scrollIntoView.call(this,arguments[0]===void 0?!0:arguments[0]);return}var x=m(this),A=x.getBoundingClientRect(),w=this.getBoundingClientRect();x!==i.body?(S.call(this,x,x.scrollLeft+w.left-A.left,x.scrollTop+w.top-A.top),n.getComputedStyle(x).position!=="fixed"&&n.scrollBy({left:A.left,top:A.top,behavior:"smooth"})):n.scrollBy({left:w.left,top:w.top,behavior:"smooth"})}}r.exports={polyfill:e}})()});$p.polyfill;var PM=function(r){Vp(e,r);var t=Wp(e);function e(){var n,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pl(this,e),n=t.call(this,i),n.resetNativeScroll&&(history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0)),window.addEventListener("scroll",n.checkScroll,!1),window.smoothscrollPolyfill===void 0&&(window.smoothscrollPolyfill=$p,window.smoothscrollPolyfill.polyfill()),n}return ml(e,[{key:"init",value:function(){this.instance.scroll.y=window.pageYOffset,this.addElements(),this.detectElements(),Li(ei(e.prototype),"init",this).call(this)}},{key:"checkScroll",value:function(){var i=this;Li(ei(e.prototype),"checkScroll",this).call(this),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.instance.scroll.y=window.pageYOffset,Object.entries(this.els).length&&(this.hasScrollTicking||(requestAnimationFrame(function(){i.detectElements()}),this.hasScrollTicking=!0))}},{key:"addDirection",value:function(){window.pageYOffset>this.instance.scroll.y?this.instance.direction!=="down"&&(this.instance.direction="down"):window.pageYOffset<this.instance.scroll.y&&this.instance.direction!=="up"&&(this.instance.direction="up")}},{key:"addSpeed",value:function(){window.pageYOffset!=this.instance.scroll.y?this.instance.speed=(window.pageYOffset-this.instance.scroll.y)/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"resize",value:function(){Object.entries(this.els).length&&(this.windowHeight=window.innerHeight,this.updateElements())}},{key:"addElements",value:function(){var i=this;this.els={};var s=this.el.querySelectorAll("[data-"+this.name+"]");s.forEach(function(a,o){a.getBoundingClientRect();var l=a.dataset[i.name+"Class"]||i.class,c=typeof a.dataset[i.name+"Id"]=="string"?a.dataset[i.name+"Id"]:o,u,h,f=typeof a.dataset[i.name+"Offset"]=="string"?a.dataset[i.name+"Offset"].split(","):i.offset,d=a.dataset[i.name+"Repeat"],g=a.dataset[i.name+"Call"],_=a.dataset[i.name+"Target"],p;_!==void 0?p=document.querySelector("".concat(_)):p=a;var m=p.getBoundingClientRect();u=m.top+i.instance.scroll.y,h=m.left+i.instance.scroll.x;var M=u+p.offsetHeight,S=h+p.offsetWidth;d=="false"?d=!1:d!=null?d=!0:d=i.repeat;var x=i.getRelativeOffset(f);u=u+x[0],M=M-x[1];var A={el:a,targetEl:p,id:c,class:l,top:u,bottom:M,left:h,right:S,offset:f,progress:0,repeat:d,inView:!1,call:g};i.els[c]=A,a.classList.contains(l)&&i.setInView(i.els[c],c)})}},{key:"updateElements",value:function(){var i=this;Object.entries(this.els).forEach(function(s){var a=vs(s,2),o=a[0],l=a[1],c=l.targetEl.getBoundingClientRect().top+i.instance.scroll.y,u=c+l.targetEl.offsetHeight,h=i.getRelativeOffset(l.offset);i.els[o].top=c+h[0],i.els[o].bottom=u-h[1]}),this.hasScrollTicking=!1}},{key:"getRelativeOffset",value:function(i){var s=[0,0];if(i)for(var a=0;a<i.length;a++)typeof i[a]=="string"?i[a].includes("%")?s[a]=parseInt(i[a].replace("%","")*this.windowHeight/100):s[a]=parseInt(i[a]):s[a]=i[a];return s}},{key:"scrollTo",value:function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=parseInt(s.offset)||0,o=s.callback?s.callback:!1;if(typeof i=="string"){if(i==="top")i=this.html;else if(i==="bottom")i=this.html.offsetHeight-window.innerHeight;else if(i=document.querySelector(i),!i)return}else if(typeof i=="number")i=parseInt(i);else if(!(i&&i.tagName)){console.warn("`target` parameter is not valid");return}typeof i!="number"?a=i.getBoundingClientRect().top+a+this.instance.scroll.y:a=i+a;var l=function(){return parseInt(window.pageYOffset)===parseInt(a)};if(o)if(l()){o();return}else{var c=function u(){l()&&(window.removeEventListener("scroll",u),o())};window.addEventListener("scroll",c)}window.scrollTo({top:a,behavior:s.duration===0?"auto":"smooth"})}},{key:"update",value:function(){this.addElements(),this.detectElements()}},{key:"destroy",value:function(){Li(ei(e.prototype),"destroy",this).call(this),window.removeEventListener("scroll",this.checkScroll,!1)}}]),e}(Yp);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Hf=Object.getOwnPropertySymbols,LM=Object.prototype.hasOwnProperty,DM=Object.prototype.propertyIsEnumerable;function IM(r){if(r==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function UM(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de",Object.getOwnPropertyNames(r)[0]==="5")return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;var n=Object.getOwnPropertyNames(t).map(function(s){return t[s]});if(n.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var OM=UM()?Object.assign:function(r,t){for(var e,n=IM(r),i,s=1;s<arguments.length;s++){e=Object(arguments[s]);for(var a in e)LM.call(e,a)&&(n[a]=e[a]);if(Hf){i=Hf(e);for(var o=0;o<i.length;o++)DM.call(e,i[o])&&(n[i[o]]=e[i[o]])}}return n};function jp(){}jp.prototype={on:function(r,t,e){var n=this.e||(this.e={});return(n[r]||(n[r]=[])).push({fn:t,ctx:e}),this},once:function(r,t,e){var n=this;function i(){n.off(r,i),t.apply(e,arguments)}return i._=t,this.on(r,i,e)},emit:function(r){var t=[].slice.call(arguments,1),e=((this.e||(this.e={}))[r]||[]).slice(),n=0,i=e.length;for(n;n<i;n++)e[n].fn.apply(e[n].ctx,t);return this},off:function(r,t){var e=this.e||(this.e={}),n=e[r],i=[];if(n&&t)for(var s=0,a=n.length;s<a;s++)n[s].fn!==t&&n[s].fn._!==t&&i.push(n[s]);return i.length?e[r]=i:delete e[r],this}};var NM=jp,FM=qp(function(r,t){(function(){var e;e=t!==null?t:this,e.Lethargy=function(){function n(i,s,a,o){this.stability=i!=null?Math.abs(i):8,this.sensitivity=s!=null?1+Math.abs(s):100,this.tolerance=a!=null?1+Math.abs(a):1.1,this.delay=o??150,this.lastUpDeltas=(function(){var l,c,u;for(u=[],l=1,c=this.stability*2;1<=c?l<=c:l>=c;1<=c?l++:l--)u.push(null);return u}).call(this),this.lastDownDeltas=(function(){var l,c,u;for(u=[],l=1,c=this.stability*2;1<=c?l<=c:l>=c;1<=c?l++:l--)u.push(null);return u}).call(this),this.deltasTimestamp=(function(){var l,c,u;for(u=[],l=1,c=this.stability*2;1<=c?l<=c:l>=c;1<=c?l++:l--)u.push(null);return u}).call(this)}return n.prototype.check=function(i){var s;return i=i.originalEvent||i,i.wheelDelta!=null?s=i.wheelDelta:i.deltaY!=null?s=i.deltaY*-40:(i.detail!=null||i.detail===0)&&(s=i.detail*-40),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),s>0?(this.lastUpDeltas.push(s),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(s),this.lastDownDeltas.shift(),this.isInertia(-1))},n.prototype.isInertia=function(i){var s,a,o,l,c,u,h;return s=i===-1?this.lastDownDeltas:this.lastUpDeltas,s[0]===null?i:this.deltasTimestamp[this.stability*2-2]+this.delay>Date.now()&&s[0]===s[this.stability*2-1]?!1:(o=s.slice(0,this.stability),a=s.slice(this.stability,this.stability*2),h=o.reduce(function(f,d){return f+d}),c=a.reduce(function(f,d){return f+d}),u=h/o.length,l=c/a.length,Math.abs(u)<Math.abs(l*this.tolerance)&&this.sensitivity<Math.abs(l)?i:!1)},n.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},n.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},n}()}).call(CM)}),Cn=function(){return{hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}}(),BM=Object.prototype.toString,kM=Object.prototype.hasOwnProperty,zM=function(r){if(!r)return console.warn("bindAll requires at least one argument.");var t=Array.prototype.slice.call(arguments,1);if(t.length===0)for(var e in r)kM.call(r,e)&&typeof r[e]=="function"&&BM.call(r[e])=="[object Function]"&&t.push(e);for(var n=0;n<t.length;n++){var i=t[n];r[i]=HM(r[i],r)}};function HM(r,t){return function(){return r.apply(t,arguments)}}var VM=FM.Lethargy,kr="virtualscroll",GM=Fn,Qs={LEFT:37,UP:38,RIGHT:39,DOWN:40,SPACE:32};function Fn(r){zM(this,"_onWheel","_onMouseWheel","_onTouchStart","_onTouchMove","_onKeyDown"),this.el=window,r&&r.el&&(this.el=r.el,delete r.el),this.options=OM({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",limitInertia:!1,useKeyboard:!0,useTouch:!0},r),this.options.limitInertia&&(this._lethargy=new VM),this._emitter=new NM,this._event={y:0,x:0,deltaX:0,deltaY:0},this.touchStartX=null,this.touchStartY=null,this.bodyTouchAction=null,this.options.passive!==void 0&&(this.listenerOptions={passive:this.options.passive})}Fn.prototype._notify=function(r){var t=this._event;t.x+=t.deltaX,t.y+=t.deltaY,this._emitter.emit(kr,{x:t.x,y:t.y,deltaX:t.deltaX,deltaY:t.deltaY,originalEvent:r})};Fn.prototype._onWheel=function(r){var t=this.options;if(!(this._lethargy&&this._lethargy.check(r)===!1)){var e=this._event;e.deltaX=r.wheelDeltaX||r.deltaX*-1,e.deltaY=r.wheelDeltaY||r.deltaY*-1,Cn.isFirefox&&r.deltaMode==1&&(e.deltaX*=t.firefoxMultiplier,e.deltaY*=t.firefoxMultiplier),e.deltaX*=t.mouseMultiplier,e.deltaY*=t.mouseMultiplier,this._notify(r)}};Fn.prototype._onMouseWheel=function(r){if(!(this.options.limitInertia&&this._lethargy.check(r)===!1)){var t=this._event;t.deltaX=r.wheelDeltaX?r.wheelDeltaX:0,t.deltaY=r.wheelDeltaY?r.wheelDeltaY:r.wheelDelta,this._notify(r)}};Fn.prototype._onTouchStart=function(r){var t=r.targetTouches?r.targetTouches[0]:r;this.touchStartX=t.pageX,this.touchStartY=t.pageY};Fn.prototype._onTouchMove=function(r){var t=this.options;t.preventTouch&&!r.target.classList.contains(t.unpreventTouchClass)&&r.preventDefault();var e=this._event,n=r.targetTouches?r.targetTouches[0]:r;e.deltaX=(n.pageX-this.touchStartX)*t.touchMultiplier,e.deltaY=(n.pageY-this.touchStartY)*t.touchMultiplier,this.touchStartX=n.pageX,this.touchStartY=n.pageY,this._notify(r)};Fn.prototype._onKeyDown=function(r){var t=this._event;t.deltaX=t.deltaY=0;var e=window.innerHeight-40;switch(r.keyCode){case Qs.LEFT:case Qs.UP:t.deltaY=this.options.keyStep;break;case Qs.RIGHT:case Qs.DOWN:t.deltaY=-this.options.keyStep;break;case r.shiftKey:t.deltaY=e;break;case Qs.SPACE:t.deltaY=-e;break;default:return}this._notify(r)};Fn.prototype._bind=function(){Cn.hasWheelEvent&&this.el.addEventListener("wheel",this._onWheel,this.listenerOptions),Cn.hasMouseWheelEvent&&this.el.addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),Cn.hasTouch&&this.options.useTouch&&(this.el.addEventListener("touchstart",this._onTouchStart,this.listenerOptions),this.el.addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),Cn.hasPointer&&Cn.hasTouchWin&&(this.bodyTouchAction=document.body.style.msTouchAction,document.body.style.msTouchAction="none",this.el.addEventListener("MSPointerDown",this._onTouchStart,!0),this.el.addEventListener("MSPointerMove",this._onTouchMove,!0)),Cn.hasKeyDown&&this.options.useKeyboard&&document.addEventListener("keydown",this._onKeyDown)};Fn.prototype._unbind=function(){Cn.hasWheelEvent&&this.el.removeEventListener("wheel",this._onWheel),Cn.hasMouseWheelEvent&&this.el.removeEventListener("mousewheel",this._onMouseWheel),Cn.hasTouch&&(this.el.removeEventListener("touchstart",this._onTouchStart),this.el.removeEventListener("touchmove",this._onTouchMove)),Cn.hasPointer&&Cn.hasTouchWin&&(document.body.style.msTouchAction=this.bodyTouchAction,this.el.removeEventListener("MSPointerDown",this._onTouchStart,!0),this.el.removeEventListener("MSPointerMove",this._onTouchMove,!0)),Cn.hasKeyDown&&this.options.useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)};Fn.prototype.on=function(r,t){this._emitter.on(kr,r,t);var e=this._emitter.e;e&&e[kr]&&e[kr].length===1&&this._bind()};Fn.prototype.off=function(r,t){this._emitter.off(kr,r,t);var e=this._emitter.e;(!e[kr]||e[kr].length<=0)&&this._unbind()};Fn.prototype.reset=function(){var r=this._event;r.x=0,r.y=0};Fn.prototype.destroy=function(){this._emitter.off(),this._unbind()};function pc(r,t,e){return(1-e)*r+e*t}function zn(r){var t={};if(window.getComputedStyle){var e=getComputedStyle(r),n=e.transform||e.webkitTransform||e.mozTransform,i=n.match(/^matrix3d\((.+)\)$/);return i?(t.x=i?parseFloat(i[1].split(", ")[12]):0,t.y=i?parseFloat(i[1].split(", ")[13]):0):(i=n.match(/^matrix\((.+)\)$/),t.x=i?parseFloat(i[1].split(", ")[4]):0,t.y=i?parseFloat(i[1].split(", ")[5]):0),t}}function mc(r){for(var t=[];r&&r!==document;r=r.parentNode)t.push(r);return t}var WM=4,XM=.001,YM=1e-7,qM=10,ua=11,bo=1/(ua-1),$M=typeof Float32Array=="function";function Kp(r,t){return 1-3*t+3*r}function Zp(r,t){return 3*t-6*r}function Jp(r){return 3*r}function nl(r,t,e){return((Kp(t,e)*r+Zp(t,e))*r+Jp(t))*r}function Qp(r,t,e){return 3*Kp(t,e)*r*r+2*Zp(t,e)*r+Jp(t)}function jM(r,t,e,n,i){var s,a,o=0;do a=t+(e-t)/2,s=nl(a,n,i)-r,s>0?e=a:t=a;while(Math.abs(s)>YM&&++o<qM);return a}function KM(r,t,e,n){for(var i=0;i<WM;++i){var s=Qp(t,e,n);if(s===0)return t;var a=nl(t,e,n)-r;t-=a/s}return t}function ZM(r){return r}var JM=function(t,e,n,i){if(!(0<=t&&t<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&n===i)return ZM;for(var s=$M?new Float32Array(ua):new Array(ua),a=0;a<ua;++a)s[a]=nl(a*bo,t,n);function o(l){for(var c=0,u=1,h=ua-1;u!==h&&s[u]<=l;++u)c+=bo;--u;var f=(l-s[u])/(s[u+1]-s[u]),d=c+f*bo,g=Qp(d,t,n);return g>=XM?KM(l,d,t,n):g===0?d:jM(l,c,c+bo,t,n)}return function(c){return c===0?0:c===1?1:nl(o(c),e,i)}},Mi={UP:38,DOWN:40,SPACE:32,TAB:9,PAGEUP:33,PAGEDOWN:34,HOME:36,END:35},QM=function(r){Vp(e,r);var t=Wp(e);function e(){var n,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pl(this,e),history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0),n=t.call(this,i),n.inertia&&(n.lerp=n.inertia*.1),n.isScrolling=!1,n.isDraggingScrollbar=!1,n.isTicking=!1,n.hasScrollTicking=!1,n.parallaxElements={},n.stop=!1,n.scrollbarContainer=i.scrollbarContainer,n.checkKey=n.checkKey.bind(Gp(n)),window.addEventListener("keydown",n.checkKey,!1),n}return ml(e,[{key:"init",value:function(){var i=this;this.html.classList.add(this.smoothClass),this.html.setAttribute("data-".concat(this.name,"-direction"),this.direction),this.instance=dc({delta:{x:this.initPosition.x,y:this.initPosition.y},scroll:{x:this.initPosition.x,y:this.initPosition.y}},this.instance),this.vs=new GM({el:this.scrollFromAnywhere?document:this.el,mouseMultiplier:navigator.platform.indexOf("Win")>-1?1:.4,firefoxMultiplier:this.firefoxMultiplier,touchMultiplier:this.touchMultiplier,useKeyboard:!1,passive:!0}),this.vs.on(function(s){i.stop||i.isDraggingScrollbar||requestAnimationFrame(function(){i.updateDelta(s),i.isScrolling||i.startScrolling()})}),this.setScrollLimit(),this.initScrollBar(),this.addSections(),this.addElements(),this.checkScroll(!0),this.transformElements(!0,!0),Li(ei(e.prototype),"init",this).call(this)}},{key:"setScrollLimit",value:function(){if(this.instance.limit.y=this.el.offsetHeight-this.windowHeight,this.direction==="horizontal"){for(var i=0,s=this.el.children,a=0;a<s.length;a++)i+=s[a].offsetWidth;this.instance.limit.x=i-this.windowWidth}}},{key:"startScrolling",value:function(){this.startScrollTs=Date.now(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}},{key:"stopScrolling",value:function(){cancelAnimationFrame(this.checkScrollRaf),this.startScrollTs=void 0,this.scrollToRaf&&(cancelAnimationFrame(this.scrollToRaf),this.scrollToRaf=null),this.isScrolling=!1,this.instance.scroll.y=Math.round(this.instance.scroll.y),this.html.classList.remove(this.scrollingClass)}},{key:"checkKey",value:function(i){var s=this;if(this.stop){i.keyCode==Mi.TAB&&requestAnimationFrame(function(){s.html.scrollTop=0,document.body.scrollTop=0,s.html.scrollLeft=0,document.body.scrollLeft=0});return}switch(i.keyCode){case Mi.TAB:requestAnimationFrame(function(){s.html.scrollTop=0,document.body.scrollTop=0,s.html.scrollLeft=0,document.body.scrollLeft=0,s.scrollTo(document.activeElement,{offset:-window.innerHeight/2})});break;case Mi.UP:this.isActiveElementScrollSensitive()&&(this.instance.delta[this.directionAxis]-=240);break;case Mi.DOWN:this.isActiveElementScrollSensitive()&&(this.instance.delta[this.directionAxis]+=240);break;case Mi.PAGEUP:this.instance.delta[this.directionAxis]-=window.innerHeight;break;case Mi.PAGEDOWN:this.instance.delta[this.directionAxis]+=window.innerHeight;break;case Mi.HOME:this.instance.delta[this.directionAxis]-=this.instance.limit[this.directionAxis];break;case Mi.END:this.instance.delta[this.directionAxis]+=this.instance.limit[this.directionAxis];break;case Mi.SPACE:this.isActiveElementScrollSensitive()&&(i.shiftKey?this.instance.delta[this.directionAxis]-=window.innerHeight:this.instance.delta[this.directionAxis]+=window.innerHeight);break;default:return}this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis]),this.stopScrolling(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}},{key:"isActiveElementScrollSensitive",value:function(){return!(document.activeElement instanceof HTMLInputElement)&&!(document.activeElement instanceof HTMLTextAreaElement)&&!(document.activeElement instanceof HTMLButtonElement)&&!(document.activeElement instanceof HTMLSelectElement)}},{key:"checkScroll",value:function(){var i=this,s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(s||this.isScrolling||this.isDraggingScrollbar){this.hasScrollTicking||(this.checkScrollRaf=requestAnimationFrame(function(){return i.checkScroll()}),this.hasScrollTicking=!0),this.updateScroll();var a=Math.abs(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis]),o=Date.now()-this.startScrollTs;if(!this.animatingScroll&&o>100&&(a<.5&&this.instance.delta[this.directionAxis]!=0||a<.5&&this.instance.delta[this.directionAxis]==0)&&this.stopScrolling(),Object.entries(this.sections).forEach(function(c){var u=vs(c,2);u[0];var h=u[1];h.persistent||i.instance.scroll[i.directionAxis]>h.offset[i.directionAxis]&&i.instance.scroll[i.directionAxis]<h.limit[i.directionAxis]?(i.direction==="horizontal"?i.transform(h.el,-i.instance.scroll[i.directionAxis],0):i.transform(h.el,0,-i.instance.scroll[i.directionAxis]),h.inView||(h.inView=!0,h.el.style.opacity=1,h.el.style.pointerEvents="all",h.el.setAttribute("data-".concat(i.name,"-section-inview"),""))):((h.inView||s)&&(h.inView=!1,h.el.style.opacity=0,h.el.style.pointerEvents="none",h.el.removeAttribute("data-".concat(i.name,"-section-inview"))),i.transform(h.el,0,0))}),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.detectElements(),this.transformElements(),this.hasScrollbar){var l=this.instance.scroll[this.directionAxis]/this.instance.limit[this.directionAxis]*this.scrollBarLimit[this.directionAxis];this.direction==="horizontal"?this.transform(this.scrollbarThumb,l,0):this.transform(this.scrollbarThumb,0,l)}Li(ei(e.prototype),"checkScroll",this).call(this),this.hasScrollTicking=!1}}},{key:"resize",value:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.checkContext(),this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.update()}},{key:"updateDelta",value:function(i){var s,a=this[this.context]&&this[this.context].gestureDirection?this[this.context].gestureDirection:this.gestureDirection;a==="both"?s=i.deltaX+i.deltaY:a==="vertical"?s=i.deltaY:a==="horizontal"?s=i.deltaX:s=i.deltaY,this.instance.delta[this.directionAxis]-=s*this.multiplier,this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis])}},{key:"updateScroll",value:function(i){this.isScrolling||this.isDraggingScrollbar?this.instance.scroll[this.directionAxis]=pc(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis],this.lerp):this.instance.scroll[this.directionAxis]>this.instance.limit[this.directionAxis]?this.setScroll(this.instance.scroll[this.directionAxis],this.instance.limit[this.directionAxis]):this.instance.scroll.y<0?this.setScroll(this.instance.scroll[this.directionAxis],0):this.setScroll(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis])}},{key:"addDirection",value:function(){this.instance.delta.y>this.instance.scroll.y?this.instance.direction!=="down"&&(this.instance.direction="down"):this.instance.delta.y<this.instance.scroll.y&&this.instance.direction!=="up"&&(this.instance.direction="up"),this.instance.delta.x>this.instance.scroll.x?this.instance.direction!=="right"&&(this.instance.direction="right"):this.instance.delta.x<this.instance.scroll.x&&this.instance.direction!=="left"&&(this.instance.direction="left")}},{key:"addSpeed",value:function(){this.instance.delta[this.directionAxis]!=this.instance.scroll[this.directionAxis]?this.instance.speed=(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis])/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"initScrollBar",value:function(){if(this.scrollbar=document.createElement("span"),this.scrollbarThumb=document.createElement("span"),this.scrollbar.classList.add("".concat(this.scrollbarClass)),this.scrollbarThumb.classList.add("".concat(this.scrollbarClass,"_thumb")),this.scrollbar.append(this.scrollbarThumb),this.scrollbarContainer?this.scrollbarContainer.append(this.scrollbar):document.body.append(this.scrollbar),this.getScrollBar=this.getScrollBar.bind(this),this.releaseScrollBar=this.releaseScrollBar.bind(this),this.moveScrollBar=this.moveScrollBar.bind(this),this.scrollbarThumb.addEventListener("mousedown",this.getScrollBar),window.addEventListener("mouseup",this.releaseScrollBar),window.addEventListener("mousemove",this.moveScrollBar),this.hasScrollbar=!1,this.direction=="horizontal"){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,this.direction==="horizontal"?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"reinitScrollBar",value:function(){if(this.hasScrollbar=!1,this.direction=="horizontal"){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,this.direction==="horizontal"?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"destroyScrollBar",value:function(){this.scrollbarThumb.removeEventListener("mousedown",this.getScrollBar),window.removeEventListener("mouseup",this.releaseScrollBar),window.removeEventListener("mousemove",this.moveScrollBar),this.scrollbar.remove()}},{key:"getScrollBar",value:function(i){this.isDraggingScrollbar=!0,this.checkScroll(),this.html.classList.remove(this.scrollingClass),this.html.classList.add(this.draggingClass)}},{key:"releaseScrollBar",value:function(i){this.isDraggingScrollbar=!1,this.isScrolling&&this.html.classList.add(this.scrollingClass),this.html.classList.remove(this.draggingClass)}},{key:"moveScrollBar",value:function(i){var s=this;this.isDraggingScrollbar&&requestAnimationFrame(function(){var a=(i.clientX-s.scrollbarBCR.left)*100/s.scrollbarWidth*s.instance.limit.x/100,o=(i.clientY-s.scrollbarBCR.top)*100/s.scrollbarHeight*s.instance.limit.y/100;o>0&&o<s.instance.limit.y&&(s.instance.delta.y=o),a>0&&a<s.instance.limit.x&&(s.instance.delta.x=a)})}},{key:"addElements",value:function(){var i=this;this.els={},this.parallaxElements={};var s=this.el.querySelectorAll("[data-".concat(this.name,"]"));s.forEach(function(a,o){var l=mc(a),c=Object.entries(i.sections).map(function(J){var R=vs(J,2);R[0];var ot=R[1];return ot}).find(function(J){return l.includes(J.el)}),u=a.dataset[i.name+"Class"]||i.class,h=typeof a.dataset[i.name+"Id"]=="string"?a.dataset[i.name+"Id"]:"el"+o,f,d,g=a.dataset[i.name+"Repeat"],_=a.dataset[i.name+"Call"],p=a.dataset[i.name+"Position"],m=a.dataset[i.name+"Delay"],M=a.dataset[i.name+"Direction"],S=typeof a.dataset[i.name+"Sticky"]=="string",x=a.dataset[i.name+"Speed"]?parseFloat(a.dataset[i.name+"Speed"])/10:!1,A=typeof a.dataset[i.name+"Offset"]=="string"?a.dataset[i.name+"Offset"].split(","):i.offset,w=a.dataset[i.name+"Target"],E;w!==void 0?E=document.querySelector("".concat(w)):E=a;var P=E.getBoundingClientRect();c===null||c.inView?(f=P.top+i.instance.scroll.y-zn(E).y,d=P.left+i.instance.scroll.x-zn(E).x):(f=P.top-zn(c.el).y-zn(E).y,d=P.left-zn(c.el).x-zn(E).x);var y=f+E.offsetHeight,v=d+E.offsetWidth,D={x:(v-d)/2+d,y:(y-f)/2+f};if(S){var U=a.getBoundingClientRect(),L=U.top,W=U.left,X={x:W-d,y:L-f};f+=window.innerHeight,d+=window.innerWidth,y=L+E.offsetHeight-a.offsetHeight-X[i.directionAxis],v=W+E.offsetWidth-a.offsetWidth-X[i.directionAxis],D={x:(v-d)/2+d,y:(y-f)/2+f}}g=="false"?g=!1:g!=null?g=!0:g=i.repeat;var j=[0,0];if(A)if(i.direction==="horizontal"){for(var H=0;H<A.length;H++)typeof A[H]=="string"?A[H].includes("%")?j[H]=parseInt(A[H].replace("%","")*i.windowWidth/100):j[H]=parseInt(A[H]):j[H]=A[H];d=d+j[0],v=v-j[1]}else{for(var H=0;H<A.length;H++)typeof A[H]=="string"?A[H].includes("%")?j[H]=parseInt(A[H].replace("%","")*i.windowHeight/100):j[H]=parseInt(A[H]):j[H]=A[H];f=f+j[0],y=y-j[1]}var F={el:a,id:h,class:u,section:c,top:f,middle:D,bottom:y,left:d,right:v,offset:A,progress:0,repeat:g,inView:!1,call:_,speed:x,delay:m,position:p,target:E,direction:M,sticky:S};i.els[h]=F,a.classList.contains(u)&&i.setInView(i.els[h],h),(x!==!1||S)&&(i.parallaxElements[h]=F)})}},{key:"addSections",value:function(){var i=this;this.sections={};var s=this.el.querySelectorAll("[data-".concat(this.name,"-section]"));s.length===0&&(s=[this.el]),s.forEach(function(a,o){var l=typeof a.dataset[i.name+"Id"]=="string"?a.dataset[i.name+"Id"]:"section"+o,c=a.getBoundingClientRect(),u={x:c.left-window.innerWidth*1.5-zn(a).x,y:c.top-window.innerHeight*1.5-zn(a).y},h={x:u.x+c.width+window.innerWidth*2,y:u.y+c.height+window.innerHeight*2},f=typeof a.dataset[i.name+"Persistent"]=="string";a.setAttribute("data-scroll-section-id",l);var d={el:a,offset:u,limit:h,inView:!1,persistent:f,id:l};i.sections[l]=d})}},{key:"transform",value:function(i,s,a,o){var l;if(!o)l="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(s,",").concat(a,",0,1)");else{var c=zn(i),u=pc(c.x,s,o),h=pc(c.y,a,o);l="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(u,",").concat(h,",0,1)")}i.style.webkitTransform=l,i.style.msTransform=l,i.style.transform=l}},{key:"transformElements",value:function(i){var s=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=this.instance.scroll.x+this.windowWidth,l=this.instance.scroll.y+this.windowHeight,c={x:this.instance.scroll.x+this.windowMiddle.x,y:this.instance.scroll.y+this.windowMiddle.y};Object.entries(this.parallaxElements).forEach(function(u){var h=vs(u,2);h[0];var f=h[1],d=!1;if(i&&(d=0),f.inView||a)switch(f.position){case"top":d=s.instance.scroll[s.directionAxis]*-f.speed;break;case"elementTop":d=(l-f.top)*-f.speed;break;case"bottom":d=(s.instance.limit[s.directionAxis]-l+s.windowHeight)*f.speed;break;case"left":d=s.instance.scroll[s.directionAxis]*-f.speed;break;case"elementLeft":d=(o-f.left)*-f.speed;break;case"right":d=(s.instance.limit[s.directionAxis]-o+s.windowHeight)*f.speed;break;default:d=(c[s.directionAxis]-f.middle[s.directionAxis])*-f.speed;break}f.sticky&&(f.inView?s.direction==="horizontal"?d=s.instance.scroll.x-f.left+window.innerWidth:d=s.instance.scroll.y-f.top+window.innerHeight:s.direction==="horizontal"?s.instance.scroll.x<f.left-window.innerWidth&&s.instance.scroll.x<f.left-window.innerWidth/2?d=0:s.instance.scroll.x>f.right&&s.instance.scroll.x>f.right+100?d=f.right-f.left+window.innerWidth:d=!1:s.instance.scroll.y<f.top-window.innerHeight&&s.instance.scroll.y<f.top-window.innerHeight/2?d=0:s.instance.scroll.y>f.bottom&&s.instance.scroll.y>f.bottom+100?d=f.bottom-f.top+window.innerHeight:d=!1),d!==!1&&(f.direction==="horizontal"||s.direction==="horizontal"&&f.direction!=="vertical"?s.transform(f.el,d,0,i?!1:f.delay):s.transform(f.el,0,d,i?!1:f.delay))})}},{key:"scrollTo",value:function(i){var s=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=parseInt(a.offset)||0,l=isNaN(parseInt(a.duration))?1e3:parseInt(a.duration),c=a.easing||[.25,0,.35,1],u=!!a.disableLerp,h=a.callback?a.callback:!1;if(c=JM.apply(void 0,MM(c)),typeof i=="string"){if(i==="top")i=0;else if(i==="bottom")i=this.instance.limit.y;else if(i==="left")i=0;else if(i==="right")i=this.instance.limit.x;else if(i=document.querySelector(i),!i)return}else if(typeof i=="number")i=parseInt(i);else if(!(i&&i.tagName)){console.warn("`target` parameter is not valid");return}if(typeof i!="number"){var f=mc(i).includes(this.el);if(!f)return;var d=i.getBoundingClientRect(),g=d.top,_=d.left,p=mc(i),m=p.find(function(y){return Object.entries(s.sections).map(function(v){var D=vs(v,2);D[0];var U=D[1];return U}).find(function(v){return v.el==y})}),M=0;m?M=zn(m)[this.directionAxis]:M=-this.instance.scroll[this.directionAxis],this.direction==="horizontal"?o=_+o-M:o=g+o-M}else o=i+o;var S=parseFloat(this.instance.delta[this.directionAxis]),x=Math.max(0,Math.min(o,this.instance.limit[this.directionAxis])),A=x-S,w=function(v){u?s.direction==="horizontal"?s.setScroll(S+A*v,s.instance.delta.y):s.setScroll(s.instance.delta.x,S+A*v):s.instance.delta[s.directionAxis]=S+A*v};this.animatingScroll=!0,this.stopScrolling(),this.startScrolling();var E=Date.now(),P=function y(){var v=(Date.now()-E)/l;v>1?(w(1),s.animatingScroll=!1,l==0&&s.update(),h&&h()):(s.scrollToRaf=requestAnimationFrame(y),w(c(v)))};P()}},{key:"update",value:function(){this.setScrollLimit(),this.addSections(),this.addElements(),this.detectElements(),this.updateScroll(),this.transformElements(!0),this.reinitScrollBar(),this.checkScroll(!0)}},{key:"startScroll",value:function(){this.stop=!1}},{key:"stopScroll",value:function(){this.stop=!0}},{key:"setScroll",value:function(i,s){this.instance=dc(dc({},this.instance),{},{scroll:{x:i,y:s},delta:{x:i,y:s},speed:0})}},{key:"destroy",value:function(){Li(ei(e.prototype),"destroy",this).call(this),this.stopScrolling(),this.html.classList.remove(this.smoothClass),this.vs.destroy(),this.destroyScrollBar(),window.removeEventListener("keydown",this.checkKey,!1)}}]),e}(Yp),tE=function(){function r(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};pl(this,r),this.options=t,Object.assign(this,Ps,t),this.smartphone=Ps.smartphone,t.smartphone&&Object.assign(this.smartphone,t.smartphone),this.tablet=Ps.tablet,t.tablet&&Object.assign(this.tablet,t.tablet),!this.smooth&&this.direction=="horizontal"&&console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"),!this.tablet.smooth&&this.tablet.direction=="horizontal"&&console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),!this.smartphone.smooth&&this.smartphone.direction=="horizontal"&&console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),this.init()}return ml(r,[{key:"init",value:function(){if(this.options.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1||window.innerWidth<this.tablet.breakpoint,this.options.isTablet=this.options.isMobile&&window.innerWidth>=this.tablet.breakpoint,this.smooth&&!this.options.isMobile||this.tablet.smooth&&this.options.isTablet||this.smartphone.smooth&&this.options.isMobile&&!this.options.isTablet?this.scroll=new QM(this.options):this.scroll=new PM(this.options),this.scroll.init(),window.location.hash){var e=window.location.hash.slice(1,window.location.hash.length),n=document.getElementById(e);n&&this.scroll.scrollTo(n)}}},{key:"update",value:function(){this.scroll.update()}},{key:"start",value:function(){this.scroll.startScroll()}},{key:"stop",value:function(){this.scroll.stopScroll()}},{key:"scrollTo",value:function(e,n){this.scroll.scrollTo(e,n)}},{key:"setScroll",value:function(e,n){this.scroll.setScroll(e,n)}},{key:"on",value:function(e,n){this.scroll.setEvents(e,n)}},{key:"off",value:function(e,n){this.scroll.unsetEvents(e,n)}},{key:"destroy",value:function(){this.scroll.destroy()}}]),r}();ve.registerPlugin(Xt);const cr=new tE({el:document.querySelector(".smooth-scroll"),smooth:!0});cr.on("scroll",Xt.update);document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",t=>{t.preventDefault();const n=t.currentTarget.getAttribute("href");if(n==="#")cr.scrollTo(0);else if(n){const i=document.querySelector(n);i&&cr.scrollTo(i)}})});Xt.scrollerProxy(".smooth-scroll",{scrollTop(r){return arguments.length?cr.scrollTo(r,{duration:0,disableLerp:!0}):cr.scroll.instance.scroll.y},getBoundingClientRect(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}},pinType:document.querySelector(".smooth-scroll").style.transform?"transform":"fixed"});const tm=["Python","Java","JavaScript","Angular","Arduino","Raspberry Pi","SQL","Game Dev","UI Design","Prototyping"],eE=[{title:"Desk Jarvis",status:"Prototype",tags:["Angular","Raspberry Pi","IoT"],desc:"“Something intelligent is about to illuminate your workspace.” A smart desk assistant bridging hardware and software.",visual:"radar",link:"https://github.com/23Benji/DeskJarvis-Interface"},{title:"Lexipal",status:"Beta",tags:["Python","JavaScript","AI / NLP"],desc:"A personal AI assistant built using Python and Flask-SocketIO. Focuses on learning new languages and having natural conversations.",visual:"blocks",link:"https://github.com/mp3skater/LexiPal"},{title:"Jumping Squared",status:"Top Game",tags:["Java","Game Design"],desc:"A rage-platformer game where a square jumps over deadly traps to reach the goal. Focused on precise timing and level design.",visual:"wireframe",link:"https://github.com/mp3skater/Jumping-squared"},{title:"Tunnel Sim",status:"Simulation",tags:["Java","Networking","Concurrency"],desc:"Simulates visitor flow for a capacity-limited resource (archaeological tunnel) using a client-server architecture and multi-threading.",visual:"nodes",link:"https://github.com/23Benji/TunnelSim"},{title:"Vocab Trainer",status:"App",tags:["Java","GUI Application"],desc:"A Java-based vocabulary trainer for learning and managing word pairs. Includes a user-friendly GUI tailored for language learners.",visual:"data",link:"https://github.com/23Benji/Vokabeltrainer"},{title:"Chat Server",status:"Network",tags:["Java","Multi-client"],desc:"A multi-client chat server implementing threads to handle concurrent connections, allowing real-time text communication over a network.",visual:"grid",link:"https://github.com/23Benji/ChatServer"}],nE=[{q:"What kinds of projects do you enjoy?",a:"Things that mix creativity, minimalistic design, and cutting-edge technology — stuff that moves, reacts, or just makes people say 'wait, how does that work?'"},{q:"What are you currently working on?",a:"I am currently working on DeskJarvis-Interface, a smart desk assistant that bridges hardware and software to create an workspace companion."},{q:"How do you approach learning new tools?",a:"Jump straight into a project and learn as I go. Breaking things (and fixing them again) is the best teacher."},{q:"What kinds of challenges do you enjoy solving?",a:"Making hardware and software talk to each other — especially when it ends up doing something useful or just plain cool."}],iE=tm.map(r=>`<span class="flex items-center mx-4 text-[10px] uppercase tracking-[0.3em] text-white/30">${r} <span class="mx-8 text-white/10">✦</span></span>`).join("");document.querySelectorAll(".marquee-content").forEach(r=>r.innerHTML=iE.repeat(3));const rE=["Code","Design","Build","Create","Explore","Prototype","Innovate","Ship"],sE=rE.map(r=>`<span class="flex items-center mx-4 text-[10px] uppercase tracking-[0.3em] text-white/30">${r} <span class="mx-8 text-white/10">✦</span></span>`).join("");document.getElementById("footer-marquee").innerHTML=`<div class="marquee-content flex">${sE.repeat(3)}</div>`;document.getElementById("skill-pills").innerHTML=tm.map(r=>`<span class="px-4 py-2 rounded-full border border-white/15 text-[12px] text-white/50 hover:border-white/40 hover:text-white/80 transition-colors">${r}</span>`).join("");const aE=r=>r==="radar"?'<div class="absolute inset-0 flex items-center justify-center"><div class="absolute h-8 w-8 rounded-full border border-white/20 animate-radar"></div><div class="absolute h-8 w-8 rounded-full border border-white/20 animate-radar delay-1"></div></div>':r==="blocks"?'<div class="absolute inset-0 flex flex-col justify-center gap-2 px-8 opacity-40"><div class="h-1 rounded-full bg-white animate-block" style="width: 40%"></div><div class="h-1 rounded-full bg-white animate-block" style="width: 80%; animation-delay: 0.2s"></div><div class="h-1 rounded-full bg-white animate-block" style="width: 60%; animation-delay: 0.4s"></div></div>':r==="wireframe"?'<div class="absolute inset-0 flex items-center justify-center [perspective:400px]"><div class="h-16 w-16 border border-white/30 animate-wireframe"></div></div>':r==="nodes"?'<div class="absolute inset-0 flex items-center justify-center"><svg class="absolute h-full w-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M20,50 L50,20 L80,50 L50,80 Z" stroke="white" stroke-width="0.5" fill="none"/></svg><div class="h-2 w-2 rounded-full bg-white/50"></div></div>':r==="data"?'<div class="absolute inset-0 flex items-end justify-center gap-1 pb-8 opacity-40"><div class="w-1.5 bg-white animate-data" style="--h: 40px"></div><div class="w-1.5 bg-white animate-data" style="--h: 20px; animation-delay: 0.1s"></div><div class="w-1.5 bg-white animate-data" style="--h: 50px; animation-delay: 0.2s"></div></div>':'<div class="absolute inset-0 flex items-center justify-center opacity-30"><div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div><div class="h-[2px] w-full bg-white/50 blur-[2px]"></div></div>',oE=document.getElementById("project-grid");eE.forEach((r,t)=>{const e=r.link==="#";oE.innerHTML+=`
    <div class="project-card group relative flex flex-col gap-4" style="perspective: 800px; transform-style: preserve-3d;">
      <div class="card-inner relative h-56 w-full overflow-hidden bg-white/5 border border-white/5 transition-colors group-hover:border-white/15">
        ${aE(r.visual)}
        <div class="glare pointer-events-none absolute inset-0 z-10 opacity-0 mix-blend-overlay transition-opacity duration-300"></div>
        <div class="absolute top-4 left-4 z-20 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-3 py-1"><span class="text-[9px] uppercase tracking-widest text-white/70">${r.status}</span></div>
        <div class="absolute top-4 right-4 z-20"><span class="font-space font-black text-[12px] text-white/20">0${t+1}</span></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0 opacity-80"></div>
      </div>
      <div class="pt-2">
        <div class="flex items-center justify-between">
          <h3 class="font-space font-black text-2xl text-white tracking-tight">${r.title}</h3>
          <a href="${r.link}" target="${e?"_self":"_blank"}" class="h-10 w-10 rounded-full border flex items-center justify-center transition-colors ${e?"border-white/10 opacity-50 cursor-not-allowed":"border-white/20 hover:bg-white text-white hover:text-black"}">
            <i data-lucide="arrow-up-right" class="h-5 w-5 transition-transform ${e?"":"group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}"></i>
          </a>
        </div>
        <p class="mt-3 text-[12px] leading-relaxed text-white/50">${r.desc}</p>
        <div class="mt-5 flex flex-wrap gap-2">
          ${r.tags.map(n=>`<span class="rounded-full bg-white/10 px-3 py-1 text-[9px] uppercase tracking-widest text-white/60">${n}</span>`).join("")}
        </div>
      </div>
    </div>
  `});const lE=document.getElementById("faq-container");nE.forEach(r=>{lE.innerHTML+=`
    <div class="cinematic-text border-b border-white/10 py-6">
      <button class="faq-btn flex w-full items-center justify-between group">
        <span class="text-[14px] md:text-[18px] text-left transition-colors text-white/60 group-hover:text-white font-inter">${r.q}</span>
        <i data-lucide="plus" class="faq-icon h-[20px] w-[20px] text-white/40 group-hover:text-white transition-all duration-300"></i>
      </button>
      <div class="faq-answer overflow-hidden h-0 opacity-0">
        <p class="pt-6 text-[14px] text-white/50 leading-relaxed pr-12 font-inter">${r.a}</p>
      </div>
    </div>
  `});_M({icons:{ArrowUpRight:pM,Plus:mM}});document.querySelectorAll(".faq-btn").forEach(r=>{r.addEventListener("click",t=>{const e=t.currentTarget,n=e.nextElementSibling,i=e.querySelector(".faq-icon"),s=e.querySelector("span");n.classList.contains("is-open")?(ve.to(n,{height:0,opacity:0,duration:.3,ease:"power2.inOut"}),ve.to(i,{rotate:0,duration:.3}),s.classList.remove("text-white","font-bold"),s.classList.add("text-white/60"),n.classList.remove("is-open"),setTimeout(()=>cr.update(),300)):(ve.to(n,{height:"auto",opacity:1,duration:.3,ease:"power2.inOut"}),ve.to(i,{rotate:45,duration:.3}),s.classList.add("text-white","font-bold"),s.classList.remove("text-white/60"),n.classList.add("is-open"),setTimeout(()=>cr.update(),300))})});const cE=document.getElementById("bg-canvas"),Cu=new aM,Wi=new Wn(50,window.innerWidth/window.innerHeight,.1,1e3),Pu=new sM({canvas:cE,alpha:!0,antialias:!0});Pu.setSize(window.innerWidth,window.innerHeight);Wi.position.z=15;const em=new ca,xs=[],uE=new wu({color:16777215,transparent:!0,opacity:.3}),hE=new Ru(.04,16);for(let r=0;r<18;r++)for(let t=0;t<12;t++){const e=new fi(hE,uE);e.position.set((r-9)*2,(t-6)*2,0),em.add(e),xs.push({mesh:e,offset:Math.random()*100})}for(let r=0;r<12;r++){const t=xs[Math.floor(Math.random()*xs.length)].mesh.position,e=xs[Math.floor(Math.random()*xs.length)].mesh.position,n=new _i().setFromPoints([t,e]),i=new kp({color:16777215,transparent:!0,opacity:.06});Cu.add(new oM(n,i))}Cu.add(em);let nm=0,im=0;window.addEventListener("mousemove",r=>{nm=r.clientX/window.innerWidth*2-1,im=-(r.clientY/window.innerHeight)*2+1});const fE=new lM;function rm(){requestAnimationFrame(rm);const r=fE.getElapsedTime();Wi.position.x+=(nm*2-Wi.position.x)*.03,Wi.position.y+=(im*2-Wi.position.y)*.03,xs.forEach(t=>{const e=1+Math.sin(r*2+t.offset)*.4;t.mesh.scale.setScalar(e)}),Pu.render(Cu,Wi)}rm();window.addEventListener("resize",()=>{Wi.aspect=window.innerWidth/window.innerHeight,Wi.updateProjectionMatrix(),Pu.setSize(window.innerWidth,window.innerHeight)});const il=document.getElementById("cursor-ring"),Zc=document.getElementById("cursor-dot"),dE=ve.quickTo(il,"x",{duration:.6,ease:"power3"}),pE=ve.quickTo(il,"y",{duration:.6,ease:"power3"});window.addEventListener("mousemove",r=>{dE(r.clientX),pE(r.clientY),ve.set(Zc,{x:r.clientX,y:r.clientY})});document.querySelectorAll("a, button, input, textarea, .faq-btn").forEach(r=>{r.addEventListener("mouseenter",()=>{ve.to(il,{scale:2.2,opacity:.5,duration:.3}),ve.to(Zc,{opacity:0,duration:.1})}),r.addEventListener("mouseleave",()=>{ve.to(il,{scale:1,opacity:1,duration:.3}),ve.to(Zc,{opacity:1,duration:.1})})});const mE=ve.timeline();mE.to("#navbar",{opacity:1,duration:1,delay:.5}).fromTo(".hero-word",{y:"110%"},{y:"0%",duration:.8,stagger:.13,ease:"power4.out"},"-=0.5").to(".hero-fade",{opacity:1,y:0,duration:.8,stagger:.2},"-=0.2").to("#scroll-line",{scaleY:1,duration:1.4,ease:"power3.inOut"},"-=1").to("#scroll-dot",{y:8,duration:.8,repeat:-1,yoyo:!0,ease:"power1.inOut"});ve.utils.toArray(".cinematic-text").forEach(r=>{ve.fromTo(r,{opacity:0,y:100,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0px)",ease:"none",scrollTrigger:{trigger:r,start:"top 95%",end:"top 60%",scrub:1,scroller:".smooth-scroll"}})});ve.utils.toArray(".scroll-move-left").forEach(r=>{ve.to(r,{x:-50,ease:"none",scrollTrigger:{trigger:r,scroller:".smooth-scroll",scrub:1,start:"top bottom",end:"bottom top"}})});ve.utils.toArray(".scroll-move-right").forEach(r=>{ve.to(r,{x:50,ease:"none",scrollTrigger:{trigger:r,scroller:".smooth-scroll",scrub:1,start:"top bottom",end:"bottom top"}})});ve.utils.toArray(".project-card").forEach(r=>{ve.fromTo(r,{y:150,scale:.8,opacity:0},{y:0,scale:1,opacity:1,ease:"none",scrollTrigger:{trigger:r,start:"top 110%",end:"top 60%",scrub:1,scroller:".smooth-scroll"}});const t=r.querySelector(".glare");r.addEventListener("mousemove",e=>{const n=r.getBoundingClientRect(),i=(e.clientX-n.left)/n.width,s=(e.clientY-n.top)/n.height;ve.to(r,{rotateX:(s-.5)*-20,rotateY:(i-.5)*20,duration:.5,ease:"power2.out"}),ve.set(t,{opacity:1,background:`radial-gradient(circle at ${i*100}% ${s*100}%, rgba(255,255,255,0.4) 0%, transparent 60%)`})}),r.addEventListener("mouseleave",()=>{ve.to(r,{rotateX:0,rotateY:0,duration:.5,ease:"power2.out"}),ve.to(t,{opacity:0,duration:.3})})});Xt.addEventListener("refresh",()=>cr.update());Xt.refresh();const _c=document.getElementById("contact-form"),wo=document.getElementById("submit-btn"),ta=document.getElementById("submit-text");_c.addEventListener("submit",async r=>{r.preventDefault(),ta.innerText="Sending...",wo.style.opacity="0.5",wo.style.pointerEvents="none";try{(await fetch("https://formspree.io/f/xqapvagk",{method:"POST",body:new FormData(_c),headers:{Accept:"application/json"}})).ok?(ta.innerText="Message Sent!",_c.reset()):ta.innerText="Error! Try Again"}catch{ta.innerText="Error! Try Again"}setTimeout(()=>{ta.innerText="Send Message",wo.style.opacity="1",wo.style.pointerEvents="auto"},5e3)});
