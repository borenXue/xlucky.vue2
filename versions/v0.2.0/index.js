module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("segment-js");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("d3-ease");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("xtools_js");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "xtools_js"
var external_xtools_js_ = __webpack_require__(4);

// CONCATENATED MODULE: ./src/filters.ts
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // eslint-disable-next-line max-params

function filterArray(id, arr) {
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'name';
  var emptyDesc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  if (id === null || id === undefined) return emptyDesc;

  var _iterator = _createForOfIteratorHelper(arr),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      if (item[key] === id) return item[name];
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return emptyDesc || id;
} // eslint-disable-next-line max-params

function filterArrayMulti(idList, arr) {
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'name';
  var separator = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ', ';
  var emptyDesc = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
  var str = '';

  for (var i = 0; i < idList.length; i++) {
    var value = filterArray(idList[i], arr, key, name, emptyDesc);
    str += value;

    if (i !== idList.length - 1) {
      str += separator;
    }
  }

  return str;
}
function filterTime(value, format) {
  return Object(external_xtools_js_["formatDate"])(value, format || 'YYYY-MM-DD HH:mm:ss');
}
function filterMoney(value, config) {
  return Number.isNaN(Number(value)) ? value : Object(external_xtools_js_["formatMoney"])(Number(value), config);
}
function filterBoolean(value) {
  var trueDesc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '是';
  var falseDesc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '否';
  return value ? trueDesc : falseDesc;
}
// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(1);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// EXTERNAL MODULE: ./components/hello-world/hello-world.scss
var hello_world = __webpack_require__(5);

// CONCATENATED MODULE: ./components/hello-world/hello-world.tsx
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var HelloWorld = /*#__PURE__*/function (_Vue) {
  _inherits(HelloWorld, _Vue);

  var _super = _createSuper(HelloWorld);

  function HelloWorld() {
    _classCallCheck(this, HelloWorld);

    return _super.apply(this, arguments);
  }

  _createClass(HelloWorld, [{
    key: "render",
    value: function render(h) {
      return h("div", {
        "attrs": {
          "className": 'xl-hello-world'
        }
      }, ["Hello Wrold ..."]);
    }
  }]);

  return HelloWorld;
}(external_vue_property_decorator_["Vue"]);

HelloWorld = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({})], HelloWorld);
/* harmony default export */ var hello_world_hello_world = (HelloWorld);
// EXTERNAL MODULE: ./components/file-download/file-download.scss
var file_download = __webpack_require__(6);

// CONCATENATED MODULE: ./components/file-download/file-download.tsx
function file_download_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { file_download_typeof = function _typeof(obj) { return typeof obj; }; } else { file_download_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return file_download_typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function file_download_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function file_download_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function file_download_createClass(Constructor, protoProps, staticProps) { if (protoProps) file_download_defineProperties(Constructor.prototype, protoProps); if (staticProps) file_download_defineProperties(Constructor, staticProps); return Constructor; }

function file_download_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) file_download_setPrototypeOf(subClass, superClass); }

function file_download_setPrototypeOf(o, p) { file_download_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return file_download_setPrototypeOf(o, p); }

function file_download_createSuper(Derived) { var hasNativeReflectConstruct = file_download_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = file_download_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = file_download_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return file_download_possibleConstructorReturn(this, result); }; }

function file_download_possibleConstructorReturn(self, call) { if (call && (file_download_typeof(call) === "object" || typeof call === "function")) { return call; } return file_download_assertThisInitialized(self); }

function file_download_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function file_download_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function file_download_getPrototypeOf(o) { file_download_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return file_download_getPrototypeOf(o); }






var file_download_FileDownload = /*#__PURE__*/function (_Vue) {
  file_download_inherits(FileDownload, _Vue);

  var _super = file_download_createSuper(FileDownload);

  function FileDownload() {
    var _this;

    file_download_classCallCheck(this, FileDownload);

    _this = _super.apply(this, arguments);
    _this.downloading = false;
    return _this;
  }

  file_download_createClass(FileDownload, [{
    key: "fileDownload",
    value: function fileDownload() {
      var _this2 = this;

      this.downloading = true;

      Object(external_xtools_js_["fileDownload"])({
        url: this.url,
        params: this.params,
        fileName: this.name,
        withCredentials: this.credentials,
        headers: this.headers,
        successCb: function successCb() {
          _this2.$emit('success');
        },
        errorCb: function errorCb(err) {
          if (typeof _this2.errorCb === 'function') _this2.errorCb(err);

          _this2.$emit('error', err);
        },
        finalCb: function finalCb(err) {
          _this2.downloading = false;

          _this2.$emit('end', err);
        },
        method: this.method,
        data: this.data,
        isFormData: this.formData
      });
    }
  }, {
    key: "render",
    value: function render(h) {
      return h("el-button", {
        "class": 'xv-file-download',
        "attrs": _objectSpread({
          "loading": this.downloading,
          "type": this.type
        }, this.$attrs),
        "on": {
          "click": this.fileDownload
        }
      }, [this.text]);
    }
  }]);

  return FileDownload;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  "default": '下载'
})], file_download_FileDownload.prototype, "text", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  "default": 'primary'
})], file_download_FileDownload.prototype, "type", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])()], file_download_FileDownload.prototype, "url", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  "default": false
})], file_download_FileDownload.prototype, "formData", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  "default": 'GET'
})], file_download_FileDownload.prototype, "method", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])()], file_download_FileDownload.prototype, "name", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])()], file_download_FileDownload.prototype, "params", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])()], file_download_FileDownload.prototype, "data", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  "default": true
})], file_download_FileDownload.prototype, "credentials", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])()], file_download_FileDownload.prototype, "headers", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])()], file_download_FileDownload.prototype, "errorCb", void 0);

file_download_FileDownload = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({})], file_download_FileDownload);
/* harmony default export */ var file_download_file_download = (file_download_FileDownload);
// EXTERNAL MODULE: external "segment-js"
var external_segment_js_ = __webpack_require__(2);
var external_segment_js_default = /*#__PURE__*/__webpack_require__.n(external_segment_js_);

// EXTERNAL MODULE: external "d3-ease"
var external_d3_ease_ = __webpack_require__(3);

// EXTERNAL MODULE: ./components/switch-controller/switch-controller.scss
var switch_controller = __webpack_require__(7);

// CONCATENATED MODULE: ./components/switch-controller/switch-controller.tsx
function switch_controller_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { switch_controller_typeof = function _typeof(obj) { return typeof obj; }; } else { switch_controller_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return switch_controller_typeof(obj); }

function switch_controller_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function switch_controller_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function switch_controller_createClass(Constructor, protoProps, staticProps) { if (protoProps) switch_controller_defineProperties(Constructor.prototype, protoProps); if (staticProps) switch_controller_defineProperties(Constructor, staticProps); return Constructor; }

function switch_controller_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) switch_controller_setPrototypeOf(subClass, superClass); }

function switch_controller_setPrototypeOf(o, p) { switch_controller_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return switch_controller_setPrototypeOf(o, p); }

function switch_controller_createSuper(Derived) { var hasNativeReflectConstruct = switch_controller_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = switch_controller_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = switch_controller_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return switch_controller_possibleConstructorReturn(this, result); }; }

