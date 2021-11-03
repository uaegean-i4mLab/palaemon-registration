module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/kyb/company-selection.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/Card/Card.js":
/*!*********************************!*\
  !*** ./components/Card/Card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styles_jss_nextjs_material_kit_components_cardStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/components/cardStyle.js */ "./styles/jss/nextjs-material-kit/components/cardStyle.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(styles_jss_nextjs_material_kit_components_cardStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
function Card(props) {
  const classes = useStyles();

  const {
    className,
    children,
    plain,
    carousel
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "plain", "carousel"]);

  const cardClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [className]: className !== undefined
  });
  return __jsx("div", _extends({
    className: cardClasses
  }, rest), children);
}
Card.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  carousel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};

/***/ }),

/***/ "./components/Card/CardBody.js":
/*!*************************************!*\
  !*** ./components/Card/CardBody.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styles_jss_nextjs_material_kit_components_cardBodyStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/components/cardBodyStyle.js */ "./styles/jss/nextjs-material-kit/components/cardBodyStyle.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(styles_jss_nextjs_material_kit_components_cardBodyStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
function CardBody(props) {
  const classes = useStyles();

  const {
    className,
    children
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children"]);

  const cardBodyClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [classes.cardBody]: true,
    [className]: className !== undefined
  });
  return __jsx("div", _extends({
    className: cardBodyClasses
  }, rest), children);
}
CardBody.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};

/***/ }),

/***/ "./components/Card/CardFooter.js":
/*!***************************************!*\
  !*** ./components/Card/CardFooter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styles_jss_nextjs_material_kit_components_cardFooterStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/components/cardFooterStyle.js */ "./styles/jss/nextjs-material-kit/components/cardFooterStyle.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(styles_jss_nextjs_material_kit_components_cardFooterStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
function CardFooter(props) {
  const classes = useStyles();

  const {
    className,
    children
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children"]);

  const cardFooterClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [classes.cardFooter]: true,
    [className]: className !== undefined
  });
  return __jsx("div", _extends({
    className: cardFooterClasses
  }, rest), children);
}
CardFooter.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};

/***/ }),

/***/ "./components/Card/CardHeader.js":
/*!***************************************!*\
  !*** ./components/Card/CardHeader.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styles_jss_nextjs_material_kit_components_cardHeaderStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/components/cardHeaderStyle.js */ "./styles/jss/nextjs-material-kit/components/cardHeaderStyle.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(styles_jss_nextjs_material_kit_components_cardHeaderStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
function CardHeader(props) {
  const classes = useStyles();

  const {
    className,
    children,
    color,
    plain
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "color", "plain"]);

  const cardHeaderClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [className]: className !== undefined
  });
  return __jsx("div", _extends({
    className: cardHeaderClasses
  }, rest), children);
}
CardHeader.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["warning", "success", "danger", "info", "primary"]),
  plain: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};

/***/ }),

/***/ "./components/CustomButtons/Button.js":
/*!********************************************!*\
  !*** ./components/CustomButtons/Button.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styles_jss_nextjs_material_kit_components_buttonStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/components/buttonStyle.js */ "./styles/jss/nextjs-material-kit/components/buttonStyle.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components


 // core components


const makeComponentStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default()(() => _objectSpread({}, styles_jss_nextjs_material_kit_components_buttonStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]));
const RegularButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["color", "round", "children", "fullWidth", "disabled", "simple", "size", "block", "link", "justIcon", "className"]);

  const classes = makeComponentStyles();
  const btnClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className
  });
  return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({}, rest, {
    ref: ref,
    classes: {
      root: btnClasses
    }
  }), children);
});
RegularButton.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["primary", "info", "success", "warning", "danger", "rose", "white", "facebook", "twitter", "google", "github", "transparent"]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["sm", "lg"]),
  simple: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  round: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  block: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  justIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (RegularButton);

/***/ }),

/***/ "./components/CustomDropdown/CustomDropdown.js":
/*!*****************************************************!*\
  !*** ./components/CustomDropdown/CustomDropdown.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomDropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuList */ "@material-ui/core/MenuList");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "@material-ui/core/ClickAwayListener");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grow */ "@material-ui/core/Grow");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Popper */ "@material-ui/core/Popper");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var styles_jss_nextjs_material_kit_components_customDropdownStyle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/components/customDropdownStyle.js */ "./styles/jss/nextjs-material-kit/components/customDropdownStyle.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components









 // core components



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(styles_jss_nextjs_material_kit_components_customDropdownStyle_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
function CustomDropdown(props) {
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

  const handleClick = event => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = param => {
    setAnchorEl(null);

    if (props && props.onClick) {
      props.onClick(param);
    }
  };

  const handleCloseAway = event => {
    if (anchorEl.contains(event.target)) {
      return;
    }

    setAnchorEl(null);
  };

  const classes = useStyles();
  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    left,
    rtlActive,
    noLiPadding,
    navDropdown
  } = props;
  const caretClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [classes.caret]: true,
    [classes.caretActive]: Boolean(anchorEl),
    [classes.caretRTL]: rtlActive
  });
  const dropdownItem = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [classes.dropdownItem]: true,
    [classes[hoverColor + "Hover"]]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive
  });
  let icon = null;

  switch (typeof buttonIcon) {
    case "object":
      icon = __jsx(props.buttonIcon, {
        className: classes.buttonIcon
      });
      break;

    case "string":
      icon = __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.buttonIcon
      }, props.buttonIcon);
      break;

    default:
      icon = null;
      break;
  }

  return __jsx("div", null, __jsx("div", null, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({
    "aria-label": "Notifications",
    "aria-owns": anchorEl ? "menu-list" : null,
    "aria-haspopup": "true"
  }, buttonProps, {
    onClick: handleClick
  }), icon, buttonText !== undefined ? buttonText : null, caret ? __jsx("b", {
    className: caretClasses
  }) : null)), __jsx(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_11___default.a, {
    open: Boolean(anchorEl),
    anchorEl: anchorEl,
    transition: true,
    disablePortal: true,
    placement: dropup ? left ? "top-start" : "top" : left ? "bottom-start" : "bottom",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      [classes.popperClose]: !anchorEl,
      [classes.popperResponsive]: true,
      [classes.pooperNav]: Boolean(anchorEl) && navDropdown
    })
  }, () => __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8___default.a, {
    in: Boolean(anchorEl),
    id: "menu-list",
    style: dropup ? {
      transformOrigin: "0 100% 0"
    } : {
      transformOrigin: "0 0 0"
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.dropdown
  }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6___default.a, {
    onClickAway: handleCloseAway
  }, __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5___default.a, {
    role: "menu",
    className: classes.menuList
  }, dropdownHeader !== undefined ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: () => handleClose(dropdownHeader),
    className: classes.dropdownHeader
  }, dropdownHeader) : null, dropdownList.map((prop, key) => {
    if (prop.divider) {
      return __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9___default.a, {
        key: key,
        onClick: () => handleClose("divider"),
        className: classes.dropdownDividerItem
      });
    }

    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: key,
      onClick: () => handleClose(prop),
      className: dropdownItem
    }, prop);
  })))))));
}
CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};
CustomDropdown.propTypes = {
  hoverColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["black", "primary", "info", "success", "warning", "danger", "rose"]),
  buttonText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  buttonIcon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  dropdownList: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  buttonProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  dropup: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  dropdownHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  rtlActive: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  caret: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  noLiPadding: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  navDropdown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  // function that retuns the selected item
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/***/ }),

/***/ "./components/CustomInput/CustomInput.js":
/*!***********************************************!*\
  !*** ./components/CustomInput/CustomInput.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styles_jss_nextjs_material_kit_components_customInputStyle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/components/customInputStyle.js */ "./styles/jss/nextjs-material-kit/components/customInputStyle.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(styles_jss_nextjs_material_kit_components_customInputStyle_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
function CustomInput(props) {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success
  } = props;
  const labelClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white
  });
  const marginTop = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined
  });
  const inputClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.input]: true,
    [classes.whiteInput]: white
  });
  var formControlClasses;

  if (formControlProps !== undefined) {
    formControlClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }

  return __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({}, formControlProps, {
    className: formControlClasses
  }), labelText !== undefined ? __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
    className: classes.labelRoot + " " + labelClasses,
    htmlFor: id
  }, labelProps), labelText) : null, __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
    classes: {
      input: inputClasses,
      root: marginTop,
      disabled: classes.disabled,
      underline: underlineClasses
    },
    id: id,
    onChange: props.handleChange
  }, inputProps)));
}
CustomInput.propTypes = {
  labelText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  formControlProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  inputRootCustomClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  success: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  white: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styles_jss_nextjs_material_kit_components_footerStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/components/footerStyle.js */ "./styles/jss/nextjs-material-kit/components/footerStyle.js");
/* harmony import */ var _CustomButtons_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CustomButtons/Button */ "./components/CustomButtons/Button.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*eslint-disable*/
 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // material-ui core components


 // @material-ui/icons





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(styles_jss_nextjs_material_kit_components_footerStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function Footer(props) {
  const classes = useStyles();
  const {
    whiteFont
  } = props;
  const footerClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return __jsx("footer", {
    className: footerClasses
  }, __jsx("div", {
    className: classes.container
  }, __jsx("div", {
    className: classes.left
  }, __jsx("div", {
    className: "lfImgAndText"
  }, __jsx("div", {
    className: "lfImgAndText--text"
  }, __jsx("div", null, __jsx("b", null, "Co-financed by the European Union"), __jsx("hr", {
    className: "hrFtr"
  })), __jsx("div", null, "Connecting Europe Facility"))), __jsx("div", {
    className: "btmText"
  }, __jsx("p", null, "The UAegean ERASMUS myID Card Service has been co-financed", __jsx("br", null), "by the Connecting Europe Facility (CEF) of the European Union", __jsx("br", null), "(Seal Project: Grant Agreement No INEA/CEF/ICT/A2018/1633170)"))), __jsx("div", {
    className: classes.right
  }, __jsx("div", null, "University of the Aegean | Dpt of Financial and Management Engineering | i4m Lab"), __jsx("div", null, "Web address | Dpt: ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    simple: true,
    color: "primary",
    href: "http://www.fme.aegean.gr/"
  }, __jsx("a", null, "http://www.fme.aegean.gr/"))), __jsx("div", null, "Web address | i4m Lab: ", __jsx("a", {
    href: "http://www.atlantis-group.gr/i4Mlab"
  }, "http://www.atlantis-group.gr/i4Mlab")), __jsx("div", null, "e-mail: i4mlab-courses@aegean.gr"), __jsx("div", null, "Service developed by UAegean | i4m Lab \xA9 2021"))));
}
Footer.propTypes = {
  whiteFont: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./components/Forms/Form1.js":
/*!***********************************!*\
  !*** ./components/Forms/Form1.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Email */ "@material-ui/icons/Email");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/People */ "@material-ui/icons/People");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Card/CardHeader.js */ "./components/Card/CardHeader.js");
/* harmony import */ var components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Card/CardFooter.js */ "./components/Card/CardFooter.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_Stepper_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Stepper.js */ "./components/Stepper.js");
/* harmony import */ var styles_jss_nextjs_material_kit_pages_loginPage_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/pages/loginPage.js */ "./styles/jss/nextjs-material-kit/pages/loginPage.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // @material-ui/core components



 // @material-ui/icons


 // core components














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(styles_jss_nextjs_material_kit_pages_loginPage_js__WEBPACK_IMPORTED_MODULE_18__["default"]);
function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const rest = Object.assign({}, props);
  return __jsx("div", null, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
    absolute: true,
    color: "primary",
    brand: "NextJS Material Kit",
    rightLinks: __jsx(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }, rest)), __jsx("div", {
    className: classes.pageHeader,
    style: {
      // backgroundImage: "url('/img/bg7.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "top center"
    }
  }, __jsx("div", {
    className: classes.container
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    justifyContent: "center"
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 4,
    md: 10
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes[cardAnimaton]
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "primary",
    className: classes.cardHeader
  }, __jsx("h4", null, "Form Title"), __jsx(components_Stepper_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    steps: [{
      title: 'Step One'
    }, {
      title: 'Step Two'
    }, {
      title: 'Step Three'
    }, {
      title: 'Step Four'
    }, {
      title: 'Step Five'
    }, {
      title: 'Step Six'
    }, {
      title: 'Step Seven'
    }, {
      title: 'Step Eight'
    }],
    activeStep: 3
  })), __jsx("p", {
    className: classes.divider
  }, "In order to build your KYB profile, first provide your company\u2019s details below, and then click the \u201CRetrieve Data\u201D button. This will result in an eIDAS eID authentication."), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_13__["default"], null, __jsx("h4", {
    className: classes.textLeft
  }, "Company Details Form"), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    labelText: "Company Name",
    id: "companyName",
    formControlProps: {
      fullWidth: true
    },
    handleChange: props.handleChange
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    labelText: "Company Country",
    id: "companyCountry",
    formControlProps: {
      fullWidth: true
    },
    handleChange: props.handleChange
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    labelText: "LEI",
    id: "lei",
    formControlProps: {
      fullWidth: true
    },
    handleChange: props.handleChange
  }))), __jsx("h4", {
    className: classes.textLeft
  }, "Representative Form"), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    labelText: "Name",
    id: "name",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "text",
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default.a, {
        position: "end"
      }, __jsx(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: classes.inputIconsColor
      }))
    },
    handleChange: props.handleChange
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    labelText: "Surname",
    id: "surname",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "text",
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default.a, {
        position: "end"
      }, __jsx(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: classes.inputIconsColor
      }))
    },
    handleChange: props.handleChange
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    labelText: "email",
    id: "email",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "email",
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default.a, {
        position: "end"
      }, __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.inputIconsColor
      }))
    },
    handleChange: props.handleChange
  })))), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.cardFooter
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "primary",
    size: "lg"
  }, "Retrieve")))))), __jsx(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    whiteFont: true
  })));
}

/***/ }),

/***/ "./components/Forms/Form2.js":
/*!***********************************!*\
  !*** ./components/Forms/Form2.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Email */ "@material-ui/icons/Email");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/People */ "@material-ui/icons/People");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Card/CardHeader.js */ "./components/Card/CardHeader.js");
/* harmony import */ var components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Card/CardFooter.js */ "./components/Card/CardFooter.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_Stepper_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Stepper.js */ "./components/Stepper.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var styles_jss_nextjs_material_kit_pages_loginPage_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/pages/loginPage.js */ "./styles/jss/nextjs-material-kit/pages/loginPage.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // @material-ui/core components



 // @material-ui/icons


 // core components















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(styles_jss_nextjs_material_kit_pages_loginPage_js__WEBPACK_IMPORTED_MODULE_19__["default"]);
function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const rest = Object.assign({}, props);
  return __jsx("div", null, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
    absolute: true,
    color: "primary",
    brand: "NextJS Material Kit",
    rightLinks: __jsx(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }, rest)), __jsx("div", {
    className: classes.pageHeader,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "top center"
    }
  }, __jsx("div", {
    className: classes.container
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    justifyContent: "center"
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 4,
    md: 10
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes[cardAnimaton]
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "primary",
    className: classes.cardHeader
  }, __jsx("h4", null, "Mandate Validation"), __jsx(components_Stepper_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    steps: [{
      title: 'Step One'
    }, {
      title: 'Step Two'
    }, {
      title: 'Step Three'
    }, {
      title: 'Step Four'
    }, {
      title: 'Step Five'
    }, {
      title: 'Step Six'
    }, {
      title: 'Step Seven'
    }, {
      title: 'Step Eight'
    }],
    activeStep: 5
  })), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_13__["default"], null, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 12
  }, "Please validate your relationship with the declared company. To do so, click the Sign button. This will result in the signing via a qualified One Time Signature (issued using your eIDAS eID profile) of a document validating your relationship with the declared company. To review the document please click ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_18___default.a, {
    href: "#"
  }, __jsx("a", null, "here")), "."))), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.cardFooter
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "primary",
    size: "lg"
  }, "Sign")))))), __jsx(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    whiteFont: true
  })));
}

/***/ }),

/***/ "./components/Forms/Form3.js":
/*!***********************************!*\
  !*** ./components/Forms/Form3.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Email */ "@material-ui/icons/Email");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/People */ "@material-ui/icons/People");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Card/CardHeader.js */ "./components/Card/CardHeader.js");
/* harmony import */ var components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Card/CardFooter.js */ "./components/Card/CardFooter.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_Stepper_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Stepper.js */ "./components/Stepper.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var styles_jss_nextjs_material_kit_pages_loginPage_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/pages/loginPage.js */ "./styles/jss/nextjs-material-kit/pages/loginPage.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // @material-ui/core components



 // @material-ui/icons


 // core components















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(styles_jss_nextjs_material_kit_pages_loginPage_js__WEBPACK_IMPORTED_MODULE_19__["default"]);
function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const rest = Object.assign({}, props);
  return __jsx("div", null, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
    absolute: true,
    color: "primary",
    brand: "NextJS Material Kit",
    rightLinks: __jsx(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }, rest)), __jsx("div", {
    className: classes.pageHeader,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "top center"
    }
  }, __jsx("div", {
    className: classes.container
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    justifyContent: "center"
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 4,
    md: 10
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes[cardAnimaton]
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "primary",
    className: classes.cardHeader
  }, __jsx("h4", null, "Register"), __jsx(components_Stepper_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    steps: [{
      title: 'Step One'
    }, {
      title: 'Step Two'
    }, {
      title: 'Step Three'
    }, {
      title: 'Step Four'
    }, {
      title: 'Step Five'
    }, {
      title: 'Step Six'
    }, {
      title: 'Step Seven'
    }, {
      title: 'Step Eight'
    }],
    activeStep: 5
  })), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_13__["default"], null, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 12
  }, "Please review the attributes retrieved, presented below. If you are certain that these attributes correctly identify you please click the Next button. Additionally, if you would like to add your Company\u2019s KYB profile in the public registry in an easily Verifiable Format? If you opt in for this feature the public profile of your organization will be easily verified by anyone (public authorities, B2B transactions etc.) greatly facilitating your dealings with these parties. If Yes, please click the \u201CRegister\u201D button")), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    justifyContent: "center"
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    cs: 12,
    sm: 12,
    md: 8
  }, __jsx("h2", {
    className: classes.title
  }, "Attributes"), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textRight
  }, "Legal Name")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textLeft
  }, "360kompany AG")), __jsx("hr", {
    className: classes.hrLine
  }), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textRight
  }, "Legal Person Identifier")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textLeft
  }, "375714x")), __jsx("hr", {
    className: classes.hrLine
  }), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textRight
  }, "Jurisdiction Code")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textLeft
  }, "Dummy Jurisdiction Code")), __jsx("hr", {
    className: classes.hrLine
  }), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textRight
  }, "Business Role")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textLeft
  }, "Dummy Business Role")), __jsx("hr", {
    className: classes.hrLine
  }), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textRight
  }, "Address")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textLeft
  }, "Dummy address")), __jsx("hr", {
    className: classes.hrLine
  }), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textRight
  }, "LEI")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textLeft
  }, "529900ENKWV3BZ5GYL12")), __jsx("hr", {
    className: classes.hrLine
  }), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textRight
  }, "Vat Registration")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textLeft
  }, "ATU67091005")), __jsx("hr", {
    className: classes.hrLine
  }), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textRight
  }, "Birthdate")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textLeft
  }, "16/05/1984")), __jsx("hr", {
    className: classes.hrLine
  }), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textRight
  }, "Trading Status")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textLeft
  }, "LIVE")), __jsx("hr", {
    className: classes.hrLine
  }), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textRight
  }, "Given Name")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textLeft
  }, "John")), __jsx("hr", {
    className: classes.hrLine
  }), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textRight
  }, "Family Name")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textLeft
  }, "Doe")), __jsx("hr", {
    className: classes.hrLine
  }), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textRight
  }, "Sub Jurisdiction")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx("div", {
    className: classes.textLeft
  }, "AT")))))), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.cardFooter
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "primary",
    size: "lg"
  }, "Register")), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.cardFooterLeft
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "primary",
    size: "lg"
  }, "Next")))))), __jsx(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    whiteFont: true
  })));
}

/***/ }),

/***/ "./components/Forms/Form4.js":
/*!***********************************!*\
  !*** ./components/Forms/Form4.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Email */ "@material-ui/icons/Email");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/People */ "@material-ui/icons/People");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Card/CardHeader.js */ "./components/Card/CardHeader.js");
/* harmony import */ var components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Card/CardFooter.js */ "./components/Card/CardFooter.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_Stepper_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Stepper.js */ "./components/Stepper.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var styles_jss_nextjs_material_kit_pages_loginPage_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/pages/loginPage.js */ "./styles/jss/nextjs-material-kit/pages/loginPage.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // @material-ui/core components



 // @material-ui/icons


 // core components















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(styles_jss_nextjs_material_kit_pages_loginPage_js__WEBPACK_IMPORTED_MODULE_19__["default"]);
function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const rest = Object.assign({}, props);
  return __jsx("div", null, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
    absolute: true,
    color: "primary",
    brand: "NextJS Material Kit",
    rightLinks: __jsx(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }, rest)), __jsx("div", {
    className: classes.pageHeader,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "top center"
    }
  }, __jsx("div", {
    className: classes.container
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    justifyContent: "center"
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 4,
    md: 10
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes[cardAnimaton]
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "primary",
    className: classes.cardHeader
  }, __jsx("h4", null, "Scan QR code"), __jsx(components_Stepper_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    steps: [{
      title: 'Step One'
    }, {
      title: 'Step Two'
    }, {
      title: 'Step Three'
    }, {
      title: 'Step Four'
    }, {
      title: 'Step Five'
    }, {
      title: 'Step Six'
    }, {
      title: 'Step Seven'
    }, {
      title: 'Step Eight'
    }],
    activeStep: 5
  })), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_13__["default"], null, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 12
  }, "Please scan the following QR code with your Business Wallet to connect it to the service"), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 12
  }, __jsx("div", {
    className: classes.textCenter
  }, __jsx("img", {
    src: "https://myria.math.aegean.gr/~atsol/newpage/software/aegeanlogo/qrcodes/qrplain.png",
    alt: "..."
  }))))), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.cardFooter
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "primary",
    size: "lg"
  }, "Next")))))), __jsx(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    whiteFont: true
  })));
}

/***/ }),

/***/ "./components/Forms/Form5.js":
/*!***********************************!*\
  !*** ./components/Forms/Form5.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Email */ "@material-ui/icons/Email");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/People */ "@material-ui/icons/People");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Card/CardHeader.js */ "./components/Card/CardHeader.js");
/* harmony import */ var components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Card/CardFooter.js */ "./components/Card/CardFooter.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_Stepper_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Stepper.js */ "./components/Stepper.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var styles_jss_nextjs_material_kit_pages_loginPage_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/pages/loginPage.js */ "./styles/jss/nextjs-material-kit/pages/loginPage.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Check */ "@material-ui/icons/Check");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _Snackbar_SnackbarContent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../Snackbar/SnackbarContent */ "./components/Snackbar/SnackbarContent.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // @material-ui/core components



 // @material-ui/icons


 // core components

















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(styles_jss_nextjs_material_kit_pages_loginPage_js__WEBPACK_IMPORTED_MODULE_19__["default"]);
function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const rest = Object.assign({}, props);
  return __jsx("div", null, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
    absolute: true,
    color: "primary",
    brand: "NextJS Material Kit",
    rightLinks: __jsx(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }, rest)), __jsx("div", {
    className: classes.pageHeader,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "top center"
    }
  }, __jsx("div", {
    className: classes.container
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    justifyContent: "center"
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 4,
    md: 10
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes[cardAnimaton]
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "primary",
    className: classes.cardHeader
  }, __jsx("h4", null, "Success"), __jsx(components_Stepper_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    steps: [{
      title: 'Step One'
    }, {
      title: 'Step Two'
    }, {
      title: 'Step Three'
    }, {
      title: 'Step Four'
    }, {
      title: 'Step Five'
    }, {
      title: 'Step Six'
    }, {
      title: 'Step Seven'
    }, {
      title: 'Step Eight'
    }],
    activeStep: 5
  })), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_13__["default"], null, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 12
  }, __jsx(_Snackbar_SnackbarContent__WEBPACK_IMPORTED_MODULE_21__["default"], {
    message: __jsx("span", null, __jsx("b", null, "SUCCESS ALERT:"), " You", "'", "ve successfully registered."),
    close: true,
    color: "success",
    icon: _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_20___default.a
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 12
  }, "Registration Complete"))), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.cardFooter
  }))))), __jsx(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    whiteFont: true
  })));
}

/***/ }),

/***/ "./components/Forms/Form6.js":
/*!***********************************!*\
  !*** ./components/Forms/Form6.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Email */ "@material-ui/icons/Email");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/People */ "@material-ui/icons/People");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Card/CardHeader.js */ "./components/Card/CardHeader.js");
/* harmony import */ var components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Card/CardFooter.js */ "./components/Card/CardFooter.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_Stepper_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Stepper.js */ "./components/Stepper.js");
/* harmony import */ var styles_jss_nextjs_material_kit_pages_loginPage_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/pages/loginPage.js */ "./styles/jss/nextjs-material-kit/pages/loginPage.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // @material-ui/core components



 // @material-ui/icons


 // core components














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(styles_jss_nextjs_material_kit_pages_loginPage_js__WEBPACK_IMPORTED_MODULE_18__["default"]);
function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const rest = Object.assign({}, props);
  return __jsx("div", {
    className: classes.container
  }, __jsx("h4", {
    className: classes.textLeft
  }, "Company Details Form"), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    labelText: "Company Name",
    id: "companyName",
    formControlProps: {
      fullWidth: true
    },
    handleChange: props.handleChange
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    labelText: "Company Country",
    id: "companyCountry",
    formControlProps: {
      fullWidth: true
    },
    handleChange: props.handleChange
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    labelText: "LEI",
    id: "lei",
    formControlProps: {
      fullWidth: true
    },
    handleChange: props.handleChange
  }))), __jsx("h4", {
    className: classes.textLeft
  }, "Representative Form"), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    labelText: "Name",
    id: "name",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "text",
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default.a, {
        position: "end"
      }, __jsx(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: classes.inputIconsColor
      }))
    },
    handleChange: props.handleChange
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    labelText: "Surname",
    id: "surname",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "text",
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default.a, {
        position: "end"
      }, __jsx(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: classes.inputIconsColor
      }))
    },
    handleChange: props.handleChange
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    labelText: "email",
    id: "email",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "email",
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default.a, {
        position: "end"
      }, __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.inputIconsColor
      }))
    },
    handleChange: props.handleChange
  }))), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "primary",
    size: "lg"
  }, "Retrieve"));
}

/***/ }),

/***/ "./components/Grid/GridContainer.js":
/*!******************************************!*\
  !*** ./components/Grid/GridContainer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

 // @material-ui/core components



const styles = {
  grid: {
    marginRight: "0px",
    marginLeft: "-10px",
    width: "auto"
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles);
function GridContainer(props) {
  const classes = useStyles();

  const {
    children,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "className"]);

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    container: true
  }, rest, {
    className: classes.grid + " " + className
  }), children);
}
GridContainer.defaultProps = {
  className: ""
};
GridContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./components/Grid/GridItem.js":
/*!*************************************!*\
  !*** ./components/Grid/GridItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

 // @material-ui/core components



const styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles);
function GridItem(props) {
  const classes = useStyles();

  const {
    children,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "className"]);

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    item: true
  }, rest, {
    className: classes.grid + " " + className
  }), children);
}
GridItem.defaultProps = {
  className: ""
};
GridItem.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styles_jss_nextjs_material_kit_components_headerStyle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/components/headerStyle.js */ "./styles/jss/nextjs-material-kit/components/headerStyle.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components







 // @material-ui/icons

 // core components



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(styles_jss_nextjs_material_kit_components_headerStyle_js__WEBPACK_IMPORTED_MODULE_12__["default"]);
function Header(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }

    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerColorChange = () => {
    const {
      color,
      changeColorOnScroll
    } = props;
    const windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  const {
    color,
    rightLinks,
    leftLinks,
    brand,
    fixed,
    absolute
  } = props;
  const appBarClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });

  const brandComponent = __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/components",
    as: "/components"
  }, __jsx("img", {
    className: classes.resizeImg,
    src: "https://myria.math.aegean.gr/~atsol/newpage/software/aegeanlogo/svg/bold-logo_sfiga_uof_aegean_en-rv.svg",
    alt: "..."
  }));

  return __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: appBarClasses
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.container
  }, leftLinks !== undefined ? brandComponent : null, __jsx("div", {
    className: classes.flex
  }, leftLinks !== undefined ? __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
    smDown: true,
    implementation: "css"
  }, leftLinks) : brandComponent), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
    smDown: true,
    implementation: "css"
  }, rightLinks), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
    mdUp: true
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerToggle
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default.a, null)))), __jsx("div", {
    className: classes.headerDivider
  }), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
    mdUp: true,
    implementation: "js"
  }, __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "temporary",
    anchor: "right",
    open: mobileOpen,
    classes: {
      paper: classes.drawerPaper
    },
    onClose: handleDrawerToggle
  }, __jsx("div", {
    className: classes.appResponsive
  }, leftLinks, rightLinks))));
}
Header.defaultProp = {
  color: "white"
};
Header.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]),
  rightLinks: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  leftLinks: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  brand: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  absolute: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
    color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]).isRequired
  })
};

/***/ }),

/***/ "./components/Header/HeaderLinks.js":
/*!******************************************!*\
  !*** ./components/Header/HeaderLinks.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/CustomDropdown/CustomDropdown.js */ "./components/CustomDropdown/CustomDropdown.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var styles_jss_nextjs_material_kit_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/components/headerLinksStyle.js */ "./styles/jss/nextjs-material-kit/components/headerLinksStyle.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*eslint-disable*/

 // @material-ui/core components





 // @material-ui/icons



 // core components




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles_jss_nextjs_material_kit_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_12__["default"]);
function HeaderLinks(props) {
  const classes = useStyles();
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.list
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.listItem
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    href: "https://project-seal.eu/about",
    color: "transparent",
    target: "_blank",
    className: classes.navLink
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.Apps
  }, "apps"), " Seal")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.listItem
  }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "instagram-twitter",
    title: "Follow us on twitter",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    href: "https://twitter.com/CreativeTim?ref=creativetim",
    target: "_blank",
    color: "transparent",
    className: classes.navLink
  }, __jsx("i", {
    className: classes.socialIcons + " fab fa-twitter"
  })))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.listItem
  }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "instagram-facebook",
    title: "Follow us on facebook",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "transparent",
    href: "https://www.facebook.com/CreativeTim?ref=creativetim",
    target: "_blank",
    className: classes.navLink
  }, __jsx("i", {
    className: classes.socialIcons + " fab fa-facebook"
  })))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.listItem
  }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "instagram-tooltip",
    title: "Follow us on instagram",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "transparent",
    href: "https://www.instagram.com/CreativeTimOfficial?ref=creativetim",
    target: "_blank",
    className: classes.navLink
  }, __jsx("i", {
    className: classes.socialIcons + " fab fa-instagram"
  })))));
}

/***/ }),

/***/ "./components/InfoArea/InfoArea.js":
/*!*****************************************!*\
  !*** ./components/InfoArea/InfoArea.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoArea; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styles_jss_nextjs_material_kit_components_infoStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/components/infoStyle.js */ "./styles/jss/nextjs-material-kit/components/infoStyle.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(styles_jss_nextjs_material_kit_components_infoStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
function InfoArea(props) {
  const classes = useStyles();
  const {
    title,
    description,
    iconColor,
    vertical
  } = props;
  const iconWrapper = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  return __jsx("div", {
    className: classes.infoArea
  }, __jsx("div", {
    className: iconWrapper
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: props.urlLink
  }, __jsx("a", null, __jsx(props.icon, {
    className: iconClasses
  })))), __jsx("div", {
    className: classes.descriptionWrapper
  }, __jsx("h4", {
    className: classes.title
  }, title), __jsx("p", {
    className: classes.description
  }, description)));
}
InfoArea.defaultProps = {
  iconColor: "gray"
};
InfoArea.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]).isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  iconColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"]),
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./components/LayoutNew.js":
/*!*********************************!*\
  !*** ./components/LayoutNew.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LayoutNew; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Parallax/Parallax.js */ "./components/Parallax/Parallax.js");
