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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n//import './chat_list.css';\n //import './chat_list.css'\n\nfunction main() {\n  console.log(localStorage);\n  var pathname = document.location.pathname;\n  var filename = pathname.split('/').slice(-1)[0];\n  console.log(filename);\n\n  if (filename === 'index.html' || filename === '') {\n    chat_index();\n  } else if (filename === 'chat_list.html') {\n    chat_list_f();\n  }\n}\n\nfunction chat_index() {\n  var chat = document.querySelector('.messagefield');\n  var form = document.querySelector('form');\n  var input = document.querySelector('.form-input');\n  var message = document.querySelector('.message');\n  getFromLocalStorage();\n  form.addEventListener('submit', handleSubmit);\n  form.addEventListener('keypress', handleKeyPress);\n\n  function handleSubmit(event) {\n    event.preventDefault();\n    sendMessage();\n    console.log('yo');\n  } // Обработчик Enter\n\n\n  function handleKeyPress(event) {\n    if (event.keyCode === 13) {\n      form.dispatchEvent(new Event('submit'));\n      sendMessage();\n    }\n  } // Добавляем в localStorage\n\n\n  function addToLocal(value) {\n    console.log(value);\n    var messages = localStorage.getItem(\"messages\") || \"[]\";\n    console.log(messages);\n    messages = JSON.parse(messages);\n    messages.push(value);\n    localStorage.setItem(\"messages\", JSON.stringify(messages));\n  } // Извлечь данные из LocalStorage\n\n\n  function getFromLocalStorage() {\n    var messages = localStorage.getItem('messages'); // Проверка на пустьоту\n\n    if (localStorage.getItem('messages') !== null) {\n      // При успехе просто отображаем наши сообщения из localStorage\n      messages = JSON.parse(messages);\n\n      var _iterator = _createForOfIteratorHelper(messages),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var _message = _step.value;\n\n          if (_message != undefined && _message[\"reciever\"] === \"Дженнифер\") {\n            createDiv(_message);\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    } else {\n      localStorage.setItem('messages', JSON.stringify([]));\n    }\n  } // отображение сообщения в чате\n\n\n  function createDiv(message) {\n    if (message !== {}) {\n      console.log(message); // формирования нового сообщения \n\n      var new_message_img_div = document.createElement('div');\n      new_message_img_div.className = \"atalk-im\";\n      var new_message_img = document.createElement('img');\n      new_message_img.src = \"https://i.pinimg.com/originals/7a/26/8f/7a268f7ce7e63295d5c26922335adda9.jpg\";\n      var new_message = document.createElement('div');\n      new_message.className = \"message message-right\";\n      var new_message_text = document.createElement('span');\n      new_message_text.className = \"message-text\";\n      new_message_text.innerHTML = message.text;\n      var new_message_meta = document.createElement('div');\n      new_message_meta.className = \"message-meta\";\n      var new_message_time = document.createElement('span');\n      new_message_time.className = \"message-time\";\n      new_message_time.innerHTML = message.time;\n      var new_message_status = document.createElement('span');\n      new_message_status.className = \"message-status\";\n      new_message_status.innerHTML = \"<span class='material-icons'>done_all</span>\";\n      console.log(new_message); // сборка нового сообщения\n\n      chat.append(new_message);\n      new_message.append(new_message_img_div);\n      new_message_img_div.append(new_message_img);\n      new_message.append(new_message_text);\n      new_message.append(new_message_meta);\n      new_message_meta.append(new_message_time);\n      new_message_meta.append(new_message_status);\n      console.log(new_message); //document.body.messagefield.appendChild(new_message);\n    }\n  } // Функция отсылки сообщения\n\n\n  function sendMessage() {\n    console.log('send'); // Проверка на пустоту\n\n    if (input.value === \"\") {\n      return;\n    } //узнаём время\n\n\n    var Data = new Date();\n    var hour = Data.getHours();\n    var minutes = Data.getMinutes();\n\n    if (minutes < 10) {\n      minutes = String(\"0\" + minutes);\n    } // составляем сообщение\n\n\n    var message = {\n      'text': input.value,\n      'reciever': \"Дженнифер\",\n      'time': hour + \":\" + minutes\n    }; // Добавляем в localStorage, создаём сообщение в чате и очищаем инпут\n\n    addToLocal(message);\n    createDiv(message); //document.querySelector('.form-input').value = \"\"\n\n    input.value = \"\";\n  }\n}\n\nfunction chat_list_f() {\n  var chat = document.querySelector('.chat-field');\n\n  function getLastMessage() {\n    var text = document.querySelector('.mes-content');\n    var meta = document.querySelector('.message-meta');\n    var messages = localStorage.getItem(\"messages\");\n\n    if (messages.length == []) {\n      var defaultText = \"\\n                <span class=\\\"message-name\\\">\\u0414\\u0436\\u0435\\u043D\\u043D\\u0438\\u0444\\u0435\\u0440</span>\\n                <span class=\\\"message-text\\\">\\u041F\\u0440\\u0438\\u0432\\u0435\\u0442, \\u0414\\u0436\\u0435\\u043D, \\u0432\\u0441\\u0451 \\u043D\\u043E\\u0440\\u043C\\u0430\\u043B\\u044C\\u043D\\u043E, \\u043F\\u0440\\u043E\\u0441\\u0442\\u043E \\u043D\\u0430 \\u0440\\u0430\\u0431\\u043E\\u0442\\u0435 \\u0437\\u0430\\u0432\\u0430\\u043B.</span>\\n            \";\n      var defaultMeta = \"\\n                <span class=\\\"message-time\\\">10:53</span>\\n                <span class=\\\"message-status\\\">\\n                    <i class=\\\"material-icons\\\">done_all</i>\\n                </span>\\n            \";\n      text.innerHTML = defaultText;\n      meta.innerHTML = defaultMeta;\n      return;\n    }\n\n    messages = localStorage.getItem(\"messages\");\n    messages = JSON.parse(messages); //messages.sort((a, b) => {return a[\"time\"] < b[\"time\"]})\n\n    console.log(\"yes\");\n    var lastMessage = messages.at(-1);\n    console.log(lastMessage);\n    var updateChatInfo = \"\\n                <span class=\\\"message-name\\\">\" + String(lastMessage['reciever']) + \"</span>\\n                <span class=\\\"message-text\\\">\" + String(lastMessage['text']) + \"</span>\\n            \";\n    var updateChatMeta = \"\\n                <span class=\\\"message-time\\\">\" + String(lastMessage['time']) + \"</span>\\n                <span class=\\\"message-status\\\">\\n                    <i class=\\\"material-icons\\\">done_all</i>\\n                </span>\\n            \"; //`+String(lastMessage['reciever'])+`\n\n    console.log(updateChatInfo);\n    console.log(updateChatMeta);\n    console.log(text);\n    console.log(meta);\n    text.innerHTML = updateChatInfo;\n    meta.innerHTML = updateChatMeta;\n    console.log(messages);\n  }\n\n  console.log(\"yes\");\n  getLastMessage();\n}\n\nmain();\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });