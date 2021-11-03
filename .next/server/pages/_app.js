module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./lib/with-redux-store.js":
/*!*********************************!*\
  !*** ./lib/with-redux-store.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./store.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const isServer = true;
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

const theApp = App => {
  return class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return _objectSpread(_objectSpread({}, appProps), {}, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return __jsx(App, _extends({}, this.props, {
        reduxStore: this.reduxStore
      }));
    }

  };
};

/* harmony default export */ __webpack_exports__["default"] = (theApp);

/***/ }),

/***/ "./model/userSelection.js":
/*!********************************!*\
  !*** ./model/userSelection.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserSelection; });
class UserSelection {
  constructor(key, source) {
    this.source = source; // denotes the source, i.e. eIDAS, edugain etc

    this.key = key; //denotes attribute name e.g. personIdentifier
  }

}

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_with_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/with-redux-store */ "./lib/with-redux-store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  render() {
    const {
      Component,
      pageProps,
      reduxStore
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      store: reduxStore
    }, __jsx(Component, pageProps));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_redux_store__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp));

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, loginClicked, setStepperSteps, setBaseUrl, startSession, setServerSessionId, setSessionData, setUserAttributeSelection, updateSession, setEndpoint, addToSelection, addSetToSelection, removeFromSelection, vcSentToUser, increaseCardIndex, decreaseCardIndex, requestVCgeneration, makeConnectionRequest, completeDIDAuth, makeAndPushVC, requestVC, setSealSession, makeSealSession, makeOnlyConnectionRequest, makeSealSessionWithDIDConnecetionRequest, setDidCallback, setEidasUriPort, setEidasRedirectUri, setEdugainRedirectUri, setEdugainUriPort, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginClicked", function() { return loginClicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStepperSteps", function() { return setStepperSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBaseUrl", function() { return setBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startSession", function() { return startSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setServerSessionId", function() { return setServerSessionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSessionData", function() { return setSessionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserAttributeSelection", function() { return setUserAttributeSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSession", function() { return updateSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEndpoint", function() { return setEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToSelection", function() { return addToSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSetToSelection", function() { return addSetToSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromSelection", function() { return removeFromSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vcSentToUser", function() { return vcSentToUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increaseCardIndex", function() { return increaseCardIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseCardIndex", function() { return decreaseCardIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestVCgeneration", function() { return requestVCgeneration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeConnectionRequest", function() { return makeConnectionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completeDIDAuth", function() { return completeDIDAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAndPushVC", function() { return makeAndPushVC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestVC", function() { return requestVC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSealSession", function() { return setSealSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSealSession", function() { return makeSealSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeOnlyConnectionRequest", function() { return makeOnlyConnectionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSealSessionWithDIDConnecetionRequest", function() { return makeSealSessionWithDIDConnecetionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDidCallback", function() { return setDidCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEidasUriPort", function() { return setEidasUriPort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEidasRedirectUri", function() { return setEidasRedirectUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEdugainRedirectUri", function() { return setEdugainRedirectUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEdugainUriPort", function() { return setEdugainUriPort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _model_userSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/userSelection */ "./model/userSelection.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const initialState = {
  count: 0,
  qrData: null,
  fetching: false,
  requestSignature: null,
  sessionData: null,
  serverSessionId: null,
  uuid: null,
  vcSent: false,
  userSelection: [],
  // the attributes selected by the user to be included in a VC,
  endpoint: null,
  // the backend server url root.
  cardIndex: 1,
  stepperSteps: [],
  baseUrl: "",
  DID: false,
  //boolean, denoting that DID connection response has been received for this session
  sealSession: "",
  didAuthCallback: "",
  // callback address set by the caller to redirect to after DID auth,
  eidasUri: "",
  eidasPort: "",
  eidasRedirectUri: "",
  edugainUri: "",
  edugainPort: "",
  edugainRedirectUri: "",
  vcFailed: false,
  credQROffer: ""
};
const actionTypes = {
  GET_QR_AUTH_RESPONSE: "GET_QR_AUTH_RESPONSE",
  MAKE_QR_AUTH_REQUEST: "MAKE_QR_AUTH_REQUEST",
  MAKE_VC_QR_REQUEST: "MAKE_VC_QR_REQUEST",
  //make a request to generate a VC based on the selected attributes
  GET_VC_QR_RESPONSE: "GET_VC_QR_REQUEST",
  SET_ATTRIBUTES_SELECTION: "SET_ATTRIBUTES_SELECTION",
  //adds an array as the user  selected attirubtes
  ADD_SET_TO_ATTRIBUTES_SELECTION: "ADD_SET_TO_ATTRIBUTES_SELECTION",
  //adds the payload to the userSelection
  ADD_ATTRIBUTES_TO_SELECTION: "ADD_ATTRIBUTES_TO_SELECTION",
  //adds the payload to the userSelection
  // the selection takes place using identifiers from the session
  // that are meaningful to the backend
  REMOVE_ATTRIBUTE_FROM_SELECTION: "REMOVE_ATTRIBUTE_FROM_SELECTION",
  SET_SERVER_SESSION_DATA: "SET_SERVER_SESSION_DATA",
  SET_SERVER_SESSION_ID: "SET_SERVER_SESSION_ID",
  VC_SENT_TO_USER: "VC_SENT_TO_USER",
  SET_ENDPOINT: "SET_END_POINT",
  //
  INCREASE_CARD_INDEX: "INCREASE_CARD_INDEX",
  DECREASE_CARD_INDEX: "DECREASE_CARD_INDEX",
  //
  SET_STEPPER_STEPS: "SET_STEPPER_STEPS",
  //
  SET_BASE_URL: "SET_BASE_URL",
  //
  SET_DID_TRUE: "SES_DID_TRUE",
  SET_SEAL_SESSION: "SET_SEAL_SESSION",
  SET_CALLBACK: "SET_CALLBACK",
  SET_EIDAS_URI_PORT: "SET_EIDAS_URI_PORT",
  SET_EIDAS_REDIRECT_URI: "SET_EIDAS_REDIRECT_URI",
  SET_EDUGAIN_URI_PORT: "SET_EDUGAIN_URI_PORT",
  SET_EDUGAIN_REDIRECT_URI: "SET_EDUGAIN_REDIRECT_URI",
  VC_ISSUE_FAILED: "VC_ISSUE_FAILED",
  JOLO_VC_GENERATED: "JOLO_VC_GENERATED"
}; // REDUCERS

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.JOLO_VC_GENERATED:
      return _objectSpread(_objectSpread({}, state), {}, {
        credQROffer: action.data
      });

    case actionTypes.VC_ISSUE_FAILED:
      return _objectSpread(_objectSpread({}, state), {}, {
        vcFailed: true
      });

    case actionTypes.SET_EDUGAIN_REDIRECT_URI:
      return _objectSpread(_objectSpread({}, state), {}, {
        edugainRedirectUri: action.data
      });

    case actionTypes.SET_EDUGAIN_URI_PORT:
      return _objectSpread(_objectSpread({}, state), {}, {
        edugainUri: action.data.uri,
        edugainPort: action.data.port
      });

    case actionTypes.SET_EIDAS_REDIRECT_URI:
      return _objectSpread(_objectSpread({}, state), {}, {
        eidasRedirectUri: action.data
      });

    case actionTypes.SET_EIDAS_URI_PORT:
      return _objectSpread(_objectSpread({}, state), {}, {
        eidasUri: action.data.uri,
        eidasPort: action.data.port
      });

    case actionTypes.SET_CALLBACK:
      return _objectSpread(_objectSpread({}, state), {}, {
        didAuthCallback: action.data
      });

    case actionTypes.SET_SEAL_SESSION:
      return _objectSpread(_objectSpread({}, state), {}, {
        sealSession: action.data
      });

    case actionTypes.SET_DID_TRUE:
      return _objectSpread(_objectSpread({}, state), {}, {
        DID: true,
        uuid: action.data
      });

    case actionTypes.SET_BASE_URL:
      return _objectSpread(_objectSpread({}, state), {}, {
        baseUrl: action.data
      });

    case actionTypes.SET_STEPPER_STEPS:
      return _objectSpread(_objectSpread({}, state), {}, {
        stepperSteps: action.data
      });

    case actionTypes.INCREASE_CARD_INDEX:
      return _objectSpread(_objectSpread({}, state), {}, {
        cardIndex: state.cardIndex + 1
      });

    case actionTypes.DECREASE_CARD_INDEX:
      return _objectSpread(_objectSpread({}, state), {}, {
        cardIndex: state.cardIndex - 1
      });

    case actionTypes.SET_ENDPOINT:
      return _objectSpread(_objectSpread({}, state), {}, {
        endpoint: action.data
      });

    case actionTypes.VC_SENT_TO_USER:
      return _objectSpread(_objectSpread({}, state), {}, {
        vcSent: true
      });

    case actionTypes.SET_SERVER_SESSION_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        sessionData: action.data // userEduGain: action.data.eduGAIN,
        // userEidas: action.data.eidas,

      });

    case actionTypes.GET_QR_AUTH_RESPONSE:
      // console.log(action.data);
      return _objectSpread(_objectSpread({}, state), {}, {
        fetching: false,
        qrData: action.data.qr,
        uuid: action.data.uuid,
        requestSignature: action.data.signature
      });

    case actionTypes.SET_ATTRIBUTES_SELECTION:
      return _objectSpread(_objectSpread({}, state), {}, {
        userSelection: action.data
      });

    case actionTypes.MAKE_QR_AUTH_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        fetching: true,
        vcSent: false
      });

    case actionTypes.ADD_ATTRIBUTES_TO_SELECTION:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          userSelection: [...state.userSelection, action.data]
        });
      }

    case actionTypes.ADD_SET_TO_ATTRIBUTES_SELECTION:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          userSelection: [...state.userSelection, ...action.data]
        });
      }

    case actionTypes.SET_SERVER_SESSION_ID:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          serverSessionId: action.data
        });
      }

    case actionTypes.REMOVE_ATTRIBUTE_FROM_SELECTION:
      let newSelection = [...state.userSelection.filter((el, ind) => {
        return ind !== action.index;
      })];
      return _objectSpread(_objectSpread({}, state), {}, {
        userSelection: newSelection
      });

    default:
      return state;
  }
}; // ACTIONS


