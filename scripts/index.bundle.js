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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n//import \"../css/index.css\"\nvar chat = document.querySelector('.messagefield');\nvar form = document.querySelector('form');\nvar input = document.querySelector('.form-input');\nvar message = document.querySelector('.message');\ngetFromLocalStorage();\nform.addEventListener('submit', this.handleSubmit.bind(this));\nform.addEventListener('keypress', this.handleKeyPress.bind(this));\n\nfunction handleSubmit(event) {\n  event.preventDefault();\n  sendMessage();\n  console.log(localStorage);\n} // Добавляем в localStorage\n\n\nfunction addToLocal(value) {\n  console.log(value);\n  var messages = localStorage.getItem(\"messages\") || \"[]\";\n  console.log(messages);\n  messages = JSON.parse(messages);\n  messages.push(value);\n  localStorage.setItem(\"messages\", JSON.stringify(messages));\n} // Обработчик Enter\n\n\nfunction handleKeyPress(event) {\n  if (event.keyCode === 13 & input.value !== \"\") {\n    event.preventDefault();\n    sendMessage(); //   form.dispatchEvent(new Event('submit'));\n  }\n} // Извлечь данные из LocalStorage\n\n\nfunction getFromLocalStorage() {\n  var messages = localStorage.getItem('messages'); // Проверка на пустьоту\n\n  if (localStorage.getItem('messages') !== null) {\n    // При успехе просто отображаем наши сообщения из localStorage\n    messages = JSON.parse(messages);\n\n    var _iterator = _createForOfIteratorHelper(messages),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var _message = _step.value;\n\n        if (_message != undefined && _message[\"reciever\"] === \"Дженнифер\") {\n          createDiv(_message);\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  } else {\n    localStorage.setItem('messages', JSON.stringify([]));\n  }\n} // отображение сообщения в чате\n\n\nfunction createDiv(message) {\n  if (message !== {}) {\n    console.log(message); // формирования нового сообщения \n\n    var new_message_img_div = document.createElement('div');\n    new_message_img_div.className = \"atalk-im\";\n    var new_message_img = document.createElement('img');\n    new_message_img.src = \"/src/photos/Tom.jpg\";\n    var new_message = document.createElement('div');\n    new_message.className = \"message message-right\";\n    var new_message_text = document.createElement('span');\n    new_message_text.className = \"message-text\";\n    new_message_text.innerHTML = message.text;\n    var new_message_meta = document.createElement('div');\n    new_message_meta.className = \"message-meta\";\n    var new_message_time = document.createElement('span');\n    new_message_time.className = \"message-time\";\n    new_message_time.innerHTML = message.time;\n    var new_message_status = document.createElement('span');\n    new_message_status.className = \"message-status\";\n    new_message_status.innerHTML = \"<span class='material-icons'>done_all</span>\";\n    console.log(new_message); // сборка нового сообщения\n\n    chat.append(new_message);\n    new_message.append(new_message_img_div);\n    new_message_img_div.append(new_message_img);\n    new_message.append(new_message_text);\n    new_message.append(new_message_meta);\n    new_message_meta.append(new_message_time);\n    new_message_meta.append(new_message_status);\n    console.log(new_message); //document.body.messagefield.appendChild(new_message);\n  }\n} // Функция отсылки сообщения\n\n\nfunction sendMessage() {\n  // Проверка на пустоту\n  if (input.value === \"\") {\n    return;\n  } //узнаём время\n\n\n  Data = new Date();\n  var hour = Data.getHours();\n  var minutes = Data.getMinutes();\n\n  if (minutes < 10) {\n    minutes = String(\"0\" + minutes);\n  } // составляем сообщение\n\n\n  var message = {\n    'text': input.value,\n    'reciever': \"Дженнифер\",\n    'time': hour + \":\" + minutes\n  }; // Добавляем в localStorage, создаём сообщение в чате и очищаем инпут\n\n  addToLocal(message);\n  createDiv(message);\n  input.value = \"\";\n}\n\n//# sourceURL=webpack:///./scripts/index.js?");

/***/ })

/******/ });