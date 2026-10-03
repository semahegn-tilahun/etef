(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))o(p);new MutationObserver(p=>{for(const x of p)if(x.type==="childList")for(const E of x.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&o(E)}).observe(document,{childList:!0,subtree:!0});function u(p){const x={};return p.integrity&&(x.integrity=p.integrity),p.referrerPolicy&&(x.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?x.credentials="include":p.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function o(p){if(p.ep)return;p.ep=!0;const x=u(p);fetch(p.href,x)}})();function Mg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ed={exports:{}},se={};var Fm;function Ng(){if(Fm)return se;Fm=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),E=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),k=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),M=Symbol.for("react.view_transition"),G=Symbol.iterator;function F(h){return h===null||typeof h!="object"?null:(h=G&&h[G]||h["@@iterator"],typeof h=="function"?h:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,X={};function J(h,O,K){this.props=h,this.context=O,this.refs=X,this.updater=K||U}J.prototype.isReactComponent={},J.prototype.setState=function(h,O){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,O,"setState")},J.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function P(){}P.prototype=J.prototype;function be(h,O,K){this.props=h,this.context=O,this.refs=X,this.updater=K||U}var we=be.prototype=new P;we.constructor=be,N(we,J.prototype),we.isPureReactComponent=!0;var Se=Array.isArray;function le(){}var re={H:null,A:null,T:null,S:null},Pe=Object.prototype.hasOwnProperty;function Ye(h,O,K){var Z=K.ref;return{$$typeof:n,type:h,key:O,ref:Z!==void 0?Z:null,props:K}}function nt(h,O){return Ye(h.type,O,h.props)}function Be(h){return typeof h=="object"&&h!==null&&h.$$typeof===n}function Kt(h){var O={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(K){return O[K]})}var Tt=/\/+/g;function Te(h,O){return typeof h=="object"&&h!==null&&h.key!=null?Kt(""+h.key):O.toString(36)}function q(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(le,le):(h.status="pending",h.then(function(O){h.status==="pending"&&(h.status="fulfilled",h.value=O)},function(O){h.status==="pending"&&(h.status="rejected",h.reason=O)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function I(h,O,K,Z,de){var ve=typeof h;(ve==="undefined"||ve==="boolean")&&(h=null);var fe=!1;if(h===null)fe=!0;else switch(ve){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(h.$$typeof){case n:case c:fe=!0;break;case T:return fe=h._init,I(fe(h._payload),O,K,Z,de)}}if(fe)return de=de(h),fe=Z===""?"."+Te(h,0):Z,Se(de)?(K="",fe!=null&&(K=fe.replace(Tt,"$&/")+"/"),I(de,O,K,"",function(na){return na})):de!=null&&(Be(de)&&(de=nt(de,K+(de.key==null||h&&h.key===de.key?"":(""+de.key).replace(Tt,"$&/")+"/")+fe)),O.push(de)),1;fe=0;var Q=Z===""?".":Z+":";if(Se(h))for(var ae=0;ae<h.length;ae++)Z=h[ae],ve=Q+Te(Z,ae),fe+=I(Z,O,K,ve,de);else if(ae=F(h),typeof ae=="function")for(h=ae.call(h),ae=0;!(Z=h.next()).done;)Z=Z.value,ve=Q+Te(Z,ae++),fe+=I(Z,O,K,ve,de);else if(ve==="object"){if(typeof h.then=="function")return I(q(h),O,K,Z,de);throw O=String(h),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return fe}function W(h,O,K){if(h==null)return h;var Z=[],de=0;return I(h,Z,"","",function(ve){return O.call(K,ve,de++)}),Z}function je(h){if(h._status===-1){var O=h._result,K=O();K.then(function(Z){(h._status===0||h._status===-1)&&(h._status=1,h._result=Z,K.status===void 0&&(K.status="fulfilled",K.value=Z))},function(Z){(h._status===0||h._status===-1)&&(h._status=2,h._result=Z,K.status===void 0&&(K.status="rejected",K.reason=Z))}),h._status===-1&&(h._status=0,h._result=K)}if(h._status===1)return h._result.default;throw h._result}var Ee=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)};function Et(h){var O=re.T,K={};K.types=O!==null?O.types:null,re.T=K;try{var Z=h(),de=re.S;de!==null&&de(K,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(le,Ee)}catch(ve){Ee(ve)}finally{O!==null&&K.types!==null&&(O.types=K.types),re.T=O}}function $t(h){var O=re.T;if(O!==null){var K=O.types;K===null?O.types=[h]:K.indexOf(h)===-1&&K.push(h)}else Et($t.bind(null,h))}var xa={map:W,forEach:function(h,O,K){W(h,function(){O.apply(this,arguments)},K)},count:function(h){var O=0;return W(h,function(){O++}),O},toArray:function(h){return W(h,function(O){return O})||[]},only:function(h){if(!Be(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return se.Activity=m,se.Children=xa,se.Component=J,se.Fragment=u,se.Profiler=p,se.PureComponent=be,se.StrictMode=o,se.Suspense=C,se.ViewTransition=M,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=re,se.__COMPILER_RUNTIME={__proto__:null,c:function(h){return re.H.useMemoCache(h)}},se.addTransitionType=$t,se.cache=function(h){return function(){return h.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(h,O,K){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var Z=N({},h.props),de=h.key;if(O!=null)for(ve in O.key!==void 0&&(de=""+O.key),O)!Pe.call(O,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&O.ref===void 0||(Z[ve]=O[ve]);var ve=arguments.length-2;if(ve===1)Z.children=K;else if(1<ve){for(var fe=Array(ve),Q=0;Q<ve;Q++)fe[Q]=arguments[Q+2];Z.children=fe}return Ye(h.type,de,Z)},se.createContext=function(h){return h={$$typeof:E,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:x,_context:h},h},se.createElement=function(h,O,K){var Z,de={},ve=null;if(O!=null)for(Z in O.key!==void 0&&(ve=""+O.key),O)Pe.call(O,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(de[Z]=O[Z]);var fe=arguments.length-2;if(fe===1)de.children=K;else if(1<fe){for(var Q=Array(fe),ae=0;ae<fe;ae++)Q[ae]=arguments[ae+2];de.children=Q}if(h&&h.defaultProps)for(Z in fe=h.defaultProps,fe)de[Z]===void 0&&(de[Z]=fe[Z]);return Ye(h,ve,de)},se.createRef=function(){return{current:null}},se.forwardRef=function(h){return{$$typeof:b,render:h}},se.isValidElement=Be,se.lazy=function(h){return{$$typeof:T,_payload:{_status:-1,_result:h},_init:je}},se.memo=function(h,O){return{$$typeof:k,type:h,compare:O===void 0?null:O}},se.startTransition=Et,se.unstable_useCacheRefresh=function(){return re.H.useCacheRefresh()},se.use=function(h){return re.H.use(h)},se.useActionState=function(h,O,K){return re.H.useActionState(h,O,K)},se.useCallback=function(h,O){return re.H.useCallback(h,O)},se.useContext=function(h){return re.H.useContext(h)},se.useDebugValue=function(){},se.useDeferredValue=function(h,O){return re.H.useDeferredValue(h,O)},se.useEffect=function(h,O){return re.H.useEffect(h,O)},se.useEffectEvent=function(h){return re.H.useEffectEvent(h)},se.useId=function(){return re.H.useId()},se.useImperativeHandle=function(h,O,K){return re.H.useImperativeHandle(h,O,K)},se.useInsertionEffect=function(h,O){return re.H.useInsertionEffect(h,O)},se.useLayoutEffect=function(h,O){return re.H.useLayoutEffect(h,O)},se.useMemo=function(h,O){return re.H.useMemo(h,O)},se.useOptimistic=function(h,O){return re.H.useOptimistic(h,O)},se.useReducer=function(h,O,K){return re.H.useReducer(h,O,K)},se.useRef=function(h){return re.H.useRef(h)},se.useState=function(h){return re.H.useState(h)},se.useSyncExternalStore=function(h,O,K){return re.H.useSyncExternalStore(h,O,K)},se.useTransition=function(){return re.H.useTransition()},se.version="19.3.0",se}var Vm;function ud(){return Vm||(Vm=1,ed.exports=Ng()),ed.exports}var D=ud();const Tl=Mg(D);var td={exports:{}},Hi={},ad={exports:{}},ld={};var Qm;function Og(){return Qm||(Qm=1,(function(n){function c(q,I){var W=q.length;q.push(I);e:for(;0<W;){var je=W-1>>>1,Ee=q[je];if(0<p(Ee,I))q[je]=I,q[W]=Ee,W=je;else break e}}function u(q){return q.length===0?null:q[0]}function o(q){if(q.length===0)return null;var I=q[0],W=q.pop();if(W!==I){q[0]=W;e:for(var je=0,Ee=q.length,Et=Ee>>>1;je<Et;){var $t=2*(je+1)-1,xa=q[$t],h=$t+1,O=q[h];if(0>p(xa,W))h<Ee&&0>p(O,xa)?(q[je]=O,q[h]=W,je=h):(q[je]=xa,q[$t]=W,je=$t);else if(h<Ee&&0>p(O,W))q[je]=O,q[h]=W,je=h;else break e}}return I}function p(q,I){var W=q.sortIndex-I.sortIndex;return W!==0?W:q.id-I.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;n.unstable_now=function(){return x.now()}}else{var E=Date,b=E.now();n.unstable_now=function(){return E.now()-b}}var C=[],k=[],T=1,m=null,M=3,G=!1,F=!1,U=!1,N=!1,X=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function be(q){for(var I=u(k);I!==null;){if(I.callback===null)o(k);else if(I.startTime<=q)o(k),I.sortIndex=I.expirationTime,c(C,I);else break;I=u(k)}}function we(q){if(U=!1,be(q),!F)if(u(C)!==null)F=!0,Se||(Se=!0,Be());else{var I=u(k);I!==null&&Te(we,I.startTime-q)}}var Se=!1,le=-1,re=5,Pe=-1;function Ye(){return N?!0:!(n.unstable_now()-Pe<re)}function nt(){if(N=!1,Se){var q=n.unstable_now();Pe=q;var I=!0;try{e:{F=!1,U&&(U=!1,J(le),le=-1),G=!0;var W=M;try{t:{for(be(q),m=u(C);m!==null&&!(m.expirationTime>q&&Ye());){var je=m.callback;if(typeof je=="function"){m.callback=null,M=m.priorityLevel;var Ee=je(m.expirationTime<=q);if(q=n.unstable_now(),typeof Ee=="function"){m.callback=Ee,be(q),I=!0;break t}m===u(C)&&o(C),be(q)}else o(C);m=u(C)}if(m!==null)I=!0;else{var Et=u(k);Et!==null&&Te(we,Et.startTime-q),I=!1}}break e}finally{m=null,M=W,G=!1}I=void 0}}finally{I?Be():Se=!1}}}var Be;if(typeof P=="function")Be=function(){P(nt)};else if(typeof MessageChannel<"u"){var Kt=new MessageChannel,Tt=Kt.port2;Kt.port1.onmessage=nt,Be=function(){Tt.postMessage(null)}}else Be=function(){X(nt,0)};function Te(q,I){le=X(function(){q(n.unstable_now())},I)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(q){q.callback=null},n.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<q?Math.floor(1e3/q):5},n.unstable_getCurrentPriorityLevel=function(){return M},n.unstable_next=function(q){switch(M){case 1:case 2:case 3:var I=3;break;default:I=M}var W=M;M=I;try{return q()}finally{M=W}},n.unstable_requestPaint=function(){N=!0},n.unstable_runWithPriority=function(q,I){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var W=M;M=q;try{return I()}finally{M=W}},n.unstable_scheduleCallback=function(q,I,W){var je=n.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?je+W:je):W=je,q){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=W+Ee,q={id:T++,callback:I,priorityLevel:q,startTime:W,expirationTime:Ee,sortIndex:-1},W>je?(q.sortIndex=W,c(k,q),u(C)===null&&q===u(k)&&(U?(J(le),le=-1):U=!0,Te(we,W-je))):(q.sortIndex=Ee,c(C,q),F||G||(F=!0,Se||(Se=!0,Be()))),q},n.unstable_shouldYield=Ye,n.unstable_wrapCallback=function(q){var I=M;return function(){var W=M;M=I;try{return q.apply(this,arguments)}finally{M=W}}}})(ld)),ld}var Xm;function zg(){return Xm||(Xm=1,ad.exports=Og()),ad.exports}var sd={exports:{}},wt={};var Zm;function Lg(){if(Zm)return wt;Zm=1;var n=ud();function c(T){var m="https://react.dev/errors/"+T;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)m+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+T+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(c(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},p=Symbol.for("react.portal"),x=Symbol.for("react.recoverable"),E=Symbol.for("react.optimistic_key");function b(T,m,M){var G=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:G==null?null:G===E?E:""+G,children:T,containerInfo:m,implementation:M}}var C=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(T,m){if(T==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,wt.browser=function(T){return{$$typeof:x,_reason:T}},wt.createPortal=function(T,m){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(c(299));return b(T,m,null,M)},wt.flushSync=function(T){var m=C.T,M=o.p;try{if(C.T=null,o.p=2,T)return T()}finally{C.T=m,o.p=M,o.d.f()}},wt.preconnect=function(T,m){typeof T=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(T,m))},wt.prefetchDNS=function(T){typeof T=="string"&&o.d.D(T)},wt.preinit=function(T,m){if(typeof T=="string"&&m&&typeof m.as=="string"){var M=m.as,G=k(M,m.crossOrigin),F=typeof m.integrity=="string"?m.integrity:void 0,U=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;M==="style"?o.d.S(T,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:G,integrity:F,fetchPriority:U}):M==="script"&&o.d.X(T,{crossOrigin:G,integrity:F,fetchPriority:U,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},wt.preinitModule=function(T,m){if(typeof T=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var M=k(m.as,m.crossOrigin);o.d.M(T,{crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&o.d.M(T)},wt.preload=function(T,m){if(typeof T=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var M=m.as,G=k(M,m.crossOrigin);o.d.L(T,M,{crossOrigin:G,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},wt.preloadModule=function(T,m){if(typeof T=="string")if(m){var M=k(m.as,m.crossOrigin);o.d.m(T,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else o.d.m(T)},wt.requestFormReset=function(T){o.d.r(T)},wt.unstable_batchedUpdates=function(T,m){return T(m)},wt.useFormState=function(T,m,M){return C.H.useFormState(T,m,M)},wt.useFormStatus=function(){return C.H.useHostTransitionStatus()},wt.version="19.3.0",wt}var Km;function Bg(){if(Km)return sd.exports;Km=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),sd.exports=Lg(),sd.exports}var $m;function Hg(){if($m)return Hi;$m=1;var n=zg(),c=ud(),u=Bg();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function x(e){for(var t=e,a=t;a&&!a.alternate;)t=a,(t.flags&4098)!==0&&(e=t.return),a=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function E(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(x(e)!==e)throw Error(o(188))}function k(e){var t=e.alternate;if(!t){if(t=x(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var s=a.return;if(s===null)break;var i=s.alternate;if(i===null){if(l=s.return,l!==null){a=l;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===a)return C(s),e;if(i===l)return C(s),t;i=i.sibling}throw Error(o(188))}if(a.return!==l.return)a=s,l=i;else{for(var r=!1,d=s.child;d;){if(d===a){r=!0,a=s,l=i;break}if(d===l){r=!0,l=s,a=i;break}d=d.sibling}if(!r){for(d=i.child;d;){if(d===a){r=!0,a=i,l=s;break}if(d===l){r=!0,l=i,a=s;break}d=d.sibling}if(!r)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}function m(e,t,a,l,s,i){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,l,s,i)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&m(e.child,t,a,l,s,i))return!0;e=e.sibling}return!1}function M(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function G(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function F(e){var t=[null,null],a=M(e);return a===null||U(t,e,a.child,{foundSelf:!1}),t}function U(e,t,a,l){for(;a!==null;){if(a===t)l.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(l.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&U(e,t,a.child,l))return!0;a=a.sibling}return!1}function N(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(o(559))}}var X=null,J=null;function P(e,t,a){return e===a?!0:e===t?(X=e,!0):!1}function be(e,t,a){return e===a?(J=e,!1):e===t?(J!==null&&(X=e),!0):!1}function we(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Se(e,t,a){for(var l=0,s=e;s;s=a(s))l++;s=0;for(var i=t;i;i=a(i))s++;for(;0<l-s;)e=a(e),l--;for(;0<s-l;)t=a(t),s--;for(;l--;){if(e===t||t!==null&&e===t.alternate)return e;e=a(e),t=a(t)}return null}var le=Object.assign,re=Symbol.for("react.element"),Pe=Symbol.for("react.transitional.element"),Ye=Symbol.for("react.portal"),nt=Symbol.for("react.fragment"),Be=Symbol.for("react.strict_mode"),Kt=Symbol.for("react.profiler"),Tt=Symbol.for("react.consumer"),Te=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),$t=Symbol.for("react.legacy_hidden"),xa=Symbol.for("react.memo_cache_sentinel"),h=Symbol.for("react.view_transition"),O=Symbol.for("react.recoverable"),K=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=K&&e[K]||e["@@iterator"],typeof e=="function"?e:null)}var de=Symbol.for("react.client.reference");function ve(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===de?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nt:return"Fragment";case Kt:return"Profiler";case Be:return"StrictMode";case I:return"Suspense";case W:return"SuspenseList";case Et:return"Activity";case h:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Ye:return"Portal";case Te:return e.displayName||"Context";case Tt:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case je:return t=e.displayName||null,t!==null?t:ve(e.type)||"Memo";case Ee:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}var fe=Array.isArray,Q=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,na={pending:!1,data:null,method:null,action:null},Ja=[],Ra=-1;function L(e){return{current:e}}function z(e){0>Ra||(e.current=Ja[Ra],Ja[Ra]=null,Ra--)}function H(e,t){Ra++,Ja[Ra]=e.current,e.current=t}var pe=L(null),ie=L(null),ce=L(null),tt=L(null);function Fe(e,t){switch(H(ce,t),H(ie,e),H(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?If(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=If(t),e=Wf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(pe),H(pe,e)}function Ie(){z(pe),z(ie),z(ce)}function ba(e){var t=e.memoizedState;t!==null&&(Bs._currentValue=t.memoizedState,H(tt,e)),t=pe.current;var a=Wf(t,e.type);t!==a&&(H(ie,e),H(pe,a))}function qe(e){ie.current===e&&(z(pe),z(ie)),tt.current===e&&(z(tt),Bs._currentValue=na)}var ke,ot;function at(e){if(ke===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ke=t&&t[1]||"",ot=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ke+e+ot}var mt=!1;function We(e,t){if(!e||mt)return"";mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(B){var v=B}Reflect.construct(e,[],_)}else{try{_.call()}catch(B){v=B}_=!1;try{var A=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),_=!0,new e}finally{_&&(A!==void 0?Object.defineProperty(e.prototype,"props",A):delete e.prototype.props)}}}else{try{throw Error()}catch(B){v=B}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(B){if(B&&v&&typeof B.stack=="string")return[B.stack,v.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],d=i[1];if(r&&d){var f=r.split(`
`),w=d.split(`
`);for(s=l=0;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;for(;s<w.length&&!w[s].includes("DetermineComponentFrameRoot");)s++;if(l===f.length||s===w.length)for(l=f.length-1,s=w.length-1;1<=l&&0<=s&&f[l]!==w[s];)s--;for(;1<=l&&0<=s;l--,s--)if(f[l]!==w[s]){if(l!==1||s!==1)do if(l--,s--,0>s||f[l]!==w[s]){var j=`
`+f[l].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=l&&0<=s);break}}}finally{mt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?at(a):""}function Xe(e,t){switch(e.tag){case 26:case 27:case 5:return at(e.type);case 16:return at("Lazy");case 13:return e.child!==t&&t!==null?at("Suspense Fallback"):at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return We(e.type,!1);case 11:return We(e.type.render,!1);case 1:return We(e.type,!0);case 31:return at("Activity");case 30:return at("ViewTransition");default:return""}}function Dt(e){try{var t="",a=null;do t+=Xe(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Lt=Object.prototype.hasOwnProperty,Jl=n.unstable_scheduleCallback,ee=n.unstable_cancelCallback,He=n.unstable_shouldYield,_a=n.unstable_requestPaint,Ue=n.unstable_now,Ma=n.unstable_getCurrentPriorityLevel,Jt=n.unstable_ImmediatePriority,wd=n.unstable_UserBlockingPriority,Fi=n.unstable_NormalPriority,U0=n.unstable_LowPriority,Ed=n.unstable_IdlePriority,G0=n.log,Y0=n.unstable_setDisableYieldValue,Qs=null,Bt=null;function Pa(e){if(typeof G0=="function"&&Y0(e),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(Qs,e)}catch{}}var Ht=Math.clz32?Math.clz32:Q0,F0=Math.log,V0=Math.LN2;function Q0(e){return e>>>=0,e===0?32:31-(F0(e)/V0|0)|0}var Vi=256,Qi=262144,Xi=4194304;function Al(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zi(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var s=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~i,l!==0?s=Al(l):(r&=d,r!==0?s=Al(r):a||(a=d&~e,a!==0&&(s=Al(a))))):(d=l&~i,d!==0?s=Al(d):r!==0?s=Al(r):a||(a=l&~e,a!==0&&(s=Al(a)))),s===0?0:t!==0&&t!==s&&(t&i)===0&&(i=s&-s,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:s}function Xs(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Sd(e,t){(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-Ht(a),s=1<<l;t|=e[l],a&=~s}return t}function X0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Td(){var e=Xi;return Xi<<=1,(Xi&62914560)===0&&(Xi=4194304),e}function Cn(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Zs(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Z0(e,t,a,l,s,i){var r=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,f=e.expirationTimes,w=e.hiddenUpdates;for(a=r&~a;0<a;){var j=31-Ht(a),_=1<<j;d[j]=0,f[j]=-1;var v=w[j];if(v!==null)for(w[j]=null,j=0;j<v.length;j++){var A=v[j];A!==null&&(A.lane&=-536870913)}a&=~_}l!==0&&Ad(e,l,0),i!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function Ad(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Ht(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Cd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Ht(a),s=1<<l;s&t|e[l]&t&&(e[l]|=t),a&=~s}}function jd(e,t){var a=t&-t;return a=(a&42)!==0?1:jn(a),(a&(e.suspendedLanes|t))!==0?0:a}function jn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function kn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function kd(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:Lm(e.type))}function Dd(e,t){var a=ae.p;try{return ae.p=e,t()}finally{ae.p=a}}var Na=Math.random().toString(36).slice(2),xt="__reactFiber$"+Na,Rt="__reactProps$"+Na,Pl="__reactContainer$"+Na,Rd="__reactEvents$"+Na,K0="__reactListeners$"+Na,$0="__reactHandles$"+Na,_d="__reactResources$"+Na,Ks="__reactMarker$"+Na,Ki="__reactLoad$"+Na;function $i(e){delete e[xt],delete e[Rt],delete e[K0],delete e[$0]}function Cl(e){var t;if(t=e[xt])return t;for(var a=e.parentNode;a;){if(t=a[Pl]||a[xt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=bm(e);e!==null;){if(a=e[xt])return a;e=bm(e)}return t}e=a,a=e.parentNode}return null}function Il(e){if(e=e[xt]||e[Pl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function $s(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Wl(e){var t=e[_d];return t||(t=e[_d]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function dt(e){e[Ks]=!0}function Md(e){e[Ki]=void 0}var Nd=new Set,Od={};function jl(e,t){es(e,t),es(e+"Capture",t)}function es(e,t){for(Od[e]=t,e=0;e<t.length;e++)Nd.add(t[e])}var J0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zd={},Ld={};function P0(e){return Lt.call(Ld,e)?!0:Lt.call(zd,e)?!1:J0.test(e)?Ld[e]=!0:(zd[e]=!0,!1)}var Ae=!1;function Bd(){var e=Ae;return Ae=!1,e}function Ji(e,t,a){if(P0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,a)}}function Pi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,a)}}function Oa(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,l)}}function qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function I0(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var s=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){a=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Dn(e){if(!e._valueTracker){var t=Hd(e)?"checked":"value";e._valueTracker=I0(e,t,""+e[t])}}function qd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Hd(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}var W0=/[\n"\\]/g;function Pt(e){return e.replace(W0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Rn(e,t,a,l,s,i,r,d){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qt(t)):e.value!==""+qt(t)&&(e.value=""+qt(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?_n(e,qt(e.value)):_n(e,qt(t)):a!=null?_n(e,qt(a)):l!=null&&e.removeAttribute("value"),s==null&&i!=null&&(e.defaultChecked=!!i),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+qt(d):e.removeAttribute("name")}function Ud(e,t,a,l,s,i,r,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Dn(e);return}a=a!=null?""+qt(a):"",t=t!=null?""+qt(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}l=l??s,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Dn(e)}function _n(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function ts(e,t,a,l){if(e=e.options,t){t={};for(var s=0;s<a.length;s++)t["$"+a[s]]=!0;for(a=0;a<e.length;a++)s=t.hasOwnProperty("$"+e[a].value),e[a].selected!==s&&(e[a].selected=s),s&&l&&(e[a].defaultSelected=!0)}else{for(a=""+qt(a),t=null,s=0;s<e.length;s++){if(e[s].value===a){e[s].selected=!0,l&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Gd(e,t,a){if(t!=null&&(t=""+qt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+qt(a):""}function Yd(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(fe(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=qt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Dn(e)}function as(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var ex=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fd(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||ex.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Vd(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="",Ae=!0);for(var s in t)l=t[s],t.hasOwnProperty(s)&&a[s]!==l&&(Fd(e,s,l),Ae=!0)}else for(var i in t)t.hasOwnProperty(i)&&Fd(e,i,t[i])}function Mn(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ax=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ii(e){return ax.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ga(){}var Nn=null;function On(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ls=null,ss=null;function Qd(e){var t=Il(e);if(t&&(e=t.stateNode)){var a=e[Rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Rn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var s=l[Rt]||null;if(!s)throw Error(o(90));Rn(l,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&qd(l)}break e;case"textarea":Gd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ts(e,!!a.multiple,t,!1)}}}var zn=!1;function Xd(e,t,a){if(zn)return e(t,a);zn=!0;try{var l=e(t);return l}finally{if(zn=!1,(ls!==null||ss!==null)&&(Ir(),ls&&(t=ls,e=ss,ss=ls=null,Qd(t),e)))for(t=0;t<e.length;t++)Qd(e[t])}}function Js(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Rt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var za=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ln=!1;if(za)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Ln=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Ln=!1}var Ia=null,Bn=null,Wi=null;function Zd(){if(Wi)return Wi;var e,t=Bn,a=t.length,l,s="value"in Ia?Ia.value:Ia.textContent,i=s.length;for(e=0;e<a&&t[e]===s[e];e++);var r=a-e;for(l=1;l<=r&&t[a-l]===s[i-l];l++);return Wi=s.slice(e,1<l?1-l:void 0)}function er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function tr(){return!0}function Kd(){return!1}function At(e){function t(a,l,s,i,r){this._reactName=a,this._targetInst=s,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?tr:Kd,this.isPropagationStopped=Kd,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),t}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ar=At(Wa),Is=le({},Wa,{view:0,detail:0}),lx=At(Is),Hn,qn,Ws,lr=le({},Is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ws&&(Ws&&e.type==="mousemove"?(Hn=e.screenX-Ws.screenX,qn=e.screenY-Ws.screenY):qn=Hn=0,Ws=e),Hn)},movementY:function(e){return"movementY"in e?e.movementY:qn}}),$d=At(lr),sx=le({},lr,{dataTransfer:0}),ix=At(sx),rx=le({},Is,{relatedTarget:0}),Un=At(rx),nx=le({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),ox=At(nx),cx=le({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dx=At(cx),ux=le({},Wa,{data:0}),Jd=At(ux),px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mx[e])?!!t[e]:!1}function Gn(){return xx}var bx=le({},Is,{key:function(e){if(e.key){var t=px[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type==="keypress"?er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gx=At(bx),hx=le({},lr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pd=At(hx),vx=le({},Wa,{submitter:0}),yx=At(vx),wx=le({},Is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn}),Ex=At(wx),Sx=le({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=At(Sx),Ax=le({},lr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cx=At(Ax),jx=le({},Wa,{newState:0,oldState:0,source:0}),kx=At(jx),Dx=[9,13,27,32],Yn=za&&"CompositionEvent"in window,ei=null;za&&"documentMode"in document&&(ei=document.documentMode);var Rx=za&&"TextEvent"in window&&!ei,Id=za&&(!Yn||ei&&8<ei&&11>=ei),Wd=" ",eu=!1;function tu(e,t){switch(e){case"keyup":return Dx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var is=!1;function _x(e,t){switch(e){case"compositionend":return au(t);case"keypress":return t.which!==32?null:(eu=!0,Wd);case"textInput":return e=t.data,e===Wd&&eu?null:e;default:return null}}function Mx(e,t){if(is)return e==="compositionend"||!Yn&&tu(e,t)?(e=Zd(),Wi=Bn=Ia=null,is=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Id&&t.locale!=="ko"?null:t.data;default:return null}}var Nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nx[e.type]:t==="textarea"}function su(e,t,a,l){ls?ss?ss.push(l):ss=[l]:ls=l,t=sn(t,"onChange"),0<t.length&&(a=new ar("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var ti=null,ai=null;function Ox(e){Xf(e,0)}function sr(e){var t=$s(e);if(qd(t))return e}function iu(e,t){if(e==="change")return t}var ru=!1;if(za){var Fn;if(za){var Vn="oninput"in document;if(!Vn){var nu=document.createElement("div");nu.setAttribute("oninput","return;"),Vn=typeof nu.oninput=="function"}Fn=Vn}else Fn=!1;ru=Fn&&(!document.documentMode||9<document.documentMode)}function ou(){ti&&(ti.detachEvent("onpropertychange",cu),ai=ti=null)}function cu(e){if(e.propertyName==="value"&&sr(ai)){var t=[];su(t,ai,e,On(e)),Xd(Ox,t)}}function zx(e,t,a){e==="focusin"?(ou(),ti=t,ai=a,ti.attachEvent("onpropertychange",cu)):e==="focusout"&&ou()}function Lx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sr(ai)}function Bx(e,t){if(e==="click")return sr(t)}function Hx(e,t){if(e==="input"||e==="change")return sr(t)}function qx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:qx;function li(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var s=a[l];if(!Lt.call(t,s)||!Ut(e[s],t[s]))return!1}return!0}function Qn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,t){var a=du(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=du(a)}}function pu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Qn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Qn(e.document)}return t}function Xn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ux=za&&"documentMode"in document&&11>=document.documentMode,rs=null,Zn=null,si=null,Kn=!1;function mu(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kn||rs==null||rs!==Qn(l)||(l=rs,"selectionStart"in l&&Xn(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),si&&li(si,l)||(si=l,l=sn(Zn,"onSelect"),0<l.length&&(t=new ar("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=rs)))}function kl(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ns={animationend:kl("Animation","AnimationEnd"),animationiteration:kl("Animation","AnimationIteration"),animationstart:kl("Animation","AnimationStart"),transitionrun:kl("Transition","TransitionRun"),transitionstart:kl("Transition","TransitionStart"),transitioncancel:kl("Transition","TransitionCancel"),transitionend:kl("Transition","TransitionEnd")},$n={},xu={};za&&(xu=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function Dl(e){if($n[e])return $n[e];if(!ns[e])return e;var t=ns[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in xu)return $n[e]=t[a];return e}var bu=Dl("animationend"),gu=Dl("animationiteration"),hu=Dl("animationstart"),Gx=Dl("transitionrun"),Yx=Dl("transitionstart"),Fx=Dl("transitioncancel"),vu=Dl("transitionend"),yu=new Map,Jn="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jn.push("scrollEnd");function oa(e,t){yu.set(e,t),jl(t,[e])}var Vx=0;function La(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=pa.identifierPrefix;var a=Vx++;return e="_"+e+"t_"+a.toString(32)+"_",t.autoName=e}function wu(e){if(e==null||typeof e=="string")return e;var t=null,a=js;if(a!==null)for(var l=0;l<a.length;l++){var s=e[a[l]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function Ba(e,t){return e=wu(e),t=wu(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var ir=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},It=[],os=0,Pn=0;function rr(){for(var e=os,t=Pn=os=0;t<e;){var a=It[t];It[t++]=null;var l=It[t];It[t++]=null;var s=It[t];It[t++]=null;var i=It[t];if(It[t++]=null,l!==null&&s!==null){var r=l.pending;r===null?s.next=s:(s.next=r.next,r.next=s),l.pending=s}i!==0&&Eu(a,s,i)}}function nr(e,t,a,l){It[os++]=e,It[os++]=t,It[os++]=a,It[os++]=l,Pn|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function In(e,t,a,l){return nr(e,t,a,l),or(e)}function Rl(e,t){return nr(e,null,null,t),or(e)}function Eu(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var s=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(s=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,s&&t!==null&&(s=31-Ht(a),e=i.hiddenUpdates,l=e[s],l===null?e[s]=[t]:l.push(t),t.lane=a|536870912),i):null}function or(e){if(50<Ci)throw Ci=0,Pr=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var cs={};function Qx(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,a,l){return new Qx(e,t,a,l)}function Wn(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ha(e,t){var a=e.alternate;return a===null?(a=_t(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Su(e,t){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function cr(e,t,a,l,s,i){var r=0;if(l=e,typeof l=="function")Wn(l)&&(r=1);else if(typeof l=="string")r=vg(e,a,pe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(l){case Et:return e=_t(31,a,t,s),e.elementType=Et,e.lanes=i,e;case nt:return _l(a.children,s,i,t);case Be:r=8,s|=24;break;case Kt:return e=_t(12,a,t,s|2),e.elementType=Kt,e.lanes=i,e;case I:return e=_t(13,a,t,s),e.elementType=I,e.lanes=i,e;case W:return e=_t(19,a,t,s),e.elementType=W,e.lanes=i,e;case $t:case h:return e=s|32,e=_t(30,a,t,e),e.elementType=h,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Te:r=10;break e;case Tt:r=9;break e;case q:r=11;break e;case je:r=14;break e;case Ee:r=16,l=null;break e}r=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=_t(r,a,t,s),t.elementType=e,t.type=l,t.lanes=i,t}function _l(e,t,a,l){return e=_t(7,e,l,t),e.lanes=a,e}function eo(e,t,a){return e=_t(6,e,null,t),e.lanes=a,e}function Tu(e){var t=_t(18,null,null,0);return t.stateNode=e,t}function to(e,t,a){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Au=new WeakMap;function Wt(e,t){if(typeof e=="object"&&e!==null){var a=Au.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Dt(t)},Au.set(e,t),t)}return{value:e,source:t,stack:Dt(t)}}var ds=[],us=0,dr=null,ii=0,ea=[],ta=0,el=null,ha=1,va="";function qa(e,t){ds[us++]=ii,ds[us++]=dr,dr=e,ii=t}function Cu(e,t,a){ea[ta++]=ha,ea[ta++]=va,ea[ta++]=el,el=e;var l=ha;e=va;var s=32-Ht(l)-1;l&=~(1<<s),a+=1;var i=32-Ht(t)+s;if(30<i){var r=s-s%5;i=(l&(1<<r)-1).toString(32),l>>=r,s-=r,ha=1<<32-Ht(t)+s|a<<s|l,va=i+e}else ha=1<<i|a<<s|l,va=e}function ur(e){e.return!==null&&(qa(e,1),Cu(e,1,0))}function ao(e){for(;e===dr;)dr=ds[--us],ds[us]=null,ii=ds[--us],ds[us]=null;for(;e===el;)el=ea[--ta],ea[ta]=null,va=ea[--ta],ea[ta]=null,ha=ea[--ta],ea[ta]=null}function ju(e,t){ea[ta++]=ha,ea[ta++]=va,ea[ta++]=el,ha=t.id,va=t.overflow,el=e}var ut=null,ze=null,ue=!1,tl=null,aa=!1,lo=Error(o(519));function al(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ri(Wt(t,e)),lo}function ku(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[xt]=e,t[Rt]=l,a){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(a=0;a<ki.length;a++)xe(ki[a],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),Ud(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),Yd(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Jf(t.textContent,a)?(l.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),l.onScroll!=null&&xe("scroll",t),l.onScrollEnd!=null&&xe("scrollend",t),l.onClick!=null&&(t.onclick=ga),t=!0):t=!1,t||al(e,!0)}function pr(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 31:case 13:aa=!1;return;case 27:case 3:aa=!0;return;default:ut=ut.return}}function ps(e){if(e!==ut)return!1;if(!ue)return pr(e),ue=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Oc(e.type,e.memoizedProps)),a=!a),a&&ze&&al(e),pr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));ze=xm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));ze=xm(e)}else t===27?(t=ze,hl(e.type)?(e=Fc,Fc=null,ze=e):ze=t):ze=ut?sa(e.stateNode.nextSibling):null;return!0}function Ml(){ze=ut=null,ue=!1}function so(){var e=tl;return e!==null&&(Ot===null?Ot=e:Ot.push.apply(Ot,e),tl=null),e}function ri(e){tl===null?tl=[e]:tl.push(e)}var io=L(null),Nl=null,Ua=null;function ll(e,t,a){H(io,t._currentValue),t._currentValue=a}function Ga(e){e._currentValue=io.current,z(io)}function fr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function ro(e,t,a,l){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var i=s.dependencies;if(i!==null){var r=s.child;i=i.firstContext;e:for(;i!==null;){var d=i;i=s;for(var f=0;f<t.length;f++)if(d.context===t[f]){i.lanes|=a,d=i.alternate,d!==null&&(d.lanes|=a),fr(i.return,a,e),l||(r=null);break e}i=d.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(o(341));r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),fr(r,a,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=a,r=s.alternate,r!==null&&(r.lanes|=a),fr(s.return,a,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Ol(e,t,a,l){e=null;for(var s=t,i=!1;s!==null;){if(!i){if((s.flags&524288)!==0)i=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(o(387));if(r=r.memoizedProps,r!==null){var d=s.type;Ut(s.pendingProps.value,r.value)||(e!==null?e.push(d):e=[d])}}else if(s===tt.current){if(r=s.alternate,r===null)throw Error(o(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Bs):e=[Bs])}s=s.return}return e!==null&&ro(t,e,a,l),t.flags|=262144,e!==null}function mr(e){for(e=e.firstContext;e!==null;){if(!Ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zl(e){Nl=e,Ua=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bt(e){return Du(Nl,e)}function xr(e,t){return Nl===null&&zl(e),Du(e,t)}function Du(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ua===null){if(e===null)throw Error(o(308));Ua=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ua=Ua.next=t;return a}var Xx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Zx=n.unstable_scheduleCallback,Kx=n.unstable_NormalPriority,lt={$$typeof:Te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function no(){return{controller:new Xx,data:new Map,refCount:0}}function ni(e){e.refCount--,e.refCount===0&&Zx(Kx,function(){e.controller.abort()})}function Ru(e,t){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<t.length;e++){var l=t[e];a.indexOf(l)===-1&&a.push(l)}}}var oi=null;function $x(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var ci=null,oo=0,Ll=0,fs=null;function Jx(e,t){if(ci===null){var a=ci=[];oo=0,Ll=Ac(),fs={status:"pending",value:void 0,then:function(l){a.push(l)}}}return oo++,t.then(_u,_u),t}function _u(){if(--oo===0&&(oi=null,ci!==null)){fs!==null&&(fs.status="fulfilled");var e=ci;ci=null,Ll=0,fs=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Px(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var s=0;s<a.length;s++)(0,a[s])(t)},function(s){for(l.status="rejected",l.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),l}var Mu=Q.S;Q.S=function(e,t){if(Af=Ue(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Jx(e,t),oi!==null)for(var a=_s;a!==null;)Ru(a,oi),a=a.next;if(a=e.types,a!==null){for(var l=_s;l!==null;)Ru(l,a),l=l.next;if(Ll!==0){l=oi,l===null&&(l=oi=[]);for(var s=0;s<a.length;s++){var i=a[s];l.indexOf(i)===-1&&l.push(i)}}}Mu!==null&&Mu(e,t)};var Bl=L(null);function co(){var e=Bl.current;return e!==null?e:Oe.pooledCache}function br(e,t){t===null?H(Bl,Bl.current):H(Bl,t.pool)}function Nu(){var e=co();return e===null?null:{parent:lt._currentValue,pool:e}}var ms=Error(o(460)),uo=Error(o(474)),gr=Error(o(542)),hr={then:function(){}};function Ou(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ga,ga),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bu(e),e===void 0&&!("reason"in t)?Error(o(600)):e;default:if(typeof t.status=="string")t.then(ga,ga);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=l}},function(l){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bu(e),e}throw ql=t,ms}}function Hl(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ql=a,ms):a}}var ql=null;function Lu(){if(ql===null)throw Error(o(459));var e=ql;return ql=null,e}function Bu(e){if(e===ms||e===gr)throw Error(o(483))}var xs=null,di=0;function vr(e){var t=di;return di+=1,xs===null&&(xs=[]),zu(xs,e,t)}function sl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function yr(e,t){throw t.$$typeof===re?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hu(e){function t(y,g){if(e){var S=y.deletions;S===null?(y.deletions=[g],y.flags|=16):S.push(g)}}function a(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function l(y){for(var g=new Map;y!==null;)y.key===null?g.set(y.index,y):g.set(y.key,y),y=y.sibling;return g}function s(y,g){return y=Ha(y,g),y.index=0,y.sibling=null,y}function i(y,g,S){return y.index=S,e?(S=y.alternate,S!==null?(S=S.index,S<g?(y.flags|=2,g):S):(y.flags|=134217730,g)):(y.flags|=1048576,g)}function r(y){return e&&y.alternate===null&&(y.flags|=134217730),y}function d(y,g,S,R){return g===null||g.tag!==6?(g=eo(S,y.mode,R),g.return=y,g):(g=s(g,S),g.return=y,g)}function f(y,g,S,R){var Y=S.type;return Y===nt?(y=j(y,g,S.props.children,R,S.key),sl(y,S),y):g!==null&&(g.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ee&&Hl(Y)===g.type)?(g=s(g,S.props),sl(g,S),g.return=y,g):(g=cr(S.type,S.key,S.props,null,y.mode,R),sl(g,S),g.return=y,g)}function w(y,g,S,R){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=to(S,y.mode,R),g.return=y,g):(g=s(g,S.children||[]),g.return=y,g)}function j(y,g,S,R,Y){return g===null||g.tag!==7?(g=_l(S,y.mode,R,Y),g.return=y,g):(g=s(g,S),g.return=y,g)}function _(y,g,S){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=eo(""+g,y.mode,S),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Pe:return S=cr(g.type,g.key,g.props,null,y.mode,S),sl(S,g),S.return=y,S;case Ye:return g=to(g,y.mode,S),g.return=y,g;case Ee:return g=Hl(g),_(y,g,S)}if(fe(g)||Z(g))return g=_l(g,y.mode,S,null),g.return=y,g;if(typeof g.then=="function")return _(y,vr(g),S);if(g.$$typeof===Te)return _(y,xr(y,g),S);yr(y,g)}return null}function v(y,g,S,R){var Y=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return Y!==null?null:d(y,g,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Pe:return S.key===Y?f(y,g,S,R):null;case Ye:return S.key===Y?w(y,g,S,R):null;case Ee:return S=Hl(S),v(y,g,S,R)}if(fe(S)||Z(S))return Y!==null?null:j(y,g,S,R,null);if(typeof S.then=="function")return v(y,g,vr(S),R);if(S.$$typeof===Te)return v(y,g,xr(y,S),R);yr(y,S)}return null}function A(y,g,S,R,Y){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return y=y.get(S)||null,d(g,y,""+R,Y);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Pe:return y=y.get(R.key===null?S:R.key)||null,f(g,y,R,Y);case Ye:return y=y.get(R.key===null?S:R.key)||null,w(g,y,R,Y);case Ee:return R=Hl(R),A(y,g,S,R,Y)}if(fe(R)||Z(R))return y=y.get(S)||null,j(g,y,R,Y,null);if(typeof R.then=="function")return A(y,g,S,vr(R),Y);if(R.$$typeof===Te)return A(y,g,S,xr(g,R),Y);yr(g,R)}return null}function B(y,g,S,R){for(var Y=null,he=null,$=g,te=g=0,rt=null;$!==null&&te<S.length;te++){$.index>te?(rt=$,$=null):rt=$.sibling;var ye=v(y,$,S[te],R);if(ye===null){$===null&&($=rt);break}e&&$&&ye.alternate===null&&t(y,$),g=i(ye,g,te),he===null?Y=ye:he.sibling=ye,he=ye,$=rt}if(te===S.length)return a(y,$),ue&&qa(y,te),Y;if($===null){for(;te<S.length;te++)$=_(y,S[te],R),$!==null&&(g=i($,g,te),he===null?Y=$:he.sibling=$,he=$);return ue&&qa(y,te),Y}for($=l($);te<S.length;te++)rt=A($,y,te,S[te],R),rt!==null&&(e&&(ye=rt.alternate,ye!==null&&$.delete(ye.key===null?te:ye.key)),g=i(rt,g,te),he===null?Y=rt:he.sibling=rt,he=rt);return e&&$.forEach(function(Sl){return t(y,Sl)}),ue&&qa(y,te),Y}function V(y,g,S,R){if(S==null)throw Error(o(151));for(var Y=null,he=null,$=g,te=g=0,rt=null,ye=S.next();$!==null&&!ye.done;te++,ye=S.next()){$.index>te?(rt=$,$=null):rt=$.sibling;var Sl=v(y,$,ye.value,R);if(Sl===null){$===null&&($=rt);break}e&&$&&Sl.alternate===null&&t(y,$),g=i(Sl,g,te),he===null?Y=Sl:he.sibling=Sl,he=Sl,$=rt}if(ye.done)return a(y,$),ue&&qa(y,te),Y;if($===null){for(;!ye.done;te++,ye=S.next())ye=_(y,ye.value,R),ye!==null&&(g=i(ye,g,te),he===null?Y=ye:he.sibling=ye,he=ye);return ue&&qa(y,te),Y}for($=l($);!ye.done;te++,ye=S.next())ye=A($,y,te,ye.value,R),ye!==null&&(e&&(rt=ye.alternate,rt!==null&&$.delete(rt.key===null?te:rt.key)),g=i(ye,g,te),he===null?Y=ye:he.sibling=ye,he=ye);return e&&$.forEach(function(_g){return t(y,_g)}),ue&&qa(y,te),Y}function oe(y,g,S,R){if(typeof S=="object"&&S!==null&&S.type===nt&&S.key===null&&S.props.ref===void 0&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Pe:e:{for(var Y=S.key;g!==null;){if(g.key===Y){if(Y=S.type,Y===nt){if(g.tag===7){a(y,g.sibling),R=s(g,S.props.children),sl(R,S),R.return=y,y=R;break e}}else if(g.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ee&&Hl(Y)===g.type){a(y,g.sibling),R=s(g,S.props),sl(R,S),R.return=y,y=R;break e}a(y,g);break}else t(y,g);g=g.sibling}S.type===nt?(R=_l(S.props.children,y.mode,R,S.key),sl(R,S),R.return=y,y=R):(R=cr(S.type,S.key,S.props,null,y.mode,R),sl(R,S),R.return=y,y=R)}return r(y);case Ye:e:{for(Y=S.key;g!==null;){if(g.key===Y)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){a(y,g.sibling),R=s(g,S.children||[]),R.return=y,y=R;break e}else{a(y,g);break}else t(y,g);g=g.sibling}R=to(S,y.mode,R),R.return=y,y=R}return r(y);case Ee:return S=Hl(S),oe(y,g,S,R)}if(fe(S))return B(y,g,S,R);if(Z(S)){if(Y=Z(S),typeof Y!="function")throw Error(o(150));return S=Y.call(S),V(y,g,S,R)}if(typeof S.then=="function")return oe(y,g,vr(S),R);if(S.$$typeof===Te)return oe(y,g,xr(y,S),R);yr(y,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,g!==null&&g.tag===6?(a(y,g.sibling),R=s(g,S),R.return=y,y=R):(a(y,g),R=eo(S,y.mode,R),R.return=y,y=R),r(y)):a(y,g)}return function(y,g,S,R){try{di=0;var Y=oe(y,g,S,R);return xs=null,Y}catch($){if($===ms||$===gr)throw $;var he=_t(29,$,null,y.mode);return he.lanes=R,he.return=y,he}}}var Ul=Hu(!0),qu=Hu(!1),il=!1;function po(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function rl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function nl(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ce&2)!==0){var s=l.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),l.pending=t,t=or(e),Eu(e,null,a),t}return nr(e,l,t,a),or(e)}function ui(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Cd(e,a)}}function mo(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var s=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?s=i=r:i=i.next=r,a=a.next}while(a!==null);i===null?s=i=t:i=i.next=t}else s=i=t;a={baseState:l.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var xo=!1;function pi(){if(xo){var e=fs;if(e!==null)throw e}}function fi(e,t,a,l){xo=!1;var s=e.updateQueue;il=!1;var i=s.firstBaseUpdate,r=s.lastBaseUpdate,d=s.shared.pending;if(d!==null){s.shared.pending=null;var f=d,w=f.next;f.next=null,r===null?i=w:r.next=w,r=f;var j=e.alternate;j!==null&&(j=j.updateQueue,d=j.lastBaseUpdate,d!==r&&(d===null?j.firstBaseUpdate=w:d.next=w,j.lastBaseUpdate=f))}if(i!==null){var _=s.baseState;r=0,j=w=f=null,d=i;do{var v=d.lane&-536870913,A=v!==d.lane;if(A?(ge&v)===v:(l&v)===v){v!==0&&v===Ll&&(xo=!0),j!==null&&(j=j.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var B=e,V=d;v=t;var oe=a;switch(V.tag){case 1:if(B=V.payload,typeof B=="function"){_=B.call(oe,_,v);break e}_=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=V.payload,v=typeof B=="function"?B.call(oe,_,v):B,v==null)break e;_=le({},_,v);break e;case 2:il=!0}}v=d.callback,v!==null&&(e.flags|=64,A&&(e.flags|=8192),A=s.callbacks,A===null?s.callbacks=[v]:A.push(v))}else A={lane:v,tag:d.tag,payload:d.payload,callback:d.callback,next:null},j===null?(w=j=A,f=_):j=j.next=A,r|=v;if(d=d.next,d===null){if(d=s.shared.pending,d===null)break;A=d,d=A.next,A.next=null,s.lastBaseUpdate=A,s.shared.pending=null}}while(!0);j===null&&(f=_),s.baseState=f,s.firstBaseUpdate=w,s.lastBaseUpdate=j,i===null&&(s.shared.lanes=0),ml|=r,e.lanes=r,e.memoizedState=_}}function Uu(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Gu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Uu(a[e],t)}var ol=L(null),wr=L(0);function Yu(e,t){e=Xa,H(wr,e),H(ol,t),Xa=e|t.baseLanes}function bo(){H(wr,Xa),H(ol,ol.current)}function go(){Xa=wr.current,z(ol),z(wr)}var gt=L(null),St=null;function cl(e){var t=e.alternate;H(ht,ht.current&1),H(gt,e),St===null&&(t===null||ol.current!==null||t.memoizedState!==null)&&(St=e)}function ho(e){H(ht,ht.current),H(gt,e),St===null&&(St=e)}function Fu(e){e.tag===22?(H(ht,ht.current),H(gt,e),St===null&&(St=e)):dl()}function dl(){H(ht,ht.current),H(gt,gt.current)}function Gt(e){z(gt),St===e&&(St=null),z(ht)}var ht=L(0);function mi(e,t){H(gt,gt.current),H(ht,t)}function vo(e){z(ht),z(gt),St===e&&(St=null)}function Er(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Gc(a)||Yc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ya=0,ne=null,Ne=null,st=null,Sr=!1,bs=!1,Gl=!1,Tr=0,xi=0,gs=null,Ix=0;function Ze(){throw Error(o(321))}function yo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ut(e[a],t[a]))return!1;return!0}function wo(e,t,a,l,s,i){return Ya=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Q.H=e===null||e.memoizedState===null?Cp:jp,Gl=!1,i=a(l,s),Gl=!1,bs&&(i=Qu(t,a,l,s)),Vu(e),i}function Vu(e){Q.H=_r;var t=Ne!==null&&Ne.next!==null;if(Ya=0,st=Ne=ne=null,Sr=!1,xi=0,gs=null,t)throw Error(o(300));e===null||it||(e=e.dependencies,e!==null&&mr(e)&&(it=!0))}function Qu(e,t,a,l){ne=e;var s=0;do{if(bs&&(gs=null),xi=0,bs=!1,25<=s)throw Error(o(301));if(s+=1,st=Ne=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}Q.H=rb,i=t(a,l)}while(bs);return i}function Wx(){var e=Q.H,t=e.useState()[0];return t=typeof t.then=="function"?bi(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ne.flags|=1024),t}function Eo(){var e=Tr!==0;return Tr=0,e}function So(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function To(e){if(Sr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Sr=!1}Ya=0,st=Ne=ne=null,bs=!1,xi=Tr=0,gs=null}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?ne.memoizedState=st=e:st=st.next=e,st}function et(){if(Ne===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=st===null?ne.memoizedState:st.next;if(t!==null)st=t,Ne=e;else{if(e===null)throw ne.alternate===null?Error(o(467)):Error(o(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},st===null?ne.memoizedState=st=e:st=st.next=e}return st}function Ar(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bi(e){var t=xi;return xi+=1,gs===null&&(gs=[]),e=zu(gs,e,t),t=ne,(st===null?t.memoizedState:st.next)===null&&(t=t.alternate,Q.H=t===null||t.memoizedState===null?Cp:jp),e}function Cr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bi(e);if(e.$$typeof===O)return;if(e.$$typeof===Te)return bt(e)}throw Error(o(438,String(e)))}function Ao(e){var t=null,a=ne.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ar(),ne.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=xa;return t.index++,a}function Fa(e,t){return typeof t=="function"?t(e):t}function jr(e){var t=et();return Co(t,Ne,e)}function Co(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var s=e.baseQueue,i=l.pending;if(i!==null){if(s!==null){var r=s.next;s.next=i.next,i.next=r}t.baseQueue=s=i,l.pending=null}if(i=e.baseState,s===null)e.memoizedState=i;else{t=s.next;var d=r=null,f=null,w=t,j=!1;do{var _=w.lane&-536870913;if(_!==w.lane?(ge&_)===_:(Ya&_)===_){var v=w.revertLane;if(v===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),_===Ll&&(j=!0);else if((Ya&v)===v){w=w.next,v===Ll&&(j=!0);continue}else _={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},f===null?(d=f=_,r=i):f=f.next=_,ne.lanes|=v,ml|=v;_=w.action,Gl&&a(i,_),i=w.hasEagerState?w.eagerState:a(i,_)}else v={lane:_,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},f===null?(d=f=v,r=i):f=f.next=v,ne.lanes|=_,ml|=_;w=w.next}while(w!==null&&w!==t);if(f===null?r=i:f.next=d,!Ut(i,e.memoizedState)&&(it=!0,j&&(a=fs,a!==null)))throw a;e.memoizedState=i,e.baseState=r,e.baseQueue=f,l.lastRenderedState=i}return s===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function jo(e){var t=et(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,s=a.pending,i=t.memoizedState;if(s!==null){a.pending=null;var r=s=s.next;do i=e(i,r.action),r=r.next;while(r!==s);Ut(i,t.memoizedState)||(it=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Xu(e,t,a){var l=ne,s=et(),i=ue;if(i){if(a===void 0)throw Error(o(407));a=a()}else a=t();var r=!Ut((Ne||s).memoizedState,a);if(r&&(s.memoizedState=a,it=!0),s=s.queue,Ro($u.bind(null,l,s,e),[e]),e=s.getSnapshot!==t||r||st!==null&&(st.memoizedState.tag&1)!==0,hs(e?9:8,{destroy:void 0},Ku.bind(null,l,s,a,t),null),e){if(l.flags|=2048,Oe===null)throw Error(o(349));i||(Ya&127)!==0||Zu(l,t,a)}return a}function Zu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ne.updateQueue,t===null?(t=Ar(),ne.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Ku(e,t,a,l){t.value=a,t.getSnapshot=l,Ju(t)&&Pu(e)}function $u(e,t,a){return a(function(){Ju(t)&&Pu(e)})}function Ju(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ut(e,a)}catch{return!0}}function Pu(e){var t=Rl(e,2);t!==null&&zt(t,e,2)}function ko(e){var t=Ct();if(typeof e=="function"){var a=e;if(e=a(),Gl){Pa(!0);try{a()}finally{Pa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:e},t}function Iu(e,t,a,l){return e.baseState=a,Co(e,Ne,typeof l=="function"?l:Fa)}function eb(e,t,a,l,s){if(Rr(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};Q.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Wu(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Wu(e,t){var a=t.action,l=t.payload,s=e.state;if(t.isTransition){var i=Q.T,r={};r.types=i!==null?i.types:null,Q.T=r;try{var d=a(s,l),f=Q.S;f!==null&&f(r,d),ep(e,t,d)}catch(w){Do(e,t,w)}finally{i!==null&&r.types!==null&&(i.types=r.types),Q.T=i}}else try{i=a(s,l),ep(e,t,i)}catch(w){Do(e,t,w)}}function ep(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){tp(e,t,l)},function(l){return Do(e,t,l)}):tp(e,t,a)}function tp(e,t,a){t.status="fulfilled",t.value=a,ap(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Wu(e,a)))}function Do(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,ap(t),t=t.next;while(t!==l)}e.action=null}function ap(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function lp(e,t){return t}function sp(e,t){if(ue){var a=Oe.formState;if(a!==null){e:{var l=ne;if(ue){if(ze){t:{for(var s=ze,i=aa;s.nodeType!==8;){if(!i){s=null;break t}if(s=sa(s.nextSibling),s===null){s=null;break t}}i=s.data,s=i==="F!"||i==="F"?s:null}if(s){ze=sa(s.nextSibling),l=s.data==="F!";break e}}al(l)}l=!1}l&&(t=a[0])}}return a=Ct(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lp,lastRenderedState:t},a.queue=l,a=Sp.bind(null,ne,l),l.dispatch=a,l=ko(!1),i=zo.bind(null,ne,!1,l.queue),l=Ct(),s={state:t,dispatch:null,action:e,pending:null},l.queue=s,a=eb.bind(null,ne,s,i,a),s.dispatch=a,l.memoizedState=e,[t,a,!1]}function ip(e){var t=et();return rp(t,Ne,e)}function rp(e,t,a){if(t=Co(e,t,lp)[0],e=jr(Fa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=bi(t)}catch(r){throw r===ms?gr:r}else l=t;t=et();var s=t.queue,i=s.dispatch;return a!==t.memoizedState&&(ne.flags|=2048,hs(9,{destroy:void 0},tb.bind(null,s,a),null)),[l,i,e]}function tb(e,t){e.action=t}function np(e){var t=et(),a=Ne;if(a!==null)return rp(t,a,e);et(),t=t.memoizedState,a=et();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function hs(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ne.updateQueue,t===null&&(t=Ar(),ne.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function op(){return et().memoizedState}function kr(e,t,a,l){var s=Ct();ne.flags|=e,s.memoizedState=hs(1|t,{destroy:void 0},a,l===void 0?null:l)}function Dr(e,t,a,l){var s=et();l=l===void 0?null:l;var i=s.memoizedState.inst;Ne!==null&&l!==null&&yo(l,Ne.memoizedState.deps)?s.memoizedState=hs(t,i,a,l):(ne.flags|=e,s.memoizedState=hs(1|t,i,a,l))}function cp(e,t){kr(8390656,8,e,t)}function Ro(e,t){Dr(2048,8,e,t)}function ab(e){ne.flags|=4;var t=ne.updateQueue;if(t===null)t=Ar(),ne.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function dp(e){var t=et().memoizedState;return ab({ref:t,nextImpl:e}),function(){if((Ce&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function up(e,t){return Dr(4,2,e,t)}function pp(e,t){return Dr(4,4,e,t)}function fp(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mp(e,t,a){a=a!=null?a.concat([e]):null,Dr(4,4,fp.bind(null,t,e),a)}function _o(){}function xp(e,t){var a=et();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&yo(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function bp(e,t){var a=et();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&yo(t,l[1]))return l[0];if(l=e(),Gl){Pa(!0);try{e()}finally{Pa(!1)}}return a.memoizedState=[l,t],l}function Mo(e,t,a){return a===void 0||(Ya&1073741824)!==0&&(ge&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=jf(),ne.lanes|=e,ml|=e,a)}function gp(e,t,a,l){return Ut(a,t)?a:ol.current!==null?(e=Mo(e,a,l),Ut(e,t)||(it=!0),e):(Ya&106)===0||(Ya&1073741824)!==0&&(ge&261930)===0?(it=!0,e.memoizedState=a):(e=jf(),ne.lanes|=e,ml|=e,t)}function hp(e,t,a,l,s){var i=ae.p;ae.p=i!==0&&8>i?i:8;var r=Q.T,d={};d.types=r!==null?r.types:null,Q.T=d,zo(e,!1,t,a);try{var f=s(),w=Q.S;if(w!==null&&w(d,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var j=Px(f,l);gi(e,t,j,Qt(e))}else gi(e,t,l,Qt(e))}catch(_){gi(e,t,{then:function(){},status:"rejected",reason:_},Qt())}finally{ae.p=i,r!==null&&d.types!==null&&(r.types=d.types),Q.T=r}}function lb(){}function No(e,t,a,l){if(e.tag!==5)throw Error(o(476));var s=vp(e).queue;hp(e,s,t,na,a===null?lb:function(){return yp(e),a(l)})}function vp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:na,baseState:na,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:na},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function yp(e){var t=vp(e);t.next===null&&(t=e.alternate.memoizedState),gi(e,t.next.queue,{},Qt())}function Oo(){return bt(Bs)}function wp(){return et().memoizedState}function Ep(){return et().memoizedState}function sb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Qt();e=rl(a);var l=nl(t,e,a);l!==null&&(zt(l,t,a),ui(l,t,a)),t={cache:no()},e.payload=t;return}t=t.return}}function ib(e,t,a){var l=Qt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Rr(e)?Tp(t,a):(a=In(e,t,a,l),a!==null&&(zt(a,e,l),Ap(a,t,l)))}function Sp(e,t,a){var l=Qt();gi(e,t,a,l)}function gi(e,t,a,l){var s={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rr(e))Tp(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,d=i(r,a);if(s.hasEagerState=!0,s.eagerState=d,Ut(d,r))return nr(e,t,s,0),Oe===null&&rr(),!1}catch{}if(a=In(e,t,s,l),a!==null)return zt(a,e,l),Ap(a,t,l),!0}return!1}function zo(e,t,a,l){if(l={lane:2,revertLane:Ac(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Rr(e)){if(t)throw Error(o(479))}else t=In(e,a,l,2),t!==null&&zt(t,e,2)}function Rr(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Tp(e,t){bs=Sr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Ap(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Cd(e,a)}}var _r={readContext:bt,use:Cr,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze,useEffectEvent:Ze},Cp={readContext:bt,use:Cr,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:bt,useEffect:cp,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,kr(4194308,4,fp.bind(null,t,e),a)},useLayoutEffect:function(e,t){return kr(4194308,4,e,t)},useInsertionEffect:function(e,t){kr(4,2,e,t)},useMemo:function(e,t){var a=Ct();t=t===void 0?null:t;var l=e();if(Gl){Pa(!0);try{e()}finally{Pa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Ct();if(a!==void 0){var s=a(t);if(Gl){Pa(!0);try{a(t)}finally{Pa(!1)}}}else s=t;return l.memoizedState=l.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},l.queue=e,e=e.dispatch=ib.bind(null,ne,e),[l.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:function(e){e=ko(e);var t=e.queue,a=Sp.bind(null,ne,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:_o,useDeferredValue:function(e,t){var a=Ct();return Mo(a,e,t)},useTransition:function(){var e=ko(!1);return e=hp.bind(null,ne,e.queue,!0,!1),Ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ne,s=Ct();if(ue){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),Oe===null)throw Error(o(349));(ge&127)!==0||Zu(l,t,a)}s.memoizedState=a;var i={value:a,getSnapshot:t};return s.queue=i,cp($u.bind(null,l,i,e),[e]),l.flags|=2048,hs(9,{destroy:void 0},Ku.bind(null,l,i,a,t),null),a},useId:function(){var e=Ct(),t=Oe.identifierPrefix;if(ue){var a=va,l=ha;a=(l&~(1<<32-Ht(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Tr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Ix++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Oo,useFormState:sp,useActionState:sp,useOptimistic:function(e){var t=Ct();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=zo.bind(null,ne,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ao,useCacheRefresh:function(){return Ct().memoizedState=sb.bind(null,ne)},useEffectEvent:function(e){var t=Ct(),a={impl:e};return t.memoizedState=a,function(){if((Ce&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},jp={readContext:bt,use:Cr,useCallback:xp,useContext:bt,useEffect:Ro,useImperativeHandle:mp,useInsertionEffect:up,useLayoutEffect:pp,useMemo:bp,useReducer:jr,useRef:op,useState:function(){return jr(Fa)},useDebugValue:_o,useDeferredValue:function(e,t){var a=et();return gp(a,Ne.memoizedState,e,t)},useTransition:function(){var e=jr(Fa)[0],t=et().memoizedState;return[typeof e=="boolean"?e:bi(e),t]},useSyncExternalStore:Xu,useId:wp,useHostTransitionStatus:Oo,useFormState:ip,useActionState:ip,useOptimistic:function(e,t){var a=et();return Iu(a,Ne,e,t)},useMemoCache:Ao,useCacheRefresh:Ep,useEffectEvent:dp},rb={readContext:bt,use:Cr,useCallback:xp,useContext:bt,useEffect:Ro,useImperativeHandle:mp,useInsertionEffect:up,useLayoutEffect:pp,useMemo:bp,useReducer:jo,useRef:op,useState:function(){return jo(Fa)},useDebugValue:_o,useDeferredValue:function(e,t){var a=et();return Ne===null?Mo(a,e,t):gp(a,Ne.memoizedState,e,t)},useTransition:function(){var e=jo(Fa)[0],t=et().memoizedState;return[typeof e=="boolean"?e:bi(e),t]},useSyncExternalStore:Xu,useId:wp,useHostTransitionStatus:Oo,useFormState:np,useActionState:np,useOptimistic:function(e,t){var a=et();return Ne!==null?Iu(a,Ne,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ao,useCacheRefresh:Ep,useEffectEvent:dp};function Lo(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:le({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Bo={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=Qt(),s=rl(l);s.payload=t,a!=null&&(s.callback=a),t=nl(e,s,l),t!==null&&(zt(t,e,l),ui(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=Qt(),s=rl(l);s.tag=1,s.payload=t,a!=null&&(s.callback=a),t=nl(e,s,l),t!==null&&(zt(t,e,l),ui(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Qt(),l=rl(a);l.tag=2,t!=null&&(l.callback=t),t=nl(e,l,a),t!==null&&(zt(t,e,a),ui(t,e,a))}};function kp(e,t,a,l,s,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!li(a,l)||!li(s,i):!0}function Dp(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Bo.enqueueReplaceState(t,t.state,null)}function Yl(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=le({},a));for(var s in e)a[s]===void 0&&(a[s]=e[s])}return a}function Rp(e){ir(e)}function _p(e){console.error(e)}function Mp(e){ir(e)}function Mr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Np(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Ho(e,t,a){return a=rl(a),a.tag=3,a.payload={element:null},a.callback=function(){Mr(e,t)},a}function Op(e){return e=rl(e),e.tag=3,e}function zp(e,t,a,l){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var i=l.value;e.payload=function(){return s(i)},e.callback=function(){Np(t,a,l)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Np(t,a,l),typeof s!="function"&&(xl===null?xl=new Set([this]):xl.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function nb(e,t,a,l,s){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Ol(t,a,s,!0),a=gt.current,a!==null){switch(a.tag){case 31:case 13:case 19:return St===null?Wr():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=s,l===hr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Ec(e,l,s)),!1;case 22:return a.flags|=65536,l===hr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Ec(e,l,s)),!1}throw Error(o(435,a.tag))}return Ec(e,l,s),Wr(),!1}if(ue)return t=gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,l!==lo&&(e=Error(o(422),{cause:l}),ri(Wt(e,a)))):(l!==lo&&(t=Error(o(423),{cause:l}),ri(Wt(t,a))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,l=Wt(l,a),s=Ho(e.stateNode,l,s),mo(e,s),Ke!==4&&(Ke=2)),!1;var i=Error(o(520),{cause:l});if(i=Wt(i,a),Ai===null?Ai=[i]:Ai.push(i),Ke!==4&&(Ke=2),t===null)return!0;l=Wt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=s&-s,a.lanes|=e,e=Ho(a.stateNode,l,e),mo(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(xl===null||!xl.has(i))))return a.flags|=65536,s&=-s,a.lanes|=s,s=Op(s),zp(s,e,a,l),mo(a,s),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var qo=Error(o(461)),it=!1;function ct(e,t,a,l){t.child=e===null?qu(t,null,a,l):Ul(t,e.child,a,l)}function Lp(e,t,a,l,s){a=a.render;var i=t.ref;if("ref"in l){var r={};for(var d in l)d!=="ref"&&(r[d]=l[d])}else r=l;return zl(t),l=wo(e,t,a,r,i,s),d=Eo(),e!==null&&!it?(So(e,t,s),Va(e,t,s)):(ue&&d&&ur(t),t.flags|=1,ct(e,t,l,s),t.child)}function Bp(e,t,a,l,s){if(e===null){var i=a.type;return typeof i=="function"&&!Wn(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Hp(e,t,i,l,s)):(e=cr(a.type,null,l,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Zo(e,s)){var r=i.memoizedProps;if(a=a.compare,a=a!==null?a:li,a(r,l)&&e.ref===t.ref)return Va(e,t,s)}return t.flags|=1,e=Ha(i,l),e.ref=t.ref,e.return=t,t.child=e}function Hp(e,t,a,l,s){if(e!==null){var i=e.memoizedProps;if(li(i,l)&&e.ref===t.ref)if(it=!1,t.pendingProps=l=i,Zo(e,s))(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,Va(e,t,s)}return Uo(e,t,a,l,s)}function qp(e,t,a,l){var s=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,s=0;l!==null;)s=s|l.lanes|l.childLanes,l=l.sibling;l=s&~i}else l=0,t.child=null;return Up(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&br(t,i!==null?i.cachePool:null),i!==null?Yu(t,i):bo(),Fu(t);else return l=t.lanes=536870912,Up(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(br(t,i.cachePool),Yu(t,i),dl(),t.memoizedState=null):(e!==null&&br(t,null),bo(),dl());return ct(e,t,s,a),t.child}function hi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Up(e,t,a,l,s){var i=co();return i=i===null?null:{parent:lt._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&br(t,null),bo(),Fu(t),e!==null&&Ol(e,t,l,!0),t.childLanes=s,null}function Nr(e,t){return t=Or({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Gp(e,t,a){return Ul(t,e.child,null,a),e=Nr(t,t.pendingProps),e.flags|=2,Gt(t),t.memoizedState=null,e}function ob(e,t,a){var l=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ue){if(l.mode==="hidden")return e=Nr(t,l),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},hi(null,e);if(ho(t),(e=ze)?(e=mm(e,aa),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:el!==null?{id:ha,overflow:va}:null,retryLane:536870912,hydrationErrors:null},a=Tu(e),a.return=t,t.child=a,ut=t,ze=null)):e=null,e===null)throw al(t);return t.lanes=536870912,null}return Nr(t,l)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(ho(t),s)if(t.flags&256)t.flags&=-257,t=Gp(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(it||Ol(e,t,a,!1),s=(a&e.childLanes)!==0,it||s){if(ol.current===null){if(l=Oe,l!==null&&(r=jd(l,a),r!==0&&r!==i.retryLane))throw i.retryLane=r,Rl(e,r),zt(l,e,r),qo;Wr()}t=Gp(e,t,a)}else e=i.treeContext,ze=sa(r.nextSibling),ut=t,ue=!0,tl=null,aa=!1,e!==null&&ju(t,e),t=Nr(t,l),t.flags|=134221824;return t}return e=Ha(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vs(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Uo(e,t,a,l,s){return zl(t),a=wo(e,t,a,l,void 0,s),l=Eo(),e!==null&&!it?(So(e,t,s),Va(e,t,s)):(ue&&l&&ur(t),t.flags|=1,ct(e,t,a,s),t.child)}function Yp(e,t,a,l,s,i){return zl(t),t.updateQueue=null,a=Qu(t,l,a,s),Vu(e),l=Eo(),e!==null&&!it?(So(e,t,i),Va(e,t,i)):(ue&&l&&ur(t),t.flags|=1,ct(e,t,a,i),t.child)}function Fp(e,t,a,l,s){if(zl(t),t.stateNode===null){var i=cs,r=a.contextType;typeof r=="object"&&r!==null&&(i=bt(r)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Bo,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},po(t),r=a.contextType,i.context=typeof r=="object"&&r!==null?bt(r):cs,i.state=t.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(Lo(t,a,r,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Bo.enqueueReplaceState(i,i.state,null),fi(t,l,i,s),pi(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var d=t.memoizedProps,f=Yl(a,d);i.props=f;var w=i.context,j=a.contextType;r=cs,typeof j=="object"&&j!==null&&(r=bt(j));var _=a.getDerivedStateFromProps;j=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,j||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||w!==r)&&Dp(t,i,l,r),il=!1;var v=t.memoizedState;i.state=v,fi(t,l,i,s),pi(),w=t.memoizedState,d||v!==w||il?(typeof _=="function"&&(Lo(t,a,_,l),w=t.memoizedState),(f=il||kp(t,a,f,l,v,w,r))?(j||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),i.props=l,i.state=w,i.context=r,l=f):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,fo(e,t),r=t.memoizedProps,j=Yl(a,r),i.props=j,_=t.pendingProps,v=i.context,w=a.contextType,f=cs,typeof w=="object"&&w!==null&&(f=bt(w)),d=a.getDerivedStateFromProps,(w=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==_||v!==f)&&Dp(t,i,l,f),il=!1,v=t.memoizedState,i.state=v,fi(t,l,i,s),pi();var A=t.memoizedState;r!==_||v!==A||il||e!==null&&e.dependencies!==null&&mr(e.dependencies)?(typeof d=="function"&&(Lo(t,a,d,l),A=t.memoizedState),(j=il||kp(t,a,j,l,v,A,f)||e!==null&&e.dependencies!==null&&mr(e.dependencies))?(w||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,A,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,A,f)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=A),i.props=l,i.state=A,i.context=f,l=j):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,vs(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Ul(t,e.child,null,s),t.child=Ul(t,null,a,s)):ct(e,t,a,s),t.memoizedState=i.state,e=t.child):e=Va(e,t,s),e}function Vp(e,t,a,l){return Ml(),t.flags|=256,ct(e,t,a,l),t.child}var Go={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yo(e){return{baseLanes:e,cachePool:Nu()}}function Fo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Vt),e}function Qp(e,t,a){var l=t.pendingProps,s=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(ht.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ue){if(s?cl(t):dl(),(e=ze)?(e=mm(e,aa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:el!==null?{id:ha,overflow:va}:null,retryLane:536870912,hydrationErrors:null},a=Tu(e),a.return=t,t.child=a,ut=t,ze=null)):e=null,e===null)throw al(t);return Yc(e)?t.lanes=32:t.lanes=536870912,null}return i=l.children,l=l.fallback,s?(dl(),s=t.mode,i=Or({mode:"hidden",children:i},s),l=_l(l,s,a,null),i.return=t,l.return=t,i.sibling=l,t.child=i,l=t.child,l.memoizedState=Yo(a),l.childLanes=Fo(e,r,a),t.memoizedState=Go,hi(null,l)):(cl(t),Vo(t,i))}var d=e.memoizedState;if(d!==null){var f=d.dehydrated;if(f!==null)return cb(e,t,i,r,l,f,d,a)}return s?(dl(),s=l.fallback,i=t.mode,d=e.child,f=d.sibling,l=Ha(d,{mode:"hidden",children:l.children}),l.subtreeFlags=d.subtreeFlags&1206910976,f!==null?s=Ha(f,s):(s=_l(s,i,a,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,hi(null,l),l=t.child,s=e.child.memoizedState,s===null?s=Yo(a):(i=s.cachePool,i!==null?(d=lt._currentValue,i=i.parent!==d?{parent:d,pool:d}:i):i=Nu(),s={baseLanes:s.baseLanes|a,cachePool:i}),l.memoizedState=s,l.childLanes=Fo(e,r,a),t.memoizedState=Go,hi(e.child,l)):(cl(t),a=e.child,e=a.sibling,a=Ha(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a)}function Vo(e,t){return t=Or({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Or(e,t){return e=_t(22,e,null,t),e.lanes=0,e}function zr(e,t,a){return Ul(t,e.child,null,a),e=Vo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cb(e,t,a,l,s,i,r,d){if(a)return t.flags&256?(cl(t),t.flags&=-257,zr(e,t,d)):t.memoizedState!==null?(dl(),t.child=e.child,t.flags|=128,null):(dl(),i=s.fallback,r=t.mode,s=Or({mode:"visible",children:s.children},r),i=_l(i,r,d,null),i.flags|=2,s.return=t,i.return=t,s.sibling=i,t.child=s,Ul(t,e.child,null,d),s=t.child,s.memoizedState=Yo(d),s.childLanes=Fo(e,l,d),t.memoizedState=Go,hi(null,s));if(cl(t),Yc(i)){if(l=i.nextSibling&&i.nextSibling.dataset,l)var f=l.dgst;return l=f,l!==""&&(s=Error(o(419)),s.stack="",s.digest=l,ri({value:s,source:null,stack:null})),zr(e,t,d)}if(it||Ol(e,t,d,!1),l=(d&e.childLanes)!==0,it||l){if(ol.current!==null)return zr(e,t,d);if(l=Oe,l!==null&&(s=jd(l,d),s!==0&&s!==r.retryLane))throw r.retryLane=s,Rl(e,s),zt(l,e,s),qo;return Gc(i)||Wr(),zr(e,t,d)}return Gc(i)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,ze=sa(i.nextSibling),ut=t,ue=!0,tl=null,aa=!1,e!==null&&ju(t,e),t=Vo(t,s.children),t.flags|=134221824,t)}function Xp(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),fr(e.return,t,a)}function Zp(e){for(var t=null;e!==null;){var a=e.alternate;a!==null&&Er(a)===null&&(t=e),e=e.sibling}return t}function Lr(e,t,a,l,s,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:s,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=a,r.tailMode=s,r.treeForkCount=i)}function Qo(e){var t=e.child;for(e.child=null;t!==null;){var a=t.sibling;t.sibling=e.child,e.child=t,t=a}}function Xo(e,t,a){var l=t.pendingProps,s=l.revealOrder,i=l.tail;l=l.children;var r=ht.current;if(t.flags&128)return mi(t,r),null;var d=(r&2)!==0;if(d?(r=r&1|2,t.flags|=128):r&=1,mi(t,r),s==="backwards"&&e!==null?(Qo(e),ct(e,t,l,a),Qo(e)):ct(e,t,l,a),l=ue?ii:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xp(e,a,t);else if(e.tag===19)Xp(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":a=Zp(t.child),a===null?(s=t.child,t.child=null):(s=a.sibling,a.sibling=null,Qo(t)),Lr(t,!0,s,null,i,l);break;case"unstable_legacy-backwards":for(a=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Er(e)===null){t.child=s;break}e=s.sibling,s.sibling=a,a=s,s=e}Lr(t,!0,a,null,i,l);break;case"together":Lr(t,!1,null,null,void 0,l);break;case"independent":t.memoizedState=null;break;default:a=Zp(t.child),a===null?(s=t.child,t.child=null):(s=a.sibling,a.sibling=null),Lr(t,!1,s,a,i,l)}return t.child}function Kp(e,t,a){var l=t.pendingProps;return ll(t,t.type,l.value),ct(e,t,l.children,a),t.child}function Va(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ml|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Ol(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Ha(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ha(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Zo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&mr(e)))}function db(e,t,a){switch(t.tag){case 3:Fe(t,t.stateNode.containerInfo),ll(t,lt,e.memoizedState.cache),Ml();break;case 27:case 5:ba(t);break;case 4:Fe(t,t.stateNode.containerInfo);break;case 10:ll(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ho(t),null;break;case 13:var l=t.memoizedState;if(l!==null){if(l.dehydrated!==null)return cl(t),t.flags|=128,null;l=Ol(e,t,a,!1);var s=t.child.childLanes;return l||(a&s)!==0?Qp(e,t,a):(cl(t),e=Va(e,t,a),e!==null?e.sibling:null)}cl(t);break;case 19:if(t.flags&128)return Xo(e,t,a);if(s=(e.flags&128)!==0,l=(a&t.childLanes)!==0,l||(Ol(e,t,a,!1),l=(a&t.childLanes)!==0),s){if(l)return Xo(e,t,a);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),mi(t,ht.current),l)break;return null;case 22:return t.lanes=0,qp(e,t,a,t.pendingProps);case 24:ll(t,lt,e.memoizedState.cache)}return Va(e,t,a)}function $p(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)it=!0;else{if(!Zo(e,a)&&(t.flags&128)===0)return it=!1,db(e,t,a);it=(e.flags&131072)!==0}else it=!1,ue&&(t.flags&1048576)!==0&&Cu(t,ii,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Hl(t.elementType),t.type=e,typeof e=="function")Wn(e)?(l=Yl(e,l),t.tag=1,t=Fp(null,t,e,l,a)):(t.tag=0,t=Uo(null,t,e,l,a));else{if(e!=null){var s=e.$$typeof;if(s===q){t.tag=11,t=Lp(null,t,e,l,a);break e}else if(s===je){t.tag=14,t=Bp(null,t,e,l,a);break e}else if(s===Te){t.tag=10,t.type=e,t=Kp(null,t,a);break e}}throw t=ve(e)||e,Error(o(306,t,""))}}return t;case 0:return Uo(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,s=Yl(l,t.pendingProps),Fp(e,t,l,s,a);case 3:e:{if(Fe(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var i=t.memoizedState;s=i.element,fo(e,t),fi(t,l,null,a);var r=t.memoizedState;if(l=r.cache,ll(t,lt,l),l!==i.cache&&ro(t,[lt],a,!0),pi(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Vp(e,t,l,a);break e}else if(l!==s){s=Wt(Error(o(424)),t),ri(s),t=Vp(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ze=sa(e.firstChild),ut=t,ue=!0,tl=null,aa=!0,a=qu(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Ml(),l===s){t=Va(e,t,a);break e}ct(e,t,l,a)}t=t.child}return t;case 26:return vs(e,t),e===null?(a=wm(t.type,null,t.pendingProps,null))?t.memoizedState=a:ue||(t.stateNode=em(t.type,t.pendingProps,ce.current,t)):t.memoizedState=wm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ba(t),e===null&&ue&&(l=t.stateNode=gm(t.type,t.pendingProps,ce.current),ut=t,aa=!0,s=ze,hl(t.type)?(Fc=s,ze=sa(l.firstChild)):ze=s),ct(e,t,t.pendingProps.children,a),vs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ue&&((s=l=ze)&&(l=sg(l,t.type,t.pendingProps,aa),l!==null?(t.stateNode=l,ut=t,ze=sa(l.firstChild),aa=!1,s=!0):s=!1),s||al(t)),ba(t),s=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,Oc(s,i)?l=null:r!==null&&Oc(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=wo(e,t,Wx,null,null,a),Bs._currentValue=s),vs(e,t),ct(e,t,l,a),t.child;case 6:return e===null&&ue&&((e=a=ze)&&(a=ig(a,t.pendingProps,aa),a!==null?(t.stateNode=a,ut=t,ze=null,e=!0):e=!1),e||al(t)),null;case 13:return Qp(e,t,a);case 4:return Fe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ul(t,null,l,a):ct(e,t,l,a),t.child;case 11:return Lp(e,t,t.type,t.pendingProps,a);case 7:return l=t.pendingProps,vs(e,t),ct(e,t,l,a),t.child;case 8:return ct(e,t,t.pendingProps.children,a),t.child;case 12:return ct(e,t,t.pendingProps.children,a),t.child;case 10:return Kp(e,t,a);case 9:return s=t.type._context,l=t.pendingProps.children,zl(t),s=bt(s),l=l(s),t.flags|=1,ct(e,t,l,a),t.child;case 14:return Bp(e,t,t.type,t.pendingProps,a);case 15:return Hp(e,t,t.type,t.pendingProps,a);case 19:return Xo(e,t,a);case 31:return ob(e,t,a);case 22:return qp(e,t,a,t.pendingProps);case 24:return zl(t),l=bt(lt),e===null?(s=co(),s===null&&(s=Oe,i=no(),s.pooledCache=i,i.refCount++,i!==null&&(s.pooledCacheLanes|=a),s=i),t.memoizedState={parent:l,cache:s},po(t),ll(t,lt,s)):((e.lanes&a)!==0&&(fo(e,t),fi(t,null,null,a),pi()),s=e.memoizedState,i=t.memoizedState,s.parent!==l?(s={parent:l,cache:l},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ll(t,lt,l)):(l=i.cache,ll(t,lt,l),l!==s.cache&&ro(t,[lt],a,!0))),ct(e,t,t.pendingProps.children,a),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),l=t.pendingProps,l.name!=null&&l.name!=="auto"?t.flags|=e===null?18882560:18874368:ue&&ur(t),e!==null&&e.memoizedProps.name!==l.name?t.flags|=4194816:vs(e,t),ct(e,t,l.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Qa(e){e.flags|=4}function Ko(e,t,a,l,s){var i;if((i=(e.mode&32)!==0)&&(i=a===null?Am(t,l):Am(t,l)&&(l.src!==a.src||l.srcSet!==a.srcSet)),i){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(_f())e.flags|=8192;else throw ql=hr,uo}else e.flags&=-16777217}function Jp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Cm(t))if(_f())e.flags|=8192;else throw ql=hr,uo}function Br(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Td():536870912,e.lanes|=t,Ts|=t)}function vi(e,t){if(!ue)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null;break;default:for(t=e.tail,a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var s=e.child;s!==null;)a|=s.lanes|s.childLanes,l|=s.subtreeFlags&1206910976,l|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)a|=s.lanes|s.childLanes,l|=s.subtreeFlags,l|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function ub(e,t,a){var l=t.pendingProps;switch(ao(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ga(lt),Ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ps(t)?Qa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,so())),Le(t),null;case 26:var s=t.type,i=t.memoizedState;return e===null?(Qa(t),i!==null?(Le(t),Jp(t,i)):(Le(t),Ko(t,s,null,l,a))):i?i!==e.memoizedState?(Qa(t),Le(t),Jp(t,i)):(Le(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Qa(t),Le(t),Ko(t,s,e,l,a)),null;case 27:if(qe(t),a=ce.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Qa(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Le(t),t.subtreeFlags&=-33554433,null}e=pe.current,ps(t)?ku(t):(e=gm(s,l,a),t.stateNode=e,Qa(t))}return Le(t),t.subtreeFlags&=-33554433,null;case 5:if(qe(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Qa(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Le(t),t.subtreeFlags&=-33554433,null}if(i=pe.current,ps(t))ku(t);else{var r=Ri(ce.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?r.createElement(s,{is:l.is}):r.createElement(s)}}i[xt]=t,i[Rt]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(yt(i,s,l),s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Qa(t)}}return Le(t),t.subtreeFlags&=-33554433,Ko(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Qa(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=ce.current,ps(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,s=ut,s!==null)switch(s.tag){case 27:case 5:l=s.memoizedProps}e[xt]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Jf(e.nodeValue,a)),e||al(t,!0)}else e=Ri(e).createTextNode(l),e[xt]=t,t.stateNode=e}return Le(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ps(t),a!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[xt]=t}else Ml(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),e=!1}else a=so(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Gt(t),t):(Gt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Le(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=ps(t),l!==null&&l.dehydrated!==null){if(e===null){if(!s)throw Error(o(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[xt]=t}else Ml(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),s=!1}else s=so(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Gt(t),t):(Gt(t),null)}return Gt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,s=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(s=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==s&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Br(t,t.updateQueue),Le(t),null);case 4:return Ie(),e===null&&Dc(t.stateNode.containerInfo),t.flags|=67108864,Le(t),null;case 10:return Ga(t.type),Le(t),null;case 19:if(vo(t),l=t.memoizedState,l===null)return Le(t),null;if(s=(t.flags&128)!==0,i=l.rendering,i===null)if(s)vi(l,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Er(e),i!==null){for(t.flags|=128,vi(l,!1),e=i.updateQueue,t.updateQueue=e,Br(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Su(a,e),a=a.sibling;return mi(t,ht.current&1|2),ue&&qa(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Ue()>$r&&(t.flags|=128,s=!0,vi(l,!1),t.lanes=4194304)}else{if(!s)if(e=Er(i),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Br(t,e),vi(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!i.alternate&&!ue)return Le(t),null}else 2*Ue()-l.renderingStartTime>$r&&a!==536870912&&(t.flags|=128,s=!0,vi(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}if(l.tail!==null){e=l.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Ue(),e.sibling=null,i=ht.current,i=s?i&1|2:i&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!a||ue?mi(t,i):(a=i,H(gt,t),H(ht,a),St===null&&(St=t)),ue&&qa(t,l.treeForkCount),e}return Le(t),null;case 22:case 23:return Gt(t),go(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),a=t.updateQueue,a!==null&&Br(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&z(Bl),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ga(lt),Le(t),null;case 25:return null;case 30:return t.flags|=33554432,Le(t),null}throw Error(o(156,t.tag))}function pb(e,t){switch(ao(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ga(lt),Ie(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return qe(t),null;case 31:if(t.memoizedState!==null){if(Gt(t),t.alternate===null)throw Error(o(340));Ml()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ml()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return vo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Ie(),null;case 10:return Ga(t.type),null;case 22:case 23:return Gt(t),go(),e!==null&&z(Bl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ga(lt),null;case 25:return null;default:return null}}function Pp(e,t){switch(ao(t),t.tag){case 3:Ga(lt),Ie();break;case 26:case 27:case 5:qe(t);break;case 4:Ie();break;case 31:t.memoizedState!==null&&Gt(t);break;case 13:Gt(t);break;case 19:vo(t);break;case 10:Ga(t.type);break;case 22:case 23:Gt(t),go(),e!==null&&z(Bl);break;case 24:Ga(lt)}}function yi(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var s=l.next;a=s;do{if((a.tag&e)===e){l=void 0;var i=a.create,r=a.inst;l=i(),r.destroy=l}a=a.next}while(a!==s)}}catch(d){_e(t,t.return,d)}}function ul(e,t,a){try{var l=t.updateQueue,s=l!==null?l.lastEffect:null;if(s!==null){var i=s.next;l=i;do{if((l.tag&e)===e){var r=l.inst,d=r.destroy;if(d!==void 0){r.destroy=void 0,s=t;var f=a,w=d;try{w()}catch(j){_e(s,f,j)}}}l=l.next}while(l!==i)}}catch(j){_e(t,t.return,j)}}function Ip(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Gu(t,a)}catch(l){_e(e,e.return,l)}}}function Wp(e,t,a){a.props=Yl(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){_e(e,t,l)}}function ya(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:var s=e.stateNode,i=La(e.memoizedProps,s);(s.ref===null||s.ref.name!==i)&&(s.ref=nm(i)),l=s.ref;break;case 7:if(e.stateNode===null){var r=new Xt(e);m(e.child,!1,ag,r,void 0,void 0),e.stateNode=r}l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(d){_e(e,t,d)}}function vt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(s){_e(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){_e(e,t,s)}else a.current=null}function Hr(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var a=0;a<t.length;a++)fm(e.stateNode,t[a])}function ef(e){for(var t=e.return;t!==null&&(Jo(t)&&fm(e.stateNode,t.stateNode),!$o(t));)t=t.return}function wi(e){for(var t=e.return;t!==null&&(Jo(t)&&lg(e.stateNode,t.stateNode),!$o(t));)t=t.return}function $o(e){return e.tag===5||e.tag===3||e.tag===27}function Jo(e){return e&&e.tag===7&&e.stateNode!==null}function Po(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(s){_e(e,e.return,s)}}function Io(e,t,a){try{var l=e.stateNode;Hb(l,e.type,a,t),l[Rt]=t}catch(s){_e(e,e.return,s)}}function tf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&hl(e.type)||e.tag===4}function Wo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&hl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ec(e,t,a,l){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(s,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(s),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ga)),Hr(e,l),Ae=!0;else if(s!==4&&(s===27&&(Hr(e,l),l=null,hl(e.type)&&(a=e.stateNode,t=null)),e=e.child,e!==null))for(ec(e,t,a,l),e=e.sibling;e!==null;)ec(e,t,a,l),e=e.sibling}function qr(e,t,a,l){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?a.insertBefore(s,t):a.appendChild(s),Hr(e,l),Ae=!0;else if(s!==4&&(s===27&&(Hr(e,l),l=null,hl(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(qr(e,t,a,l),e=e.sibling;e!==null;)qr(e,t,a,l),e=e.sibling}function af(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);yt(t,l,a),t[xt]=e,t[Rt]=a}catch(i){_e(e,e.return,i)}}var Ur=!1,Yt=null;function lf(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Ur=!0)}var wa=null;function sf(){var e=wa;return wa=null,e}var Mt=0;function ys(e,t,a,l,s){return Mt=0,rf(e.child,t,a,l,s)}function rf(e,t,a,l,s){for(var i=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(l!==null){var d=Bc(r);l.push(d),d.view&&(i=!0)}else i||Bc(r).view&&(i=!0);Ur=!0,im(r,Mt===0?t:t+"_"+Mt,a),Mt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||rf(e.child,t,a,l,s)&&(i=!0));e=e.sibling}return i}function Ea(e,t){for(;e!==null;)e.tag===5?rm(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Ea(e.child,t)),e=e.sibling}function Gr(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Gr(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(o(544));var a=t.name;t=Ba(t.default,t.share),t!=="none"&&(ys(e,a,t,null,!1)||Ea(e.child,!1))}e=e.sibling}}function tc(e,t){if(e.tag===30){var a=e.stateNode,l=e.memoizedProps,s=La(l,a),i=Ba(l.default,a.paired?l.share:l.enter);i!=="none"?ys(e,s,i,null,!1)?(Gr(e),a.paired||t||ks(e,l.onEnter)):Ea(e.child,!1):Gr(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)tc(e,t),e=e.sibling;else Gr(e)}function ac(e){if(Yt!==null&&Yt.size!==0){var t=Yt;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,l=a.name;if(l!=null&&l!=="auto"){var s=t.get(l);if(s!==void 0){var i=Ba(a.default,a.share);if(i!=="none"&&(ys(e,l,i,null,!1)?(i=e.stateNode,s.paired=i,i.paired=s,ks(e,a.onShare)):Ea(e.child,!1)),t.delete(l),t.size===0)break}}}ac(e)}e=e.sibling}}}function lc(e){if(e.tag===30){var t=e.memoizedProps,a=La(t,e.stateNode),l=Yt!==null?Yt.get(a):void 0,s=Ba(t.default,l!==void 0?t.share:t.exit);s!=="none"&&(ys(e,a,s,null,!1)?l!==void 0?(s=e.stateNode,l.paired=s,s.paired=l,Yt.delete(a),ks(e,t.onShare)):ks(e,t.onExit):Ea(e.child,!1)),Yt!==null&&ac(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)lc(e),e=e.sibling;else Yt!==null&&ac(e)}function nf(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,a=La(t,e.stateNode);t=Ba(t.default,t.update),e.flags&=-5,t!=="none"&&ys(e,a,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&nf(e);e=e.sibling}}function sc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Ea(e.child,!1))}sc(e)}e=e.sibling}}function Yr(e){if(e.tag===30)e.stateNode.paired=null,Ea(e.child,!1),sc(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Yr(e),e=e.sibling;else sc(e)}function of(e){for(e=e.child;e!==null;)e.tag===30?Ea(e.child,!1):(e.subtreeFlags&33554432)!==0&&of(e),e=e.sibling}function ic(e,t,a,l,s,i,r){for(var d=!1;t!==null;){if(t.tag===5){var f=t.stateNode;if(i!==null&&Mt<i.length){var w=i[Mt],j=Bc(f);(w.view||j.view)&&(d=!0);var _;if(_=(e.flags&4)===0)if(j.clip)_=!0;else{_=w.rect;var v=j.rect;_=_.y!==v.y||_.x!==v.x||_.height!==v.height||_.width!==v.width}_&&(e.flags|=4),j.abs?j=!w.abs:(w=w.rect,j=j.rect,j=w.height!==j.height||w.width!==j.width),j&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&im(f,Mt===0?a:a+"_"+Mt,s),d&&(e.flags&4)!==0||(wa===null&&(wa=[]),wa.push(f,Mt===0?l:l+"_"+Mt,t.memoizedProps)),Mt++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:ic(e,t.child,a,l,s,i,r)&&(d=!0));t=t.sibling}return d}function cf(e,t){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,l=e.stateNode,s=La(a,l),i=Ba(a.default,a.update),r;r=e.memoizedState,e.memoizedState=null,l=e;var d=e.child;Mt=0,s=ic(l,d,s,s,i,r,!1),(e.flags&4)!==0&&s&&ks(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&cf(e);e=e.sibling}}var pt=!1,De=!1,Sa=!1,rc=!1,df=typeof WeakSet=="function"?WeakSet:Set,ft=null,Ta=!1,Ei=!1,Fr=!1,nc=!1;function fb(e,t,a){if(e=e.containerInfo,Mc=Hs,e=fu(e),Xn(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var s=l.getSelection&&l.getSelection();if(s&&s.rangeCount!==0){l=s.anchorNode;var i=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{l.nodeType,r.nodeType}catch{l=null;break e}var d=0,f=-1,w=-1,j=0,_=0,v=e,A=null;t:for(;;){for(var B;v!==l||i!==0&&v.nodeType!==3||(f=d+i),v!==r||s!==0&&v.nodeType!==3||(w=d+s),v.nodeType===3&&(d+=v.nodeValue.length),(B=v.firstChild)!==null;)A=v,v=B;for(;;){if(v===e)break t;if(A===l&&++j===i&&(f=d),A===r&&++_===s&&(w=d),(B=v.nextSibling)!==null)break;v=A,A=v.parentNode}v=B}l=f===-1||w===-1?null:{start:f,end:w}}else l=null}l=l||{start:0,end:0}}else l=null;for(Nc={focusedElem:e,selectionRange:l},Hs=!1,a=(a&335544064)===a,ft=t,t=a?9270:1024;ft!==null;){if(e=ft,a&&(l=e.deletions,l!==null))for(i=0;i<l.length;i++)a&&lc(l[i]);if(e.alternate===null&&(e.flags&2)!==0)a&&lf(e),Vr(a);else{if(e.tag===22){if(l=e.alternate,e.memoizedState!==null){l!==null&&l.memoizedState===null&&a&&lc(l),Vr(a);continue}else if(l!==null&&l.memoizedState!==null){a&&lf(e),Vr(a);continue}}l=e.child,(e.subtreeFlags&t)!==0&&l!==null?(l.return=e,ft=l):(a&&nf(e),Vr(a))}}Yt=null}function Vr(e){for(;ft!==null;){var t=ft,a=e,l=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&l!==null){a=void 0,s=l.memoizedProps,l=l.memoizedState;var i=t.stateNode;try{var r=Yl(t.type,s);a=i.getSnapshotBeforeUpdate(r,l),i.__reactInternalSnapshotBeforeUpdate=a}catch(d){_e(t,t.return,d)}}break;case 3:if((s&1024)!==0){if(l=t.stateNode.containerInfo,a=l.nodeType,a===9)Uc(l);else if(a===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":Uc(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&l!==null&&(a=La(l.memoizedProps,l.stateNode),s=t.memoizedProps,s=Ba(s.default,s.update),s!=="none"&&ys(l,a,s,l.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(o(163))}if(l=t.sibling,l!==null){l.return=t.return,ft=l;break}ft=t.return}}function uf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Aa(e,a),l&4&&yi(5,a);break;case 1:if(Aa(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(r){_e(a,a.return,r)}else{var s=Yl(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){_e(a,a.return,r)}}l&64&&Ip(a),l&512&&ya(a,a.return);break;case 3:if(Aa(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Gu(e,t)}catch(r){_e(a,a.return,r)}}break;case 27:t===null&&l&4&&af(a);case 26:case 5:Aa(e,a),t===null&&l&4&&Po(a),l&512&&ya(a,a.return);break;case 12:Aa(e,a);break;case 31:Aa(e,a),l&4&&xf(e,a);break;case 13:Aa(e,a),l&4&&bf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ab.bind(null,a),rg(e,a))));break;case 22:if(l=a.memoizedState!==null||pt,!l){var i=t!==null&&t.memoizedState!==null||De;t=pt,s=De,pt=l,(De=i)&&!s?(l=2,(a.subtreeFlags&8772)!==0&&(l|=1),ua(e,a,l)):Aa(e,a),pt=t,De=s}break;case 30:Aa(e,a),l&512&&ya(a,a.return);break;case 7:l&512&&ya(a,a.return);default:Aa(e,a)}}function oc(e,t){for(e=e.child;e!==null;)pf(e,t),e=e.sibling}function pf(e,t){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(t){var l=a.style;typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"}else{var s=e.stateNode,i=e.memoizedProps.style,r=i!=null&&i.hasOwnProperty("display")?i.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(f){_e(e,e.return,f)}cc(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Ae=!0}catch(f){_e(e,e.return,f)}break;case 18:try{var d=e.stateNode;t?sm(d,!0):sm(e.stateNode,!1)}catch(f){_e(e,e.return,f)}break;case 22:case 23:e.memoizedState===null&&oc(e,t);break;default:oc(e,t)}}function cc(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,l=t;switch(a.tag){case 4:pf(a,l);break e;case 22:a.memoizedState===null&&cc(a,l);break e;default:cc(a,l)}}e=e.sibling}}function ff(e){var t=e.alternate;t!==null&&(e.alternate=null,ff(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$i(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,Nt=!1;function ca(e,t,a){for(a=a.child;a!==null;)mf(e,t,a),a=a.sibling}function mf(e,t,a){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Qs,a)}catch{}switch(a.tag){case 26:De||vt(a,t),ca(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!De&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:De||vt(a,t),wi(a);var l=Ge,s=Nt;hl(a.type)&&(Ge=a.stateNode,Nt=!1),ca(e,t,a),hm(a.stateNode,a.type,a.memoizedProps),Ge=l,Nt=s;break;case 5:De||vt(a,t),wi(a);case 6:if(a.tag===6&&wi(a),l=Ge,s=Nt,Ge=null,ca(e,t,a),Ge=l,Nt=s,Ge!==null)if(Nt)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(a.stateNode),Ae=!0}catch(i){_e(a,t,i)}else try{Ge.removeChild(a.stateNode),Ae=!0}catch(i){_e(a,t,i)}break;case 18:Ge!==null&&(Nt?(e=Ge,lm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),qs(e)):lm(Ge,a.stateNode));break;case 4:l=Ge,s=Nt,Ge=a.stateNode.containerInfo,Nt=!0,ca(e,t,a),Ge=l,Nt=s;break;case 0:case 11:case 14:case 15:ul(2,a,t),De||ul(4,a,t),ca(e,t,a);break;case 1:De||(vt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Wp(a,t,l)),ca(e,t,a);break;case 21:ca(e,t,a);break;case 22:De=(l=De)||a.memoizedState!==null,ca(e,t,a),De=l;break;case 30:vt(a,t),ca(e,t,a);break;case 7:De||vt(a,t),ca(e,t,a);break;default:ca(e,t,a)}}function xf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{qs(e)}catch(a){_e(t,t.return,a)}}}function bf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{qs(e)}catch(a){_e(t,t.return,a)}}function mb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new df),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new df),t;default:throw Error(o(435,e.tag))}}function Qr(e,t){var a=mb(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var s=Cb.bind(null,e,l);l.then(s,s)}})}function jt(e,t,a){var l=t.deletions;if(l!==null)for(var s=0;s<l.length;s++){var i=l[s],r=e,d=t,f=d;e:for(;f!==null;){switch(f.tag){case 27:if(hl(f.type)){Ge=f.stateNode,Nt=!1;break e}break;case 5:Ge=f.stateNode,Nt=!1;break e;case 3:case 4:Ge=f.stateNode.containerInfo,Nt=!0;break e}f=f.return}if(Ge===null)throw Error(o(160));mf(r,d,i),Ge=null,Nt=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gf(t,e,a),t=t.sibling}var da=null;function gf(e,t,a){var l=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(l=e.updateQueue,l=l!==null?l.events:null,l!==null))for(var i=0;i<l.length;i++){var r=l[i];r.ref.impl=r.nextImpl}jt(t,e,a),kt(e),s&4&&(ul(3,e,e.return),yi(3,e),ul(5,e,e.return));break;case 1:jt(t,e,a),kt(e),s&512&&(De||l===null||vt(l,l.return)),s&64&&pt&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?t:a.concat(t))));break;case 26:if(i=da,jt(t,e,a),kt(e),s&512&&(De||l===null||vt(l,l.return)),s&4)if(s=l!==null?l.memoizedState:null,a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null)if(pt)e.stateNode=em(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,a=e.memoizedProps,s=i.ownerDocument||i;t:switch(t){case"title":l=s.getElementsByTagName("title")[0],(!l||l[Ks]||l[xt]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=s.createElement(t),s.head.insertBefore(l,s.querySelector("head > title"))),yt(l,t,a),l[xt]=e,dt(l),t=l;break e;case"link":if(i=Tm("link","href",s).get(t+(a.href||""))){for(r=0;r<i.length;r++)if(l=i[r],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(r,1);break t}}l=s.createElement(t),yt(l,t,a),s.head.appendChild(l);break;case"meta":if(i=Tm("meta","content",s).get(t+(a.content||""))){for(r=0;r<i.length;r++)if(l=i[r],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(r,1);break t}}l=s.createElement(t),yt(l,t,a),s.head.appendChild(l);break;default:throw Error(o(468,t))}l[xt]=e,dt(l),t=l}e.stateNode=t}else pt||Zc(i,e.type,e.stateNode);else e.stateNode=Sm(i,a,e.memoizedProps);else s!==a?(s===null?(t=l.stateNode,t===null||De||t.parentNode.removeChild(t)):s.count--,a===null?pt||Zc(i,e.type,e.stateNode):Sm(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Io(e,e.memoizedProps,l.memoizedProps);break;case 27:jt(t,e,a),kt(e),s&512&&(De||l===null||vt(l,l.return)),l!==null&&s&4&&Io(e,e.memoizedProps,l.memoizedProps);break;case 5:if(i=Sa,Sa=!1,jt(t,e,a),Sa=i,kt(e),s&512&&(De||l===null||vt(l,l.return)),e.flags&32){t=e.stateNode;try{as(t,""),Ae=!0}catch(j){_e(e,e.return,j)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Io(e,t,l!==null?l.memoizedProps:t)),s&1024&&(rc=!0);break;case 6:if(jt(t,e,a),kt(e),s&4){if(e.stateNode===null)throw Error(o(162));t=e.memoizedProps,a=e.stateNode;try{a.nodeValue=t,Ae=!0}catch(j){_e(e,e.return,j)}}break;case 3:if(Ae=!1,nn=null,i=da,da=_i(t.containerInfo),jt(t,e,a),da=i,kt(e),s&4&&l!==null&&l.memoizedState.isDehydrated)try{qs(t.containerInfo)}catch(j){_e(e,e.return,j)}rc&&(rc=!1,hf(e)),Ae=!1;break;case 4:s=Sa,Sa=pt,l=Bd(),i=da,da=_i(e.stateNode.containerInfo),jt(t,e,a),kt(e),da=i,Ae&&Ei&&(Fr=!0),Ae=l,Sa=s;break;case 12:jt(t,e,a),kt(e);break;case 31:jt(t,e,a),kt(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Qr(e,t)));break;case 13:jt(t,e,a),kt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Kr=Ue()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Qr(e,t)));break;case 22:i=e.memoizedState!==null,r=l!==null&&l.memoizedState!==null;var d=pt,f=De,w=Sa;pt=d||i,Sa=w||i,De=f||r,jt(t,e,a),De=f,Sa=w,pt=d,kt(e),s&8192&&(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,!i||l===null||r||pt||De||(t=r||De,a=pt,l=De,pt=i||pt,De=t,pl(e,2),pt=a,De=l),!i&&Sa||oc(e,i)),s&4&&(t=e.updateQueue,t!==null&&(a=t.retryQueue,a!==null&&(t.retryQueue=null,Qr(e,a))));break;case 19:jt(t,e,a),kt(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Qr(e,t)));break;case 30:s&512&&(De||l===null||vt(l,l.return)),s=Bd(),i=Ei,r=(a&335544064)===a,d=e.memoizedProps,Ei=r&&Ba(d.default,d.update)!=="none",jt(t,e,a),kt(e),r&&l!==null&&Ae&&(e.flags|=4),Ei=i,Ae=s;break;case 21:break;case 7:s&512&&(De||l===null||vt(l,l.return)),l&&l.stateNode!==null&&(l.stateNode._fragmentFiber=e);default:jt(t,e,a),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(tf(l)){a=l;break}l=l.return}l=null;for(var s=e.return;s!==null;){if(Jo(s)){var i=s.stateNode;l===null?l=[i]:l.push(i)}if($o(s))break;s=s.return}var r=l;if(a==null)throw Error(o(160));switch(a.tag){case 27:var d=a.stateNode,f=Wo(e);qr(e,f,d,r);break;case 5:var w=a.stateNode;a.flags&32&&(as(w,""),a.flags&=-33);var j=Wo(e);qr(e,j,w,r);break;case 3:case 4:var _=a.stateNode.containerInfo,v=Wo(e);ec(e,v,_,r);break;default:throw Error(o(161))}}catch(A){_e(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;hf(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Hs=!0,t.reset(),Hs=!1),e=e.sibling}}function ws(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)vf(t,e),t=t.sibling;else cf(t)}function vf(e,t){var a=e.alternate;if(a===null)tc(e,!1);else switch(e.tag){case 3:if(nc=Ta=!1,sf(),ws(t,e),!Ta&&!Fr){if(e=wa,e!==null)for(var l=0;l<e.length;l+=3){a=e[l];var s=e[l+1];rm(a,e[l+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),nc=!0}wa=null;break;case 5:ws(t,e);break;case 4:l=Ta,Ta=!1,ws(t,e),Ta&&(Fr=!0),Ta=l;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?tc(e,!1):ws(t,e));break;case 30:l=Ta,s=sf(),Ta=!1,ws(t,e),Ta&&(e.flags|=4);var i=e.memoizedProps,r=e.stateNode;t=La(i,r),r=La(a.memoizedProps,r);var d=Ba(i.default,i.update);d==="none"?t=!1:(i=a.memoizedState,a.memoizedState=null,a=e.child,Mt=0,t=ic(e,a,t,r,d,i,!0),Mt!==(i===null?0:i.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(ks(e,e.memoizedProps.onUpdate),wa=s):s!==null&&(s.push.apply(s,wa),wa=s),Ta=(e.flags&32)!==0?!0:l;break;default:ws(t,e)}}function Aa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)uf(e,t.alternate,t),t=t.sibling}function pl(e,t){for(e=e.child;e!==null;){var a=e,l=t;switch(a.tag){case 0:case 11:case 14:case 15:ul(4,a,a.return),pl(a,l);break;case 1:vt(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&Wp(a,a.return,s),pl(a,l);break;case 27:(l&2)!==0&&hm(a.stateNode,a.type,a.memoizedProps);case 5:vt(a,a.return),a.tag!==5&&a.tag!==27||wi(a),pl(a,l);break;case 6:wi(a);break;case 26:vt(a,a.return),s=a.stateNode,a.memoizedState!==null||s===null||De||s.parentNode.removeChild(s),pl(a,l);break;case 22:a.memoizedState===null&&pl(a,l);break;case 30:vt(a,a.return),pl(a,l);break;case 7:vt(a,a.return);default:pl(a,l)}e=e.sibling}}function ua(e,t,a){for(a=(t.subtreeFlags&8772)!==0?a:a&-2,t=t.child;t!==null;){var l=t.alternate,s=e,i=t,r=i.flags,d=(a&1)!==0;switch(i.tag){case 0:case 11:case 15:ua(s,i,a),yi(4,i);break;case 1:if(ua(s,i,a),l=i,s=l.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(j){_e(l,l.return,j)}if(l=i,s=l.updateQueue,s!==null){var f=l.stateNode;try{var w=s.shared.hiddenCallbacks;if(w!==null)for(s.shared.hiddenCallbacks=null,s=0;s<w.length;s++)Uu(w[s],f)}catch(j){_e(l,l.return,j)}}d&&r&64&&Ip(i),ya(i,i.return);break;case 27:(a&2)!==0&&af(i);case 5:i.tag!==5&&i.tag!==27||ef(i),ua(s,i,a),d&&l===null&&r&4&&Po(i),ya(i,i.return);break;case 6:ef(i);break;case 26:f=i.stateNode,i.memoizedState!==null||f===null||pt||Zc(_i(f.ownerDocument),i.type,f),ua(s,i,a),d&&l===null&&r&4&&Po(i),ya(i,i.return);break;case 12:ua(s,i,a);break;case 31:ua(s,i,a),d&&r&4&&xf(s,i);break;case 13:ua(s,i,a),d&&r&4&&bf(s,i);break;case 22:i.memoizedState===null&&ua(s,i,a),ya(i,i.return);break;case 30:ua(s,i,a),ya(i,i.return);break;case 7:ya(i,i.return);default:ua(s,i,a)}t=t.sibling}}function dc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ni(a))}function uc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ni(e))}function la(e,t,a,l){var s=(a&335544064)===a;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)yf(e,t,a,l),t=t.sibling;else s&&of(t)}function yf(e,t,a,l){var s=(a&335544064)===a;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Yr(t);var i=t.flags;switch(t.tag){case 0:case 11:case 15:la(e,t,a,l),i&2048&&yi(9,t);break;case 1:la(e,t,a,l);break;case 3:la(e,t,a,l),s&&nc&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),i&2048&&(i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&ni(i)));break;case 12:if(i&2048){la(e,t,a,l),i=t.stateNode;try{var r=t.memoizedProps,d=r.id,f=r.onPostCommit;typeof f=="function"&&f(d,t.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(w){_e(t,t.return,w)}}else la(e,t,a,l);break;case 31:la(e,t,a,l);break;case 13:la(e,t,a,l);break;case 23:break;case 22:r=t.stateNode,d=t.alternate,t.memoizedState!==null?(s&&d!==null&&d.memoizedState===null&&Yr(d),r._visibility&2?la(e,t,a,l):Si(e,t)):(s&&d!==null&&d.memoizedState!==null&&Yr(t),r._visibility&2?la(e,t,a,l):(r._visibility|=2,Es(e,t,a,l,(t.subtreeFlags&10256)!==0||!1))),i&2048&&dc(d,t);break;case 24:la(e,t,a,l),i&2048&&uc(t.alternate,t);break;case 30:s&&(i=t.alternate,i!==null&&(Ea(i.child,!0),Ea(t.child,!0))),la(e,t,a,l);break;default:la(e,t,a,l)}}function Es(e,t,a,l,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,d=a,f=l,w=r.flags;switch(r.tag){case 0:case 11:case 15:Es(i,r,d,f,s),yi(8,r);break;case 23:break;case 22:var j=r.stateNode;r.memoizedState!==null?j._visibility&2?Es(i,r,d,f,s):Si(i,r):(j._visibility|=2,Es(i,r,d,f,s)),s&&w&2048&&dc(r.alternate,r);break;case 24:Es(i,r,d,f,s),s&&w&2048&&uc(r.alternate,r);break;default:Es(i,r,d,f,s)}t=t.sibling}}function Si(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,s=l.flags;switch(l.tag){case 22:Si(a,l),s&2048&&dc(l.alternate,l);break;case 24:Si(a,l),s&2048&&uc(l.alternate,l);break;default:Si(a,l)}t=t.sibling}}var Fl=8192;function Vl(e,t,a){if(e.subtreeFlags&Fl)for(e=e.child;e!==null;)wf(e,t,a),e=e.sibling}function wf(e,t,a){switch(e.tag){case 26:Vl(e,t,a),e.flags&Fl&&(e.memoizedState!==null?yg(a,da,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&km(a,e)));break;case 5:Vl(e,t,a),e.flags&Fl&&(e=e.stateNode,(t&335544128)===t&&km(a,e));break;case 3:case 4:var l=da;da=_i(e.stateNode.containerInfo),Vl(e,t,a),da=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Fl,Fl=16777216,Vl(e,t,a),Fl=l):Vl(e,t,a));break;case 30:if((e.flags&Fl)!==0&&(l=e.memoizedProps.name,l!=null&&l!=="auto")){var s=e.stateNode;s.paired=null,Yt===null&&(Yt=new Map),Yt.set(l,s)}Vl(e,t,a);break;default:Vl(e,t,a)}}function Ef(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ti(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];ft=l,Tf(l,e)}Ef(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sf(e),e=e.sibling}function Sf(e){switch(e.tag){case 0:case 11:case 15:Ti(e),e.flags&2048&&ul(9,e,e.return);break;case 3:Ti(e);break;case 12:Ti(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xr(e)):Ti(e);break;default:Ti(e)}}function Xr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];ft=l,Tf(l,e)}Ef(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ul(8,t,t.return),Xr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Xr(t));break;default:Xr(t)}e=e.sibling}}function Tf(e,t){for(;ft!==null;){var a=ft;switch(a.tag){case 0:case 11:case 15:ul(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ni(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,ft=l;else e:for(a=e;ft!==null;){l=ft;var s=l.sibling,i=l.return;if(ff(l),l===a){ft=null;break e}if(s!==null){s.return=i,ft=s;break e}ft=i}}}var xb={getCacheForType:function(e){var t=bt(lt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return bt(lt).controller.signal}},bb=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Oe=null,me=null,ge=0,Re=0,Ft=null,fl=!1,Ss=!1,pc=!1,Xa=0,Ke=0,ml=0,Ql=0,Zr=0,Vt=0,Ts=0,Ai=null,Ot=null,fc=!1,Kr=0,Af=0,$r=1/0,Jr=null,xl=null,Ve=0,pa=null,Xl=null,Ca=0,mc=0,xc=null,Cf=null,As=null,Cs=null,js=null,Ci=0,Pr=null;function Qt(){return(Ce&2)!==0&&ge!==0?ge&-ge:Q.T!==null?Ac():kd()}function jf(){if(Vt===0)if((ge&536870912)===0||ue){var e=Qi;Qi<<=1,(Qi&3932160)===0&&(Qi=262144),Vt=e}else Vt=536870912;return e=gt.current,e!==null&&(e.flags|=32),Vt}function ks(e,t){if(t!=null){var a=e.stateNode,l=a.ref;l===null&&(l=a.ref=nm(La(e.memoizedProps,a))),Cs===null&&(Cs=[]),Cs.push(t.bind(null,l))}}function zt(e,t,a){(e===Oe&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(Ds(e,0),bl(e,ge,Vt,!1)),Zs(e,a),((Ce&2)===0||e!==Oe)&&(e===Oe&&((Ce&2)===0&&(Ql|=a),Ke===4&&bl(e,ge,Vt,!1)),ja(e))}function kf(e,t,a){if((Ce&6)!==0)throw Error(o(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Xs(e,t),s=l?vb(e,t):gc(e,t,!0),i=l;do{if(s===0){Ss&&!l&&bl(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!gb(a)){s=gc(e,t,!1),i=!1;continue}if(s===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var d=e;s=Ai;var f=d.current.memoizedState.isDehydrated;if(f&&(Ds(d,r).flags|=256),r=gc(d,r,!1),r!==2&&r!==6){if(pc&&!f){d.errorRecoveryDisabledLanes|=i,Ql|=i,s=4;break e}i=Ot,Ot=s,i!==null&&(Ot===null?Ot=i:Ot.push.apply(Ot,i))}s=r}if(i=!1,s!==2)continue}}if(s===1){Ds(e,0),bl(e,t,0,!0);break}e:{switch(l=e,i=s,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:bl(l,t,Vt,!fl);break e;case 2:Ot=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(s=Kr+300-Ue(),10<s)){if(bl(l,t,Vt,!fl),Zi(l,0,!0)!==0)break e;Ca=t,l.timeoutHandle=Lc(Df.bind(null,l,a,Ot,Jr,fc,t,Vt,Ql,Ts,fl,i,"Throttled",-0,0),s);break e}Df(l,a,Ot,Jr,fc,t,Vt,Ql,Ts,fl,i,null,-0,0)}}break}while(!0);ja(e)}function Df(e,t,a,l,s,i,r,d,f,w,j,_,v,A){e.timeoutHandle=-1;var B=t.subtreeFlags,V=(i&335544064)===i;if(_=null,(V||B&8192||(B&16785408)===16785408)&&(_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ga},Yt=null,wf(t,i,_),V&&(B=_,V=e.containerInfo,V=(V.nodeType===9?V:V.ownerDocument).__reactViewTransition,V!=null&&(B.count++,B.waitingForViewTransition=!0,B=Oi.bind(B),V.finished.then(B,B))),B=(i&62914560)===i?Kr-Ue():(i&4194048)===i?Af-Ue():0,B=wg(_,B),B!==null)){Ca=i,e.cancelPendingCommit=B(Bf.bind(null,e,t,i,a,l,s,r,d,f,w,j,_,null,v,A)),bl(e,i,r,!w);return}Bf(e,t,i,a,l,s,r,d,f,w,j,_)}function gb(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var s=a[l],i=s.getSnapshot;s=s.value;try{if(!Ut(i(),s))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bl(e,t,a,l){t=Sd(e,t),t&=~Zr,t&=~Ql,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var s=t;0<s;){var i=31-Ht(s),r=1<<i;l[i]=-1,s&=~r}a!==0&&Ad(e,a,t)}function Ir(){return(Ce&6)===0?(ji(0),!1):!0}function bc(){if(me!==null){if(Re===0)var e=me.return;else e=me,Ua=Nl=null,To(e),xs=null,di=0,e=me;for(;e!==null;)Pp(e.alternate,e),e=e.return;me=null}}function Ds(e,t){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,Gb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ca=0,bc(),Oe=e,me=a=Ha(e.current,null),ge=t,Re=0,Ft=null,fl=!1,Ss=Xs(e,t),pc=!1,Ts=Vt=Zr=Ql=ml=Ke=0,Ot=Ai=null,fc=!1,Xa=Sd(e,t),rr(),a}function Rf(e,t){ne=null,Q.H=_r,t===ms||t===gr?(t=Lu(),Re=3):t===uo?(t=Lu(),Re=4):Re=t===qo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ft=t,me===null&&(Ke=1,Mr(e,Wt(t,e.current)))}function _f(){var e=gt.current;return e===null?!0:(ge&4194048)===ge?St===null:(ge&62914560)===ge||(ge&536870912)!==0?e===St:!1}function Mf(){var e=Q.H;return Q.H=_r,e===null?_r:e}function Nf(){var e=Q.A;return Q.A=xb,e}function Wr(){Ke=4,fl||(ge&4194048)!==ge&&gt.current!==null||(Ss=!0),(ml&134217727)===0&&(Ql&134217727)===0||Oe===null||bl(Oe,ge,Vt,!1)}function gc(e,t,a){var l=Ce;Ce|=2;var s=Mf(),i=Nf();(Oe!==e||ge!==t)&&(Jr=null,Ds(e,t)),t=!1;var r=Ke;e:do try{if(Re!==0&&me!==null){var d=me,f=Ft;switch(Re){case 8:bc(),r=6;break e;case 3:case 2:case 9:case 6:gt.current===null&&(t=!0);var w=Re;if(Re=0,Ft=null,Rs(e,d,f,w),a&&Ss){r=0;break e}break;default:w=Re,Re=0,Ft=null,Rs(e,d,f,w)}}hb(),r=Ke;break}catch(j){Rf(e,j)}while(!0);return t&&e.shellSuspendCounter++,Ua=Nl=null,Ce=l,Q.H=s,Q.A=i,me===null&&(Oe=null,ge=0,rr()),r}function hb(){for(;me!==null;)Of(me)}function vb(e,t){var a=Ce;Ce|=2;var l=Mf(),s=Nf();Oe!==e||ge!==t?(Jr=null,$r=Ue()+500,Ds(e,t)):Ss=Xs(e,t);e:do try{if(Re!==0&&me!==null){t=me;var i=Ft;t:switch(Re){case 1:Re=0,Ft=null,Rs(e,t,i,1);break;case 2:case 9:if(Ou(i)){Re=0,Ft=null,zf(t);break}t=function(){Re!==2&&Re!==9||Oe!==e||(Re=7),ja(e)},i.then(t,t);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:Ou(i)?(Re=0,Ft=null,zf(t)):(Re=0,Ft=null,Rs(e,t,i,7));break;case 5:var r=null;switch(me.tag){case 26:r=me.memoizedState;case 5:case 27:var d=me;if(r?Cm(r):d.stateNode.complete){Re=0,Ft=null;var f=d.sibling;if(f!==null)me=f;else{var w=d.return;w!==null?(me=w,en(w)):me=null}break t}}Re=0,Ft=null,Rs(e,t,i,5);break;case 6:Re=0,Ft=null,Rs(e,t,i,6);break;case 8:bc(),Ke=6;break e;default:throw Error(o(462))}}yb();break}catch(j){Rf(e,j)}while(!0);return Ua=Nl=null,Q.H=l,Q.A=s,Ce=a,me!==null?0:(Oe=null,ge=0,rr(),Ke)}function yb(){for(;me!==null&&!He();)Of(me)}function Of(e){var t=$p(e.alternate,e,Xa);e.memoizedProps=e.pendingProps,t===null?en(e):me=t}function zf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Yp(a,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=Yp(a,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:To(t);var l=t;l===ut&&(ue?(pr(l),l.tag===5&&l.stateNode!=null&&(ze=l.stateNode)):(pr(l),ue=!0));default:Pp(a,t),t=me=Su(t,Xa),t=$p(a,t,Xa)}e.memoizedProps=e.pendingProps,t===null?en(e):me=t}function Rs(e,t,a,l){Ua=Nl=null,To(t),xs=null,di=0;var s=t.return;try{if(nb(e,s,t,a,ge)){Ke=1,Mr(e,Wt(a,e.current)),me=null;return}}catch(i){if(s!==null)throw me=s,i;Ke=1,Mr(e,Wt(a,e.current)),me=null;return}t.flags&32768?(ue||l===1?e=!0:Ss||(ge&536870912)!==0?e=!1:(fl=e=!0,(l===2||l===9||l===3||l===6)&&(l=gt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Lf(t,e)):en(t)}function en(e){var t=e;do{if((t.flags&32768)!==0){Lf(t,fl);return}e=t.return;var a=ub(t.alternate,t,Xa);if(a!==null){me=a;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);Ke===0&&(Ke=5)}function Lf(e,t){do{var a=pb(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Ke=6,me=null}function Bf(e,t,a,l,s,i,r,d,f,w,j,_){e.cancelPendingCommit=null;do tn();while(Ve!==0);if((Ce&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));e===Oe&&(me=Oe=null,ge=0),Xl=t,pa=e,Ca=a,xc=s,Cf=l,wb(e,t,a,r,d,f,_)}}function wb(e,t,a,l,s,i,r){var d=t.lanes|t.childLanes;if(mc=d,d|=Pn,Z0(e,a,d,l,s,i),Cs=null,(a&335544064)===a?(js=$x(e),l=10262):(js=null,l=10256),(t.subtreeFlags&l)!==0||(t.flags&l)!==0?(e.callbackNode=null,e.callbackPriority=0,jb(Fi,function(){return wc(),null})):(e.callbackNode=null,e.callbackPriority=0),Ur=!1,l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=Q.T,Q.T=null,s=ae.p,ae.p=2,i=Ce,Ce|=4;try{fb(e,t,a)}finally{Ce=i,ae.p=s,Q.T=l}}Ve=1,Ur?As=Zb(r,e.containerInfo,js,hc,vc,Sb,yc,wc,Eb):(hc(),vc(),yc())}function Eb(e){if(Ve!==0){var t=pa.onRecoverableError;t(e,{componentStack:null})}}function Sb(){Ve===3&&(Ve=0,vf(Xl,pa),Ve=4)}function hc(){if(Ve===1){Ve=0;var e=pa,t=Xl,a=Ca,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=Q.T,Q.T=null;var s=ae.p;ae.p=2;var i=Ce;Ce|=4;try{Ei=Fr=!1,gf(t,e,a),a=Nc;var r=fu(e.containerInfo),d=a.focusedElem,f=a.selectionRange;if(r!==d&&d&&d.ownerDocument&&pu(d.ownerDocument.documentElement,d)){if(f!==null&&Xn(d)){var w=f.start,j=f.end;if(j===void 0&&(j=w),"selectionStart"in d)d.selectionStart=w,d.selectionEnd=Math.min(j,d.value.length);else{var _=d.ownerDocument||document,v=_&&_.defaultView||window;if(v.getSelection){var A=v.getSelection(),B=d.textContent.length,V=Math.min(f.start,B),oe=f.end===void 0?V:Math.min(f.end,B);!A.extend&&V>oe&&(r=oe,oe=V,V=r);var y=uu(d,V),g=uu(d,oe);if(y&&g&&(A.rangeCount!==1||A.anchorNode!==y.node||A.anchorOffset!==y.offset||A.focusNode!==g.node||A.focusOffset!==g.offset)){var S=_.createRange();S.setStart(y.node,y.offset),A.removeAllRanges(),V>oe?(A.addRange(S),A.extend(g.node,g.offset)):(S.setEnd(g.node,g.offset),A.addRange(S))}}}}for(_=[],A=d;A=A.parentNode;)A.nodeType===1&&_.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<_.length;d++){var R=_[d];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}Hs=!!Mc,Nc=Mc=null}finally{Ce=i,ae.p=s,Q.T=l}}e.current=t,Ve=2}}function vc(){if(Ve===2){Ve=0;var e=pa,t=Xl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=Q.T,Q.T=null;var l=ae.p;ae.p=2;var s=Ce;Ce|=4;try{uf(e,t.alternate,t)}finally{Ce=s,ae.p=l,Q.T=a}}Ve=3}}function yc(){if(Ve===4||Ve===3){Ve=0;var e=As;As=null,_a();var t=pa,a=Xl,l=Ca,s=Cf,i=(l&335544064)===l?10262:10256;if((a.subtreeFlags&i)!==0||(a.flags&i)!==0?Ve=5:(Ve=0,Xl=pa=null,Hf(t,t.pendingLanes)),i=t.pendingLanes,i===0&&(xl=null),kn(l),a=a.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Qs,a,void 0,(a.current.flags&128)===128)}catch{}if(s!==null){a=Q.T,i=ae.p,ae.p=2,Q.T=null;try{for(var r=t.onRecoverableError,d=0;d<s.length;d++){var f=s[d];r(f.value,{componentStack:f.stack})}}finally{Q.T=a,ae.p=i}}if(s=Cs,r=js,js=null,s!==null&&(Cs=null,r===null&&(r=[]),e!==null))for(f=0;f<s.length;f++)a=(0,s[f])(r),a!==void 0&&e.finished.finally(a);(Ca&3)!==0&&tn(),ja(t),i=t.pendingLanes,(l&261930)!==0&&(i&42)!==0?t===Pr?Ci++:(Ci=0,Pr=t):(Ci=0,Pr=null),ji(0)}}function Hf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ni(t)))}function tn(){return As!==null&&(As.skipTransition(),As=null),hc(),vc(),yc(),wc()}function wc(){if(Ve!==5)return!1;var e=pa,t=mc;mc=0;var a=kn(Ca),l=Q.T,s=ae.p;try{ae.p=32>a?32:a,Q.T=null,a=xc,xc=null;var i=pa,r=Ca;if(Ve=0,Xl=pa=null,Ca=0,(Ce&6)!==0)throw Error(o(331));var d=Ce;if(Ce|=4,Sf(i.current),yf(i,i.current,r,a),Ce=d,ji(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Qs,i)}catch{}return!0}finally{ae.p=s,Q.T=l,Hf(e,t)}}function qf(e,t,a){t=Wt(a,t),t=Ho(e.stateNode,t,2),e=nl(e,t,2),e!==null&&(Zs(e,2),ja(e))}function _e(e,t,a){if(e.tag===3)qf(e,e,a);else for(;t!==null;){if(t.tag===3){qf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(xl===null||!xl.has(l))){e=Wt(a,e),a=Op(2),l=nl(t,a,2),l!==null&&(zp(a,l,t,e),Zs(l,2),ja(l));break}}t=t.return}}function Ec(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new bb;var s=new Set;l.set(t,s)}else s=l.get(t),s===void 0&&(s=new Set,l.set(t,s));s.has(a)||(pc=!0,s.add(a),e=Tb.bind(null,e,t,a),t.then(e,e))}function Tb(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Oe===e&&(ge&a)===a&&((Ke===4||Ke===3&&(ge&62914560)===ge&&300>Ue()-Kr)&&(Ce&2)===0?Ds(e,0):Zr|=a,Ts===ge&&(Ts=0)),ja(e)}function Uf(e,t){t===0&&(t=Td()),e=Rl(e,t),e!==null&&(Zs(e,t),ja(e))}function Ab(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Uf(e,a)}function Cb(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,s=e.memoizedState;s!==null&&(a=s.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Uf(e,a)}function jb(e,t){return Jl(e,t)}var _s=null,Ms=null,Sc=!1,an=!1,Tc=!1,gl=0;function ja(e){e!==Ms&&e.next===null&&(Ms===null?_s=Ms=e:Ms=Ms.next=e),an=!0,Sc||(Sc=!0,Db())}function ji(e,t){if(!Tc&&an){Tc=!0;do for(var a=!1,l=_s;l!==null;){if(e!==0){var s=l.pendingLanes;if(s===0)var i=0;else{var r=l.suspendedLanes,d=l.pingedLanes;i=(1<<31-Ht(42|e)+1)-1,i&=s&~(r&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Vf(l,i))}else i=ge,i=Zi(l,l===Oe?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Xs(l,i)||(a=!0,Vf(l,i));l=l.next}while(a);Tc=!1}}function kb(){Gf()}function Gf(){an=Sc=!1;var e=0;gl!==0&&Ub()&&(e=gl);for(var t=Ue(),a=null,l=_s;l!==null;){var s=l.next,i=Yf(l,t);i===0?(l.next=null,a===null?_s=s:a.next=s,s===null&&(Ms=a)):(a=l,(e!==0||(i&3)!==0)&&(an=!0)),l=s}Ve!==0&&Ve!==5||ji(e),gl!==0&&(gl=0)}function Yf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-Ht(i),d=1<<r,f=s[r];f===-1?((d&a)===0||(d&l)!==0)&&(s[r]=X0(d,t)):f<=t&&(e.expiredLanes|=d),i&=~d}if(t=Oe,a=ge,a=Zi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ee(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xs(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&ee(l),kn(a)){case 2:case 8:a=wd;break;case 32:a=Fi;break;case 268435456:a=Ed;break;default:a=Fi}return l=Ff.bind(null,e),a=Jl(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&ee(l),e.callbackPriority=2,e.callbackNode=null,2}function Ff(e,t){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(tn()&&e.callbackNode!==a)return null;var l=ge;return l=Zi(e,e===Oe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(kf(e,l,t),Yf(e,Ue()),e.callbackNode!=null&&e.callbackNode===a?Ff.bind(null,e):null)}function Vf(e,t){if(tn())return null;kf(e,t,!0)}function Db(){Yb(function(){(Ce&6)!==0?Jl(Jt,kb):Gf()})}function Ac(){if(gl===0){var e=Ll;e===0&&(e=Vi,Vi<<=1,(Vi&261888)===0&&(Vi=256)),gl=e}return gl}function Qf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ii(e)}function Rb(e,t,a,l,s){if(t==="submit"&&a&&a.stateNode===s){var i=Qf((s[Rt]||null).action),r=l.submitter;r&&(t=(t=r[Rt]||null)?Qf(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var d=new ar("action","action",null,l,s);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(gl!==0){var f=new FormData(s,r);No(a,{pending:!0,data:f,method:s.method,action:i},null,f)}}else typeof i=="function"&&(d.preventDefault(),f=new FormData(s,r),No(a,{pending:!0,data:f,method:s.method,action:i},i,f))},currentTarget:s}]})}}for(var Cc=0;Cc<Jn.length;Cc++){var jc=Jn[Cc],_b=jc.toLowerCase(),Mb=jc[0].toUpperCase()+jc.slice(1);oa(_b,"on"+Mb)}oa(bu,"onAnimationEnd"),oa(gu,"onAnimationIteration"),oa(hu,"onAnimationStart"),oa("dblclick","onDoubleClick"),oa("focusin","onFocus"),oa("focusout","onBlur"),oa(Gx,"onTransitionRun"),oa(Yx,"onTransitionStart"),oa(Fx,"onTransitionCancel"),oa(vu,"onTransitionEnd"),es("onMouseEnter",["mouseout","mouseover"]),es("onMouseLeave",["mouseout","mouseover"]),es("onPointerEnter",["pointerout","pointerover"]),es("onPointerLeave",["pointerout","pointerover"]),jl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),jl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),jl("onBeforeInput",["compositionend","keypress","textInput","paste"]),jl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),jl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),jl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ki));function Xf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],s=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var d=l[r],f=d.instance,w=d.currentTarget;if(d=d.listener,f!==i&&s.isPropagationStopped())break e;i=d,s.currentTarget=w;try{i(s)}catch(j){ir(j)}s.currentTarget=null,i=f}else for(r=0;r<l.length;r++){if(d=l[r],f=d.instance,w=d.currentTarget,d=d.listener,f!==i&&s.isPropagationStopped())break e;i=d,s.currentTarget=w;try{i(s)}catch(j){ir(j)}s.currentTarget=null,i=f}}}}function xe(e,t){var a=t[Rd];a===void 0&&(a=t[Rd]=new Set);var l=e+"__bubble";a.has(l)||(Zf(t,e,2,!1),a.add(l))}function kc(e,t,a){var l=0;t&&(l|=4),Zf(a,e,l,t)}var ln="_reactListening"+Math.random().toString(36).slice(2);function Dc(e){if(!e[ln]){e[ln]=!0,Nd.forEach(function(a){a!=="selectionchange"&&(Nb.has(a)||kc(a,!1,e),kc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ln]||(t[ln]=!0,kc("selectionchange",!1,t))}}function Zf(e,t,a,l){switch(Lm(t)){case 2:var s=Ag;break;case 8:s=Cg;break;default:s=$c}a=s.bind(null,t,a,e),s=void 0,!Ln||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),l?s!==void 0?e.addEventListener(t,a,{capture:!0,passive:s}):e.addEventListener(t,a,!0):s!==void 0?e.addEventListener(t,a,{passive:s}):e.addEventListener(t,a,!1)}function Rc(e,t,a,l,s){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var d=l.stateNode.containerInfo;if(d===s)break;if(r===4)for(r=l.return;r!==null;){var f=r.tag;if((f===3||f===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;d!==null;){if(r=Cl(d),r===null)return;if(f=r.tag,f===5||f===6||f===26||f===27){l=i=r;continue e}d=d.parentNode}}l=l.return}Xd(function(){var w=i,j=On(a),_=[];e:{var v=yu.get(e);if(v!==void 0){var A=ar,B=e;switch(e){case"keypress":if(er(a)===0)break e;case"keydown":case"keyup":A=gx;break;case"focusin":B="focus",A=Un;break;case"focusout":B="blur",A=Un;break;case"beforeblur":case"afterblur":A=Un;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=$d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=ix;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Ex;break;case bu:case gu:case hu:A=ox;break;case vu:A=Tx;break;case"scroll":case"scrollend":A=lx;break;case"wheel":A=Cx;break;case"copy":case"cut":case"paste":A=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Pd;break;case"submit":A=yx;break;case"toggle":case"beforetoggle":A=kx}var V=(t&4)!==0,oe=!V&&(e==="scroll"||e==="scrollend"),y=V?v!==null?v+"Capture":null:v;V=[];for(var g=w,S;g!==null;){var R=g;if(S=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||S===null||y===null||(R=Js(g,y),R!=null&&V.push(Di(g,R,S))),oe)break;g=g.return}0<V.length&&(v=new A(v,B,null,a,j),_.push({event:v,listeners:V}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",A&&a!==Nn&&(B=a.relatedTarget||a.fromElement)&&(Cl(B)||B[Pl]))break e;(v||A)&&(B=j.window===j?j:(A=j.ownerDocument)?A.defaultView||A.parentWindow:window,v?(A=a.relatedTarget||a.toElement,v=w,A=A?Cl(A):null,A!==null&&(oe=x(A),V=A.tag,A!==oe||V!==5&&V!==27&&V!==6)&&(A=null)):(v=null,A=w),v!==A&&(V=$d,R="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(V=Pd,R="onPointerLeave",y="onPointerEnter",g="pointer"),oe=v==null?B:$s(v),S=A==null?B:$s(A),B=new V(R,g+"leave",v,a,j),B.target=oe,B.relatedTarget=S,R=null,Cl(j)===w&&(V=new V(y,g+"enter",A,a,j),V.target=S,V.relatedTarget=oe,R=V),oe=R,V=v&&A?Se(v,A,Ob):null,v!==null&&Kf(_,B,v,V,!1),A!==null&&oe!==null&&Kf(_,oe,A,V,!0)))}e:{if(v=w?$s(w):window,A=v.nodeName&&v.nodeName.toLowerCase(),A==="select"||A==="input"&&v.type==="file")var Y=iu;else if(lu(v))if(ru)Y=Hx;else{Y=Lx;var he=zx}else A=v.nodeName,!A||A.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?w&&Mn(w.elementType)&&(Y=iu):Y=Bx;if(Y&&(Y=Y(e,w))){su(_,Y,a,j);break e}he&&he(e,v,w)}switch(he=w?$s(w):window,e){case"focusin":(lu(he)||he.contentEditable==="true")&&(rs=he,Zn=w,si=null);break;case"focusout":si=Zn=rs=null;break;case"mousedown":Kn=!0;break;case"contextmenu":case"mouseup":case"dragend":Kn=!1,mu(_,a,j);break;case"selectionchange":if(Ux)break;case"keydown":case"keyup":mu(_,a,j)}var $;if(Yn)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else is?tu(e,a)&&(te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(Id&&a.locale!=="ko"&&(is||te!=="onCompositionStart"?te==="onCompositionEnd"&&is&&($=Zd()):(Ia=j,Bn="value"in Ia?Ia.value:Ia.textContent,is=!0)),he=sn(w,te),0<he.length&&(te=new Jd(te,e,null,a,j),_.push({event:te,listeners:he}),$?te.data=$:($=au(a),$!==null&&(te.data=$)))),($=Rx?_x(e,a):Mx(e,a))&&(te=sn(w,"onBeforeInput"),0<te.length&&(he=new Jd("onBeforeInput","beforeinput",null,a,j),_.push({event:he,listeners:te}),he.data=$)),Rb(_,e,w,a,j)}Xf(_,t)})}function Di(e,t,a){return{instance:e,listener:t,currentTarget:a}}function sn(e,t){for(var a=t+"Capture",l=[];e!==null;){var s=e,i=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||i===null||(s=Js(e,a),s!=null&&l.unshift(Di(e,s,i)),s=Js(e,t),s!=null&&l.push(Di(e,s,i))),e.tag===3)return l;e=e.return}return[]}function Ob(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kf(e,t,a,l,s){for(var i=t._reactName,r=[];a!==null&&a!==l;){var d=a,f=d.alternate,w=d.stateNode;if(d=d.tag,f!==null&&f===l)break;d!==5&&d!==26&&d!==27||w===null||(f=w,s?(w=Js(a,i),w!=null&&r.unshift(Di(a,w,f))):s||(w=Js(a,i),w!=null&&r.push(Di(a,w,f)))),a=a.return}r.length!==0&&e.push({event:t,listeners:r})}var zb=/\r\n?/g,Lb=/\u0000|\uFFFD/g;function $f(e){return(typeof e=="string"?e:""+e).replace(zb,`
`).replace(Lb,"")}function Jf(e,t){return t=$f(t),$f(e)===t}function Me(e,t,a,l,s,i){switch(a){case"children":if(typeof l=="string")t==="body"||t==="textarea"&&l===""||as(e,l);else if(typeof l=="number"||typeof l=="bigint")t!=="body"&&as(e,""+l);else return;break;case"className":Pi(e,"class",l);break;case"tabIndex":Pi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Pi(e,a,l);break;case"style":Vd(e,l,i);return;case"data":if(t!=="object"){Pi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Ii(l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Me(e,t,"name",s.name,s,null),Me(e,t,"formEncType",s.formEncType,s,null),Me(e,t,"formMethod",s.formMethod,s,null),Me(e,t,"formTarget",s.formTarget,s,null)):(Me(e,t,"encType",s.encType,s,null),Me(e,t,"method",s.method,s,null),Me(e,t,"target",s.target,s,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Ii(l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=ga);return;case"onScroll":l!=null&&xe("scroll",e);return;case"onScrollEnd":l!=null&&xe("scrollend",e);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(s.children!=null)throw Error(o(60));i?.__html!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Ii(l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Ji(e,"popover",l);break;case"xlinkActuate":Oa(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Oa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Oa(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Oa(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Oa(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Oa(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Oa(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Oa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Oa(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ji(e,"is",l);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=tx.get(a)||a,Ji(e,a,l);else return}Ae=!0}function _c(e,t,a,l,s,i){switch(a){case"style":Vd(e,l,i);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(s.children!=null)throw Error(o(60));i?.__html!==a&&(e.innerHTML=a)}}break;case"children":if(typeof l=="string")as(e,l);else if(typeof l=="number"||typeof l=="bigint")as(e,""+l);else return;break;case"onScroll":l!=null&&xe("scroll",e);return;case"onScrollEnd":l!=null&&xe("scrollend",e);return;case"onClick":l!=null&&(e.onclick=ga);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Od.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),i=a.slice(2,s?a.length-7:void 0),t=e[Rt]||null,t=t!=null?t[a]:null,typeof t=="function"&&e.removeEventListener(i,t,s),typeof l=="function")){typeof t!="function"&&t!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,s);break e}Ae=!0,a in e?e[a]=l:l===!0?e.setAttribute(a,""):Ji(e,a,l)}return}Ae=!0}function yt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var l=!1,s=!1,i;for(i in a)if(a.hasOwnProperty(i)){var r=a[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Me(e,t,i,r,a,null)}}s&&Me(e,t,"srcSet",a.srcSet,a,null),l&&Me(e,t,"src",a.src,a,null);return;case"input":xe("invalid",e);var d=i=r=s=null,f=null,w=null;for(l in a)if(a.hasOwnProperty(l)){var j=a[l];if(j!=null)switch(l){case"name":s=j;break;case"type":r=j;break;case"checked":f=j;break;case"defaultChecked":w=j;break;case"value":i=j;break;case"defaultValue":d=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(o(137,t));break;default:Me(e,t,l,j,a,null)}}Ud(e,i,d,f,w,r,s,!1);return;case"select":xe("invalid",e),l=r=i=null;for(s in a)if(a.hasOwnProperty(s)&&(d=a[s],d!=null))switch(s){case"value":i=d;break;case"defaultValue":r=d;break;case"multiple":l=d;default:Me(e,t,s,d,a,null)}t=i,a=r,e.multiple=!!l,t!=null?ts(e,!!l,t,!1):a!=null&&ts(e,!!l,a,!0);return;case"textarea":xe("invalid",e),i=s=l=null;for(r in a)if(a.hasOwnProperty(r)&&(d=a[r],d!=null))switch(r){case"value":l=d;break;case"defaultValue":s=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(o(91));break;default:Me(e,t,r,d,a,null)}Yd(e,l,s,i);return;case"option":for(f in a)a.hasOwnProperty(f)&&(l=a[f],l!=null)&&(f==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Me(e,t,f,l,a,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(l=0;l<ki.length;l++)xe(ki[l],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Me(e,t,w,l,a,null)}return;default:if(Mn(t)){for(j in a)a.hasOwnProperty(j)&&(l=a[j],l!==void 0&&_c(e,t,j,l,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(l=a[d],l!=null&&Me(e,t,d,l,a,null))}var Bb={};function Hb(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,i=null,r=null,d=null,f=null,w=null,j=null;for(A in a){var _=a[A];if(a.hasOwnProperty(A)&&_!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":f=_;default:l.hasOwnProperty(A)||Me(e,t,A,null,l,_)}}for(var v in l){var A=l[v];if(_=a[v],l.hasOwnProperty(v)&&(A!=null||_!=null))switch(v){case"type":A!==_&&(Ae=!0),i=A;break;case"name":A!==_&&(Ae=!0),s=A;break;case"checked":A!==_&&(Ae=!0),w=A;break;case"defaultChecked":A!==_&&(Ae=!0),j=A;break;case"value":A!==_&&(Ae=!0),r=A;break;case"defaultValue":A!==_&&(Ae=!0),d=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,t));break;default:A!==_&&Me(e,t,v,A,l,_)}}Rn(e,r,d,f,w,j,i,s);return;case"select":A=r=d=v=null;for(i in a)if(f=a[i],a.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":A=f;default:l.hasOwnProperty(i)||Me(e,t,i,null,l,f)}for(s in l)if(i=l[s],f=a[s],l.hasOwnProperty(s)&&(i!=null||f!=null))switch(s){case"value":i!==f&&(Ae=!0),v=i;break;case"defaultValue":i!==f&&(Ae=!0),d=i;break;case"multiple":i!==f&&(Ae=!0),r=i;default:i!==f&&Me(e,t,s,i,l,f)}t=d,a=r,l=A,v!=null?ts(e,!!a,v,!1):!!l!=!!a&&(t!=null?ts(e,!!a,t,!0):ts(e,!!a,a?[]:"",!1));return;case"textarea":A=v=null;for(d in a)if(s=a[d],a.hasOwnProperty(d)&&s!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Me(e,t,d,null,l,s)}for(r in l)if(s=l[r],i=a[r],l.hasOwnProperty(r)&&(s!=null||i!=null))switch(r){case"value":s!==i&&(Ae=!0),v=s;break;case"defaultValue":s!==i&&(Ae=!0),A=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==i&&Me(e,t,r,s,l,i)}Gd(e,v,A);return;case"option":for(var B in a)v=a[B],a.hasOwnProperty(B)&&v!=null&&!l.hasOwnProperty(B)&&(B==="selected"?e.selected=!1:Me(e,t,B,null,l,v));for(f in l)v=l[f],A=a[f],l.hasOwnProperty(f)&&v!==A&&(v!=null||A!=null)&&(f==="selected"?(v!==A&&(Ae=!0),e.selected=v&&typeof v!="function"&&typeof v!="symbol"):Me(e,t,f,v,l,A));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in a)v=a[V],a.hasOwnProperty(V)&&v!=null&&!l.hasOwnProperty(V)&&Me(e,t,V,null,l,v);for(w in l)if(v=l[w],A=a[w],l.hasOwnProperty(w)&&v!==A&&(v!=null||A!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(137,t));break;default:Me(e,t,w,v,l,A)}return;default:if(Mn(t)){for(var oe in a)v=a[oe],a.hasOwnProperty(oe)&&v!==void 0&&!l.hasOwnProperty(oe)&&_c(e,t,oe,void 0,l,v);for(j in l)v=l[j],A=a[j],!l.hasOwnProperty(j)||v===A||v===void 0&&A===void 0||_c(e,t,j,v,l,A);return}}for(var y in a)v=a[y],a.hasOwnProperty(y)&&v!=null&&!l.hasOwnProperty(y)&&Me(e,t,y,null,l,v);for(_ in l)v=l[_],A=a[_],!l.hasOwnProperty(_)||v===A||v==null&&A==null||Me(e,t,_,v,l,A)}function Pf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var s=a[l],i=s.transferSize,r=s.initiatorType,d=s.duration;if(i&&d&&Pf(r)){for(r=0,d=s.responseEnd,l+=1;l<a.length;l++){var f=a[l],w=f.startTime;if(w>d)break;var j=f.transferSize,_=f.initiatorType;j&&Pf(_)&&(f=f.responseEnd,r+=j*(f<d?1:(d-w)/(f-w)))}if(--l,t+=8*(i+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Mc=null,Nc=null;function Ri(e){return e.nodeType===9?e:e.ownerDocument}function If(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function em(e,t,a,l){return a=Ri(a).createElement(e),a[xt]=l,a[Rt]=t,yt(a,e,t),dt(a),a}function Oc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zc=null;function Ub(){var e=window.event;return e&&e.type==="popstate"?e===zc?!1:(zc=e,!0):(zc=null,!1)}var Lc=typeof setTimeout=="function"?setTimeout:void 0,Gb=typeof clearTimeout=="function"?clearTimeout:void 0,tm=typeof Promise=="function"?Promise:void 0,am=typeof requestAnimationFrame=="function"?requestAnimationFrame:Lc,Yb=typeof queueMicrotask=="function"?queueMicrotask:typeof tm<"u"?function(e){return tm.resolve(null).then(e).catch(Fb)}:Lc;function Fb(e){setTimeout(function(){throw e})}function hl(e){return e==="head"}function lm(e,t){var a=t,l=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(s),qs(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Vc(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Vc(a);for(var i=a.firstChild;i;){var r=i.nextSibling,d=i.nodeName;i[Ks]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=r}}else a==="body"&&Vc(e.ownerDocument.body);a=s}while(a);qs(t)}function sm(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function im(e,t,a){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(t=e.getClientRects(),t.length===1)var l=1;else for(var s=l=0;s<t.length;s++){var i=t[s];0<i.width&&0<i.height&&l++}l===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function rm(e,t){e=e.style,t=t.style;var a=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(a=t.display,e.display=a==null||typeof a=="boolean"?"":a,a=t.margin,a!=null?e.margin=a:(a=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function Vb(e,t,a){return a=a.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Bc(e){var t=e.getBoundingClientRect(),a=getComputedStyle(e);return Vb(t,a,e)}function Qb(e){return e.documentElement.clientHeight}function Xb(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Zb(e,t,a,l,s,i,r,d,f){var w=t.nodeType===9?t:t.ownerDocument;try{var j=w.startViewTransition({update:function(){var v=w.defaultView,A=v.navigation&&v.navigation.transition,B=w.fonts.status;l();var V=[];if(B==="loaded"&&(Qb(w),w.fonts.status==="loading"&&V.push(w.fonts.ready)),B=V.length,e!==null)for(var oe=e.suspenseyImages,y=0,g=0;g<oe.length;g++){var S=oe[g];if(!S.complete){var R=S.getBoundingClientRect();if(0<R.bottom&&0<R.right&&R.top<v.innerHeight&&R.left<v.innerWidth){if(y+=jm(S),y>on){V.length=B;break}S=new Promise(Xb.bind(S)),V.push(S)}}}if(0<V.length)return v=Promise.race([Promise.all(V),new Promise(function(Y){return setTimeout(Y,500)})]).then(s,s),(A?Promise.allSettled([A.finished,v]):v).then(i,i);if(s(),A)return A.finished.then(i,i);i()},types:a});w.__reactViewTransition=j;var _=[];return j.ready.then(function(){for(var v=w.documentElement.getAnimations({subtree:!0}),A=0;A<v.length;A++){var B=v[A],V=B.effect,oe=V.pseudoElement;if(oe!=null&&oe.startsWith("::view-transition")){_.push(B),B=V.getKeyframes();for(var y=oe=void 0,g=!0,S=0;S<B.length;S++){var R=B[S],Y=R.width;if(oe===void 0)oe=Y;else if(oe!==Y){g=!1;break}if(Y=R.height,y===void 0)y=Y;else if(y!==Y){g=!1;break}delete R.width,delete R.height,R.transform==="none"&&delete R.transform}g&&oe!==void 0&&y!==void 0&&(V.setKeyframes(B),g=getComputedStyle(V.target,V.pseudoElement),g.width!==oe||g.height!==y)&&(g=B[0],g.width=oe,g.height=y,g=B[B.length-1],g.width=oe,g.height=y,V.setKeyframes(B))}}r()},function(v){w.__reactViewTransition===j&&(w.__reactViewTransition=null);try{typeof v=="object"&&v!==null&&v.name==="InvalidStateError"&&(v.message==="View transition was skipped because document visibility state is hidden."||v.message==="Skipping view transition because document visibility state has become hidden."||v.message==="Skipping view transition because viewport size changed."||v.message==="Transition was aborted because of invalid state")&&(v=null),v!==null&&f(v)}finally{l(),s(),r()}}),j.finished.finally(function(){for(var v=0;v<_.length;v++)_[v].cancel();w.__reactViewTransition===j&&(w.__reactViewTransition=null),d()}),j}catch{return l(),s(),r(),null}}function Zl(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Zl.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:le({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Zl.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,a=e.getAnimations({subtree:!0}),l=[],s=0;s<a.length;s++){var i=a[s].effect;i!==null&&i.target===e&&i.pseudoElement===t&&l.push(a[s])}return l},Zl.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function nm(e){return{name:e,group:new Zl("group",e),imagePair:new Zl("image-pair",e),old:new Zl("old",e),new:new Zl("new",e)}}function Xt(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Xt.prototype.addEventListener=function(e,t,a){var l=null,s=null;if(!(a!=null&&typeof a!="boolean"&&(l=a.signal||null,l!==null&&l.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(cm(i,e,t,a)===-1){var r=this,d=t;a!=null&&typeof a!="boolean"&&a.once===!0&&(d=function(f){r.removeEventListener(e,t,a),typeof t=="function"?t.call(this,f):t.handleEvent(f)}),l!==null&&(s=r.removeEventListener.bind(r,e,t,a),l.addEventListener("abort",s,{once:!0}),s=l.removeEventListener.bind(l,"abort",s)),l=Ns(a),i.push({type:e,listener:t,optionsOrUseCapture:a,attachedListener:d,cleanup:s}),m(this._fragmentFiber.child,!1,Kb,e,d,l)}this._eventListeners=i}};function Kb(e,t,a,l){return N(e).addEventListener(t,a,l),!1}Xt.prototype.removeEventListener=function(e,t,a){var l=this._eventListeners;if(l!==null&&(t=cm(l,e,t,a),t!==-1)){var s=l[t];a=s.attachedListener;var i=s.cleanup;s=Ns(s.optionsOrUseCapture),m(this._fragmentFiber.child,!1,$b,e,a,s),l.splice(t,1),i!==null&&i()}};function $b(e,t,a,l){return N(e).removeEventListener(t,a,l),!1}function Ns(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function om(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function cm(e,t,a,l){if(e.length===0)return-1;l=om(l);for(var s=0;s<e.length;s++){var i=e[s];if(i.type===t&&i.listener===a&&om(i.optionsOrUseCapture)===l)return s}return-1}Xt.prototype.dispatchEvent=function(e){var t=M(this._fragmentFiber);if(t===null)return!0;t=N(t);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var l=t.nodeType===9?t.createComment(""):document.createTextNode("");if(a)for(var s=0;s<a.length;s++){var i=a[s];l.addEventListener(i.type,i.attachedListener,Ns(i.optionsOrUseCapture))}if(t.appendChild(l),e=l.dispatchEvent(e),a)for(s=0;s<a.length;s++)i=a[s],l.removeEventListener(i.type,i.attachedListener,Ns(i.optionsOrUseCapture));return t.removeChild(l),e}return t.dispatchEvent(e)},Xt.prototype.focus=function(e){m(this._fragmentFiber.child,!0,dm,e,void 0,void 0)};function dm(e,t){return e.tag===6?!1:(e=N(e),ng(e,t))}Xt.prototype.focusLast=function(e){var t=[];m(this._fragmentFiber.child,!0,Hc,t,void 0,void 0);for(var a=t.length-1;0<=a&&!dm(t[a],e);a--);};function Hc(e,t){return t.push(e),!1}Xt.prototype.blur=function(){var e=M(this._fragmentFiber);e!==null&&(e=N(e),e=Ri(e).activeElement,e!==null&&m(this._fragmentFiber.child,!1,Jb,e,void 0,void 0))};function Jb(e,t){return e.tag===6?!1:(e=N(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Xt.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),m(this._fragmentFiber.child,!1,Pb,e,void 0,void 0)};function Pb(e,t){return e.tag===6||(e=N(e),t.observe(e)),!1}Xt.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),m(this._fragmentFiber.child,!1,Ib,e,void 0,void 0);for(var a=t=0;a<fa.length;a++){var l=fa[a];l.fragmentInstance===this&&l.observer===e?e.unobserve(l.instance):fa[t++]=l}fa.length=t}};function Ib(e,t){return e.tag===6||(e=N(e),t.unobserve(e)),!1}var fa=[],qc=!1;function Wb(e,t,a){fa.push({fragmentInstance:e,observer:t,instance:a}),qc||(qc=!0,og(function(){qc=!1;var l=fa;fa=[];for(var s=0;s<l.length;s++){var i=l[s];i.observer.unobserve(i.instance)}}))}Xt.prototype.getClientRects=function(){var e=[];return m(this._fragmentFiber.child,!1,eg,e,void 0,void 0),e};function eg(e,t){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),t.push.apply(t,a.getClientRects())}else e=N(e),t.push.apply(t,e.getClientRects());return!1}Xt.prototype.getRootNode=function(e){var t=M(this._fragmentFiber);return t===null?this:N(t).getRootNode(e)},Xt.prototype.compareDocumentPosition=function(e){var t=M(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,Hc,a,void 0,void 0);var l=N(t);if(a.length===0){if(a=l,G(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(a=t)}t=this._fragmentFiber;var s=l=a.compareDocumentPosition(e);return a===e?s=Node.DOCUMENT_POSITION_CONTAINS:l&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=F(t)[1],a===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=N(a).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=N(a[0]),s=N(a[a.length-1]);var i=G(this._fragmentFiber)?t.parentElement:l;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;l=i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),d=s.compareDocumentPosition(e),f=r&Node.DOCUMENT_POSITION_CONTAINED_BY||d&Node.DOCUMENT_POSITION_CONTAINED_BY;return d=l&&i&&r&Node.DOCUMENT_POSITION_FOLLOWING&&d&Node.DOCUMENT_POSITION_PRECEDING,t=l&&t===e||i&&s===e||f||d?Node.DOCUMENT_POSITION_CONTAINED_BY:!l&&t===e||!i&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||tg(t,this._fragmentFiber,a[0],a[a.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function tg(e,t,a,l,s){var i=Cl(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!i)e:{for(;i!==null;){if(i.tag===7&&(i===t||i.alternate===t)){a=!0;break e}i=i.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=s.ownerDocument,s===i||s===i.documentElement||s===i.body;e:{for(i=t,t=M(t);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==t&&i.alternate!==t)){i=!0;break e}i=i.return}i=!1}return i}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!i)&&!(t=i===a)&&(t=Se(a,i,we),t===null?t=!1:(m(t,!0,P,i,a),i=X,X=null,t=i!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!i)&&!(t=i===l)&&(t=Se(l,i,we),t===null?t=!1:(m(t,!0,be,i,l),i=X,J=X=null,t=i!==null)),t):!1}function um(e,t){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Xt.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(o(566));var t=[];m(this._fragmentFiber.child,!1,Hc,t,void 0,void 0);var a=e!==!1;if(t.length===0){var l=F(this._fragmentFiber);if(l=a?l[1]||l[0]||M(this._fragmentFiber):l[0]||l[1],l===null)return;if(l.tag===6){e=N(l),um(e,a);return}if(l=N(l),l.nodeType!==9){if(l.nodeType===11){a="host"in l?l.host:null,a!==null&&a.scrollIntoView(e);return}l.scrollIntoView(e)}}for(l=a?t.length-1:0;l!==(a?-1:t.length);){var s=t[l];s.tag===6?(s=N(s),um(s,a)):N(s).scrollIntoView(e),l+=a?-1:1}};function ag(e,t){return e=N(e),pm(e,t),!1}function pm(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function fm(e,t){var a=t._eventListeners;if(a!==null)for(var l=0;l<a.length;l++){var s=a[l];e.addEventListener(s.type,s.attachedListener,Ns(s.optionsOrUseCapture))}e.nodeType!==3&&(a=t._observers,a!==null&&a.forEach(function(i){for(var r=0,d=0;d<fa.length;d++){var f=fa[d];(f.fragmentInstance!==t||f.observer!==i||f.instance!==e)&&(fa[r++]=f)}fa.length=r,i.observe(e)}),pm(e,t))}function lg(e,t){var a=t._eventListeners;if(a!==null)for(var l=0;l<a.length;l++){var s=a[l];e.removeEventListener(s.type,s.attachedListener,Ns(s.optionsOrUseCapture))}e.nodeType!==3&&(a=t._observers,a!==null&&a.forEach(function(i){typeof i.rootMargin=="string"?Wb(t,i,e):i.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Uc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Uc(a),$i(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function sg(e,t,a,l){for(;e.nodeType===1;){var s=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ks])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=sa(e.nextSibling),e===null)break}return null}function ig(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=sa(e.nextSibling),e===null))return null;return e}function mm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=sa(e.nextSibling),e===null))return null;return e}function Gc(e){return e.data==="$?"||e.data==="$~"}function Yc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function rg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function sa(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Fc=null;function xm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return sa(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function bm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function ng(e,t){function a(){l=!0}if(e.ownerDocument.activeElement===e)return!0;var l=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return l}function og(e){am(function(){am(function(t){return e(t)})})}function gm(e,t,a){switch(t=Ri(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function hm(e,t,a){for(var l in a){var s=a[l];a.hasOwnProperty(l)&&s!=null&&Me(e,t,l,null,Bb,s)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ga&&(e.onclick=null),$i(e)}function Vc(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$i(e)}var ia=new Map,vm=new Set;function _i(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Za=ae.d;ae.d={f:cg,r:dg,D:ug,C:pg,L:fg,m:mg,X:bg,S:xg,M:gg};function cg(){var e=Za.f(),t=Ir();return e||t}function dg(e){var t=Il(e);t!==null&&t.tag===5&&t.type==="form"?yp(t):Za.r(e)}var Os=typeof document>"u"?null:document;function ym(e,t,a){var l=Os;if(l&&typeof t=="string"&&t){var s=Pt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),vm.has(s)||(vm.add(s),e={rel:e,crossOrigin:a,href:t},l.querySelector(s)===null&&(t=l.createElement("link"),yt(t,"link",e),dt(t),l.head.appendChild(t)))}}function ug(e){Za.D(e),ym("dns-prefetch",e,null)}function pg(e,t){Za.C(e,t),ym("preconnect",e,t)}function fg(e,t,a){Za.L(e,t,a);var l=Os;if(l&&e&&t){var s='link[rel="preload"][as="'+Pt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+Pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+Pt(a.imageSizes)+'"]')):s+='[href="'+Pt(e)+'"]';var i=s;switch(t){case"style":i=zs(e);break;case"script":i=Ls(e)}if(!(ia.has(i)||(e=le({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ia.set(i,e),l.querySelector(s)!==null||t==="style"&&l.querySelector(Mi(i))||t==="script"&&l.querySelector(Ni(i))))){var r=l.createElement("link");yt(r,"link",e),t==="style"&&(r[Ki]=!0,r.onload=r.onerror=function(){Md(r)}),dt(r),l.head.appendChild(r)}}}function mg(e,t){Za.m(e,t);var a=Os;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Pt(l)+'"][href="'+Pt(e)+'"]',i=s;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ls(e)}if(!ia.has(i)&&(e=le({rel:"modulepreload",href:e},t),ia.set(i,e),a.querySelector(s)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ni(i)))return}l=a.createElement("link"),yt(l,"link",e),dt(l),a.head.appendChild(l)}}}function xg(e,t,a){Za.S(e,t,a);var l=Os;if(l&&e){var s=Wl(l).hoistableStyles,i=zs(e);t=t||"default";var r=s.get(i);if(!r){var d={loading:0,preload:null};if(r=l.querySelector(Mi(i)))d.loading=5;else{e=le({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ia.get(i))&&Qc(e,a);var f=r=l.createElement("link");dt(f),yt(f,"link",e),f._p=new Promise(function(w,j){f.onload=w,f.onerror=j}),f.addEventListener("load",function(){d.loading|=1}),f.addEventListener("error",function(){d.loading|=2}),d.loading|=4,rn(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:d},s.set(i,r)}}}function bg(e,t){Za.X(e,t);var a=Os;if(a&&e){var l=Wl(a).hoistableScripts,s=Ls(e),i=l.get(s);i||(i=a.querySelector(Ni(s)),i||(e=le({src:e,async:!0},t),(t=ia.get(s))&&Xc(e,t),i=a.createElement("script"),dt(i),yt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(s,i))}}function gg(e,t){Za.M(e,t);var a=Os;if(a&&e){var l=Wl(a).hoistableScripts,s=Ls(e),i=l.get(s);i||(i=a.querySelector(Ni(s)),i||(e=le({src:e,async:!0,type:"module"},t),(t=ia.get(s))&&Xc(e,t),i=a.createElement("script"),dt(i),yt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(s,i))}}function wm(e,t,a,l){var s=(s=ce.current)?_i(s):null;if(!s)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=zs(a.href),t=Wl(s).hoistableStyles,l=t.get(a),l||(l={type:"style",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=zs(a.href);var i=Wl(s).hoistableStyles,r=i.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=s.querySelector(Mi(e)))?i._p||(r.instance=i,r.state.loading=5):(i=ia.get(e),i||(i={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ia.set(e,i)),hg(s,e,i,r.state))),t&&l===null)throw Error(o(528,""));return r}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(a=Ls(a),t=Wl(s).hoistableScripts,l=t.get(a),l||(l={type:"script",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function zs(e){return'href="'+Pt(e)+'"'}function Mi(e){return'link[rel="stylesheet"]['+e+"]"}function Em(e){return le({},e,{"data-precedence":e.precedence,precedence:null})}function hg(e,t,a,l){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Ki]!==!0){l.loading=1;return}}else t=e.createElement("link"),t[Ki]=!0,t.onload=t.onerror=Md.bind(null,t),yt(t,"link",a),dt(t),e.head.appendChild(t);l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2})}function Ls(e){return'[src="'+Pt(e)+'"]'}function Ni(e){return"script[async]"+e}function Sm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Pt(a.href)+'"]');if(l)return t.instance=l,dt(l),l;var s=le({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),dt(l),yt(l,"style",s),rn(l,a.precedence,e),t.instance=l;case"stylesheet":s=zs(a.href);var i=e.querySelector(Mi(s));if(i)return t.state.loading|=4,t.instance=i,dt(i),i;l=Em(a),(s=ia.get(s))&&Qc(l,s),i=(e.ownerDocument||e).createElement("link"),dt(i);var r=i;return r._p=new Promise(function(d,f){r.onload=d,r.onerror=f}),yt(i,"link",l),t.state.loading|=4,rn(i,a.precedence,e),t.instance=i;case"script":return i=Ls(a.src),(s=e.querySelector(Ni(i)))?(t.instance=s,dt(s),s):(l=a,(s=ia.get(i))&&(l=le({},a),Xc(l,s)),e=e.ownerDocument||e,s=e.createElement("script"),dt(s),yt(s,"link",l),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,rn(l,a.precedence,e));return t.instance}function rn(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=l.length?l[l.length-1]:null,i=s,r=0;r<l.length;r++){var d=l[r];if(d.dataset.precedence===t)i=d;else if(i!==s)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Qc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var nn=null;function Tm(e,t,a){if(nn===null){var l=new Map,s=nn=new Map;s.set(a,l)}else s=nn,l=s.get(a),l||(l=new Map,s.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),s=0;s<a.length;s++){var i=a[s];if(!(i[Ks]||i[xt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var d=l.get(r);d?d.push(i):l.set(r,[i])}}return l}function Zc(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function vg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Am(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function Cm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function jm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function km(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=jm(t),e.suspenseyImages.push(t)),e=Eg.bind(e),t.decode().then(e,e))}function yg(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var s=zs(l.href),i=t.querySelector(Mi(s));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Oi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,dt(i);return}i=t.ownerDocument||t,l=Em(l),(s=ia.get(s))&&Qc(l,s),i=i.createElement("link"),dt(i);var r=i;r._p=new Promise(function(d,f){r.onload=d,r.onerror=f}),yt(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Oi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var on=0;function wg(e,t){return e.stylesheets&&e.count===0&&dn(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&dn(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&on===0&&(on=62500*qb());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&dn(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>on?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(s)}}:null}function Dm(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)dn(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Oi(){this.count--,Dm(this)}function Eg(){this.imgCount--,Dm(this)}var cn=null;function dn(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cn=new Map,t.forEach(Sg,e),cn=null,Oi.call(e))}function Sg(e,t){if(!(t.state.loading&4)){var a=cn.get(e);if(a)var l=a.get(null);else{a=new Map,cn.set(e,a);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<s.length;i++){var r=s[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),l=r)}l&&a.set(null,l)}s=t.instance,r=s.getAttribute("data-precedence"),i=a.get(r)||l,i===l&&a.set(null,s),a.set(r,s),this.count++,l=Oi.bind(this),s.addEventListener("load",l),s.addEventListener("error",l),i?i.parentNode.insertBefore(s,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Bs={$$typeof:Te,Provider:null,Consumer:null,_currentValue:na,_currentValue2:na,_threadCount:0};function Tg(e,t,a,l,s,i,r,d,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Cn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cn(0),this.hiddenUpdates=Cn(null),this.identifierPrefix=l,this.onUncaughtError=s,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.transitionTypes=null,this.incompleteTransitions=new Map}function Rm(e,t,a,l,s,i,r,d,f,w,j,_){return e=new Tg(e,t,a,r,f,w,j,_,d),t=1,i===!0&&(t|=24),i=_t(3,null,null,t),e.current=i,i.stateNode=e,t=no(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},po(i),e}function _m(e){return e?(e=cs,e):cs}function Mm(e,t,a,l,s,i){s=_m(s),l.context===null?l.context=s:l.pendingContext=s,l=rl(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=nl(e,l,t),a!==null&&(zt(a,e,t),ui(a,e,t))}function Nm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Kc(e,t){Nm(e,t),(e=e.alternate)&&Nm(e,t)}function Om(e){if(e.tag===13||e.tag===31){var t=Rl(e,67108864);t!==null&&zt(t,e,67108864),Kc(e,67108864)}}function zm(e){if(e.tag===13||e.tag===31){var t=Qt();t=jn(t);var a=Rl(e,t);a!==null&&zt(a,e,t),Kc(e,t)}}var Hs=!0;function Ag(e,t,a,l){var s=Q.T;Q.T=null;var i=ae.p;try{ae.p=2,$c(e,t,a,l)}finally{ae.p=i,Q.T=s}}function Cg(e,t,a,l){var s=Q.T;Q.T=null;var i=ae.p;try{ae.p=8,$c(e,t,a,l)}finally{ae.p=i,Q.T=s}}function $c(e,t,a,l){if(Hs){var s=Jc(l);if(s===null)Rc(e,t,l,un,a),Bm(e,l);else if(kg(s,e,t,a,l))l.stopPropagation();else if(Bm(e,l),t&4&&-1<jg.indexOf(e)){for(;s!==null;){var i=Il(s);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Al(i.pendingLanes);if(r!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;r;){var f=1<<31-Ht(r);d.entanglements[1]|=f,r&=~f}ja(i),(Ce&6)===0&&($r=Ue()+500,ji(0))}}break;case 31:case 13:d=Rl(i,2),d!==null&&zt(d,i,2),Ir(),Kc(i,2)}if(i=Jc(l),i===null&&Rc(e,t,l,un,a),i===s)break;s=i}s!==null&&l.stopPropagation()}else Rc(e,t,l,null,a)}}function Jc(e){return e=On(e),Pc(e)}var un=null;function Pc(e){if(un=null,e=Cl(e),e!==null){var t=x(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=E(t),e!==null)return e;e=null}else if(a===31){if(e=b(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return un=e,null}function Lm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ma()){case Jt:return 2;case wd:return 8;case Fi:case U0:return 32;case Ed:return 268435456;default:return 32}default:return 32}}var Ic=!1,vl=null,yl=null,wl=null,zi=new Map,Li=new Map,El=[],jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bm(e,t){switch(e){case"focusin":case"focusout":vl=null;break;case"dragenter":case"dragleave":yl=null;break;case"mouseover":case"mouseout":wl=null;break;case"pointerover":case"pointerout":zi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Li.delete(t.pointerId)}}function Bi(e,t,a,l,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[s]},t!==null&&(t=Il(t),t!==null&&Om(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function kg(e,t,a,l,s){switch(t){case"focusin":return vl=Bi(vl,e,t,a,l,s),!0;case"dragenter":return yl=Bi(yl,e,t,a,l,s),!0;case"mouseover":return wl=Bi(wl,e,t,a,l,s),!0;case"pointerover":var i=s.pointerId;return zi.set(i,Bi(zi.get(i)||null,e,t,a,l,s)),!0;case"gotpointercapture":return i=s.pointerId,Li.set(i,Bi(Li.get(i)||null,e,t,a,l,s)),!0}return!1}function Hm(e){var t=Cl(e.target);if(t!==null){var a=x(t);if(a!==null){if(t=a.tag,t===13){if(t=E(a),t!==null){e.blockedOn=t,Dd(e.priority,function(){zm(a)});return}}else if(t===31){if(t=b(a),t!==null){e.blockedOn=t,Dd(e.priority,function(){zm(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Jc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Nn=l,a.target.dispatchEvent(l),Nn=null}else return t=Il(a),t!==null&&Om(t),e.blockedOn=a,!1;t.shift()}return!0}function qm(e,t,a){pn(e)&&a.delete(t)}function Dg(){Ic=!1,vl!==null&&pn(vl)&&(vl=null),yl!==null&&pn(yl)&&(yl=null),wl!==null&&pn(wl)&&(wl=null),zi.forEach(qm),Li.forEach(qm)}function fn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ic||(Ic=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Dg)))}var mn=null;function Um(e){mn!==e&&(mn=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){mn===e&&(mn=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],s=e[t+2];if(typeof l!="function"){if(Pc(l||a)===null)continue;break}var i=Il(a);i!==null&&(e.splice(t,3),t-=3,No(i,{pending:!0,data:s,method:a.method,action:l},l,s))}}))}function qs(e){function t(f){return fn(f,e)}vl!==null&&fn(vl,e),yl!==null&&fn(yl,e),wl!==null&&fn(wl,e),zi.forEach(t),Li.forEach(t);for(var a=0;a<El.length;a++){var l=El[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<El.length&&(a=El[0],a.blockedOn===null);)Hm(a),a.blockedOn===null&&El.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var s=a[l],i=a[l+1],r=s[Rt]||null;if(typeof i=="function")r||Um(a);else if(r){var d=null;if(i&&i.hasAttribute("formAction")){if(s=i,r=i[Rt]||null)d=r.formAction;else if(Pc(s)!==null)continue}else d=r.action;typeof d=="function"?a[l+1]=d:(a.splice(l,3),l-=3),Um(a)}}}function Gm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Wc(e){this._internalRoot=e}xn.prototype.render=Wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=Qt();Mm(a,l,e,t,null,null)},xn.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mm(e.current,2,null,e,null,null),Ir(),t[Pl]=null}};function xn(e){this._internalRoot=e}xn.prototype.unstable_scheduleHydration=function(e){if(e){var t=kd();e={blockedOn:null,target:e,priority:t};for(var a=0;a<El.length&&t!==0&&t<El[a].priority;a++);El.splice(a,0,e),a===0&&Hm(e)}};var Ym=c.version;if(Ym!=="19.3.0")throw Error(o(527,Ym,"19.3.0"));ae.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=k(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var Rg={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bn.isDisabled&&bn.supportsFiber)try{Qs=bn.inject(Rg),Bt=bn}catch{}}return Hi.createRoot=function(e,t){if(!p(e))throw Error(o(299));var a=!1,l="",s=Rp,i=_p,r=Mp;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Rm(e,1,!1,null,null,a,l,null,s,i,r,Gm),e[Pl]=t.current,Dc(e),new Wc(t)},Hi.hydrateRoot=function(e,t,a){if(!p(e))throw Error(o(299));var l=!1,s="",i=Rp,r=_p,d=Mp,f=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.formState!==void 0&&(f=a.formState)),t=Rm(e,1,!0,t,a??null,l,s,f,i,r,d,Gm),t.context=_m(null),a=t.current,l=Qt(),l=jn(l),s=rl(l),s.callback=null,nl(a,s,l),a=l,t.current.lanes=a,Zs(t,a),ja(t),e[Pl]=t.current,Dc(e),new xn(t)},Hi.version="19.3.0",Hi}var Jm;function qg(){if(Jm)return td.exports;Jm=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),td.exports=Hg(),td.exports}var Ug=qg();var pd=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,f0=/^[\\/]{2}/;function Gg(n,c){return c+n.replace(/\\/g,"/")}var Pm="popstate";function Im(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function Yg(n={}){function c(o,p){let x=p.state?.masked,{pathname:E,search:b,hash:C}=x||o.location;return cd("",{pathname:E,search:b,hash:C},p.state&&p.state.usr||null,p.state&&p.state.key||"default",x?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function u(o,p){return typeof p=="string"?p:Us(p)}return Vg(c,u,null,n)}function Qe(n,c){if(n===!1||n===null||typeof n>"u")throw new Error(c)}function ka(n,c){if(!n){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Fg(){return Math.random().toString(36).substring(2,10)}function Wm(n,c){return{usr:n.state,key:n.key,idx:c,masked:n.mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function cd(n,c,u=null,o,p){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof c=="string"?Ys(c):c,state:u,key:c&&c.key||o||Fg(),mask:p}}function Us({pathname:n="/",search:c="",hash:u=""}){return c&&c!=="?"&&(n+=c.charAt(0)==="?"?c:"?"+c),u&&u!=="#"&&(n+=u.charAt(0)==="#"?u:"#"+u),n}function Ys(n){let c={};if(n){let u=n.indexOf("#");u>=0&&(c.hash=n.substring(u),n=n.substring(0,u));let o=n.indexOf("?");o>=0&&(c.search=n.substring(o),n=n.substring(0,o)),n&&(c.pathname=n)}return c}function Vg(n,c,u,o={}){let{window:p=document.defaultView,v5Compat:x=!1}=o,E=p.history,b="POP",C=null,k=T();k==null&&(k=0,E.replaceState({...E.state,idx:k},""));function T(){return(E.state||{idx:null}).idx}function m(){b="POP";let N=T(),X=N==null?null:N-k;k=N,C&&C({action:b,location:U.location,delta:X})}function M(N,X){b="PUSH";let J=Im(N)?N:cd(U.location,N,X);k=T()+1;let P=Wm(J,k),be=U.createHref(J.mask||J);try{E.pushState(P,"",be)}catch(we){if(we instanceof DOMException&&we.name==="DataCloneError")throw we;p.location.assign(be)}x&&C&&C({action:b,location:U.location,delta:1})}function G(N,X){b="REPLACE";let J=Im(N)?N:cd(U.location,N,X);k=T();let P=Wm(J,k),be=U.createHref(J.mask||J);E.replaceState(P,"",be),x&&C&&C({action:b,location:U.location,delta:0})}function F(N){return Qg(p,N)}let U={get action(){return b},get location(){return n(p,E)},listen(N){if(C)throw new Error("A history only accepts one active listener");return p.addEventListener(Pm,m),C=N,()=>{p.removeEventListener(Pm,m),C=null}},createHref(N){return c(p,N)},createURL:F,encodeLocation(N){let X=F(N);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:M,replace:G,go(N){return E.go(N)}};return U}function Qg(n,c,u=!1){let o="http://localhost";n&&(o=n.location.origin!=="null"?n.location.origin:n.location.href),Qe(o,"No window.location.(origin|href) available to create URL");let p=typeof c=="string"?c:Us(c);return p=p.replace(/ $/,"%20"),!u&&f0.test(p)&&(p=o+p),new URL(p,o)}function m0(n,c,u="/"){return Xg(n,c,u,!1)}function Xg(n,c,u,o,p){let x=typeof c=="string"?Ys(c):c,E=Ka(x.pathname||"/",u);if(E==null)return null;let b=Zg(n),C=null,k=sh(E);for(let T=0;C==null&&T<b.length;++T)C=lh(b[T],k,o);return C}function Zg(n){let c=x0(n);return Kg(c),c}function x0(n,c=[],u=[],o="",p=!1){let x=(E,b,C=p,k)=>{let T={relativePath:k===void 0?E.path||"":k,caseSensitive:E.caseSensitive===!0,childrenIndex:b,route:E};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(o)&&C)return;Qe(T.relativePath.startsWith(o),`Absolute route path "${T.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(o.length)}let m=ma([o,T.relativePath]),M=u.concat(T);E.children&&E.children.length>0&&(Qe(E.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),x0(E.children,c,M,m,C)),!(E.path==null&&!E.index)&&c.push({path:m,score:th(m,E.index),routesMeta:M.map((G,F)=>{let[U,N]=h0(G.relativePath,G.caseSensitive,F===M.length-1);return{...G,matcher:U,compiledParams:N}})})};return n.forEach((E,b)=>{if(E.path===""||!E.path?.includes("?"))x(E,b);else for(let C of b0(E.path))x(E,b,!0,C)}),c}function b0(n){let c=n.split("/");if(c.length===0)return[];let[u,...o]=c,p=u.endsWith("?"),x=u.replace(/\?$/,"");if(o.length===0)return p?[x,""]:[x];let E=b0(o.join("/")),b=[];return b.push(...E.map(C=>C===""?x:[x,C].join("/"))),p&&b.push(...E),b.map(C=>n.startsWith("/")&&C===""?"/":C)}function Kg(n){n.sort((c,u)=>c.score!==u.score?u.score-c.score:ah(c.routesMeta.map(o=>o.childrenIndex),u.routesMeta.map(o=>o.childrenIndex)))}var $g=/^:[\w-]+$/,Jg=3,Pg=2,Ig=1,Wg=10,eh=-2,e0=n=>n==="*";function th(n,c){let u=n.split("/"),o=u.length;return u.some(e0)&&(o+=eh),c&&(o+=Pg),u.filter(p=>!e0(p)).reduce((p,x)=>p+($g.test(x)?Jg:x===""?Ig:Wg),o)}function ah(n,c){return n.length===c.length&&n.slice(0,-1).every((o,p)=>o===c[p])?n[n.length-1]-c[c.length-1]:0}function lh(n,c,u=!1){let{routesMeta:o}=n,p={},x="/",E=[];for(let b=0;b<o.length;++b){let C=o[b],k=b===o.length-1,T=x==="/"?c:c.slice(x.length)||"/",m={path:C.relativePath,caseSensitive:C.caseSensitive,end:k},M=C.matcher&&C.compiledParams?g0(m,T,C.matcher,C.compiledParams):wn(m,T),G=C.route;if(!M&&k&&u&&!o[o.length-1].route.index&&(M=wn({path:C.relativePath,caseSensitive:C.caseSensitive,end:!1},T)),!M)return null;Object.assign(p,M.params),E.push({params:p,pathname:ma([x,M.pathname]),pathnameBase:nh(ma([x,M.pathnameBase])),route:G}),M.pathnameBase!=="/"&&(x=ma([x,M.pathnameBase]))}return E}function wn(n,c){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[u,o]=h0(n.path,n.caseSensitive,n.end);return g0(n,c,u,o)}function g0(n,c,u,o){let p=c.match(u);if(!p)return null;let x=p[0],E=Gs(x,1),b=p.slice(1);return{params:o.reduce((k,{paramName:T,isOptional:m},M)=>{if(T==="*"){let F=b[M]||"";E=Gs(x.slice(0,x.length-F.length),1)}const G=b[M];return m&&!G?k[T]=void 0:k[T]=(G||"").replace(/%2F/g,"/"),k},{}),pathname:x,pathnameBase:E,pattern:n}}function h0(n,c=!1,u=!0){ka(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let o=[],p="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(E,b,C,k,T)=>{if(o.push({paramName:b,isOptional:C!=null}),C){let m=T.charAt(k+E.length);return m&&m!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(o.push({paramName:"*"}),p+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?p+="\\/*$":n!==""&&n!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,c?void 0:"i"),o]}function sh(n){try{return n.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return ka(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),n}}function Ka(n,c){if(c==="/")return n;if(!n.toLowerCase().startsWith(c.toLowerCase()))return null;let u=c.endsWith("/")?c.length-1:c.length,o=n.charAt(u);return o&&o!=="/"?null:n.slice(u)||"/"}function ih(n,c="/"){let{pathname:u,search:o="",hash:p=""}=typeof n=="string"?Ys(n):n,x;return u?(u=y0(u),u.startsWith("/")||u.startsWith("\\")?x=t0(u.substring(1),"/"):x=t0(u,c)):x=c,{pathname:x,search:oh(o),hash:ch(p)}}function t0(n,c){let u=Gs(c).split("/");return n.split("/").forEach(p=>{p===".."?u.length>1&&u.pop():p!=="."&&u.push(p)}),u.length>1?u.join("/"):"/"}function id(n,c,u,o){return`Cannot include a '${n}' character in a manually specified \`to.${c}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function rh(n){return n.filter((c,u)=>u===0||c.route.path&&c.route.path.length>0)}function v0(n){let c=rh(n);return c.map((u,o)=>o===c.length-1?u.pathname:u.pathnameBase)}function fd(n,c,u,o=!1){let p;typeof n=="string"?p=Ys(n):(p={...n},Qe(!p.pathname||!p.pathname.includes("?"),id("?","pathname","search",p)),Qe(!p.pathname||!p.pathname.includes("#"),id("#","pathname","hash",p)),Qe(!p.search||!p.search.includes("#"),id("#","search","hash",p)));let x=n===""||p.pathname==="",E=x?"/":p.pathname,b;if(E==null)b=u;else{let m=c.length-1;if(!o&&E.startsWith("..")){let M=E.split("/");for(;M[0]==="..";)M.shift(),m-=1;p.pathname=M.join("/")}b=m>=0?c[m]:"/"}let C=ih(p,b),k=E&&E!=="/"&&E.endsWith("/"),T=(x||E===".")&&u.endsWith("/");return!C.pathname.endsWith("/")&&(k||T)&&(C.pathname+="/"),C}var y0=n=>n.replace(/[\\/]{2,}/g,"/"),ma=n=>y0(n.join("/"));function Gs(n,c=0){let u=n.length;for(;u>c&&n.charCodeAt(u-1)===47;)u--;return u===n.length?n:n.slice(0,u)}var nh=n=>Gs(n).replace(/^\/*/,"/"),oh=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,ch=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,dh=class{constructor(n,c,u,o=!1){this.status=n,this.statusText=c||"",this.internal=o,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function uh(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function ph(n){let c=n.map(u=>u.route.path).filter(Boolean);return ma(c)||"/"}var w0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function E0(n,c){let u=n;if(typeof u!="string"||!pd.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let o=u,p=!1;if(w0)try{let x=new URL(window.location.href),E=f0.test(u)?new URL(Gg(u,x.protocol)):new URL(u),b=Ka(E.pathname,c);E.origin===x.origin&&b!=null?u=b+E.search+E.hash:p=!0}catch{ka(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:p,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var a0=new URL("http://localhost");function S0(n){if(n.createURL)return n.createURL("/");try{return new URL(n.createHref("/"),a0)}catch{return a0}}function rd(n,c){return n.origin===c.origin&&(n.origin!=="null"||n.protocol===c.protocol&&n.host===c.host)}function fh(n,c){if(n.startsWith("//"))return!0;let u=c.protocol.toLowerCase();return n.toLowerCase().startsWith(u)?c.host===""||n.slice(u.length).startsWith("//"):!1}function T0(n,c,u,o){let p=null;try{p=n==null?null:new URL(n,u)}catch{}let x=new URL(c,u),E=p!=null&&!rd(p,u),b=!rd(x,u);if(o==="reject"){if(E||b)throw new Error("External navigation is not allowed")}else if(b&&(p==null||!fh(n,p)||!rd(p,x)))throw new Error("External navigation is not allowed")}var A0=["POST","PUT","PATCH","DELETE"];new Set(A0);var mh=["GET",...A0];new Set(mh);var xh=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function bh(n){try{return xh.includes(new URL(n).protocol)}catch{return!1}}var Fs=D.createContext(null);Fs.displayName="DataRouter";var Sn=D.createContext(null);Sn.displayName="DataRouterState";var C0=D.createContext(!1);function gh(){return D.useContext(C0)}var j0=D.createContext({isTransitioning:!1});j0.displayName="ViewTransition";var hh=D.createContext(new Map);hh.displayName="Fetchers";var vh=D.createContext(null);vh.displayName="Await";var ra=D.createContext(null);ra.displayName="Navigation";var Ui=D.createContext(null);Ui.displayName="Location";var $a=D.createContext({outlet:null,matches:[],isDataRoute:!1});$a.displayName="Route";var md=D.createContext(null);md.displayName="RouteError";var k0="REACT_ROUTER_ERROR",yh="REDIRECT",wh="ROUTE_ERROR_RESPONSE";function Eh(n){if(n.startsWith(`${k0}:${yh}:{`))try{let c=JSON.parse(n.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function Sh(n){if(n.startsWith(`${k0}:${wh}:{`))try{let c=JSON.parse(n.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new dh(c.status,c.statusText,c.data)}catch{}}function Th(n,{relative:c}={}){Qe(Gi(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:o}=D.useContext(ra),{hash:p,pathname:x,search:E}=Yi(n,{relative:c}),b=x;return u!=="/"&&(b=x==="/"?u:ma([u,x])),o.createHref({pathname:b,search:E,hash:p})}function Gi(){return D.useContext(Ui)!=null}function Da(){return Qe(Gi(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(Ui).location}var D0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function R0(n){D.useContext(ra).static||D.useLayoutEffect(n)}function _0(){let{isDataRoute:n}=D.useContext($a);return n?Bh():Ah()}function Ah(){Qe(Gi(),"useNavigate() may be used only in the context of a <Router> component.");let n=D.useContext(Fs),{basename:c,navigator:u}=D.useContext(ra),{matches:o}=D.useContext($a),{pathname:p}=Da(),x=JSON.stringify(v0(o)),E=D.useRef(!1);return R0(()=>{E.current=!0}),D.useCallback((C,k={})=>{if(ka(E.current,D0),!E.current)return;if(typeof C=="number"){u.go(C);return}let T=fd(C,JSON.parse(x),p,k.relative==="path");n==null&&c!=="/"&&(T.pathname=T.pathname==="/"?c:ma([c,T.pathname])),T0(typeof C=="string"?C:Us(C),u.createHref(T),S0(u),"reject"),(k.replace?u.replace:u.push)(T,k.state,k)},[c,u,x,p,n])}D.createContext(null);function Yi(n,{relative:c}={}){let{matches:u}=D.useContext($a),{pathname:o}=Da(),p=JSON.stringify(v0(u));return D.useMemo(()=>fd(n,JSON.parse(p),o,c==="path"),[n,p,o,c])}function Ch(n,c){return M0(n,c)}function M0(n,c,u){Qe(Gi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=D.useContext(ra),{matches:p}=D.useContext($a),x=p[p.length-1],E=x?x.params:{},b=x?x.pathname:"/",C=x?x.pathnameBase:"/",k=x&&x.route;{let N=k&&k.path||"";O0(b,!k||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let T=Da(),m;if(c){let N=typeof c=="string"?Ys(c):c;Qe(C==="/"||N.pathname?.startsWith(C),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${C}" but pathname "${N.pathname}" was given in the \`location\` prop.`),m=N}else m=T;let M=m.pathname||"/",G=M;if(C!=="/"){let N=C.replace(/^\//,"").split("/");G="/"+M.replace(/^\//,"").split("/").slice(N.length).join("/")}let F=u&&u.state.matches.length?u.state.matches.map(N=>Object.assign(N,{route:u.manifest[N.route.id]||N.route})):m0(n,{pathname:G});ka(k||F!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),ka(F==null||F[F.length-1].route.element!==void 0||F[F.length-1].route.Component!==void 0||F[F.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let U=_h(F&&F.map(N=>Object.assign({},N,{params:Object.assign({},E,N.params),pathname:ma([C,o.encodeLocation?o.encodeLocation(N.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?C:ma([C,o.encodeLocation?o.encodeLocation(N.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathnameBase])})),p,u);return c&&U?D.createElement(Ui.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...m},navigationType:"POP"}},U):U}function jh(){let n=Lh(),c=uh(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),u=n instanceof Error?n.stack:null,o="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:o},x={padding:"2px 4px",backgroundColor:o},E=null;return console.error("Error handled by React Router default ErrorBoundary:",n),E=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:x},"ErrorBoundary")," or"," ",D.createElement("code",{style:x},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},c),u?D.createElement("pre",{style:p},u):null,E)}var kh=D.createElement(jh,null),N0=class extends D.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,c){return c.location!==n.location||c.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:c.error,location:c.location,revalidation:n.revalidation||c.revalidation}}componentDidCatch(n,c){this.props.onError?this.props.onError(n,c):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const u=Sh(n.digest);u&&(n=u)}let c=n!==void 0?D.createElement($a.Provider,{value:this.props.routeContext},D.createElement(md.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?D.createElement(Dh,{error:n},c):c}};N0.contextType=C0;var nd=new WeakMap;function Dh({children:n,error:c}){let{basename:u,navigator:o}=D.useContext(ra);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let p=Eh(c.digest);if(p){let x=nd.get(c);if(x)throw x;let E=E0(p.location,u),b=E.absoluteURL||E.to;if(T0(p.location,b,S0(o),"allow-explicit"),bh(b))throw new Error("Invalid redirect location");if(w0&&!nd.get(c))if(E.isExternal||p.reloadDocument)window.location.href=b;else{const C=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(E.to,{replace:p.replace}));throw nd.set(c,C),C}return D.createElement("meta",{httpEquiv:"refresh",content:`0;url=${b}`})}}return n}function Rh({routeContext:n,match:c,children:u}){let o=D.useContext(Fs);return o&&o.static&&o.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=c.route.id),D.createElement($a.Provider,{value:n},u)}function _h(n,c=[],u){let o=u?.state;if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(c.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let p=n,x=o?.errors;if(x!=null){let T=p.findIndex(m=>m.route.id&&x?.[m.route.id]!==void 0);Qe(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(x).join(",")}`),p=p.slice(0,Math.min(p.length,T+1))}let E=!1,b=-1;if(u&&o){E=o.renderFallback;for(let T=0;T<p.length;T++){let m=p[T];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(b=T),m.route.id){let{loaderData:M,errors:G}=o,F=m.route.loader&&!M.hasOwnProperty(m.route.id)&&(!G||G[m.route.id]===void 0);if(m.route.lazy||F){u.isStatic&&(E=!0),b>=0?p=p.slice(0,b+1):p=[p[0]];break}}}}let C=u?.onError,k=o&&C?(T,m)=>{C(T,{location:o.location,params:o.matches?.[0]?.params??{},pattern:ph(o.matches),errorInfo:m})}:void 0;return p.reduceRight((T,m,M)=>{let G,F=!1,U=null,N=null;o&&(G=x&&m.route.id?x[m.route.id]:void 0,U=m.route.errorElement||kh,E&&(b<0&&M===0?(O0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),F=!0,N=null):b===M&&(F=!0,N=m.route.hydrateFallbackElement||null)));let X=c.concat(p.slice(0,M+1)),J=()=>{let P;return G?P=U:F?P=N:m.route.Component?P=D.createElement(m.route.Component,null):m.route.element?P=m.route.element:P=T,D.createElement(Rh,{match:m,routeContext:{outlet:T,matches:X,isDataRoute:o!=null},children:P})};return o&&(m.route.ErrorBoundary||m.route.errorElement||M===0)?D.createElement(N0,{location:o.location,revalidation:o.revalidation,component:U,error:G,children:J(),routeContext:{outlet:null,matches:X,isDataRoute:!0},onError:k}):J()},null)}function xd(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mh(n){let c=D.useContext(Fs);return Qe(c,xd(n)),c}function Nh(n){let c=D.useContext(Sn);return Qe(c,xd(n)),c}function Oh(n){let c=D.useContext($a);return Qe(c,xd(n)),c}function bd(n){let c=Oh(n),u=c.matches[c.matches.length-1];return Qe(u.route.id,`${n} can only be used on routes that contain a unique "id"`),u.route.id}function zh(){return bd("useRouteId")}function Lh(){let n=D.useContext(md),c=Nh("useRouteError"),u=bd("useRouteError");return n!==void 0?n:c.errors?.[u]}function Bh(){let{router:n}=Mh("useNavigate"),c=bd("useNavigate"),u=D.useRef(!1);return R0(()=>{u.current=!0}),D.useCallback(async(p,x={})=>{ka(u.current,D0),u.current&&(typeof p=="number"?await n.navigate(p):await n.navigate(p,{fromRouteId:c,...x}))},[n,c])}var l0={};function O0(n,c,u){!c&&!l0[n]&&(l0[n]=!0,ka(!1,u))}D.memo(Hh);function Hh({routes:n,manifest:c,future:u,state:o,isStatic:p,onError:x}){return M0(n,void 0,{manifest:c,state:o,isStatic:p,onError:x})}function z0(n){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function qh({basename:n="/",children:c=null,location:u,navigationType:o="POP",navigator:p,static:x=!1,useTransitions:E}){Qe(!Gi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=n.replace(/^\/*/,"/"),C=D.useMemo(()=>({basename:b,navigator:p,static:x,useTransitions:E,future:{}}),[b,p,x,E]);typeof u=="string"&&(u=Ys(u));let{pathname:k="/",search:T="",hash:m="",state:M=null,key:G="default",mask:F}=u,U=D.useMemo(()=>{let N=Ka(k,b);return N==null?null:{location:{pathname:N,search:T,hash:m,state:M,key:G,mask:F},navigationType:o}},[b,k,T,m,M,G,o,F]);return ka(U!=null,`<Router basename="${b}"> is not able to match the URL "${k}${T}${m}" because it does not start with the basename, so the <Router> won't render anything.`),U==null?null:D.createElement(ra.Provider,{value:C},D.createElement(Ui.Provider,{children:c,value:U}))}function Uh({children:n,location:c}){return Ch(dd(n),c)}function dd(n,c=[]){let u=[];return D.Children.forEach(n,(o,p)=>{if(!D.isValidElement(o))return;let x=[...c,p];if(o.type===D.Fragment){u.push.apply(u,dd(o.props.children,x));return}Qe(o.type===z0,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let E={id:o.props.id||x.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(E.children=dd(o.props.children,x)),u.push(E)}),u}var hn="get",vn="application/x-www-form-urlencoded";function Tn(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function Gh(n){return Tn(n)&&n.tagName.toLowerCase()==="button"}function Yh(n){return Tn(n)&&n.tagName.toLowerCase()==="form"}function Fh(n){return Tn(n)&&n.tagName.toLowerCase()==="input"}function Vh(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Qh(n,c){return n.button===0&&(!c||c==="_self")&&!Vh(n)}var gn=null;function Xh(){if(gn===null)try{new FormData(document.createElement("form"),0),gn=!1}catch{gn=!0}return gn}var Zh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function od(n){return n!=null&&!Zh.has(n)?(ka(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vn}"`),null):n}function Kh(n,c){let u,o,p,x,E;if(Yh(n)){let b=n.getAttribute("action");o=b?Ka(b,c):null,u=n.getAttribute("method")||hn,p=od(n.getAttribute("enctype"))||vn,x=new FormData(n)}else if(Gh(n)||Fh(n)&&(n.type==="submit"||n.type==="image")){let b=n.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let C=n.getAttribute("formaction")||b.getAttribute("action");if(o=C?Ka(C,c):null,u=n.getAttribute("formmethod")||b.getAttribute("method")||hn,p=od(n.getAttribute("formenctype"))||od(b.getAttribute("enctype"))||vn,x=new FormData(b,n),!Xh()){let{name:k,type:T,value:m}=n;if(T==="image"){let M=k?`${k}.`:"";x.append(`${M}x`,"0"),x.append(`${M}y`,"0")}else k&&x.append(k,m)}}else{if(Tn(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=hn,o=null,p=vn,E=n}return x&&p==="text/plain"&&(E=x,x=void 0),{action:o,method:u.toLowerCase(),encType:p,formData:x,body:E}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function gd(n,c){if(n===!1||n===null||typeof n>"u")throw new Error(c)}function L0(n,c,u,o){let p=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return u?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${o}`:p.pathname=`${p.pathname}.${o}`:p.pathname==="/"?p.pathname=`_root.${o}`:c&&Ka(p.pathname,c)==="/"?p.pathname=`${Gs(c)}/_root.${o}`:p.pathname=`${Gs(p.pathname)}.${o}`,p}async function $h(n,c){if(n.id in c)return c[n.id];try{let u=await import(n.module);return c[n.id]=u,u}catch(u){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Jh(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function Ph(n,c,u){let o=await Promise.all(n.map(async p=>{let x=c.routes[p.route.id];if(x){let E=await $h(x,u);return E.links?E.links():[]}return[]}));return tv(o.flat(1).filter(Jh).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function s0(n,c,u,o,p,x){let E=(C,k)=>u[k]?C.route.id!==u[k].route.id:!0,b=(C,k)=>u[k].pathname!==C.pathname||u[k].route.path?.endsWith("*")&&u[k].params["*"]!==C.params["*"];return x==="assets"?c.filter((C,k)=>E(C,k)||b(C,k)):x==="data"?c.filter((C,k)=>{let T=o.routes[C.route.id];if(!T||!T.hasLoader)return!1;if(E(C,k)||b(C,k))return!0;if(C.route.shouldRevalidate){let m=C.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:C.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function Ih(n,c,{includeHydrateFallback:u}={}){return Wh(n.map(o=>{let p=c.routes[o.route.id];if(!p)return[];let x=[p.module];return p.clientActionModule&&(x=x.concat(p.clientActionModule)),p.clientLoaderModule&&(x=x.concat(p.clientLoaderModule)),u&&p.hydrateFallbackModule&&(x=x.concat(p.hydrateFallbackModule)),p.imports&&(x=x.concat(p.imports)),x}).flat(1))}function Wh(n){return[...new Set(n)]}function ev(n){let c={},u=Object.keys(n).sort();for(let o of u)c[o]=n[o];return c}function tv(n,c){let u=new Set;return new Set(c),n.reduce((o,p)=>{let x=JSON.stringify(ev(p));return u.has(x)||(u.add(x),o.push({key:x,link:p})),o},[])}function hd(){let n=D.useContext(Fs);return gd(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function av(){let n=D.useContext(Sn);return gd(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var vd=D.createContext(void 0);vd.displayName="FrameworkContext";function An(){let n=D.useContext(vd);return gd(n,"You must render this element inside a <HydratedRouter> element"),n}function lv(n,c){let u=D.useContext(vd),[o,p]=D.useState(!1),[x,E]=D.useState(!1),{onFocus:b,onBlur:C,onMouseEnter:k,onMouseLeave:T,onTouchStart:m}=c,M=D.useRef(null);D.useEffect(()=>{if(n==="render"&&E(!0),n==="viewport"){let U=X=>{X.forEach(J=>{E(J.isIntersecting)})},N=new IntersectionObserver(U,{threshold:.5});return M.current&&N.observe(M.current),()=>{N.disconnect()}}},[n]),D.useEffect(()=>{if(o){let U=setTimeout(()=>{E(!0)},100);return()=>{clearTimeout(U)}}},[o]);let G=()=>{p(!0)},F=()=>{p(!1),E(!1)};return u?n!=="intent"?[x,M,{}]:[x,M,{onFocus:qi(b,G),onBlur:qi(C,F),onMouseEnter:qi(k,G),onMouseLeave:qi(T,F),onTouchStart:qi(m,G)}]:[!1,M,{}]}function qi(n,c){return u=>{n&&n(u),u.defaultPrevented||c(u)}}function sv({page:n,...c}){let u=gh(),{nonce:o}=An(),{router:p}=hd(),x=D.useMemo(()=>m0(p.routes,n,p.basename),[p.routes,n,p.basename]);return x?(c.nonce==null&&o&&(c={...c,nonce:o}),u?D.createElement(rv,{page:n,matches:x,...c}):D.createElement(nv,{page:n,matches:x,...c})):null}function iv(n){let{manifest:c,routeModules:u}=An(),[o,p]=D.useState([]);return D.useEffect(()=>{let x=!1;return Ph(n,c,u).then(E=>{x||p(E)}),()=>{x=!0}},[n,c,u]),o}function rv({page:n,matches:c,...u}){let o=Da(),{future:p}=An(),{basename:x}=hd(),E=D.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let b=L0(n,x,p.v8_trailingSlashAwareDataRequests,"rsc"),C=!1,k=[];for(let T of c)typeof T.route.shouldRevalidate=="function"?C=!0:k.push(T.route.id);return C&&k.length>0&&b.searchParams.set("_routes",k.join(",")),[b.pathname+b.search]},[x,p.v8_trailingSlashAwareDataRequests,n,o,c]);return D.createElement(D.Fragment,null,E.map(b=>D.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...u})))}function nv({page:n,matches:c,...u}){let o=Da(),{future:p,manifest:x,routeModules:E}=An(),{basename:b}=hd(),{loaderData:C,matches:k}=av(),T=D.useMemo(()=>s0(n,c,k,x,o,"data"),[n,c,k,x,o]),m=D.useMemo(()=>s0(n,c,k,x,o,"assets"),[n,c,k,x,o]),M=D.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let U=new Set,N=!1;if(c.forEach(J=>{let P=x.routes[J.route.id];!P||!P.hasLoader||(!T.some(be=>be.route.id===J.route.id)&&J.route.id in C&&E[J.route.id]?.shouldRevalidate||P.hasClientLoader?N=!0:U.add(J.route.id))}),U.size===0)return[];let X=L0(n,b,p.v8_trailingSlashAwareDataRequests,"data");return N&&U.size>0&&X.searchParams.set("_routes",c.filter(J=>U.has(J.route.id)).map(J=>J.route.id).join(",")),[X.pathname+X.search]},[b,p.v8_trailingSlashAwareDataRequests,C,o,x,T,c,n,E]),G=D.useMemo(()=>Ih(m,x),[m,x]),F=iv(m);return D.createElement(D.Fragment,null,M.map(U=>D.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...u})),G.map(U=>D.createElement("link",{key:U,rel:"modulepreload",href:U,...u})),F.map(({key:U,link:N})=>D.createElement("link",{key:U,nonce:u.nonce,...N,crossOrigin:N.crossOrigin??u.crossOrigin})))}function ov(...n){return c=>{n.forEach(u=>{typeof u=="function"?u(c):u!=null&&(u.current=c)})}}var cv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{cv&&(window.__reactRouterVersion="7.18.4")}catch{}function dv({basename:n,children:c,useTransitions:u,window:o}){let p=D.useRef();p.current==null&&(p.current=Yg({window:o,v5Compat:!0}));let x=p.current,[E,b]=D.useState({action:x.action,location:x.location}),C=D.useCallback(k=>{u===!1?b(k):D.startTransition(()=>b(k))},[u]);return D.useLayoutEffect(()=>x.listen(C),[x,C]),D.createElement(qh,{basename:n,children:c,location:E.location,navigationType:E.action,navigator:x,useTransitions:u})}var B0=D.forwardRef(function({onClick:c,discover:u="render",prefetch:o="none",relative:p,reloadDocument:x,replace:E,mask:b,state:C,target:k,to:T,preventScrollReset:m,viewTransition:M,defaultShouldRevalidate:G,...F},U){let{basename:N,navigator:X,useTransitions:J}=D.useContext(ra),P=typeof T=="string"&&pd.test(T),be=E0(T,N);T=be.to;let we=Th(T,{relative:p}),Se=Da(),le=null;if(b){let Te=fd(b,[],Se.mask?Se.mask.pathname:"/",!0);N!=="/"&&(Te.pathname=Te.pathname==="/"?N:ma([N,Te.pathname])),le=X.createHref(Te)}let[re,Pe,Ye]=lv(o,F),nt=mv(T,{replace:E,mask:b,state:C,target:k,preventScrollReset:m,relative:p,viewTransition:M,defaultShouldRevalidate:G,useTransitions:J});function Be(Te){c&&c(Te),Te.defaultPrevented||nt(Te)}let Kt=!(be.isExternal||x),Tt=D.createElement("a",{...F,...Ye,href:(Kt?le:void 0)||be.absoluteURL||we,onClick:Kt?Be:c,ref:ov(U,Pe),target:k,"data-discover":!P&&u==="render"?"true":void 0});return re&&!P?D.createElement(D.Fragment,null,Tt,D.createElement(sv,{page:we})):Tt});B0.displayName="Link";var uv=D.forwardRef(function({"aria-current":c="page",caseSensitive:u=!1,className:o="",end:p=!1,style:x,to:E,viewTransition:b,children:C,...k},T){let m=Yi(E,{relative:k.relative}),M=Da(),G=D.useContext(Sn),{navigator:F,basename:U}=D.useContext(ra),N=G!=null&&vv(m)&&b===!0,X=F.encodeLocation?F.encodeLocation(m).pathname:m.pathname,J=M.pathname,P=G&&G.navigation&&G.navigation.location?G.navigation.location.pathname:null;u||(J=J.toLowerCase(),P=P?P.toLowerCase():null,X=X.toLowerCase()),P&&U&&(P=Ka(P,U)||P);const be=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let we=J===X||!p&&J.startsWith(X)&&J.charAt(be)==="/",Se=P!=null&&(P===X||!p&&P.startsWith(X)&&P.charAt(X.length)==="/"),le={isActive:we,isPending:Se,isTransitioning:N},re=we?c:void 0,Pe;typeof o=="function"?Pe=o(le):Pe=[o,we?"active":null,Se?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let Ye=typeof x=="function"?x(le):x;return D.createElement(B0,{...k,"aria-current":re,className:Pe,ref:T,style:Ye,to:E,viewTransition:b},typeof C=="function"?C(le):C)});uv.displayName="NavLink";var pv=D.forwardRef(({discover:n="render",fetcherKey:c,navigate:u,reloadDocument:o,replace:p,state:x,method:E=hn,action:b,onSubmit:C,relative:k,preventScrollReset:T,viewTransition:m,defaultShouldRevalidate:M,...G},F)=>{let{useTransitions:U}=D.useContext(ra),N=gv(),X=hv(b,{relative:k}),J=E.toLowerCase()==="get"?"get":"post",P=typeof b=="string"&&pd.test(b),be=we=>{if(C&&C(we),we.defaultPrevented)return;we.preventDefault();let Se=we.nativeEvent.submitter,le=Se?.getAttribute("formmethod")||E,re=()=>N(Se||we.currentTarget,{fetcherKey:c,method:le,navigate:u,replace:p,state:x,relative:k,preventScrollReset:T,viewTransition:m,defaultShouldRevalidate:M});U&&u!==!1?D.startTransition(()=>re()):re()};return D.createElement("form",{ref:F,method:J,action:X,onSubmit:o?C:be,...G,"data-discover":!P&&n==="render"?"true":void 0})});pv.displayName="Form";function fv(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function H0(n){let c=D.useContext(Fs);return Qe(c,fv(n)),c}function mv(n,{target:c,replace:u,mask:o,state:p,preventScrollReset:x,relative:E,viewTransition:b,defaultShouldRevalidate:C,useTransitions:k}={}){let T=_0(),m=Da(),M=Yi(n,{relative:E});return D.useCallback(G=>{if(Qh(G,c)){G.preventDefault();let F=u!==void 0?u:Us(m)===Us(M),U=()=>T(n,{replace:F,mask:o,state:p,preventScrollReset:x,relative:E,viewTransition:b,defaultShouldRevalidate:C});k?D.startTransition(()=>U()):U()}},[m,T,M,u,o,p,c,n,x,E,b,C,k])}var xv=0,bv=()=>`__${String(++xv)}__`;function gv(){let{router:n}=H0("useSubmit"),{basename:c}=D.useContext(ra),u=zh(),o=n.fetch,p=n.navigate;return D.useCallback(async(x,E={})=>{let{action:b,method:C,encType:k,formData:T,body:m}=Kh(x,c);if(E.navigate===!1){let M=E.fetcherKey||bv();await o(M,u,E.action||b,{defaultShouldRevalidate:E.defaultShouldRevalidate,preventScrollReset:E.preventScrollReset,formData:T,body:m,formMethod:E.method||C,formEncType:E.encType||k,flushSync:E.flushSync})}else await p(E.action||b,{defaultShouldRevalidate:E.defaultShouldRevalidate,preventScrollReset:E.preventScrollReset,formData:T,body:m,formMethod:E.method||C,formEncType:E.encType||k,replace:E.replace,state:E.state,fromRouteId:u,flushSync:E.flushSync,viewTransition:E.viewTransition})},[o,p,c,u])}function hv(n,{relative:c}={}){let{basename:u}=D.useContext(ra),o=D.useContext($a);Qe(o,"useFormAction must be used inside a RouteContext");let[p]=o.matches.slice(-1),x={...Yi(n||".",{relative:c})},E=Da();if(n==null){x.search=E.search;let b=new URLSearchParams(x.search),C=b.getAll("index");if(C.some(T=>T==="")){b.delete("index"),C.filter(m=>m).forEach(m=>b.append("index",m));let T=b.toString();x.search=T?`?${T}`:""}}return(!n||n===".")&&p.route.index&&(x.search=x.search?x.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(x.pathname=x.pathname==="/"?u:ma([u,x.pathname])),Us(x)}function vv(n,{relative:c}={}){let u=D.useContext(j0);Qe(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=H0("useViewTransitionState"),p=Yi(n,{relative:c});if(!u.isTransitioning)return!1;let x=Ka(u.currentLocation.pathname,o)||u.currentLocation.pathname,E=Ka(u.nextLocation.pathname,o)||u.nextLocation.pathname;return wn(p.pathname,E)!=null||wn(p.pathname,x)!=null}const q0="etef_lang";let yn=[];function Zt(){try{const n=localStorage.getItem(q0);if(n==="አማ"||n==="ENG")return n}catch{}return"ENG"}function yv(n){try{localStorage.setItem(q0,n)}catch{}yn.forEach(c=>c(n))}function wv(n){return yn.push(n),()=>{yn=yn.filter(c=>c!==n)}}const yd={ENG:{nav:{home:"Home",about:"About Us",news:"News",vacancies:"Vacancy",partners:"Partners",faq:"FAQ",contact:"Contact Us",join:"Join as Member"},footer:{orgName:"ETHIOPIAN TRANSPORT",orgSub:"EMPLOYERS FEDERATION",desc:"The premier statutory national federation representing commercial transport employers, regional associations, and logistics operators across Ethiopia. Certified May 12, 2018 (Ginbot 4, 2010 E.C.).",preTitle:"Official ETEF Platform",preHeading:"One federation. One trusted digital home.",connectBtn:"Connect with ETEF",exploreTitle:"EXPLORE",discoverTitle:"DISCOVER",connectTitle:"CONNECT",address:"Addis Ababa, Ethiopia",phone:"+251 11 4717787",email:"ethtransfed@gmail.com",support:"Contact Support",rights:"© 2026 Ethiopian Transport Employers Federation. All rights reserved.",privacy:"Privacy Policy",terms:"Terms of Service"},langSelectTitle:"Select Language"},አማ:{nav:{home:"መነሻ",about:"ስለ እኛ",news:"ዜና",vacancies:"ክፍት የሥራ ቦታ",partners:"አጋሮች",faq:"ተደጋጋሚ ጥያቄዎች",contact:"ያግኙን",join:"አባል ይሁኑ"},footer:{orgName:"የኢትዮጵያ ትራንስፖርት",orgSub:"አሠሪዎች ፌዴሬሽን",desc:"በኢትዮጵያ የንግድ ትራንስፖርት አሠሪዎችን፣ የክልል ማኅበራትንና የሎጂስቲክስ ኦፕሬተሮችን የሚወክል ብሔራዊ ፌዴሬሽን። በሕግ የተመዘገበው ግንቦት 04 ቀን 2010 ዓ/ም ነው።",preTitle:"ይፋዊ የፌዴሬሽኑ መድረክ",preHeading:"አንድ ፌዴሬሽን። አንድ የታመነ የጋራ ድምፅ።",connectBtn:"ከፌዴሬሽኑ ጋር ይገናኙ",exploreTitle:"አስስ",discoverTitle:"አግኝ",connectTitle:"ያግኙን",address:"አዲስ አበባ፣ ኢትዮጵያ",phone:"+251 11 4717787",email:"ethtransfed@gmail.com",support:"የድጋፍ አገልግሎት ያግኙ",rights:"© 2026 የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን። መብቱ በሕግ የተጠበቀ ነው።",privacy:"የግላዊነት ፖሊሲ",terms:"የአጠቃቀም ደንቦች"},langSelectTitle:"ቋንቋ ይምረጡ"}};function $e(n,c){const u=c==="አማ",o=yd[c].nav,p=[{path:"/",label:o.home,key:"home"},{path:"/about",label:o.about,key:"about"},{path:"/news",label:o.news,key:"news"},{path:"/vacancies",label:o.vacancies,key:"vacancies"},{path:"/partners",label:o.partners,key:"partners"},{path:"/faq",label:o.faq,key:"faq"},{path:"/contact",label:o.contact,key:"contact"}],x=(k,T)=>T==="home"?n==="/"||n==="/home":T==="vacancies"?n==="/vacancies"||n==="/vacancy":T==="partners"?n==="/partners"||n==="/partner":T==="faq"?n==="/faq"||n==="/faqs":T==="contact"?n==="/contact"||n==="/contact-us":n===k,E=p.map(k=>{const m=x(k.path,k.key)?"bg-white text-primary-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors shadow-sm":"text-white hover:bg-primary-700 px-3 py-2 rounded-md text-sm font-medium transition-colors";return`<a href="${k.path}" class="${m}">${k.label}</a>`}).join(`
                    `);return`
    <header class="bg-primary-600 text-white w-full z-50 shadow-md sticky top-0">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo Area -->
                <a href="/" class="flex-shrink-0 flex items-center gap-3 cursor-pointer">
                    <img src="/images/etef_logo.png" alt="ETEF Logo" class="h-11 w-11 object-contain rounded-full bg-white p-0.5 shadow-sm shrink-0" />
                    <div>
                        <span class="font-bold text-xl tracking-tight text-white block leading-none">${u?"ኢትራአፌ":"ETEF"}</span>
                        <span class="text-[10px] text-white/80 block mt-0.5 tracking-wider">${u?"የትራንስፖርት አሠሪዎች":"EMPLOYERS FEDERATION"}</span>
                    </div>
                </a>

                <!-- Desktop Navigation -->
                <nav class="hidden md:flex space-x-1 lg:space-x-2 xl:space-x-3 items-center">
                    ${E}
                </nav>

                <!-- Right Actions: Language Selector & CTA -->
                <div class="hidden md:flex items-center space-x-3">
                    <div class="relative lang-dropdown-container">
                        <button class="lang-dropdown-btn flex items-center gap-2 text-white hover:text-gray-200 transition-colors text-sm font-medium border border-transparent hover:border-white/30 px-2.5 py-1.5 rounded cursor-pointer" aria-label="${u?"ቋንቋ ይምረጡ":"Select Language"}">
                            <i class="fa-solid fa-globe"></i> <span class="current-lang-text">${c}</span> <i class="fa-solid fa-chevron-down text-xs"></i>
                        </button>
                        <div class="lang-dropdown-menu hidden absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50 text-slate-800 text-sm">
                            <div class="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">${u?"ቋንቋ ይምረጡ":"Select Language"}</div>
                            <button type="button" class="lang-select-option w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center justify-between text-xs ${c==="ENG"?"font-semibold text-primary-700 bg-primary-50/50":"font-medium text-slate-700 hover:text-primary-600"} cursor-pointer" data-lang="ENG" data-lang-name="English">
                                <span class="flex items-center gap-2">🇬🇧 English</span>
                                ${c==="ENG"?'<i class="fa-solid fa-check text-primary-600 text-xs"></i>':'<span class="w-3.5"></span>'}
                            </button>
                            <button type="button" class="lang-select-option w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center justify-between text-xs ${c==="አማ"?"font-semibold text-primary-700 bg-primary-50/50":"font-medium text-slate-700 hover:text-primary-600"} cursor-pointer" data-lang="አማ" data-lang-name="Amharic">
                                <span class="flex items-center gap-2">🇪🇹 አማርኛ</span>
                                ${c==="አማ"?'<i class="fa-solid fa-check text-primary-600 text-xs"></i>':'<span class="w-3.5"></span>'}
                            </button>
                        </div>
                    </div>
                    <a href="/membership" class="${n==="/membership"||n==="/memberships"?"bg-white text-primary-600":"border-2 border-white text-white hover:bg-white hover:text-primary-600"} px-4 py-2 rounded-md text-sm font-semibold transition-all shadow-sm">
                        ${o.join}
                    </a>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center gap-2">
                    <div class="relative lang-dropdown-container">
                        <button class="lang-dropdown-btn flex items-center gap-1.5 text-white hover:text-gray-200 transition-colors text-xs font-semibold px-2 py-1 rounded border border-white/30 cursor-pointer">
                            <i class="fa-solid fa-globe"></i> <span>${c}</span>
                        </button>
                        <div class="lang-dropdown-menu hidden absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50 text-slate-800 text-sm">
                            <button type="button" class="lang-select-option w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center justify-between text-xs ${c==="ENG"?"font-semibold text-primary-700 bg-primary-50/50":"font-medium text-slate-700"} cursor-pointer" data-lang="ENG" data-lang-name="English">
                                <span>🇬🇧 English</span>
                                ${c==="ENG"?'<i class="fa-solid fa-check text-primary-600 text-xs"></i>':'<span class="w-3.5"></span>'}
                            </button>
                            <button type="button" class="lang-select-option w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center justify-between text-xs ${c==="አማ"?"font-semibold text-primary-700 bg-primary-50/50":"font-medium text-slate-700"} cursor-pointer" data-lang="አማ" data-lang-name="Amharic">
                                <span>🇪🇹 አማርኛ</span>
                                ${c==="አማ"?'<i class="fa-solid fa-check text-primary-600 text-xs"></i>':'<span class="w-3.5"></span>'}
                            </button>
                        </div>
                    </div>
                    <button class="text-white hover:text-gray-200 focus:outline-none p-2 cursor-pointer" aria-label="Toggle Navigation">
                        <i class="fa-solid fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>
  `}function Je(n){const c=n==="አማ",u=yd[n].footer;return`
    <footer class="bg-primary-600 text-white border-t border-primary-500">
        <!-- Pre-footer CTA Banner -->
        <div class="bg-primary-700 py-12 border-b border-white/15">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs font-bold uppercase tracking-wider text-blue-200 block mb-1">${u.preTitle}</span>
                    <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">${u.preHeading}</h2>
                    <p class="text-blue-100 text-sm mt-1 max-w-2xl">${c?"17 የአሠሪ ማኅበራትንና ከ6,652 በላይ የንግድ ትራንስፖርት ኦፕሬተሮችን በአንድነት ያስተባበረ ብሔራዊ ፌዴሬሽን።":"Uniting 17 employers' associations and over 6,652 commercial transport operators nationwide."}</p>
                </div>
                <div class="flex items-center gap-3 shrink-0">
                    <a href="/contact" class="px-6 py-3 rounded-xl bg-white text-primary-700 hover:bg-slate-100 font-bold text-sm transition-all shadow-md">
                        ${u.connectBtn}
                    </a>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                <!-- Column 1: Brand & Charter Statement -->
                <div class="lg:col-span-2 space-y-4">
                    <div class="flex items-center gap-3">
                        <img src="/images/etef_logo.png" alt="ETEF Logo" class="h-12 w-12 object-contain rounded-full bg-white p-1 shadow-md shrink-0" />
                        <div>
                            <span class="font-extrabold text-lg text-white block leading-tight tracking-tight">${u.orgName}</span>
                            <span class="text-xs font-semibold text-blue-200 block tracking-wider">${u.orgSub}</span>
                        </div>
                    </div>
                    <p class="text-sm text-blue-100 leading-relaxed pr-6">
                        ${u.desc}
                    </p>
                    <div class="pt-2 flex items-center gap-3 text-white">
                        <a href="https://t.me" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-white/15 hover:bg-white hover:text-primary-700 flex items-center justify-center transition-colors text-sm" aria-label="Telegram">
                            <i class="fa-brands fa-telegram"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-white/15 hover:bg-white hover:text-primary-700 flex items-center justify-center transition-colors text-sm" aria-label="Facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-white/15 hover:bg-white hover:text-primary-700 flex items-center justify-center transition-colors text-sm" aria-label="X (formerly Twitter)">
                            <i class="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-white/15 hover:bg-white hover:text-primary-700 flex items-center justify-center transition-colors text-sm" aria-label="LinkedIn">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                <!-- Column 2: Explore Links -->
                <div>
                    <h3 class="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-white pl-2.5">${u.exploreTitle}</h3>
                    <ul class="space-y-2.5 text-sm text-blue-100">
                        <li><a href="/about" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${c?"ስለ ፌዴሬሽኑ":"About ETEF"}</a></li>
                        <li><a href="/about#history" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${c?"የመመሥረት ታሪክ":"Founding History"}</a></li>
                        <li><a href="/about#leadership" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${c?"የሥራ አመራር ቦርድ":"Executive Board"}</a></li>
                        <li><a href="/membership" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${c?"የአባልነት መመሪያ":"Membership Guide"}</a></li>
                        <li><a href="/partners" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${c?"ስትራቴጂካዊ አጋሮች":"Strategic Partners"}</a></li>
                    </ul>
                </div>

                <!-- Column 3: Discover Links -->
                <div>
                    <h3 class="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-white pl-2.5">${u.discoverTitle}</h3>
                    <ul class="space-y-2.5 text-sm text-blue-100">
                        <li><a href="/news" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${c?"የትራንስፖርት ዜናዎች":"Industry News"}</a></li>
                        <li><a href="/vacancies" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${c?"ክፍት የሥራ ቦታዎች":"Job Openings"}</a></li>
                        <li><a href="/home#corridors" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${c?"የንግድ ኮሪደሮች ሁኔታ":"Corridor Watch"}</a></li>
                        <li><a href="/faq" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${c?"ተደጋጋሚ ጥያቄዎች":"Regulatory FAQ"}</a></li>
                    </ul>
                </div>

                <!-- Column 4: Contact & Secretariat -->
                <div>
                    <h3 class="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-white pl-2.5">${u.connectTitle}</h3>
                    <ul class="space-y-3 text-sm text-blue-100">
                        <li class="flex items-start gap-2.5">
                            <i class="fa-solid fa-location-dot text-white mt-1 shrink-0"></i>
                            <span>${u.address}</span>
                        </li>
                        <li class="flex items-center gap-2.5">
                            <i class="fa-solid fa-phone text-white shrink-0"></i>
                            <a href="tel:+251114717787" class="hover:text-white transition-colors font-medium">${u.phone}</a>
                        </li>
                        <li class="flex items-center gap-2.5">
                            <i class="fa-solid fa-envelope text-white shrink-0"></i>
                            <a href="mailto:ethtransfed@gmail.com" class="hover:text-white transition-colors font-medium">${u.email}</a>
                        </li>
                        <li class="pt-2">
                            <a href="/contact" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/15 hover:bg-white hover:text-primary-700 text-xs font-semibold text-white transition-colors">
                                <i class="fa-solid fa-headset"></i>
                                <span>${u.support}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Bottom Copyright & Legal Links -->
            <div class="border-t border-white/15 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200">
                <p>${u.rights}</p>
                <div class="flex items-center gap-6">
                    <a href="/privacy" class="hover:text-white transition-colors">${u.privacy}</a>
                    <span class="text-blue-300">•</span>
                    <a href="/terms" class="hover:text-white transition-colors">${u.terms}</a>
                </div>
            </div>
        </div>
    </footer>
  `}const Ev=`
    ${$e("/","ENG")}

    <main class="flex-grow">
        <!-- Hero Section (Auto-Rotating Transport Imagery) -->
        <section id="hero-section" class="relative text-white pt-16 pb-14 sm:pt-20 sm:pb-16 border-b border-slate-800/40 overflow-hidden min-h-[640px] flex flex-col justify-between">
            <!-- Background Image Slides -->
            <div id="hero-slider-container" class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-100 scale-100" style="background-image: url('/images/hero_expressway.jpg');"></div>
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-0 scale-105" style="background-image: url('/images/hero_truck.jpg');"></div>
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-0 scale-105" style="background-image: url('/images/news_mountain_truck.jpg');"></div>
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-0 scale-105" style="background-image: url('/images/news_logistics_hub.jpg');"></div>
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-0 scale-105" style="background-image: url('/images/passenger_transit.jpg');"></div>

                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/85 backdrop-blur-[1px]"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-600/25 via-transparent to-transparent"></div>
            </div>

            <!-- Floating Slide Arrows -->
            <button id="hero-slide-prev" class="hidden md:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white border border-white/20 items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-lg hover:scale-105" aria-label="Previous Slide">
                <i class="fa-solid fa-chevron-left text-sm"></i>
            </button>
            <button id="hero-slide-next" class="hidden md:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white border border-white/20 items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-lg hover:scale-105" aria-label="Next Slide">
                <i class="fa-solid fa-chevron-right text-sm"></i>
            </button>

            <!-- Foreground Content -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
                <!-- Badge -->
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 hover:bg-white/25 text-white border border-white/25 shadow-lg backdrop-blur-md mb-6 transition-all">
                    <i class="fa-solid fa-shield-halved text-primary-300 text-xs"></i>
                    <span>Official Transport Employers Federation</span>
                </div>

                <!-- Headline -->
                <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6 drop-shadow-md">
                    A stronger voice for<br />
                    Ethiopia's transport<br />
                    employers.
                </h1>

                <!-- Subtitle -->
                <p class="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow">
                    Connecting transport employers, protecting member interests and supporting a stronger, sustainable and peaceful transport industry.
                </p>

                <!-- Action Buttons -->
                <div class="flex flex-wrap items-center justify-center gap-4 mb-10 sm:mb-12">
                    <a href="/about" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-6 py-3.5 rounded-xl font-semibold text-sm shadow-lg transition-all hover:border-white/50">
                        <span>Explore About Us</span>
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                    <a href="/membership" class="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-xl shadow-primary-600/40 transition-all transform hover:-translate-y-0.5">
                        <span>Become a Member</span>
                        <i class="fa-solid fa-user-plus text-xs"></i>
                    </a>
                </div>

                <!-- Floating Glassmorphic Institutional Stats -->
                <div class="max-w-5xl mx-auto">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        <div class="bg-white/95 hover:bg-white p-6 rounded-2xl border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-users-viewfinder"></i>
                            </div>
                            <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 block">6,652+</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">Registered Members</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">Commercial Transporters</span>
                        </div>

                        <div class="bg-white/95 hover:bg-white p-6 rounded-2xl border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-sitemap"></i>
                            </div>
                            <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 block">17</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">Employers' Associations</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">Regional & Sector Unions</span>
                        </div>

                        <div class="bg-white/95 hover:bg-white p-6 rounded-2xl border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-route"></i>
                            </div>
                            <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 block">4</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">Key Corridors Monitored</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">Djibouti, Modjo, Moyale, Berbera</span>
                        </div>

                        <div class="bg-white/95 hover:bg-white p-6 rounded-2xl border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-certificate"></i>
                            </div>
                            <span class="text-xl sm:text-2xl font-extrabold text-slate-900 block">May 12, 2018</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">Charter Certification Date</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">Ministry of Labor Recognition</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- LIVE TRADE CORRIDORS & PORT CLEARANCE TRACKER -->
        <section class="py-12 bg-white border-b border-slate-200 relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Section Header with Live Pulsing Badge -->
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-primary-50 text-primary-700 border border-primary-200 mb-2">
                            <span class="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></span>
                            <span>NATIONAL LOGISTICS WATCH • LIVE CORRIDOR STATUS</span>
                        </div>
                        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                            Strategic Trade Corridors & Port Clearance
                        </h2>
                        <p class="text-sm text-slate-600 mt-1">
                            Real-time transit conditions, customs checkpoint throughput, and freight alerts across Ethiopia's principal economic arteries.
                        </p>
                    </div>
                    <div class="text-xs text-slate-500 flex items-center gap-2">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                        <span>Updated: Today, 08:30 EAT • Source: ETEF Secretariat Logistics Directorate</span>
                    </div>
                </div>

                <!-- 4 Corridors Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Corridor 1: Ethio-Djibouti Corridor -->
                    <div class="group bg-white rounded-2xl border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
                        <div>
                            <div class="relative h-44 overflow-hidden bg-slate-900">
                                <img src="/images/corridor_djibouti.jpg" alt="Djibouti – Addis Ababa Expressway Corridor" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                                <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span class="px-2.5 py-1 rounded-md text-[11px] font-black bg-slate-900/85 text-white backdrop-blur-md uppercase tracking-wider border border-white/20 shadow-sm">
                                        Corridor 01
                                    </span>
                                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary-600 text-white backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> Normal Flow
                                    </span>
                                </div>
                                <div class="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                                    <span class="text-[11px] font-semibold text-primary-300 flex items-center gap-1.5 drop-shadow">
                                        <i class="fa-solid fa-route text-[10px]"></i> Principal Sea-Trade Link
                                    </span>
                                    <span class="text-[10px] text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                                        <i class="fa-solid fa-satellite-dish text-[9px] text-primary-400 mr-1"></i> Live
                                    </span>
                                </div>
                            </div>

                            <div class="p-5">
                                <h3 class="font-bold text-slate-900 text-lg mb-0.5 group-hover:text-primary-600 transition-colors">
                                    Djibouti – Addis Ababa
                                </h3>
                                <p class="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                                    <i class="fa-solid fa-location-dot text-primary-500"></i> Galafi / Dewele Border Crossing
                                </p>

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-regular fa-clock text-slate-400"></i> Transit Duration:</span>
                                        <span class="font-bold text-slate-800">42–48 Hours</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-hourglass-half text-slate-400"></i> Galafi Border Queue:</span>
                                        <span class="font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded border border-primary-200">Under 4.2 Hours</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-scale-balanced text-slate-400"></i> Toll / Weighbridge:</span>
                                        <span class="font-semibold text-slate-800">All 6 Scales Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-5 pt-0">
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="djibouti">
                                <span>View Corridor Advisory</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Corridor 2: Modjo Multimodal Dry Port -->
                    <div class="group bg-white rounded-2xl border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
                        <div>
                            <div class="relative h-44 overflow-hidden bg-slate-900">
                                <img src="/images/corridor_modjo.jpg" alt="Modjo Dry Port Multimodal Terminal Yard" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                                <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span class="px-2.5 py-1 rounded-md text-[11px] font-black bg-slate-900/85 text-white backdrop-blur-md uppercase tracking-wider border border-white/20 shadow-sm">
                                        Corridor 02
                                    </span>
                                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary-600 text-white backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> Terminal Open
                                    </span>
                                </div>
                                <div class="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                                    <span class="text-[11px] font-semibold text-primary-300 flex items-center gap-1.5 drop-shadow">
                                        <i class="fa-solid fa-train-subway text-[10px]"></i> Multimodal Rail Hub
                                    </span>
                                    <span class="text-[10px] text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                                        <i class="fa-solid fa-satellite-dish text-[9px] text-primary-400 mr-1"></i> Live
                                    </span>
                                </div>
                            </div>

                            <div class="p-5">
                                <h3 class="font-bold text-slate-900 text-lg mb-0.5 group-hover:text-primary-600 transition-colors">
                                    Modjo Multimodal Port
                                </h3>
                                <p class="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                                    <i class="fa-solid fa-location-dot text-primary-500"></i> Central Inbound Clearance Hub
                                </p>

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-boxes-stacked text-slate-400"></i> Container Dwell:</span>
                                        <span class="font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded border border-primary-200">3.8 Days (Optimal)</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-truck-ramp-box text-slate-400"></i> Daily Truck Dispatch:</span>
                                        <span class="font-bold text-slate-800">480+ Heavy Units</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-train text-slate-400"></i> Freight Rail Shunts:</span>
                                        <span class="font-semibold text-slate-800">3 Block Trains Daily</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-5 pt-0">
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="modjo">
                                <span>View Port Advisory</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Corridor 3: Moyale – Lamu Corridor -->
                    <div class="group bg-white rounded-2xl border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
                        <div>
                            <div class="relative h-44 overflow-hidden bg-slate-900">
                                <img src="/images/corridor_moyale.jpg" alt="Moyale One Stop Border Post" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                                <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span class="px-2.5 py-1 rounded-md text-[11px] font-black bg-slate-900/85 text-white backdrop-blur-md uppercase tracking-wider border border-white/20 shadow-sm">
                                        Corridor 03
                                    </span>
                                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary-600 text-white backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> Operating
                                    </span>
                                </div>
                                <div class="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                                    <span class="text-[11px] font-semibold text-primary-300 flex items-center gap-1.5 drop-shadow">
                                        <i class="fa-solid fa-truck-moving text-[10px]"></i> Southern Gateway
                                    </span>
                                    <span class="text-[10px] text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                                        <i class="fa-solid fa-satellite-dish text-[9px] text-primary-400 mr-1"></i> Live
                                    </span>
                                </div>
                            </div>

                            <div class="p-5">
                                <h3 class="font-bold text-slate-900 text-lg mb-0.5 group-hover:text-primary-600 transition-colors">
                                    Moyale – Lamu Corridor
                                </h3>
                                <p class="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                                    <i class="fa-solid fa-location-dot text-primary-500"></i> Kenya One-Stop Border Post
                                </p>

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-regular fa-clock text-slate-400"></i> Transit Duration:</span>
                                        <span class="font-bold text-slate-800">55–60 Hours</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-check-double text-slate-400"></i> OSBP Throughput:</span>
                                        <span class="font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded border border-primary-200">Seamless Clearance</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-gas-pump text-slate-400"></i> Livestock & Fuel:</span>
                                        <span class="font-semibold text-slate-800">Standard Quarantine Open</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-5 pt-0">
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="moyale">
                                <span>View Border Advisory</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Corridor 4: Berbera Port Corridor -->
                    <div class="group bg-white rounded-2xl border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
                        <div>
                            <div class="relative h-44 overflow-hidden bg-slate-900">
                                <img src="/images/corridor_berbera.jpg" alt="Berbera to Dire Dawa Trade Corridor Highway" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                                <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span class="px-2.5 py-1 rounded-md text-[11px] font-black bg-slate-900/85 text-white backdrop-blur-md uppercase tracking-wider border border-white/20 shadow-sm">
                                        Corridor 04
                                    </span>
                                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-900 border border-white/20 text-white backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> Freight Scaling
                                    </span>
                                </div>
                                <div class="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                                    <span class="text-[11px] font-semibold text-primary-300 flex items-center gap-1.5 drop-shadow">
                                        <i class="fa-solid fa-truck-fast text-[10px]"></i> Eastern Maritime Access
                                    </span>
                                    <span class="text-[10px] text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                                        <i class="fa-solid fa-satellite-dish text-[9px] text-primary-400 mr-1"></i> Live
                                    </span>
                                </div>
                            </div>

                            <div class="p-5">
                                <h3 class="font-bold text-slate-900 text-lg mb-0.5 group-hover:text-primary-600 transition-colors">
                                    Berbera – Dire Dawa
                                </h3>
                                <p class="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                                    <i class="fa-solid fa-location-dot text-primary-500"></i> Tog Wajaale Transit Point
                                </p>

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-regular fa-clock text-slate-400"></i> Transit Duration:</span>
                                        <span class="font-bold text-slate-800">30–36 Hours</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-shield-halved text-slate-400"></i> Customs Clearance:</span>
                                        <span class="font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">5.5 Hours Avg</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-road text-slate-400"></i> Road Upgrades:</span>
                                        <span class="font-semibold text-slate-800">Section 2 Paving Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-5 pt-0">
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="berbera">
                                <span>View Corridor Advisory</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Emergency Corridor Hotline Banner -->
                <div class="mt-8 bg-primary-600 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl relative overflow-hidden">
                    <div class="flex items-center gap-4 text-center md:text-left relative z-10">
                        <div class="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center text-xl shrink-0 shadow-inner">
                            <i class="fa-solid fa-truck-ramp-box"></i>
                        </div>
                        <div>
                            <span class="font-bold text-base sm:text-lg block tracking-tight">ETEF National 24/7 Corridor Emergency & Breakdown Helpline</span>
                            <p class="text-xs sm:text-sm text-blue-100 mt-0.5">Encountering arbitrary delays, security issues, or breakdown between Modjo, Galafi, or Moyale?</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto justify-center">
                        <a href="tel:+251114717787" class="px-5 py-2.5 bg-white text-primary-700 hover:bg-slate-100 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-all">
                            <i class="fa-solid fa-phone"></i>
                            <span>+251 11 4717787</span>
                        </a>
                        <button id="btn-corridor-incident-report" class="px-4 py-2.5 bg-primary-700 hover:bg-primary-800 text-white border border-white/30 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2">
                            <i class="fa-solid fa-triangle-exclamation text-white"></i>
                            <span>Report Road Incident</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- INSTITUTIONAL CHARTER, MISSION & VISION (Pure English) -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100">
                        Institutional Mandate
                    </span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                        A Statutory Apex Body For Ethiopian Transport Employers
                    </h2>
                    <p class="text-slate-600 text-sm mt-3 leading-relaxed">
                        Founded through the historic 2016 Dry Cargo Associations Union and certified on May 12, 2018 (Ginbot 4, 2010 E.C.) under FDRE Constitution Article 31 and Labor Proclamation No. 1156/2012.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <!-- Strategic Mission Card -->
                    <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                        <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                            <i class="fa-solid fa-compass"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-2">Our Mission</h3>
                        <p class="text-primary-700 text-xs font-bold uppercase tracking-wider mb-3">
                            Protecting Transport Employers & Fostering Sustainable Growth
                        </p>
                        <p class="text-sm text-slate-600 leading-relaxed mb-6">
                            "To protect the statutory rights and business interests of member employers, establish industrial peace, provide legal and dispute mediation, and advocate for progressive transport policies."
                        </p>
                        <ul class="space-y-2.5 text-xs text-slate-700">
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-primary-600"></i>
                                <span>Legal protection & high-level court advocacy</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-primary-600"></i>
                                <span>Collective bargaining & sustainable industrial peace</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-primary-600"></i>
                                <span>Policy dialogue with federal and international bodies</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Strategic Vision Card -->
                    <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                        <div class="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                            <i class="fa-solid fa-eye"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-2">Our Vision</h3>
                        <p class="text-sky-700 text-xs font-bold uppercase tracking-wider mb-3">
                            Strong & Influential Voice in Ethiopia's Transport Sector
                        </p>
                        <p class="text-sm text-slate-600 leading-relaxed mb-6">
                            "To become a strong and influential representative within Ethiopia's transport sector, driving national competitiveness, fleet modernization, and tripartite social dialogue."
                        </p>
                        <ul class="space-y-2.5 text-xs text-slate-700">
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-sky-600"></i>
                                <span>Unified statutory voice for 17 employers' associations</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-sky-600"></i>
                                <span>Primary value: Member Satisfaction</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-sky-600"></i>
                                <span>National impact on economic, social, and trade development</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="text-center">
                    <a href="/about" class="inline-flex items-center gap-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all text-sm">
                        <span>Explore More About ETEF</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>

        <!-- Commercial Sector Representation -->
        <section class="py-20 bg-white border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-14">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100">
                        Sector Representation
                    </span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                        Comprehensive Transport Sector Coverage
                    </h2>
                    <p class="text-slate-600 text-sm mt-3">
                        From heavy cross-border freight convoys to nationwide inter-city passenger transit and multimodal dry port logistics terminals.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Sector 1: Freight & Heavy Cargo -->
                    <div class="card-hover-fx bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
                        <div>
                            <div class="h-52 w-full overflow-hidden relative">
                                <img src="/images/hero_truck.jpg" alt="Commercial Heavy Freight Truck" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <span class="absolute top-4 left-4 bg-primary-600/90 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                                    Heavy Freight
                                </span>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-slate-900 mb-2">Freight & Heavy Cargo Transport</h3>
                                <p class="text-xs text-slate-600 leading-relaxed mb-4">
                                    Advocating for dry bulk, containerized flatbeds, and liquid fuel carriers operating along the vital Addis Ababa–Djibouti, Modjo, and regional distribution routes.
                                </p>
                                <div class="space-y-1.5 text-xs text-slate-700">
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>Axle load & transit tariff standard facilitation</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>Corridor security and fuel transport protocols</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-6 pt-0">
                            <a href="/about" class="text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1.5">
                                <span>Learn Freight Mandate</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Sector 2: Passenger Transit -->
                    <div class="card-hover-fx bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
                        <div>
                            <div class="h-52 w-full overflow-hidden relative">
                                <img src="/images/passenger_transit.jpg" alt="Passenger Bus Fleet" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <span class="absolute top-4 left-4 bg-primary-600/90 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                                    Public Transit
                                </span>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-slate-900 mb-2">Public & Inter-City Passenger Transit</h3>
                                <p class="text-xs text-slate-600 leading-relaxed mb-4">
                                    Representing regional bus associations, cross-country passenger fleets, and urban transit operators serving millions of citizens daily.
                                </p>
                                <div class="space-y-1.5 text-xs text-slate-700">
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>Terminal safety & passenger service regulations</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>Cross-regional route licensing standardization</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-6 pt-0">
                            <a href="/about" class="text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1.5">
                                <span>Learn Transit Mandate</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Sector 3: Multimodal Logistics -->
                    <div class="card-hover-fx bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
                        <div>
                            <div class="h-52 w-full overflow-hidden relative">
                                <img src="/images/about_vision.jpg" alt="Dry Port Cargo Logistics" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <span class="absolute top-4 left-4 bg-primary-600/90 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                                    Multimodal Hubs
                                </span>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-slate-900 mb-2">Logistics & Multimodal Operators</h3>
                                <p class="text-xs text-slate-600 leading-relaxed mb-4">
                                    Supporting freight forwarders, dry port cargo handlers, warehouse operators, and modern supply chain technology service providers.
                                </p>
                                <div class="space-y-1.5 text-xs text-slate-700">
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>Modjo dry port dwell time reduction advocacy</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>Multimodal trade digitization & AfCFTA readiness</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-6 pt-0">
                            <a href="/about" class="text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1.5">
                                <span>Learn Logistics Mandate</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6 Core Federation Services -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100">
                        Core Services
                    </span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                        How We Empower Transport Employers
                    </h2>
                    <p class="text-slate-600 text-sm mt-3">
                        Six official statutory service pillars established to protect employers' legal and commercial interests nationwide.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-scale-balanced"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">Legal Representation & Defense</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Representing transport employers before judicial courts, administrative tribunals, and arbitration boards to protect business assets and contractual rights.
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-handshake-angle"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">Collective Bargaining</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Leading structured negotiations with transport labor unions to establish fair, productive, and balanced collective agreements under Proclamation No. 1156/2012.
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-scroll"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">Policy & Regulatory Reform</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Conducting empirical research and consulting with federal ministries on transit tariffs, taxation, customs checkpoints, and logistics master plans.
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-user-graduate"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">Professional Training</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Delivering specialized leadership, fleet management, logistics technology, and workplace occupational safety programs for enterprise members.
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-network-wired"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">Freight Market Networking</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Connecting member fleets with domestic and cross-border commercial opportunities, industrial parks, and agricultural export corridors.
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-globe"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">Exhibitions & Symposia</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Hosting nationwide transport expos, vehicle technology showcases, and high-level tripartite conferences on logistics modernization.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section (Clean White / Light Brand Card) -->
        <section class="py-20 bg-white border-t border-slate-200 text-slate-900 relative">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <span class="text-xs font-bold text-primary-700 uppercase tracking-wider bg-primary-50 px-4 py-1.5 rounded-full border border-primary-200 inline-block mb-4">
                    Join the Apex National Voice
                </span>
                <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
                    Ready to Strengthen Your Transport Enterprise?
                </h2>
                <p class="text-slate-600 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                    Join 17 employers' associations and over 6,652 commercial operators. Benefit from collective legal representation, dispute resolution, and regulatory advocacy.
                </p>
                <div class="flex flex-wrap items-center justify-center gap-4">
                    <a href="/membership" class="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all">
                        Apply for Membership
                    </a>
                    <a href="/contact" class="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm shadow-sm transition-all">
                        Contact Secretariat
                    </a>
                </div>
            </div>
        </section>
    </main>

    ${Je("ENG")}
`,Sv=`
    ${$e("/","አማ")}

    <main class="flex-grow">
        <!-- Hero Section (Auto-Rotating Transport Imagery) -->
        <section id="hero-section" class="relative text-white pt-16 pb-14 sm:pt-20 sm:pb-16 border-b border-slate-800/40 overflow-hidden min-h-[640px] flex flex-col justify-between">
            <!-- Background Image Slides -->
            <div id="hero-slider-container" class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-100 scale-100" style="background-image: url('/images/hero_expressway.jpg');"></div>
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-0 scale-105" style="background-image: url('/images/hero_truck.jpg');"></div>
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-0 scale-105" style="background-image: url('/images/news_mountain_truck.jpg');"></div>
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-0 scale-105" style="background-image: url('/images/news_logistics_hub.jpg');"></div>
                <div class="hero-bg-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-0 scale-105" style="background-image: url('/images/passenger_transit.jpg');"></div>

                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/85 backdrop-blur-[1px]"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-600/25 via-transparent to-transparent"></div>
            </div>

            <!-- Floating Slide Arrows -->
            <button id="hero-slide-prev" class="hidden md:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white border border-white/20 items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-lg hover:scale-105" aria-label="ቀዳሚ ምስል">
                <i class="fa-solid fa-chevron-left text-sm"></i>
            </button>
            <button id="hero-slide-next" class="hidden md:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white border border-white/20 items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-lg hover:scale-105" aria-label="ቀጣይ ምስል">
                <i class="fa-solid fa-chevron-right text-sm"></i>
            </button>

            <!-- Foreground Content -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
                <!-- Badge -->
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 hover:bg-white/25 text-white border border-white/25 shadow-lg backdrop-blur-md mb-6 transition-all">
                    <i class="fa-solid fa-shield-halved text-primary-300 text-xs"></i>
                    <span>ይፋዊ የትራንስፖርት አሠሪዎች ፌዴሬሽን</span>
                </div>

                <!-- Headline -->
                <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl mx-auto mb-6 drop-shadow-md">
                    ለኢትዮጵያ የትራንስፖርት<br />
                    አሠሪዎች ጠንካራና<br />
                    ተደማጭ የጋራ ድምፅ።
                </h1>

                <!-- Subtitle -->
                <p class="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow">
                    የትራንስፖርት አሠሪዎችን በአንድነት በማስተባበር፣ የአባላትን የጋራ መብትና ጥቅም በማስጠበቅ ለዘላቂና ሰላማዊ የትራንስፖርት ኢንዱስትሪ እንሰራለን።
                </p>

                <!-- Action Buttons -->
                <div class="flex flex-wrap items-center justify-center gap-4 mb-10 sm:mb-12">
                    <a href="/about" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-6 py-3.5 rounded-xl font-semibold text-sm shadow-lg transition-all hover:border-white/50">
                        <span>ስለ ፌዴሬሽኑ ይወቁ</span>
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                    <a href="/membership" class="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-xl shadow-primary-600/40 transition-all transform hover:-translate-y-0.5">
                        <span>አባል ይሁኑ</span>
                        <i class="fa-solid fa-user-plus text-xs"></i>
                    </a>
                </div>

                <!-- Floating Glassmorphic Institutional Stats -->
                <div class="max-w-5xl mx-auto">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        <div class="bg-white/95 hover:bg-white p-6 rounded-2xl border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-users-viewfinder"></i>
                            </div>
                            <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 block">6,652+</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">የተመዘገቡ አባላት</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">የትራንስፖርት ኦፕሬተሮች</span>
                        </div>

                        <div class="bg-white/95 hover:bg-white p-6 rounded-2xl border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-sitemap"></i>
                            </div>
                            <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 block">17</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">የአሠሪ ማኅበራት</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">ብሔራዊና ክልላዊ ማኅበራት</span>
                        </div>

                        <div class="bg-white/95 hover:bg-white p-6 rounded-2xl border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-route"></i>
                            </div>
                            <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 block">4</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">ስትራቴጂካዊ የንግድ ኮሪደሮች</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">ጅቡቲ፣ ሞጆ፣ ሞያሌ፣ በርበራ</span>
                        </div>

                        <div class="bg-white/95 hover:bg-white p-6 rounded-2xl border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-certificate"></i>
                            </div>
                            <span class="text-xl sm:text-2xl font-extrabold text-slate-900 block">ግንቦት 04/2010</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">ሕጋዊ የዕውቅና ምስክር ወረቀት</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">በሠራተኛና ማኅበራዊ ጉዳይ ሚኒስቴር</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- LIVE TRADE CORRIDORS & PORT CLEARANCE TRACKER -->
        <section class="py-12 bg-white border-b border-slate-200 relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Section Header with Live Pulsing Badge -->
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-primary-50 text-primary-700 border border-primary-200 mb-2">
                            <span class="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></span>
                            <span>ብሔራዊ የሎጂስቲክስ ክትትል • የኮሪደር ወቅታዊ ሁኔታ</span>
                        </div>
                        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                            ስትራቴጂካዊ የንግድ ኮሪደሮችና የጉምሩክ ክሊራንስ ሁኔታ
                        </h2>
                        <p class="text-sm text-slate-600 mt-1">
                            በኢትዮጵያ ዋና ዋና የኢኮኖሚ የንግድ መስመሮች ላይ ያሉ የትራንዚት እንቅስቃሴ፣ የፍተሻ ጣቢያዎችና የወደብ ክሊራንስ ፈጣን መረጃዎች።
                        </p>
                    </div>
                    <div class="text-xs text-slate-500 flex items-center gap-2">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                        <span>የተሻሻለው፡ ዛሬ 08:30 • ምንጭ፡ የኢትራአፌ የጭነት ሎጂስቲክስ ዳይሬክቶሬት</span>
                    </div>
                </div>

                <!-- 4 Corridors Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Corridor 1: Ethio-Djibouti Corridor -->
                    <div class="group bg-white rounded-2xl border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
                        <div>
                            <div class="relative h-44 overflow-hidden bg-slate-900">
                                <img src="/images/corridor_djibouti.jpg" alt="ጅቡቲ – አዲስ አበባ የፍጥነት መንገድ ኮሪደር" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                                <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span class="px-2.5 py-1 rounded-md text-[11px] font-black bg-slate-900/85 text-white backdrop-blur-md uppercase tracking-wider border border-white/20 shadow-sm">
                                        ኮሪደር 01
                                    </span>
                                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary-600 text-white backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> የተረጋጋ ፍሰት
                                    </span>
                                </div>
                                <div class="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                                    <span class="text-[11px] font-semibold text-primary-300 flex items-center gap-1.5 drop-shadow">
                                        <i class="fa-solid fa-route text-[10px]"></i> ዋነኛ የባህር ንግድ መስመር
                                    </span>
                                    <span class="text-[10px] text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                                        <i class="fa-solid fa-satellite-dish text-[9px] text-primary-400 mr-1"></i> ቀጥታ
                                    </span>
                                </div>
                            </div>

                            <div class="p-5">
                                <h3 class="font-bold text-slate-900 text-lg mb-0.5 group-hover:text-primary-600 transition-colors">
                                    ጅቡቲ – አዲስ አበባ
                                </h3>
                                <p class="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                                    <i class="fa-solid fa-location-dot text-primary-500"></i> የገላፊ / ዴወሌ ድንበር ማቋረጫ
                                </p>

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-regular fa-clock text-slate-400"></i> የትራንዚት ጊዜ፡</span>
                                        <span class="font-bold text-slate-800">42–48 ሰዓት</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-hourglass-half text-slate-400"></i> የገላፊ ድንበር ሰልፍ፡</span>
                                        <span class="font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded border border-primary-200">ከ4.2 ሰዓት በታች</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-scale-balanced text-slate-400"></i> የሚዛን ጣቢያዎች፡</span>
                                        <span class="font-semibold text-slate-800">ሁሉም 6ቱ ሚዛኖች ክፍት</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-5 pt-0">
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="djibouti">
                                <span>የኮሪደሩን መረጃ ይመልከቱ</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Corridor 2: Modjo Multimodal Dry Port -->
                    <div class="group bg-white rounded-2xl border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
                        <div>
                            <div class="relative h-44 overflow-hidden bg-slate-900">
                                <img src="/images/corridor_modjo.jpg" alt="የሞጆ ደረቅ ወደብ ተርሚናል" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                                <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span class="px-2.5 py-1 rounded-md text-[11px] font-black bg-slate-900/85 text-white backdrop-blur-md uppercase tracking-wider border border-white/20 shadow-sm">
                                        ኮሪደር 02
                                    </span>
                                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary-600 text-white backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> ወደቡ ክፍት ነው
                                    </span>
                                </div>
                                <div class="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                                    <span class="text-[11px] font-semibold text-primary-300 flex items-center gap-1.5 drop-shadow">
                                        <i class="fa-solid fa-train-subway text-[10px]"></i> የመልቲሞዳል ባቡር ማዕከል
                                    </span>
                                    <span class="text-[10px] text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                                        <i class="fa-solid fa-satellite-dish text-[9px] text-primary-400 mr-1"></i> ቀጥታ
                                    </span>
                                </div>
                            </div>

                            <div class="p-5">
                                <h3 class="font-bold text-slate-900 text-lg mb-0.5 group-hover:text-primary-600 transition-colors">
                                    የሞጆ መልቲሞዳል ደረቅ ወደብ
                                </h3>
                                <p class="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                                    <i class="fa-solid fa-location-dot text-primary-500"></i> ማዕከላዊ የገቢ ጭነት ክሊራንስ
                                </p>

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-boxes-stacked text-slate-400"></i> የመያዣ ዕቃዎች ቆይታ፡</span>
                                        <span class="font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded border border-primary-200">3.8 ቀናት (ተፈላጊ ደረጃ)</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-truck-ramp-box text-slate-400"></i> የቀን የጭነት ስምሪት፡</span>
                                        <span class="font-bold text-slate-800">480+ ከባድ ተሽከርካሪዎች</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-train text-slate-400"></i> የባቡር ስምሪት፡</span>
                                        <span class="font-semibold text-slate-800">በቀን 3 የጭነት ባቡሮች</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-5 pt-0">
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="modjo">
                                <span>የወደቡን መረጃ ይመልከቱ</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Corridor 3: Moyale – Lamu Corridor -->
                    <div class="group bg-white rounded-2xl border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
                        <div>
                            <div class="relative h-44 overflow-hidden bg-slate-900">
                                <img src="/images/corridor_moyale.jpg" alt="የሞያሌ የጋራ ድንበር ጣቢያ" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                                <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span class="px-2.5 py-1 rounded-md text-[11px] font-black bg-slate-900/85 text-white backdrop-blur-md uppercase tracking-wider border border-white/20 shadow-sm">
                                        ኮሪደር 03
                                    </span>
                                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary-600 text-white backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> አገልግሎት ላይ ነው
                                    </span>
                                </div>
                                <div class="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                                    <span class="text-[11px] font-semibold text-primary-300 flex items-center gap-1.5 drop-shadow">
                                        <i class="fa-solid fa-truck-moving text-[10px]"></i> የደቡብ ንግድ በር
                                    </span>
                                    <span class="text-[10px] text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                                        <i class="fa-solid fa-satellite-dish text-[9px] text-primary-400 mr-1"></i> ቀጥታ
                                    </span>
                                </div>
                            </div>

                            <div class="p-5">
                                <h3 class="font-bold text-slate-900 text-lg mb-0.5 group-hover:text-primary-600 transition-colors">
                                    ሞያሌ – ላሙ (ኬንያ ድንበር)
                                </h3>
                                <p class="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                                    <i class="fa-solid fa-location-dot text-primary-500"></i> የሞያሌ የተቀናጀ የድንበር ፍተሻ
                                </p>

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-regular fa-clock text-slate-400"></i> የትራንዚት ጊዜ፡</span>
                                        <span class="font-bold text-slate-800">55–60 ሰዓት</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-check-double text-slate-400"></i> የድንበር ክሊራንስ፡</span>
                                        <span class="font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded border border-primary-200">ፈጣን አሰራር</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-gas-pump text-slate-400"></i> የነዳጅና የቀንድ ከብት፡</span>
                                        <span class="font-semibold text-slate-800">የኳራንቲን ፍተሻ ክፍት</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-5 pt-0">
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="moyale">
                                <span>የድንበሩን መረጃ ይመልከቱ</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Corridor 4: Berbera Port Corridor -->
                    <div class="group bg-white rounded-2xl border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
                        <div>
                            <div class="relative h-44 overflow-hidden bg-slate-900">
                                <img src="/images/corridor_berbera.jpg" alt="የበርበራ – ድሬዳዋ የንግድ መስመር" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                                <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span class="px-2.5 py-1 rounded-md text-[11px] font-black bg-slate-900/85 text-white backdrop-blur-md uppercase tracking-wider border border-white/20 shadow-sm">
                                        ኮሪደር 04
                                    </span>
                                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-900 border border-white/20 text-white backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> የፍሰት ማስተካከያ
                                    </span>
                                </div>
                                <div class="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                                    <span class="text-[11px] font-semibold text-primary-300 flex items-center gap-1.5 drop-shadow">
                                        <i class="fa-solid fa-truck-fast text-[10px]"></i> የምስራቅ የባህር በር አማራጭ
                                    </span>
                                    <span class="text-[10px] text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                                        <i class="fa-solid fa-satellite-dish text-[9px] text-primary-400 mr-1"></i> ቀጥታ
                                    </span>
                                </div>
                            </div>

                            <div class="p-5">
                                <h3 class="font-bold text-slate-900 text-lg mb-0.5 group-hover:text-primary-600 transition-colors">
                                    በርበራ – ድሬዳዋ
                                </h3>
                                <p class="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                                    <i class="fa-solid fa-location-dot text-primary-500"></i> የቶግ ዋቻሌ የትራንዚት መተላለፊያ
                                </p>

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-regular fa-clock text-slate-400"></i> የትራንዚት ጊዜ፡</span>
                                        <span class="font-bold text-slate-800">30–36 ሰዓት</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-shield-halved text-slate-400"></i> የጉምሩክ ክሊራንስ፡</span>
                                        <span class="font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">አማካይ 5.5 ሰዓት</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-road text-slate-400"></i> የመንገድ ግንባታ፡</span>
                                        <span class="font-semibold text-slate-800">ምዕራፍ 2 አስፋልት ስራ</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-5 pt-0">
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="berbera">
                                <span>የኮሪደሩን መረጃ ይመልከቱ</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Emergency Corridor Hotline Banner -->
                <div class="mt-8 bg-primary-600 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl relative overflow-hidden">
                    <div class="flex items-center gap-4 text-center md:text-left relative z-10">
                        <div class="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center text-xl shrink-0 shadow-inner">
                            <i class="fa-solid fa-truck-ramp-box"></i>
                        </div>
                        <div>
                            <span class="font-bold text-base sm:text-lg block tracking-tight">የኢትራአፌ የ24/7 የኮሪደር ድንገተኛ አደጋና የመኪና ብልሽት የእርዳታ መስመር</span>
                            <p class="text-xs sm:text-sm text-blue-100 mt-0.5">በሞጆ፣ ገላፊ ወይም ሞያሌ መስመሮች ላይ ሕገወጥ መስተጓጎል፣ የጸጥታ ችግር ወይም የቴክኒክ ብልሽት ገጥሞዎታል?</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto justify-center">
                        <a href="tel:+251114717787" class="px-5 py-2.5 bg-white text-primary-700 hover:bg-slate-100 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-all">
                            <i class="fa-solid fa-phone"></i>
                            <span>+251 11 4717787</span>
                        </a>
                        <button id="btn-corridor-incident-report" class="px-4 py-2.5 bg-primary-700 hover:bg-primary-800 text-white border border-white/30 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2">
                            <i class="fa-solid fa-triangle-exclamation text-white"></i>
                            <span>የመንገድ ችግር ሪፖርት ያድርጉ</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- INSTITUTIONAL CHARTER, MISSION & VISION (Pure Amharic) -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100">
                        ሕጋዊ የፌዴሬሽኑ መተዳደሪያ ደንብ
                    </span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                        የኢትዮጵያ የትራንስፖርት አሠሪዎች ከፍተኛ ብሔራዊ ተቋም
                    </h2>
                    <p class="text-slate-600 text-sm mt-3 leading-relaxed">
                        በኅዳር 2009 ዓ/ም በ39 ማኅበራት ውሳኔ ተመስርቶ በኢፌዲሪ ሕገ-መንግሥት አንቀጽ 31 እና በአዋጅ ቁጥር 1156/2012 መሠረት ግንቦት 04 ቀን 2010 ዓ/ም ሕጋዊ የዕውቅና ምስክር ወረቀት ያገኘ ብሔራዊ ፌዴሬሽን።
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <!-- Strategic Mission Card -->
                    <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                        <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                            <i class="fa-solid fa-compass"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-2">ተልዕኳችን</h3>
                        <p class="text-primary-700 text-xs font-bold uppercase tracking-wider mb-3">
                            የትራንስፖርት አሠሪዎችን መብት ማስከበርና ዘላቂ ዕድገትን ማረጋገጥ
                        </p>
                        <p class="text-sm text-slate-600 leading-relaxed mb-6">
                            "የአባላት አሠሪዎችን ሕጋዊና ኢኮኖሚያዊ መብትና ጥቅም ማስጠበቅ፣ በዘርፉ አስተማማኝ የኢንዱስትሪ ሰላም መገንባት፣ የሕግና የሙያ ድጋፍ መስጠት እንዲሁም ለትራንስፖርት ፖሊሲዎች መሻሻል መሟገት።"
                        </p>
                        <ul class="space-y-2.5 text-xs text-slate-700">
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-primary-600"></i>
                                <span>የሕግ ከለላና የፍርድ ቤት ጠበቃ ውክልና መስጠት</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-primary-600"></i>
                                <span>የኅብረት ስምምነት ድርድርና የኢንዱስትሪ ሰላም ማረጋገጥ</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-primary-600"></i>
                                <span>ከመንግሥትና ዓለም አቀፍ ተቋማት ጋር የፖሊሲ ውይይት ማካሄድ</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Strategic Vision Card -->
                    <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                        <div class="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                            <i class="fa-solid fa-eye"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-2">ራዕያችን</h3>
                        <p class="text-sky-700 text-xs font-bold uppercase tracking-wider mb-3">
                            በኢትዮጵያ የትራንስፖርት ዘርፍ ጠንካራና ተደማጭ ተወካይ መሆን
                        </p>
                        <p class="text-sm text-slate-600 leading-relaxed mb-6">
                            "በኢትዮጵያ የትራንስፖርት ዘርፍ ጠንካራና ተደማጭ የሆኑ አሠሪዎችን በብሔራዊና በዓለም አቀፍ ደረጃ በብቃት የሚወክል ተቋም ሆኖ ማየት።"
                        </p>
                        <ul class="space-y-2.5 text-xs text-slate-700">
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-sky-600"></i>
                                <span>የ17 አሠሪ ማኅበራት ብቸኛ ሕጋዊ የጋራ ድምፅ</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-sky-600"></i>
                                <span>ዋነኛ መርህ፡ የአባላቱ ርካታ</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-sky-600"></i>
                                <span>ለሀገራዊ ኢኮኖሚና ማኅበራዊ ዕድገት ቁልፍ አስተዋጽዖ ማበርከት</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="text-center">
                    <a href="/about" class="inline-flex items-center gap-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all text-sm">
                        <span>ስለ ፌዴሬሽኑ በዝርዝር ያንብቡ</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>

        <!-- Commercial Sector Representation -->
        <section class="py-20 bg-white border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-14">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100">
                        የትራንስፖርት ዘርፍ ውክልና
                    </span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                        ሁሉን አቀፍ የትራንስፖርት ዘርፎች ሽፋን
                    </h2>
                    <p class="text-slate-600 text-sm mt-3">
                        ከከባድ የድንበር ተሻጋሪ የጭነት ኮንቮዮች አንስቶ እስከ ሀገር አቀፍ የሕዝብ ትራንስፖርትና የመልቲሞዳል ደረቅ ወደብ ሎጂስቲክስ ድረስ።
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Sector 1: Freight & Heavy Cargo -->
                    <div class="card-hover-fx bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
                        <div>
                            <div class="h-52 w-full overflow-hidden relative">
                                <img src="/images/hero_truck.jpg" alt="የከባድ ጭነት ትራንስፖርት" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <span class="absolute top-4 left-4 bg-primary-600/90 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                                    የከባድ ጭነት
                                </span>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-slate-900 mb-2">የደረቅና የፈሳሽ ከባድ ጭነት ትራንስፖርት</h3>
                                <p class="text-xs text-slate-600 leading-relaxed mb-4">
                                    በአዲስ አበባ–ጅቡቲ፣ ሞጆና በክልል ዋና የንግድ መስመሮች የሚንቀሳቀሱ የደረቅ ጭነትና የፈሳሽ ነዳጅ ጫኝ ማኅበራትን መብት ማስጠበቅ።
                                </p>
                                <div class="space-y-1.5 text-xs text-slate-700">
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>የትራንዚት ታሪፍና የክብደት ልኬት ማስተካከያ</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>የኮሪደር ደህንነትና የነዳጅ ማጓጓዣ ጥበቃ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-6 pt-0">
                            <a href="/about" class="text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1.5">
                                <span>የጭነት ዘርፉን ተግባር ይወቁ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Sector 2: Passenger Transit -->
                    <div class="card-hover-fx bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
                        <div>
                            <div class="h-52 w-full overflow-hidden relative">
                                <img src="/images/passenger_transit.jpg" alt="የሕዝብ ትራንስፖርት አውቶቡሶች" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <span class="absolute top-4 left-4 bg-primary-600/90 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                                    የሕዝብ ትራንስፖርት
                                </span>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-slate-900 mb-2">የከተማና የሀገር አቋራጭ ሕዝብ ትራንስፖርት</h3>
                                <p class="text-xs text-slate-600 leading-relaxed mb-4">
                                    በየዕለቱ ለሚሊዮኖች ፈጣንና አስተማማኝ አገልግሎት የሚሰጡ የክልልና የሀገር አቋራጭ አውቶቡስ አሠሪዎችን መወከልና መደገፍ።
                                </p>
                                <div class="space-y-1.5 text-xs text-slate-700">
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>የተርሚናል ደህንነትና የተሳፋሪ አገልግሎት ደንቦች</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>የመስመር ፈቃድ አሰጣጥና ቅንጅታዊ አሰራር</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-6 pt-0">
                            <a href="/about" class="text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1.5">
                                <span>የሕዝብ ትራንስፖርትን ተግባር ይወቁ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Sector 3: Multimodal Logistics -->
                    <div class="card-hover-fx bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
                        <div>
                            <div class="h-52 w-full overflow-hidden relative">
                                <img src="/images/about_vision.jpg" alt="የደረቅ ወደብ ጭነት ሎጂስቲክስ" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <span class="absolute top-4 left-4 bg-primary-600/90 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                                    መልቲሞዳል ማዕከላት
                                </span>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-slate-900 mb-2">የሎጂስቲክስና ደረቅ ወደብ ኦፕሬተሮች</h3>
                                <p class="text-xs text-slate-600 leading-relaxed mb-4">
                                    የዕቃ አስተላላፊዎችን፣ የመጋዘንና የደረቅ ወደብ ጭነት ተርሚናል ኦፕሬተሮችን እንዲሁም የዘመናዊ አቅርቦት ሰንሰለት ቴክኖሎጂዎችን ማስተባበር።
                                </p>
                                <div class="space-y-1.5 text-xs text-slate-700">
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>የሞጆ ደረቅ ወደብ የዕቃዎች ቆይታ ቅነሳ</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-check text-primary-600 text-[11px]"></i>
                                        <span>የዲጂታል ጉምሩክና የአፍሪካ ነፃ ንግድ ዝግጁነት</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-6 pt-0">
                            <a href="/about" class="text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1.5">
                                <span>የሎጂስቲክስ ዘርፉን ተግባር ይወቁ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6 Core Federation Services -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100">
                        ዋና ዋና አገልግሎቶች
                    </span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                        የትራንስፖርት አሠሪዎችን እንዴት እንደግፋለን?
                    </h2>
                    <p class="text-slate-600 text-sm mt-3">
                        የአባላትን ሕጋዊና ንግድ ጥቅሞች ለማስከበር በመተዳደሪያ ደንቡ መሰረት የተቋቋሙ ስድስት ቁልፍ ምሰሶዎች።
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-scale-balanced"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">የሕግ ከለላና የፍርድ ቤት ውክልና</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            የትራንስፖርት አሠሪዎችን በፍርድ ቤቶች፣ በአስተዳደራዊ አካላትና በግልግል ጉባኤዎች ፊት በመወከል የንግድ ሀብታቸውንና የውል መብታቸውን ማስከበር።
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-handshake-angle"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">የኅብረት ስምምነት ድርድር</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            ከሠራተኛ ማኅበራት ጋር በጋራ በመደራደር ፍትሃዊ፣ ሚዛናዊና ዘላቂ የሆነ የኢንዱስትሪ ሰላም በአዋጅ ቁጥር 1156/2012 መሠረት መገንባት።
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-scroll"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">የፖሊሲና መመሪያዎች ማሻሻያ</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            በዘርፉ ላይ በጥናት የተደገፉ የውሳኔ ሃሳቦችን በማዘጋጀት ከመንግሥት አስፈፃሚ አካላት ጋር በታሪፍ፣ ታክስና ፍተሻ ጣቢያዎች ዙሪያ መወያየት።
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-user-graduate"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">የሙያና አመራር አቅም ግንባታ</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            ለአባላትና አመራሮች የተሽከርካሪ ስምሪት አስተዳደር፣ አዳዲስ ቴክኖሎጂዎችና የሥራ ቦታ ደህንነት ዙሪያ ተግባራዊ ስልጠናዎችን መስጠት።
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-network-wired"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">የገበያና የጭነት ትስስር ማመቻቸት</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            የአባላትን ተሽከርካሪዎች ከሀገር ውስጥና ከድንበር ተሻጋሪ የንግድ ዕድሎች፣ ከኢንዱስትሪ ፓርኮችና ከወጪ ንግድ ዘርፎች ጋር ማስተሳሰር።
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-globe"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">ዓውደ ርዕዮችና ዓለም አቀፍ ሲምፖዚየሞች</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            ሀገራዊ የትራንስፖርት ኤክስፖዎችን፣ የተሽከርካሪ ቴክኖሎጂ ትርዒቶችንና የሦስትዮሽ የዘርፍ ውይይት መድረኮችን በበላይነት ማዘጋጀት።
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section (Clean White / Light Brand Card) -->
        <section class="py-20 bg-white border-t border-slate-200 text-slate-900 relative">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <span class="text-xs font-bold text-primary-700 uppercase tracking-wider bg-primary-50 px-4 py-1.5 rounded-full border border-primary-200 inline-block mb-4">
                    የከፍተኛው ብሔራዊ ድምፅ አባል ይሁኑ
                </span>
                <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
                    የትራንስፖርት ድርጅትዎን አቅም ለማጠናከር ዝግጁ ነዎት?
                </h2>
                <p class="text-slate-600 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                    ከ17 አሠሪ ማኅበራትና ከ6,652 በላይ የትራንስፖርት ባለቤቶች ጋር ይቀላቀሉ። የሕግ ጥበቃ፣ የውል ድርድርና ተደማጭ የጋራ ድምፅ ባለቤት ይሁኑ።
                </p>
                <div class="flex flex-wrap items-center justify-center gap-4">
                    <a href="/membership" class="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all">
                        የአባልነት ማመልከቻ ያስገቡ
                    </a>
                    <a href="/contact" class="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm shadow-sm transition-all">
                        ዋና መሥሪያ ቤቱን ያነጋግሩ
                    </a>
                </div>
            </div>
        </section>
    </main>

    ${Je("አማ")}
`,i0={title:{ENG:"Ethiopian Transport Employers Federation - Official National Platform",አማ:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን - ይፋዊ ብሔራዊ መድረክ"},markup:{ENG:Ev,አማ:Sv}},Tv=`
    ${$e("/about","ENG")}

    <main class="flex-grow">
        <div class="bg-primary-600 text-white pt-10 pb-16 relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">About Us</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div class="max-w-3xl">
                        <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/15 border border-white/25 rounded-full text-xs font-semibold text-white uppercase tracking-widest mb-4">
                            <i class="fa-solid fa-scale-balanced text-white"></i> FDRE Constitution Art. 31 • Proclamation No. 1156/2012
                        </div>
                        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                            Ethiopian Transport Employers' Federation
                        </h1>
                        <p class="mt-4 text-base sm:text-lg text-blue-100 leading-relaxed">
                            Established on May 12, 2018 (Ginbot 4, 2010 E.C.) by 17 employers' associations comprising over 6,652 members. Dedicated to industrial peace, legal advocacy, and operational efficiency across Ethiopia's transport sector.
                        </p>
                    </div>
                    <div class="flex flex-wrap items-center gap-3 shrink-0">
                        <a href="#services-section" class="px-5 py-2.5 bg-white text-primary-700 hover:bg-slate-100 rounded-xl text-sm font-bold transition-all shadow-md flex items-center gap-2">
                            <i class="fa-solid fa-handshake-angle text-xs"></i> Federation Services
                        </a>
                        <a href="#leadership-section" class="px-5 py-2.5 bg-primary-700 hover:bg-primary-800 text-white border border-white/30 rounded-xl text-sm font-semibold transition-all flex items-center gap-2">
                            <i class="fa-solid fa-users text-xs"></i> Board of Directors (13)
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <section class="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">6,652+</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Foundation Members</div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-sitemap"></i>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">17</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Employers' Associations</div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-truck-moving"></i>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">39</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Founding Cargo Union</div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-certificate"></i>
                    </div>
                    <div>
                        <div class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">May 12, 2018</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Ginbot 4, 2010 E.C. Certified</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16 md:py-24 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col lg:flex-row gap-14 items-center">
                    <div class="lg:w-1/2">
                        <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-3 block">HISTORICAL BACKGROUND & LEGAL FOUNDATION</span>
                        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 leading-snug">
                            The Foundation and Institutional Evolution of ETEF
                        </h2>
                        
                        <div class="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
                            <p>
                                <strong>Background:</strong> Recognizing the need to move beyond operating individually, transporters initiated efforts to establish an organization by forming an organizing committee in 1993 E.C. Through their sustained efforts to secure government recognition, identify operational bottlenecks, and ensure their voices were heard, 39 associations founded the "Dry Cargo Associations Union" in Hidar 2009 E.C. (November 2016).
                            </p>
                            <p>
                                <strong>Establishment:</strong> The Ethiopian Transport Employers' Federation was formally established by uniting 17 employers' associations—representing over 6,652 individual members—under the constitutional right to organize enshrined in Article 31 of the FDRE Constitution, the Labor Proclamation No. 1156/2012, and international conventions ratified by Ethiopia pursuant to Article 9, Sub-article 9.4.
                            </p>
                            <p>
                                On May 12, 2018 (Ginbot 4, 2010 E.C.), the Federation received its official certificate of legal recognition from the former Ministry of Labor and Social Affairs, solidifying its role as the national employer voice.
                            </p>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-slate-100">
                            <div class="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                                <i class="fa-solid fa-circle-check text-primary-600 text-base"></i>
                                <span>FDRE Constitution Article 31</span>
                            </div>
                            <div class="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                                <i class="fa-solid fa-circle-check text-primary-600 text-base"></i>
                                <span>Labor Proclamation No. 1156/2012</span>
                            </div>
                            <div class="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                                <i class="fa-solid fa-circle-check text-primary-600 text-base"></i>
                                <span>Constitution Article 9, Sub-art. 9.4</span>
                            </div>
                            <div class="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                                <i class="fa-solid fa-circle-check text-primary-600 text-base"></i>
                                <span>Official Legal Recognition May 12, 2018</span>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/2 w-full">
                        <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-900">
                            <img src="/images/about_vision.jpg" alt="Commercial Transport Fleets in Ethiopia" class="w-full h-[420px] object-cover opacity-90 hover:scale-105 transition-transform duration-700">
                            
                            <div class="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-xs font-semibold flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-primary-400"></span>
                                <span>Certified Legal Employer Federation</span>
                            </div>

                            <div class="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-200">
                                <div class="flex items-start gap-3">
                                    <img src="/images/etef_logo.png" alt="ETEF Emblem" class="w-10 h-10 object-contain rounded-full bg-white p-0.5 shadow-sm shrink-0 border border-slate-200" />
                                    <div>
                                        <p class="text-xs sm:text-sm text-slate-800 italic leading-snug font-medium">
                                            "Beyond advocating for the rights and interests of our members, ETEF strives to leave a lasting mark and play a significant role in Ethiopia’s economic, social, political, and historical development."
                                        </p>
                                        <div class="mt-2 text-xs font-bold text-primary-700">
                                            — Ato Berehane Zeru, President of ETEF Board of Directors
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16 bg-primary-600 text-white relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center max-w-3xl mx-auto mb-12">
                    <span class="text-blue-200 font-bold tracking-wider text-xs uppercase mb-2 block">OFFICIAL CHARTER MANDATE</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Vision, Mission & Strategic Goal</h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white text-slate-900 p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="h-14 w-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fa-solid fa-eye text-2xl"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-bold mb-3 text-slate-900">Our Vision</h3>
                            <p class="text-slate-600 leading-relaxed text-sm">
                                "To become a strong and influential representative within Ethiopia’s transport sector."
                            </p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-100 text-xs text-primary-600 font-semibold flex items-center gap-2">
                            <i class="fa-solid fa-check"></i> Influential Sector Voice
                        </div>
                    </div>

                    <div class="bg-white text-slate-900 p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="h-14 w-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fa-solid fa-bullseye text-2xl"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-bold mb-3 text-slate-900">Our Mission</h3>
                            <p class="text-slate-600 leading-relaxed text-sm">
                                "To ensure industrial peace and the effectiveness and efficiency of operations, the Ethiopian Transport Employers' Federation works to safeguard the legal, economic, and other rights of its members."
                            </p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-100 text-xs text-primary-600 font-semibold flex items-center gap-2">
                            <i class="fa-solid fa-check-double"></i> Industrial Peace & Member Rights
                        </div>
                    </div>

                    <div class="bg-white text-slate-900 p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="h-14 w-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fa-solid fa-flag-checkered text-2xl"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-bold mb-3 text-slate-900">Our Goal</h3>
                            <p class="text-slate-600 leading-relaxed text-sm">
                                "Beyond advocating for the rights and interests of its members, to leave a lasting mark and play a significant role in the country’s economic, social, political, and historical development."
                            </p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-100 text-xs text-primary-600 font-semibold flex items-center gap-2">
                            <i class="fa-solid fa-trophy"></i> National Impact & Historical Legacy
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-slate-50 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">FEDERATION VALUES</span>
                    <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Institutional Values & Ethics</h2>
                    <p class="text-base sm:text-lg text-slate-600">
                        The Federation's primary value is <strong>Member Satisfaction</strong>, supported by six core institutional values:
                    </p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-handshake"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Integrity</h4>
                        <span class="text-xs text-slate-500 mt-1 block">Ethical Transparency</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Respect</h4>
                        <span class="text-xs text-slate-500 mt-1 block">Mutual Regard</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Diligence</h4>
                        <span class="text-xs text-slate-500 mt-1 block">Commitment to Service</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-shield-halved"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Loyalty</h4>
                        <span class="text-xs text-slate-500 mt-1 block">Fidelity to Members</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-people-group"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Teamwork</h4>
                        <span class="text-xs text-slate-500 mt-1 block">Cohesive Action</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-dove"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Industrial Peace</h4>
                        <span class="text-xs text-slate-500 mt-1 block">Harmonious Growth</span>
                    </div>
                </div>
            </div>
        </section>

        <section id="services-section" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-14">
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 border border-primary-200 rounded-full text-xs font-bold text-primary-700 uppercase tracking-wider mb-3">
                        <i class="fa-solid fa-briefcase"></i> Core Mandates & Member Services
                    </div>
                    <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Federation Services & Portfolios
                    </h2>
                    <p class="text-base sm:text-lg text-slate-600">
                        Providing comprehensive services to member operators regarding court representation, collective bargaining, capacity building, and market networking.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-blue-100 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-gavel"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-600 uppercase tracking-wider">Advocacy & Defense</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">Legal Representation & Court Advocacy</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Represents employers before judicial courts and administrative tribunals</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Provides comprehensive legal assistance regarding matters that may lead to disputes</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Strives to prevent conflicts and ensure their prompt resolution within the industry</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Provides expert counsel on taxation, customs assessments, and commercial liabilities</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            Court Representation & Legal Support Desk
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-handshake"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-600 uppercase tracking-wider">Industrial Relations</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">Collective Bargaining & Social Dialogue</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Deals effectively with industrial relations through collective bargaining and social dialogue</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Prepares agreements and negotiates on behalf of the employer during collective bargaining</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Organizes and coordinates bilateral and tripartite consultative forums</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Compiles and drafts memoranda of association and statutory governance charters</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            Bipartite & Tripartite Social Dialogue
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-file-signature"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-700 uppercase tracking-wider">Regulatory Reform</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">Policy Input & Law Enactment</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Participates actively in drafting national policies, proclamations, and transport directives</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Provides input on legislative amendments to protect employers' constitutional rights</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Generates proposals for the revision of labor proclamations and carrier liabilities</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Supports transport operators in exercising their lawful freedom of association</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            National Policy & Proclamation Review
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-chalkboard-user"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-700 uppercase tracking-wider">Workforce Development</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">Professional Capacity Building</h3>
                            <p class="text-xs text-slate-500 mb-3">Renders professional development trainings on:</p>
                            <div class="grid grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ Management</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ Leadership</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ Labor Law</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ Good Governance</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ Kaizen / Productivity</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ Competitive Advantage</span>
                            </div>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            Continuous Professional Education
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-network-wired"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-700 uppercase tracking-wider">Enterprise Growth</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">Market Networking & Commercial Contracts</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Promotes market networking and inter-carrier freight exchanges</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Facilitates commercial contracts between members and partner organizations</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Assists operators in business planning and sector competitive advantage</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            Commercial Contract Facilitation
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-globe"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-700 uppercase tracking-wider">Global Linkages</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">Exhibitions & Experience Sharing</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Organizes trade exhibitions, symposiums, and transport conventions</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Conducts domestic and international experience-sharing programs</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>Advocates for occupational health, safety, and conducive working conditions</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            National & Global Industry Linkages
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="leadership-section" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">OFFICIAL ETEF GOVERNANCE</span>
                    <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                        Executive Board of Directors
                    </h2>
                    <p class="text-base sm:text-lg text-slate-600">
                        Elected industry principals guiding the strategic vision and safeguarding the rights of Ethiopia's transport employers.
                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_president_dr_dawit.jpg" alt="Ato Berehane Zeru" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider">President</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Berehane Zeru</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                President of the Board of Directors. Leading executive governance and national policy advocacy.
                            </p>
                            <button type="button" data-bio="berehane" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_vp_tigist.jpg" alt="Ato Mesele Hagos" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-sky-600 rounded-full text-[11px] font-bold uppercase tracking-wider">Vice President</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Mesele Hagos</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Vice President of the Board of Directors. Directing collective bargaining and operational efficiency.
                            </p>
                            <button type="button" data-bio="mesele" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_sec_yared.jpg" alt="Ato Derje Legesse" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider">Secretary</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Derje Legesse</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Secretary of the Board of Directors. Managing institutional governance, statutory filings, and legal records.
                            </p>
                            <button type="button" data-bio="derje" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_logistics_selamawit.jpg" alt="Ato Dejene Luchie" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Dejene Luchie</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member representing dry cargo freight carriers and regional operator associations.
                            </p>
                            <button type="button" data-bio="dejene" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_regional_bereket.jpg" alt="Ato Seid Ibrahim" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Seid Ibrahim</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member advocating for corridor route security, fair tariffs, and carrier rights.
                            </p>
                            <button type="button" data-bio="seid" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_policy_helen.jpg" alt="Ato Mekonnen Workie" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Mekonnen Workie</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member spearheading enterprise business planning and market networking programs.
                            </p>
                            <button type="button" data-bio="mekonnen" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_president_dr_dawit.jpg" alt="Ato Yergalem Sefani" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Yergalem Sefani</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member leading legal dispute advisory and court representation coordination.
                            </p>
                            <button type="button" data-bio="yergalem" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_vp_tigist.jpg" alt="Ato Msfin Eshetu" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Msfin Eshetu</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member focusing on occupational safety, roadworthiness, and labor law compliance.
                            </p>
                            <button type="button" data-bio="msfin" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_sec_yared.jpg" alt="Ato Tadsse Ejegu" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Tadsse Ejegu</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member providing expert input on transport proclamations, directives, and operator rights.
                            </p>
                            <button type="button" data-bio="tadsse" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_logistics_selamawit.jpg" alt="Ato Mohammed Hassan" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Mohammed Hassan</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member coordinating regional association relations, bilateral forums, and member consultations.
                            </p>
                            <button type="button" data-bio="mohammed" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_regional_bereket.jpg" alt="Ato Nurdin Ditamo" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Nurdin Ditamo</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member promoting fleet technology adoption, Kaizen productivity methods, and tax counseling.
                            </p>
                            <button type="button" data-bio="nurdin" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_policy_helen.jpg" alt="Ato Abeba Kassa" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Abeba Kassa</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member supporting commercial partnerships, trade exhibitions, and collective agreement documentation.
                            </p>
                            <button type="button" data-bio="abeba" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_president_dr_dawit.jpg" alt="Ato Engeda H/Maryam" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">Board Member</span>
                                <h3 class="text-xl font-bold text-white mt-1">Ato Engeda H/Maryam</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                Board Member organizing experience-sharing programs, technological adoption, and fleet modernization.
                            </p>
                            <button type="button" data-bio="engeda" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>Read Full Biography</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">OFFICIAL RECORDS & PROCLAMATIONS</span>
                        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Statutory Documents & Publications</h2>
                        <p class="text-sm sm:text-base text-slate-600 mt-2">Access the legal constitution, labor proclamation reference, and collective bargaining guidelines.</p>
                    </div>
                    <a href="/contact" class="text-sm font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1.5 shrink-0">
                        Request Official Records <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-blue-100 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                                <i class="fa-solid fa-book-bookmark"></i>
                            </div>
                            <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider block">Bylaws & Constitution</span>
                            <h4 class="text-base font-bold text-slate-900 mt-1 mb-2">ETEF Constitution & Establishment Charter</h4>
                            <p class="text-xs text-slate-500 leading-relaxed">Official constitution established under FDRE Constitution Art. 31 and Labor Proclamation 1156/2012.</p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                            <span class="text-xs text-slate-400 font-semibold">PDF • 4.2 MB</span>
                            <button type="button" class="doc-download-btn text-xs font-bold text-primary-600 hover:text-primary-800 flex items-center gap-1 cursor-pointer bg-transparent border-none p-0" data-doc="ETEF Constitution & Establishment Charter (PDF)">
                                Download <i class="fa-solid fa-download text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                                <i class="fa-solid fa-certificate"></i>
                            </div>
                            <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider block">Legal Recognition</span>
                            <h4 class="text-base font-bold text-slate-900 mt-1 mb-2">Ministry Certificate of Recognition (Ginbot 4, 2010 E.C.)</h4>
                            <p class="text-xs text-slate-500 leading-relaxed">Official certificate of registration from the former Ministry of Labor and Social Affairs.</p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                            <span class="text-xs text-slate-400 font-semibold">PDF • 2.1 MB</span>
                            <button type="button" class="doc-download-btn text-xs font-bold text-primary-600 hover:text-primary-800 flex items-center gap-1 cursor-pointer bg-transparent border-none p-0" data-doc="Ministry Certificate of Recognition Ginbot 4, 2010 E.C. (PDF)">
                                Download <i class="fa-solid fa-download text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                                <i class="fa-solid fa-scale-balanced"></i>
                            </div>
                            <span class="text-[11px] font-bold text-primary-700 uppercase tracking-wider block">Labor Proclamation</span>
                            <h4 class="text-base font-bold text-slate-900 mt-1 mb-2">Labor Proclamation No. 1156/2012 Handbook</h4>
                            <p class="text-xs text-slate-500 leading-relaxed">Employers' rights, collective bargaining protocols, and industrial relations provisions.</p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                            <span class="text-xs text-slate-400 font-semibold">PDF • 3.5 MB</span>
                            <button type="button" class="doc-download-btn text-xs font-bold text-primary-600 hover:text-primary-800 flex items-center gap-1 cursor-pointer bg-transparent border-none p-0" data-doc="Labor Proclamation No. 1156/2012 Handbook (PDF)">
                                Download <i class="fa-solid fa-download text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                                <i class="fa-solid fa-handshake-simple"></i>
                            </div>
                            <span class="text-[11px] font-bold text-primary-700 uppercase tracking-wider block">Collective Agreements</span>
                            <h4 class="text-base font-bold text-slate-900 mt-1 mb-2">Standard Collective Bargaining Guide</h4>
                            <p class="text-xs text-slate-500 leading-relaxed">Model collective bargaining agreements, tripartite dialogue guidelines, and dispute prevention rules.</p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                            <span class="text-xs text-slate-400 font-semibold">PDF • 2.8 MB</span>
                            <button type="button" class="doc-download-btn text-xs font-bold text-primary-600 hover:text-primary-800 flex items-center gap-1 cursor-pointer bg-transparent border-none p-0" data-doc="Standard Collective Bargaining Guide (PDF)">
                                Download <i class="fa-solid fa-download text-[10px]"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16 bg-primary-600 text-white relative overflow-hidden">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <span class="text-blue-200 font-bold tracking-wider text-xs uppercase mb-3 block">JOIN ETEF</span>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">Partner with the Federation Today</h2>
                <p class="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                    Enhance your transport services and productivity by entrusting your challenges and concerns to the Ethiopian Transport Employers' Federation.
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a href="/membership" class="inline-flex justify-center items-center px-8 py-3.5 bg-white text-primary-700 rounded-xl text-sm font-bold hover:bg-slate-100 transition-colors shadow-md">
                        Become a Member
                    </a>
                    <a href="/contact" class="inline-flex justify-center items-center px-8 py-3.5 bg-primary-700 border border-white/30 text-white rounded-xl text-sm font-semibold hover:bg-primary-800 transition-colors shadow-sm">
                        Contact the Secretariat
                    </a>
                </div>
            </div>
        </section>
    </main>

    ${Je("ENG")}
`,Av=`
    ${$e("/about","አማ")}

    <main class="flex-grow">
        <div class="bg-primary-600 text-white pt-10 pb-16 relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">ስለ እኛ</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div class="max-w-3xl">
                        <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/15 border border-white/25 rounded-full text-xs font-semibold text-white uppercase tracking-widest mb-4">
                            <i class="fa-solid fa-scale-balanced text-white"></i> በኢ.ፌ.ዲ.ሪ. ሕገ መንግሥት አንቀጽ 31 • አዋጅ ቁጥር 1156/2012
                        </div>
                        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                            የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን
                        </h1>
                        <p class="mt-4 text-base sm:text-lg text-blue-100 leading-relaxed">
                            በስሩ ከ6,652 በላይ አባላት ያሏቸውን 17 የአሠሪ ማኅበራትን በማቀፍ ግንቦት 04 ቀን 2010 ዓ/ም የተመሠረተ። የኢንዱስትሪውን ሰላም ለማስፈን፣ የአሠሪዎችን መብት ለማስከበርና ዘርፉን ለማዘመን የሚሰራ ብሔራዊ ተቋም።
                        </p>
                    </div>
                    <div class="flex flex-wrap items-center gap-3 shrink-0">
                        <a href="#services-section" class="px-5 py-2.5 bg-white text-primary-700 hover:bg-slate-100 rounded-xl text-sm font-bold transition-all shadow-md flex items-center gap-2">
                            <i class="fa-solid fa-handshake-angle text-xs"></i> የፌዴሬሽኑ አገልግሎቶች
                        </a>
                        <a href="#leadership-section" class="px-5 py-2.5 bg-primary-700 hover:bg-primary-800 text-white border border-white/30 rounded-xl text-sm font-semibold transition-all flex items-center gap-2">
                            <i class="fa-solid fa-users text-xs"></i> የሥራ አስፈጻሚ ቦርድ (13)
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <section class="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">6,652+</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">የፌዴሬሽኑ አባላት</div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-sitemap"></i>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">17</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">የአሠሪ ማኅበራት</div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-truck-moving"></i>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">39</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">የደረቅ ጭነት ኀብረት ማኅበራት</div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-certificate"></i>
                    </div>
                    <div>
                        <div class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">ግንቦት 04/2010</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">ሕጋዊ የዕውቅና ምስክር</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16 md:py-24 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col lg:flex-row gap-14 items-center">
                    <div class="lg:w-1/2">
                        <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-3 block">የፌዴሬሽኑ ታሪክ እና ሕጋዊ መሠረት</span>
                        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 leading-snug">
                            ቅድመ ታሪክ እና የፌዴሬሽኑ ምሥረታ
                        </h2>
                        
                        <div class="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
                            <p>
                                <strong>ቅድመ ታሪክ፦</strong> ትራንስፖርተሩ በተናጠል ከመንቀሳቀስ ይልቅ አስፈላጊነት በማመን ድርጅት የመመስረት ጥረቱን አደራጅ ኮሚቴ በማቋቋም በ1993 ዓ.ም. ጀመረ። 39 ማኅበራት በመንግሥት እውቅና እንዲያገኙ፣ ችግሮቻቸው ተለይተው እንዲታወቁና ድምፃቸው እንዲሰማ በመንቀሳቀስ «የደረቅ ጭነት ማኅበራት ኀብረት»ን በኅዳር ወር 2009 ዓ/ም መሠረቱ።
                            </p>
                            <p>
                                <strong>ምሥረታ፦</strong> የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን፣ በኢ.ፌ.ዲ.ሪ. ሕገ መንግሥት አንቀጽ 31 የመደራጀት መብት መሠረት፤ በአሠሪና ሠራተኛ ዐዋጅ ቁጥር 1156/2012 የአሠሪና ሠራተኛ ጉዳይ አዋጅ፤ ኢትዮጵያ በሕገ መንግሥቱ አንቀጽ 9 ንዑስ አንቀጽ 9.4 መሠረት የሕገ መንግሥቷ አካል በማድረግ ዕውቅና ሰጥታ በተቀበለቻቸውና ባጸደቀቻቸው ዓለም አቀፍ ኮንቬንሽኖች እና ሬኮማንዴሽኖች መሠረት በስሩ 6,652 በላይ አባላት ያሏቸውን 17 የአሠሪ ማኅበራትን በማቀፍ ተመስርቷል።
                            </p>
                            <p>
                                ፌዴሬሽኑ ከቀድሞው የሠራተኛ እና ማኅበራዊ ጉዳይ ሚኒስቴር ሕጋዊ የምሥክር ግንቦት 04 ቀን 2010 ዓ/ም የእውቅና ምስክር ወረቀት ተቀብሏል።
                            </p>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-slate-100">
                            <div class="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                                <i class="fa-solid fa-circle-check text-primary-600 text-base"></i>
                                <span>በኢ.ፌ.ዲ.ሪ. ሕገ መንግሥት አንቀጽ 31</span>
                            </div>
                            <div class="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                                <i class="fa-solid fa-circle-check text-primary-600 text-base"></i>
                                <span>በአሠሪና ሠራተኛ ዐዋጅ ቁጥር 1156/2012</span>
                            </div>
                            <div class="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                                <i class="fa-solid fa-circle-check text-primary-600 text-base"></i>
                                <span>ሕገ መንግሥቱ አንቀጽ 9 ንዑስ አንቀጽ 9.4</span>
                            </div>
                            <div class="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                                <i class="fa-solid fa-circle-check text-primary-600 text-base"></i>
                                <span>ግንቦት 04 ቀን 2010 ዓ/ም ሕጋዊ ምዝገባ</span>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/2 w-full">
                        <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-900">
                            <img src="/images/about_vision.jpg" alt="የኢትዮጵያ የጭነት ትራንስፖርት" class="w-full h-[420px] object-cover opacity-90 hover:scale-105 transition-transform duration-700">
                            
                            <div class="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-xs font-semibold flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-primary-400"></span>
                                <span>ሕጋዊ ዕውቅና ያለው የአሠሪዎች ፌዴሬሽን</span>
                            </div>

                            <div class="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-200">
                                <div class="flex items-start gap-3">
                                    <img src="/images/etef_logo.png" alt="የኢትራአፌ አርማ" class="w-10 h-10 object-contain rounded-full bg-white p-0.5 shadow-sm shrink-0 border border-slate-200" />
                                    <div>
                                        <p class="text-xs sm:text-sm text-slate-800 italic leading-snug font-medium">
                                            "በኢትዮጵያ ትራንስፖርት ዘርፍ የተሰማሩ አባላቱን መብት እና ጥቅም ከማስከበር እና ድምፃቸውን ከማሰማት ባለፈ በሃገራችን ምጣኔ-ሃብታዊ፣ ማህበራዊ፣ ፖለቲካዊ እና ታሪካዊ እድገት ላይ የራሱን አሻራ ማሳረፍ እና ጉልህ ሚናን መጫወት ዋነኛ ግባችን ነው።"
                                        </p>
                                        <div class="mt-2 text-xs font-bold text-primary-700">
                                            — አቶ ብርሃኔ ዘርዑ፣ የቦርድ ፕሬዚዳንት
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16 bg-primary-600 text-white relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center max-w-3xl mx-auto mb-12">
                    <span class="text-blue-200 font-bold tracking-wider text-xs uppercase mb-2 block">ይፋዊ የፌዴሬሽኑ ዓላማ</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">ራዕይ፣ ተልዕኮ እና ግብ</h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white text-slate-900 p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="h-14 w-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fa-solid fa-eye text-2xl"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-bold mb-3 text-slate-900">ራዕይ</h3>
                            <p class="text-slate-600 leading-relaxed text-sm">
                                "በኢትዮጵያ የትራንስፖርት ዘርፍ ጠንካራ እና ተደማጭ ወኪል ሆኖ ማየት።"
                            </p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-100 text-xs text-primary-600 font-semibold flex items-center gap-2">
                            <i class="fa-solid fa-check"></i> ጠንካራና ተደማጭ ወኪል
                        </div>
                    </div>

                    <div class="bg-white text-slate-900 p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="h-14 w-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fa-solid fa-bullseye text-2xl"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-bold mb-3 text-slate-900">ተልዕኮ</h3>
                            <p class="text-slate-600 leading-relaxed text-sm">
                                "የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን የአባላቱን ሕጋዊ፣ ምጣኔ-ሃብታዊ እና ሌሎችንም መብቶቻቸውን ለማስከበር ሥራቸውም ውጤታማና ቀልጣፋ እንዲሆን በተለያየ ዘርፎች የአቅም ማጎልበቻ ስልጠናዎችን እና ትምህርቶችን እንዲሁም የሕግ ድጋፍ እና ምክር አገልግሎት በመስጠት ራሱን እና አባላቱን አልፎም ዘርፉን ዘመኑ ባፈራቸው የቴክኖሎጂ ውጤቶች በማደራጀት እና ከዓለም አቀፍ እና ሃገር አቀፍ ከማህበራዊ አጋሮች ጋር በትብብር በመስራት የኢንዱስትሪው ሰላም እንዲረጋገጥ መስራት፡፡"
                            </p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-100 text-xs text-primary-600 font-semibold flex items-center gap-2">
                            <i class="fa-solid fa-check-double"></i> የኢንዱስትሪ ሰላም እና የአባላት መብት
                        </div>
                    </div>

                    <div class="bg-white text-slate-900 p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="h-14 w-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fa-solid fa-flag-checkered text-2xl"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-bold mb-3 text-slate-900">ግብ</h3>
                            <p class="text-slate-600 leading-relaxed text-sm">
                                "በኢትዮጵያ ትራንስፖርት ዘርፍ የተሰማሩ አባላቱን መብት እና ጥቅም ከማስከበር እና ድምፃቸውን ከማሰማት ባለፈ በሃገራችን ምጣኔ-ሃብታዊ፣ ማህበራዊ፣ ፖለቲካዊ እና ታሪካዊ እድገት ላይ የራሱን አሻራ ማሳረፍ እና ጉልህ ሚናን መጫወት፡፡"
                            </p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-100 text-xs text-primary-600 font-semibold flex items-center gap-2">
                            <i class="fa-solid fa-trophy"></i> ታሪካዊ እድገትና አሻራ
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-slate-50 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">የፌዴሬሽኑ እሴቶች</span>
                    <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">መሪና ዋነኛ እሴቶቻችን</h2>
                    <p class="text-base sm:text-lg text-slate-600">
                        የፌዴሬሽኑ መሪ እሴት <strong>የአባላቱ ርካታ</strong> ሲሆን ዋነኛ እሴቶቹ የሚከተሉት ናቸው፦
                    </p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-handshake"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">ታማኝነት</h4>
                        <span class="text-xs text-slate-500 mt-1 block">ግልጽነትና ፍትሃዊነት</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">ክብር</h4>
                        <span class="text-xs text-slate-500 mt-1 block">የጋራ አክብሮት</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">ትጋት</h4>
                        <span class="text-xs text-slate-500 mt-1 block">ተግቶ ማገልገል</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-shield-halved"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">ታማኝነት</h4>
                        <span class="text-xs text-slate-500 mt-1 block">ለአባላት ታማኝ መሆን</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-people-group"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">የቡድን ስራ</h4>
                        <span class="text-xs text-slate-500 mt-1 block">የተቀናጀ ጥረት</span>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-dove"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">የኢንዱስትሪ ሰላም</h4>
                        <span class="text-xs text-slate-500 mt-1 block">ለሰላም መትጋት</span>
                    </div>
                </div>
            </div>
        </section>

        <section id="services-section" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-14">
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 border border-primary-200 rounded-full text-xs font-bold text-primary-700 uppercase tracking-wider mb-3">
                        <i class="fa-solid fa-briefcase"></i> ይፋዊ አገልግሎቶች
                    </div>
                    <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                        የፌዴሬሽኑ አገልግሎቶች
                    </h2>
                    <p class="text-base sm:text-lg text-slate-600">
                        ፌዴሬሽኑ ለአባላቱ ሕግና ለሌሎች ሕግ ነክ ጉዳዮች፣ የጋራ ድርድር፣ የአቅም ግንባታ እና የገበያ ትስስር አጠቃላይ አገልግሎት ይሰጣል፦
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-blue-100 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-gavel"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-600 uppercase tracking-wider">የውትወታና መሟገት</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">የፍርድ ቤት ውክልና እና የሕግ ድጋፍ</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>በፍርድ ቤት አሠሪዎችን ይወክላል</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>ለክርክር ምክንያት በሚሆን ጉዳይ ላይ ሙሉ አገልግሎት መስጠት</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>ግጭቶች እንዳይፈጠሩ ጥረት ማድረግ፥ በተፈጠሩ ጊዜም ኢንዱስትሪው ውስጥ እንዲፈቱ ማድረግ</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>ለአባላት በግብር ታክስና በሌሎች ተዛማጅ ጉዳዮች ላይ ምክር መስጠት</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            የፍርድ ቤት ክርክርና የሕግ ምክር
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-handshake"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-600 uppercase tracking-wider">የኢንዱስትሪ ሰላም</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">የጋራ ድርድር እና ማህበራዊ ውይይት</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>በጋራ ድርድር እና ማህበራዊ ውይይት አማካኝነት የኢንዱስትሪ ግንኙነቶችን መምራት</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>በሕብረት ድርድር ወቅት ሰነዶችን ማዘጋጀት፥ አሠሪውን ወክሎ መደራደር ወይም ማማከር</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>የሁለትዮሽና ሦስትዮሽ መድረኮች በማዘጋጀት፣ መሳተፍ እና ማስተባበር</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>የሰነዶች ዝግጅት (መመስረቻ፣ ሕብረት ስምምነት... ወዘተ) ማጠናቀቅ</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            የሁለትዮሽና ሦስትዮሽ መድረኮች
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-file-signature"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-700 uppercase tracking-wider">የሕግ ማሻሻያ</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">ፖሊሲዎች እና ሕጎች ማሻሻያ</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>ብሔራዊ ፖሊሲዎችን፣ ሕጎችን፣ መመሪያዎችን በማርቀቅ ሂደት ላይ መሳተፍ</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>አዋጆችና ደንቦች ሲወጡ የአሠሪውን መብትና ጥቅም የሚያስጠብቁ እንዲሆኑ አስተያየት መስጠት</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>የአሠሪና ሠራተኛ ሕግ እንዲወጣና እንዲሻሻል ሀሳብ ማመንጨት፥ ማሻሻያ ማቅረብ</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>የትራንስፖርት ዘርፍ አሠሪዎች የመደራጀት መብታቸውን እንዲጠቀሙ ድጋፍ ማድረግ</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            የብሔራዊ አዋጆች ግምገማ
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-chalkboard-user"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-700 uppercase tracking-wider">የአቅም ግንባታ</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">የአቅም ግንባታና የሙያ ማሻሻያ ሥልጠናዎች</h3>
                            <p class="text-xs text-slate-500 mb-3">በሚከተሉት ርዕሰ ጉዳዮች ላይ ሥልጠናዎችን መስጠት፦</p>
                            <div class="grid grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ አስተዳደር</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ አመራር</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ የአሠሪና ሠራተኛ ጉዳይ ሕግ</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ መልካም አስተዳደር</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ የካይዘን/የምርት ማሻሻል</span>
                                <span class="bg-white px-2 py-1.5 rounded-lg border border-slate-200">✓ የተወዳዳሪ አሸናፊነት</span>
                            </div>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            ተከታታይ የሙያ ማሻሻያ
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-network-wired"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-700 uppercase tracking-wider">የገበያ ትስስር</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">የገበያ ትስስር እና የንግድ ውሎች</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>የገበያ ትስስርን ያበረታታል</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>አባላት ከድርጅቶችና ከአባላት ጋር የንግድ ውል እንዲፈጽሙ ማድረግ</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>የቢዝነስ ፕላን የመሳሰሉ የንግድ ዘርፍ ፕላኖችን ማዘጋጀት</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            የንግድ ስምምነቶች ድጋፍ
                        </div>
                    </div>

                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                                <i class="fa-solid fa-globe"></i>
                            </div>
                            <span class="text-xs font-bold text-primary-700 uppercase tracking-wider">ኤግዚቪሽንና ልምድ</span>
                            <h3 class="text-xl font-bold text-slate-900 mt-1 mb-3">ኤግዚቪሽኖች እና የልምድ ልውውጥ</h3>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>ኤግዚቪሽኖችን እና ሲምፖዚየሞችን ማዘጋጀትና ማካሄድ</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>የልምድ ልውውጥ ማዘጋጀት (በአገር ውስጥና በውጭ ሀገራት)</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-primary-600 text-xs mt-1 shrink-0"></i>
                                    <span>የስራ ላይ ደህንነት እና ጤንነት፣ ምቹ የስራ ቦታ እንዲኖር መስራት</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-primary-700">
                            አገር አቀፍና ዓለም አቀፍ ትስስር
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="leadership-section" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">ይፋዊ አመራር</span>
                    <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                        የሥራ አስፈጻሚ ቦርድ አባላት
                    </h2>
                    <p class="text-base sm:text-lg text-slate-600">
                        የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን የሥራ አስፈጻሚ ቦርድ አባላት ዝርዝር፦
                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_president_dr_dawit.jpg" alt="አቶ ብርሃኔ ዘርዑ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ ፕሬዚዳንት</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ ብርሃኔ ዘርዑ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ ፕሬዚዳንት። የፌዴሬሽኑን ሥራ አስፈጻሚ አመራር እና የብሔራዊ የሦስትዮሽ ውይይት በበላይነት ይመራሉ።
                            </p>
                            <button type="button" data-bio="berehane" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_vp_tigist.jpg" alt="አቶ መሠለ ሐጎስ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-sky-600 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ ም/ፕሬዚዳንት</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ መሠለ ሐጎስ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ ም/ፕሬዚዳንት። የጋራ ድርድር እና የኢንዱስትሪ ሰላም ማስፈን ስራዎችን በኃላፊነት ያስተባብራሉ።
                            </p>
                            <button type="button" data-bio="mesele" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_sec_yared.jpg" alt="አቶ ደረጀ ለገሠ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ ዋና ፀሐፊ</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ ደረጀ ለገሠ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ ዋና ፀሐፊ። የሕግ ሰነዶችን፣ የቦርድ መዝገቦችን እና የተቋማዊ አሰራር ተገዢነትን ይመራሉ።
                            </p>
                            <button type="button" data-bio="derje" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_logistics_selamawit.jpg" alt="አቶ ደጀኔ ሉጬ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ ደጀኔ ሉጬ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የደረቅ ጭነት አሠሪዎችና የክልል ማኅበራት ተወካይ።
                            </p>
                            <button type="button" data-bio="dejene" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_regional_bereket.jpg" alt="አቶ ሰዒድ ኢብራሂም" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ ሰዒድ ኢብራሂም</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የኮሪደር መስመሮች ደህንነትና የአሠሪዎች መብት ተሟጋች።
                            </p>
                            <button type="button" data-bio="seid" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_policy_helen.jpg" alt="አቶ መኮንን ወርቄ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ መኮንን ወርቄ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የቢዝነስ ፕላን ዝግጅትና የገበያ ትስስር አማካሪ።
                            </p>
                            <button type="button" data-bio="mekonnen" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_president_dr_dawit.jpg" alt="አቶ ይርጋዓለም ሰፋኒ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ ይርጋዓለም ሰፋኒ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የክርክር አፈታትና የፍርድ ቤት ውክልና አስተባባሪ።
                            </p>
                            <button type="button" data-bio="yergalem" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_vp_tigist.jpg" alt="አቶ መስፍን እሸቱ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ መስፍን እሸቱ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የስራ ላይ ደህንነት እና የሕግ ተገዢነት አማካሪ።
                            </p>
                            <button type="button" data-bio="msfin" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_sec_yared.jpg" alt="አቶ ታደሰ እጅጉ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ ታደሰ እጅጉ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የትራንስፖርት አዋጆችና ደንቦች ማሻሻያ አማካሪ።
                            </p>
                            <button type="button" data-bio="tadsse" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_logistics_selamawit.jpg" alt="አቶ መሐመድ ሀሰን" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ መሐመድ ሀሰን</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የክልል ማኅበራት ትስስርና የሁለትዮሽ መድረኮች አስተባባሪ።
                            </p>
                            <button type="button" data-bio="mohammed" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_regional_bereket.jpg" alt="አቶ ኑረዲን ዲታሞ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ ኑረዲን ዲታሞ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የቴክኖሎጂ አሰራርና የካይዘን ምርታማነት ዘዴዎች አስተባባሪ።
                            </p>
                            <button type="button" data-bio="nurdin" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_policy_helen.jpg" alt="አቶ አበባው ካሣ" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ አበባው ካሣ</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የንግድ ውሎች ዝግጅት እና የኤግዚቪሽኖች አስተባባሪ።
                            </p>
                            <button type="button" data-bio="abeba" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                        <div class="relative h-64 overflow-hidden bg-slate-200">
                            <img src="/images/board_president_dr_dawit.jpg" alt="አቶ እንግዳ ኃ/ማርያም" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-4 right-4 text-white">
                                <span class="px-2.5 py-0.5 bg-slate-700 rounded-full text-[11px] font-bold uppercase tracking-wider">የቦርድ አባል</span>
                                <h3 class="text-xl font-bold text-white mt-1">አቶ እንግዳ ኃ/ማርያም</h3>
                            </div>
                        </div>
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                                የቦርድ አባል። የልምድ ልውውጥ እና የቴክኖሎጂ አጠቃቀም አስተባባሪ።
                            </p>
                            <button type="button" data-bio="engeda" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                                <span>ሙሉ የሕይወት ታሪክ</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">ይፋዊ ሰነዶች እና አዋጆች</span>
                        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">ይፋዊ ሰነዶች እና ሕትመቶች</h2>
                        <p class="text-sm sm:text-base text-slate-600 mt-2">የፌዴሬሽኑን ሕገ መንግሥት፣ የዕውቅና ምስክር ወረቀት እና የአሠሪና ሠራተኛ ጉዳይ አዋጅ ማጣቀሻዎችን ያግኙ።</p>
                    </div>
                    <a href="/contact" class="text-sm font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1.5 shrink-0">
                        ሰነዶችን ይጠይቁ <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-blue-100 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                                <i class="fa-solid fa-book-bookmark"></i>
                            </div>
                            <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider block">መተዳደሪያ ደንብ</span>
                            <h4 class="text-base font-bold text-slate-900 mt-1 mb-2">የፌዴሬሽኑ መተዳደሪያ ደንብ</h4>
                            <p class="text-xs text-slate-500 leading-relaxed">በኢ.ፌ.ዲ.ሪ. ሕገ መንግሥት አንቀጽ 31 እና አዋጅ 1156/2012 መሠረት የተዘጋጀ ይፋዊ መተዳደሪያ ደንብ።</p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                            <span class="text-xs text-slate-400 font-semibold">ፒዲኤፍ • 4.2 ሜባ</span>
                            <button type="button" class="doc-download-btn text-xs font-bold text-primary-600 hover:text-primary-800 flex items-center gap-1 cursor-pointer bg-transparent border-none p-0" data-doc="የፌዴሬሽኑ መተዳደሪያ ደንብ (ፒዲኤፍ)">
                                አውርድ <i class="fa-solid fa-download text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                                <i class="fa-solid fa-certificate"></i>
                            </div>
                            <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider block">የዕውቅና ምስክር</span>
                            <h4 class="text-base font-bold text-slate-900 mt-1 mb-2">የሚኒስቴሩ የዕውቅና ምስክር ወረቀት (ግንቦት 04/2010)</h4>
                            <p class="text-xs text-slate-500 leading-relaxed">ከቀድሞው የሠራተኛ እና ማኅበራዊ ጉዳይ ሚኒስቴር የተሰጠ ይፋዊ የዕውቅና ምስክር ወረቀት።</p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                            <span class="text-xs text-slate-400 font-semibold">ፒዲኤፍ • 2.1 ሜባ</span>
                            <button type="button" class="doc-download-btn text-xs font-bold text-primary-600 hover:text-primary-800 flex items-center gap-1 cursor-pointer bg-transparent border-none p-0" data-doc="የሚኒስቴሩ የዕውቅና ምስክር ወረቀት ግንቦት 04/2010 (ፒዲኤፍ)">
                                አውርድ <i class="fa-solid fa-download text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                                <i class="fa-solid fa-scale-balanced"></i>
                            </div>
                            <span class="text-[11px] font-bold text-primary-700 uppercase tracking-wider block">የአሠሪና ሠራተኛ አዋጅ</span>
                            <h4 class="text-base font-bold text-slate-900 mt-1 mb-2">የአሠሪና ሠራተኛ ጉዳይ አዋጅ ቁጥር 1156/2012</h4>
                            <p class="text-xs text-slate-500 leading-relaxed">የአሠሪዎች መብቶች፣ የሕብረት ድርድር እና የኢንዱስትሪ ግንኙነት ሕጎች ማጠቃለያ።</p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                            <span class="text-xs text-slate-400 font-semibold">ፒዲኤፍ • 3.5 ሜባ</span>
                            <button type="button" class="doc-download-btn text-xs font-bold text-primary-600 hover:text-primary-800 flex items-center gap-1 cursor-pointer bg-transparent border-none p-0" data-doc="የአሠሪና ሠራተኛ ጉዳይ አዋጅ ቁጥር 1156/2012 (ፒዲኤፍ)">
                                አውርድ <i class="fa-solid fa-download text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                                <i class="fa-solid fa-handshake-simple"></i>
                            </div>
                            <span class="text-[11px] font-bold text-primary-700 uppercase tracking-wider block">የሕብረት ስምምነት</span>
                            <h4 class="text-base font-bold text-slate-900 mt-1 mb-2">የጋራ ድርድር እና የሕብረት ስምምነት መመሪያ</h4>
                            <p class="text-xs text-slate-500 leading-relaxed">የአሠሪዎችን መብት የሚያስከብር የጋራ ስምምነት ሞዴል እና የማህበራዊ ውይይት መመሪያ።</p>
                        </div>
                        <div class="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                            <span class="text-xs text-slate-400 font-semibold">ፒዲኤፍ • 2.8 ሜባ</span>
                            <button type="button" class="doc-download-btn text-xs font-bold text-primary-600 hover:text-primary-800 flex items-center gap-1 cursor-pointer bg-transparent border-none p-0" data-doc="የጋራ ድርድር እና የሕብረት ስምምነት መመሪያ (ፒዲኤፍ)">
                                አውርድ <i class="fa-solid fa-download text-[10px]"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16 bg-primary-600 text-white relative overflow-hidden">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <span class="text-blue-200 font-bold tracking-wider text-xs uppercase mb-3 block">አባል ይሁኑ</span>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">ከፌዴሬሽኑ ጋር ዛሬውኑ አብረው ይስሩ</h2>
                <p class="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                    እርስዎ የሚያጋጥምዎትን ዘርፈ ብዙ ችግሮችና ሀሳብዎን ለኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን በመተው አገልግሎትዎንና ምርትዎን ያሳድጉ።
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a href="/membership" class="inline-flex justify-center items-center px-8 py-3.5 bg-white text-primary-700 rounded-xl text-sm font-bold hover:bg-slate-100 transition-colors shadow-md">
                        የፌዴሬሽኑ አባል ይሁኑ
                    </a>
                    <a href="/contact" class="inline-flex justify-center items-center px-8 py-3.5 bg-primary-700 border border-white/30 text-white rounded-xl text-sm font-semibold hover:bg-primary-800 transition-colors shadow-sm">
                        ጽሕፈት ቤቱን ያነጋግሩ
                    </a>
                </div>
            </div>
        </section>
    </main>

    ${Je("አማ")}
`,Cv={title:{ENG:"About Us - Ethiopian Transport Employers' Federation",አማ:"ስለ እኛ - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን"},markup:{ENG:Tv,አማ:Av}},jv=`
    ${$e("/news","ENG")}

    <main class="flex-grow pb-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
            <!-- Breadcrumbs -->
            <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2">
                    <li class="inline-flex items-center">
                        <a href="/" class="hover:text-primary-600 transition-colors">Home</a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <span class="mx-2 text-slate-400">/</span>
                            <span class="text-primary-600 font-medium">News</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <!-- Page Title -->
            <h1 class="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">News and Operational Bulletins</h1>
            <p class="text-lg text-slate-600 max-w-3xl">Strategic insights, trade corridor advisories, and policy perspectives for Ethiopia's commercial transport employers.</p>
        </div>

        <!-- Featured Story -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl shadow-slate-200/60 border border-slate-200 flex flex-col lg:flex-row group cursor-pointer transition-all duration-300">
                <div class="lg:w-3/5 h-64 lg:h-[400px] overflow-hidden relative">
                    <img src="/images/news_mountain_truck.jpg" alt="Transport Truck on Mountain Road" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out">
                </div>
                
                <div class="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                    <div class="mb-4">
                        <span class="text-xs font-bold tracking-wider text-primary-600 uppercase mb-2 block">Featured Story</span>
                        <div class="flex items-center gap-2 text-sm text-slate-500">
                            <span class="font-medium text-primary-600">Industry Perspectives</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>24 September 2026</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>5 min read</span>
                        </div>
                    </div>
                    
                    <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-primary-600 transition-colors">A Shared Road to a Stronger Transport Industry</h2>
                    
                    <p class="text-slate-600 text-lg mb-8 line-clamp-3">
                        Why constructive dialogue, safer transit operations, and institutional legal defense matter for transport employers and the national economy.
                    </p>
                    
                    <div>
                        <button type="button" data-article-id="shared-road" class="article-modal-trigger inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-sm cursor-pointer border-none">
                            <span>Read Full Story</span> <i class="fa-solid fa-arrow-right text-sm"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- News Feed & Search -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                    <h2 class="text-2xl font-bold text-slate-900 mb-2">Latest News</h2>
                    <p class="text-slate-600">Browse verified sector bulletins, regulatory alerts, and association announcements.</p>
                </div>
                
                <!-- Search Bar -->
                <div class="relative w-full md:w-72">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i class="fa-solid fa-magnifying-glass text-slate-400"></i>
                    </div>
                    <input type="text" id="news-search-input" placeholder="Search news by keyword..." class="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow bg-white text-sm">
                </div>
            </div>

            <!-- Category Filters -->
            <div class="flex flex-wrap gap-2 mb-10 border-b border-slate-200 pb-6">
                <button type="button" data-category="all" class="news-filter-btn px-4 py-2 bg-primary-600 text-white font-medium text-sm rounded-full shadow-sm transition-colors cursor-pointer border-none">All News</button>
                <button type="button" data-category="association" class="news-filter-btn px-4 py-2 bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm rounded-full border border-slate-200 transition-colors cursor-pointer">Association Updates</button>
                <button type="button" data-category="industry" class="news-filter-btn px-4 py-2 bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm rounded-full border border-slate-200 transition-colors cursor-pointer">Industry Perspectives</button>
                <button type="button" data-category="safety" class="news-filter-btn px-4 py-2 bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm rounded-full border border-slate-200 transition-colors cursor-pointer">Safety & Skills</button>
                <button type="button" data-category="events" class="news-filter-btn px-4 py-2 bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm rounded-full border border-slate-200 transition-colors cursor-pointer">Events & Dialogue</button>
            </div>

            <!-- Articles Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
                <!-- Article Card 1 -->
                <article data-article-id="safer-journeys" data-category="safety" class="news-card article-modal-trigger bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_mechanic_tire.jpg" alt="Mechanic working on commercial truck tire" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">Safety & Skills</span>
                            <span class="text-slate-400 ml-1">22 September 2026</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">4 min read</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">Safer Journeys Begin Before the Engine Starts</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">A practical look at preventative maintenance checklists and developing an enterprise-wide culture of safety.</p>
                        <button type="button" data-article-id="safer-journeys" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>Read Article</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 2 -->
                <article data-article-id="employer-voice" data-category="association" class="news-card article-modal-trigger bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_association_meeting.jpg" alt="Association Executive Meeting" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">Association Updates</span>
                            <span class="text-slate-400 ml-1">18 September 2026</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">3 min read</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">Making Space for the Transport Employer Voice</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">How active member feedback channels help craft effective submissions during tripartite labor negotiations.</p>
                        <button type="button" data-article-id="employer-voice" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>Read Article</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 3 -->
                <article data-article-id="everyday-costs" data-category="industry" class="news-card article-modal-trigger bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_logistics_hub.jpg" alt="Multimodal Logistics Freight Terminal" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">Industry Perspectives</span>
                            <span class="text-slate-400 ml-1">15 September 2026</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">6 min read</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">Managing Everyday Operating Costs in Commercial Haulage</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">Examining key cost drivers including spare parts tariffs, border dwell times, and corridor toll schedules.</p>
                        <button type="button" data-article-id="everyday-costs" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>Read Article</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 4 -->
                <article data-article-id="transport-roundtable" data-category="events" class="news-card article-modal-trigger bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_roundtable.jpg" alt="Industry Stakeholders in Dialogue" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">Events & Dialogue</span>
                            <span class="text-slate-400 ml-1">11 September 2026</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">3 min read</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">Key Outcomes from the National Transport Tripartite Forum</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">ETEF delegates secure vital consensus on port demurrage reductions and single-window customs processing.</p>
                        <button type="button" data-article-id="transport-roundtable" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>Read Article</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 5 -->
                <article data-article-id="better-maintenance" data-category="safety" class="news-card article-modal-trigger bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_workshop_records.jpg" alt="Workshop Quality Inspection" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">Safety & Skills</span>
                            <span class="text-slate-400 ml-1">08 September 2026</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">4 min read</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">Fleet Maintenance Begins with Standardized Records</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">Adopting structured maintenance logs to avoid roadside breakdowns and extend heavy vehicle service life.</p>
                        <button type="button" data-article-id="better-maintenance" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>Read Article</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 6 -->
                <article data-article-id="meaningful-membership" data-category="association" class="news-card article-modal-trigger bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_office_admin.jpg" alt="Federation Member Coordination Desk" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">Association Updates</span>
                            <span class="text-slate-400 ml-1">04 September 2026</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">2 min read</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">A First Step Towards Federation Membership Benefits</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">A roadmap for regional transport associations and commercial hauliers seeking certified statutory membership.</p>
                        <button type="button" data-article-id="meaningful-membership" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>Read Article</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- No Results State -->
                <div id="news-no-results" class="hidden col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 p-8">
                    <div class="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3 text-lg">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <h4 class="font-bold text-slate-800 text-lg mb-1">No articles found</h4>
                    <p class="text-slate-500 text-sm">Try adjusting your search terms or category filter to discover articles.</p>
                </div>
            </div>
        </section>
    </main>

    ${Je("ENG")}
`,kv=`
    ${$e("/news","አማ")}

    <main class="flex-grow pb-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
            <!-- Breadcrumbs -->
            <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2">
                    <li class="inline-flex items-center">
                        <a href="/" class="hover:text-primary-600 transition-colors">መነሻ</a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <span class="mx-2 text-slate-400">/</span>
                            <span class="text-primary-600 font-medium">ዜና</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <!-- Page Title -->
            <h1 class="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">ዜናዎችና ወቅታዊ መረጃዎች</h1>
            <p class="text-lg text-slate-600 max-w-3xl">ለኢትዮጵያ የንግድ ትራንስፖርት አሠሪዎች ጠቃሚ የሆኑ ስትራቴጂካዊ ግንዛቤዎች፣ የኮሪደር ማሳሰቢያዎችና የፖሊሲ መረጃዎች።</p>
        </div>

        <!-- Featured Story -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl shadow-slate-200/60 border border-slate-200 flex flex-col lg:flex-row group cursor-pointer transition-all duration-300">
                <div class="lg:w-3/5 h-64 lg:h-[400px] overflow-hidden relative">
                    <img src="/images/news_mountain_truck.jpg" alt="የጭነት መኪና በተራራማ መንገድ ላይ" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out">
                </div>
                
                <div class="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                    <div class="mb-4">
                        <span class="text-xs font-bold tracking-wider text-primary-600 uppercase mb-2 block">ዋና ዜና</span>
                        <div class="flex items-center gap-2 text-sm text-slate-500">
                            <span class="font-medium text-primary-600">የኢንዱስትሪ ዕይታዎች</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>መስከረም 14 ቀን 2019</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>የ5 ደቂቃ ንባብ</span>
                        </div>
                    </div>
                    
                    <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-primary-600 transition-colors">ጠንካራ የትራንስፖርት ኢንዱስትሪን ለመገንባት የጋራ ጉዞ</h2>
                    
                    <p class="text-slate-600 text-lg mb-8 line-clamp-3">
                        ገንቢ ውይይት፣ አስተማማኝ የስምሪት ደህንነትና ተቋማዊ የሕግ ድጋፍ ለትራንስፖርት አሠሪዎችና ለሀገራዊ ኢኮኖሚው ያለው ከፍተኛ ፋይዳ።
                    </p>
                    
                    <div>
                        <button type="button" data-article-id="shared-road" class="article-modal-trigger inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-sm cursor-pointer border-none">
                            <span>ሙሉውን ያንብቡ</span> <i class="fa-solid fa-arrow-right text-sm"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- News Feed & Search -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                    <h2 class="text-2xl font-bold text-slate-900 mb-2">ወቅታዊ ዜናዎች</h2>
                    <p class="text-slate-600">የዘርፉን ይፋዊ መግለጫዎች፣ የሕግ ማሻሻያዎችንና የማኅበራት መረጃዎችን ይመልከቱ።</p>
                </div>
                
                <!-- Search Bar -->
                <div class="relative w-full md:w-72">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i class="fa-solid fa-magnifying-glass text-slate-400"></i>
                    </div>
                    <input type="text" id="news-search-input" placeholder="ዜናዎችን በቁልፍ ቃል ይፈልጉ..." class="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow bg-white text-sm">
                </div>
            </div>

            <!-- Category Filters -->
            <div class="flex flex-wrap gap-2 mb-10 border-b border-slate-200 pb-6">
                <button type="button" data-category="all" class="news-filter-btn px-4 py-2 bg-primary-600 text-white font-medium text-sm rounded-full shadow-sm transition-colors cursor-pointer border-none">ሁሉም ዜናዎች</button>
                <button type="button" data-category="association" class="news-filter-btn px-4 py-2 bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm rounded-full border border-slate-200 transition-colors cursor-pointer">የማኅበራት ዜና</button>
                <button type="button" data-category="industry" class="news-filter-btn px-4 py-2 bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm rounded-full border border-slate-200 transition-colors cursor-pointer">የኢንዱስትሪ ዕይታዎች</button>
                <button type="button" data-category="safety" class="news-filter-btn px-4 py-2 bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm rounded-full border border-slate-200 transition-colors cursor-pointer">ደህንነትና ሙያ</button>
                <button type="button" data-category="events" class="news-filter-btn px-4 py-2 bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm rounded-full border border-slate-200 transition-colors cursor-pointer">ክስተቶችና ውይይቶች</button>
            </div>

            <!-- Articles Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
                <!-- Article Card 1 -->
                <article data-article-id="safer-journeys" data-category="safety" class="news-card article-modal-trigger bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_mechanic_tire.jpg" alt="የተሽከርካሪ ጎማ ምርመራ" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">ደህንነትና ሙያ</span>
                            <span class="text-slate-400 ml-1">መስከረም 12 ቀን 2019</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">የ4 ደቂቃ ንባብ</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">አስተማማኝ ጉዞ የሚጀምረው ሞተሩ ከመነሳቱ በፊት ነው</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">የቅድመ-ስምሪት ቴክኒክ ምርመራዎችን በተቋማዊ ደረጃ ተግባራዊ ማድረግ የሚያስገኘው የደህንነት ጥቅም።</p>
                        <button type="button" data-article-id="safer-journeys" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>ሙሉውን ያንብቡ</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 2 -->
                <article data-article-id="employer-voice" data-category="association" class="news-card article-modal-trigger bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_association_meeting.jpg" alt="የማኅበራት አመራሮች ስብሰባ" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">የማኅበራት ዜና</span>
                            <span class="text-slate-400 ml-1">መስከረም 08 ቀን 2019</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">የ3 ደቂቃ ንባብ</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">የትራንስፖርት አሠሪዎችን ድምፅ በፖሊሲ መድረኮች ማሰማት</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">የአባላት የጋራ ሃሳብና ቅሬታ በሦስትዮሽ የዘርፍ ድርድሮች ውስጥ እንዴት ውጤታማ ውሳኔዎችን እንደሚያመጣ።</p>
                        <button type="button" data-article-id="employer-voice" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>ሙሉውን ያንብቡ</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 3 -->
                <article data-article-id="everyday-costs" data-category="industry" class="news-card article-modal-trigger bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_logistics_hub.jpg" alt="የመልቲሞዳል ሎጂስቲክስ ማዕከል" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">የኢንዱስትሪ ዕይታዎች</span>
                            <span class="text-slate-400 ml-1">መስከረም 05 ቀን 2019</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">የ6 ደቂቃ ንባብ</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">የትራንስፖርት የዕለት ተዕለት የስራ ወጪዎችን መቆጣጠር</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">ከነዳጅ ወጪ ባሻገር የመለዋወጫ ታሪፎችን፣ የድንበር ቆይታዎችንና የተሽከርካሪ ጥገናን በአግባቡ ማስተዳደር።</p>
                        <button type="button" data-article-id="everyday-costs" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>ሙሉውን ያንብቡ</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 4 -->
                <article data-article-id="transport-roundtable" data-category="events" class="news-card article-modal-trigger bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_roundtable.jpg" alt="የዘርፉ ባለድርሻ አካላት የውይይት መድረክ" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">ክስተቶችና ውይይቶች</span>
                            <span class="text-slate-400 ml-1">ጳጉሜ 06 ቀን 2018</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">የ3 ደቂቃ ንባብ</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">ከብሔራዊ የትራንስፖርት ሦስትዮሽ ፎረም የተገኙ ውጤቶች</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">የኢትራአፌ ልዑካን በወደብ ዲመሬጅ ቅነሳና በተቀናጀ የጉምሩክ አገልግሎት ዙሪያ ስምምነት ላይ ደረሱ።</p>
                        <button type="button" data-article-id="transport-roundtable" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>ሙሉውን ያንብቡ</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 5 -->
                <article data-article-id="better-maintenance" data-category="safety" class="news-card article-modal-trigger bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_workshop_records.jpg" alt="የጥገና መዝገብ አያያዝ" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">ደህንነትና ሙያ</span>
                            <span class="text-slate-400 ml-1">ጳጉሜ 03 ቀን 2018</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">የ4 ደቂቃ ንባብ</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">ውጤታማ ጥገና የሚጀምረው ትክክለኛ መረጃ ከመያዝ ነው</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">የተሽከርካሪ የጥገና ታሪክን በመመዝገብ ድንገተኛ የመንገድ ላይ ብልሽቶችን ማስቀረትና የተሽከርካሪ ዕድሜን ማራዘም።</p>
                        <button type="button" data-article-id="better-maintenance" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>ሙሉውን ያንብቡ</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- Article Card 6 -->
                <article data-article-id="meaningful-membership" data-category="association" class="news-card article-modal-trigger bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
                    <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img src="/images/news_office_admin.jpg" alt="የአባላት አስተዳደር ጽህፈት ቤት" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-xs font-medium mb-3">
                            <span class="text-primary-600 font-semibold">የማኅበራት ዜና</span>
                            <span class="text-slate-400 ml-1">ነሐሴ 29 ቀን 2018</span>
                            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400">የ2 ደቂቃ ንባብ</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">ወደ ፌዴሬሽኑ አባልነት ለመቀላቀል የሚወሰዱ እርምጃዎች</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">የክልል የትራንስፖርት አሠሪ ማኅበራትና የግል ኦፕሬተሮች የፌዴሬሽኑ አባል በመሆን የሚያገኟቸው ሕጋዊ ጥቅሞች።</p>
                        <button type="button" data-article-id="meaningful-membership" class="article-modal-trigger text-primary-600 text-sm font-semibold inline-flex items-center gap-2 hover:text-primary-800 transition-colors mt-auto w-max bg-transparent border-none p-0 cursor-pointer">
                            <span>ሙሉውን ያንብቡ</span> <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </article>

                <!-- No Results State -->
                <div id="news-no-results" class="hidden col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 p-8">
                    <div class="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3 text-lg">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <h4 class="font-bold text-slate-800 text-lg mb-1">ምንም ዜና አልተገኘም</h4>
                    <p class="text-slate-500 text-sm">የፍለጋ ቃሉን ወይም የምድብ ምርጫውን በማስተካከል እንደገና ይሞክሩ።</p>
                </div>
            </div>
        </section>
    </main>

    ${Je("አማ")}
`,Dv={title:{ENG:"News & Bulletins - Ethiopian Transport Employers Federation",አማ:"ዜናዎችና ወቅታዊ መረጃዎች - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን"},markup:{ENG:jv,አማ:kv}},Rv=`
    ${$e("/vacancies","ENG")}

    <main class="flex-grow pb-24">
        <!-- Page Header -->
        <div class="bg-slate-50 pt-10 pb-8 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Breadcrumbs -->
                <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-primary-600 transition-colors">Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <span class="mx-2 text-slate-400">/</span>
                                <span class="text-primary-600 font-medium">Vacancies</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <!-- Page Title -->
                <h1 class="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">Career Opportunities</h1>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    Join ETEF Secretariat or our affiliated national network of member transport associations and commercial fleet operators.
                </p>
            </div>
        </div>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
            <div class="flex flex-col lg:flex-row gap-10 lg:gap-12">
                <!-- Left Column: Job Listings & Search -->
                <div class="lg:w-2/3 xl:w-3/4">
                    <!-- Search and Filter Bar -->
                    <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-8 flex flex-col sm:flex-row gap-4">
                        <div class="relative flex-grow">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="fa-solid fa-magnifying-glass text-slate-400"></i>
                            </div>
                            <input type="text" id="job-search-input" placeholder="Job title, keywords, or company..." class="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-sm text-slate-800">
                        </div>
                        <div class="flex gap-4">
                            <select id="job-category-select" class="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none bg-white text-slate-700 text-sm min-w-[150px] cursor-pointer">
                                <option value="">All Categories</option>
                                <option value="logistics">Logistics & Supply Chain</option>
                                <option value="admin">Administration</option>
                                <option value="policy">Policy & Advocacy</option>
                                <option value="training">Training & Safety</option>
                            </select>
                            <select id="job-employer-select" class="hidden sm:block px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none bg-white text-slate-700 text-sm min-w-[160px] cursor-pointer">
                                <option value="">All Employers</option>
                                <option value="etef">ETEF Secretariat</option>
                                <option value="member">Member Organizations</option>
                                <option value="partner">Partner Organizations</option>
                            </select>
                            <button type="button" id="job-search-btn" class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-sm whitespace-nowrap cursor-pointer">
                                Search
                            </button>
                        </div>
                    </div>

                    <!-- Meta info -->
                    <div class="flex justify-between items-center mb-6">
                        <span class="text-sm font-medium text-slate-500">Showing 4 open positions</span>
                        <div class="flex items-center gap-2 text-sm">
                            <span class="text-slate-500">Sort by:</span>
                            <span class="text-slate-900 font-semibold">Newest First</span>
                        </div>
                    </div>

                    <!-- Job Listings -->
                    <div class="space-y-4">
                        <!-- Job Card 1 -->
                        <div data-category="policy" data-employer="etef" class="job-listing-card bg-white rounded-xl border border-slate-200 p-6 hover:border-primary-300 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
                            <div class="absolute left-0 top-0 bottom-0 w-1 bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div class="flex-grow">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="bg-primary-50 text-primary-700 border border-primary-100 text-xs font-bold px-2.5 py-1 rounded-md">ETEF Secretariat</span>
                                    <span class="text-slate-400 text-sm flex items-center gap-1"><i class="fa-regular fa-clock"></i> Full-time</span>
                                </div>
                                <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Senior Policy & Advocacy Officer</h3>
                                <p class="text-sm font-medium text-slate-700 mb-2">Ethiopian Transport Employers Federation</p>
                                <div class="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-location-dot"></i> Addis Ababa, Ethiopia</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-briefcase"></i> Policy & Government Relations</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-regular fa-calendar"></i> Posted 2 days ago</span>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <button type="button" data-job-id="advocacy-officer" class="job-modal-trigger inline-flex justify-center items-center px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 transition-colors cursor-pointer">
                                    View Details
                                </button>
                            </div>
                        </div>

                        <!-- Job Card 2 -->
                        <div data-category="logistics" data-employer="member" class="job-listing-card bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
                            <div class="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div class="flex-grow">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold px-2.5 py-1 rounded-md">Member Organization</span>
                                    <span class="text-slate-400 text-sm flex items-center gap-1"><i class="fa-regular fa-clock"></i> Full-time</span>
                                </div>
                                <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Heavy Fleet Safety & Operations Supervisor</h3>
                                <p class="text-sm font-medium text-slate-700 mb-2">Ethio-Djibouti Freight Haulage Association</p>
                                <div class="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-location-dot"></i> Modjo Dry Port Terminal</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-briefcase"></i> Heavy Haulage Fleet</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-regular fa-calendar"></i> Posted 4 days ago</span>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <button type="button" data-job-id="fleet-supervisor" class="job-modal-trigger inline-flex justify-center items-center px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors cursor-pointer">
                                    View Details
                                </button>
                            </div>
                        </div>

                        <!-- Job Card 3 -->
                        <div data-category="logistics" data-employer="member" class="job-listing-card bg-white rounded-xl border border-slate-200 p-6 hover:border-primary-400 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
                            <div class="absolute left-0 top-0 bottom-0 w-1 bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div class="flex-grow">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="bg-primary-50 text-primary-700 border border-primary-100 text-xs font-bold px-2.5 py-1 rounded-md">Member Organization</span>
                                    <span class="text-slate-400 text-sm flex items-center gap-1"><i class="fa-regular fa-clock"></i> Full-time</span>
                                </div>
                                <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Cross-Border Customs Clearance Specialist</h3>
                                <p class="text-sm font-medium text-slate-700 mb-2">National Multi-Modal Freight Operators</p>
                                <div class="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-location-dot"></i> Galafi / Dewele Border Crossing</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-briefcase"></i> Customs & Single Window Clearance</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-regular fa-calendar"></i> Posted 1 week ago</span>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <button type="button" data-job-id="customs-liaison" class="job-modal-trigger inline-flex justify-center items-center px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-primary-50 hover:border-primary-200 hover:text-primary-800 transition-colors cursor-pointer">
                                    View Details
                                </button>
                            </div>
                        </div>

                        <!-- Job Card 4 -->
                        <div data-category="logistics" data-employer="member" class="job-listing-card bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-400 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
                            <div class="absolute left-0 top-0 bottom-0 w-1 bg-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div class="flex-grow">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold px-2.5 py-1 rounded-md">Member Organization</span>
                                    <span class="text-slate-400 text-sm flex items-center gap-1"><i class="fa-regular fa-clock"></i> Full-time</span>
                                </div>
                                <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">Regional Dispatch Coordinator</h3>
                                <p class="text-sm font-medium text-slate-700 mb-2">Safeway Bus Services</p>
                                <div class="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-location-dot"></i> Hawassa Central Bus Terminal</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-briefcase"></i> Passenger Fleet Dispatch</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-regular fa-calendar"></i> Posted 2 weeks ago</span>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <button type="button" data-job-id="dispatch-coordinator" class="job-modal-trigger inline-flex justify-center items-center px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 transition-colors cursor-pointer">
                                    View Details
                                </button>
                            </div>
                        </div>

                        <!-- No Jobs Found State -->
                        <div id="job-no-results" class="hidden text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 p-8">
                            <div class="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3 text-lg">
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                            <h4 class="font-bold text-slate-800 text-lg mb-1">No vacancies match your criteria</h4>
                            <p class="text-slate-500 text-sm">Try broadening your search term or selecting "All Categories" to see available openings.</p>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Info Sidebar -->
                <div class="lg:w-1/3 xl:w-1/4">
                    <!-- General Application Card -->
                    <div class="bg-primary-600 rounded-xl p-6 text-white mb-8 shadow-md relative overflow-hidden">
                        <div class="text-white bg-primary-500/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-xl border border-white/20">
                            <i class="fa-solid fa-file-arrow-up"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Don't see a fit?</h3>
                        <p class="text-primary-100 text-sm mb-6 leading-relaxed">
                            We are always looking for transport professionals. Submit your CV to our talent database, and we'll contact you when a matching role opens.
                        </p>
                        <button type="button" data-talent-modal class="talent-modal-trigger block w-full text-center px-4 py-3 bg-white text-primary-700 font-bold rounded-lg hover:bg-slate-50 transition-colors cursor-pointer border-none shadow-sm">
                            Submit General CV
                        </button>
                    </div>

                    <div class="mb-6">
                        <h3 class="text-lg font-bold text-slate-900 mb-2">Working with Transport Employers</h3>
                        <p class="text-slate-500 text-sm">Discover what makes Federation service rewarding.</p>
                    </div>

                    <div class="space-y-4">
                        <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                            <div class="bg-blue-50 text-primary-600 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i class="fa-solid fa-chart-line"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm mb-1">National Impact</h4>
                                <p class="text-slate-500 text-xs leading-relaxed">Your work directly influences policies that shape Ethiopia's logistics backbone.</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                            <div class="bg-blue-50 text-primary-600 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i class="fa-solid fa-graduation-cap"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm mb-1">Professional Growth</h4>
                                <p class="text-slate-500 text-xs leading-relaxed">Access to tripartite seminars, workshops, and international transport networks.</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                            <div class="bg-blue-50 text-primary-600 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i class="fa-solid fa-heart-pulse"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm mb-1">Comprehensive Benefits</h4>
                                <p class="text-slate-500 text-xs leading-relaxed">Competitive remuneration, health coverage, and professional development support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${Je("ENG")}
`,_v=`
    ${$e("/vacancies","አማ")}

    <main class="flex-grow pb-24">
        <!-- Page Header -->
        <div class="bg-slate-50 pt-10 pb-8 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Breadcrumbs -->
                <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-primary-600 transition-colors">መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <span class="mx-2 text-slate-400">/</span>
                                <span class="text-primary-600 font-medium">ክፍት የሥራ ቦታዎች</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <!-- Page Title -->
                <h1 class="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">የሥራ ዕድሎች</h1>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን ሴክሬታሪያትን ወይም በአባልነት የታቀፉ ብሔራዊ የትራንስፖርት ድርጅቶችን ይቀላቀሉ።
                </p>
            </div>
        </div>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
            <div class="flex flex-col lg:flex-row gap-10 lg:gap-12">
                <!-- Left Column: Job Listings & Search -->
                <div class="lg:w-2/3 xl:w-3/4">
                    <!-- Search and Filter Bar -->
                    <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-8 flex flex-col sm:flex-row gap-4">
                        <div class="relative flex-grow">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="fa-solid fa-magnifying-glass text-slate-400"></i>
                            </div>
                            <input type="text" id="job-search-input" placeholder="የሥራ መደብ ወይም የድርጅት ስም ይፈልጉ..." class="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-sm text-slate-800">
                        </div>
                        <div class="flex gap-4">
                            <select id="job-category-select" class="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none bg-white text-slate-700 text-sm min-w-[150px] cursor-pointer">
                                <option value="">ሁሉም ዘርፎች</option>
                                <option value="logistics">ሎጂስቲክስና አቅርቦት</option>
                                <option value="admin">አስተዳደርና ፋይናንስ</option>
                                <option value="policy">ፖሊሲና ሕግ</option>
                                <option value="training">ደህንነትና ስልጠና</option>
                            </select>
                            <select id="job-employer-select" class="hidden sm:block px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none bg-white text-slate-700 text-sm min-w-[160px] cursor-pointer">
                                <option value="">ሁሉም አሠሪዎች</option>
                                <option value="etef">የፌዴሬሽኑ ሴክሬታሪያት</option>
                                <option value="member">አባል ድርጅቶች</option>
                                <option value="partner">አጋር ተቋማት</option>
                            </select>
                            <button type="button" id="job-search-btn" class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-sm whitespace-nowrap cursor-pointer">
                                ፈልግ
                            </button>
                        </div>
                    </div>

                    <!-- Meta info -->
                    <div class="flex justify-between items-center mb-6">
                        <span class="text-sm font-medium text-slate-500">4 ክፍት የሥራ መደቦች ይገኛሉ</span>
                        <div class="flex items-center gap-2 text-sm">
                            <span class="text-slate-500">አደራደር፡</span>
                            <span class="text-slate-900 font-semibold">አዳዲስ ቀዳሚ</span>
                        </div>
                    </div>

                    <!-- Job Listings -->
                    <div class="space-y-4">
                        <!-- Job Card 1 -->
                        <div data-category="policy" data-employer="etef" class="job-listing-card bg-white rounded-xl border border-slate-200 p-6 hover:border-primary-300 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
                            <div class="absolute left-0 top-0 bottom-0 w-1 bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div class="flex-grow">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="bg-primary-50 text-primary-700 border border-primary-100 text-xs font-bold px-2.5 py-1 rounded-md">የፌዴሬሽኑ ሴክሬታሪያት</span>
                                    <span class="text-slate-400 text-sm flex items-center gap-1"><i class="fa-regular fa-clock"></i> ቋሚ የሙሉ ጊዜ</span>
                                </div>
                                <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">ከፍተኛ የፖሊሲና የሕግ ድጋፍ ኦፊሰር</h3>
                                <p class="text-sm font-medium text-slate-700 mb-2">የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን</p>
                                <div class="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-location-dot"></i> አዲስ አበባ፣ ኢትዮጵያ</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-briefcase"></i> ፖሊሲና መንግሥታዊ ግንኙነት</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-regular fa-calendar"></i> ከ2 ቀናት በፊት የወጣ</span>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <button type="button" data-job-id="advocacy-officer" class="job-modal-trigger inline-flex justify-center items-center px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 transition-colors cursor-pointer">
                                    ዝርዝሩን ይመልከቱ
                                </button>
                            </div>
                        </div>

                        <!-- Job Card 2 -->
                        <div data-category="logistics" data-employer="member" class="job-listing-card bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
                            <div class="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div class="flex-grow">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold px-2.5 py-1 rounded-md">አባል ድርጅት</span>
                                    <span class="text-slate-400 text-sm flex items-center gap-1"><i class="fa-regular fa-clock"></i> ቋሚ የሙሉ ጊዜ</span>
                                </div>
                                <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">የከባድ ተሽከርካሪ ደህንነትና ስምሪት ሱፐርቫይዘር</h3>
                                <p class="text-sm font-medium text-slate-700 mb-2">የኢትዮ-ጅቡቲ የደረቅ ጭነት አሠሪዎች ማኅበር</p>
                                <div class="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-location-dot"></i> የሞጆ ደረቅ ወደብ ተርሚናል</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-briefcase"></i> የከባድ ጭነት ስምሪት ቁጥጥር</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-regular fa-calendar"></i> ከ4 ቀናት በፊት የወጣ</span>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <button type="button" data-job-id="fleet-supervisor" class="job-modal-trigger inline-flex justify-center items-center px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors cursor-pointer">
                                    ዝርዝሩን ይመልከቱ
                                </button>
                            </div>
                        </div>

                        <!-- Job Card 3 -->
                        <div data-category="logistics" data-employer="member" class="job-listing-card bg-white rounded-xl border border-slate-200 p-6 hover:border-primary-400 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
                            <div class="absolute left-0 top-0 bottom-0 w-1 bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div class="flex-grow">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="bg-primary-50 text-primary-700 border border-primary-100 text-xs font-bold px-2.5 py-1 rounded-md">አባል ድርጅት</span>
                                    <span class="text-slate-400 text-sm flex items-center gap-1"><i class="fa-regular fa-clock"></i> ቋሚ የሙሉ ጊዜ</span>
                                </div>
                                <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">የድንበር ተሻጋሪ ጉምሩክ ክሊራንስ ስፔሻሊስት</h3>
                                <p class="text-sm font-medium text-slate-700 mb-2">ብሔራዊ መልቲሞዳል የጭነት ኦፕሬተሮች</p>
                                <div class="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-location-dot"></i> የገላፊ / ዴወሌ ድንበር ፍተሻ ጣቢያ</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-briefcase"></i> የጉምሩክ ሰነዶች ማጣራት</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-regular fa-calendar"></i> ከአንድ ሳምንት በፊት የወጣ</span>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <button type="button" data-job-id="customs-liaison" class="job-modal-trigger inline-flex justify-center items-center px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-primary-50 hover:border-primary-200 hover:text-primary-800 transition-colors cursor-pointer">
                                    ዝርዝሩን ይመልከቱ
                                </button>
                            </div>
                        </div>

                        <!-- Job Card 4 -->
                        <div data-category="logistics" data-employer="member" class="job-listing-card bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-400 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
                            <div class="absolute left-0 top-0 bottom-0 w-1 bg-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div class="flex-grow">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold px-2.5 py-1 rounded-md">አባል ድርጅት</span>
                                    <span class="text-slate-400 text-sm flex items-center gap-1"><i class="fa-regular fa-clock"></i> ቋሚ የሙሉ ጊዜ</span>
                                </div>
                                <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">የክልል አውቶቡስ ስምሪት አስተባባሪ</h3>
                                <p class="text-sm font-medium text-slate-700 mb-2">ሴፍዌይ የሕዝብ ትራንስፖርት አገልግሎት</p>
                                <div class="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-location-dot"></i> የሐዋሳ ማዕከላዊ አውቶቡስ ተርሚናል</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-briefcase"></i> የተሳፋሪ ትራንስፖርት ስምሪት</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-regular fa-calendar"></i> ከሁለት ሳምንት በፊት የወጣ</span>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <button type="button" data-job-id="dispatch-coordinator" class="job-modal-trigger inline-flex justify-center items-center px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 transition-colors cursor-pointer">
                                    ዝርዝሩን ይመልከቱ
                                </button>
                            </div>
                        </div>

                        <!-- No Jobs Found State -->
                        <div id="job-no-results" class="hidden text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 p-8">
                            <div class="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3 text-lg">
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                            <h4 class="font-bold text-slate-800 text-lg mb-1">ምንም ክፍት የሥራ ቦታ አልተገኘም</h4>
                            <p class="text-slate-500 text-sm">የፍለጋ ቃሉን በማስተካከል ወይም "ሁሉም ዘርፎች" የሚለውን በመምረጥ እንደገና ይሞክሩ።</p>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Info Sidebar -->
                <div class="lg:w-1/3 xl:w-1/4">
                    <!-- General Application Card -->
                    <div class="bg-primary-600 rounded-xl p-6 text-white mb-8 shadow-md relative overflow-hidden">
                        <div class="text-white bg-primary-500/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-xl border border-white/20">
                            <i class="fa-solid fa-file-arrow-up"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">ተስማሚ የሥራ መደብ አላገኙም?</h3>
                        <p class="text-primary-100 text-sm mb-6 leading-relaxed">
                            የትራንስፖርትና ሎጂስቲክስ ባለሙያዎችን ሁልጊዜ እንፈልጋለን። የሙያ መገለጫዎን ወደ ዳታቤዛችን ያስገቡ፤ ተስማሚ ክፍት ቦታ ሲኖር እናገኝዎታለን።
                        </p>
                        <button type="button" data-talent-modal class="talent-modal-trigger block w-full text-center px-4 py-3 bg-white text-primary-700 font-bold rounded-lg hover:bg-slate-50 transition-colors cursor-pointer border-none shadow-sm">
                            የሙያ መገለጫዎን ያስመዝግቡ
                        </button>
                    </div>

                    <div class="mb-6">
                        <h3 class="text-lg font-bold text-slate-900 mb-2">ከትራንስፖርት አሠሪዎች ጋር መሥራት</h3>
                        <p class="text-slate-500 text-sm">በፌዴሬሽኑ ጥላ ስር መሥራት የሚሰጣቸውን ጥቅሞች ይወቁ።</p>
                    </div>

                    <div class="space-y-4">
                        <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                            <div class="bg-blue-50 text-primary-600 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i class="fa-solid fa-chart-line"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm mb-1">ሀገራዊ ተፅዕኖ</h4>
                                <p class="text-slate-500 text-xs leading-relaxed">ሥራዎ የኢትዮጵያን የንግድና የሎጂስቲክስ የጀርባ አጥንት በሚያጠናክሩ ፖሊሲዎች ላይ አስተዋጽዖ ያበረክታል።</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                            <div class="bg-blue-50 text-primary-600 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i class="fa-solid fa-graduation-cap"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm mb-1">የሙያ ዕድገት</h4>
                                <p class="text-slate-500 text-xs leading-relaxed">ዓለም አቀፍ ሴሚናሮች፣ ስልጠናዎችና የተሽከርካሪ ቴክኖሎጂ ትስስሮች ተጠቃሚ ይሁኑ።</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                            <div class="bg-blue-50 text-primary-600 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i class="fa-solid fa-heart-pulse"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm mb-1">ምቹ የሥራ አካባቢ</h4>
                                <p class="text-slate-500 text-xs leading-relaxed">ተመጣጣኝ ደመወዝ፣ የጤና ዋስትና ሽፋንና የሙያ ማሻሻያ ድጋፎች።</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${Je("አማ")}
`,r0={title:{ENG:"Career Opportunities - Ethiopian Transport Employers Federation",አማ:"ክፍት የሥራ ቦታዎች - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን"},markup:{ENG:Rv,አማ:_v}},Mv=`
    ${$e("/partners","ENG")}

    <main class="flex-grow pb-24">
        <div class="bg-white pt-10 pb-12 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Breadcrumbs -->
                <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-primary-600 transition-colors">Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <span class="mx-2 text-slate-400">/</span>
                                <span class="text-primary-600 font-medium">Partners</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <!-- Page Title -->
                <h1 class="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">Strategic Partners & Network</h1>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    Advancing Ethiopia's commercial transport ecosystem through institutional collaboration with federal ministries, regulatory authorities, regional employers' associations, and international tripartite partners.
                </p>
            </div>
        </div>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <div class="mb-10">
                <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">Institutional Partners</span>
                <h2 class="text-3xl font-bold text-slate-900 mb-4">Federal Regulatory & Strategic Partners</h2>
                <p class="text-slate-600 max-w-2xl">Key government ministries and regulatory authorities with whom ETEF engages in tripartite policy dialogue, legislative review, and corridor efficiency initiatives.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <!-- Strategic Partner 1 -->
                <div class="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-lg hover:border-primary-300 transition-all group">
                    <div class="w-24 h-24 flex-shrink-0 bg-white shadow-sm rounded-full border border-slate-100 flex items-center justify-center p-3">
                        <img src="/images/partner_mot.png" alt="Ministry of Transport and Logistics Logo" class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="text-center sm:text-left">
                        <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">Ministry of Transport and Logistics</h3>
                        <p class="text-sm text-slate-600 mb-4 leading-relaxed">The federal executive ministry responsible for formulating national transport policy, trade corridor governance, and multimodal infrastructure master plans.</p>
                        <a href="https://motl.gov.et" target="_blank" rel="noopener noreferrer" class="text-primary-600 text-sm font-semibold inline-flex items-center gap-1.5 hover:text-primary-800 transition-colors">
                            Visit Official Portal <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </a>
                    </div>
                </div>

                <!-- Strategic Partner 2 -->
                <div class="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-lg hover:border-primary-300 transition-all group">
                    <div class="w-24 h-24 flex-shrink-0 bg-white shadow-sm rounded-full border border-slate-100 flex items-center justify-center p-3">
                        <img src="/images/partner_era.png" alt="Ethiopian Roads Authority Logo" class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="text-center sm:text-left">
                        <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">Ethiopian Roads Authority (ERA)</h3>
                        <p class="text-sm text-slate-600 mb-4 leading-relaxed">Collaborating on expressway network maintenance, freight weighbridge compliance standards, and road safety enforcement nationwide.</p>
                        <a href="https://motl.gov.et" target="_blank" rel="noopener noreferrer" class="text-primary-600 text-sm font-semibold inline-flex items-center gap-1.5 hover:text-primary-800 transition-colors">
                            Visit Official Portal <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Regional Associations -->
            <div class="mb-10">
                <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">Founding Federation Base</span>
                <h2 class="text-3xl font-bold text-slate-900 mb-4">Affiliated Employers' Associations</h2>
                <p class="text-slate-600 max-w-2xl">Representing 17 employers' associations and over 6,652 commercial operators operating across all economic regions of Ethiopia.</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                <div class="bg-white rounded-xl border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <img src="/images/partner_aartb.png" alt="Addis Ababa Logo" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Addis Ababa City Transport Association</h4>
                        <p class="text-xs text-slate-500 mb-2">Urban passenger transit & city distribution</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">Founding Affiliate</span>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <img src="/images/partner_oromia_freight.png" alt="Oromia Freight Logo" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Oromia Freight Transporters Association</h4>
                        <p class="text-xs text-slate-500 mb-2">Heavy dry bulk, grain, & industrial haulage</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">Founding Affiliate</span>
                    </div>
                </div>

                <div class="bg-white rounded-xl border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-blue-50 flex items-center justify-center text-primary-700 font-bold text-xs">DDLC</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Dire Dawa Logistics Corridor Association</h4>
                        <p class="text-xs text-slate-500 mb-2">Eastern maritime corridor & customs transit</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">Founding Affiliate</span>
                    </div>
                </div>

                <div class="bg-white rounded-xl border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-primary-50 flex items-center justify-center text-primary-700 font-bold text-xs">SPTA</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Southern Passenger Transport Association</h4>
                        <p class="text-xs text-slate-500 mb-2">Inter-regional bus fleet & passenger safety</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">Founding Affiliate</span>
                    </div>
                </div>

                <div class="bg-white rounded-xl border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-slate-100 flex items-center justify-center text-slate-800 font-bold text-xs">AMFA</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Amhara Commercial Hauliers Association</h4>
                        <p class="text-xs text-slate-500 mb-2">Agricultural commodities & construction transit</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">Founding Affiliate</span>
                    </div>
                </div>

                <div class="bg-white rounded-xl border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-primary-50 flex items-center justify-center text-primary-700 font-bold text-xs">EDFA</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Ethio-Djibouti Corridor Hauliers Union</h4>
                        <p class="text-xs text-slate-500 mb-2">Primary maritime containerized & fuel transit</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">Founding Affiliate</span>
                    </div>
                </div>
            </div>

            <!-- Partnership Callout (Clean White / Light Brand Card) -->
            <div class="bg-white rounded-3xl p-8 sm:p-12 text-slate-900 border border-slate-200 shadow-md mb-20 relative overflow-hidden">
                <div class="max-w-2xl relative z-10">
                    <span class="text-primary-700 font-bold tracking-wider text-xs uppercase bg-primary-50 px-3 py-1 rounded-full border border-primary-200 inline-block mb-3">Institutional Alliance</span>
                    <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">Partner with the Apex Transport Federation</h3>
                    <p class="text-slate-600 text-sm leading-relaxed mb-6">
                        ETEF collaborates with commercial vehicle manufacturers, financial institutions, insurance syndicates, and international trade bodies to advance the transport industry.
                    </p>
                    <a href="/contact" class="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-sm transition-all shadow-md">
                        <span>Inquire About Partnership</span>
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                </div>
            </div>
        </section>
    </main>

    ${Je("ENG")}
`,Nv=`
    ${$e("/partners","አማ")}

    <main class="flex-grow pb-24">
        <div class="bg-white pt-10 pb-12 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Breadcrumbs -->
                <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-primary-600 transition-colors">መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <span class="mx-2 text-slate-400">/</span>
                                <span class="text-primary-600 font-medium">አጋሮች</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <!-- Page Title -->
                <h1 class="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">ስትራቴጂካዊ አጋሮችና አባል ማኅበራት</h1>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    በኢትዮጵያ አስተማማኝና ዘመናዊ የትራንስፖርት ሥርዓት ለመገንባት ከመንግሥት አስፈፃሚ አካላት፣ ከተቆጣጣሪ ባለሥልጣናት፣ ከክልል አሠሪ ማኅበራትና ከዓለም አቀፍ አጋሮች ጋር በቅንጅት እንሰራለን።
                </p>
            </div>
        </div>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <div class="mb-10">
                <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">መንግሥታዊ አጋሮች</span>
                <h2 class="text-3xl font-bold text-slate-900 mb-4">የፌዴራል አስፈፃሚና ተቆጣጣሪ ተቋማት</h2>
                <p class="text-slate-600 max-w-2xl">ፌዴሬሽኑ በፖሊሲ ማሻሻያ፣ በሕግ ማዕቀፎች ዝግጅትና በኮሪደሮች ቅንጅት ዙሪያ አብሮ የሚሰራባቸው ዋና ዋና የመንግሥት ተቋማት።</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <!-- Strategic Partner 1 -->
                <div class="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-lg hover:border-primary-300 transition-all group">
                    <div class="w-24 h-24 flex-shrink-0 bg-white shadow-sm rounded-full border border-slate-100 flex items-center justify-center p-3">
                        <img src="/images/partner_mot.png" alt="የትራንስፖርትና ሎጂስቲክስ ሚኒስቴር" class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="text-center sm:text-left">
                        <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">የትራንስፖርትና ሎጂስቲክስ ሚኒስቴር</h3>
                        <p class="text-sm text-slate-600 mb-4 leading-relaxed">የሀገሪቱን የትራንስፖርትና የሎጂስቲክስ ዘርፍ በበላይነት የሚመራ፣ ፖሊሲዎችን የሚያመነጭና የመሰረተ ልማት ማስተር ፕላኖችን የሚያስፈጽም የፌዴራል ሚኒስቴር።</p>
                        <a href="https://motl.gov.et" target="_blank" rel="noopener noreferrer" class="text-primary-600 text-sm font-semibold inline-flex items-center gap-1.5 hover:text-primary-800 transition-colors">
                            ይፋዊ ፖርታልን ይጎብኙ <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </a>
                    </div>
                </div>

                <!-- Strategic Partner 2 -->
                <div class="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-lg hover:border-primary-300 transition-all group">
                    <div class="w-24 h-24 flex-shrink-0 bg-white shadow-sm rounded-full border border-slate-100 flex items-center justify-center p-3">
                        <img src="/images/partner_era.png" alt="የኢትዮጵያ መንገዶች አስተዳደር" class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="text-center sm:text-left">
                        <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">የኢትዮጵያ መንገዶች አስተዳደር (ኢመአ)</h3>
                        <p class="text-sm text-slate-600 mb-4 leading-relaxed">የሀገር አቀፍ የፍጥነት መንገዶች ግንባታና ጥገና፣ የሚዛን ጣቢያዎች ደንብ አከባበርና የመንገድ ደህንነት ላይ ከፌዴሬሽኑ ጋር በቅርበት ይሰራል::</p>
                        <a href="https://motl.gov.et" target="_blank" rel="noopener noreferrer" class="text-primary-600 text-sm font-semibold inline-flex items-center gap-1.5 hover:text-primary-800 transition-colors">
                            ይፋዊ ፖርታልን ይጎብኙ <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Regional Associations -->
            <div class="mb-10">
                <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">የፌዴሬሽኑ መሰረት</span>
                <h2 class="text-3xl font-bold text-slate-900 mb-4">አባል የትራንስፖርት አሠሪ ማኅበራት</h2>
                <p class="text-slate-600 max-w-2xl">በሁሉም የኢትዮጵያ ክልሎች የሚንቀሳቀሱ 17 የአሠሪ ማኅበራትንና ከ6,652 በላይ የንግድ ተሽከርካሪ ባለቤቶችን በአንድነት አስተባብረን እንወክላለን።</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                <div class="bg-white rounded-xl border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <img src="/images/partner_aartb.png" alt="አዲስ አበባ አርማ" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">የአዲስ አበባ ከተማ ትራንስፖርት አሠሪዎች ማኅበር</h4>
                        <p class="text-xs text-slate-500 mb-2">የከተማ ሕዝብ ትራንስፖርትና የከተማ ውስጥ ስምሪት</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">መሥራች አባል</span>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <img src="/images/partner_oromia_freight.png" alt="ኦሮሚያ ጭነት አርማ" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">የኦሮሚያ የጭነት ትራንስፖርት አሠሪዎች ማኅበር</h4>
                        <p class="text-xs text-slate-500 mb-2">የከባድ ደረቅ ጭነት፣ የእህልና የኢንዱስትሪ ምርቶች</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">መሥራች አባል</span>
                    </div>
                </div>

                <div class="bg-white rounded-xl border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-blue-50 flex items-center justify-center text-primary-700 font-bold text-xs">ድሬዳዋ</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">የድሬዳዋ የሎጂስቲክስ ኮሪደር አሠሪዎች ማኅበር</h4>
                        <p class="text-xs text-slate-500 mb-2">የምስራቅ የባህር በርና የጉምሩክ ትራንዚት ስምሪት</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">መሥራች አባል</span>
                    </div>
                </div>

                <div class="bg-white rounded-xl border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-primary-50 flex items-center justify-center text-primary-700 font-bold text-xs">ደቡብ</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">የደቡብ የሕዝብ ትራንስፖርት አሠሪዎች ማኅበር</h4>
                        <p class="text-xs text-slate-500 mb-2">የሀገር አቋራጭ አውቶቡሶችና የተሳፋሪ ደህንነት</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">መሥራች አባል</span>
                    </div>
                </div>

                <div class="bg-white rounded-xl border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-slate-100 flex items-center justify-center text-slate-800 font-bold text-xs">አማራ</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">የአማራ የንግድ ትራንስፖርት አሠሪዎች ማኅበር</h4>
                        <p class="text-xs text-slate-500 mb-2">የግብርና ምርቶችና የግንባታ ግብአቶች ማጓጓዝ</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">መሥራች አባል</span>
                    </div>
                </div>

                <div class="bg-white rounded-xl border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-primary-50 flex items-center justify-center text-primary-700 font-bold text-xs">ኢት-ጅቡቲ</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">የኢትዮ-ጅቡቲ ኮሪደር የከባድ ጭነት አሠሪዎች ኅብረት</h4>
                        <p class="text-xs text-slate-500 mb-2">የኮንቴነር ዕቃዎችና የፈሳሽ ነዳጅ ማጓጓዣ ዋነኛ መስመር</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">መሥራች አባል</span>
                    </div>
                </div>
            </div>

            <!-- Partnership Callout (Clean White / Light Brand Card) -->
            <div class="bg-white rounded-3xl p-8 sm:p-12 text-slate-900 border border-slate-200 shadow-md mb-20 relative overflow-hidden">
                <div class="max-w-2xl relative z-10">
                    <span class="text-primary-700 font-bold tracking-wider text-xs uppercase bg-primary-50 px-3 py-1 rounded-full border border-primary-200 inline-block mb-3">ተቋማዊ ጥምረት</span>
                    <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">ከከፍተኛው የትራንስፖርት ፌዴሬሽን ጋር አጋር ይሁኑ</h3>
                    <p class="text-slate-600 text-sm leading-relaxed mb-6">
                        ኢትራአፌ ከተሽከርካሪ አምራቾች፣ ከፋይናንስና ከኢንሹራንስ ተቋማት እንዲሁም ከዓለም አቀፍ የንግድ ድርጅቶች ጋር በትብብር ይሰራል::
                    </p>
                    <a href="/contact" class="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-sm transition-all shadow-md">
                        <span>ስለ አጋርነት ያነጋግሩን</span>
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                </div>
            </div>
        </section>
    </main>

    ${Je("አማ")}
`,n0={title:{ENG:"Strategic Partners - Ethiopian Transport Employers Federation",አማ:"ስትራቴጂካዊ አጋሮች - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን"},markup:{ENG:Mv,አማ:Nv}},Ov=`
    ${$e("/faq","ENG")}

    <main class="flex-grow pb-24">
        <!-- Page Header / Breadcrumb -->
        <div class="bg-slate-50 border-b border-slate-200 pt-10 pb-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-primary-600 transition-colors">Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <span class="mx-2 text-slate-400">/</span>
                                <span class="text-primary-600 font-medium">FAQ</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Frequently Asked Questions</h1>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    Find authoritative answers regarding ETEF membership criteria, policy and regulatory advocacy, corridor operations, and transport sector services.
                </p>
            </div>
        </div>

        <!-- FAQ Content Section -->
        <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <!-- Search & Filters -->
            <div class="mb-10 space-y-4">
                <div class="relative">
                    <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
                    <input 
                        type="text" 
                        id="faq-search-input" 
                        placeholder="Search questions or keywords (e.g. membership, dues, corridors, regulations)..." 
                        class="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    />
                </div>

                <!-- Category Filters -->
                <div class="flex flex-wrap items-center gap-2 pt-2" id="faq-categories">
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-600 text-white shadow-sm" data-category="all">
                        All Questions (10)
                    </button>
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors" data-category="membership">
                        Membership & Dues
                    </button>
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors" data-category="advocacy">
                        Advocacy & Policy
                    </button>
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors" data-category="operations">
                        Corridor Operations
                    </button>
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors" data-category="partnerships">
                        Partnerships & Training
                    </button>
                </div>
            </div>

            <!-- FAQ Accordion List -->
            <div class="space-y-4" id="faq-items-container">
                <!-- Item 1 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="advocacy">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">01</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">What is ETEF and what is its statutory mandate?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        The Ethiopian Transport Employers Federation (ETEF) is the statutory apex federation representing commercial transport employers, freight carriers, passenger transit operators, and regional associations across Ethiopia. Certified under FDRE Constitution Article 31 and Labor Proclamation No. 1156/2012, ETEF is the sole official voice for transport employers in tripartite social dialogue with the Ethiopian government and labor syndicates.
                    </div>
                </div>

                <!-- Item 2 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="membership">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">02</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">Who is eligible to join ETEF?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        Membership is open to commercial freight haulage companies, regional dry cargo associations, cross-country passenger bus fleets, city transit operators, multimodal logistics providers, and private fleet enterprises operating in Ethiopia.
                    </div>
                </div>

                <!-- Item 3 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="membership">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">03</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">What legal protection does ETEF provide to members?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        ETEF provides direct legal representation before judicial courts, administrative tribunals, and arbitration boards. We defend employers in collective labor disputes, contract breaches, arbitrary roadside fees, and port demurrage disagreements.
                    </div>
                </div>

                <!-- Item 4 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="operations">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">04</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">How does ETEF monitor strategic trade corridors?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        The Federation operates an active Corridor Watch Directorate monitoring four strategic trade arteries: Djibouti–Addis Ababa, Modjo Dry Port, Moyale–Lamu, and Berbera–Dire Dawa. We track border crossing queues, customs dwell times, and provide a 24/7 breakdown helpline for operators.
                    </div>
                </div>

                <!-- Item 5 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="advocacy">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">05</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">How are collective bargaining agreements negotiated?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        Under Labor Proclamation No. 1156/2012, ETEF serves as the authorized employer representative in negotiations with transport labor syndicates. We establish standardized working conditions, safety protocols, and wage structures that safeguard employer viability while maintaining industrial peace.
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${Je("ENG")}
`,zv=`
    ${$e("/faq","አማ")}

    <main class="flex-grow pb-24">
        <!-- Page Header / Breadcrumb -->
        <div class="bg-slate-50 border-b border-slate-200 pt-10 pb-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-primary-600 transition-colors">መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <span class="mx-2 text-slate-400">/</span>
                                <span class="text-primary-600 font-medium">ተደጋጋሚ ጥያቄዎች</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">ተደጋጋሚ ጥያቄዎችና መልሶች</h1>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    ስለ ፌዴሬሽኑ አባልነት፣ የሕግ ድጋፍ፣ የኮሪደር ክትትልና አሰራሮች አስተማማኝና ይፋዊ መረጃዎችን እዚህ ያገኛሉ።
                </p>
            </div>
        </div>

        <!-- FAQ Content Section -->
        <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <!-- Search & Filters -->
            <div class="mb-10 space-y-4">
                <div class="relative">
                    <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
                    <input 
                        type="text" 
                        id="faq-search-input" 
                        placeholder="ጥያቄዎችን ወይም ቁልፍ ቃላትን ይፈልጉ (ለምሳሌ፡ አባልነት፣ መዋጮ፣ ኮሪደር፣ ደንቦች)..." 
                        class="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    />
                </div>

                <!-- Category Filters -->
                <div class="flex flex-wrap items-center gap-2 pt-2" id="faq-categories">
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-600 text-white shadow-sm" data-category="all">
                        ሁሉም ጥያቄዎች (10)
                    </button>
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors" data-category="membership">
                        አባልነትና መዋጮ
                    </button>
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors" data-category="advocacy">
                        የሕግና ፖሊሲ ድጋፍ
                    </button>
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors" data-category="operations">
                        የኮሪደሮች ስምሪት
                    </button>
                    <button class="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors" data-category="partnerships">
                        አጋርነትና ስልጠና
                    </button>
                </div>
            </div>

            <!-- FAQ Accordion List -->
            <div class="space-y-4" id="faq-items-container">
                <!-- Item 1 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="advocacy">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">01</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">ኢትራአፌ ምንድን ነው? ሕጋዊ ሥልጣኑስ ከየት ይመነጫል?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ) በኢፌዲሪ ሕገ-መንግሥት አንቀጽ 31 እና በአሠሪና ሠራተኛ አዋጅ ቁጥር 1156/2012 መሠረት በግንቦት 04 ቀን 2010 ዓ/ም ሕጋዊ የዕውቅና ምስክር ወረቀት ያገኘ ብሔራዊ ፌዴሬሽን ነው። የትራንስፖርት አሠሪዎችን በመንግሥት፣ በተቆጣጣሪ አካላትና በሠራተኛ ማኅበራት ፊት በብቸኝነት የሚወክል ሕጋዊ ተቋም ነው።
                    </div>
                </div>

                <!-- Item 2 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="membership">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">02</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">የፌዴሬሽኑ አባል መሆን የሚችለው ማን ነው?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        በኢትዮጵያ በሕግ አግባብ የተመዘገቡ የከባድ ጭነት ማኅበራት፣ የከተማና የሀገር አቋራጭ አውቶቡስ አሠሪዎች፣ የሎጂስቲክስና ደረቅ ወደብ አገልግሎት ሰጪዎች እንዲሁም የግል የጭነት ኦፕሬተሮች የፌዴሬሽኑ አባል መሆን ይችላሉ።
                    </div>
                </div>

                <!-- Item 3 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="membership">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">03</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">ፌዴሬሽኑ ለአባላት ምን ዓይነት የሕግ ከለላ ይሰጣል?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        ፌዴሬሽኑ አባላትን በፍርድ ቤቶች፣ በአስተዳደራዊ መድረኮችና በግልግል ጉባኤዎች ፊት ይወክላል:: በሠራተኛ ክርክሮች፣ በሕገወጥ የክፍያ ጥያቄዎችና በኮሪደሮች መስተጓጎል ላይ ተቋማዊ የጠበቃ ከለላ ይሰጣል።
                    </div>
                </div>

                <!-- Item 4 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="operations">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">04</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">የንግድ ኮሪደሮች ክትትል እንዴት ይከናወናል?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        ፌዴሬሽኑ በጅቡቲ፣ ሞጆ፣ ሞያሌና በርበራ መስመሮች ላይ ያሉ የፍተሻ ጣቢያዎችን፣ የጉምሩክ ክሊራንስንና የትራንዚት ቆይታን በየዕለቱ ይከታተላል:: በተጨማሪም የ24/7 የድንገተኛ አደጋ የእርዳታ መስመር ያቀርባል።
                    </div>
                </div>

                <!-- Item 5 -->
                <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all" data-category="advocacy">
                    <button type="button" class="faq-accordion-header w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center shrink-0">05</span>
                            <span class="text-base sm:text-lg font-bold text-slate-900">የኅብረት ስምምነት ድርድር እንዴት ይካሄዳል?</span>
                        </div>
                        <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 faq-icon">
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </span>
                    </button>
                    <div class="faq-accordion-content hidden px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        በአዋጅ ቁጥር 1156/2012 መሠረት ፌዴሬሽኑ የትራንስፖርት አሠሪዎችን ወክሎ ከሠራተኛ ማኅበራት ጋር ይደራደራል:: የሥራ ሁኔታዎች፣ የደህንነት መስፈርቶችና የደመወዝ ስምምነቶች የአሠሪዎችን አቅም ባገናዘበና ሰላማዊ ግንኙነትን በሚያረጋግጥ መልኩ እንዲፈጸሙ ያደርጋል።
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${Je("አማ")}
`,o0={title:{ENG:"Frequently Asked Questions - Ethiopian Transport Employers Federation",አማ:"ተደጋጋሚ ጥያቄዎች - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን"},markup:{ENG:Ov,አማ:zv}},Lv=`
    ${$e("/contact","ENG")}

    <main class="flex-grow pb-24">
        <!-- Page Header / Breadcrumb -->
        <div class="bg-slate-50 border-b border-slate-200 pt-10 pb-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-primary-600 transition-colors">Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <span class="mx-2 text-slate-400">/</span>
                                <span class="text-primary-600 font-medium">Contact Us</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Contact ETEF Secretariat</h1>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    Have questions about membership, transport policy advocacy, or corridor assistance? Our Addis Ababa Secretariat team is here to support you.
                </p>
            </div>
        </div>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <!-- 3 Top Info Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                <!-- Location Card -->
                <div class="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center">
                    <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-5 border border-primary-100">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider mb-2">Secretariat Headquarters</span>
                    <h3 class="text-lg font-bold text-slate-900 mb-2">Addis Ababa, Ethiopia</h3>
                    <p class="text-xs text-slate-600 leading-relaxed mb-4">
                        Kirkos Sub-City, Commercial Transportation District, Secretariat Office
                    </p>
                    <span class="text-xs text-slate-500 font-medium mt-auto bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 w-full">
                        Mon – Fri: 8:30 AM – 5:30 PM (EAT)
                    </span>
                </div>

                <!-- Phone Card -->
                <div class="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center">
                    <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-5 border border-primary-100">
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider mb-2">Telephone Inquiries</span>
                    <a href="tel:+251114717787" class="text-lg font-bold text-slate-900 hover:text-primary-600 transition-colors mb-1">
                        +251 11 4717787
                    </a>
                    <a href="tel:+251911223344" class="text-sm font-semibold text-slate-700 hover:text-primary-600 transition-colors mb-2">
                        +251 91 122 3344
                    </a>
                    <p class="text-xs text-slate-600 leading-relaxed mb-4">
                        Direct Secretariat & Member Relations Switchboard
                    </p>
                    <span class="text-xs text-slate-500 font-medium mt-auto bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 w-full">
                        Available during official working hours
                    </span>
                </div>

                <!-- Email Card -->
                <div class="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center">
                    <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-5 border border-primary-100">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider mb-2">Official Inboxes</span>
                    <a href="mailto:info@etef.org.et" class="text-lg font-bold text-slate-900 hover:text-primary-600 transition-colors mb-1">
                        info@etef.org.et
                    </a>
                    <a href="mailto:ethtransfed@gmail.com" class="text-sm font-semibold text-slate-700 hover:text-primary-600 transition-colors mb-2">
                        ethtransfed@gmail.com
                    </a>
                    <p class="text-xs text-slate-600 leading-relaxed mb-4">
                        General inquiries, submissions, and official communications
                    </p>
                    <span class="text-xs text-slate-500 font-medium mt-auto bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 w-full">
                        Typically answered within 24 hours
                    </span>
                </div>
            </div>

            <!-- Two-Column Contact Form and Directorate Directory -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <!-- Left: Interactive Form -->
                <div class="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
                    <div class="mb-6">
                        <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3 py-1 rounded-full border border-primary-100">Direct Communication</span>
                        <h2 class="text-2xl font-bold text-slate-900 mt-2">Send a Message to the Secretariat</h2>
                        <p class="text-slate-600 text-xs sm:text-sm mt-1">Fill out the form below and an ETEF officer will review your request and get back to you promptly.</p>
                    </div>

                    <div id="contact-form-feedback" class="hidden mb-6 p-4 rounded-xl border"></div>

                    <form id="contact-form" class="space-y-5">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label for="contact-name" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Full Name *</label>
                                <input 
                                    type="text" 
                                    id="contact-name" 
                                    name="name" 
                                    required 
                                    placeholder="e.g. Abebe Kebede" 
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                            <div>
                                <label for="contact-org" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Organization / Company</label>
                                <input 
                                    type="text" 
                                    id="contact-org" 
                                    name="organization" 
                                    placeholder="e.g. Horn Freight Logistics" 
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label for="contact-email" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Email Address *</label>
                                <input 
                                    type="email" 
                                    id="contact-email" 
                                    name="email" 
                                    required 
                                    placeholder="name@company.com" 
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                            <div>
                                <label for="contact-phone" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Phone Number *</label>
                                <input 
                                    type="tel" 
                                    id="contact-phone" 
                                    name="phone" 
                                    required 
                                    placeholder="+251 91 123 4567" 
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="contact-subject" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Subject / Department *</label>
                            <select 
                                id="contact-subject" 
                                name="subject" 
                                required 
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                            >
                                <option value="">Select an inquiry category</option>
                                <option value="membership">Membership Application & Verification</option>
                                <option value="legal">Legal Representation & Labor Arbitration</option>
                                <option value="corridor">Corridor Advisory & Emergency Logistics</option>
                                <option value="advocacy">Policy, Proclamations & Tariff Harmonization</option>
                                <option value="general">General Federation Secretariat Inquiry</option>
                            </select>
                        </div>

                        <div>
                            <label for="contact-message" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Message / Case Details *</label>
                            <textarea 
                                id="contact-message" 
                                name="message" 
                                rows="5" 
                                required 
                                placeholder="Describe your question, request, or proposal in detail..." 
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            id="contact-submit-btn" 
                            class="w-full sm:w-auto px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <span>Send Message</span>
                            <i class="fa-solid fa-paper-plane text-xs"></i>
                        </button>
                    </form>
                </div>

                <!-- Right: Directorate Directory -->
                <div class="lg:col-span-5 space-y-6">
                    <div class="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                        <h3 class="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                            Secretariat Directorates
                        </h3>
                        <div class="space-y-4 text-xs">
                            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                                <span class="font-bold text-slate-800 block text-sm">Membership & Credentials</span>
                                <p class="text-slate-500 mt-0.5">Association registration, dues calculations, and general assembly credentials.</p>
                                <span class="text-primary-600 font-semibold block mt-1.5">membership@etef.org.et</span>
                            </div>

                            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                                <span class="font-bold text-slate-800 block text-sm">Legal & Labor Relations</span>
                                <p class="text-slate-500 mt-0.5">Collective bargaining agreements, labor arbitration, and court advocacy.</p>
                                <span class="text-primary-600 font-semibold block mt-1.5">legal@etef.org.et</span>
                            </div>

                            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                                <span class="font-bold text-slate-800 block text-sm">Corridors & Logistics Watch</span>
                                <p class="text-slate-500 mt-0.5">Customs single-window clearance, border advisories, and breakdown support.</p>
                                <span class="text-primary-600 font-semibold block mt-1.5">logistics@etef.org.et</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${Je("ENG")}
`,Bv=`
    ${$e("/contact","አማ")}

    <main class="flex-grow pb-24">
        <!-- Page Header / Breadcrumb -->
        <div class="bg-slate-50 border-b border-slate-200 pt-10 pb-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-primary-600 transition-colors">መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <span class="mx-2 text-slate-400">/</span>
                                <span class="text-primary-600 font-medium">ያግኙን</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">የፌዴሬሽኑን ሴክሬታሪያት ያነጋግሩ</h1>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    ስለ አባልነት፣ የሕግ ድጋፍ ወይም የኮሪደሮች ሁኔታ ጥያቄ ወይም አስተያየት ካለዎት የአዲስ አበባ ዋና መሥሪያ ቤታችን ዝግጁ ነው።
                </p>
            </div>
        </div>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <!-- 3 Top Info Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                <!-- Location Card -->
                <div class="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center">
                    <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-5 border border-primary-100">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider mb-2">ዋና መሥሪያ ቤት</span>
                    <h3 class="text-lg font-bold text-slate-900 mb-2">አዲስ አበባ፣ ኢትዮጵያ</h3>
                    <p class="text-xs text-slate-600 leading-relaxed mb-4">
                        ቂርቆስ ክፍለ ከተማ፣ የንግድ ትራንስፖርት ማዕከል፣ የሴክሬታሪያት ቢሮ
                    </p>
                    <span class="text-xs text-slate-500 font-medium mt-auto bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 w-full">
                        ሰኞ – አርብ፡ ከጠዋቱ 2:30 – ከሰዓት 11:30
                    </span>
                </div>

                <!-- Phone Card -->
                <div class="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center">
                    <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-5 border border-primary-100">
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider mb-2">የስልክ አድራሻ</span>
                    <a href="tel:+251114717787" class="text-lg font-bold text-slate-900 hover:text-primary-600 transition-colors mb-1">
                        +251 11 4717787
                    </a>
                    <a href="tel:+251911223344" class="text-sm font-semibold text-slate-700 hover:text-primary-600 transition-colors mb-2">
                        +251 91 122 3344
                    </a>
                    <p class="text-xs text-slate-600 leading-relaxed mb-4">
                        የሴክሬታሪያትና የአባላት ግንኙነት ቀጥታ መስመር
                    </p>
                    <span class="text-xs text-slate-500 font-medium mt-auto bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 w-full">
                        በሥራ ሰዓት ጥሪዎችን ይቀበላል
                    </span>
                </div>

                <!-- Email Card -->
                <div class="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center">
                    <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-5 border border-primary-100">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <span class="text-[11px] font-bold text-primary-600 uppercase tracking-wider mb-2">ይፋዊ የኢሜይል አድራሻ</span>
                    <a href="mailto:info@etef.org.et" class="text-lg font-bold text-slate-900 hover:text-primary-600 transition-colors mb-1">
                        info@etef.org.et
                    </a>
                    <a href="mailto:ethtransfed@gmail.com" class="text-sm font-semibold text-slate-700 hover:text-primary-600 transition-colors mb-2">
                        ethtransfed@gmail.com
                    </a>
                    <p class="text-xs text-slate-600 leading-relaxed mb-4">
                        አጠቃላይ ጥያቄዎችና ይፋዊ የደብዳቤ መላኪያ
                    </p>
                    <span class="text-xs text-slate-500 font-medium mt-auto bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 w-full">
                        በ24 ሰዓት ውስጥ ምላሽ ይሰጣል
                    </span>
                </div>
            </div>

            <!-- Two-Column Contact Form and Directorate Directory -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <!-- Left: Interactive Form -->
                <div class="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
                    <div class="mb-6">
                        <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3 py-1 rounded-full border border-primary-100">ቀጥታ መልዕክት</span>
                        <h2 class="text-2xl font-bold text-slate-900 mt-2">መልዕክትዎን ለሴክሬታሪያቱ ይላኩ</h2>
                        <p class="text-slate-600 text-xs sm:text-sm mt-1">ከታች ያለውን ቅጽ ይሙሉ፤ የፌዴሬሽኑ የሥራ ኃላፊ ተመልክቶ ፈጣን ምላሽ ይሰጥዎታል።</p>
                    </div>

                    <div id="contact-form-feedback" class="hidden mb-6 p-4 rounded-xl border"></div>

                    <form id="contact-form" class="space-y-5">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label for="contact-name" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">ሙሉ ስም *</label>
                                <input 
                                    type="text" 
                                    id="contact-name" 
                                    name="name" 
                                    required 
                                    placeholder="ለምሳሌ፡ አበበ ከበደ" 
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                            <div>
                                <label for="contact-org" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">የድርጅቱ / ማኅበሩ ስም</label>
                                <input 
                                    type="text" 
                                    id="contact-org" 
                                    name="organization" 
                                    placeholder="ለምሳሌ፡ ሆርን የጭነት ትራንስፖርት" 
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label for="contact-email" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">ኢሜይል አድራሻ *</label>
                                <input 
                                    type="email" 
                                    id="contact-email" 
                                    name="email" 
                                    required 
                                    placeholder="name@company.com" 
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                            <div>
                                <label for="contact-phone" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">ስልክ ቁጥር *</label>
                                <input 
                                    type="tel" 
                                    id="contact-phone" 
                                    name="phone" 
                                    required 
                                    placeholder="+251 91 123 4567" 
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="contact-subject" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">የጉዳዩ አይነት / ዳይሬክቶሬት *</label>
                            <select 
                                id="contact-subject" 
                                name="subject" 
                                required 
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                            >
                                <option value="">የጉዳዩን ዘርፍ ይምረጡ</option>
                                <option value="membership">የአባልነት ማመልከቻና ማረጋገጫ</option>
                                <option value="legal">የሕግ ውክልናና የሠራተኛ ክርክር</option>
                                <option value="corridor">የኮሪደር ክትትልና ድንገተኛ ድጋፍ</option>
                                <option value="advocacy">የፖሊሲና የታሪፍ ጥናቶች</option>
                                <option value="general">አጠቃላይ የሴክሬታሪያት ጉዳዮች</option>
                            </select>
                        </div>

                        <div>
                            <label for="contact-message" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">ዝርዝር መልዕክት *</label>
                            <textarea 
                                id="contact-message" 
                                name="message" 
                                rows="5" 
                                required 
                                placeholder="ጥያቄዎን ወይም ጉዳይዎን በዝርዝር እዚህ ይጻፉ..." 
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            id="contact-submit-btn" 
                            class="w-full sm:w-auto px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <span>መልዕክት ላክ</span>
                            <i class="fa-solid fa-paper-plane text-xs"></i>
                        </button>
                    </form>
                </div>

                <!-- Right: Directorate Directory -->
                <div class="lg:col-span-5 space-y-6">
                    <div class="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                        <h3 class="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                            የሴክሬታሪያቱ ዳይሬክቶሬቶች
                        </h3>
                        <div class="space-y-4 text-xs">
                            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                                <span class="font-bold text-slate-800 block text-sm">የአባላትና ድርጅት ጉዳዮች</span>
                                <p class="text-slate-500 mt-0.5">የማኅበራት ምዝገባ፣ ዓመታዊ መዋጮዎችና የጠቅላላ ጉባኤ ተወካዮች ማረጋገጫ።</p>
                                <span class="text-primary-600 font-semibold block mt-1.5">membership@etef.org.et</span>
                            </div>

                            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                                <span class="font-bold text-slate-800 block text-sm">የሕግና የኢንዱስትሪ ሰላም</span>
                                <p class="text-slate-500 mt-0.5">የኅብረት ስምምነት ድርድር፣ የግልግል ዳኝነትና የፍርድ ቤት ውክልና።</p>
                                <span class="text-primary-600 font-semibold block mt-1.5">legal@etef.org.et</span>
                            </div>

                            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                                <span class="font-bold text-slate-800 block text-sm">የኮሪደሮችና ሎጂስቲክስ ክትትል</span>
                                <p class="text-slate-500 mt-0.5">የጉምሩክ ክሊራንስ፣ የድንበር መረጃዎችና የ24/7 የድንገተኛ አደጋ እርዳታ መስመር።</p>
                                <span class="text-primary-600 font-semibold block mt-1.5">logistics@etef.org.et</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${Je("አማ")}
`,c0={title:{ENG:"Contact Us - Ethiopian Transport Employers Federation",አማ:"ያግኙን - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን"},markup:{ENG:Lv,አማ:Bv}},Hv=`
    ${$e("/membership","ENG")}

    <main class="flex-grow pb-24">
        <div class="bg-slate-50 pt-10 pb-8 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Breadcrumbs -->
                <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-primary-600 transition-colors">Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <span class="mx-2 text-slate-400">/</span>
                                <span class="text-primary-600 font-medium">Membership</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <!-- Page Title -->
                <h1 class="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">Become an ETEF Member</h1>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    Join 17 employers' associations and over 6,652 commercial operators united under the Ethiopian Transport Employers' Federation. Certified under FDRE Constitution Article 31 and Labor Proclamation No. 1156/2012.
                </p>
            </div>
        </div>

        <!-- FLEET TIER & DUES ESTIMATOR -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
            <div class="bg-primary-600 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
                <div class="max-w-3xl mb-8 relative z-10">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/25 mb-3">
                        <i class="fa-solid fa-calculator text-white"></i>
                        <span>ETEF MEMBERSHIP TARIFF & ESTIMATOR</span>
                    </div>
                    <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        Calculate Your Federation Tier & Annual Dues
                    </h2>
                    <p class="text-sm text-blue-100 mt-2 leading-relaxed">
                        Configure your commercial fleet profile to estimate statutory association dues, legal defense coverage, and driver welfare fund allocations under the 2026 ETEF General Assembly Charter.
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    <!-- Inputs -->
                    <div class="lg:col-span-7 space-y-6">
                        <div>
                            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Select Transport Sector / Operation Type</label>
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5" id="calc-sector-selector">
                                <button type="button" class="calc-sector-btn active px-3 py-2.5 rounded-xl border border-primary-400 bg-primary-600 text-white font-bold text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer shadow-sm" data-sector="Freight Transport" data-rate="450" data-base="15000">
                                    <i class="fa-solid fa-truck-moving text-base text-primary-200"></i>
                                    <span>Heavy Freight</span>
                                </button>
                                <button type="button" class="calc-sector-btn px-3 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer" data-sector="Passenger Transport" data-rate="300" data-base="10000">
                                    <i class="fa-solid fa-bus text-base text-primary-300"></i>
                                    <span>Intercity Bus</span>
                                </button>
                                <button type="button" class="calc-sector-btn px-3 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer" data-sector="Urban Transit" data-rate="150" data-base="5000">
                                    <i class="fa-solid fa-van-shuttle text-base text-primary-300"></i>
                                    <span>Urban Transit</span>
                                </button>
                                <button type="button" class="calc-sector-btn px-3 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer" data-sector="Logistics & Customs" data-rate="600" data-base="25000">
                                    <i class="fa-solid fa-boxes-stacked text-base text-primary-300"></i>
                                    <span>Logistics Depot</span>
                                </button>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <label for="calc-fleet-slider" class="text-xs font-bold text-slate-300 uppercase tracking-wider">Number of Operating Vehicles / Fleets</label>
                                <span class="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-sm font-black text-primary-300" id="calc-fleet-display">25 Vehicles</span>
                            </div>
                            <input type="range" id="calc-fleet-slider" min="1" max="250" value="25" step="1" class="w-full accent-primary-500 cursor-pointer h-2 bg-slate-700 rounded-lg">
                            <div class="flex justify-between text-[11px] text-slate-400 mt-1">
                                <span>1 Vehicle</span>
                                <span>50</span>
                                <span>100</span>
                                <span>175</span>
                                <span>250+ Commercial Units</span>
                            </div>
                        </div>
                    </div>

                    <!-- Results Card -->
                    <div class="lg:col-span-5 bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-start mb-4">
                                <span class="text-xs text-slate-400 uppercase tracking-wider font-semibold">Calculated Federation Tier</span>
                                <span id="calc-tier-badge" class="px-3 py-1 rounded-full text-xs font-bold bg-primary-500/20 text-primary-300 border border-primary-400/30">
                                    Corporate Member
                                </span>
                            </div>

                            <div class="mb-5 pb-5 border-b border-white/10">
                                <span class="text-xs text-slate-400 block mb-1">Estimated Annual Federation Contribution</span>
                                <div class="flex items-baseline gap-2">
                                    <span class="text-3xl sm:text-4xl font-extrabold text-white" id="calc-dues-amount">26,250</span>
                                    <span class="text-sm font-bold text-primary-400">ETB / Year</span>
                                </div>
                                <span class="text-[11px] text-slate-400 mt-1 block">Billed annually or in semi-annual installments</span>
                            </div>

                            <div class="space-y-2 text-xs text-slate-300 mb-6">
                                <div class="flex items-center gap-2">
                                    <i class="fa-solid fa-check text-primary-400 text-xs"></i>
                                    <span>Full tripartite representation before the Ministry of Transport</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <i class="fa-solid fa-check text-primary-400 text-xs"></i>
                                    <span>Cross-border corridor legal arbitration and demurrage defense</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <i class="fa-solid fa-check text-primary-400 text-xs"></i>
                                    <span>Certified commercial driver safety training subsidy</span>
                                </div>
                            </div>
                        </div>

                        <button type="button" id="calc-apply-btn" class="w-full py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-lg hover:shadow-primary-600/30 flex items-center justify-center gap-2 cursor-pointer">
                            <span>Apply with This Profile</span>
                            <i class="fa-solid fa-arrow-down text-xs"></i>
                        </button>
                    </div>
                </div>

                <!-- Documentation Downloads Strip -->
                <div class="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
                    <div class="flex items-center gap-2 text-xs text-slate-300">
                        <i class="fa-solid fa-folder-closed text-primary-400 text-sm"></i>
                        <span>Official Documentation Pack:</span>
                    </div>
                    <div class="flex flex-wrap items-center gap-2.5">
                        <button type="button" class="doc-download-btn px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg text-xs font-semibold text-white flex items-center gap-2 transition-colors cursor-pointer" data-doc="ETEF Constitution & Bylaws Charter (2026 Edition)">
                            <i class="fa-solid fa-file-pdf text-primary-400"></i>
                            <span>Constitution Charter (PDF)</span>
                        </button>
                        <button type="button" class="doc-download-btn px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg text-xs font-semibold text-white flex items-center gap-2 transition-colors cursor-pointer" data-doc="2026 Commercial Tariff Harmonization Schedule">
                            <i class="fa-solid fa-file-pdf text-primary-400"></i>
                            <span>Tariff Schedule (PDF)</span>
                        </button>
                        <button type="button" class="doc-download-btn px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg text-xs font-semibold text-white flex items-center gap-2 transition-colors cursor-pointer" data-doc="ETEF Carrier Onboarding & Checklist Document">
                            <i class="fa-solid fa-file-arrow-down text-primary-400"></i>
                            <span>Registration Checklist (PDF)</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Registration Form & Benefits -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-10 lg:gap-16">
                <!-- Registration Form -->
                <div class="lg:w-7/12 xl:w-2/3">
                    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
                        <div class="mb-8">
                            <h2 class="text-2xl font-bold text-slate-900 mb-2">Organization Registration</h2>
                            <p class="text-slate-500 text-sm">Please fill out the form below to register your transport enterprise with ETEF.</p>
                        </div>

                        <form id="membership-form" class="space-y-6">
                            <div id="membership-alert" class="hidden p-4 rounded-xl text-sm font-medium"></div>

                            <div>
                                <label for="orgName" class="block text-sm font-semibold text-slate-700 mb-1">Organization Name <span class="text-red-500">*</span></label>
                                <input type="text" id="orgName" required placeholder="e.g. Ethiopia National Logistics PLC" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="contactName" class="block text-sm font-semibold text-slate-700 mb-1">Contact Person Name <span class="text-red-500">*</span></label>
                                    <input type="text" id="contactName" required placeholder="e.g. Abebe Kebede" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                                </div>
                                <div>
                                    <label for="jobTitle" class="block text-sm font-semibold text-slate-700 mb-1">Job Title</label>
                                    <input type="text" id="jobTitle" placeholder="e.g. Managing Director" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="email" class="block text-sm font-semibold text-slate-700 mb-1">Email Address <span class="text-red-500">*</span></label>
                                    <input type="email" id="email" required placeholder="name@organization.com" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                                </div>
                                <div>
                                    <label for="phone" class="block text-sm font-semibold text-slate-700 mb-1">Phone Number <span class="text-red-500">*</span></label>
                                    <input type="tel" id="phone" required placeholder="+251 911 00 0000" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                                </div>
                            </div>

                            <div>
                                <label for="sector" class="block text-sm font-semibold text-slate-700 mb-1">Organization Sector / Transport Type <span class="text-red-500">*</span></label>
                                <input type="text" id="sector" required placeholder="e.g. Freight Transport, Passenger Bus, Logistics Service" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                            </div>

                            <div>
                                <label for="message" class="block text-sm font-semibold text-slate-700 mb-1">Message / Specific Membership Objectives</label>
                                <textarea id="message" rows="4" placeholder="Tell us about your operations or any specific challenges your company is facing in the transport sector..." class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400 resize-y"></textarea>
                            </div>

                            <div class="pt-4">
                                <button type="submit" id="membership-submit-btn" class="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors shadow-md focus:ring-4 focus:ring-primary-200 flex items-center justify-center gap-2">
                                    <span>SUBMIT APPLICATION</span>
                                    <i class="fa-solid fa-paper-plane text-sm"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Info Sidebar -->
                <div class="lg:w-5/12 xl:w-1/3">
                    <div class="mb-6">
                        <h3 class="text-2xl font-bold text-slate-900 mb-2">Why join ETEF?</h3>
                        <p class="text-slate-500 text-sm">Unlock exclusive advocacy and statutory representation for your transport business.</p>
                    </div>

                    <div class="space-y-4 mb-8">
                        <div class="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-users text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">Industry Representation</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">Be heard at regional and federal policy levels where critical decisions about tariffs, transit routes, and borders are made.</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-scale-balanced text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">Policy Advocacy</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">ETEF represents employer priorities in national labor laws, safety standards, and logistical reforms.</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-globe text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">Business Networking</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">Connect with major logistics operators, public freight owners, and international transport associations.</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-award text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">Training Access</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">Obtain certified driver safety programs, fleet efficiency coaching, and transport business management tutorials.</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-primary-50 border border-primary-100 rounded-xl p-6">
                        <h4 class="font-bold text-primary-800 mb-2">Need assistance?</h4>
                        <p class="text-primary-700 text-sm mb-4 leading-relaxed">
                            If you have questions regarding eligibility, documents, or annual membership fees, please reach out directly to our support desk.
                        </p>
                        <a href="mailto:ethtransfed@gmail.com" class="font-bold text-primary-700 hover:text-primary-900 transition-colors">
                            ethtransfed@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${Je("ENG")}
`,qv=`
    ${$e("/membership","አማ")}

    <main class="flex-grow pb-24">
        <div class="bg-slate-50 pt-10 pb-8 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Breadcrumbs -->
                <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-primary-600 transition-colors">መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <span class="mx-2 text-slate-400">/</span>
                                <span class="text-primary-600 font-medium">አባልነት</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <!-- Page Title -->
                <h1 class="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">የኢትራአፌ አባል ይሁኑ</h1>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    በኢፌዲሪ ሕገ-መንግሥት አንቀጽ 31 እና በአሠሪና ሠራተኛ ጉዳይ አዋጅ ቁጥር 1156/2012 መሠረት የተቋቋመውን የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን ይቀላቀሉ። ከ17 አሠሪ ማኅበራትና ከ6,652 በላይ የንግድ ትራንስፖርት ኦፕሬተሮች ጋር በአንድነት ይቁሙ።
                </p>
            </div>
        </div>

        <!-- FLEET TIER & DUES ESTIMATOR (Amharic) -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
            <div class="bg-primary-600 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
                <div class="max-w-3xl mb-8 relative z-10">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/25 mb-3">
                        <i class="fa-solid fa-calculator text-white"></i>
                        <span>የአባልነት ታሪፍና መዋጮ አስሊ</span>
                    </div>
                    <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        የአባልነት ደረጃዎንና ዓመታዊ መዋጮዎን ያሰሉ
                    </h2>
                    <p class="text-sm text-blue-100 mt-2 leading-relaxed">
                        የንግድ ተሽከርካሪዎችዎን ብዛትና የስምሪት ዘርፍ በማስገባት በ2026 የፌዴሬሽኑ ጠቅላላ ጉባኤ ውሳኔ መሠረት የሚጠበቅብዎትን ዓመታዊ መዋጮና የሕግ ከለላ ፓኬጅ ያሰሉ።
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    <!-- Inputs -->
                    <div class="lg:col-span-7 space-y-6">
                        <div>
                            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">የትራንስፖርት ዘርፍ / የስምሪት አይነት ይምረጡ</label>
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5" id="calc-sector-selector">
                                <button type="button" class="calc-sector-btn active px-3 py-2.5 rounded-xl border border-primary-400 bg-primary-600 text-white font-bold text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer shadow-sm" data-sector="የከባድ ጭነት ትራንስፖርት" data-rate="450" data-base="15000">
                                    <i class="fa-solid fa-truck-moving text-base text-primary-200"></i>
                                    <span>የከባድ ጭነት</span>
                                </button>
                                <button type="button" class="calc-sector-btn px-3 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer" data-sector="የሕዝብ አውቶቡስ" data-rate="300" data-base="10000">
                                    <i class="fa-solid fa-bus text-base text-primary-300"></i>
                                    <span>የሀገር አቋራጭ</span>
                                </button>
                                <button type="button" class="calc-sector-btn px-3 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer" data-sector="የከተማ ትራንስፖርት" data-rate="150" data-base="5000">
                                    <i class="fa-solid fa-van-shuttle text-base text-primary-300"></i>
                                    <span>የከተማ ትራንስፖርት</span>
                                </button>
                                <button type="button" class="calc-sector-btn px-3 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer" data-sector="የሎጂስቲክስና ጉምሩክ" data-rate="600" data-base="25000">
                                    <i class="fa-solid fa-boxes-stacked text-base text-primary-300"></i>
                                    <span>የሎጂስቲክስ መጋዘን</span>
                                </button>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <label for="calc-fleet-slider" class="text-xs font-bold text-slate-300 uppercase tracking-wider">የተሽከርካሪዎች ብዛት</label>
                                <span class="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-sm font-black text-primary-300" id="calc-fleet-display">25 ተሽከርካሪዎች</span>
                            </div>
                            <input type="range" id="calc-fleet-slider" min="1" max="250" value="25" step="1" class="w-full accent-primary-500 cursor-pointer h-2 bg-slate-700 rounded-lg">
                            <div class="flex justify-between text-[11px] text-slate-400 mt-1">
                                <span>1 ተሽከርካሪ</span>
                                <span>50</span>
                                <span>100</span>
                                <span>175</span>
                                <span>250+ የንግድ ተሽከርካሪዎች</span>
                            </div>
                        </div>
                    </div>

                    <!-- Results Card -->
                    <div class="lg:col-span-5 bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-start mb-4">
                                <span class="text-xs text-slate-400 uppercase tracking-wider font-semibold">የአባልነት ደረጃ</span>
                                <span id="calc-tier-badge" class="px-3 py-1 rounded-full text-xs font-bold bg-primary-500/20 text-primary-300 border border-primary-400/30">
                                    የኮርፖሬት አባል
                                </span>
                            </div>

                            <div class="mb-5 pb-5 border-b border-white/10">
                                <span class="text-xs text-slate-400 block mb-1">የዓመታዊ መዋጮ ግምት</span>
                                <div class="flex items-baseline gap-2">
                                    <span class="text-3xl sm:text-4xl font-extrabold text-white" id="calc-dues-amount">26,250</span>
                                    <span class="text-sm font-bold text-primary-400">የኢትዮጵያ ብር / በዓመት</span>
                                </div>
                                <span class="text-[11px] text-slate-400 mt-1 block">በዓመት አንድ ጊዜ ወይም በየስድስት ወሩ የሚከፈል</span>
                            </div>

                            <div class="space-y-2 text-xs text-slate-300 mb-6">
                                <div class="flex items-center gap-2">
                                    <i class="fa-solid fa-check text-primary-400 text-xs"></i>
                                    <span>በትራንስፖርት ሚኒስቴርና ተቆጣጣሪ አካላት ፊት ሙሉ ውክልና</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <i class="fa-solid fa-check text-primary-400 text-xs"></i>
                                    <span>የድንበር ተሻጋሪ የሕግ ድጋፍና የዲመሬጅ ክርክር ከለላ</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <i class="fa-solid fa-check text-primary-400 text-xs"></i>
                                    <span>ለአሽከርካሪዎች የደህንነትና የሙያ ስልጠና ድጎማ</span>
                                </div>
                            </div>
                        </div>

                        <button type="button" id="calc-apply-btn" class="w-full py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-lg hover:shadow-primary-600/30 flex items-center justify-center gap-2 cursor-pointer">
                            <span>በዚህ መረጃ ያመልክቱ</span>
                            <i class="fa-solid fa-arrow-down text-xs"></i>
                        </button>
                    </div>
                </div>

                <!-- Documentation Downloads Strip -->
                <div class="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
                    <div class="flex items-center gap-2 text-xs text-slate-300">
                        <i class="fa-solid fa-folder-closed text-primary-400 text-sm"></i>
                        <span>ይፋዊ ሰነዶችና ቅጾች፡</span>
                    </div>
                    <div class="flex flex-wrap items-center gap-2.5">
                        <button type="button" class="doc-download-btn px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg text-xs font-semibold text-white flex items-center gap-2 transition-colors cursor-pointer" data-doc="የኢትራአፌ መተዳደሪያ ደንብ ሰነድ">
                            <i class="fa-solid fa-file-pdf text-primary-400"></i>
                            <span>መተዳደሪያ ደንብ (ፒዲኤፍ)</span>
                        </button>
                        <button type="button" class="doc-download-btn px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg text-xs font-semibold text-white flex items-center gap-2 transition-colors cursor-pointer" data-doc="የ2026 የንግድ ታሪፍ መመሪያ">
                            <i class="fa-solid fa-file-pdf text-primary-400"></i>
                            <span>የታሪፍ ሰንጠረዥ (ፒዲኤፍ)</span>
                        </button>
                        <button type="button" class="doc-download-btn px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg text-xs font-semibold text-white flex items-center gap-2 transition-colors cursor-pointer" data-doc="የአባልነት ምዝገባ መስፈርቶች">
                            <i class="fa-solid fa-file-arrow-down text-primary-400"></i>
                            <span>የምዝገባ ማረጋገጫ (ፒዲኤፍ)</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Registration Form & Benefits -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-10 lg:gap-16">
                <!-- Registration Form -->
                <div class="lg:w-7/12 xl:w-2/3">
                    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
                        <div class="mb-8">
                            <h2 class="text-2xl font-bold text-slate-900 mb-2">የድርጅት ምዝገባ ማመልከቻ</h2>
                            <p class="text-slate-500 text-sm">የትራንስፖርት ድርጅትዎን በፌዴሬሽኑ አባልነት ለማስመዝገብ ከታች ያለውን ቅጽ በትክክል ይሙሉ::</p>
                        </div>

                        <form id="membership-form" class="space-y-6">
                            <div id="membership-alert" class="hidden p-4 rounded-xl text-sm font-medium"></div>

                            <div>
                                <label for="orgName" class="block text-sm font-semibold text-slate-700 mb-1">የድርጅቱ / ማኅበሩ ስም <span class="text-red-500">*</span></label>
                                <input type="text" id="orgName" required placeholder="ለምሳሌ፡ ብሔራዊ ሎጂስቲክስ ኃ/የተ/የግ/ማ" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="contactName" class="block text-sm font-semibold text-slate-700 mb-1">የተወካይ / ኃላፊ ስም <span class="text-red-500">*</span></label>
                                    <input type="text" id="contactName" required placeholder="ለምሳሌ፡ አበበ ከበደ" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                                </div>
                                <div>
                                    <label for="jobTitle" class="block text-sm font-semibold text-slate-700 mb-1">የሥራ ኃላፊነት</label>
                                    <input type="text" id="jobTitle" placeholder="ለምሳሌ፡ ሥራ አስኪያጅ" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="email" class="block text-sm font-semibold text-slate-700 mb-1">የኢሜይል አድራሻ <span class="text-red-500">*</span></label>
                                    <input type="email" id="email" required placeholder="name@organization.com" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                                </div>
                                <div>
                                    <label for="phone" class="block text-sm font-semibold text-slate-700 mb-1">ስልክ ቁጥር <span class="text-red-500">*</span></label>
                                    <input type="tel" id="phone" required placeholder="+251 911 00 0000" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                                </div>
                            </div>

                            <div>
                                <label for="sector" class="block text-sm font-semibold text-slate-700 mb-1">የትራንስፖርት ዘርፍ / የስራ መስክ <span class="text-red-500">*</span></label>
                                <input type="text" id="sector" required placeholder="ለምሳሌ፡ የደረቅ ጭነት፣ የሕዝብ አውቶቡስ፣ የሎጂስቲክስ አገልግሎት" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400">
                            </div>

                            <div>
                                <label for="message" class="block text-sm font-semibold text-slate-700 mb-1">ተጨማሪ መረጃ ወይም የአባልነት ግብ</label>
                                <textarea id="message" rows="4" placeholder="ስለ ድርጅትዎ የስምሪት መስመር ወይም በዘርፉ ስለገጠምዎት ተግዳሮቶች ያብራሩ..." class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-slate-800 bg-white shadow-sm placeholder:text-slate-400 resize-y"></textarea>
                            </div>

                            <div class="pt-4">
                                <button type="submit" id="membership-submit-btn" class="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors shadow-md focus:ring-4 focus:ring-primary-200 flex items-center justify-center gap-2">
                                    <span>ማመልከቻውን አስገባ</span>
                                    <i class="fa-solid fa-paper-plane text-sm"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Info Sidebar -->
                <div class="lg:w-5/12 xl:w-1/3">
                    <div class="mb-6">
                        <h3 class="text-2xl font-bold text-slate-900 mb-2">ለምን ኢትራአፌን ይቀላቀላሉ?</h3>
                        <p class="text-slate-500 text-sm">ለድርጅትዎ አስተማማኝ የሕግ ጥበቃና ሀገራዊ የዘርፍ ውክልና ያግኙ።</p>
                    </div>

                    <div class="space-y-4 mb-8">
                        <div class="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-users text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">ሀገራዊ የዘርፍ ውክልና</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">በትራንስፖርት ታሪፍ፣ መስመሮችና ድንበሮች ላይ ውሳኔ በሚተላለፍባቸው መንግሥታዊ መድረኮች ላይ ተደማጭ ድምፅ ይሁኑ።</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-scale-balanced text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">የፖሊሲና የሕግ ከለላ</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">ኢትራአፌ የአሠሪዎችን ፍላጎት በብሔራዊ የሠራተኛ ሕጎች፣ የደህንነት ደረጃዎችና የሎጂስቲክስ ማሻሻያዎች ውስጥ ያስከብራል።</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-globe text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">የንግድ ትስስር ዕድሎች</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">ከዋና ዋና የሎጂስቲክስ ኦፕሬተሮች፣ የመንግሥት የጭነት ባለቤቶችና ዓለም አቀፍ ድርጅቶች ጋር ይገናኙ።</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-award text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">የስልጠና ዕድሎች</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">የአሽከርካሪዎች ደህንነት ስልጠና፣ የተሽከርካሪ ስምሪት ውጤታማነትና የትራንስፖርት ንግድ አመራር ስልጠናዎችን ያግኙ።</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-primary-50 border border-primary-100 rounded-xl p-6">
                        <h4 class="font-bold text-primary-800 mb-2">ድጋፍ ይፈልጋሉ?</h4>
                        <p class="text-primary-700 text-sm mb-4 leading-relaxed">
                            ስለ አባልነት መስፈርቶች፣ አስፈላጊ ሰነዶች ወይም ክፍያዎች ጥያቄ ካለዎት በቀጥታ ሴክሬታሪያቱን ያነጋግሩ።
                        </p>
                        <a href="mailto:ethtransfed@gmail.com" class="font-bold text-primary-700 hover:text-primary-900 transition-colors">
                            ethtransfed@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${Je("አማ")}
`,d0={title:{ENG:"Become a Member - Ethiopian Transport Employers Federation",አማ:"አባል ይሁኑ - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን"},markup:{ENG:Hv,አማ:qv}},Uv=`

    <!-- Sidebar -->
    <aside class="w-64 bg-sidebar text-slate-300 flex flex-col hidden md:flex z-20">
        <div class="h-20 flex items-center gap-3 px-6 border-b border-slate-800">
            <div class="bg-primary-600 text-white p-2 rounded-full h-10 w-10 flex items-center justify-center font-bold">
                <i class="fa-solid fa-shield-halved"></i>
            </div>
            <div>
                <span class="font-bold text-white text-lg tracking-tight block">ETEF ADMIN</span>
                <span class="text-[10px] text-slate-400 uppercase tracking-widest">Secretariat Portal</span>
            </div>
        </div>

        <nav class="flex-grow px-4 py-6 space-y-2 text-sm">
            <a href="#dashboard" id="nav-dashboard" class="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-600 text-white font-semibold transition-all">
                <i class="fa-solid fa-chart-pie w-5"></i> Dashboard
            </a>
            <a href="#memberships" id="nav-memberships" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-all">
                <i class="fa-solid fa-users-rectangle w-5"></i> Memberships
            </a>
            <a href="#vacancies" id="nav-vacancies" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-all">
                <i class="fa-solid fa-briefcase w-5"></i> Job Vacancies
            </a>
            <a href="#news" id="nav-news" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-all">
                <i class="fa-solid fa-newspaper w-5"></i> News & Updates
            </a>
            <a href="#partners" id="nav-partners" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-all">
                <i class="fa-solid fa-handshake w-5"></i> Partners & Sponsors
            </a>
        </nav>

        <div class="p-4 border-t border-slate-800">
            <a href="/" class="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all font-medium text-sm">
                <i class="fa-solid fa-arrow-right-from-bracket w-5"></i> Exit to Website
            </a>
        </div>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-grow flex flex-col h-screen overflow-y-auto">
        
        <!-- Top Navbar -->
        <header class="h-20 bg-white border-b border-slate-200 px-6 sm:px-10 flex items-center justify-between sticky top-0 z-10 shadow-sm">
            <div class="flex items-center gap-4">
                <button class="md:hidden text-slate-600 focus:outline-none text-xl"><i class="fa-solid fa-bars"></i></button>
                <h1 class="text-xl sm:text-2xl font-bold text-slate-900" id="pageTitle">Admin Overview</h1>
            </div>
            
            <div class="flex items-center gap-4">
                <div class="relative hidden sm:block">
                    <input type="text" placeholder="Search records..." class="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-slate-400 text-sm"></i>
                </div>
                <div class="flex items-center gap-3 border-l border-slate-200 pl-4">
                    <div class="w-10 h-10 rounded-full bg-primary-100 text-primary-600 font-bold flex items-center justify-center">
                        AD
                    </div>
                    <div class="hidden sm:block text-left">
                        <span class="font-bold text-sm text-slate-900 block">Secretariat Admin</span>
                        <span class="text-xs text-slate-500 block">Addis Ababa Office</span>
                    </div>
                </div>
            </div>
        </header>

        <!-- Dynamic Tab Contents -->
        <main class="flex-grow p-6 sm:p-10">
            
            <!-- DASHBOARD TAB -->
            <div id="tab-dashboard" class="space-y-8">
                <!-- Stats Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Members</span>
                            <div class="w-10 h-10 bg-blue-50 text-primary-600 rounded-xl flex items-center justify-center font-bold"><i class="fa-solid fa-users"></i></div>
                        </div>
                        <h3 class="text-3xl font-extrabold text-slate-900 mb-1">342</h3>
                        <span class="text-xs text-primary-600 font-semibold flex items-center gap-1"><i class="fa-solid fa-arrow-up"></i> +12 this month</span>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Pending Applications</span>
                            <div class="w-10 h-10 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center font-bold"><i class="fa-solid fa-clock"></i></div>
                        </div>
                        <h3 class="text-3xl font-extrabold text-slate-900 mb-1">18</h3>
                        <span class="text-xs text-slate-600 font-semibold">Requires review</span>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Vacancies</span>
                            <div class="w-10 h-10 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center font-bold"><i class="fa-solid fa-briefcase"></i></div>
                        </div>
                        <h3 class="text-3xl font-extrabold text-slate-900 mb-1">7</h3>
                        <span class="text-xs text-primary-600 font-semibold">Across network</span>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Partners & Sponsors</span>
                            <div class="w-10 h-10 bg-primary-50 text-primary-700 rounded-xl flex items-center justify-center font-bold"><i class="fa-solid fa-handshake"></i></div>
                        </div>
                        <h3 class="text-3xl font-extrabold text-slate-900 mb-1">14</h3>
                        <span class="text-xs text-primary-600 font-semibold">Institutional & Corporate</span>
                    </div>
                </div>

                <!-- Recent Applications Table -->
                <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div class="p-6 border-b border-slate-200 flex justify-between items-center">
                        <h3 class="font-bold text-lg text-slate-900">Recent Membership Applications</h3>
                        <button class="text-sm font-semibold text-primary-600 hover:underline">View All</button>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-semibold text-xs uppercase tracking-wider border-b border-slate-200">
                                    <th class="py-4 px-6">Organization</th>
                                    <th class="py-4 px-6">Contact Person</th>
                                    <th class="py-4 px-6">Sector</th>
                                    <th class="py-4 px-6">Date</th>
                                    <th class="py-4 px-6">Status</th>
                                    <th class="py-4 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200 text-slate-700">
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900">Abay Express Freight PLC</td>
                                    <td class="py-4 px-6">Kassa Belay</td>
                                    <td class="py-4 px-6">Freight Transport</td>
                                    <td class="py-4 px-6 text-slate-500">26 Sep 2026</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">Pending</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="px-3 py-1 bg-primary-50 text-primary-700 font-semibold rounded hover:bg-primary-100 transition-colors">Approve</button>
                                        <button class="px-3 py-1 bg-slate-100 text-slate-700 font-semibold rounded hover:bg-slate-200 transition-colors">Reject</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900">Selam Bus Lines S.C.</td>
                                    <td class="py-4 px-6">Tadesse Mekonnen</td>
                                    <td class="py-4 px-6">Passenger Transport</td>
                                    <td class="py-4 px-6 text-slate-500">24 Sep 2026</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Approved</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="px-3 py-1 bg-slate-100 text-slate-700 font-semibold rounded hover:bg-slate-200 transition-colors">View</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900">Dire Trans Logistics</td>
                                    <td class="py-4 px-6">Fatuma Ahmed</td>
                                    <td class="py-4 px-6">Logistics & Customs</td>
                                    <td class="py-4 px-6 text-slate-500">21 Sep 2026</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Approved</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="px-3 py-1 bg-slate-100 text-slate-700 font-semibold rounded hover:bg-slate-200 transition-colors">View</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- MEMBERSHIPS TAB -->
            <div id="tab-memberships" class="hidden space-y-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 class="text-2xl font-bold text-slate-900">Registered Members Directory</h2>
                        <p class="text-slate-500 text-sm">Search and manage all verified commercial transport and logistics operators.</p>
                    </div>
                    <button id="admin-open-member-modal" class="px-4 py-2.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm shadow-sm flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Register New Member
                    </button>
                </div>

                <!-- Search and Filter Bar -->
                <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <div class="relative w-full sm:w-80">
                        <input type="text" id="admin-member-search" placeholder="Search by name or region..." class="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none">
                        <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-slate-400 text-xs"></i>
                    </div>
                    <div class="flex items-center gap-3 w-full sm:w-auto">
                        <label for="admin-member-sector-filter" class="text-xs font-semibold text-slate-500 shrink-0">Sector:</label>
                        <select id="admin-member-sector-filter" class="px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none bg-white">
                            <option value="all">All Sectors</option>
                            <option value="Freight">Freight Transport</option>
                            <option value="Passenger">Passenger Transport</option>
                            <option value="Logistics">Logistics & Customs</option>
                            <option value="Petroleum">Fuel & Bulk Cargo</option>
                        </select>
                    </div>
                </div>

                <!-- Member Directory Table -->
                <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-sm" id="admin-members-table">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-semibold text-xs uppercase tracking-wider border-b border-slate-200">
                                    <th class="py-4 px-6">Organization</th>
                                    <th class="py-4 px-6">Sector</th>
                                    <th class="py-4 px-6">Region / Base</th>
                                    <th class="py-4 px-6">Fleet Size</th>
                                    <th class="py-4 px-6">Membership Tier</th>
                                    <th class="py-4 px-6">Status</th>
                                    <th class="py-4 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200 text-slate-700">
                                <tr class="hover:bg-slate-50/50 admin-member-row" data-sector="Freight">
                                    <td class="py-4 px-6 font-bold text-slate-900">Abay Express Freight PLC</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-primary-50 text-primary-700">Freight</span></td>
                                    <td class="py-4 px-6 text-slate-600">Addis Ababa</td>
                                    <td class="py-4 px-6 font-semibold text-slate-900">140 Trucks</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-primary-700">Executive Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50 admin-member-row" data-sector="Passenger">
                                    <td class="py-4 px-6 font-bold text-slate-900">Selam Bus Lines S.C.</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-primary-50 text-primary-700">Passenger</span></td>
                                    <td class="py-4 px-6 text-slate-600">National Network</td>
                                    <td class="py-4 px-6 font-semibold text-slate-900">85 Coaches</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-primary-700">Executive Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50 admin-member-row" data-sector="Logistics">
                                    <td class="py-4 px-6 font-bold text-slate-900">Dire Trans Logistics S.C.</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-primary-50 text-primary-700">Logistics</span></td>
                                    <td class="py-4 px-6 text-slate-600">Dire Dawa Hub</td>
                                    <td class="py-4 px-6 font-semibold text-slate-900">62 Vehicles</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-slate-700">Corporate Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50 admin-member-row" data-sector="Freight">
                                    <td class="py-4 px-6 font-bold text-slate-900">Ethio-Djibouti Corridor Haulers</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-primary-50 text-primary-700">Freight</span></td>
                                    <td class="py-4 px-6 text-slate-600">Afar / Somali</td>
                                    <td class="py-4 px-6 font-semibold text-slate-900">310 Fleets</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-primary-700">Strategic Assoc.</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50 admin-member-row" data-sector="Passenger">
                                    <td class="py-4 px-6 font-bold text-slate-900">Sheger Express Transit</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-primary-50 text-primary-700">Passenger</span></td>
                                    <td class="py-4 px-6 text-slate-600">Addis Ababa</td>
                                    <td class="py-4 px-6 font-semibold text-slate-900">220 Buses</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-slate-700">Corporate Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50 admin-member-row" data-sector="Petroleum">
                                    <td class="py-4 px-6 font-bold text-slate-900">Oromia Bulk Petroleum Transporters</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">Petroleum</span></td>
                                    <td class="py-4 px-6 text-slate-600">Oromia</td>
                                    <td class="py-4 px-6 font-semibold text-slate-900">95 Tankers</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-slate-700">Corporate Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- VACANCIES TAB -->
            <div id="tab-vacancies" class="hidden space-y-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 class="text-2xl font-bold text-slate-900">Job Vacancies Management</h2>
                        <p class="text-slate-500 text-sm">Post, review applicants, and manage recruitment across ETEF Secretariat and member networks.</p>
                    </div>
                    <button id="admin-open-vacancy-modal" class="px-4 py-2.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm shadow-sm flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Post New Vacancy
                    </button>
                </div>

                <!-- Vacancies Table -->
                <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-sm" id="admin-vacancies-table">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-semibold text-xs uppercase tracking-wider border-b border-slate-200">
                                    <th class="py-4 px-6">Job Title</th>
                                    <th class="py-4 px-6">Duty Station</th>
                                    <th class="py-4 px-6">Type</th>
                                    <th class="py-4 px-6">Applicants</th>
                                    <th class="py-4 px-6">Closing Date</th>
                                    <th class="py-4 px-6">Status</th>
                                    <th class="py-4 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200 text-slate-700">
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900">Senior Transport Logistics Coordinator</td>
                                    <td class="py-4 px-6 text-slate-600">ETEF Secretariat HQ, Addis Ababa</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700">Full-Time</span></td>
                                    <td class="py-4 px-6 font-bold text-primary-600">14 Candidates</td>
                                    <td class="py-4 px-6 text-slate-500">Oct 30, 2026</td>
                                    <td class="py-4 px-6"><span class="vacancy-status-pill px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-vacancy-toggle-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">Close</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900">Heavy Commercial Fleet Safety Inspector</td>
                                    <td class="py-4 px-6 text-slate-600">Dire Dawa Logistics Hub</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700">Full-Time</span></td>
                                    <td class="py-4 px-6 font-bold text-primary-600">9 Candidates</td>
                                    <td class="py-4 px-6 text-slate-500">Nov 15, 2026</td>
                                    <td class="py-4 px-6"><span class="vacancy-status-pill px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-vacancy-toggle-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">Close</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900">Association Operations & Tripartite Liaison</td>
                                    <td class="py-4 px-6 text-slate-600">Kirkos Sub-City Office, Addis Ababa</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700">Full-Time</span></td>
                                    <td class="py-4 px-6 font-bold text-primary-600">22 Candidates</td>
                                    <td class="py-4 px-6 text-slate-500">Nov 10, 2026</td>
                                    <td class="py-4 px-6"><span class="vacancy-status-pill px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-vacancy-toggle-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">Close</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900">Multimodal Freight Forwarding Specialist</td>
                                    <td class="py-4 px-6 text-slate-600">Modjo Dry Port & Terminal</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700">Contract</span></td>
                                    <td class="py-4 px-6 font-bold text-primary-600">18 Candidates</td>
                                    <td class="py-4 px-6 text-slate-500">Dec 01, 2026</td>
                                    <td class="py-4 px-6"><span class="vacancy-status-pill px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-vacancy-toggle-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">Close</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- NEWS TAB -->
            <div id="tab-news" class="hidden space-y-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 class="text-2xl font-bold text-slate-900">News & Articles Management</h2>
                        <p class="text-slate-500 text-sm">Publish updates, corridor bulletins, and official press releases.</p>
                    </div>
                    <button id="admin-open-news-modal" class="px-4 py-2.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm shadow-sm flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Create Article
                    </button>
                </div>

                <!-- Articles Table -->
                <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-sm" id="admin-news-table">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-semibold text-xs uppercase tracking-wider border-b border-slate-200">
                                    <th class="py-4 px-6">Headline</th>
                                    <th class="py-4 px-6">Category</th>
                                    <th class="py-4 px-6">Publish Date</th>
                                    <th class="py-4 px-6">Readership</th>
                                    <th class="py-4 px-6">Status</th>
                                    <th class="py-4 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200 text-slate-700">
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">ETEF and Ministry of Transport Sign Historic Tripartite Road Safety Accord</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-primary-50 text-primary-700">Industry News</span></td>
                                    <td class="py-4 px-6 text-slate-500">Oct 01, 2026</td>
                                    <td class="py-4 px-6 font-semibold text-slate-700">1,420 views</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Published</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-news-status-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">Unpublish</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">Djibouti Corridor Freight Tariffs Harmonization Strategy Finalized</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-primary-50 text-primary-700">Corridor Update</span></td>
                                    <td class="py-4 px-6 text-slate-500">Sep 24, 2026</td>
                                    <td class="py-4 px-6 font-semibold text-slate-700">2,890 views</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Published</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-news-status-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">Unpublish</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">Commercial Driver Health, Safety & Rest Facility Initiative 2026</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-primary-50 text-primary-700">Safety & Welfare</span></td>
                                    <td class="py-4 px-6 text-slate-500">Sep 15, 2026</td>
                                    <td class="py-4 px-6 font-semibold text-slate-700">980 views</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Published</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-news-status-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">Unpublish</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50">
                                    <td class="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">Draft National Fleet Electrification & Fuel Subsidy Policy Whitepaper</td>
                                    <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">Policy & Law</span></td>
                                    <td class="py-4 px-6 text-slate-500">Sep 05, 2026</td>
                                    <td class="py-4 px-6 font-semibold text-slate-700">0 views</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">Draft</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-news-status-btn px-2.5 py-1 bg-primary-50 hover:bg-primary-100 text-primary-700 text-xs font-semibold rounded transition-colors">Publish</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- PARTNERS TAB -->
            <div id="tab-partners" class="hidden space-y-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 class="text-2xl font-bold text-slate-900">Partners & Sponsors Management</h2>
                        <p class="text-slate-500 text-sm">Configure sponsor tiers, strategic institutional accords, and official relationships.</p>
                    </div>
                    <button id="admin-open-partner-modal" class="px-4 py-2.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm shadow-sm flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Add Partner
                    </button>
                </div>

                <!-- Partners Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="admin-partners-grid">
                    <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-primary-50 text-primary-700">Strategic Banking</span>
                                <span class="text-xs text-primary-600 font-semibold"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Commercial Bank of Ethiopia (CBE)</h3>
                            <p class="text-xs text-slate-500 mt-1">Fleet Financing, Letter of Credit & Digital Payment Accord</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2018</span>
                            <span class="font-semibold text-primary-600">Tier 1 Partner</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-primary-50 text-primary-700">Government Authority</span>
                                <span class="text-xs text-primary-600 font-semibold"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Ministry of Transport & Logistics (MoTL)</h3>
                            <p class="text-xs text-slate-500 mt-1">Federal Regulatory Framework, Policy Dialogue & Safety Accord</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2014</span>
                            <span class="font-semibold text-primary-600">Institutional Accord</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-primary-50 text-primary-700">Road Infrastructure</span>
                                <span class="text-xs text-primary-600 font-semibold"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Ethiopian Roads Administration (ERA)</h3>
                            <p class="text-xs text-slate-500 mt-1">Corridor Maintenance, Weighbridge Standards & Road Safety</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2016</span>
                            <span class="font-semibold text-primary-600">Institutional Accord</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-primary-50 text-primary-700">Municipal Transit</span>
                                <span class="text-xs text-primary-600 font-semibold"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Addis Ababa City Transport Bureau (AARTB)</h3>
                            <p class="text-xs text-slate-500 mt-1">Urban Bus Route Licensing & Terminal Management</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2017</span>
                            <span class="font-semibold text-primary-600">Municipal Accord</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-700">Regional Freight</span>
                                <span class="text-xs text-primary-600 font-semibold"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Oromia Freight & Transport Enterprise</h3>
                            <p class="text-xs text-slate-500 mt-1">Regional Fleet Haulage & Agricultural Freight Logistics</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2019</span>
                            <span class="font-semibold text-primary-600">Regional Affiliate</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-primary-50 text-primary-700">Port Authority</span>
                                <span class="text-xs text-primary-600 font-semibold"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Djibouti Port & Free Zones Authority</h3>
                            <p class="text-xs text-slate-500 mt-1">Maritime Cargo Handover, Doraleh Terminal Staging Protocols</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2015</span>
                            <span class="font-semibold text-primary-600">Bilateral Accord</span>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>

    <!-- ADMIN MODALS -->
    <!-- Modal 1: Register Member -->
    <div id="admin-modal-member" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-100">
            <div class="flex justify-between items-center mb-6 pb-3 border-b border-slate-100">
                <h3 class="font-bold text-lg text-slate-900">Register New Member Association</h3>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <form id="admin-form-new-member" class="space-y-4 text-sm">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Organization Name *</label>
                    <input type="text" id="member-org-name" required placeholder="e.g. Awash Valley Haulage PLC" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Sector *</label>
                        <select id="member-sector" required class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                            <option value="Freight">Freight Transport</option>
                            <option value="Passenger">Passenger Transport</option>
                            <option value="Logistics">Logistics & Customs</option>
                            <option value="Petroleum">Fuel & Bulk Cargo</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Region / Base *</label>
                        <input type="text" id="member-region" required placeholder="e.g. Addis Ababa" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Fleet Count *</label>
                        <input type="text" id="member-fleet" required placeholder="e.g. 45 Trucks" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Tier *</label>
                        <select id="member-tier" required class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                            <option value="Corporate Member">Corporate Member</option>
                            <option value="Executive Member">Executive Member</option>
                            <option value="Associate Member">Associate Member</option>
                        </select>
                    </div>
                </div>
                <div class="pt-4 flex justify-end gap-3">
                    <button type="button" class="admin-modal-close px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-medium">Cancel</button>
                    <button type="submit" class="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold shadow-sm">Save Member</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal 2: Post Vacancy -->
    <div id="admin-modal-vacancy" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-100">
            <div class="flex justify-between items-center mb-6 pb-3 border-b border-slate-100">
                <h3 class="font-bold text-lg text-slate-900">Post New Career Vacancy</h3>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <form id="admin-form-new-vacancy" class="space-y-4 text-sm">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Job Title *</label>
                    <input type="text" id="vacancy-title" required placeholder="e.g. Customs Transit Liaison Officer" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Station / Location *</label>
                        <input type="text" id="vacancy-station" required placeholder="e.g. Galafi Border Post" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Contract Type *</label>
                        <select id="vacancy-type" required class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                            <option value="Full-Time">Full-Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Part-Time">Part-Time</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Closing Date *</label>
                    <input type="text" id="vacancy-deadline" required placeholder="e.g. Dec 15, 2026" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                </div>
                <div class="pt-4 flex justify-end gap-3">
                    <button type="button" class="admin-modal-close px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-medium">Cancel</button>
                    <button type="submit" class="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold shadow-sm">Publish Vacancy</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal 3: Create Article -->
    <div id="admin-modal-news" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-100">
            <div class="flex justify-between items-center mb-6 pb-3 border-b border-slate-100">
                <h3 class="font-bold text-lg text-slate-900">Publish News or Bulletin</h3>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <form id="admin-form-new-news" class="space-y-4 text-sm">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Headline *</label>
                    <input type="text" id="news-title" required placeholder="e.g. New Bilateral Agreement Signed at Galafi" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Category *</label>
                        <select id="news-category" required class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                            <option value="Industry News">Industry News</option>
                            <option value="Corridor Update">Corridor Update</option>
                            <option value="Safety & Welfare">Safety & Welfare</option>
                            <option value="Policy & Law">Policy & Law</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Status *</label>
                        <select id="news-status" required class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                            <option value="Published">Published</option>
                            <option value="Draft">Draft</option>
                        </select>
                    </div>
                </div>
                <div class="pt-4 flex justify-end gap-3">
                    <button type="button" class="admin-modal-close px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-medium">Cancel</button>
                    <button type="submit" class="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold shadow-sm">Save & Post</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal 4: Add Partner -->
    <div id="admin-modal-partner" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-100">
            <div class="flex justify-between items-center mb-6 pb-3 border-b border-slate-100">
                <h3 class="font-bold text-lg text-slate-900">Add Strategic Partner / Sponsor</h3>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <form id="admin-form-new-partner" class="space-y-4 text-sm">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Partner Organization Name *</label>
                    <input type="text" id="partner-name" required placeholder="e.g. Ethiopian Insurance Corporation" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Sector / Type *</label>
                        <input type="text" id="partner-sector" required placeholder="e.g. Commercial Underwriting" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Agreement Tier *</label>
                        <select id="partner-tier" required class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                            <option value="Institutional Accord">Institutional Accord</option>
                            <option value="Tier 1 Partner">Tier 1 Partner</option>
                            <option value="Corporate Sponsor">Corporate Sponsor</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Scope / Collaboration Overview</label>
                    <input type="text" id="partner-desc" placeholder="e.g. Comprehensive commercial fleet and cargo underwriting" class="w-full px-3.5 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
                </div>
                <div class="pt-4 flex justify-end gap-3">
                    <button type="button" class="admin-modal-close px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-medium">Cancel</button>
                    <button type="submit" class="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold shadow-sm">Save Partner</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Toast Notification -->
    <div id="toast" class="fixed bottom-6 right-6 bg-slate-900 text-white px-6 py-3 rounded-xl shadow-2xl transform translate-y-20 opacity-0 transition-all duration-300 z-50 text-sm font-medium flex items-center gap-3">
        <i class="fa-solid fa-circle-check text-primary-400"></i>
        <span id="toastMessage">Action completed successfully</span>
    </div>

    
`,Gv={title:"Admin Dashboard - ETEF",markup:Uv},Yv=`
    ${$e("/privacy","ENG")}

    <main class="flex-grow bg-slate-50 py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2">
                    <li class="inline-flex items-center">
                        <a href="/" class="hover:text-primary-600 transition-colors">Home</a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <span class="mx-2 text-slate-400">/</span>
                            <span class="text-primary-600 font-medium">Privacy Policy</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <article class="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
                <header class="border-b border-slate-200 pb-8 mb-8">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2 block">Official Governance</span>
                    <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Privacy & Data Governance Policy</h1>
                    <div class="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                        <span><i class="fa-regular fa-calendar mr-1"></i> Effective Date: January 1, 2026</span>
                        <span>•</span>
                        <span><i class="fa-solid fa-shield-halved mr-1 text-primary-600"></i> Secretariat Reference: ETEF-POL-2026/01</span>
                    </div>
                </header>

                <div class="prose max-w-none text-slate-700 space-y-8 leading-relaxed text-sm sm:text-base">
                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            1. Federation Mandate & Commitment
                        </h2>
                        <p>
                            The Ethiopian Transport Employers Federation (ETEF) represents commercial road freight, intercity transit, dry port operators, and regional transport associations across Ethiopia. We hold member and public data with strict confidentiality, maintaining governance protocols in alignment with Ethiopian data privacy guidelines, trade association regulations, and international commercial transport standards.
                        </p>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            2. Information We Collect
                        </h2>
                        <p class="mb-3">We collect organizational and contact details solely to manage federation activities and represent transport operators effectively:</p>
                        <ul class="list-disc pl-6 space-y-2 text-slate-600">
                            <li><strong>Member Organization Data:</strong> Registered company name, commercial registration number, operational sector (freight, passenger, transit), fleet size, and office address.</li>
                            <li><strong>Authorized Representative Details:</strong> Names, executive designations, official telephone numbers, and email addresses of appointed liaisons and board members.</li>
                            <li><strong>Public Inquiries & CV Submissions:</strong> Information provided voluntarily through our official contact forms, talent network applications, or email correspondence with the Secretariat.</li>
                            <li><strong>Technical Log Data:</strong> Minimal website telemetry used strictly for performance optimization and cybersecurity.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            3. Lawful Purpose & Usage
                        </h2>
                        <p class="mb-3">All collected data is utilized exclusively for genuine Federation mandates:</p>
                        <ul class="list-disc pl-6 space-y-2 text-slate-600">
                            <li>Representing transport employers in tripartite policy consultations with federal regulatory bodies.</li>
                            <li>Distributing regulatory alerts, customs updates, road safety guidelines, and emergency corridor notifications.</li>
                            <li>Processing membership renewals, issuing official accreditation letters, and organizing annual general assemblies.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            4. Protection Against Commercial Disclosure
                        </h2>
                        <p>
                            ETEF does not sell, rent, monetize, or disclose member information to third-party commercial advertisers or brokers under any circumstance. Information is only shared when explicitly authorized by the member or mandated by statutory legal process under Ethiopian law.
                        </p>
                    </section>

                    <section class="border-t border-slate-200 pt-6 mt-8">
                        <div class="bg-primary-50 rounded-xl p-5 border border-primary-100 flex items-start gap-4">
                            <div class="text-primary-600 text-2xl mt-1">
                                <i class="fa-solid fa-building-columns"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-primary-900 text-base mb-1">Secretariat Data Office</h3>
                                <p class="text-primary-800 text-xs sm:text-sm">
                                    Ethiopian Transport Employers Federation Secretariat<br />
                                    Kirkos Sub-City, Addis Ababa, Ethiopia<br />
                                    Email: <a href="mailto:ethtransfed@gmail.com" class="font-semibold underline">ethtransfed@gmail.com</a> | Tel: +251 11 4717787
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    </main>

    ${Je("ENG")}
`,Fv=`
    ${$e("/privacy","አማ")}

    <main class="flex-grow bg-slate-50 py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2">
                    <li class="inline-flex items-center">
                        <a href="/" class="hover:text-primary-600 transition-colors">መነሻ</a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <span class="mx-2 text-slate-400">/</span>
                            <span class="text-primary-600 font-medium">የግላዊነት ፖሊሲ</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <article class="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
                <header class="border-b border-slate-200 pb-8 mb-8">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2 block">ይፋዊ ደንብ</span>
                    <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">የግላዊነትና የመረጃ ጥበቃ ፖሊሲ</h1>
                    <div class="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                        <span><i class="fa-regular fa-calendar mr-1"></i> የተሻሻለበት ቀን፡ ጥር 1 ቀን 2018 ዓ/ም</span>
                        <span>•</span>
                        <span><i class="fa-solid fa-shield-halved mr-1 text-primary-600"></i> የሴክሬታሪያት ማጣቀሻ፡ ኢትራአፌ-ፖሊሲ-2026/01</span>
                    </div>
                </header>

                <div class="prose max-w-none text-slate-700 space-y-8 leading-relaxed text-sm sm:text-base">
                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            1. የፌዴሬሽኑ ኃላፊነትና ቁርጠኝነት
                        </h2>
                        <p>
                            የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን የከባድ ጭነት፣ የሕዝብ ትራንስፖርት፣ የደረቅ ወደብ ኦፕሬተሮችንና የክልል አሠሪ ማኅበራትን በበላይነት ይወክላል። የአባላትና የሕዝብ መረጃዎችን በሚስጥር የመጠበቅና በሕጉ መሠረት የማስተዳደር ሙሉ ኃላፊነት አለበት።
                        </p>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            2. የምንሰበስባቸው መረጃዎች
                        </h2>
                        <p class="mb-3">የፌዴሬሽኑን ተልዕኮ በአግባቡ ለመወጣት የሚከተሉትን ህጋዊ መረጃዎች እንሰበስባለን፡</p>
                        <ul class="list-disc pl-6 space-y-2 text-slate-600">
                            <li><strong>የአባል ድርጅት መረጃዎች፡</strong> የተመዘገበ የድርጅት ስም፣ የንግድ ምዝገባ ቁጥር፣ የስምሪት ዘርፍ፣ የተሽከርካሪዎች ብዛትና አድራሻ።</li>
                            <li><strong>የተወካዮች ዝርዝር፡</strong> የኃላፊዎች ስም፣ የሥራ መደብ፣ ስልክ ቁጥርና ኢሜይል አድራሻ።</li>
                            <li><strong>ማመልከቻዎችና ጥያቄዎች፡</strong> በይፋዊ ቅጾች አማካኝነት በፈቃደኝነት የሚቀርቡ መረጃዎች።</li>
                        </ul>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            3. የመረጃው ጥቅም
                        </h2>
                        <p class="mb-3">የተሰበሰቡ መረጃዎች ለፌዴሬሽኑ ይፋዊ ተግባራት ብቻ ይውላሉ፡</p>
                        <ul class="list-disc pl-6 space-y-2 text-slate-600">
                            <li>የትራንስፖርት አሠሪዎችን በመንግሥትና በተቆጣጣሪ አካላት ፊት በብቃት ለመወከል።</li>
                            <li>ወቅታዊ የኮሪደር፣ የጉምሩክና የደህንነት መረጃዎችን ለአባላት ለማሰራጨት።</li>
                            <li>የአባልነት እድሳትን ለማከናወንና ሕጋዊ የማረጋገጫ ደብዳቤዎችን ለመስጠት።</li>
                        </ul>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            4. መረጃዎችን ለሶስተኛ ወገን አለማስተላለፍ
                        </h2>
                        <p>
                            ኢትራአፌ የአባላቱን መረጃ ለንግድ ማስታወቂያ ወይም ለደላሎች በምንም ዓይነት ሁኔታ አሳልፎ አይሰጥም:: መረጃ የሚጋራው በሕግ በተደነገገው አግባብ ወይም በአባሉ ፈቃድ ብቻ ነው።
                        </p>
                    </section>

                    <section class="border-t border-slate-200 pt-6 mt-8">
                        <div class="bg-primary-50 rounded-xl p-5 border border-primary-100 flex items-start gap-4">
                            <div class="text-primary-600 text-2xl mt-1">
                                <i class="fa-solid fa-building-columns"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-primary-900 text-base mb-1">የሴክሬታሪያት የመረጃ ጥበቃ ቢሮ</h3>
                                <p class="text-primary-800 text-xs sm:text-sm">
                                    የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን ሴክሬታሪያት<br />
                                    ቂርቆስ ክፍለ ከተማ፣ አዲስ አበባ፣ ኢትዮጵያ<br />
                                    ኢሜይል፡ <a href="mailto:ethtransfed@gmail.com" class="font-semibold underline">ethtransfed@gmail.com</a> | ስልክ፡ +251 11 4717787
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    </main>

    ${Je("አማ")}
`,u0={title:{ENG:"Privacy Policy - Ethiopian Transport Employers Federation",አማ:"የግላዊነት ፖሊሲ - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን"},markup:{ENG:Yv,አማ:Fv}},Vv=`
    ${$e("/terms","ENG")}

    <main class="flex-grow bg-slate-50 py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2">
                    <li class="inline-flex items-center">
                        <a href="/" class="hover:text-primary-600 transition-colors">Home</a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <span class="mx-2 text-slate-400">/</span>
                            <span class="text-primary-600 font-medium">Terms of Service</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <article class="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
                <header class="border-b border-slate-200 pb-8 mb-8">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2 block">Statutory Terms</span>
                    <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Terms of Service & Portal Governance</h1>
                    <div class="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                        <span><i class="fa-regular fa-calendar mr-1"></i> Effective Date: January 1, 2026</span>
                        <span>•</span>
                        <span><i class="fa-solid fa-scale-balanced mr-1 text-primary-600"></i> Regulatory Ref: Proclamation No. 1156/2012</span>
                    </div>
                </header>

                <div class="prose max-w-none text-slate-700 space-y-8 leading-relaxed text-sm sm:text-base">
                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            1. Acceptance of Terms & Legal Framework
                        </h2>
                        <p>
                            By accessing or using the official digital platform of the Ethiopian Transport Employers Federation (ETEF), member associations, operators, and public users agree to comply with these Terms of Service. These terms are established pursuant to FDRE Constitution Article 31 and Labor Proclamation No. 1156/2012 governing certified employers' federations.
                        </p>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            2. Membership Standards & Codes of Conduct
                        </h2>
                        <p class="mb-3">All member organizations, affiliates, and representatives participating in the Federation must uphold highest industry standards:</p>
                        <ul class="list-disc pl-6 space-y-2 text-slate-600">
                            <li>Maintain valid commercial operating licenses, vehicle roadworthiness certifications, and mandatory third-party insurance.</li>
                            <li>Comply with federal axle-load limits, transit safety directives, and statutory labor agreements.</li>
                            <li>Support industrial peace through tripartite dialogue and honor ratified collective bargaining pacts.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            3. Intellectual Property & Official Publications
                        </h2>
                        <p>
                            All publications, policy advisories, tariff schedules, corridor benchmark reports, and official branding hosted on this platform are the statutory intellectual property of the Ethiopian Transport Employers Federation. Unauthorized reproduction or commercial distribution without written consent is strictly prohibited.
                        </p>
                    </section>

                    <section class="border-t border-slate-200 pt-6 mt-8">
                        <div class="bg-primary-50 rounded-xl p-5 border border-primary-100 flex items-start gap-4">
                            <div class="text-primary-600 text-2xl mt-1">
                                <i class="fa-solid fa-gavel"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-primary-900 text-base mb-1">Legal Affairs Directorate</h3>
                                <p class="text-primary-800 text-xs sm:text-sm">
                                    Ethiopian Transport Employers Federation Secretariat<br />
                                    Kirkos Sub-City, Addis Ababa, Ethiopia<br />
                                    Email: <a href="mailto:ethtransfed@gmail.com" class="font-semibold underline">ethtransfed@gmail.com</a> | Tel: +251 11 4717787
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    </main>

    ${Je("ENG")}
`,Qv=`
    ${$e("/terms","አማ")}

    <main class="flex-grow bg-slate-50 py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2">
                    <li class="inline-flex items-center">
                        <a href="/" class="hover:text-primary-600 transition-colors">መነሻ</a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <span class="mx-2 text-slate-400">/</span>
                            <span class="text-primary-600 font-medium">የአጠቃቀም ደንቦች</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <article class="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
                <header class="border-b border-slate-200 pb-8 mb-8">
                    <span class="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2 block">ሕጋዊ ደንብ</span>
                    <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">የአጠቃቀምና የአባልነት ደንቦች</h1>
                    <div class="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                        <span><i class="fa-regular fa-calendar mr-1"></i> የተሻሻለበት ቀን፡ ጥር 1 ቀን 2018 ዓ/ም</span>
                        <span>•</span>
                        <span><i class="fa-solid fa-scale-balanced mr-1 text-primary-600"></i> የሕግ ማጣቀሻ፡ አዋጅ ቁጥር 1156/2012</span>
                    </div>
                </header>

                <div class="prose max-w-none text-slate-700 space-y-8 leading-relaxed text-sm sm:text-base">
                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            1. የደንቡ ተፈጻሚነትና ሕጋዊ ማዕቀፍ
                        </h2>
                        <p>
                            የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን ይፋዊ ፖርታልን የሚጎበኙ፣ የሚጠቀሙና በአባልነት የተመዘገቡ አካላት በሙሉ ይህንን የአጠቃቀም ደንብ ለማክበር ይስማማሉ። ይህ ደንብ በኢፌዲሪ ሕገ-መንግሥት አንቀጽ 31 እና በአሠሪና ሠራተኛ አዋጅ ቁጥር 1156/2012 መሠረት የተዘጋጀ ነው።
                        </p>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            2. የአባላት ሥነ-ምግባርና ግዴታዎች
                        </h2>
                        <p class="mb-3">ሁሉም አባል ድርጅቶችና ማኅበራት የሚከተሉትን ሙያዊና ሕጋዊ ግዴታዎች ማክበር አለባቸው፡</p>
                        <ul class="list-disc pl-6 space-y-2 text-slate-600">
                            <li>ሕጋዊ የንግድ ፈቃድ፣ የተሽከርካሪ ብቃት ማረጋገጫና የሶስተኛ ወገን መድን ሽፋን ማሟላት።</li>
                            <li>የክብደት ልኬት ገደቦችን፣ የመንገድ ደህንነት መመሪያዎችንና የትራንስፖርት ሕጎችን ማክበር።</li>
                            <li>የኢንዱስትሪ ሰላምን መጠበቅና የተደረሱ የኅብረት ስምምነቶችን ተግባራዊ ማድረግ።</li>
                        </ul>
                    </section>

                    <section>
                        <h2 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <span class="w-2 h-6 bg-primary-600 rounded-full inline-block"></span>
                            3. የንብረትነትና የጽሑፍ መብት ጥበቃ
                        </h2>
                        <p>
                            በዚህ ፖርታል ላይ የሚወጡ የፌዴሬሽኑ ጥናቶች፣ የታሪፍ ሰነዶች፣ መመሪያዎችና ይፋዊ መግለጫዎች የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን የሕግ ንብረቶች ናቸው:: ያለጽሑፍ ፈቃድ ለንግድ ጥቅም ማዋል የተከለከለ ነው።
                        </p>
                    </section>

                    <section class="border-t border-slate-200 pt-6 mt-8">
                        <div class="bg-primary-50 rounded-xl p-5 border border-primary-100 flex items-start gap-4">
                            <div class="text-primary-600 text-2xl mt-1">
                                <i class="fa-solid fa-gavel"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-primary-900 text-base mb-1">የሕግ ጉዳዮች ዳይሬክቶሬት</h3>
                                <p class="text-primary-800 text-xs sm:text-sm">
                                    የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን ሴክሬታሪያት<br />
                                    ቂርቆስ ክፍለ ከተማ፣ አዲስ አበባ፣ ኢትዮጵያ<br />
                                    ኢሜይል፡ <a href="mailto:ethtransfed@gmail.com" class="font-semibold underline">ethtransfed@gmail.com</a> | ስልክ፡ +251 11 4717787
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    </main>

    ${Je("አማ")}
`,p0={title:{ENG:"Terms of Service - Ethiopian Transport Employers Federation",አማ:"የአጠቃቀም ደንቦች - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን"},markup:{ENG:Vv,አማ:Qv}},Xv=`
    ${$e("","ENG")}

    <main class="flex-grow flex items-center justify-center py-20 px-4">
        <div class="max-w-xl text-center">
            <div class="w-24 h-24 mx-auto mb-6 bg-primary-50 text-primary-600 rounded-3xl flex items-center justify-center text-4xl shadow-sm border border-primary-100">
                <i class="fa-solid fa-compass-drafting"></i>
            </div>
            <span class="text-xs font-bold text-primary-600 uppercase tracking-widest block mb-2">Error 404</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Destination Not Found</h1>
            <p class="text-slate-600 text-base leading-relaxed mb-8">
                The resource or page you are looking for may have been updated, relocated, or is no longer available at this address.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="/" class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-colors shadow-sm inline-flex items-center gap-2">
                    <i class="fa-solid fa-house"></i> Return to Home
                </a>
                <a href="/news" class="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-colors inline-flex items-center gap-2">
                    <i class="fa-solid fa-newspaper"></i> Latest News
                </a>
                <a href="/contact" class="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-colors inline-flex items-center gap-2">
                    <i class="fa-solid fa-envelope"></i> Contact Secretariat
                </a>
            </div>
        </div>
    </main>

    ${Je("ENG")}
`,Zv=`
    ${$e("","አማ")}

    <main class="flex-grow flex items-center justify-center py-20 px-4">
        <div class="max-w-xl text-center">
            <div class="w-24 h-24 mx-auto mb-6 bg-primary-50 text-primary-600 rounded-3xl flex items-center justify-center text-4xl shadow-sm border border-primary-100">
                <i class="fa-solid fa-compass-drafting"></i>
            </div>
            <span class="text-xs font-bold text-primary-600 uppercase tracking-widest block mb-2">ስህተት 404</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">የተጠየቀው ገጽ አልተገኘም</h1>
            <p class="text-slate-600 text-base leading-relaxed mb-8">
                የፈለጉት ገጽ ወይም መረጃ ተዛውሯል፣ ተሰርዟል ወይም በዚህ አድራሻ አይገኝም። እባክዎ ወደ መነሻ ገጽ ይመለሱ ወይም ሌሎችን አማራጮች ይጠቀሙ።
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="/" class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-colors shadow-sm inline-flex items-center gap-2">
                    <i class="fa-solid fa-house"></i> ወደ መነሻ ገጽ ይመለሱ
                </a>
                <a href="/news" class="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-colors inline-flex items-center gap-2">
                    <i class="fa-solid fa-newspaper"></i> ወቅታዊ ዜናዎች
                </a>
                <a href="/contact" class="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-colors inline-flex items-center gap-2">
                    <i class="fa-solid fa-envelope"></i> ዋና ጽሕፈት ቤቱን ያነጋግሩ
                </a>
            </div>
        </div>
    </main>

    ${Je("አማ")}
`,Kv={title:{ENG:"404 - Page Not Found | ETEF",አማ:"404 - ገጹ አልተገኘም | ኢትራአፌ"},markup:{ENG:Xv,አማ:Zv}},Kl={berehane:{name:"Ato Berehane Zeru",role:"President, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/board_president_dr_dawit.jpg",experience:"Founding Leader & Senior Transport Industry Principal",education:"Transport Enterprise Leadership & Commercial Fleet Governance",bio:["Ato Berehane Zeru serves as the President of the Board of Directors of the Ethiopian Transport Employers' Federation (ETEF). Under his visionary leadership, transporters across Ethiopia united to establish an apex national federation representing commercial freight and passenger carriers.","He was central to mobilizing 17 employers' associations—comprising over 6,652 members—to attain official legal certification of recognition from the Ministry of Labor and Social Affairs on Ginbot 4, 2010 E.C. (May 12, 2018).","As President, he leads the Federation's high-level dialogue with federal ministries, parliamentary committees, and international tripartite social partners, defending members' legal and economic rights."],responsibilities:["Presiding over the Federation General Assembly and Executive Board meetings","Representing Ethiopian transport employers before federal authorities and international forums","Directing national advocacy for industrial peace and regulatory protection"]},mesele:{name:"Ato Mesele Hagos",role:"Vice President, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/board_vp_tigist.jpg",experience:"Senior Transport Executive & Collective Bargaining Leader",education:"Business Management & Industrial Relations",bio:["Ato Mesele Hagos serves as the Vice President of the Board of Directors of ETEF. He works tirelessly to advance the operational efficiency, safety, and economic viability of transport operations nationwide.","He has been an ardent champion of industrial peace, collective bargaining agreements, and constructive social dialogue between transport employers, government regulatory agencies, and labor syndicates.","He plays an instrumental role in resolving commercial disputes, ensuring fair labor regulations under Proclamation No. 1156/2012, and coordinating capacity-building programs."],responsibilities:["Supporting the President in executive leadership and strategic sector oversight","Leading collective bargaining negotiations and industrial dispute resolution","Coordinating member satisfaction, welfare, and market networking initiatives"]},derje:{name:"Ato Derje Legesse",role:"Secretary, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/board_sec_yared.jpg",experience:"Secretariat Administration, Regulatory Law & Documentation",education:"Law & Public Administration",bio:["Ato Derje Legesse serves as the Secretary of the Board of Directors of ETEF. He manages institutional governance records, statutory documentation, and official communications with affiliated associations.","His legal and administrative acumen ensures the Federation adheres to constitutional standards, labor proclamations, and ratified international conventions.","He regularly oversees the compilation of collective bargaining agreements, member memoranda of association, and legislative amendment submissions to the government."],responsibilities:["Managing Executive Board records, documentation, and statutory filings","Overseeing legal compliance with FDRE Constitution Article 31 and Labor Proclamation 1156/2012","Directing member communications and secretarial governance"]},tadsse:{name:"Ato Tadsse Ejegu",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/board_regional_bereket.jpg",experience:"Commercial Haulier Operations & Fleet Coordination",education:"Transport Logistics Management",bio:["Ato Tadsse Ejegu is an esteemed Member of the ETEF Board of Directors. He brings decades of operational experience in commercial transport, route staging, and inter-association cooperation.","He actively advises on the enactment and amendment of transport proclamations and regulations to safeguard employers' rights and business sustainability."],responsibilities:["Advising on route operations and regional transport logistics","Contributing to national legislative and tariff review panels"]},dejene:{name:"Ato Dejene Luchie",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/board_logistics_selamawit.jpg",experience:"Dry Cargo Logistics & Regional Association Affairs",education:"Business Administration & Logistics",bio:["Ato Dejene Luchie is a founding pioneer who played an active role dating back to the Dry Cargo Associations Union established in Hidar 2009 E.C. He serves as an executive voice for freight hauliers and member associations."],responsibilities:["Liaison with dry cargo association members and regional operators","Supporting member rights advocacy and conflict prevention"]},nurdin:{name:"Ato Nurdin Ditamo",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/board_policy_helen.jpg",experience:"Fleet Management & Commercial Operator Representation",education:"Transport Administration",bio:["Ato Nurdin Ditamo is a dedicated Board Member focused on modernizing member operations through contemporary technological advancements, training, and occupational health and safety standards."],responsibilities:["Promoting modern fleet technologies and Kaizen productivity methods","Monitoring operator welfare and fair tax advisory services"]},mekonnen:{name:"Ato Mekonnen Workie",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/board_president_dr_dawit.jpg",experience:"Transport Operations & Strategic Enterprise Planning",education:"Economics & Transport Management",bio:["Ato Mekonnen Workie contributes deep industry insight to ETEF's executive decisions, championing business planning, competitive advantage training, and market networking for member carriers."],responsibilities:["Leading market networking and business planning initiatives","Overseeing capacity building in leadership and governance"]},seid:{name:"Ato Seid Ibrahim",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/board_vp_tigist.jpg",experience:"Cross-Corridor Freight & Association Leadership",education:"Transport Operations",bio:["Ato Seid Ibrahim represents commercial carriers operating along critical national corridors, advocating for streamlined checkpoint procedures, fair transit tariffs, and driver safety."],responsibilities:["Corridor operations monitoring and trade barrier alleviation","Supporting member defense in transport commercial tribunals"]},msfin:{name:"Ato Msfin Eshetu",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/board_sec_yared.jpg",experience:"Passenger & Freight Fleet Coordination",education:"Automotive Technology & Fleet Management",bio:["Ato Msfin Eshetu works to ensure high operational efficiency and safety across affiliated fleets, coordinating training on management, labor law, and occupational health."],responsibilities:["Safety standards oversight and vehicle roadworthiness advocacy","Liaison with labor and vocational training institutes"]},mohammed:{name:"Ato Mohammed Hassan",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/board_regional_bereket.jpg",experience:"Regional Transport Associations & Commercial Haulage",education:"Public Relations & Transport Management",bio:["Ato Mohammed Hassan champions the voices of regional transport operators, ensuring that national policies reflect ground realities across all regions and corridor checkpoints."],responsibilities:["Regional member relations and inter-regional route mediation","Bilateral forum organization and stakeholder consultation"]},abeba:{name:"Ato Abeba Kassa",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/board_logistics_selamawit.jpg",experience:"Commercial Logistics & Transport Enterprise Growth",education:"Logistics & Supply Chain Management",bio:["Ato Abeba Kassa brings extensive expertise in transport business sustainability, collective agreement negotiations, and promoting public-private partnerships."],responsibilities:["Promoting public-private dialogue and trade exhibitions","Advising on employer-employee collective agreements"]},yergalem:{name:"Ato Yergalem Sefani",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/board_policy_helen.jpg",experience:"Transport Operations & Legal Defense Coordination",education:"Commercial Law & Transport Operations",bio:["Ato Yergalem Sefani coordinates legal advisory support, dispute resolution, and court representation for members confronting regulatory or commercial challenges."],responsibilities:["Coordinating legal representation before courts and administrative tribunals","Reviewing drafts of national transport proclamations and directives"]},engeda:{name:"Ato Engeda H/Maryam",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/board_president_dr_dawit.jpg",experience:"Commercial Transport Management & Fleet Innovation",education:"Business Administration & Fleet Systems",bio:["Ato Engeda H/Maryam is a visionary Board Member advocating for the adoption of contemporary technological tools, fuel efficiency, and professional development programs."],responsibilities:["Advancing technological adoption and digital management systems","Organizing domestic and international experience-sharing programs"]}},$l={berehane:{name:"አቶ ብርሃኔ ዘርዑ",role:"የዳይሬክተሮች ቦርድ ፕሬዝዳንት",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/board_president_dr_dawit.jpg",experience:"መሥራች መሪ እና የትራንስፖርት ዘርፍ ከፍተኛ ባለሙያ",education:"የትራንስፖርት ድርጅት አመራር እና የንግድ ተሽከርካሪዎች አስተዳደር",bio:["አቶ ብርሃኔ ዘርዑ የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን የሥራ አስፈጻሚ ቦርድ ፕሬዝዳንት በመሆን በማገልገል ላይ ይገኛሉ። በእሳቸው መሪነት በመላ ሀገሪቱ የሚገኙ የትራንስፖርት አሠሪዎች በአንድነት ተደራጅተው የንግድ ጭነት እና የተሳፋሪ አጓጓዦችን የሚወክል ጠንካራ ብሔራዊ ፌዴሬሽን መሥርተዋል።","በግንቦት 04 ቀን 2010 ዓ/ም 17 የአሠሪ ማኅበራትንና ከ6,652 በላይ አባላትን በማስተባበር ከሠራተኛና ማኅበራዊ ጉዳይ ሚኒስቴር ይፋዊ የሕጋዊ ሰውነት ማረጋገጫ የምስክር ወረቀት እንዲገኝ ከፍተኛ ሚና ተጫውተዋል።","በፕሬዝዳንትነት ኃላፊነታቸው የፌዴሬሽኑን ከፍተኛ ውይይቶች ከፌዴራል ሚኒስቴር መሥሪያ ቤቶች፣ ከሕዝብ ተወካዮች ምክር ቤት እና ከዓለም አቀፍ የሦስትዮሽ አጋሮች ጋር በመምራት የአባላትን ሕጋዊና ኢኮኖሚያዊ መብቶች ያስከብራሉ።"],responsibilities:["የፌዴሬሽኑን ጠቅላላ ጉባኤ እና የሥራ አስፈጻሚ ቦርድ ስብሰባዎችን በሊቀመንበርነት መምራት","የኢትዮጵያን የትራንስፖርት አሠሪዎች በመንግሥት እና በዓለም አቀፍ መድረኮች መወከል","የኢንዱስትሪ ሰላምን እና የቁጥጥር ጥበቃን በተመለከተ ብሔራዊ ጥብቅናን መምራት"]},mesele:{name:"አቶ መሠለ ሐጎስ",role:"የዳይሬክተሮች ቦርድ ም/ፕሬዝዳንት",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/board_vp_tigist.jpg",experience:"ከፍተኛ የትራንስፖርት ሥራ አስፈፃሚ እና የጋራ ድርድር መሪ",education:"የቢዝነስ ማኔጅመንት እና የኢንዱስትሪ ግንኙነት",bio:["አቶ መሠለ ሐጎስ የኢትራአፌ የዳይሬክተሮች ቦርድ ም/ፕሬዝዳንት በመሆን ያገለግላሉ። በመላ ሀገሪቱ የትራንስፖርት ስምሪት ቅልጥፍናን፣ ደህንነትንና ዘላቂነትን ለማሳደግ በትጋት ይሰራሉ።","የኢንዱስትሪ ሰላም፣ የጋራ ድርድር ስምምነቶች እና በትራንስፖርት አሠሪዎች፣ በመንግሥት ተቆጣጣሪ አካላት እና በሠራተኛ ማኅበራት መካከል ገንቢ ውይይት እንዲኖር የበኩላቸውን አስተዋጽኦ ያበረክታሉ።","የንግድ አለመግባባቶችን በመፍታት፣ በአዋጅ ቁጥር 1156/2012 መሠረት ፍትሃዊ የሥራ ሁኔታዎች እንዲሰፍኑ በማድረግ እና የአቅም ግንባታ ስልጠናዎችን በማስተባበር ረገድ ቁልፍ ሚና አላቸው።"],responsibilities:["ፕሬዝዳንቱን በከፍተኛ አመራርና በስትራቴጂካዊ የዘርፍ ክትትል ስራዎች መደገፍ","የጋራ ድርድር ውይይቶችንና የኢንዱስትሪ አለመግባባቶች አፈታትን በበላይነት መምራት","የአባላት እርካታ፣ ደህንነት እና የገበያ ትስስር ተነሳሽነቶችን ማስተባበር"]},derje:{name:"አቶ ደረጀ ለገሠ",role:"የዳይሬክተሮች ቦርድ ዋና ፀሐፊ",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/board_sec_yared.jpg",experience:"የጽሕፈት ቤት አስተዳደር፣ የሕግ ጉዳዮች እና የሰነድ ዝግጅት",education:"ሕግ እና የሕዝብ አስተዳደር",bio:["አቶ ደረጀ ለገሠ የኢትራአፌ የዳይሬክተሮች ቦርድ ዋና ፀሐፊ በመሆን ያገለግላሉ። የተቋማዊ አስተዳደር መዛግብትን፣ ሕጋዊ ሰነዶችን እና ከአባል ማኅበራት ጋር የሚደረጉ ይፋዊ ግንኙነቶችን ይመራሉ።","የሕግና የአስተዳደር ዕውቀታቸው ፌዴሬሽኑ የሕገ-መንግሥት ድንጋጌዎችን፣ የሠራተኛ አዋጆችን እና የተፈረሙ ዓለም አቀፍ ስምምነቶችን አክብሮ እንዲሰራ ያረጋግጣል።","የጋራ ድርድር ሰነዶች፣ የአባላት መመስረቻ ጽሑፎች እና ለመንግሥት የሚቀርቡ የሕግ ማሻሻያ ጥናቶች በበላይነት እንዲዘጋጁ ያደርጋሉ።"],responsibilities:["የሥራ አስፈጻሚ ቦርድ መዛግብትን፣ ሰነዶችን እና ሕጋዊ ሪፖርቶችን ማስተዳደር","በሕገ-መንግሥቱ አንቀጽ 31 እና በአዋጅ 1156/2012 መሠረት ሕጋዊ ተገዢነትን መከታተል","የአባላት ግንኙነትን እና የጽሕፈት ቤቱን አስተዳደራዊ ተግባራት ማስተባበር"]},tadsse:{name:"አቶ ታደሰ እጅጉ",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/board_regional_bereket.jpg",experience:"የንግድ ጭነት ትራንስፖርት ኦፕሬሽን እና የስምሪት ቅንጅት",education:"የትራንስፖርት ሎጂስቲክስ ማኔጅመንት",bio:["አቶ ታደሰ እጅጉ የኢትራአፌ የዳይሬክተሮች ቦርድ አባል ሲሆኑ በንግድ ትራንስፖርት፣ በመስመር ስምሪት እና በማኅበራት ቅንጅት የካበተ የበርካታ ዓመታት ልምድ አላቸው።","የትራንስፖርት አዋጆችና ደንቦች ሲወጡና ሲሻሻሉ የአሠሪዎችን መብትና የንግድ ዘላቂነት እንዲያረጋግጡ የሙያ ምክር ይሰጣሉ።"],responsibilities:["በመስመር ስምሪት እና በክልላዊ ትራንስፖርት ሎጂስቲክስ ላይ የማማከር ድጋፍ መስጠት","በብሔራዊ የሕግ እና የታሪፍ ክለሳ መድረኮች ላይ ንቁ ተሳትፎ ማድረግ"]},dejene:{name:"አቶ ደጀኔ ሉጬ",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/board_logistics_selamawit.jpg",experience:"የደረቅ ጭነት ሎጂስቲክስ እና የክልል ማኅበራት ጉዳዮች",education:"የንግድ አስተዳደር እና ሎጂስቲክስ",bio:["አቶ ደጀኔ ሉጬ በህዳር 2009 ዓ/ም ከተመሰረተው የደረቅ ጭነት አሠሪዎች ማኅበራት ኅብረት ጀምሮ ንቁ ተሳትፎ ያደረጉ መሥራች አባል ናቸው። የጭነት አጓጓዦች እና የአባል ማኅበራት ድምፅ ሆነው ያገለግላሉ።"],responsibilities:["ከደረቅ ጭነት አባል ማኅበራት እና ከክልል ኦፕሬተሮች ጋር ግንኙነት መፍጠር","የአባላትን መብት የማስከበር እና አለመግባባቶችን የመከላከል ስራዎችን መደገፍ"]},nurdin:{name:"አቶ ኑረዲን ዲታሞ",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/board_policy_helen.jpg",experience:"የተሽከርካሪዎች አስተዳደር እና የንግድ አጓጓዦች ውክልና",education:"የትራንስፖርት አስተዳደር",bio:["አቶ ኑረዲን ዲታሞ የአባላትን የሥራ አፈፃፀም በዘመናዊ ቴክኖሎጂዎች፣ በስልጠና እና በሥራ አካባቢ ጤናና ደህንነት ደረጃዎች ለማዘመን በትጋት የሚሰሩ የቦርድ አባል ናቸው።"],responsibilities:["ዘመናዊ የፍሊት ቴክኖሎጂዎችን እና የካይዘን የአሰራር ጥበቦችን ማስተዋወቅ","የኦፕሬተሮችን ደህንነት እና ፍትሃዊ የግብር ምክር አገልግሎቶችን መከታተል"]},mekonnen:{name:"አቶ መኮንን ወርቄ",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/board_president_dr_dawit.jpg",experience:"የትራንስፖርት ኦፕሬሽን እና ስትራቴጂካዊ የድርጅት እቅድ",education:"ኢኮኖሚክስ እና የትራንስፖርት ማኔጅመንት",bio:["አቶ መኮንን ወርቄ ለኢትራአፌ ውሳኔዎች ጥልቅ የዘርፍ ዕውቀታቸውን ያበረክታሉ፤ ለአባል አጓጓዦች የቢዝነስ እቅድ ዝግጅት፣ የተወዳዳሪነት ስልጠና እና የገበያ ትስስር ስራዎችን ይመራሉ።"],responsibilities:["የገበያ ትስስር እና የቢዝነስ ፕላን ተነሳሽነቶችን በበላይነት መምራት","በአመራር እና በአስተዳደር ዙሪያ የአቅም ግንባታ ስልጠናዎችን ማስተባበር"]},seid:{name:"አቶ ሰዒድ ኢብራሂም",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/board_vp_tigist.jpg",experience:"የኮሪደር ተሻጋሪ ጭነት እና የማኅበራት አመራር",education:"የትራንስፖርት ኦፕሬሽን",bio:["አቶ ሰዒድ ኢብራሂም በዋና ዋና ብሔራዊ ኮሪደሮች ላይ የሚሰሩ የንግድ አጓጓዦችን ይወክላሉ፤ የተቀላጠፈ የኬላ አሰራር፣ ፍትሃዊ የትራንዚት ታሪፍ እና የአሽከርካሪዎች ደህንነት እንዲረጋገጥ ይሰራሉ።"],responsibilities:["የኮሪደር እንቅስቃሴዎችን መከታተል እና የንግድ እንቅፋቶችን ማስወገድ","በትራንስፖርት ንግድ ፍርድ ቤቶች የአባላትን ሕጋዊ መብት መደገፍ"]},msfin:{name:"አቶ መስፍን እሸቱ",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/board_sec_yared.jpg",experience:"የተሳፋሪ እና የጭነት ተሽከርካሪዎች ስምሪት ቅንጅት",education:"አውቶሞቲቭ ቴክኖሎጂ እና የፍሊት ማኔጅመንት",bio:["አቶ መስፍን እሸቱ በአባል ድርጅቶች ዘንድ ከፍተኛ የስራ ቅልጥፍና እና ደህንነት እንዲረጋገጥ ይሰራሉ፤ በማኔጅመንት፣ በሠራተኛ ሕግ እና በሙያ ጤና ዙሪያ ስልጠናዎችን ያስተባብራሉ።"],responsibilities:["የደህንነት ደረጃዎችን መቆጣጠር እና የተሽከርካሪዎች የብቃት ማረጋገጫ ድጋፍ","ከሠራተኛና ከቴክኒክና ሙያ ማሰልጠኛ ተቋማት ጋር ግንኙነት መፍጠር"]},mohammed:{name:"አቶ መሐመድ ሀሰን",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/board_regional_bereket.jpg",experience:"የክልል ትራንስፖርት ማኅበራት እና የንግድ ጭነት አገልግሎት",education:"የሕዝብ ግንኙነት እና የትራንስፖርት ማኔጅመንት",bio:["አቶ መሐመድ ሀሰን የክልል ትራንስፖርት ኦፕሬተሮችን ድምፅ ያሰማሉ፤ ሀገራዊ ፖሊሲዎች በሁሉም ክልሎችና የኮሪደር ኬላዎች ያሉትን ተጨባጭ ሁኔታዎች እንዲያገናዝቡ ይሰራሉ።"],responsibilities:["የክልል አባላት ግንኙነት እና የክልል አቋራጭ መስመሮች የማስታረቅ ስራ","የሁለትዮሽ መድረኮችን ማዘጋጀት እና ከባለድርሻ አካላት ጋር መመካከር"]},abeba:{name:"አቶ አበባው ካሣ",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/board_logistics_selamawit.jpg",experience:"የንግድ ሎጂስቲክስ እና የትራንስፖርት ድርጅት ዕድገት",education:"ሎጂስቲክስ እና የአቅርቦት ሰንሰለት አስተዳደር",bio:["አቶ አበባው ካሣ በትራንስፖርት ንግድ ዘላቂነት፣ በጋራ ስምምነት ድርድሮች እና የመንግሥትና የግል ዘርፍ አጋርነትን በማጠናከር ረገድ ሰፊ ልምድ አላቸው።"],responsibilities:["የመንግሥትና የግል ዘርፍ ውይይቶችንና የንግድ ኤግዚቢሽኖችን ማስተዋወቅ","በአሠሪና ሠራተኛ የጋራ ስምምነቶች ላይ የሙያ ምክር መስጠት"]},yergalem:{name:"አቶ ይርጋዓለም ሰፋኒ",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/board_policy_helen.jpg",experience:"የትራንስፖርት ኦፕሬሽን እና የሕግ ድጋፍ አስተባባሪነት",education:"የንግድ ሕግ እና የትራንስፖርት ኦፕሬሽን",bio:["አቶ ይርጋዓለም ሰፋኒ ከአስተዳደራዊ ወይም ከንግድ ማነቆዎች ጋር ለተጋፈጡ አባላት የሕግ ምክር አገልግሎት፣ የክርክር አፈታት እና የፍርድ ቤት ውክልና ድጋፍን ያስተባብራሉ።"],responsibilities:["በፍርድ ቤቶች እና በአስተዳደራዊ ጉባኤዎች ፊት የሕግ ውክልናን ማስተባበር","የብሔራዊ ትራንስፖርት አዋጆችና መመሪያዎች ረቂቅ ሰነዶችን መገምገም"]},engeda:{name:"አቶ እንግዳ ኃ/ማርያም",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/board_president_dr_dawit.jpg",experience:"የንግድ ትራንስፖርት አስተዳደር እና የተሽከርካሪዎች ፈጠራ",education:"የቢዝነስ አስተዳደር እና የተሽከርካሪዎች ቴክኖሎጂ",bio:["አቶ እንግዳ ኃ/ማርያም ዘመናዊ የቴክኖሎጂ መሳሪያዎችን ተግባራዊ ለማድረግ፣ የነዳጅ አጠቃቀም ቅልጥፍናን ለማሻሻል እና የሙያ ማሻሻያ ፕሮግራሞችን ለማስፋፋት የሚሰሩ የቦርድ አባል ናቸው።"],responsibilities:["የቴክኖሎጂ አጠቃቀምን እና የዲጂታል አስተዳደር ስርዓቶችን ማሳደግ","የሀገር ውስጥ እና የውጭ ሀገራት የልምድ ልውውጥ ፕሮግራሞችን ማዘጋጀት"]}};Kl.dawit=Kl.berehane;Kl.tigist=Kl.mesele;Kl.yared=Kl.derje;$l.dawit=$l.berehane;$l.tigist=$l.mesele;$l.yared=$l.derje;const $v={"shared-road":{title:"A Shared Road to a Stronger Transport Industry",category:"Industry Perspectives",date:"24 September 2026",readTime:"5 min read",image:"/images/news_mountain_truck.jpg",author:"ETEF Secretariat Editorial Team",content:["Ethiopia's commercial transport landscape is undergoing a decisive transformation. As our road network expands to connect regional agricultural hubs with industrial corridors, commercial transport employers bear the essential responsibility of keeping supply chains moving with efficiency, safety, and dignity.","In recent stakeholder forums conducted with the Ministry of Transport and Logistics and regional carrier associations, one consensus emerged clearly: fragmented operations undermine everyone. Small-scale truckers face crippling fuel price swings and parts shortages alone, while passenger bus operators struggle with inconsistent terminal tariffs.","The Ethiopian Transport Employers Federation serves as the unifying bridge. By pooling our voice, we ensure that tax policies on commercial spare parts, road user tariffs, and regional border logistics are debated with empirical data from actual fleet operators on the ground.","Moving forward, our priority focuses on three core pillars: structured social dialogue between employers and labor unions, institutionalized driver safety certification, and digital freight-matching platforms that reduce empty return trips across our international corridors."],keyTakeaways:["Fragmented operator voices reduce bargaining power on national fuel and tax regulations.","ETEF provides structured negotiation desks directly with federal ministries.","Empty return haulage can be curtailed through shared digital freight-matching networks."]},"safer-journeys":{title:"Safer Journeys Begin Before the Engine Starts",category:"Safety & Skills",date:"22 September 2026",readTime:"4 min read",image:"/images/news_mechanic_tire.jpg",author:"Eng. Dawit Kebede, Safety Director",content:["Road safety in commercial transport is not an accidental outcome—it is an operational discipline. Over 70% of preventable mechanical failures on Ethiopian highways, from brake overheating to tire blowouts, can be identified during a 15-minute daily pre-trip inspection.","ETEF has compiled an easy-to-use 10-point vehicle inspection checklist for heavy freight and inter-city passenger operators. The protocol covers tire tread depth and inflation, brake line pneumatic pressure, coupling pins, steering linkage, emergency lighting, and fire suppression readiness.","Furthermore, the federation is partnering with regional driver training institutes to implement mandatory rest breaks along the Addis Ababa–Awash–Dire Dawa route. Driver fatigue remains a top contributing factor in nocturnal rollover incidents.","Fleet operators who adopt standardized daily inspection logs have reported a 34% drop in highway breakdowns and up to 18% savings in long-term maintenance costs over a single operational fiscal year."],keyTakeaways:["A 15-minute pre-trip inspection prevents the vast majority of highway breakdowns.","Standardized vehicle checklists save up to 18% in preventative fleet maintenance.","Driver fatigue mitigation along long corridors is vital for preserving human life and freight."]},"employer-voice":{title:"Making Space for the Employer Voice",category:"Association Updates",date:"18 September 2026",readTime:"3 min read",image:"/images/news_association_meeting.jpg",author:"Yared Haile, Secretary General",content:["For decades, discussions regarding transport policy, labor guidelines, and city transit access were conducted without systematic representation from the employers who invest capital, purchase fleets, and assume commercial risks.","ETEF was founded specifically to institutionalize this voice. In our regular roundtables with the Ministry of Labor and Skills and the Ministry of Transport, we represent over 1,200 commercial employers across freight, passenger, and logistics operations.","Our agenda is constructive and solution-oriented. We advocate for balanced collective bargaining agreements that ensure fair wages and dignity for drivers while protecting operators from wildcat stoppages, arbitrary municipal transit levies, and unilateral freight confiscations during local unrest.","We encourage all regional transport associations and independent logistics enterprises to actively participate in our regional consultative committees so our national representations remain deeply rooted in current operational realities."],keyTakeaways:["Employers carry the capital risk and need structured representation in policy making.","Balanced collective bargaining agreements protect both workforce and enterprise sustainability.","Regional consultative committees ensure federal advocacy reflects local challenges."]},"everyday-costs":{title:"Understanding the Everyday Costs of Transport",category:"Industry Perspectives",date:"15 September 2026",readTime:"6 min read",image:"/images/news_logistics_hub.jpg",author:"ETEF Research & Economics Unit",content:["While fuel often captures headline attention as the largest cash outflow in fleet operations, comprehensive analysis by ETEF's economics unit reveals that tire degradation, customs demurrage, and unscheduled maintenance account for over 52% of total operational expenditure over a vehicle's life cycle.","On corridor routes with fluctuating pavement conditions, tire lifespan drops by up to 40% if inflation pressures are not adjusted for ambient temperature shifts between the Ethiopian highlands and the Rift Valley/Afar depression.","Moreover, administrative delays at dry port container check gates compound costs exponentially through demurrage penalties and driver idle pay.","By forming collective purchasing groups through ETEF, member fleets can negotiate bulk procurement of certified heavy-duty tires and lubricants, capturing volume discounts of up to 15% and safeguarding against counterfeit automotive parts."],keyTakeaways:["Tire wear and customs demurrage often exceed direct fuel expenses over time.","Temperature shifts between highlands and lowlands require specialized tire pressure protocols.","Federation collective bargaining and bulk purchasing shields members from fake spare parts."]},"transport-roundtable":{title:"What Makes a Useful Transport Roundtable?",category:"Events & Dialogue",date:"11 September 2026",readTime:"3 min read",image:"/images/news_roundtable.jpg",author:"Communications Directorate",content:["Too often, industry conferences produce lofty declarations without tangible implementation pathways. At ETEF, our symposiums and roundtables are structured around actionable policy problem-solving.","In our most recent September roundtable held in Addis Ababa, commercial freight owners, customs commissioners, and insurance underwriters sat together with one objective: creating a streamlined cargo insurance claims protocol for cross-border transit.","Rather than lecturing, the session examined three actual claims disputes, pinpointed procedural bottlenecks, and agreed on a 14-day binding claims resolution window for member operators.","This practical approach is what sets ETEF events apart. When you attend an ETEF symposium, you leave with verified resolutions, regulatory clarity, and direct contact with decision-makers."],keyTakeaways:["ETEF events focus on measurable problem-solving rather than theoretical talk.","Direct engagement with customs and insurers creates binding agreements.","A 14-day claims turnaround protocol was established for member transport fleets."]},"better-maintenance":{title:"Better Maintenance Starts with Better Records",category:"Safety & Skills",date:"08 September 2026",readTime:"4 min read",image:"/images/news_workshop_records.jpg",author:"Technical & Vocational Training Unit",content:["Fleet maintenance in many mid-sized Ethiopian transport enterprises has historically relied on memory or scattered paper receipts. When an engine fails or a gearbox shears on a steep incline, finding out who serviced the component and when becomes nearly impossible.","ETEF is rolling out a free, simplified fleet maintenance ledger template for all affiliated operators. Designed for both desktop and mobile use, the ledger tracks oil changes, brake lining replacements, tire rotation intervals, and mechanic sign-offs per vehicle chassis number.","Workshops that piloted the ledger reported a 28% decrease in repetitive breakdown repairs within three months, as recurring mechanical issues were diagnosed systematically before catastrophic failures occurred.","Additionally, having documented maintenance records increases vehicle resale value by up to 20% when upgrading commercial fleet units."],keyTakeaways:["Digital or structured logs eliminate guesswork in garage and workshop repairs.","Recurring mechanical vulnerabilities are caught before causing roadside disasters.","Documented service histories substantially boost vehicle trade-in and resale value."]},"meaningful-membership":{title:"A First Step Towards Meaningful Membership",category:"Association Updates",date:"04 September 2026",readTime:"2 min read",image:"/images/news_office_admin.jpg",author:"Member Relations Department",content:["Joining an employers federation should never be a symbolic formality. For transport operators navigating high fuel costs, competitive bidding for cargo tenders, and changing tax laws, active membership is an operational asset.","As an ETEF member, your company gains access to our legal defense desk, subsidized driver safety workshops, corridor checkpoint dispute mediation, and verified industry research reports.","Registration is transparent and straightforward: simply submit your valid business license, TIN certificate, and fleet registration details via our digital portal or at our Secretariat headquarters in Kirkos Sub-City, Addis Ababa.","Join the federation today and let us build a stronger, more resilient transport future together."],keyTakeaways:["ETEF membership delivers real operational support, legal advisory, and safety training.","Dispute mediation desks assist members during regional checkpoint delays.","Application is seamless through our official digital platform."]}},Jv={"shared-road":{title:"ወደ ጠንካራ የትራንስፖርት ኢንዱስትሪ የሚወስደው የጋራ መንገድ",category:"የኢንዱስትሪ ዕይታዎች",date:"መስከረም 14 ቀን 2017 ዓ.ም",readTime:"የ5 ደቂቃ ንባብ",image:"/images/news_mountain_truck.jpg",author:"የኢትራአፌ ዋና ጽሕፈት ቤት ኤዲቶሪያል ቡድን",content:["የኢትዮጵያ የንግድ ትራንስፖርት ዘርፍ ወሳኝ የለውጥ ሂደት ውስጥ ይገኛል። የመንገድ መረባችን የክልል የግብርና ማዕከላትን ከኢንዱስትሪ ኮሪደሮች ጋር ለማገናኘት እየሰፋ ባለበት ወቅት፣ የንግድ ትራንስፖርት አሠሪዎች የአቅርቦት ሰንሰለቱን በቅልጥፍና፣ በደህንነት እና በክብር የመጠበቅ ከፍተኛ ኃላፊነት አለባቸው።","ከትራንስፖርትና ሎጂስቲክስ ሚኒስቴር እና ከክልል አጓጓዦች ማኅበራት ጋር በተካሄዱ የውይይት መድረኮች ላይ አንድ የጋራ መግባባት በግልጽ ታይቷል፦ የተበታተነ አሰራር ሁሉንም ይጎዳል። አነስተኛ የጭነት አሽከርካሪዎች የነዳጅ ዋጋ መዋዠቅንና የመለዋወጫ እጥረትን ብቻቸውን ሲጋፈጡ፣ የተሳፋሪ አውቶቡስ ኦፕሬተሮች ደግሞ ወጥነት በሌለው የተርሚናል ታሪፍ ይቸገራሉ።","የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን እንደ አገናኝ ድልድይ ሆኖ ያገለግላል። ድምፃችንን በአንድ ላይ በማሰባሰብ በንግድ መለዋወጫዎች ቀረጥ፣ በመንገድ ተጠቃሚዎች ታሪፍ እና በክልል ድንበር ሎጂስቲክስ ላይ የሚወጡ ፖሊሲዎች ከመሬት በተገኙ ተጨባጭ መረጃዎች ላይ ተመስርተው እንዲከለሱ እናደርጋለን።","ወደፊት ስንጓዝ ቅድሚያ የምንሰጠው በሦስት ዋና ዋና ጉዳዮች ላይ ነው፦ በአሠሪዎች እና በሠራተኛ ማኅበራት መካከል የተዋቀረ ማኅበራዊ ውይይት፣ የአሽከርካሪዎች ደህንነት ማረጋገጫ ሥልጠና፣ እና በዓለም አቀፍ ኮሪደሮቻችን ላይ ባዶ የመመለስ ጉዞዎችን የሚቀንሱ የዲጂታል የጭነት ትስስር መድረኮች ናቸው።"],keyTakeaways:["የተበታተነ ድምፅ በብሔራዊ የነዳጅና የግብር ደንቦች ላይ የመደራደር አቅምን ይቀንሳል።","ኢትራአፌ በቀጥታ ከፌዴራል ሚኒስቴር መስሪያ ቤቶች ጋር የተዋቀሩ የድርድር መድረኮችን ያመቻቻል።","የጋራ ዲጂታል የጭነት ትስስር መድረኮችን በመጠቀም ባዶ መመለስን መቀነስ ይቻላል።"]},"safer-journeys":{title:"አስተማማኝ ጉዞ የሚጀምረው ሞተሩ ከመነሳቱ በፊት ነው",category:"ደህንነትና ሙያዊ ክህሎት",date:"መስከረም 12 ቀን 2017 ዓ.ም",readTime:"የ4 ደቂቃ ንባብ",image:"/images/news_mechanic_tire.jpg",author:"ኢንጂነር ዳዊት ከበደ፣ የደህንነት ዳይሬክተር",content:["በትራንስፖርት ንግድ ውስጥ የመንገድ ደህንነት በአጋጣሚ የሚገኝ ሳይሆን የአሰራር ስነ-ስርዓት ውጤት ነው። በኢትዮጵያ አውራ ጎዳናዎች ላይ ከሚከሰቱት ሊከላከሉ ከሚችሉ የሜካኒካል ብልሽቶች መካከል ከ70% በላይ የሚሆኑት—ከፍሬን መሞቅ እስከ ጎማ መፈንዳት—ከጉዞ በፊት በሚደረግ የ15 ደቂቃ ዕለታዊ ፍተሻ ሊታወቁ ይችላሉ።","ኢትራአፌ ለከባድ ጭነት እና ለአገር አቋራጭ ተሳፋሪ አጓጓዦች የሚሆን ለአጠቃቀም ቀላል የ10 ነጥብ የተሽከርካሪ ፍተሻ ዝርዝር አዘጋጅቷል። ፍተሻው የጎማውን ጥልቀትና አየር፣ የፍሬን መስመር ንፋስ ግፊት፣ ማያያዣዎችን፣ የመሪ መገጣጠሚያዎችን፣ የአደጋ ጊዜ መብራቶችን እና የእሳት ማጥፊያ ዝግጁነትን ያጠቃልላል።","በተጨማሪም ፌዴሬሽኑ ከአዲስ አበባ–አዋሽ–ድሬዳዋ መስመር ላይ የግዴታ የእረፍት ጊዜያትን ተግባራዊ ለማድረግ ከክልል የአሽከርካሪዎች ማሰልጠኛ ተቋማት ጋር በመተባበር እየሰራ ነው። የአሽከርካሪዎች ድካም በሌሊት ለሚከሰቱ የመገልበጥ አደጋዎች ዋነኛ መንስኤ ነው።","ደረጃውን የጠበቀ ዕለታዊ የፍተሻ ሰነድ የሚጠቀሙ የፍሊት ኦፕሬተሮች በአንድ በጀት ዓመት ውስጥ የመንገድ ላይ ብልሽቶችን በ34 በመቶ መቀነሳቸውን እና የረጅም ጊዜ የጥገና ወጪን እስከ 18 በመቶ መቆጠባቸውን ገልጸዋል።"],keyTakeaways:["የ15 ደቂቃ ቅድመ-ጉዞ ፍተሻ አብዛኛዎቹን የአውራ ጎዳና ብልሽቶች ይከላከላል።","ደረጃውን የጠበቀ የፍተሻ ሰነድ የጥገና ወጪን እስከ 18% ይቆጥባል።","በረጅም የኮሪደር መስመሮች ላይ የአሽከርካሪዎችን ድካም መቀነስ የሰውን ሕይወት እና ንብረት ለመታደግ ወሳኝ ነው።"]},"employer-voice":{title:"ለአሠሪዎች ድምፅ ዕውቅና መስጠት",category:"የማኅበራት ዜናዎች",date:"መስከረም 08 ቀን 2017 ዓ.ም",readTime:"የ3 ደቂቃ ንባብ",image:"/images/news_association_meeting.jpg",author:"ያሬድ ኃይሌ፣ ዋና ጸሐፊ",content:["ለአስርት ዓመታት በትራንስፖርት ፖሊሲ፣ በሠራተኛ መመሪያዎች እና በከተማ ትራንዚት ዙሪያ የሚደረጉ ውይይቶች ካፒታል ኢንቨስት የሚያደርጉትን፣ ተሽከርካሪዎችን የሚገዙትን እና የንግድ ስጋቶችን የሚወስዱትን አሠሪዎች ስልታዊ ውክልና ሳያካትቱ ቆይተዋል።","ኢትራአፌ ይህንን ክፍተት ለመሙላት እና ይፋዊ ተቋማዊ ድምፅ ለመሆን ተቋቋመ። ከሥራና ክህሎት ሚኒስቴር እና ከትራንስፖርት ሚኒስቴር ጋር በምናደርጋቸው መደበኛ የውይይት መድረኮች ከ1,200 በላይ የሚሆኑ የንግድ ጭነት፣ የተሳፋሪ እና የሎጂስቲክስ አሠሪዎችን እንወክላለን።","የውይይት አጀንዳችን ገንቢ እና መፍትሔ አፈላላጊ ነው። ለአሽከርካሪዎች ፍትሃዊ ደመወዝና ክብር የሚያረጋግጡ፣ በተመሳሳይ ጊዜም ኦፕሬተሮችን ካልተገቡ የስራ ማቆም አድማዎች፣ ከዘፈቀደ የከተማ ትራንዚት ክፍያዎች እና በአካባቢያዊ አለመረጋጋት ወቅት ከሚደርስ የጭነት መወረስ የሚከላከሉ ሚዛናዊ የጋራ ስምምነቶችን እንደግፋለን።","ብሔራዊ ውክልናችን አሁን ካለው የመሬት ላይ ተጨባጭ ሁኔታ ጋር የተቆራኘ እንዲሆን ሁሉም የክልል የትራንስፖርት ማኅበራት እና ገለልተኛ የሎጂስቲክስ ድርጅቶች በክልል የምክክር ኮሚቴዎቻችን ውስጥ በንቃት እንዲሳተፉ ጥሪ እናቀርባለን።"],keyTakeaways:["አሠሪዎች የካፒታል ስጋት ስለሚሸከሙ በፖሊሲ ዝግጅት ላይ የተዋቀረ ውክልና ያስፈልጋቸዋል።","ሚዛናዊ የጋራ ስምምነቶች የሠራተኛውን ደህንነትም ሆነ የድርጅቱን ዘላቂነት ይጠብቃሉ።","የክልል የምክክር ኮሚቴዎች ሀገራዊ ውክልናው የአካባቢ ተግዳሮቶችን እንዲያንፀባርቅ ያደርጋሉ።"]},"everyday-costs":{title:"የትራንስፖርት ዘርፍ የዕለት ተዕለት ወጪዎችን መረዳት",category:"የኢንዱስትሪ ዕይታዎች",date:"መስከረም 05 ቀን 2017 ዓ.ም",readTime:"የ6 ደቂቃ ንባብ",image:"/images/news_logistics_hub.jpg",author:"የኢትራአፌ የምርምርና ኢኮኖሚክስ ጥናት ክፍል",content:["በተሽከርካሪዎች ስምሪት ውስጥ ነዳጅ እንደ ትልቁ የወጪ ምንጭ ተደርጎ ቢታሰብም፣ በኢትራአፌ የኢኮኖሚክስ ክፍል የተደረገው አጠቃላይ ትንተና እንደሚያሳየው የጎማ መበላት፣ የጉምሩክ መዘግየት ኪሳራ እና ያልታቀደ ጥገና ከተሽከርካሪው የህይወት ዘመን አጠቃላይ የኦፕሬሽን ወጪ ከ52 በመቶ በላይ ይሸፍናሉ።","የመንገድ ሁኔታ በሚቀያየርባቸው የኮሪደር መስመሮች ላይ፣ በደጋማው የኢትዮጵያ ክፍል እና በስምጥ ሸለቆ/አፋር ዝቅተኛ ስፍራዎች መካከል ባለው የሙቀት ልዩነት ምክንያት የጎማ ንፋስ ግፊት ካልተስተካከለ የጎማ ዕድሜ እስከ 40% ይቀንሳል።","በተጨማሪም በደረቅ ወደብ የኮንቴይነር መፈተሻ ኬላዎች ላይ የሚፈጠሩ አስተዳደራዊ መዘግየቶች በዲመሬጅ ቅጣት እና በአሽከርካሪዎች የስራ ፈት ክፍያ ወጪዎችን በከፍተኛ ደረጃ ያባብሳሉ።","በኢትራአፌ በኩል የጋራ ግዢ ቡድኖችን በማቋቋም አባል ድርጅቶች ደረጃቸውን የጠበቁ ከባድ ጎማዎችን እና ዘይቶችን በጅምላ በመደራደር እስከ 15% ቅናሽ ማግኘት እና ሐሰተኛ የመኪና መለዋወጫዎችን መከላከል ይችላሉ።"],keyTakeaways:["የጎማ መበላት እና የጉምሩክ መዘግየት ወጪዎች ከጊዜ ወደ ጊዜ ከነዳጅ ወጪዎች ይልቃሉ።","በደጋማ እና በቆላማ አካባቢዎች መካከል ያለው የሙቀት ልዩነት ልዩ የጎማ ግፊት ማስተካከያ ይፈልጋል።","የፌዴሬሽኑ የጋራ ድርድር እና የጅምላ ግዢ አባላትን ከሐሰተኛ መለዋወጫዎች ይጠብቃል።"]},"transport-roundtable":{title:"ውጤታማ የትራንስፖርት የውይይት መድረክ ምን ይመስላል?",category:"ክስተቶችና ውይይቶች",date:"ጳጉሜ 06 ቀን 2016 ዓ.ም",readTime:"የ3 ደቂቃ ንባብ",image:"/images/news_roundtable.jpg",author:"የኮሙኒኬሽን ዳይሬክቶሬት",content:["ብዙውን ጊዜ የኢንዱስትሪ ኮንፈረንሶች ተግባራዊ የማስፈጸሚያ መንገድ የሌላቸውን ረቂቅ መግለጫዎች ብቻ ያወጣሉ። በኢትራአፌ ግን ሲምፖዚየሞቻችን እና የውይይት መድረኮቻችን በተግባራዊ የፖሊሲ ችግር ፈቺነት ላይ የተዋቀሩ ናቸው።","በቅርቡ በአዲስ አበባ በተካሄደው የውይይት መድረካችን ላይ የንግድ ጭነት ባለቤቶች፣ የጉምሩክ ኮሚሽነሮች እና የኢንሹራንስ ተቆጣጣሪዎች በአንድ ዓላማ ተቀምጠዋል፦ ለድንበር ተሻጋሪ ትራንዚት የተሳለጠ የካርጎ ኢንሹራንስ ካሳ አከፋፈል መመሪያ ማዘጋጀት።","ከረዥም ንግግሮች ይልቅ መድረኩ ሦስት ተጨባጭ የካሳ ውዝግቦችን መርምሯል፣ የአሰራር ማነቆዎችን ለይቷል፣ እና ለአባል ኦፕሬተሮች የ14 ቀናት አስገዳጅ የካሳ አፈታት ጊዜ ላይ ስምምነት ላይ ደርሷል።","የኢትራአፌ ዝግጅቶችን ልዩ የሚያደርገው ይህ ተግባራዊ አካሄድ ነው። በኢትራአፌ መድረክ ላይ ሲሳተፉ ከተረጋገጡ ውሳኔዎች፣ ከሕጋዊ ግልጽነት እና ከውሳኔ ሰጪዎች ጋር ቀጥተኛ ግንኙነት በመፍጠር ይመለሳሉ።"],keyTakeaways:["የኢትራአፌ ዝግጅቶች በንድፈ-ሀሳብ ላይ ሳይሆን በተግባራዊ ችግር ፈቺነት ላይ ያተኩራሉ።","ከጉምሩክ እና ከኢንሹራንስ ተቋማት ጋር የሚደረግ ቀጥተኛ ውይይት አስገዳጅ ስምምነቶችን ይፈጥራል።","ለአባል ድርጅቶች የ14 ቀናት የኢንሹራንስ ካሳ አፈታት ስርዓት ተዘርግቷል።"]},"better-maintenance":{title:"የተሻለ የጥገና ሥራ የሚጀምረው ከተሟላ መረጃ ሰነድ ነው",category:"ደህንነትና ሙያዊ ክህሎት",date:"ጳጉሜ 03 ቀን 2016 ዓ.ም",readTime:"የ4 ደቂቃ ንባብ",image:"/images/news_workshop_records.jpg",author:"የቴክኒክና ሙያ ስልጠና ክፍል",content:["በብዙ መካከለኛ የኢትዮጵያ የትራንስፖርት ድርጅቶች ውስጥ የተሽከርካሪ ጥገና በቃል ትውስታ ወይም በተበታተኑ ደረሰኞች ላይ የተመሰረተ ነበር። ዳገት ላይ ሞተር ሲበላሽ ወይም ጊርቦክስ ሲሰበር ክፍሉን ማን እና መቼ እንደጠገነው ማወቅ ፈጽሞ የማይቻል ይሆናል።","ኢትራአፌ ለሁሉም አባል ኦፕሬተሮች ነፃ እና ቀላል የተሽከርካሪዎች የጥገና መዝገብ ሰነድ እያዘጋጀ ነው። ለኮምፒውተር እና ለሞባይል ምቹ ሆኖ የተዘጋጀው መዝገብ የዘይት ለውጥን፣ የፍሬን ባሌት ቅያሬን፣ የጎማ ማዞሪያ ጊዜዎችን እና የመካኒኩን ፊርማ በተሽከርካሪ ሻሲ ቁጥር ይከታተላል።","መዝገቡን በሙከራ ደረጃ የተጠቀሙ ጋራዦች በሦስት ወራት ውስጥ ተደጋጋሚ ብልሽቶችን በ28 በመቶ መቀነሳቸውን ገልጸዋል፤ ምክንያቱም ተደጋጋሚ የሜካኒካል ችግሮች ወደ ከፋ አደጋ ከማምራታቸው በፊት በስርዓት ስለተለዩ ነው።","በተጨማሪም የተሟላ የጥገና መረጃ ሰነድ መኖሩ የንግድ ተሽከርካሪዎችን በሚቀይሩበት ወቅት የመሸጫ ዋጋቸውን እስከ 20 በመቶ ይጨምራል።"],keyTakeaways:["ዲጂታል ወይም የተዋቀሩ መዛግብት በጋራዥ ጥገና ላይ የሚፈጠረውን ግምት ያስቀራሉ።","ተደጋጋሚ የሜካኒካል ክፍተቶች የመንገድ ላይ አደጋ ሳያስከትሉ ቀድመው ይታወቃሉ።","የተሟላ የሰነድ ታሪክ የተሽከርካሪውን ዳግም መሸጫ ዋጋ በከፍተኛ ሁኔታ ይጨምራል።"]},"meaningful-membership":{title:"ትርጉም ወዳለው አባልነት የሚደረግ የመጀመሪያ እርምጃ",category:"የማኅበራት ዜናዎች",date:"ነሐሴ 29 ቀን 2016 ዓ.ም",readTime:"የ2 ደቂቃ ንባብ",image:"/images/news_office_admin.jpg",author:"የአባላት ግንኙነት መምሪያ",content:["የአሠሪዎች ፌዴሬሽን አባል መሆን መቼም ቢሆን የስም ማሳመሪያ መሆን የለበትም። ከፍተኛ የነዳጅ ወጪን፣ ለካርጎ ጨረታዎች የሚደረገውን ፉክክር እና ተለዋዋጭ የግብር ሕጎችን ለሚጋፈጡ የትራንስፖርት አሠሪዎች ንቁ አባልነት የንግድ ሀብት ነው።","እንደ ኢትራአፌ አባል ድርጅትዎ የሕግ ጥበቃ ዴስካችንን፣ ድጎማ የተደረገባቸውን የአሽከርካሪዎች ደህንነት ስልጠናዎችን፣ የኮሪደር ኬላ አለመግባባቶች ማስታረቂያን እና የተረጋገጡ የኢንዱስትሪ ጥናት ሪፖርቶችን ያገኛል።","ምዝገባው ግልጽ እና ቀጥተኛ ነው፦ ሕጋዊ የንግድ ፈቃድዎን፣ የግብር ከፋይ መለያ ቁጥርዎን እና የተሽከርካሪዎች ምዝገባ ዝርዝርን በዲጂታል ፖርታላችን ወይም በአዲስ አበባ ቂርቆስ ክፍለ ከተማ በሚገኘው ዋና ጽሕፈት ቤታችን ያስገቡ።","ዛሬ ፌዴሬሽኑን ይቀላቀሉ፤ ጠንካራና አስተማማኝ የትራንስፖርት ዘርፍ በጋራ እንገንባ።"],keyTakeaways:["የኢትራአፌ አባልነት እውነተኛ የስራ ድጋፍ፣ የሕግ ምክር እና የደህንነት ስልጠና ይሰጣል።","የክርክር አፈታት ዴስኮች በክልል ኬላዎች መዘግየት ወቅት አባላትን ያግዛሉ።","ማመልከቻ በይፋዊ የዲጂታል መድረካችን በኩል ያለምንም እንከን ይከናወናል።"]}},Pv={"advocacy-officer":{title:"Senior Policy & Advocacy Officer",employer:"ETEF Secretariat Headquarters",type:"Full-Time (Permanent)",location:"Addis Ababa, Ethiopia (Kirkos Sub-City)",category:"Policy, Legal & Government Relations",deadline:"15 October 2026",salary:"Competitive NGO/Federation Grade + Benefits",overview:"The Senior Policy & Advocacy Officer will lead ETEF's research and legislative representation, working directly with federal ministries, parliamentary committees, and regional transport bureaus to protect employer rights and foster modern logistics standards.",responsibilities:["Analyze proposed federal and regional transport legislation, tax policies, and labor codes affecting commercial transport employers.","Draft policy briefs, whitepapers, and position statements on tariffs, road safety, and multimodal corridor operations.","Represent ETEF in tripartite consultative committees with government agencies and trade unions.","Coordinate stakeholder workshops, consultative roundtables, and the annual National Transport Leadership Symposium.","Provide regulatory guidance to member regional associations and logistics enterprises."],requirements:["Master's or Bachelor's degree in Law (LL.B/LL.M), Public Policy, Transport Economics, or related fields.","Minimum 5 years of progressive experience in policy advocacy, legal analysis, or association management in Ethiopia.","Fluency in Amharic and English with outstanding legal drafting and presentation skills.","In-depth knowledge of Ethiopian transport laws, labor proclamations, and regional trade corridor protocols.","Proven ability to engage high-level government officials and industry executives diplomatically."],applyEmail:"hr@etef.org.et"},"fleet-manager":{title:"Fleet Operations Manager",employer:"National Freight PLC (Member Organization)",type:"Full-Time",location:"Adama Operations Base, Ethiopia (with corridor travel)",category:"Logistics & Supply Chain Management",deadline:"20 October 2026",salary:"Attractive Corporate Package + Performance Incentives",overview:"National Freight PLC, a premier freight carrier and founding member of ETEF, is seeking an experienced Fleet Operations Manager to oversee daily deployment, telematics tracking, and preventative maintenance for a commercial fleet of 80+ heavy freight trucks.",responsibilities:["Manage dispatching, route optimization, and turn-around times for freight movements between Modjo Dry Port, Addis Ababa, and Djibouti.","Enforce fleet safety standards, pre-trip vehicle inspections, and speed governor monitoring via GPS telematics.","Supervise garage maintenance teams, spare parts inventories, and tire replacement schedules.","Oversee driver performance management, fatigue prevention protocols, and fuel consumption benchmarks.","Ensure full compliance with commercial transit licenses, insurance policies, and cross-border transport permits."],requirements:["B.Sc. in Mechanical/Automotive Engineering, Logistics Management, or equivalent.","At least 6 years of experience managing heavy commercial freight truck fleets in Ethiopia.","Proficiency with modern GPS fleet tracking and telematics software.","Demonstrated leadership capabilities and operational crisis management skills.","Valid driving license and readiness to conduct regular corridor site inspections."],applyEmail:"hr@etef.org.et"},"customs-liaison":{title:"Cross-Border Customs Liaison Officer",employer:"Ethio-Djibouti Logistics Corridor Desk (Partner Organization)",type:"Contract (1 Year Renewable)",location:"Dire Dawa / Dewele / Djibouti Corridor",category:"Legal, Logistics & Customs Compliance",deadline:"18 October 2026",salary:"Competitive Corridor Grade + Field Allowance",overview:"The Customs Liaison Officer serves as the vital on-the-ground bridge between commercial transport operators, Ethiopian Customs Commission, Djibouti Port Authority, and transit checkpoint authorities to expedite cargo movement and resolve compliance disputes.",responsibilities:["Facilitate rapid resolution of customs documentation holds, transit seals verification, and cargo inspection delays for member convoys.","Liaise with customs officers at border entry points (Galafi, Dewele) and dry port gates.","Report corridor bottlenecks, arbitrary inspection fees, or driver security concerns to ETEF's Central Corridor Taskforce.","Assist carrier dispatchers in ensuring manifest accuracy and transit bond compliance.","Conduct quarterly compliance orientation sessions for commercial cross-border truck drivers."],requirements:["Degree or Diploma in Customs Clearance, International Trade, Logistics, or Business Administration.","Minimum 4 years of operational experience working along the Ethio-Djibouti trade corridor.","Deep understanding of ASYCUDA++, single-window customs systems, and transit bond procedures.","Strong communication skills in Amharic, Afar/Somali, and working French is advantageous.","High integrity and proactive dispute resolution skills."],applyEmail:"hr@etef.org.et"},"dispatch-coordinator":{title:"Regional Dispatch Coordinator",employer:"Safeway Bus Services (Member Organization)",type:"Full-Time",location:"Hawassa Regional Terminal, Sidama, Ethiopia",category:"Passenger Transit & Customer Operations",deadline:"25 October 2026",salary:"Competitive Base + Housing Allowance",overview:"Safeway Bus Services, an established inter-city passenger carrier, requires a Regional Dispatch Coordinator at its Hawassa hub to manage schedule integrity, passenger safety, ticketing coordination, and driver rotations across southern transit corridors.",responsibilities:["Coordinate departures, arrivals, and passenger boarding at Hawassa Central Bus Terminal.","Monitor driver duty rosters, breathalyzer sobriety verifications, and speed compliance.","Manage roadside assistance dispatch and backup vehicle mobilization in case of mechanical emergencies.","Maintain liaison with Hawassa City Transport Bureau and regional police commands.","Oversee ticketing records reconciliation and passenger customer service desks."],requirements:["Diploma or Bachelor's Degree in Transport Management, Business Administration, or related discipline.","3+ years experience in public passenger bus terminal operations or fleet dispatching.","Strong verbal communication skills in Amharic and Sidaamu Afoo.","Ability to remain calm under pressure and handle customer inquiries professionally.","Basic computer literacy for schedule and passenger reporting."],applyEmail:"hr@etef.org.et"}},Iv={"advocacy-officer":{title:"ከፍተኛ የፖሊሲ እና የጥብቅና ኦፊሰር",employer:"የኢትራአፌ ዋና ጽሕፈት ቤት",type:"ሙሉ ጊዜ (ቋሚ)",location:"አዲስ አበባ፣ ኢትዮጵያ (ቂርቆስ ክፍለ ከተማ)",category:"ፖሊሲ፣ ሕግ እና የመንግሥት ግንኙነት",deadline:"ጥቅምት 05 ቀን 2017 ዓ.ም",salary:"ተወዳዳሪ የፌዴሬሽን ደመወዝ + ጥቅማጥቅሞች",overview:"ከፍተኛ የፖሊሲ እና የጥብቅና ኦፊሰሩ የፌዴሬሽኑን የምርምር እና የሕግ አውጪ ውክልና በመምራት የአሠሪዎችን መብት ለማስከበርና ዘመናዊ የሎጂስቲክስ ደረጃዎችን ለማስፋፋት ከፌዴራል ሚኒስቴር መስሪያ ቤቶች፣ ከሕዝብ ተወካዮች ምክር ቤት እና ከክልል ትራንስፖርት ቢሮዎች ጋር ተቀራርቦ ይሰራል/ትሰራለች።",responsibilities:["የትራንስፖርት አሠሪዎችን የሚመለከቱ የፌዴራል እና የክልል ረቂቅ ሕጎችን፣ የታክስ ፖሊሲዎችን እና የሠራተኛ ደንቦችን መተንተን","በታሪፍ፣ በመንገድ ደህንነት እና በሁለገብ የኮሪደር ስራዎች ዙሪያ የፖሊሲ ሰነዶችን እና የውሳኔ ሃሳቦችን ማዘጋጀት","ከመንግሥት አካላት እና ከሠራተኛ ማኅበራት ጋር በሚደረጉ የሦስትዮሽ የምክክር መድረኮች ላይ ፌዴሬሽኑን መወከል","የባለድርሻ አካላት ወርክሾፖችን፣ የምክክር መድረኮችን እና ዓመታዊውን የትራንስፖርት ሲምፖዚየም ማስተባበር","ለአባል የክልል ማኅበራት እና ለሎጂስቲክስ ድርጅቶች የሕግና የደንብ መመሪያ ድጋፍ መስጠት"],requirements:["በሕግ (ኤልኤልቢ/ኤልኤልኤም)፣ በሕዝብ ፖሊሲ፣ በትራንስፖርት ኢኮኖሚክስ ወይም በተዛማጅ መስክ ማስተርስ ወይም የመጀመሪያ ዲግሪ","በኢትዮጵያ ውስጥ በፖሊሲ ጥብቅና፣ በሕግ ትንተና ወይም በማኅበራት አስተዳደር ቢያንስ የ5 ዓመታት የስራ ልምድ","በአማርኛ እና በእንግሊዝኛ ቋንቋዎች የተካነ እንዲሁም የላቀ የሕግ ሰነድ ዝግጅት እና የንግግር ችሎታ ያለው/ያላት","ስለ ኢትዮጵያ የትራንስፖርት ሕጎች፣ የሠራተኛ አዋጆች እና የንግድ ኮሪደር ስምምነቶች ጥልቅ ዕውቀት","ከከፍተኛ የመንግሥት ኃላፊዎች እና ከኢንዱስትሪ መሪዎች ጋር በዲፕሎማሲያዊ መንገድ የመስራት የተረጋገጠ ብቃት"],applyEmail:"hr@etef.org.et"},"fleet-manager":{title:"የተሽከርካሪዎች ኦፕሬሽን ሥራ አስኪያጅ",employer:"ብሔራዊ የደረቅ ጭነት ኃ/የተ/የግ/ማኅበር (አባል ድርጅት)",type:"ሙሉ ጊዜ",location:"አዳማ ኦፕሬሽን ማዕከል (የኮሪደር ጉዞ ያለው)",category:"ሎጂስቲክስና የአቅርቦት ሰንሰለት አስተዳደር",deadline:"ጥቅምት 10 ቀን 2017 ዓ.ም",salary:"ማራኪ የኮርፖሬት ጥቅል + የአፈፃፀም ማበረታቻ",overview:"ቀዳሚ የጭነት አጓጓዥ እና የኢትራአፌ መሥራች አባል የሆነው ብሔራዊ የደረቅ ጭነት ኃ/የተ/የግ/ማኅበር፣ ከ80 በላይ ከባድ የጭነት ተሽከርካሪዎችን ዕለታዊ ስምሪት፣ የቴሌማቲክስ ክትትል እና የቅድመ መከላከል ጥገናን በበላይነት የሚመራ ልምድ ያለው የኦፕሬሽን ሥራ አስኪያጅ ይፈልጋል።",responsibilities:["በሞጆ ደረቅ ወደብ፣ በአዲስ አበባ እና በጅቡቲ መካከል የጭነት እንቅስቃሴን ስምሪት፣ የመስመር ቅልጥፍናን እና የመመለሻ ጊዜን ማስተዳደር","የፍሊት ደህንነት ደረጃዎችን፣ የቅድመ ጉዞ ፍተሻን እና የፍጥነት ገደብ መቆጣጠሪያዎችን በጂፒኤስ ቴክኖሎጂ መከታተል","የጋራዥ ጥገና ቡድኖችን፣ የመለዋወጫ ዕቃዎች ክምችትን እና የጎማ ቅያሬ መርሃ ግብሮችን በበላይነት መቆጣጠር","የአሽከርካሪዎች አፈፃፀም፣ የድካም መከላከያ ስርዓት እና የነዳጅ ፍጆታ ቁጥጥርን ማስተዳደር","የንግድ ትራንዚት ፈቃዶችን፣ የኢንሹራንስ ፖሊሲዎችን እና ድንበር ተሻጋሪ ፈቃዶችን ሕጋዊ ተገዢነት ማረጋገጥ"],requirements:["በሜካኒካል/አውቶሞቲቭ ምህንድስና፣ በሎጂስቲክስ ማኔጅመንት ወይም በተመሳሳይ መስክ የመጀመሪያ ዲግሪ","በኢትዮጵያ ውስጥ ከባድ የንግድ ጭነት ተሽከርካሪዎችን በማስተዳደር ቢያንስ የ6 ዓመታት የስራ ልምድ","ዘመናዊ የጂፒኤስ የፍሊት ክትትል እና የቴሌማቲክስ ሶፍትዌሮችን የመጠቀም ከፍተኛ ብቃት","የተረጋገጠ የአመራር ብቃት እና በድንገተኛ የስራ ቀውሶች ወቅት ፈጣን ውሳኔ የመስጠት ችሎታ","ሕጋዊ የመንጃ ፈቃድ እና መደበኛ የኮሪደር የመስክ ፍተሻዎችን ለማድረግ ዝግጁ የሆነ/የሆነች"],applyEmail:"hr@etef.org.et"},"customs-liaison":{title:"የድንበር ተሻጋሪ ጉምሩክ ግንኙነት ኦፊሰር",employer:"የኢትዮ-ጅቡቲ የሎጂስቲክስ ኮሪደር ዴስክ (አጋር ተቋም)",type:"ውል (በየዓመቱ የሚታደስ)",location:"ድሬዳዋ / ደወሌ / ጅቡቲ ኮሪደር",category:"ሕግ፣ ሎጂስቲክስ እና የጉምሩክ አሰራር",deadline:"ጥቅምት 08 ቀን 2017 ዓ.ም",salary:"ተወዳዳሪ የኮሪደር አበል + የመስክ ክፍያ",overview:"የጉምሩክ ግንኙነት ኦፊሰሩ በትራንስፖርት ኦፕሬተሮች፣ በኢትዮጵያ ጉምሩክ ኮሚሽን፣ በጅቡቲ ወደብ ባለስልጣን እና በኬላ ተቆጣጣሪዎች መካከል የዕቃ እንቅስቃሴን ለማፋጠን እና የአሰራር ውዝግቦችን ለመፍታት በመሬት ላይ እንደ ቁልፍ አገናኝ ድልድይ ሆኖ ያገለግላል።",responsibilities:["ለአባል ድርጅቶች የጉምሩክ ሰነድ ማጣራት፣ የትራንዚት ማህተም ፍተሻ እና የካርጎ መዘግየቶች ፈጣን እልባት እንዲያገኙ ማመቻቸት","በድንበር መግቢያ ኬላዎች (ገላፊ፣ ደወሌ) እና በደረቅ ወደብ በሮች ከሚገኙ የጉምሩክ ኃላፊዎች ጋር ተቀራርቦ መስራት","የኮሪደር ማነቆዎችን፣ ያልተገቡ የፍተሻ ክፍያዎችን ወይም የአሽከርካሪዎች የደህንነት ስጋቶችን ለኢትራአፌ ኮሪደር ግብረ-ኃይል ማሳወቅ","የማኒፌስት ትክክለኛነትን እና የትራንዚት ቦንድ ተገዢነትን ለማረጋገጥ የአጓጓዦችን ስምሪት ክፍሎች ማገዝ","ለድንበር ተሻጋሪ ከባድ የጭነት አሽከርካሪዎች የየሩብ ዓመቱን የሕግ ተገዢነት ገለጻ ማዘጋጀት"],requirements:["በጉምሩክ ክሊራንስ፣ በዓለም አቀፍ ንግድ፣ በሎጂስቲክስ ወይም በንግድ አስተዳደር ዲግሪ ወይም ዲፕሎማ","በኢትዮ-ጅቡቲ የንግድ ኮሪደር መስመር ላይ በመስራት ቢያንስ የ4 ዓመታት የተግባር ልምድ","ስለ አሲኩዳ (ASYCUDA++)፣ ስለ ነጠላ መስኮት የጉምሩክ አሰራር እና የትራንዚት ቦንድ ስርዓት ጥልቅ ዕውቀት","በአማርኛ፣ በአፋርኛ/ሶማሊኛ እና በመሰረታዊ ፈረንሳይኛ ቋንቋ መግባባት መቻል ተጨማሪ ጠቀሜታ አለው","ከፍተኛ የታማኝነት ስነ-ምግባር እና ንቁ የችግር አፈታት ክህሎት"],applyEmail:"hr@etef.org.et"},"dispatch-coordinator":{title:"የክልል የሥምሪት አስተባባሪ",employer:"ሴፍዌይ የአገር አቋራጭ አውቶቡስ አገልግሎት (አባል ድርጅት)",type:"ሙሉ ጊዜ",location:"ሀዋሳ ማዕከላዊ ተርሚናል፣ ሲዳማ፣ ኢትዮጵያ",category:"የተሳፋሪ ትራንስፖርት እና የደንበኞች አገልግሎት",deadline:"ጥቅምት 15 ቀን 2017 ዓ.ም",salary:"ተወዳዳሪ ደመወዝ + የቤት አበል",overview:"የተመሰረተ አገር አቋራጭ የተሳፋሪ አጓጓዥ የሆነው ሴፍዌይ የአውቶቡስ አገልግሎት በደቡብ የትራንዚት መስመሮች ላይ የሰዓት አክባሪነትን፣ የተሳፋሪዎችን ደህንነት፣ የቲኬት አሰራርን እና የአሽከርካሪዎች ፈረቃን ለማስተዳደር በሀዋሳ ማዕከሉ የክልል ስምሪት አስተባባሪ ይፈልጋል።",responsibilities:["በሀዋሳ ማዕከላዊ አውቶቡስ ተርሚናል የተሽከርካሪዎች መነሻ፣ መድረሻ እና የተሳፋሪዎች አሳፋሪነት ስራዎችን ማስተባበር","የአሽከርካሪዎችን የሥራ ፈረቃ፣ የአልኮል ምርመራ እና የፍጥነት ደንብ አከባበርን መከታተል","የሜካኒካል ብልሽት በሚያጋጥምበት ወቅት የመንገድ ላይ ፈጣን እርዳታን እና የመጠባበቂያ ተሽከርካሪ ስምሪትን ማስተባበር","ከሀዋሳ ከተማ ትራንስፖርት ቢሮ እና ከክልል ፖሊስ መምሪያ ጋር ግንኙነት መጠበቅ","የቲኬት ሽያጭ መረጃዎችን እና የተሳፋሪዎች ቅሬታ ማስተናገጃ ጠረጴዛን በበላይነት መቆጣጠር"],requirements:["በትራንስፖርት ማኔጅመንት፣ በቢዝነስ አስተዳደር ወይም በተመሳሳይ መስክ ዲፕሎማ ወይም የመጀመሪያ ዲግሪ","በሕዝብ ተሳፋሪ አውቶቡስ ተርሚናል ኦፕሬሽን ወይም በፍሊት ስምሪት ቢያንስ የ3 ዓመታት ልምድ","በአማርኛ እና በሲዳሙ አፎ ቋንቋዎች ጠንካራ የመግባባት ችሎታ","በተጨናነቀ የስራ ሁኔታ ውስጥ ተረጋግቶ የመስራት እና የደንበኞችን ጥያቄ በሙያዊ መንገድ የማስተናገድ ችሎታ","ለመርሃ ግብር እና ለተሳፋሪዎች ሪፖርት መሰረታዊ የኮምፒውተር ዕውቀት ያለው/ያላት"],applyEmail:"hr@etef.org.et"}},Wv={djibouti:{name:"Ethio-Djibouti Trade Corridor (Galafi & Dewele)",image:"/images/corridor_djibouti.jpg",status:"Normal Flow • Operational",badgeClass:"bg-primary-50 text-primary-700 border border-primary-200",summary:"The nation's paramount commercial corridor handling over 90% of Ethiopia's sea-borne international trade. Dual highway connections operate 24/7 with automated customs manifest reconciliation.",transitHours:"42–48 Hours (Addis Ababa to Doraleh Container Terminal)",clearanceHours:"4.2 Hours average OSBP clearance at Galafi",keyCheckpoints:["Addis Ababa – Adama Expressway Toll Gates (Smooth Flow)","Mojo Junction & Dry Port Terminal Connection","Awash 7 Kilo Weighbridge & Inspection Post","Semera Commercial Vehicle Monitoring Center","Mille – Galafi One-Stop Border Post (OSBP)"],advisories:["Night convoy transits permitted for heavy multi-axle freight with verified telematics","Strict axle-load limits enforced under MoTL Directive No. 44; calibration checks at Semera","Galafi E-Single Window pre-registration mandatory prior to border gate arrival"],helpline:"+251 11 4717787 (Galafi Desk Ext 104)"},modjo:{name:"Modjo Multimodal Dry Port & Container Logistics Hub",image:"/images/corridor_modjo.jpg",status:"Active Dispatch • 74% Capacity",badgeClass:"bg-primary-50 text-primary-700 border border-primary-200",summary:"Ethiopia's primary multimodal inland port connected via electrified standard gauge railway (EDR) directly to the Port of Djibouti. Reefer and dry container handling running on regular shifts.",transitHours:"Daily Rail Shuttle: 12 Hours Transit to Coast",clearanceHours:"Green Channel Customs: 8–12 Hours Average",keyCheckpoints:["Gate 1: Inbound Container Truck Staging Yard","Gate 2: Empty Container Depot & Return Bay","Customs Green & Blue Channel Scanner Facilities","Rail Cargo Loading Platform & Gantry Tracks"],advisories:["Heavy container haulers must present Electronic Customs Transit Documents (ECTD)","Refrigerated container plug-ins operating with backup generator redundancy","Expedited turnaround available for registered ETEF member freight forwarders"],helpline:"+251 11 4717787 (Modjo Dry Port Bureau Ext 106)"},moyale:{name:"Moyale One-Stop Border Post & Lamu Port Corridor (Kenya)",image:"/images/corridor_moyale.jpg",status:"Normal Flow • Commercial Transit Open",badgeClass:"bg-primary-50 text-primary-700 border border-primary-200",summary:"Strategic bilateral trade gateway between Ethiopia and Kenya. Supports agricultural exports, commercial transit goods, cross-border bus transport, and petroleum logistics.",transitHours:"55–60 Hours (Addis Ababa – Moyale – Nairobi)",clearanceHours:"3.0 Hours Average at Joint Customs Facility",keyCheckpoints:["Hawassa Southbound Commercial Weighbridge","Dilla – Yabello Trans-African Highway Section","Moyale Integrated One-Stop Border Inspection Facility","Marsabit – Isiolo Transit Corridor"],advisories:["COMESA Yellow Card Insurance and bilateral carrier permits required","Livestock and phytosanitary transit checkpoints operating normal daylight shifts","Cross-border intercity buses subject to joint immigration checks"],helpline:"+251 11 4717787 (Southern Gateway Desk Ext 108)"},berbera:{name:"Berbera Port Logistics Corridor (Tog Wajaale – Dire Dawa)",image:"/images/corridor_berbera.jpg",status:"Freight Scaling • Upgrades Active",badgeClass:"bg-slate-100 text-slate-800 border border-slate-300",summary:"Rapidly expanding alternative trade corridor connecting eastern Ethiopia with the deepwater Port of Berbera. New highway segments facilitate heavy container transport.",transitHours:"30–36 Hours (Dire Dawa – Berbera)",clearanceHours:"5.5 Hours Average at Tog Wajaale Customs",keyCheckpoints:["Dire Dawa Free Trade Zone Junction","Harar – Babile Highway Segment","Jijiga Transit Weighbridge","Tog Wajaale Customs Inspection Yard"],advisories:["Section 2 road paving active; commercial drivers advised to adhere to 60 km/h work-zone limits","Direct container clearance now operational through Dire Dawa Dry Port","ETEF liaison officers stationed at Tog Wajaale for member assistance"],helpline:"+251 11 4717787 (Eastern Corridor Desk Ext 109)"}},ey={djibouti:{name:"የኢትዮ-ጅቡቲ የንግድ ኮሪደር (ገላፊ እና ደወሌ)",image:"/images/corridor_djibouti.jpg",status:"መደበኛ እንቅስቃሴ • አገልግሎት ላይ",badgeClass:"bg-primary-50 text-primary-700 border border-primary-200",summary:"ከ90% በላይ የሚሆነውን የኢትዮጵያን የወደብ የውጭ ንግድ የሚያስተናግደው የሀገሪቱ ዋና የንግድ ኮሪደር። አውራ ጎዳናዎቹ በራስ-ሰር የጉምሩክ ስርዓት 24/7 አገልግሎት ይሰጣሉ።",transitHours:"ከ42–48 ሰዓታት (አዲስ አበባ እስከ ዶራሌ ኮንቴይነር ተርሚናል)",clearanceHours:"4.2 ሰዓታት አማካይ የጋራ ድንበር ፍተሻ በገላፊ",keyCheckpoints:["አዲስ አበባ – አዳማ የፍጥነት መንገድ የክፍያ ኬላዎች (ክፍት እንቅስቃሴ)","ሞጆ መገናኛ እና የደረቅ ወደብ ተርሚናል መስመር","አዋሽ 7 ኪሎ ሚዛን ጣቢያ እና የፍተሻ ኬላ","ሰመራ የንግድ ተሽከርካሪዎች ክትትል ማዕከል","ሚሌ – ገላፊ የአንድ ማዕከል የድንበር ኬላ"],advisories:["የጂፒኤስ ቴክኖሎጂ ላላቸው ከባድ ባለብዙ አክስል የጭነት ተሽከርካሪዎች የሌሊት ጉዞ ተፈቅዷል","በትራንስፖርት ሚኒስቴር መመሪያ ቁጥር 44 መሠረት ጥብቅ የአክስል ክብደት ቁጥጥር በሰመራ ይካሄዳል","ድንበር ከመድረስ በፊት በገላፊ የኤሌክትሮኒክስ መረጃ ቅድመ-ምዝገባ ማድረግ ግዴታ ነው"],helpline:"+251 11 4717787 (የገላፊ ዴስክ የውስጥ መስመር 104)"},modjo:{name:"የሞጆ ሁለገብ የደረቅ ወደብ እና የኮንቴይነር ሎጂስቲክስ ማዕከል",image:"/images/corridor_modjo.jpg",status:"ንቁ ስምሪት • 74% አቅም",badgeClass:"bg-primary-50 text-primary-700 border border-primary-200",summary:"በኤሌክትሪክ ባቡር መስመር በቀጥታ ከጅቡቲ ወደብ ጋር የተገናኘ የኢትዮጵያ ቀዳሚ ሁለገብ የደረቅ ወደብ። የቀዘቀዙ እና ደረቅ ኮንቴይነሮች በፈረቃ ይስተናገዳሉ።",transitHours:"የዕለት የባቡር ጉዞ፦ 12 ሰዓታት እስከ ወደብ",clearanceHours:"የአረንጓዴ መስመር ጉምሩክ፦ በአማካይ ከ8–12 ሰዓታት",keyCheckpoints:["በር 1፦ ገቢ የኮንቴይነር የጭነት መኪኖች ማቆሚያ ግቢ","በር 2፦ ባዶ ኮንቴይነሮች ማስረከቢያ እና መቀበያ ግቢ","የጉምሩክ አረንጓዴ እና ሰማያዊ መስመር የፍተሻ ስካነር","የባቡር ጭነት መጫኛ መድረክ እና የክሬን መስመሮች"],advisories:["ከባድ የኮንቴይነር ጫኚዎች የኤሌክትሮኒክስ የጉምሩክ ትራንዚት ሰነድ ማቅረብ አለባቸው","የቀዘቀዙ ኮንቴይነሮች የኤሌክትሪክ ተሰኪዎች በአስተማማኝ ጀነሬተር ይሰራሉ","ለተመዘገቡ የኢትራአፌ አባል የጭነት አስተላላፊዎች ፈጣን የማስተናገጃ ቅድሚያ ይሰጣል"],helpline:"+251 11 4717787 (የሞጆ ደረቅ ወደብ ቢሮ የውስጥ መስመር 106)"},moyale:{name:"የሞያሌ የጋራ ድንበር ጣቢያ እና የላሙ ወደብ ኮሪደር (ኬንያ)",image:"/images/corridor_moyale.jpg",status:"መደበኛ እንቅስቃሴ • የንግድ ትራንዚት ክፍት",badgeClass:"bg-primary-50 text-primary-700 border border-primary-200",summary:"በኢትዮጵያ እና በኬንያ መካከል ስትራቴጂካዊ የሁለትዮሽ የንግድ በር። የግብርና ምርቶችን፣ የንግድ ትራንዚት እቃዎችን እና ድንበር ተሻጋሪ አውቶቡሶችን ያስተናግዳል።",transitHours:"ከ55–60 ሰዓታት (አዲስ አበባ – ሞያሌ – ናይሮቢ)",clearanceHours:"3.0 ሰዓታት አማካይ የጋራ ጉምሩክ ፍተሻ",keyCheckpoints:["ሀዋሳ የደቡብ አቅጣጫ የንግድ ሚዛን ጣቢያ","ዲላ – ያቤሎ የትራንስ-አፍሪካ አውራ ጎዳና","የሞያሌ የተቀናጀ የአንድ ማዕከል የድንበር ፍተሻ ጣቢያ","ማርሳቢት – ኢሲዮሎ የትራንዚት መስመር"],advisories:["የኮሜሳ ቢጫ ካርድ ኢንሹራንስ እና የሁለትዮሽ የትራንስፖርት ፈቃድ ያስፈልጋል","የእንስሳት እና የዕፅዋት ፍተሻ ጣቢያዎች በመደበኛ የቀን ክፍለ ጊዜ ይሰራሉ","ድንበር ተሻጋሪ አገር አቋራጭ አውቶቡሶች በጋራ የኢሚግሬሽን ፍተሻ ያልፋሉ"],helpline:"+251 11 4717787 (የደቡብ በር ዴስክ የውስጥ መስመር 108)"},berbera:{name:"የበርበራ ወደብ የሎጂስቲክስ ኮሪደር (ቶግ ዋጫሌ – ድሬዳዋ)",image:"/images/corridor_berbera.jpg",status:"የጭነት ዕድገት • የማሻሻያ ሥራ ላይ",badgeClass:"bg-slate-100 text-slate-800 border border-slate-300",summary:"ምስራቅ ኢትዮጵያን ከበርበራ ጥልቅ ወደብ ጋር የሚያገናኝ አማራጭ የንግድ ኮሪደር። አዳዲስ የአስፋልት መስመሮች ከባድ የኮንቴይነር ትራንስፖርትን ያቀላጥፋሉ።",transitHours:"ከ30–36 ሰዓታት (ድሬዳዋ – በርበራ)",clearanceHours:"5.5 ሰዓታት አማካይ በቶግ ዋጫሌ ጉምሩክ",keyCheckpoints:["የድሬዳዋ ነፃ የንግድ ቀጠና መገናኛ","ሐረር – ባቢሌ የአውራ ጎዳና መስመር","ጅጅጋ የትራንዚት ሚዛን ጣቢያ","ቶግ ዋጫሌ የጉምሩክ ፍተሻ ግቢ"],advisories:["የክፍል 2 የመንገድ ንጣፍ ሥራ በመከናወን ላይ ስለሆነ አሽከርካሪዎች በሰዓት 60 ኪ.ሜ የፍጥነት ገደብ እንዲያከብሩ ይመከራል","በድሬዳዋ ደረቅ ወደብ በኩል የቀጥታ የኮንቴይነር ፍተሻ አገልግሎት መስጠት ጀምሯል","ለአባላት ድጋፍ ለመስጠት የኢትራአፌ ተወካዮች በቶግ ዋጫሌ ተመድበዋል"],helpline:"+251 11 4717787 (የምስራቅ ኮሪደር ዴስክ የውስጥ መስመር 109)"}};function ty(){let n=document.getElementById("etef-modal-container");n||(n=document.createElement("div"),n.id="etef-modal-container",n.className="fixed inset-0 z-[100] hidden items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto",document.body.appendChild(n)),n.addEventListener("click",c=>{c.target===n&&En()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&En()})}function En(){const n=document.getElementById("etef-modal-container");n&&(n.classList.add("hidden"),n.classList.remove("flex"),n.innerHTML="",document.body.style.overflow="")}function ay(n){const u=Zt()==="አማ",o=u?$l:Kl,p=o[n]||o.berehane;if(!p)return;const x=document.getElementById("etef-modal-container");if(!x)return;const E=u?"የሕይወት ታሪክ መስኮት ዝጋ":"Close dialog",b=u?"የሥራ አስፈጻሚው የሕይወት ታሪክ":"Executive Biography",C=u?"ዋና ዋና የፌዴሬሽኑ የሥራ ኃላፊነቶች፦":"Key Federation Portfolios:",k=u?"የሕይወት ታሪክ ዝጋ":"Close Biography";x.innerHTML=`
    <div class="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative animate-in fade-in zoom-in-95 duration-200">
      <button type="button" class="modal-close-btn absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer border-none" aria-label="${E}">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100">
        <img src="${p.image}" alt="${p.name}" class="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover object-top shadow-md border-2 border-white ring-2 ring-primary-100 shrink-0">
        <div class="text-center sm:text-left">
          <span class="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full mb-2 uppercase tracking-wider">${p.role}</span>
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">${p.name}</h2>
          <p class="text-sm font-semibold text-slate-600 mt-1">${p.org}</p>
          <div class="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-3 text-xs text-slate-500">
            <span class="flex items-center gap-1.5"><i class="fa-solid fa-briefcase text-primary-600"></i> ${p.experience}</span>
            <span class="flex items-center gap-1.5"><i class="fa-solid fa-graduation-cap text-primary-600"></i> ${p.education}</span>
          </div>
        </div>
      </div>

      <div class="mt-6 space-y-4 text-slate-700 text-sm leading-relaxed">
        <h3 class="font-bold text-slate-900 text-base">${b}</h3>
        ${p.bio.map(T=>`<p>${T}</p>`).join("")}
      </div>

      <div class="mt-6 pt-6 border-t border-slate-100">
        <h3 class="font-bold text-slate-900 text-sm mb-3">${C}</h3>
        <ul class="space-y-2">
          ${p.responsibilities.map(T=>`
            <li class="flex items-start gap-2.5 text-xs text-slate-600">
              <i class="fa-solid fa-circle-check text-primary-600 text-sm mt-0.5 shrink-0"></i>
              <span>${T}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="mt-8 pt-4 flex justify-end">
        <button type="button" class="modal-close-btn px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-colors cursor-pointer border-none">
          ${k}
        </button>
      </div>
    </div>
  `,Vs(x),x.classList.remove("hidden"),x.classList.add("flex"),document.body.style.overflow="hidden"}function ly(n){const u=Zt()==="አማ",o=u?Jv:$v,p=o[n]||o["shared-road"];if(!p)return;const x=document.getElementById("etef-modal-container");if(!x)return;const E=u?"ጽሑፉን ዝጋ":"Close article",b=u?"የተዘጋጀው በ፦":"Authored by",C=u?"ዋና ዋና የፌዴሬሽኑ ግንዛቤዎች፦":"Key Federation Takeaways:",k=u?"አጋራ፦":"Share:",T=u?"ንባቡን ጨርሻለሁ":"Finished Reading";x.innerHTML=`
    <div class="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-10 relative animate-in fade-in zoom-in-95 duration-200">
      <button type="button" class="modal-close-btn absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer border-none" aria-label="${E}">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <div class="mb-6">
        <div class="flex items-center gap-2 text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">
          <span>${p.category}</span>
          <span class="w-1 h-1 rounded-full bg-slate-300"></span>
          <span class="text-slate-500">${p.date}</span>
          <span class="w-1 h-1 rounded-full bg-slate-300"></span>
          <span class="text-slate-500">${p.readTime}</span>
        </div>
        <h1 class="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">${p.title}</h1>
        <p class="text-xs text-slate-500 mt-2 flex items-center gap-2">
          <i class="fa-solid fa-feather-pointed text-primary-600"></i> ${b} ${p.author}
        </p>
      </div>

      <div class="rounded-2xl overflow-hidden mb-6 h-64 sm:h-80 bg-slate-100">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover">
      </div>

      <div class="space-y-4 text-slate-700 text-base leading-relaxed">
        ${p.content.map(m=>`<p>${m}</p>`).join("")}
      </div>

      <div class="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h3 class="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
          <i class="fa-solid fa-lightbulb text-primary-600"></i> ${C}
        </h3>
        <ul class="space-y-2">
          ${p.keyTakeaways.map(m=>`
            <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
              <i class="fa-solid fa-check text-primary-600 text-sm mt-0.5 shrink-0"></i>
              <span>${m}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2 text-xs text-slate-500">
          <span>${k}</span>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary-50 text-slate-600 hover:text-primary-600 flex items-center justify-center transition-colors"><i class="fa-brands fa-x-twitter text-xs"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary-50 text-slate-600 hover:text-primary-600 flex items-center justify-center transition-colors"><i class="fa-brands fa-linkedin-in text-xs"></i></a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary-50 text-slate-600 hover:text-primary-600 flex items-center justify-center transition-colors"><i class="fa-brands fa-telegram text-xs"></i></a>
        </div>
        <button type="button" class="modal-close-btn px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer border-none shadow-sm">
          ${T}
        </button>
      </div>
    </div>
  `,Vs(x),x.classList.remove("hidden"),x.classList.add("flex"),document.body.style.overflow="hidden"}function sy(n){const u=Zt()==="አማ",o=u?Iv:Pv,p=o[n]||o["advocacy-officer"];if(!p)return;const x=document.getElementById("etef-modal-container");if(!x)return;const E=u?"የሥራ ዝርዝር መረጃ ዝጋ":"Close job details",b=u?"የሥራ ቦታ":"Location",C=u?"የሥራ ዘርፍ":"Category",k=u?"የማመልከቻ ማብቂያ ቀን":"Application Deadline",T=u?"የክፍያ መጠን / ደመወዝ":"Remuneration",m=u?"የሥራው አጠቃላይ መግለጫ":"Role Overview",M=u?"ዋና ዋና የሥራ ኃላፊነቶች":"Key Responsibilities",G=u?"ለተወዳዳሪዎች የሚያስፈልጉ መስፈርቶች":"Candidate Requirements",F=u?"ለሥራው ማመልከት ይፈልጋሉ?":"Interested in applying?",U=u?`እባክዎን የትምህርትና የስራ ልምድ ማስረጃዎን ወደ <a href="mailto:${p.applyEmail}" class="underline font-bold">${p.applyEmail}</a> በኢሜይል ይላኩ። በኢሜይሉ ርዕስ ላይ "${p.title}" በማለት መጥቀስዎን አይርሱ።`:`Please send your CV, cover letter, and credentials to <a href="mailto:${p.applyEmail}" class="underline font-bold">${p.applyEmail}</a> citing "${p.title}" in the subject line.`,N=u?"በኢሜይል ያመልክቱ":"Apply via Email";x.innerHTML=`
    <div class="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-10 relative animate-in fade-in zoom-in-95 duration-200">
      <button type="button" class="modal-close-btn absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer border-none" aria-label="${E}">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <div class="mb-6 pb-6 border-b border-slate-100">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-md">${p.employer}</span>
          <span class="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">${p.type}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold text-slate-900">${p.title}</h1>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-xs text-slate-600">
          <div>
            <span class="block text-slate-400 font-medium">${b}</span>
            <span class="font-bold text-slate-800">${p.location}</span>
          </div>
          <div>
            <span class="block text-slate-400 font-medium">${C}</span>
            <span class="font-bold text-slate-800">${p.category}</span>
          </div>
          <div>
            <span class="block text-slate-400 font-medium">${k}</span>
            <span class="font-bold text-primary-700">${p.deadline}</span>
          </div>
          <div>
            <span class="block text-slate-400 font-medium">${T}</span>
            <span class="font-bold text-slate-800">${p.salary}</span>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <h3 class="font-bold text-slate-900 text-base mb-2">${m}</h3>
        <p class="text-slate-600 text-sm leading-relaxed">${p.overview}</p>
      </div>

      <div class="mb-6">
        <h3 class="font-bold text-slate-900 text-base mb-3">${M}</h3>
        <ul class="space-y-2">
          ${p.responsibilities.map(X=>`
            <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
              <i class="fa-solid fa-circle-check text-primary-600 text-sm mt-0.5 shrink-0"></i>
              <span>${X}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="mb-8">
        <h3 class="font-bold text-slate-900 text-base mb-3">${G}</h3>
        <ul class="space-y-2">
          ${p.requirements.map(X=>`
            <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
              <i class="fa-solid fa-arrow-right text-slate-400 text-xs mt-1 shrink-0"></i>
              <span>${X}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="p-6 bg-primary-50 rounded-2xl border border-primary-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span class="font-bold text-primary-900 text-sm block">${F}</span>
          <p class="text-xs text-primary-700 mt-0.5">${U}</p>
        </div>
        <a href="mailto:${p.applyEmail}?subject=Application for ${encodeURIComponent(p.title)}" class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm rounded-xl transition-colors shadow-sm whitespace-nowrap">
          ${N}
        </a>
      </div>
    </div>
  `,Vs(x),x.classList.remove("hidden"),x.classList.add("flex"),document.body.style.overflow="hidden"}function iy(){const c=Zt()==="አማ",u=document.getElementById("etef-modal-container");if(!u)return;const o=c?"የምዝገባ መስኮት ዝጋ":"Close dialog",p=c?"የኢትራአፌ የባለሙያዎች ምዝገባ መዝገብ":"ETEF Talent Registry",x=c?"የግል መረጃዎን / ሲቪዎን ያስገቡ":"Submit Your Profile / CV",E=c?"የፌዴሬሽኑ ማዕከላዊ የባለሙያዎች ማውጫን ይቀላቀሉ። አባል ድርጅቶች ብቁ ሠራተኞችን ሲፈልጉ ፌዴሬሽኑ የተረጋገጡ ባለሙያዎችን በቀጥታ ያገናኛል።":"Join our central candidate directory. When member freight, bus, or logistics operators seek qualified staff, ETEF connects verified talent directly.",b=c?"ሙሉ ስም":"Full Name",C=c?"የኢሜይል አድራሻ":"Email Address",k=c?"የስልክ ቁጥር":"Phone Number",T=c?"የሙያ መስክ":"Field of Expertise",m=c?"የሥራ ልምድ ዓመታት":"Years of Experience",M=c?"አጭር የሙያ ማጠቃለያ እና ልዩ የምስክር ወረቀቶች":"Professional Summary & Key Certifications",G=c?"የቅርብ ጊዜ የሥራ ኃላፊነቶችዎን፣ የመንጃ ፈቃድ ደረጃዎን (ለምሳሌ፡ ሕዝብ 2፣ ደረቅ 3) ወይም የኮሪደር ልምድዎን በአጭሩ ይግለጹ...":"Briefly describe your recent roles, licenses (e.g. Public 2, Heavy Freight), or special corridor experience...",F=c?"ወደ ባለሙያዎች ማውጫ አስገባ":"Submit to Talent Registry",U=c?`
      <option value="ሎጂስቲክስ እና የሥምሪት አስተዳደር">ሎጂስቲክስ እና የሥምሪት አስተዳደር</option>
      <option value="የተሽከርካሪዎች ጥገና / መካኒክ">የተሽከርካሪዎች ጥገና / መካኒክ</option>
      <option value="ባለሙያ የንግድ ተሽከርካሪ አሽከርካሪ">ባለሙያ የንግድ ተሽከርካሪ አሽከርካሪ</option>
      <option value="ፖሊሲ እና የሕግ ጉዳዮች">ፖሊሲ እና የሕግ ጉዳዮች</option>
      <option value="ፋይናንስ እና አስተዳደር">ፋይናንስ እና አስተዳደር</option>
    `:`
      <option value="Logistics & Dispatch">Logistics & Dispatch</option>
      <option value="Fleet Maintenance / Mechanic">Fleet Maintenance / Mechanic</option>
      <option value="Professional Commercial Driver">Professional Commercial Driver</option>
      <option value="Policy & Legal Affairs">Policy & Legal Affairs</option>
      <option value="Finance & Administration">Finance & Administration</option>
    `,N=c?`
      <option value="ከ1–3 ዓመታት">ከ1–3 ዓመታት</option>
      <option value="ከ3–5 ዓመታት">ከ3–5 ዓመታት</option>
      <option value="ከ5–10 ዓመታት">ከ5–10 ዓመታት</option>
      <option value="ከ10 ዓመታት በላይ">ከ10 ዓመታት በላይ</option>
    `:`
      <option value="1-3 Years">1–3 Years</option>
      <option value="3-5 Years">3–5 Years</option>
      <option value="5-10 Years">5–10 Years</option>
      <option value="10+ Years">10+ Years</option>
    `;u.innerHTML=`
    <div class="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative animate-in fade-in zoom-in-95 duration-200">
      <button type="button" class="modal-close-btn absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer border-none" aria-label="${o}">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <div class="mb-6">
        <span class="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full mb-2 uppercase tracking-wider">${p}</span>
        <h2 class="text-2xl font-bold text-slate-900">${x}</h2>
        <p class="text-xs sm:text-sm text-slate-600 mt-1">${E}</p>
      </div>

      <form id="talent-registry-form" class="space-y-4">
        <div id="talent-form-feedback" class="hidden p-3 rounded-xl text-xs font-semibold"></div>

        <div>
          <label for="talent-name" class="block text-xs font-bold text-slate-700 mb-1">${b} <span class="text-red-500">*</span></label>
          <input type="text" id="talent-name" required placeholder="${c?"ለምሳሌ፦ አልማዝ ታደሰ":"e.g. Almaz Tadesse"}" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-primary-500 outline-none">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label for="talent-email" class="block text-xs font-bold text-slate-700 mb-1">${C} <span class="text-red-500">*</span></label>
            <input type="email" id="talent-email" required placeholder="name@domain.com" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-primary-500 outline-none">
          </div>
          <div>
            <label for="talent-phone" class="block text-xs font-bold text-slate-700 mb-1">${k} <span class="text-red-500">*</span></label>
            <input type="tel" id="talent-phone" required placeholder="+251 911 00 0000" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-primary-500 outline-none">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label for="talent-field" class="block text-xs font-bold text-slate-700 mb-1">${T} <span class="text-red-500">*</span></label>
            <select id="talent-field" required class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-primary-500 outline-none bg-white">
              ${U}
            </select>
          </div>
          <div>
            <label for="talent-exp" class="block text-xs font-bold text-slate-700 mb-1">${m} <span class="text-red-500">*</span></label>
            <select id="talent-exp" required class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-primary-500 outline-none bg-white">
              ${N}
            </select>
          </div>
        </div>

        <div>
          <label for="talent-notes" class="block text-xs font-bold text-slate-700 mb-1">${M}</label>
          <textarea id="talent-notes" rows="3" placeholder="${G}" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-primary-500 outline-none resize-none"></textarea>
        </div>

        <div class="pt-2">
          <button type="submit" id="talent-submit-btn" class="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer border-none">
            <span>${F}</span>
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>
      </form>
    </div>
  `,Vs(u);const X=u.querySelector("#talent-registry-form"),J=u.querySelector("#talent-form-feedback"),P=u.querySelector("#talent-submit-btn");X&&J&&P&&X.addEventListener("submit",be=>{be.preventDefault(),P.disabled=!0,P.innerHTML=c?'<span>በመመዝገብ ላይ...</span> <i class="fa-solid fa-spinner fa-spin text-xs"></i>':'<span>Registering...</span> <i class="fa-solid fa-spinner fa-spin text-xs"></i>',setTimeout(()=>{J.className="p-3 rounded-xl text-xs font-semibold bg-primary-50 border border-primary-200 text-primary-800 flex items-center gap-2 mb-2",J.innerHTML=c?'<i class="fa-solid fa-circle-check text-primary-600"></i> መረጃዎ በተሳካ ሁኔታ ተመዝግቧል! ክፍት የሥራ ቦታዎች ሲኖሩ የሰው ኃይል ቡድናችን ያነጋግርዎታል።':'<i class="fa-solid fa-circle-check text-primary-600"></i> Profile Successfully Registered! Our HR team will reach out as matched vacancies open.',J.classList.remove("hidden"),X.reset(),P.disabled=!1,P.innerHTML=c?'<span>በተሳካ ሁኔታ ገብቷል</span> <i class="fa-solid fa-check text-xs"></i>':'<span>Submitted Successfully</span> <i class="fa-solid fa-check text-xs"></i>'},500)}),u.classList.remove("hidden"),u.classList.add("flex"),document.body.style.overflow="hidden"}function ry(n){const u=Zt()==="አማ",o=u?ey:Wv,p=o[n]||o.djibouti,x=document.getElementById("etef-modal-container");if(!x)return;const E=u?"የኮሪደር መረጃ መስኮት ዝጋ":"Close Modal",b=u?"የኢትራአፌ ዋና ጽሕፈት ቤት የጭነት ሎጂስቲክስና የኮሪደር ክትትል ዳይሬክቶሬት":"ETEF Secretariat Directorate of Freight Logistics & Corridor Watch",C=u?"አማካይ የትራንዚት ጊዜ":"Transit Benchmark",k=u?"የጉምሩክ ፍተሻ ጊዜ":"Customs Clearance",T=u?"የመስመሩ የፍተሻ ጣቢያዎች":"Operational Route Checkpoints",m=u?"ንቁ የትራንዚት መመሪያዎች እና ማሳሰቢያዎች":"Active Transit Directives & Advisories",M=u?"የኮሪደር ድንገተኛ አደጋ እና ብልሽት የእርዳታ መስመር":"Corridor Incident & Breakdown Helpline",G=u?"ወደ ስምሪት ይደውሉ":"Call Dispatch";x.innerHTML=`
    <div class="modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"></div>
    <div class="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-50 shadow-2xl m-4 border border-slate-100 flex flex-col">
      <div class="relative h-52 sm:h-60 overflow-hidden rounded-t-3xl shrink-0 bg-slate-900">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>
        <button class="modal-close-btn absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 backdrop-blur-sm z-10" aria-label="${E}">
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>
        <div class="absolute bottom-4 left-6 right-6 text-white">
          <span class="px-2.5 py-1 rounded-full text-xs font-bold ${p.badgeClass} shadow-md inline-block mb-2">${p.status}</span>
          <h2 class="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-md">${p.name}</h2>
          <span class="text-xs text-slate-300 block mt-1">${b}</span>
        </div>
      </div>

      <div class="p-6 sm:p-8 space-y-6">
        <div>
          <p class="text-sm text-slate-700 leading-relaxed">${p.summary}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">${C}</span>
            <span class="text-sm font-bold text-slate-800 mt-0.5 block">${p.transitHours}</span>
          </div>
          <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">${k}</span>
            <span class="text-sm font-bold text-primary-700 mt-0.5 block">${p.clearanceHours}</span>
          </div>
        </div>

        <div>
          <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-2">
            <i class="fa-solid fa-location-crosshairs text-primary-600"></i> ${T}
          </h3>
          <div class="space-y-2">
            ${p.keyCheckpoints.map(F=>`
              <div class="flex items-center gap-2.5 text-xs text-slate-700 bg-slate-50 px-3.5 py-2.5 rounded-xl border border-slate-200/80">
                <i class="fa-solid fa-location-dot text-primary-600 shrink-0"></i>
                <span class="font-medium">${F}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-primary-50 border border-primary-200">
          <h3 class="text-xs font-bold text-primary-900 uppercase tracking-wider mb-2 flex items-center gap-2">
            <i class="fa-solid fa-triangle-exclamation text-primary-600"></i> ${m}
          </h3>
          <ul class="space-y-1.5 text-xs text-primary-800">
            ${p.advisories.map(F=>`
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-circle-check text-primary-600 text-xs mt-0.5 shrink-0"></i>
                <span>${F}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <div class="p-4 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span class="text-[11px] text-slate-400 uppercase tracking-wider block">${M}</span>
            <span class="text-sm font-bold text-white">${p.helpline}</span>
          </div>
          <a href="tel:+251114717787" class="w-full sm:w-auto text-center px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs rounded-xl transition-colors shadow flex items-center justify-center gap-2">
            <i class="fa-solid fa-phone"></i>
            <span>${G}</span>
          </a>
        </div>
      </div>
    </div>
  `,Vs(x),x.classList.remove("hidden"),x.classList.add("flex"),document.body.style.overflow="hidden"}function ny(){const c=Zt()==="አማ",u=document.getElementById("etef-modal-container");if(!u)return;const o=c?"መስኮት ዝጋ":"Close Modal",p=c?"የኢትራአፌ የኮሪደር አደጋ ሪፖርት ማቅረቢያ":"ETEF Corridor Incident Report",x=c?"የ24/7 ብሔራዊ ድንገተኛ አደጋ እና ብልሽት ክትትል":"24/7 National Emergency & Breakdown Watch",E=c?"የኮሪደር መስመር *":"Corridor Artery *",b=c?"የአደጋው ዓይነት *":"Incident Category *",C=c?"የአስቸኳይነት ደረጃ *":"Urgency Level *",k=c?"የተሽከርካሪ ታርጋ / የፍሊት ቁጥር *":"Vehicle Plate / Fleet Number *",T=c?"የተገናኝ ስልክ ቁጥር *":"Contact Phone Number *",m=c?"ትክክለኛ ቦታ / የቅርብ መለያ ምልክት *":"Exact Location / Nearest Landmark *",M=c?"የሁኔታው አጭር መግለጫ *":"Brief Description of Situation *",G=c?"የተፈጠረውን ችግር እና የሚያስፈልገውን ድጋፍ በግልጽ ይግለጹ...":"Provide clear details on what happened and assistance needed...",F=c?"ሰርዝ":"Cancel",U=c?"የአደጋ ሪፖርቱን አስተላልፍ":"Transmit Incident Report",N=c?`
      <option value="የጅቡቲ – አዲስ አበባ የፍጥነት መንገድ">የጅቡቲ – አዲስ አበባ የፍጥነት መንገድ</option>
      <option value="የሞጆ ሁለገብ ደረቅ ወደብ ተርሚናል">የሞጆ ሁለገብ ደረቅ ወደብ ተርሚናል</option>
      <option value="የሞያሌ – ላሙ ኮሪደር (ኬንያ ድንበር)">የሞያሌ – ላሙ ኮሪደር (ኬንያ ድንበር)</option>
      <option value="የበርበራ – ድሬዳዋ ኮሪደር">የበርበራ – ድሬዳዋ ኮሪደር</option>
      <option value="ሌላ የሀገር ውስጥ የጭነት መስመር">ሌላ የሀገር ውስጥ የጭነት መስመር</option>
    `:`
      <option value="Djibouti – Addis Ababa">Djibouti – Addis Ababa Expressway</option>
      <option value="Modjo Dry Port">Modjo Multimodal Dry Port Terminal</option>
      <option value="Moyale – Lamu Corridor">Moyale – Lamu Corridor (Kenya OSBP)</option>
      <option value="Berbera – Dire Dawa">Berbera – Dire Dawa Corridor</option>
      <option value="Other Regional Highway">Other National Freight Artery</option>
    `,X=c?`
      <option value="የመኪና ብልሽት / የቶዊንግ እርዳታ ጥያቄ">የመኪና ብልሽት / የቶዊንግ እርዳታ ጥያቄ</option>
      <option value="ያልተገባ ክፍያ / ሕገ-ወጥ የኬላ መዘግየት">ያልተገባ ክፍያ / ሕገ-ወጥ የኬላ መዘግየት</option>
      <option value="የጉምሩክ ሰነድ ማጣራት መዘግየት">የጉምሩክ ሰነድ ማጣራት መዘግየት</option>
      <option value="የመንገድ መበላሸት / የድልድይ መዘጋት">የመንገድ መበላሸት / የድልድይ መዘጋት</option>
      <option value="የአሽከርካሪ ደህንነት እና የፀጥታ ስጋት">የአሽከርካሪ ደህንነት እና የፀጥታ ስጋት</option>
    `:`
      <option value="Mechanical Breakdown">Mechanical Breakdown / Tow Request</option>
      <option value="Arbitrary Roadside Stoppage">Arbitrary Fee / Illegal Checkpoint Delay</option>
      <option value="Customs Documentation Bottleneck">Customs Single Window Hold</option>
      <option value="Road Damage / Obstruction">Road Washout / Bridge Obstruction</option>
      <option value="Security Alert">Driver Safety & Security Alert</option>
    `,J=c?`
      <option value="ከፍተኛ (አስቸኳይ ፈጣን ድጋፍ የሚያስፈልገው)">ከፍተኛ (አስቸኳይ ፈጣን ድጋፍ የሚያስፈልገው)</option>
      <option value="መካከለኛ (በ2 ሰዓታት ውስጥ)">መካከለኛ (በ2 ሰዓታት ውስጥ)</option>
      <option value="መደበኛ ምዝገባ ብቻ / የታሪፍ ቅሬታ">መደበኛ ምዝገባ ብቻ / የታሪፍ ቅሬታ</option>
    `:`
      <option value="High (Immediate Assistance)">High (Immediate Assistance Required)</option>
      <option value="Medium (Within 2 Hours)">Medium (Within 2 Hours)</option>
      <option value="Log Report Only">Log Report Only / Tariff Dispute</option>
    `;u.innerHTML=`
    <div class="modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"></div>
    <div class="relative bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-50 shadow-2xl m-4 border border-slate-100">
      <div class="flex items-center justify-between pb-4 border-b border-slate-100">
        <div class="flex items-center gap-2.5">
          <div class="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-lg">
            <i class="fa-solid fa-truck-medical"></i>
          </div>
          <div>
            <h2 class="text-lg font-bold text-slate-900">${p}</h2>
            <span class="text-xs text-slate-400 block mt-0.5">${x}</span>
          </div>
        </div>
        <button class="modal-close-btn w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer border-none" aria-label="${o}">
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>
      </div>

      <div id="incident-report-feedback" class="hidden mb-4 p-4 rounded-xl border"></div>

      <form id="incident-report-form" class="space-y-4 text-xs mt-4">
        <div>
          <label class="block font-bold text-slate-700 mb-1">${E}</label>
          <select id="inc-corridor" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-white outline-none focus:ring-2 focus:ring-primary-500">
            ${N}
          </select>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">${b}</label>
            <select id="inc-category" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-white outline-none focus:ring-2 focus:ring-primary-500">
              ${X}
            </select>
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">${C}</label>
            <select id="inc-urgency" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-white outline-none focus:ring-2 focus:ring-primary-500">
              ${J}
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">${k}</label>
            <input type="text" id="inc-plate" required placeholder="${c?"ለምሳሌ፦ 3-84920 ኢት":"e.g. 3-84920 ET"}" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-primary-500">
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">${T}</label>
            <input type="tel" id="inc-phone" required placeholder="${c?"ለምሳሌ፦ 0911 234567":"e.g. 0911 234567"}" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-primary-500">
          </div>
        </div>

        <div>
          <label class="block font-bold text-slate-700 mb-1">${m}</label>
          <input type="text" id="inc-location" required placeholder="${c?"ለምሳሌ፦ አዋሽ 7 ኪሎ ሚዛን ጣቢያ፣ ኪሜ 142 ወደ ሰሜን":"e.g. Awash 7 Kilo Weighbridge, KM 142 heading North"}" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-primary-500">
        </div>

        <div>
          <label class="block font-bold text-slate-700 mb-1">${M}</label>
          <textarea id="inc-details" rows="3" required placeholder="${G}" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-primary-500 resize-none"></textarea>
        </div>

        <div class="pt-2 flex items-center justify-end gap-3">
          <button type="button" class="modal-close-btn px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold cursor-pointer">
            ${F}
          </button>
          <button type="submit" id="inc-submit-btn" class="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer">
            <i class="fa-solid fa-paper-plane"></i>
            <span>${U}</span>
          </button>
        </div>
      </form>
    </div>
  `,Vs(u),u.classList.remove("hidden"),u.classList.add("flex"),document.body.style.overflow="hidden";const P=u.querySelector("#incident-report-form"),be=u.querySelector("#incident-report-feedback");P&&be&&P.addEventListener("submit",we=>{we.preventDefault();const Se=P.querySelector("#inc-submit-btn");Se&&(Se.disabled=!0,Se.innerHTML=c?'<span>በማስተላለፍ ላይ...</span> <i class="fa-solid fa-spinner fa-spin"></i>':'<span>Transmitting...</span> <i class="fa-solid fa-spinner fa-spin"></i>'),setTimeout(()=>{be.className="mb-4 p-4 rounded-xl border bg-primary-50 border-primary-200 text-primary-800 text-xs flex items-start gap-3 shadow-sm",be.innerHTML=c?`
            <i class="fa-solid fa-circle-check text-primary-600 text-lg mt-0.5 shrink-0"></i>
            <div>
              <span class="font-bold block text-primary-950 text-sm">የድንገተኛ ስምሪት ጥሪ በተሳካ ሁኔታ ተላልፏል</span>
              <p class="text-xs text-primary-800 mt-1">የኮሪደር አደጋ ሪፖርትዎ ተመዝግቦ ለኢትራአፌ ብሔራዊ የሎጂስቲክስ ፈጣን ምላሽ ዴስክ ተልኳል። ተረኛ አስተባባሪው ሪፖርትዎን እየተመለከተ ሲሆን በአጭር ጊዜ ውስጥ በስልክ ቁጥርዎ ያነጋግርዎታል።</p>
            </div>
          `:`
            <i class="fa-solid fa-circle-check text-primary-600 text-lg mt-0.5 shrink-0"></i>
            <div>
              <span class="font-bold block text-primary-950 text-sm">Emergency Dispatch Alert Transmitted</span>
              <p class="text-xs text-primary-800 mt-1">Your corridor incident report has been logged and dispatched to the ETEF National Logistics Rapid Response Desk. A duty coordinator is reviewing your report and will reach your contact number shortly.</p>
            </div>
          `,be.classList.remove("hidden"),P.reset(),Se&&(Se.disabled=!1,Se.innerHTML=c?'<i class="fa-solid fa-check"></i> <span>ሪፖርቱ ተመዝግቧል</span>':'<i class="fa-solid fa-check"></i> <span>Report Logged</span>',setTimeout(()=>{En()},3e3))},700)})}function Vs(n){n.querySelectorAll(".modal-close-btn").forEach(u=>{u.addEventListener("click",()=>En())})}const oy=[{path:"/",page:i0},{path:"/home",page:i0},{path:"/about",page:Cv},{path:"/partners",page:n0},{path:"/partner",page:n0},{path:"/vacancies",page:r0},{path:"/vacancy",page:r0},{path:"/membership",page:d0},{path:"/memberships",page:d0},{path:"/news",page:Dv},{path:"/faq",page:o0},{path:"/faqs",page:o0},{path:"/contact",page:c0},{path:"/contact-us",page:c0},{path:"/privacy",page:u0},{path:"/privacy-policy",page:u0},{path:"/terms",page:p0},{path:"/terms-of-service",page:p0},{path:"/admin",page:Gv},{path:"*",page:Kv}];function cy({page:n}){const c=Da(),u=_0(),[o,p]=D.useState(Zt);D.useEffect(()=>wv(b=>{p(b)}),[]);const x=typeof n.title=="object"?n.title[o]||n.title.ENG||"ETEF":n.title,E=typeof n.markup=="function"?n.markup(o):typeof n.markup=="object"?n.markup[o]||n.markup.ENG||"":n.markup;return D.useEffect(()=>{document.title=x,ty();const b=document.getElementById("page-content");if(!b)return;if(b.innerHTML=E,window.scrollTo({top:0,behavior:"instant"}),c.pathname==="/admin"){b.querySelectorAll('[id^="tab-"]').forEach(H=>H.classList.add("hidden"));const z=document.getElementById("tab-dashboard");z&&z.classList.remove("hidden")}const C=b.querySelector("#faq-search-input"),k=b.querySelectorAll(".faq-item"),T=b.querySelectorAll(".faq-filter-btn");let m="all";const M=()=>{const L=(C?.value||"").toLowerCase().trim();k.forEach(z=>{const H=z.getAttribute("data-category")||"",pe=z.textContent?.toLowerCase()||"",ie=m==="all"||H===m,ce=!L||pe.includes(L);ie&&ce?z.classList.remove("hidden"):z.classList.add("hidden")})};C&&C.addEventListener("input",M),T.length>0&&T.forEach(L=>{L.addEventListener("click",()=>{T.forEach(z=>{z.className="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors"}),L.className="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-600 text-white shadow-sm",m=L.getAttribute("data-category")||"all",M()})});const G=b.querySelector("#news-search-input"),F=b.querySelectorAll(".news-card"),U=b.querySelectorAll(".news-filter-btn"),N=b.querySelector("#news-no-results");let X="all";const J=()=>{const L=(G?.value||"").toLowerCase().trim();let z=0;F.forEach(H=>{const pe=H.getAttribute("data-category")||"",ie=H.textContent?.toLowerCase()||"",ce=X==="all"||pe===X,tt=!L||ie.includes(L);ce&&tt?(H.classList.remove("hidden"),z++):H.classList.add("hidden")}),N&&(z===0?N.classList.remove("hidden"):N.classList.add("hidden"))};G&&G.addEventListener("input",J),U.length>0&&U.forEach(L=>{L.addEventListener("click",()=>{U.forEach(z=>{z.className="news-filter-btn px-4 py-2 bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm rounded-full border border-slate-200 transition-colors cursor-pointer"}),L.className="news-filter-btn px-4 py-2 bg-primary-600 text-white font-medium text-sm rounded-full shadow-sm transition-colors cursor-pointer border-none",X=L.getAttribute("data-category")||"all",J()})});const P=b.querySelector("#job-search-input"),be=b.querySelector("#job-category-select"),we=b.querySelector("#job-employer-select"),Se=b.querySelector("#job-search-btn"),le=b.querySelectorAll(".job-listing-card"),re=b.querySelector("#job-no-results"),Pe=()=>{const L=(P?.value||"").toLowerCase().trim(),z=(be?.value||"").toLowerCase(),H=(we?.value||"").toLowerCase();let pe=0;le.forEach(ie=>{const ce=(ie.getAttribute("data-category")||"").toLowerCase(),tt=(ie.getAttribute("data-employer")||"").toLowerCase(),Fe=ie.textContent?.toLowerCase()||"";(!L||Fe.includes(L))&&(!z||ce===z)&&(!H||tt===H)?(ie.classList.remove("hidden"),pe++):ie.classList.add("hidden")}),re&&(pe===0?re.classList.remove("hidden"):re.classList.add("hidden"))};P&&P.addEventListener("input",Pe),be&&be.addEventListener("change",Pe),we&&we.addEventListener("change",Pe),Se&&Se.addEventListener("click",Pe);const Ye=b.querySelector("#toast"),nt=b.querySelector("#toastMessage"),Be=L=>{Ye&&nt&&(nt.textContent=L,Ye.classList.remove("translate-y-20","opacity-0"),setTimeout(()=>Ye.classList.add("translate-y-20","opacity-0"),3e3))};if(c.pathname==="/admin"){const L=qe=>{const ke=document.getElementById(qe);ke&&(ke.classList.remove("hidden"),ke.classList.add("flex"))},z=()=>{b.querySelectorAll('[id^="admin-modal-"]').forEach(ke=>{ke.classList.add("hidden"),ke.classList.remove("flex")})};b.querySelector("#admin-open-member-modal")?.addEventListener("click",()=>L("admin-modal-member")),b.querySelector("#admin-open-vacancy-modal")?.addEventListener("click",()=>L("admin-modal-vacancy")),b.querySelector("#admin-open-news-modal")?.addEventListener("click",()=>L("admin-modal-news")),b.querySelector("#admin-open-partner-modal")?.addEventListener("click",()=>L("admin-modal-partner")),b.querySelectorAll(".admin-modal-close, .admin-modal-backdrop").forEach(qe=>{qe.addEventListener("click",z)});const H=b.querySelector("#admin-member-search"),pe=b.querySelector("#admin-member-sector-filter"),ie=b.querySelectorAll(".admin-member-row"),ce=()=>{const qe=(H?.value||"").toLowerCase().trim(),ke=pe?.value||"all";ie.forEach(ot=>{const at=ot.getAttribute("data-sector")||"",mt=ot.textContent?.toLowerCase()||"",We=ke==="all"||at===ke,Xe=!qe||mt.includes(qe);We&&Xe?ot.classList.remove("hidden"):ot.classList.add("hidden")})};H?.addEventListener("input",ce),pe?.addEventListener("change",ce);const tt=b.querySelector("#admin-form-new-member");tt?.addEventListener("submit",qe=>{qe.preventDefault();const ke=(b.querySelector("#member-org-name")?.value||"").trim(),ot=b.querySelector("#member-sector")?.value||"Freight",at=(b.querySelector("#member-region")?.value||"").trim(),mt=(b.querySelector("#member-fleet")?.value||"").trim(),We=b.querySelector("#member-tier")?.value||"Corporate Member",Xe=b.querySelector("#admin-members-table tbody");if(Xe&&ke){const Dt=document.createElement("tr");Dt.className="hover:bg-slate-50/50 admin-member-row",Dt.setAttribute("data-sector",ot),Dt.innerHTML=`
            <td class="py-4 px-6 font-bold text-slate-900">${ke}</td>
            <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">${ot}</span></td>
            <td class="py-4 px-6 text-slate-600">${at||"Addis Ababa"}</td>
            <td class="py-4 px-6 font-semibold text-slate-900">${mt||"N/A"}</td>
            <td class="py-4 px-6"><span class="text-xs font-semibold text-primary-700">${We}</span></td>
            <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
            <td class="py-4 px-6 text-right">
                <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
            </td>
          `,Xe.prepend(Dt),tt.reset(),z(),Be(`Member "${ke}" registered successfully!`)}});const Fe=b.querySelector("#admin-form-new-vacancy");Fe?.addEventListener("submit",qe=>{qe.preventDefault();const ke=(b.querySelector("#vacancy-title")?.value||"").trim(),ot=(b.querySelector("#vacancy-station")?.value||"").trim(),at=b.querySelector("#vacancy-type")?.value||"Full-Time",mt=(b.querySelector("#vacancy-deadline")?.value||"").trim(),We=b.querySelector("#admin-vacancies-table tbody");if(We&&ke){const Xe=document.createElement("tr");Xe.className="hover:bg-slate-50/50",Xe.innerHTML=`
            <td class="py-4 px-6 font-bold text-slate-900">${ke}</td>
            <td class="py-4 px-6 text-slate-600">${ot}</td>
            <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700">${at}</span></td>
            <td class="py-4 px-6 font-bold text-primary-600">0 Candidates</td>
            <td class="py-4 px-6 text-slate-500">${mt}</td>
            <td class="py-4 px-6"><span class="vacancy-status-pill px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
            <td class="py-4 px-6 text-right space-x-2">
                <button class="admin-vacancy-toggle-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">Close</button>
            </td>
          `,We.prepend(Xe),Fe.reset(),z(),Be(`Vacancy "${ke}" published!`)}});const Ie=b.querySelector("#admin-form-new-news");Ie?.addEventListener("submit",qe=>{qe.preventDefault();const ke=(b.querySelector("#news-title")?.value||"").trim(),ot=b.querySelector("#news-category")?.value||"Industry News",at=b.querySelector("#news-status")?.value||"Published",mt=b.querySelector("#admin-news-table tbody");if(mt&&ke){const We=document.createElement("tr");We.className="hover:bg-slate-50/50";const Xe=at==="Published";We.innerHTML=`
            <td class="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">${ke}</td>
            <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">${ot}</span></td>
            <td class="py-4 px-6 text-slate-500">Today</td>
            <td class="py-4 px-6 font-semibold text-slate-700">0 views</td>
            <td class="py-4 px-6"><span class="px-2.5 py-1 ${Xe?"bg-primary-50 text-primary-700":"bg-slate-100 text-slate-600"} text-xs font-bold rounded-full">${at}</span></td>
            <td class="py-4 px-6 text-right space-x-2">
                <button class="admin-news-status-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">${Xe?"Unpublish":"Publish"}</button>
            </td>
          `,mt.prepend(We),Ie.reset(),z(),Be(`Article "${ke.slice(0,30)}..." saved!`)}});const ba=b.querySelector("#admin-form-new-partner");ba?.addEventListener("submit",qe=>{qe.preventDefault();const ke=(b.querySelector("#partner-name")?.value||"").trim(),ot=(b.querySelector("#partner-sector")?.value||"").trim(),at=b.querySelector("#partner-tier")?.value||"Tier 1 Partner",mt=(b.querySelector("#partner-desc")?.value||"").trim(),We=b.querySelector("#admin-partners-grid");if(We&&ke){const Xe=document.createElement("div");Xe.className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between",Xe.innerHTML=`
            <div>
                <div class="flex justify-between items-start mb-3">
                    <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-primary-50 text-primary-700 border border-primary-100">${at}</span>
                    <span class="text-xs font-semibold text-primary-600 flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Active</span>
                </div>
                <h4 class="font-bold text-slate-900 text-base mb-1">${ke}</h4>
                <p class="text-xs text-slate-500 mb-3">${ot}</p>
                <p class="text-xs text-slate-600 leading-relaxed mb-4">${mt||"Official strategic partnership and institutional accord."}</p>
            </div>
            <div class="pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                <span class="text-slate-400">Added Today</span>
                <button class="text-slate-600 hover:text-primary-600 font-semibold">Edit Agreement</button>
            </div>
          `,We.prepend(Xe),ba.reset(),z(),Be(`Partner "${ke}" added!`)}})}b.querySelectorAll("#tab-dashboard table button").forEach(L=>{L.addEventListener("click",()=>{const z=L.closest("tr"),H=L.textContent?.trim();if(!z||!H)return;const pe=z.querySelector("td:nth-child(5)"),ie=z.querySelector("td:nth-child(6)");H==="Approve"?(pe&&(pe.innerHTML='<span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Approved</span>'),ie&&(ie.innerHTML='<button class="px-3 py-1 bg-slate-100 text-slate-700 font-semibold rounded hover:bg-slate-200 transition-colors">View</button>'),Be("Membership application approved successfully.")):H==="Reject"&&(pe&&(pe.innerHTML='<span class="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">Rejected</span>'),ie&&(ie.innerHTML='<button class="px-3 py-1 bg-slate-100 text-slate-700 font-semibold rounded hover:bg-slate-200 transition-colors">Re-evaluate</button>'),Be("Membership application rejected."))})});const Tt=b.querySelector("#contact-form"),Te=b.querySelector("#contact-form-feedback");Tt&&Te&&Tt.addEventListener("submit",L=>{L.preventDefault();const z=Tt.querySelector("#contact-submit-btn"),H=Zt()==="አማ";z&&(z.disabled=!0,z.innerHTML=H?'<span>በመላክ ላይ...</span> <i class="fa-solid fa-spinner fa-spin"></i>':'<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>'),setTimeout(()=>{Te.className="mb-6 p-4 rounded-xl border bg-primary-50 border-primary-200 text-primary-950 text-sm flex items-start gap-3 shadow-sm",Te.innerHTML=H?`
              <i class="fa-solid fa-circle-check text-primary-600 text-lg mt-0.5"></i>
              <div>
                <span class="font-bold block text-primary-950">መልእክትዎ በተሳካ ሁኔታ ደርሷል!</span>
                <p class="text-xs text-primary-800 mt-0.5">የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን ዋና ጽህፈት ቤትን ስላነጋገሩ እናመሰግናለን። ጥያቄዎ ወደሚመለከተው የስራ ክፍል ተመርቷል። በኢሜይል ወይም በስልክ በ24 የስራ ሰዓታት ውስጥ ምላሽ እንሰጣለን።</p>
              </div>
            `:`
              <i class="fa-solid fa-circle-check text-primary-600 text-lg mt-0.5"></i>
              <div>
                <span class="font-bold block text-primary-950">Inquiry Received Successfully!</span>
                <p class="text-xs text-primary-800 mt-0.5">Thank you for contacting the Ethiopian Transport Employers Federation Secretariat. Your inquiry has been routed to the appropriate department. We will respond via email or phone within 24 business hours.</p>
              </div>
            `,Te.classList.remove("hidden"),Tt.reset(),z&&(z.disabled=!1,z.innerHTML=H?'<span>መልእክት ተልኳል</span> <i class="fa-solid fa-check"></i>':'<span>Message Sent</span> <i class="fa-solid fa-check"></i>',setTimeout(()=>{z.innerHTML=H?'<span>መልእክት ላክ</span> <i class="fa-solid fa-paper-plane text-sm"></i>':'<span>Send Message</span> <i class="fa-solid fa-paper-plane text-sm"></i>'},3e3))},600)});const q=b.querySelector("#membership-form"),I=b.querySelector("#membership-alert");q&&I&&q.addEventListener("submit",L=>{L.preventDefault();const z=q.querySelector("#membership-submit-btn"),H=Zt()==="አማ";z&&(z.disabled=!0,z.innerHTML=H?'<span>ማመልከቻውን በመመዝገብ ላይ...</span> <i class="fa-solid fa-spinner fa-spin"></i>':'<span>Processing Application...</span> <i class="fa-solid fa-spinner fa-spin"></i>'),setTimeout(()=>{I.className="mb-6 p-5 rounded-2xl border bg-primary-50 border-primary-200 text-primary-950 text-sm flex items-start gap-3 shadow-sm",I.innerHTML=H?`
              <i class="fa-solid fa-circle-check text-primary-600 text-xl mt-0.5 shrink-0"></i>
              <div>
                <span class="font-bold block text-primary-950 text-base">የአባልነት ማመልከቻ በተሳካ ሁኔታ ገብቷል!</span>
                <p class="text-xs sm:text-sm text-primary-800 mt-1 leading-relaxed">ድርጅትዎን በኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን ስለመዘገቡ እናመሰግናለን። የዋና ጽህፈት ቤቱ የአባልነት ዳይሬክቶሬት ማመልከቻዎን የተቀበለ ሲሆን ሰነዶቹን ያጣራል። ይፋዊ የማረጋገጫ ኢሜይል ከዝርዝር መመሪያ ጋር በ2 የስራ ቀናት ውስጥ ይላክልዎታል።</p>
              </div>
            `:`
              <i class="fa-solid fa-circle-check text-primary-600 text-xl mt-0.5 shrink-0"></i>
              <div>
                <span class="font-bold block text-primary-950 text-base">Membership Application Submitted!</span>
                <p class="text-xs sm:text-sm text-primary-800 mt-1 leading-relaxed">Thank you for registering your organization with the Ethiopian Transport Employers Federation. Our Secretariat Membership Directorate has received your submission and will review the documentation. An official confirmation email with onboarding materials will be sent to your registered address within 2 business days.</p>
              </div>
            `,I.classList.remove("hidden"),q.reset(),z&&(z.disabled=!1,z.innerHTML=H?'<span>ማመልከቻው ተቀብሏል</span> <i class="fa-solid fa-check"></i>':'<span>Application Received</span> <i class="fa-solid fa-check"></i>',setTimeout(()=>{z.innerHTML=H?'<span>ማመልከቻ ያስገቡ</span> <i class="fa-solid fa-paper-plane text-sm"></i>':'<span>SUBMIT APPLICATION</span> <i class="fa-solid fa-paper-plane text-sm"></i>'},3500))},700)});const W=b.querySelector("#calc-fleet-slider"),je=b.querySelector("#calc-fleet-display"),Ee=b.querySelector("#calc-dues-amount"),Et=b.querySelector("#calc-tier-badge"),$t=b.querySelectorAll(".calc-sector-btn"),xa=b.querySelector("#calc-apply-btn");if(W&&Ee&&Et){let L=450,z=15e3,H="Freight Transport";const pe=()=>{const ie=Zt()==="አማ",ce=parseInt(W.value,10)||1;je&&(je.textContent=ie?`${ce} ${ce===1?"ተሽከርካሪ":"ተሽከርካሪዎች"}`:`${ce} ${ce===1?"Vehicle":"Vehicles"}`);const tt=z+ce*L;Ee.textContent=tt.toLocaleString();let Fe=ie?"ተባባሪ አባል":"Associate Member",Ie="px-3 py-1 rounded-full text-xs font-bold bg-slate-500/20 text-slate-300 border border-slate-400/30";ce>150?(Fe=ie?"ስልታዊ ጠቅላላ ጉባኤ አባል":"Strategic Assembly Member",Ie="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/40"):ce>50?(Fe=ie?"ሥራ አስፈፃሚ አባል":"Executive Member",Ie="px-3 py-1 rounded-full text-xs font-bold bg-primary-500/30 text-primary-200 border border-primary-400/40"):ce>10&&(Fe=ie?"ኮርፖሬት አባል":"Corporate Member",Ie="px-3 py-1 rounded-full text-xs font-bold bg-primary-500/20 text-primary-300 border border-primary-400/30"),Et.textContent=Fe,Et.className=Ie};$t.forEach(ie=>{ie.addEventListener("click",()=>{$t.forEach(ce=>{ce.className="calc-sector-btn px-3 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer"}),ie.className="calc-sector-btn active px-3 py-2.5 rounded-xl border border-primary-400 bg-primary-600 text-white font-bold text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer shadow-sm",L=parseInt(ie.getAttribute("data-rate")||"450",10),z=parseInt(ie.getAttribute("data-base")||"15000",10),H=ie.getAttribute("data-sector")||"Freight Transport",pe()})}),W.addEventListener("input",pe),xa&&xa.addEventListener("click",()=>{const ie=Zt()==="አማ",ce=W.value,tt=Et.textContent||(ie?"ኮርፖሬት አባል":"Corporate Member"),Fe=b.querySelector("#sector"),Ie=b.querySelector("#membership-form");Fe&&(Fe.value=ie?`${H} (${ce} የንግድ ክፍሎች - ${tt})`:`${H} (${ce} Commercial Units - ${tt})`,Fe.classList.add("ring-2","ring-primary-500"),setTimeout(()=>Fe.classList.remove("ring-2","ring-primary-500"),2e3)),Ie&&Ie.scrollIntoView({behavior:"smooth",block:"start"}),Be(ie?`የተመረጠው ${H} ደረጃ በማመልከቻ ቅጹ ላይ ተሞልቷል።`:`Selected ${H} tier applied to registration form.`)})}b.querySelectorAll(".doc-download-btn").forEach(L=>{L.addEventListener("click",()=>{const z=Zt()==="አማ",H=L.getAttribute("data-doc")||(z?"የኢትራአፌ ይፋዊ ሰነድ":"ETEF Official Documentation");Be(z?`ሰነድ በማውረድ ላይ፦ "${H}"...`:`Preparing download: "${H}"...`),setTimeout(()=>{Be(z?`ሰነዱ ዝግጁ ሆኗል፦ "${H}"`:`Download ready: "${H}"`)},1200)})});const O=b.querySelectorAll(".directorate-tab-btn");O.forEach(L=>{L.addEventListener("click",()=>{const z=L.getAttribute("data-directorate");if(!z)return;O.forEach(pe=>{pe.classList.remove("active","bg-primary-600","text-white","shadow-md","shadow-primary-600/20"),pe.classList.add("bg-slate-100","text-slate-700","hover:bg-slate-200")}),L.classList.add("active","bg-primary-600","text-white","shadow-md","shadow-primary-600/20"),L.classList.remove("bg-slate-100","text-slate-700","hover:bg-slate-200"),b.querySelectorAll(".directorate-panel").forEach(pe=>{pe.classList.add("hidden"),pe.classList.remove("block")});const H=b.querySelector(`#directorate-panel-${z}`);H&&(H.classList.remove("hidden"),H.classList.add("block"))})});const K=b.querySelectorAll(".timeline-year-btn");K.forEach(L=>{L.addEventListener("click",()=>{const z=L.getAttribute("data-year");if(!z)return;K.forEach(ce=>{ce.classList.remove("active");const tt=ce.querySelector("span:first-child"),Fe=ce.querySelector("span:last-child");tt&&(tt.className="w-12 h-12 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-white flex items-center justify-center font-bold text-sm border-2 border-slate-700 group-hover:border-slate-500 transition-all"),Fe&&(Fe.className="text-xs font-semibold text-slate-400 group-hover:text-slate-200")}),L.classList.add("active");const H=L.querySelector("span:first-child"),pe=L.querySelector("span:last-child");H&&(H.className="w-12 h-12 rounded-2xl bg-primary-600 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary-600/40 border-2 border-primary-400 transition-all"),pe&&(pe.className="text-xs font-bold text-primary-300"),b.querySelectorAll(".timeline-content-card").forEach(ce=>{ce.classList.add("hidden"),ce.classList.remove("block")});const ie=b.querySelector(`#timeline-card-${z}`);ie&&(ie.classList.remove("hidden"),ie.classList.add("block"))})});let Z=null;const de=b.querySelectorAll(".hero-bg-slide"),ve=b.querySelectorAll(".hero-slide-dot");let fe=0;const Q=L=>{de.length!==0&&(fe=(L+de.length)%de.length,de.forEach((z,H)=>{H===fe?(z.classList.remove("opacity-0","scale-105"),z.classList.add("opacity-100","scale-100")):(z.classList.remove("opacity-100","scale-100"),z.classList.add("opacity-0","scale-105"))}),ve.forEach((z,H)=>{H===fe?z.className="hero-slide-dot w-8 h-2 rounded-full bg-white transition-all duration-300 cursor-pointer shadow-sm":z.className="hero-slide-dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/80 transition-all duration-300 cursor-pointer shadow-sm"}))},ae=()=>{Q(fe+1)},na=()=>{Q(fe-1)},Ja=()=>{Z&&clearInterval(Z),Z=window.setInterval(ae,4500)};de.length>0&&Ja();const Ra=L=>{const z=L.target;if(z.closest("#hero-slide-next")){L.preventDefault(),ae(),Ja();return}if(z.closest("#hero-slide-prev")){L.preventDefault(),na(),Ja();return}const ie=z.closest(".hero-slide-dot");if(ie){L.preventDefault();const ee=Array.from(ve).indexOf(ie);ee!==-1&&(Q(ee),Ja());return}const ce=z.closest(".faq-accordion-header");if(ce){L.preventDefault();const ee=ce.closest(".faq-item");if(ee){const He=ee.querySelector(".faq-accordion-content"),_a=ee.querySelector(".faq-icon i");He&&(He.classList.contains("hidden")?(He.classList.remove("hidden"),_a&&(_a.className="fa-solid fa-chevron-up text-xs")):(He.classList.add("hidden"),_a&&(_a.className="fa-solid fa-chevron-down text-xs")))}return}if(z.closest("#partner-carousel-prev")){L.preventDefault();const ee=document.getElementById("partner-carousel-track");ee&&ee.scrollBy({left:-340,behavior:"smooth"});return}if(z.closest("#partner-carousel-next")){L.preventDefault();const ee=document.getElementById("partner-carousel-track");ee&&ee.scrollBy({left:340,behavior:"smooth"});return}const Ie=z.closest(".bio-modal-trigger");if(Ie){L.preventDefault();const ee=Ie.getAttribute("data-bio");ee&&ay(ee);return}const ba=z.closest(".article-modal-trigger");if(ba){L.preventDefault();const ee=ba.getAttribute("data-article-id");ee&&ly(ee);return}const qe=z.closest(".job-modal-trigger");if(qe){L.preventDefault();const ee=qe.getAttribute("data-job-id");ee&&sy(ee);return}if(z.closest(".talent-modal-trigger")){L.preventDefault(),iy();return}const ot=z.closest(".corridor-advisory-btn");if(ot){L.preventDefault();const ee=ot.getAttribute("data-corridor-id");ee&&ry(ee);return}if(z.closest("#btn-corridor-incident-report")){L.preventDefault(),ny();return}const mt=z.closest(".lang-dropdown-btn");if(mt){L.preventDefault();const He=mt.closest(".lang-dropdown-container")?.querySelector(".lang-dropdown-menu");He&&He.classList.toggle("hidden");return}const We=z.closest(".lang-select-option");if(We){L.preventDefault();const ee=(We.getAttribute("data-lang")||"").trim();We.getAttribute("data-lang-name"),(ee==="ENG"||ee==="አማ")&&(yv(ee),document.querySelectorAll(".lang-dropdown-menu").forEach(He=>{He.classList.add("hidden")}),Ye&&nt&&(nt.textContent=ee==="ENG"?"Language switched to English":"ቋንቋ ወደ አማርኛ ተቀይሯል",Ye.classList.remove("translate-y-20","opacity-0"),setTimeout(()=>Ye.classList.add("translate-y-20","opacity-0"),2500)));return}z.closest(".lang-dropdown-container")||document.querySelectorAll(".lang-dropdown-menu").forEach(ee=>{ee.classList.add("hidden")});const Xe=z.closest("button");if(Xe&&Xe.querySelector(".fa-bars, .fa-xmark")){const ee=document.getElementById("etef-mobile-drawer");if(ee){ee.remove();const He=Xe.querySelector("i");He&&(He.className="fa-solid fa-bars text-2xl")}else{const He=b.querySelector("header");if(He){const _a=Zt(),Ue=yd[_a].nav,Ma=document.createElement("div");Ma.id="etef-mobile-drawer",Ma.className="md:hidden bg-primary-700 text-white px-6 py-5 border-t border-primary-500/30 flex flex-col space-y-2 shadow-lg",Ma.innerHTML=`
              <a href="/" class="py-2 text-white font-medium hover:text-primary-100 transition-colors">${Ue.home}</a>
              <a href="/about" class="py-2 text-white font-medium hover:text-primary-100 transition-colors">${Ue.about}</a>
              <a href="/news" class="py-2 text-white font-medium hover:text-primary-100 transition-colors">${Ue.news}</a>
              <a href="/vacancies" class="py-2 text-white font-medium hover:text-primary-100 transition-colors">${Ue.vacancies}</a>
              <a href="/partners" class="py-2 text-white font-medium hover:text-primary-100 transition-colors">${Ue.partners}</a>
              <a href="/faq" class="py-2 text-white font-medium hover:text-primary-100 transition-colors">${Ue.faq}</a>
              <a href="/contact" class="py-2 text-white font-medium hover:text-primary-100 transition-colors">${Ue.contact}</a>
              <a href="/membership" class="mt-2 text-center py-2.5 px-4 bg-white text-primary-600 rounded-lg font-bold shadow-sm">${Ue.join}</a>
            `,He.insertAdjacentElement("afterend",Ma);const Jt=Xe.querySelector("i");Jt&&(Jt.className="fa-solid fa-xmark text-2xl")}}return}const Dt=z.closest("a");if(!Dt)return;const Lt=Dt.getAttribute("href");if(!Lt)return;const Jl=Dt.closest("#etef-mobile-drawer");if(Jl){Jl.remove();const He=b.querySelector("header")?.querySelector(".fa-xmark");He&&(He.className="fa-solid fa-bars text-2xl")}if(Lt.startsWith("#")&&c.pathname==="/admin"){L.preventDefault();const ee=Lt.replace("#","").replace("nav-",""),He=document.getElementById(`tab-${ee}`);if(He){b.querySelectorAll('[id^="tab-"]').forEach(Jt=>Jt.classList.add("hidden")),He.classList.remove("hidden"),b.querySelectorAll("aside nav a").forEach(Jt=>{Jt.classList.remove("bg-primary-600","text-white"),Jt.classList.add("hover:bg-slate-800","text-slate-400","hover:text-white")}),Dt.classList.add("bg-primary-600","text-white"),Dt.classList.remove("hover:bg-slate-800","text-slate-400","hover:text-white");const Ma=b.querySelector("#pageTitle");if(Ma){const Jt={dashboard:"Admin Overview",memberships:"Membership Management",vacancies:"Job Vacancies Management",news:"News & Media Management",partners:"Partners & Sponsors"};Ma.textContent=Jt[ee]||"Secretariat Portal"}}return}if(!(Lt.startsWith("http://")||Lt.startsWith("https://")||Lt.startsWith("mailto:")||Lt.startsWith("tel:")))try{const ee=new URL(Dt.href,window.location.origin);if(ee.origin===window.location.origin){L.preventDefault();const He=ee.pathname.replace(/\.html$/,"")||"/";u(He+ee.search+ee.hash)}}catch{if(Lt.startsWith("/")){L.preventDefault();const ee=Lt.replace(/\.html$/,"");u(ee)}}};return b.addEventListener("click",Ra),()=>{b.removeEventListener("click",Ra),Z&&clearInterval(Z),C&&C.removeEventListener("input",M)}},[n,o,x,E,c.pathname,u]),Tl.createElement("div",{id:"page-content"})}function dy(){const n=oy.map(({path:c,page:u})=>Tl.createElement(z0,{key:c,path:c,element:Tl.createElement(cy,{page:u})}));return Tl.createElement(dv,null,Tl.createElement(Uh,null,n))}Ug.createRoot(document.getElementById("root")).render(Tl.createElement(Tl.StrictMode,null,Tl.createElement(dy)));
