(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"));
	else if(typeof define === 'function' && define.amd)
		define("xlucky", ["Vue"], factory);
	else if(typeof exports === 'object')
		exports["xlucky"] = factory(require("Vue"));
	else
		root["xlucky"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * segment - A JavaScript library to draw and animate SVG path strokes
 * @version v1.1.0
 * @link https://github.com/lmgonzalves/segment
 * @license MIT
 */

(function(root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {

    function Segment(path, begin, end, circular){
        this.path = path;
        this.reset();
        this.begin = typeof begin !== 'undefined' ? this.valueOf(begin) : 0;
        this.end = typeof end !== 'undefined' ? this.valueOf(end) : this.length;
        this.circular = typeof circular !== 'undefined' ? circular : false;
        this.timer = null;
        this.animationTimer = null;
        this.draw(this.begin, this.end, 0, {circular: this.circular});
    }

    Segment.prototype = {
        reset: function(){
            this.length = this.path.getTotalLength();
            this.path.style.strokeDashoffset = this.length * 2;
        },

        draw: function(begin, end, duration, options){
            this.circular = options && options.hasOwnProperty('circular') ? options.circular : false;
            if(duration){
                this.stop();

                var that = this;
                var delay = options && options.hasOwnProperty('delay') ? parseFloat(options.delay) * 1000 : 0;
                if(delay){
                    delete options.delay;
                    this.timer = setTimeout(function(){
                        that.draw(begin, end, duration, options);
                    }, delay);
                    return this.timer;
                }

                this.startTime = new Date();
                this.initBegin = this.begin;
                this.initEnd = this.end;
                this.finalBegin = this.valueOf(begin);
                this.finalEnd = this.valueOf(end);
                this.pausedTime = 0;
                this.duration = duration;
                this.easing = options && options.hasOwnProperty('easing') ? options.easing : null;
                this.callback = options && options.hasOwnProperty('callback') ? options.callback : null;

                this.animationTimer = requestAnimationFrame(this.play.bind(this));
            }else{
                this.path.style.strokeDasharray = this.strokeDasharray(begin, end);
            }
        },

        play: function() {
            var now = new Date();
            if (this.pausedTime) {
                this.startTime.setMilliseconds(this.startTime.getMilliseconds() + (now - this.pausedTime));
                this.pausedTime = 0;
            }
            var elapsed = (now - this.startTime) / 1000;
            var time = (elapsed / parseFloat(this.duration));
            var t = time;

            if(typeof this.easing === 'function'){
                t = this.easing(t);
            }

            if(time > 1){
                t = 1;
                this.stop();
            }else{
                this.animationTimer = requestAnimationFrame(this.play.bind(this));
            }

            this.drawStep(t);

            if(time > 1 && typeof this.callback === 'function'){
                return this.callback.call(this);
            }
        },

        pause: function() {
            if (this.animationTimer) {
                this.stop();
                this.pausedTime = new Date();
            }
        },

        resume: function() {
            if (!this.animationTimer) {
                this.animationTimer = requestAnimationFrame(this.play.bind(this));
            }
        },

        stop: function(){
            cancelAnimationFrame(this.animationTimer);
            this.animationTimer = null;
            clearTimeout(this.timer);
            this.timer = null;
        },

        drawStep: function(t) {
            this.begin = this.initBegin + (this.finalBegin - this.initBegin) * t;
            this.end = this.initEnd + (this.finalEnd - this.initEnd) * t;

            this.begin = this.begin < 0 && !this.circular ? 0 : this.begin;
            this.begin = this.begin > this.length && !this.circular ? this.length : this.begin;
            this.end = this.end < 0 && !this.circular ? 0 : this.end;
            this.end = this.end > this.length && !this.circular ? this.length : this.end;

            if (this.end - this.begin <= this.length && this.end - this.begin > 0) {
                this.draw(this.begin, this.end, 0, {circular: this.circular});
            } else {
                if (this.circular && this.end - this.begin > this.length) {
                    this.draw(0, this.length, 0, {circular: this.circular});
                } else {
                    this.draw(this.begin + (this.end - this.begin), this.end - (this.end - this.begin), 0, {circular: this.circular});
                }
            }
        },

        strokeDasharray: function(begin, end){
            this.begin = this.valueOf(begin);
            this.end = this.valueOf(end);
            if(this.circular){
                var division = this.begin > this.end || (this.begin < 0 && this.begin < this.length * -1)
                    ? parseInt(this.begin / parseInt(this.length)) : parseInt(this.end / parseInt(this.length));
                if(division !== 0){
                    this.begin = this.begin - this.length * division;
                    this.end = this.end - this.length * division;
                }
            }
            if(this.end > this.length){
                var plus = this.end - this.length;
                return [this.length, this.length, plus, this.begin - plus, this.end - this.begin].join(' ');
            }
            if(this.begin < 0){
                var minus = this.length + this.begin;
                if(this.end < 0){
                    return [this.length, this.length + this.begin, this.end - this.begin, minus - this.end, this.end - this.begin, this.length].join(' ');
                }else{
                    return [this.length, this.length + this.begin, this.end - this.begin, minus - this.end, this.length].join(' ');
                }
            }
            return [this.length, this.length + this.begin, this.end - this.begin].join(' ');
        },

        valueOf: function(input){
            var val = parseFloat(input);
            if(typeof input === 'string' || input instanceof String){
                if(~input.indexOf('%')){
                    var arr;
                    if(~input.indexOf('+')){
                        arr = input.split('+');
                        val = this.percent(arr[0]) + parseFloat(arr[1]);
                    }else if(~input.indexOf('-')){
                        arr = input.split('-');
                        if(arr.length === 3){
                            val = -this.percent(arr[1]) - parseFloat(arr[2]);
                        }else{
                            val = arr[0] ? this.percent(arr[0]) - parseFloat(arr[1]) : -this.percent(arr[1]);
                        }
                    }else{
                        val = this.percent(input);
                    }
                }
            }
            return val;
        },

        percent: function(value){
            return parseFloat(value) / 100 * this.length;
        }
    };

    return Segment;

}));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 参考:
 *    array-to-tree: https://github.com/alferov/array-to-tree/blob/master/index.js
 *    performant-array-to-tree: https://github.com/philipstanislaus/performant-array-to-tree/blob/master/src/arrayToTree.ts
 *    array-tree-filter: https://github.com/afc163/array-tree-filter/blob/master/index.ts
 *
 * TODO: tree 相关的函数
 *  原始数据是否改变应与 Array 中对应的方式一致
 *  originParent、originTree 是否是原对象、还是引用、仅仅是值一致？
 *  函数中不定义 TreeItem, 而是全部替换为泛型
 *  treeMap 函数 fn 中的参数 originTree: 深度复制+函数属性兼容 or ===原始数据
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.heartCheck = exports.formatMoney = exports.padLeft = exports.urlGetParams = exports.urlGetFileName = exports.urlAddParams = exports.fileDownload = exports.timeIsBetweenMonth = exports.timeLastMonth = exports.timeDayEnd = exports.timeDayStart = exports.timeMonthEnd = exports.timeMonthStart = exports.timeBetweenDay = exports.timeBetweenMonth = exports.formatDate = exports.validIdCard = exports.accDiv = exports.accMulti = exports.accSub = exports.accAdd = exports.treeFilter = exports.treeSort = exports.treeMap = exports.treeForEach = exports.arrayToTree = void 0;
// tree
var array_to_tree_1 = __importDefault(__webpack_require__(8));
exports.arrayToTree = array_to_tree_1.default;
var tree_for_each_1 = __importDefault(__webpack_require__(4));
exports.treeForEach = tree_for_each_1.default;
var tree_map_1 = __importDefault(__webpack_require__(10));
exports.treeMap = tree_map_1.default;
var tree_sort_1 = __importDefault(__webpack_require__(5));
exports.treeSort = tree_sort_1.default;
var tree_filter_1 = __importDefault(__webpack_require__(11));
exports.treeFilter = tree_filter_1.default;
// number
var index_1 = __webpack_require__(12);
Object.defineProperty(exports, "accAdd", { enumerable: true, get: function () { return index_1.accAdd; } });
Object.defineProperty(exports, "accSub", { enumerable: true, get: function () { return index_1.accSub; } });
Object.defineProperty(exports, "accMulti", { enumerable: true, get: function () { return index_1.accMulti; } });
Object.defineProperty(exports, "accDiv", { enumerable: true, get: function () { return index_1.accDiv; } });
// china
var idcard_1 = __webpack_require__(13);
Object.defineProperty(exports, "validIdCard", { enumerable: true, get: function () { return idcard_1.validIdCard; } });
// date
var format_date_1 = __importDefault(__webpack_require__(6));
exports.formatDate = format_date_1.default;
var index_2 = __webpack_require__(14);
Object.defineProperty(exports, "timeBetweenMonth", { enumerable: true, get: function () { return index_2.timeBetweenMonth; } });
Object.defineProperty(exports, "timeBetweenDay", { enumerable: true, get: function () { return index_2.timeBetweenDay; } });
Object.defineProperty(exports, "timeMonthStart", { enumerable: true, get: function () { return index_2.timeMonthStart; } });
Object.defineProperty(exports, "timeMonthEnd", { enumerable: true, get: function () { return index_2.timeMonthEnd; } });
Object.defineProperty(exports, "timeDayStart", { enumerable: true, get: function () { return index_2.timeDayStart; } });
Object.defineProperty(exports, "timeDayEnd", { enumerable: true, get: function () { return index_2.timeDayEnd; } });
Object.defineProperty(exports, "timeLastMonth", { enumerable: true, get: function () { return index_2.timeLastMonth; } });
Object.defineProperty(exports, "timeIsBetweenMonth", { enumerable: true, get: function () { return index_2.timeIsBetweenMonth; } });
// other
var file_download_1 = __webpack_require__(15);
Object.defineProperty(exports, "fileDownload", { enumerable: true, get: function () { return file_download_1.fileDownload; } });
var format_money_1 = __importDefault(__webpack_require__(19));
exports.formatMoney = format_money_1.default;
var heart_check_1 = __importDefault(__webpack_require__(20));
exports.heartCheck = heart_check_1.default;
var url_1 = __webpack_require__(7);
Object.defineProperty(exports, "urlAddParams", { enumerable: true, get: function () { return url_1.urlAddParams; } });
Object.defineProperty(exports, "urlGetFileName", { enumerable: true, get: function () { return url_1.urlGetFileName; } });
Object.defineProperty(exports, "urlGetParams", { enumerable: true, get: function () { return url_1.urlGetParams; } });
var index_3 = __webpack_require__(3);
Object.defineProperty(exports, "padLeft", { enumerable: true, get: function () { return index_3.padLeft; } });


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.padRight = exports.padLeft = void 0;
function padLeft(origin, digit, holder) {
    if (holder === void 0) { holder = ' '; }
    var str = typeof origin === 'string' ? origin : origin.toString();
    if (str.length >= digit)
        return str;
    var prefix = '';
    for (var i = 0; i < digit - str.length; i++) {
        prefix += holder;
    }
    return "" + prefix + str;
}
exports.padLeft = padLeft;
function padRight(origin, digit, holder) {
    if (holder === void 0) { holder = ' '; }
    var str = typeof origin === 'string' ? origin : origin.toString();
    if (str.length >= digit)
        return str;
    var suffix = '';
    for (var i = 0; i < digit - str.length; i++) {
        suffix += holder;
    }
    return "" + str + suffix;
}
exports.padRight = padRight;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function treeForEach(tree, fn, childrenKey) {
    if (childrenKey === void 0) { childrenKey = 'children'; }
    handler(tree, fn, childrenKey, 0, 1, undefined);
}
exports.default = treeForEach;
function handler(tree, fn, childrenKey, globalIndex, level, parent) {
    if (childrenKey === void 0) { childrenKey = 'children'; }
    if (!tree || !(tree instanceof Array) || tree.length === 0)
        return;
    for (var i = 0; i < tree.length; i++) {
        var key = typeof childrenKey === 'string' ? childrenKey : 'children';
        // 确保 fn 中不可修改 children
        var childs = tree[i][key] || [];
        fn(tree[i], i, level, globalIndex++, parent);
        if (!tree[i] || !tree[i][childrenKey])
            continue;
        if (childs.length === 0)
            continue;
        handler(childs, fn, childrenKey, globalIndex++, level + 1, tree[i]);
    }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function treeSort(tree, sortBy, sortType, childrenKey) {
    if (sortBy === void 0) { sortBy = 'id'; }
    if (sortType === void 0) { sortType = 'asc'; }
    if (childrenKey === void 0) { childrenKey = 'children'; }
    var sortFn = null;
    if (typeof sortBy === 'string') {
        sortFn = function (a, b) {
            if (a[sortBy] === b[sortBy])
                return 0;
            if (sortType === 'asc') {
                return a[sortBy] > b[sortBy] ? 1 : -1;
            }
            else {
                return a[sortBy] > b[sortBy] ? -1 : 1;
            }
        };
    }
    else if (typeof sortBy === 'function') {
        sortFn = sortBy;
    }
    if (typeof sortFn !== 'function')
        return tree;
    tree.sort(sortFn);
    for (var _i = 0, tree_1 = tree; _i < tree_1.length; _i++) {
        var item = tree_1[_i];
        if (item[childrenKey] && item[childrenKey].length > 0) {
            treeSort(item[childrenKey], sortFn, sortType, childrenKey);
        }
    }
    return tree;
}
exports.default = treeSort;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(3);
/**
 *
 * YYYY: 年份-4位, eg: 2021
 * YY:   年份-2位, eg: 21
 *
 * MM:   月份-2位, eg: 01、12
 * M:    月份,     eg: 1、12
 *
 * DD:   日期-2位, eg: 01、30
 * D:    日期,     eg: 1、30
 *
 * HH:   小时-2位, eg: 01、24
 * H:    小时      eg: 1、12
 *
 * mm:   分钟-2位, eg: 01、60
 * m:
 *
 * ss:   秒钟-2位, eg: 01、60
 * s:    秒钟      eg: 1、60
 *
 * SSS: 毫秒-3位, eg: 001、999
 * S:    毫秒      eg: 1、99、999
 *
 * // ddd:  天数-3位, eg: 001、365
 * // d:    天数      eg: 1、99、365
 *
 * @param time 日期、时间、日期字符串
 * @param format 期望的格式
 */
function formatDate(time, format) {
    if (format === void 0) { format = 'YYYY-MM-DD HH:mm:ss'; }
    if (time === null || time === undefined)
        return '';
    var dateObj = time instanceof Date ? time : new Date(time);
    // Invalid Date 校验
    if (isNaN(dateObj.getFullYear()))
        return time.toString();
    var year = String(dateObj.getFullYear());
    var regexValueList = [
        // 年
        ['YYYY', utils_1.padLeft(dateObj.getFullYear(), 4, '0')],
        ['YY', year.substring(year.length - 2)],
        // 月
        ['MM', utils_1.padLeft(dateObj.getMonth() + 1, 2, '0')],
        ['M', utils_1.padLeft(dateObj.getMonth() + 1, 1, '0')],
        // 日
        ['DD', utils_1.padLeft(dateObj.getDate(), 2, '0')],
        ['D', utils_1.padLeft(dateObj.getDate(), 1, '0')],
        // 时
        ['HH', utils_1.padLeft(dateObj.getHours(), 2, '0')],
        ['H', utils_1.padLeft(dateObj.getHours(), 1, '0')],
        // 分
        ['mm', utils_1.padLeft(dateObj.getMinutes(), 2, '0')],
        ['m', utils_1.padLeft(dateObj.getMinutes(), 1, '0')],
        // 秒
        ['ss', utils_1.padLeft(dateObj.getSeconds(), 2, '0')],
        ['s', utils_1.padLeft(dateObj.getSeconds(), 1, '0')],
        // 毫秒
        ['SSS', utils_1.padLeft(dateObj.getMilliseconds(), 3, '0')],
        // ['SS', padLeft(dateObj.getMilliseconds(), 2, '0')],
        ['S', utils_1.padLeft(dateObj.getMilliseconds(), 1, '0')],
    ];
    var result = format;
    for (var _i = 0, regexValueList_1 = regexValueList; _i < regexValueList_1.length; _i++) {
        var _a = regexValueList_1[_i], regex = _a[0], value = _a[1];
        result = result.replace(new RegExp(regex, 'g'), value);
    }
    return result;
}
exports.default = formatDate;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.urlGetParams = exports.urlAddParams = exports.urlGetFileName = void 0;
/**
 * 获取最终文件名
 *
 * @param url 文件的 url 地址
 * @param name 指定文件名(可选)
 *
 */
function urlGetFileName(urlOrFileName, name) {
    var pathname = '';
    if (urlOrFileName.indexOf('/') >= 0) {
        try {
            pathname = new URL(urlOrFileName).pathname;
        }
        catch (err) {
            pathname = urlOrFileName;
        }
    }
    else {
        pathname = urlOrFileName;
    }
    var lastDotIdx = pathname.lastIndexOf('.');
    var ext = lastDotIdx >= 0 ? pathname.substring(lastDotIdx + 1) : '';
    var pureName = pathname.substring(pathname.lastIndexOf('/') + 1, lastDotIdx >= 0 ? lastDotIdx : pathname.length);
    if (!name)
        return "" + decodeURI(pureName) + (ext ? '.' : '') + (ext || '');
    var nameLastDotIdx = name.lastIndexOf('.');
    var nameExt = nameLastDotIdx >= 0 ? name.substring(nameLastDotIdx + 1) : '';
    if (nameExt) {
        nameExt = nameExt.replace(/#{ext}/g, ext || '');
        nameExt = nameExt.replace(/#{ext(:([-\w]+)){0,1}}/g, ext || '$2');
    }
    else if (ext) {
        nameExt = ext;
    }
    var namePureName = name.substring(0, nameLastDotIdx >= 0 ? nameLastDotIdx : name.length);
    namePureName = namePureName.replace('#{name}', pureName);
    namePureName = namePureName.replace(/#{ext}/g, ext || '');
    namePureName = namePureName.replace(/#{ext(:([-\w]+)){0,1}}/g, ext || '$2');
    return "" + decodeURI(namePureName) + (nameExt ? '.' : '') + nameExt;
}
exports.urlGetFileName = urlGetFileName;
function urlAddParams(url, param) {
    if (param === void 0) { param = {}; }
    var questionMarkIdx = url.indexOf('?');
    var safeUrl = questionMarkIdx > 0 ? url.substring(0, questionMarkIdx) : url;
    var search = '';
    if (questionMarkIdx >= 0) {
        search = url.substring(questionMarkIdx + 1) || '';
    }
    search = search.replace(/&$/g, '');
    var _loop_1 = function (key) {
        if (param[key] instanceof Array) {
            // TODO: 此处 typescript 应该是可以自动推断出类型的
            param[key].forEach(function (item) {
                search += "&" + key + "=" + item;
            });
        }
        else {
            search += "&" + key + "=" + param[key];
        }
    };
    for (var key in param) {
        _loop_1(key);
    }
    search = search.replace(/^&/g, '').replace(/&&/g, '&');
    return "" + safeUrl + (search ? '?' : '') + search;
}
exports.urlAddParams = urlAddParams;
function urlGetParams(url) {
    var nUrl = url || window.location.href;
    var questionMarkIdx = nUrl.indexOf('?');
    if (questionMarkIdx < 0)
        return {};
    var search = nUrl.substring(questionMarkIdx + 1);
    if (!search)
        return {};
    var params = {};
    var list = search.split('&');
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var item = list_1[_i];
        var kv = item.split('=');
        if (!params[kv[0]])
            params[kv[0]] = [];
        params[kv[0]].push(kv[1] || '');
    }
    var result = {};
    for (var key in params) {
        result[key] = params[key].length <= 1 ? params[key][0] || '' : params[key];
    }
    return result;
}
exports.urlGetParams = urlGetParams;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nested_property_1 = __importDefault(__webpack_require__(9));
var tree_for_each_1 = __importDefault(__webpack_require__(4));
var tree_sort_1 = __importDefault(__webpack_require__(5));
var defaultOptions = {
    // 基本参数
    idKey: 'id',
    parentIdKey: 'parentId',
    dataFieldKey: null,
    childrenKey: 'children',
    rootIdValue: undefined,
    // 高级玩法 - 孤儿相关参数
    orphansHandleType: 'root-warning',
    orphansFlagKey: '__is_orphans',
    orphansParent: 'ignore',
    orphansPosition: 'tail',
    // 高级玩法 - 排序相关参数
    sort: null,
};
/**
 * 将数组转化为树形结构
 *
 * @param array 源数据, 对象格式的数组
 * @param options 自定义配置对象
 *
 */
function arrayToTree(array, options) {
    var _a, _b, _c, _d, _e, _f;
    var opts = Object.assign({}, defaultOptions, options);
    // 仅存放一级节点
    var rootList = [];
    // 用于存储所有的孤儿节点
    //  循环过程中也会存储其他非孤儿节点, 但循环终止时只会有孤儿节点
    // 'error' | 'ignore' | 'ignore-warning' | 'root' | 'root-warning'
    var orphanStore = opts.orphansHandleType === 'ignore' ? undefined : {};
    var orphansTempFlagKey = '$$$$$needCheckForOrphans';
    // 用于临时存储所有节点
    //  rootList 与 orphanStore 中存储的都是 该store 中节点的引用
    var store = {};
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        if (!store[item[opts.idKey]]) {
            store[item[opts.idKey]] = (_a = {},
                _a[opts.idKey] = item[opts.idKey],
                _a[opts.childrenKey] = [],
                _a);
        }
        else {
            delete store[item[opts.idKey]][orphansTempFlagKey];
        }
        if (orphanStore)
            delete orphanStore[item[opts.idKey]];
        // 1、确保该 item 在 store 中对应的记录必须包含该 item 自带的所有属性
        // 2、dataFieldKey 参数处理
        if (opts.dataFieldKey) {
            store[item[opts.idKey]][opts.dataFieldKey] = item;
        }
        else {
            store[item[opts.idKey]] = (__assign(__assign({}, item), (_b = {}, _b[opts.childrenKey] = store[item[opts.idKey]][opts.childrenKey], _b)));
        }
        // 1、rootList && store 中保存该 item 时, 统一使用 store[item.id] 的引用
        // 2、rootList 中的所有对象, 均为 store 中的引用
        if (isRootNode(item, opts.parentIdKey, opts.rootIdValue)) {
            rootList.push(store[item[opts.idKey]]);
        }
        else {
            // 非 root 节点的 parentId 不可能为 null、undefined、''
            var parentId = getProperty(item, opts.parentIdKey);
            if (!store[parentId] || store[parentId][orphansTempFlagKey]) { // 父节点不存在 或 还没遍历到
                store[parentId] = store[parentId] || (_c = {}, _c[opts.idKey] = parentId, _c[opts.childrenKey] = [], _c[orphansTempFlagKey] = true, _c);
                if (orphanStore)
                    andOrphanItem(orphanStore, parentId, store[item[opts.idKey]]);
            }
            store[parentId][opts.childrenKey].push(store[item[opts.idKey]]);
        }
    }
    // 处理孤儿节点 (此时 orphanStore 中数据格式为: { parentId: [{}, {}] })
    if (orphanStore && Object.keys(orphanStore).length > 0) {
        // 报错与警告处理: 生成提示信息, 并抛异常 或 打印警告
        if (opts.orphansHandleType === 'error' || opts.orphansHandleType === 'ignore-warning' || opts.orphansHandleType === 'root-warning') {
            var str = '';
            var count = 0;
            for (var key in orphanStore) {
                count += orphanStore[key].length;
                var ids = orphanStore[key].map(function (item) { return item[opts.idKey]; });
                str += "\t\u5B64\u513F\u9879: " + ids + " - \u5BF9\u5E94\u7684\u7236\u8282\u70B9\u4E0D\u5B58\u5728: " + key;
            }
            str = "\u5B64\u513F\u5143\u7D20 (\u5171" + count + "\u4E2A):\n" + str;
            if (opts.orphansHandleType === 'error')
                throw new Error(str);
            console.warn(str);
        }
        // 1、孤儿标识字段处理
        // 2、将孤儿项设置为一级节点, 或为其他创建父节点并将父节点作为一级节点(orphansParent)
        if (opts.orphansHandleType === 'root' || opts.orphansHandleType === 'root-warning') {
            for (var objKey in orphanStore) {
                var key = getProperty(orphanStore[objKey][0], opts.dataFieldKey ? opts.dataFieldKey + "." + opts.parentIdKey : opts.parentIdKey);
                // currentItem[opts.orphansFlagKey] = true
                // const xxx = 
                // 孤儿标识字段处理
                if (opts.orphansFlagKey) {
                    tree_for_each_1.default(orphanStore[objKey], function (currentItem) {
                        if (opts.orphansFlagKey && typeof opts.orphansFlagKey == 'string') {
                            // @ts-ignore
                            currentItem[opts.orphansFlagKey] = true;
                        }
                    }, opts.childrenKey);
                }
                // 是否创建父节点 && 将孤儿项设置为一级节点
                if (opts.orphansParent === 'create') {
                    var nItem = opts.dataFieldKey ? (_d = {},
                        _d[opts.idKey] = key,
                        _d[opts.dataFieldKey] = (_e = {}, _e[opts.idKey] = key, _e),
                        _d[opts.childrenKey] = orphanStore[objKey],
                        _d) : (_f = {},
                        _f[opts.idKey] = key,
                        _f[opts.childrenKey] = orphanStore[objKey],
                        _f);
                    if (opts.orphansFlagKey)
                        nItem[opts.orphansFlagKey] = true;
                    rootAddOrphansItem(rootList, nItem, opts.orphansPosition);
                }
                else {
                    orphanStore[objKey].forEach(function (it) { return rootAddOrphansItem(rootList, it, opts.orphansPosition); });
                }
            }
        }
    }
    /**
     * 排序处理 (孤儿节点的 head 或 tail 已处理过了)
     *    孤儿节点不参与排序(因为父节点不正常, 所以排序意义不大)
     */
    // 普通节点不需要排序
    if (!opts.sort)
        return rootList;
    if (typeof opts.sort === 'function')
        return tree_sort_1.default(rootList, opts.sort, undefined, opts.childrenKey);
    var sortType = 'asc';
    var sortKey = '';
    if (typeof opts.sort === 'string') {
        sortKey = opts.sort;
    }
    if (opts.sort instanceof Array && opts.sort.length === 1) {
        sortKey = opts.sort[0];
    }
    if (opts.sort instanceof Array && opts.sort.length > 1) {
        sortKey = opts.sort[0];
        sortType = (opts.sort[1] || 'asc');
    }
    var sortFn = function (a, b) {
        if (opts.orphansFlagKey) {
            if (a[opts.orphansFlagKey] && b[opts.orphansFlagKey])
                return 0;
            if (a[opts.orphansFlagKey] && !b[opts.orphansFlagKey])
                return opts.orphansPosition === 'head' ? -1 : 1;
            if (!a[opts.orphansFlagKey] && b[opts.orphansFlagKey])
                return opts.orphansPosition === 'head' ? 1 : -1;
        }
        var aKey = opts.dataFieldKey ? a[opts.dataFieldKey][sortKey] : a[sortKey];
        var bKey = opts.dataFieldKey ? b[opts.dataFieldKey][sortKey] : b[sortKey];
        if (sortType === 'asc') {
            return aKey > bKey ? 1 : -1;
        }
        else {
            return aKey > bKey ? -1 : 1;
        }
    };
    return tree_sort_1.default(rootList, sortFn, sortType, opts.childrenKey);
}
exports.default = arrayToTree;
/**
 * 将孤儿节点添加到 orphansStore 中
 * 1、如果
 *
 * @param orphansStore
 * @param parentId
 * @param obj
 */
function andOrphanItem(orphansStore, parentId, obj) {
    if (!orphansStore[parentId]) {
        orphansStore[parentId] = [];
    }
    orphansStore[parentId].push(obj);
}
function rootAddOrphansItem(rootList, item, orphansPosition) {
    if (orphansPosition === 'head') {
        rootList.unshift(item);
    }
    else {
        rootList.push(item);
    }
}
/**
 * 该节点是否为一级节点, 满足以下任一条件即可: (不包含孤儿节点的处理)
 *  1、parentId 等于 rootIdValue
 *  2、parentId 为 undefined 或 null 或 空字符串
 *
 * @param obj
 * @param parentIdKey
 * @param rootIdValue
 */
function isRootNode(obj, parentIdKey, rootIdValue) {
    var parentId = getProperty(obj, parentIdKey);
    if (parentId === rootIdValue)
        return true;
    if (parentId === null || parentId === undefined || parentId === '')
        return true;
    return false;
}
function getProperty(obj, key) {
    if (key.indexOf('.') >= 0) {
        return nested_property_1.default.get(obj, key);
    }
    else {
        // @ts-ignore
        return obj[key];
    }
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* @license nested-property https://github.com/cosmosio/nested-property
*
* The MIT License (MIT)
*
* Copyright (c) 2014-2020 Olivier Scherrer <pode.fr@gmail.com>
*/


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ARRAY_WILDCARD = "+";
var PATH_DELIMITER = ".";
module.exports = {
  set: setNestedProperty,
  get: getNestedProperty,
  has: hasNestedProperty,
  hasOwn: function hasOwn(object, property, options) {
    return this.has(object, property, options || {
      own: true
    });
  },
  isIn: isInNestedProperty
};
/**
 * Get the property of an object nested in one or more objects or array
 * Given an object such as a.b.c.d = 5, getNestedProperty(a, "b.c.d") will return 5.
 * It also works through arrays. Given a nested array such as a[0].b = 5, getNestedProperty(a, "0.b") will return 5.
 * For accessing nested properties through all items in an array, you may use the array wildcard "+".
 * For instance, getNestedProperty([{a:1}, {a:2}, {a:3}], "+.a") will return [1, 2, 3]
 * @param {Object} object the object to get the property from
 * @param {String} property the path to the property as a string
 * @returns the object or the the property value if found
 */

function getNestedProperty(object, property) {
  if (_typeof(object) != "object" || object === null) {
    return object;
  }

  if (typeof property == "undefined") {
    return object;
  }

  if (typeof property == "number") {
    return object[property];
  }

  try {
    return traverse(object, property, function _getNestedProperty(currentObject, currentProperty) {
      return currentObject[currentProperty];
    });
  } catch (err) {
    return object;
  }
}
/**
 * Tell if a nested object has a given property (or array a given index)
 * given an object such as a.b.c.d = 5, hasNestedProperty(a, "b.c.d") will return true.
 * It also returns true if the property is in the prototype chain.
 * @param {Object} object the object to get the property from
 * @param {String} property the path to the property as a string
 * @param {Object} options:
 *  - own: set to reject properties from the prototype
 * @returns true if has (property in object), false otherwise
 */


function hasNestedProperty(object, property) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (_typeof(object) != "object" || object === null) {
    return false;
  }

  if (typeof property == "undefined") {
    return false;
  }

  if (typeof property == "number") {
    return property in object;
  }

  try {
    var has = false;
    traverse(object, property, function _hasNestedProperty(currentObject, currentProperty, segments, index) {
      if (isLastSegment(segments, index)) {
        if (options.own) {
          has = currentObject.hasOwnProperty(currentProperty);
        } else {
          has = currentProperty in currentObject;
        }
      } else {
        return currentObject && currentObject[currentProperty];
      }
    });
    return has;
  } catch (err) {
    return false;
  }
}
/**
 * Set the property of an object nested in one or more objects
 * If the property doesn't exist, it gets created.
 * @param {Object} object
 * @param {String} property
 * @param value the value to set
 * @returns object if no assignment was made or the value if the assignment was made
 */


function setNestedProperty(object, property, value) {
  if (_typeof(object) != "object" || object === null) {
    return object;
  }

  if (typeof property == "undefined") {
    return object;
  }

  if (typeof property == "number") {
    object[property] = value;
    return object[property];
  }

  try {
    return traverse(object, property, function _setNestedProperty(currentObject, currentProperty, segments, index) {
      if (!currentObject[currentProperty]) {
        var nextPropIsNumber = Number.isInteger(Number(segments[index + 1]));
        var nextPropIsArrayWildcard = segments[index + 1] === ARRAY_WILDCARD;

        if (nextPropIsNumber || nextPropIsArrayWildcard) {
          currentObject[currentProperty] = [];
        } else {
          currentObject[currentProperty] = {};
        }
      }

      if (isLastSegment(segments, index)) {
        currentObject[currentProperty] = value;
      }

      return currentObject[currentProperty];
    });
  } catch (err) {
    return object;
  }
}
/**
 * Tell if an object is on the path to a nested property
 * If the object is on the path, and the path exists, it returns true, and false otherwise.
 * @param {Object} object to get the nested property from
 * @param {String} property name of the nested property
 * @param {Object} objectInPath the object to check
 * @param {Object} options:
 *  - validPath: return false if the path is invalid, even if the object is in the path
 * @returns {boolean} true if the object is on the path
 */


function isInNestedProperty(object, property, objectInPath) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (_typeof(object) != "object" || object === null) {
    return false;
  }

  if (typeof property == "undefined") {
    return false;
  }

  try {
    var isIn = false,
        pathExists = false;
    traverse(object, property, function _isInNestedProperty(currentObject, currentProperty, segments, index) {
      isIn = isIn || currentObject === objectInPath || !!currentObject && currentObject[currentProperty] === objectInPath;
      pathExists = isLastSegment(segments, index) && _typeof(currentObject) === "object" && currentProperty in currentObject;
      return currentObject && currentObject[currentProperty];
    });

    if (options.validPath) {
      return isIn && pathExists;
    } else {
      return isIn;
    }
  } catch (err) {
    return false;
  }
}

function traverse(object, path) {
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  var segments = path.split(PATH_DELIMITER);
  var length = segments.length;

  var _loop = function _loop(idx) {
    var currentSegment = segments[idx];

    if (!object) {
      return {
        v: void 0
      };
    }

    if (currentSegment === ARRAY_WILDCARD) {
      if (Array.isArray(object)) {
        return {
          v: object.map(function (value, index) {
            var remainingSegments = segments.slice(idx + 1);

            if (remainingSegments.length > 0) {
              return traverse(value, remainingSegments.join(PATH_DELIMITER), callback);
            } else {
              return callback(object, index, segments, idx);
            }
          })
        };
      } else {
        var pathToHere = segments.slice(0, idx).join(PATH_DELIMITER);
        throw new Error("Object at wildcard (".concat(pathToHere, ") is not an array"));
      }
    } else {
      object = callback(object, currentSegment, segments, idx);
    }
  };

  for (var idx = 0; idx < length; idx++) {
    var _ret = _loop(idx);

    if (_typeof(_ret) === "object") return _ret.v;
  }

  return object;
}

function isLastSegment(segments, index) {
  return segments.length === index + 1;
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function treeMap(tree, fn, deleteUndefined, childrenKey) {
    if (deleteUndefined === void 0) { deleteUndefined = true; }
    if (childrenKey === void 0) { childrenKey = 'children'; }
    if (typeof childrenKey !== 'string')
        return tree;
    var _a = handler({
        tree: tree,
        fn: fn,
        childrenKey: childrenKey,
        parent: undefined,
        globalIndex: 0,
        originTree: tree.slice(),
        level: 1,
        deleteUndefined: deleteUndefined,
    }), newTree = _a[0], thisNeedDelete = _a[1];
    if (deleteUndefined === true && thisNeedDelete)
        return newTree.filter(function (i) { return i !== undefined; });
    return newTree;
}
exports.default = treeMap;
function handler(params) {
    // 标识该数组是否含有 undefined, 减少不必要的 filter 消耗
    var needDelete = false;
    // 用来确保回调函数 fn 中的参数 previousItem 为处理前的数据
    var originPreviousItem = undefined;
    // 遍历数组 tree, 对每个 item 执行 fn 操作
    for (var i = 0; i < params.tree.length; i++) {
        var childs = params.tree[i][params.childrenKey] || [];
        var originParent = params.tree[i];
        var tempItemResult = params.fn(params.tree[i], i, params.parent, {
            previousItem: originPreviousItem || undefined,
            nextItem: i < params.tree.length ? params.tree[i + 1] : undefined,
            level: params.level,
            globalIndex: params.globalIndex++,
            originTree: params.originTree,
        });
        originPreviousItem = params.tree[i];
        params.tree[i] = tempItemResult;
        // 如果 fn 返回 undefined, 则标识 needDelete 为 true
        if (params.tree[i] === undefined)
            needDelete = true;
        // 循环处理 children 项
        if (childs && childs instanceof Array && childs.length > 0) {
            var result = handler({
                tree: childs,
                fn: params.fn,
                childrenKey: params.childrenKey,
                parent: originParent,
                globalIndex: params.globalIndex++,
                originTree: params.originTree,
                level: params.level + 1,
                deleteUndefined: params.deleteUndefined
            });
            params.tree[i][params.childrenKey] = result[0];
            if (params.deleteUndefined === true && result[1] === true) {
                params.tree[i][params.childrenKey] = params.tree[i][params.childrenKey].filter(function (i) { return i !== undefined; });
            }
        }
    }
    return [params.tree, needDelete];
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function treeFilter(tree, fn, childrenKey) {
    if (childrenKey === void 0) { childrenKey = 'children'; }
    return handlerFilter(tree.slice(), fn, childrenKey, 0, 1, undefined, tree);
}
exports.default = treeFilter;
function handlerFilter(tree, fn, childrenKey, globalIndex, level, 
// fnNeedOriginParent: boolean,
parent, originTree) {
    var newTree = tree.filter(function (currentItem, index, currentArray) { return fn(currentItem, index, currentArray, level, globalIndex++, parent, 
    // fnNeedOriginParent ? parent : undefined,
    originTree); });
    if (typeof childrenKey !== 'string')
        return newTree;
    for (var i = 0; i < tree.length; i++) {
        var childs = tree[i][childrenKey];
        if (!childs || !(childs instanceof Array) || childs.length === 0)
            continue;
        tree[i][childrenKey] = handlerFilter(childs, fn, childrenKey, globalIndex++, level + 1, tree[i], originTree);
    }
    return newTree;
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accDiv = exports.accMulti = exports.accSub = exports.accAdd = void 0;
var index_1 = __webpack_require__(3);
/**
 * Chrome 浏览器中的异常例子:
 *
 * 1、2.24 + 2.22 = 4.460000000000001
 *    2.24 - 2.22 = 0.020000000000000018
 * 2、2.3 / 0.1 = 22.999999999999996
 *    2.3 * 0.1 = 0.22999999999999998
 * 3、-652.94 + 0.01 = -652.9300000000001
 *    -652.44 + 0.01 = -652.4300000000001
 * 4、652.94 * 100 = 65294.00000000001  ---> accAdd 与 accSub 中不可直接使用 num1*m 的方式
 *    652.44 / 100 = 65294.00000000001
 */
/**
 * 加法函数
 */
function accAdd(num1, num2) {
    if (num1 === void 0) { num1 = 0; }
    if (num2 === void 0) { num2 = 0; }
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var r1Positive = num1.toString().split('.')[0] || '0';
    var r2Positive = num2.toString().split('.')[0] || '0';
    var r1Decimal = num1.toString().split('.')[1] || '';
    var r2Decimal = num2.toString().split('.')[1] || '';
    var decimalMaxCount = Math.max(r1Decimal.length, r2Decimal.length);
    var m = Math.pow(10, decimalMaxCount);
    var r1Num = +(r1Positive + index_1.padRight(r1Decimal, decimalMaxCount, '0'));
    var r2Num = +(r2Positive + index_1.padRight(r2Decimal, decimalMaxCount, '0'));
    var result = (r1Num + r2Num) / m;
    if (rest && rest.length > 0) {
        return accAdd.apply(void 0, __spreadArrays([result, rest.shift()], rest));
    }
    return result;
}
exports.accAdd = accAdd;
/**
 * 减法函数
 */
function accSub(num1, num2) {
    if (num1 === void 0) { num1 = 0; }
    if (num2 === void 0) { num2 = 0; }
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var r1Positive = num1.toString().split('.')[0] || '0';
    var r2Positive = num2.toString().split('.')[0] || '0';
    var r1Decimal = num1.toString().split('.')[1] || '';
    var r2Decimal = num2.toString().split('.')[1] || '';
    var decimalMaxCount = Math.max(r1Decimal.length, r2Decimal.length);
    var m = Math.pow(10, decimalMaxCount);
    var r1Num = +(r1Positive + index_1.padRight(r1Decimal, decimalMaxCount, '0'));
    var r2Num = +(r2Positive + index_1.padRight(r2Decimal, decimalMaxCount, '0'));
    var result = (r1Num - r2Num) / m;
    if (rest && rest.length > 0) {
        return accSub.apply(void 0, __spreadArrays([result, rest.shift()], rest));
    }
    return result;
}
exports.accSub = accSub;
/**
 * 乘法函数
 */
function accMulti(num1, num2) {
    if (num1 === void 0) { num1 = 0; }
    if (num2 === void 0) { num2 = 1; }
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var m = (num1.toString().split('.')[1] || '').length;
    m += (num2.toString().split('.')[1] || '').length;
    var result = +(String(num1).replace('.', '')) * +(String(num2).replace('.', ''));
    result /= Math.pow(10, m);
    if (rest && rest.length > 0) {
        return accMulti.apply(void 0, __spreadArrays([result, rest.shift()], rest));
    }
    return result;
}
exports.accMulti = accMulti;
/**
 * 除法函数
 */
function accDiv(num1, num2) {
    if (num2 === void 0) { num2 = 1; }
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var r1Positive = num1.toString().split('.')[0] || '0';
    var r2Positive = num2.toString().split('.')[0] || '0';
    var r1Decimal = num1.toString().split('.')[1] || '';
    var r2Decimal = num2.toString().split('.')[1] || '';
    var decimalMaxCount = Math.max(r1Decimal.length, r2Decimal.length);
    var m = Math.pow(10, decimalMaxCount);
    var r1Num = +(r1Positive + index_1.padRight(r1Decimal, decimalMaxCount, '0'));
    var r2Num = +(r2Positive + index_1.padRight(r2Decimal, decimalMaxCount, '0'));
    var thisResult = r1Num / r2Num;
    if (rest && rest.length > 0) {
        return accDiv.apply(void 0, __spreadArrays([thisResult, rest.shift()], rest));
    }
    return thisResult;
}
exports.accDiv = accDiv;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 中国居民身份证号规则
 *
 * 第一代身份证: 15位, 原名社会保障号, 1984年4月6日开始启用, 2013年1月1日起停止使用
 * 第二代身份证: 18位,
 * 两者的差异
 *    1、出生日期: 15位中的年份只有2位, 18位中的年份只有4位
 *    2、18位中的最后一位为校验码, 15位没有校验码
 *
 * 15位: 社会保障号, 即第一代身份证
 * 18位: 1999年更名为公民身份证号, 即第二代身份证
 * 15位与18位的差异:
 *
 *
 *
 * 18位身份证排序规则:
 *  地址码(6位) + 出生日期码(8位) + 数字顺序码(3位) + 数字校验码(1位)
 *  地址码: 常住户口所在县、市、区的行政区划代码, 行政区划代码按 GB/T2260 规定执行
 *  出生日期码: YYYYMMDD, 按 GB/T7408 规定执行
 *      原15位中 999、998、997、996 分配给百岁老人
 *  顺序码: 同一地址码所在区域内, 对同一天出生的人编写的顺序号, 奇数分配给男性、偶数分配给女性
 *  校验码: 通过采用 ISO 7064:1983,MOD 11-2 校验码系统计算出校验码
 *      校验码也有 X, 代表罗马字符X, 相当于10
 *
 *
 *
 * 校验码计算规则:
 *    将本体码各位数字乘以对应的加权因子并求和, 除以11得到余数, 根据余数通过校验码对照表查出校验码
 * 加权因子:
 *   位置序号  1   2   3   4   5   6   7   8   9   10   11   12   13   14   15   16   17
 *   加权因子  7   9   10  5   8   4   2   1   6   3    7    9    10   5    8    4    2
 * 校验码:
 *   余   数  0   1   2   3   4   5   6   7   8   9   10
 *   校验码   1   0   X   9   8   7   6   5   4   3   2
 *
 *
 * 行政区划代码
 *    https://github.com/wecatch/china_regions
 *    http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/
 *    http://www.mca.gov.cn/article/sj/xzqh/1980/
 *
 * 参考:
 *  维基百科 - 中华人民共和国居民身份证: https://zh.wikipedia.org/wiki/中华人民共和国居民身份证
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.validIdCard = void 0;
/**
 * 加权因子
 *
 * 1~17位的位置序号 -- 加权因子
 */
var weightingFactors = [
    7, 9, 10, 5, 8,
    4, 2, 1, 6, 3,
    7, 9, 10, 5, 8,
    4, 2,
];
/**
 * 校验码
 *
 * 余数 -- 检验码
 */
var checkCodes = [
    '1', '0', 'X', '9', '8',
    '7', '6', '5', '4', '3',
    '2',
];
/**
 * 身份证号的合法校验
 *  - 注意: 合规并不代表身份证号真实存在
 *
 * @param idcard 身份证号
 */
function validIdCard(idcard) {
    var str = String(idcard);
    if (str.length === 15)
        str = switchV1ToV1(idcard);
    if (str.length !== 18)
        return false;
    // 粗校验 - 正则表达式的规则
    //    1、第1位 非 0                                [1-9]
    //    2、第2~6位 为 0~9                            [0-9]{5}
    //    3、第7~10位 为年份, 所以第7、8位为 19 或 20:    (19|20)[0-9]{2}
    //    4、第11~12位 为月份, 01~12 之间                [0|1][0-9]
    //    5、第13~14位 为日期, 01~31 之间                [0|1|2|3][0-9]
    //    6、第15~17位 为顺序号, 都在 0~9 之间            [0-9]{3}
    //    7、第18位 为校验码, 0~9 之间或为 X              ([0-9]|X)
    // const roughValidRegexp = /^[1-9][0-9]{5}(19|20)[0-9]{2}[0|1][0-9][0|1|2|3][0-9][0-9]{3}([0-9]|X)$/
    var roughValidRegexp = "\n    [1-9]\n    [0-9]{5}\n    (19|20)[0-9]{2}\n    [0|1][0-9]\n    [0|1|2|3][0-9]\n    [0-9]{3}\n    [0-9xX]\n  ".replace(/\s/g, '');
    if (!new RegExp(roughValidRegexp).test(String(idcard)))
        return false;
    // 出生日期校验
    str = String(idcard);
    var birthStr = str.substring(6, 10) + "-" + str.substring(10, 12) + "-" + str.substring(12, 14);
    if (new Date(birthStr) < new Date('1984-04-06') || new Date(birthStr) > new Date())
        return false;
    // 第二代身份证校验 - 18位
    // 计算最后一位校验码
    var result = 0;
    var values = str.split('');
    for (var i = 0; i < 17; i++) {
        result += weightingFactors[i] * +values[i];
    }
    // 最后一位校验码不匹配, 则判定为不合法
    if (checkCodes[result % 11] !== values[17])
        return false;
    return true;
}
exports.validIdCard = validIdCard;
// 一代身份证号自动升级为第二代身份证号
function switchV1ToV1(str) {
    str = str.slice(0, 6) + '19' + str.slice(6);
    return str + calcCheckCode(str);
}
// 计算校验码
function calcCheckCode(str) {
    var result = 0;
    var values = str.split('');
    for (var i = 0; i < 17; i++) {
        result += weightingFactors[i] * +values[i];
    }
    return checkCodes[result % 11];
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeIsBetweenMonth = exports.timeLastMonth = exports.timeDayEnd = exports.timeDayStart = exports.timeBetweenDay = exports.timeMonthEnd = exports.timeMonthStart = exports.timeBetweenMonth = void 0;
var format_date_1 = __importDefault(__webpack_require__(6));
/**
 * 获得两个月份之间的开始毫秒与结束毫秒的时间戳
 *
 * @param startTime 开始月份中的任意一个时刻
 * @param endTime 结束月份中的任意一个时刻
 * @returns [start, end] 时间戳数组 - start: 开始月份的第0毫秒, end: 结束月份的最后一毫秒
 */
function timeBetweenMonth(startTime, endTime) {
    var _a;
    // 确保 startTime < endTime
    if (new Date(startTime) > new Date(endTime)) {
        _a = [endTime, startTime], startTime = _a[0], endTime = _a[1];
    }
    var end = new Date(endTime);
    // 得到 endTime 所在月份的下个月的第一毫秒的 Date 对象
    end = end.getMonth() === 11
        ? new Date(end.getFullYear() + 1 + "-01-01 00:00:00")
        : new Date(end.getFullYear() + "-" + (end.getMonth() + 2) + "-01 00:00:00");
    // 得到 endTime 所在月份最后一毫秒
    end = new Date(end.getTime() - 1);
    return [
        new Date(format_date_1.default(startTime, 'YYYY-MM-01 00:00:00')).getTime(),
        end.getTime(),
    ];
}
exports.timeBetweenMonth = timeBetweenMonth;
function timeMonthStart(time) {
    var start = new Date(time);
    return new Date(start.getFullYear() + "-" + (start.getMonth() + 1) + "-01 00:00:00").getTime();
}
exports.timeMonthStart = timeMonthStart;
function timeMonthEnd(time) {
    var end = new Date(time);
    end = end.getMonth() === 11
        ? new Date(end.getFullYear() + 1 + "-01-01 00:00:00")
        : new Date(end.getFullYear() + "-" + (end.getMonth() + 2) + "-01 00:00:00");
    return end.getTime() - 1;
}
exports.timeMonthEnd = timeMonthEnd;
/**
 * 获得某两天之间的开始毫秒与结束毫秒的时间戳
 *
 * @param startTime 开始月份中的任意一个时刻
 * @param endTime 结束月份中的任意一个时刻
 * @returns [start, end] 时间戳数组 - start: 开始月份的第0毫秒, end: 结束月份的最后一毫秒
 */
function timeBetweenDay(startTime, endTime) {
    var _a;
    // 确保 startTime < endTime
    if (new Date(startTime) > new Date(endTime)) {
        _a = [endTime, startTime], startTime = _a[0], endTime = _a[1];
    }
    var end = new Date(format_date_1.default(endTime, 'YYYY-MM-DD 23:59:59'));
    return [
        new Date(format_date_1.default(startTime, 'YYYY-MM-DD 00:00:00')).getTime(),
        +String(end.getTime()).replace(/000$/, '999'),
    ];
}
exports.timeBetweenDay = timeBetweenDay;
function timeDayStart(day) {
    return new Date(format_date_1.default(day, 'YYYY-MM-DD 00:00:00')).getTime();
}
exports.timeDayStart = timeDayStart;
function timeDayEnd(day) {
    var todayZero = new Date(format_date_1.default(day, 'YYYY-MM-DD 00:00:00'));
    var tomorrowZero = todayZero.getTime() + 24 * 60 * 60 * 1000;
    return tomorrowZero - 1;
}
exports.timeDayEnd = timeDayEnd;
/**
 * 获取指定时间或当前时间的上个月同一时间
 * @param start Date 对象
 */
function timeLastMonth(start) {
    if (start === void 0) { start = new Date(); }
    var startDate = start ? new Date(start) : new Date();
    var year = startDate.getFullYear();
    var mon = startDate.getMonth() + 1;
    if (mon === 1) {
        return new Date(year - 1 + "-12-" + startDate.getDate() + " " + startDate.getHours() + ":" + startDate.getMinutes() + ":" + startDate.getSeconds() + "." + startDate.getMilliseconds());
    }
    else {
        return new Date(year + "-" + (mon - 1) + "-" + startDate.getDate() + " " + startDate.getHours() + ":" + startDate.getMinutes() + ":" + startDate.getSeconds() + "." + startDate.getMilliseconds());
    }
}
exports.timeLastMonth = timeLastMonth;
/**
 * 两个时间是否超过1个月
 */
function timeIsBetweenMonth(time1, time2) {
    var _a;
    if (!time1 || !time2)
        throw new Error('参数错误, 两个时间都必传');
    var startTime = new Date(time1).getTime();
    var endTime = new Date(time2).getTime();
    if (startTime > endTime) {
        _a = [endTime, startTime], startTime = _a[0], endTime = _a[1];
    }
    var lastMonthTime = timeLastMonth(endTime).getTime();
    return startTime >= lastMonthTime;
}
exports.timeIsBetweenMonth = timeIsBetweenMonth;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSuggestFileName = exports.fileDownload = void 0;
var file_saver_1 = __importDefault(__webpack_require__(16));
var url_1 = __webpack_require__(7);
var errors_1 = __webpack_require__(18);
function fileDownload(downloadParams) {
    var url = downloadParams.url, params = downloadParams.params, headers = downloadParams.headers, method = downloadParams.method, isFormData = downloadParams.isFormData;
    // 计算 url: url、params
    if (typeof params === 'object' && !(params instanceof Array)) {
        url = url_1.urlAddParams(url, params);
    }
    // 计算 header: headers、method、data、isFormData
    if (typeof headers !== 'object')
        headers = {};
    if (!headers['Content-Type'] && typeof method === 'string' && method.toUpperCase() === 'POST') {
        headers['Content-Type'] = isFormData ? 'application/x-www-form-urlencoded' : 'application/json';
    }
    var withCredentials = downloadParams.withCredentials, data = downloadParams.data, fileName = downloadParams.fileName, successCb = downloadParams.successCb, finalCb = downloadParams.finalCb, errorCb = downloadParams.errorCb;
    // 计算 withCredentials
    var credentials = undefined;
    if (typeof withCredentials === 'boolean')
        credentials = withCredentials;
    if (typeof withCredentials === 'function')
        credentials = withCredentials(url, method || 'GET', isFormData || false);
    requestFileBlob({
        url: url, method: method,
        withCredentials: credentials,
        headers: headers, isFormData: isFormData, data: data,
    }).then(function (_a) {
        var blob = _a.blob, suggestFileName = _a.suggestFileName;
        try {
            // 计算最终文件名, 优先级: 前端指定 > 接口指定 > url 提取
            var finalFileName = url_1.urlGetFileName(suggestFileName || url, fileName);
            finalFileName = fileName ? finalFileName : suggestFileName || finalFileName;
            file_saver_1.default.saveAs(blob, finalFileName);
            if (typeof successCb === 'function')
                successCb();
            if (typeof finalCb === 'function')
                finalCb();
        }
        catch (err) {
            if (typeof errorCb === 'function')
                errorCb(err);
            if (typeof finalCb === 'function')
                finalCb(err);
        }
    }).catch(function (err) {
        if (typeof errorCb === 'function')
            errorCb(err);
        if (typeof finalCb === 'function')
            finalCb(err);
    });
}
exports.fileDownload = fileDownload;
function getSuggestFileName(req) {
    try {
        var headers = req.getAllResponseHeaders();
        if (!headers || headers.indexOf('content-disposition') < 0)
            return '';
        var str = req.getResponseHeader('Content-Disposition');
        if (!str)
            return '';
        var finalName = '';
        var list = str.split(';');
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            var ii = item.split('=');
            if (ii && ii.length === 2) {
                if (ii[0] === 'filename*' && ii[1]) {
                    finalName = ii[1];
                }
                if (ii[0] === 'filename' && ii[1] && !finalName) {
                    finalName = ii[1];
                }
            }
        }
        finalName = finalName.replace(/^["']/, '').replace(/["']$/, '');
        return finalName ? window.decodeURIComponent(finalName) : '';
    }
    catch (err) {
        console.log('getSuggestFileName: ', err);
        return '';
    }
}
exports.getSuggestFileName = getSuggestFileName;
/**
 * 请求文件内容
 */
function requestFileBlob(params) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.withCredentials = typeof params.withCredentials === 'boolean' ? params.withCredentials : true;
        req.responseType = 'blob';
        req.open(params.method || 'GET', params.url, true);
        req.onabort = function () { return reject(new errors_1.AbortError('请求中断', req, req.status)); };
        req.ontimeout = function () { return reject(new errors_1.TimeOutError('请求超时', req, req.status)); };
        req.onerror = function () { return reject(new errors_1.AjaxError('请求报错', req, req.status)); };
        req.onload = function () {
            if (req.status === 200) {
                var suggestFileName = getSuggestFileName(req);
                resolve({
                    blob: req.response && req.response instanceof Blob ? req.response : new Blob([req.response]),
                    suggestFileName: suggestFileName,
                });
            }
            else {
                reject(new errors_1.NotSuccessError('响应码非 200', req, req.status));
            }
        };
        for (var key in (params.headers || {})) {
            req.setRequestHeader(key, (params.headers || {})[key]);
        }
        if (params.method && params.method.toLowerCase() === 'post' && params.data) {
            if (params.isFormData) {
                var fd = new FormData();
                for (var key in (params.data || {})) {
                    fd.append(key, (params.data || {})[key]);
                }
                req.send(fd);
            }
            else {
                req.send(params.data ? JSON.stringify(params.data) : '');
            }
        }
        else {
            req.send();
        }
    });
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(17)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotSuccessError = exports.TimeOutError = exports.AbortError = exports.AjaxError = void 0;
var AjaxError = /** @class */ (function (_super) {
    __extends(AjaxError, _super);
    function AjaxError(message, req, code) {
        var _this = _super.call(this, message) || this;
        if (message)
            _this.message = message;
        if (req)
            _this.req = req;
        if (code)
            _this.code = code;
        return _this;
    }
    return AjaxError;
}(Error));
exports.AjaxError = AjaxError;
var AbortError = /** @class */ (function (_super) {
    __extends(AbortError, _super);
    function AbortError(message, req, code) {
        var _this = _super.call(this, message, req, code) || this;
        _this.name = 'AbortError';
        return _this;
    }
    return AbortError;
}(AjaxError));
exports.AbortError = AbortError;
var TimeOutError = /** @class */ (function (_super) {
    __extends(TimeOutError, _super);
    function TimeOutError(message, req, code) {
        var _this = _super.call(this, message, req, code) || this;
        _this.name = 'TimeOutError';
        return _this;
    }
    return TimeOutError;
}(AjaxError));
exports.TimeOutError = TimeOutError;
var NotSuccessError = /** @class */ (function (_super) {
    __extends(NotSuccessError, _super);
    function NotSuccessError(message, req, code) {
        var _this = _super.call(this, message, req, code) || this;
        _this.name = 'NotSuccessError';
        return _this;
    }
    return NotSuccessError;
}(AjaxError));
exports.NotSuccessError = NotSuccessError;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function formatMoney(money, _a) {
    var _b = _a === void 0 ? {} : _a, decimal = _b.decimal, trim = _b.trim;
    // 确定要保留的小数位数
    var decimalFinal = typeof decimal === 'number' ? Math.max(0, decimal) : 2;
    decimalFinal = Math.round(decimalFinal);
    // 确定 trim
    var trimFinal = !!trim;
    var num = isNaN(+money) ? 0 : +money;
    var prefix = num < 0 ? '-' : '';
    // 根据目标小数位, 进行四舍五入, 并按需自动填充 0
    var str = String(Math.round(Math.abs(num) * Math.pow(10, decimalFinal)) / Math.pow(10, decimalFinal));
    if (str.indexOf('.') === 0)
        str = '0' + str;
    if (str.indexOf('.') < 0)
        str += "." + makeZero(decimalFinal);
    var tempCurrentDecimalLength = str.length - str.indexOf('.') - 1;
    if (str.indexOf('.') > 0 && tempCurrentDecimalLength < decimalFinal)
        str += makeZero(decimalFinal - tempCurrentDecimalLength);
    var suffix = str.substring(str.indexOf('.'));
    suffix = suffix === '.' ? '' : suffix;
    str = str.substring(0, str.indexOf('.')).replace(/^-/, '');
    var result = '';
    while (str.length > 3) {
        result = "," + str.substring(str.length - 3, str.length) + result;
        str = str.substring(0, str.length - 3);
    }
    // 处理 trimFinal
    if (trimFinal) {
        suffix = suffix.replace(/0{1,}$/, '').replace(/\.$/, '');
    }
    return "" + prefix + str + result + suffix;
}
exports.default = formatMoney;
function makeZero(count) {
    if (count <= 0)
        return '';
    var num = Math.pow(10, count);
    return String(num).substring(1);
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param checkSyncFn 检测方法-只能返回 true or false
 * @param heartTime 心跳间隔, 单位毫秒 - 默认 500ms
 * @param timeout 超时时间, 单位毫秒 - 默认 30000ms, 即30秒
 */
function hearCheck(checkSyncFn, heartTime, timeout) {
    if (heartTime === void 0) { heartTime = 500; }
    if (timeout === void 0) { timeout = 30000; }
    return new Promise(function (resolve, reject) {
        if (checkSyncFn()) {
            resolve();
            return;
        }
        var startTime = new Date().getTime();
        var intervalId = window.setInterval(function () {
            if (checkSyncFn()) {
                window.clearInterval(intervalId);
                resolve();
            }
            else if (new Date().getTime() - startTime >= timeout) {
                window.clearInterval(intervalId);
                reject("timeout - " + timeout + ": \u7528\u65F6 " + (new Date().getTime() - startTime));
            }
        }, heartTime);
    });
}
exports.default = hearCheck;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/xtools_js/lib/index.js
var lib = __webpack_require__(2);

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
  return Object(lib["formatDate"])(value, format || 'YYYY-MM-DD HH:mm:ss');
}
function filterMoney(value, config) {
  return Number.isNaN(Number(value)) ? value : Object(lib["formatMoney"])(Number(value), config);
}
function filterBoolean(value) {
  var trueDesc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '是';
  var falseDesc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '否';
  return value ? trueDesc : falseDesc;
}
// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(1);
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/vue-class-component/dist/vue-class-component.esm.js
/**
  * vue-class-component v7.2.5
  * (c) 2015-present Evan You
  * @license MIT
  */


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return external_Vue_default.a.extend({
    mixins: Ctors
  });
}
function isPrimitive(value) {
  var type = _typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}
function warn(message) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-class-component] ' + message);
  }
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      Object.defineProperty(_this, key, {
        get: function get() {
          return vm[key];
        },
        set: function set(value) {
          vm[key] = value;
        },
        configurable: true
      });
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  if (false) {}

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return _defineProperty({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof external_Vue_default.a ? superProto.constructor : external_Vue_default.a;
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var reservedPropertyNames = [// Unique id
'cid', // Super Vue constructor
'super', // Component options that will be used by the component
'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets
'component', 'directive', 'filter'];
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties


    if (false) {}

    Object.defineProperty(Extended, key, descriptor);
  });
}

function vue_class_component_esm_Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

vue_class_component_esm_Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));
};

