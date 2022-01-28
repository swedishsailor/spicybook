(self.webpackChunkwebpack_boilerplate=self.webpackChunkwebpack_boilerplate||[]).push([[179],{559:(e,t,n)=>{e.exports=n(335)},786:(e,t,n)=>{"use strict";var r=n(266),o=n(608),i=n(159),a=n(568),s=n(943),c=n(201),u=n(745),l=n(979),f=n(46),p=n(760);e.exports=function(e){return new Promise((function(t,n){var d,h=e.data,m=e.headers,g=e.responseType;function v(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}r.isFormData(h)&&delete m["Content-Type"];var y=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(b+":"+w)}var x=s(e.baseURL,e.url);function E(){if(y){var r="getAllResponseHeaders"in y?c(y.getAllResponseHeaders()):null,i={data:g&&"text"!==g&&"json"!==g?y.response:y.responseText,status:y.status,statusText:y.statusText,headers:r,config:e,request:y};o((function(e){t(e),v()}),(function(e){n(e),v()}),i),y=null}}if(y.open(e.method.toUpperCase(),a(x,e.params,e.paramsSerializer),!0),y.timeout=e.timeout,"onloadend"in y?y.onloadend=E:y.onreadystatechange=function(){y&&4===y.readyState&&(0!==y.status||y.responseURL&&0===y.responseURL.indexOf("file:"))&&setTimeout(E)},y.onabort=function(){y&&(n(l("Request aborted",e,"ECONNABORTED",y)),y=null)},y.onerror=function(){n(l("Network Error",e,null,y)),y=null},y.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||f.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",y)),y=null},r.isStandardBrowserEnv()){var S=(e.withCredentials||u(x))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;S&&(m[e.xsrfHeaderName]=S)}"setRequestHeader"in y&&r.forEach(m,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete m[t]:y.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(y.withCredentials=!!e.withCredentials),g&&"json"!==g&&(y.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&y.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&y.upload&&y.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(d=function(e){y&&(n(!e||e&&e.type?new p("canceled"):e),y.abort(),y=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d))),h||(h=null),y.send(h)}))}},335:(e,t,n)=>{"use strict";var r=n(266),o=n(345),i=n(929),a=n(650),s=function e(t){var n=new i(t),s=o(i.prototype.request,n);return r.extend(s,i.prototype,n),r.extend(s,n),s.create=function(n){return e(a(t,n))},s}(n(46));s.Axios=i,s.Cancel=n(760),s.CancelToken=n(510),s.isCancel=n(825),s.VERSION=n(992).version,s.all=function(e){return Promise.all(e)},s.spread=n(346),s.isAxiosError=n(276),e.exports=s,e.exports.default=s},760:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},510:(e,t,n)=>{"use strict";var r=n(760);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},825:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},929:(e,t,n)=>{"use strict";var r=n(266),o=n(568),i=n(252),a=n(29),s=n(650),c=n(123),u=c.validators;function l(e){this.defaults=e,this.interceptors={request:new i,response:new i}}l.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&c.assertOptions(t,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var n=[],r=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var o,i=[];if(this.interceptors.response.forEach((function(e){i.push(e.fulfilled,e.rejected)})),!r){var l=[a,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(i),o=Promise.resolve(e);l.length;)o=o.then(l.shift(),l.shift());return o}for(var f=e;n.length;){var p=n.shift(),d=n.shift();try{f=p(f)}catch(e){d(e);break}}try{o=a(f)}catch(e){return Promise.reject(e)}for(;i.length;)o=o.then(i.shift(),i.shift());return o},l.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){l.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=l},252:(e,t,n)=>{"use strict";var r=n(266);function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},943:(e,t,n)=>{"use strict";var r=n(406),o=n(27);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},979:(e,t,n)=>{"use strict";var r=n(50);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},29:(e,t,n)=>{"use strict";var r=n(266),o=n(661),i=n(825),a=n(46),s=n(760);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s("canceled")}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return c(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},50:e=>{"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},650:(e,t,n)=>{"use strict";var r=n(266);e.exports=function(e,t){t=t||{};var n={};function o(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function i(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(e[n],t[n])}function a(e){if(!r.isUndefined(t[e]))return o(void 0,t[e])}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(void 0,t[n])}function c(n){return n in t?o(e[n],t[n]):n in e?o(void 0,e[n]):void 0}var u={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||i,o=t(e);r.isUndefined(o)&&t!==c||(n[e]=o)})),n}},608:(e,t,n)=>{"use strict";var r=n(979);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},661:(e,t,n)=>{"use strict";var r=n(266),o=n(46);e.exports=function(e,t,n){var i=this||o;return r.forEach(n,(function(n){e=n.call(i,e,t)})),e}},46:(e,t,n)=>{"use strict";var r=n(266),o=n(490),i=n(50),a={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,u={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(c=n(786)),c),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(s(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(0,JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||u.transitional,n=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,a=!n&&"json"===this.responseType;if(a||o&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(a){if("SyntaxError"===e.name)throw i(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){u.headers[e]=r.merge(a)})),e.exports=u},992:e=>{e.exports={version:"0.24.0"}},345:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},568:(e,t,n)=>{"use strict";var r=n(266);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},27:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},159:(e,t,n)=>{"use strict";var r=n(266);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},406:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},276:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},745:(e,t,n)=>{"use strict";var r=n(266);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},490:(e,t,n)=>{"use strict";var r=n(266);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},201:(e,t,n)=>{"use strict";var r=n(266),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},346:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},123:(e,t,n)=>{"use strict";var r=n(992).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var i={};o.transitional=function(e,t,n){function o(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,a){if(!1===e)throw new Error(o(r," has been removed"+(t?" in "+t:"")));return t&&!i[r]&&(i[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,a)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var i=r[o],a=t[i];if(a){var s=e[i],c=void 0===s||a(s,i,e);if(!0!==c)throw new TypeError("option "+i+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+i)}},validators:o}},266:(e,t,n)=>{"use strict";var r=n(345),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:c,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):i(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},588:e=>{var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=function(e,t,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return N()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=T(a,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",m={};function g(){}function v(){}function y(){}var b={};c(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(q([])));x&&x!==n&&r.call(x,i)&&(b=x);var E=y.prototype=g.prototype=Object.create(b);function S(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(o,i,a,s){var c=l(e[o],e,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(f).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function T(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function q(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:N}}function N(){return{value:t,done:!0}}return v.prototype=y,c(E,"constructor",y),c(y,"constructor",v),v.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},S(L.prototype),c(L.prototype,a,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new L(u(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(E),c(E,s,"Generator"),c(E,i,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=q,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:q(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},118:(e,t,n)=>{"use strict";var r,o,i,a=n(559),s=n.n(a),c="https://spicybook-server.herokuapp.com",u=function(){var e,t,n;return s().get(c+"/data").then((function(e){return r=e.data})).then(l()).then(f()).then((null!=r&&r.forEach((function(e){t=o.filter((function(t){return t.id==e.id})),e.steps=t,n=i.filter((function(t){return t.id==e.id})),e.ingredients=n})),e=r)).catch((function(e){return console.log(e)})),e},l=function(){s().get(c+"/steps").then((function(e){return o=e.data})).catch((function(e){return console.log(e)}))},f=function(){s().get(c+"/ingredients").then((function(e){return i=e.data})).catch((function(e){return console.log(e)}))};u();var p=function(e,t,n){return'<div class="recipeDiv" id="'.concat(e,'"><img class="recipeImg" src="').concat(t,'"><p class="recipeTitle">').concat(n,"</p></div>")},d=function(e,t){if(!e||!e.tagName)return"";var n,r,o=document.createElement("div");return o.appendChild(e.cloneNode(!1)),n=o.innerHTML,t&&(r=n.indexOf(">")+1,n=n.substring(0,r)+e.innerHTML+n.substring(r)),o=null,n};function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n(588);var m=function(){function e(t,n,r,o,i,a,s,c){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var u=this;u.id=t,u.name=n,u.img=r,u.href=o,u.text=i,u.bigImg=a,u.ingredients=s,u.steps=c}var t,n;return t=e,(n=[{key:"render",value:function(){return y.innerHTML+=p(this.id,this.img,this.name)}}])&&h(t.prototype,n),e}(),g=[],v=(d(document.getElementById("container"),!0),document.getElementById("container")),y=(document.querySelectorAll(".recipeDiv"),document.querySelectorAll(".recipeImg"),document.querySelector(".main")),b=document.querySelector(".searchInput"),w=document.querySelector(".fa-search"),x=(document.querySelector(".back"),document.querySelector(".homeIcon")),E=function(){window.location.reload()};w.addEventListener("click",(function(){var e=[];0==(e=g.filter((function(e){return e.name.includes(b.value)}))).length?document.querySelector(".main").innerHTML='<p class="notFound">No recipes found at name "'.concat(b.value,'"</p>'):document.querySelector(".main").innerHTML="",e.forEach((function(e){document.querySelector(".main").innerHTML+=p(e.id,e.img,e.name)})),S()})),setTimeout((function(){u().forEach((function(e){var t=new m(e.id,e.name,e.img,e.href,e.text,e.bigImg,e.ingredients,e.steps);g.push(t),t.render()}))}),210),x.addEventListener("click",(function(){E()})),document.addEventListener("click",(function(e){e.target.classList.contains("back")&&E()}));var S=function(){setTimeout((function(){document.querySelectorAll(".recipeDiv").forEach((function(e){e.addEventListener("click",(function(){var t,n,r,o,i,a=g[e.id-1];v.innerHTML="",v.innerHTML+=(t=a.name,n=a.text,r=a.steps,o=a.bigImg,i=a.ingredients,'<i class="far fa-arrow-alt-circle-left back"></i><div class="recipeDetails"><div class="leftPanel"><div class="details"><h2 class="recipeName">'+t+'</h2><p class="text">'+n+'</p><img class="textDecoration" src="https://i.postimg.cc/mgXxXCCY/squirrels.png" alt="Decoration"/><ul class="stepsList">'+r.map((function(e){return'<li class="steps"><span>Krok '.concat(r.indexOf(e)+1,"</span> : ").concat(e.name,"</li>")})).join("")+'</ul></div></div><div class="rightPanel"><img class="img" src="'+o+'"><div class="ingredients"><ul class="list"><p class="listName">Ingredients</p>'+i.map((function(e){return'<li class="listItem">'.concat(e.name,"</li>")})).join("")+"</ul></div></div></div>")}))}))}),220)};S(),document.querySelector(".loginButton");var L=document.getElementById("loginTemplate").content;document.querySelector(".loginButton").addEventListener("click",(function(){var e=L.cloneNode(!0);v.innerHTML="",v.appendChild(e)}));var T,k=document.querySelector(".createRecipeButton"),O=document.getElementById("createRecipeTemplate").content;k.addEventListener("click",(function(){var e=O.cloneNode(!0);v.innerHTML="",v.appendChild(e)})),document.querySelector(".selectSteps"),v.addEventListener("change",(function(e){e.target.classList.contains("selectSteps")&&(console.log(e.target.value),function(e){var t=document.querySelector(".stepDiv");t.innerHTML="";for(var n=0;n<parseInt(e);n++)t.innerHTML+='<div class="row"><label class="steps">Step '.concat(n+1,'<input class="stepsText"/></label></div>')}(e.target.value))}));var j=function(){s().get(c+"/data").then((function(e){return T=e.data})).catch((function(e){return console.log(e)}))};v.addEventListener("click",(function(e,t,n,r,o,i,a){if(e.target.classList.contains("createRecipeButton")){j(),console.log(T),t=v.querySelector(".nameInput").value,n=v.querySelector(".descriptionInput").value,r=v.querySelector(".ingredientsInput").value.split(","),o=[],v.querySelectorAll(".stepsText").forEach((function(e){""!==e.value&&o.push(e.value)})),i=v.querySelector(".smallImageInput").value,a=v.querySelector(".bigImageInput").value,console.log("name: "+t,"\ndescription: "+n,"\ningredients :"+r,"\nsteps :"+o,"\nsmallImage: "+i,"\nbigImage :"+a);var u={};u.id=void 0!==T?T.length+1:1,u.name=t,u.text=n,u.img=i,u.bigImg=a,function(e){s().post(c+"/datapost",{payload:e}).catch((function(e){return console.log(e)}))}(u);var l={};r.forEach((function(e){l.id=u.id,l.name=e,l.recipeId=u.id,function(e){s().post(c+"/ingredientspost",{payload:e}).catch((function(e){return console.log(e)}))}(l)}));var f={};o.forEach((function(e){f.id=u.id,f.name=e,f.stepsId=u.id,console.log(f),function(e){s().post(c+"/stepspost",{payload:e}).catch((function(e){return console.log(e)}))}(f)}))}})),j();var q=d(document.body,!0),N=new CustomEvent("mobile",{detail:{width:window.innerWidth}});document.dispatchEvent(N);var C=function(e){e.addEventListener("click",(function(e){switch(document.body,e.target.id){case"home":console.log("xd"),console.log(q),window.location.reload();break;case"login":console.log("xd"),document.querySelector(".container").innerHTML="",document.querySelector(".container").innerHTML+='<div class="loginContainer"><i class="far fa-arrow-alt-circle-left back"></i><h2 class="loginTitle">Log in</h2><label>Account e-mail:</label><input class="loginInput" type="email" placeholder="Your e-mail"></input><label>Account password:</label><input class="loginInput" type="password" placeholder="Your password"></input><button type="submit" class="submitButton">Submit</button><p> or </p><a href="#" class="registerLink"> Register an account</a></div>';break;case"register":case"sponsors":case"recipes":console.log("xd")}}))};document.querySelector(".bars")&&document.querySelector(".bars").addEventListener("click",(function(){document.body.innerHTML='<div class="container"><div class="mobileMenu"></div></div>',document.querySelector(".mobileMenu").innerHTML+="<h1><span>S</span><span>p</span><span>i</span><span>c</span><span>y</span> <span>B</span><span>o</span><span>o</span><span>k</h1>",document.querySelector(".mobileMenu").innerHTML+="<p>by SwedishSailor</p>",document.querySelector(".mobileMenu").innerHTML+='<h2 class="mobileMenuLink" id="home">Home</h2>',document.querySelector(".mobileMenu").innerHTML+='<h2 class="mobileMenuLink loginButton" id="login">Log in</h2>',document.querySelector(".mobileMenu").innerHTML+='<h2 class="mobileMenuLink" id="register">Register</h2>',document.querySelector(".mobileMenu").innerHTML+='<h2 class="mobileMenuLink" id="sponsors">Sponsors</h2>',document.querySelector(".mobileMenu").innerHTML+='<h2 class="mobileMenuLink" id="recipes">Recipes</h2>',document.querySelectorAll(".mobileMenuLink").forEach(C)}))}},e=>{e(e.s=118)}]);