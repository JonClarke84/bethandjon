"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/submit";
exports.ids = ["pages/submit"];
exports.modules = {

/***/ "./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbW9uZ29kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsSUFBSSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO0lBQzVCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDO0FBQ2hFLENBQUM7QUFFRCxNQUFNQyxHQUFHLEdBQUdKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLE1BQU1HLE9BQU8sR0FBRyxFQUFFO0FBRWxCLElBQUlDLE1BQU07QUFDVixJQUFJQyxhQUFhO0FBRWpCLElBQUksQ0FBQ1AsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQztBQUM1RCxDQUFDO0FBRUQsSUFBSUgsSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ1EsTUFBTSxDQUFDQyxtQkFBbUIsRUFBRTtRQUMvQkgsTUFBTSxHQUFHLElBQUlQLGdEQUFXLENBQUNLLEdBQUcsRUFBRUMsT0FBTyxDQUFDO1FBQ3RDRyxNQUFNLENBQUNDLG1CQUFtQixHQUFHSCxNQUFNLENBQUNJLE9BQU8sRUFBRTtJQUMvQyxDQUFDO0lBQ0RILGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxtQkFBbUI7QUFDNUMsT0FBTyxFQUlOO0FBRUQsaUVBQWlFO0FBQ2pFLDhEQUE4RDtBQUM5RCxpRUFBZUYsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2JldGhhbmRqb24vLi9saWIvbW9uZ29kYi50cz8wNWJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcblxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpXG59XG5cbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXG5jb25zdCBvcHRpb25zID0ge31cblxubGV0IGNsaWVudFxubGV0IGNsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+XG5cbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgYWRkIHlvdXIgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWwnKVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxuICB9XG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZVxufSBlbHNlIHtcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcbn1cblxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/mongodb.ts\n");

/***/ }),

/***/ "./pages/submit.js":
/*!*************************!*\
  !*** ./pages/submit.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Submit),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/mongodb */ \"./lib/mongodb.ts\");\n\n\nfunction Submit({ menu  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/jonathan.clarke/Code - personal projects/bethandjon/pages/submit.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Submit your menu choices here\"\n            }, void 0, false, {\n                fileName: \"/Users/jonathan.clarke/Code - personal projects/bethandjon/pages/submit.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: menu.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: item.name\n                    }, item._id, false, {\n                        fileName: \"/Users/jonathan.clarke/Code - personal projects/bethandjon/pages/submit.js\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/jonathan.clarke/Code - personal projects/bethandjon/pages/submit.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jonathan.clarke/Code - personal projects/bethandjon/pages/submit.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\nasync function getServerSideProps() {\n    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    const db = client.db(\"bethandjon\");\n    const menu = await db.collection(\"food\").find({}).toArray();\n    return {\n        props: {\n            menu: JSON.parse(JSON.stringify(menu))\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdWJtaXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUEwQztBQUUzQixTQUFTQyxNQUFNLENBQUMsRUFBRUMsSUFBSSxHQUFFLEVBQUU7SUFDdkMscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFDLFFBQU07Ozs7O29CQUFLOzBCQUNmLDhEQUFDQyxHQUFDOzBCQUFDLCtCQUE2Qjs7Ozs7b0JBQUk7MEJBQ3BDLDhEQUFDQyxJQUFFOzBCQUNBSixJQUFJLENBQUNLLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLGlCQUNiLDhEQUFDQyxJQUFFO2tDQUNBRCxJQUFJLENBQUNFLElBQUk7dUJBREhGLElBQUksQ0FBQ0csR0FBRzs7Ozs0QkFFWixDQUNMOzs7OztvQkFDQzs7Ozs7O1lBQ0QsQ0FDUDtBQUNILENBQUM7QUFFTSxlQUFlQyxrQkFBa0IsR0FBRztJQUN6QyxNQUFNQyxNQUFNLEdBQUcsTUFBTWIsb0RBQWE7SUFDbEMsTUFBTWMsRUFBRSxHQUFHRCxNQUFNLENBQUNDLEVBQUUsQ0FBQyxZQUFZLENBQUM7SUFFbEMsTUFBTVosSUFBSSxHQUFHLE1BQU1ZLEVBQUUsQ0FBQ0MsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUNDLE9BQU8sRUFBRTtJQUUzRCxPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUNMaEIsSUFBSSxFQUFFaUIsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDbkIsSUFBSSxDQUFDLENBQUM7U0FDdkM7S0FDRjtBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZXRoYW5kam9uLy4vcGFnZXMvc3VibWl0LmpzPzIzYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uL2xpYi9tb25nb2RiXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VibWl0KHsgbWVudSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5TdWJtaXQ8L2gxPlxuICAgICAgPHA+U3VibWl0IHlvdXIgbWVudSBjaG9pY2VzIGhlcmU8L3A+XG4gICAgICA8dWw+XG4gICAgICAgIHttZW51Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uX2lkfT5cbiAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2VcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoXCJiZXRoYW5kam9uXCIpXG5cbiAgY29uc3QgbWVudSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJmb29kXCIpLmZpbmQoe30pLnRvQXJyYXkoKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1lbnU6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobWVudSkpXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsIlN1Ym1pdCIsIm1lbnUiLCJkaXYiLCJoMSIsInAiLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsIm5hbWUiLCJfaWQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjbGllbnQiLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsInByb3BzIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/submit.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/submit.js"));
module.exports = __webpack_exports__;

})();