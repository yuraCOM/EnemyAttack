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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/images/startFon.png */ \"./src/images/startFon.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body,\r\nhtml {\r\n  background-color: rgb(133, 74, 188);\r\n  /* display: flex; */\r\n  /* flex-direction: column; */\r\n  /* align-items: center; */\r\n  /* justify-content: center; */\r\n  /* height: 100vh; */\r\n  width: 100vw;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nbutton {\r\n  margin: 10px;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n}\r\nbutton:hover {\r\n  background-color: chartreuse;\r\n}\r\n\r\n#info {\r\n  padding: 15px;\r\n  font-size: 20px;\r\n  display: none;\r\n  height: 500px;\r\n  overflow-y: scroll;\r\n  /* background-color: rgb(229, 18, 151); */\r\n  margin: 0 auto;\r\n  border-bottom: 1px white solid;\r\n}\r\n\r\n#canvas1 {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  cursor: all-scroll;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  height: 500px;\r\n}\r\n\r\n#startBtn {\r\n  user-select: none;\r\n}\r\n#canvas1,\r\n#pauseBtn,\r\n#restoreBtn,\r\n#muteBtn {\r\n  /* display: none; */\r\n  user-select: none;\r\n}\r\n\r\n.control {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 15px;\r\n  /* margin: 15px; */\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://game03spaceenemywebpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://game03spaceenemywebpack/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://game03spaceenemywebpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://game03spaceenemywebpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://game03spaceenemywebpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://game03spaceenemywebpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://game03spaceenemywebpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://game03spaceenemywebpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://game03spaceenemywebpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Anglers.js":
/*!************************!*\
  !*** ./src/Anglers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Angler01: () => (/* binding */ Angler01),\n/* harmony export */   Angler02: () => (/* binding */ Angler02),\n/* harmony export */   LuckyFish: () => (/* binding */ LuckyFish)\n/* harmony export */ });\n/* harmony import */ var _constEnemiesImgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constEnemiesImgs */ \"./src/constEnemiesImgs.js\");\n/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy */ \"./src/Enemy.js\");\n\r\n\r\n\r\nclass Angler01 extends _Enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n  constructor(game) {\r\n    super(game);\r\n    this.width = 228;\r\n    this.height = 169;\r\n    this.y = Math.random() * (this.game.height * 0.95 - this.height);\r\n    this.image = _constEnemiesImgs__WEBPACK_IMPORTED_MODULE_0__.angler01;\r\n    this.frameY = Math.floor(Math.random() * 3);\r\n    this.lives = 2;\r\n    this.score = this.lives;\r\n  }\r\n}\r\n\r\nclass Angler02 extends _Enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n  constructor(game) {\r\n    super(game);\r\n    this.width = 213;\r\n    this.height = 165;\r\n    this.y = Math.random() * (this.game.height * 0.95 - this.height);\r\n    this.image = _constEnemiesImgs__WEBPACK_IMPORTED_MODULE_0__.angler02;\r\n    this.frameY = Math.floor(Math.random() * 2);\r\n    this.lives = 3;\r\n    this.score = this.lives;\r\n  }\r\n}\r\n\r\nclass LuckyFish extends _Enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n  constructor(game) {\r\n    super(game);\r\n    this.width = 99;\r\n    this.height = 95;\r\n    this.y = Math.random() * (this.game.height * 0.95 - this.height);\r\n    this.image = _constEnemiesImgs__WEBPACK_IMPORTED_MODULE_0__.luckyFish;\r\n    this.frameY = Math.floor(Math.random() * 2);\r\n    this.lives = 5;\r\n    this.score = 15;\r\n    this.type = \"lucky\";\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/Anglers.js?");

/***/ }),

/***/ "./src/Background.js":
/*!***************************!*\
  !*** ./src/Background.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constLayers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constLayers */ \"./src/constLayers.js\");\n\r\n\r\nclass Background {\r\n  constructor(game) {\r\n    this.game = game;\r\n    this.layer4 = (0,_constLayers__WEBPACK_IMPORTED_MODULE_0__.getLayes04)(this.game);\r\n    this.layers = (0,_constLayers__WEBPACK_IMPORTED_MODULE_0__.getLayesArr)(this.game);\r\n  }\r\n  update() {\r\n    this.layers.forEach((layer) => layer.update());\r\n  }\r\n  draw(contex) {\r\n    this.layers.forEach((layer) => layer.draw(contex));\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Background);\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/Background.js?");

/***/ }),

/***/ "./src/Enemy.js":
/*!**********************!*\
  !*** ./src/Enemy.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ \"./src/random.js\");\n\r\n\r\nclass Enemy {\r\n  constructor(game) {\r\n    this.game = game;\r\n    this.x = this.game.width;\r\n    this.y = 0;\r\n    this.width = undefined;\r\n    this.height = undefined;\r\n    this.speedX = Math.random() * -1.9 - 0.9;\r\n    // this.speedX = Math.random()  -1.9 - 0.9;\r\n    this.markedForDelEnemy = false;\r\n    this.image = undefined;\r\n    this.frameX = 0;\r\n    this.frameY = 0;\r\n    this.maxFrame = 37;\r\n    this.lives = undefined;\r\n    this.id = (0,_random__WEBPACK_IMPORTED_MODULE_0__.randomN)();\r\n  }\r\n  update() {\r\n    this.x += this.speedX - this.game.speedGame;\r\n\r\n    if (this.x + this.width < 0) this.markedForDelEnemy = true;\r\n    //sprite animation\r\n    this.frameX < this.maxFrame ? this.frameX++ : (this.frameX = 0);\r\n  }\r\n  draw(contex) {\r\n    if (this.game.debugMode)\r\n      contex.strokeRect(this.x, this.y, this.width * 0.9, this.height * 0.9);\r\n    contex.drawImage(\r\n      this.image,\r\n      this.frameX * this.width,\r\n      this.frameY * this.height,\r\n      this.width,\r\n      this.height,\r\n      this.x,\r\n      this.y,\r\n      this.width * 0.9,\r\n      this.height * 0.9\r\n    );\r\n    contex.font = \"20px Helvetica\";\r\n    if (this.game.debugMode) {\r\n      contex.fillText(this.lives, this.x, this.y);\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Enemy);\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/Enemy.js?");

/***/ }),

/***/ "./src/Explosion.js":
/*!**************************!*\
  !*** ./src/Explosion.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FireExplosion: () => (/* binding */ FireExplosion),\n/* harmony export */   SmokeExplosion: () => (/* binding */ SmokeExplosion)\n/* harmony export */ });\n/* harmony import */ var _images_smokeExplosion_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/smokeExplosion.png */ \"./src/images/smokeExplosion.png\");\n/* harmony import */ var _images_fireExplosion_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/fireExplosion.png */ \"./src/images/fireExplosion.png\");\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio */ \"./src/audio.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ \"./src/index.js\");\n// @ts-ignore\r\n\r\n\r\n// @ts-ignore\r\n\r\n\r\n\r\n\r\nlet smoke = new Image();\r\nsmoke.src = _images_smokeExplosion_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\nlet fire = new Image();\r\nfire.src = _images_fireExplosion_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\nclass Explosion {\r\n  constructor(game, x, y) {\r\n    this.game = game;\r\n    this.x = 20;\r\n    this.y = 100;\r\n    this.frameX = 0;\r\n    this.spriteWidth = 200;\r\n    this.spriteHeight = 200;\r\n    this.width = this.spriteWidth;\r\n    this.height = this.spriteHeight;\r\n    this.x = x - this.width * 0.5;\r\n    this.y = y - this.height * 0.5;\r\n    this.fps = 30;\r\n    this.timer = 0;\r\n    this.interval = 1000 / this.fps;\r\n    this.markForDelExplos = false;\r\n    this.image = undefined;\r\n    this.maxFrame = 8;\r\n    this.boom =\r\n      _audio__WEBPACK_IMPORTED_MODULE_2__.soundsExplosArr[Math.floor(Math.random() * _audio__WEBPACK_IMPORTED_MODULE_2__.soundsExplosArr.length)];\r\n  }\r\n  update(deltaTime) {\r\n    this.x -= this.game.speedGame;\r\n    if (this.timer > this.interval) {\r\n      this.frameX++;\r\n      this.timer = 0;\r\n    } else {\r\n      this.timer += deltaTime;\r\n    }\r\n    if (this.frameX > this.maxFrame) this.markForDelExplos = true;\r\n  }\r\n  draw(contex) {\r\n    contex.drawImage(\r\n      this.image,\r\n      this.frameX * this.spriteWidth,\r\n      0,\r\n      this.spriteWidth,\r\n      this.height,\r\n      this.x,\r\n      this.y,\r\n      this.width,\r\n      this.height\r\n    );\r\n  }\r\n  playBoom() {\r\n    if (!___WEBPACK_IMPORTED_MODULE_3__.muted) {\r\n      this.boom.volume = 0.2;\r\n      this.boom.currentTime = 0;\r\n      this.boom.play();\r\n    }\r\n  }\r\n}\r\n\r\nclass SmokeExplosion extends Explosion {\r\n  constructor(game, x, y) {\r\n    super(game, x, y);\r\n    this.image = smoke;\r\n  }\r\n}\r\n\r\nclass FireExplosion extends Explosion {\r\n  constructor(game, x, y) {\r\n    super(game, x, y);\r\n    this.image = fire;\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/Explosion.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Anglers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Anglers */ \"./src/Anglers.js\");\n/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Background */ \"./src/Background.js\");\n/* harmony import */ var _Explosion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Explosion */ \"./src/Explosion.js\");\n/* harmony import */ var _HiveWhile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HiveWhile */ \"./src/HiveWhile.js\");\n/* harmony import */ var _InputHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputHandler */ \"./src/InputHandler.js\");\n/* harmony import */ var _Particles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Particles */ \"./src/Particles.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _SpaceShip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SpaceShip */ \"./src/SpaceShip.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _Yoda__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Yoda */ \"./src/Yoda.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Game {\r\n  constructor(width, height) {\r\n    this.width = width;\r\n    this.height = height;\r\n    this.background = new _Background__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\r\n    this.player = new _Player__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this);\r\n    this.input = new _InputHandler__WEBPACK_IMPORTED_MODULE_4__.InputHandler(this);\r\n    this.ui = new _UI__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this);\r\n    this.keys = [];\r\n    this.mouseY = undefined;\r\n    this.enemies = [];\r\n    this.particles = []; // детали отваливаются\r\n    this.explosions = [];\r\n    this.enemyTimer = 0;\r\n    this.enemyInterval = 2000; ///1000\r\n    this.ammo = 50;\r\n    this.maxAmmo = 200;\r\n    this.ammoTimer = 0;\r\n    this.ammoInterval = 500;\r\n    this.gameOver = false;\r\n    this.gameScore = 0;\r\n    this.winningScore = 10;\r\n    this.speedGame = 1;\r\n    this.debugMode = false;\r\n    this.killArr = [];\r\n    this.megaLazer = 0;\r\n  }\r\n\r\n  update(deltaTime) {\r\n    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDelEnemy);\r\n    this.background.update();\r\n    this.background.layer4.update();\r\n    this.ui.update();\r\n    this.player.update(deltaTime);\r\n\r\n    //ammo\r\n    if (this.ammoTimer > this.ammoInterval) {\r\n      if (this.ammo < this.maxAmmo) {\r\n        this.ammo++;\r\n      }\r\n      this.ammoTimer = 0;\r\n    } else {\r\n      this.ammoTimer += deltaTime;\r\n    }\r\n\r\n    //partcles\r\n    this.particles.forEach((particle) => particle.update());\r\n    this.particles = this.particles.filter(\r\n      (particle) => particle.markerForDelGears !== true\r\n    );\r\n\r\n    // explosions\r\n\r\n    this.explosions.forEach((explosion) => explosion.update(deltaTime));\r\n    this.explosions = this.explosions.filter(\r\n      (explosion) => !explosion.markerForDelGears\r\n    );\r\n    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDelEnemy);\r\n\r\n    //enemies\r\n    this.enemies.forEach((enemy) => {\r\n      this.enemies = this.enemies.filter((enemy) => !enemy.markedForDelEnemy);\r\n      enemy.update();\r\n      this.enemies = this.enemies.filter((enemy) => !enemy.markedForDelEnemy);\r\n\r\n      //\r\n      if (enemy.markedForDelEnemy === \"true\") {\r\n        console.log(enemy);\r\n      }\r\n      if (this.checkCollision(this.player, enemy)) {\r\n        this.player.playSoundDamagePlayer();\r\n        enemy.markedForDelEnemy = true;\r\n        this.addExplosion(enemy);\r\n        (0,_Particles__WEBPACK_IMPORTED_MODULE_5__.getGears)(this.particles, this, 2, enemy); // отскакивают запчасти\r\n        if (enemy.type === \"lucky\") {\r\n          this.ui.infoOff = true;\r\n          this.player.playerLifeScore++;\r\n          this.player.powerUp = \"lucky\";\r\n          this.player.enterPowerUp(\"lucky\");\r\n        }\r\n        if (enemy.type === \"yoda\") {\r\n          this.ui.infoOff = true;\r\n          this.player.playerLifeScore += 3;\r\n          this.player.powerUp = \"yoda\";\r\n          this.player.enterPowerUp(\"yoda\");\r\n        }\r\n        if (enemy.type === \"ship\") {\r\n          this.ui.infoOff = true;\r\n          this.player.playerLifeScore += 2;\r\n          this.megaLazer += 5;\r\n          this.player.enterPowerUp(\"ship\");\r\n        }\r\n        this.player.playerLifeScore--;\r\n        this.gameScore -= enemy.lives;\r\n        if (this.player.playerLifeScore <= 0) {\r\n          this.gameOver = true;\r\n          this.player.playerLifeScore = 0;\r\n        }\r\n        this.enemies = this.enemies.filter((enemy) => !enemy.markedForDelEnemy);\r\n      }\r\n      //\r\n\r\n      this.player.projectiles.forEach((projectile) => {\r\n        if (this.checkCollision(projectile, enemy)) {\r\n          this.enemies = this.enemies.filter(\r\n            (enemy) => !enemy.markedForDelEnemy\r\n          );\r\n\r\n          if (projectile.type === \"ship\") {\r\n            enemy.lives -= 100;\r\n          } else {\r\n            enemy.lives--;\r\n            if (enemy.lives <= 0) {\r\n              enemy.kill = projectile.type;\r\n            }\r\n            projectile.markerForDelProjctl = true;\r\n          }\r\n\r\n          this.particles.length <= 70\r\n            ? (0,_Particles__WEBPACK_IMPORTED_MODULE_5__.getGears)(this.particles, this, 1, enemy)\r\n            : false; // отскакивают запчасти\r\n        }\r\n        this.enemies = this.enemies.filter((enemy) => !enemy.markedForDelEnemy);\r\n      });\r\n      //\r\n      if (enemy.lives <= 0) {\r\n        if (!this.killArr.includes(enemy.id)) this.killArr.push(enemy.id);\r\n        (0,_Particles__WEBPACK_IMPORTED_MODULE_5__.getGears)(this.particles, this, 2, enemy); // отскакивают запчасти\r\n        enemy.markedForDelEnemy = true;\r\n        this.enemies = this.enemies.filter((enemy) => !enemy.markedForDelEnemy);\r\n\r\n        this.addExplosion(enemy);\r\n        this.explosions.forEach((explosion) => explosion.playBoom()); //\r\n\r\n        if (enemy.type === \"hive\" && this.killArr.includes(enemy.id)) {\r\n          for (let i = 0; i < 3; i++) {\r\n            this.enemies.push(\r\n              new _HiveWhile__WEBPACK_IMPORTED_MODULE_3__.Drone(\r\n                this,\r\n                enemy.x + Math.random() * enemy.width * 0.5,\r\n                enemy.y + Math.random() * enemy.height * 0.5\r\n              )\r\n            );\r\n          }\r\n          this.killArr = this.killArr.filter((e) => e.id != enemy.id);\r\n          this.enemies = this.enemies.filter(\r\n            (enemy) => !enemy.markedForDelEnemy\r\n          );\r\n        }\r\n        this.gameScore += enemy.score;\r\n      }\r\n      //\r\n    });\r\n\r\n    if (this.enemyTimer > this.enemyInterval && !this.gameOver) {\r\n      this.enemies = this.enemies.filter((enemy) => !enemy.markedForDelEnemy);\r\n      this.addEnemy();\r\n      this.enemies = this.enemies.filter((enemy) => !enemy.markedForDelEnemy);\r\n      this.enemyTimer = 0;\r\n    } else {\r\n      this.enemies = this.enemies.filter((enemy) => !enemy.markedForDelEnemy);\r\n\r\n      this.enemyTimer += deltaTime;\r\n    }\r\n    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDelEnemy);\r\n  }\r\n\r\n  draw(contex) {\r\n    contex.restore();\r\n    this.background.draw(contex);\r\n    this.ui.draw(contex);\r\n    this.player.draw(contex);\r\n    this.particles.forEach((paticle) => paticle.draw(contex));\r\n    this.enemies.forEach((enemy) => {\r\n      enemy.draw(contex);\r\n    });\r\n    this.explosions.forEach((explosion) => explosion.draw(contex));\r\n    this.background.layer4.draw(contex);\r\n    contex.save();\r\n  }\r\n\r\n  addExplosion(enemy) {\r\n    if (enemy.kill === \"powerUp\") {\r\n      this.explosions.push(\r\n        new _Explosion__WEBPACK_IMPORTED_MODULE_2__.FireExplosion(\r\n          this,\r\n          enemy.x + enemy.width * 0.5,\r\n          enemy.y + enemy.height * 0.5\r\n        )\r\n      );\r\n    } else {\r\n      this.explosions.push(\r\n        new _Explosion__WEBPACK_IMPORTED_MODULE_2__.SmokeExplosion(\r\n          this,\r\n          enemy.x + enemy.width * 0.5,\r\n          enemy.y + enemy.height * 0.5\r\n        )\r\n      );\r\n    }\r\n  }\r\n\r\n  addEnemy() {\r\n    let bingo = [new _Anglers__WEBPACK_IMPORTED_MODULE_0__.LuckyFish(this), new _Yoda__WEBPACK_IMPORTED_MODULE_9__.Yoda(this), new _SpaceShip__WEBPACK_IMPORTED_MODULE_7__.SpaceShip(this)];\r\n\r\n    let randomize = Math.random();\r\n\r\n    randomize < 0.5\r\n      ? this.enemies.push(new _Anglers__WEBPACK_IMPORTED_MODULE_0__.Angler01(this))\r\n      : this.enemies.push(new _Anglers__WEBPACK_IMPORTED_MODULE_0__.Angler02(this));\r\n    randomize > 0.75 ? this.enemies.push(new _HiveWhile__WEBPACK_IMPORTED_MODULE_3__.HiveWhale(this)) : undefined;\r\n    randomize > 0.9 ? this.enemies.push(new _HiveWhile__WEBPACK_IMPORTED_MODULE_3__.WhaleBoss(this)) : undefined;\r\n    if (randomize > 0.85)\r\n      setTimeout(() => {\r\n        this.enemies.push(bingo[Math.floor(Math.random() * 3)]);\r\n      }, 10000);\r\n  }\r\n\r\n  //столкновение\r\n  checkCollision(rect1, rect2) {\r\n    return (\r\n      rect1.x + 25 < rect2.x + rect2.width &&\r\n      rect1.x + rect1.width > rect2.x + 25 &&\r\n      rect1.y + 25 < rect2.y + rect2.height &&\r\n      rect1.height + rect1.y > rect2.y + 25\r\n    );\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/Game.js?");

/***/ }),

/***/ "./src/HiveWhile.js":
/*!**************************!*\
  !*** ./src/HiveWhile.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Drone: () => (/* binding */ Drone),\n/* harmony export */   HiveWhale: () => (/* binding */ HiveWhale),\n/* harmony export */   WhaleBoss: () => (/* binding */ WhaleBoss)\n/* harmony export */ });\n/* harmony import */ var _constEnemiesImgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constEnemiesImgs */ \"./src/constEnemiesImgs.js\");\n/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy */ \"./src/Enemy.js\");\n\r\n\r\n\r\nclass HiveWhale extends _Enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n  constructor(game) {\r\n    super(game);\r\n    this.width = 400;\r\n    this.height = 227;\r\n    this.y = Math.random() * (this.game.height * 0.9 - this.height);\r\n    this.image = _constEnemiesImgs__WEBPACK_IMPORTED_MODULE_0__.hiveWhale;\r\n    // this.frameY = Math.floor(Math.random() * 2);\r\n    this.frameY = 0;\r\n    this.lives = 10;\r\n    this.score = this.lives;\r\n    this.type = \"hive\";\r\n    this.speedX = Math.random() * -1.2 - 0.2;\r\n  }\r\n}\r\n\r\nclass Drone extends _Enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n  constructor(game, x, y) {\r\n    super(game);\r\n    this.width = 115;\r\n    this.height = 95;\r\n    this.x = x;\r\n    this.y = y;\r\n    this.image = _constEnemiesImgs__WEBPACK_IMPORTED_MODULE_0__.drone;\r\n    this.frameY = Math.floor(Math.random() * 2);\r\n    this.lives = 2;\r\n    this.score = this.lives;\r\n    this.type = \"drone\";\r\n    this.speedX = Math.random() * -4.2 - 0.5;\r\n  }\r\n}\r\n\r\nclass WhaleBoss extends _Enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n  constructor(game) {\r\n    super(game);\r\n    this.maxFrame = 38;\r\n\r\n    this.width = 420;\r\n    this.height = 285;\r\n    this.y = Math.random() * (this.game.height * 0.9 - this.height);\r\n    this.image = _constEnemiesImgs__WEBPACK_IMPORTED_MODULE_0__.imgWhaleBoss;\r\n    // this.frameY = Math.floor(Math.random() * 2);\r\n    this.frameY = Math.floor(Math.random() * 4);\r\n    this.lives = 20;\r\n    this.score = this.lives;\r\n    this.type = \"boss\";\r\n    this.speedX = Math.random() * -1.2 - 0.2;\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/HiveWhile.js?");

/***/ }),

/***/ "./src/InputHandler.js":
/*!*****************************!*\
  !*** ./src/InputHandler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InputHandler: () => (/* binding */ InputHandler)\n/* harmony export */ });\nconst canvas = document.getElementById(\"canvas1\");\r\n\r\n// управление\r\nclass InputHandler {\r\n  constructor(game) {\r\n    this.game = game;\r\n    window.addEventListener(\"keydown\", (e) => {\r\n      // !!!!!!\r\n      if (\r\n        (e.key === \"ArrowUp\" || e.key === \"ArrowDown\") &&\r\n        this.game.keys.indexOf(e.key) === -1\r\n      ) {\r\n        this.game.keys.push(e.key);\r\n      } else if (e.key === \" \") {\r\n        this.game.player.shootNew();\r\n      } else if (e.key === \"d\") {\r\n        this.game.debugMode = !this.game.debugMode;\r\n      } else if (e.key === \"z\") {\r\n        this.game.player.shootNew(\"mega\");\r\n      }\r\n    });\r\n\r\n    window.addEventListener(\"keyup\", (e) => {\r\n      // !!!!!! arrow fnc\r\n      if (this.game.keys.indexOf(e.key) > -1) {\r\n        this.game.keys.splice(this.game.keys.indexOf(e.key), 1);\r\n      }\r\n    });\r\n\r\n    canvas.addEventListener(\"mousemove\", (event) => {\r\n      this.game.mouseY = event.clientY;\r\n    });\r\n\r\n    canvas?.addEventListener(\"mousedown\", (event) => {\r\n      let timerId = setInterval(() => this.game.player.shootNew(), 150);\r\n\r\n      canvas.addEventListener(\"mouseup\", (event) => {\r\n        setTimeout(() => {\r\n          clearInterval(timerId);\r\n        }, 10);\r\n      });\r\n    });\r\n\r\n    canvas?.addEventListener(\"click\", (event) => {\r\n      this.game.player.shootNew();\r\n    });\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/InputHandler.js?");

/***/ }),

/***/ "./src/Layers.js":
/*!***********************!*\
  !*** ./src/Layers.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Layers: () => (/* binding */ Layers)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\n\r\nclass Layers {\r\n  constructor(game, image, speedModifier) {\r\n    this.game = game;\r\n    this.image = image;\r\n    this.speedModifier = speedModifier;\r\n    this.width = _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_WIDTH;\r\n    this.height = _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_HEIGHT;\r\n    this.x = 0;\r\n    this.y = 0;\r\n  }\r\n  update() {\r\n    if (this.x <= -this.width) this.x = 0;\r\n    this.x -= this.game.speedGame * this.speedModifier;\r\n  }\r\n  draw(contex) {\r\n    contex.drawImage(this.image, this.x, this.y);\r\n    contex.drawImage(this.image, this.x + this.width, this.y);\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/Layers.js?");

/***/ }),

