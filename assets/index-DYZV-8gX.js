var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(e&&(t=e(e=0)),t),s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ee(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ee(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),ee(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=ee(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=ee(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ee(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function N(e,t,n){if(e==null)return e;var r=[],i=0;return ee(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function te(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var P=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},F={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=F,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:te}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,P)}catch(e){P(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.6`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.6`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=h(),n=p(),r=_();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for(`react.element`),g=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),k=Symbol.for(`react.activity`),A=Symbol.for(`react.memo_cache_sentinel`),j=Symbol.iterator;function M(e){return typeof e!=`object`||!e?null:(e=j&&e[j]||e[`@@iterator`],typeof e==`function`?e:null)}var ee=Symbol.for(`react.client.reference`);function N(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case k:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?N(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return N(e(t))}catch{}}return null}var te=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},re=[],ie=-1;function ae(e){return{current:e}}function oe(e){0>ie||(e.current=re[ie],re[ie]=null,ie--)}function I(e,t){ie++,re[ie]=e.current,e.current=t}var se=ae(null),ce=ae(null),L=ae(null),le=ae(null);function ue(e,t){switch(I(L,t),I(ce,e),I(se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Kd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Kd(t),e=qd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}oe(se),I(se,e)}function de(){oe(se),oe(ce),oe(L)}function R(e){e.memoizedState!==null&&I(le,e);var t=se.current,n=qd(t,e.type);t!==n&&(I(ce,e),I(se,n))}function fe(e){ce.current===e&&(oe(se),oe(ce)),le.current===e&&(oe(le),rp._currentValue=ne)}var pe,me;function he(e){if(pe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);pe=t&&t[1]||``,me=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+pe+e+me}var ge=!1;function _e(e,t){if(!e||ge)return``;ge=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ge=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?he(n):``}function ve(e,t){switch(e.tag){case 26:case 27:case 5:return he(e.type);case 16:return he(`Lazy`);case 13:return e.child!==t&&t!==null?he(`Suspense Fallback`):he(`Suspense`);case 19:return he(`SuspenseList`);case 0:case 15:return _e(e.type,!1);case 11:return _e(e.type.render,!1);case 1:return _e(e.type,!0);case 31:return he(`Activity`);default:return``}}function ye(e){try{var t=``,n=null;do t+=ve(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var be=Object.prototype.hasOwnProperty,z=t.unstable_scheduleCallback,xe=t.unstable_cancelCallback,Se=t.unstable_shouldYield,Ce=t.unstable_requestPaint,we=t.unstable_now,Te=t.unstable_getCurrentPriorityLevel,Ee=t.unstable_ImmediatePriority,De=t.unstable_UserBlockingPriority,Oe=t.unstable_NormalPriority,ke=t.unstable_LowPriority,Ae=t.unstable_IdlePriority,je=t.log,Me=t.unstable_setDisableYieldValue,B=null,Ne=null;function Pe(e){if(typeof je==`function`&&Me(e),Ne&&typeof Ne.setStrictMode==`function`)try{Ne.setStrictMode(B,e)}catch{}}var Fe=Math.clz32?Math.clz32:Re,Ie=Math.log,Le=Math.LN2;function Re(e){return e>>>=0,e===0?32:31-(Ie(e)/Le|0)|0}var ze=256,Be=262144,Ve=4194304;function He(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ue(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=He(n))):i=He(o):i=He(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=He(n))):i=He(o)):i=He(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function We(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ge(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ke(){var e=Ve;return Ve<<=1,!(Ve&62914560)&&(Ve=4194304),e}function qe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Je(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ye(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Fe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Xe(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Xe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Fe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Ze(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Qe(e,t){var n=t&-t;return n=n&42?1:$e(n),(n&(e.suspendedLanes|t))===0?n:0}function $e(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function et(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function tt(){var e=F.p;return e===0?(e=window.event,e===void 0?32:yp(e.type)):e}function nt(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var rt=Math.random().toString(36).slice(2),it=`__reactFiber$`+rt,at=`__reactProps$`+rt,ot=`__reactContainer$`+rt,st=`__reactEvents$`+rt,ct=`__reactListeners$`+rt,lt=`__reactHandles$`+rt,ut=`__reactResources$`+rt,dt=`__reactMarker$`+rt;function ft(e){delete e[it],delete e[at],delete e[st],delete e[ct],delete e[lt]}function pt(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gf(e);e!==null;){if(n=e[it])return n;e=gf(e)}return t}e=n,n=e.parentNode}return null}function mt(e){if(e=e[it]||e[ot]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ht(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function gt(e){var t=e[ut];return t||=e[ut]={hoistableStyles:new Map,hoistableScripts:new Map},t}function _t(e){e[dt]=!0}var vt=new Set,yt={};function bt(e,t){xt(e,t),xt(e+`Capture`,t)}function xt(e,t){for(yt[e]=t,e=0;e<t.length;e++)vt.add(t[e])}var St=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ct={},wt={};function Tt(e){return be.call(wt,e)?!0:be.call(Ct,e)?!1:St.test(e)?wt[e]=!0:(Ct[e]=!0,!1)}function Et(e,t,n){if(Tt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Dt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Ot(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function kt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function At(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function jt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mt(e){if(!e._valueTracker){var t=At(e)?`checked`:`value`;e._valueTracker=jt(e,t,``+e[t])}}function Nt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=At(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Pt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ft=/[\n"\\]/g;function V(e){return e.replace(Ft,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function It(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+kt(t)):e.value!==``+kt(t)&&(e.value=``+kt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Rt(e,o,kt(n)):Rt(e,o,kt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+kt(s):e.removeAttribute(`name`)}function Lt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Mt(e);return}n=n==null?``:``+kt(n),t=t==null?n:``+kt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Mt(e)}function Rt(e,t,n){t===`number`&&Pt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+kt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bt(e,t,n){if(t!=null&&(t=``+kt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+kt(n)}function Vt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(te(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=kt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Mt(e)}function Ht(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ut=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Wt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Ut.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Gt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Wt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Wt(e,o,t[o])}function Kt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var qt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Jt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yt(e){return Jt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Xt(){}var Zt=null;function Qt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $t=null,en=null;function tn(e){var t=mt(e);if(t&&(e=t.stateNode)){var n=e[at]||null;a:switch(e=t.stateNode,t.type){case`input`:if(It(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+V(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[at]||null;if(!a)throw Error(i(90));It(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Nt(r)}break a;case`textarea`:Bt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&zt(e,!!n.multiple,t,!1)}}}var nn=!1;function rn(e,t,n){if(nn)return e(t,n);nn=!0;try{return e(t)}finally{if(nn=!1,($t!==null||en!==null)&&(Cu(),$t&&(t=$t,e=en,en=$t=null,tn(t),e)))for(t=0;t<e.length;t++)tn(e[t])}}function an(e,t){var n=e.stateNode;if(n===null)return null;var r=n[at]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var on=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),sn=!1;if(on)try{var cn={};Object.defineProperty(cn,"passive",{get:function(){sn=!0}}),window.addEventListener(`test`,cn,cn),window.removeEventListener(`test`,cn,cn)}catch{sn=!1}var ln=null,un=null,dn=null;function fn(){if(dn)return dn;var e,t=un,n=t.length,r,i=`value`in ln?ln.value:ln.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return dn=i.slice(e,1<r?1-r:void 0)}function H(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pn(){return!0}function mn(){return!1}function hn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?pn:mn,this.isPropagationStopped=mn,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=pn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=pn)},persist:function(){},isPersistent:pn}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_n=hn(gn),vn=f({},gn,{view:0,detail:0}),yn=hn(vn),bn,xn,Sn,Cn=f({},vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Sn&&(Sn&&e.type===`mousemove`?(bn=e.screenX-Sn.screenX,xn=e.screenY-Sn.screenY):xn=bn=0,Sn=e),bn)},movementY:function(e){return`movementY`in e?e.movementY:xn}}),wn=hn(Cn),Tn=hn(f({},Cn,{dataTransfer:0})),En=hn(f({},vn,{relatedTarget:0})),Dn=hn(f({},gn,{animationName:0,elapsedTime:0,pseudoElement:0})),On=hn(f({},gn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),kn=hn(f({},gn,{data:0})),An={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},jn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Mn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Nn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mn[e])?!!t[e]:!1}function Pn(){return Nn}var Fn=hn(f({},vn,{key:function(e){if(e.key){var t=An[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=H(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?jn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pn,charCode:function(e){return e.type===`keypress`?H(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?H(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),In=hn(f({},Cn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Ln=hn(f({},vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pn})),Rn=hn(f({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0})),zn=hn(f({},Cn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Bn=hn(f({},gn,{newState:0,oldState:0})),Vn=[9,13,27,32],Hn=on&&`CompositionEvent`in window,Un=null;on&&`documentMode`in document&&(Un=document.documentMode);var Wn=on&&`TextEvent`in window&&!Un,Gn=on&&(!Hn||Un&&8<Un&&11>=Un),Kn=` `,qn=!1;function Jn(e,t){switch(e){case`keyup`:return Vn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Yn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Xn=!1;function Zn(e,t){switch(e){case`compositionend`:return Yn(t);case`keypress`:return t.which===32?(qn=!0,Kn):null;case`textInput`:return e=t.data,e===Kn&&qn?null:e;default:return null}}function Qn(e,t){if(Xn)return e===`compositionend`||!Hn&&Jn(e,t)?(e=fn(),dn=un=ln=null,Xn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Gn&&t.locale!==`ko`?null:t.data;default:return null}}var $n={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!$n[e.type]:t===`textarea`}function tr(e,t,n,r){$t?en?en.push(r):en=[r]:$t=r,t=Ad(t,`onChange`),0<t.length&&(n=new _n(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var nr=null,rr=null;function ir(e){Cd(e,0)}function ar(e){if(Nt(ht(e)))return e}function or(e,t){if(e===`change`)return t}var sr=!1;if(on){var cr;if(on){var lr=`oninput`in document;if(!lr){var ur=document.createElement(`div`);ur.setAttribute(`oninput`,`return;`),lr=typeof ur.oninput==`function`}cr=lr}else cr=!1;sr=cr&&(!document.documentMode||9<document.documentMode)}function dr(){nr&&(nr.detachEvent(`onpropertychange`,fr),rr=nr=null)}function fr(e){if(e.propertyName===`value`&&ar(rr)){var t=[];tr(t,rr,e,Qt(e)),rn(ir,t)}}function pr(e,t,n){e===`focusin`?(dr(),nr=t,rr=n,nr.attachEvent(`onpropertychange`,fr)):e===`focusout`&&dr()}function mr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return ar(rr)}function hr(e,t){if(e===`click`)return ar(t)}function gr(e,t){if(e===`input`||e===`change`)return ar(t)}function _r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var vr=typeof Object.is==`function`?Object.is:_r;function yr(e,t){if(vr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!be.call(t,i)||!vr(e[i],t[i]))return!1}return!0}function br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xr(e,t){var n=br(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=br(n)}}function Sr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Pt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pt(e.document)}return t}function wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Tr=on&&`documentMode`in document&&11>=document.documentMode,Er=null,Dr=null,Or=null,kr=!1;function Ar(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kr||Er==null||Er!==Pt(r)||(r=Er,`selectionStart`in r&&wr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Or&&yr(Or,r)||(Or=r,r=Ad(Dr,`onSelect`),0<r.length&&(t=new _n(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Er)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Mr={animationend:jr(`Animation`,`AnimationEnd`),animationiteration:jr(`Animation`,`AnimationIteration`),animationstart:jr(`Animation`,`AnimationStart`),transitionrun:jr(`Transition`,`TransitionRun`),transitionstart:jr(`Transition`,`TransitionStart`),transitioncancel:jr(`Transition`,`TransitionCancel`),transitionend:jr(`Transition`,`TransitionEnd`)},Nr={},Pr={};on&&(Pr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),`TransitionEvent`in window||delete Mr.transitionend.transition);function Fr(e){if(Nr[e])return Nr[e];if(!Mr[e])return e;var t=Mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pr)return Nr[e]=t[n];return e}var Ir=Fr(`animationend`),Lr=Fr(`animationiteration`),Rr=Fr(`animationstart`),zr=Fr(`transitionrun`),Br=Fr(`transitionstart`),Vr=Fr(`transitioncancel`),Hr=Fr(`transitionend`),Ur=new Map,Wr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Wr.push(`scrollEnd`);function Gr(e,t){Ur.set(e,t),bt(t,[e])}var Kr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},qr=[],Jr=0,Yr=0;function Xr(){for(var e=Jr,t=Yr=Jr=0;t<e;){var n=qr[t];qr[t++]=null;var r=qr[t];qr[t++]=null;var i=qr[t];qr[t++]=null;var a=qr[t];if(qr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ei(n,i,a)}}function Zr(e,t,n,r){qr[Jr++]=e,qr[Jr++]=t,qr[Jr++]=n,qr[Jr++]=r,Yr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Qr(e,t,n,r){return Zr(e,t,n,r),ti(e)}function $r(e,t){return Zr(e,null,null,t),ti(e)}function ei(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Fe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ti(e){if(50<mu)throw mu=0,hu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ni={};function ri(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,t,n,r){return new ri(e,t,n,r)}function ai(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oi(e,t){var n=e.alternate;return n===null?(n=ii(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function si(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ci(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ai(e)&&(s=1);else if(typeof e==`string`)s=Jf(e,n,se.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case k:return e=ii(31,n,t,a),e.elementType=k,e.lanes=o,e;case y:return li(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ii(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=ii(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=ii(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ii(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function li(e,t,n,r){return e=ii(7,e,r,t),e.lanes=n,e}function ui(e,t,n){return e=ii(6,e,null,t),e.lanes=n,e}function di(e){var t=ii(18,null,null,0);return t.stateNode=e,t}function fi(e,t,n){return t=ii(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pi=new WeakMap;function mi(e,t){if(typeof e==`object`&&e){var n=pi.get(e);return n===void 0?(t={value:e,source:t,stack:ye(t)},pi.set(e,t),t):n}return{value:e,source:t,stack:ye(t)}}var hi=[],gi=0,_i=null,vi=0,yi=[],bi=0,xi=null,Si=1,Ci=``;function wi(e,t){hi[gi++]=vi,hi[gi++]=_i,_i=e,vi=t}function Ti(e,t,n){yi[bi++]=Si,yi[bi++]=Ci,yi[bi++]=xi,xi=e;var r=Si;e=Ci;var i=32-Fe(r)-1;r&=~(1<<i),n+=1;var a=32-Fe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Si=1<<32-Fe(t)+i|n<<i|r,Ci=a+e}else Si=1<<a|n<<i|r,Ci=e}function Ei(e){e.return!==null&&(wi(e,1),Ti(e,1,0))}function Di(e){for(;e===_i;)_i=hi[--gi],hi[gi]=null,vi=hi[--gi],hi[gi]=null;for(;e===xi;)xi=yi[--bi],yi[bi]=null,Ci=yi[--bi],yi[bi]=null,Si=yi[--bi],yi[bi]=null}function Oi(e,t){yi[bi++]=Si,yi[bi++]=Ci,yi[bi++]=xi,Si=t.id,Ci=t.overflow,xi=e}var ki=null,Ai=null,U=!1,ji=null,Mi=!1,Ni=Error(i(519));function Pi(e){throw Bi(mi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ni}function Fi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[it]=e,t[at]=r,n){case`dialog`:J(`cancel`,t),J(`close`,t);break;case`iframe`:case`object`:case`embed`:J(`load`,t);break;case`video`:case`audio`:for(n=0;n<xd.length;n++)J(xd[n],t);break;case`source`:J(`error`,t);break;case`img`:case`image`:case`link`:J(`error`,t),J(`load`,t);break;case`details`:J(`toggle`,t);break;case`input`:J(`invalid`,t),Lt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:J(`invalid`,t);break;case`textarea`:J(`invalid`,t),Vt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Id(t.textContent,n)?(r.popover!=null&&(J(`beforetoggle`,t),J(`toggle`,t)),r.onScroll!=null&&J(`scroll`,t),r.onScrollEnd!=null&&J(`scrollend`,t),r.onClick!=null&&(t.onclick=Xt),t=!0):t=!1,t||Pi(e,!0)}function Ii(e){for(ki=e.return;ki;)switch(ki.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:ki=ki.return}}function Li(e){if(e!==ki)return!1;if(!U)return Ii(e),U=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Jd(e.type,e.memoizedProps)),n=!n),n&&Ai&&Pi(e),Ii(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ai=hf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ai=hf(e)}else t===27?(t=Ai,nf(e.type)?(e=mf,mf=null,Ai=e):Ai=t):Ai=ki?pf(e.stateNode.nextSibling):null;return!0}function Ri(){Ai=ki=null,U=!1}function zi(){var e=ji;return e!==null&&(eu===null?eu=e:eu.push.apply(eu,e),ji=null),e}function Bi(e){ji===null?ji=[e]:ji.push(e)}var Vi=ae(null),Hi=null,Ui=null;function Wi(e,t,n){I(Vi,t._currentValue),t._currentValue=n}function Gi(e){e._currentValue=Vi.current,oe(Vi)}function Ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ki(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ki(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ji(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;vr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===le.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[rp]:e.push(rp))}a=a.return}e!==null&&qi(t,e,n,r),t.flags|=262144}function Yi(e){for(e=e.firstContext;e!==null;){if(!vr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xi(e){Hi=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zi(e){return $i(Hi,e)}function Qi(e,t){return Hi===null&&Xi(e),$i(e,t)}function $i(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ui===null){if(e===null)throw Error(i(308));Ui=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ui=Ui.next=t;return n}var ea=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ta=t.unstable_scheduleCallback,na=t.unstable_NormalPriority,ra={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ia(){return{controller:new ea,data:new Map,refCount:0}}function aa(e){e.refCount--,e.refCount===0&&ta(na,function(){e.controller.abort()})}var oa=null,sa=0,ca=0,la=null;function ua(e,t){if(oa===null){var n=oa=[];sa=0,ca=hd(),la={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return sa++,t.then(da,da),t}function da(){if(--sa===0&&oa!==null){la!==null&&(la.status=`fulfilled`);var e=oa;oa=null,ca=0,la=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function fa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var pa=P.S;P.S=function(e,t){ru=we(),typeof t==`object`&&t&&typeof t.then==`function`&&ua(e,t),pa!==null&&pa(e,t)};var ma=ae(null);function ha(){var e=ma.current;return e===null?Bl.pooledCache:e}function ga(e,t){t===null?I(ma,ma.current):I(ma,t.pool)}function _a(){var e=ha();return e===null?null:{parent:ra._currentValue,pool:e}}var va=Error(i(460)),ya=Error(i(474)),ba=Error(i(542)),xa={then:function(){}};function Sa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ca(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Xt,Xt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e;default:if(typeof t.status==`string`)t.then(Xt,Xt);else{if(e=Bl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e}throw Ta=t,va}}function wa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ta=e,va):e}}var Ta=null;function Ea(){if(Ta===null)throw Error(i(459));var e=Ta;return Ta=null,e}function Da(e){if(e===va||e===ba)throw Error(i(483))}var Oa=null,ka=0;function Aa(e){var t=ka;return ka+=1,Oa===null&&(Oa=[]),Ca(Oa,e,t)}function ja(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ma(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Na(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=oi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ui(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&wa(i)===t.type)?(t=a(t,n.props),ja(t,n),t.return=e,t):(t=ci(n.type,n.key,n.props,null,e.mode,r),ja(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=fi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=li(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ui(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case g:return n=ci(t.type,t.key,t.props,null,e.mode,n),ja(n,t),n.return=e,n;case v:return t=fi(t,e.mode,n),t.return=e,t;case O:return t=wa(t),f(e,t,n)}if(te(t)||M(t))return t=li(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Aa(t),n);if(t.$$typeof===C)return f(e,Qi(e,t),n);Ma(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case g:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=wa(n),p(e,t,n,r)}if(te(n)||M(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Aa(n),r);if(n.$$typeof===C)return p(e,t,Qi(e,n),r);Ma(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case g:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=wa(r),m(e,t,n,r,i)}if(te(r)||M(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Aa(r),i);if(r.$$typeof===C)return m(e,t,n,Qi(t,r),i);Ma(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),U&&wi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return U&&wi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),U&&wi(i,h),l}function _(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),U&&wi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return U&&wi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),U&&wi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case g:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&wa(l)===r.type){n(e,r.sibling),c=a(r,o.props),ja(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=li(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ci(o.type,o.key,o.props,null,e.mode,c),ja(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=fi(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=wa(o),b(e,r,o,c)}if(te(o))return h(e,r,o,c);if(M(o)){if(l=M(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),_(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Aa(o),c);if(o.$$typeof===C)return b(e,r,Qi(e,o),c);Ma(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ui(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ka=0;var i=b(e,t,n,r);return Oa=null,i}catch(t){if(t===va||t===ba)throw t;var a=ii(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Pa=Na(!0),Fa=Na(!1),Ia=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,zl&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ti(e),ei(e,null,n),t}return Zr(e,r,t,n),ti(e)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ze(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ua=!1;function Wa(){if(Ua){var e=la;if(e!==null)throw e}}function Ga(e,t,n,r){Ua=!1;var i=e.updateQueue;Ia=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(q&p)===p:(r&p)===p){p!==0&&p===ca&&(Ua=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:Ia=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Jl|=o,e.lanes=o,e.memoizedState=d}}function Ka(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ka(n[e],t)}var Ja=ae(null),Ya=ae(0);function Xa(e,t){e=Kl,I(Ya,e),I(Ja,t),Kl=e|t.baseLanes}function Za(){I(Ya,Kl),I(Ja,Ja.current)}function Qa(){Kl=Ya.current,oe(Ja),oe(Ya)}var $a=ae(null),eo=null;function to(e){var t=e.alternate;I(oo,oo.current&1),I($a,e),eo===null&&(t===null||Ja.current!==null||t.memoizedState!==null)&&(eo=e)}function no(e){I(oo,oo.current),I($a,e),eo===null&&(eo=e)}function ro(e){e.tag===22?(I(oo,oo.current),I($a,e),eo===null&&(eo=e)):io(e)}function io(){I(oo,oo.current),I($a,$a.current)}function ao(e){oe($a),eo===e&&(eo=null),oe(oo)}var oo=ae(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||uf(n)||df(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var co=0,W=null,lo=null,uo=null,fo=!1,po=!1,mo=!1,ho=0,go=0,_o=null,vo=0;function yo(){throw Error(i(321))}function bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vr(e[n],t[n]))return!1;return!0}function xo(e,t,n,r,i,a){return co=a,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?Rs:zs,mo=!1,a=n(r,i),mo=!1,po&&(a=Co(t,n,r,i)),So(e),a}function So(e){P.H=Ls;var t=lo!==null&&lo.next!==null;if(co=0,uo=lo=W=null,fo=!1,go=0,_o=null,t)throw Error(i(300));e===null||nc||(e=e.dependencies,e!==null&&Yi(e)&&(nc=!0))}function Co(e,t,n,r){W=e;var a=0;do{if(po&&(_o=null),go=0,po=!1,25<=a)throw Error(i(301));if(a+=1,uo=lo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}P.H=Bs,o=t(n,r)}while(po);return o}function wo(){var e=P.H,t=e.useState()[0];return t=typeof t.then==`function`?jo(t):t,e=e.useState()[0],(lo===null?null:lo.memoizedState)!==e&&(W.flags|=1024),t}function To(){var e=ho!==0;return ho=0,e}function Eo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Do(e){if(fo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fo=!1}co=0,uo=lo=W=null,po=!1,go=ho=0,_o=null}function Oo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return uo===null?W.memoizedState=uo=e:uo=uo.next=e,uo}function ko(){if(lo===null){var e=W.alternate;e=e===null?null:e.memoizedState}else e=lo.next;var t=uo===null?W.memoizedState:uo.next;if(t!==null)uo=t,lo=e;else{if(e===null)throw W.alternate===null?Error(i(467)):Error(i(310));lo=e,e={memoizedState:lo.memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},uo===null?W.memoizedState=uo=e:uo=uo.next=e}return uo}function Ao(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(e){var t=go;return go+=1,_o===null&&(_o=[]),e=Ca(_o,e,t),t=W,(uo===null?t.memoizedState:uo.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?Rs:zs),e}function Mo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return jo(e);if(e.$$typeof===C)return Zi(e)}throw Error(i(438,String(e)))}function No(e){var t=null,n=W.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=W.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Ao(),W.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}function Po(e,t){return typeof t==`function`?t(e):t}function Fo(e){return Io(ko(),lo,e)}function Io(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(co&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ca&&(d=!0);else if((co&p)===p){u=u.next,p===ca&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,W.lanes|=p,Jl|=p;f=u.action,mo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,W.lanes|=f,Jl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!vr(o,e.memoizedState)&&(nc=!0,d&&(n=la,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Lo(e){var t=ko(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);vr(o,t.memoizedState)||(nc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ro(e,t,n){var r=W,a=ko(),o=U;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!vr((lo||a).memoizedState,n);if(s&&(a.memoizedState=n,nc=!0),a=a.queue,ls(Vo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||uo!==null&&uo.memoizedState.tag&1){if(r.flags|=2048,is(9,{destroy:void 0},Bo.bind(null,r,a,n,t),null),Bl===null)throw Error(i(349));o||co&127||zo(r,t,n)}return n}function zo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t=Ao(),W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bo(e,t,n,r){t.value=n,t.getSnapshot=r,Ho(t)&&Uo(e)}function Vo(e,t,n){return n(function(){Ho(t)&&Uo(e)})}function Ho(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vr(e,n)}catch{return!0}}function Uo(e){var t=$r(e,2);t!==null&&vu(t,e,2)}function Wo(e){var t=Oo();if(typeof e==`function`){var n=e;if(e=n(),mo){Pe(!0);try{n()}finally{Pe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:e},t}function Go(e,t,n,r){return e.baseState=n,Io(e,lo,typeof r==`function`?r:Po)}function Ko(e,t,n,r,a){if(Ps(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};P.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=P.T,o={};P.T=o;try{var s=n(i,r),c=P.S;c!==null&&c(o,s),Jo(e,t,s)}catch(n){Xo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),P.T=a}}else try{a=n(i,r),Jo(e,t,a)}catch(n){Xo(e,t,n)}}function Jo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Yo(e,t,n)},function(n){return Xo(e,t,n)}):Yo(e,t,n)}function Yo(e,t,n){t.status=`fulfilled`,t.value=n,Zo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,qo(e,n)))}function Xo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Zo(t),t=t.next;while(t!==r)}e.action=null}function Zo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qo(e,t){return t}function $o(e,t){if(U){var n=Bl.formState;if(n!==null){a:{var r=W;if(U){if(Ai){b:{for(var i=Ai,a=Mi;i.nodeType!==8;){if(!a){i=null;break b}if(i=pf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ai=pf(i.nextSibling),r=i.data===`F!`;break a}}Pi(r)}r=!1}r&&(t=n[0])}}return n=Oo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},n.queue=r,n=js.bind(null,W,r),r.dispatch=n,r=Wo(!1),a=Ns.bind(null,W,!1,r.queue),r=Oo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ko.bind(null,W,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function es(e){return ts(ko(),lo,e)}function ts(e,t,n){if(t=Io(e,t,Qo)[0],e=Fo(Po)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=jo(t)}catch(e){throw e===va?ba:e}else r=t;t=ko();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(W.flags|=2048,is(9,{destroy:void 0},ns.bind(null,i,n),null)),[r,a,e]}function ns(e,t){e.action=t}function rs(e){var t=ko(),n=lo;if(n!==null)return ts(t,n,e);ko(),t=t.memoizedState,n=ko();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function is(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=W.updateQueue,t===null&&(t=Ao(),W.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function as(){return ko().memoizedState}function os(e,t,n,r){var i=Oo();W.flags|=e,i.memoizedState=is(1|t,{destroy:void 0},n,r===void 0?null:r)}function ss(e,t,n,r){var i=ko();r=r===void 0?null:r;var a=i.memoizedState.inst;lo!==null&&r!==null&&bo(r,lo.memoizedState.deps)?i.memoizedState=is(t,a,n,r):(W.flags|=e,i.memoizedState=is(1|t,a,n,r))}function cs(e,t){os(8390656,8,e,t)}function ls(e,t){ss(2048,8,e,t)}function us(e){W.flags|=4;var t=W.updateQueue;if(t===null)t=Ao(),W.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ds(e){var t=ko().memoizedState;return us({ref:t,nextImpl:e}),function(){if(zl&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function fs(e,t){return ss(4,2,e,t)}function ps(e,t){return ss(4,4,e,t)}function ms(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hs(e,t,n){n=n==null?null:n.concat([e]),ss(4,4,ms.bind(null,t,e),n)}function gs(){}function _s(e,t){var n=ko();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&bo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vs(e,t){var n=ko();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&bo(t,r[1]))return r[0];if(r=e(),mo){Pe(!0);try{e()}finally{Pe(!1)}}return n.memoizedState=[r,t],r}function ys(e,t,n){return n===void 0||co&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=_u(),W.lanes|=e,Jl|=e,n)}function bs(e,t,n,r){return vr(n,t)?n:Ja.current===null?!(co&42)||co&1073741824&&!(q&261930)?(nc=!0,e.memoizedState=n):(e=_u(),W.lanes|=e,Jl|=e,t):(e=ys(e,n,r),vr(e,t)||(nc=!0),e)}function xs(e,t,n,r,i){var a=F.p;F.p=a!==0&&8>a?a:8;var o=P.T,s={};P.T=s,Ns(e,!1,t,n);try{var c=i(),l=P.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ms(e,t,fa(c,r),gu(e)):Ms(e,t,r,gu(e))}catch(n){Ms(e,t,{then:function(){},status:`rejected`,reason:n},gu())}finally{F.p=a,o!==null&&s.types!==null&&(o.types=s.types),P.T=o}}function Ss(){}function Cs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ws(e).queue;xs(e,a,t,ne,n===null?Ss:function(){return Ts(e),n(r)})}function ws(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ts(e){var t=ws(e);t.next===null&&(t=e.alternate.memoizedState),Ms(e,t.next.queue,{},gu())}function Es(){return Zi(rp)}function Ds(){return ko().memoizedState}function Os(){return ko().memoizedState}function ks(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=gu();e=za(n);var r=Ba(t,e,n);r!==null&&(vu(r,t,n),Va(r,t,n)),t={cache:ia()},e.payload=t;return}t=t.return}}function As(e,t,n){var r=gu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ps(e)?Fs(t,n):(n=Qr(e,t,n,r),n!==null&&(vu(n,e,r),Is(n,t,r)))}function js(e,t,n){Ms(e,t,n,gu())}function Ms(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Fs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,vr(s,o))return Zr(e,t,i,0),Bl===null&&Xr(),!1}catch{}if(n=Qr(e,t,i,r),n!==null)return vu(n,e,r),Is(n,t,r),!0}return!1}function Ns(e,t,n,r){if(r={lane:2,revertLane:hd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ps(e)){if(t)throw Error(i(479))}else t=Qr(e,n,r,2),t!==null&&vu(t,e,2)}function Ps(e){var t=e.alternate;return e===W||t!==null&&t===W}function Fs(e,t){po=fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Is(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ze(e,n)}}var Ls={readContext:Zi,use:Mo,useCallback:yo,useContext:yo,useEffect:yo,useImperativeHandle:yo,useLayoutEffect:yo,useInsertionEffect:yo,useMemo:yo,useReducer:yo,useRef:yo,useState:yo,useDebugValue:yo,useDeferredValue:yo,useTransition:yo,useSyncExternalStore:yo,useId:yo,useHostTransitionStatus:yo,useFormState:yo,useActionState:yo,useOptimistic:yo,useMemoCache:yo,useCacheRefresh:yo};Ls.useEffectEvent=yo;var Rs={readContext:Zi,use:Mo,useCallback:function(e,t){return Oo().memoizedState=[e,t===void 0?null:t],e},useContext:Zi,useEffect:cs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),os(4194308,4,ms.bind(null,t,e),n)},useLayoutEffect:function(e,t){return os(4194308,4,e,t)},useInsertionEffect:function(e,t){os(4,2,e,t)},useMemo:function(e,t){var n=Oo();t=t===void 0?null:t;var r=e();if(mo){Pe(!0);try{e()}finally{Pe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Oo();if(n!==void 0){var i=n(t);if(mo){Pe(!0);try{n(t)}finally{Pe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=As.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Oo();return e={current:e},t.memoizedState=e},useState:function(e){e=Wo(e);var t=e.queue,n=js.bind(null,W,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:gs,useDeferredValue:function(e,t){return ys(Oo(),e,t)},useTransition:function(){var e=Wo(!1);return e=xs.bind(null,W,e.queue,!0,!1),Oo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=W,a=Oo();if(U){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Bl===null)throw Error(i(349));q&127||zo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,cs(Vo.bind(null,r,o,e),[e]),r.flags|=2048,is(9,{destroy:void 0},Bo.bind(null,r,o,n,t),null),n},useId:function(){var e=Oo(),t=Bl.identifierPrefix;if(U){var n=Ci,r=Si;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ho++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=vo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Es,useFormState:$o,useActionState:$o,useOptimistic:function(e){var t=Oo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ns.bind(null,W,!0,n),n.dispatch=t,[e,t]},useMemoCache:No,useCacheRefresh:function(){return Oo().memoizedState=ks.bind(null,W)},useEffectEvent:function(e){var t=Oo(),n={impl:e};return t.memoizedState=n,function(){if(zl&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},zs={readContext:Zi,use:Mo,useCallback:_s,useContext:Zi,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Fo,useRef:as,useState:function(){return Fo(Po)},useDebugValue:gs,useDeferredValue:function(e,t){return bs(ko(),lo.memoizedState,e,t)},useTransition:function(){var e=Fo(Po)[0],t=ko().memoizedState;return[typeof e==`boolean`?e:jo(e),t]},useSyncExternalStore:Ro,useId:Ds,useHostTransitionStatus:Es,useFormState:es,useActionState:es,useOptimistic:function(e,t){return Go(ko(),lo,e,t)},useMemoCache:No,useCacheRefresh:Os};zs.useEffectEvent=ds;var Bs={readContext:Zi,use:Mo,useCallback:_s,useContext:Zi,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Lo,useRef:as,useState:function(){return Lo(Po)},useDebugValue:gs,useDeferredValue:function(e,t){var n=ko();return lo===null?ys(n,e,t):bs(n,lo.memoizedState,e,t)},useTransition:function(){var e=Lo(Po)[0],t=ko().memoizedState;return[typeof e==`boolean`?e:jo(e),t]},useSyncExternalStore:Ro,useId:Ds,useHostTransitionStatus:Es,useFormState:rs,useActionState:rs,useOptimistic:function(e,t){var n=ko();return lo===null?(n.baseState=e,[e,n.queue.dispatch]):Go(n,lo,e,t)},useMemoCache:No,useCacheRefresh:Os};Bs.useEffectEvent=ds;function Vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gu(),i=za(r);i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(vu(t,e,r),Va(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gu(),i=za(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(vu(t,e,r),Va(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gu(),r=za(n);r.tag=2,t!=null&&(r.callback=t),t=Ba(e,r,n),t!==null&&(vu(t,e,n),Va(t,e,n))}};function Us(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(i,a):!0}function Ws(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hs.enqueueReplaceState(t,t.state,null)}function Gs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ks(e){Kr(e)}function qs(e){console.error(e)}function Js(e){Kr(e)}function Ys(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){return n=za(n),n.tag=3,n.payload={element:null},n.callback=function(){Ys(e,t)},n}function Qs(e){return e=za(e),e.tag=3,e}function $s(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Xs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Xs(t,n,r),typeof i!=`function`&&(ou===null?ou=new Set([this]):ou.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ec(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ji(t,n,a,!0),n=$a.current,n!==null){switch(n.tag){case 31:case 13:return eo===null?Au():n.alternate===null&&ql===0&&(ql=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Yu(e,r,a)),!1;case 22:return n.flags|=65536,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Yu(e,r,a)),!1}throw Error(i(435,n.tag))}return Yu(e,r,a),Au(),!1}if(U)return t=$a.current,t===null?(r!==Ni&&(t=Error(i(423),{cause:r}),Bi(mi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=mi(r,n),a=Zs(e.stateNode,r,a),Ha(e,a),ql!==4&&(ql=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ni&&(e=Error(i(422),{cause:r}),Bi(mi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=mi(o,n),$l===null?$l=[o]:$l.push(o),ql!==4&&(ql=2),t===null)return!0;r=mi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Zs(n.stateNode,r,e),Ha(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ou===null||!ou.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Qs(a),$s(a,e,n,r),Ha(n,a),!1}n=n.return}while(n!==null);return!1}var tc=Error(i(461)),nc=!1;function rc(e,t,n,r){t.child=e===null?Fa(t,null,n,r):Pa(t,e.child,n,r)}function ic(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Xi(t),r=xo(e,t,n,o,a,i),s=To(),e!==null&&!nc?(Eo(e,t,i),Oc(e,t,i)):(U&&s&&Ei(t),t.flags|=1,rc(e,t,r,i),t.child)}function ac(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ai(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,oc(e,t,a,r,i)):(e=ci(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!kc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?yr:n,n(o,r)&&e.ref===t.ref)return Oc(e,t,i)}return t.flags|=1,e=oi(a,r),e.ref=t.ref,e.return=t,t.child=e}function oc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(yr(a,r)&&e.ref===t.ref)if(nc=!1,t.pendingProps=r=a,kc(e,i))e.flags&131072&&(nc=!0);else return t.lanes=e.lanes,Oc(e,t,i)}return mc(e,t,n,r,i)}function sc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return lc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ga(t,a===null?null:a.cachePool),a===null?Za():Xa(t,a),ro(t);else return r=t.lanes=536870912,lc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ga(t,null),Za(),io(t)):(ga(t,a.cachePool),Xa(t,a),io(t),t.memoizedState=null);return rc(e,t,i,n),t.child}function cc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function lc(e,t,n,r,i){var a=ha();return a=a===null?null:{parent:ra._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ga(t,null),Za(),ro(t),e!==null&&Ji(e,t,r,!0),t.childLanes=i,null}function uc(e,t){return t=Cc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function dc(e,t,n){return Pa(t,e.child,null,n),e=uc(t,t.pendingProps),e.flags|=2,ao(t),t.memoizedState=null,e}function fc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(U){if(r.mode===`hidden`)return e=uc(t,r),t.lanes=536870912,cc(null,e);if(no(t),(e=Ai)?(e=lf(e,Mi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xi===null?null:{id:Si,overflow:Ci},retryLane:536870912,hydrationErrors:null},n=di(e),n.return=t,t.child=n,ki=t,Ai=null)):e=null,e===null)throw Pi(t);return t.lanes=536870912,null}return uc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(no(t),a)if(t.flags&256)t.flags&=-257,t=dc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(nc||Ji(e,t,n,!1),a=(n&e.childLanes)!==0,nc||a){if(r=Bl,r!==null&&(s=Qe(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,$r(e,s),vu(r,e,s),tc;Au(),t=dc(e,t,n)}else e=o.treeContext,Ai=pf(s.nextSibling),ki=t,U=!0,ji=null,Mi=!1,e!==null&&Oi(t,e),t=uc(t,r),t.flags|=4096;return t}return e=oi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function pc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function mc(e,t,n,r,i){return Xi(t),n=xo(e,t,n,r,void 0,i),r=To(),e!==null&&!nc?(Eo(e,t,i),Oc(e,t,i)):(U&&r&&Ei(t),t.flags|=1,rc(e,t,n,i),t.child)}function hc(e,t,n,r,i,a){return Xi(t),t.updateQueue=null,n=Co(t,r,n,i),So(e),r=To(),e!==null&&!nc?(Eo(e,t,a),Oc(e,t,a)):(U&&r&&Ei(t),t.flags|=1,rc(e,t,n,a),t.child)}function gc(e,t,n,r,i){if(Xi(t),t.stateNode===null){var a=ni,o=n.contextType;typeof o==`object`&&o&&(a=Zi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Hs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},La(t),o=n.contextType,a.context=typeof o==`object`&&o?Zi(o):ni,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Vs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Hs.enqueueReplaceState(a,a.state,null),Ga(t,r,a,i),Wa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Gs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ni,typeof u==`object`&&u&&(o=Zi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ws(t,a,r,o),Ia=!1;var f=t.memoizedState;a.state=f,Ga(t,r,a,i),Wa(),l=t.memoizedState,s||f!==l||Ia?(typeof d==`function`&&(Vs(t,n,d,r),l=t.memoizedState),(c=Ia||Us(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ra(e,t),o=t.memoizedProps,u=Gs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ni,typeof l==`object`&&l&&(c=Zi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ws(t,a,r,c),Ia=!1,f=t.memoizedState,a.state=f,Ga(t,r,a,i),Wa();var p=t.memoizedState;o!==d||f!==p||Ia||e!==null&&e.dependencies!==null&&Yi(e.dependencies)?(typeof s==`function`&&(Vs(t,n,s,r),p=t.memoizedState),(u=Ia||Us(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Yi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,pc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Pa(t,e.child,null,i),t.child=Pa(t,null,n,i)):rc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Oc(e,t,i),e}function _c(e,t,n,r){return Ri(),t.flags|=256,rc(e,t,n,r),t.child}var vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yc(e){return{baseLanes:e,cachePool:_a()}}function bc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Zl),e}function xc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(oo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(U){if(a?to(t):io(t),(e=Ai)?(e=lf(e,Mi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xi===null?null:{id:Si,overflow:Ci},retryLane:536870912,hydrationErrors:null},n=di(e),n.return=t,t.child=n,ki=t,Ai=null)):e=null,e===null)throw Pi(t);return df(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(io(t),a=t.mode,c=Cc({mode:`hidden`,children:c},a),r=li(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=yc(n),r.childLanes=bc(e,s,n),t.memoizedState=vc,cc(null,r)):(to(t),Sc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(to(t),t.flags&=-257,t=wc(e,t,n)):t.memoizedState===null?(io(t),c=r.fallback,a=t.mode,r=Cc({mode:`visible`,children:r.children},a),c=li(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Pa(t,e.child,null,n),r=t.child,r.memoizedState=yc(n),r.childLanes=bc(e,s,n),t.memoizedState=vc,t=cc(null,r)):(io(t),t.child=e.child,t.flags|=128,t=null);else if(to(t),df(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Bi({value:r,source:null,stack:null}),t=wc(e,t,n)}else if(nc||Ji(e,t,n,!1),s=(n&e.childLanes)!==0,nc||s){if(s=Bl,s!==null&&(r=Qe(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,$r(e,r),vu(s,e,r),tc;uf(c)||Au(),t=wc(e,t,n)}else uf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ai=pf(c.nextSibling),ki=t,U=!0,ji=null,Mi=!1,e!==null&&Oi(t,e),t=Sc(t,r.children),t.flags|=4096);return t}return a?(io(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=oi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=li(c,a,n,null),c.flags|=2):c=oi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,cc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=yc(n):(a=c.cachePool,a===null?a=_a():(l=ra._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=bc(e,s,n),t.memoizedState=vc,cc(e.child,r)):(to(t),n=e.child,e=n.sibling,n=oi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Sc(e,t){return t=Cc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Cc(e,t){return e=ii(22,e,null,t),e.lanes=0,e}function wc(e,t,n){return Pa(t,e.child,null,n),e=Sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ki(e.return,t,n)}function Ec(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Dc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=oo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,I(oo,o),rc(e,t,r,n),r=U?vi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tc(e,n,t);else if(e.tag===19)Tc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ec(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&so(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ec(t,!0,n,null,a,r);break;case`together`:Ec(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Oc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ji(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=oi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=oi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Yi(e))):!0}function Ac(e,t,n){switch(t.tag){case 3:ue(t,t.stateNode.containerInfo),Wi(t,ra,e.memoizedState.cache),Ri();break;case 27:case 5:R(t);break;case 4:ue(t,t.stateNode.containerInfo);break;case 10:Wi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,no(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(to(t),e=Oc(e,t,n),e===null?null:e.sibling):xc(e,t,n):(to(t),t.flags|=128,null);to(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Ji(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Dc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(oo,oo.current),r)break;return null;case 22:return t.lanes=0,sc(e,t,n,t.pendingProps);case 24:Wi(t,ra,e.memoizedState.cache)}return Oc(e,t,n)}function jc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)nc=!0;else{if(!kc(e,n)&&!(t.flags&128))return nc=!1,Ac(e,t,n);nc=!!(e.flags&131072)}else nc=!1,U&&t.flags&1048576&&Ti(t,vi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=wa(t.elementType),t.type=e,typeof e==`function`)ai(e)?(r=Gs(e,r),t.tag=1,t=gc(null,t,e,r,n)):(t.tag=0,t=mc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=ic(null,t,e,r,n);break a}else if(a===D){t.tag=14,t=ac(null,t,e,r,n);break a}}throw t=N(e)||e,Error(i(306,t,``))}}return t;case 0:return mc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Gs(r,t.pendingProps),gc(e,t,r,a,n);case 3:a:{if(ue(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ra(e,t),Ga(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Wi(t,ra,r),r!==o.cache&&qi(t,[ra],n,!0),Wa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=_c(e,t,r,n);break a}else if(r!==a){a=mi(Error(i(424)),t),Bi(a),t=_c(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ai=pf(e.firstChild),ki=t,U=!0,ji=null,Mi=!0,n=Fa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ri(),r===a){t=Oc(e,t,n);break a}rc(e,t,r,n)}t=t.child}return t;case 26:return pc(e,t),e===null?(n=Pf(t.type,null,t.pendingProps,null))?t.memoizedState=n:U||(n=t.type,e=t.pendingProps,r=Gd(L.current).createElement(n),r[it]=t,r[at]=e,zd(r,n,e),_t(r),t.stateNode=r):t.memoizedState=Pf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return R(t),e===null&&U&&(r=t.stateNode=_f(t.type,t.pendingProps,L.current),ki=t,Mi=!0,a=Ai,nf(t.type)?(mf=a,Ai=pf(r.firstChild)):Ai=a),rc(e,t,t.pendingProps.children,n),pc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&U&&((a=r=Ai)&&(r=sf(r,t.type,t.pendingProps,Mi),r===null?a=!1:(t.stateNode=r,ki=t,Ai=pf(r.firstChild),Mi=!1,a=!0)),a||Pi(t)),R(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Jd(a,o)?r=null:s!==null&&Jd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=xo(e,t,wo,null,null,n),rp._currentValue=a),pc(e,t),rc(e,t,r,n),t.child;case 6:return e===null&&U&&((e=n=Ai)&&(n=cf(n,t.pendingProps,Mi),n===null?e=!1:(t.stateNode=n,ki=t,Ai=null,e=!0)),e||Pi(t)),null;case 13:return xc(e,t,n);case 4:return ue(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pa(t,null,r,n):rc(e,t,r,n),t.child;case 11:return ic(e,t,t.type,t.pendingProps,n);case 7:return rc(e,t,t.pendingProps,n),t.child;case 8:return rc(e,t,t.pendingProps.children,n),t.child;case 12:return rc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Wi(t,t.type,r.value),rc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Xi(t),a=Zi(a),r=r(a),t.flags|=1,rc(e,t,r,n),t.child;case 14:return ac(e,t,t.type,t.pendingProps,n);case 15:return oc(e,t,t.type,t.pendingProps,n);case 19:return Dc(e,t,n);case 31:return fc(e,t,n);case 22:return sc(e,t,n,t.pendingProps);case 24:return Xi(t),r=Zi(ra),e===null?(a=ha(),a===null&&(a=Bl,o=ia(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},La(t),Wi(t,ra,a)):((e.lanes&n)!==0&&(Ra(e,t),Ga(t,null,null,n),Wa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Wi(t,ra,r),r!==a.cache&&qi(t,[ra],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Wi(t,ra,r))),rc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Mc(e){e.flags|=4}function Nc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Du())e.flags|=8192;else throw Ta=xa,ya}else e.flags&=-16777217}function Pc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Yf(t))if(Du())e.flags|=8192;else throw Ta=xa,ya}function Fc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ke(),e.lanes|=t,Ql|=t)}function Ic(e,t){if(!U)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Lc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rc(e,t,n){var r=t.pendingProps;switch(Di(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lc(t),null;case 1:return Lc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Gi(ra),de(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Li(t)?Mc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zi())),Lc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Mc(t),o===null?(Lc(t),Nc(t,a,null,r,n)):(Lc(t),Pc(t,o))):o?o===e.memoizedState?(Lc(t),t.flags&=-16777217):(Mc(t),Lc(t),Pc(t,o)):(e=e.memoizedProps,e!==r&&Mc(t),Lc(t),Nc(t,a,e,r,n)),null;case 27:if(fe(t),n=L.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Lc(t),null}e=se.current,Li(t)?Fi(t,e):(e=_f(a,r,n),t.stateNode=e,Mc(t))}return Lc(t),null;case 5:if(fe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Lc(t),null}if(o=se.current,Li(t))Fi(t,o);else{var s=Gd(L.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[it]=t,o[at]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(zd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Mc(t)}}return Lc(t),Nc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=L.current,Li(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ki,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Id(e.nodeValue,n)),e||Pi(t,!0)}else e=Gd(e).createTextNode(r),e[it]=t,t.stateNode=e}return Lc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Li(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[it]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Lc(t),e=!1}else n=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ao(t),t):(ao(t),null);if(t.flags&128)throw Error(i(558))}return Lc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[it]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Lc(t),a=!1}else a=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ao(t),t):(ao(t),null)}return ao(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Fc(t,t.updateQueue),Lc(t),null);case 4:return de(),e===null&&Ed(t.stateNode.containerInfo),Lc(t),null;case 10:return Gi(t.type),Lc(t),null;case 19:if(oe(oo),r=t.memoizedState,r===null)return Lc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Ic(r,!1);else{if(ql!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=so(e),o!==null){for(t.flags|=128,Ic(r,!1),e=o.updateQueue,t.updateQueue=e,Fc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)si(n,e),n=n.sibling;return I(oo,oo.current&1|2),U&&wi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&we()>iu&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304)}else{if(!a)if(e=so(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Fc(t,e),Ic(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!U)return Lc(t),null}else 2*we()-r.renderingStartTime>iu&&n!==536870912&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Lc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=we(),e.sibling=null,n=oo.current,I(oo,a?n&1|2:n&1),U&&wi(t,r.treeForkCount),e);case 22:case 23:return ao(t),Qa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Lc(t),t.subtreeFlags&6&&(t.flags|=8192)):Lc(t),n=t.updateQueue,n!==null&&Fc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&oe(ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Gi(ra),Lc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function zc(e,t){switch(Di(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gi(ra),de(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return fe(t),null;case 31:if(t.memoizedState!==null){if(ao(t),t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ao(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(oo),null;case 4:return de(),null;case 10:return Gi(t.type),null;case 22:case 23:return ao(t),Qa(),e!==null&&oe(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gi(ra),null;case 25:return null;default:return null}}function Bc(e,t){switch(Di(t),t.tag){case 3:Gi(ra),de();break;case 26:case 27:case 5:fe(t);break;case 4:de();break;case 31:t.memoizedState!==null&&ao(t);break;case 13:ao(t);break;case 19:oe(oo);break;case 10:Gi(t.type);break;case 22:case 23:ao(t),Qa(),e!==null&&oe(ma);break;case 24:Gi(ra)}}function Vc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Ju(t,t.return,e)}}function Hc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Ju(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Ju(t,t.return,e)}}function Uc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{qa(t,n)}catch(t){Ju(e,e.return,t)}}}function Wc(e,t,n){n.props=Gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Ju(e,t,n)}}function Gc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Ju(e,t,n)}}function Kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Ju(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Ju(e,t,n)}else n.current=null}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Ju(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Bd(r,e.type,n,t),r[at]=t}catch(t){Ju(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&nf(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&nf(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xt));else if(r!==4&&(r===27&&nf(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&nf(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);zd(t,r,n),t[it]=e,t[at]=n}catch(t){Ju(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,Ud=fp,e=Cr(e),wr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Wd={focusedElem:e,selectionRange:n},fp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Gs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Ju(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)of(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:of(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Vc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Ju(n,n.return,e)}else{var i=Gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Ju(n,n.return,e)}}r&64&&Uc(n),r&512&&Gc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{qa(e,t)}catch(e){Ju(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:xl(e,n),t===null&&r&4&&qc(n),r&512&&Gc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Qu.bind(null,n),ff(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),el=i,tl=a}break;case 30:break;default:xl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ft(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var cl=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ne&&typeof Ne.onCommitFiberUnmount==`function`)try{Ne.onCommitFiberUnmount(B,n)}catch{}switch(n.tag){case 26:tl||Kc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||Kc(n,t);var r=cl,i=ll;nf(n.type)&&(cl=n.stateNode,ll=!1),ul(e,t,n),vf(n.stateNode),cl=r,ll=i;break;case 5:tl||Kc(n,t);case 6:if(r=cl,i=ll,cl=null,ul(e,t,n),cl=r,ll=i,cl!==null)if(ll)try{(cl.nodeType===9?cl.body:cl.nodeName===`HTML`?cl.ownerDocument.body:cl).removeChild(n.stateNode)}catch(e){Ju(n,t,e)}else try{cl.removeChild(n.stateNode)}catch(e){Ju(n,t,e)}break;case 18:cl!==null&&(ll?(e=cl,rf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Rp(e)):rf(cl,n.stateNode));break;case 4:r=cl,i=ll,cl=n.stateNode.containerInfo,ll=!0,ul(e,t,n),cl=r,ll=i;break;case 0:case 11:case 14:case 15:Hc(2,n,t),tl||Hc(4,n,t),ul(e,t,n);break;case 1:tl||(Kc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Wc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ul(e,t,n),tl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Rp(e)}catch(e){Ju(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rp(e)}catch(e){Ju(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=$u.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(nf(c.type)){cl=c.stateNode,ll=!1;break a}break;case 5:cl=c.stateNode,ll=!1;break a;case 3:case 4:cl=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(cl===null)throw Error(i(160));dl(o,s,a),cl=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Hc(3,e,e.return),Vc(3,e),Hc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[dt]||o[it]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),zd(o,r,n),o[it]=e,_t(o),r=o;break a;case`link`:var s=Kf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),zd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Kf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),zd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[it]=e,_t(o),r=o}e.stateNode=r}else qf(a,e.type,e.stateNode);else e.stateNode=Vf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?qf(a,e.type,e.stateNode):Vf(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),e.flags&32){a=e.stateNode;try{Ht(a,``)}catch(t){Ju(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Jc(e,a,n===null?a:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Ju(e,e.return,t)}}break;case 3:if(Gf=null,a=_l,_l=xf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Rp(t.containerInfo)}catch(t){Ju(e,e.return,t)}nl&&(nl=!1,bl(e));break;case 4:r=_l,_l=xf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(nu=we()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||a,tl=d||l,gl(t,e),tl=d,el=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||el||tl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Ju(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Ju(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?af(m,!0):af(l.stateNode,!1)}catch(e){Ju(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Qc(e,Xc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Ht(o,``),n.flags&=-33),Qc(e,Xc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Zc(e,Xc(e),s);break;default:throw Error(i(161))}}catch(t){Ju(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hc(4,t,t.return),Sl(t);break;case 1:Kc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Wc(t,t.return,n),Sl(t);break;case 27:vf(t.stateNode);case 26:case 5:Kc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Vc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Ju(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ka(c[i],s)}catch(e){Ju(r,r.return,e)}}n&&o&64&&Uc(a),Gc(a,a.return);break;case 27:$c(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&qc(a),Gc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Gc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&aa(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Vc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Ju(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Vc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Xf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=xf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function G(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:G(e),e.flags&2048&&Hc(9,e,e.return);break;case 3:G(e);break;case 12:G(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):G(e);break;default:G(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Hc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:aa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Ll={getCacheForType:function(e){var t=Zi(ra),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Zi(ra).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,zl=0,Bl=null,K=null,q=0,Vl=0,Hl=null,Ul=!1,Wl=!1,Gl=!1,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=0,Ql=0,$l=null,eu=null,tu=!1,nu=0,ru=0,iu=1/0,au=null,ou=null,su=0,cu=null,lu=null,uu=0,du=0,fu=null,pu=null,mu=0,hu=null;function gu(){return zl&2&&q!==0?q&-q:P.T===null?tt():hd()}function _u(){if(Zl===0)if(!(q&536870912)||U){var e=Be;Be<<=1,!(Be&3932160)&&(Be=262144),Zl=e}else Zl=536870912;return e=$a.current,e!==null&&(e.flags|=32),Zl}function vu(e,t,n){(e===Bl&&(Vl===2||Vl===9)||e.cancelPendingCommit!==null)&&(Tu(e,0),Su(e,q,Zl,!1)),Je(e,n),(!(zl&2)||e!==Bl)&&(e===Bl&&(!(zl&2)&&(Yl|=n),ql===4&&Su(e,q,Zl,!1)),sd(e))}function yu(e,t,n){if(zl&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||We(e,t),a=r?Nu(e,t):ju(e,t,!0),o=r;do{if(a===0){Wl&&!r&&Su(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!xu(n)){a=ju(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=$l;var l=c.current.memoizedState.isDehydrated;if(l&&(Tu(c,s).flags|=256),s=ju(c,s,!1),s!==2){if(Gl&&!l){c.errorRecoveryDisabledLanes|=o,Yl|=o,a=4;break a}o=eu,eu=a,o!==null&&(eu===null?eu=o:eu.push.apply(eu,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Tu(e,0),Su(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Su(r,t,Zl,!Ul);break a;case 2:eu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=nu+300-we(),10<a)){if(Su(r,t,Zl,!Ul),Ue(r,0,!0)!==0)break a;uu=t,r.timeoutHandle=Zd(bu.bind(null,r,n,eu,au,tu,t,Zl,Yl,Ql,Ul,o,`Throttled`,-0,0),a);break a}bu(r,n,eu,au,tu,t,Zl,Yl,Ql,Ul,o,null,-0,0)}}break}while(1);sd(e)}function bu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xt},Ml(t,a,d);var m=(a&62914560)===a?nu-we():(a&4194048)===a?ru-we():0;if(m=Qf(d,m),m!==null){uu=a,e.cancelPendingCommit=m(Bu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Su(e,a,o,!l);return}}Bu(e,t,a,n,r,i,o,s,c)}function xu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!vr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Su(e,t,n,r){t&=~Xl,t&=~Yl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Fe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Xe(e,n,t)}function Cu(){return zl&6?!0:(cd(0,!1),!1)}function wu(){if(K!==null){if(Vl===0)var e=K.return;else e=K,Ui=Hi=null,Do(e),Oa=null,ka=0,e=K;for(;e!==null;)Bc(e.alternate,e),e=e.return;K=null}}function Tu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),uu=0,wu(),Bl=e,K=n=oi(e.current,null),q=t,Vl=0,Hl=null,Ul=!1,Wl=We(e,t),Gl=!1,Ql=Zl=Xl=Yl=Jl=ql=0,eu=$l=null,tu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Fe(r),a=1<<i;t|=e[i],r&=~a}return Kl=t,Xr(),n}function Eu(e,t){W=null,P.H=Ls,t===va||t===ba?(t=Ea(),Vl=3):t===ya?(t=Ea(),Vl=4):Vl=t===tc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Hl=t,K===null&&(ql=1,Ys(e,mi(t,e.current)))}function Du(){var e=$a.current;return e===null?!0:(q&4194048)===q?eo===null:(q&62914560)===q||q&536870912?e===eo:!1}function Ou(){var e=P.H;return P.H=Ls,e===null?Ls:e}function ku(){var e=P.A;return P.A=Ll,e}function Au(){ql=4,Ul||(q&4194048)!==q&&$a.current!==null||(Wl=!0),!(Jl&134217727)&&!(Yl&134217727)||Bl===null||Su(Bl,q,Zl,!1)}function ju(e,t,n){var r=zl;zl|=2;var i=Ou(),a=ku();(Bl!==e||q!==t)&&(au=null,Tu(e,t)),t=!1;var o=ql;a:do try{if(Vl!==0&&K!==null){var s=K,c=Hl;switch(Vl){case 8:wu(),o=6;break a;case 3:case 2:case 9:case 6:$a.current===null&&(t=!0);var l=Vl;if(Vl=0,Hl=null,Lu(e,s,c,l),n&&Wl){o=0;break a}break;default:l=Vl,Vl=0,Hl=null,Lu(e,s,c,l)}}Mu(),o=ql;break}catch(t){Eu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ui=Hi=null,zl=r,P.H=i,P.A=a,K===null&&(Bl=null,q=0,Xr()),o}function Mu(){for(;K!==null;)Fu(K)}function Nu(e,t){var n=zl;zl|=2;var r=Ou(),a=ku();Bl!==e||q!==t?(au=null,iu=we()+500,Tu(e,t)):Wl=We(e,t);a:do try{if(Vl!==0&&K!==null){t=K;var o=Hl;b:switch(Vl){case 1:Vl=0,Hl=null,Lu(e,t,o,1);break;case 2:case 9:if(Sa(o)){Vl=0,Hl=null,Iu(t);break}t=function(){Vl!==2&&Vl!==9||Bl!==e||(Vl=7),sd(e)},o.then(t,t);break a;case 3:Vl=7;break a;case 4:Vl=5;break a;case 7:Sa(o)?(Vl=0,Hl=null,Iu(t)):(Vl=0,Hl=null,Lu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Yf(s):c.stateNode.complete){Vl=0,Hl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Ru(u))}break b}}Vl=0,Hl=null,Lu(e,t,o,5);break;case 6:Vl=0,Hl=null,Lu(e,t,o,6);break;case 8:wu(),ql=6;break a;default:throw Error(i(462))}}Pu();break}catch(t){Eu(e,t)}while(1);return Ui=Hi=null,P.H=r,P.A=a,zl=n,K===null?(Bl=null,q=0,Xr(),ql):0}function Pu(){for(;K!==null&&!Se();)Fu(K)}function Fu(e){var t=jc(e.alternate,e,Kl);e.memoizedProps=e.pendingProps,t===null?Ru(e):K=t}function Iu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=hc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=hc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Do(t);default:Bc(n,t),t=K=si(t,Kl),t=jc(n,t,Kl)}e.memoizedProps=e.pendingProps,t===null?Ru(e):K=t}function Lu(e,t,n,r){Ui=Hi=null,Do(t),Oa=null,ka=0;var i=t.return;try{if(ec(e,i,t,n,q)){ql=1,Ys(e,mi(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;ql=1,Ys(e,mi(n,e.current)),K=null;return}t.flags&32768?(U||r===1?e=!0:Wl||q&536870912?e=!1:(Ul=e=!0,(r===2||r===9||r===3||r===6)&&(r=$a.current,r!==null&&r.tag===13&&(r.flags|=16384))),zu(t,e)):Ru(t)}function Ru(e){var t=e;do{if(t.flags&32768){zu(t,Ul);return}e=t.return;var n=Rc(t.alternate,t,Kl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);ql===0&&(ql=5)}function zu(e,t){do{var n=zc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);ql=6,K=null}function Bu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Gu();while(su!==0);if(zl&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Yr,Ye(e,n,o,s,c,l),e===Bl&&(K=Bl=null,q=0),lu=t,cu=e,uu=n,du=o,fu=a,pu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,ed(Oe,function(){return Ku(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=P.T,P.T=null,a=F.p,F.p=2,s=zl,zl|=4;try{al(e,t,n)}finally{zl=s,F.p=a,P.T=r}}su=1,Vu(),Hu(),Uu()}}function Vu(){if(su===1){su=0;var e=cu,t=lu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=zl;zl|=4;try{vl(t,e);var a=Wd,o=Cr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Sr(s.ownerDocument.documentElement,s)){if(c!==null&&wr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=xr(s,h),v=xr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}fp=!!Ud,Wd=Ud=null}finally{zl=i,F.p=r,P.T=n}}e.current=t,su=2}}function Hu(){if(su===2){su=0;var e=cu,t=lu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=zl;zl|=4;try{ol(e,t.alternate,t)}finally{zl=i,F.p=r,P.T=n}}su=3}}function Uu(){if(su===4||su===3){su=0,Ce();var e=cu,t=lu,n=uu,r=pu;t.subtreeFlags&10256||t.flags&10256?su=5:(su=0,lu=cu=null,Wu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ou=null),et(n),t=t.stateNode,Ne&&typeof Ne.onCommitFiberRoot==`function`)try{Ne.onCommitFiberRoot(B,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=P.T,i=F.p,F.p=2,P.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{P.T=t,F.p=i}}uu&3&&Gu(),sd(e),i=e.pendingLanes,n&261930&&i&42?e===hu?mu++:(mu=0,hu=e):mu=0,cd(0,!1)}}function Wu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,aa(t)))}function Gu(){return Vu(),Hu(),Uu(),Ku()}function Ku(){if(su!==5)return!1;var e=cu,t=du;du=0;var n=et(uu),r=P.T,a=F.p;try{F.p=32>n?32:n,P.T=null,n=fu,fu=null;var o=cu,s=uu;if(su=0,lu=cu=null,uu=0,zl&6)throw Error(i(331));var c=zl;if(zl|=4,Pl(o.current),Dl(o,o.current,s,n),zl=c,cd(0,!1),Ne&&typeof Ne.onPostCommitFiberRoot==`function`)try{Ne.onPostCommitFiberRoot(B,o)}catch{}return!0}finally{F.p=a,P.T=r,Wu(e,t)}}function qu(e,t,n){t=mi(n,t),t=Zs(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(Je(e,2),sd(e))}function Ju(e,t,n){if(e.tag===3)qu(e,e,n);else for(;t!==null;){if(t.tag===3){qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ou===null||!ou.has(r))){e=mi(n,e),n=Qs(2),r=Ba(t,n,2),r!==null&&($s(n,r,t,e),Je(r,2),sd(r));break}}t=t.return}}function Yu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Gl=!0,i.add(n),e=Xu.bind(null,e,t,n),t.then(e,e))}function Xu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Bl===e&&(q&n)===n&&(ql===4||ql===3&&(q&62914560)===q&&300>we()-nu?!(zl&2)&&Tu(e,0):Xl|=n,Ql===q&&(Ql=0)),sd(e)}function Zu(e,t){t===0&&(t=Ke()),e=$r(e,t),e!==null&&(Je(e,t),sd(e))}function Qu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zu(e,n)}function $u(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Zu(e,n)}function ed(e,t){return z(e,t)}var td=null,nd=null,rd=!1,id=!1,ad=!1,od=0;function sd(e){e!==nd&&e.next===null&&(nd===null?td=nd=e:nd=nd.next=e),id=!0,rd||(rd=!0,md())}function cd(e,t){if(!ad&&id){ad=!0;do for(var n=!1,r=td;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Fe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,pd(r,a))}else a=q,a=Ue(r,r===Bl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||We(r,a)||(n=!0,pd(r,a));r=r.next}while(n);ad=!1}}function ld(){ud()}function ud(){id=rd=!1;var e=0;od!==0&&Xd()&&(e=od);for(var t=we(),n=null,r=td;r!==null;){var i=r.next,a=dd(r,t);a===0?(r.next=null,n===null?td=i:n.next=i,i===null&&(nd=n)):(n=r,(e!==0||a&3)&&(id=!0)),r=i}su!==0&&su!==5||cd(e,!1),od!==0&&(od=0)}function dd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Fe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ge(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Bl,n=q,n=Ue(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Vl===2||Vl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&xe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||We(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&xe(r),et(n)){case 2:case 8:n=De;break;case 32:n=Oe;break;case 268435456:n=Ae;break;default:n=Oe}return r=fd.bind(null,e),n=z(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&xe(r),e.callbackPriority=2,e.callbackNode=null,2}function fd(e,t){if(su!==0&&su!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Gu()&&e.callbackNode!==n)return null;var r=q;return r=Ue(e,e===Bl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(yu(e,r,t),dd(e,we()),e.callbackNode!=null&&e.callbackNode===n?fd.bind(null,e):null)}function pd(e,t){if(Gu())return null;yu(e,t,!0)}function md(){ef(function(){zl&6?z(Ee,ld):ud()})}function hd(){if(od===0){var e=ca;e===0&&(e=ze,ze<<=1,!(ze&261888)&&(ze=256)),od=e}return od}function gd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Yt(``+e)}function _d(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function vd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=gd((i[at]||null).action),o=r.submitter;o&&(t=(t=o[at]||null)?gd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new _n(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(od!==0){var e=o?_d(i,o):new FormData(i);Cs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?_d(i,o):new FormData(i),Cs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var yd=0;yd<Wr.length;yd++){var bd=Wr[yd];Gr(bd.toLowerCase(),`on`+(bd[0].toUpperCase()+bd.slice(1)))}Gr(Ir,`onAnimationEnd`),Gr(Lr,`onAnimationIteration`),Gr(Rr,`onAnimationStart`),Gr(`dblclick`,`onDoubleClick`),Gr(`focusin`,`onFocus`),Gr(`focusout`,`onBlur`),Gr(zr,`onTransitionRun`),Gr(Br,`onTransitionStart`),Gr(Vr,`onTransitionCancel`),Gr(Hr,`onTransitionEnd`),xt(`onMouseEnter`,[`mouseout`,`mouseover`]),xt(`onMouseLeave`,[`mouseout`,`mouseover`]),xt(`onPointerEnter`,[`pointerout`,`pointerover`]),xt(`onPointerLeave`,[`pointerout`,`pointerover`]),bt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),bt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),bt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),bt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),bt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),bt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var xd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Sd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(xd));function Cd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Kr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Kr(e)}i.currentTarget=null,a=c}}}}function J(e,t){var n=t[st];n===void 0&&(n=t[st]=new Set);var r=e+`__bubble`;n.has(r)||(Dd(t,e,2,!1),n.add(r))}function wd(e,t,n){var r=0;t&&(r|=4),Dd(n,e,r,t)}var Td=`_reactListening`+Math.random().toString(36).slice(2);function Ed(e){if(!e[Td]){e[Td]=!0,vt.forEach(function(t){t!==`selectionchange`&&(Sd.has(t)||wd(t,!1,e),wd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Td]||(t[Td]=!0,wd(`selectionchange`,!1,t))}}function Dd(e,t,n,r){switch(yp(t)){case 2:var i=pp;break;case 8:i=mp;break;default:i=hp}n=i.bind(null,t,n,e),i=void 0,!sn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Od(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=pt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}rn(function(){var r=a,i=Qt(n),s=[];a:{var c=Ur.get(e);if(c!==void 0){var l=_n,u=e;switch(e){case`keypress`:if(H(n)===0)break a;case`keydown`:case`keyup`:l=Fn;break;case`focusin`:u=`focus`,l=En;break;case`focusout`:u=`blur`,l=En;break;case`beforeblur`:case`afterblur`:l=En;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Tn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Ln;break;case Ir:case Lr:case Rr:l=Dn;break;case Hr:l=Rn;break;case`scroll`:case`scrollend`:l=yn;break;case`wheel`:l=zn;break;case`copy`:case`cut`:case`paste`:l=On;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=In;break;case`toggle`:case`beforetoggle`:l=Bn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=an(m,p),g!=null&&d.push(kd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Zt&&(u=n.relatedTarget||n.fromElement)&&(pt(u)||u[ot]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?pt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=wn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=In,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:ht(l),h=u==null?c:ht(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,pt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=jd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Md(s,c,l,d,!1),u!==null&&f!==null&&Md(s,f,u,d,!0)}}a:{if(c=r?ht(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=or;else if(er(c))if(sr)v=gr;else{v=mr;var y=pr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Kt(r.elementType)&&(v=or):v=hr;if(v&&=v(e,r)){tr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Rt(c,`number`,c.value)}switch(y=r?ht(r):window,e){case`focusin`:(er(y)||y.contentEditable===`true`)&&(Er=y,Dr=r,Or=null);break;case`focusout`:Or=Dr=Er=null;break;case`mousedown`:kr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:kr=!1,Ar(s,n,i);break;case`selectionchange`:if(Tr)break;case`keydown`:case`keyup`:Ar(s,n,i)}var b;if(Hn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Xn?Jn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Gn&&n.locale!==`ko`&&(Xn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Xn&&(b=fn()):(ln=i,un=`value`in ln?ln.value:ln.textContent,Xn=!0)),y=Ad(r,x),0<y.length&&(x=new kn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Yn(n),b!==null&&(x.data=b)))),(b=Wn?Zn(e,n):Qn(e,n))&&(x=Ad(r,`onBeforeInput`),0<x.length&&(y=new kn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),vd(s,e,r,n,i)}Cd(s,t)})}function kd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ad(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=an(e,n),i!=null&&r.unshift(kd(e,i,a)),i=an(e,t),i!=null&&r.push(kd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function jd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Md(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=an(n,a),l!=null&&o.unshift(kd(n,l,c))):i||(l=an(n,a),l!=null&&o.push(kd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Nd=/\r\n?/g,Pd=/\u0000|\uFFFD/g;function Fd(e){return(typeof e==`string`?e:``+e).replace(Nd,`
`).replace(Pd,``)}function Id(e,t){return t=Fd(t),Fd(e)===t}function Ld(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Ht(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Ht(e,``+r);break;case`className`:Dt(e,`class`,r);break;case`tabIndex`:Dt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Dt(e,n,r);break;case`style`:Gt(e,r,o);break;case`data`:if(t!==`object`){Dt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Yt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Ld(e,t,`name`,a.name,a,null),Ld(e,t,`formEncType`,a.formEncType,a,null),Ld(e,t,`formMethod`,a.formMethod,a,null),Ld(e,t,`formTarget`,a.formTarget,a,null)):(Ld(e,t,`encType`,a.encType,a,null),Ld(e,t,`method`,a.method,a,null),Ld(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Yt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Xt);break;case`onScroll`:r!=null&&J(`scroll`,e);break;case`onScrollEnd`:r!=null&&J(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Yt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:J(`beforetoggle`,e),J(`toggle`,e),Et(e,`popover`,r);break;case`xlinkActuate`:Ot(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Ot(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Ot(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Ot(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Ot(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Ot(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Ot(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Ot(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Ot(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Et(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=qt.get(n)||n,Et(e,n,r))}}function Rd(e,t,n,r,a,o){switch(n){case`style`:Gt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Ht(e,r):(typeof r==`number`||typeof r==`bigint`)&&Ht(e,``+r);break;case`onScroll`:r!=null&&J(`scroll`,e);break;case`onScrollEnd`:r!=null&&J(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=Xt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!yt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[at]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Et(e,n,r)}}}function zd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:J(`error`,e),J(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Ld(e,t,o,s,n,null)}}a&&Ld(e,t,`srcSet`,n.srcSet,n,null),r&&Ld(e,t,`src`,n.src,n,null);return;case`input`:J(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Ld(e,t,r,d,n,null)}}Lt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in J(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Ld(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&zt(e,!!r,n,!0):zt(e,!!r,t,!1);return;case`textarea`:for(s in J(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Ld(e,t,s,c,n,null)}Vt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Ld(e,t,l,r,n,null)}return;case`dialog`:J(`beforetoggle`,e),J(`toggle`,e),J(`cancel`,e),J(`close`,e);break;case`iframe`:case`object`:J(`load`,e);break;case`video`:case`audio`:for(r=0;r<xd.length;r++)J(xd[r],e);break;case`image`:J(`error`,e),J(`load`,e);break;case`details`:J(`toggle`,e);break;case`embed`:case`source`:case`link`:J(`error`,e),J(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Ld(e,t,u,r,n,null)}return;default:if(Kt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Rd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Ld(e,t,c,r,n,null))}function Bd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Ld(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Ld(e,t,p,m,r,f)}}It(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Ld(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Ld(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?zt(e,!!n,n?[]:``,!1):zt(e,!!n,t,!0)):zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Ld(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Ld(e,t,s,a,r,o)}Bt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Ld(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Ld(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Ld(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Ld(e,t,u,p,r,m)}return;default:if(Kt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Rd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Rd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Ld(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Ld(e,t,f,p,r,m)}function Vd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Hd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Vd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Vd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Ud=null,Wd=null;function Gd(e){return e.nodeType===9?e:e.ownerDocument}function Kd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function qd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Jd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yd=null;function Xd(){var e=window.event;return e&&e.type===`popstate`?e===Yd?!1:(Yd=e,!0):(Yd=null,!1)}var Zd=typeof setTimeout==`function`?setTimeout:void 0,Qd=typeof clearTimeout==`function`?clearTimeout:void 0,$d=typeof Promise==`function`?Promise:void 0,ef=typeof queueMicrotask==`function`?queueMicrotask:$d===void 0?Zd:function(e){return $d.resolve(null).then(e).catch(tf)};function tf(e){setTimeout(function(){throw e})}function nf(e){return e===`head`}function rf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Rp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)vf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,vf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[dt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&vf(e.ownerDocument.body);n=i}while(n);Rp(t)}function af(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function of(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:of(n),ft(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function sf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[dt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=pf(e.nextSibling),e===null)break}return null}function cf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=pf(e.nextSibling),e===null))return null;return e}function lf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=pf(e.nextSibling),e===null))return null;return e}function uf(e){return e.data===`$?`||e.data===`$~`}function df(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function ff(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function pf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var mf=null;function hf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return pf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function gf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function _f(e,t,n){switch(t=Gd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function vf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ft(e)}var yf=new Map,bf=new Set;function xf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sf=F.d;F.d={f:Cf,r:wf,D:Df,C:Of,L:kf,m:Af,X:Mf,S:jf,M:Nf};function Cf(){var e=Sf.f(),t=Cu();return e||t}function wf(e){var t=mt(e);t!==null&&t.tag===5&&t.type===`form`?Ts(t):Sf.r(e)}var Tf=typeof document>`u`?null:document;function Ef(e,t,n){var r=Tf;if(r&&typeof t==`string`&&t){var i=V(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),bf.has(i)||(bf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),zd(t,`link`,e),_t(t),r.head.appendChild(t)))}}function Df(e){Sf.D(e),Ef(`dns-prefetch`,e,null)}function Of(e,t){Sf.C(e,t),Ef(`preconnect`,e,t)}function kf(e,t,n){Sf.L(e,t,n);var r=Tf;if(r&&e&&t){var i=`link[rel="preload"][as="`+V(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+V(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+V(n.imageSizes)+`"]`)):i+=`[href="`+V(e)+`"]`;var a=i;switch(t){case`style`:a=Ff(e);break;case`script`:a=zf(e)}yf.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),yf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(If(a))||t===`script`&&r.querySelector(Bf(a))||(t=r.createElement(`link`),zd(t,`link`,e),_t(t),r.head.appendChild(t)))}}function Af(e,t){Sf.m(e,t);var n=Tf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+V(r)+`"][href="`+V(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=zf(e)}if(!yf.has(a)&&(e=f({rel:`modulepreload`,href:e},t),yf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Bf(a)))return}r=n.createElement(`link`),zd(r,`link`,e),_t(r),n.head.appendChild(r)}}}function jf(e,t,n){Sf.S(e,t,n);var r=Tf;if(r&&e){var i=gt(r).hoistableStyles,a=Ff(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(If(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=yf.get(a))&&Uf(e,n);var c=o=r.createElement(`link`);_t(c),zd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Hf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Mf(e,t){Sf.X(e,t);var n=Tf;if(n&&e){var r=gt(n).hoistableScripts,i=zf(e),a=r.get(i);a||(a=n.querySelector(Bf(i)),a||(e=f({src:e,async:!0},t),(t=yf.get(i))&&Wf(e,t),a=n.createElement(`script`),_t(a),zd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nf(e,t){Sf.M(e,t);var n=Tf;if(n&&e){var r=gt(n).hoistableScripts,i=zf(e),a=r.get(i);a||(a=n.querySelector(Bf(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=yf.get(i))&&Wf(e,t),a=n.createElement(`script`),_t(a),zd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Pf(e,t,n,r){var a=(a=L.current)?xf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Ff(n.href),n=gt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Ff(n.href);var o=gt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(If(e)))&&!o._p&&(s.instance=o,s.state.loading=5),yf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},yf.set(e,n),o||Rf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=zf(n),n=gt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Ff(e){return`href="`+V(e)+`"`}function If(e){return`link[rel="stylesheet"][`+e+`]`}function Lf(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Rf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),zd(t,`link`,n),_t(t),e.head.appendChild(t))}function zf(e){return`[src="`+V(e)+`"]`}function Bf(e){return`script[async]`+e}function Vf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+V(n.href)+`"]`);if(r)return t.instance=r,_t(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),_t(r),zd(r,`style`,a),Hf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Ff(n.href);var o=e.querySelector(If(a));if(o)return t.state.loading|=4,t.instance=o,_t(o),o;r=Lf(n),(a=yf.get(a))&&Uf(r,a),o=(e.ownerDocument||e).createElement(`link`),_t(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),zd(o,`link`,r),t.state.loading|=4,Hf(o,n.precedence,e),t.instance=o;case`script`:return o=zf(n.src),(a=e.querySelector(Bf(o)))?(t.instance=a,_t(a),a):(r=n,(a=yf.get(o))&&(r=f({},n),Wf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),_t(a),zd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Hf(r,n.precedence,e));return t.instance}function Hf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Uf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Wf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Gf=null;function Kf(e,t,n){if(Gf===null){var r=new Map,i=Gf=new Map;i.set(n,r)}else i=Gf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[dt]||a[it]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function qf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Jf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Yf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Ff(r.href),a=t.querySelector(If(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=$f.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,_t(a);return}a=t.ownerDocument||t,r=Lf(r),(i=yf.get(i))&&Uf(r,i),a=a.createElement(`link`),_t(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),zd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=$f.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Zf=0;function Qf(e,t){return e.stylesheets&&e.count===0&&tp(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&tp(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Zf===0&&(Zf=62500*Hd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&tp(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Zf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function $f(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tp(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ep=null;function tp(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ep=new Map,t.forEach(np,e),ep=null,$f.call(e))}function np(e,t){if(!(t.state.loading&4)){var n=ep.get(e);if(n)var r=n.get(null);else{n=new Map,ep.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=$f.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var rp={$$typeof:C,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function ip(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ap(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ip(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ii(3,null,null,t),e.current=a,a.stateNode=e,t=ia(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},La(a),e}function op(e){return e?(e=ni,e):ni}function sp(e,t,n,r,i,a){i=op(i),r.context===null?r.context=i:r.pendingContext=i,r=za(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ba(e,r,t),n!==null&&(vu(n,e,t),Va(n,e,t))}function cp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lp(e,t){cp(e,t),(e=e.alternate)&&cp(e,t)}function up(e){if(e.tag===13||e.tag===31){var t=$r(e,67108864);t!==null&&vu(t,e,67108864),lp(e,67108864)}}function dp(e){if(e.tag===13||e.tag===31){var t=gu();t=$e(t);var n=$r(e,t);n!==null&&vu(n,e,t),lp(e,t)}}var fp=!0;function pp(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=2,hp(e,t,n,r)}finally{F.p=a,P.T=i}}function mp(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=8,hp(e,t,n,r)}finally{F.p=a,P.T=i}}function hp(e,t,n,r){if(fp){var i=gp(r);if(i===null)Od(e,t,r,_p,n),Op(e,r);else if(Ap(i,e,t,n,r))r.stopPropagation();else if(Op(e,r),t&4&&-1<Dp.indexOf(e)){for(;i!==null;){var a=mt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=He(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Fe(o);s.entanglements[1]|=c,o&=~c}sd(a),!(zl&6)&&(iu=we()+500,cd(0,!1))}}break;case 31:case 13:s=$r(a,2),s!==null&&vu(s,a,2),Cu(),lp(a,2)}if(a=gp(r),a===null&&Od(e,t,r,_p,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Od(e,t,r,null,n)}}function gp(e){return e=Qt(e),vp(e)}var _p=null;function vp(e){if(_p=null,e=pt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _p=e,null}function yp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Te()){case Ee:return 2;case De:return 8;case Oe:case ke:return 32;case Ae:return 268435456;default:return 32}default:return 32}}var bp=!1,xp=null,Sp=null,Cp=null,wp=new Map,Tp=new Map,Ep=[],Dp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Op(e,t){switch(e){case`focusin`:case`focusout`:xp=null;break;case`dragenter`:case`dragleave`:Sp=null;break;case`mouseover`:case`mouseout`:Cp=null;break;case`pointerover`:case`pointerout`:wp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Tp.delete(t.pointerId)}}function kp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=mt(t),t!==null&&up(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ap(e,t,n,r,i){switch(t){case`focusin`:return xp=kp(xp,e,t,n,r,i),!0;case`dragenter`:return Sp=kp(Sp,e,t,n,r,i),!0;case`mouseover`:return Cp=kp(Cp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return wp.set(a,kp(wp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Tp.set(a,kp(Tp.get(a)||null,e,t,n,r,i)),!0}return!1}function jp(e){var t=pt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,nt(e.priority,function(){dp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,nt(e.priority,function(){dp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zt=r,n.target.dispatchEvent(r),Zt=null}else return t=mt(n),t!==null&&up(t),e.blockedOn=n,!1;t.shift()}return!0}function Np(e,t,n){Mp(e)&&n.delete(t)}function Pp(){bp=!1,xp!==null&&Mp(xp)&&(xp=null),Sp!==null&&Mp(Sp)&&(Sp=null),Cp!==null&&Mp(Cp)&&(Cp=null),wp.forEach(Np),Tp.forEach(Np)}function Fp(e,n){e.blockedOn===n&&(e.blockedOn=null,bp||(bp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Pp)))}var Ip=null;function Lp(e){Ip!==e&&(Ip=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Ip===e&&(Ip=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(vp(r||n)===null)continue;break}var a=mt(n);a!==null&&(e.splice(t,3),t-=3,Cs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Rp(e){function t(t){return Fp(t,e)}xp!==null&&Fp(xp,e),Sp!==null&&Fp(Sp,e),Cp!==null&&Fp(Cp,e),wp.forEach(t),Tp.forEach(t);for(var n=0;n<Ep.length;n++){var r=Ep[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ep.length&&(n=Ep[0],n.blockedOn===null);)jp(n),n.blockedOn===null&&Ep.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[at]||null;if(typeof a==`function`)o||Lp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[at]||null)s=o.formAction;else if(vp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Lp(n)}}}function zp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Bp(e){this._internalRoot=e}Vp.prototype.render=Bp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;sp(n,gu(),e,t,null,null)},Vp.prototype.unmount=Bp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sp(e.current,2,null,e,null,null),Cu(),t[ot]=null}};function Vp(e){this._internalRoot=e}Vp.prototype.unstable_scheduleHydration=function(e){if(e){var t=tt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ep.length&&t!==0&&t<Ep[n].priority;n++);Ep.splice(n,0,e),n===0&&jp(e)}};var Hp=n.version;if(Hp!==`19.2.6`)throw Error(i(527,Hp,`19.2.6`));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var Up={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:P,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Wp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wp.isDisabled&&Wp.supportsFiber)try{B=Wp.inject(Up),Ne=Wp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ks,s=qs,c=Js;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ap(e,1,!1,null,null,n,r,null,o,s,c,zp),e[ot]=t.current,Ed(e),new Bp(t)}})),y=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=v()})),b=u(p(),1),x=y(),S=`1.3.23`;function C(e,t,n){return Math.max(e,Math.min(t,n))}function w(e,t,n){return(1-n)*e+n*t}function T(e,t,n,r){return w(e,t,1-Math.exp(-n*r))}function E(e,t){return(e%t+t)%t}var D=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(e){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;let n=C(0,this.currentTime/this.duration,1);t=n>=1;let r=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=T(this.value,this.to,this.lerp*60,e),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:a,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=o}};function O(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(this,r)},t)}}var k=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){this.wrapper=e,this.content=t,n&&(this.debouncedResize=O(this.resize,r),this.wrapper instanceof Window?window.addEventListener(`resize`,this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener(`resize`,this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},A=class{events={};emit(e,...t){let n=this.events[e]||[];for(let e=0,r=n.length;e<r;e++)n[e]?.(...t)}on(e,t){return this.events[e]?this.events[e].push(t):this.events[e]=[t],()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}off(e,t){this.events[e]=this.events[e]?.filter(e=>t!==e)}destroy(){this.events={}}},j=100/6,M={passive:!1};function ee(e,t){return e===1?j:e===2?t:1}var N=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new A;constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){this.element=e,this.options=t,window.addEventListener(`resize`,this.onWindowResize),this.onWindowResize(),this.element.addEventListener(`wheel`,this.onWheel,M),this.element.addEventListener(`touchstart`,this.onTouchStart,M),this.element.addEventListener(`touchmove`,this.onTouchMove,M),this.element.addEventListener(`touchend`,this.onTouchEnd,M)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener(`resize`,this.onWindowResize),this.element.removeEventListener(`wheel`,this.onWheel,M),this.element.removeEventListener(`touchstart`,this.onTouchStart,M),this.element.removeEventListener(`touchmove`,this.onTouchMove,M),this.element.removeEventListener(`touchend`,this.onTouchEnd,M)}onTouchStart=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit(`scroll`,{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit(`scroll`,{deltaX:r,deltaY:i,event:e})};onTouchEnd=e=>{this.emitter.emit(`scroll`,{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e,i=ee(r,this.window.width),a=ee(r,this.window.height);t*=i,n*=a,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit(`scroll`,{deltaX:t,deltaY:n,event:e})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},te=e=>Math.min(1,1.001-2**(-10*e)),P=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new D;emitter=new A;dimensions;virtualScroll;constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:a=.075,touchInertiaExponent:o=1.7,duration:s,easing:c,lerp:l=.1,infinite:u=!1,orientation:d=`vertical`,gestureOrientation:f=d===`horizontal`?`both`:`vertical`,touchMultiplier:p=1,wheelMultiplier:m=1,autoResize:h=!0,prevent:g,virtualScroll:_,overscroll:v=!0,autoRaf:y=!1,anchors:b=!1,autoToggle:x=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:T=w,stopInertiaOnNavigate:E=!1}={}){window.lenisVersion=S,window.lenis||(window.lenis={}),window.lenis.version=S,d===`horizontal`&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!e||e===document.documentElement)&&(e=window),typeof s==`number`&&typeof c!=`function`?c=te:typeof c==`function`&&typeof s!=`number`&&(s=1),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:a,touchInertiaExponent:o,duration:s,easing:c,lerp:l,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:p,wheelMultiplier:m,autoResize:h,prevent:g,virtualScroll:_,overscroll:v,autoRaf:y,anchors:b,autoToggle:x,allowNestedScroll:C,naiveDimensions:T,stopInertiaOnNavigate:E},this.dimensions=new k(e,t,{autoResize:h}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.addEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener(`click`,this.onClick),this.options.wrapper.addEventListener(`pointerdown`,this.onPointerDown),this.virtualScroll=new N(n,{touchMultiplier:p,wheelMultiplier:m}),this.virtualScroll.on(`scroll`,this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener(`transitionend`,this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.removeEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener(`pointerdown`,this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener(`click`,this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}onScrollEnd=e=>{e instanceof CustomEvent||(this.isScrolling===`smooth`||this.isScrolling===!1)&&e.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent(`scrollend`,{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let e=this.isHorizontal?`overflow-x`:`overflow-y`;return getComputedStyle(this.rootElement)[e]}checkOverflow(){[`hidden`,`clip`].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=e=>{e.propertyName?.includes(`overflow`)&&e.target===this.rootElement&&this.checkOverflow()};setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:`instant`}):this.options.wrapper.scrollTo({top:e,behavior:`instant`})}onClick=e=>{let t=e.composedPath().filter(e=>e instanceof HTMLAnchorElement&&e.href).map(e=>new URL(e.href)),n=new URL(window.location.href);if(this.options.anchors){let e=t.find(e=>n.host===e.host&&n.pathname===e.pathname&&e.hash);if(e){let t=typeof this.options.anchors==`object`&&this.options.anchors?this.options.anchors:void 0,n=`#${e.hash.split(`#`)[1]}`;this.scrollTo(n,t);return}}if(this.options.stopInertiaOnNavigate&&t.some(e=>n.host===e.host&&n.pathname!==e.pathname)){this.reset();return}};onPointerDown=e=>{e.button===1&&this.reset()};onVirtualScroll=e=>{if(typeof this.options.virtualScroll==`function`&&this.options.virtualScroll(e)===!1)return;let{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit(`virtual-scroll`,{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;let i=r.type.includes(`touch`),a=r.type.includes(`wheel`);this.isTouching=r.type===`touchstart`||r.type===`touchmove`;let o=t===0&&n===0;if(this.options.syncTouch&&i&&r.type===`touchstart`&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let s=this.options.gestureOrientation===`vertical`&&n===0||this.options.gestureOrientation===`horizontal`&&t===0;if(o||s)return;let c=r.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let l=this.options.prevent,u=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`;if(c.find(e=>e instanceof HTMLElement&&(typeof l==`function`&&l?.(e)||e.hasAttribute?.(`data-lenis-prevent`)||u===`vertical`&&e.hasAttribute?.(`data-lenis-prevent-vertical`)||u===`horizontal`&&e.hasAttribute?.(`data-lenis-prevent-horizontal`)||i&&e.hasAttribute?.(`data-lenis-prevent-touch`)||a&&e.hasAttribute?.(`data-lenis-prevent-wheel`)||this.options.allowNestedScroll&&this.hasNestedScroll(e,{deltaX:t,deltaY:n}))))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&a)){this.isScrolling=`native`,this.animate.stop(),r.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation===`both`?d=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation===`horizontal`&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();let f=i&&this.options.syncTouch,p=i&&r.type===`touchend`;p&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit(`scroll`,this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling===`native`){let e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling=`native`),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty(`overflow`);return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty(`overflow`,`clip`);return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=e=>{let t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,programmatic:i=!0,lerp:a=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:s=i?this.options.easing:void 0,onStart:c,onComplete:l,force:u=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!u)return;let f=e,p=t;if(typeof f==`string`&&[`top`,`left`,`start`,`#`].includes(f))f=0;else if(typeof f==`string`&&[`bottom`,`right`,`end`].includes(f))f=this.limit;else{let e=null;if(typeof f==`string`?(e=document.querySelector(f),e||(f===`#top`?f=0:console.warn(`Lenis: Target not found`,f))):f instanceof HTMLElement&&f?.nodeType&&(e=f),e){if(this.options.wrapper!==window){let e=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?e.left:e.top}let t=e.getBoundingClientRect(),n=getComputedStyle(e),r=this.isHorizontal?Number.parseFloat(n.scrollMarginLeft):Number.parseFloat(n.scrollMarginTop),i=getComputedStyle(this.rootElement),a=this.isHorizontal?Number.parseFloat(i.scrollPaddingLeft):Number.parseFloat(i.scrollPaddingTop);f=(this.isHorizontal?t.left:t.top)+this.animatedScroll-(Number.isNaN(r)?0:r)-(Number.isNaN(a)?0:a)}}if(typeof f==`number`){if(f+=p,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let e=f-this.animatedScroll;e>this.limit/2?f-=this.limit:e<-this.limit/2&&(f+=this.limit)}}else f=C(0,f,this.limit);if(f===this.targetScroll){c?.(this),l?.(this);return}if(this.userData=d??{},n){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o==`number`&&typeof s!=`function`?s=te:typeof s==`function`&&typeof o!=`number`&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:s,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=`smooth`,c?.(this)},onUpdate:(e,t)=>{this.isScrolling=`smooth`,this.lastVelocity=this.velocity,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),i&&(this.targetScroll=e),t||this.emit(),t&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(e,{deltaX:t,deltaY:n}){let r=Date.now();e._lenis||={};let i=e._lenis,a,o,s,c,l,u,d,f,p,m;if(r-(i.time??0)>2e3){i.time=Date.now();let t=window.getComputedStyle(e);if(i.computedStyle=t,a=[`auto`,`overlay`,`scroll`].includes(t.overflowX),o=[`auto`,`overlay`,`scroll`].includes(t.overflowY),l=[`auto`].includes(t.overscrollBehaviorX),u=[`auto`].includes(t.overscrollBehaviorY),i.hasOverflowX=a,i.hasOverflowY=o,!(a||o))return!1;d=e.scrollWidth,f=e.scrollHeight,p=e.clientWidth,m=e.clientHeight,s=d>p,c=f>m,i.isScrollableX=s,i.isScrollableY=c,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=p,i.clientHeight=m,i.hasOverscrollBehaviorX=l,i.hasOverscrollBehaviorY=u}else s=i.isScrollableX,c=i.isScrollableY,a=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,p=i.clientWidth,m=i.clientHeight,l=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(a&&s||o&&c))return!1;let h=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`,g,_,v,y,b,x;if(h===`horizontal`)g=Math.round(e.scrollLeft),_=d-p,v=t,y=a,b=s,x=l;else if(h===`vertical`)g=Math.round(e.scrollTop),_=f-m,v=n,y=o,b=c,x=u;else return!1;return!x&&(g>=_||g<=0)?!0:(v>0?g<_:g>0)&&y&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?`x`:`y`]}get isHorizontal(){return this.options.orientation===`horizontal`}get actualScroll(){let e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?E(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling===`smooth`}get className(){let e=`lenis`;return this.options.autoToggle&&(e+=` lenis-autoToggle`),this.isStopped&&(e+=` lenis-stopped`),this.isLocked&&(e+=` lenis-locked`),this.isScrolling&&(e+=` lenis-scrolling`),this.isScrolling===`smooth`&&(e+=` lenis-smooth`),e}updateClassName(){this.cleanUpClassName(),this.className.split(` `).forEach(e=>{this.rootElement.classList.add(e)})}cleanUpClassName(){for(let e of Array.from(this.rootElement.classList))(e===`lenis`||e.startsWith(`lenis-`))&&this.rootElement.classList.remove(e)}},F=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),ne=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),re=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),ie=e=>{let t=re(e);return t.charAt(0).toUpperCase()+t.slice(1)},ae={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},oe=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},I=(0,b.createContext)({}),se=()=>(0,b.useContext)(I),ce=(0,b.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=se()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,b.createElement)(`svg`,{ref:c,...ae,width:t??l??ae.width,height:t??l??ae.height,stroke:e??f,strokeWidth:m,className:F(`lucide`,p,i),...!a&&!oe(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,b.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),L=(e,t)=>{let n=(0,b.forwardRef)(({className:n,...r},i)=>(0,b.createElement)(ce,{ref:i,iconNode:t,className:F(`lucide-${ne(ie(e))}`,`lucide-${e}`,n),...r}));return n.displayName=ie(e),n},le=L(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),ue=L(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),de=L(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),R=L(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),fe=L(`briefcase`,[[`path`,{d:`M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`,key:`jecpp`}],[`rect`,{width:`20`,height:`14`,x:`2`,y:`6`,rx:`2`,key:`i6l2r4`}]]),pe=L(`calendar`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}]]),me=L(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),he=L(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),ge=L(`circle-alert`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]]),_e=L(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),ve=L(`circle-x`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),ye=L(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),be=L(`code`,[[`path`,{d:`m16 18 6-6-6-6`,key:`eg8j8`}],[`path`,{d:`m8 6-6 6 6 6`,key:`ppft3o`}]]),z=L(`compass`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`,key:`9ktpf1`}]]),xe=L(`corner-down-right`,[[`path`,{d:`m15 10 5 5-5 5`,key:`qqa56n`}],[`path`,{d:`M4 4v7a4 4 0 0 0 4 4h12`,key:`z08zvw`}]]),Se=L(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),Ce=L(`folder`,[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}]]),we=L(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),Te=L(`graduation-cap`,[[`path`,{d:`M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,key:`j76jl0`}],[`path`,{d:`M22 10v6`,key:`1lu8f3`}],[`path`,{d:`M6 12.5V16a6 3 0 0 0 12 0v-3.5`,key:`1r8lef`}]]),Ee=L(`indian-rupee`,[[`path`,{d:`M6 3h12`,key:`ggurg9`}],[`path`,{d:`M6 8h12`,key:`6g4wlu`}],[`path`,{d:`m6 13 8.5 8`,key:`u1kupk`}],[`path`,{d:`M6 13h3`,key:`wdp6ag`}],[`path`,{d:`M9 13c6.667 0 6.667-10 0-10`,key:`1nkvk2`}]]),De=L(`laptop`,[[`path`,{d:`M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z`,key:`1pdavp`}],[`path`,{d:`M20.054 15.987H3.946`,key:`14rxg9`}]]),Oe=L(`loader-circle`,[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`,key:`13zald`}]]),ke=L(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),Ae=L(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),je=L(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),Me=L(`message-square`,[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`}]]),B=L(`monitor`,[[`rect`,{width:`20`,height:`14`,x:`2`,y:`3`,rx:`2`,key:`48i651`}],[`line`,{x1:`8`,x2:`16`,y1:`21`,y2:`21`,key:`1svkeh`}],[`line`,{x1:`12`,x2:`12`,y1:`17`,y2:`21`,key:`vw1qmm`}]]),Ne=L(`move-up-right`,[[`path`,{d:`M13 5H19V11`,key:`1n1gyv`}],[`path`,{d:`M19 5L5 19`,key:`72u4yj`}]]),Pe=L(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),Fe=L(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),Ie=L(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Le=L(`share-2`,[[`circle`,{cx:`18`,cy:`5`,r:`3`,key:`gq8acd`}],[`circle`,{cx:`6`,cy:`12`,r:`3`,key:`w7nqdw`}],[`circle`,{cx:`18`,cy:`19`,r:`3`,key:`1xt0gg`}],[`line`,{x1:`8.59`,x2:`15.42`,y1:`13.51`,y2:`17.49`,key:`47mynk`}],[`line`,{x1:`15.41`,x2:`8.59`,y1:`6.51`,y2:`10.49`,key:`1n3mei`}]]),Re=L(`smartphone`,[[`rect`,{width:`14`,height:`20`,x:`5`,y:`2`,rx:`2`,ry:`2`,key:`1yt0o3`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}]]),ze=L(`tag`,[[`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`,key:`vktsd0`}],[`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`kqv944`}]]),Be=L(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),Ve=L(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),He=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Ue=s(((e,t)=>{t.exports=He()})),We=(0,b.createContext)({});function Ge(e){let t=(0,b.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Ke=typeof window<`u`?b.useLayoutEffect:b.useEffect,qe=(0,b.createContext)(null);function Je(e,t){e.indexOf(t)===-1&&e.push(t)}function Ye(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var Xe=(e,t,n)=>n>t?t:n<e?e:n,Ze={},Qe=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),$e=e=>typeof e==`object`&&!!e,et=e=>/^0[^.\s]+$/u.test(e);function tt(e){let t;return()=>(t===void 0&&(t=e()),t)}var nt=e=>e,rt=(...e)=>e.reduce((e,t)=>n=>t(e(n))),it=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},at=class{constructor(){this.subscriptions=[]}add(e){return Je(this.subscriptions,e),()=>Ye(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},ot=e=>e*1e3,st=e=>e/1e3,ct=(e,t)=>t?1e3/t*e:0,lt=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,ut=1e-7,dt=12;function ft(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=lt(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>ut&&++s<dt);return o}function pt(e,t,n,r){if(e===t&&n===r)return nt;let i=t=>ft(t,0,1,e,n);return e=>e===0||e===1?e:lt(i(e),t,r)}var mt=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ht=e=>t=>1-e(1-t),gt=pt(.33,1.53,.69,.99),_t=ht(gt),vt=mt(_t),yt=e=>e>=1?1:(e*=2)<1?.5*_t(e):.5*(2-2**(-10*(e-1))),bt=e=>1-Math.sin(Math.acos(e)),xt=ht(bt),St=mt(bt),Ct=pt(.42,0,1,1),wt=pt(0,0,.58,1),Tt=pt(.42,0,.58,1),Et=e=>Array.isArray(e)&&typeof e[0]!=`number`,Dt=e=>Array.isArray(e)&&typeof e[0]==`number`,Ot={linear:nt,easeIn:Ct,easeInOut:Tt,easeOut:wt,circIn:bt,circInOut:St,circOut:xt,backIn:_t,backInOut:vt,backOut:gt,anticipate:yt},kt=e=>typeof e==`string`,At=e=>{if(Dt(e)){e.length;let[t,n,r,i]=e;return pt(t,n,r,i)}else if(kt(e))return Ot[e],`${e}`,Ot[e];return e},jt=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],Mt={value:null,addProjectionMetrics:null};function Nt(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0;let o=n;n=r,r=o,n.forEach(l),t&&Mt.value&&Mt.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var Pt=40;function Ft(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=jt.reduce((e,n)=>(e[n]=Nt(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=Ze.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,Pt),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:jt.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<jt.length;t++)o[jt[t]].cancel(e)},state:i,steps:o}}var{schedule:V,cancel:It,state:Lt,steps:Rt}=Ft(typeof requestAnimationFrame<`u`?requestAnimationFrame:nt,!0),zt;function Bt(){zt=void 0}var Vt={now:()=>(zt===void 0&&Vt.set(Lt.isProcessing||Ze.useManualTiming?Lt.timestamp:performance.now()),zt),set:e=>{zt=e,queueMicrotask(Bt)}},Ht={layout:0,mainThread:0,waapi:0},Ut=e=>t=>typeof t==`string`&&t.startsWith(e),Wt=Ut(`--`),Gt=Ut(`var(--`),Kt=e=>Gt(e)?qt.test(e.split(`/*`)[0].trim()):!1,qt=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Jt(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var Yt={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Xt={...Yt,transform:e=>Xe(0,1,e)},Zt={...Yt,default:1},Qt=e=>Math.round(e*1e5)/1e5,$t=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function en(e){return e==null}var tn=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,nn=(e,t)=>n=>!!(typeof n==`string`&&tn.test(n)&&n.startsWith(e)||t&&!en(n)&&Object.prototype.hasOwnProperty.call(n,t)),rn=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match($t);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},an=e=>Xe(0,255,e),on={...Yt,transform:e=>Math.round(an(e))},sn={test:nn(`rgb`,`red`),parse:rn(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+on.transform(e)+`, `+on.transform(t)+`, `+on.transform(n)+`, `+Qt(Xt.transform(r))+`)`};function cn(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var ln={test:nn(`#`),parse:cn,transform:sn.transform},un=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),dn=un(`deg`),fn=un(`%`),H=un(`px`),pn=un(`vh`),mn=un(`vw`),hn={...fn,parse:e=>fn.parse(e)/100,transform:e=>fn.transform(e*100)},gn={test:nn(`hsl`,`hue`),parse:rn(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+fn.transform(Qt(t))+`, `+fn.transform(Qt(n))+`, `+Qt(Xt.transform(r))+`)`},_n={test:e=>sn.test(e)||ln.test(e)||gn.test(e),parse:e=>sn.test(e)?sn.parse(e):gn.test(e)?gn.parse(e):ln.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?sn.transform(e):gn.transform(e),getAnimatableNone:e=>{let t=_n.parse(e);return t.alpha=0,_n.transform(t)}},vn=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function yn(e){return isNaN(e)&&typeof e==`string`&&(e.match($t)?.length||0)+(e.match(vn)?.length||0)>0}var bn=`number`,xn=`color`,Sn=`var`,Cn=`var(`,wn="${}",Tn=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function En(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(Tn,e=>(_n.test(e)?(r.color.push(a),i.push(xn),n.push(_n.parse(e))):e.startsWith(Cn)?(r.var.push(a),i.push(Sn),n.push(e)):(r.number.push(a),i.push(bn),n.push(parseFloat(e))),++a,wn)).split(wn),indexes:r,types:i}}function Dn(e){return En(e).values}function On({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];e===bn?i+=Qt(r[a]):e===xn?i+=_n.transform(r[a]):i+=r[a]}return i}}function kn(e){return On(En(e))}var An=e=>typeof e==`number`?0:_n.test(e)?_n.getAnimatableNone(e):e,jn=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:An(e);function Mn(e){let t=En(e);return On(t)(t.values.map((e,n)=>jn(e,t.split[n])))}var Nn={test:yn,parse:Dn,createTransformer:kn,getAnimatableNone:Mn};function Pn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Fn({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Pn(s,r,e+1/3),a=Pn(s,r,e),o=Pn(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function In(e,t){return n=>n>0?t:e}var Ln=(e,t,n)=>e+(t-e)*n,Rn=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},zn=[ln,sn,gn],Bn=e=>zn.find(t=>t.test(e));function Vn(e){let t=Bn(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===gn&&(n=Fn(n)),n}var Hn=(e,t)=>{let n=Vn(e),r=Vn(t);if(!n||!r)return In(e,t);let i={...n};return e=>(i.red=Rn(n.red,r.red,e),i.green=Rn(n.green,r.green,e),i.blue=Rn(n.blue,r.blue,e),i.alpha=Ln(n.alpha,r.alpha,e),sn.transform(i))},Un=new Set([`none`,`hidden`]);function Wn(e,t){return Un.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Gn(e,t){return n=>Ln(e,t,n)}function Kn(e){return typeof e==`number`?Gn:typeof e==`string`?Kt(e)?In:_n.test(e)?Hn:Xn:Array.isArray(e)?qn:typeof e==`object`?_n.test(e)?Hn:Jn:In}function qn(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Kn(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Jn(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Kn(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Yn(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Xn=(e,t)=>{let n=Nn.createTransformer(t),r=En(e),i=En(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Un.has(e)&&!i.values.length||Un.has(t)&&!r.values.length?Wn(e,t):rt(qn(Yn(r,i),i.values),n):(`${e}${t}`,In(e,t))};function Zn(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?Ln(e,t,n):Kn(e)(e,t)}var Qn=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>V.update(t,e),stop:()=>It(t),now:()=>Lt.isProcessing?Lt.timestamp:Vt.now()}},$n=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},er=2e4;function tr(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function nr(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(tr(r),er);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:st(i)}}var rr={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function ir(e,t){return e*Math.sqrt(1-t*t)}var ar=12;function or(e,t,n){let r=n;for(let n=1;n<ar;n++)r-=e(r)/t(r);return r}var sr=.001;function cr({duration:e=rr.duration,bounce:t=rr.bounce,velocity:n=rr.velocity,mass:r=rr.mass}){let i,a;rr.maxDuration;let o=1-t;o=Xe(rr.minDamping,rr.maxDamping,o),e=Xe(rr.minDuration,rr.maxDuration,st(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=ir(t,o),c=Math.exp(-i);return sr-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=ir(t**2,o);return(-i(t)+sr>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=or(i,a,s);if(e=ot(e),isNaN(c))return{stiffness:rr.stiffness,damping:rr.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var lr=[`duration`,`bounce`],ur=[`stiffness`,`damping`,`mass`];function dr(e,t){return t.some(t=>e[t]!==void 0)}function fr(e){let t={velocity:rr.velocity,stiffness:rr.stiffness,damping:rr.damping,mass:rr.mass,isResolvedFromDuration:!1,...e};if(!dr(e,ur)&&dr(e,lr))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Xe(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:rr.mass,stiffness:i,damping:a}}else{let n=cr({...e,velocity:0});t={...t,...n,mass:rr.mass},t.isResolvedFromDuration=!0}return t}function pr(e=rr.visualDuration,t=rr.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=fr({...n,velocity:-st(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=st(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?rr.restSpeed.granular:rr.restSpeed.default,i||=v?rr.restDelta.granular:rr.restDelta.default;let y,b,x,S,C,w;if(h<1)x=ir(_,h),S=(m+h*_*g)/x,y=e=>o-Math.exp(-h*_*e)*(S*Math.sin(x*e)+g*Math.cos(x*e)),C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let T={calculatedDuration:p&&d||null,velocity:e=>ot(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=ot(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=ot(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(tr(T),er),t=$n(t=>T.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return T}pr.applyToOptions=e=>{let t=nr(e,100,pr);return e.ease=t.ease,e.duration=ot(t.duration),e.type=`keyframes`,e};var mr=5;function hr(e,t,n){let r=Math.max(t-mr,0);return ct(n-e(r),t-r)}function gr({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=pr({keyframes:[f.value,m(f.value)],velocity:hr(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function _r(e,t,n){let r=[],i=n||Ze.mix||Zn,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=rt(Array.isArray(t)?t[n]||nt:t,a)),r.push(a)}return r}function vr(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=_r(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=it(e[r],e[r+1],n);return s[r](i)};return n?t=>l(Xe(e[0],e[a-1],t)):l}function yr(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=it(0,t,r);e.push(Ln(n,1,i))}}function br(e){let t=[0];return yr(t,e.length-1),t}function xr(e,t){return e.map(e=>e*t)}function Sr(e,t){return e.map(()=>t||Tt).splice(0,e.length-1)}function Cr({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=Et(r)?r.map(At):At(r),a={done:!1,value:t[0]},o=vr(xr(n&&n.length===t.length?n:br(t),e),t,{ease:Array.isArray(i)?i:Sr(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var wr=e=>e!==null;function Tr(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(wr),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var Er={decay:gr,inertia:gr,tween:Cr,keyframes:Cr,spring:pr};function Dr(e){typeof e.type==`string`&&(e.type=Er[e.type])}var Or=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},kr=e=>e/100,Ar=class extends Or{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==Vt.now()&&this.tick(Vt.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},Ht.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;Dr(e);let{type:t=Cr,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||Cr;s!==Cr&&typeof o[0]!=`number`&&(this.mixKeyframes=rt(kr,Zn(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=tr(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=Xe(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==gr&&(b.value=Tr(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return st(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+st(e)}get time(){return st(this.currentTime)}set time(e){e=ot(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return hr(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Vt.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=st(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Qn,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(Vt.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,Ht.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function jr(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Mr=e=>e*180/Math.PI,Nr=e=>Fr(Mr(Math.atan2(e[1],e[0]))),Pr={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Nr,rotateZ:Nr,skewX:e=>Mr(Math.atan(e[1])),skewY:e=>Mr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Fr=e=>(e%=360,e<0&&(e+=360),e),Ir=Nr,Lr=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Rr=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),zr={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Lr,scaleY:Rr,scale:e=>(Lr(e)+Rr(e))/2,rotateX:e=>Fr(Mr(Math.atan2(e[6],e[5]))),rotateY:e=>Fr(Mr(Math.atan2(-e[2],e[0]))),rotateZ:Ir,rotate:Ir,skewX:e=>Mr(Math.atan(e[4])),skewY:e=>Mr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Br(e){return+!!e.includes(`scale`)}function Vr(e,t){if(!e||e===`none`)return Br(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=zr,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Pr,i=t}if(!i)return Br(t);let a=r[t],o=i[1].split(`,`).map(Ur);return typeof a==`function`?a(o):o[a]}var Hr=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Vr(n,t)};function Ur(e){return parseFloat(e.trim())}var Wr=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Gr=new Set([...Wr,`pathRotation`]),Kr=e=>e===Yt||e===H,qr=new Set([`x`,`y`,`z`]),Jr=Wr.filter(e=>!qr.has(e));function Yr(e){let t=[];return Jr.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var Xr={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Vr(t,`x`),y:(e,{transform:t})=>Vr(t,`y`)};Xr.translateX=Xr.x,Xr.translateY=Xr.y;var Zr=new Set,Qr=!1,$r=!1,ei=!1;function ti(){if($r){let e=Array.from(Zr).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Yr(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}$r=!1,Qr=!1,Zr.forEach(e=>e.complete(ei)),Zr.clear()}function ni(){Zr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&($r=!0)})}function ri(){ei=!0,ni(),ti(),ei=!1}var ii=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Zr.add(this),Qr||(Qr=!0,V.read(ni),V.resolveKeyframes(ti))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}jr(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Zr.delete(this)}cancel(){this.state===`scheduled`&&(Zr.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},ai=e=>e.startsWith(`--`);function oi(e,t,n){ai(t)?e.style.setProperty(t,n):e.style[t]=n}var si={};function ci(e,t){let n=tt(e);return()=>si[t]??n()}var li=ci(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),ui=ci(()=>window.ViewTimeline!==void 0,`viewTimeline`),di=ci(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),fi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,pi={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:fi([0,.65,.55,1]),circOut:fi([.55,0,1,.45]),backIn:fi([.31,.01,.66,-.59]),backOut:fi([.33,1.53,.69,.99])};function mi(e,t){if(e)return typeof e==`function`?di()?$n(e,t):`ease-out`:Dt(e)?fi(e):Array.isArray(e)?e.map(e=>mi(e,t)||pi.easeOut):pi[e]}function hi(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=mi(s,i);Array.isArray(d)&&(u.easing=d),Mt.value&&Ht.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return Mt.value&&p.finished.finally(()=>{Ht.waapi--}),p}function gi(e){return typeof e==`function`&&`applyToOptions`in e}function _i({type:e,...t}){return gi(e)&&di()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var vi=class extends Or{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=_i(e);this.animation=hi(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=Tr(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),oi(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return st(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+st(e)}get time(){return st(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ot(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&li()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),nt):r(this)}},yi={anticipate:yt,backInOut:vt,circInOut:St};function bi(e){return e in yi}function xi(e){typeof e.ease==`string`&&bi(e.ease)&&(e.ease=yi[e.ease])}var Si=10,Ci=class extends vi{constructor(e){xi(e),Dr(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new Ar({...a,autoplay:!1}),s=Math.max(Si,Vt.now()-this.startTime),c=Xe(0,Si,s-Si),l=o.sample(s).value,{name:u}=this.options;i&&u&&oi(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},wi=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(Nn.test(e)||e===`0`)&&!e.startsWith(`url(`));function Ti(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Ei(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=wi(i,t),s=wi(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:Ti(e)||(n===`spring`||gi(n))&&r}function Di(e){e.duration=0,e.type=`keyframes`}var Oi=new Set([`opacity`,`clipPath`,`filter`,`transform`]),ki=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Ai(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&ki.test(e[t]))return!0;return!1}var U=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),ji=tt(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function Mi(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:c,transformTemplate:l}=t.owner.getProps();return ji()&&n&&(Oi.has(n)||U.has(n)&&Ai(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Ni=40,Pi=class extends Or{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Vt.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||ii;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=Vt.now();let u=!0;Ei(e,i,a,o)||(u=!1,(Ze.instantAnimations||!s)&&l?.(Tr(e,n,t)),e[0]=e[e.length-1],Di(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>Ni?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&Mi(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new Ci({...d,element:p})}catch{m=new Ar(d)}else m=new Ar(d);m.finished.then(()=>{this.notifyFinished()}).catch(nt),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),ri()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function Fi(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Ii=30,Li=e=>!isNaN(parseFloat(e)),Ri={current:void 0},zi=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=Vt.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Vt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Li(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new at);let n=this.events[e].add(t);return e===`change`?()=>{n(),V.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ri.current&&Ri.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Vt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ii)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Ii);return ct(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Bi(e,t){return new zi(e,t)}function Vi(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function Hi(e,t){let n=e?.[t]??e?.default??e;return n===e?n:Vi(n,e)}var Ui={type:`spring`,stiffness:500,damping:25,restSpeed:10},Wi=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Gi={type:`keyframes`,duration:.8},Ki={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},qi=(e,{keyframes:t})=>t.length>2?Gi:Gr.has(e)?e.startsWith(`scale`)?Wi(t[1]):Ui:Ki,Ji=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function Yi(e){for(let t in e)if(!Ji.has(t))return!0;return!1}var Xi=(e,t,n,r={},i,a)=>o=>{let s=Hi(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=ot(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Yi(s)||Object.assign(u,qi(e,u)),u.duration&&=ot(u.duration),u.repeatDelay&&=ot(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Di(u),u.delay===0&&(d=!0)),(Ze.instantAnimations||Ze.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,Di(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Tr(u.keyframes,s);if(e!==void 0){V.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Ar(u):new Pi(u)},Zi=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Qi(e){let t=Zi.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function $i(e,t,n=1){`${e}`;let[r,i]=Qi(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Qe(e)?parseFloat(e):e}return Kt(i)?$i(i,t,n+1):i}function ea(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function ta(e,t,n,r){if(typeof t==`function`){let[i,a]=ea(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=ea(r);t=t(n===void 0?e.custom:n,i,a)}return t}function na(e,t,n){let r=e.getProps();return ta(r,t,n===void 0?r.custom:n,e)}var ra=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Wr]),ia=e=>Array.isArray(e);function aa(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Bi(n))}function oa(e){return ia(e)?e[e.length-1]||0:e}function sa(e,t){let{transitionEnd:n={},transition:r={},...i}=na(e,t)||{};i={...i,...n};for(let t in i)aa(e,t,oa(i[t]))}var ca=e=>!!(e&&e.getVelocity);function la(e){return!!(ca(e)&&e.add)}function ua(e,t){let n=e.getValue(`willChange`);if(la(n))return n.add(t);if(!n&&Ze.WillChange){let n=new Ze.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function da(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var fa=`data-`+da(`framerAppearId`);function pa(e){return e.props[fa]}function ma({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function ha(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?Vi(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState&&e.animationState.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&ma(f,t))continue;let o={delay:n,...Hi(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){V.update(()=>r.set(i));continue}let p=!1;if(window.MotionHandoffAnimation){let n=pa(e);if(n){let e=window.MotionHandoffAnimation(n,t,V);e!==null&&(o.startTime=e,p=!0)}}ua(e,t);let m=l??e.shouldReduceMotion;r.start(Xi(t,r,i,m&&ra.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>V.update(()=>{o&&sa(e,o)});d.length?Promise.all(d).then(t):t()}return d}function ga(e,t,n={}){let r=na(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(ha(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return _a(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function _a(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(ga(c,t,{...o,delay:n+(typeof r==`function`?0:r)+Fi(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function va(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>ga(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=ga(e,t,n);else{let i=typeof t==`function`?na(e,t,n.custom):t;r=Promise.all(ha(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var ya={test:e=>e===`auto`,parse:e=>e},ba=e=>t=>t.test(e),xa=[Yt,H,fn,dn,mn,pn,ya],Sa=e=>xa.find(ba(e));function Ca(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||et(e)}var wa=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function Ta(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match($t)||[];if(!r)return e;let i=n.replace(r,``),a=+!!wa.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var Ea=/\b([a-z-]*)\(.*?\)/gu,Da={...Nn,getAnimatableNone:e=>{let t=e.match(Ea);return t?t.map(Ta).join(` `):e}},Oa={...Nn,getAnimatableNone:e=>{let t=Nn.parse(e);return Nn.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},ka={...Yt,transform:Math.round},Aa={borderWidth:H,borderTopWidth:H,borderRightWidth:H,borderBottomWidth:H,borderLeftWidth:H,borderRadius:H,borderTopLeftRadius:H,borderTopRightRadius:H,borderBottomRightRadius:H,borderBottomLeftRadius:H,width:H,maxWidth:H,height:H,maxHeight:H,top:H,right:H,bottom:H,left:H,inset:H,insetBlock:H,insetBlockStart:H,insetBlockEnd:H,insetInline:H,insetInlineStart:H,insetInlineEnd:H,padding:H,paddingTop:H,paddingRight:H,paddingBottom:H,paddingLeft:H,paddingBlock:H,paddingBlockStart:H,paddingBlockEnd:H,paddingInline:H,paddingInlineStart:H,paddingInlineEnd:H,margin:H,marginTop:H,marginRight:H,marginBottom:H,marginLeft:H,marginBlock:H,marginBlockStart:H,marginBlockEnd:H,marginInline:H,marginInlineStart:H,marginInlineEnd:H,fontSize:H,backgroundPositionX:H,backgroundPositionY:H,rotate:dn,pathRotation:dn,rotateX:dn,rotateY:dn,rotateZ:dn,scale:Zt,scaleX:Zt,scaleY:Zt,scaleZ:Zt,skew:dn,skewX:dn,skewY:dn,distance:H,translateX:H,translateY:H,translateZ:H,x:H,y:H,z:H,perspective:H,transformPerspective:H,opacity:Xt,originX:hn,originY:hn,originZ:H,zIndex:ka,fillOpacity:Xt,strokeOpacity:Xt,numOctaves:ka},ja={...Aa,color:_n,backgroundColor:_n,outlineColor:_n,fill:_n,stroke:_n,borderColor:_n,borderTopColor:_n,borderRightColor:_n,borderBottomColor:_n,borderLeftColor:_n,filter:Da,WebkitFilter:Da,mask:Oa,WebkitMask:Oa},Ma=e=>ja[e],Na=new Set([Da,Oa]);function Pa(e,t){let n=Ma(e);return Na.has(n)||(n=Nn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var Fa=new Set([`auto`,`none`,`0`]);function Ia(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Fa.has(t)&&En(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Pa(n,i)}var La=class extends ii{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Kt(r))){let i=$i(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!ra.has(n)||e.length!==2)return;let[r,i]=e,a=Sa(r),o=Sa(i);if(Jt(r)!==Jt(i)&&Xr[n]){this.needsMeasurement=!0;return}if(a!==o)if(Kr(a)&&Kr(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Xr[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||Ca(e[t]))&&n.push(t);n.length&&Ia(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Xr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Xr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function Ra(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var za=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Ba(e){return $e(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:Va,cancel:Ha}=Ft(queueMicrotask,!1),Ua={x:!1,y:!1};function Wa(){return Ua.x||Ua.y}function Ga(e){return e===`x`||e===`y`?Ua[e]?null:(Ua[e]=!0,()=>{Ua[e]=!1}):Ua.x||Ua.y?null:(Ua.x=Ua.y=!0,()=>{Ua.x=Ua.y=!1})}function Ka(e,t){let n=Ra(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function qa(e){return!(e.pointerType===`touch`||Wa())}function Ja(e,t,n={}){let[r,i,a]=Ka(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!qa(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var Ya=(e,t)=>t?e===t?!0:Ya(e,t.parentElement):!1,Xa=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Za=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Qa(e){return Za.has(e.tagName)||e.isContentEditable===!0}var $a=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function eo(e){return $a.has(e.tagName)||e.isContentEditable===!0}var to=new WeakSet;function no(e){return t=>{t.key===`Enter`&&e(t)}}function ro(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var io=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=no(()=>{if(to.has(n))return;ro(n,`down`);let e=no(()=>{ro(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>ro(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function ao(e){return Xa(e)&&!Wa()}var oo=new WeakSet;function so(e,t,n={}){let[r,i,a]=Ka(e,n),o=e=>{let r=e.currentTarget;if(!ao(e)||oo.has(e))return;to.add(r),n.stopPropagation&&oo.add(e);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),to.has(r)&&to.delete(r),ao(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Ya(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Ba(e)&&(e.addEventListener(`focus`,e=>io(e,i)),!Qa(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function co(e){return $e(e)&&`ownerSVGElement`in e}var W=new WeakMap,lo,uo=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:co(r)&&`getBBox`in r?r.getBBox()[t]:r[n],fo=uo(`inline`,`width`,`offsetWidth`),po=uo(`block`,`height`,`offsetHeight`);function mo({target:e,borderBoxSize:t}){W.get(e)?.forEach(n=>{n(e,{get width(){return fo(e,t)},get height(){return po(e,t)}})})}function ho(e){e.forEach(mo)}function go(){typeof ResizeObserver>`u`||(lo=new ResizeObserver(ho))}function _o(e,t){lo||go();let n=Ra(e);return n.forEach(e=>{let n=W.get(e);n||(n=new Set,W.set(e,n)),n.add(t),lo?.observe(e)}),()=>{n.forEach(e=>{let n=W.get(e);n?.delete(t),n?.size||lo?.unobserve(e)})}}var vo=new Set,yo;function bo(){yo=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};vo.forEach(t=>t(e))},window.addEventListener(`resize`,yo)}function xo(e){return vo.add(e),yo||bo(),()=>{vo.delete(e),!vo.size&&typeof yo==`function`&&(window.removeEventListener(`resize`,yo),yo=void 0)}}function So(e,t){return typeof e==`function`?xo(e):_o(e,t)}function Co(e,t){let n,r=()=>{let{currentTime:r}=t,i=(r===null?0:r.value)/100;n!==i&&e(i),n=i};return V.preUpdate(r,!0),()=>It(r)}function wo(e){return co(e)&&e.tagName===`svg`}function To(...e){let t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],a=e[2+n],o=e[3+n],s=vr(i,a,o);return t?s(r):s}function Eo(e,t,n={}){let r=e.get(),i=null,a=r,o,s=typeof r==`string`?r.replace(/[\d.-]/g,``):void 0,c=()=>{i&&=(i.stop(),null),e.animation=void 0},l=()=>{let t=Oo(e.get()),r=Oo(a);if(t===r){c();return}let s=i?i.getGeneratorVelocity():e.getVelocity();c(),i=new Ar({keyframes:[t,r],velocity:s,type:`spring`,restDelta:.001,restSpeed:.01,...n,onUpdate:o})},u=()=>{l(),e.animation=i??void 0,e.events.animationStart?.notify(),i?.then(()=>{e.animation=void 0,e.events.animationComplete?.notify()})};if(e.attach((e,t)=>{a=e,o=e=>t(Do(e,s)),V.postRender(u)},c),ca(t)){let r=n.skipInitialAnimation===!0,i=t.on(`change`,t=>{r?(r=!1,e.jump(Do(t,s),!1)):e.set(Do(t,s))}),a=e.on(`destroy`,i);return()=>{i(),a()}}return c}function Do(e,t){return t?e+t:e}function Oo(e){return typeof e==`number`?e:parseFloat(e)}var ko=[...xa,_n,Nn],Ao=e=>ko.find(ba(e)),jo=()=>({translate:0,scale:1,origin:0,originPoint:0}),Mo=()=>({x:jo(),y:jo()}),No=()=>({min:0,max:0}),Po=()=>({x:No(),y:No()}),Fo=new WeakMap;function Io(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Lo(e){return typeof e==`string`||Array.isArray(e)}var Ro=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],zo=[`initial`,...Ro];function Bo(e){return Io(e.animate)||zo.some(t=>Lo(e[t]))}function Vo(e){return!!(Bo(e)||e.variants)}function Ho(e,t,n){for(let r in t){let i=t[r],a=n[r];if(ca(i))e.addValue(r,i);else if(ca(a))e.addValue(r,Bi(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Bi(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Uo={current:null},Wo={current:!1},Go=typeof window<`u`;function Ko(){if(Wo.current=!0,Go)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Uo.current=e.matches;e.addEventListener(`change`,t),t()}else Uo.current=!1}var qo=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],Jo={};function Yo(e){Jo=e}function Xo(){return Jo}var Zo=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=ii,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=Vt.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,V.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Bo(t),this.isVariantNode=Vo(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&ca(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,Fo.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Wo.current||Ko(),this.shouldReduceMotion=Uo.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),It(this.notifyUpdate),It(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Oi.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new vi({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:ot(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=Gr.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&V.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in Jo){let t=Jo[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Po()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<qo.length;t++){let n=qo[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Ho(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Bi(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Qe(n)||et(n))?n=parseFloat(n):!Ao(n)&&Nn.test(t)&&(n=Pa(e,t)),this.setBaseTarget(e,ca(n)?n.get():n)),ca(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=ta(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!ca(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new at),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Va.render(this.render)}},Qo=class extends Zo{constructor(){super(...arguments),this.KeyframeResolver=La}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;ca(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},$o=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function es({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function ts({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function ns(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function rs(e){return e===void 0||e===1}function is({scale:e,scaleX:t,scaleY:n}){return!rs(e)||!rs(t)||!rs(n)}function as(e){return is(e)||os(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function os(e){return ss(e.x)||ss(e.y)}function ss(e){return e&&e!==`0%`}function cs(e,t,n){return n+t*(e-n)}function ls(e,t,n,r,i){return i!==void 0&&(e=cs(e,i,r)),cs(e,n,r)+t}function us(e,t=0,n=1,r,i){e.min=ls(e.min,t,n,r,i),e.max=ls(e.max,t,n,r,i)}function ds(e,{x:t,y:n}){us(e.x,t.translate,t.scale,t.originPoint),us(e.y,n.translate,n.scale,n.originPoint)}var fs=.999999999999,ps=1.0000000000001;function ms(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(hs(e.x,-a.scroll.offset.x),hs(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,ds(e,o)),r&&as(a.latestValues)&&vs(e,a.latestValues,a.layout?.layoutBox))}t.x<ps&&t.x>fs&&(t.x=1),t.y<ps&&t.y>fs&&(t.y=1)}function hs(e,t){e.min+=t,e.max+=t}function gs(e,t,n,r,i=.5){us(e,t,n,Ln(e.min,e.max,i),r)}function _s(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function vs(e,t,n){let r=n??e;gs(e.x,_s(t.x,r.x),t.scaleX,t.scale,t.originX),gs(e.y,_s(t.y,r.y),t.scaleY,t.scale,t.originY)}function ys(e,t){return es(ns(e.getBoundingClientRect(),t))}function bs(e,t,n){let r=ys(e,n),{scroll:i}=t;return i&&(hs(r.x,i.offset.x),hs(r.y,i.offset.y)),r}var xs={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Ss=Wr.length;function Cs(e,t,n){let r=``,i=!0;for(let a=0;a<Ss;a++){let o=Wr[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=za(s,Aa[o]);if(!c){i=!1;let t=xs[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${za(a,Aa.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function ws(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Gr.has(e)){o=!0;continue}else if(Wt(e)){i[e]=n;continue}else{let t=za(n,Aa[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Cs(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Ts(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Es(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Ds={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(H.test(e))e=parseFloat(e);else return e;return`${Es(e,t.target.x)}% ${Es(e,t.target.y)}%`}},Os={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=Nn.parse(e);if(i.length>5)return r;let a=Nn.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=Ln(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},ks={borderRadius:{...Ds,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:Ds,borderTopRightRadius:Ds,borderBottomLeftRadius:Ds,borderBottomRightRadius:Ds,boxShadow:Os};function As(e,{layout:t,layoutId:n}){return Gr.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!ks[e]||e===`opacity`)}function js(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(ca(r[t])||i&&ca(i[t])||As(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Ms(e){return window.getComputedStyle(e)}var Ns=class extends Qo{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Ts}readValueFromInstance(e,t){if(Gr.has(t))return this.projection?.isProjecting?Br(t):Hr(e,t);{let n=Ms(e),r=(Wt(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return ys(e,t)}build(e,t,n){ws(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return js(e,t,n)}},Ps={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Fs={offset:`strokeDashoffset`,array:`strokeDasharray`};function Is(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Ps:Fs;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Ls=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Rs(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(ws(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Ls)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Is(d,i,a,o,!1)}var zs=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Bs=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Vs(e,t,n,r){Ts(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(zs.has(n)?n:da(n),t.attrs[n])}function Hs(e,t,n){let r=js(e,t,n);for(let n in e)if(ca(e[n])||ca(t[n])){let t=Wr.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Us=class extends Qo{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=Po}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Gr.has(t)){let e=Ma(t);return e&&e.default||0}return t=zs.has(t)?t:da(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Hs(e,t,n)}build(e,t,n){Rs(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Vs(e,t,n,r)}mount(e){this.isSVGTag=Bs(e.tagName),super.mount(e)}},Ws=zo.length;function Gs(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&Gs(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<Ws;n++){let r=zo[n],i=e.props[r];(Lo(i)||i===!1)&&(t[r]=i)}return t}function Ks(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var qs=[...Ro].reverse(),Js=Ro.length;function Ys(e){return t=>Promise.all(t.map(({animation:t,options:n})=>va(e,t,n)))}function Xs(e){let t=Ys(e),n=$s(),r=!0,i=!1,a=t=>(n,r)=>{let i=na(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=Gs(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<Js;t++){let p=qs[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=Lo(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||Io(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=Zs(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,T={...w,...C},E=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in T){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=ia(t)&&ia(n)?!Ks(t,n)||y:t!==n,r?t==null?u.add(e):E(e):t!==void 0&&u.has(e)?E(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let D=v&&y;b&&(!D||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!D&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=na(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=Fi(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=na(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=$s(),i=!0}}}function Zs(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!Ks(t,e):!1}function Qs(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function $s(){return{animate:Qs(!0),whileInView:Qs(),whileHover:Qs(),whileTap:Qs(),whileDrag:Qs(),whileFocus:Qs(),exit:Qs()}}function ec(e,t){e.min=t.min,e.max=t.max}function tc(e,t){ec(e.x,t.x),ec(e.y,t.y)}function nc(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var rc=.9999,ic=1.0001,ac=-.01,oc=.01;function sc(e){return e.max-e.min}function cc(e,t,n){return Math.abs(e-t)<=n}function lc(e,t,n,r=.5){e.origin=r,e.originPoint=Ln(t.min,t.max,e.origin),e.scale=sc(n)/sc(t),e.translate=Ln(n.min,n.max,e.origin)-e.originPoint,(e.scale>=rc&&e.scale<=ic||isNaN(e.scale))&&(e.scale=1),(e.translate>=ac&&e.translate<=oc||isNaN(e.translate))&&(e.translate=0)}function uc(e,t,n,r){lc(e.x,t.x,n.x,r?r.originX:void 0),lc(e.y,t.y,n.y,r?r.originY:void 0)}function dc(e,t,n,r=0){e.min=(r?Ln(n.min,n.max,r):n.min)+t.min,e.max=e.min+sc(t)}function fc(e,t,n,r){dc(e.x,t.x,n.x,r?.x),dc(e.y,t.y,n.y,r?.y)}function pc(e,t,n,r=0){let i=r?Ln(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+sc(t)}function mc(e,t,n,r){pc(e.x,t.x,n.x,r?.x),pc(e.y,t.y,n.y,r?.y)}function hc(e,t,n,r,i){return e-=t,e=cs(e,1/n,r),i!==void 0&&(e=cs(e,1/i,r)),e}function gc(e,t=0,n=1,r=.5,i,a=e,o=e){if(fn.test(t)&&(t=parseFloat(t),t=Ln(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=Ln(a.min,a.max,r);e===a&&(s-=t),e.min=hc(e.min,t,n,s,i),e.max=hc(e.max,t,n,s,i)}function _c(e,t,[n,r,i],a,o){gc(e,t[n],t[r],t[i],t.scale,a,o)}var vc=[`x`,`scaleX`,`originX`],yc=[`y`,`scaleY`,`originY`];function bc(e,t,n,r){_c(e.x,t,vc,n?n.x:void 0,r?r.x:void 0),_c(e.y,t,yc,n?n.y:void 0,r?r.y:void 0)}function xc(e){return e.translate===0&&e.scale===1}function Sc(e){return xc(e.x)&&xc(e.y)}function Cc(e,t){return e.min===t.min&&e.max===t.max}function wc(e,t){return Cc(e.x,t.x)&&Cc(e.y,t.y)}function Tc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Ec(e,t){return Tc(e.x,t.x)&&Tc(e.y,t.y)}function Dc(e){return sc(e.x)/sc(e.y)}function Oc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function kc(e){return[e(`x`),e(`y`)]}function Ac(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:c}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),c&&(r+=`skewY(${c}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var jc=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`],Mc=jc.length,Nc=e=>typeof e==`string`?parseFloat(e):e,Pc=e=>typeof e==`number`||H.test(e);function Fc(e,t,n,r,i,a){i?(e.opacity=Ln(0,n.opacity??1,Lc(r)),e.opacityExit=Ln(t.opacity??1,0,Rc(r))):a&&(e.opacity=Ln(t.opacity??1,n.opacity??1,r));for(let i=0;i<Mc;i++){let a=jc[i],o=Ic(t,a),s=Ic(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||Pc(o)===Pc(s)?(e[a]=Math.max(Ln(Nc(o),Nc(s),r),0),(fn.test(s)||fn.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=Ln(t.rotate||0,n.rotate||0,r))}function Ic(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Lc=zc(0,.5,xt),Rc=zc(.5,.95,nt);function zc(e,t,n){return r=>r<e?0:r>t?1:n(it(e,t,r))}function Bc(e,t,n){let r=ca(e)?e:Bi(e);return r.start(Xi(``,r,t,n)),r.animation}function Vc(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var Hc=(e,t)=>e.depth-t.depth,Uc=class{constructor(){this.children=[],this.isDirty=!1}add(e){Je(this.children,e),this.isDirty=!0}remove(e){Ye(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Hc),this.isDirty=!1,this.children.forEach(e)}};function Wc(e,t){let n=Vt.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(It(r),e(a-t))};return V.setup(r,!0),()=>It(r)}function Gc(e){return ca(e)?e.get():e}var Kc=class{constructor(){this.members=[]}add(e){Je(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(Ye(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(Ye(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},qc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Jc={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Yc=[``,`X`,`Y`,`Z`],Xc=1e3,Zc=0;function Qc(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function $c(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=pa(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,V,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&$c(r)}function el({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Zc++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Mt.value&&(Jc.nodes=Jc.calculatedTargetDeltas=Jc.calculatedProjections=0),this.nodes.forEach(rl),this.nodes.forEach(fl),this.nodes.forEach(pl),this.nodes.forEach(il),Mt.addProjectionMetrics&&Mt.addProjectionMetrics(Jc)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Uc)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new at),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=co(t)&&!wo(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;V.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=Wc(i,250),qc.hasAnimatedSinceResize&&(qc.hasAnimatedSinceResize=!1,this.nodes.forEach(dl)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||bl,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Ec(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Hi(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||dl(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),It(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ml),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&$c(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(sl),this.nodes.forEach(ol);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(cl);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(ll),this.nodes.forEach(ul),this.nodes.forEach(tl),this.nodes.forEach(nl)):this.nodes.forEach(cl),this.clearAllSnapshots();let e=Vt.now();Lt.delta=Xe(0,1e3/60,e-Lt.timestamp),Lt.timestamp=e,Lt.isProcessing=!0,Rt.update.process(Lt),Rt.preRender.process(Lt),Rt.render.process(Lt),Lt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Va.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(al),this.sharedNodes.forEach(hl)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,V.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){V.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!sc(this.snapshot.measuredBox.x)&&!sc(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=Po(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Sc(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||as(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),wl(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return Po();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(El))){let{scroll:e}=this.root;e&&(hs(t.x,e.offset.x),hs(t.y,e.offset.y))}return t}removeElementScroll(e){let t=Po();if(tc(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&tc(t,e),hs(t.x,i.offset.x),hs(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||Po();tc(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(hs(r.x,-n.scroll.offset.x),hs(r.y,-n.scroll.offset.y)),as(n.latestValues)&&vs(r,n.latestValues,n.layout?.layoutBox)}return as(this.latestValues)&&vs(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=Po();tc(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!as(n.latestValues))continue;let r;n.instance&&(is(n.latestValues)&&n.updateSnapshot(),r=Po(),tc(r,n.measurePageBox())),bc(t,n.latestValues,n.snapshot?.layoutBox,r)}return as(this.latestValues)&&bc(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Lt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=Lt.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Po(),this.targetWithTransforms=Po()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),fc(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):tc(this.target,this.layout.layoutBox),ds(this.target,this.targetDelta)):tc(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),Mt.value&&Jc.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||is(this.parent.latestValues)||os(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Po(),this.relativeTargetOrigin=Po(),mc(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),tc(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===Lt.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;tc(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;ms(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=Po());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(nc(this.prevProjectionDelta.x,this.projectionDelta.x),nc(this.prevProjectionDelta.y,this.projectionDelta.y)),uc(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Oc(this.projectionDelta.x,this.prevProjectionDelta.x)||!Oc(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),Mt.value&&Jc.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Mo(),this.projectionDelta=Mo(),this.projectionDeltaWithTransform=Mo()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=Mo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=Po(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!!(c&&!u&&this.options.crossfade===!0&&!this.path.some(yl));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=Ln(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=Ln(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(gl(o.x,e.x,n),gl(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(mc(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),vl(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&wc(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=Po(),tc(f,this.relativeTarget)),c&&(this.animationValues=a,Fc(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(It(this.pendingAnimation),void 0),this.pendingAnimation=V.update(()=>{qc.hasAnimatedSinceResize=!0,Ht.layout++,this.motionValue||=Bi(0),this.motionValue.jump(0,!1),this.currentAnimation=Bc(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{Ht.layout--},onComplete:()=>{Ht.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Xc),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Tl(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||Po();let t=sc(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=sc(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}tc(t,n),vs(t,i),uc(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Kc),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&Qc(`z`,e,r,this.animationValues);for(let t=0;t<Yc.length;t++)Qc(`rotate${Yc[t]}`,e,r,this.animationValues),Qc(`skew${Yc[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=Gc(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=Gc(t?.pointerEvents)||``),this.hasProjected&&!as(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Ac(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in ks){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=ks[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?Gc(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(ol),this.root.sharedNodes.clear()}}}function tl(e){e.updateLayout()}function nl(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)kc(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=sc(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;ec(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else Tl(i,t.layoutBox,n)&&kc(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=sc(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Mo();uc(o,n,t.layoutBox);let s=Mo();a?uc(s,e.applyTransform(r,!0),t.measuredBox):uc(s,n,t.layoutBox);let c=!Sc(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=Po();mc(s,t.layoutBox,i.layoutBox,o);let c=Po();mc(c,n,a.layoutBox,o),Ec(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function rl(e){Mt.value&&Jc.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function il(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function al(e){e.clearSnapshot()}function ol(e){e.clearMeasurements()}function sl(e){e.isLayoutDirty=!0,e.updateLayout()}function cl(e){e.isLayoutDirty=!1}function ll(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function ul(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function dl(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function fl(e){e.resolveTargetDelta()}function pl(e){e.calcProjection()}function ml(e){e.resetSkewAndRotation()}function hl(e){e.removeLeadSnapshot()}function gl(e,t,n){e.translate=Ln(t.translate,0,n),e.scale=Ln(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function _l(e,t,n,r){e.min=Ln(t.min,n.min,r),e.max=Ln(t.max,n.max,r)}function vl(e,t,n,r){_l(e.x,t.x,n.x,r),_l(e.y,t.y,n.y,r)}function yl(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var bl={duration:.45,ease:[.4,0,.1,1]},xl=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Sl=xl(`applewebkit/`)&&!xl(`chrome/`)?Math.round:nt;function Cl(e){e.min=Sl(e.min),e.max=Sl(e.max)}function wl(e){Cl(e.x),Cl(e.y)}function Tl(e,t,n){return e===`position`||e===`preserve-aspect`&&!cc(Dc(t),Dc(n),.2)}function El(e){return e!==e.root&&e.scroll?.wasRoot}var Dl=el({attachResizeListener:(e,t)=>Vc(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Ol={current:void 0},kl=el({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ol.current){let e=new Dl({});e.mount(window),e.setOptions({layoutScroll:!0}),Ol.current=e}return Ol.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Al=(0,b.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function jl(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Ml(...e){return t=>{let n=!1,r=e.map(e=>{let r=jl(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():jl(e[t],null)}}}}function Nl(...e){return b.useCallback(Ml(...e),e)}var G=Ue(),Pl=class extends b.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(Ba(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=Ba(e)&&e.offsetWidth||0,r=Ba(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top,a.direction=i.direction}return null}componentDidUpdate(){}render(){return this.props.children}};function Fl({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,b.useId)(),s=(0,b.useRef)(null),c=(0,b.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:`ltr`}),{nonce:l}=(0,b.useContext)(Al),u=Nl(s,e.props?.ref??e?.ref);return(0,b.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m,direction:h}=c.current;if(t||a===!1||!s.current||!e||!u)return;let g=h===`rtl`,_=n===`left`?g?`right: ${p}`:`left: ${f}`:g?`left: ${f}`:`right: ${p}`,v=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let y=document.createElement(`style`);l&&(y.nonce=l);let b=i??document.head;return b.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),b.contains(y)&&b.removeChild(y)}},[t]),(0,G.jsx)(Pl,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:b.cloneElement(e,{ref:u})})}var Il=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=Ge(Ll),d=(0,b.useId)(),f=!0,p=(0,b.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,b.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),b.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,G.jsx)(Fl,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,G.jsx)(qe.Provider,{value:p,children:e})};function Ll(){return new Map}function Rl(e=!0){let t=(0,b.useContext)(qe);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,b.useId)();(0,b.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,b.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var zl=e=>e.key||``;function Bl(e){let t=[];return b.Children.forEach(e,e=>{(0,b.isValidElement)(e)&&t.push(e)}),t}var K=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=Rl(o),f=(0,b.useMemo)(()=>Bl(e),[e]),p=o&&!u?[]:f.map(zl),m=(0,b.useRef)(!0),h=(0,b.useRef)(f),g=Ge(()=>new Map),_=(0,b.useRef)(new Set),[v,y]=(0,b.useState)(f),[x,S]=(0,b.useState)(f);Ke(()=>{m.current=!1,h.current=f;for(let e=0;e<x.length;e++){let t=zl(x[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[x,p.length,p.join(`-`)]);let C=[];if(f!==v){let e=[...f];for(let t=0;t<x.length;t++){let n=x[t],r=zl(n);p.includes(r)||(e.splice(t,0,n),C.push(n))}return a===`wait`&&C.length&&(e=C),S(Bl(e)),y(f),null}let{forceRender:w}=(0,b.useContext)(We);return(0,G.jsx)(G.Fragment,{children:x.map(e=>{let v=zl(e),y=o&&!u?!1:f===x||p.includes(v);return(0,G.jsx)(Il,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(g.has(v))_.current.add(v),g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(w?.(),S(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},q=(0,b.createContext)({strict:!1}),Vl={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},Hl=!1;function Ul(){if(Hl)return;let e={};for(let t in Vl)e[t]={isEnabled:e=>Vl[t].some(t=>!!e[t])};Yo(e),Hl=!0}function Wl(){return Ul(),Xo()}function Gl(e){let t=Wl();for(let n in e)t[n]={...t[n],...e[n]};Yo(t)}var Kl=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function ql(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||Kl.has(e)}var Jl=c({default:()=>Yl}),Yl,Xl=o((()=>{throw Yl={},Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)})),Zl=e=>!ql(e);function Ql(e){typeof e==`function`&&(Zl=t=>t.startsWith(`on`)?!ql(t):e(t))}try{Ql((Xl(),d(Jl)).default)}catch{}function $l(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||ca(e[i])||(Zl(i)||n===!0&&ql(i)||!t&&!ql(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var eu=(0,b.createContext)({});function tu(e,t){if(Bo(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Lo(t)?t:void 0,animate:Lo(n)?n:void 0}}return e.inherit===!1?{}:t}function nu(e){let{initial:t,animate:n}=tu(e,(0,b.useContext)(eu));return(0,b.useMemo)(()=>({initial:t,animate:n}),[ru(t),ru(n)])}function ru(e){return Array.isArray(e)?e.join(` `):e}var iu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function au(e,t,n){for(let r in t)!ca(t[r])&&!As(r,n)&&(e[r]=t[r])}function ou({transformTemplate:e},t){return(0,b.useMemo)(()=>{let n=iu();return ws(n,t,e),Object.assign({},n.vars,n.style)},[t])}function su(e,t){let n=e.style||{},r={};return au(r,n,e),Object.assign(r,ou(e,t)),r}function cu(e,t){let n={},r=su(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var lu=()=>({...iu(),attrs:{}});function uu(e,t,n,r){let i=(0,b.useMemo)(()=>{let n=lu();return Rs(n,t,Bs(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};au(t,e.style,e),i.style={...t,...i.style}}return i}var du=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function fu(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(du.indexOf(e)>-1||/[A-Z]/u.test(e))}function pu(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??fu(e)?uu:cu)(t,r,i,e),c=$l(t,typeof e==`string`,a),l=e===b.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,b.useMemo)(()=>ca(u)?u.get():u,[u]);return(0,b.createElement)(e,{...l,children:d})}function mu({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:hu(n,r,i,e),renderState:t()}}function hu(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=Gc(a[e]);let{initial:o,animate:s}=e,c=Bo(e),l=Vo(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!Io(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=ta(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var gu=e=>(t,n)=>{let r=(0,b.useContext)(eu),i=(0,b.useContext)(qe),a=()=>mu(e,t,r,i);return n?a():Ge(a)},_u=gu({scrapeMotionValuesFromProps:js,createRenderState:iu}),vu=gu({scrapeMotionValuesFromProps:Hs,createRenderState:lu}),yu=Symbol.for(`motionComponentSymbol`);function bu(e,t,n){let r=(0,b.useRef)(n);(0,b.useInsertionEffect)(()=>{r.current=n});let i=(0,b.useRef)(null);return(0,b.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var xu=(0,b.createContext)({});function Su(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Cu(e,t,n,r,i,a){let{visualElement:o}=(0,b.useContext)(eu),s=(0,b.useContext)(q),c=(0,b.useContext)(qe),l=(0,b.useContext)(Al),u=l.reducedMotion,d=l.skipAnimations,f=(0,b.useRef)(null),p=(0,b.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,b.useContext)(xu);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&wu(f.current,n,i,h);let g=(0,b.useRef)(!1);(0,b.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[fa],v=(0,b.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return Ke(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,b.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function wu(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Tu(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Su(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function Tu(e){if(e)return e.options.allowProjection===!1?Tu(e.parent):e.projection}function Eu(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&Gl(r);let a=n?n===`svg`:fu(e),o=a?vu:_u;function s(n,s){let c,l={...(0,b.useContext)(Al),...n,layoutId:Du(n)},{isStatic:u}=l,d=nu(n),f=o(n,u);if(!u&&typeof window<`u`){Ou(l,r);let t=ku(l);c=t.MeasureLayout,d.visualElement=Cu(e,f,l,i,t.ProjectionNode,a)}return(0,G.jsxs)(eu.Provider,{value:d,children:[c&&d.visualElement?(0,G.jsx)(c,{visualElement:d.visualElement,...l}):null,pu(e,n,bu(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,b.forwardRef)(s);return c[yu]=e,c}function Du({layoutId:e}){let t=(0,b.useContext)(We).id;return t&&e!==void 0?t+`-`+e:e}function Ou(e,t){(0,b.useContext)(q).strict}function ku(e){let{drag:t,layout:n}=Wl();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Au(e,t){if(typeof Proxy>`u`)return Eu;let n=new Map,r=(n,r)=>Eu(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Eu(a,void 0,e,t)),n.get(a))})}var ju=(e,t)=>t.isSVG??fu(e)?new Us(t):new Ns(t,{allowProjection:e!==b.Fragment}),Mu=class extends $o{constructor(e){super(e),e.animationState||=Xs(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();Io(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Nu=0,Pu={animation:{Feature:Mu},exit:{Feature:class extends $o{constructor(){super(...arguments),this.id=Nu++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)){let n=na(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Fu(e){return{point:{x:e.pageX,y:e.pageY}}}var Iu=e=>t=>Xa(t)&&e(t,Fu(t));function Lu(e,t,n,r){return Vc(e,t,Iu(n),r)}var Ru=({current:e})=>e?e.ownerDocument.defaultView:null,zu=(e,t)=>Math.abs(e-t);function Bu(e,t){let n=zu(e.x,t.x),r=zu(e.y,t.y);return Math.sqrt(n**2+r**2)}var Vu=new Set([`auto`,`scroll`]),Hu=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Uu(this.lastRawMoveEventInfo,this.transformPagePoint));let e=Gu(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=Bu(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=Lt;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=Uu(t,this.transformPagePoint),V.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=Gu(e.type===`pointercancel`?this.lastMoveEventInfo:Uu(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Xa(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=Uu(Fu(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=Lt;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,Gu(s,this.history)),this.removeListeners=rt(Lu(this.contextWindow,`pointermove`,this.handlePointerMove),Lu(this.contextWindow,`pointerup`,this.handlePointerUp),Lu(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(Vu.has(e.overflowX)||Vu.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),V.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),It(this.updatePoint)}};function Uu(e,t){return t?{point:t(e.point)}:e}function Wu(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Gu({point:e},t){return{point:e,delta:Wu(e,qu(t)),offset:Wu(e,Ku(t)),velocity:Ju(t,.1)}}function Ku(e){return e[0]}function qu(e){return e[e.length-1]}function Ju(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=qu(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>ot(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>ot(t)*2&&(r=e[1]);let a=st(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Yu(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Ln(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Ln(n,e,r.max):Math.min(e,n)),e}function Xu(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function Zu(e,{top:t,left:n,bottom:r,right:i}){return{x:Xu(e.x,n,i),y:Xu(e.y,t,r)}}function Qu(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function $u(e,t){return{x:Qu(e.x,t.x),y:Qu(e.y,t.y)}}function ed(e,t){let n=.5,r=sc(e),i=sc(t);return i>r?n=it(t.min,t.max-r,e.min):r>i&&(n=it(e.min,e.max-i,t.min)),Xe(0,1,n)}function td(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var nd=.35;function rd(e=nd){return e===!1?e=0:e===!0&&(e=nd),{x:id(e,`left`,`right`),y:id(e,`top`,`bottom`)}}function id(e,t,n){return{min:ad(e,t),max:ad(e,n)}}function ad(e,t){return typeof e==`number`?e:e[t]||0}var od=new WeakMap,sd=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Po(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(Fu(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Ga(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),kc(e=>{let t=this.getAxisMotionValue(e).get()||0;if(fn.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=sc(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&V.update(()=>i(e,t),!1,!0),ua(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=dd(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&V.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new Hu(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Ru(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&V.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!ud(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=Yu(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Su(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=Zu(n.layoutBox,e):this.constraints=!1,this.elastic=rd(t),r!==this.constraints&&!Su(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&kc(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=td(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Su(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=bs(n,r.root,this.visualElement.getTransformPagePoint()),a=$u(r.layout.layoutBox,i);if(t){let e=t(ts(a));this.hasMutatedConstraints=!!e,e&&(a=es(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=kc(o=>{if(!ud(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return ua(this.visualElement,e),n.start(Xi(e,n,0,t,this.visualElement,!1))}stopAnimation(){kc(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){kc(t=>{let{drag:n}=this.getProps();if(!ud(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-Ln(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Su(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};kc(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=ed({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),kc(t=>{if(!ud(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(Ln(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;od.set(this.visualElement,this);let e=this.visualElement.current,t=Lu(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&eo(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();Su(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=ld(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),V.read(r);let o=Vc(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(kc(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=nd,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function cd(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function ld(e,t,n){let r=So(e,cd(n)),i=So(t,cd(n));return()=>{r(),i()}}function ud(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function dd(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var fd=class extends $o{constructor(e){super(e),this.removeGroupControls=nt,this.removeListeners=nt,this.controls=new sd(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||nt}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},pd=e=>(t,n)=>{e&&V.update(()=>e(t,n),!1,!0)},md=class extends $o{constructor(){super(...arguments),this.removePointerDownListener=nt}onPointerDown(e){this.session=new Hu(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ru(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:pd(e),onStart:pd(t),onMove:pd(n),onEnd:(e,t)=>{delete this.session,r&&V.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Lu(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},hd=!1,gd=class extends b.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),hd&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),qc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),hd=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||V.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),Va.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;hd=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function _d(e){let[t,n]=Rl(),r=(0,b.useContext)(We);return(0,G.jsx)(gd,{...e,layoutGroup:r,switchLayoutGroup:(0,b.useContext)(xu),isPresent:t,safeToRemove:n})}var vd={pan:{Feature:md},drag:{Feature:fd,ProjectionNode:kl,MeasureLayout:_d}};function yd(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&V.postRender(()=>i(t,Fu(t)))}var bd=class extends $o{mount(){let{current:e}=this.node;e&&(this.unmount=Ja(e,(e,t)=>(yd(this.node,t,`Start`),e=>yd(this.node,e,`End`))))}unmount(){}},xd=class extends $o{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=rt(Vc(this.node.current,`focus`,()=>this.onFocus()),Vc(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Sd(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&V.postRender(()=>i(t,Fu(t)))}var Cd=class extends $o{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=so(e,(e,t)=>(Sd(this.node,t,`Start`),(e,{success:t})=>Sd(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},J=new WeakMap,wd=new WeakMap,Td=e=>{let t=J.get(e.target);t&&t(e)},Ed=e=>{e.forEach(Td)};function Dd({root:e,...t}){let n=e||document;wd.has(n)||wd.set(n,{});let r=wd.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Ed,{root:e,...t})),r[i]}function Od(e,t,n){let r=Dd(t);return J.set(e,n),r.observe(e),()=>{J.delete(e),r.unobserve(e)}}var kd={some:0,all:1},Ad=class extends $o{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:kd[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=Od(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(jd(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function jd({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Md={inView:{Feature:Ad},tap:{Feature:Cd},focus:{Feature:xd},hover:{Feature:bd}},Nd={layout:{ProjectionNode:kl,MeasureLayout:_d}},Pd=Au({...Pu,...Md,...vd,...Nd},ju);function Fd(e){return typeof window>`u`?!1:e?ui():li()}var Id=50,Ld=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),Rd=()=>({time:0,x:Ld(),y:Ld()}),zd={x:{length:`Width`,position:`Left`},y:{length:`Height`,position:`Top`}};function Bd(e,t,n,r){let i=n[t],{length:a,position:o}=zd[t],s=i.current,c=n.time;i.current=Math.abs(e[`scroll${o}`]),i.scrollLength=e[`scroll${a}`]-e[`client${a}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=it(0,i.scrollLength,i.current);let l=r-c;i.velocity=l>Id?0:ct(i.current-s,l)}function Vd(e,t,n){Bd(e,`x`,t,n),Bd(e,`y`,t,n),t.time=n}function Hd(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(Ba(r))n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName===`svg`){let e=r.getBoundingClientRect();r=r.parentElement;let t=r.getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let i=null,a=r.parentNode;for(;!i;)a.tagName===`svg`&&(i=a),a=r.parentNode;r=i}else break;return n}var Ud={start:0,center:.5,end:1};function Wd(e,t,n=0){let r=0;if(e in Ud&&(e=Ud[e]),typeof e==`string`){let t=parseFloat(e);e.endsWith(`px`)?r=t:e.endsWith(`%`)?e=t/100:e.endsWith(`vw`)?r=t/100*document.documentElement.clientWidth:e.endsWith(`vh`)?r=t/100*document.documentElement.clientHeight:e=t}return typeof e==`number`&&(r=t*e),n+r}var Gd=[0,0];function Kd(e,t,n,r){let i=Array.isArray(e)?e:Gd,a=0,o=0;return typeof e==`number`?i=[e,e]:typeof e==`string`&&(e=e.trim(),i=e.includes(` `)?e.split(` `):[e,Ud[e]?e:`0`]),a=Wd(i[0],n,r),o=Wd(i[1],t),a-o}var qd={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Jd={x:0,y:0};function Yd(e){return`getBBox`in e&&e.tagName!==`svg`?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function Xd(e,t,n){let{offset:r=qd.All}=n,{target:i=e,axis:a=`y`}=n,o=a===`y`?`height`:`width`,s=i===e?Jd:Hd(i,e),c=i===e?{width:e.scrollWidth,height:e.scrollHeight}:Yd(i),l={width:e.clientWidth,height:e.clientHeight};t[a].offset.length=0;let u=!t[a].interpolate,d=r.length;for(let e=0;e<d;e++){let n=Kd(r[e],l[o],c[o],s[a]);!u&&n!==t[a].interpolatorOffsets[e]&&(u=!0),t[a].offset[e]=n}u&&(t[a].interpolate=vr(t[a].offset,br(r),{clamp:!1}),t[a].interpolatorOffsets=[...t[a].offset]),t[a].progress=Xe(0,1,t[a].interpolate(t[a].current))}function Zd(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function Qd(e,t,n,r={}){return{measure:t=>{Zd(e,r.target,n),Vd(e,n,t),(r.offset||r.target)&&Xd(e,n,r)},notify:()=>t(n)}}var $d=new WeakMap,ef=new WeakMap,tf=new WeakMap,nf=new WeakMap,rf=new WeakMap,af=e=>e===document.scrollingElement?window:e;function of(e,{container:t=document.scrollingElement,trackContentSize:n=!1,...r}={}){if(!t)return nt;let i=tf.get(t);i||(i=new Set,tf.set(t,i));let a=Qd(t,e,Rd(),r);if(i.add(a),!$d.has(t)){let e=()=>{for(let e of i)e.measure(Lt.timestamp);V.preUpdate(n)},n=()=>{for(let e of i)e.notify()},r=()=>V.read(e);$d.set(t,r);let a=af(t);window.addEventListener(`resize`,r),t!==document.documentElement&&ef.set(t,So(t,r)),a.addEventListener(`scroll`,r),r()}if(n&&!rf.has(t)){let e=$d.get(t),n={width:t.scrollWidth,height:t.scrollHeight};nf.set(t,n);let r=V.read(()=>{let r=t.scrollWidth,i=t.scrollHeight;(n.width!==r||n.height!==i)&&(e(),n.width=r,n.height=i)},!0);rf.set(t,r)}let o=$d.get(t);return V.read(o,!1,!0),()=>{It(o);let e=tf.get(t);if(!e||(e.delete(a),e.size))return;let n=$d.get(t);$d.delete(t),n&&(af(t).removeEventListener(`scroll`,n),ef.get(t)?.(),window.removeEventListener(`resize`,n));let r=rf.get(t);r&&(It(r),rf.delete(t)),nf.delete(t)}}var sf=[[qd.Enter,`entry`],[qd.Exit,`exit`],[qd.Any,`cover`],[qd.All,`contain`]],cf={start:0,end:1};function lf(e){let t=e.trim().split(/\s+/);if(t.length!==2)return;let n=cf[t[0]],r=cf[t[1]];if(!(n===void 0||r===void 0))return[n,r]}function uf(e){if(e.length!==2)return;let t=[];for(let n of e)if(Array.isArray(n))t.push(n);else if(typeof n==`string`){let e=lf(n);if(!e)return;t.push(e)}else return;return t}function df(e,t){let n=uf(e);if(!n)return!1;for(let e=0;e<2;e++){let r=n[e],i=t[e];if(r[0]!==i[0]||r[1]!==i[1])return!1}return!0}function ff(e){if(!e)return{rangeStart:`contain 0%`,rangeEnd:`contain 100%`};for(let[t,n]of sf)if(df(e,t))return{rangeStart:`${n} 0%`,rangeEnd:`${n} 100%`}}var pf=new Map;function mf(e){let t={value:0};return{currentTime:t,cancel:of(n=>{t.value=n[e.axis].progress*100},e)}}function hf({source:e,container:t,...n}){let{axis:r}=n;e&&(t=e);let i=pf.get(t);i||(i=new Map,pf.set(t,i));let a=n.target??`self`,o=i.get(a);o||(o={},i.set(a,o));let s=r+(n.offset??[]).join(`,`);return o[s]||(n.target&&Fd(n.target)?ff(n.offset)?o[s]=new ViewTimeline({subject:n.target,axis:r}):o[s]=mf({container:t,...n}):Fd()?o[s]=new ScrollTimeline({source:t,axis:r}):o[s]=mf({container:t,...n})),o[s]}function gf(e,t){let n=hf(t),r=t.target?ff(t.offset):void 0,i=t.target?Fd(t.target)&&!!r:Fd();return e.attachTimeline({timeline:i?n:void 0,...r&&i&&{rangeStart:r.rangeStart,rangeEnd:r.rangeEnd},observe:e=>(e.pause(),Co(t=>{e.time=e.iterationDuration*t},n))})}function _f(e){return e&&(e.target||e.offset)}function vf(e){return e.length===2}function yf(e,t){return vf(e)||_f(t)?of(n=>{e(n[t.axis].progress,n)},t):Co(e,hf(t))}function bf(e,{axis:t=`y`,container:n=document.scrollingElement,...r}={}){if(!n)return nt;let i={axis:t,container:n,...r};return typeof e==`function`?yf(e,i):gf(e,i)}var xf=()=>({scrollX:Bi(0),scrollY:Bi(0),scrollXProgress:Bi(0),scrollYProgress:Bi(0)}),Sf=e=>e?!e.current:!1;function Cf(e,t,n,r){return{factory:i=>{let a,o=()=>{if(Sf(n)||Sf(r)){Va.read(o);return}a=bf(i,{...t,axis:e,container:n?.current||void 0,target:r?.current||void 0})};return Va.read(o),()=>{Ha(o),a?.()}},times:[0,1],keyframes:[0,1],ease:e=>e,duration:1}}function wf(e,t){return typeof window>`u`?!1:e?ui()&&!!ff(t):li()}function Tf({container:e,target:t,...n}={}){let r=Ge(xf);wf(t,n.offset)&&(r.scrollXProgress.accelerate=Cf(`x`,n,e,t),r.scrollYProgress.accelerate=Cf(`y`,n,e,t));let i=(0,b.useRef)(null),a=(0,b.useRef)(!1),o=(0,b.useCallback)(()=>(i.current=bf((e,{x:t,y:n})=>{r.scrollX.set(t.current),r.scrollXProgress.set(t.progress),r.scrollY.set(n.current),r.scrollYProgress.set(n.progress)},{...n,container:e?.current||void 0,target:t?.current||void 0}),()=>{i.current?.()}),[e,t,JSON.stringify(n.offset)]);return Ke(()=>{if(a.current=!1,Sf(e)||Sf(t)){a.current=!0;return}else return o()},[o]),(0,b.useEffect)(()=>{if(!a.current)return;let n,r=()=>{let r=Sf(e),i=Sf(t);!r&&!i&&(n=o())};return Va.read(r),()=>{Ha(r),n?.()}},[o]),r}function Ef(e){let t=Ge(()=>Bi(e)),{isStatic:n}=(0,b.useContext)(Al);if(n){let[,n]=(0,b.useState)(e);(0,b.useEffect)(()=>t.on(`change`,n),[])}return t}function Df(e,t){let n=Ef(t()),r=()=>n.set(t());return r(),Ke(()=>{let t=()=>V.preRender(r,!1,!0),n=e.map(e=>e.on(`change`,t));return()=>{n.forEach(e=>e()),It(r)}}),n}function Of(e,...t){let n=e.length;function r(){let r=``;for(let i=0;i<n;i++){r+=e[i];let n=t[i];n&&(r+=ca(n)?n.get():n)}return r}return Df(t.filter(ca),r)}function kf(e){Ri.current=[],e();let t=Df(Ri.current,e);return Ri.current=void 0,t}function Af(e,t,n,r){if(typeof e==`function`)return kf(e);if(n!==void 0&&!Array.isArray(n)&&typeof t!=`function`)return Mf(e,t,n,r);let i=typeof t==`function`?t:To(t,n,r),a=Array.isArray(e)?jf(e,i):jf([e],([e])=>i(e)),o=Array.isArray(e)?void 0:e.accelerate;return o&&!o.isTransformed&&typeof t!=`function`&&Array.isArray(n)&&r?.clamp!==!1&&(a.accelerate={...o,times:t,keyframes:n,isTransformed:!0,...r?.ease?{ease:r.ease}:{}}),a}function jf(e,t){let n=Ge(()=>[]);return Df(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}function Mf(e,t,n,r){let i=Ge(()=>Object.keys(n)),a=Ge(()=>({}));for(let o of i)a[o]=Af(e,t,n[o],r);return a}function Nf(e,t={}){let{isStatic:n}=(0,b.useContext)(Al),r=()=>ca(e)?e.get():e;if(n)return Af(r);let i=Ef(r());return(0,b.useInsertionEffect)(()=>Eo(i,e,t),[i,JSON.stringify(t)]),i}function Pf(e,t={}){return Nf(e,{type:`spring`,...t})}var Ff={some:0,all:1};function If(e,t,{root:n,margin:r,amount:i=`some`}={}){let a=Ra(e),o=new WeakMap,s=new IntersectionObserver(e=>{e.forEach(e=>{let n=o.get(e.target);if(e.isIntersecting!==!!n)if(e.isIntersecting){let n=t(e.target,e);typeof n==`function`?o.set(e.target,n):s.unobserve(e.target)}else typeof n==`function`&&(n(e),o.delete(e.target))})},{root:n,rootMargin:r,threshold:typeof i==`number`?i:Ff[i]});return a.forEach(e=>s.observe(e)),()=>s.disconnect()}function Lf(e,{root:t,margin:n,amount:r,once:i=!1,initial:a=!1}={}){let[o,s]=(0,b.useState)(a);return(0,b.useEffect)(()=>{if(!e.current||i&&o)return;let a=()=>(s(!0),i?void 0:()=>s(!1)),c={root:t&&t.current||void 0,margin:n,amount:r};return If(e.current,a,c)},[t,e,n,i,r]),o}var Rf={personalInfo:{name:`Abhishek Bhat`,title:`Software Developer`,tagline:`Building mobile and web applications with Flutter, React, and modern backend technologies.`,shortBio:`I build mobile and web applications with Flutter, React, and modern backend technologies — from understanding requirements to implementing and shipping working products.`,longBio:`I am a software developer who builds practical, real-world applications. My expertise spans mobile development with Flutter and web development with React, along with robust backend and data integration using Supabase and PostgreSQL. Through independent projects and professional internship experience, I enjoy understanding requirements and turning them into working software.`,email:`abhishekbhat014@gmail.com`,resumeUrl:`https://drive.google.com/file/d/1T8LSajS9Ue1Gz7Pw8XIv8hyr1BpOtiyr/view?usp=sharing`,socialLinks:{github:`https://github.com/Abhishekbhat014`,linkedin:`https://linkedin.com/in/abhishekbhat014`,twitter:``}},skills:[{title:`Mobile`,skills:[{name:`Flutter`,level:95},{name:`Dart`,level:95},{name:`Android`,level:88}]},{title:`Web`,skills:[{name:`React`,level:90},{name:`JavaScript`,level:85},{name:`HTML`,level:90},{name:`CSS`,level:85}]},{title:`Backend & Data`,skills:[{name:`Supabase`,level:85},{name:`PostgreSQL`,level:80},{name:`REST APIs`,level:85}]},{title:`Tools`,skills:[{name:`Git`,level:90},{name:`GitHub`,level:90},{name:`Android Studio`,level:85},{name:`VS Code`,level:95}]}],projects:[{id:`regenboog-app`,title:`Regenboog India Foundation — Mobile Application`,subtitle:`Professional / Internship Project`,description:`A mobile application developed during my software development internship to support student sponsorship and education-related workflows.`,longDescription:`Developed during my internship at Verein Arunachala Rising Sun, this mobile application serves the Regenboog India Foundation by streamlining their student sponsorship and education management processes. Built from the ground up to production readiness, it features robust user workflows, secure backend integration, and a clean, accessible UI designed for real-world impact.`,category:`Mobile`,tags:[`Flutter`,`Dart`,`Supabase`,`Android`],githubUrl:``,liveUrl:``,features:[`Student information management`,`Sponsorship tracking`,`Fee receipt uploads`,`Announcements`,`Donor and sponsorship-related workflows`,`MIS and reporting`]},{id:`sankalup`,title:`SankalUP`,subtitle:`Learning Management System`,description:`A live Learning Management System (LMS) based application currently under development.`,longDescription:`SankalUP is a robust mobile learning platform designed to streamline course deliveries, student enrollment, and assignments. Currently active in development, it links students with teachers, offering a modern interface for viewing lectures, submitting papers, and tracking learning progress.`,category:`Mobile`,tags:[`Flutter`,`Dart`,`REST API`,`State Management`,`LMS`],githubUrl:``,liveUrl:`https://sankalup.example.com`,features:[`Clean interactive dashboard for course timelines`,`Online lecture streaming and material downloads`,`Progress charts mapping module completions`,`Real-time announcements and class push alerts`]},{id:`rempass`,title:`Rempass`,subtitle:`Offline Password Manager`,description:`An offline password manager app built with Zero-Trust architecture ensuring maximum security and privacy.`,longDescription:`Rempass is an offline-first password vault built with Flutter, designed under the Zero-Trust security model. It stores credentials locally inside an encrypted SQLite/Hive database. Keys are generated using cryptographic PBKDF2/AES algorithms, ensuring that credentials are never transmitted over the network or stored in plaintext, keeping user data entirely in their own control.`,category:`Mobile`,tags:[`Flutter`,`Dart`,`Zero-Trust`,`Cryptography`,`SQLite`,`Offline-First`],githubUrl:`https://github.com/Abhishekbhat014`,liveUrl:``,features:[`Offline-first vault requiring zero network permissions`,`Master password derivation using PBKDF2`,`AES-256 local database encryption`,`Random secure password generator and strength evaluator`]},{id:`3d-portfolio`,title:`3D Interactive Portfolio`,subtitle:`Creative Showcase Website`,description:`A high-performance personal portfolio featuring interactive 3D elements, custom canvas animations, and glassmorphic designs.`,longDescription:`A premium personal portfolio website engineered with React, Vite, and Framer Motion. Features a robust dark/light theme engine, a custom 3D sticky stack scroll effect for Education, interactive tilt components, and an automated configuration architecture. Employs optimized asset delivery and modular styles for butter-smooth scrolling.`,category:`Frontend`,tags:[`React`,`Vite`,`Framer Motion`,`Vanilla CSS`,`3D Canvas`,`HMR`],githubUrl:`https://github.com/Abhishekbhat014`,liveUrl:``,features:[`Custom 3D scroll-peel sticky stack mechanics`,`Tailwind-free responsive glassmorphic UI design`,`Dynamic CSS theme variables (HSL engine)`,`Interactive card perspective components`]}],experiences:[{id:`exp-regenboog`,role:`Software Development Intern`,company:`Verein Arunachala Rising Sun`,location:`Distributed (India & Switzerland)`,period:`Jan 2026 - Jun 2026`,current:!1,description:[`Engineered a comprehensive mobile application for Regenboog India Foundation to streamline student sponsorship and education management workflows.`,`Designed and implemented intuitive mobile UI screens and developed core business logic using Flutter and Dart.`,`Integrated robust backend functionality and data management using Supabase and REST APIs.`,`Collaborated in a distributed international environment, refining the application based on real-world stakeholder feedback.`]},{id:`exp-1`,role:`Freelance Flutter Developer`,company:`Self-Employed`,location:`Remote / India`,period:`2025 - Present`,current:!0,description:[`Designed and developed custom Flutter applications for diverse clients.`,`Handled end-to-end development, from UI/UX design to deployment on Google Play and Windows Store.`,`Integrated secure APIs, local databases (Hive/SQLite), and cloud storage solutions.`]},{id:`exp-2`,role:`Web Developer Intern`,company:`Self-Employed`,location:`Remote / India`,period:`2023 - 2025`,current:!1,description:[`Assisted in building responsive web applications using modern JavaScript frameworks.`,`Contributed to building internal tools to streamline data processing workflows.`,`Collaborated with clients to translate business requirements into functional code.`]}],education:[{id:`edu-1`,degree:`Bachelor of Science in Information Technology`,school:`University of Mumbai`,period:`2023 - 2026`,description:`Focusing on software engineering, object-oriented systems, databases, and application architectures.`,subjects:[`Java & Python`,`SQL/NoSQL`,`Software Eng.`,`Mobile Apps`,`UI/UX Design`]},{id:`edu-2`,degree:`HSC (Higher Secondary Certificate)`,school:`Maharashtra Board`,period:`2021 - 2023`,description:`Completed science stream studies with core focus on Mathematics and Computer Science.`,subjects:[`Mathematics`,`Physics`,`Chemistry`,`Computer Science`]},{id:`edu-3`,degree:`SSC (Secondary School Certificate)`,school:`Maharashtra Board`,period:`2020 - 2021`,description:`Completed secondary education with honors, establishing strong base in Science and Mathematics.`,subjects:[`Mathematics`,`Science`,`English`,`Social Sciences`]}]},zf=.035,Bf=({children:e,center:t=!1})=>(0,G.jsxs)(`span`,{className:`text-roll`,style:{position:`relative`,display:`inline-block`,overflow:`hidden`,verticalAlign:`middle`},"aria-label":e,children:[(0,G.jsx)(`span`,{style:{display:`inline-block`},children:e.split(``).map((n,r)=>{let i=t?zf*Math.abs(r-(e.length-1)/2):zf*r;return(0,G.jsx)(Pd.span,{style:{display:`inline-block`,whiteSpace:`pre`},variants:{initial:{y:0},hovered:{y:`-100%`}},transition:{ease:`easeInOut`,delay:i},children:n===` `?`\xA0`:n},`top-${r}`)})}),(0,G.jsx)(`span`,{style:{position:`absolute`,inset:0,display:`inline-block`},children:e.split(``).map((n,r)=>{let i=t?zf*Math.abs(r-(e.length-1)/2):zf*r;return(0,G.jsx)(Pd.span,{style:{display:`inline-block`,whiteSpace:`pre`},variants:{initial:{y:`100%`},hovered:{y:0}},transition:{ease:`easeInOut`,delay:i},children:n===` `?`\xA0`:n},`bot-${r}`)})})]}),Vf=[{label:`Home`,id:`hero`},{label:`About`,id:`journey`},{label:`Experience`,id:`experience`},{label:`Skills`,id:`tech-stack`},{label:`Work`,id:`works`},{label:`Have an Idea?`,id:`get-in-touch`}],Hf=b.memo(({theme:e,toggleTheme:t,onNavigateHome:n})=>{let[r,i]=(0,b.useState)(!1),[a,o]=(0,b.useState)(`hero`),[s,c]=(0,b.useState)(!1);(0,b.useEffect)(()=>{let e=()=>{i(window.scrollY>20)};window.addEventListener(`scroll`,e,{passive:!0});let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&o(e.target.id)})},{root:null,rootMargin:`-50% 0px -50% 0px`,threshold:0});return Vf.forEach(e=>{let n=document.getElementById(e.id);n&&t.observe(n)}),()=>{window.removeEventListener(`scroll`,e),t.disconnect()}},[]);let l=(0,b.useCallback)((e,t)=>{e.preventDefault(),c(!1),n&&n(),setTimeout(()=>{let e=document.getElementById(t);e&&window.scrollTo({top:e.offsetTop-70,behavior:`smooth`})},50)},[n]);return(0,G.jsxs)(`nav`,{className:`fixed-navbar ${r&&!s?`scrolled`:``} ${s?`menu-open`:``}`,children:[(0,G.jsxs)(`div`,{className:`container nav-container`,children:[(0,G.jsxs)(`a`,{href:`#hero`,className:`nav-logo`,onClick:e=>l(e,`hero`),children:[Rf.personalInfo.name.split(` `)[0],(0,G.jsx)(`span`,{className:`dot`,children:`.`})]}),(0,G.jsxs)(`div`,{className:`nav-links-desktop`,children:[Vf.map(e=>(0,G.jsx)(Pd.a,{href:`#${e.id}`,onClick:t=>l(t,e.id),className:`nav-link ${a===e.id?`active`:``}`,initial:`initial`,whileHover:`hovered`,children:(0,G.jsx)(Bf,{center:!0,children:e.label})},e.id)),(0,G.jsx)(Pd.a,{href:Rf.personalInfo.resumeUrl,target:`_blank`,rel:`noopener noreferrer`,className:`nav-link`,initial:`initial`,whileHover:`hovered`,children:(0,G.jsx)(Bf,{center:!0,children:`Resume`})})]}),(0,G.jsx)(`div`,{className:`nav-controls-mobile`,children:(0,G.jsx)(`button`,{onClick:()=>c(!s),className:`mobile-menu-btn`,"aria-label":`Toggle mobile menu`,"aria-expanded":s,children:s?(0,G.jsx)(Ve,{size:24}):(0,G.jsx)(je,{size:24})})})]}),(0,G.jsx)(`div`,{className:`mobile-menu-drawer ${s?`open`:``}`,children:(0,G.jsxs)(`div`,{className:`mobile-menu-links`,children:[Vf.map(e=>(0,G.jsx)(Pd.a,{href:`#${e.id}`,onClick:t=>l(t,e.id),className:`mobile-nav-link ${a===e.id?`active`:``}`,initial:`initial`,whileHover:`hovered`,children:(0,G.jsx)(Bf,{center:!0,children:e.label})},e.id)),(0,G.jsx)(Pd.a,{href:Rf.personalInfo.resumeUrl,target:`_blank`,rel:`noopener noreferrer`,className:`mobile-nav-link`,initial:`initial`,whileHover:`hovered`,children:(0,G.jsx)(Bf,{center:!0,children:`Resume`})})]})}),(0,G.jsx)(`style`,{children:`
        .fixed-navbar {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 1200px;
          z-index: 1000;
          padding: 1.5rem 2rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .fixed-navbar.scrolled {
          padding: 1rem 1.5rem;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background: var(--glass-bg);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid var(--glass-border);
          border-radius: var(--border-radius-lg);
          padding: 0.75rem 1.5rem;
          box-shadow: var(--shadow-sm);
        }

        .fixed-navbar.menu-open .nav-container {
          height: 80px;
          border-radius: var(--border-radius-lg);
          background: var(--glass-bg) !important;
          backdrop-filter: blur(8px) saturate(140%);
          -webkit-backdrop-filter: blur(8px) saturate(140%);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: none;
        }
        .fixed-navbar.scrolled .nav-link {
          color: hsl(var(--text-secondary)) !important;
        }
        .fixed-navbar.scrolled .nav-link:hover,
        .fixed-navbar.scrolled .nav-link.active {
          color: hsl(var(--text-primary)) !important;
        }
        .fixed-navbar.scrolled .nav-logo {
          color: hsl(var(--text-primary)) !important;
        }
        .nav-logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: hsl(var(--text-primary));
        }
        .nav-logo .dot {
          color: hsl(var(--primary));
        }
        .nav-links-desktop {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: hsl(var(--text-secondary));
          transition: color var(--transition-fast);
          position: relative;
          padding: 0.5rem 0.25rem;
        }
        .nav-link:hover {
          color: hsl(var(--text-primary));
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%);
          transition: width 0.3s ease;
          border-radius: var(--border-radius-full);
        }
        .nav-link.active {
          color: hsl(var(--text-primary));
          font-weight: 600;
        }
        .nav-link.active::after {
          width: 100%;
        }
        .theme-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius-sm);
          border: 1px solid hsl(var(--border));
          color: hsl(var(--text-secondary));
          transition: all var(--transition-fast);
        }
        .theme-toggle-btn:hover {
          color: hsl(var(--text-primary));
          border-color: hsl(var(--primary));
          background: hsl(var(--card-bg));
          transform: scale(1.05);
        }
        .nav-controls-mobile {
          display: none;
          align-items: center;
          gap: 1rem;
        }
        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius-sm);
          border: 1px solid hsl(var(--border));
          color: hsl(var(--text-primary));
          background: hsl(var(--card-bg) / 0.55);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: background-color var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
        }
        .mobile-menu-btn:hover {
          border-color: hsl(var(--primary));
          transform: scale(1.03);
        }
        .mobile-menu-drawer {
          position: fixed;
          top: 80px;
          left: 0;
          width: 100%;
          height: 0;
          background: var(--glass-bg);
          backdrop-filter: blur(8px) saturate(140%);
          -webkit-backdrop-filter: blur(8px) saturate(140%);
          overflow: hidden;
          transition: all 0.3s ease;
          border-bottom: 0px solid var(--glass-border);
          z-index: 999;
        }
        .fixed-navbar.scrolled .mobile-menu-drawer {
          top: 64px;
        }
        .mobile-menu-drawer.open {
          height: calc(100vh - 80px);
          border-bottom: 1px solid var(--glass-border);
        }
        .fixed-navbar.scrolled .mobile-menu-drawer.open {
          height: calc(100vh - 64px);
        }
        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 3rem 0;
          gap: 2rem;
        }
        .mobile-nav-link {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 600;
          color: hsl(var(--text-secondary));
          transition: color var(--transition-fast);
        }
        .mobile-nav-link.active {
          color: hsl(var(--primary));
        }
        @media (max-width: 968px) {
          .fixed-navbar {
            left: 0;
            transform: none;
            height: 64px;
            background: hsl(var(--bg-color)) !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            border-bottom: 1px solid var(--border);
            box-shadow: var(--shadow-sm);
          }
          .fixed-navbar.menu-open {
            height: 64px;
          }
          .nav-container {
            min-height: 64px;
            padding: 0 1rem;
          }
          .nav-logo {
            font-size: 1.35rem;
          }
          .nav-links-desktop {
            display: none;
          }
          .nav-controls-mobile {
            display: flex;
          }
          .mobile-menu-drawer,
          .fixed-navbar.scrolled .mobile-menu-drawer {
            top: 64px;
            right: 0;
            left: auto;
            width: 280px;
            max-width: 80vw;
            height: calc(100vh - 64px);
            height: calc(100dvh - 64px);
            transform: translateX(100%);
            background: hsl(var(--bg-color)) !important;
            border-left: 1px solid var(--border);
            box-shadow: -10px 0 30px rgba(0,0,0,0.1);
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            overflow-y: auto;
          }
          .mobile-menu-drawer.open,
          .fixed-navbar.scrolled .mobile-menu-drawer.open {
            transform: translateX(0);
          }
          .mobile-menu-links {
            padding: 2.5rem 1.5rem;
            gap: 1.5rem;
            align-items: flex-start;
          }
          .mobile-nav-link {
            font-size: clamp(0.95rem, 5vw, 1.25rem);
            line-height: 1.2;
          }
        }
      `})]})}),Uf=({size:e=20,...t})=>(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:e,height:e,stroke:`currentColor`,strokeWidth:`2`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`,...t,children:[(0,G.jsx)(`path`,{d:`M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4`}),(0,G.jsx)(`path`,{d:`M9 18c-4.51 2-5-2-7-2`})]}),Wf=({size:e=20,...t})=>(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:e,height:e,stroke:`currentColor`,strokeWidth:`2`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`,...t,children:[(0,G.jsx)(`path`,{d:`M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z`}),(0,G.jsx)(`rect`,{x:`2`,y:`9`,width:`4`,height:`12`}),(0,G.jsx)(`circle`,{cx:`4`,cy:`4`,r:`2`})]}),Gf=({size:e=20,...t})=>(0,G.jsx)(`svg`,{viewBox:`0 0 24 24`,width:e,height:e,stroke:`currentColor`,strokeWidth:`2`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`,...t,children:(0,G.jsx)(`path`,{d:`M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z`})}),Kf=`#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2 resolution;
uniform vec3 u_color; // The color uniform

#define FC gl_FragCoord.xy
#define R resolution
#define T (time+660.)

float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);return mix(mix(rnd(i),rnd(i+vec2(1,0)),u.x),mix(rnd(i+vec2(0,1)),rnd(i+1.),u.x),u.y);}
float fbm(vec2 p){float t=.0,a=1.;for(int i=0;i<5;i++){t+=a*noise(p);p*=mat2(1,-1.2,.2,1.2)*2.;a*=.5;}return t;}

void main(){
  vec2 uv=(FC-.5*R)/R.y;
  vec3 col=vec3(1);
  uv.x+=.25;
  uv*=vec2(2,1);

  float n=fbm(uv*.28-vec2(T*.01,0));
  n=noise(uv*3.+n*2.);

  col.r-=fbm(uv+vec2(0,T*.015)+n);
  col.g-=fbm(uv*1.003+vec2(0,T*.015)+n+.003);
  col.b-=fbm(uv*1.006+vec2(0,T*.015)+n+.006);

  // Tint the brightest parts of the noise with the color provided by the user.
  col=mix(col, u_color, dot(col,vec3(.21,.71,.07)));

  col=mix(vec3(.08),col,min(time*.1,1.));
  col=clamp(col,.08,1.);
  O=vec4(col,1);
}`,qf=class{vertexSrc=`#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;vertices=[-1,1,-1,-1,1,1,1,-1];constructor(e,t){this.canvas=e,this.gl=e.getContext(`webgl2`),this.program=null,this.vs=null,this.fs=null,this.buffer=null,this.color=[.5,.5,.5],this.setup(t),this.init()}updateColor(e){this.color=e}updateScale(){let e=Math.max(1,window.devicePixelRatio),t=this.canvas.parentElement?this.canvas.parentElement.clientWidth:window.innerWidth,n=this.canvas.parentElement?this.canvas.parentElement.clientHeight:window.innerHeight;this.canvas.width=t*e,this.canvas.height=n*e,this.gl.viewport(0,0,this.canvas.width,this.canvas.height)}compile(e,t){let n=this.gl;n.shaderSource(e,t),n.compileShader(e),n.getShaderParameter(e,n.COMPILE_STATUS)||console.error(`Shader compilation error: ${n.getShaderInfoLog(e)}`)}reset(){let{gl:e,program:t,vs:n,fs:r}=this;t&&(n&&(e.detachShader(t,n),e.deleteShader(n)),r&&(e.detachShader(t,r),e.deleteShader(r)),e.deleteProgram(t),this.program=null)}setup(e){let t=this.gl;this.vs=t.createShader(t.VERTEX_SHADER),this.fs=t.createShader(t.FRAGMENT_SHADER);let n=t.createProgram();!this.vs||!this.fs||!n||(this.compile(this.vs,this.vertexSrc),this.compile(this.fs,e),this.program=n,t.attachShader(this.program,this.vs),t.attachShader(this.program,this.fs),t.linkProgram(this.program),t.getProgramParameter(this.program,t.LINK_STATUS)||console.error(`Program linking error: ${t.getProgramInfoLog(this.program)}`))}init(){let{gl:e,program:t}=this;if(!t)return;this.buffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.bufferData(e.ARRAY_BUFFER,new Float32Array(this.vertices),e.STATIC_DRAW);let n=e.getAttribLocation(t,`position`);e.enableVertexAttribArray(n),e.vertexAttribPointer(n,2,e.FLOAT,!1,0,0),Object.assign(t,{resolution:e.getUniformLocation(t,`resolution`),time:e.getUniformLocation(t,`time`),u_color:e.getUniformLocation(t,`u_color`)})}render(e=0){let{gl:t,program:n,buffer:r,canvas:i}=this;!n||!t.isProgram(n)||(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),t.useProgram(n),t.bindBuffer(t.ARRAY_BUFFER,r),t.uniform2f(n.resolution,i.width,i.height),t.uniform1f(n.time,e*.001),t.uniform3fv(n.u_color,this.color),t.drawArrays(t.TRIANGLE_STRIP,0,4))}},Jf=e=>{let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:null},Yf=({smokeColor:e=`#FF5722`})=>{let t=(0,b.useRef)(null),n=(0,b.useRef)(null);return(0,b.useEffect)(()=>{if(!t.current)return;let e=t.current,r=new qf(e,Kf);n.current=r;let i=()=>r.updateScale();i(),window.addEventListener(`resize`,i);let a=null,o=!1,s=e=>{o&&(r.render(e),a=requestAnimationFrame(s))},c=new IntersectionObserver(([e])=>{let t=o;o=e.isIntersecting,o&&!t?(cancelAnimationFrame(a),a=requestAnimationFrame(s)):!o&&t&&(cancelAnimationFrame(a),a=null)},{threshold:.01});return c.observe(e),()=>{window.removeEventListener(`resize`,i),cancelAnimationFrame(a),c.disconnect(),r.reset()}},[]),(0,b.useEffect)(()=>{let t=n.current;if(t){let n=Jf(e);n&&t.updateColor(n)}},[e]),(0,G.jsx)(`div`,{className:`bg-canvas-container`,children:(0,G.jsx)(`canvas`,{ref:t,style:{width:`100%`,height:`100%`,display:`block`}})})},Xf=`linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)`,Zf={INITIAL_DURATION:1200,INITIAL_X_OFFSET:70,INITIAL_Y_OFFSET:60,DEVICE_BETA_OFFSET:20,ENTER_TRANSITION_MS:180},Qf=(e,t=0,n=100)=>Math.min(Math.max(e,t),n),$f=(e,t=3)=>parseFloat(e.toFixed(t)),ep=(e,t,n,r,i)=>$f(r+(i-r)*(e-t)/(n-t)),tp=`pc-keyframes`;if(typeof document<`u`&&!document.getElementById(tp)){let e=document.createElement(`style`);e.id=tp,e.textContent=`
    @keyframes pc-holo-bg {
      0% { background-position: 0 var(--background-y), 0 0, center; }
      100% { background-position: 0 var(--background-y), 90% 90%, center; }
    }
  `,document.head.appendChild(e)}var np=b.memo(({avatarUrl:e=`<Placeholder for avatar URL>`,backAvatarUrl:t,iconUrl:n=`<Placeholder for icon URL>`,grainUrl:r=`<Placeholder for grain URL>`,innerGradient:i,behindGlowEnabled:a=!0,behindGlowColor:o,behindGlowSize:s,className:c=``,enableTilt:l=!0,enableMobileTilt:u=!1,mobileTiltSensitivity:d=5,miniAvatarUrl:f,name:p=`Javi A. Torres`,title:m=`Software Engineer`,handle:h=`javicodes`,status:g=`Online`,contactText:_=`Contact`,showUserInfo:v=!0,onContactClick:y})=>{let[x,S]=(0,b.useState)(!1),C=(0,b.useRef)(!1);C.current=x;let w=(0,b.useRef)(null),T=(0,b.useRef)(null),E=(0,b.useRef)(null),D=(0,b.useRef)(null),O=(0,b.useMemo)(()=>{if(!l)return null;let e=null,t=!1,n=0,r=0,i=0,a=0,o=0,s=0,c=(e,t)=>{let n=T.current,r=w.current;if(!n||!r)return;let i=n.clientWidth||1,a=n.clientHeight||1,o=Qf(100/i*e),s=Qf(100/a*t),c=o-50,l=s-50,u=C.current?-c:c,d={"--pointer-x":`${o}%`,"--pointer-y":`${s}%`,"--background-x":`${ep(o,0,100,35,65)}%`,"--background-y":`${ep(s,0,100,35,65)}%`,"--pointer-from-center":`${Qf(Math.hypot(s-50,o-50)/50,0,1)}`,"--pointer-from-top":`${s/100}`,"--pointer-from-left":`${o/100}`,"--rotate-x":`${$f(-(u/5))}deg`,"--rotate-y":`${$f(l/4)}deg`};for(let[e,t]of Object.entries(d))r.style.setProperty(e,t)},u=l=>{if(!t)return;n===0&&(n=l);let d=(l-n)/1e3;n=l;let f=l<s?.6:.14,p=1-Math.exp(-d/f);r+=(a-r)*p,i+=(o-i)*p,c(r,i),Math.abs(a-r)>.05||Math.abs(o-i)>.05||document.hasFocus()?e=requestAnimationFrame(u):(t=!1,n=0,e&&=(cancelAnimationFrame(e),null))},d=()=>{t||(t=!0,n=0,e=requestAnimationFrame(u))};return{setImmediate(e,t){r=e,i=t,c(r,i)},setTarget(e,t){a=e,o=t,d()},toCenter(){let e=T.current;e&&this.setTarget(e.clientWidth/2,e.clientHeight/2)},beginInitial(e){s=performance.now()+e,d()},getCurrent(){return{x:r,y:i,tx:a,ty:o}},cancel(){e&&cancelAnimationFrame(e),e=null,t=!1,n=0}}},[l]),k=(e,t)=>{let n=t.getBoundingClientRect();return{x:e.clientX-n.left,y:e.clientY-n.top}},A=(0,b.useCallback)(e=>{let t=T.current;if(!t||!O)return;let{x:n,y:r}=k(e,t);O.setTarget(n,r)},[O]),j=(0,b.useCallback)(e=>{let t=T.current;if(!t||!O)return;t.classList.add(`active`),t.classList.add(`entering`),E.current&&window.clearTimeout(E.current),E.current=window.setTimeout(()=>{t.classList.remove(`entering`)},Zf.ENTER_TRANSITION_MS);let{x:n,y:r}=k(e,t);O.setTarget(n,r)},[O]),M=(0,b.useCallback)(()=>{let e=T.current;if(!e||!O)return;O.toCenter();let t=()=>{let{x:n,y:r,tx:i,ty:a}=O.getCurrent();Math.hypot(i-n,a-r)<.6?(e.classList.remove(`active`),D.current=null):D.current=requestAnimationFrame(t)};D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(t)},[O]),ee=(0,b.useCallback)(e=>{let t=T.current;if(!t||!O)return;let{beta:n,gamma:r}=e;if(n==null||r==null)return;let i=t.clientWidth/2,a=t.clientHeight/2,o=Qf(i+r*d,0,t.clientWidth),s=Qf(a+(n-Zf.DEVICE_BETA_OFFSET)*d,0,t.clientHeight);O.setTarget(o,s)},[O,d]);(0,b.useEffect)(()=>{if(!l||!O)return;let e=T.current;if(!e)return;let t=A,n=j,r=M,i=ee;e.addEventListener(`pointerenter`,n),e.addEventListener(`pointermove`,t),e.addEventListener(`pointerleave`,r);let a=()=>{if(!u||location.protocol!==`https:`)return;let e=window.DeviceMotionEvent;e&&typeof e.requestPermission==`function`?e.requestPermission().then(e=>{e===`granted`&&window.addEventListener(`deviceorientation`,i)}).catch(console.error):window.addEventListener(`deviceorientation`,i)};e.addEventListener(`click`,a);let o=(e.clientWidth||0)-Zf.INITIAL_X_OFFSET,s=Zf.INITIAL_Y_OFFSET;return O.setImmediate(o,s),O.toCenter(),O.beginInitial(Zf.INITIAL_DURATION),()=>{e.removeEventListener(`pointerenter`,n),e.removeEventListener(`pointermove`,t),e.removeEventListener(`pointerleave`,r),e.removeEventListener(`click`,a),window.removeEventListener(`deviceorientation`,i),E.current&&window.clearTimeout(E.current),D.current&&cancelAnimationFrame(D.current),O.cancel(),e.classList.remove(`entering`)}},[l,u,O,A,j,M,ee]);let N=`30px`,te=(0,b.useMemo)(()=>({"--icon":n?`url(${n})`:`none`,"--grain":r?`url(${r})`:`none`,"--inner-gradient":i??Xf,"--behind-glow-color":o??`rgba(125, 190, 255, 0.67)`,"--behind-glow-size":s??`50%`,"--pointer-x":`50%`,"--pointer-y":`50%`,"--pointer-from-center":`0`,"--pointer-from-top":`0.5`,"--pointer-from-left":`0.5`,"--card-opacity":`0`,"--rotate-x":`0deg`,"--rotate-y":`0deg`,"--background-x":`50%`,"--background-y":`50%`,"--card-radius":N,"--sunpillar-1":`hsl(2, 100%, 73%)`,"--sunpillar-2":`hsl(53, 100%, 69%)`,"--sunpillar-3":`hsl(93, 100%, 69%)`,"--sunpillar-4":`hsl(176, 100%, 76%)`,"--sunpillar-5":`hsl(228, 100%, 74%)`,"--sunpillar-6":`hsl(283, 100%, 73%)`,"--sunpillar-clr-1":`var(--sunpillar-1)`,"--sunpillar-clr-2":`var(--sunpillar-2)`,"--sunpillar-clr-3":`var(--sunpillar-3)`,"--sunpillar-clr-4":`var(--sunpillar-4)`,"--sunpillar-clr-5":`var(--sunpillar-5)`,"--sunpillar-clr-6":`var(--sunpillar-6)`}),[n,r,i,o,s,N]),P=!!t,F=(0,b.useCallback)(e=>{if(!P||e.target.closest(`.pc-btn`))return;let t=T.current?.querySelector(`.pc-section`);if(t){t.style.transition=`transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)`;let e=!x;S(e);let n=w.current,r=n.style.getPropertyValue(`--rotate-x`)||`0deg`,i=n.style.getPropertyValue(`--rotate-y`)||`0deg`;t.style.transform=`translateZ(0) rotateX(${i}) rotateY(calc(${e?`180deg`:`0deg`} + ${r}))`,setTimeout(()=>{T.current?.classList.contains(`active`)&&t&&(t.style.transition=`none`)},800)}},[x,P]),ne=(0,b.useCallback)(e=>{e.stopPropagation(),y?.()},[y]),re={maskImage:`var(--icon)`,maskMode:`luminance`,maskRepeat:`repeat`,maskSize:`150%`,maskPosition:`top calc(200% - (var(--background-y) * 5)) left calc(100% - var(--background-x))`,filter:`brightness(0.66) contrast(1.33) saturate(0.33) opacity(0.5)`,animation:`pc-holo-bg 18s linear infinite`,animationPlayState:`running`,mixBlendMode:`color-dodge`,"--space":`5%`,"--angle":`-45deg`,transform:`translate3d(0, 0, 1px)`,overflow:`hidden`,zIndex:3,background:`transparent`,backgroundSize:`cover`,backgroundPosition:`center`,backgroundImage:`
      repeating-linear-gradient(
        0deg,
        var(--sunpillar-clr-1) calc(var(--space) * 1),
        var(--sunpillar-clr-2) calc(var(--space) * 2),
        var(--sunpillar-clr-3) calc(var(--space) * 3),
        var(--sunpillar-clr-4) calc(var(--space) * 4),
        var(--sunpillar-clr-5) calc(var(--space) * 5),
        var(--sunpillar-clr-6) calc(var(--space) * 6),
        var(--sunpillar-clr-1) calc(var(--space) * 7)
      ),
      repeating-linear-gradient(
        var(--angle),
        #0e152e 0%,
        hsl(180, 10%, 60%) 3.8%,
        hsl(180, 29%, 66%) 4.5%,
        hsl(180, 10%, 60%) 5.2%,
        #0e152e 10%,
        #0e152e 12%
      ),
      radial-gradient(
        farthest-corner circle at var(--pointer-x) var(--pointer-y),
        hsla(0, 0%, 0%, 0.1) 12%,
        hsla(0, 0%, 0%, 0.15) 20%,
        hsla(0, 0%, 0%, 0.25) 120%
      )
    `.replace(/\s+/g,` `),gridArea:`overlap`,borderRadius:N,pointerEvents:`none`},ie={transform:`translate3d(0, 0, 1.1px)`,overflow:`hidden`,backgroundImage:`radial-gradient(
      farthest-corner circle at var(--pointer-x) var(--pointer-y),
      hsl(248, 25%, 80%) 12%,
      hsla(207, 40%, 30%, 0.8) 90%
    )`,mixBlendMode:`overlay`,filter:`brightness(0.8) contrast(1.2)`,zIndex:4,gridArea:`overlap`,borderRadius:N,pointerEvents:`none`},ae=(e,t=!1)=>(0,G.jsxs)(`div`,{className:`pc-inner pc-face ${t?`pc-back`:`pc-front`}`,children:[(0,G.jsx)(`div`,{style:re}),(0,G.jsx)(`div`,{style:ie}),(0,G.jsxs)(`div`,{className:`pc-avatar-content`,children:[(0,G.jsx)(`img`,{className:`pc-avatar`,src:e,alt:`${p||`User`} avatar`,loading:`lazy`,onError:e=>{e.target.style.display=`none`}}),v&&(0,G.jsxs)(`div`,{className:`pc-ui`,children:[(0,G.jsxs)(`div`,{className:`pc-user-info`,children:[(0,G.jsx)(`div`,{className:`pc-mini-avatar-wrap`,children:(0,G.jsx)(`img`,{className:`pc-mini-avatar`,src:f||e,alt:`${p||`User`} mini avatar`,loading:`lazy`,onError:t=>{t.target.style.opacity=`0.5`,t.target.src=e}})}),(0,G.jsxs)(`div`,{className:`pc-text-details`,children:[(0,G.jsxs)(`div`,{className:`pc-handle`,children:[`@`,h]}),(0,G.jsx)(`div`,{className:`pc-status`,children:g})]})]}),(0,G.jsx)(`button`,{className:`pc-btn`,onClick:ne,type:`button`,"aria-label":`Contact ${p||`user`}`,children:_})]})]}),(0,G.jsx)(`div`,{className:`pc-details-content`,children:(0,G.jsxs)(`div`,{className:`pc-title-wrap`,children:[(0,G.jsx)(`h3`,{className:`pc-name`,children:p}),(0,G.jsx)(`p`,{className:`pc-job-title`,children:m})]})})]});return(0,G.jsxs)(`div`,{ref:w,className:`pc-wrap ${c}`.trim(),style:te,children:[(0,G.jsx)(`style`,{children:`
        .pc-wrap {
          position: relative;
          touch-action: none;
          perspective: 1000px;
          transform: translate3d(0, 0, 0.1px);
        }
        .pc-glow {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 0;
          pointer-events: none;
          transition: opacity 0.2s ease-out;
          filter: blur(50px) saturate(1.1);
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }
        .pc-shell {
          position: relative;
          z-index: 1;
          cursor: ${P?`pointer`:`default`};
        }
        .pc-section {
          display: grid;
          position: relative;
          overflow: visible;
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          box-shadow: rgba(0, 0, 0, 0.8) calc((var(--pointer-from-left) * 10px) - 3px) calc((var(--pointer-from-top) * 20px) - 6px) 20px -5px;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateZ(0) rotateX(0deg) rotateY(${x?`180deg`:`0deg`});
          background: rgba(0, 0, 0, 0.9);
          height: 80svh;
          max-height: 540px;
          aspect-ratio: 0.718;
        }
        .pc-face {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: var(--card-radius);
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }
        .pc-front {
          z-index: 2;
          transform: rotateY(0deg);
        }
        .pc-back {
          z-index: 1;
          transform: rotateY(180deg);
        }
        .pc-inner {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: var(--inner-gradient);
          background-color: rgba(0, 0, 0, 0.9);
          border-radius: var(--card-radius);
          display: grid;
          grid-template-areas: 'overlap';
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }
        .pc-avatar-content {
          grid-area: overlap;
          overflow: visible;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translateZ(2px);
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          pointer-events: none;
        }
        .pc-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          left: 0;
          top: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          will-change: transform;
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          transform-origin: 50% 50%;
          transform: translate3d(0, 0, 0px) scale(1);
          border-radius: var(--card-radius);
        }
        .pc-shell:hover .pc-avatar,
        .pc-shell.active .pc-avatar {
          transition: transform 120ms ease-out;
          transform: translate3d(calc((var(--pointer-from-left) - 0.5) * 20px), calc((var(--pointer-from-top) - 0.5) * 20px), 40px) scale(1.04);
        }
        .pc-ui {
          position: absolute;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          pointer-events: none; /* Block pointer click events when hidden */
          background: rgba(255, 255, 255, 0.1);
          padding: 12px 14px;
          --ui-inset: 20px;
          --ui-radius-bias: 6px;
          bottom: var(--ui-inset);
          left: var(--ui-inset);
          right: var(--ui-inset);
          border-radius: calc(max(0px, var(--card-radius) - var(--ui-inset) + var(--ui-radius-bias)));
          opacity: 0; /* Hidden by default */
          transform: translateY(12px) translate3d(0, 0, 0px);
          transition: opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .pc-shell:hover .pc-ui,
        .pc-shell.active .pc-ui {
          opacity: 1;
          transform: translateY(0) translate3d(calc((var(--pointer-from-left) - 0.5) * 10px), calc((var(--pointer-from-top) - 0.5) * 10px), 95px);
          pointer-events: auto; /* Enable clicks on contact button when visible */
        }
        .pc-user-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .pc-mini-avatar-wrap {
          border-radius: 9999px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          flex-shrink: 0;
          width: 48px;
          height: 48px;
        }
        .pc-mini-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          display: block;
        }
        .pc-text-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.25rem;
        }
        .pc-handle {
          font-family: var(--font-mono);
          font-size: 0.775rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1;
        }
        .pc-status {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1;
        }
        .pc-btn {
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          cursor: pointer;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          transition: all 0.2s ease-out;
          background: transparent;
        }
        .pc-btn:hover {
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-1px);
        }
        .pc-details-content {
          grid-area: overlap;
          max-height: 100%;
          overflow: hidden;
          text-align: center;
          position: relative;
          z-index: 5;
          pointer-events: none;
          mix-blend-mode: luminosity;
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          transform: translate3d(0, 0, 0px);
        }
        .pc-shell:hover .pc-details-content,
        .pc-shell.active .pc-details-content {
          transition: transform 120ms ease-out;
          transform: translate3d(calc((var(--pointer-from-left) - 0.5) * -20px), calc((var(--pointer-from-top) - 0.5) * -20px), 70px);
        }
        .pc-title-wrap {
          width: 100%;
          position: absolute;
          display: flex;
          flex-direction: column;
          top: 3em;
        }
        .pc-name {
          font-weight: 600;
          margin: 0;
          font-size: min(5svh, 3em);
          background-image: linear-gradient(to bottom, #ffffff, #ea580c);
          background-size: 1em 1.5em;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          display: block;
          pointer-events: auto;
        }
        .pc-job-title {
          font-family: var(--font-accent);
          font-style: italic;
          font-weight: 500;
          white-space: nowrap;
          margin: 0 auto;
          position: relative;
          top: -6px;
          font-size: 18px;
          background-image: linear-gradient(to bottom, #ffffff, #f97316);
          background-size: 1em 1.5em;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          display: block;
          pointer-events: auto;
        }
        @media (max-width: 768px) {
          .pc-section {
            height: 380px;
            width: 275px;
            max-height: none;
            max-width: none;
          }
          .pc-name {
            font-size: 1.8rem;
          }
          .pc-job-title {
            font-size: 14px;
            top: -3px;
          }
          .pc-ui {
            padding: 8px 10px;
          }
        }
      `}),a&&(0,G.jsx)(`div`,{className:`pc-glow`,style:{background:`radial-gradient(circle at var(--pointer-x) var(--pointer-y), var(--behind-glow-color) 0%, transparent var(--behind-glow-size))`,opacity:`calc(0.8 * var(--card-opacity))`}}),(0,G.jsx)(`div`,{ref:T,className:`pc-shell`,onClick:F,children:(0,G.jsxs)(`section`,{className:`pc-section`,style:{borderRadius:N,backgroundBlendMode:`color-dodge, normal, normal, normal`},onMouseEnter:e=>{e.currentTarget.style.transition=`none`,e.currentTarget.style.transform=`translateZ(0) rotateX(var(--rotate-y)) rotateY(calc(${C.current?`180deg`:`0deg`} + var(--rotate-x)))`,w.current.style.setProperty(`--card-opacity`,`1`)},onMouseLeave:e=>{T.current?.classList.contains(`entering`)?e.currentTarget.style.transition=`transform 180ms ease-out`:e.currentTarget.style.transition=`transform 1s ease`,e.currentTarget.style.transform=`translateZ(0) rotateX(0deg) rotateY(${C.current?`180deg`:`0deg`})`,w.current.style.setProperty(`--card-opacity`,`0`)},children:[ae(e,!1),P&&ae(t,!0)]})})]})}),rp=({children:e,containerClassName:t=``,textClassName:n=``,enableBlur:r=!1,baseOpacity:i=0,baseRotation:a=0,blurStrength:o=0,staggerDelay:s=.03,threshold:c=.3,duration:l=.6,springConfig:u={damping:30,stiffness:120,mass:.8},size:d=`md`,align:f=`left`,variant:p=`default`})=>{let m=(0,b.useRef)(null),h=Lf(m,{amount:c,once:!1}),{scrollYProgress:g}=Tf({target:m,offset:[`start end`,`end start`]}),_=Af(g,[0,.5,1],[a,0,-a]),v=(0,b.useMemo)(()=>(typeof e==`string`?e:``).split(/(\s+)/).map((e,t)=>({value:e,isSpace:e.match(/^\s+$/)&&e.length>0,originalIndex:t})).filter(e=>e.value.length>0),[e]),y={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:s,delayChildren:.05}}},x={hidden:{opacity:i,y:20},visible:{opacity:1,y:0,transition:{...u,duration:l}}};return(0,G.jsxs)(Pd.div,{ref:m,style:{rotate:_},className:`scroll-reveal-container my-3 ${t}`,children:[(0,G.jsx)(Pd.p,{className:`scroll-reveal-text size-${d} align-${f} variant-${p} ${n}`,variants:y,initial:`hidden`,animate:h?`visible`:`hidden`,children:v.map(e=>e.isSpace?(0,G.jsx)(`span`,{children:e.value},`space-${e.originalIndex}`):(0,G.jsx)(Pd.span,{className:`inline-block`,variants:x,children:e.value},`word-${e.originalIndex}`))}),(0,G.jsx)(`style`,{children:`
        .scroll-reveal-container {
          transform-gpu: translate3d(0, 0, 0);
          will-change: transform;
          display: block;
          overflow: visible;
        }
        .scroll-reveal-text {
          line-height: 1.6;
          font-weight: 500;
          margin: 0;
          padding: 0;
        }
        
        /* Sizes */
        .scroll-reveal-text.size-sm {
          font-size: 0.95rem;
        }
        .scroll-reveal-text.size-md {
          font-size: 1.1rem;
        }
        .scroll-reveal-text.size-lg {
          font-size: 1.4rem;
        }
        .scroll-reveal-text.size-xl {
          font-size: 1.85rem;
        }
        .scroll-reveal-text.size-2xl {
          font-size: 2.25rem;
        }
        
        /* Alignments */
        .scroll-reveal-text.align-left {
          text-align: left;
        }
        .scroll-reveal-text.align-center {
          text-align: center;
        }
        .scroll-reveal-text.align-right {
          text-align: right;
        }
        
        /* Variants */
        .scroll-reveal-text.variant-default {
          color: inherit;
        }
        .scroll-reveal-text.variant-muted {
          color: hsl(var(--text-secondary));
        }
        .scroll-reveal-text.variant-accent {
          color: hsl(var(--secondary));
        }
        .scroll-reveal-text.variant-primary {
          color: hsl(var(--primary));
        }
        
        @media (max-width: 768px) {
          .scroll-reveal-text.size-md {
            font-size: 1rem;
          }
          .scroll-reveal-text.size-lg {
            font-size: 1.2rem;
          }
          .scroll-reveal-text.size-xl {
            font-size: 1.5rem;
          }
          .scroll-reveal-text.size-2xl {
            font-size: 1.75rem;
          }
        }
      `})]})},ip=``+new URL(`DevPhotoFirst-B2Qd1qpo.jpeg`,import.meta.url).href,ap=``+new URL(`DevPhotoSecond-CvIsLEUk.jpeg`,import.meta.url).href,op=({theme:e})=>{let{name:t,tagline:n,shortBio:r,longBio:i,email:a,socialLinks:o}=Rf.personalInfo,s=e===`dark`?`#ff5722`:`#ffb74d`,c=e=>{let t=document.getElementById(e);t&&window.scrollTo({top:t.offsetTop-70,behavior:`smooth`})};return(0,G.jsxs)(`section`,{id:`hero`,className:`section hero-section`,children:[(0,G.jsx)(Yf,{smokeColor:s}),(0,G.jsx)(`div`,{className:`glowing-bg hero-glow-1`}),(0,G.jsx)(`div`,{className:`glowing-bg-secondary hero-glow-2`}),(0,G.jsxs)(`div`,{className:`container hero-container grid-2`,children:[(0,G.jsxs)(`div`,{className:`hero-content animate-fade-in`,children:[(0,G.jsxs)(`div`,{className:`hero-badge`,children:[(0,G.jsx)(`div`,{className:`badge-dot`}),`Software Developer`]}),(0,G.jsx)(`h2`,{className:`hero-name`,children:`Abhishek Bhat`}),(0,G.jsxs)(`h1`,{className:`hero-title`,children:[`Building software that `,(0,G.jsx)(`br`,{}),(0,G.jsx)(`span`,{className:`highlight-text`,children:`solves real-world problems.`})]}),(0,G.jsx)(rp,{size:`lg`,variant:`muted`,containerClassName:`hero-description`,align:`left`,children:r}),(0,G.jsxs)(`div`,{className:`hero-actions`,children:[(0,G.jsxs)(`button`,{onClick:()=>c(`works`),className:`btn btn-primary`,children:[`View My Work`,(0,G.jsx)(ue,{size:18})]}),(0,G.jsx)(`a`,{href:Rf.personalInfo.resumeUrl,target:`_blank`,rel:`noopener noreferrer`,className:`btn btn-secondary`,style:{textDecoration:`none`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:`Download Resume`})]}),(0,G.jsxs)(`div`,{className:`hero-socials`,children:[(0,G.jsx)(`a`,{href:o.github,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`GitHub`,children:(0,G.jsx)(Uf,{size:20})}),(0,G.jsx)(`a`,{href:o.linkedin,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`LinkedIn`,children:(0,G.jsx)(Wf,{size:20})}),o.twitter&&(0,G.jsx)(`a`,{href:o.twitter,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Twitter`,children:(0,G.jsx)(Gf,{size:20})}),(0,G.jsx)(`a`,{href:`mailto:${a}`,"aria-label":`Email`,children:(0,G.jsx)(ke,{size:20})})]})]}),(0,G.jsx)(`div`,{className:`hero-illustration animate-fade-in`,style:{animationDelay:`0.2s`},children:(0,G.jsx)(np,{name:t,title:Rf.personalInfo.title||`Full Stack Engineer`,handle:`abhishekbhat014`,status:`Actively Coding`,contactText:`Contact Me`,avatarUrl:ip,backAvatarUrl:ap,showUserInfo:!1,enableTilt:!0,enableMobileTilt:!1,onContactClick:()=>c(`get-in-touch`),behindGlowEnabled:!0,behindGlowColor:`rgba(249, 115, 22, 0.35)`,behindGlowSize:`45%`,innerGradient:`linear-gradient(145deg, rgba(249, 115, 22, 0.1) 0%, rgba(9, 9, 11, 0.95) 100%)`})})]}),(0,G.jsx)(`style`,{children:`
  .hero-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 120px; /* Clear separation from next section */
    overflow: hidden;
  }
  .hero-glow-1 { top: 10%; left: -5%; }
  .hero-glow-2 { bottom: 10%; right: 5%; }
  .hero-container {
    position: relative;
    z-index: 1;
  }
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 1rem;
    border-radius: var(--border-radius-full);
    background: hsl(var(--primary-glow));
    border: 1px solid rgba(139, 92, 246, 0.2);
    font-size: 0.85rem;
    font-weight: 600;
    color: hsl(var(--primary));
    margin-bottom: 1.5rem;
  }
  .hero-name {
    font-size: 2.25rem;
    font-weight: 800;
    color: #f9fafb;
    margin-bottom: 0.5rem;
    letter-spacing: -0.5px;
  }
  .badge-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: hsl(var(--primary));
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0% { transform: scale(0.9); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.4; }
    100% { transform: scale(0.9); opacity: 1; }
  }
  .hero-title {
    font-size: 3.25rem;
    font-weight: 800;
    letter-spacing: -1px;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }
  .highlight-text {
    background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .hero-subtitle {
    font-size: 1.75rem;
    font-weight: 600;
    color: hsl(var(--text-secondary));
    margin-bottom: 1.5rem;
    line-height: 1.3;
  }
  .hero-description {
    font-size: 1.1rem;
    color: hsl(var(--text-muted));
    margin-bottom: 2.5rem;
    max-width: 540px;
  }
  .hero-actions {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
  }
  .hero-socials {
    display: flex;
    gap: 1.5rem;
  }
  .hero-socials a {
    color: hsl(var(--text-muted));
    transition: all var(--transition-fast);
  }
  .hero-socials a:hover {
    color: hsl(var(--primary));
    transform: translateY(-3px);
  }
  .hero-illustration {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  /* ── MOBILE FIXES ── */
  @media (max-width: 768px) {
    .hero-section {
      padding-top: 80px;
      padding-bottom: 90px;
      min-height: auto;
    }
    .hero-container {
      display: flex !important; /* override grid-2 */
      flex-direction: column;
      gap: 3rem;
    }
    .hero-illustration {
      order: 10;                /* card BELOW text on mobile */
    }
    .hero-name {
      font-size: 1.75rem;
    }
    .hero-title {
      font-size: 2.2rem;
    }
    .hero-subtitle {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    .hero-description {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
    .hero-actions {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-bottom: 1.5rem;
      gap: 0.75rem;
    }
    .hero-actions .btn {
      padding: 0.6rem 1.2rem;
      font-size: 0.9rem;
    }
    .hero-badge {
      margin-bottom: 1rem;
    }
  }
`})]})};function sp(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function cp(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var lp={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},up={duration:.5,overwrite:!1,delay:0},dp,fp,pp,mp=1e8,hp=1/mp,gp=Math.PI*2,_p=gp/4,vp=0,yp=Math.sqrt,bp=Math.cos,xp=Math.sin,Sp=function(e){return typeof e==`string`},Cp=function(e){return typeof e==`function`},wp=function(e){return typeof e==`number`},Tp=function(e){return e===void 0},Ep=function(e){return typeof e==`object`},Dp=function(e){return e!==!1},Op=function(){return typeof window<`u`},kp=function(e){return Cp(e)||Sp(e)},Ap=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},jp=Array.isArray,Mp=/random\([^)]+\)/g,Np=/,\s*/g,Pp=/(?:-?\.?\d|\.)+/gi,Fp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ip=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Lp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Rp=/[+-]=-?[.\d]+/,zp=/[^,'"\[\]\s]+/gi,Bp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vp,Hp,Up,Wp,Gp={},Kp={},qp,Jp=function(e){return(Kp=Em(e,Gp))&&Gg},Yp=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},Xp=function(e,t){return!t&&console.warn(e)},Zp=function(e,t){return e&&(Gp[e]=t)&&Kp&&(Kp[e]=t)||Gp},Qp=function(){return 0},$p={suppressEvents:!0,isStart:!0,kill:!1},em={suppressEvents:!0,kill:!1},tm={suppressEvents:!0},nm={},rm=[],im={},am,om={},sm={},cm=30,lm=[],um=``,dm=function(e){var t=e[0],n,r;if(Ep(t)||Cp(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=lm.length;r--&&!lm[r].targetTest(t););n=lm[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new tg(e[r],n)))||e.splice(r,1);return e},fm=function(e){return e._gsap||dm(lh(e))[0]._gsap},pm=function(e,t,n){return(n=e[t])&&Cp(n)?e[t]():Tp(n)&&e.getAttribute&&e.getAttribute(t)||n},mm=function(e,t){return(e=e.split(`,`)).forEach(t)||e},hm=function(e){return Math.round(e*1e5)/1e5||0},gm=function(e){return Math.round(e*1e7)/1e7||0},_m=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},vm=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},ym=function(){var e=rm.length,t=rm.slice(0),n,r;for(im={},rm.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},bm=function(e){return!!(e._initted||e._startAt||e.add)},xm=function(e,t,n,r){rm.length&&!fp&&ym(),e.render(t,n,r||!!(fp&&t<0&&bm(e))),rm.length&&!fp&&ym()},Sm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(zp).length<2?t:Sp(e)?e.trim():e},Cm=function(e){return e},wm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Tm=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},Em=function(e,t){for(var n in t)e[n]=t[n];return e},Dm=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=Ep(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},Om=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},km=function(e){var t=e.parent||Vp,n=e.keyframes?Tm(jp(e.keyframes)):wm;if(Dp(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Am=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},jm=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Mm=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Nm=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Pm=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Fm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Im=function(e,t,n,r){return e._startAt&&(fp?e._startAt.revert(em):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Lm=function e(t){return!t||t._ts&&e(t.parent)},Rm=function(e){return e._repeat?zm(e._tTime,e=e.duration()+e._rDelay)*e:0},zm=function(e,t){var n=Math.floor(e=gm(e/t));return e&&n===e?n-1:n},Bm=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Vm=function(e){return e._end=gm(e._start+(e._tDur/Math.abs(e._ts||e._rts||hp)||0))},Hm=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=gm(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Vm(e),n._dirty||Pm(n,e)),e},Um=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Bm(e.rawTime(),t),(!t._dur||rh(0,t.totalDuration(),n)-t._tTime>hp)&&t.render(n,!0)),Pm(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-hp}},Wm=function(e,t,n,r){return t.parent&&Nm(t),t._start=gm((wp(n)?n:n||e!==Vp?eh(e,n,t):e._time)+t._delay),t._end=gm(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jm(e,t,`_first`,`_last`,e._sort?`_start`:0),Jm(t)||(e._recent=t),r||Um(e,t),e._ts<0&&Hm(e,e._tTime),e},Gm=function(e,t){return(Gp.ScrollTrigger||Yp(`scrollTrigger`,t))&&Gp.ScrollTrigger.create(t,e)},Km=function(e,t,n,r,i){if(ug(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!fp&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&am!==Vh.frame)return rm.push(e),e._lazy=[i,r],1},qm=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},Jm=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},Ym=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&qm(e)&&!(!e._initted&&Jm(e))||(e._ts<0||e._dp._ts<0)&&!Jm(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=rh(0,e._tDur,t),l=zm(s,o),e._yoyo&&l&1&&(a=1-a),l!==zm(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||fp||r||e._zTime===hp||!t&&e._zTime){if(!e._initted&&Km(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?hp:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Im(e,t,n,!0),e._onUpdate&&!n&&Eh(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&Eh(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Nm(e,1),!n&&!fp&&(Eh(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},Xm=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},Zm=function(e,t,n,r){var i=e._repeat,a=gm(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:gm(a*(i+1)+e._rDelay*i):a,o>0&&!r&&Hm(e,e._tTime=e._tDur*o),e.parent&&Vm(e),n||Pm(e.parent,e),e},Qm=function(e){return e instanceof rg?Pm(e):Zm(e,e._dur)},$m={_start:0,endTime:Qp,totalDuration:Qp},eh=function e(t,n,r){var i=t.labels,a=t._recent||$m,o=t.duration()>=mp?a.endTime(!1):t._dur,s,c,l;return Sp(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(jp(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},th=function(e,t,n){var r=wp(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=Dp(s.vars.inherit)&&s.parent;a.immediateRender=Dp(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new _g(t[0],a,t[i+1])},nh=function(e,t){return e||e===0?t(e):t},rh=function(e,t,n){return n<e?e:n>t?t:n},ih=function(e,t){return!Sp(e)||!(t=Bp.exec(e))?``:t[1]},ah=function(e,t,n){return nh(n,function(n){return rh(e,t,n)})},oh=[].slice,sh=function(e,t){return e&&Ep(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&Ep(e[0]))&&!e.nodeType&&e!==Hp},ch=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return Sp(e)&&!t||sh(e,1)?(r=n).push.apply(r,lh(e)):n.push(e)})||n},lh=function(e,t,n){return pp&&!t&&pp.selector?pp.selector(e):Sp(e)&&!n&&(Up||!Hh())?oh.call((t||Wp).querySelectorAll(e),0):jp(e)?ch(e,n):sh(e)?oh.call(e,0):e?[e]:[]},uh=function(e){return e=lh(e)[0]||Xp(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return lh(t,n.querySelectorAll?n:n===e?Xp(`Invalid scope`)||Wp.createElement(`div`):e)}},dh=function(e){return e.sort(function(){return .5-Math.random()})},fh=function(e){if(Cp(e))return e;var t=Ep(e)?e:{each:e},n=Xh(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return Sp(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,mp])[1],!S){for(b=-mp;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===mp?0:s?f*u/S-.5:r/S|0,b=0,x=mp,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):yp(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&dh(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=ih(t.amount||t.each)||0,n=n&&f<0?Yh(n):n}return f=(p[e]-p.min)/p.max||0,gm(p.b+(n?n(f):f)*p.v)+p.u}},ph=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=gm(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(wp(n)?0:ih(n))}},mh=function(e,t){var n=jp(e),r,i;return!n&&Ep(e)&&(r=n=e.radius||mp,e.values?(e=lh(e.values),(i=!wp(e[0]))&&(r*=r)):e=ph(e.increment)),nh(t,n?Cp(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=mp,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||wp(t)?s:s+ih(t)}:ph(e))},hh=function(e,t,n,r){return nh(jp(e)?!t:n===!0?!!(n=0):!r,function(){return jp(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},gh=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},_h=function(e,t){return function(n){return e(parseFloat(n))+(t||ih(n))}},vh=function(e,t,n){return Ch(e,t,0,1,n)},yh=function(e,t,n){return nh(n,function(n){return e[~~t(n)]})},bh=function e(t,n,r){var i=n-t;return jp(t)?yh(t,e(0,t.length),n):nh(r,function(e){return(i+(e-t)%i)%i+t})},xh=function e(t,n,r){var i=n-t,a=i*2;return jp(t)?yh(t,e(0,t.length-1),n):nh(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},Sh=function(e){return e.replace(Mp,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(Np);return hh(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},Ch=function(e,t,n,r,i){var a=t-e,o=r-n;return nh(i,function(t){return n+((t-e)/a*o||0)})},wh=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=Sp(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(jp(t)&&!jp(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=Em(jp(t)?[]:{},t));if(!u){for(c in n)ag.call(s,t,c,`get`,n[c]);a=function(e){return Eg(e,s)||(o?t.p:t)}}}return nh(r,a)},Th=function(e,t,n){var r=e.labels,i=mp,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},Eh=function(e,t,n){var r=e.vars,i=r[t],a=pp,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&rm.length&&ym(),o&&(pp=o),l=s?i.apply(c,s):i.call(c),pp=a,l},Dh=function(e){return Nm(e),e.scrollTrigger&&e.scrollTrigger.kill(!!fp),e.progress()<1&&Eh(e,`onInterrupt`),e},Oh,kh=[],Ah=function(e){if(e)if(e=!e.name&&e.default||e,Op()||e.headless){var t=e.name,n=Cp(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:Qp,render:Eg,add:ag,kill:Og,modifier:Dg,rawVars:0},a={targetTest:0,get:0,getSetter:Sg,aliases:{},register:0};if(Hh(),e!==r){if(om[t])return;wm(r,wm(Om(e,i),a)),Em(r.prototype,Em(i,Om(e,a))),om[r.prop=t]=r,e.targetTest&&(lm.push(r),nm[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}Zp(t,r),e.register&&e.register(Gg,r,jg)}else kh.push(e)},jh=255,Mh={aqua:[0,jh,jh],lime:[0,jh,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,jh],navy:[0,0,128],white:[jh,jh,jh],olive:[128,128,0],yellow:[jh,jh,0],orange:[jh,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[jh,0,0],pink:[jh,192,203],cyan:[0,jh,jh],transparent:[jh,jh,jh,0]},Nh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*jh+.5|0},Ph=function(e,t,n){var r=e?wp(e)?[e>>16,e>>8&jh,e&jh]:0:Mh.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),Mh[e])r=Mh[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&jh,r&jh,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&jh,e&jh]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(Pp),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=Nh(s+1/3,i,a),r[1]=Nh(s,i,a),r[2]=Nh(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(Fp),n&&r.length<4&&(r[3]=1),r}else r=e.match(Pp)||Mh.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/jh,a=r[1]/jh,o=r[2]/jh,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},Fh=function(e){var t=[],n=[],r=-1;return e.split(Lh).forEach(function(e){var i=e.match(Ip)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},Ih=function(e,t,n){var r=``,i=(e+r).match(Lh),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=Ph(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=Fh(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Lh,`1`).split(Ip),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Lh),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Lh=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Mh)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),Rh=/hsl[a]?\(/,zh=function(e){var t=e.join(` `),n;if(Lh.lastIndex=0,Lh.test(t))return n=Rh.test(t),e[1]=Ih(e[1],n),e[0]=Ih(e[0],n,Fh(e[1])),!0},Bh,Vh=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){qp&&(!Up&&Op()&&(Hp=Up=window,Wp=Hp.document||{},Gp.gsap=Gg,(Hp.gsapVersions||=[]).push(Gg.version),Jp(Kp||Hp.GreenSockGlobals||!Hp.gsap&&Hp||{}),kh.forEach(Ah)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},Bh=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Bh=0,l=Qp},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),Hh(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),Hh=function(){return!Bh&&Vh.wake()},Uh={},Wh=/^[\d.\-M][\d.\-,\s]/,Gh=/["']/g,Kh=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(Gh,``).trim():+c,r=s.substr(o+1).trim();return t},qh=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},Jh=function(e){var t=(e+``).split(`(`),n=Uh[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[Kh(t[1])]:qh(e).split(`,`).map(Sm)):Uh._CE&&Wh.test(e)?Uh._CE(``,e):n},Yh=function(e){return function(t){return 1-e(1-t)}},Xh=function(e,t){return e&&(Cp(e)?e:Uh[e]||Jh(e))||t},Zh=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return mm(e,function(e){for(var t in Uh[e]=Gp[e]=i,Uh[a=e.toLowerCase()]=n,i)Uh[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=Uh[e+`.`+t]=i[t]}),i},Qh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},$h=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/gp*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*xp((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:Qh(s);return a=gp/a,c.config=function(n,r){return e(t,n,r)},c},eg=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:Qh(r);return i.config=function(n){return e(t,n)},i};mm(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;Zh(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),Uh.Linear.easeNone=Uh.none=Uh.Linear.easeIn,Zh(`Elastic`,$h(`in`),$h(`out`),$h()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};Zh(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),Zh(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),Zh(`Circ`,function(e){return-(yp(1-e*e)-1)}),Zh(`Sine`,function(e){return e===1?1:-bp(e*_p)+1}),Zh(`Back`,eg(`in`),eg(`out`),eg()),Uh.SteppedEase=Uh.steps=Gp.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-hp;return function(e){return((r*rh(0,a,e)|0)+i)*n}}},up.ease=Uh[`quad.out`],mm(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return um+=e+`,`+e+`Params,`});var tg=function(e,t){this.id=vp++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:pm,this.set=t?t.getSetter:Sg},ng=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Zm(this,+e.duration,1,1),this.data=e.data,pp&&(this._ctx=pp,pp.data.push(this)),Bh||Vh.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,Zm(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(Hh(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Hm(this,e),!n._dp||n.parent||Um(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&Wm(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===hp||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),xm(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Rm(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Rm(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?zm(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-hp?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?Bm(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-hp?0:this._rts,this.totalTime(rh(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),Vm(this),Fm(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Hh(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==hp&&(this._tTime-=hp)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=gm(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&Wm(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(Dp(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bm(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=tm);var t=fp;return fp=e,bm(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),fp=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,Qm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,Qm(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(eh(this,e),Dp(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,Dp(t)),this._dur||(this._zTime=-hp),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-hp:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-hp,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-hp)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=Cp(e)?e:Cm,a=function(){var e=t.then;t.then=null,n&&n(),Cp(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){Dh(this)},e}();wm(ng.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-hp,_prom:0,_ps:!1,_rts:1});var rg=function(e){cp(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=Dp(t.sortChildren),Vp&&Wm(t.parent||Vp,sp(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&Gm(sp(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return th(0,arguments,this),this},n.from=function(e,t,n){return th(1,arguments,this),this},n.fromTo=function(e,t,n,r){return th(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,km(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new _g(e,t,eh(this,n),1),this},n.call=function(e,t,n){return Wm(this,_g.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new _g(e,n,eh(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,km(n).immediateRender=Dp(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,km(r).immediateRender=Dp(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:gm(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==Vp&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=gm(o%f),o===i?(d=this._repeat,c=a):(_=gm(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=zm(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:gm(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&Eh(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,_=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=Xm(this,gm(r),gm(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!_&&(Eh(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-hp);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||fp&&bm(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-hp:hp);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-hp)._zTime=c>=r?1:-1,this._ts))return this._start=g,Vm(this),this.render(e,t,n);this._onUpdate&&!t&&Eh(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g===this._start||Math.abs(h)!==Math.abs(this._ts))&&(this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&Nm(this,1),!t&&!(e<0&&!r)&&(o||r||!i)&&(Eh(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(wp(t)||(t=eh(this,t,e)),!(e instanceof ng)){if(jp(e))return e.forEach(function(e){return n.add(e,t)}),this;if(Sp(e))return this.addLabel(e,t);if(Cp(e))e=_g.delayedCall(0,e);else return this}return this===e?this:Wm(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-mp);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof _g?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return Sp(e)?this.removeLabel(e):Cp(e)?this.killTweensOf(e):(e.parent===this&&Mm(this,e),e===this._recent&&(this._recent=this._last),Pm(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=gm(Vh.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=eh(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=_g.delayedCall(0,t||Qp,n);return r.data=`isPause`,this._hasPause=1,Wm(this,r,eh(this,e))},n.removePause=function(e){var t=this._first;for(e=eh(this,e);t;)t._start===e&&t.data===`isPause`&&Nm(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)cg!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=lh(e),i=this._first,a=wp(t),o;i;)i instanceof _g?vm(i._targets,r)&&(a?(!cg||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=eh(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=_g.to(n,wm({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||hp,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&Zm(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,wm({startAt:{time:eh(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),Th(this,eh(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),Th(this,eh(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+hp)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=gm(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return Pm(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Pm(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=mp,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,Wm(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=gm(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;Zm(n,n===Vp&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(Vp._ts&&(xm(Vp,Bm(e,Vp)),am=Vh.frame),Vh.frame>=cm){cm+=lp.autoSleep||120;var t=Vp._first;if((!t||!t._ts)&&lp.autoSleep&&Vh._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||Vh.sleep()}}},t}(ng);wm(rg.prototype,{_lock:0,_hasPause:0,_forcing:0});var ig=function(e,t,n,r,i,a,o){var s=new jg(this._pt,e,t,0,1,Tg,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=Sh(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(Lp)||[];u=Lp.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?_m(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=Lp.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(Rp.test(r)||g)&&(s.e=0),this._pt=s,s},ag=function(e,t,n,r,i,a,o,s,c,l){Cp(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?Cp(u)?c?e[t.indexOf(`set`)||!Cp(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=Cp(u)?c?bg:yg:vg,p;if(Sp(r)&&(~r.indexOf(`random(`)&&(r=Sh(r)),r.charAt(1)===`=`&&(p=_m(d,r)+(ih(d)||0),(p||p===0)&&(r=p))),!l||d!==r||lg)return!isNaN(d*r)&&r!==``?(p=new jg(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?wg:Cg,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&Yp(t,r),ig.call(this,e,t,d,r,f,s||lp.stringFilter,c))},og=function(e,t,n,r,i){if(Cp(e)&&(e=mg(e,i,t,n,r)),!Ep(e)||e.style&&e.nodeType||jp(e)||Ap(e))return Sp(e)?mg(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=mg(e[o],i,t,n,r);return a},sg=function(e,t,n,r,i,a){var o,s,c,l;if(om[e]&&(o=new om[e]).init(i,o.rawVars?t[e]:og(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new jg(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==Oh))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},cg,lg,ug=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!dp,b=t.timeline,x=i.easeReverse||d,S,C,w,T,E,D,O,k,A,j,M,ee,N;if(b&&(!f||!a)&&(a=`none`),t._ease=Xh(a,up.ease),t._rEase=x&&(Xh(x)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||f&&!i.stagger){if(k=g[0]?fm(g[0]).harness:0,ee=k&&i[k.prop],S=Om(i,nm),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?em:$p),h._lazy=0),o){if(Nm(t._startAt=_g.set(g,wm({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&Dp(c),startAt:null,delay:0,onUpdate:l&&function(){return Eh(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(fp||!s&&!p)&&t._startAt.revert(em),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),w=wm({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&Dp(c),immediateRender:s,stagger:0,parent:_},S),ee&&(w[k.prop]=ee),Nm(t._startAt=_g.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(fp?t._startAt.revert(em):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,hp,hp);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&Dp(c)||c&&!m,C=0;C<g.length;C++){if(E=g[C],O=E._gsap||dm(g)[C]._gsap,t._ptLookup[C]=j={},im[O.id]&&rm.length&&ym(),M=v===g?C:v.indexOf(E),k&&(A=new k).init(E,ee||S,t,M,v)!==!1&&(t._pt=T=new jg(t._pt,E,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(e){j[e]=T}),A.priority&&(D=1)),!k||ee)for(w in S)om[w]&&(A=sg(w,S,t,M,E,v))?A.priority&&(D=1):j[w]=T=ag.call(t,E,w,`get`,S[w],M,v,0,i.stringFilter);t._op&&t._op[C]&&t.kill(E,t._op[C]),y&&t._pt&&(cg=t,Vp.killTweensOf(E,j,t.globalTime(n)),N=!t.parent,cg=0),t._pt&&c&&(im[O.id]=1)}D&&Ag(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!N,f&&n<=0&&b.render(mp,!0,!0)},dg=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return lg=1,e.vars[t]=`+=0`,ug(e,o),lg=0,s?Xp(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&=hm(n)+ih(u.e),u.b&&=l.s+ih(u.b)},fg=function(e,t){var n=e[0]?fm(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=Em({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},pg=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(jp(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},mg=function(e,t,n,r,i){return Cp(e)?e.call(t,n,r,i):Sp(e)&&~e.indexOf(`random(`)?Sh(e):e},hg=um+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,gg={};mm(hg+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return gg[e]=1});var _g=function(e){cp(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:km(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=n.parent||Vp,g=(jp(t)||Ap(t)?wp(t[0]):`length`in n)?[t]:lh(t),_,v,y,b,x,S,C,w;if(a._targets=g.length?dm(g):Xp(`GSAP target `+t+` not found. https://gsap.com`,!lp.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||kp(s)||kp(c)){n=a.vars;var T=n.easeReverse||n.yoyoEase;if(_=a.timeline=new rg({data:`nested`,defaults:p||{},targets:h&&h.data===`nested`?h.vars.targets:g}),_.kill(),_.parent=_._dp=sp(a),_._start=0,u||kp(s)||kp(c)){if(b=g.length,C=u&&fh(u),Ep(u))for(x in u)~hg.indexOf(x)&&(w||={},w[x]=u[x]);for(v=0;v<b;v++)y=Om(n,gg),y.stagger=0,T&&(y.easeReverse=T),w&&Em(y,w),S=g[v],y.duration=+mg(s,sp(a),v,S,g),y.delay=(+mg(c,sp(a),v,S,g)||0)-a._delay,!u&&b===1&&y.delay&&(a._delay=c=y.delay,a._start+=c,y.delay=0),_.to(S,y,C?C(v,S,g):0),_._ease=Uh.none;_.duration()?s=c=0:a.timeline=0}else if(f){km(wm(_.vars.defaults,{ease:`none`})),_._ease=Xh(f.ease||n.ease||`none`);var E=0,D,O,k;if(jp(f))f.forEach(function(e){return _.to(g,e,`>`)}),_.duration();else{for(x in y={},f)x===`ease`||x===`easeEach`||pg(x,f[x],y,f.easeEach);for(x in y)for(D=y[x].sort(function(e,t){return e.t-t.t}),E=0,v=0;v<D.length;v++)O=D[v],k={ease:O.e,duration:(O.t-(v?D[v-1].t:0))/100*s},k[x]=O.v,_.to(g,k,E),E+=k.duration;_.duration()<s&&_.to({},{duration:s-_.duration()})}}s||a.duration(s=_.duration())}else a.timeline=0;return d===!0&&!dp&&(cg=sp(a),Vp.killTweensOf(g),cg=0),Wm(h,sp(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===gm(h._time)&&Dp(l)&&Lm(sp(a))&&h.data!==`nested`)&&(a._tTime=-hp,a.render(Math.max(0,-c)||0)),m&&Gm(sp(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-hp&&!o?i:e<hp?0:e,c,l,u,d,f,p,m,h;if(!a)Ym(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=gm(s%d),s===i?(u=this._repeat,c=a):(f=gm(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=zm(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(gm(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(Km(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=c<r;if(g!==this._inv){var _=g?r:a-r;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=_?(g?-1:1)/_:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(Eh(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&Im(this,e,t,n),Eh(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&Eh(this,`onRepeat`),(s===this._tDur||!s)&&this._tTime===s&&(o&&!this._onUpdate&&Im(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&Nm(this,1),!t&&!(o&&!r)&&(s||r||p)&&(Eh(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return(!t||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){Bh||Vh.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||ug(this,a),o=this._ease(a/this._dur),dg(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(Hm(this,0),this.parent||jm(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?Dh(this):this.scrollTrigger&&this.scrollTrigger.kill(!!fp),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,cg&&cg.vars.overwrite!==!0)._first||Dh(this),this.parent&&n!==this.timeline.totalDuration()&&Zm(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?lh(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&Am(r,i))return t===`all`&&(this._pt=0),Dh(this);for(s=this._op=this._op||[],t!==`all`&&(Sp(t)&&(d={},mm(t,function(e){return d[e]=1}),t=d),t=fg(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&((!(`kill`in f.d)||f.d.kill(d)===!0)&&Mm(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&Dh(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return th(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return th(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return Vp.killTweensOf(e,t,n)},t}(ng);wm(_g.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),mm(`staggerTo,staggerFrom,staggerFromTo`,function(e){_g[e]=function(){var t=new rg,n=oh.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var vg=function(e,t,n){return e[t]=n},yg=function(e,t,n){return e[t](n)},bg=function(e,t,n,r){return e[t](r.fp,n)},xg=function(e,t,n){return e.setAttribute(t,n)},Sg=function(e,t){return Cp(e[t])?yg:Tp(e[t])&&e.setAttribute?xg:vg},Cg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},wg=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Tg=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Eg=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Dg=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},Og=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Mm(this,t,`_pt`):t.dep||(n=1),t=r;return!n},kg=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Ag=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},jg=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Cg,this.d=o||this,this.set=s||vg,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=kg,this.m=e,this.mt=n,this.tween=t},e}();mm(um+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return nm[e]=1}),Gp.TweenMax=Gp.TweenLite=_g,Gp.TimelineLite=Gp.TimelineMax=rg,Vp=new rg({sortChildren:!1,defaults:up,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),lp.stringFilter=zh;var Mg=[],Ng={},Pg=[],Fg=0,Ig=0,Lg=function(e){return(Ng[e]||Pg).map(function(e){return e()})},Rg=function(){var e=Date.now(),t=[];e-Fg>2&&(Lg(`matchMediaInit`),Mg.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=Hp.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Lg(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Fg=e,Lg(`matchMedia`))},zg=function(){function e(e,t){this.selector=t&&uh(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Ig++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){Cp(e)&&(n=t,t=e,e=Cp);var r=this,i=function(){var e=pp,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=uh(n)),pp=r,a=t.apply(r,arguments),Cp(a)&&r._r.push(a),pp=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===Cp?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=pp;pp=null,e(this),pp=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof _g&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof rg?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof _g)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=Mg.length;r--;)Mg[r].id===this.id&&Mg.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),Bg=function(){function e(e){this.contexts=[],this.scope=e,pp&&pp.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){Ep(e)||(e={matches:e});var r=new zg(0,n||this.scope),i=r.conditions={},a,o,s;for(o in pp&&!r.selector&&(r.selector=pp.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=Hp.matchMedia(e[o]),a&&(Mg.indexOf(r)<0&&Mg.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(Rg):a.addEventListener(`change`,Rg)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Vg={registerPlugin:function(){[...arguments].forEach(function(e){return Ah(e)})},timeline:function(e){return new rg(e)},getTweensOf:function(e,t){return Vp.getTweensOf(e,t)},getProperty:function(e,t,n,r){Sp(e)&&(e=lh(e)[0]);var i=fm(e||{}).get,a=n?Cm:Sm;return n===`native`&&(n=``),e&&(t?a((om[t]&&om[t].get||i)(e,t,n,r)):function(t,n,r){return a((om[t]&&om[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=lh(e),e.length>1){var r=e.map(function(e){return Gg.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=om[t],o=fm(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;Oh._pt=0,r.init(e,n?t+n:t,Oh,0,[e]),r.render(1,r),Oh._pt&&Eg(1,Oh)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=Gg.to(e,wm((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return Vp.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Xh(e.ease,up.ease)),Dm(up,e||{})},config:function(e){return Dm(lp,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!om[e]&&!Gp[e]&&Xp(t+` effect requires `+e+` plugin.`)}),sm[t]=function(e,t,r){return n(lh(e),wm(t||{},i),r)},a&&(rg.prototype[t]=function(e,n,r){return this.add(sm[t](e,Ep(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){Uh[e]=Xh(t)},parseEase:function(e,t){return arguments.length?Xh(e,t):Uh},getById:function(e){return Vp.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new rg(e),r,i;for(n.smoothChildTiming=Dp(e.smoothChildTiming),Vp.remove(n),n._dp=0,n._time=n._tTime=Vp._time,r=Vp._first;r;)i=r._next,(t||!(!r._dur&&r instanceof _g&&r.vars.onComplete===r._targets[0]))&&Wm(n,r,r._start-r._delay),r=i;return Wm(Vp,n,0),n},context:function(e,t){return e?new zg(e,t):pp},matchMedia:function(e){return new Bg(e)},matchMediaRefresh:function(){return Mg.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Rg()},addEventListener:function(e,t){var n=Ng[e]||(Ng[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ng[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:bh,wrapYoyo:xh,distribute:fh,random:hh,snap:mh,normalize:vh,getUnit:ih,clamp:ah,splitColor:Ph,toArray:lh,selector:uh,mapRange:Ch,pipe:gh,unitize:_h,interpolate:wh,shuffle:dh},install:Jp,effects:sm,ticker:Vh,updateRoot:rg.updateRoot,plugins:om,globalTimeline:Vp,core:{PropTween:jg,globals:Zp,Tween:_g,Timeline:rg,Animation:ng,getCache:fm,_removeLinkedListItem:Mm,reverting:function(){return fp},context:function(e){return e&&pp&&(pp.data.push(e),e._ctx=pp),pp},suppressOverwrites:function(e){return dp=e}}};mm(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Vg[e]=_g[e]}),Vh.add(rg.updateRoot),Oh=Vg.to({},{duration:0});var Hg=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Ug=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=Hg(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},Wg=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(Sp(n)&&(r={},mm(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}Ug(e,n)}}}},Gg=Vg.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)fp?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Wg(`roundProps`,ph),Wg(`modifiers`),Wg(`snap`,mh))||Vg;_g.version=rg.version=Gg.version=`3.15.0`,qp=1,Op()&&Hh(),Uh.Power0,Uh.Power1,Uh.Power2,Uh.Power3,Uh.Power4,Uh.Linear,Uh.Quad,Uh.Cubic,Uh.Quart,Uh.Quint,Uh.Strong,Uh.Elastic,Uh.Back,Uh.SteppedEase,Uh.Bounce,Uh.Sine,Uh.Expo,Uh.Circ;var Kg,qg,Jg,Yg,Xg,Zg,Qg,$g=function(){return typeof window<`u`},e_={},t_=180/Math.PI,n_=Math.PI/180,r_=Math.atan2,i_=1e8,a_=/([A-Z])/g,o_=/(left|right|width|margin|padding|x)/i,s_=/[\s,\(]\S/,c_={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},l_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},u_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},d_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},f_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},p_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},m_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},h_=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},g_=function(e,t,n){return e.style[t]=n},__=function(e,t,n){return e.style.setProperty(t,n)},v_=function(e,t,n){return e._gsap[t]=n},y_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},b_=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},x_=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},S_=`transform`,C_=S_+`Origin`,w_=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in e_&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=c_[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=U_(i,e)}):this.tfm[t]=o.x?o[t]:U_(i,t),t===C_&&(this.tfm.zOrigin=o.zOrigin);else return c_.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(S_)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(C_,n,``)),t=S_}(a||n)&&this.props.push(t,n,a[t])},T_=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},E_=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,i,a;for(i=0;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(a_,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=Qg(),(!i||!i.isStart)&&!n[S_]&&(T_(n),r.zOrigin&&n[C_]&&(n[C_]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},D_=function(e,t){var n={target:e,props:[],revert:E_,save:w_};return e._gsap||Gg.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},O_,k_=function(e,t){var n=qg.createElementNS?qg.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):qg.createElement(e);return n&&n.style?n:qg.createElement(e)},A_=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(a_,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,M_(n)||n,1)||``},j_=`O,Moz,ms,Ms,Webkit`.split(`,`),M_=function(e,t,n){var r=(t||Xg).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(j_[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?j_[i]:``)+e},N_=function(){$g()&&window.document&&(Kg=window,qg=Kg.document,Jg=qg.documentElement,Xg=k_(`div`)||{style:{}},k_(`div`),S_=M_(S_),C_=S_+`Origin`,Xg.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,O_=!!M_(`perspective`),Qg=Gg.core.reverting,Yg=1)},P_=function(e){var t=e.ownerSVGElement,n=k_(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),Jg.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),Jg.removeChild(n),i},F_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},I_=function(e){var t,n;try{t=e.getBBox()}catch{t=P_(e),n=1}return t&&(t.width||t.height)||n||(t=P_(e)),t&&!t.width&&!t.x&&!t.y?{x:+F_(e,[`x`,`cx`,`x1`])||0,y:+F_(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},L_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&I_(e))},R_=function(e,t){if(t){var n=e.style,r;t in e_&&t!==C_&&(t=S_),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(a_,`-$1`).toLowerCase())):n.removeAttribute(t)}},z_=function(e,t,n,r,i,a){var o=new jg(e._pt,t,n,0,1,a?h_:m_);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},B_={deg:1,rad:1,turn:1},V_={grid:1,flex:1},H_=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=Xg.style,c=o_.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||B_[i]||B_[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&L_(t),(p||o===`%`)&&(e_[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],hm(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===qg||!h.appendChild)&&(h=qg.body),g=h._gsap,g&&p&&g.width&&c&&g.time===Vh.time&&!g.uncache)return hm(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:R_(t,n)}else (p||o===`%`)&&!V_[A_(h,`display`)]&&(s.position=A_(t,`position`)),h===t&&(s.position=`static`),h.appendChild(Xg),m=Xg[u],h.removeChild(Xg),s.position=`absolute`;return c&&p&&(g=fm(h),g.time=Vh.time,g.width=h[u]),hm(f?m*a/d:m&&a?d/m*a:0)},U_=function(e,t,n,r){var i;return Yg||N_(),t in c_&&t!==`transform`&&(t=c_[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),e_[t]&&t!==`transform`?(i=tv(e,r),i=t===`transformOrigin`?i.svg?i.origin:nv(A_(e,C_))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=J_[t]&&J_[t](e,t,n)||A_(e,t)||pm(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?H_(e,t,i,n)+n:i},W_=function(e,t,n,r){if(!n||n===`none`){var i=M_(t,e,1),a=i&&A_(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=A_(e,`borderTopColor`))}var o=new jg(this._pt,e.style,t,0,1,Tg),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=A_(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=A_(e,t)||r,m?e.style[t]=m:R_(e,t)),l=[n,r],zh(l),n=l[0],r=l[1],d=n.match(Ip)||[],b=r.match(Ip)||[],b.length){for(;u=Ip.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=_m(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=Ip.lastIndex-v.length,v||(v=v||lp.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=H_(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?h_:m_;return Rp.test(r)&&(o.e=0),this._pt=o,o},G_={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},K_=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=G_[n]||n,t[1]=G_[r]||r,t.join(` `)},q_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],e_[o]&&(s=1,o=o===`transformOrigin`?C_:S_),R_(n,o);s&&(R_(n,S_),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,tv(n,1),a.uncache=1,T_(r)))}},J_={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new jg(e._pt,t,n,0,0,q_);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},Y_=[1,0,0,1,0,0],X_={},Z_=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},Q_=function(e){var t=A_(e,S_);return Z_(t)?Y_:t.substr(7).match(Fp).map(hm)},$_=function(e,t){var n=e._gsap||fm(e),r=e.style,i=Q_(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?Y_:i):(i===Y_&&!e.offsetParent&&e!==Jg&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Jg.appendChild(e)),i=Q_(e),s?r.display=s:R_(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Jg.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},ev=function(e,t,n,r,i,a){var o=e._gsap,s=i||$_(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==Y_&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=I_(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[C_]=`0px 0px`,a&&(z_(a,o,`xOrigin`,c,y),z_(a,o,`yOrigin`,l,b),z_(a,o,`xOffset`,u,o.xOffset),z_(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},tv=function(e,t){var n=e._gsap||new tg(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=A_(e,C_)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,ee,N,te,P,F,ne,re,ie;return n.svg=!!(e.getCTM&&L_(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[S_]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[S_]===`none`?``:s[S_])),r.scale=r.rotate=r.translate=`none`),S=$_(e,n.svg),n.svg&&(n.uncache?(ee=e.getBBox(),c=n.xOrigin-ee.x+`px `+(n.yOrigin-ee.y)+`px`,M=``):M=!t&&e.getAttribute(`data-svg-origin`),ev(e,M||c,!!M||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,x=n.yOrigin||0,S!==Y_&&(E=S[0],D=S[1],O=S[2],k=S[3],l=A=S[4],u=j=S[5],S.length===6?(f=Math.sqrt(E*E+D*D),p=Math.sqrt(k*k+O*O),m=E||D?r_(D,E)*t_:0,_=O||k?r_(O,k)*t_+m:0,_&&(p*=Math.abs(Math.cos(_*n_))),n.svg&&(l-=b-(b*E+x*O),u-=x-(b*D+x*k))):(ie=S[6],ne=S[7],te=S[8],P=S[9],F=S[10],re=S[11],l=S[12],u=S[13],d=S[14],C=r_(ie,F),h=C*t_,C&&(w=Math.cos(-C),T=Math.sin(-C),M=A*w+te*T,ee=j*w+P*T,N=ie*w+F*T,te=A*-T+te*w,P=j*-T+P*w,F=ie*-T+F*w,re=ne*-T+re*w,A=M,j=ee,ie=N),C=r_(-O,F),g=C*t_,C&&(w=Math.cos(-C),T=Math.sin(-C),M=E*w-te*T,ee=D*w-P*T,N=O*w-F*T,re=k*T+re*w,E=M,D=ee,O=N),C=r_(D,E),m=C*t_,C&&(w=Math.cos(C),T=Math.sin(C),M=E*w+D*T,ee=A*w+j*T,D=D*w-E*T,j=j*w-A*T,E=M,A=ee),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=hm(Math.sqrt(E*E+D*D+O*O)),p=hm(Math.sqrt(j*j+ie*ie)),C=r_(A,j),_=Math.abs(C)>2e-4?C*t_:0,y=re?1/(re<0?-re:re):0),n.svg&&(M=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!Z_(A_(e,S_)),M&&e.setAttribute(`transform`,M))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=hm(f),n.scaleY=hm(p),n.rotation=hm(m)+o,n.rotationX=hm(h)+o,n.rotationY=hm(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[C_]=nv(c)),n.xOffset=n.yOffset=0,n.force3D=lp.force3D,n.renderTransform=n.svg?lv:O_?cv:iv,n.uncache=0,n},nv=function(e){return(e=e.split(` `))[0]+` `+e[1]},rv=function(e,t,n){var r=ih(t);return hm(parseFloat(t)+parseFloat(H_(e,`x`,n+`px`,r)))+r},iv=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,cv(e,t)},av=`0deg`,ov=`0px`,sv=`) `,cv=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==av||l!==av)){var x=parseFloat(l)*n_,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*n_,w=Math.cos(x),a=rv(_,a,S*w*-v),o=rv(_,o,-Math.sin(x)*-v),s=rv(_,s,C*w*-v+v)}h!==ov&&(y+=`perspective(`+h+sv),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==ov||o!==ov||s!==ov)&&(y+=s!==ov||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+sv),c!==av&&(y+=`rotate(`+c+sv),l!==av&&(y+=`rotateY(`+l+sv),u!==av&&(y+=`rotateX(`+u+sv),(d!==av||f!==av)&&(y+=`skew(`+d+`, `+f+sv),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+sv),_.style[S_]=y||`translate(0, 0)`},lv=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=n_,c*=n_,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=n_,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=hm(b),x=hm(x),S=hm(S),C=hm(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=H_(f,`x`,a,`px`),y=H_(f,`y`,o,`px`)),(p||m||h||g)&&(v=hm(v+p-(p*b+m*S)+h),y=hm(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=hm(v+r/100*w.width),y=hm(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[S_]=w)},uv=function(e,t,n,r,i){var a=360,o=Sp(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?t_:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*i_)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*i_)%a-~~(s/a)*a)),e._pt=u=new jg(e._pt,t,n,r,s,u_),u.e=c,u.u=`deg`,e._props.push(n),u},dv=function(e,t){for(var n in t)e[n]=t[n];return e},fv=function(e,t,n){var r=dv({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[S_]=t,o=tv(n,1),R_(n,S_),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[S_],a[S_]=t,o=tv(n,1),a[S_]=c),e_)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=ih(c),p=ih(l),u=f===p?parseFloat(c):H_(n,s,c,p),d=parseFloat(l),e._pt=new jg(e._pt,o,s,u,d-u,l_),e._pt.u=p||0,e._props.push(s));dv(o,r)};mm(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});J_[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return U_(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var pv={name:`css`,register:N_,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;for(m in Yg||N_(),this.styles=this.styles||D_(e),C=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(om[m]&&sg(m,t,n,r,e,i)))){if(f=typeof l,p=J_[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=Sh(l)),p)p(this,e,m,l,n)&&(S=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,Lh.lastIndex=0,Lh.test(c)||(h=ih(c),g=ih(l),g?h!==g&&(c=H_(e,m,c,g)+g):h&&(l+=h)),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),C.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],Sp(c)&&~c.indexOf(`random(`)&&(c=Sh(c)),ih(c+``)||c===`auto`||(c+=lp.units[m]||ih(U_(e,m))||``),(c+``).charAt(1)===`=`&&(c=U_(e,m))):c=U_(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in c_&&(m===`autoAlpha`&&(d===1&&U_(e,`visibility`)===`hidden`&&u&&(d=0),C.push(`visibility`,0,o.visibility),z_(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=c_[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in e_,v){if(this.styles.save(m),w=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=A_(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var T=e.style.perspective;e.style.perspective=l,l=A_(e,`perspective`),T?e.style.perspective=T:R_(e,`perspective`)}u=parseFloat(l)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||tv(e,t.parseTransform),x=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new jg(this._pt,o,S_,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new jg(this._pt,b,`scaleY`,b.scaleY,(_?_m(b.scaleY,_+u):u)-b.scaleY||0,l_),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){C.push(C_,0,o[C_]),l=K_(l),b.svg?ev(e,l,0,x,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&z_(this,b,`zOrigin`,b.zOrigin,g),z_(this,o,m,nv(c),nv(l)));continue}else if(m===`svgOrigin`){ev(e,l,1,x,0,this);continue}else if(m in X_){uv(this,b,m,d,_?_m(d,_+l):l);continue}else if(m===`smoothOrigin`){z_(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){fv(this,l,e);continue}}else m in o||(m=M_(m)||m);if(v||(u||u===0)&&(d||d===0)&&!s_.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=ih(l)||(m in lp.units?lp.units[m]:h),h!==g&&(d=H_(e,m,c,g)),this._pt=new jg(this._pt,v?b:o,m,d,(_?_m(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?p_:l_),this._pt.u=g||0,v&&w!==l?(this._pt.b=c,this._pt.e=w,this._pt.r=f_):h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=d_);else if(m in o)W_.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){Yp(m,l);continue}v||(m in o?C.push(m,0,o[m]):typeof e[m]==`function`?C.push(m,2,e[m]()):C.push(m,1,c||e[m])),a.push(m)}}S&&Ag(this)},render:function(e,t){if(t.tween._time||!Qg())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:U_,aliases:c_,getSetter:function(e,t,n){var r=c_[t];return r&&r.indexOf(`,`)<0&&(t=r),t in e_&&t!==C_&&(e._gsap.x||U_(e,`x`))?n&&Zg===n?t===`scale`?y_:v_:(Zg=n||{})&&(t===`scale`?b_:x_):e.style&&!Tp(e.style[t])?g_:~t.indexOf(`-`)?__:Sg(e,t)},core:{_removeProperty:R_,_getMatrix:$_}};Gg.utils.checkPrefix=M_,Gg.core.getStyleSaver=D_,(function(e,t,n,r){var i=mm(e+`,`+t+`,`+n,function(e){e_[e]=1});mm(t,function(e){lp.units[e]=`deg`,X_[e]=1}),c_[i[13]]=e+`,`+t,mm(r,function(e){var t=e.split(`:`);c_[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),mm(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){lp.units[e]=`px`}),Gg.registerPlugin(pv);var mv=Gg.registerPlugin(pv)||Gg;mv.core.Tween;function hv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function gv(e,t,n){return t&&hv(e.prototype,t),n&&hv(e,n),e}var _v,vv,yv,bv,xv,Sv,Cv,wv,Tv,Ev,Dv,Ov,kv,Av=function(){return _v||typeof window<`u`&&(_v=window.gsap)&&_v.registerPlugin&&_v},jv=1,Mv=[],Y=[],Nv=[],Pv=Date.now,Fv=function(e,t){return t},Iv=function(){var e=Tv.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Y),r.push.apply(r,Nv),Y=n,Nv=r,Fv=function(e,n){return t[e](n)}},Lv=function(e,t){return~Nv.indexOf(e)&&Nv[Nv.indexOf(e)+1][t]},Rv=function(e){return!!~Ev.indexOf(e)},zv=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:r!==!1,capture:!!i})},Bv=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Vv=`scrollLeft`,Hv=`scrollTop`,Uv=function(){return Dv&&Dv.isPressed||Y.cache++},Wv=function(e,t){var n=function n(r){if(r||r===0){jv&&(yv.history.scrollRestoration=`manual`);var i=Dv&&Dv.isPressed;r=n.v=Math.round(r)||(Dv&&Dv.iOS?1:0),e(r),n.cacheID=Y.cache,i&&Fv(`ss`,r)}else (t||Y.cache!==n.cacheID||Fv(`ref`))&&(n.cacheID=Y.cache,n.v=e());return n.v+n.offset};return n.offset=0,e&&n},Gv={s:Vv,p:`left`,p2:`Left`,os:`right`,os2:`Right`,d:`width`,d2:`Width`,a:`x`,sc:Wv(function(e){return arguments.length?yv.scrollTo(e,Kv.sc()):yv.pageXOffset||bv[Vv]||xv[Vv]||Sv[Vv]||0})},Kv={s:Hv,p:`top`,p2:`Top`,os:`bottom`,os2:`Bottom`,d:`height`,d2:`Height`,a:`y`,op:Gv,sc:Wv(function(e){return arguments.length?yv.scrollTo(Gv.sc(),e):yv.pageYOffset||bv[Hv]||xv[Hv]||Sv[Hv]||0})},qv=function(e,t){return(t&&t._ctx&&t._ctx.selector||_v.utils.toArray)(e)[0]||(typeof e==`string`&&_v.config().nullTargetWarn!==!1?console.warn(`Element not found:`,e):null)},Jv=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Yv=function(e,t){var n=t.s,r=t.sc;Rv(e)&&(e=bv.scrollingElement||xv);var i=Y.indexOf(e),a=r===Kv.sc?1:2;!~i&&(i=Y.push(e)-1),Y[i+a]||zv(e,`scroll`,Uv);var o=Y[i+a],s=o||(Y[i+a]=Wv(Lv(e,n),!0)||(Rv(e)?r:Wv(function(t){return arguments.length?e[n]=t:e[n]})));return s.target=e,o||(s.smooth=_v.getProperty(e,`scrollBehavior`)===`smooth`),s},Xv=function(e,t,n){var r=e,i=e,a=Pv(),o=a,s=t||50,c=Math.max(500,s*3),l=function(e,t){var c=Pv();t||c-a>s?(i=r,r=e,o=a,a=c):n?r+=e:r=i+(e-i)/(c-o)*(a-o)};return{update:l,reset:function(){i=r=n?0:r,o=a=0},getVelocity:function(e){var t=o,s=i,u=Pv();return(e||e===0)&&e!==r&&l(e),a===o||u-o>c?0:(r+(n?s:-s))/((n?u:a)-t)*1e3}}},Zv=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Qv=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},$v=function(){Tv=_v.core.globals().ScrollTrigger,Tv&&Tv.core&&Iv()},ey=function(e){return _v=e||Av(),!vv&&_v&&typeof document<`u`&&document.body&&(yv=window,bv=document,xv=bv.documentElement,Sv=bv.body,Ev=[yv,bv,xv,Sv],_v.utils.clamp,kv=_v.core.context||function(){},wv=`onpointerenter`in Sv?`pointer`:`mouse`,Cv=ty.isTouch=yv.matchMedia&&yv.matchMedia(`(hover: none), (pointer: coarse)`).matches?1:`ontouchstart`in yv||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ov=ty.eventTypes=(`ontouchstart`in xv?`touchstart,touchmove,touchcancel,touchend`:`onpointerdown`in xv?`pointerdown,pointermove,pointercancel,pointerup`:`mousedown,mousemove,mouseup,mouseup`).split(`,`),setTimeout(function(){return jv=0},500),vv=1),Tv||$v(),vv};Gv.op=Kv,Y.cache=0;var ty=function(){function e(e){this.init(e)}var t=e.prototype;return t.init=function(e){vv||ey(_v)||console.warn(`Please gsap.registerPlugin(Observer)`),Tv||$v();var t=e.tolerance,n=e.dragMinimum,r=e.type,i=e.target,a=e.lineHeight,o=e.debounce,s=e.preventDefault,c=e.onStop,l=e.onStopDelay,u=e.ignore,d=e.wheelSpeed,f=e.event,p=e.onDragStart,m=e.onDragEnd,h=e.onDrag,g=e.onPress,_=e.onRelease,v=e.onRight,y=e.onLeft,b=e.onUp,x=e.onDown,S=e.onChangeX,C=e.onChangeY,w=e.onChange,T=e.onToggleX,E=e.onToggleY,D=e.onHover,O=e.onHoverEnd,k=e.onMove,A=e.ignoreCheck,j=e.isNormalizer,M=e.onGestureStart,ee=e.onGestureEnd,N=e.onWheel,te=e.onEnable,P=e.onDisable,F=e.onClick,ne=e.scrollSpeed,re=e.capture,ie=e.allowClicks,ae=e.lockAxis,oe=e.onLockAxis;this.target=i=qv(i)||xv,this.vars=e,u&&=_v.utils.toArray(u),t||=1e-9,n||=0,d||=1,ne||=1,r||=`wheel,touch,pointer`,o=o!==!1,a||=parseFloat(yv.getComputedStyle(Sv).lineHeight)||22;var I,se,ce,L,le,ue,de,R=this,fe=0,pe=0,me=e.passive||!s&&e.passive!==!1,he=Yv(i,Gv),ge=Yv(i,Kv),_e=he(),ve=ge(),ye=~r.indexOf(`touch`)&&!~r.indexOf(`pointer`)&&Ov[0]===`pointerdown`,be=Rv(i),z=i.ownerDocument||bv,xe=[0,0,0],Se=[0,0,0],Ce=0,we=function(){return Ce=Pv()},Te=function(e,t){return(R.event=e)&&u&&Jv(e.target,u)||t&&ye&&e.pointerType!==`touch`||A&&A(e,t)},Ee=function(){R._vx.reset(),R._vy.reset(),se.pause(),c&&c(R)},De=function(){var e=R.deltaX=Qv(xe),n=R.deltaY=Qv(Se),r=Math.abs(e)>=t,i=Math.abs(n)>=t;w&&(r||i)&&w(R,e,n,xe,Se),r&&(v&&R.deltaX>0&&v(R),y&&R.deltaX<0&&y(R),S&&S(R),T&&R.deltaX<0!=fe<0&&T(R),fe=R.deltaX,xe[0]=xe[1]=xe[2]=0),i&&(x&&R.deltaY>0&&x(R),b&&R.deltaY<0&&b(R),C&&C(R),E&&R.deltaY<0!=pe<0&&E(R),pe=R.deltaY,Se[0]=Se[1]=Se[2]=0),(L||ce)&&(k&&k(R),ce&&=(p&&ce===1&&p(R),h&&h(R),0),L=!1),ue&&!(ue=!1)&&oe&&oe(R),le&&=(N(R),!1),I=0},Oe=function(e,t,n){xe[n]+=e,Se[n]+=t,R._vx.update(e),R._vy.update(t),o?I||=requestAnimationFrame(De):De()},ke=function(e,t){ae&&!de&&(R.axis=de=Math.abs(e)>Math.abs(t)?`x`:`y`,ue=!0),de!==`y`&&(xe[2]+=e,R._vx.update(e,!0)),de!==`x`&&(Se[2]+=t,R._vy.update(t,!0)),o?I||=requestAnimationFrame(De):De()},Ae=function(e){if(!Te(e,1)){e=Zv(e,s);var t=e.clientX,r=e.clientY,i=t-R.x,a=r-R.y,o=R.isDragging;R.x=t,R.y=r,(o||(i||a)&&(Math.abs(R.startX-t)>=n||Math.abs(R.startY-r)>=n))&&(ce||=o?2:1,o||(R.isDragging=!0),ke(i,a))}},je=R.onPress=function(e){Te(e,1)||e&&e.button||(R.axis=de=null,se.pause(),R.isPressed=!0,e=Zv(e),fe=pe=0,R.startX=R.x=e.clientX,R.startY=R.y=e.clientY,R._vx.reset(),R._vy.reset(),zv(j?i:z,Ov[1],Ae,me,!0),R.deltaX=R.deltaY=0,g&&g(R))},Me=R.onRelease=function(e){if(!Te(e,1)){Bv(j?i:z,Ov[1],Ae,!0);var t=!isNaN(R.y-R.startY),n=R.isDragging,r=n&&(Math.abs(R.x-R.startX)>3||Math.abs(R.y-R.startY)>3),a=Zv(e);!r&&t&&(R._vx.reset(),R._vy.reset(),s&&ie&&_v.delayedCall(.08,function(){if(Pv()-Ce>300&&!e.defaultPrevented){if(e.target.click)e.target.click();else if(z.createEvent){var t=z.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,yv,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(t)}}})),R.isDragging=R.isGesturing=R.isPressed=!1,c&&n&&!j&&se.restart(!0),ce&&De(),m&&n&&m(R),_&&_(R,r)}},B=function(e){return e.touches&&e.touches.length>1&&(R.isGesturing=!0)&&M(e,R.isDragging)},Ne=function(){return(R.isGesturing=!1)||ee(R)},Pe=function(e){if(!Te(e)){var t=he(),n=ge();Oe((t-_e)*ne,(n-ve)*ne,1),_e=t,ve=n,c&&se.restart(!0)}},Fe=function(e){if(!Te(e)){e=Zv(e,s),N&&(le=!0);var t=(e.deltaMode===1?a:e.deltaMode===2?yv.innerHeight:1)*d;Oe(e.deltaX*t,e.deltaY*t,0),c&&!j&&se.restart(!0)}},Ie=function(e){if(!Te(e)){var t=e.clientX,n=e.clientY,r=t-R.x,i=n-R.y;R.x=t,R.y=n,L=!0,c&&se.restart(!0),(r||i)&&ke(r,i)}},Le=function(e){R.event=e,D(R)},Re=function(e){R.event=e,O(R)},ze=function(e){return Te(e)||Zv(e,s)&&F(R)};se=R._dc=_v.delayedCall(l||.25,Ee).pause(),R.deltaX=R.deltaY=0,R._vx=Xv(0,50,!0),R._vy=Xv(0,50,!0),R.scrollX=he,R.scrollY=ge,R.isDragging=R.isGesturing=R.isPressed=!1,kv(this),R.enable=function(e){return R.isEnabled||(zv(be?z:i,`scroll`,Uv),r.indexOf(`scroll`)>=0&&zv(be?z:i,`scroll`,Pe,me,re),r.indexOf(`wheel`)>=0&&zv(i,`wheel`,Fe,me,re),(r.indexOf(`touch`)>=0&&Cv||r.indexOf(`pointer`)>=0)&&(zv(i,Ov[0],je,me,re),zv(z,Ov[2],Me),zv(z,Ov[3],Me),ie&&zv(i,`click`,we,!0,!0),F&&zv(i,`click`,ze),M&&zv(z,`gesturestart`,B),ee&&zv(z,`gestureend`,Ne),D&&zv(i,wv+`enter`,Le),O&&zv(i,wv+`leave`,Re),k&&zv(i,wv+`move`,Ie)),R.isEnabled=!0,R.isDragging=R.isGesturing=R.isPressed=L=ce=!1,R._vx.reset(),R._vy.reset(),_e=he(),ve=ge(),e&&e.type&&je(e),te&&te(R)),R},R.disable=function(){R.isEnabled&&(Mv.filter(function(e){return e!==R&&Rv(e.target)}).length||Bv(be?z:i,`scroll`,Uv),R.isPressed&&(R._vx.reset(),R._vy.reset(),Bv(j?i:z,Ov[1],Ae,!0)),Bv(be?z:i,`scroll`,Pe,re),Bv(i,`wheel`,Fe,re),Bv(i,Ov[0],je,re),Bv(z,Ov[2],Me),Bv(z,Ov[3],Me),Bv(i,`click`,we,!0),Bv(i,`click`,ze),Bv(z,`gesturestart`,B),Bv(z,`gestureend`,Ne),Bv(i,wv+`enter`,Le),Bv(i,wv+`leave`,Re),Bv(i,wv+`move`,Ie),R.isEnabled=R.isPressed=R.isDragging=!1,P&&P(R))},R.kill=R.revert=function(){R.disable();var e=Mv.indexOf(R);e>=0&&Mv.splice(e,1),Dv===R&&(Dv=0)},Mv.push(R),j&&Rv(i)&&(Dv=R),R.enable(f)},gv(e,[{key:`velocityX`,get:function(){return this._vx.getVelocity()}},{key:`velocityY`,get:function(){return this._vy.getVelocity()}}]),e}();ty.version=`3.15.0`,ty.create=function(e){return new ty(e)},ty.register=ey,ty.getAll=function(){return Mv.slice()},ty.getById=function(e){return Mv.filter(function(t){return t.vars.id===e})[0]},Av()&&_v.registerPlugin(ty);var X,ny,Z,ry,iy,ay,oy,sy,cy,ly,uy,dy,fy,py,my,hy,gy,_y,vy,yy,by,xy,Sy,Cy,wy,Ty,Ey,Dy,Oy,ky,Ay,jy,My,Ny,Py=1,Fy=Date.now,Iy=Fy(),Ly=0,Ry=0,zy=function(e,t,n){var r=tb(e)&&(e.substr(0,6)===`clamp(`||e.indexOf(`max`)>-1);return n[`_`+t+`Clamp`]=r,r?e.substr(6,e.length-7):e},By=function(e,t){return t&&(!tb(e)||e.substr(0,6)!==`clamp(`)?`clamp(`+e+`)`:e},Vy=function e(){return Ry&&requestAnimationFrame(e)},Hy=function(){return py=1},Uy=function(){return py=0},Wy=function(e){return e},Gy=function(e){return Math.round(e*1e5)/1e5||0},Ky=function(){return typeof window<`u`},qy=function(){return X||Ky()&&(X=window.gsap)&&X.registerPlugin&&X},Jy=function(e){return!!~oy.indexOf(e)},Yy=function(e){return(e===`Height`?Ay:Z[`inner`+e])||iy[`client`+e]||ay[`client`+e]},Xy=function(e){return Lv(e,`getBoundingClientRect`)||(Jy(e)?function(){return Sx.width=Z.innerWidth,Sx.height=Ay,Sx}:function(){return Eb(e)})},Zy=function(e,t,n){var r=n.d,i=n.d2,a=n.a;return(a=Lv(e,`getBoundingClientRect`))?function(){return a()[r]}:function(){return(t?Yy(i):e[`client`+i])||0}},Qy=function(e,t){return!t||~Nv.indexOf(e)?Xy(e):function(){return Sx}},$y=function(e,t){var n=t.s,r=t.d2,i=t.d,a=t.a;return Math.max(0,(n=`scroll`+r)&&(a=Lv(e,n))?a()-Xy(e)()[i]:Jy(e)?(iy[n]||ay[n])-Yy(r):e[n]-e[`offset`+r])},eb=function(e,t){for(var n=0;n<vy.length;n+=3)(!t||~t.indexOf(vy[n+1]))&&e(vy[n],vy[n+1],vy[n+2])},tb=function(e){return typeof e==`string`},nb=function(e){return typeof e==`function`},rb=function(e){return typeof e==`number`},ib=function(e){return typeof e==`object`},ab=function(e,t,n){return e&&e.progress(+!t)&&n&&e.pause()},ob=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},sb=Math.abs,cb=`left`,lb=`top`,ub=`right`,db=`bottom`,fb=`width`,pb=`height`,mb=`Right`,hb=`Left`,gb=`Top`,_b=`Bottom`,vb=`padding`,yb=`margin`,bb=`Width`,xb=`Height`,Sb=`px`,Cb=function(e){return Z.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},wb=function(e){var t=Cb(e).position;e.style.position=t===`absolute`||t===`fixed`?t:`relative`},Tb=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Eb=function(e,t){var n=t&&Cb(e)[my]!==`matrix(1, 0, 0, 1, 0, 0)`&&X.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},Db=function(e,t){var n=t.d2;return e[`offset`+n]||e[`client`+n]||0},Ob=function(e){var t=[],n=e.labels,r=e.duration(),i;for(i in n)t.push(n[i]/r);return t},kb=function(e){return function(t){return X.utils.snap(Ob(e),t)}},Ab=function(e){var t=X.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(e,t){return e-t});return n?function(e,r,i){i===void 0&&(i=.001);var a;if(!r)return t(e);if(r>0){for(e-=i,a=0;a<n.length;a++)if(n[a]>=e)return n[a];return n[a-1]}else for(a=n.length,e+=i;a--;)if(n[a]<=e)return n[a];return n[0]}:function(n,r,i){i===void 0&&(i=.001);var a=t(n);return!r||Math.abs(a-n)<i||a-n<0==r<0?a:t(r<0?n-e:n+e)}},jb=function(e){return function(t,n){return Ab(Ob(e))(t,n.direction)}},Mb=function(e,t,n,r){return n.split(`,`).forEach(function(n){return e(t,n,r)})},Nb=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})},Pb=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Fb=function(e,t,n){n&&=n.wheelHandler,n&&(e(t,`wheel`,n),e(t,`touchmove`,n))},Ib={startColor:`green`,endColor:`red`,indent:0,fontSize:`16px`,fontWeight:`normal`},Lb={toggleActions:`play`,anticipatePin:0},Rb={top:0,left:0,center:.5,bottom:1,right:1},zb=function(e,t){if(tb(e)){var n=e.indexOf(`=`),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf(`%`)>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Rb?Rb[e]*t:~e.indexOf(`%`)?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Bb=function(e,t,n,r,i,a,o,s){var c=i.startColor,l=i.endColor,u=i.fontSize,d=i.indent,f=i.fontWeight,p=ry.createElement(`div`),m=Jy(n)||Lv(n,`pinType`)===`fixed`,h=e.indexOf(`scroller`)!==-1,g=m?ay:n.tagName===`IFRAME`?n.contentDocument.body:n,_=e.indexOf(`start`)!==-1,v=_?c:l,y=`border-color:`+v+`;font-size:`+u+`;color:`+v+`;font-weight:`+f+`;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;return y+=`position:`+((h||s)&&m?`fixed;`:`absolute;`),(h||s||!m)&&(y+=(r===Kv?ub:db)+`:`+(a+parseFloat(d))+`px;`),o&&(y+=`box-sizing:border-box;text-align:left;width:`+o.offsetWidth+`px;`),p._isStart=_,p.setAttribute(`class`,`gsap-marker-`+e+(t?` marker-`+t:``)),p.style.cssText=y,p.innerText=t||t===0?e+`-`+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p[`offset`+r.op.d2],Vb(p,0,r,_),p},Vb=function(e,t,n,r){var i={display:`block`},a=n[r?`os2`:`p2`],o=n[r?`p2`:`os2`];e._isFlipped=r,i[n.a+`Percent`]=r?-100:0,i[n.a]=r?`1px`:0,i[`border`+a+bb]=1,i[`border`+o+bb]=0,i[n.p]=t+`px`,X.set(e,i)},Q=[],Hb={},Ub,Wb=function(){return Fy()-Ly>34&&(Ub||=requestAnimationFrame(px))},Gb=function(){(!Sy||!Sy.isPressed||Sy.startX>ay.clientWidth)&&(Y.cache++,Sy?Ub||=requestAnimationFrame(px):px(),Ly||Zb(`scrollStart`),Ly=Fy())},Kb=function(){Ty=Z.innerWidth,wy=Z.innerHeight},qb=function(e){Y.cache++,(e===!0||!fy&&!xy&&!ry.fullscreenElement&&!ry.webkitFullscreenElement&&(!Cy||Ty!==Z.innerWidth||Math.abs(Z.innerHeight-wy)>Z.innerHeight*.25))&&sy.restart(!0)},Jb={},Yb=[],Xb=function e(){return Pb($,`scrollEnd`,e)||lx(!0)},Zb=function(e){return Jb[e]&&Jb[e].map(function(e){return e()})||Yb},Qb=[],$b=function(e){for(var t=0;t<Qb.length;t+=5)(!e||Qb[t+4]&&Qb[t+4].query===e)&&(Qb[t].style.cssText=Qb[t+1],Qb[t].getBBox&&Qb[t].setAttribute(`transform`,Qb[t+2]||``),Qb[t+3].uncache=1)},ex=function(){return Y.forEach(function(e){return nb(e)&&++e.cacheID&&(e.rec=e())})},tx=function(e,t){var n;for(hy=0;hy<Q.length;hy++)n=Q[hy],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));jy=!0,t&&$b(t),t||Zb(`revert`)},nx=function(e,t){Y.cache++,(t||!rx)&&Y.forEach(function(e){return nb(e)&&e.cacheID++&&(e.rec=0)}),tb(e)&&(Z.history.scrollRestoration=Oy=e)},rx,ix=0,ax,ox=function(){if(ax!==ix){var e=ax=ix;requestAnimationFrame(function(){return e===ix&&lx(!0)})}},sx=function(){ay.appendChild(ky),Ay=!Sy&&ky.offsetHeight||Z.innerHeight,ay.removeChild(ky)},cx=function(e){return cy(`.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`).forEach(function(t){return t.style.display=e?`none`:`block`})},lx=function(e,t){if(iy=ry.documentElement,ay=ry.body,oy=[Z,ry,iy,ay],Ly&&!e&&!jy){Nb($,`scrollEnd`,Xb);return}sx(),rx=$.isRefreshing=!0,jy||ex();var n=Zb(`refreshInit`);yy&&$.sort(),t||tx(),Y.forEach(function(e){nb(e)&&(e.smooth&&(e.target.style.scrollBehavior=`auto`),e(0))}),Q.slice(0).forEach(function(e){return e.refresh()}),jy=!1,Q.forEach(function(e){if(e._subPinOffset&&e.pin){var t=e.vars.horizontal?`offsetWidth`:`offsetHeight`,n=e.pin[t];e.revert(!0,1),e.adjustPinSpacing(e.pin[t]-n),e.refresh()}}),My=1,cx(!0),Q.forEach(function(e){var t=$y(e.scroller,e._dir),n=e.vars.end===`max`||e._endClamp&&e.end>t,r=e._startClamp&&e.start>=t;(n||r)&&e.setPositions(r?t-1:e.start,n?Math.max(r?t:e.start+1,t):e.end,!0)}),cx(!1),My=0,n.forEach(function(e){return e&&e.render&&e.render(-1)}),Y.forEach(function(e){nb(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior=`smooth`}),e.rec&&e(e.rec))}),nx(Oy,1),sy.pause(),ix++,rx=2,px(2),Q.forEach(function(e){return nb(e.vars.onRefresh)&&e.vars.onRefresh(e)}),rx=$.isRefreshing=!1,Zb(`refresh`)},ux=0,dx=1,fx,px=function(e){if(e===2||!rx&&!jy){$.isUpdating=!0,fx&&fx.update(0);var t=Q.length,n=Fy(),r=n-Iy>=50,i=t&&Q[0].scroll();if(dx=ux>i?-1:1,rx||(ux=i),r&&(Ly&&!py&&n-Ly>200&&(Ly=0,Zb(`scrollEnd`)),uy=Iy,Iy=n),dx<0){for(hy=t;hy-- >0;)Q[hy]&&Q[hy].update(0,r);dx=1}else for(hy=0;hy<t;hy++)Q[hy]&&Q[hy].update(0,r);$.isUpdating=!1}Ub=0},mx=[cb,lb,db,ub,yb+_b,yb+mb,yb+gb,yb+hb,`display`,`flexShrink`,`float`,`zIndex`,`gridColumnStart`,`gridColumnEnd`,`gridRowStart`,`gridRowEnd`,`gridArea`,`justifySelf`,`alignSelf`,`placeSelf`,`order`],hx=mx.concat([fb,pb,`boxSizing`,`max`+bb,`max`+xb,`position`,yb,vb,vb+gb,vb+mb,vb+_b,vb+hb]),gx=function(e,t,n){yx(n);var r=e._gsap;if(r.spacerIsNative)yx(r.spacerState);else if(e._gsap.swappedIn){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}e._gsap.swappedIn=!1},_x=function(e,t,n,r){if(!e._gsap.swappedIn){for(var i=mx.length,a=t.style,o=e.style,s;i--;)s=mx[i],a[s]=n[s];a.position=n.position===`absolute`?`absolute`:`relative`,n.display===`inline`&&(a.display=`inline-block`),o[db]=o[ub]=`auto`,a.flexBasis=n.flexBasis||`auto`,a.overflow=`visible`,a.boxSizing=`border-box`,a[fb]=Db(e,Gv)+Sb,a[pb]=Db(e,Kv)+Sb,a[vb]=o[yb]=o[lb]=o[cb]=`0`,yx(r),o[fb]=o[`max`+bb]=n[fb],o[pb]=o[`max`+xb]=n[pb],o[vb]=n[vb],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},vx=/([A-Z])/g,yx=function(e){if(e){var t=e.t.style,n=e.length,r=0,i,a;for((e.t._gsap||X.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],i=e[r],a?t[i]=a:t[i]&&t.removeProperty(i.replace(vx,`-$1`).toLowerCase())}},bx=function(e){for(var t=hx.length,n=e.style,r=[],i=0;i<t;i++)r.push(hx[i],n[hx[i]]);return r.t=e,r},xx=function(e,t,n){for(var r=[],i=e.length,a=n?8:0,o;a<i;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Sx={left:0,top:0},Cx=function(e,t,n,r,i,a,o,s,c,l,u,d,f,p){nb(e)&&(e=e(s)),tb(e)&&e.substr(0,3)===`max`&&(e=d+(e.charAt(4)===`=`?zb(`0`+e.substr(3),n):0));var m=f?f.time():0,h,g,_;if(f&&f.seek(0),isNaN(e)||(e=+e),rb(e))f&&(e=X.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&Vb(o,n,r,!0);else{nb(t)&&(t=t(s));var v=(e||`0`).split(` `),y,b,x,S;_=qv(t,s)||ay,y=Eb(_)||{},(!y||!y.left&&!y.top)&&Cb(_).display===`none`&&(S=_.style.display,_.style.display=`block`,y=Eb(_),S?_.style.display=S:_.style.removeProperty(`display`)),b=zb(v[0],y[r.d]),x=zb(v[1]||`0`,n),e=y[r.p]-c[r.p]-l+b+i-x,o&&Vb(o,x,r,n-x<20||o._isStart&&x>20),n-=n-x}if(p&&(s[p]=e||-.001,e<0&&(e=0)),a){var C=e+n,w=a._isStart;h=`scroll`+r.d2,Vb(a,C,r,w&&C>20||!w&&(u?Math.max(ay[h],iy[h]):a.parentNode[h])<=C+1),u&&(c=Eb(o),u&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+Sb))}return f&&_&&(h=Eb(_),f.seek(d),g=Eb(_),f._caScrollDist=h[r.p]-g[r.p],e=e/f._caScrollDist*d),f&&f.seek(m),f?e:Math.round(e)},wx=/(webkit|moz|length|cssText|inset)/i,Tx=function(e,t,n,r){if(e.parentNode!==t){var i=e.style,a,o;if(t===ay){for(a in e._stOrig=i.cssText,o=Cb(e),o)!+a&&!wx.test(a)&&o[a]&&typeof i[a]==`string`&&a!==`0`&&(i[a]=o[a]);i.top=n,i.left=r}else i.cssText=e._stOrig;X.core.getCache(e).uncache=1,t.appendChild(e)}},Ex=function(e,t,n){var r=t,i=r;return function(t){var a=Math.round(e());return a!==r&&a!==i&&Math.abs(a-r)>3&&Math.abs(a-i)>3&&(t=a,n&&n()),i=r,r=Math.round(t),r}},Dx=function(e,t,n){var r={};r[t.p]=`+=`+n,X.set(e,r)},Ox=function(e,t){var n=Yv(e,t),r=`_scroll`+t.p2,i=function t(i,a,o,s,c){var l=t.tween,u=a.onComplete,d={};o||=n();var f=Ex(n,o,function(){l.kill(),t.tween=0});return c=s&&c||0,s||=i-o,l&&l.kill(),a[r]=i,a.inherit=!1,a.modifiers=d,d[r]=function(){return f(o+s*l.ratio+c*l.ratio*l.ratio)},a.onUpdate=function(){Y.cache++,t.tween&&px()},a.onComplete=function(){t.tween=0,u&&u.call(l)},l=t.tween=X.to(e,a),l};return e[r]=n,n.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},Nb(e,`wheel`,n.wheelHandler),$.isTouch&&Nb(e,`touchmove`,n.wheelHandler),i},$=function(){function e(t,n){ny||e.register(X)||console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),Dy(this),this.init(t,n)}var t=e.prototype;return t.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ry){this.update=this.refresh=this.kill=Wy;return}t=Tb(tb(t)||rb(t)||t.nodeType?{trigger:t}:t,Lb);var r=t,i=r.onUpdate,a=r.toggleClass,o=r.id,s=r.onToggle,c=r.onRefresh,l=r.scrub,u=r.trigger,d=r.pin,f=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,h=r.onScrubComplete,g=r.onSnapComplete,_=r.once,v=r.snap,y=r.pinReparent,b=r.pinSpacer,x=r.containerAnimation,S=r.fastScrollEnd,C=r.preventOverlaps,w=t.horizontal||t.containerAnimation&&t.horizontal!==!1?Gv:Kv,T=!l&&l!==0,E=qv(t.scroller||Z),D=X.core.getCache(E),O=Jy(E),k=(`pinType`in t?t.pinType:Lv(E,`pinType`)||O&&`fixed`)===`fixed`,A=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],j=T&&t.toggleActions.split(` `),M=`markers`in t?t.markers:Lb.markers,ee=O?0:parseFloat(Cb(E)[`border`+w.p2+bb])||0,N=this,te=t.onRefreshInit&&function(){return t.onRefreshInit(N)},P=Zy(E,O,w),F=Qy(E,O),ne=0,re=0,ie=0,ae=Yv(E,w),oe,I,se,ce,L,le,ue,de,R,fe,pe,me,he,ge,_e,ve,ye,be,z,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,B,Ne,Pe,Fe,Ie,Le,Re,ze;if(N._startClamp=N._endClamp=!1,N._dir=w,m*=45,N.scroller=E,N.scroll=x?x.time.bind(x):ae,ce=ae(),N.vars=t,n||=t.animation,`refreshPriority`in t&&(yy=1,t.refreshPriority===-9999&&(fx=N)),D.tweenScroll=D.tweenScroll||{top:Ox(E,Kv),left:Ox(E,Gv)},N.tweenTo=oe=D.tweenScroll[w.p],N.scrubDuration=function(e){Ne=rb(e)&&e,Ne?B?B.duration(e):B=X.to(n,{ease:`expo`,totalProgress:`+=0`,inherit:!1,duration:Ne,paused:!0,onComplete:function(){return h&&h(N)}}):(B&&B.progress(1).kill(),B=0)},n&&(n.vars.lazy=!1,n._initted&&!N.isReverted||n.vars.immediateRender!==!1&&t.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),N.animation=n.pause(),n.scrollTrigger=N,N.scrubDuration(l),je=0,o||=n.vars.id),v&&((!ib(v)||v.push)&&(v={snapTo:v}),`scrollBehavior`in ay.style&&X.set(O?[ay,iy]:E,{scrollBehavior:`auto`}),Y.forEach(function(e){return nb(e)&&e.target===(O?ry.scrollingElement||iy:E)&&(e.smooth=!1)}),se=nb(v.snapTo)?v.snapTo:v.snapTo===`labels`?kb(n):v.snapTo===`labelsDirectional`?jb(n):v.directional===!1?X.utils.snap(v.snapTo):function(e,t){return Ab(v.snapTo)(e,Fy()-re<500?0:t.direction)},Pe=v.duration||{min:.1,max:2},Pe=ib(Pe)?ly(Pe.min,Pe.max):ly(Pe,Pe),Fe=X.delayedCall(v.delay||Ne/2||.1,function(){var e=ae(),t=Fy()-re<500,r=oe.tween;if((t||Math.abs(N.getVelocity())<10)&&!r&&!py&&ne!==e){var i=(e-le)/ge,a=n&&!T?n.totalProgress():i,o=t?0:(a-Me)/(Fy()-uy)*1e3||0,s=X.utils.clamp(-i,1-i,sb(o/2)*o/.185),c=i+(v.inertia===!1?0:s),l,u,d=v,f=d.onStart,p=d.onInterrupt,m=d.onComplete;if(l=se(c,N),rb(l)||(l=c),u=Math.max(0,Math.round(le+l*ge)),e<=ue&&e>=le&&u!==e){if(r&&!r._initted&&r.data<=sb(u-e))return;v.inertia===!1&&(s=l-i),oe(u,{duration:Pe(sb(Math.max(sb(c-a),sb(l-a))*.185/o/.05||0)),ease:v.ease||`power3`,data:sb(u-e),onInterrupt:function(){return Fe.restart(!0)&&p&&ob(N,p)},onComplete:function(){N.update(),ne=ae(),n&&!T&&(B?B.resetTo(`totalProgress`,l,n._tTime/n._tDur):n.progress(l)),je=Me=n&&!T?n.totalProgress():N.progress,g&&g(N),m&&ob(N,m)}},e,s*ge,u-e-s*ge),f&&ob(N,f,oe.tween)}}else N.isActive&&ne!==e&&Fe.restart(!0)}).pause()),o&&(Hb[o]=N),u=N.trigger=qv(u||d!==!0&&d),ze=u&&u._gsap&&u._gsap.stRevert,ze&&=ze(N),d=d===!0?u:qv(d),tb(a)&&(a={targets:u,className:a}),d&&(f===!1||f===yb||(f=!f&&d.parentNode&&d.parentNode.style&&Cb(d.parentNode).display===`flex`?!1:vb),N.pin=d,I=X.core.getCache(d),I.spacer?_e=I.pinState:(b&&(b=qv(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),I.spacerIsNative=!!b,b&&(I.spacerState=bx(b))),I.spacer=be=b||ry.createElement(`div`),be.classList.add(`pin-spacer`),o&&be.classList.add(`pin-spacer-`+o),I.pinState=_e=bx(d)),t.force3D!==!1&&X.set(d,{force3D:!0}),N.spacer=be=I.spacer,Ae=Cb(d),Te=Ae[f+w.os2],xe=X.getProperty(d),Se=X.quickSetter(d,w.a,Sb),_x(d,be,Ae),ye=bx(d)),M){me=ib(M)?Tb(M,Ib):Ib,fe=Bb(`scroller-start`,o,E,w,me,0),pe=Bb(`scroller-end`,o,E,w,me,0,fe),z=fe[`offset`+w.op.d2];var Be=qv(Lv(E,`content`)||E);de=this.markerStart=Bb(`start`,o,Be,w,me,z,0,x),R=this.markerEnd=Bb(`end`,o,Be,w,me,z,0,x),x&&(Re=X.quickSetter([de,R],w.a,Sb)),!k&&!(Nv.length&&Lv(E,`fixedMarkers`)===!0)&&(wb(O?ay:E),X.set([fe,pe],{force3D:!0}),De=X.quickSetter(fe,w.a,Sb),ke=X.quickSetter(pe,w.a,Sb))}if(x){var Ve=x.vars.onUpdate,He=x.vars.onUpdateParams;x.eventCallback(`onUpdate`,function(){N.update(0,0,1),Ve&&Ve.apply(x,He||[])})}if(N.previous=function(){return Q[Q.indexOf(N)-1]},N.next=function(){return Q[Q.indexOf(N)+1]},N.revert=function(e,t){if(!t)return N.kill(!0);var r=e!==!1||!N.enabled,i=fy;r!==N.isReverted&&(r&&(Ie=Math.max(ae(),N.scroll.rec||0),ie=N.progress,Le=n&&n.progress()),de&&[de,R,fe,pe].forEach(function(e){return e.style.display=r?`none`:`block`}),r&&(fy=N,N.update(r)),d&&(!y||!N.isActive)&&(r?gx(d,be,_e):_x(d,be,Cb(d),Ee)),r||N.update(r),fy=i,N.isReverted=r)},N.refresh=function(r,i,a,o){if(!((fy||!N.enabled)&&!i)){if(d&&r&&Ly){Nb(e,`scrollEnd`,Xb);return}!rx&&te&&te(N),fy=N,oe.tween&&!a&&(oe.tween.kill(),oe.tween=0),B&&B.pause(),p&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(e){return e.vars.immediateRender&&e.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var s=P(),l=F(),m=x?x.duration():$y(E,w),h=ge<=.01||!ge,g=0,_=o||0,v=ib(a)?a.end:t.end,b=t.endTrigger||u,S=ib(a)?a.start:t.start||(t.start===0||!u?0:d?`0 0`:`0 100%`),C=N.pinnedContainer=t.pinnedContainer&&qv(t.pinnedContainer,N),D=u&&Math.max(0,Q.indexOf(N))||0,A=D,j,I,se,me,z,Se,Te,De,ke,Ae,je,Me,Ne;for(M&&ib(a)&&(Me=X.getProperty(fe,w.p),Ne=X.getProperty(pe,w.p));A-- >0;)Se=Q[A],Se.end||Se.refresh(0,1)||(fy=N),Te=Se.pin,Te&&(Te===u||Te===d||Te===C)&&!Se.isReverted&&(Ae||=[],Ae.unshift(Se),Se.revert(!0,!0)),Se!==Q[A]&&(D--,A--);for(nb(S)&&(S=S(N)),S=zy(S,`start`,N),le=Cx(S,u,s,w,ae(),de,fe,N,l,ee,k,m,x,N._startClamp&&`_startClamp`)||(d?-.001:0),nb(v)&&(v=v(N)),tb(v)&&!v.indexOf(`+=`)&&(~v.indexOf(` `)?v=(tb(S)?S.split(` `)[0]:``)+v:(g=zb(v.substr(2),s),v=tb(S)?S:(x?X.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,le):le)+g,b=u)),v=zy(v,`end`,N),ue=Math.max(le,Cx(v||(b?`100% 0`:m),b,s,w,ae()+g,R,pe,N,l,ee,k,m,x,N._endClamp&&`_endClamp`))||-.001,g=0,A=D;A--;)Se=Q[A]||{},Te=Se.pin,Te&&Se.start-Se._pinPush<=le&&!x&&Se.end>0&&(j=Se.end-(N._startClamp?Math.max(0,Se.start):Se.start),(Te===u&&Se.start-Se._pinPush<le||Te===C)&&isNaN(S)&&(g+=j*(1-Se.progress)),Te===d&&(_+=j));if(le+=g,ue+=g,N._startClamp&&(N._startClamp+=g),N._endClamp&&!rx&&(N._endClamp=ue||-.001,ue=Math.min(ue,$y(E,w))),ge=ue-le||(le-=.01)&&.001,h&&(ie=X.utils.clamp(0,1,X.utils.normalize(le,ue,Ie))),N._pinPush=_,de&&g&&(j={},j[w.a]=`+=`+g,C&&(j[w.p]=`-=`+ae()),X.set([de,R],j)),d&&!(My&&N.end>=$y(E,w)))j=Cb(d),me=w===Kv,se=ae(),Ce=parseFloat(xe(w.a))+_,!m&&ue>1&&(je=(O?ry.scrollingElement||iy:E).style,je={style:je,value:je[`overflow`+w.a.toUpperCase()]},O&&Cb(ay)[`overflow`+w.a.toUpperCase()]!==`scroll`&&(je.style[`overflow`+w.a.toUpperCase()]=`scroll`)),_x(d,be,j),ye=bx(d),I=Eb(d,!0),De=k&&Yv(E,me?Gv:Kv)(),f?(Ee=[f+w.os2,ge+_+Sb],Ee.t=be,A=f===vb?Db(d,w)+ge+_:0,A&&(Ee.push(w.d,A+Sb),be.style.flexBasis!==`auto`&&(be.style.flexBasis=A+Sb)),yx(Ee),C&&Q.forEach(function(e){e.pin===C&&e.vars.pinSpacing!==!1&&(e._subPinOffset=!0)}),k&&ae(Ie)):(A=Db(d,w),A&&be.style.flexBasis!==`auto`&&(be.style.flexBasis=A+Sb)),k&&(z={top:I.top+(me?se-le:De)+Sb,left:I.left+(me?De:se-le)+Sb,boxSizing:`border-box`,position:`fixed`},z[fb]=z[`max`+bb]=Math.ceil(I.width)+Sb,z[pb]=z[`max`+xb]=Math.ceil(I.height)+Sb,z[yb]=z[yb+gb]=z[yb+mb]=z[yb+_b]=z[yb+hb]=`0`,z[vb]=j[vb],z[vb+gb]=j[vb+gb],z[vb+mb]=j[vb+mb],z[vb+_b]=j[vb+_b],z[vb+hb]=j[vb+hb],ve=xx(_e,z,y),rx&&ae(0)),n?(ke=n._initted,by(1),n.render(n.duration(),!0,!0),we=xe(w.a)-Ce+ge+_,Oe=Math.abs(ge-we)>1,k&&Oe&&ve.splice(ve.length-2,2),n.render(0,!0,!0),ke||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),by(0)):we=ge,je&&(je.value?je.style[`overflow`+w.a.toUpperCase()]=je.value:je.style.removeProperty(`overflow-`+w.a));else if(u&&ae()&&!x)for(I=u.parentNode;I&&I!==ay;)I._pinOffset&&(le-=I._pinOffset,ue-=I._pinOffset),I=I.parentNode;Ae&&Ae.forEach(function(e){return e.revert(!1,!0)}),N.start=le,N.end=ue,ce=L=rx?Ie:ae(),!x&&!rx&&(ce<Ie&&ae(Ie),N.scroll.rec=0),N.revert(!1,!0),re=Fy(),Fe&&(ne=-1,Fe.restart(!0)),fy=0,n&&T&&(n._initted||Le)&&n.progress()!==Le&&n.progress(Le||0,!0).render(n.time(),!0,!0),(h||ie!==N.progress||x||p||n&&!n._initted)&&(n&&!T&&(n._initted||ie||n.vars.immediateRender!==!1)&&n.totalProgress(x&&le<-.001&&!ie?X.utils.normalize(le,ue,0):ie,!0),N.progress=h||(ce-le)/ge===ie?0:ie),d&&f&&(be._pinOffset=Math.round(N.progress*we)),B&&B.invalidate(),isNaN(Me)||(Me-=X.getProperty(fe,w.p),Ne-=X.getProperty(pe,w.p),Dx(fe,w,Me),Dx(de,w,Me-(o||0)),Dx(pe,w,Ne),Dx(R,w,Ne-(o||0))),h&&!rx&&N.update(),c&&!rx&&!he&&(he=!0,c(N),he=!1)}},N.getVelocity=function(){return(ae()-L)/(Fy()-uy)*1e3||0},N.endAnimation=function(){ab(N.callbackAnimation),n&&(B?B.progress(1):n.paused()?T||ab(n,N.direction<0,1):ab(n,n.reversed()))},N.labelToScroll=function(e){return n&&n.labels&&(le||N.refresh()||le)+n.labels[e]/n.duration()*ge||0},N.getTrailing=function(e){var t=Q.indexOf(N),n=N.direction>0?Q.slice(0,t).reverse():Q.slice(t+1);return(tb(e)?n.filter(function(t){return t.vars.preventOverlaps===e}):n).filter(function(e){return N.direction>0?e.end<=le:e.start>=ue})},N.update=function(e,t,r){if(!(x&&!r&&!e)){var o=rx===!0?Ie:N.scroll(),c=e?0:(o-le)/ge,u=c<0?0:c>1?1:c||0,p=N.progress,h,g,b,D,O,M,ee,te;if(t&&(L=ce,ce=x?ae():o,v&&(Me=je,je=n&&!T?n.totalProgress():u)),m&&d&&!fy&&!Py&&Ly&&(!u&&le<o+(o-L)/(Fy()-uy)*m?u=1e-4:u===1&&ue>o+(o-L)/(Fy()-uy)*m&&(u=.9999)),u!==p&&N.enabled){if(h=N.isActive=!!u&&u<1,g=!!p&&p<1,M=h!==g,O=M||!!u!=!!p,N.direction=u>p?1:-1,N.progress=u,O&&!fy&&(b=u&&!p?0:u===1?1:p===1?2:3,T&&(D=!M&&j[b+1]!==`none`&&j[b+1]||j[b],te=n&&(D===`complete`||D===`reset`||D in n))),C&&(M||te)&&(te||l||!n)&&(nb(C)?C(N):N.getTrailing(C).forEach(function(e){return e.endAnimation()})),T||(B&&!fy&&!Py?(B._dp._time-B._start!==B._time&&B.render(B._dp._time-B._start),B.resetTo?B.resetTo(`totalProgress`,u,n._tTime/n._tDur):(B.vars.totalProgress=u,B.invalidate().restart())):n&&n.totalProgress(u,!!(fy&&(re||e)))),d){if(e&&f&&(be.style[f+w.os2]=Te),!k)Se(Gy(Ce+we*u));else if(O){if(ee=!e&&u>p&&ue+1>o&&o+1>=$y(E,w),y)if(!e&&(h||ee)){var P=Eb(d,!0),F=o-le;Tx(d,ay,P.top+(w===Kv?F:0)+Sb,P.left+(w===Kv?0:F)+Sb)}else Tx(d,be);yx(h||ee?ve:ye),Oe&&u<1&&h||Se(Ce+(u===1&&!ee?we:0))}}v&&!oe.tween&&!fy&&!Py&&Fe.restart(!0),a&&(M||_&&u&&(u<1||!Ny))&&cy(a.targets).forEach(function(e){return e.classList[h||_?`add`:`remove`](a.className)}),i&&!T&&!e&&i(N),O&&!fy?(T&&(te&&(D===`complete`?n.pause().totalProgress(1):D===`reset`?n.restart(!0).pause():D===`restart`?n.restart(!0):n[D]()),i&&i(N)),(M||!Ny)&&(s&&M&&ob(N,s),A[b]&&ob(N,A[b]),_&&(u===1?N.kill(!1,1):A[b]=0),M||(b=u===1?1:3,A[b]&&ob(N,A[b]))),S&&!h&&Math.abs(N.getVelocity())>(rb(S)?S:2500)&&(ab(N.callbackAnimation),B?B.progress(1):ab(n,D===`reverse`?1:!u,1))):T&&i&&!fy&&i(N)}if(ke){var ne=x?o/x.duration()*(x._caScrollDist||0):o;De(ne+ +!!fe._isFlipped),ke(ne)}Re&&Re(-o/x.duration()*(x._caScrollDist||0))}},N.enable=function(t,n){N.enabled||(N.enabled=!0,Nb(E,`resize`,qb),O||Nb(E,`scroll`,Gb),te&&Nb(e,`refreshInit`,te),t!==!1&&(N.progress=ie=0,ce=L=ne=ae()),n!==!1&&N.refresh())},N.getTween=function(e){return e&&oe?oe.tween:B},N.setPositions=function(e,t,n,r){if(x){var i=x.scrollTrigger,a=x.duration(),o=i.end-i.start;e=i.start+o*e/a,t=i.start+o*t/a}N.refresh(!1,!1,{start:By(e,n&&!!N._startClamp),end:By(t,n&&!!N._endClamp)},r),N.update()},N.adjustPinSpacing=function(e){if(Ee&&e){var t=Ee.indexOf(w.d)+1;Ee[t]=parseFloat(Ee[t])+e+Sb,Ee[1]=parseFloat(Ee[1])+e+Sb,yx(Ee)}},N.disable=function(t,n){if(t!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,n||B&&B.pause(),Ie=0,I&&(I.uncache=1),te&&Pb(e,`refreshInit`,te),Fe&&(Fe.pause(),oe.tween&&oe.tween.kill()&&(oe.tween=0)),!O)){for(var r=Q.length;r--;)if(Q[r].scroller===E&&Q[r]!==N)return;Pb(E,`resize`,qb),O||Pb(E,`scroll`,Gb)}},N.kill=function(e,r){N.disable(e,r),B&&!r&&B.kill(),o&&delete Hb[o];var i=Q.indexOf(N);i>=0&&Q.splice(i,1),i===hy&&dx>0&&hy--,i=0,Q.forEach(function(e){return e.scroller===N.scroller&&(i=1)}),i||rx||(N.scroll.rec=0),n&&(n.scrollTrigger=null,e&&n.revert({kill:!1}),r||n.kill()),de&&[de,R,fe,pe].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),fx===N&&(fx=0),d&&(I&&(I.uncache=1),i=0,Q.forEach(function(e){return e.pin===d&&i++}),i||(I.spacer=0)),t.onKill&&t.onKill(N)},Q.push(N),N.enable(!1,!1),ze&&ze(N),n&&n.add&&!ge){var Ue=N.update;N.update=function(){N.update=Ue,Y.cache++,le||ue||N.refresh()},X.delayedCall(.01,N.update),ge=.01,le=ue=0}else N.refresh();d&&ox()},e.register=function(t){return ny||=(X=t||qy(),Ky()&&window.document&&e.enable(),Ry),ny},e.defaults=function(e){if(e)for(var t in e)Lb[t]=e[t];return Lb},e.disable=function(e,t){Ry=0,Q.forEach(function(n){return n[t?`kill`:`disable`](e)}),Pb(Z,`wheel`,Gb),Pb(ry,`scroll`,Gb),clearInterval(dy),Pb(ry,`touchcancel`,Wy),Pb(ay,`touchstart`,Wy),Mb(Pb,ry,`pointerdown,touchstart,mousedown`,Hy),Mb(Pb,ry,`pointerup,touchend,mouseup`,Uy),sy.kill(),eb(Pb);for(var n=0;n<Y.length;n+=3)Fb(Pb,Y[n],Y[n+1]),Fb(Pb,Y[n],Y[n+2])},e.enable=function(){if(Z=window,ry=document,iy=ry.documentElement,ay=ry.body,X)if(cy=X.utils.toArray,ly=X.utils.clamp,Dy=X.core.context||Wy,by=X.core.suppressOverwrites||Wy,Oy=Z.history.scrollRestoration||`auto`,ux=Z.pageYOffset||0,X.core.globals(`ScrollTrigger`,e),ay){Ry=1,ky=document.createElement(`div`),ky.style.height=`100vh`,ky.style.position=`absolute`,sx(),Vy(),ty.register(X),e.isTouch=ty.isTouch,Ey=ty.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Cy=ty.isTouch===1,Nb(Z,`wheel`,Gb),oy=[Z,ry,iy,ay],X.matchMedia?(e.matchMedia=function(e){var t=X.matchMedia(),n;for(n in e)t.add(n,e[n]);return t},X.addEventListener(`matchMediaInit`,function(){ex(),tx()}),X.addEventListener(`matchMediaRevert`,function(){return $b()}),X.addEventListener(`matchMedia`,function(){lx(0,1),Zb(`matchMedia`)}),X.matchMedia().add(`(orientation: portrait)`,function(){return Kb(),Kb})):console.warn(`Requires GSAP 3.11.0 or later`),Kb(),Nb(ry,`scroll`,Gb);var t=ay.hasAttribute(`style`),n=ay.style,r=n.borderTopStyle,i=X.core.Animation.prototype,a,o;for(i.revert||Object.defineProperty(i,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle=`solid`,a=Eb(ay),Kv.m=Math.round(a.top+Kv.sc())||0,Gv.m=Math.round(a.left+Gv.sc())||0,r?n.borderTopStyle=r:n.removeProperty(`border-top-style`),t||(ay.setAttribute(`style`,``),ay.removeAttribute(`style`)),dy=setInterval(Wb,250),X.delayedCall(.5,function(){return Py=0}),Nb(ry,`touchcancel`,Wy),Nb(ay,`touchstart`,Wy),Mb(Nb,ry,`pointerdown,touchstart,mousedown`,Hy),Mb(Nb,ry,`pointerup,touchend,mouseup`,Uy),my=X.utils.checkPrefix(`transform`),hx.push(my),ny=Fy(),sy=X.delayedCall(.2,lx).pause(),vy=[ry,`visibilitychange`,function(){var e=Z.innerWidth,t=Z.innerHeight;ry.hidden?(gy=e,_y=t):(gy!==e||_y!==t)&&qb()},ry,`DOMContentLoaded`,lx,Z,`load`,lx,Z,`resize`,qb],eb(Nb),Q.forEach(function(e){return e.enable(0,1)}),o=0;o<Y.length;o+=3)Fb(Pb,Y[o],Y[o+1]),Fb(Pb,Y[o],Y[o+2])}else ry&&ry.addEventListener(`DOMContentLoaded`,function t(){e.enable(),ry.removeEventListener(`DOMContentLoaded`,t)})},e.config=function(t){`limitCallbacks`in t&&(Ny=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(dy)||(dy=n)&&setInterval(Wb,n),`ignoreMobileResize`in t&&(Cy=e.isTouch===1&&t.ignoreMobileResize),`autoRefreshEvents`in t&&(eb(Pb)||eb(Nb,t.autoRefreshEvents||`none`),xy=(t.autoRefreshEvents+``).indexOf(`resize`)===-1)},e.scrollerProxy=function(e,t){var n=qv(e),r=Y.indexOf(n),i=Jy(n);~r&&Y.splice(r,i?6:2),t&&(i?Nv.unshift(Z,t,ay,t,iy,t):Nv.unshift(n,t))},e.clearMatchMedia=function(e){Q.forEach(function(t){return t._ctx&&t._ctx.query===e&&t._ctx.kill(!0,!0)})},e.isInViewport=function(e,t,n){var r=(tb(e)?qv(e):e).getBoundingClientRect(),i=r[n?fb:pb]*t||0;return n?r.right-i>0&&r.left+i<Z.innerWidth:r.bottom-i>0&&r.top+i<Z.innerHeight},e.positionInViewport=function(e,t,n){tb(e)&&(e=qv(e));var r=e.getBoundingClientRect(),i=r[n?fb:pb],a=t==null?i/2:t in Rb?Rb[t]*i:~t.indexOf(`%`)?parseFloat(t)*i/100:parseFloat(t)||0;return n?(r.left+a)/Z.innerWidth:(r.top+a)/Z.innerHeight},e.killAll=function(e){if(Q.slice(0).forEach(function(e){return e.vars.id!==`ScrollSmoother`&&e.kill()}),e!==!0){var t=Jb.killAll||[];Jb={},t.forEach(function(e){return e()})}},e}();$.version=`3.15.0`,$.saveStyles=function(e){return e?cy(e).forEach(function(e){if(e&&e.style){var t=Qb.indexOf(e);t>=0&&Qb.splice(t,5),Qb.push(e,e.style.cssText,e.getBBox&&e.getAttribute(`transform`),X.core.getCache(e),Dy())}}):Qb},$.revert=function(e,t){return tx(!e,t)},$.create=function(e,t){return new $(e,t)},$.refresh=function(e){return e?qb(!0):(ny||$.register())&&lx(!0)},$.update=function(e){return++Y.cache&&px(e===!0?2:0)},$.clearScrollMemory=nx,$.maxScroll=function(e,t){return $y(e,t?Gv:Kv)},$.getScrollFunc=function(e,t){return Yv(qv(e),t?Gv:Kv)},$.getById=function(e){return Hb[e]},$.getAll=function(){return Q.filter(function(e){return e.vars.id!==`ScrollSmoother`})},$.isScrolling=function(){return!!Ly},$.snapDirectional=Ab,$.addEventListener=function(e,t){var n=Jb[e]||(Jb[e]=[]);~n.indexOf(t)||n.push(t)},$.removeEventListener=function(e,t){var n=Jb[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},$.batch=function(e,t){var n=[],r={},i=t.interval||.016,a=t.batchMax||1e9,o=function(e,t){var n=[],r=[],o=X.delayedCall(i,function(){t(n,r),n=[],r=[]}).pause();return function(e){n.length||o.restart(!0),n.push(e.trigger),r.push(e),a<=n.length&&o.progress(1)}},s;for(s in t)r[s]=s.substr(0,2)===`on`&&nb(t[s])&&s!==`onRefreshInit`?o(s,t[s]):t[s];return nb(a)&&(a=a(),Nb($,`refresh`,function(){return a=t.batchMax()})),cy(e).forEach(function(e){var t={};for(s in r)t[s]=r[s];t.trigger=e,n.push($.create(t))}),n};var kx=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Ax=function e(t,n){n===!0?t.style.removeProperty(`touch-action`):t.style.touchAction=n===!0?`auto`:n?`pan-`+n+(ty.isTouch?` pinch-zoom`:``):`none`,t===iy&&e(ay,n)},jx={auto:1,scroll:1},Mx=function(e){var t=e.event,n=e.target,r=e.axis,i=(t.changedTouches?t.changedTouches[0]:t).target,a=i._gsap||X.core.getCache(i),o=Fy(),s;if(!a._isScrollT||o-a._isScrollT>2e3){for(;i&&i!==ay&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(jx[(s=Cb(i)).overflowY]||jx[s.overflowX]));)i=i.parentNode;a._isScroll=i&&i!==n&&!Jy(i)&&(jx[(s=Cb(i)).overflowY]||jx[s.overflowX]),a._isScrollT=o}(a._isScroll||r===`x`)&&(t.stopPropagation(),t._gsapAllow=!0)},Nx=function(e,t,n,r){return ty.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r&&=Mx,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Nb(ry,ty.eventTypes[0],Ix,!1,!0)},onDisable:function(){return Pb(ry,ty.eventTypes[0],Ix,!0)}})},Px=/(input|label|select|textarea)/i,Fx,Ix=function(e){var t=Px.test(e.target.tagName);(t||Fx)&&(e._gsapAllow=!0,Fx=t)},Lx=function(e){ib(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||=`wheel,touch`,e.debounce=!!e.debounce,e.id=e.id||`normalizer`;var t=e,n=t.normalizeScrollX,r=t.momentum,i=t.allowNestedScroll,a=t.onRelease,o,s,c=qv(e.target)||iy,l=X.core.globals().ScrollSmoother,u=l&&l.get(),d=Ey&&(e.content&&qv(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=Yv(c,Kv),p=Yv(c,Gv),m=1,h=(ty.isTouch&&Z.visualViewport?Z.visualViewport.scale*Z.visualViewport.width:Z.outerWidth)/Z.innerWidth,g=0,_=nb(r)?function(){return r(o)}:function(){return r||2.8},v,y,b=Nx(c,e.type,!0,i),x=function(){return y=!1},S=Wy,C=Wy,w=function(){s=$y(c,Kv),C=ly(+!!Ey,s),n&&(S=ly(0,$y(c,Gv))),v=ix},T=function(){d._gsap.y=Gy(parseFloat(d._gsap.y)+f.offset)+`px`,d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+parseFloat(d._gsap.y)+`, 0, 1)`,f.offset=f.cacheID=0},E=function(){if(y){requestAnimationFrame(x);var e=Gy(o.deltaY/2),t=C(f.v-e);if(d&&t!==f.v+f.offset){f.offset=t-f.v;var n=Gy((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+n+`, 0, 1)`,d._gsap.y=n+`px`,f.cacheID=Y.cache,px()}return!0}f.offset&&T(),y=!0},D,O,k,A,j=function(){w(),D.isActive()&&D.vars.scrollY>s&&(f()>s?D.progress(1)&&f(s):D.resetTo(`scrollY`,s))};return d&&X.set(d,{y:`+=0`}),e.ignoreCheck=function(e){return Ey&&e.type===`touchmove`&&E(e)||m>1.05&&e.type!==`touchstart`||o.isGesturing||e.touches&&e.touches.length>1},e.onPress=function(){y=!1;var e=m;m=Gy((Z.visualViewport&&Z.visualViewport.scale||1)/h),D.pause(),e!==m&&Ax(c,m>1.01?!0:n?!1:`x`),O=p(),k=f(),w(),v=ix},e.onRelease=e.onGestureStart=function(e,t){if(f.offset&&T(),!t)A.restart(!0);else{Y.cache++;var r=_(),i,o;n&&(i=p(),o=i+r*.05*-e.velocityX/.227,r*=kx(p,i,o,$y(c,Gv)),D.vars.scrollX=S(o)),i=f(),o=i+r*.05*-e.velocityY/.227,r*=kx(f,i,o,$y(c,Kv)),D.vars.scrollY=C(o),D.invalidate().duration(r).play(.01),(Ey&&D.vars.scrollY>=s||i>=s-1)&&X.to({},{onUpdate:j,duration:r})}a&&a(e)},e.onWheel=function(){D._ts&&D.pause(),Fy()-g>1e3&&(v=0,g=Fy())},e.onChange=function(e,t,r,i,a){if(ix!==v&&w(),t&&n&&p(S(i[2]===t?O+(e.startX-e.x):p()+t-i[1])),r){f.offset&&T();var o=a[2]===r,s=o?k+e.startY-e.y:f()+r-a[1],c=C(s);o&&s!==c&&(k+=c-s),f(c)}(r||t)&&px()},e.onEnable=function(){Ax(c,n?!1:`x`),$.addEventListener(`refresh`,j),Nb(Z,`resize`,j),f.smooth&&=(f.target.style.scrollBehavior=`auto`,p.smooth=!1),b.enable()},e.onDisable=function(){Ax(c,!0),Pb(Z,`resize`,j),$.removeEventListener(`refresh`,j),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new ty(e),o.iOS=Ey,Ey&&!f()&&f(1),Ey&&X.ticker.add(Wy),A=o._dc,D=X.to(o,{ease:`power4`,paused:!0,inherit:!1,scrollX:n?`+=0.1`:`+=0`,scrollY:`+=0.1`,modifiers:{scrollY:Ex(f,f(),function(){return D.pause()})},onUpdate:px,onComplete:A.vars.onComplete}),o};$.sort=function(e){if(nb(e))return Q.sort(e);var t=Z.pageYOffset||0;return $.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Z.innerHeight}),Q.sort(e||function(e,t){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})},$.observe=function(e){return new ty(e)},$.normalizeScroll=function(e){if(e===void 0)return Sy;if(e===!0&&Sy)return Sy.enable();if(e===!1){Sy&&Sy.kill(),Sy=e;return}var t=e instanceof ty?e:Lx(e);return Sy&&Sy.target===t.target&&Sy.kill(),Jy(t.target)&&(Sy=t),t},$.core={_getVelocityProp:Xv,_inputObserver:Nx,_scrollers:Y,_proxies:Nv,bridge:{ss:function(){Ly||Zb(`scrollStart`),Ly=Fy()},ref:function(){return fy}}},qy()&&X.registerPlugin($);var Rx=typeof document<`u`?b.useLayoutEffect:b.useEffect,zx=e=>e&&!Array.isArray(e)&&typeof e==`object`,Bx=[],Vx={},Hx=mv,Ux=(e,t=Bx)=>{let n=Vx;zx(e)?(n=e,e=null,t=`dependencies`in n?n.dependencies:Bx):zx(t)&&(n=t,t=`dependencies`in n?n.dependencies:Bx),e&&typeof e!=`function`&&console.warn(`First parameter must be a function or config object`);let{scope:r,revertOnUpdate:i}=n,a=(0,b.useRef)(!1),o=(0,b.useRef)(Hx.context(()=>{},r)),s=(0,b.useRef)(e=>o.current.add(null,e)),c=t&&t.length&&!i;return c&&Rx(()=>(a.current=!0,()=>o.current.revert()),Bx),Rx(()=>{if(e&&o.current.add(e,r),!c||!a.current)return()=>o.current.revert()},t),{context:o.current,contextSafe:s.current}};Ux.register=e=>{Hx=e},Ux.headless=!0,mv.registerPlugin($);function Wx(...e){return e.filter(Boolean).join(` `)}var Gx=({className:e,style:t={},children:n,"aria-label":r})=>(0,G.jsx)(`section`,{"data-flow-section":!0,"aria-label":r,className:Wx(`relative min-h-screen w-full overflow-hidden`,e),children:(0,G.jsx)(`div`,{"data-flow-inner":!0,className:Wx(`flow-art-container relative flex min-h-screen w-full flex-col justify-between gap-6 px-[4vw] pt-[clamp(2rem,8vw,4vw)] pb-[4vw]`,`will-change-transform`),style:{transformOrigin:`bottom left`,...t},children:n})}),Kx=({children:e,className:t,"aria-label":n=`Story scroll`})=>{let r=(0,b.useRef)(null),[i,a]=(0,b.useState)(!1);return(0,b.useEffect)(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`),t=()=>a(e.matches);return t(),e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]),Ux(()=>{if(!r.current||i)return;let e=Array.from(r.current.querySelectorAll(`[data-flow-section]`));if(e.length===0)return;let t=[],n=window.innerWidth<=768;e.forEach((r,i)=>{mv.set(r,{zIndex:i+1});let a=r.querySelector(`.flow-art-container`);if(a){if(i>0){mv.set(a,{rotation:30,transformOrigin:`bottom left`});let e=mv.to(a,{rotation:0,ease:`none`,scrollTrigger:{trigger:r,start:n?`top 65%`:`top bottom`,end:n?`top 35%`:`top 25%`,scrub:!0}});e.scrollTrigger&&t.push(e.scrollTrigger)}if(i<e.length-1){t.push($.create({trigger:r,start:`bottom bottom`,end:`bottom top`,pin:!0,pinSpacing:!1}));let o=e[i+1];if(o){let e=mv.to(a,{filter:`blur(12px)`,opacity:.35,ease:`none`,scrollTrigger:{trigger:o,start:n?`top 65%`:`top bottom`,end:n?`top 35%`:`top top`,scrub:!0}});e.scrollTrigger&&t.push(e.scrollTrigger)}}}});let a=r.current.querySelector(`.journey-scroll-indicator`),o=Array.from(r.current.querySelectorAll(`.journey-indicator-dot`)),s=[],c=$.create({trigger:r.current,start:`top top`,end:`bottom bottom`,onUpdate:e=>{let t=e.progress;a&&a.style.setProperty(`--journey-progress`,t),o.forEach((e,n)=>{t>=n/(o.length-1)-.05?e.classList.add(`active`):e.classList.remove(`active`)})},onToggle:e=>{a&&(e.isActive?a.classList.add(`visible`):a.classList.remove(`visible`))}});return t.push(c),o.forEach((t,n)=>{let r=()=>{let t=e[n];t&&t.scrollIntoView({behavior:`smooth`})};t.addEventListener(`click`,r),s.push({dot:t,handler:r})}),$.refresh(),()=>{t.forEach(e=>{e.revert&&e.revert(),e.kill()}),s.forEach(({dot:e,handler:t})=>e.removeEventListener(`click`,t))}},{scope:r,dependencies:[b.Children.count(e),i]}),(0,G.jsxs)(`main`,{ref:r,"aria-label":n,className:Wx(`w-full overflow-x-hidden relative`,t),children:[(0,G.jsx)(`div`,{className:`journey-scroll-indicator pointer-events-none hidden md:flex`,children:(0,G.jsxs)(`div`,{className:`journey-indicator-track`,children:[(0,G.jsx)(`div`,{className:`journey-indicator-progress`}),(0,G.jsx)(`div`,{className:`journey-indicator-dot active`,style:{top:`0%`},"data-label":`Introduction`}),(0,G.jsx)(`div`,{className:`journey-indicator-dot`,style:{top:`33.3%`},"data-label":`Technical Focus`}),(0,G.jsx)(`div`,{className:`journey-indicator-dot`,style:{top:`66.6%`},"data-label":`Philosophy`}),(0,G.jsx)(`div`,{className:`journey-indicator-dot`,style:{top:`100%`},"data-label":`Impact Metrics`})]})}),e,(0,G.jsx)(`style`,{children:`
        .journey-scroll-indicator {
          position: fixed;
          right: 3rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2000;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.5s ease, visibility 0.5s ease;
          align-items: center;
          justify-content: center;
        }
        .journey-scroll-indicator.visible {
          opacity: 1;
          visibility: visible;
        }
        .journey-indicator-track {
          position: relative;
          height: 180px;
          width: 3px;
          background: rgba(9, 9, 11, 0.08);
          border-radius: 99px;
        }
        .journey-indicator-progress {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--secondary)));
          border-radius: 99px;
          transform-origin: top center;
          transform: scaleY(var(--journey-progress, 0));
          transition: transform 0.1s ease-out;
          box-shadow: 0 0 12px hsla(var(--primary), 0.5);
        }
        .journey-indicator-dot {
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid rgba(9, 9, 11, 0.2);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: auto;
          cursor: pointer;
        }
        .journey-indicator-dot.active {
          width: 12px;
          height: 12px;
          background: hsl(var(--primary));
          border-color: #ffffff;
          box-shadow: 0 0 10px hsla(var(--primary), 0.5);
        }
        .journey-indicator-dot::after {
          content: attr(data-label);
          position: absolute;
          right: 24px;
          top: 50%;
          transform: translateY(-50%);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          color: #71717a;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          background: #ffffff;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        .journey-indicator-dot:hover::after,
        .journey-indicator-dot.active::after {
          opacity: 1;
          visibility: visible;
          transform: translateY(-50%) translateX(-4px);
        }
        .journey-indicator-dot.active::after {
          color: #09090b;
          border-color: hsl(var(--primary-glow));
        }
        @media (max-width: 768px) {
          .journey-scroll-indicator {
            display: none !important;
          }
        }
      `})]})},qx=({children:e,className:t=``})=>(0,G.jsxs)(Pd.span,{className:`framed-text-container ${t}`,initial:`initial`,whileHover:`hovered`,style:{position:`relative`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,padding:`0.5rem 1.75rem`,cursor:`default`,userSelect:`none`},children:[(0,G.jsx)(Pd.span,{className:`framed-text-bg`,variants:{initial:{backgroundColor:`rgba(249, 115, 22, 0.02)`},hovered:{backgroundColor:`rgba(249, 115, 22, 0.07)`}},transition:{duration:.3},style:{position:`absolute`,inset:0,zIndex:0,pointerEvents:`none`}}),(0,G.jsx)(Pd.span,{className:`framed-text-border`,variants:{initial:{borderColor:`rgba(249, 115, 22, 0.15)`,boxShadow:`0 0 0 rgba(249, 115, 22, 0)`},hovered:{borderColor:`rgba(249, 115, 22, 0.55)`,boxShadow:`0 0 10px rgba(249, 115, 22, 0.15)`}},transition:{duration:.3},style:{position:`absolute`,inset:0,border:`1px solid`,zIndex:1,pointerEvents:`none`}}),(0,G.jsx)(Pd.span,{className:`framed-corner tl`,variants:{initial:{x:0,y:0,scale:1},hovered:{x:-5,y:-5,scale:1.2}},transition:{type:`spring`,stiffness:350,damping:18},style:{position:`absolute`,top:0,left:0,width:`7px`,height:`7px`,backgroundColor:`hsl(var(--primary))`,border:`1px solid #ffffff`,transform:`translate(-50%, -50%)`,zIndex:2}}),(0,G.jsx)(Pd.span,{className:`framed-corner tr`,variants:{initial:{x:0,y:0,scale:1},hovered:{x:5,y:-5,scale:1.2}},transition:{type:`spring`,stiffness:350,damping:18},style:{position:`absolute`,top:0,right:0,width:`7px`,height:`7px`,backgroundColor:`hsl(var(--primary))`,border:`1px solid #ffffff`,transform:`translate(50%, -50%)`,zIndex:2}}),(0,G.jsx)(Pd.span,{className:`framed-corner bl`,variants:{initial:{x:0,y:0,scale:1},hovered:{x:-5,y:5,scale:1.2}},transition:{type:`spring`,stiffness:350,damping:18},style:{position:`absolute`,bottom:0,left:0,width:`7px`,height:`7px`,backgroundColor:`hsl(var(--primary))`,border:`1px solid #ffffff`,transform:`translate(-50%, 50%)`,zIndex:2}}),(0,G.jsx)(Pd.span,{className:`framed-corner br`,variants:{initial:{x:0,y:0,scale:1},hovered:{x:5,y:5,scale:1.2}},transition:{type:`spring`,stiffness:350,damping:18},style:{position:`absolute`,bottom:0,right:0,width:`7px`,height:`7px`,backgroundColor:`hsl(var(--primary))`,border:`1px solid #ffffff`,transform:`translate(50%, 50%)`,zIndex:2}}),(0,G.jsx)(`span`,{style:{position:`relative`,zIndex:1,background:`linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,display:`inline-block`},children:e})]}),Jx=()=>{let{longBio:e}=Rf.personalInfo;return(0,G.jsxs)(`div`,{id:`journey`,className:`journey-wrapper`,children:[(0,G.jsxs)(Kx,{children:[(0,G.jsxs)(Gx,{className:`journey-slide slide-1`,children:[(0,G.jsx)(`div`,{className:`slide-glow glow-orange`}),(0,G.jsx)(`div`,{className:`slide-card light-panel`,children:(0,G.jsxs)(`div`,{className:`slide-content-container`,children:[(0,G.jsxs)(`div`,{className:`slide-header`,children:[(0,G.jsx)(`span`,{className:`slide-index`,children:`01 / INTRODUCTION`}),(0,G.jsx)(R,{size:28,className:`slide-icon`})]}),(0,G.jsxs)(`div`,{className:`slide-body`,children:[(0,G.jsx)(`h2`,{className:`slide-title`,children:(0,G.jsx)(qx,{children:`Software Developer`})}),(0,G.jsx)(`p`,{className:`slide-text`,children:`I am a software developer who builds practical, real-world applications. I enjoy understanding requirements and turning them into working software that solves actual problems.`}),(0,G.jsx)(`p`,{className:`slide-text`,children:`Through independent projects and professional internship experience, I have developed the ability to take an application from concept to a shipped, working product.`})]})]})})]}),(0,G.jsxs)(Gx,{className:`journey-slide slide-2`,children:[(0,G.jsx)(`div`,{className:`slide-glow glow-yellow`}),(0,G.jsx)(`div`,{className:`slide-card light-panel`,children:(0,G.jsxs)(`div`,{className:`slide-content-container`,children:[(0,G.jsxs)(`div`,{className:`slide-header`,children:[(0,G.jsx)(`span`,{className:`slide-index`,children:`02 / TECHNICAL FOCUS`}),(0,G.jsx)(be,{size:28,className:`slide-icon`})]}),(0,G.jsxs)(`div`,{className:`slide-body`,children:[(0,G.jsx)(`h2`,{className:`slide-title`,children:(0,G.jsx)(qx,{children:`Mobile & Web`})}),(0,G.jsx)(`p`,{className:`slide-text`,children:`My strongest areas are mobile development with Flutter and web development with React. I build responsive, clean user interfaces backed by robust business logic.`}),(0,G.jsx)(`p`,{className:`slide-text`,children:`I also have strong experience with backend and data integration using Supabase, PostgreSQL, and REST APIs, allowing me to build end-to-end solutions.`})]})]})})]}),(0,G.jsxs)(Gx,{className:`journey-slide slide-3`,children:[(0,G.jsx)(`div`,{className:`slide-glow glow-orange`}),(0,G.jsx)(`div`,{className:`slide-card light-panel`,children:(0,G.jsxs)(`div`,{className:`slide-content-container`,children:[(0,G.jsxs)(`div`,{className:`slide-header`,children:[(0,G.jsx)(`span`,{className:`slide-index`,children:`03 / PROFESSIONAL EXPERIENCE`}),(0,G.jsx)(z,{size:28,className:`slide-icon`})]}),(0,G.jsxs)(`div`,{className:`slide-body`,children:[(0,G.jsx)(`h2`,{className:`slide-title`,children:(0,G.jsx)(qx,{children:`Real-world Impact`})}),(0,G.jsx)(`p`,{className:`slide-text`,children:`During my recent Software Development Internship, I engineered a production-ready mobile application for Regenboog India Foundation to streamline their student sponsorship workflows.`}),(0,G.jsx)(`p`,{className:`slide-text`,children:`This involved collaborating with international stakeholders, translating complex requirements into UI, and integrating secure backend data systems.`})]})]})})]}),(0,G.jsxs)(Gx,{className:`journey-slide slide-4`,children:[(0,G.jsx)(`div`,{className:`slide-glow glow-yellow`}),(0,G.jsx)(`div`,{className:`slide-card light-panel`,children:(0,G.jsxs)(`div`,{className:`slide-content-container`,children:[(0,G.jsxs)(`div`,{className:`slide-header`,children:[(0,G.jsx)(`span`,{className:`slide-index`,children:`04 / ACHIEVEMENTS`}),(0,G.jsx)(de,{size:28,className:`slide-icon`})]}),(0,G.jsxs)(`div`,{className:`slide-body`,children:[(0,G.jsx)(`h2`,{className:`slide-title`,children:(0,G.jsx)(qx,{children:`Proof of Work`})}),(0,G.jsx)(`p`,{className:`slide-text`,children:`I have built multiple complete applications and continuously refine my software engineering skills through competitive challenges and real-world implementation.`}),(0,G.jsxs)(`div`,{className:`journey-stats-grid`,style:{gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,G.jsxs)(`div`,{className:`journey-stat-card`,children:[(0,G.jsx)(`span`,{className:`j-stat-num`,style:{fontSize:`1.5rem`},children:`1st Runner-Up`}),(0,G.jsx)(`span`,{className:`j-stat-lbl`,children:`Code Master National Level (300+ participants)`})]}),(0,G.jsxs)(`div`,{className:`journey-stat-card`,children:[(0,G.jsx)(`span`,{className:`j-stat-num`,style:{fontSize:`1.5rem`},children:`4+`}),(0,G.jsx)(`span`,{className:`j-stat-lbl`,children:`Major Projects & Internship App`})]})]})]})]})})]})]}),(0,G.jsx)(`style`,{children:`
        .journey-wrapper {
          position: relative;
          width: 100%;
          background-color: #ffffff !important; /* Alternating White Background */
          z-index: 2;
        }
        .journey-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100%;
          position: relative;
        }
        .flow-art-container {
          width: 100% !important;
          height: 100% !important;
          min-height: 100vh !important;
          position: relative;
        }
        .slide-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.25; /* Increased opacity so it blooms through the glass blur */
          pointer-events: none;
          z-index: 0;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }
        .glow-orange {
          background: radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%);
          left: 10%;
          top: 15%;
        }
        .glow-yellow {
          background: radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%);
          right: 10%;
          bottom: 15%;
        }
        .slide-card {
          position: absolute;
          top: 2rem;
          left: 2rem;
          right: 2rem;
          bottom: 4.5rem;
          z-index: 1;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          background: rgba(255, 255, 255, 0.95);
          border-radius: var(--border-radius-md);
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2.5rem;
        }
        .slide-content-container {
          width: 100%;
          max-width: 900px;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 2;
        }
        .slide-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          padding-bottom: 1rem;
        }
        .slide-index {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          color: hsl(var(--primary));
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .slide-icon {
          color: hsl(var(--secondary));
        }
        .slide-title {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: #09090b;
        }
        .slide-text {
          font-size: 1.1rem;
          color: #27272a;
          line-height: 1.75;
          margin-bottom: 1.5rem;
        }
        .slide-text:last-of-type {
          margin-bottom: 0;
        }
        .journey-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2.5rem;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          padding-top: 2rem;
        }
        .journey-stat-card {
          text-align: center;
          padding: 1rem;
          background: #f9fafb;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: var(--border-radius-sm);
        }
        .j-stat-num {
          display: block;
          font-family: var(--font-mono);
          font-size: 2.5rem;
          font-weight: 800;
          color: hsl(var(--primary));
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .j-stat-lbl {
          font-size: 0.8rem;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .journey-slide, [data-flow-section], .flow-art-container {
            height: 75vh !important;
            min-height: 75vh !important;
          }
          .slide-card {
            position: relative;
            top: auto;
            bottom: auto;
            left: auto;
            right: auto;
            width: calc(100% - 2rem);
            height: auto;
            max-height: 85vh;
            padding: 2rem 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: stretch;
            overflow-y: auto;
            margin: 0 auto;
          }
          .slide-content-container {
            max-width: 100%;
          }
          .slide-title {
            font-size: 1.75rem;
          }
          .slide-text {
            font-size: 1rem;
          }
          .journey-stats-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
            margin-top: 1.5rem;
            padding-top: 1rem;
          }
          .journey-stat-card {
            padding: 0.5rem 0.25rem;
          }
          .j-stat-num {
            font-size: 1.75rem;
          }
          .j-stat-lbl {
            font-size: 0.65rem;
          }
        }
      `})]})};function Yx(...e){return e.filter(Boolean).join(` `)}var Xx=({children:e,className:t=``,...n})=>(0,G.jsx)(`div`,{className:Yx(`st-card`,t),...n,children:e}),Zx=({children:e,className:t=``,...n})=>(0,G.jsx)(`div`,{className:Yx(`st-card-content`,t),...n,children:e}),Qx=({events:e=[],title:t=``,subtitle:n=``,animationOrder:r=`sequential`,cardAlignment:i=`alternating`,lineColor:a=`rgba(249, 115, 22, 0.2)`,activeColor:o=`hsl(var(--primary))`,progressIndicator:s=!0,cardVariant:c=`elevated`,cardEffect:l=`shadow`,parallaxIntensity:u=.15,progressLineWidth:d=2,progressLineCap:f=`round`,dateFormat:p=`badge`,revealAnimation:m=`slide`,className:h=``,connectorStyle:g=`line`,perspective:_=!1,darkMode:v=!0,smoothScroll:y=!0})=>{let x=(0,b.useRef)(null),[S,C]=(0,b.useState)(-1),w=(0,b.useRef)([]),{scrollYProgress:T}=Tf({target:x,offset:[`start center`,`end center`]}),E=Pf(T,{stiffness:100,damping:30,restDelta:.001}),D=Af(E,[0,1],[`0%`,`100%`]),O=Af(E,e=>u*80*(1-2*e));(0,b.useEffect)(()=>{let t=T.on(`change`,t=>{let n=Math.floor(t*e.length);n!==S&&n>=0&&n<e.length&&C(n)});return()=>t()},[T,e.length,S]);let k=e=>{let t=r===`simultaneous`?0:r===`staggered`?e*.15:e*.25;return{initial:{fade:{opacity:0,y:30},slide:{x:i===`left`?-80:i===`right`?80:e%2==0?-80:80,opacity:0,y:20},scale:{scale:.85,opacity:0,y:20},flip:{rotateY:45,opacity:0,y:20},none:{opacity:1,y:0,x:0}}[m],whileInView:{opacity:1,y:0,x:0,scale:1,rotateY:0,transition:{duration:.6,delay:t,ease:[.25,.1,.25,1]}},viewport:{once:!1,margin:`-80px`}}},A=()=>{switch(g){case`dots`:return{borderStyle:`none`,backgroundImage:`radial-gradient(circle, rgba(255,255,255,0.15) 25%, transparent 25%)`,backgroundSize:`1px 12px`,backgroundRepeat:`repeat-y`,width:`4px`};case`dashed`:return{borderStyle:`none`,backgroundImage:`linear-gradient(to bottom, ${a} 50%, transparent 50%)`,backgroundSize:`1px 12px`,backgroundRepeat:`repeat-y`,width:`${d}px`};default:return{backgroundColor:a,width:`${d}px`}}},j=e=>Yx(`st-card-wrap`,`variant-${c}`,`effect-${l}`,i===`alternating`?e%2==0?`align-even`:`align-odd`:i===`left`?`align-left`:`align-right`,_?`perspective-enabled`:``);return(0,G.jsxs)(`div`,{ref:x,className:Yx(`st-container`,v?`theme-dark`:`theme-light`,h),children:[(0,G.jsx)(`style`,{children:`
        .st-container {
          position: relative;
          width: 100%;
          overflow: visible;
          font-family: var(--font-body);
        }
        .st-header {
          text-align: center;
          padding: 3rem 1rem 2rem;
        }
        .st-title {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
          font-family: var(--font-heading);
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .st-subtitle {
          font-size: 1rem;
          color: #a1a1aa;
          max-width: 600px;
          margin: 0 auto;
        }
        .st-content {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 1rem 4rem;
        }
        .st-track-wrapper {
          position: relative;
          width: 100%;
        }
        
        /* The Timeline Connector Line */
        .st-connector-bg {
          position: absolute;
          top: 0;
          bottom: 0;
          z-index: 10;
          left: 20px;
          transform: translateX(-50%);
        }
        @media (min-width: 1024px) {
          .st-connector-bg {
            left: 50%;
          }
        }
        
        /* Interactive Progress Line */
        .st-progress-line {
          position: absolute;
          top: 0;
          z-index: 15;
          left: 20px;
          transform: translateX(-50%);
        }
        @media (min-width: 1024px) {
          .st-progress-line {
            left: 50%;
          }
        }

        /* Comet head of the progress line */
        .st-comet {
          position: absolute;
          z-index: 20;
          left: 20px;
          transform: translate(-50%, -50%);
        }
        @media (min-width: 1024px) {
          .st-comet {
            left: 50%;
          }
        }

        /* Events list */
        .st-events-list {
          position: relative;
          z-index: 25;
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        /* Single Event Row */
        .st-event-item {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        @media (min-width: 1024px) {
          .st-event-item {
            flex-direction: row;
            align-items: center;
          }
          .st-event-item.align-even {
            justify-content: flex-start;
          }
          .st-event-item.align-odd {
            flex-direction: row-reverse;
            justify-content: flex-start;
          }
          .st-event-item.align-left {
            justify-content: flex-start;
          }
          .st-event-item.align-right {
            flex-direction: row-reverse;
            justify-content: flex-start;
          }
        }

        /* Node Indicator dot */
        .st-node-wrapper {
          position: absolute;
          top: 1.5rem;
          left: 20px;
          transform: translate(-50%, -50%);
          z-index: 30;
        }
        @media (min-width: 1024px) {
          .st-node-wrapper {
            top: 50%;
            left: 50%;
          }
        }
        
        .st-node-dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border-width: 3px;
          border-style: solid;
          background-color: #09090b;
          transition: border-color 0.3s ease, background-color 0.3s ease;
        }
        .theme-dark .st-node-dot.active {
          border-color: hsl(var(--primary));
          background-color: #09090b;
        }
        .theme-dark .st-node-dot.inactive {
          border-color: rgba(255, 255, 255, 0.15);
          background-color: rgba(255, 255, 255, 0.05);
        }

        /* Card Container Wrapper */
        .st-card-wrap {
          position: relative;
          width: 100%;
          padding-left: 45px; /* Offset for line on mobile */
          box-sizing: border-box;
        }
        @media (min-width: 1024px) {
          .st-card-wrap {
            width: calc(50% - 35px);
            padding-left: 0;
          }
          .st-event-item.align-even .st-card-wrap {
            margin-right: calc(50% + 35px);
          }
          .st-event-item.align-odd .st-card-wrap {
            margin-left: calc(50% + 35px);
          }
          .st-event-item.align-left .st-card-wrap {
            margin-right: auto;
            margin-left: 0;
          }
          .st-event-item.align-right .st-card-wrap {
            margin-left: auto;
            margin-right: 0;
          }
        }

        /* Actual visual cards */
        .st-card {
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          overflow: hidden;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .st-card-content {
          padding: 1.5rem;
        }

        /* Card Variants */
        .variant-elevated .st-card {
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          border-color: rgba(255, 255, 255, 0.06);
        }
        .variant-outlined .st-card {
          background: rgba(249, 115, 22, 0.02);
          border: 2px solid rgba(249, 115, 22, 0.15);
        }
        .variant-filled .st-card {
          background: rgba(249, 115, 22, 0.06);
          border: 1px solid rgba(249, 115, 22, 0.15);
        }

        /* Card Hover Effects */
        .effect-glow .st-card:hover {
          border-color: hsl(var(--primary));
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.25);
        }
        .effect-shadow .st-card:hover {
          transform: translateY(-4px);
          border-color: rgba(249, 115, 22, 0.3);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }
        .effect-bounce .st-card:hover {
          transform: scale(1.025);
          border-color: hsl(var(--primary));
        }

        /* Details styling inside card */
        .st-badge-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .st-badge-icon {
          color: hsl(var(--primary));
          flex-shrink: 0;
        }
        .st-year-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: hsl(var(--primary));
          background: rgba(249, 115, 22, 0.1);
          border: 1px solid rgba(249, 115, 22, 0.2);
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
          letter-spacing: 0.5px;
        }
        .st-title-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: #f9fafb;
          margin: 0 0 0.25rem;
        }
        .st-subtitle-text {
          font-size: 0.95rem;
          font-weight: 500;
          color: #a1a1aa;
          margin: 0 0 1rem;
        }
        
        /* Description list styling */
        .st-desc-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-left: 1.1rem;
          margin: 0;
          list-style-type: disc;
          color: #d4d4d8;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .st-desc-list li {
          color: #d4d4d8;
        }
        .st-desc-text {
          color: #d4d4d8;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
        }
        
        /* 3D Perspective Tilt hover */
        .perspective-enabled .st-card {
          transform-style: preserve-3d;
          transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .perspective-enabled:hover .st-card {
          transform: perspective(800px) rotateX(2deg) rotateY(-2deg) translateY(-2px);
        }
      `}),t&&(0,G.jsxs)(`div`,{className:`st-header`,children:[(0,G.jsx)(`h2`,{className:`st-title`,children:t}),n&&(0,G.jsx)(`p`,{className:`st-subtitle`,children:n})]}),(0,G.jsx)(`div`,{className:`st-content`,children:(0,G.jsxs)(`div`,{className:`st-track-wrapper`,children:[(0,G.jsx)(`div`,{className:`st-connector-bg`,style:A()}),s&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Pd.div,{className:`st-progress-line`,style:{height:D,width:`${d}px`,borderRadius:f===`round`?`9999px`:`0px`,background:`linear-gradient(to bottom, #f97316, #fb923c, #fdba74)`,boxShadow:`
                    0 0 12px rgba(249,115,24,0.4),
                    0 0 20px rgba(251,146,60,0.2)
                  `}}),(0,G.jsx)(Pd.div,{className:`st-comet`,style:{top:D,x:`-50%`,y:`-50%`},children:(0,G.jsx)(Pd.div,{className:`st-comet-core`,style:{width:`16px`,height:`16px`,borderRadius:`50%`,background:`radial-gradient(circle, rgba(249,115,22,0.9) 0%, rgba(251,146,60,0.5) 40%, rgba(253,186,116,0) 70%)`,boxShadow:`
                      0 0 12px 3px rgba(249, 115, 22, 0.6),
                      0 0 20px 6px rgba(251, 146, 60, 0.4),
                      0 0 30px 10px rgba(253, 186, 116, 0.2)
                    `},animate:{scale:[1,1.25,1]},transition:{duration:1.5,repeat:1/0,ease:`easeInOut`}})})]}),(0,G.jsx)(`div`,{className:`st-events-list`,children:e.map((e,t)=>{let n=t<=S;return(0,G.jsxs)(`div`,{ref:e=>{w.current[t]=e},className:Yx(`st-event-item`,n?`event-active`:`event-inactive`,i===`alternating`?t%2==0?`align-even`:`align-odd`:i===`left`?`align-left`:`align-right`),children:[(0,G.jsx)(`div`,{className:`st-node-wrapper`,children:(0,G.jsx)(Pd.div,{className:Yx(`st-node-dot`,n?`active`:`inactive`),animate:n?{scale:[1,1.2,1],boxShadow:[`0 0 0px rgba(249,115,22,0)`,`0 0 10px rgba(249,115,22,0.5)`,`0 0 0px rgba(249,115,22,0)`]}:{},transition:{duration:1,repeat:1/0,repeatDelay:3,ease:`easeInOut`}})}),(0,G.jsx)(Pd.div,{className:j(t),variants:k(t),initial:`initial`,whileInView:`whileInView`,viewport:{once:!1,margin:`-80px`},style:u>0?{y:O}:void 0,children:(0,G.jsx)(Xx,{children:(0,G.jsxs)(Zx,{children:[p===`badge`?(0,G.jsxs)(`div`,{className:`st-badge-row`,children:[e.icon||(0,G.jsx)(pe,{className:`st-badge-icon`,size:14}),(0,G.jsx)(`span`,{className:`st-year-badge`,children:e.year})]}):(0,G.jsx)(`p`,{className:`st-year-badge`,style:{display:`inline-block`,marginBottom:`0.75rem`},children:e.year}),(0,G.jsx)(`h3`,{className:`st-title-text`,children:e.title}),e.subtitle&&(0,G.jsx)(`p`,{className:`st-subtitle-text`,children:e.subtitle}),Array.isArray(e.description)?(0,G.jsx)(`ul`,{className:`st-desc-list`,children:e.description.map((e,t)=>(0,G.jsx)(`li`,{children:e},t))}):(0,G.jsx)(`p`,{className:`st-desc-text`,children:e.description})]})})})]},e.id||t)})})]})})]})},$x=()=>{let e=Rf.experiences.map(e=>({id:e.id,year:e.period,title:e.role,subtitle:`${e.company} — ${e.location}`,description:e.description,icon:(0,G.jsx)(fe,{className:`st-badge-icon`,size:14})}));return(0,G.jsxs)(`section`,{id:`experience`,className:`section experience-section`,children:[(0,G.jsx)(`div`,{className:`glowing-bg exp-glow-1`}),(0,G.jsxs)(`div`,{className:`container relative-z`,children:[(0,G.jsx)(`h2`,{className:`section-title`,style:{background:`none`,WebkitBackgroundClip:`initial`,WebkitTextFillColor:`initial`},children:(0,G.jsx)(qx,{children:`Experience`})}),(0,G.jsx)(`p`,{className:`section-subtitle`,children:`My professional career timeline.`}),(0,G.jsx)(`div`,{className:`exp-layout-centered`,style:{maxWidth:`1000px`,margin:`2rem auto 0`},children:(0,G.jsxs)(`div`,{className:`timeline-column`,children:[(0,G.jsxs)(`h3`,{className:`column-header`,style:{justifyContent:`center`,marginBottom:`1.5rem`},children:[(0,G.jsx)(fe,{className:`header-icon`}),`Work History`]}),(0,G.jsx)(Qx,{events:e,title:``,subtitle:``,darkMode:!0,cardAlignment:`alternating`,cardVariant:`elevated`,cardEffect:`shadow`,revealAnimation:`slide`,progressIndicator:!0,connectorStyle:`line`,dateFormat:`badge`})]})})]}),(0,G.jsx)(`style`,{children:`
        .experience-section {
          position: relative;
          background-color: #09090b !important; /* Force dark background */
          color: #f9fafb !important;
        }
        .exp-glow-1 {
          right: 5%;
          top: 20%;
        }
        .relative-z {
          position: relative;
          z-index: 1;
        }
        .exp-layout-centered {
          max-width: 800px;
          margin: 2rem auto 0;
        }
        .timeline-column {
          display: flex;
          flex-direction: column;
        }
        .column-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 2.5rem;
          color: #f9fafb !important;
        }
        .header-icon {
          color: hsl(var(--primary));
        }
        .timeline-container {
          position: relative;
          border-left: 2px solid rgba(255, 255, 255, 0.1);
          padding-left: 2rem;
          margin-left: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .timeline-card {
          position: relative;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all var(--transition-normal);
        }
        .timeline-card.active {
          border-color: rgba(251, 146, 60, 0.4);
          box-shadow: 0 4px 20px 0 var(--primary-glow);
        }
        .timeline-dot {
          position: absolute;
          left: calc(-2rem - 6px);
          top: 24px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #09090b;
          border: 2px solid hsl(var(--primary));
          transition: all var(--transition-normal);
        }
        .timeline-card.active .timeline-dot {
          background: hsl(var(--primary));
          box-shadow: 0 0 10px 0 hsl(var(--primary));
        }
        .card-header-clickable {
          cursor: pointer;
          position: relative;
          padding-right: 2rem;
        }
        .header-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        .timeline-period {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: hsl(var(--primary));
        }
        .current-tag {
          font-size: 0.75rem;
          font-weight: 600;
          background: hsl(var(--primary-glow));
          color: hsl(var(--primary));
          padding: 0.15rem 0.6rem;
          border-radius: var(--border-radius-full);
          border: 1px solid rgba(139, 92, 246, 0.2);
        }
        .role-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #f9fafb !important;
          margin-bottom: 0.25rem;
        }
        .company-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #d4d4d8 !important;
          margin-bottom: 0.5rem;
        }
        .location-info {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.85rem;
          color: #71717a !important;
        }
        .expand-trigger {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          color: #71717a !important;
          transition: color var(--transition-fast);
        }
        .card-header-clickable:hover .expand-trigger {
          color: #f9fafb !important;
        }
        .card-body-expandable {
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-normal), margin var(--transition-normal);
        }
        .card-body-expandable.open {
          max-height: 500px;
          margin-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1.25rem;
        }
        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-left: 1.25rem;
          list-style-type: disc;
        }
        .achievement-item {
          font-size: 0.95rem;
          color: #a1a1aa !important;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .timeline-container {
            padding-left: 1.5rem;
          }
        }
      `})]})},eS=[{name:`React`,src:`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`},{name:`HTML5`,src:`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg`},{name:`CSS3`,src:`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg`},{name:`JavaScript`,src:`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg`},{name:`Tailwind CSS`,src:`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg`},{name:`Bootstrap`,src:`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg`},{name:`Python`,src:`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg`},{name:`.NET`,src:`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg`}],tS=[{name:`Flutter`,src:`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg`},{name:`Kotlin`,src:`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg`},{name:`MongoDB`,src:`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg`},{name:`MySQL`,src:`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg`},{name:`SQLite`,src:`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg`},{name:`PHP`,src:`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg`},{name:`Hive`,src:`https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg`},{name:`Git`,src:`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg`}],nS=(e,t=6)=>Array.from({length:t}).flatMap(()=>e),rS=({light:e=!1})=>(0,G.jsxs)(`div`,{className:`tech-marquee-container ${e?`light`:``}`,children:[(0,G.jsxs)(`div`,{className:`marquee-wrapper`,children:[(0,G.jsx)(`div`,{className:`marquee-row`,children:(0,G.jsx)(`div`,{className:`marquee-track track-left`,children:nS(eS,6).map((e,t)=>(0,G.jsxs)(`div`,{className:`tech-marquee-item`,children:[(0,G.jsx)(`img`,{src:e.src,alt:e.name,className:`tech-logo-inline`}),(0,G.jsx)(`span`,{className:`tech-name-inline`,children:e.name})]},`r1-${t}`))})}),(0,G.jsx)(`div`,{className:`marquee-row`,children:(0,G.jsx)(`div`,{className:`marquee-track track-right`,children:nS(tS,6).map((e,t)=>(0,G.jsxs)(`div`,{className:`tech-marquee-item`,children:[(0,G.jsx)(`img`,{src:e.src,alt:e.name,className:`tech-logo-inline`}),(0,G.jsx)(`span`,{className:`tech-name-inline`,children:e.name})]},`r2-${t}`))})})]}),(0,G.jsx)(`style`,{children:`
        .tech-marquee-container {
          margin-top: 2rem;
          width: 100%;
          text-align: center;
          background-color: transparent !important;
        }
        .marquee-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
          padding: 0.5rem 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background-color: transparent !important;
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
        .marquee-row {
          display: flex;
          width: 100%;
          overflow: hidden;
          padding: 10px 0;
          background-color: transparent !important;
        }
        .marquee-track {
          display: flex;
          gap: 4rem;
          white-space: nowrap;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .track-left {
          animation: scroll-left-track 25s linear infinite;
        }
        .track-right {
          animation: scroll-right-track 25s linear infinite;
        }
        .tech-marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          cursor: default;
          transition: transform 0.3s ease;
        }
        .tech-marquee-item:hover {
          transform: scale(1.08);
        }
        .tech-logo-inline {
          height: 32px;
          width: 32px;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.75;
          transition: filter 0.3s ease, opacity 0.3s ease;
        }
        .tech-marquee-item:hover .tech-logo-inline {
          filter: grayscale(100%) contrast(1.15);
          opacity: 1;
        }
        .tech-name-inline {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: #f9fafb;
          letter-spacing: -0.2px;
        }
        .tech-marquee-container.light .tech-name-inline {
          color: #09090b !important;
        }

        @keyframes scroll-left-track {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 2rem)); }
        }
        @keyframes scroll-right-track {
          0% { transform: translateX(calc(-50% - 2rem)); }
          100% { transform: translateX(0); }
        }
        @media (max-width: 768px) {
          .tech-logo-inline {
            height: 28px;
            width: 28px;
          }
          .tech-name-inline {
            font-size: 1.1rem;
          }
          .marquee-track {
            gap: 2.5rem;
          }
          @keyframes scroll-left-track {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 1.25rem)); }
          }
          @keyframes scroll-right-track {
            0% { transform: translateX(calc(-50% - 1.25rem)); }
            100% { transform: translateX(0); }
          }
        }
      `})]}),iS=({className:e=``,color:t=`#f97316`,speed:n=1})=>{let r=(0,b.useRef)(null),i=(0,b.useRef)(null);return(0,b.useEffect)(()=>{let e=r.current,a=i.current;if(!e||!a)return;let o=e.getContext(`2d`);if(!o)return;let s=null,c=0,l=!1,u=()=>{if(!a||!e)return;let t=window.devicePixelRatio||1;e.width=a.clientWidth*t,e.height=a.clientHeight*t,o.scale(t,t)},d=new ResizeObserver(u);d.observe(a),u();let f=` .:+x*#`.split(``),p=()=>{if(!l)return;let e=a.clientWidth,r=a.clientHeight;o.clearRect(0,0,e,r),o.font=`12px monospace`,o.fillStyle=t;let i=Math.ceil(e/10),u=Math.ceil(r/12);for(let e=0;e<i;e++){let t=Math.sin(e*.1)*.6+Math.cos(e*.25)*.4,r=Math.sin(c*.002*n)*.1,i=Math.sin(c*.008*n+e*100)*.05,a=t+r+i,s=Math.max(.15,(a+1)/2*.6+.15),l=Math.floor(s*u);for(let t=u-1;t>u-l;t--){let r=c*.005*n,i=Math.sin(t*.2-r+e*10),a=t-(u-l),s=Math.min(1,a/6),d=(i+1)/2,p=Math.floor(d*f.length),m=f[Math.min(p,f.length-1)],h=e*10,g=t*12;Math.random()>.95||(o.globalAlpha=s,o.fillText(m,h,g))}}o.globalAlpha=1,c+=16,s=requestAnimationFrame(p)},m=new IntersectionObserver(([e])=>{let t=l;l=e.isIntersecting,l&&!t?(cancelAnimationFrame(s),s=requestAnimationFrame(p)):!l&&t&&(cancelAnimationFrame(s),s=null)},{threshold:.01});return m.observe(e),()=>{d.disconnect(),m.disconnect(),cancelAnimationFrame(s)}},[t,n]),(0,G.jsxs)(`div`,{ref:i,className:`ascii-wave-container ${e}`,children:[(0,G.jsx)(`canvas`,{ref:r,className:`ascii-wave-canvas`}),(0,G.jsx)(`style`,{children:`
        .ascii-wave-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .ascii-wave-canvas {
          display: block;
          width: 100%;
          height: 100%;
        }
      `})]})},aS=e=>{let t=e.toLowerCase();return t.includes(`mobile`)||t.includes(`desktop`)||t.includes(`app`)?(0,G.jsx)(De,{className:`category-icon`,size:20}):t.includes(`web`)||t.includes(`front`)||t.includes(`back`)?(0,G.jsx)(we,{className:`category-icon`,size:20}):(0,G.jsx)(Ie,{className:`category-icon`,size:20})},oS=()=>(0,G.jsxs)(`section`,{id:`tech-stack`,className:`section tech-stack-section`,children:[(0,G.jsx)(iS,{className:`tech-ascii-bg`,color:`#f97316`,speed:.8}),(0,G.jsxs)(`div`,{className:`container relative-z`,children:[(0,G.jsx)(`h2`,{className:`section-title`,style:{background:`none`,WebkitBackgroundClip:`initial`,WebkitTextFillColor:`initial`},children:(0,G.jsx)(qx,{children:`Skills`})}),(0,G.jsx)(`p`,{className:`section-subtitle light-subtitle`,children:`Technologies and tools I build with.`}),(0,G.jsx)(rS,{light:!0}),(0,G.jsx)(`div`,{className:`skills-grid`,children:Rf.skills.map((e,t)=>(0,G.jsxs)(`div`,{className:`skills-card glass-panel`,children:[(0,G.jsxs)(`div`,{className:`skills-card-header`,children:[aS(e.title),(0,G.jsx)(`h3`,{className:`skills-card-title`,children:e.title})]}),(0,G.jsx)(`div`,{className:`skills-list`,children:e.skills.map((e,t)=>(0,G.jsx)(`div`,{className:`skill-item`,children:(0,G.jsx)(`span`,{className:`skill-name`,children:e.name})},t))})]},t))})]}),(0,G.jsx)(`style`,{children:`
        .tech-stack-section {
          position: relative;
          background-color: #ffffff !important; /* Force light background */
          color: #09090b !important;
          padding: 6rem 0;
          overflow: hidden;
        }
        .tech-ascii-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          opacity: 0.18; /* Increased visibility */
        }
        .relative-z {
          position: relative;
          z-index: 1;
        }
        .light-subtitle {
          color: #4b5563 !important; /* Dark text for light bg */
          margin-bottom: 2rem;
        }

        /* Detailed Skills Grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-top: 4.5rem;
          width: 100%;
        }
        .skills-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1.5px solid rgba(0, 0, 0, 0.08);
          border-radius: var(--border-radius-md);
          padding: 2.25rem;
          transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease, border-color 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .skills-card:hover {
          transform: translateY(-6px);
          border-color: rgba(249, 115, 22, 0.4);
          box-shadow: 0 20px 40px rgba(249, 115, 22, 0.08);
        }
        .skills-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          padding-bottom: 1.25rem;
        }
        .category-icon {
          color: hsl(var(--primary));
          background: rgba(249, 115, 22, 0.06);
          padding: 0.5rem;
          border-radius: var(--border-radius-sm);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(249, 115, 22, 0.15);
        }
        .skills-card-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: #09090b;
          letter-spacing: -0.3px;
          margin: 0;
        }
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .skill-item {
          background: rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(0, 0, 0, 0.06);
          padding: 0.4rem 0.9rem;
          border-radius: var(--border-radius-full);
          transition: all var(--transition-fast);
        }
        .skill-item:hover {
          background: rgba(249, 115, 22, 0.08);
          border-color: rgba(249, 115, 22, 0.2);
          transform: translateY(-2px);
        }
        .skill-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: #27272a;
        }

        @media (max-width: 992px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-top: 3rem;
          }
          .tech-stack-section {
            padding: 4rem 0;
          }
        }
      `})]}),sS=({starCount:e=100,baseSpeed:t=.05,className:n=``})=>{let r=(0,b.useRef)(null),i=(0,b.useRef)(null),a=(0,b.useRef)([]);return(0,b.useEffect)(()=>{let n=i.current;if(!n)return;let r=n.getContext(`2d`);if(!r)return;let o,s=window.innerWidth,c=window.innerHeight;n.width=s,n.height=c;let l=[];for(let t=0;t<e;t++)l.push({x:Math.random()*s,y:Math.random()*c,size:Math.random()*1.5+.5,depth:Math.random()*.8+.2,opacity:Math.random()*.7+.3,glow:Math.random()>.8});a.current=l;let u=window.scrollY,d=0,f=()=>{let e=window.scrollY,n=e-u;u=e,d+=n*t};window.addEventListener(`scroll`,f,{passive:!0});let p=()=>{s=window.innerWidth,c=window.innerHeight,n.width=s,n.height=c,a.current.forEach(e=>{e.x>s&&(e.x=Math.random()*s),e.y>c&&(e.y=Math.random()*c)})};window.addEventListener(`resize`,p);let m=()=>{r.clearRect(0,0,s,c),d*=.95;let e=a.current;for(let t=0;t<e.length;t++){let n=e[t];n.y-=d*n.depth,n.y<0?(n.y=c,n.x=Math.random()*s):n.y>c&&(n.y=0,n.x=Math.random()*s),r.fillStyle=`rgba(255, 255, 255, ${n.opacity})`,n.glow?(r.shadowBlur=8,r.shadowColor=`rgba(255, 255, 255, 0.8)`):r.shadowBlur=0,r.beginPath(),r.arc(n.x,n.y,n.size,0,Math.PI*2),r.fill()}o=requestAnimationFrame(m)};return m(),()=>{cancelAnimationFrame(o),window.removeEventListener(`scroll`,f),window.removeEventListener(`resize`,p)}},[e,t]),(0,G.jsx)(`div`,{ref:r,className:`scroll-star-effect-container ${n}`,style:{position:`absolute`,top:0,left:0,width:`100%`,height:`100%`,pointerEvents:`none`,zIndex:0,overflow:`hidden`},children:(0,G.jsx)(`canvas`,{ref:i,style:{display:`block`,width:`100%`,height:`100%`}})})},cS=()=>{let e=Rf.education,t=(0,b.useRef)(null);return(0,b.useEffect)(()=>{let e=t.current;if(!e)return;let n=!1,r=!1,i,a,o,s=t=>{e.scrollWidth>e.clientWidth&&(e.scrollLeft+=t.deltaY*1.2)},c=t=>{t.pointerType===`mouse`&&t.button!==0||(n=!0,r=!1,i=t.clientX,a=t.clientY,o=e.scrollLeft,e.style.cursor=`grabbing`,e.style.scrollBehavior=`auto`)},l=()=>{n=!1,r=!1,e.style.cursor=`grab`,e.style.scrollBehavior=`smooth`},u=t=>{if(!n)return;let s=t.clientX-i,c=t.clientY-a;r||(Math.abs(s)>5||Math.abs(c)>5)&&(Math.abs(s)>Math.abs(c)?(r=!0,e.style.cursor=`grabbing`):n=!1),r&&(t.preventDefault(),e.scrollLeft=o-s*1.2)};return e.addEventListener(`wheel`,s,{passive:!0}),e.addEventListener(`pointerdown`,c),e.addEventListener(`pointerleave`,l),e.addEventListener(`pointerup`,l),e.addEventListener(`pointermove`,u),()=>{e.removeEventListener(`wheel`,s),e.removeEventListener(`pointerdown`,c),e.removeEventListener(`pointerleave`,l),e.removeEventListener(`pointerup`,l),e.removeEventListener(`pointermove`,u)}},[]),(0,G.jsxs)(`section`,{id:`education`,className:`section education-section`,children:[(0,G.jsx)(sS,{starCount:120,baseSpeed:.08}),(0,G.jsx)(`div`,{className:`glowing-bg-secondary edu-glow`}),(0,G.jsxs)(`div`,{className:`container relative-z`,children:[(0,G.jsx)(`h2`,{className:`section-title`,style:{background:`none`,WebkitBackgroundClip:`initial`,WebkitTextFillColor:`initial`},children:(0,G.jsx)(qx,{children:`Education`})}),(0,G.jsx)(rp,{size:`md`,variant:`muted`,containerClassName:`section-subtitle light-subtitle`,align:`center`,children:`My academic timeline and qualifications.`}),(0,G.jsxs)(`div`,{className:`edu-timeline-container`,children:[(0,G.jsx)(`div`,{className:`edu-timeline-line`}),(0,G.jsx)(`div`,{ref:t,className:`edu-timeline-scroll`,children:e.map((e,t)=>(0,G.jsxs)(`div`,{className:`edu-timeline-node`,style:{animationDelay:`${t*.1}s`},children:[(0,G.jsx)(`div`,{className:`edu-node-point`,children:(0,G.jsx)(`div`,{className:`edu-node-dot`})}),(0,G.jsxs)(`div`,{className:`edu-timeline-card`,children:[(0,G.jsx)(`div`,{className:`edu-card-glow`}),(0,G.jsxs)(`div`,{className:`edu-card-header`,children:[(0,G.jsx)(`div`,{className:`edu-card-icon`,children:(0,G.jsx)(Te,{size:24})}),(0,G.jsxs)(`div`,{className:`edu-card-meta`,children:[(0,G.jsxs)(`span`,{className:`edu-card-period`,children:[(0,G.jsx)(pe,{size:11,style:{marginRight:`4px`}}),e.period]}),(0,G.jsx)(`h4`,{className:`edu-card-school`,children:e.school})]})]}),(0,G.jsxs)(`div`,{className:`edu-card-body`,children:[(0,G.jsx)(`h3`,{className:`edu-card-degree`,children:e.degree}),(0,G.jsx)(`p`,{className:`edu-card-desc`,children:e.description}),e.subjects&&(0,G.jsxs)(`div`,{className:`edu-subjects`,children:[(0,G.jsx)(`span`,{className:`edu-subjects-title`,children:`Key Coursework:`}),(0,G.jsx)(`div`,{className:`edu-subjects-list`,children:e.subjects.map((e,t)=>(0,G.jsx)(`span`,{className:`edu-subject-tag`,children:e},t))})]})]})]})]},e.id||t))})]})]}),(0,G.jsx)(`style`,{children:`
        .education-section {
          position: relative;
          background-color: #09090b !important;
          color: #f9fafb !important;
          padding: 6rem 0;
        }
        .edu-glow {
          left: 10%;
          bottom: 20%;
          opacity: 0.15;
          filter: blur(80px);
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }
        .relative-z {
          position: relative;
          z-index: 1;
        }
        .light-subtitle {
          color: #a1a1aa !important;
          margin-bottom: 2.5rem;
        }
        
        /* Horizontal Timeline Styles */
        .edu-timeline-container {
          position: relative;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          padding-top: 1rem;
        }
        .edu-timeline-line {
          position: absolute;
          left: 0;
          right: 0;
          top: 22px;
          height: 2px;
          background: linear-gradient(90deg, rgba(249, 115, 22, 0) 0%, rgba(249, 115, 22, 0.4) 15%, rgba(249, 115, 22, 0.4) 85%, rgba(249, 115, 22, 0) 100%);
          z-index: 1;
        }
        .edu-timeline-scroll {
          display: flex;
          flex-direction: row;
          gap: 2.5rem;
          overflow-x: auto;
          padding: 1rem 1rem 2.5rem 1rem;
          justify-content: flex-start;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          position: relative;
          z-index: 2;
          touch-action: pan-y;
          cursor: grab;
        }
        .edu-timeline-scroll::-webkit-scrollbar {
          height: 6px;
        }
        .edu-timeline-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: var(--border-radius-full);
        }
        .edu-timeline-scroll::-webkit-scrollbar-thumb {
          background: rgba(249, 115, 22, 0.2);
          border-radius: var(--border-radius-full);
          transition: background 0.3s;
        }
        .edu-timeline-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(249, 115, 22, 0.45);
        }
        
        .edu-timeline-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 380px;
          flex: 0 0 380px;
          gap: 1.5rem;
        }
        .edu-node-point {
          width: 24px;
          height: 24px;
          background: #09090b;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
        }
        .edu-node-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: hsl(var(--primary));
          border: 2.5px solid #09090b;
          box-shadow: 0 0 10px rgba(249, 115, 22, 0.6);
          transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .edu-timeline-node:hover .edu-node-dot {
          transform: scale(1.35);
          box-shadow: 0 0 15px rgba(249, 115, 22, 0.9);
        }

        /* Timeline Card */
        .edu-timeline-card {
          position: relative;
          width: 100%;
          border-radius: var(--border-radius-md);
          background: rgba(15, 15, 18, 0.65) !important;
          backdrop-filter: blur(6px) saturate(120%);
          -webkit-backdrop-filter: blur(6px) saturate(120%);
          border: 1px solid rgba(255, 255, 255, 0.06);
          overflow: hidden;
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: border-color var(--transition-normal), transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .edu-timeline-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.03) 0%, transparent 100%);
          pointer-events: none;
        }
        .edu-timeline-card:hover {
          border-color: rgba(249, 115, 22, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }
        .edu-card-glow {
          position: absolute;
          width: 130px;
          height: 130px;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%);
          top: -40px;
          right: -40px;
          pointer-events: none;
        }
        .edu-card-header {
          display: flex;
          gap: 1rem;
          align-items: center;
          width: 100%;
        }
        .edu-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: var(--border-radius-sm);
          background: rgba(249, 115, 22, 0.06);
          color: hsl(var(--primary));
          border: 1px solid rgba(249, 115, 22, 0.15);
          flex-shrink: 0;
        }
        .edu-card-meta {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .edu-card-period {
          display: inline-flex;
          align-items: center;
          font-size: 0.85rem;
          font-weight: 700;
          color: hsl(var(--primary));
          background: rgba(249, 115, 22, 0.08);
          padding: 0.2rem 0.6rem;
          border-radius: var(--border-radius-full);
          width: fit-content;
          border: 1px solid rgba(249, 115, 22, 0.12);
        }
        .edu-card-school {
          font-size: 1.05rem;
          font-weight: 600;
          color: #a1a1aa;
          margin: 0;
        }
        .edu-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .edu-card-degree {
          font-size: 1.35rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.4px;
          line-height: 1.25;
          margin: 0;
        }
        .edu-card-desc {
          font-size: 0.85rem;
          color: #d4d4d8;
          line-height: 1.5;
          margin: 0;
        }
        .edu-subjects {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 0.25rem;
        }
        .edu-subjects-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: #a1a1aa;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .edu-subjects-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .edu-subject-tag {
          font-size: 0.7rem;
          font-weight: 600;
          color: #ea580c;
          background: rgba(234, 88, 12, 0.08);
          border: 1px solid rgba(234, 88, 12, 0.15);
          padding: 0.15rem 0.45rem;
          border-radius: var(--border-radius-sm);
        }

        @media (max-width: 768px) {
          .edu-timeline-scroll {
            gap: 1.75rem;
          }
          .edu-timeline-node {
            min-width: 290px;
            flex: 0 0 290px;
          }
          .edu-timeline-card {
            padding: 1.5rem;
          }
        }
      `})]})},lS=e=>{switch(e.toLowerCase()){case`mobile`:return(0,G.jsx)(Re,{size:28});case`frontend`:return(0,G.jsx)(B,{size:28});case`full-stack`:case`web app`:return(0,G.jsx)(we,{size:28});default:return(0,G.jsx)(Ce,{size:28})}},uS=({project:e})=>(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`div`,{className:`card-top-glow`}),(0,G.jsxs)(`div`,{className:`card-header`,children:[(0,G.jsx)(`span`,{className:`card-badge`,children:e.category}),(0,G.jsx)(`div`,{className:`card-icon-box`,children:lS(e.category)})]}),(0,G.jsxs)(`div`,{className:`card-body`,children:[(0,G.jsx)(`span`,{className:`card-subtitle`,children:e.subtitle}),(0,G.jsx)(`h3`,{className:`card-title`,children:e.title}),(0,G.jsx)(`p`,{className:`card-desc`,children:e.description})]}),(0,G.jsxs)(`div`,{className:`card-tech`,children:[e.tags.slice(0,3).map(e=>(0,G.jsx)(`span`,{className:`tech-tag`,children:e},e)),e.tags.length>3&&(0,G.jsxs)(`span`,{className:`tech-tag-more`,children:[`+`,e.tags.length-3]})]}),(0,G.jsx)(`div`,{className:`card-footer`,children:(0,G.jsxs)(`span`,{className:`explore-btn`,children:[`Explore Details `,(0,G.jsx)(he,{size:14})]})})]}),dS=({project:e,index:t,totalProjects:n,smoothRotation:r,onDetailsClick:i})=>{let[a,o]=(0,b.useState)(!1);(0,b.useEffect)(()=>{let e=()=>o(window.innerWidth<=768);return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let s=t*18,c=Af(r,e=>s-e),l=Af(c,e=>{let t=e%360;return t>180&&(t-=360),t<-180&&(t+=360),t}),u=Af(l,[-45,-20,0,20,45],[.7,.85,1,.85,.7]),d=Af(l,[-45,-20,0,20,45],[.15,.5,1,.5,.15]),f=Af(l,[-45,-20,0,20,45],[10,4,0,4,10]),p=Af(l,e=>Math.round((100-Math.abs(e))*10)),m=Of`blur(${f}px)`,h=Of`translate(-50%, -50%) rotate(${c}deg) scale(${u})`,g={position:`absolute`,left:`50%`,top:`50%`,width:a?`260px`:`340px`,height:a?`360px`:`420px`,transformOrigin:`center ${a?420:560}px`,transform:h,opacity:d,zIndex:p,filter:m,backfaceVisibility:`hidden`};return(0,G.jsx)(Pd.div,{layout:`position`,style:g,className:`circular-project-card`,onClick:()=>i(),children:(0,G.jsx)(uS,{project:e})})},fS=()=>{let e=Rf.projects,[t,n]=(0,b.useState)(null),[r,i]=(0,b.useState)(!1),[a,o]=(0,b.useState)(0),s=(0,b.useRef)(0),c=(0,b.useRef)(null),[l,u]=(0,b.useState)(!1);(0,b.useEffect)(()=>{let e=()=>u(window.innerWidth<=768);return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let d=Ef(0),f=Pf(d,{stiffness:200,damping:30}),p=Of`translate(-50%, -50%) translate(0, ${l?420:520}px) rotate(${-f}deg)`;(0,b.useEffect)(()=>{let e=e=>{e.key===`Escape`&&n(null)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]);let m=e=>{l||e.pointerType===`mouse`&&e.button!==0||(i(!0),o(e.clientX),s.current=0,document.body.style.userSelect=`none`)},h=t=>{if(!r||l)return;t.preventDefault();let n=a-t.clientX;if(Math.abs(n)>0){s.current+=Math.abs(n);let r=(e.length-1)*18,i=d.get()+n*.35;i<0&&(i=0),i>r&&(i=r),d.set(i),o(t.clientX)}},g=()=>{r&&(i(!1),document.body.style.userSelect=``)};return(0,G.jsxs)(`section`,{id:`works`,className:`section projects-section`,children:[l?(0,G.jsxs)(`div`,{className:`mobile-projects-container`,children:[(0,G.jsxs)(`div`,{className:`gallery-header mobile-gallery-header`,children:[(0,G.jsx)(`h2`,{className:`section-title`,style:{background:`none`,WebkitBackgroundClip:`initial`,WebkitTextFillColor:`initial`,marginBottom:`0.5rem`},children:(0,G.jsx)(qx,{children:`Featured Work`})}),(0,G.jsx)(`p`,{className:`gallery-section-subtitle`,children:`Swipe through my featured applications.`})]}),(0,G.jsx)(`div`,{className:`mobile-slider-area`,children:e.map(e=>(0,G.jsx)(`div`,{className:`circular-project-card mobile-slide-card`,onClick:()=>n(e),children:(0,G.jsx)(uS,{project:e})},e.id))})]}):(0,G.jsx)(`div`,{ref:c,className:`circular-gallery-container`,children:(0,G.jsxs)(`div`,{className:`circular-gallery-sticky`,children:[(0,G.jsxs)(`div`,{className:`gallery-header`,children:[(0,G.jsx)(`h2`,{className:`section-title`,style:{background:`none`,WebkitBackgroundClip:`initial`,WebkitTextFillColor:`initial`,marginBottom:`0.5rem`},children:(0,G.jsx)(qx,{children:`Featured Work`})}),(0,G.jsx)(`p`,{className:`gallery-section-subtitle`,children:`Click and drag horizontally to spin the wheel and explore my featured applications.`})]}),(0,G.jsxs)(`div`,{className:`gallery-wheel-area`,onPointerDown:m,onPointerMove:h,onPointerUp:g,onPointerLeave:g,onPointerCancel:g,style:{cursor:r?`grabbing`:`grab`,touchAction:`none`},children:[(0,G.jsx)(Pd.div,{className:`gallery-wheel-disc`,style:{transform:p}}),e.map((t,r)=>(0,G.jsx)(dS,{project:t,index:r,totalProjects:e.length,smoothRotation:f,onDetailsClick:()=>{s.current<10&&n(t)}},t.id))]}),(0,G.jsxs)(`div`,{className:`scroll-indicator`,children:[(0,G.jsx)(`div`,{className:`mouse`,children:(0,G.jsx)(`div`,{className:`wheel`})}),(0,G.jsx)(`span`,{className:`scroll-text`,children:`Drag to spin`})]})]})}),t&&(0,G.jsx)(`div`,{className:`modal-overlay`,onClick:()=>n(null),children:(0,G.jsxs)(`div`,{className:`modal-content glass-panel`,onClick:e=>e.stopPropagation(),children:[(0,G.jsx)(`button`,{className:`modal-close-btn`,onClick:()=>n(null),"aria-label":`Close modal`,children:(0,G.jsx)(Ve,{size:20})}),(0,G.jsxs)(`div`,{className:`modal-inner`,children:[(0,G.jsx)(`span`,{className:`modal-category`,children:t.category}),(0,G.jsx)(`h3`,{className:`modal-title`,children:t.title}),(0,G.jsx)(`h4`,{className:`modal-subtitle`,children:t.subtitle}),(0,G.jsxs)(`div`,{className:`modal-body-layout`,children:[(0,G.jsxs)(`div`,{className:`modal-description-section`,children:[(0,G.jsx)(`h5`,{className:`modal-section-heading`,children:`Overview`}),(0,G.jsx)(`p`,{className:`modal-text`,children:t.longDescription}),(0,G.jsx)(`div`,{className:`modal-tags`,children:t.tags.map(e=>(0,G.jsx)(`span`,{className:`tag-pill`,children:e},e))}),(0,G.jsxs)(`div`,{className:`modal-links`,children:[t.githubUrl&&(0,G.jsxs)(`a`,{href:t.githubUrl,target:`_blank`,rel:`noopener noreferrer`,className:`btn btn-secondary`,children:[(0,G.jsx)(Uf,{size:18}),` View Source Code`]}),t.liveUrl&&(0,G.jsxs)(`a`,{href:t.liveUrl,target:`_blank`,rel:`noopener noreferrer`,className:`btn btn-primary`,children:[(0,G.jsx)(Se,{size:18}),` Visit Live Project`]})]})]}),(0,G.jsxs)(`div`,{className:`modal-features-section`,children:[(0,G.jsx)(`h5`,{className:`modal-section-heading`,children:`Key Features`}),(0,G.jsx)(`ul`,{className:`modal-features-list`,children:t.features.map((e,t)=>(0,G.jsxs)(`li`,{className:`feature-bullet`,children:[(0,G.jsx)(he,{size:14,className:`bullet-icon`}),(0,G.jsx)(`span`,{children:e})]},t))})]})]})]})]})}),(0,G.jsxs)(`div`,{className:`project-cta-section container`,style:{textAlign:`center`,padding:`6rem 1rem`,borderTop:`1px solid rgba(0,0,0,0.05)`,marginTop:`2rem`},children:[(0,G.jsx)(`h3`,{style:{fontSize:`2rem`,fontWeight:800,marginBottom:`0.5rem`,color:`#09090b`},children:`Have a project in mind?`}),(0,G.jsx)(`p`,{style:{fontSize:`1.1rem`,color:`#4b5563`,marginBottom:`2rem`},children:`Let's turn your idea into something real.`}),(0,G.jsxs)(`button`,{onClick:()=>{let e=document.getElementById(`get-in-touch`);e&&window.scrollTo({top:e.offsetTop-70,behavior:`smooth`})},className:`btn btn-primary`,style:{margin:`0 auto`},children:[`Tell Me About Your Idea `,(0,G.jsx)(ue,{size:18})]})]}),(0,G.jsx)(`style`,{children:`
        .projects-section {
          padding: 0 !important;
          background-color: #ffffff !important;
          color: #09090b !important;
        }
        .circular-gallery-container {
          position: relative;
          height: auto; 
          width: 100%;
        }
        .circular-gallery-sticky {
          position: relative;
          height: 100vh;
          min-height: 800px;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 5.5rem;
          background: radial-gradient(circle at center 120%, #f4f4f5 0%, #ffffff 70%);
          border-top-left-radius: 40px;
          border-top-right-radius: 40px;
        }
        .circular-gallery-sticky .section-title {
          left: auto !important;
          transform: none !important;
        }
        .gallery-header {
          text-align: center;
          z-index: 10;
          max-width: 600px;
          padding: 0 1rem;
        }
        .gallery-section-subtitle {
          color: #4b5563 !important;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        .filter-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          row-gap: 0.6rem;
          margin-bottom: 0.5rem;
        }
        .filter-tab {
          padding: 0.4rem 1.25rem;
          border-radius: var(--border-radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          color: #4b5563;
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: rgba(0, 0, 0, 0.02);
          transition: all var(--transition-fast);
          cursor: pointer;
        }
        .filter-tab:hover {
          color: #09090b;
          border-color: rgba(249, 115, 22, 0.4);
          background: rgba(249, 115, 22, 0.05);
        }
        .filter-tab.active {
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%) !important;
          color: white !important;
          border-color: transparent !important;
        }

        /* Rotary Wheel Area */
        .gallery-wheel-area {
          position: relative;
          width: 100%;
          height: 560px;
          margin: 0 auto;
          overflow: hidden;
          mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
        }
        .gallery-wheel-disc {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%) translate(0, 560px);
          width: 1120px;
          height: 1120px;
          border-radius: 50%;
          /* Rotational circle graphic */
          background: radial-gradient(circle, rgba(0,0,0,0) 65%, rgba(0, 0, 0, 0.01) 100%);
          border: 1.5px dashed rgba(0, 0, 0, 0.06);
          pointer-events: none;
          z-index: 1;
        }
        .gallery-wheel-disc::after {
          content: '';
          position: absolute;
          width: 900px;
          height: 900px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.02);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        /* Circular Cards Styles */
        .circular-project-card {
          border-radius: var(--border-radius-md);
          background: rgba(255, 255, 255, 0.95);
          border: 1.5px solid rgba(0, 0, 0, 0.08);
          overflow: hidden;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          will-change: transform, opacity, filter;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
        }
        .circular-project-card:hover {
          border-color: rgba(249, 115, 22, 0.4) !important;
          box-shadow: 0 20px 45px rgba(249, 115, 22, 0.12) !important;
        }
        .card-top-glow {
          position: absolute;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%);
          top: -60px;
          left: -60px;
          pointer-events: none;
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .card-badge {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 0.2rem 0.6rem;
          border-radius: var(--border-radius-full);
          color: #4b5563;
        }
        .card-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: var(--border-radius-sm);
          background: rgba(249, 115, 22, 0.06);
          color: hsl(var(--primary));
          border: 1px solid rgba(249, 115, 22, 0.15);
        }
        .card-body {
          margin-top: 1rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .card-subtitle {
          font-size: 0.8rem;
          font-weight: 600;
          color: hsl(var(--primary));
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.25rem;
        }
        .card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #09090b;
          letter-spacing: -0.5px;
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }
        .card-desc {
          font-size: 0.85rem;
          color: #4b5563;
          line-height: 1.5;
          margin-bottom: 1.25rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .tech-tag {
          font-size: 0.7rem;
          font-weight: 600;
          background: rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(0, 0, 0, 0.05);
          color: #4b5563;
          padding: 0.15rem 0.5rem;
          border-radius: var(--border-radius-sm);
        }
        .tech-tag-more {
          font-size: 0.7rem;
          font-weight: 700;
          color: hsl(var(--primary));
          margin-left: 0.2rem;
        }
        .card-footer {
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          padding-top: 0.9rem;
          display: flex;
          align-items: center;
          width: 100%;
        }
        .explore-btn {
          font-size: 0.85rem;
          font-weight: 700;
          color: hsl(var(--primary));
          display: flex;
          align-items: center;
          gap: 0.2rem;
          transition: color 0.2s;
        }
        .circular-project-card:hover .explore-btn {
          color: hsl(var(--primary-hover));
        }

        /* Mouse Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 4.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          opacity: 0.75;
          z-index: 10;
        }
        .mouse {
          width: 20px;
          height: 32px;
          border: 2px solid #71717a;
          border-radius: 10px;
          position: relative;
        }
        .wheel {
          width: 5px;
          height: 5px;
          background-color: hsl(var(--primary));
          border-radius: 50%;
          position: absolute;
          top: 10px;
          left: 50%;
          transform-origin: 50% 200%;
          animation: spinMouse 1.5s linear infinite;
        }
        @keyframes spinMouse {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .scroll-text {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: #71717a;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          overflow-y: auto;
        }
        .modal-content {
          width: 100%;
          max-width: 800px;
          position: relative;
          padding: 2.5rem;
          background: rgba(255, 255, 255, 1) !important;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.12) !important;
          border: 1px solid rgba(0, 0, 0, 0.08) !important;
          border-radius: var(--border-radius-md);
          animation: modalGrow 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes modalGrow {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .modal-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          color: #71717a !important;
          transition: color var(--transition-fast);
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }
        .modal-close-btn:hover {
          color: #09090b !important;
        }
        .modal-category {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: hsl(var(--primary));
          margin-bottom: 0.25rem;
          display: block;
        }
        .modal-title {
          font-size: 2rem;
          font-weight: 800;
          color: #09090b !important;
        }
        .modal-subtitle {
          font-size: 1.1rem;
          color: #4b5563 !important;
          font-weight: 500;
          margin-bottom: 2rem;
        }
        .modal-body-layout {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2.5rem;
        }
        .modal-section-heading {
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
          color: #09090b !important;
        }
        .modal-text {
          font-size: 0.975rem;
          color: #27272a !important;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }
        .tag-pill {
          font-size: 0.75rem;
          font-weight: 600;
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #4b5563;
          padding: 0.25rem 0.75rem;
          border-radius: var(--border-radius-full);
          transition: all var(--transition-fast);
        }
        .tag-pill:hover {
          background: rgba(249, 115, 22, 0.08);
          color: hsl(var(--primary));
          border-color: rgba(249, 115, 22, 0.2);
        }
        .modal-links {
          display: flex;
          gap: 1rem;
        }
        .modal-links .btn {
          padding: 0.65rem 1.25rem;
          font-size: 0.85rem;
        }
        .modal-links .btn-secondary {
          border: 1px solid rgba(0, 0, 0, 0.1) !important;
          color: #27272a !important;
          background: rgba(0, 0, 0, 0.02) !important;
        }
        .modal-links .btn-secondary:hover {
          background: rgba(0, 0, 0, 0.06) !important;
          color: #09090b !important;
        }
        .modal-features-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .feature-bullet {
          display: flex;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: #27272a !important;
          line-height: 1.5;
        }
        .bullet-icon {
          color: hsl(var(--primary));
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        @media (max-width: 768px) {
          .circular-gallery-sticky {
            padding-top: 4.5rem;
          }
          .gallery-section-subtitle {
            font-size: 0.85rem;
            margin-bottom: 1rem;
          }
          .gallery-wheel-area {
            height: 420px;
            margin-top: -10px;
          }
          .gallery-wheel-disc {
            width: 840px;
            height: 840px;
            transform: translate(-50%, -50%) translate(0, 420px);
          }
          .gallery-wheel-disc::after {
            width: 700px;
            height: 700px;
          }
          .circular-project-card {
            padding: 1.25rem !important;
          }
          .card-icon-box {
            width: 44px;
            height: 44px;
          }
          .card-title {
            font-size: 1.15rem;
          }
          .card-desc {
            font-size: 0.8rem;
          }
          .modal-body-layout {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .modal-overlay {
            padding: 1.5rem 1rem;
          }
          .modal-content {
            padding: 1.5rem;
            max-height: 85vh;
            overflow-y: auto;
          }
          .modal-title {
            font-size: 1.5rem;
          }
          .modal-subtitle {
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
          }
          .modal-section-heading {
            font-size: 0.85rem;
            margin-bottom: 0.75rem;
          }
          .modal-text {
            font-size: 0.85rem;
            margin-bottom: 1rem;
          }
          .feature-bullet {
            font-size: 0.85rem;
          }
          .tag-pill {
            font-size: 0.7rem;
            padding: 0.2rem 0.6rem;
          }
          .modal-links {
            flex-direction: column;
            gap: 0.75rem;
          }
          .modal-links .btn {
            padding: 0.6rem 1rem;
            font-size: 0.85rem;
            justify-content: center;
          }
          /* Native Mobile Slider Additions */
          .mobile-projects-container {
            padding-top: 4.5rem;
            padding-bottom: 4rem;
            background: radial-gradient(circle at center 120%, #f4f4f5 0%, #ffffff 70%);
            border-top-left-radius: 40px;
            border-top-right-radius: 40px;
            width: 100%;
          }
          .mobile-gallery-header {
            margin: 0 auto 1.5rem auto;
          }
          .mobile-slider-area {
            display: flex;
            overflow-x: auto;
            gap: 1.25rem;
            padding: 1rem 1.5rem 2rem 1.5rem;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }
          .mobile-slider-area::-webkit-scrollbar {
            display: none;
          }
          .mobile-slide-card {
            flex: 0 0 85%;
            max-width: 320px;
            scroll-snap-align: center;
            height: auto;
            min-height: 380px;
            position: relative;
            transform: none !important;
            opacity: 1 !important;
            filter: none !important;
            left: auto !important;
            top: auto !important;
          }
        }
      `})]})},pS=``+new URL(`react_blog_feature-PvxomrAh.png`,import.meta.url).href,mS=[{key:1,url:pS,label:`My Journey into React: From Imperative DOM to Component-Driven Engineering`}],hS=({onSelect:e})=>{let[t,n]=(0,b.useState)(null),[r,i]=(0,b.useState)(!0),a=Ef(0),o=Ef(0),s=Pf(a,{stiffness:300,damping:40}),c=Pf(o,{stiffness:300,damping:40});(0,b.useEffect)(()=>{let e=()=>{i(window.innerWidth>=768)};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let l=e=>{a.set(e.clientX),o.set(e.clientY)},u=e=>{n(e)};return(0,G.jsxs)(`div`,{className:`image-reveal-wrapper`,onMouseMove:l,onMouseLeave:()=>{n(null)},children:[mS.map(n=>(0,G.jsxs)(`div`,{className:`reveal-row`,onMouseEnter:()=>u(n),onClick:()=>e&&e(n),children:[!r&&(0,G.jsx)(`img`,{src:n.url,className:`reveal-mobile-img`,alt:n.label}),(0,G.jsx)(`h2`,{className:`reveal-title ${t?.key===n.key?`focused-title`:``}`,children:n.label}),(0,G.jsx)(`button`,{"aria-label":`View ${n.label}`,className:`reveal-btn ${t?.key===n.key?`focused-btn`:``}`,children:(0,G.jsx)(Ne,{className:`arrow-icon`,size:24})}),(0,G.jsx)(`div`,{className:`reveal-underline ${t?.key===n.key?`active-underline`:``}`})]},n.key)),(0,G.jsx)(K,{children:r&&t&&(0,G.jsx)(Pd.img,{src:t.url,alt:t.label,className:`reveal-floating-img`,style:{left:s,top:c,x:`-50%`,y:`-50%`},initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{type:`spring`,stiffness:300,damping:30}})}),(0,G.jsx)(`style`,{children:`
        .image-reveal-wrapper {
          position: relative;
          margin: 3rem auto 0;
          width: 100%;
          max-width: 1000px;
          min-height: fit-content;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          overflow: visible;
        }
        .reveal-row {
          padding: 2.25rem 1rem;
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          overflow: visible;
        }
        .reveal-title {
          font-family: var(--font-heading);
          text-transform: uppercase;
          font-size: 2.25rem;
          font-weight: 700;
          line-height: 1.1;
          margin: 0;
          color: #a1a1aa;
          transition: color 0.3s ease, transform 0.3s ease;
          position: relative;
          z-index: 10;
          pointer-events: none;
          max-width: 80%;
          text-align: left;
        }
        .reveal-title.focused-title {
          color: #ffffff;
          transform: translateX(10px);
        }
        .reveal-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #a1a1aa;
          background: transparent;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10;
        }
        .reveal-btn.focused-btn {
          background: #ffffff;
          color: #09090b;
          border-color: #ffffff;
          transform: rotate(45deg);
        }
        .arrow-icon {
          transition: transform 0.3s ease;
        }
        .reveal-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%);
          width: 0;
          transition: width 0.3s ease;
          z-index: 5;
        }
        .reveal-underline.active-underline {
          width: 100%;
        }
        .reveal-floating-img {
          position: fixed;
          z-index: 100;
          object-fit: cover;
          width: 260px;
          height: 340px;
          border-radius: 12px;
          pointer-events: none;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          background: #09090b;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .reveal-mobile-img {
          display: none;
        }
        
        @media (max-width: 768px) {
          .reveal-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.25rem;
            padding: 1.5rem 0.5rem;
          }
          .reveal-mobile-img {
            display: block;
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
          .reveal-title {
            font-size: 1.25rem;
            max-width: 100%;
          }
          .reveal-title.focused-title {
            transform: none;
          }
          .reveal-btn {
            display: none;
          }
        }
      `})]})},gS=({onSelectBlog:e})=>(0,G.jsxs)(`section`,{id:`blogs`,className:`section blogs-section`,children:[(0,G.jsxs)(`div`,{className:`container relative-z`,children:[(0,G.jsx)(`h2`,{className:`section-title`,style:{background:`none`,WebkitBackgroundClip:`initial`,WebkitTextFillColor:`initial`},children:(0,G.jsx)(qx,{children:`My Blogs`})}),(0,G.jsx)(rp,{size:`md`,variant:`muted`,containerClassName:`section-subtitle`,align:`center`,children:`Writing about software engineering, UI designs, and system architectures.`}),(0,G.jsx)(hS,{onSelect:e})]}),(0,G.jsx)(`style`,{children:`
        .blogs-section {
          position: relative;
          background-color: #09090b !important; /* Alternating Dark Background */
          color: #f9fafb !important;
          padding: 6rem 0;
          overflow: hidden;
        }
        .blogs-section .section-subtitle {
          color: #a1a1aa !important;
        }
        .relative-z {
          position: relative;
          z-index: 1;
        }
      `})]}),_S=[{question:`What is the purpose of this website?`,answer:`This is my personal developer portfolio designed to showcase my software projects, technical skills, academic qualifications, and professional experiences in an interactive, visually engaging format.`},{question:`How do I contact support?`,answer:`Since this is a personal portfolio, you can reach out directly via the 'Get in Touch' section below, or drop an email to abhishekbhat014@gmail.com. I will get back to you as soon as possible.`},{question:`How do I find the best products?`,answer:`You can explore my featured applications and systems in the 'Works' section. Each project contains detailed insights, lists of key features, technology tags, and links to source code repositories.`},{question:`Can I return a product?`,answer:`All my open-source projects featured here are free to explore, clone, and modify under their respective open-source licenses (like MIT). For custom client work, terms are defined per project contract.`},{question:`Do you offer international shipping?`,answer:`As a software developer, I deliver digital services globally! I work with clients worldwide on remote contracts, delivering digital applications directly via secure cloud repositories and app stores.`},{question:`How can I track my order?`,answer:`For ongoing freelance projects, I provide continuous tracking via private GitHub repositories, Jira/Trello project boards, and scheduled weekly demo updates so you always know the exact status of your software.`}],vS=()=>{let[e,t]=(0,b.useState)(null),n=n=>{t(e===n?null:n)};return(0,G.jsxs)(`section`,{id:`faq`,className:`section faq-section`,children:[(0,G.jsxs)(`div`,{className:`container relative-z faq-grid`,children:[(0,G.jsx)(`div`,{className:`faq-heading-side`,children:(0,G.jsx)(`h2`,{className:`faq-title`,style:{background:`none`,WebkitBackgroundClip:`initial`,WebkitTextFillColor:`initial`},children:(0,G.jsx)(qx,{children:`Frequently Asked Questions`})})}),(0,G.jsx)(`div`,{className:`faq-accordion-side`,children:_S.map((t,r)=>{let i=e===r;return(0,G.jsxs)(`div`,{className:`faq-item ${i?`active`:``}`,onClick:()=>n(r),children:[(0,G.jsxs)(`div`,{className:`faq-question-row`,children:[(0,G.jsx)(`div`,{className:`faq-icon-wrap`,children:(0,G.jsx)(Pe,{size:20,className:`faq-plus-icon ${i?`rotate-45`:``}`})}),(0,G.jsx)(`h3`,{className:`faq-question`,children:t.question})]}),(0,G.jsx)(`div`,{className:`faq-answer-wrapper ${i?`show`:``}`,children:(0,G.jsx)(`p`,{className:`faq-answer`,children:t.answer})})]},r)})})]}),(0,G.jsx)(`style`,{children:`
        .faq-section {
          position: relative;
          background-color: #ffffff !important;
          color: #09090b !important;
          padding: 8rem 0;
          overflow: hidden;
        }
        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: start;
        }
        .faq-heading-side {
          position: sticky;
          top: 120px;
        }
        .faq-title {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: #09090b !important;
          letter-spacing: -1px;
        }
        .faq-title-highlight {
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .faq-accordion-side {
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }
        .faq-item {
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          padding: 1.5rem 0;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .faq-item:hover .faq-question {
          color: #000000;
        }
        .faq-item:hover .faq-plus-icon {
          color: hsl(var(--primary));
        }
        .faq-question-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
        }
        .faq-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }
        .faq-plus-icon {
          color: #3b82f6; /* Premium Blue for the icon */
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s ease;
        }
        .faq-plus-icon.rotate-45 {
          transform: rotate(45deg);
          color: hsl(var(--secondary)) !important;
        }
        .faq-question {
          font-family: var(--font-body);
          font-size: 1.25rem;
          font-weight: 600;
          color: #27272a;
          line-height: 1.4;
          transition: color 0.2s ease;
        }
        .faq-answer-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;
          opacity: 0;
          padding-left: 3rem; /* Align with the text, skipping icon spacing */
        }
        .faq-answer-wrapper.show {
          max-height: 200px; /* Safe upper bound for text content */
          opacity: 1;
          margin-top: 1rem;
        }
        .faq-answer {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: #4b5563;
          line-height: 1.6;
        }
        .relative-z {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 968px) {
          .faq-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .faq-heading-side {
            position: relative;
            top: 0;
          }
          .faq-title {
            font-size: 2.75rem;
          }
        }
        @media (max-width: 600px) {
          .faq-title {
            font-size: 1.75rem !important;
          }
          .faq-question {
            font-size: 1.1rem;
          }
          .faq-answer-wrapper {
            padding-left: 2.5rem;
          }
        }
      `})]})},yS=({label:e,items:t=[],value:n,onChange:r,className:i=``,icon:a,error:o=!1})=>{let[s,c]=(0,b.useState)(!1),l=(0,b.useRef)(null),u=t.find(e=>e.id===n||e.label===n||e.value===n)||null,d=e=>{c(!1),r?.(e)};return(0,b.useEffect)(()=>{let e=e=>{l.current&&!l.current.contains(e.target)&&c(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]),(0,G.jsxs)(`div`,{ref:l,className:`basic-dropdown-container ${i}`,children:[(0,G.jsxs)(`button`,{type:`button`,onClick:()=>c(!s),"aria-haspopup":`menu`,"aria-expanded":s,className:`basic-dropdown-button ${o?`error-input`:``} ${s?`is-open`:``}`,children:[(0,G.jsxs)(`div`,{className:`basic-dropdown-label-group`,children:[a&&(0,G.jsx)(a,{size:18,className:`basic-dropdown-icon`}),(0,G.jsx)(`span`,{className:`basic-dropdown-text ${u?``:`is-placeholder`}`,children:u?u.label:e})]}),(0,G.jsx)(Pd.div,{className:`basic-dropdown-chevron`,animate:{rotate:s?180:0},transition:{duration:.2},children:(0,G.jsx)(me,{size:18})})]}),(0,G.jsx)(K,{children:s&&(0,G.jsx)(Pd.div,{className:`basic-dropdown-menu`,initial:{opacity:0,y:-10,scaleY:.95},animate:{opacity:1,y:0,scaleY:1},exit:{opacity:0,y:-8,scaleY:.95,transition:{duration:.15}},transition:{type:`spring`,bounce:.15,duration:.3},role:`menu`,"aria-orientation":`vertical`,children:(0,G.jsx)(`ul`,{className:`basic-dropdown-list`,children:t.map(e=>{let t=u?.id===e.id||u?.label===e.label||u?.value===e.value;return(0,G.jsx)(Pd.li,{role:`none`,initial:{opacity:0,x:-6},animate:{opacity:1,x:0},exit:{opacity:0,x:-6},transition:{type:`spring`,stiffness:320,damping:26},children:(0,G.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>d(e),className:`basic-dropdown-item ${t?`selected`:``}`,children:[e.icon&&(0,G.jsx)(`span`,{className:`dropdown-item-icon`,children:e.icon}),(0,G.jsx)(`span`,{className:`dropdown-item-text`,children:e.label}),t&&(0,G.jsx)(Pd.span,{className:`dropdown-selected-check`,initial:{scale:0},animate:{scale:1},transition:{type:`spring`,stiffness:300,damping:20},"aria-hidden":!0,children:(0,G.jsx)(`svg`,{className:`check-svg`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,G.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2.5,d:`M5 13l4 4L19 7`})})})]})},e.id||e.value||e.label)})})})}),(0,G.jsx)(`style`,{children:`
        .basic-dropdown-container {
          position: relative;
          width: 100%;
        }
        .basic-dropdown-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.8rem 1rem !important;
          border-radius: var(--border-radius-sm, 8px);
          background: rgba(255, 255, 255, 0.02) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          color: #f9fafb !important;
          font-family: inherit;
          font-size: 0.95rem;
          cursor: pointer;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          text-align: left;
        }
        .basic-dropdown-button:hover, .basic-dropdown-button.is-open {
          border-color: rgba(249, 115, 22, 0.5) !important;
          background: rgba(255, 255, 255, 0.04) !important;
        }
        .basic-dropdown-button:focus-visible {
          outline: none;
          border-color: hsl(var(--primary)) !important;
          box-shadow: 0 0 0 3px hsla(24, 95%, 53%, 0.15) !important;
        }
        .basic-dropdown-button.error-input {
          border-color: hsl(var(--error)) !important;
        }
        .basic-dropdown-label-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          min-width: 0;
          overflow: hidden;
        }
        .basic-dropdown-icon {
          color: #71717a;
          flex-shrink: 0;
          transition: color 0.2s ease;
        }
        .basic-dropdown-button:hover .basic-dropdown-icon,
        .basic-dropdown-button.is-open .basic-dropdown-icon {
          color: hsl(var(--primary));
        }
        .basic-dropdown-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .basic-dropdown-text.is-placeholder {
          color: #71717a;
        }
        .basic-dropdown-chevron {
          color: #71717a;
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }
        .basic-dropdown-button:hover .basic-dropdown-chevron {
          color: #f9fafb;
        }
        .basic-dropdown-menu {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          width: 100%;
          z-index: 50;
          background: rgba(18, 18, 22, 0.96);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--border-radius-sm, 8px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
          overflow: hidden;
          transform-origin: top;
        }
        .basic-dropdown-list {
          list-style: none;
          margin: 0;
          padding: 0.35rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          max-height: 220px;
          overflow-y: auto;
        }
        .basic-dropdown-list::-webkit-scrollbar {
          width: 4px;
        }
        .basic-dropdown-list::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 4px;
        }
        .basic-dropdown-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 0.85rem;
          border: none;
          background: transparent;
          color: #d4d4d8;
          font-family: inherit;
          font-size: 0.9rem;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
          text-align: left;
        }
        .basic-dropdown-item:hover {
          background: rgba(249, 115, 22, 0.12);
          color: #f9fafb;
        }
        .basic-dropdown-item.selected {
          background: rgba(249, 115, 22, 0.18);
          color: hsl(var(--primary));
          font-weight: 600;
        }
        .dropdown-item-icon {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          color: currentColor;
        }
        .dropdown-item-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex-grow: 1;
        }
        .dropdown-selected-check {
          margin-left: auto;
          display: flex;
          align-items: center;
          color: hsl(var(--primary));
          flex-shrink: 0;
        }
        .check-svg {
          width: 16px;
          height: 16px;
        }
      `})]})},bS=[{id:`mobile`,label:`Mobile App`,value:`Mobile App`},{id:`web`,label:`Website / Web Application`,value:`Website / Web Application`},{id:`improvement`,label:`Existing Project Improvement`,value:`Existing Project Improvement`},{id:`backend`,label:`Backend / API`,value:`Backend / API`},{id:`other`,label:`Other`,value:`Other`}],xS=[{id:`not_sure`,label:`Not sure yet`,value:`Not sure yet`},{id:`under_25k`,label:`Under ₹25,000`,value:`Under ₹25,000`},{id:`25k_50k`,label:`₹25,000 – ₹50,000`,value:`₹25,000 – ₹50,000`},{id:`50k_100k`,label:`₹50,000 – ₹1,00,000`,value:`₹50,000 – ₹1,00,000`},{id:`100k_plus`,label:`₹1,00,000+`,value:`₹1,00,000+`},{id:`discuss`,label:`Prefer to discuss`,value:`Prefer to discuss`}],SS=[{id:`no_deadline`,label:`No specific deadline`,value:`No specific deadline`},{id:`1_month`,label:`Within 1 month`,value:`Within 1 month`},{id:`1_3_months`,label:`1–3 months`,value:`1–3 months`},{id:`3_6_months`,label:`3–6 months`,value:`3–6 months`},{id:`not_sure_timeline`,label:`Not sure yet`,value:`Not sure yet`}],CS=()=>{let{email:e}=Rf.personalInfo,[t,n]=(0,b.useState)({name:``,email:``,project_name:``,project_type:``,budget:``,timeline:``,message:``}),[r,i]=(0,b.useState)({}),[a,o]=(0,b.useState)(!1),[s,c]=(0,b.useState)(!1),[l,u]=(0,b.useState)(null),d=()=>{let e={};return t.name.trim()||(e.name=`Name is required`),t.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)||(e.email=`Valid email is required`):e.email=`Email is required`,t.project_type||(e.project_type=`Project type is required`),(!t.message.trim()||t.message.trim().length<10)&&(e.message=`Please provide a brief description (min 10 characters)`),i(e),Object.keys(e).length===0},f=e=>{let{name:t,value:a}=e.target;n(e=>({...e,[t]:a})),r[t]&&i(e=>({...e,[t]:``})),l&&u(null)},p=(e,t)=>{n(n=>({...n,[e]:t})),r[e]&&i(t=>({...t,[e]:``})),l&&u(null)};return(0,G.jsxs)(`section`,{id:`get-in-touch`,className:`section contact-section`,children:[(0,G.jsx)(`div`,{className:`glowing-bg contact-glow`}),(0,G.jsxs)(`div`,{className:`container relative-z`,children:[(0,G.jsx)(`h2`,{className:`section-title`,style:{background:`none`,WebkitBackgroundClip:`initial`,WebkitTextFillColor:`initial`,marginBottom:`0.5rem`},children:(0,G.jsx)(qx,{children:`Have an idea? Let's build it.`})}),(0,G.jsx)(rp,{size:`md`,variant:`muted`,containerClassName:`section-subtitle light-subtitle`,align:`center`,children:`Tell me a little about what you're trying to build. You don't need to have everything figured out — just describe the idea and I'll get back to you.`}),(0,G.jsxs)(`div`,{className:`contact-grid grid-2`,children:[(0,G.jsxs)(`div`,{className:`contact-details glass-panel light-details`,children:[(0,G.jsx)(`h3`,{className:`contact-info-title`,children:`Let's Connect`}),(0,G.jsxs)(rp,{size:`sm`,variant:`muted`,containerClassName:`contact-info-desc`,children:[`Have an idea but don't know where to start? Tell me what you're thinking about.`,(0,G.jsx)(`br`,{}),(0,G.jsx)(`br`,{}),(0,G.jsx)(`span`,{style:{color:`hsl(var(--primary))`,fontWeight:600},children:`Apps · Websites · Software Products`}),(0,G.jsx)(`br`,{}),(0,G.jsx)(`br`,{}),`For general inquiries, feel free to reach out directly:`]}),(0,G.jsxs)(`div`,{className:`info-cards-list`,children:[(0,G.jsxs)(`div`,{className:`info-card light-info-card`,children:[(0,G.jsx)(`div`,{className:`info-icon-wrapper`,children:(0,G.jsx)(ke,{size:20})}),(0,G.jsxs)(`div`,{className:`info-text-wrapper`,children:[(0,G.jsx)(`span`,{className:`info-label`,children:`Email Me`}),(0,G.jsx)(`a`,{href:`mailto:${e}`,className:`info-val`,children:e})]})]}),(0,G.jsxs)(`div`,{className:`info-card light-info-card`,children:[(0,G.jsx)(`div`,{className:`info-icon-wrapper`,children:(0,G.jsx)(Ae,{size:20})}),(0,G.jsxs)(`div`,{className:`info-text-wrapper`,children:[(0,G.jsx)(`span`,{className:`info-label`,children:`Location`}),(0,G.jsx)(`span`,{className:`info-val`,children:`Bangalore, India`})]})]})]})]}),(0,G.jsx)(`div`,{className:`contact-form-container glass-panel light-form`,children:s?(0,G.jsxs)(`div`,{className:`success-banner`,children:[(0,G.jsx)(_e,{size:48,className:`success-icon animate-bounce`}),(0,G.jsx)(`h3`,{className:`success-title`,children:`Thanks for reaching out!`}),(0,G.jsx)(`p`,{className:`success-desc`,children:`Your idea has been sent successfully. I'll get back to you as soon as I can.`}),(0,G.jsx)(`button`,{onClick:()=>c(!1),className:`btn btn-primary`,children:`Send Another Inquiry`})]}):(0,G.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),d()){if(e.target.botcheck&&e.target.botcheck.value){c(!0);return}o(!0),u(null);try{let e=await fetch(`https://api.web3forms.com/submit`,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify({access_key:`909f59db-3bcc-40ca-a2e1-c7286aebf080`,subject:`New Project Inquiry — ${t.project_type}`,from_name:t.name,replyto:t.email,Name:t.name,Email:t.email,"Project / Idea Name":t.project_name||`Not provided`,"Project Type":t.project_type,Budget:t.budget||`Not specified`,Timeline:t.timeline||`Not specified`,"Project Description":t.message})}),r=await e.json();e.status===200?(c(!0),n({name:``,email:``,project_name:``,project_type:``,budget:``,timeline:``,message:``})):u(r.message||`Something went wrong. Your message couldn't be sent.`)}catch{u(`Failed to send request. Please check your connection and try again.`)}finally{o(!1)}}},className:`contact-form`,children:[l&&(0,G.jsxs)(`div`,{className:`error-banner`,children:[(0,G.jsx)(ve,{size:20}),(0,G.jsx)(`span`,{children:l})]}),(0,G.jsx)(`input`,{type:`checkbox`,name:`botcheck`,style:{display:`none`}}),(0,G.jsxs)(`div`,{className:`form-group-row`,children:[(0,G.jsxs)(`div`,{className:`form-group`,children:[(0,G.jsx)(`label`,{htmlFor:`name`,className:`visually-hidden`,children:`Name`}),(0,G.jsxs)(`div`,{className:`input-with-icon`,children:[(0,G.jsx)(Be,{size:18,className:`input-icon`}),(0,G.jsx)(`input`,{type:`text`,id:`name`,name:`name`,value:t.name,onChange:f,placeholder:`Full Name`,"aria-required":`true`,className:r.name?`error-input`:``})]}),r.name&&(0,G.jsxs)(`span`,{className:`error-msg`,children:[(0,G.jsx)(ge,{size:12}),` `,r.name]})]}),(0,G.jsxs)(`div`,{className:`form-group`,children:[(0,G.jsx)(`label`,{htmlFor:`email`,className:`visually-hidden`,children:`Email`}),(0,G.jsxs)(`div`,{className:`input-with-icon`,children:[(0,G.jsx)(ke,{size:18,className:`input-icon`}),(0,G.jsx)(`input`,{type:`email`,id:`email`,name:`email`,value:t.email,onChange:f,placeholder:`Email Address`,"aria-required":`true`,className:r.email?`error-input`:``})]}),r.email&&(0,G.jsxs)(`span`,{className:`error-msg`,children:[(0,G.jsx)(ge,{size:12}),` `,r.email]})]})]}),(0,G.jsxs)(`div`,{className:`form-group-row`,children:[(0,G.jsxs)(`div`,{className:`form-group`,children:[(0,G.jsx)(`label`,{htmlFor:`project_name`,className:`visually-hidden`,children:`Project / Idea Name`}),(0,G.jsxs)(`div`,{className:`input-with-icon`,children:[(0,G.jsx)(ze,{size:18,className:`input-icon`}),(0,G.jsx)(`input`,{type:`text`,id:`project_name`,name:`project_name`,value:t.project_name,onChange:f,placeholder:`Project Name (Optional)`})]})]}),(0,G.jsxs)(`div`,{className:`form-group`,children:[(0,G.jsx)(`label`,{htmlFor:`project_type`,className:`visually-hidden`,children:`What would you like to build?`}),(0,G.jsx)(yS,{label:`Project Type`,items:bS,value:t.project_type,onChange:e=>p(`project_type`,e.value),icon:fe,error:!!r.project_type}),r.project_type&&(0,G.jsxs)(`span`,{className:`error-msg`,children:[(0,G.jsx)(ge,{size:12}),` `,r.project_type]})]})]}),(0,G.jsxs)(`div`,{className:`form-group-row`,children:[(0,G.jsxs)(`div`,{className:`form-group`,children:[(0,G.jsx)(`label`,{htmlFor:`budget`,className:`visually-hidden`,children:`Estimated Budget`}),(0,G.jsx)(yS,{label:`Estimated Budget`,items:xS,value:t.budget,onChange:e=>p(`budget`,e.value),icon:Ee})]}),(0,G.jsxs)(`div`,{className:`form-group`,children:[(0,G.jsx)(`label`,{htmlFor:`timeline`,className:`visually-hidden`,children:`Expected Timeline`}),(0,G.jsx)(yS,{label:`Expected Timeline`,items:SS,value:t.timeline,onChange:e=>p(`timeline`,e.value),icon:ye})]})]}),(0,G.jsxs)(`div`,{className:`form-group`,children:[(0,G.jsx)(`label`,{htmlFor:`message`,className:`visually-hidden`,children:`Tell me about your idea`}),(0,G.jsxs)(`div`,{className:`input-with-icon textarea-icon-wrapper`,children:[(0,G.jsx)(Me,{size:18,className:`input-icon textarea-icon`}),(0,G.jsx)(`textarea`,{id:`message`,name:`message`,rows:5,value:t.message,onChange:f,placeholder:`Describe your idea, the problem you're trying to solve, or what you'd like to build...`,"aria-required":`true`,className:r.message?`error-input`:``})]}),r.message&&(0,G.jsxs)(`span`,{className:`error-msg`,children:[(0,G.jsx)(ge,{size:12}),` `,r.message]})]}),(0,G.jsx)(`button`,{type:`submit`,className:`btn btn-primary submit-btn`,disabled:a,children:a?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Oe,{size:18,className:`animate-spin`}),` Sending...`]}):(0,G.jsxs)(G.Fragment,{children:[`Send Inquiry `,(0,G.jsx)(Fe,{size:16})]})})]})})]})]}),(0,G.jsx)(`style`,{children:`
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
        .contact-section {
          position: relative;
          background-color: #09090b !important;
          color: #f9fafb !important;
        }
        .contact-glow {
          left: -5%;
          bottom: 10%;
          opacity: 0.15;
        }
        .light-subtitle {
          color: #a1a1aa !important;
          max-width: 650px;
          margin: 0 auto 3.5rem auto;
        }
        .light-details, .light-form {
          background: rgba(255, 255, 255, 0.02) !important;
          border: 1px solid rgba(255, 255, 255, 0.05) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5) !important;
        }
        .contact-details {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .contact-info-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          color: #f9fafb !important;
        }
        .contact-info-desc {
          font-size: 1rem;
          color: #a1a1aa !important;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }
        .info-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .light-info-card {
          background: rgba(255, 255, 255, 0.01) !important;
          border: 1px solid rgba(255, 255, 255, 0.04) !important;
        }
        .info-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem;
          border-radius: var(--border-radius-sm);
        }
        .info-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: var(--border-radius-sm);
          background: rgba(249, 115, 22, 0.08);
          color: hsl(var(--primary));
        }
        .info-text-wrapper {
          display: flex;
          flex-direction: column;
        }
        .info-label {
          font-size: 0.8rem;
          color: #71717a !important;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        .info-val {
          font-size: 1rem;
          color: #f9fafb !important;
          font-weight: 600;
          transition: color var(--transition-fast);
        }
        a.info-val:hover {
          color: hsl(var(--primary));
        }
        .contact-form-container {
          padding: 2.5rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .form-group-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .input-with-icon {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 14px;
          color: #71717a;
          pointer-events: none;
          transition: color var(--transition-fast);
          z-index: 2;
        }
        .textarea-icon-wrapper {
          align-items: flex-start;
        }
        .textarea-icon {
          top: 14px;
        }
        .input-with-icon:focus-within .input-icon {
          color: hsl(var(--primary));
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 0.8rem 1rem 0.8rem 2.75rem !important;
          border-radius: var(--border-radius-sm);
          background: rgba(255, 255, 255, 0.02) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          color: #f9fafb !important;
          font-family: inherit;
          font-size: 0.95rem;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);
        }
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        .form-group input::placeholder, .form-group textarea::placeholder {
          color: #71717a !important;
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: hsl(var(--primary)) !important;
          background: rgba(255, 255, 255, 0.04) !important;
          box-shadow: 0 0 0 3px hsla(24, 95%, 53%, 0.15) !important;
          outline: none;
        }
        .form-group input.error-input, .form-group textarea.error-input {
          border-color: hsl(var(--error)) !important;
        }
        .error-msg {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: hsl(var(--error));
          font-weight: 500;
        }
        .error-banner {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: var(--border-radius-sm);
          color: #fca5a5;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        .submit-btn {
          align-self: flex-start;
          margin-top: 1rem;
        }
        
        /* Success Banner */
        .success-banner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem 0;
        }
        .success-icon {
          color: hsl(var(--success));
          margin-bottom: 1.5rem;
        }
        .success-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #f9fafb !important;
        }
        .success-desc {
          font-size: 0.95rem;
          color: #a1a1aa !important;
          max-width: 360px;
          margin-bottom: 2rem;
          line-height: 1.5;
        }
        
        /* Animate-spin */
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @media (max-width: 768px) {
          .form-group-row {
            grid-template-columns: 1fr;
          }
          .contact-details, .contact-form-container {
            padding: 1.75rem;
          }
          .submit-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `})]})};function wS(...e){return e.filter(Boolean).join(` `)}var TS=({text:e,duration:t,className:n})=>{let r=(0,b.useRef)(null),[i,a]=(0,b.useState)({x:0,y:0}),[o,s]=(0,b.useState)(!1),[c,l]=(0,b.useState)({cx:`50%`,cy:`50%`});return(0,b.useEffect)(()=>{if(r.current&&i.x!==null&&i.y!==null){let e=r.current.getBoundingClientRect(),t=(i.x-e.left)/e.width*100,n=(i.y-e.top)/e.height*100;l({cx:`${t}%`,cy:`${n}%`})}},[i]),(0,G.jsxs)(`svg`,{ref:r,width:`100%`,height:`100%`,viewBox:`0 0 300 100`,xmlns:`http://www.w3.org/2000/svg`,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onMouseMove:e=>a({x:e.clientX,y:e.clientY}),className:wS(`select-none uppercase cursor-pointer`,n),style:{display:`block`,width:`100%`,height:`auto`,userSelect:`none`},children:[(0,G.jsxs)(`defs`,{children:[(0,G.jsx)(`linearGradient`,{id:`textGradient`,gradientUnits:`userSpaceOnUse`,cx:`50%`,cy:`50%`,r:`25%`,children:o&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`stop`,{offset:`0%`,stopColor:`#fb923c`}),(0,G.jsx)(`stop`,{offset:`100%`,stopColor:`#ea580c`})]})}),(0,G.jsxs)(Pd.radialGradient,{id:`revealMask`,gradientUnits:`userSpaceOnUse`,r:`20%`,initial:{cx:`50%`,cy:`50%`},animate:c,transition:{duration:t??0,ease:`easeOut`},children:[(0,G.jsx)(`stop`,{offset:`0%`,stopColor:`white`}),(0,G.jsx)(`stop`,{offset:`100%`,stopColor:`black`})]}),(0,G.jsx)(`mask`,{id:`textMask`,children:(0,G.jsx)(`rect`,{x:`0`,y:`0`,width:`100%`,height:`100%`,fill:`url(#revealMask)`})})]}),(0,G.jsx)(`text`,{x:`50%`,y:`50%`,textAnchor:`middle`,dominantBaseline:`middle`,strokeWidth:`0.3`,stroke:`#262626`,fill:`transparent`,style:{opacity:o?.7:0,fontFamily:`'Outfit', -apple-system, sans-serif`,fontSize:`58px`,fontWeight:`800`,transition:`opacity 0.3s ease`},children:e}),(0,G.jsx)(Pd.text,{x:`50%`,y:`50%`,textAnchor:`middle`,dominantBaseline:`middle`,strokeWidth:`0.3`,stroke:`#ea580c`,fill:`transparent`,style:{fontFamily:`'Outfit', -apple-system, sans-serif`,fontSize:`58px`,fontWeight:`800`},initial:{strokeDashoffset:1e3,strokeDasharray:1e3},animate:{strokeDashoffset:0,strokeDasharray:1e3},transition:{duration:4,ease:`easeInOut`},children:e}),(0,G.jsx)(`text`,{x:`50%`,y:`50%`,textAnchor:`middle`,dominantBaseline:`middle`,stroke:`url(#textGradient)`,strokeWidth:`0.3`,mask:`url(#textMask)`,fill:`transparent`,style:{fontFamily:`'Outfit', -apple-system, sans-serif`,fontSize:`58px`,fontWeight:`800`},children:e})]})},ES=()=>{let{name:e,email:t,socialLinks:n}=Rf.personalInfo;return(0,G.jsxs)(`footer`,{className:`footer-panel`,children:[(0,G.jsxs)(`div`,{className:`container footer-container`,children:[(0,G.jsxs)(`p`,{className:`copyright-text`,children:[`© `,new Date().getFullYear(),` `,e,`. All rights reserved.`]}),(0,G.jsxs)(`div`,{className:`footer-socials`,children:[(0,G.jsx)(`a`,{href:n.github,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`GitHub`,children:(0,G.jsx)(Uf,{size:16})}),(0,G.jsx)(`a`,{href:n.linkedin,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`LinkedIn`,children:(0,G.jsx)(Wf,{size:16})}),n.twitter&&(0,G.jsx)(`a`,{href:n.twitter,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Twitter`,children:(0,G.jsx)(Gf,{size:16})}),(0,G.jsx)(`a`,{href:`mailto:${t}`,"aria-label":`Email`,children:(0,G.jsx)(ke,{size:16})})]})]}),(0,G.jsx)(`style`,{children:`
        .footer-panel {
          background: #09090b !important;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2rem 0;
          color: #a1a1aa !important;
        }
        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
        }
        .copyright-text {
          font-size: 0.85rem;
          color: #71717a !important;
        }
        .footer-socials {
          display: flex;
          gap: 1rem;
        }
        .footer-socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: var(--border-radius-sm);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: #71717a;
          transition: all var(--transition-fast);
        }
        .footer-socials a:hover {
          color: hsl(var(--primary));
          background: rgba(255, 255, 255, 0.05);
          border-color: hsl(var(--primary));
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column-reverse;
            text-align: center;
            gap: 1rem;
          }
        }
      `})]})},DS=({blog:e,onBack:t})=>{let[n,r]=(0,b.useState)(`react-mindset`),[i,a]=(0,b.useState)(!1),o=[{id:`react-mindset`,title:`1. The React Mindset`},{id:`component-architecture`,title:`2. Component Architecture`},{id:`managing-reactivity`,title:`3. Managing Reactivity`},{id:`conclusion`,title:`4. Conclusion`}];(0,b.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&r(e.target.id)})},{root:null,rootMargin:`-15% 0px -55% 0px`,threshold:.1});return o.forEach(t=>{let n=document.getElementById(t.id);n&&e.observe(n)}),()=>e.disconnect()},[]);let s=e=>{let t=document.getElementById(e);t&&window.scrollTo({top:t.offsetTop-100,behavior:`smooth`})};return(0,G.jsxs)(`div`,{className:`blog-detail-page`,children:[(0,G.jsx)(`div`,{className:`blog-spotlight top-left`}),(0,G.jsx)(`div`,{className:`blog-spotlight bottom-right`}),(0,G.jsxs)(`div`,{className:`container blog-container`,children:[(0,G.jsx)(`aside`,{className:`blog-sidebar`,children:(0,G.jsxs)(`div`,{className:`blog-sidebar-sticky`,children:[(0,G.jsxs)(`button`,{className:`back-home-btn`,onClick:t,children:[(0,G.jsx)(le,{className:`back-icon`,size:18}),(0,G.jsx)(`span`,{children:`Back to Home`})]}),(0,G.jsxs)(`div`,{className:`blog-author-card-new`,children:[(0,G.jsx)(`div`,{className:`author-image-wrap`,children:(0,G.jsx)(`img`,{src:ip,alt:`Abhishek Bhat`,className:`author-avatar`})}),(0,G.jsxs)(`div`,{className:`author-info`,children:[(0,G.jsx)(`span`,{className:`author-label`,children:`Written by`}),(0,G.jsx)(`h4`,{className:`author-name`,children:`Abhishek Bhat`}),(0,G.jsx)(`p`,{className:`author-role`,children:`Mobile & Web Developer`}),(0,G.jsx)(`p`,{className:`author-bio`,children:`Passionate about building fluid, interactive user experiences. Recently expanded from native mobile & desktop development into high-performance reactive web engineering.`})]})]}),(0,G.jsxs)(`div`,{className:`toc-wrapper`,children:[(0,G.jsxs)(`h5`,{className:`toc-title`,children:[(0,G.jsx)(R,{size:14,className:`toc-title-icon`}),`Table of Contents`]}),(0,G.jsx)(`ul`,{className:`toc-list`,children:o.map(e=>(0,G.jsx)(`li`,{children:(0,G.jsxs)(`button`,{onClick:()=>s(e.id),className:`toc-link ${n===e.id?`active`:``}`,children:[(0,G.jsx)(he,{size:12,className:`toc-chevron`}),(0,G.jsx)(`span`,{children:e.title})]})},e.id))})]}),(0,G.jsxs)(`button`,{className:`share-post-btn`,onClick:()=>{navigator.clipboard.writeText(window.location.href),a(!0),setTimeout(()=>a(!1),2e3)},children:[(0,G.jsx)(Le,{size:16}),(0,G.jsx)(`span`,{children:i?`Link Copied!`:`Share Article`})]})]})}),(0,G.jsxs)(`article`,{className:`blog-article-content`,children:[(0,G.jsxs)(`header`,{className:`article-header`,children:[(0,G.jsxs)(`div`,{className:`article-meta-tags`,children:[(0,G.jsx)(`span`,{className:`meta-category`,children:`LEARNING JOURNAL`}),(0,G.jsx)(`span`,{className:`meta-dot`,children:`•`}),(0,G.jsx)(`span`,{className:`meta-tag`,children:`REACT & WEB`})]}),(0,G.jsx)(`h1`,{className:`article-main-title`,children:`My Journey into React: From Imperative DOM to Component-Driven Engineering`}),(0,G.jsx)(`p`,{className:`article-subtitle`,children:`A software engineer's perspective on shifting from manual selectors and imperative updates to declarative component states, custom hooks, and rendering optimizations.`}),(0,G.jsxs)(`div`,{className:`article-author-meta-mobile`,children:[(0,G.jsx)(`img`,{src:ip,alt:`Abhishek Bhat`,className:`mobile-author-avatar`}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`p`,{className:`mobile-author-name`,children:`Abhishek Bhat`}),(0,G.jsx)(`p`,{className:`mobile-article-details`,children:`May 29, 2026 • 5 Min Read`})]})]}),(0,G.jsxs)(`div`,{className:`article-header-details`,children:[(0,G.jsxs)(`div`,{className:`detail-item`,children:[(0,G.jsx)(pe,{size:16}),(0,G.jsx)(`span`,{children:`May 29, 2026`})]}),(0,G.jsxs)(`div`,{className:`detail-item`,children:[(0,G.jsx)(ye,{size:16}),(0,G.jsx)(`span`,{children:`5 Min Read`})]})]})]}),(0,G.jsxs)(`div`,{className:`article-featured-image-wrap`,children:[(0,G.jsx)(`img`,{src:pS,alt:`React Learning Journey`,className:`article-featured-image`}),(0,G.jsx)(`div`,{className:`image-overlay-glow`})]}),(0,G.jsxs)(`div`,{className:`article-body`,children:[(0,G.jsxs)(`section`,{id:`react-mindset`,className:`article-section`,children:[(0,G.jsx)(`h2`,{className:`article-section-title`,children:`1. The React Mindset`}),(0,G.jsx)(`p`,{children:"Coming from a background of mobile development and native desktop applications, my initial attempts at writing web applications relied heavily on imperative paradigms. I was accustomed to querying the DOM directly, listening for events, and mutating elements manually (e.g., using `document.getElementById` to change values or toggle class strings)."}),(0,G.jsxs)(`p`,{children:[`The fundamental shift when learning React is moving from this `,(0,G.jsx)(`strong`,{children:`imperative`}),` flow to a `,(0,G.jsx)(`strong`,{children:`declarative`}),` model. In React, you do not directly manipulate the UI. Instead, you define the component's UI structure using JSX as a direct function of its state:`]}),(0,G.jsx)(`div`,{className:`formula-box`,children:(0,G.jsx)(`span`,{className:`formula-code`,children:`UI = f(State)`})}),(0,G.jsx)(`p`,{children:`When the state changes, React computes the diff between the Virtual DOM and the real DOM, and updates only the modified nodes. This abstraction frees you from writing coordinate-heavy boilerplate and allows you to focus on the business logic of your application.`}),(0,G.jsx)(`blockquote`,{className:`orange-blockquote`,children:`"The transition from imperative DOM selectors to declarative components feels like stepping from a dark room into daylight. You stop telling the browser *how* to build the UI, and start describing *what* the UI should look like for a given state."`})]}),(0,G.jsxs)(`section`,{id:`component-architecture`,className:`article-section`,children:[(0,G.jsx)(`h2`,{className:`article-section-title`,children:`2. Component Architecture`}),(0,G.jsx)(`p`,{children:`One of the most powerful features of React is its modular nature. Instead of having a single monolithic HTML file or a sprawling script sheet, you decompose the interface into small, self-contained, and reusable blocks called components.`}),(0,G.jsx)(`p`,{children:`During my projects, I realized the importance of maintaining clean, atomic components. A well-designed component should follow the single-responsibility principle: it should do one thing and do it exceptionally well.`}),(0,G.jsxs)(`div`,{className:`takeaway-card`,children:[(0,G.jsx)(`h4`,{className:`card-heading`,children:`Architectural Best Practices I've Learned:`}),(0,G.jsxs)(`ul`,{className:`takeaway-list`,children:[(0,G.jsxs)(`li`,{children:[(0,G.jsx)(xe,{size:14,className:`takeaway-bullet`}),(0,G.jsx)(`strong`,{children:`Props are Immutable:`}),` Never mutate the props passed down from parent components. Treat them as read-only configuration inputs.`]}),(0,G.jsxs)(`li`,{children:[(0,G.jsx)(xe,{size:14,className:`takeaway-bullet`}),(0,G.jsx)(`strong`,{children:`Unidirectional Data Flow:`}),` Data travels down the component tree from parent to child. If children need to modify parent state, pass down handler callbacks.`]}),(0,G.jsxs)(`li`,{children:[(0,G.jsx)(xe,{size:14,className:`takeaway-bullet`}),(0,G.jsx)(`strong`,{children:`Decouple Presentation and Logic:`}),` Separate pure UI styling components (like buttons or cards) from components that fetch data or manage complex states.`]})]})]})]}),(0,G.jsxs)(`section`,{id:`managing-reactivity`,className:`article-section`,children:[(0,G.jsx)(`h2`,{className:`article-section-title`,children:`3. Managing Reactivity`}),(0,G.jsx)(`p`,{children:"Reactivity in React is governed by Hooks. The first and most essential hooks I mastered were `useState` and `useEffect`."}),(0,G.jsx)(`p`,{children:"While `useState` allows you to declare reactive state values that trigger re-renders on update, `useEffect` allows you to sync your components with external systems and run side-effects. However, managing side-effects requires a solid understanding of the dependency array. Failing to configure it correctly can trigger infinite loops and freeze the browser."}),(0,G.jsx)(`p`,{className:`code-block-caption`,children:`Example: A safe reactivity implementation using hooks`}),(0,G.jsxs)(`div`,{className:`glassmorphic-code-card`,children:[(0,G.jsxs)(`div`,{className:`code-card-header`,children:[(0,G.jsxs)(`div`,{className:`window-dots`,children:[(0,G.jsx)(`span`,{className:`dot dot-red`}),(0,G.jsx)(`span`,{className:`dot dot-yellow`}),(0,G.jsx)(`span`,{className:`dot dot-green`})]}),(0,G.jsx)(`span`,{className:`code-language`,children:`React Component (JSX)`})]}),(0,G.jsx)(`pre`,{className:`code-block`,children:(0,G.jsx)(`code`,{children:`import React, { useState, useEffect } from 'react';

export function ReactTracker() {
  const [count, setCount] = useState(0);

  // Synchronizes window title with clicked count state
  useEffect(() => {
    document.title = \`Clicked \${count} times\`;
  }, [count]); // Triggered only when 'count' changes

  return (
    <div className="counter-panel">
      <p>Interaction count: {count}</p>
      <button 
        className="primary-btn"
        onClick={() => setCount(prev => prev + 1)}
      >
        Increment State
      </button>
    </div>
  );
}`})})]}),(0,G.jsx)(`p`,{children:"By passing `[count]` as the dependency array, we tell React to only execute the side-effect when `count` actually changes. If we passed an empty array `[]`, the effect would only run once on mount. If we omitted the array entirely, the effect would execute on every single render cycle, which is highly inefficient."})]}),(0,G.jsxs)(`section`,{id:`conclusion`,className:`article-section`,children:[(0,G.jsx)(`h2`,{className:`article-section-title`,children:`4. Conclusion`}),(0,G.jsx)(`p`,{children:`Learning React has completely redefined how I approach frontend development. The declarative mental model, modular component flow, and reactive state management enable developers to build robust, scalable applications with a smooth developer experience.`}),(0,G.jsx)(`p`,{children:`The synergy of Vite for instant compilation, React for component state rendering, and custom CSS for tailored micro-animations results in web designs that feel premium, fast, and extremely responsive. As I continue to build more complex applications, my next steps include deep-diving into state management libraries and server-side rendering architectures.`})]})]}),(0,G.jsx)(`footer`,{className:`article-footer-mobile`,children:(0,G.jsxs)(`div`,{className:`mobile-footer-card`,children:[(0,G.jsx)(`img`,{src:ip,alt:`Abhishek Bhat`,className:`mobile-footer-avatar`}),(0,G.jsxs)(`div`,{className:`mobile-footer-info`,children:[(0,G.jsx)(`h4`,{children:`Abhishek Bhat`}),(0,G.jsx)(`p`,{children:`Mobile & Web Developer`}),(0,G.jsxs)(`button`,{className:`back-bottom-btn`,onClick:t,children:[(0,G.jsx)(le,{size:14}),(0,G.jsx)(`span`,{children:`Back to Homepage`})]})]})]})})]})]}),(0,G.jsx)(`style`,{children:`
        .blog-detail-page {
          background-color: #09090b;
          color: #f9fafb;
          min-height: 100vh;
          padding: 8rem 0 6rem 0;
          position: relative;
          overflow: hidden;
        }

        /* Ambient background glow effects */
        .blog-spotlight {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(249, 115, 22, 0) 70%);
          pointer-events: none;
          z-index: 0;
        }
        .blog-spotlight.top-left {
          top: -100px;
          left: -100px;
        }
        .blog-spotlight.bottom-right {
          bottom: -100px;
          right: -100px;
        }

        .blog-container {
          max-width: 1100px;
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 4rem;
        }

        /* --- SIDEBAR STYLING --- */
        .blog-sidebar {
          position: relative;
        }
        .blog-sidebar-sticky {
          position: sticky;
          top: 110px;
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
        }

        .back-home-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #a1a1aa;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.65rem 1.2rem;
          border-radius: 30px;
          cursor: pointer;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          width: fit-content;
        }
        .back-home-btn:hover {
          color: #ffffff;
          border-color: #f97316;
          background: rgba(249, 115, 22, 0.05);
          box-shadow: 0 0 15px rgba(249, 115, 22, 0.15);
        }
        .back-icon {
          transition: transform 0.3s ease;
        }
        .back-home-btn:hover .back-icon {
          transform: translateX(-4px);
        }

        .blog-author-card-new {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          padding: 1.5rem;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .author-image-wrap {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #f97316;
          box-shadow: 0 0 15px rgba(249, 115, 22, 0.3);
          margin-bottom: 1rem;
        }
        .author-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .author-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #f97316;
          display: block;
          margin-bottom: 0.25rem;
        }
        .author-name {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.15rem 0;
        }
        .author-role {
          font-family: var(--font-accent);
          font-style: italic;
          font-size: 0.8rem;
          color: #a1a1aa;
          margin: 0 0 0.75rem 0;
        }
        .author-bio {
          font-size: 0.75rem;
          line-height: 1.5;
          color: #71717a;
          margin: 0;
        }

        /* Table of Contents */
        .toc-wrapper {
          border-left: 1px solid rgba(255, 255, 255, 0.05);
          padding-left: 1rem;
        }
        .toc-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #a1a1aa;
          margin: 0 0 1rem 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .toc-title-icon {
          color: #f97316;
        }
        .toc-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .toc-link {
          background: transparent;
          border: none;
          color: #71717a;
          font-family: var(--font-body);
          font-size: 0.8rem;
          text-align: left;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          transition: all 0.25s ease;
          width: 100%;
        }
        .toc-link:hover {
          color: #ffffff;
          transform: translateX(4px);
        }
        .toc-link.active {
          color: #f97316;
          font-weight: 600;
        }
        .toc-chevron {
          opacity: 0;
          color: #f97316;
          transition: all 0.25s ease;
        }
        .toc-link.active .toc-chevron {
          opacity: 1;
          transform: translateX(2px);
        }

        .share-post-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: #ffffff;
          background: transparent;
          border: 1px dashed rgba(249, 115, 22, 0.3);
          padding: 0.75rem;
          border-radius: 12px;
          cursor: pointer;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }
        .share-post-btn:hover {
          background: rgba(249, 115, 22, 0.04);
          border-color: #f97316;
        }

        /* --- ARTICLE COLUMN STYLING --- */
        .blog-article-content {
          min-width: 0; /* Prevents flex/grid clipping items */
        }
        .article-header {
          margin-bottom: 2rem;
        }
        .article-meta-tags {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .meta-category {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: #f97316;
        }
        .meta-dot {
          color: #27272a;
          font-size: 0.75rem;
        }
        .meta-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 1px;
          color: #71717a;
        }
        .article-main-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -1px;
          margin: 0 0 1.25rem 0;
          color: #ffffff;
        }
        .article-subtitle {
          font-size: clamp(1rem, 2vw, 1.15rem);
          line-height: 1.6;
          color: #a1a1aa;
          margin: 0 0 1.75rem 0;
          font-weight: 400;
        }
        
        .article-author-meta-mobile {
          display: none;
        }

        .article-header-details {
          display: flex;
          gap: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.85rem 0;
        }
        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #71717a;
          font-family: var(--font-mono);
          font-size: 0.75rem;
        }

        /* Widescreen image wrapper */
        .article-featured-image-wrap {
          position: relative;
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 3.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          aspect-ratio: 16 / 9;
        }
        .article-featured-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .article-featured-image-wrap:hover .article-featured-image {
          transform: scale(1.03);
        }
        .image-overlay-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(9, 9, 11, 0.6) 100%);
          pointer-events: none;
        }

        /* Article Body styling */
        .article-body {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }
        .article-section {
          scroll-margin-top: 110px;
        }
        .article-section-title {
          font-family: var(--font-heading);
          font-size: 1.65rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 1.25rem 0;
          letter-spacing: -0.5px;
        }
        .article-body p {
          font-size: 1rem;
          line-height: 1.75;
          color: #d4d4d8;
          margin: 0 0 1.5rem 0;
        }
        .article-body p:last-child {
          margin-bottom: 0;
        }

        /* Callouts / Formula / Blockquotes */
        .formula-box {
          background: rgba(249, 115, 22, 0.02);
          border: 1px solid rgba(249, 115, 22, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 1.5rem 0 2rem 0;
          box-shadow: inset 0 0 20px rgba(249, 115, 22, 0.02);
        }
        .formula-code {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #f97316;
          text-shadow: 0 0 10px rgba(249, 115, 22, 0.4);
        }

        .orange-blockquote {
          border-left: 4px solid #f97316;
          background: rgba(255, 255, 255, 0.01);
          margin: 2.25rem 0;
          padding: 1.5rem 2rem;
          border-radius: 0 12px 12px 0;
          font-family: var(--font-accent);
          font-style: italic;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #f9fafb;
        }

        .takeaway-card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          padding: 1.75rem;
          margin: 2rem 0;
        }
        .card-heading {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 1.25rem 0;
        }
        .takeaway-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .takeaway-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #a1a1aa;
        }
        .takeaway-bullet {
          color: #f97316;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        /* Code Block Component Card */
        .code-block-caption {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #71717a;
          margin-bottom: 0.5rem;
          display: block;
        }
        .glassmorphic-code-card {
          background: #0d0d10;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 2rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        .code-card-header {
          background: #09090b;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.75rem 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .window-dots {
          display: flex;
          gap: 0.4rem;
        }
        .window-dots .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
        }
        .dot-red { background-color: #ef4444; }
        .dot-yellow { background-color: #f59e0b; }
        .dot-green { background-color: #10b981; }
        .code-language {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .code-block {
          margin: 0;
          padding: 1.5rem;
          overflow-x: auto;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          line-height: 1.5;
          color: #a78bfa; /* Soft lilac highlight for tags */
          background-color: #0c0c0e;
        }
        .code-block code {
          font-family: inherit;
        }

        /* Mobile footer */
        .article-footer-mobile {
          display: none;
        }

        /* --- RESPONSIVENESS MEDIA QUERIES --- */
        @media (max-width: 968px) {
          .blog-container {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 0 1.25rem;
          }
          .blog-sidebar {
            display: none; /* Hide desktop sidebar */
          }
          .article-author-meta-mobile {
            display: flex;
            align-items: center;
            gap: 0.85rem;
            margin: 1.5rem 0 1rem 0;
            padding-bottom: 1.25rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          .mobile-author-avatar {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            object-fit: cover;
            border: 1px solid #f97316;
          }
          .mobile-author-name {
            font-family: var(--font-heading);
            font-size: 0.95rem;
            font-weight: 700;
            color: #ffffff;
            margin: 0;
          }
          .mobile-article-details {
            font-family: var(--font-mono);
            font-size: 0.75rem;
            color: #71717a;
            margin: 0.15rem 0 0 0;
          }
          .article-header-details {
            display: none; /* Mobile displays detail in author block */
          }
          .article-featured-image-wrap {
            margin-bottom: 2.25rem;
          }
          .article-body {
            gap: 2.5rem;
          }
          .article-section-title {
            font-size: 1.4rem;
          }
          
          /* Show Mobile Footer Back Link */
          .article-footer-mobile {
            display: block;
            margin-top: 4rem;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            padding-top: 2rem;
          }
          .mobile-footer-card {
            background: rgba(255, 255, 255, 0.01);
            border: 1px solid rgba(255, 255, 255, 0.04);
            border-radius: 12px;
            padding: 1.5rem;
            display: flex;
            align-items: center;
            gap: 1.25rem;
          }
          .mobile-footer-avatar {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            object-fit: cover;
            border: 1.5px solid #f97316;
          }
          .mobile-footer-info {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
          }
          .mobile-footer-info h4 {
            margin: 0;
            font-family: var(--font-heading);
            font-size: 1rem;
            color: #ffffff;
          }
          .mobile-footer-info p {
            margin: 0 0 0.5rem 0;
            font-family: var(--font-accent);
            font-style: italic;
            font-size: 0.75rem;
            color: #a1a1aa;
          }
          .back-bottom-btn {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            color: #ffffff;
            background: #f97316;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-family: var(--font-mono);
            font-size: 0.75rem;
            cursor: pointer;
            width: fit-content;
            transition: background var(--transition-fast);
          }
          .back-bottom-btn:hover {
            background: #ea580c;
          }
        }
      `})]})};mv.registerPlugin($);function OS(){let[e,t]=(0,b.useState)(null);(0,b.useEffect)(()=>{window.scrollTo(0,0)},[e]);let[n,r]=(0,b.useState)(()=>localStorage.getItem(`theme`)===`light`?`light`:`dark`);return(0,b.useEffect)(()=>{let e=new P({duration:1.2,easing:e=>Math.min(1,1.001-2**(-10*e)),smoothWheel:!0,wheelMultiplier:1});e.on(`scroll`,$.update);let t=t=>{e.raf(t*1e3)};return mv.ticker.add(t),mv.ticker.lagSmoothing(0),()=>{e.destroy(),mv.ticker.remove(t)}},[]),(0,b.useEffect)(()=>{let e=e=>{e.preventDefault()};return document.addEventListener(`contextmenu`,e),()=>{document.removeEventListener(`contextmenu`,e)}},[]),(0,b.useEffect)(()=>{document.documentElement.setAttribute(`data-theme`,n),localStorage.setItem(`theme`,n)},[n]),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Hf,{theme:n,toggleTheme:()=>{r(e=>e===`dark`?`light`:`dark`)},onNavigateHome:()=>t(null)}),(0,G.jsx)(`main`,{style:{position:`relative`,zIndex:1},children:e?(0,G.jsx)(DS,{blog:e,onBack:()=>t(null)}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(op,{theme:n}),(0,G.jsx)(Jx,{}),(0,G.jsx)($x,{}),(0,G.jsx)(oS,{}),(0,G.jsx)(cS,{}),(0,G.jsx)(fS,{}),(0,G.jsx)(gS,{onSelectBlog:t}),(0,G.jsx)(vS,{}),(0,G.jsx)(CS,{}),(0,G.jsxs)(`div`,{className:`footer-name-section`,children:[(0,G.jsxs)(`span`,{className:`name-label`,children:[`My`,(0,G.jsx)(`br`,{}),`Name`]}),(0,G.jsx)(`div`,{className:`container name-hover-wrap`,children:(0,G.jsx)(TS,{text:`ABHISHEK`})})]})]})}),(0,G.jsx)(ES,{})]})}(0,x.createRoot)(document.getElementById(`root`)).render((0,G.jsx)(b.StrictMode,{children:(0,G.jsx)(OS,{})}));