function switch_controller_possibleConstructorReturn(self, call) { if (call && (switch_controller_typeof(call) === "object" || typeof call === "function")) { return call; } return switch_controller_assertThisInitialized(self); }

function switch_controller_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function switch_controller_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function switch_controller_getPrototypeOf(o) { switch_controller_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return switch_controller_getPrototypeOf(o); }







var switch_controller_SwitchController = /*#__PURE__*/function (_Vue) {
  switch_controller_inherits(SwitchController, _Vue);

  var _super = switch_controller_createSuper(SwitchController);

  function SwitchController() {
    var _this;

    switch_controller_classCallCheck(this, SwitchController);

    _this = _super.apply(this, arguments);
    _this.beginAc = 80;
    _this.endAc = 320;
    _this.beginB = 80;
    _this.endB = 320; // 仅用于动画结束事件的计算

    _this.animationTimes = 0;
    _this.animationType = undefined;
    return _this;
  }

  switch_controller_createClass(SwitchController, [{
    key: "mounted",
    value: function mounted() {
      if (this.value === true) {
        this.segmentA = new external_segment_js_default.a(this.$refs.pathA, '100% - 545', '100% - 305');
        this.segmentB = new external_segment_js_default.a(this.$refs.pathB, this.beginB + 120, this.endB - 120);
        this.segmentC = new external_segment_js_default.a(this.$refs.pathC, '100% - 545', '100% - 305');
      } else {
        this.segmentA = new external_segment_js_default.a(this.$refs.pathA, this.beginAc, this.endAc);
        this.segmentB = new external_segment_js_default.a(this.$refs.pathB, this.beginB, this.endB);
        this.segmentC = new external_segment_js_default.a(this.$refs.pathC, this.beginAc, this.endAc);
      }
    }
  }, {
    key: "toggle",
    value: function toggle(opened, duration) {
      var emit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var open = typeof opened === 'boolean' ? opened : !this.value;

      if (open) {
        this.open(duration, emit);
      } else {
        this.close(duration, emit);
      }
    }
  }, {
    key: "open",
    value: function open(duration) {
      var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.tryEmitEnd(this.animationType, true, emit);
      this.animationTimes = 3;
      this.animationType = 'open';
      var currentDuration = typeof duration === 'number' ? duration / 1000 : this.duration / 1000;
      this.openAc(this.segmentA, currentDuration, emit);
      this.openB(currentDuration, emit);
      this.openAc(this.segmentC, currentDuration, emit);

      if (emit) {
        this.$emit('update', true);
        this.$emit('animation-start', 'open');
      }
    }
  }, {
    key: "close",
    value: function close(duration) {
      var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.tryEmitEnd(this.animationType, true, emit);
      this.animationTimes = 3;
      this.animationType = 'close';
      var currentDuration = typeof duration === 'number' ? duration / 1000 : this.duration / 1000;
      this.closeAc(this.segmentA, currentDuration, emit);
      this.closeB(currentDuration, emit);
      this.closeAc(this.segmentC, currentDuration, emit);

      if (emit) {
        this.$emit('update', false);
        this.$emit('animation-start', 'close');
      }
    }
  }, {
    key: "openAc",
    value: function openAc(segment, duration) {
      var _this2 = this;

      var emit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      segment.draw('80% - 240', '80%', 0.3 * duration, {
        delay: 0.1 * duration,
        callback: function callback() {
          segment.draw('100% - 545', '100% - 305', 0.6 * duration, {
            easing: external_d3_ease_["easeElasticOut"],
            callback: function callback() {
              return _this2.tryEmitEnd('open', false, emit);
            }
          });
        }
      });
    }
  }, {
    key: "openB",
    value: function openB(duration) {
      var _this3 = this;

      var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.segmentB.draw(this.beginB - 60, this.endB + 60, 0.15 * duration, {
        callback: function callback() {
          _this3.segmentB.draw(_this3.beginB + 120, _this3.endB - 120, 0.35 * duration, {
            easing: external_d3_ease_["easeBounceOut"],
            callback: function callback() {
              return _this3.tryEmitEnd('open', false, emit);
            }
          });
        }
      });
    }
  }, {
    key: "closeAc",
    value: function closeAc(segment, duration) {
      var _this4 = this;

      var emit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      segment.draw('90% - 240', '90%', 0.06 * duration, {
        easing: external_d3_ease_["easeElasticIn"],
        callback: function callback() {
          segment.draw('20% - 240', '20%', 0.27 * duration, {
            callback: function callback() {
              segment.draw(_this4.beginAc, _this4.endAc, 0.67 * duration, {
                easing: external_d3_ease_["easeElasticOut"],
                callback: function callback() {
                  return _this4.tryEmitEnd('close', false, emit);
                }
              });
            }
          });
        }
      });
    }
  }, {
    key: "closeB",
    value: function closeB(duration) {
      var _this5 = this;

      var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.segmentB.draw(this.beginB, this.endB, 0.85 * duration, {
        delay: 0.15 * duration,
        easing: external_d3_ease_["easeElasticOut"],
        callback: function callback() {
          return _this5.tryEmitEnd('close', false, emit);
        }
      });
    }
  }, {
    key: "tryEmitEnd",
    value: function tryEmitEnd(type) {
      var forceEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var emit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (forceEnd) {
        if (type && this.animationTimes > 0 && emit) {
          this.$emit('animation-end', type);
        }

        this.animationTimes = 0;
        this.animationType = undefined;
        return;
      }

      --this.animationTimes;

      if (this.animationTimes === 0) {
        this.animationType = undefined;
        if (emit) this.$emit('animation-end', type);
      }
    }
  }, {
    key: "render",
    value: function render(h) {
      return h("div", {
        "class": 'xv-switch-controller',
        "style": this.styleComponent
      }, [h("div", {
        "ref": 'btn',
        "class": 'xv-switch-controller--btn',
        "on": {
          "click": this.toggle
        }
      }), h("svg", {
        "attrs": {
          "width": '1000px',
          "height": '1000px'
        },
        "style": this.styleSvg
      }, [h("path", {
        "ref": 'pathA',
        "style": this.styleSvgPath,
        "attrs": {
          "d": "\n              M 300 400\n              L 700 400\n              C 900 400 900 750 600 850\n              A 400 400 0 0 1 200 200\n              L 800 800\n            "
        }
      }), h("path", {
        "ref": 'pathB',
        "attrs": {
          "d": 'M 300 500 L 700 500'
        },
        "style": this.styleSvgPath
      }), h("path", {
        "ref": 'pathC',
        "style": this.styleSvgPath,
        "attrs": {
          "d": "\n              M 700 600\n              L 300 600\n              C 100 600 100 200 400 150\n              A 400 380 0 1 1 200 800\n              L 800 200\n            "
        }
      })])]);
    }
  }, {
    key: "styleComponent",
    get: function get() {
      var size = this.size;
      return {
        width: "".concat(size, "px"),
        height: "".concat(size, "px"),
        minWidth: "".concat(size, "px")
      };
    }
  }, {
    key: "styleSvg",
    get: function get() {
      var scale = this.size / 1000;
      return {
        transform: "scale(".concat(scale, ")")
      }; // return `
      //   -webkit-transform: scale(${scale});
      //   -moz-transform: scale(${scale});
      //   -ms-transform: scale(${scale});
      //   -o-transform: scale(${scale});
      //   transform: scale(${scale});
      // `;
    }
  }, {
    key: "styleSvgPath",
    get: function get() {
      var strokeWidth = this.lineWidth * (1000 / this.size);
      return {
        stroke: this.color,
        strokeWidth: "".concat(strokeWidth, "px")
      };
    }
  }]);

  return SwitchController;
}(external_vue_property_decorator_["Vue"]);

switch_controller_SwitchController = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  props: {
    value: {
      type: Boolean,
      "default": true
    },
    duration: {
      type: Number,
      "default": 800
    },
    // 样式相关
    size: {
      type: Number,
      "default": 50
    },
    color: {
      type: String,
      "default": '#304156'
    },
    lineWidth: {
      type: Number,
      "default": 3
    }
  },
  model: {
    prop: 'value',
    event: 'update'
  }
})], switch_controller_SwitchController);
/* harmony default export */ var switch_controller_switch_controller = (switch_controller_SwitchController);
// EXTERNAL MODULE: ./components/helper/bread-crumb/bread-crumb.scss
var bread_crumb = __webpack_require__(8);

// CONCATENATED MODULE: ./components/helper/bread-crumb/BreadCrumb.tsx
function BreadCrumb_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BreadCrumb_typeof = function _typeof(obj) { return typeof obj; }; } else { BreadCrumb_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BreadCrumb_typeof(obj); }

function BreadCrumb_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BreadCrumb_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BreadCrumb_createClass(Constructor, protoProps, staticProps) { if (protoProps) BreadCrumb_defineProperties(Constructor.prototype, protoProps); if (staticProps) BreadCrumb_defineProperties(Constructor, staticProps); return Constructor; }

function BreadCrumb_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BreadCrumb_setPrototypeOf(subClass, superClass); }

function BreadCrumb_setPrototypeOf(o, p) { BreadCrumb_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BreadCrumb_setPrototypeOf(o, p); }

function BreadCrumb_createSuper(Derived) { var hasNativeReflectConstruct = BreadCrumb_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = BreadCrumb_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = BreadCrumb_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return BreadCrumb_possibleConstructorReturn(this, result); }; }

function BreadCrumb_possibleConstructorReturn(self, call) { if (call && (BreadCrumb_typeof(call) === "object" || typeof call === "function")) { return call; } return BreadCrumb_assertThisInitialized(self); }

function BreadCrumb_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BreadCrumb_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function BreadCrumb_getPrototypeOf(o) { BreadCrumb_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BreadCrumb_getPrototypeOf(o); }





var BreadCrumb = /*#__PURE__*/function (_Vue) {
  BreadCrumb_inherits(BreadCrumb, _Vue);

  var _super = BreadCrumb_createSuper(BreadCrumb);

  function BreadCrumb() {
    BreadCrumb_classCallCheck(this, BreadCrumb);

    return _super.apply(this, arguments);
  }

  BreadCrumb_createClass(BreadCrumb, [{
    key: "render",
    value: function render(h) {
      return h("el-breadcrumb", {
        "class": 'xv-layout-breadcrumb',
        "attrs": {
          "separator-class": 'el-icon-arrow-right'
        }
      }, [h("transition-group", {
        "attrs": {
          "name": 'xv-breadcrumb',
          "tag": 'p'
        }
      }, [this.breadcrumbList.map(function (item) {
        return h("el-breadcrumb-item", {
          "key": item.index || Math.random()
        }, [item.isHome ? h("router-link", {
          "attrs": {
            "tag": 'a',
            "to": item.path
          }
        }, [item.label]) : h("span", [item.label])]);
      })])]);
    }
  }, {
    key: "breadcrumbList",
    get: function get() {
      var list = [];
      this.$route.matched.forEach(function (item) {
        list.push({
          // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
          label: item.meta && item.meta.title ? item.meta.title : '',
          path: typeof item.path === 'string' ? item.path : item.path.path
        });
      });

      if (list.length > 0 && list[0].path !== this.homePath) {
        list.unshift({
          label: this.homeLabel,
          path: this.homePath
        });
      }

      return list;
    }
  }]);

  return BreadCrumb;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  "default": '/'
})], BreadCrumb.prototype, "homePath", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  "default": '首页'
})], BreadCrumb.prototype, "homeLabel", void 0);

BreadCrumb = Object(external_tslib_["__decorate"])([external_vue_property_decorator_["Component"]], BreadCrumb);
/* harmony default export */ var bread_crumb_BreadCrumb = (BreadCrumb);
// EXTERNAL MODULE: ./components/layout-head-left/layout-head-left.scss
var layout_head_left = __webpack_require__(9);

// CONCATENATED MODULE: ./components/helper/helper.ts
function debug() {
  if (window.xluckyDebug) {
    var _console;

    for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    // eslint-disable-next-line no-console
    (_console = console).log.apply(_console, ['【xlucky debug】:'].concat(rest));
  }
}
function getBG() {
  var bgArray = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#f1c40f', '#e67e22', '#e74c3c', '#eca0f1', '#95a5a6', '#f39c12', '#d35400', '#c0392b', '#bdc3c7', '#7f8c8d'];
  return bgArray[Math.floor(Math.random() * bgArray.length)];
}
// EXTERNAL MODULE: ./components/helper/nav-bar/nav-bar.scss
var nav_bar = __webpack_require__(10);

// CONCATENATED MODULE: ./components/helper/nav-bar/NavBar.tsx
function NavBar_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NavBar_typeof = function _typeof(obj) { return typeof obj; }; } else { NavBar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NavBar_typeof(obj); }

function NavBar_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = NavBar_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function NavBar_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return NavBar_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return NavBar_arrayLikeToArray(o, minLen); }

function NavBar_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function NavBar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NavBar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NavBar_createClass(Constructor, protoProps, staticProps) { if (protoProps) NavBar_defineProperties(Constructor.prototype, protoProps); if (staticProps) NavBar_defineProperties(Constructor, staticProps); return Constructor; }

function NavBar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NavBar_setPrototypeOf(subClass, superClass); }

function NavBar_setPrototypeOf(o, p) { NavBar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NavBar_setPrototypeOf(o, p); }

function NavBar_createSuper(Derived) { var hasNativeReflectConstruct = NavBar_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = NavBar_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = NavBar_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return NavBar_possibleConstructorReturn(this, result); }; }

function NavBar_possibleConstructorReturn(self, call) { if (call && (NavBar_typeof(call) === "object" || typeof call === "function")) { return call; } return NavBar_assertThisInitialized(self); }

function NavBar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NavBar_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function NavBar_getPrototypeOf(o) { NavBar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NavBar_getPrototypeOf(o); }






