/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/badUser.js":
/*!************************!*\
  !*** ./src/badUser.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return badUser; });\nconst badUsers = [] // string of user ids\r\n\r\nconst checkBadUser = (post) => {\r\n\tlet userId = post.getAttribute(\"data-user-id\")\r\n\r\n\tif (badUsers.indexOf(userId) != -1) {\r\n\t\tpost.parentElement.style.display = \"none\"\r\n\t}\r\n}\r\n\r\nfunction badUser() {\r\n\tsetInterval(() => {\r\n\t\tfor (let post of document.getElementsByTagName(\"article\")) {\r\n\t\t\tcheckBadUser(post)\r\n\t\t}\r\n\t}, 10)\r\n}\r\n\n\n//# sourceURL=webpack:///./src/badUser.js?");

/***/ }),

/***/ "./src/flairNewMember.js":
/*!*******************************!*\
  !*** ./src/flairNewMember.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return flairNewMember; });\nconst flair = `<span style=\"border: 1px solid pink;border-radius: 9999px;padding: 4px 8px;font-size: 10px;\">NEW MEMBER</span>`\r\n\r\nlet newMembers = []\r\nlet notNewMembers = []\r\n\r\nconst FETCH_CONFIG = {\r\n\tmethod: \"GET\",\r\n}\r\n\r\nconst CLASS_NAME = \"-!--checked-newmember-flair\"\r\n\r\nasync function handlePost(post) {\r\n\tif (!post) return false\r\n\r\n\tif (!post.classList.contains(CLASS_NAME)) {\r\n\t\tconst amNewMember = await isNewMember(\r\n\t\t\tpost.getAttribute(\"data-user-id\"),\r\n\t\t\tpost.getAttribute(\"data-post-id\")\r\n\t\t)\r\n\r\n\t\tif (amNewMember) {\r\n\t\t\tconst row = getChild(post, \"row\")\r\n\t\t\tconst body = getChild(row, \"topic-body\")\r\n\t\t\tconst meta = getChild(body, \"topic-meta-data\")\r\n\t\t\tconst names = getChild(meta, \"names\")\r\n\t\t\tnames.innerHTML += flair\r\n\t\t}\r\n\r\n\t\tpost.className += ` ${CLASS_NAME}`\r\n\t}\r\n}\r\n\r\nfunction getChild(element, className) {\r\n\tfor (let i = 0; i < element.childNodes.length; i++) {\r\n\t\tconst child = element.childNodes[i]\r\n\t\tif (child.classList.contains(className)) {\r\n\t\t\treturn child\r\n\t\t}\r\n\t}\r\n}\r\n\r\nasync function isNewMember(userId, postId) {\r\n\tif (newMembers.indexOf(userId) != -1) return true\r\n\tif (notNewMembers.indexOf(userId) != -1) return false\r\n\r\n\tconst res = await fetch(`https://devforum.roblox.com/posts/${postId}.json`, FETCH_CONFIG)\r\n\r\n\tif (!res.ok) {\r\n\t\treturn false // throw new Error(`HTTP error! Status: ${res.status}`)\r\n\t}\r\n\r\n\tconst blob = await res.blob()\r\n\tconst post = JSON.parse(await blob.text())\r\n\r\n\tif (post.trust_level == 1) {\r\n\t\tnewMembers.push(userId)\r\n\t\treturn true\r\n\t} else {\r\n\t\tnotNewMembers.push(userId)\r\n\t\treturn false\r\n\t}\r\n}\r\n\r\nfunction flairNewMember() {\r\n\tsetInterval(() => {\r\n\t\tfor (let post of document.getElementsByTagName(\"article\")) {\r\n\t\t\thandlePost(post).catch(console.error)\r\n\t\t}\r\n\t}, 1000)\r\n}\r\n\n\n//# sourceURL=webpack:///./src/flairNewMember.js?");

/***/ }),

/***/ "./src/flairOP.js":
/*!************************!*\
  !*** ./src/flairOP.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return flairOP; });\nconst flair = `<span style=\"border: 1px solid red;border-radius: 9999px;padding: 4px 8px;font-size: 10px;\">OP</span>`\r\n\r\nfunction handlePost(post) {\r\n\tif (post.parentElement.classList.contains(\"topic-owner\")) {\r\n\t\tif (post.classList.contains(\"-!-has-op-flair\")) return\r\n\r\n\t\tconst row = getChild(post, \"row\")\r\n\t\tconst body = getChild(row, \"topic-body\")\r\n\t\tconst meta = getChild(body, \"topic-meta-data\")\r\n\t\tconst names = getChild(meta, \"names\")\r\n\t\tnames.innerHTML += flair\r\n\r\n\t\tpost.className += \" -!-has-op-flair\"\r\n\t}\r\n}\r\n\r\nfunction getChild(element, className) {\r\n\tfor (let i = 0; i < element.childNodes.length; i++) {\r\n\t\tconst child = element.childNodes[i]\r\n\t\tif (child.classList.contains(className)) {\r\n\t\t\treturn child\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction flairOP() {\r\n\tsetInterval(() => {\r\n\t\tfor (let post of document.getElementsByTagName(\"article\")) {\r\n\t\t\thandlePost(post)\r\n\t\t}\r\n\t}, 10)\r\n}\r\n\n\n//# sourceURL=webpack:///./src/flairOP.js?");

/***/ }),