/* harmony default export */ var vue_class_component_esm = (vue_class_component_esm_Component);


// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
/** vue-property-decorator verson 9.0.0 MIT LICENSE copyright 2020 kaorun343 */
/// <reference types='reflect-metadata'/>




/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a reactive inject
 * @param from key
 * @return PropertyDecorator
 */
function InjectReactive(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key;
            var defaultVal_1 = (!!options && options.default) || undefined;
            if (!componentOptions.computed)
                componentOptions.computed = {};
            componentOptions.computed[key] = function () {
                var obj = this[reactiveInjectKey];
                return obj ? obj[fromKey_1] : defaultVal_1;
            };
            componentOptions.inject[reactiveInjectKey] = reactiveInjectKey;
        }
    });
}
function produceProvide(original) {
    var provide = function () {
        var _this = this;
        var rv = typeof original === 'function' ? original.call(this) : original;
        rv = Object.create(rv || null);
        // set reactive services (propagates previous services if necessary)
        rv[reactiveInjectKey] = this[reactiveInjectKey] || {};
        for (var i in provide.managed) {
            rv[provide.managed[i]] = this[i];
        }
        var _loop_1 = function (i) {
            rv[provide.managedReactive[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
            Object.defineProperty(rv[reactiveInjectKey], provide.managedReactive[i], {
                enumerable: true,
                get: function () { return _this[i]; },
            });
        };
        var this_1 = this;
        for (var i in provide.managedReactive) {
            _loop_1(i);
        }
        return rv;
    };
    provide.managed = {};
    provide.managedReactive = {};
    return provide;
}
function needToProduceProvide(original) {
    return (typeof original !== 'function' ||
        (!original.managed && !original.managedReactive));
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of a reactive provide
 * @param key key
 * @return PropertyDecorator | void
 */
function ProvideReactive(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        // inject parent reactive services (if any)
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject = componentOptions.inject || {};
            componentOptions.inject[reactiveInjectKey] = {
                from: reactiveInjectKey,
                default: {},
            };
        }
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managedReactive[k] = key || k;
    });
}
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            typeof options.type === 'undefined') {
            var type = Reflect.getMetadata('design:type', target, key);
            if (type !== Object) {
                options.type = type;
            }
        }
    }
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    // @ts-ignore
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return createDecorator(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, propertyKey, descriptor) {
        var key = hyphenate(propertyKey);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                var emitName = event || key;
                if (returnValue === undefined) {
                    if (args.length === 0) {
                        _this.$emit(emitName);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, args[0]);
                    }
                    else {
                        _this.$emit.apply(_this, [emitName].concat(args));
                    }
                }
                else {
                    if (args.length === 0) {
                        _this.$emit(emitName, returnValue);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, returnValue, args[0]);
                    }
                    else {
                        _this.$emit.apply(_this, [emitName, returnValue].concat(args));
                    }
                }
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(emit);
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
/**
 * decorator of a ref prop
 * @param refKey the ref key defined in template
 */
