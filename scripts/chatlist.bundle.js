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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/chat_list.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/chat_list.js":
/*!******************************!*\
  !*** ./scripts/chat_list.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var chat = document.querySelector('.chat-field'); //chat.addEventListener('click', changePage.bind(this))\n\nfunction changePage() {\n  window.location.href = './index.html';\n}\n\nfunction listeningEvents() {}\n\nfunction createNewChat() {}\n\nfunction getLastMessage() {\n  var text = document.querySelector('.mes-content');\n  var meta = document.querySelector('.message-meta');\n  var messages = localStorage.getItem(\"messages\");\n\n  if (messages.length == []) {\n    var defaultText = \"\\n            <span class=\\\"message-name\\\">\\u0414\\u0436\\u0435\\u043D\\u043D\\u0438\\u0444\\u0435\\u0440</span>\\n            <span class=\\\"message-text\\\">\\u041F\\u0440\\u0438\\u0432\\u0435\\u0442, \\u0414\\u0436\\u0435\\u043D, \\u0432\\u0441\\u0451 \\u043D\\u043E\\u0440\\u043C\\u0430\\u043B\\u044C\\u043D\\u043E, \\u043F\\u0440\\u043E\\u0441\\u0442\\u043E \\u043D\\u0430 \\u0440\\u0430\\u0431\\u043E\\u0442\\u0435 \\u0437\\u0430\\u0432\\u0430\\u043B.</span>\\n        \";\n    var defaultMeta = \"\\n            <span class=\\\"message-time\\\">10:53</span>\\n            <span class=\\\"message-status\\\">\\n                <i class=\\\"material-icons\\\">done_all</i>\\n            </span>\\n        \";\n    text.innerHTML = defaultText;\n    meta.innerHTML = defaultMeta;\n    return;\n  }\n\n  messages = localStorage.getItem(\"messages\");\n  messages = JSON.parse(messages); //messages.sort((a, b) => {return a[\"time\"] < b[\"time\"]})\n\n  console.log(\"yes\");\n  var lastMessage = messages.at(-1);\n  console.log(lastMessage);\n  var updateChatInfo = \"\\n            <span class=\\\"message-name\\\">\" + String(lastMessage['reciever']) + \"</span>\\n            <span class=\\\"message-text\\\">\" + String(lastMessage['text']) + \"</span>\\n        \";\n  var updateChatMeta = \"\\n            <span class=\\\"message-time\\\">\" + String(lastMessage['time']) + \"</span>\\n            <span class=\\\"message-status\\\">\\n                <i class=\\\"material-icons\\\">done_all</i>\\n            </span>\\n        \"; //`+String(lastMessage['reciever'])+`\n\n  console.log(updateChatInfo);\n  console.log(updateChatMeta);\n  console.log(text);\n  console.log(meta);\n  text.innerHTML = updateChatInfo;\n  meta.innerHTML = updateChatMeta;\n  console.log(messages);\n}\n\nconsole.log(\"yes\");\ngetLastMessage();\n\n//# sourceURL=webpack:///./scripts/chat_list.js?");

/***/ })

/******/ });