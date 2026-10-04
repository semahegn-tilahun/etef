(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))n(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const E of m.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&n(E)}).observe(document,{childList:!0,subtree:!0});function u(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function n(p){if(p.ep)return;p.ep=!0;const m=u(p);fetch(p.href,m)}})();function Ng(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var sc={exports:{}},le={};var Q0;function Og(){if(Q0)return le;Q0=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),E=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),z=Symbol.for("react.view_transition"),G=Symbol.iterator;function Y(h){return h===null||typeof h!="object"?null:(h=G&&h[G]||h["@@iterator"],typeof h=="function"?h:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,Z={};function P(h,L,$){this.props=h,this.context=L,this.refs=Z,this.updater=$||U}P.prototype.isReactComponent={},P.prototype.setState=function(h,L){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,L,"setState")},P.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function I(){}I.prototype=P.prototype;function be(h,L,$){this.props=h,this.context=L,this.refs=Z,this.updater=$||U}var we=be.prototype=new I;we.constructor=be,_(we,P.prototype),we.isPureReactComponent=!0;var Te=Array.isArray;function se(){}var re={H:null,A:null,T:null,S:null},Je=Object.prototype.hasOwnProperty;function Fe(h,L,$){var K=$.ref;return{$$typeof:o,type:h,key:L,ref:K!==void 0?K:null,props:$}}function ot(h,L){return Fe(h.type,L,h.props)}function ze(h){return typeof h=="object"&&h!==null&&h.$$typeof===o}function Kt(h){var L={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function($){return L[$]})}var Tt=/\/+/g;function Ae(h,L){return typeof h=="object"&&h!==null&&h.key!=null?Kt(""+h.key):L.toString(36)}function q(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(se,se):(h.status="pending",h.then(function(L){h.status==="pending"&&(h.status="fulfilled",h.value=L)},function(L){h.status==="pending"&&(h.status="rejected",h.reason=L)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function W(h,L,$,K,ue){var ve=typeof h;(ve==="undefined"||ve==="boolean")&&(h=null);var fe=!1;if(h===null)fe=!0;else switch(ve){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(h.$$typeof){case o:case d:fe=!0;break;case T:return fe=h._init,W(fe(h._payload),L,$,K,ue)}}if(fe)return ue=ue(h),fe=K===""?"."+Ae(h,0):K,Te(ue)?($="",fe!=null&&($=fe.replace(Tt,"$&/")+"/"),W(ue,L,$,"",function(oa){return oa})):ue!=null&&(ze(ue)&&(ue=ot(ue,$+(ue.key==null||h&&h.key===ue.key?"":(""+ue.key).replace(Tt,"$&/")+"/")+fe)),L.push(ue)),1;fe=0;var X=K===""?".":K+":";if(Te(h))for(var ae=0;ae<h.length;ae++)K=h[ae],ve=X+Ae(K,ae),fe+=W(K,L,$,ve,ue);else if(ae=Y(h),typeof ae=="function")for(h=ae.call(h),ae=0;!(K=h.next()).done;)K=K.value,ve=X+Ae(K,ae++),fe+=W(K,L,$,ve,ue);else if(ve==="object"){if(typeof h.then=="function")return W(q(h),L,$,K,ue);throw L=String(h),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return fe}function ee(h,L,$){if(h==null)return h;var K=[],ue=0;return W(h,K,"","",function(ve){return L.call($,ve,ue++)}),K}function Me(h){if(h._status===-1){var L=h._result,$=L();$.then(function(K){(h._status===0||h._status===-1)&&(h._status=1,h._result=K,$.status===void 0&&($.status="fulfilled",$.value=K))},function(K){(h._status===0||h._status===-1)&&(h._status=2,h._result=K,$.status===void 0&&($.status="rejected",$.reason=K))}),h._status===-1&&(h._status=0,h._result=$)}if(h._status===1)return h._result.default;throw h._result}var Ee=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)};function Et(h){var L=re.T,$={};$.types=L!==null?L.types:null,re.T=$;try{var K=h(),ue=re.S;ue!==null&&ue($,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(se,Ee)}catch(ve){Ee(ve)}finally{L!==null&&$.types!==null&&(L.types=$.types),re.T=L}}function $t(h){var L=re.T;if(L!==null){var $=L.types;$===null?L.types=[h]:$.indexOf(h)===-1&&$.push(h)}else Et($t.bind(null,h))}var ba={map:ee,forEach:function(h,L,$){ee(h,function(){L.apply(this,arguments)},$)},count:function(h){var L=0;return ee(h,function(){L++}),L},toArray:function(h){return ee(h,function(L){return L})||[]},only:function(h){if(!ze(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return le.Activity=x,le.Children=ba,le.Component=P,le.Fragment=u,le.Profiler=p,le.PureComponent=be,le.StrictMode=n,le.Suspense=j,le.ViewTransition=z,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=re,le.__COMPILER_RUNTIME={__proto__:null,c:function(h){return re.H.useMemoCache(h)}},le.addTransitionType=$t,le.cache=function(h){return function(){return h.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(h,L,$){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var K=_({},h.props),ue=h.key;if(L!=null)for(ve in L.key!==void 0&&(ue=""+L.key),L)!Je.call(L,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&L.ref===void 0||(K[ve]=L[ve]);var ve=arguments.length-2;if(ve===1)K.children=$;else if(1<ve){for(var fe=Array(ve),X=0;X<ve;X++)fe[X]=arguments[X+2];K.children=fe}return Fe(h.type,ue,K)},le.createContext=function(h){return h={$$typeof:E,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:m,_context:h},h},le.createElement=function(h,L,$){var K,ue={},ve=null;if(L!=null)for(K in L.key!==void 0&&(ve=""+L.key),L)Je.call(L,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(ue[K]=L[K]);var fe=arguments.length-2;if(fe===1)ue.children=$;else if(1<fe){for(var X=Array(fe),ae=0;ae<fe;ae++)X[ae]=arguments[ae+2];ue.children=X}if(h&&h.defaultProps)for(K in fe=h.defaultProps,fe)ue[K]===void 0&&(ue[K]=fe[K]);return Fe(h,ve,ue)},le.createRef=function(){return{current:null}},le.forwardRef=function(h){return{$$typeof:b,render:h}},le.isValidElement=ze,le.lazy=function(h){return{$$typeof:T,_payload:{_status:-1,_result:h},_init:Me}},le.memo=function(h,L){return{$$typeof:C,type:h,compare:L===void 0?null:L}},le.startTransition=Et,le.unstable_useCacheRefresh=function(){return re.H.useCacheRefresh()},le.use=function(h){return re.H.use(h)},le.useActionState=function(h,L,$){return re.H.useActionState(h,L,$)},le.useCallback=function(h,L){return re.H.useCallback(h,L)},le.useContext=function(h){return re.H.useContext(h)},le.useDebugValue=function(){},le.useDeferredValue=function(h,L){return re.H.useDeferredValue(h,L)},le.useEffect=function(h,L){return re.H.useEffect(h,L)},le.useEffectEvent=function(h){return re.H.useEffectEvent(h)},le.useId=function(){return re.H.useId()},le.useImperativeHandle=function(h,L,$){return re.H.useImperativeHandle(h,L,$)},le.useInsertionEffect=function(h,L){return re.H.useInsertionEffect(h,L)},le.useLayoutEffect=function(h,L){return re.H.useLayoutEffect(h,L)},le.useMemo=function(h,L){return re.H.useMemo(h,L)},le.useOptimistic=function(h,L){return re.H.useOptimistic(h,L)},le.useReducer=function(h,L,$){return re.H.useReducer(h,L,$)},le.useRef=function(h){return re.H.useRef(h)},le.useState=function(h){return re.H.useState(h)},le.useSyncExternalStore=function(h,L,$){return re.H.useSyncExternalStore(h,L,$)},le.useTransition=function(){return re.H.useTransition()},le.version="19.3.0",le}var X0;function mc(){return X0||(X0=1,sc.exports=Og()),sc.exports}var D=mc();const js=Ng(D);var lc={exports:{}},Fi={},ic={exports:{}},rc={};var Z0;function Lg(){return Z0||(Z0=1,(function(o){function d(q,W){var ee=q.length;q.push(W);e:for(;0<ee;){var Me=ee-1>>>1,Ee=q[Me];if(0<p(Ee,W))q[Me]=W,q[ee]=Ee,ee=Me;else break e}}function u(q){return q.length===0?null:q[0]}function n(q){if(q.length===0)return null;var W=q[0],ee=q.pop();if(ee!==W){q[0]=ee;e:for(var Me=0,Ee=q.length,Et=Ee>>>1;Me<Et;){var $t=2*(Me+1)-1,ba=q[$t],h=$t+1,L=q[h];if(0>p(ba,ee))h<Ee&&0>p(L,ba)?(q[Me]=L,q[h]=ee,Me=h):(q[Me]=ba,q[$t]=ee,Me=$t);else if(h<Ee&&0>p(L,ee))q[Me]=L,q[h]=ee,Me=h;else break e}}return W}function p(q,W){var ee=q.sortIndex-W.sortIndex;return ee!==0?ee:q.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var E=Date,b=E.now();o.unstable_now=function(){return E.now()-b}}var j=[],C=[],T=1,x=null,z=3,G=!1,Y=!1,U=!1,_=!1,Z=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function be(q){for(var W=u(C);W!==null;){if(W.callback===null)n(C);else if(W.startTime<=q)n(C),W.sortIndex=W.expirationTime,d(j,W);else break;W=u(C)}}function we(q){if(U=!1,be(q),!Y)if(u(j)!==null)Y=!0,Te||(Te=!0,ze());else{var W=u(C);W!==null&&Ae(we,W.startTime-q)}}var Te=!1,se=-1,re=5,Je=-1;function Fe(){return _?!0:!(o.unstable_now()-Je<re)}function ot(){if(_=!1,Te){var q=o.unstable_now();Je=q;var W=!0;try{e:{Y=!1,U&&(U=!1,P(se),se=-1),G=!0;var ee=z;try{t:{for(be(q),x=u(j);x!==null&&!(x.expirationTime>q&&Fe());){var Me=x.callback;if(typeof Me=="function"){x.callback=null,z=x.priorityLevel;var Ee=Me(x.expirationTime<=q);if(q=o.unstable_now(),typeof Ee=="function"){x.callback=Ee,be(q),W=!0;break t}x===u(j)&&n(j),be(q)}else n(j);x=u(j)}if(x!==null)W=!0;else{var Et=u(C);Et!==null&&Ae(we,Et.startTime-q),W=!1}}break e}finally{x=null,z=ee,G=!1}W=void 0}}finally{W?ze():Te=!1}}}var ze;if(typeof I=="function")ze=function(){I(ot)};else if(typeof MessageChannel<"u"){var Kt=new MessageChannel,Tt=Kt.port2;Kt.port1.onmessage=ot,ze=function(){Tt.postMessage(null)}}else ze=function(){Z(ot,0)};function Ae(q,W){se=Z(function(){q(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return z},o.unstable_next=function(q){switch(z){case 1:case 2:case 3:var W=3;break;default:W=z}var ee=z;z=W;try{return q()}finally{z=ee}},o.unstable_requestPaint=function(){_=!0},o.unstable_runWithPriority=function(q,W){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ee=z;z=q;try{return W()}finally{z=ee}},o.unstable_scheduleCallback=function(q,W,ee){var Me=o.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Me+ee:Me):ee=Me,q){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=ee+Ee,q={id:T++,callback:W,priorityLevel:q,startTime:ee,expirationTime:Ee,sortIndex:-1},ee>Me?(q.sortIndex=ee,d(C,q),u(j)===null&&q===u(C)&&(U?(P(se),se=-1):U=!0,Ae(we,ee-Me))):(q.sortIndex=Ee,d(j,q),Y||G||(Y=!0,Te||(Te=!0,ze()))),q},o.unstable_shouldYield=Fe,o.unstable_wrapCallback=function(q){var W=z;return function(){var ee=z;z=W;try{return q.apply(this,arguments)}finally{z=ee}}}})(rc)),rc}var K0;function Bg(){return K0||(K0=1,ic.exports=Lg()),ic.exports}var oc={exports:{}},wt={};var $0;function Hg(){if($0)return wt;$0=1;var o=mc();function d(T){var x="https://react.dev/errors/"+T;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)x+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+T+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var n={d:{f:u,r:function(){throw Error(d(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},p=Symbol.for("react.portal"),m=Symbol.for("react.recoverable"),E=Symbol.for("react.optimistic_key");function b(T,x,z){var G=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:G==null?null:G===E?E:""+G,children:T,containerInfo:x,implementation:z}}var j=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(T,x){if(T==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=n,wt.browser=function(T){return{$$typeof:m,_reason:T}},wt.createPortal=function(T,x){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(d(299));return b(T,x,null,z)},wt.flushSync=function(T){var x=j.T,z=n.p;try{if(j.T=null,n.p=2,T)return T()}finally{j.T=x,n.p=z,n.d.f()}},wt.preconnect=function(T,x){typeof T=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,n.d.C(T,x))},wt.prefetchDNS=function(T){typeof T=="string"&&n.d.D(T)},wt.preinit=function(T,x){if(typeof T=="string"&&x&&typeof x.as=="string"){var z=x.as,G=C(z,x.crossOrigin),Y=typeof x.integrity=="string"?x.integrity:void 0,U=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;z==="style"?n.d.S(T,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:G,integrity:Y,fetchPriority:U}):z==="script"&&n.d.X(T,{crossOrigin:G,integrity:Y,fetchPriority:U,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},wt.preinitModule=function(T,x){if(typeof T=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var z=C(x.as,x.crossOrigin);n.d.M(T,{crossOrigin:z,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0})}}else x==null&&n.d.M(T)},wt.preload=function(T,x){if(typeof T=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var z=x.as,G=C(z,x.crossOrigin);n.d.L(T,z,{crossOrigin:G,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},wt.preloadModule=function(T,x){if(typeof T=="string")if(x){var z=C(x.as,x.crossOrigin);n.d.m(T,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:z,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0})}else n.d.m(T)},wt.requestFormReset=function(T){n.d.r(T)},wt.unstable_batchedUpdates=function(T,x){return T(x)},wt.useFormState=function(T,x,z){return j.H.useFormState(T,x,z)},wt.useFormStatus=function(){return j.H.useHostTransitionStatus()},wt.version="19.3.0",wt}var J0;function qg(){if(J0)return oc.exports;J0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),oc.exports=Hg(),oc.exports}var P0;function Ug(){if(P0)return Fi;P0=1;var o=Bg(),d=mc(),u=qg();function n(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){for(var t=e,a=t;a&&!a.alternate;)t=a,(t.flags&4098)!==0&&(e=t.return),a=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function E(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(m(e)!==e)throw Error(n(188))}function C(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(n(188));return t!==e?null:e}for(var a=e,s=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(s=l.return,s!==null){a=s;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return j(l),e;if(i===s)return j(l),t;i=i.sibling}throw Error(n(188))}if(a.return!==s.return)a=l,s=i;else{for(var r=!1,c=l.child;c;){if(c===a){r=!0,a=l,s=i;break}if(c===s){r=!0,s=l,a=i;break}c=c.sibling}if(!r){for(c=i.child;c;){if(c===a){r=!0,a=i,s=l;break}if(c===s){r=!0,s=i,a=l;break}c=c.sibling}if(!r)throw Error(n(189))}}if(a.alternate!==s)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}function x(e,t,a,s,l,i){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,s,l,i)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&x(e.child,t,a,s,l,i))return!0;e=e.sibling}return!1}function z(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function G(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Y(e){var t=[null,null],a=z(e);return a===null||U(t,e,a.child,{foundSelf:!1}),t}function U(e,t,a,s){for(;a!==null;){if(a===t)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&U(e,t,a.child,s))return!0;a=a.sibling}return!1}function _(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(n(559))}}var Z=null,P=null;function I(e,t,a){return e===a?!0:e===t?(Z=e,!0):!1}function be(e,t,a){return e===a?(P=e,!1):e===t?(P!==null&&(Z=e),!0):!1}function we(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Te(e,t,a){for(var s=0,l=e;l;l=a(l))s++;l=0;for(var i=t;i;i=a(i))l++;for(;0<s-l;)e=a(e),s--;for(;0<l-s;)t=a(t),l--;for(;s--;){if(e===t||t!==null&&e===t.alternate)return e;e=a(e),t=a(t)}return null}var se=Object.assign,re=Symbol.for("react.element"),Je=Symbol.for("react.transitional.element"),Fe=Symbol.for("react.portal"),ot=Symbol.for("react.fragment"),ze=Symbol.for("react.strict_mode"),Kt=Symbol.for("react.profiler"),Tt=Symbol.for("react.consumer"),Ae=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),Me=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),$t=Symbol.for("react.legacy_hidden"),ba=Symbol.for("react.memo_cache_sentinel"),h=Symbol.for("react.view_transition"),L=Symbol.for("react.recoverable"),$=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Symbol.for("react.client.reference");function ve(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ot:return"Fragment";case Kt:return"Profiler";case ze:return"StrictMode";case W:return"Suspense";case ee:return"SuspenseList";case Et:return"Activity";case h:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Fe:return"Portal";case Ae:return e.displayName||"Context";case Tt:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Me:return t=e.displayName||null,t!==null?t:ve(e.type)||"Memo";case Ee:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}var fe=Array.isArray,X=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oa={pending:!1,data:null,method:null,action:null},Pa=[],_a=-1;function O(e){return{current:e}}function N(e){0>_a||(e.current=Pa[_a],Pa[_a]=null,_a--)}function B(e,t){_a++,Pa[_a]=e.current,e.current=t}var ce=O(null),ie=O(null),de=O(null),et=O(null);function Ye(e,t){switch(B(de,t),B(ie,e),B(ce,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?e0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=e0(t),e=t0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}N(ce),B(ce,e)}function Pe(){N(ce),N(ie),N(de)}function ga(e){var t=e.memoizedState;t!==null&&(Ul._currentValue=t.memoizedState,B(et,e)),t=ce.current;var a=t0(t,e.type);t!==a&&(B(ie,e),B(ce,a))}function Ue(e){ie.current===e&&(N(ce),N(ie)),et.current===e&&(N(et),Ul._currentValue=oa)}var ke,nt;function tt(e){if(ke===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ke=t&&t[1]||"",nt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ke+e+nt}var mt=!1;function Ie(e,t){if(!e||mt)return"";mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(H){var v=H}Reflect.construct(e,[],R)}else{try{R.call()}catch(H){v=H}R=!1;try{var A=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),R=!0,new e}finally{R&&(A!==void 0?Object.defineProperty(e.prototype,"props",A):delete e.prototype.props)}}}else{try{throw Error()}catch(H){v=H}(R=e())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(H){if(H&&v&&typeof H.stack=="string")return[H.stack,v.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=s.DetermineComponentFrameRoot(),r=i[0],c=i[1];if(r&&c){var f=r.split(`
`),w=c.split(`
`);for(l=s=0;s<f.length&&!f[s].includes("DetermineComponentFrameRoot");)s++;for(;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;if(s===f.length||l===w.length)for(s=f.length-1,l=w.length-1;1<=s&&0<=l&&f[s]!==w[l];)l--;for(;1<=s&&0<=l;s--,l--)if(f[s]!==w[l]){if(s!==1||l!==1)do if(s--,l--,0>l||f[s]!==w[l]){var k=`
`+f[s].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=s&&0<=l);break}}}finally{mt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?tt(a):""}function at(e,t){switch(e.tag){case 26:case 27:case 5:return tt(e.type);case 16:return tt("Lazy");case 13:return e.child!==t&&t!==null?tt("Suspense Fallback"):tt("Suspense");case 19:return tt("SuspenseList");case 0:case 15:return Ie(e.type,!1);case 11:return Ie(e.type.render,!1);case 1:return Ie(e.type,!0);case 31:return tt("Activity");case 30:return tt("ViewTransition");default:return""}}function Ia(e){try{var t="",a=null;do t+=at(e,a),a=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var ha=Object.prototype.hasOwnProperty,Lt=o.unstable_scheduleCallback,Ws=o.unstable_cancelCallback,V=o.unstable_shouldYield,Ce=o.unstable_requestPaint,Se=o.unstable_now,Kl=o.unstable_getCurrentPriorityLevel,At=o.unstable_ImmediatePriority,va=o.unstable_UserBlockingPriority,Jt=o.unstable_NormalPriority,na=o.unstable_LowPriority,Tc=o.unstable_IdlePriority,Ym=o.log,Vm=o.unstable_setDisableYieldValue,$l=null,Bt=null;function Wa(e){if(typeof Ym=="function"&&Vm(e),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode($l,e)}catch{}}var Ht=Math.clz32?Math.clz32:Zm,Qm=Math.log,Xm=Math.LN2;function Zm(e){return e>>>=0,e===0?32:31-(Qm(e)/Xm|0)|0}var Zi=256,Ki=262144,$i=4194304;function ks(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ji(e,t,a){var s=e.pendingLanes;if(s===0)return 0;var l=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var c=s&134217727;return c!==0?(s=c&~i,s!==0?l=ks(s):(r&=c,r!==0?l=ks(r):a||(a=c&~e,a!==0&&(l=ks(a))))):(c=s&~i,c!==0?l=ks(c):r!==0?l=ks(r):a||(a=s&~e,a!==0&&(l=ks(a)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:l}function Jl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ac(e,t){(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var s=31-Ht(a),l=1<<s;t|=e[s],a&=~l}return t}function Km(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jc(){var e=$i;return $i<<=1,($i&62914560)===0&&($i=4194304),e}function Do(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Pl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $m(e,t,a,s,l,i){var r=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,f=e.expirationTimes,w=e.hiddenUpdates;for(a=r&~a;0<a;){var k=31-Ht(a),R=1<<k;c[k]=0,f[k]=-1;var v=w[k];if(v!==null)for(w[k]=null,k=0;k<v.length;k++){var A=v[k];A!==null&&(A.lane&=-536870913)}a&=~R}s!==0&&kc(e,s,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function kc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-Ht(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Cc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var s=31-Ht(a),l=1<<s;l&t|e[s]&t&&(e[s]|=t),a&=~l}}function Dc(e,t){var a=t&-t;return a=(a&42)!==0?1:Mo(a),(a&(e.suspendedLanes|t))!==0?0:a}function Mo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ro(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Mc(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:H0(e.type))}function Rc(e,t){var a=ae.p;try{return ae.p=e,t()}finally{ae.p=a}}var Na=Math.random().toString(36).slice(2),xt="__reactFiber$"+Na,Mt="__reactProps$"+Na,el="__reactContainer$"+Na,zc="__reactEvents$"+Na,Jm="__reactListeners$"+Na,Pm="__reactHandles$"+Na,_c="__reactResources$"+Na,Il="__reactMarker$"+Na,Pi="__reactLoad$"+Na;function Ii(e){delete e[xt],delete e[Mt],delete e[Jm],delete e[Pm]}function Cs(e){var t;if(t=e[xt])return t;for(var a=e.parentNode;a;){if(t=a[el]||a[xt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=h0(e);e!==null;){if(a=e[xt])return a;e=h0(e)}return t}e=a,a=e.parentNode}return null}function tl(e){if(e=e[xt]||e[el]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Wl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(n(33))}function al(e){var t=e[_c];return t||(t=e[_c]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ct(e){e[Il]=!0}function Nc(e){e[Pi]=void 0}var Oc=new Set,Lc={};function Ds(e,t){sl(e,t),sl(e+"Capture",t)}function sl(e,t){for(Lc[e]=t,e=0;e<t.length;e++)Oc.add(t[e])}var Im=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bc={},Hc={};function Wm(e){return ha.call(Hc,e)?!0:ha.call(Bc,e)?!1:Im.test(e)?Hc[e]=!0:(Bc[e]=!0,!1)}var je=!1;function qc(){var e=je;return je=!1,e}function Wi(e,t,a){if(Wm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,a)}}function er(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,a)}}function Oa(e,t,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,s)}}function qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ex(e,t,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var l=s.get,i=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(r){a=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zo(e){if(!e._valueTracker){var t=Uc(e)?"checked":"value";e._valueTracker=ex(e,t,""+e[t])}}function Gc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),s="";return e&&(s=Uc(e)?e.checked?"true":"false":e.value),e=s,e!==a?(t.setValue(e),!0):!1}var tx=/[\n"\\]/g;function Pt(e){return e.replace(tx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function _o(e,t,a,s,l,i,r,c){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qt(t)):e.value!==""+qt(t)&&(e.value=""+qt(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?No(e,qt(e.value)):No(e,qt(t)):a!=null?No(e,qt(a)):s!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+qt(c):e.removeAttribute("name")}function Fc(e,t,a,s,l,i,r,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){zo(e);return}a=a!=null?""+qt(a):"",t=t!=null?""+qt(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}s=s??l,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=c?e.checked:!!s,e.defaultChecked=!!s,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),zo(e)}function No(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function ll(e,t,a,s){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&s&&(e[a].defaultSelected=!0)}else{for(a=""+qt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,s&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Yc(e,t,a){if(t!=null&&(t=""+qt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+qt(a):""}function Vc(e,t,a,s){if(t==null){if(s!=null){if(a!=null)throw Error(n(92));if(fe(s)){if(1<s.length)throw Error(n(93));s=s[0]}a=s}a==null&&(a=""),t=a}a=qt(t),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),zo(e)}function il(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var ax=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qc(e,t,a){var s=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,a):typeof a!="number"||a===0||ax.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Xc(e,t,a){if(t!=null&&typeof t!="object")throw Error(n(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="",je=!0);for(var l in t)s=t[l],t.hasOwnProperty(l)&&a[l]!==s&&(Qc(e,l,s),je=!0)}else for(var i in t)t.hasOwnProperty(i)&&Qc(e,i,t[i])}function Oo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tr(e){return lx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ya(){}var Lo=null;function Bo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rl=null,ol=null;function Zc(e){var t=tl(e);if(t&&(e=t.stateNode)){var a=e[Mt]||null;e:switch(e=t.stateNode,t.type){case"input":if(_o(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var s=a[t];if(s!==e&&s.form===e.form){var l=s[Mt]||null;if(!l)throw Error(n(90));_o(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)s=a[t],s.form===e.form&&Gc(s)}break e;case"textarea":Yc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ll(e,!!a.multiple,t,!1)}}}var Ho=!1;function Kc(e,t,a){if(Ho)return e(t,a);Ho=!0;try{var s=e(t);return s}finally{if(Ho=!1,(rl!==null||ol!==null)&&(to(),rl&&(t=rl,e=ol,ol=rl=null,Zc(t),e)))for(t=0;t<e.length;t++)Zc(e[t])}}function ei(e,t){var a=e.stateNode;if(a===null)return null;var s=a[Mt]||null;if(s===null)return null;a=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(n(231,t,typeof a));return a}var La=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qo=!1;if(La)try{var ti={};Object.defineProperty(ti,"passive",{get:function(){qo=!0}}),window.addEventListener("test",ti,ti),window.removeEventListener("test",ti,ti)}catch{qo=!1}var es=null,Uo=null,ar=null;function $c(){if(ar)return ar;var e,t=Uo,a=t.length,s,l="value"in es?es.value:es.textContent,i=l.length;for(e=0;e<a&&t[e]===l[e];e++);var r=a-e;for(s=1;s<=r&&t[a-s]===l[i-s];s++);return ar=l.slice(e,1<s?1-s:void 0)}function sr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function lr(){return!0}function Jc(){return!1}function jt(e){function t(a,s,l,i,r){this._reactName=a,this._targetInst=l,this.type=s,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?lr:Jc,this.isPropagationStopped=Jc,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=lr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=lr)},persist:function(){},isPersistent:lr}),t}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ir=jt(ts),ai=se({},ts,{view:0,detail:0}),ix=jt(ai),Go,Fo,si,rr=se({},ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==si&&(si&&e.type==="mousemove"?(Go=e.screenX-si.screenX,Fo=e.screenY-si.screenY):Fo=Go=0,si=e),Go)},movementY:function(e){return"movementY"in e?e.movementY:Fo}}),Pc=jt(rr),rx=se({},rr,{dataTransfer:0}),ox=jt(rx),nx=se({},ai,{relatedTarget:0}),Yo=jt(nx),dx=se({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),cx=jt(dx),ux=se({},ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),px=jt(ux),fx=se({},ts,{data:0}),Ic=jt(fx),mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bx[e])?!!t[e]:!1}function Vo(){return gx}var hx=se({},ai,{key:function(e){if(e.key){var t=mx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vo,charCode:function(e){return e.type==="keypress"?sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vx=jt(hx),yx=se({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wc=jt(yx),wx=se({},ts,{submitter:0}),Ex=jt(wx),Sx=se({},ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vo}),Tx=jt(Sx),Ax=se({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),jx=jt(Ax),kx=se({},rr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cx=jt(kx),Dx=se({},ts,{newState:0,oldState:0,source:0}),Mx=jt(Dx),Rx=[9,13,27,32],Qo=La&&"CompositionEvent"in window,li=null;La&&"documentMode"in document&&(li=document.documentMode);var zx=La&&"TextEvent"in window&&!li,eu=La&&(!Qo||li&&8<li&&11>=li),tu=" ",au=!1;function su(e,t){switch(e){case"keyup":return Rx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nl=!1;function _x(e,t){switch(e){case"compositionend":return lu(t);case"keypress":return t.which!==32?null:(au=!0,tu);case"textInput":return e=t.data,e===tu&&au?null:e;default:return null}}function Nx(e,t){if(nl)return e==="compositionend"||!Qo&&su(e,t)?(e=$c(),ar=Uo=es=null,nl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return eu&&t.locale!=="ko"?null:t.data;default:return null}}var Ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ox[e.type]:t==="textarea"}function ru(e,t,a,s){rl?ol?ol.push(s):ol=[s]:rl=s,t=oo(t,"onChange"),0<t.length&&(a=new ir("onChange","change",null,a,s),e.push({event:a,listeners:t}))}var ii=null,ri=null;function Lx(e){Kf(e,0)}function or(e){var t=Wl(e);if(Gc(t))return e}function ou(e,t){if(e==="change")return t}var nu=!1;if(La){var Xo;if(La){var Zo="oninput"in document;if(!Zo){var du=document.createElement("div");du.setAttribute("oninput","return;"),Zo=typeof du.oninput=="function"}Xo=Zo}else Xo=!1;nu=Xo&&(!document.documentMode||9<document.documentMode)}function cu(){ii&&(ii.detachEvent("onpropertychange",uu),ri=ii=null)}function uu(e){if(e.propertyName==="value"&&or(ri)){var t=[];ru(t,ri,e,Bo(e)),Kc(Lx,t)}}function Bx(e,t,a){e==="focusin"?(cu(),ii=t,ri=a,ii.attachEvent("onpropertychange",uu)):e==="focusout"&&cu()}function Hx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return or(ri)}function qx(e,t){if(e==="click")return or(t)}function Ux(e,t){if(e==="input"||e==="change")return or(t)}function Gx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:Gx;function oi(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var l=a[s];if(!ha.call(t,l)||!Ut(e[l],t[l]))return!1}return!0}function Ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fu(e,t){var a=pu(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=t&&s>=t)return{node:a,offset:t-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=pu(a)}}function mu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ko(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ko(e.document)}return t}function $o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Fx=La&&"documentMode"in document&&11>=document.documentMode,dl=null,Jo=null,ni=null,Po=!1;function bu(e,t,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Po||dl==null||dl!==Ko(s)||(s=dl,"selectionStart"in s&&$o(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ni&&oi(ni,s)||(ni=s,s=oo(Jo,"onSelect"),0<s.length&&(t=new ir("onSelect","select",null,t,a),e.push({event:t,listeners:s}),t.target=dl)))}function Ms(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var cl={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionrun:Ms("Transition","TransitionRun"),transitionstart:Ms("Transition","TransitionStart"),transitioncancel:Ms("Transition","TransitionCancel"),transitionend:Ms("Transition","TransitionEnd")},Io={},gu={};La&&(gu=document.createElement("div").style,"AnimationEvent"in window||(delete cl.animationend.animation,delete cl.animationiteration.animation,delete cl.animationstart.animation),"TransitionEvent"in window||delete cl.transitionend.transition);function Rs(e){if(Io[e])return Io[e];if(!cl[e])return e;var t=cl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in gu)return Io[e]=t[a];return e}var hu=Rs("animationend"),vu=Rs("animationiteration"),yu=Rs("animationstart"),Yx=Rs("transitionrun"),Vx=Rs("transitionstart"),Qx=Rs("transitioncancel"),wu=Rs("transitionend"),Eu=new Map,Wo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wo.push("scrollEnd");function da(e,t){Eu.set(e,t),Ds(t,[e])}var Xx=0;function Ba(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=fa.identifierPrefix;var a=Xx++;return e="_"+e+"t_"+a.toString(32)+"_",t.autoName=e}function Su(e){if(e==null||typeof e=="string")return e;var t=null,a=Ml;if(a!==null)for(var s=0;s<a.length;s++){var l=e[a[s]];if(l!=null){if(l==="none")return"none";t=t==null?l:t+(" "+l)}}return t??e.default}function Ha(e,t){return e=Su(e),t=Su(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var nr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},It=[],ul=0,en=0;function dr(){for(var e=ul,t=en=ul=0;t<e;){var a=It[t];It[t++]=null;var s=It[t];It[t++]=null;var l=It[t];It[t++]=null;var i=It[t];if(It[t++]=null,s!==null&&l!==null){var r=s.pending;r===null?l.next=l:(l.next=r.next,r.next=l),s.pending=l}i!==0&&Tu(a,l,i)}}function cr(e,t,a,s){It[ul++]=e,It[ul++]=t,It[ul++]=a,It[ul++]=s,en|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function tn(e,t,a,s){return cr(e,t,a,s),ur(e)}function zs(e,t){return cr(e,null,null,t),ur(e)}function Tu(e,t,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var l=!1,i=e.return;i!==null;)i.childLanes|=a,s=i.alternate,s!==null&&(s.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-Ht(a),e=i.hiddenUpdates,s=e[l],s===null?e[l]=[t]:s.push(t),t.lane=a|536870912),i):null}function ur(e){if(50<Mi)throw Mi=0,eo=null,Error(n(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pl={};function Zx(e,t,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,a,s){return new Zx(e,t,a,s)}function an(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qa(e,t){var a=e.alternate;return a===null?(a=Rt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Au(e,t){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function pr(e,t,a,s,l,i){var r=0;if(s=e,typeof s=="function")an(s)&&(r=1);else if(typeof s=="string")r=wg(e,a,ce.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(s){case Et:return e=Rt(31,a,t,l),e.elementType=Et,e.lanes=i,e;case ot:return _s(a.children,l,i,t);case ze:r=8,l|=24;break;case Kt:return e=Rt(12,a,t,l|2),e.elementType=Kt,e.lanes=i,e;case W:return e=Rt(13,a,t,l),e.elementType=W,e.lanes=i,e;case ee:return e=Rt(19,a,t,l),e.elementType=ee,e.lanes=i,e;case $t:case h:return e=l|32,e=Rt(30,a,t,e),e.elementType=h,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case Ae:r=10;break e;case Tt:r=9;break e;case q:r=11;break e;case Me:r=14;break e;case Ee:r=16,s=null;break e}r=29,a=Error(n(130,e===null?"null":typeof e,"")),s=null}return t=Rt(r,a,t,l),t.elementType=e,t.type=s,t.lanes=i,t}function _s(e,t,a,s){return e=Rt(7,e,s,t),e.lanes=a,e}function sn(e,t,a){return e=Rt(6,e,null,t),e.lanes=a,e}function ju(e){var t=Rt(18,null,null,0);return t.stateNode=e,t}function ln(e,t,a){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ku=new WeakMap;function Wt(e,t){if(typeof e=="object"&&e!==null){var a=ku.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ia(t)},ku.set(e,t),t)}return{value:e,source:t,stack:Ia(t)}}var fl=[],ml=0,fr=null,di=0,ea=[],ta=0,as=null,wa=1,Ea="";function Ua(e,t){fl[ml++]=di,fl[ml++]=fr,fr=e,di=t}function Cu(e,t,a){ea[ta++]=wa,ea[ta++]=Ea,ea[ta++]=as,as=e;var s=wa;e=Ea;var l=32-Ht(s)-1;s&=~(1<<l),a+=1;var i=32-Ht(t)+l;if(30<i){var r=l-l%5;i=(s&(1<<r)-1).toString(32),s>>=r,l-=r,wa=1<<32-Ht(t)+l|a<<l|s,Ea=i+e}else wa=1<<i|a<<l|s,Ea=e}function mr(e){e.return!==null&&(Ua(e,1),Cu(e,1,0))}function rn(e){for(;e===fr;)fr=fl[--ml],fl[ml]=null,di=fl[--ml],fl[ml]=null;for(;e===as;)as=ea[--ta],ea[ta]=null,Ea=ea[--ta],ea[ta]=null,wa=ea[--ta],ea[ta]=null}function Du(e,t){ea[ta++]=wa,ea[ta++]=Ea,ea[ta++]=as,wa=t.id,Ea=t.overflow,as=e}var ut=null,He=null,pe=!1,ss=null,aa=!1,on=Error(n(519));function ls(e){var t=Error(n(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ci(Wt(t,e)),on}function Mu(e){var t=e.stateNode,a=e.type,s=e.memoizedProps;switch(t[xt]=e,t[Mt]=s,a){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(a=0;a<zi.length;a++)xe(zi[a],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),Fc(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),Vc(t,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||s.suppressHydrationWarning===!0||If(t.textContent,a)?(s.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),s.onScroll!=null&&xe("scroll",t),s.onScrollEnd!=null&&xe("scrollend",t),s.onClick!=null&&(t.onclick=ya),t=!0):t=!1,t||ls(e,!0)}function xr(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 31:case 13:aa=!1;return;case 27:case 3:aa=!0;return;default:ut=ut.return}}function xl(e){if(e!==ut)return!1;if(!pe)return xr(e),pe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Bd(e.type,e.memoizedProps)),a=!a),a&&He&&ls(e),xr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(317));He=g0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(317));He=g0(e)}else t===27?(t=He,ys(e.type)?(e=Xd,Xd=null,He=e):He=t):He=ut?la(e.stateNode.nextSibling):null;return!0}function Ns(){He=ut=null,pe=!1}function nn(){var e=ss;return e!==null&&(Nt===null?Nt=e:Nt.push.apply(Nt,e),ss=null),e}function ci(e){ss===null?ss=[e]:ss.push(e)}var dn=O(null),Os=null,Ga=null;function is(e,t,a){B(dn,t._currentValue),t._currentValue=a}function Fa(e){e._currentValue=dn.current,N(dn)}function br(e,t,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===a)break;e=e.return}}function cn(e,t,a,s){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var r=l.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=l;for(var f=0;f<t.length;f++)if(c.context===t[f]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),br(i.return,a,e),s||(r=null);break e}i=c.next}}else if(l.tag===18){if(r=l.return,r===null)throw Error(n(341));r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),br(r,a,e),r=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,r=l.alternate,r!==null&&(r.lanes|=a),br(l.return,a,e),r=l.child,r=r!==null?r.sibling:null):r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===e){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}}function Ls(e,t,a,s){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var r=l.alternate;if(r===null)throw Error(n(387));if(r=r.memoizedProps,r!==null){var c=l.type;Ut(l.pendingProps.value,r.value)||(e!==null?e.push(c):e=[c])}}else if(l===et.current){if(r=l.alternate,r===null)throw Error(n(387));r.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ul):e=[Ul])}l=l.return}return e!==null&&cn(t,e,a,s),t.flags|=262144,e!==null}function gr(e){for(e=e.firstContext;e!==null;){if(!Ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Bs(e){Os=e,Ga=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bt(e){return Ru(Os,e)}function hr(e,t){return Os===null&&Bs(e),Ru(e,t)}function Ru(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ga===null){if(e===null)throw Error(n(308));Ga=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ga=Ga.next=t;return a}var Kx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},$x=o.unstable_scheduleCallback,Jx=o.unstable_NormalPriority,st={$$typeof:Ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function un(){return{controller:new Kx,data:new Map,refCount:0}}function ui(e){e.refCount--,e.refCount===0&&$x(Jx,function(){e.controller.abort()})}function zu(e,t){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<t.length;e++){var s=t[e];a.indexOf(s)===-1&&a.push(s)}}}var pi=null;function Px(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var fi=null,pn=0,Hs=0,bl=null;function Ix(e,t){if(fi===null){var a=fi=[];pn=0,Hs=Cd(),bl={status:"pending",value:void 0,then:function(s){a.push(s)}}}return pn++,t.then(_u,_u),t}function _u(){if(--pn===0&&(pi=null,fi!==null)){bl!==null&&(bl.status="fulfilled");var e=fi;fi=null,Hs=0,bl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Wx(e,t){var a=[],s={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(s.status="rejected",s.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),s}var Nu=X.S;X.S=function(e,t){if(kf=Se(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ix(e,t),pi!==null)for(var a=Nl;a!==null;)zu(a,pi),a=a.next;if(a=e.types,a!==null){for(var s=Nl;s!==null;)zu(s,a),s=s.next;if(Hs!==0){s=pi,s===null&&(s=pi=[]);for(var l=0;l<a.length;l++){var i=a[l];s.indexOf(i)===-1&&s.push(i)}}}Nu!==null&&Nu(e,t)};var qs=O(null);function fn(){var e=qs.current;return e!==null?e:Be.pooledCache}function vr(e,t){t===null?B(qs,qs.current):B(qs,t.pool)}function Ou(){var e=fn();return e===null?null:{parent:st._currentValue,pool:e}}var gl=Error(n(460)),mn=Error(n(474)),yr=Error(n(542)),wr={then:function(){}};function Lu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Bu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ya,ya),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,qu(e),e===void 0&&!("reason"in t)?Error(n(600)):e;default:if(typeof t.status=="string")t.then(ya,ya);else{if(e=Be,e!==null&&100<e.shellSuspendCounter)throw Error(n(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=s}},function(s){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,qu(e),e}throw Gs=t,gl}}function Us(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Gs=a,gl):a}}var Gs=null;function Hu(){if(Gs===null)throw Error(n(459));var e=Gs;return Gs=null,e}function qu(e){if(e===gl||e===yr)throw Error(n(483))}var hl=null,mi=0;function Er(e){var t=mi;return mi+=1,hl===null&&(hl=[]),Bu(hl,e,t)}function rs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Sr(e,t){throw t.$$typeof===re?Error(n(525)):(e=Object.prototype.toString.call(t),Error(n(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Uu(e){function t(y,g){if(e){var S=y.deletions;S===null?(y.deletions=[g],y.flags|=16):S.push(g)}}function a(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function s(y){for(var g=new Map;y!==null;)y.key===null?g.set(y.index,y):g.set(y.key,y),y=y.sibling;return g}function l(y,g){return y=qa(y,g),y.index=0,y.sibling=null,y}function i(y,g,S){return y.index=S,e?(S=y.alternate,S!==null?(S=S.index,S<g?(y.flags|=2,g):S):(y.flags|=134217730,g)):(y.flags|=1048576,g)}function r(y){return e&&y.alternate===null&&(y.flags|=134217730),y}function c(y,g,S,M){return g===null||g.tag!==6?(g=sn(S,y.mode,M),g.return=y,g):(g=l(g,S),g.return=y,g)}function f(y,g,S,M){var F=S.type;return F===ot?(y=k(y,g,S.props.children,M,S.key),rs(y,S),y):g!==null&&(g.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ee&&Us(F)===g.type)?(g=l(g,S.props),rs(g,S),g.return=y,g):(g=pr(S.type,S.key,S.props,null,y.mode,M),rs(g,S),g.return=y,g)}function w(y,g,S,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=ln(S,y.mode,M),g.return=y,g):(g=l(g,S.children||[]),g.return=y,g)}function k(y,g,S,M,F){return g===null||g.tag!==7?(g=_s(S,y.mode,M,F),g.return=y,g):(g=l(g,S),g.return=y,g)}function R(y,g,S){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=sn(""+g,y.mode,S),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Je:return S=pr(g.type,g.key,g.props,null,y.mode,S),rs(S,g),S.return=y,S;case Fe:return g=ln(g,y.mode,S),g.return=y,g;case Ee:return g=Us(g),R(y,g,S)}if(fe(g)||K(g))return g=_s(g,y.mode,S,null),g.return=y,g;if(typeof g.then=="function")return R(y,Er(g),S);if(g.$$typeof===Ae)return R(y,hr(y,g),S);Sr(y,g)}return null}function v(y,g,S,M){var F=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return F!==null?null:c(y,g,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Je:return S.key===F?f(y,g,S,M):null;case Fe:return S.key===F?w(y,g,S,M):null;case Ee:return S=Us(S),v(y,g,S,M)}if(fe(S)||K(S))return F!==null?null:k(y,g,S,M,null);if(typeof S.then=="function")return v(y,g,Er(S),M);if(S.$$typeof===Ae)return v(y,g,hr(y,S),M);Sr(y,S)}return null}function A(y,g,S,M,F){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return y=y.get(S)||null,c(g,y,""+M,F);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Je:return y=y.get(M.key===null?S:M.key)||null,f(g,y,M,F);case Fe:return y=y.get(M.key===null?S:M.key)||null,w(g,y,M,F);case Ee:return M=Us(M),A(y,g,S,M,F)}if(fe(M)||K(M))return y=y.get(S)||null,k(g,y,M,F,null);if(typeof M.then=="function")return A(y,g,S,Er(M),F);if(M.$$typeof===Ae)return A(y,g,S,hr(g,M),F);Sr(g,M)}return null}function H(y,g,S,M){for(var F=null,he=null,J=g,te=g=0,rt=null;J!==null&&te<S.length;te++){J.index>te?(rt=J,J=null):rt=J.sibling;var ye=v(y,J,S[te],M);if(ye===null){J===null&&(J=rt);break}e&&J&&ye.alternate===null&&t(y,J),g=i(ye,g,te),he===null?F=ye:he.sibling=ye,he=ye,J=rt}if(te===S.length)return a(y,J),pe&&Ua(y,te),F;if(J===null){for(;te<S.length;te++)J=R(y,S[te],M),J!==null&&(g=i(J,g,te),he===null?F=J:he.sibling=J,he=J);return pe&&Ua(y,te),F}for(J=s(J);te<S.length;te++)rt=A(J,y,te,S[te],M),rt!==null&&(e&&(ye=rt.alternate,ye!==null&&J.delete(ye.key===null?te:ye.key)),g=i(rt,g,te),he===null?F=rt:he.sibling=rt,he=rt);return e&&J.forEach(function(As){return t(y,As)}),pe&&Ua(y,te),F}function Q(y,g,S,M){if(S==null)throw Error(n(151));for(var F=null,he=null,J=g,te=g=0,rt=null,ye=S.next();J!==null&&!ye.done;te++,ye=S.next()){J.index>te?(rt=J,J=null):rt=J.sibling;var As=v(y,J,ye.value,M);if(As===null){J===null&&(J=rt);break}e&&J&&As.alternate===null&&t(y,J),g=i(As,g,te),he===null?F=As:he.sibling=As,he=As,J=rt}if(ye.done)return a(y,J),pe&&Ua(y,te),F;if(J===null){for(;!ye.done;te++,ye=S.next())ye=R(y,ye.value,M),ye!==null&&(g=i(ye,g,te),he===null?F=ye:he.sibling=ye,he=ye);return pe&&Ua(y,te),F}for(J=s(J);!ye.done;te++,ye=S.next())ye=A(J,y,te,ye.value,M),ye!==null&&(e&&(rt=ye.alternate,rt!==null&&J.delete(rt.key===null?te:rt.key)),g=i(ye,g,te),he===null?F=ye:he.sibling=ye,he=ye);return e&&J.forEach(function(_g){return t(y,_g)}),pe&&Ua(y,te),F}function ne(y,g,S,M){if(typeof S=="object"&&S!==null&&S.type===ot&&S.key===null&&S.props.ref===void 0&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Je:e:{for(var F=S.key;g!==null;){if(g.key===F){if(F=S.type,F===ot){if(g.tag===7){a(y,g.sibling),M=l(g,S.props.children),rs(M,S),M.return=y,y=M;break e}}else if(g.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ee&&Us(F)===g.type){a(y,g.sibling),M=l(g,S.props),rs(M,S),M.return=y,y=M;break e}a(y,g);break}else t(y,g);g=g.sibling}S.type===ot?(M=_s(S.props.children,y.mode,M,S.key),rs(M,S),M.return=y,y=M):(M=pr(S.type,S.key,S.props,null,y.mode,M),rs(M,S),M.return=y,y=M)}return r(y);case Fe:e:{for(F=S.key;g!==null;){if(g.key===F)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){a(y,g.sibling),M=l(g,S.children||[]),M.return=y,y=M;break e}else{a(y,g);break}else t(y,g);g=g.sibling}M=ln(S,y.mode,M),M.return=y,y=M}return r(y);case Ee:return S=Us(S),ne(y,g,S,M)}if(fe(S))return H(y,g,S,M);if(K(S)){if(F=K(S),typeof F!="function")throw Error(n(150));return S=F.call(S),Q(y,g,S,M)}if(typeof S.then=="function")return ne(y,g,Er(S),M);if(S.$$typeof===Ae)return ne(y,g,hr(y,S),M);Sr(y,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,g!==null&&g.tag===6?(a(y,g.sibling),M=l(g,S),M.return=y,y=M):(a(y,g),M=sn(S,y.mode,M),M.return=y,y=M),r(y)):a(y,g)}return function(y,g,S,M){try{mi=0;var F=ne(y,g,S,M);return hl=null,F}catch(J){if(J===gl||J===yr)throw J;var he=Rt(29,J,null,y.mode);return he.lanes=M,he.return=y,he}}}var Fs=Uu(!0),Gu=Uu(!1),os=!1;function xn(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bn(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ns(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ds(e,t,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(De&2)!==0){var l=s.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),s.pending=t,t=ur(e),Tu(e,null,a),t}return cr(e,s,t,a),ur(e)}function xi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,Cc(e,a)}}function gn(e,t){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=r:i=i.next=r,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var hn=!1;function bi(){if(hn){var e=bl;if(e!==null)throw e}}function gi(e,t,a,s){hn=!1;var l=e.updateQueue;os=!1;var i=l.firstBaseUpdate,r=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var f=c,w=f.next;f.next=null,r===null?i=w:r.next=w,r=f;var k=e.alternate;k!==null&&(k=k.updateQueue,c=k.lastBaseUpdate,c!==r&&(c===null?k.firstBaseUpdate=w:c.next=w,k.lastBaseUpdate=f))}if(i!==null){var R=l.baseState;r=0,k=w=f=null,c=i;do{var v=c.lane&-536870913,A=v!==c.lane;if(A?(ge&v)===v:(s&v)===v){v!==0&&v===Hs&&(hn=!0),k!==null&&(k=k.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var H=e,Q=c;v=t;var ne=a;switch(Q.tag){case 1:if(H=Q.payload,typeof H=="function"){R=H.call(ne,R,v);break e}R=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=Q.payload,v=typeof H=="function"?H.call(ne,R,v):H,v==null)break e;R=se({},R,v);break e;case 2:os=!0}}v=c.callback,v!==null&&(e.flags|=64,A&&(e.flags|=8192),A=l.callbacks,A===null?l.callbacks=[v]:A.push(v))}else A={lane:v,tag:c.tag,payload:c.payload,callback:c.callback,next:null},k===null?(w=k=A,f=R):k=k.next=A,r|=v;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;A=c,c=A.next,A.next=null,l.lastBaseUpdate=A,l.shared.pending=null}}while(!0);k===null&&(f=R),l.baseState=f,l.firstBaseUpdate=w,l.lastBaseUpdate=k,i===null&&(l.shared.lanes=0),bs|=r,e.lanes=r,e.memoizedState=R}}function Fu(e,t){if(typeof e!="function")throw Error(n(191,e));e.call(t)}function Yu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Fu(a[e],t)}var cs=O(null),Tr=O(0);function Vu(e,t){e=Za,B(Tr,e),B(cs,t),Za=e|t.baseLanes}function vn(){B(Tr,Za),B(cs,cs.current)}function yn(){Za=Tr.current,N(cs),N(Tr)}var gt=O(null),St=null;function us(e){var t=e.alternate;B(ht,ht.current&1),B(gt,e),St===null&&(t===null||cs.current!==null||t.memoizedState!==null)&&(St=e)}function wn(e){B(ht,ht.current),B(gt,e),St===null&&(St=e)}function Qu(e){e.tag===22?(B(ht,ht.current),B(gt,e),St===null&&(St=e)):ps()}function ps(){B(ht,ht.current),B(gt,gt.current)}function Gt(e){N(gt),St===e&&(St=null),N(ht)}var ht=O(0);function hi(e,t){B(gt,gt.current),B(ht,t)}function En(e){N(ht),N(gt),St===e&&(St=null)}function Ar(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vd(a)||Qd(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ya=0,oe=null,Le=null,lt=null,jr=!1,vl=!1,Ys=!1,kr=0,vi=0,yl=null,eb=0;function Xe(){throw Error(n(321))}function Sn(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ut(e[a],t[a]))return!1;return!0}function Tn(e,t,a,s,l,i){return Ya=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,X.H=e===null||e.memoizedState===null?Cp:Dp,Ys=!1,i=a(s,l),Ys=!1,vl&&(i=Zu(t,a,s,l)),Xu(e),i}function Xu(e){X.H=Nr;var t=Le!==null&&Le.next!==null;if(Ya=0,lt=Le=oe=null,jr=!1,vi=0,yl=null,t)throw Error(n(300));e===null||it||(e=e.dependencies,e!==null&&gr(e)&&(it=!0))}function Zu(e,t,a,s){oe=e;var l=0;do{if(vl&&(yl=null),vi=0,vl=!1,25<=l)throw Error(n(301));if(l+=1,lt=Le=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}X.H=nb,i=t(a,s)}while(vl);return i}function tb(){var e=X.H,t=e.useState()[0];return t=typeof t.then=="function"?yi(t):t,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(oe.flags|=1024),t}function An(){var e=kr!==0;return kr=0,e}function jn(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function kn(e){if(jr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}jr=!1}Ya=0,lt=Le=oe=null,vl=!1,vi=kr=0,yl=null}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?oe.memoizedState=lt=e:lt=lt.next=e,lt}function We(){if(Le===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=lt===null?oe.memoizedState:lt.next;if(t!==null)lt=t,Le=e;else{if(e===null)throw oe.alternate===null?Error(n(467)):Error(n(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},lt===null?oe.memoizedState=lt=e:lt=lt.next=e}return lt}function Cr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yi(e){var t=vi;return vi+=1,yl===null&&(yl=[]),e=Bu(yl,e,t),t=oe,(lt===null?t.memoizedState:lt.next)===null&&(t=t.alternate,X.H=t===null||t.memoizedState===null?Cp:Dp),e}function Dr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yi(e);if(e.$$typeof===L)return;if(e.$$typeof===Ae)return bt(e)}throw Error(n(438,String(e)))}function Cn(e){var t=null,a=oe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var s=oe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Cr(),oe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),s=0;s<e;s++)a[s]=ba;return t.index++,a}function Va(e,t){return typeof t=="function"?t(e):t}function Mr(e){var t=We();return Dn(t,Le,e)}function Dn(e,t,a){var s=e.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=a;var l=e.baseQueue,i=s.pending;if(i!==null){if(l!==null){var r=l.next;l.next=i.next,i.next=r}t.baseQueue=l=i,s.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var c=r=null,f=null,w=t,k=!1;do{var R=w.lane&-536870913;if(R!==w.lane?(ge&R)===R:(Ya&R)===R){var v=w.revertLane;if(v===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),R===Hs&&(k=!0);else if((Ya&v)===v){w=w.next,v===Hs&&(k=!0);continue}else R={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},f===null?(c=f=R,r=i):f=f.next=R,oe.lanes|=v,bs|=v;R=w.action,Ys&&a(i,R),i=w.hasEagerState?w.eagerState:a(i,R)}else v={lane:R,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},f===null?(c=f=v,r=i):f=f.next=v,oe.lanes|=R,bs|=R;w=w.next}while(w!==null&&w!==t);if(f===null?r=i:f.next=c,!Ut(i,e.memoizedState)&&(it=!0,k&&(a=bl,a!==null)))throw a;e.memoizedState=i,e.baseState=r,e.baseQueue=f,s.lastRenderedState=i}return l===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Mn(e){var t=We(),a=t.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=e;var s=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var r=l=l.next;do i=e(i,r.action),r=r.next;while(r!==l);Ut(i,t.memoizedState)||(it=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,s]}function Ku(e,t,a){var s=oe,l=We(),i=pe;if(i){if(a===void 0)throw Error(n(407));a=a()}else a=t();var r=!Ut((Le||l).memoizedState,a);if(r&&(l.memoizedState=a,it=!0),l=l.queue,_n(Pu.bind(null,s,l,e),[e]),e=l.getSnapshot!==t||r||lt!==null&&(lt.memoizedState.tag&1)!==0,wl(e?9:8,{destroy:void 0},Ju.bind(null,s,l,a,t),null),e){if(s.flags|=2048,Be===null)throw Error(n(349));i||(Ya&127)!==0||$u(s,t,a)}return a}function $u(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=oe.updateQueue,t===null?(t=Cr(),oe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Ju(e,t,a,s){t.value=a,t.getSnapshot=s,Iu(t)&&Wu(e)}function Pu(e,t,a){return a(function(){Iu(t)&&Wu(e)})}function Iu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ut(e,a)}catch{return!0}}function Wu(e){var t=zs(e,2);t!==null&&Ot(t,e,2)}function Rn(e){var t=kt();if(typeof e=="function"){var a=e;if(e=a(),Ys){Wa(!0);try{a()}finally{Wa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:e},t}function ep(e,t,a,s){return e.baseState=a,Dn(e,Le,typeof s=="function"?s:Va)}function ab(e,t,a,s,l){if(_r(e))throw Error(n(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};X.T!==null?a(!0):i.isTransition=!1,s(i),a=t.pending,a===null?(i.next=t.pending=i,tp(t,i)):(i.next=a.next,t.pending=a.next=i)}}function tp(e,t){var a=t.action,s=t.payload,l=e.state;if(t.isTransition){var i=X.T,r={};r.types=i!==null?i.types:null,X.T=r;try{var c=a(l,s),f=X.S;f!==null&&f(r,c),ap(e,t,c)}catch(w){zn(e,t,w)}finally{i!==null&&r.types!==null&&(i.types=r.types),X.T=i}}else try{i=a(l,s),ap(e,t,i)}catch(w){zn(e,t,w)}}function ap(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){sp(e,t,s)},function(s){return zn(e,t,s)}):sp(e,t,a)}function sp(e,t,a){t.status="fulfilled",t.value=a,lp(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,tp(e,a)))}function zn(e,t,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=a,lp(t),t=t.next;while(t!==s)}e.action=null}function lp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ip(e,t){return t}function rp(e,t){if(pe){var a=Be.formState;if(a!==null){e:{var s=oe;if(pe){if(He){t:{for(var l=He,i=aa;l.nodeType!==8;){if(!i){l=null;break t}if(l=la(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){He=la(l.nextSibling),s=l.data==="F!";break e}}ls(s)}s=!1}s&&(t=a[0])}}return a=kt(),a.memoizedState=a.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ip,lastRenderedState:t},a.queue=s,a=Ap.bind(null,oe,s),s.dispatch=a,s=Rn(!1),i=Hn.bind(null,oe,!1,s.queue),s=kt(),l={state:t,dispatch:null,action:e,pending:null},s.queue=l,a=ab.bind(null,oe,l,i,a),l.dispatch=a,s.memoizedState=e,[t,a,!1]}function op(e){var t=We();return np(t,Le,e)}function np(e,t,a){if(t=Dn(e,t,ip)[0],e=Mr(Va)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=yi(t)}catch(r){throw r===gl?yr:r}else s=t;t=We();var l=t.queue,i=l.dispatch;return a!==t.memoizedState&&(oe.flags|=2048,wl(9,{destroy:void 0},sb.bind(null,l,a),null)),[s,i,e]}function sb(e,t){e.action=t}function dp(e){var t=We(),a=Le;if(a!==null)return np(t,a,e);We(),t=t.memoizedState,a=We();var s=a.queue.dispatch;return a.memoizedState=e,[t,s,!1]}function wl(e,t,a,s){return e={tag:e,create:a,deps:s,inst:t,next:null},t=oe.updateQueue,t===null&&(t=Cr(),oe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,t.lastEffect=e),e}function cp(){return We().memoizedState}function Rr(e,t,a,s){var l=kt();oe.flags|=e,l.memoizedState=wl(1|t,{destroy:void 0},a,s===void 0?null:s)}function zr(e,t,a,s){var l=We();s=s===void 0?null:s;var i=l.memoizedState.inst;Le!==null&&s!==null&&Sn(s,Le.memoizedState.deps)?l.memoizedState=wl(t,i,a,s):(oe.flags|=e,l.memoizedState=wl(1|t,i,a,s))}function up(e,t){Rr(8390656,8,e,t)}function _n(e,t){zr(2048,8,e,t)}function lb(e){oe.flags|=4;var t=oe.updateQueue;if(t===null)t=Cr(),oe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function pp(e){var t=We().memoizedState;return lb({ref:t,nextImpl:e}),function(){if((De&2)!==0)throw Error(n(440));return t.impl.apply(void 0,arguments)}}function fp(e,t){return zr(4,2,e,t)}function mp(e,t){return zr(4,4,e,t)}function xp(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bp(e,t,a){a=a!=null?a.concat([e]):null,zr(4,4,xp.bind(null,t,e),a)}function Nn(){}function gp(e,t){var a=We();t=t===void 0?null:t;var s=a.memoizedState;return t!==null&&Sn(t,s[1])?s[0]:(a.memoizedState=[e,t],e)}function hp(e,t){var a=We();t=t===void 0?null:t;var s=a.memoizedState;if(t!==null&&Sn(t,s[1]))return s[0];if(s=e(),Ys){Wa(!0);try{e()}finally{Wa(!1)}}return a.memoizedState=[s,t],s}function On(e,t,a){return a===void 0||(Ya&1073741824)!==0&&(ge&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Df(),oe.lanes|=e,bs|=e,a)}function vp(e,t,a,s){return Ut(a,t)?a:cs.current!==null?(e=On(e,a,s),Ut(e,t)||(it=!0),e):(Ya&106)===0||(Ya&1073741824)!==0&&(ge&261930)===0?(it=!0,e.memoizedState=a):(e=Df(),oe.lanes|=e,bs|=e,t)}function yp(e,t,a,s,l){var i=ae.p;ae.p=i!==0&&8>i?i:8;var r=X.T,c={};c.types=r!==null?r.types:null,X.T=c,Hn(e,!1,t,a);try{var f=l(),w=X.S;if(w!==null&&w(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var k=Wx(f,s);wi(e,t,k,Qt(e))}else wi(e,t,s,Qt(e))}catch(R){wi(e,t,{then:function(){},status:"rejected",reason:R},Qt())}finally{ae.p=i,r!==null&&c.types!==null&&(r.types=c.types),X.T=r}}function ib(){}function Ln(e,t,a,s){if(e.tag!==5)throw Error(n(476));var l=wp(e).queue;yp(e,l,t,oa,a===null?ib:function(){return Ep(e),a(s)})}function wp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:oa,baseState:oa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:oa},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ep(e){var t=wp(e);t.next===null&&(t=e.alternate.memoizedState),wi(e,t.next.queue,{},Qt())}function Bn(){return bt(Ul)}function Sp(){return We().memoizedState}function Tp(){return We().memoizedState}function rb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Qt();e=ns(a);var s=ds(t,e,a);s!==null&&(Ot(s,t,a),xi(s,t,a)),t={cache:un()},e.payload=t;return}t=t.return}}function ob(e,t,a){var s=Qt();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_r(e)?jp(t,a):(a=tn(e,t,a,s),a!==null&&(Ot(a,e,s),kp(a,t,s)))}function Ap(e,t,a){var s=Qt();wi(e,t,a,s)}function wi(e,t,a,s){var l={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_r(e))jp(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,c=i(r,a);if(l.hasEagerState=!0,l.eagerState=c,Ut(c,r))return cr(e,t,l,0),Be===null&&dr(),!1}catch{}if(a=tn(e,t,l,s),a!==null)return Ot(a,e,s),kp(a,t,s),!0}return!1}function Hn(e,t,a,s){if(s={lane:2,revertLane:Cd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},_r(e)){if(t)throw Error(n(479))}else t=tn(e,a,s,2),t!==null&&Ot(t,e,2)}function _r(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function jp(e,t){vl=jr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function kp(e,t,a){if((a&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,Cc(e,a)}}var Nr={readContext:bt,use:Dr,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe,useEffectEvent:Xe},Cp={readContext:bt,use:Dr,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:bt,useEffect:up,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Rr(4194308,4,xp.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Rr(4194308,4,e,t)},useInsertionEffect:function(e,t){Rr(4,2,e,t)},useMemo:function(e,t){var a=kt();t=t===void 0?null:t;var s=e();if(Ys){Wa(!0);try{e()}finally{Wa(!1)}}return a.memoizedState=[s,t],s},useReducer:function(e,t,a){var s=kt();if(a!==void 0){var l=a(t);if(Ys){Wa(!0);try{a(t)}finally{Wa(!1)}}}else l=t;return s.memoizedState=s.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},s.queue=e,e=e.dispatch=ob.bind(null,oe,e),[s.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:function(e){e=Rn(e);var t=e.queue,a=Ap.bind(null,oe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Nn,useDeferredValue:function(e,t){var a=kt();return On(a,e,t)},useTransition:function(){var e=Rn(!1);return e=yp.bind(null,oe,e.queue,!0,!1),kt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var s=oe,l=kt();if(pe){if(a===void 0)throw Error(n(407));a=a()}else{if(a=t(),Be===null)throw Error(n(349));(ge&127)!==0||$u(s,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,up(Pu.bind(null,s,i,e),[e]),s.flags|=2048,wl(9,{destroy:void 0},Ju.bind(null,s,i,a,t),null),a},useId:function(){var e=kt(),t=Be.identifierPrefix;if(pe){var a=Ea,s=wa;a=(s&~(1<<32-Ht(s)-1)).toString(32)+a,t="_"+t+"R_"+a,a=kr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=eb++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Bn,useFormState:rp,useActionState:rp,useOptimistic:function(e){var t=kt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Hn.bind(null,oe,!0,a),a.dispatch=t,[e,t]},useMemoCache:Cn,useCacheRefresh:function(){return kt().memoizedState=rb.bind(null,oe)},useEffectEvent:function(e){var t=kt(),a={impl:e};return t.memoizedState=a,function(){if((De&2)!==0)throw Error(n(440));return a.impl.apply(void 0,arguments)}}},Dp={readContext:bt,use:Dr,useCallback:gp,useContext:bt,useEffect:_n,useImperativeHandle:bp,useInsertionEffect:fp,useLayoutEffect:mp,useMemo:hp,useReducer:Mr,useRef:cp,useState:function(){return Mr(Va)},useDebugValue:Nn,useDeferredValue:function(e,t){var a=We();return vp(a,Le.memoizedState,e,t)},useTransition:function(){var e=Mr(Va)[0],t=We().memoizedState;return[typeof e=="boolean"?e:yi(e),t]},useSyncExternalStore:Ku,useId:Sp,useHostTransitionStatus:Bn,useFormState:op,useActionState:op,useOptimistic:function(e,t){var a=We();return ep(a,Le,e,t)},useMemoCache:Cn,useCacheRefresh:Tp,useEffectEvent:pp},nb={readContext:bt,use:Dr,useCallback:gp,useContext:bt,useEffect:_n,useImperativeHandle:bp,useInsertionEffect:fp,useLayoutEffect:mp,useMemo:hp,useReducer:Mn,useRef:cp,useState:function(){return Mn(Va)},useDebugValue:Nn,useDeferredValue:function(e,t){var a=We();return Le===null?On(a,e,t):vp(a,Le.memoizedState,e,t)},useTransition:function(){var e=Mn(Va)[0],t=We().memoizedState;return[typeof e=="boolean"?e:yi(e),t]},useSyncExternalStore:Ku,useId:Sp,useHostTransitionStatus:Bn,useFormState:dp,useActionState:dp,useOptimistic:function(e,t){var a=We();return Le!==null?ep(a,Le,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Cn,useCacheRefresh:Tp,useEffectEvent:pp};function qn(e,t,a,s){t=e.memoizedState,a=a(s,t),a=a==null?t:se({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Un={enqueueSetState:function(e,t,a){e=e._reactInternals;var s=Qt(),l=ns(s);l.payload=t,a!=null&&(l.callback=a),t=ds(e,l,s),t!==null&&(Ot(t,e,s),xi(t,e,s))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var s=Qt(),l=ns(s);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=ds(e,l,s),t!==null&&(Ot(t,e,s),xi(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Qt(),s=ns(a);s.tag=2,t!=null&&(s.callback=t),t=ds(e,s,a),t!==null&&(Ot(t,e,a),xi(t,e,a))}};function Mp(e,t,a,s,l,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,r):t.prototype&&t.prototype.isPureReactComponent?!oi(a,s)||!oi(l,i):!0}function Rp(e,t,a,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,s),t.state!==e&&Un.enqueueReplaceState(t,t.state,null)}function Vs(e,t){var a=t;if("ref"in t){a={};for(var s in t)s!=="ref"&&(a[s]=t[s])}if(e=e.defaultProps){a===t&&(a=se({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function zp(e){nr(e)}function _p(e){console.error(e)}function Np(e){nr(e)}function Or(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function Op(e,t,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Gn(e,t,a){return a=ns(a),a.tag=3,a.payload={element:null},a.callback=function(){Or(e,t)},a}function Lp(e){return e=ns(e),e.tag=3,e}function Bp(e,t,a,s){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=s.value;e.payload=function(){return l(i)},e.callback=function(){Op(t,a,s)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Op(t,a,s),typeof l!="function"&&(gs===null?gs=new Set([this]):gs.add(this));var c=s.stack;this.componentDidCatch(s.value,{componentStack:c!==null?c:""})})}function db(e,t,a,s,l){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=a.alternate,t!==null&&Ls(t,a,l,!0),a=gt.current,a!==null){switch(a.tag){case 31:case 13:case 19:return St===null?ao():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=l,s===wr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([s]):t.add(s),Ad(e,s,l)),!1;case 22:return a.flags|=65536,s===wr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([s]):a.add(s)),Ad(e,s,l)),!1}throw Error(n(435,a.tag))}return Ad(e,s,l),ao(),!1}if(pe)return t=gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,s!==on&&(e=Error(n(422),{cause:s}),ci(Wt(e,a)))):(s!==on&&(t=Error(n(423),{cause:s}),ci(Wt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,s=Wt(s,a),l=Gn(e.stateNode,s,l),gn(e,l),Ze!==4&&(Ze=2)),!1;var i=Error(n(520),{cause:s});if(i=Wt(i,a),Di===null?Di=[i]:Di.push(i),Ze!==4&&(Ze=2),t===null)return!0;s=Wt(s,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Gn(a.stateNode,s,e),gn(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(gs===null||!gs.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Lp(l),Bp(l,e,a,s),gn(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Fn=Error(n(461)),it=!1;function dt(e,t,a,s){t.child=e===null?Gu(t,null,a,s):Fs(t,e.child,a,s)}function Hp(e,t,a,s,l){a=a.render;var i=t.ref;if("ref"in s){var r={};for(var c in s)c!=="ref"&&(r[c]=s[c])}else r=s;return Bs(t),s=Tn(e,t,a,r,i,l),c=An(),e!==null&&!it?(jn(e,t,l),Qa(e,t,l)):(pe&&c&&mr(t),t.flags|=1,dt(e,t,s,l),t.child)}function qp(e,t,a,s,l){if(e===null){var i=a.type;return typeof i=="function"&&!an(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Up(e,t,i,s,l)):(e=pr(a.type,null,s,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Jn(e,l)){var r=i.memoizedProps;if(a=a.compare,a=a!==null?a:oi,a(r,s)&&e.ref===t.ref)return Qa(e,t,l)}return t.flags|=1,e=qa(i,s),e.ref=t.ref,e.return=t,t.child=e}function Up(e,t,a,s,l){if(e!==null){var i=e.memoizedProps;if(oi(i,s)&&e.ref===t.ref)if(it=!1,t.pendingProps=s=i,Jn(e,l))(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,Qa(e,t,l)}return Yn(e,t,a,s,l)}function Gp(e,t,a,s){var l=s.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(s=t.child=e.child,l=0;s!==null;)l=l|s.lanes|s.childLanes,s=s.sibling;s=l&~i}else s=0,t.child=null;return Fp(e,t,i,a,s)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vr(t,i!==null?i.cachePool:null),i!==null?Vu(t,i):vn(),Qu(t);else return s=t.lanes=536870912,Fp(e,t,i!==null?i.baseLanes|a:a,a,s)}else i!==null?(vr(t,i.cachePool),Vu(t,i),ps(),t.memoizedState=null):(e!==null&&vr(t,null),vn(),ps());return dt(e,t,l,a),t.child}function Ei(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Fp(e,t,a,s,l){var i=fn();return i=i===null?null:{parent:st._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&vr(t,null),vn(),Qu(t),e!==null&&Ls(e,t,s,!0),t.childLanes=l,null}function Lr(e,t){return t=Br({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Yp(e,t,a){return Fs(t,e.child,null,a),e=Lr(t,t.pendingProps),e.flags|=2,Gt(t),t.memoizedState=null,e}function cb(e,t,a){var s=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(pe){if(s.mode==="hidden")return e=Lr(t,s),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ei(null,e);if(wn(t),(e=He)?(e=b0(e,aa),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:as!==null?{id:wa,overflow:Ea}:null,retryLane:536870912,hydrationErrors:null},a=ju(e),a.return=t,t.child=a,ut=t,He=null)):e=null,e===null)throw ls(t);return t.lanes=536870912,null}return Lr(t,s)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(wn(t),l)if(t.flags&256)t.flags&=-257,t=Yp(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(n(558));else if(it||Ls(e,t,a,!1),l=(a&e.childLanes)!==0,it||l){if(cs.current===null){if(s=Be,s!==null&&(r=Dc(s,a),r!==0&&r!==i.retryLane))throw i.retryLane=r,zs(e,r),Ot(s,e,r),Fn;ao()}t=Yp(e,t,a)}else e=i.treeContext,He=la(r.nextSibling),ut=t,pe=!0,ss=null,aa=!1,e!==null&&Du(t,e),t=Lr(t,s),t.flags|=134221824;return t}return e=qa(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function El(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(n(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Yn(e,t,a,s,l){return Bs(t),a=Tn(e,t,a,s,void 0,l),s=An(),e!==null&&!it?(jn(e,t,l),Qa(e,t,l)):(pe&&s&&mr(t),t.flags|=1,dt(e,t,a,l),t.child)}function Vp(e,t,a,s,l,i){return Bs(t),t.updateQueue=null,a=Zu(t,s,a,l),Xu(e),s=An(),e!==null&&!it?(jn(e,t,i),Qa(e,t,i)):(pe&&s&&mr(t),t.flags|=1,dt(e,t,a,i),t.child)}function Qp(e,t,a,s,l){if(Bs(t),t.stateNode===null){var i=pl,r=a.contextType;typeof r=="object"&&r!==null&&(i=bt(r)),i=new a(s,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Un,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=s,i.state=t.memoizedState,i.refs={},xn(t),r=a.contextType,i.context=typeof r=="object"&&r!==null?bt(r):pl,i.state=t.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(qn(t,a,r,s),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Un.enqueueReplaceState(i,i.state,null),gi(t,s,i,l),bi(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,f=Vs(a,c);i.props=f;var w=i.context,k=a.contextType;r=pl,typeof k=="object"&&k!==null&&(r=bt(k));var R=a.getDerivedStateFromProps;k=typeof R=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,k||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||w!==r)&&Rp(t,i,s,r),os=!1;var v=t.memoizedState;i.state=v,gi(t,s,i,l),bi(),w=t.memoizedState,c||v!==w||os?(typeof R=="function"&&(qn(t,a,R,s),w=t.memoizedState),(f=os||Mp(t,a,f,s,v,w,r))?(k||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=w),i.props=s,i.state=w,i.context=r,s=f):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{i=t.stateNode,bn(e,t),r=t.memoizedProps,k=Vs(a,r),i.props=k,R=t.pendingProps,v=i.context,w=a.contextType,f=pl,typeof w=="object"&&w!==null&&(f=bt(w)),c=a.getDerivedStateFromProps,(w=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==R||v!==f)&&Rp(t,i,s,f),os=!1,v=t.memoizedState,i.state=v,gi(t,s,i,l),bi();var A=t.memoizedState;r!==R||v!==A||os||e!==null&&e.dependencies!==null&&gr(e.dependencies)?(typeof c=="function"&&(qn(t,a,c,s),A=t.memoizedState),(k=os||Mp(t,a,k,s,v,A,f)||e!==null&&e.dependencies!==null&&gr(e.dependencies))?(w||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(s,A,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(s,A,f)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=A),i.props=s,i.state=A,i.context=f,s=k):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),s=!1)}return i=s,El(e,t),s=(t.flags&128)!==0,i||s?(i=t.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&s?(t.child=Fs(t,e.child,null,l),t.child=Fs(t,null,a,l)):dt(e,t,a,l),t.memoizedState=i.state,e=t.child):e=Qa(e,t,l),e}function Xp(e,t,a,s){return Ns(),t.flags|=256,dt(e,t,a,s),t.child}var Vn={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qn(e){return{baseLanes:e,cachePool:Ou()}}function Xn(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Vt),e}function Zp(e,t,a){var s=t.pendingProps,l=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(ht.current&2)!==0),r&&(l=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(pe){if(l?us(t):ps(),(e=He)?(e=b0(e,aa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:as!==null?{id:wa,overflow:Ea}:null,retryLane:536870912,hydrationErrors:null},a=ju(e),a.return=t,t.child=a,ut=t,He=null)):e=null,e===null)throw ls(t);return Qd(e)?t.lanes=32:t.lanes=536870912,null}return i=s.children,s=s.fallback,l?(ps(),l=t.mode,i=Br({mode:"hidden",children:i},l),s=_s(s,l,a,null),i.return=t,s.return=t,i.sibling=s,t.child=i,s=t.child,s.memoizedState=Qn(a),s.childLanes=Xn(e,r,a),t.memoizedState=Vn,Ei(null,s)):(us(t),Zn(t,i))}var c=e.memoizedState;if(c!==null){var f=c.dehydrated;if(f!==null)return ub(e,t,i,r,s,f,c,a)}return l?(ps(),l=s.fallback,i=t.mode,c=e.child,f=c.sibling,s=qa(c,{mode:"hidden",children:s.children}),s.subtreeFlags=c.subtreeFlags&1206910976,f!==null?l=qa(f,l):(l=_s(l,i,a,null),l.flags|=2),l.return=t,s.return=t,s.sibling=l,t.child=s,Ei(null,s),s=t.child,l=e.child.memoizedState,l===null?l=Qn(a):(i=l.cachePool,i!==null?(c=st._currentValue,i=i.parent!==c?{parent:c,pool:c}:i):i=Ou(),l={baseLanes:l.baseLanes|a,cachePool:i}),s.memoizedState=l,s.childLanes=Xn(e,r,a),t.memoizedState=Vn,Ei(e.child,s)):(us(t),a=e.child,e=a.sibling,a=qa(a,{mode:"visible",children:s.children}),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a)}function Zn(e,t){return t=Br({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Br(e,t){return e=Rt(22,e,null,t),e.lanes=0,e}function Hr(e,t,a){return Fs(t,e.child,null,a),e=Zn(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ub(e,t,a,s,l,i,r,c){if(a)return t.flags&256?(us(t),t.flags&=-257,Hr(e,t,c)):t.memoizedState!==null?(ps(),t.child=e.child,t.flags|=128,null):(ps(),i=l.fallback,r=t.mode,l=Br({mode:"visible",children:l.children},r),i=_s(i,r,c,null),i.flags|=2,l.return=t,i.return=t,l.sibling=i,t.child=l,Fs(t,e.child,null,c),l=t.child,l.memoizedState=Qn(c),l.childLanes=Xn(e,s,c),t.memoizedState=Vn,Ei(null,l));if(us(t),Qd(i)){if(s=i.nextSibling&&i.nextSibling.dataset,s)var f=s.dgst;return s=f,s!==""&&(l=Error(n(419)),l.stack="",l.digest=s,ci({value:l,source:null,stack:null})),Hr(e,t,c)}if(it||Ls(e,t,c,!1),s=(c&e.childLanes)!==0,it||s){if(cs.current!==null)return Hr(e,t,c);if(s=Be,s!==null&&(l=Dc(s,c),l!==0&&l!==r.retryLane))throw r.retryLane=l,zs(e,l),Ot(s,e,l),Fn;return Vd(i)||ao(),Hr(e,t,c)}return Vd(i)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,He=la(i.nextSibling),ut=t,pe=!0,ss=null,aa=!1,e!==null&&Du(t,e),t=Zn(t,l.children),t.flags|=134221824,t)}function Kp(e,t,a){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),br(e.return,t,a)}function $p(e){for(var t=null;e!==null;){var a=e.alternate;a!==null&&Ar(a)===null&&(t=e),e=e.sibling}return t}function qr(e,t,a,s,l,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:l,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=s,r.tail=a,r.tailMode=l,r.treeForkCount=i)}function Kn(e){var t=e.child;for(e.child=null;t!==null;){var a=t.sibling;t.sibling=e.child,e.child=t,t=a}}function $n(e,t,a){var s=t.pendingProps,l=s.revealOrder,i=s.tail;s=s.children;var r=ht.current;if(t.flags&128)return hi(t,r),null;var c=(r&2)!==0;if(c?(r=r&1|2,t.flags|=128):r&=1,hi(t,r),l==="backwards"&&e!==null?(Kn(e),dt(e,t,s,a),Kn(e)):dt(e,t,s,a),s=pe?di:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kp(e,a,t);else if(e.tag===19)Kp(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":a=$p(t.child),a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null,Kn(t)),qr(t,!0,l,null,i,s);break;case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ar(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}qr(t,!0,a,null,i,s);break;case"together":qr(t,!1,null,null,void 0,s);break;case"independent":t.memoizedState=null;break;default:a=$p(t.child),a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),qr(t,!1,l,a,i,s)}return t.child}function Jp(e,t,a){var s=t.pendingProps;return is(t,t.type,s.value),dt(e,t,s.children,a),t.child}function Qa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),bs|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Ls(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(n(153));if(t.child!==null){for(e=t.child,a=qa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=qa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Jn(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&gr(e)))}function pb(e,t,a){switch(t.tag){case 3:Ye(t,t.stateNode.containerInfo),is(t,st,e.memoizedState.cache),Ns();break;case 27:case 5:ga(t);break;case 4:Ye(t,t.stateNode.containerInfo);break;case 10:is(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,wn(t),null;break;case 13:var s=t.memoizedState;if(s!==null){if(s.dehydrated!==null)return us(t),t.flags|=128,null;s=Ls(e,t,a,!1);var l=t.child.childLanes;return s||(a&l)!==0?Zp(e,t,a):(us(t),e=Qa(e,t,a),e!==null?e.sibling:null)}us(t);break;case 19:if(t.flags&128)return $n(e,t,a);if(l=(e.flags&128)!==0,s=(a&t.childLanes)!==0,s||(Ls(e,t,a,!1),s=(a&t.childLanes)!==0),l){if(s)return $n(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),hi(t,ht.current),s)break;return null;case 22:return t.lanes=0,Gp(e,t,a,t.pendingProps);case 24:is(t,st,e.memoizedState.cache)}return Qa(e,t,a)}function Pp(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)it=!0;else{if(!Jn(e,a)&&(t.flags&128)===0)return it=!1,pb(e,t,a);it=(e.flags&131072)!==0}else it=!1,pe&&(t.flags&1048576)!==0&&Cu(t,di,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=Us(t.elementType),t.type=e,typeof e=="function")an(e)?(s=Vs(e,s),t.tag=1,t=Qp(null,t,e,s,a)):(t.tag=0,t=Yn(null,t,e,s,a));else{if(e!=null){var l=e.$$typeof;if(l===q){t.tag=11,t=Hp(null,t,e,s,a);break e}else if(l===Me){t.tag=14,t=qp(null,t,e,s,a);break e}else if(l===Ae){t.tag=10,t.type=e,t=Jp(null,t,a);break e}}throw t=ve(e)||e,Error(n(306,t,""))}}return t;case 0:return Yn(e,t,t.type,t.pendingProps,a);case 1:return s=t.type,l=Vs(s,t.pendingProps),Qp(e,t,s,l,a);case 3:e:{if(Ye(t,t.stateNode.containerInfo),e===null)throw Error(n(387));s=t.pendingProps;var i=t.memoizedState;l=i.element,bn(e,t),gi(t,s,null,a);var r=t.memoizedState;if(s=r.cache,is(t,st,s),s!==i.cache&&cn(t,[st],a,!0),bi(),s=r.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Xp(e,t,s,a);break e}else if(s!==l){l=Wt(Error(n(424)),t),ci(l),t=Xp(e,t,s,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,He=la(e.firstChild),ut=t,pe=!0,ss=null,aa=!0,a=Gu(t,null,s,a),t.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Ns(),s===l){t=Qa(e,t,a);break e}dt(e,t,s,a)}t=t.child}return t;case 26:return El(e,t),e===null?(a=S0(t.type,null,t.pendingProps,null))?t.memoizedState=a:pe||(t.stateNode=a0(t.type,t.pendingProps,de.current,t)):t.memoizedState=S0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ga(t),e===null&&pe&&(s=t.stateNode=v0(t.type,t.pendingProps,de.current),ut=t,aa=!0,l=He,ys(t.type)?(Xd=l,He=la(s.firstChild)):He=l),dt(e,t,t.pendingProps.children,a),El(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&pe&&((l=s=He)&&(s=rg(s,t.type,t.pendingProps,aa),s!==null?(t.stateNode=s,ut=t,He=la(s.firstChild),aa=!1,l=!0):l=!1),l||ls(t)),ga(t),l=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,s=i.children,Bd(l,i)?s=null:r!==null&&Bd(l,r)&&(t.flags|=32),t.memoizedState!==null&&(l=Tn(e,t,tb,null,null,a),Ul._currentValue=l),El(e,t),dt(e,t,s,a),t.child;case 6:return e===null&&pe&&((e=a=He)&&(a=og(a,t.pendingProps,aa),a!==null?(t.stateNode=a,ut=t,He=null,e=!0):e=!1),e||ls(t)),null;case 13:return Zp(e,t,a);case 4:return Ye(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Fs(t,null,s,a):dt(e,t,s,a),t.child;case 11:return Hp(e,t,t.type,t.pendingProps,a);case 7:return s=t.pendingProps,El(e,t),dt(e,t,s,a),t.child;case 8:return dt(e,t,t.pendingProps.children,a),t.child;case 12:return dt(e,t,t.pendingProps.children,a),t.child;case 10:return Jp(e,t,a);case 9:return l=t.type._context,s=t.pendingProps.children,Bs(t),l=bt(l),s=s(l),t.flags|=1,dt(e,t,s,a),t.child;case 14:return qp(e,t,t.type,t.pendingProps,a);case 15:return Up(e,t,t.type,t.pendingProps,a);case 19:return $n(e,t,a);case 31:return cb(e,t,a);case 22:return Gp(e,t,a,t.pendingProps);case 24:return Bs(t),s=bt(st),e===null?(l=fn(),l===null&&(l=Be,i=un(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:s,cache:l},xn(t),is(t,st,l)):((e.lanes&a)!==0&&(bn(e,t),gi(t,null,null,a),bi()),l=e.memoizedState,i=t.memoizedState,l.parent!==s?(l={parent:s,cache:s},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),is(t,st,s)):(s=i.cache,is(t,st,s),s!==l.cache&&cn(t,[st],a,!0))),dt(e,t,t.pendingProps.children,a),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=t.pendingProps,s.name!=null&&s.name!=="auto"?t.flags|=e===null?18882560:18874368:pe&&mr(t),e!==null&&e.memoizedProps.name!==s.name?t.flags|=4194816:El(e,t),dt(e,t,s.children,a),t.child;case 29:throw t.pendingProps}throw Error(n(156,t.tag))}function Xa(e){e.flags|=4}function Pn(e,t,a,s,l){var i;if((i=(e.mode&32)!==0)&&(i=a===null?k0(t,s):k0(t,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),i){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(_f())e.flags|=8192;else throw Gs=wr,mn}else e.flags&=-16777217}function Ip(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!C0(t))if(_f())e.flags|=8192;else throw Gs=wr,mn}function Ur(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?jc():536870912,e.lanes|=t,kl|=t)}function Si(e,t){if(!pe)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null;break;default:for(t=e.tail,a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags&1206910976,s|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=s,e.childLanes=a,t}function fb(e,t,a){var s=t.pendingProps;switch(rn(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return qe(t),null;case 3:return a=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),Fa(st),Pe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(xl(t)?Xa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,nn())),qe(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(Xa(t),i!==null?(qe(t),Ip(t,i)):(qe(t),Pn(t,l,null,s,a))):i?i!==e.memoizedState?(Xa(t),qe(t),Ip(t,i)):(qe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&Xa(t),qe(t),Pn(t,l,e,s,a)),null;case 27:if(Ue(t),a=de.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Xa(t);else{if(!s){if(t.stateNode===null)throw Error(n(166));return qe(t),t.subtreeFlags&=-33554433,null}e=ce.current,xl(t)?Mu(t):(e=v0(l,s,a),t.stateNode=e,Xa(t))}return qe(t),t.subtreeFlags&=-33554433,null;case 5:if(Ue(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Xa(t);else{if(!s){if(t.stateNode===null)throw Error(n(166));return qe(t),t.subtreeFlags&=-33554433,null}if(i=ce.current,xl(t))Mu(t);else{var r=Ni(de.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof s.is=="string"?r.createElement("select",{is:s.is}):r.createElement("select"),s.multiple?i.multiple=!0:s.size&&(i.size=s.size);break;default:i=typeof s.is=="string"?r.createElement(l,{is:s.is}):r.createElement(l)}}i[xt]=t,i[Mt]=s;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(yt(i,l,s),l){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Xa(t)}}return qe(t),t.subtreeFlags&=-33554433,Pn(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&Xa(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(n(166));if(e=de.current,xl(t)){if(e=t.stateNode,a=t.memoizedProps,s=null,l=ut,l!==null)switch(l.tag){case 27:case 5:s=l.memoizedProps}e[xt]=t,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||If(e.nodeValue,a)),e||ls(t,!0)}else e=Ni(e).createTextNode(s),e[xt]=t,t.stateNode=e}return qe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(s=xl(t),a!==null){if(e===null){if(!s)throw Error(n(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(557));e[xt]=t}else Ns(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),e=!1}else a=nn(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Gt(t),t):(Gt(t),null);if((t.flags&128)!==0)throw Error(n(558))}return qe(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=xl(t),s!==null&&s.dehydrated!==null){if(e===null){if(!l)throw Error(n(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(n(317));l[xt]=t}else Ns(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),l=!1}else l=nn(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Gt(t),t):(Gt(t),null)}return Gt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=t.child,l=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(l=s.alternate.memoizedState.cachePool.pool),i=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(i=s.memoizedState.cachePool.pool),i!==l&&(s.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ur(t,t.updateQueue),qe(t),null);case 4:return Pe(),e===null&&zd(t.stateNode.containerInfo),t.flags|=67108864,qe(t),null;case 10:return Fa(t.type),qe(t),null;case 19:if(En(t),s=t.memoizedState,s===null)return qe(t),null;if(l=(t.flags&128)!==0,i=s.rendering,i===null)if(l)Si(s,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ar(e),i!==null){for(t.flags|=128,Si(s,!1),e=i.updateQueue,t.updateQueue=e,Ur(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Au(a,e),a=a.sibling;return hi(t,ht.current&1|2),pe&&Ua(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&Se()>Ir&&(t.flags|=128,l=!0,Si(s,!1),t.lanes=4194304)}else{if(!l)if(e=Ar(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ur(t,e),Si(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!i.alternate&&!pe)return qe(t),null}else 2*Se()-s.renderingStartTime>Ir&&a!==536870912&&(t.flags|=128,l=!0,Si(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(e=s.last,e!==null?e.sibling=i:t.child=i,s.last=i)}if(s.tail!==null){e=s.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Se(),e.sibling=null,i=ht.current,i=l?i&1|2:i&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||pe?hi(t,i):(a=i,B(gt,t),B(ht,a),St===null&&(St=t)),pe&&Ua(t,s.treeForkCount),e}return qe(t),null;case 22:case 23:return Gt(t),yn(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(a&536870912)!==0&&(t.flags&128)===0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),a=t.updateQueue,a!==null&&Ur(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==a&&(t.flags|=2048),e!==null&&N(qs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Fa(st),qe(t),null;case 25:return null;case 30:return t.flags|=33554432,qe(t),null}throw Error(n(156,t.tag))}function mb(e,t){switch(rn(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fa(st),Pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ue(t),null;case 31:if(t.memoizedState!==null){if(Gt(t),t.alternate===null)throw Error(n(340));Ns()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(n(340));Ns()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return En(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Pe(),null;case 10:return Fa(t.type),null;case 22:case 23:return Gt(t),yn(),e!==null&&N(qs),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Fa(st),null;case 25:return null;default:return null}}function Wp(e,t){switch(rn(t),t.tag){case 3:Fa(st),Pe();break;case 26:case 27:case 5:Ue(t);break;case 4:Pe();break;case 31:t.memoizedState!==null&&Gt(t);break;case 13:Gt(t);break;case 19:En(t);break;case 10:Fa(t.type);break;case 22:case 23:Gt(t),yn(),e!==null&&N(qs);break;case 24:Fa(st)}}function Ti(e,t){try{var a=t.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var l=s.next;a=l;do{if((a.tag&e)===e){s=void 0;var i=a.create,r=a.inst;s=i(),r.destroy=s}a=a.next}while(a!==l)}}catch(c){Ne(t,t.return,c)}}function fs(e,t,a){try{var s=t.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var i=l.next;s=i;do{if((s.tag&e)===e){var r=s.inst,c=r.destroy;if(c!==void 0){r.destroy=void 0,l=t;var f=a,w=c;try{w()}catch(k){Ne(l,f,k)}}}s=s.next}while(s!==i)}}catch(k){Ne(t,t.return,k)}}function ef(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Yu(t,a)}catch(s){Ne(e,e.return,s)}}}function tf(e,t,a){a.props=Vs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ne(e,t,s)}}function Sa(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:var l=e.stateNode,i=Ba(e.memoizedProps,l);(l.ref===null||l.ref.name!==i)&&(l.ref=d0(i)),s=l.ref;break;case 7:if(e.stateNode===null){var r=new Xt(e);x(e.child,!1,lg,r,void 0,void 0),e.stateNode=r}s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Ne(e,t,c)}}function vt(e,t){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(l){Ne(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Ne(e,t,l)}else a.current=null}function Gr(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var a=0;a<t.length;a++)x0(e.stateNode,t[a])}function af(e){for(var t=e.return;t!==null&&(Wn(t)&&x0(e.stateNode,t.stateNode),!In(t));)t=t.return}function Ai(e){for(var t=e.return;t!==null&&(Wn(t)&&ig(e.stateNode,t.stateNode),!In(t));)t=t.return}function In(e){return e.tag===5||e.tag===3||e.tag===27}function Wn(e){return e&&e.tag===7&&e.stateNode!==null}function ed(e){var t=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(l){Ne(e,e.return,l)}}function td(e,t,a){try{var s=e.stateNode;Ub(s,e.type,a,t),s[Mt]=t}catch(l){Ne(e,e.return,l)}}function sf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ys(e.type)||e.tag===4}function ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ys(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sd(e,t,a,s){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(l),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ya)),Gr(e,s),je=!0;else if(l!==4&&(l===27&&(Gr(e,s),s=null,ys(e.type)&&(a=e.stateNode,t=null)),e=e.child,e!==null))for(sd(e,t,a,s),e=e.sibling;e!==null;)sd(e,t,a,s),e=e.sibling}function Fr(e,t,a,s){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?a.insertBefore(l,t):a.appendChild(l),Gr(e,s),je=!0;else if(l!==4&&(l===27&&(Gr(e,s),s=null,ys(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Fr(e,t,a,s),e=e.sibling;e!==null;)Fr(e,t,a,s),e=e.sibling}function lf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);yt(t,s,a),t[xt]=e,t[Mt]=a}catch(i){Ne(e,e.return,i)}}var Yr=!1,Ft=null;function rf(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Yr=!0)}var Ta=null;function of(){var e=Ta;return Ta=null,e}var zt=0;function Sl(e,t,a,s,l){return zt=0,nf(e.child,t,a,s,l)}function nf(e,t,a,s,l){for(var i=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(s!==null){var c=Ud(r);s.push(c),c.view&&(i=!0)}else i||Ud(r).view&&(i=!0);Yr=!0,o0(r,zt===0?t:t+"_"+zt,a),zt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||nf(e.child,t,a,s,l)&&(i=!0));e=e.sibling}return i}function Aa(e,t){for(;e!==null;)e.tag===5?n0(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Aa(e.child,t)),e=e.sibling}function Vr(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Vr(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(n(544));var a=t.name;t=Ha(t.default,t.share),t!=="none"&&(Sl(e,a,t,null,!1)||Aa(e.child,!1))}e=e.sibling}}function ld(e,t){if(e.tag===30){var a=e.stateNode,s=e.memoizedProps,l=Ba(s,a),i=Ha(s.default,a.paired?s.share:s.enter);i!=="none"?Sl(e,l,i,null,!1)?(Vr(e),a.paired||t||Rl(e,s.onEnter)):Aa(e.child,!1):Vr(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ld(e,t),e=e.sibling;else Vr(e)}function id(e){if(Ft!==null&&Ft.size!==0){var t=Ft;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var l=t.get(s);if(l!==void 0){var i=Ha(a.default,a.share);if(i!=="none"&&(Sl(e,s,i,null,!1)?(i=e.stateNode,l.paired=i,i.paired=l,Rl(e,a.onShare)):Aa(e.child,!1)),t.delete(s),t.size===0)break}}}id(e)}e=e.sibling}}}function rd(e){if(e.tag===30){var t=e.memoizedProps,a=Ba(t,e.stateNode),s=Ft!==null?Ft.get(a):void 0,l=Ha(t.default,s!==void 0?t.share:t.exit);l!=="none"&&(Sl(e,a,l,null,!1)?s!==void 0?(l=e.stateNode,s.paired=l,l.paired=s,Ft.delete(a),Rl(e,t.onShare)):Rl(e,t.onExit):Aa(e.child,!1)),Ft!==null&&id(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)rd(e),e=e.sibling;else Ft!==null&&id(e)}function df(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,a=Ba(t,e.stateNode);t=Ha(t.default,t.update),e.flags&=-5,t!=="none"&&Sl(e,a,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&df(e);e=e.sibling}}function od(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Aa(e.child,!1))}od(e)}e=e.sibling}}function Qr(e){if(e.tag===30)e.stateNode.paired=null,Aa(e.child,!1),od(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Qr(e),e=e.sibling;else od(e)}function cf(e){for(e=e.child;e!==null;)e.tag===30?Aa(e.child,!1):(e.subtreeFlags&33554432)!==0&&cf(e),e=e.sibling}function nd(e,t,a,s,l,i,r){for(var c=!1;t!==null;){if(t.tag===5){var f=t.stateNode;if(i!==null&&zt<i.length){var w=i[zt],k=Ud(f);(w.view||k.view)&&(c=!0);var R;if(R=(e.flags&4)===0)if(k.clip)R=!0;else{R=w.rect;var v=k.rect;R=R.y!==v.y||R.x!==v.x||R.height!==v.height||R.width!==v.width}R&&(e.flags|=4),k.abs?k=!w.abs:(w=w.rect,k=k.rect,k=w.height!==k.height||w.width!==k.width),k&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&o0(f,zt===0?a:a+"_"+zt,l),c&&(e.flags&4)!==0||(Ta===null&&(Ta=[]),Ta.push(f,zt===0?s:s+"_"+zt,t.memoizedProps)),zt++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:nd(e,t.child,a,s,l,i,r)&&(c=!0));t=t.sibling}return c}function uf(e,t){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,s=e.stateNode,l=Ba(a,s),i=Ha(a.default,a.update),r;r=e.memoizedState,e.memoizedState=null,s=e;var c=e.child;zt=0,l=nd(s,c,l,l,i,r,!1),(e.flags&4)!==0&&l&&Rl(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&uf(e);e=e.sibling}}var pt=!1,Re=!1,ja=!1,dd=!1,pf=typeof WeakSet=="function"?WeakSet:Set,ft=null,ka=!1,ji=!1,Xr=!1,cd=!1;function xb(e,t,a){if(e=e.containerInfo,Od=Gl,e=xu(e),$o(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var i=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{s.nodeType,r.nodeType}catch{s=null;break e}var c=0,f=-1,w=-1,k=0,R=0,v=e,A=null;t:for(;;){for(var H;v!==s||i!==0&&v.nodeType!==3||(f=c+i),v!==r||l!==0&&v.nodeType!==3||(w=c+l),v.nodeType===3&&(c+=v.nodeValue.length),(H=v.firstChild)!==null;)A=v,v=H;for(;;){if(v===e)break t;if(A===s&&++k===i&&(f=c),A===r&&++R===l&&(w=c),(H=v.nextSibling)!==null)break;v=A,A=v.parentNode}v=H}s=f===-1||w===-1?null:{start:f,end:w}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ld={focusedElem:e,selectionRange:s},Gl=!1,a=(a&335544064)===a,ft=t,t=a?9270:1024;ft!==null;){if(e=ft,a&&(s=e.deletions,s!==null))for(i=0;i<s.length;i++)a&&rd(s[i]);if(e.alternate===null&&(e.flags&2)!==0)a&&rf(e),Zr(a);else{if(e.tag===22){if(s=e.alternate,e.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&rd(s),Zr(a);continue}else if(s!==null&&s.memoizedState!==null){a&&rf(e),Zr(a);continue}}s=e.child,(e.subtreeFlags&t)!==0&&s!==null?(s.return=e,ft=s):(a&&df(e),Zr(a))}}Ft=null}function Zr(e){for(;ft!==null;){var t=ft,a=e,s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&s!==null){a=void 0,l=s.memoizedProps,s=s.memoizedState;var i=t.stateNode;try{var r=Vs(t.type,l);a=i.getSnapshotBeforeUpdate(r,s),i.__reactInternalSnapshotBeforeUpdate=a}catch(c){Ne(t,t.return,c)}}break;case 3:if((l&1024)!==0){if(s=t.stateNode.containerInfo,a=s.nodeType,a===9)Yd(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Yd(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=Ba(s.memoizedProps,s.stateNode),l=t.memoizedProps,l=Ha(l.default,l.update),l!=="none"&&Sl(s,a,l,s.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(n(163))}if(s=t.sibling,s!==null){s.return=t.return,ft=s;break}ft=t.return}}function ff(e,t,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ca(e,a),s&4&&Ti(5,a);break;case 1:if(Ca(e,a),s&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(r){Ne(a,a.return,r)}else{var l=Vs(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Ne(a,a.return,r)}}s&64&&ef(a),s&512&&Sa(a,a.return);break;case 3:if(Ca(e,a),s&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Yu(e,t)}catch(r){Ne(a,a.return,r)}}break;case 27:t===null&&s&4&&lf(a);case 26:case 5:Ca(e,a),t===null&&s&4&&ed(a),s&512&&Sa(a,a.return);break;case 12:Ca(e,a);break;case 31:Ca(e,a),s&4&&gf(e,a);break;case 13:Ca(e,a),s&4&&hf(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=kb.bind(null,a),ng(e,a))));break;case 22:if(s=a.memoizedState!==null||pt,!s){var i=t!==null&&t.memoizedState!==null||Re;t=pt,l=Re,pt=s,(Re=i)&&!l?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),pa(e,a,s)):Ca(e,a),pt=t,Re=l}break;case 30:Ca(e,a),s&512&&Sa(a,a.return);break;case 7:s&512&&Sa(a,a.return);default:Ca(e,a)}}function ud(e,t){for(e=e.child;e!==null;)mf(e,t),e=e.sibling}function mf(e,t){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(t){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var l=e.stateNode,i=e.memoizedProps.style,r=i!=null&&i.hasOwnProperty("display")?i.display:null;l.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(f){Ne(e,e.return,f)}pd(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,je=!0}catch(f){Ne(e,e.return,f)}break;case 18:try{var c=e.stateNode;t?r0(c,!0):r0(e.stateNode,!1)}catch(f){Ne(e,e.return,f)}break;case 22:case 23:e.memoizedState===null&&ud(e,t);break;default:ud(e,t)}}function pd(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,s=t;switch(a.tag){case 4:mf(a,s);break e;case 22:a.memoizedState===null&&pd(a,s);break e;default:pd(a,s)}}e=e.sibling}}function xf(e){var t=e.alternate;t!==null&&(e.alternate=null,xf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ii(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,_t=!1;function ca(e,t,a){for(a=a.child;a!==null;)bf(e,t,a),a=a.sibling}function bf(e,t,a){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount($l,a)}catch{}switch(a.tag){case 26:Re||vt(a,t),ca(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Re&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Re||vt(a,t),Ai(a);var s=Ge,l=_t;ys(a.type)&&(Ge=a.stateNode,_t=!1),ca(e,t,a),y0(a.stateNode,a.type,a.memoizedProps),Ge=s,_t=l;break;case 5:Re||vt(a,t),Ai(a);case 6:if(a.tag===6&&Ai(a),s=Ge,l=_t,Ge=null,ca(e,t,a),Ge=s,_t=l,Ge!==null)if(_t)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(a.stateNode),je=!0}catch(i){Ne(a,t,i)}else try{Ge.removeChild(a.stateNode),je=!0}catch(i){Ne(a,t,i)}break;case 18:Ge!==null&&(_t?(e=Ge,i0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Fl(e)):i0(Ge,a.stateNode));break;case 4:s=Ge,l=_t,Ge=a.stateNode.containerInfo,_t=!0,ca(e,t,a),Ge=s,_t=l;break;case 0:case 11:case 14:case 15:fs(2,a,t),Re||fs(4,a,t),ca(e,t,a);break;case 1:Re||(vt(a,t),s=a.stateNode,typeof s.componentWillUnmount=="function"&&tf(a,t,s)),ca(e,t,a);break;case 21:ca(e,t,a);break;case 22:Re=(s=Re)||a.memoizedState!==null,ca(e,t,a),Re=s;break;case 30:vt(a,t),ca(e,t,a);break;case 7:Re||vt(a,t),ca(e,t,a);break;default:ca(e,t,a)}}function gf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fl(e)}catch(a){Ne(t,t.return,a)}}}function hf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fl(e)}catch(a){Ne(t,t.return,a)}}function bb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new pf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new pf),t;default:throw Error(n(435,e.tag))}}function Kr(e,t){var a=bb(e);t.forEach(function(s){if(!a.has(s)){a.add(s);var l=Cb.bind(null,e,s);s.then(l,l)}})}function Ct(e,t,a){var s=t.deletions;if(s!==null)for(var l=0;l<s.length;l++){var i=s[l],r=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 27:if(ys(f.type)){Ge=f.stateNode,_t=!1;break e}break;case 5:Ge=f.stateNode,_t=!1;break e;case 3:case 4:Ge=f.stateNode.containerInfo,_t=!0;break e}f=f.return}if(Ge===null)throw Error(n(160));bf(r,c,i),Ge=null,_t=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vf(t,e,a),t=t.sibling}var ua=null;function vf(e,t,a){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(s=e.updateQueue,s=s!==null?s.events:null,s!==null))for(var i=0;i<s.length;i++){var r=s[i];r.ref.impl=r.nextImpl}Ct(t,e,a),Dt(e),l&4&&(fs(3,e,e.return),Ti(3,e),fs(5,e,e.return));break;case 1:Ct(t,e,a),Dt(e),l&512&&(Re||s===null||vt(s,s.return)),l&64&&pt&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?t:a.concat(t))));break;case 26:if(i=ua,Ct(t,e,a),Dt(e),l&512&&(Re||s===null||vt(s,s.return)),l&4)if(l=s!==null?s.memoizedState:null,a=e.memoizedState,s===null)if(a===null)if(e.stateNode===null)if(pt)e.stateNode=a0(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,a=e.memoizedProps,l=i.ownerDocument||i;t:switch(t){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Il]||s[xt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(t),l.head.insertBefore(s,l.querySelector("head > title"))),yt(s,t,a),s[xt]=e,ct(s),t=s;break e;case"link":if(i=j0("link","href",l).get(t+(a.href||""))){for(r=0;r<i.length;r++)if(s=i[r],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(r,1);break t}}s=l.createElement(t),yt(s,t,a),l.head.appendChild(s);break;case"meta":if(i=j0("meta","content",l).get(t+(a.content||""))){for(r=0;r<i.length;r++)if(s=i[r],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(r,1);break t}}s=l.createElement(t),yt(s,t,a),l.head.appendChild(s);break;default:throw Error(n(468,t))}s[xt]=e,ct(s),t=s}e.stateNode=t}else pt||Jd(i,e.type,e.stateNode);else e.stateNode=A0(i,a,e.memoizedProps);else l!==a?(l===null?(t=s.stateNode,t===null||Re||t.parentNode.removeChild(t)):l.count--,a===null?pt||Jd(i,e.type,e.stateNode):A0(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&td(e,e.memoizedProps,s.memoizedProps);break;case 27:Ct(t,e,a),Dt(e),l&512&&(Re||s===null||vt(s,s.return)),s!==null&&l&4&&td(e,e.memoizedProps,s.memoizedProps);break;case 5:if(i=ja,ja=!1,Ct(t,e,a),ja=i,Dt(e),l&512&&(Re||s===null||vt(s,s.return)),e.flags&32){t=e.stateNode;try{il(t,""),je=!0}catch(k){Ne(e,e.return,k)}}l&4&&e.stateNode!=null&&(t=e.memoizedProps,td(e,t,s!==null?s.memoizedProps:t)),l&1024&&(dd=!0);break;case 6:if(Ct(t,e,a),Dt(e),l&4){if(e.stateNode===null)throw Error(n(162));t=e.memoizedProps,a=e.stateNode;try{a.nodeValue=t,je=!0}catch(k){Ne(e,e.return,k)}}break;case 3:if(je=!1,co=null,i=ua,ua=Oi(t.containerInfo),Ct(t,e,a),ua=i,Dt(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Fl(t.containerInfo)}catch(k){Ne(e,e.return,k)}dd&&(dd=!1,yf(e)),je=!1;break;case 4:l=ja,ja=pt,s=qc(),i=ua,ua=Oi(e.stateNode.containerInfo),Ct(t,e,a),Dt(e),ua=i,je&&ji&&(Xr=!0),je=s,ja=l;break;case 12:Ct(t,e,a),Dt(e);break;case 31:Ct(t,e,a),Dt(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Kr(e,t)));break;case 13:Ct(t,e,a),Dt(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Pr=Se()),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Kr(e,t)));break;case 22:i=e.memoizedState!==null,r=s!==null&&s.memoizedState!==null;var c=pt,f=Re,w=ja;pt=c||i,ja=w||i,Re=f||r,Ct(t,e,a),Re=f,ja=w,pt=c,Dt(e),l&8192&&(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,!i||s===null||r||pt||Re||(t=r||Re,a=pt,s=Re,pt=i||pt,Re=t,ms(e,2),pt=a,Re=s),!i&&ja||ud(e,i)),l&4&&(t=e.updateQueue,t!==null&&(a=t.retryQueue,a!==null&&(t.retryQueue=null,Kr(e,a))));break;case 19:Ct(t,e,a),Dt(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Kr(e,t)));break;case 30:l&512&&(Re||s===null||vt(s,s.return)),l=qc(),i=ji,r=(a&335544064)===a,c=e.memoizedProps,ji=r&&Ha(c.default,c.update)!=="none",Ct(t,e,a),Dt(e),r&&s!==null&&je&&(e.flags|=4),ji=i,je=l;break;case 21:break;case 7:l&512&&(Re||s===null||vt(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=e);default:Ct(t,e,a),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{for(var a,s=e.return;s!==null;){if(sf(s)){a=s;break}s=s.return}s=null;for(var l=e.return;l!==null;){if(Wn(l)){var i=l.stateNode;s===null?s=[i]:s.push(i)}if(In(l))break;l=l.return}var r=s;if(a==null)throw Error(n(160));switch(a.tag){case 27:var c=a.stateNode,f=ad(e);Fr(e,f,c,r);break;case 5:var w=a.stateNode;a.flags&32&&(il(w,""),a.flags&=-33);var k=ad(e);Fr(e,k,w,r);break;case 3:case 4:var R=a.stateNode.containerInfo,v=ad(e);sd(e,v,R,r);break;default:throw Error(n(161))}}catch(A){Ne(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yf(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Gl=!0,t.reset(),Gl=!1),e=e.sibling}}function Tl(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)wf(t,e),t=t.sibling;else uf(t)}function wf(e,t){var a=e.alternate;if(a===null)ld(e,!1);else switch(e.tag){case 3:if(cd=ka=!1,of(),Tl(t,e),!ka&&!Xr){if(e=Ta,e!==null)for(var s=0;s<e.length;s+=3){a=e[s];var l=e[s+1];n0(a,e[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),cd=!0}Ta=null;break;case 5:Tl(t,e);break;case 4:s=ka,ka=!1,Tl(t,e),ka&&(Xr=!0),ka=s;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?ld(e,!1):Tl(t,e));break;case 30:s=ka,l=of(),ka=!1,Tl(t,e),ka&&(e.flags|=4);var i=e.memoizedProps,r=e.stateNode;t=Ba(i,r),r=Ba(a.memoizedProps,r);var c=Ha(i.default,i.update);c==="none"?t=!1:(i=a.memoizedState,a.memoizedState=null,a=e.child,zt=0,t=nd(e,a,t,r,c,i,!0),zt!==(i===null?0:i.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Rl(e,e.memoizedProps.onUpdate),Ta=l):l!==null&&(l.push.apply(l,Ta),Ta=l),ka=(e.flags&32)!==0?!0:s;break;default:Tl(t,e)}}function Ca(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ff(e,t.alternate,t),t=t.sibling}function ms(e,t){for(e=e.child;e!==null;){var a=e,s=t;switch(a.tag){case 0:case 11:case 14:case 15:fs(4,a,a.return),ms(a,s);break;case 1:vt(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&tf(a,a.return,l),ms(a,s);break;case 27:(s&2)!==0&&y0(a.stateNode,a.type,a.memoizedProps);case 5:vt(a,a.return),a.tag!==5&&a.tag!==27||Ai(a),ms(a,s);break;case 6:Ai(a);break;case 26:vt(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||Re||l.parentNode.removeChild(l),ms(a,s);break;case 22:a.memoizedState===null&&ms(a,s);break;case 30:vt(a,a.return),ms(a,s);break;case 7:vt(a,a.return);default:ms(a,s)}e=e.sibling}}function pa(e,t,a){for(a=(t.subtreeFlags&8772)!==0?a:a&-2,t=t.child;t!==null;){var s=t.alternate,l=e,i=t,r=i.flags,c=(a&1)!==0;switch(i.tag){case 0:case 11:case 15:pa(l,i,a),Ti(4,i);break;case 1:if(pa(l,i,a),s=i,l=s.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(k){Ne(s,s.return,k)}if(s=i,l=s.updateQueue,l!==null){var f=s.stateNode;try{var w=l.shared.hiddenCallbacks;if(w!==null)for(l.shared.hiddenCallbacks=null,l=0;l<w.length;l++)Fu(w[l],f)}catch(k){Ne(s,s.return,k)}}c&&r&64&&ef(i),Sa(i,i.return);break;case 27:(a&2)!==0&&lf(i);case 5:i.tag!==5&&i.tag!==27||af(i),pa(l,i,a),c&&s===null&&r&4&&ed(i),Sa(i,i.return);break;case 6:af(i);break;case 26:f=i.stateNode,i.memoizedState!==null||f===null||pt||Jd(Oi(f.ownerDocument),i.type,f),pa(l,i,a),c&&s===null&&r&4&&ed(i),Sa(i,i.return);break;case 12:pa(l,i,a);break;case 31:pa(l,i,a),c&&r&4&&gf(l,i);break;case 13:pa(l,i,a),c&&r&4&&hf(l,i);break;case 22:i.memoizedState===null&&pa(l,i,a),Sa(i,i.return);break;case 30:pa(l,i,a),Sa(i,i.return);break;case 7:Sa(i,i.return);default:pa(l,i,a)}t=t.sibling}}function fd(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ui(a))}function md(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ui(e))}function sa(e,t,a,s){var l=(a&335544064)===a;if(t.subtreeFlags&(l?10262:10256))for(t=t.child;t!==null;)Ef(e,t,a,s),t=t.sibling;else l&&cf(t)}function Ef(e,t,a,s){var l=(a&335544064)===a;l&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Qr(t);var i=t.flags;switch(t.tag){case 0:case 11:case 15:sa(e,t,a,s),i&2048&&Ti(9,t);break;case 1:sa(e,t,a,s);break;case 3:sa(e,t,a,s),l&&cd&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),i&2048&&(i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&ui(i)));break;case 12:if(i&2048){sa(e,t,a,s),i=t.stateNode;try{var r=t.memoizedProps,c=r.id,f=r.onPostCommit;typeof f=="function"&&f(c,t.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(w){Ne(t,t.return,w)}}else sa(e,t,a,s);break;case 31:sa(e,t,a,s);break;case 13:sa(e,t,a,s);break;case 23:break;case 22:r=t.stateNode,c=t.alternate,t.memoizedState!==null?(l&&c!==null&&c.memoizedState===null&&Qr(c),r._visibility&2?sa(e,t,a,s):ki(e,t)):(l&&c!==null&&c.memoizedState!==null&&Qr(t),r._visibility&2?sa(e,t,a,s):(r._visibility|=2,Al(e,t,a,s,(t.subtreeFlags&10256)!==0||!1))),i&2048&&fd(c,t);break;case 24:sa(e,t,a,s),i&2048&&md(t.alternate,t);break;case 30:l&&(i=t.alternate,i!==null&&(Aa(i.child,!0),Aa(t.child,!0))),sa(e,t,a,s);break;default:sa(e,t,a,s)}}function Al(e,t,a,s,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,c=a,f=s,w=r.flags;switch(r.tag){case 0:case 11:case 15:Al(i,r,c,f,l),Ti(8,r);break;case 23:break;case 22:var k=r.stateNode;r.memoizedState!==null?k._visibility&2?Al(i,r,c,f,l):ki(i,r):(k._visibility|=2,Al(i,r,c,f,l)),l&&w&2048&&fd(r.alternate,r);break;case 24:Al(i,r,c,f,l),l&&w&2048&&md(r.alternate,r);break;default:Al(i,r,c,f,l)}t=t.sibling}}function ki(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,s=t,l=s.flags;switch(s.tag){case 22:ki(a,s),l&2048&&fd(s.alternate,s);break;case 24:ki(a,s),l&2048&&md(s.alternate,s);break;default:ki(a,s)}t=t.sibling}}var Qs=8192;function Xs(e,t,a){if(e.subtreeFlags&Qs)for(e=e.child;e!==null;)Sf(e,t,a),e=e.sibling}function Sf(e,t,a){switch(e.tag){case 26:Xs(e,t,a),e.flags&Qs&&(e.memoizedState!==null?Eg(a,ua,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&M0(a,e)));break;case 5:Xs(e,t,a),e.flags&Qs&&(e=e.stateNode,(t&335544128)===t&&M0(a,e));break;case 3:case 4:var s=ua;ua=Oi(e.stateNode.containerInfo),Xs(e,t,a),ua=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=Qs,Qs=16777216,Xs(e,t,a),Qs=s):Xs(e,t,a));break;case 30:if((e.flags&Qs)!==0&&(s=e.memoizedProps.name,s!=null&&s!=="auto")){var l=e.stateNode;l.paired=null,Ft===null&&(Ft=new Map),Ft.set(s,l)}Xs(e,t,a);break;default:Xs(e,t,a)}}function Tf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];ft=s,jf(s,e)}Tf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Af(e),e=e.sibling}function Af(e){switch(e.tag){case 0:case 11:case 15:Ci(e),e.flags&2048&&fs(9,e,e.return);break;case 3:Ci(e);break;case 12:Ci(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,$r(e)):Ci(e);break;default:Ci(e)}}function $r(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];ft=s,jf(s,e)}Tf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:fs(8,t,t.return),$r(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,$r(t));break;default:$r(t)}e=e.sibling}}function jf(e,t){for(;ft!==null;){var a=ft;switch(a.tag){case 0:case 11:case 15:fs(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:ui(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,ft=s;else e:for(a=e;ft!==null;){s=ft;var l=s.sibling,i=s.return;if(xf(s),s===a){ft=null;break e}if(l!==null){l.return=i,ft=l;break e}ft=i}}}var gb={getCacheForType:function(e){var t=bt(st),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return bt(st).controller.signal}},hb=typeof WeakMap=="function"?WeakMap:Map,De=0,Be=null,me=null,ge=0,_e=0,Yt=null,xs=!1,jl=!1,xd=!1,Za=0,Ze=0,bs=0,Zs=0,Jr=0,Vt=0,kl=0,Di=null,Nt=null,bd=!1,Pr=0,kf=0,Ir=1/0,Wr=null,gs=null,Ve=0,fa=null,Ks=null,Da=0,gd=0,hd=null,Cf=null,Cl=null,Dl=null,Ml=null,Mi=0,eo=null;function Qt(){return(De&2)!==0&&ge!==0?ge&-ge:X.T!==null?Cd():Mc()}function Df(){if(Vt===0)if((ge&536870912)===0||pe){var e=Ki;Ki<<=1,(Ki&3932160)===0&&(Ki=262144),Vt=e}else Vt=536870912;return e=gt.current,e!==null&&(e.flags|=32),Vt}function Rl(e,t){if(t!=null){var a=e.stateNode,s=a.ref;s===null&&(s=a.ref=d0(Ba(e.memoizedProps,a))),Dl===null&&(Dl=[]),Dl.push(t.bind(null,s))}}function Ot(e,t,a){(e===Be&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(zl(e,0),hs(e,ge,Vt,!1)),Pl(e,a),((De&2)===0||e!==Be)&&(e===Be&&((De&2)===0&&(Zs|=a),Ze===4&&hs(e,ge,Vt,!1)),Ma(e))}function Mf(e,t,a){if((De&6)!==0)throw Error(n(327));var s=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Jl(e,t),l=s?wb(e,t):yd(e,t,!0),i=s;do{if(l===0){jl&&!s&&hs(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!vb(a)){l=yd(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var c=e;l=Di;var f=c.current.memoizedState.isDehydrated;if(f&&(zl(c,r).flags|=256),r=yd(c,r,!1),r!==2&&r!==6){if(xd&&!f){c.errorRecoveryDisabledLanes|=i,Zs|=i,l=4;break e}i=Nt,Nt=l,i!==null&&(Nt===null?Nt=i:Nt.push.apply(Nt,i))}l=r}if(i=!1,l!==2)continue}}if(l===1){zl(e,0),hs(e,t,0,!0);break}e:{switch(s=e,i=l,i){case 0:case 1:throw Error(n(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:hs(s,t,Vt,!xs);break e;case 2:Nt=null;break;case 3:case 5:break;default:throw Error(n(329))}if((t&62914560)===t&&(l=Pr+300-Se(),10<l)){if(hs(s,t,Vt,!xs),Ji(s,0,!0)!==0)break e;Da=t,s.timeoutHandle=qd(Rf.bind(null,s,a,Nt,Wr,bd,t,Vt,Zs,kl,xs,i,"Throttled",-0,0),l);break e}Rf(s,a,Nt,Wr,bd,t,Vt,Zs,kl,xs,i,null,-0,0)}}break}while(!0);Ma(e)}function Rf(e,t,a,s,l,i,r,c,f,w,k,R,v,A){e.timeoutHandle=-1;var H=t.subtreeFlags,Q=(i&335544064)===i;if(R=null,(Q||H&8192||(H&16785408)===16785408)&&(R={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ya},Ft=null,Sf(t,i,R),Q&&(H=R,Q=e.containerInfo,Q=(Q.nodeType===9?Q:Q.ownerDocument).__reactViewTransition,Q!=null&&(H.count++,H.waitingForViewTransition=!0,H=Hi.bind(H),Q.finished.then(H,H))),H=(i&62914560)===i?Pr-Se():(i&4194048)===i?kf-Se():0,H=Sg(R,H),H!==null)){Da=i,e.cancelPendingCommit=H(qf.bind(null,e,t,i,a,s,l,r,c,f,w,k,R,null,v,A)),hs(e,i,r,!w);return}qf(e,t,i,a,s,l,r,c,f,w,k,R)}function vb(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var l=a[s],i=l.getSnapshot;l=l.value;try{if(!Ut(i(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hs(e,t,a,s){t=Ac(e,t),t&=~Jr,t&=~Zs,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var l=t;0<l;){var i=31-Ht(l),r=1<<i;s[i]=-1,l&=~r}a!==0&&kc(e,a,t)}function to(){return(De&6)===0?(Ri(0),!1):!0}function vd(){if(me!==null){if(_e===0)var e=me.return;else e=me,Ga=Os=null,kn(e),hl=null,mi=0,e=me;for(;e!==null;)Wp(e.alternate,e),e=e.return;me=null}}function zl(e,t){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,Yb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Da=0,vd(),Be=e,me=a=qa(e.current,null),ge=t,_e=0,Yt=null,xs=!1,jl=Jl(e,t),xd=!1,kl=Vt=Jr=Zs=bs=Ze=0,Nt=Di=null,bd=!1,Za=Ac(e,t),dr(),a}function zf(e,t){oe=null,X.H=Nr,t===gl||t===yr?(t=Hu(),_e=3):t===mn?(t=Hu(),_e=4):_e=t===Fn?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Yt=t,me===null&&(Ze=1,Or(e,Wt(t,e.current)))}function _f(){var e=gt.current;return e===null?!0:(ge&4194048)===ge?St===null:(ge&62914560)===ge||(ge&536870912)!==0?e===St:!1}function Nf(){var e=X.H;return X.H=Nr,e===null?Nr:e}function Of(){var e=X.A;return X.A=gb,e}function ao(){Ze=4,xs||(ge&4194048)!==ge&&gt.current!==null||(jl=!0),(bs&134217727)===0&&(Zs&134217727)===0||Be===null||hs(Be,ge,Vt,!1)}function yd(e,t,a){var s=De;De|=2;var l=Nf(),i=Of();(Be!==e||ge!==t)&&(Wr=null,zl(e,t)),t=!1;var r=Ze;e:do try{if(_e!==0&&me!==null){var c=me,f=Yt;switch(_e){case 8:vd(),r=6;break e;case 3:case 2:case 9:case 6:gt.current===null&&(t=!0);var w=_e;if(_e=0,Yt=null,_l(e,c,f,w),a&&jl){r=0;break e}break;default:w=_e,_e=0,Yt=null,_l(e,c,f,w)}}yb(),r=Ze;break}catch(k){zf(e,k)}while(!0);return t&&e.shellSuspendCounter++,Ga=Os=null,De=s,X.H=l,X.A=i,me===null&&(Be=null,ge=0,dr()),r}function yb(){for(;me!==null;)Lf(me)}function wb(e,t){var a=De;De|=2;var s=Nf(),l=Of();Be!==e||ge!==t?(Wr=null,Ir=Se()+500,zl(e,t)):jl=Jl(e,t);e:do try{if(_e!==0&&me!==null){t=me;var i=Yt;t:switch(_e){case 1:_e=0,Yt=null,_l(e,t,i,1);break;case 2:case 9:if(Lu(i)){_e=0,Yt=null,Bf(t);break}t=function(){_e!==2&&_e!==9||Be!==e||(_e=7),Ma(e)},i.then(t,t);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:Lu(i)?(_e=0,Yt=null,Bf(t)):(_e=0,Yt=null,_l(e,t,i,7));break;case 5:var r=null;switch(me.tag){case 26:r=me.memoizedState;case 5:case 27:var c=me;if(r?C0(r):c.stateNode.complete){_e=0,Yt=null;var f=c.sibling;if(f!==null)me=f;else{var w=c.return;w!==null?(me=w,so(w)):me=null}break t}}_e=0,Yt=null,_l(e,t,i,5);break;case 6:_e=0,Yt=null,_l(e,t,i,6);break;case 8:vd(),Ze=6;break e;default:throw Error(n(462))}}Eb();break}catch(k){zf(e,k)}while(!0);return Ga=Os=null,X.H=s,X.A=l,De=a,me!==null?0:(Be=null,ge=0,dr(),Ze)}function Eb(){for(;me!==null&&!V();)Lf(me)}function Lf(e){var t=Pp(e.alternate,e,Za);e.memoizedProps=e.pendingProps,t===null?so(e):me=t}function Bf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Vp(a,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=Vp(a,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:kn(t);var s=t;s===ut&&(pe?(xr(s),s.tag===5&&s.stateNode!=null&&(He=s.stateNode)):(xr(s),pe=!0));default:Wp(a,t),t=me=Au(t,Za),t=Pp(a,t,Za)}e.memoizedProps=e.pendingProps,t===null?so(e):me=t}function _l(e,t,a,s){Ga=Os=null,kn(t),hl=null,mi=0;var l=t.return;try{if(db(e,l,t,a,ge)){Ze=1,Or(e,Wt(a,e.current)),me=null;return}}catch(i){if(l!==null)throw me=l,i;Ze=1,Or(e,Wt(a,e.current)),me=null;return}t.flags&32768?(pe||s===1?e=!0:jl||(ge&536870912)!==0?e=!1:(xs=e=!0,(s===2||s===9||s===3||s===6)&&(s=gt.current,s!==null&&s.tag===13&&(s.flags|=16384))),Hf(t,e)):so(t)}function so(e){var t=e;do{if((t.flags&32768)!==0){Hf(t,xs);return}e=t.return;var a=fb(t.alternate,t,Za);if(a!==null){me=a;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);Ze===0&&(Ze=5)}function Hf(e,t){do{var a=mb(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Ze=6,me=null}function qf(e,t,a,s,l,i,r,c,f,w,k,R){e.cancelPendingCommit=null;do lo();while(Ve!==0);if((De&6)!==0)throw Error(n(327));if(t!==null){if(t===e.current)throw Error(n(177));e===Be&&(me=Be=null,ge=0),Ks=t,fa=e,Da=a,hd=l,Cf=s,Sb(e,t,a,r,c,f,R)}}function Sb(e,t,a,s,l,i,r){var c=t.lanes|t.childLanes;if(gd=c,c|=en,$m(e,a,c,s,l,i),Dl=null,(a&335544064)===a?(Ml=Px(e),s=10262):(Ml=null,s=10256),(t.subtreeFlags&s)!==0||(t.flags&s)!==0?(e.callbackNode=null,e.callbackPriority=0,Db(Jt,function(){return Td(),null})):(e.callbackNode=null,e.callbackPriority=0),Yr=!1,s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=X.T,X.T=null,l=ae.p,ae.p=2,i=De,De|=4;try{xb(e,t,a)}finally{De=i,ae.p=l,X.T=s}}Ve=1,Yr?Cl=$b(r,e.containerInfo,Ml,wd,Ed,Ab,Sd,Td,Tb):(wd(),Ed(),Sd())}function Tb(e){if(Ve!==0){var t=fa.onRecoverableError;t(e,{componentStack:null})}}function Ab(){Ve===3&&(Ve=0,wf(Ks,fa),Ve=4)}function wd(){if(Ve===1){Ve=0;var e=fa,t=Ks,a=Da,s=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||s){s=X.T,X.T=null;var l=ae.p;ae.p=2;var i=De;De|=4;try{ji=Xr=!1,vf(t,e,a),a=Ld;var r=xu(e.containerInfo),c=a.focusedElem,f=a.selectionRange;if(r!==c&&c&&c.ownerDocument&&mu(c.ownerDocument.documentElement,c)){if(f!==null&&$o(c)){var w=f.start,k=f.end;if(k===void 0&&(k=w),"selectionStart"in c)c.selectionStart=w,c.selectionEnd=Math.min(k,c.value.length);else{var R=c.ownerDocument||document,v=R&&R.defaultView||window;if(v.getSelection){var A=v.getSelection(),H=c.textContent.length,Q=Math.min(f.start,H),ne=f.end===void 0?Q:Math.min(f.end,H);!A.extend&&Q>ne&&(r=ne,ne=Q,Q=r);var y=fu(c,Q),g=fu(c,ne);if(y&&g&&(A.rangeCount!==1||A.anchorNode!==y.node||A.anchorOffset!==y.offset||A.focusNode!==g.node||A.focusOffset!==g.offset)){var S=R.createRange();S.setStart(y.node,y.offset),A.removeAllRanges(),Q>ne?(A.addRange(S),A.extend(g.node,g.offset)):(S.setEnd(g.node,g.offset),A.addRange(S))}}}}for(R=[],A=c;A=A.parentNode;)A.nodeType===1&&R.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<R.length;c++){var M=R[c];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Gl=!!Od,Ld=Od=null}finally{De=i,ae.p=l,X.T=s}}e.current=t,Ve=2}}function Ed(){if(Ve===2){Ve=0;var e=fa,t=Ks,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=X.T,X.T=null;var s=ae.p;ae.p=2;var l=De;De|=4;try{ff(e,t.alternate,t)}finally{De=l,ae.p=s,X.T=a}}Ve=3}}function Sd(){if(Ve===4||Ve===3){Ve=0;var e=Cl;Cl=null,Ce();var t=fa,a=Ks,s=Da,l=Cf,i=(s&335544064)===s?10262:10256;if((a.subtreeFlags&i)!==0||(a.flags&i)!==0?Ve=5:(Ve=0,Ks=fa=null,Uf(t,t.pendingLanes)),i=t.pendingLanes,i===0&&(gs=null),Ro(s),a=a.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot($l,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=X.T,i=ae.p,ae.p=2,X.T=null;try{for(var r=t.onRecoverableError,c=0;c<l.length;c++){var f=l[c];r(f.value,{componentStack:f.stack})}}finally{X.T=a,ae.p=i}}if(l=Dl,r=Ml,Ml=null,l!==null&&(Dl=null,r===null&&(r=[]),e!==null))for(f=0;f<l.length;f++)a=(0,l[f])(r),a!==void 0&&e.finished.finally(a);(Da&3)!==0&&lo(),Ma(t),i=t.pendingLanes,(s&261930)!==0&&(i&42)!==0?t===eo?Mi++:(Mi=0,eo=t):(Mi=0,eo=null),Ri(0)}}function Uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ui(t)))}function lo(){return Cl!==null&&(Cl.skipTransition(),Cl=null),wd(),Ed(),Sd(),Td()}function Td(){if(Ve!==5)return!1;var e=fa,t=gd;gd=0;var a=Ro(Da),s=X.T,l=ae.p;try{ae.p=32>a?32:a,X.T=null,a=hd,hd=null;var i=fa,r=Da;if(Ve=0,Ks=fa=null,Da=0,(De&6)!==0)throw Error(n(331));var c=De;if(De|=4,Af(i.current),Ef(i,i.current,r,a),De=c,Ri(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot($l,i)}catch{}return!0}finally{ae.p=l,X.T=s,Uf(e,t)}}function Gf(e,t,a){t=Wt(a,t),t=Gn(e.stateNode,t,2),e=ds(e,t,2),e!==null&&(Pl(e,2),Ma(e))}function Ne(e,t,a){if(e.tag===3)Gf(e,e,a);else for(;t!==null;){if(t.tag===3){Gf(t,e,a);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(gs===null||!gs.has(s))){e=Wt(a,e),a=Lp(2),s=ds(t,a,2),s!==null&&(Bp(a,s,t,e),Pl(s,2),Ma(s));break}}t=t.return}}function Ad(e,t,a){var s=e.pingCache;if(s===null){s=e.pingCache=new hb;var l=new Set;s.set(t,l)}else l=s.get(t),l===void 0&&(l=new Set,s.set(t,l));l.has(a)||(xd=!0,l.add(a),e=jb.bind(null,e,t,a),t.then(e,e))}function jb(e,t,a){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Be===e&&(ge&a)===a&&((Ze===4||Ze===3&&(ge&62914560)===ge&&300>Se()-Pr)&&(De&2)===0?zl(e,0):Jr|=a,kl===ge&&(kl=0)),Ma(e)}function Ff(e,t){t===0&&(t=jc()),e=zs(e,t),e!==null&&(Pl(e,t),Ma(e))}function kb(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Ff(e,a)}function Cb(e,t){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(n(314))}s!==null&&s.delete(t),Ff(e,a)}function Db(e,t){return Lt(e,t)}var Nl=null,Ol=null,jd=!1,io=!1,kd=!1,vs=0;function Ma(e){e!==Ol&&e.next===null&&(Ol===null?Nl=Ol=e:Ol=Ol.next=e),io=!0,jd||(jd=!0,Rb())}function Ri(e,t){if(!kd&&io){kd=!0;do for(var a=!1,s=Nl;s!==null;){if(e!==0){var l=s.pendingLanes;if(l===0)var i=0;else{var r=s.suspendedLanes,c=s.pingedLanes;i=(1<<31-Ht(42|e)+1)-1,i&=l&~(r&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Xf(s,i))}else i=ge,i=Ji(s,s===Be?i:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(i&3)===0||Jl(s,i)||(a=!0,Xf(s,i));s=s.next}while(a);kd=!1}}function Mb(){Yf()}function Yf(){io=jd=!1;var e=0;vs!==0&&Fb()&&(e=vs);for(var t=Se(),a=null,s=Nl;s!==null;){var l=s.next,i=Vf(s,t);i===0?(s.next=null,a===null?Nl=l:a.next=l,l===null&&(Ol=a)):(a=s,(e!==0||(i&3)!==0)&&(io=!0)),s=l}Ve!==0&&Ve!==5||Ri(e),vs!==0&&(vs=0)}function Vf(e,t){for(var a=e.suspendedLanes,s=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-Ht(i),c=1<<r,f=l[r];f===-1?((c&a)===0||(c&s)!==0)&&(l[r]=Km(c,t)):f<=t&&(e.expiredLanes|=c),i&=~c}if(t=Be,a=ge,a=Ji(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Ws(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Jl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(s!==null&&Ws(s),Ro(a)){case 2:case 8:a=va;break;case 32:a=Jt;break;case 268435456:a=Tc;break;default:a=Jt}return s=Qf.bind(null,e),a=Lt(a,s),e.callbackPriority=t,e.callbackNode=a,t}return s!==null&&s!==null&&Ws(s),e.callbackPriority=2,e.callbackNode=null,2}function Qf(e,t){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(lo()&&e.callbackNode!==a)return null;var s=ge;return s=Ji(e,e===Be?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Mf(e,s,t),Vf(e,Se()),e.callbackNode!=null&&e.callbackNode===a?Qf.bind(null,e):null)}function Xf(e,t){if(lo())return null;Mf(e,t,!0)}function Rb(){Vb(function(){(De&6)!==0?Lt(At,Mb):Yf()})}function Cd(){if(vs===0){var e=Hs;e===0&&(e=Zi,Zi<<=1,(Zi&261888)===0&&(Zi=256)),vs=e}return vs}function Zf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tr(e)}function zb(e,t,a,s,l){if(t==="submit"&&a&&a.stateNode===l){var i=Zf((l[Mt]||null).action),r=s.submitter;r&&(t=(t=r[Mt]||null)?Zf(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var c=new ir("action","action",null,s,l);e.push({event:c,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(vs!==0){var f=new FormData(l,r);Ln(a,{pending:!0,data:f,method:l.method,action:i},null,f)}}else typeof i=="function"&&(c.preventDefault(),f=new FormData(l,r),Ln(a,{pending:!0,data:f,method:l.method,action:i},i,f))},currentTarget:l}]})}}for(var Dd=0;Dd<Wo.length;Dd++){var Md=Wo[Dd],_b=Md.toLowerCase(),Nb=Md[0].toUpperCase()+Md.slice(1);da(_b,"on"+Nb)}da(hu,"onAnimationEnd"),da(vu,"onAnimationIteration"),da(yu,"onAnimationStart"),da("dblclick","onDoubleClick"),da("focusin","onFocus"),da("focusout","onBlur"),da(Yx,"onTransitionRun"),da(Vx,"onTransitionStart"),da(Qx,"onTransitionCancel"),da(wu,"onTransitionEnd"),sl("onMouseEnter",["mouseout","mouseover"]),sl("onMouseLeave",["mouseout","mouseover"]),sl("onPointerEnter",["pointerout","pointerover"]),sl("onPointerLeave",["pointerout","pointerover"]),Ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ds("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ob=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zi));function Kf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],l=s.event;s=s.listeners;e:{var i=void 0;if(t)for(var r=s.length-1;0<=r;r--){var c=s[r],f=c.instance,w=c.currentTarget;if(c=c.listener,f!==i&&l.isPropagationStopped())break e;i=c,l.currentTarget=w;try{i(l)}catch(k){nr(k)}l.currentTarget=null,i=f}else for(r=0;r<s.length;r++){if(c=s[r],f=c.instance,w=c.currentTarget,c=c.listener,f!==i&&l.isPropagationStopped())break e;i=c,l.currentTarget=w;try{i(l)}catch(k){nr(k)}l.currentTarget=null,i=f}}}}function xe(e,t){var a=t[zc];a===void 0&&(a=t[zc]=new Set);var s=e+"__bubble";a.has(s)||($f(t,e,2,!1),a.add(s))}function Rd(e,t,a){var s=0;t&&(s|=4),$f(a,e,s,t)}var ro="_reactListening"+Math.random().toString(36).slice(2);function zd(e){if(!e[ro]){e[ro]=!0,Oc.forEach(function(a){a!=="selectionchange"&&(Ob.has(a)||Rd(a,!1,e),Rd(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ro]||(t[ro]=!0,Rd("selectionchange",!1,t))}}function $f(e,t,a,s){switch(H0(t)){case 2:var l=kg;break;case 8:l=Cg;break;default:l=Id}a=l.bind(null,t,a,e),l=void 0,!qo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),s?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function _d(e,t,a,s,l){var i=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var r=s.tag;if(r===3||r===4){var c=s.stateNode.containerInfo;if(c===l)break;if(r===4)for(r=s.return;r!==null;){var f=r.tag;if((f===3||f===4)&&r.stateNode.containerInfo===l)return;r=r.return}for(;c!==null;){if(r=Cs(c),r===null)return;if(f=r.tag,f===5||f===6||f===26||f===27){s=i=r;continue e}c=c.parentNode}}s=s.return}Kc(function(){var w=i,k=Bo(a),R=[];e:{var v=Eu.get(e);if(v!==void 0){var A=ir,H=e;switch(e){case"keypress":if(sr(a)===0)break e;case"keydown":case"keyup":A=vx;break;case"focusin":H="focus",A=Yo;break;case"focusout":H="blur",A=Yo;break;case"beforeblur":case"afterblur":A=Yo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Pc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Tx;break;case hu:case vu:case yu:A=cx;break;case wu:A=jx;break;case"scroll":case"scrollend":A=ix;break;case"wheel":A=Cx;break;case"copy":case"cut":case"paste":A=px;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Wc;break;case"submit":A=Ex;break;case"toggle":case"beforetoggle":A=Mx}var Q=(t&4)!==0,ne=!Q&&(e==="scroll"||e==="scrollend"),y=Q?v!==null?v+"Capture":null:v;Q=[];for(var g=w,S;g!==null;){var M=g;if(S=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||S===null||y===null||(M=ei(g,y),M!=null&&Q.push(_i(g,M,S))),ne)break;g=g.return}0<Q.length&&(v=new A(v,H,null,a,k),R.push({event:v,listeners:Q}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",A&&a!==Lo&&(H=a.relatedTarget||a.fromElement)&&(Cs(H)||H[el]))break e;(v||A)&&(H=k.window===k?k:(A=k.ownerDocument)?A.defaultView||A.parentWindow:window,v?(A=a.relatedTarget||a.toElement,v=w,A=A?Cs(A):null,A!==null&&(ne=m(A),Q=A.tag,A!==ne||Q!==5&&Q!==27&&Q!==6)&&(A=null)):(v=null,A=w),v!==A&&(Q=Pc,M="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(Q=Wc,M="onPointerLeave",y="onPointerEnter",g="pointer"),ne=v==null?H:Wl(v),S=A==null?H:Wl(A),H=new Q(M,g+"leave",v,a,k),H.target=ne,H.relatedTarget=S,M=null,Cs(k)===w&&(Q=new Q(y,g+"enter",A,a,k),Q.target=S,Q.relatedTarget=ne,M=Q),ne=M,Q=v&&A?Te(v,A,Lb):null,v!==null&&Jf(R,H,v,Q,!1),A!==null&&ne!==null&&Jf(R,ne,A,Q,!0)))}e:{if(v=w?Wl(w):window,A=v.nodeName&&v.nodeName.toLowerCase(),A==="select"||A==="input"&&v.type==="file")var F=ou;else if(iu(v))if(nu)F=Ux;else{F=Hx;var he=Bx}else A=v.nodeName,!A||A.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?w&&Oo(w.elementType)&&(F=ou):F=qx;if(F&&(F=F(e,w))){ru(R,F,a,k);break e}he&&he(e,v,w)}switch(he=w?Wl(w):window,e){case"focusin":(iu(he)||he.contentEditable==="true")&&(dl=he,Jo=w,ni=null);break;case"focusout":ni=Jo=dl=null;break;case"mousedown":Po=!0;break;case"contextmenu":case"mouseup":case"dragend":Po=!1,bu(R,a,k);break;case"selectionchange":if(Fx)break;case"keydown":case"keyup":bu(R,a,k)}var J;if(Qo)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else nl?su(e,a)&&(te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(eu&&a.locale!=="ko"&&(nl||te!=="onCompositionStart"?te==="onCompositionEnd"&&nl&&(J=$c()):(es=k,Uo="value"in es?es.value:es.textContent,nl=!0)),he=oo(w,te),0<he.length&&(te=new Ic(te,e,null,a,k),R.push({event:te,listeners:he}),J?te.data=J:(J=lu(a),J!==null&&(te.data=J)))),(J=zx?_x(e,a):Nx(e,a))&&(te=oo(w,"onBeforeInput"),0<te.length&&(he=new Ic("onBeforeInput","beforeinput",null,a,k),R.push({event:he,listeners:te}),he.data=J)),zb(R,e,w,a,k)}Kf(R,t)})}function _i(e,t,a){return{instance:e,listener:t,currentTarget:a}}function oo(e,t){for(var a=t+"Capture",s=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=ei(e,a),l!=null&&s.unshift(_i(e,l,i)),l=ei(e,t),l!=null&&s.push(_i(e,l,i))),e.tag===3)return s;e=e.return}return[]}function Lb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jf(e,t,a,s,l){for(var i=t._reactName,r=[];a!==null&&a!==s;){var c=a,f=c.alternate,w=c.stateNode;if(c=c.tag,f!==null&&f===s)break;c!==5&&c!==26&&c!==27||w===null||(f=w,l?(w=ei(a,i),w!=null&&r.unshift(_i(a,w,f))):l||(w=ei(a,i),w!=null&&r.push(_i(a,w,f)))),a=a.return}r.length!==0&&e.push({event:t,listeners:r})}var Bb=/\r\n?/g,Hb=/\u0000|\uFFFD/g;function Pf(e){return(typeof e=="string"?e:""+e).replace(Bb,`
`).replace(Hb,"")}function If(e,t){return t=Pf(t),Pf(e)===t}function Oe(e,t,a,s,l,i){switch(a){case"children":if(typeof s=="string")t==="body"||t==="textarea"&&s===""||il(e,s);else if(typeof s=="number"||typeof s=="bigint")t!=="body"&&il(e,""+s);else return;break;case"className":er(e,"class",s);break;case"tabIndex":er(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":er(e,a,s);break;case"style":Xc(e,s,i);return;case"data":if(t!=="object"){er(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=tr(s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Oe(e,t,"name",l.name,l,null),Oe(e,t,"formEncType",l.formEncType,l,null),Oe(e,t,"formMethod",l.formMethod,l,null),Oe(e,t,"formTarget",l.formTarget,l,null)):(Oe(e,t,"encType",l.encType,l,null),Oe(e,t,"method",l.method,l,null),Oe(e,t,"target",l.target,l,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=tr(s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=ya);return;case"onScroll":s!=null&&xe("scroll",e);return;case"onScrollEnd":s!=null&&xe("scrollend",e);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(n(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(n(60));i?.__html!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=tr(s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Wi(e,"popover",s);break;case"xlinkActuate":Oa(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Oa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Oa(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Oa(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Oa(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Oa(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Oa(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Oa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Oa(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Wi(e,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=sx.get(a)||a,Wi(e,a,s);else return}je=!0}function Nd(e,t,a,s,l,i){switch(a){case"style":Xc(e,s,i);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(n(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(n(60));i?.__html!==a&&(e.innerHTML=a)}}break;case"children":if(typeof s=="string")il(e,s);else if(typeof s=="number"||typeof s=="bigint")il(e,""+s);else return;break;case"onScroll":s!=null&&xe("scroll",e);return;case"onScrollEnd":s!=null&&xe("scrollend",e);return;case"onClick":s!=null&&(e.onclick=ya);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Lc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),i=a.slice(2,l?a.length-7:void 0),t=e[Mt]||null,t=t!=null?t[a]:null,typeof t=="function"&&e.removeEventListener(i,t,l),typeof s=="function")){typeof t!="function"&&t!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,s,l);break e}je=!0,a in e?e[a]=s:s===!0?e.setAttribute(a,""):Wi(e,a,s)}return}je=!0}function yt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var s=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var r=a[i];if(r!=null)switch(i){case"src":s=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(n(137,t));default:Oe(e,t,i,r,a,null)}}l&&Oe(e,t,"srcSet",a.srcSet,a,null),s&&Oe(e,t,"src",a.src,a,null);return;case"input":xe("invalid",e);var c=i=r=l=null,f=null,w=null;for(s in a)if(a.hasOwnProperty(s)){var k=a[s];if(k!=null)switch(s){case"name":l=k;break;case"type":r=k;break;case"checked":f=k;break;case"defaultChecked":w=k;break;case"value":i=k;break;case"defaultValue":c=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(n(137,t));break;default:Oe(e,t,s,k,a,null)}}Fc(e,i,c,f,w,r,l,!1);return;case"select":xe("invalid",e),s=r=i=null;for(l in a)if(a.hasOwnProperty(l)&&(c=a[l],c!=null))switch(l){case"value":i=c;break;case"defaultValue":r=c;break;case"multiple":s=c;default:Oe(e,t,l,c,a,null)}t=i,a=r,e.multiple=!!s,t!=null?ll(e,!!s,t,!1):a!=null&&ll(e,!!s,a,!0);return;case"textarea":xe("invalid",e),i=l=s=null;for(r in a)if(a.hasOwnProperty(r)&&(c=a[r],c!=null))switch(r){case"value":s=c;break;case"defaultValue":l=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(n(91));break;default:Oe(e,t,r,c,a,null)}Vc(e,s,l,i);return;case"option":for(f in a)a.hasOwnProperty(f)&&(s=a[f],s!=null)&&(f==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":Oe(e,t,f,s,a,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(s=0;s<zi.length;s++)xe(zi[s],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(s=a[w],s!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(n(137,t));default:Oe(e,t,w,s,a,null)}return;default:if(Oo(t)){for(k in a)a.hasOwnProperty(k)&&(s=a[k],s!==void 0&&Nd(e,t,k,s,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(s=a[c],s!=null&&Oe(e,t,c,s,a,null))}var qb={};function Ub(e,t,a,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,r=null,c=null,f=null,w=null,k=null;for(A in a){var R=a[A];if(a.hasOwnProperty(A)&&R!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":f=R;default:s.hasOwnProperty(A)||Oe(e,t,A,null,s,R)}}for(var v in s){var A=s[v];if(R=a[v],s.hasOwnProperty(v)&&(A!=null||R!=null))switch(v){case"type":A!==R&&(je=!0),i=A;break;case"name":A!==R&&(je=!0),l=A;break;case"checked":A!==R&&(je=!0),w=A;break;case"defaultChecked":A!==R&&(je=!0),k=A;break;case"value":A!==R&&(je=!0),r=A;break;case"defaultValue":A!==R&&(je=!0),c=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(n(137,t));break;default:A!==R&&Oe(e,t,v,A,s,R)}}_o(e,r,c,f,w,k,i,l);return;case"select":A=r=c=v=null;for(i in a)if(f=a[i],a.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":A=f;default:s.hasOwnProperty(i)||Oe(e,t,i,null,s,f)}for(l in s)if(i=s[l],f=a[l],s.hasOwnProperty(l)&&(i!=null||f!=null))switch(l){case"value":i!==f&&(je=!0),v=i;break;case"defaultValue":i!==f&&(je=!0),c=i;break;case"multiple":i!==f&&(je=!0),r=i;default:i!==f&&Oe(e,t,l,i,s,f)}t=c,a=r,s=A,v!=null?ll(e,!!a,v,!1):!!s!=!!a&&(t!=null?ll(e,!!a,t,!0):ll(e,!!a,a?[]:"",!1));return;case"textarea":A=v=null;for(c in a)if(l=a[c],a.hasOwnProperty(c)&&l!=null&&!s.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Oe(e,t,c,null,s,l)}for(r in s)if(l=s[r],i=a[r],s.hasOwnProperty(r)&&(l!=null||i!=null))switch(r){case"value":l!==i&&(je=!0),v=l;break;case"defaultValue":l!==i&&(je=!0),A=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(n(91));break;default:l!==i&&Oe(e,t,r,l,s,i)}Yc(e,v,A);return;case"option":for(var H in a)v=a[H],a.hasOwnProperty(H)&&v!=null&&!s.hasOwnProperty(H)&&(H==="selected"?e.selected=!1:Oe(e,t,H,null,s,v));for(f in s)v=s[f],A=a[f],s.hasOwnProperty(f)&&v!==A&&(v!=null||A!=null)&&(f==="selected"?(v!==A&&(je=!0),e.selected=v&&typeof v!="function"&&typeof v!="symbol"):Oe(e,t,f,v,s,A));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in a)v=a[Q],a.hasOwnProperty(Q)&&v!=null&&!s.hasOwnProperty(Q)&&Oe(e,t,Q,null,s,v);for(w in s)if(v=s[w],A=a[w],s.hasOwnProperty(w)&&v!==A&&(v!=null||A!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(n(137,t));break;default:Oe(e,t,w,v,s,A)}return;default:if(Oo(t)){for(var ne in a)v=a[ne],a.hasOwnProperty(ne)&&v!==void 0&&!s.hasOwnProperty(ne)&&Nd(e,t,ne,void 0,s,v);for(k in s)v=s[k],A=a[k],!s.hasOwnProperty(k)||v===A||v===void 0&&A===void 0||Nd(e,t,k,v,s,A);return}}for(var y in a)v=a[y],a.hasOwnProperty(y)&&v!=null&&!s.hasOwnProperty(y)&&Oe(e,t,y,null,s,v);for(R in s)v=s[R],A=a[R],!s.hasOwnProperty(R)||v===A||v==null&&A==null||Oe(e,t,R,v,s,A)}function Wf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var l=a[s],i=l.transferSize,r=l.initiatorType,c=l.duration;if(i&&c&&Wf(r)){for(r=0,c=l.responseEnd,s+=1;s<a.length;s++){var f=a[s],w=f.startTime;if(w>c)break;var k=f.transferSize,R=f.initiatorType;k&&Wf(R)&&(f=f.responseEnd,r+=k*(f<c?1:(c-w)/(f-w)))}if(--s,t+=8*(i+r)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Od=null,Ld=null;function Ni(e){return e.nodeType===9?e:e.ownerDocument}function e0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function t0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function a0(e,t,a,s){return a=Ni(a).createElement(e),a[xt]=s,a[Mt]=t,yt(a,e,t),ct(a),a}function Bd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hd=null;function Fb(){var e=window.event;return e&&e.type==="popstate"?e===Hd?!1:(Hd=e,!0):(Hd=null,!1)}var qd=typeof setTimeout=="function"?setTimeout:void 0,Yb=typeof clearTimeout=="function"?clearTimeout:void 0,s0=typeof Promise=="function"?Promise:void 0,l0=typeof requestAnimationFrame=="function"?requestAnimationFrame:qd,Vb=typeof queueMicrotask=="function"?queueMicrotask:typeof s0<"u"?function(e){return s0.resolve(null).then(e).catch(Qb)}:qd;function Qb(e){setTimeout(function(){throw e})}function ys(e){return e==="head"}function i0(e,t){var a=t,s=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(l),Fl(t);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Zd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Zd(a);for(var i=a.firstChild;i;){var r=i.nextSibling,c=i.nodeName;i[Il]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=r}}else a==="body"&&Zd(e.ownerDocument.body);a=l}while(a);Fl(t)}function r0(e,t){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function o0(e,t,a){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(t=e.getClientRects(),t.length===1)var s=1;else for(var l=s=0;l<t.length;l++){var i=t[l];0<i.width&&0<i.height&&s++}s===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function n0(e,t){e=e.style,t=t.style;var a=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(a=t.display,e.display=a==null||typeof a=="boolean"?"":a,a=t.margin,a!=null?e.margin=a:(a=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function Xb(e,t,a){return a=a.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Ud(e){var t=e.getBoundingClientRect(),a=getComputedStyle(e);return Xb(t,a,e)}function Zb(e){return e.documentElement.clientHeight}function Kb(e){this.addEventListener("load",e),this.addEventListener("error",e)}function $b(e,t,a,s,l,i,r,c,f){var w=t.nodeType===9?t:t.ownerDocument;try{var k=w.startViewTransition({update:function(){var v=w.defaultView,A=v.navigation&&v.navigation.transition,H=w.fonts.status;s();var Q=[];if(H==="loaded"&&(Zb(w),w.fonts.status==="loading"&&Q.push(w.fonts.ready)),H=Q.length,e!==null)for(var ne=e.suspenseyImages,y=0,g=0;g<ne.length;g++){var S=ne[g];if(!S.complete){var M=S.getBoundingClientRect();if(0<M.bottom&&0<M.right&&M.top<v.innerHeight&&M.left<v.innerWidth){if(y+=D0(S),y>uo){Q.length=H;break}S=new Promise(Kb.bind(S)),Q.push(S)}}}if(0<Q.length)return v=Promise.race([Promise.all(Q),new Promise(function(F){return setTimeout(F,500)})]).then(l,l),(A?Promise.allSettled([A.finished,v]):v).then(i,i);if(l(),A)return A.finished.then(i,i);i()},types:a});w.__reactViewTransition=k;var R=[];return k.ready.then(function(){for(var v=w.documentElement.getAnimations({subtree:!0}),A=0;A<v.length;A++){var H=v[A],Q=H.effect,ne=Q.pseudoElement;if(ne!=null&&ne.startsWith("::view-transition")){R.push(H),H=Q.getKeyframes();for(var y=ne=void 0,g=!0,S=0;S<H.length;S++){var M=H[S],F=M.width;if(ne===void 0)ne=F;else if(ne!==F){g=!1;break}if(F=M.height,y===void 0)y=F;else if(y!==F){g=!1;break}delete M.width,delete M.height,M.transform==="none"&&delete M.transform}g&&ne!==void 0&&y!==void 0&&(Q.setKeyframes(H),g=getComputedStyle(Q.target,Q.pseudoElement),g.width!==ne||g.height!==y)&&(g=H[0],g.width=ne,g.height=y,g=H[H.length-1],g.width=ne,g.height=y,Q.setKeyframes(H))}}r()},function(v){w.__reactViewTransition===k&&(w.__reactViewTransition=null);try{typeof v=="object"&&v!==null&&v.name==="InvalidStateError"&&(v.message==="View transition was skipped because document visibility state is hidden."||v.message==="Skipping view transition because document visibility state has become hidden."||v.message==="Skipping view transition because viewport size changed."||v.message==="Transition was aborted because of invalid state")&&(v=null),v!==null&&f(v)}finally{s(),l(),r()}}),k.finished.finally(function(){for(var v=0;v<R.length;v++)R[v].cancel();w.__reactViewTransition===k&&(w.__reactViewTransition=null),c()}),k}catch{return s(),l(),r(),null}}function $s(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}$s.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:se({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},$s.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,a=e.getAnimations({subtree:!0}),s=[],l=0;l<a.length;l++){var i=a[l].effect;i!==null&&i.target===e&&i.pseudoElement===t&&s.push(a[l])}return s},$s.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function d0(e){return{name:e,group:new $s("group",e),imagePair:new $s("image-pair",e),old:new $s("old",e),new:new $s("new",e)}}function Xt(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Xt.prototype.addEventListener=function(e,t,a){var s=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(u0(i,e,t,a)===-1){var r=this,c=t;a!=null&&typeof a!="boolean"&&a.once===!0&&(c=function(f){r.removeEventListener(e,t,a),typeof t=="function"?t.call(this,f):t.handleEvent(f)}),s!==null&&(l=r.removeEventListener.bind(r,e,t,a),s.addEventListener("abort",l,{once:!0}),l=s.removeEventListener.bind(s,"abort",l)),s=Ll(a),i.push({type:e,listener:t,optionsOrUseCapture:a,attachedListener:c,cleanup:l}),x(this._fragmentFiber.child,!1,Jb,e,c,s)}this._eventListeners=i}};function Jb(e,t,a,s){return _(e).addEventListener(t,a,s),!1}Xt.prototype.removeEventListener=function(e,t,a){var s=this._eventListeners;if(s!==null&&(t=u0(s,e,t,a),t!==-1)){var l=s[t];a=l.attachedListener;var i=l.cleanup;l=Ll(l.optionsOrUseCapture),x(this._fragmentFiber.child,!1,Pb,e,a,l),s.splice(t,1),i!==null&&i()}};function Pb(e,t,a,s){return _(e).removeEventListener(t,a,s),!1}function Ll(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function c0(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function u0(e,t,a,s){if(e.length===0)return-1;s=c0(s);for(var l=0;l<e.length;l++){var i=e[l];if(i.type===t&&i.listener===a&&c0(i.optionsOrUseCapture)===s)return l}return-1}Xt.prototype.dispatchEvent=function(e){var t=z(this._fragmentFiber);if(t===null)return!0;t=_(t);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var s=t.nodeType===9?t.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var i=a[l];s.addEventListener(i.type,i.attachedListener,Ll(i.optionsOrUseCapture))}if(t.appendChild(s),e=s.dispatchEvent(e),a)for(l=0;l<a.length;l++)i=a[l],s.removeEventListener(i.type,i.attachedListener,Ll(i.optionsOrUseCapture));return t.removeChild(s),e}return t.dispatchEvent(e)},Xt.prototype.focus=function(e){x(this._fragmentFiber.child,!0,p0,e,void 0,void 0)};function p0(e,t){return e.tag===6?!1:(e=_(e),dg(e,t))}Xt.prototype.focusLast=function(e){var t=[];x(this._fragmentFiber.child,!0,Gd,t,void 0,void 0);for(var a=t.length-1;0<=a&&!p0(t[a],e);a--);};function Gd(e,t){return t.push(e),!1}Xt.prototype.blur=function(){var e=z(this._fragmentFiber);e!==null&&(e=_(e),e=Ni(e).activeElement,e!==null&&x(this._fragmentFiber.child,!1,Ib,e,void 0,void 0))};function Ib(e,t){return e.tag===6?!1:(e=_(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Xt.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),x(this._fragmentFiber.child,!1,Wb,e,void 0,void 0)};function Wb(e,t){return e.tag===6||(e=_(e),t.observe(e)),!1}Xt.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),x(this._fragmentFiber.child,!1,eg,e,void 0,void 0);for(var a=t=0;a<ma.length;a++){var s=ma[a];s.fragmentInstance===this&&s.observer===e?e.unobserve(s.instance):ma[t++]=s}ma.length=t}};function eg(e,t){return e.tag===6||(e=_(e),t.unobserve(e)),!1}var ma=[],Fd=!1;function tg(e,t,a){ma.push({fragmentInstance:e,observer:t,instance:a}),Fd||(Fd=!0,cg(function(){Fd=!1;var s=ma;ma=[];for(var l=0;l<s.length;l++){var i=s[l];i.observer.unobserve(i.instance)}}))}Xt.prototype.getClientRects=function(){var e=[];return x(this._fragmentFiber.child,!1,ag,e,void 0,void 0),e};function ag(e,t){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),t.push.apply(t,a.getClientRects())}else e=_(e),t.push.apply(t,e.getClientRects());return!1}Xt.prototype.getRootNode=function(e){var t=z(this._fragmentFiber);return t===null?this:_(t).getRootNode(e)},Xt.prototype.compareDocumentPosition=function(e){var t=z(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];x(this._fragmentFiber.child,!1,Gd,a,void 0,void 0);var s=_(t);if(a.length===0){if(a=s,G(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(a=t)}t=this._fragmentFiber;var l=s=a.compareDocumentPosition(e);return a===e?l=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=Y(t)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=_(a).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=_(a[0]),l=_(a[a.length-1]);var i=G(this._fragmentFiber)?t.parentElement:s;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),c=l.compareDocumentPosition(e),f=r&Node.DOCUMENT_POSITION_CONTAINED_BY||c&Node.DOCUMENT_POSITION_CONTAINED_BY;return c=s&&i&&r&Node.DOCUMENT_POSITION_FOLLOWING&&c&Node.DOCUMENT_POSITION_PRECEDING,t=s&&t===e||i&&l===e||f||c?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&t===e||!i&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||sg(t,this._fragmentFiber,a[0],a[a.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function sg(e,t,a,s,l){var i=Cs(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!i)e:{for(;i!==null;){if(i.tag===7&&(i===t||i.alternate===t)){a=!0;break e}i=i.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=l.ownerDocument,l===i||l===i.documentElement||l===i.body;e:{for(i=t,t=z(t);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==t&&i.alternate!==t)){i=!0;break e}i=i.return}i=!1}return i}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!i)&&!(t=i===a)&&(t=Te(a,i,we),t===null?t=!1:(x(t,!0,I,i,a),i=Z,Z=null,t=i!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!i)&&!(t=i===s)&&(t=Te(s,i,we),t===null?t=!1:(x(t,!0,be,i,s),i=Z,P=Z=null,t=i!==null)),t):!1}function f0(e,t){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Xt.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(n(566));var t=[];x(this._fragmentFiber.child,!1,Gd,t,void 0,void 0);var a=e!==!1;if(t.length===0){var s=Y(this._fragmentFiber);if(s=a?s[1]||s[0]||z(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){e=_(s),f0(e,a);return}if(s=_(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(e);return}s.scrollIntoView(e)}}for(s=a?t.length-1:0;s!==(a?-1:t.length);){var l=t[s];l.tag===6?(l=_(l),f0(l,a)):_(l).scrollIntoView(e),s+=a?-1:1}};function lg(e,t){return e=_(e),m0(e,t),!1}function m0(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function x0(e,t){var a=t._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];e.addEventListener(l.type,l.attachedListener,Ll(l.optionsOrUseCapture))}e.nodeType!==3&&(a=t._observers,a!==null&&a.forEach(function(i){for(var r=0,c=0;c<ma.length;c++){var f=ma[c];(f.fragmentInstance!==t||f.observer!==i||f.instance!==e)&&(ma[r++]=f)}ma.length=r,i.observe(e)}),m0(e,t))}function ig(e,t){var a=t._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];e.removeEventListener(l.type,l.attachedListener,Ll(l.optionsOrUseCapture))}e.nodeType!==3&&(a=t._observers,a!==null&&a.forEach(function(i){typeof i.rootMargin=="string"?tg(t,i,e):i.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Yd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yd(a),Ii(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function rg(e,t,a,s){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Il])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=la(e.nextSibling),e===null)break}return null}function og(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=la(e.nextSibling),e===null))return null;return e}function b0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=la(e.nextSibling),e===null))return null;return e}function Vd(e){return e.data==="$?"||e.data==="$~"}function Qd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ng(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var s=function(){t(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function la(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Xd=null;function g0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return la(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function h0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function dg(e,t){function a(){s=!0}if(e.ownerDocument.activeElement===e)return!0;var s=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return s}function cg(e){l0(function(){l0(function(t){return e(t)})})}function v0(e,t,a){switch(t=Ni(a),e){case"html":if(e=t.documentElement,!e)throw Error(n(452));return e;case"head":if(e=t.head,!e)throw Error(n(453));return e;case"body":if(e=t.body,!e)throw Error(n(454));return e;default:throw Error(n(451))}}function y0(e,t,a){for(var s in a){var l=a[s];a.hasOwnProperty(s)&&l!=null&&Oe(e,t,s,null,qb,l)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ya&&(e.onclick=null),Ii(e)}function Zd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ii(e)}var ia=new Map,w0=new Set;function Oi(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Ka=ae.d;ae.d={f:ug,r:pg,D:fg,C:mg,L:xg,m:bg,X:hg,S:gg,M:vg};function ug(){var e=Ka.f(),t=to();return e||t}function pg(e){var t=tl(e);t!==null&&t.tag===5&&t.type==="form"?Ep(t):Ka.r(e)}var Bl=typeof document>"u"?null:document;function E0(e,t,a){var s=Bl;if(s&&typeof t=="string"&&t){var l=Pt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),w0.has(l)||(w0.add(l),e={rel:e,crossOrigin:a,href:t},s.querySelector(l)===null&&(t=s.createElement("link"),yt(t,"link",e),ct(t),s.head.appendChild(t)))}}function fg(e){Ka.D(e),E0("dns-prefetch",e,null)}function mg(e,t){Ka.C(e,t),E0("preconnect",e,t)}function xg(e,t,a){Ka.L(e,t,a);var s=Bl;if(s&&e&&t){var l='link[rel="preload"][as="'+Pt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Pt(a.imageSizes)+'"]')):l+='[href="'+Pt(e)+'"]';var i=l;switch(t){case"style":i=Hl(e);break;case"script":i=ql(e)}if(!(ia.has(i)||(e=se({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ia.set(i,e),s.querySelector(l)!==null||t==="style"&&s.querySelector(Li(i))||t==="script"&&s.querySelector(Bi(i))))){var r=s.createElement("link");yt(r,"link",e),t==="style"&&(r[Pi]=!0,r.onload=r.onerror=function(){Nc(r)}),ct(r),s.head.appendChild(r)}}}function bg(e,t){Ka.m(e,t);var a=Bl;if(a&&e){var s=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Pt(s)+'"][href="'+Pt(e)+'"]',i=l;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ql(e)}if(!ia.has(i)&&(e=se({rel:"modulepreload",href:e},t),ia.set(i,e),a.querySelector(l)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Bi(i)))return}s=a.createElement("link"),yt(s,"link",e),ct(s),a.head.appendChild(s)}}}function gg(e,t,a){Ka.S(e,t,a);var s=Bl;if(s&&e){var l=al(s).hoistableStyles,i=Hl(e);t=t||"default";var r=l.get(i);if(!r){var c={loading:0,preload:null};if(r=s.querySelector(Li(i)))c.loading=5;else{e=se({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ia.get(i))&&Kd(e,a);var f=r=s.createElement("link");ct(f),yt(f,"link",e),f._p=new Promise(function(w,k){f.onload=w,f.onerror=k}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,no(r,t,s)}r={type:"stylesheet",instance:r,count:1,state:c},l.set(i,r)}}}function hg(e,t){Ka.X(e,t);var a=Bl;if(a&&e){var s=al(a).hoistableScripts,l=ql(e),i=s.get(l);i||(i=a.querySelector(Bi(l)),i||(e=se({src:e,async:!0},t),(t=ia.get(l))&&$d(e,t),i=a.createElement("script"),ct(i),yt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},s.set(l,i))}}function vg(e,t){Ka.M(e,t);var a=Bl;if(a&&e){var s=al(a).hoistableScripts,l=ql(e),i=s.get(l);i||(i=a.querySelector(Bi(l)),i||(e=se({src:e,async:!0,type:"module"},t),(t=ia.get(l))&&$d(e,t),i=a.createElement("script"),ct(i),yt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},s.set(l,i))}}function S0(e,t,a,s){var l=(l=de.current)?Oi(l):null;if(!l)throw Error(n(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Hl(a.href),t=al(l).hoistableStyles,s=t.get(a),s||(s={type:"style",instance:null,count:0,state:null},t.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Hl(a.href);var i=al(l).hoistableStyles,r=i.get(e);if(r||(l=l.ownerDocument||l,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=l.querySelector(Li(e)))?i._p||(r.instance=i,r.state.loading=5):(i=ia.get(e),i||(i={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ia.set(e,i)),yg(l,e,i,r.state))),t&&s===null)throw Error(n(528,""));return r}if(t&&s!==null)throw Error(n(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(a=ql(a),t=al(l).hoistableScripts,s=t.get(a),s||(s={type:"script",instance:null,count:0,state:null},t.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(n(444,e))}}function Hl(e){return'href="'+Pt(e)+'"'}function Li(e){return'link[rel="stylesheet"]['+e+"]"}function T0(e){return se({},e,{"data-precedence":e.precedence,precedence:null})}function yg(e,t,a,s){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Pi]!==!0){s.loading=1;return}}else t=e.createElement("link"),t[Pi]=!0,t.onload=t.onerror=Nc.bind(null,t),yt(t,"link",a),ct(t),e.head.appendChild(t);s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2})}function ql(e){return'[src="'+Pt(e)+'"]'}function Bi(e){return"script[async]"+e}function A0(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+Pt(a.href)+'"]');if(s)return t.instance=s,ct(s),s;var l=se({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),ct(s),yt(s,"style",l),no(s,a.precedence,e),t.instance=s;case"stylesheet":l=Hl(a.href);var i=e.querySelector(Li(l));if(i)return t.state.loading|=4,t.instance=i,ct(i),i;s=T0(a),(l=ia.get(l))&&Kd(s,l),i=(e.ownerDocument||e).createElement("link"),ct(i);var r=i;return r._p=new Promise(function(c,f){r.onload=c,r.onerror=f}),yt(i,"link",s),t.state.loading|=4,no(i,a.precedence,e),t.instance=i;case"script":return i=ql(a.src),(l=e.querySelector(Bi(i)))?(t.instance=l,ct(l),l):(s=a,(l=ia.get(i))&&(s=se({},a),$d(s,l)),e=e.ownerDocument||e,l=e.createElement("script"),ct(l),yt(l,"link",s),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(n(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,no(s,a.precedence,e));return t.instance}function no(e,t,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=s.length?s[s.length-1]:null,i=l,r=0;r<s.length;r++){var c=s[r];if(c.dataset.precedence===t)i=c;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Kd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $d(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var co=null;function j0(e,t,a){if(co===null){var s=new Map,l=co=new Map;l.set(a,s)}else l=co,s=l.get(a),s||(s=new Map,l.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var i=a[l];if(!(i[Il]||i[xt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var c=s.get(r);c?c.push(i):s.set(r,[i])}}return s}function Jd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function wg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function k0(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function C0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function D0(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function M0(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=D0(t),e.suspenseyImages.push(t)),e=Tg.bind(e),t.decode().then(e,e))}function Eg(e,t,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Hl(s.href),i=t.querySelector(Li(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Hi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,ct(i);return}i=t.ownerDocument||t,s=T0(s),(l=ia.get(l))&&Kd(s,l),i=i.createElement("link"),ct(i);var r=i;r._p=new Promise(function(c,f){r.onload=c,r.onerror=f}),yt(i,"link",s),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Hi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var uo=0;function Sg(e,t){return e.stylesheets&&e.count===0&&fo(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&fo(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&uo===0&&(uo=62500*Gb());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fo(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>uo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(l)}}:null}function R0(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)fo(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Hi(){this.count--,R0(this)}function Tg(){this.imgCount--,R0(this)}var po=null;function fo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,po=new Map,t.forEach(Ag,e),po=null,Hi.call(e))}function Ag(e,t){if(!(t.state.loading&4)){var a=po.get(e);if(a)var s=a.get(null);else{a=new Map,po.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var r=l[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),s=r)}s&&a.set(null,s)}l=t.instance,r=l.getAttribute("data-precedence"),i=a.get(r)||s,i===s&&a.set(null,l),a.set(r,l),this.count++,s=Hi.bind(this),l.addEventListener("load",s),l.addEventListener("error",s),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Ul={$$typeof:Ae,Provider:null,Consumer:null,_currentValue:oa,_currentValue2:oa,_threadCount:0};function jg(e,t,a,s,l,i,r,c,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Do(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Do(0),this.hiddenUpdates=Do(null),this.identifierPrefix=s,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.transitionTypes=null,this.incompleteTransitions=new Map}function z0(e,t,a,s,l,i,r,c,f,w,k,R){return e=new jg(e,t,a,r,f,w,k,R,c),t=1,i===!0&&(t|=24),i=Rt(3,null,null,t),e.current=i,i.stateNode=e,t=un(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:s,isDehydrated:a,cache:t},xn(i),e}function _0(e){return e?(e=pl,e):pl}function N0(e,t,a,s,l,i){l=_0(l),s.context===null?s.context=l:s.pendingContext=l,s=ns(t),s.payload={element:a},i=i===void 0?null:i,i!==null&&(s.callback=i),a=ds(e,s,t),a!==null&&(Ot(a,e,t),xi(a,e,t))}function O0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Pd(e,t){O0(e,t),(e=e.alternate)&&O0(e,t)}function L0(e){if(e.tag===13||e.tag===31){var t=zs(e,67108864);t!==null&&Ot(t,e,67108864),Pd(e,67108864)}}function B0(e){if(e.tag===13||e.tag===31){var t=Qt();t=Mo(t);var a=zs(e,t);a!==null&&Ot(a,e,t),Pd(e,t)}}var Gl=!0;function kg(e,t,a,s){var l=X.T;X.T=null;var i=ae.p;try{ae.p=2,Id(e,t,a,s)}finally{ae.p=i,X.T=l}}function Cg(e,t,a,s){var l=X.T;X.T=null;var i=ae.p;try{ae.p=8,Id(e,t,a,s)}finally{ae.p=i,X.T=l}}function Id(e,t,a,s){if(Gl){var l=Wd(s);if(l===null)_d(e,t,s,mo,a),q0(e,s);else if(Mg(l,e,t,a,s))s.stopPropagation();else if(q0(e,s),t&4&&-1<Dg.indexOf(e)){for(;l!==null;){var i=tl(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=ks(i.pendingLanes);if(r!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;r;){var f=1<<31-Ht(r);c.entanglements[1]|=f,r&=~f}Ma(i),(De&6)===0&&(Ir=Se()+500,Ri(0))}}break;case 31:case 13:c=zs(i,2),c!==null&&Ot(c,i,2),to(),Pd(i,2)}if(i=Wd(s),i===null&&_d(e,t,s,mo,a),i===l)break;l=i}l!==null&&s.stopPropagation()}else _d(e,t,s,null,a)}}function Wd(e){return e=Bo(e),ec(e)}var mo=null;function ec(e){if(mo=null,e=Cs(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=E(t),e!==null)return e;e=null}else if(a===31){if(e=b(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return mo=e,null}function H0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Kl()){case At:return 2;case va:return 8;case Jt:case na:return 32;case Tc:return 268435456;default:return 32}default:return 32}}var tc=!1,ws=null,Es=null,Ss=null,qi=new Map,Ui=new Map,Ts=[],Dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q0(e,t){switch(e){case"focusin":case"focusout":ws=null;break;case"dragenter":case"dragleave":Es=null;break;case"mouseover":case"mouseout":Ss=null;break;case"pointerover":case"pointerout":qi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(t.pointerId)}}function Gi(e,t,a,s,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:s,nativeEvent:i,targetContainers:[l]},t!==null&&(t=tl(t),t!==null&&L0(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Mg(e,t,a,s,l){switch(t){case"focusin":return ws=Gi(ws,e,t,a,s,l),!0;case"dragenter":return Es=Gi(Es,e,t,a,s,l),!0;case"mouseover":return Ss=Gi(Ss,e,t,a,s,l),!0;case"pointerover":var i=l.pointerId;return qi.set(i,Gi(qi.get(i)||null,e,t,a,s,l)),!0;case"gotpointercapture":return i=l.pointerId,Ui.set(i,Gi(Ui.get(i)||null,e,t,a,s,l)),!0}return!1}function U0(e){var t=Cs(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=E(a),t!==null){e.blockedOn=t,Rc(e.priority,function(){B0(a)});return}}else if(t===31){if(t=b(a),t!==null){e.blockedOn=t,Rc(e.priority,function(){B0(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Wd(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Lo=s,a.target.dispatchEvent(s),Lo=null}else return t=tl(a),t!==null&&L0(t),e.blockedOn=a,!1;t.shift()}return!0}function G0(e,t,a){xo(e)&&a.delete(t)}function Rg(){tc=!1,ws!==null&&xo(ws)&&(ws=null),Es!==null&&xo(Es)&&(Es=null),Ss!==null&&xo(Ss)&&(Ss=null),qi.forEach(G0),Ui.forEach(G0)}function bo(e,t){e.blockedOn===t&&(e.blockedOn=null,tc||(tc=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Rg)))}var go=null;function F0(e){go!==e&&(go=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){go===e&&(go=null);for(var t=0;t<e.length;t+=3){var a=e[t],s=e[t+1],l=e[t+2];if(typeof s!="function"){if(ec(s||a)===null)continue;break}var i=tl(a);i!==null&&(e.splice(t,3),t-=3,Ln(i,{pending:!0,data:l,method:a.method,action:s},s,l))}}))}function Fl(e){function t(f){return bo(f,e)}ws!==null&&bo(ws,e),Es!==null&&bo(Es,e),Ss!==null&&bo(Ss,e),qi.forEach(t),Ui.forEach(t);for(var a=0;a<Ts.length;a++){var s=Ts[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ts.length&&(a=Ts[0],a.blockedOn===null);)U0(a),a.blockedOn===null&&Ts.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var l=a[s],i=a[s+1],r=l[Mt]||null;if(typeof i=="function")r||F0(a);else if(r){var c=null;if(i&&i.hasAttribute("formAction")){if(l=i,r=i[Mt]||null)c=r.formAction;else if(ec(l)!==null)continue}else c=r.action;typeof c=="function"?a[s+1]=c:(a.splice(s,3),s-=3),F0(a)}}}function Y0(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return l=r})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function ac(e){this._internalRoot=e}ho.prototype.render=ac.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(n(409));var a=t.current,s=Qt();N0(a,s,e,t,null,null)},ho.prototype.unmount=ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;N0(e.current,2,null,e,null,null),to(),t[el]=null}};function ho(e){this._internalRoot=e}ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ts.length&&t!==0&&t<Ts[a].priority;a++);Ts.splice(a,0,e),a===0&&U0(e)}};var V0=d.version;if(V0!=="19.3.0")throw Error(n(527,V0,"19.3.0"));ae.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(n(188)):(e=Object.keys(e).join(","),Error(n(268,e)));return e=C(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var zg={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{$l=vo.inject(zg),Bt=vo}catch{}}return Fi.createRoot=function(e,t){if(!p(e))throw Error(n(299));var a=!1,s="",l=zp,i=_p,r=Np;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=z0(e,1,!1,null,null,a,s,null,l,i,r,Y0),e[el]=t.current,zd(e),new ac(t)},Fi.hydrateRoot=function(e,t,a){if(!p(e))throw Error(n(299));var s=!1,l="",i=zp,r=_p,c=Np,f=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(f=a.formState)),t=z0(e,1,!0,t,a??null,s,l,f,i,r,c,Y0),t.context=_0(null),a=t.current,s=Qt(),s=Mo(s),l=ns(s),l.callback=null,ds(a,l,s),a=s,t.current.lanes=a,Pl(t,a),Ma(t),e[el]=t.current,zd(e),new ho(t)},Fi.version="19.3.0",Fi}var I0;function Gg(){if(I0)return lc.exports;I0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),lc.exports=Ug(),lc.exports}var Fg=Gg();var xc=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,xm=/^[\\/]{2}/;function Yg(o,d){return d+o.replace(/\\/g,"/")}var W0="popstate";function em(o){return typeof o=="object"&&o!=null&&"pathname"in o&&"search"in o&&"hash"in o&&"state"in o&&"key"in o}function Vg(o={}){function d(n,p){let m=p.state?.masked,{pathname:E,search:b,hash:j}=m||n.location;return pc("",{pathname:E,search:b,hash:j},p.state&&p.state.usr||null,p.state&&p.state.key||"default",m?{pathname:n.location.pathname,search:n.location.search,hash:n.location.hash}:void 0)}function u(n,p){return typeof p=="string"?p:Yl(p)}return Xg(d,u,null,o)}function Qe(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function Ra(o,d){if(!o){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function Qg(){return Math.random().toString(36).substring(2,10)}function tm(o,d){return{usr:o.state,key:o.key,idx:d,masked:o.mask?{pathname:o.pathname,search:o.search,hash:o.hash}:void 0}}function pc(o,d,u=null,n,p){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof d=="string"?Ql(d):d,state:u,key:d&&d.key||n||Qg(),mask:p}}function Yl({pathname:o="/",search:d="",hash:u=""}){return d&&d!=="?"&&(o+=d.charAt(0)==="?"?d:"?"+d),u&&u!=="#"&&(o+=u.charAt(0)==="#"?u:"#"+u),o}function Ql(o){let d={};if(o){let u=o.indexOf("#");u>=0&&(d.hash=o.substring(u),o=o.substring(0,u));let n=o.indexOf("?");n>=0&&(d.search=o.substring(n),o=o.substring(0,n)),o&&(d.pathname=o)}return d}function Xg(o,d,u,n={}){let{window:p=document.defaultView,v5Compat:m=!1}=n,E=p.history,b="POP",j=null,C=T();C==null&&(C=0,E.replaceState({...E.state,idx:C},""));function T(){return(E.state||{idx:null}).idx}function x(){b="POP";let _=T(),Z=_==null?null:_-C;C=_,j&&j({action:b,location:U.location,delta:Z})}function z(_,Z){b="PUSH";let P=em(_)?_:pc(U.location,_,Z);C=T()+1;let I=tm(P,C),be=U.createHref(P.mask||P);try{E.pushState(I,"",be)}catch(we){if(we instanceof DOMException&&we.name==="DataCloneError")throw we;p.location.assign(be)}m&&j&&j({action:b,location:U.location,delta:1})}function G(_,Z){b="REPLACE";let P=em(_)?_:pc(U.location,_,Z);C=T();let I=tm(P,C),be=U.createHref(P.mask||P);E.replaceState(I,"",be),m&&j&&j({action:b,location:U.location,delta:0})}function Y(_){return Zg(p,_)}let U={get action(){return b},get location(){return o(p,E)},listen(_){if(j)throw new Error("A history only accepts one active listener");return p.addEventListener(W0,x),j=_,()=>{p.removeEventListener(W0,x),j=null}},createHref(_){return d(p,_)},createURL:Y,encodeLocation(_){let Z=Y(_);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:z,replace:G,go(_){return E.go(_)}};return U}function Zg(o,d,u=!1){let n="http://localhost";o&&(n=o.location.origin!=="null"?o.location.origin:o.location.href),Qe(n,"No window.location.(origin|href) available to create URL");let p=typeof d=="string"?d:Yl(d);return p=p.replace(/ $/,"%20"),!u&&xm.test(p)&&(p=n+p),new URL(p,n)}function bm(o,d,u="/"){return Kg(o,d,u,!1)}function Kg(o,d,u,n,p){let m=typeof d=="string"?Ql(d):d,E=$a(m.pathname||"/",u);if(E==null)return null;let b=$g(o),j=null,C=rh(E);for(let T=0;j==null&&T<b.length;++T)j=ih(b[T],C,n);return j}function $g(o){let d=gm(o);return Jg(d),d}function gm(o,d=[],u=[],n="",p=!1){let m=(E,b,j=p,C)=>{let T={relativePath:C===void 0?E.path||"":C,caseSensitive:E.caseSensitive===!0,childrenIndex:b,route:E};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(n)&&j)return;Qe(T.relativePath.startsWith(n),`Absolute route path "${T.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(n.length)}let x=xa([n,T.relativePath]),z=u.concat(T);E.children&&E.children.length>0&&(Qe(E.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),gm(E.children,d,z,x,j)),!(E.path==null&&!E.index)&&d.push({path:x,score:sh(x,E.index),routesMeta:z.map((G,Y)=>{let[U,_]=ym(G.relativePath,G.caseSensitive,Y===z.length-1);return{...G,matcher:U,compiledParams:_}})})};return o.forEach((E,b)=>{if(E.path===""||!E.path?.includes("?"))m(E,b);else for(let j of hm(E.path))m(E,b,!0,j)}),d}function hm(o){let d=o.split("/");if(d.length===0)return[];let[u,...n]=d,p=u.endsWith("?"),m=u.replace(/\?$/,"");if(n.length===0)return p?[m,""]:[m];let E=hm(n.join("/")),b=[];return b.push(...E.map(j=>j===""?m:[m,j].join("/"))),p&&b.push(...E),b.map(j=>o.startsWith("/")&&j===""?"/":j)}function Jg(o){o.sort((d,u)=>d.score!==u.score?u.score-d.score:lh(d.routesMeta.map(n=>n.childrenIndex),u.routesMeta.map(n=>n.childrenIndex)))}var Pg=/^:[\w-]+$/,Ig=3,Wg=2,eh=1,th=10,ah=-2,am=o=>o==="*";function sh(o,d){let u=o.split("/"),n=u.length;return u.some(am)&&(n+=ah),d&&(n+=Wg),u.filter(p=>!am(p)).reduce((p,m)=>p+(Pg.test(m)?Ig:m===""?eh:th),n)}function lh(o,d){return o.length===d.length&&o.slice(0,-1).every((n,p)=>n===d[p])?o[o.length-1]-d[d.length-1]:0}function ih(o,d,u=!1){let{routesMeta:n}=o,p={},m="/",E=[];for(let b=0;b<n.length;++b){let j=n[b],C=b===n.length-1,T=m==="/"?d:d.slice(m.length)||"/",x={path:j.relativePath,caseSensitive:j.caseSensitive,end:C},z=j.matcher&&j.compiledParams?vm(x,T,j.matcher,j.compiledParams):To(x,T),G=j.route;if(!z&&C&&u&&!n[n.length-1].route.index&&(z=To({path:j.relativePath,caseSensitive:j.caseSensitive,end:!1},T)),!z)return null;Object.assign(p,z.params),E.push({params:p,pathname:xa([m,z.pathname]),pathnameBase:dh(xa([m,z.pathnameBase])),route:G}),z.pathnameBase!=="/"&&(m=xa([m,z.pathnameBase]))}return E}function To(o,d){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[u,n]=ym(o.path,o.caseSensitive,o.end);return vm(o,d,u,n)}function vm(o,d,u,n){let p=d.match(u);if(!p)return null;let m=p[0],E=Vl(m,1),b=p.slice(1);return{params:n.reduce((C,{paramName:T,isOptional:x},z)=>{if(T==="*"){let Y=b[z]||"";E=Vl(m.slice(0,m.length-Y.length),1)}const G=b[z];return x&&!G?C[T]=void 0:C[T]=(G||"").replace(/%2F/g,"/"),C},{}),pathname:m,pathnameBase:E,pattern:o}}function ym(o,d=!1,u=!0){Ra(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let n=[],p="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(E,b,j,C,T)=>{if(n.push({paramName:b,isOptional:j!=null}),j){let x=T.charAt(C+E.length);return x&&x!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(n.push({paramName:"*"}),p+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?p+="\\/*$":o!==""&&o!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,d?void 0:"i"),n]}function rh(o){try{return o.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Ra(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),o}}function $a(o,d){if(d==="/")return o;if(!o.toLowerCase().startsWith(d.toLowerCase()))return null;let u=d.endsWith("/")?d.length-1:d.length,n=o.charAt(u);return n&&n!=="/"?null:o.slice(u)||"/"}function oh(o,d="/"){let{pathname:u,search:n="",hash:p=""}=typeof o=="string"?Ql(o):o,m;return u?(u=Em(u),u.startsWith("/")||u.startsWith("\\")?m=sm(u.substring(1),"/"):m=sm(u,d)):m=d,{pathname:m,search:ch(n),hash:uh(p)}}function sm(o,d){let u=Vl(d).split("/");return o.split("/").forEach(p=>{p===".."?u.length>1&&u.pop():p!=="."&&u.push(p)}),u.length>1?u.join("/"):"/"}function nc(o,d,u,n){return`Cannot include a '${o}' character in a manually specified \`to.${d}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function nh(o){return o.filter((d,u)=>u===0||d.route.path&&d.route.path.length>0)}function wm(o){let d=nh(o);return d.map((u,n)=>n===d.length-1?u.pathname:u.pathnameBase)}function bc(o,d,u,n=!1){let p;typeof o=="string"?p=Ql(o):(p={...o},Qe(!p.pathname||!p.pathname.includes("?"),nc("?","pathname","search",p)),Qe(!p.pathname||!p.pathname.includes("#"),nc("#","pathname","hash",p)),Qe(!p.search||!p.search.includes("#"),nc("#","search","hash",p)));let m=o===""||p.pathname==="",E=m?"/":p.pathname,b;if(E==null)b=u;else{let x=d.length-1;if(!n&&E.startsWith("..")){let z=E.split("/");for(;z[0]==="..";)z.shift(),x-=1;p.pathname=z.join("/")}b=x>=0?d[x]:"/"}let j=oh(p,b),C=E&&E!=="/"&&E.endsWith("/"),T=(m||E===".")&&u.endsWith("/");return!j.pathname.endsWith("/")&&(C||T)&&(j.pathname+="/"),j}var Em=o=>o.replace(/[\\/]{2,}/g,"/"),xa=o=>Em(o.join("/"));function Vl(o,d=0){let u=o.length;for(;u>d&&o.charCodeAt(u-1)===47;)u--;return u===o.length?o:o.slice(0,u)}var dh=o=>Vl(o).replace(/^\/*/,"/"),ch=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,uh=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,ph=class{constructor(o,d,u,n=!1){this.status=o,this.statusText=d||"",this.internal=n,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function fh(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function mh(o){let d=o.map(u=>u.route.path).filter(Boolean);return xa(d)||"/"}var Sm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Tm(o,d){let u=o;if(typeof u!="string"||!xc.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let n=u,p=!1;if(Sm)try{let m=new URL(window.location.href),E=xm.test(u)?new URL(Yg(u,m.protocol)):new URL(u),b=$a(E.pathname,d);E.origin===m.origin&&b!=null?u=b+E.search+E.hash:p=!0}catch{Ra(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:n,isExternal:p,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var lm=new URL("http://localhost");function Am(o){if(o.createURL)return o.createURL("/");try{return new URL(o.createHref("/"),lm)}catch{return lm}}function dc(o,d){return o.origin===d.origin&&(o.origin!=="null"||o.protocol===d.protocol&&o.host===d.host)}function xh(o,d){if(o.startsWith("//"))return!0;let u=d.protocol.toLowerCase();return o.toLowerCase().startsWith(u)?d.host===""||o.slice(u.length).startsWith("//"):!1}function jm(o,d,u,n){let p=null;try{p=o==null?null:new URL(o,u)}catch{}let m=new URL(d,u),E=p!=null&&!dc(p,u),b=!dc(m,u);if(n==="reject"){if(E||b)throw new Error("External navigation is not allowed")}else if(b&&(p==null||!xh(o,p)||!dc(p,m)))throw new Error("External navigation is not allowed")}var km=["POST","PUT","PATCH","DELETE"];new Set(km);var bh=["GET",...km];new Set(bh);var gh=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function hh(o){try{return gh.includes(new URL(o).protocol)}catch{return!1}}var Xl=D.createContext(null);Xl.displayName="DataRouter";var jo=D.createContext(null);jo.displayName="DataRouterState";var Cm=D.createContext(!1);function vh(){return D.useContext(Cm)}var Dm=D.createContext({isTransitioning:!1});Dm.displayName="ViewTransition";var yh=D.createContext(new Map);yh.displayName="Fetchers";var wh=D.createContext(null);wh.displayName="Await";var ra=D.createContext(null);ra.displayName="Navigation";var Vi=D.createContext(null);Vi.displayName="Location";var Ja=D.createContext({outlet:null,matches:[],isDataRoute:!1});Ja.displayName="Route";var gc=D.createContext(null);gc.displayName="RouteError";var Mm="REACT_ROUTER_ERROR",Eh="REDIRECT",Sh="ROUTE_ERROR_RESPONSE";function Th(o){if(o.startsWith(`${Mm}:${Eh}:{`))try{let d=JSON.parse(o.slice(28));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.location=="string"&&typeof d.reloadDocument=="boolean"&&typeof d.replace=="boolean")return d}catch{}}function Ah(o){if(o.startsWith(`${Mm}:${Sh}:{`))try{let d=JSON.parse(o.slice(40));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string")return new ph(d.status,d.statusText,d.data)}catch{}}function jh(o,{relative:d}={}){Qe(Qi(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:n}=D.useContext(ra),{hash:p,pathname:m,search:E}=Xi(o,{relative:d}),b=m;return u!=="/"&&(b=m==="/"?u:xa([u,m])),n.createHref({pathname:b,search:E,hash:p})}function Qi(){return D.useContext(Vi)!=null}function za(){return Qe(Qi(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(Vi).location}var Rm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zm(o){D.useContext(ra).static||D.useLayoutEffect(o)}function _m(){let{isDataRoute:o}=D.useContext(Ja);return o?qh():kh()}function kh(){Qe(Qi(),"useNavigate() may be used only in the context of a <Router> component.");let o=D.useContext(Xl),{basename:d,navigator:u}=D.useContext(ra),{matches:n}=D.useContext(Ja),{pathname:p}=za(),m=JSON.stringify(wm(n)),E=D.useRef(!1);return zm(()=>{E.current=!0}),D.useCallback((j,C={})=>{if(Ra(E.current,Rm),!E.current)return;if(typeof j=="number"){u.go(j);return}let T=bc(j,JSON.parse(m),p,C.relative==="path");o==null&&d!=="/"&&(T.pathname=T.pathname==="/"?d:xa([d,T.pathname])),jm(typeof j=="string"?j:Yl(j),u.createHref(T),Am(u),"reject"),(C.replace?u.replace:u.push)(T,C.state,C)},[d,u,m,p,o])}D.createContext(null);function Xi(o,{relative:d}={}){let{matches:u}=D.useContext(Ja),{pathname:n}=za(),p=JSON.stringify(wm(u));return D.useMemo(()=>bc(o,JSON.parse(p),n,d==="path"),[o,p,n,d])}function Ch(o,d){return Nm(o,d)}function Nm(o,d,u){Qe(Qi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:n}=D.useContext(ra),{matches:p}=D.useContext(Ja),m=p[p.length-1],E=m?m.params:{},b=m?m.pathname:"/",j=m?m.pathnameBase:"/",C=m&&m.route;{let _=C&&C.path||"";Lm(b,!C||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let T=za(),x;if(d){let _=typeof d=="string"?Ql(d):d;Qe(j==="/"||_.pathname?.startsWith(j),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${j}" but pathname "${_.pathname}" was given in the \`location\` prop.`),x=_}else x=T;let z=x.pathname||"/",G=z;if(j!=="/"){let _=j.replace(/^\//,"").split("/");G="/"+z.replace(/^\//,"").split("/").slice(_.length).join("/")}let Y=u&&u.state.matches.length?u.state.matches.map(_=>Object.assign(_,{route:u.manifest[_.route.id]||_.route})):bm(o,{pathname:G});Ra(C||Y!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Ra(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let U=_h(Y&&Y.map(_=>Object.assign({},_,{params:Object.assign({},E,_.params),pathname:xa([j,n.encodeLocation?n.encodeLocation(_.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?j:xa([j,n.encodeLocation?n.encodeLocation(_.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),p,u);return d&&U?D.createElement(Vi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...x},navigationType:"POP"}},U):U}function Dh(){let o=Hh(),d=fh(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),u=o instanceof Error?o.stack:null,n="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:n},m={padding:"2px 4px",backgroundColor:n},E=null;return console.error("Error handled by React Router default ErrorBoundary:",o),E=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:m},"ErrorBoundary")," or"," ",D.createElement("code",{style:m},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},d),u?D.createElement("pre",{style:p},u):null,E)}var Mh=D.createElement(Dh,null),Om=class extends D.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,d){return d.location!==o.location||d.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:d.error,location:d.location,revalidation:o.revalidation||d.revalidation}}componentDidCatch(o,d){this.props.onError?this.props.onError(o,d):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const u=Ah(o.digest);u&&(o=u)}let d=o!==void 0?D.createElement(Ja.Provider,{value:this.props.routeContext},D.createElement(gc.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?D.createElement(Rh,{error:o},d):d}};Om.contextType=Cm;var cc=new WeakMap;function Rh({children:o,error:d}){let{basename:u,navigator:n}=D.useContext(ra);if(typeof d=="object"&&d&&"digest"in d&&typeof d.digest=="string"){let p=Th(d.digest);if(p){let m=cc.get(d);if(m)throw m;let E=Tm(p.location,u),b=E.absoluteURL||E.to;if(jm(p.location,b,Am(n),"allow-explicit"),hh(b))throw new Error("Invalid redirect location");if(Sm&&!cc.get(d))if(E.isExternal||p.reloadDocument)window.location.href=b;else{const j=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(E.to,{replace:p.replace}));throw cc.set(d,j),j}return D.createElement("meta",{httpEquiv:"refresh",content:`0;url=${b}`})}}return o}function zh({routeContext:o,match:d,children:u}){let n=D.useContext(Xl);return n&&n.static&&n.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=d.route.id),D.createElement(Ja.Provider,{value:o},u)}function _h(o,d=[],u){let n=u?.state;if(o==null){if(!n)return null;if(n.errors)o=n.matches;else if(d.length===0&&!n.initialized&&n.matches.length>0)o=n.matches;else return null}let p=o,m=n?.errors;if(m!=null){let T=p.findIndex(x=>x.route.id&&m?.[x.route.id]!==void 0);Qe(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),p=p.slice(0,Math.min(p.length,T+1))}let E=!1,b=-1;if(u&&n){E=n.renderFallback;for(let T=0;T<p.length;T++){let x=p[T];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(b=T),x.route.id){let{loaderData:z,errors:G}=n,Y=x.route.loader&&!z.hasOwnProperty(x.route.id)&&(!G||G[x.route.id]===void 0);if(x.route.lazy||Y){u.isStatic&&(E=!0),b>=0?p=p.slice(0,b+1):p=[p[0]];break}}}}let j=u?.onError,C=n&&j?(T,x)=>{j(T,{location:n.location,params:n.matches?.[0]?.params??{},pattern:mh(n.matches),errorInfo:x})}:void 0;return p.reduceRight((T,x,z)=>{let G,Y=!1,U=null,_=null;n&&(G=m&&x.route.id?m[x.route.id]:void 0,U=x.route.errorElement||Mh,E&&(b<0&&z===0?(Lm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Y=!0,_=null):b===z&&(Y=!0,_=x.route.hydrateFallbackElement||null)));let Z=d.concat(p.slice(0,z+1)),P=()=>{let I;return G?I=U:Y?I=_:x.route.Component?I=D.createElement(x.route.Component,null):x.route.element?I=x.route.element:I=T,D.createElement(zh,{match:x,routeContext:{outlet:T,matches:Z,isDataRoute:n!=null},children:I})};return n&&(x.route.ErrorBoundary||x.route.errorElement||z===0)?D.createElement(Om,{location:n.location,revalidation:n.revalidation,component:U,error:G,children:P(),routeContext:{outlet:null,matches:Z,isDataRoute:!0},onError:C}):P()},null)}function hc(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nh(o){let d=D.useContext(Xl);return Qe(d,hc(o)),d}function Oh(o){let d=D.useContext(jo);return Qe(d,hc(o)),d}function Lh(o){let d=D.useContext(Ja);return Qe(d,hc(o)),d}function vc(o){let d=Lh(o),u=d.matches[d.matches.length-1];return Qe(u.route.id,`${o} can only be used on routes that contain a unique "id"`),u.route.id}function Bh(){return vc("useRouteId")}function Hh(){let o=D.useContext(gc),d=Oh("useRouteError"),u=vc("useRouteError");return o!==void 0?o:d.errors?.[u]}function qh(){let{router:o}=Nh("useNavigate"),d=vc("useNavigate"),u=D.useRef(!1);return zm(()=>{u.current=!0}),D.useCallback(async(p,m={})=>{Ra(u.current,Rm),u.current&&(typeof p=="number"?await o.navigate(p):await o.navigate(p,{fromRouteId:d,...m}))},[o,d])}var im={};function Lm(o,d,u){!d&&!im[o]&&(im[o]=!0,Ra(!1,u))}D.memo(Uh);function Uh({routes:o,manifest:d,future:u,state:n,isStatic:p,onError:m}){return Nm(o,void 0,{manifest:d,state:n,isStatic:p,onError:m})}function Bm(o){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Gh({basename:o="/",children:d=null,location:u,navigationType:n="POP",navigator:p,static:m=!1,useTransitions:E}){Qe(!Qi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=o.replace(/^\/*/,"/"),j=D.useMemo(()=>({basename:b,navigator:p,static:m,useTransitions:E,future:{}}),[b,p,m,E]);typeof u=="string"&&(u=Ql(u));let{pathname:C="/",search:T="",hash:x="",state:z=null,key:G="default",mask:Y}=u,U=D.useMemo(()=>{let _=$a(C,b);return _==null?null:{location:{pathname:_,search:T,hash:x,state:z,key:G,mask:Y},navigationType:n}},[b,C,T,x,z,G,n,Y]);return Ra(U!=null,`<Router basename="${b}"> is not able to match the URL "${C}${T}${x}" because it does not start with the basename, so the <Router> won't render anything.`),U==null?null:D.createElement(ra.Provider,{value:j},D.createElement(Vi.Provider,{children:d,value:U}))}function Fh({children:o,location:d}){return Ch(fc(o),d)}function fc(o,d=[]){let u=[];return D.Children.forEach(o,(n,p)=>{if(!D.isValidElement(n))return;let m=[...d,p];if(n.type===D.Fragment){u.push.apply(u,fc(n.props.children,m));return}Qe(n.type===Bm,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!n.props.index||!n.props.children,"An index route cannot have child routes.");let E={id:n.props.id||m.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,middleware:n.props.middleware,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(E.children=fc(n.props.children,m)),u.push(E)}),u}var wo="get",Eo="application/x-www-form-urlencoded";function ko(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function Yh(o){return ko(o)&&o.tagName.toLowerCase()==="button"}function Vh(o){return ko(o)&&o.tagName.toLowerCase()==="form"}function Qh(o){return ko(o)&&o.tagName.toLowerCase()==="input"}function Xh(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function Zh(o,d){return o.button===0&&(!d||d==="_self")&&!Xh(o)}var yo=null;function Kh(){if(yo===null)try{new FormData(document.createElement("form"),0),yo=!1}catch{yo=!0}return yo}var $h=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function uc(o){return o!=null&&!$h.has(o)?(Ra(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Eo}"`),null):o}function Jh(o,d){let u,n,p,m,E;if(Vh(o)){let b=o.getAttribute("action");n=b?$a(b,d):null,u=o.getAttribute("method")||wo,p=uc(o.getAttribute("enctype"))||Eo,m=new FormData(o)}else if(Yh(o)||Qh(o)&&(o.type==="submit"||o.type==="image")){let b=o.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let j=o.getAttribute("formaction")||b.getAttribute("action");if(n=j?$a(j,d):null,u=o.getAttribute("formmethod")||b.getAttribute("method")||wo,p=uc(o.getAttribute("formenctype"))||uc(b.getAttribute("enctype"))||Eo,m=new FormData(b,o),!Kh()){let{name:C,type:T,value:x}=o;if(T==="image"){let z=C?`${C}.`:"";m.append(`${z}x`,"0"),m.append(`${z}y`,"0")}else C&&m.append(C,x)}}else{if(ko(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=wo,n=null,p=Eo,E=o}return m&&p==="text/plain"&&(E=m,m=void 0),{action:n,method:u.toLowerCase(),encType:p,formData:m,body:E}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function yc(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function Hm(o,d,u,n){let p=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return u?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${n}`:p.pathname=`${p.pathname}.${n}`:p.pathname==="/"?p.pathname=`_root.${n}`:d&&$a(p.pathname,d)==="/"?p.pathname=`${Vl(d)}/_root.${n}`:p.pathname=`${Vl(p.pathname)}.${n}`,p}async function Ph(o,d){if(o.id in d)return d[o.id];try{let u=await import(o.module);return d[o.id]=u,u}catch(u){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ih(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function Wh(o,d,u){let n=await Promise.all(o.map(async p=>{let m=d.routes[p.route.id];if(m){let E=await Ph(m,u);return E.links?E.links():[]}return[]}));return sv(n.flat(1).filter(Ih).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function rm(o,d,u,n,p,m){let E=(j,C)=>u[C]?j.route.id!==u[C].route.id:!0,b=(j,C)=>u[C].pathname!==j.pathname||u[C].route.path?.endsWith("*")&&u[C].params["*"]!==j.params["*"];return m==="assets"?d.filter((j,C)=>E(j,C)||b(j,C)):m==="data"?d.filter((j,C)=>{let T=n.routes[j.route.id];if(!T||!T.hasLoader)return!1;if(E(j,C)||b(j,C))return!0;if(j.route.shouldRevalidate){let x=j.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:j.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function ev(o,d,{includeHydrateFallback:u}={}){return tv(o.map(n=>{let p=d.routes[n.route.id];if(!p)return[];let m=[p.module];return p.clientActionModule&&(m=m.concat(p.clientActionModule)),p.clientLoaderModule&&(m=m.concat(p.clientLoaderModule)),u&&p.hydrateFallbackModule&&(m=m.concat(p.hydrateFallbackModule)),p.imports&&(m=m.concat(p.imports)),m}).flat(1))}function tv(o){return[...new Set(o)]}function av(o){let d={},u=Object.keys(o).sort();for(let n of u)d[n]=o[n];return d}function sv(o,d){let u=new Set;return new Set(d),o.reduce((n,p)=>{let m=JSON.stringify(av(p));return u.has(m)||(u.add(m),n.push({key:m,link:p})),n},[])}function wc(){let o=D.useContext(Xl);return yc(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function lv(){let o=D.useContext(jo);return yc(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var Ec=D.createContext(void 0);Ec.displayName="FrameworkContext";function Co(){let o=D.useContext(Ec);return yc(o,"You must render this element inside a <HydratedRouter> element"),o}function iv(o,d){let u=D.useContext(Ec),[n,p]=D.useState(!1),[m,E]=D.useState(!1),{onFocus:b,onBlur:j,onMouseEnter:C,onMouseLeave:T,onTouchStart:x}=d,z=D.useRef(null);D.useEffect(()=>{if(o==="render"&&E(!0),o==="viewport"){let U=Z=>{Z.forEach(P=>{E(P.isIntersecting)})},_=new IntersectionObserver(U,{threshold:.5});return z.current&&_.observe(z.current),()=>{_.disconnect()}}},[o]),D.useEffect(()=>{if(n){let U=setTimeout(()=>{E(!0)},100);return()=>{clearTimeout(U)}}},[n]);let G=()=>{p(!0)},Y=()=>{p(!1),E(!1)};return u?o!=="intent"?[m,z,{}]:[m,z,{onFocus:Yi(b,G),onBlur:Yi(j,Y),onMouseEnter:Yi(C,G),onMouseLeave:Yi(T,Y),onTouchStart:Yi(x,G)}]:[!1,z,{}]}function Yi(o,d){return u=>{o&&o(u),u.defaultPrevented||d(u)}}function rv({page:o,...d}){let u=vh(),{nonce:n}=Co(),{router:p}=wc(),m=D.useMemo(()=>bm(p.routes,o,p.basename),[p.routes,o,p.basename]);return m?(d.nonce==null&&n&&(d={...d,nonce:n}),u?D.createElement(nv,{page:o,matches:m,...d}):D.createElement(dv,{page:o,matches:m,...d})):null}function ov(o){let{manifest:d,routeModules:u}=Co(),[n,p]=D.useState([]);return D.useEffect(()=>{let m=!1;return Wh(o,d,u).then(E=>{m||p(E)}),()=>{m=!0}},[o,d,u]),n}function nv({page:o,matches:d,...u}){let n=za(),{future:p}=Co(),{basename:m}=wc(),E=D.useMemo(()=>{if(o===n.pathname+n.search+n.hash)return[];let b=Hm(o,m,p.v8_trailingSlashAwareDataRequests,"rsc"),j=!1,C=[];for(let T of d)typeof T.route.shouldRevalidate=="function"?j=!0:C.push(T.route.id);return j&&C.length>0&&b.searchParams.set("_routes",C.join(",")),[b.pathname+b.search]},[m,p.v8_trailingSlashAwareDataRequests,o,n,d]);return D.createElement(D.Fragment,null,E.map(b=>D.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...u})))}function dv({page:o,matches:d,...u}){let n=za(),{future:p,manifest:m,routeModules:E}=Co(),{basename:b}=wc(),{loaderData:j,matches:C}=lv(),T=D.useMemo(()=>rm(o,d,C,m,n,"data"),[o,d,C,m,n]),x=D.useMemo(()=>rm(o,d,C,m,n,"assets"),[o,d,C,m,n]),z=D.useMemo(()=>{if(o===n.pathname+n.search+n.hash)return[];let U=new Set,_=!1;if(d.forEach(P=>{let I=m.routes[P.route.id];!I||!I.hasLoader||(!T.some(be=>be.route.id===P.route.id)&&P.route.id in j&&E[P.route.id]?.shouldRevalidate||I.hasClientLoader?_=!0:U.add(P.route.id))}),U.size===0)return[];let Z=Hm(o,b,p.v8_trailingSlashAwareDataRequests,"data");return _&&U.size>0&&Z.searchParams.set("_routes",d.filter(P=>U.has(P.route.id)).map(P=>P.route.id).join(",")),[Z.pathname+Z.search]},[b,p.v8_trailingSlashAwareDataRequests,j,n,m,T,d,o,E]),G=D.useMemo(()=>ev(x,m),[x,m]),Y=ov(x);return D.createElement(D.Fragment,null,z.map(U=>D.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...u})),G.map(U=>D.createElement("link",{key:U,rel:"modulepreload",href:U,...u})),Y.map(({key:U,link:_})=>D.createElement("link",{key:U,nonce:u.nonce,..._,crossOrigin:_.crossOrigin??u.crossOrigin})))}function cv(...o){return d=>{o.forEach(u=>{typeof u=="function"?u(d):u!=null&&(u.current=d)})}}var uv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{uv&&(window.__reactRouterVersion="7.18.4")}catch{}function pv({basename:o,children:d,useTransitions:u,window:n}){let p=D.useRef();p.current==null&&(p.current=Vg({window:n,v5Compat:!0}));let m=p.current,[E,b]=D.useState({action:m.action,location:m.location}),j=D.useCallback(C=>{u===!1?b(C):D.startTransition(()=>b(C))},[u]);return D.useLayoutEffect(()=>m.listen(j),[m,j]),D.createElement(Gh,{basename:o,children:d,location:E.location,navigationType:E.action,navigator:m,useTransitions:u})}var qm=D.forwardRef(function({onClick:d,discover:u="render",prefetch:n="none",relative:p,reloadDocument:m,replace:E,mask:b,state:j,target:C,to:T,preventScrollReset:x,viewTransition:z,defaultShouldRevalidate:G,...Y},U){let{basename:_,navigator:Z,useTransitions:P}=D.useContext(ra),I=typeof T=="string"&&xc.test(T),be=Tm(T,_);T=be.to;let we=jh(T,{relative:p}),Te=za(),se=null;if(b){let Ae=bc(b,[],Te.mask?Te.mask.pathname:"/",!0);_!=="/"&&(Ae.pathname=Ae.pathname==="/"?_:xa([_,Ae.pathname])),se=Z.createHref(Ae)}let[re,Je,Fe]=iv(n,Y),ot=bv(T,{replace:E,mask:b,state:j,target:C,preventScrollReset:x,relative:p,viewTransition:z,defaultShouldRevalidate:G,useTransitions:P});function ze(Ae){d&&d(Ae),Ae.defaultPrevented||ot(Ae)}let Kt=!(be.isExternal||m),Tt=D.createElement("a",{...Y,...Fe,href:(Kt?se:void 0)||be.absoluteURL||we,onClick:Kt?ze:d,ref:cv(U,Je),target:C,"data-discover":!I&&u==="render"?"true":void 0});return re&&!I?D.createElement(D.Fragment,null,Tt,D.createElement(rv,{page:we})):Tt});qm.displayName="Link";var fv=D.forwardRef(function({"aria-current":d="page",caseSensitive:u=!1,className:n="",end:p=!1,style:m,to:E,viewTransition:b,children:j,...C},T){let x=Xi(E,{relative:C.relative}),z=za(),G=D.useContext(jo),{navigator:Y,basename:U}=D.useContext(ra),_=G!=null&&wv(x)&&b===!0,Z=Y.encodeLocation?Y.encodeLocation(x).pathname:x.pathname,P=z.pathname,I=G&&G.navigation&&G.navigation.location?G.navigation.location.pathname:null;u||(P=P.toLowerCase(),I=I?I.toLowerCase():null,Z=Z.toLowerCase()),I&&U&&(I=$a(I,U)||I);const be=Z!=="/"&&Z.endsWith("/")?Z.length-1:Z.length;let we=P===Z||!p&&P.startsWith(Z)&&P.charAt(be)==="/",Te=I!=null&&(I===Z||!p&&I.startsWith(Z)&&I.charAt(Z.length)==="/"),se={isActive:we,isPending:Te,isTransitioning:_},re=we?d:void 0,Je;typeof n=="function"?Je=n(se):Je=[n,we?"active":null,Te?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let Fe=typeof m=="function"?m(se):m;return D.createElement(qm,{...C,"aria-current":re,className:Je,ref:T,style:Fe,to:E,viewTransition:b},typeof j=="function"?j(se):j)});fv.displayName="NavLink";var mv=D.forwardRef(({discover:o="render",fetcherKey:d,navigate:u,reloadDocument:n,replace:p,state:m,method:E=wo,action:b,onSubmit:j,relative:C,preventScrollReset:T,viewTransition:x,defaultShouldRevalidate:z,...G},Y)=>{let{useTransitions:U}=D.useContext(ra),_=vv(),Z=yv(b,{relative:C}),P=E.toLowerCase()==="get"?"get":"post",I=typeof b=="string"&&xc.test(b),be=we=>{if(j&&j(we),we.defaultPrevented)return;we.preventDefault();let Te=we.nativeEvent.submitter,se=Te?.getAttribute("formmethod")||E,re=()=>_(Te||we.currentTarget,{fetcherKey:d,method:se,navigate:u,replace:p,state:m,relative:C,preventScrollReset:T,viewTransition:x,defaultShouldRevalidate:z});U&&u!==!1?D.startTransition(()=>re()):re()};return D.createElement("form",{ref:Y,method:P,action:Z,onSubmit:n?j:be,...G,"data-discover":!I&&o==="render"?"true":void 0})});mv.displayName="Form";function xv(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Um(o){let d=D.useContext(Xl);return Qe(d,xv(o)),d}function bv(o,{target:d,replace:u,mask:n,state:p,preventScrollReset:m,relative:E,viewTransition:b,defaultShouldRevalidate:j,useTransitions:C}={}){let T=_m(),x=za(),z=Xi(o,{relative:E});return D.useCallback(G=>{if(Zh(G,d)){G.preventDefault();let Y=u!==void 0?u:Yl(x)===Yl(z),U=()=>T(o,{replace:Y,mask:n,state:p,preventScrollReset:m,relative:E,viewTransition:b,defaultShouldRevalidate:j});C?D.startTransition(()=>U()):U()}},[x,T,z,u,n,p,d,o,m,E,b,j,C])}var gv=0,hv=()=>`__${String(++gv)}__`;function vv(){let{router:o}=Um("useSubmit"),{basename:d}=D.useContext(ra),u=Bh(),n=o.fetch,p=o.navigate;return D.useCallback(async(m,E={})=>{let{action:b,method:j,encType:C,formData:T,body:x}=Jh(m,d);if(E.navigate===!1){let z=E.fetcherKey||hv();await n(z,u,E.action||b,{defaultShouldRevalidate:E.defaultShouldRevalidate,preventScrollReset:E.preventScrollReset,formData:T,body:x,formMethod:E.method||j,formEncType:E.encType||C,flushSync:E.flushSync})}else await p(E.action||b,{defaultShouldRevalidate:E.defaultShouldRevalidate,preventScrollReset:E.preventScrollReset,formData:T,body:x,formMethod:E.method||j,formEncType:E.encType||C,replace:E.replace,state:E.state,fromRouteId:u,flushSync:E.flushSync,viewTransition:E.viewTransition})},[n,p,d,u])}function yv(o,{relative:d}={}){let{basename:u}=D.useContext(ra),n=D.useContext(Ja);Qe(n,"useFormAction must be used inside a RouteContext");let[p]=n.matches.slice(-1),m={...Xi(o||".",{relative:d})},E=za();if(o==null){m.search=E.search;let b=new URLSearchParams(m.search),j=b.getAll("index");if(j.some(T=>T==="")){b.delete("index"),j.filter(x=>x).forEach(x=>b.append("index",x));let T=b.toString();m.search=T?`?${T}`:""}}return(!o||o===".")&&p.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:xa([u,m.pathname])),Yl(m)}function wv(o,{relative:d}={}){let u=D.useContext(Dm);Qe(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Um("useViewTransitionState"),p=Xi(o,{relative:d});if(!u.isTransitioning)return!1;let m=$a(u.currentLocation.pathname,n)||u.currentLocation.pathname,E=$a(u.nextLocation.pathname,n)||u.nextLocation.pathname;return To(p.pathname,E)!=null||To(p.pathname,m)!=null}const Gm="etef_lang";let So=[];function Zt(){try{const o=localStorage.getItem(Gm);if(o==="አማ"||o==="ENG")return o}catch{}return"ENG"}function Ev(o){try{localStorage.setItem(Gm,o)}catch{}So.forEach(d=>d(o))}function Sv(o){return So.push(o),()=>{So=So.filter(d=>d!==o)}}const Sc={ENG:{nav:{home:"Home",about:"About Us",aboutSub:{history:"History",vision:"Vision",missionValues:"Mission & Value",service:"Service"},news:"News",vacancies:"Vacancy",partners:"Partners",faq:"FAQ",contact:"Contact Us",join:"Join as Member"},footer:{orgName:"ETHIOPIAN TRANSPORT",orgSub:"EMPLOYERS FEDERATION",desc:"The premier statutory national federation representing commercial transport employers, regional associations, and logistics operators across Ethiopia. Certified May 12, 2018 (Ginbot 4, 2010 E.C.).",preTitle:"Official ETEF Platform",preHeading:"One federation. One trusted digital home.",connectBtn:"Connect with ETEF",exploreTitle:"EXPLORE",discoverTitle:"DISCOVER",connectTitle:"CONNECT",address:"Addis Ababa, Ethiopia",phone:"+251 11 4717787",email:"ethtransfed@gmail.com",support:"Contact Support",rights:"© 2026 Ethiopian Transport Employers Federation. All rights reserved.",privacy:"Privacy Policy",terms:"Terms of Service"},langSelectTitle:"Select Language"},አማ:{nav:{home:"መነሻ",about:"ስለ እኛ",aboutSub:{history:"የመመሥረት ታሪክ",vision:"ራዕይ",missionValues:"ተልዕኮ እና እሴቶች",service:"አገልግሎቶች"},news:"ዜና",vacancies:"ክፍት የሥራ ቦታ",partners:"አጋሮች",faq:"ተደጋጋሚ ጥያቄዎች",contact:"ያግኙን",join:"አባል ይሁኑ"},footer:{orgName:"የኢትዮጵያ ትራንስፖርት",orgSub:"አሠሪዎች ፌዴሬሽን",desc:"በኢትዮጵያ የንግድ ትራንስፖርት አሠሪዎችን፣ የክልል ማኅበራትንና የሎጂስቲክስ ኦፕሬተሮችን የሚወክል ብሔራዊ ፌዴሬሽን። በሕግ የተመዘገበው ግንቦት 04 ቀን 2010 ዓ/ም ነው።",preTitle:"ይፋዊ የፌዴሬሽኑ መድረክ",preHeading:"አንድ ፌዴሬሽን። አንድ የታመነ የጋራ ድምፅ።",connectBtn:"ከፌዴሬሽኑ ጋር ይገናኙ",exploreTitle:"አስስ",discoverTitle:"አግኝ",connectTitle:"ያግኙን",address:"አዲስ አበባ፣ ኢትዮጵያ",phone:"+251 11 4717787",email:"ethtransfed@gmail.com",support:"የድጋፍ አገልግሎት ያግኙ",rights:"© 2026 የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን። መብቱ በሕግ የተጠበቀ ነው።",privacy:"የግላዊነት ፖሊሲ",terms:"የአጠቃቀም ደንቦች"},langSelectTitle:"ቋንቋ ይምረጡ"}};function Ke(o,d){const u=d==="አማ",n=Sc[d].nav,p=[{path:"/",label:n.home,key:"home"},{path:"/about",label:n.about,key:"about"},{path:"/news",label:n.news,key:"news"},{path:"/vacancies",label:n.vacancies,key:"vacancies"},{path:"/partners",label:n.partners,key:"partners"},{path:"/faq",label:n.faq,key:"faq"},{path:"/contact",label:n.contact,key:"contact"}],m=(C,T)=>T==="home"?o==="/"||o==="/home":T==="about"?o==="/about"||o.startsWith("/about#"):T==="vacancies"?o==="/vacancies"||o==="/vacancy":T==="partners"?o==="/partners"||o==="/partner":T==="faq"?o==="/faq"||o==="/faqs":T==="contact"?o==="/contact"||o==="/contact-us":o===C,E=p.map(C=>{const x=m(C.path,C.key)?"bg-white text-primary-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors shadow-sm":"text-white hover:bg-primary-700 px-3 py-2 rounded-md text-sm font-medium transition-colors";return C.key==="about"?`
          <div class="relative group about-dropdown-container">
              <a href="${C.path}" class="${x} inline-flex items-center gap-1.5 cursor-pointer" id="nav-about-link">
                  <span>${C.label}</span>
                  <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-200 dropdown-chevron opacity-80"></i>
              </a>
              <div class="about-dropdown-menu hidden absolute left-0 top-full pt-2 w-56 z-50">
                  <div class="bg-white rounded-lg shadow-xl border border-slate-100 py-1.5 text-slate-800 text-sm overflow-hidden ring-1 ring-black/5 animate-in fade-in slide-in-from-top-1 duration-150">
                      <a href="/about#history" class="about-sub-link flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition-colors">
                          <i class="fa-solid fa-landmark text-primary-600 w-4 text-center"></i>
                          <span>${n.aboutSub?.history||"History"}</span>
                      </a>
                      <a href="/about#vision" class="about-sub-link flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition-colors">
                          <i class="fa-solid fa-eye text-primary-600 w-4 text-center"></i>
                          <span>${n.aboutSub?.vision||"Vision"}</span>
                      </a>
                      <a href="/about#mission-values" class="about-sub-link flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition-colors">
                          <i class="fa-solid fa-bullseye text-primary-600 w-4 text-center"></i>
                          <span>${n.aboutSub?.missionValues||"Mission & Value"}</span>
                      </a>
                      <a href="/about#services-section" class="about-sub-link flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition-colors border-t border-slate-100 mt-0.5">
                          <i class="fa-solid fa-handshake-angle text-primary-600 w-4 text-center"></i>
                          <span>${n.aboutSub?.service||"Service"}</span>
                      </a>
                  </div>
              </div>
          </div>
        `:`<a href="${C.path}" class="${x}">${C.label}</a>`}).join(`
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
                            <i class="fa-solid fa-globe"></i> <span class="current-lang-text">${d}</span> <i class="fa-solid fa-chevron-down text-xs"></i>
                        </button>
                        <div class="lang-dropdown-menu hidden absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-xl border border-slate-100 py-1.5 z-50 text-slate-800 text-sm">
                            <div class="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">${u?"ቋንቋ ይምረጡ":"Select Language"}</div>
                            <button type="button" class="lang-select-option w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center justify-between text-xs ${d==="ENG"?"font-semibold text-primary-700 bg-primary-50/50":"font-medium text-slate-700 hover:text-primary-600"} cursor-pointer" data-lang="ENG" data-lang-name="English">
                                <span class="flex items-center gap-2">🇬🇧 English</span>
                                ${d==="ENG"?'<i class="fa-solid fa-check text-primary-600 text-xs"></i>':'<span class="w-3.5"></span>'}
                            </button>
                            <button type="button" class="lang-select-option w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center justify-between text-xs ${d==="አማ"?"font-semibold text-primary-700 bg-primary-50/50":"font-medium text-slate-700 hover:text-primary-600"} cursor-pointer" data-lang="አማ" data-lang-name="Amharic">
                                <span class="flex items-center gap-2">🇪🇹 አማርኛ</span>
                                ${d==="አማ"?'<i class="fa-solid fa-check text-primary-600 text-xs"></i>':'<span class="w-3.5"></span>'}
                            </button>
                        </div>
                    </div>
                    <a href="/membership" class="${o==="/membership"||o==="/memberships"?"bg-white text-primary-600":"border-2 border-white text-white hover:bg-white hover:text-primary-600"} px-4 py-2 rounded-md text-sm font-semibold transition-all shadow-sm">
                        ${n.join}
                    </a>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center gap-2">
                    <div class="relative lang-dropdown-container">
                        <button class="lang-dropdown-btn flex items-center gap-1.5 text-white hover:text-gray-200 transition-colors text-xs font-semibold px-2 py-1 rounded border border-white/30 cursor-pointer">
                            <i class="fa-solid fa-globe"></i> <span>${d}</span>
                        </button>
                        <div class="lang-dropdown-menu hidden absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-slate-100 py-1.5 z-50 text-slate-800 text-sm">
                            <button type="button" class="lang-select-option w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center justify-between text-xs ${d==="ENG"?"font-semibold text-primary-700 bg-primary-50/50":"font-medium text-slate-700"} cursor-pointer" data-lang="ENG" data-lang-name="English">
                                <span>🇬🇧 English</span>
                                ${d==="ENG"?'<i class="fa-solid fa-check text-primary-600 text-xs"></i>':'<span class="w-3.5"></span>'}
                            </button>
                            <button type="button" class="lang-select-option w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center justify-between text-xs ${d==="አማ"?"font-semibold text-primary-700 bg-primary-50/50":"font-medium text-slate-700"} cursor-pointer" data-lang="አማ" data-lang-name="Amharic">
                                <span>🇪🇹 አማርኛ</span>
                                ${d==="አማ"?'<i class="fa-solid fa-check text-primary-600 text-xs"></i>':'<span class="w-3.5"></span>'}
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
  `}function $e(o){const d=o==="አማ",u=Sc[o].footer;return`
    <footer class="bg-primary-600 text-white border-t border-primary-500">
        <!-- Pre-footer CTA Banner -->
        <div class="bg-primary-700 py-12 border-b border-white/15 relative overflow-hidden">
            <div class="absolute inset-0 z-0 bg-[url('/images/hero_truck.jpg')] bg-cover bg-center animate-slow-motion"></div>
            <div class="absolute inset-0 z-0 bg-primary-800/85"></div>
            <div class="max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs font-bold uppercase tracking-wider text-blue-200 block mb-1">${u.preTitle}</span>
                    <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">${u.preHeading}</h2>
                    <p class="text-blue-100 text-sm mt-1 max-w-2xl">${d?"17 የአሠሪ ማኅበራትንና ከ6,652 በላይ የንግድ ትራንስፖርት ኦፕሬተሮችን በአንድነት ያስተባበረ ብሔራዊ ፌዴሬሽን።":"Uniting 17 employers' associations and over 6,652 commercial transport operators nationwide."}</p>
                </div>
                <div class="flex items-center gap-3 shrink-0">
                    <a href="/contact" class="px-6 py-3 rounded-lg bg-white text-primary-700 hover:bg-slate-100 font-bold text-sm transition-all shadow-md">
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
                        <li><a href="/about" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${d?"ስለ ፌዴሬሽኑ":"About ETEF"}</a></li>
                        <li><a href="/about#history" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${d?"የመመሥረት ታሪክ":"Founding History"}</a></li>
                        <li><a href="/about#leadership" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${d?"የሥራ አመራር ቦርድ":"Executive Board"}</a></li>
                        <li><a href="/membership" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${d?"የአባልነት መመሪያ":"Membership Guide"}</a></li>
                        <li><a href="/partners" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${d?"ስትራቴጂካዊ አጋሮች":"Strategic Partners"}</a></li>
                    </ul>
                </div>

                <!-- Column 3: Discover Links -->
                <div>
                    <h3 class="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-white pl-2.5">${u.discoverTitle}</h3>
                    <ul class="space-y-2.5 text-sm text-blue-100">
                        <li><a href="/news" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${d?"የትራንስፖርት ዜናዎች":"Industry News"}</a></li>
                        <li><a href="/vacancies" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${d?"ክፍት የሥራ ቦታዎች":"Job Openings"}</a></li>
                        <li><a href="/home#corridors" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${d?"የንግድ ኮሪደሮች ሁኔታ":"Corridor Watch"}</a></li>
                        <li><a href="/faq" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-angle-right text-[10px] text-blue-300"></i> ${d?"ተደጋጋሚ ጥያቄዎች":"Regulatory FAQ"}</a></li>
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
  `}const Tv=`
    ${Ke("/","ENG")}

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
                    <a href="/about" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-6 py-3.5 rounded-lg font-semibold text-sm shadow-lg transition-all hover:border-white/50">
                        <span>Explore About Us</span>
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                    <a href="/membership" class="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-7 py-3.5 rounded-lg font-bold text-sm shadow-xl shadow-primary-600/40 transition-all transform hover:-translate-y-0.5">
                        <span>Become a Member</span>
                        <i class="fa-solid fa-user-plus text-xs"></i>
                    </a>
                </div>

                <!-- Floating Glassmorphic Institutional Stats -->
                <div class="max-w-5xl mx-auto">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        <div class="bg-white/95 hover:bg-white p-6 rounded-lg border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-users-viewfinder"></i>
                            </div>
                            <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 block">6,652+</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">Registered Members</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">Commercial Transporters</span>
                        </div>

                        <div class="bg-white/95 hover:bg-white p-6 rounded-lg border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-sitemap"></i>
                            </div>
                            <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 block">17</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">Employers' Associations</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">Regional & Sector Unions</span>
                        </div>

                        <div class="bg-white/95 hover:bg-white p-6 rounded-lg border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-route"></i>
                            </div>
                            <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 block">4</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">Key Corridors Monitored</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">Djibouti, Modjo, Moyale, Berbera</span>
                        </div>

                        <div class="bg-white/95 hover:bg-white p-6 rounded-lg border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
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
                    <div class="group bg-white rounded-lg border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
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

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
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
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="djibouti">
                                <span>View Corridor Advisory</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Corridor 2: Modjo Multimodal Dry Port -->
                    <div class="group bg-white rounded-lg border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
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

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
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
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="modjo">
                                <span>View Port Advisory</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Corridor 3: Moyale – Lamu Corridor -->
                    <div class="group bg-white rounded-lg border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
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

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
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
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="moyale">
                                <span>View Border Advisory</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Corridor 4: Berbera Port Corridor -->
                    <div class="group bg-white rounded-lg border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
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

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
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
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="berbera">
                                <span>View Corridor Advisory</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Emergency Corridor Hotline Banner -->              <div class="mt-8 rounded-lg p-6 text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl relative overflow-hidden">
                    <div class="absolute inset-0 z-0 bg-[url('/images/hero_expressway.jpg')] bg-cover bg-center animate-slow-motion"></div>
                    <div class="absolute inset-0 z-0 bg-black/50"></div>
                    <div class="flex items-center gap-4 text-center md:text-left relative z-10">
                        <div class="w-12 h-12 rounded-lg bg-white/20 text-white flex items-center justify-center text-xl shrink-0 shadow-inner">
                            <i class="fa-solid fa-truck-ramp-box"></i>
                        </div>
                        <div>
                            <span class="font-bold text-base sm:text-lg block tracking-tight">ETEF National 24/7 Corridor Emergency & Breakdown Helpline</span>
                            <p class="text-xs sm:text-sm text-blue-100 mt-0.5">Encountering arbitrary delays, security issues, or breakdown between Modjo, Galafi, or Moyale?</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto justify-center">
                        <a href="tel:+251114717787" class="px-5 py-2.5 bg-white text-primary-700 hover:bg-slate-100 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-all">
                            <i class="fa-solid fa-phone"></i>
                            <span>+251 11 4717787</span>
                        </a>
                        <button id="btn-corridor-incident-report" class="px-4 py-2.5 bg-primary-700 hover:bg-primary-800 text-white border border-white/30 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2">
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
                    <div class="bg-white rounded-lg p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                        <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
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
                    <div class="bg-white rounded-lg p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                        <div class="w-14 h-14 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
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
                    <a href="/about" class="inline-flex items-center gap-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-3.5 rounded-lg shadow-md transition-all text-sm">
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
                    <div class="card-hover-fx bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
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
                    <div class="card-hover-fx bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
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
                    <div class="card-hover-fx bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
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
                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-scale-balanced"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">Legal Representation & Defense</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Representing transport employers before judicial courts, administrative tribunals, and arbitration boards to protect business assets and contractual rights.
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-handshake-angle"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">Collective Bargaining</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Leading structured negotiations with transport labor unions to establish fair, productive, and balanced collective agreements under Proclamation No. 1156/2012.
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-scroll"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">Policy & Regulatory Reform</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Conducting empirical research and consulting with federal ministries on transit tariffs, taxation, customs checkpoints, and logistics master plans.
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-user-graduate"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">Professional Training</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Delivering specialized leadership, fleet management, logistics technology, and workplace occupational safety programs for enterprise members.
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-network-wired"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">Freight Market Networking</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Connecting member fleets with domestic and cross-border commercial opportunities, industrial parks, and agricultural export corridors.
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
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
                    <a href="/membership" class="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg text-sm shadow-md hover:shadow-lg transition-all">
                        Apply for Membership
                    </a>
                    <a href="/contact" class="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg text-sm shadow-sm transition-all">
                        Contact Secretariat
                    </a>
                </div>
            </div>
        </section>
    </main>

    ${$e("ENG")}
`,Av=`
    ${Ke("/","አማ")}

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
                    <a href="/about" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-6 py-3.5 rounded-lg font-semibold text-sm shadow-lg transition-all hover:border-white/50">
                        <span>ስለ ፌዴሬሽኑ ይወቁ</span>
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                    <a href="/membership" class="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-7 py-3.5 rounded-lg font-bold text-sm shadow-xl shadow-primary-600/40 transition-all transform hover:-translate-y-0.5">
                        <span>አባል ይሁኑ</span>
                        <i class="fa-solid fa-user-plus text-xs"></i>
                    </a>
                </div>

                <!-- Floating Glassmorphic Institutional Stats -->
                <div class="max-w-5xl mx-auto">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        <div class="bg-white/95 hover:bg-white p-6 rounded-lg border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-users-viewfinder"></i>
                            </div>
                            <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 block">6,652+</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">የተመዘገቡ አባላት</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">የትራንስፖርት ኦፕሬተሮች</span>
                        </div>

                        <div class="bg-white/95 hover:bg-white p-6 rounded-lg border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-sitemap"></i>
                            </div>
                            <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 block">17</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">የአሠሪ ማኅበራት</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">ብሔራዊና ክልላዊ ማኅበራት</span>
                        </div>

                        <div class="bg-white/95 hover:bg-white p-6 rounded-lg border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-route"></i>
                            </div>
                            <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 block">4</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">ስትራቴጂካዊ የንግድ ኮሪደሮች</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">ጅቡቲ፣ ሞጆ፣ ሞያሌ፣ በርበራ</span>
                        </div>

                        <div class="bg-white/95 hover:bg-white p-6 rounded-lg border border-white/50 shadow-2xl hover:shadow-cyan-500/10 transition-all card-hover-fx text-left backdrop-blur-md">
                            <div class="w-11 h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-3.5 text-lg">
                                <i class="fa-solid fa-certificate"></i>
                            </div>
                            <span class="text-xl sm:text-2xl font-extrabold text-slate-900 block">ግንቦት 04/2010</span>
                            <span class="text-xs font-semibold text-slate-700 block mt-1">ሕጋዊ የትራንስፖርት አሰሪዎች ፌዴሬሽን የምስረታ ጊዜ</span>
                            <span class="text-[11px] text-slate-500 block mt-0.5">የሰራተኛና ማህበራዊ ጉዳይ ሚኒስቴር እውቅና</span>
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
                    <div class="group bg-white rounded-lg border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
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

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
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
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="djibouti">
                                <span>የኮሪደሩን መረጃ ይመልከቱ</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Corridor 2: Modjo Multimodal Dry Port -->
                    <div class="group bg-white rounded-lg border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
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

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
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
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="modjo">
                                <span>የወደቡን መረጃ ይመልከቱ</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Corridor 3: Moyale – Lamu Corridor -->
                    <div class="group bg-white rounded-lg border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
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

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
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
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="moyale">
                                <span>የድንበሩን መረጃ ይመልከቱ</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Corridor 4: Berbera Port Corridor -->
                    <div class="group bg-white rounded-lg border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
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

                                <div class="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
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
                            <button class="corridor-advisory-btn w-full py-2.5 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white border border-primary-200 hover:border-transparent rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn" data-corridor-id="berbera">
                                <span>የኮሪደሩን መረጃ ይመልከቱ</span>
                                <i class="fa-solid fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Emergency Corridor Hotline Banner -->
                <div class="mt-8 rounded-lg p-6 text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl relative overflow-hidden">
                    <div class="absolute inset-0 z-0 bg-[url('/images/hero_expressway.jpg')] bg-cover bg-center animate-slow-motion"></div>
                    <div class="absolute inset-0 z-0 bg-black/50"></div>
                    <div class="flex items-center gap-4 text-center md:text-left relative z-10">
                        <div class="w-12 h-12 rounded-lg bg-white/20 text-white flex items-center justify-center text-xl shrink-0 shadow-inner">
                            <i class="fa-solid fa-truck-ramp-box"></i>
                        </div>
                        <div>
                            <span class="font-bold text-base sm:text-lg block tracking-tight">የኢትራአፌ የ24/7 የኮሪደር ድንገተኛ አደጋና የመኪና ብልሽት የእርዳታ መስመር</span>
                            <p class="text-xs sm:text-sm text-blue-100 mt-0.5">በሞጆ፣ ገላፊ ወይም ሞያሌ መስመሮች ላይ ሕገወጥ መስተጓጎል፣ የጸጥታ ችግር ወይም የቴክኒክ ብልሽት ገጥሞዎታል?</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto justify-center">
                        <a href="tel:+251114717787" class="px-5 py-2.5 bg-white text-primary-700 hover:bg-slate-100 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-all">
                            <i class="fa-solid fa-phone"></i>
                            <span>+251 11 4717787</span>
                        </a>
                        <button id="btn-corridor-incident-report" class="px-4 py-2.5 bg-primary-700 hover:bg-primary-800 text-white border border-white/30 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2">
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
                    <div class="bg-white rounded-lg p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                        <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
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
                    <div class="bg-white rounded-lg p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                        <div class="w-14 h-14 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
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
                    <a href="/about" class="inline-flex items-center gap-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-3.5 rounded-lg shadow-md transition-all text-sm">
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
                    <div class="card-hover-fx bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
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
                    <div class="card-hover-fx bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
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
                    <div class="card-hover-fx bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
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
                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-scale-balanced"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">የሕግ ከለላና የፍርድ ቤት ውክልና</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            የትራንስፖርት አሠሪዎችን በፍርድ ቤቶች፣ በአስተዳደራዊ አካላትና በግልግል ጉባኤዎች ፊት በመወከል የንግድ ሀብታቸውንና የውል መብታቸውን ማስከበር።
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-handshake-angle"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">የኅብረት ስምምነት ድርድር</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            ከሠራተኛ ማኅበራት ጋር በጋራ በመደራደር ፍትሃዊ፣ ሚዛናዊና ዘላቂ የሆነ የኢንዱስትሪ ሰላም በአዋጅ ቁጥር 1156/2012 መሠረት መገንባት።
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-scroll"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">የፖሊሲና መመሪያዎች ማሻሻያ</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            በዘርፉ ላይ በጥናት የተደገፉ የውሳኔ ሃሳቦችን በማዘጋጀት ከመንግሥት አስፈፃሚ አካላት ጋር በታሪፍ፣ ታክስና ፍተሻ ጣቢያዎች ዙሪያ መወያየት።
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-user-graduate"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">የሙያና አመራር አቅም ግንባታ</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            ለአባላትና አመራሮች የተሽከርካሪ ስምሪት አስተዳደር፣ አዳዲስ ቴክኖሎጂዎችና የሥራ ቦታ ደህንነት ዙሪያ ተግባራዊ ስልጠናዎችን መስጠት።
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
                            <i class="fa-solid fa-network-wired"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg mb-2">የገበያና የጭነት ትስስር ማመቻቸት</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            የአባላትን ተሽከርካሪዎች ከሀገር ውስጥና ከድንበር ተሻጋሪ የንግድ ዕድሎች፣ ከኢንዱስትሪ ፓርኮችና ከወጪ ንግድ ዘርፎች ጋር ማስተሳሰር።
                        </p>
                    </div>

                    <div class="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-5">
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
                    <a href="/membership" class="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg text-sm shadow-md hover:shadow-lg transition-all">
                        የአባልነት ማመልከቻ ያስገቡ
                    </a>
                    <a href="/contact" class="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg text-sm shadow-sm transition-all">
                        ዋና መሥሪያ ቤቱን ያነጋግሩ
                    </a>
                </div>
            </div>
        </section>
    </main>

    ${$e("አማ")}
`,om={title:{ENG:"Ethiopian Transport Employers Federation - Official National Platform",አማ:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን - ይፋዊ ብሔራዊ መድረክ"},markup:{ENG:Tv,አማ:Av}},jv=`
    ${Ke("/about","ENG")}

    <main class="flex-grow">
        <div class="relative text-white pt-10 pb-20 overflow-hidden bg-slate-950">
            <!-- Slow-Motion Background Image relating to ETEF -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img 
                    src="/images/about_hero_fleet.jpg" 
                    alt="Ethiopian Transport Fleet Convoy" 
                    class="w-full h-full object-cover object-center animate-slow-motion filter brightness-95"
                />
                <!-- Deep Royal Blue & Gradient Overlays for High Contrast Readability -->
                <div class="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/80 to-primary-950/90"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-primary-950/50"></div>
            </div>

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
                        <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs font-semibold text-white uppercase tracking-widest mb-4">
                            <i class="fa-solid fa-scale-balanced text-white"></i> FDRE Constitution Art. 31 • Proclamation No. 1156/2012
                        </div>
                        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-sm">
                            Ethiopian Transport Employers' Federation
                        </h1>
                        <p class="mt-4 text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl">
                            Established on May 12, 2018 (Ginbot 4, 2010 E.C.) by 17 employers' associations comprising over 6,652 members. Dedicated to industrial peace, legal advocacy, and operational efficiency across Ethiopia's transport sector.
                        </p>
                    </div>
                    <div class="flex flex-wrap items-center gap-3 shrink-0">
                        <a href="#services-section" class="px-5 py-2.5 bg-white text-primary-700 hover:bg-slate-100 rounded-lg text-sm font-bold transition-all shadow-md flex items-center gap-2">
                            <i class="fa-solid fa-handshake-angle text-xs"></i> Federation Services
                        </a>
                        <a href="#leadership-section" class="px-5 py-2.5 bg-black/50 hover:bg-primary-700 text-white border border-white/30 backdrop-blur-md rounded-lg text-sm font-semibold transition-all flex items-center gap-2">
                            <i class="fa-solid fa-users text-xs"></i> Board of Directors (13)
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <section class="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="bg-white rounded-lg p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">6,652+</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Foundation Members</div>
                    </div>
                </div>

                <div class="bg-white rounded-lg p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-sitemap"></i>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">17</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Employers' Associations</div>
                    </div>
                </div>

                <div class="bg-white rounded-lg p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-truck-moving"></i>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">39</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Founding Cargo Union</div>
                    </div>
                </div>

                <div class="bg-white rounded-lg p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-certificate"></i>
                    </div>
                    <div>
                        <div class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">May 12, 2018</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Ginbot 4, 2010 E.C. Certified</div>
                    </div>
                </div>
            </div>
        </section>

        <section id="history" class="py-16 md:py-24 bg-white scroll-mt-20">
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
                        <div class="relative rounded-lg overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-900">
                            <img src="/images/about_vision.jpg" alt="Commercial Transport Fleets in Ethiopia" class="w-full h-[420px] object-cover opacity-90 hover:scale-105 transition-transform duration-700">
                            
                            <div class="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-xs font-semibold flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-primary-400"></span>
                                <span>Certified Legal Employer Federation</span>
                            </div>

                            <div class="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md p-5 rounded-lg shadow-xl border border-slate-200">
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

        <section id="vision" class="py-16 text-white relative overflow-hidden scroll-mt-20">
              <div class="absolute inset-0 z-0 bg-[url('/images/fleet_convoys.jpg')] bg-cover bg-center animate-slow-motion"></div>
              <div class="absolute inset-0 z-0 bg-black/50"></div>
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center max-w-3xl mx-auto mb-12">
                    <span class="text-blue-200 font-bold tracking-wider text-xs uppercase mb-2 block">OFFICIAL CHARTER MANDATE</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Vision, Mission & Strategic Goal</h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white text-slate-900 p-8 rounded-lg shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="h-14 w-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-6">
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

                    <div class="bg-white text-slate-900 p-8 rounded-lg shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="h-14 w-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-6">
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

                    <div class="bg-white text-slate-900 p-8 rounded-lg shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="h-14 w-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-6">
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

        <section id="mission-values" class="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">FEDERATION VALUES</span>
                    <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Institutional Values & Ethics</h2>
                    <p class="text-base sm:text-lg text-slate-600">
                        The Federation's primary value is <strong>Member Satisfaction</strong>, supported by six core institutional values:
                    </p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div class="bg-white rounded-lg p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-handshake"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Integrity</h4>
                        <span class="text-xs text-slate-500 mt-1 block">Ethical Transparency</span>
                    </div>

                    <div class="bg-white rounded-lg p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Respect</h4>
                        <span class="text-xs text-slate-500 mt-1 block">Mutual Regard</span>
                    </div>

                    <div class="bg-white rounded-lg p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Diligence</h4>
                        <span class="text-xs text-slate-500 mt-1 block">Commitment to Service</span>
                    </div>

                    <div class="bg-white rounded-lg p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-shield-halved"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Loyalty</h4>
                        <span class="text-xs text-slate-500 mt-1 block">Fidelity to Members</span>
                    </div>

                    <div class="bg-white rounded-lg p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-people-group"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Teamwork</h4>
                        <span class="text-xs text-slate-500 mt-1 block">Cohesive Action</span>
                    </div>

                    <div class="bg-white rounded-lg p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-dove"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">Industrial Peace</h4>
                        <span class="text-xs text-slate-500 mt-1 block">Harmonious Growth</span>
                    </div>
                </div>
            </div>
        </section>

        <section id="services-section" class="py-20 bg-white scroll-mt-20">
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
                    <div class="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-blue-100 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
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

                    <div class="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
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

                    <div class="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
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

                    <div class="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
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

                    <div class="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
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

                    <div class="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
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

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Berehane Zeru.jpg" alt="Ato Berehane Zeru" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">President</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">Ato Berehane Zeru</h3>
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

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Mesele Hagos.jpg" alt="Ato Mesele Hagos" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">Vice President</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">Ato Mesele Hagos</h3>
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

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Derje Legesse.jpg" alt="Ato Derje Legesse" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">Secretary</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">Ato Derje Legesse</h3>
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

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex flex-col items-center justify-center p-6 border-b border-white/5">
                        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-600/20 via-transparent to-transparent pointer-events-none"></div>
                        <div class="relative z-10 w-24 h-24 rounded-full bg-slate-800/90 border-2 border-primary-400/40 flex items-center justify-center shadow-xl mb-3 group-hover:scale-105 group-hover:border-primary-400/70 transition-all duration-300">
                            <i class="fa-solid fa-user-tie text-4xl text-primary-300"></i>
                        </div>
                        <span class="relative z-10 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-[11px] font-semibold rounded-full uppercase tracking-wider shadow-sm">
                            Board of Directors
                        </span>
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">Board Member</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">Ato Tadsse Ejegu</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            Commercial Haulier Operations & Fleet Coordination. Advising on route operations and regional transport logistics.
                        </p>
                        <button type="button" data-bio="tadsse" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>Read Full Biography</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Dejene Luchie.jpg" alt="Ato Dejene Luchie" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">Board Member</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">Ato Dejene Luchie</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            Dry Cargo Logistics & Fleet Governance. Championing transport operators and cross-regional haulier interests.
                        </p>
                        <button type="button" data-bio="dejene" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>Read Full Biography</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Nurdin Ditamo.jpg" alt="Ato Nurdin Ditamo" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">Board Member</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">Ato Nurdin Ditamo</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            Fleet Modernization & Kaizen Management. Driving vehicle safety standards and fleet maintenance best practices.
                        </p>
                        <button type="button" data-bio="nurdin" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>Read Full Biography</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Mekonnen Workie.jpg" alt="Ato Mekonnen Workie" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">Board Member</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">Ato Mekonnen Workie</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            Transport Economics & Business Planning. Spearheading market linkages, tariff models, and operator competitiveness.
                        </p>
                        <button type="button" data-bio="mekonnen" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>Read Full Biography</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Seid Ibrahim.jpg" alt="Ato Seid Ibrahim" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">Board Member</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">Ato Seid Ibrahim</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            Corridor Operations & Regional Transport. Ensuring checkpoint efficiency, transit safety, and driver welfare.
                        </p>
                        <button type="button" data-bio="seid" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>Read Full Biography</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Msfin Eshetu.jpg" alt="Ato Msfin Eshetu" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">Board Member</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">Ato Msfin Eshetu</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            Passenger & Freight Operations. Coordinating vocational certifications, labor law standards, and fleet inspections.
                        </p>
                        <button type="button" data-bio="msfin" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>Read Full Biography</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Mohammed Hassan.jpg" alt="Ato Mohammed Hassan" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">Board Member</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">Ato Mohammed Hassan</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            Regional Operator Relations. Bridging inter-regional associations with national transport policy agendas.
                        </p>
                        <button type="button" data-bio="mohammed" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>Read Full Biography</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex flex-col items-center justify-center p-6 border-b border-white/5">
                        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-600/20 via-transparent to-transparent pointer-events-none"></div>
                        <div class="relative z-10 w-24 h-24 rounded-full bg-slate-800/90 border-2 border-primary-400/40 flex items-center justify-center shadow-xl mb-3 group-hover:scale-105 group-hover:border-primary-400/70 transition-all duration-300">
                            <i class="fa-solid fa-user-tie text-4xl text-primary-300"></i>
                        </div>
                        <span class="relative z-10 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-[11px] font-semibold rounded-full uppercase tracking-wider shadow-sm">
                            Board of Directors
                        </span>
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">Board Member</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">Ato Abeba Kassa</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            Commercial Logistics & Transport Enterprise Growth. Promoting public-private dialogue and trade exhibitions.
                        </p>
                        <button type="button" data-bio="abeba" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>Read Full Biography</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Yergalem Sefani.jpg" alt="Ato Yergalem Sefani" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">Board Member</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">Ato Yergalem Sefani</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            Legal Defense & Regulatory Compliance. Advocating before arbitration benches, judicial forums, and statutory bodies.
                        </p>
                        <button type="button" data-bio="yergalem" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>Read Full Biography</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Engeda H.Maryam.jpg" alt="Ato Engeda H/Maryam" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">Board Member</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">Ato Engeda H/Maryam</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            Transport Innovation & Fleet Technology. Advancing digital logbooks, fuel conservation, and technical benchmarking.
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
                    <div class="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-blue-100 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
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

                    <div class="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
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

                    <div class="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
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

                    <div class="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
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

        <section class="py-16 text-white relative overflow-hidden">
              <div class="absolute inset-0 z-0 bg-[url('/images/hero_truck.jpg')] bg-cover bg-center animate-slow-motion"></div>
              <div class="absolute inset-0 z-0 bg-black/50"></div>
              <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <span class="text-blue-200 font-bold tracking-wider text-xs uppercase mb-3 block">JOIN ETEF</span>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">Partner with the Federation Today</h2>
                <p class="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                    Enhance your transport services and productivity by entrusting your challenges and concerns to the Ethiopian Transport Employers' Federation.
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a href="/membership" class="inline-flex justify-center items-center px-8 py-3.5 bg-white text-primary-700 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors shadow-md">
                        Become a Member
                    </a>
                    <a href="/contact" class="inline-flex justify-center items-center px-8 py-3.5 bg-primary-700 border border-white/30 text-white rounded-lg text-sm font-semibold hover:bg-primary-800 transition-colors shadow-sm">
                        Contact the Secretariat
                    </a>
                </div>
            </div>
        </section>
    </main>

    ${$e("ENG")}
`,kv=`
    ${Ke("/about","አማ")}

    <main class="flex-grow">
        <div class="relative text-white pt-10 pb-20 overflow-hidden bg-slate-950">
            <!-- Slow-Motion Background Image relating to ETEF -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img 
                    src="/images/about_hero_fleet.jpg" 
                    alt="የኢትዮጵያ ትራንስፖርት የጭነትና የሕዝብ ተሽከርካሪዎች ኮንቮይ" 
                    class="w-full h-full object-cover object-center animate-slow-motion filter brightness-95"
                />
                <!-- Deep Royal Blue & Gradient Overlays for High Contrast Readability -->
                <div class="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/80 to-primary-950/90"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-primary-950/50"></div>
            </div>

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
                        <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs font-semibold text-white uppercase tracking-widest mb-4">
                            <i class="fa-solid fa-scale-balanced text-white"></i> በኢ.ፌ.ዲ.ሪ. ሕገ መንግሥት አንቀጽ 31 • አዋጅ ቁጥር 1156/2012
                        </div>
                        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-sm">
                            የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን
                        </h1>
                        <p class="mt-4 text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl">
                            በስሩ ከ6,652 በላይ አባላት ያሏቸውን 17 የአሠሪ ማኅበራትን በማቀፍ ግንቦት 04 ቀን 2010 ዓ/ም የተመሠረተ። የኢንዱስትሪውን ሰላም ለማስፈን፣ የአሠሪዎችን መብት ለማስከበርና ዘርፉን ለማዘመን የሚሰራ ብሔራዊ ተቋም።
                        </p>
                    </div>
                    <div class="flex flex-wrap items-center gap-3 shrink-0">
                        <a href="#services-section" class="px-5 py-2.5 bg-white text-primary-700 hover:bg-slate-100 rounded-lg text-sm font-bold transition-all shadow-md flex items-center gap-2">
                            <i class="fa-solid fa-handshake-angle text-xs"></i> የፌዴሬሽኑ አገልግሎቶች
                        </a>
                        <a href="#leadership-section" class="px-5 py-2.5 bg-black/50 hover:bg-primary-700 text-white border border-white/30 backdrop-blur-md rounded-lg text-sm font-semibold transition-all flex items-center gap-2">
                            <i class="fa-solid fa-users text-xs"></i> የሥራ አስፈጻሚ ቦርድ (13)
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <section class="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="bg-white rounded-lg p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">6,652+</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">የፌዴሬሽኑ አባላት</div>
                    </div>
                </div>

                <div class="bg-white rounded-lg p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-sitemap"></i>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">17</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">የአሠሪ ማኅበራት</div>
                    </div>
                </div>

                <div class="bg-white rounded-lg p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-truck-moving"></i>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">39</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">የደረቅ ጭነት ኀብረት ማኅበራት</div>
                    </div>
                </div>

                <div class="bg-white rounded-lg p-6 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        <i class="fa-solid fa-certificate"></i>
                    </div>
                    <div>
                        <div class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">ግንቦት 04/2010</div>
                        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">ሕጋዊ የዕውቅና ምስክር</div>
                    </div>
                </div>
            </div>
        </section>

        <section id="history" class="py-16 md:py-24 bg-white scroll-mt-20">
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
                        <div class="relative rounded-lg overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-900">
                            <img src="/images/about_vision.jpg" alt="የኢትዮጵያ የጭነት ትራንስፖርት" class="w-full h-[420px] object-cover opacity-90 hover:scale-105 transition-transform duration-700">
                            
                            <div class="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-xs font-semibold flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-primary-400"></span>
                                <span>ሕጋዊ ዕውቅና ያለው የአሠሪዎች ፌዴሬሽን</span>
                            </div>

                            <div class="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md p-5 rounded-lg shadow-xl border border-slate-200">
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

        <section id="vision" class="py-16 text-white relative overflow-hidden scroll-mt-20">
              <div class="absolute inset-0 z-0 bg-[url('/images/fleet_convoys.jpg')] bg-cover bg-center animate-slow-motion"></div>
              <div class="absolute inset-0 z-0 bg-black/50"></div>
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center max-w-3xl mx-auto mb-12">
                    <span class="text-blue-200 font-bold tracking-wider text-xs uppercase mb-2 block">ይፋዊ የፌዴሬሽኑ ዓላማ</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">ራዕይ፣ ተልዕኮ እና ግብ</h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white text-slate-900 p-8 rounded-lg shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="h-14 w-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-6">
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

                    <div class="bg-white text-slate-900 p-8 rounded-lg shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="h-14 w-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-6">
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

                    <div class="bg-white text-slate-900 p-8 rounded-lg shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="h-14 w-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-6">
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

        <section id="mission-values" class="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">የፌዴሬሽኑ እሴቶች</span>
                    <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">መሪና ዋነኛ እሴቶቻችን</h2>
                    <p class="text-base sm:text-lg text-slate-600">
                        የፌዴሬሽኑ መሪ እሴት <strong>የአባላቱ ርካታ</strong> ሲሆን ዋነኛ እሴቶቹ የሚከተሉት ናቸው፦
                    </p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div class="bg-white rounded-lg p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-handshake"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">ታማኝነት</h4>
                        <span class="text-xs text-slate-500 mt-1 block">ግልጽነትና ፍትሃዊነት</span>
                    </div>

                    <div class="bg-white rounded-lg p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">ክብር</h4>
                        <span class="text-xs text-slate-500 mt-1 block">የጋራ አክብሮት</span>
                    </div>

                    <div class="bg-white rounded-lg p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">ትጋት</h4>
                        <span class="text-xs text-slate-500 mt-1 block">ተግቶ ማገልገል</span>
                    </div>

                    <div class="bg-white rounded-lg p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-shield-halved"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">ታማኝነት</h4>
                        <span class="text-xs text-slate-500 mt-1 block">ለአባላት ታማኝ መሆን</span>
                    </div>

                    <div class="bg-white rounded-lg p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-people-group"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">የቡድን ስራ</h4>
                        <span class="text-xs text-slate-500 mt-1 block">የተቀናጀ ጥረት</span>
                    </div>

                    <div class="bg-white rounded-lg p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 mx-auto rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-3">
                            <i class="fa-solid fa-dove"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">የኢንዱስትሪ ሰላም</h4>
                        <span class="text-xs text-slate-500 mt-1 block">ለሰላም መትጋት</span>
                    </div>
                </div>
            </div>
        </section>

        <section id="services-section" class="py-20 bg-white scroll-mt-20">
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
                    <div class="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-blue-100 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
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

                    <div class="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
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

                    <div class="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
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

                    <div class="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
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

                    <div class="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
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

                    <div class="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-primary-400 transition-all flex flex-col justify-between">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
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

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Berehane Zeru.jpg" alt="አቶ ብርሃኔ ዘርዑ" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">ፕሬዝዳንት</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">አቶ ብርሃኔ ዘርዑ</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            የዳይሬክተሮች ቦርድ ፕሬዝዳንት። የፌዴሬሽኑን ከፍተኛ አመራርና ሀገራዊ የጥብቅና ስራዎችን በበላይነት ይመራሉ፤ የአባላትን መብት ያስከብራሉ።
                        </p>
                        <button type="button" data-bio="berehane" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>የሕይወት ታሪክ ይመልከቱ</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Mesele Hagos.jpg" alt="አቶ መሠለ ሐጎስ" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">ም/ፕሬዝዳንት</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">አቶ መሠለ ሐጎስ</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            የዳይሬክተሮች ቦርድ ም/ፕሬዝዳንት። የጋራ ድርድር ስምምነቶችንና የትራንስፖርት ስምሪት ቅልጥፍናን በበላይነት ይመራሉ።
                        </p>
                        <button type="button" data-bio="mesele" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>የሕይወት ታሪክ ይመልከቱ</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Derje Legesse.jpg" alt="አቶ ደረጀ ለገሠ" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">ዋና ፀሐፊ</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">አቶ ደረጀ ለገሠ</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            የዳይሬክተሮች ቦርድ ዋና ፀሐፊ። የተቋማዊ አስተዳደር መዛግብትን፣ ሕጋዊ ሰነዶችን እና የአባላት ግንኙነትን ይመራሉ።
                        </p>
                        <button type="button" data-bio="derje" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>የሕይወት ታሪክ ይመልከቱ</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex flex-col items-center justify-center p-6 border-b border-white/5">
                        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-600/20 via-transparent to-transparent pointer-events-none"></div>
                        <div class="relative z-10 w-24 h-24 rounded-full bg-slate-800/90 border-2 border-primary-400/40 flex items-center justify-center shadow-xl mb-3 group-hover:scale-105 group-hover:border-primary-400/70 transition-all duration-300">
                            <i class="fa-solid fa-user-tie text-4xl text-primary-300"></i>
                        </div>
                        <span class="relative z-10 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-[11px] font-semibold rounded-full uppercase tracking-wider shadow-sm">
                            የዳይሬክተሮች ቦርድ አባል
                        </span>
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">የቦርድ አባል</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">አቶ ታደሰ እጅጉ</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            የንግድ ጭነት ትራንስፖርት ኦፕሬሽን እና የስምሪት ቅንጅት። በመስመር ስምሪት እና በክልላዊ ትራንስፖርት ሎጂስቲክስ ላይ የማማከር ድጋፍ መስጠት።
                        </p>
                        <button type="button" data-bio="tadsse" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>የሕይወት ታሪክ ይመልከቱ</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Dejene Luchie.jpg" alt="አቶ ደጀኔ ሉጬ" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">የቦርድ አባል</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">አቶ ደጀኔ ሉጬ</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            የደረቅ ጭነት ሎጂስቲክስ እና የክልል ማኅበራት ጉዳዮች። የጭነት አጓጓዦች እና የአባል ማኅበራት ድምፅ ሆነው ያገለግላሉ።
                        </p>
                        <button type="button" data-bio="dejene" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>የሕይወት ታሪክ ይመልከቱ</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Nurdin Ditamo.jpg" alt="አቶ ኑረዲን ዲታሞ" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">የቦርድ አባል</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">አቶ ኑረዲን ዲታሞ</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            የተሽከርካሪዎች አስተዳደር እና የንግድ አጓጓዦች ውክልና። ዘመናዊ የፍሊት ቴክኖሎጂዎችን እና የካይዘን የአሰራር ጥበቦችን ማስተዋወቅ።
                        </p>
                        <button type="button" data-bio="nurdin" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>የሕይወት ታሪክ ይመልከቱ</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Mekonnen Workie.jpg" alt="አቶ መኮንን ወርቄ" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">የቦርድ አባል</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">አቶ መኮንን ወርቄ</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            የትራንስፖርት ኦፕሬሽን እና ስትራቴጂካዊ የድርጅት እቅድ። የገበያ ትስስር እና የቢዝነስ ፕላን ተነሳሽነቶችን በበላይነት ይመራሉ።
                        </p>
                        <button type="button" data-bio="mekonnen" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>የሕይወት ታሪክ ይመልከቱ</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Seid Ibrahim.jpg" alt="አቶ ሰዒድ ኢብራሂም" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">የቦርድ አባል</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">አቶ ሰዒድ ኢብራሂም</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            የኮሪደር ተሻጋሪ ጭነት እና የማኅበራት አመራር። የተቀላጠፈ የኬላ አሰራርና ፍትሃዊ የትራንዚት ታሪፍ እንዲረጋገጥ ይሰራሉ።
                        </p>
                        <button type="button" data-bio="seid" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>የሕይወት ታሪክ ይመልከቱ</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Msfin Eshetu.jpg" alt="አቶ መስፍን እሸቱ" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">የቦርድ አባል</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">አቶ መስፍን እሸቱ</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            የተሳፋሪ እና የጭነት ተሽከርካሪዎች ስምሪት ቅንጅት። የደህንነት ደረጃዎችን መቆጣጠር እና የተሽከርካሪዎች የብቃት ማረጋገጫ ድጋፍ።
                        </p>
                        <button type="button" data-bio="msfin" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>የሕይወት ታሪክ ይመልከቱ</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Mohammed Hassan.jpg" alt="አቶ መሐመድ ሀሰን" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">የቦርድ አባል</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">አቶ መሐመድ ሀሰን</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            የክልል ትራንስፖርት ማኅበራት እና የንግድ ጭነት አገልግሎት። የክልል ትራንስፖርት ኦፕሬተሮችን ድምፅ ያሰማሉ።
                        </p>
                        <button type="button" data-bio="mohammed" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>የሕይወት ታሪክ ይመልከቱ</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex flex-col items-center justify-center p-6 border-b border-white/5">
                        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-600/20 via-transparent to-transparent pointer-events-none"></div>
                        <div class="relative z-10 w-24 h-24 rounded-full bg-slate-800/90 border-2 border-primary-400/40 flex items-center justify-center shadow-xl mb-3 group-hover:scale-105 group-hover:border-primary-400/70 transition-all duration-300">
                            <i class="fa-solid fa-user-tie text-4xl text-primary-300"></i>
                        </div>
                        <span class="relative z-10 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-[11px] font-semibold rounded-full uppercase tracking-wider shadow-sm">
                            የዳይሬክተሮች ቦርድ አባል
                        </span>
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">የቦርድ አባል</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">አቶ አበባው ካሣ</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            የንግድ ሎጂስቲክስ እና የትራንስፖርት ድርጅት ዕድገት። የመንግሥትና የግል ዘርፍ ውይይቶችንና የንግድ ኤግዚቢሽኖችን ማስተዋወቅ።
                        </p>
                        <button type="button" data-bio="abeba" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>የሕይወት ታሪክ ይመልከቱ</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Yergalem Sefani.jpg" alt="አቶ ይርጋዓለም ሰፋኒ" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">የቦርድ አባል</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">አቶ ይርጋዓለም ሰፋኒ</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            የትራንስፖርት ኦፕሬሽን እና የሕግ ድጋፍ አስተባባሪነት። የሕግ ምክር አገልግሎት፣ የክርክር አፈታት እና የፍርድ ቤት ውክልና ድጋፍ።
                        </p>
                        <button type="button" data-bio="yergalem" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>የሕይወት ታሪክ ይመልከቱ</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                    <div class="relative h-72 overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-950 flex items-center justify-center">
                        <img src="/images/Ato Engeda H.Maryam.jpg" alt="አቶ እንግዳ ኃ/ማርያም" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02] contrast-[1.02]">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
                            <span class="px-2.5 py-0.5 bg-primary-600 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">የቦርድ አባል</span>
                            <h3 class="text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">አቶ እንግዳ ኃ/ማርያም</h3>
                        </div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <p class="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                            የንግድ ትራንስፖርት አስተዳደር እና የተሽከርካሪዎች ፈጠራ። ዘመናዊ የቴክኖሎጂ መሳሪያዎችን ተግባራዊ ለማድረግ ይሰራሉ።
                        </p>
                        <button type="button" data-bio="engeda" class="bio-modal-trigger text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0">
                            <span>የሕይወት ታሪክ ይመልከቱ</span>
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
                    <div class="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-blue-100 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
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

                    <div class="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
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

                    <div class="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
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

                    <div class="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-primary-400 transition-colors">
                        <div>
                            <div class="w-12 h-12 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
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

        <section class="py-16 text-white relative overflow-hidden">
              <div class="absolute inset-0 z-0 bg-[url('/images/hero_truck.jpg')] bg-cover bg-center animate-slow-motion"></div>
              <div class="absolute inset-0 z-0 bg-black/50"></div>
              <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <span class="text-blue-200 font-bold tracking-wider text-xs uppercase mb-3 block">አባል ይሁኑ</span>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">ከፌዴሬሽኑ ጋር ዛሬውኑ አብረው ይስሩ</h2>
                <p class="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                    እርስዎ የሚያጋጥምዎትን ዘርፈ ብዙ ችግሮችና ሀሳብዎን ለኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን በመተው አገልግሎትዎንና ምርትዎን ያሳድጉ።
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a href="/membership" class="inline-flex justify-center items-center px-8 py-3.5 bg-white text-primary-700 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors shadow-md">
                        የፌዴሬሽኑ አባል ይሁኑ
                    </a>
                    <a href="/contact" class="inline-flex justify-center items-center px-8 py-3.5 bg-primary-700 border border-white/30 text-white rounded-lg text-sm font-semibold hover:bg-primary-800 transition-colors shadow-sm">
                        ጽሕፈት ቤቱን ያነጋግሩ
                    </a>
                </div>
            </div>
        </section>
    </main>

    ${$e("አማ")}
`,Cv={title:{ENG:"About Us - Ethiopian Transport Employers' Federation",አማ:"ስለ እኛ - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን"},markup:{ENG:jv,አማ:kv}},Dv=`
    ${Ke("/news","ENG")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-primary-900 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/news_hero_media.jpg" alt="Transport News & Media Briefing" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-105" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-900/75 via-blue-700/35 to-blue-400/15"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/25 via-transparent to-transparent"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 relative z-10">
            <!-- Breadcrumbs -->
            <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">News & Updates</span>
                            </div>
                        </li>
                    </ol>
                </nav>

            <!-- Page Title -->
            <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-md">News and Operational Bulletins</h1>
            <p class="text-lg text-blue-100 max-w-3xl">Strategic insights, trade corridor advisories, and policy perspectives for Ethiopia's commercial transport employers.</p>
        </div>
        </div>
        <!-- Featured Story -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl shadow-slate-200/60 border border-slate-200 flex flex-col lg:flex-row group cursor-pointer transition-all duration-300">
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
                <article data-article-id="safer-journeys" data-category="safety" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
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
                <article data-article-id="employer-voice" data-category="association" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
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
                <article data-article-id="everyday-costs" data-category="industry" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
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
                <article data-article-id="transport-roundtable" data-category="events" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
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
                <article data-article-id="better-maintenance" data-category="safety" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
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
                <article data-article-id="meaningful-membership" data-category="association" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
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
                <div id="news-no-results" class="hidden col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 bg-white rounded-lg border border-dashed border-slate-200 p-8">
                    <div class="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3 text-lg">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <h4 class="font-bold text-slate-800 text-lg mb-1">No articles found</h4>
                    <p class="text-slate-500 text-sm">Try adjusting your search terms or category filter to discover articles.</p>
                </div>
            </div>
        </section>
    </main>

    ${$e("ENG")}
`,Mv=`
    ${Ke("/news","አማ")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-primary-900 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/news_hero_media.jpg" alt="የትራንስፖርት ዜናዎችና ጋዜጣዊ መግለጫ" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-105" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-900/75 via-blue-700/35 to-blue-400/15"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/25 via-transparent to-transparent"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 relative z-10">
            <!-- Breadcrumbs -->
            <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">ዜና እና መረጃ</span>
                            </div>
                        </li>
                    </ol>
                </nav>

            <!-- Page Title -->
            <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-md">ዜናዎችና ወቅታዊ መረጃዎች</h1>
            <p class="text-lg text-blue-100 max-w-3xl">ለኢትዮጵያ የንግድ ትራንስፖርት አሠሪዎች ጠቃሚ የሆኑ ስትራቴጂካዊ ግንዛቤዎች፣ የኮሪደር ማሳሰቢያዎችና የፖሊሲ መረጃዎች።</p>
        </div>
        </div>
        <!-- Featured Story -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl shadow-slate-200/60 border border-slate-200 flex flex-col lg:flex-row group cursor-pointer transition-all duration-300">
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
                <article data-article-id="safer-journeys" data-category="safety" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
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
                <article data-article-id="employer-voice" data-category="association" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
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
                <article data-article-id="everyday-costs" data-category="industry" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
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
                <article data-article-id="transport-roundtable" data-category="events" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
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
                <article data-article-id="better-maintenance" data-category="safety" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
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
                <article data-article-id="meaningful-membership" data-category="association" class="news-card article-modal-trigger bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer">
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
                <div id="news-no-results" class="hidden col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 bg-white rounded-lg border border-dashed border-slate-200 p-8">
                    <div class="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3 text-lg">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <h4 class="font-bold text-slate-800 text-lg mb-1">ምንም ዜና አልተገኘም</h4>
                    <p class="text-slate-500 text-sm">የፍለጋ ቃሉን ወይም የምድብ ምርጫውን በማስተካከል እንደገና ይሞክሩ።</p>
                </div>
            </div>
        </section>
    </main>

    ${$e("አማ")}
`,Rv={title:{ENG:"News & Bulletins - Ethiopian Transport Employers Federation",አማ:"ዜናዎችና ወቅታዊ መረጃዎች - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን"},markup:{ENG:Dv,አማ:Mv}},zv=`
    ${Ke("/vacancies","ENG")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-primary-900 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/vacancy_hero_career.jpg" alt="Transport & Logistics Careers" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-105" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-900/75 via-blue-700/35 to-blue-400/15"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/25 via-transparent to-transparent"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <!-- Breadcrumbs -->
                <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">Vacancies</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <!-- Page Title -->
                <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-md">Career Opportunities</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
                    Join ETEF Secretariat or our affiliated national network of member transport associations and commercial fleet operators.
                </p>
            </div>
        </div>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
            <div class="flex flex-col lg:flex-row gap-10 lg:gap-12">
                <!-- Left Column: Job Listings & Search -->
                <div class="lg:w-2/3 xl:w-3/4">
                    <!-- Search and Filter Bar -->
                    <div class="bg-white p-4 rounded-lg shadow-sm border border-slate-200 mb-8 flex flex-col sm:flex-row gap-4">
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
                        <div data-category="policy" data-employer="etef" class="job-listing-card bg-white rounded-lg border border-slate-200 p-6 hover:border-primary-300 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
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
                        <div data-category="logistics" data-employer="member" class="job-listing-card bg-white rounded-lg border border-slate-200 p-6 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
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
                        <div data-category="logistics" data-employer="member" class="job-listing-card bg-white rounded-lg border border-slate-200 p-6 hover:border-primary-400 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
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
                        <div data-category="logistics" data-employer="member" class="job-listing-card bg-white rounded-lg border border-slate-200 p-6 hover:border-slate-400 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
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
                        <div id="job-no-results" class="hidden text-center py-16 bg-white rounded-lg border border-dashed border-slate-200 p-8">
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
                    <div class="rounded-lg p-6 text-white mb-8 shadow-md relative overflow-hidden">
                          <div class="absolute inset-0 z-0 bg-[url('/images/news_office_admin.jpg')] bg-cover bg-center animate-slow-motion"></div>
                          <div class="absolute inset-0 z-0 bg-black/50"></div>
                          <div class="relative z-10">
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
                      </div>

                    <div class="mb-6">
                        <h3 class="text-lg font-bold text-slate-900 mb-2">Working with Transport Employers</h3>
                        <p class="text-slate-500 text-sm">Discover what makes Federation service rewarding.</p>
                    </div>

                    <div class="space-y-4">
                        <div class="bg-white border border-slate-200 p-4 rounded-lg shadow-sm flex items-start gap-4">
                            <div class="bg-blue-50 text-primary-600 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i class="fa-solid fa-chart-line"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm mb-1">National Impact</h4>
                                <p class="text-slate-500 text-xs leading-relaxed">Your work directly influences policies that shape Ethiopia's logistics backbone.</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-4 rounded-lg shadow-sm flex items-start gap-4">
                            <div class="bg-blue-50 text-primary-600 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i class="fa-solid fa-graduation-cap"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm mb-1">Professional Growth</h4>
                                <p class="text-slate-500 text-xs leading-relaxed">Access to tripartite seminars, workshops, and international transport networks.</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-4 rounded-lg shadow-sm flex items-start gap-4">
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

    ${$e("ENG")}
`,_v=`
    ${Ke("/vacancies","አማ")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-primary-900 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/vacancy_hero_career.jpg" alt="ክፍት የስራ ቦታዎችና የሙያ ዕድሎች" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-105" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-900/75 via-blue-700/35 to-blue-400/15"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/25 via-transparent to-transparent"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <!-- Breadcrumbs -->
                <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">ክፍት የስራ ቦታዎች</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <!-- Page Title -->
                <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-md">የሥራ ዕድሎች</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
                    የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን ሴክሬታሪያትን ወይም በአባልነት የታቀፉ ብሔራዊ የትራንስፖርት ድርጅቶችን ይቀላቀሉ።
                </p>
            </div>
        </div>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
            <div class="flex flex-col lg:flex-row gap-10 lg:gap-12">
                <!-- Left Column: Job Listings & Search -->
                <div class="lg:w-2/3 xl:w-3/4">
                    <!-- Search and Filter Bar -->
                    <div class="bg-white p-4 rounded-lg shadow-sm border border-slate-200 mb-8 flex flex-col sm:flex-row gap-4">
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
                        <div data-category="policy" data-employer="etef" class="job-listing-card bg-white rounded-lg border border-slate-200 p-6 hover:border-primary-300 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
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
                        <div data-category="logistics" data-employer="member" class="job-listing-card bg-white rounded-lg border border-slate-200 p-6 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
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
                        <div data-category="logistics" data-employer="member" class="job-listing-card bg-white rounded-lg border border-slate-200 p-6 hover:border-primary-400 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
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
                        <div data-category="logistics" data-employer="member" class="job-listing-card bg-white rounded-lg border border-slate-200 p-6 hover:border-slate-400 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer relative overflow-hidden">
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
                        <div id="job-no-results" class="hidden text-center py-16 bg-white rounded-lg border border-dashed border-slate-200 p-8">
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
                    <div class="rounded-lg p-6 text-white mb-8 shadow-md relative overflow-hidden">
                          <div class="absolute inset-0 z-0 bg-[url('/images/news_office_admin.jpg')] bg-cover bg-center animate-slow-motion"></div>
                          <div class="absolute inset-0 z-0 bg-black/50"></div>
                          <div class="relative z-10">
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
                      </div>

                    <div class="mb-6">
                        <h3 class="text-lg font-bold text-slate-900 mb-2">ከትራንስፖርት አሠሪዎች ጋር መሥራት</h3>
                        <p class="text-slate-500 text-sm">በፌዴሬሽኑ ጥላ ስር መሥራት የሚሰጣቸውን ጥቅሞች ይወቁ።</p>
                    </div>

                    <div class="space-y-4">
                        <div class="bg-white border border-slate-200 p-4 rounded-lg shadow-sm flex items-start gap-4">
                            <div class="bg-blue-50 text-primary-600 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i class="fa-solid fa-chart-line"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm mb-1">ሀገራዊ ተፅዕኖ</h4>
                                <p class="text-slate-500 text-xs leading-relaxed">ሥራዎ የኢትዮጵያን የንግድና የሎጂስቲክስ የጀርባ አጥንት በሚያጠናክሩ ፖሊሲዎች ላይ አስተዋጽዖ ያበረክታል።</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-4 rounded-lg shadow-sm flex items-start gap-4">
                            <div class="bg-blue-50 text-primary-600 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i class="fa-solid fa-graduation-cap"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm mb-1">የሙያ ዕድገት</h4>
                                <p class="text-slate-500 text-xs leading-relaxed">ዓለም አቀፍ ሴሚናሮች፣ ስልጠናዎችና የተሽከርካሪ ቴክኖሎጂ ትስስሮች ተጠቃሚ ይሁኑ።</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-4 rounded-lg shadow-sm flex items-start gap-4">
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

    ${$e("አማ")}
`,nm={title:{ENG:"Career Opportunities - Ethiopian Transport Employers Federation",አማ:"ክፍት የሥራ ቦታዎች - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን"},markup:{ENG:zv,አማ:_v}},Nv=`
    ${Ke("/partners","ENG")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-primary-900 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/partners_hero_network.jpg" alt="Strategic Partners & Transport Network" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-105" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-900/75 via-blue-700/35 to-blue-400/15"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/25 via-transparent to-transparent"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <!-- Breadcrumbs -->
                <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">Partners & Affiliates</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <!-- Page Title -->
                <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-md">Strategic Partners & Network</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
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
                <div class="bg-white rounded-lg border border-slate-200 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-lg hover:border-primary-300 transition-all group">
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
                <div class="bg-white rounded-lg border border-slate-200 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-lg hover:border-primary-300 transition-all group">
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
                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <img src="/images/partner_aartb.png" alt="Addis Ababa Logo" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Addis Ababa City Transport Association</h4>
                        <p class="text-xs text-slate-500 mb-2">Urban passenger transit & city distribution</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">Founding Affiliate</span>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <img src="/images/partner_oromia_freight.png" alt="Oromia Freight Logo" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Oromia Freight Transporters Association</h4>
                        <p class="text-xs text-slate-500 mb-2">Heavy dry bulk, grain, & industrial haulage</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">Founding Affiliate</span>
                    </div>
                </div>

                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-blue-50 flex items-center justify-center text-primary-700 font-bold text-xs">DDLC</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Dire Dawa Logistics Corridor Association</h4>
                        <p class="text-xs text-slate-500 mb-2">Eastern maritime corridor & customs transit</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">Founding Affiliate</span>
                    </div>
                </div>

                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-primary-50 flex items-center justify-center text-primary-700 font-bold text-xs">SPTA</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Southern Passenger Transport Association</h4>
                        <p class="text-xs text-slate-500 mb-2">Inter-regional bus fleet & passenger safety</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">Founding Affiliate</span>
                    </div>
                </div>

                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-slate-100 flex items-center justify-center text-slate-800 font-bold text-xs">AMFA</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">Amhara Commercial Hauliers Association</h4>
                        <p class="text-xs text-slate-500 mb-2">Agricultural commodities & construction transit</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">Founding Affiliate</span>
                    </div>
                </div>

                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
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
            <div class="bg-white rounded-lg p-8 sm:p-12 text-slate-900 border border-slate-200 shadow-md mb-20 relative overflow-hidden">
                <div class="max-w-2xl relative z-10">
                    <span class="text-primary-700 font-bold tracking-wider text-xs uppercase bg-primary-50 px-3 py-1 rounded-full border border-primary-200 inline-block mb-3">Institutional Alliance</span>
                    <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">Partner with the Apex Transport Federation</h3>
                    <p class="text-slate-600 text-sm leading-relaxed mb-6">
                        ETEF collaborates with commercial vehicle manufacturers, financial institutions, insurance syndicates, and international trade bodies to advance the transport industry.
                    </p>
                    <a href="/contact" class="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg text-sm transition-all shadow-md">
                        <span>Inquire About Partnership</span>
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                </div>
            </div>
        </section>
    </main>

    ${$e("ENG")}
`,Ov=`
    ${Ke("/partners","አማ")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-primary-900 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/partners_hero_network.jpg" alt="ስትራቴጂካዊ አጋሮችና የትራንስፖርት መረብ" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-105" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-900/75 via-blue-700/35 to-blue-400/15"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/25 via-transparent to-transparent"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <!-- Breadcrumbs -->
                <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">አጋሮች</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <!-- Page Title -->
                <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-md">ስትራቴጂካዊ አጋሮችና አባል ማኅበራት</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
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
                <div class="bg-white rounded-lg border border-slate-200 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-lg hover:border-primary-300 transition-all group">
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
                <div class="bg-white rounded-lg border border-slate-200 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-lg hover:border-primary-300 transition-all group">
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
                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <img src="/images/partner_aartb.png" alt="አዲስ አበባ አርማ" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">የአዲስ አበባ ከተማ ትራንስፖርት አሠሪዎች ማኅበር</h4>
                        <p class="text-xs text-slate-500 mb-2">የከተማ ሕዝብ ትራንስፖርትና የከተማ ውስጥ ስምሪት</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">መሥራች አባል</span>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <img src="/images/partner_oromia_freight.png" alt="ኦሮሚያ ጭነት አርማ" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">የኦሮሚያ የጭነት ትራንስፖርት አሠሪዎች ማኅበር</h4>
                        <p class="text-xs text-slate-500 mb-2">የከባድ ደረቅ ጭነት፣ የእህልና የኢንዱስትሪ ምርቶች</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">መሥራች አባል</span>
                    </div>
                </div>

                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-blue-50 flex items-center justify-center text-primary-700 font-bold text-xs">ድሬዳዋ</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">የድሬዳዋ የሎጂስቲክስ ኮሪደር አሠሪዎች ማኅበር</h4>
                        <p class="text-xs text-slate-500 mb-2">የምስራቅ የባህር በርና የጉምሩክ ትራንዚት ስምሪት</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">መሥራች አባል</span>
                    </div>
                </div>

                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-primary-50 flex items-center justify-center text-primary-700 font-bold text-xs">ደቡብ</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">የደቡብ የሕዝብ ትራንስፖርት አሠሪዎች ማኅበር</h4>
                        <p class="text-xs text-slate-500 mb-2">የሀገር አቋራጭ አውቶቡሶችና የተሳፋሪ ደህንነት</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">መሥራች አባል</span>
                    </div>
                </div>

                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
                    <div class="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-1">
                        <div class="w-full h-full rounded bg-slate-100 flex items-center justify-center text-slate-800 font-bold text-xs">አማራ</div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">የአማራ የንግድ ትራንስፖርት አሠሪዎች ማኅበር</h4>
                        <p class="text-xs text-slate-500 mb-2">የግብርና ምርቶችና የግንባታ ግብአቶች ማጓጓዝ</p>
                        <span class="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">መሥራች አባል</span>
                    </div>
                </div>

                <div class="bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer group">
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
            <div class="bg-white rounded-lg p-8 sm:p-12 text-slate-900 border border-slate-200 shadow-md mb-20 relative overflow-hidden">
                <div class="max-w-2xl relative z-10">
                    <span class="text-primary-700 font-bold tracking-wider text-xs uppercase bg-primary-50 px-3 py-1 rounded-full border border-primary-200 inline-block mb-3">ተቋማዊ ጥምረት</span>
                    <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">ከከፍተኛው የትራንስፖርት ፌዴሬሽን ጋር አጋር ይሁኑ</h3>
                    <p class="text-slate-600 text-sm leading-relaxed mb-6">
                        ኢትራአፌ ከተሽከርካሪ አምራቾች፣ ከፋይናንስና ከኢንሹራንስ ተቋማት እንዲሁም ከዓለም አቀፍ የንግድ ድርጅቶች ጋር በትብብር ይሰራል::
                    </p>
                    <a href="/contact" class="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg text-sm transition-all shadow-md">
                        <span>ስለ አጋርነት ያነጋግሩን</span>
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                </div>
            </div>
        </section>
    </main>

    ${$e("አማ")}
`,dm={title:{ENG:"Strategic Partners - Ethiopian Transport Employers Federation",አማ:"ስትራቴጂካዊ አጋሮች - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን"},markup:{ENG:Nv,አማ:Ov}},Lv=`
    ${Ke("/faq","ENG")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-primary-900 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/faq_hero_support.jpg" alt="Transport Advisory & FAQ Services" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-105" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-900/75 via-blue-700/35 to-blue-400/15"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/25 via-transparent to-transparent"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">FAQ</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <h1 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">Frequently Asked Questions</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
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
                        class="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="advocacy">
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="membership">
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="membership">
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="operations">
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="advocacy">
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

    ${$e("ENG")}
`,Bv=`
    ${Ke("/faq","አማ")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-primary-900 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/faq_hero_support.jpg" alt="የትራንስፖርት መረጃና ተደጋጋሚ ጥያቄዎች" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-105" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-900/75 via-blue-700/35 to-blue-400/15"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/25 via-transparent to-transparent"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">በየጥ</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <h1 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">ተደጋጋሚ ጥያቄዎችና መልሶች</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
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
                        class="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="advocacy">
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="membership">
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="membership">
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="operations">
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
                <div class="faq-item bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all" data-category="advocacy">
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

    ${$e("አማ")}
`,cm={title:{ENG:"Frequently Asked Questions - Ethiopian Transport Employers Federation",አማ:"ተደጋጋሚ ጥያቄዎች - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን"},markup:{ENG:Lv,አማ:Bv}},Hv=`
    ${Ke("/contact","ENG")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-primary-900 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/contact_hero_secretariat.jpg" alt="ETEF Secretariat Contact & Transport Operations" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-105" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-900/75 via-blue-700/35 to-blue-400/15"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/25 via-transparent to-transparent"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">Contact Us</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <h1 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">Contact ETEF Secretariat</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
                    Have questions about membership, transport policy advocacy, or corridor assistance? Our Addis Ababa Secretariat team is here to support you.
                </p>
            </div>
        </div>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <!-- 3 Top Info Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                <!-- Location Card -->
                <div class="bg-white rounded-lg border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center">
                    <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-5 border border-primary-100">
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
                <div class="bg-white rounded-lg border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center">
                    <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-5 border border-primary-100">
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
                <div class="bg-white rounded-lg border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center">
                    <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-5 border border-primary-100">
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
                <div class="lg:col-span-7 bg-white rounded-lg border border-slate-200 p-8 sm:p-10 shadow-sm">
                    <div class="mb-6">
                        <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3 py-1 rounded-full border border-primary-100">Direct Communication</span>
                        <h2 class="text-2xl font-bold text-slate-900 mt-2">Send a Message to the Secretariat</h2>
                        <p class="text-slate-600 text-xs sm:text-sm mt-1">Fill out the form below and an ETEF officer will review your request and get back to you promptly.</p>
                    </div>

                    <div id="contact-form-feedback" class="hidden mb-6 p-4 rounded-lg border"></div>

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
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                            <div>
                                <label for="contact-org" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Organization / Company</label>
                                <input 
                                    type="text" 
                                    id="contact-org" 
                                    name="organization" 
                                    placeholder="e.g. Horn Freight Logistics" 
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
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
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
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
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="contact-subject" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Subject / Department *</label>
                            <select 
                                id="contact-subject" 
                                name="subject" 
                                required 
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
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
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            id="contact-submit-btn" 
                            class="w-full sm:w-auto px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <span>Send Message</span>
                            <i class="fa-solid fa-paper-plane text-xs"></i>
                        </button>
                    </form>
                </div>

                <!-- Right: Directorate Directory -->
                <div class="lg:col-span-5 space-y-6">
                    <div class="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
                        <h3 class="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                            Secretariat Directorates
                        </h3>
                        <div class="space-y-4 text-xs">
                            <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-100">
                                <span class="font-bold text-slate-800 block text-sm">Membership & Credentials</span>
                                <p class="text-slate-500 mt-0.5">Association registration, dues calculations, and general assembly credentials.</p>
                                <span class="text-primary-600 font-semibold block mt-1.5">membership@etef.org.et</span>
                            </div>

                            <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-100">
                                <span class="font-bold text-slate-800 block text-sm">Legal & Labor Relations</span>
                                <p class="text-slate-500 mt-0.5">Collective bargaining agreements, labor arbitration, and court advocacy.</p>
                                <span class="text-primary-600 font-semibold block mt-1.5">legal@etef.org.et</span>
                            </div>

                            <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-100">
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

    ${$e("ENG")}
`,qv=`
    ${Ke("/contact","አማ")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-primary-900 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/contact_hero_secretariat.jpg" alt="የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን ሴክሬታሪያት" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-105" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-900/75 via-blue-700/35 to-blue-400/15"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/25 via-transparent to-transparent"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">ያግኙን</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <h1 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">የፌዴሬሽኑን ሴክሬታሪያት ያነጋግሩ</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
                    ስለ አባልነት፣ የሕግ ድጋፍ ወይም የኮሪደሮች ሁኔታ ጥያቄ ወይም አስተያየት ካለዎት የአዲስ አበባ ዋና መሥሪያ ቤታችን ዝግጁ ነው።
                </p>
            </div>
        </div>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <!-- 3 Top Info Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                <!-- Location Card -->
                <div class="bg-white rounded-lg border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center">
                    <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-5 border border-primary-100">
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
                <div class="bg-white rounded-lg border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center">
                    <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-5 border border-primary-100">
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
                <div class="bg-white rounded-lg border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center">
                    <div class="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-5 border border-primary-100">
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
                <div class="lg:col-span-7 bg-white rounded-lg border border-slate-200 p-8 sm:p-10 shadow-sm">
                    <div class="mb-6">
                        <span class="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3 py-1 rounded-full border border-primary-100">ቀጥታ መልዕክት</span>
                        <h2 class="text-2xl font-bold text-slate-900 mt-2">መልዕክትዎን ለሴክሬታሪያቱ ይላኩ</h2>
                        <p class="text-slate-600 text-xs sm:text-sm mt-1">ከታች ያለውን ቅጽ ይሙሉ፤ የፌዴሬሽኑ የሥራ ኃላፊ ተመልክቶ ፈጣን ምላሽ ይሰጥዎታል።</p>
                    </div>

                    <div id="contact-form-feedback" class="hidden mb-6 p-4 rounded-lg border"></div>

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
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                            <div>
                                <label for="contact-org" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">የድርጅቱ / ማኅበሩ ስም</label>
                                <input 
                                    type="text" 
                                    id="contact-org" 
                                    name="organization" 
                                    placeholder="ለምሳሌ፡ ሆርን የጭነት ትራንስፖርት" 
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
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
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
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
                                    class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="contact-subject" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">የጉዳዩ አይነት / ዳይሬክቶሬት *</label>
                            <select 
                                id="contact-subject" 
                                name="subject" 
                                required 
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
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
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            id="contact-submit-btn" 
                            class="w-full sm:w-auto px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <span>መልዕክት ላክ</span>
                            <i class="fa-solid fa-paper-plane text-xs"></i>
                        </button>
                    </form>
                </div>

                <!-- Right: Directorate Directory -->
                <div class="lg:col-span-5 space-y-6">
                    <div class="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
                        <h3 class="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                            የሴክሬታሪያቱ ዳይሬክቶሬቶች
                        </h3>
                        <div class="space-y-4 text-xs">
                            <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-100">
                                <span class="font-bold text-slate-800 block text-sm">የአባላትና ድርጅት ጉዳዮች</span>
                                <p class="text-slate-500 mt-0.5">የማኅበራት ምዝገባ፣ ዓመታዊ መዋጮዎችና የጠቅላላ ጉባኤ ተወካዮች ማረጋገጫ።</p>
                                <span class="text-primary-600 font-semibold block mt-1.5">membership@etef.org.et</span>
                            </div>

                            <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-100">
                                <span class="font-bold text-slate-800 block text-sm">የሕግና የኢንዱስትሪ ሰላም</span>
                                <p class="text-slate-500 mt-0.5">የኅብረት ስምምነት ድርድር፣ የግልግል ዳኝነትና የፍርድ ቤት ውክልና።</p>
                                <span class="text-primary-600 font-semibold block mt-1.5">legal@etef.org.et</span>
                            </div>

                            <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-100">
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

    ${$e("አማ")}
`,um={title:{ENG:"Contact Us - Ethiopian Transport Employers Federation",አማ:"ያግኙን - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን"},markup:{ENG:Hv,አማ:qv}},Uv=`
    ${Ke("/membership","ENG")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-slate-950 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/hero_expressway.jpg" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-95" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/80 to-primary-950/90"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <!-- Breadcrumbs -->
                <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">Membership</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <!-- Page Title -->
                <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Become an ETEF Member</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
                    Join 17 employers' associations and over 6,652 commercial operators united under the Ethiopian Transport Employers' Federation. Certified under FDRE Constitution Article 31 and Labor Proclamation No. 1156/2012.
                </p>
            </div>
        </div>

        <!-- FLEET TIER & DUES ESTIMATOR -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
            <div class="bg-primary-600 rounded-lg p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
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
                                <button type="button" class="calc-sector-btn active px-3 py-2.5 rounded-lg border border-primary-400 bg-primary-600 text-white font-bold text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer shadow-sm" data-sector="Freight Transport" data-rate="450" data-base="15000">
                                    <i class="fa-solid fa-truck-moving text-base text-primary-200"></i>
                                    <span>Heavy Freight</span>
                                </button>
                                <button type="button" class="calc-sector-btn px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer" data-sector="Passenger Transport" data-rate="300" data-base="10000">
                                    <i class="fa-solid fa-bus text-base text-primary-300"></i>
                                    <span>Intercity Bus</span>
                                </button>
                                <button type="button" class="calc-sector-btn px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer" data-sector="Urban Transit" data-rate="150" data-base="5000">
                                    <i class="fa-solid fa-van-shuttle text-base text-primary-300"></i>
                                    <span>Urban Transit</span>
                                </button>
                                <button type="button" class="calc-sector-btn px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer" data-sector="Logistics & Customs" data-rate="600" data-base="25000">
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
                    <div class="lg:col-span-5 bg-white/5 border border-white/15 rounded-lg p-6 backdrop-blur-md flex flex-col justify-between">
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

                        <button type="button" id="calc-apply-btn" class="w-full py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-lg text-xs sm:text-sm transition-all shadow-lg hover:shadow-primary-600/30 flex items-center justify-center gap-2 cursor-pointer">
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
                    <div class="bg-white rounded-lg shadow-sm border border-slate-200 p-8 md:p-10">
                        <div class="mb-8">
                            <h2 class="text-2xl font-bold text-slate-900 mb-2">Organization Registration</h2>
                            <p class="text-slate-500 text-sm">Please fill out the form below to register your transport enterprise with ETEF.</p>
                        </div>

                        <form id="membership-form" class="space-y-6">
                            <div id="membership-alert" class="hidden p-4 rounded-lg text-sm font-medium"></div>

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
                        <div class="bg-white border border-slate-200 p-5 rounded-lg shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-users text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">Industry Representation</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">Be heard at regional and federal policy levels where critical decisions about tariffs, transit routes, and borders are made.</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-5 rounded-lg shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-scale-balanced text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">Policy Advocacy</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">ETEF represents employer priorities in national labor laws, safety standards, and logistical reforms.</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-5 rounded-lg shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-globe text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">Business Networking</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">Connect with major logistics operators, public freight owners, and international transport associations.</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-5 rounded-lg shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-award text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">Training Access</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">Obtain certified driver safety programs, fleet efficiency coaching, and transport business management tutorials.</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-primary-50 border border-primary-100 rounded-lg p-6">
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

    ${$e("ENG")}
`,Gv=`
    ${Ke("/membership","አማ")}

    <main class="flex-grow pb-24">
        <div class="relative text-white pt-12 pb-16 overflow-hidden bg-slate-950 mb-10">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="/images/hero_expressway.jpg" class="w-full h-full object-cover object-center animate-slow-motion filter brightness-95" />
                <div class="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/80 to-primary-950/90"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <!-- Breadcrumbs -->
                <nav class="flex text-sm text-blue-100 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-blue-200"></i>
                                <span class="text-white font-semibold">አባልነት</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <!-- Page Title -->
                <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">የኢትራአፌ አባል ይሁኑ</h1>
                <p class="text-lg text-blue-100 max-w-3xl leading-relaxed">
                    በኢፌዲሪ ሕገ-መንግሥት አንቀጽ 31 እና በአሠሪና ሠራተኛ ጉዳይ አዋጅ ቁጥር 1156/2012 መሠረት የተቋቋመውን የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን ይቀላቀሉ። ከ17 አሠሪ ማኅበራትና ከ6,652 በላይ የንግድ ትራንስፖርት ኦፕሬተሮች ጋር በአንድነት ይቁሙ።
                </p>
            </div>
        </div>

        <!-- FLEET TIER & DUES ESTIMATOR (Amharic) -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
            <div class="bg-primary-600 rounded-lg p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
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
                                <button type="button" class="calc-sector-btn active px-3 py-2.5 rounded-lg border border-primary-400 bg-primary-600 text-white font-bold text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer shadow-sm" data-sector="የከባድ ጭነት ትራንስፖርት" data-rate="450" data-base="15000">
                                    <i class="fa-solid fa-truck-moving text-base text-primary-200"></i>
                                    <span>የከባድ ጭነት</span>
                                </button>
                                <button type="button" class="calc-sector-btn px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer" data-sector="የሕዝብ አውቶቡስ" data-rate="300" data-base="10000">
                                    <i class="fa-solid fa-bus text-base text-primary-300"></i>
                                    <span>የሀገር አቋራጭ</span>
                                </button>
                                <button type="button" class="calc-sector-btn px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer" data-sector="የከተማ ትራንስፖርት" data-rate="150" data-base="5000">
                                    <i class="fa-solid fa-van-shuttle text-base text-primary-300"></i>
                                    <span>የከተማ ትራንስፖርት</span>
                                </button>
                                <button type="button" class="calc-sector-btn px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer" data-sector="የሎጂስቲክስና ጉምሩክ" data-rate="600" data-base="25000">
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
                    <div class="lg:col-span-5 bg-white/5 border border-white/15 rounded-lg p-6 backdrop-blur-md flex flex-col justify-between">
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

                        <button type="button" id="calc-apply-btn" class="w-full py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-lg text-xs sm:text-sm transition-all shadow-lg hover:shadow-primary-600/30 flex items-center justify-center gap-2 cursor-pointer">
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
                    <div class="bg-white rounded-lg shadow-sm border border-slate-200 p-8 md:p-10">
                        <div class="mb-8">
                            <h2 class="text-2xl font-bold text-slate-900 mb-2">የድርጅት ምዝገባ ማመልከቻ</h2>
                            <p class="text-slate-500 text-sm">የትራንስፖርት ድርጅትዎን በፌዴሬሽኑ አባልነት ለማስመዝገብ ከታች ያለውን ቅጽ በትክክል ይሙሉ::</p>
                        </div>

                        <form id="membership-form" class="space-y-6">
                            <div id="membership-alert" class="hidden p-4 rounded-lg text-sm font-medium"></div>

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
                        <div class="bg-white border border-slate-200 p-5 rounded-lg shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-users text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">ሀገራዊ የዘርፍ ውክልና</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">በትራንስፖርት ታሪፍ፣ መስመሮችና ድንበሮች ላይ ውሳኔ በሚተላለፍባቸው መንግሥታዊ መድረኮች ላይ ተደማጭ ድምፅ ይሁኑ።</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-5 rounded-lg shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-scale-balanced text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">የፖሊሲና የሕግ ከለላ</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">ኢትራአፌ የአሠሪዎችን ፍላጎት በብሔራዊ የሠራተኛ ሕጎች፣ የደህንነት ደረጃዎችና የሎጂስቲክስ ማሻሻያዎች ውስጥ ያስከብራል።</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-5 rounded-lg shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-globe text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">የንግድ ትስስር ዕድሎች</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">ከዋና ዋና የሎጂስቲክስ ኦፕሬተሮች፣ የመንግሥት የጭነት ባለቤቶችና ዓለም አቀፍ ድርጅቶች ጋር ይገናኙ።</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 p-5 rounded-lg shadow-sm flex items-start gap-4 hover:border-primary-300 transition-colors">
                            <div class="bg-primary-50 text-primary-600 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-award text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-[15px] mb-1">የስልጠና ዕድሎች</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">የአሽከርካሪዎች ደህንነት ስልጠና፣ የተሽከርካሪ ስምሪት ውጤታማነትና የትራንስፖርት ንግድ አመራር ስልጠናዎችን ያግኙ።</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-primary-50 border border-primary-100 rounded-lg p-6">
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

    ${$e("አማ")}
`,pm={title:{ENG:"Become a Member - Ethiopian Transport Employers Federation",አማ:"አባል ይሁኑ - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን"},markup:{ENG:Uv,አማ:Gv}},Fv=`
<div id="admin-root-container" class="flex h-screen w-full bg-slate-100 overflow-hidden font-sans">
    
    <!-- Mobile Sidebar Backdrop -->
    <div id="admin-mobile-backdrop" class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 hidden md:hidden transition-opacity"></div>

    <!-- Admin Sidebar -->
    <aside id="admin-sidebar" class="w-64 lg:w-72 bg-slate-900 text-slate-300 flex flex-col shrink-0 h-screen border-r border-slate-800 z-50 fixed md:static inset-y-0 left-0 -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out shadow-2xl md:shadow-none select-none">
        
        <!-- Sidebar Brand Header -->
        <div class="h-20 flex items-center justify-between px-6 border-b border-slate-800/80 shrink-0">
            <div class="flex items-center gap-3">
                <img src="/images/etef_logo.png" alt="ETEF Logo" class="h-10 w-10 object-contain rounded-full bg-white p-0.5 shadow-sm shrink-0" />
                <div>
                    <div class="flex items-center gap-2">
                        <span class="font-bold text-white text-base tracking-tight leading-none">ETEF ADMIN</span>
                        <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-primary-900/80 text-primary-300 border border-primary-700/60 font-mono">v2.4</span>
                    </div>
                    <span class="text-[10px] text-blue-400 font-semibold uppercase tracking-widest block mt-1">Secretariat Portal</span>
                </div>
            </div>
            <button id="admin-mobile-close-btn" class="md:hidden text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors" aria-label="Close sidebar">
                <i class="fa-solid fa-xmark text-lg"></i>
            </button>
        </div>

        <!-- Sidebar Navigation Menu -->
        <div class="flex-grow overflow-y-auto px-4 py-6 space-y-6">
            <div>
                <span class="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Management Console</span>
                <nav class="space-y-1.5 text-sm font-medium">
                    <a href="#dashboard" id="nav-dashboard" class="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-primary-600 text-white font-semibold shadow-sm transition-all">
                        <span class="flex items-center gap-3">
                            <i class="fa-solid fa-chart-pie w-5 text-center text-sm"></i>
                            <span>Dashboard</span>
                        </span>
                        <span class="px-1.5 py-0.5 text-[10px] font-bold rounded bg-white/20 text-white font-mono">Live</span>
                    </a>

                    <a href="#memberships" id="nav-memberships" class="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-all">
                        <span class="flex items-center gap-3">
                            <i class="fa-solid fa-users-rectangle w-5 text-center text-sm"></i>
                            <span>Memberships</span>
                        </span>
                        <span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-slate-800 text-slate-300 font-mono">342</span>
                    </a>

                    <a href="#vacancies" id="nav-vacancies" class="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-all">
                        <span class="flex items-center gap-3">
                            <i class="fa-solid fa-briefcase w-5 text-center text-sm"></i>
                            <span>Job Vacancies</span>
                        </span>
                        <span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-slate-800 text-slate-300 font-mono">7</span>
                    </a>

                    <a href="#news" id="nav-news" class="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-all">
                        <span class="flex items-center gap-3">
                            <i class="fa-solid fa-newspaper w-5 text-center text-sm"></i>
                            <span>News & Updates</span>
                        </span>
                        <span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-slate-800 text-slate-300 font-mono">4</span>
                    </a>

                    <a href="#partners" id="nav-partners" class="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-all">
                        <span class="flex items-center gap-3">
                            <i class="fa-solid fa-handshake w-5 text-center text-sm"></i>
                            <span>Partners & Sponsors</span>
                        </span>
                        <span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-slate-800 text-slate-300 font-mono">14</span>
                    </a>
                </nav>
            </div>

            <!-- Portal System Quick Status -->
            <div class="pt-4 border-t border-slate-800/80">
                <span class="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Federation Services</span>
                <div class="px-3 py-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50 space-y-1.5 text-xs text-slate-400">
                    <div class="flex items-center justify-between font-medium">
                        <span class="flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>System Status</span>
                        </span>
                        <span class="text-emerald-400 text-[11px] font-semibold">Healthy</span>
                    </div>
                    <div class="text-[11px] text-slate-400 flex items-center justify-between pt-1 border-t border-slate-700/40 font-mono">
                        <span>Database: Synced</span>
                        <span>Corridors: Active</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sidebar Footer Action -->
        <div class="p-4 border-t border-slate-800/80 bg-slate-950/40 shrink-0">
            <a href="/" class="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition-all font-medium text-xs">
                <span class="flex items-center gap-2.5">
                    <i class="fa-solid fa-arrow-right-from-bracket text-sm"></i>
                    <span>Exit to Public Site</span>
                </span>
                <i class="fa-solid fa-angle-right text-[10px] opacity-70"></i>
            </a>
        </div>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto bg-slate-50/70">
        
        <!-- Top Navbar -->
        <header class="h-20 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 lg:px-10 flex items-center justify-between sticky top-0 z-30 shadow-xs shrink-0">
            <div class="flex items-center gap-4">
                <button id="admin-mobile-menu-btn" class="md:hidden text-slate-600 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Open sidebar menu">
                    <i class="fa-solid fa-bars text-lg"></i>
                </button>
                <div>
                    <div class="text-[11px] font-bold text-primary-600 uppercase tracking-wider hidden sm:block">Federation Administration</div>
                    <h1 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight" id="pageTitle">Admin Overview</h1>
                </div>
            </div>
            
            <div class="flex items-center gap-3 sm:gap-5">
                <!-- Search bar -->
                <div class="relative hidden lg:block w-72">
                    <input type="text" placeholder="Search records, members, jobs..." class="w-full pl-9 pr-12 py-2 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all">
                    <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-slate-400 text-xs"></i>
                    <kbd class="absolute right-2.5 top-2 px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 bg-slate-200/70 rounded font-mono">Ctrl K</kbd>
                </div>

                <!-- Live website quick link -->
                <a href="/" class="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-primary-600 bg-slate-100 hover:bg-primary-50 border border-slate-200/80 rounded-lg transition-colors">
                    <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    <span>Live Site</span>
                </a>

                <!-- Notification Bell -->
                <button class="relative p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors" aria-label="Notifications">
                    <i class="fa-solid fa-bell text-base"></i>
                    <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-600 ring-2 ring-white"></span>
                </button>

                <!-- Admin Profile Card -->
                <div class="flex items-center gap-3 pl-2 sm:pl-3 border-l border-slate-200">
                    <div class="relative">
                        <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-primary-700 to-blue-500 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                            AD
                        </div>
                        <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                    </div>
                    <div class="hidden sm:block text-left">
                        <span class="font-bold text-xs text-slate-900 block leading-tight">Secretariat Admin</span>
                        <span class="text-[11px] text-slate-500 block">Addis Ababa HQ</span>
                    </div>
                </div>
            </div>
        </header>

        <!-- Dynamic Tab Contents -->
        <main class="flex-grow p-4 sm:p-8 lg:p-10 max-w-7xl w-full mx-auto space-y-8">
            
            <!-- DASHBOARD TAB -->
            <div id="tab-dashboard" class="space-y-8">
                <!-- Welcome Banner -->
                <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-900 via-primary-700 to-blue-600 text-white p-6 sm:p-8 shadow-sm">
                    <div class="relative z-10 max-w-3xl space-y-2">
                        <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/15 text-blue-100 backdrop-blur-xs inline-flex items-center gap-1.5 border border-white/20">
                            <i class="fa-solid fa-shield-halved text-xs"></i> Federation Executive Portal
                        </span>
                        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">ETEF Secretariat Operational Overview</h2>
                        <p class="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-2xl">
                            Monitoring 17 member associations, 6,652 commercial freight and passenger operators, active multimodal transport corridors, and regulatory compliance.
                        </p>
                    </div>
                    <div class="absolute -right-8 -bottom-10 opacity-10 text-9xl text-white pointer-events-none">
                        <i class="fa-solid fa-truck-moving"></i>
                    </div>
                </div>

                <!-- Stats Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <!-- Total Members Card -->
                    <div class="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Total Members</span>
                                <h3 class="text-3xl font-black text-slate-900 mt-1">342</h3>
                            </div>
                            <div class="w-11 h-11 bg-blue-50 text-primary-600 rounded-xl flex items-center justify-center text-lg font-bold border border-blue-100/60">
                                <i class="fa-solid fa-users"></i>
                            </div>
                        </div>
                        <div class="flex items-center justify-between text-xs pt-3 border-t border-slate-100">
                            <span class="text-emerald-600 font-bold flex items-center gap-1">
                                <i class="fa-solid fa-arrow-trend-up"></i> +12 this month
                            </span>
                            <span class="text-slate-400">17 Associations</span>
                        </div>
                    </div>

                    <!-- Pending Applications Card -->
                    <div class="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Pending Applications</span>
                                <h3 class="text-3xl font-black text-slate-900 mt-1">18</h3>
                            </div>
                            <div class="w-11 h-11 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-lg font-bold border border-amber-100/60">
                                <i class="fa-solid fa-clock-rotate-left"></i>
                            </div>
                        </div>
                        <div class="flex items-center justify-between text-xs pt-3 border-t border-slate-100">
                            <span class="text-amber-700 font-semibold">Requires review</span>
                            <span class="text-slate-400">4 High Priority</span>
                        </div>
                    </div>

                    <!-- Active Vacancies Card -->
                    <div class="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Active Vacancies</span>
                                <h3 class="text-3xl font-black text-slate-900 mt-1">7</h3>
                            </div>
                            <div class="w-11 h-11 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-lg font-bold border border-emerald-100/60">
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                        </div>
                        <div class="flex items-center justify-between text-xs pt-3 border-t border-slate-100">
                            <span class="text-primary-600 font-semibold">Across network</span>
                            <span class="text-slate-400">63 Candidates</span>
                        </div>
                    </div>

                    <!-- Partners Card -->
                    <div class="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Strategic Partners</span>
                                <h3 class="text-3xl font-black text-slate-900 mt-1">14</h3>
                            </div>
                            <div class="w-11 h-11 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center text-lg font-bold border border-purple-100/60">
                                <i class="fa-solid fa-handshake"></i>
                            </div>
                        </div>
                        <div class="flex items-center justify-between text-xs pt-3 border-t border-slate-100">
                            <span class="text-purple-700 font-semibold">Active Accords</span>
                            <span class="text-slate-400">6 Key Ministries</span>
                        </div>
                    </div>
                </div>

                <!-- Recent Applications Table Section -->
                <div class="bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden">
                    <div class="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/50">
                        <div>
                            <h3 class="font-bold text-base sm:text-lg text-slate-900">Recent Membership Applications</h3>
                            <p class="text-xs text-slate-500 mt-0.5">Verification queue for commercial transport operators requesting ETEF certification.</p>
                        </div>
                        <a href="#memberships" class="text-xs font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1 self-start sm:self-auto hover:underline">
                            <span>View All Members</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </a>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-bold text-[11px] uppercase tracking-wider border-b border-slate-200/80">
                                    <th class="py-3.5 px-6">Organization</th>
                                    <th class="py-3.5 px-6">Contact Person</th>
                                    <th class="py-3.5 px-6">Sector</th>
                                    <th class="py-3.5 px-6">Date</th>
                                    <th class="py-3.5 px-6">Status</th>
                                    <th class="py-3.5 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 text-slate-700">
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-lg bg-primary-100 text-primary-700 font-bold flex items-center justify-center text-xs shrink-0">
                                                AE
                                            </div>
                                            <span>Abay Express Freight PLC</span>
                                        </div>
                                    </td>
                                    <td class="py-4 px-6 text-slate-700 font-medium">Kassa Belay</td>
                                    <td class="py-4 px-6">
                                        <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">Freight Transport</span>
                                    </td>
                                    <td class="py-4 px-6 text-slate-500">26 Sep 2026</td>
                                    <td class="py-4 px-6">
                                        <span class="px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full border border-amber-200/60">Pending</span>
                                    </td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="px-3 py-1.5 bg-primary-50 text-primary-700 font-bold text-xs rounded-lg hover:bg-primary-100 transition-colors cursor-pointer">Approve</button>
                                        <button class="px-3 py-1.5 bg-slate-100 text-slate-600 font-bold text-xs rounded-lg hover:bg-rose-50 hover:text-rose-700 transition-colors cursor-pointer">Reject</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs shrink-0">
                                                SB
                                            </div>
                                            <span>Selam Bus Lines S.C.</span>
                                        </div>
                                    </td>
                                    <td class="py-4 px-6 text-slate-700 font-medium">Tadesse Mekonnen</td>
                                    <td class="py-4 px-6">
                                        <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">Passenger Transport</span>
                                    </td>
                                    <td class="py-4 px-6 text-slate-500">24 Sep 2026</td>
                                    <td class="py-4 px-6">
                                        <span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Approved</span>
                                    </td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="px-3 py-1.5 bg-slate-100 text-slate-700 font-semibold text-xs rounded-lg hover:bg-slate-200 transition-colors cursor-pointer">View</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs shrink-0">
                                                DT
                                            </div>
                                            <span>Dire Trans Logistics</span>
                                        </div>
                                    </td>
                                    <td class="py-4 px-6 text-slate-700 font-medium">Fatuma Ahmed</td>
                                    <td class="py-4 px-6">
                                        <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-100">Logistics & Customs</span>
                                    </td>
                                    <td class="py-4 px-6 text-slate-500">21 Sep 2026</td>
                                    <td class="py-4 px-6">
                                        <span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Approved</span>
                                    </td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="px-3 py-1.5 bg-slate-100 text-slate-700 font-semibold text-xs rounded-lg hover:bg-slate-200 transition-colors cursor-pointer">View</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Corridor Live Status Bar -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3">
                        <div class="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                            <i class="fa-solid fa-route"></i>
                        </div>
                        <div>
                            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wide block">Djibouti - Addis Corridor</span>
                            <span class="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                                <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Normal Freight Flow (98.2%)
                            </span>
                        </div>
                    </div>
                    <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3">
                        <div class="w-9 h-9 rounded-lg bg-blue-50 text-primary-600 flex items-center justify-center shrink-0">
                            <i class="fa-solid fa-warehouse"></i>
                        </div>
                        <div>
                            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wide block">Modjo Dry Port Staging</span>
                            <span class="text-xs font-bold text-primary-600 flex items-center gap-1.5">
                                <span class="w-2 h-2 rounded-full bg-primary-500"></span> Capacity at 64% (Optimal)
                            </span>
                        </div>
                    </div>
                    <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3">
                        <div class="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                            <i class="fa-solid fa-file-contract"></i>
                        </div>
                        <div>
                            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wide block">Tripartite Accord</span>
                            <span class="text-xs font-bold text-purple-600 flex items-center gap-1.5">
                                <span class="w-2 h-2 rounded-full bg-purple-500"></span> Active with MoTL & CETU
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- MEMBERSHIPS TAB -->
            <div id="tab-memberships" class="hidden space-y-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 class="text-2xl font-black text-slate-900 tracking-tight">Registered Members Directory</h2>
                        <p class="text-slate-500 text-xs sm:text-sm mt-0.5">Search and manage all verified commercial transport and logistics operators.</p>
                    </div>
                    <button id="admin-open-member-modal" class="px-4 py-2.5 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors text-xs sm:text-sm shadow-sm flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Register New Member
                    </button>
                </div>

                <!-- Search and Filter Bar -->
                <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <div class="relative w-full sm:w-80">
                        <input type="text" id="admin-member-search" placeholder="Search by name or region..." class="w-full pl-9 pr-4 py-2 text-xs sm:text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 outline-none">
                        <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-slate-400 text-xs"></i>
                    </div>
                    <div class="flex items-center gap-3 w-full sm:w-auto">
                        <label for="admin-member-sector-filter" class="text-xs font-bold text-slate-500 shrink-0">Filter Sector:</label>
                        <select id="admin-member-sector-filter" class="px-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 outline-none bg-white">
                            <option value="all">All Sectors</option>
                            <option value="Freight">Freight Transport</option>
                            <option value="Passenger">Passenger Transport</option>
                            <option value="Logistics">Logistics & Customs</option>
                            <option value="Petroleum">Fuel & Bulk Cargo</option>
                        </select>
                    </div>
                </div>

                <!-- Member Directory Table -->
                <div class="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-xs sm:text-sm" id="admin-members-table">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-bold text-[11px] uppercase tracking-wider border-b border-slate-200">
                                    <th class="py-3.5 px-6">Organization</th>
                                    <th class="py-3.5 px-6">Sector</th>
                                    <th class="py-3.5 px-6">Region / Base</th>
                                    <th class="py-3.5 px-6">Fleet Size</th>
                                    <th class="py-3.5 px-6">Membership Tier</th>
                                    <th class="py-3.5 px-6">Status</th>
                                    <th class="py-3.5 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 text-slate-700">
                                <tr class="hover:bg-slate-50/70 transition-colors admin-member-row" data-sector="Freight">
                                    <td class="py-4 px-6 font-bold text-slate-900">Abay Express Freight PLC</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">Freight</span></td>
                                    <td class="py-4 px-6 text-slate-600">Addis Ababa</td>
                                    <td class="py-4 px-6 font-bold text-slate-900">140 Trucks</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-primary-700">Executive Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors admin-member-row" data-sector="Passenger">
                                    <td class="py-4 px-6 font-bold text-slate-900">Selam Bus Lines S.C.</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Passenger</span></td>
                                    <td class="py-4 px-6 text-slate-600">National Network</td>
                                    <td class="py-4 px-6 font-bold text-slate-900">85 Coaches</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-primary-700">Executive Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors admin-member-row" data-sector="Logistics">
                                    <td class="py-4 px-6 font-bold text-slate-900">Dire Trans Logistics S.C.</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-100">Logistics</span></td>
                                    <td class="py-4 px-6 text-slate-600">Dire Dawa Hub</td>
                                    <td class="py-4 px-6 font-bold text-slate-900">62 Vehicles</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-slate-700">Corporate Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors admin-member-row" data-sector="Freight">
                                    <td class="py-4 px-6 font-bold text-slate-900">Ethio-Djibouti Corridor Haulers</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">Freight</span></td>
                                    <td class="py-4 px-6 text-slate-600">Afar / Somali</td>
                                    <td class="py-4 px-6 font-bold text-slate-900">310 Fleets</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-primary-700">Strategic Assoc.</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors admin-member-row" data-sector="Passenger">
                                    <td class="py-4 px-6 font-bold text-slate-900">Sheger Express Transit</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Passenger</span></td>
                                    <td class="py-4 px-6 text-slate-600">Addis Ababa</td>
                                    <td class="py-4 px-6 font-bold text-slate-900">220 Buses</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-slate-700">Corporate Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
                                    <td class="py-4 px-6 text-right">
                                        <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors admin-member-row" data-sector="Petroleum">
                                    <td class="py-4 px-6 font-bold text-slate-900">Oromia Bulk Petroleum Transporters</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-100">Petroleum</span></td>
                                    <td class="py-4 px-6 text-slate-600">Oromia</td>
                                    <td class="py-4 px-6 font-bold text-slate-900">95 Tankers</td>
                                    <td class="py-4 px-6"><span class="text-xs font-semibold text-slate-700">Corporate Member</span></td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
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
                        <h2 class="text-2xl font-black text-slate-900 tracking-tight">Job Vacancies Management</h2>
                        <p class="text-slate-500 text-xs sm:text-sm mt-0.5">Post, review applicants, and manage recruitment across ETEF Secretariat and member networks.</p>
                    </div>
                    <button id="admin-open-vacancy-modal" class="px-4 py-2.5 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors text-xs sm:text-sm shadow-sm flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Post New Vacancy
                    </button>
                </div>

                <!-- Vacancies Table -->
                <div class="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-xs sm:text-sm" id="admin-vacancies-table">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-bold text-[11px] uppercase tracking-wider border-b border-slate-200">
                                    <th class="py-3.5 px-6">Job Title</th>
                                    <th class="py-3.5 px-6">Duty Station</th>
                                    <th class="py-3.5 px-6">Type</th>
                                    <th class="py-3.5 px-6">Applicants</th>
                                    <th class="py-3.5 px-6">Closing Date</th>
                                    <th class="py-3.5 px-6">Status</th>
                                    <th class="py-3.5 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 text-slate-700">
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900">Senior Transport Logistics Coordinator</td>
                                    <td class="py-4 px-6 text-slate-600">ETEF Secretariat HQ, Addis Ababa</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">Full-Time</span></td>
                                    <td class="py-4 px-6 font-bold text-primary-600">14 Candidates</td>
                                    <td class="py-4 px-6 text-slate-500">Oct 30, 2026</td>
                                    <td class="py-4 px-6"><span class="vacancy-status-pill px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-vacancy-toggle-btn px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer">Close</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900">Heavy Commercial Fleet Safety Inspector</td>
                                    <td class="py-4 px-6 text-slate-600">Dire Dawa Logistics Hub</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">Full-Time</span></td>
                                    <td class="py-4 px-6 font-bold text-primary-600">9 Candidates</td>
                                    <td class="py-4 px-6 text-slate-500">Nov 15, 2026</td>
                                    <td class="py-4 px-6"><span class="vacancy-status-pill px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-vacancy-toggle-btn px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer">Close</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900">Association Operations & Tripartite Liaison</td>
                                    <td class="py-4 px-6 text-slate-600">Kirkos Sub-City Office, Addis Ababa</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">Full-Time</span></td>
                                    <td class="py-4 px-6 font-bold text-primary-600">22 Candidates</td>
                                    <td class="py-4 px-6 text-slate-500">Nov 10, 2026</td>
                                    <td class="py-4 px-6"><span class="vacancy-status-pill px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-vacancy-toggle-btn px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer">Close</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900">Multimodal Freight Forwarding Specialist</td>
                                    <td class="py-4 px-6 text-slate-600">Modjo Dry Port & Terminal</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">Contract</span></td>
                                    <td class="py-4 px-6 font-bold text-primary-600">18 Candidates</td>
                                    <td class="py-4 px-6 text-slate-500">Dec 01, 2026</td>
                                    <td class="py-4 px-6"><span class="vacancy-status-pill px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Active</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-vacancy-toggle-btn px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer">Close</button>
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
                        <h2 class="text-2xl font-black text-slate-900 tracking-tight">News & Articles Management</h2>
                        <p class="text-slate-500 text-xs sm:text-sm mt-0.5">Publish updates, corridor bulletins, and official press releases.</p>
                    </div>
                    <button id="admin-open-news-modal" class="px-4 py-2.5 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors text-xs sm:text-sm shadow-sm flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Create Article
                    </button>
                </div>

                <!-- Articles Table -->
                <div class="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-xs sm:text-sm" id="admin-news-table">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 font-bold text-[11px] uppercase tracking-wider border-b border-slate-200">
                                    <th class="py-3.5 px-6">Headline</th>
                                    <th class="py-3.5 px-6">Category</th>
                                    <th class="py-3.5 px-6">Publish Date</th>
                                    <th class="py-3.5 px-6">Readership</th>
                                    <th class="py-3.5 px-6">Status</th>
                                    <th class="py-3.5 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 text-slate-700">
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">ETEF and Ministry of Transport Sign Historic Tripartite Road Safety Accord</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">Industry News</span></td>
                                    <td class="py-4 px-6 text-slate-500">Oct 01, 2026</td>
                                    <td class="py-4 px-6 font-bold text-slate-700">1,420 views</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Published</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-news-status-btn px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer">Unpublish</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">Djibouti Corridor Freight Tariffs Harmonization Strategy Finalized</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">Corridor Update</span></td>
                                    <td class="py-4 px-6 text-slate-500">Sep 24, 2026</td>
                                    <td class="py-4 px-6 font-bold text-slate-700">2,890 views</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Published</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-news-status-btn px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer">Unpublish</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">Commercial Driver Health, Safety & Rest Facility Initiative 2026</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">Safety & Welfare</span></td>
                                    <td class="py-4 px-6 text-slate-500">Sep 15, 2026</td>
                                    <td class="py-4 px-6 font-bold text-slate-700">980 views</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">Published</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-news-status-btn px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer">Unpublish</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/70 transition-colors">
                                    <td class="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">Draft National Fleet Electrification & Fuel Subsidy Policy Whitepaper</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">Policy & Law</span></td>
                                    <td class="py-4 px-6 text-slate-500">Sep 05, 2026</td>
                                    <td class="py-4 px-6 font-bold text-slate-700">0 views</td>
                                    <td class="py-4 px-6"><span class="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">Draft</span></td>
                                    <td class="py-4 px-6 text-right space-x-2">
                                        <button class="admin-news-status-btn px-3 py-1 bg-primary-50 hover:bg-primary-100 text-primary-700 text-xs font-bold rounded-lg transition-colors cursor-pointer">Publish</button>
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
                        <h2 class="text-2xl font-black text-slate-900 tracking-tight">Partners & Sponsors Management</h2>
                        <p class="text-slate-500 text-xs sm:text-sm mt-0.5">Configure sponsor tiers, strategic institutional accords, and official relationships.</p>
                    </div>
                    <button id="admin-open-partner-modal" class="px-4 py-2.5 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors text-xs sm:text-sm shadow-sm flex items-center gap-2 cursor-pointer self-start sm:self-auto">
                        <i class="fa-solid fa-plus"></i> Add Partner
                    </button>
                </div>

                <!-- Partners Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="admin-partners-grid">
                    <div class="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-100">Strategic Banking</span>
                                <span class="text-xs text-emerald-600 font-bold flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Commercial Bank of Ethiopia (CBE)</h3>
                            <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">Fleet Financing, Letter of Credit & Digital Payment Accord</p>
                        </div>
                        <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2018</span>
                            <span class="font-bold text-primary-600">Tier 1 Partner</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-100">Government Authority</span>
                                <span class="text-xs text-emerald-600 font-bold flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Ministry of Transport & Logistics (MoTL)</h3>
                            <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">Federal Regulatory Framework, Policy Dialogue & Safety Accord</p>
                        </div>
                        <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2014</span>
                            <span class="font-bold text-primary-600">Institutional Accord</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-100">Road Infrastructure</span>
                                <span class="text-xs text-emerald-600 font-bold flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Ethiopian Roads Administration (ERA)</h3>
                            <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">Corridor Maintenance, Weighbridge Standards & Road Safety</p>
                        </div>
                        <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2016</span>
                            <span class="font-bold text-primary-600">Institutional Accord</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-100">Municipal Transit</span>
                                <span class="text-xs text-emerald-600 font-bold flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Addis Ababa City Transport Bureau (AARTB)</h3>
                            <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">Urban Bus Route Licensing & Terminal Management</p>
                        </div>
                        <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2017</span>
                            <span class="font-bold text-primary-600">Municipal Accord</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-100">Regional Freight</span>
                                <span class="text-xs text-emerald-600 font-bold flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Oromia Freight & Transport Enterprise</h3>
                            <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">Regional Fleet Haulage & Agricultural Freight Logistics</p>
                        </div>
                        <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2019</span>
                            <span class="font-bold text-primary-600">Regional Affiliate</span>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-100">Port Authority</span>
                                <span class="text-xs text-emerald-600 font-bold flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Active</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base">Djibouti Port & Free Zones Authority</h3>
                            <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">Maritime Cargo Handover, Doraleh Terminal Staging Protocols</p>
                        </div>
                        <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <span>Partner since: 2015</span>
                            <span class="font-bold text-primary-600">Bilateral Accord</span>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>

    <!-- ADMIN MODALS -->
    <!-- Modal 1: Register Member -->
    <div id="admin-modal-member" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-xs"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div class="flex justify-between items-center mb-6 pb-3 border-b border-slate-100">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">
                        <i class="fa-solid fa-building-circle-check"></i>
                    </div>
                    <h3 class="font-bold text-lg text-slate-900">Register Member Association</h3>
                </div>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>
            <form id="admin-form-new-member" class="space-y-4 text-xs sm:text-sm">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Organization Name *</label>
                    <input type="text" id="member-org-name" required placeholder="e.g. Awash Valley Haulage PLC" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Sector *</label>
                        <select id="member-sector" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 bg-white">
                            <option value="Freight">Freight Transport</option>
                            <option value="Passenger">Passenger Transport</option>
                            <option value="Logistics">Logistics & Customs</option>
                            <option value="Petroleum">Fuel & Bulk Cargo</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Region / Base *</label>
                        <input type="text" id="member-region" required placeholder="e.g. Addis Ababa" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Fleet Count *</label>
                        <input type="text" id="member-fleet" required placeholder="e.g. 45 Trucks" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Membership Tier *</label>
                        <select id="member-tier" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 bg-white">
                            <option value="Corporate Member">Corporate Member</option>
                            <option value="Executive Member">Executive Member</option>
                            <option value="Associate Member">Associate Member</option>
                        </select>
                    </div>
                </div>
                <div class="pt-4 flex justify-end gap-3 border-t border-slate-100">
                    <button type="button" class="admin-modal-close px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-bold transition-colors">Cancel</button>
                    <button type="submit" class="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-bold shadow-sm transition-colors">Save Member</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal 2: Post Vacancy -->
    <div id="admin-modal-vacancy" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-xs"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div class="flex justify-between items-center mb-6 pb-3 border-b border-slate-100">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>
                    <h3 class="font-bold text-lg text-slate-900">Post Career Vacancy</h3>
                </div>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>
            <form id="admin-form-new-vacancy" class="space-y-4 text-xs sm:text-sm">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Job Title *</label>
                    <input type="text" id="vacancy-title" required placeholder="e.g. Customs Transit Liaison Officer" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Station / Location *</label>
                        <input type="text" id="vacancy-station" required placeholder="e.g. Galafi Border Post" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Contract Type *</label>
                        <select id="vacancy-type" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 bg-white">
                            <option value="Full-Time">Full-Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Part-Time">Part-Time</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Closing Date *</label>
                    <input type="text" id="vacancy-deadline" required placeholder="e.g. Dec 15, 2026" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                </div>
                <div class="pt-4 flex justify-end gap-3 border-t border-slate-100">
                    <button type="button" class="admin-modal-close px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-bold transition-colors">Cancel</button>
                    <button type="submit" class="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-bold shadow-sm transition-colors">Publish Vacancy</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal 3: Create Article -->
    <div id="admin-modal-news" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-xs"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div class="flex justify-between items-center mb-6 pb-3 border-b border-slate-100">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                        <i class="fa-solid fa-newspaper"></i>
                    </div>
                    <h3 class="font-bold text-lg text-slate-900">Publish News Bulletin</h3>
                </div>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>
            <form id="admin-form-new-news" class="space-y-4 text-xs sm:text-sm">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Headline *</label>
                    <input type="text" id="news-title" required placeholder="e.g. New Bilateral Agreement Signed at Galafi" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Category *</label>
                        <select id="news-category" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 bg-white">
                            <option value="Industry News">Industry News</option>
                            <option value="Corridor Update">Corridor Update</option>
                            <option value="Safety & Welfare">Safety & Welfare</option>
                            <option value="Policy & Law">Policy & Law</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Status *</label>
                        <select id="news-status" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 bg-white">
                            <option value="Published">Published</option>
                            <option value="Draft">Draft</option>
                        </select>
                    </div>
                </div>
                <div class="pt-4 flex justify-end gap-3 border-t border-slate-100">
                    <button type="button" class="admin-modal-close px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-bold transition-colors">Cancel</button>
                    <button type="submit" class="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-bold shadow-sm transition-colors">Save & Post</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal 4: Add Partner -->
    <div id="admin-modal-partner" class="hidden fixed inset-0 z-50 items-center justify-center p-4">
        <div class="admin-modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-xs"></div>
        <div class="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div class="flex justify-between items-center mb-6 pb-3 border-b border-slate-100">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
                        <i class="fa-solid fa-handshake"></i>
                    </div>
                    <h3 class="font-bold text-lg text-slate-900">Add Strategic Partner / Sponsor</h3>
                </div>
                <button type="button" class="admin-modal-close text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>
            <form id="admin-form-new-partner" class="space-y-4 text-xs sm:text-sm">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Partner Organization Name *</label>
                    <input type="text" id="partner-name" required placeholder="e.g. Ethiopian Insurance Corporation" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Sector / Type *</label>
                        <input type="text" id="partner-sector" required placeholder="e.g. Commercial Underwriting" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Agreement Tier *</label>
                        <select id="partner-tier" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 bg-white">
                            <option value="Institutional Accord">Institutional Accord</option>
                            <option value="Tier 1 Partner">Tier 1 Partner</option>
                            <option value="Corporate Sponsor">Corporate Sponsor</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Scope / Collaboration Overview</label>
                    <input type="text" id="partner-desc" placeholder="e.g. Comprehensive commercial fleet and cargo underwriting" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500">
                </div>
                <div class="pt-4 flex justify-end gap-3 border-t border-slate-100">
                    <button type="button" class="admin-modal-close px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-bold transition-colors">Cancel</button>
                    <button type="submit" class="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-bold shadow-sm transition-colors">Save Partner</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Toast Notification -->
    <div id="toast" class="fixed bottom-6 right-6 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl transform translate-y-20 opacity-0 transition-all duration-300 z-50 text-xs sm:text-sm font-semibold flex items-center gap-3 border border-slate-700/80">
        <i class="fa-solid fa-circle-check text-emerald-400 text-base"></i>
        <span id="toastMessage">Action completed successfully</span>
    </div>

</div>
`,Yv={title:"Admin Dashboard - ETEF",markup:Fv},Vv=`
    ${Ke("/privacy","ENG")}

    <main class="flex-grow bg-slate-50 py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-primary-600 transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-slate-300"></i>
                                <span class="text-slate-800 font-semibold">Privacy Policy</span>
                            </div>
                        </li>
                    </ol>
                </nav>

            <article class="bg-white rounded-lg shadow-sm border border-slate-200 p-8 sm:p-12">
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
                        <div class="bg-primary-50 rounded-lg p-5 border border-primary-100 flex items-start gap-4">
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

    ${$e("ENG")}
`,Qv=`
    ${Ke("/privacy","አማ")}

    <main class="flex-grow bg-slate-50 py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-primary-600 transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-slate-300"></i>
                                <span class="text-slate-800 font-semibold">የግላዊነት ፖሊሲ</span>
                            </div>
                        </li>
                    </ol>
                </nav>

            <article class="bg-white rounded-lg shadow-sm border border-slate-200 p-8 sm:p-12">
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
                        <div class="bg-primary-50 rounded-lg p-5 border border-primary-100 flex items-start gap-4">
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

    ${$e("አማ")}
`,fm={title:{ENG:"Privacy Policy - Ethiopian Transport Employers Federation",አማ:"የግላዊነት ፖሊሲ - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን"},markup:{ENG:Vv,አማ:Qv}},Xv=`
    ${Ke("/terms","ENG")}

    <main class="flex-grow bg-slate-50 py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-primary-600 transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> Home</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-slate-300"></i>
                                <span class="text-slate-800 font-semibold">Terms & Conditions</span>
                            </div>
                        </li>
                    </ol>
                </nav>

            <article class="bg-white rounded-lg shadow-sm border border-slate-200 p-8 sm:p-12">
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
                        <div class="bg-primary-50 rounded-lg p-5 border border-primary-100 flex items-start gap-4">
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

    ${$e("ENG")}
`,Zv=`
    ${Ke("/terms","አማ")}

    <main class="flex-grow bg-slate-50 py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-primary-600 transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs"></i> መነሻ</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <i class="fa-solid fa-chevron-right text-xs mx-2 text-slate-300"></i>
                                <span class="text-slate-800 font-semibold">ውል እና ሁኔታዎች</span>
                            </div>
                        </li>
                    </ol>
                </nav>

            <article class="bg-white rounded-lg shadow-sm border border-slate-200 p-8 sm:p-12">
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
                        <div class="bg-primary-50 rounded-lg p-5 border border-primary-100 flex items-start gap-4">
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

    ${$e("አማ")}
`,mm={title:{ENG:"Terms of Service - Ethiopian Transport Employers Federation",አማ:"የአጠቃቀም ደንቦች - የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን"},markup:{ENG:Xv,አማ:Zv}},Kv=`
    ${Ke("","ENG")}

    <main class="flex-grow flex items-center justify-center py-20 px-4">
        <div class="max-w-xl text-center">
            <div class="w-24 h-24 mx-auto mb-6 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-4xl shadow-sm border border-primary-100">
                <i class="fa-solid fa-compass-drafting"></i>
            </div>
            <span class="text-xs font-bold text-primary-600 uppercase tracking-widest block mb-2">Error 404</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Destination Not Found</h1>
            <p class="text-slate-600 text-base leading-relaxed mb-8">
                The resource or page you are looking for may have been updated, relocated, or is no longer available at this address.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="/" class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-colors shadow-sm inline-flex items-center gap-2">
                    <i class="fa-solid fa-house"></i> Return to Home
                </a>
                <a href="/news" class="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-lg transition-colors inline-flex items-center gap-2">
                    <i class="fa-solid fa-newspaper"></i> Latest News
                </a>
                <a href="/contact" class="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-lg transition-colors inline-flex items-center gap-2">
                    <i class="fa-solid fa-envelope"></i> Contact Secretariat
                </a>
            </div>
        </div>
    </main>

    ${$e("ENG")}
`,$v=`
    ${Ke("","አማ")}

    <main class="flex-grow flex items-center justify-center py-20 px-4">
        <div class="max-w-xl text-center">
            <div class="w-24 h-24 mx-auto mb-6 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-4xl shadow-sm border border-primary-100">
                <i class="fa-solid fa-compass-drafting"></i>
            </div>
            <span class="text-xs font-bold text-primary-600 uppercase tracking-widest block mb-2">ስህተት 404</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">የተጠየቀው ገጽ አልተገኘም</h1>
            <p class="text-slate-600 text-base leading-relaxed mb-8">
                የፈለጉት ገጽ ወይም መረጃ ተዛውሯል፣ ተሰርዟል ወይም በዚህ አድራሻ አይገኝም። እባክዎ ወደ መነሻ ገጽ ይመለሱ ወይም ሌሎችን አማራጮች ይጠቀሙ።
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="/" class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-colors shadow-sm inline-flex items-center gap-2">
                    <i class="fa-solid fa-house"></i> ወደ መነሻ ገጽ ይመለሱ
                </a>
                <a href="/news" class="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-lg transition-colors inline-flex items-center gap-2">
                    <i class="fa-solid fa-newspaper"></i> ወቅታዊ ዜናዎች
                </a>
                <a href="/contact" class="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-lg transition-colors inline-flex items-center gap-2">
                    <i class="fa-solid fa-envelope"></i> ዋና ጽሕፈት ቤቱን ያነጋግሩ
                </a>
            </div>
        </div>
    </main>

    ${$e("አማ")}
`,Jv={title:{ENG:"404 - Page Not Found | ETEF",አማ:"404 - ገጹ አልተገኘም | ኢትራአፌ"},markup:{ENG:Kv,አማ:$v}},Js={berehane:{name:"Ato Berehane Zeru",role:"President, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/Ato Berehane Zeru.jpg",experience:"Founding Leader & Senior Transport Industry Principal",education:"Transport Enterprise Leadership & Commercial Fleet Governance",bio:["Ato Berehane Zeru serves as the President of the Board of Directors of the Ethiopian Transport Employers' Federation (ETEF). Under his visionary leadership, transporters across Ethiopia united to establish an apex national federation representing commercial freight and passenger carriers.","He was central to mobilizing 17 employers' associations—comprising over 6,652 members—to attain official legal certification of recognition from the Ministry of Labor and Social Affairs on Ginbot 4, 2010 E.C. (May 12, 2018).","As President, he leads the Federation's high-level dialogue with federal ministries, parliamentary committees, and international tripartite social partners, defending members' legal and economic rights."],responsibilities:["Presiding over the Federation General Assembly and Executive Board meetings","Representing Ethiopian transport employers before federal authorities and international forums","Directing national advocacy for industrial peace and regulatory protection"]},mesele:{name:"Ato Mesele Hagos",role:"Vice President, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/Ato Mesele Hagos.jpg",experience:"Senior Transport Executive & Collective Bargaining Leader",education:"Business Management & Industrial Relations",bio:["Ato Mesele Hagos serves as the Vice President of the Board of Directors of ETEF. He works tirelessly to advance the operational efficiency, safety, and economic viability of transport operations nationwide.","He has been an ardent champion of industrial peace, collective bargaining agreements, and constructive social dialogue between transport employers, government regulatory agencies, and labor syndicates.","He plays an instrumental role in resolving commercial disputes, ensuring fair labor regulations under Proclamation No. 1156/2012, and coordinating capacity-building programs."],responsibilities:["Supporting the President in executive leadership and strategic sector oversight","Leading collective bargaining negotiations and industrial dispute resolution","Coordinating member satisfaction, welfare, and market networking initiatives"]},derje:{name:"Ato Derje Legesse",role:"Secretary, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/Ato Derje Legesse.jpg",experience:"Secretariat Administration, Regulatory Law & Documentation",education:"Law & Public Administration",bio:["Ato Derje Legesse serves as the Secretary of the Board of Directors of ETEF. He manages institutional governance records, statutory documentation, and official communications with affiliated associations.","His legal and administrative acumen ensures the Federation adheres to constitutional standards, labor proclamations, and ratified international conventions.","He regularly oversees the compilation of collective bargaining agreements, member memoranda of association, and legislative amendment submissions to the government."],responsibilities:["Managing Executive Board records, documentation, and statutory filings","Overseeing legal compliance with FDRE Constitution Article 31 and Labor Proclamation 1156/2012","Directing member communications and secretarial governance"]},tadsse:{name:"Ato Tadsse Ejegu",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/placeholder_avatar.svg",experience:"Commercial Haulier Operations & Fleet Coordination",education:"Transport Logistics Management",bio:["Ato Tadsse Ejegu is an esteemed Member of the ETEF Board of Directors. He brings decades of operational experience in commercial transport, route staging, and inter-association cooperation.","He actively advises on the enactment and amendment of transport proclamations and regulations to safeguard employers' rights and business sustainability."],responsibilities:["Advising on route operations and regional transport logistics","Contributing to national legislative and tariff review panels"]},dejene:{name:"Ato Dejene Luchie",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/Ato Dejene Luchie.jpg",experience:"Dry Cargo Logistics & Regional Association Affairs",education:"Business Administration & Logistics",bio:["Ato Dejene Luchie is a founding pioneer who played an active role dating back to the Dry Cargo Associations Union established in Hidar 2009 E.C. He serves as an executive voice for freight hauliers and member associations."],responsibilities:["Liaison with dry cargo association members and regional operators","Supporting member rights advocacy and conflict prevention"]},nurdin:{name:"Ato Nurdin Ditamo",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/Ato Nurdin Ditamo.jpg",experience:"Fleet Management & Commercial Operator Representation",education:"Transport Administration",bio:["Ato Nurdin Ditamo is a dedicated Board Member focused on modernizing member operations through contemporary technological advancements, training, and occupational health and safety standards."],responsibilities:["Promoting modern fleet technologies and Kaizen productivity methods","Monitoring operator welfare and fair tax advisory services"]},mekonnen:{name:"Ato Mekonnen Workie",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/Ato Mekonnen Workie.jpg",experience:"Transport Operations & Strategic Enterprise Planning",education:"Economics & Transport Management",bio:["Ato Mekonnen Workie contributes deep industry insight to ETEF's executive decisions, championing business planning, competitive advantage training, and market networking for member carriers."],responsibilities:["Leading market networking and business planning initiatives","Overseeing capacity building in leadership and governance"]},seid:{name:"Ato Seid Ibrahim",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/Ato Seid Ibrahim.jpg",experience:"Cross-Corridor Freight & Association Leadership",education:"Transport Operations",bio:["Ato Seid Ibrahim represents commercial carriers operating along critical national corridors, advocating for streamlined checkpoint procedures, fair transit tariffs, and driver safety."],responsibilities:["Corridor operations monitoring and trade barrier alleviation","Supporting member defense in transport commercial tribunals"]},msfin:{name:"Ato Msfin Eshetu",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/Ato Msfin Eshetu.jpg",experience:"Passenger & Freight Fleet Coordination",education:"Automotive Technology & Fleet Management",bio:["Ato Msfin Eshetu works to ensure high operational efficiency and safety across affiliated fleets, coordinating training on management, labor law, and occupational health."],responsibilities:["Safety standards oversight and vehicle roadworthiness advocacy","Liaison with labor and vocational training institutes"]},mohammed:{name:"Ato Mohammed Hassan",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/Ato Mohammed Hassan.jpg",experience:"Regional Transport Associations & Commercial Haulage",education:"Public Relations & Transport Management",bio:["Ato Mohammed Hassan champions the voices of regional transport operators, ensuring that national policies reflect ground realities across all regions and corridor checkpoints."],responsibilities:["Regional member relations and inter-regional route mediation","Bilateral forum organization and stakeholder consultation"]},abeba:{name:"Ato Abeba Kassa",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/placeholder_avatar.svg",experience:"Commercial Logistics & Transport Enterprise Growth",education:"Logistics & Supply Chain Management",bio:["Ato Abeba Kassa brings extensive expertise in transport business sustainability, collective agreement negotiations, and promoting public-private partnerships."],responsibilities:["Promoting public-private dialogue and trade exhibitions","Advising on employer-employee collective agreements"]},yergalem:{name:"Ato Yergalem Sefani",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/Ato Yergalem Sefani.jpg",experience:"Transport Operations & Legal Defense Coordination",education:"Commercial Law & Transport Operations",bio:["Ato Yergalem Sefani coordinates legal advisory support, dispute resolution, and court representation for members confronting regulatory or commercial challenges."],responsibilities:["Coordinating legal representation before courts and administrative tribunals","Reviewing drafts of national transport proclamations and directives"]},engeda:{name:"Ato Engeda H/Maryam",role:"Member, Board of Directors",org:"Ethiopian Transport Employers' Federation (ETEF)",image:"/images/Ato Engeda H.Maryam.jpg",experience:"Commercial Transport Management & Fleet Innovation",education:"Business Administration & Fleet Systems",bio:["Ato Engeda H/Maryam is a visionary Board Member advocating for the adoption of contemporary technological tools, fuel efficiency, and professional development programs."],responsibilities:["Advancing technological adoption and digital management systems","Organizing domestic and international experience-sharing programs"]}},Ps={berehane:{name:"አቶ ብርሃኔ ዘርዑ",role:"የዳይሬክተሮች ቦርድ ፕሬዝዳንት",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/Ato Berehane Zeru.jpg",experience:"መሥራች መሪ እና የትራንስፖርት ዘርፍ ከፍተኛ ባለሙያ",education:"የትራንስፖርት ድርጅት አመራር እና የንግድ ተሽከርካሪዎች አስተዳደር",bio:["አቶ ብርሃኔ ዘርዑ የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን የሥራ አስፈጻሚ ቦርድ ፕሬዝዳንት በመሆን በማገልገል ላይ ይገኛሉ። በእሳቸው መሪነት በመላ ሀገሪቱ የሚገኙ የትራንስፖርት አሠሪዎች በአንድነት ተደራጅተው የንግድ ጭነት እና የተሳፋሪ አጓጓዦችን የሚወክል ጠንካራ ብሔራዊ ፌዴሬሽን መሥርተዋል።","በግንቦት 04 ቀን 2010 ዓ/ም 17 የአሠሪ ማኅበራትንና ከ6,652 በላይ አባላትን በማስተባበር ከሠራተኛና ማኅበራዊ ጉዳይ ሚኒስቴር ይፋዊ የሕጋዊ ሰውነት ማረጋገጫ የምስክር ወረቀት እንዲገኝ ከፍተኛ ሚና ተጫውተዋል።","በፕሬዝዳንትነት ኃላፊነታቸው የፌዴሬሽኑን ከፍተኛ ውይይቶች ከፌዴራል ሚኒስቴር መሥሪያ ቤቶች፣ ከሕዝብ ተወካዮች ምክር ቤት እና ከዓለም አቀፍ የሦስትዮሽ አጋሮች ጋር በመምራት የአባላትን ሕጋዊና ኢኮኖሚያዊ መብቶች ያስከብራሉ።"],responsibilities:["የፌዴሬሽኑን ጠቅላላ ጉባኤ እና የሥራ አስፈጻሚ ቦርድ ስብሰባዎችን በሊቀመንበርነት መምራት","የኢትዮጵያን የትራንስፖርት አሠሪዎች በመንግሥት እና በዓለም አቀፍ መድረኮች መወከል","የኢንዱስትሪ ሰላምን እና የቁጥጥር ጥበቃን በተመለከተ ብሔራዊ ጥብቅናን መምራት"]},mesele:{name:"አቶ መሠለ ሐጎስ",role:"የዳይሬክተሮች ቦርድ ም/ፕሬዝዳንት",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/Ato Mesele Hagos.jpg",experience:"ከፍተኛ የትራንስፖርት ሥራ አስፈፃሚ እና የጋራ ድርድር መሪ",education:"የቢዝነስ ማኔጅመንት እና የኢንዱስትሪ ግንኙነት",bio:["አቶ መሠለ ሐጎስ የኢትራአፌ የዳይሬክተሮች ቦርድ ም/ፕሬዝዳንት በመሆን ያገለግላሉ። በመላ ሀገሪቱ የትራንስፖርት ስምሪት ቅልጥፍናን፣ ደህንነትንና ዘላቂነትን ለማሳደግ በትጋት ይሰራሉ።","የኢንዱስትሪ ሰላም፣ የጋራ ድርድር ስምምነቶች እና በትራንስፖርት አሠሪዎች፣ በመንግሥት ተቆጣጣሪ አካላት እና በሠራተኛ ማኅበራት መካከል ገንቢ ውይይት እንዲኖር የበኩላቸውን አስተዋጽኦ ያበረክታሉ።","የንግድ አለመግባባቶችን በመፍታት፣ በአዋጅ ቁጥር 1156/2012 መሠረት ፍትሃዊ የሥራ ሁኔታዎች እንዲሰፍኑ በማድረግ እና የአቅም ግንባታ ስልጠናዎችን በማስተባበር ረገድ ቁልፍ ሚና አላቸው።"],responsibilities:["ፕሬዝዳንቱን በከፍተኛ አመራርና በስትራቴጂካዊ የዘርፍ ክትትል ስራዎች መደገፍ","የጋራ ድርድር ውይይቶችንና የኢንዱስትሪ አለመግባባቶች አፈታትን በበላይነት መምራት","የአባላት እርካታ፣ ደህንነት እና የገበያ ትስስር ተነሳሽነቶችን ማስተባበር"]},derje:{name:"አቶ ደረጀ ለገሠ",role:"የዳይሬክተሮች ቦርድ ዋና ፀሐፊ",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/Ato Derje Legesse.jpg",experience:"የጽሕፈት ቤት አስተዳደር፣ የሕግ ጉዳዮች እና የሰነድ ዝግጅት",education:"ሕግ እና የሕዝብ አስተዳደር",bio:["አቶ ደረጀ ለገሠ የኢትራአፌ የዳይሬክተሮች ቦርድ ዋና ፀሐፊ በመሆን ያገለግላሉ። የተቋማዊ አስተዳደር መዛግብትን፣ ሕጋዊ ሰነዶችን እና ከአባል ማኅበራት ጋር የሚደረጉ ይፋዊ ግንኙነቶችን ይመራሉ።","የሕግና የአስተዳደር ዕውቀታቸው ፌዴሬሽኑ የሕገ-መንግሥት ድንጋጌዎችን፣ የሠራተኛ አዋጆችን እና የተፈረሙ ዓለም አቀፍ ስምምነቶችን አክብሮ እንዲሰራ ያረጋግጣል።","የጋራ ድርድር ሰነዶች፣ የአባላት መመስረቻ ጽሑፎች እና ለመንግሥት የሚቀርቡ የሕግ ማሻሻያ ጥናቶች በበላይነት እንዲዘጋጁ ያደርጋሉ።"],responsibilities:["የሥራ አስፈጻሚ ቦርድ መዛግብትን፣ ሰነዶችን እና ሕጋዊ ሪፖርቶችን ማስተዳደር","በሕገ-መንግሥቱ አንቀጽ 31 እና በአዋጅ 1156/2012 መሠረት ሕጋዊ ተገዢነትን መከታተል","የአባላት ግንኙነትን እና የጽሕፈት ቤቱን አስተዳደራዊ ተግባራት ማስተባበር"]},tadsse:{name:"አቶ ታደሰ እጅጉ",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/placeholder_avatar_am.svg",experience:"የንግድ ጭነት ትራንስፖርት ኦፕሬሽን እና የስምሪት ቅንጅት",education:"የትራንስፖርት ሎጂስቲክስ ማኔጅመንት",bio:["አቶ ታደሰ እጅጉ የኢትራአፌ የዳይሬክተሮች ቦርድ አባል ሲሆኑ በንግድ ትራንስፖርት፣ በመስመር ስምሪት እና በማኅበራት ቅንጅት የካበተ የበርካታ ዓመታት ልምድ አላቸው።","የትራንስፖርት አዋጆችና ደንቦች ሲወጡና ሲሻሻሉ የአሠሪዎችን መብትና የንግድ ዘላቂነት እንዲያረጋግጡ የሙያ ምክር ይሰጣሉ።"],responsibilities:["በመስመር ስምሪት እና በክልላዊ ትራንስፖርት ሎጂስቲክስ ላይ የማማከር ድጋፍ መስጠት","በብሔራዊ የሕግ እና የታሪፍ ክለሳ መድረኮች ላይ ንቁ ተሳትፎ ማድረግ"]},dejene:{name:"አቶ ደጀኔ ሉጬ",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/Ato Dejene Luchie.jpg",experience:"የደረቅ ጭነት ሎጂስቲክስ እና የክልል ማኅበራት ጉዳዮች",education:"የንግድ አስተዳደር እና ሎጂስቲክስ",bio:["አቶ ደጀኔ ሉጬ በህዳር 2009 ዓ/ም ከተመሰረተው የደረቅ ጭነት አሠሪዎች ማኅበራት ኅብረት ጀምሮ ንቁ ተሳትፎ ያደረጉ መሥራች አባል ናቸው። የጭነት አጓጓዦች እና የአባል ማኅበራት ድምፅ ሆነው ያገለግላሉ።"],responsibilities:["ከደረቅ ጭነት አባል ማኅበራት እና ከክልል ኦፕሬተሮች ጋር ግንኙነት መፍጠር","የአባላትን መብት የማስከበር እና አለመግባባቶችን የመከላከል ስራዎችን መደገፍ"]},nurdin:{name:"አቶ ኑረዲን ዲታሞ",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/Ato Nurdin Ditamo.jpg",experience:"የተሽከርካሪዎች አስተዳደር እና የንግድ አጓጓዦች ውክልና",education:"የትራንስፖርት አስተዳደር",bio:["አቶ ኑረዲን ዲታሞ የአባላትን የሥራ አፈፃፀም በዘመናዊ ቴክኖሎጂዎች፣ በስልጠና እና በሥራ አካባቢ ጤናና ደህንነት ደረጃዎች ለማዘመን በትጋት የሚሰሩ የቦርድ አባል ናቸው።"],responsibilities:["ዘመናዊ የፍሊት ቴክኖሎጂዎችን እና የካይዘን የአሰራር ጥበቦችን ማስተዋወቅ","የኦፕሬተሮችን ደህንነት እና ፍትሃዊ የግብር ምክር አገልግሎቶችን መከታተል"]},mekonnen:{name:"አቶ መኮንን ወርቄ",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/Ato Mekonnen Workie.jpg",experience:"የትራንስፖርት ኦፕሬሽን እና ስትራቴጂካዊ የድርጅት እቅድ",education:"ኢኮኖሚክስ እና የትራንስፖርት ማኔጅመንት",bio:["አቶ መኮንን ወርቄ ለኢትራአፌ ውሳኔዎች ጥልቅ የዘርፍ ዕውቀታቸውን ያበረክታሉ፤ ለአባል አጓጓዦች የቢዝነስ እቅድ ዝግጅት፣ የተወዳዳሪነት ስልጠና እና የገበያ ትስስር ስራዎችን ይመራሉ።"],responsibilities:["የገበያ ትስስር እና የቢዝነስ ፕላን ተነሳሽነቶችን በበላይነት መምራት","በአመራር እና በአስተዳደር ዙሪያ የአቅም ግንባታ ስልጠናዎችን ማስተባበር"]},seid:{name:"አቶ ሰዒድ ኢብራሂም",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/Ato Seid Ibrahim.jpg",experience:"የኮሪደር ተሻጋሪ ጭነት እና የማኅበራት አመራር",education:"የትራንስፖርት ኦፕሬሽን",bio:["አቶ ሰዒድ ኢብራሂም በዋና ዋና ብሔራዊ ኮሪደሮች ላይ የሚሰሩ የንግድ አጓጓዦችን ይወክላሉ፤ የተቀላጠፈ የኬላ አሰራር፣ ፍትሃዊ የትራንዚት ታሪፍ እና የአሽከርካሪዎች ደህንነት እንዲረጋገጥ ይሰራሉ።"],responsibilities:["የኮሪደር እንቅስቃሴዎችን መከታተል እና የንግድ እንቅፋቶችን ማስወገድ","በትራንስፖርት ንግድ ፍርድ ቤቶች የአባላትን ሕጋዊ መብት መደገፍ"]},msfin:{name:"አቶ መስፍን እሸቱ",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/Ato Msfin Eshetu.jpg",experience:"የተሳፋሪ እና የጭነት ተሽከርካሪዎች ስምሪት ቅንጅት",education:"አውቶሞቲቭ ቴክኖሎጂ እና የፍሊት ማኔጅመንት",bio:["አቶ መስፍን እሸቱ በአባል ድርጅቶች ዘንድ ከፍተኛ የስራ ቅልጥፍና እና ደህንነት እንዲረጋገጥ ይሰራሉ፤ በማኔጅመንት፣ በሠራተኛ ሕግ እና በሙያ ጤና ዙሪያ ስልጠናዎችን ያስተባብራሉ።"],responsibilities:["የደህንነት ደረጃዎችን መቆጣጠር እና የተሽከርካሪዎች የብቃት ማረጋገጫ ድጋፍ","ከሠራተኛና ከቴክኒክና ሙያ ማሰልጠኛ ተቋማት ጋር ግንኙነት መፍጠር"]},mohammed:{name:"አቶ መሐመድ ሀሰን",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/Ato Mohammed Hassan.jpg",experience:"የክልል ትራንስፖርት ማኅበራት እና የንግድ ጭነት አገልግሎት",education:"የሕዝብ ግንኙነት እና የትራንስፖርት ማኔጅመንት",bio:["አቶ መሐመድ ሀሰን የክልል ትራንስፖርት ኦፕሬተሮችን ድምፅ ያሰማሉ፤ ሀገራዊ ፖሊሲዎች በሁሉም ክልሎችና የኮሪደር ኬላዎች ያሉትን ተጨባጭ ሁኔታዎች እንዲያገናዝቡ ይሰራሉ።"],responsibilities:["የክልል አባላት ግንኙነት እና የክልል አቋራጭ መስመሮች የማስታረቅ ስራ","የሁለትዮሽ መድረኮችን ማዘጋጀት እና ከባለድርሻ አካላት ጋር መመካከር"]},abeba:{name:"አቶ አበባው ካሣ",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/placeholder_avatar_am.svg",experience:"የንግድ ሎጂስቲክስ እና የትራንስፖርት ድርጅት ዕድገት",education:"ሎጂስቲክስ እና የአቅርቦት ሰንሰለት አስተዳደር",bio:["አቶ አበባው ካሣ በትራንስፖርት ንግድ ዘላቂነት፣ በጋራ ስምምነት ድርድሮች እና የመንግሥትና የግል ዘርፍ አጋርነትን በማጠናከር ረገድ ሰፊ ልምድ አላቸው።"],responsibilities:["የመንግሥትና የግል ዘርፍ ውይይቶችንና የንግድ ኤግዚቢሽኖችን ማስተዋወቅ","በአሠሪና ሠራተኛ የጋራ ስምምነቶች ላይ የሙያ ምክር መስጠት"]},yergalem:{name:"አቶ ይርጋዓለም ሰፋኒ",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/Ato Yergalem Sefani.jpg",experience:"የትራንስፖርት ኦፕሬሽን እና የሕግ ድጋፍ አስተባባሪነት",education:"የንግድ ሕግ እና የትራንስፖርት ኦፕሬሽን",bio:["አቶ ይርጋዓለም ሰፋኒ ከአስተዳደራዊ ወይም ከንግድ ማነቆዎች ጋር ለተጋፈጡ አባላት የሕግ ምክር አገልግሎት፣ የክርክር አፈታት እና የፍርድ ቤት ውክልና ድጋፍን ያስተባብራሉ።"],responsibilities:["በፍርድ ቤቶች እና በአስተዳደራዊ ጉባኤዎች ፊት የሕግ ውክልናን ማስተባበር","የብሔራዊ ትራንስፖርት አዋጆችና መመሪያዎች ረቂቅ ሰነዶችን መገምገም"]},engeda:{name:"አቶ እንግዳ ኃ/ማርያም",role:"የዳይሬክተሮች ቦርድ አባል",org:"የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን (ኢትራአፌ)",image:"/images/Ato Engeda H.Maryam.jpg",experience:"የንግድ ትራንስፖርት አስተዳደር እና የተሽከርካሪዎች ፈጠራ",education:"የቢዝነስ አስተዳደር እና የተሽከርካሪዎች ቴክኖሎጂ",bio:["አቶ እንግዳ ኃ/ማርያም ዘመናዊ የቴክኖሎጂ መሳሪያዎችን ተግባራዊ ለማድረግ፣ የነዳጅ አጠቃቀም ቅልጥፍናን ለማሻሻል እና የሙያ ማሻሻያ ፕሮግራሞችን ለማስፋፋት የሚሰሩ የቦርድ አባል ናቸው።"],responsibilities:["የቴክኖሎጂ አጠቃቀምን እና የዲጂታል አስተዳደር ስርዓቶችን ማሳደግ","የሀገር ውስጥ እና የውጭ ሀገራት የልምድ ልውውጥ ፕሮግራሞችን ማዘጋጀት"]}};Js.dawit=Js.berehane;Js.tigist=Js.mesele;Js.yared=Js.derje;Ps.dawit=Ps.berehane;Ps.tigist=Ps.mesele;Ps.yared=Ps.derje;const Pv={"shared-road":{title:"A Shared Road to a Stronger Transport Industry",category:"Industry Perspectives",date:"24 September 2026",readTime:"5 min read",image:"/images/news_mountain_truck.jpg",author:"ETEF Secretariat Editorial Team",content:["Ethiopia's commercial transport landscape is undergoing a decisive transformation. As our road network expands to connect regional agricultural hubs with industrial corridors, commercial transport employers bear the essential responsibility of keeping supply chains moving with efficiency, safety, and dignity.","In recent stakeholder forums conducted with the Ministry of Transport and Logistics and regional carrier associations, one consensus emerged clearly: fragmented operations undermine everyone. Small-scale truckers face crippling fuel price swings and parts shortages alone, while passenger bus operators struggle with inconsistent terminal tariffs.","The Ethiopian Transport Employers Federation serves as the unifying bridge. By pooling our voice, we ensure that tax policies on commercial spare parts, road user tariffs, and regional border logistics are debated with empirical data from actual fleet operators on the ground.","Moving forward, our priority focuses on three core pillars: structured social dialogue between employers and labor unions, institutionalized driver safety certification, and digital freight-matching platforms that reduce empty return trips across our international corridors."],keyTakeaways:["Fragmented operator voices reduce bargaining power on national fuel and tax regulations.","ETEF provides structured negotiation desks directly with federal ministries.","Empty return haulage can be curtailed through shared digital freight-matching networks."]},"safer-journeys":{title:"Safer Journeys Begin Before the Engine Starts",category:"Safety & Skills",date:"22 September 2026",readTime:"4 min read",image:"/images/news_mechanic_tire.jpg",author:"Eng. Dawit Kebede, Safety Director",content:["Road safety in commercial transport is not an accidental outcome—it is an operational discipline. Over 70% of preventable mechanical failures on Ethiopian highways, from brake overheating to tire blowouts, can be identified during a 15-minute daily pre-trip inspection.","ETEF has compiled an easy-to-use 10-point vehicle inspection checklist for heavy freight and inter-city passenger operators. The protocol covers tire tread depth and inflation, brake line pneumatic pressure, coupling pins, steering linkage, emergency lighting, and fire suppression readiness.","Furthermore, the federation is partnering with regional driver training institutes to implement mandatory rest breaks along the Addis Ababa–Awash–Dire Dawa route. Driver fatigue remains a top contributing factor in nocturnal rollover incidents.","Fleet operators who adopt standardized daily inspection logs have reported a 34% drop in highway breakdowns and up to 18% savings in long-term maintenance costs over a single operational fiscal year."],keyTakeaways:["A 15-minute pre-trip inspection prevents the vast majority of highway breakdowns.","Standardized vehicle checklists save up to 18% in preventative fleet maintenance.","Driver fatigue mitigation along long corridors is vital for preserving human life and freight."]},"employer-voice":{title:"Making Space for the Employer Voice",category:"Association Updates",date:"18 September 2026",readTime:"3 min read",image:"/images/news_association_meeting.jpg",author:"Yared Haile, Secretary General",content:["For decades, discussions regarding transport policy, labor guidelines, and city transit access were conducted without systematic representation from the employers who invest capital, purchase fleets, and assume commercial risks.","ETEF was founded specifically to institutionalize this voice. In our regular roundtables with the Ministry of Labor and Skills and the Ministry of Transport, we represent over 1,200 commercial employers across freight, passenger, and logistics operations.","Our agenda is constructive and solution-oriented. We advocate for balanced collective bargaining agreements that ensure fair wages and dignity for drivers while protecting operators from wildcat stoppages, arbitrary municipal transit levies, and unilateral freight confiscations during local unrest.","We encourage all regional transport associations and independent logistics enterprises to actively participate in our regional consultative committees so our national representations remain deeply rooted in current operational realities."],keyTakeaways:["Employers carry the capital risk and need structured representation in policy making.","Balanced collective bargaining agreements protect both workforce and enterprise sustainability.","Regional consultative committees ensure federal advocacy reflects local challenges."]},"everyday-costs":{title:"Understanding the Everyday Costs of Transport",category:"Industry Perspectives",date:"15 September 2026",readTime:"6 min read",image:"/images/news_logistics_hub.jpg",author:"ETEF Research & Economics Unit",content:["While fuel often captures headline attention as the largest cash outflow in fleet operations, comprehensive analysis by ETEF's economics unit reveals that tire degradation, customs demurrage, and unscheduled maintenance account for over 52% of total operational expenditure over a vehicle's life cycle.","On corridor routes with fluctuating pavement conditions, tire lifespan drops by up to 40% if inflation pressures are not adjusted for ambient temperature shifts between the Ethiopian highlands and the Rift Valley/Afar depression.","Moreover, administrative delays at dry port container check gates compound costs exponentially through demurrage penalties and driver idle pay.","By forming collective purchasing groups through ETEF, member fleets can negotiate bulk procurement of certified heavy-duty tires and lubricants, capturing volume discounts of up to 15% and safeguarding against counterfeit automotive parts."],keyTakeaways:["Tire wear and customs demurrage often exceed direct fuel expenses over time.","Temperature shifts between highlands and lowlands require specialized tire pressure protocols.","Federation collective bargaining and bulk purchasing shields members from fake spare parts."]},"transport-roundtable":{title:"What Makes a Useful Transport Roundtable?",category:"Events & Dialogue",date:"11 September 2026",readTime:"3 min read",image:"/images/news_roundtable.jpg",author:"Communications Directorate",content:["Too often, industry conferences produce lofty declarations without tangible implementation pathways. At ETEF, our symposiums and roundtables are structured around actionable policy problem-solving.","In our most recent September roundtable held in Addis Ababa, commercial freight owners, customs commissioners, and insurance underwriters sat together with one objective: creating a streamlined cargo insurance claims protocol for cross-border transit.","Rather than lecturing, the session examined three actual claims disputes, pinpointed procedural bottlenecks, and agreed on a 14-day binding claims resolution window for member operators.","This practical approach is what sets ETEF events apart. When you attend an ETEF symposium, you leave with verified resolutions, regulatory clarity, and direct contact with decision-makers."],keyTakeaways:["ETEF events focus on measurable problem-solving rather than theoretical talk.","Direct engagement with customs and insurers creates binding agreements.","A 14-day claims turnaround protocol was established for member transport fleets."]},"better-maintenance":{title:"Better Maintenance Starts with Better Records",category:"Safety & Skills",date:"08 September 2026",readTime:"4 min read",image:"/images/news_workshop_records.jpg",author:"Technical & Vocational Training Unit",content:["Fleet maintenance in many mid-sized Ethiopian transport enterprises has historically relied on memory or scattered paper receipts. When an engine fails or a gearbox shears on a steep incline, finding out who serviced the component and when becomes nearly impossible.","ETEF is rolling out a free, simplified fleet maintenance ledger template for all affiliated operators. Designed for both desktop and mobile use, the ledger tracks oil changes, brake lining replacements, tire rotation intervals, and mechanic sign-offs per vehicle chassis number.","Workshops that piloted the ledger reported a 28% decrease in repetitive breakdown repairs within three months, as recurring mechanical issues were diagnosed systematically before catastrophic failures occurred.","Additionally, having documented maintenance records increases vehicle resale value by up to 20% when upgrading commercial fleet units."],keyTakeaways:["Digital or structured logs eliminate guesswork in garage and workshop repairs.","Recurring mechanical vulnerabilities are caught before causing roadside disasters.","Documented service histories substantially boost vehicle trade-in and resale value."]},"meaningful-membership":{title:"A First Step Towards Meaningful Membership",category:"Association Updates",date:"04 September 2026",readTime:"2 min read",image:"/images/news_office_admin.jpg",author:"Member Relations Department",content:["Joining an employers federation should never be a symbolic formality. For transport operators navigating high fuel costs, competitive bidding for cargo tenders, and changing tax laws, active membership is an operational asset.","As an ETEF member, your company gains access to our legal defense desk, subsidized driver safety workshops, corridor checkpoint dispute mediation, and verified industry research reports.","Registration is transparent and straightforward: simply submit your valid business license, TIN certificate, and fleet registration details via our digital portal or at our Secretariat headquarters in Kirkos Sub-City, Addis Ababa.","Join the federation today and let us build a stronger, more resilient transport future together."],keyTakeaways:["ETEF membership delivers real operational support, legal advisory, and safety training.","Dispute mediation desks assist members during regional checkpoint delays.","Application is seamless through our official digital platform."]}},Iv={"shared-road":{title:"ወደ ጠንካራ የትራንስፖርት ኢንዱስትሪ የሚወስደው የጋራ መንገድ",category:"የኢንዱስትሪ ዕይታዎች",date:"መስከረም 14 ቀን 2017 ዓ.ም",readTime:"የ5 ደቂቃ ንባብ",image:"/images/news_mountain_truck.jpg",author:"የኢትራአፌ ዋና ጽሕፈት ቤት ኤዲቶሪያል ቡድን",content:["የኢትዮጵያ የንግድ ትራንስፖርት ዘርፍ ወሳኝ የለውጥ ሂደት ውስጥ ይገኛል። የመንገድ መረባችን የክልል የግብርና ማዕከላትን ከኢንዱስትሪ ኮሪደሮች ጋር ለማገናኘት እየሰፋ ባለበት ወቅት፣ የንግድ ትራንስፖርት አሠሪዎች የአቅርቦት ሰንሰለቱን በቅልጥፍና፣ በደህንነት እና በክብር የመጠበቅ ከፍተኛ ኃላፊነት አለባቸው።","ከትራንስፖርትና ሎጂስቲክስ ሚኒስቴር እና ከክልል አጓጓዦች ማኅበራት ጋር በተካሄዱ የውይይት መድረኮች ላይ አንድ የጋራ መግባባት በግልጽ ታይቷል፦ የተበታተነ አሰራር ሁሉንም ይጎዳል። አነስተኛ የጭነት አሽከርካሪዎች የነዳጅ ዋጋ መዋዠቅንና የመለዋወጫ እጥረትን ብቻቸውን ሲጋፈጡ፣ የተሳፋሪ አውቶቡስ ኦፕሬተሮች ደግሞ ወጥነት በሌለው የተርሚናል ታሪፍ ይቸገራሉ።","የኢትዮጵያ ትራንስፖርት አሠሪዎች ፌዴሬሽን እንደ አገናኝ ድልድይ ሆኖ ያገለግላል። ድምፃችንን በአንድ ላይ በማሰባሰብ በንግድ መለዋወጫዎች ቀረጥ፣ በመንገድ ተጠቃሚዎች ታሪፍ እና በክልል ድንበር ሎጂስቲክስ ላይ የሚወጡ ፖሊሲዎች ከመሬት በተገኙ ተጨባጭ መረጃዎች ላይ ተመስርተው እንዲከለሱ እናደርጋለን።","ወደፊት ስንጓዝ ቅድሚያ የምንሰጠው በሦስት ዋና ዋና ጉዳዮች ላይ ነው፦ በአሠሪዎች እና በሠራተኛ ማኅበራት መካከል የተዋቀረ ማኅበራዊ ውይይት፣ የአሽከርካሪዎች ደህንነት ማረጋገጫ ሥልጠና፣ እና በዓለም አቀፍ ኮሪደሮቻችን ላይ ባዶ የመመለስ ጉዞዎችን የሚቀንሱ የዲጂታል የጭነት ትስስር መድረኮች ናቸው።"],keyTakeaways:["የተበታተነ ድምፅ በብሔራዊ የነዳጅና የግብር ደንቦች ላይ የመደራደር አቅምን ይቀንሳል።","ኢትራአፌ በቀጥታ ከፌዴራል ሚኒስቴር መስሪያ ቤቶች ጋር የተዋቀሩ የድርድር መድረኮችን ያመቻቻል።","የጋራ ዲጂታል የጭነት ትስስር መድረኮችን በመጠቀም ባዶ መመለስን መቀነስ ይቻላል።"]},"safer-journeys":{title:"አስተማማኝ ጉዞ የሚጀምረው ሞተሩ ከመነሳቱ በፊት ነው",category:"ደህንነትና ሙያዊ ክህሎት",date:"መስከረም 12 ቀን 2017 ዓ.ም",readTime:"የ4 ደቂቃ ንባብ",image:"/images/news_mechanic_tire.jpg",author:"ኢንጂነር ዳዊት ከበደ፣ የደህንነት ዳይሬክተር",content:["በትራንስፖርት ንግድ ውስጥ የመንገድ ደህንነት በአጋጣሚ የሚገኝ ሳይሆን የአሰራር ስነ-ስርዓት ውጤት ነው። በኢትዮጵያ አውራ ጎዳናዎች ላይ ከሚከሰቱት ሊከላከሉ ከሚችሉ የሜካኒካል ብልሽቶች መካከል ከ70% በላይ የሚሆኑት—ከፍሬን መሞቅ እስከ ጎማ መፈንዳት—ከጉዞ በፊት በሚደረግ የ15 ደቂቃ ዕለታዊ ፍተሻ ሊታወቁ ይችላሉ።","ኢትራአፌ ለከባድ ጭነት እና ለአገር አቋራጭ ተሳፋሪ አጓጓዦች የሚሆን ለአጠቃቀም ቀላል የ10 ነጥብ የተሽከርካሪ ፍተሻ ዝርዝር አዘጋጅቷል። ፍተሻው የጎማውን ጥልቀትና አየር፣ የፍሬን መስመር ንፋስ ግፊት፣ ማያያዣዎችን፣ የመሪ መገጣጠሚያዎችን፣ የአደጋ ጊዜ መብራቶችን እና የእሳት ማጥፊያ ዝግጁነትን ያጠቃልላል።","በተጨማሪም ፌዴሬሽኑ ከአዲስ አበባ–አዋሽ–ድሬዳዋ መስመር ላይ የግዴታ የእረፍት ጊዜያትን ተግባራዊ ለማድረግ ከክልል የአሽከርካሪዎች ማሰልጠኛ ተቋማት ጋር በመተባበር እየሰራ ነው። የአሽከርካሪዎች ድካም በሌሊት ለሚከሰቱ የመገልበጥ አደጋዎች ዋነኛ መንስኤ ነው።","ደረጃውን የጠበቀ ዕለታዊ የፍተሻ ሰነድ የሚጠቀሙ የፍሊት ኦፕሬተሮች በአንድ በጀት ዓመት ውስጥ የመንገድ ላይ ብልሽቶችን በ34 በመቶ መቀነሳቸውን እና የረጅም ጊዜ የጥገና ወጪን እስከ 18 በመቶ መቆጠባቸውን ገልጸዋል።"],keyTakeaways:["የ15 ደቂቃ ቅድመ-ጉዞ ፍተሻ አብዛኛዎቹን የአውራ ጎዳና ብልሽቶች ይከላከላል።","ደረጃውን የጠበቀ የፍተሻ ሰነድ የጥገና ወጪን እስከ 18% ይቆጥባል።","በረጅም የኮሪደር መስመሮች ላይ የአሽከርካሪዎችን ድካም መቀነስ የሰውን ሕይወት እና ንብረት ለመታደግ ወሳኝ ነው።"]},"employer-voice":{title:"ለአሠሪዎች ድምፅ ዕውቅና መስጠት",category:"የማኅበራት ዜናዎች",date:"መስከረም 08 ቀን 2017 ዓ.ም",readTime:"የ3 ደቂቃ ንባብ",image:"/images/news_association_meeting.jpg",author:"ያሬድ ኃይሌ፣ ዋና ጸሐፊ",content:["ለአስርት ዓመታት በትራንስፖርት ፖሊሲ፣ በሠራተኛ መመሪያዎች እና በከተማ ትራንዚት ዙሪያ የሚደረጉ ውይይቶች ካፒታል ኢንቨስት የሚያደርጉትን፣ ተሽከርካሪዎችን የሚገዙትን እና የንግድ ስጋቶችን የሚወስዱትን አሠሪዎች ስልታዊ ውክልና ሳያካትቱ ቆይተዋል።","ኢትራአፌ ይህንን ክፍተት ለመሙላት እና ይፋዊ ተቋማዊ ድምፅ ለመሆን ተቋቋመ። ከሥራና ክህሎት ሚኒስቴር እና ከትራንስፖርት ሚኒስቴር ጋር በምናደርጋቸው መደበኛ የውይይት መድረኮች ከ1,200 በላይ የሚሆኑ የንግድ ጭነት፣ የተሳፋሪ እና የሎጂስቲክስ አሠሪዎችን እንወክላለን።","የውይይት አጀንዳችን ገንቢ እና መፍትሔ አፈላላጊ ነው። ለአሽከርካሪዎች ፍትሃዊ ደመወዝና ክብር የሚያረጋግጡ፣ በተመሳሳይ ጊዜም ኦፕሬተሮችን ካልተገቡ የስራ ማቆም አድማዎች፣ ከዘፈቀደ የከተማ ትራንዚት ክፍያዎች እና በአካባቢያዊ አለመረጋጋት ወቅት ከሚደርስ የጭነት መወረስ የሚከላከሉ ሚዛናዊ የጋራ ስምምነቶችን እንደግፋለን።","ብሔራዊ ውክልናችን አሁን ካለው የመሬት ላይ ተጨባጭ ሁኔታ ጋር የተቆራኘ እንዲሆን ሁሉም የክልል የትራንስፖርት ማኅበራት እና ገለልተኛ የሎጂስቲክስ ድርጅቶች በክልል የምክክር ኮሚቴዎቻችን ውስጥ በንቃት እንዲሳተፉ ጥሪ እናቀርባለን።"],keyTakeaways:["አሠሪዎች የካፒታል ስጋት ስለሚሸከሙ በፖሊሲ ዝግጅት ላይ የተዋቀረ ውክልና ያስፈልጋቸዋል።","ሚዛናዊ የጋራ ስምምነቶች የሠራተኛውን ደህንነትም ሆነ የድርጅቱን ዘላቂነት ይጠብቃሉ።","የክልል የምክክር ኮሚቴዎች ሀገራዊ ውክልናው የአካባቢ ተግዳሮቶችን እንዲያንፀባርቅ ያደርጋሉ።"]},"everyday-costs":{title:"የትራንስፖርት ዘርፍ የዕለት ተዕለት ወጪዎችን መረዳት",category:"የኢንዱስትሪ ዕይታዎች",date:"መስከረም 05 ቀን 2017 ዓ.ም",readTime:"የ6 ደቂቃ ንባብ",image:"/images/news_logistics_hub.jpg",author:"የኢትራአፌ የምርምርና ኢኮኖሚክስ ጥናት ክፍል",content:["በተሽከርካሪዎች ስምሪት ውስጥ ነዳጅ እንደ ትልቁ የወጪ ምንጭ ተደርጎ ቢታሰብም፣ በኢትራአፌ የኢኮኖሚክስ ክፍል የተደረገው አጠቃላይ ትንተና እንደሚያሳየው የጎማ መበላት፣ የጉምሩክ መዘግየት ኪሳራ እና ያልታቀደ ጥገና ከተሽከርካሪው የህይወት ዘመን አጠቃላይ የኦፕሬሽን ወጪ ከ52 በመቶ በላይ ይሸፍናሉ።","የመንገድ ሁኔታ በሚቀያየርባቸው የኮሪደር መስመሮች ላይ፣ በደጋማው የኢትዮጵያ ክፍል እና በስምጥ ሸለቆ/አፋር ዝቅተኛ ስፍራዎች መካከል ባለው የሙቀት ልዩነት ምክንያት የጎማ ንፋስ ግፊት ካልተስተካከለ የጎማ ዕድሜ እስከ 40% ይቀንሳል።","በተጨማሪም በደረቅ ወደብ የኮንቴይነር መፈተሻ ኬላዎች ላይ የሚፈጠሩ አስተዳደራዊ መዘግየቶች በዲመሬጅ ቅጣት እና በአሽከርካሪዎች የስራ ፈት ክፍያ ወጪዎችን በከፍተኛ ደረጃ ያባብሳሉ።","በኢትራአፌ በኩል የጋራ ግዢ ቡድኖችን በማቋቋም አባል ድርጅቶች ደረጃቸውን የጠበቁ ከባድ ጎማዎችን እና ዘይቶችን በጅምላ በመደራደር እስከ 15% ቅናሽ ማግኘት እና ሐሰተኛ የመኪና መለዋወጫዎችን መከላከል ይችላሉ።"],keyTakeaways:["የጎማ መበላት እና የጉምሩክ መዘግየት ወጪዎች ከጊዜ ወደ ጊዜ ከነዳጅ ወጪዎች ይልቃሉ።","በደጋማ እና በቆላማ አካባቢዎች መካከል ያለው የሙቀት ልዩነት ልዩ የጎማ ግፊት ማስተካከያ ይፈልጋል።","የፌዴሬሽኑ የጋራ ድርድር እና የጅምላ ግዢ አባላትን ከሐሰተኛ መለዋወጫዎች ይጠብቃል።"]},"transport-roundtable":{title:"ውጤታማ የትራንስፖርት የውይይት መድረክ ምን ይመስላል?",category:"ክስተቶችና ውይይቶች",date:"ጳጉሜ 06 ቀን 2016 ዓ.ም",readTime:"የ3 ደቂቃ ንባብ",image:"/images/news_roundtable.jpg",author:"የኮሙኒኬሽን ዳይሬክቶሬት",content:["ብዙውን ጊዜ የኢንዱስትሪ ኮንፈረንሶች ተግባራዊ የማስፈጸሚያ መንገድ የሌላቸውን ረቂቅ መግለጫዎች ብቻ ያወጣሉ። በኢትራአፌ ግን ሲምፖዚየሞቻችን እና የውይይት መድረኮቻችን በተግባራዊ የፖሊሲ ችግር ፈቺነት ላይ የተዋቀሩ ናቸው።","በቅርቡ በአዲስ አበባ በተካሄደው የውይይት መድረካችን ላይ የንግድ ጭነት ባለቤቶች፣ የጉምሩክ ኮሚሽነሮች እና የኢንሹራንስ ተቆጣጣሪዎች በአንድ ዓላማ ተቀምጠዋል፦ ለድንበር ተሻጋሪ ትራንዚት የተሳለጠ የካርጎ ኢንሹራንስ ካሳ አከፋፈል መመሪያ ማዘጋጀት።","ከረዥም ንግግሮች ይልቅ መድረኩ ሦስት ተጨባጭ የካሳ ውዝግቦችን መርምሯል፣ የአሰራር ማነቆዎችን ለይቷል፣ እና ለአባል ኦፕሬተሮች የ14 ቀናት አስገዳጅ የካሳ አፈታት ጊዜ ላይ ስምምነት ላይ ደርሷል።","የኢትራአፌ ዝግጅቶችን ልዩ የሚያደርገው ይህ ተግባራዊ አካሄድ ነው። በኢትራአፌ መድረክ ላይ ሲሳተፉ ከተረጋገጡ ውሳኔዎች፣ ከሕጋዊ ግልጽነት እና ከውሳኔ ሰጪዎች ጋር ቀጥተኛ ግንኙነት በመፍጠር ይመለሳሉ።"],keyTakeaways:["የኢትራአፌ ዝግጅቶች በንድፈ-ሀሳብ ላይ ሳይሆን በተግባራዊ ችግር ፈቺነት ላይ ያተኩራሉ።","ከጉምሩክ እና ከኢንሹራንስ ተቋማት ጋር የሚደረግ ቀጥተኛ ውይይት አስገዳጅ ስምምነቶችን ይፈጥራል።","ለአባል ድርጅቶች የ14 ቀናት የኢንሹራንስ ካሳ አፈታት ስርዓት ተዘርግቷል።"]},"better-maintenance":{title:"የተሻለ የጥገና ሥራ የሚጀምረው ከተሟላ መረጃ ሰነድ ነው",category:"ደህንነትና ሙያዊ ክህሎት",date:"ጳጉሜ 03 ቀን 2016 ዓ.ም",readTime:"የ4 ደቂቃ ንባብ",image:"/images/news_workshop_records.jpg",author:"የቴክኒክና ሙያ ስልጠና ክፍል",content:["በብዙ መካከለኛ የኢትዮጵያ የትራንስፖርት ድርጅቶች ውስጥ የተሽከርካሪ ጥገና በቃል ትውስታ ወይም በተበታተኑ ደረሰኞች ላይ የተመሰረተ ነበር። ዳገት ላይ ሞተር ሲበላሽ ወይም ጊርቦክስ ሲሰበር ክፍሉን ማን እና መቼ እንደጠገነው ማወቅ ፈጽሞ የማይቻል ይሆናል።","ኢትራአፌ ለሁሉም አባል ኦፕሬተሮች ነፃ እና ቀላል የተሽከርካሪዎች የጥገና መዝገብ ሰነድ እያዘጋጀ ነው። ለኮምፒውተር እና ለሞባይል ምቹ ሆኖ የተዘጋጀው መዝገብ የዘይት ለውጥን፣ የፍሬን ባሌት ቅያሬን፣ የጎማ ማዞሪያ ጊዜዎችን እና የመካኒኩን ፊርማ በተሽከርካሪ ሻሲ ቁጥር ይከታተላል።","መዝገቡን በሙከራ ደረጃ የተጠቀሙ ጋራዦች በሦስት ወራት ውስጥ ተደጋጋሚ ብልሽቶችን በ28 በመቶ መቀነሳቸውን ገልጸዋል፤ ምክንያቱም ተደጋጋሚ የሜካኒካል ችግሮች ወደ ከፋ አደጋ ከማምራታቸው በፊት በስርዓት ስለተለዩ ነው።","በተጨማሪም የተሟላ የጥገና መረጃ ሰነድ መኖሩ የንግድ ተሽከርካሪዎችን በሚቀይሩበት ወቅት የመሸጫ ዋጋቸውን እስከ 20 በመቶ ይጨምራል።"],keyTakeaways:["ዲጂታል ወይም የተዋቀሩ መዛግብት በጋራዥ ጥገና ላይ የሚፈጠረውን ግምት ያስቀራሉ።","ተደጋጋሚ የሜካኒካል ክፍተቶች የመንገድ ላይ አደጋ ሳያስከትሉ ቀድመው ይታወቃሉ።","የተሟላ የሰነድ ታሪክ የተሽከርካሪውን ዳግም መሸጫ ዋጋ በከፍተኛ ሁኔታ ይጨምራል።"]},"meaningful-membership":{title:"ትርጉም ወዳለው አባልነት የሚደረግ የመጀመሪያ እርምጃ",category:"የማኅበራት ዜናዎች",date:"ነሐሴ 29 ቀን 2016 ዓ.ም",readTime:"የ2 ደቂቃ ንባብ",image:"/images/news_office_admin.jpg",author:"የአባላት ግንኙነት መምሪያ",content:["የአሠሪዎች ፌዴሬሽን አባል መሆን መቼም ቢሆን የስም ማሳመሪያ መሆን የለበትም። ከፍተኛ የነዳጅ ወጪን፣ ለካርጎ ጨረታዎች የሚደረገውን ፉክክር እና ተለዋዋጭ የግብር ሕጎችን ለሚጋፈጡ የትራንስፖርት አሠሪዎች ንቁ አባልነት የንግድ ሀብት ነው።","እንደ ኢትራአፌ አባል ድርጅትዎ የሕግ ጥበቃ ዴስካችንን፣ ድጎማ የተደረገባቸውን የአሽከርካሪዎች ደህንነት ስልጠናዎችን፣ የኮሪደር ኬላ አለመግባባቶች ማስታረቂያን እና የተረጋገጡ የኢንዱስትሪ ጥናት ሪፖርቶችን ያገኛል።","ምዝገባው ግልጽ እና ቀጥተኛ ነው፦ ሕጋዊ የንግድ ፈቃድዎን፣ የግብር ከፋይ መለያ ቁጥርዎን እና የተሽከርካሪዎች ምዝገባ ዝርዝርን በዲጂታል ፖርታላችን ወይም በአዲስ አበባ ቂርቆስ ክፍለ ከተማ በሚገኘው ዋና ጽሕፈት ቤታችን ያስገቡ።","ዛሬ ፌዴሬሽኑን ይቀላቀሉ፤ ጠንካራና አስተማማኝ የትራንስፖርት ዘርፍ በጋራ እንገንባ።"],keyTakeaways:["የኢትራአፌ አባልነት እውነተኛ የስራ ድጋፍ፣ የሕግ ምክር እና የደህንነት ስልጠና ይሰጣል።","የክርክር አፈታት ዴስኮች በክልል ኬላዎች መዘግየት ወቅት አባላትን ያግዛሉ።","ማመልከቻ በይፋዊ የዲጂታል መድረካችን በኩል ያለምንም እንከን ይከናወናል።"]}},Wv={"advocacy-officer":{title:"Senior Policy & Advocacy Officer",employer:"ETEF Secretariat Headquarters",type:"Full-Time (Permanent)",location:"Addis Ababa, Ethiopia (Kirkos Sub-City)",category:"Policy, Legal & Government Relations",deadline:"15 October 2026",salary:"Competitive NGO/Federation Grade + Benefits",overview:"The Senior Policy & Advocacy Officer will lead ETEF's research and legislative representation, working directly with federal ministries, parliamentary committees, and regional transport bureaus to protect employer rights and foster modern logistics standards.",responsibilities:["Analyze proposed federal and regional transport legislation, tax policies, and labor codes affecting commercial transport employers.","Draft policy briefs, whitepapers, and position statements on tariffs, road safety, and multimodal corridor operations.","Represent ETEF in tripartite consultative committees with government agencies and trade unions.","Coordinate stakeholder workshops, consultative roundtables, and the annual National Transport Leadership Symposium.","Provide regulatory guidance to member regional associations and logistics enterprises."],requirements:["Master's or Bachelor's degree in Law (LL.B/LL.M), Public Policy, Transport Economics, or related fields.","Minimum 5 years of progressive experience in policy advocacy, legal analysis, or association management in Ethiopia.","Fluency in Amharic and English with outstanding legal drafting and presentation skills.","In-depth knowledge of Ethiopian transport laws, labor proclamations, and regional trade corridor protocols.","Proven ability to engage high-level government officials and industry executives diplomatically."],applyEmail:"hr@etef.org.et"},"fleet-manager":{title:"Fleet Operations Manager",employer:"National Freight PLC (Member Organization)",type:"Full-Time",location:"Adama Operations Base, Ethiopia (with corridor travel)",category:"Logistics & Supply Chain Management",deadline:"20 October 2026",salary:"Attractive Corporate Package + Performance Incentives",overview:"National Freight PLC, a premier freight carrier and founding member of ETEF, is seeking an experienced Fleet Operations Manager to oversee daily deployment, telematics tracking, and preventative maintenance for a commercial fleet of 80+ heavy freight trucks.",responsibilities:["Manage dispatching, route optimization, and turn-around times for freight movements between Modjo Dry Port, Addis Ababa, and Djibouti.","Enforce fleet safety standards, pre-trip vehicle inspections, and speed governor monitoring via GPS telematics.","Supervise garage maintenance teams, spare parts inventories, and tire replacement schedules.","Oversee driver performance management, fatigue prevention protocols, and fuel consumption benchmarks.","Ensure full compliance with commercial transit licenses, insurance policies, and cross-border transport permits."],requirements:["B.Sc. in Mechanical/Automotive Engineering, Logistics Management, or equivalent.","At least 6 years of experience managing heavy commercial freight truck fleets in Ethiopia.","Proficiency with modern GPS fleet tracking and telematics software.","Demonstrated leadership capabilities and operational crisis management skills.","Valid driving license and readiness to conduct regular corridor site inspections."],applyEmail:"hr@etef.org.et"},"customs-liaison":{title:"Cross-Border Customs Liaison Officer",employer:"Ethio-Djibouti Logistics Corridor Desk (Partner Organization)",type:"Contract (1 Year Renewable)",location:"Dire Dawa / Dewele / Djibouti Corridor",category:"Legal, Logistics & Customs Compliance",deadline:"18 October 2026",salary:"Competitive Corridor Grade + Field Allowance",overview:"The Customs Liaison Officer serves as the vital on-the-ground bridge between commercial transport operators, Ethiopian Customs Commission, Djibouti Port Authority, and transit checkpoint authorities to expedite cargo movement and resolve compliance disputes.",responsibilities:["Facilitate rapid resolution of customs documentation holds, transit seals verification, and cargo inspection delays for member convoys.","Liaise with customs officers at border entry points (Galafi, Dewele) and dry port gates.","Report corridor bottlenecks, arbitrary inspection fees, or driver security concerns to ETEF's Central Corridor Taskforce.","Assist carrier dispatchers in ensuring manifest accuracy and transit bond compliance.","Conduct quarterly compliance orientation sessions for commercial cross-border truck drivers."],requirements:["Degree or Diploma in Customs Clearance, International Trade, Logistics, or Business Administration.","Minimum 4 years of operational experience working along the Ethio-Djibouti trade corridor.","Deep understanding of ASYCUDA++, single-window customs systems, and transit bond procedures.","Strong communication skills in Amharic, Afar/Somali, and working French is advantageous.","High integrity and proactive dispute resolution skills."],applyEmail:"hr@etef.org.et"},"dispatch-coordinator":{title:"Regional Dispatch Coordinator",employer:"Safeway Bus Services (Member Organization)",type:"Full-Time",location:"Hawassa Regional Terminal, Sidama, Ethiopia",category:"Passenger Transit & Customer Operations",deadline:"25 October 2026",salary:"Competitive Base + Housing Allowance",overview:"Safeway Bus Services, an established inter-city passenger carrier, requires a Regional Dispatch Coordinator at its Hawassa hub to manage schedule integrity, passenger safety, ticketing coordination, and driver rotations across southern transit corridors.",responsibilities:["Coordinate departures, arrivals, and passenger boarding at Hawassa Central Bus Terminal.","Monitor driver duty rosters, breathalyzer sobriety verifications, and speed compliance.","Manage roadside assistance dispatch and backup vehicle mobilization in case of mechanical emergencies.","Maintain liaison with Hawassa City Transport Bureau and regional police commands.","Oversee ticketing records reconciliation and passenger customer service desks."],requirements:["Diploma or Bachelor's Degree in Transport Management, Business Administration, or related discipline.","3+ years experience in public passenger bus terminal operations or fleet dispatching.","Strong verbal communication skills in Amharic and Sidaamu Afoo.","Ability to remain calm under pressure and handle customer inquiries professionally.","Basic computer literacy for schedule and passenger reporting."],applyEmail:"hr@etef.org.et"}},ey={"advocacy-officer":{title:"ከፍተኛ የፖሊሲ እና የጥብቅና ኦፊሰር",employer:"የኢትራአፌ ዋና ጽሕፈት ቤት",type:"ሙሉ ጊዜ (ቋሚ)",location:"አዲስ አበባ፣ ኢትዮጵያ (ቂርቆስ ክፍለ ከተማ)",category:"ፖሊሲ፣ ሕግ እና የመንግሥት ግንኙነት",deadline:"ጥቅምት 05 ቀን 2017 ዓ.ም",salary:"ተወዳዳሪ የፌዴሬሽን ደመወዝ + ጥቅማጥቅሞች",overview:"ከፍተኛ የፖሊሲ እና የጥብቅና ኦፊሰሩ የፌዴሬሽኑን የምርምር እና የሕግ አውጪ ውክልና በመምራት የአሠሪዎችን መብት ለማስከበርና ዘመናዊ የሎጂስቲክስ ደረጃዎችን ለማስፋፋት ከፌዴራል ሚኒስቴር መስሪያ ቤቶች፣ ከሕዝብ ተወካዮች ምክር ቤት እና ከክልል ትራንስፖርት ቢሮዎች ጋር ተቀራርቦ ይሰራል/ትሰራለች።",responsibilities:["የትራንስፖርት አሠሪዎችን የሚመለከቱ የፌዴራል እና የክልል ረቂቅ ሕጎችን፣ የታክስ ፖሊሲዎችን እና የሠራተኛ ደንቦችን መተንተን","በታሪፍ፣ በመንገድ ደህንነት እና በሁለገብ የኮሪደር ስራዎች ዙሪያ የፖሊሲ ሰነዶችን እና የውሳኔ ሃሳቦችን ማዘጋጀት","ከመንግሥት አካላት እና ከሠራተኛ ማኅበራት ጋር በሚደረጉ የሦስትዮሽ የምክክር መድረኮች ላይ ፌዴሬሽኑን መወከል","የባለድርሻ አካላት ወርክሾፖችን፣ የምክክር መድረኮችን እና ዓመታዊውን የትራንስፖርት ሲምፖዚየም ማስተባበር","ለአባል የክልል ማኅበራት እና ለሎጂስቲክስ ድርጅቶች የሕግና የደንብ መመሪያ ድጋፍ መስጠት"],requirements:["በሕግ (ኤልኤልቢ/ኤልኤልኤም)፣ በሕዝብ ፖሊሲ፣ በትራንስፖርት ኢኮኖሚክስ ወይም በተዛማጅ መስክ ማስተርስ ወይም የመጀመሪያ ዲግሪ","በኢትዮጵያ ውስጥ በፖሊሲ ጥብቅና፣ በሕግ ትንተና ወይም በማኅበራት አስተዳደር ቢያንስ የ5 ዓመታት የስራ ልምድ","በአማርኛ እና በእንግሊዝኛ ቋንቋዎች የተካነ እንዲሁም የላቀ የሕግ ሰነድ ዝግጅት እና የንግግር ችሎታ ያለው/ያላት","ስለ ኢትዮጵያ የትራንስፖርት ሕጎች፣ የሠራተኛ አዋጆች እና የንግድ ኮሪደር ስምምነቶች ጥልቅ ዕውቀት","ከከፍተኛ የመንግሥት ኃላፊዎች እና ከኢንዱስትሪ መሪዎች ጋር በዲፕሎማሲያዊ መንገድ የመስራት የተረጋገጠ ብቃት"],applyEmail:"hr@etef.org.et"},"fleet-manager":{title:"የተሽከርካሪዎች ኦፕሬሽን ሥራ አስኪያጅ",employer:"ብሔራዊ የደረቅ ጭነት ኃ/የተ/የግ/ማኅበር (አባል ድርጅት)",type:"ሙሉ ጊዜ",location:"አዳማ ኦፕሬሽን ማዕከል (የኮሪደር ጉዞ ያለው)",category:"ሎጂስቲክስና የአቅርቦት ሰንሰለት አስተዳደር",deadline:"ጥቅምት 10 ቀን 2017 ዓ.ም",salary:"ማራኪ የኮርፖሬት ጥቅል + የአፈፃፀም ማበረታቻ",overview:"ቀዳሚ የጭነት አጓጓዥ እና የኢትራአፌ መሥራች አባል የሆነው ብሔራዊ የደረቅ ጭነት ኃ/የተ/የግ/ማኅበር፣ ከ80 በላይ ከባድ የጭነት ተሽከርካሪዎችን ዕለታዊ ስምሪት፣ የቴሌማቲክስ ክትትል እና የቅድመ መከላከል ጥገናን በበላይነት የሚመራ ልምድ ያለው የኦፕሬሽን ሥራ አስኪያጅ ይፈልጋል።",responsibilities:["በሞጆ ደረቅ ወደብ፣ በአዲስ አበባ እና በጅቡቲ መካከል የጭነት እንቅስቃሴን ስምሪት፣ የመስመር ቅልጥፍናን እና የመመለሻ ጊዜን ማስተዳደር","የፍሊት ደህንነት ደረጃዎችን፣ የቅድመ ጉዞ ፍተሻን እና የፍጥነት ገደብ መቆጣጠሪያዎችን በጂፒኤስ ቴክኖሎጂ መከታተል","የጋራዥ ጥገና ቡድኖችን፣ የመለዋወጫ ዕቃዎች ክምችትን እና የጎማ ቅያሬ መርሃ ግብሮችን በበላይነት መቆጣጠር","የአሽከርካሪዎች አፈፃፀም፣ የድካም መከላከያ ስርዓት እና የነዳጅ ፍጆታ ቁጥጥርን ማስተዳደር","የንግድ ትራንዚት ፈቃዶችን፣ የኢንሹራንስ ፖሊሲዎችን እና ድንበር ተሻጋሪ ፈቃዶችን ሕጋዊ ተገዢነት ማረጋገጥ"],requirements:["በሜካኒካል/አውቶሞቲቭ ምህንድስና፣ በሎጂስቲክስ ማኔጅመንት ወይም በተመሳሳይ መስክ የመጀመሪያ ዲግሪ","በኢትዮጵያ ውስጥ ከባድ የንግድ ጭነት ተሽከርካሪዎችን በማስተዳደር ቢያንስ የ6 ዓመታት የስራ ልምድ","ዘመናዊ የጂፒኤስ የፍሊት ክትትል እና የቴሌማቲክስ ሶፍትዌሮችን የመጠቀም ከፍተኛ ብቃት","የተረጋገጠ የአመራር ብቃት እና በድንገተኛ የስራ ቀውሶች ወቅት ፈጣን ውሳኔ የመስጠት ችሎታ","ሕጋዊ የመንጃ ፈቃድ እና መደበኛ የኮሪደር የመስክ ፍተሻዎችን ለማድረግ ዝግጁ የሆነ/የሆነች"],applyEmail:"hr@etef.org.et"},"customs-liaison":{title:"የድንበር ተሻጋሪ ጉምሩክ ግንኙነት ኦፊሰር",employer:"የኢትዮ-ጅቡቲ የሎጂስቲክስ ኮሪደር ዴስክ (አጋር ተቋም)",type:"ውል (በየዓመቱ የሚታደስ)",location:"ድሬዳዋ / ደወሌ / ጅቡቲ ኮሪደር",category:"ሕግ፣ ሎጂስቲክስ እና የጉምሩክ አሰራር",deadline:"ጥቅምት 08 ቀን 2017 ዓ.ም",salary:"ተወዳዳሪ የኮሪደር አበል + የመስክ ክፍያ",overview:"የጉምሩክ ግንኙነት ኦፊሰሩ በትራንስፖርት ኦፕሬተሮች፣ በኢትዮጵያ ጉምሩክ ኮሚሽን፣ በጅቡቲ ወደብ ባለስልጣን እና በኬላ ተቆጣጣሪዎች መካከል የዕቃ እንቅስቃሴን ለማፋጠን እና የአሰራር ውዝግቦችን ለመፍታት በመሬት ላይ እንደ ቁልፍ አገናኝ ድልድይ ሆኖ ያገለግላል።",responsibilities:["ለአባል ድርጅቶች የጉምሩክ ሰነድ ማጣራት፣ የትራንዚት ማህተም ፍተሻ እና የካርጎ መዘግየቶች ፈጣን እልባት እንዲያገኙ ማመቻቸት","በድንበር መግቢያ ኬላዎች (ገላፊ፣ ደወሌ) እና በደረቅ ወደብ በሮች ከሚገኙ የጉምሩክ ኃላፊዎች ጋር ተቀራርቦ መስራት","የኮሪደር ማነቆዎችን፣ ያልተገቡ የፍተሻ ክፍያዎችን ወይም የአሽከርካሪዎች የደህንነት ስጋቶችን ለኢትራአፌ ኮሪደር ግብረ-ኃይል ማሳወቅ","የማኒፌስት ትክክለኛነትን እና የትራንዚት ቦንድ ተገዢነትን ለማረጋገጥ የአጓጓዦችን ስምሪት ክፍሎች ማገዝ","ለድንበር ተሻጋሪ ከባድ የጭነት አሽከርካሪዎች የየሩብ ዓመቱን የሕግ ተገዢነት ገለጻ ማዘጋጀት"],requirements:["በጉምሩክ ክሊራንስ፣ በዓለም አቀፍ ንግድ፣ በሎጂስቲክስ ወይም በንግድ አስተዳደር ዲግሪ ወይም ዲፕሎማ","በኢትዮ-ጅቡቲ የንግድ ኮሪደር መስመር ላይ በመስራት ቢያንስ የ4 ዓመታት የተግባር ልምድ","ስለ አሲኩዳ (ASYCUDA++)፣ ስለ ነጠላ መስኮት የጉምሩክ አሰራር እና የትራንዚት ቦንድ ስርዓት ጥልቅ ዕውቀት","በአማርኛ፣ በአፋርኛ/ሶማሊኛ እና በመሰረታዊ ፈረንሳይኛ ቋንቋ መግባባት መቻል ተጨማሪ ጠቀሜታ አለው","ከፍተኛ የታማኝነት ስነ-ምግባር እና ንቁ የችግር አፈታት ክህሎት"],applyEmail:"hr@etef.org.et"},"dispatch-coordinator":{title:"የክልል የሥምሪት አስተባባሪ",employer:"ሴፍዌይ የአገር አቋራጭ አውቶቡስ አገልግሎት (አባል ድርጅት)",type:"ሙሉ ጊዜ",location:"ሀዋሳ ማዕከላዊ ተርሚናል፣ ሲዳማ፣ ኢትዮጵያ",category:"የተሳፋሪ ትራንስፖርት እና የደንበኞች አገልግሎት",deadline:"ጥቅምት 15 ቀን 2017 ዓ.ም",salary:"ተወዳዳሪ ደመወዝ + የቤት አበል",overview:"የተመሰረተ አገር አቋራጭ የተሳፋሪ አጓጓዥ የሆነው ሴፍዌይ የአውቶቡስ አገልግሎት በደቡብ የትራንዚት መስመሮች ላይ የሰዓት አክባሪነትን፣ የተሳፋሪዎችን ደህንነት፣ የቲኬት አሰራርን እና የአሽከርካሪዎች ፈረቃን ለማስተዳደር በሀዋሳ ማዕከሉ የክልል ስምሪት አስተባባሪ ይፈልጋል።",responsibilities:["በሀዋሳ ማዕከላዊ አውቶቡስ ተርሚናል የተሽከርካሪዎች መነሻ፣ መድረሻ እና የተሳፋሪዎች አሳፋሪነት ስራዎችን ማስተባበር","የአሽከርካሪዎችን የሥራ ፈረቃ፣ የአልኮል ምርመራ እና የፍጥነት ደንብ አከባበርን መከታተል","የሜካኒካል ብልሽት በሚያጋጥምበት ወቅት የመንገድ ላይ ፈጣን እርዳታን እና የመጠባበቂያ ተሽከርካሪ ስምሪትን ማስተባበር","ከሀዋሳ ከተማ ትራንስፖርት ቢሮ እና ከክልል ፖሊስ መምሪያ ጋር ግንኙነት መጠበቅ","የቲኬት ሽያጭ መረጃዎችን እና የተሳፋሪዎች ቅሬታ ማስተናገጃ ጠረጴዛን በበላይነት መቆጣጠር"],requirements:["በትራንስፖርት ማኔጅመንት፣ በቢዝነስ አስተዳደር ወይም በተመሳሳይ መስክ ዲፕሎማ ወይም የመጀመሪያ ዲግሪ","በሕዝብ ተሳፋሪ አውቶቡስ ተርሚናል ኦፕሬሽን ወይም በፍሊት ስምሪት ቢያንስ የ3 ዓመታት ልምድ","በአማርኛ እና በሲዳሙ አፎ ቋንቋዎች ጠንካራ የመግባባት ችሎታ","በተጨናነቀ የስራ ሁኔታ ውስጥ ተረጋግቶ የመስራት እና የደንበኞችን ጥያቄ በሙያዊ መንገድ የማስተናገድ ችሎታ","ለመርሃ ግብር እና ለተሳፋሪዎች ሪፖርት መሰረታዊ የኮምፒውተር ዕውቀት ያለው/ያላት"],applyEmail:"hr@etef.org.et"}},ty={djibouti:{name:"Ethio-Djibouti Trade Corridor (Galafi & Dewele)",image:"/images/corridor_djibouti.jpg",status:"Normal Flow • Operational",badgeClass:"bg-primary-50 text-primary-700 border border-primary-200",summary:"The nation's paramount commercial corridor handling over 90% of Ethiopia's sea-borne international trade. Dual highway connections operate 24/7 with automated customs manifest reconciliation.",transitHours:"42–48 Hours (Addis Ababa to Doraleh Container Terminal)",clearanceHours:"4.2 Hours average OSBP clearance at Galafi",keyCheckpoints:["Addis Ababa – Adama Expressway Toll Gates (Smooth Flow)","Mojo Junction & Dry Port Terminal Connection","Awash 7 Kilo Weighbridge & Inspection Post","Semera Commercial Vehicle Monitoring Center","Mille – Galafi One-Stop Border Post (OSBP)"],advisories:["Night convoy transits permitted for heavy multi-axle freight with verified telematics","Strict axle-load limits enforced under MoTL Directive No. 44; calibration checks at Semera","Galafi E-Single Window pre-registration mandatory prior to border gate arrival"],helpline:"+251 11 4717787 (Galafi Desk Ext 104)"},modjo:{name:"Modjo Multimodal Dry Port & Container Logistics Hub",image:"/images/corridor_modjo.jpg",status:"Active Dispatch • 74% Capacity",badgeClass:"bg-primary-50 text-primary-700 border border-primary-200",summary:"Ethiopia's primary multimodal inland port connected via electrified standard gauge railway (EDR) directly to the Port of Djibouti. Reefer and dry container handling running on regular shifts.",transitHours:"Daily Rail Shuttle: 12 Hours Transit to Coast",clearanceHours:"Green Channel Customs: 8–12 Hours Average",keyCheckpoints:["Gate 1: Inbound Container Truck Staging Yard","Gate 2: Empty Container Depot & Return Bay","Customs Green & Blue Channel Scanner Facilities","Rail Cargo Loading Platform & Gantry Tracks"],advisories:["Heavy container haulers must present Electronic Customs Transit Documents (ECTD)","Refrigerated container plug-ins operating with backup generator redundancy","Expedited turnaround available for registered ETEF member freight forwarders"],helpline:"+251 11 4717787 (Modjo Dry Port Bureau Ext 106)"},moyale:{name:"Moyale One-Stop Border Post & Lamu Port Corridor (Kenya)",image:"/images/corridor_moyale.jpg",status:"Normal Flow • Commercial Transit Open",badgeClass:"bg-primary-50 text-primary-700 border border-primary-200",summary:"Strategic bilateral trade gateway between Ethiopia and Kenya. Supports agricultural exports, commercial transit goods, cross-border bus transport, and petroleum logistics.",transitHours:"55–60 Hours (Addis Ababa – Moyale – Nairobi)",clearanceHours:"3.0 Hours Average at Joint Customs Facility",keyCheckpoints:["Hawassa Southbound Commercial Weighbridge","Dilla – Yabello Trans-African Highway Section","Moyale Integrated One-Stop Border Inspection Facility","Marsabit – Isiolo Transit Corridor"],advisories:["COMESA Yellow Card Insurance and bilateral carrier permits required","Livestock and phytosanitary transit checkpoints operating normal daylight shifts","Cross-border intercity buses subject to joint immigration checks"],helpline:"+251 11 4717787 (Southern Gateway Desk Ext 108)"},berbera:{name:"Berbera Port Logistics Corridor (Tog Wajaale – Dire Dawa)",image:"/images/corridor_berbera.jpg",status:"Freight Scaling • Upgrades Active",badgeClass:"bg-slate-100 text-slate-800 border border-slate-300",summary:"Rapidly expanding alternative trade corridor connecting eastern Ethiopia with the deepwater Port of Berbera. New highway segments facilitate heavy container transport.",transitHours:"30–36 Hours (Dire Dawa – Berbera)",clearanceHours:"5.5 Hours Average at Tog Wajaale Customs",keyCheckpoints:["Dire Dawa Free Trade Zone Junction","Harar – Babile Highway Segment","Jijiga Transit Weighbridge","Tog Wajaale Customs Inspection Yard"],advisories:["Section 2 road paving active; commercial drivers advised to adhere to 60 km/h work-zone limits","Direct container clearance now operational through Dire Dawa Dry Port","ETEF liaison officers stationed at Tog Wajaale for member assistance"],helpline:"+251 11 4717787 (Eastern Corridor Desk Ext 109)"}},ay={djibouti:{name:"የኢትዮ-ጅቡቲ የንግድ ኮሪደር (ገላፊ እና ደወሌ)",image:"/images/corridor_djibouti.jpg",status:"መደበኛ እንቅስቃሴ • አገልግሎት ላይ",badgeClass:"bg-primary-50 text-primary-700 border border-primary-200",summary:"ከ90% በላይ የሚሆነውን የኢትዮጵያን የወደብ የውጭ ንግድ የሚያስተናግደው የሀገሪቱ ዋና የንግድ ኮሪደር። አውራ ጎዳናዎቹ በራስ-ሰር የጉምሩክ ስርዓት 24/7 አገልግሎት ይሰጣሉ።",transitHours:"ከ42–48 ሰዓታት (አዲስ አበባ እስከ ዶራሌ ኮንቴይነር ተርሚናል)",clearanceHours:"4.2 ሰዓታት አማካይ የጋራ ድንበር ፍተሻ በገላፊ",keyCheckpoints:["አዲስ አበባ – አዳማ የፍጥነት መንገድ የክፍያ ኬላዎች (ክፍት እንቅስቃሴ)","ሞጆ መገናኛ እና የደረቅ ወደብ ተርሚናል መስመር","አዋሽ 7 ኪሎ ሚዛን ጣቢያ እና የፍተሻ ኬላ","ሰመራ የንግድ ተሽከርካሪዎች ክትትል ማዕከል","ሚሌ – ገላፊ የአንድ ማዕከል የድንበር ኬላ"],advisories:["የጂፒኤስ ቴክኖሎጂ ላላቸው ከባድ ባለብዙ አክስል የጭነት ተሽከርካሪዎች የሌሊት ጉዞ ተፈቅዷል","በትራንስፖርት ሚኒስቴር መመሪያ ቁጥር 44 መሠረት ጥብቅ የአክስል ክብደት ቁጥጥር በሰመራ ይካሄዳል","ድንበር ከመድረስ በፊት በገላፊ የኤሌክትሮኒክስ መረጃ ቅድመ-ምዝገባ ማድረግ ግዴታ ነው"],helpline:"+251 11 4717787 (የገላፊ ዴስክ የውስጥ መስመር 104)"},modjo:{name:"የሞጆ ሁለገብ የደረቅ ወደብ እና የኮንቴይነር ሎጂስቲክስ ማዕከል",image:"/images/corridor_modjo.jpg",status:"ንቁ ስምሪት • 74% አቅም",badgeClass:"bg-primary-50 text-primary-700 border border-primary-200",summary:"በኤሌክትሪክ ባቡር መስመር በቀጥታ ከጅቡቲ ወደብ ጋር የተገናኘ የኢትዮጵያ ቀዳሚ ሁለገብ የደረቅ ወደብ። የቀዘቀዙ እና ደረቅ ኮንቴይነሮች በፈረቃ ይስተናገዳሉ።",transitHours:"የዕለት የባቡር ጉዞ፦ 12 ሰዓታት እስከ ወደብ",clearanceHours:"የአረንጓዴ መስመር ጉምሩክ፦ በአማካይ ከ8–12 ሰዓታት",keyCheckpoints:["በር 1፦ ገቢ የኮንቴይነር የጭነት መኪኖች ማቆሚያ ግቢ","በር 2፦ ባዶ ኮንቴይነሮች ማስረከቢያ እና መቀበያ ግቢ","የጉምሩክ አረንጓዴ እና ሰማያዊ መስመር የፍተሻ ስካነር","የባቡር ጭነት መጫኛ መድረክ እና የክሬን መስመሮች"],advisories:["ከባድ የኮንቴይነር ጫኚዎች የኤሌክትሮኒክስ የጉምሩክ ትራንዚት ሰነድ ማቅረብ አለባቸው","የቀዘቀዙ ኮንቴይነሮች የኤሌክትሪክ ተሰኪዎች በአስተማማኝ ጀነሬተር ይሰራሉ","ለተመዘገቡ የኢትራአፌ አባል የጭነት አስተላላፊዎች ፈጣን የማስተናገጃ ቅድሚያ ይሰጣል"],helpline:"+251 11 4717787 (የሞጆ ደረቅ ወደብ ቢሮ የውስጥ መስመር 106)"},moyale:{name:"የሞያሌ የጋራ ድንበር ጣቢያ እና የላሙ ወደብ ኮሪደር (ኬንያ)",image:"/images/corridor_moyale.jpg",status:"መደበኛ እንቅስቃሴ • የንግድ ትራንዚት ክፍት",badgeClass:"bg-primary-50 text-primary-700 border border-primary-200",summary:"በኢትዮጵያ እና በኬንያ መካከል ስትራቴጂካዊ የሁለትዮሽ የንግድ በር። የግብርና ምርቶችን፣ የንግድ ትራንዚት እቃዎችን እና ድንበር ተሻጋሪ አውቶቡሶችን ያስተናግዳል።",transitHours:"ከ55–60 ሰዓታት (አዲስ አበባ – ሞያሌ – ናይሮቢ)",clearanceHours:"3.0 ሰዓታት አማካይ የጋራ ጉምሩክ ፍተሻ",keyCheckpoints:["ሀዋሳ የደቡብ አቅጣጫ የንግድ ሚዛን ጣቢያ","ዲላ – ያቤሎ የትራንስ-አፍሪካ አውራ ጎዳና","የሞያሌ የተቀናጀ የአንድ ማዕከል የድንበር ፍተሻ ጣቢያ","ማርሳቢት – ኢሲዮሎ የትራንዚት መስመር"],advisories:["የኮሜሳ ቢጫ ካርድ ኢንሹራንስ እና የሁለትዮሽ የትራንስፖርት ፈቃድ ያስፈልጋል","የእንስሳት እና የዕፅዋት ፍተሻ ጣቢያዎች በመደበኛ የቀን ክፍለ ጊዜ ይሰራሉ","ድንበር ተሻጋሪ አገር አቋራጭ አውቶቡሶች በጋራ የኢሚግሬሽን ፍተሻ ያልፋሉ"],helpline:"+251 11 4717787 (የደቡብ በር ዴስክ የውስጥ መስመር 108)"},berbera:{name:"የበርበራ ወደብ የሎጂስቲክስ ኮሪደር (ቶግ ዋጫሌ – ድሬዳዋ)",image:"/images/corridor_berbera.jpg",status:"የጭነት ዕድገት • የማሻሻያ ሥራ ላይ",badgeClass:"bg-slate-100 text-slate-800 border border-slate-300",summary:"ምስራቅ ኢትዮጵያን ከበርበራ ጥልቅ ወደብ ጋር የሚያገናኝ አማራጭ የንግድ ኮሪደር። አዳዲስ የአስፋልት መስመሮች ከባድ የኮንቴይነር ትራንስፖርትን ያቀላጥፋሉ።",transitHours:"ከ30–36 ሰዓታት (ድሬዳዋ – በርበራ)",clearanceHours:"5.5 ሰዓታት አማካይ በቶግ ዋጫሌ ጉምሩክ",keyCheckpoints:["የድሬዳዋ ነፃ የንግድ ቀጠና መገናኛ","ሐረር – ባቢሌ የአውራ ጎዳና መስመር","ጅጅጋ የትራንዚት ሚዛን ጣቢያ","ቶግ ዋጫሌ የጉምሩክ ፍተሻ ግቢ"],advisories:["የክፍል 2 የመንገድ ንጣፍ ሥራ በመከናወን ላይ ስለሆነ አሽከርካሪዎች በሰዓት 60 ኪ.ሜ የፍጥነት ገደብ እንዲያከብሩ ይመከራል","በድሬዳዋ ደረቅ ወደብ በኩል የቀጥታ የኮንቴይነር ፍተሻ አገልግሎት መስጠት ጀምሯል","ለአባላት ድጋፍ ለመስጠት የኢትራአፌ ተወካዮች በቶግ ዋጫሌ ተመድበዋል"],helpline:"+251 11 4717787 (የምስራቅ ኮሪደር ዴስክ የውስጥ መስመር 109)"}};function Is(){const o=window.innerWidth-document.documentElement.clientWidth;if(o>0){document.body.style.paddingRight=`${o}px`;const n=document.querySelector("header");n&&(n.style.paddingRight=`${o}px`)}document.body.classList.add("modal-open"),document.documentElement.classList.add("modal-open"),document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden";try{window.lenis?.stop()}catch{}const d=document.getElementById("root");d&&d.setAttribute("inert","");const u=document.getElementById("globalBackToTop");u&&(u.style.pointerEvents="none",u.style.visibility="hidden")}function Fm(){const o=document.getElementById("etef-modal-container"),d=o&&!o.classList.contains("hidden"),u=document.querySelectorAll('[id^="admin-modal-"]:not(.hidden)').length>0;if(d||u)return;document.body.classList.remove("modal-open"),document.documentElement.classList.remove("modal-open"),document.body.style.overflow="",document.documentElement.style.overflow="",document.body.style.paddingRight="";const n=document.querySelector("header");n&&(n.style.paddingRight="");try{window.lenis?.start()}catch{}const p=document.getElementById("root");p&&p.removeAttribute("inert");const m=document.getElementById("globalBackToTop");m&&(m.style.pointerEvents="",window.scrollY>400&&(m.style.visibility="visible"))}function sy(){let o=document.getElementById("etef-modal-container");o||(o=document.createElement("div"),o.id="etef-modal-container",o.setAttribute("data-lenis-prevent","true"),o.className="fixed inset-0 z-[100000] hidden items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm overflow-y-auto",o.style.overscrollBehavior="contain",document.body.appendChild(o),o.addEventListener("click",d=>{const u=d.target;(u===o||u.classList.contains("modal-backdrop")||u.hasAttribute("data-modal-backdrop"))&&Ao()}),o.addEventListener("wheel",d=>{const u=d.target;(u===o||u.classList.contains("modal-backdrop"))&&d.preventDefault()},{passive:!1})),window._etef_modal_esc_bound||(window._etef_modal_esc_bound=!0,document.addEventListener("keydown",d=>{d.key==="Escape"&&Ao()}))}function Ao(){const o=document.getElementById("etef-modal-container");o&&(o.classList.add("hidden"),o.classList.remove("flex"),o.innerHTML=""),Fm()}function ly(o){const u=Zt()==="አማ",n=u?Ps:Js,p=n[o]||n.berehane;if(!p)return;const m=document.getElementById("etef-modal-container");if(!m)return;const E=u?"የሕይወት ታሪክ መስኮት ዝጋ":"Close dialog",b=u?"የሥራ አስፈጻሚው የሕይወት ታሪክ":"Executive Biography",j=u?"ዋና ዋና የፌዴሬሽኑ የሥራ ኃላፊነቶች፦":"Key Federation Portfolios:",C=u?"የሕይወት ታሪክ ዝጋ":"Close Biography";m.innerHTML=`
    <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative animate-in fade-in zoom-in-95 duration-200">
      <button type="button" class="modal-close-btn absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer border-none" aria-label="${E}">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100">
        <img src="${p.image}" alt="${p.name}" class="w-28 h-28 sm:w-32 sm:h-32 rounded-lg object-cover object-top shadow-md border-2 border-white ring-2 ring-primary-100 shrink-0">
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
        <h3 class="font-bold text-slate-900 text-sm mb-3">${j}</h3>
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
        <button type="button" class="modal-close-btn px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-lg transition-colors cursor-pointer border-none">
          ${C}
        </button>
      </div>
    </div>
  `,Zl(m),m.classList.remove("hidden"),m.classList.add("flex"),Is()}function iy(o){const u=Zt()==="አማ",n=u?Iv:Pv,p=n[o]||n["shared-road"];if(!p)return;const m=document.getElementById("etef-modal-container");if(!m)return;const E=u?"ጽሑፉን ዝጋ":"Close article",b=u?"የተዘጋጀው በ፦":"Authored by",j=u?"ዋና ዋና የፌዴሬሽኑ ግንዛቤዎች፦":"Key Federation Takeaways:",C=u?"አጋራ፦":"Share:",T=u?"ንባቡን ጨርሻለሁ":"Finished Reading";m.innerHTML=`
    <div class="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-10 relative animate-in fade-in zoom-in-95 duration-200">
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

      <div class="rounded-lg overflow-hidden mb-6 h-64 sm:h-80 bg-slate-100">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover">
      </div>

      <div class="space-y-4 text-slate-700 text-base leading-relaxed">
        ${p.content.map(x=>`<p>${x}</p>`).join("")}
      </div>

      <div class="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-200">
        <h3 class="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
          <i class="fa-solid fa-lightbulb text-primary-600"></i> ${j}
        </h3>
        <ul class="space-y-2">
          ${p.keyTakeaways.map(x=>`
            <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
              <i class="fa-solid fa-check text-primary-600 text-sm mt-0.5 shrink-0"></i>
              <span>${x}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2 text-xs text-slate-500">
          <span>${C}</span>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary-50 text-slate-600 hover:text-primary-600 flex items-center justify-center transition-colors"><i class="fa-brands fa-x-twitter text-xs"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary-50 text-slate-600 hover:text-primary-600 flex items-center justify-center transition-colors"><i class="fa-brands fa-linkedin-in text-xs"></i></a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary-50 text-slate-600 hover:text-primary-600 flex items-center justify-center transition-colors"><i class="fa-brands fa-telegram text-xs"></i></a>
        </div>
        <button type="button" class="modal-close-btn px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer border-none shadow-sm">
          ${T}
        </button>
      </div>
    </div>
  `,Zl(m),m.classList.remove("hidden"),m.classList.add("flex"),Is()}function ry(o){const u=Zt()==="አማ",n=u?ey:Wv,p=n[o]||n["advocacy-officer"];if(!p)return;const m=document.getElementById("etef-modal-container");if(!m)return;const E=u?"የሥራ ዝርዝር መረጃ ዝጋ":"Close job details",b=u?"የሥራ ቦታ":"Location",j=u?"የሥራ ዘርፍ":"Category",C=u?"የማመልከቻ ማብቂያ ቀን":"Application Deadline",T=u?"የክፍያ መጠን / ደመወዝ":"Remuneration",x=u?"የሥራው አጠቃላይ መግለጫ":"Role Overview",z=u?"ዋና ዋና የሥራ ኃላፊነቶች":"Key Responsibilities",G=u?"ለተወዳዳሪዎች የሚያስፈልጉ መስፈርቶች":"Candidate Requirements",Y=u?"ለሥራው ማመልከት ይፈልጋሉ?":"Interested in applying?",U=u?`እባክዎን የትምህርትና የስራ ልምድ ማስረጃዎን ወደ <a href="mailto:${p.applyEmail}" class="underline font-bold">${p.applyEmail}</a> በኢሜይል ይላኩ። በኢሜይሉ ርዕስ ላይ "${p.title}" በማለት መጥቀስዎን አይርሱ።`:`Please send your CV, cover letter, and credentials to <a href="mailto:${p.applyEmail}" class="underline font-bold">${p.applyEmail}</a> citing "${p.title}" in the subject line.`,_=u?"በኢሜይል ያመልክቱ":"Apply via Email";m.innerHTML=`
    <div class="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-10 relative animate-in fade-in zoom-in-95 duration-200">
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
            <span class="block text-slate-400 font-medium">${j}</span>
            <span class="font-bold text-slate-800">${p.category}</span>
          </div>
          <div>
            <span class="block text-slate-400 font-medium">${C}</span>
            <span class="font-bold text-primary-700">${p.deadline}</span>
          </div>
          <div>
            <span class="block text-slate-400 font-medium">${T}</span>
            <span class="font-bold text-slate-800">${p.salary}</span>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <h3 class="font-bold text-slate-900 text-base mb-2">${x}</h3>
        <p class="text-slate-600 text-sm leading-relaxed">${p.overview}</p>
      </div>

      <div class="mb-6">
        <h3 class="font-bold text-slate-900 text-base mb-3">${z}</h3>
        <ul class="space-y-2">
          ${p.responsibilities.map(Z=>`
            <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
              <i class="fa-solid fa-circle-check text-primary-600 text-sm mt-0.5 shrink-0"></i>
              <span>${Z}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="mb-8">
        <h3 class="font-bold text-slate-900 text-base mb-3">${G}</h3>
        <ul class="space-y-2">
          ${p.requirements.map(Z=>`
            <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
              <i class="fa-solid fa-arrow-right text-slate-400 text-xs mt-1 shrink-0"></i>
              <span>${Z}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="p-6 bg-primary-50 rounded-lg border border-primary-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span class="font-bold text-primary-900 text-sm block">${Y}</span>
          <p class="text-xs text-primary-700 mt-0.5">${U}</p>
        </div>
        <a href="mailto:${p.applyEmail}?subject=Application for ${encodeURIComponent(p.title)}" class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm rounded-lg transition-colors shadow-sm whitespace-nowrap">
          ${_}
        </a>
      </div>
    </div>
  `,Zl(m),m.classList.remove("hidden"),m.classList.add("flex"),Is()}function oy(){const d=Zt()==="አማ",u=document.getElementById("etef-modal-container");if(!u)return;const n=d?"የምዝገባ መስኮት ዝጋ":"Close dialog",p=d?"የኢትራአፌ የባለሙያዎች ምዝገባ መዝገብ":"ETEF Talent Registry",m=d?"የግል መረጃዎን / ሲቪዎን ያስገቡ":"Submit Your Profile / CV",E=d?"የፌዴሬሽኑ ማዕከላዊ የባለሙያዎች ማውጫን ይቀላቀሉ። አባል ድርጅቶች ብቁ ሠራተኞችን ሲፈልጉ ፌዴሬሽኑ የተረጋገጡ ባለሙያዎችን በቀጥታ ያገናኛል።":"Join our central candidate directory. When member freight, bus, or logistics operators seek qualified staff, ETEF connects verified talent directly.",b=d?"ሙሉ ስም":"Full Name",j=d?"የኢሜይል አድራሻ":"Email Address",C=d?"የስልክ ቁጥር":"Phone Number",T=d?"የሙያ መስክ":"Field of Expertise",x=d?"የሥራ ልምድ ዓመታት":"Years of Experience",z=d?"አጭር የሙያ ማጠቃለያ እና ልዩ የምስክር ወረቀቶች":"Professional Summary & Key Certifications",G=d?"የቅርብ ጊዜ የሥራ ኃላፊነቶችዎን፣ የመንጃ ፈቃድ ደረጃዎን (ለምሳሌ፡ ሕዝብ 2፣ ደረቅ 3) ወይም የኮሪደር ልምድዎን በአጭሩ ይግለጹ...":"Briefly describe your recent roles, licenses (e.g. Public 2, Heavy Freight), or special corridor experience...",Y=d?"ወደ ባለሙያዎች ማውጫ አስገባ":"Submit to Talent Registry",U=d?`
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
    `,_=d?`
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
    <div class="bg-white rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative animate-in fade-in zoom-in-95 duration-200">
      <button type="button" class="modal-close-btn absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer border-none" aria-label="${n}">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <div class="mb-6">
        <span class="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full mb-2 uppercase tracking-wider">${p}</span>
        <h2 class="text-2xl font-bold text-slate-900">${m}</h2>
        <p class="text-xs sm:text-sm text-slate-600 mt-1">${E}</p>
      </div>

      <form id="talent-registry-form" class="space-y-4">
        <div id="talent-form-feedback" class="hidden p-3 rounded-lg text-xs font-semibold"></div>

        <div>
          <label for="talent-name" class="block text-xs font-bold text-slate-700 mb-1">${b} <span class="text-red-500">*</span></label>
          <input type="text" id="talent-name" required placeholder="${d?"ለምሳሌ፦ አልማዝ ታደሰ":"e.g. Almaz Tadesse"}" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-primary-500 outline-none">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label for="talent-email" class="block text-xs font-bold text-slate-700 mb-1">${j} <span class="text-red-500">*</span></label>
            <input type="email" id="talent-email" required placeholder="name@domain.com" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-primary-500 outline-none">
          </div>
          <div>
            <label for="talent-phone" class="block text-xs font-bold text-slate-700 mb-1">${C} <span class="text-red-500">*</span></label>
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
            <label for="talent-exp" class="block text-xs font-bold text-slate-700 mb-1">${x} <span class="text-red-500">*</span></label>
            <select id="talent-exp" required class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-primary-500 outline-none bg-white">
              ${_}
            </select>
          </div>
        </div>

        <div>
          <label for="talent-notes" class="block text-xs font-bold text-slate-700 mb-1">${z}</label>
          <textarea id="talent-notes" rows="3" placeholder="${G}" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-primary-500 outline-none resize-none"></textarea>
        </div>

        <div class="pt-2">
          <button type="submit" id="talent-submit-btn" class="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer border-none">
            <span>${Y}</span>
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>
      </form>
    </div>
  `,Zl(u);const Z=u.querySelector("#talent-registry-form"),P=u.querySelector("#talent-form-feedback"),I=u.querySelector("#talent-submit-btn");Z&&P&&I&&Z.addEventListener("submit",be=>{be.preventDefault(),I.disabled=!0,I.innerHTML=d?'<span>በመመዝገብ ላይ...</span> <i class="fa-solid fa-spinner fa-spin text-xs"></i>':'<span>Registering...</span> <i class="fa-solid fa-spinner fa-spin text-xs"></i>',setTimeout(()=>{P.className="p-3 rounded-lg text-xs font-semibold bg-primary-50 border border-primary-200 text-primary-800 flex items-center gap-2 mb-2",P.innerHTML=d?'<i class="fa-solid fa-circle-check text-primary-600"></i> መረጃዎ በተሳካ ሁኔታ ተመዝግቧል! ክፍት የሥራ ቦታዎች ሲኖሩ የሰው ኃይል ቡድናችን ያነጋግርዎታል።':'<i class="fa-solid fa-circle-check text-primary-600"></i> Profile Successfully Registered! Our HR team will reach out as matched vacancies open.',P.classList.remove("hidden"),Z.reset(),I.disabled=!1,I.innerHTML=d?'<span>በተሳካ ሁኔታ ገብቷል</span> <i class="fa-solid fa-check text-xs"></i>':'<span>Submitted Successfully</span> <i class="fa-solid fa-check text-xs"></i>'},500)}),u.classList.remove("hidden"),u.classList.add("flex"),Is()}function ny(o){const u=Zt()==="አማ",n=u?ay:ty,p=n[o]||n.djibouti,m=document.getElementById("etef-modal-container");if(!m)return;const E=u?"የኮሪደር መረጃ መስኮት ዝጋ":"Close Modal",b=u?"የኢትራአፌ ዋና ጽሕፈት ቤት የጭነት ሎጂስቲክስና የኮሪደር ክትትል ዳይሬክቶሬት":"ETEF Secretariat Directorate of Freight Logistics & Corridor Watch",j=u?"አማካይ የትራንዚት ጊዜ":"Transit Benchmark",C=u?"የጉምሩክ ፍተሻ ጊዜ":"Customs Clearance",T=u?"የመስመሩ የፍተሻ ጣቢያዎች":"Operational Route Checkpoints",x=u?"ንቁ የትራንዚት መመሪያዎች እና ማሳሰቢያዎች":"Active Transit Directives & Advisories",z=u?"የኮሪደር ድንገተኛ አደጋ እና ብልሽት የእርዳታ መስመር":"Corridor Incident & Breakdown Helpline",G=u?"ወደ ስምሪት ይደውሉ":"Call Dispatch";m.innerHTML=`
    <div class="modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"></div>
    <div class="relative bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto z-50 shadow-2xl m-4 border border-slate-100 flex flex-col">
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
          <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">${j}</span>
            <span class="text-sm font-bold text-slate-800 mt-0.5 block">${p.transitHours}</span>
          </div>
          <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">${C}</span>
            <span class="text-sm font-bold text-primary-700 mt-0.5 block">${p.clearanceHours}</span>
          </div>
        </div>

        <div>
          <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-2">
            <i class="fa-solid fa-location-crosshairs text-primary-600"></i> ${T}
          </h3>
          <div class="space-y-2">
            ${p.keyCheckpoints.map(Y=>`
              <div class="flex items-center gap-2.5 text-xs text-slate-700 bg-slate-50 px-3.5 py-2.5 rounded-lg border border-slate-200/80">
                <i class="fa-solid fa-location-dot text-primary-600 shrink-0"></i>
                <span class="font-medium">${Y}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="p-4 rounded-lg bg-primary-50 border border-primary-200">
          <h3 class="text-xs font-bold text-primary-900 uppercase tracking-wider mb-2 flex items-center gap-2">
            <i class="fa-solid fa-triangle-exclamation text-primary-600"></i> ${x}
          </h3>
          <ul class="space-y-1.5 text-xs text-primary-800">
            ${p.advisories.map(Y=>`
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-circle-check text-primary-600 text-xs mt-0.5 shrink-0"></i>
                <span>${Y}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <div class="p-4 rounded-lg bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span class="text-[11px] text-slate-400 uppercase tracking-wider block">${z}</span>
            <span class="text-sm font-bold text-white">${p.helpline}</span>
          </div>
          <a href="tel:+251114717787" class="w-full sm:w-auto text-center px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs rounded-lg transition-colors shadow flex items-center justify-center gap-2">
            <i class="fa-solid fa-phone"></i>
            <span>${G}</span>
          </a>
        </div>
      </div>
    </div>
  `,Zl(m),m.classList.remove("hidden"),m.classList.add("flex"),Is()}function dy(){const d=Zt()==="አማ",u=document.getElementById("etef-modal-container");if(!u)return;const n=d?"መስኮት ዝጋ":"Close Modal",p=d?"የኢትራአፌ የኮሪደር አደጋ ሪፖርት ማቅረቢያ":"ETEF Corridor Incident Report",m=d?"የ24/7 ብሔራዊ ድንገተኛ አደጋ እና ብልሽት ክትትል":"24/7 National Emergency & Breakdown Watch",E=d?"የኮሪደር መስመር *":"Corridor Artery *",b=d?"የአደጋው ዓይነት *":"Incident Category *",j=d?"የአስቸኳይነት ደረጃ *":"Urgency Level *",C=d?"የተሽከርካሪ ታርጋ / የፍሊት ቁጥር *":"Vehicle Plate / Fleet Number *",T=d?"የተገናኝ ስልክ ቁጥር *":"Contact Phone Number *",x=d?"ትክክለኛ ቦታ / የቅርብ መለያ ምልክት *":"Exact Location / Nearest Landmark *",z=d?"የሁኔታው አጭር መግለጫ *":"Brief Description of Situation *",G=d?"የተፈጠረውን ችግር እና የሚያስፈልገውን ድጋፍ በግልጽ ይግለጹ...":"Provide clear details on what happened and assistance needed...",Y=d?"ሰርዝ":"Cancel",U=d?"የአደጋ ሪፖርቱን አስተላልፍ":"Transmit Incident Report",_=d?`
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
    `,Z=d?`
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
    `,P=d?`
      <option value="ከፍተኛ (አስቸኳይ ፈጣን ድጋፍ የሚያስፈልገው)">ከፍተኛ (አስቸኳይ ፈጣን ድጋፍ የሚያስፈልገው)</option>
      <option value="መካከለኛ (በ2 ሰዓታት ውስጥ)">መካከለኛ (በ2 ሰዓታት ውስጥ)</option>
      <option value="መደበኛ ምዝገባ ብቻ / የታሪፍ ቅሬታ">መደበኛ ምዝገባ ብቻ / የታሪፍ ቅሬታ</option>
    `:`
      <option value="High (Immediate Assistance)">High (Immediate Assistance Required)</option>
      <option value="Medium (Within 2 Hours)">Medium (Within 2 Hours)</option>
      <option value="Log Report Only">Log Report Only / Tariff Dispute</option>
    `;u.innerHTML=`
    <div class="modal-backdrop fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"></div>
    <div class="relative bg-white rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-50 shadow-2xl m-4 border border-slate-100">
      <div class="flex items-center justify-between pb-4 border-b border-slate-100">
        <div class="flex items-center gap-2.5">
          <div class="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center text-lg">
            <i class="fa-solid fa-truck-medical"></i>
          </div>
          <div>
            <h2 class="text-lg font-bold text-slate-900">${p}</h2>
            <span class="text-xs text-slate-400 block mt-0.5">${m}</span>
          </div>
        </div>
        <button class="modal-close-btn w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer border-none" aria-label="${n}">
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>
      </div>

      <div id="incident-report-feedback" class="hidden mb-4 p-4 rounded-lg border"></div>

      <form id="incident-report-form" class="space-y-4 text-xs mt-4">
        <div>
          <label class="block font-bold text-slate-700 mb-1">${E}</label>
          <select id="inc-corridor" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-primary-500">
            ${_}
          </select>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">${b}</label>
            <select id="inc-category" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-primary-500">
              ${Z}
            </select>
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">${j}</label>
            <select id="inc-urgency" required class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-primary-500">
              ${P}
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">${C}</label>
            <input type="text" id="inc-plate" required placeholder="${d?"ለምሳሌ፦ 3-84920 ኢት":"e.g. 3-84920 ET"}" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">${T}</label>
            <input type="tel" id="inc-phone" required placeholder="${d?"ለምሳሌ፦ 0911 234567":"e.g. 0911 234567"}" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
          </div>
        </div>

        <div>
          <label class="block font-bold text-slate-700 mb-1">${x}</label>
          <input type="text" id="inc-location" required placeholder="${d?"ለምሳሌ፦ አዋሽ 7 ኪሎ ሚዛን ጣቢያ፣ ኪሜ 142 ወደ ሰሜን":"e.g. Awash 7 Kilo Weighbridge, KM 142 heading North"}" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500">
        </div>

        <div>
          <label class="block font-bold text-slate-700 mb-1">${z}</label>
          <textarea id="inc-details" rows="3" required placeholder="${G}" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500 resize-none"></textarea>
        </div>

        <div class="pt-2 flex items-center justify-end gap-3">
          <button type="button" class="modal-close-btn px-4 py-2.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold cursor-pointer">
            ${Y}
          </button>
          <button type="submit" id="inc-submit-btn" class="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer">
            <i class="fa-solid fa-paper-plane"></i>
            <span>${U}</span>
          </button>
        </div>
      </form>
    </div>
  `,Zl(u),u.classList.remove("hidden"),u.classList.add("flex"),Is();const I=u.querySelector("#incident-report-form"),be=u.querySelector("#incident-report-feedback");I&&be&&I.addEventListener("submit",we=>{we.preventDefault();const Te=I.querySelector("#inc-submit-btn");Te&&(Te.disabled=!0,Te.innerHTML=d?'<span>በማስተላለፍ ላይ...</span> <i class="fa-solid fa-spinner fa-spin"></i>':'<span>Transmitting...</span> <i class="fa-solid fa-spinner fa-spin"></i>'),setTimeout(()=>{be.className="mb-4 p-4 rounded-lg border bg-primary-50 border-primary-200 text-primary-800 text-xs flex items-start gap-3 shadow-sm",be.innerHTML=d?`
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
          `,be.classList.remove("hidden"),I.reset(),Te&&(Te.disabled=!1,Te.innerHTML=d?'<i class="fa-solid fa-check"></i> <span>ሪፖርቱ ተመዝግቧል</span>':'<i class="fa-solid fa-check"></i> <span>Report Logged</span>',setTimeout(()=>{Ao()},3e3))},700)})}function Zl(o){o.querySelectorAll(".modal-close-btn").forEach(u=>{u.addEventListener("click",()=>Ao())})}const cy=[{path:"/",page:om},{path:"/home",page:om},{path:"/about",page:Cv},{path:"/partners",page:dm},{path:"/partner",page:dm},{path:"/vacancies",page:nm},{path:"/vacancy",page:nm},{path:"/membership",page:pm},{path:"/memberships",page:pm},{path:"/news",page:Rv},{path:"/faq",page:cm},{path:"/faqs",page:cm},{path:"/contact",page:um},{path:"/contact-us",page:um},{path:"/privacy",page:fm},{path:"/privacy-policy",page:fm},{path:"/terms",page:mm},{path:"/terms-of-service",page:mm},{path:"/admin",page:Yv},{path:"*",page:Jv}];function uy({page:o}){const d=za(),u=_m(),[n,p]=D.useState(Zt);D.useEffect(()=>Sv(b=>{p(b)}),[]);const m=typeof o.title=="object"?o.title[n]||o.title.ENG||"ETEF":o.title,E=typeof o.markup=="function"?o.markup(n):typeof o.markup=="object"?o.markup[n]||o.markup.ENG||"":o.markup;return D.useEffect(()=>{document.title=m,sy();const b=document.getElementById("page-content");if(!b)return;if(b.innerHTML=E,d.hash?setTimeout(()=>{try{const O=document.querySelector(d.hash);O?window.lenis?.scrollTo?window.lenis.scrollTo(O,{offset:-80}):O.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"instant"})}catch{window.scrollTo({top:0,behavior:"instant"})}},120):window.scrollTo({top:0,behavior:"instant"}),d.pathname==="/admin"){b.querySelectorAll('[id^="tab-"]').forEach(B=>B.classList.add("hidden"));const N=document.getElementById("tab-dashboard");N&&N.classList.remove("hidden")}b.querySelectorAll(".about-dropdown-container").forEach(O=>{const N=()=>{O.classList.remove("menu-closed"),O.querySelector(".about-dropdown-menu")?.classList.remove("force-hidden")};O.addEventListener("mouseleave",N),O.addEventListener("mouseenter",N)});const j=b.querySelector("#faq-search-input"),C=b.querySelectorAll(".faq-item"),T=b.querySelectorAll(".faq-filter-btn");let x="all";const z=()=>{const O=(j?.value||"").toLowerCase().trim();C.forEach(N=>{const B=N.getAttribute("data-category")||"",ce=N.textContent?.toLowerCase()||"",ie=x==="all"||B===x,de=!O||ce.includes(O);ie&&de?N.classList.remove("hidden"):N.classList.add("hidden")})};j&&j.addEventListener("input",z),T.length>0&&T.forEach(O=>{O.addEventListener("click",()=>{T.forEach(N=>{N.className="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors"}),O.className="faq-filter-btn px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-600 text-white shadow-sm",x=O.getAttribute("data-category")||"all",z()})});const G=b.querySelector("#news-search-input"),Y=b.querySelectorAll(".news-card"),U=b.querySelectorAll(".news-filter-btn"),_=b.querySelector("#news-no-results");let Z="all";const P=()=>{const O=(G?.value||"").toLowerCase().trim();let N=0;Y.forEach(B=>{const ce=B.getAttribute("data-category")||"",ie=B.textContent?.toLowerCase()||"",de=Z==="all"||ce===Z,et=!O||ie.includes(O);de&&et?(B.classList.remove("hidden"),N++):B.classList.add("hidden")}),_&&(N===0?_.classList.remove("hidden"):_.classList.add("hidden"))};G&&G.addEventListener("input",P),U.length>0&&U.forEach(O=>{O.addEventListener("click",()=>{U.forEach(N=>{N.className="news-filter-btn px-4 py-2 bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm rounded-full border border-slate-200 transition-colors cursor-pointer"}),O.className="news-filter-btn px-4 py-2 bg-primary-600 text-white font-medium text-sm rounded-full shadow-sm transition-colors cursor-pointer border-none",Z=O.getAttribute("data-category")||"all",P()})});const I=b.querySelector("#job-search-input"),be=b.querySelector("#job-category-select"),we=b.querySelector("#job-employer-select"),Te=b.querySelector("#job-search-btn"),se=b.querySelectorAll(".job-listing-card"),re=b.querySelector("#job-no-results"),Je=()=>{const O=(I?.value||"").toLowerCase().trim(),N=(be?.value||"").toLowerCase(),B=(we?.value||"").toLowerCase();let ce=0;se.forEach(ie=>{const de=(ie.getAttribute("data-category")||"").toLowerCase(),et=(ie.getAttribute("data-employer")||"").toLowerCase(),Ye=ie.textContent?.toLowerCase()||"";(!O||Ye.includes(O))&&(!N||de===N)&&(!B||et===B)?(ie.classList.remove("hidden"),ce++):ie.classList.add("hidden")}),re&&(ce===0?re.classList.remove("hidden"):re.classList.add("hidden"))};I&&I.addEventListener("input",Je),be&&be.addEventListener("change",Je),we&&we.addEventListener("change",Je),Te&&Te.addEventListener("click",Je);const Fe=b.querySelector("#toast"),ot=b.querySelector("#toastMessage"),ze=O=>{Fe&&ot&&(ot.textContent=O,Fe.classList.remove("translate-y-20","opacity-0"),setTimeout(()=>Fe.classList.add("translate-y-20","opacity-0"),3e3))};if(d.pathname==="/admin"){const O=Ue=>{const ke=document.getElementById(Ue);ke&&(ke.classList.remove("hidden"),ke.classList.add("flex"),ke.style.zIndex="100000",Is())},N=()=>{b.querySelectorAll('[id^="admin-modal-"]').forEach(ke=>{ke.classList.add("hidden"),ke.classList.remove("flex")}),Fm()};b.querySelector("#admin-open-member-modal")?.addEventListener("click",()=>O("admin-modal-member")),b.querySelector("#admin-open-vacancy-modal")?.addEventListener("click",()=>O("admin-modal-vacancy")),b.querySelector("#admin-open-news-modal")?.addEventListener("click",()=>O("admin-modal-news")),b.querySelector("#admin-open-partner-modal")?.addEventListener("click",()=>O("admin-modal-partner")),b.querySelectorAll(".admin-modal-close, .admin-modal-backdrop").forEach(Ue=>{Ue.addEventListener("click",N)});const B=b.querySelector("#admin-member-search"),ce=b.querySelector("#admin-member-sector-filter"),ie=b.querySelectorAll(".admin-member-row"),de=()=>{const Ue=(B?.value||"").toLowerCase().trim(),ke=ce?.value||"all";ie.forEach(nt=>{const tt=nt.getAttribute("data-sector")||"",mt=nt.textContent?.toLowerCase()||"",Ie=ke==="all"||tt===ke,at=!Ue||mt.includes(Ue);Ie&&at?nt.classList.remove("hidden"):nt.classList.add("hidden")})};B?.addEventListener("input",de),ce?.addEventListener("change",de);const et=b.querySelector("#admin-form-new-member");et?.addEventListener("submit",Ue=>{Ue.preventDefault();const ke=(b.querySelector("#member-org-name")?.value||"").trim(),nt=b.querySelector("#member-sector")?.value||"Freight",tt=(b.querySelector("#member-region")?.value||"").trim(),mt=(b.querySelector("#member-fleet")?.value||"").trim(),Ie=b.querySelector("#member-tier")?.value||"Corporate Member",at=b.querySelector("#admin-members-table tbody");if(at&&ke){const Ia=document.createElement("tr");Ia.className="hover:bg-slate-50/50 admin-member-row",Ia.setAttribute("data-sector",nt),Ia.innerHTML=`
            <td class="py-4 px-6 font-bold text-slate-900">${ke}</td>
            <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">${nt}</span></td>
            <td class="py-4 px-6 text-slate-600">${tt||"Addis Ababa"}</td>
            <td class="py-4 px-6 font-semibold text-slate-900">${mt||"N/A"}</td>
            <td class="py-4 px-6"><span class="text-xs font-semibold text-primary-700">${Ie}</span></td>
            <td class="py-4 px-6"><span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
            <td class="py-4 px-6 text-right">
                <button class="px-2.5 py-1 text-slate-600 hover:text-primary-600 font-medium text-xs rounded hover:bg-slate-100 transition-colors">Details</button>
            </td>
          `,at.prepend(Ia),et.reset(),N(),ze(`Member "${ke}" registered successfully!`)}});const Ye=b.querySelector("#admin-form-new-vacancy");Ye?.addEventListener("submit",Ue=>{Ue.preventDefault();const ke=(b.querySelector("#vacancy-title")?.value||"").trim(),nt=(b.querySelector("#vacancy-station")?.value||"").trim(),tt=b.querySelector("#vacancy-type")?.value||"Full-Time",mt=(b.querySelector("#vacancy-deadline")?.value||"").trim(),Ie=b.querySelector("#admin-vacancies-table tbody");if(Ie&&ke){const at=document.createElement("tr");at.className="hover:bg-slate-50/50",at.innerHTML=`
            <td class="py-4 px-6 font-bold text-slate-900">${ke}</td>
            <td class="py-4 px-6 text-slate-600">${nt}</td>
            <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700">${tt}</span></td>
            <td class="py-4 px-6 font-bold text-primary-600">0 Candidates</td>
            <td class="py-4 px-6 text-slate-500">${mt}</td>
            <td class="py-4 px-6"><span class="vacancy-status-pill px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Active</span></td>
            <td class="py-4 px-6 text-right space-x-2">
                <button class="admin-vacancy-toggle-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">Close</button>
            </td>
          `,Ie.prepend(at),Ye.reset(),N(),ze(`Vacancy "${ke}" published!`)}});const Pe=b.querySelector("#admin-form-new-news");Pe?.addEventListener("submit",Ue=>{Ue.preventDefault();const ke=(b.querySelector("#news-title")?.value||"").trim(),nt=b.querySelector("#news-category")?.value||"Industry News",tt=b.querySelector("#news-status")?.value||"Published",mt=b.querySelector("#admin-news-table tbody");if(mt&&ke){const Ie=document.createElement("tr");Ie.className="hover:bg-slate-50/50";const at=tt==="Published";Ie.innerHTML=`
            <td class="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">${ke}</td>
            <td class="py-4 px-6"><span class="px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">${nt}</span></td>
            <td class="py-4 px-6 text-slate-500">Today</td>
            <td class="py-4 px-6 font-semibold text-slate-700">0 views</td>
            <td class="py-4 px-6"><span class="px-2.5 py-1 ${at?"bg-primary-50 text-primary-700":"bg-slate-100 text-slate-600"} text-xs font-bold rounded-full">${tt}</span></td>
            <td class="py-4 px-6 text-right space-x-2">
                <button class="admin-news-status-btn px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors">${at?"Unpublish":"Publish"}</button>
            </td>
          `,mt.prepend(Ie),Pe.reset(),N(),ze(`Article "${ke.slice(0,30)}..." saved!`)}});const ga=b.querySelector("#admin-form-new-partner");ga?.addEventListener("submit",Ue=>{Ue.preventDefault();const ke=(b.querySelector("#partner-name")?.value||"").trim(),nt=(b.querySelector("#partner-sector")?.value||"").trim(),tt=b.querySelector("#partner-tier")?.value||"Tier 1 Partner",mt=(b.querySelector("#partner-desc")?.value||"").trim(),Ie=b.querySelector("#admin-partners-grid");if(Ie&&ke){const at=document.createElement("div");at.className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between",at.innerHTML=`
            <div>
                <div class="flex justify-between items-start mb-3">
                    <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-primary-50 text-primary-700 border border-primary-100">${tt}</span>
                    <span class="text-xs font-semibold text-primary-600 flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Active</span>
                </div>
                <h4 class="font-bold text-slate-900 text-base mb-1">${ke}</h4>
                <p class="text-xs text-slate-500 mb-3">${nt}</p>
                <p class="text-xs text-slate-600 leading-relaxed mb-4">${mt||"Official strategic partnership and institutional accord."}</p>
            </div>
            <div class="pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                <span class="text-slate-400">Added Today</span>
                <button class="text-slate-600 hover:text-primary-600 font-semibold">Edit Agreement</button>
            </div>
          `,Ie.prepend(at),ga.reset(),N(),ze(`Partner "${ke}" added!`)}})}b.querySelectorAll("#tab-dashboard table button").forEach(O=>{O.addEventListener("click",()=>{const N=O.closest("tr"),B=O.textContent?.trim();if(!N||!B)return;const ce=N.querySelector("td:nth-child(5)"),ie=N.querySelector("td:nth-child(6)");B==="Approve"?(ce&&(ce.innerHTML='<span class="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full">Approved</span>'),ie&&(ie.innerHTML='<button class="px-3 py-1 bg-slate-100 text-slate-700 font-semibold rounded hover:bg-slate-200 transition-colors">View</button>'),ze("Membership application approved successfully.")):B==="Reject"&&(ce&&(ce.innerHTML='<span class="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">Rejected</span>'),ie&&(ie.innerHTML='<button class="px-3 py-1 bg-slate-100 text-slate-700 font-semibold rounded hover:bg-slate-200 transition-colors">Re-evaluate</button>'),ze("Membership application rejected."))})}),b.querySelectorAll(".admin-vacancy-toggle-btn").forEach(O=>{O.addEventListener("click",()=>{const B=O.closest("tr")?.querySelector(".vacancy-status-pill");B&&(B.textContent?.trim().toLowerCase()==="active"?(B.textContent="Closed",B.className="vacancy-status-pill px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full",O.textContent="Reopen",ze("Vacancy status set to Closed")):(B.textContent="Active",B.className="vacancy-status-pill px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60",O.textContent="Close",ze("Vacancy status reopened as Active")))})}),b.querySelectorAll(".admin-news-status-btn").forEach(O=>{O.addEventListener("click",()=>{const B=O.closest("tr")?.querySelector("td:nth-child(5) span");B&&(B.textContent?.trim().toLowerCase()==="published"?(B.textContent="Draft",B.className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full",O.textContent="Publish",O.className="admin-news-status-btn px-3 py-1 bg-primary-50 hover:bg-primary-100 text-primary-700 text-xs font-bold rounded-lg transition-colors cursor-pointer",ze("Article moved to Drafts")):(B.textContent="Published",B.className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60",O.textContent="Unpublish",O.className="admin-news-status-btn px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer",ze("Article published successfully")))})});const Tt=b.querySelector("#contact-form"),Ae=b.querySelector("#contact-form-feedback");Tt&&Ae&&Tt.addEventListener("submit",O=>{O.preventDefault();const N=Tt.querySelector("#contact-submit-btn"),B=Zt()==="አማ";N&&(N.disabled=!0,N.innerHTML=B?'<span>በመላክ ላይ...</span> <i class="fa-solid fa-spinner fa-spin"></i>':'<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>'),setTimeout(()=>{Ae.className="mb-6 p-4 rounded-xl border bg-primary-50 border-primary-200 text-primary-950 text-sm flex items-start gap-3 shadow-sm",Ae.innerHTML=B?`
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
            `,Ae.classList.remove("hidden"),Tt.reset(),N&&(N.disabled=!1,N.innerHTML=B?'<span>መልእክት ተልኳል</span> <i class="fa-solid fa-check"></i>':'<span>Message Sent</span> <i class="fa-solid fa-check"></i>',setTimeout(()=>{N.innerHTML=B?'<span>መልእክት ላክ</span> <i class="fa-solid fa-paper-plane text-sm"></i>':'<span>Send Message</span> <i class="fa-solid fa-paper-plane text-sm"></i>'},3e3))},600)});const q=b.querySelector("#membership-form"),W=b.querySelector("#membership-alert");q&&W&&q.addEventListener("submit",O=>{O.preventDefault();const N=q.querySelector("#membership-submit-btn"),B=Zt()==="አማ";N&&(N.disabled=!0,N.innerHTML=B?'<span>ማመልከቻውን በመመዝገብ ላይ...</span> <i class="fa-solid fa-spinner fa-spin"></i>':'<span>Processing Application...</span> <i class="fa-solid fa-spinner fa-spin"></i>'),setTimeout(()=>{W.className="mb-6 p-5 rounded-2xl border bg-primary-50 border-primary-200 text-primary-950 text-sm flex items-start gap-3 shadow-sm",W.innerHTML=B?`
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
            `,W.classList.remove("hidden"),q.reset(),N&&(N.disabled=!1,N.innerHTML=B?'<span>ማመልከቻው ተቀብሏል</span> <i class="fa-solid fa-check"></i>':'<span>Application Received</span> <i class="fa-solid fa-check"></i>',setTimeout(()=>{N.innerHTML=B?'<span>ማመልከቻ ያስገቡ</span> <i class="fa-solid fa-paper-plane text-sm"></i>':'<span>SUBMIT APPLICATION</span> <i class="fa-solid fa-paper-plane text-sm"></i>'},3500))},700)});const ee=b.querySelector("#calc-fleet-slider"),Me=b.querySelector("#calc-fleet-display"),Ee=b.querySelector("#calc-dues-amount"),Et=b.querySelector("#calc-tier-badge"),$t=b.querySelectorAll(".calc-sector-btn"),ba=b.querySelector("#calc-apply-btn");if(ee&&Ee&&Et){let O=450,N=15e3,B="Freight Transport";const ce=()=>{const ie=Zt()==="አማ",de=parseInt(ee.value,10)||1;Me&&(Me.textContent=ie?`${de} ${de===1?"ተሽከርካሪ":"ተሽከርካሪዎች"}`:`${de} ${de===1?"Vehicle":"Vehicles"}`);const et=N+de*O;Ee.textContent=et.toLocaleString();let Ye=ie?"ተባባሪ አባል":"Associate Member",Pe="px-3 py-1 rounded-full text-xs font-bold bg-slate-500/20 text-slate-300 border border-slate-400/30";de>150?(Ye=ie?"ስልታዊ ጠቅላላ ጉባኤ አባል":"Strategic Assembly Member",Pe="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/40"):de>50?(Ye=ie?"ሥራ አስፈፃሚ አባል":"Executive Member",Pe="px-3 py-1 rounded-full text-xs font-bold bg-primary-500/30 text-primary-200 border border-primary-400/40"):de>10&&(Ye=ie?"ኮርፖሬት አባል":"Corporate Member",Pe="px-3 py-1 rounded-full text-xs font-bold bg-primary-500/20 text-primary-300 border border-primary-400/30"),Et.textContent=Ye,Et.className=Pe};$t.forEach(ie=>{ie.addEventListener("click",()=>{$t.forEach(de=>{de.className="calc-sector-btn px-3 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white font-medium text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer"}),ie.className="calc-sector-btn active px-3 py-2.5 rounded-xl border border-primary-400 bg-primary-600 text-white font-bold text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer shadow-sm",O=parseInt(ie.getAttribute("data-rate")||"450",10),N=parseInt(ie.getAttribute("data-base")||"15000",10),B=ie.getAttribute("data-sector")||"Freight Transport",ce()})}),ee.addEventListener("input",ce),ba&&ba.addEventListener("click",()=>{const ie=Zt()==="አማ",de=ee.value,et=Et.textContent||(ie?"ኮርፖሬት አባል":"Corporate Member"),Ye=b.querySelector("#sector"),Pe=b.querySelector("#membership-form");Ye&&(Ye.value=ie?`${B} (${de} የንግድ ክፍሎች - ${et})`:`${B} (${de} Commercial Units - ${et})`,Ye.classList.add("ring-2","ring-primary-500"),setTimeout(()=>Ye.classList.remove("ring-2","ring-primary-500"),2e3)),Pe&&Pe.scrollIntoView({behavior:"smooth",block:"start"}),ze(ie?`የተመረጠው ${B} ደረጃ በማመልከቻ ቅጹ ላይ ተሞልቷል።`:`Selected ${B} tier applied to registration form.`)})}b.querySelectorAll(".doc-download-btn").forEach(O=>{O.addEventListener("click",()=>{const N=Zt()==="አማ",B=O.getAttribute("data-doc")||(N?"የኢትራአፌ ይፋዊ ሰነድ":"ETEF Official Documentation");ze(N?`ሰነድ በማውረድ ላይ፦ "${B}"...`:`Preparing download: "${B}"...`),setTimeout(()=>{ze(N?`ሰነዱ ዝግጁ ሆኗል፦ "${B}"`:`Download ready: "${B}"`)},1200)})});const L=b.querySelectorAll(".directorate-tab-btn");L.forEach(O=>{O.addEventListener("click",()=>{const N=O.getAttribute("data-directorate");if(!N)return;L.forEach(ce=>{ce.classList.remove("active","bg-primary-600","text-white","shadow-md","shadow-primary-600/20"),ce.classList.add("bg-slate-100","text-slate-700","hover:bg-slate-200")}),O.classList.add("active","bg-primary-600","text-white","shadow-md","shadow-primary-600/20"),O.classList.remove("bg-slate-100","text-slate-700","hover:bg-slate-200"),b.querySelectorAll(".directorate-panel").forEach(ce=>{ce.classList.add("hidden"),ce.classList.remove("block")});const B=b.querySelector(`#directorate-panel-${N}`);B&&(B.classList.remove("hidden"),B.classList.add("block"))})});const $=b.querySelectorAll(".timeline-year-btn");$.forEach(O=>{O.addEventListener("click",()=>{const N=O.getAttribute("data-year");if(!N)return;$.forEach(de=>{de.classList.remove("active");const et=de.querySelector("span:first-child"),Ye=de.querySelector("span:last-child");et&&(et.className="w-12 h-12 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-white flex items-center justify-center font-bold text-sm border-2 border-slate-700 group-hover:border-slate-500 transition-all"),Ye&&(Ye.className="text-xs font-semibold text-slate-400 group-hover:text-slate-200")}),O.classList.add("active");const B=O.querySelector("span:first-child"),ce=O.querySelector("span:last-child");B&&(B.className="w-12 h-12 rounded-2xl bg-primary-600 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary-600/40 border-2 border-primary-400 transition-all"),ce&&(ce.className="text-xs font-bold text-primary-300"),b.querySelectorAll(".timeline-content-card").forEach(de=>{de.classList.add("hidden"),de.classList.remove("block")});const ie=b.querySelector(`#timeline-card-${N}`);ie&&(ie.classList.remove("hidden"),ie.classList.add("block"))})});let K=null;const ue=b.querySelectorAll(".hero-bg-slide"),ve=b.querySelectorAll(".hero-slide-dot");let fe=0;const X=O=>{ue.length!==0&&(fe=(O+ue.length)%ue.length,ue.forEach((N,B)=>{B===fe?(N.classList.remove("opacity-0","scale-105"),N.classList.add("opacity-100","scale-100")):(N.classList.remove("opacity-100","scale-100"),N.classList.add("opacity-0","scale-105"))}),ve.forEach((N,B)=>{B===fe?N.className="hero-slide-dot w-8 h-2 rounded-full bg-white transition-all duration-300 cursor-pointer shadow-sm":N.className="hero-slide-dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/80 transition-all duration-300 cursor-pointer shadow-sm"}))},ae=()=>{X(fe+1)},oa=()=>{X(fe-1)},Pa=()=>{K&&clearInterval(K),K=window.setInterval(ae,4500)};ue.length>0&&Pa();const _a=O=>{const N=O.target;if(N.closest("#hero-slide-next")){O.preventDefault(),ae(),Pa();return}if(N.closest("#hero-slide-prev")){O.preventDefault(),oa(),Pa();return}const ie=N.closest(".hero-slide-dot");if(ie){O.preventDefault();const V=Array.from(ve).indexOf(ie);V!==-1&&(X(V),Pa());return}const de=N.closest(".faq-accordion-header");if(de){O.preventDefault();const V=de.closest(".faq-item");if(V){const Ce=V.querySelector(".faq-accordion-content"),Se=V.querySelector(".faq-icon i");Ce&&(Ce.classList.contains("hidden")?(Ce.classList.remove("hidden"),Se&&(Se.className="fa-solid fa-chevron-up text-xs")):(Ce.classList.add("hidden"),Se&&(Se.className="fa-solid fa-chevron-down text-xs")))}return}if(N.closest("#partner-carousel-prev")){O.preventDefault();const V=document.getElementById("partner-carousel-track");V&&V.scrollBy({left:-340,behavior:"smooth"});return}if(N.closest("#partner-carousel-next")){O.preventDefault();const V=document.getElementById("partner-carousel-track");V&&V.scrollBy({left:340,behavior:"smooth"});return}const Pe=N.closest(".bio-modal-trigger");if(Pe){O.preventDefault();const V=Pe.getAttribute("data-bio");V&&ly(V);return}const ga=N.closest(".article-modal-trigger");if(ga){O.preventDefault();const V=ga.getAttribute("data-article-id");V&&iy(V);return}const Ue=N.closest(".job-modal-trigger");if(Ue){O.preventDefault();const V=Ue.getAttribute("data-job-id");V&&ry(V);return}if(N.closest(".talent-modal-trigger")){O.preventDefault(),oy();return}const nt=N.closest(".corridor-advisory-btn");if(nt){O.preventDefault();const V=nt.getAttribute("data-corridor-id");V&&ny(V);return}if(N.closest("#btn-corridor-incident-report")){O.preventDefault(),dy();return}const mt=N.closest(".lang-dropdown-btn");if(mt){O.preventDefault();const Ce=mt.closest(".lang-dropdown-container")?.querySelector(".lang-dropdown-menu");Ce&&Ce.classList.toggle("hidden");return}const Ie=N.closest(".lang-select-option");if(Ie){O.preventDefault();const V=(Ie.getAttribute("data-lang")||"").trim();Ie.getAttribute("data-lang-name"),(V==="ENG"||V==="አማ")&&(Ev(V),document.querySelectorAll(".lang-dropdown-menu").forEach(Ce=>{Ce.classList.add("hidden")}),Fe&&ot&&(ot.textContent=V==="ENG"?"Language switched to English":"ቋንቋ ወደ አማርኛ ተቀይሯል",Fe.classList.remove("translate-y-20","opacity-0"),setTimeout(()=>Fe.classList.add("translate-y-20","opacity-0"),2500)));return}N.closest(".lang-dropdown-container")||document.querySelectorAll(".lang-dropdown-menu").forEach(V=>{V.classList.add("hidden")});const at=N.closest(".about-sub-link, #nav-about-link");if(at){const V=at.closest(".about-dropdown-container");if(V){V.classList.add("menu-closed");const Ce=V.querySelector(".about-dropdown-menu");Ce&&Ce.classList.add("force-hidden")}document.activeElement?.blur()}if(N.closest(".about-dropdown-container")||b.querySelectorAll(".about-dropdown-container").forEach(V=>{V.classList.add("menu-closed"),V.querySelector(".about-dropdown-menu")?.classList.add("force-hidden")}),N.closest("#admin-mobile-menu-btn, #admin-mobile-close-btn, #admin-mobile-backdrop")||d.pathname==="/admin"&&N.closest("#admin-mobile-menu-btn")){O.preventDefault();const V=b.querySelector("#admin-sidebar"),Ce=b.querySelector("#admin-mobile-backdrop");V&&Ce&&(V.classList.contains("-translate-x-full")?(V.classList.remove("-translate-x-full"),Ce.classList.remove("hidden")):(V.classList.add("-translate-x-full"),Ce.classList.add("hidden")));return}if(d.pathname!=="/admin"){const V=N.closest("button");if(V&&V.querySelector(".fa-bars, .fa-xmark")){const Ce=document.getElementById("etef-mobile-drawer");if(Ce){Ce.remove();const Se=V.querySelector("i");Se&&(Se.className="fa-solid fa-bars text-2xl")}else{const Se=b.querySelector("header");if(Se){const Kl=Zt(),At=Sc[Kl].nav,va=document.createElement("div");va.id="etef-mobile-drawer",va.className="md:hidden bg-primary-700 text-white px-6 py-5 border-t border-primary-500/30 flex flex-col space-y-2 shadow-lg";const Jt=At.aboutSub||{history:"History",vision:"Vision & Mission",missionValues:"Core Value",service:"Service"};va.innerHTML=`
                <a href="/" class="py-2 text-white font-medium hover:text-primary-100 transition-colors">${At.home}</a>
                <div class="flex flex-col">
                  <a href="/about" class="py-2 text-white font-medium hover:text-primary-100 transition-colors flex items-center justify-between">
                    <span>${At.about}</span>
                  </a>
                  <div class="pl-4 flex flex-col space-y-2 pb-2 text-xs text-blue-100 border-l border-white/25 ml-2 mt-1">
                    <a href="/about#history" class="hover:text-white py-1 transition-colors flex items-center gap-2">
                      <i class="fa-solid fa-landmark text-[11px] text-blue-200"></i> ${Jt.history}
                    </a>
                    <a href="/about#vision" class="hover:text-white py-1 transition-colors flex items-center gap-2">
                      <i class="fa-solid fa-eye text-[11px] text-blue-200"></i> ${Jt.vision}
                    </a>
                    <a href="/about#mission-values" class="hover:text-white py-1 transition-colors flex items-center gap-2">
                      <i class="fa-solid fa-bullseye text-[11px] text-blue-200"></i> ${Jt.missionValues}
                    </a>
                    <a href="/about#services-section" class="hover:text-white py-1 transition-colors flex items-center gap-2">
                      <i class="fa-solid fa-handshake-angle text-[11px] text-blue-200"></i> ${Jt.service}
                    </a>
                  </div>
                </div>
                <a href="/news" class="py-2 text-white font-medium hover:text-primary-100 transition-colors">${At.news}</a>
                <a href="/vacancies" class="py-2 text-white font-medium hover:text-primary-100 transition-colors">${At.vacancies}</a>
                <a href="/partners" class="py-2 text-white font-medium hover:text-primary-100 transition-colors">${At.partners}</a>
                <a href="/faq" class="py-2 text-white font-medium hover:text-primary-100 transition-colors">${At.faq}</a>
                <a href="/contact" class="py-2 text-white font-medium hover:text-primary-100 transition-colors">${At.contact}</a>
                <a href="/membership" class="mt-2 text-center py-2.5 px-4 bg-white text-primary-600 rounded-lg font-bold shadow-sm">${At.join}</a>
              `,Se.insertAdjacentElement("afterend",va);const na=V.querySelector("i");na&&(na.className="fa-solid fa-xmark text-2xl")}}return}}const ha=N.closest("a");if(!ha)return;const Lt=ha.getAttribute("href");if(!Lt)return;const Ws=ha.closest("#etef-mobile-drawer");if(Ws){Ws.remove();const Ce=b.querySelector("header")?.querySelector(".fa-xmark");Ce&&(Ce.className="fa-solid fa-bars text-2xl")}if(Lt.startsWith("#")&&d.pathname==="/admin"){O.preventDefault();const V=Lt.replace("#","").replace("nav-",""),Ce=document.getElementById(`tab-${V}`);if(Ce){b.querySelectorAll('[id^="tab-"]').forEach(na=>na.classList.add("hidden")),Ce.classList.remove("hidden"),b.querySelectorAll("aside nav a").forEach(na=>{na.classList.remove("bg-primary-600","text-white","font-semibold","shadow-sm"),na.classList.add("text-slate-400","hover:text-slate-100","hover:bg-slate-800/60")}),ha.classList.add("bg-primary-600","text-white","font-semibold","shadow-sm"),ha.classList.remove("text-slate-400","hover:text-slate-100","hover:bg-slate-800/60");const At=b.querySelector("#pageTitle");if(At){const na={dashboard:"Admin Overview",memberships:"Membership Management",vacancies:"Job Vacancies Management",news:"News & Media Management",partners:"Partners & Sponsors"};At.textContent=na[V]||"Secretariat Portal"}const va=b.querySelector("#admin-sidebar"),Jt=b.querySelector("#admin-mobile-backdrop");va&&Jt&&(va.classList.add("-translate-x-full"),Jt.classList.add("hidden"))}return}if(!(Lt.startsWith("http://")||Lt.startsWith("https://")||Lt.startsWith("mailto:")||Lt.startsWith("tel:")))try{const V=new URL(ha.href,window.location.origin);if(V.origin===window.location.origin){O.preventDefault();const Ce=V.pathname.replace(/\.html$/,"")||"/";if(Ce===d.pathname&&V.hash){b.querySelectorAll(".about-dropdown-container").forEach(Se=>{Se.classList.add("menu-closed"),Se.querySelector(".about-dropdown-menu")?.classList.add("force-hidden")}),document.activeElement?.blur(),window.history.pushState(null,"",Ce+V.search+V.hash);try{const Se=document.querySelector(V.hash);Se&&(window.lenis?.scrollTo?window.lenis.scrollTo(Se,{offset:-80}):Se.scrollIntoView({behavior:"smooth",block:"start"}))}catch{}return}u(Ce+V.search+V.hash)}}catch{if(Lt.startsWith("/")){O.preventDefault();const V=Lt.replace(/\.html$/,"");u(V)}}};return b.addEventListener("click",_a),()=>{b.removeEventListener("click",_a),K&&clearInterval(K),j&&j.removeEventListener("input",z)}},[o,n,m,E,d.pathname,u]),js.createElement("div",{id:"page-content"})}function py(){const o=cy.map(({path:d,page:u})=>js.createElement(Bm,{key:d,path:d,element:js.createElement(uy,{page:u})}));return js.createElement(pv,null,js.createElement(Fh,null,o))}Fg.createRoot(document.getElementById("root")).render(js.createElement(js.StrictMode,null,js.createElement(py)));
