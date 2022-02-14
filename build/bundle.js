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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Exo-Light.ttf */ \"./src/assets/fonts/Exo-Light.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Exo-Regular.ttf */ \"./src/assets/fonts/Exo-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Exo-Bold.ttf */ \"./src/assets/fonts/Exo-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/background.jpg */ \"./src/assets/img/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* \\r\\ncss - BEM\\r\\nDate: 2022-02-10\\r\\n*/\\r\\n\\r\\n/*Font EXO*/\\r\\n@font-face {\\r\\n  font-family: 'Exo-light';\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff2');\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n    font-family: 'Exo';\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff2');\\r\\n    font-style: normal;\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: 'Exo-bold';\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('woff2');\\r\\n}\\r\\n\\r\\n*{\\r\\n    font-family: 'Exo';\\r\\n    color: #fff;\\r\\n}\\r\\n\\r\\n:root {\\r\\n    --main-bg-color: #000;\\r\\n    --cblack: #000;\\r\\n    --cwhite: #fff;\\r\\n    --cred: #f00;\\r\\n    --cgray: #333;\\r\\n}\\r\\n\\r\\nbody{\\r\\n    margin: 0;\\r\\n    background: #000;\\r\\n}\\r\\nimg{\\r\\n    border: 0;\\r\\n}\\r\\na{\\r\\n    text-decoration: none;\\r\\n}\\r\\nh1,\\r\\nh2{\\r\\n    text-align: center;\\r\\n    font-weight: lighter;\\r\\n}\\r\\np{\\r\\n    font-family: 'Exo-bold';\\r\\n    font-size: 12px;\\r\\n    text-align: center;\\r\\n}\\r\\niframe{\\r\\n    width: 100%;\\r\\n    height: 300px;\\r\\n}\\r\\n.p14{\\r\\n    font-size: 14px;\\r\\n}\\r\\n.p32{\\r\\n    font-size: 32px;\\r\\n}\\r\\n.img-responsive{\\r\\n    width: 100%;\\r\\n}\\r\\n.uppercase{\\r\\n    text-transform: uppercase;\\r\\n}\\r\\n\\r\\n/*HEAD*/\\r\\nheader{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-around;\\r\\n    max-height: 100px;\\r\\n    padding:10px 0;\\r\\n    border-bottom: 3px solid var(--cred);\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    z-index: 10;\\r\\n    background: var(--cblack);\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n/*SECTION VIDEO*/\\r\\n.video-container{\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") no-repeat top center;\\r\\n    background-size: cover;\\r\\n    height: 500px;\\r\\n    margin-top: 88px;\\r\\n    padding: 50px 0px;\\r\\n    text-align: center;\\r\\n}\\r\\n.video-contador__next{\\r\\n    font-family: 'Exo-bold';\\r\\n    font-size: 32px;\\r\\n    padding-bottom: 25px;\\r\\n}\\r\\n.video-contador__list{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n    width: 100%;\\r\\n    margin-bottom: 35px;\\r\\n}\\r\\n.video-circle{\\r\\n    width: 34px;\\r\\n    padding: 4px 18px;\\r\\n    border: 2px solid var(--cwhite);\\r\\n    -webkit-border-radius: 50%;\\r\\n    -moz-border-radius: 50%;\\r\\n    border-radius: 50%;\\r\\n    text-transform: uppercase;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    margin: 0 5px;\\r\\n    font-family: 'Exo-bold';\\r\\n    font-size: 16px;\\r\\n}\\r\\n.video-circle__number{\\r\\n    font-family: 'Exo-bold';\\r\\n    font-size: 32px;\\r\\n}\\r\\n.video-display{\\r\\n    background: var(--cblack);\\r\\n    margin: 0 auto;\\r\\n    width: 532px;\\r\\n    height: 300px;\\r\\n}\\r\\n\\r\\n/*SECTION MENU*/\\r\\n.menu-container{\\r\\n    background: var(--cgray);\\r\\n    height: 300px;\\r\\n    padding: 25px 0px 50px;\\r\\n}\\r\\n.menu-list{\\r\\n    display: flex;\\r\\n    margin: auto 160px;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-evenly;\\r\\n    padding: 0;\\r\\n}\\r\\n.menu-list li{\\r\\n    display: inline-block;\\r\\n    cursor: pointer;\\r\\n    width: 180px;\\r\\n    height: 180px;\\r\\n    -webkit-border-radius: 50%;\\r\\n    -moz-border-radius: 50%;\\r\\n    border-radius: 50%;\\r\\n    margin: 5px;\\r\\n    position: relative;\\r\\n}\\r\\n.menu-list__imgPlay{\\r\\n    width: 180px;\\r\\n    height: 180px;\\r\\n}\\r\\n.menu-list__content{\\r\\n    background: var(--cred);\\r\\n    width: 140px;\\r\\n    text-align: center;\\r\\n    font-size: 14px;\\r\\n    padding: 52px 20px;\\r\\n    -webkit-border-radius: 50%;\\r\\n    -moz-border-radius: 50%;\\r\\n    border-radius: 50%;\\r\\n    transition: all 400ms ease-out;\\r\\n    opacity: 0;\\r\\n    visibility: hidden;\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n}\\r\\n.active>.menu-list__content,\\r\\n.menu-list li:hover>.menu-list__content{\\r\\n    opacity: 0.8;\\r\\n    visibility: visible;\\r\\n}\\r\\n.menu-list__text{\\r\\n    font-family: 'Exo-bold';\\r\\n    font-size: 14px;\\r\\n    text-align: center;\\r\\n    text-transform: uppercase;\\r\\n    padding: 5px 0;\\r\\n}\\r\\n/*li:hover >.menu-list__text{\\r\\n    color: var(--cred);\\r\\n}*/\\r\\n\\r\\n/*FOOTER*/\\r\\nfooter{\\r\\n    background: var(--cblack);\\r\\n    display: flex;\\r\\n    height: 120px;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-evenly;\\r\\n    align-items: center;\\r\\n    margin: 0 90px;\\r\\n}\\r\\nfooter div{\\r\\n    width: 177px;\\r\\n    text-align: center;\\r\\n    padding-bottom: 5px;\\r\\n}\\r\\n.footer-privacidad p{\\r\\n    font-size: 12px;\\r\\n}\\r\\n.footer-rrss__list{\\r\\n    display: flex;\\r\\n    padding: 0;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-evenly;\\r\\n    flex-wrap: nowrap;\\r\\n}\\r\\n.footer-rrss__list li{\\r\\n    display: inline-block;\\r\\n    margin: 0 10px;\\r\\n}\\r\\n\\r\\n/*RESPONSIVE*/\\r\\n/*Tablet*/\\r\\n@media (max-width: 900px) {\\r\\n    .menu-list{\\r\\n        margin: auto 15%;\\r\\n    }\\r\\n    .menu-list__imgPlay{\\r\\n        width: 150px;\\r\\n        height: 150px;\\r\\n    }\\r\\n    .menu-list__content{\\r\\n        width: 134px;\\r\\n        font-size: 9px;\\r\\n        padding: 56px 8px;\\r\\n    }\\r\\n}\\r\\n@media (max-width: 700px) {\\r\\n    .menu-list__imgPlay{\\r\\n        width: 110px;\\r\\n        height: 110px;\\r\\n    }\\r\\n    .menu-list__content{\\r\\n        width: 94px;\\r\\n        font-size: 8px;\\r\\n        padding: 38px 8px;\\r\\n    }\\r\\n}\\r\\n@media (max-width: 630px){\\r\\n    footer{\\r\\n        flex-direction: column;\\r\\n        height: 280px;\\r\\n    }\\r\\n    footer div{\\r\\n        width: auto;\\r\\n    }\\r\\n    .footer-privacidad p{\\r\\n        font-size: 20px;\\r\\n    }\\r\\n}\\r\\n/*Movil*/\\r\\n@media (max-width: 568px){\\r\\n    .video-display{\\r\\n        width: 98%;\\r\\n    }\\r\\n    .menu-list__imgPlay{\\r\\n        width: 80px;\\r\\n        height: 80px;\\r\\n    }\\r\\n    .menu-list__content{\\r\\n        width: 60px;\\r\\n        font-size: 5px;\\r\\n        padding: 30px 10px;\\r\\n    }\\r\\n    .slash{\\r\\n        display: none;\\r\\n    }\\r\\n}\\r\\n@media (max-width: 500px){\\r\\n    .p32{\\r\\n        font-size: 24px;\\r\\n    }\\r\\n    .menu-container{\\r\\n        height: 200px;\\r\\n    }\\r\\n    .menu-list__text{\\r\\n        font-size: 10px;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://claro-video/./src/assets/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://claro-video/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://claro-video/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://claro-video/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://claro-video/./src/assets/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://claro-video/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://claro-video/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://claro-video/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://claro-video/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://claro-video/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://claro-video/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/js/script.js":
/*!*********************************!*\
  !*** ./src/assets/js/script.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu),\n/* harmony export */   \"video\": () => (/* binding */ video),\n/* harmony export */   \"lim\": () => (/* binding */ lim),\n/* harmony export */   \"activeRemove\": () => (/* binding */ activeRemove),\n/* harmony export */   \"updateCountdown\": () => (/* binding */ updateCountdown),\n/* harmony export */   \"MILLISECONDS_OF_A_SECOND\": () => (/* binding */ MILLISECONDS_OF_A_SECOND)\n/* harmony export */ });\n/**\r\n * Javascript\r\n * Project: Claro-video / Claro-Sports\r\n * Date: 2022-02-10\r\n */\r\n\r\n//MENU---------------------------------------------------------------------------------------->\r\nlet menu = document.querySelector('[data-menu]'); // Selector of the menu\r\nlet video = {\r\n    1:'zpOULjyy-n8',\r\n    2:'MeMiezwvprg',\r\n    3:'Z5MoBm99w1Q',\r\n    4:'GUTt0qKUDyU'\r\n};\r\nlet lim = Object.keys(video).length;//Limit\r\n\r\n//Function that removes the active class\r\nfunction activeRemove(){\r\n    for (let i=1; i<=lim; i++) {\r\n        document.getElementById(i).classList.remove('active');\r\n    }\r\n}\r\n\r\n//COUNTER DOWN------------------------------------------------------------------------------------>\r\n\r\n//===\r\n// VARIABLES\r\n//===\r\nconst DATE_TARGET = new Date('03/13/2022 0:00 AM');\r\n// DOM for render\r\nconst SPAN_DAYS = document.querySelector('span#days');\r\nconst SPAN_HOURS = document.querySelector('span#hours');\r\nconst SPAN_MINUTES = document.querySelector('span#minutes');\r\nconst SPAN_SECONDS = document.querySelector('span#seconds');\r\n// Milliseconds for the calculations\r\nconst MILLISECONDS_OF_A_SECOND = 1000;\r\nconst MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;\r\nconst MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;\r\nconst MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;\r\n\r\n//===\r\n// FUNCTIONS\r\n//===\r\n\r\n/**\r\n * Method that updates the countdown and the sample\r\n */\r\nfunction updateCountdown() {\r\n    // Calcs\r\n    const NOW = new Date()\r\n    const DURATION = DATE_TARGET - NOW;\r\n    const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);\r\n    let REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);\r\n    if(REMAINING_HOURS<10){\r\n        REMAINING_HOURS = \"0\"+REMAINING_HOURS;\r\n    }\r\n    let REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);\r\n    if(REMAINING_MINUTES<10){\r\n        REMAINING_MINUTES = \"0\"+REMAINING_MINUTES;   \r\n    }\r\n    let REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);\r\n    if(REMAINING_SECONDS<10){\r\n        REMAINING_SECONDS = \"0\"+REMAINING_SECONDS;\r\n    }\r\n    // Thanks Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)\r\n\r\n    // Render\r\n    SPAN_DAYS.textContent = REMAINING_DAYS;\r\n    SPAN_HOURS.textContent = REMAINING_HOURS;\r\n    SPAN_MINUTES.textContent = REMAINING_MINUTES;\r\n    SPAN_SECONDS.textContent = REMAINING_SECONDS;\r\n}\r\n\r\n\r\n\r\n//END---------------------------------------------------------------------------------------->\r\n\n\n//# sourceURL=webpack://claro-video/./src/assets/js/script.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ \"./src/assets/css/style.css\");\n/* harmony import */ var _assets_js_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/script.js */ \"./src/assets/js/script.js\");\n\r\n\r\n\r\n//Function for the event click button\r\n_assets_js_script_js__WEBPACK_IMPORTED_MODULE_1__.menu.addEventListener('click', function(e){\r\n    (0,_assets_js_script_js__WEBPACK_IMPORTED_MODULE_1__.activeRemove)();\r\n    let id = e.path[1].id;//Get the id of the clicked element\r\n    let optVideo = _assets_js_script_js__WEBPACK_IMPORTED_MODULE_1__.video[id];//Option video\r\n    let selVideo = document.querySelector('#videoOption');\r\n    selVideo.innerHTML = `<iframe src=\"https://www.youtube.com/embed/${optVideo}?rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>`;\r\n    document.getElementById(id).classList.add('active');\r\n});\r\n\r\n//Countdown\r\n(0,_assets_js_script_js__WEBPACK_IMPORTED_MODULE_1__.updateCountdown)();\r\n// Refresh every second\r\nsetInterval(_assets_js_script_js__WEBPACK_IMPORTED_MODULE_1__.updateCountdown, _assets_js_script_js__WEBPACK_IMPORTED_MODULE_1__.MILLISECONDS_OF_A_SECOND);\r\n\n\n//# sourceURL=webpack://claro-video/./src/index.js?");

/***/ }),

/***/ "./src/assets/fonts/Exo-Bold.ttf":
/*!***************************************!*\
  !*** ./src/assets/fonts/Exo-Bold.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"73a25fd21fd573bb8955.ttf\";\n\n//# sourceURL=webpack://claro-video/./src/assets/fonts/Exo-Bold.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Exo-Light.ttf":
/*!****************************************!*\
  !*** ./src/assets/fonts/Exo-Light.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a54f47b47d8033777790.ttf\";\n\n//# sourceURL=webpack://claro-video/./src/assets/fonts/Exo-Light.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Exo-Regular.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Exo-Regular.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"609aaa0234675dc2ab1e.ttf\";\n\n//# sourceURL=webpack://claro-video/./src/assets/fonts/Exo-Regular.ttf?");

/***/ }),

/***/ "./src/assets/img/background.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/background.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f4b52a75e00a0b2de706.jpg\";\n\n//# sourceURL=webpack://claro-video/./src/assets/img/background.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;