var NavBar_NavBar = /*#__PURE__*/function (_Vue) {
  NavBar_inherits(NavBar, _Vue);

  var _super = NavBar_createSuper(NavBar);

  function NavBar() {
    var _this;

    NavBar_classCallCheck(this, NavBar);

    for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(rest));
    _this.currentActive = '';
    _this.sidebarTree = []; // 顶部滑动相关

    _this.hideScrollLeftBtn = true;
    _this.hideScrollRightBtn = true;
    debug('constructor menuTree=', _this.menuTree);
    return _this;
  }

  NavBar_createClass(NavBar, [{
    key: "setDefaultActive",
    value: function setDefaultActive() {
      var defaultActiveIndex = ''; // eslint-disable-next-line

      if (this.$route && this.$route.path) {
        defaultActiveIndex = this.$route.path.substring(0, this.$route.path.indexOf('/', 1));
      }

      this.onSelect(defaultActiveIndex, []);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      debug('NavBar', 'mounted');
      this.scrollAction();
      this.setDefaultActive();
    }
  }, {
    key: "onSelect",
    value: function onSelect(index, indexPath) {
      if (this.currentActive === index) return;
      var list = this.menuTree.filter(function (it) {
        return String(it.index) === String(index);
      });

      if (list && list.length === 1) {
        var currentItem = list[0];
        this.sidebarTree = currentItem.children || [];

        if (this.sidebarTree.length === 0) {// TODO: 直接跳转 - 判断 path - url or router
          // TODO:                应在组件内部判断
        }

        var _iterator = NavBar_createForOfIteratorHelper(this.sidebarTree),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            if (!item.icon) item.$bg = item.$bg || getBG();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        this.currentActive = index;
        this.$emit('change', this.sidebarTree, currentItem);
      }

      debug('NavBar', 'onSelect:end  this.sidebarTree=', this.sidebarTree);
    }
  }, {
    key: "render",
    value: function render(h) {
      var _this2 = this;

      var hasSidebar = this.sidebarTree && this.sidebarTree.length > 0;
      debug('NavBar', 'render  this.sidebarTree=', this.sidebarTree);
      debug('NavBar', 'render  $slots=', this.$slots);
      debug('NavBar', 'render  $scopedSlots=', this.$scopedSlots);
      return h("div", {
        "class": 'xv-layout-navbar'
      }, [h("xv-switch-controller", {
        "class": "".concat(hasSidebar ? '' : 'hidden'),
        "attrs": {
          "value": !this.innerCollapse,
          "color": 'white'
        },
        "on": {
          "update": function update(val) {
            _this2.$emit('collapse', !val);
          }
        }
      }), h("div", {
        "class": 'handle-scroll scroll-left'
      }, [h("div", {
        "on": {
          "click": this.scrollActionLeft
        },
        "class": "scroll-inner ".concat(this.hideScrollLeftBtn ? 'visibility-hidden' : '')
      }, [h("i", {
        "class": 'el-icon-arrow-left'
      })])]), h("div", {
        "class": 'xv-layout-navbar__content'
      }, [h("el-menu", {
        "attrs": {
          "mode": 'horizontal',
          "background-color": '#304156',
          "text-color": '#fff',
          "active-text-color": '#409EFF'
        },
        "on": {
          "select": this.onSelect
        }
      }, [this.menuTree.map(function (item) {
        return h("router-link", {
          "attrs": {
            "tag": 'li',
            "to": item.path
          },
          "key": item.index
        }, [h("el-menu-item", {
          "attrs": {
            "index": String(item.index)
          }
        }, [item.label])]);
      })])]), h("div", {
        "class": 'handle-scroll scroll-right'
      }, [h("div", {
        "on": {
          "click": this.scrollActionRight
        },
        "class": "scroll-inner ".concat(this.hideScrollRightBtn ? 'visibility-hidden' : '')
      }, [h("i", {
        "class": 'el-icon-arrow-right'
      })])]), this.$slots.right ? this.$slots.right : null]);
    }
  }, {
    key: "scrollActionLeft",
    value: function scrollActionLeft() {
      this.scrollAction('left');
    }
  }, {
    key: "scrollActionRight",
    value: function scrollActionRight() {
      this.scrollAction('right');
    }
  }, {
    key: "scrollAction",
    value: function scrollAction(type) {
      var ele = document.querySelector('.xv-layout-navbar__content');
      if (!ele) return;
      ele.onscroll = this.calcShowHide;
      window.onresize = this.calcShowHide;
      this.calcShowHide();
      if (!type) return; // 处理点击事件

      window.ele = ele;
      ele.scrollBy(type === 'right' ? 50 : -50, 0);
      this.calcShowHide();
    }
  }, {
    key: "calcShowHide",
    value: function calcShowHide() {
      var ele = document.querySelector('.xv-layout-navbar__content');
      if (!ele) return;
      this.hideScrollLeftBtn = ele.scrollLeft === 0;
      this.hideScrollRightBtn = ele.scrollWidth === ele.scrollLeft + ele.clientWidth;
    }
  }, {
    key: "innerCollapse",
    get: function get() {
      return this.collapse;
    }
  }]);

  return NavBar;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  required: true
})], NavBar_NavBar.prototype, "menuTree", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  required: true
})], NavBar_NavBar.prototype, "collapse", void 0);

NavBar_NavBar = Object(external_tslib_["__decorate"])([external_vue_property_decorator_["Component"]], NavBar_NavBar);
/* harmony default export */ var nav_bar_NavBar = (NavBar_NavBar);
// CONCATENATED MODULE: ./components/helper/sidebar/LayoutSidebarItem.tsx
function LayoutSidebarItem_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LayoutSidebarItem_typeof = function _typeof(obj) { return typeof obj; }; } else { LayoutSidebarItem_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LayoutSidebarItem_typeof(obj); }

function LayoutSidebarItem_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LayoutSidebarItem_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LayoutSidebarItem_createClass(Constructor, protoProps, staticProps) { if (protoProps) LayoutSidebarItem_defineProperties(Constructor.prototype, protoProps); if (staticProps) LayoutSidebarItem_defineProperties(Constructor, staticProps); return Constructor; }

function LayoutSidebarItem_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) LayoutSidebarItem_setPrototypeOf(subClass, superClass); }

function LayoutSidebarItem_setPrototypeOf(o, p) { LayoutSidebarItem_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return LayoutSidebarItem_setPrototypeOf(o, p); }

function LayoutSidebarItem_createSuper(Derived) { var hasNativeReflectConstruct = LayoutSidebarItem_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = LayoutSidebarItem_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = LayoutSidebarItem_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return LayoutSidebarItem_possibleConstructorReturn(this, result); }; }

function LayoutSidebarItem_possibleConstructorReturn(self, call) { if (call && (LayoutSidebarItem_typeof(call) === "object" || typeof call === "function")) { return call; } return LayoutSidebarItem_assertThisInitialized(self); }

function LayoutSidebarItem_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function LayoutSidebarItem_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function LayoutSidebarItem_getPrototypeOf(o) { LayoutSidebarItem_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return LayoutSidebarItem_getPrototypeOf(o); }