function loginClicked() {
  return dispatch => {
    dispatch({
      type: actionTypes.MAKE_QR_AUTH_REQUEST
    });
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("connectionRequest").then(data => {
      console.log("got the data form the server");
      console.log(data.data);
      return dispatch({
        type: actionTypes.GET_QR_AUTH_RESPONSE,
        data: data.data
      });
    });
  }; // return dispatch => axios.get('https://38da089e.ngrok.io/connectionRequest')
  //     .then(({ data }) => data)
  //     .then(items => dispatch({ type: actionTypes.MAKE_QR_AUTH_REQUEST, items }))
  //     .then( () =>{
  //       console.log("got there")
  //         return dispatch({ type: actionTypes.GET_QR_AUTH_RESPONSE, data:'these are my awesome data' })
  //     });
} // export function setDIDTrue() {
//   return dispatch => {
//     dispatch({
//       type: actionTypes.SET_DID_TRUE
//     });
//   };
// }

function setStepperSteps(steps) {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_STEPPER_STEPS,
      data: steps
    });
  };
}
function setBaseUrl(baseUrl) {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_BASE_URL,
      data: baseUrl
    });
  };
}
function startSession(sessionId, sessionStatus) {
  return dispatch => {
    dispatch({
      type: actionTypes.START_SESSION,
      data: {
        sessionId: sessionId,
        status: sessionStatus
      }
    });
  };
}
function setServerSessionId(sessionId) {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_SERVER_SESSION_ID,
      data: sessionId
    });
  };
}
function setSessionData(sessionData) {
  return dispatch => {
    console.log(`store.js setSessionData called with::`);
    console.log(sessionData);
    dispatch({
      type: actionTypes.SET_SERVER_SESSION_DATA,
      data: sessionData
    });
  };
}
function setUserAttributeSelection(selectedAttributes) {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_ATTRIBUTES_SELECTION,
      data: selectedAttributes
    });
  };
}
function updateSession(sessionStatus) {
  return dispatch => {
    let toDispatch = {
      type: actionTypes.UPDATE_SESSION,
      data: {
        status: sessionStatus
      }
    };
    dispatch(toDispatch);
  };
}
function setEndpoint(endpoint) {
  console.log("store.js setting endpoint to " + endpoint);
  return dispatch => {
    let toDispatch = {
      type: actionTypes.SET_ENDPOINT,
      data: endpoint
    };
    dispatch(toDispatch);
  };
}
function addToSelection(index, source) {
  // console.log(`store.js:: will add to seleciton ${index} , ${source}`);
  const data = new _model_userSelection__WEBPACK_IMPORTED_MODULE_4__["default"](index, source);
  return dispatch => {
    dispatch({
      type: actionTypes.ADD_ATTRIBUTES_TO_SELECTION,
      data: data
    });
  };
}
function addSetToSelection(setArray) {
  const data = [];
  setArray.forEach(attrObj => {
    Object.keys(attrObj).map(key => {
      // console.log(`will fetch key ${key} from` )
      data.push(new _model_userSelection__WEBPACK_IMPORTED_MODULE_4__["default"](key, attrObj.source));
      return new _model_userSelection__WEBPACK_IMPORTED_MODULE_4__["default"](key, attrObj[key]);
    });
  });
  return dispatch => {
    dispatch({
      type: actionTypes.ADD_SET_TO_ATTRIBUTES_SELECTION,
      data: data
    });
  };
}
function removeFromSelection(index) {
  // console.log(`store.js will remove from  seleciton ${index}`);
  return dispatch => {
    let toDispatch = {
      type: actionTypes.REMOVE_ATTRIBUTE_FROM_SELECTION,
      index: index
    };
    dispatch(toDispatch);
  };
}
function vcSentToUser() {
  return dispatch => {
    let toDispatch = {
      type: actionTypes.VC_SENT_TO_USER
    };
    dispatch(toDispatch);
  };
}
function increaseCardIndex() {
  // console.log(`store.js will remove from  seleciton ${index}`);
  return dispatch => {
    let toDispatch = {
      type: actionTypes.INCREASE_CARD_INDEX
    };
    dispatch(toDispatch);
  };
}
function decreaseCardIndex() {
  // console.log(`store.js will remove from  seleciton ${index}`);
  return dispatch => {
    let toDispatch = {
      type: actionTypes.DECREASE_CARD_INDEX
    };
    dispatch(toDispatch);
  };
}
function requestVCgeneration(url, selectedAttributes, vcType, isMobile = false) {
  return dispatch => {
    dispatch({
      type: actionTypes.MAKE_QR_AUTH_REQUEST
    });
    let bodyFormData = new FormData();
    bodyFormData.set("data", selectedAttributes);
    console.log("store.js - requestVCgeneration:: will make VC generation request");
    console.log(`store.js - requestVCgeneration:: for the url ${url}`); // console.log(`store.js - requestVCgeneration:: with data`)
    // console.log(selectedAttributes);
    // console.log(isMobile);

    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, {
      data: selectedAttributes,
      vcType: vcType,
      isMobile: isMobile
    }).then(data => {
      console.log("store.js- requestVCgeneration:: got the data form the server");
      console.log(data.data);
      console.log("store.js- requestVCgeneration:: got vcType");
      console.log(vcType);
      return dispatch({
        type: actionTypes.GET_QR_AUTH_RESPONSE,
        data: data.data,
        vcType: vcType
      });
    });
  };
}
function makeConnectionRequest() {
  return dispatch => {
    dispatch({
      type: actionTypes.MAKE_QR_AUTH_REQUEST
    });
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/makeConnectionRequest", {}).then(data => {
      console.log("store.js:: makeConnectionRequest got the data form the server");
      return dispatch({
        type: actionTypes.GET_QR_AUTH_RESPONSE,
        data: data.data
      });
    });
  };
}
function completeDIDAuth(uuid) {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_DID_TRUE,
      data: uuid
    });
  };
}
function makeAndPushVC(url, selectedAttributes, vcType, sealSession, isMobile = false) {
  return dispatch => {
    let bodyFormData = new FormData();
    bodyFormData.set("data", selectedAttributes);
    console.log("store.js - makeAndPushVC:: will make VC generation request");
    console.log(`store.js :: makeandpushVC:: ${url}, and ${vcType}`);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, {
      data: selectedAttributes,
      sealSession: sealSession,
      vcType: vcType,
      isMobile: isMobile
    }).then(data => {
      console.log("store.js- makeAndPushVC:: got the data form the server");
      dispatch({
        type: actionTypes.VC_SENT_TO_USER
      });
    }).catch(err => {
      console.log("store.js- makeAndPushVC:: ERROR");
      console.log(err);
      dispatch({
        type: actionTypes.VC_ISSUE_FAILED
      });
    }); //TODO add here an action denoting that the VC was sent
  };
} // export function makeAndPushVCJolo(
//   url,
//   selectedAttributes,
//   vcType,
//   sealSession,
//   isMobile = false
// ) {
//   return (dispatch) => {
//     let bodyFormData = new FormData();
//     bodyFormData.set("data", selectedAttributes);
//     axios
//       .post(url, {
//         data: selectedAttributes,
//         sealSession: sealSession,
//         vcType: vcType,
//         isMobile: isMobile,
//       })
//       .then((resp) => {
//         console.log(resp)
//         dispatch({ type: actionTypes.JOLO_VC_GENERATED, data: resp.data.qr });
//       })
//       .catch((err) => {
//         console.log("store.js- makeAndPushVC:: ERROR");
//         console.log(err);
//         dispatch({ type: actionTypes.VC_ISSUE_FAILED });
//       });
//   };
// }

function requestVC(url, vcType, sealSession, isMobile = false) {
  return dispatch => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, {
      sealSession: sealSession,
      vcType: vcType,
      isMobile: isMobile
    }).then(resp => {
      console.log("store.js requestVC_response");
      console.log(resp);
      dispatch({
        type: actionTypes.JOLO_VC_GENERATED,
        data: resp.data.qr
      });
    }).catch(err => {
      console.log("store.js- makeAndPushVC:: ERROR");
      console.log(err);
      dispatch({
        type: actionTypes.VC_ISSUE_FAILED
      });
    });
  };
}
function setSealSession(sessionId) {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_SEAL_SESSION,
      data: sessionId
    });
  };
}
function makeSealSession(baseUrl) {
  console.log("store:: makeSealSession");
  return dispatch => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${baseUrl}seal/start-session`, {}).then(resp => {
      console.log("store.js:: makeSealSession"); // console.log(resp.data);

      return dispatch({
        type: actionTypes.SET_SEAL_SESSION,
        data: resp.data
      });
    });
  };
}
function makeOnlyConnectionRequest(sealSession, baseUrl, vcType = "didAuth", isMobile) {
  let postData = {
    sealSession: sealSession,
    vcType: vcType
  };

  if (isMobile) {
    postData.isMobile = isMobile;
  }

  return dispatch => {
    dispatch({
      type: actionTypes.MAKE_QR_AUTH_REQUEST
    });
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${baseUrl}onlyConnectionRequest`, postData).then(data => {
      console.log("store.js -- onlyConnectionRequest:: got the data form the server");
      return dispatch({
        type: actionTypes.GET_QR_AUTH_RESPONSE,
        data: data.data
      });
    });
  };
}
function makeSealSessionWithDIDConnecetionRequest(baseUrl, vcType, isMobile) {
  console.log(`store.js:: makeSealSessionWithDIDConnecetionRequest  the base url is-->${baseUrl}<--`);
  return dispatch => {
    let sessionId = "";
    let postUrl = baseUrl ? `${baseUrl}seal/start-session` : `/seal/start-session`;
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(postUrl, {}).then(resp => {
      sessionId = resp.data;
      return dispatch({
        type: actionTypes.SET_SEAL_SESSION,
        data: resp.data
      });
    }).then(obj => {
      // console.log("makeSealSessionWithDIDConnecetionRequest")
      console.log(`isMobile? ${isMobile}`);
      let postUrl = baseUrl ? `${baseUrl}makeConnectionRequest` : `/makeConnectionRequest`;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(postUrl, {
        sealSession: sessionId,
        baseUrl: baseUrl,
        vcType: vcType,
        isMobile: isMobile
      }).then(data => {
        return dispatch({
          type: actionTypes.GET_QR_AUTH_RESPONSE,
          data: data.data
        });
      });
    });
  };
}
function setDidCallback(callback) {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_CALLBACK,
      data: callback
    });
  };
}
function setEidasUriPort(uri, port) {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_EIDAS_URI_PORT,
      data: {
        uri: uri,
        port: port
      }
    });
  };
}
function setEidasRedirectUri(uri) {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_EIDAS_REDIRECT_URI,
      data: uri
    });
  };
}
function setEdugainRedirectUri(uri) {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_EDUGAIN_REDIRECT_URI,
      data: uri
    });
  };
}
function setEdugainUriPort(uri, port) {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_EDUGAIN_URI_PORT,
      data: {
        uri: uri,
        port: port
      }
    });
  };
}
const initializeStore = (preloadedState = initialState) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2xpYi93aXRoLXJlZHV4LXN0b3JlLmpzIiwid2VicGFjazovLy8uL21vZGVsL3VzZXJTZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiaXNTZXJ2ZXIiLCJfX05FWFRfUkVEVVhfU1RPUkVfXyIsImdldE9yQ3JlYXRlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJpbml0aWFsaXplU3RvcmUiLCJ3aW5kb3ciLCJ0aGVBcHAiLCJBcHAiLCJBcHBXaXRoUmVkdXgiLCJSZWFjdCIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImFwcENvbnRleHQiLCJyZWR1eFN0b3JlIiwiY3R4IiwiYXBwUHJvcHMiLCJpbml0aWFsUmVkdXhTdGF0ZSIsImdldFN0YXRlIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsIlVzZXJTZWxlY3Rpb24iLCJrZXkiLCJzb3VyY2UiLCJwYWdlUHJvcHMiLCJjb21wb25lbnREaWRDYXRjaCIsIl9fTl9TU0ciLCJ1cmwiLCJjcmVhdGVVcmwiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsImNvbnNvbGUiLCJ3YXJuVXJsIiwicCIsImJhY2siLCJyb3V0ZXIiLCJwdXNoIiwicHVzaFRvIiwicHVzaFJvdXRlIiwiYXMiLCJwdXNoVXJsIiwicmVwbGFjZSIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJNeUFwcCIsIndpdGhSZWR1eFN0b3JlIiwiY291bnQiLCJxckRhdGEiLCJmZXRjaGluZyIsInJlcXVlc3RTaWduYXR1cmUiLCJzZXNzaW9uRGF0YSIsInNlcnZlclNlc3Npb25JZCIsInV1aWQiLCJ2Y1NlbnQiLCJ1c2VyU2VsZWN0aW9uIiwiZW5kcG9pbnQiLCJjYXJkSW5kZXgiLCJzdGVwcGVyU3RlcHMiLCJiYXNlVXJsIiwiRElEIiwic2VhbFNlc3Npb24iLCJkaWRBdXRoQ2FsbGJhY2siLCJlaWRhc1VyaSIsImVpZGFzUG9ydCIsImVpZGFzUmVkaXJlY3RVcmkiLCJlZHVnYWluVXJpIiwiZWR1Z2FpblBvcnQiLCJlZHVnYWluUmVkaXJlY3RVcmkiLCJ2Y0ZhaWxlZCIsImNyZWRRUk9mZmVyIiwiYWN0aW9uVHlwZXMiLCJHRVRfUVJfQVVUSF9SRVNQT05TRSIsIk1BS0VfUVJfQVVUSF9SRVFVRVNUIiwiTUFLRV9WQ19RUl9SRVFVRVNUIiwiR0VUX1ZDX1FSX1JFU1BPTlNFIiwiU0VUX0FUVFJJQlVURVNfU0VMRUNUSU9OIiwiQUREX1NFVF9UT19BVFRSSUJVVEVTX1NFTEVDVElPTiIsIkFERF9BVFRSSUJVVEVTX1RPX1NFTEVDVElPTiIsIlJFTU9WRV9BVFRSSUJVVEVfRlJPTV9TRUxFQ1RJT04iLCJTRVRfU0VSVkVSX1NFU1NJT05fREFUQSIsIlNFVF9TRVJWRVJfU0VTU0lPTl9JRCIsIlZDX1NFTlRfVE9fVVNFUiIsIlNFVF9FTkRQT0lOVCIsIklOQ1JFQVNFX0NBUkRfSU5ERVgiLCJERUNSRUFTRV9DQVJEX0lOREVYIiwiU0VUX1NURVBQRVJfU1RFUFMiLCJTRVRfQkFTRV9VUkwiLCJTRVRfRElEX1RSVUUiLCJTRVRfU0VBTF9TRVNTSU9OIiwiU0VUX0NBTExCQUNLIiwiU0VUX0VJREFTX1VSSV9QT1JUIiwiU0VUX0VJREFTX1JFRElSRUNUX1VSSSIsIlNFVF9FRFVHQUlOX1VSSV9QT1JUIiwiU0VUX0VEVUdBSU5fUkVESVJFQ1RfVVJJIiwiVkNfSVNTVUVfRkFJTEVEIiwiSk9MT19WQ19HRU5FUkFURUQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZGF0YSIsInVyaSIsInBvcnQiLCJxciIsInNpZ25hdHVyZSIsIm5ld1NlbGVjdGlvbiIsImZpbHRlciIsImVsIiwiaW5kIiwiaW5kZXgiLCJsb2dpbkNsaWNrZWQiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsImxvZyIsInNldFN0ZXBwZXJTdGVwcyIsInN0ZXBzIiwic2V0QmFzZVVybCIsInN0YXJ0U2Vzc2lvbiIsInNlc3Npb25JZCIsInNlc3Npb25TdGF0dXMiLCJTVEFSVF9TRVNTSU9OIiwic3RhdHVzIiwic2V0U2VydmVyU2Vzc2lvbklkIiwic2V0U2Vzc2lvbkRhdGEiLCJzZXRVc2VyQXR0cmlidXRlU2VsZWN0aW9uIiwic2VsZWN0ZWRBdHRyaWJ1dGVzIiwidXBkYXRlU2Vzc2lvbiIsInRvRGlzcGF0Y2giLCJVUERBVEVfU0VTU0lPTiIsInNldEVuZHBvaW50IiwiYWRkVG9TZWxlY3Rpb24iLCJhZGRTZXRUb1NlbGVjdGlvbiIsInNldEFycmF5IiwiZm9yRWFjaCIsImF0dHJPYmoiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicmVtb3ZlRnJvbVNlbGVjdGlvbiIsInZjU2VudFRvVXNlciIsImluY3JlYXNlQ2FyZEluZGV4IiwiZGVjcmVhc2VDYXJkSW5kZXgiLCJyZXF1ZXN0VkNnZW5lcmF0aW9uIiwidmNUeXBlIiwiaXNNb2JpbGUiLCJib2R5Rm9ybURhdGEiLCJGb3JtRGF0YSIsInNldCIsInBvc3QiLCJtYWtlQ29ubmVjdGlvblJlcXVlc3QiLCJjb21wbGV0ZURJREF1dGgiLCJtYWtlQW5kUHVzaFZDIiwiY2F0Y2giLCJlcnIiLCJyZXF1ZXN0VkMiLCJyZXNwIiwic2V0U2VhbFNlc3Npb24iLCJtYWtlU2VhbFNlc3Npb24iLCJtYWtlT25seUNvbm5lY3Rpb25SZXF1ZXN0IiwicG9zdERhdGEiLCJtYWtlU2VhbFNlc3Npb25XaXRoRElEQ29ubmVjZXRpb25SZXF1ZXN0IiwicG9zdFVybCIsIm9iaiIsInNldERpZENhbGxiYWNrIiwiY2FsbGJhY2siLCJzZXRFaWRhc1VyaVBvcnQiLCJzZXRFaWRhc1JlZGlyZWN0VXJpIiwic2V0RWR1Z2FpblJlZGlyZWN0VXJpIiwic2V0RWR1Z2FpblVyaVBvcnQiLCJwcmVsb2FkZWRTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2FyZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7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O0FBTUQ7QUFHTSxTQUFTcUUsaUJBQVQsQ0FBMkJyRSxHQUEzQixFQUFnQ0MsSUFBaEMsRUFBc0M7QUFDM0MsU0FBUVMsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUFosVUFBSSxFQUFFN0IsV0FBVyxDQUFDc0Isb0JBRFg7QUFFUFEsVUFBSSxFQUFFO0FBQUVDLFdBQUcsRUFBRUEsR0FBUDtBQUFZQyxZQUFJLEVBQUVBO0FBQWxCO0FBRkMsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sTUFBTXBHLGVBQWUsR0FBRyxDQUFDeUssY0FBYyxHQUFHMUssWUFBbEIsS0FBbUM7QUFDaEUsU0FBTzJLLHlEQUFXLENBQ2hCNUUsT0FEZ0IsRUFFaEIyRSxjQUZnQixFQUdoQkUsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUNDLGtEQUFELENBQWhCLENBSEgsQ0FBbEI7QUFLRCxDQU5NLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcHNCUCxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGluaXRpYWxpemVTdG9yZSB9IGZyb20gJy4uL3N0b3JlJ1xyXG5cclxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xyXG5jb25zdCBfX05FWFRfUkVEVVhfU1RPUkVfXyA9ICdfX05FWFRfUkVEVVhfU1RPUkVfXydcclxuXHJcbmZ1bmN0aW9uIGdldE9yQ3JlYXRlU3RvcmUgKGluaXRpYWxTdGF0ZSkge1xyXG4gIC8vIEFsd2F5cyBtYWtlIGEgbmV3IHN0b3JlIGlmIHNlcnZlciwgb3RoZXJ3aXNlIHN0YXRlIGlzIHNoYXJlZCBiZXR3ZWVuIHJlcXVlc3RzXHJcbiAgaWYgKGlzU2VydmVyKSB7XHJcbiAgICByZXR1cm4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSlcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBzdG9yZSBpZiB1bmF2YWlsYWJsZSBvbiB0aGUgY2xpZW50IGFuZCBzZXQgaXQgb24gdGhlIHdpbmRvdyBvYmplY3RcclxuICBpZiAoIXdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX10pIHtcclxuICAgIHdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX10gPSBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKVxyXG4gIH1cclxuICByZXR1cm4gd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXVxyXG59XHJcblxyXG5jb25zdCB0aGVBcHAgPSAgQXBwID0+IHtcclxuICByZXR1cm4gY2xhc3MgQXBwV2l0aFJlZHV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKGFwcENvbnRleHQpIHtcclxuICAgICAgLy8gR2V0IG9yIENyZWF0ZSB0aGUgc3RvcmUgd2l0aCBgdW5kZWZpbmVkYCBhcyBpbml0aWFsU3RhdGVcclxuICAgICAgLy8gVGhpcyBhbGxvd3MgeW91IHRvIHNldCBhIGN1c3RvbSBkZWZhdWx0IGluaXRpYWxTdGF0ZVxyXG4gICAgICBjb25zdCByZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZSgpXHJcblxyXG4gICAgICAvLyBQcm92aWRlIHRoZSBzdG9yZSB0byBnZXRJbml0aWFsUHJvcHMgb2YgcGFnZXNcclxuICAgICAgYXBwQ29udGV4dC5jdHgucmVkdXhTdG9yZSA9IHJlZHV4U3RvcmVcclxuXHJcbiAgICAgIGxldCBhcHBQcm9wcyA9IHt9XHJcbiAgICAgIGlmICh0eXBlb2YgQXBwLmdldEluaXRpYWxQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmFwcFByb3BzLFxyXG4gICAgICAgIGluaXRpYWxSZWR1eFN0YXRlOiByZWR1eFN0b3JlLmdldFN0YXRlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcylcclxuICAgICAgdGhpcy5yZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZShwcm9wcy5pbml0aWFsUmVkdXhTdGF0ZSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICByZXR1cm4gPEFwcCB7Li4udGhpcy5wcm9wc30gcmVkdXhTdG9yZT17dGhpcy5yZWR1eFN0b3JlfSAvPlxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlQXBwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclNlbGVjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihrZXksc291cmNlKSB7XHJcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlOyAvLyBkZW5vdGVzIHRoZSBzb3VyY2UsIGkuZS4gZUlEQVMsIGVkdWdhaW4gZXRjXHJcbiAgICAgIHRoaXMua2V5ID0ga2V5IC8vZGVub3RlcyBhdHRyaWJ1dGUgbmFtZSBlLmcuIHBlcnNvbklkZW50aWZpZXJcclxuICAgIH1cclxuICB9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgd2l0aFJlZHV4U3RvcmUgZnJvbSAnLi4vbGliL3dpdGgtcmVkdXgtc3RvcmUnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJlZHV4U3RvcmUgfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxQcm92aWRlciBzdG9yZT17cmVkdXhTdG9yZX0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4U3RvcmUoTXlBcHApIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBVc2VyU2VsZWN0aW9uIGZyb20gXCIuL21vZGVsL3VzZXJTZWxlY3Rpb25cIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBjb3VudDogMCxcclxuICBxckRhdGE6IG51bGwsXHJcbiAgZmV0Y2hpbmc6IGZhbHNlLFxyXG4gIHJlcXVlc3RTaWduYXR1cmU6IG51bGwsXHJcbiAgc2Vzc2lvbkRhdGE6IG51bGwsXHJcbiAgc2VydmVyU2Vzc2lvbklkOiBudWxsLFxyXG4gIHV1aWQ6IG51bGwsXHJcbiAgdmNTZW50OiBmYWxzZSxcclxuICB1c2VyU2VsZWN0aW9uOiBbXSwgLy8gdGhlIGF0dHJpYnV0ZXMgc2VsZWN0ZWQgYnkgdGhlIHVzZXIgdG8gYmUgaW5jbHVkZWQgaW4gYSBWQyxcclxuICBlbmRwb2ludDogbnVsbCwgLy8gdGhlIGJhY2tlbmQgc2VydmVyIHVybCByb290LlxyXG4gIGNhcmRJbmRleDogMSxcclxuICBzdGVwcGVyU3RlcHM6IFtdLFxyXG4gIGJhc2VVcmw6IFwiXCIsXHJcbiAgRElEOiBmYWxzZSwgLy9ib29sZWFuLCBkZW5vdGluZyB0aGF0IERJRCBjb25uZWN0aW9uIHJlc3BvbnNlIGhhcyBiZWVuIHJlY2VpdmVkIGZvciB0aGlzIHNlc3Npb25cclxuICBzZWFsU2Vzc2lvbjogXCJcIixcclxuICBkaWRBdXRoQ2FsbGJhY2s6IFwiXCIsIC8vIGNhbGxiYWNrIGFkZHJlc3Mgc2V0IGJ5IHRoZSBjYWxsZXIgdG8gcmVkaXJlY3QgdG8gYWZ0ZXIgRElEIGF1dGgsXHJcbiAgZWlkYXNVcmk6IFwiXCIsXHJcbiAgZWlkYXNQb3J0OiBcIlwiLFxyXG4gIGVpZGFzUmVkaXJlY3RVcmk6IFwiXCIsXHJcblxyXG4gIGVkdWdhaW5Vcmk6IFwiXCIsXHJcbiAgZWR1Z2FpblBvcnQ6IFwiXCIsXHJcbiAgZWR1Z2FpblJlZGlyZWN0VXJpOiBcIlwiLFxyXG4gIHZjRmFpbGVkOiBmYWxzZSxcclxuICBjcmVkUVJPZmZlcjogXCJcIixcclxuICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICBHRVRfUVJfQVVUSF9SRVNQT05TRTogXCJHRVRfUVJfQVVUSF9SRVNQT05TRVwiLFxyXG4gIE1BS0VfUVJfQVVUSF9SRVFVRVNUOiBcIk1BS0VfUVJfQVVUSF9SRVFVRVNUXCIsXHJcblxyXG4gIE1BS0VfVkNfUVJfUkVRVUVTVDogXCJNQUtFX1ZDX1FSX1JFUVVFU1RcIiwgLy9tYWtlIGEgcmVxdWVzdCB0byBnZW5lcmF0ZSBhIFZDIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBhdHRyaWJ1dGVzXHJcbiAgR0VUX1ZDX1FSX1JFU1BPTlNFOiBcIkdFVF9WQ19RUl9SRVFVRVNUXCIsXHJcblxyXG4gIFNFVF9BVFRSSUJVVEVTX1NFTEVDVElPTjogXCJTRVRfQVRUUklCVVRFU19TRUxFQ1RJT05cIiwgLy9hZGRzIGFuIGFycmF5IGFzIHRoZSB1c2VyICBzZWxlY3RlZCBhdHRpcnVidGVzXHJcbiAgQUREX1NFVF9UT19BVFRSSUJVVEVTX1NFTEVDVElPTjogXCJBRERfU0VUX1RPX0FUVFJJQlVURVNfU0VMRUNUSU9OXCIsIC8vYWRkcyB0aGUgcGF5bG9hZCB0byB0aGUgdXNlclNlbGVjdGlvblxyXG4gIEFERF9BVFRSSUJVVEVTX1RPX1NFTEVDVElPTjogXCJBRERfQVRUUklCVVRFU19UT19TRUxFQ1RJT05cIiwgLy9hZGRzIHRoZSBwYXlsb2FkIHRvIHRoZSB1c2VyU2VsZWN0aW9uXHJcbiAgLy8gdGhlIHNlbGVjdGlvbiB0YWtlcyBwbGFjZSB1c2luZyBpZGVudGlmaWVycyBmcm9tIHRoZSBzZXNzaW9uXHJcbiAgLy8gdGhhdCBhcmUgbWVhbmluZ2Z1bCB0byB0aGUgYmFja2VuZFxyXG4gIFJFTU9WRV9BVFRSSUJVVEVfRlJPTV9TRUxFQ1RJT046IFwiUkVNT1ZFX0FUVFJJQlVURV9GUk9NX1NFTEVDVElPTlwiLFxyXG5cclxuICBTRVRfU0VSVkVSX1NFU1NJT05fREFUQTogXCJTRVRfU0VSVkVSX1NFU1NJT05fREFUQVwiLFxyXG4gIFNFVF9TRVJWRVJfU0VTU0lPTl9JRDogXCJTRVRfU0VSVkVSX1NFU1NJT05fSURcIixcclxuICBWQ19TRU5UX1RPX1VTRVI6IFwiVkNfU0VOVF9UT19VU0VSXCIsXHJcbiAgU0VUX0VORFBPSU5UOiBcIlNFVF9FTkRfUE9JTlRcIixcclxuXHJcbiAgLy9cclxuICBJTkNSRUFTRV9DQVJEX0lOREVYOiBcIklOQ1JFQVNFX0NBUkRfSU5ERVhcIixcclxuICBERUNSRUFTRV9DQVJEX0lOREVYOiBcIkRFQ1JFQVNFX0NBUkRfSU5ERVhcIixcclxuICAvL1xyXG4gIFNFVF9TVEVQUEVSX1NURVBTOiBcIlNFVF9TVEVQUEVSX1NURVBTXCIsXHJcbiAgLy9cclxuICBTRVRfQkFTRV9VUkw6IFwiU0VUX0JBU0VfVVJMXCIsXHJcblxyXG4gIC8vXHJcbiAgU0VUX0RJRF9UUlVFOiBcIlNFU19ESURfVFJVRVwiLFxyXG5cclxuICBTRVRfU0VBTF9TRVNTSU9OOiBcIlNFVF9TRUFMX1NFU1NJT05cIixcclxuXHJcbiAgU0VUX0NBTExCQUNLOiBcIlNFVF9DQUxMQkFDS1wiLFxyXG4gIFNFVF9FSURBU19VUklfUE9SVDogXCJTRVRfRUlEQVNfVVJJX1BPUlRcIixcclxuICBTRVRfRUlEQVNfUkVESVJFQ1RfVVJJOiBcIlNFVF9FSURBU19SRURJUkVDVF9VUklcIixcclxuXHJcbiAgU0VUX0VEVUdBSU5fVVJJX1BPUlQ6IFwiU0VUX0VEVUdBSU5fVVJJX1BPUlRcIixcclxuICBTRVRfRURVR0FJTl9SRURJUkVDVF9VUkk6IFwiU0VUX0VEVUdBSU5fUkVESVJFQ1RfVVJJXCIsXHJcblxyXG4gIFZDX0lTU1VFX0ZBSUxFRDogXCJWQ19JU1NVRV9GQUlMRURcIixcclxuXHJcbiAgSk9MT19WQ19HRU5FUkFURUQ6IFwiSk9MT19WQ19HRU5FUkFURURcIixcclxufTtcclxuXHJcbi8vIFJFRFVDRVJTXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkpPTE9fVkNfR0VORVJBVEVEOlxyXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBjcmVkUVJPZmZlcjogYWN0aW9uLmRhdGF9XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5WQ19JU1NVRV9GQUlMRUQ6XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHZjRmFpbGVkOiB0cnVlfVxyXG4gICAgICBcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0VEVUdBSU5fUkVESVJFQ1RfVVJJOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGVkdWdhaW5SZWRpcmVjdFVyaTogYWN0aW9uLmRhdGEsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfRURVR0FJTl9VUklfUE9SVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBlZHVnYWluVXJpOiBhY3Rpb24uZGF0YS51cmksXHJcbiAgICAgICAgZWR1Z2FpblBvcnQ6IGFjdGlvbi5kYXRhLnBvcnQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfRUlEQVNfUkVESVJFQ1RfVVJJOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGVpZGFzUmVkaXJlY3RVcmk6IGFjdGlvbi5kYXRhLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0VJREFTX1VSSV9QT1JUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGVpZGFzVXJpOiBhY3Rpb24uZGF0YS51cmksXHJcbiAgICAgICAgZWlkYXNQb3J0OiBhY3Rpb24uZGF0YS5wb3J0LFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0NBTExCQUNLOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGRpZEF1dGhDYWxsYmFjazogYWN0aW9uLmRhdGEsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfU0VBTF9TRVNTSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNlYWxTZXNzaW9uOiBhY3Rpb24uZGF0YSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9ESURfVFJVRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBESUQ6IHRydWUsXHJcbiAgICAgICAgdXVpZDogYWN0aW9uLmRhdGEsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQkFTRV9VUkw6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYmFzZVVybDogYWN0aW9uLmRhdGEsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfU1RFUFBFUl9TVEVQUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzdGVwcGVyU3RlcHM6IGFjdGlvbi5kYXRhLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU5DUkVBU0VfQ0FSRF9JTkRFWDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJkSW5kZXg6IHN0YXRlLmNhcmRJbmRleCArIDEsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5ERUNSRUFTRV9DQVJEX0lOREVYOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcmRJbmRleDogc3RhdGUuY2FyZEluZGV4IC0gMSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9FTkRQT0lOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBlbmRwb2ludDogYWN0aW9uLmRhdGEsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlZDX1NFTlRfVE9fVVNFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB2Y1NlbnQ6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9TRVJWRVJfU0VTU0lPTl9EQVRBOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNlc3Npb25EYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAvLyB1c2VyRWR1R2FpbjogYWN0aW9uLmRhdGEuZWR1R0FJTixcclxuICAgICAgICAvLyB1c2VyRWlkYXM6IGFjdGlvbi5kYXRhLmVpZGFzLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5HRVRfUVJfQVVUSF9SRVNQT05TRTpcclxuICAgICAgLy8gY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGZldGNoaW5nOiBmYWxzZSxcclxuICAgICAgICBxckRhdGE6IGFjdGlvbi5kYXRhLnFyLFxyXG4gICAgICAgIHV1aWQ6IGFjdGlvbi5kYXRhLnV1aWQsXHJcbiAgICAgICAgcmVxdWVzdFNpZ25hdHVyZTogYWN0aW9uLmRhdGEuc2lnbmF0dXJlLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0FUVFJJQlVURVNfU0VMRUNUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJTZWxlY3Rpb246IGFjdGlvbi5kYXRhLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTUFLRV9RUl9BVVRIX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZmV0Y2hpbmc6IHRydWUsXHJcbiAgICAgICAgdmNTZW50OiBmYWxzZSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkFERF9BVFRSSUJVVEVTX1RPX1NFTEVDVElPTjoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJTZWxlY3Rpb246IFsuLi5zdGF0ZS51c2VyU2VsZWN0aW9uLCBhY3Rpb24uZGF0YV0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5BRERfU0VUX1RPX0FUVFJJQlVURVNfU0VMRUNUSU9OOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlclNlbGVjdGlvbjogWy4uLnN0YXRlLnVzZXJTZWxlY3Rpb24sIC4uLmFjdGlvbi5kYXRhXSxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9TRVJWRVJfU0VTU0lPTl9JRDoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNlcnZlclNlc3Npb25JZDogYWN0aW9uLmRhdGEsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5SRU1PVkVfQVRUUklCVVRFX0ZST01fU0VMRUNUSU9OOlxyXG4gICAgICBsZXQgbmV3U2VsZWN0aW9uID0gW1xyXG4gICAgICAgIC4uLnN0YXRlLnVzZXJTZWxlY3Rpb24uZmlsdGVyKChlbCwgaW5kKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gaW5kICE9PSBhY3Rpb24uaW5kZXg7XHJcbiAgICAgICAgfSksXHJcbiAgICAgIF07XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlclNlbGVjdGlvbjogbmV3U2VsZWN0aW9uLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBBQ1RJT05TXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9naW5DbGlja2VkKCkge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogYWN0aW9uVHlwZXMuTUFLRV9RUl9BVVRIX1JFUVVFU1QgfSk7XHJcbiAgICBheGlvcy5nZXQoXCJjb25uZWN0aW9uUmVxdWVzdFwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZ290IHRoZSBkYXRhIGZvcm0gdGhlIHNlcnZlclwiKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfUVJfQVVUSF9SRVNQT05TRSxcclxuICAgICAgICBkYXRhOiBkYXRhLmRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICAvLyByZXR1cm4gZGlzcGF0Y2ggPT4gYXhpb3MuZ2V0KCdodHRwczovLzM4ZGEwODllLm5ncm9rLmlvL2Nvbm5lY3Rpb25SZXF1ZXN0JylcclxuICAvLyAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiBkYXRhKVxyXG4gIC8vICAgICAudGhlbihpdGVtcyA9PiBkaXNwYXRjaCh7IHR5cGU6IGFjdGlvblR5cGVzLk1BS0VfUVJfQVVUSF9SRVFVRVNULCBpdGVtcyB9KSlcclxuICAvLyAgICAgLnRoZW4oICgpID0+e1xyXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwiZ290IHRoZXJlXCIpXHJcbiAgLy8gICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfUVJfQVVUSF9SRVNQT05TRSwgZGF0YTondGhlc2UgYXJlIG15IGF3ZXNvbWUgZGF0YScgfSlcclxuICAvLyAgICAgfSk7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBzZXRESURUcnVlKCkge1xyXG4vLyAgIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbi8vICAgICBkaXNwYXRjaCh7XHJcbi8vICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9ESURfVFJVRVxyXG4vLyAgICAgfSk7XHJcbi8vICAgfTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0ZXBwZXJTdGVwcyhzdGVwcykge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX1NURVBQRVJfU1RFUFMsXHJcbiAgICAgIGRhdGE6IHN0ZXBzLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEJhc2VVcmwoYmFzZVVybCkge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0JBU0VfVVJMLFxyXG4gICAgICBkYXRhOiBiYXNlVXJsLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U2Vzc2lvbihzZXNzaW9uSWQsIHNlc3Npb25TdGF0dXMpIHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlNUQVJUX1NFU1NJT04sXHJcbiAgICAgIGRhdGE6IHsgc2Vzc2lvbklkOiBzZXNzaW9uSWQsIHN0YXR1czogc2Vzc2lvblN0YXR1cyB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlcnZlclNlc3Npb25JZChzZXNzaW9uSWQpIHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9TRVJWRVJfU0VTU0lPTl9JRCxcclxuICAgICAgZGF0YTogc2Vzc2lvbklkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlc3Npb25EYXRhKHNlc3Npb25EYXRhKSB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYHN0b3JlLmpzIHNldFNlc3Npb25EYXRhIGNhbGxlZCB3aXRoOjpgKTtcclxuICAgIGNvbnNvbGUubG9nKHNlc3Npb25EYXRhKVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfU0VSVkVSX1NFU1NJT05fREFUQSxcclxuICAgICAgZGF0YTogc2Vzc2lvbkRhdGEsXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlckF0dHJpYnV0ZVNlbGVjdGlvbihzZWxlY3RlZEF0dHJpYnV0ZXMpIHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9BVFRSSUJVVEVTX1NFTEVDVElPTixcclxuICAgICAgZGF0YTogc2VsZWN0ZWRBdHRyaWJ1dGVzLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVNlc3Npb24oc2Vzc2lvblN0YXR1cykge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGxldCB0b0Rpc3BhdGNoID0ge1xyXG4gICAgICB0eXBlOiBhY3Rpb25UeXBlcy5VUERBVEVfU0VTU0lPTixcclxuICAgICAgZGF0YTogeyBzdGF0dXM6IHNlc3Npb25TdGF0dXMgfSxcclxuICAgIH07XHJcbiAgICBkaXNwYXRjaCh0b0Rpc3BhdGNoKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RW5kcG9pbnQoZW5kcG9pbnQpIHtcclxuICBjb25zb2xlLmxvZyhcInN0b3JlLmpzIHNldHRpbmcgZW5kcG9pbnQgdG8gXCIgKyBlbmRwb2ludClcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBsZXQgdG9EaXNwYXRjaCA9IHtcclxuICAgICAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0VORFBPSU5ULFxyXG4gICAgICBkYXRhOiBlbmRwb2ludCxcclxuICAgIH07XHJcbiAgICBkaXNwYXRjaCh0b0Rpc3BhdGNoKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9TZWxlY3Rpb24oaW5kZXgsIHNvdXJjZSkge1xyXG4gIC8vIGNvbnNvbGUubG9nKGBzdG9yZS5qczo6IHdpbGwgYWRkIHRvIHNlbGVjaXRvbiAke2luZGV4fSAsICR7c291cmNlfWApO1xyXG4gIGNvbnN0IGRhdGEgPSBuZXcgVXNlclNlbGVjdGlvbihpbmRleCwgc291cmNlKTtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkFERF9BVFRSSUJVVEVTX1RPX1NFTEVDVElPTixcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRTZXRUb1NlbGVjdGlvbihzZXRBcnJheSkge1xyXG4gIGNvbnN0IGRhdGEgPSBbXTtcclxuICBzZXRBcnJheS5mb3JFYWNoKChhdHRyT2JqKSA9PiB7XHJcbiAgICBPYmplY3Qua2V5cyhhdHRyT2JqKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhgd2lsbCBmZXRjaCBrZXkgJHtrZXl9IGZyb21gIClcclxuICAgICAgZGF0YS5wdXNoKG5ldyBVc2VyU2VsZWN0aW9uKGtleSwgYXR0ck9iai5zb3VyY2UpKTtcclxuICAgICAgcmV0dXJuIG5ldyBVc2VyU2VsZWN0aW9uKGtleSwgYXR0ck9ialtrZXldKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogYWN0aW9uVHlwZXMuQUREX1NFVF9UT19BVFRSSUJVVEVTX1NFTEVDVElPTixcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tU2VsZWN0aW9uKGluZGV4KSB7XHJcbiAgLy8gY29uc29sZS5sb2coYHN0b3JlLmpzIHdpbGwgcmVtb3ZlIGZyb20gIHNlbGVjaXRvbiAke2luZGV4fWApO1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGxldCB0b0Rpc3BhdGNoID0ge1xyXG4gICAgICB0eXBlOiBhY3Rpb25UeXBlcy5SRU1PVkVfQVRUUklCVVRFX0ZST01fU0VMRUNUSU9OLFxyXG4gICAgICBpbmRleDogaW5kZXgsXHJcbiAgICB9O1xyXG5cclxuICAgIGRpc3BhdGNoKHRvRGlzcGF0Y2gpO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2Y1NlbnRUb1VzZXIoKSB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgbGV0IHRvRGlzcGF0Y2ggPSB7XHJcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlZDX1NFTlRfVE9fVVNFUixcclxuICAgIH07XHJcbiAgICBkaXNwYXRjaCh0b0Rpc3BhdGNoKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5jcmVhc2VDYXJkSW5kZXgoKSB7XHJcbiAgLy8gY29uc29sZS5sb2coYHN0b3JlLmpzIHdpbGwgcmVtb3ZlIGZyb20gIHNlbGVjaXRvbiAke2luZGV4fWApO1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGxldCB0b0Rpc3BhdGNoID0ge1xyXG4gICAgICB0eXBlOiBhY3Rpb25UeXBlcy5JTkNSRUFTRV9DQVJEX0lOREVYLFxyXG4gICAgfTtcclxuICAgIGRpc3BhdGNoKHRvRGlzcGF0Y2gpO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWNyZWFzZUNhcmRJbmRleCgpIHtcclxuICAvLyBjb25zb2xlLmxvZyhgc3RvcmUuanMgd2lsbCByZW1vdmUgZnJvbSAgc2VsZWNpdG9uICR7aW5kZXh9YCk7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgbGV0IHRvRGlzcGF0Y2ggPSB7XHJcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkRFQ1JFQVNFX0NBUkRfSU5ERVgsXHJcbiAgICB9O1xyXG4gICAgZGlzcGF0Y2godG9EaXNwYXRjaCk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RWQ2dlbmVyYXRpb24oXHJcbiAgdXJsLFxyXG4gIHNlbGVjdGVkQXR0cmlidXRlcyxcclxuICB2Y1R5cGUsXHJcbiAgaXNNb2JpbGUgPSBmYWxzZVxyXG4pIHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IGFjdGlvblR5cGVzLk1BS0VfUVJfQVVUSF9SRVFVRVNUIH0pO1xyXG5cclxuICAgIGxldCBib2R5Rm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGJvZHlGb3JtRGF0YS5zZXQoXCJkYXRhXCIsIHNlbGVjdGVkQXR0cmlidXRlcyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIFwic3RvcmUuanMgLSByZXF1ZXN0VkNnZW5lcmF0aW9uOjogd2lsbCBtYWtlIFZDIGdlbmVyYXRpb24gcmVxdWVzdFwiXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coYHN0b3JlLmpzIC0gcmVxdWVzdFZDZ2VuZXJhdGlvbjo6IGZvciB0aGUgdXJsICR7dXJsfWApO1xyXG4gICAgLy8gY29uc29sZS5sb2coYHN0b3JlLmpzIC0gcmVxdWVzdFZDZ2VuZXJhdGlvbjo6IHdpdGggZGF0YWApXHJcbiAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZEF0dHJpYnV0ZXMpO1xyXG4gICAgLy8gY29uc29sZS5sb2coaXNNb2JpbGUpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QodXJsLCB7XHJcbiAgICAgICAgZGF0YTogc2VsZWN0ZWRBdHRyaWJ1dGVzLFxyXG4gICAgICAgIHZjVHlwZTogdmNUeXBlLFxyXG4gICAgICAgIGlzTW9iaWxlOiBpc01vYmlsZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgIFwic3RvcmUuanMtIHJlcXVlc3RWQ2dlbmVyYXRpb246OiBnb3QgdGhlIGRhdGEgZm9ybSB0aGUgc2VydmVyXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RvcmUuanMtIHJlcXVlc3RWQ2dlbmVyYXRpb246OiBnb3QgdmNUeXBlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZjVHlwZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfUVJfQVVUSF9SRVNQT05TRSxcclxuICAgICAgICAgIGRhdGE6IGRhdGEuZGF0YSxcclxuICAgICAgICAgIHZjVHlwZTogdmNUeXBlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNvbm5lY3Rpb25SZXF1ZXN0KCkge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogYWN0aW9uVHlwZXMuTUFLRV9RUl9BVVRIX1JFUVVFU1QgfSk7XHJcbiAgICBheGlvcy5wb3N0KFwiL21ha2VDb25uZWN0aW9uUmVxdWVzdFwiLCB7fSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBcInN0b3JlLmpzOjogbWFrZUNvbm5lY3Rpb25SZXF1ZXN0IGdvdCB0aGUgZGF0YSBmb3JtIHRoZSBzZXJ2ZXJcIlxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkdFVF9RUl9BVVRIX1JFU1BPTlNFLFxyXG4gICAgICAgIGRhdGE6IGRhdGEuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGxldGVESURBdXRoKHV1aWQpIHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IGFjdGlvblR5cGVzLlNFVF9ESURfVFJVRSwgZGF0YTogdXVpZCB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUFuZFB1c2hWQyhcclxuICB1cmwsXHJcbiAgc2VsZWN0ZWRBdHRyaWJ1dGVzLFxyXG4gIHZjVHlwZSxcclxuICBzZWFsU2Vzc2lvbixcclxuICBpc01vYmlsZSA9IGZhbHNlXHJcbikge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGxldCBib2R5Rm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGJvZHlGb3JtRGF0YS5zZXQoXCJkYXRhXCIsIHNlbGVjdGVkQXR0cmlidXRlcyk7XHJcbiAgICBjb25zb2xlLmxvZyhcInN0b3JlLmpzIC0gbWFrZUFuZFB1c2hWQzo6IHdpbGwgbWFrZSBWQyBnZW5lcmF0aW9uIHJlcXVlc3RcIik7XHJcblxyXG4gICAgY29uc29sZS5sb2coYHN0b3JlLmpzIDo6IG1ha2VhbmRwdXNoVkM6OiAke3VybH0sIGFuZCAke3ZjVHlwZX1gKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KHVybCwge1xyXG4gICAgICAgIGRhdGE6IHNlbGVjdGVkQXR0cmlidXRlcyxcclxuICAgICAgICBzZWFsU2Vzc2lvbjogc2VhbFNlc3Npb24sXHJcbiAgICAgICAgdmNUeXBlOiB2Y1R5cGUsXHJcbiAgICAgICAgaXNNb2JpbGU6IGlzTW9iaWxlLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RvcmUuanMtIG1ha2VBbmRQdXNoVkM6OiBnb3QgdGhlIGRhdGEgZm9ybSB0aGUgc2VydmVyXCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogYWN0aW9uVHlwZXMuVkNfU0VOVF9UT19VU0VSIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RvcmUuanMtIG1ha2VBbmRQdXNoVkM6OiBFUlJPUlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogYWN0aW9uVHlwZXMuVkNfSVNTVUVfRkFJTEVEIH0pO1xyXG4gICAgICB9KTtcclxuICAgIC8vVE9ETyBhZGQgaGVyZSBhbiBhY3Rpb24gZGVub3RpbmcgdGhhdCB0aGUgVkMgd2FzIHNlbnRcclxuICB9O1xyXG59XHJcblxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIG1ha2VBbmRQdXNoVkNKb2xvKFxyXG4vLyAgIHVybCxcclxuLy8gICBzZWxlY3RlZEF0dHJpYnV0ZXMsXHJcbi8vICAgdmNUeXBlLFxyXG4vLyAgIHNlYWxTZXNzaW9uLFxyXG4vLyAgIGlzTW9iaWxlID0gZmFsc2VcclxuLy8gKSB7XHJcbi8vICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4vLyAgICAgbGV0IGJvZHlGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4vLyAgICAgYm9keUZvcm1EYXRhLnNldChcImRhdGFcIiwgc2VsZWN0ZWRBdHRyaWJ1dGVzKTtcclxuICAgIFxyXG4vLyAgICAgYXhpb3NcclxuLy8gICAgICAgLnBvc3QodXJsLCB7XHJcbi8vICAgICAgICAgZGF0YTogc2VsZWN0ZWRBdHRyaWJ1dGVzLFxyXG4vLyAgICAgICAgIHNlYWxTZXNzaW9uOiBzZWFsU2Vzc2lvbixcclxuLy8gICAgICAgICB2Y1R5cGU6IHZjVHlwZSxcclxuLy8gICAgICAgICBpc01vYmlsZTogaXNNb2JpbGUsXHJcbi8vICAgICAgIH0pXHJcbi8vICAgICAgIC50aGVuKChyZXNwKSA9PiB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocmVzcClcclxuLy8gICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGFjdGlvblR5cGVzLkpPTE9fVkNfR0VORVJBVEVELCBkYXRhOiByZXNwLmRhdGEucXIgfSk7XHJcbi8vICAgICAgIH0pXHJcbi8vICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJzdG9yZS5qcy0gbWFrZUFuZFB1c2hWQzo6IEVSUk9SXCIpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbi8vICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBhY3Rpb25UeXBlcy5WQ19JU1NVRV9GQUlMRUQgfSk7XHJcbi8vICAgICAgIH0pO1xyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0VkMoXHJcbiAgdXJsLFxyXG4gIHZjVHlwZSxcclxuICBzZWFsU2Vzc2lvbixcclxuICBpc01vYmlsZSA9IGZhbHNlXHJcbikge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KHVybCwge1xyXG4gICAgICAgIHNlYWxTZXNzaW9uOiBzZWFsU2Vzc2lvbixcclxuICAgICAgICB2Y1R5cGU6IHZjVHlwZSxcclxuICAgICAgICBpc01vYmlsZTogaXNNb2JpbGUsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdG9yZS5qcyByZXF1ZXN0VkNfcmVzcG9uc2VcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwKVxyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogYWN0aW9uVHlwZXMuSk9MT19WQ19HRU5FUkFURUQsIGRhdGE6IHJlc3AuZGF0YS5xciB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0b3JlLmpzLSBtYWtlQW5kUHVzaFZDOjogRVJST1JcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGFjdGlvblR5cGVzLlZDX0lTU1VFX0ZBSUxFRCB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWFsU2Vzc2lvbihzZXNzaW9uSWQpIHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9TRUFMX1NFU1NJT04sXHJcbiAgICAgIGRhdGE6IHNlc3Npb25JZCxcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlU2VhbFNlc3Npb24oYmFzZVVybCkge1xyXG4gIGNvbnNvbGUubG9nKFwic3RvcmU6OiBtYWtlU2VhbFNlc3Npb25cIik7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgYXhpb3MucG9zdChgJHtiYXNlVXJsfXNlYWwvc3RhcnQtc2Vzc2lvbmAsIHt9KS50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3RvcmUuanM6OiBtYWtlU2VhbFNlc3Npb25cIik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3AuZGF0YSk7XHJcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX1NFQUxfU0VTU0lPTixcclxuICAgICAgICBkYXRhOiByZXNwLmRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VPbmx5Q29ubmVjdGlvblJlcXVlc3QoXHJcbiAgc2VhbFNlc3Npb24sXHJcbiAgYmFzZVVybCxcclxuICB2Y1R5cGUgPVwiZGlkQXV0aFwiLFxyXG4gIGlzTW9iaWxlXHJcbikge1xyXG4gIGxldCBwb3N0RGF0YSA9IHtcclxuICAgIHNlYWxTZXNzaW9uOiBzZWFsU2Vzc2lvbixcclxuICAgIHZjVHlwZTogdmNUeXBlLFxyXG4gIH07XHJcblxyXG4gIGlmIChpc01vYmlsZSkge1xyXG4gICAgcG9zdERhdGEuaXNNb2JpbGUgPSBpc01vYmlsZTtcclxuICB9XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBhY3Rpb25UeXBlcy5NQUtFX1FSX0FVVEhfUkVRVUVTVCB9KTtcclxuICAgIGF4aW9zLnBvc3QoYCR7YmFzZVVybH1vbmx5Q29ubmVjdGlvblJlcXVlc3RgLCBwb3N0RGF0YSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBcInN0b3JlLmpzIC0tIG9ubHlDb25uZWN0aW9uUmVxdWVzdDo6IGdvdCB0aGUgZGF0YSBmb3JtIHRoZSBzZXJ2ZXJcIlxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkdFVF9RUl9BVVRIX1JFU1BPTlNFLFxyXG4gICAgICAgIGRhdGE6IGRhdGEuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNlYWxTZXNzaW9uV2l0aERJRENvbm5lY2V0aW9uUmVxdWVzdChcclxuICBiYXNlVXJsLFxyXG4gIHZjVHlwZSxcclxuICBpc01vYmlsZVxyXG4pIHtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIGBzdG9yZS5qczo6IG1ha2VTZWFsU2Vzc2lvbldpdGhESURDb25uZWNldGlvblJlcXVlc3QgIHRoZSBiYXNlIHVybCBpcy0tPiR7YmFzZVVybH08LS1gXHJcbiAgKTtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBsZXQgc2Vzc2lvbklkID0gXCJcIjtcclxuICAgIGxldCBwb3N0VXJsID0gYmFzZVVybD9gJHtiYXNlVXJsfXNlYWwvc3RhcnQtc2Vzc2lvbmA6YC9zZWFsL3N0YXJ0LXNlc3Npb25gXHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChwb3N0VXJsLCB7fSlcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgICBzZXNzaW9uSWQgPSByZXNwLmRhdGE7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9TRUFMX1NFU1NJT04sXHJcbiAgICAgICAgICBkYXRhOiByZXNwLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1ha2VTZWFsU2Vzc2lvbldpdGhESURDb25uZWNldGlvblJlcXVlc3RcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhgaXNNb2JpbGU/ICR7aXNNb2JpbGV9YCk7XHJcbiAgICAgICAgbGV0IHBvc3RVcmwgPSBiYXNlVXJsP2Ake2Jhc2VVcmx9bWFrZUNvbm5lY3Rpb25SZXF1ZXN0YDpgL21ha2VDb25uZWN0aW9uUmVxdWVzdGBcclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgLnBvc3QocG9zdFVybCwge1xyXG4gICAgICAgICAgICBzZWFsU2Vzc2lvbjogc2Vzc2lvbklkLFxyXG4gICAgICAgICAgICBiYXNlVXJsOiBiYXNlVXJsLFxyXG4gICAgICAgICAgICB2Y1R5cGU6IHZjVHlwZSxcclxuICAgICAgICAgICAgaXNNb2JpbGU6IGlzTW9iaWxlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuR0VUX1FSX0FVVEhfUkVTUE9OU0UsXHJcbiAgICAgICAgICAgICAgZGF0YTogZGF0YS5kYXRhLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGlkQ2FsbGJhY2soY2FsbGJhY2spIHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9DQUxMQkFDSyxcclxuICAgICAgZGF0YTogY2FsbGJhY2ssXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RWlkYXNVcmlQb3J0KHVyaSwgcG9ydCkge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0VJREFTX1VSSV9QT1JULFxyXG4gICAgICBkYXRhOiB7IHVyaTogdXJpLCBwb3J0OiBwb3J0IH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RWlkYXNSZWRpcmVjdFVyaSh1cmkpIHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9FSURBU19SRURJUkVDVF9VUkksXHJcbiAgICAgIGRhdGE6IHVyaSxcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRFZHVnYWluUmVkaXJlY3RVcmkodXJpKSB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfRURVR0FJTl9SRURJUkVDVF9VUkksXHJcbiAgICAgIGRhdGE6IHVyaSxcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RWR1Z2FpblVyaVBvcnQodXJpLCBwb3J0KSB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfRURVR0FJTl9VUklfUE9SVCxcclxuICAgICAgZGF0YTogeyB1cmk6IHVyaSwgcG9ydDogcG9ydCB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSA9IGluaXRpYWxTdGF0ZSkgPT4ge1xyXG4gIHJldHVybiBjcmVhdGVTdG9yZShcclxuICAgIHJlZHVjZXIsXHJcbiAgICBwcmVsb2FkZWRTdGF0ZSxcclxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXHJcbiAgKTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=