/***/ "./src/Particles.js":
/*!**************************!*\
  !*** ./src/Particles.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Particles: () => (/* binding */ Particles),\n/* harmony export */   getGears: () => (/* binding */ getGears)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\n\r\n// украшалки --------------------------------------------------\r\nclass Particles {\r\n  constructor(game, x, y) {\r\n    this.game = game;\r\n    this.x = x;\r\n    this.y = y;\r\n    this.image = _constants__WEBPACK_IMPORTED_MODULE_0__.gearsImage;\r\n    this.frameX = Math.floor(Math.random() * 3);\r\n    this.frameY = Math.floor(Math.random() * 3);\r\n    this.spriteSize = 50;\r\n    this.sizeModifier = Number((Math.random() * 0.5 + 0.5).toFixed(1));\r\n    this.size = this.spriteSize * this.sizeModifier;\r\n    this.speedX = Math.random() * 6 - 3;\r\n    this.speedY = Math.random() * 1 - 15;\r\n    this.gravity = 0.5;\r\n    this.markerForDelGears = false;\r\n    this.angle = 0;\r\n    this.va = Math.random() * 0.2 - 0.1;\r\n    this.boundced = false;\r\n    this.bottomBounceBoundary = Math.random() * 80 + 50;\r\n  }\r\n  update() {\r\n    this.angle += this.va;\r\n    this.speedY += this.gravity;\r\n    this.x -= this.speedX + this.game.speedGame;\r\n    this.y += this.speedY;\r\n    if (this.x > this.game.width + this.size || this.x < 0 - this.size)\r\n      this.markerForDelGears = true;\r\n    if (\r\n      this.y > this.game.height - this.bottomBounceBoundary &&\r\n      this.boundced == false\r\n    ) {\r\n      this.boundced = true;\r\n      this.speedY *= -0.7;\r\n    }\r\n  }\r\n  draw(contex) {\r\n    contex.save();\r\n    contex.translate(this.x, this.y);\r\n    contex.rotate(this.angle);\r\n    contex.drawImage(\r\n      this.image,\r\n      this.frameX * this.spriteSize,\r\n      this.frameY * this.spriteSize,\r\n      this.spriteSize,\r\n      this.spriteSize,\r\n      this.size * -0.5,\r\n      this.size * -0.5,\r\n      this.size,\r\n      this.size\r\n    );\r\n    contex.restore();\r\n  }\r\n}\r\n\r\n// add gears\r\nlet getGears = (particles, game, n, enemy) => {\r\n  if (particles.length <= 70) {\r\n    for (let i = 0; i < n; i++) {\r\n      particles.push(\r\n        new Particles(\r\n          game,\r\n          enemy.x + enemy.width * 0.5,\r\n          enemy.y + enemy.height * 0.5\r\n        )\r\n      );\r\n    }\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/Particles.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio */ \"./src/audio.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _Projectile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projectile */ \"./src/Projectile.js\");\n\r\n\r\n\r\n\r\n\r\n// игрок\r\nclass Player {\r\n  constructor(game) {\r\n    this.game = game;\r\n    this.width = 120;\r\n    this.height = 190;\r\n    this.x = 20;\r\n    this.y = 100;\r\n    this.frameX = 0;\r\n    this.frameY = 0;\r\n    this.maxFrame = 37;\r\n    this.speedY = 0;\r\n    this.maxSpeed = 5;\r\n    this.projectiles = [];\r\n    this.powerUp = \"simple\";\r\n    this.powerYoda = false; ////\r\n    this.powerUpTimer = 0;\r\n    this.powerUpLimit = 20000;\r\n    this.soundLaser = [];\r\n    this.playerLifeScore = 15;\r\n    this.soundDamage = _audio__WEBPACK_IMPORTED_MODULE_1__.soundDamagePlayer;\r\n    this.image = _constants__WEBPACK_IMPORTED_MODULE_2__.playerImage;\r\n  }\r\n  update(deltaTime) {\r\n    if (this.game.keys.includes(\"ArrowUp\")) this.speedY = -this.maxSpeed;\r\n    else if (this.game.keys.includes(\"ArrowDown\")) {\r\n      this.speedY = +this.maxSpeed;\r\n    } else this.speedY = 0;\r\n\r\n    this.y += this.speedY;\r\n\r\n    this.y = this.game.mouseY - 10;\r\n\r\n    // vertical boundaries\r\n    if (this.y > this.game.height - this.height * 0.5)\r\n      this.y = this.game.height - this.height * 0.5;\r\n    else if (this.y < -this.height * 0.5) this.y = -this.height * 0.5;\r\n\r\n    //  handler projectiles снаряды\r\n    this.soundLaser.forEach((sound) => {\r\n      sound.muted = false;\r\n      sound.play();\r\n      setTimeout(() => {\r\n        sound.pause();\r\n        this.soundLaser.shift();\r\n      }, 200);\r\n    });\r\n    this.projectiles.forEach((projectile) => {\r\n      projectile.update();\r\n    });\r\n    this.projectiles = this.projectiles.filter(\r\n      (projectile) => !projectile.markerForDelProjctl\r\n    );\r\n\r\n    //sprite animation\r\n    if (this.frameX < this.maxFrame) {\r\n      this.frameX++;\r\n    } else {\r\n      this.frameX = 0;\r\n    }\r\n\r\n    //powerUp\r\n    if (\r\n      this.powerUp === \"lucky\" ||\r\n      this.powerUp === \"yoda\" ||\r\n      this.powerUp === \"ship\"\r\n    ) {\r\n      if (this.powerUpTimer > this.powerUpLimit) {\r\n        this.powerUpTimer = 0;\r\n        this.powerUp = \"simple\";\r\n        this.frameY = 0;\r\n      } else {\r\n        this.powerUpTimer += deltaTime;\r\n        this.frameY = 1;\r\n      }\r\n    }\r\n  }\r\n\r\n  draw(contex) {\r\n    if (this.game.debugMode)\r\n      contex.strokeRect(this.x, this.y, this.width, this.height);\r\n    this.projectiles.forEach((projectile) => {\r\n      projectile.draw(contex);\r\n    });\r\n    contex.drawImage(\r\n      this.image,\r\n      this.frameX * this.width,\r\n      this.frameY * this.height,\r\n      this.width,\r\n      this.height,\r\n      this.x,\r\n      this.y,\r\n      this.width,\r\n      this.height\r\n    );\r\n  }\r\n\r\n  shootNew(mega) {\r\n    let soundLaser = new Audio();\r\n    soundLaser.volume = 0.2;\r\n\r\n    if (this.powerUp === \"simple\" || this.powerUp === \"ship\") {\r\n      soundLaser.src = _audio__WEBPACK_IMPORTED_MODULE_1__.pathLaser01;\r\n      this.shootTop(\"simple\");\r\n    }\r\n\r\n    if (this.powerUp === \"lucky\") {\r\n      soundLaser.src = _audio__WEBPACK_IMPORTED_MODULE_1__.pathLaser02;\r\n      this.shootTop(\"lucky\");\r\n      if (this.game.ammo > 0) this.shootBottom(\"lucky\");\r\n    }\r\n\r\n    if (mega === \"mega\") {\r\n      soundLaser.src = _audio__WEBPACK_IMPORTED_MODULE_1__.pathLaser02;\r\n      this.shootMegaLaser(\"ship\");\r\n    }\r\n\r\n    if (this.powerUp === \"yoda\") {\r\n      soundLaser.volume = 0.35;\r\n      soundLaser.src = _audio__WEBPACK_IMPORTED_MODULE_1__.pathLaserY;\r\n      this.shootTop(\"yoda\");\r\n      if (this.game.ammo > 0) this.shootMiddle(\"yoda\");\r\n      if (this.game.ammo > 0) this.shootBottom(\"yoda\");\r\n    }\r\n    if (!___WEBPACK_IMPORTED_MODULE_0__.muted) this.soundLaser.push(soundLaser);\r\n  }\r\n\r\n  //стрельба\r\n  shootTop(type) {\r\n    this.addProjectile(type, 80, 30);\r\n\r\n    // if (this.game.ammo > 0) {\r\n    //   this.projectiles.push(\r\n    //     new Projectile(this.game, this.x + 80, this.y + 30, type)\r\n    //   );\r\n    // }\r\n    // this.game.ammo--;\r\n  }\r\n\r\n  shootBottom(type) {\r\n    this.addProjectile(type, 80, 175);\r\n\r\n    // if (this.game.ammo > 0) {\r\n    //   this.projectiles.push(\r\n    //     new Projectile(this.game, this.x + 80, this.y + 175, type)\r\n    //   );\r\n    // }\r\n    // this.game.ammo--;\r\n  }\r\n\r\n  shootMiddle(type) {\r\n    this.addProjectile(type, 80, 100);\r\n\r\n    // if (this.game.ammo > 0) {\r\n    //   this.projectiles.push(\r\n    //     new Projectile(this.game, this.x + 80, this.y + 100, type)\r\n    //   );\r\n    // }\r\n    // this.game.ammo--;\r\n  }\r\n\r\n  shootMegaLaser(type) {\r\n    if (this.game.megaLazer > 0) {\r\n      this.projectiles.push(\r\n        new _Projectile__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.game, this.x + 60, this.y - 14, type)\r\n      );\r\n    }\r\n    this.game.megaLazer--;\r\n  }\r\n\r\n  addProjectile(type, x, y) {\r\n    if (this.game.ammo > 0) {\r\n      this.game.ammo--;\r\n      this.projectiles.push(\r\n        new _Projectile__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.game, this.x + x, this.y + y, type)\r\n      );\r\n    }\r\n  }\r\n\r\n  //powerUp\r\n  enterPowerUp(type) {\r\n    this.powerUp = type;\r\n    if (type === \"lucky\") this.image = _constants__WEBPACK_IMPORTED_MODULE_2__.playerImage;\r\n    if (type === \"yoda\") this.image = _constants__WEBPACK_IMPORTED_MODULE_2__.playerYodaImage;\r\n    if (type === \"ship\") {\r\n      this.image = _constants__WEBPACK_IMPORTED_MODULE_2__.playerYodaImage;\r\n\r\n      if (this.game.ammo < this.game.maxAmmo) {\r\n        this.game.ammo = this.game.maxAmmo;\r\n      }\r\n    } else {\r\n      if (this.game.ammo < this.game.maxAmmo) {\r\n        this.game.ammo = this.game.maxAmmo;\r\n      }\r\n    }\r\n    this.powerUpTimer = 0;\r\n  }\r\n\r\n  playSoundDamagePlayer() {\r\n    if (!___WEBPACK_IMPORTED_MODULE_0__.muted) {\r\n      this.soundDamage.currentTime = 0;\r\n      this.soundDamage.volume = 1;\r\n      this.soundDamage.play();\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/Player.js?");

/***/ }),

/***/ "./src/Projectile.js":
/*!***************************!*\
  !*** ./src/Projectile.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_projectile_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/projectile.png */ \"./src/images/projectile.png\");\n/* harmony import */ var _images_projctl2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/projctl2.png */ \"./src/images/projctl2.png\");\n/* harmony import */ var _images_megaBoom_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/megaBoom.png */ \"./src/images/megaBoom.png\");\n// снаряды --------------------------------------------------\r\n// @ts-ignore\r\n\r\n// @ts-ignore\r\n\r\n// @ts-ignore\r\n\r\n\r\nlet projectile = new Image();\r\nprojectile.src = _images_projectile_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\nlet projectile02 = new Image();\r\nprojectile02.src = _images_projctl2_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\nlet megaLazer = new Image();\r\nmegaLazer.src = _images_megaBoom_png__WEBPACK_IMPORTED_MODULE_2__;\r\n\r\nclass Projectile {\r\n  constructor(game, x, y, type) {\r\n    this.game = game;\r\n    this.x = x;\r\n    this.y = y;\r\n    this.width = 20;\r\n    this.height = 5;\r\n    this.speedX = 3;\r\n    this.markerForDelProjctl = false;\r\n    this.image = projectile;\r\n    this.type = type || \"simple\";\r\n\r\n    if (this.type === \"lucky\" || this.type === \"yoda\") {\r\n      this.image = projectile02;\r\n    }\r\n    if (this.type === \"ship\") {\r\n      this.image = megaLazer;\r\n    }\r\n  }\r\n  update() {\r\n    // if (this.game.player.powerUp) this.type = \"powerUp\";\r\n    this.x += this.speedX;\r\n    if (this.x > this.game.width * 0.98) this.markerForDelProjctl = true;\r\n  }\r\n  draw(contex) {\r\n    if (this.type === \"lucky\" || this.type === \"yoda\") {\r\n      this.width = 20;\r\n      this.height = 5;\r\n      this.speedX = 3;\r\n    }\r\n    if (this.type === \"ship\") {\r\n      this.width = 324;\r\n      this.height = 225;\r\n      this.speedX = 5;\r\n    }\r\n\r\n    contex.drawImage(this.image, this.x, this.y);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projectile);\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/Projectile.js?");

/***/ }),

/***/ "./src/SpaceShip.js":
/*!**************************!*\
  !*** ./src/SpaceShip.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SpaceShip: () => (/* binding */ SpaceShip)\n/* harmony export */ });\n/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enemy */ \"./src/Enemy.js\");\n/* harmony import */ var _images_ship_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/ship.png */ \"./src/images/ship.png\");\n\r\n// @ts-ignore\r\n\r\n\r\nlet shipImg = new Image();\r\nshipImg.src = _images_ship_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\nclass SpaceShip extends _Enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(game) {\r\n    super(game);\r\n    this.width = 120;\r\n    this.height = 87;\r\n    this.y = Math.random() * (this.game.height * 0.95 - this.height);\r\n    this.frameX = 0;\r\n    this.frameY = 0;\r\n    this.maxFrame = 0;\r\n    this.image = shipImg;\r\n    this.lives = 10;\r\n    this.score = this.lives;\r\n    this.type = \"ship\";\r\n    this.speedX = Math.random() * -4.2 - 0.5;\r\n  }\r\n  draw(contex) {\r\n    if (this.game.debugMode)\r\n      contex.strokeRect(this.x, this.y, this.width, this.height);\r\n\r\n    contex.drawImage(\r\n      this.image,\r\n      this.frameX * this.width,\r\n      this.frameY * this.height,\r\n      this.width,\r\n      this.height,\r\n      this.x,\r\n      this.y,\r\n      this.width,\r\n      this.height\r\n    );\r\n    contex.font = \"20px Helvetica\";\r\n    if (this.game.debugMode) {\r\n      contex.fillText(this.lives, this.x, this.y);\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/SpaceShip.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// ---------------------- class UI --------------------\r\nclass UI {\r\n  constructor(game) {\r\n    this.game = game;\r\n    this.fontSize = 18;\r\n    this.fontFamily = \"Helvetica\";\r\n    this.color = \"yellow\";\r\n    this.infoOff = false;\r\n  }\r\n\r\n  update() {\r\n    if (this.game.gameOver) {\r\n      this.game.enemies = [];\r\n    }\r\n  }\r\n\r\n  draw(contex) {\r\n    contex.font = ` ${this.fontSize}px ${this.fontFamily}`;\r\n    contex.fillStyle = this.color;\r\n    //score\r\n    contex.fillText(\"Score: \" + this.game.gameScore, 20, 40);\r\n    contex.fillText(\"Ammo # \", 20, 65);\r\n    if (this.game.ammo <= 0) {\r\n      contex.fillText(0, 95, 65);\r\n    } else {\r\n      contex.fillText(this.game.ammo, 95, 65);\r\n    }\r\n\r\n    //ammo\r\n    if (\r\n      this.game.player.powerUp === \"lucky\" ||\r\n      this.game.player.powerUp === \"yoda\"\r\n    )\r\n      contex.fillStyle = \"red\";\r\n\r\n    for (let i = 0; i < this.game.ammo; i++) {\r\n      contex.fillRect(130 + 5 * i, 47.5, 3, 20);\r\n    }\r\n    contex.fillStyle = \"#16e382\";\r\n    contex.fillText(\"Life # \", 130, 40);\r\n    contex.fillText(this.game.player.playerLifeScore, 180, 40);\r\n    for (let i = 0; i < this.game.player.playerLifeScore; i++) {\r\n      contex.fillRect(210 + 20 * i, 22.5, 10, 20);\r\n    }\r\n\r\n    // mega\r\n    if (this.game.megaLazer > 0) {\r\n      contex.fillStyle = \"yellow\";\r\n      contex.font = \"bold Courier\";\r\n      contex.fillText(\"Mega # \" + this.game.megaLazer, 20, 90);\r\n    }\r\n    //game over\r\n    if (this.game.gameOver) {\r\n      contex.fillStyle = \"#ff5722\";\r\n      let messg1 = \"You Lose !!!\";\r\n      let messg2 = \"Try Next Time !!!\";\r\n      contex.font = ` ${70}px ${this.fontFamily}`;\r\n      contex.fillText(\r\n        messg1,\r\n        this.game.width * 0.5 - 200,\r\n        this.game.height * 0.5 - 40\r\n      );\r\n      contex.font = ` ${35}px ${this.fontFamily}`;\r\n      contex.fillText(\r\n        messg2,\r\n        this.game.width * 0.5 - 200,\r\n        this.game.height * 0.5 + 40\r\n      );\r\n    }\r\n    if (this.game.player.powerUp === \"yoda\" && this.infoOff) {\r\n      this.infoMsg(contex, \"Yoda Time !!!\");\r\n    }\r\n    if (this.game.player.powerUp === \"lucky\" && this.infoOff) {\r\n      this.infoMsg(contex, \"Lucky on  You Side !!!\");\r\n    }\r\n    if (this.game.player.powerUp === \"ship\" && this.infoOff) {\r\n      this.infoMsg(contex, \"Mega Laser Сharged!!!\");\r\n    }\r\n  }\r\n\r\n  infoMsg(contex, msg) {\r\n    contex.fillStyle = \"#15e571\";\r\n    contex.font = ` ${70}px ${this.fontFamily}`;\r\n    contex.fillText(\r\n      msg,\r\n      this.game.width * 0.5 - 200,\r\n      this.game.height * 0.5 - 40\r\n    );\r\n    setTimeout(() => {\r\n      this.infoOff = false;\r\n    }, 1000);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/UI.js?");

/***/ }),

/***/ "./src/Yoda.js":
/*!*********************!*\
  !*** ./src/Yoda.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Yoda: () => (/* binding */ Yoda),\n/* harmony export */   yodaImg: () => (/* binding */ yodaImg)\n/* harmony export */ });\n/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enemy */ \"./src/Enemy.js\");\n/* harmony import */ var _images_yoda2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/yoda2.png */ \"./src/images/yoda2.png\");\n\r\n// @ts-ignore\r\n\r\n\r\nlet yodaImg = new Image();\r\nyodaImg.src = _images_yoda2_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\nclass Yoda extends _Enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(game) {\r\n    super(game);\r\n    this.width = 100;\r\n    this.height = 100;\r\n    this.y = Math.random() * (this.game.height * 0.95 - this.height);\r\n    this.frameX = 0;\r\n    this.frameY = 0;\r\n    this.maxFrame = 0;\r\n    this.image = yodaImg;\r\n    this.lives = 10;\r\n    this.score = this.lives;\r\n    this.type = \"yoda\";\r\n    this.speedX = Math.random() * -4.2 - 0.5;\r\n  }\r\n  draw(contex) {\r\n    if (this.game.debugMode)\r\n      contex.strokeRect(this.x, this.y, this.width, this.height);\r\n\r\n    contex.drawImage(\r\n      this.image,\r\n      this.frameX * this.width,\r\n      this.frameY * this.height,\r\n      this.width,\r\n      this.height,\r\n      this.x,\r\n      this.y,\r\n      this.width,\r\n      this.height\r\n    );\r\n    contex.font = \"20px Helvetica\";\r\n    if (this.game.debugMode) {\r\n      contex.fillText(this.lives, this.x, this.y);\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/Yoda.js?");

/***/ }),

/***/ "./src/audio.js":
/*!**********************!*\
  !*** ./src/audio.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   musicFonArr: () => (/* binding */ musicFonArr),\n/* harmony export */   pathLaser01: () => (/* reexport default export from named module */ _audio_l01_mp3__WEBPACK_IMPORTED_MODULE_4__),\n/* harmony export */   pathLaser02: () => (/* reexport default export from named module */ _audio_l02_mp3__WEBPACK_IMPORTED_MODULE_5__),\n/* harmony export */   pathLaserY: () => (/* reexport default export from named module */ _audio_ly_mp3__WEBPACK_IMPORTED_MODULE_6__),\n/* harmony export */   soundDamagePlayer: () => (/* binding */ soundDamagePlayer),\n/* harmony export */   soundsExplosArr: () => (/* binding */ soundsExplosArr)\n/* harmony export */ });\n/* harmony import */ var _audio_fon_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio/fon.mp3 */ \"./src/audio/fon.mp3\");\n/* harmony import */ var _audio_fon02_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio/fon02.mp3 */ \"./src/audio/fon02.mp3\");\n/* harmony import */ var _audio_fon03_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio/fon03.mp3 */ \"./src/audio/fon03.mp3\");\n/* harmony import */ var _audio_fon04_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio/fon04.mp3 */ \"./src/audio/fon04.mp3\");\n/* harmony import */ var _audio_l01_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audio/l01.mp3 */ \"./src/audio/l01.mp3\");\n/* harmony import */ var _audio_l02_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio/l02.mp3 */ \"./src/audio/l02.mp3\");\n/* harmony import */ var _audio_ly_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audio/ly.mp3 */ \"./src/audio/ly.mp3\");\n/* harmony import */ var _audio_explosion1_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./audio/explosion1.wav */ \"./src/audio/explosion1.wav\");\n/* harmony import */ var _audio_explosion2_wav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./audio/explosion2.wav */ \"./src/audio/explosion2.wav\");\n/* harmony import */ var _audio_explosion3_wav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./audio/explosion3.wav */ \"./src/audio/explosion3.wav\");\n/* harmony import */ var _audio_explosion4_wav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./audio/explosion4.wav */ \"./src/audio/explosion4.wav\");\n/* harmony import */ var _audio_explosion5_wav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./audio/explosion5.wav */ \"./src/audio/explosion5.wav\");\n/* harmony import */ var _audio_explosion6_wav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./audio/explosion6.wav */ \"./src/audio/explosion6.wav\");\n/* harmony import */ var _audio_damagePlayer_mp3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./audio/damagePlayer.mp3 */ \"./src/audio/damagePlayer.mp3\");\n//fon musica\r\n// @ts-ignore\r\n\r\n// @ts-ignore\r\n\r\n// @ts-ignore\r\n\r\n// @ts-ignore\r\n\r\n// @ts-ignore\r\n\r\n// @ts-ignore\r\n\r\n// @ts-ignore\r\n\r\n\r\n// explore sound\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// sound damage player\r\n\r\nlet soundDamagePlayer = new Audio(_audio_damagePlayer_mp3__WEBPACK_IMPORTED_MODULE_13__);\r\n\r\nlet musicFonArr = [\r\n  new Audio(_audio_fon_mp3__WEBPACK_IMPORTED_MODULE_0__),\r\n  new Audio(_audio_fon04_mp3__WEBPACK_IMPORTED_MODULE_3__),\r\n  new Audio(_audio_fon02_mp3__WEBPACK_IMPORTED_MODULE_1__),\r\n  new Audio(_audio_fon03_mp3__WEBPACK_IMPORTED_MODULE_2__),\r\n];\r\n\r\nlet soundsPathExplosArr = [\r\n  _audio_explosion1_wav__WEBPACK_IMPORTED_MODULE_7__,\r\n  _audio_explosion2_wav__WEBPACK_IMPORTED_MODULE_8__,\r\n  _audio_explosion3_wav__WEBPACK_IMPORTED_MODULE_9__,\r\n  _audio_explosion4_wav__WEBPACK_IMPORTED_MODULE_10__,\r\n  _audio_explosion5_wav__WEBPACK_IMPORTED_MODULE_11__,\r\n  _audio_explosion6_wav__WEBPACK_IMPORTED_MODULE_12__,\r\n];\r\n\r\nlet soundsExplosArr = [];\r\n\r\nsoundsPathExplosArr.forEach((boom) => soundsExplosArr.push(new Audio(boom)));\r\n\r\n// let fonMuzic = new Audio(musicFonPathArr[Math.floor(Math.random() * 3)]);\r\n// fonMuzic.volume = 0.25;\r\n// fonMuzic.muted = true;\r\n\r\nfunction getFonMuzic() {\r\n  let fonMuzic = new Audio();\r\n  fonMuzic.volume = 0.2;\r\n  fonMuzic.muted = true;\r\n  return fonMuzic;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/audio.js?");

/***/ }),

/***/ "./src/constEnemiesImgs.js":
/*!*********************************!*\
  !*** ./src/constEnemiesImgs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   angler01: () => (/* binding */ angler01),\n/* harmony export */   angler02: () => (/* binding */ angler02),\n/* harmony export */   drone: () => (/* binding */ drone),\n/* harmony export */   hiveWhale: () => (/* binding */ hiveWhale),\n/* harmony export */   imgWhaleBoss: () => (/* binding */ imgWhaleBoss),\n/* harmony export */   luckyFish: () => (/* binding */ luckyFish)\n/* harmony export */ });\n/* harmony import */ var _images_angler1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/angler1.png */ \"./src/images/angler1.png\");\n/* harmony import */ var _images_angler2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/angler2.png */ \"./src/images/angler2.png\");\n/* harmony import */ var _images_lucky_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/lucky.png */ \"./src/images/lucky.png\");\n/* harmony import */ var _images_hivewhale_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/hivewhale.png */ \"./src/images/hivewhale.png\");\n/* harmony import */ var _images_drone_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/drone.png */ \"./src/images/drone.png\");\n/* harmony import */ var _images_whale3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/whale3.png */ \"./src/images/whale3.png\");\n// @ts-ignore\r\n\r\n\r\n// @ts-ignore\r\n\r\n\r\n// @ts-ignore\r\n\r\n\r\n// @ts-ignore\r\n\r\n\r\n// @ts-ignore\r\n\r\n\r\n// @ts-ignore\r\n\r\n\r\nlet angler01 = new Image();\r\nangler01.src = _images_angler1_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\nlet angler02 = new Image();\r\nangler02.src = _images_angler2_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\nlet luckyFish = new Image();\r\nluckyFish.src = _images_lucky_png__WEBPACK_IMPORTED_MODULE_2__;\r\n\r\nlet hiveWhale = new Image();\r\nhiveWhale.src = _images_hivewhale_png__WEBPACK_IMPORTED_MODULE_3__;\r\n\r\nlet drone = new Image();\r\ndrone.src = _images_drone_png__WEBPACK_IMPORTED_MODULE_4__;\r\n\r\nlet imgWhaleBoss = new Image();\r\nimgWhaleBoss.src = _images_whale3_png__WEBPACK_IMPORTED_MODULE_5__;\r\n\r\n\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/constEnemiesImgs.js?");

/***/ }),

/***/ "./src/constLayers.js":
/*!****************************!*\
  !*** ./src/constLayers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLayes04: () => (/* binding */ getLayes04),\n/* harmony export */   getLayesArr: () => (/* binding */ getLayesArr),\n/* harmony export */   image01: () => (/* binding */ image01),\n/* harmony export */   imagesArr: () => (/* binding */ imagesArr)\n/* harmony export */ });\n/* harmony import */ var _images_layer1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/layer1.png */ \"./src/images/layer1.png\");\n/* harmony import */ var _images_layer2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/layer2.png */ \"./src/images/layer2.png\");\n/* harmony import */ var _images_layer3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/layer3.png */ \"./src/images/layer3.png\");\n/* harmony import */ var _images_layer4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/layer4.png */ \"./src/images/layer4.png\");\n/* harmony import */ var _Layers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layers */ \"./src/Layers.js\");\n// @ts-ignore\r\n\r\n// @ts-ignore\r\n\r\n// @ts-ignore\r\n\r\n// @ts-ignore\r\n\r\n\r\n\r\nlet layersSpeedArr = [0.2, 0.4, 1, 1.5];\r\nlet imagesArr = [];\r\nlet layersArr = [];\r\nconst imagesPatsArr = [_images_layer1_png__WEBPACK_IMPORTED_MODULE_0__, _images_layer2_png__WEBPACK_IMPORTED_MODULE_1__, _images_layer3_png__WEBPACK_IMPORTED_MODULE_2__, _images_layer4_png__WEBPACK_IMPORTED_MODULE_3__];\r\n\r\nlet image01 = new Image();\r\nimage01.src = _images_layer1_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\nimagesPatsArr.forEach((imgPath) => {\r\n  let image = new Image();\r\n  image.src = imgPath;\r\n  imagesArr.push(image);\r\n});\r\n\r\nlet getLayesArr = (game) => {\r\n  for (let i = 0; i < 3; i++) {\r\n    layersArr.push(new _Layers__WEBPACK_IMPORTED_MODULE_4__.Layers(game, imagesArr[i], layersSpeedArr[i]));\r\n  }\r\n  return layersArr;\r\n};\r\n\r\nlet getLayes04 = (game) => {\r\n  return new _Layers__WEBPACK_IMPORTED_MODULE_4__.Layers(game, imagesArr[3], layersSpeedArr[3]);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/constLayers.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CANVAS_HEIGHT: () => (/* binding */ CANVAS_HEIGHT),\n/* harmony export */   CANVAS_WIDTH: () => (/* binding */ CANVAS_WIDTH),\n/* harmony export */   gearsImage: () => (/* binding */ gearsImage),\n/* harmony export */   playerImage: () => (/* binding */ playerImage),\n/* harmony export */   playerYodaImage: () => (/* binding */ playerYodaImage)\n/* harmony export */ });\n/* harmony import */ var _images_player00_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/player00.png */ \"./src/images/player00.png\");\n/* harmony import */ var _images_player01_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/player01.png */ \"./src/images/player01.png\");\n/* harmony import */ var _images_gears_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/gears.png */ \"./src/images/gears.png\");\n// @ts-ignore\r\n\r\n// @ts-ignore\r\n\r\n// @ts-ignore\r\n\r\n\r\nconst CANVAS_WIDTH = window.innerWidth; //1500\r\nconst CANVAS_HEIGHT = 500;\r\n\r\nconst playerImage = new Image();\r\nplayerImage.src = _images_player00_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\nconst playerYodaImage = new Image();\r\nplayerYodaImage.src = _images_player01_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\nconst gearsImage = new Image();\r\ngearsImage.src = _images_gears_png__WEBPACK_IMPORTED_MODULE_2__;\r\n\r\n\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   endGame: () => (/* binding */ endGame),\n/* harmony export */   muted: () => (/* binding */ muted),\n/* harmony export */   pauseGame: () => (/* binding */ pauseGame)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio */ \"./src/audio.js\");\n\r\n\r\n\r\n\r\n\r\nlet fonMuzic = _audio__WEBPACK_IMPORTED_MODULE_3__.musicFonArr[Math.floor(Math.random() * 4)];\r\nfonMuzic.volume = 0.15;\r\nfonMuzic.muted = true;\r\n\r\nconst startBtn = document.getElementById(\"startBtn\");\r\nconst pauseBtn = document.getElementById(\"pauseBtn\");\r\nconst restoreBtn = document.getElementById(\"restoreBtn\");\r\nconst muteBtn = document.getElementById(\"muteBtn\");\r\nconst infoBtn = document.getElementById(\"infoBtn\");\r\nconst info = document.getElementById(\"info\");\r\nconst canvas = document.getElementById(\"canvas1\");\r\n// @ts-ignore\r\nconst ctx = canvas.getContext(\"2d\", { willReadFrequently: true });\r\n// @ts-ignore\r\ncanvas.width = _constants__WEBPACK_IMPORTED_MODULE_1__.CANVAS_WIDTH;\r\n// @ts-ignore\r\ncanvas.height = _constants__WEBPACK_IMPORTED_MODULE_1__.CANVAS_HEIGHT;\r\n\r\nlet lastTime = 0;\r\n\r\nlet muted = false;\r\n\r\nlet isPaused = true;\r\n\r\nconst game = new _Game__WEBPACK_IMPORTED_MODULE_2__.Game(_constants__WEBPACK_IMPORTED_MODULE_1__.CANVAS_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_1__.CANVAS_HEIGHT);\r\n\r\nfunction animate(timeStamp) {\r\n  //\r\n  if (fonMuzic.currentTime === fonMuzic.duration) {\r\n    fonMuzic = _audio__WEBPACK_IMPORTED_MODULE_3__.musicFonArr[Math.floor(Math.random() * 4)];\r\n    fonMuzic.currentTime = 0;\r\n    fonMuzic.play();\r\n  }\r\n\r\n  const deltaTime = timeStamp - lastTime;\r\n  lastTime = timeStamp;\r\n  ctx.clearRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_1__.CANVAS_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_1__.CANVAS_HEIGHT);\r\n  game.draw(ctx);\r\n  game.update(deltaTime);\r\n  if (!isPaused) requestAnimationFrame(animate);\r\n}\r\n\r\nfunction pauseGame(finish = \"none\") {\r\n  isPaused = true;\r\n  // fonMuzic.currentTime = 0;\r\n  fonMuzic.pause();\r\n  // @ts-ignore\r\n  pauseBtn.style.display = \"none\";\r\n  // @ts-ignore\r\n  muteBtn.style.display = \"none\";\r\n  finish === \"finish\"\r\n    ? // @ts-ignore\r\n      (startBtn.style.display = \"none\")\r\n    : // @ts-ignore\r\n      (startBtn.style.display = \"block\");\r\n}\r\n\r\nfunction endGame() {\r\n  isPaused = true;\r\n  fonMuzic.currentTime = 0;\r\n  fonMuzic.pause();\r\n  // @ts-ignore\r\n  pauseBtn.style.display = \"none\";\r\n  // @ts-ignore\r\n  muteBtn.style.display = \"none\";\r\n}\r\n\r\nstartBtn?.addEventListener(\"click\", () => {\r\n  if (!muted) {\r\n    fonMuzic.currentTime = 0;\r\n    fonMuzic.muted = false;\r\n    fonMuzic.play();\r\n  }\r\n  // @ts-ignore\r\n  info.style.display = \"none\";\r\n  infoBtn.style.display = \"none\";\r\n  canvas.style.display = \"block\";\r\n  startBtn.style.display = \"none\";\r\n  // @ts-ignore\r\n  pauseBtn.style.display = \"block\";\r\n  // @ts-ignore\r\n  restoreBtn.style.display = \"block\";\r\n  // @ts-ignore\r\n  muteBtn.style.display = \"block\";\r\n  isPaused = false;\r\n  animate(0);\r\n});\r\n\r\npauseBtn?.addEventListener(\"click\", () => {\r\n  pauseGame();\r\n});\r\n\r\nrestoreBtn?.addEventListener(\"click\", () => {\r\n  location.href = location.href;\r\n  fonMuzic.currentTime = 0;\r\n  fonMuzic.pause();\r\n  // @ts-ignore\r\n  fonMuzic = null;\r\n  fonMuzic.load();\r\n});\r\n\r\nmuteBtn?.addEventListener(\"click\", () => {\r\n  muted ? (muted = false) : (muted = true);\r\n\r\n  if (!muted && !isPaused) {\r\n    muteBtn.innerHTML = \"Sound On\";\r\n    fonMuzic.muted = false;\r\n    fonMuzic.play();\r\n  }\r\n  if (muted) {\r\n    muteBtn.innerHTML = \"Sound Off\";\r\n    fonMuzic.muted = false;\r\n    fonMuzic.pause();\r\n  }\r\n});\r\n\r\ninfoBtn?.addEventListener(\"click\", () => {\r\n  canvas.style.display = \"none\";\r\n  info.style.display = \"block\";\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/index.js?");