/* harmony import */ var styles_jss_nextjs_material_kit_pages_landingPage_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/pages/landingPage.js */ "./styles/jss/nextjs-material-kit/pages/landingPage.js");
/* harmony import */ var pages_sections_LandingPage_Sections_ProductSection_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pages-sections/LandingPage-Sections/ProductSection.js */ "./pages-sections/LandingPage-Sections/ProductSection.js");
/* harmony import */ var pages_sections_LandingPage_Sections_TeamSection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pages-sections/LandingPage-Sections/TeamSection.js */ "./pages-sections/LandingPage-Sections/TeamSection.js");
/* harmony import */ var pages_sections_LandingPage_Sections_WorkSection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! pages-sections/LandingPage-Sections/WorkSection.js */ "./pages-sections/LandingPage-Sections/WorkSection.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
import Head from "next/head";
// import Header from "./Header.js";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = props => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      #__next,
      html,
      body,
      #__next > div {
        height: 100%;
      }

      .box-container {
        height: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
      }

      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .box-fill-v {
        flex: 1;
      }
    `}</style>
    <Header />
    <Container className="box-container">
      {props.children}
      {/!* <div className="box">this is the footer</div> *!/}
    </Container>
      <Footer />
  </div>
);

export default Layout;
*/
 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons
// core components








 // Sections for this page




const dashboardRoutes = [];
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles_jss_nextjs_material_kit_pages_landingPage_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
function LayoutNew(props, {
  children,
  home
}) {
  const classes = useStyles();
  const rest = Object.assign({}, props);
  return __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    direction: "column"
  }, __jsx("div", {
    className: classes.jss413
  }, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    absolute: true,
    color: "primary",
    brand: "NextJS Material Kit",
    rightLinks: __jsx(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }, rest))), __jsx("div", {
    className: classes.container
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 8
  }, __jsx("main", null, props.children)))), __jsx(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}

/***/ }),

/***/ "./components/Parallax/Parallax.js":
/*!*****************************************!*\
  !*** ./components/Parallax/Parallax.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Parallax; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styles_jss_nextjs_material_kit_components_parallaxStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/components/parallaxStyle.js */ "./styles/jss/nextjs-material-kit/components/parallaxStyle.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(styles_jss_nextjs_material_kit_components_parallaxStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
function Parallax(props) {
  let windowScrollTop; // if (window.innerWidth >= 768) {
  //   windowScrollTop = window.pageYOffset / 3;
  // } else {
  //   windowScrollTop = 0;
  // }

  const [transform, setTransform] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("translate3d(0,0px,0)");
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }

    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  const {
    filter,
    className,
    children,
    style,
    image,
    small,
    responsive
  } = props;
  const classes = useStyles();
  const parallaxClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [classes.parallaxResponsive]: responsive,
    [className]: className !== undefined
  });
  return __jsx("div", {
    className: parallaxClasses,
    style: _objectSpread(_objectSpread({}, style), {}, {
      backgroundImage: "url(" + image + ")",
      transform: transform
    })
  }, children);
}
Parallax.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  small: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  // this will add a min-height of 660px on small screens
  responsive: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

/***/ }),

/***/ "./components/Snackbar/SnackbarContent.js":
/*!************************************************!*\
  !*** ./components/Snackbar/SnackbarContent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SnackbarContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/SnackbarContent */ "@material-ui/core/SnackbarContent");
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styles_jss_nextjs_material_kit_components_snackbarContentStyle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/components/snackbarContentStyle.js */ "./styles/jss/nextjs-material-kit/components/snackbarContentStyle.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components




 // @material-ui/icons

 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles_jss_nextjs_material_kit_components_snackbarContentStyle_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
function SnackbarContent(props) {
  const {
    message,
    color,
    close,
    icon
  } = props;
  const classes = useStyles();
  var action = [];

  const closeAlert = () => {
    setAlert(null);
  };

  if (close !== undefined) {
    action = [__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.iconButton,
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      onClick: closeAlert
    }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.close
    }))];
  }

  let snackIcon = null;

  switch (typeof icon) {
    case "object":
      snackIcon = __jsx(props.icon, {
        className: classes.icon
      });
      break;

    case "string":
      snackIcon = __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: classes.icon
      }, props.icon);
      break;

    default:
      snackIcon = null;
      break;
  }

  const [alert, setAlert] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(__jsx(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_3___default.a, {
    message: __jsx("div", null, snackIcon, message, close !== undefined ? action : null),
    classes: {
      root: classes.root + " " + classes[color],
      message: classes.message + " " + classes.container
    }
  }));
  return alert;
}
SnackbarContent.propTypes = {
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};

/***/ }),

/***/ "./components/Stepper.js":
/*!*******************************!*\
  !*** ./components/Stepper.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_stepper_horizontal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-stepper-horizontal */ "react-stepper-horizontal");
/* harmony import */ var react_stepper_horizontal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_stepper_horizontal__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MyStepper = props => {
  return __jsx("div", null, __jsx(react_stepper_horizontal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    steps: props.steps,
    activeStep: props.activeNum,
    activeTitleColor: '#ffffff',
    completeTitleColor: '#00c642',
    completeColor: '#00c642'
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MyStepper);

/***/ }),

/***/ "./components/ValidateKYBComp.js":
/*!***************************************!*\
  !*** ./components/ValidateKYBComp.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ValidateTable = props => {
  let attributeRows = Object.keys(props.userDetails).flatMap(attributeName => {
    return __jsx("div", {
      className: "row",
      key: attributeName
    }, __jsx("div", {
      className: "col-s2"
    }, attributeName), " ", __jsx("div", {
      className: "col-s2",
      style: {
        paddingLeft: "2rem"
      }
    }, props.userDetails[attributeName]));
  });
  return __jsx("div", {
    className: "container"
  }, attributeRows);
};

/* harmony default export */ __webpack_exports__["default"] = (ValidateTable);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages-sections/LandingPage-Sections/ProductSection.js":
/*!***************************************************************!*\
  !*** ./pages-sections/LandingPage-Sections/ProductSection.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Chat */ "@material-ui/icons/Chat");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/VerifiedUser */ "@material-ui/icons/VerifiedUser");
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Fingerprint */ "@material-ui/icons/Fingerprint");
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_InfoArea_InfoArea_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/InfoArea/InfoArea.js */ "./components/InfoArea/InfoArea.js");
/* harmony import */ var styles_jss_nextjs_material_kit_pages_landingPageSections_productStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js */ "./styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // @material-ui/core components

 // @material-ui/icons



 // core components





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(styles_jss_nextjs_material_kit_pages_landingPageSections_productStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
function ProductSection() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.section
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justifyContent: "center"
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 8
  }, __jsx("h2", {
    className: classes.title
  }, "Grids"), __jsx("h5", {
    className: classes.description
  }, "Use the following menu in order to either query for the Verifiable KYB Data of an organization or start your own Verifiable Business Wallet (Issue a KYB Verifiable Credential for your Company). A Verifiable Business Wallet implements a portable identity business profile for an organization. To learn more please click here"))), __jsx("div", null, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 4
  }, __jsx(components_InfoArea_InfoArea_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Issue KYB",
    description: "KYB info text",
    icon: _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_2___default.a,
    iconColor: "info",
    urlLink: "/login",
    vertical: true
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 4
  }, __jsx(components_InfoArea_InfoArea_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Search KYBs",
    description: "Search for existing KYBs",
    icon: _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3___default.a,
    iconColor: "success",
    urlLink: "/company-selection",
    vertical: true
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 4
  }, __jsx(components_InfoArea_InfoArea_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Fingerprint",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    icon: _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4___default.a,
    iconColor: "danger",
    urlLink: "/query",
    vertical: true
  })))));
}

/***/ }),

/***/ "./pages-sections/LandingPage-Sections/TeamSection.js":
/*!************************************************************!*\
  !*** ./pages-sections/LandingPage-Sections/TeamSection.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Card/CardFooter.js */ "./components/Card/CardFooter.js");
/* harmony import */ var styles_jss_nextjs_material_kit_pages_landingPageSections_teamStyle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js */ "./styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons
// core components








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles_jss_nextjs_material_kit_pages_landingPageSections_teamStyle_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
function TeamSection() {
  const classes = useStyles();
  const imageClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  return __jsx("div", {
    className: classes.section
  }, __jsx("h2", {
    className: classes.title
  }, "Here is our team"), __jsx("div", null, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 4
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    plain: true
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: classes.itemGrid
  }, __jsx("img", {
    src: "/img/faces/avatar.jpg",
    alt: "...",
    className: imageClasses
  })), __jsx("h4", {
    className: classes.cardTitle
  }, "Gigi Hadid", __jsx("br", null), __jsx("small", {
    className: classes.smallTitle
  }, "Model")), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, __jsx("p", {
    className: classes.description
  }, "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ", __jsx("a", {
    href: "#pablo"
  }, "links"), " for people to be able to follow them outside the site.")), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.justifyCenter
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, __jsx("i", {
    className: classes.socials + " fab fa-twitter"
  })), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, __jsx("i", {
    className: classes.socials + " fab fa-instagram"
  })), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, __jsx("i", {
    className: classes.socials + " fab fa-facebook"
  }))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 4
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    plain: true
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: classes.itemGrid
  }, __jsx("img", {
    src: "/img/faces/christian.jpg",
    alt: "...",
    className: imageClasses
  })), __jsx("h4", {
    className: classes.cardTitle
  }, "Christian Louboutin", __jsx("br", null), __jsx("small", {
    className: classes.smallTitle
  }, "Designer")), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, __jsx("p", {
    className: classes.description
  }, "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ", __jsx("a", {
    href: "#pablo"
  }, "links"), " for people to be able to follow them outside the site.")), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.justifyCenter
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, __jsx("i", {
    className: classes.socials + " fab fa-twitter"
  })), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, __jsx("i", {
    className: classes.socials + " fab fa-linkedin"
  }))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 4
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    plain: true
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: classes.itemGrid
  }, __jsx("img", {
    src: "/img/faces/kendall.jpg",
    alt: "...",
    className: imageClasses
  })), __jsx("h4", {
    className: classes.cardTitle
  }, "Kendall Jenner", __jsx("br", null), __jsx("small", {
    className: classes.smallTitle
  }, "Model")), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, __jsx("p", {
    className: classes.description
  }, "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ", __jsx("a", {
    href: "#pablo"
  }, "links"), " for people to be able to follow them outside the site.")), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.justifyCenter
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, __jsx("i", {
    className: classes.socials + " fab fa-twitter"
  })), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, __jsx("i", {
    className: classes.socials + " fab fa-instagram"
  })), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, __jsx("i", {
    className: classes.socials + " fab fa-facebook"
  }))))))));
}

/***/ }),

/***/ "./pages-sections/LandingPage-Sections/WorkSection.js":
/*!************************************************************!*\
  !*** ./pages-sections/LandingPage-Sections/WorkSection.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var styles_jss_nextjs_material_kit_pages_landingPageSections_workStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js */ "./styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // @material-ui/core components

 // @material-ui/icons
// core components






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(styles_jss_nextjs_material_kit_pages_landingPageSections_workStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function WorkSection(props) {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.section
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    justifyContent: "center"
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cs: 12,
    sm: 12,
    md: 8
  }, __jsx("h2", {
    className: classes.title
  }, "Query for specific company"), __jsx("h4", {
    className: classes.description
  }, "In order to build your KYB profile, first provide your company\u2019s details below, and then click the \u201CRetrieve Data\u201D button. This will result in an eIDAS eID authentication."), __jsx("h4", {
    className: classes.textLeft
  }, "Company Details Form"), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    labelText: "Company Name",
    id: "companyName",
    formControlProps: {
      fullWidth: true
    },
    handleChange: props.handleChange
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    labelText: "Company Country",
    id: "companyCountry",
    formControlProps: {
      fullWidth: true
    },
    handleChange: props.handleChange
  })), __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    labelText: "LEI",
    id: "lei",
    formControlProps: {
      fullWidth: true,
      className: classes.textArea
    },
    handleChange: props.handleChange
  })), __jsx("h4", {
    className: classes.textLeft
  }, "Representative Form"), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    labelText: "Name",
    id: "name",
    formControlProps: {
      fullWidth: true
    },
    handleChange: props.handleChange
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    labelText: "Surname",
    id: "surname",
    formControlProps: {
      fullWidth: true
    },
    handleChange: props.handleChange
  })), __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    labelText: "email",
    id: "email",
    formControlProps: {
      fullWidth: true,
      className: classes.textArea
    },
    handleChange: props.handleChange
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    className: classes.textCenter
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "primary"
  }, "Retrieve")))));
}

/***/ }),

/***/ "./pages/kyb/company-selection.js":
/*!****************************************!*\
  !*** ./pages/kyb/company-selection.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LayoutNew__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/LayoutNew */ "./components/LayoutNew.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ValidateKYBComp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ValidateKYBComp */ "./components/ValidateKYBComp.js");
/* harmony import */ var pages_sections_LandingPage_Sections_WorkSection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pages-sections/LandingPage-Sections/WorkSection.js */ "./pages-sections/LandingPage-Sections/WorkSection.js");
/* harmony import */ var _components_Forms_Form1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Forms/Form1 */ "./components/Forms/Form1.js");
/* harmony import */ var _components_Forms_Form2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Forms/Form2 */ "./components/Forms/Form2.js");
/* harmony import */ var _components_Forms_Form3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Forms/Form3 */ "./components/Forms/Form3.js");
/* harmony import */ var _components_Forms_Form4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Forms/Form4 */ "./components/Forms/Form4.js");
/* harmony import */ var _components_Forms_Form5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Forms/Form5 */ "./components/Forms/Form5.js");
/* harmony import */ var _components_Forms_Form6__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Forms/Form6 */ "./components/Forms/Form6.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Grid/GridItem */ "./components/Grid/GridItem.js");
/* harmony import */ var _components_Grid_GridContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Grid/GridContainer */ "./components/Grid/GridContainer.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















class QueryView extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", async event => {
      event.preventDefault();
      console.log(`clicked submit`);
    });

    this.state = {
      companyName: null,
      companyCountry: null,
      LEI: null,
      isNextEnabled: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.stringNotEmpty = this.stringNotEmpty.bind(this);
  }

  static async getInitialProps({
    reduxStore,
    req
  }) {
    //returned value here is getting mered with the mapstatetoprops
    // mapstatetoprops overrides these values if they match
    return {
      userDetails: req.userDetails
    };
  }

  async handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name + " " + value); // setInputs(values => ({...values, [name]: value}))

    await this.setState({
      [name]: value
    });

    if (this.stringNotEmpty(this.state.lei) || this.stringNotEmpty(this.state.companyCountry) && this.stringNotEmpty(this.state.companyName)) {
      this.setState({
        isNextEnabled: true
      });
    } else {
      this.setState({
        isNextEnabled: false
      });
    }
  }

  stringNotEmpty(s) {
    if (s) {
      let result = s.length > 0;
      console.log(`not empty ${s}:: ${result}`);
      return result;
    }

    return false;
  }

  render() {
    return __jsx(_components_LayoutNew__WEBPACK_IMPORTED_MODULE_2__["default"], {
      home: true
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, null, __jsx("title", null, "Grids")), __jsx("h5", null, "In order to build your KYB profile, first provide your company\u2019s details below, and then click the \u201CRetrieve Data\u201D button. This will result in an eIDAS eID authentication."), __jsx("form", {
      action: "/start-login",
      method: "post"
    }, __jsx(_components_Forms_Form6__WEBPACK_IMPORTED_MODULE_11__["default"], {
      handleChange: this.handleChange
    })));
  }

}

function mapStateToProps(state) {
  return {
    test: "Test"
  };
}

const mapDispatchToProps = dispatch => {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(QueryView));

/***/ }),

/***/ "./styles/jss/nextjs-material-kit.js":
/*!*******************************************!*\
  !*** ./styles/jss/nextjs-material-kit.js ***!
  \*******************************************/
/*! exports provided: hexToRGBAlpha, drawerWidth, transition, container, containerFluid, containerAuto, containerFluidAuto, containerNew, containerFluidNew, boxShadow, card, defaultFont, primaryColor, warningColor, dangerColor, successColor, infoColor, roseColor, grayColor, primaryBoxShadow, infoBoxShadow, successBoxShadow, warningBoxShadow, dangerBoxShadow, roseBoxShadow, warningCardHeader, successCardHeader, dangerCardHeader, infoCardHeader, primaryCardHeader, roseCardHeader, cardActions, cardHeader, defaultBoxShadow, title, cardTitle, cardLink, cardSubtitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRGBAlpha", function() { return hexToRGBAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawerWidth", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "container", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerFluid", function() { return containerFluid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerAuto", function() { return containerAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerFluidAuto", function() { return containerFluidAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerNew", function() { return containerNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerFluidNew", function() { return containerFluidNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return boxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFont", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryColor", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningColor", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerColor", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successColor", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoColor", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseColor", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayColor", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryBoxShadow", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoBoxShadow", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successBoxShadow", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningBoxShadow", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerBoxShadow", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseBoxShadow", function() { return roseBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningCardHeader", function() { return warningCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successCardHeader", function() { return successCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerCardHeader", function() { return dangerCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoCardHeader", function() { return infoCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryCardHeader", function() { return primaryCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseCardHeader", function() { return roseCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardActions", function() { return cardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardHeader", function() { return cardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBoxShadow", function() { return defaultBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardTitle", function() { return cardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardLink", function() { return cardLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardSubtitle", function() { return cardSubtitle; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!

 =========================================================
 * NextJS Material Kit - v1.2.0 based on Material Kit - v2.0.2 and Material Kit React - v1.8.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/nextjs-material-kit
 * Copyright 2021 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/main/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
// ##############################
// // // Variables - Styles that are used on more than one component
// #############################
const hexColorToRGB = function (hexColor) {
  let detectShorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i; // #000 vs #000000

  hexColor = hexColor.replace(detectShorthand, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  const hex_array = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor); // #000000 to #ffffff

  return hex_array ? {
    r: parseInt(hex_array[1], 16),
    // 0-255
    g: parseInt(hex_array[2], 16),
    // 0-255
    b: parseInt(hex_array[3], 16) // 0-255

  } : null;
};

const hexToRGBAlpha = function (hexColor, alpha) {
  let rgb = hexColorToRGB(hexColor);
  return `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
};

const drawerWidth = 260;
const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};
const containerFluidNew = {
  paddingRight: "0px",
  paddingLeft: "0px",
  marginRight: "0px",
  marginLeft: "0px",
  width: "100%"
};
const containerFluidAuto = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "auto"
};

const container = _objectSpread(_objectSpread({}, containerFluid), {}, {
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
});

const containerNew = _objectSpread(_objectSpread({}, containerFluidNew), {}, {
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
});

const containerAuto = _objectSpread(_objectSpread({}, containerFluidAuto), {}, {
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
});

const boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};
const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff"
};
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
const primaryColor = "#091f51";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#00acc1";
const roseColor = "#e91e63";
const grayColor = "#999999";
const primaryBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(primaryColor, 0.28)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(primaryColor, 0.2)}`
};
const infoBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(infoColor, 0.28)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(infoColor, 0.2)}`
};
const successBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(successColor, 0.28)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(successColor, 0.2)}`
};
const warningBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(warningColor, 0.28)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(warningColor, 0.2)}`
};
const dangerBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(dangerColor, 0.28)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(dangerColor, 0.2)}`
};
const roseBoxShadow = {
  boxShadow: `0 4px 20px 0px ${hexToRGBAlpha("#000", 0.14)}, 0 7px 10px -5px ${hexToRGBAlpha(roseColor, 0.4)}`
};

const warningCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ffa726, #fb8c00)"
}, warningBoxShadow);

const successCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #66bb6a, #43a047)"
}, successBoxShadow);

const dangerCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ef5350, #e53935)"
}, dangerBoxShadow);

const infoCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #26c6da, #00acc1)"
}, infoBoxShadow);

const primaryCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #071e4f, #041740)"
}, primaryBoxShadow);

const roseCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ec407a, #d81b60)"
}, roseBoxShadow);

const cardActions = _objectSpread({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto"
}, defaultFont);

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
const title = {
  color: "#3C4858",
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`
};

const cardTitle = _objectSpread(_objectSpread({}, title), {}, {
  marginTop: ".625rem"
});

const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};
const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};


/***/ }),

/***/ "./styles/jss/nextjs-material-kit/components/buttonStyle.js":
/*!******************************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/components/buttonStyle.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/jss/nextjs-material-kit.js */ "./styles/jss/nextjs-material-kit.js");

const buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
    color: "#FFFFFF",
    boxShadow: "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
      boxShadow: "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginRight: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  fullWidth: {
    width: "100%"
  },
  primary: {
    backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
    boxShadow: `0 2px 2px 0 ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.14)}, 0 3px 1px -2px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.2)}, 0 1px 5px 0 ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.12)}`,
    "&:hover,&:focus": {
      backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
      boxShadow: `0 14px 26px -12px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.2)}`
    }
  },
  info: {
    backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
    boxShadow: `0 2px 2px 0 ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"], 0.14)}, 0 3px 1px -2px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"], 0.2)}, 0 1px 5px 0 ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"], 0.12)}`,
    "&:hover,&:focus": {
      backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
      boxShadow: `0 14px 26px -12px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"], 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"], 0.2)}`
    }
  },
  success: {
    backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"],
    boxShadow: `0 2px 2px 0 ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"], 0.14)}, 0 3px 1px -2px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"], 0.2)}, 0 1px 5px 0 ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"], 0.12)}`,
    "&:hover,&:focus": {
      backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"],
      boxShadow: `0 14px 26px -12px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"], 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"], 0.2)}`
    }
  },
  warning: {
    backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
    boxShadow: `0 2px 2px 0 ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"], 0.14)}, 0 3px 1px -2px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"], 0.2)}, 0 1px 5px 0 ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"], 0.12)}`,
    "&:hover,&:focus": {
      backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
      boxShadow: `0 14px 26px -12px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"], 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"], 0.2)}`
    }
  },
  danger: {
    backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
    boxShadow: `0 2px 2px 0 ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"], 0.14)}, 0 3px 1px -2px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"], 0.2)}, 0 1px 5px 0 ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"], 0.12)}`,
    "&:hover,&:focus": {
      backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
      boxShadow: `0 14px 26px -12px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"], 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"], 0.2)}`
    }
  },
  rose: {
    backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
    boxShadow: `0 2px 2px 0 ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.14)}, 0 3px 1px -2px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.2)}, 0 1px 5px 0 ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.12)}`,
    "&:hover,&:focus": {
      backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
      boxShadow: `0 14px 26px -12px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.2)}`
    }
  },
  white: {
    "&,&:focus,&:hover,&:visited": {
      backgroundColor: "#FFFFFF",
      color: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"]
    }
  },
  twitter: {
    backgroundColor: "#55acee",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)",
    "&:hover,&:focus,&:visited": {
      backgroundColor: "#55acee",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"
    }
  },
  facebook: {
    backgroundColor: "#3b5998",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#3b5998",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"
    }
  },
  google: {
    backgroundColor: "#dd4b39",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#dd4b39",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"
    }
  },
  github: {
    backgroundColor: "#333333",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#333333",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)"
    }
  },
  simple: {
    "&,&:focus,&:hover,&:visited": {
      color: "#FFFFFF",
      background: "transparent",
      boxShadow: "none"
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"]
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"]
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"]
      }
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
      }
    },
    "&$twitter": {
      "&,&:focus,&:hover,&:visited": {
        color: "#55acee"
      }
    },
    "&$facebook": {
      "&,&:focus,&:hover,&:visited": {
        color: "#3b5998"
      }
    },
    "&$google": {
      "&,&:focus,&:hover,&:visited": {
        color: "#dd4b39"
      }
    },
    "&$github": {
      "&,&:focus,&:hover,&:visited": {
        color: "#333333"
      }
    }
  },
  transparent: {
    "&,&:focus,&:hover,&:visited": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  lg: {
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem"
  },
  sm: {
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: "#999999",
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (buttonStyle);

/***/ }),

/***/ "./styles/jss/nextjs-material-kit/components/cardBodyStyle.js":
/*!********************************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/components/cardBodyStyle.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 1.875rem",
    flex: "1 1 auto"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardBodyStyle);

/***/ }),

/***/ "./styles/jss/nextjs-material-kit/components/cardFooterStyle.js":
/*!**********************************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/components/cardFooterStyle.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cardFooterStyle = {
  cardFooter: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: "0.9375rem 1.875rem"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardFooterStyle);

/***/ }),

/***/ "./styles/jss/nextjs-material-kit/components/cardHeaderStyle.js":
/*!**********************************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/components/cardHeaderStyle.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/jss/nextjs-material-kit.js */ "./styles/jss/nextjs-material-kit.js");

const cardHeaderStyle = {
  cardHeader: {
    borderRadius: "3px",
    padding: "1rem 15px",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    border: "0",
    marginBottom: "0"
  },
  cardHeaderPlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },
  warningCardHeader: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningCardHeader"],
  successCardHeader: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successCardHeader"],
  dangerCardHeader: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerCardHeader"],
  infoCardHeader: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoCardHeader"],
  primaryCardHeader: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryCardHeader"]
};
/* harmony default export */ __webpack_exports__["default"] = (cardHeaderStyle);

/***/ }),

/***/ "./styles/jss/nextjs-material-kit/components/cardStyle.js":
/*!****************************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/components/cardStyle.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    width: "100%",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardCarousel: {
    overflow: "hidden"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardStyle);

/***/ }),

/***/ "./styles/jss/nextjs-material-kit/components/customDropdownStyle.js":
/*!**************************************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/components/customDropdownStyle.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/jss/nextjs-material-kit.js */ "./styles/jss/nextjs-material-kit.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const customDropdownStyle = theme => ({
  popperClose: {
    pointerEvents: "none"
  },
  pooperNav: {
    [theme.breakpoints.down("sm")]: {
      position: "static !important",
      left: "unset !important",
      top: "unset !important",
      transform: "none !important",
      willChange: "none !important",
      "& > div": {
        boxShadow: "none !important",
        marginLeft: "1.5rem",
        marginRight: "1.5rem",
        transition: "none !important",
        marginTop: "0px !important",
        marginBottom: "5px !important",
        padding: "0px !important"
      }
    }
  },
  dropdown: {
    borderRadius: "3px",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
    top: "100%",
    zIndex: "1000",
    minWidth: "160px",
    padding: "5px 0",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: "#fff",
    backgroundClip: "padding-box"
  },
  menuList: {
    padding: "0"
  },
  popperResponsive: {
    zIndex: "1200",
    position: "absolute !important",
    [theme.breakpoints.down("sm")]: {
      zIndex: "1640",
      position: "static !important",
      float: "none",
      width: "auto",
      marginTop: "0",
      backgroundColor: "transparent",
      border: "0",
      boxShadow: "none",
      color: "black"
    }
  },
  dropdownItem: _objectSpread(_objectSpread({}, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    position: "relative",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    height: "fit-content",
    color: "#333",
    whiteSpace: "nowrap",
    minHeight: "unset"
  }),
  blackHover: {
    "&:hover": {
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(33, 33, 33, 0.4)",
      backgroundColor: "#212121",
      color: "#fff"
    }
  },
  primaryHover: {
    "&:hover": _objectSpread({
      backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
      color: "#FFFFFF"
    }, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryBoxShadow"])
  },
  infoHover: {
    "&:hover": _objectSpread({
      backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
      color: "#FFFFFF"
    }, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoBoxShadow"])
  },
  successHover: {
    "&:hover": _objectSpread({
      backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"],
      color: "#FFFFFF"
    }, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successBoxShadow"])
  },
  warningHover: {
    "&:hover": _objectSpread({
      backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
      color: "#FFFFFF"
    }, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningBoxShadow"])
  },
  dangerHover: {
    "&:hover": _objectSpread({
      backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
      color: "#FFFFFF"
    }, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerBoxShadow"])
  },
  roseHover: {
    "&:hover": _objectSpread({
      backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
      color: "#FFFFFF"
    }, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseBoxShadow"])
  },
  dropdownItemRTL: {
    textAlign: "right"
  },
  dropdownDividerItem: {
    margin: "5px 0",
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    height: "1px",
    overflow: "hidden"
  },
  buttonIcon: {
    width: "20px",
    height: "20px"
  },
  caret: {
    transition: "all 150ms ease-in",
    display: "inline-block",
    width: "0",
    height: "0",
    marginLeft: "4px",
    verticalAlign: "middle",
    borderTop: "4px solid",
    borderRight: "4px solid transparent",
    borderLeft: "4px solid transparent"
  },
  caretActive: {
    transform: "rotate(180deg)"
  },
  caretRTL: {
    marginRight: "4px"
  },
  dropdownHeader: {
    display: "block",
    padding: "0.1875rem 1.25rem",
    fontSize: "0.75rem",
    lineHeight: "1.428571",
    color: "#777",
    whiteSpace: "nowrap",
    fontWeight: "inherit",
    marginTop: "10px",
    minHeight: "unset",
    "&:hover,&:focus": {
      backgroundColor: "transparent",
      cursor: "auto"
    }
  },
  noLiPadding: {
    padding: "0"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (customDropdownStyle);

/***/ }),

/***/ "./styles/jss/nextjs-material-kit/components/customInputStyle.js":
/*!***********************************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/components/customInputStyle.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/jss/nextjs-material-kit.js */ "./styles/jss/nextjs-material-kit.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const customInputStyle = {
  disabled: {
    "&:before": {
      borderColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]
    }
  },
  underlineError: {
    "&:after": {
      borderColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"]
    }
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#FFFFFF"
    },
    "&:after": {
      borderColor: "#FFFFFF"
    }
  },
  labelRoot: _objectSpread(_objectSpread({}, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    color: "#AAAAAA !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    top: "10px",
    letterSpacing: "unset",
    "& + $underline": {
      marginTop: "0px"
    }
  }),
  labelRootError: {
    color: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"] + " !important"
  },
  labelRootSuccess: {
    color: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"] + " !important"
  },
  formControl: {
    margin: "0 0 17px 0",
    paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: "#495057"
    }
  },
  input: {
    color: "#495057",
    height: "unset",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#AAAAAA"
    }
  },
  whiteInput: {
    "&,&::placeholder": {
      color: "#FFFFFF",
      opacity: "1"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customInputStyle);

/***/ }),

/***/ "./styles/jss/nextjs-material-kit/components/footerStyle.js":
/*!******************************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/components/footerStyle.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/jss/nextjs-material-kit.js */ "./styles/jss/nextjs-material-kit.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const footerStyle = {
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  left: _objectSpread(_objectSpread({}, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    textAlign: "left",
    float: "left!important",
    display: "block"
  }),
  right: _objectSpread(_objectSpread({}, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    textAlign: "left",
    padding: "15px 0",
    margin: "0",
    float: "right!important",
    a: {
      color: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
      textDecoration: "none",
      backgroundColor: "transparent"
    }
  }),
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "static",
    borderTop: "4px solid #046ec5",
    backgroundColor: "#eeeeee"
  },

  /*a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent",
  },*/
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      // color: "#FFFFFF",
      backgroundColor: "#FFFFFF"
    }
  },
  container: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (footerStyle);

/***/ }),

/***/ "./styles/jss/nextjs-material-kit/components/headerLinksStyle.js":
/*!***********************************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/components/headerLinksStyle.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/jss/nextjs-material-kit.js */ "./styles/jss/nextjs-material-kit.js");
/* harmony import */ var styles_jss_nextjs_material_kit_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/tooltipsStyle.js */ "./styles/jss/nextjs-material-kit/tooltipsStyle.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const headerLinksStyle = theme => _objectSpread(_objectSpread({
  list: _objectSpread(_objectSpread({}, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit"
  }),
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5"
      }
    }
  },
  listItemText: {
    padding: "0 !important"
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)"
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    }
  },
  notificationNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px"
    },
    color: "#FFF",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    top: "4px"
  },
  registerNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px"
    },
    top: "3px",
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex"
  },
  navLinkActive: {
    color: "inherit",
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px"
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px"
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px"
    }
  }
}, styles_jss_nextjs_material_kit_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"]), {}, {
  marginRight5: {
    marginRight: "5px"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (headerLinksStyle);

/***/ }),