var LayoutSidebarItem = /*#__PURE__*/function (_Vue) {
  LayoutSidebarItem_inherits(LayoutSidebarItem, _Vue);

  var _super = LayoutSidebarItem_createSuper(LayoutSidebarItem);

  function LayoutSidebarItem() {
    LayoutSidebarItem_classCallCheck(this, LayoutSidebarItem);

    return _super.apply(this, arguments);
  }

  LayoutSidebarItem_createClass(LayoutSidebarItem, [{
    key: "render",
    value: function render(h) {
      var _this = this;

      var res = null; // TODO: 开关 sidebar 时, span.img-text-icon 实例改变, 所以动画效果消失, 如何解决
      // TODO: 测试代码 key={} data-idx={}

      if (this.item.children && this.item.children.length > 0) {
        res = h("el-submenu", {
          "attrs": {
            "popper-append-to-body": true,
            "popper-class": this.popperClass,
            "index": String(this.item.index),
            "data-idx": Math.random()
          },
          "class": "level-".concat(this.level),
          "key": this.item.index
        }, [h("template", {
          "slot": 'title'
        }, [!this.item.icon && this.level === 1 ? h("span", {
          "class": 'img-text-icon',
          "style": "background-color: ".concat(this.item.$bg, ";")
        }, [this.item.label[0]]) : h("i", {
          "class": "icon el-icon-".concat(this.item.icon || 'table')
        }), h("span", [this.item.label])]), this.item.children.map(function (it) {
          return h("layout-sidebar-item", {
            "attrs": {
              "popper-class": _this.popperClass,
              "item": it,
              "level": _this.level + 1
            }
          });
        })]);
      } else {
        res = h("router-link", {
          "attrs": {
            "tag": 'a',
            "exact": true,
            "to": this.item.path
          },
          "key": this.item.index
        }, [h("el-menu-item", {
          "attrs": {
            "index": String(this.item.index),
            "data-idx": Math.random()
          },
          "key": this.item.index
        }, [!this.item.icon && this.level === 1 ? h("span", {
          "class": 'img-text-icon',
          "style": "background-color: ".concat(this.item.$bg, ";")
        }, [this.item.label[0]]) : h("i", {
          "class": "icon el-icon-".concat(this.item.icon || 'table')
        }), h("span", [this.item.label])])]);
      }

      return h("div", [res]);
    }
  }]);

  return LayoutSidebarItem;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  required: true
})], LayoutSidebarItem.prototype, "item", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  required: true
})], LayoutSidebarItem.prototype, "level", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  required: false,
  "default": ''
})], LayoutSidebarItem.prototype, "popperClass", void 0);

LayoutSidebarItem = Object(external_tslib_["__decorate"])([external_vue_property_decorator_["Component"]], LayoutSidebarItem);
/* harmony default export */ var sidebar_LayoutSidebarItem = (LayoutSidebarItem);
// EXTERNAL MODULE: ./components/helper/sidebar/sidebar.scss
var sidebar = __webpack_require__(11);

// CONCATENATED MODULE: ./components/helper/sidebar/Sidebar.tsx
function Sidebar_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Sidebar_typeof = function _typeof(obj) { return typeof obj; }; } else { Sidebar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Sidebar_typeof(obj); }

function Sidebar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Sidebar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Sidebar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Sidebar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Sidebar_defineProperties(Constructor, staticProps); return Constructor; }

function Sidebar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Sidebar_setPrototypeOf(subClass, superClass); }

function Sidebar_setPrototypeOf(o, p) { Sidebar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Sidebar_setPrototypeOf(o, p); }

function Sidebar_createSuper(Derived) { var hasNativeReflectConstruct = Sidebar_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Sidebar_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Sidebar_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Sidebar_possibleConstructorReturn(this, result); }; }

function Sidebar_possibleConstructorReturn(self, call) { if (call && (Sidebar_typeof(call) === "object" || typeof call === "function")) { return call; } return Sidebar_assertThisInitialized(self); }

function Sidebar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Sidebar_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Sidebar_getPrototypeOf(o) { Sidebar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Sidebar_getPrototypeOf(o); }






var Sidebar = /*#__PURE__*/function (_Vue) {
  Sidebar_inherits(Sidebar, _Vue);

  var _super = Sidebar_createSuper(Sidebar);

  function Sidebar() {
    Sidebar_classCallCheck(this, Sidebar);

    return _super.apply(this, arguments);
  }

  Sidebar_createClass(Sidebar, [{
    key: "render",
    value: function render(h) {
      var _this = this;

      var hasSidebar = this.sidebarTree && this.sidebarTree.length > 0;
      return h("div", {
        "class": "xv-layout-sidebar ".concat(hasSidebar ? '' : 'not-show', " ").concat(!this.collapse ? 'not-collapse' : 'collapse')
      }, [h("el-menu", {
        "attrs": {
          "mode": 'vertical',
          "default-active": this.activePath,
          "collapse": this.collapse,
          "collapse-transition": false
        }
      }, [this.sidebarTree.map(function (item) {
        return h("layout-sidebar-item", {
          "attrs": {
            "popper-class": _this.popperClass,
            "item": item,
            "level": 1
          },
          "key": item.index
        });
      })])]);
    }
  }]);

  return Sidebar;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  required: true
})], Sidebar.prototype, "sidebarTree", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  required: true
})], Sidebar.prototype, "collapse", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  required: false,
  "default": ''
})], Sidebar.prototype, "activePath", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  required: false,
  "default": ''
})], Sidebar.prototype, "popperClass", void 0);

Sidebar = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: {
    LayoutSidebarItem: sidebar_LayoutSidebarItem
  }
})], Sidebar);
/* harmony default export */ var sidebar_Sidebar = (Sidebar);
// CONCATENATED MODULE: ./components/layout-head-left/layout-head-left.tsx
function layout_head_left_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { layout_head_left_typeof = function _typeof(obj) { return typeof obj; }; } else { layout_head_left_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return layout_head_left_typeof(obj); }

function layout_head_left_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function layout_head_left_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function layout_head_left_createClass(Constructor, protoProps, staticProps) { if (protoProps) layout_head_left_defineProperties(Constructor.prototype, protoProps); if (staticProps) layout_head_left_defineProperties(Constructor, staticProps); return Constructor; }

function layout_head_left_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) layout_head_left_setPrototypeOf(subClass, superClass); }

function layout_head_left_setPrototypeOf(o, p) { layout_head_left_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return layout_head_left_setPrototypeOf(o, p); }

function layout_head_left_createSuper(Derived) { var hasNativeReflectConstruct = layout_head_left_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = layout_head_left_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = layout_head_left_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return layout_head_left_possibleConstructorReturn(this, result); }; }

function layout_head_left_possibleConstructorReturn(self, call) { if (call && (layout_head_left_typeof(call) === "object" || typeof call === "function")) { return call; } return layout_head_left_assertThisInitialized(self); }

function layout_head_left_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function layout_head_left_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function layout_head_left_getPrototypeOf(o) { layout_head_left_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return layout_head_left_getPrototypeOf(o); }








/**
 * 1、sidebar-controller 关闭、打开后, 左侧栏恢复原样 (如果 sidebarTree 没变的话)
 * 2、前端状态缓存:
 *    a. 左侧栏: 切换头部后, 左侧栏状态恢复上次该 目录 关闭时的状态
 */

function getFirstLeaf(sidebarTree) {
  if (!sidebarTree || sidebarTree.length === 0) return null;
  var fisrtItem = sidebarTree[0];

  if (fisrtItem.children && fisrtItem.children.length > 0) {
    return getFirstLeaf(fisrtItem.children);
  }

  return fisrtItem;
}

