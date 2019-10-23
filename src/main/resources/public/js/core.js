!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";e.exports=n(1)},function(e,t,n){"use strict";
/** @license React v16.8.3
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,a,i,u){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,a,i,u],l=0;(e=Error(t.replace(/%s/g,(function(){return c[l++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S={};function w(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||g}function O(){}function E(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||g}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=w.prototype;var _=E.prototype=new O;_.constructor=E,r(_,w.prototype),_.isPureReactComponent=!0;var j={current:null},k={current:null},P=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r=void 0,o={},i=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)P.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:a,type:e,key:i,ref:u,props:o,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,$=[];function T(e,t,n,r){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function A(e,t,n){return null==e?0:function e(t,n,r,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case i:c=!0}}if(c)return r(o,t,""===n?"."+M(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=n+M(u=t[l],l);c+=e(u,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(u=t.next()).done;)c+=e(u=u.value,s=n+M(u,l++),r,o);else"object"===u&&v("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return c}(e,"",t,n)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function F(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(R,"$&/")+"/"),A(e,F,t=T(t,a,r,o)),I(t)}function L(){var e=j.current;return null===e&&v("307"),e}var q={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,U,t=T(null,null,t,n)),I(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){return x(e)||v("143"),e}},createRef:function(){return{current:null}},Component:w,PureComponent:E,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return L().useCallback(e,t)},useContext:function(e,t){return L().useContext(e,t)},useEffect:function(e,t){return L().useEffect(e,t)},useImperativeHandle:function(e,t,n){return L().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return L().useLayoutEffect(e,t)},useMemo:function(e,t){return L().useMemo(e,t)},useReducer:function(e,t,n){return L().useReducer(e,t,n)},useRef:function(e){return L().useRef(e)},useState:function(e){return L().useState(e)},Fragment:u,StrictMode:c,Suspense:m,createElement:N,cloneElement:function(e,t,n){null==e&&v("267",e);var o=void 0,i=r({},e.props),u=e.key,c=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,l=k.current),void 0!==t.key&&(u=""+t.key);var s=void 0;for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)P.call(t,o)&&!C.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==s?s[o]:t[o])}if(1===(o=arguments.length-2))i.children=n;else if(1<o){s=Array(o);for(var f=0;f<o;f++)s[f]=arguments[f+2];i.children=s}return{$$typeof:a,type:e.type,key:u,ref:c,props:i,_owner:l}},createFactory:function(e){var t=N.bind(null,e);return t.type=e,t},isValidElement:x,version:"16.8.3",unstable_ConcurrentMode:p,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:j,ReactCurrentOwner:k,assign:r}},V={default:q},W=V&&q||V;e.exports=W.default||W},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,c=i(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))o.call(n,s)&&(c[s]=n[s]);if(r){u=r(n);for(var f=0;f<u.length;f++)a.call(n,u[f])&&(c[u[f]]=n[u[f]])}}return c}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,c(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",{className:"ui top attached menu"},o.a.createElement("div",{className:"ui item"},o.a.createElement("a",{href:"/"},o.a.createElement("h3",{className:"ui header"},"Wissen"))),o.a.createElement("div",{className:"ui right item",onClick:this.props.action},o.a.createElement("img",{className:"ui bordered avatar image",src:"https://avatars.dicebear.com/v2/bottts/".concat(this.props.avatar,".svg")}),o.a.createElement("span",null,this.props.user)))}}])&&i(n.prototype,r),a&&i(n,a),t}(r.Component);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,m(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",{className:"ui icon ".concat(this.props.type," message")},o.a.createElement("i",{className:"".concat(this.props.icon," icon")}),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"header"},this.props.header),this.props.children))}}])&&p(n.prototype,r),a&&p(n,a),t}(r.Component);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,S(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){$("#".concat(this.props.id)).modal({allowMultiple:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"ui ".concat(this.props.mtype," modal"),id:this.props.id},o.a.createElement("div",{className:"header"},this.props.title),o.a.createElement("div",{className:"".concat(this.props.ctype," content")},this.props.children))}}])&&v(n.prototype,r),a&&v(n,a),t}(r.Component);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=j(t).call(this,e))||"object"!==E(o)&&"function"!=typeof o?k(r):o).state={user:"",passwd:""},n.handleUserInput=n.handleUserInput.bind(k(n)),n.handleSubmit=n.handleSubmit.bind(k(n)),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,e),n=t,(r=[{key:"handleUserInput",value:function(e){var t=e.target.name,n=e.target.value;this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),login(this.state.user,this.state.passwd,this.props.callback)}},{key:"render",value:function(){var e=this;return o.a.createElement(O,{title:"Authentication stage",id:"authmodal"},o.a.createElement(d,{type:"",icon:"id badge",header:"Hi! Stranger",message:"Welcome to wissen, please provide your credentials."}),o.a.createElement("form",{className:"ui form",onSubmit:this.handleSubmit},o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"user"},"Username"),o.a.createElement("input",{type:"text",value:this.state.user,onChange:function(t){return e.handleUserInput(t)},name:"user"})),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"passwd"},"Password"),o.a.createElement("input",{type:"password",value:this.state.password,onChange:function(t){return e.handleUserInput(t)},name:"passwd"})),o.a.createElement("div",{className:"ui two buttons"},o.a.createElement("button",{className:"ui button",type:"submit"},"Login"),o.a.createElement("div",{className:"or"}),o.a.createElement("button",{className:"ui button",type:"button",onClick:this.props.regaction},"Register"))))}}])&&_(n.prototype,r),a&&_(n,a),t}(r.Component);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.Component;function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var L=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=U(t).call(this,e))||"object"!==A(o)&&"function"!=typeof o?F(r):o).state={user:"",email:"",avatar:md5(Math.random().toString()),passwd:"",cnfpasswd:""},n.handleUserInput=n.handleUserInput.bind(F(n)),n.handleSubmit=n.handleSubmit.bind(F(n)),n.handleSwitchAvatarImage=n.handleSwitchAvatarImage.bind(F(n)),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,e),n=t,(r=[{key:"handleSwitchAvatarImage",value:function(){this.setState({avatar:md5(Math.random().toString())})}},{key:"handleUserInput",value:function(e){var t=e.target.name,n=e.target.value;this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.action(this.state.user,this.state.passwd,this.state.email,this.state.avatar)}},{key:"render",value:function(){var e=this;return o.a.createElement(O,{title:"Register an account",id:"regmodal"},o.a.createElement("div",{className:"ui stackable grid"},o.a.createElement("div",{className:"four wide column"},o.a.createElement("img",{className:"ui bordered image",src:"https://avatars.dicebear.com/v2/bottts/".concat(this.state.avatar,".svg")}),o.a.createElement("br",null),o.a.createElement("button",{className:"fluid ui icon basic button",type:"button",onClick:this.handleSwitchAvatarImage},o.a.createElement("i",{class:"redo alternate icon"})," Switch avatar image")),o.a.createElement("div",{className:"twelve wide column"},o.a.createElement("form",{className:"ui form",onSubmit:this.handleSubmit},o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"user"},"Username"),o.a.createElement("input",{type:"text",value:this.state.user,onChange:function(t){return e.handleUserInput(t)},name:"user"})),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{type:"email",value:this.state.email,onChange:function(t){return e.handleUserInput(t)},name:"email"})),o.a.createElement("div",{className:"two fields"},o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"passwd"},"Password"),o.a.createElement("input",{type:"password",value:this.state.password,onChange:function(t){return e.handleUserInput(t)},name:"passwd"})),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"cnfpasswd"},"Confirm password"),o.a.createElement("input",{type:"password",value:this.state.cnfpasswd,onChange:function(t){return e.handleUserInput(t)},name:"cnfpasswd"}))),o.a.createElement("button",{className:"ui fluid button",type:"submit"},"Register")))))}}])&&M(n.prototype,r),a&&M(n,a),t}(r.Component);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var z=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),W(this,B(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=getTaskIconClass(task.completed,task.expired,task.dueDate,task.expirationDate);return o.a.createElement("div",{class:"item"},o.a.createElement("i",{class:"large ".concat(e," middle aligned icon")}),o.a.createElement("div",{class:"content"},o.a.createElement("div",{class:"header"},task.title),o.a.createElement("div",{class:"description"},task.description)))}}])&&V(n.prototype,r),a&&V(n,a),t}(r.Component);function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Z=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=K(t).call(this,e))||"object"!==J(o)&&"function"!=typeof o?Q(r):o).state={user:n.props.user,tasks:[]},n.handleStateChange=n.handleStateChange.bind(Q(n)),n.handleSubmit=n.handleSubmit.bind(Q(n)),n.handleUserInput=n.handleUserInput.bind(Q(n)),getToDoList(n.handleStateChange),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,e),n=t,(a=[{key:"handleStateChange",value:function(e,t){this.setState(Y({},e,t))}},{key:"componentWillReceiveProps",value:function(e){getToDoList(this.handleStateChange)}},{key:"handleUserInput",value:function(e){var t=e.target.name,n=e.target.value;this.setState(Y({},t,n))}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return"anonymous"===this.props.user?o.a.createElement(r.Fragment,null):o.a.createElement("div",{className:"ui segment"},o.a.createElement("h3",{className:"ui dividing header"},o.a.createElement("i",{class:"fitted clipboard list icon"})," Tasks"),o.a.createElement("div",{className:"ui relaxed divided list"},this.state.tasks.map((function(e,t){return o.a.createElement(z,{task:e})}))))}}])&&G(n.prototype,a),i&&G(n,i),t}(r.Component);function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function re(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e,t){return(oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ae=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=ne(t).call(this,e))||"object"!==ee(o)&&"function"!=typeof o?re(r):o).state={user:$.cookie("authuser"),avatar:$.cookie("avatar")},n.handleStateChange=n.handleStateChange.bind(re(n)),n.handleAuthModalAction=n.handleAuthModalAction.bind(re(n)),checkTokenFromCookies(n.handleStateChange,(function(){})),n.handleRegisterModalAction=n.handleRegisterModalAction.bind(re(n)),n.handleRegister=n.handleRegister.bind(re(n)),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&oe(e,t)}(t,e),n=t,(a=[{key:"handleStateChange",value:function(e,t){this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,t))}},{key:"handleAuthModalAction",value:function(){checkTokenFromCookies(this.handleStateChange,(function(){"anonymous"===$.cookie("authuser")&&$("#authmodal").modal("show")}))}},{key:"handleRegisterModalAction",value:function(){$("#regmodal").modal("show")}},{key:"handleRegister",value:function(e,t,n,r){$.ajax({type:"POST",url:"/accounts",headers:{Accept:"application/json"},contentType:"application/json",data:JSON.stringify({password:t,nickname:e,email:n,avatarSeed:r}),error:function(e){console.log("not right")},success:function(e){console.log("ok")}})}},{key:"render",value:function(){return o.a.createElement(r.Fragment,null,o.a.createElement(s,{user:this.state.user,action:this.handleAuthModalAction,avatar:this.state.avatar}),o.a.createElement("div",{className:"ui container"},o.a.createElement("div",{className:"ui segment"},o.a.createElement("h2",{className:"ui center aligned icon header"},o.a.createElement("i",{className:"circular chess rook icon"}),"Wissen")),o.a.createElement("div",{className:"ui stackable two column grid"},o.a.createElement("div",{className:"column"},o.a.createElement(Z,{user:this.state.user})))),o.a.createElement(C,{callback:this.handleStateChange,regaction:this.handleRegisterModalAction}),o.a.createElement(L,{action:this.handleRegister}))}}])&&te(n.prototype,a),i&&te(n,i),t}(r.Component);function ie(e){return(ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ue(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function le(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function se(e,t){return(se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var fe=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=ce(t).call(this,e))||"object"!==ie(o)&&"function"!=typeof o?le(r):o).handleStateChange=n.handleStateChange.bind(le(n)),void 0===$.cookie("layout")&&$.cookie("layout","home"),void 0===$.cookie("authuser")&&($.cookie("authuser","anonymous"),$.cookie("avatar",md5(Math.random().toString()))),n.state={layout:$.cookie("layout")},n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&se(e,t)}(t,e),n=t,(a=[{key:"handleStateChange",value:function(e,t){this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},name,t))}},{key:"render",value:function(){return"home"===this.state.layout?o.a.createElement(ae,{layoutCallback:this.handleStateChange}):o.a.createElement(r.Fragment,null)}}])&&ue(n.prototype,a),i&&ue(n,i),t}(r.Component);ReactDOM.render(o.a.createElement(fe,null),document.getElementById("root"));t.default=fe}]);