/***/ "./styles/jss/nextjs-material-kit/components/headerStyle.js":
/*!******************************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/components/headerStyle.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/jss/nextjs-material-kit.js */ "./styles/jss/nextjs-material-kit.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const headerStyle = {
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "0px",
    padding: "0",
    marginBottom: "20px",
    color: "#555",
    width: "100%",
    backgroundColor: "rgb(3.49884%,12.199402%,31.799316%)",
    boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: "unset"
  },
  absolute: {
    position: "absolute",
    zIndex: "1100"
  },
  fixed: {
    position: "fixed",
    zIndex: "1100"
  },
  container: _objectSpread(_objectSpread({}, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["containerNew"]), {}, {
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  }),
  headerDivider: {
    width: "100%",
    height: "5px",
    background: "linear-gradient(358.5deg,#00aeef .09%,#134a86);",
    marginLeft: "auto;",
    marginRight: "auto;"
  },
  flex: {
    flex: 1
  },
  title: _objectSpread(_objectSpread({}, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    padding: "8px 16px",
    letterSpacing: "unset",
    "&:hover,&:focus": {
      color: "inherit",
      background: "transparent"
    },
    backgroundImage: "https://myria.math.aegean.gr/~atsol/newpage/software/aegeanlogo/svg/bold-logo_sfiga_uof_aegean_en-rv.svg"
  }),
  appResponsive: {
    margin: "20px 10px"
  },
  primary: {
    backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.46)}`
  },
  info: {
    backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"], 0.46)}`
  },
  success: {
    backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"],
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"], 0.46)}`
  },
  warning: {
    backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"], 0.46)}`
  },
  danger: {
    backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"], 0.46)}`
  },
  rose: {
    backgroundColor: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${Object(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"], 0.46)}`
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: "#FFFFFF"
  },
  dark: {
    color: "#FFFFFF",
    backgroundColor: "#212121 !important",
    boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    backgroundColor: "#fff !important",
    boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
  },
  drawerPaper: _objectSpread(_objectSpread({
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["drawerWidth"]
  }, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["boxShadow"]), {}, {
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0"
  }, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["transition"]),
  resizeImg: {
    maxWidth: "100%",
    maxHeight: "100vh",
    margin: "auto"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (headerStyle);

/***/ }),

/***/ "./styles/jss/nextjs-material-kit/components/infoStyle.js":
/*!****************************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/components/infoStyle.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/jss/nextjs-material-kit.js */ "./styles/jss/nextjs-material-kit.js");

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px"
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  primary: {
    color: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]
  },
  warning: {
    color: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"]
  },
  danger: {
    color: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
  },
  success: {
    color: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"]
  },
  info: {
    color: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"]
  },
  rose: {
    color: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
  },
  gray: {
    color: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"]
  },
  icon: {
    width: "36px",
    height: "36px"
  },
  descriptionWrapper: {
    color: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
    overflow: "hidden"
  },
  title: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["title"],
  description: {
    color: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
    overflow: "hidden",
    marginTop: "0px",
    fontSize: "14px"
  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (infoStyle);

/***/ }),

/***/ "./styles/jss/nextjs-material-kit/components/parallaxStyle.js":
/*!********************************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/components/parallaxStyle.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const parallaxStyle = theme => ({
  parallax: {
    height: "90vh",
    maxHeight: "600px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "380px"
  },
  parallaxResponsive: {
    [theme.breakpoints.down("md")]: {
      minHeight: "660px"
    }
  }
});

/* harmony default export */ __webpack_exports__["default"] = (parallaxStyle);

/***/ }),

/***/ "./styles/jss/nextjs-material-kit/components/snackbarContentStyle.js":
/*!***************************************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/components/snackbarContentStyle.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/jss/nextjs-material-kit.js */ "./styles/jss/nextjs-material-kit.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const snackbarContentStyle = {
  root: _objectSpread(_objectSpread({}, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    backgroundColor: "white",
    color: "#555555",
    borderRadius: "0px",
    maxWidth: "100%",
    minWidth: "auto",
    boxShadow: "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
  }),
  info: _objectSpread({
    backgroundColor: "#00d3ee",
    color: "#ffffff"
  }, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoBoxShadow"]),
  success: _objectSpread({
    backgroundColor: "#5cb860",
    color: "#ffffff"
  }, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successBoxShadow"]),
  warning: _objectSpread({
    backgroundColor: "#ffa21a",
    color: "#ffffff"
  }, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningBoxShadow"]),
  danger: _objectSpread({
    backgroundColor: "#f55a4e",
    color: "#ffffff"
  }, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerBoxShadow"]),
  primary: _objectSpread({
    backgroundColor: "#af2cc5",
    color: "#ffffff"
  }, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryBoxShadow"]),
  message: {
    padding: "0",
    display: "block",
    maxWidth: "89%",
    "&,& *": {
      letterSpacing: "normal"
    }
  },
  close: {
    width: "14px",
    height: "14px"
  },
  iconButton: {
    width: "24px",
    height: "24px",
    float: "right",
    fontSize: "1.5rem",
    fontWeight: "500",
    lineHeight: "1",
    position: "absolute",
    right: "-4px",
    top: "0",
    padding: "0"
  },
  icon: {
    display: "block",
    float: "left",
    marginRight: "1.071rem"
  },
  container: _objectSpread(_objectSpread({}, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["container"]), {}, {
    position: "relative"
  })
};
/* harmony default export */ __webpack_exports__["default"] = (snackbarContentStyle);

/***/ }),

/***/ "./styles/jss/nextjs-material-kit/imagesStyles.js":
/*!********************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/imagesStyles.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const imagesStyles = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow: "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem"
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)"
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)"
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)"
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (imagesStyles);

/***/ }),

/***/ "./styles/jss/nextjs-material-kit/pages/landingPage.js":
/*!*************************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/pages/landingPage.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/jss/nextjs-material-kit.js */ "./styles/jss/nextjs-material-kit.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const landingPageStyle = {
  container: _objectSpread({
    zIndex: "12",
    color: "#FFFFFF"
  }, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["containerAuto"]),
  title: _objectSpread(_objectSpread({}, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["title"]), {}, {
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  }),
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF"
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%"
    }
  },
  jss413: {
    flex: "0 1 0%",
    display: "flex"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (landingPageStyle);

/***/ }),

/***/ "./styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js":
/*!**********************************************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/jss/nextjs-material-kit.js */ "./styles/jss/nextjs-material-kit.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: _objectSpread(_objectSpread({}, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["title"]), {}, {
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  description: {
    color: "#999"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (productStyle);

/***/ }),

/***/ "./styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js":
/*!*******************************************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/jss/nextjs-material-kit.js */ "./styles/jss/nextjs-material-kit.js");
/* harmony import */ var styles_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/imagesStyles.js */ "./styles/jss/nextjs-material-kit/imagesStyles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const teamStyle = _objectSpread(_objectSpread({
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: _objectSpread(_objectSpread({}, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["title"]), {}, {
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  })
}, styles_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_1__["default"]), {}, {
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["cardTitle"],
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (teamStyle);

/***/ }),

/***/ "./styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js":
/*!*******************************************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/jss/nextjs-material-kit.js */ "./styles/jss/nextjs-material-kit.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const workStyle = {
  section: _objectSpread(_objectSpread({}, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    padding: "70px 0"
  }),
  title: _objectSpread(_objectSpread({}, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["title"]), {}, {
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  }),
  description: {
    color: "#999",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textLeft: {
    color: "#999",
    textAlign: "left"
  },
  textRight: {
    color: "#999",
    textAlign: "right"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  },
  hrLine: {
    color: "#999",
    backgroundColor: "#999",
    borderWidth: "1px",
    border: "none",
    width: "35em",
    height: "1px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (workStyle);

/***/ }),

/***/ "./styles/jss/nextjs-material-kit/pages/loginPage.js":
/*!***********************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/pages/loginPage.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/jss/nextjs-material-kit.js */ "./styles/jss/nextjs-material-kit.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const signupPageStyle = {
  container: _objectSpread(_objectSpread(_objectSpread({}, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["container"]), styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    zIndex: "2",
    position: "relative",
    paddingTop: "20vh",
    color: "rgba(0, 0, 0, 0.87)",
    paddingBottom: "200px"
  }),
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.1)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF"
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%"
    }
  },
  form: {
    margin: "0"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px"
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center"
  },
  cardMid: {
    marginTop: "30px",
    marginBottom: "0px",
    marginLeft: "20px",
    marginRight: "20px",
    textAlign: "left"
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  },
  cardFooterLeft: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "left !important"
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: "#495057"
  },
  textLeft: {
    color: "#999",
    textAlign: "left"
  },
  textRight: {
    color: "#999",
    textAlign: "right"
  },
  textCenter: {
    color: "#999",
    textAlign: "center"
  },
  hrLine: {
    color: "#999",
    backgroundColor: "#999",
    borderWidth: "1px",
    border: "none",
    width: "35em",
    height: "1px"
  },
  title: _objectSpread(_objectSpread({}, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["title"]), {}, {
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  }),
  MuiContainerRoot: {
    width: "100%",
    display: "block",
    boxSizing: "border-box",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "16px",
    paddingRight: "16px"
  },
  jss409: {
    flex: "1",
    padding: "0px 48px 32px"
  },
  jss413: {
    flex: "0 1 0%",
    display: "flex"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (signupPageStyle);

/***/ }),

/***/ "./styles/jss/nextjs-material-kit/tooltipsStyle.js":
/*!*********************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/tooltipsStyle.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const tooltipsStyle = {
  tooltip: {
    padding: "10px 15px",
    minWidth: "130px",
    color: "#555555",
    lineHeight: "1.7em",
    background: "#FFFFFF",
    border: "none",
    borderRadius: "3px",
    boxShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
    maxWidth: "200px",
    textAlign: "center",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "0.875em",
    fontStyle: "normal",
    fontWeight: "400",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "normal",
    lineBreak: "auto"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (tooltipsStyle);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/ClickAwayListener":
/*!******************************************************!*\
  !*** external "@material-ui/core/ClickAwayListener" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Grow":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grow" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/InputAdornment":
/*!***************************************************!*\
  !*** external "@material-ui/core/InputAdornment" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/MenuList":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Popper":
/*!*******************************************!*\
  !*** external "@material-ui/core/Popper" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ "@material-ui/core/SnackbarContent":
/*!****************************************************!*\
  !*** external "@material-ui/core/SnackbarContent" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SnackbarContent");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/styles/makeStyles":
/*!******************************************************!*\
  !*** external "@material-ui/core/styles/makeStyles" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/makeStyles");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "@material-ui/icons/Chat":
/*!******************************************!*\
  !*** external "@material-ui/icons/Chat" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Chat");

/***/ }),

/***/ "@material-ui/icons/Check":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Check" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@material-ui/icons/Email":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Email" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Email");

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "@material-ui/icons/Fingerprint":
/*!*************************************************!*\
  !*** external "@material-ui/icons/Fingerprint" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Fingerprint");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/People":
/*!********************************************!*\
  !*** external "@material-ui/icons/People" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),

/***/ "@material-ui/icons/VerifiedUser":
/*!**************************************************!*\
  !*** external "@material-ui/icons/VerifiedUser" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VerifiedUser");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-stepper-horizontal":
/*!*******************************************!*\
  !*** external "react-stepper-horizontal" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stepper-horizontal");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZC9DYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZC9DYXJkQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQvQ2FyZEZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQvQ2FyZEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3VzdG9tRHJvcGRvd24vQ3VzdG9tRHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DdXN0b21JbnB1dC9DdXN0b21JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9Gb3JtMS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1zL0Zvcm0yLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9ybXMvRm9ybTMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9Gb3JtNC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1zL0Zvcm01LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9ybXMvRm9ybTYuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJMaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZm9BcmVhL0luZm9BcmVhLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0TmV3LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFyYWxsYXgvUGFyYWxsYXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbmFja2Jhci9TbmFja2JhckNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdGVwcGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVmFsaWRhdGVLWUJDb21wLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzLXNlY3Rpb25zL0xhbmRpbmdQYWdlLVNlY3Rpb25zL1Byb2R1Y3RTZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhZ2VzLXNlY3Rpb25zL0xhbmRpbmdQYWdlLVNlY3Rpb25zL1RlYW1TZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhZ2VzLXNlY3Rpb25zL0xhbmRpbmdQYWdlLVNlY3Rpb25zL1dvcmtTZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2t5Yi9jb21wYW55LXNlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2NvbXBvbmVudHMvYnV0dG9uU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2NvbXBvbmVudHMvY2FyZEJvZHlTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9jYXJkRm9vdGVyU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2NvbXBvbmVudHMvY2FyZEhlYWRlclN0eWxlLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2NhcmRTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9jdXN0b21Ecm9wZG93blN0eWxlLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2N1c3RvbUlucHV0U3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2NvbXBvbmVudHMvZm9vdGVyU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2NvbXBvbmVudHMvaGVhZGVyTGlua3NTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9oZWFkZXJTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9pbmZvU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2NvbXBvbmVudHMvcGFyYWxsYXhTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9zbmFja2JhckNvbnRlbnRTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvaW1hZ2VzU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9wYWdlcy9sYW5kaW5nUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvcGFnZXMvbGFuZGluZ1BhZ2VTZWN0aW9ucy9wcm9kdWN0U3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L3BhZ2VzL2xhbmRpbmdQYWdlU2VjdGlvbnMvdGVhbVN0eWxlLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9wYWdlcy9sYW5kaW5nUGFnZVNlY3Rpb25zL3dvcmtTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvcGFnZXMvbG9naW5QYWdlLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC90b29sdGlwc1N0eWxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3Jvd1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhckNvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VtYWlsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZpbmdlcnByaW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVvcGxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZlcmlmaWVkVXNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdGVwcGVyLWhvcml6b250YWxcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwic3R5bGVzIiwiQ2FyZCIsInByb3BzIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicGxhaW4iLCJjYXJvdXNlbCIsInJlc3QiLCJjYXJkQ2xhc3NlcyIsImNsYXNzTmFtZXMiLCJjYXJkIiwiY2FyZFBsYWluIiwiY2FyZENhcm91c2VsIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsIm5vZGUiLCJDYXJkQm9keSIsImNhcmRCb2R5Q2xhc3NlcyIsImNhcmRCb2R5IiwiQ2FyZEZvb3RlciIsImNhcmRGb290ZXJDbGFzc2VzIiwiY2FyZEZvb3RlciIsIkNhcmRIZWFkZXIiLCJjb2xvciIsImNhcmRIZWFkZXJDbGFzc2VzIiwiY2FyZEhlYWRlciIsImNhcmRIZWFkZXJQbGFpbiIsIm9uZU9mIiwibWFrZUNvbXBvbmVudFN0eWxlcyIsImJ1dHRvblN0eWxlIiwiUmVndWxhckJ1dHRvbiIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInJlZiIsInJvdW5kIiwiZnVsbFdpZHRoIiwiZGlzYWJsZWQiLCJzaW1wbGUiLCJzaXplIiwiYmxvY2siLCJsaW5rIiwianVzdEljb24iLCJidG5DbGFzc2VzIiwiYnV0dG9uIiwicm9vdCIsIkN1c3RvbURyb3Bkb3duIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsInVzZVN0YXRlIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwicGFyYW0iLCJvbkNsaWNrIiwiaGFuZGxlQ2xvc2VBd2F5IiwiYnV0dG9uVGV4dCIsImJ1dHRvbkljb24iLCJkcm9wZG93bkxpc3QiLCJidXR0b25Qcm9wcyIsImRyb3B1cCIsImRyb3Bkb3duSGVhZGVyIiwiY2FyZXQiLCJob3ZlckNvbG9yIiwibGVmdCIsInJ0bEFjdGl2ZSIsIm5vTGlQYWRkaW5nIiwibmF2RHJvcGRvd24iLCJjYXJldENsYXNzZXMiLCJjYXJldEFjdGl2ZSIsIkJvb2xlYW4iLCJjYXJldFJUTCIsImRyb3Bkb3duSXRlbSIsImRyb3Bkb3duSXRlbVJUTCIsImljb24iLCJwb3BwZXJDbG9zZSIsInBvcHBlclJlc3BvbnNpdmUiLCJwb29wZXJOYXYiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJkcm9wZG93biIsIm1lbnVMaXN0IiwibWFwIiwicHJvcCIsImtleSIsImRpdmlkZXIiLCJkcm9wZG93bkRpdmlkZXJJdGVtIiwiZGVmYXVsdFByb3BzIiwib25lT2ZUeXBlIiwib2JqZWN0IiwiYXJyYXkiLCJmdW5jIiwiQ3VzdG9tSW5wdXQiLCJmb3JtQ29udHJvbFByb3BzIiwibGFiZWxUZXh0IiwiaWQiLCJsYWJlbFByb3BzIiwiaW5wdXRQcm9wcyIsImVycm9yIiwid2hpdGUiLCJpbnB1dFJvb3RDdXN0b21DbGFzc2VzIiwic3VjY2VzcyIsImxhYmVsQ2xhc3NlcyIsImxhYmVsUm9vdEVycm9yIiwibGFiZWxSb290U3VjY2VzcyIsInVuZGVybGluZUNsYXNzZXMiLCJ1bmRlcmxpbmVFcnJvciIsInVuZGVybGluZVN1Y2Nlc3MiLCJ1bmRlcmxpbmUiLCJ3aGl0ZVVuZGVybGluZSIsIm1hcmdpblRvcCIsImlucHV0Q2xhc3NlcyIsImlucHV0Iiwid2hpdGVJbnB1dCIsImZvcm1Db250cm9sQ2xhc3NlcyIsImZvcm1Db250cm9sIiwibGFiZWxSb290IiwiaGFuZGxlQ2hhbmdlIiwiRm9vdGVyIiwid2hpdGVGb250IiwiZm9vdGVyQ2xhc3NlcyIsImZvb3RlciIsImZvb3RlcldoaXRlRm9udCIsImFDbGFzc2VzIiwiYSIsImNvbnRhaW5lciIsInJpZ2h0IiwiTG9naW5QYWdlIiwiY2FyZEFuaW1hdG9uIiwic2V0Q2FyZEFuaW1hdGlvbiIsInNldFRpbWVvdXQiLCJwYWdlSGVhZGVyIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJ0aXRsZSIsInRleHRMZWZ0IiwidHlwZSIsImVuZEFkb3JubWVudCIsImlucHV0SWNvbnNDb2xvciIsInRleHRSaWdodCIsImhyTGluZSIsImNhcmRGb290ZXJMZWZ0IiwidGV4dENlbnRlciIsIkNoZWNrIiwiZ3JpZCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsIndpZHRoIiwiR3JpZENvbnRhaW5lciIsInBvc2l0aW9uIiwibWluSGVpZ2h0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJmbGV4QmFzaXMiLCJHcmlkSXRlbSIsIkhlYWRlciIsIm1vYmlsZU9wZW4iLCJzZXRNb2JpbGVPcGVuIiwidXNlRWZmZWN0IiwiY2hhbmdlQ29sb3JPblNjcm9sbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoZWFkZXJDb2xvckNoYW5nZSIsImNsZWFudXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlRHJhd2VyVG9nZ2xlIiwid2luZG93c1Njcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiaGVpZ2h0IiwiZG9jdW1lbnQiLCJib2R5IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJyaWdodExpbmtzIiwibGVmdExpbmtzIiwiYnJhbmQiLCJmaXhlZCIsImFic29sdXRlIiwiYXBwQmFyQ2xhc3NlcyIsImFwcEJhciIsImJyYW5kQ29tcG9uZW50IiwicmVzaXplSW1nIiwiZmxleCIsImhlYWRlckRpdmlkZXIiLCJwYXBlciIsImRyYXdlclBhcGVyIiwiYXBwUmVzcG9uc2l2ZSIsImRlZmF1bHRQcm9wIiwic2hhcGUiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiSGVhZGVyTGlua3MiLCJsaXN0IiwibGlzdEl0ZW0iLCJuYXZMaW5rIiwiQXBwcyIsInRvb2x0aXAiLCJzb2NpYWxJY29ucyIsIkluZm9BcmVhIiwiZGVzY3JpcHRpb24iLCJpY29uQ29sb3IiLCJ2ZXJ0aWNhbCIsImljb25XcmFwcGVyIiwiaWNvbldyYXBwZXJWZXJ0aWNhbCIsImljb25DbGFzc2VzIiwiaWNvblZlcnRpY2FsIiwiaW5mb0FyZWEiLCJ1cmxMaW5rIiwiZGVzY3JpcHRpb25XcmFwcGVyIiwiZGFzaGJvYXJkUm91dGVzIiwiTGF5b3V0TmV3IiwiaG9tZSIsImpzczQxMyIsIlBhcmFsbGF4Iiwid2luZG93U2Nyb2xsVG9wIiwidHJhbnNmb3JtIiwic2V0VHJhbnNmb3JtIiwiaW5uZXJXaWR0aCIsInJlc2V0VHJhbnNmb3JtIiwiZmlsdGVyIiwic3R5bGUiLCJpbWFnZSIsInNtYWxsIiwicmVzcG9uc2l2ZSIsInBhcmFsbGF4Q2xhc3NlcyIsInBhcmFsbGF4IiwicGFyYWxsYXhSZXNwb25zaXZlIiwiYmFja2dyb3VuZEltYWdlIiwiU25hY2tiYXJDb250ZW50IiwibWVzc2FnZSIsImNsb3NlIiwiYWN0aW9uIiwiY2xvc2VBbGVydCIsInNldEFsZXJ0IiwiaWNvbkJ1dHRvbiIsInNuYWNrSWNvbiIsImFsZXJ0IiwiTXlTdGVwcGVyIiwic3RlcHMiLCJhY3RpdmVOdW0iLCJWYWxpZGF0ZVRhYmxlIiwiYXR0cmlidXRlUm93cyIsIk9iamVjdCIsImtleXMiLCJ1c2VyRGV0YWlscyIsImZsYXRNYXAiLCJhdHRyaWJ1dGVOYW1lIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwiZWwiLCJzZXRDaGlsZEVsbSIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJ2YWx1ZSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZSIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiZGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJQcm9kdWN0U2VjdGlvbiIsInNlY3Rpb24iLCJDaGF0IiwiVmVyaWZpZWRVc2VyIiwiRmluZ2VycHJpbnQiLCJUZWFtU2VjdGlvbiIsImltYWdlQ2xhc3NlcyIsImltZ1JhaXNlZCIsImltZ1JvdW5kZWRDaXJjbGUiLCJpbWdGbHVpZCIsIml0ZW1HcmlkIiwiY2FyZFRpdGxlIiwic21hbGxUaXRsZSIsImp1c3RpZnlDZW50ZXIiLCJtYXJnaW41Iiwic29jaWFscyIsIldvcmtTZWN0aW9uIiwidGV4dEFyZWEiLCJRdWVyeVZpZXciLCJwcmV2ZW50RGVmYXVsdCIsImxvZyIsImNvbXBhbnlOYW1lIiwiY29tcGFueUNvdW50cnkiLCJMRUkiLCJpc05leHRFbmFibGVkIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsInN0cmluZ05vdEVtcHR5IiwicmVkdXhTdG9yZSIsInJlcSIsInNldFN0YXRlIiwibGVpIiwicyIsImxlbmd0aCIsInJlbmRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInRlc3QiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbm5lY3QiLCJoZXhDb2xvclRvUkdCIiwiaGV4Q29sb3IiLCJkZXRlY3RTaG9ydGhhbmQiLCJyIiwiYiIsImhleF9hcnJheSIsImV4ZWMiLCJoZXhUb1JHQkFscGhhIiwiYWxwaGEiLCJyZ2IiLCJkcmF3ZXJXaWR0aCIsInRyYW5zaXRpb24iLCJjb250YWluZXJGbHVpZCIsImNvbnRhaW5lckZsdWlkTmV3IiwiY29udGFpbmVyRmx1aWRBdXRvIiwibWF4V2lkdGgiLCJjb250YWluZXJOZXciLCJjb250YWluZXJBdXRvIiwiYm94U2hhZG93IiwiZGlzcGxheSIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJkZWZhdWx0Rm9udCIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsInByaW1hcnlDb2xvciIsIndhcm5pbmdDb2xvciIsImRhbmdlckNvbG9yIiwic3VjY2Vzc0NvbG9yIiwiaW5mb0NvbG9yIiwicm9zZUNvbG9yIiwiZ3JheUNvbG9yIiwicHJpbWFyeUJveFNoYWRvdyIsImluZm9Cb3hTaGFkb3ciLCJzdWNjZXNzQm94U2hhZG93Iiwid2FybmluZ0JveFNoYWRvdyIsImRhbmdlckJveFNoYWRvdyIsInJvc2VCb3hTaGFkb3ciLCJ3YXJuaW5nQ2FyZEhlYWRlciIsInN1Y2Nlc3NDYXJkSGVhZGVyIiwiZGFuZ2VyQ2FyZEhlYWRlciIsImluZm9DYXJkSGVhZGVyIiwicHJpbWFyeUNhcmRIZWFkZXIiLCJyb3NlQ2FyZEhlYWRlciIsImNhcmRBY3Rpb25zIiwicGFkZGluZ1RvcCIsImJvcmRlclRvcCIsInBhZGRpbmciLCJkZWZhdWx0Qm94U2hhZG93IiwiYm9yZGVyIiwidGV4dERlY29yYXRpb24iLCJjYXJkTGluayIsImNhcmRTdWJ0aXRsZSIsIm1hcmdpbkJvdHRvbSIsIm1pbldpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwibGV0dGVyU3BhY2luZyIsIndpbGxDaGFuZ2UiLCJ0ZXh0QWxpZ24iLCJ3aGl0ZVNwYWNlIiwidmVydGljYWxBbGlnbiIsInRvdWNoQWN0aW9uIiwiY3Vyc29yIiwidG9wIiwicHJpbWFyeSIsImluZm8iLCJ3YXJuaW5nIiwiZGFuZ2VyIiwicm9zZSIsInR3aXR0ZXIiLCJmYWNlYm9vayIsImdvb2dsZSIsImdpdGh1YiIsInRyYW5zcGFyZW50Iiwib3BhY2l0eSIsInBvaW50ZXJFdmVudHMiLCJsZyIsInNtIiwiY2FyZEJvZHlTdHlsZSIsImNhcmRGb290ZXJTdHlsZSIsImFsaWduSXRlbXMiLCJjYXJkSGVhZGVyU3R5bGUiLCJjYXJkU3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwid29yZFdyYXAiLCJvdmVyZmxvdyIsImN1c3RvbURyb3Bkb3duU3R5bGUiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwiZG93biIsInpJbmRleCIsImxpc3RTdHlsZSIsImJhY2tncm91bmRDbGlwIiwiZmxvYXQiLCJjbGVhciIsImJsYWNrSG92ZXIiLCJwcmltYXJ5SG92ZXIiLCJpbmZvSG92ZXIiLCJzdWNjZXNzSG92ZXIiLCJ3YXJuaW5nSG92ZXIiLCJkYW5nZXJIb3ZlciIsInJvc2VIb3ZlciIsImJvcmRlclJpZ2h0IiwiYm9yZGVyTGVmdCIsImN1c3RvbUlucHV0U3R5bGUiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiZm9vdGVyU3R5bGUiLCJpbmxpbmVCbG9jayIsImhlYWRlckxpbmtzU3R5bGUiLCJwYWRkaW5nQm90dG9tIiwiY29udGVudCIsImxpc3RJdGVtVGV4dCIsImp1c3RpZnlDb250ZW50Iiwibm90aWZpY2F0aW9uTmF2TGluayIsInJlZ2lzdGVyTmF2TGluayIsIm5hdkxpbmtBY3RpdmUiLCJpY29ucyIsImRyb3Bkb3duTGluayIsIm1hcmdpblJpZ2h0NSIsImhlYWRlclN0eWxlIiwiZmxleEZsb3ciLCJmbGV4V3JhcCIsImRhcmsiLCJib3R0b20iLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24iLCJ2aXNpYmlsaXR5Iiwib3ZlcmZsb3dZIiwibWF4SGVpZ2h0IiwiaW5mb1N0eWxlIiwiZ3JheSIsInBhcmFsbGF4U3R5bGUiLCJzbmFja2JhckNvbnRlbnRTdHlsZSIsImltYWdlc1N0eWxlcyIsImltZ1JvdW5kZWQiLCJpbWdHYWxsZXJ5IiwiaW1nQ2FyZFRvcCIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImltZ0NhcmRCb3R0b20iLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJpbWdDYXJkIiwiaW1nQ2FyZE92ZXJsYXkiLCJsYW5kaW5nUGFnZVN0eWxlIiwic3VidGl0bGUiLCJtYWluIiwibWFpblJhaXNlZCIsInByb2R1Y3RTdHlsZSIsInRlYW1TdHlsZSIsImltYWdlc1N0eWxlIiwid29ya1N0eWxlIiwic2lnbnVwUGFnZVN0eWxlIiwiY2FyZEhpZGRlbiIsImZvcm0iLCJjYXJkTWlkIiwic29jaWFsTGluZSIsIk11aUNvbnRhaW5lclJvb3QiLCJib3hTaXppbmciLCJqc3M0MDkiLCJ0b29sdGlwc1N0eWxlIiwiZm9udFN0eWxlIiwidGV4dFNoYWRvdyIsIndvcmRCcmVhayIsIndvcmRTcGFjaW5nIiwibGluZUJyZWFrIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NDQTs7Q0FFQTs7Q0FFQTs7Q0FFQTtBQUVBOztBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyw4RkFBRCxDQUE1QjtBQUVlLFNBQVND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OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHFEIiwiZmlsZSI6InBhZ2VzL2t5Yi9jb21wYW55LXNlbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMva3liL2NvbXBhbnktc2VsZWN0aW9uLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9jYXJkU3R5bGUuanNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBwbGFpbiwgY2Fyb3VzZWwsIC4uLnJlc3QgfSA9IHByb3BzO1xuICBjb25zdCBjYXJkQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmNhcmRdOiB0cnVlLFxuICAgIFtjbGFzc2VzLmNhcmRQbGFpbl06IHBsYWluLFxuICAgIFtjbGFzc2VzLmNhcmRDYXJvdXNlbF06IGNhcm91c2VsLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgIT09IHVuZGVmaW5lZCxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NhcmRDbGFzc2VzfSB7Li4ucmVzdH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkNhcmQucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWluOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2Fyb3VzZWw6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwic3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2NvbXBvbmVudHMvY2FyZEJvZHlTdHlsZS5qc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRCb2R5KHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc3QgY2FyZEJvZHlDbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgW2NsYXNzZXMuY2FyZEJvZHldOiB0cnVlLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgIT09IHVuZGVmaW5lZCxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NhcmRCb2R5Q2xhc3Nlc30gey4uLnJlc3R9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5DYXJkQm9keS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBzdHlsZXMgZnJvbSBcInN0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2NhcmRGb290ZXJTdHlsZS5qc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRGb290ZXIocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IHByb3BzO1xuICBjb25zdCBjYXJkRm9vdGVyQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmNhcmRGb290ZXJdOiB0cnVlLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgIT09IHVuZGVmaW5lZCxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NhcmRGb290ZXJDbGFzc2VzfSB7Li4ucmVzdH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkNhcmRGb290ZXIucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9jYXJkSGVhZGVyU3R5bGUuanNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkSGVhZGVyKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBjb2xvciwgcGxhaW4sIC4uLnJlc3QgfSA9IHByb3BzO1xuICBjb25zdCBjYXJkSGVhZGVyQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmNhcmRIZWFkZXJdOiB0cnVlLFxuICAgIFtjbGFzc2VzW2NvbG9yICsgXCJDYXJkSGVhZGVyXCJdXTogY29sb3IsXG4gICAgW2NsYXNzZXMuY2FyZEhlYWRlclBsYWluXTogcGxhaW4sXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkLFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZEhlYWRlckNsYXNzZXN9IHsuLi5yZXN0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuQ2FyZEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXCJ3YXJuaW5nXCIsIFwic3VjY2Vzc1wiLCBcImRhbmdlclwiLCBcImluZm9cIiwgXCJwcmltYXJ5XCJdKSxcbiAgcGxhaW46IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCBtYWtlU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvbWFrZVN0eWxlc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5cbi8vIGNvcmUgY29tcG9uZW50c1xuXG5pbXBvcnQgYnV0dG9uU3R5bGUgZnJvbSBcInN0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2J1dHRvblN0eWxlLmpzXCI7XG5cbmNvbnN0IG1ha2VDb21wb25lbnRTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XG4gIC4uLmJ1dHRvblN0eWxlLFxufSkpO1xuXG5jb25zdCBSZWd1bGFyQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7XG4gICAgY29sb3IsXG4gICAgcm91bmQsXG4gICAgY2hpbGRyZW4sXG4gICAgZnVsbFdpZHRoLFxuICAgIGRpc2FibGVkLFxuICAgIHNpbXBsZSxcbiAgICBzaXplLFxuICAgIGJsb2NrLFxuICAgIGxpbmssXG4gICAganVzdEljb24sXG4gICAgY2xhc3NOYW1lLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBtYWtlQ29tcG9uZW50U3R5bGVzKCk7XG5cbiAgY29uc3QgYnRuQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmJ1dHRvbl06IHRydWUsXG4gICAgW2NsYXNzZXNbc2l6ZV1dOiBzaXplLFxuICAgIFtjbGFzc2VzW2NvbG9yXV06IGNvbG9yLFxuICAgIFtjbGFzc2VzLnJvdW5kXTogcm91bmQsXG4gICAgW2NsYXNzZXMuZnVsbFdpZHRoXTogZnVsbFdpZHRoLFxuICAgIFtjbGFzc2VzLmRpc2FibGVkXTogZGlzYWJsZWQsXG4gICAgW2NsYXNzZXMuc2ltcGxlXTogc2ltcGxlLFxuICAgIFtjbGFzc2VzLmJsb2NrXTogYmxvY2ssXG4gICAgW2NsYXNzZXMubGlua106IGxpbmssXG4gICAgW2NsYXNzZXMuanVzdEljb25dOiBqdXN0SWNvbixcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uIHsuLi5yZXN0fSByZWY9e3JlZn0gY2xhc3Nlcz17eyByb290OiBidG5DbGFzc2VzIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQnV0dG9uPlxuICApO1xufSk7XG5cblJlZ3VsYXJCdXR0b24ucHJvcFR5cGVzID0ge1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInByaW1hcnlcIixcbiAgICBcImluZm9cIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICAgIFwicm9zZVwiLFxuICAgIFwid2hpdGVcIixcbiAgICBcImZhY2Vib29rXCIsXG4gICAgXCJ0d2l0dGVyXCIsXG4gICAgXCJnb29nbGVcIixcbiAgICBcImdpdGh1YlwiLFxuICAgIFwidHJhbnNwYXJlbnRcIixcbiAgXSksXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJzbVwiLCBcImxnXCJdKSxcbiAgc2ltcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgcm91bmQ6IFByb3BUeXBlcy5ib29sLFxuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGJsb2NrOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGluazogUHJvcFR5cGVzLmJvb2wsXG4gIGp1c3RJY29uOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWd1bGFyQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XG5pbXBvcnQgTWVudUxpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCI7XG5pbXBvcnQgQ2xpY2tBd2F5TGlzdGVuZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XG5pbXBvcnQgR3JvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3Jvd1wiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcbmltcG9ydCBJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uXCI7XG5pbXBvcnQgUG9wcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIjtcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJjb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcInN0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2N1c3RvbURyb3Bkb3duU3R5bGUuanNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21Ecm9wZG93bihwcm9wcykge1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChhbmNob3JFbCAmJiBhbmNob3JFbC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBoYW5kbGVDbG9zZSA9IChwYXJhbSkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICAgIGlmIChwcm9wcyAmJiBwcm9wcy5vbkNsaWNrKSB7XG4gICAgICBwcm9wcy5vbkNsaWNrKHBhcmFtKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNsb3NlQXdheSA9IChldmVudCkgPT4ge1xuICAgIGlmIChhbmNob3JFbC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHtcbiAgICBidXR0b25UZXh0LFxuICAgIGJ1dHRvbkljb24sXG4gICAgZHJvcGRvd25MaXN0LFxuICAgIGJ1dHRvblByb3BzLFxuICAgIGRyb3B1cCxcbiAgICBkcm9wZG93bkhlYWRlcixcbiAgICBjYXJldCxcbiAgICBob3ZlckNvbG9yLFxuICAgIGxlZnQsXG4gICAgcnRsQWN0aXZlLFxuICAgIG5vTGlQYWRkaW5nLFxuICAgIG5hdkRyb3Bkb3duLFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGNhcmV0Q2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmNhcmV0XTogdHJ1ZSxcbiAgICBbY2xhc3Nlcy5jYXJldEFjdGl2ZV06IEJvb2xlYW4oYW5jaG9yRWwpLFxuICAgIFtjbGFzc2VzLmNhcmV0UlRMXTogcnRsQWN0aXZlLFxuICB9KTtcbiAgY29uc3QgZHJvcGRvd25JdGVtID0gY2xhc3NOYW1lcyh7XG4gICAgW2NsYXNzZXMuZHJvcGRvd25JdGVtXTogdHJ1ZSxcbiAgICBbY2xhc3Nlc1tob3ZlckNvbG9yICsgXCJIb3ZlclwiXV06IHRydWUsXG4gICAgW2NsYXNzZXMubm9MaVBhZGRpbmddOiBub0xpUGFkZGluZyxcbiAgICBbY2xhc3Nlcy5kcm9wZG93bkl0ZW1SVExdOiBydGxBY3RpdmUsXG4gIH0pO1xuICBsZXQgaWNvbiA9IG51bGw7XG4gIHN3aXRjaCAodHlwZW9mIGJ1dHRvbkljb24pIHtcbiAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICBpY29uID0gPHByb3BzLmJ1dHRvbkljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkljb259IC8+O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgaWNvbiA9IDxJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25JY29ufT57cHJvcHMuYnV0dG9uSWNvbn08L0ljb24+O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGljb24gPSBudWxsO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJOb3RpZmljYXRpb25zXCJcbiAgICAgICAgICBhcmlhLW93bnM9e2FuY2hvckVsID8gXCJtZW51LWxpc3RcIiA6IG51bGx9XG4gICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgIHsuLi5idXR0b25Qcm9wc31cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIHtpY29ufVxuICAgICAgICAgIHtidXR0b25UZXh0ICE9PSB1bmRlZmluZWQgPyBidXR0b25UZXh0IDogbnVsbH1cbiAgICAgICAgICB7Y2FyZXQgPyA8YiBjbGFzc05hbWU9e2NhcmV0Q2xhc3Nlc30gLz4gOiBudWxsfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFBvcHBlclxuICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICB0cmFuc2l0aW9uXG4gICAgICAgIGRpc2FibGVQb3J0YWxcbiAgICAgICAgcGxhY2VtZW50PXtcbiAgICAgICAgICBkcm9wdXBcbiAgICAgICAgICAgID8gbGVmdFxuICAgICAgICAgICAgICA/IFwidG9wLXN0YXJ0XCJcbiAgICAgICAgICAgICAgOiBcInRvcFwiXG4gICAgICAgICAgICA6IGxlZnRcbiAgICAgICAgICAgID8gXCJib3R0b20tc3RhcnRcIlxuICAgICAgICAgICAgOiBcImJvdHRvbVwiXG4gICAgICAgIH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcbiAgICAgICAgICBbY2xhc3Nlcy5wb3BwZXJDbG9zZV06ICFhbmNob3JFbCxcbiAgICAgICAgICBbY2xhc3Nlcy5wb3BwZXJSZXNwb25zaXZlXTogdHJ1ZSxcbiAgICAgICAgICBbY2xhc3Nlcy5wb29wZXJOYXZdOiBCb29sZWFuKGFuY2hvckVsKSAmJiBuYXZEcm9wZG93bixcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIHsoKSA9PiAoXG4gICAgICAgICAgPEdyb3dcbiAgICAgICAgICAgIGluPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgICAgIGlkPVwibWVudS1saXN0XCJcbiAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgZHJvcHVwXG4gICAgICAgICAgICAgICAgPyB7IHRyYW5zZm9ybU9yaWdpbjogXCIwIDEwMCUgMFwiIH1cbiAgICAgICAgICAgICAgICA6IHsgdHJhbnNmb3JtT3JpZ2luOiBcIjAgMCAwXCIgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMuZHJvcGRvd259PlxuICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e2hhbmRsZUNsb3NlQXdheX0+XG4gICAgICAgICAgICAgICAgPE1lbnVMaXN0IHJvbGU9XCJtZW51XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVMaXN0fT5cbiAgICAgICAgICAgICAgICAgIHtkcm9wZG93bkhlYWRlciAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbG9zZShkcm9wZG93bkhlYWRlcil9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyb3Bkb3duSGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2Ryb3Bkb3duSGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICB7ZHJvcGRvd25MaXN0Lm1hcCgocHJvcCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wLmRpdmlkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsb3NlKFwiZGl2aWRlclwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyb3Bkb3duRGl2aWRlckl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xvc2UocHJvcCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ryb3Bkb3duSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcH1cbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cbiAgICAgICAgICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9Hcm93PlxuICAgICAgICApfVxuICAgICAgPC9Qb3BwZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkN1c3RvbURyb3Bkb3duLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2FyZXQ6IHRydWUsXG4gIGhvdmVyQ29sb3I6IFwicHJpbWFyeVwiLFxufTtcblxuQ3VzdG9tRHJvcGRvd24ucHJvcFR5cGVzID0ge1xuICBob3ZlckNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwiYmxhY2tcIixcbiAgICBcInByaW1hcnlcIixcbiAgICBcImluZm9cIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICAgIFwicm9zZVwiLFxuICBdKSxcbiAgYnV0dG9uVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gIGJ1dHRvbkljb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgZHJvcGRvd25MaXN0OiBQcm9wVHlwZXMuYXJyYXksXG4gIGJ1dHRvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBkcm9wdXA6IFByb3BUeXBlcy5ib29sLFxuICBkcm9wZG93bkhlYWRlcjogUHJvcFR5cGVzLm5vZGUsXG4gIHJ0bEFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNhcmV0OiBQcm9wVHlwZXMuYm9vbCxcbiAgbGVmdDogUHJvcFR5cGVzLmJvb2wsXG4gIG5vTGlQYWRkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgbmF2RHJvcGRvd246IFByb3BUeXBlcy5ib29sLFxuICAvLyBmdW5jdGlvbiB0aGF0IHJldHVucyB0aGUgc2VsZWN0ZWQgaXRlbVxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbFwiO1xuaW1wb3J0IElucHV0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9jdXN0b21JbnB1dFN0eWxlLmpzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tSW5wdXQocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7XG4gICAgZm9ybUNvbnRyb2xQcm9wcyxcbiAgICBsYWJlbFRleHQsXG4gICAgaWQsXG4gICAgbGFiZWxQcm9wcyxcbiAgICBpbnB1dFByb3BzLFxuICAgIGVycm9yLFxuICAgIHdoaXRlLFxuICAgIGlucHV0Um9vdEN1c3RvbUNsYXNzZXMsXG4gICAgc3VjY2VzcyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGxhYmVsQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtcIiBcIiArIGNsYXNzZXMubGFiZWxSb290RXJyb3JdOiBlcnJvcixcbiAgICBbXCIgXCIgKyBjbGFzc2VzLmxhYmVsUm9vdFN1Y2Nlc3NdOiBzdWNjZXNzICYmICFlcnJvcixcbiAgfSk7XG4gIGNvbnN0IHVuZGVybGluZUNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy51bmRlcmxpbmVFcnJvcl06IGVycm9yLFxuICAgIFtjbGFzc2VzLnVuZGVybGluZVN1Y2Nlc3NdOiBzdWNjZXNzICYmICFlcnJvcixcbiAgICBbY2xhc3Nlcy51bmRlcmxpbmVdOiB0cnVlLFxuICAgIFtjbGFzc2VzLndoaXRlVW5kZXJsaW5lXTogd2hpdGUsXG4gIH0pO1xuICBjb25zdCBtYXJnaW5Ub3AgPSBjbGFzc05hbWVzKHtcbiAgICBbaW5wdXRSb290Q3VzdG9tQ2xhc3Nlc106IGlucHV0Um9vdEN1c3RvbUNsYXNzZXMgIT09IHVuZGVmaW5lZCxcbiAgfSk7XG4gIGNvbnN0IGlucHV0Q2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmlucHV0XTogdHJ1ZSxcbiAgICBbY2xhc3Nlcy53aGl0ZUlucHV0XTogd2hpdGUsXG4gIH0pO1xuICB2YXIgZm9ybUNvbnRyb2xDbGFzc2VzO1xuICBpZiAoZm9ybUNvbnRyb2xQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZm9ybUNvbnRyb2xDbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgIGZvcm1Db250cm9sUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY2xhc3Nlcy5mb3JtQ29udHJvbFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZm9ybUNvbnRyb2xDbGFzc2VzID0gY2xhc3Nlcy5mb3JtQ29udHJvbDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxGb3JtQ29udHJvbCB7Li4uZm9ybUNvbnRyb2xQcm9wc30gY2xhc3NOYW1lPXtmb3JtQ29udHJvbENsYXNzZXN9PlxuICAgICAge2xhYmVsVGV4dCAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICA8SW5wdXRMYWJlbFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbFJvb3QgKyBcIiBcIiArIGxhYmVsQ2xhc3Nlc31cbiAgICAgICAgICBodG1sRm9yPXtpZH1cbiAgICAgICAgICB7Li4ubGFiZWxQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbFRleHR9XG4gICAgICAgIDwvSW5wdXRMYWJlbD5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPElucHV0XG4gICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICBpbnB1dDogaW5wdXRDbGFzc2VzLFxuICAgICAgICAgIHJvb3Q6IG1hcmdpblRvcCxcbiAgICAgICAgICBkaXNhYmxlZDogY2xhc3Nlcy5kaXNhYmxlZCxcbiAgICAgICAgICB1bmRlcmxpbmU6IHVuZGVybGluZUNsYXNzZXMsXG4gICAgICAgIH19XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAvPlxuICAgIDwvRm9ybUNvbnRyb2w+XG4gICk7XG59XG5cbkN1c3RvbUlucHV0LnByb3BUeXBlcyA9IHtcbiAgbGFiZWxUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgbGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGZvcm1Db250cm9sUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGlucHV0Um9vdEN1c3RvbUNsYXNzZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3VjY2VzczogUHJvcFR5cGVzLmJvb2wsXG4gIHdoaXRlOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iLCIvKmVzbGludC1kaXNhYmxlKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gbWF0ZXJpYWwtdWkgY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBMaXN0LCBMaXN0SXRlbSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5pbXBvcnQgRmF2b3JpdGUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9mb290ZXJTdHlsZS5qc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQ3VzdG9tQnV0dG9ucy9CdXR0b25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IHdoaXRlRm9udCB9ID0gcHJvcHM7XG4gIGNvbnN0IGZvb3RlckNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy5mb290ZXJdOiB0cnVlLFxuICAgIFtjbGFzc2VzLmZvb3RlcldoaXRlRm9udF06IHdoaXRlRm9udCxcbiAgfSk7XG4gIGNvbnN0IGFDbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgW2NsYXNzZXMuYV06IHRydWUsXG4gICAgW2NsYXNzZXMuZm9vdGVyV2hpdGVGb250XTogd2hpdGVGb250LFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Zm9vdGVyQ2xhc3Nlc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxmSW1nQW5kVGV4dFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZkltZ0FuZFRleHQtLXRleHRcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Yj5Dby1maW5hbmNlZCBieSB0aGUgRXVyb3BlYW4gVW5pb248L2I+XG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyRnRyXCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBDb25uZWN0aW5nIEV1cm9wZSBGYWNpbGl0eVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRtVGV4dFwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFRoZSBVQWVnZWFuIEVSQVNNVVMgbXlJRCBDYXJkIFNlcnZpY2UgaGFzIGJlZW4gY28tZmluYW5jZWQ8YnIvPlxuICAgICAgICAgICAgICBieSB0aGUgQ29ubmVjdGluZyBFdXJvcGUgRmFjaWxpdHkgKENFRikgb2YgdGhlIEV1cm9wZWFuIFVuaW9uPGJyLz5cbiAgICAgICAgICAgICAgKFNlYWwgUHJvamVjdDogR3JhbnQgQWdyZWVtZW50IE5vIElORUEvQ0VGL0lDVC9BMjAxOC8xNjMzMTcwKTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7Lyo8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmlubGluZUJsb2NrfT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS8/cmVmPW5qc21rLWZvb3RlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2NrfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDcmVhdGl2ZSBUaW1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuaW5saW5lQmxvY2t9PlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3ByZXNlbnRhdGlvbj9yZWY9bmpzbWstZm9vdGVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmxvY2t9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFib3V0IHVzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmlubGluZUJsb2NrfT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL2Jsb2cuY3JlYXRpdmUtdGltLmNvbS8/cmVmPW5qc21rLWZvb3RlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2NrfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBCbG9nXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmlubGluZUJsb2NrfT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9saWNlbnNlP3JlZj1uanNtay1mb290ZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ibG9ja31cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTGljZW5zZXNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICA8L0xpc3Q+Ki99XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJpZ2h0fT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgVW5pdmVyc2l0eSBvZiB0aGUgQWVnZWFuIHwgRHB0IG9mIEZpbmFuY2lhbCBhbmQgTWFuYWdlbWVudCBFbmdpbmVlcmluZyB8IGk0bSBMYWJcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgV2ViIGFkZHJlc3MgfCBEcHQ6IDxMaW5rIHNpbXBsZSBjb2xvcj1cInByaW1hcnlcIiBocmVmPXtcImh0dHA6Ly93d3cuZm1lLmFlZ2Vhbi5nci9cIn0gPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICBodHRwOi8vd3d3LmZtZS5hZWdlYW4uZ3IvXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBXZWIgYWRkcmVzcyB8IGk0bSBMYWI6IDxhIGhyZWY9XCJodHRwOi8vd3d3LmF0bGFudGlzLWdyb3VwLmdyL2k0TWxhYlwiPmh0dHA6Ly93d3cuYXRsYW50aXMtZ3JvdXAuZ3IvaTRNbGFiPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBlLW1haWw6IGk0bWxhYi1jb3Vyc2VzQGFlZ2Vhbi5nclxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBTZXJ2aWNlIGRldmVsb3BlZCBieSBVQWVnZWFuIHwgaTRtIExhYiDCqSAyMDIxXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59XG5cbkZvb3Rlci5wcm9wVHlwZXMgPSB7XG4gIHdoaXRlRm9udDogUHJvcFR5cGVzLmJvb2wsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnRcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25cIjtcclxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXHJcbmltcG9ydCBFbWFpbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VtYWlsXCI7XHJcbmltcG9ydCBQZW9wbGUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QZW9wbGVcIjtcclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc1wiO1xyXG5pbXBvcnQgSGVhZGVyTGlua3MgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlckxpbmtzLmpzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc1wiO1xyXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanNcIjtcclxuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCJjb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmQuanNcIjtcclxuaW1wb3J0IENhcmRCb2R5IGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZEJvZHkuanNcIjtcclxuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkSGVhZGVyLmpzXCI7XHJcbmltcG9ydCBDYXJkRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZEZvb3Rlci5qc1wiO1xyXG5pbXBvcnQgQ3VzdG9tSW5wdXQgZnJvbSBcImNvbXBvbmVudHMvQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXQuanNcIjtcclxuaW1wb3J0IFN0ZXBwZXIgZnJvbSBcImNvbXBvbmVudHMvU3RlcHBlci5qc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwic3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L3BhZ2VzL2xvZ2luUGFnZS5qc1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5QYWdlKHByb3BzKSB7XHJcbiAgICBjb25zdCBbY2FyZEFuaW1hdG9uLCBzZXRDYXJkQW5pbWF0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKFwiY2FyZEhpZGRlblwiKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNldENhcmRBbmltYXRpb24oXCJcIik7XHJcbiAgICB9LCA3MDApO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgeyAuLi5yZXN0IH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgYWJzb2x1dGVcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBicmFuZD1cIk5leHRKUyBNYXRlcmlhbCBLaXRcIlxyXG4gICAgICAgICAgICAgICAgcmlnaHRMaW5rcz17PEhlYWRlckxpbmtzIC8+fVxyXG4gICAgICAgICAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWdlSGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCcvaW1nL2JnNy5qcGcnKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcInRvcCBjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezR9IG1kPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXNbY2FyZEFuaW1hdG9uXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZEhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+Rm9ybSBUaXRsZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RlcHBlciBzdGVwcz17W3t0aXRsZTogJ1N0ZXAgT25lJ30sIHt0aXRsZTogJ1N0ZXAgVHdvJ30sIHt0aXRsZTogJ1N0ZXAgVGhyZWUnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGU6ICdTdGVwIEZvdXInfSwge3RpdGxlOiAnU3RlcCBGaXZlJ30sIHt0aXRsZTogJ1N0ZXAgU2l4J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlOiAnU3RlcCBTZXZlbid9LCB7dGl0bGU6ICdTdGVwIEVpZ2h0J30gXSB9IGFjdGl2ZVN0ZXA9eyAzIH0gIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsTGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e1wiZmFiIGZhLXR3aXR0ZXJcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17XCJmYWIgZmEtZmFjZWJvb2tcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17XCJmYWIgZmEtZ29vZ2xlLXBsdXMtZ1wifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8U3RlcHBlciAvPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfT5JbiBvcmRlciB0byBidWlsZCB5b3VyIEtZQiBwcm9maWxlLCBmaXJzdCBwcm92aWRlIHlvdXIgY29tcGFueeKAmXMgZGV0YWlscyBiZWxvdywgYW5kIHRoZW4gY2xpY2sgdGhlIOKAnFJldHJpZXZlIERhdGHigJ0gYnV0dG9uLiBUaGlzIHdpbGwgcmVzdWx0IGluIGFuIGVJREFTIGVJRCBhdXRoZW50aWNhdGlvbi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dExlZnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wYW55IERldGFpbHMgRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFRleHQ9XCJDb21wYW55IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbXBhbnlOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFRleHQ9XCJDb21wYW55IENvdW50cnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbXBhbnlDb3VudHJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFRleHQ9XCJMRUlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxlaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRMZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXByZXNlbnRhdGl2ZSBGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZW9wbGUgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0SWNvbnNDb2xvcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiU3VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN1cm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50OiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlb3BsZSBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRJY29uc0NvbG9yfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFRleHQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RW1haWwgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0SWNvbnNDb2xvcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8Q3VzdG9tSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFRleHQ9XCJGaXJzdCBOYW1lLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpcnN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlb3BsZSBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRJY29uc0NvbG9yfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dD1cIkVtYWlsLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbWFpbCBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRJY29uc0NvbG9yfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0SWNvbnNDb2xvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2tfb3V0bGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZTogXCJvZmZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRGb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRGb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwibGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXRyaWV2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L2Zvcm0+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIHdoaXRlRm9udCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnRcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25cIjtcclxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXHJcbmltcG9ydCBFbWFpbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VtYWlsXCI7XHJcbmltcG9ydCBQZW9wbGUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QZW9wbGVcIjtcclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc1wiO1xyXG5pbXBvcnQgSGVhZGVyTGlua3MgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlckxpbmtzLmpzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc1wiO1xyXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanNcIjtcclxuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCJjb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmQuanNcIjtcclxuaW1wb3J0IENhcmRCb2R5IGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZEJvZHkuanNcIjtcclxuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkSGVhZGVyLmpzXCI7XHJcbmltcG9ydCBDYXJkRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZEZvb3Rlci5qc1wiO1xyXG5pbXBvcnQgQ3VzdG9tSW5wdXQgZnJvbSBcImNvbXBvbmVudHMvQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXQuanNcIjtcclxuaW1wb3J0IFN0ZXBwZXIgZnJvbSBcImNvbXBvbmVudHMvU3RlcHBlci5qc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvcGFnZXMvbG9naW5QYWdlLmpzXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblBhZ2UocHJvcHMpIHtcclxuICAgIGNvbnN0IFtjYXJkQW5pbWF0b24sIHNldENhcmRBbmltYXRpb25dID0gUmVhY3QudXNlU3RhdGUoXCJjYXJkSGlkZGVuXCIpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0Q2FyZEFuaW1hdGlvbihcIlwiKTtcclxuICAgIH0sIDcwMCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7IC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICBhYnNvbHV0ZVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIGJyYW5kPVwiTmV4dEpTIE1hdGVyaWFsIEtpdFwiXHJcbiAgICAgICAgICAgICAgICByaWdodExpbmtzPXs8SGVhZGVyTGlua3MgLz59XHJcbiAgICAgICAgICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2VIZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcInRvcCBjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezR9IG1kPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXNbY2FyZEFuaW1hdG9uXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk1hbmRhdGUgVmFsaWRhdGlvbjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwcGVyIHN0ZXBzPXtbe3RpdGxlOiAnU3RlcCBPbmUnfSwge3RpdGxlOiAnU3RlcCBUd28nfSwge3RpdGxlOiAnU3RlcCBUaHJlZSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlOiAnU3RlcCBGb3VyJ30sIHt0aXRsZTogJ1N0ZXAgRml2ZSd9LCB7dGl0bGU6ICdTdGVwIFNpeCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlOiAnU3RlcCBTZXZlbid9LCB7dGl0bGU6ICdTdGVwIEVpZ2h0J30gXSB9IGFjdGl2ZVN0ZXA9eyA1IH0gIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIHZhbGlkYXRlIHlvdXIgcmVsYXRpb25zaGlwIHdpdGggdGhlIGRlY2xhcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFueS4gVG8gZG8gc28sIGNsaWNrIHRoZSBTaWduIGJ1dHRvbi4gVGhpcyB3aWxsIHJlc3VsdCBpbiB0aGUgc2lnbmluZyB2aWEgYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpZmllZCBPbmUgVGltZSBTaWduYXR1cmUgKGlzc3VlZCB1c2luZyB5b3VyIGVJREFTIGVJRCBwcm9maWxlKSBvZiBhIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGluZyB5b3VyIHJlbGF0aW9uc2hpcCB3aXRoIHRoZSBkZWNsYXJlZCBjb21wYW55LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvIHJldmlldyB0aGUgZG9jdW1lbnQgcGxlYXNlIGNsaWNrIDxMaW5rIGhyZWY9e1wiI1wifT48YT5oZXJlPC9hPjwvTGluaz4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRGb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRGb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRGb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvZm9ybT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgd2hpdGVGb250IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvblwiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcclxuaW1wb3J0IEVtYWlsIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRW1haWxcIjtcclxuaW1wb3J0IFBlb3BsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Blb3BsZVwiO1xyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzXCI7XHJcbmltcG9ydCBIZWFkZXJMaW5rcyBmcm9tIFwiY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyTGlua3MuanNcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzXCI7XHJcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gXCJjb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lci5qc1wiO1xyXG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSBcImNvbXBvbmVudHMvR3JpZC9HcmlkSXRlbS5qc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJjb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgQ2FyZEJvZHkgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkQm9keS5qc1wiO1xyXG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmRIZWFkZXIuanNcIjtcclxuaW1wb3J0IENhcmRGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkRm9vdGVyLmpzXCI7XHJcbmltcG9ydCBDdXN0b21JbnB1dCBmcm9tIFwiY29tcG9uZW50cy9DdXN0b21JbnB1dC9DdXN0b21JbnB1dC5qc1wiO1xyXG5pbXBvcnQgU3RlcHBlciBmcm9tIFwiY29tcG9uZW50cy9TdGVwcGVyLmpzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcInN0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9wYWdlcy9sb2dpblBhZ2UuanNcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZShwcm9wcykge1xyXG4gICAgY29uc3QgW2NhcmRBbmltYXRvbiwgc2V0Q2FyZEFuaW1hdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShcImNhcmRIaWRkZW5cIik7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZXRDYXJkQW5pbWF0aW9uKFwiXCIpO1xyXG4gICAgfSwgNzAwKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHsgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgIGFic29sdXRlXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgYnJhbmQ9XCJOZXh0SlMgTWF0ZXJpYWwgS2l0XCJcclxuICAgICAgICAgICAgICAgIHJpZ2h0TGlua3M9ezxIZWFkZXJMaW5rcyAvPn1cclxuICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucGFnZUhlYWRlcn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwidG9wIGNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lciBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17NH0gbWQ9ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlc1tjYXJkQW5pbWF0b25dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UmVnaXN0ZXI8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RlcHBlciBzdGVwcz17W3t0aXRsZTogJ1N0ZXAgT25lJ30sIHt0aXRsZTogJ1N0ZXAgVHdvJ30sIHt0aXRsZTogJ1N0ZXAgVGhyZWUnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZTogJ1N0ZXAgRm91cid9LCB7dGl0bGU6ICdTdGVwIEZpdmUnfSwge3RpdGxlOiAnU3RlcCBTaXgnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZTogJ1N0ZXAgU2V2ZW4nfSwge3RpdGxlOiAnU3RlcCBFaWdodCd9IF0gfSBhY3RpdmVTdGVwPXsgNSB9ICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSByZXZpZXcgdGhlIGF0dHJpYnV0ZXMgcmV0cmlldmVkLCBwcmVzZW50ZWQgYmVsb3cuIElmIHlvdSBhcmUgY2VydGFpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQgdGhlc2UgYXR0cmlidXRlcyBjb3JyZWN0bHkgaWRlbnRpZnkgeW91IHBsZWFzZSBjbGljayB0aGUgTmV4dCBidXR0b24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkaXRpb25hbGx5LCBpZiB5b3Ugd291bGQgbGlrZSB0byBhZGQgeW91ciBDb21wYW554oCZcyBLWUIgcHJvZmlsZSBpbiB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWMgcmVnaXN0cnkgaW4gYW4gZWFzaWx5IFZlcmlmaWFibGUgRm9ybWF0PyBJZiB5b3Ugb3B0IGluIGZvciB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZSB0aGUgcHVibGljIHByb2ZpbGUgb2YgeW91ciBvcmdhbml6YXRpb24gd2lsbCBiZSBlYXNpbHkgdmVyaWZpZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieSBhbnlvbmUgKHB1YmxpYyBhdXRob3JpdGllcywgQjJCIHRyYW5zYWN0aW9ucyBldGMuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyZWF0bHkgZmFjaWxpdGF0aW5nIHlvdXIgZGVhbGluZ3Mgd2l0aCB0aGVzZSBwYXJ0aWVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIFllcywgcGxlYXNlIGNsaWNrIHRoZSDigJxSZWdpc3RlcuKAnSBidXR0b25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gY3M9ezEyfSBzbT17MTJ9IG1kPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+QXR0cmlidXRlczwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRSaWdodH0+TGVnYWwgTmFtZTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0TGVmdH0+MzYwa29tcGFueSBBRzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9e2NsYXNzZXMuaHJMaW5lfT48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dFJpZ2h0fT5MZWdhbCBQZXJzb24gSWRlbnRpZmllcjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0TGVmdH0+Mzc1NzE0eDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9e2NsYXNzZXMuaHJMaW5lfT48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dFJpZ2h0fT5KdXJpc2RpY3Rpb24gQ29kZTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0TGVmdH0+RHVtbXkgSnVyaXNkaWN0aW9uIENvZGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtjbGFzc2VzLmhyTGluZX0+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRSaWdodH0+QnVzaW5lc3MgUm9sZTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0TGVmdH0+RHVtbXkgQnVzaW5lc3MgUm9sZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9e2NsYXNzZXMuaHJMaW5lfT48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dFJpZ2h0fT5BZGRyZXNzPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRMZWZ0fT5EdW1teSBhZGRyZXNzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17Y2xhc3Nlcy5ockxpbmV9PjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0UmlnaHR9PkxFSTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0TGVmdH0+NTI5OTAwRU5LV1YzQlo1R1lMMTI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtjbGFzc2VzLmhyTGluZX0+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRSaWdodH0+VmF0IFJlZ2lzdHJhdGlvbjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0TGVmdH0+QVRVNjcwOTEwMDU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtjbGFzc2VzLmhyTGluZX0+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRSaWdodH0+QmlydGhkYXRlPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRMZWZ0fT4xNi8wNS8xOTg0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17Y2xhc3Nlcy5ockxpbmV9PjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0UmlnaHR9PlRyYWRpbmcgU3RhdHVzPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRMZWZ0fT5MSVZFPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17Y2xhc3Nlcy5ockxpbmV9PjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0UmlnaHR9PkdpdmVuIE5hbWU8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dExlZnR9PkpvaG48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtjbGFzc2VzLmhyTGluZX0+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRSaWdodH0+RmFtaWx5IE5hbWU8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dExlZnR9PkRvZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9e2NsYXNzZXMuaHJMaW5lfT48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dFJpZ2h0fT5TdWIgSnVyaXNkaWN0aW9uPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRMZWZ0fT5BVDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZEZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRGb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRGb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRGb290ZXJMZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwibGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L2Zvcm0+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIHdoaXRlRm9udCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnRcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25cIjtcclxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXHJcbmltcG9ydCBFbWFpbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VtYWlsXCI7XHJcbmltcG9ydCBQZW9wbGUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QZW9wbGVcIjtcclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc1wiO1xyXG5pbXBvcnQgSGVhZGVyTGlua3MgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlckxpbmtzLmpzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc1wiO1xyXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanNcIjtcclxuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCJjb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmQuanNcIjtcclxuaW1wb3J0IENhcmRCb2R5IGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZEJvZHkuanNcIjtcclxuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkSGVhZGVyLmpzXCI7XHJcbmltcG9ydCBDYXJkRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZEZvb3Rlci5qc1wiO1xyXG5pbXBvcnQgQ3VzdG9tSW5wdXQgZnJvbSBcImNvbXBvbmVudHMvQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXQuanNcIjtcclxuaW1wb3J0IFN0ZXBwZXIgZnJvbSBcImNvbXBvbmVudHMvU3RlcHBlci5qc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvcGFnZXMvbG9naW5QYWdlLmpzXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblBhZ2UocHJvcHMpIHtcclxuICAgIGNvbnN0IFtjYXJkQW5pbWF0b24sIHNldENhcmRBbmltYXRpb25dID0gUmVhY3QudXNlU3RhdGUoXCJjYXJkSGlkZGVuXCIpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0Q2FyZEFuaW1hdGlvbihcIlwiKTtcclxuICAgIH0sIDcwMCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7IC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICBhYnNvbHV0ZVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIGJyYW5kPVwiTmV4dEpTIE1hdGVyaWFsIEtpdFwiXHJcbiAgICAgICAgICAgICAgICByaWdodExpbmtzPXs8SGVhZGVyTGlua3MgLz59XHJcbiAgICAgICAgICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2VIZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcInRvcCBjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezR9IG1kPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXNbY2FyZEFuaW1hdG9uXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlNjYW4gUVIgY29kZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwcGVyIHN0ZXBzPXtbe3RpdGxlOiAnU3RlcCBPbmUnfSwge3RpdGxlOiAnU3RlcCBUd28nfSwge3RpdGxlOiAnU3RlcCBUaHJlZSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlOiAnU3RlcCBGb3VyJ30sIHt0aXRsZTogJ1N0ZXAgRml2ZSd9LCB7dGl0bGU6ICdTdGVwIFNpeCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlOiAnU3RlcCBTZXZlbid9LCB7dGl0bGU6ICdTdGVwIEVpZ2h0J30gXSB9IGFjdGl2ZVN0ZXA9eyA1IH0gIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIHNjYW4gdGhlIGZvbGxvd2luZyBRUiBjb2RlIHdpdGggeW91ciBCdXNpbmVzcyBXYWxsZXQgdG8gY29ubmVjdCBpdCB0byB0aGUgc2VydmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dENlbnRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL215cmlhLm1hdGguYWVnZWFuLmdyL35hdHNvbC9uZXdwYWdlL3NvZnR3YXJlL2FlZ2VhbmxvZ28vcXJjb2Rlcy9xcnBsYWluLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkRm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkRm9vdGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwibGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L2Zvcm0+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIHdoaXRlRm9udCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnRcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25cIjtcclxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXHJcbmltcG9ydCBFbWFpbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VtYWlsXCI7XHJcbmltcG9ydCBQZW9wbGUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QZW9wbGVcIjtcclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc1wiO1xyXG5pbXBvcnQgSGVhZGVyTGlua3MgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlckxpbmtzLmpzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc1wiO1xyXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanNcIjtcclxuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCJjb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmQuanNcIjtcclxuaW1wb3J0IENhcmRCb2R5IGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZEJvZHkuanNcIjtcclxuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkSGVhZGVyLmpzXCI7XHJcbmltcG9ydCBDYXJkRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZEZvb3Rlci5qc1wiO1xyXG5pbXBvcnQgQ3VzdG9tSW5wdXQgZnJvbSBcImNvbXBvbmVudHMvQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXQuanNcIjtcclxuaW1wb3J0IFN0ZXBwZXIgZnJvbSBcImNvbXBvbmVudHMvU3RlcHBlci5qc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvcGFnZXMvbG9naW5QYWdlLmpzXCI7XHJcbmltcG9ydCBDaGVjayBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrXCI7XHJcbmltcG9ydCBTbmFja2JhckNvbnRlbnQgZnJvbSBcIi4uL1NuYWNrYmFyL1NuYWNrYmFyQ29udGVudFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5QYWdlKHByb3BzKSB7XHJcbiAgICBjb25zdCBbY2FyZEFuaW1hdG9uLCBzZXRDYXJkQW5pbWF0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKFwiY2FyZEhpZGRlblwiKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNldENhcmRBbmltYXRpb24oXCJcIik7XHJcbiAgICB9LCA3MDApO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgeyAuLi5yZXN0IH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgYWJzb2x1dGVcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBicmFuZD1cIk5leHRKUyBNYXRlcmlhbCBLaXRcIlxyXG4gICAgICAgICAgICAgICAgcmlnaHRMaW5rcz17PEhlYWRlckxpbmtzIC8+fVxyXG4gICAgICAgICAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWdlSGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJ0b3AgY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXs0fSBtZD17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzW2NhcmRBbmltYXRvbl19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZEhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5TdWNjZXNzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBwZXIgc3RlcHM9e1t7dGl0bGU6ICdTdGVwIE9uZSd9LCB7dGl0bGU6ICdTdGVwIFR3byd9LCB7dGl0bGU6ICdTdGVwIFRocmVlJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGU6ICdTdGVwIEZvdXInfSwge3RpdGxlOiAnU3RlcCBGaXZlJ30sIHt0aXRsZTogJ1N0ZXAgU2l4J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGU6ICdTdGVwIFNldmVuJ30sIHt0aXRsZTogJ1N0ZXAgRWlnaHQnfSBdIH0gYWN0aXZlU3RlcD17IDUgfSAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbmFja2JhckNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5TVUNDRVNTIEFMRVJUOjwvYj4gWW91e1wiJ1wifXZlIHN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17Q2hlY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlZ2lzdHJhdGlvbiBDb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkRm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkRm9vdGVyfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L2Zvcm0+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIHdoaXRlRm9udCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnRcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25cIjtcclxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXHJcbmltcG9ydCBFbWFpbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VtYWlsXCI7XHJcbmltcG9ydCBQZW9wbGUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QZW9wbGVcIjtcclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc1wiO1xyXG5pbXBvcnQgSGVhZGVyTGlua3MgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlckxpbmtzLmpzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc1wiO1xyXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanNcIjtcclxuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCJjb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmQuanNcIjtcclxuaW1wb3J0IENhcmRCb2R5IGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZEJvZHkuanNcIjtcclxuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkSGVhZGVyLmpzXCI7XHJcbmltcG9ydCBDYXJkRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZEZvb3Rlci5qc1wiO1xyXG5pbXBvcnQgQ3VzdG9tSW5wdXQgZnJvbSBcImNvbXBvbmVudHMvQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXQuanNcIjtcclxuaW1wb3J0IFN0ZXBwZXIgZnJvbSBcImNvbXBvbmVudHMvU3RlcHBlci5qc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwic3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L3BhZ2VzL2xvZ2luUGFnZS5qc1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5QYWdlKHByb3BzKSB7XHJcbiAgICBjb25zdCBbY2FyZEFuaW1hdG9uLCBzZXRDYXJkQW5pbWF0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKFwiY2FyZEhpZGRlblwiKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNldENhcmRBbmltYXRpb24oXCJcIik7XHJcbiAgICB9LCA3MDApO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgeyAuLi5yZXN0IH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0TGVmdCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhbnkgRGV0YWlscyBGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dD1cIkNvbXBhbnkgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbXBhbnlOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFRleHQ9XCJDb21wYW55IENvdW50cnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb21wYW55Q291bnRyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiTEVJXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGVpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dExlZnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcHJlc2VudGF0aXZlIEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50OiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlb3BsZSBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRJY29uc0NvbG9yfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFRleHQ9XCJTdXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVvcGxlIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dEljb25zQ29sb3J9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbWFpbCBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRJY29uc0NvbG9yfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmV0cmlldmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZ3JpZDoge1xuICAgIG1hcmdpblJpZ2h0OiBcIjBweFwiLFxuICAgIG1hcmdpbkxlZnQ6IFwiLTEwcHhcIixcbiAgICB3aWR0aDogXCJhdXRvXCIsXG4gIH0sXG59O1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyaWRDb250YWluZXIocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciB7Li4ucmVzdH0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWQgKyBcIiBcIiArIGNsYXNzTmFtZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9HcmlkPlxuICApO1xufVxuXG5HcmlkQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBcIlwiLFxufTtcblxuR3JpZENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBncmlkOiB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgbWluSGVpZ2h0OiBcIjFweFwiLFxuICAgIHBhZGRpbmdSaWdodDogXCIxNXB4XCIsXG4gICAgcGFkZGluZ0xlZnQ6IFwiMTVweFwiLFxuICAgIGZsZXhCYXNpczogXCJhdXRvXCIsXG4gIH0sXG59O1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyaWRJdGVtKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8R3JpZCBpdGVtIHsuLi5yZXN0fSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZCArIFwiIFwiICsgY2xhc3NOYW1lfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0dyaWQ+XG4gICk7XG59XG5cbkdyaWRJdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBcIlwiLFxufTtcblxuR3JpZEl0ZW0ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgSGlkZGVuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIjtcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5pbXBvcnQgTWVudSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIjtcbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwic3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2NvbXBvbmVudHMvaGVhZGVyU3R5bGUuanNcIjtcbmltcG9ydCB7QXZhdGFyfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbbW9iaWxlT3Blbiwgc2V0TW9iaWxlT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLmNoYW5nZUNvbG9yT25TY3JvbGwpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhlYWRlckNvbG9yQ2hhbmdlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICBpZiAocHJvcHMuY2hhbmdlQ29sb3JPblNjcm9sbCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoZWFkZXJDb2xvckNoYW5nZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG4gIGNvbnN0IGhhbmRsZURyYXdlclRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRNb2JpbGVPcGVuKCFtb2JpbGVPcGVuKTtcbiAgfTtcbiAgY29uc3QgaGVhZGVyQ29sb3JDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb2xvciwgY2hhbmdlQ29sb3JPblNjcm9sbCB9ID0gcHJvcHM7XG4gICAgY29uc3Qgd2luZG93c1Njcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBpZiAod2luZG93c1Njcm9sbFRvcCA+IGNoYW5nZUNvbG9yT25TY3JvbGwuaGVpZ2h0KSB7XG4gICAgICBkb2N1bWVudC5ib2R5XG4gICAgICAgIC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRlclwiKVswXVxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzW2NvbG9yXSk7XG4gICAgICBkb2N1bWVudC5ib2R5XG4gICAgICAgIC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRlclwiKVswXVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2NoYW5nZUNvbG9yT25TY3JvbGwuY29sb3JdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keVxuICAgICAgICAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkZXJcIilbMF1cbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tjb2xvcl0pO1xuICAgICAgZG9jdW1lbnQuYm9keVxuICAgICAgICAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkZXJcIilbMF1cbiAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3Nlc1tjaGFuZ2VDb2xvck9uU2Nyb2xsLmNvbG9yXSk7XG4gICAgfVxuICB9O1xuICBjb25zdCB7IGNvbG9yLCByaWdodExpbmtzLCBsZWZ0TGlua3MsIGJyYW5kLCBmaXhlZCwgYWJzb2x1dGUgfSA9IHByb3BzO1xuICBjb25zdCBhcHBCYXJDbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgW2NsYXNzZXMuYXBwQmFyXTogdHJ1ZSxcbiAgICBbY2xhc3Nlc1tjb2xvcl1dOiBjb2xvcixcbiAgICBbY2xhc3Nlcy5hYnNvbHV0ZV06IGFic29sdXRlLFxuICAgIFtjbGFzc2VzLmZpeGVkXTogZml4ZWQsXG4gIH0pO1xuICBjb25zdCBicmFuZENvbXBvbmVudCA9IChcbiAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHNcIiBhcz1cIi9jb21wb25lbnRzXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXNpemVJbWd9XG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9teXJpYS5tYXRoLmFlZ2Vhbi5nci9+YXRzb2wvbmV3cGFnZS9zb2Z0d2FyZS9hZWdlYW5sb2dvL3N2Zy9ib2xkLWxvZ29fc2ZpZ2FfdW9mX2FlZ2Vhbl9lbi1ydi5zdmdcIlxuICAgICAgICAgIGFsdD1cIi4uLlwiXG4gICAgICAvPlxuICAgIDwvTGluaz5cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8QXBwQmFyIGNsYXNzTmFtZT17YXBwQmFyQ2xhc3Nlc30+XG4gICAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAge2xlZnRMaW5rcyAhPT0gdW5kZWZpbmVkID8gYnJhbmRDb21wb25lbnQgOiBudWxsfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mbGV4fT5cbiAgICAgICAgICB7bGVmdExpbmtzICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgICA8SGlkZGVuIHNtRG93biBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxuICAgICAgICAgICAgICB7bGVmdExpbmtzfVxuICAgICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIGJyYW5kQ29tcG9uZW50XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxIaWRkZW4gc21Eb3duIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XG4gICAgICAgICAge3JpZ2h0TGlua3N9XG4gICAgICAgIDwvSGlkZGVuPlxuICAgICAgICA8SGlkZGVuIG1kVXA+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyVG9nZ2xlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8L0hpZGRlbj5cbiAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlckRpdmlkZXJ9PjwvZGl2PlxuICAgICAgPEhpZGRlbiBtZFVwIGltcGxlbWVudGF0aW9uPVwianNcIj5cbiAgICAgICAgPERyYXdlclxuICAgICAgICAgIHZhcmlhbnQ9XCJ0ZW1wb3JhcnlcIlxuICAgICAgICAgIGFuY2hvcj17XCJyaWdodFwifVxuICAgICAgICAgIG9wZW49e21vYmlsZU9wZW59XG4gICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgcGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBSZXNwb25zaXZlfT5cbiAgICAgICAgICAgIHtsZWZ0TGlua3N9XG4gICAgICAgICAgICB7cmlnaHRMaW5rc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9EcmF3ZXI+XG4gICAgICA8L0hpZGRlbj5cbiAgICA8L0FwcEJhcj5cblxuICApO1xufVxuXG5IZWFkZXIuZGVmYXVsdFByb3AgPSB7XG4gIGNvbG9yOiBcIndoaXRlXCIsXG59O1xuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInByaW1hcnlcIixcbiAgICBcImluZm9cIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICAgIFwidHJhbnNwYXJlbnRcIixcbiAgICBcIndoaXRlXCIsXG4gICAgXCJyb3NlXCIsXG4gICAgXCJkYXJrXCIsXG4gIF0pLFxuICByaWdodExpbmtzOiBQcm9wVHlwZXMubm9kZSxcbiAgbGVmdExpbmtzOiBQcm9wVHlwZXMubm9kZSxcbiAgYnJhbmQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZpeGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgYWJzb2x1dGU6IFByb3BUeXBlcy5ib29sLFxuICAvLyB0aGlzIHdpbGwgY2F1c2UgdGhlIHNpZGViYXIgdG8gY2hhbmdlIHRoZSBjb2xvciBmcm9tXG4gIC8vIHByb3BzLmNvbG9yIChzZWUgYWJvdmUpIHRvIGNoYW5nZUNvbG9yT25TY3JvbGwuY29sb3JcbiAgLy8gd2hlbiB0aGUgd2luZG93LnBhZ2VZT2Zmc2V0IGlzIGhlaWdoZXIgb3IgZXF1YWwgdG9cbiAgLy8gY2hhbmdlQ29sb3JPblNjcm9sbC5oZWlnaHQgYW5kIHRoZW4gd2hlbiBpdCBpcyBzbWFsbGVyIHRoYW5cbiAgLy8gY2hhbmdlQ29sb3JPblNjcm9sbC5oZWlnaHQgY2hhbmdlIGl0IGJhY2sgdG9cbiAgLy8gcHJvcHMuY29sb3IgKHNlZSBhYm92ZSlcbiAgY2hhbmdlQ29sb3JPblNjcm9sbDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFwicHJpbWFyeVwiLFxuICAgICAgXCJpbmZvXCIsXG4gICAgICBcInN1Y2Nlc3NcIixcbiAgICAgIFwid2FybmluZ1wiLFxuICAgICAgXCJkYW5nZXJcIixcbiAgICAgIFwidHJhbnNwYXJlbnRcIixcbiAgICAgIFwid2hpdGVcIixcbiAgICAgIFwicm9zZVwiLFxuICAgICAgXCJkYXJrXCIsXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSksXG59O1xuIiwiLyplc2xpbnQtZGlzYWJsZSovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIjtcbmltcG9ydCBJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uXCI7XG5cbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuaW1wb3J0IHsgQXBwcywgQ2xvdWREb3dubG9hZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcbmltcG9ydCBEZWxldGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBDdXN0b21Ecm9wZG93biBmcm9tIFwiY29tcG9uZW50cy9DdXN0b21Ecm9wZG93bi9DdXN0b21Ecm9wZG93bi5qc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qc1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9oZWFkZXJMaW5rc1N0eWxlLmpzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyTGlua3MocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgIHsvKjxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19PlxuICAgICAgICA8Q3VzdG9tRHJvcGRvd25cbiAgICAgICAgICBub0xpUGFkZGluZ1xuICAgICAgICAgIG5hdkRyb3Bkb3duXG4gICAgICAgICAgYnV0dG9uVGV4dD1cIkNvbXBvbmVudHNcIlxuICAgICAgICAgIGJ1dHRvblByb3BzPXt7XG4gICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMubmF2TGluayxcbiAgICAgICAgICAgIGNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBidXR0b25JY29uPXtBcHBzfVxuICAgICAgICAgIGRyb3Bkb3duTGlzdD17W1xuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcm9wZG93bkxpbmt9PkFsbCBjb21wb25lbnRzPC9hPlxuICAgICAgICAgICAgPC9MaW5rPixcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NyZWF0aXZldGltb2ZmaWNpYWwuZ2l0aHViLmlvL25leHRqcy1tYXRlcmlhbC1raXQvIy9kb2N1bWVudGF0aW9uP3JlZj1uanNtay1uYXZiYXJcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJvcGRvd25MaW5rfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEb2N1bWVudGF0aW9uXG4gICAgICAgICAgICA8L2E+LFxuICAgICAgICAgIF19XG4gICAgICAgIC8+XG4gICAgICA8L0xpc3RJdGVtPiovfVxuICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3Byb2plY3Qtc2VhbC5ldS9hYm91dFwiXG4gICAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmF2TGlua31cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5BcHBzfT5hcHBzPC9JY29uPiBTZWFsXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9MaXN0SXRlbT5cbiAgICAgIHsvKjxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9uZXh0anMtbWF0ZXJpYWwta2l0P3JlZj1uanNtay1uYXZiYXJcIlxuICAgICAgICAgIGNvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkxpbmt9XG4gICAgICAgID5cbiAgICAgICAgICA8Q2xvdWREb3dubG9hZCBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbnN9IC8+IERvd25sb2FkXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9MaXN0SXRlbT4qL31cbiAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19PlxuICAgICAgICB7Lyo8VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiPlxuICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJEZWxldGVcIj5cbiAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8L1Rvb2x0aXA+Ki99XG4gICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgaWQ9XCJpbnN0YWdyYW0tdHdpdHRlclwiXG4gICAgICAgICAgdGl0bGU9XCJGb2xsb3cgdXMgb24gdHdpdHRlclwiXG4gICAgICAgICAgcGxhY2VtZW50PXtcInRvcFwifVxuICAgICAgICAgIGNsYXNzZXM9e3sgdG9vbHRpcDogY2xhc3Nlcy50b29sdGlwIH19XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9DcmVhdGl2ZVRpbT9yZWY9Y3JlYXRpdmV0aW1cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGNvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkxpbmt9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtjbGFzc2VzLnNvY2lhbEljb25zICsgXCIgZmFiIGZhLXR3aXR0ZXJcIn0gLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9MaXN0SXRlbT5cbiAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19PlxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIGlkPVwiaW5zdGFncmFtLWZhY2Vib29rXCJcbiAgICAgICAgICB0aXRsZT1cIkZvbGxvdyB1cyBvbiBmYWNlYm9va1wiXG4gICAgICAgICAgcGxhY2VtZW50PXtcInRvcFwifVxuICAgICAgICAgIGNsYXNzZXM9e3sgdG9vbHRpcDogY2xhc3Nlcy50b29sdGlwIH19XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vQ3JlYXRpdmVUaW0/cmVmPWNyZWF0aXZldGltXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmF2TGlua31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsSWNvbnMgKyBcIiBmYWIgZmEtZmFjZWJvb2tcIn0gLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9MaXN0SXRlbT5cbiAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19PlxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIGlkPVwiaW5zdGFncmFtLXRvb2x0aXBcIlxuICAgICAgICAgIHRpdGxlPVwiRm9sbG93IHVzIG9uIGluc3RhZ3JhbVwiXG4gICAgICAgICAgcGxhY2VtZW50PXtcInRvcFwifVxuICAgICAgICAgIGNsYXNzZXM9e3sgdG9vbHRpcDogY2xhc3Nlcy50b29sdGlwIH19XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL0NyZWF0aXZlVGltT2ZmaWNpYWw/cmVmPWNyZWF0aXZldGltXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmF2TGlua31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsSWNvbnMgKyBcIiBmYWIgZmEtaW5zdGFncmFtXCJ9IC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgPC9MaXN0PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9pbmZvU3R5bGUuanNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZvQXJlYShwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBpY29uQ29sb3IsIHZlcnRpY2FsIH0gPSBwcm9wcztcbiAgY29uc3QgaWNvbldyYXBwZXIgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy5pY29uV3JhcHBlcl06IHRydWUsXG4gICAgW2NsYXNzZXNbaWNvbkNvbG9yXV06IHRydWUsXG4gICAgW2NsYXNzZXMuaWNvbldyYXBwZXJWZXJ0aWNhbF06IHZlcnRpY2FsLFxuICB9KTtcbiAgY29uc3QgaWNvbkNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy5pY29uXTogdHJ1ZSxcbiAgICBbY2xhc3Nlcy5pY29uVmVydGljYWxdOiB2ZXJ0aWNhbCxcbiAgfSk7XG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvQXJlYX0+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpY29uV3JhcHBlcn0+XG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLnVybExpbmt9PlxuICAgICAgICAgIDxhPlxuICAgICAgICA8cHJvcHMuaWNvbiBjbGFzc05hbWU9e2ljb25DbGFzc2VzfSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbldyYXBwZXJ9PlxuICAgICAgICA8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57dGl0bGV9PC9oND5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICApO1xufVxuXG5JbmZvQXJlYS5kZWZhdWx0UHJvcHMgPSB7XG4gIGljb25Db2xvcjogXCJncmF5XCIsXG59O1xuXG5JbmZvQXJlYS5wcm9wVHlwZXMgPSB7XG4gIGljb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSkuaXNSZXF1aXJlZCxcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaWNvbkNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwicHJpbWFyeVwiLFxuICAgIFwid2FybmluZ1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJpbmZvXCIsXG4gICAgXCJyb3NlXCIsXG4gICAgXCJncmF5XCIsXG4gIF0pLFxuICB2ZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2wsXG59O1xuIiwiLypcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG4vLyBpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlci5qc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanNcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgI19fbmV4dCxcclxuICAgICAgaHRtbCxcclxuICAgICAgYm9keSxcclxuICAgICAgI19fbmV4dCA+IGRpdiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYm94LWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ib3gtZmlsbC12IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICA8SGVhZGVyIC8+XHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImJveC1jb250YWluZXJcIj5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICB7LyEqIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+dGhpcyBpcyB0aGUgZm9vdGVyPC9kaXY+ICohL31cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiovXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5cclxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXHJcblxyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc1wiO1xyXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanNcIjtcclxuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCJjb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qc1wiO1xyXG5pbXBvcnQgSGVhZGVyTGlua3MgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlckxpbmtzLmpzXCI7XHJcbmltcG9ydCBQYXJhbGxheCBmcm9tIFwiY29tcG9uZW50cy9QYXJhbGxheC9QYXJhbGxheC5qc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwic3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L3BhZ2VzL2xhbmRpbmdQYWdlLmpzXCI7XHJcblxyXG4vLyBTZWN0aW9ucyBmb3IgdGhpcyBwYWdlXHJcbmltcG9ydCBQcm9kdWN0U2VjdGlvbiBmcm9tIFwicGFnZXMtc2VjdGlvbnMvTGFuZGluZ1BhZ2UtU2VjdGlvbnMvUHJvZHVjdFNlY3Rpb24uanNcIjtcclxuaW1wb3J0IFRlYW1TZWN0aW9uIGZyb20gXCJwYWdlcy1zZWN0aW9ucy9MYW5kaW5nUGFnZS1TZWN0aW9ucy9UZWFtU2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQgV29ya1NlY3Rpb24gZnJvbSBcInBhZ2VzLXNlY3Rpb25zL0xhbmRpbmdQYWdlLVNlY3Rpb25zL1dvcmtTZWN0aW9uLmpzXCI7XHJcblxyXG5jb25zdCBkYXNoYm9hcmRSb3V0ZXMgPSBbXTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dE5ldyhwcm9wcywge2NoaWxkcmVuLCBob21lfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgeyAuLi5yZXN0IH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdyaWRDb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmpzczQxM30+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgYWJzb2x1dGVcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGJyYW5kPVwiTmV4dEpTIE1hdGVyaWFsIEtpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRMaW5rcz17PEhlYWRlckxpbmtzIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICA8bWFpbj57cHJvcHMuY2hpbGRyZW59PC9tYWluPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcblxyXG4gICAgICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBzdHlsZXMgZnJvbSBcInN0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL3BhcmFsbGF4U3R5bGUuanNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJhbGxheChwcm9wcykge1xuICBsZXQgd2luZG93U2Nyb2xsVG9wO1xuICAvLyBpZiAod2luZG93LmlubmVyV2lkdGggPj0gNzY4KSB7XG4gIC8vICAgd2luZG93U2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IC8gMztcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICB3aW5kb3dTY3JvbGxUb3AgPSAwO1xuICAvLyB9XG4gIGNvbnN0IFt0cmFuc2Zvcm0sIHNldFRyYW5zZm9ybV0gPSBSZWFjdC51c2VTdGF0ZShcInRyYW5zbGF0ZTNkKDAsMHB4LDApXCIpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjgpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHJlc2V0VHJhbnNmb3JtKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gNzY4KSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHJlc2V0VHJhbnNmb3JtKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbiAgY29uc3QgcmVzZXRUcmFuc2Zvcm0gPSAoKSA9PiB7XG4gICAgdmFyIHdpbmRvd1Njcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCAvIDM7XG4gICAgc2V0VHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMCxcIiArIHdpbmRvd1Njcm9sbFRvcCArIFwicHgsMClcIik7XG4gIH07XG4gIGNvbnN0IHtcbiAgICBmaWx0ZXIsXG4gICAgY2xhc3NOYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIHN0eWxlLFxuICAgIGltYWdlLFxuICAgIHNtYWxsLFxuICAgIHJlc3BvbnNpdmUsXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBwYXJhbGxheENsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy5wYXJhbGxheF06IHRydWUsXG4gICAgW2NsYXNzZXMuZmlsdGVyXTogZmlsdGVyLFxuICAgIFtjbGFzc2VzLnNtYWxsXTogc21hbGwsXG4gICAgW2NsYXNzZXMucGFyYWxsYXhSZXNwb25zaXZlXTogcmVzcG9uc2l2ZSxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lICE9PSB1bmRlZmluZWQsXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17cGFyYWxsYXhDbGFzc2VzfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBpbWFnZSArIFwiKVwiLFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5QYXJhbGxheC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmlsdGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBzdHlsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNtYWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgLy8gdGhpcyB3aWxsIGFkZCBhIG1pbi1oZWlnaHQgb2YgNjYwcHggb24gc21hbGwgc2NyZWVuc1xuICByZXNwb25zaXZlOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBTbmFjayBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJDb250ZW50XCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25cIjtcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuaW1wb3J0IENsb3NlIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIjtcbi8vIGNvcmUgY29tcG9uZW50c1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9zbmFja2JhckNvbnRlbnRTdHlsZS5qc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNuYWNrYmFyQ29udGVudChwcm9wcykge1xuICBjb25zdCB7IG1lc3NhZ2UsIGNvbG9yLCBjbG9zZSwgaWNvbiB9ID0gcHJvcHM7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgdmFyIGFjdGlvbiA9IFtdO1xuICBjb25zdCBjbG9zZUFsZXJ0ID0gKCkgPT4ge1xuICAgIHNldEFsZXJ0KG51bGwpO1xuICB9O1xuICBpZiAoY2xvc2UgIT09IHVuZGVmaW5lZCkge1xuICAgIGFjdGlvbiA9IFtcbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQnV0dG9ufVxuICAgICAgICBrZXk9XCJjbG9zZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgIG9uQ2xpY2s9e2Nsb3NlQWxlcnR9XG4gICAgICA+XG4gICAgICAgIDxDbG9zZSBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2V9IC8+XG4gICAgICA8L0ljb25CdXR0b24+LFxuICAgIF07XG4gIH1cbiAgbGV0IHNuYWNrSWNvbiA9IG51bGw7XG4gIHN3aXRjaCAodHlwZW9mIGljb24pIHtcbiAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICBzbmFja0ljb24gPSA8cHJvcHMuaWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz47XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICBzbmFja0ljb24gPSA8SWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0+e3Byb3BzLmljb259PC9JY29uPjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBzbmFja0ljb24gPSBudWxsO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgY29uc3QgW2FsZXJ0LCBzZXRBbGVydF0gPSBSZWFjdC51c2VTdGF0ZShcbiAgICA8U25hY2tcbiAgICAgIG1lc3NhZ2U9e1xuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtzbmFja0ljb259XG4gICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAge2Nsb3NlICE9PSB1bmRlZmluZWQgPyBhY3Rpb24gOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgcm9vdDogY2xhc3Nlcy5yb290ICsgXCIgXCIgKyBjbGFzc2VzW2NvbG9yXSxcbiAgICAgICAgbWVzc2FnZTogY2xhc3Nlcy5tZXNzYWdlICsgXCIgXCIgKyBjbGFzc2VzLmNvbnRhaW5lcixcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbiAgcmV0dXJuIGFsZXJ0O1xufVxuXG5TbmFja2JhckNvbnRlbnQucHJvcFR5cGVzID0ge1xuICBtZXNzYWdlOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcImluZm9cIiwgXCJzdWNjZXNzXCIsIFwid2FybmluZ1wiLCBcImRhbmdlclwiLCBcInByaW1hcnlcIl0pLFxuICBjbG9zZTogUHJvcFR5cGVzLmJvb2wsXG4gIGljb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5zdHJpbmddKSxcbn07XG4iLCJpbXBvcnQgU3RlcHBlciBmcm9tIFwicmVhY3Qtc3RlcHBlci1ob3Jpem9udGFsXCI7XHJcblxyXG5jb25zdCBNeVN0ZXBwZXIgPSBwcm9wcyA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxTdGVwcGVyXHJcbiAgICAgICAgc3RlcHM9e3Byb3BzLnN0ZXBzfVxyXG4gICAgICAgIGFjdGl2ZVN0ZXA9e3Byb3BzLmFjdGl2ZU51bX1cclxuICAgICAgICBhY3RpdmVUaXRsZUNvbG9yID0geycjZmZmZmZmJ31cclxuICAgICAgICBjb21wbGV0ZVRpdGxlQ29sb3IgPSB7JyMwMGM2NDInfVxyXG4gICAgICAgIGNvbXBsZXRlQ29sb3I9eycjMDBjNjQyJ31cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeVN0ZXBwZXI7XHJcbiIsImNvbnN0IFZhbGlkYXRlVGFibGUgPSAocHJvcHMpID0+IHtcclxuICBsZXQgYXR0cmlidXRlUm93cyA9IE9iamVjdC5rZXlzKHByb3BzLnVzZXJEZXRhaWxzKS5mbGF0TWFwKFxyXG4gICAgKGF0dHJpYnV0ZU5hbWUpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGtleT17YXR0cmlidXRlTmFtZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zMlwiPnthdHRyaWJ1dGVOYW1lfTwvZGl2PntcIiBcIn1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXMyXCIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiMnJlbVwiIH19PlxyXG4gICAgICAgICAgICB7cHJvcHMudXNlckRldGFpbHNbYXR0cmlidXRlTmFtZV19XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj57YXR0cmlidXRlUm93c308L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0ZVRhYmxlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5pbXBvcnQgQ2hhdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRcIjtcbmltcG9ydCBWZXJpZmllZFVzZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9WZXJpZmllZFVzZXJcIjtcbmltcG9ydCBGaW5nZXJwcmludCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZpbmdlcnByaW50XCI7XG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gXCJjb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lci5qc1wiO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCJjb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanNcIjtcbmltcG9ydCBJbmZvQXJlYSBmcm9tIFwiY29tcG9uZW50cy9JbmZvQXJlYS9JbmZvQXJlYS5qc1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvcGFnZXMvbGFuZGluZ1BhZ2VTZWN0aW9ucy9wcm9kdWN0U3R5bGUuanNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0U2VjdGlvbigpIHtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgPEdyaWRDb250YWluZXIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs4fT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PkdyaWRzPC9oMj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICBVc2UgdGhlIGZvbGxvd2luZyBtZW51IGluIG9yZGVyIHRvIGVpdGhlciBxdWVyeSBmb3IgdGhlIFZlcmlmaWFibGUgS1lCIERhdGEgb2YgYW4gb3JnYW5pemF0aW9uIG9yIHN0YXJ0XG4gICAgICAgICAgICAgIHlvdXIgb3duIFZlcmlmaWFibGUgQnVzaW5lc3MgV2FsbGV0IChJc3N1ZSBhIEtZQiBWZXJpZmlhYmxlIENyZWRlbnRpYWwgZm9yIHlvdXIgQ29tcGFueSkuIEEgVmVyaWZpYWJsZVxuICAgICAgICAgICAgICBCdXNpbmVzcyBXYWxsZXQgaW1wbGVtZW50cyBhIHBvcnRhYmxlIGlkZW50aXR5IGJ1c2luZXNzIHByb2ZpbGUgZm9yIGFuIG9yZ2FuaXphdGlvbi4gVG8gbGVhcm4gbW9yZSBwbGVhc2VcbiAgICAgICAgICAgICAgY2xpY2sgaGVyZVxuICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEdyaWRDb250YWluZXI+XG5cbiAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgICA8SW5mb0FyZWFcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiSXNzdWUgS1lCXCJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiS1lCIGluZm8gdGV4dFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXtDaGF0fVxuICAgICAgICAgICAgICAgICAgaWNvbkNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgICAgICAgICB1cmxMaW5rPVwiL2xvZ2luXCJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17NH0+XG4gICAgICAgICAgICAgIDxJbmZvQXJlYVxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTZWFyY2ggS1lCc1wiXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlNlYXJjaCBmb3IgZXhpc3RpbmcgS1lCc1wiXG4gICAgICAgICAgICAgICAgICBpY29uPXtWZXJpZmllZFVzZXJ9XG4gICAgICAgICAgICAgICAgICBpY29uQ29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgIHVybExpbms9XCIvY29tcGFueS1zZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgdmVydGljYWxcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs0fT5cbiAgICAgICAgICAgICAgPEluZm9BcmVhXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkZpbmdlcnByaW50XCJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRGl2aWRlIGRldGFpbHMgYWJvdXQgeW91ciBwcm9kdWN0IG9yIGFnZW5jeSB3b3JrIGludG8gcGFydHMuIFdyaXRlIGEgZmV3IGxpbmVzIGFib3V0IGVhY2ggb25lLiBBIHBhcmFncmFwaCBkZXNjcmliaW5nIGEgZmVhdHVyZSB3aWxsIGJlIGVub3VnaC5cIlxuICAgICAgICAgICAgICAgICAgaWNvbj17RmluZ2VycHJpbnR9XG4gICAgICAgICAgICAgICAgICBpY29uQ29sb3I9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgdXJsTGluaz1cIi9xdWVyeVwiXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSBcImNvbXBvbmVudHMvR3JpZC9HcmlkQ29udGFpbmVyLmpzXCI7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSBcImNvbXBvbmVudHMvR3JpZC9HcmlkSXRlbS5qc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkLmpzXCI7XG5pbXBvcnQgQ2FyZEJvZHkgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkQm9keS5qc1wiO1xuaW1wb3J0IENhcmRGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkRm9vdGVyLmpzXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcInN0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9wYWdlcy9sYW5kaW5nUGFnZVNlY3Rpb25zL3RlYW1TdHlsZS5qc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYW1TZWN0aW9uKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGltYWdlQ2xhc3NlcyA9IGNsYXNzTmFtZXMoXG4gICAgY2xhc3Nlcy5pbWdSYWlzZWQsXG4gICAgY2xhc3Nlcy5pbWdSb3VuZGVkQ2lyY2xlLFxuICAgIGNsYXNzZXMuaW1nRmx1aWRcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PkhlcmUgaXMgb3VyIHRlYW08L2gyPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEdyaWRDb250YWluZXI+XG4gICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17NH0+XG4gICAgICAgICAgICA8Q2FyZCBwbGFpbj5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0gY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1HcmlkfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2ZhY2VzL2F2YXRhci5qcGdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiLi4uXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aW1hZ2VDbGFzc2VzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZFRpdGxlfT5cbiAgICAgICAgICAgICAgICBHaWdpIEhhZGlkXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17Y2xhc3Nlcy5zbWFsbFRpdGxlfT5Nb2RlbDwvc21hbGw+XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgICAgWW91IGNhbiB3cml0ZSBoZXJlIGRldGFpbHMgYWJvdXQgb25lIG9mIHlvdXIgdGVhbSBtZW1iZXJzLiBZb3VcbiAgICAgICAgICAgICAgICAgIGNhbiBnaXZlIG1vcmUgZGV0YWlscyBhYm91dCB3aGF0IHRoZXkgZG8uIEZlZWwgZnJlZSB0byBhZGRcbiAgICAgICAgICAgICAgICAgIHNvbWUgPGEgaHJlZj1cIiNwYWJsb1wiPmxpbmtzPC9hPiBmb3IgcGVvcGxlIHRvIGJlIGFibGUgdG9cbiAgICAgICAgICAgICAgICAgIGZvbGxvdyB0aGVtIG91dHNpZGUgdGhlIHNpdGUuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICA8Q2FyZEZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuanVzdGlmeUNlbnRlcn0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAganVzdEljb25cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbjV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtjbGFzc2VzLnNvY2lhbHMgKyBcIiBmYWIgZmEtdHdpdHRlclwifSAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGp1c3RJY29uXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW41fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NpYWxzICsgXCIgZmFiIGZhLWluc3RhZ3JhbVwifSAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGp1c3RJY29uXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW41fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NpYWxzICsgXCIgZmFiIGZhLWZhY2Vib29rXCJ9IC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQ2FyZEZvb3Rlcj5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPENhcmQgcGxhaW4+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtR3JpZH0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9mYWNlcy9jaHJpc3RpYW4uanBnXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIi4uLlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ltYWdlQ2xhc3Nlc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRUaXRsZX0+XG4gICAgICAgICAgICAgICAgQ2hyaXN0aWFuIExvdWJvdXRpblxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e2NsYXNzZXMuc21hbGxUaXRsZX0+RGVzaWduZXI8L3NtYWxsPlxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICAgIFlvdSBjYW4gd3JpdGUgaGVyZSBkZXRhaWxzIGFib3V0IG9uZSBvZiB5b3VyIHRlYW0gbWVtYmVycy4gWW91XG4gICAgICAgICAgICAgICAgICBjYW4gZ2l2ZSBtb3JlIGRldGFpbHMgYWJvdXQgd2hhdCB0aGV5IGRvLiBGZWVsIGZyZWUgdG8gYWRkXG4gICAgICAgICAgICAgICAgICBzb21lIDxhIGhyZWY9XCIjcGFibG9cIj5saW5rczwvYT4gZm9yIHBlb3BsZSB0byBiZSBhYmxlIHRvXG4gICAgICAgICAgICAgICAgICBmb2xsb3cgdGhlbSBvdXRzaWRlIHRoZSBzaXRlLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgPENhcmRGb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmp1c3RpZnlDZW50ZXJ9PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGp1c3RJY29uXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW41fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NpYWxzICsgXCIgZmFiIGZhLXR3aXR0ZXJcIn0gLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBqdXN0SWNvblxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2luNX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFscyArIFwiIGZhYiBmYS1saW5rZWRpblwifSAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0NhcmRGb290ZXI+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs0fT5cbiAgICAgICAgICAgIDxDYXJkIHBsYWluPlxuICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbUdyaWR9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvZmFjZXMva2VuZGFsbC5qcGdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiLi4uXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aW1hZ2VDbGFzc2VzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZFRpdGxlfT5cbiAgICAgICAgICAgICAgICBLZW5kYWxsIEplbm5lclxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e2NsYXNzZXMuc21hbGxUaXRsZX0+TW9kZWw8L3NtYWxsPlxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICAgIFlvdSBjYW4gd3JpdGUgaGVyZSBkZXRhaWxzIGFib3V0IG9uZSBvZiB5b3VyIHRlYW0gbWVtYmVycy4gWW91XG4gICAgICAgICAgICAgICAgICBjYW4gZ2l2ZSBtb3JlIGRldGFpbHMgYWJvdXQgd2hhdCB0aGV5IGRvLiBGZWVsIGZyZWUgdG8gYWRkXG4gICAgICAgICAgICAgICAgICBzb21lIDxhIGhyZWY9XCIjcGFibG9cIj5saW5rczwvYT4gZm9yIHBlb3BsZSB0byBiZSBhYmxlIHRvXG4gICAgICAgICAgICAgICAgICBmb2xsb3cgdGhlbSBvdXRzaWRlIHRoZSBzaXRlLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgPENhcmRGb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmp1c3RpZnlDZW50ZXJ9PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGp1c3RJY29uXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW41fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NpYWxzICsgXCIgZmFiIGZhLXR3aXR0ZXJcIn0gLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBqdXN0SWNvblxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2luNX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFscyArIFwiIGZhYiBmYS1pbnN0YWdyYW1cIn0gLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBqdXN0SWNvblxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2luNX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFscyArIFwiIGZhYiBmYS1mYWNlYm9va1wifSAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0NhcmRGb290ZXI+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanNcIjtcbmltcG9ydCBHcmlkSXRlbSBmcm9tIFwiY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtLmpzXCI7XG5pbXBvcnQgQ3VzdG9tSW5wdXQgZnJvbSBcImNvbXBvbmVudHMvQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXQuanNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanNcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwic3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L3BhZ2VzL2xhbmRpbmdQYWdlU2VjdGlvbnMvd29ya1N0eWxlLmpzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya1NlY3Rpb24ocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgPEdyaWRDb250YWluZXIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgPEdyaWRJdGVtIGNzPXsxMn0gc209ezEyfSBtZD17OH0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+UXVlcnkgZm9yIHNwZWNpZmljIGNvbXBhbnk8L2gyPlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgSW4gb3JkZXIgdG8gYnVpbGQgeW91ciBLWUIgcHJvZmlsZSwgZmlyc3QgcHJvdmlkZSB5b3VyIGNvbXBhbnnigJlzIGRldGFpbHMgYmVsb3csIGFuZCB0aGVuIGNsaWNrIHRoZSDigJxSZXRyaWV2ZSBEYXRh4oCdIGJ1dHRvbi4gVGhpcyB3aWxsIHJlc3VsdCBpbiBhbiBlSURBUyBlSUQgYXV0aGVudGljYXRpb24uXG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dExlZnQgfT5cbiAgICAgICAgICAgICAgICBDb21wYW55IERldGFpbHMgRm9ybVxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cbiAgICAgICAgICAgICAgICA8Q3VzdG9tSW5wdXRcbiAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dD1cIkNvbXBhbnkgTmFtZVwiXG4gICAgICAgICAgICAgICAgICBpZD1cImNvbXBhbnlOYW1lXCJcbiAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgICAgIDxDdXN0b21JbnB1dFxuICAgICAgICAgICAgICAgICAgICBsYWJlbFRleHQ9XCJDb21wYW55IENvdW50cnlcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbXBhbnlDb3VudHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICA8Q3VzdG9tSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiTEVJXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJsZWlcIlxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMudGV4dEFyZWEsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cblxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0TGVmdH0+XG4gICAgICAgICAgICAgICAgUmVwcmVzZW50YXRpdmUgRm9ybVxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFRleHQ9XCJTdXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgPEN1c3RvbUlucHV0XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50ZXh0QXJlYSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs0fSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dENlbnRlcn0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5SZXRyaWV2ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExheW91dE5ldyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXROZXdcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgVmFsaWRhdGVUYWJsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9WYWxpZGF0ZUtZQkNvbXBcIjtcclxuaW1wb3J0IFdvcmtTZWN0aW9uIGZyb20gXCJwYWdlcy1zZWN0aW9ucy9MYW5kaW5nUGFnZS1TZWN0aW9ucy9Xb3JrU2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQgRm9ybTEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9ybXMvRm9ybTFcIjtcclxuaW1wb3J0IEZvcm0yIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvcm1zL0Zvcm0yXCI7XHJcbmltcG9ydCBGb3JtMyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb3Jtcy9Gb3JtM1wiO1xyXG5pbXBvcnQgRm9ybTQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9ybXMvRm9ybTRcIjtcclxuaW1wb3J0IEZvcm01IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvcm1zL0Zvcm01XCI7XHJcbmltcG9ydCBGb3JtNiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb3Jtcy9Gb3JtNlwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBHcmlkSXRlbSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtXCI7XHJcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lclwiO1xyXG5cclxuY2xhc3MgUXVlcnlWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY29tcGFueU5hbWU6IG51bGwsXHJcbiAgICAgIGNvbXBhbnlDb3VudHJ5OiBudWxsLFxyXG4gICAgICBMRUk6IG51bGwsXHJcbiAgICAgIGlzTmV4dEVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5zdHJpbmdOb3RFbXB0eSA9IHRoaXMuc3RyaW5nTm90RW1wdHkuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZWR1eFN0b3JlLCByZXEgfSkge1xyXG4gICAgLy9yZXR1cm5lZCB2YWx1ZSBoZXJlIGlzIGdldHRpbmcgbWVyZWQgd2l0aCB0aGUgbWFwc3RhdGV0b3Byb3BzXHJcbiAgICAvLyBtYXBzdGF0ZXRvcHJvcHMgb3ZlcnJpZGVzIHRoZXNlIHZhbHVlcyBpZiB0aGV5IG1hdGNoXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VyRGV0YWlsczogcmVxLnVzZXJEZXRhaWxzLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyhuYW1lICsgXCIgXCIgKyB2YWx1ZSk7XHJcbiAgICAvLyBzZXRJbnB1dHModmFsdWVzID0+ICh7Li4udmFsdWVzLCBbbmFtZV06IHZhbHVlfSkpXHJcbiAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnN0cmluZ05vdEVtcHR5KHRoaXMuc3RhdGUubGVpKSB8fFxyXG4gICAgICAodGhpcy5zdHJpbmdOb3RFbXB0eSh0aGlzLnN0YXRlLmNvbXBhbnlDb3VudHJ5KSAmJlxyXG4gICAgICAgIHRoaXMuc3RyaW5nTm90RW1wdHkodGhpcy5zdGF0ZS5jb21wYW55TmFtZSkpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaXNOZXh0RW5hYmxlZDogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpc05leHRFbmFibGVkOiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhgY2xpY2tlZCBzdWJtaXRgKTtcclxuICB9O1xyXG5cclxuICBzdHJpbmdOb3RFbXB0eShzKSB7XHJcbiAgICBpZiAocykge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gcy5sZW5ndGggPiAwO1xyXG4gICAgICBjb25zb2xlLmxvZyhgbm90IGVtcHR5ICR7c306OiAke3Jlc3VsdH1gKTtcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXROZXcgaG9tZT5cclxuICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+R3JpZHM8L3RpdGxlPlxyXG4gICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgIHsvKjxXb3JrU2VjdGlvbiBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+Ki99XHJcblxyXG4gICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgIEluIG9yZGVyIHRvIGJ1aWxkIHlvdXIgS1lCIHByb2ZpbGUsIGZpcnN0IHByb3ZpZGUgeW91ciBjb21wYW554oCZcyBkZXRhaWxzIGJlbG93LCBhbmQgdGhlbiBjbGljayB0aGUg4oCcUmV0cmlldmUgRGF0YeKAnSBidXR0b24uIFRoaXMgd2lsbCByZXN1bHQgaW4gYW4gZUlEQVMgZUlEIGF1dGhlbnRpY2F0aW9uLlxyXG4gICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL3N0YXJ0LWxvZ2luXCIgbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgPEZvcm02IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICB7Lyo8bGFiZWwgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIENvbXBhbnkgTmFtZTpcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjb21wYW55TmFtZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgQ29tcGFueSBDb3VudHJ5OlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbXBhbnlDb3VudHJ5XCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICBMRUk6XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsZWlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IXRoaXMuc3RhdGUuaXNOZXh0RW5hYmxlZH0gLz5cclxuXHJcbiAgICAgICAgICA8L2Rpdj4qL31cclxuICAgICAgICA8L0xheW91dE5ldz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdGVzdDogXCJUZXN0XCIsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHt9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShRdWVyeVZpZXcpO1xyXG4iLCIvKiFcblxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogTmV4dEpTIE1hdGVyaWFsIEtpdCAtIHYxLjIuMCBiYXNlZCBvbiBNYXRlcmlhbCBLaXQgLSB2Mi4wLjIgYW5kIE1hdGVyaWFsIEtpdCBSZWFjdCAtIHYxLjguMFxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gKiBQcm9kdWN0IFBhZ2U6IGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9uZXh0anMtbWF0ZXJpYWwta2l0XG4gKiBDb3B5cmlnaHQgMjAyMSBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9jcmVhdGl2ZXRpbW9mZmljaWFsL25leHRqcy1tYXRlcmlhbC1raXQvYmxvYi9tYWluL0xJQ0VOU0UubWQpXG5cbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAqL1xuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vIC8vIC8vIFZhcmlhYmxlcyAtIFN0eWxlcyB0aGF0IGFyZSB1c2VkIG9uIG1vcmUgdGhhbiBvbmUgY29tcG9uZW50XG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG5jb25zdCBoZXhDb2xvclRvUkdCID0gZnVuY3Rpb24gKGhleENvbG9yKSB7XG4gIGxldCBkZXRlY3RTaG9ydGhhbmQgPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pOyAvLyAjMDAwIHZzICMwMDAwMDBcbiAgaGV4Q29sb3IgPSBoZXhDb2xvci5yZXBsYWNlKGRldGVjdFNob3J0aGFuZCwgZnVuY3Rpb24gKG0sIHIsIGcsIGIpIHtcbiAgICByZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiO1xuICB9KTtcblxuICBjb25zdCBoZXhfYXJyYXkgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4Q29sb3IpOyAvLyAjMDAwMDAwIHRvICNmZmZmZmZcbiAgcmV0dXJuIGhleF9hcnJheVxuICAgID8ge1xuICAgICAgICByOiBwYXJzZUludChoZXhfYXJyYXlbMV0sIDE2KSwgLy8gMC0yNTVcbiAgICAgICAgZzogcGFyc2VJbnQoaGV4X2FycmF5WzJdLCAxNiksIC8vIDAtMjU1XG4gICAgICAgIGI6IHBhcnNlSW50KGhleF9hcnJheVszXSwgMTYpLCAvLyAwLTI1NVxuICAgICAgfVxuICAgIDogbnVsbDtcbn07XG5cbmNvbnN0IGhleFRvUkdCQWxwaGEgPSBmdW5jdGlvbiAoaGV4Q29sb3IsIGFscGhhKSB7XG4gIGxldCByZ2IgPSBoZXhDb2xvclRvUkdCKGhleENvbG9yKTtcbiAgcmV0dXJuIGByZ2JhKCR7cmdiLnJ9LCR7cmdiLmd9LCR7cmdiLmJ9LCR7YWxwaGF9KWA7XG59O1xuXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI2MDtcblxuY29uc3QgdHJhbnNpdGlvbiA9IHtcbiAgdHJhbnNpdGlvbjogXCJhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKVwiLFxufTtcblxuY29uc3QgY29udGFpbmVyRmx1aWQgPSB7XG4gIHBhZGRpbmdSaWdodDogXCIxNXB4XCIsXG4gIHBhZGRpbmdMZWZ0OiBcIjE1cHhcIixcbiAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxuICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgd2lkdGg6IFwiMTAwJVwiLFxufTtcblxuY29uc3QgY29udGFpbmVyRmx1aWROZXcgPSB7XG4gIHBhZGRpbmdSaWdodDogXCIwcHhcIixcbiAgcGFkZGluZ0xlZnQ6IFwiMHB4XCIsXG4gIG1hcmdpblJpZ2h0OiBcIjBweFwiLFxuICBtYXJnaW5MZWZ0OiBcIjBweFwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG59O1xuXG5jb25zdCBjb250YWluZXJGbHVpZEF1dG8gPSB7XG4gIHBhZGRpbmdSaWdodDogXCIxNXB4XCIsXG4gIHBhZGRpbmdMZWZ0OiBcIjE1cHhcIixcbiAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxuICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgd2lkdGg6IFwiYXV0b1wiLFxufTtcblxuXG5jb25zdCBjb250YWluZXIgPSB7XG4gIC4uLmNvbnRhaW5lckZsdWlkLFxuICBcIkBtZWRpYSAobWluLXdpZHRoOiA1NzZweClcIjoge1xuICAgIG1heFdpZHRoOiBcIjU0MHB4XCIsXG4gIH0sXG4gIFwiQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KVwiOiB7XG4gICAgbWF4V2lkdGg6IFwiNzIwcHhcIixcbiAgfSxcbiAgXCJAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpXCI6IHtcbiAgICBtYXhXaWR0aDogXCI5NjBweFwiLFxuICB9LFxuICBcIkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpXCI6IHtcbiAgICBtYXhXaWR0aDogXCIxMTQwcHhcIixcbiAgfSxcbn07XG5cbmNvbnN0IGNvbnRhaW5lck5ldyA9IHtcbiAgLi4uY29udGFpbmVyRmx1aWROZXcsXG4gIFwiQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KVwiOiB7XG4gICAgbWF4V2lkdGg6IFwiNTQwcHhcIixcbiAgfSxcbiAgXCJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpXCI6IHtcbiAgICBtYXhXaWR0aDogXCI3MjBweFwiLFxuICB9LFxuICBcIkBtZWRpYSAobWluLXdpZHRoOiA5OTJweClcIjoge1xuICAgIG1heFdpZHRoOiBcIjk2MHB4XCIsXG4gIH0sXG4gIFwiQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweClcIjoge1xuICAgIG1heFdpZHRoOiBcIjExNDBweFwiLFxuICB9LFxufTtcblxuY29uc3QgY29udGFpbmVyQXV0byA9IHtcbiAgLi4uY29udGFpbmVyRmx1aWRBdXRvLFxuICBcIkBtZWRpYSAobWluLXdpZHRoOiA1NzZweClcIjoge1xuICAgIG1heFdpZHRoOiBcIjU0MHB4XCIsXG4gIH0sXG4gIFwiQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KVwiOiB7XG4gICAgbWF4V2lkdGg6IFwiNzIwcHhcIixcbiAgfSxcbiAgXCJAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpXCI6IHtcbiAgICBtYXhXaWR0aDogXCI5NjBweFwiLFxuICB9LFxuICBcIkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpXCI6IHtcbiAgICBtYXhXaWR0aDogXCIxMTQwcHhcIixcbiAgfSxcbn07XG5cbmNvbnN0IGJveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OlxuICAgIFwiMCAxMHB4IDMwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjQyKSwgMCA0cHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxufTtcblxuY29uc3QgY2FyZCA9IHtcbiAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBtYXJnaW46IFwiMjVweCAwXCIsXG4gIGJveFNoYWRvdzogXCIwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpXCIsXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjg3KVwiLFxuICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcbn07XG5cbmNvbnN0IGRlZmF1bHRGb250ID0ge1xuICBmb250RmFtaWx5OiAnXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmJyxcbiAgZm9udFdlaWdodDogXCIzMDBcIixcbiAgbGluZUhlaWdodDogXCIxLjVlbVwiLFxufTtcblxuY29uc3QgcHJpbWFyeUNvbG9yID0gXCIjMDkxZjUxXCI7XG5jb25zdCB3YXJuaW5nQ29sb3IgPSBcIiNmZjk4MDBcIjtcbmNvbnN0IGRhbmdlckNvbG9yID0gXCIjZjQ0MzM2XCI7XG5jb25zdCBzdWNjZXNzQ29sb3IgPSBcIiM0Y2FmNTBcIjtcbmNvbnN0IGluZm9Db2xvciA9IFwiIzAwYWNjMVwiO1xuY29uc3Qgcm9zZUNvbG9yID0gXCIjZTkxZTYzXCI7XG5jb25zdCBncmF5Q29sb3IgPSBcIiM5OTk5OTlcIjtcblxuY29uc3QgcHJpbWFyeUJveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OiBgMCAxMnB4IDIwcHggLTEwcHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHByaW1hcnlDb2xvcixcbiAgICAwLjI4XG4gICl9LCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgcHJpbWFyeUNvbG9yLFxuICAgIDAuMlxuICApfWAsXG59O1xuY29uc3QgaW5mb0JveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OiBgMCAxMnB4IDIwcHggLTEwcHggJHtoZXhUb1JHQkFscGhhKFxuICAgIGluZm9Db2xvcixcbiAgICAwLjI4XG4gICl9LCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgaW5mb0NvbG9yLFxuICAgIDAuMlxuICApfWAsXG59O1xuY29uc3Qgc3VjY2Vzc0JveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OiBgMCAxMnB4IDIwcHggLTEwcHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHN1Y2Nlc3NDb2xvcixcbiAgICAwLjI4XG4gICl9LCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgc3VjY2Vzc0NvbG9yLFxuICAgIDAuMlxuICApfWAsXG59O1xuY29uc3Qgd2FybmluZ0JveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OiBgMCAxMnB4IDIwcHggLTEwcHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHdhcm5pbmdDb2xvcixcbiAgICAwLjI4XG4gICl9LCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgd2FybmluZ0NvbG9yLFxuICAgIDAuMlxuICApfWAsXG59O1xuY29uc3QgZGFuZ2VyQm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6IGAwIDEycHggMjBweCAtMTBweCAke2hleFRvUkdCQWxwaGEoXG4gICAgZGFuZ2VyQ29sb3IsXG4gICAgMC4yOFxuICApfSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggJHtoZXhUb1JHQkFscGhhKFxuICAgIGRhbmdlckNvbG9yLFxuICAgIDAuMlxuICApfWAsXG59O1xuY29uc3Qgcm9zZUJveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OiBgMCA0cHggMjBweCAwcHggJHtoZXhUb1JHQkFscGhhKFxuICAgIFwiIzAwMFwiLFxuICAgIDAuMTRcbiAgKX0sIDAgN3B4IDEwcHggLTVweCAke2hleFRvUkdCQWxwaGEocm9zZUNvbG9yLCAwLjQpfWAsXG59O1xuXG5jb25zdCB3YXJuaW5nQ2FyZEhlYWRlciA9IHtcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgI2ZmYTcyNiwgI2ZiOGMwMClcIixcbiAgLi4ud2FybmluZ0JveFNoYWRvdyxcbn07XG5jb25zdCBzdWNjZXNzQ2FyZEhlYWRlciA9IHtcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgIzY2YmI2YSwgIzQzYTA0NylcIixcbiAgLi4uc3VjY2Vzc0JveFNoYWRvdyxcbn07XG5jb25zdCBkYW5nZXJDYXJkSGVhZGVyID0ge1xuICBjb2xvcjogXCIjZmZmXCIsXG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZWY1MzUwLCAjZTUzOTM1KVwiLFxuICAuLi5kYW5nZXJCb3hTaGFkb3csXG59O1xuY29uc3QgaW5mb0NhcmRIZWFkZXIgPSB7XG4gIGNvbG9yOiBcIiNmZmZcIixcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMyNmM2ZGEsICMwMGFjYzEpXCIsXG4gIC4uLmluZm9Cb3hTaGFkb3csXG59O1xuY29uc3QgcHJpbWFyeUNhcmRIZWFkZXIgPSB7XG4gIGNvbG9yOiBcIiNmZmZcIixcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMwNzFlNGYsICMwNDE3NDApXCIsXG4gIC4uLnByaW1hcnlCb3hTaGFkb3csXG59O1xuY29uc3Qgcm9zZUNhcmRIZWFkZXIgPSB7XG4gIGNvbG9yOiBcIiNmZmZcIixcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNlYzQwN2EsICNkODFiNjApXCIsXG4gIC4uLnJvc2VCb3hTaGFkb3csXG59O1xuY29uc3QgY2FyZEFjdGlvbnMgPSB7XG4gIG1hcmdpbjogXCIwIDIwcHggMTBweFwiLFxuICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcbiAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCAjZWVlZWVlXCIsXG4gIGhlaWdodDogXCJhdXRvXCIsXG4gIC4uLmRlZmF1bHRGb250LFxufTtcblxuY29uc3QgY2FyZEhlYWRlciA9IHtcbiAgbWFyZ2luOiBcIi0zMHB4IDE1cHggMFwiLFxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gIHBhZGRpbmc6IFwiMTVweFwiLFxufTtcblxuY29uc3QgZGVmYXVsdEJveFNoYWRvdyA9IHtcbiAgYm9yZGVyOiBcIjBcIixcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICBib3hTaGFkb3c6XG4gICAgXCIwIDEwcHggMjBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNDIpLCAwIDNweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXG4gIHBhZGRpbmc6IFwiMTBweCAwXCIsXG4gIHRyYW5zaXRpb246IFwiYWxsIDE1MG1zIGVhc2UgMHNcIixcbn07XG5cbmNvbnN0IHRpdGxlID0ge1xuICBjb2xvcjogXCIjM0M0ODU4XCIsXG4gIG1hcmdpbjogXCIxLjc1cmVtIDAgMC44NzVyZW1cIixcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICBmb250RmFtaWx5OiBgXCJSb2JvdG8gU2xhYlwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZmAsXG59O1xuXG5jb25zdCBjYXJkVGl0bGUgPSB7XG4gIC4uLnRpdGxlLFxuICBtYXJnaW5Ub3A6IFwiLjYyNXJlbVwiLFxufTtcblxuY29uc3QgY2FyZExpbmsgPSB7XG4gIFwiJiArICRjYXJkTGlua1wiOiB7XG4gICAgbWFyZ2luTGVmdDogXCIxLjI1cmVtXCIsXG4gIH0sXG59O1xuXG5jb25zdCBjYXJkU3VidGl0bGUgPSB7XG4gIG1hcmdpbkJvdHRvbTogXCIwXCIsXG4gIG1hcmdpblRvcDogXCItLjM3NXJlbVwiLFxufTtcblxuZXhwb3J0IHtcbiAgaGV4VG9SR0JBbHBoYSxcbiAgLy92YXJpYWJsZXNcbiAgZHJhd2VyV2lkdGgsXG4gIHRyYW5zaXRpb24sXG4gIGNvbnRhaW5lcixcbiAgY29udGFpbmVyRmx1aWQsXG4gIGNvbnRhaW5lckF1dG8sXG4gIGNvbnRhaW5lckZsdWlkQXV0byxcbiAgY29udGFpbmVyTmV3LFxuICBjb250YWluZXJGbHVpZE5ldyxcbiAgYm94U2hhZG93LFxuICBjYXJkLFxuICBkZWZhdWx0Rm9udCxcbiAgcHJpbWFyeUNvbG9yLFxuICB3YXJuaW5nQ29sb3IsXG4gIGRhbmdlckNvbG9yLFxuICBzdWNjZXNzQ29sb3IsXG4gIGluZm9Db2xvcixcbiAgcm9zZUNvbG9yLFxuICBncmF5Q29sb3IsXG4gIHByaW1hcnlCb3hTaGFkb3csXG4gIGluZm9Cb3hTaGFkb3csXG4gIHN1Y2Nlc3NCb3hTaGFkb3csXG4gIHdhcm5pbmdCb3hTaGFkb3csXG4gIGRhbmdlckJveFNoYWRvdyxcbiAgcm9zZUJveFNoYWRvdyxcbiAgd2FybmluZ0NhcmRIZWFkZXIsXG4gIHN1Y2Nlc3NDYXJkSGVhZGVyLFxuICBkYW5nZXJDYXJkSGVhZGVyLFxuICBpbmZvQ2FyZEhlYWRlcixcbiAgcHJpbWFyeUNhcmRIZWFkZXIsXG4gIHJvc2VDYXJkSGVhZGVyLFxuICBjYXJkQWN0aW9ucyxcbiAgY2FyZEhlYWRlcixcbiAgZGVmYXVsdEJveFNoYWRvdyxcbiAgdGl0bGUsXG4gIGNhcmRUaXRsZSxcbiAgY2FyZExpbmssXG4gIGNhcmRTdWJ0aXRsZSxcbn07XG4iLCJpbXBvcnQge1xuICBoZXhUb1JHQkFscGhhLFxuICBncmF5Q29sb3IsXG4gIHJvc2VDb2xvcixcbiAgcHJpbWFyeUNvbG9yLFxuICBpbmZvQ29sb3IsXG4gIHN1Y2Nlc3NDb2xvcixcbiAgd2FybmluZ0NvbG9yLFxuICBkYW5nZXJDb2xvcixcbn0gZnJvbSBcInN0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC5qc1wiO1xuXG5jb25zdCBidXR0b25TdHlsZSA9IHtcbiAgYnV0dG9uOiB7XG4gICAgbWluSGVpZ2h0OiBcImF1dG9cIixcbiAgICBtaW5XaWR0aDogXCJhdXRvXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBncmF5Q29sb3IsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYSgxNTMsIDE1MywgMTUzLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgxNTMsIDE1MywgMTUzLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMTIpXCIsXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBwYWRkaW5nOiBcIjEycHggMzBweFwiLFxuICAgIG1hcmdpbjogXCIuMzEyNXJlbSAxcHhcIixcbiAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIGxldHRlclNwYWNpbmc6IFwiMFwiLFxuICAgIHdpbGxDaGFuZ2U6IFwiYm94LXNoYWRvdywgdHJhbnNmb3JtXCIsXG4gICAgdHJhbnNpdGlvbjpcbiAgICAgIFwiYm94LXNoYWRvdyAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKVwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMS40Mjg1NzE0M1wiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG4gICAgdG91Y2hBY3Rpb246IFwibWFuaXB1bGF0aW9uXCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdyYXlDb2xvcixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgxNTMsIDE1MywgMTUzLCAwLjIpXCIsXG4gICAgfSxcbiAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgIHRvcDogXCIwXCIsXG4gICAgICBmb250U2l6ZTogXCIxLjFyZW1cIixcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjRweFwiLFxuICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcbiAgICB9LFxuICAgIFwiJiBzdmdcIjoge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICB0b3A6IFwiMFwiLFxuICAgICAgd2lkdGg6IFwiMThweFwiLFxuICAgICAgaGVpZ2h0OiBcIjE4cHhcIixcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjRweFwiLFxuICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcbiAgICB9LFxuICAgIFwiJiRqdXN0SWNvblwiOiB7XG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiBcIjBweFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIHRyYW5zZm9ybTogXCJub25lXCIsXG4gICAgICAgIGxlZnQ6IFwiMHB4XCIsXG4gICAgICAgIHRvcDogXCIwcHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgbGluZUhlaWdodDogXCI0MXB4XCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZnVsbFdpZHRoOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9LFxuICBwcmltYXJ5OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBwcmltYXJ5Q29sb3IsXG4gICAgYm94U2hhZG93OiBgMCAycHggMnB4IDAgJHtoZXhUb1JHQkFscGhhKFxuICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgMC4xNFxuICAgICl9LCAwIDNweCAxcHggLTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICBwcmltYXJ5Q29sb3IsXG4gICAgICAwLjJcbiAgICApfSwgMCAxcHggNXB4IDAgJHtoZXhUb1JHQkFscGhhKHByaW1hcnlDb2xvciwgMC4xMil9YCxcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvcixcbiAgICAgIGJveFNoYWRvdzogYDAgMTRweCAyNnB4IC0xMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgICAwLjQyXG4gICAgICApfSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgICAwLjJcbiAgICAgICl9YCxcbiAgICB9LFxuICB9LFxuICBpbmZvOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBpbmZvQ29sb3IsXG4gICAgYm94U2hhZG93OiBgMCAycHggMnB4IDAgJHtoZXhUb1JHQkFscGhhKFxuICAgICAgaW5mb0NvbG9yLFxuICAgICAgMC4xNFxuICAgICl9LCAwIDNweCAxcHggLTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICBpbmZvQ29sb3IsXG4gICAgICAwLjJcbiAgICApfSwgMCAxcHggNXB4IDAgJHtoZXhUb1JHQkFscGhhKGluZm9Db2xvciwgMC4xMil9YCxcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGluZm9Db2xvcixcbiAgICAgIGJveFNoYWRvdzogYDAgMTRweCAyNnB4IC0xMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgaW5mb0NvbG9yLFxuICAgICAgICAwLjQyXG4gICAgICApfSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgaW5mb0NvbG9yLFxuICAgICAgICAwLjJcbiAgICAgICl9YCxcbiAgICB9LFxuICB9LFxuICBzdWNjZXNzOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBzdWNjZXNzQ29sb3IsXG4gICAgYm94U2hhZG93OiBgMCAycHggMnB4IDAgJHtoZXhUb1JHQkFscGhhKFxuICAgICAgc3VjY2Vzc0NvbG9yLFxuICAgICAgMC4xNFxuICAgICl9LCAwIDNweCAxcHggLTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICBzdWNjZXNzQ29sb3IsXG4gICAgICAwLjJcbiAgICApfSwgMCAxcHggNXB4IDAgJHtoZXhUb1JHQkFscGhhKHN1Y2Nlc3NDb2xvciwgMC4xMil9YCxcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvcixcbiAgICAgIGJveFNoYWRvdzogYDAgMTRweCAyNnB4IC0xMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgc3VjY2Vzc0NvbG9yLFxuICAgICAgICAwLjQyXG4gICAgICApfSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgc3VjY2Vzc0NvbG9yLFxuICAgICAgICAwLjJcbiAgICAgICl9YCxcbiAgICB9LFxuICB9LFxuICB3YXJuaW5nOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nQ29sb3IsXG4gICAgYm94U2hhZG93OiBgMCAycHggMnB4IDAgJHtoZXhUb1JHQkFscGhhKFxuICAgICAgd2FybmluZ0NvbG9yLFxuICAgICAgMC4xNFxuICAgICl9LCAwIDNweCAxcHggLTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICB3YXJuaW5nQ29sb3IsXG4gICAgICAwLjJcbiAgICApfSwgMCAxcHggNXB4IDAgJHtoZXhUb1JHQkFscGhhKHdhcm5pbmdDb2xvciwgMC4xMil9YCxcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHdhcm5pbmdDb2xvcixcbiAgICAgIGJveFNoYWRvdzogYDAgMTRweCAyNnB4IC0xMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgd2FybmluZ0NvbG9yLFxuICAgICAgICAwLjQyXG4gICAgICApfSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgd2FybmluZ0NvbG9yLFxuICAgICAgICAwLjJcbiAgICAgICl9YCxcbiAgICB9LFxuICB9LFxuICBkYW5nZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhbmdlckNvbG9yLFxuICAgIGJveFNoYWRvdzogYDAgMnB4IDJweCAwICR7aGV4VG9SR0JBbHBoYShcbiAgICAgIGRhbmdlckNvbG9yLFxuICAgICAgMC4xNFxuICAgICl9LCAwIDNweCAxcHggLTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICBkYW5nZXJDb2xvcixcbiAgICAgIDAuMlxuICAgICl9LCAwIDFweCA1cHggMCAke2hleFRvUkdCQWxwaGEoZGFuZ2VyQ29sb3IsIDAuMTIpfWAsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvcixcbiAgICAgIGJveFNoYWRvdzogYDAgMTRweCAyNnB4IC0xMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgZGFuZ2VyQ29sb3IsXG4gICAgICAgIDAuNDJcbiAgICAgICl9LCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgICBkYW5nZXJDb2xvcixcbiAgICAgICAgMC4yXG4gICAgICApfWAsXG4gICAgfSxcbiAgfSxcbiAgcm9zZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogcm9zZUNvbG9yLFxuICAgIGJveFNoYWRvdzogYDAgMnB4IDJweCAwICR7aGV4VG9SR0JBbHBoYShcbiAgICAgIHByaW1hcnlDb2xvcixcbiAgICAgIDAuMTRcbiAgICApfSwgMCAzcHggMXB4IC0ycHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgMC4yXG4gICAgKX0sIDAgMXB4IDVweCAwICR7aGV4VG9SR0JBbHBoYShwcmltYXJ5Q29sb3IsIDAuMTIpfWAsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiByb3NlQ29sb3IsXG4gICAgICBib3hTaGFkb3c6IGAwIDE0cHggMjZweCAtMTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICAgIHByaW1hcnlDb2xvcixcbiAgICAgICAgMC40MlxuICAgICAgKX0sIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICAgIHByaW1hcnlDb2xvcixcbiAgICAgICAgMC4yXG4gICAgICApfWAsXG4gICAgfSxcbiAgfSxcbiAgd2hpdGU6IHtcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgY29sb3I6IGdyYXlDb2xvcixcbiAgICB9LFxuICB9LFxuICB0d2l0dGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM1NWFjZWVcIixcbiAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKDg1LCAxNzIsIDIzOCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoODUsIDE3MiwgMjM4LCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDg1LCAxNzIsIDIzOCwgMC4xMilcIixcbiAgICBcIiY6aG92ZXIsJjpmb2N1cywmOnZpc2l0ZWRcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM1NWFjZWVcIixcbiAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKDg1LCAxNzIsIDIzOCwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDg1LCAxNzIsIDIzOCwgMC4yKVwiLFxuICAgIH0sXG4gIH0sXG4gIGZhY2Vib29rOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMzYjU5OThcIixcbiAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKDU5LCA4OSwgMTUyLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSg1OSwgODksIDE1MiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSg1OSwgODksIDE1MiwgMC4xMilcIixcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNiNTk5OFwiLFxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgYm94U2hhZG93OlxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoNTksIDg5LCAxNTIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSg1OSwgODksIDE1MiwgMC4yKVwiLFxuICAgIH0sXG4gIH0sXG4gIGdvb2dsZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZGQ0YjM5XCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYSgyMjEsIDc1LCA1NywgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMjIxLCA3NSwgNTcsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMjIxLCA3NSwgNTcsIDAuMTIpXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNkZDRiMzlcIixcbiAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKDIyMSwgNzUsIDU3LCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMjIxLCA3NSwgNTcsIDAuMilcIixcbiAgICB9LFxuICB9LFxuICBnaXRodWI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMzMzMzM1wiLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjEyKVwiLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzMzMzMzXCIsXG4gICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYSg1MSwgNTEsIDUxLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yKVwiLFxuICAgIH0sXG4gIH0sXG4gIHNpbXBsZToge1xuICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgfSxcbiAgICBcIiYkcHJpbWFyeVwiOiB7XG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICAgIGNvbG9yOiBwcmltYXJ5Q29sb3IsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCImJGluZm9cIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogaW5mb0NvbG9yLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiJiRzdWNjZXNzXCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IHN1Y2Nlc3NDb2xvcixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcIiYkd2FybmluZ1wiOiB7XG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICAgIGNvbG9yOiB3YXJuaW5nQ29sb3IsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCImJHJvc2VcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogcm9zZUNvbG9yLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiJiRkYW5nZXJcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogZGFuZ2VyQ29sb3IsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCImJHR3aXR0ZXJcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogXCIjNTVhY2VlXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCImJGZhY2Vib29rXCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IFwiIzNiNTk5OFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiJiRnb29nbGVcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogXCIjZGQ0YjM5XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCImJGdpdGh1YlwiOiB7XG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICAgIGNvbG9yOiBcIiMzMzMzMzNcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgdHJhbnNwYXJlbnQ6IHtcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgIH0sXG4gIH0sXG4gIGRpc2FibGVkOiB7XG4gICAgb3BhY2l0eTogXCIwLjY1XCIsXG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXG4gIH0sXG4gIGxnOiB7XG4gICAgcGFkZGluZzogXCIxLjEyNXJlbSAyLjI1cmVtXCIsXG4gICAgZm9udFNpemU6IFwiMC44NzVyZW1cIixcbiAgICBsaW5lSGVpZ2h0OiBcIjEuMzMzMzMzXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjAuMnJlbVwiLFxuICB9LFxuICBzbToge1xuICAgIHBhZGRpbmc6IFwiMC40MDYyNXJlbSAxLjI1cmVtXCIsXG4gICAgZm9udFNpemU6IFwiMC42ODc1cmVtXCIsXG4gICAgbGluZUhlaWdodDogXCIxLjVcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMC4ycmVtXCIsXG4gIH0sXG4gIHJvdW5kOiB7XG4gICAgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIixcbiAgfSxcbiAgYmxvY2s6IHtcbiAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIixcbiAgfSxcbiAgbGluazoge1xuICAgIFwiJiwmOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICBjb2xvcjogXCIjOTk5OTk5XCIsXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgIH0sXG4gIH0sXG4gIGp1c3RJY29uOiB7XG4gICAgcGFkZGluZ0xlZnQ6IFwiMTJweFwiLFxuICAgIHBhZGRpbmdSaWdodDogXCIxMnB4XCIsXG4gICAgZm9udFNpemU6IFwiMjBweFwiLFxuICAgIGhlaWdodDogXCI0MXB4XCIsXG4gICAgbWluV2lkdGg6IFwiNDFweFwiLFxuICAgIHdpZHRoOiBcIjQxcHhcIixcbiAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIHN2ZywmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICBtYXJnaW5SaWdodDogXCIwcHhcIixcbiAgICB9LFxuICAgIFwiJiRsZ1wiOiB7XG4gICAgICBoZWlnaHQ6IFwiNTdweFwiLFxuICAgICAgbWluV2lkdGg6IFwiNTdweFwiLFxuICAgICAgd2lkdGg6IFwiNTdweFwiLFxuICAgICAgbGluZUhlaWdodDogXCI1NnB4XCIsXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICAgIGZvbnRTaXplOiBcIjMycHhcIixcbiAgICAgICAgbGluZUhlaWdodDogXCI1NnB4XCIsXG4gICAgICB9LFxuICAgICAgXCImIHN2Z1wiOiB7XG4gICAgICAgIHdpZHRoOiBcIjMycHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjMycHhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcIiYkc21cIjoge1xuICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgIG1pbldpZHRoOiBcIjMwcHhcIixcbiAgICAgIHdpZHRoOiBcIjMwcHhcIixcbiAgICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcbiAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjI5cHhcIixcbiAgICAgIH0sXG4gICAgICBcIiYgc3ZnXCI6IHtcbiAgICAgICAgd2lkdGg6IFwiMTdweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTdweFwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYnV0dG9uU3R5bGU7XG4iLCJjb25zdCBjYXJkQm9keVN0eWxlID0ge1xuICBjYXJkQm9keToge1xuICAgIHBhZGRpbmc6IFwiMC45Mzc1cmVtIDEuODc1cmVtXCIsXG4gICAgZmxleDogXCIxIDEgYXV0b1wiLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FyZEJvZHlTdHlsZTtcbiIsImNvbnN0IGNhcmRGb290ZXJTdHlsZSA9IHtcbiAgY2FyZEZvb3Rlcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgcGFkZGluZzogXCIwLjkzNzVyZW0gMS44NzVyZW1cIixcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhcmRGb290ZXJTdHlsZTtcbiIsImltcG9ydCB7XG4gIHdhcm5pbmdDYXJkSGVhZGVyLFxuICBzdWNjZXNzQ2FyZEhlYWRlcixcbiAgZGFuZ2VyQ2FyZEhlYWRlcixcbiAgaW5mb0NhcmRIZWFkZXIsXG4gIHByaW1hcnlDYXJkSGVhZGVyLFxufSBmcm9tIFwic3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0LmpzXCI7XG5cbmNvbnN0IGNhcmRIZWFkZXJTdHlsZSA9IHtcbiAgY2FyZEhlYWRlcjoge1xuICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICBwYWRkaW5nOiBcIjFyZW0gMTVweFwiLFxuICAgIG1hcmdpbkxlZnQ6IFwiMTVweFwiLFxuICAgIG1hcmdpblJpZ2h0OiBcIjE1cHhcIixcbiAgICBtYXJnaW5Ub3A6IFwiLTMwcHhcIixcbiAgICBib3JkZXI6IFwiMFwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIwXCIsXG4gIH0sXG4gIGNhcmRIZWFkZXJQbGFpbjoge1xuICAgIG1hcmdpbkxlZnQ6IFwiMHB4XCIsXG4gICAgbWFyZ2luUmlnaHQ6IFwiMHB4XCIsXG4gIH0sXG4gIHdhcm5pbmdDYXJkSGVhZGVyLFxuICBzdWNjZXNzQ2FyZEhlYWRlcixcbiAgZGFuZ2VyQ2FyZEhlYWRlcixcbiAgaW5mb0NhcmRIZWFkZXIsXG4gIHByaW1hcnlDYXJkSGVhZGVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FyZEhlYWRlclN0eWxlO1xuIiwiY29uc3QgY2FyZFN0eWxlID0ge1xuICBjYXJkOiB7XG4gICAgYm9yZGVyOiBcIjBcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMzBweFwiLFxuICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjZweFwiLFxuICAgIGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC44NylcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMilcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgbWluV2lkdGg6IFwiMFwiLFxuICAgIHdvcmRXcmFwOiBcImJyZWFrLXdvcmRcIixcbiAgICBmb250U2l6ZTogXCIuODc1cmVtXCIsXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMzAwbXMgbGluZWFyXCIsXG4gIH0sXG4gIGNhcmRQbGFpbjoge1xuICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICB9LFxuICBjYXJkQ2Fyb3VzZWw6IHtcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhcmRTdHlsZTtcbiIsImltcG9ydCB7XG4gIGRlZmF1bHRGb250LFxuICBwcmltYXJ5Q29sb3IsXG4gIHByaW1hcnlCb3hTaGFkb3csXG4gIGluZm9Db2xvcixcbiAgaW5mb0JveFNoYWRvdyxcbiAgc3VjY2Vzc0NvbG9yLFxuICBzdWNjZXNzQm94U2hhZG93LFxuICB3YXJuaW5nQ29sb3IsXG4gIHdhcm5pbmdCb3hTaGFkb3csXG4gIGRhbmdlckNvbG9yLFxuICBkYW5nZXJCb3hTaGFkb3csXG4gIHJvc2VDb2xvcixcbiAgcm9zZUJveFNoYWRvdyxcbn0gZnJvbSBcInN0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC5qc1wiO1xuXG5jb25zdCBjdXN0b21Ecm9wZG93blN0eWxlID0gKHRoZW1lKSA9PiAoe1xuICBwb3BwZXJDbG9zZToge1xuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxuICB9LFxuICBwb29wZXJOYXY6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xuICAgICAgcG9zaXRpb246IFwic3RhdGljICFpbXBvcnRhbnRcIixcbiAgICAgIGxlZnQ6IFwidW5zZXQgIWltcG9ydGFudFwiLFxuICAgICAgdG9wOiBcInVuc2V0ICFpbXBvcnRhbnRcIixcbiAgICAgIHRyYW5zZm9ybTogXCJub25lICFpbXBvcnRhbnRcIixcbiAgICAgIHdpbGxDaGFuZ2U6IFwibm9uZSAhaW1wb3J0YW50XCIsXG4gICAgICBcIiYgPiBkaXZcIjoge1xuICAgICAgICBib3hTaGFkb3c6IFwibm9uZSAhaW1wb3J0YW50XCIsXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMS41cmVtXCIsXG4gICAgICAgIG1hcmdpblJpZ2h0OiBcIjEuNXJlbVwiLFxuICAgICAgICB0cmFuc2l0aW9uOiBcIm5vbmUgIWltcG9ydGFudFwiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiMHB4ICFpbXBvcnRhbnRcIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweCAhaW1wb3J0YW50XCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMHB4ICFpbXBvcnRhbnRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZHJvcGRvd246IHtcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgYm9yZGVyOiBcIjBcIixcbiAgICBib3hTaGFkb3c6IFwiMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KVwiLFxuICAgIHRvcDogXCIxMDAlXCIsXG4gICAgekluZGV4OiBcIjEwMDBcIixcbiAgICBtaW5XaWR0aDogXCIxNjBweFwiLFxuICAgIHBhZGRpbmc6IFwiNXB4IDBcIixcbiAgICBtYXJnaW46IFwiMnB4IDAgMFwiLFxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgIGxpc3RTdHlsZTogXCJub25lXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICBiYWNrZ3JvdW5kQ2xpcDogXCJwYWRkaW5nLWJveFwiLFxuICB9LFxuICBtZW51TGlzdDoge1xuICAgIHBhZGRpbmc6IFwiMFwiLFxuICB9LFxuICBwb3BwZXJSZXNwb25zaXZlOiB7XG4gICAgekluZGV4OiBcIjEyMDBcIixcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZSAhaW1wb3J0YW50XCIsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcbiAgICAgIHpJbmRleDogXCIxNjQwXCIsXG4gICAgICBwb3NpdGlvbjogXCJzdGF0aWMgIWltcG9ydGFudFwiLFxuICAgICAgZmxvYXQ6IFwibm9uZVwiLFxuICAgICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgICAgbWFyZ2luVG9wOiBcIjBcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgYm9yZGVyOiBcIjBcIixcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgIH0sXG4gIH0sXG4gIGRyb3Bkb3duSXRlbToge1xuICAgIC4uLmRlZmF1bHRGb250LFxuICAgIGZvbnRTaXplOiBcIjEzcHhcIixcbiAgICBwYWRkaW5nOiBcIjEwcHggMjBweFwiLFxuICAgIG1hcmdpbjogXCIwIDVweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCIycHhcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIHRyYW5zaXRpb246IFwiYWxsIDE1MG1zIGxpbmVhclwiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICBjbGVhcjogXCJib3RoXCIsXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICBoZWlnaHQ6IFwiZml0LWNvbnRlbnRcIixcbiAgICBjb2xvcjogXCIjMzMzXCIsXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICBtaW5IZWlnaHQ6IFwidW5zZXRcIixcbiAgfSxcbiAgYmxhY2tIb3Zlcjoge1xuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoMzMsIDMzLCAzMywgMC40KVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyMTIxMjFcIixcbiAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICB9LFxuICB9LFxuICBwcmltYXJ5SG92ZXI6IHtcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBwcmltYXJ5Q29sb3IsXG4gICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICAuLi5wcmltYXJ5Qm94U2hhZG93LFxuICAgIH0sXG4gIH0sXG4gIGluZm9Ib3Zlcjoge1xuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGluZm9Db2xvcixcbiAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgIC4uLmluZm9Cb3hTaGFkb3csXG4gICAgfSxcbiAgfSxcbiAgc3VjY2Vzc0hvdmVyOiB7XG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogc3VjY2Vzc0NvbG9yLFxuICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgLi4uc3VjY2Vzc0JveFNoYWRvdyxcbiAgICB9LFxuICB9LFxuICB3YXJuaW5nSG92ZXI6IHtcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nQ29sb3IsXG4gICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICAuLi53YXJuaW5nQm94U2hhZG93LFxuICAgIH0sXG4gIH0sXG4gIGRhbmdlckhvdmVyOiB7XG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZGFuZ2VyQ29sb3IsXG4gICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICAuLi5kYW5nZXJCb3hTaGFkb3csXG4gICAgfSxcbiAgfSxcbiAgcm9zZUhvdmVyOiB7XG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcm9zZUNvbG9yLFxuICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgLi4ucm9zZUJveFNoYWRvdyxcbiAgICB9LFxuICB9LFxuICBkcm9wZG93bkl0ZW1SVEw6IHtcbiAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcbiAgfSxcbiAgZHJvcGRvd25EaXZpZGVySXRlbToge1xuICAgIG1hcmdpbjogXCI1cHggMFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuMTIpXCIsXG4gICAgaGVpZ2h0OiBcIjFweFwiLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB9LFxuICBidXR0b25JY29uOiB7XG4gICAgd2lkdGg6IFwiMjBweFwiLFxuICAgIGhlaWdodDogXCIyMHB4XCIsXG4gIH0sXG4gIGNhcmV0OiB7XG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMTUwbXMgZWFzZS1pblwiLFxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgd2lkdGg6IFwiMFwiLFxuICAgIGhlaWdodDogXCIwXCIsXG4gICAgbWFyZ2luTGVmdDogXCI0cHhcIixcbiAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgIGJvcmRlclRvcDogXCI0cHggc29saWRcIixcbiAgICBib3JkZXJSaWdodDogXCI0cHggc29saWQgdHJhbnNwYXJlbnRcIixcbiAgICBib3JkZXJMZWZ0OiBcIjRweCBzb2xpZCB0cmFuc3BhcmVudFwiLFxuICB9LFxuICBjYXJldEFjdGl2ZToge1xuICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMTgwZGVnKVwiLFxuICB9LFxuICBjYXJldFJUTDoge1xuICAgIG1hcmdpblJpZ2h0OiBcIjRweFwiLFxuICB9LFxuICBkcm9wZG93bkhlYWRlcjoge1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICBwYWRkaW5nOiBcIjAuMTg3NXJlbSAxLjI1cmVtXCIsXG4gICAgZm9udFNpemU6IFwiMC43NXJlbVwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMS40Mjg1NzFcIixcbiAgICBjb2xvcjogXCIjNzc3XCIsXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICBmb250V2VpZ2h0OiBcImluaGVyaXRcIixcbiAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxuICAgIG1pbkhlaWdodDogXCJ1bnNldFwiLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgY3Vyc29yOiBcImF1dG9cIixcbiAgICB9LFxuICB9LFxuICBub0xpUGFkZGluZzoge1xuICAgIHBhZGRpbmc6IFwiMFwiLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGN1c3RvbURyb3Bkb3duU3R5bGU7XG4iLCJpbXBvcnQge1xuICBwcmltYXJ5Q29sb3IsXG4gIGRhbmdlckNvbG9yLFxuICBzdWNjZXNzQ29sb3IsXG4gIGRlZmF1bHRGb250LFxufSBmcm9tIFwic3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0LmpzXCI7XG5cbmNvbnN0IGN1c3RvbUlucHV0U3R5bGUgPSB7XG4gIGRpc2FibGVkOiB7XG4gICAgXCImOmJlZm9yZVwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudCAhaW1wb3J0YW50XCIsXG4gICAgfSxcbiAgfSxcbiAgdW5kZXJsaW5lOiB7XG4gICAgXCImOmhvdmVyOm5vdCgkZGlzYWJsZWQpOmJlZm9yZSwmOmJlZm9yZVwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogXCIjRDJEMkQyICFpbXBvcnRhbnRcIixcbiAgICAgIGJvcmRlcldpZHRoOiBcIjFweCAhaW1wb3J0YW50XCIsXG4gICAgfSxcbiAgICBcIiY6YWZ0ZXJcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHByaW1hcnlDb2xvcixcbiAgICB9LFxuICB9LFxuICB1bmRlcmxpbmVFcnJvcjoge1xuICAgIFwiJjphZnRlclwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogZGFuZ2VyQ29sb3IsXG4gICAgfSxcbiAgfSxcbiAgdW5kZXJsaW5lU3VjY2Vzczoge1xuICAgIFwiJjphZnRlclwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogc3VjY2Vzc0NvbG9yLFxuICAgIH0sXG4gIH0sXG4gIHdoaXRlVW5kZXJsaW5lOiB7XG4gICAgXCImOmhvdmVyOm5vdCgkZGlzYWJsZWQpOmJlZm9yZSwmOmJlZm9yZVwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgfSxcbiAgICBcIiY6YWZ0ZXJcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIH0sXG4gIH0sXG4gIGxhYmVsUm9vdDoge1xuICAgIC4uLmRlZmF1bHRGb250LFxuICAgIGNvbG9yOiBcIiNBQUFBQUEgIWltcG9ydGFudFwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMS40Mjg1N1wiLFxuICAgIHRvcDogXCIxMHB4XCIsXG4gICAgbGV0dGVyU3BhY2luZzogXCJ1bnNldFwiLFxuICAgIFwiJiArICR1bmRlcmxpbmVcIjoge1xuICAgICAgbWFyZ2luVG9wOiBcIjBweFwiLFxuICAgIH0sXG4gIH0sXG4gIGxhYmVsUm9vdEVycm9yOiB7XG4gICAgY29sb3I6IGRhbmdlckNvbG9yICsgXCIgIWltcG9ydGFudFwiLFxuICB9LFxuICBsYWJlbFJvb3RTdWNjZXNzOiB7XG4gICAgY29sb3I6IHN1Y2Nlc3NDb2xvciArIFwiICFpbXBvcnRhbnRcIixcbiAgfSxcbiAgZm9ybUNvbnRyb2w6IHtcbiAgICBtYXJnaW46IFwiMCAwIDE3cHggMFwiLFxuICAgIHBhZGRpbmdUb3A6IFwiMjdweFwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgXCImIHN2ZywmIC5mYWIsJiAuZmFyLCYgLmZhbCwmIC5mYXMsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgY29sb3I6IFwiIzQ5NTA1N1wiLFxuICAgIH0sXG4gIH0sXG4gIGlucHV0OiB7XG4gICAgY29sb3I6IFwiIzQ5NTA1N1wiLFxuICAgIGhlaWdodDogXCJ1bnNldFwiLFxuICAgIFwiJiwmOjpwbGFjZWhvbGRlclwiOiB7XG4gICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICBmb250RmFtaWx5OiAnXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmJyxcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjEuNDI4NTdcIixcbiAgICAgIG9wYWNpdHk6IFwiMVwiLFxuICAgIH0sXG4gICAgXCImOjpwbGFjZWhvbGRlclwiOiB7XG4gICAgICBjb2xvcjogXCIjQUFBQUFBXCIsXG4gICAgfSxcbiAgfSxcbiAgd2hpdGVJbnB1dDoge1xuICAgIFwiJiwmOjpwbGFjZWhvbGRlclwiOiB7XG4gICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICBvcGFjaXR5OiBcIjFcIixcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tSW5wdXRTdHlsZTtcbiIsImltcG9ydCB7IGNvbnRhaW5lciwgcHJpbWFyeUNvbG9yLCBkZWZhdWx0Rm9udCB9IGZyb20gXCJzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQuanNcIjtcblxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XG4gIGJsb2NrOiB7XG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgIHBhZGRpbmc6IFwiMC45Mzc1cmVtXCIsXG4gICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICB9LFxuICBsZWZ0OiB7XG4gICAgLi4uZGVmYXVsdEZvbnQsXG4gICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICBmbG9hdDogXCJsZWZ0IWltcG9ydGFudFwiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgfSxcbiAgcmlnaHQ6IHtcbiAgICAuLi5kZWZhdWx0Rm9udCxcbiAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgIHBhZGRpbmc6IFwiMTVweCAwXCIsXG4gICAgbWFyZ2luOiBcIjBcIixcbiAgICBmbG9hdDogXCJyaWdodCFpbXBvcnRhbnRcIixcbiAgICBhOiB7XG5cbiAgICAgICAgY29sb3I6IHByaW1hcnlDb2xvcixcbiAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcblxuICAgIH1cbiAgfSxcbiAgZm9vdGVyOiB7XG4gICAgcGFkZGluZzogXCIwLjkzNzVyZW0gMFwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICB6SW5kZXg6IFwiMlwiLFxuICAgIHBvc2l0aW9uOiBcInN0YXRpY1wiLFxuICAgIGJvcmRlclRvcDogXCI0cHggc29saWQgIzA0NmVjNVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZWVlZWVlXCJcbiAgfSxcbiAgLyphOiB7XG4gICAgY29sb3I6IHByaW1hcnlDb2xvcixcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gIH0sKi9cbiAgZm9vdGVyV2hpdGVGb250OiB7XG4gICAgXCImLCY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICAvLyBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiXG4gICAgfSxcbiAgfSxcbiAgY29udGFpbmVyLFxuICBsaXN0OiB7XG4gICAgbWFyZ2luQm90dG9tOiBcIjBcIixcbiAgICBwYWRkaW5nOiBcIjBcIixcbiAgICBtYXJnaW5Ub3A6IFwiMFwiLFxuICB9LFxuICBpbmxpbmVCbG9jazoge1xuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgcGFkZGluZzogXCIwcHhcIixcbiAgICB3aWR0aDogXCJhdXRvXCIsXG4gIH0sXG4gIGljb246IHtcbiAgICB3aWR0aDogXCIxOHB4XCIsXG4gICAgaGVpZ2h0OiBcIjE4cHhcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIHRvcDogXCIzcHhcIixcbiAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBmb290ZXJTdHlsZTtcbiIsImltcG9ydCB7IGRlZmF1bHRGb250IH0gZnJvbSBcInN0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC5qc1wiO1xuXG5pbXBvcnQgdG9vbHRpcCBmcm9tIFwic3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L3Rvb2x0aXBzU3R5bGUuanNcIjtcblxuY29uc3QgaGVhZGVyTGlua3NTdHlsZSA9ICh0aGVtZSkgPT4gKHtcbiAgbGlzdDoge1xuICAgIC4uLmRlZmF1bHRGb250LFxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZ0xlZnQ6IFwiMFwiLFxuICAgIGxpc3RTdHlsZTogXCJub25lXCIsXG4gICAgcGFkZGluZ1RvcDogXCIwXCIsXG4gICAgcGFkZGluZ0JvdHRvbTogXCIwXCIsXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICB9LFxuICBsaXN0SXRlbToge1xuICAgIGZsb2F0OiBcImxlZnRcIixcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgIG1hcmdpbjogXCIwXCIsXG4gICAgcGFkZGluZzogXCIwXCIsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIFwiJjphZnRlclwiOiB7XG4gICAgICAgIHdpZHRoOiBcImNhbGMoMTAwJSAtIDMwcHgpXCIsXG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICBoZWlnaHQ6IFwiMXB4XCIsXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMTVweFwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2U1ZTVlNVwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBsaXN0SXRlbVRleHQ6IHtcbiAgICBwYWRkaW5nOiBcIjAgIWltcG9ydGFudFwiLFxuICB9LFxuICBuYXZMaW5rOiB7XG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgcGFkZGluZzogXCIwLjkzNzVyZW1cIixcbiAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjIwcHhcIixcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgbWFyZ2luOiBcIjBweFwiLFxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKVwiLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcbiAgICAgIHdpZHRoOiBcImNhbGMoMTAwJSAtIDMwcHgpXCIsXG4gICAgICBtYXJnaW5MZWZ0OiBcIjE1cHhcIixcbiAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIixcbiAgICAgIG1hcmdpblRvcDogXCI4cHhcIixcbiAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICBcIiYgPiBzcGFuOmZpcnN0LWNoaWxkXCI6IHtcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBub3RpZmljYXRpb25OYXZMaW5rOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcbiAgICAgIHRvcDogXCIwXCIsXG4gICAgICBtYXJnaW46IFwiNXB4IDE1cHhcIixcbiAgICB9LFxuICAgIGNvbG9yOiBcIiNGRkZcIixcbiAgICBwYWRkaW5nOiBcIjAuOTM3NXJlbVwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgbGluZUhlaWdodDogXCIyMHB4XCIsXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIG1hcmdpbjogXCIwcHhcIixcbiAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG4gICAgdG9wOiBcIjRweFwiLFxuICB9LFxuICByZWdpc3Rlck5hdkxpbms6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xuICAgICAgdG9wOiBcIjBcIixcbiAgICAgIG1hcmdpbjogXCI1cHggMTVweFwiLFxuICAgIH0sXG4gICAgdG9wOiBcIjNweFwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjIwcHhcIixcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgbWFyZ2luOiBcIjBweFwiLFxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcbiAgfSxcbiAgbmF2TGlua0FjdGl2ZToge1xuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXCIsXG4gIH0sXG4gIGljb25zOiB7XG4gICAgd2lkdGg6IFwiMjBweFwiLFxuICAgIGhlaWdodDogXCIyMHB4XCIsXG4gICAgbWFyZ2luUmlnaHQ6IFwiM3B4XCIsXG4gIH0sXG4gIHNvY2lhbEljb25zOiB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBmb250U2l6ZTogXCIyMHB4ICFpbXBvcnRhbnRcIixcbiAgICBtYXJnaW5SaWdodDogXCI0cHhcIixcbiAgfSxcbiAgZHJvcGRvd25MaW5rOiB7XG4gICAgXCImLCY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBwYWRkaW5nOiBcIjEwcHggMjBweFwiLFxuICAgIH0sXG4gIH0sXG4gIC4uLnRvb2x0aXAsXG4gIG1hcmdpblJpZ2h0NToge1xuICAgIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlckxpbmtzU3R5bGU7XG4iLCJpbXBvcnQge1xuICBjb250YWluZXIsXG4gIGhleFRvUkdCQWxwaGEsXG4gIGRlZmF1bHRGb250LFxuICBwcmltYXJ5Q29sb3IsXG4gIGluZm9Db2xvcixcbiAgc3VjY2Vzc0NvbG9yLFxuICB3YXJuaW5nQ29sb3IsXG4gIGRhbmdlckNvbG9yLFxuICByb3NlQ29sb3IsXG4gIHRyYW5zaXRpb24sXG4gIGJveFNoYWRvdyxcbiAgZHJhd2VyV2lkdGgsXG4gIGNvbnRhaW5lck5ldyxcbn0gZnJvbSBcInN0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC5qc1wiO1xuXG5jb25zdCBoZWFkZXJTdHlsZSA9IHtcbiAgYXBwQmFyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYm9yZGVyOiBcIjBcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMHB4XCIsXG4gICAgcGFkZGluZzogXCIwXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcbiAgICBjb2xvcjogXCIjNTU1XCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMy40OTg4NCUsMTIuMTk5NDAyJSwzMS43OTkzMTYlKVwiLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCA0cHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSlcIixcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAxNTBtcyBlYXNlIDBzXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBmbGV4RmxvdzogXCJjb2x1bW4gbm93cmFwXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgekluZGV4OiBcInVuc2V0XCIsXG4gIH0sXG4gIGFic29sdXRlOiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB6SW5kZXg6IFwiMTEwMFwiLFxuICB9LFxuICBmaXhlZDoge1xuICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgekluZGV4OiBcIjExMDBcIixcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgLi4uY29udGFpbmVyTmV3LFxuICAgIG1pbkhlaWdodDogXCI1MHB4XCIsXG4gICAgZmxleDogXCIxXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleFdyYXA6IFwibm93cmFwXCJcbiAgfSxcbiAgaGVhZGVyRGl2aWRlcjoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IFwiNXB4XCIsXG4gICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMzU4LjVkZWcsIzAwYWVlZiAuMDklLCMxMzRhODYpO1wiLFxuICAgIG1hcmdpbkxlZnQ6IFwiYXV0bztcIixcbiAgICBtYXJnaW5SaWdodDogXCJhdXRvO1wiLFxuICB9LFxuICBmbGV4OiB7XG4gICAgZmxleDogMSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICAuLi5kZWZhdWx0Rm9udCxcbiAgICBsaW5lSGVpZ2h0OiBcIjMwcHhcIixcbiAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICBwYWRkaW5nOiBcIjhweCAxNnB4XCIsXG4gICAgbGV0dGVyU3BhY2luZzogXCJ1bnNldFwiLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICB9LFxuICAgIGJhY2tncm91bmRJbWFnZTogXCJodHRwczovL215cmlhLm1hdGguYWVnZWFuLmdyL35hdHNvbC9uZXdwYWdlL3NvZnR3YXJlL2FlZ2VhbmxvZ28vc3ZnL2JvbGQtbG9nb19zZmlnYV91b2ZfYWVnZWFuX2VuLXJ2LnN2Z1wiXG4gIH0sXG4gIGFwcFJlc3BvbnNpdmU6IHtcbiAgICBtYXJnaW46IFwiMjBweCAxMHB4XCIsXG4gIH0sXG4gIHByaW1hcnk6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvcixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYm94U2hhZG93OiBgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA3cHggMTJweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgIHByaW1hcnlDb2xvcixcbiAgICAgIDAuNDZcbiAgICApfWAsXG4gIH0sXG4gIGluZm86IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGluZm9Db2xvcixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYm94U2hhZG93OiBgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA3cHggMTJweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgIGluZm9Db2xvcixcbiAgICAgIDAuNDZcbiAgICApfWAsXG4gIH0sXG4gIHN1Y2Nlc3M6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvcixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYm94U2hhZG93OiBgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA3cHggMTJweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgIHN1Y2Nlc3NDb2xvcixcbiAgICAgIDAuNDZcbiAgICApfWAsXG4gIH0sXG4gIHdhcm5pbmc6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHdhcm5pbmdDb2xvcixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYm94U2hhZG93OiBgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA3cHggMTJweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgIHdhcm5pbmdDb2xvcixcbiAgICAgIDAuNDZcbiAgICApfWAsXG4gIH0sXG4gIGRhbmdlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogZGFuZ2VyQ29sb3IsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGJveFNoYWRvdzogYDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgN3B4IDEycHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICBkYW5nZXJDb2xvcixcbiAgICAgIDAuNDZcbiAgICApfWAsXG4gIH0sXG4gIHJvc2U6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHJvc2VDb2xvcixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYm94U2hhZG93OiBgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA3cHggMTJweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgIHJvc2VDb2xvcixcbiAgICAgIDAuNDZcbiAgICApfWAsXG4gIH0sXG4gIHRyYW5zcGFyZW50OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50ICFpbXBvcnRhbnRcIixcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgIHBhZGRpbmdUb3A6IFwiMjVweFwiLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgfSxcbiAgZGFyazoge1xuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzIxMjEyMSAhaW1wb3J0YW50XCIsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDdweCAxMnB4IC01cHggcmdiYSgzMywgMzMsIDMzLCAwLjQ2KVwiLFxuICB9LFxuICB3aGl0ZToge1xuICAgIGJvcmRlcjogXCIwXCIsXG4gICAgcGFkZGluZzogXCIwLjYyNXJlbSAwXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcbiAgICBjb2xvcjogXCIjNTU1XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmYgIWltcG9ydGFudFwiLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCA0cHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSlcIixcbiAgfSxcbiAgZHJhd2VyUGFwZXI6IHtcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIGJvdHRvbTogXCIwXCIsXG4gICAgdHJhbnNpdGlvblByb3BlcnR5OiBcInRvcCwgYm90dG9tLCB3aWR0aFwiLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogXCIuMnMsIC4ycywgLjM1c1wiLFxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogXCJsaW5lYXIsIGxpbmVhciwgZWFzZVwiLFxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgICAuLi5ib3hTaGFkb3csXG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgdG9wOiBcIjBcIixcbiAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICByaWdodDogXCIwXCIsXG4gICAgbGVmdDogXCJhdXRvXCIsXG4gICAgdmlzaWJpbGl0eTogXCJ2aXNpYmxlXCIsXG4gICAgb3ZlcmZsb3dZOiBcInZpc2libGVcIixcbiAgICBib3JkZXJUb3A6IFwibm9uZVwiLFxuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgcGFkZGluZ1JpZ2h0OiBcIjBweFwiLFxuICAgIHBhZGRpbmdMZWZ0OiBcIjBcIixcbiAgICAuLi50cmFuc2l0aW9uLFxuICB9LFxuICByZXNpemVJbWcgOntcbiAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgbWF4SGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgbWFyZ2luOiBcImF1dG9cIlxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJTdHlsZTtcbiIsImltcG9ydCB7XG4gIHByaW1hcnlDb2xvcixcbiAgd2FybmluZ0NvbG9yLFxuICBkYW5nZXJDb2xvcixcbiAgc3VjY2Vzc0NvbG9yLFxuICBpbmZvQ29sb3IsXG4gIHJvc2VDb2xvcixcbiAgZ3JheUNvbG9yLFxuICB0aXRsZSxcbn0gZnJvbSBcInN0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC5qc1wiO1xuXG5jb25zdCBpbmZvU3R5bGUgPSB7XG4gIGluZm9BcmVhOiB7XG4gICAgbWF4V2lkdGg6IFwiMzYwcHhcIixcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgcGFkZGluZzogXCIwcHhcIixcbiAgfSxcbiAgaWNvbldyYXBwZXI6IHtcbiAgICBmbG9hdDogXCJsZWZ0XCIsXG4gICAgbWFyZ2luVG9wOiBcIjI0cHhcIixcbiAgICBtYXJnaW5SaWdodDogXCIxMHB4XCIsXG4gIH0sXG4gIHByaW1hcnk6IHtcbiAgICBjb2xvcjogcHJpbWFyeUNvbG9yLFxuICB9LFxuICB3YXJuaW5nOiB7XG4gICAgY29sb3I6IHdhcm5pbmdDb2xvcixcbiAgfSxcbiAgZGFuZ2VyOiB7XG4gICAgY29sb3I6IGRhbmdlckNvbG9yLFxuICB9LFxuICBzdWNjZXNzOiB7XG4gICAgY29sb3I6IHN1Y2Nlc3NDb2xvcixcbiAgfSxcbiAgaW5mbzoge1xuICAgIGNvbG9yOiBpbmZvQ29sb3IsXG4gIH0sXG4gIHJvc2U6IHtcbiAgICBjb2xvcjogcm9zZUNvbG9yLFxuICB9LFxuICBncmF5OiB7XG4gICAgY29sb3I6IGdyYXlDb2xvcixcbiAgfSxcbiAgaWNvbjoge1xuICAgIHdpZHRoOiBcIjM2cHhcIixcbiAgICBoZWlnaHQ6IFwiMzZweFwiLFxuICB9LFxuICBkZXNjcmlwdGlvbldyYXBwZXI6IHtcbiAgICBjb2xvcjogZ3JheUNvbG9yLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB9LFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBjb2xvcjogZ3JheUNvbG9yLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgIG1hcmdpblRvcDogXCIwcHhcIixcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gIH0sXG4gIGljb25XcmFwcGVyVmVydGljYWw6IHtcbiAgICBmbG9hdDogXCJub25lXCIsXG4gIH0sXG4gIGljb25WZXJ0aWNhbDoge1xuICAgIHdpZHRoOiBcIjYxcHhcIixcbiAgICBoZWlnaHQ6IFwiNjFweFwiLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5mb1N0eWxlO1xuIiwiY29uc3QgcGFyYWxsYXhTdHlsZSA9ICh0aGVtZSkgPT4gKHtcbiAgcGFyYWxsYXg6IHtcbiAgICBoZWlnaHQ6IFwiOTB2aFwiLFxuICAgIG1heEhlaWdodDogXCI2MDBweFwiLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciB0b3BcIixcbiAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgIG1hcmdpbjogXCIwXCIsXG4gICAgcGFkZGluZzogXCIwXCIsXG4gICAgYm9yZGVyOiBcIjBcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB9LFxuICBmaWx0ZXI6IHtcbiAgICBcIiY6YmVmb3JlXCI6IHtcbiAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjUpXCIsXG4gICAgfSxcbiAgICBcIiY6YWZ0ZXIsJjpiZWZvcmVcIjoge1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIHpJbmRleDogXCIxXCIsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgbGVmdDogXCIwXCIsXG4gICAgICB0b3A6IFwiMFwiLFxuICAgICAgY29udGVudDogXCInJ1wiLFxuICAgIH0sXG4gIH0sXG4gIHNtYWxsOiB7XG4gICAgaGVpZ2h0OiBcIjM4MHB4XCIsXG4gIH0sXG4gIHBhcmFsbGF4UmVzcG9uc2l2ZToge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XG4gICAgICBtaW5IZWlnaHQ6IFwiNjYwcHhcIixcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBhcmFsbGF4U3R5bGU7XG4iLCJpbXBvcnQge1xuICBkZWZhdWx0Rm9udCxcbiAgcHJpbWFyeUJveFNoYWRvdyxcbiAgaW5mb0JveFNoYWRvdyxcbiAgc3VjY2Vzc0JveFNoYWRvdyxcbiAgd2FybmluZ0JveFNoYWRvdyxcbiAgZGFuZ2VyQm94U2hhZG93LFxuICBjb250YWluZXIsXG59IGZyb20gXCJzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQuanNcIjtcblxuY29uc3Qgc25hY2tiYXJDb250ZW50U3R5bGUgPSB7XG4gIHJvb3Q6IHtcbiAgICAuLi5kZWZhdWx0Rm9udCxcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIHBhZGRpbmc6IFwiMjBweCAxNXB4XCIsXG4gICAgbGluZUhlaWdodDogXCIyMHB4XCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgY29sb3I6IFwiIzU1NTU1NVwiLFxuICAgIGJvcmRlclJhZGl1czogXCIwcHhcIixcbiAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgbWluV2lkdGg6IFwiYXV0b1wiLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAxMnB4IDIwcHggLTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4KSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpXCIsXG4gIH0sXG4gIGluZm86IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwZDNlZVwiLFxuICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAuLi5pbmZvQm94U2hhZG93LFxuICB9LFxuICBzdWNjZXNzOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM1Y2I4NjBcIixcbiAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgLi4uc3VjY2Vzc0JveFNoYWRvdyxcbiAgfSxcbiAgd2FybmluZzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZhMjFhXCIsXG4gICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgIC4uLndhcm5pbmdCb3hTaGFkb3csXG4gIH0sXG4gIGRhbmdlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjU1YTRlXCIsXG4gICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgIC4uLmRhbmdlckJveFNoYWRvdyxcbiAgfSxcbiAgcHJpbWFyeToge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjYWYyY2M1XCIsXG4gICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgIC4uLnByaW1hcnlCb3hTaGFkb3csXG4gIH0sXG4gIG1lc3NhZ2U6IHtcbiAgICBwYWRkaW5nOiBcIjBcIixcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgbWF4V2lkdGg6IFwiODklXCIsXG4gICAgXCImLCYgKlwiOiB7XG4gICAgICBsZXR0ZXJTcGFjaW5nOiBcIm5vcm1hbFwiLFxuICAgIH0sXG4gIH0sXG4gIGNsb3NlOiB7XG4gICAgd2lkdGg6IFwiMTRweFwiLFxuICAgIGhlaWdodDogXCIxNHB4XCIsXG4gIH0sXG4gIGljb25CdXR0b246IHtcbiAgICB3aWR0aDogXCIyNHB4XCIsXG4gICAgaGVpZ2h0OiBcIjI0cHhcIixcbiAgICBmbG9hdDogXCJyaWdodFwiLFxuICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgbGluZUhlaWdodDogXCIxXCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICByaWdodDogXCItNHB4XCIsXG4gICAgdG9wOiBcIjBcIixcbiAgICBwYWRkaW5nOiBcIjBcIixcbiAgfSxcbiAgaWNvbjoge1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICBmbG9hdDogXCJsZWZ0XCIsXG4gICAgbWFyZ2luUmlnaHQ6IFwiMS4wNzFyZW1cIixcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgLi4uY29udGFpbmVyLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzbmFja2JhckNvbnRlbnRTdHlsZTtcbiIsImNvbnN0IGltYWdlc1N0eWxlcyA9IHtcbiAgaW1nRmx1aWQ6IHtcbiAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgfSxcbiAgaW1nUm91bmRlZDoge1xuICAgIGJvcmRlclJhZGl1czogXCI2cHggIWltcG9ydGFudFwiLFxuICB9LFxuICBpbWdSb3VuZGVkQ2lyY2xlOiB7XG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwJSAhaW1wb3J0YW50XCIsXG4gIH0sXG4gIGltZ1JhaXNlZDoge1xuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCA1cHggMTVweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4yNCksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMilcIixcbiAgfSxcbiAgaW1nR2FsbGVyeToge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMi4xNDJyZW1cIixcbiAgfSxcbiAgaW1nQ2FyZFRvcDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBcImNhbGMoLjI1cmVtIC0gMXB4KVwiLFxuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcImNhbGMoLjI1cmVtIC0gMXB4KVwiLFxuICB9LFxuICBpbWdDYXJkQm90dG9tOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IFwiY2FsYyguMjVyZW0gLSAxcHgpXCIsXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IFwiY2FsYyguMjVyZW0gLSAxcHgpXCIsXG4gIH0sXG4gIGltZ0NhcmQ6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcImNhbGMoLjI1cmVtIC0gMXB4KVwiLFxuICB9LFxuICBpbWdDYXJkT3ZlcmxheToge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjBcIixcbiAgICByaWdodDogXCIwXCIsXG4gICAgYm90dG9tOiBcIjBcIixcbiAgICBsZWZ0OiBcIjBcIixcbiAgICBwYWRkaW5nOiBcIjEuMjVyZW1cIixcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGltYWdlc1N0eWxlcztcbiIsImltcG9ydCB7IGNvbnRhaW5lciwgY29udGFpbmVyQXV0bywgdGl0bGUgfSBmcm9tIFwic3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0LmpzXCI7XG5cbmNvbnN0IGxhbmRpbmdQYWdlU3R5bGUgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIHpJbmRleDogXCIxMlwiLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAuLi5jb250YWluZXJBdXRvLFxuICB9LFxuICB0aXRsZToge1xuICAgIC4uLnRpdGxlLFxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxuICAgIG1pbkhlaWdodDogXCIzMnB4XCIsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgfSxcbiAgc3VidGl0bGU6IHtcbiAgICBmb250U2l6ZTogXCIxLjMxM3JlbVwiLFxuICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXG4gICAgbWFyZ2luOiBcIjEwcHggYXV0byAwXCIsXG4gIH0sXG4gIG1haW46IHtcbiAgICBiYWNrZ3JvdW5kOiBcIiNGRkZGRkZcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIHpJbmRleDogXCIzXCIsXG4gIH0sXG4gIG1haW5SYWlzZWQ6IHtcbiAgICBtYXJnaW46IFwiLTYwcHggMzBweCAwcHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxuICB9LFxuICBwYWdlSGVhZGVyOiB7XG4gICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICBkaXNwbGF5OiBcImluaGVyaXRcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIG1hcmdpbjogXCIwXCIsXG4gICAgcGFkZGluZzogXCIwXCIsXG4gICAgYm9yZGVyOiBcIjBcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIFwiJjpiZWZvcmVcIjoge1xuICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDApXCIsXG4gICAgfSxcbiAgICBcIiY6YmVmb3JlLCY6YWZ0ZXJcIjoge1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIHpJbmRleDogXCIxXCIsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgbGVmdDogXCIwXCIsXG4gICAgICB0b3A6IFwiMFwiLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgIH0sXG4gICAgXCImIGZvb3RlciBsaSBhLCYgZm9vdGVyIGxpIGE6aG92ZXIsJiBmb290ZXIgbGkgYTphY3RpdmVcIjoge1xuICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIH0sXG4gICAgXCImIGZvb3RlclwiOiB7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgYm90dG9tOiBcIjBcIixcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB9LFxuICB9LFxuICBqc3M0MTMgOiB7XG4gICAgZmxleDogXCIwIDEgMCVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIlxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsYW5kaW5nUGFnZVN0eWxlO1xuIiwiaW1wb3J0IHsgdGl0bGUgfSBmcm9tIFwic3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0LmpzXCI7XG5cbmNvbnN0IHByb2R1Y3RTdHlsZSA9IHtcbiAgc2VjdGlvbjoge1xuICAgIHBhZGRpbmc6IFwiNzBweCAwXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICB9LFxuICB0aXRsZToge1xuICAgIC4uLnRpdGxlLFxuICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXG4gICAgbWFyZ2luVG9wOiBcIjMwcHhcIixcbiAgICBtaW5IZWlnaHQ6IFwiMzJweFwiLFxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBjb2xvcjogXCIjOTk5XCIsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0U3R5bGU7XG4iLCJpbXBvcnQgeyBjYXJkVGl0bGUsIHRpdGxlIH0gZnJvbSBcInN0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC5qc1wiO1xuaW1wb3J0IGltYWdlc1N0eWxlIGZyb20gXCJzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvaW1hZ2VzU3R5bGVzLmpzXCI7XG5cbmNvbnN0IHRlYW1TdHlsZSA9IHtcbiAgc2VjdGlvbjoge1xuICAgIHBhZGRpbmc6IFwiNzBweCAwXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICB9LFxuICB0aXRsZToge1xuICAgIC4uLnRpdGxlLFxuICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXG4gICAgbWFyZ2luVG9wOiBcIjMwcHhcIixcbiAgICBtaW5IZWlnaHQ6IFwiMzJweFwiLFxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgfSxcbiAgLi4uaW1hZ2VzU3R5bGUsXG4gIGl0ZW1HcmlkOiB7XG4gICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gICAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxuICB9LFxuICBjYXJkVGl0bGUsXG4gIHNtYWxsVGl0bGU6IHtcbiAgICBjb2xvcjogXCIjNmM3NTdkXCIsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgY29sb3I6IFwiIzk5OVwiLFxuICB9LFxuICBqdXN0aWZ5Q2VudGVyOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyICFpbXBvcnRhbnRcIixcbiAgfSxcbiAgc29jaWFsczoge1xuICAgIG1hcmdpblRvcDogXCIwXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIHRyYW5zZm9ybTogXCJub25lXCIsXG4gICAgbGVmdDogXCIwXCIsXG4gICAgdG9wOiBcIjBcIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiNDFweFwiLFxuICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICBjb2xvcjogXCIjOTk5XCIsXG4gIH0sXG4gIG1hcmdpbjU6IHtcbiAgICBtYXJnaW46IFwiNXB4XCIsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0ZWFtU3R5bGU7XG4iLCJpbXBvcnQgeyB0aXRsZSwgcHJpbWFyeUNvbG9yLCBkZWZhdWx0Rm9udCB9IGZyb20gXCJzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQuanNcIjtcblxuY29uc3Qgd29ya1N0eWxlID0ge1xuICBzZWN0aW9uOiB7XG4gICAgLi4uZGVmYXVsdEZvbnQsXG4gICAgcGFkZGluZzogXCI3MHB4IDBcIixcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICAuLi50aXRsZSxcbiAgICBtYXJnaW5Cb3R0b206IFwiNTBweFwiLFxuICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXG4gICAgbWluSGVpZ2h0OiBcIjMycHhcIixcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGNvbG9yOiBcIiM5OTlcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIH0sXG4gIHRleHRDZW50ZXI6IHtcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIH0sXG4gIHRleHRMZWZ0OiB7XG4gICAgY29sb3I6IFwiIzk5OVwiLFxuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gIH0sXG4gIHRleHRSaWdodDoge1xuICAgIGNvbG9yOiBcIiM5OTlcIixcbiAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcbiAgfSxcbiAgdGV4dEFyZWE6IHtcbiAgICBtYXJnaW5SaWdodDogXCIxNXB4XCIsXG4gICAgbWFyZ2luTGVmdDogXCIxNXB4XCIsXG4gIH0sXG4gIGhyTGluZToge1xuICAgIGNvbG9yOiBcIiM5OTlcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzk5OVwiLFxuICAgIGJvcmRlcldpZHRoOiBcIjFweFwiLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgd2lkdGg6IFwiMzVlbVwiLFxuICAgIGhlaWdodDogXCIxcHhcIlxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3b3JrU3R5bGU7XG4iLCJpbXBvcnQge2NvbnRhaW5lciwgcHJpbWFyeUNvbG9yLCBkZWZhdWx0Rm9udCwgdGl0bGV9IGZyb20gXCJzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQuanNcIjtcblxuY29uc3Qgc2lnbnVwUGFnZVN0eWxlID0ge1xuICBjb250YWluZXI6IHtcbiAgICAuLi5jb250YWluZXIsXG4gICAgLi4uZGVmYXVsdEZvbnQsXG4gICAgekluZGV4OiBcIjJcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIHBhZGRpbmdUb3A6IFwiMjB2aFwiLFxuICAgIGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC44NylcIixcbiAgICBwYWRkaW5nQm90dG9tOiBcIjIwMHB4XCIsXG4gIH0sXG4gIGNhcmRIaWRkZW46IHtcbiAgICBvcGFjaXR5OiBcIjBcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlM2QoMCwgLTYwcHgsIDApXCIsXG4gIH0sXG4gIHBhZ2VIZWFkZXI6IHtcbiAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgIGRpc3BsYXk6IFwiaW5oZXJpdFwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgbWFyZ2luOiBcIjBcIixcbiAgICBwYWRkaW5nOiBcIjBcIixcbiAgICBib3JkZXI6IFwiMFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgXCImOmJlZm9yZVwiOiB7XG4gICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC4xKVwiLFxuICAgIH0sXG4gICAgXCImOmJlZm9yZSwmOmFmdGVyXCI6IHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgIGxlZnQ6IFwiMFwiLFxuICAgICAgdG9wOiBcIjBcIixcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICB9LFxuICAgIFwiJiBmb290ZXIgbGkgYSwmIGZvb3RlciBsaSBhOmhvdmVyLCYgZm9vdGVyIGxpIGE6YWN0aXZlXCI6IHtcbiAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICB9LFxuICAgIFwiJiBmb290ZXJcIjoge1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIGJvdHRvbTogXCIwXCIsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgfSxcbiAgfSxcbiAgZm9ybToge1xuICAgIG1hcmdpbjogXCIwXCIsXG4gIH0sXG4gIGNhcmRIZWFkZXI6IHtcbiAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIG1hcmdpbkxlZnQ6IFwiMjBweFwiLFxuICAgIG1hcmdpblJpZ2h0OiBcIjIwcHhcIixcbiAgICBtYXJnaW5Ub3A6IFwiLTQwcHhcIixcbiAgICBwYWRkaW5nOiBcIjIwcHggMFwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIxNXB4XCIsXG4gIH0sXG4gIHNvY2lhbEljb25zOiB7XG4gICAgbWF4V2lkdGg6IFwiMjRweFwiLFxuICAgIG1hcmdpblRvcDogXCIwXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIHRyYW5zZm9ybTogXCJub25lXCIsXG4gICAgbGVmdDogXCIwXCIsXG4gICAgdG9wOiBcIjBcIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiNDFweFwiLFxuICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgfSxcbiAgZGl2aWRlcjoge1xuICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjBweFwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgfSxcbiAgY2FyZE1pZDoge1xuICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjBweFwiLFxuICAgIG1hcmdpbkxlZnQ6IFwiMjBweFwiLFxuICAgIG1hcmdpblJpZ2h0OiBcIjIwcHhcIixcbiAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICB9LFxuICBjYXJkRm9vdGVyOiB7XG4gICAgcGFkZGluZ1RvcDogXCIwcmVtXCIsXG4gICAgYm9yZGVyOiBcIjBcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyICFpbXBvcnRhbnRcIixcbiAgfSxcbiAgY2FyZEZvb3RlckxlZnQ6IHtcbiAgICBwYWRkaW5nVG9wOiBcIjByZW1cIixcbiAgICBib3JkZXI6IFwiMFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI2cHhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJsZWZ0ICFpbXBvcnRhbnRcIixcbiAgfSxcbiAgc29jaWFsTGluZToge1xuICAgIG1hcmdpblRvcDogXCIxcmVtXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IFwiMFwiLFxuICB9LFxuICBpbnB1dEljb25zQ29sb3I6IHtcbiAgICBjb2xvcjogXCIjNDk1MDU3XCIsXG4gIH0sXG4gIHRleHRMZWZ0OiB7XG4gICAgY29sb3I6IFwiIzk5OVwiLFxuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gIH0sXG4gIHRleHRSaWdodDoge1xuICAgIGNvbG9yOiBcIiM5OTlcIixcbiAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcbiAgfSxcbiAgdGV4dENlbnRlcjoge1xuICAgIGNvbG9yOiBcIiM5OTlcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIH0sXG4gIGhyTGluZToge1xuICAgIGNvbG9yOiBcIiM5OTlcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzk5OVwiLFxuICAgIGJvcmRlcldpZHRoOiBcIjFweFwiLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgd2lkdGg6IFwiMzVlbVwiLFxuICAgIGhlaWdodDogXCIxcHhcIlxuICB9LFxuICB0aXRsZToge1xuICAgIC4uLnRpdGxlLFxuICAgIG1hcmdpbkJvdHRvbTogXCI1MHB4XCIsXG4gICAgbWFyZ2luVG9wOiBcIjMwcHhcIixcbiAgICBtaW5IZWlnaHQ6IFwiMzJweFwiLFxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIH0sXG4gIE11aUNvbnRhaW5lclJvb3QgOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxuICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgICBwYWRkaW5nTGVmdDogXCIxNnB4XCIsXG4gICAgcGFkZGluZ1JpZ2h0OiBcIjE2cHhcIixcbiAgfSxcbiAganNzNDA5IDoge1xuICAgIGZsZXg6IFwiMVwiLFxuICAgIHBhZGRpbmc6IFwiMHB4IDQ4cHggMzJweFwiXG4gIH0sXG4gIGpzczQxMyA6IHtcbiAgICBmbGV4OiBcIjAgMSAwJVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNpZ251cFBhZ2VTdHlsZTtcbiIsImNvbnN0IHRvb2x0aXBzU3R5bGUgPSB7XG4gIHRvb2x0aXA6IHtcbiAgICBwYWRkaW5nOiBcIjEwcHggMTVweFwiLFxuICAgIG1pbldpZHRoOiBcIjEzMHB4XCIsXG4gICAgY29sb3I6IFwiIzU1NTU1NVwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMS43ZW1cIixcbiAgICBiYWNrZ3JvdW5kOiBcIiNGRkZGRkZcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxuICAgIG1heFdpZHRoOiBcIjIwMHB4XCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGZvbnRGYW1pbHk6ICdcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYnLFxuICAgIGZvbnRTaXplOiBcIjAuODc1ZW1cIixcbiAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICB0ZXh0U2hhZG93OiBcIm5vbmVcIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIm5vcm1hbFwiLFxuICAgIHdvcmRCcmVhazogXCJub3JtYWxcIixcbiAgICB3b3JkU3BhY2luZzogXCJub3JtYWxcIixcbiAgICB3b3JkV3JhcDogXCJub3JtYWxcIixcbiAgICB3aGl0ZVNwYWNlOiBcIm5vcm1hbFwiLFxuICAgIGxpbmVCcmVhazogXCJhdXRvXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b29sdGlwc1N0eWxlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0VtYWlsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmluZ2VycHJpbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1Blb3BsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmVyaWZpZWRVc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RlcHBlci1ob3Jpem9udGFsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=