var layout_head_left_LayoutHeadLeft = /*#__PURE__*/function (_Vue) {
  layout_head_left_inherits(LayoutHeadLeft, _Vue);

  var _super = layout_head_left_createSuper(LayoutHeadLeft);

  function LayoutHeadLeft() {
    var _this;

    layout_head_left_classCallCheck(this, LayoutHeadLeft);

    _this = _super.apply(this, arguments);
    _this.collapse = false;
    _this.sidebarTree = [];
    _this.activePath = '';
    return _this;
  }

  layout_head_left_createClass(LayoutHeadLeft, [{
    key: "render",
    value: function render(h) {
      var _this2 = this;

      debug('LayoutHeadLeft', 'render  $slots=', this.$slots);
      debug('LayoutHeadLeft', 'render  $scopedSlots=', this.$scopedSlots);
      var hasSidebar = this.sidebarTree && this.sidebarTree.length > 0; // eslint-disable-next-line @typescript-eslint/prefer-optional-chain

      var keyRouterView = this.$route && this.$route.meta ? this.$route.meta.keyRouterView || this.$route.meta.permission || Math.random() : Math.random();
      var slotNavBarRight = this.$slots.right ? h("template", {
        "slot": 'right'
      }, [this.$slots.right]) : null;
      return h("div", {
        "class": "xv-layout style-head-left ".concat(hasSidebar ? '' : 'sidebar-hidden')
      }, [h("nav-bar", {
        "attrs": {
          "menu-tree": this.menuTree,
          "collapse": this.collapse
        },
        "on": {
          "change": function change(sidebarTree, currentItem) {
            _this2.sidebarTree = sidebarTree || [];
            var target = getFirstLeaf(_this2.sidebarTree);

            if (_this2.$router && target && (target === null || target === void 0 ? void 0 : target.path)) {
              _this2.$router.push(target.path);

              _this2.activePath = target.index ? String(target.index) : '';
            } else {
              _this2.activePath = ''; // eslint-disable-next-line no-console

              console.log('target: ', target);
            }
          },
          "collapse": function collapse(val) {
            _this2.collapse = val;
          }
        }
      }, [slotNavBarRight]), h("div", {
        "class": 'xv-layout-content'
      }, [h("keep-alive", [h("sidebar", {
        "attrs": {
          "sidebar-tree": this.sidebarTree,
          "collapse": this.collapse,
          "active-path": this.activePath
        }
      })]), h("div", {
        "class": 'xv-layout-view'
      }, [this.$route ? h("bread-crumb") : null, h("transition", {
        "attrs": {
          "name": 'fade',
          "mode": 'out-in'
        }
      }, [h("router-view", {
        "key": keyRouterView
      })])])])]);
    }
  }]);

  return LayoutHeadLeft;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  required: true
})], layout_head_left_LayoutHeadLeft.prototype, "menuTree", void 0);

layout_head_left_LayoutHeadLeft = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: {
    BreadCrumb: bread_crumb_BreadCrumb,
    NavBar: nav_bar_NavBar,
    Sidebar: sidebar_Sidebar
  }
})], layout_head_left_LayoutHeadLeft);
/* harmony default export */ var layout_head_left_layout_head_left = (layout_head_left_LayoutHeadLeft);
// EXTERNAL MODULE: ./components/helper/nav-bar/hamburger.scss
var hamburger = __webpack_require__(12);

// CONCATENATED MODULE: ./components/helper/nav-bar/Hamburger.tsx
function Hamburger_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Hamburger_typeof = function _typeof(obj) { return typeof obj; }; } else { Hamburger_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Hamburger_typeof(obj); }

function Hamburger_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Hamburger_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Hamburger_createClass(Constructor, protoProps, staticProps) { if (protoProps) Hamburger_defineProperties(Constructor.prototype, protoProps); if (staticProps) Hamburger_defineProperties(Constructor, staticProps); return Constructor; }

function Hamburger_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Hamburger_setPrototypeOf(subClass, superClass); }

function Hamburger_setPrototypeOf(o, p) { Hamburger_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Hamburger_setPrototypeOf(o, p); }

function Hamburger_createSuper(Derived) { var hasNativeReflectConstruct = Hamburger_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Hamburger_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Hamburger_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Hamburger_possibleConstructorReturn(this, result); }; }

function Hamburger_possibleConstructorReturn(self, call) { if (call && (Hamburger_typeof(call) === "object" || typeof call === "function")) { return call; } return Hamburger_assertThisInitialized(self); }

function Hamburger_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Hamburger_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Hamburger_getPrototypeOf(o) { Hamburger_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Hamburger_getPrototypeOf(o); }





var Hamburger = /*#__PURE__*/function (_Vue) {
  Hamburger_inherits(Hamburger, _Vue);

  var _super = Hamburger_createSuper(Hamburger);

  function Hamburger() {
    Hamburger_classCallCheck(this, Hamburger);

    return _super.apply(this, arguments);
  }

  Hamburger_createClass(Hamburger, [{
    key: "render",
    value: function render(h) {
      var _this = this;

      return h("div", {
        "class": 'xv-hamburger'
      }, [h("svg", {
        "attrs": {
          "t": '1492500959545',
          "viewBox": '0 0 1024 1024',
          "version": '1.1',
          "xmlns": 'http://www.w3.org/2000/svg',
          "xmlnsXlink": 'http://www.w3.org/1999/xlink',
          "p-id": '1691',
          "width": '64',
          "height": '64'
        },
        "on": {
          "click": function click() {
            _this.$emit('collapse', !_this.collapse);
          }
        },
        "class": "svg-icon hamburger ".concat(this.collapse ? 'is-active' : ''),
        "style": ''
      }, [h("path", {
        "attrs": {
          "d": 'M966.8023 568.849776 57.196677 568.849776c-31.397081 0-56.850799-25.452695-56.850799-56.850799l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 543.397081 998.200404 568.849776 966.8023 568.849776z',
          "p-id": '1692'
        }
      }), h("path", {
        "attrs": {
          "d": 'M966.8023 881.527125 57.196677 881.527125c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 856.07443 998.200404 881.527125 966.8023 881.527125z',
          "p-id": '1693'
        }
      }), h("path", {
        "attrs": {
          "d": 'M966.8023 256.17345 57.196677 256.17345c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.850799 56.850799-56.850799l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.850799l0 0C1023.653099 230.720755 998.200404 256.17345 966.8023 256.17345z',
          "p-id": '1694'
        }
      })])]);
    }
  }]);

  return Hamburger;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  "default": false
})], Hamburger.prototype, "collapse", void 0);

Hamburger = Object(external_tslib_["__decorate"])([external_vue_property_decorator_["Component"]], Hamburger);
/* harmony default export */ var nav_bar_Hamburger = (Hamburger);
// EXTERNAL MODULE: ./components/layout-left/layout-left.scss
var layout_left = __webpack_require__(13);

// CONCATENATED MODULE: ./components/layout-left/layout-left.tsx
function layout_left_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { layout_left_typeof = function _typeof(obj) { return typeof obj; }; } else { layout_left_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return layout_left_typeof(obj); }

function layout_left_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = layout_left_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function layout_left_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return layout_left_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return layout_left_arrayLikeToArray(o, minLen); }

function layout_left_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function layout_left_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function layout_left_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function layout_left_createClass(Constructor, protoProps, staticProps) { if (protoProps) layout_left_defineProperties(Constructor.prototype, protoProps); if (staticProps) layout_left_defineProperties(Constructor, staticProps); return Constructor; }

function layout_left_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) layout_left_setPrototypeOf(subClass, superClass); }

function layout_left_setPrototypeOf(o, p) { layout_left_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return layout_left_setPrototypeOf(o, p); }

function layout_left_createSuper(Derived) { var hasNativeReflectConstruct = layout_left_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = layout_left_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = layout_left_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return layout_left_possibleConstructorReturn(this, result); }; }

function layout_left_possibleConstructorReturn(self, call) { if (call && (layout_left_typeof(call) === "object" || typeof call === "function")) { return call; } return layout_left_assertThisInitialized(self); }

function layout_left_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function layout_left_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function layout_left_getPrototypeOf(o) { layout_left_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return layout_left_getPrototypeOf(o); }









var layout_left_LayoutLeft = /*#__PURE__*/function (_Vue) {
  layout_left_inherits(LayoutLeft, _Vue);

  var _super = layout_left_createSuper(LayoutLeft);

  function LayoutLeft() {
    var _this;

    layout_left_classCallCheck(this, LayoutLeft);

    _this = _super.apply(this, arguments);
    _this.collapse = false;
    return _this;
  }

  layout_left_createClass(LayoutLeft, [{
    key: "render",
    value: function render(h) {
      var _this2 = this;

      debug('LayoutLeft', 'render'); // eslint-disable-next-line @typescript-eslint/prefer-optional-chain

      var keyRouterView = this.$route && this.$route.meta ? this.$route.meta.keyRouterView || this.$route.meta.permission || Math.random() : Math.random();
      return h("div", {
        "class": 'xv-layout style-left'
      }, [h("sidebar", {
        "attrs": {
          "popper-class": 'xv-layout-left',
          "sidebar-tree": this.sidebarTree,
          "collapse": this.collapse
        }
      }), h("div", {
        "class": 'xy-layout-content'
      }, [h("div", {
        "class": 'xv-layout-content--header'
      }, [h("hamburger", {
        "attrs": {
          "collapse": this.collapse
        },
        "on": {
          "collapse": function collapse(val) {
            _this2.collapse = val;
          }
        }
      }), this.$route ? h("bread-crumb", {
        "class": 'header-center'
      }) : h("div", {
        "class": 'header-center'
      }), this.$slots.right]), h("div", {
        "class": 'xv-layout-view'
      }, [h("router-view", {
        "key": keyRouterView
      })])])]);
    }
  }, {
    key: "sidebarTree",
    get: function get() {
      var sidebarTree = [];

      var _iterator = layout_left_createForOfIteratorHelper(this.menuTree),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          if (!item.icon) item.$bg = item.$bg || getBG();
          sidebarTree.push(item);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return sidebarTree;
    }
  }]);

  return LayoutLeft;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  required: true
})], layout_left_LayoutLeft.prototype, "menuTree", void 0);

layout_left_LayoutLeft = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: {
    Sidebar: sidebar_Sidebar,
    Hamburger: nav_bar_Hamburger,
    BreadCrumb: bread_crumb_BreadCrumb
  }
})], layout_left_LayoutLeft);
/* harmony default export */ var layout_left_layout_left = (layout_left_LayoutLeft);
// CONCATENATED MODULE: ./components/layout-empty/layout-empty.tsx
function layout_empty_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { layout_empty_typeof = function _typeof(obj) { return typeof obj; }; } else { layout_empty_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return layout_empty_typeof(obj); }

function layout_empty_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function layout_empty_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function layout_empty_createClass(Constructor, protoProps, staticProps) { if (protoProps) layout_empty_defineProperties(Constructor.prototype, protoProps); if (staticProps) layout_empty_defineProperties(Constructor, staticProps); return Constructor; }

function layout_empty_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) layout_empty_setPrototypeOf(subClass, superClass); }

function layout_empty_setPrototypeOf(o, p) { layout_empty_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return layout_empty_setPrototypeOf(o, p); }

function layout_empty_createSuper(Derived) { var hasNativeReflectConstruct = layout_empty_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = layout_empty_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = layout_empty_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return layout_empty_possibleConstructorReturn(this, result); }; }

function layout_empty_possibleConstructorReturn(self, call) { if (call && (layout_empty_typeof(call) === "object" || typeof call === "function")) { return call; } return layout_empty_assertThisInitialized(self); }

function layout_empty_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function layout_empty_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function layout_empty_getPrototypeOf(o) { layout_empty_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return layout_empty_getPrototypeOf(o); }




var LayoutEmpty = /*#__PURE__*/function (_Vue) {
  layout_empty_inherits(LayoutEmpty, _Vue);

  var _super = layout_empty_createSuper(LayoutEmpty);

  function LayoutEmpty() {
    layout_empty_classCallCheck(this, LayoutEmpty);

    return _super.apply(this, arguments);
  }

  layout_empty_createClass(LayoutEmpty, [{
    key: "render",
    value: function render(h) {
      return h("router-view");
    }
  }]);

  return LayoutEmpty;
}(external_vue_property_decorator_["Vue"]);

LayoutEmpty = Object(external_tslib_["__decorate"])([external_vue_property_decorator_["Component"]], LayoutEmpty);
/* harmony default export */ var layout_empty = (LayoutEmpty);
// CONCATENATED MODULE: ./components/lines-ellipsis/lines-ellipsis.tsx
function lines_ellipsis_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { lines_ellipsis_typeof = function _typeof(obj) { return typeof obj; }; } else { lines_ellipsis_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return lines_ellipsis_typeof(obj); }

function lines_ellipsis_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function lines_ellipsis_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function lines_ellipsis_createClass(Constructor, protoProps, staticProps) { if (protoProps) lines_ellipsis_defineProperties(Constructor.prototype, protoProps); if (staticProps) lines_ellipsis_defineProperties(Constructor, staticProps); return Constructor; }

function lines_ellipsis_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) lines_ellipsis_setPrototypeOf(subClass, superClass); }

function lines_ellipsis_setPrototypeOf(o, p) { lines_ellipsis_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return lines_ellipsis_setPrototypeOf(o, p); }

function lines_ellipsis_createSuper(Derived) { var hasNativeReflectConstruct = lines_ellipsis_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = lines_ellipsis_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = lines_ellipsis_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return lines_ellipsis_possibleConstructorReturn(this, result); }; }

function lines_ellipsis_possibleConstructorReturn(self, call) { if (call && (lines_ellipsis_typeof(call) === "object" || typeof call === "function")) { return call; } return lines_ellipsis_assertThisInitialized(self); }

function lines_ellipsis_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function lines_ellipsis_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function lines_ellipsis_getPrototypeOf(o) { lines_ellipsis_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return lines_ellipsis_getPrototypeOf(o); }




function prevSibling(node, count) {
  // eslint-disable-next-line no-param-reassign
  while (node && count--) {
    // eslint-disable-next-line no-param-reassign
    node = node.previousElementSibling;
  }

  return node;
}

