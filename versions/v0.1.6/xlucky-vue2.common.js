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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
/***/ (function(module, exports) {

module.exports = require("babel-helper-vue-jsx-merge-props");

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
function filterMoney(value) {
  return Number.isNaN(Number(value)) ? value : Object(external_xtools_js_["formatMoney"])(Number(value));
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
var hello_world = __webpack_require__(6);

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
    value: function render() {
      var h = arguments[0];
      return h("div", {
        attrs: {
          className: 'xl-hello-world'
        }
      }, ["Hello Wrold ..."]);
    }
  }]);

  return HelloWorld;
}(external_vue_property_decorator_["Vue"]);

HelloWorld = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({})], HelloWorld);
/* harmony default export */ var hello_world_hello_world = (HelloWorld);
// EXTERNAL MODULE: external "babel-helper-vue-jsx-merge-props"
var external_babel_helper_vue_jsx_merge_props_ = __webpack_require__(5);
var external_babel_helper_vue_jsx_merge_props_default = /*#__PURE__*/__webpack_require__.n(external_babel_helper_vue_jsx_merge_props_);

// EXTERNAL MODULE: ./components/file-download/file-download.scss
var file_download = __webpack_require__(7);

// CONCATENATED MODULE: ./components/file-download/file-download.tsx


function file_download_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { file_download_typeof = function _typeof(obj) { return typeof obj; }; } else { file_download_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return file_download_typeof(obj); }

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
    value: function render() {
      var h = arguments[0];
      return h("el-button", external_babel_helper_vue_jsx_merge_props_default()([{
        "class": 'xv-file-download',
        attrs: {
          loading: this.downloading,
          type: this.type
        },
        on: {
          "click": this.fileDownload
        }
      }, {
        attrs: this.$attrs
      }]), [this.text]);
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
var switch_controller = __webpack_require__(8);

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
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": 'xv-switch-controller',
        style: this.styleComponent
      }, [h("div", {
        ref: 'btn',
        "class": 'xv-switch-controller--btn',
        on: {
          "click": this.toggle
        }
      }), h("svg", {
        attrs: {
          width: '1000px',
          height: '1000px'
        },
        style: this.styleSvg
      }, [h("path", {
        ref: 'pathA',
        style: this.styleSvgPath,
        attrs: {
          d: "\n              M 300 400\n              L 700 400\n              C 900 400 900 750 600 850\n              A 400 400 0 0 1 200 200\n              L 800 800\n            "
        }
      }), h("path", {
        ref: 'pathB',
        attrs: {
          d: 'M 300 500 L 700 500'
        },
        style: this.styleSvgPath
      }), h("path", {
        ref: 'pathC',
        style: this.styleSvgPath,
        attrs: {
          d: "\n              M 700 600\n              L 300 600\n              C 100 600 100 200 400 150\n              A 400 380 0 1 1 200 800\n              L 800 200\n            "
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
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": 'xv-lines-ellipsis',
        on: {
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
  version: '0.1.6',
  install: install,
  filterArray: filterArray,
  filterArrayMulti: filterArrayMulti,
  filterBoolean: filterBoolean,
  filterMoney: filterMoney,
  filterTime: filterTime,
  HelloWorld: hello_world_hello_world,
  FileDownload: file_download_file_download,
  SwitchController: switch_controller_switch_controller,
  LinesEllipsis: lines_ellipsis
});

/***/ })
/******/ ]);