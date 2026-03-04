(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var bh={exports:{}},Io={};var a_;function by(){if(a_)return Io;a_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:u}}return Io.Fragment=t,Io.jsx=i,Io.jsxs=i,Io}var r_;function Ty(){return r_||(r_=1,bh.exports=by()),bh.exports}var Zt=Ty(),Th={exports:{}},oe={};var s_;function Ay(){if(s_)return oe;s_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=_&&P[_]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function x(P,Y,ft){this.props=P,this.context=Y,this.refs=y,this.updater=ft||b}x.prototype.isReactComponent={},x.prototype.setState=function(P,Y){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Y,"setState")},x.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function R(){}R.prototype=x.prototype;function D(P,Y,ft){this.props=P,this.context=Y,this.refs=y,this.updater=ft||b}var U=D.prototype=new R;U.constructor=D,w(U,x.prototype),U.isPureReactComponent=!0;var H=Array.isArray;function B(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(P,Y,ft){var xt=ft.ref;return{$$typeof:s,type:P,key:Y,ref:xt!==void 0?xt:null,props:ft}}function ct(P,Y){return L(P.type,Y,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function tt(P){var Y={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ft){return Y[ft]})}var it=/\/+/g;function lt(P,Y){return typeof P=="object"&&P!==null&&P.key!=null?tt(""+P.key):Y.toString(36)}function Q(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(B,B):(P.status="pending",P.then(function(Y){P.status==="pending"&&(P.status="fulfilled",P.value=Y)},function(Y){P.status==="pending"&&(P.status="rejected",P.reason=Y)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function O(P,Y,ft,xt,Ut){var Z=typeof P;(Z==="undefined"||Z==="boolean")&&(P=null);var mt=!1;if(P===null)mt=!0;else switch(Z){case"bigint":case"string":case"number":mt=!0;break;case"object":switch(P.$$typeof){case s:case t:mt=!0;break;case g:return mt=P._init,O(mt(P._payload),Y,ft,xt,Ut)}}if(mt)return Ut=Ut(P),mt=xt===""?"."+lt(P,0):xt,H(Ut)?(ft="",mt!=null&&(ft=mt.replace(it,"$&/")+"/"),O(Ut,Y,ft,"",function(Kt){return Kt})):Ut!=null&&(G(Ut)&&(Ut=ct(Ut,ft+(Ut.key==null||P&&P.key===Ut.key?"":(""+Ut.key).replace(it,"$&/")+"/")+mt)),Y.push(Ut)),1;mt=0;var Mt=xt===""?".":xt+":";if(H(P))for(var Bt=0;Bt<P.length;Bt++)xt=P[Bt],Z=Mt+lt(xt,Bt),mt+=O(xt,Y,ft,Z,Ut);else if(Bt=M(P),typeof Bt=="function")for(P=Bt.call(P),Bt=0;!(xt=P.next()).done;)xt=xt.value,Z=Mt+lt(xt,Bt++),mt+=O(xt,Y,ft,Z,Ut);else if(Z==="object"){if(typeof P.then=="function")return O(Q(P),Y,ft,xt,Ut);throw Y=String(P),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return mt}function I(P,Y,ft){if(P==null)return P;var xt=[],Ut=0;return O(P,xt,"","",function(Z){return Y.call(ft,Z,Ut++)}),xt}function ot(P){if(P._status===-1){var Y=P._result;Y=Y(),Y.then(function(ft){(P._status===0||P._status===-1)&&(P._status=1,P._result=ft)},function(ft){(P._status===0||P._status===-1)&&(P._status=2,P._result=ft)}),P._status===-1&&(P._status=0,P._result=Y)}if(P._status===1)return P._result.default;throw P._result}var pt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Et={map:I,forEach:function(P,Y,ft){I(P,function(){Y.apply(this,arguments)},ft)},count:function(P){var Y=0;return I(P,function(){Y++}),Y},toArray:function(P){return I(P,function(Y){return Y})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return oe.Activity=v,oe.Children=Et,oe.Component=x,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=D,oe.StrictMode=r,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,oe.__COMPILER_RUNTIME={__proto__:null,c:function(P){return F.H.useMemoCache(P)}},oe.cache=function(P){return function(){return P.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(P,Y,ft){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var xt=w({},P.props),Ut=P.key;if(Y!=null)for(Z in Y.key!==void 0&&(Ut=""+Y.key),Y)!T.call(Y,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&Y.ref===void 0||(xt[Z]=Y[Z]);var Z=arguments.length-2;if(Z===1)xt.children=ft;else if(1<Z){for(var mt=Array(Z),Mt=0;Mt<Z;Mt++)mt[Mt]=arguments[Mt+2];xt.children=mt}return L(P.type,Ut,xt)},oe.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},oe.createElement=function(P,Y,ft){var xt,Ut={},Z=null;if(Y!=null)for(xt in Y.key!==void 0&&(Z=""+Y.key),Y)T.call(Y,xt)&&xt!=="key"&&xt!=="__self"&&xt!=="__source"&&(Ut[xt]=Y[xt]);var mt=arguments.length-2;if(mt===1)Ut.children=ft;else if(1<mt){for(var Mt=Array(mt),Bt=0;Bt<mt;Bt++)Mt[Bt]=arguments[Bt+2];Ut.children=Mt}if(P&&P.defaultProps)for(xt in mt=P.defaultProps,mt)Ut[xt]===void 0&&(Ut[xt]=mt[xt]);return L(P,Z,Ut)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(P){return{$$typeof:p,render:P}},oe.isValidElement=G,oe.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:ot}},oe.memo=function(P,Y){return{$$typeof:d,type:P,compare:Y===void 0?null:Y}},oe.startTransition=function(P){var Y=F.T,ft={};F.T=ft;try{var xt=P(),Ut=F.S;Ut!==null&&Ut(ft,xt),typeof xt=="object"&&xt!==null&&typeof xt.then=="function"&&xt.then(B,pt)}catch(Z){pt(Z)}finally{Y!==null&&ft.types!==null&&(Y.types=ft.types),F.T=Y}},oe.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},oe.use=function(P){return F.H.use(P)},oe.useActionState=function(P,Y,ft){return F.H.useActionState(P,Y,ft)},oe.useCallback=function(P,Y){return F.H.useCallback(P,Y)},oe.useContext=function(P){return F.H.useContext(P)},oe.useDebugValue=function(){},oe.useDeferredValue=function(P,Y){return F.H.useDeferredValue(P,Y)},oe.useEffect=function(P,Y){return F.H.useEffect(P,Y)},oe.useEffectEvent=function(P){return F.H.useEffectEvent(P)},oe.useId=function(){return F.H.useId()},oe.useImperativeHandle=function(P,Y,ft){return F.H.useImperativeHandle(P,Y,ft)},oe.useInsertionEffect=function(P,Y){return F.H.useInsertionEffect(P,Y)},oe.useLayoutEffect=function(P,Y){return F.H.useLayoutEffect(P,Y)},oe.useMemo=function(P,Y){return F.H.useMemo(P,Y)},oe.useOptimistic=function(P,Y){return F.H.useOptimistic(P,Y)},oe.useReducer=function(P,Y,ft){return F.H.useReducer(P,Y,ft)},oe.useRef=function(P){return F.H.useRef(P)},oe.useState=function(P){return F.H.useState(P)},oe.useSyncExternalStore=function(P,Y,ft){return F.H.useSyncExternalStore(P,Y,ft)},oe.useTransition=function(){return F.H.useTransition()},oe.version="19.2.3",oe}var o_;function lp(){return o_||(o_=1,Th.exports=Ay()),Th.exports}var _t=lp(),Ah={exports:{}},Bo={},Rh={exports:{}},Ch={};var l_;function Ry(){return l_||(l_=1,(function(s){function t(O,I){var ot=O.length;O.push(I);t:for(;0<ot;){var pt=ot-1>>>1,Et=O[pt];if(0<l(Et,I))O[pt]=I,O[ot]=Et,ot=pt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var I=O[0],ot=O.pop();if(ot!==I){O[0]=ot;t:for(var pt=0,Et=O.length,P=Et>>>1;pt<P;){var Y=2*(pt+1)-1,ft=O[Y],xt=Y+1,Ut=O[xt];if(0>l(ft,ot))xt<Et&&0>l(Ut,ft)?(O[pt]=Ut,O[xt]=ot,pt=xt):(O[pt]=ft,O[Y]=ot,pt=Y);else if(xt<Et&&0>l(Ut,ot))O[pt]=Ut,O[xt]=ot,pt=xt;else break t}}return I}function l(O,I){var ot=O.sortIndex-I.sortIndex;return ot!==0?ot:O.id-I.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();s.unstable_now=function(){return f.now()-p}}var m=[],d=[],g=1,v=null,_=3,M=!1,b=!1,w=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var I=i(d);I!==null;){if(I.callback===null)r(d);else if(I.startTime<=O)r(d),I.sortIndex=I.expirationTime,t(m,I);else break;I=i(d)}}function H(O){if(w=!1,U(O),!b)if(i(m)!==null)b=!0,B||(B=!0,tt());else{var I=i(d);I!==null&&Q(H,I.startTime-O)}}var B=!1,F=-1,T=5,L=-1;function ct(){return y?!0:!(s.unstable_now()-L<T)}function G(){if(y=!1,B){var O=s.unstable_now();L=O;var I=!0;try{t:{b=!1,w&&(w=!1,R(F),F=-1),M=!0;var ot=_;try{e:{for(U(O),v=i(m);v!==null&&!(v.expirationTime>O&&ct());){var pt=v.callback;if(typeof pt=="function"){v.callback=null,_=v.priorityLevel;var Et=pt(v.expirationTime<=O);if(O=s.unstable_now(),typeof Et=="function"){v.callback=Et,U(O),I=!0;break e}v===i(m)&&r(m),U(O)}else r(m);v=i(m)}if(v!==null)I=!0;else{var P=i(d);P!==null&&Q(H,P.startTime-O),I=!1}}break t}finally{v=null,_=ot,M=!1}I=void 0}}finally{I?tt():B=!1}}}var tt;if(typeof D=="function")tt=function(){D(G)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,lt=it.port2;it.port1.onmessage=G,tt=function(){lt.postMessage(null)}}else tt=function(){x(G,0)};function Q(O,I){F=x(function(){O(s.unstable_now())},I)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(O){switch(_){case 1:case 2:case 3:var I=3;break;default:I=_}var ot=_;_=I;try{return O()}finally{_=ot}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ot=_;_=O;try{return I()}finally{_=ot}},s.unstable_scheduleCallback=function(O,I,ot){var pt=s.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?pt+ot:pt):ot=pt,O){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=ot+Et,O={id:g++,callback:I,priorityLevel:O,startTime:ot,expirationTime:Et,sortIndex:-1},ot>pt?(O.sortIndex=ot,t(d,O),i(m)===null&&O===i(d)&&(w?(R(F),F=-1):w=!0,Q(H,ot-pt))):(O.sortIndex=Et,t(m,O),b||M||(b=!0,B||(B=!0,tt()))),O},s.unstable_shouldYield=ct,s.unstable_wrapCallback=function(O){var I=_;return function(){var ot=_;_=I;try{return O.apply(this,arguments)}finally{_=ot}}}})(Ch)),Ch}var u_;function Cy(){return u_||(u_=1,Rh.exports=Ry()),Rh.exports}var wh={exports:{}},Rn={};var c_;function wy(){if(c_)return Rn;c_=1;var s=lp();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:d,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return u(m,d,null,g)},Rn.flushSync=function(m){var d=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=d,r.p=g,r.d.f()}},Rn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,v=p(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,M=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:M,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Rn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=p(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},Rn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=p(g,d.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Rn.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=p(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,d){return m(d)},Rn.useFormState=function(m,d,g){return f.H.useFormState(m,d,g)},Rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Rn.version="19.2.3",Rn}var f_;function Dy(){if(f_)return wh.exports;f_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),wh.exports=wy(),wh.exports}var h_;function Uy(){if(h_)return Bo;h_=1;var s=Cy(),t=lp(),i=Dy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function d(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return m(c),e;if(h===o)return m(c),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=h;else{for(var S=!1,A=c.child;A;){if(A===a){S=!0,a=c,o=h;break}if(A===o){S=!0,o=c,a=h;break}A=A.sibling}if(!S){for(A=h.child;A;){if(A===a){S=!0,a=h,o=c;break}if(A===o){S=!0,o=h,a=c;break}A=A.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),ct=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var it=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===it?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case H:return"Suspense";case B:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case D:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var Q=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},pt=[],Et=-1;function P(e){return{current:e}}function Y(e){0>Et||(e.current=pt[Et],pt[Et]=null,Et--)}function ft(e,n){Et++,pt[Et]=e.current,e.current=n}var xt=P(null),Ut=P(null),Z=P(null),mt=P(null);function Mt(e,n){switch(ft(Z,n),ft(Ut,e),ft(xt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?R0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=R0(n),e=C0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(xt),ft(xt,e)}function Bt(){Y(xt),Y(Ut),Y(Z)}function Kt(e){e.memoizedState!==null&&ft(mt,e);var n=xt.current,a=C0(n,e.type);n!==a&&(ft(Ut,e),ft(xt,a))}function $t(e){Ut.current===e&&(Y(xt),Y(Ut)),mt.current===e&&(Y(mt),No._currentValue=ot)}var Xe,ue;function ge(e){if(Xe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Xe=n&&n[1]||"",ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xe+e+ue}var De=!1;function le(e,n){if(!e||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(st){var at=st}Reflect.construct(e,[],St)}else{try{St.call()}catch(st){at=st}e.call(St.prototype)}}else{try{throw Error()}catch(st){at=st}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(st){if(st&&at&&typeof st.stack=="string")return[st.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],A=h[1];if(S&&A){var z=S.split(`
`),$=A.split(`
`);for(c=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===z.length||c===$.length)for(o=z.length-1,c=$.length-1;1<=o&&0<=c&&z[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(z[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||z[o]!==$[c]){var dt=`
`+z[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=c);break}}}finally{De=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ge(a):""}function Qe(e,n){switch(e.tag){case 26:case 27:case 5:return ge(e.type);case 16:return ge("Lazy");case 13:return e.child!==n&&n!==null?ge("Suspense Fallback"):ge("Suspense");case 19:return ge("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return ge("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=Qe(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ye=Object.prototype.hasOwnProperty,Ee=s.unstable_scheduleCallback,Le=s.unstable_cancelCallback,qt=s.unstable_shouldYield,N=s.unstable_requestPaint,E=s.unstable_now,q=s.unstable_getCurrentPriorityLevel,gt=s.unstable_ImmediatePriority,yt=s.unstable_UserBlockingPriority,ht=s.unstable_NormalPriority,Xt=s.unstable_LowPriority,wt=s.unstable_IdlePriority,Qt=s.log,ee=s.unstable_setDisableYieldValue,At=null,bt=null;function Pt(e){if(typeof Qt=="function"&&ee(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(At,e)}catch{}}var Ot=Math.clz32?Math.clz32:W,Ft=Math.log,fe=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ft(e)/fe|0)|0}var Ct=256,Rt=262144,It=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ut(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,h=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?c=Tt(o):(S&=A,S!==0?c=Tt(S):a||(a=A&~e,a!==0&&(c=Tt(a))))):(A=o&~h,A!==0?c=Tt(A):S!==0?c=Tt(S):a||(a=o&~e,a!==0&&(c=Tt(a)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:c}function Ht(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function be(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Un(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vi(e,n,a,o,c,h){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,z=e.expirationTimes,$=e.hiddenUpdates;for(a=S&~a;0<a;){var dt=31-Ot(a),St=1<<dt;A[dt]=0,z[dt]=-1;var at=$[dt];if(at!==null)for($[dt]=null,dt=0;dt<at.length;dt++){var st=at[dt];st!==null&&(st.lane&=-536870913)}a&=~St}o!==0&&Ys(e,o,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~n))}function Ys(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ot(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function zr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ot(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function ll(e,n){var a=n&-n;return a=(a&42)!==0?1:Hr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Hr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ui(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:Q0(e.type))}function Vr(e,n){var a=I.p;try{return I.p=e,n()}finally{I.p=a}}var xi=Math.random().toString(36).slice(2),sn="__reactFiber$"+xi,pn="__reactProps$"+xi,Yi="__reactContainer$"+xi,Ra="__reactEvents$"+xi,ul="__reactListeners$"+xi,cl="__reactHandles$"+xi,fl="__reactResources$"+xi,lr="__reactMarker$"+xi;function js(e){delete e[sn],delete e[pn],delete e[Ra],delete e[ul],delete e[cl]}function Ca(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Yi]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=P0(e);e!==null;){if(a=e[sn])return a;e=P0(e)}return n}e=a,a=e.parentNode}return null}function wa(e){if(e=e[sn]||e[Yi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ur(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function C(e){var n=e[fl];return n||(n=e[fl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(e){e[lr]=!0}var rt=new Set,nt={};function K(e,n){Dt(e,n),Dt(e+"Capture",n)}function Dt(e,n){for(nt[e]=n,e=0;e<n.length;e++)rt.add(n[e])}var zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lt={},Wt={};function jt(e){return Ye.call(Wt,e)?!0:Ye.call(Lt,e)?!1:zt.test(e)?Wt[e]=!0:(Lt[e]=!0,!1)}function ne(e,n,a){if(jt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function se(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Gt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function je(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ae(e){if(!e._valueTracker){var n=je(e)?"checked":"value";e._valueTracker=Ze(e,n,""+e[n])}}function mn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=je(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ln=/[\n"\\]/g;function re(e){return e.replace(Ln,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Nn(e,n,a,o,c,h,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+he(n)):e.value!==""+he(n)&&(e.value=""+he(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Si(e,S,he(n)):a!=null?Si(e,S,he(a)):o!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+he(A):e.removeAttribute("name")}function jn(e,n,a,o,c,h,S,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Ae(e);return}a=a!=null?""+he(a):"",n=n!=null?""+he(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ae(e)}function Si(e,n,a){n==="number"&&kt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Zn(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+he(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Ne(e,n,a){if(n!=null&&(n=""+he(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+he(a):""}function on(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Q(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=he(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ae(e)}function On(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ln=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yi(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||ln.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ji(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&yi(e,c,o)}else for(var h in n)n.hasOwnProperty(h)&&yi(e,h,n[h])}function kr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hl(e){return yx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var Sc=null;function yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xr=null,Wr=null;function Ap(e){var n=wa(e);if(n&&(e=n.stateNode)){var a=e[pn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Nn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+re(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[pn]||null;if(!c)throw Error(r(90));Nn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&mn(o)}break t;case"textarea":Ne(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Zn(e,!!a.multiple,n,!1)}}}var Mc=!1;function Rp(e,n,a){if(Mc)return e(n,a);Mc=!0;try{var o=e(n);return o}finally{if(Mc=!1,(Xr!==null||Wr!==null)&&($l(),Xr&&(n=Xr,e=Wr,Wr=Xr=null,Ap(n),e)))for(n=0;n<e.length;n++)Ap(e[n])}}function Zs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[pn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ec=!1;if(Ki)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){Ec=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{Ec=!1}var Da=null,bc=null,dl=null;function Cp(){if(dl)return dl;var e,n=bc,a=n.length,o,c="value"in Da?Da.value:Da.textContent,h=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===c[h-o];o++);return dl=c.slice(e,1<o?1-o:void 0)}function pl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ml(){return!0}function wp(){return!1}function Bn(e){function n(a,o,c,h,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ml:wp,this.isPropagationStopped=wp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),n}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=Bn(cr),Qs=v({},cr,{view:0,detail:0}),Mx=Bn(Qs),Tc,Ac,Js,_l=v({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Js&&(Js&&e.type==="mousemove"?(Tc=e.screenX-Js.screenX,Ac=e.screenY-Js.screenY):Ac=Tc=0,Js=e),Tc)},movementY:function(e){return"movementY"in e?e.movementY:Ac}}),Dp=Bn(_l),Ex=v({},_l,{dataTransfer:0}),bx=Bn(Ex),Tx=v({},Qs,{relatedTarget:0}),Rc=Bn(Tx),Ax=v({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Rx=Bn(Ax),Cx=v({},cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wx=Bn(Cx),Dx=v({},cr,{data:0}),Up=Bn(Dx),Ux={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ox(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Nx[e])?!!n[e]:!1}function Cc(){return Ox}var Px=v({},Qs,{key:function(e){if(e.key){var n=Ux[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(e){return e.type==="keypress"?pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fx=Bn(Px),Ix=v({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=Bn(Ix),Bx=v({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),zx=Bn(Bx),Hx=v({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gx=Bn(Hx),Vx=v({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kx=Bn(Vx),Xx=v({},cr,{newState:0,oldState:0}),Wx=Bn(Xx),qx=[9,13,27,32],wc=Ki&&"CompositionEvent"in window,$s=null;Ki&&"documentMode"in document&&($s=document.documentMode);var Yx=Ki&&"TextEvent"in window&&!$s,Np=Ki&&(!wc||$s&&8<$s&&11>=$s),Op=" ",Pp=!1;function Fp(e,n){switch(e){case"keyup":return qx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qr=!1;function jx(e,n){switch(e){case"compositionend":return Ip(n);case"keypress":return n.which!==32?null:(Pp=!0,Op);case"textInput":return e=n.data,e===Op&&Pp?null:e;default:return null}}function Zx(e,n){if(qr)return e==="compositionend"||!wc&&Fp(e,n)?(e=Cp(),dl=bc=Da=null,qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Np&&n.locale!=="ko"?null:n.data;default:return null}}var Kx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Kx[e.type]:n==="textarea"}function zp(e,n,a,o){Xr?Wr?Wr.push(o):Wr=[o]:Xr=o,n=su(n,"onChange"),0<n.length&&(a=new gl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var to=null,eo=null;function Qx(e){y0(e,0)}function vl(e){var n=ur(e);if(mn(n))return e}function Hp(e,n){if(e==="change")return n}var Gp=!1;if(Ki){var Dc;if(Ki){var Uc="oninput"in document;if(!Uc){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),Uc=typeof Vp.oninput=="function"}Dc=Uc}else Dc=!1;Gp=Dc&&(!document.documentMode||9<document.documentMode)}function kp(){to&&(to.detachEvent("onpropertychange",Xp),eo=to=null)}function Xp(e){if(e.propertyName==="value"&&vl(eo)){var n=[];zp(n,eo,e,yc(e)),Rp(Qx,n)}}function Jx(e,n,a){e==="focusin"?(kp(),to=n,eo=a,to.attachEvent("onpropertychange",Xp)):e==="focusout"&&kp()}function $x(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(eo)}function tS(e,n){if(e==="click")return vl(n)}function eS(e,n){if(e==="input"||e==="change")return vl(n)}function nS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:nS;function no(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ye.call(n,c)||!Kn(e[c],n[c]))return!1}return!0}function Wp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qp(e,n){var a=Wp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Wp(a)}}function Yp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Yp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function jp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=kt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=kt(e.document)}return n}function Lc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var iS=Ki&&"documentMode"in document&&11>=document.documentMode,Yr=null,Nc=null,io=null,Oc=!1;function Zp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Oc||Yr==null||Yr!==kt(o)||(o=Yr,"selectionStart"in o&&Lc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=su(Nc,"onSelect"),0<o.length&&(n=new gl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Yr)))}function fr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var jr={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionrun:fr("Transition","TransitionRun"),transitionstart:fr("Transition","TransitionStart"),transitioncancel:fr("Transition","TransitionCancel"),transitionend:fr("Transition","TransitionEnd")},Pc={},Kp={};Ki&&(Kp=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function hr(e){if(Pc[e])return Pc[e];if(!jr[e])return e;var n=jr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Kp)return Pc[e]=n[a];return e}var Qp=hr("animationend"),Jp=hr("animationiteration"),$p=hr("animationstart"),aS=hr("transitionrun"),rS=hr("transitionstart"),sS=hr("transitioncancel"),tm=hr("transitionend"),em=new Map,Fc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fc.push("scrollEnd");function Mi(e,n){em.set(e,n),K(n,[e])}var xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ri=[],Zr=0,Ic=0;function Sl(){for(var e=Zr,n=Ic=Zr=0;n<e;){var a=ri[n];ri[n++]=null;var o=ri[n];ri[n++]=null;var c=ri[n];ri[n++]=null;var h=ri[n];if(ri[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}h!==0&&nm(a,c,h)}}function yl(e,n,a,o){ri[Zr++]=e,ri[Zr++]=n,ri[Zr++]=a,ri[Zr++]=o,Ic|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Bc(e,n,a,o){return yl(e,n,a,o),Ml(e)}function dr(e,n){return yl(e,null,null,n),Ml(e)}function nm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,c&&n!==null&&(c=31-Ot(a),e=h.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),h):null}function Ml(e){if(50<Ao)throw Ao=0,jf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Kr={};function oS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,o){return new oS(e,n,a,o)}function zc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qi(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function im(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function El(e,n,a,o,c,h){var S=0;if(o=e,typeof e=="function")zc(e)&&(S=1);else if(typeof e=="string")S=hy(e,a,xt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=Qn(31,a,n,c),e.elementType=L,e.lanes=h,e;case w:return pr(a.children,c,h,n);case y:S=8,c|=24;break;case x:return e=Qn(12,a,n,c|2),e.elementType=x,e.lanes=h,e;case H:return e=Qn(13,a,n,c),e.elementType=H,e.lanes=h,e;case B:return e=Qn(19,a,n,c),e.elementType=B,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:S=10;break t;case R:S=9;break t;case U:S=11;break t;case F:S=14;break t;case T:S=16,o=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Qn(S,a,n,c),n.elementType=e,n.type=o,n.lanes=h,n}function pr(e,n,a,o){return e=Qn(7,e,o,n),e.lanes=a,e}function Hc(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function am(e){var n=Qn(18,null,null,0);return n.stateNode=e,n}function Gc(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var rm=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=rm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},rm.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var Qr=[],Jr=0,bl=null,ao=0,oi=[],li=0,Ua=null,Li=1,Ni="";function Ji(e,n){Qr[Jr++]=ao,Qr[Jr++]=bl,bl=e,ao=n}function sm(e,n,a){oi[li++]=Li,oi[li++]=Ni,oi[li++]=Ua,Ua=e;var o=Li;e=Ni;var c=32-Ot(o)-1;o&=~(1<<c),a+=1;var h=32-Ot(n)+c;if(30<h){var S=c-c%5;h=(o&(1<<S)-1).toString(32),o>>=S,c-=S,Li=1<<32-Ot(n)+c|a<<c|o,Ni=h+e}else Li=1<<h|a<<c|o,Ni=e}function Vc(e){e.return!==null&&(Ji(e,1),sm(e,1,0))}function kc(e){for(;e===bl;)bl=Qr[--Jr],Qr[Jr]=null,ao=Qr[--Jr],Qr[Jr]=null;for(;e===Ua;)Ua=oi[--li],oi[li]=null,Ni=oi[--li],oi[li]=null,Li=oi[--li],oi[li]=null}function om(e,n){oi[li++]=Li,oi[li++]=Ni,oi[li++]=Ua,Li=n.id,Ni=n.overflow,Ua=e}var yn=null,We=null,ye=!1,La=null,ui=!1,Xc=Error(r(519));function Na(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(si(n,e)),Xc}function lm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[sn]=e,n[pn]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)ve(Co[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),jn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),on(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||T0(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||Na(e,!0)}function um(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:yn=yn.return}}function $r(e){if(e!==yn)return!1;if(!ye)return um(e),ye=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||uh(e.type,e.memoizedProps)),a=!a),a&&We&&Na(e),um(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));We=O0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));We=O0(e)}else n===27?(n=We,Ya(e.type)?(e=ph,ph=null,We=e):We=n):We=yn?fi(e.stateNode.nextSibling):null;return!0}function mr(){We=yn=null,ye=!1}function Wc(){var e=La;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),La=null),e}function ro(e){La===null?La=[e]:La.push(e)}var qc=P(null),gr=null,$i=null;function Oa(e,n,a){ft(qc,n._currentValue),n._currentValue=a}function ta(e){e._currentValue=qc.current,Y(qc)}function Yc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function jc(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var S=c.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=c;for(var z=0;z<n.length;z++)if(A.context===n[z]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),Yc(h.return,a,e),o||(S=null);break t}h=A.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),Yc(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function ts(e,n,a,o){e=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var A=c.type;Kn(c.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(c===mt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(No):e=[No])}c=c.return}e!==null&&jc(n,e,a,o),n.flags|=262144}function Tl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _r(e){gr=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return cm(gr,e)}function Al(e,n){return gr===null&&_r(e),cm(e,n)}function cm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(e===null)throw Error(r(308));$i=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else $i=$i.next=n;return a}var lS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},uS=s.unstable_scheduleCallback,cS=s.unstable_NormalPriority,un={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zc(){return{controller:new lS,data:new Map,refCount:0}}function so(e){e.refCount--,e.refCount===0&&uS(cS,function(){e.controller.abort()})}var oo=null,Kc=0,es=0,ns=null;function fS(e,n){if(oo===null){var a=oo=[];Kc=0,es=th(),ns={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Kc++,n.then(fm,fm),n}function fm(){if(--Kc===0&&oo!==null){ns!==null&&(ns.status="fulfilled");var e=oo;oo=null,es=0,ns=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function hS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var hm=O.S;O.S=function(e,n){Zg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&fS(e,n),hm!==null&&hm(e,n)};var vr=P(null);function Qc(){var e=vr.current;return e!==null?e:ke.pooledCache}function Rl(e,n){n===null?ft(vr,vr.current):ft(vr,n.pool)}function dm(){var e=Qc();return e===null?null:{parent:un._currentValue,pool:e}}var is=Error(r(460)),Jc=Error(r(474)),Cl=Error(r(542)),wl={then:function(){}};function pm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_m(e),e;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_m(e),e}throw Sr=n,is}}function xr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Sr=a,is):a}}var Sr=null;function gm(){if(Sr===null)throw Error(r(459));var e=Sr;return Sr=null,e}function _m(e){if(e===is||e===Cl)throw Error(r(483))}var as=null,lo=0;function Dl(e){var n=lo;return lo+=1,as===null&&(as=[]),mm(as,e,n)}function uo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ul(e,n){throw n.$$typeof===_?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function vm(e){function n(j,k){if(e){var J=j.deletions;J===null?(j.deletions=[k],j.flags|=16):J.push(k)}}function a(j,k){if(!e)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function o(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function c(j,k){return j=Qi(j,k),j.index=0,j.sibling=null,j}function h(j,k,J){return j.index=J,e?(J=j.alternate,J!==null?(J=J.index,J<k?(j.flags|=67108866,k):J):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function S(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,k,J,vt){return k===null||k.tag!==6?(k=Hc(J,j.mode,vt),k.return=j,k):(k=c(k,J),k.return=j,k)}function z(j,k,J,vt){var Jt=J.type;return Jt===w?dt(j,k,J.props.children,vt,J.key):k!==null&&(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===T&&xr(Jt)===k.type)?(k=c(k,J.props),uo(k,J),k.return=j,k):(k=El(J.type,J.key,J.props,null,j.mode,vt),uo(k,J),k.return=j,k)}function $(j,k,J,vt){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=Gc(J,j.mode,vt),k.return=j,k):(k=c(k,J.children||[]),k.return=j,k)}function dt(j,k,J,vt,Jt){return k===null||k.tag!==7?(k=pr(J,j.mode,vt,Jt),k.return=j,k):(k=c(k,J),k.return=j,k)}function St(j,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Hc(""+k,j.mode,J),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return J=El(k.type,k.key,k.props,null,j.mode,J),uo(J,k),J.return=j,J;case b:return k=Gc(k,j.mode,J),k.return=j,k;case T:return k=xr(k),St(j,k,J)}if(Q(k)||tt(k))return k=pr(k,j.mode,J,null),k.return=j,k;if(typeof k.then=="function")return St(j,Dl(k),J);if(k.$$typeof===D)return St(j,Al(j,k),J);Ul(j,k)}return null}function at(j,k,J,vt){var Jt=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Jt!==null?null:A(j,k,""+J,vt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===Jt?z(j,k,J,vt):null;case b:return J.key===Jt?$(j,k,J,vt):null;case T:return J=xr(J),at(j,k,J,vt)}if(Q(J)||tt(J))return Jt!==null?null:dt(j,k,J,vt,null);if(typeof J.then=="function")return at(j,k,Dl(J),vt);if(J.$$typeof===D)return at(j,k,Al(j,J),vt);Ul(j,J)}return null}function st(j,k,J,vt,Jt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return j=j.get(J)||null,A(k,j,""+vt,Jt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case M:return j=j.get(vt.key===null?J:vt.key)||null,z(k,j,vt,Jt);case b:return j=j.get(vt.key===null?J:vt.key)||null,$(k,j,vt,Jt);case T:return vt=xr(vt),st(j,k,J,vt,Jt)}if(Q(vt)||tt(vt))return j=j.get(J)||null,dt(k,j,vt,Jt,null);if(typeof vt.then=="function")return st(j,k,J,Dl(vt),Jt);if(vt.$$typeof===D)return st(j,k,J,Al(k,vt),Jt);Ul(k,vt)}return null}function Vt(j,k,J,vt){for(var Jt=null,Re=null,Yt=k,de=k=0,Se=null;Yt!==null&&de<J.length;de++){Yt.index>de?(Se=Yt,Yt=null):Se=Yt.sibling;var Ce=at(j,Yt,J[de],vt);if(Ce===null){Yt===null&&(Yt=Se);break}e&&Yt&&Ce.alternate===null&&n(j,Yt),k=h(Ce,k,de),Re===null?Jt=Ce:Re.sibling=Ce,Re=Ce,Yt=Se}if(de===J.length)return a(j,Yt),ye&&Ji(j,de),Jt;if(Yt===null){for(;de<J.length;de++)Yt=St(j,J[de],vt),Yt!==null&&(k=h(Yt,k,de),Re===null?Jt=Yt:Re.sibling=Yt,Re=Yt);return ye&&Ji(j,de),Jt}for(Yt=o(Yt);de<J.length;de++)Se=st(Yt,j,de,J[de],vt),Se!==null&&(e&&Se.alternate!==null&&Yt.delete(Se.key===null?de:Se.key),k=h(Se,k,de),Re===null?Jt=Se:Re.sibling=Se,Re=Se);return e&&Yt.forEach(function(Ja){return n(j,Ja)}),ye&&Ji(j,de),Jt}function te(j,k,J,vt){if(J==null)throw Error(r(151));for(var Jt=null,Re=null,Yt=k,de=k=0,Se=null,Ce=J.next();Yt!==null&&!Ce.done;de++,Ce=J.next()){Yt.index>de?(Se=Yt,Yt=null):Se=Yt.sibling;var Ja=at(j,Yt,Ce.value,vt);if(Ja===null){Yt===null&&(Yt=Se);break}e&&Yt&&Ja.alternate===null&&n(j,Yt),k=h(Ja,k,de),Re===null?Jt=Ja:Re.sibling=Ja,Re=Ja,Yt=Se}if(Ce.done)return a(j,Yt),ye&&Ji(j,de),Jt;if(Yt===null){for(;!Ce.done;de++,Ce=J.next())Ce=St(j,Ce.value,vt),Ce!==null&&(k=h(Ce,k,de),Re===null?Jt=Ce:Re.sibling=Ce,Re=Ce);return ye&&Ji(j,de),Jt}for(Yt=o(Yt);!Ce.done;de++,Ce=J.next())Ce=st(Yt,j,de,Ce.value,vt),Ce!==null&&(e&&Ce.alternate!==null&&Yt.delete(Ce.key===null?de:Ce.key),k=h(Ce,k,de),Re===null?Jt=Ce:Re.sibling=Ce,Re=Ce);return e&&Yt.forEach(function(Ey){return n(j,Ey)}),ye&&Ji(j,de),Jt}function Ge(j,k,J,vt){if(typeof J=="object"&&J!==null&&J.type===w&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var Jt=J.key;k!==null;){if(k.key===Jt){if(Jt=J.type,Jt===w){if(k.tag===7){a(j,k.sibling),vt=c(k,J.props.children),vt.return=j,j=vt;break t}}else if(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===T&&xr(Jt)===k.type){a(j,k.sibling),vt=c(k,J.props),uo(vt,J),vt.return=j,j=vt;break t}a(j,k);break}else n(j,k);k=k.sibling}J.type===w?(vt=pr(J.props.children,j.mode,vt,J.key),vt.return=j,j=vt):(vt=El(J.type,J.key,J.props,null,j.mode,vt),uo(vt,J),vt.return=j,j=vt)}return S(j);case b:t:{for(Jt=J.key;k!==null;){if(k.key===Jt)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){a(j,k.sibling),vt=c(k,J.children||[]),vt.return=j,j=vt;break t}else{a(j,k);break}else n(j,k);k=k.sibling}vt=Gc(J,j.mode,vt),vt.return=j,j=vt}return S(j);case T:return J=xr(J),Ge(j,k,J,vt)}if(Q(J))return Vt(j,k,J,vt);if(tt(J)){if(Jt=tt(J),typeof Jt!="function")throw Error(r(150));return J=Jt.call(J),te(j,k,J,vt)}if(typeof J.then=="function")return Ge(j,k,Dl(J),vt);if(J.$$typeof===D)return Ge(j,k,Al(j,J),vt);Ul(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(a(j,k.sibling),vt=c(k,J),vt.return=j,j=vt):(a(j,k),vt=Hc(J,j.mode,vt),vt.return=j,j=vt),S(j)):a(j,k)}return function(j,k,J,vt){try{lo=0;var Jt=Ge(j,k,J,vt);return as=null,Jt}catch(Yt){if(Yt===is||Yt===Cl)throw Yt;var Re=Qn(29,Yt,null,j.mode);return Re.lanes=vt,Re.return=j,Re}}}var yr=vm(!0),xm=vm(!1),Pa=!1;function $c(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ia(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Ml(e),nm(e,null,a),n}return yl(e,o,n,a),Ml(e)}function co(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,zr(e,a)}}function ef(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var nf=!1;function fo(){if(nf){var e=ns;if(e!==null)throw e}}function ho(e,n,a,o){nf=!1;var c=e.updateQueue;Pa=!1;var h=c.firstBaseUpdate,S=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var z=A,$=z.next;z.next=null,S===null?h=$:S.next=$,S=z;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==S&&(A===null?dt.firstBaseUpdate=$:A.next=$,dt.lastBaseUpdate=z))}if(h!==null){var St=c.baseState;S=0,dt=$=z=null,A=h;do{var at=A.lane&-536870913,st=at!==A.lane;if(st?(xe&at)===at:(o&at)===at){at!==0&&at===es&&(nf=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Vt=e,te=A;at=n;var Ge=a;switch(te.tag){case 1:if(Vt=te.payload,typeof Vt=="function"){St=Vt.call(Ge,St,at);break t}St=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=te.payload,at=typeof Vt=="function"?Vt.call(Ge,St,at):Vt,at==null)break t;St=v({},St,at);break t;case 2:Pa=!0}}at=A.callback,at!==null&&(e.flags|=64,st&&(e.flags|=8192),st=c.callbacks,st===null?c.callbacks=[at]:st.push(at))}else st={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?($=dt=st,z=St):dt=dt.next=st,S|=at;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;st=A,A=st.next,st.next=null,c.lastBaseUpdate=st,c.shared.pending=null}}while(!0);dt===null&&(z=St),c.baseState=z,c.firstBaseUpdate=$,c.lastBaseUpdate=dt,h===null&&(c.shared.lanes=0),Va|=S,e.lanes=S,e.memoizedState=St}}function Sm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function ym(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Sm(a[e],n)}var rs=P(null),Ll=P(0);function Mm(e,n){e=ua,ft(Ll,e),ft(rs,n),ua=e|n.baseLanes}function af(){ft(Ll,ua),ft(rs,rs.current)}function rf(){ua=Ll.current,Y(rs),Y(Ll)}var Jn=P(null),ci=null;function Ba(e){var n=e.alternate;ft(en,en.current&1),ft(Jn,e),ci===null&&(n===null||rs.current!==null||n.memoizedState!==null)&&(ci=e)}function sf(e){ft(en,en.current),ft(Jn,e),ci===null&&(ci=e)}function Em(e){e.tag===22?(ft(en,en.current),ft(Jn,e),ci===null&&(ci=e)):za()}function za(){ft(en,en.current),ft(Jn,Jn.current)}function $n(e){Y(Jn),ci===e&&(ci=null),Y(en)}var en=P(0);function Nl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||hh(a)||dh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ea=0,ce=null,ze=null,cn=null,Ol=!1,ss=!1,Mr=!1,Pl=0,po=0,os=null,dS=0;function $e(){throw Error(r(321))}function of(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Kn(e[a],n[a]))return!1;return!0}function lf(e,n,a,o,c,h){return ea=h,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?sg:Ef,Mr=!1,h=a(o,c),Mr=!1,ss&&(h=Tm(n,a,o,c)),bm(e),h}function bm(e){O.H=_o;var n=ze!==null&&ze.next!==null;if(ea=0,cn=ze=ce=null,Ol=!1,po=0,os=null,n)throw Error(r(300));e===null||fn||(e=e.dependencies,e!==null&&Tl(e)&&(fn=!0))}function Tm(e,n,a,o){ce=e;var c=0;do{if(ss&&(os=null),po=0,ss=!1,25<=c)throw Error(r(301));if(c+=1,cn=ze=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}O.H=og,h=n(a,o)}while(ss);return h}function pS(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?mo(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(ce.flags|=1024),n}function uf(){var e=Pl!==0;return Pl=0,e}function cf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ff(e){if(Ol){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ol=!1}ea=0,cn=ze=ce=null,ss=!1,po=Pl=0,os=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ce.memoizedState=cn=e:cn=cn.next=e,cn}function nn(){if(ze===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=cn===null?ce.memoizedState:cn.next;if(n!==null)cn=n,ze=e;else{if(e===null)throw ce.alternate===null?Error(r(467)):Error(r(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},cn===null?ce.memoizedState=cn=e:cn=cn.next=e}return cn}function Fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(e){var n=po;return po+=1,os===null&&(os=[]),e=mm(os,e,n),n=ce,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?sg:Ef),e}function Il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mo(e);if(e.$$typeof===D)return Mn(e)}throw Error(r(438,String(e)))}function hf(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fl(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=ct;return n.index++,a}function na(e,n){return typeof n=="function"?n(e):n}function Bl(e){var n=nn();return df(n,ze,e)}function df(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,h=o.pending;if(h!==null){if(c!==null){var S=c.next;c.next=h.next,h.next=S}n.baseQueue=c=h,o.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{n=c.next;var A=S=null,z=null,$=n,dt=!1;do{var St=$.lane&-536870913;if(St!==$.lane?(xe&St)===St:(ea&St)===St){var at=$.revertLane;if(at===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),St===es&&(dt=!0);else if((ea&at)===at){$=$.next,at===es&&(dt=!0);continue}else St={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(A=z=St,S=h):z=z.next=St,ce.lanes|=at,Va|=at;St=$.action,Mr&&a(h,St),h=$.hasEagerState?$.eagerState:a(h,St)}else at={lane:St,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(A=z=at,S=h):z=z.next=at,ce.lanes|=St,Va|=St;$=$.next}while($!==null&&$!==n);if(z===null?S=h:z.next=A,!Kn(h,e.memoizedState)&&(fn=!0,dt&&(a=ns,a!==null)))throw a;e.memoizedState=h,e.baseState=S,e.baseQueue=z,o.lastRenderedState=h}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function pf(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do h=e(h,S.action),S=S.next;while(S!==c);Kn(h,n.memoizedState)||(fn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Am(e,n,a){var o=ce,c=nn(),h=ye;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Kn((ze||c).memoizedState,a);if(S&&(c.memoizedState=a,fn=!0),c=c.queue,_f(wm.bind(null,o,c,e),[e]),c.getSnapshot!==n||S||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,ls(9,{destroy:void 0},Cm.bind(null,o,c,a,n),null),ke===null)throw Error(r(349));h||(ea&127)!==0||Rm(o,n,a)}return a}function Rm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Fl(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Cm(e,n,a,o){n.value=a,n.getSnapshot=o,Dm(n)&&Um(e)}function wm(e,n,a){return a(function(){Dm(n)&&Um(e)})}function Dm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Kn(e,a)}catch{return!0}}function Um(e){var n=dr(e,2);n!==null&&kn(n,e,2)}function mf(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),Mr){Pt(!0);try{a()}finally{Pt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},n}function Lm(e,n,a,o){return e.baseState=a,df(e,ze,typeof o=="function"?o:na)}function mS(e,n,a,o,c){if(Gl(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};O.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Nm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Nm(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var h=O.T,S={};O.T=S;try{var A=a(c,o),z=O.S;z!==null&&z(S,A),Om(e,n,A)}catch($){gf(e,n,$)}finally{h!==null&&S.types!==null&&(h.types=S.types),O.T=h}}else try{h=a(c,o),Om(e,n,h)}catch($){gf(e,n,$)}}function Om(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Pm(e,n,o)},function(o){return gf(e,n,o)}):Pm(e,n,a)}function Pm(e,n,a){n.status="fulfilled",n.value=a,Fm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Nm(e,a)))}function gf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Fm(n),n=n.next;while(n!==o)}e.action=null}function Fm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Im(e,n){return n}function Bm(e,n){if(ye){var a=ke.formState;if(a!==null){t:{var o=ce;if(ye){if(We){e:{for(var c=We,h=ui;c.nodeType!==8;){if(!h){c=null;break e}if(c=fi(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){We=fi(c.nextSibling),o=c.data==="F!";break t}}Na(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:n},a.queue=o,a=ig.bind(null,ce,o),o.dispatch=a,o=mf(!1),h=Mf.bind(null,ce,!1,o.queue),o=Pn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=mS.bind(null,ce,c,h,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function zm(e){var n=nn();return Hm(n,ze,e)}function Hm(e,n,a){if(n=df(e,n,Im)[0],e=Bl(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(S){throw S===is?Cl:S}else o=n;n=nn();var c=n.queue,h=c.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,ls(9,{destroy:void 0},gS.bind(null,c,a),null)),[o,h,e]}function gS(e,n){e.action=n}function Gm(e){var n=nn(),a=ze;if(a!==null)return Hm(n,a,e);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ls(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Fl(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Vm(){return nn().memoizedState}function zl(e,n,a,o){var c=Pn();ce.flags|=e,c.memoizedState=ls(1|n,{destroy:void 0},a,o===void 0?null:o)}function Hl(e,n,a,o){var c=nn();o=o===void 0?null:o;var h=c.memoizedState.inst;ze!==null&&o!==null&&of(o,ze.memoizedState.deps)?c.memoizedState=ls(n,h,a,o):(ce.flags|=e,c.memoizedState=ls(1|n,h,a,o))}function km(e,n){zl(8390656,8,e,n)}function _f(e,n){Hl(2048,8,e,n)}function _S(e){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=Fl(),ce.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Xm(e){var n=nn().memoizedState;return _S({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Wm(e,n){return Hl(4,2,e,n)}function qm(e,n){return Hl(4,4,e,n)}function Ym(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function jm(e,n,a){a=a!=null?a.concat([e]):null,Hl(4,4,Ym.bind(null,n,e),a)}function vf(){}function Zm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&of(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Km(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&of(n,o[1]))return o[0];if(o=e(),Mr){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[o,n],o}function xf(e,n,a){return a===void 0||(ea&1073741824)!==0&&(xe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Qg(),ce.lanes|=e,Va|=e,a)}function Qm(e,n,a,o){return Kn(a,n)?a:rs.current!==null?(e=xf(e,a,o),Kn(e,n)||(fn=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(xe&261930)===0?(fn=!0,e.memoizedState=a):(e=Qg(),ce.lanes|=e,Va|=e,n)}function Jm(e,n,a,o,c){var h=I.p;I.p=h!==0&&8>h?h:8;var S=O.T,A={};O.T=A,Mf(e,!1,n,a);try{var z=c(),$=O.S;if($!==null&&$(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var dt=hS(z,o);go(e,n,dt,ni(e))}else go(e,n,o,ni(e))}catch(St){go(e,n,{then:function(){},status:"rejected",reason:St},ni())}finally{I.p=h,S!==null&&A.types!==null&&(S.types=A.types),O.T=S}}function vS(){}function Sf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=$m(e).queue;Jm(e,c,n,ot,a===null?vS:function(){return tg(e),a(o)})}function $m(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function tg(e){var n=$m(e);n.next===null&&(n=e.alternate.memoizedState),go(e,n.next.queue,{},ni())}function yf(){return Mn(No)}function eg(){return nn().memoizedState}function ng(){return nn().memoizedState}function xS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();e=Fa(a);var o=Ia(n,e,a);o!==null&&(kn(o,n,a),co(o,n,a)),n={cache:Zc()},e.payload=n;return}n=n.return}}function SS(e,n,a){var o=ni();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(e)?ag(n,a):(a=Bc(e,n,a,o),a!==null&&(kn(a,e,o),rg(a,n,o)))}function ig(e,n,a){var o=ni();go(e,n,a,o)}function go(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(e))ag(n,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,A=h(S,a);if(c.hasEagerState=!0,c.eagerState=A,Kn(A,S))return yl(e,n,c,0),ke===null&&Sl(),!1}catch{}if(a=Bc(e,n,c,o),a!==null)return kn(a,e,o),rg(a,n,o),!0}return!1}function Mf(e,n,a,o){if(o={lane:2,revertLane:th(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Gl(e)){if(n)throw Error(r(479))}else n=Bc(e,a,o,2),n!==null&&kn(n,e,2)}function Gl(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function ag(e,n){ss=Ol=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function rg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,zr(e,a)}}var _o={readContext:Mn,use:Il,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};_o.useEffectEvent=$e;var sg={readContext:Mn,use:Il,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:km,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,zl(4194308,4,Ym.bind(null,n,e),a)},useLayoutEffect:function(e,n){return zl(4194308,4,e,n)},useInsertionEffect:function(e,n){zl(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var o=e();if(Mr){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Pn();if(a!==void 0){var c=a(n);if(Mr){Pt(!0);try{a(n)}finally{Pt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=SS.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=mf(e);var n=e.queue,a=ig.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:vf,useDeferredValue:function(e,n){var a=Pn();return xf(a,e,n)},useTransition:function(){var e=mf(!1);return e=Jm.bind(null,ce,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ce,c=Pn();if(ye){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(xe&127)!==0||Rm(o,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,km(wm.bind(null,o,h,e),[e]),o.flags|=2048,ls(9,{destroy:void 0},Cm.bind(null,o,h,a,n),null),a},useId:function(){var e=Pn(),n=ke.identifierPrefix;if(ye){var a=Ni,o=Li;a=(o&~(1<<32-Ot(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=dS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:yf,useFormState:Bm,useActionState:Bm,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Mf.bind(null,ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:hf,useCacheRefresh:function(){return Pn().memoizedState=xS.bind(null,ce)},useEffectEvent:function(e){var n=Pn(),a={impl:e};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Ef={readContext:Mn,use:Il,useCallback:Zm,useContext:Mn,useEffect:_f,useImperativeHandle:jm,useInsertionEffect:Wm,useLayoutEffect:qm,useMemo:Km,useReducer:Bl,useRef:Vm,useState:function(){return Bl(na)},useDebugValue:vf,useDeferredValue:function(e,n){var a=nn();return Qm(a,ze.memoizedState,e,n)},useTransition:function(){var e=Bl(na)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:Am,useId:eg,useHostTransitionStatus:yf,useFormState:zm,useActionState:zm,useOptimistic:function(e,n){var a=nn();return Lm(a,ze,e,n)},useMemoCache:hf,useCacheRefresh:ng};Ef.useEffectEvent=Xm;var og={readContext:Mn,use:Il,useCallback:Zm,useContext:Mn,useEffect:_f,useImperativeHandle:jm,useInsertionEffect:Wm,useLayoutEffect:qm,useMemo:Km,useReducer:pf,useRef:Vm,useState:function(){return pf(na)},useDebugValue:vf,useDeferredValue:function(e,n){var a=nn();return ze===null?xf(a,e,n):Qm(a,ze.memoizedState,e,n)},useTransition:function(){var e=pf(na)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:Am,useId:eg,useHostTransitionStatus:yf,useFormState:Gm,useActionState:Gm,useOptimistic:function(e,n){var a=nn();return ze!==null?Lm(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:hf,useCacheRefresh:ng};og.useEffectEvent=Xm;function bf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Tf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ni(),c=Fa(o);c.payload=n,a!=null&&(c.callback=a),n=Ia(e,c,o),n!==null&&(kn(n,e,o),co(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ni(),c=Fa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ia(e,c,o),n!==null&&(kn(n,e,o),co(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ni(),o=Fa(a);o.tag=2,n!=null&&(o.callback=n),n=Ia(e,o,a),n!==null&&(kn(n,e,a),co(n,e,a))}};function lg(e,n,a,o,c,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!no(a,o)||!no(c,h):!0}function ug(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Tf.enqueueReplaceState(n,n.state,null)}function Er(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function cg(e){xl(e)}function fg(e){console.error(e)}function hg(e){xl(e)}function Vl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function dg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Af(e,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(e,n)},a}function pg(e){return e=Fa(e),e.tag=3,e}function mg(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;e.payload=function(){return c(h)},e.callback=function(){dg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){dg(n,a,o),typeof c!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function yS(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ts(n,a,c,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?tu():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Qf(e,o,c)),!1;case 22:return a.flags|=65536,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Qf(e,o,c)),!1}throw Error(r(435,a.tag))}return Qf(e,o,c),tu(),!1}if(ye)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Xc&&(e=Error(r(422),{cause:o}),ro(si(e,a)))):(o!==Xc&&(n=Error(r(423),{cause:o}),ro(si(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=si(o,a),c=Af(e.stateNode,o,c),ef(e,c),tn!==4&&(tn=2)),!1;var h=Error(r(520),{cause:o});if(h=si(h,a),To===null?To=[h]:To.push(h),tn!==4&&(tn=2),n===null)return!0;o=si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Af(a.stateNode,o,e),ef(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ka===null||!ka.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=pg(c),mg(c,e,a,o),ef(a,c),!1}a=a.return}while(a!==null);return!1}var Rf=Error(r(461)),fn=!1;function En(e,n,a,o){n.child=e===null?xm(n,null,a,o):yr(n,e.child,a,o)}function gg(e,n,a,o,c){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return _r(n),o=lf(e,n,a,S,h,c),A=uf(),e!==null&&!fn?(cf(e,n,c),ia(e,n,c)):(ye&&A&&Vc(n),n.flags|=1,En(e,n,o,c),n.child)}function _g(e,n,a,o,c){if(e===null){var h=a.type;return typeof h=="function"&&!zc(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,vg(e,n,h,o,c)):(e=El(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Pf(e,c)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(S,o)&&e.ref===n.ref)return ia(e,n,c)}return n.flags|=1,e=Qi(h,o),e.ref=n.ref,e.return=n,n.child=e}function vg(e,n,a,o,c){if(e!==null){var h=e.memoizedProps;if(no(h,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=h,Pf(e,c))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,ia(e,n,c)}return Cf(e,n,a,o,c)}function xg(e,n,a,o){var c=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~h}else o=0,n.child=null;return Sg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rl(n,h!==null?h.cachePool:null),h!==null?Mm(n,h):af(),Em(n);else return o=n.lanes=536870912,Sg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Rl(n,h.cachePool),Mm(n,h),za(),n.memoizedState=null):(e!==null&&Rl(n,null),af(),za());return En(e,n,c,a),n.child}function vo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Sg(e,n,a,o,c){var h=Qc();return h=h===null?null:{parent:un._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Rl(n,null),af(),Em(n),e!==null&&ts(e,n,o,!0),n.childLanes=c,null}function kl(e,n){return n=Wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function yg(e,n,a){return yr(n,e.child,null,a),e=kl(n,n.pendingProps),e.flags|=2,$n(n),n.memoizedState=null,e}function MS(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ye){if(o.mode==="hidden")return e=kl(n,o),n.lanes=536870912,vo(null,e);if(sf(n),(e=We)?(e=N0(e,ui),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Li,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=am(e),a.return=n,n.child=a,yn=n,We=null)):e=null,e===null)throw Na(n);return n.lanes=536870912,null}return kl(n,o)}var h=e.memoizedState;if(h!==null){var S=h.dehydrated;if(sf(n),c)if(n.flags&256)n.flags&=-257,n=yg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||ts(e,n,a,!1),c=(a&e.childLanes)!==0,fn||c){if(o=ke,o!==null&&(S=ll(o,a),S!==0&&S!==h.retryLane))throw h.retryLane=S,dr(e,S),kn(o,e,S),Rf;tu(),n=yg(e,n,a)}else e=h.treeContext,We=fi(S.nextSibling),yn=n,ye=!0,La=null,ui=!1,e!==null&&om(n,e),n=kl(n,o),n.flags|=4096;return n}return e=Qi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Xl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Cf(e,n,a,o,c){return _r(n),a=lf(e,n,a,o,void 0,c),o=uf(),e!==null&&!fn?(cf(e,n,c),ia(e,n,c)):(ye&&o&&Vc(n),n.flags|=1,En(e,n,a,c),n.child)}function Mg(e,n,a,o,c,h){return _r(n),n.updateQueue=null,a=Tm(n,o,a,c),bm(e),o=uf(),e!==null&&!fn?(cf(e,n,h),ia(e,n,h)):(ye&&o&&Vc(n),n.flags|=1,En(e,n,a,h),n.child)}function Eg(e,n,a,o,c){if(_r(n),n.stateNode===null){var h=Kr,S=a.contextType;typeof S=="object"&&S!==null&&(h=Mn(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Tf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},$c(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?Mn(S):Kr,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(bf(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&Tf.enqueueReplaceState(h,h.state,null),ho(n,o,h,c),fo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,z=Er(a,A);h.props=z;var $=h.context,dt=a.contextType;S=Kr,typeof dt=="object"&&dt!==null&&(S=Mn(dt));var St=a.getDerivedStateFromProps;dt=typeof St=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,dt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||$!==S)&&ug(n,h,o,S),Pa=!1;var at=n.memoizedState;h.state=at,ho(n,o,h,c),fo(),$=n.memoizedState,A||at!==$||Pa?(typeof St=="function"&&(bf(n,a,St,o),$=n.memoizedState),(z=Pa||lg(n,a,z,o,at,$,S))?(dt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),h.props=o,h.state=$,h.context=S,o=z):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,tf(e,n),S=n.memoizedProps,dt=Er(a,S),h.props=dt,St=n.pendingProps,at=h.context,$=a.contextType,z=Kr,typeof $=="object"&&$!==null&&(z=Mn($)),A=a.getDerivedStateFromProps,($=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==St||at!==z)&&ug(n,h,o,z),Pa=!1,at=n.memoizedState,h.state=at,ho(n,o,h,c),fo();var st=n.memoizedState;S!==St||at!==st||Pa||e!==null&&e.dependencies!==null&&Tl(e.dependencies)?(typeof A=="function"&&(bf(n,a,A,o),st=n.memoizedState),(dt=Pa||lg(n,a,dt,o,at,st,z)||e!==null&&e.dependencies!==null&&Tl(e.dependencies))?($||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,st,z),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,st,z)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=st),h.props=o,h.state=st,h.context=z,o=dt):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Xl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=yr(n,e.child,null,c),n.child=yr(n,null,a,c)):En(e,n,a,c),n.memoizedState=h.state,e=n.child):e=ia(e,n,c),e}function bg(e,n,a,o){return mr(),n.flags|=256,En(e,n,a,o),n.child}var wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Df(e){return{baseLanes:e,cachePool:dm()}}function Uf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ei),e}function Tg(e,n,a){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(ye){if(c?Ba(n):za(),(e=We)?(e=N0(e,ui),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Li,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=am(e),a.return=n,n.child=a,yn=n,We=null)):e=null,e===null)throw Na(n);return dh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,c?(za(),c=n.mode,A=Wl({mode:"hidden",children:A},c),o=pr(o,c,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Df(a),o.childLanes=Uf(e,S,a),n.memoizedState=wf,vo(null,o)):(Ba(n),Lf(n,A))}var z=e.memoizedState;if(z!==null&&(A=z.dehydrated,A!==null)){if(h)n.flags&256?(Ba(n),n.flags&=-257,n=Nf(e,n,a)):n.memoizedState!==null?(za(),n.child=e.child,n.flags|=128,n=null):(za(),A=o.fallback,c=n.mode,o=Wl({mode:"visible",children:o.children},c),A=pr(A,c,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,yr(n,e.child,null,a),o=n.child,o.memoizedState=Df(a),o.childLanes=Uf(e,S,a),n.memoizedState=wf,n=vo(null,o));else if(Ba(n),dh(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var $=S.dgst;S=$,o=Error(r(419)),o.stack="",o.digest=S,ro({value:o,source:null,stack:null}),n=Nf(e,n,a)}else if(fn||ts(e,n,a,!1),S=(a&e.childLanes)!==0,fn||S){if(S=ke,S!==null&&(o=ll(S,a),o!==0&&o!==z.retryLane))throw z.retryLane=o,dr(e,o),kn(S,e,o),Rf;hh(A)||tu(),n=Nf(e,n,a)}else hh(A)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,We=fi(A.nextSibling),yn=n,ye=!0,La=null,ui=!1,e!==null&&om(n,e),n=Lf(n,o.children),n.flags|=4096);return n}return c?(za(),A=o.fallback,c=n.mode,z=e.child,$=z.sibling,o=Qi(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,$!==null?A=Qi($,A):(A=pr(A,c,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,vo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Df(a):(c=A.cachePool,c!==null?(z=un._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=dm(),A={baseLanes:A.baseLanes|a,cachePool:c}),o.memoizedState=A,o.childLanes=Uf(e,S,a),n.memoizedState=wf,vo(e.child,o)):(Ba(n),a=e.child,e=a.sibling,a=Qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Lf(e,n){return n=Wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Wl(e,n){return e=Qn(22,e,null,n),e.lanes=0,e}function Nf(e,n,a){return yr(n,e.child,null,a),e=Lf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ag(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Yc(e.return,n,a)}function Of(e,n,a,o,c,h){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=c,S.treeForkCount=h)}function Rg(e,n,a){var o=n.pendingProps,c=o.revealOrder,h=o.tail;o=o.children;var S=en.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,ft(en,S),En(e,n,o,a),o=ye?ao:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ag(e,a,n);else if(e.tag===19)Ag(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Nl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Of(n,!1,c,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Nl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Of(n,!0,a,null,h,o);break;case"together":Of(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ia(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Va|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ts(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Qi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Qi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Pf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Tl(e)))}function ES(e,n,a){switch(n.tag){case 3:Mt(n,n.stateNode.containerInfo),Oa(n,un,e.memoizedState.cache),mr();break;case 27:case 5:Kt(n);break;case 4:Mt(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,sf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Tg(e,n,a):(Ba(n),e=ia(e,n,a),e!==null?e.sibling:null);Ba(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ts(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Rg(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ft(en,en.current),o)break;return null;case 22:return n.lanes=0,xg(e,n,a,n.pendingProps);case 24:Oa(n,un,e.memoizedState.cache)}return ia(e,n,a)}function Cg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Pf(e,a)&&(n.flags&128)===0)return fn=!1,ES(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,ye&&(n.flags&1048576)!==0&&sm(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=xr(n.elementType),n.type=e,typeof e=="function")zc(e)?(o=Er(e,o),n.tag=1,n=Eg(null,n,e,o,a)):(n.tag=0,n=Cf(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===U){n.tag=11,n=gg(null,n,e,o,a);break t}else if(c===F){n.tag=14,n=_g(null,n,e,o,a);break t}}throw n=lt(e)||e,Error(r(306,n,""))}}return n;case 0:return Cf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Er(o,n.pendingProps),Eg(e,n,o,c,a);case 3:t:{if(Mt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,tf(e,n),ho(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Oa(n,un,o),o!==h.cache&&jc(n,[un],a,!0),fo(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=bg(e,n,o,a);break t}else if(o!==c){c=si(Error(r(424)),n),ro(c),n=bg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,We=fi(e.firstChild),yn=n,ye=!0,La=null,ui=!0,a=xm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(mr(),o===c){n=ia(e,n,a);break t}En(e,n,o,a)}n=n.child}return n;case 26:return Xl(e,n),e===null?(a=z0(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,e=n.pendingProps,o=ou(Z.current).createElement(a),o[sn]=n,o[pn]=e,bn(o,a,e),X(o),n.stateNode=o):n.memoizedState=z0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&ye&&(o=n.stateNode=F0(n.type,n.pendingProps,Z.current),yn=n,ui=!0,c=We,Ya(n.type)?(ph=c,We=fi(o.firstChild)):We=c),En(e,n,n.pendingProps.children,a),Xl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ye&&((c=o=We)&&(o=$S(o,n.type,n.pendingProps,ui),o!==null?(n.stateNode=o,yn=n,We=fi(o.firstChild),ui=!1,c=!0):c=!1),c||Na(n)),Kt(n),c=n.type,h=n.pendingProps,S=e!==null?e.memoizedProps:null,o=h.children,uh(c,h)?o=null:S!==null&&uh(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=lf(e,n,pS,null,null,a),No._currentValue=c),Xl(e,n),En(e,n,o,a),n.child;case 6:return e===null&&ye&&((e=a=We)&&(a=ty(a,n.pendingProps,ui),a!==null?(n.stateNode=a,yn=n,We=null,e=!0):e=!1),e||Na(n)),null;case 13:return Tg(e,n,a);case 4:return Mt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=yr(n,null,o,a):En(e,n,o,a),n.child;case 11:return gg(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Oa(n,n.type,o.value),En(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,_r(n),c=Mn(c),o=o(c),n.flags|=1,En(e,n,o,a),n.child;case 14:return _g(e,n,n.type,n.pendingProps,a);case 15:return vg(e,n,n.type,n.pendingProps,a);case 19:return Rg(e,n,a);case 31:return MS(e,n,a);case 22:return xg(e,n,a,n.pendingProps);case 24:return _r(n),o=Mn(un),e===null?(c=Qc(),c===null&&(c=ke,h=Zc(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:o,cache:c},$c(n),Oa(n,un,c)):((e.lanes&a)!==0&&(tf(e,n),ho(n,null,null,a),fo()),c=e.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Oa(n,un,o)):(o=h.cache,Oa(n,un,o),o!==c.cache&&jc(n,[un],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function aa(e){e.flags|=4}function Ff(e,n,a,o,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(e0())e.flags|=8192;else throw Sr=wl,Jc}else e.flags&=-16777217}function wg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!X0(n))if(e0())e.flags|=8192;else throw Sr=wl,Jc}function ql(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Oe():536870912,e.lanes|=n,hs|=n)}function xo(e,n){if(!ye)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function bS(e,n,a){var o=n.pendingProps;switch(kc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ta(un),Bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&($r(n)?aa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wc())),qe(n),null;case 26:var c=n.type,h=n.memoizedState;return e===null?(aa(n),h!==null?(qe(n),wg(n,h)):(qe(n),Ff(n,c,null,o,a))):h?h!==e.memoizedState?(aa(n),qe(n),wg(n,h)):(qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&aa(n),qe(n),Ff(n,c,e,o,a)),null;case 27:if($t(n),a=Z.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}e=xt.current,$r(n)?lm(n):(e=F0(c,o,a),n.stateNode=e,aa(n))}return qe(n),null;case 5:if($t(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(h=xt.current,$r(n))lm(n);else{var S=ou(Z.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(c,{is:o.is}):S.createElement(c)}}h[sn]=n,h[pn]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;t:switch(bn(h,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&aa(n)}}return qe(n),Ff(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Z.current,$r(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=yn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||T0(e.nodeValue,a)),e||Na(n,!0)}else e=ou(e).createTextNode(o),e[sn]=n,n.stateNode=e}return qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=$r(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[sn]=n}else mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),e=!1}else a=Wc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=$r(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=Wc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ql(n,n.updateQueue),qe(n),null);case 4:return Bt(),e===null&&ah(n.stateNode.containerInfo),qe(n),null;case 10:return ta(n.type),qe(n),null;case 19:if(Y(en),o=n.memoizedState,o===null)return qe(n),null;if(c=(n.flags&128)!==0,h=o.rendering,h===null)if(c)xo(o,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Nl(e),h!==null){for(n.flags|=128,xo(o,!1),e=h.updateQueue,n.updateQueue=e,ql(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)im(a,e),a=a.sibling;return ft(en,en.current&1|2),ye&&Ji(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>Ql&&(n.flags|=128,c=!0,xo(o,!1),n.lanes=4194304)}else{if(!c)if(e=Nl(h),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,ql(n,e),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!ye)return qe(n),null}else 2*E()-o.renderingStartTime>Ql&&a!==536870912&&(n.flags|=128,c=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=en.current,ft(en,c?a&1|2:a&1),ye&&Ji(n,o.treeForkCount),e):(qe(n),null);case 22:case 23:return $n(n),rf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&ql(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Y(vr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(un),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function TS(e,n){switch(kc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ta(un),Bt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(r(340));mr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if($n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));mr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Y(en),null;case 4:return Bt(),null;case 10:return ta(n.type),null;case 22:case 23:return $n(n),rf(),e!==null&&Y(vr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ta(un),null;case 25:return null;default:return null}}function Dg(e,n){switch(kc(n),n.tag){case 3:ta(un),Bt();break;case 26:case 27:case 5:$t(n);break;case 4:Bt();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:Y(en);break;case 10:ta(n.type);break;case 22:case 23:$n(n),rf(),e!==null&&Y(vr);break;case 24:ta(un)}}function So(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==c)}}catch(A){Fe(n,n.return,A)}}function Ha(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,c=n;var z=a,$=A;try{$()}catch(dt){Fe(c,z,dt)}}}o=o.next}while(o!==h)}}catch(dt){Fe(n,n.return,dt)}}function Ug(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{ym(n,a)}catch(o){Fe(e,e.return,o)}}}function Lg(e,n,a){a.props=Er(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function yo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Fe(e,n,c)}}function Oi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Fe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Fe(e,n,c)}else a.current=null}function Ng(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Fe(e,e.return,c)}}function If(e,n,a){try{var o=e.stateNode;YS(o,e.type,a,n),o[pn]=n}catch(c){Fe(e,e.return,c)}}function Og(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function Bf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Og(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(zf(e,n,a),e=e.sibling;e!==null;)zf(e,n,a),e=e.sibling}function Yl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Yl(e,n,a),e=e.sibling;e!==null;)Yl(e,n,a),e=e.sibling}function Pg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,o,a),n[sn]=e,n[pn]=a}catch(h){Fe(e,e.return,h)}}var ra=!1,hn=!1,Hf=!1,Fg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function AS(e,n){if(e=e.containerInfo,oh=pu,e=jp(e),Lc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var S=0,A=-1,z=-1,$=0,dt=0,St=e,at=null;e:for(;;){for(var st;St!==a||c!==0&&St.nodeType!==3||(A=S+c),St!==h||o!==0&&St.nodeType!==3||(z=S+o),St.nodeType===3&&(S+=St.nodeValue.length),(st=St.firstChild)!==null;)at=St,St=st;for(;;){if(St===e)break e;if(at===a&&++$===c&&(A=S),at===h&&++dt===o&&(z=S),(st=St.nextSibling)!==null)break;St=at,at=St.parentNode}St=st}a=A===-1||z===-1?null:{start:A,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(lh={focusedElem:e,selectionRange:a},pu=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,c=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Vt=Er(a.type,c);e=o.getSnapshotBeforeUpdate(Vt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Fe(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)fh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function Ig(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:oa(e,a),o&4&&So(5,a);break;case 1:if(oa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Fe(a,a.return,S)}else{var c=Er(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Fe(a,a.return,S)}}o&64&&Ug(a),o&512&&yo(a,a.return);break;case 3:if(oa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ym(e,n)}catch(S){Fe(a,a.return,S)}}break;case 27:n===null&&o&4&&Pg(a);case 26:case 5:oa(e,a),n===null&&o&4&&Ng(a),o&512&&yo(a,a.return);break;case 12:oa(e,a);break;case 31:oa(e,a),o&4&&Hg(e,a);break;case 13:oa(e,a),o&4&&Gg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=PS.bind(null,a),ey(e,a))));break;case 22:if(o=a.memoizedState!==null||ra,!o){n=n!==null&&n.memoizedState!==null||hn,c=ra;var h=hn;ra=o,(hn=n)&&!h?la(e,a,(a.subtreeFlags&8772)!==0):oa(e,a),ra=c,hn=h}break;case 30:break;default:oa(e,a)}}function Bg(e){var n=e.alternate;n!==null&&(e.alternate=null,Bg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&js(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,zn=!1;function sa(e,n,a){for(a=a.child;a!==null;)zg(e,n,a),a=a.sibling}function zg(e,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 26:hn||Oi(a,n),sa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Oi(a,n);var o=Ke,c=zn;Ya(a.type)&&(Ke=a.stateNode,zn=!1),sa(e,n,a),Do(a.stateNode),Ke=o,zn=c;break;case 5:hn||Oi(a,n);case 6:if(o=Ke,c=zn,Ke=null,sa(e,n,a),Ke=o,zn=c,Ke!==null)if(zn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(h){Fe(a,n,h)}else try{Ke.removeChild(a.stateNode)}catch(h){Fe(a,n,h)}break;case 18:Ke!==null&&(zn?(e=Ke,U0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ss(e)):U0(Ke,a.stateNode));break;case 4:o=Ke,c=zn,Ke=a.stateNode.containerInfo,zn=!0,sa(e,n,a),Ke=o,zn=c;break;case 0:case 11:case 14:case 15:Ha(2,a,n),hn||Ha(4,a,n),sa(e,n,a);break;case 1:hn||(Oi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Lg(a,n,o)),sa(e,n,a);break;case 21:sa(e,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,sa(e,n,a),hn=o;break;default:sa(e,n,a)}}function Hg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ss(e)}catch(a){Fe(n,n.return,a)}}}function Gg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ss(e)}catch(a){Fe(n,n.return,a)}}function RS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Fg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Fg),n;default:throw Error(r(435,e.tag))}}function jl(e,n){var a=RS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=FS.bind(null,e,o);o.then(c,c)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],h=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Ya(A.type)){Ke=A.stateNode,zn=!1;break t}break;case 5:Ke=A.stateNode,zn=!1;break t;case 3:case 4:Ke=A.stateNode.containerInfo,zn=!0;break t}A=A.return}if(Ke===null)throw Error(r(160));zg(h,S,c),Ke=null,zn=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Vg(n,e),n=n.sibling}var Ei=null;function Vg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),o&4&&(Ha(3,e,e.return),So(3,e),Ha(5,e,e.return));break;case 1:Hn(n,e),Gn(e),o&512&&(hn||a===null||Oi(a,a.return)),o&64&&ra&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Ei;if(Hn(n,e),Gn(e),o&512&&(hn||a===null||Oi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[lr]||h[sn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),bn(h,o,a),h[sn]=e,X(h),o=h;break t;case"link":var S=V0("link","href",c).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(h=S[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}h=c.createElement(o),bn(h,o,a),c.head.appendChild(h);break;case"meta":if(S=V0("meta","content",c).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(h=S[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}h=c.createElement(o),bn(h,o,a),c.head.appendChild(h);break;default:throw Error(r(468,o))}h[sn]=e,X(h),o=h}e.stateNode=o}else k0(c,e.type,e.stateNode);else e.stateNode=G0(c,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?k0(c,e.type,e.stateNode):G0(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&If(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),o&512&&(hn||a===null||Oi(a,a.return)),a!==null&&o&4&&If(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),o&512&&(hn||a===null||Oi(a,a.return)),e.flags&32){c=e.stateNode;try{On(c,"")}catch(Vt){Fe(e,e.return,Vt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,If(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Hf=!0);break;case 6:if(Hn(n,e),Gn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Vt){Fe(e,e.return,Vt)}}break;case 3:if(cu=null,c=Ei,Ei=lu(n.containerInfo),Hn(n,e),Ei=c,Gn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ss(n.containerInfo)}catch(Vt){Fe(e,e.return,Vt)}Hf&&(Hf=!1,kg(e));break;case 4:o=Ei,Ei=lu(e.stateNode.containerInfo),Hn(n,e),Gn(e),Ei=o;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Kl=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 22:c=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,$=ra,dt=hn;if(ra=$||c,hn=dt||z,Hn(n,e),hn=dt,ra=$,Gn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||ra||hn||br(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(h=z.stateNode,c)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=z.stateNode;var St=z.memoizedProps.style,at=St!=null&&St.hasOwnProperty("display")?St.display:null;A.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Vt){Fe(z,z.return,Vt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(Vt){Fe(z,z.return,Vt)}}}else if(n.tag===18){if(a===null){z=n;try{var st=z.stateNode;c?L0(st,!0):L0(z.stateNode,!1)}catch(Vt){Fe(z,z.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,jl(e,a))));break;case 19:Hn(n,e),Gn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Og(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,h=Bf(e);Yl(e,h,c);break;case 5:var S=a.stateNode;a.flags&32&&(On(S,""),a.flags&=-33);var A=Bf(e);Yl(e,A,S);break;case 3:case 4:var z=a.stateNode.containerInfo,$=Bf(e);zf(e,$,z);break;default:throw Error(r(161))}}catch(dt){Fe(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function kg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;kg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function oa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ig(e,n.alternate,n),n=n.sibling}function br(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ha(4,n,n.return),br(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Lg(n,n.return,a),br(n);break;case 27:Do(n.stateNode);case 26:case 5:Oi(n,n.return),br(n);break;case 22:n.memoizedState===null&&br(n);break;case 30:br(n);break;default:br(n)}e=e.sibling}}function la(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:la(c,h,a),So(4,h);break;case 1:if(la(c,h,a),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Fe(o,o.return,$)}if(o=h,c=o.updateQueue,c!==null){var A=o.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Sm(z[c],A)}catch($){Fe(o,o.return,$)}}a&&S&64&&Ug(h),yo(h,h.return);break;case 27:Pg(h);case 26:case 5:la(c,h,a),a&&o===null&&S&4&&Ng(h),yo(h,h.return);break;case 12:la(c,h,a);break;case 31:la(c,h,a),a&&S&4&&Hg(c,h);break;case 13:la(c,h,a),a&&S&4&&Gg(c,h);break;case 22:h.memoizedState===null&&la(c,h,a),yo(h,h.return);break;case 30:break;default:la(c,h,a)}n=n.sibling}}function Gf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&so(a))}function Vf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e))}function bi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Xg(e,n,a,o),n=n.sibling}function Xg(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,o),c&2048&&So(9,n);break;case 1:bi(e,n,a,o);break;case 3:bi(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e)));break;case 12:if(c&2048){bi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,S=h.id,A=h.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Fe(n,n.return,z)}}else bi(e,n,a,o);break;case 31:bi(e,n,a,o);break;case 13:bi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?bi(e,n,a,o):Mo(e,n):h._visibility&2?bi(e,n,a,o):(h._visibility|=2,us(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Gf(S,n);break;case 24:bi(e,n,a,o),c&2048&&Vf(n.alternate,n);break;default:bi(e,n,a,o)}}function us(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,S=n,A=a,z=o,$=S.flags;switch(S.tag){case 0:case 11:case 15:us(h,S,A,z,c),So(8,S);break;case 23:break;case 22:var dt=S.stateNode;S.memoizedState!==null?dt._visibility&2?us(h,S,A,z,c):Mo(h,S):(dt._visibility|=2,us(h,S,A,z,c)),c&&$&2048&&Gf(S.alternate,S);break;case 24:us(h,S,A,z,c),c&&$&2048&&Vf(S.alternate,S);break;default:us(h,S,A,z,c)}n=n.sibling}}function Mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:Mo(a,o),c&2048&&Gf(o.alternate,o);break;case 24:Mo(a,o),c&2048&&Vf(o.alternate,o);break;default:Mo(a,o)}n=n.sibling}}var Eo=8192;function cs(e,n,a){if(e.subtreeFlags&Eo)for(e=e.child;e!==null;)Wg(e,n,a),e=e.sibling}function Wg(e,n,a){switch(e.tag){case 26:cs(e,n,a),e.flags&Eo&&e.memoizedState!==null&&dy(a,Ei,e.memoizedState,e.memoizedProps);break;case 5:cs(e,n,a);break;case 3:case 4:var o=Ei;Ei=lu(e.stateNode.containerInfo),cs(e,n,a),Ei=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Eo,Eo=16777216,cs(e,n,a),Eo=o):cs(e,n,a));break;default:cs(e,n,a)}}function qg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function bo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,jg(o,e)}qg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yg(e),e=e.sibling}function Yg(e){switch(e.tag){case 0:case 11:case 15:bo(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:bo(e);break;case 12:bo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Zl(e)):bo(e);break;default:bo(e)}}function Zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,jg(o,e)}qg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),Zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zl(n));break;default:Zl(n)}e=e.sibling}}function jg(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:so(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var c=o.sibling,h=o.return;if(Bg(o),o===a){xn=null;break t}if(c!==null){c.return=h,xn=c;break t}xn=h}}}var CS={getCacheForType:function(e){var n=Mn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(un).controller.signal}},wS=typeof WeakMap=="function"?WeakMap:Map,Ue=0,ke=null,_e=null,xe=0,Pe=0,ti=null,Ga=!1,fs=!1,kf=!1,ua=0,tn=0,Va=0,Tr=0,Xf=0,ei=0,hs=0,To=null,Vn=null,Wf=!1,Kl=0,Zg=0,Ql=1/0,Jl=null,ka=null,gn=0,Xa=null,ds=null,ca=0,qf=0,Yf=null,Kg=null,Ao=0,jf=null;function ni(){return(Ue&2)!==0&&xe!==0?xe&-xe:O.T!==null?th():Ui()}function Qg(){if(ei===0)if((xe&536870912)===0||ye){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),ei=e}else ei=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ei}function kn(e,n,a){(e===ke&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(ps(e,0),Wa(e,xe,ei,!1)),Un(e,a),((Ue&2)===0||e!==ke)&&(e===ke&&((Ue&2)===0&&(Tr|=a),tn===4&&Wa(e,xe,ei,!1)),Pi(e))}function Jg(e,n,a){if((Ue&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ht(e,n),c=o?LS(e,n):Kf(e,n,!0),h=o;do{if(c===0){fs&&!o&&Wa(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!DS(a)){c=Kf(e,n,!1),h=!1;continue}if(c===2){if(h=n,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;c=To;var z=A.current.memoizedState.isDehydrated;if(z&&(ps(A,S).flags|=256),S=Kf(A,S,!1),S!==2){if(kf&&!z){A.errorRecoveryDisabledLanes|=h,Tr|=h,c=4;break t}h=Vn,Vn=c,h!==null&&(Vn===null?Vn=h:Vn.push.apply(Vn,h))}c=S}if(h=!1,c!==2)continue}}if(c===1){ps(e,0),Wa(e,n,0,!0);break}t:{switch(o=e,h=c,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Wa(o,n,ei,!Ga);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Kl+300-E(),10<c)){if(Wa(o,n,ei,!Ga),ut(o,0,!0)!==0)break t;ca=n,o.timeoutHandle=w0($g.bind(null,o,a,Vn,Jl,Wf,n,ei,Tr,hs,Ga,h,"Throttled",-0,0),c);break t}$g(o,a,Vn,Jl,Wf,n,ei,Tr,hs,Ga,h,null,-0,0)}}break}while(!0);Pi(e)}function $g(e,n,a,o,c,h,S,A,z,$,dt,St,at,st){if(e.timeoutHandle=-1,St=n.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},Wg(n,h,St);var Vt=(h&62914560)===h?Kl-E():(h&4194048)===h?Zg-E():0;if(Vt=py(St,Vt),Vt!==null){ca=h,e.cancelPendingCommit=Vt(o0.bind(null,e,n,h,a,o,c,S,A,z,dt,St,null,at,st)),Wa(e,h,S,!$);return}}o0(e,n,h,a,o,c,S,A,z)}function DS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],h=c.getSnapshot;c=c.value;try{if(!Kn(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wa(e,n,a,o){n&=~Xf,n&=~Tr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var h=31-Ot(c),S=1<<h;o[h]=-1,c&=~S}a!==0&&Ys(e,a,n)}function $l(){return(Ue&6)===0?(Ro(0),!1):!0}function Zf(){if(_e!==null){if(Pe===0)var e=_e.return;else e=_e,$i=gr=null,ff(e),as=null,lo=0,e=_e;for(;e!==null;)Dg(e.alternate,e),e=e.return;_e=null}}function ps(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,KS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ca=0,Zf(),ke=e,_e=a=Qi(e.current,null),xe=n,Pe=0,ti=null,Ga=!1,fs=Ht(e,n),kf=!1,hs=ei=Xf=Tr=Va=tn=0,Vn=To=null,Wf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Ot(o),h=1<<c;n|=e[c],o&=~h}return ua=n,Sl(),a}function t0(e,n){ce=null,O.H=_o,n===is||n===Cl?(n=gm(),Pe=3):n===Jc?(n=gm(),Pe=4):Pe=n===Rf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,_e===null&&(tn=1,Vl(e,si(n,e.current)))}function e0(){var e=Jn.current;return e===null?!0:(xe&4194048)===xe?ci===null:(xe&62914560)===xe||(xe&536870912)!==0?e===ci:!1}function n0(){var e=O.H;return O.H=_o,e===null?_o:e}function i0(){var e=O.A;return O.A=CS,e}function tu(){tn=4,Ga||(xe&4194048)!==xe&&Jn.current!==null||(fs=!0),(Va&134217727)===0&&(Tr&134217727)===0||ke===null||Wa(ke,xe,ei,!1)}function Kf(e,n,a){var o=Ue;Ue|=2;var c=n0(),h=i0();(ke!==e||xe!==n)&&(Jl=null,ps(e,n)),n=!1;var S=tn;t:do try{if(Pe!==0&&_e!==null){var A=_e,z=ti;switch(Pe){case 8:Zf(),S=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var $=Pe;if(Pe=0,ti=null,ms(e,A,z,$),a&&fs){S=0;break t}break;default:$=Pe,Pe=0,ti=null,ms(e,A,z,$)}}US(),S=tn;break}catch(dt){t0(e,dt)}while(!0);return n&&e.shellSuspendCounter++,$i=gr=null,Ue=o,O.H=c,O.A=h,_e===null&&(ke=null,xe=0,Sl()),S}function US(){for(;_e!==null;)a0(_e)}function LS(e,n){var a=Ue;Ue|=2;var o=n0(),c=i0();ke!==e||xe!==n?(Jl=null,Ql=E()+500,ps(e,n)):fs=Ht(e,n);t:do try{if(Pe!==0&&_e!==null){n=_e;var h=ti;e:switch(Pe){case 1:Pe=0,ti=null,ms(e,n,h,1);break;case 2:case 9:if(pm(h)){Pe=0,ti=null,r0(n);break}n=function(){Pe!==2&&Pe!==9||ke!==e||(Pe=7),Pi(e)},h.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:pm(h)?(Pe=0,ti=null,r0(n)):(Pe=0,ti=null,ms(e,n,h,7));break;case 5:var S=null;switch(_e.tag){case 26:S=_e.memoizedState;case 5:case 27:var A=_e;if(S?X0(S):A.stateNode.complete){Pe=0,ti=null;var z=A.sibling;if(z!==null)_e=z;else{var $=A.return;$!==null?(_e=$,eu($)):_e=null}break e}}Pe=0,ti=null,ms(e,n,h,5);break;case 6:Pe=0,ti=null,ms(e,n,h,6);break;case 8:Zf(),tn=6;break t;default:throw Error(r(462))}}NS();break}catch(dt){t0(e,dt)}while(!0);return $i=gr=null,O.H=o,O.A=c,Ue=a,_e!==null?0:(ke=null,xe=0,Sl(),tn)}function NS(){for(;_e!==null&&!qt();)a0(_e)}function a0(e){var n=Cg(e.alternate,e,ua);e.memoizedProps=e.pendingProps,n===null?eu(e):_e=n}function r0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Mg(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=Mg(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:ff(n);default:Dg(a,n),n=_e=im(n,ua),n=Cg(a,n,ua)}e.memoizedProps=e.pendingProps,n===null?eu(e):_e=n}function ms(e,n,a,o){$i=gr=null,ff(n),as=null,lo=0;var c=n.return;try{if(yS(e,c,n,a,xe)){tn=1,Vl(e,si(a,e.current)),_e=null;return}}catch(h){if(c!==null)throw _e=c,h;tn=1,Vl(e,si(a,e.current)),_e=null;return}n.flags&32768?(ye||o===1?e=!0:fs||(xe&536870912)!==0?e=!1:(Ga=e=!0,(o===2||o===9||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),s0(n,e)):eu(n)}function eu(e){var n=e;do{if((n.flags&32768)!==0){s0(n,Ga);return}e=n.return;var a=bS(n.alternate,n,ua);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);tn===0&&(tn=5)}function s0(e,n){do{var a=TS(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);tn=6,_e=null}function o0(e,n,a,o,c,h,S,A,z){e.cancelPendingCommit=null;do nu();while(gn!==0);if((Ue&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=Ic,vi(e,a,h,S,A,z),e===ke&&(_e=ke=null,xe=0),ds=n,Xa=e,ca=a,qf=h,Yf=c,Kg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,IS(ht,function(){return h0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,c=I.p,I.p=2,S=Ue,Ue|=4;try{AS(e,n,a)}finally{Ue=S,I.p=c,O.T=o}}gn=1,l0(),u0(),c0()}}function l0(){if(gn===1){gn=0;var e=Xa,n=ds,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=I.p;I.p=2;var c=Ue;Ue|=4;try{Vg(n,e);var h=lh,S=jp(e.containerInfo),A=h.focusedElem,z=h.selectionRange;if(S!==A&&A&&A.ownerDocument&&Yp(A.ownerDocument.documentElement,A)){if(z!==null&&Lc(A)){var $=z.start,dt=z.end;if(dt===void 0&&(dt=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(dt,A.value.length);else{var St=A.ownerDocument||document,at=St&&St.defaultView||window;if(at.getSelection){var st=at.getSelection(),Vt=A.textContent.length,te=Math.min(z.start,Vt),Ge=z.end===void 0?te:Math.min(z.end,Vt);!st.extend&&te>Ge&&(S=Ge,Ge=te,te=S);var j=qp(A,te),k=qp(A,Ge);if(j&&k&&(st.rangeCount!==1||st.anchorNode!==j.node||st.anchorOffset!==j.offset||st.focusNode!==k.node||st.focusOffset!==k.offset)){var J=St.createRange();J.setStart(j.node,j.offset),st.removeAllRanges(),te>Ge?(st.addRange(J),st.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),st.addRange(J))}}}}for(St=[],st=A;st=st.parentNode;)st.nodeType===1&&St.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<St.length;A++){var vt=St[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}pu=!!oh,lh=oh=null}finally{Ue=c,I.p=o,O.T=a}}e.current=n,gn=2}}function u0(){if(gn===2){gn=0;var e=Xa,n=ds,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=I.p;I.p=2;var c=Ue;Ue|=4;try{Ig(e,n.alternate,n)}finally{Ue=c,I.p=o,O.T=a}}gn=3}}function c0(){if(gn===4||gn===3){gn=0,N();var e=Xa,n=ds,a=ca,o=Kg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,ds=Xa=null,f0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ka=null),Gr(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,c=I.p,I.p=2,O.T=null;try{for(var h=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];h(A.value,{componentStack:A.stack})}}finally{O.T=n,I.p=c}}(ca&3)!==0&&nu(),Pi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===jf?Ao++:(Ao=0,jf=e):Ao=0,Ro(0)}}function f0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,so(n)))}function nu(){return l0(),u0(),c0(),h0()}function h0(){if(gn!==5)return!1;var e=Xa,n=qf;qf=0;var a=Gr(ca),o=O.T,c=I.p;try{I.p=32>a?32:a,O.T=null,a=Yf,Yf=null;var h=Xa,S=ca;if(gn=0,ds=Xa=null,ca=0,(Ue&6)!==0)throw Error(r(331));var A=Ue;if(Ue|=4,Yg(h.current),Xg(h,h.current,S,a),Ue=A,Ro(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(At,h)}catch{}return!0}finally{I.p=c,O.T=o,f0(e,n)}}function d0(e,n,a){n=si(a,n),n=Af(e.stateNode,n,2),e=Ia(e,n,2),e!==null&&(Un(e,2),Pi(e))}function Fe(e,n,a){if(e.tag===3)d0(e,e,a);else for(;n!==null;){if(n.tag===3){d0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){e=si(a,e),a=pg(2),o=Ia(n,a,2),o!==null&&(mg(a,o,n,e),Un(o,2),Pi(o));break}}n=n.return}}function Qf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new wS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(kf=!0,c.add(a),e=OS.bind(null,e,n,a),n.then(e,e))}function OS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(xe&a)===a&&(tn===4||tn===3&&(xe&62914560)===xe&&300>E()-Kl?(Ue&2)===0&&ps(e,0):Xf|=a,hs===xe&&(hs=0)),Pi(e)}function p0(e,n){n===0&&(n=Oe()),e=dr(e,n),e!==null&&(Un(e,n),Pi(e))}function PS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),p0(e,a)}function FS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),p0(e,a)}function IS(e,n){return Ee(e,n)}var iu=null,gs=null,Jf=!1,au=!1,$f=!1,qa=0;function Pi(e){e!==gs&&e.next===null&&(gs===null?iu=gs=e:gs=gs.next=e),au=!0,Jf||(Jf=!0,zS())}function Ro(e,n){if(!$f&&au){$f=!0;do for(var a=!1,o=iu;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var S=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-Ot(42|e)+1)-1,h&=c&~(S&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,v0(o,h))}else h=xe,h=ut(o,o===ke?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ht(o,h)||(a=!0,v0(o,h));o=o.next}while(a);$f=!1}}function BS(){m0()}function m0(){au=Jf=!1;var e=0;qa!==0&&ZS()&&(e=qa);for(var n=E(),a=null,o=iu;o!==null;){var c=o.next,h=g0(o,n);h===0?(o.next=null,a===null?iu=c:a.next=c,c===null&&(gs=a)):(a=o,(e!==0||(h&3)!==0)&&(au=!0)),o=c}gn!==0&&gn!==5||Ro(e),qa!==0&&(qa=0)}function g0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-Ot(h),A=1<<S,z=c[S];z===-1?((A&a)===0||(A&o)!==0)&&(c[S]=ie(A,n)):z<=n&&(e.expiredLanes|=A),h&=~A}if(n=ke,a=xe,a=ut(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Le(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ht(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Le(o),Gr(a)){case 2:case 8:a=yt;break;case 32:a=ht;break;case 268435456:a=wt;break;default:a=ht}return o=_0.bind(null,e),a=Ee(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Le(o),e.callbackPriority=2,e.callbackNode=null,2}function _0(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nu()&&e.callbackNode!==a)return null;var o=xe;return o=ut(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Jg(e,o,n),g0(e,E()),e.callbackNode!=null&&e.callbackNode===a?_0.bind(null,e):null)}function v0(e,n){if(nu())return null;Jg(e,n,!0)}function zS(){QS(function(){(Ue&6)!==0?Ee(gt,BS):m0()})}function th(){if(qa===0){var e=es;e===0&&(e=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),qa=e}return qa}function x0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hl(""+e)}function S0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function HS(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var h=x0((c[pn]||null).action),S=o.submitter;S&&(n=(n=S[pn]||null)?x0(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var A=new gl("action","action",null,o,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(qa!==0){var z=S?S0(c,S):new FormData(c);Sf(a,{pending:!0,data:z,method:c.method,action:h},null,z)}}else typeof h=="function"&&(A.preventDefault(),z=S?S0(c,S):new FormData(c),Sf(a,{pending:!0,data:z,method:c.method,action:h},h,z))},currentTarget:c}]})}}for(var eh=0;eh<Fc.length;eh++){var nh=Fc[eh],GS=nh.toLowerCase(),VS=nh[0].toUpperCase()+nh.slice(1);Mi(GS,"on"+VS)}Mi(Qp,"onAnimationEnd"),Mi(Jp,"onAnimationIteration"),Mi($p,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(aS,"onTransitionRun"),Mi(rS,"onTransitionStart"),Mi(sS,"onTransitionCancel"),Mi(tm,"onTransitionEnd"),Dt("onMouseEnter",["mouseout","mouseover"]),Dt("onMouseLeave",["mouseout","mouseover"]),Dt("onPointerEnter",["pointerout","pointerover"]),Dt("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function y0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],z=A.instance,$=A.currentTarget;if(A=A.listener,z!==h&&c.isPropagationStopped())break t;h=A,c.currentTarget=$;try{h(c)}catch(dt){xl(dt)}c.currentTarget=null,h=z}else for(S=0;S<o.length;S++){if(A=o[S],z=A.instance,$=A.currentTarget,A=A.listener,z!==h&&c.isPropagationStopped())break t;h=A,c.currentTarget=$;try{h(c)}catch(dt){xl(dt)}c.currentTarget=null,h=z}}}}function ve(e,n){var a=n[Ra];a===void 0&&(a=n[Ra]=new Set);var o=e+"__bubble";a.has(o)||(M0(n,e,2,!1),a.add(o))}function ih(e,n,a){var o=0;n&&(o|=4),M0(a,e,o,n)}var ru="_reactListening"+Math.random().toString(36).slice(2);function ah(e){if(!e[ru]){e[ru]=!0,rt.forEach(function(a){a!=="selectionchange"&&(kS.has(a)||ih(a,!1,e),ih(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ru]||(n[ru]=!0,ih("selectionchange",!1,n))}}function M0(e,n,a,o){switch(Q0(n)){case 2:var c=_y;break;case 8:c=vy;break;default:c=xh}a=c.bind(null,n,a,e),c=void 0,!Ec||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function rh(e,n,a,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===c)break;if(S===4)for(S=o.return;S!==null;){var z=S.tag;if((z===3||z===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;A!==null;){if(S=Ca(A),S===null)return;if(z=S.tag,z===5||z===6||z===26||z===27){o=h=S;continue t}A=A.parentNode}}o=o.return}Rp(function(){var $=h,dt=yc(a),St=[];t:{var at=em.get(e);if(at!==void 0){var st=gl,Vt=e;switch(e){case"keypress":if(pl(a)===0)break t;case"keydown":case"keyup":st=Fx;break;case"focusin":Vt="focus",st=Rc;break;case"focusout":Vt="blur",st=Rc;break;case"beforeblur":case"afterblur":st=Rc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=zx;break;case Qp:case Jp:case $p:st=Rx;break;case tm:st=Gx;break;case"scroll":case"scrollend":st=Mx;break;case"wheel":st=kx;break;case"copy":case"cut":case"paste":st=wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Lp;break;case"toggle":case"beforetoggle":st=Wx}var te=(n&4)!==0,Ge=!te&&(e==="scroll"||e==="scrollend"),j=te?at!==null?at+"Capture":null:at;te=[];for(var k=$,J;k!==null;){var vt=k;if(J=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||J===null||j===null||(vt=Zs(k,j),vt!=null&&te.push(wo(k,vt,J))),Ge)break;k=k.return}0<te.length&&(at=new st(at,Vt,null,a,dt),St.push({event:at,listeners:te}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",at&&a!==Sc&&(Vt=a.relatedTarget||a.fromElement)&&(Ca(Vt)||Vt[Yi]))break t;if((st||at)&&(at=dt.window===dt?dt:(at=dt.ownerDocument)?at.defaultView||at.parentWindow:window,st?(Vt=a.relatedTarget||a.toElement,st=$,Vt=Vt?Ca(Vt):null,Vt!==null&&(Ge=u(Vt),te=Vt.tag,Vt!==Ge||te!==5&&te!==27&&te!==6)&&(Vt=null)):(st=null,Vt=$),st!==Vt)){if(te=Dp,vt="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=Lp,vt="onPointerLeave",j="onPointerEnter",k="pointer"),Ge=st==null?at:ur(st),J=Vt==null?at:ur(Vt),at=new te(vt,k+"leave",st,a,dt),at.target=Ge,at.relatedTarget=J,vt=null,Ca(dt)===$&&(te=new te(j,k+"enter",Vt,a,dt),te.target=J,te.relatedTarget=Ge,vt=te),Ge=vt,st&&Vt)e:{for(te=XS,j=st,k=Vt,J=0,vt=j;vt;vt=te(vt))J++;vt=0;for(var Jt=k;Jt;Jt=te(Jt))vt++;for(;0<J-vt;)j=te(j),J--;for(;0<vt-J;)k=te(k),vt--;for(;J--;){if(j===k||k!==null&&j===k.alternate){te=j;break e}j=te(j),k=te(k)}te=null}else te=null;st!==null&&E0(St,at,st,te,!1),Vt!==null&&Ge!==null&&E0(St,Ge,Vt,te,!0)}}t:{if(at=$?ur($):window,st=at.nodeName&&at.nodeName.toLowerCase(),st==="select"||st==="input"&&at.type==="file")var Re=Hp;else if(Bp(at))if(Gp)Re=eS;else{Re=$x;var Yt=Jx}else st=at.nodeName,!st||st.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?$&&kr($.elementType)&&(Re=Hp):Re=tS;if(Re&&(Re=Re(e,$))){zp(St,Re,a,dt);break t}Yt&&Yt(e,at,$),e==="focusout"&&$&&at.type==="number"&&$.memoizedProps.value!=null&&Si(at,"number",at.value)}switch(Yt=$?ur($):window,e){case"focusin":(Bp(Yt)||Yt.contentEditable==="true")&&(Yr=Yt,Nc=$,io=null);break;case"focusout":io=Nc=Yr=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,Zp(St,a,dt);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":Zp(St,a,dt)}var de;if(wc)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else qr?Fp(e,a)&&(Se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(Np&&a.locale!=="ko"&&(qr||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&qr&&(de=Cp()):(Da=dt,bc="value"in Da?Da.value:Da.textContent,qr=!0)),Yt=su($,Se),0<Yt.length&&(Se=new Up(Se,e,null,a,dt),St.push({event:Se,listeners:Yt}),de?Se.data=de:(de=Ip(a),de!==null&&(Se.data=de)))),(de=Yx?jx(e,a):Zx(e,a))&&(Se=su($,"onBeforeInput"),0<Se.length&&(Yt=new Up("onBeforeInput","beforeinput",null,a,dt),St.push({event:Yt,listeners:Se}),Yt.data=de)),HS(St,e,$,a,dt)}y0(St,n)})}function wo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function su(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=Zs(e,a),c!=null&&o.unshift(wo(e,c,h)),c=Zs(e,n),c!=null&&o.push(wo(e,c,h))),e.tag===3)return o;e=e.return}return[]}function XS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function E0(e,n,a,o,c){for(var h=n._reactName,S=[];a!==null&&a!==o;){var A=a,z=A.alternate,$=A.stateNode;if(A=A.tag,z!==null&&z===o)break;A!==5&&A!==26&&A!==27||$===null||(z=$,c?($=Zs(a,h),$!=null&&S.unshift(wo(a,$,z))):c||($=Zs(a,h),$!=null&&S.push(wo(a,$,z)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var WS=/\r\n?/g,qS=/\u0000|\uFFFD/g;function b0(e){return(typeof e=="string"?e:""+e).replace(WS,`
`).replace(qS,"")}function T0(e,n){return n=b0(n),b0(e)===n}function He(e,n,a,o,c,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||On(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&On(e,""+o);break;case"className":se(e,"class",o);break;case"tabIndex":se(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":se(e,a,o);break;case"style":ji(e,o,h);break;case"data":if(n!=="object"){se(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=hl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&He(e,n,"name",c.name,c,null),He(e,n,"formEncType",c.formEncType,c,null),He(e,n,"formMethod",c.formMethod,c,null),He(e,n,"formTarget",c.formTarget,c,null)):(He(e,n,"encType",c.encType,c,null),He(e,n,"method",c.method,c,null),He(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=hl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Zi);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=hl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),ne(e,"popover",o);break;case"xlinkActuate":Gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Gt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Gt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Gt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Gt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ne(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Sx.get(a)||a,ne(e,a,o))}}function sh(e,n,a,o,c,h){switch(a){case"style":ji(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?On(e,o):(typeof o=="number"||typeof o=="bigint")&&On(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),h=e[pn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ne(e,a,o)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(e,n,h,S,a,null)}}c&&He(e,n,"srcSet",a.srcSet,a,null),o&&He(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var A=h=S=c=null,z=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":c=dt;break;case"type":S=dt;break;case"checked":z=dt;break;case"defaultChecked":$=dt;break;case"value":h=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:He(e,n,o,dt,a,null)}}jn(e,h,A,z,$,S,c,!1);return;case"select":ve("invalid",e),o=S=h=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":h=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:He(e,n,c,A,a,null)}n=h,a=S,e.multiple=!!o,n!=null?Zn(e,!!o,n,!1):a!=null&&Zn(e,!!o,a,!0);return;case"textarea":ve("invalid",e),h=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":c=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:He(e,n,S,A,a,null)}on(e,o,c,h);return;case"option":for(z in a)a.hasOwnProperty(z)&&(o=a[z],o!=null)&&(z==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":He(e,n,z,o,a,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Co.length;o++)ve(Co[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(e,n,$,o,a,null)}return;default:if(kr(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&sh(e,n,dt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&He(e,n,A,o,a,null))}function YS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,S=null,A=null,z=null,$=null,dt=null;for(st in a){var St=a[st];if(a.hasOwnProperty(st)&&St!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":z=St;default:o.hasOwnProperty(st)||He(e,n,st,null,o,St)}}for(var at in o){var st=o[at];if(St=a[at],o.hasOwnProperty(at)&&(st!=null||St!=null))switch(at){case"type":h=st;break;case"name":c=st;break;case"checked":$=st;break;case"defaultChecked":dt=st;break;case"value":S=st;break;case"defaultValue":A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:st!==St&&He(e,n,at,st,o,St)}}Nn(e,S,A,z,$,dt,h,c);return;case"select":st=S=A=at=null;for(h in a)if(z=a[h],a.hasOwnProperty(h)&&z!=null)switch(h){case"value":break;case"multiple":st=z;default:o.hasOwnProperty(h)||He(e,n,h,null,o,z)}for(c in o)if(h=o[c],z=a[c],o.hasOwnProperty(c)&&(h!=null||z!=null))switch(c){case"value":at=h;break;case"defaultValue":A=h;break;case"multiple":S=h;default:h!==z&&He(e,n,c,h,o,z)}n=A,a=S,o=st,at!=null?Zn(e,!!a,at,!1):!!o!=!!a&&(n!=null?Zn(e,!!a,n,!0):Zn(e,!!a,a?[]:"",!1));return;case"textarea":st=at=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:He(e,n,A,null,o,c)}for(S in o)if(c=o[S],h=a[S],o.hasOwnProperty(S)&&(c!=null||h!=null))switch(S){case"value":at=c;break;case"defaultValue":st=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==h&&He(e,n,S,c,o,h)}Ne(e,at,st);return;case"option":for(var Vt in a)at=a[Vt],a.hasOwnProperty(Vt)&&at!=null&&!o.hasOwnProperty(Vt)&&(Vt==="selected"?e.selected=!1:He(e,n,Vt,null,o,at));for(z in o)at=o[z],st=a[z],o.hasOwnProperty(z)&&at!==st&&(at!=null||st!=null)&&(z==="selected"?e.selected=at&&typeof at!="function"&&typeof at!="symbol":He(e,n,z,at,o,st));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)at=a[te],a.hasOwnProperty(te)&&at!=null&&!o.hasOwnProperty(te)&&He(e,n,te,null,o,at);for($ in o)if(at=o[$],st=a[$],o.hasOwnProperty($)&&at!==st&&(at!=null||st!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:He(e,n,$,at,o,st)}return;default:if(kr(n)){for(var Ge in a)at=a[Ge],a.hasOwnProperty(Ge)&&at!==void 0&&!o.hasOwnProperty(Ge)&&sh(e,n,Ge,void 0,o,at);for(dt in o)at=o[dt],st=a[dt],!o.hasOwnProperty(dt)||at===st||at===void 0&&st===void 0||sh(e,n,dt,at,o,st);return}}for(var j in a)at=a[j],a.hasOwnProperty(j)&&at!=null&&!o.hasOwnProperty(j)&&He(e,n,j,null,o,at);for(St in o)at=o[St],st=a[St],!o.hasOwnProperty(St)||at===st||at==null&&st==null||He(e,n,St,at,o,st)}function A0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],h=c.transferSize,S=c.initiatorType,A=c.duration;if(h&&A&&A0(S)){for(S=0,A=c.responseEnd,o+=1;o<a.length;o++){var z=a[o],$=z.startTime;if($>A)break;var dt=z.transferSize,St=z.initiatorType;dt&&A0(St)&&(z=z.responseEnd,S+=dt*(z<A?1:(A-$)/(z-$)))}if(--o,n+=8*(h+S)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var oh=null,lh=null;function ou(e){return e.nodeType===9?e:e.ownerDocument}function R0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function C0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function uh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ch=null;function ZS(){var e=window.event;return e&&e.type==="popstate"?e===ch?!1:(ch=e,!0):(ch=null,!1)}var w0=typeof setTimeout=="function"?setTimeout:void 0,KS=typeof clearTimeout=="function"?clearTimeout:void 0,D0=typeof Promise=="function"?Promise:void 0,QS=typeof queueMicrotask=="function"?queueMicrotask:typeof D0<"u"?function(e){return D0.resolve(null).then(e).catch(JS)}:w0;function JS(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function U0(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),Ss(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Do(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Do(a);for(var h=a.firstChild;h;){var S=h.nextSibling,A=h.nodeName;h[lr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=S}}else a==="body"&&Do(e.ownerDocument.body);a=c}while(a);Ss(n)}function L0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function fh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fh(a),js(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function $S(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[lr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function ty(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fi(e.nextSibling),e===null))return null;return e}function N0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fi(e.nextSibling),e===null))return null;return e}function hh(e){return e.data==="$?"||e.data==="$~"}function dh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ey(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ph=null;function O0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return fi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function P0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function F0(e,n,a){switch(n=ou(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Do(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);js(e)}var hi=new Map,I0=new Set;function lu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=I.d;I.d={f:ny,r:iy,D:ay,C:ry,L:sy,m:oy,X:uy,S:ly,M:cy};function ny(){var e=fa.f(),n=$l();return e||n}function iy(e){var n=wa(e);n!==null&&n.tag===5&&n.type==="form"?tg(n):fa.r(e)}var _s=typeof document>"u"?null:document;function B0(e,n,a){var o=_s;if(o&&typeof n=="string"&&n){var c=re(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),I0.has(c)||(I0.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),bn(n,"link",e),X(n),o.head.appendChild(n)))}}function ay(e){fa.D(e),B0("dns-prefetch",e,null)}function ry(e,n){fa.C(e,n),B0("preconnect",e,n)}function sy(e,n,a){fa.L(e,n,a);var o=_s;if(o&&e&&n){var c='link[rel="preload"][as="'+re(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+re(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+re(a.imageSizes)+'"]')):c+='[href="'+re(e)+'"]';var h=c;switch(n){case"style":h=vs(e);break;case"script":h=xs(e)}hi.has(h)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),hi.set(h,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Uo(h))||n==="script"&&o.querySelector(Lo(h))||(n=o.createElement("link"),bn(n,"link",e),X(n),o.head.appendChild(n)))}}function oy(e,n){fa.m(e,n);var a=_s;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+re(o)+'"][href="'+re(e)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=xs(e)}if(!hi.has(h)&&(e=v({rel:"modulepreload",href:e},n),hi.set(h,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lo(h)))return}o=a.createElement("link"),bn(o,"link",e),X(o),a.head.appendChild(o)}}}function ly(e,n,a){fa.S(e,n,a);var o=_s;if(o&&e){var c=C(o).hoistableStyles,h=vs(e);n=n||"default";var S=c.get(h);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Uo(h)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=hi.get(h))&&mh(e,a);var z=S=o.createElement("link");X(z),bn(z,"link",e),z._p=new Promise(function($,dt){z.onload=$,z.onerror=dt}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,uu(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},c.set(h,S)}}}function uy(e,n){fa.X(e,n);var a=_s;if(a&&e){var o=C(a).hoistableScripts,c=xs(e),h=o.get(c);h||(h=a.querySelector(Lo(c)),h||(e=v({src:e,async:!0},n),(n=hi.get(c))&&gh(e,n),h=a.createElement("script"),X(h),bn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function cy(e,n){fa.M(e,n);var a=_s;if(a&&e){var o=C(a).hoistableScripts,c=xs(e),h=o.get(c);h||(h=a.querySelector(Lo(c)),h||(e=v({src:e,async:!0,type:"module"},n),(n=hi.get(c))&&gh(e,n),h=a.createElement("script"),X(h),bn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function z0(e,n,a,o){var c=(c=Z.current)?lu(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=vs(a.href),a=C(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=vs(a.href);var h=C(c).hoistableStyles,S=h.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=c.querySelector(Uo(e)))&&!h._p&&(S.instance=h,S.state.loading=5),hi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(e,a),h||fy(c,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=xs(a),a=C(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function vs(e){return'href="'+re(e)+'"'}function Uo(e){return'link[rel="stylesheet"]['+e+"]"}function H0(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function fy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),X(n),e.head.appendChild(n))}function xs(e){return'[src="'+re(e)+'"]'}function Lo(e){return"script[async]"+e}function G0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+re(a.href)+'"]');if(o)return n.instance=o,X(o),o;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),X(o),bn(o,"style",c),uu(o,a.precedence,e),n.instance=o;case"stylesheet":c=vs(a.href);var h=e.querySelector(Uo(c));if(h)return n.state.loading|=4,n.instance=h,X(h),h;o=H0(a),(c=hi.get(c))&&mh(o,c),h=(e.ownerDocument||e).createElement("link"),X(h);var S=h;return S._p=new Promise(function(A,z){S.onload=A,S.onerror=z}),bn(h,"link",o),n.state.loading|=4,uu(h,a.precedence,e),n.instance=h;case"script":return h=xs(a.src),(c=e.querySelector(Lo(h)))?(n.instance=c,X(c),c):(o=a,(c=hi.get(h))&&(o=v({},a),gh(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),X(c),bn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uu(o,a.precedence,e));return n.instance}function uu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)h=A;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function mh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function gh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var cu=null;function V0(e,n,a){if(cu===null){var o=new Map,c=cu=new Map;c.set(a,o)}else c=cu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var h=a[c];if(!(h[lr]||h[sn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(h):o.set(S,[h])}}return o}function k0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function hy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function X0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function dy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=vs(o.href),h=n.querySelector(Uo(c));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=fu.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,X(h);return}h=n.ownerDocument||n,o=H0(o),(c=hi.get(c))&&mh(o,c),h=h.createElement("link"),X(h);var S=h;S._p=new Promise(function(A,z){S.onload=A,S.onerror=z}),bn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=fu.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var _h=0;function py(e,n){return e.stylesheets&&e.count===0&&du(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&du(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&_h===0&&(_h=62500*jS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&du(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>_h?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function fu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)du(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hu=null;function du(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hu=new Map,n.forEach(my,e),hu=null,fu.call(e))}function my(e,n){if(!(n.state.loading&4)){var a=hu.get(e);if(a)var o=a.get(null);else{a=new Map,hu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var S=c[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,c),a.set(S,c),this.count++,o=fu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var No={$$typeof:D,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function gy(e,n,a,o,c,h,S,A,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function W0(e,n,a,o,c,h,S,A,z,$,dt,St){return e=new gy(e,n,a,S,z,$,dt,St,A),n=1,h===!0&&(n|=24),h=Qn(3,null,null,n),e.current=h,h.stateNode=e,n=Zc(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},$c(h),e}function q0(e){return e?(e=Kr,e):Kr}function Y0(e,n,a,o,c,h){c=q0(c),o.context===null?o.context=c:o.pendingContext=c,o=Fa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ia(e,o,n),a!==null&&(kn(a,e,n),co(a,e,n))}function j0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function vh(e,n){j0(e,n),(e=e.alternate)&&j0(e,n)}function Z0(e){if(e.tag===13||e.tag===31){var n=dr(e,67108864);n!==null&&kn(n,e,67108864),vh(e,67108864)}}function K0(e){if(e.tag===13||e.tag===31){var n=ni();n=Hr(n);var a=dr(e,n);a!==null&&kn(a,e,n),vh(e,n)}}var pu=!0;function _y(e,n,a,o){var c=O.T;O.T=null;var h=I.p;try{I.p=2,xh(e,n,a,o)}finally{I.p=h,O.T=c}}function vy(e,n,a,o){var c=O.T;O.T=null;var h=I.p;try{I.p=8,xh(e,n,a,o)}finally{I.p=h,O.T=c}}function xh(e,n,a,o){if(pu){var c=Sh(o);if(c===null)rh(e,n,o,mu,a),J0(e,o);else if(Sy(c,e,n,a,o))o.stopPropagation();else if(J0(e,o),n&4&&-1<xy.indexOf(e)){for(;c!==null;){var h=wa(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Tt(h.pendingLanes);if(S!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var z=1<<31-Ot(S);A.entanglements[1]|=z,S&=~z}Pi(h),(Ue&6)===0&&(Ql=E()+500,Ro(0))}}break;case 31:case 13:A=dr(h,2),A!==null&&kn(A,h,2),$l(),vh(h,2)}if(h=Sh(o),h===null&&rh(e,n,o,mu,a),h===c)break;c=h}c!==null&&o.stopPropagation()}else rh(e,n,o,null,a)}}function Sh(e){return e=yc(e),yh(e)}var mu=null;function yh(e){if(mu=null,e=Ca(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mu=e,null}function Q0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case gt:return 2;case yt:return 8;case ht:case Xt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var Mh=!1,ja=null,Za=null,Ka=null,Oo=new Map,Po=new Map,Qa=[],xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function J0(e,n){switch(e){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function Fo(e,n,a,o,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=wa(n),n!==null&&Z0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Sy(e,n,a,o,c){switch(n){case"focusin":return ja=Fo(ja,e,n,a,o,c),!0;case"dragenter":return Za=Fo(Za,e,n,a,o,c),!0;case"mouseover":return Ka=Fo(Ka,e,n,a,o,c),!0;case"pointerover":var h=c.pointerId;return Oo.set(h,Fo(Oo.get(h)||null,e,n,a,o,c)),!0;case"gotpointercapture":return h=c.pointerId,Po.set(h,Fo(Po.get(h)||null,e,n,a,o,c)),!0}return!1}function $0(e){var n=Ca(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Vr(e.priority,function(){K0(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Vr(e.priority,function(){K0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Sh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Sc=o,a.target.dispatchEvent(o),Sc=null}else return n=wa(a),n!==null&&Z0(n),e.blockedOn=a,!1;n.shift()}return!0}function t_(e,n,a){gu(e)&&a.delete(n)}function yy(){Mh=!1,ja!==null&&gu(ja)&&(ja=null),Za!==null&&gu(Za)&&(Za=null),Ka!==null&&gu(Ka)&&(Ka=null),Oo.forEach(t_),Po.forEach(t_)}function _u(e,n){e.blockedOn===n&&(e.blockedOn=null,Mh||(Mh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,yy)))}var vu=null;function e_(e){vu!==e&&(vu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){vu===e&&(vu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(yh(o||a)===null)continue;break}var h=wa(a);h!==null&&(e.splice(n,3),n-=3,Sf(h,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Ss(e){function n(z){return _u(z,e)}ja!==null&&_u(ja,e),Za!==null&&_u(Za,e),Ka!==null&&_u(Ka,e),Oo.forEach(n),Po.forEach(n);for(var a=0;a<Qa.length;a++){var o=Qa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Qa.length&&(a=Qa[0],a.blockedOn===null);)$0(a),a.blockedOn===null&&Qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],h=a[o+1],S=c[pn]||null;if(typeof h=="function")S||e_(a);else if(S){var A=null;if(h&&h.hasAttribute("formAction")){if(c=h,S=h[pn]||null)A=S.formAction;else if(yh(c)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),e_(a)}}}function n_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return c=S})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Eh(e){this._internalRoot=e}xu.prototype.render=Eh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ni();Y0(a,o,e,n,null,null)},xu.prototype.unmount=Eh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Y0(e.current,2,null,e,null,null),$l(),n[Yi]=null}};function xu(e){this._internalRoot=e}xu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ui();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Qa.length&&n!==0&&n<Qa[a].priority;a++);Qa.splice(a,0,e),a===0&&$0(e)}};var i_=t.version;if(i_!=="19.2.3")throw Error(r(527,i_,"19.2.3"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=d(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var My={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{At=Su.inject(My),bt=Su}catch{}}return Bo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=cg,h=fg,S=hg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=W0(e,1,!1,null,null,a,o,null,c,h,S,n_),e[Yi]=n.current,ah(e),new Eh(n)},Bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",h=cg,S=fg,A=hg,z=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=W0(e,1,!0,n,a??null,o,c,z,h,S,A,n_),n.context=q0(null),a=n.current,o=ni(),o=Hr(o),c=Fa(o),c.callback=null,Ia(a,c,o),a=o,n.current.lanes=a,Un(n,a),Pi(n),e[Yi]=n.current,ah(e),new xu(n)},Bo.version="19.2.3",Bo}var d_;function Ly(){if(d_)return Ah.exports;d_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Ah.exports=Uy(),Ah.exports}var Ny=Ly();var p_="popstate";function Oy(s={}){function t(r,l){let{pathname:u,search:f,hash:p}=r.location;return pd("",{pathname:u,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Qo(l)}return Fy(t,i,null,s)}function Je(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Xi(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Py(){return Math.random().toString(36).substring(2,10)}function m_(s,t){return{usr:s.state,key:s.key,idx:t}}function pd(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Vs(t):t,state:i,key:t&&t.key||r||Py()}}function Qo({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Vs(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function Fy(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,f=l.history,p="POP",m=null,d=g();d==null&&(d=0,f.replaceState({...f.state,idx:d},""));function g(){return(f.state||{idx:null}).idx}function v(){p="POP";let y=g(),x=y==null?null:y-d;d=y,m&&m({action:p,location:w.location,delta:x})}function _(y,x){p="PUSH";let R=pd(w.location,y,x);d=g()+1;let D=m_(R,d),U=w.createHref(R);try{f.pushState(D,"",U)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(U)}u&&m&&m({action:p,location:w.location,delta:1})}function M(y,x){p="REPLACE";let R=pd(w.location,y,x);d=g();let D=m_(R,d),U=w.createHref(R);f.replaceState(D,"",U),u&&m&&m({action:p,location:w.location,delta:0})}function b(y){return Iy(y)}let w={get action(){return p},get location(){return s(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(p_,v),m=y,()=>{l.removeEventListener(p_,v),m=null}},createHref(y){return t(l,y)},createURL:b,encodeLocation(y){let x=b(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:M,go(y){return f.go(y)}};return w}function Iy(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Je(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Qo(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function xv(s,t,i="/"){return By(s,t,i,!1)}function By(s,t,i,r){let l=typeof t=="string"?Vs(t):t,u=Ma(l.pathname||"/",i);if(u==null)return null;let f=Sv(s);zy(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let d=Ky(u);p=jy(f[m],d,r)}return p}function Sv(s,t=[],i=[],r="",l=!1){let u=(f,p,m=l,d)=>{let g={relativePath:d===void 0?f.path||"":d,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;Je(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let v=xa([r,g.relativePath]),_=i.concat(g);f.children&&f.children.length>0&&(Je(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Sv(f.children,t,_,v,m)),!(f.path==null&&!f.index)&&t.push({path:v,score:qy(v,f.index),routesMeta:_})};return s.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))u(f,p);else for(let m of yv(f.path))u(f,p,!0,m)}),t}function yv(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let f=yv(r.join("/")),p=[];return p.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&p.push(...f),p.map(m=>s.startsWith("/")&&m===""?"/":m)}function zy(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:Yy(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var Hy=/^:[\w-]+$/,Gy=3,Vy=2,ky=1,Xy=10,Wy=-2,g_=s=>s==="*";function qy(s,t){let i=s.split("/"),r=i.length;return i.some(g_)&&(r+=Wy),t&&(r+=Vy),i.filter(l=>!g_(l)).reduce((l,u)=>l+(Hy.test(u)?Gy:u===""?ky:Xy),r)}function Yy(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function jy(s,t,i=!1){let{routesMeta:r}=s,l={},u="/",f=[];for(let p=0;p<r.length;++p){let m=r[p],d=p===r.length-1,g=u==="/"?t:t.slice(u.length)||"/",v=ic({path:m.relativePath,caseSensitive:m.caseSensitive,end:d},g),_=m.route;if(!v&&d&&i&&!r[r.length-1].route.index&&(v=ic({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:xa([u,v.pathname]),pathnameBase:tM(xa([u,v.pathnameBase])),route:_}),v.pathnameBase!=="/"&&(u=xa([u,v.pathnameBase]))}return f}function ic(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=Zy(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:r.reduce((d,{paramName:g,isOptional:v},_)=>{if(g==="*"){let b=p[_]||"";f=u.slice(0,u.length-b.length).replace(/(.)\/+$/,"$1")}const M=p[_];return v&&!M?d[g]=void 0:d[g]=(M||"").replace(/%2F/g,"/"),d},{}),pathname:u,pathnameBase:f,pattern:s}}function Zy(s,t=!1,i=!0){Xi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(r.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Ky(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Xi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function Ma(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var Qy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Jy(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Vs(s):s,u;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?u=__(i.substring(1),"/"):u=__(i,t)):u=t,{pathname:u,search:eM(r),hash:nM(l)}}function __(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Dh(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $y(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Mv(s){let t=$y(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function Ev(s,t,i,r=!1){let l;typeof s=="string"?l=Vs(s):(l={...s},Je(!l.pathname||!l.pathname.includes("?"),Dh("?","pathname","search",l)),Je(!l.pathname||!l.pathname.includes("#"),Dh("#","pathname","hash",l)),Je(!l.search||!l.search.includes("#"),Dh("#","search","hash",l)));let u=s===""||l.pathname==="",f=u?"/":l.pathname,p;if(f==null)p=i;else{let v=t.length-1;if(!r&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),v-=1;l.pathname=_.join("/")}p=v>=0?t[v]:"/"}let m=Jy(l,p),d=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(d||g)&&(m.pathname+="/"),m}var xa=s=>s.join("/").replace(/\/\/+/g,"/"),tM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),eM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,nM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,iM=class{constructor(s,t,i,r=!1){this.status=s,this.statusText=t||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function aM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function rM(s){return s.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var bv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Tv(s,t){let i=s;if(typeof i!="string"||!Qy.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(bv)try{let u=new URL(window.location.href),f=i.startsWith("//")?new URL(u.protocol+i):new URL(i),p=Ma(f.pathname,t);f.origin===u.origin&&p!=null?i=p+f.search+f.hash:l=!0}catch{Xi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Av=["POST","PUT","PATCH","DELETE"];new Set(Av);var sM=["GET",...Av];new Set(sM);var ks=_t.createContext(null);ks.displayName="DataRouter";var dc=_t.createContext(null);dc.displayName="DataRouterState";var oM=_t.createContext(!1),Rv=_t.createContext({isTransitioning:!1});Rv.displayName="ViewTransition";var lM=_t.createContext(new Map);lM.displayName="Fetchers";var uM=_t.createContext(null);uM.displayName="Await";var _i=_t.createContext(null);_i.displayName="Navigation";var el=_t.createContext(null);el.displayName="Location";var Aa=_t.createContext({outlet:null,matches:[],isDataRoute:!1});Aa.displayName="Route";var up=_t.createContext(null);up.displayName="RouteError";var Cv="REACT_ROUTER_ERROR",cM="REDIRECT",fM="ROUTE_ERROR_RESPONSE";function hM(s){if(s.startsWith(`${Cv}:${cM}:{`))try{let t=JSON.parse(s.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function dM(s){if(s.startsWith(`${Cv}:${fM}:{`))try{let t=JSON.parse(s.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new iM(t.status,t.statusText,t.data)}catch{}}function pM(s,{relative:t}={}){Je(nl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=_t.useContext(_i),{hash:l,pathname:u,search:f}=il(s,{relative:t}),p=u;return i!=="/"&&(p=u==="/"?i:xa([i,u])),r.createHref({pathname:p,search:f,hash:l})}function nl(){return _t.useContext(el)!=null}function Br(){return Je(nl(),"useLocation() may be used only in the context of a <Router> component."),_t.useContext(el).location}var wv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Dv(s){_t.useContext(_i).static||_t.useLayoutEffect(s)}function cp(){let{isDataRoute:s}=_t.useContext(Aa);return s?RM():mM()}function mM(){Je(nl(),"useNavigate() may be used only in the context of a <Router> component.");let s=_t.useContext(ks),{basename:t,navigator:i}=_t.useContext(_i),{matches:r}=_t.useContext(Aa),{pathname:l}=Br(),u=JSON.stringify(Mv(r)),f=_t.useRef(!1);return Dv(()=>{f.current=!0}),_t.useCallback((m,d={})=>{if(Xi(f.current,wv),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=Ev(m,JSON.parse(u),l,d.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:xa([t,g.pathname])),(d.replace?i.replace:i.push)(g,d.state,d)},[t,i,u,l,s])}_t.createContext(null);function il(s,{relative:t}={}){let{matches:i}=_t.useContext(Aa),{pathname:r}=Br(),l=JSON.stringify(Mv(i));return _t.useMemo(()=>Ev(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function gM(s,t){return Uv(s,t)}function Uv(s,t,i,r,l){Je(nl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=_t.useContext(_i),{matches:f}=_t.useContext(Aa),p=f[f.length-1],m=p?p.params:{},d=p?p.pathname:"/",g=p?p.pathnameBase:"/",v=p&&p.route;{let R=v&&v.path||"";Nv(d,!v||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let _=Br(),M;if(t){let R=typeof t=="string"?Vs(t):t;Je(g==="/"||R.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${R.pathname}" was given in the \`location\` prop.`),M=R}else M=_;let b=M.pathname||"/",w=b;if(g!=="/"){let R=g.replace(/^\//,"").split("/");w="/"+b.replace(/^\//,"").split("/").slice(R.length).join("/")}let y=xv(s,{pathname:w});Xi(v||y!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Xi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=yM(y&&y.map(R=>Object.assign({},R,{params:Object.assign({},m,R.params),pathname:xa([g,u.encodeLocation?u.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?g:xa([g,u.encodeLocation?u.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),f,i,r,l);return t&&x?_t.createElement(el.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},x):x}function _M(){let s=AM(),t=aM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=_t.createElement(_t.Fragment,null,_t.createElement("p",null,"💿 Hey developer 👋"),_t.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_t.createElement("code",{style:u},"ErrorBoundary")," or"," ",_t.createElement("code",{style:u},"errorElement")," prop on your route.")),_t.createElement(_t.Fragment,null,_t.createElement("h2",null,"Unexpected Application Error!"),_t.createElement("h3",{style:{fontStyle:"italic"}},t),i?_t.createElement("pre",{style:l},i):null,f)}var vM=_t.createElement(_M,null),Lv=class extends _t.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){this.props.onError?this.props.onError(s,t):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=dM(s.digest);i&&(s=i)}let t=s!==void 0?_t.createElement(Aa.Provider,{value:this.props.routeContext},_t.createElement(up.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?_t.createElement(xM,{error:s},t):t}};Lv.contextType=oM;var Uh=new WeakMap;function xM({children:s,error:t}){let{basename:i}=_t.useContext(_i);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=hM(t.digest);if(r){let l=Uh.get(t);if(l)throw l;let u=Tv(r.location,i);if(bv&&!Uh.get(t))if(u.isExternal||r.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:r.replace}));throw Uh.set(t,f),f}return _t.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return s}function SM({routeContext:s,match:t,children:i}){let r=_t.useContext(ks);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_t.createElement(Aa.Provider,{value:s},i)}function yM(s,t=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let u=s,f=i?.errors;if(f!=null){let g=u.findIndex(v=>v.route.id&&f?.[v.route.id]!==void 0);Je(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let p=!1,m=-1;if(i)for(let g=0;g<u.length;g++){let v=u[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=g),v.route.id){let{loaderData:_,errors:M}=i,b=v.route.loader&&!_.hasOwnProperty(v.route.id)&&(!M||M[v.route.id]===void 0);if(v.route.lazy||b){p=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}let d=i&&r?(g,v)=>{r(g,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:rM(i.matches),errorInfo:v})}:void 0;return u.reduceRight((g,v,_)=>{let M,b=!1,w=null,y=null;i&&(M=f&&v.route.id?f[v.route.id]:void 0,w=v.route.errorElement||vM,p&&(m<0&&_===0?(Nv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,y=null):m===_&&(b=!0,y=v.route.hydrateFallbackElement||null)));let x=t.concat(u.slice(0,_+1)),R=()=>{let D;return M?D=w:b?D=y:v.route.Component?D=_t.createElement(v.route.Component,null):v.route.element?D=v.route.element:D=g,_t.createElement(SM,{match:v,routeContext:{outlet:g,matches:x,isDataRoute:i!=null},children:D})};return i&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?_t.createElement(Lv,{location:i.location,revalidation:i.revalidation,component:w,error:M,children:R(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:d}):R()},null)}function fp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function MM(s){let t=_t.useContext(ks);return Je(t,fp(s)),t}function EM(s){let t=_t.useContext(dc);return Je(t,fp(s)),t}function bM(s){let t=_t.useContext(Aa);return Je(t,fp(s)),t}function hp(s){let t=bM(s),i=t.matches[t.matches.length-1];return Je(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function TM(){return hp("useRouteId")}function AM(){let s=_t.useContext(up),t=EM("useRouteError"),i=hp("useRouteError");return s!==void 0?s:t.errors?.[i]}function RM(){let{router:s}=MM("useNavigate"),t=hp("useNavigate"),i=_t.useRef(!1);return Dv(()=>{i.current=!0}),_t.useCallback(async(l,u={})=>{Xi(i.current,wv),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:t,...u}))},[s,t])}var v_={};function Nv(s,t,i){!t&&!v_[s]&&(v_[s]=!0,Xi(!1,i))}_t.memo(CM);function CM({routes:s,future:t,state:i,onError:r}){return Uv(s,void 0,i,r,t)}function jo(s){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wM({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:u=!1,unstable_useTransitions:f}){Je(!nl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=s.replace(/^\/*/,"/"),m=_t.useMemo(()=>({basename:p,navigator:l,static:u,unstable_useTransitions:f,future:{}}),[p,l,u,f]);typeof i=="string"&&(i=Vs(i));let{pathname:d="/",search:g="",hash:v="",state:_=null,key:M="default"}=i,b=_t.useMemo(()=>{let w=Ma(d,p);return w==null?null:{location:{pathname:w,search:g,hash:v,state:_,key:M},navigationType:r}},[p,d,g,v,_,M,r]);return Xi(b!=null,`<Router basename="${p}"> is not able to match the URL "${d}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:_t.createElement(_i.Provider,{value:m},_t.createElement(el.Provider,{children:t,value:b}))}function DM({children:s,location:t}){return gM(md(s),t)}function md(s,t=[]){let i=[];return _t.Children.forEach(s,(r,l)=>{if(!_t.isValidElement(r))return;let u=[...t,l];if(r.type===_t.Fragment){i.push.apply(i,md(r.props.children,u));return}Je(r.type===jo,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=md(r.props.children,u)),i.push(f)}),i}var ju="get",Zu="application/x-www-form-urlencoded";function pc(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function UM(s){return pc(s)&&s.tagName.toLowerCase()==="button"}function LM(s){return pc(s)&&s.tagName.toLowerCase()==="form"}function NM(s){return pc(s)&&s.tagName.toLowerCase()==="input"}function OM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function PM(s,t){return s.button===0&&(!t||t==="_self")&&!OM(s)}var yu=null;function FM(){if(yu===null)try{new FormData(document.createElement("form"),0),yu=!1}catch{yu=!0}return yu}var IM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Lh(s){return s!=null&&!IM.has(s)?(Xi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zu}"`),null):s}function BM(s,t){let i,r,l,u,f;if(LM(s)){let p=s.getAttribute("action");r=p?Ma(p,t):null,i=s.getAttribute("method")||ju,l=Lh(s.getAttribute("enctype"))||Zu,u=new FormData(s)}else if(UM(s)||NM(s)&&(s.type==="submit"||s.type==="image")){let p=s.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||p.getAttribute("action");if(r=m?Ma(m,t):null,i=s.getAttribute("formmethod")||p.getAttribute("method")||ju,l=Lh(s.getAttribute("formenctype"))||Lh(p.getAttribute("enctype"))||Zu,u=new FormData(p,s),!FM()){let{name:d,type:g,value:v}=s;if(g==="image"){let _=d?`${d}.`:"";u.append(`${_}x`,"0"),u.append(`${_}y`,"0")}else d&&u.append(d,v)}}else{if(pc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=ju,r=null,l=Zu,f=s}return u&&l==="text/plain"&&(f=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function dp(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function zM(s,t,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:t&&Ma(l.pathname,t)==="/"?l.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${r}`,l}async function HM(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function GM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function VM(s,t,i){let r=await Promise.all(s.map(async l=>{let u=t.routes[l.route.id];if(u){let f=await HM(u,i);return f.links?f.links():[]}return[]}));return qM(r.flat(1).filter(GM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function x_(s,t,i,r,l,u){let f=(m,d)=>i[d]?m.route.id!==i[d].route.id:!0,p=(m,d)=>i[d].pathname!==m.pathname||i[d].route.path?.endsWith("*")&&i[d].params["*"]!==m.params["*"];return u==="assets"?t.filter((m,d)=>f(m,d)||p(m,d)):u==="data"?t.filter((m,d)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,d)||p(m,d))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function kM(s,t,{includeHydrateFallback:i}={}){return XM(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function XM(s){return[...new Set(s)]}function WM(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function qM(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let u=JSON.stringify(WM(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function Ov(){let s=_t.useContext(ks);return dp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function YM(){let s=_t.useContext(dc);return dp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var pp=_t.createContext(void 0);pp.displayName="FrameworkContext";function Pv(){let s=_t.useContext(pp);return dp(s,"You must render this element inside a <HydratedRouter> element"),s}function jM(s,t){let i=_t.useContext(pp),[r,l]=_t.useState(!1),[u,f]=_t.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:d,onMouseLeave:g,onTouchStart:v}=t,_=_t.useRef(null);_t.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let w=x=>{x.forEach(R=>{f(R.isIntersecting)})},y=new IntersectionObserver(w,{threshold:.5});return _.current&&y.observe(_.current),()=>{y.disconnect()}}},[s]),_t.useEffect(()=>{if(r){let w=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(w)}}},[r]);let M=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[u,_,{}]:[u,_,{onFocus:zo(p,M),onBlur:zo(m,b),onMouseEnter:zo(d,M),onMouseLeave:zo(g,b),onTouchStart:zo(v,M)}]:[!1,_,{}]}function zo(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function ZM({page:s,...t}){let{router:i}=Ov(),r=_t.useMemo(()=>xv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?_t.createElement(QM,{page:s,matches:r,...t}):null}function KM(s){let{manifest:t,routeModules:i}=Pv(),[r,l]=_t.useState([]);return _t.useEffect(()=>{let u=!1;return VM(s,t,i).then(f=>{u||l(f)}),()=>{u=!0}},[s,t,i]),r}function QM({page:s,matches:t,...i}){let r=Br(),{future:l,manifest:u,routeModules:f}=Pv(),{basename:p}=Ov(),{loaderData:m,matches:d}=YM(),g=_t.useMemo(()=>x_(s,t,d,u,r,"data"),[s,t,d,u,r]),v=_t.useMemo(()=>x_(s,t,d,u,r,"assets"),[s,t,d,u,r]),_=_t.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let w=new Set,y=!1;if(t.forEach(R=>{let D=u.routes[R.route.id];!D||!D.hasLoader||(!g.some(U=>U.route.id===R.route.id)&&R.route.id in m&&f[R.route.id]?.shouldRevalidate||D.hasClientLoader?y=!0:w.add(R.route.id))}),w.size===0)return[];let x=zM(s,p,l.unstable_trailingSlashAwareDataRequests,"data");return y&&w.size>0&&x.searchParams.set("_routes",t.filter(R=>w.has(R.route.id)).map(R=>R.route.id).join(",")),[x.pathname+x.search]},[p,l.unstable_trailingSlashAwareDataRequests,m,r,u,g,t,s,f]),M=_t.useMemo(()=>kM(v,u),[v,u]),b=KM(v);return _t.createElement(_t.Fragment,null,_.map(w=>_t.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...i})),M.map(w=>_t.createElement("link",{key:w,rel:"modulepreload",href:w,...i})),b.map(({key:w,link:y})=>_t.createElement("link",{key:w,nonce:i.nonce,...y,crossOrigin:y.crossOrigin??i.crossOrigin})))}function JM(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var $M=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$M&&(window.__reactRouterVersion="7.13.0")}catch{}function tE({basename:s,children:t,unstable_useTransitions:i,window:r}){let l=_t.useRef();l.current==null&&(l.current=Oy({window:r,v5Compat:!0}));let u=l.current,[f,p]=_t.useState({action:u.action,location:u.location}),m=_t.useCallback(d=>{i===!1?p(d):_t.startTransition(()=>p(d))},[i]);return _t.useLayoutEffect(()=>u.listen(m),[u,m]),_t.createElement(wM,{basename:s,children:t,location:f.location,navigationType:f.action,navigator:u,unstable_useTransitions:i})}var Fv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Iv=_t.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:f,state:p,target:m,to:d,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:_,...M},b){let{basename:w,unstable_useTransitions:y}=_t.useContext(_i),x=typeof d=="string"&&Fv.test(d),R=Tv(d,w);d=R.to;let D=pM(d,{relative:l}),[U,H,B]=jM(r,M),F=aE(d,{replace:f,state:p,target:m,preventScrollReset:g,relative:l,viewTransition:v,unstable_defaultShouldRevalidate:_,unstable_useTransitions:y});function T(ct){t&&t(ct),ct.defaultPrevented||F(ct)}let L=_t.createElement("a",{...M,...B,href:R.absoluteURL||D,onClick:R.isExternal||u?t:T,ref:JM(b,H),target:m,"data-discover":!x&&i==="render"?"true":void 0});return U&&!x?_t.createElement(_t.Fragment,null,L,_t.createElement(ZM,{page:D})):L});Iv.displayName="Link";var eE=_t.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:f,viewTransition:p,children:m,...d},g){let v=il(f,{relative:d.relative}),_=Br(),M=_t.useContext(dc),{navigator:b,basename:w}=_t.useContext(_i),y=M!=null&&uE(v)&&p===!0,x=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,R=_.pathname,D=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(R=R.toLowerCase(),D=D?D.toLowerCase():null,x=x.toLowerCase()),D&&w&&(D=Ma(D,w)||D);const U=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let H=R===x||!l&&R.startsWith(x)&&R.charAt(U)==="/",B=D!=null&&(D===x||!l&&D.startsWith(x)&&D.charAt(x.length)==="/"),F={isActive:H,isPending:B,isTransitioning:y},T=H?t:void 0,L;typeof r=="function"?L=r(F):L=[r,H?"active":null,B?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let ct=typeof u=="function"?u(F):u;return _t.createElement(Iv,{...d,"aria-current":T,className:L,ref:g,style:ct,to:f,viewTransition:p},typeof m=="function"?m(F):m)});eE.displayName="NavLink";var nE=_t.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:u,method:f=ju,action:p,onSubmit:m,relative:d,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:_,...M},b)=>{let{unstable_useTransitions:w}=_t.useContext(_i),y=oE(),x=lE(p,{relative:d}),R=f.toLowerCase()==="get"?"get":"post",D=typeof p=="string"&&Fv.test(p),U=H=>{if(m&&m(H),H.defaultPrevented)return;H.preventDefault();let B=H.nativeEvent.submitter,F=B?.getAttribute("formmethod")||f,T=()=>y(B||H.currentTarget,{fetcherKey:t,method:F,navigate:i,replace:l,state:u,relative:d,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:_});w&&i!==!1?_t.startTransition(()=>T()):T()};return _t.createElement("form",{ref:b,method:R,action:x,onSubmit:r?m:U,...M,"data-discover":!D&&s==="render"?"true":void 0})});nE.displayName="Form";function iE(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bv(s){let t=_t.useContext(ks);return Je(t,iE(s)),t}function aE(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:f,unstable_defaultShouldRevalidate:p,unstable_useTransitions:m}={}){let d=cp(),g=Br(),v=il(s,{relative:u});return _t.useCallback(_=>{if(PM(_,t)){_.preventDefault();let M=i!==void 0?i:Qo(g)===Qo(v),b=()=>d(s,{replace:M,state:r,preventScrollReset:l,relative:u,viewTransition:f,unstable_defaultShouldRevalidate:p});m?_t.startTransition(()=>b()):b()}},[g,d,v,i,r,t,s,l,u,f,p,m])}var rE=0,sE=()=>`__${String(++rE)}__`;function oE(){let{router:s}=Bv("useSubmit"),{basename:t}=_t.useContext(_i),i=TM(),r=s.fetch,l=s.navigate;return _t.useCallback(async(u,f={})=>{let{action:p,method:m,encType:d,formData:g,body:v}=BM(u,t);if(f.navigate===!1){let _=f.fetcherKey||sE();await r(_,i,f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||m,formEncType:f.encType||d,flushSync:f.flushSync})}else await l(f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||m,formEncType:f.encType||d,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,t,i])}function lE(s,{relative:t}={}){let{basename:i}=_t.useContext(_i),r=_t.useContext(Aa);Je(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...il(s||".",{relative:t})},f=Br();if(s==null){u.search=f.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(g=>g==="")){p.delete("index"),m.filter(v=>v).forEach(v=>p.append("index",v));let g=p.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:xa([i,u.pathname])),Qo(u)}function uE(s,{relative:t}={}){let i=_t.useContext(Rv);Je(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Bv("useViewTransitionState"),l=il(s,{relative:t});if(!i.isTransitioning)return!1;let u=Ma(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=Ma(i.nextLocation.pathname,r)||i.nextLocation.pathname;return ic(l.pathname,f)!=null||ic(l.pathname,u)!=null}function mp(s){const t=cp();return Zt.jsxs("nav",{className:"navbar",children:[Zt.jsx("button",{className:s.highlight==="blog"?"nav-button highlighted":"nav-button",disabled:s.disabled==="blog",onClick:()=>t("/blog"),children:"Blog"}),Zt.jsx("button",{className:s.highlight==="home"?"nav-button highlighted":"nav-button",disabled:s.disabled==="home",onClick:()=>t("/"),children:"Home"}),Zt.jsx("button",{className:s.highlight==="projects"?"nav-button highlighted":"nav-button",disabled:s.disabled==="projects",onClick:()=>t("/projects"),children:"Projects"})]})}const ac={RECENT_FETCH_CACHING:!0,RECENT_FETCH_CACHE_DURATION:120*1e3,COMMIT_FETCH_COUNT:10},Mu=new Map;function cE(s,t,i){return`${s}/${t}/${i}`}function fE(s){return Date.now()-s<ac.RECENT_FETCH_CACHE_DURATION}async function hE(s,t,i=10){const r=cE(s,t,i);{const l=Mu.get(r);if(l&&fE(l.timestamp))return l.data}try{const l=await fetch(`https://api.github.com/repos/${s}/${t}/commits?per_page=${i}`);if(!l.ok){const m={commits:[],error:`GitHub API error: ${l.status}`};return ac.RECENT_FETCH_CACHING&&Mu.set(r,{data:m,timestamp:Date.now()}),m}const p={commits:(await l.json()).map(m=>({message:m.commit.message.split(`
`)[0],url:m.html_url,author:{name:m.commit.author.name},date:m.commit.author.date}))};return ac.RECENT_FETCH_CACHING&&Mu.set(r,{data:p,timestamp:Date.now()}),p}catch(l){const u={commits:[],error:l instanceof Error?l.message:"Failed to fetch commits"};return Mu.set(r,{data:u,timestamp:Date.now()}),u}}function dE(s){const t=new Date(s),r=new Date().getTime()-t.getTime(),l=Math.floor(r/6e4),u=Math.floor(r/36e5),f=Math.floor(r/864e5);return l<1?"Just now":l<60?`${l} minute${l!==1?"s":""} ago`:u<24?`${u} hour${u!==1?"s":""} ago`:f<7?`${f} day${f!==1?"s":""} ago`:t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function pE(){const[s,t]=_t.useState([]),[i,r]=_t.useState(!0),[l,u]=_t.useState(null);return _t.useEffect(()=>{(async()=>{r(!0);const p=await hE("Tebsickle","dev-page",ac.COMMIT_FETCH_COUNT);p.error?u(p.error):t(p.commits),r(!1)})()},[]),i?Zt.jsx("div",{className:"recent-fetch",children:"Loading commits..."}):l?Zt.jsxs("div",{className:"recent-fetch error",children:["Error: ",l]}):s.length===0?Zt.jsx("div",{className:"recent-fetch",children:"No commits found"}):Zt.jsx("div",{className:"recent-fetch",children:s.map((f,p)=>Zt.jsxs("div",{className:"commit-item",children:[Zt.jsx("p",{className:"commit-message",children:f.message}),Zt.jsxs("div",{className:"commit-meta",children:[Zt.jsx("span",{className:"commit-author",children:f.author.name}),Zt.jsx("span",{className:"commit-date",children:dE(f.date)})]}),Zt.jsx("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",className:"commit-link",children:"View Commit →"})]},p))})}function mE(){return document.body.style.overflowY="hidden",Zt.jsxs(Zt.Fragment,{children:[Zt.jsx(mp,{highlight:"home",disabled:"home"}),Zt.jsxs("div",{className:"home-content",children:[Zt.jsxs("div",{className:"home-card home-recent",children:[Zt.jsx("h1",{className:"recent-header",children:"Recent"}),Zt.jsx(pE,{})]}),Zt.jsxs("div",{className:"home-right",children:[Zt.jsxs("div",{className:"home-card home-profile-card",children:[Zt.jsx("h1",{className:"recent-header",children:"Tebs"}),Zt.jsx("p",{style:{textAlign:"center"},children:"Not implemented yet!"})]}),Zt.jsxs("div",{className:"home-card home-uptime-card",children:[Zt.jsx("h1",{className:"recent-header",children:"Uptimes"}),Zt.jsx("p",{style:{textAlign:"center"},children:"Not implemented yet!"})]})]})]})]})}function gE(){const s=cp();return Zt.jsx("div",{className:"container",children:Zt.jsxs("div",{className:"content",children:[Zt.jsx("h1",{className:"heading",children:"🚧 In Development"}),Zt.jsx("p",{className:"message",children:"This page is not finished. Check back soon!"}),Zt.jsx("button",{onClick:()=>s(-1),children:"Go Back"})]})})}function _E(){return Zt.jsxs(Zt.Fragment,{children:[Zt.jsx(mp,{highlight:"blog",disabled:"blog"}),Zt.jsx("h1",{children:"Not implemented yet!"})]})}function vE(){return Zt.jsxs(Zt.Fragment,{children:[Zt.jsx(mp,{highlight:"projects",disabled:"projects"}),Zt.jsx("h1",{children:"Not implemented yet!"})]})}const gp="183",xE=0,S_=1,SE=2,Ku=1,yE=2,Zo=3,or=0,Wn=1,_a=2,Sa=0,Ps=1,y_=2,M_=3,E_=4,ME=5,Nr=100,EE=101,bE=102,TE=103,AE=104,RE=200,CE=201,wE=202,DE=203,gd=204,_d=205,UE=206,LE=207,NE=208,OE=209,PE=210,FE=211,IE=212,BE=213,zE=214,vd=0,xd=1,Sd=2,Is=3,yd=4,Md=5,Ed=6,bd=7,zv=0,HE=1,GE=2,Gi=0,Hv=1,Gv=2,Vv=3,kv=4,Xv=5,Wv=6,qv=7,Yv=300,Ir=301,Bs=302,Nh=303,Oh=304,mc=306,Td=1e3,va=1001,Ad=1002,Tn=1003,VE=1004,Eu=1005,Dn=1006,Ph=1007,Pr=1008,gi=1009,jv=1010,Zv=1011,Jo=1012,_p=1013,Wi=1014,zi=1015,Ea=1016,vp=1017,xp=1018,$o=1020,Kv=35902,Qv=35899,Jv=1021,$v=1022,wi=1023,ba=1026,Fr=1027,tx=1028,Sp=1029,zs=1030,yp=1031,Mp=1033,Qu=33776,Ju=33777,$u=33778,tc=33779,Rd=35840,Cd=35841,wd=35842,Dd=35843,Ud=36196,Ld=37492,Nd=37496,Od=37488,Pd=37489,Fd=37490,Id=37491,Bd=37808,zd=37809,Hd=37810,Gd=37811,Vd=37812,kd=37813,Xd=37814,Wd=37815,qd=37816,Yd=37817,jd=37818,Zd=37819,Kd=37820,Qd=37821,Jd=36492,$d=36494,tp=36495,ep=36283,np=36284,ip=36285,ap=36286,kE=3200,XE=0,WE=1,rr="",pi="srgb",Hs="srgb-linear",rc="linear",Ie="srgb",ys=7680,b_=519,qE=512,YE=513,jE=514,Ep=515,ZE=516,KE=517,bp=518,QE=519,T_=35044,A_="300 es",Hi=2e3,sc=2001;function JE(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function oc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $E(){const s=oc("canvas");return s.style.display="block",s}const R_={};function C_(...s){const t="THREE."+s.shift();console.log(t,...s)}function ex(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ae(...s){s=ex(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...s)}}function we(...s){s=ex(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...s)}}function lc(...s){const t=s.join(" ");t in R_||(R_[t]=!0,ae(...s))}function tb(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const eb={[vd]:xd,[Sd]:Ed,[yd]:bd,[Is]:Md,[xd]:vd,[Ed]:Sd,[bd]:yd,[Md]:Is};class Xs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fh=Math.PI/180,rp=180/Math.PI;function al(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function Me(s,t,i){return Math.max(t,Math.min(i,s))}function nb(s,t){return(s%t+t)%t}function Ih(s,t,i){return(1-i)*s+i*t}function Ho(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(t=0,i=0){Ve.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*r-f*l+t.x,this.y=u*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ws{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,f,p){let m=r[l+0],d=r[l+1],g=r[l+2],v=r[l+3],_=u[f+0],M=u[f+1],b=u[f+2],w=u[f+3];if(v!==w||m!==_||d!==M||g!==b){let y=m*_+d*M+g*b+v*w;y<0&&(_=-_,M=-M,b=-b,w=-w,y=-y);let x=1-p;if(y<.9995){const R=Math.acos(y),D=Math.sin(R);x=Math.sin(x*R)/D,p=Math.sin(p*R)/D,m=m*x+_*p,d=d*x+M*p,g=g*x+b*p,v=v*x+w*p}else{m=m*x+_*p,d=d*x+M*p,g=g*x+b*p,v=v*x+w*p;const R=1/Math.sqrt(m*m+d*d+g*g+v*v);m*=R,d*=R,g*=R,v*=R}}t[i]=m,t[i+1]=d,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,f){const p=r[l],m=r[l+1],d=r[l+2],g=r[l+3],v=u[f],_=u[f+1],M=u[f+2],b=u[f+3];return t[i]=p*b+g*v+m*M-d*_,t[i+1]=m*b+g*_+d*v-p*M,t[i+2]=d*b+g*M+p*_-m*v,t[i+3]=g*b-p*v-m*_-d*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,f=t._order,p=Math.cos,m=Math.sin,d=p(r/2),g=p(l/2),v=p(u/2),_=m(r/2),M=m(l/2),b=m(u/2);switch(f){case"XYZ":this._x=_*g*v+d*M*b,this._y=d*M*v-_*g*b,this._z=d*g*b+_*M*v,this._w=d*g*v-_*M*b;break;case"YXZ":this._x=_*g*v+d*M*b,this._y=d*M*v-_*g*b,this._z=d*g*b-_*M*v,this._w=d*g*v+_*M*b;break;case"ZXY":this._x=_*g*v-d*M*b,this._y=d*M*v+_*g*b,this._z=d*g*b+_*M*v,this._w=d*g*v-_*M*b;break;case"ZYX":this._x=_*g*v-d*M*b,this._y=d*M*v+_*g*b,this._z=d*g*b-_*M*v,this._w=d*g*v+_*M*b;break;case"YZX":this._x=_*g*v+d*M*b,this._y=d*M*v+_*g*b,this._z=d*g*b-_*M*v,this._w=d*g*v-_*M*b;break;case"XZY":this._x=_*g*v-d*M*b,this._y=d*M*v-_*g*b,this._z=d*g*b+_*M*v,this._w=d*g*v+_*M*b;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],f=i[1],p=i[5],m=i[9],d=i[2],g=i[6],v=i[10],_=r+p+v;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-d)*M,this._z=(f-l)*M}else if(r>p&&r>v){const M=2*Math.sqrt(1+r-p-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(u+d)/M}else if(p>v){const M=2*Math.sqrt(1+p-r-v);this._w=(u-d)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-p);this._w=(f-l)/M,this._x=(u+d)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,f=t._w,p=i._x,m=i._y,d=i._z,g=i._w;return this._x=r*g+f*p+l*d-u*m,this._y=l*g+f*m+u*p-r*d,this._z=u*g+f*d+r*m-l*p,this._w=f*g-r*p-l*m-u*d,this._onChangeCallback(),this}slerp(t,i){let r=t._x,l=t._y,u=t._z,f=t._w,p=this.dot(t);p<0&&(r=-r,l=-l,u=-u,f=-f,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),g=Math.sin(d);m=Math.sin(m*d)/g,i=Math.sin(i*d)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,i=0,r=0){et.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(w_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(w_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,f=t.y,p=t.z,m=t.w,d=2*(f*l-p*r),g=2*(p*i-u*l),v=2*(u*r-f*i);return this.x=i+m*d+f*v-p*g,this.y=r+m*g+p*d-u*v,this.z=l+m*v+u*g-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-u*p,this.y=u*f-r*m,this.z=r*p-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Bh.copy(this).projectOnVector(t),this.sub(Bh)}reflect(t){return this.sub(Bh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bh=new et,w_=new Ws;class pe{constructor(t,i,r,l,u,f,p,m,d){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,p,m,d)}set(t,i,r,l,u,f,p,m,d){const g=this.elements;return g[0]=t,g[1]=l,g[2]=p,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=f,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],p=r[3],m=r[6],d=r[1],g=r[4],v=r[7],_=r[2],M=r[5],b=r[8],w=l[0],y=l[3],x=l[6],R=l[1],D=l[4],U=l[7],H=l[2],B=l[5],F=l[8];return u[0]=f*w+p*R+m*H,u[3]=f*y+p*D+m*B,u[6]=f*x+p*U+m*F,u[1]=d*w+g*R+v*H,u[4]=d*y+g*D+v*B,u[7]=d*x+g*U+v*F,u[2]=_*w+M*R+b*H,u[5]=_*y+M*D+b*B,u[8]=_*x+M*U+b*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8];return i*f*g-i*p*d-r*u*g+r*p*m+l*u*d-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8],v=g*f-p*d,_=p*m-g*u,M=d*u-f*m,b=i*v+r*_+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=v*w,t[1]=(l*d-g*r)*w,t[2]=(p*r-l*f)*w,t[3]=_*w,t[4]=(g*i-l*m)*w,t[5]=(l*u-p*i)*w,t[6]=M*w,t[7]=(r*m-d*i)*w,t[8]=(f*i-r*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,f,p){const m=Math.cos(u),d=Math.sin(u);return this.set(r*m,r*d,-r*(m*f+d*p)+f+t,-l*d,l*m,-l*(-d*f+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(zh.makeScale(t,i)),this}rotate(t){return this.premultiply(zh.makeRotation(-t)),this}translate(t,i){return this.premultiply(zh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zh=new pe,D_=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),U_=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ib(){const s={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Ie&&(l.r=ya(l.r),l.g=ya(l.g),l.b=ya(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ie&&(l.r=Fs(l.r),l.g=Fs(l.g),l.b=Fs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===rr?rc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return lc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return lc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Hs]:{primaries:t,whitePoint:r,transfer:rc,toXYZ:D_,fromXYZ:U_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:r,transfer:Ie,toXYZ:D_,fromXYZ:U_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),s}const Te=ib();function ya(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ms;class ab{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Ms===void 0&&(Ms=oc("canvas")),Ms.width=t.width,Ms.height=t.height;const l=Ms.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Ms}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=oc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=ya(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ya(i[r]/255)*255):i[r]=ya(i[r]);return{data:i,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rb=0;class Tp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=al(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?u.push(Hh(l[f].image)):u.push(Hh(l[f]))}else u=Hh(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Hh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ab.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}let sb=0;const Gh=new et;class In extends Xs{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=va,l=va,u=Dn,f=Pr,p=wi,m=gi,d=In.DEFAULT_ANISOTROPY,g=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=al(),this.name="",this.source=new Tp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gh).x}get height(){return this.source.getSize(Gh).y}get depth(){return this.source.getSize(Gh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ae(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Td:t.x=t.x-Math.floor(t.x);break;case va:t.x=t.x<0?0:1;break;case Ad:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Td:t.y=t.y-Math.floor(t.y);break;case va:t.y=t.y<0?0:1;break;case Ad:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Yv;In.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,d=m[0],g=m[4],v=m[8],_=m[1],M=m[5],b=m[9],w=m[2],y=m[6],x=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-w)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+w)<.1&&Math.abs(b+y)<.1&&Math.abs(d+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(d+1)/2,U=(M+1)/2,H=(x+1)/2,B=(g+_)/4,F=(v+w)/4,T=(b+y)/4;return D>U&&D>H?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=B/r,u=F/r):U>H?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=B/l,u=T/l):H<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),r=F/u,l=T/u),this.set(r,l,u,i),this}let R=Math.sqrt((y-b)*(y-b)+(v-w)*(v-w)+(_-g)*(_-g));return Math.abs(R)<.001&&(R=1),this.x=(y-b)/R,this.y=(v-w)/R,this.z=(_-g)/R,this.w=Math.acos((d+M+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this.w=Me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this.w=Me(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ob extends Xs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:r.depth},u=new In(l),f=r.count;for(let p=0;p<f;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Tp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends ob{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class nx extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lb extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(t,i,r,l,u,f,p,m,d,g,v,_,M,b,w,y){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,p,m,d,g,v,_,M,b,w,y)}set(t,i,r,l,u,f,p,m,d,g,v,_,M,b,w,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=f,x[9]=p,x[13]=m,x[2]=d,x[6]=g,x[10]=v,x[14]=_,x[3]=M,x[7]=b,x[11]=w,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/Es.setFromMatrixColumn(t,0).length(),u=1/Es.setFromMatrixColumn(t,1).length(),f=1/Es.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,f=Math.cos(r),p=Math.sin(r),m=Math.cos(l),d=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const _=f*g,M=f*v,b=p*g,w=p*v;i[0]=m*g,i[4]=-m*v,i[8]=d,i[1]=M+b*d,i[5]=_-w*d,i[9]=-p*m,i[2]=w-_*d,i[6]=b+M*d,i[10]=f*m}else if(t.order==="YXZ"){const _=m*g,M=m*v,b=d*g,w=d*v;i[0]=_+w*p,i[4]=b*p-M,i[8]=f*d,i[1]=f*v,i[5]=f*g,i[9]=-p,i[2]=M*p-b,i[6]=w+_*p,i[10]=f*m}else if(t.order==="ZXY"){const _=m*g,M=m*v,b=d*g,w=d*v;i[0]=_-w*p,i[4]=-f*v,i[8]=b+M*p,i[1]=M+b*p,i[5]=f*g,i[9]=w-_*p,i[2]=-f*d,i[6]=p,i[10]=f*m}else if(t.order==="ZYX"){const _=f*g,M=f*v,b=p*g,w=p*v;i[0]=m*g,i[4]=b*d-M,i[8]=_*d+w,i[1]=m*v,i[5]=w*d+_,i[9]=M*d-b,i[2]=-d,i[6]=p*m,i[10]=f*m}else if(t.order==="YZX"){const _=f*m,M=f*d,b=p*m,w=p*d;i[0]=m*g,i[4]=w-_*v,i[8]=b*v+M,i[1]=v,i[5]=f*g,i[9]=-p*g,i[2]=-d*g,i[6]=M*v+b,i[10]=_-w*v}else if(t.order==="XZY"){const _=f*m,M=f*d,b=p*m,w=p*d;i[0]=m*g,i[4]=-v,i[8]=d*g,i[1]=_*v+w,i[5]=f*g,i[9]=M*v-b,i[2]=b*v-M,i[6]=p*g,i[10]=w*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ub,t,cb)}lookAt(t,i,r){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),$a.crossVectors(r,ii),$a.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),$a.crossVectors(r,ii)),$a.normalize(),bu.crossVectors(ii,$a),l[0]=$a.x,l[4]=bu.x,l[8]=ii.x,l[1]=$a.y,l[5]=bu.y,l[9]=ii.y,l[2]=$a.z,l[6]=bu.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],p=r[4],m=r[8],d=r[12],g=r[1],v=r[5],_=r[9],M=r[13],b=r[2],w=r[6],y=r[10],x=r[14],R=r[3],D=r[7],U=r[11],H=r[15],B=l[0],F=l[4],T=l[8],L=l[12],ct=l[1],G=l[5],tt=l[9],it=l[13],lt=l[2],Q=l[6],O=l[10],I=l[14],ot=l[3],pt=l[7],Et=l[11],P=l[15];return u[0]=f*B+p*ct+m*lt+d*ot,u[4]=f*F+p*G+m*Q+d*pt,u[8]=f*T+p*tt+m*O+d*Et,u[12]=f*L+p*it+m*I+d*P,u[1]=g*B+v*ct+_*lt+M*ot,u[5]=g*F+v*G+_*Q+M*pt,u[9]=g*T+v*tt+_*O+M*Et,u[13]=g*L+v*it+_*I+M*P,u[2]=b*B+w*ct+y*lt+x*ot,u[6]=b*F+w*G+y*Q+x*pt,u[10]=b*T+w*tt+y*O+x*Et,u[14]=b*L+w*it+y*I+x*P,u[3]=R*B+D*ct+U*lt+H*ot,u[7]=R*F+D*G+U*Q+H*pt,u[11]=R*T+D*tt+U*O+H*Et,u[15]=R*L+D*it+U*I+H*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],f=t[1],p=t[5],m=t[9],d=t[13],g=t[2],v=t[6],_=t[10],M=t[14],b=t[3],w=t[7],y=t[11],x=t[15],R=m*M-d*_,D=p*M-d*v,U=p*_-m*v,H=f*M-d*g,B=f*_-m*g,F=f*v-p*g;return i*(w*R-y*D+x*U)-r*(b*R-y*H+x*B)+l*(b*D-w*H+x*F)-u*(b*U-w*B+y*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8],v=t[9],_=t[10],M=t[11],b=t[12],w=t[13],y=t[14],x=t[15],R=i*p-r*f,D=i*m-l*f,U=i*d-u*f,H=r*m-l*p,B=r*d-u*p,F=l*d-u*m,T=g*w-v*b,L=g*y-_*b,ct=g*x-M*b,G=v*y-_*w,tt=v*x-M*w,it=_*x-M*y,lt=R*it-D*tt+U*G+H*ct-B*L+F*T;if(lt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/lt;return t[0]=(p*it-m*tt+d*G)*Q,t[1]=(l*tt-r*it-u*G)*Q,t[2]=(w*F-y*B+x*H)*Q,t[3]=(_*B-v*F-M*H)*Q,t[4]=(m*ct-f*it-d*L)*Q,t[5]=(i*it-l*ct+u*L)*Q,t[6]=(y*U-b*F-x*D)*Q,t[7]=(g*F-_*U+M*D)*Q,t[8]=(f*tt-p*ct+d*T)*Q,t[9]=(r*ct-i*tt-u*T)*Q,t[10]=(b*B-w*U+x*R)*Q,t[11]=(v*U-g*B-M*R)*Q,t[12]=(p*L-f*G-m*T)*Q,t[13]=(i*G-r*L+l*T)*Q,t[14]=(w*D-b*H-y*R)*Q,t[15]=(g*H-v*D+_*R)*Q,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=t.x,p=t.y,m=t.z,d=u*f,g=u*p;return this.set(d*f+r,d*p-l*m,d*m+l*p,0,d*p+l*m,g*p+r,g*m-l*f,0,d*m-l*p,g*m+l*f,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,f){return this.set(1,r,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,f=i._y,p=i._z,m=i._w,d=u+u,g=f+f,v=p+p,_=u*d,M=u*g,b=u*v,w=f*g,y=f*v,x=p*v,R=m*d,D=m*g,U=m*v,H=r.x,B=r.y,F=r.z;return l[0]=(1-(w+x))*H,l[1]=(M+U)*H,l[2]=(b-D)*H,l[3]=0,l[4]=(M-U)*B,l[5]=(1-(_+x))*B,l[6]=(y+R)*B,l[7]=0,l[8]=(b+D)*F,l[9]=(y-R)*F,l[10]=(1-(_+w))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const u=this.determinant();if(u===0)return r.set(1,1,1),i.identity(),this;let f=Es.set(l[0],l[1],l[2]).length();const p=Es.set(l[4],l[5],l[6]).length(),m=Es.set(l[8],l[9],l[10]).length();u<0&&(f=-f),Ti.copy(this);const d=1/f,g=1/p,v=1/m;return Ti.elements[0]*=d,Ti.elements[1]*=d,Ti.elements[2]*=d,Ti.elements[4]*=g,Ti.elements[5]*=g,Ti.elements[6]*=g,Ti.elements[8]*=v,Ti.elements[9]*=v,Ti.elements[10]*=v,i.setFromRotationMatrix(Ti),r.x=f,r.y=p,r.z=m,this}makePerspective(t,i,r,l,u,f,p=Hi,m=!1){const d=this.elements,g=2*u/(i-t),v=2*u/(r-l),_=(i+t)/(i-t),M=(r+l)/(r-l);let b,w;if(m)b=u/(f-u),w=f*u/(f-u);else if(p===Hi)b=-(f+u)/(f-u),w=-2*f*u/(f-u);else if(p===sc)b=-f/(f-u),w=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,r,l,u,f,p=Hi,m=!1){const d=this.elements,g=2/(i-t),v=2/(r-l),_=-(i+t)/(i-t),M=-(r+l)/(r-l);let b,w;if(m)b=1/(f-u),w=f/(f-u);else if(p===Hi)b=-2/(f-u),w=-(f+u)/(f-u);else if(p===sc)b=-1/(f-u),w=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Es=new et,Ti=new rn,ub=new et(0,0,0),cb=new et(1,1,1),$a=new et,bu=new et,ii=new et,L_=new rn,N_=new Ws;class Ta{constructor(t=0,i=0,r=0,l=Ta.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],f=l[4],p=l[8],m=l[1],d=l[5],g=l[9],v=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return L_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(L_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return N_.setFromEuler(this),this.setFromQuaternion(N_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ta.DEFAULT_ORDER="XYZ";class ix{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fb=0;const O_=new et,bs=new Ws,ha=new rn,Tu=new et,Go=new et,hb=new et,db=new Ws,P_=new et(1,0,0),F_=new et(0,1,0),I_=new et(0,0,1),B_={type:"added"},pb={type:"removed"},Ts={type:"childadded",child:null},Vh={type:"childremoved",child:null};class qn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const t=new et,i=new Ta,r=new Ws,l=new et(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new pe}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ix,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return bs.setFromAxisAngle(t,i),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,i){return bs.setFromAxisAngle(t,i),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(P_,t)}rotateY(t){return this.rotateOnAxis(F_,t)}rotateZ(t){return this.rotateOnAxis(I_,t)}translateOnAxis(t,i){return O_.copy(t).applyQuaternion(this.quaternion),this.position.add(O_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(P_,t)}translateY(t){return this.translateOnAxis(F_,t)}translateZ(t){return this.translateOnAxis(I_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Tu.copy(t):Tu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Go,Tu,this.up):ha.lookAt(Tu,Go,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),bs.setFromRotationMatrix(ha),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(B_),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(pb),Vh.child=t,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(B_),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,t,hb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,db,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,l=t.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const v=m[d];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(u(t.materials,this.material[m]));l.material=p}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(u(t.animations,m))}}if(i){const p=f(t.geometries),m=f(t.materials),d=f(t.textures),g=f(t.images),v=f(t.shapes),_=f(t.skeletons),M=f(t.animations),b=f(t.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(p){const m=[];for(const d in p){const g=p[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}qn.DEFAULT_UP=new et(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Au extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mb={type:"move"};class kh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Au,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Au,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Au,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,f=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,r),x=this._getHandJoint(d,w);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),M=.02,b=.005;d.inputState.pinching&&_>M+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=M-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(mb)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Au;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},Ru={h:0,s:0,l:0};function Xh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Be{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=r,Te.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Te.workingColorSpace){if(t=nb(t,1),i=Me(i,0,1),r=Me(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=Xh(f,u,t+1/3),this.g=Xh(f,u,t),this.b=Xh(f,u,t-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(t,i=pi){function r(u){u!==void 0&&parseFloat(u)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ae("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=pi){const r=ax[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ya(t.r),this.g=ya(t.g),this.b=ya(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return Te.workingToColorSpace(wn.copy(this),t),Math.round(Me(wn.r*255,0,255))*65536+Math.round(Me(wn.g*255,0,255))*256+Math.round(Me(wn.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,u=wn.b,f=Math.max(r,l,u),p=Math.min(r,l,u);let m,d;const g=(p+f)/2;if(p===f)m=0,d=0;else{const v=f-p;switch(d=g<=.5?v/(f+p):v/(2-f-p),f){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,i=Te.workingColorSpace){return Te.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=pi){Te.workingToColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,l=wn.b;return t!==pi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(tr),this.setHSL(tr.h+t,tr.s+i,tr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(tr),t.getHSL(Ru);const r=Ih(tr.h,Ru.h,i),l=Ih(tr.s,Ru.s,i),u=Ih(tr.l,Ru.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Be;Be.NAMES=ax;class gb extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ta,this.environmentIntensity=1,this.environmentRotation=new Ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ai=new et,da=new et,Wh=new et,pa=new et,As=new et,Rs=new et,z_=new et,qh=new et,Yh=new et,jh=new et,Zh=new an,Kh=new an,Qh=new an;class Ci{constructor(t=new et,i=new et,r=new et){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ai.subVectors(t,i),l.cross(Ai);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Ai.subVectors(l,i),da.subVectors(r,i),Wh.subVectors(t,i);const f=Ai.dot(Ai),p=Ai.dot(da),m=Ai.dot(Wh),d=da.dot(da),g=da.dot(Wh),v=f*d-p*p;if(v===0)return u.set(0,0,0),null;const _=1/v,M=(d*m-p*g)*_,b=(f*g-p*m)*_;return u.set(1-M-b,b,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(t,i,r,l,u,f,p,m){return this.getBarycoord(t,i,r,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,pa.x),m.addScaledVector(f,pa.y),m.addScaledVector(p,pa.z),m)}static getInterpolatedAttribute(t,i,r,l,u,f){return Zh.setScalar(0),Kh.setScalar(0),Qh.setScalar(0),Zh.fromBufferAttribute(t,i),Kh.fromBufferAttribute(t,r),Qh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Zh,u.x),f.addScaledVector(Kh,u.y),f.addScaledVector(Qh,u.z),f}static isFrontFacing(t,i,r,l){return Ai.subVectors(r,i),da.subVectors(t,i),Ai.cross(da).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ai.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ci.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Ci.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let f,p;As.subVectors(l,r),Rs.subVectors(u,r),qh.subVectors(t,r);const m=As.dot(qh),d=Rs.dot(qh);if(m<=0&&d<=0)return i.copy(r);Yh.subVectors(t,l);const g=As.dot(Yh),v=Rs.dot(Yh);if(g>=0&&v<=g)return i.copy(l);const _=m*v-g*d;if(_<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(As,f);jh.subVectors(t,u);const M=As.dot(jh),b=Rs.dot(jh);if(b>=0&&M<=b)return i.copy(u);const w=M*d-m*b;if(w<=0&&d>=0&&b<=0)return p=d/(d-b),i.copy(r).addScaledVector(Rs,p);const y=g*b-M*v;if(y<=0&&v-g>=0&&M-b>=0)return z_.subVectors(u,l),p=(v-g)/(v-g+(M-b)),i.copy(l).addScaledVector(z_,p);const x=1/(y+w+_);return f=w*x,p=_*x,i.copy(r).addScaledVector(As,f).addScaledVector(Rs,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class rl{constructor(t=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ri.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ri.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ri.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,p=u.count;f<p;f++)t.isMesh===!0?t.getVertexPosition(f,Ri):Ri.fromBufferAttribute(u,f),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Cu.copy(r.boundingBox)),Cu.applyMatrix4(t.matrixWorld),this.union(Cu)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vo),wu.subVectors(this.max,Vo),Cs.subVectors(t.a,Vo),ws.subVectors(t.b,Vo),Ds.subVectors(t.c,Vo),er.subVectors(ws,Cs),nr.subVectors(Ds,ws),Ar.subVectors(Cs,Ds);let i=[0,-er.z,er.y,0,-nr.z,nr.y,0,-Ar.z,Ar.y,er.z,0,-er.x,nr.z,0,-nr.x,Ar.z,0,-Ar.x,-er.y,er.x,0,-nr.y,nr.x,0,-Ar.y,Ar.x,0];return!Jh(i,Cs,ws,Ds,wu)||(i=[1,0,0,0,1,0,0,0,1],!Jh(i,Cs,ws,Ds,wu))?!1:(Du.crossVectors(er,nr),i=[Du.x,Du.y,Du.z],Jh(i,Cs,ws,Ds,wu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ma=[new et,new et,new et,new et,new et,new et,new et,new et],Ri=new et,Cu=new rl,Cs=new et,ws=new et,Ds=new et,er=new et,nr=new et,Ar=new et,Vo=new et,wu=new et,Du=new et,Rr=new et;function Jh(s,t,i,r,l){for(let u=0,f=s.length-3;u<=f;u+=3){Rr.fromArray(s,u);const p=l.x*Math.abs(Rr.x)+l.y*Math.abs(Rr.y)+l.z*Math.abs(Rr.z),m=t.dot(Rr),d=i.dot(Rr),g=r.dot(Rr);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>p)return!1}return!0}const dn=new et,Uu=new Ve;let _b=0;class ki{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_b++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=T_,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Uu.fromBufferAttribute(this,i),Uu.applyMatrix3(t),this.setXY(i,Uu.x,Uu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ho(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Xn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ho(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ho(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ho(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ho(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array),u=Xn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==T_&&(t.usage=this.usage),t}}class rx extends ki{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class sx extends ki{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class An extends ki{constructor(t,i,r){super(new Float32Array(t),i,r)}}const vb=new rl,ko=new et,$h=new et;class gc{constructor(t=new et,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):vb.setFromPoints(t).getCenter(r);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ko.subVectors(t,this.center);const i=ko.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(ko,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($h.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ko.copy(t.center).add($h)),this.expandByPoint(ko.copy(t.center).sub($h))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let xb=0;const di=new rn,td=new qn,Us=new et,ai=new rl,Xo=new rl,Sn=new et;class Yn extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(JE(t)?sx:rx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new pe().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,r){return di.makeTranslation(t,i,r),this.applyMatrix4(di),this}scale(t,i,r){return di.makeScale(t,i,r),this.applyMatrix4(di),this}lookAt(t){return td.lookAt(t),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new An(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ai.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const p=i[u];Xo.setFromBufferAttribute(p),this.morphTargetsRelative?(Sn.addVectors(ai.min,Xo.min),ai.expandByPoint(Sn),Sn.addVectors(ai.max,Xo.max),ai.expandByPoint(Sn)):(ai.expandByPoint(Xo.min),ai.expandByPoint(Xo.max))}ai.getCenter(r);let l=0;for(let u=0,f=t.count;u<f;u++)Sn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let u=0,f=i.length;u<f;u++){const p=i[u],m=this.morphTargetsRelative;for(let d=0,g=p.count;d<g;d++)Sn.fromBufferAttribute(p,d),m&&(Us.fromBufferAttribute(t,d),Sn.add(Us)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ki(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new et,m[T]=new et;const d=new et,g=new et,v=new et,_=new Ve,M=new Ve,b=new Ve,w=new et,y=new et;function x(T,L,ct){d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,L),v.fromBufferAttribute(r,ct),_.fromBufferAttribute(u,T),M.fromBufferAttribute(u,L),b.fromBufferAttribute(u,ct),g.sub(d),v.sub(d),M.sub(_),b.sub(_);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(G),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(G),p[T].add(w),p[L].add(w),p[ct].add(w),m[T].add(y),m[L].add(y),m[ct].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let T=0,L=R.length;T<L;++T){const ct=R[T],G=ct.start,tt=ct.count;for(let it=G,lt=G+tt;it<lt;it+=3)x(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const D=new et,U=new et,H=new et,B=new et;function F(T){H.fromBufferAttribute(l,T),B.copy(H);const L=p[T];D.copy(L),D.sub(H.multiplyScalar(H.dot(L))).normalize(),U.crossVectors(B,L);const G=U.dot(m[T])<0?-1:1;f.setXYZW(T,D.x,D.y,D.z,G)}for(let T=0,L=R.length;T<L;++T){const ct=R[T],G=ct.start,tt=ct.count;for(let it=G,lt=G+tt;it<lt;it+=3)F(t.getX(it+0)),F(t.getX(it+1)),F(t.getX(it+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ki(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const l=new et,u=new et,f=new et,p=new et,m=new et,d=new et,g=new et,v=new et;if(t)for(let _=0,M=t.count;_<M;_+=3){const b=t.getX(_+0),w=t.getX(_+1),y=t.getX(_+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,y),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,w),d.fromBufferAttribute(r,y),p.add(g),m.add(g),d.add(g),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(y,d.x,d.y,d.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(p,m){const d=p.array,g=p.itemSize,v=p.normalized,_=new d.constructor(m.length*g);let M=0,b=0;for(let w=0,y=m.length;w<y;w++){p.isInterleavedBufferAttribute?M=m[w]*p.data.stride+p.offset:M=m[w]*g;for(let x=0;x<g;x++)_[b++]=d[M++]}return new ki(_,g,v)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Yn,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,r);i.setAttribute(p,d)}const u=this.morphAttributes;for(const p in u){const m=[],d=u[p];for(let g=0,v=d.length;g<v;g++){const _=d[g],M=t(_,r);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const d=f[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let v=0,_=d.length;v<_;v++){const M=d[v];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const d in l){const g=l[d];this.setAttribute(d,g.clone(i))}const u=t.morphAttributes;for(const d in u){const g=[],v=u[d];for(let _=0,M=v.length;_<M;_++)g.push(v[_].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,g=f.length;d<g;d++){const v=f[d];this.addGroup(v.start,v.count,v.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Sb=0;class sl extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=al(),this.name="",this.type="Material",this.blending=Ps,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=_d,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ae(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(r.blending=this.blending),this.side!==or&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gd&&(r.blendSrc=this.blendSrc),this.blendDst!==_d&&(r.blendDst=this.blendDst),this.blendEquation!==Nr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const p in u){const m=u[p];delete m.metadata,f.push(m)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ga=new et,ed=new et,Lu=new et,ir=new et,nd=new et,Nu=new et,id=new et;class ox{constructor(t=new et,i=new et(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ga)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ga.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ed.copy(t).add(i).multiplyScalar(.5),Lu.copy(i).sub(t).normalize(),ir.copy(this.origin).sub(ed);const u=t.distanceTo(i)*.5,f=-this.direction.dot(Lu),p=ir.dot(this.direction),m=-ir.dot(Lu),d=ir.lengthSq(),g=Math.abs(1-f*f);let v,_,M,b;if(g>0)if(v=f*m-p,_=f*p-m,b=u*g,v>=0)if(_>=-b)if(_<=b){const w=1/g;v*=w,_*=w,M=v*(v+f*_+2*p)+_*(f*v+_+2*m)+d}else _=u,v=Math.max(0,-(f*_+p)),M=-v*v+_*(_+2*m)+d;else _=-u,v=Math.max(0,-(f*_+p)),M=-v*v+_*(_+2*m)+d;else _<=-b?(v=Math.max(0,-(-f*u+p)),_=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+_*(_+2*m)+d):_<=b?(v=0,_=Math.min(Math.max(-u,-m),u),M=_*(_+2*m)+d):(v=Math.max(0,-(f*u+p)),_=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+_*(_+2*m)+d);else _=f>0?-u:u,v=Math.max(0,-(f*_+p)),M=-v*v+_*(_+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(ed).addScaledVector(Lu,_),M}intersectSphere(t,i){ga.subVectors(t.center,this.origin);const r=ga.dot(this.direction),l=ga.dot(ga)-r*r,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),p=r-f,m=r+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,f,p,m;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(r=(t.min.x-_.x)*d,l=(t.max.x-_.x)*d):(r=(t.max.x-_.x)*d,l=(t.min.x-_.x)*d),g>=0?(u=(t.min.y-_.y)*g,f=(t.max.y-_.y)*g):(u=(t.max.y-_.y)*g,f=(t.min.y-_.y)*g),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),v>=0?(p=(t.min.z-_.z)*v,m=(t.max.z-_.z)*v):(p=(t.max.z-_.z)*v,m=(t.min.z-_.z)*v),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ga)!==null}intersectTriangle(t,i,r,l,u){nd.subVectors(i,t),Nu.subVectors(r,t),id.crossVectors(nd,Nu);let f=this.direction.dot(id),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;ir.subVectors(this.origin,t);const m=p*this.direction.dot(Nu.crossVectors(ir,Nu));if(m<0)return null;const d=p*this.direction.dot(nd.cross(ir));if(d<0||m+d>f)return null;const g=-p*ir.dot(id);return g<0?null:this.at(g/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class uc extends sl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.combine=zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const H_=new rn,Cr=new ox,Ou=new gc,G_=new et,Pu=new et,Fu=new et,Iu=new et,ad=new et,Bu=new et,V_=new et,zu=new et;class Di extends qn{constructor(t=new Yn,i=new uc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(u&&p){Bu.set(0,0,0);for(let m=0,d=u.length;m<d;m++){const g=p[m],v=u[m];g!==0&&(ad.fromBufferAttribute(v,t),f?Bu.addScaledVector(ad,g):Bu.addScaledVector(ad.sub(i),g))}i.add(Bu)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ou.copy(r.boundingSphere),Ou.applyMatrix4(u),Cr.copy(t.ray).recast(t.near),!(Ou.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(Ou,G_)===null||Cr.origin.distanceToSquared(G_)>(t.far-t.near)**2))&&(H_.copy(u).invert(),Cr.copy(t.ray).applyMatrix4(H_),!(r.boundingBox!==null&&Cr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Cr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,f=this.material,p=u.index,m=u.attributes.position,d=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,_=u.groups,M=u.drawRange;if(p!==null)if(Array.isArray(f))for(let b=0,w=_.length;b<w;b++){const y=_[b],x=f[y.materialIndex],R=Math.max(y.start,M.start),D=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let U=R,H=D;U<H;U+=3){const B=p.getX(U),F=p.getX(U+1),T=p.getX(U+2);l=Hu(this,x,t,r,d,g,v,B,F,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let y=b,x=w;y<x;y+=3){const R=p.getX(y),D=p.getX(y+1),U=p.getX(y+2);l=Hu(this,f,t,r,d,g,v,R,D,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,w=_.length;b<w;b++){const y=_[b],x=f[y.materialIndex],R=Math.max(y.start,M.start),D=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=R,H=D;U<H;U+=3){const B=U,F=U+1,T=U+2;l=Hu(this,x,t,r,d,g,v,B,F,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=b,x=w;y<x;y+=3){const R=y,D=y+1,U=y+2;l=Hu(this,f,t,r,d,g,v,R,D,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function yb(s,t,i,r,l,u,f,p){let m;if(t.side===Wn?m=r.intersectTriangle(f,u,l,!0,p):m=r.intersectTriangle(l,u,f,t.side===or,p),m===null)return null;zu.copy(p),zu.applyMatrix4(s.matrixWorld);const d=i.ray.origin.distanceTo(zu);return d<i.near||d>i.far?null:{distance:d,point:zu.clone(),object:s}}function Hu(s,t,i,r,l,u,f,p,m,d){s.getVertexPosition(p,Pu),s.getVertexPosition(m,Fu),s.getVertexPosition(d,Iu);const g=yb(s,t,i,r,Pu,Fu,Iu,V_);if(g){const v=new et;Ci.getBarycoord(V_,Pu,Fu,Iu,v),l&&(g.uv=Ci.getInterpolatedAttribute(l,p,m,d,v,new Ve)),u&&(g.uv1=Ci.getInterpolatedAttribute(u,p,m,d,v,new Ve)),f&&(g.normal=Ci.getInterpolatedAttribute(f,p,m,d,v,new et),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:p,b:m,c:d,normal:new et,materialIndex:0};Ci.getNormal(Pu,Fu,Iu,_.normal),g.face=_,g.barycoord=v}return g}class Mb extends In{constructor(t=null,i=1,r=1,l,u,f,p,m,d=Tn,g=Tn,v,_){super(null,f,p,m,d,g,l,u,v,_),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rd=new et,Eb=new et,bb=new pe;class Lr{constructor(t=new et(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=rd.subVectors(r,i).cross(Eb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(rd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||bb.getNormalMatrix(t),l=this.coplanarPoint(rd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new gc,Tb=new Ve(.5,.5),Gu=new et;class lx{constructor(t=new Lr,i=new Lr,r=new Lr,l=new Lr,u=new Lr,f=new Lr){this.planes=[t,i,r,l,u,f]}set(t,i,r,l,u,f){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(u),p[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Hi,r=!1){const l=this.planes,u=t.elements,f=u[0],p=u[1],m=u[2],d=u[3],g=u[4],v=u[5],_=u[6],M=u[7],b=u[8],w=u[9],y=u[10],x=u[11],R=u[12],D=u[13],U=u[14],H=u[15];if(l[0].setComponents(d-f,M-g,x-b,H-R).normalize(),l[1].setComponents(d+f,M+g,x+b,H+R).normalize(),l[2].setComponents(d+p,M+v,x+w,H+D).normalize(),l[3].setComponents(d-p,M-v,x-w,H-D).normalize(),r)l[4].setComponents(m,_,y,U).normalize(),l[5].setComponents(d-m,M-_,x-y,H-U).normalize();else if(l[4].setComponents(d-m,M-_,x-y,H-U).normalize(),i===Hi)l[5].setComponents(d+m,M+_,x+y,H+U).normalize();else if(i===sc)l[5].setComponents(m,_,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(t){wr.center.set(0,0,0);const i=Tb.distanceTo(t.center);return wr.radius=.7071067811865476+i,wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Gu.x=l.normal.x>0?t.max.x:t.min.x,Gu.y=l.normal.y>0?t.max.y:t.min.y,Gu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Gu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ec extends sl{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const cc=new et,fc=new et,k_=new rn,Wo=new ox,Vu=new gc,sd=new et,X_=new et;class Ab extends qn{constructor(t=new Yn,i=new ec){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)cc.fromBufferAttribute(i,l-1),fc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=cc.distanceTo(fc);t.setAttribute("lineDistance",new An(r,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Vu.copy(r.boundingSphere),Vu.applyMatrix4(l),Vu.radius+=u,t.ray.intersectsSphere(Vu)===!1)return;k_.copy(l).invert(),Wo.copy(t.ray).applyMatrix4(k_);const p=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,g=r.index,_=r.attributes.position;if(g!==null){const M=Math.max(0,f.start),b=Math.min(g.count,f.start+f.count);for(let w=M,y=b-1;w<y;w+=d){const x=g.getX(w),R=g.getX(w+1),D=ku(this,t,Wo,m,x,R,w);D&&i.push(D)}if(this.isLineLoop){const w=g.getX(b-1),y=g.getX(M),x=ku(this,t,Wo,m,w,y,b-1);x&&i.push(x)}}else{const M=Math.max(0,f.start),b=Math.min(_.count,f.start+f.count);for(let w=M,y=b-1;w<y;w+=d){const x=ku(this,t,Wo,m,w,w+1,w);x&&i.push(x)}if(this.isLineLoop){const w=ku(this,t,Wo,m,b-1,M,b-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}}function ku(s,t,i,r,l,u,f){const p=s.geometry.attributes.position;if(cc.fromBufferAttribute(p,l),fc.fromBufferAttribute(p,u),i.distanceSqToSegment(cc,fc,sd,X_)>r)return;sd.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(sd);if(!(d<t.near||d>t.far))return{distance:d,point:X_.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const W_=new et,q_=new et;class od extends Ab{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)W_.fromBufferAttribute(i,l),q_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+W_.distanceTo(q_);t.setAttribute("lineDistance",new An(r,1))}else ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ux extends In{constructor(t=[],i=Ir,r,l,u,f,p,m,d,g){super(t,i,r,l,u,f,p,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tl extends In{constructor(t,i,r=Wi,l,u,f,p=Tn,m=Tn,d,g=ba,v=1){if(g!==ba&&g!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:v};super(_,l,u,f,p,m,g,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Rb extends tl{constructor(t,i=Wi,r=Ir,l,u,f=Tn,p=Tn,m,d=ba){const g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,i,r,l,u,f,p,m,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class cx extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ol extends Yn{constructor(t=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const p=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],d=[],g=[],v=[];let _=0,M=0;b("z","y","x",-1,-1,r,i,t,f,u,0),b("z","y","x",1,-1,r,i,-t,f,u,1),b("x","z","y",1,1,t,r,i,l,f,2),b("x","z","y",1,-1,t,r,-i,l,f,3),b("x","y","z",1,-1,t,i,r,l,u,4),b("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new An(d,3)),this.setAttribute("normal",new An(g,3)),this.setAttribute("uv",new An(v,2));function b(w,y,x,R,D,U,H,B,F,T,L){const ct=U/F,G=H/T,tt=U/2,it=H/2,lt=B/2,Q=F+1,O=T+1;let I=0,ot=0;const pt=new et;for(let Et=0;Et<O;Et++){const P=Et*G-it;for(let Y=0;Y<Q;Y++){const ft=Y*ct-tt;pt[w]=ft*R,pt[y]=P*D,pt[x]=lt,d.push(pt.x,pt.y,pt.z),pt[w]=0,pt[y]=0,pt[x]=B>0?1:-1,g.push(pt.x,pt.y,pt.z),v.push(Y/F),v.push(1-Et/T),I+=1}}for(let Et=0;Et<T;Et++)for(let P=0;P<F;P++){const Y=_+P+Q*Et,ft=_+P+Q*(Et+1),xt=_+(P+1)+Q*(Et+1),Ut=_+(P+1)+Q*Et;m.push(Y,ft,Ut),m.push(ft,xt,Ut),ot+=6}p.addGroup(M,ot,L),M+=ot,_+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class _c extends Yn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,f=i/2,p=Math.floor(r),m=Math.floor(l),d=p+1,g=m+1,v=t/p,_=i/m,M=[],b=[],w=[],y=[];for(let x=0;x<g;x++){const R=x*_-f;for(let D=0;D<d;D++){const U=D*v-u;b.push(U,-R,0),w.push(0,0,1),y.push(D/p),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let R=0;R<p;R++){const D=R+d*x,U=R+d*(x+1),H=R+1+d*(x+1),B=R+1+d*x;M.push(D,U,B),M.push(U,H,B)}this.setIndex(M),this.setAttribute("position",new An(b,3)),this.setAttribute("normal",new An(w,3)),this.setAttribute("uv",new An(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _c(t.width,t.height,t.widthSegments,t.heightSegments)}}class hc extends Yn{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,f=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:f,thetaLength:p},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+p,Math.PI);let d=0;const g=[],v=new et,_=new et,M=[],b=[],w=[],y=[];for(let x=0;x<=r;x++){const R=[],D=x/r;let U=0;x===0&&f===0?U=.5/i:x===r&&m===Math.PI&&(U=-.5/i);for(let H=0;H<=i;H++){const B=H/i;v.x=-t*Math.cos(l+B*u)*Math.sin(f+D*p),v.y=t*Math.cos(f+D*p),v.z=t*Math.sin(l+B*u)*Math.sin(f+D*p),b.push(v.x,v.y,v.z),_.copy(v).normalize(),w.push(_.x,_.y,_.z),y.push(B+U,1-D),R.push(d++)}g.push(R)}for(let x=0;x<r;x++)for(let R=0;R<i;R++){const D=g[x][R+1],U=g[x][R],H=g[x+1][R],B=g[x+1][R+1];(x!==0||f>0)&&M.push(D,U,B),(x!==r-1||m<Math.PI)&&M.push(U,H,B)}this.setIndex(M),this.setAttribute("position",new An(b,3)),this.setAttribute("normal",new An(w,3)),this.setAttribute("uv",new An(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Gs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Fn(s){const t={};for(let i=0;i<s.length;i++){const r=Gs(s[i]);for(const l in r)t[l]=r[l]}return t}function Cb(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function fx(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const wb={clone:Gs,merge:Fn};var Db=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ub=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends sl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Db,this.fragmentShader=Ub,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=Cb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Lb extends qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nb extends sl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ob extends sl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xu=new et,Wu=new Ws,Fi=new et;class hx extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Xu,Wu,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xu,Wu,Fi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Xu,Wu,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xu,Wu,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ar=new et,Y_=new Ve,j_=new Ve;class mi extends hx{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=rp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rp*2*Math.atan(Math.tan(Fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-t/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ar.x,ar.y).multiplyScalar(-t/ar.z)}getViewSize(t,i){return this.getViewBounds(t,Y_,j_),i.subVectors(j_,Y_)}setViewOffset(t,i,r,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Fh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*r/d,l*=f.width/m,r*=f.height/d}const p=this.filmOffset;p!==0&&(u+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class dx extends hx{constructor(t=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,f=r+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,f=u+d*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ls=-90,Ns=1;class Pb extends qn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(Ls,Ns,t,i);l.layers=this.layers,this.add(l);const u=new mi(Ls,Ns,t,i);u.layers=this.layers,this.add(u);const f=new mi(Ls,Ns,t,i);f.layers=this.layers,this.add(f);const p=new mi(Ls,Ns,t,i);p.layers=this.layers,this.add(p);const m=new mi(Ls,Ns,t,i);m.layers=this.layers,this.add(m);const d=new mi(Ls,Ns,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,p,m]=i;for(const d of i)this.remove(d);if(t===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===sc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,p,m,d,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(r,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,u),t.setRenderTarget(r,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(r,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(r,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),r.texture.generateMipmaps=w,t.setRenderTarget(r,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(v,_,M),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Fb extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Z_(s,t,i,r){const l=Ib(r);switch(i){case Jv:return s*t;case tx:return s*t/l.components*l.byteLength;case Sp:return s*t/l.components*l.byteLength;case zs:return s*t*2/l.components*l.byteLength;case yp:return s*t*2/l.components*l.byteLength;case $v:return s*t*3/l.components*l.byteLength;case wi:return s*t*4/l.components*l.byteLength;case Mp:return s*t*4/l.components*l.byteLength;case Qu:case Ju:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $u:case tc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cd:case Dd:return Math.max(s,16)*Math.max(t,8)/4;case Rd:case wd:return Math.max(s,8)*Math.max(t,8)/2;case Ud:case Ld:case Od:case Pd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Nd:case Fd:case Id:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Hd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Gd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Vd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case kd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Xd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Wd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case qd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case jd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Zd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Kd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Qd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Jd:case $d:case tp:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ep:case np:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ip:case ap:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ib(s){switch(s){case gi:case jv:return{byteLength:1,components:1};case Jo:case Zv:case Ea:return{byteLength:2,components:1};case vp:case xp:return{byteLength:2,components:4};case Wi:case _p:case zi:return{byteLength:4,components:1};case Kv:case Qv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gp}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gp);function px(){let s=null,t=!1,i=null,r=null;function l(u,f){i(u,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function Bb(s){const t=new WeakMap;function i(p,m){const d=p.array,g=p.usage,v=d.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,d,g),p.onUploadCallback();let M;if(d instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=s.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=s.SHORT;else if(d instanceof Uint32Array)M=s.UNSIGNED_INT;else if(d instanceof Int32Array)M=s.INT;else if(d instanceof Int8Array)M=s.BYTE;else if(d instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:v}}function r(p,m,d){const g=m.array,v=m.updateRanges;if(s.bindBuffer(d,p),v.length===0)s.bufferSubData(d,0,g);else{v.sort((M,b)=>M.start-b.start);let _=0;for(let M=1;M<v.length;M++){const b=v[_],w=v[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++_,v[_]=w)}v.length=_+1;for(let M=0,b=v.length;M<b;M++){const w=v[M];s.bufferSubData(d,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(s.deleteBuffer(m.buffer),t.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=t.get(p);(!g||g.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,p,m),d.version=p.version}}return{get:l,remove:u,update:f}}var zb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hb=`#ifdef USE_ALPHAHASH
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
#endif`,Gb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wb=`#ifdef USE_AOMAP
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
#endif`,qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jb=`#ifdef USE_IRIDESCENCE
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
#endif`,$b=`#ifdef USE_BUMPMAP
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
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,oT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,lT=`#define PI 3.141592653589793
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
} // validated`,uT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cT=`vec3 transformedNormal = objectNormal;
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
#endif`,fT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mT="gl_FragColor = linearToOutputTexel( gl_FragColor );",gT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_T=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xT=`#ifdef USE_ENVMAP
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
#endif`,ST=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
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
#endif`,MT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ET=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AT=`#ifdef USE_GRADIENTMAP
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
}`,RT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DT=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,UT=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,LT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,IT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BT=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,zT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,HT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jT=`#if defined( USE_POINTS_UV )
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
#endif`,ZT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$T=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,eA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oA=`#ifdef USE_NORMALMAP
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
#endif`,lA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,pA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_A=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,MA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,EA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TA=`#ifdef USE_SKINNING
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
#endif`,AA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RA=`#ifdef USE_SKINNING
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
#endif`,CA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UA=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LA=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NA=`#ifdef USE_TRANSMISSION
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
#endif`,OA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zA=`uniform sampler2D t2D;
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
}`,HA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XA=`#include <common>
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
}`,WA=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qA=`#define DISTANCE
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
}`,YA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KA=`uniform float scale;
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
}`,QA=`uniform vec3 diffuse;
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
}`,JA=`#include <common>
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
}`,$A=`uniform vec3 diffuse;
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
}`,t1=`#define LAMBERT
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
}`,e1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,n1=`#define MATCAP
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
}`,i1=`#define MATCAP
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
}`,a1=`#define NORMAL
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
}`,r1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s1=`#define PHONG
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
}`,o1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,l1=`#define STANDARD
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
}`,u1=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,c1=`#define TOON
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
}`,f1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,h1=`uniform float size;
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
}`,d1=`uniform vec3 diffuse;
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
}`,p1=`#include <common>
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
}`,m1=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,g1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,_1=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:zb,alphahash_pars_fragment:Hb,alphamap_fragment:Gb,alphamap_pars_fragment:Vb,alphatest_fragment:kb,alphatest_pars_fragment:Xb,aomap_fragment:Wb,aomap_pars_fragment:qb,batching_pars_vertex:Yb,batching_vertex:jb,begin_vertex:Zb,beginnormal_vertex:Kb,bsdfs:Qb,iridescence_fragment:Jb,bumpmap_pars_fragment:$b,clipping_planes_fragment:tT,clipping_planes_pars_fragment:eT,clipping_planes_pars_vertex:nT,clipping_planes_vertex:iT,color_fragment:aT,color_pars_fragment:rT,color_pars_vertex:sT,color_vertex:oT,common:lT,cube_uv_reflection_fragment:uT,defaultnormal_vertex:cT,displacementmap_pars_vertex:fT,displacementmap_vertex:hT,emissivemap_fragment:dT,emissivemap_pars_fragment:pT,colorspace_fragment:mT,colorspace_pars_fragment:gT,envmap_fragment:_T,envmap_common_pars_fragment:vT,envmap_pars_fragment:xT,envmap_pars_vertex:ST,envmap_physical_pars_fragment:UT,envmap_vertex:yT,fog_vertex:MT,fog_pars_vertex:ET,fog_fragment:bT,fog_pars_fragment:TT,gradientmap_pars_fragment:AT,lightmap_pars_fragment:RT,lights_lambert_fragment:CT,lights_lambert_pars_fragment:wT,lights_pars_begin:DT,lights_toon_fragment:LT,lights_toon_pars_fragment:NT,lights_phong_fragment:OT,lights_phong_pars_fragment:PT,lights_physical_fragment:FT,lights_physical_pars_fragment:IT,lights_fragment_begin:BT,lights_fragment_maps:zT,lights_fragment_end:HT,logdepthbuf_fragment:GT,logdepthbuf_pars_fragment:VT,logdepthbuf_pars_vertex:kT,logdepthbuf_vertex:XT,map_fragment:WT,map_pars_fragment:qT,map_particle_fragment:YT,map_particle_pars_fragment:jT,metalnessmap_fragment:ZT,metalnessmap_pars_fragment:KT,morphinstance_vertex:QT,morphcolor_vertex:JT,morphnormal_vertex:$T,morphtarget_pars_vertex:tA,morphtarget_vertex:eA,normal_fragment_begin:nA,normal_fragment_maps:iA,normal_pars_fragment:aA,normal_pars_vertex:rA,normal_vertex:sA,normalmap_pars_fragment:oA,clearcoat_normal_fragment_begin:lA,clearcoat_normal_fragment_maps:uA,clearcoat_pars_fragment:cA,iridescence_pars_fragment:fA,opaque_fragment:hA,packing:dA,premultiplied_alpha_fragment:pA,project_vertex:mA,dithering_fragment:gA,dithering_pars_fragment:_A,roughnessmap_fragment:vA,roughnessmap_pars_fragment:xA,shadowmap_pars_fragment:SA,shadowmap_pars_vertex:yA,shadowmap_vertex:MA,shadowmask_pars_fragment:EA,skinbase_vertex:bA,skinning_pars_vertex:TA,skinning_vertex:AA,skinnormal_vertex:RA,specularmap_fragment:CA,specularmap_pars_fragment:wA,tonemapping_fragment:DA,tonemapping_pars_fragment:UA,transmission_fragment:LA,transmission_pars_fragment:NA,uv_pars_fragment:OA,uv_pars_vertex:PA,uv_vertex:FA,worldpos_vertex:IA,background_vert:BA,background_frag:zA,backgroundCube_vert:HA,backgroundCube_frag:GA,cube_vert:VA,cube_frag:kA,depth_vert:XA,depth_frag:WA,distance_vert:qA,distance_frag:YA,equirect_vert:jA,equirect_frag:ZA,linedashed_vert:KA,linedashed_frag:QA,meshbasic_vert:JA,meshbasic_frag:$A,meshlambert_vert:t1,meshlambert_frag:e1,meshmatcap_vert:n1,meshmatcap_frag:i1,meshnormal_vert:a1,meshnormal_frag:r1,meshphong_vert:s1,meshphong_frag:o1,meshphysical_vert:l1,meshphysical_frag:u1,meshtoon_vert:c1,meshtoon_frag:f1,points_vert:h1,points_frag:d1,shadow_vert:p1,shadow_frag:m1,sprite_vert:g1,sprite_frag:_1},Nt={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Bi={basic:{uniforms:Fn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Fn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Fn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Fn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Fn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Be(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Fn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Fn([Nt.points,Nt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Fn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Fn([Nt.common,Nt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Fn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Fn([Nt.sprite,Nt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:Fn([Nt.common,Nt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:Fn([Nt.lights,Nt.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Bi.physical={uniforms:Fn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const qu={r:0,b:0,g:0},Dr=new Ta,v1=new rn;function x1(s,t,i,r,l,u){const f=new Be(0);let p=l===!0?0:1,m,d,g=null,v=0,_=null;function M(R){let D=R.isScene===!0?R.background:null;if(D&&D.isTexture){const U=R.backgroundBlurriness>0;D=t.get(D,U)}return D}function b(R){let D=!1;const U=M(R);U===null?y(f,p):U&&U.isColor&&(y(U,1),D=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,u):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function w(R,D){const U=M(D);U&&(U.isCubeTexture||U.mapping===mc)?(d===void 0&&(d=new Di(new ol(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Gs(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(H,B,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Dr.copy(D.backgroundRotation),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),d.material.uniforms.envMap.value=U,d.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(v1.makeRotationFromEuler(Dr)),d.material.toneMapped=Te.getTransfer(U.colorSpace)!==Ie,(g!==U||v!==U.version||_!==s.toneMapping)&&(d.material.needsUpdate=!0,g=U,v=U.version,_=s.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Di(new _c(2,2),new qi({name:"BackgroundMaterial",uniforms:Gs(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Te.getTransfer(U.colorSpace)!==Ie,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||v!==U.version||_!==s.toneMapping)&&(m.material.needsUpdate=!0,g=U,v=U.version,_=s.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function y(R,D){R.getRGB(qu,fx(s)),i.buffers.color.setClear(qu.r,qu.g,qu.b,D,u)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,D=1){f.set(R),p=D,y(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,y(f,p)},render:b,addToRenderList:w,dispose:x}}function S1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let u=l,f=!1;function p(G,tt,it,lt,Q){let O=!1;const I=v(G,lt,it,tt);u!==I&&(u=I,d(u.object)),O=M(G,lt,it,Q),O&&b(G,lt,it,Q),Q!==null&&t.update(Q,s.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,U(G,tt,it,lt),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function m(){return s.createVertexArray()}function d(G){return s.bindVertexArray(G)}function g(G){return s.deleteVertexArray(G)}function v(G,tt,it,lt){const Q=lt.wireframe===!0;let O=r[tt.id];O===void 0&&(O={},r[tt.id]=O);const I=G.isInstancedMesh===!0?G.id:0;let ot=O[I];ot===void 0&&(ot={},O[I]=ot);let pt=ot[it.id];pt===void 0&&(pt={},ot[it.id]=pt);let Et=pt[Q];return Et===void 0&&(Et=_(m()),pt[Q]=Et),Et}function _(G){const tt=[],it=[],lt=[];for(let Q=0;Q<i;Q++)tt[Q]=0,it[Q]=0,lt[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:tt,enabledAttributes:it,attributeDivisors:lt,object:G,attributes:{},index:null}}function M(G,tt,it,lt){const Q=u.attributes,O=tt.attributes;let I=0;const ot=it.getAttributes();for(const pt in ot)if(ot[pt].location>=0){const P=Q[pt];let Y=O[pt];if(Y===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&(Y=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&(Y=G.instanceColor)),P===void 0||P.attribute!==Y||Y&&P.data!==Y.data)return!0;I++}return u.attributesNum!==I||u.index!==lt}function b(G,tt,it,lt){const Q={},O=tt.attributes;let I=0;const ot=it.getAttributes();for(const pt in ot)if(ot[pt].location>=0){let P=O[pt];P===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&(P=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&(P=G.instanceColor));const Y={};Y.attribute=P,P&&P.data&&(Y.data=P.data),Q[pt]=Y,I++}u.attributes=Q,u.attributesNum=I,u.index=lt}function w(){const G=u.newAttributes;for(let tt=0,it=G.length;tt<it;tt++)G[tt]=0}function y(G){x(G,0)}function x(G,tt){const it=u.newAttributes,lt=u.enabledAttributes,Q=u.attributeDivisors;it[G]=1,lt[G]===0&&(s.enableVertexAttribArray(G),lt[G]=1),Q[G]!==tt&&(s.vertexAttribDivisor(G,tt),Q[G]=tt)}function R(){const G=u.newAttributes,tt=u.enabledAttributes;for(let it=0,lt=tt.length;it<lt;it++)tt[it]!==G[it]&&(s.disableVertexAttribArray(it),tt[it]=0)}function D(G,tt,it,lt,Q,O,I){I===!0?s.vertexAttribIPointer(G,tt,it,Q,O):s.vertexAttribPointer(G,tt,it,lt,Q,O)}function U(G,tt,it,lt){w();const Q=lt.attributes,O=it.getAttributes(),I=tt.defaultAttributeValues;for(const ot in O){const pt=O[ot];if(pt.location>=0){let Et=Q[ot];if(Et===void 0&&(ot==="instanceMatrix"&&G.instanceMatrix&&(Et=G.instanceMatrix),ot==="instanceColor"&&G.instanceColor&&(Et=G.instanceColor)),Et!==void 0){const P=Et.normalized,Y=Et.itemSize,ft=t.get(Et);if(ft===void 0)continue;const xt=ft.buffer,Ut=ft.type,Z=ft.bytesPerElement,mt=Ut===s.INT||Ut===s.UNSIGNED_INT||Et.gpuType===_p;if(Et.isInterleavedBufferAttribute){const Mt=Et.data,Bt=Mt.stride,Kt=Et.offset;if(Mt.isInstancedInterleavedBuffer){for(let $t=0;$t<pt.locationSize;$t++)x(pt.location+$t,Mt.meshPerAttribute);G.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let $t=0;$t<pt.locationSize;$t++)y(pt.location+$t);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let $t=0;$t<pt.locationSize;$t++)D(pt.location+$t,Y/pt.locationSize,Ut,P,Bt*Z,(Kt+Y/pt.locationSize*$t)*Z,mt)}else{if(Et.isInstancedBufferAttribute){for(let Mt=0;Mt<pt.locationSize;Mt++)x(pt.location+Mt,Et.meshPerAttribute);G.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Mt=0;Mt<pt.locationSize;Mt++)y(pt.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let Mt=0;Mt<pt.locationSize;Mt++)D(pt.location+Mt,Y/pt.locationSize,Ut,P,Y*Z,Y/pt.locationSize*Mt*Z,mt)}}else if(I!==void 0){const P=I[ot];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(pt.location,P);break;case 3:s.vertexAttrib3fv(pt.location,P);break;case 4:s.vertexAttrib4fv(pt.location,P);break;default:s.vertexAttrib1fv(pt.location,P)}}}}R()}function H(){L();for(const G in r){const tt=r[G];for(const it in tt){const lt=tt[it];for(const Q in lt){const O=lt[Q];for(const I in O)g(O[I].object),delete O[I];delete lt[Q]}}delete r[G]}}function B(G){if(r[G.id]===void 0)return;const tt=r[G.id];for(const it in tt){const lt=tt[it];for(const Q in lt){const O=lt[Q];for(const I in O)g(O[I].object),delete O[I];delete lt[Q]}}delete r[G.id]}function F(G){for(const tt in r){const it=r[tt];for(const lt in it){const Q=it[lt];if(Q[G.id]===void 0)continue;const O=Q[G.id];for(const I in O)g(O[I].object),delete O[I];delete Q[G.id]}}}function T(G){for(const tt in r){const it=r[tt],lt=G.isInstancedMesh===!0?G.id:0,Q=it[lt];if(Q!==void 0){for(const O in Q){const I=Q[O];for(const ot in I)g(I[ot].object),delete I[ot];delete Q[O]}delete it[lt],Object.keys(it).length===0&&delete r[tt]}}}function L(){ct(),f=!0,u!==l&&(u=l,d(u.object))}function ct(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:L,resetDefaultState:ct,dispose:H,releaseStatesOfGeometry:B,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:y,disableUnusedAttributes:R}}function y1(s,t,i){let r;function l(d){r=d}function u(d,g){s.drawArrays(r,d,g),i.update(g,r,1)}function f(d,g,v){v!==0&&(s.drawArraysInstanced(r,d,g,v),i.update(g,r,v))}function p(d,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,g,0,v);let M=0;for(let b=0;b<v;b++)M+=g[b];i.update(M,r,1)}function m(d,g,v,_){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<d.length;b++)f(d[b],g[b],_[b]);else{M.multiDrawArraysInstancedWEBGL(r,d,0,g,0,_,0,v);let b=0;for(let w=0;w<v;w++)b+=g[w]*_[w];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function M1(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==wi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(F){const T=F===Ea&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==gi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==zi&&!T)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=m(d);g!==d&&(ae("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=s.getParameter(s.MAX_SAMPLES),B=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:R,maxVaryings:D,maxFragmentUniforms:U,maxSamples:H,samples:B}}function E1(s){const t=this;let i=null,r=0,l=!1,u=!1;const f=new Lr,p=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const M=v.length!==0||_||r!==0||l;return l=_,r=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,M){const b=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,x=s.get(v);if(!l||b===null||b.length===0||u&&!y)u?g(null):d();else{const R=u?0:r,D=R*4;let U=x.clippingState||null;m.value=U,U=g(b,_,D,M);for(let H=0;H!==D;++H)U[H]=i[H];x.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=R}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,_,M,b){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=m.value,b!==!0||y===null){const x=M+w*4,R=_.matrixWorldInverse;p.getNormalMatrix(R),(y===null||y.length<x)&&(y=new Float32Array(x));for(let D=0,U=M;D!==w;++D,U+=4)f.copy(v[D]).applyMatrix4(R,p),f.normal.toArray(y,U),y[U+3]=f.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}const sr=4,K_=[.125,.215,.35,.446,.526,.582],Or=20,b1=256,qo=new dx,Q_=new Be;let ld=null,ud=0,cd=0,fd=!1;const T1=new et;class J_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:f=256,position:p=T1}=u;ld=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ld,ud,cd),this._renderer.xr.enabled=fd,t.scissorTest=!1,Os(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ir||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ld=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Ea,format:wi,colorSpace:Hs,depthBuffer:!1},l=$_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=A1(u)),this._blurMaterial=C1(u,t,i),this._ggxMaterial=R1(u,t,i)}return l}_compileMaterial(t){const i=new Di(new Yn,t);this._renderer.compile(i,qo)}_sceneToCubeUV(t,i,r,l,u){const m=new mi(90,1,i,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,M=v.toneMapping;v.getClearColor(Q_),v.toneMapping=Gi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new ol,new uc({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let x=!1;const R=t.background;R?R.isColor&&(y.color.copy(R),t.background=null,x=!0):(y.color.copy(Q_),x=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(m.up.set(0,d[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[D],u.y,u.z)):U===1?(m.up.set(0,0,d[D]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[D],u.z)):(m.up.set(0,d[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[D]));const H=this._cubeSize;Os(l,U*H,D>2?H:0,H,H),v.setRenderTarget(l),x&&v.render(w,m),v.render(t,m)}v.toneMapping=M,v.autoClear=_,t.background=R}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ir||t.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tv());const u=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=u;const p=u.uniforms;p.envMap.value=t;const m=this._cubeSize;Os(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,qo)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[r];p.material=f;const m=f.uniforms,d=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),v=Math.sqrt(d*d-g*g),_=0+d*1.25,M=v*_,{_lodMax:b}=this,w=this._sizeLods[r],y=3*w*(r>b-sr?r-b+sr:0),x=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,Os(u,y,x,3*w,2*w),l.setRenderTarget(u),l.render(p,qo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-r,Os(t,y,x,3*w,2*w),l.setRenderTarget(t),l.render(p,qo)}_blur(t,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",u),this._halfBlur(f,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,f,p){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[l];v.material=d;const _=d.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Or-1),w=u/b,y=isFinite(u)?1+Math.floor(g*w):Or;y>Or&&ae(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Or}`);const x=[];let R=0;for(let F=0;F<Or;++F){const T=F/w,L=Math.exp(-T*T/2);x.push(L),F===0?R+=L:F<y&&(R+=2*L)}for(let F=0;F<x.length;F++)x[F]=x[F]/R;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=f==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:D}=this;_.dTheta.value=b,_.mipInt.value=D-r;const U=this._sizeLods[l],H=3*U*(l>D-sr?l-D+sr:0),B=4*(this._cubeSize-U);Os(i,H,B,3*U,2*U),m.setRenderTarget(i),m.render(v,qo)}}function A1(s){const t=[],i=[],r=[];let l=s;const u=s-sr+1+K_.length;for(let f=0;f<u;f++){const p=Math.pow(2,l);t.push(p);let m=1/p;f>s-sr?m=K_[f-s+sr-1]:f===0&&(m=0),i.push(m);const d=1/(p-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,b=6,w=3,y=2,x=1,R=new Float32Array(w*b*M),D=new Float32Array(y*b*M),U=new Float32Array(x*b*M);for(let B=0;B<M;B++){const F=B%3*2/3-1,T=B>2?0:-1,L=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];R.set(L,w*b*B),D.set(_,y*b*B);const ct=[B,B,B,B,B,B];U.set(ct,x*b*B)}const H=new Yn;H.setAttribute("position",new ki(R,w)),H.setAttribute("uv",new ki(D,y)),H.setAttribute("faceIndex",new ki(U,x)),r.push(new Di(H,null)),l>sr&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function $_(s,t,i){const r=new Vi(s,t,i);return r.texture.mapping=mc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Os(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function R1(s,t,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function C1(s,t,i){const r=new Float32Array(Or),l=new et(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function tv(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function ev(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function vc(){return`

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
	`}class mx extends Vi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new ux(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ol(5,5,5),u=new qi({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:Sa});u.uniforms.tEquirect.value=i;const f=new Di(l,u),p=i.minFilter;return i.minFilter===Pr&&(i.minFilter=Dn),new Pb(1,10,this).update(t,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(u)}}function w1(s){let t=new WeakMap,i=new WeakMap,r=null;function l(_,M=!1){return _==null?null:M?f(_):u(_)}function u(_){if(_&&_.isTexture){const M=_.mapping;if(M===Nh||M===Oh)if(t.has(_)){const b=t.get(_).texture;return p(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const w=new mx(b.height);return w.fromEquirectangularTexture(s,_),t.set(_,w),_.addEventListener("dispose",d),p(w.texture,_.mapping)}else return null}}return _}function f(_){if(_&&_.isTexture){const M=_.mapping,b=M===Nh||M===Oh,w=M===Ir||M===Bs;if(b||w){let y=i.get(_);const x=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==x)return r===null&&(r=new J_(s)),y=b?r.fromEquirectangular(_,y):r.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const R=_.image;return b&&R&&R.height>0||w&&R&&m(R)?(r===null&&(r=new J_(s)),y=b?r.fromEquirectangular(_):r.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",g),y.texture):null}}}return _}function p(_,M){return M===Nh?_.mapping=Ir:M===Oh&&(_.mapping=Bs),_}function m(_){let M=0;const b=6;for(let w=0;w<b;w++)_[w]!==void 0&&M++;return M===b}function d(_){const M=_.target;M.removeEventListener("dispose",d);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function g(_){const M=_.target;M.removeEventListener("dispose",g);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function v(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:v}}function D1(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&lc("WebGLRenderer: "+r+" extension not supported."),l}}}function U1(s,t,i,r){const l={},u=new WeakMap;function f(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const b in _.attributes)t.remove(_.attributes[b]);_.removeEventListener("dispose",f),delete l[_.id];const M=u.get(_);M&&(t.remove(M),u.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(v,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const M in _)t.update(_[M],s.ARRAY_BUFFER)}function d(v){const _=[],M=v.index,b=v.attributes.position;let w=0;if(b===void 0)return;if(M!==null){const R=M.array;w=M.version;for(let D=0,U=R.length;D<U;D+=3){const H=R[D+0],B=R[D+1],F=R[D+2];_.push(H,B,B,F,F,H)}}else{const R=b.array;w=b.version;for(let D=0,U=R.length/3-1;D<U;D+=3){const H=D+0,B=D+1,F=D+2;_.push(H,B,B,F,F,H)}}const y=new(b.count>=65535?sx:rx)(_,1);y.version=w;const x=u.get(v);x&&t.remove(x),u.set(v,y)}function g(v){const _=u.get(v);if(_){const M=v.index;M!==null&&_.version<M.version&&d(v)}else d(v);return u.get(v)}return{get:p,update:m,getWireframeAttribute:g}}function L1(s,t,i){let r;function l(_){r=_}let u,f;function p(_){u=_.type,f=_.bytesPerElement}function m(_,M){s.drawElements(r,M,u,_*f),i.update(M,r,1)}function d(_,M,b){b!==0&&(s.drawElementsInstanced(r,M,u,_*f,b),i.update(M,r,b))}function g(_,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,_,0,b);let y=0;for(let x=0;x<b;x++)y+=M[x];i.update(y,r,1)}function v(_,M,b,w){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)d(_[x]/f,M[x],w[x]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,_,0,w,0,b);let x=0;for(let R=0;R<b;R++)x+=M[R]*w[R];i.update(x,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function N1(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,p){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=p*(u/3);break;case s.LINES:i.lines+=p*(u/2);break;case s.LINE_STRIP:i.lines+=p*(u-1);break;case s.LINE_LOOP:i.lines+=p*u;break;case s.POINTS:i.points+=p*u;break;default:we("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function O1(s,t,i){const r=new WeakMap,l=new an;function u(f,p,m){const d=f.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(p);if(_===void 0||_.count!==v){let ct=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",ct)};var M=ct;_!==void 0&&_.texture.dispose();const b=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],R=p.morphAttributes.normal||[],D=p.morphAttributes.color||[];let U=0;b===!0&&(U=1),w===!0&&(U=2),y===!0&&(U=3);let H=p.attributes.position.count*U,B=1;H>t.maxTextureSize&&(B=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const F=new Float32Array(H*B*4*v),T=new nx(F,H,B,v);T.type=zi,T.needsUpdate=!0;const L=U*4;for(let G=0;G<v;G++){const tt=x[G],it=R[G],lt=D[G],Q=H*B*4*G;for(let O=0;O<tt.count;O++){const I=O*L;b===!0&&(l.fromBufferAttribute(tt,O),F[Q+I+0]=l.x,F[Q+I+1]=l.y,F[Q+I+2]=l.z,F[Q+I+3]=0),w===!0&&(l.fromBufferAttribute(it,O),F[Q+I+4]=l.x,F[Q+I+5]=l.y,F[Q+I+6]=l.z,F[Q+I+7]=0),y===!0&&(l.fromBufferAttribute(lt,O),F[Q+I+8]=l.x,F[Q+I+9]=l.y,F[Q+I+10]=l.z,F[Q+I+11]=lt.itemSize===4?l.w:1)}}_={count:v,texture:T,size:new Ve(H,B)},r.set(p,_),p.addEventListener("dispose",ct)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let y=0;y<d.length;y++)b+=d[y];const w=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",w),m.getUniforms().setValue(s,"morphTargetInfluences",d)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:u}}function P1(s,t,i,r,l){let u=new WeakMap;function f(d){const g=l.render.frame,v=d.geometry,_=t.get(d,v);if(u.get(_)!==g&&(t.update(_),u.set(_,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),u.get(d)!==g&&(i.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,s.ARRAY_BUFFER),u.set(d,g))),d.isSkinnedMesh){const M=d.skeleton;u.get(M)!==g&&(M.update(),u.set(M,g))}return _}function p(){u=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:p}}const F1={[Hv]:"LINEAR_TONE_MAPPING",[Gv]:"REINHARD_TONE_MAPPING",[Vv]:"CINEON_TONE_MAPPING",[kv]:"ACES_FILMIC_TONE_MAPPING",[Wv]:"AGX_TONE_MAPPING",[qv]:"NEUTRAL_TONE_MAPPING",[Xv]:"CUSTOM_TONE_MAPPING"};function I1(s,t,i,r,l){const u=new Vi(t,i,{type:s,depthBuffer:r,stencilBuffer:l}),f=new Vi(t,i,{type:Ea,depthBuffer:!1,stencilBuffer:!1}),p=new Yn;p.setAttribute("position",new An([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new An([0,2,0,0,2,0],2));const m=new Lb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Di(p,m),g=new dx(-1,1,1,-1,0,1);let v=null,_=null,M=!1,b,w=null,y=[],x=!1;this.setSize=function(R,D){u.setSize(R,D),f.setSize(R,D);for(let U=0;U<y.length;U++){const H=y[U];H.setSize&&H.setSize(R,D)}},this.setEffects=function(R){y=R,x=y.length>0&&y[0].isRenderPass===!0;const D=u.width,U=u.height;for(let H=0;H<y.length;H++){const B=y[H];B.setSize&&B.setSize(D,U)}},this.begin=function(R,D){if(M||R.toneMapping===Gi&&y.length===0)return!1;if(w=D,D!==null){const U=D.width,H=D.height;(u.width!==U||u.height!==H)&&this.setSize(U,H)}return x===!1&&R.setRenderTarget(u),b=R.toneMapping,R.toneMapping=Gi,!0},this.hasRenderPass=function(){return x},this.end=function(R,D){R.toneMapping=b,M=!0;let U=u,H=f;for(let B=0;B<y.length;B++){const F=y[B];if(F.enabled!==!1&&(F.render(R,H,U,D),F.needsSwap!==!1)){const T=U;U=H,H=T}}if(v!==R.outputColorSpace||_!==R.toneMapping){v=R.outputColorSpace,_=R.toneMapping,m.defines={},Te.getTransfer(v)===Ie&&(m.defines.SRGB_TRANSFER="");const B=F1[_];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,R.setRenderTarget(w),R.render(d,g),w=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.dispose(),f.dispose(),p.dispose(),m.dispose()}}const gx=new In,sp=new tl(1,1),_x=new nx,vx=new lb,xx=new ux,nv=[],iv=[],av=new Float32Array(16),rv=new Float32Array(9),sv=new Float32Array(4);function qs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=nv[l];if(u===void 0&&(u=new Float32Array(l),nv[l]=u),t!==0){r.toArray(u,0);for(let f=1,p=0;f!==t;++f)p+=i,s[f].toArray(u,p)}return u}function _n(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function vn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function xc(s,t){let i=iv[t];i===void 0&&(i=new Int32Array(t),iv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function B1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function z1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;s.uniform2fv(this.addr,t),vn(i,t)}}function H1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;s.uniform3fv(this.addr,t),vn(i,t)}}function G1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;s.uniform4fv(this.addr,t),vn(i,t)}}function V1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;sv.set(r),s.uniformMatrix2fv(this.addr,!1,sv),vn(i,r)}}function k1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;rv.set(r),s.uniformMatrix3fv(this.addr,!1,rv),vn(i,r)}}function X1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;av.set(r),s.uniformMatrix4fv(this.addr,!1,av),vn(i,r)}}function W1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function q1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;s.uniform2iv(this.addr,t),vn(i,t)}}function Y1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;s.uniform3iv(this.addr,t),vn(i,t)}}function j1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;s.uniform4iv(this.addr,t),vn(i,t)}}function Z1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function K1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;s.uniform2uiv(this.addr,t),vn(i,t)}}function Q1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;s.uniform3uiv(this.addr,t),vn(i,t)}}function J1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;s.uniform4uiv(this.addr,t),vn(i,t)}}function $1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(sp.compareFunction=i.isReversedDepthBuffer()?bp:Ep,u=sp):u=gx,i.setTexture2D(t||u,l)}function tR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||vx,l)}function eR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||xx,l)}function nR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||_x,l)}function iR(s){switch(s){case 5126:return B1;case 35664:return z1;case 35665:return H1;case 35666:return G1;case 35674:return V1;case 35675:return k1;case 35676:return X1;case 5124:case 35670:return W1;case 35667:case 35671:return q1;case 35668:case 35672:return Y1;case 35669:case 35673:return j1;case 5125:return Z1;case 36294:return K1;case 36295:return Q1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return tR;case 35680:case 36300:case 36308:case 36293:return eR;case 36289:case 36303:case 36311:case 36292:return nR}}function aR(s,t){s.uniform1fv(this.addr,t)}function rR(s,t){const i=qs(t,this.size,2);s.uniform2fv(this.addr,i)}function sR(s,t){const i=qs(t,this.size,3);s.uniform3fv(this.addr,i)}function oR(s,t){const i=qs(t,this.size,4);s.uniform4fv(this.addr,i)}function lR(s,t){const i=qs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function uR(s,t){const i=qs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function cR(s,t){const i=qs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function fR(s,t){s.uniform1iv(this.addr,t)}function hR(s,t){s.uniform2iv(this.addr,t)}function dR(s,t){s.uniform3iv(this.addr,t)}function pR(s,t){s.uniform4iv(this.addr,t)}function mR(s,t){s.uniform1uiv(this.addr,t)}function gR(s,t){s.uniform2uiv(this.addr,t)}function _R(s,t){s.uniform3uiv(this.addr,t)}function vR(s,t){s.uniform4uiv(this.addr,t)}function xR(s,t,i){const r=this.cache,l=t.length,u=xc(i,l);_n(r,u)||(s.uniform1iv(this.addr,u),vn(r,u));let f;this.type===s.SAMPLER_2D_SHADOW?f=sp:f=gx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||f,u[p])}function SR(s,t,i){const r=this.cache,l=t.length,u=xc(i,l);_n(r,u)||(s.uniform1iv(this.addr,u),vn(r,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||vx,u[f])}function yR(s,t,i){const r=this.cache,l=t.length,u=xc(i,l);_n(r,u)||(s.uniform1iv(this.addr,u),vn(r,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||xx,u[f])}function MR(s,t,i){const r=this.cache,l=t.length,u=xc(i,l);_n(r,u)||(s.uniform1iv(this.addr,u),vn(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||_x,u[f])}function ER(s){switch(s){case 5126:return aR;case 35664:return rR;case 35665:return sR;case 35666:return oR;case 35674:return lR;case 35675:return uR;case 35676:return cR;case 5124:case 35670:return fR;case 35667:case 35671:return hR;case 35668:case 35672:return dR;case 35669:case 35673:return pR;case 5125:return mR;case 36294:return gR;case 36295:return _R;case 36296:return vR;case 35678:case 36198:case 36298:case 36306:case 35682:return xR;case 35679:case 36299:case 36307:return SR;case 35680:case 36300:case 36308:case 36293:return yR;case 36289:case 36303:case 36311:case 36292:return MR}}class bR{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=iR(i.type)}}class TR{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ER(i.type)}}class AR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const p=l[u];p.setValue(t,i[p.id],r)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function ov(s,t){s.seq.push(t),s.map[t.id]=t}function RR(s,t,i){const r=s.name,l=r.length;for(hd.lastIndex=0;;){const u=hd.exec(r),f=hd.lastIndex;let p=u[1];const m=u[2]==="]",d=u[3];if(m&&(p=p|0),d===void 0||d==="["&&f+2===l){ov(i,d===void 0?new bR(p,s,t):new TR(p,s,t));break}else{let v=i.map[p];v===void 0&&(v=new AR(p),ov(i,v)),i=v}}}class nc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const p=t.getActiveUniform(i,f),m=t.getUniformLocation(i,p.name);RR(p,m,this)}const l=[],u=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):u.push(f);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,f=i.length;u!==f;++u){const p=i[u],m=r[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function lv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const CR=37297;let wR=0;function DR(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const p=f+1;r.push(`${p===t?">":" "} ${p}: ${i[f]}`)}return r.join(`
`)}const uv=new pe;function UR(s){Te._getMatrix(uv,Te.workingColorSpace,s);const t=`mat3( ${uv.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(s)){case rc:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function cv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),u=(s.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+DR(s.getShaderSource(t),p)}else return u}function LR(s,t){const i=UR(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const NR={[Hv]:"Linear",[Gv]:"Reinhard",[Vv]:"Cineon",[kv]:"ACESFilmic",[Wv]:"AgX",[qv]:"Neutral",[Xv]:"Custom"};function OR(s,t){const i=NR[t];return i===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Yu=new et;function PR(){Te.getLuminanceCoefficients(Yu);const s=Yu.x.toFixed(4),t=Yu.y.toFixed(4),i=Yu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function IR(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function BR(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),f=u.name;let p=1;u.type===s.FLOAT_MAT2&&(p=2),u.type===s.FLOAT_MAT3&&(p=3),u.type===s.FLOAT_MAT4&&(p=4),i[f]={type:u.type,location:s.getAttribLocation(t,f),locationSize:p}}return i}function Ko(s){return s!==""}function fv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zR=/^[ \t]*#include +<([\w\d./]+)>/gm;function op(s){return s.replace(zR,GR)}const HR=new Map;function GR(s,t){let i=me[t];if(i===void 0){const r=HR.get(t);if(r!==void 0)i=me[r],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return op(i)}const VR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dv(s){return s.replace(VR,kR)}function kR(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function pv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const XR={[Ku]:"SHADOWMAP_TYPE_PCF",[Zo]:"SHADOWMAP_TYPE_VSM"};function WR(s){return XR[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qR={[Ir]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[mc]:"ENVMAP_TYPE_CUBE_UV"};function YR(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":qR[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const jR={[Bs]:"ENVMAP_MODE_REFRACTION"};function ZR(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":jR[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const KR={[zv]:"ENVMAP_BLENDING_MULTIPLY",[HE]:"ENVMAP_BLENDING_MIX",[GE]:"ENVMAP_BLENDING_ADD"};function QR(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":KR[s.combine]||"ENVMAP_BLENDING_NONE"}function JR(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function $R(s,t,i,r){const l=s.getContext(),u=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=WR(i),d=YR(i),g=ZR(i),v=QR(i),_=JR(i),M=FR(i),b=IR(u),w=l.createProgram();let y,x,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ko).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ko).join(`
`),x.length>0&&(x+=`
`)):(y=[pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),x=[pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?me.tonemapping_pars_fragment:"",i.toneMapping!==Gi?OR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,LR("linearToOutputTexel",i.outputColorSpace),PR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ko).join(`
`)),f=op(f),f=fv(f,i),f=hv(f,i),p=op(p),p=fv(p,i),p=hv(p,i),f=dv(f),p=dv(p),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===A_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===A_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=R+y+f,U=R+x+p,H=lv(l,l.VERTEX_SHADER,D),B=lv(l,l.FRAGMENT_SHADER,U);l.attachShader(w,H),l.attachShader(w,B),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function F(G){if(s.debug.checkShaderErrors){const tt=l.getProgramInfoLog(w)||"",it=l.getShaderInfoLog(H)||"",lt=l.getShaderInfoLog(B)||"",Q=tt.trim(),O=it.trim(),I=lt.trim();let ot=!0,pt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ot=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,w,H,B);else{const Et=cv(l,H,"vertex"),P=cv(l,B,"fragment");we("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Q+`
`+Et+`
`+P)}else Q!==""?ae("WebGLProgram: Program Info Log:",Q):(O===""||I==="")&&(pt=!1);pt&&(G.diagnostics={runnable:ot,programLog:Q,vertexShader:{log:O,prefix:y},fragmentShader:{log:I,prefix:x}})}l.deleteShader(H),l.deleteShader(B),T=new nc(l,w),L=BR(l,w)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let L;this.getAttributes=function(){return L===void 0&&F(this),L};let ct=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ct===!1&&(ct=l.getProgramParameter(w,CR)),ct},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=wR++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=B,this}let tC=0;class eC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new nC(t),i.set(t,r)),r}}class nC{constructor(t){this.id=tC++,this.code=t,this.usedTimes=0}}function iC(s,t,i,r,l,u){const f=new ix,p=new eC,m=new Set,d=[],g=new Map,v=r.logarithmicDepthBuffer;let _=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,L,ct,G,tt){const it=G.fog,lt=tt.geometry,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,I=t.get(T.envMap||Q,O),ot=I&&I.mapping===mc?I.image.height:null,pt=M[T.type];T.precision!==null&&(_=r.getMaxPrecision(T.precision),_!==T.precision&&ae("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const Et=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,P=Et!==void 0?Et.length:0;let Y=0;lt.morphAttributes.position!==void 0&&(Y=1),lt.morphAttributes.normal!==void 0&&(Y=2),lt.morphAttributes.color!==void 0&&(Y=3);let ft,xt,Ut,Z;if(pt){const be=Bi[pt];ft=be.vertexShader,xt=be.fragmentShader}else ft=T.vertexShader,xt=T.fragmentShader,p.update(T),Ut=p.getVertexShaderID(T),Z=p.getFragmentShaderID(T);const mt=s.getRenderTarget(),Mt=s.state.buffers.depth.getReversed(),Bt=tt.isInstancedMesh===!0,Kt=tt.isBatchedMesh===!0,$t=!!T.map,Xe=!!T.matcap,ue=!!I,ge=!!T.aoMap,De=!!T.lightMap,le=!!T.bumpMap,Qe=!!T.normalMap,V=!!T.displacementMap,Ye=!!T.emissiveMap,Ee=!!T.metalnessMap,Le=!!T.roughnessMap,qt=T.anisotropy>0,N=T.clearcoat>0,E=T.dispersion>0,q=T.iridescence>0,gt=T.sheen>0,yt=T.transmission>0,ht=qt&&!!T.anisotropyMap,Xt=N&&!!T.clearcoatMap,wt=N&&!!T.clearcoatNormalMap,Qt=N&&!!T.clearcoatRoughnessMap,ee=q&&!!T.iridescenceMap,At=q&&!!T.iridescenceThicknessMap,bt=gt&&!!T.sheenColorMap,Pt=gt&&!!T.sheenRoughnessMap,Ot=!!T.specularMap,Ft=!!T.specularColorMap,fe=!!T.specularIntensityMap,W=yt&&!!T.transmissionMap,Ct=yt&&!!T.thicknessMap,Rt=!!T.gradientMap,It=!!T.alphaMap,Tt=T.alphaTest>0,ut=!!T.alphaHash,Ht=!!T.extensions;let ie=Gi;T.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(ie=s.toneMapping);const Oe={shaderID:pt,shaderType:T.type,shaderName:T.name,vertexShader:ft,fragmentShader:xt,defines:T.defines,customVertexShaderID:Ut,customFragmentShaderID:Z,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Kt,batchingColor:Kt&&tt._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&tt.instanceColor!==null,instancingMorph:Bt&&tt.morphTexture!==null,outputColorSpace:mt===null?s.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Hs,alphaToCoverage:!!T.alphaToCoverage,map:$t,matcap:Xe,envMap:ue,envMapMode:ue&&I.mapping,envMapCubeUVHeight:ot,aoMap:ge,lightMap:De,bumpMap:le,normalMap:Qe,displacementMap:V,emissiveMap:Ye,normalMapObjectSpace:Qe&&T.normalMapType===WE,normalMapTangentSpace:Qe&&T.normalMapType===XE,metalnessMap:Ee,roughnessMap:Le,anisotropy:qt,anisotropyMap:ht,clearcoat:N,clearcoatMap:Xt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Qt,dispersion:E,iridescence:q,iridescenceMap:ee,iridescenceThicknessMap:At,sheen:gt,sheenColorMap:bt,sheenRoughnessMap:Pt,specularMap:Ot,specularColorMap:Ft,specularIntensityMap:fe,transmission:yt,transmissionMap:W,thicknessMap:Ct,gradientMap:Rt,opaque:T.transparent===!1&&T.blending===Ps&&T.alphaToCoverage===!1,alphaMap:It,alphaTest:Tt,alphaHash:ut,combine:T.combine,mapUv:$t&&b(T.map.channel),aoMapUv:ge&&b(T.aoMap.channel),lightMapUv:De&&b(T.lightMap.channel),bumpMapUv:le&&b(T.bumpMap.channel),normalMapUv:Qe&&b(T.normalMap.channel),displacementMapUv:V&&b(T.displacementMap.channel),emissiveMapUv:Ye&&b(T.emissiveMap.channel),metalnessMapUv:Ee&&b(T.metalnessMap.channel),roughnessMapUv:Le&&b(T.roughnessMap.channel),anisotropyMapUv:ht&&b(T.anisotropyMap.channel),clearcoatMapUv:Xt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:wt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:At&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&b(T.sheenRoughnessMap.channel),specularMapUv:Ot&&b(T.specularMap.channel),specularColorMapUv:Ft&&b(T.specularColorMap.channel),specularIntensityMapUv:fe&&b(T.specularIntensityMap.channel),transmissionMapUv:W&&b(T.transmissionMap.channel),thicknessMapUv:Ct&&b(T.thicknessMap.channel),alphaMapUv:It&&b(T.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Qe||qt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!lt.attributes.uv&&($t||It),fog:!!it,useFog:T.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||lt.attributes.normal===void 0&&Qe===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Mt,skinning:tt.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:Y,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&ct.length>0,shadowMapType:s.shadowMap.type,toneMapping:ie,decodeVideoTexture:$t&&T.map.isVideoTexture===!0&&Te.getTransfer(T.map.colorSpace)===Ie,decodeVideoTextureEmissive:Ye&&T.emissiveMap.isVideoTexture===!0&&Te.getTransfer(T.emissiveMap.colorSpace)===Ie,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===_a,flipSided:T.side===Wn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ht&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&T.extensions.multiDraw===!0||Kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Oe.vertexUv1s=m.has(1),Oe.vertexUv2s=m.has(2),Oe.vertexUv3s=m.has(3),m.clear(),Oe}function y(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ct in T.defines)L.push(ct),L.push(T.defines[ct]);return T.isRawShaderMaterial===!1&&(x(L,T),R(L,T),L.push(s.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function x(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function R(T,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),T.push(f.mask)}function D(T){const L=M[T.type];let ct;if(L){const G=Bi[L];ct=wb.clone(G.uniforms)}else ct=T.uniforms;return ct}function U(T,L){let ct=g.get(L);return ct!==void 0?++ct.usedTimes:(ct=new $R(s,L,T,l),d.push(ct),g.set(L,ct)),ct}function H(T){if(--T.usedTimes===0){const L=d.indexOf(T);d[L]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function B(T){p.remove(T)}function F(){p.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:D,acquireProgram:U,releaseProgram:H,releaseShaderCache:B,programs:d,dispose:F}}function aC(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let p=s.get(f);return p===void 0&&(p={},s.set(f,p)),p}function r(f){s.delete(f)}function l(f,p,m){s.get(f)[p]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function rC(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function mv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function gv(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function f(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function p(_,M,b,w,y,x){let R=s[t];return R===void 0?(R={id:_.id,object:_,geometry:M,material:b,materialVariant:f(_),groupOrder:w,renderOrder:_.renderOrder,z:y,group:x},s[t]=R):(R.id=_.id,R.object=_,R.geometry=M,R.material=b,R.materialVariant=f(_),R.groupOrder=w,R.renderOrder=_.renderOrder,R.z=y,R.group=x),t++,R}function m(_,M,b,w,y,x){const R=p(_,M,b,w,y,x);b.transmission>0?r.push(R):b.transparent===!0?l.push(R):i.push(R)}function d(_,M,b,w,y,x){const R=p(_,M,b,w,y,x);b.transmission>0?r.unshift(R):b.transparent===!0?l.unshift(R):i.unshift(R)}function g(_,M){i.length>1&&i.sort(_||rC),r.length>1&&r.sort(M||mv),l.length>1&&l.sort(M||mv)}function v(){for(let _=t,M=s.length;_<M;_++){const b=s[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:m,unshift:d,finish:v,sort:g}}function sC(){let s=new WeakMap;function t(r,l){const u=s.get(r);let f;return u===void 0?(f=new gv,s.set(r,[f])):l>=u.length?(f=new gv,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function oC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new et,color:new Be};break;case"SpotLight":i={position:new et,direction:new et,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":i={color:new Be,position:new et,halfWidth:new et,halfHeight:new et};break}return s[t.id]=i,i}}}function lC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let uC=0;function cC(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function fC(s){const t=new oC,i=lC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new et);const l=new et,u=new rn,f=new rn;function p(d){let g=0,v=0,_=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let M=0,b=0,w=0,y=0,x=0,R=0,D=0,U=0,H=0,B=0,F=0;d.sort(cC);for(let L=0,ct=d.length;L<ct;L++){const G=d[L],tt=G.color,it=G.intensity,lt=G.distance;let Q=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===zs?Q=G.shadow.map.texture:Q=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=tt.r*it,v+=tt.g*it,_+=tt.b*it;else if(G.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(G.sh.coefficients[O],it);F++}else if(G.isDirectionalLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const I=G.shadow,ot=i.get(G);ot.shadowIntensity=I.intensity,ot.shadowBias=I.bias,ot.shadowNormalBias=I.normalBias,ot.shadowRadius=I.radius,ot.shadowMapSize=I.mapSize,r.directionalShadow[M]=ot,r.directionalShadowMap[M]=Q,r.directionalShadowMatrix[M]=G.shadow.matrix,R++}r.directional[M]=O,M++}else if(G.isSpotLight){const O=t.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(tt).multiplyScalar(it),O.distance=lt,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,r.spot[w]=O;const I=G.shadow;if(G.map&&(r.spotLightMap[H]=G.map,H++,I.updateMatrices(G),G.castShadow&&B++),r.spotLightMatrix[w]=I.matrix,G.castShadow){const ot=i.get(G);ot.shadowIntensity=I.intensity,ot.shadowBias=I.bias,ot.shadowNormalBias=I.normalBias,ot.shadowRadius=I.radius,ot.shadowMapSize=I.mapSize,r.spotShadow[w]=ot,r.spotShadowMap[w]=Q,U++}w++}else if(G.isRectAreaLight){const O=t.get(G);O.color.copy(tt).multiplyScalar(it),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=O,y++}else if(G.isPointLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const I=G.shadow,ot=i.get(G);ot.shadowIntensity=I.intensity,ot.shadowBias=I.bias,ot.shadowNormalBias=I.normalBias,ot.shadowRadius=I.radius,ot.shadowMapSize=I.mapSize,ot.shadowCameraNear=I.camera.near,ot.shadowCameraFar=I.camera.far,r.pointShadow[b]=ot,r.pointShadowMap[b]=Q,r.pointShadowMatrix[b]=G.shadow.matrix,D++}r.point[b]=O,b++}else if(G.isHemisphereLight){const O=t.get(G);O.skyColor.copy(G.color).multiplyScalar(it),O.groundColor.copy(G.groundColor).multiplyScalar(it),r.hemi[x]=O,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==y||T.hemiLength!==x||T.numDirectionalShadows!==R||T.numPointShadows!==D||T.numSpotShadows!==U||T.numSpotMaps!==H||T.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=y,r.point.length=b,r.hemi.length=x,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=U+H-B,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=F,T.directionalLength=M,T.pointLength=b,T.spotLength=w,T.rectAreaLength=y,T.hemiLength=x,T.numDirectionalShadows=R,T.numPointShadows=D,T.numSpotShadows=U,T.numSpotMaps=H,T.numLightProbes=F,r.version=uC++)}function m(d,g){let v=0,_=0,M=0,b=0,w=0;const y=g.matrixWorldInverse;for(let x=0,R=d.length;x<R;x++){const D=d[x];if(D.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),v++}else if(D.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const U=r.rectArea[b];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),f.identity(),u.copy(D.matrixWorld),u.premultiply(y),f.extractRotation(u),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),b++}else if(D.isPointLight){const U=r.point[_];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),_++}else if(D.isHemisphereLight){const U=r.hemi[w];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(y),w++}}}return{setup:p,setupView:m,state:r}}function _v(s){const t=new fC(s),i=[],r=[];function l(g){d.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function f(g){r.push(g)}function p(){t.setup(i)}function m(g){t.setupView(i,g)}const d={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:u,pushShadow:f}}function hC(s){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let p;return f===void 0?(p=new _v(s),t.set(l,[p])):u>=f.length?(p=new _v(s),f.push(p)):p=f[u],p}function r(){t=new WeakMap}return{get:i,dispose:r}}const dC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mC=[new et(1,0,0),new et(-1,0,0),new et(0,1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1)],gC=[new et(0,-1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1),new et(0,-1,0),new et(0,-1,0)],vv=new rn,Yo=new et,dd=new et;function _C(s,t,i){let r=new lx;const l=new Ve,u=new Ve,f=new an,p=new Nb,m=new Ob,d={},g=i.maxTextureSize,v={[or]:Wn,[Wn]:or,[_a]:_a},_=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:dC,fragmentShader:pC}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const b=new Yn;b.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Di(b,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ku;let x=this.type;this.render=function(B,F,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;this.type===yE&&(ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ku);const L=s.getRenderTarget(),ct=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),tt=s.state;tt.setBlending(Sa),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const it=x!==this.type;it&&F.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach(Q=>Q.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,Q=B.length;lt<Q;lt++){const O=B[lt],I=O.shadow;if(I===void 0){ae("WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const ot=I.getFrameExtents();l.multiply(ot),u.copy(I.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/ot.x),l.x=u.x*ot.x,I.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/ot.y),l.y=u.y*ot.y,I.mapSize.y=u.y));const pt=s.state.buffers.depth.getReversed();if(I.camera._reversedDepth=pt,I.map===null||it===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Zo){if(O.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Vi(l.x,l.y,{format:zs,type:Ea,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),I.map.texture.name=O.name+".shadowMap",I.map.depthTexture=new tl(l.x,l.y,zi),I.map.depthTexture.name=O.name+".shadowMapDepth",I.map.depthTexture.format=ba,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Tn,I.map.depthTexture.magFilter=Tn}else O.isPointLight?(I.map=new mx(l.x),I.map.depthTexture=new Rb(l.x,Wi)):(I.map=new Vi(l.x,l.y),I.map.depthTexture=new tl(l.x,l.y,Wi)),I.map.depthTexture.name=O.name+".shadowMap",I.map.depthTexture.format=ba,this.type===Ku?(I.map.depthTexture.compareFunction=pt?bp:Ep,I.map.depthTexture.minFilter=Dn,I.map.depthTexture.magFilter=Dn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Tn,I.map.depthTexture.magFilter=Tn);I.camera.updateProjectionMatrix()}const Et=I.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Et;P++){if(I.map.isWebGLCubeRenderTarget)s.setRenderTarget(I.map,P),s.clear();else{P===0&&(s.setRenderTarget(I.map),s.clear());const Y=I.getViewport(P);f.set(u.x*Y.x,u.y*Y.y,u.x*Y.z,u.y*Y.w),tt.viewport(f)}if(O.isPointLight){const Y=I.camera,ft=I.matrix,xt=O.distance||Y.far;xt!==Y.far&&(Y.far=xt,Y.updateProjectionMatrix()),Yo.setFromMatrixPosition(O.matrixWorld),Y.position.copy(Yo),dd.copy(Y.position),dd.add(mC[P]),Y.up.copy(gC[P]),Y.lookAt(dd),Y.updateMatrixWorld(),ft.makeTranslation(-Yo.x,-Yo.y,-Yo.z),vv.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),I._frustum.setFromProjectionMatrix(vv,Y.coordinateSystem,Y.reversedDepth)}else I.updateMatrices(O);r=I.getFrustum(),U(F,T,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===Zo&&R(I,T),I.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(L,ct,G)};function R(B,F){const T=t.update(w);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Vi(l.x,l.y,{format:zs,type:Ea})),_.uniforms.shadow_pass.value=B.map.depthTexture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(F,null,T,_,w,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(F,null,T,M,w,null)}function D(B,F,T,L){let ct=null;const G=T.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)ct=G;else if(ct=T.isPointLight===!0?m:p,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const tt=ct.uuid,it=F.uuid;let lt=d[tt];lt===void 0&&(lt={},d[tt]=lt);let Q=lt[it];Q===void 0&&(Q=ct.clone(),lt[it]=Q,F.addEventListener("dispose",H)),ct=Q}if(ct.visible=F.visible,ct.wireframe=F.wireframe,L===Zo?ct.side=F.shadowSide!==null?F.shadowSide:F.side:ct.side=F.shadowSide!==null?F.shadowSide:v[F.side],ct.alphaMap=F.alphaMap,ct.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,ct.map=F.map,ct.clipShadows=F.clipShadows,ct.clippingPlanes=F.clippingPlanes,ct.clipIntersection=F.clipIntersection,ct.displacementMap=F.displacementMap,ct.displacementScale=F.displacementScale,ct.displacementBias=F.displacementBias,ct.wireframeLinewidth=F.wireframeLinewidth,ct.linewidth=F.linewidth,T.isPointLight===!0&&ct.isMeshDistanceMaterial===!0){const tt=s.properties.get(ct);tt.light=T}return ct}function U(B,F,T,L,ct){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&ct===Zo)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,B.matrixWorld);const it=t.update(B),lt=B.material;if(Array.isArray(lt)){const Q=it.groups;for(let O=0,I=Q.length;O<I;O++){const ot=Q[O],pt=lt[ot.materialIndex];if(pt&&pt.visible){const Et=D(B,pt,L,ct);B.onBeforeShadow(s,B,F,T,it,Et,ot),s.renderBufferDirect(T,null,it,Et,B,ot),B.onAfterShadow(s,B,F,T,it,Et,ot)}}}else if(lt.visible){const Q=D(B,lt,L,ct);B.onBeforeShadow(s,B,F,T,it,Q,null),s.renderBufferDirect(T,null,it,Q,B,null),B.onAfterShadow(s,B,F,T,it,Q,null)}}const tt=B.children;for(let it=0,lt=tt.length;it<lt;it++)U(tt[it],F,T,L,ct)}function H(B){B.target.removeEventListener("dispose",H);for(const T in d){const L=d[T],ct=B.target.uuid;ct in L&&(L[ct].dispose(),delete L[ct])}}}function vC(s,t){function i(){let W=!1;const Ct=new an;let Rt=null;const It=new an(0,0,0,0);return{setMask:function(Tt){Rt!==Tt&&!W&&(s.colorMask(Tt,Tt,Tt,Tt),Rt=Tt)},setLocked:function(Tt){W=Tt},setClear:function(Tt,ut,Ht,ie,Oe){Oe===!0&&(Tt*=ie,ut*=ie,Ht*=ie),Ct.set(Tt,ut,Ht,ie),It.equals(Ct)===!1&&(s.clearColor(Tt,ut,Ht,ie),It.copy(Ct))},reset:function(){W=!1,Rt=null,It.set(-1,0,0,0)}}}function r(){let W=!1,Ct=!1,Rt=null,It=null,Tt=null;return{setReversed:function(ut){if(Ct!==ut){const Ht=t.get("EXT_clip_control");ut?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Ct=ut;const ie=Tt;Tt=null,this.setClear(ie)}},getReversed:function(){return Ct},setTest:function(ut){ut?mt(s.DEPTH_TEST):Mt(s.DEPTH_TEST)},setMask:function(ut){Rt!==ut&&!W&&(s.depthMask(ut),Rt=ut)},setFunc:function(ut){if(Ct&&(ut=eb[ut]),It!==ut){switch(ut){case vd:s.depthFunc(s.NEVER);break;case xd:s.depthFunc(s.ALWAYS);break;case Sd:s.depthFunc(s.LESS);break;case Is:s.depthFunc(s.LEQUAL);break;case yd:s.depthFunc(s.EQUAL);break;case Md:s.depthFunc(s.GEQUAL);break;case Ed:s.depthFunc(s.GREATER);break;case bd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}It=ut}},setLocked:function(ut){W=ut},setClear:function(ut){Tt!==ut&&(Tt=ut,Ct&&(ut=1-ut),s.clearDepth(ut))},reset:function(){W=!1,Rt=null,It=null,Tt=null,Ct=!1}}}function l(){let W=!1,Ct=null,Rt=null,It=null,Tt=null,ut=null,Ht=null,ie=null,Oe=null;return{setTest:function(be){W||(be?mt(s.STENCIL_TEST):Mt(s.STENCIL_TEST))},setMask:function(be){Ct!==be&&!W&&(s.stencilMask(be),Ct=be)},setFunc:function(be,Un,vi){(Rt!==be||It!==Un||Tt!==vi)&&(s.stencilFunc(be,Un,vi),Rt=be,It=Un,Tt=vi)},setOp:function(be,Un,vi){(ut!==be||Ht!==Un||ie!==vi)&&(s.stencilOp(be,Un,vi),ut=be,Ht=Un,ie=vi)},setLocked:function(be){W=be},setClear:function(be){Oe!==be&&(s.clearStencil(be),Oe=be)},reset:function(){W=!1,Ct=null,Rt=null,It=null,Tt=null,ut=null,Ht=null,ie=null,Oe=null}}}const u=new i,f=new r,p=new l,m=new WeakMap,d=new WeakMap;let g={},v={},_=new WeakMap,M=[],b=null,w=!1,y=null,x=null,R=null,D=null,U=null,H=null,B=null,F=new Be(0,0,0),T=0,L=!1,ct=null,G=null,tt=null,it=null,lt=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,I=0;const ot=s.getParameter(s.VERSION);ot.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(ot)[1]),O=I>=1):ot.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),O=I>=2);let pt=null,Et={};const P=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),ft=new an().fromArray(P),xt=new an().fromArray(Y);function Ut(W,Ct,Rt,It){const Tt=new Uint8Array(4),ut=s.createTexture();s.bindTexture(W,ut),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<Rt;Ht++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ct,0,s.RGBA,1,1,It,0,s.RGBA,s.UNSIGNED_BYTE,Tt):s.texImage2D(Ct+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Tt);return ut}const Z={};Z[s.TEXTURE_2D]=Ut(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=Ut(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=Ut(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=Ut(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),p.setClear(0),mt(s.DEPTH_TEST),f.setFunc(Is),le(!1),Qe(S_),mt(s.CULL_FACE),ge(Sa);function mt(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function Mt(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function Bt(W,Ct){return v[W]!==Ct?(s.bindFramebuffer(W,Ct),v[W]=Ct,W===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ct),W===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Kt(W,Ct){let Rt=M,It=!1;if(W){Rt=_.get(Ct),Rt===void 0&&(Rt=[],_.set(Ct,Rt));const Tt=W.textures;if(Rt.length!==Tt.length||Rt[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Ht=Tt.length;ut<Ht;ut++)Rt[ut]=s.COLOR_ATTACHMENT0+ut;Rt.length=Tt.length,It=!0}}else Rt[0]!==s.BACK&&(Rt[0]=s.BACK,It=!0);It&&s.drawBuffers(Rt)}function $t(W){return b!==W?(s.useProgram(W),b=W,!0):!1}const Xe={[Nr]:s.FUNC_ADD,[EE]:s.FUNC_SUBTRACT,[bE]:s.FUNC_REVERSE_SUBTRACT};Xe[TE]=s.MIN,Xe[AE]=s.MAX;const ue={[RE]:s.ZERO,[CE]:s.ONE,[wE]:s.SRC_COLOR,[gd]:s.SRC_ALPHA,[PE]:s.SRC_ALPHA_SATURATE,[NE]:s.DST_COLOR,[UE]:s.DST_ALPHA,[DE]:s.ONE_MINUS_SRC_COLOR,[_d]:s.ONE_MINUS_SRC_ALPHA,[OE]:s.ONE_MINUS_DST_COLOR,[LE]:s.ONE_MINUS_DST_ALPHA,[FE]:s.CONSTANT_COLOR,[IE]:s.ONE_MINUS_CONSTANT_COLOR,[BE]:s.CONSTANT_ALPHA,[zE]:s.ONE_MINUS_CONSTANT_ALPHA};function ge(W,Ct,Rt,It,Tt,ut,Ht,ie,Oe,be){if(W===Sa){w===!0&&(Mt(s.BLEND),w=!1);return}if(w===!1&&(mt(s.BLEND),w=!0),W!==ME){if(W!==y||be!==L){if((x!==Nr||U!==Nr)&&(s.blendEquation(s.FUNC_ADD),x=Nr,U=Nr),be)switch(W){case Ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case y_:s.blendFunc(s.ONE,s.ONE);break;case M_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case E_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:we("WebGLState: Invalid blending: ",W);break}else switch(W){case Ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case y_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case M_:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case E_:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",W);break}R=null,D=null,H=null,B=null,F.set(0,0,0),T=0,y=W,L=be}return}Tt=Tt||Ct,ut=ut||Rt,Ht=Ht||It,(Ct!==x||Tt!==U)&&(s.blendEquationSeparate(Xe[Ct],Xe[Tt]),x=Ct,U=Tt),(Rt!==R||It!==D||ut!==H||Ht!==B)&&(s.blendFuncSeparate(ue[Rt],ue[It],ue[ut],ue[Ht]),R=Rt,D=It,H=ut,B=Ht),(ie.equals(F)===!1||Oe!==T)&&(s.blendColor(ie.r,ie.g,ie.b,Oe),F.copy(ie),T=Oe),y=W,L=!1}function De(W,Ct){W.side===_a?Mt(s.CULL_FACE):mt(s.CULL_FACE);let Rt=W.side===Wn;Ct&&(Rt=!Rt),le(Rt),W.blending===Ps&&W.transparent===!1?ge(Sa):ge(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),u.setMask(W.colorWrite);const It=W.stencilWrite;p.setTest(It),It&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ye(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?mt(s.SAMPLE_ALPHA_TO_COVERAGE):Mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function le(W){ct!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),ct=W)}function Qe(W){W!==xE?(mt(s.CULL_FACE),W!==G&&(W===S_?s.cullFace(s.BACK):W===SE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Mt(s.CULL_FACE),G=W}function V(W){W!==tt&&(O&&s.lineWidth(W),tt=W)}function Ye(W,Ct,Rt){W?(mt(s.POLYGON_OFFSET_FILL),(it!==Ct||lt!==Rt)&&(it=Ct,lt=Rt,f.getReversed()&&(Ct=-Ct),s.polygonOffset(Ct,Rt))):Mt(s.POLYGON_OFFSET_FILL)}function Ee(W){W?mt(s.SCISSOR_TEST):Mt(s.SCISSOR_TEST)}function Le(W){W===void 0&&(W=s.TEXTURE0+Q-1),pt!==W&&(s.activeTexture(W),pt=W)}function qt(W,Ct,Rt){Rt===void 0&&(pt===null?Rt=s.TEXTURE0+Q-1:Rt=pt);let It=Et[Rt];It===void 0&&(It={type:void 0,texture:void 0},Et[Rt]=It),(It.type!==W||It.texture!==Ct)&&(pt!==Rt&&(s.activeTexture(Rt),pt=Rt),s.bindTexture(W,Ct||Z[W]),It.type=W,It.texture=Ct)}function N(){const W=Et[pt];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(W){we("WebGLState:",W)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(W){we("WebGLState:",W)}}function gt(){try{s.texSubImage2D(...arguments)}catch(W){we("WebGLState:",W)}}function yt(){try{s.texSubImage3D(...arguments)}catch(W){we("WebGLState:",W)}}function ht(){try{s.compressedTexSubImage2D(...arguments)}catch(W){we("WebGLState:",W)}}function Xt(){try{s.compressedTexSubImage3D(...arguments)}catch(W){we("WebGLState:",W)}}function wt(){try{s.texStorage2D(...arguments)}catch(W){we("WebGLState:",W)}}function Qt(){try{s.texStorage3D(...arguments)}catch(W){we("WebGLState:",W)}}function ee(){try{s.texImage2D(...arguments)}catch(W){we("WebGLState:",W)}}function At(){try{s.texImage3D(...arguments)}catch(W){we("WebGLState:",W)}}function bt(W){ft.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),ft.copy(W))}function Pt(W){xt.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),xt.copy(W))}function Ot(W,Ct){let Rt=d.get(Ct);Rt===void 0&&(Rt=new WeakMap,d.set(Ct,Rt));let It=Rt.get(W);It===void 0&&(It=s.getUniformBlockIndex(Ct,W.name),Rt.set(W,It))}function Ft(W,Ct){const It=d.get(Ct).get(W);m.get(Ct)!==It&&(s.uniformBlockBinding(Ct,It,W.__bindingPointIndex),m.set(Ct,It))}function fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},pt=null,Et={},v={},_=new WeakMap,M=[],b=null,w=!1,y=null,x=null,R=null,D=null,U=null,H=null,B=null,F=new Be(0,0,0),T=0,L=!1,ct=null,G=null,tt=null,it=null,lt=null,ft.set(0,0,s.canvas.width,s.canvas.height),xt.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),p.reset()}return{buffers:{color:u,depth:f,stencil:p},enable:mt,disable:Mt,bindFramebuffer:Bt,drawBuffers:Kt,useProgram:$t,setBlending:ge,setMaterial:De,setFlipSided:le,setCullFace:Qe,setLineWidth:V,setPolygonOffset:Ye,setScissorTest:Ee,activeTexture:Le,bindTexture:qt,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:ee,texImage3D:At,updateUBOMapping:Ot,uniformBlockBinding:Ft,texStorage2D:wt,texStorage3D:Qt,texSubImage2D:gt,texSubImage3D:yt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Xt,scissor:bt,viewport:Pt,reset:fe}}function xC(s,t,i,r,l,u,f){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ve,g=new WeakMap;let v;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return M?new OffscreenCanvas(N,E):oc("canvas")}function w(N,E,q){let gt=1;const yt=qt(N);if((yt.width>q||yt.height>q)&&(gt=q/Math.max(yt.width,yt.height)),gt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ht=Math.floor(gt*yt.width),Xt=Math.floor(gt*yt.height);v===void 0&&(v=b(ht,Xt));const wt=E?b(ht,Xt):v;return wt.width=ht,wt.height=Xt,wt.getContext("2d").drawImage(N,0,0,ht,Xt),ae("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ht+"x"+Xt+")."),wt}else return"data"in N&&ae("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),N;return N}function y(N){return N.generateMipmaps}function x(N){s.generateMipmap(N)}function R(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(N,E,q,gt,yt=!1){if(N!==null){if(s[N]!==void 0)return s[N];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ht=E;if(E===s.RED&&(q===s.FLOAT&&(ht=s.R32F),q===s.HALF_FLOAT&&(ht=s.R16F),q===s.UNSIGNED_BYTE&&(ht=s.R8)),E===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(ht=s.R8UI),q===s.UNSIGNED_SHORT&&(ht=s.R16UI),q===s.UNSIGNED_INT&&(ht=s.R32UI),q===s.BYTE&&(ht=s.R8I),q===s.SHORT&&(ht=s.R16I),q===s.INT&&(ht=s.R32I)),E===s.RG&&(q===s.FLOAT&&(ht=s.RG32F),q===s.HALF_FLOAT&&(ht=s.RG16F),q===s.UNSIGNED_BYTE&&(ht=s.RG8)),E===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(ht=s.RG8UI),q===s.UNSIGNED_SHORT&&(ht=s.RG16UI),q===s.UNSIGNED_INT&&(ht=s.RG32UI),q===s.BYTE&&(ht=s.RG8I),q===s.SHORT&&(ht=s.RG16I),q===s.INT&&(ht=s.RG32I)),E===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),q===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),q===s.UNSIGNED_INT&&(ht=s.RGB32UI),q===s.BYTE&&(ht=s.RGB8I),q===s.SHORT&&(ht=s.RGB16I),q===s.INT&&(ht=s.RGB32I)),E===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),q===s.UNSIGNED_INT&&(ht=s.RGBA32UI),q===s.BYTE&&(ht=s.RGBA8I),q===s.SHORT&&(ht=s.RGBA16I),q===s.INT&&(ht=s.RGBA32I)),E===s.RGB&&(q===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(ht=s.R11F_G11F_B10F)),E===s.RGBA){const Xt=yt?rc:Te.getTransfer(gt);q===s.FLOAT&&(ht=s.RGBA32F),q===s.HALF_FLOAT&&(ht=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ht=Xt===Ie?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function U(N,E){let q;return N?E===null||E===Wi||E===$o?q=s.DEPTH24_STENCIL8:E===zi?q=s.DEPTH32F_STENCIL8:E===Jo&&(q=s.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wi||E===$o?q=s.DEPTH_COMPONENT24:E===zi?q=s.DEPTH_COMPONENT32F:E===Jo&&(q=s.DEPTH_COMPONENT16),q}function H(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Tn&&N.minFilter!==Dn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function B(N){const E=N.target;E.removeEventListener("dispose",B),T(E),E.isVideoTexture&&g.delete(E)}function F(N){const E=N.target;E.removeEventListener("dispose",F),ct(E)}function T(N){const E=r.get(N);if(E.__webglInit===void 0)return;const q=N.source,gt=_.get(q);if(gt){const yt=gt[E.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&L(N),Object.keys(gt).length===0&&_.delete(q)}r.remove(N)}function L(N){const E=r.get(N);s.deleteTexture(E.__webglTexture);const q=N.source,gt=_.get(q);delete gt[E.__cacheKey],f.memory.textures--}function ct(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(E.__webglFramebuffer[gt]))for(let yt=0;yt<E.__webglFramebuffer[gt].length;yt++)s.deleteFramebuffer(E.__webglFramebuffer[gt][yt]);else s.deleteFramebuffer(E.__webglFramebuffer[gt]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[gt])}else{if(Array.isArray(E.__webglFramebuffer))for(let gt=0;gt<E.__webglFramebuffer.length;gt++)s.deleteFramebuffer(E.__webglFramebuffer[gt]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let gt=0;gt<E.__webglColorRenderbuffer.length;gt++)E.__webglColorRenderbuffer[gt]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[gt]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=N.textures;for(let gt=0,yt=q.length;gt<yt;gt++){const ht=r.get(q[gt]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),f.memory.textures--),r.remove(q[gt])}r.remove(N)}let G=0;function tt(){G=0}function it(){const N=G;return N>=l.maxTextures&&ae("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),G+=1,N}function lt(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function Q(N,E){const q=r.get(N);if(N.isVideoTexture&&Ee(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){const gt=N.image;if(gt===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(q,N,E);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+E)}function O(N,E){const q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){Z(q,N,E);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+E)}function I(N,E){const q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){Z(q,N,E);return}i.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+E)}function ot(N,E){const q=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){mt(q,N,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+E)}const pt={[Td]:s.REPEAT,[va]:s.CLAMP_TO_EDGE,[Ad]:s.MIRRORED_REPEAT},Et={[Tn]:s.NEAREST,[VE]:s.NEAREST_MIPMAP_NEAREST,[Eu]:s.NEAREST_MIPMAP_LINEAR,[Dn]:s.LINEAR,[Ph]:s.LINEAR_MIPMAP_NEAREST,[Pr]:s.LINEAR_MIPMAP_LINEAR},P={[qE]:s.NEVER,[QE]:s.ALWAYS,[YE]:s.LESS,[Ep]:s.LEQUAL,[jE]:s.EQUAL,[bp]:s.GEQUAL,[ZE]:s.GREATER,[KE]:s.NOTEQUAL};function Y(N,E){if(E.type===zi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Dn||E.magFilter===Ph||E.magFilter===Eu||E.magFilter===Pr||E.minFilter===Dn||E.minFilter===Ph||E.minFilter===Eu||E.minFilter===Pr)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,pt[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,pt[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,pt[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Et[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Et[E.minFilter]),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==Eu&&E.minFilter!==Pr||E.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ft(N,E){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",B));const gt=E.source;let yt=_.get(gt);yt===void 0&&(yt={},_.set(gt,yt));const ht=lt(E);if(ht!==N.__cacheKey){yt[ht]===void 0&&(yt[ht]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,q=!0),yt[ht].usedTimes++;const Xt=yt[N.__cacheKey];Xt!==void 0&&(yt[N.__cacheKey].usedTimes--,Xt.usedTimes===0&&L(E)),N.__cacheKey=ht,N.__webglTexture=yt[ht].texture}return q}function xt(N,E,q){return Math.floor(Math.floor(N/q)/E)}function Ut(N,E,q,gt){const ht=N.updateRanges;if(ht.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,q,gt,E.data);else{ht.sort((At,bt)=>At.start-bt.start);let Xt=0;for(let At=1;At<ht.length;At++){const bt=ht[Xt],Pt=ht[At],Ot=bt.start+bt.count,Ft=xt(Pt.start,E.width,4),fe=xt(bt.start,E.width,4);Pt.start<=Ot+1&&Ft===fe&&xt(Pt.start+Pt.count-1,E.width,4)===Ft?bt.count=Math.max(bt.count,Pt.start+Pt.count-bt.start):(++Xt,ht[Xt]=Pt)}ht.length=Xt+1;const wt=s.getParameter(s.UNPACK_ROW_LENGTH),Qt=s.getParameter(s.UNPACK_SKIP_PIXELS),ee=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let At=0,bt=ht.length;At<bt;At++){const Pt=ht[At],Ot=Math.floor(Pt.start/4),Ft=Math.ceil(Pt.count/4),fe=Ot%E.width,W=Math.floor(Ot/E.width),Ct=Ft,Rt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,fe),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,fe,W,Ct,Rt,q,gt,E.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,wt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Qt),s.pixelStorei(s.UNPACK_SKIP_ROWS,ee)}}function Z(N,E,q){let gt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(gt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(gt=s.TEXTURE_3D);const yt=ft(N,E),ht=E.source;i.bindTexture(gt,N.__webglTexture,s.TEXTURE0+q);const Xt=r.get(ht);if(ht.version!==Xt.__version||yt===!0){i.activeTexture(s.TEXTURE0+q);const wt=Te.getPrimaries(Te.workingColorSpace),Qt=E.colorSpace===rr?null:Te.getPrimaries(E.colorSpace),ee=E.colorSpace===rr||wt===Qt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let At=w(E.image,!1,l.maxTextureSize);At=Le(E,At);const bt=u.convert(E.format,E.colorSpace),Pt=u.convert(E.type);let Ot=D(E.internalFormat,bt,Pt,E.colorSpace,E.isVideoTexture);Y(gt,E);let Ft;const fe=E.mipmaps,W=E.isVideoTexture!==!0,Ct=Xt.__version===void 0||yt===!0,Rt=ht.dataReady,It=H(E,At);if(E.isDepthTexture)Ot=U(E.format===Fr,E.type),Ct&&(W?i.texStorage2D(s.TEXTURE_2D,1,Ot,At.width,At.height):i.texImage2D(s.TEXTURE_2D,0,Ot,At.width,At.height,0,bt,Pt,null));else if(E.isDataTexture)if(fe.length>0){W&&Ct&&i.texStorage2D(s.TEXTURE_2D,It,Ot,fe[0].width,fe[0].height);for(let Tt=0,ut=fe.length;Tt<ut;Tt++)Ft=fe[Tt],W?Rt&&i.texSubImage2D(s.TEXTURE_2D,Tt,0,0,Ft.width,Ft.height,bt,Pt,Ft.data):i.texImage2D(s.TEXTURE_2D,Tt,Ot,Ft.width,Ft.height,0,bt,Pt,Ft.data);E.generateMipmaps=!1}else W?(Ct&&i.texStorage2D(s.TEXTURE_2D,It,Ot,At.width,At.height),Rt&&Ut(E,At,bt,Pt)):i.texImage2D(s.TEXTURE_2D,0,Ot,At.width,At.height,0,bt,Pt,At.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Ct&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,Ot,fe[0].width,fe[0].height,At.depth);for(let Tt=0,ut=fe.length;Tt<ut;Tt++)if(Ft=fe[Tt],E.format!==wi)if(bt!==null)if(W){if(Rt)if(E.layerUpdates.size>0){const Ht=Z_(Ft.width,Ft.height,E.format,E.type);for(const ie of E.layerUpdates){const Oe=Ft.data.subarray(ie*Ht/Ft.data.BYTES_PER_ELEMENT,(ie+1)*Ht/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,ie,Ft.width,Ft.height,1,bt,Oe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,0,Ft.width,Ft.height,At.depth,bt,Ft.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Tt,Ot,Ft.width,Ft.height,At.depth,0,Ft.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Rt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,0,Ft.width,Ft.height,At.depth,bt,Pt,Ft.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Tt,Ot,Ft.width,Ft.height,At.depth,0,bt,Pt,Ft.data)}else{W&&Ct&&i.texStorage2D(s.TEXTURE_2D,It,Ot,fe[0].width,fe[0].height);for(let Tt=0,ut=fe.length;Tt<ut;Tt++)Ft=fe[Tt],E.format!==wi?bt!==null?W?Rt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Tt,0,0,Ft.width,Ft.height,bt,Ft.data):i.compressedTexImage2D(s.TEXTURE_2D,Tt,Ot,Ft.width,Ft.height,0,Ft.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Rt&&i.texSubImage2D(s.TEXTURE_2D,Tt,0,0,Ft.width,Ft.height,bt,Pt,Ft.data):i.texImage2D(s.TEXTURE_2D,Tt,Ot,Ft.width,Ft.height,0,bt,Pt,Ft.data)}else if(E.isDataArrayTexture)if(W){if(Ct&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,Ot,At.width,At.height,At.depth),Rt)if(E.layerUpdates.size>0){const Tt=Z_(At.width,At.height,E.format,E.type);for(const ut of E.layerUpdates){const Ht=At.data.subarray(ut*Tt/At.data.BYTES_PER_ELEMENT,(ut+1)*Tt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ut,At.width,At.height,1,bt,Pt,Ht)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,bt,Pt,At.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,At.width,At.height,At.depth,0,bt,Pt,At.data);else if(E.isData3DTexture)W?(Ct&&i.texStorage3D(s.TEXTURE_3D,It,Ot,At.width,At.height,At.depth),Rt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,bt,Pt,At.data)):i.texImage3D(s.TEXTURE_3D,0,Ot,At.width,At.height,At.depth,0,bt,Pt,At.data);else if(E.isFramebufferTexture){if(Ct)if(W)i.texStorage2D(s.TEXTURE_2D,It,Ot,At.width,At.height);else{let Tt=At.width,ut=At.height;for(let Ht=0;Ht<It;Ht++)i.texImage2D(s.TEXTURE_2D,Ht,Ot,Tt,ut,0,bt,Pt,null),Tt>>=1,ut>>=1}}else if(fe.length>0){if(W&&Ct){const Tt=qt(fe[0]);i.texStorage2D(s.TEXTURE_2D,It,Ot,Tt.width,Tt.height)}for(let Tt=0,ut=fe.length;Tt<ut;Tt++)Ft=fe[Tt],W?Rt&&i.texSubImage2D(s.TEXTURE_2D,Tt,0,0,bt,Pt,Ft):i.texImage2D(s.TEXTURE_2D,Tt,Ot,bt,Pt,Ft);E.generateMipmaps=!1}else if(W){if(Ct){const Tt=qt(At);i.texStorage2D(s.TEXTURE_2D,It,Ot,Tt.width,Tt.height)}Rt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,bt,Pt,At)}else i.texImage2D(s.TEXTURE_2D,0,Ot,bt,Pt,At);y(E)&&x(gt),Xt.__version=ht.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function mt(N,E,q){if(E.image.length!==6)return;const gt=ft(N,E),yt=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+q);const ht=r.get(yt);if(yt.version!==ht.__version||gt===!0){i.activeTexture(s.TEXTURE0+q);const Xt=Te.getPrimaries(Te.workingColorSpace),wt=E.colorSpace===rr?null:Te.getPrimaries(E.colorSpace),Qt=E.colorSpace===rr||Xt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const ee=E.isCompressedTexture||E.image[0].isCompressedTexture,At=E.image[0]&&E.image[0].isDataTexture,bt=[];for(let ut=0;ut<6;ut++)!ee&&!At?bt[ut]=w(E.image[ut],!0,l.maxCubemapSize):bt[ut]=At?E.image[ut].image:E.image[ut],bt[ut]=Le(E,bt[ut]);const Pt=bt[0],Ot=u.convert(E.format,E.colorSpace),Ft=u.convert(E.type),fe=D(E.internalFormat,Ot,Ft,E.colorSpace),W=E.isVideoTexture!==!0,Ct=ht.__version===void 0||gt===!0,Rt=yt.dataReady;let It=H(E,Pt);Y(s.TEXTURE_CUBE_MAP,E);let Tt;if(ee){W&&Ct&&i.texStorage2D(s.TEXTURE_CUBE_MAP,It,fe,Pt.width,Pt.height);for(let ut=0;ut<6;ut++){Tt=bt[ut].mipmaps;for(let Ht=0;Ht<Tt.length;Ht++){const ie=Tt[Ht];E.format!==wi?Ot!==null?W?Rt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ht,0,0,ie.width,ie.height,Ot,ie.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ht,fe,ie.width,ie.height,0,ie.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ht,0,0,ie.width,ie.height,Ot,Ft,ie.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ht,fe,ie.width,ie.height,0,Ot,Ft,ie.data)}}}else{if(Tt=E.mipmaps,W&&Ct){Tt.length>0&&It++;const ut=qt(bt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,It,fe,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(At){W?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,bt[ut].width,bt[ut].height,Ot,Ft,bt[ut].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,fe,bt[ut].width,bt[ut].height,0,Ot,Ft,bt[ut].data);for(let Ht=0;Ht<Tt.length;Ht++){const Oe=Tt[Ht].image[ut].image;W?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ht+1,0,0,Oe.width,Oe.height,Ot,Ft,Oe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ht+1,fe,Oe.width,Oe.height,0,Ot,Ft,Oe.data)}}else{W?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Ot,Ft,bt[ut]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,fe,Ot,Ft,bt[ut]);for(let Ht=0;Ht<Tt.length;Ht++){const ie=Tt[Ht];W?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ht+1,0,0,Ot,Ft,ie.image[ut]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ht+1,fe,Ot,Ft,ie.image[ut])}}}y(E)&&x(s.TEXTURE_CUBE_MAP),ht.__version=yt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Mt(N,E,q,gt,yt,ht){const Xt=u.convert(q.format,q.colorSpace),wt=u.convert(q.type),Qt=D(q.internalFormat,Xt,wt,q.colorSpace),ee=r.get(E),At=r.get(q);if(At.__renderTarget=E,!ee.__hasExternalTextures){const bt=Math.max(1,E.width>>ht),Pt=Math.max(1,E.height>>ht);yt===s.TEXTURE_3D||yt===s.TEXTURE_2D_ARRAY?i.texImage3D(yt,ht,Qt,bt,Pt,E.depth,0,Xt,wt,null):i.texImage2D(yt,ht,Qt,bt,Pt,0,Xt,wt,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),Ye(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,gt,yt,At.__webglTexture,0,V(E)):(yt===s.TEXTURE_2D||yt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,gt,yt,At.__webglTexture,ht),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(N,E,q){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer){const gt=E.depthTexture,yt=gt&&gt.isDepthTexture?gt.type:null,ht=U(E.stencilBuffer,yt),Xt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ye(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(E),ht,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(E),ht,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ht,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xt,s.RENDERBUFFER,N)}else{const gt=E.textures;for(let yt=0;yt<gt.length;yt++){const ht=gt[yt],Xt=u.convert(ht.format,ht.colorSpace),wt=u.convert(ht.type),Qt=D(ht.internalFormat,Xt,wt,ht.colorSpace);Ye(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(E),Qt,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(E),Qt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Qt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Kt(N,E,q){const gt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=r.get(E.depthTexture);if(yt.__renderTarget=E,(!yt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),gt){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),yt.__webglTexture===void 0){yt.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,yt.__webglTexture),Y(s.TEXTURE_CUBE_MAP,E.depthTexture);const ee=u.convert(E.depthTexture.format),At=u.convert(E.depthTexture.type);let bt;E.depthTexture.format===ba?bt=s.DEPTH_COMPONENT24:E.depthTexture.format===Fr&&(bt=s.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,bt,E.width,E.height,0,ee,At,null)}}else Q(E.depthTexture,0);const ht=yt.__webglTexture,Xt=V(E),wt=gt?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,Qt=E.depthTexture.format===Fr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===ba)Ye(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Qt,wt,ht,0,Xt):s.framebufferTexture2D(s.FRAMEBUFFER,Qt,wt,ht,0);else if(E.depthTexture.format===Fr)Ye(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Qt,wt,ht,0,Xt):s.framebufferTexture2D(s.FRAMEBUFFER,Qt,wt,ht,0);else throw new Error("Unknown depthTexture format")}function $t(N){const E=r.get(N),q=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const gt=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),gt){const yt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,gt.removeEventListener("dispose",yt)};gt.addEventListener("dispose",yt),E.__depthDisposeCallback=yt}E.__boundDepthTexture=gt}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let gt=0;gt<6;gt++)Kt(E.__webglFramebuffer[gt],N,gt);else{const gt=N.texture.mipmaps;gt&&gt.length>0?Kt(E.__webglFramebuffer[0],N,0):Kt(E.__webglFramebuffer,N,0)}else if(q){E.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[gt]),E.__webglDepthbuffer[gt]===void 0)E.__webglDepthbuffer[gt]=s.createRenderbuffer(),Bt(E.__webglDepthbuffer[gt],N,!1);else{const yt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer[gt];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,ht)}}else{const gt=N.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Bt(E.__webglDepthbuffer,N,!1);else{const yt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,ht)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(N,E,q){const gt=r.get(N);E!==void 0&&Mt(gt.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&$t(N)}function ue(N){const E=N.texture,q=r.get(N),gt=r.get(E);N.addEventListener("dispose",F);const yt=N.textures,ht=N.isWebGLCubeRenderTarget===!0,Xt=yt.length>1;if(Xt||(gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture()),gt.__version=E.version,f.memory.textures++),ht){q.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[wt]=[];for(let Qt=0;Qt<E.mipmaps.length;Qt++)q.__webglFramebuffer[wt][Qt]=s.createFramebuffer()}else q.__webglFramebuffer[wt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)q.__webglFramebuffer[wt]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Xt)for(let wt=0,Qt=yt.length;wt<Qt;wt++){const ee=r.get(yt[wt]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),f.memory.textures++)}if(N.samples>0&&Ye(N)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let wt=0;wt<yt.length;wt++){const Qt=yt[wt];q.__webglColorRenderbuffer[wt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[wt]);const ee=u.convert(Qt.format,Qt.colorSpace),At=u.convert(Qt.type),bt=D(Qt.internalFormat,ee,At,Qt.colorSpace,N.isXRRenderTarget===!0),Pt=V(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,bt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,q.__webglColorRenderbuffer[wt])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Bt(q.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){i.bindTexture(s.TEXTURE_CUBE_MAP,gt.__webglTexture),Y(s.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)Mt(q.__webglFramebuffer[wt][Qt],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Qt);else Mt(q.__webglFramebuffer[wt],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(E)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let wt=0,Qt=yt.length;wt<Qt;wt++){const ee=yt[wt],At=r.get(ee);let bt=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(bt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(bt,At.__webglTexture),Y(bt,ee),Mt(q.__webglFramebuffer,N,ee,s.COLOR_ATTACHMENT0+wt,bt,0),y(ee)&&x(bt)}i.unbindTexture()}else{let wt=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(wt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(wt,gt.__webglTexture),Y(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)Mt(q.__webglFramebuffer[Qt],N,E,s.COLOR_ATTACHMENT0,wt,Qt);else Mt(q.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,wt,0);y(E)&&x(wt),i.unbindTexture()}N.depthBuffer&&$t(N)}function ge(N){const E=N.textures;for(let q=0,gt=E.length;q<gt;q++){const yt=E[q];if(y(yt)){const ht=R(N),Xt=r.get(yt).__webglTexture;i.bindTexture(ht,Xt),x(ht),i.unbindTexture()}}}const De=[],le=[];function Qe(N){if(N.samples>0){if(Ye(N)===!1){const E=N.textures,q=N.width,gt=N.height;let yt=s.COLOR_BUFFER_BIT;const ht=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xt=r.get(N),wt=E.length>1;if(wt)for(let ee=0;ee<E.length;ee++)i.bindFramebuffer(s.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const Qt=N.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let ee=0;ee<E.length;ee++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(yt|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(yt|=s.STENCIL_BUFFER_BIT)),wt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xt.__webglColorRenderbuffer[ee]);const At=r.get(E[ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,At,0)}s.blitFramebuffer(0,0,q,gt,0,0,q,gt,yt,s.NEAREST),m===!0&&(De.length=0,le.length=0,De.push(s.COLOR_ATTACHMENT0+ee),N.depthBuffer&&N.resolveDepthBuffer===!1&&(De.push(ht),le.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,le)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,De))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),wt)for(let ee=0;ee<E.length;ee++){i.bindFramebuffer(s.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,Xt.__webglColorRenderbuffer[ee]);const At=r.get(E[ee]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.TEXTURE_2D,At,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function V(N){return Math.min(l.maxSamples,N.samples)}function Ye(N){const E=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ee(N){const E=f.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function Le(N,E){const q=N.colorSpace,gt=N.format,yt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==Hs&&q!==rr&&(Te.getTransfer(q)===Ie?(gt!==wi||yt!==gi)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",q)),E}function qt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=it,this.resetTextureUnits=tt,this.setTexture2D=Q,this.setTexture2DArray=O,this.setTexture3D=I,this.setTextureCube=ot,this.rebindTextures=Xe,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function SC(s,t){function i(r,l=rr){let u;const f=Te.getTransfer(l);if(r===gi)return s.UNSIGNED_BYTE;if(r===vp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===xp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Kv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Qv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===jv)return s.BYTE;if(r===Zv)return s.SHORT;if(r===Jo)return s.UNSIGNED_SHORT;if(r===_p)return s.INT;if(r===Wi)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===Ea)return s.HALF_FLOAT;if(r===Jv)return s.ALPHA;if(r===$v)return s.RGB;if(r===wi)return s.RGBA;if(r===ba)return s.DEPTH_COMPONENT;if(r===Fr)return s.DEPTH_STENCIL;if(r===tx)return s.RED;if(r===Sp)return s.RED_INTEGER;if(r===zs)return s.RG;if(r===yp)return s.RG_INTEGER;if(r===Mp)return s.RGBA_INTEGER;if(r===Qu||r===Ju||r===$u||r===tc)if(f===Ie)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Qu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ju)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$u)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Qu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ju)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$u)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===tc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rd||r===Cd||r===wd||r===Dd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Rd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ud||r===Ld||r===Nd||r===Od||r===Pd||r===Fd||r===Id)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Ud||r===Ld)return f===Ie?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Nd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Od)return u.COMPRESSED_R11_EAC;if(r===Pd)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Fd)return u.COMPRESSED_RG11_EAC;if(r===Id)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Bd||r===zd||r===Hd||r===Gd||r===Vd||r===kd||r===Xd||r===Wd||r===qd||r===Yd||r===jd||r===Zd||r===Kd||r===Qd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Bd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Gd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jd||r===$d||r===tp)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Jd)return f===Ie?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$d)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===tp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ep||r===np||r===ip||r===ap)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===ep)return u.COMPRESSED_RED_RGTC1_EXT;if(r===np)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ip)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ap)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$o?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const yC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MC=`
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

}`;class EC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new cx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new qi({vertexShader:yC,fragmentShader:MC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Di(new _c(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bC extends Xs{constructor(t,i){super();const r=this;let l=null,u=1,f=null,p="local-floor",m=1,d=null,g=null,v=null,_=null,M=null,b=null;const w=typeof XRWebGLBinding<"u",y=new EC,x={},R=i.getContextAttributes();let D=null,U=null;const H=[],B=[],F=new Ve;let T=null;const L=new mi;L.viewport=new an;const ct=new mi;ct.viewport=new an;const G=[L,ct],tt=new Fb;let it=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let mt=H[Z];return mt===void 0&&(mt=new kh,H[Z]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Z){let mt=H[Z];return mt===void 0&&(mt=new kh,H[Z]=mt),mt.getGripSpace()},this.getHand=function(Z){let mt=H[Z];return mt===void 0&&(mt=new kh,H[Z]=mt),mt.getHandSpace()};function Q(Z){const mt=B.indexOf(Z.inputSource);if(mt===-1)return;const Mt=H[mt];Mt!==void 0&&(Mt.update(Z.inputSource,Z.frame,d||f),Mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",I);for(let Z=0;Z<H.length;Z++){const mt=B[Z];mt!==null&&(B[Z]=null,H[Z].disconnect(mt))}it=null,lt=null,y.reset();for(const Z in x)delete x[Z];t.setRenderTarget(D),M=null,_=null,v=null,l=null,U=null,Ut.stop(),r.isPresenting=!1,t.setPixelRatio(T),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){u=Z,r.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){p=Z,r.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(Z){d=Z},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",O),l.addEventListener("inputsourceschange",I),R.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(F),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Bt=null,Kt=null;R.depth&&(Kt=R.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=R.stencil?Fr:ba,Bt=R.stencil?$o:Wi);const $t={colorFormat:i.RGBA8,depthFormat:Kt,scaleFactor:u};v=this.getBinding(),_=v.createProjectionLayer($t),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),U=new Vi(_.textureWidth,_.textureHeight,{format:wi,type:gi,depthTexture:new tl(_.textureWidth,_.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Mt={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Vi(M.framebufferWidth,M.framebufferHeight,{format:wi,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await l.requestReferenceSpace(p),Ut.setContext(l),Ut.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function I(Z){for(let mt=0;mt<Z.removed.length;mt++){const Mt=Z.removed[mt],Bt=B.indexOf(Mt);Bt>=0&&(B[Bt]=null,H[Bt].disconnect(Mt))}for(let mt=0;mt<Z.added.length;mt++){const Mt=Z.added[mt];let Bt=B.indexOf(Mt);if(Bt===-1){for(let $t=0;$t<H.length;$t++)if($t>=B.length){B.push(Mt),Bt=$t;break}else if(B[$t]===null){B[$t]=Mt,Bt=$t;break}if(Bt===-1)break}const Kt=H[Bt];Kt&&Kt.connect(Mt)}}const ot=new et,pt=new et;function Et(Z,mt,Mt){ot.setFromMatrixPosition(mt.matrixWorld),pt.setFromMatrixPosition(Mt.matrixWorld);const Bt=ot.distanceTo(pt),Kt=mt.projectionMatrix.elements,$t=Mt.projectionMatrix.elements,Xe=Kt[14]/(Kt[10]-1),ue=Kt[14]/(Kt[10]+1),ge=(Kt[9]+1)/Kt[5],De=(Kt[9]-1)/Kt[5],le=(Kt[8]-1)/Kt[0],Qe=($t[8]+1)/$t[0],V=Xe*le,Ye=Xe*Qe,Ee=Bt/(-le+Qe),Le=Ee*-le;if(mt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Le),Z.translateZ(Ee),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Kt[10]===-1)Z.projectionMatrix.copy(mt.projectionMatrix),Z.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const qt=Xe+Ee,N=ue+Ee,E=V-Le,q=Ye+(Bt-Le),gt=ge*ue/N*qt,yt=De*ue/N*qt;Z.projectionMatrix.makePerspective(E,q,gt,yt,qt,N),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function P(Z,mt){mt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(mt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let mt=Z.near,Mt=Z.far;y.texture!==null&&(y.depthNear>0&&(mt=y.depthNear),y.depthFar>0&&(Mt=y.depthFar)),tt.near=ct.near=L.near=mt,tt.far=ct.far=L.far=Mt,(it!==tt.near||lt!==tt.far)&&(l.updateRenderState({depthNear:tt.near,depthFar:tt.far}),it=tt.near,lt=tt.far),tt.layers.mask=Z.layers.mask|6,L.layers.mask=tt.layers.mask&-5,ct.layers.mask=tt.layers.mask&-3;const Bt=Z.parent,Kt=tt.cameras;P(tt,Bt);for(let $t=0;$t<Kt.length;$t++)P(Kt[$t],Bt);Kt.length===2?Et(tt,L,ct):tt.projectionMatrix.copy(L.projectionMatrix),Y(Z,tt,Bt)};function Y(Z,mt,Mt){Mt===null?Z.matrix.copy(mt.matrixWorld):(Z.matrix.copy(Mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(mt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(mt.projectionMatrix),Z.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=rp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(Z){m=Z,_!==null&&(_.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(tt)},this.getCameraTexture=function(Z){return x[Z]};let ft=null;function xt(Z,mt){if(g=mt.getViewerPose(d||f),b=mt,g!==null){const Mt=g.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let Bt=!1;Mt.length!==tt.cameras.length&&(tt.cameras.length=0,Bt=!0);for(let ue=0;ue<Mt.length;ue++){const ge=Mt[ue];let De=null;if(M!==null)De=M.getViewport(ge);else{const Qe=v.getViewSubImage(_,ge);De=Qe.viewport,ue===0&&(t.setRenderTargetTextures(U,Qe.colorTexture,Qe.depthStencilTexture),t.setRenderTarget(U))}let le=G[ue];le===void 0&&(le=new mi,le.layers.enable(ue),le.viewport=new an,G[ue]=le),le.matrix.fromArray(ge.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ge.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(De.x,De.y,De.width,De.height),ue===0&&(tt.matrix.copy(le.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),Bt===!0&&tt.cameras.push(le)}const Kt=l.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=r.getBinding();const ue=v.getDepthInformation(Mt[0]);ue&&ue.isValid&&ue.texture&&y.init(ue,l.renderState)}if(Kt&&Kt.includes("camera-access")&&w){t.state.unbindTexture(),v=r.getBinding();for(let ue=0;ue<Mt.length;ue++){const ge=Mt[ue].camera;if(ge){let De=x[ge];De||(De=new cx,x[ge]=De);const le=v.getCameraImage(ge);De.sourceTexture=le}}}}for(let Mt=0;Mt<H.length;Mt++){const Bt=B[Mt],Kt=H[Mt];Bt!==null&&Kt!==void 0&&Kt.update(Bt,mt,d||f)}ft&&ft(Z,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),b=null}const Ut=new px;Ut.setAnimationLoop(xt),this.setAnimationLoop=function(Z){ft=Z},this.dispose=function(){}}}const Ur=new Ta,TC=new rn;function AC(s,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,fx(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,R,D,U){x.isMeshBasicMaterial?u(y,x):x.isMeshLambertMaterial?(u(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(u(y,x),v(y,x)):x.isMeshPhongMaterial?(u(y,x),g(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(u(y,x),_(y,x),x.isMeshPhysicalMaterial&&M(y,x,U)):x.isMeshMatcapMaterial?(u(y,x),b(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),w(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(f(y,x),x.isLineDashedMaterial&&p(y,x)):x.isPointsMaterial?m(y,x,R,D):x.isSpriteMaterial?d(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Wn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Wn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const R=t.get(x),D=R.envMap,U=R.envMapRotation;D&&(y.envMap.value=D,Ur.copy(U),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),y.envMapRotation.value.setFromMatrix4(TC.makeRotationFromEuler(Ur)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function f(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function p(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,R,D){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*R,y.scale.value=D*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,R){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function w(y,x){const R=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function RC(s,t,i,r){let l={},u={},f=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,D){const U=D.program;r.uniformBlockBinding(R,U)}function d(R,D){let U=l[R.id];U===void 0&&(b(R),U=g(R),l[R.id]=U,R.addEventListener("dispose",y));const H=D.program;r.updateUBOMapping(R,H);const B=t.render.frame;u[R.id]!==B&&(_(R),u[R.id]=B)}function g(R){const D=v();R.__bindingPointIndex=D;const U=s.createBuffer(),H=R.__size,B=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,H,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,U),U}function v(){for(let R=0;R<p;R++)if(f.indexOf(R)===-1)return f.push(R),R;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){const D=l[R.id],U=R.uniforms,H=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let B=0,F=U.length;B<F;B++){const T=Array.isArray(U[B])?U[B]:[U[B]];for(let L=0,ct=T.length;L<ct;L++){const G=T[L];if(M(G,B,L,H)===!0){const tt=G.__offset,it=Array.isArray(G.value)?G.value:[G.value];let lt=0;for(let Q=0;Q<it.length;Q++){const O=it[Q],I=w(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,tt+lt,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,lt),lt+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,tt,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(R,D,U,H){const B=R.value,F=D+"_"+U;if(H[F]===void 0)return typeof B=="number"||typeof B=="boolean"?H[F]=B:H[F]=B.clone(),!0;{const T=H[F];if(typeof B=="number"||typeof B=="boolean"){if(T!==B)return H[F]=B,!0}else if(T.equals(B)===!1)return T.copy(B),!0}return!1}function b(R){const D=R.uniforms;let U=0;const H=16;for(let F=0,T=D.length;F<T;F++){const L=Array.isArray(D[F])?D[F]:[D[F]];for(let ct=0,G=L.length;ct<G;ct++){const tt=L[ct],it=Array.isArray(tt.value)?tt.value:[tt.value];for(let lt=0,Q=it.length;lt<Q;lt++){const O=it[lt],I=w(O),ot=U%H,pt=ot%I.boundary,Et=ot+pt;U+=pt,Et!==0&&H-Et<I.storage&&(U+=H-Et),tt.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=U,U+=I.storage}}}const B=U%H;return B>0&&(U+=H-B),R.__size=U,R.__cache={},this}function w(R){const D={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(D.boundary=4,D.storage=4):R.isVector2?(D.boundary=8,D.storage=8):R.isVector3||R.isColor?(D.boundary=16,D.storage=12):R.isVector4?(D.boundary=16,D.storage=16):R.isMatrix3?(D.boundary=48,D.storage=48):R.isMatrix4?(D.boundary=64,D.storage=64):R.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ae("WebGLRenderer: Unsupported uniform value type.",R),D}function y(R){const D=R.target;D.removeEventListener("dispose",y);const U=f.indexOf(D.__bindingPointIndex);f.splice(U,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function x(){for(const R in l)s.deleteBuffer(l[R]);f=[],l={},u={}}return{bind:m,update:d,dispose:x}}const CC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function wC(){return Ii===null&&(Ii=new Mb(CC,16,16,zs,Ea),Ii.name="DFG_LUT",Ii.minFilter=Dn,Ii.magFilter=Dn,Ii.wrapS=va,Ii.wrapT=va,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class DC{constructor(t={}){const{canvas:i=$E(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:M=gi}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=f;const w=M,y=new Set([Mp,yp,Sp]),x=new Set([gi,Wi,Jo,$o,vp,xp]),R=new Uint32Array(4),D=new Int32Array(4);let U=null,H=null;const B=[],F=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let ct=!1;this._outputColorSpace=pi;let G=0,tt=0,it=null,lt=-1,Q=null;const O=new an,I=new an;let ot=null;const pt=new Be(0);let Et=0,P=i.width,Y=i.height,ft=1,xt=null,Ut=null;const Z=new an(0,0,P,Y),mt=new an(0,0,P,Y);let Mt=!1;const Bt=new lx;let Kt=!1,$t=!1;const Xe=new rn,ue=new et,ge=new an,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function Qe(){return it===null?ft:1}let V=r;function Ye(C,X){return i.getContext(C,X)}try{const C={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${gp}`),i.addEventListener("webglcontextlost",Ht,!1),i.addEventListener("webglcontextrestored",ie,!1),i.addEventListener("webglcontextcreationerror",Oe,!1),V===null){const X="webgl2";if(V=Ye(X,C),V===null)throw Ye(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw we("WebGLRenderer: "+C.message),C}let Ee,Le,qt,N,E,q,gt,yt,ht,Xt,wt,Qt,ee,At,bt,Pt,Ot,Ft,fe,W,Ct,Rt,It;function Tt(){Ee=new D1(V),Ee.init(),Ct=new SC(V,Ee),Le=new M1(V,Ee,t,Ct),qt=new vC(V,Ee),Le.reversedDepthBuffer&&_&&qt.buffers.depth.setReversed(!0),N=new N1(V),E=new aC,q=new xC(V,Ee,qt,E,Le,Ct,N),gt=new w1(L),yt=new Bb(V),Rt=new S1(V,yt),ht=new U1(V,yt,N,Rt),Xt=new P1(V,ht,yt,Rt,N),Ft=new O1(V,Le,q),bt=new E1(E),wt=new iC(L,gt,Ee,Le,Rt,bt),Qt=new AC(L,E),ee=new sC,At=new hC(Ee),Ot=new x1(L,gt,qt,Xt,b,m),Pt=new _C(L,Xt,Le),It=new RC(V,N,Le,qt),fe=new y1(V,Ee,N),W=new L1(V,Ee,N),N.programs=wt.programs,L.capabilities=Le,L.extensions=Ee,L.properties=E,L.renderLists=ee,L.shadowMap=Pt,L.state=qt,L.info=N}Tt(),w!==gi&&(T=new I1(w,i.width,i.height,l,u));const ut=new bC(L,V);this.xr=ut,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=Ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(C){C!==void 0&&(ft=C,this.setSize(P,Y,!1))},this.getSize=function(C){return C.set(P,Y)},this.setSize=function(C,X,rt=!0){if(ut.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,Y=X,i.width=Math.floor(C*ft),i.height=Math.floor(X*ft),rt===!0&&(i.style.width=C+"px",i.style.height=X+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(P*ft,Y*ft).floor()},this.setDrawingBufferSize=function(C,X,rt){P=C,Y=X,ft=rt,i.width=Math.floor(C*rt),i.height=Math.floor(X*rt),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(w===gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(O)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,X,rt,nt){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,X,rt,nt),qt.viewport(O.copy(Z).multiplyScalar(ft).round())},this.getScissor=function(C){return C.copy(mt)},this.setScissor=function(C,X,rt,nt){C.isVector4?mt.set(C.x,C.y,C.z,C.w):mt.set(C,X,rt,nt),qt.scissor(I.copy(mt).multiplyScalar(ft).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(C){qt.setScissorTest(Mt=C)},this.setOpaqueSort=function(C){xt=C},this.setTransparentSort=function(C){Ut=C},this.getClearColor=function(C){return C.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,rt=!0){let nt=0;if(C){let K=!1;if(it!==null){const Dt=it.texture.format;K=y.has(Dt)}if(K){const Dt=it.texture.type,zt=x.has(Dt),Lt=Ot.getClearColor(),Wt=Ot.getClearAlpha(),jt=Lt.r,ne=Lt.g,se=Lt.b;zt?(R[0]=jt,R[1]=ne,R[2]=se,R[3]=Wt,V.clearBufferuiv(V.COLOR,0,R)):(D[0]=jt,D[1]=ne,D[2]=se,D[3]=Wt,V.clearBufferiv(V.COLOR,0,D))}else nt|=V.COLOR_BUFFER_BIT}X&&(nt|=V.DEPTH_BUFFER_BIT),rt&&(nt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&V.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ht,!1),i.removeEventListener("webglcontextrestored",ie,!1),i.removeEventListener("webglcontextcreationerror",Oe,!1),Ot.dispose(),ee.dispose(),At.dispose(),E.dispose(),gt.dispose(),Xt.dispose(),Rt.dispose(),It.dispose(),wt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Hr),ut.removeEventListener("sessionend",Gr),Ui.stop()};function Ht(C){C.preventDefault(),C_("WebGLRenderer: Context Lost."),ct=!0}function ie(){C_("WebGLRenderer: Context Restored."),ct=!1;const C=N.autoReset,X=Pt.enabled,rt=Pt.autoUpdate,nt=Pt.needsUpdate,K=Pt.type;Tt(),N.autoReset=C,Pt.enabled=X,Pt.autoUpdate=rt,Pt.needsUpdate=nt,Pt.type=K}function Oe(C){we("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function be(C){const X=C.target;X.removeEventListener("dispose",be),Un(X)}function Un(C){vi(C),E.remove(C)}function vi(C){const X=E.get(C).programs;X!==void 0&&(X.forEach(function(rt){wt.releaseProgram(rt)}),C.isShaderMaterial&&wt.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,rt,nt,K,Dt){X===null&&(X=De);const zt=K.isMesh&&K.matrixWorld.determinant()<0,Lt=fl(C,X,rt,nt,K);qt.setMaterial(nt,zt);let Wt=rt.index,jt=1;if(nt.wireframe===!0){if(Wt=ht.getWireframeAttribute(rt),Wt===void 0)return;jt=2}const ne=rt.drawRange,se=rt.attributes.position;let Gt=ne.start*jt,he=(ne.start+ne.count)*jt;Dt!==null&&(Gt=Math.max(Gt,Dt.start*jt),he=Math.min(he,(Dt.start+Dt.count)*jt)),Wt!==null?(Gt=Math.max(Gt,0),he=Math.min(he,Wt.count)):se!=null&&(Gt=Math.max(Gt,0),he=Math.min(he,se.count));const je=he-Gt;if(je<0||je===1/0)return;Rt.setup(K,nt,Lt,rt,Wt);let Ze,Ae=fe;if(Wt!==null&&(Ze=yt.get(Wt),Ae=W,Ae.setIndex(Ze)),K.isMesh)nt.wireframe===!0?(qt.setLineWidth(nt.wireframeLinewidth*Qe()),Ae.setMode(V.LINES)):Ae.setMode(V.TRIANGLES);else if(K.isLine){let mn=nt.linewidth;mn===void 0&&(mn=1),qt.setLineWidth(mn*Qe()),K.isLineSegments?Ae.setMode(V.LINES):K.isLineLoop?Ae.setMode(V.LINE_LOOP):Ae.setMode(V.LINE_STRIP)}else K.isPoints?Ae.setMode(V.POINTS):K.isSprite&&Ae.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)lc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Ae.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const mn=K._multiDrawStarts,kt=K._multiDrawCounts,Ln=K._multiDrawCount,re=Wt?yt.get(Wt).bytesPerElement:1,Nn=E.get(nt).currentProgram.getUniforms();for(let jn=0;jn<Ln;jn++)Nn.setValue(V,"_gl_DrawID",jn),Ae.render(mn[jn]/re,kt[jn])}else if(K.isInstancedMesh)Ae.renderInstances(Gt,je,K.count);else if(rt.isInstancedBufferGeometry){const mn=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,kt=Math.min(rt.instanceCount,mn);Ae.renderInstances(Gt,je,kt)}else Ae.render(Gt,je)};function Ys(C,X,rt){C.transparent===!0&&C.side===_a&&C.forceSinglePass===!1?(C.side=Wn,C.needsUpdate=!0,Ra(C,X,rt),C.side=or,C.needsUpdate=!0,Ra(C,X,rt),C.side=_a):Ra(C,X,rt)}this.compile=function(C,X,rt=null){rt===null&&(rt=C),H=At.get(rt),H.init(X),F.push(H),rt.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(H.pushLight(K),K.castShadow&&H.pushShadow(K))}),C!==rt&&C.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(H.pushLight(K),K.castShadow&&H.pushShadow(K))}),H.setupLights();const nt=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Dt=K.material;if(Dt)if(Array.isArray(Dt))for(let zt=0;zt<Dt.length;zt++){const Lt=Dt[zt];Ys(Lt,rt,K),nt.add(Lt)}else Ys(Dt,rt,K),nt.add(Dt)}),H=F.pop(),nt},this.compileAsync=function(C,X,rt=null){const nt=this.compile(C,X,rt);return new Promise(K=>{function Dt(){if(nt.forEach(function(zt){E.get(zt).currentProgram.isReady()&&nt.delete(zt)}),nt.size===0){K(C);return}setTimeout(Dt,10)}Ee.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let zr=null;function ll(C){zr&&zr(C)}function Hr(){Ui.stop()}function Gr(){Ui.start()}const Ui=new px;Ui.setAnimationLoop(ll),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(C){zr=C,ut.setAnimationLoop(C),C===null?Ui.stop():Ui.start()},ut.addEventListener("sessionstart",Hr),ut.addEventListener("sessionend",Gr),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ct===!0)return;const rt=ut.enabled===!0&&ut.isPresenting===!0,nt=T!==null&&(it===null||rt)&&T.begin(L,it);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(X),X=ut.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,X,it),H=At.get(C,F.length),H.init(X),F.push(H),Xe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Bt.setFromProjectionMatrix(Xe,Hi,X.reversedDepth),$t=this.localClippingEnabled,Kt=bt.init(this.clippingPlanes,$t),U=ee.get(C,B.length),U.init(),B.push(U),ut.enabled===!0&&ut.isPresenting===!0){const zt=L.xr.getDepthSensingMesh();zt!==null&&Vr(zt,X,-1/0,L.sortObjects)}Vr(C,X,0,L.sortObjects),U.finish(),L.sortObjects===!0&&U.sort(xt,Ut),le=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,le&&Ot.addToRenderList(U,C),this.info.render.frame++,Kt===!0&&bt.beginShadows();const K=H.state.shadowsArray;if(Pt.render(K,C,X),Kt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(nt&&T.hasRenderPass())===!1){const zt=U.opaque,Lt=U.transmissive;if(H.setupLights(),X.isArrayCamera){const Wt=X.cameras;if(Lt.length>0)for(let jt=0,ne=Wt.length;jt<ne;jt++){const se=Wt[jt];sn(zt,Lt,C,se)}le&&Ot.render(C);for(let jt=0,ne=Wt.length;jt<ne;jt++){const se=Wt[jt];xi(U,C,se,se.viewport)}}else Lt.length>0&&sn(zt,Lt,C,X),le&&Ot.render(C),xi(U,C,X)}it!==null&&tt===0&&(q.updateMultisampleRenderTarget(it),q.updateRenderTargetMipmap(it)),nt&&T.end(L),C.isScene===!0&&C.onAfterRender(L,C,X),Rt.resetDefaultState(),lt=-1,Q=null,F.pop(),F.length>0?(H=F[F.length-1],Kt===!0&&bt.setGlobalState(L.clippingPlanes,H.state.camera)):H=null,B.pop(),B.length>0?U=B[B.length-1]:U=null};function Vr(C,X,rt,nt){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)rt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)H.pushLight(C),C.castShadow&&H.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Bt.intersectsSprite(C)){nt&&ge.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Xe);const zt=Xt.update(C),Lt=C.material;Lt.visible&&U.push(C,zt,Lt,rt,ge.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Bt.intersectsObject(C))){const zt=Xt.update(C),Lt=C.material;if(nt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ge.copy(C.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),ge.copy(zt.boundingSphere.center)),ge.applyMatrix4(C.matrixWorld).applyMatrix4(Xe)),Array.isArray(Lt)){const Wt=zt.groups;for(let jt=0,ne=Wt.length;jt<ne;jt++){const se=Wt[jt],Gt=Lt[se.materialIndex];Gt&&Gt.visible&&U.push(C,zt,Gt,rt,ge.z,se)}}else Lt.visible&&U.push(C,zt,Lt,rt,ge.z,null)}}const Dt=C.children;for(let zt=0,Lt=Dt.length;zt<Lt;zt++)Vr(Dt[zt],X,rt,nt)}function xi(C,X,rt,nt){const{opaque:K,transmissive:Dt,transparent:zt}=C;H.setupLightsView(rt),Kt===!0&&bt.setGlobalState(L.clippingPlanes,rt),nt&&qt.viewport(O.copy(nt)),K.length>0&&pn(K,X,rt),Dt.length>0&&pn(Dt,X,rt),zt.length>0&&pn(zt,X,rt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function sn(C,X,rt,nt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(H.state.transmissionRenderTarget[nt.id]===void 0){const Gt=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");H.state.transmissionRenderTarget[nt.id]=new Vi(1,1,{generateMipmaps:!0,type:Gt?Ea:gi,minFilter:Pr,samples:Le.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Dt=H.state.transmissionRenderTarget[nt.id],zt=nt.viewport||O;Dt.setSize(zt.z*L.transmissionResolutionScale,zt.w*L.transmissionResolutionScale);const Lt=L.getRenderTarget(),Wt=L.getActiveCubeFace(),jt=L.getActiveMipmapLevel();L.setRenderTarget(Dt),L.getClearColor(pt),Et=L.getClearAlpha(),Et<1&&L.setClearColor(16777215,.5),L.clear(),le&&Ot.render(rt);const ne=L.toneMapping;L.toneMapping=Gi;const se=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),H.setupLightsView(nt),Kt===!0&&bt.setGlobalState(L.clippingPlanes,nt),pn(C,rt,nt),q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let he=0,je=X.length;he<je;he++){const Ze=X[he],{object:Ae,geometry:mn,material:kt,group:Ln}=Ze;if(kt.side===_a&&Ae.layers.test(nt.layers)){const re=kt.side;kt.side=Wn,kt.needsUpdate=!0,Yi(Ae,rt,nt,mn,kt,Ln),kt.side=re,kt.needsUpdate=!0,Gt=!0}}Gt===!0&&(q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt))}L.setRenderTarget(Lt,Wt,jt),L.setClearColor(pt,Et),se!==void 0&&(nt.viewport=se),L.toneMapping=ne}function pn(C,X,rt){const nt=X.isScene===!0?X.overrideMaterial:null;for(let K=0,Dt=C.length;K<Dt;K++){const zt=C[K],{object:Lt,geometry:Wt,group:jt}=zt;let ne=zt.material;ne.allowOverride===!0&&nt!==null&&(ne=nt),Lt.layers.test(rt.layers)&&Yi(Lt,X,rt,Wt,ne,jt)}}function Yi(C,X,rt,nt,K,Dt){C.onBeforeRender(L,X,rt,nt,K,Dt),C.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(L,X,rt,nt,C,Dt),K.transparent===!0&&K.side===_a&&K.forceSinglePass===!1?(K.side=Wn,K.needsUpdate=!0,L.renderBufferDirect(rt,X,nt,K,C,Dt),K.side=or,K.needsUpdate=!0,L.renderBufferDirect(rt,X,nt,K,C,Dt),K.side=_a):L.renderBufferDirect(rt,X,nt,K,C,Dt),C.onAfterRender(L,X,rt,nt,K,Dt)}function Ra(C,X,rt){X.isScene!==!0&&(X=De);const nt=E.get(C),K=H.state.lights,Dt=H.state.shadowsArray,zt=K.state.version,Lt=wt.getParameters(C,K.state,Dt,X,rt),Wt=wt.getProgramCacheKey(Lt);let jt=nt.programs;nt.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?X.environment:null,nt.fog=X.fog;const ne=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;nt.envMap=gt.get(C.envMap||nt.environment,ne),nt.envMapRotation=nt.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,jt===void 0&&(C.addEventListener("dispose",be),jt=new Map,nt.programs=jt);let se=jt.get(Wt);if(se!==void 0){if(nt.currentProgram===se&&nt.lightsStateVersion===zt)return cl(C,Lt),se}else Lt.uniforms=wt.getUniforms(C),C.onBeforeCompile(Lt,L),se=wt.acquireProgram(Lt,Wt),jt.set(Wt,se),nt.uniforms=Lt.uniforms;const Gt=nt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Gt.clippingPlanes=bt.uniform),cl(C,Lt),nt.needsLights=js(C),nt.lightsStateVersion=zt,nt.needsLights&&(Gt.ambientLightColor.value=K.state.ambient,Gt.lightProbe.value=K.state.probe,Gt.directionalLights.value=K.state.directional,Gt.directionalLightShadows.value=K.state.directionalShadow,Gt.spotLights.value=K.state.spot,Gt.spotLightShadows.value=K.state.spotShadow,Gt.rectAreaLights.value=K.state.rectArea,Gt.ltc_1.value=K.state.rectAreaLTC1,Gt.ltc_2.value=K.state.rectAreaLTC2,Gt.pointLights.value=K.state.point,Gt.pointLightShadows.value=K.state.pointShadow,Gt.hemisphereLights.value=K.state.hemi,Gt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Gt.spotLightMatrix.value=K.state.spotLightMatrix,Gt.spotLightMap.value=K.state.spotLightMap,Gt.pointShadowMatrix.value=K.state.pointShadowMatrix),nt.currentProgram=se,nt.uniformsList=null,se}function ul(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=nc.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function cl(C,X){const rt=E.get(C);rt.outputColorSpace=X.outputColorSpace,rt.batching=X.batching,rt.batchingColor=X.batchingColor,rt.instancing=X.instancing,rt.instancingColor=X.instancingColor,rt.instancingMorph=X.instancingMorph,rt.skinning=X.skinning,rt.morphTargets=X.morphTargets,rt.morphNormals=X.morphNormals,rt.morphColors=X.morphColors,rt.morphTargetsCount=X.morphTargetsCount,rt.numClippingPlanes=X.numClippingPlanes,rt.numIntersection=X.numClipIntersection,rt.vertexAlphas=X.vertexAlphas,rt.vertexTangents=X.vertexTangents,rt.toneMapping=X.toneMapping}function fl(C,X,rt,nt,K){X.isScene!==!0&&(X=De),q.resetTextureUnits();const Dt=X.fog,zt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?X.environment:null,Lt=it===null?L.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Hs,Wt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,jt=gt.get(nt.envMap||zt,Wt),ne=nt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,se=!!rt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Gt=!!rt.morphAttributes.position,he=!!rt.morphAttributes.normal,je=!!rt.morphAttributes.color;let Ze=Gi;nt.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ze=L.toneMapping);const Ae=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,mn=Ae!==void 0?Ae.length:0,kt=E.get(nt),Ln=H.state.lights;if(Kt===!0&&($t===!0||C!==Q)){const ln=C===Q&&nt.id===lt;bt.setState(nt,C,ln)}let re=!1;nt.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ln.state.version||kt.outputColorSpace!==Lt||K.isBatchedMesh&&kt.batching===!1||!K.isBatchedMesh&&kt.batching===!0||K.isBatchedMesh&&kt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&kt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&kt.instancing===!1||!K.isInstancedMesh&&kt.instancing===!0||K.isSkinnedMesh&&kt.skinning===!1||!K.isSkinnedMesh&&kt.skinning===!0||K.isInstancedMesh&&kt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&kt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&kt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&kt.instancingMorph===!1&&K.morphTexture!==null||kt.envMap!==jt||nt.fog===!0&&kt.fog!==Dt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==bt.numPlanes||kt.numIntersection!==bt.numIntersection)||kt.vertexAlphas!==ne||kt.vertexTangents!==se||kt.morphTargets!==Gt||kt.morphNormals!==he||kt.morphColors!==je||kt.toneMapping!==Ze||kt.morphTargetsCount!==mn)&&(re=!0):(re=!0,kt.__version=nt.version);let Nn=kt.currentProgram;re===!0&&(Nn=Ra(nt,X,K));let jn=!1,Si=!1,Zn=!1;const Ne=Nn.getUniforms(),on=kt.uniforms;if(qt.useProgram(Nn.program)&&(jn=!0,Si=!0,Zn=!0),nt.id!==lt&&(lt=nt.id,Si=!0),jn||Q!==C){qt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ne.setValue(V,"projectionMatrix",C.projectionMatrix),Ne.setValue(V,"viewMatrix",C.matrixWorldInverse);const yi=Ne.map.cameraPosition;yi!==void 0&&yi.setValue(V,ue.setFromMatrixPosition(C.matrixWorld)),Le.logarithmicDepthBuffer&&Ne.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ne.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),Q!==C&&(Q=C,Si=!0,Zn=!0)}if(kt.needsLights&&(Ln.state.directionalShadowMap.length>0&&Ne.setValue(V,"directionalShadowMap",Ln.state.directionalShadowMap,q),Ln.state.spotShadowMap.length>0&&Ne.setValue(V,"spotShadowMap",Ln.state.spotShadowMap,q),Ln.state.pointShadowMap.length>0&&Ne.setValue(V,"pointShadowMap",Ln.state.pointShadowMap,q)),K.isSkinnedMesh){Ne.setOptional(V,K,"bindMatrix"),Ne.setOptional(V,K,"bindMatrixInverse");const ln=K.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Ne.setValue(V,"boneTexture",ln.boneTexture,q))}K.isBatchedMesh&&(Ne.setOptional(V,K,"batchingTexture"),Ne.setValue(V,"batchingTexture",K._matricesTexture,q),Ne.setOptional(V,K,"batchingIdTexture"),Ne.setValue(V,"batchingIdTexture",K._indirectTexture,q),Ne.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Ne.setValue(V,"batchingColorTexture",K._colorsTexture,q));const On=rt.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Ft.update(K,rt,Nn),(Si||kt.receiveShadow!==K.receiveShadow)&&(kt.receiveShadow=K.receiveShadow,Ne.setValue(V,"receiveShadow",K.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&X.environment!==null&&(on.envMapIntensity.value=X.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=wC()),Si&&(Ne.setValue(V,"toneMappingExposure",L.toneMappingExposure),kt.needsLights&&lr(on,Zn),Dt&&nt.fog===!0&&Qt.refreshFogUniforms(on,Dt),Qt.refreshMaterialUniforms(on,nt,ft,Y,H.state.transmissionRenderTarget[C.id]),nc.upload(V,ul(kt),on,q)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(nc.upload(V,ul(kt),on,q),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ne.setValue(V,"center",K.center),Ne.setValue(V,"modelViewMatrix",K.modelViewMatrix),Ne.setValue(V,"normalMatrix",K.normalMatrix),Ne.setValue(V,"modelMatrix",K.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const ln=nt.uniformsGroups;for(let yi=0,ji=ln.length;yi<ji;yi++){const kr=ln[yi];It.update(kr,Nn),It.bind(kr,Nn)}}return Nn}function lr(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function js(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(C,X,rt){const nt=E.get(C);nt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=X,E.get(C.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:rt,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const rt=E.get(C);rt.__webglFramebuffer=X,rt.__useDefaultFramebuffer=X===void 0};const Ca=V.createFramebuffer();this.setRenderTarget=function(C,X=0,rt=0){it=C,G=X,tt=rt;let nt=null,K=!1,Dt=!1;if(C){const Lt=E.get(C);if(Lt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(V.FRAMEBUFFER,Lt.__webglFramebuffer),O.copy(C.viewport),I.copy(C.scissor),ot=C.scissorTest,qt.viewport(O),qt.scissor(I),qt.setScissorTest(ot),lt=-1;return}else if(Lt.__webglFramebuffer===void 0)q.setupRenderTarget(C);else if(Lt.__hasExternalTextures)q.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ne=C.depthTexture;if(Lt.__boundDepthTexture!==ne){if(ne!==null&&E.has(ne)&&(C.width!==ne.image.width||C.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(C)}}const Wt=C.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Dt=!0);const jt=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(jt[X])?nt=jt[X][rt]:nt=jt[X],K=!0):C.samples>0&&q.useMultisampledRTT(C)===!1?nt=E.get(C).__webglMultisampledFramebuffer:Array.isArray(jt)?nt=jt[rt]:nt=jt,O.copy(C.viewport),I.copy(C.scissor),ot=C.scissorTest}else O.copy(Z).multiplyScalar(ft).floor(),I.copy(mt).multiplyScalar(ft).floor(),ot=Mt;if(rt!==0&&(nt=Ca),qt.bindFramebuffer(V.FRAMEBUFFER,nt)&&qt.drawBuffers(C,nt),qt.viewport(O),qt.scissor(I),qt.setScissorTest(ot),K){const Lt=E.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Lt.__webglTexture,rt)}else if(Dt){const Lt=X;for(let Wt=0;Wt<C.textures.length;Wt++){const jt=E.get(C.textures[Wt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Wt,jt.__webglTexture,rt,Lt)}}else if(C!==null&&rt!==0){const Lt=E.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Lt.__webglTexture,rt)}lt=-1},this.readRenderTargetPixels=function(C,X,rt,nt,K,Dt,zt,Lt=0){if(!(C&&C.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&zt!==void 0&&(Wt=Wt[zt]),Wt){qt.bindFramebuffer(V.FRAMEBUFFER,Wt);try{const jt=C.textures[Lt],ne=jt.format,se=jt.type;if(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),!Le.textureFormatReadable(ne)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(se)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-nt&&rt>=0&&rt<=C.height-K&&V.readPixels(X,rt,nt,K,Ct.convert(ne),Ct.convert(se),Dt)}finally{const jt=it!==null?E.get(it).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(C,X,rt,nt,K,Dt,zt,Lt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&zt!==void 0&&(Wt=Wt[zt]),Wt)if(X>=0&&X<=C.width-nt&&rt>=0&&rt<=C.height-K){qt.bindFramebuffer(V.FRAMEBUFFER,Wt);const jt=C.textures[Lt],ne=jt.format,se=jt.type;if(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),!Le.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Gt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Gt),V.bufferData(V.PIXEL_PACK_BUFFER,Dt.byteLength,V.STREAM_READ),V.readPixels(X,rt,nt,K,Ct.convert(ne),Ct.convert(se),0);const he=it!==null?E.get(it).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,he);const je=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await tb(V,je,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Gt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Dt),V.deleteBuffer(Gt),V.deleteSync(je),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,rt=0){const nt=Math.pow(2,-rt),K=Math.floor(C.image.width*nt),Dt=Math.floor(C.image.height*nt),zt=X!==null?X.x:0,Lt=X!==null?X.y:0;q.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,rt,0,0,zt,Lt,K,Dt),qt.unbindTexture()};const wa=V.createFramebuffer(),ur=V.createFramebuffer();this.copyTextureToTexture=function(C,X,rt=null,nt=null,K=0,Dt=0){let zt,Lt,Wt,jt,ne,se,Gt,he,je;const Ze=C.isCompressedTexture?C.mipmaps[Dt]:C.image;if(rt!==null)zt=rt.max.x-rt.min.x,Lt=rt.max.y-rt.min.y,Wt=rt.isBox3?rt.max.z-rt.min.z:1,jt=rt.min.x,ne=rt.min.y,se=rt.isBox3?rt.min.z:0;else{const on=Math.pow(2,-K);zt=Math.floor(Ze.width*on),Lt=Math.floor(Ze.height*on),C.isDataArrayTexture?Wt=Ze.depth:C.isData3DTexture?Wt=Math.floor(Ze.depth*on):Wt=1,jt=0,ne=0,se=0}nt!==null?(Gt=nt.x,he=nt.y,je=nt.z):(Gt=0,he=0,je=0);const Ae=Ct.convert(X.format),mn=Ct.convert(X.type);let kt;X.isData3DTexture?(q.setTexture3D(X,0),kt=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(q.setTexture2DArray(X,0),kt=V.TEXTURE_2D_ARRAY):(q.setTexture2D(X,0),kt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const Ln=V.getParameter(V.UNPACK_ROW_LENGTH),re=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Nn=V.getParameter(V.UNPACK_SKIP_PIXELS),jn=V.getParameter(V.UNPACK_SKIP_ROWS),Si=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ze.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ze.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,jt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ne),V.pixelStorei(V.UNPACK_SKIP_IMAGES,se);const Zn=C.isDataArrayTexture||C.isData3DTexture,Ne=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const on=E.get(C),On=E.get(X),ln=E.get(on.__renderTarget),yi=E.get(On.__renderTarget);qt.bindFramebuffer(V.READ_FRAMEBUFFER,ln.__webglFramebuffer),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let ji=0;ji<Wt;ji++)Zn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(C).__webglTexture,K,se+ji),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(X).__webglTexture,Dt,je+ji)),V.blitFramebuffer(jt,ne,zt,Lt,Gt,he,zt,Lt,V.DEPTH_BUFFER_BIT,V.NEAREST);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||E.has(C)){const on=E.get(C),On=E.get(X);qt.bindFramebuffer(V.READ_FRAMEBUFFER,wa),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,ur);for(let ln=0;ln<Wt;ln++)Zn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,on.__webglTexture,K,se+ln):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,on.__webglTexture,K),Ne?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,On.__webglTexture,Dt,je+ln):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,On.__webglTexture,Dt),K!==0?V.blitFramebuffer(jt,ne,zt,Lt,Gt,he,zt,Lt,V.COLOR_BUFFER_BIT,V.NEAREST):Ne?V.copyTexSubImage3D(kt,Dt,Gt,he,je+ln,jt,ne,zt,Lt):V.copyTexSubImage2D(kt,Dt,Gt,he,jt,ne,zt,Lt);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ne?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(kt,Dt,Gt,he,je,zt,Lt,Wt,Ae,mn,Ze.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(kt,Dt,Gt,he,je,zt,Lt,Wt,Ae,Ze.data):V.texSubImage3D(kt,Dt,Gt,he,je,zt,Lt,Wt,Ae,mn,Ze):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Dt,Gt,he,zt,Lt,Ae,mn,Ze.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Dt,Gt,he,Ze.width,Ze.height,Ae,Ze.data):V.texSubImage2D(V.TEXTURE_2D,Dt,Gt,he,zt,Lt,Ae,mn,Ze);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ln),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,re),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Nn),V.pixelStorei(V.UNPACK_SKIP_ROWS,jn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Si),Dt===0&&X.generateMipmaps&&V.generateMipmap(kt),qt.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?q.setTextureCube(C,0):C.isData3DTexture?q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?q.setTexture2DArray(C,0):q.setTexture2D(C,0),qt.unbindTexture()},this.resetState=function(){G=0,tt=0,it=null,qt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}function UC(){const s=_t.useRef(null);return _t.useEffect(()=>{const t=s.current;if(!t)return;const i=new DC({canvas:t,antialias:!0,alpha:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2));const r=new gb,l=new mi(60,1,.1,100);l.position.z=5;const u=5,f=.001;let p=0;const m=11075654,d=54527,g=8069026,v=.3,_=160,M=60,b=2.2,w=.015,y=.01,x=.3,R=.8,D=5.5,U=[],H=[],B=new hc(w,16,16),F=new hc(y,16,16),T=new uc({color:m}),L=new uc({color:d});for(let ft=0;ft<_;ft++){const Ut=Math.random()<v?L:T,Z=new Di(B,Ut),mt=new et((Math.random()-.5)*D*2,(Math.random()-.5)*D*2,(Math.random()-.5)*D*2);Z.position.copy(mt);const Mt=new et((Math.random()-.5)*x,(Math.random()-.5)*x,(Math.random()-.5)*x);r.add(Z),U.push({position:mt,velocity:Mt,mesh:Z})}for(let ft=0;ft<M;ft++){const Ut=Math.random()<v?L:T,Z=new Di(F,Ut),mt=new et((Math.random()-.5)*D*2,(Math.random()-.5)*D*2,(Math.random()-.5)*D*2);Z.position.copy(mt);const Mt=new et((Math.random()-.5)*R,(Math.random()-.5)*R,(Math.random()-.5)*R);r.add(Z),H.push({position:mt,velocity:Mt,mesh:Z})}const ct=new Yn,G=new ec({color:m,transparent:!0,opacity:.3}),tt=new od(ct,G);r.add(tt);const it=new Yn,lt=new ec({color:d,transparent:!0,opacity:.3}),Q=new od(it,lt);r.add(Q);const O=new Yn,I=new ec({color:g,transparent:!0,opacity:.3}),ot=new od(O,I);r.add(ot);const pt=()=>{const ft=[],xt=[],Ut=[];for(let Z=0;Z<U.length;Z++)for(let mt=Z+1;mt<U.length;mt++){const Mt=U[Z],Bt=U[mt];if(Mt.position.distanceTo(Bt.position)<b){const $t=Mt.mesh.material===T,Xe=Bt.mesh.material===T;let ue;$t&&Xe?ue=ft:!$t&&!Xe?ue=xt:ue=Ut,ue.push(Mt.position.x,Mt.position.y,Mt.position.z),ue.push(Bt.position.x,Bt.position.y,Bt.position.z)}}ct.setAttribute("position",new An(ft,3)),it.setAttribute("position",new An(xt,3)),O.setAttribute("position",new An(Ut,3))},Et=()=>{const{clientWidth:ft,clientHeight:xt}=t;i.setSize(ft,xt,!1),l.aspect=ft/Math.max(xt,1),l.updateProjectionMatrix()};Et(),window.addEventListener("resize",Et);let P=0;const Y=()=>{p+=f,l.position.x=Math.cos(p)*u,l.position.z=Math.sin(p)*u,l.lookAt(0,0,0);const ft=(xt,Ut)=>{xt.position.add(xt.velocity.clone().multiplyScalar(Ut)),Math.abs(xt.position.x)>D&&(xt.velocity.x*=-1,xt.position.x=Math.sign(xt.position.x)*D),Math.abs(xt.position.y)>D&&(xt.velocity.y*=-1,xt.position.y=Math.sign(xt.position.y)*D),Math.abs(xt.position.z)>D&&(xt.velocity.z*=-1,xt.position.z=Math.sign(xt.position.z)*D),xt.mesh.position.copy(xt.position)};U.forEach(xt=>ft(xt,.01)),H.forEach(xt=>ft(xt,.01)),pt(),i.render(r,l),P=requestAnimationFrame(Y)};return Y(),()=>{window.removeEventListener("resize",Et),cancelAnimationFrame(P),B.dispose(),F.dispose(),T.dispose(),L.dispose(),ct.dispose(),G.dispose(),it.dispose(),lt.dispose(),O.dispose(),I.dispose(),i.dispose()}},[]),Zt.jsx("canvas",{ref:s,className:"background-canvas"})}function LC(){return Zt.jsxs(Zt.Fragment,{children:[Zt.jsx("div",{className:"background-container",children:Zt.jsx(UC,{})}),Zt.jsxs(DM,{children:[Zt.jsx(jo,{path:"/",element:Zt.jsx(mE,{})}),Zt.jsx(jo,{path:"/blog",element:Zt.jsx(_E,{})}),Zt.jsx(jo,{path:"/projects",element:Zt.jsx(vE,{})}),Zt.jsx(jo,{path:"/wip",element:Zt.jsx(gE,{})})]})]})}Ny.createRoot(document.getElementById("root")).render(Zt.jsx(_t.StrictMode,{children:Zt.jsx(tE,{children:Zt.jsx(LC,{})})}));