/***/ "./src/highlightBumps.js":
/*!*******************************!*\
  !*** ./src/highlightBumps.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return highlightBumps; });\nfunction handleGap(elem) {\r\n\tif (!elem.classList.contains(\"-!-processed-timegap\")) {\r\n\t\tconst child = elem.childNodes[1]\r\n\t\tconst text = child.innerText.toLowerCase()\r\n\t\tconst components = text.split(\" \")\r\n\t\tconst number = components[0]\r\n\t\tconst medium = components[1]\r\n\r\n\t\tlet baseSeconds = 1\r\n\r\n\t\tswitch (medium) {\r\n\t\t\tcase \"days\":\r\n\t\t\t\tbaseSeconds = 86400\r\n\t\t\t\tbreak\r\n\t\t\tcase \"months\":\r\n\t\t\t\tbaseSeconds = 2629800\r\n\t\t\t\tbreak\r\n\t\t\tcase \"years\":\r\n\t\t\t\tbaseSeconds = 31557600\r\n\t\t\t\tbreak\r\n\t\t}\r\n\r\n\t\tlet time = baseSeconds * number\r\n\t\tconsole.log(number, medium, baseSeconds, time)\r\n\r\n\t\tif (time >= 63115200) {\r\n\t\t\t// 2 years\r\n\t\t\tchild.style[\"font-weight\"] = \"bold\"\r\n\t\t\tchild.style.color = \"red\"\r\n\t\t} else if (time >= 31557600) {\r\n\t\t\t// 1 year\r\n\t\t\tchild.style.color = \"red\"\r\n\t\t} else if (time >= 2629800) {\r\n\t\t\t// 1 month\r\n\t\t\tchild.style.color = \"orange\"\r\n\t\t} else if (time >= 1209600) {\r\n\t\t\t// 2 weeks\r\n\t\t\tchild.style.color = \"lightblue\"\r\n\t\t} else if (time >= 604800) {\r\n\t\t\t// 1 week\r\n\t\t\tchild.style.color = \"pink\"\r\n\t\t}\r\n\r\n\t\telem.className += \" -!-processed-timegap\"\r\n\t}\r\n}\r\n\r\nfunction highlightBumps() {\r\n\tsetInterval(() => {\r\n\t\tfor (let elem of document.getElementsByClassName(\"time-gap\")) {\r\n\t\t\thandleGap(elem)\r\n\t\t}\r\n\t}, 10)\r\n}\r\n\n\n//# sourceURL=webpack:///./src/highlightBumps.js?");

/***/ }),

/***/ "./src/highlightStaff.js":
/*!*******************************!*\
  !*** ./src/highlightStaff.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return highlightStaff; });\nfunction handlePost(post) {\r\n\tif (post.parentElement.classList.contains(\"group-Roblox_Staff\")) {\r\n\t\tif (post.parentElement.classList.contains(\"moderator\")) return\r\n\r\n\t\tpost.parentElement.className += \" moderator\"\r\n\t}\r\n}\r\n\r\nfunction highlightStaff() {\r\n\tsetInterval(() => {\r\n\t\tfor (let post of document.getElementsByTagName(\"article\")) {\r\n\t\t\thandlePost(post)\r\n\t\t}\r\n\t}, 10)\r\n}\r\n\n\n//# sourceURL=webpack:///./src/highlightStaff.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _badUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badUser */ \"./src/badUser.js\");\n/* harmony import */ var _flairOP__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flairOP */ \"./src/flairOP.js\");\n/* harmony import */ var _highlightStaff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./highlightStaff */ \"./src/highlightStaff.js\");\n/* harmony import */ var _flairNewMember__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flairNewMember */ \"./src/flairNewMember.js\");\n/* harmony import */ var _highlightBumps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highlightBumps */ \"./src/highlightBumps.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nObject(_badUser__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\nObject(_flairOP__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\nObject(_highlightStaff__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\nObject(_flairNewMember__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\nObject(_highlightBumps__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });