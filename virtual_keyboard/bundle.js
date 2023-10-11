/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/georgia.ttf */ \"./src/assets/fonts/georgia.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    overflow: hidden;\\r\\n    font-family: Georgia;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n    background: linear-gradient(98.12deg, #0e0d0d -0.27%, #676768 105.9%);\\r\\n    background-size: 100%;\\r\\n}\\r\\n\\r\\n.format {\\r\\n    margin: 0 auto;\\r\\n    min-width: 1280px;\\r\\n    height: 100vh;\\r\\n    text-align: center;    \\r\\n}\\r\\n\\r\\nh1 {\\r\\n    margin: 0;\\r\\n    padding: 30px;\\r\\n    color: #fff;\\r\\n    font-size: 50px;\\r\\n}\\r\\n\\r\\np {\\r\\n    color: #fff;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n    width: 1025px;\\r\\n    height: 300px;\\r\\n    padding: 10px;\\r\\n    color: #444444;\\r\\n    font-size: 20px;\\r\\n    border: 2px solid #222222;\\r\\n    border-radius: 15px;\\r\\n    margin-bottom: 20px;\\r\\n    box-sizing: border-box;\\r\\n    resize: none;\\r\\n}\\r\\n\\r\\n.keyboard {\\r\\n    width: 1025px;\\r\\n    padding: 10px 5px;\\r\\n    margin: 0 auto;\\r\\n    background: linear-gradient(98.12deg, rgb(226, 225, 225) -0.27%, #797878 105.9%);\\r\\n    border: 2px solid #222222;\\r\\n    border-radius: 15px;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.keyboard--row {\\r\\n    height: 50px;\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.keyboard--key {\\r\\n    float: left;\\r\\n    width: 55px;\\r\\n    height: 55px;\\r\\n    line-height: 50px;\\r\\n    margin-left: 10px;\\r\\n    text-align: center;\\r\\n    color: #fff;\\r\\n    background: #888888;\\r\\n    cursor: pointer;\\r\\n    border-radius: 10px;\\r\\n    border: 1px solid #222222;\\r\\n    box-sizing: border-box;\\r\\n    font-size: 20px;\\r\\n}\\r\\n\\r\\n.keyboard--key:hover {\\r\\n    border: 1px solid #fff;\\r\\n}\\r\\n\\r\\n.key_active,\\r\\n.keyboard--key:active {\\r\\n    color: #888888;\\r\\n    background: #fff;\\r\\n}\\r\\n\\r\\n.Backspace {\\r\\n    width: 145px;\\r\\n}\\r\\n\\r\\n.Tab {\\r\\n    width: 80px;\\r\\n}\\r\\n\\r\\n.CapsLock {\\r\\n    width: 115px;\\r\\n}\\r\\n\\r\\n.Enter {\\r\\n    width: 150px;\\r\\n}\\r\\n\\r\\n.ShiftLeft {\\r\\n    width: 145px;\\r\\n}\\r\\n\\r\\n.ShiftRight {\\r\\n    width: 120px;\\r\\n}\\r\\n\\r\\n.Space {\\r\\n    width: 470px;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n    font-family: \\\"Georgia\\\";\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"truetype\\\");\\r\\n    font-style: normal;\\r\\n    font-weight: normal;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/assets/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/styles/style.css":
/*!*************************************!*\
  !*** ./src/assets/styles/style.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/assets/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/button.js":
/*!*******************************!*\
  !*** ./src/scripts/button.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nclass Button {\r\n  constructor(name) {\r\n    this.className = name;\r\n    this.caseDownRus = null;\r\n    this.caseUpRus = null;\r\n    this.shiftRus = null;\r\n    this.shiftCapsRus = null;\r\n    this.caseDownEng = null;\r\n    this.caseUpEng = null;\r\n    this.shiftEng = null;\r\n    this.shiftCapsEng = null;\r\n  }\r\n\r\n  createButton(parent, rus, eng, shrus, sheng) {\r\n    this.caseDownRus = rus;\r\n    this.caseDownEng = eng;\r\n    this.caseUpRus = rus;\r\n    this.caseUpEng = eng;\r\n    this.shiftRus = shrus;\r\n    this.shiftEng = sheng;\r\n    this.shiftCapsRus = shrus;\r\n    this.shiftCapsEng = sheng;\r\n    if (this.className.substring(0, 3) === 'Key' || this.className === 'Backquote' || this.className === 'BracketLeft' || this.className === 'BracketRight'\r\n            || this.className === 'Semicolon' || this.className === 'Quote' || this.className === 'Comma' || this.className === 'Period') {\r\n      this.caseUpRus = rus.toUpperCase();\r\n      this.caseUpEng = eng.toUpperCase();\r\n      this.shiftCapsRus = this.shiftRus.toLowerCase();\r\n      this.shiftCapsEng = this.shiftEng.toLowerCase();\r\n    }\r\n\r\n    let currLang = localStorage.getItem('language');\r\n    currLang = currLang || 'eng';\r\n\r\n    const keyboardButton = document.createElement('div');\r\n    keyboardButton.className = `keyboard--key ${this.className}`;\r\n    parent.appendChild(keyboardButton);\r\n\r\n    const btnRus = document.createElement('span');\r\n    btnRus.className = `rus${currLang === 'eng' ? ' hidden' : ''}`;\r\n    keyboardButton.appendChild(btnRus);\r\n    const btnEng = document.createElement('span');\r\n    btnEng.className = `eng${currLang === 'eng' ? '' : ' hidden'}`;\r\n    keyboardButton.appendChild(btnEng);\r\n\r\n    const caseDownRus = document.createElement('span');\r\n    caseDownRus.className = 'caseDown';\r\n    caseDownRus.innerText = rus;\r\n    btnRus.appendChild(caseDownRus);\r\n    const caseDownEng = document.createElement('span');\r\n    caseDownEng.className = 'caseDown';\r\n    caseDownEng.innerText = eng;\r\n    btnEng.appendChild(caseDownEng);\r\n\r\n    const caseUpRus = document.createElement('span');\r\n    caseUpRus.className = 'caseUp hidden';\r\n    caseUpRus.innerText = this.caseUpRus;\r\n    btnRus.appendChild(caseUpRus);\r\n    const caseUpEng = document.createElement('span');\r\n    caseUpEng.className = 'caseUp hidden';\r\n    caseUpEng.innerText = this.caseUpEng;\r\n    btnEng.appendChild(caseUpEng);\r\n\r\n    const shiftRus = document.createElement('span');\r\n    shiftRus.className = 'shift hidden';\r\n    shiftRus.innerText = this.shiftRus;\r\n    btnRus.appendChild(shiftRus);\r\n    const shiftEng = document.createElement('span');\r\n    shiftEng.className = 'shift hidden';\r\n    shiftEng.innerText = this.shiftEng;\r\n    btnEng.appendChild(shiftEng);\r\n\r\n    const shiftCapsRus = document.createElement('span');\r\n    shiftCapsRus.className = 'shiftCaps hidden';\r\n    shiftCapsRus.innerText = this.shiftCapsRus;\r\n    btnRus.appendChild(shiftCapsRus);\r\n    const shiftCapsEng = document.createElement('span');\r\n    shiftCapsEng.className = 'shiftCaps hidden';\r\n    shiftCapsEng.innerText = this.shiftCapsEng;\r\n    btnEng.appendChild(shiftCapsEng);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/button.js?");

/***/ }),

/***/ "./src/scripts/changeLanguage.js":
/*!***************************************!*\
  !*** ./src/scripts/changeLanguage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changeLanguage)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nfunction changeLanguage(code, langChange) {\r\n  const eng = document.querySelectorAll('.eng');\r\n  const rus = document.querySelectorAll('.rus');\r\n  if (code === 'ControlLeft' || code === 'AltLeft') {\r\n    // eslint-disable-next-line no-restricted-globals\r\n    langChange.add(event.code);\r\n  }\r\n\r\n  if (langChange.has('ControlLeft') && langChange.has('AltLeft')) {\r\n    let currLang = localStorage.getItem('language');\r\n    currLang = currLang || 'eng';\r\n    localStorage.setItem('language', currLang === 'eng' ? 'rus' : 'eng');\r\n    if (currLang === 'eng') {\r\n      eng.forEach((element) => element.classList.add('hidden'));\r\n      rus.forEach((element) => element.classList.remove('hidden'));\r\n    } else {\r\n      eng.forEach((element) => element.classList.remove('hidden'));\r\n      rus.forEach((element) => element.classList.add('hidden'));\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/changeLanguage.js?");

/***/ }),

/***/ "./src/scripts/cursorPosition.js":
/*!***************************************!*\
  !*** ./src/scripts/cursorPosition.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCursorPosition: () => (/* binding */ getCursorPosition),\n/* harmony export */   setCursorPosition: () => (/* binding */ setCursorPosition)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nfunction getCursorPosition(text) {\r\n  if (document.selection) {\r\n    text.focus();\r\n    const range = document.selection.createRange();\r\n    const rangelen = range.text.length;\r\n    range.moveStart('character', -text.value.length);\r\n    const start = range.text.length - rangelen;\r\n    return {\r\n      start,\r\n      end: start + rangelen,\r\n    };\r\n  }\r\n  if (text.selectionStart || text.selectionStart === '0') {\r\n    return {\r\n      start: text.selectionStart,\r\n      end: text.selectionEnd,\r\n    };\r\n  }\r\n  return {\r\n    start: 0,\r\n    end: 0,\r\n  };\r\n}\r\nfunction setCursorPosition(text, start, end) {\r\n  if (text.setSelectionRange) {\r\n    text.focus();\r\n    text.setSelectionRange(start, end);\r\n  } else if (text.createTextRange) {\r\n    const range = text.createTextRange();\r\n    range.collapse(true);\r\n    range.moveEnd('character', end);\r\n    range.moveStart('character', start);\r\n    range.select();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/cursorPosition.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/style.css */ \"./src/assets/styles/style.css\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ \"./src/scripts/page.js\");\n/* harmony import */ var _changeLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeLanguage */ \"./src/scripts/changeLanguage.js\");\n/* harmony import */ var _cursorPosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cursorPosition */ \"./src/scripts/cursorPosition.js\");\n/* eslint-disable linebreak-style */\r\n/* eslint-disable no-restricted-globals */\r\n/* eslint-disable func-names */\r\n\r\n\r\n\r\n\r\n\r\n(0,_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\nconst langChange = new Set();\r\nconst text = document.querySelector('textarea');\r\nconst keyButton = document.querySelector('.keyboard');\r\nconst caseUp = document.querySelectorAll('.caseUp');\r\nconst caseDown = document.querySelectorAll('.caseDown');\r\nconst capsLock = document.querySelector('.CapsLock');\r\nconst shift = document.querySelectorAll('.shift');\r\nconst shiftCaps = document.querySelectorAll('.shiftCaps');\r\nconst shiftLeft = document.querySelector('.ShiftLeft');\r\nconst shiftRight = document.querySelector('.ShiftRight');\r\n\r\nfunction hideAllSpans() {\r\n  caseDown.forEach((element) => element.classList.add('hidden'));\r\n  caseUp.forEach((element) => element.classList.add('hidden'));\r\n  shift.forEach((element) => element.classList.add('hidden'));\r\n  shiftCaps.forEach((element) => element.classList.add('hidden'));\r\n}\r\n\r\ndocument.addEventListener('keydown', (event) => {\r\n  const kd = document.querySelector(`.${event.code}`);\r\n\r\n  (0,_changeLanguage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event.code, langChange);\r\n\r\n  let newStr = '';\r\n  if (event.code === 'Tab') {\r\n    newStr = '\\t';\r\n    event.preventDefault();\r\n  } else if (event.code === 'ArrowUp') {\r\n    newStr = '▲';\r\n    event.preventDefault();\r\n  } else if (event.code === 'ArrowDown') {\r\n    newStr = '▼';\r\n    event.preventDefault();\r\n  } else if (event.code === 'ArrowLeft') {\r\n    newStr = '◄';\r\n    event.preventDefault();\r\n  } else if (event.code === 'ArrowRight') {\r\n    newStr = '►';\r\n    event.preventDefault();\r\n  }\r\n  if (newStr !== '') {\r\n    const cursor = (0,_cursorPosition__WEBPACK_IMPORTED_MODULE_3__.getCursorPosition)(text);\r\n    text.value = text.value.substring(0, cursor.end) + newStr + text.value.substring(cursor.end);\r\n    (0,_cursorPosition__WEBPACK_IMPORTED_MODULE_3__.setCursorPosition)(text, cursor.end + 1, cursor.end + 1);\r\n  }\r\n  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {\r\n    hideAllSpans();\r\n    if (capsLock.classList.contains('key_active')) {\r\n      shiftCaps.forEach((element) => element.classList.remove('hidden'));\r\n    } else {\r\n      shift.forEach((element) => element.classList.remove('hidden'));\r\n    }\r\n  }\r\n  if (event.code === 'CapsLock') {\r\n    hideAllSpans();\r\n    if (!capsLock.classList.contains('key_active')) {\r\n      capsLock.classList.add('key_active');\r\n      if (shiftLeft.classList.contains('key_active') || shiftRight.classList.contains('key_active')) {\r\n        shiftCaps.forEach((element) => element.classList.remove('hidden'));\r\n      } else {\r\n        caseUp.forEach((element) => element.classList.remove('hidden'));\r\n      }\r\n    } else {\r\n      capsLock.classList.remove('key_active');\r\n      if (shiftLeft.classList.contains('key_active') || shiftRight.classList.contains('key_active')) {\r\n        shift.forEach((element) => element.classList.remove('hidden'));\r\n      } else {\r\n        caseDown.forEach((element) => element.classList.remove('hidden'));\r\n      }\r\n    }\r\n  } else if (kd && kd.classList) {\r\n    kd.classList.add('key_active');\r\n  }\r\n});\r\n\r\ndocument.addEventListener('keyup', (event) => {\r\n  const kd = document.querySelector(`.${event.code}`);\r\n  if (kd && kd.classList && event.code !== 'CapsLock') {\r\n    kd.classList.remove('key_active');\r\n  }\r\n  langChange.clear();\r\n  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {\r\n    hideAllSpans();\r\n    if (capsLock.classList.contains('key_active')) {\r\n      caseUp.forEach((element) => element.classList.remove('hidden'));\r\n    } else {\r\n      caseDown.forEach((element) => element.classList.remove('hidden'));\r\n    }\r\n  }\r\n});\r\n\r\nkeyButton.onclick = function () {\r\n  let el = event.target;\r\n  while (el.tagName !== 'DIV') {\r\n    el = el.parentElement;\r\n  }\r\n  const classes = el.classList;\r\n  if (classes[0] && classes[0] === 'keyboard--key') {\r\n    let newStr = '';\r\n    if (classes[1] === 'Space') {\r\n      newStr += ' ';\r\n    } else if (classes[1] === 'Backspace') {\r\n      const cursor = (0,_cursorPosition__WEBPACK_IMPORTED_MODULE_3__.getCursorPosition)(text);\r\n      const str = text.value;\r\n      if (cursor.start === cursor.end) {\r\n        text.value = str.substring(0, cursor.end - 1) + str.substring(cursor.end);\r\n        (0,_cursorPosition__WEBPACK_IMPORTED_MODULE_3__.setCursorPosition)(text, cursor.start - 1, cursor.start - 1);\r\n      } else {\r\n        text.value = str.substring(0, cursor.start) + str.substring(cursor.end);\r\n        (0,_cursorPosition__WEBPACK_IMPORTED_MODULE_3__.setCursorPosition)(text, cursor.start, cursor.start);\r\n      }\r\n    } else if (classes[1] === 'Delete') {\r\n      const cursor = (0,_cursorPosition__WEBPACK_IMPORTED_MODULE_3__.getCursorPosition)(text);\r\n      const str = text.value;\r\n      if (cursor.start === cursor.end) {\r\n        text.value = str.substring(0, cursor.end) + str.substring(cursor.end + 1);\r\n      } else {\r\n        text.value = str.substring(0, cursor.start) + str.substring(cursor.end);\r\n      }\r\n      (0,_cursorPosition__WEBPACK_IMPORTED_MODULE_3__.setCursorPosition)(text, cursor.start, cursor.start);\r\n    } else if (classes[1] === 'Tab') {\r\n      newStr += '\\t';\r\n    } else if (classes[1] === 'Enter') {\r\n      newStr += '\\n';\r\n    } else if (classes[1] === 'MetaLeft') {\r\n      newStr += '';\r\n    } else if (classes[1] === 'CapsLock') {\r\n      hideAllSpans();\r\n      if (!capsLock.classList.contains('key_active')) {\r\n        capsLock.classList.add('key_active');\r\n        if (shiftLeft.classList.contains('key_active') || shiftRight.classList.contains('key_active')) {\r\n          shiftCaps.forEach((element) => element.classList.remove('hidden'));\r\n        } else {\r\n          caseUp.forEach((element) => element.classList.remove('hidden'));\r\n        }\r\n      } else {\r\n        capsLock.classList.remove('key_active');\r\n        if (shiftLeft.classList.contains('key_active') || shiftRight.classList.contains('key_active')) {\r\n          shift.forEach((element) => element.classList.remove('hidden'));\r\n        } else {\r\n          caseDown.forEach((element) => element.classList.remove('hidden'));\r\n        }\r\n      }\r\n    } else if (classes[1] === 'ShiftLeft' || classes[1] === 'ShiftRight' || classes[1] === 'ControlLeft'\r\n            || classes[1] === 'ControlRight' || classes[1] === 'AltLeft' || classes[1] === 'AltRight') {\r\n      newStr += '';\r\n    } else {\r\n      newStr += event.target.innerText;\r\n    }\r\n    if (newStr !== '') {\r\n      const cursor = (0,_cursorPosition__WEBPACK_IMPORTED_MODULE_3__.getCursorPosition)(text);\r\n      text.value = text.value.substring(0, cursor.end) + newStr + text.value.substring(cursor.end);\r\n      (0,_cursorPosition__WEBPACK_IMPORTED_MODULE_3__.setCursorPosition)(text, cursor.end + 1, cursor.end + 1);\r\n      text.focus();\r\n    }\r\n  }\r\n};\r\n\r\nkeyButton.onmousedown = function () {\r\n  let el = event.target;\r\n  while (el.tagName !== 'DIV') {\r\n    el = el.parentElement;\r\n  }\r\n  const classes = el.classList;\r\n  if (classes[0] && classes[0] === 'keyboard--key') {\r\n    if (classes[1] === 'ShiftLeft' || classes[1] === 'ShiftRight') {\r\n      hideAllSpans();\r\n      el.classList.add('key_active');\r\n      if (capsLock.classList.contains('key_active')) {\r\n        shiftCaps.forEach((element) => element.classList.remove('hidden'));\r\n      } else {\r\n        shift.forEach((element) => element.classList.remove('hidden'));\r\n      }\r\n    }\r\n  }\r\n  text.focus();\r\n};\r\n\r\nkeyButton.onmouseup = function () {\r\n  let el = event.target;\r\n  while (el.tagName !== 'DIV') {\r\n    el = el.parentElement;\r\n  }\r\n  const classes = el.classList;\r\n  if (classes[0] && classes[0] === 'keyboard--key') {\r\n    if (classes[1] === 'ShiftLeft' || classes[1] === 'ShiftRight') {\r\n      hideAllSpans();\r\n      el.classList.remove('key_active');\r\n      if (capsLock.classList.contains('key_active')) {\r\n        caseUp.forEach((element) => element.classList.remove('hidden'));\r\n      } else {\r\n        caseDown.forEach((element) => element.classList.remove('hidden'));\r\n      }\r\n    }\r\n  }\r\n  text.focus();\r\n};\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/keyboard.js":
/*!*********************************!*\
  !*** ./src/scripts/keyboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createKeyboard)\n/* harmony export */ });\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ \"./src/scripts/button.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\nfunction createKeyboard(parent) {\r\n  const keyboardDiv = document.createElement('div');\r\n  keyboardDiv.className = 'keyboard';\r\n  parent.appendChild(keyboardDiv);\r\n\r\n  const keyboardRow0 = document.createElement('div');\r\n  keyboardRow0.className = 'keyboard--row';\r\n  keyboardDiv.appendChild(keyboardRow0);\r\n\r\n  const Backquote = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Backquote');\r\n  Backquote.createButton(keyboardRow0, 'ё', '`', 'Ё', '~');\r\n\r\n  const Digit1 = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit1');\r\n  Digit1.createButton(keyboardRow0, '1', '1', '!', '!');\r\n\r\n  const Digit2 = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit2');\r\n  Digit2.createButton(keyboardRow0, '2', '2', '\"', '@');\r\n\r\n  const Digit3 = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit3');\r\n  Digit3.createButton(keyboardRow0, '3', '3', '№', '#');\r\n\r\n  const Digit4 = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit4');\r\n  Digit4.createButton(keyboardRow0, '4', '4', ';', '$');\r\n\r\n  const Digit5 = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit5');\r\n  Digit5.createButton(keyboardRow0, '5', '5', '%', '%');\r\n\r\n  const Digit6 = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit6');\r\n  Digit6.createButton(keyboardRow0, '6', '6', ':', '^');\r\n\r\n  const Digit7 = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit7');\r\n  Digit7.createButton(keyboardRow0, '7', '7', '?', '&');\r\n\r\n  const Digit8 = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit8');\r\n  Digit8.createButton(keyboardRow0, '8', '8', '*', '*');\r\n\r\n  const Digit9 = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit9');\r\n  Digit9.createButton(keyboardRow0, '9', '9', '(', '(');\r\n\r\n  const Digit0 = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit0');\r\n  Digit0.createButton(keyboardRow0, '0', '0', ')', ')');\r\n\r\n  const Minus = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Minus');\r\n  Minus.createButton(keyboardRow0, '-', '-', '_', '_');\r\n\r\n  const Equal = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Equal');\r\n  Equal.createButton(keyboardRow0, '=', '=', '+', '+');\r\n\r\n  const Backspace = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Backspace');\r\n  Backspace.createButton(keyboardRow0, 'backspace', 'backspace', 'backspace', 'backspace');\r\n\r\n  const keyboardRow1 = document.createElement('div');\r\n  keyboardRow1.className = 'keyboard--row';\r\n  keyboardDiv.appendChild(keyboardRow1);\r\n\r\n  const Tab = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Tab');\r\n  Tab.createButton(keyboardRow1, 'tab', 'tab', 'tab', 'tab');\r\n\r\n  const KeyQ = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyQ');\r\n  KeyQ.createButton(keyboardRow1, 'й', 'q', 'Й', 'Q');\r\n\r\n  const KeyW = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyW');\r\n  KeyW.createButton(keyboardRow1, 'ц', 'w', 'Ц', 'W');\r\n\r\n  const KeyE = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyE');\r\n  KeyE.createButton(keyboardRow1, 'у', 'e', 'У', 'E');\r\n\r\n  const KeyR = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyR');\r\n  KeyR.createButton(keyboardRow1, 'к', 'r', 'К', 'R');\r\n\r\n  const KeyT = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyT');\r\n  KeyT.createButton(keyboardRow1, 'е', 't', 'Е', 'T');\r\n\r\n  const KeyY = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyY');\r\n  KeyY.createButton(keyboardRow1, 'н', 'y', 'Н', 'Y');\r\n\r\n  const KeyU = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyU');\r\n  KeyU.createButton(keyboardRow1, 'г', 'u', 'Г', 'U');\r\n\r\n  const KeyI = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyI');\r\n  KeyI.createButton(keyboardRow1, 'ш', 'i', 'Ш', 'I');\r\n\r\n  const KeyO = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyO');\r\n  KeyO.createButton(keyboardRow1, 'щ', 'o', 'Щ', 'O');\r\n\r\n  const KeyP = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyP');\r\n  KeyP.createButton(keyboardRow1, 'з', 'p', 'З', 'P');\r\n\r\n  const BracketLeft = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('BracketLeft');\r\n  BracketLeft.createButton(keyboardRow1, 'х', '[', 'Х', '{');\r\n\r\n  const BracketRight = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('BracketRight');\r\n  BracketRight.createButton(keyboardRow1, 'ъ', ']', 'Ъ', '}');\r\n\r\n  const Backslash = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Backslash');\r\n  Backslash.createButton(keyboardRow1, '\\\\', '\\\\', '/', '|');\r\n\r\n  const Delete = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Delete');\r\n  Delete.createButton(keyboardRow1, 'del', 'del', 'del', 'del');\r\n\r\n  const keyboardRow2 = document.createElement('div');\r\n  keyboardRow2.className = 'keyboard--row';\r\n  keyboardDiv.appendChild(keyboardRow2);\r\n\r\n  const CapsLock = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('CapsLock');\r\n  CapsLock.createButton(keyboardRow2, 'caps lock', 'caps lock', 'caps lock', 'caps lock');\r\n\r\n  const KeyA = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyA');\r\n  KeyA.createButton(keyboardRow2, 'ф', 'a', 'Ф', 'A');\r\n\r\n  const KeyS = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyS');\r\n  KeyS.createButton(keyboardRow2, 'ы', 's', 'Ы', 'S');\r\n\r\n  const KeyD = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyD');\r\n  KeyD.createButton(keyboardRow2, 'в', 'd', 'В', 'D');\r\n\r\n  const KeyF = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyF');\r\n  KeyF.createButton(keyboardRow2, 'а', 'f', 'А', 'F');\r\n\r\n  const KeyG = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyG');\r\n  KeyG.createButton(keyboardRow2, 'п', 'g', 'П', 'G');\r\n\r\n  const KeyH = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyH');\r\n  KeyH.createButton(keyboardRow2, 'р', 'h', 'Р', 'H');\r\n\r\n  const KeyJ = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyJ');\r\n  KeyJ.createButton(keyboardRow2, 'о', 'j', 'О', 'J');\r\n\r\n  const KeyK = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyK');\r\n  KeyK.createButton(keyboardRow2, 'л', 'k', 'Л', 'K');\r\n\r\n  const KeyL = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyL');\r\n  KeyL.createButton(keyboardRow2, 'д', 'l', 'Д', 'L');\r\n\r\n  const Semicolon = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Semicolon');\r\n  Semicolon.createButton(keyboardRow2, 'ж', ';', 'Ж', ':');\r\n\r\n  const Quote = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Quote');\r\n  Quote.createButton(keyboardRow2, 'э', '\\'', 'Э', '\"');\r\n\r\n  const Enter = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Enter');\r\n  Enter.createButton(keyboardRow2, 'enter', 'enter', 'enter', 'enter');\r\n\r\n  const keyboardRow3 = document.createElement('div');\r\n  keyboardRow3.className = 'keyboard--row';\r\n  keyboardDiv.appendChild(keyboardRow3);\r\n\r\n  const ShiftLeft = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ShiftLeft');\r\n  ShiftLeft.createButton(keyboardRow3, 'shift', 'shift', 'shift', 'shift');\r\n\r\n  const KeyZ = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyZ');\r\n  KeyZ.createButton(keyboardRow3, 'я', 'z', 'Я', 'Z');\r\n\r\n  const KeyX = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyX');\r\n  KeyX.createButton(keyboardRow3, 'ч', 'x', 'Ч', 'X');\r\n\r\n  const KeyC = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyC');\r\n  KeyC.createButton(keyboardRow3, 'с', 'c', 'С', 'C');\r\n\r\n  const KeyV = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyV');\r\n  KeyV.createButton(keyboardRow3, 'м', 'v', 'М', 'V');\r\n\r\n  const KeyB = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyB');\r\n  KeyB.createButton(keyboardRow3, 'и', 'b', 'И', 'B');\r\n\r\n  const KeyN = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyN');\r\n  KeyN.createButton(keyboardRow3, 'т', 'n', 'Т', 'N');\r\n\r\n  const KeyM = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyM');\r\n  KeyM.createButton(keyboardRow3, 'ь', 'm', 'Ь', 'M');\r\n\r\n  const Comma = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Comma');\r\n  Comma.createButton(keyboardRow3, 'б', ',', 'Б', '<');\r\n\r\n  const Period = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Period');\r\n  Period.createButton(keyboardRow3, 'ю', '.', 'Ю', '>');\r\n\r\n  const Slash = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Slash');\r\n  Slash.createButton(keyboardRow3, '.', '/', ',', '?');\r\n\r\n  const ArrowUp = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ArrowUp');\r\n  ArrowUp.createButton(keyboardRow3, '▲', '▲', '▲', '▲');\r\n\r\n  const ShiftRight = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ShiftRight');\r\n  ShiftRight.createButton(keyboardRow3, 'shift', 'shift', 'shift', 'shift');\r\n\r\n  const keyboardRow4 = document.createElement('div');\r\n  keyboardRow4.className = 'keyboard--row';\r\n  keyboardDiv.appendChild(keyboardRow4);\r\n\r\n  const ControlLeft = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ControlLeft');\r\n  ControlLeft.createButton(keyboardRow4, 'ctrl', 'ctrl', 'ctrl', 'ctrl');\r\n\r\n  const MetaLeft = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('MetaLeft');\r\n  MetaLeft.createButton(keyboardRow4, 'win', 'win', 'win', 'win');\r\n\r\n  const AltLeft = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('AltLeft');\r\n  AltLeft.createButton(keyboardRow4, 'alt', 'alt', 'alt', 'alt');\r\n\r\n  const Space = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Space');\r\n  Space.createButton(keyboardRow4, '', '', '', '');\r\n\r\n  const AltRight = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('AltRight');\r\n  AltRight.createButton(keyboardRow4, 'аlt', 'alt', 'alt', 'alt');\r\n\r\n  const ArrowLeft = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ArrowLeft');\r\n  ArrowLeft.createButton(keyboardRow4, '◄', '◄', '◄', '◄');\r\n\r\n  const ArrowDown = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ArrowDown');\r\n  ArrowDown.createButton(keyboardRow4, '▼', '▼', '▼', '▼');\r\n\r\n  const ArrowRight = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ArrowRight');\r\n  ArrowRight.createButton(keyboardRow4, '►', '►', '►', '►');\r\n\r\n  const ControlRight = new _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ControlRight');\r\n  ControlRight.createButton(keyboardRow4, 'ctrl', 'ctrl', 'ctrl', 'ctrl');\r\n}\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/keyboard.js?");

/***/ }),

/***/ "./src/scripts/page.js":
/*!*****************************!*\
  !*** ./src/scripts/page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPage)\n/* harmony export */ });\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard */ \"./src/scripts/keyboard.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\nfunction createPage() {\r\n  const body = document.querySelector('body');\r\n\r\n  const wrapper = document.createElement('div');\r\n  wrapper.className = 'wrapper';\r\n  body.appendChild(wrapper);\r\n\r\n  const formatDiv = document.createElement('div');\r\n  formatDiv.className = 'format';\r\n  wrapper.appendChild(formatDiv);\r\n\r\n  const h1 = document.createElement('h1');\r\n  h1.innerText = 'RSS Virtual keyboard';\r\n  formatDiv.appendChild(h1);\r\n\r\n  const textarea = document.createElement('textarea');\r\n  formatDiv.appendChild(textarea);\r\n\r\n  (0,_keyboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(formatDiv);\r\n\r\n  const langP = document.createElement('p');\r\n  langP.innerText = 'Language change: left ctrl + left alt';\r\n  formatDiv.appendChild(langP);\r\n\r\n  const descrP = document.createElement('p');\r\n  descrP.innerText = 'OS Windows';\r\n  formatDiv.appendChild(descrP);\r\n}\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/page.js?");

/***/ }),

/***/ "./src/assets/fonts/georgia.ttf":
/*!**************************************!*\
  !*** ./src/assets/fonts/georgia.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7eb0e3cec9d41a50efd7.ttf\";\n\n//# sourceURL=webpack://virtual-keyboard/./src/assets/fonts/georgia.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;