function Ref(refKey) {
    return createDecorator(function (options, key) {
        options.computed = options.computed || {};
        options.computed[key] = {
            cache: false,
            get: function () {
                return this.$refs[refKey || key];
            },
        };
    });
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

// EXTERNAL MODULE: ./components/hello-world/hello-world.scss
var hello_world = __webpack_require__(21);

// CONCATENATED MODULE: ./components/hello-world/hello-world.tsx
function hello_world_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { hello_world_typeof = function _typeof(obj) { return typeof obj; }; } else { hello_world_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return hello_world_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (hello_world_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

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
}(external_Vue_default.a);

HelloWorld = __decorate([vue_class_component_esm({})], HelloWorld);
/* harmony default export */ var hello_world_hello_world = (HelloWorld);
// EXTERNAL MODULE: ./components/file-download/file-download.scss
var file_download = __webpack_require__(22);

// CONCATENATED MODULE: ./components/file-download/file-download.tsx
function file_download_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { file_download_typeof = function _typeof(obj) { return typeof obj; }; } else { file_download_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return file_download_typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { file_download_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function file_download_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

      Object(lib["fileDownload"])({
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
}(external_Vue_default.a);

__decorate([Prop({
  "default": '下载'
})], file_download_FileDownload.prototype, "text", void 0);

__decorate([Prop({
  "default": 'primary'
})], file_download_FileDownload.prototype, "type", void 0);

__decorate([Prop()], file_download_FileDownload.prototype, "url", void 0);

__decorate([Prop({
  "default": false
})], file_download_FileDownload.prototype, "formData", void 0);

__decorate([Prop({
  "default": 'GET'
})], file_download_FileDownload.prototype, "method", void 0);

__decorate([Prop()], file_download_FileDownload.prototype, "name", void 0);

__decorate([Prop()], file_download_FileDownload.prototype, "params", void 0);

__decorate([Prop()], file_download_FileDownload.prototype, "data", void 0);

__decorate([Prop({
  "default": true
})], file_download_FileDownload.prototype, "credentials", void 0);

__decorate([Prop()], file_download_FileDownload.prototype, "headers", void 0);

__decorate([Prop()], file_download_FileDownload.prototype, "errorCb", void 0);

file_download_FileDownload = __decorate([vue_class_component_esm({})], file_download_FileDownload);
/* harmony default export */ var file_download_file_download = (file_download_FileDownload);
// EXTERNAL MODULE: ./node_modules/segment-js/dist/segment.js
var dist_segment = __webpack_require__(0);
var segment_default = /*#__PURE__*/__webpack_require__.n(dist_segment);

// CONCATENATED MODULE: ./node_modules/d3-ease/src/math.js
// tpmt is two power minus ten times t scaled to [0,1]
function tpmt(x) {
  return (Math.pow(2, -10 * x) - 0.0009765625) * 1.0009775171065494;
}

// CONCATENATED MODULE: ./node_modules/d3-ease/src/elastic.js


var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elastic_elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * tpmt(-(--t)) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elastic_elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * tpmt(t = +t) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elastic_elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * tpmt(-t) * Math.sin((s - t) / p)
        : 2 - a * tpmt(t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);

// CONCATENATED MODULE: ./node_modules/d3-ease/src/bounce.js
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}

// EXTERNAL MODULE: ./components/switch-controller/switch-controller.scss
var switch_controller = __webpack_require__(23);

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
        this.segmentA = new segment_default.a(this.$refs.pathA, '100% - 545', '100% - 305');
        this.segmentB = new segment_default.a(this.$refs.pathB, this.beginB + 120, this.endB - 120);
        this.segmentC = new segment_default.a(this.$refs.pathC, '100% - 545', '100% - 305');
      } else {
        this.segmentA = new segment_default.a(this.$refs.pathA, this.beginAc, this.endAc);
        this.segmentB = new segment_default.a(this.$refs.pathB, this.beginB, this.endB);
        this.segmentC = new segment_default.a(this.$refs.pathC, this.beginAc, this.endAc);
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
            easing: elastic_elasticOut,
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
            easing: bounceOut,
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
        easing: elastic_elasticIn,
        callback: function callback() {
          segment.draw('20% - 240', '20%', 0.27 * duration, {
            callback: function callback() {
              segment.draw(_this4.beginAc, _this4.endAc, 0.67 * duration, {
                easing: elastic_elasticOut,
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
        easing: elastic_elasticOut,
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
}(external_Vue_default.a);

switch_controller_SwitchController = __decorate([vue_class_component_esm({
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
var bread_crumb = __webpack_require__(24);

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
}(external_Vue_default.a);

__decorate([Prop({
  "default": '/'
})], BreadCrumb.prototype, "homePath", void 0);

__decorate([Prop({
  "default": '首页'
})], BreadCrumb.prototype, "homeLabel", void 0);

BreadCrumb = __decorate([vue_class_component_esm], BreadCrumb);
/* harmony default export */ var bread_crumb_BreadCrumb = (BreadCrumb);
// EXTERNAL MODULE: ./components/layout-head-left/layout-head-left.scss
var layout_head_left = __webpack_require__(25);

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
var nav_bar = __webpack_require__(26);

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
}(external_Vue_default.a);

__decorate([Prop({
  required: true
})], NavBar_NavBar.prototype, "menuTree", void 0);

__decorate([Prop({
  required: true
})], NavBar_NavBar.prototype, "collapse", void 0);

NavBar_NavBar = __decorate([vue_class_component_esm], NavBar_NavBar);
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
}(external_Vue_default.a);

__decorate([Prop({
  required: true
})], LayoutSidebarItem.prototype, "item", void 0);

__decorate([Prop({
  required: true
})], LayoutSidebarItem.prototype, "level", void 0);

__decorate([Prop({
  required: false,
  "default": ''
})], LayoutSidebarItem.prototype, "popperClass", void 0);

LayoutSidebarItem = __decorate([vue_class_component_esm], LayoutSidebarItem);
/* harmony default export */ var sidebar_LayoutSidebarItem = (LayoutSidebarItem);
// EXTERNAL MODULE: ./components/helper/sidebar/sidebar.scss
var sidebar = __webpack_require__(27);

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
}(external_Vue_default.a);

__decorate([Prop({
  required: true
})], Sidebar.prototype, "sidebarTree", void 0);

__decorate([Prop({
  required: true
})], Sidebar.prototype, "collapse", void 0);

__decorate([Prop({
  required: false,
  "default": ''
})], Sidebar.prototype, "activePath", void 0);

__decorate([Prop({
  required: false,
  "default": ''
})], Sidebar.prototype, "popperClass", void 0);

Sidebar = __decorate([vue_class_component_esm({
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
}(external_Vue_default.a);

__decorate([Prop({
  required: true
})], layout_head_left_LayoutHeadLeft.prototype, "menuTree", void 0);

layout_head_left_LayoutHeadLeft = __decorate([vue_class_component_esm({
  components: {
    BreadCrumb: bread_crumb_BreadCrumb,
    NavBar: nav_bar_NavBar,
    Sidebar: sidebar_Sidebar
  }
})], layout_head_left_LayoutHeadLeft);
/* harmony default export */ var layout_head_left_layout_head_left = (layout_head_left_LayoutHeadLeft);
// EXTERNAL MODULE: ./components/helper/nav-bar/hamburger.scss
var hamburger = __webpack_require__(28);

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
}(external_Vue_default.a);

__decorate([Prop({
  "default": false
})], Hamburger.prototype, "collapse", void 0);

Hamburger = __decorate([vue_class_component_esm], Hamburger);
/* harmony default export */ var nav_bar_Hamburger = (Hamburger);
// EXTERNAL MODULE: ./components/layout-left/layout-left.scss
var layout_left = __webpack_require__(29);

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
}(external_Vue_default.a);

__decorate([Prop({
  required: true
})], layout_left_LayoutLeft.prototype, "menuTree", void 0);

layout_left_LayoutLeft = __decorate([vue_class_component_esm({
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
}(external_Vue_default.a);

LayoutEmpty = __decorate([vue_class_component_esm], LayoutEmpty);
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
}(external_Vue_default.a);

LinesEllipsis = __decorate([vue_class_component_esm({
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
/******/ ])["default"];
});