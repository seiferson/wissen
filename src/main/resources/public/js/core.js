!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";e.exports=n(1)},function(e,t,n){"use strict";
/** @license React v16.8.3
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,m=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,a,i,u){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,a,i,u],l=0;(e=Error(t.replace(/%s/g,(function(){return c[l++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function E(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||g}function O(){}function S(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||g}E.prototype.isReactComponent={},E.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=E.prototype;var _=S.prototype=new O;_.constructor=S,r(_,E.prototype),_.isPureReactComponent=!0;var j={current:null},k={current:null},P=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r=void 0,o={},i=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)P.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:a,type:e,key:i,ref:u,props:o,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var $=/\/+/g,T=[];function R(e,t,n,r){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function U(e,t,n){return null==e?0:function e(t,n,r,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case i:c=!0}}if(c)return r(o,t,""===n?"."+A(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=n+A(u=t[l],l);c+=e(u,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(u=t.next()).done;)c+=e(u=u.value,s=n+A(u,l++),r,o);else"object"===u&&v("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return c}(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,n,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+n)),r.push(e))}function F(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace($,"$&/")+"/"),U(e,D,t=R(t,a,r,o)),I(t)}function L(){var e=j.current;return null===e&&v("307"),e}var q={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return F(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;U(e,M,t=R(null,null,t,n)),I(t)},count:function(e){return U(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){return x(e)||v("143"),e}},createRef:function(){return{current:null}},Component:E,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:m,render:e}},lazy:function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return L().useCallback(e,t)},useContext:function(e,t){return L().useContext(e,t)},useEffect:function(e,t){return L().useEffect(e,t)},useImperativeHandle:function(e,t,n){return L().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return L().useLayoutEffect(e,t)},useMemo:function(e,t){return L().useMemo(e,t)},useReducer:function(e,t,n){return L().useReducer(e,t,n)},useRef:function(e){return L().useRef(e)},useState:function(e){return L().useState(e)},Fragment:u,StrictMode:c,Suspense:y,createElement:N,cloneElement:function(e,t,n){null==e&&v("267",e);var o=void 0,i=r({},e.props),u=e.key,c=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,l=k.current),void 0!==t.key&&(u=""+t.key);var s=void 0;for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)P.call(t,o)&&!C.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==s?s[o]:t[o])}if(1===(o=arguments.length-2))i.children=n;else if(1<o){s=Array(o);for(var f=0;f<o;f++)s[f]=arguments[f+2];i.children=s}return{$$typeof:a,type:e.type,key:u,ref:c,props:i,_owner:l}},createFactory:function(e){var t=N.bind(null,e);return t.type=e,t},isValidElement:x,version:"16.8.3",unstable_ConcurrentMode:p,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:j,ReactCurrentOwner:k,assign:r}},V={default:q},W=V&&q||V;e.exports=W.default||W},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,c=i(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))o.call(n,s)&&(c[s]=n[s]);if(r){u=r(n);for(var f=0;f<u.length;f++)a.call(n,u[f])&&(c[u[f]]=n[u[f]])}}return c}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,c(t).call(this,e))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",{className:"ui top attached menu"},o.a.createElement("div",{className:"ui item"},o.a.createElement("a",{href:"/"},o.a.createElement("h3",{className:"ui header"},"Wissen"))),o.a.createElement("div",{className:"ui right item",onClick:this.props.action},o.a.createElement("img",{className:"ui bordered avatar image",src:"https://avatars.dicebear.com/v2/bottts/".concat(this.props.avatar,".svg")}),o.a.createElement("span",null,this.props.user)))}}])&&i(n.prototype,r),a&&i(n,a),t}(r.Component);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,y(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",{className:"ui icon ".concat(this.props.type," message")},o.a.createElement("i",{className:"".concat(this.props.icon," icon")}),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"header"},this.props.header),this.props.children))}}])&&p(n.prototype,r),a&&p(n,a),t}(r.Component);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,w(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){$("#".concat(this.props.id)).modal({allowMultiple:!1})}},{key:"render",value:function(){var e;return null!=this.props.title&&(e=o.a.createElement("div",{className:"header"},this.props.title)),o.a.createElement("div",{className:"ui ".concat(this.props.mtype," modal"),id:this.props.id},e,o.a.createElement("div",{className:"".concat(this.props.ctype," content")},this.props.children))}}])&&v(n.prototype,r),a&&v(n,a),t}(r.Component);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=j(t).call(this,e))||"object"!==S(o)&&"function"!=typeof o?k(r):o).state={user:"",lr:"sd"},n.handleUserInput=n.handleUserInput.bind(k(n)),n.handleSubmit=n.handleSubmit.bind(k(n)),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,e),n=t,(r=[{key:"handleUserInput",value:function(e){var t=e.target.name,n=e.target.value;this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),login(this.state.user,this.state.passwd,this.props.callback)}},{key:"componentDidMount",value:function(){$("#authform").form({fields:{user:{identifier:"user",rules:[{type:"empty",prompt:"Username cannot be empty"}]},loginerror:{identifier:"loginerror",rules:[{type:"empty",prompt:"User/Password do not match"}]}}})}},{key:"render",value:function(){var e=this;return o.a.createElement(O,{title:"Authentication stage",id:"authmodal"},o.a.createElement(d,{type:"",icon:"id badge",header:"Hi! Stranger",message:"Welcome to wissen, please provide your credentials."}),o.a.createElement("form",{className:"ui form",onSubmit:this.handleSubmit,id:"authform"},o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"user"},"Username"),o.a.createElement("input",{type:"text",value:this.state.user,onChange:function(t){return e.handleUserInput(t)},name:"user"})),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"passwd"},"Password"),o.a.createElement("input",{type:"password",value:this.state.password,onChange:function(t){return e.handleUserInput(t)},name:"passwd"})),o.a.createElement("div",{class:"field"},o.a.createElement("input",{type:"text",name:"loginerror",style:{display:"none"}})),o.a.createElement("div",{className:"ui error message",id:"authdisplayerrors"}),o.a.createElement("div",{className:"ui two buttons"},o.a.createElement("button",{className:"ui button",type:"submit"},"Login"),o.a.createElement("div",{className:"or"}),o.a.createElement("button",{className:"ui button",type:"button",onClick:function(){$("#regmodal").modal("show")}},"Register"))))}}])&&_(n.prototype,r),a&&_(n,a),t}(r.Component);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.Component;function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var L=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=M(t).call(this,e))||"object"!==U(o)&&"function"!=typeof o?D(r):o).state={user:"",email:"",avatar:md5(Math.random().toString()),passwd:"",cnfpasswd:""},n.handleUserInput=n.handleUserInput.bind(D(n)),n.handleSubmit=n.handleSubmit.bind(D(n)),n.handleSwitchAvatarImage=n.handleSwitchAvatarImage.bind(D(n)),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,e),n=t,(r=[{key:"handleSwitchAvatarImage",value:function(){this.setState({avatar:md5(Math.random().toString())})}},{key:"handleUserInput",value:function(e){var t=e.target.name,n=e.target.value;this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.action(this.state.user,this.state.passwd,this.state.email,this.state.avatar)}},{key:"render",value:function(){var e=this;return o.a.createElement(O,{title:"Register an account",id:"regmodal"},o.a.createElement("div",{className:"ui stackable grid"},o.a.createElement("div",{className:"four wide column"},o.a.createElement("img",{className:"ui bordered image",src:"https://avatars.dicebear.com/v2/bottts/".concat(this.state.avatar,".svg")}),o.a.createElement("br",null),o.a.createElement("button",{className:"fluid ui icon basic button",type:"button",onClick:this.handleSwitchAvatarImage},o.a.createElement("i",{class:"redo alternate icon"})," Switch avatar image")),o.a.createElement("div",{className:"twelve wide column"},o.a.createElement("form",{className:"ui form",onSubmit:this.handleSubmit},o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"user"},"Username"),o.a.createElement("input",{type:"text",value:this.state.user,onChange:function(t){return e.handleUserInput(t)},name:"user"})),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{type:"email",value:this.state.email,onChange:function(t){return e.handleUserInput(t)},name:"email"})),o.a.createElement("div",{className:"two fields"},o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"passwd"},"Password"),o.a.createElement("input",{type:"password",value:this.state.password,onChange:function(t){return e.handleUserInput(t)},name:"passwd"})),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"cnfpasswd"},"Confirm password"),o.a.createElement("input",{type:"password",value:this.state.cnfpasswd,onChange:function(t){return e.handleUserInput(t)},name:"cnfpasswd"}))),o.a.createElement("button",{className:"ui fluid button",type:"submit"},"Register")))))}}])&&A(n.prototype,r),a&&A(n,a),t}(r.Component);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var z=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),W(this,B(t).call(this,e))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props.task,t=getTaskIconClass(e.completed,e.expired,e.dueDate,e.expirationDate),n=this;return o.a.createElement("div",{class:"item",onClick:function(){n.props.task.viewAction(),$("#taskmodal").modal("show")}},o.a.createElement("i",{class:"large ".concat(t," middle aligned icon"),onClick:this.props.callback}),o.a.createElement("div",{class:"content",onClick:this.props.action},o.a.createElement("div",{class:"header"},e.title),o.a.createElement("div",{class:"description"},e.description)))}}])&&V(n.prototype,r),a&&V(n,a),t}(r.Component);function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t){return!t||"object"!==Y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var X=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),G(this,K(t).call(this,e))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){return"anonymous"===this.props.user?o.a.createElement(r.Fragment,null):o.a.createElement("div",{className:"ui segment"},o.a.createElement("h3",{className:"ui dividing header"},o.a.createElement("i",{class:"fitted clipboard list icon"})," Tasks"),o.a.createElement("div",{className:"ui relaxed divided list"},this.props.tasks.map((function(e,t){return o.a.createElement(z,{task:e})}))),o.a.createElement("button",{className:"ui fluid button",type:"button",onClick:function(){$("#createtaskmodal").modal("show")}},"Add task"))}}])&&J(n.prototype,a),i&&J(n,i),t}(r.Component);function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var oe=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=te(t).call(this,e))||"object"!==Z(o)&&"function"!=typeof o?ne(r):o).state={title:"",description:"",duedate:void 0},n.handleSubmit=n.handleSubmit.bind(ne(n)),n.handleUserInput=n.handleUserInput.bind(ne(n)),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){$("#createtaskform").form({fields:{title:{identifier:"title",rules:[{type:"empty",prompt:"You must provide a title for the task"},{type:"maxLength[70]",prompt:"Title cannot be larger than 70 characters"}]}}})}},{key:"handleUserInput",value:function(e){var t=e.target.name,n=e.target.value;this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),createTask(this.state.title,this.state.description,this.state.duedate,this.props.action)}},{key:"render",value:function(){var e=this;return o.a.createElement(O,{id:"createtaskmodal"},o.a.createElement("form",{className:"ui form",id:"createtaskform",onSubmit:this.handleSubmit},o.a.createElement("h3",{class:"ui dividing header"},"New task"),o.a.createElement("div",{class:"field"},o.a.createElement("label",null,"Title"),o.a.createElement("input",{type:"text",name:"title",maxLength:70,value:this.state.title,onChange:function(t){return e.handleUserInput(t)}})),o.a.createElement("div",{class:"field"},o.a.createElement("label",null,"Description"),o.a.createElement("textarea",{rows:"2",name:"description",value:this.state.description,onChange:function(t){return e.handleUserInput(t)}})),o.a.createElement("div",{className:"fields"},o.a.createElement("div",{className:"eight wide field"},o.a.createElement("label",null,"Due date"),o.a.createElement("input",{type:"datetime-local",name:"duedate",value:this.state.duedate,onChange:function(t){return e.handleUserInput(t)}}))),o.a.createElement("button",{className:"ui fluid button",type:"submit"},"Create")))}}])&&ee(n.prototype,r),a&&ee(n,a),t}(r.Component);function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ue(e,t){return!t||"object"!==ae(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function le(e,t){return(le=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var se=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ue(this,ce(t).call(this,e))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&le(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return o.a.createElement(O,{id:"taskmodal",mtype:"basic"},o.a.createElement("div",{className:"ui fluid card"},o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"header"},this.props.task.title),o.a.createElement("div",{className:"meta"},o.a.createElement("span",{className:"right floated time"},this.props.task.creationDate),o.a.createElement("a",null,"Category")),o.a.createElement("p",null,o.a.createElement("br",null)),o.a.createElement("p",{style:{color:"black"}},this.props.task.description)),o.a.createElement("div",{className:"extra content"},o.a.createElement("div",{className:"right floated author"},o.a.createElement("img",{className:"ui avatar image",src:"https://avatars.dicebear.com/v2/bottts/".concat(this.props.avatar,".svg")})," ",this.props.user))))}}])&&ie(n.prototype,r),a&&ie(n,a),t}(r.Component);function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function me(e){return(me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function be(e,t){return(be=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var de=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=me(t).call(this,e))||"object"!==fe(o)&&"function"!=typeof o?ye(r):o).state={user:$.cookie("authuser"),avatar:$.cookie("avatar"),tasks:[],currentTask:{}},n.handleStateChange=n.handleStateChange.bind(ye(n)),n.handleAuthModalAction=n.handleAuthModalAction.bind(ye(n)),checkTokenFromCookies(n.handleStateChange,(function(){})),n.handleRegister=n.handleRegister.bind(ye(n)),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&be(e,t)}(t,e),n=t,(a=[{key:"handleStateChange",value:function(e,t){this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,t))}},{key:"handleAuthModalAction",value:function(){checkTokenFromCookies(this.handleStateChange,(function(){"anonymous"===$.cookie("authuser")&&($("#authdisplayerrors").empty(),$("#authform").form("clear"),$('[name="loginerror"]').val("value"),$("#authmodal").modal("show"))}))}},{key:"handleRegister",value:function(e,t,n,r){$.ajax({type:"POST",url:"/api/v1/accounts",headers:{Accept:"application/json"},contentType:"application/json",data:JSON.stringify({password:t,nickname:e,email:n,avatarSeed:r}),error:function(e){console.log("not right")},success:function(e){console.log("ok")}})}},{key:"render",value:function(){return o.a.createElement(r.Fragment,null,o.a.createElement(s,{user:this.state.user,action:this.handleAuthModalAction,avatar:this.state.avatar}),o.a.createElement("div",{className:"ui container"},o.a.createElement("div",{className:"ui segment"},o.a.createElement("h2",{className:"ui center aligned icon header"},o.a.createElement("i",{className:"circular chess rook icon"}),"Wissen")),o.a.createElement("div",{className:"ui stackable two column grid"},o.a.createElement("div",{className:"column"},o.a.createElement(X,{user:this.state.user,tasks:this.state.tasks})))),o.a.createElement(C,{callback:this.handleStateChange}),o.a.createElement(L,{action:this.handleRegister}),o.a.createElement(oe,{action:this.handleStateChange}),o.a.createElement(se,{user:this.state.user,avatar:this.state.avatar,task:this.state.currentTask}))}}])&&pe(n.prototype,a),i&&pe(n,i),t}(r.Component);function he(e){return(he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ve(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ge(e){return(ge=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function we(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ee(e,t){return(Ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Oe=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=ge(t).call(this,e))||"object"!==he(o)&&"function"!=typeof o?we(r):o).handleStateChange=n.handleStateChange.bind(we(n)),void 0===$.cookie("layout")&&$.cookie("layout","home"),void 0===$.cookie("authuser")&&($.cookie("authuser","anonymous"),$.cookie("avatar",md5(Math.random().toString()))),n.state={layout:$.cookie("layout")},n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ee(e,t)}(t,e),n=t,(a=[{key:"handleStateChange",value:function(e,t){this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},name,t))}},{key:"render",value:function(){return"home"===this.state.layout?o.a.createElement(de,{layoutCallback:this.handleStateChange}):o.a.createElement(r.Fragment,null)}}])&&ve(n.prototype,a),i&&ve(n,i),t}(r.Component);ReactDOM.render(o.a.createElement(Oe,null),document.getElementById("root"));t.default=Oe}]);