var LinesEllipsis = /*#__PURE__*/function (_Vue) {
  lines_ellipsis_inherits(LinesEllipsis, _Vue);

  var _super = lines_ellipsis_createSuper(LinesEllipsis);

  function LinesEllipsis() {
    var _this;

    lines_ellipsis_classCallCheck(this, LinesEllipsis);

    _this = _super.apply(this, arguments);
    _this.handledText = '';
    _this.basedOn = '';
    _this.chars = [];
    _this.helperWrapper = undefined;
    return _this;
  }

  lines_ellipsis_createClass(LinesEllipsis, [{
    key: "mounted",
    value: function mounted() {
      this.calc();
    }
  }, {
    key: "calc",
    value: function calc() {
      this.initText(); // 确保组件宽度固定

      this.$el.style.width = window.getComputedStyle(this.$el.parentElement)['width'];
      if (!this.$el || typeof this.$el.appendChild !== 'function') return;
      this.$el.appendChild(this.helperWrapper);
      var partTextIdxs = this.calcText();
      var ellipsisIndex = this.putEllipsis(partTextIdxs); // const clamped = ellipsisIndex > -1;

      var text = ellipsisIndex > -1 ? this.chars.slice(0, ellipsisIndex).join('') : this.handledText;
      text = text.replace(/‖/gi, '<br/><br/>');
      this.$el.innerHTML = text;
      var extraSpan = this.helperWrapper.lastElementChild;
      var innerSpan = document.createElement('span');
      innerSpan.innerHTML = "".concat(this.ellipsis);
      this.$el.appendChild(extraSpan);
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      this.helperWrapper = undefined;
    }
    /**
     * 根据传入的 text 来确定: handledText、basedOn
     */

  }, {
    key: "initText",
    value: function initText() {
      this.handledText = this.text || '';
      this.handledText = this.handledText.replace(/[\r\n]+/gi, '‖');
      this.handledText = this.handledText.replace(/[\r]+/gi, '‖');
      this.handledText = this.handledText.replace(/[\n]+/gi, '‖');
      this.basedOn = /^[\x00-\x7F]+$/.test(this.handledText) ? 'words' : 'letters';
      this.basedOn = 'letters';

      switch (this.basedOn) {
        case 'words':
          this.chars = this.handledText.split(/\b|(?=\W)/);
          break;

        case 'letters':
          this.chars = Array.from(this.handledText);
          break;
      }

      this.helperWrapper = document.createElement('div');
      this.helperWrapper.setAttribute('class', 'lines-ellipsis-helper-wrapper');
      this.helperWrapper.innerHTML = this.chars.map(function (_char) {
        if (_char.indexOf('‖') !== -1) {
          return "<p class=\"lines-ellipsis-helper-char\">".concat(_char, "</p>");
        } else {
          return "<span class=\"lines-ellipsis-helper-char\">".concat(_char, "</span>");
        }
      }).join('');
    }
  }, {
    key: "calcText",
    value: function calcText() {
      var indexes = [0];
      var charEle = this.helperWrapper.firstElementChild;
      if (!charEle) return indexes;
      var idx = 0;
      var line = 1;
      var offsetTop = charEle.offsetTop;

      while (charEle = charEle.nextElementSibling) {
        if (charEle.offsetTop > offsetTop) {
          line++;
          indexes.push(idx);
          offsetTop = charEle.offsetTop;
        }

        idx++;

        if (line > this.lines) {
          break;
        }
      }

      return indexes;
    }
  }, {
    key: "putEllipsis",
    value: function putEllipsis(partTextIdxs) {
      if (partTextIdxs.length <= this.lines) return -1;
      var lastIndex = partTextIdxs[this.lines];
      var chars = this.chars.slice(0, lastIndex);
      var maxOffsetTop = this.helperWrapper.children[lastIndex].offsetTop;
      this.helperWrapper.innerHTML = chars.map(function (c, i) {
        if (c.indexOf('‖') !== -1) {
          return "<p class=\"LinesEllipsis-unit\">".concat(c, "</p>");
        } else {
          return "<span class='LinesEllipsis-unit'>".concat(c, "</span>");
        }
      }).join('') + "<wbr><span class='lines-ellipsis-span'>".concat(this.ellipsis, "</span>");
      var ndEllipsis = this.helperWrapper.lastElementChild;
      var prevChar = prevSibling(ndEllipsis, 2);

      while (prevChar && (ndEllipsis.offsetTop > maxOffsetTop || // IE & Edge: doesn't support <wbr>
      ndEllipsis.offsetHeight > prevChar.offsetHeight || ndEllipsis.offsetTop > prevChar.offsetTop)) {
        this.helperWrapper.removeChild(prevChar);
        prevChar = prevSibling(ndEllipsis, 2);
        chars.pop();
      }

      return chars.length;
    }
  }, {
    key: "clickHandler",
    value: function clickHandler(env) {
      if (this.isMoreSpan(env.target)) {
        this.$emit('more', env);
      }
    }
  }, {
    key: "isMoreSpan",
    value: function isMoreSpan(ele) {
      if (ele === null) return false;
      var cls = ele.getAttribute('class') || '';
      if (cls.indexOf('xv-lines-ellipsis') >= 0) return false;
      if (cls.indexOf('lines-ellipsis-span') >= 0) return true;
      return this.isMoreSpan(ele.parentElement);
    }
  }, {
    key: "render",
    value: function render(h) {
      return h("div", {
        "class": 'xv-lines-ellipsis',
        "on": {
          "click": this.clickHandler
        }
      });
    }
  }]);

  return LinesEllipsis;
}(external_vue_property_decorator_["Vue"]);

LinesEllipsis = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  props: {
    ellipsis: {
      type: String,
      "default": '...'
    },
    text: {
      type: String,
      required: true
    },
    lines: {
      type: Number,
      "default": 3
    }
  }
})], LinesEllipsis);
/* harmony default export */ var lines_ellipsis = (LinesEllipsis);
// CONCATENATED MODULE: ./src/options.ts
function calcFinalOpts(opts) {
  return {};
}
// CONCATENATED MODULE: ./src/index.ts
// !!! This file is automatically generated by the build/prebuild.js (via npm run prebuild).
// !!! Please do not modify manually.









var components = [{
  name: 'XvHelloWorld',
  component: hello_world_hello_world
}, {
  name: 'XvFileDownload',
  component: file_download_file_download
}, {
  name: 'XvSwitchController',
  component: switch_controller_switch_controller
}, {
  name: 'XvLayoutHeadLeft',
  component: layout_head_left_layout_head_left
}, {
  name: 'XvLayoutLeft',
  component: layout_left_layout_left
}, {
  name: 'XvLayoutEmpty',
  component: layout_empty
}, {
  name: 'XvLinesEllipsis',
  component: lines_ellipsis
}];

function install(Vue, opts) {
  Vue.prototype.$xlucky = calcFinalOpts(opts);
  components.forEach(function (item) {
    Vue.component(item.name, item.component);
  });
  Vue.filter('filterArray', filterArray);
  Vue.filter('filterArrayMulti', filterArrayMulti);
  Vue.filter('filterBoolean', filterBoolean);
  Vue.filter('filterMoney', filterMoney);
  Vue.filter('filterTime', filterTime);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var src = __webpack_exports__["default"] = ({
  version: '0.2.0',
  install: install,
  filterArray: filterArray,
  filterArrayMulti: filterArrayMulti,
  filterBoolean: filterBoolean,
  filterMoney: filterMoney,
  filterTime: filterTime,
  HelloWorld: hello_world_hello_world,
  FileDownload: file_download_file_download,
  SwitchController: switch_controller_switch_controller,
  LayoutHeadLeft: layout_head_left_layout_head_left,
  LayoutLeft: layout_left_layout_left,
  LayoutEmpty: layout_empty,
  LinesEllipsis: lines_ellipsis
});

/***/ })
/******/ ]);