/***/ }),

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   randomN: () => (/* binding */ randomN),\n/* harmony export */   str_randLen: () => (/* binding */ str_randLen)\n/* harmony export */ });\nfunction randomN() {\r\n    // return (Math.random() * 100000000000000000)\r\n    var result = '';\r\n    var words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';\r\n    var max_position = words.length - 1;\r\n    for (let i = 0; i < 7; ++i) {\r\n        let position = Math.floor(Math.random() * max_position);\r\n        result = result + words.substring(position, position + 1);\r\n    }\r\n    return result; // 7 symbols\r\n\r\n}\r\n\r\n\r\nfunction str_randLen(long) {\r\n    var result = '';\r\n    // var words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';\r\n    var words = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM';\r\n    var max_position = words.length - 1;\r\n    for (let i = 0; i < long; ++i) {\r\n        let position = Math.floor(Math.random() * max_position);\r\n        result = result + words.substring(position, position + 1);\r\n    }\r\n    return result;\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/random.js?");

/***/ }),

/***/ "./src/audio/damagePlayer.mp3":
/*!************************************!*\
  !*** ./src/audio/damagePlayer.mp3 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fcabca74370fe44f7f49.mp3\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/audio/damagePlayer.mp3?");

/***/ }),

/***/ "./src/audio/explosion1.wav":
/*!**********************************!*\
  !*** ./src/audio/explosion1.wav ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a2f1b47580a320384cd4.wav\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/audio/explosion1.wav?");

/***/ }),

/***/ "./src/audio/explosion2.wav":
/*!**********************************!*\
  !*** ./src/audio/explosion2.wav ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3cc9aca477d89f78adf3.wav\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/audio/explosion2.wav?");

/***/ }),

/***/ "./src/audio/explosion3.wav":
/*!**********************************!*\
  !*** ./src/audio/explosion3.wav ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"10a868c1d3f9635afe57.wav\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/audio/explosion3.wav?");

/***/ }),

/***/ "./src/audio/explosion4.wav":
/*!**********************************!*\
  !*** ./src/audio/explosion4.wav ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"28fd7be00826d53708d9.wav\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/audio/explosion4.wav?");

/***/ }),

/***/ "./src/audio/explosion5.wav":
/*!**********************************!*\
  !*** ./src/audio/explosion5.wav ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ca9795315171ff8a3e7e.wav\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/audio/explosion5.wav?");

/***/ }),

/***/ "./src/audio/explosion6.wav":
/*!**********************************!*\
  !*** ./src/audio/explosion6.wav ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b779d419046cede08d4c.wav\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/audio/explosion6.wav?");

/***/ }),

/***/ "./src/audio/fon.mp3":
/*!***************************!*\
  !*** ./src/audio/fon.mp3 ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"73aabff3ec111a7be9ee.mp3\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/audio/fon.mp3?");

/***/ }),

/***/ "./src/audio/fon02.mp3":
/*!*****************************!*\
  !*** ./src/audio/fon02.mp3 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e088a44097ba96f3b72.mp3\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/audio/fon02.mp3?");

/***/ }),

/***/ "./src/audio/fon03.mp3":
/*!*****************************!*\
  !*** ./src/audio/fon03.mp3 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"41ed5ca252d3bffbd507.mp3\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/audio/fon03.mp3?");

/***/ }),

/***/ "./src/audio/fon04.mp3":
/*!*****************************!*\
  !*** ./src/audio/fon04.mp3 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"19e05140fe05006d10b8.mp3\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/audio/fon04.mp3?");

/***/ }),

/***/ "./src/audio/l01.mp3":
/*!***************************!*\
  !*** ./src/audio/l01.mp3 ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8bc6597d176f1e81da4a.mp3\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/audio/l01.mp3?");

/***/ }),

/***/ "./src/audio/l02.mp3":
/*!***************************!*\
  !*** ./src/audio/l02.mp3 ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"29bddd782a4497952223.mp3\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/audio/l02.mp3?");

/***/ }),

/***/ "./src/audio/ly.mp3":
/*!**************************!*\
  !*** ./src/audio/ly.mp3 ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"605043e0ae46f69f0f63.mp3\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/audio/ly.mp3?");

/***/ }),

/***/ "./src/images/angler1.png":
/*!********************************!*\
  !*** ./src/images/angler1.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dd01b6f76810f26e4169.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/angler1.png?");

/***/ }),

/***/ "./src/images/angler2.png":
/*!********************************!*\
  !*** ./src/images/angler2.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"80b17e44b09cea710406.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/angler2.png?");

/***/ }),

/***/ "./src/images/drone.png":
/*!******************************!*\
  !*** ./src/images/drone.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"909febb8701c968847bf.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/drone.png?");

/***/ }),

/***/ "./src/images/fireExplosion.png":
/*!**************************************!*\
  !*** ./src/images/fireExplosion.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"41fa1713c560ac30966e.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/fireExplosion.png?");

/***/ }),

/***/ "./src/images/gears.png":
/*!******************************!*\
  !*** ./src/images/gears.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"417713ad667d9f805c68.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/gears.png?");

/***/ }),

/***/ "./src/images/hivewhale.png":
/*!**********************************!*\
  !*** ./src/images/hivewhale.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"df3ce0b105163b7cbfb8.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/hivewhale.png?");

/***/ }),

/***/ "./src/images/layer1.png":
/*!*******************************!*\
  !*** ./src/images/layer1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a19e7abb8e1a159bb41c.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/layer1.png?");

/***/ }),

/***/ "./src/images/layer2.png":
/*!*******************************!*\
  !*** ./src/images/layer2.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c81c41de2e7fa916fd14.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/layer2.png?");

/***/ }),

/***/ "./src/images/layer3.png":
/*!*******************************!*\
  !*** ./src/images/layer3.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c0522782a4a2068ca4b0.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/layer3.png?");

/***/ }),

/***/ "./src/images/layer4.png":
/*!*******************************!*\
  !*** ./src/images/layer4.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"49fe9efa103835834878.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/layer4.png?");

/***/ }),

/***/ "./src/images/lucky.png":
/*!******************************!*\
  !*** ./src/images/lucky.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c713a653053771188470.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/lucky.png?");

/***/ }),

/***/ "./src/images/megaBoom.png":
/*!*********************************!*\
  !*** ./src/images/megaBoom.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"995db84aaaa630ceff6a.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/megaBoom.png?");

/***/ }),

/***/ "./src/images/player00.png":
/*!*********************************!*\
  !*** ./src/images/player00.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"91c4d49ba838d6a6aa29.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/player00.png?");

/***/ }),

/***/ "./src/images/player01.png":
/*!*********************************!*\
  !*** ./src/images/player01.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c6a4354aac242f3c3f60.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/player01.png?");

/***/ }),

/***/ "./src/images/projctl2.png":
/*!*********************************!*\
  !*** ./src/images/projctl2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0332e851f3e6e7680f5c.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/projctl2.png?");

/***/ }),

/***/ "./src/images/projectile.png":
/*!***********************************!*\
  !*** ./src/images/projectile.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1518e241a58b6a249011.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/projectile.png?");

/***/ }),

/***/ "./src/images/ship.png":
/*!*****************************!*\
  !*** ./src/images/ship.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e0d83e053447028a3f6b.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/ship.png?");

/***/ }),

/***/ "./src/images/smokeExplosion.png":
/*!***************************************!*\
  !*** ./src/images/smokeExplosion.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c61024b53d798ee7de50.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/smokeExplosion.png?");

/***/ }),

/***/ "./src/images/startFon.png":
/*!*********************************!*\
  !*** ./src/images/startFon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fdf29acefbf5ffafa3f7.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/startFon.png?");

/***/ }),

/***/ "./src/images/whale3.png":
/*!*******************************!*\
  !*** ./src/images/whale3.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"719dd1b1265cab933404.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/whale3.png?");

/***/ }),

/***/ "./src/images/yoda2.png":
/*!******************************!*\
  !*** ./src/images/yoda2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2357c5af0203aeacea89.png\";\n\n//# sourceURL=webpack://game03spaceenemywebpack/./src/images/yoda2.png?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;