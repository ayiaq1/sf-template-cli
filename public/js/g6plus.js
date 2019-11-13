(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["G6plus"] = factory();
	else
		root["G6plus"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components sync recursive event\\.js$":
/*!************************************!*\
  !*** ./components sync event\.js$ ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./etlNode/event.js": "./components/etlNode/event.js",
	"./flowArrowLine/event.js": "./components/flowArrowLine/event.js",
	"./flowEdge/event.js": "./components/flowEdge/event.js",
	"./flowStep/event.js": "./components/flowStep/event.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./components sync recursive event\\.js$";

/***/ }),

/***/ "./components/cmp.js":
/*!***************************!*\
  !*** ./components/cmp.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-06 18:02:43
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-03-20 10:07:57
*/
var etlNode = __webpack_require__(/*! ./etlNode */ "./components/etlNode/index.js");
var flowStep = __webpack_require__(/*! ./flowStep */ "./components/flowStep/index.js");
var flowEdge = __webpack_require__(/*! ./flowEdge */ "./components/flowEdge/index.js");
var flowArrowLine = __webpack_require__(/*! ./flowArrowLine */ "./components/flowArrowLine/index.js");
var _componentLibrary = [etlNode, flowStep, flowEdge, flowArrowLine];

var _require = __webpack_require__(/*! util/common.js */ "./src/util/common.js"),
    getType = _require.getType;

module.exports = {
    /**
        * @Author      hewuchang
        * @DateTime    2018-07-06
        * @lastTime    2018-07-06
        * @description 注册组件.
        */
    regist: function regist(comp) {
        _componentLibrary.push(comp);
    },

    /**
        * @Author      hewuchang
        * @DateTime    2018-07-06
        * @lastTime    2018-07-06
        * @description 初始化组件.
        */
    init: function init(graph, g6Interface) {
        _componentLibrary.forEach(function (comp) {
            if ('function' != typeof comp.init) {
                throw new Error(comp.name + '组件未实现初始化方法.');
            }
            comp.init(graph, g6Interface);
        });
    },
    destroy: function destroy(name) {},
    convertGraphData: function convertGraphData(targetData, data, plus) {
        var type = getType(data);
        if ('Object' == type) {
            if (undefined == data.shape) {
                targetData.nodes.push(data);
            } else {
                for (var i = 0, len = _componentLibrary.length; i < len; i++) {
                    var curCmp = _componentLibrary[i];
                    if (curCmp.name === data.shape) {
                        curCmp.convertGraphData(targetData, data, plus);
                        return;
                    }
                }
            }
        }
    }
};

/***/ }),

/***/ "./components/cmpEvent.js":
/*!********************************!*\
  !*** ./components/cmpEvent.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-10 10:16:27
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-03-20 10:16:59
* @description 整个组件事件分发.
*/
var events = [];
var matches = __webpack_require__("./components sync recursive event\\.js$");
matches.keys().forEach(function (key) {
	events = events.concat(matches(key));
});

module.exports = events;

/***/ }),

/***/ "./components/common/anchor.js":
/*!*************************************!*\
  !*** ./components/common/anchor.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-06 16:14:54
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-05-20 11:31:38
* @description 关于activity属性, 
* 1, 表示当前anchor是否处于激活状态, 默认是false. 
* 2, 若进入draw方法时候为true, 表明当前处于hover状态.
* 2, 当起所属的step处于mouse hover时默认触发limit类型为 out的anchor
* 3, 响应外层调用, 即通过emit触发showImportAnchor时, 激活out的anchor
*/
var anchorController = {
	in: function _in(model) {
		if (!model.showImportAnchor) return false;
		return true;
	},
	out: function out(model) {
		if (!model.activity) return false;
		return true;
	},
	any: function any(model) {
		if (!model.activity && !model.showImportAnchor) return false;
		return true;
	},
	addoutEffect: function addoutEffect(group, model, realPos) {
		group.addShape('circle', {
			attrs: {
				x: realPos.x,
				y: realPos.y,
				r: 5,
				fill: model.downActivity ? '#007eff' : '#fff',
				stroke: '#34b8e2',
				opacity: model.activity ? 1 : 0
			}
		});
	},
	addinEffect: function addinEffect(group, model, realPos) {
		group.addShape('circle', {
			attrs: {
				x: realPos.x,
				y: realPos.y,
				r: 10,
				fill: 'rgba(0, 126, 255, .5)'
			}
		});
		group.addShape('circle', {
			attrs: {
				x: realPos.x,
				y: realPos.y,
				r: 5,
				fill: '#fff',
				stroke: '#34b8e2'
			}
		});
	},
	addanyEffect: function addanyEffect(group, model, realPos) {
		group.addShape('circle', {
			attrs: {
				x: realPos.x,
				y: realPos.y,
				r: 10,
				fill: 'rgba(0, 126, 255, .5)'
			}
		});
		group.addShape('circle', {
			attrs: {
				x: realPos.x,
				y: realPos.y,
				r: 5,
				fill: '#fff',
				stroke: '#34b8e2'
			}
		});
	}
};
module.exports = {
	//节点名称
	type: '',
	name: 'anchor',
	anchorInfo: '',
	draw: function draw(item) {
		var group = item.getGraphicGroup();
		var model = item.getModel();
		var x = model.x,
		    y = model.y,
		    id = model.id,
		    limit = model.limit,
		    activity = model.activity,
		    _model$isAnchorSingle = model.isAnchorSingle,
		    isAnchorSingle = _model$isAnchorSingle === undefined ? false : _model$isAnchorSingle;

		x = parseInt(x);
		y = parseInt(y);
		this.anchorInfo = model.anchorInfo;
		var realPos = this.getRealPos();
		model.realPos = realPos;
		model.domPos = this.getDomPos(x, y, realPos);
		model.scaleOffset = this.getScaleOffset(x, y);
		var available = true;
		// 判断当前锚点是否可用。
		try {
			if (isAnchorSingle) {
				var edges = item.getParent().getModel().edges || [];
				var graph = item.getGraph();
				var anchorName = limit === 'out' ? 'sourceAnchor' : 'targetAnchor';
				edges.some(function (_ref) {
					var edgeId = _ref.id,
					    pos = _ref.pos;

					var edge = graph.getItem(edgeId);
					if (edge.getModel().relation[anchorName] === id) {
						available = false;
						return true;
					}
				});
			}
		} catch (e) {};
		if (!available) return;
		if (!anchorController[model.limit](model)) return group;
		group.addShape('circle', {
			attrs: {
				x: realPos.x,
				y: realPos.y,
				r: 5,
				fill: model.downActivity ? '#007eff' : '#fff',
				stroke: '#34b8e2',
				opacity: activity ? 1 : 0
			}
		});
		model.downActivity = !1;
		anchorController['add' + model.limit + 'Effect'](group, model, realPos);
		return group;
	},
	getScaleOffset: function getScaleOffset(x, y) {
		return {
			x: x + this.anchorInfo[0] * this.config.width,
			y: y + this.anchorInfo[1] * this.config.height
		};
	},
	getRealPos: function getRealPos() {
		return {
			x: this.anchorInfo[0] * this.config.width,
			y: this.anchorInfo[1] * this.config.height
		};
	},

	//返回当前锚点在画布上的位置.
	getDomPos: function getDomPos(x, y, realPos) {
		return {
			x: x + realPos.x,
			y: y + realPos.y
		};
	}
};

/***/ }),

/***/ "./components/common/bk.js":
/*!*********************************!*\
  !*** ./components/common/bk.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
 * @Author: hewuchang
 * @Date:   2018-07-06 16:15:03
 * @Last Modified by:   hewuchang
 * @Last Modified time: 2019-06-19 18:55:22
 */
module.exports = function () {
    var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return {
        name: 'bk',
        draw: function draw(item) {
            var group = item.getGraphicGroup();
            var model = item.getModel();
            return group.addShape('rect', {
                attrs: _extends({
                    x: 0,
                    y: 0
                }, attr, {
                    stroke: model.activity ? attr.activityStroke : attr.inactivityStroke,
                    fill: model.activity ? attr.activityFill : attr.inactivityFill
                })
            });
        }
    };
};

/***/ }),

/***/ "./components/common/label.js":
/*!************************************!*\
  !*** ./components/common/label.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
 * @Author: hewuchang
 * @Date:   2018-07-06 16:15:03
 * @Last Modified by:   hewuchang
 * @Last Modified time: 2019-06-19 18:55:22
 */
var getLength = function getLength(str) {
    var realLength = 0,
        len = str.length,
        charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;else realLength += 2;
    }
    return realLength;
};
var cutstr = function cutstr(str, len) {
    var dom = document.createElement('span');
    dom.innerHTML = str;
    dom.style.visibility = 'hide';
    dom.style.fontSize = '14px';
    dom.style.position = 'absolute';
    dom.style.bottom = '0px';
    dom.style.left = '0px';
    document.body.appendChild(dom);
    if (dom.getBoundingClientRect().width <= 134) {
        document.body.removeChild(dom);
        return str;
    }
    while (dom.getBoundingClientRect().width > 134 - 12) {
        str = str.slice(0, str.length - 1);
        dom.innerHTML = str;
    }
    document.body.removeChild(dom);
    return str + '...';
};
module.exports = function () {
    var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return {
        name: 'label',
        draw: function draw(item) {
            var group = item.getGraphicGroup();
            var model = item.getModel();
            var text = cutstr(model.label, 17);
            var attrs = _extends({
                x: 0,
                y: 0,
                fill: '#333',
                text: text
            }, attr);
            return group.addShape('text', {
                attrs: attrs
            });
        }
    };
};

/***/ }),

/***/ "./components/config.js":
/*!******************************!*\
  !*** ./components/config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-09 16:51:36
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-03-20 10:10:33
* @descrition 配置对象集
*/
module.exports = {
	common: {
		fontSize: 16
	},
	flowStep: {
		width: 178,
		height: 30,
		//文字从哪里开始
		labelStart: 40,
		fontSize: 14,
		toolIcons: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAFVBMVEUAAAAAfv8Afv8Afv8Afv8Afv8Afv9EXOEsAAAABnRSTlMA7pEGiYjxEaxMAAAAuklEQVRYw+3XMQrCQBCFYY1gLRbpRbAWT+ARPIIBffc/gsbmL1bGWRaWMcxfDcgHmtfEVZZlkdsc9mfzLBukm3mWraWdeZZtpfv3M8kiyFxEchml6VhFTnr3rCLjTKYqok9NpCwiYQEXYQE3YQE34cNOhDoRHopNmIhH//hNmAhtk/Lb2ISzI2HVdsJvdhMWcBMWcBOKSPiwA2EiL2EiN2EiN6GI5B9eSJIUpOUFfpCuxln5ZyTLssC9AHQTANtLuJdRAAAAAElFTkSuQmCC', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAkFBMVEUAAAAAfv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv99yR2qAAAAL3RSTlMA/fkepvMLly/2KAbkVzcTu7jq3pLWeDoyGSIEYk9nWxHawomDfs1wRD9KrJ7vczs4VoYAAALtSURBVGje7djXcqswEAbgX3QMGBewKW5xievJvv/bnckIMHhwBm3CHd+VfYPQSrsrgcFgMBgMBr+w/iCaHTz0aS3o2x09Sk2SNujPgwozC33RNSqt0JcTVaboywdVNAt/xQmuFiojqlniKbs6OZh2UyLS7ldI+oNqjKQc4TAnolgHS1ZGZ+8A+WovqCn+2gG6LYp/IRi8OZXEcTWnFubp5FJpD4aEFF2h7kIKuKmjk6I1Nyua5vY2CT0vTLb2nF6JEAxHahDGEjVLQ1DDhF2pniYjvBhNqO4GFpsq7gYtNi5V9uBJq2fMxmg1nlFBOGBalGOM8MaoHOUIrqCIVTUPfTH1NTOeLrJqLu5vB/loZpluiOdW0yGtigqzA8+6uTfXZqNuBZCKPbYAz12+dLEgZ0EN4lwsi5CJymwnMk+MYn0EvRDFXAz5dwx11tWut0DdbKn0usz9ousHuuIIq4lG0rzxulo0tqxxpFF9knMqxKcQXeXnGVVsOREZLL9IOceXAdNfK4N59NCJN6WabS0tNQcFR6ttqS3V7C10caA6+Vw5boRKJNehpYce0MWM6mSU/dcNNJbhk9uQ6nx0QQ0yxlr5u+TJ+BW/G/5uEOvtIEKhYrHDFStcdBQW3qEacUMn63/8Lfzvho7Sh/aSjFl7MmYvyejaqUrnPcVvykpiWcmbshKflZtKdlArkI8MDJapVOpHYDF+blpfjab1CZ7lj+1322y/GzDtux8kfA9Ml9Yjkea3HIk24Dp3P9zZYNpVmT9L0Cp5HlMv4DmqHLjjHLw8Ubo6bMGxUbgEsRNl0nKdC5Iwz8MkkNe5Jh3qcpfU3KAuJUUB1IX0JDqMIbLfrYmILp/U4jP4MqkUgSPcl88aA7gaLjW499t3UO2ygeVgySNBJKZlLlsHqoksSPoxJhJ2Dq70smx+VGtf5tAJe/k8SCl6clLIb7ZUo9ICvbGp4IZQwPyMfkJ/yoPRxEOf1rEg/2BhMBgMBoMB238udDo8mIPvtgAAAABJRU5ErkJggg==', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAaVBMVEUAAAAAfv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8pB4mAAAAAInRSTlMADubMEAMh4yUG9cSpkeDIPyftsax4OCiEt6CTaSv6uGsdKQCilQAAAV5JREFUaN7t2MtuwjAQRuEQCAWa9JICBUpv8/4P2YgujgqVjJnfUlHnLL35NMrEC1dRFEVRFF1to6Yq3efWFpvCzPTOhtpCCkauMu96O7fxBCNL6SzbyFfy56DNuYjDsF6HYFQPix9nb40KwThRdnmTnLW7qyNlPNIh/B8dCsNJEAxDwVAi0xszFAwRgoGCoUIwUDD8CAa9DAfrwWikCAbKYLQ6BINWB8OUyAyD3W2W5kfShh9JGxrk1OC+WpoXSRuVOZC0cT8YbiRtqJFZfWr4kbShRh5/MfxI2vAjacOPpA018nxs3GI4kKShQFKGHBknDOkkGGpkMme3MMTIfomCIUZaQ8EQI7XZEwqGEnk1+1ZmNYYa2RsKhhhpDaXF0CK1oZAI4ZOglEI+7NDifbVuiiHtAGwByiA7gBIIBRLINSJ5/WOkv9ToM5DuUmRTOR+f0/XdvIqiKIqi6I/0BYqB3dpJjb19AAAAAElFTkSuQmCC', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEUAAAAAfv8Afv8Afv8Afv8Afv+el/cYAAAABXRSTlMA7pEGicokfn8AAABjSURBVFjD7dU7CsAgEIThPEgfcoPcIEfIEWz2/lexk4FdELFQ4f8qp5jSnQ0Amp2vFc/ncuQw8bsc2U3cLkcuE8nloZUkL81UqKxVmfOLVc9F/1Gqnz6wL+wLFSrsC/sCYAYZq/A3UMFLcdQAAAAASUVORK5CYII='],
		deleteIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAaVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8G612AAAAInRSTlMAgNbVKsBA4PvvEvToqHq5sKCOV1EJz6GIYUc6Ix0Cn2xcxILL1gAAAc1JREFUeNrt3NtugkAURuGNdaocFEHxrG3n/R+yxSFemOxt0oBD2rVu+QN84YK7ESIaosoN1oe8sokfrDcxAgIECBAgt1zSWy4qJJHeSoAAAQLkHhAgQIAAAQLkp/8AcVZFqjT3oXl/3W+ZKhXOSvwfCcjYAjK2gIwtSayKbjVzD01mgzVxD818qEisBvuBj+eXDwQIECB2QIAAsQMCBIgdECBA7IDEhZzrstqIUbNcrZZitanK+hwbcszb63tRy7btYJvpi307yE9xIVkRBvo3WYTBTv8eYVA0USHrbrDQBtc8DPKrLg0do0L23WCiDaa+a6ottt1gGQGiP8SG2M8AAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAD5HeRtFOc0Pj05s5mHQd5oi5UPraNCslx9i66FKu36CoM0iwqRT99Witolvb3mRV8433aQuBA51eXuIEZZe95vZi0Ou7KeinACM5AnAQECxA4IECB2QIAAsQMCBIgdkBdAqveIVb1ARhQQICEgQIDYvRjyDQxMQ62yCHEJAAAAAElFTkSuQmCC',
		infoIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAaVBMVEUAAAAnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjhOUI+VAAAAInRSTlMAo9O6nJgbjr8wEgr23te0rY+KV0MqJQ8F8czJfn1rak5NWqJKTwAAAI1JREFUGNM1jlkWgkAMBDsMm+CuIO5a9z+kNkt9TOVlkn6RWcUa1rHSTAXbiC0cNVJTNHZTkOwDb2topZdnenKZbCMpp9QeTcFfv4TIZC6fwdogChdlorfzpdEEMgXLSpYmoR0yRDlqp46DM697Nyo655yc6v/TdNONR2u3T+4aCairqobQzDnxJ51d/wC/cglHdd5FoQAAAABJRU5ErkJggg==',
		toolWidth: 26,
		toolHeight: 26,
		radius: 15,
		anchor: [{
			pos: [0.5, 0],
			limit: 'in'
		}, {
			pos: [0.5, 1],
			limit: 'out'
		}],
		//默认的icon
		defaultIcon: ''
	},
	flowSwitch: {
		height: 100,
		lineWidth: 2
	},
	flowEdge: {
		//箭头的边长.
		arrowLen: 6
	},
	flowArrowLine: {
		//箭头的边长.
		arrowLen: 6
	},
	getConfig: function getConfig(comp) {
		return this[comp];
	}
};

/***/ }),

/***/ "./components/convert.js":
/*!*******************************!*\
  !*** ./components/convert.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-09 14:17:36
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-05-18 16:20:40
* @description 根据不同的类型生成其内置的各个Node组件的相关数据信息.
*/
var _require = __webpack_require__(/*! ./config.js */ "./components/config.js"),
    flowStep = _require.flowStep;

var _require2 = __webpack_require__(/*! util/common.js */ "./src/util/common.js"),
    getCubicController = _require2.getCubicController;

module.exports = {
	/*
  * @Author: hewuchang
  * @description 生成flow group的相关数据.
  */
	getFlowGroup: function getFlowGroup(targetData, sourceData, plus, parentGroupId) {
		var x = sourceData.x,
		    y = sourceData.y,
		    label = sourceData.label,
		    anchor = sourceData.anchor,
		    _sourceData$extraData = sourceData.extraData,
		    extraData = _sourceData$extraData === undefined ? {} : _sourceData$extraData,
		    id = sourceData.id,
		    _sourceData$edges = sourceData.edges,
		    edges = _sourceData$edges === undefined ? [] : _sourceData$edges,
		    _sourceData$propertie = sourceData.properties,
		    properties = _sourceData$propertie === undefined ? {} : _sourceData$propertie;

		x = parseInt(x);
		y = parseInt(y);
		if (!!id === false) {
			id = plus.getGroupId();
		}
		var attr = {
			x: x,
			y: y,
			id: id,
			label: label,
			edges: edges,
			shape: "flowStepGroup",
			anchor: anchor,
			extraData: extraData,
			properties: properties
		};
		if (undefined !== parentGroupId) attr.parent = parentGroupId;
		targetData.groups.push(attr);
		return id;
	},

	/*
  * @Author: hewuchang
  * @description 生成flowStep相关的内容.
  */
	getFlowStepCompose: function getFlowStepCompose(targetData, sourceData, plus, groupId) {
		var x = sourceData.x,
		    y = sourceData.y,
		    label = sourceData.label,
		    anchor = sourceData.anchor,
		    icon = sourceData.icon,
		    _sourceData$delAble = sourceData.delAble,
		    delAble = _sourceData$delAble === undefined ? true : _sourceData$delAble,
		    _sourceData$infoAble = sourceData.infoAble,
		    infoAble = _sourceData$infoAble === undefined ? false : _sourceData$infoAble,
		    _sourceData$isAllowCy = sourceData.isAllowCycle,
		    isAllowCycle = _sourceData$isAllowCy === undefined ? true : _sourceData$isAllowCy,
		    _sourceData$isAnchorS = sourceData.isAnchorSingle,
		    isAnchorSingle = _sourceData$isAnchorS === undefined ? false : _sourceData$isAnchorS;

		x = parseInt(x);
		y = parseInt(y);
		//添加步骤底.
		targetData.nodes.push({
			shape: 'flowStepBk',
			x: x,
			y: y,
			fill: '#fff',
			parent: groupId,
			id: plus.getNodeId(groupId, 'bk', 1)
		});
		//添加工具节点.
		/*for( let i = 0; i <= 3; i++ ) {
    targetData.nodes.push({
        shape : 'flowStepTool',
        id : plus.getNodeId(),
        x,
        y,
        parent : groupId,
        scaleOffsetBase : i,
    });
   }*/
		//添加步骤icon'http://pic.616pic.com/ys_b_img/00/03/60/X2hatt6SpN.jpg'
		targetData.nodes.push({
			shape: 'flowStepIcon',
			x: x,
			y: y,
			nodeIcon: icon,
			parent: groupId,
			id: plus.getNodeId(groupId, 'icon', 1)
		});
		//添加文本节点.
		targetData.nodes.push({
			shape: 'flowStepLabel',
			parent: groupId,
			x: x,
			y: y,
			label: label,
			id: plus.getNodeId(groupId, 'label', 1)
		});

		//添加锚点图标.
		(anchor || flowStep.anchor).forEach(function (curAnchor, index) {
			targetData.nodes.push({
				x: x,
				y: y,
				id: plus.getNodeId(groupId, 'anchor', index),
				limit: curAnchor.limit,
				shape: 'flowStepAnchor',
				parent: groupId,
				activity: false,
				anchorInfo: curAnchor.pos,
				isAnchorSingle: isAnchorSingle
			});
		});

		// 添加删除. 数据驱动,判断是否能删除.
		targetData.nodes.push({
			shape: 'flowStepDelete',
			parent: groupId,
			x: x,
			y: y,
			id: plus.getNodeId(groupId, 'delete', 1),
			delAble: delAble
		});

		// 添加信息提示. 数据驱动,判断是否需要显示信息.
		targetData.nodes.push({
			shape: 'flowStepInfo',
			parent: groupId,
			x: x,
			y: y,
			id: plus.getNodeId(groupId, 'info', 1),
			infoAble: infoAble
		});
	},

	/*
  * @Author: hewuchang
  * @description 生成flowSwitch group的相关数据.
  */
	getFlowSwitchGroup: function getFlowSwitchGroup(targetData, sourceData, plus, groupId, parentGroupId) {
		var x = sourceData.x,
		    y = sourceData.y,
		    label = sourceData.label,
		    anchor = sourceData.anchor;

		x = parseInt(x);
		y = parseInt(y);
		var attr = {
			x: x,
			y: y,
			id: groupId,
			shape: "flowSwitchGroup",
			anchor: anchor
		};
		if (undefined !== parentGroupId) attr.parent = parentGroupId;
		targetData.groups.push(attr);
	},

	/*
  * @Author: hewuchang
  * @description 生成flowSwitch的相关组件.
  */
	getFlowSwitchCompose: function getFlowSwitchCompose(targetData, sourceData, plus, groupId) {
		var x = sourceData.x,
		    y = sourceData.y,
		    label = sourceData.label,
		    anchor = sourceData.anchor;

		x = parseInt(x);
		y = parseInt(y);
		//添加步骤底.
		targetData.nodes.push({
			shape: 'flowSwitchBk',
			x: x,
			y: y,
			fill: '#fff',
			parent: groupId
		});

		//添加文本节点.
		targetData.nodes.push({
			shape: 'flowSwitchLabel',
			parent: groupId,
			x: x,
			y: y,
			label: label
		});
	},

	/*
  * @Author: hewuchang
  * @description 生成flowEdge group的相关数据.
  */
	getFlowEdgeGroup: function getFlowEdgeGroup(targetData, sourceData, plus, parentGroupId) {
		var source = sourceData.source,
		    target = sourceData.target,
		    label = sourceData.label,
		    anchor = sourceData.anchor,
		    c1 = sourceData.c1,
		    c2 = sourceData.c2,
		    id = sourceData.id,
		    _sourceData$relation = sourceData.relation,
		    relation = _sourceData$relation === undefined ? [] : _sourceData$relation,
		    edgeId = sourceData.edgeId;

		if (!!id === false) {
			id = plus.getGroupId();
		}
		if (undefined == c1 || undefined == c2) {
			var tc = getCubicController(source, target);
			c1 = tc.c1;
			c2 = tc.c2;
		}

		var attr = {
			shape: "flowEdgeGroup",
			source: source,
			target: target,
			id: id,
			relation: relation,
			edgeId: edgeId || plus.getNodeId(id, 'main', 1)
		};
		if (undefined !== parentGroupId) attr.parent = parentGroupId;
		targetData.groups.push(attr);
		return id;
	},

	/*
  * @Author: hewuchang
  * @description 生成flowEdge相关的内容.
  */
	getFlowEdgeCompose: function getFlowEdgeCompose(targetData, sourceData, plus, groupId) {
		var source = sourceData.source,
		    target = sourceData.target,
		    label = sourceData.label,
		    anchor = sourceData.anchor;

		var x = Math.min(target.x, source.x);
		var y = Math.min(target.y, source.y);

		targetData.nodes.push({
			shape: 'flowEdgeArrow',
			source: source,
			target: target,
			parent: groupId,
			id: plus.getNodeId(groupId, 'arrow', 1)
		});

		targetData.nodes.push({
			shape: 'flowEdgeController',
			source: source,
			target: target,
			x: x,
			y: y,
			pos: 'source',
			parent: groupId,
			id: plus.getNodeId(groupId, 'controller', 1)
		});

		targetData.nodes.push({
			shape: 'flowEdgeController',
			source: source,
			target: target,
			x: x,
			y: y,
			pos: 'target',
			parent: groupId,
			id: plus.getNodeId(groupId, 'controller', 2)
		});

		//添加贝塞尔曲线.
		targetData.edges.push({
			shape: 'flowEdgeMain',
			source: source,
			target: target,
			pGroup: groupId,
			id: plus.getNodeId(groupId, 'main', 1)
		});
	},

	/*
  * @Author: hewuchang
  * @description 生成flowArrowLine group的相关数据.
  */
	getFlowArrowLineGroup: function getFlowArrowLineGroup(targetData, sourceData, plus, parentGroupId) {
		var source = sourceData.source,
		    target = sourceData.target,
		    label = sourceData.label,
		    id = sourceData.id,
		    _sourceData$relation2 = sourceData.relation,
		    relation = _sourceData$relation2 === undefined ? [] : _sourceData$relation2,
		    edgeId = sourceData.edgeId;

		if (!!id === false) {
			id = plus.getGroupId();
		}

		var attr = {
			shape: "flowArrowLineGroup",
			source: source,
			target: target,
			id: id,
			relation: relation,
			edgeId: edgeId || plus.getNodeId(id, 'main', 1)
		};
		if (undefined !== parentGroupId) attr.parent = parentGroupId;
		targetData.groups.push(attr);
		return id;
	},

	/*
  * @Author: hewuchang
  * @description 生成flowEdge相关的内容.
  */
	getArrowLineCompose: function getArrowLineCompose(targetData, sourceData, plus, groupId) {
		var source = sourceData.source,
		    target = sourceData.target,
		    label = sourceData.label,
		    anchor = sourceData.anchor,
		    _sourceData$isAdded = sourceData.isAdded,
		    isAdded = _sourceData$isAdded === undefined ? false : _sourceData$isAdded;

		var x = Math.min(target.x, source.x);
		var y = Math.min(target.y, source.y);

		// 直线
		targetData.edges.push({
			id: plus.getNodeId(groupId, 'main', 1),
			shape: 'flowArrowLineMain',
			source: source,
			target: target,
			pGroup: groupId,
			isAdded: isAdded
		});
	}
};

/***/ }),

/***/ "./components/etlNode/config.js":
/*!**************************************!*\
  !*** ./components/etlNode/config.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
			width: 73,
			height: 73,
			//文字从哪里开始
			labelStart: 40,
			fontSize: 14,
			toolIcons: [],
			iconWidth: 43,
			iconHeight: 43,
			defaultIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAC50lEQVRYhdXZT2gcZRgG8N8m0wTFkgrFw0gp0hXUHhSkeLAiRdGhBFHPvQhe/HMT0ZNX8arHVhCEnkpBFLqC9qSIIP459DZKMXQPLWprItKYZj18M+mXodmMNvPt5oGBd57vXebZmXfe99lve4fOXXoXr6JnuvF579C5S6NJq2iLDH/jDqzi54qflru8hgNYwF9ZRRCEPpRaTVnkY9f7g+FJvIz1LOJTlsNjkZjm2kpZ5Bei8/U6iMXOdKNrEw7jPO4Zl9QfDN8ri/zt6nRPzacQGOMV2wit8FZ/MHy0SaYWe/E/5P7WJLJbZXWID3AfjgsdaC1a61V6lvB6WeQXmx+Oxa52p3ED1/FaTGzXDXCtDmKxd+OpHZO1NdaxghvoNbrBCPO4M+IerIMMd1XxAXzRqczbw9yMNI9/JzCf4Siew5zwaKYN9ej/NsN31TERtHjBNpDhNF7ErGi0pcItxm0TPeHF+2bXWcQVoSP8jo+EbzE7QU01RsLLvyh4ipXMTbe1hDdSK2phEecEsaN4KMx3KSrCYdwv+JJRo2ZnBYs4iLh9dZDaGyzi0+2S+oPh1zhWFvk/MZ/adR1vmfc4HmmSqcV+3zLvCn5pkqnL4BSu4mnBIjYn5ix+xftlkY/1s9e7UtjAmepAqwl2tQ5isfvxgtDKui6P9eo6TYtImFi1H1jFw/VChr1VfC/OdqvxtrB3Bj9NWkVLXM6EFtEX7vI0+oSeUDZlXbP7hAk2zX72coYLJrBt9D9wbcbuEAoLGZaFjrCElxJdeJzJj1sXvIlnsRz32T/wZQfCxqKFRVwUxG4aCnMdaopxAseE0XqjMRT2CD8C3imL/M+KW6gXU3uDE/i4Rd7z/cHwSFnkV2Iytet6smXeQWFPbBNSi/2kZd55/NAkU5fBZ3gCD9h6Yi6XRX46Ot/ISb2LCF9VB1pZxOU6yNzsaQfxocq67ay+rbHNJsea0Dmgt+s2Oc7gGdPz39dW+PFf9viodIlinGkAAAAASUVORK5CYII=',
			deleteIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAflBMVEUAAABDsHNFsXVEsXREsHREsXRFsHNEsnRDsnREsXREr3REsXREsXREsXREsXREsXREsXREsXRDsHNIt3pIuHBEsnREsXREsnREsnREsXREsnREsnREsnRDsXVEsXRDsXRDsXNEsnNFsHNGqG5EsXREsnREsnREtHRFsHVEsXQx1EKLAAAAKXRSTlMAKtSqgFYw4GdOP/jk2c7KuY9gFwb077KemJKIe3Z1b0Q4HA7qwqdIJexfXEkAAAEOSURBVDjLldLZroMwDATQoewUKFC673vn/3/w0ir4GggPPS9IHisyTqA5cXU4Vq85rK7HGY1VNOwJyjuV1Ou1+OzLEigVLVSHRysHxol2U9MRcExe42PDgYn5evoA159K7piORQBgb6o+4mWby9hHALK/CufU5DvZKeBQREjCb76V0hKI+e+ES9bkeuobIioHBA7WVN4yo/zXk9qlu8b8DcRTKkHnHmdXuE+8lqp0xZniMYdLrpHcKWrUcmJxa/LGBpdUdgrI0Ku6yb9KBJkpbtVj8pvc2MGTYiNvb4uizQt8RBx1xlfBER6MkFY7iJQWBZSSAyU6ogk7HjF6bns1SXaAje/m4WIRzrYJfvAHdq9pRz9fKSAAAAAASUVORK5CYII=',
			toolWidth: 26,
			toolHeight: 26,
			radius: 5,
			activityStroke: '#23b7e5',
			inactivityStroke: '#23b7e5',
			activityFill: '#b4ebff',
			inactivityFill: '#e8f9ff',
			anchor: [{
						pos: [0.5, 0.5],
						limit: 'any'
			}],
			infoIncos: {
						ok: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAjVBMVEUAAAAAwooAw4wAwosAwosAw4oAwosAwosAv4sAw4wAwowAwooAwosAwosAwosAwYoAwosAwowAw4wAv4gAw4wAwosAwosAw4sAw4sAwosAw4sAwooAwooAtoYAwooAwosAw4sAxIoAxpQAw4sAwosAwosAw4wAwY0AwowAwowAw4wAwowAyJIAxIkAwoswUhyYAAAALnRSTlMAgNXcdFW/SUAcFem3qJ+XYzErHxjy0cixim9RRQWPe1s1CvnkzV0nwbytaA4N+60UxQAAATBJREFUOMutk9t2gjAQRcNVQLkIini3ttVe9/9/XiEhTWShT54H1kz2TCBngniyomDj76p7dJJNkfKcMVxmHVu6q7ZqrCBq17Mg7sKfyUjBC7iBuK+y5YvB2vlg4tglHPZsPfb/yZo6ucVVDmbL+SunwYk9KE3qMLvlBRBZ+Qr/hvvA1sr36nV7mx/thphp+0yajUpPQCqjMHR6k96FuNaQ/7ZZALixBAdMQXdUmM0lZyf6At96hcgBT/K1UEq56I+UNmUoedqhWm8VUvQdUt/aPzj359JGNR2fGf++hlafQ8uicklhhuVWMkhWfOjFlE9jlYfbT7EujZ+W3RE0KrrqeUKuaV+Rzk26cBhOOGkgv1Sq23kbu9kbT137FkJYGGA2ObpILbPJg1/vWOzEc/UHIwgja5crh8MAAAAASUVORK5CYII=',
						error: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAflBMVEUAAADXHATYHgbYHgfXHQXZHgbYHQXYHQXYHwXZHgbXHQXfHgnYHgbYHgbZHQXZHQfYHgbYHQbYHQbYHgbcIAjYHQbYHQfYHgXYHQbXHQfXHgDYHgbZHgXYHQbZHgbYHgbZHAfWHgfcIwzcHgDXHgXYHgbYHgbYHgbbJADYHgY4EjIOAAAAKXRSTlMAPt1vLyrAZ2JRNBntgFsk9OSwoR2mm5B4cwzMvLefVUlFFhDozamJB4i1xhoAAAErSURBVDjLrZLZcoMwDEWNAbNvIWQh+57z/z/YabExEPrQmd4X60oj6UqW+CNuvuPffgtew2MKQHoMrzNxV1I229zJt02JdKfhpUKFrSZtsOMwjjtwGjk23EftwRfTFDlgCwqdqJTadGbBc1DPaAqB0Kgm0FaR9oouwMWQ3U4baxzj8wDPkIC8M+TeTgss+7WWjc6yW2mB1mpPf56I2M5TUlqypehaJdYnh+PnRN9PhrBQqOGyso8KCxbjClMNK1YfGjxC63vxsqROtbCnmMf9qMumy9n42ZS+DPquWVvBVdJ7TzN/cSLrf6Ay9/J+8Hh3po9MBgOjSZzF5l5whEUG0fjGddxutaKJLTsgp0fq17B340QksbuH2p8Zu67oUNVnMQ8vCrIg8sS/4gtrGhmjAfbrmQAAAABJRU5ErkJggg==',
						forbid: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAjVBMVEUAAADkLy/kMDDmMDDjMDDkMDDjLy/kLy/kLy/kMDDkMDDkMDDjMDDjMDDjMDDjLy/kLy/lLS3jMDDjMDDiMDDmMTHkMDDkMDDjMDDkMDDkLy/jMDDjMDDjLy/jLy/iLy/jMDDkMDDhMjLoLi7hMzPjMDDjMDDkLy/iLy/mMDDmMDDjMDDjMDDgLi7jMDCgaPskAAAALnRSTlMAmYUZtbGcTM5qVU/kv7l5QQWii4A8EvXu6tjKlHNmXVo4MwsI3qaORigixWUySi/wHwAAATFJREFUOMutk9d6wjAMhe3shIQECHuvMtr+7/94LcTGCnDJudE4x7Lkz1IfRa/yoiCIvKr3lt7pKQbTxeGV10BSr+LM6wLHzTOfgN4a30+BsM1DvnNRFwDJB+C7aAM6g5PLRC1ezUGpDFY2UUFH8CmU/+ZEYjNhq6P9rLl+lNgSPsRCUMLGON9NZk0ueD+34QiGd2eAFgIPqse03t32SR1/GVNYv09khGKGBfxaf0Bwt4XocQt99Sz4Yq1cVa43a4jICJc2dQbPXVeYIHPvFMo3P4zZunmNlNIV6JA8zkW25vTgPuCc2rgxTRc/yBepmY3aV+8T5o4/S/VwfFMsEfP6ECiHChgeKUSDoCSuM3DfJg5Bqzb2GqBbZp1U5zCp3y3OBIPJ4vJ+9eJm9eKe+iT+ACcBJFBOduaZAAAAAElFTkSuQmCC',
						running: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAXVBMVEUAAAASldoRltsQk9sTi9gTlNwSltsSltwSltwSl9oSltwSldwRltwRltsSldsRldsRltwSltsRltsRltsSltsTltsTldoSldsSldsTltsOnNwSltsRltsSltoSltv/5Ew6AAAAHnRSTlMAgMtADSX1wt9T0oxmXDiWVciUhXZtYEbeaxLsr6Dq7yJ4AAAA7ElEQVQ4y5VT2RKCMAy06cUhgorguf//mTp07BaE6bgPJZksubP7B7qVwrlC6sOa1VwEEcf9j11dgeqkrTFWnwWQZm6/Ab6kWnpAzf4HLguPgUHNLmMOQPeVG+CbtxliBSMZgj5WmjjuIUHYw+9SQoRHqPaIcp1QBheH8CGBqKA/b43zFuGEdkpRbxH05LyA3SJYFJ/XwaSENh0g3JLQwPUzwjKEeT7gxyRETJJxX0B9j0myTKKrUDWxTDaKuNeAYqPYakIry1ZzWASHNUGg1uwKwoUZ1uzoEnncsFPrf5c2v/b5w8mfXv5483gDHcgTTqxxs5cAAAAASUVORK5CYII='
			}
};

/***/ }),

/***/ "./components/etlNode/convert.js":
/*!***************************************!*\
  !*** ./components/etlNode/convert.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

/*
* @Author: hewuchang
* @Date:   2018-07-09 14:17:36
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-05-18 16:20:40
* @description 根据不同的类型生成其内置的各个Node组件的相关数据信息.
*/
var config = __webpack_require__(/*! ./config.js */ "./components/etlNode/config.js");

var _require = __webpack_require__(/*! util/common.js */ "./src/util/common.js"),
    getCubicController = _require.getCubicController;

var name = __filename.split('/')[1];
module.exports = {
	getEtlNodeGroup: function getEtlNodeGroup(targetData, sourceData, plus, parentGroupId) {
		var x = sourceData.x,
		    y = sourceData.y,
		    label = sourceData.label,
		    anchor = sourceData.anchor,
		    _sourceData$extraData = sourceData.extraData,
		    extraData = _sourceData$extraData === undefined ? {} : _sourceData$extraData,
		    id = sourceData.id,
		    _sourceData$edges = sourceData.edges,
		    edges = _sourceData$edges === undefined ? [] : _sourceData$edges,
		    _sourceData$propertie = sourceData.properties,
		    properties = _sourceData$propertie === undefined ? {} : _sourceData$propertie;

		x = parseInt(x);
		y = parseInt(y);
		if (!!id === false) {
			id = plus.getGroupId();
		}
		var attr = {
			x: x,
			y: y,
			id: id,
			label: label,
			edges: edges,
			shape: name + 'Group',
			anchor: anchor,
			extraData: extraData,
			properties: properties
		};
		if (undefined !== parentGroupId) attr.parent = parentGroupId;
		targetData.groups.push(attr);
		return id;
	},

	/*
  * @Author: hewuchang
  * @description 生成flowStep相关的内容.
  */
	getEtlNodeCompose: function getEtlNodeCompose(targetData, sourceData, plus, groupId) {
		var x = sourceData.x,
		    y = sourceData.y,
		    label = sourceData.label,
		    anchor = sourceData.anchor,
		    icon = sourceData.icon,
		    _sourceData$delAble = sourceData.delAble,
		    delAble = _sourceData$delAble === undefined ? true : _sourceData$delAble,
		    _sourceData$infoType = sourceData.infoType,
		    infoType = _sourceData$infoType === undefined ? false : _sourceData$infoType,
		    _sourceData$isAnchorS = sourceData.isAnchorSingle,
		    isAnchorSingle = _sourceData$isAnchorS === undefined ? false : _sourceData$isAnchorS;

		x = parseInt(x);
		y = parseInt(y);
		//添加步骤底.
		targetData.nodes.push({
			x: x,
			y: y,
			id: plus.getNodeId(groupId, 'bk', 1),
			fill: '#fff',
			shape: name + 'Bk',
			parent: groupId
		});
		targetData.nodes.push({
			x: x,
			y: y,
			id: plus.getNodeId(groupId, 'icon', 1),
			shape: name + 'Icon',
			parent: groupId,
			nodeIcon: icon
		});
		//添加文本节点.
		targetData.nodes.push({
			x: x,
			y: y,
			id: plus.getNodeId(groupId, 'label', 1),
			label: label,
			shape: name + 'Label',
			parent: groupId
		});
		//添加锚点图标.
		(anchor || config.anchor).forEach(function (curAnchor, index) {
			targetData.nodes.push({
				x: x,
				y: y,
				id: plus.getNodeId(groupId, 'anchor', index),
				limit: curAnchor.limit,
				shape: name + 'Anchor',
				parent: groupId,
				activity: false,
				anchorInfo: curAnchor.pos,
				isAnchorSingle: isAnchorSingle
			});
		});

		if (!!infoType === true) {
			targetData.nodes.push({
				x: x,
				y: y,
				id: plus.getNodeId(groupId, 'info'),
				shape: name + 'Info',
				parent: groupId,
				infoType: infoType
			});
		}

		// 添加删除. 数据驱动,判断是否能删除.
		targetData.nodes.push({
			x: x,
			y: y,
			id: plus.getNodeId(groupId, 'delete', 1),
			shape: name + 'Delete',
			parent: groupId,
			activity: false,
			delAble: delAble
		});
	}
};
/* WEBPACK VAR INJECTION */}.call(this, "components/etlNode/convert.js"))

/***/ }),

/***/ "./components/etlNode/event.js":
/*!*************************************!*\
  !*** ./components/etlNode/event.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

/*
* @Author: hewuchang
* @Date:   2018-07-06 17:11:08
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-05-18 16:22:41
*/
var _require = __webpack_require__(/*! util/handle.js */ "./src/util/handle.js"),
    enterAmplificationFunc = _require.enterAmplificationFunc,
    leaveShrinkFunc = _require.leaveShrinkFunc,
    updateEdge = _require.updateEdge,
    updateGroupPos = _require.updateGroupPos;

var _require2 = __webpack_require__(/*! util/common.js */ "./src/util/common.js"),
    getShapeName = _require2.getShapeName,
    getOprType = _require2.getOprType;

var arg = __webpack_require__(/*! components/eventArgument.js */ "./components/eventArgument.js");
var compName = __filename.split('/')[1];

var _require3 = __webpack_require__(/*! src@/events/eventConsts */ "./src/events/eventConsts.js"),
    COMPCLICK = _require3.COMPCLICK,
    COMPDELETE = _require3.COMPDELETE,
    COMPINFOHOVER = _require3.COMPINFOHOVER,
    COMPINFOLOST = _require3.COMPINFOLOST,
    COMPSTEPHOVER = _require3.COMPSTEPHOVER,
    COMPSTEPLOST = _require3.COMPSTEPLOST;

//hover时当前激活的node集合.


var activeItems = [];
//上一次Hover触发激活的item;
var lastItem = null;
//拖动初始参考
var dx = void 0,
    dy = void 0;
//即将被拖动的步骤对象.
var ghostCloneTarget = null;
//组件自身的操作类型定义:
var moveStep = compName + 'moveStep';

var _leave = function _leave(em, flag) {
	if (!!flag === false) return;
	em.emit(lastItem, compName, COMPSTEPLOST);
	activeItems.forEach(function (item) {
		em.graph.update(item, {
			activity: !1
		});
	});
	activeItems = [];
};

var _hover = function _hover(em, item) {
	activeItems = item.getParent().getChildren();
	activeItems.forEach(function (item) {
		em.graph.update(item, {
			activity: !0
		});
	});
};

var _handleNodeLeave = function _handleNodeLeave(em, curItem) {
	var isLeave = !curItem ? !0 : !1;
	/*
  * 如果纯粹是移动到空白区域, 视为离开操作
  * 如果是快速拖动进入其他图形 或者 是其他图形重叠时, 移出直接到其他图形上也要做离开操作.
  */
	if (null == curItem || null !== lastItem) {
		var model = lastItem.getModel();
		var shapeName = getShapeName(model.shape, compName);

		if (curItem && curItem.getParent() != lastItem.getParent()) isLeave = !0;

		switch (shapeName) {
			case 'anchor':
			case 'tool':
				leaveShrinkFunc(lastItem);
				em.emit(lastItem, compName, 'changeCursor', 'pointer');
				break;
			case 'icon':
			case 'label':
			case 'bk':
				break;
			case 'info':
				em.emit(lastItem, compName, COMPINFOLOST);
				break;
		}
		lastItem = null;
		_leave(em, isLeave);
		return;
	}
};
/*
 * @Author: hewuchang
 * @Date:   2018-07-10 10:11:08
 * @description 移动事件处理, 单纯是为了做Hover相应.
 */
var _handlePureMove = function _handlePureMove(ev, em) {
	var item = ev.item;
	if (item == lastItem) return;

	_handleNodeLeave(em, item);
	if (!item) return;
	var model = ev.item.getModel();
	var shapeName = getShapeName(model.shape, compName);
	switch (shapeName) {
		case 'icon':
		case 'label':
		case 'bk':
		case 'delete':
			_hover(em, item);
			em.emit(item.getParent(), compName, COMPSTEPHOVER);
			break;
		case 'anchor':
		case 'tool':
			em.emit(item, compName, 'changeCursor', 'pointer');
			enterAmplificationFunc(item);
			break;
		case 'info':
			em.emit(item, compName, COMPINFOHOVER);
			_hover(em, item);
			break;
	}
	lastItem = item;
};
/*
 * 根据shapeName处理步骤图形上的up事件
 * @param {Object} ev 事件event
 * @param {Object} em 外层事件管理者.
 * @param {Object} item 图形自身
 * @param {String} shapeName 图形的名称.
 */
var _handleStepUp = function _handleStepUp(ev, em, item, shapeName) {
	switch (shapeName) {
		// 在移动的步骤节点上up, 结束拖动事件.
		case 'ghostStep':
			em.hasAccidentClick(ghostCloneTarget, compName);
			_handleStepMoveEnd(ev, em);
			break;
		// 视为click事件.
		case 'bk':
		case 'icon':
		case 'label':
			if (!ghostCloneTarget) ghostCloneTarget = null;
			arg.oprType = 'pureMove';
			// 对外发射点击事件.
			em.emit(item.getParent(), compName, COMPCLICK);
			break;
		case 'delete':
			em.emit(item.getParent(), compName, COMPDELETE);
			break;
		default:
			break;
	}
};
/*
 * @Author: hewuchang
 * @description 清楚动态添加的线条.
 */
var clearExampleLine = function clearExampleLine() {
	graph.remove(arg.oprEdge);
	graph.update(arg.oprItem, {
		downActivity: !1
	});
	arg.resetOpr();
};
/*
 * @Author: hewuchang
 * @description 为整个步骤移动创建一个ghost node.
 */
var _createStepGhost = function _createStepGhost(em) {
	var graph = em.graph;
	var groupModel = ghostCloneTarget.getModel();
	arg.oprItem = graph.add('node', {
		shape: compName + 'GhostStep',
		x: groupModel.x,
		y: groupModel.y,
		width: groupModel.width,
		height: groupModel.height,
		radius: 6,
		lineWidth: 1
	});
	graph.update();
};
/*
 * @Author: hewuchang
 * @description 步骤ghost node移动结束处理
 */
var _handleStepMoveEnd = function _handleStepMoveEnd(ev, em) {
	//arg.oprType = 'pureMove';
	var graph = em.graph;
	var ghostModel = arg.oprItem.getModel();
	var x = ghostModel.x,
	    y = ghostModel.y;

	updateGroupPos(graph, ghostCloneTarget, { x: x, y: y });
	var model = ghostCloneTarget.getModel();
	//更新连线位置.
	model.edges.forEach(function (_ref) {
		var edgeId = _ref.id;

		var edgeGroup = graph.getItem(edgeId);
		var edgeModel = edgeGroup.getModel();
		var sourceModel = graph.getItem(edgeModel.relation.sourceAnchor).getModel();
		var targetModel = graph.getItem(edgeModel.relation.targetAnchor).getModel();

		var target = {
			x: targetModel.domPos.x - 2,
			y: targetModel.domPos.y - 2
		};
		updateEdge(graph, edgeGroup, {
			target: {
				x: targetModel.domPos.x - 2,
				y: targetModel.domPos.y - 2
			},
			source: {
				x: sourceModel.domPos.x,
				y: sourceModel.domPos.y
			},
			c1: undefined,
			c2: undefined
		});
	});
	graph.remove(arg.oprItem);
	ghostCloneTarget = null;
	arg.resetOpr();
};

var event = {
	mousemove: function mousemove(ev, em) {
		var type = getOprType(arg.oprType, compName);
		switch (type) {
			case 'pureMove':
				_handlePureMove(ev, em);
				break;
			case 'moveStep':
				if (null == arg.oprItem) _createStepGhost(em);
				em.graph.update(arg.oprItem, {
					x: ev.x + dx,
					y: ev.y + dy
				});
				break;
		}
	},
	mousedown: function mousedown(ev, em) {
		var item = ev.item;
		if (!item) return;
		var model = item.getModel();
		var shapeName = getShapeName(model.shape, compName);
		var type = getOprType(arg.oprType, compName);

		switch (type) {
			case 'pureMove':
				switch (shapeName) {
					case 'bk':
					case 'icon':
					case 'label':
						ghostCloneTarget = item.getParent();
						var groupModel = ghostCloneTarget.getModel();
						dx = groupModel.x - ev.x;
						dy = groupModel.y - ev.y;
						arg.oprType = moveStep;
						break;
				}
				break;
		}
	},
	mouseup: function mouseup(ev, em) {
		var item = ev.item;
		if (!item) return;
		var model = item.getModel();
		var shapeName = getShapeName(model.shape, compName);
		var type = getOprType(arg.oprType, compName);
		switch (type) {
			case 'pureMove':
			case 'moveStep':
				_handleStepUp(ev, em, item, shapeName);
				break;
		}
	}
};

module.exports = event;
/* WEBPACK VAR INJECTION */}.call(this, "components/etlNode/event.js"))

/***/ }),

/***/ "./components/etlNode/index.js":
/*!*************************************!*\
  !*** ./components/etlNode/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

/*
* @Author: hewuchang
* @Date:   2018-07-06 16:05:20
* @Last Modified by:   hewuchang
* @Last Modified time: 2018-11-14 18:02:41
*/
var _require = __webpack_require__(/*! ./shape */ "./components/etlNode/shape/index.js"),
    registShape = _require.registShape;

var _require2 = __webpack_require__(/*! ./convert.js */ "./components/etlNode/convert.js"),
    getEtlNodeCompose = _require2.getEtlNodeCompose,
    getEtlNodeGroup = _require2.getEtlNodeGroup;

// 通过webpack的node配置拿到当前文件路径,将name拆分出来


var name = __filename.split('/')[1];

module.exports = {
  name: name,
  init: function init(graph, g6Interface) {
    registShape(name, g6Interface);
  },
  convertGraphData: function convertGraphData(targetData) {
    var sourceData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var plus = arguments[2];

    var groupId = getEtlNodeGroup(targetData, sourceData, plus);
    getEtlNodeCompose(targetData, sourceData, plus, groupId);
  }
};
/* WEBPACK VAR INJECTION */}.call(this, "components/etlNode/index.js"))

/***/ }),

/***/ "./components/etlNode/shape/groups/index.js":
/*!**************************************************!*\
  !*** ./components/etlNode/shape/groups/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-06 16:33:55
* @Last Modified by:   hewuchang
* @Last Modified time: 2018-07-13 08:45:20
*/
module.exports = {
		//节点名称
		name: 'group',
		//draw function
		draw: function draw(item) {
				var group = item.getGraphicGroup();
				var model = item.getModel();
				if (undefined === model.edges) model.edges = [];
				// 外线框
				var keyShape = group.addShape('rect', {
						attrs: {
								x: model.x,
								y: model.y,
								width: model.width,
								height: model.height,
								radius: 6,
								lineWidth: 1
								//  stroke: model.isActive ? '#666' : '#666'
						}
				});
				// 上背景
				group.addShape('rect', {
						attrs: {
								x: model.x,
								y: model.y,
								width: model.width,
								height: model.height,
								fill: 'red',
								clip: keyShape
						}
				});
				/*
      group.addShape('text', {
         	attrs: {
           	x: model.x + 50,
            y: model.y + 25,
            fill: '#333',
            text : '测试组名称',
            textBaseline : 'middle',
            textAlign : 'start',
            fontSize:'20',
         }
       });*/
				return group;
		},
		_beforeDraw: function _beforeDraw() {
				console.log(233);
		},
		afterDraw: function afterDraw() {},

		anchor: function anchor(item) {
				var model = item.getModel();
				return model.anchor || [];
		}
};

/***/ }),

/***/ "./components/etlNode/shape/index.js":
/*!*******************************************!*\
  !*** ./components/etlNode/shape/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-06 16:33:26
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-02-25 09:59:00
*/
var nodeGroup = __webpack_require__(/*! ./groups */ "./components/etlNode/shape/groups/index.js");
// const nodeAnchor = require('./nodes/anchor.js');
// const nodeIcon = require('./nodes/icon.js');
// const nodeInfo = require('./nodes/info.js');
// const nodeLabel = require('./nodes/label.js');
// const nodeBk = require('./nodes/bk.js');
// const nodeDelete = require('./nodes/delete.js');
// const nodeStep = require('./nodes/ghostNode.js');

var nodes = [];
var matches = __webpack_require__("./components/etlNode/shape/nodes sync recursive \\.js$");
matches.keys().forEach(function (key) {
	nodes = nodes.concat(matches(key));
});

var config = __webpack_require__(/*! ../config.js */ "./components/etlNode/config.js");

var _require = __webpack_require__(/*! util/common.js */ "./src/util/common.js"),
    getCompNameFromSubItem = _require.getCompNameFromSubItem;

var configObj = Object.defineProperty({}, 'config', {
	writable: false,
	configurable: true,
	enumerable: true,
	value: config
});

module.exports = {
	registShape: function registShape(compName, g6Interface) {
		g6Interface.registerGroup(compName + nodeGroup.name.substr(0, 1).toUpperCase() + nodeGroup.name.substr(1), Object.assign(nodeGroup, configObj));

		nodes.forEach(function (node) {
			g6Interface.registerNode(compName + node.name.substr(0, 1).toUpperCase() + node.name.substr(1), Object.assign(node, configObj));
		});
	}
};

/***/ }),

/***/ "./components/etlNode/shape/nodes sync recursive \\.js$":
/*!***************************************************!*\
  !*** ./components/etlNode/shape/nodes sync \.js$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./anchor.js": "./components/etlNode/shape/nodes/anchor.js",
	"./bk.js": "./components/etlNode/shape/nodes/bk.js",
	"./delete.js": "./components/etlNode/shape/nodes/delete.js",
	"./ghostNode.js": "./components/etlNode/shape/nodes/ghostNode.js",
	"./icon.js": "./components/etlNode/shape/nodes/icon.js",
	"./info.js": "./components/etlNode/shape/nodes/info.js",
	"./label.js": "./components/etlNode/shape/nodes/label.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./components/etlNode/shape/nodes sync recursive \\.js$";

/***/ }),

/***/ "./components/etlNode/shape/nodes/anchor.js":
/*!**************************************************!*\
  !*** ./components/etlNode/shape/nodes/anchor.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! components/common/anchor.js */ "./components/common/anchor.js");

/***/ }),

/***/ "./components/etlNode/shape/nodes/bk.js":
/*!**********************************************!*\
  !*** ./components/etlNode/shape/nodes/bk.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-09 15:31:09
* @Last Modified by:   hewuchang
* @Last Modified time: 2018-07-13 08:45:40
*/
var config = __webpack_require__(/*! components/etlNode/config.js */ "./components/etlNode/config.js");
var bkCreate = __webpack_require__(/*! components/common/bk.js */ "./components/common/bk.js");
module.exports = bkCreate({
   width: config.width,
   height: config.height,
   radius: config.radius,
   activityStroke: config.activityStroke,
   inactivityStroke: config.inactivityStroke,
   activityFill: config.activityFill,
   inactivityFill: config.inactivityFill
});

/***/ }),

/***/ "./components/etlNode/shape/nodes/delete.js":
/*!**************************************************!*\
  !*** ./components/etlNode/shape/nodes/delete.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-11-09 09:38:17
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-02-19 19:37:15
*/
module.exports = {
	//节点名称
	name: 'delete',
	draw: function draw(item) {
		var group = item.getGraphicGroup();
		var model = item.getModel();
		if (model.delAble === true && model.activity) {
			return group.addShape('image', {
				attrs: {
					x: this.config.width - 10,
					y: -10,
					img: this.config.deleteIcon,
					width: 20,
					height: 20
				}
			});
		}
		return group;
	}
};

/***/ }),

/***/ "./components/etlNode/shape/nodes/ghostNode.js":
/*!*****************************************************!*\
  !*** ./components/etlNode/shape/nodes/ghostNode.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * @Author: hewuchang
 * @Date:   2018-07-10 18:09:31
 * @Last Modified by:   hewuchang
 * @Last Modified time: 2018-07-13 08:46:15
 */
module.exports = {
    //节点名称
    name: 'ghostStep',
    draw: function draw(item) {
        var group = item.getGraphicGroup();
        var model = item.getModel();
        return group.addShape('rect', {
            attrs: {
                x: 0,
                y: 0,
                width: this.config.width,
                height: this.config.height,
                radius: this.config.radius,
                lineWidth: 1,
                stroke: '#01befa',
                fill: 'rgba(1, 180, 250, .5)'
            }
        });
    }
};

/***/ }),

/***/ "./components/etlNode/shape/nodes/icon.js":
/*!************************************************!*\
  !*** ./components/etlNode/shape/nodes/icon.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-06 16:15:00
* @Last Modified by:   hewuchang
* @Last Modified time: 2018-11-12 15:49:07
*/
module.exports = {
	// 节点名称
	name: 'icon',
	draw: function draw(item) {
		var group = item.getGraphicGroup();
		var model = item.getModel();
		return group.addShape('image', {
			attrs: {
				x: (this.config.width - this.config.iconWidth) / 2,
				y: (this.config.height - this.config.iconHeight) / 2,
				img: model.nodeIcon || this.config.defaultIcon,
				width: this.config.iconWidth,
				height: this.config.iconHeight
			}
		});
	}
};

/***/ }),

/***/ "./components/etlNode/shape/nodes/info.js":
/*!************************************************!*\
  !*** ./components/etlNode/shape/nodes/info.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * @Author: hewuchang
 * @Date:   2019-02-25 09:56:57
 * @Last Modified by:   hewuchang
 * @Last Modified time: 2019-02-25 10:13:08
 */
module.exports = {
    //节点名称
    name: 'info',
    draw: function draw(item) {
        var group = item.getGraphicGroup();
        var model = item.getModel();
        if (!!model.infoType === true) {
            return group.addShape('image', {
                attrs: {
                    x: this.config.width / 2 - 11,
                    y: -14,
                    img: this.config.infoIncos[model.infoType] || model.infoType,
                    width: 22,
                    height: 22
                }
            });
        }
        return group;
    }
};

/***/ }),

/***/ "./components/etlNode/shape/nodes/label.js":
/*!*************************************************!*\
  !*** ./components/etlNode/shape/nodes/label.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = __webpack_require__(/*! components/etlNode/config.js */ "./components/etlNode/config.js");
var labelCreate = __webpack_require__(/*! components/common/label.js */ "./components/common/label.js");
module.exports = labelCreate({
    x: config.width / 2,
    y: config.height + 10,
    textBaseline: 'top',
    textAlign: 'center',
    fontSize: config.fontSize
});

/***/ }),

/***/ "./components/eventArgument.js":
/*!*************************************!*\
  !*** ./components/eventArgument.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-11 15:26:13
* @Last Modified by:   hewuchang
* @Last Modified time: 2018-07-18 10:01:05
* @description 组件事件之间通讯所需变量参数合集.即使是单个组件也不影响.
*/
module.exports = {
	//当前操作的类型.
	oprType: 'pureMove',
	//当前正在编辑的线
	oprEdge: null,
	//当前正在编辑的node;
	oprItem: null,
	//当前正在编辑的group;
	oprGroup: null,
	resetOpr: function resetOpr(oprType) {
		this.oprItem = null;
		this.oprGroup = null;
		this.oprEdge = null;
		this.oprType = oprType || 'pureMove';
	}
};

/***/ }),

/***/ "./components/flowArrowLine/event.js":
/*!*******************************************!*\
  !*** ./components/flowArrowLine/event.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
* @Author: hewuchang
* @Date:   2018-07-16 15:04:53
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-05-18 16:44:53
*/
var _require = __webpack_require__(/*! util/handle.js */ "./src/util/handle.js"),
    enterAmplificationFunc = _require.enterAmplificationFunc,
    leaveShrinkFunc = _require.leaveShrinkFunc,
    updateEdge = _require.updateEdge,
    deleteEdge = _require.deleteEdge;

var _require2 = __webpack_require__(/*! util/common.js */ "./src/util/common.js"),
    getAnchorName = _require2.getAnchorName,
    getShapeName = _require2.getShapeName,
    getOprType = _require2.getOprType;

var arg = __webpack_require__(/*! components/eventArgument.js */ "./components/eventArgument.js");
var compName = __filename.split('/')[1];

//hover时当前激活的node集合.
var activeItems = [];
//上一次Hover触发激活的item;
var lastItem = null;
//拖动初始参考
var dx = void 0,
    dy = void 0;
//控制点的类型.
var cPos = void 0;
//线组件内有效的图形, 不在的一律当做移出操作.
var validShapes = ['main', 'arrow'];
var isValidShape = function isValidShape(item) {
	if (!item) return !1;
	if (-1 == validShapes.indexOf(getShapeName(item.getModel().shape, compName))) return !1;
	return !0;
};

//组件自身的操作类型定义:
var waitEditorEdge = compName + 'waitEditorEdge';
var moveController = compName + 'moveController';
/*
 * @Author: hewuchang
 * @description 移动的时候高亮显示.
 */
var _handleNodeLeave = function _handleNodeLeave(em, curItem) {
	var isLeave = !curItem || !isValidShape(curItem) ? !0 : !1;
	/*
  * 如果纯粹是移动到空白区域, 视为离开操作
  * 如果是快速拖动进入其他图形 或者 是其他图形重叠时, 移出直接到其他图形上也要做离开操作.
  */
	if (null !== lastItem) {
		var model = lastItem.getModel();
		var shapeName = getShapeName(model.shape, compName);

		switch (shapeName) {
			case 'main':
			case 'arrow':
				if (isLeave) {
					activeItems.forEach(function (item) {
						em.graph.update(item, {
							activity: !1
						});
					});
				}
				break;
		}
		lastItem = null;
		return;
	}
};
/*
 * @Author: hewuchang
 * @param {Object} item Up时触发的对象.
 * @description puremove时触发up事件, 可以映射为click事件.
 */
var _handlePureUp = function _handlePureUp(em, item) {
	var graph = item.graph;
	var model = item.getModel();
	var shapeName = getShapeName(model.shape, compName);
	switch (shapeName) {
		//实际上线的click事件, 等同于选中该条线
		case 'main':
			arg.oprGroup = graph.getItem(model.pGroup);
			arg.oprEdge = item;
			break;
		case 'arrow':
			arg.oprGroup = item.getParent();
			arg.oprEdge = graph.getItem(arg.oprGroup.getModel().edgeId);
			break;
		default:
			return;
	}
	arg.oprType = waitEditorEdge;
	activeItems = [arg.oprEdge, arg.oprGroup].concat(_toConsumableArray(arg.oprGroup.getChildren()));
	activeItems.forEach(function (item) {
		graph.update(item, {
			activity: !0
		});
	});
};

/*
 * @Author: hewuchang
 * @description 取消选中某条线.
 */
var _cancelEdgeChoiced = function _cancelEdgeChoiced(em) {
	activeItems.forEach(function (item) {
		em.graph.update(item, {
			activity: !1
		});
	});
	activeItems = [];
	arg.resetOpr();
};
/*
 * @Author: hewuchang
 * @description 移动事件处理, 单纯是为了做Hover相应.
*/
var _handlePureMove = function _handlePureMove(ev, em) {
	var graph = em.graph;
	var item = ev.item;
	if (item == lastItem) return;

	_handleNodeLeave(em, item);
	if (!item) return;
	var model = item.getModel();
	var shapeName = getShapeName(model.shape, compName);
	switch (shapeName) {
		case 'main':
			activeItems = [item];
			//箭头更新.
			var edgeGroup = graph.getItem(model.pGroup);
			edgeGroup.getChildren().forEach(function (child) {
				var childShapeName = getShapeName(child.getModel().shape, compName);
				if ('arrow' != childShapeName) return;
				activeItems.push(child);
			});

			break;
		case 'arrow':
			activeItems = [item, graph.getItem(item.getParent().getModel().edgeId)];
			break;
		default:
			activeItems = [];
			item = null;
			break;
	}
	activeItems.forEach(function (item) {
		graph.update(item, {
			activity: !0
		});
	});
	lastItem = item;
};

/*
 * @Author: hewuchang
 * @description 在控制点上mousedown, 做移动控制点准备..
 */
var _handlePureDown = function _handlePureDown(ev, em) {
	var item = ev.item;
	var model = item.getModel();
	var shapeName = getShapeName(model.shape, compName);
	switch (shapeName) {
		case 'controller':
			dx = model.realPos.x - ev.x;
			dy = model.realPos.y - ev.y;

			arg.oprItem = item;
			arg.oprGroup = item.getParent();
			arg.oprType = moveController;
			arg.oprEdge = em.graph.getItem(arg.oprGroup.getModel().edgeId);
			cPos = model.pos;

			break;
	}
};
/*
 * @Author: hewuchang
 * @description 移动控制点做相应的响应操作.
 */
var _handleMoveController = function _handleMoveController(ev, em) {
	var graph = em.graph;
	var cName = void 0;
	var c = [ev.x + dx, ev.y + dy];

	if ('source' === cPos) {
		cName = 'c1';
	} else {
		cName = 'c2';
	}
	graph.update(arg.oprItem, _defineProperty({}, cName, c));
	graph.update(arg.oprGroup, _defineProperty({}, cName, c));

	graph.update(arg.oprEdge, _defineProperty({}, cName, c));
};
/*
 * @Author: hewuchang
 * @description 添加线条后, 第一次mouseup做链接是否有效处理, 有效的话简历关联关系.
 */
var lineWaitEnd = function lineWaitEnd(item, isAnchor, em) {
	var graph = em.graph;
	if (!isAnchor || item == arg.oprItem) {
		graph.remove(arg.oprEdge);
		graph.remove(arg.oprGroup);
	} else {
		var startGroup = arg.oprItem.getParent();
		var endGroup = item.getParent();

		var startModel = startGroup.getModel();
		var endModel = endGroup.getModel();

		var anchorModel = item.getModel();
		var edgeModel = arg.oprGroup.getModel();
		//console.log(arg.oprGroup.getModel());
		//给线添加关系.
		edgeModel.relation = {
			sourceGroup: startModel.id,
			sourceAnchor: arg.oprItem.getModel().id,
			targetGroup: endModel.id,
			targetAnchor: anchorModel.id
			//添加group和edge之间的关系.
		};startModel.edges.push({
			id: edgeModel.id,
			pos: 'out'
		});
		endModel.edges.push({
			id: edgeModel.id,
			pos: 'in'
		});
		//调整线移动结束后位置的修正.
		updateEdge(graph, arg.oprGroup, {
			target: {
				x: anchorModel.domPos.x,
				y: anchorModel.domPos.y
			},
			isAdded: true
		});
		//更新拾取范围
		graph.update(arg.oprEdge, {
			lineAppendWidth: 5
		});
		graph.toBack(arg.oprEdge);
		//调整相关图层层级关系.
		var edgeGroup = graph.getItem(edgeModel.id);
		graph.toBack(edgeGroup);
		edgeGroup.getChildren().forEach(function (child) {
			var model = child.getModel();
			if ('flowEdgeArrow' == model.shape) {
				graph.toBack(child);
			}
		});
	}

	graph.update(arg.oprItem, {
		downActivity: !1
	});
	arg.resetOpr();
	em.dispatch('hideImportAnchor', item);
	em.stopCurrentHandle();
};

var event = {
	mousemove: function mousemove(ev, em) {
		var type = getOprType(arg.oprType, compName);
		switch (type) {
			case 'pureMove':
				_handlePureMove(ev, em);
				break;
			case 'moveController':
				_handleMoveController(ev, em);
				break;
		}
	},
	mousedown: function mousedown(ev, em) {
		var item = ev.item,
		    type = void 0;

		if (!item) return;
		type = getOprType(arg.oprType, compName);
		switch (type) {
			case 'waitEditorEdge':
				_handlePureDown(ev, em);
				break;
		}
	},
	mouseup: function mouseup(ev, em) {
		var item = ev.item,
		    model = void 0,
		    shapeName = void 0,
		    isAnchor = !1;
		var type = getOprType(arg.oprType, compName);

		try {
			model = item.getModel();
			shapeName = getShapeName(model.shape, compName);
			isAnchor = 'anchor' == getAnchorName(model.shape);
		} catch (e) {}
		switch (type) {
			case 'pureMove':
				if (!item) return;
				_handlePureUp(em, item);
				break;
			case 'waitEditorEdge':
				_cancelEdgeChoiced(em);
				//如果点击到自身的组件上, 重新处理
				if (isValidShape(item)) _handlePureUp(em, item);
				//如果是在其他组件上up了, 重新走一次 触发其他组件的up事件.
				if ('otherComponentShape' == shapeName) em.reHandleEvent(ev);
				break;
			case 'moveController':
				arg.resetOpr(waitEditorEdge);
				break;
			case 'waitEndLine':
				lineWaitEnd(item, isAnchor, em);
				break;
		}
	},

	// 键盘按键事件, 只处理delete.
	keyup: function keyup(ev, em) {
		var graph = em.graph;
		//不是46 或者 无激活线条的话 不做处理.
		if (46 != ev.domEvent.keyCode || 0 == activeItems.length) return;
		deleteEdge(graph, arg.oprGroup);
		activeItems = [];
		arg.resetOpr();
	}
};

module.exports = event;
/* WEBPACK VAR INJECTION */}.call(this, "components/flowArrowLine/event.js"))

/***/ }),

/***/ "./components/flowArrowLine/index.js":
/*!*******************************************!*\
  !*** ./components/flowArrowLine/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

/*
* @Author: hewuchang
* @Date:   2018-07-16 08:46:59
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-03-20 10:27:12
*/
var _require = __webpack_require__(/*! ./shape */ "./components/flowArrowLine/shape/index.js"),
    registShape = _require.registShape;
//const { startEvent } = require('./event');


var _require2 = __webpack_require__(/*! ../convert.js */ "./components/convert.js"),
    getArrowLineCompose = _require2.getArrowLineCompose,
    getFlowArrowLineGroup = _require2.getFlowArrowLineGroup;

//通过webpack的node配置拿到当前文件路径,将name拆分出来


var compName = __filename.split('/')[1];

module.exports = {
  name: compName,
  //判断一下是否初始化过.
  initedFlag: !1,
  init: function init(graph, g6Interface) {
    registShape(compName, g6Interface);
    //startEvent(graph);
    this.initedFlag = !0;
  },

  /**
   * @Author      hewuchang
   * @DateTime    2018-07-09
   * @lastTime    2018-07-09
   * @description 获取当前step的范围.
   */
  getRange: function getRange() {},

  /**
   * @Author      hewuchang
   * @DateTime    2018-07-06
   * @lastTime    2018-07-06
   * @description 转化源数据, 将所需的拆分数据添加到最终的绘制数组中去.
   */
  convertGraphData: function convertGraphData(targetData) {
    var sourceData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var plus = arguments[2];

    //添加父节点group
    var groupId = getFlowArrowLineGroup(targetData, sourceData, plus);
    getArrowLineCompose(targetData, sourceData, plus, groupId);
  }
};
/* WEBPACK VAR INJECTION */}.call(this, "components/flowArrowLine/index.js"))

/***/ }),

/***/ "./components/flowArrowLine/shape/edges/main.js":
/*!******************************************************!*\
  !*** ./components/flowArrowLine/shape/edges/main.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
 * @Author: hewuchang
 * @Date:   2018-07-16 08:48:12
 * @Last Modified by:   hewuchang
 * @Last Modified time: 2019-03-20 10:39:03
 */
var _require = __webpack_require__(/*! util/common.js */ "./src/util/common.js"),
    getCubicController = _require.getCubicController;

function segmentsIntr(a, b, c, d) {
    /** 1 解线性方程组, 求线段交点. **/
    // 如果分母为0 则平行或共线, 不相交  
    var denominator = (b.y - a.y) * (d.x - c.x) - (a.x - b.x) * (c.y - d.y);
    if (denominator == 0) {
        return false;
    }
    // 线段所在直线的交点坐标 (x , y)      
    var x = ((b.x - a.x) * (d.x - c.x) * (c.y - a.y) + (b.y - a.y) * (d.x - c.x) * a.x - (d.y - c.y) * (b.x - a.x) * c.x) / denominator;
    var y = -((b.y - a.y) * (d.y - c.y) * (c.x - a.x) + (b.x - a.x) * (d.y - c.y) * a.y - (d.x - c.x) * (b.y - a.y) * c.y) / denominator;
    /** 2 判断交点是否在两条线段上 **/
    if (
    // 交点在线段1上  
    (x - a.x) * (x - b.x) <= 0 && (y - a.y) * (y - b.y) <= 0
    // 且交点也在线段2上  
    && (x - c.x) * (x - d.x) <= 0 && (y - c.y) * (y - d.y) <= 0) {
        // 返回交点p  
        return {
            x: x,
            y: y
        };
    }
    //否则不相交  
    return false;
};
var getAngle = function getAngle(_ref, _ref2) {
    var x1 = _ref.x,
        y1 = _ref.y;
    var x2 = _ref2.x,
        y2 = _ref2.y;

    var dot = x1 * x2 + y1 * y2;
    var det = x1 * y2 - y1 * x2;
    var angle = Math.atan2(det, dot) / Math.PI * 180;
    return (angle + 360) % 360;
};
module.exports = {
    //节点名称
    name: 'main',
    draw: function draw(item) {
        var group = item.getGraphicGroup();
        var model = item.getModel();
        var source = model.source,
            target = model.target,
            isAdded = model.isAdded;

        var startPoint = _extends({}, source);
        var endPoint = _extends({}, target);

        var realTarget = _extends({}, target);

        if (isAdded) {
            var inter = 73 / 2;
            var intersectPoint = void 0;
            var intersectLineIndex = void 0;
            var rectLines = [[{
                x: target.x - inter,
                y: target.y - inter
            }, {
                x: target.x + inter,
                y: target.y - inter
            }], [{
                x: target.x + inter,
                y: target.y - inter
            }, {
                x: target.x + inter,
                y: target.y + inter
            }], [{
                x: target.x + inter,
                y: target.y + inter
            }, {
                x: target.x - inter,
                y: target.y + inter
            }], [{
                x: target.x - inter,
                y: target.y + inter
            }, {
                x: target.x - inter,
                y: target.y - inter
            }]];

            rectLines.some(function (points, index) {
                var isIntersect = segmentsIntr(startPoint, endPoint, points[0], points[1]);
                if (isIntersect !== false) {
                    intersectPoint = isIntersect;
                    intersectLineIndex = index;
                    return true;
                }
            });
            try {
                var _rectLines$intersectL = _slicedToArray(rectLines[intersectLineIndex], 2),
                    intersectStart = _rectLines$intersectL[0],
                    intersectEnd = _rectLines$intersectL[1];

                var verticalPoint = {
                    x: intersectPoint.y < source.y ? intersectPoint.x : source.x,
                    y: Math.max(intersectPoint.y, source.y)
                };
                var angle = getAngle({
                    x: verticalPoint.x - intersectPoint.x,
                    y: verticalPoint.y - intersectPoint.y
                }, {
                    x: source.x - intersectPoint.x,
                    y: source.y - intersectPoint.y
                });
                if (angle > 90) angle = 360 - angle;
                var l1 = Math.abs(verticalPoint.x === source.x ? verticalPoint.y - source.y : verticalPoint.x - source.x);
                var l2 = Math.abs(verticalPoint.y === intersectPoint.y ? verticalPoint.x - intersectPoint.x : verticalPoint.y - intersectPoint.y);
                var r = Math.sqrt(l1 * l1 + l2 * l2);
                if (intersectPoint.y < source.y && intersectPoint.x > source.x) {
                    angle = 360 - (90 - angle);
                } else if (intersectPoint.y < source.y && intersectPoint.x < source.x) {
                    angle = 360 - (90 + angle);
                } else if (intersectPoint.y > source.y && intersectPoint.x < source.x) {
                    angle = 90 + (90 - angle);
                }
                var radian = angle * Math.PI / 180;
                realTarget.x = source.x + (r - 10) * Math.cos(radian);
                realTarget.y = source.y + (r - 10) * Math.sin(radian);
            } catch (e) {
                console.log(e);
            }
        }
        group.addShape('line', {
            attrs: {
                x1: source.x,
                y1: source.y,
                x2: realTarget.x,
                y2: realTarget.y,
                endArrow: true,
                stroke: model.activity ? '#FF4500' : '#23b7e5'
            }
        });
        return group;
    }
};

/***/ }),

/***/ "./components/flowArrowLine/shape/groups/index.js":
/*!********************************************************!*\
  !*** ./components/flowArrowLine/shape/groups/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * @Author: hewuchang
 * @Date:   2018-07-16 08:48:58
 * @Last Modified by:   hewuchang
 * @Last Modified time: 2019-03-20 10:28:26
*/
var _require = __webpack_require__(/*! util/common.js */ "./src/util/common.js"),
    getCubicController = _require.getCubicController;

module.exports = {
     //节点名称
     name: 'group',
     //draw function
     draw: function draw(item) {
          var group = item.getGraphicGroup();
          var model = item.getModel();
          var source = model.source,
              target = model.target,
              activity = model.activity;

          var x = void 0,
              y = void 0,
              width = void 0,
              height = void 0;

          x = Math.min(target.x, source.x);
          y = Math.min(target.y, source.y);
          width = Math.abs(target.x - source.x);
          height = Math.abs(target.y - source.y);

          // 外线框
          var keyShape = group.addShape('rect', {
               attrs: {
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    lineWidth: 1
               }
          });

          return group;
     },
     _beforeDraw: function _beforeDraw() {},
     afterDraw: function afterDraw() {},

     anchor: function anchor(item) {
          var model = item.getModel();
          return model.anchor || [];
     }
};

/***/ }),

/***/ "./components/flowArrowLine/shape/index.js":
/*!*************************************************!*\
  !*** ./components/flowArrowLine/shape/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

/*
* @Author: hewuchang
* @Date:   2018-07-16 08:47:22
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-03-20 10:38:19
*/
var edgeGroup = __webpack_require__(/*! ./groups */ "./components/flowArrowLine/shape/groups/index.js");
// const edgeArrow = require('./nodes/arrow.js');
//const stepLabel = require('./nodes/label.js');
//const edgeAssist = require('./edges/assist.js');
var edgeMain = __webpack_require__(/*! ./edges/main.js */ "./components/flowArrowLine/shape/edges/main.js");

var config = __webpack_require__(/*! components/config.js */ "./components/config.js");

var _require = __webpack_require__(/*! util/common.js */ "./src/util/common.js"),
    getCompNameFromSubItem = _require.getCompNameFromSubItem;

var curConfig = config[getCompNameFromSubItem(__filename)];

var configObj = Object.defineProperty({}, 'config', {
	writable: false,
	configurable: true,
	enumerable: true,
	value: curConfig
});

module.exports = {
	registShape: function registShape(compName, g6Interface) {
		g6Interface.registerGroup(compName + edgeGroup.name.substr(0, 1).toUpperCase() + edgeGroup.name.substr(1), Object.assign(edgeGroup, configObj));
		var edges = [edgeMain];
		edges.forEach(function (edge) {
			g6Interface.registerEdge(compName + edge.name.substr(0, 1).toUpperCase() + edge.name.substr(1), Object.assign(edge, configObj));
		});
	}
};
/* WEBPACK VAR INJECTION */}.call(this, "components/flowArrowLine/shape/index.js"))

/***/ }),

/***/ "./components/flowEdge/event.js":
/*!**************************************!*\
  !*** ./components/flowEdge/event.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
* @Author: hewuchang
* @Date:   2018-07-16 15:04:53
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-05-18 17:05:02
*/
var _require = __webpack_require__(/*! util/handle.js */ "./src/util/handle.js"),
    enterAmplificationFunc = _require.enterAmplificationFunc,
    leaveShrinkFunc = _require.leaveShrinkFunc,
    updateEdge = _require.updateEdge,
    deleteEdge = _require.deleteEdge;

var _require2 = __webpack_require__(/*! util/common.js */ "./src/util/common.js"),
    getAnchorName = _require2.getAnchorName,
    getShapeName = _require2.getShapeName,
    getOprType = _require2.getOprType;

var arg = __webpack_require__(/*! components/eventArgument.js */ "./components/eventArgument.js");
var compName = __filename.split('/')[1];

//hover时当前激活的node集合.
var activeItems = [];
//上一次Hover触发激活的item;
var lastItem = null;
//拖动初始参考
var dx = void 0,
    dy = void 0;
//控制点的类型.
var cPos = void 0;
//线组件内有效的图形, 不在的一律当做移出操作.
var validShapes = ['main', 'arrow'];
var isValidShape = function isValidShape(item) {
	if (!item) return !1;
	if (-1 == validShapes.indexOf(getShapeName(item.getModel().shape, compName))) return !1;
	return !0;
};

//组件自身的操作类型定义:
var waitEditorEdge = compName + 'waitEditorEdge';
var moveController = compName + 'moveController';
/*
 * @Author: hewuchang
 * @description 移动的时候高亮显示.
 */
var _handleNodeLeave = function _handleNodeLeave(em, curItem) {
	var isLeave = !curItem || !isValidShape(curItem) ? !0 : !1;
	/*
  * 如果纯粹是移动到空白区域, 视为离开操作
  * 如果是快速拖动进入其他图形 或者 是其他图形重叠时, 移出直接到其他图形上也要做离开操作.
  */
	if (null !== lastItem) {
		var model = lastItem.getModel();
		var shapeName = getShapeName(model.shape, compName);

		switch (shapeName) {
			case 'main':
			case 'arrow':
				if (isLeave) {
					activeItems.forEach(function (item) {
						em.graph.update(item, {
							activity: !1
						});
					});
				}
				break;
		}
		lastItem = null;
		return;
	}
};
/*
 * @Author: hewuchang
 * @param {Object} item Up时触发的对象.
 * @description puremove时触发up事件, 可以映射为click事件.
 */
var _handlePureUp = function _handlePureUp(em, item) {
	var graph = item.graph;
	var model = item.getModel();
	var shapeName = getShapeName(model.shape, compName);
	switch (shapeName) {
		//实际上线的click事件, 等同于选中该条线
		case 'main':
			arg.oprGroup = graph.getItem(model.pGroup);
			arg.oprEdge = item;
			break;
		case 'arrow':
			arg.oprGroup = item.getParent();
			arg.oprEdge = graph.getItem(arg.oprGroup.getModel().edgeId);
			break;
		default:
			return;
	}
	arg.oprType = waitEditorEdge;
	activeItems = [arg.oprEdge, arg.oprGroup].concat(_toConsumableArray(arg.oprGroup.getChildren()));
	activeItems.forEach(function (item) {
		graph.update(item, {
			activity: !0
		});
	});
};

/*
 * @Author: hewuchang
 * @description 取消选中某条线.
 */
var _cancelEdgeChoiced = function _cancelEdgeChoiced(em) {
	activeItems.forEach(function (item) {
		em.graph.update(item, {
			activity: !1
		});
	});
	activeItems = [];
	arg.resetOpr();
};
/*
 * @Author: hewuchang
 * @description 移动事件处理, 单纯是为了做Hover相应.
*/
var _handlePureMove = function _handlePureMove(ev, em) {
	var graph = em.graph;
	var item = ev.item;
	if (item == lastItem) return;

	_handleNodeLeave(em, item);
	if (!item) return;
	var model = item.getModel();
	var shapeName = getShapeName(model.shape, compName);
	switch (shapeName) {
		case 'main':
			activeItems = [item];
			//箭头更新.
			var edgeGroup = graph.getItem(model.pGroup);
			edgeGroup.getChildren().forEach(function (child) {
				var childShapeName = getShapeName(child.getModel().shape, compName);
				if ('arrow' != childShapeName) return;
				activeItems.push(child);
			});

			break;
		case 'arrow':
			activeItems = [item, graph.getItem(item.getParent().getModel().edgeId)];
			break;
		default:
			activeItems = [];
			item = null;
			break;
	}
	activeItems.forEach(function (item) {
		graph.update(item, {
			activity: !0
		});
	});
	lastItem = item;
};

/*
 * @Author: hewuchang
 * @description 在控制点上mousedown, 做移动控制点准备..
 */
var _handlePureDown = function _handlePureDown(ev, em) {
	var item = ev.item;
	var model = item.getModel();
	var shapeName = getShapeName(model.shape, compName);
	switch (shapeName) {
		case 'controller':
			dx = model.realPos.x - ev.x;
			dy = model.realPos.y - ev.y;

			arg.oprItem = item;
			arg.oprGroup = item.getParent();
			arg.oprType = moveController;
			arg.oprEdge = em.graph.getItem(arg.oprGroup.getModel().edgeId);
			cPos = model.pos;

			break;
	}
};
/*
 * @Author: hewuchang
 * @description 移动控制点做相应的响应操作.
 */
var _handleMoveController = function _handleMoveController(ev, em) {
	var graph = em.graph;
	var cName = void 0;
	var c = [ev.x + dx, ev.y + dy];

	if ('source' === cPos) {
		cName = 'c1';
	} else {
		cName = 'c2';
	}
	graph.update(arg.oprItem, _defineProperty({}, cName, c));
	graph.update(arg.oprGroup, _defineProperty({}, cName, c));

	graph.update(arg.oprEdge, _defineProperty({}, cName, c));
};
/*
 * @Author: hewuchang
 * @description 添加线条后, 第一次mouseup做链接是否有效处理, 有效的话简历关联关系.
 */
var lineWaitEnd = function lineWaitEnd(item, isAnchor, em) {
	var graph = em.graph;
	if (!isAnchor || item == arg.oprItem) {
		graph.remove(arg.oprEdge);
		graph.remove(arg.oprGroup);
	} else {
		var startGroup = arg.oprItem.getParent();
		var endGroup = item.getParent();

		var startModel = startGroup.getModel();
		var endModel = endGroup.getModel();

		var anchorModel = item.getModel();
		var edgeModel = arg.oprGroup.getModel();
		//给线添加关系.
		edgeModel.relation = {
			sourceGroup: startModel.id,
			sourceAnchor: arg.oprItem.getModel().id,
			targetGroup: endModel.id,
			targetAnchor: anchorModel.id
			//添加group和edge之间的关系.
		};startModel.edges.push({
			id: edgeModel.id,
			pos: 'out'
		});
		endModel.edges.push({
			id: edgeModel.id,
			pos: 'in'
		});
		//调整线移动结束后位置的修正.
		updateEdge(graph, arg.oprGroup, {
			target: {
				x: anchorModel.domPos.x,
				y: anchorModel.domPos.y
			}
		});
		//更新拾取范围
		graph.update(arg.oprEdge, {
			lineAppendWidth: 5
		});
		graph.toBack(arg.oprEdge);
		//调整相关图层层级关系.
		var edgeGroup = graph.getItem(edgeModel.id);
		graph.toBack(edgeGroup);
		edgeGroup.getChildren().forEach(function (child) {
			var model = child.getModel();
			if ('flowEdgeArrow' == model.shape) {
				graph.toBack(child);
			}
		});
	}

	graph.update(arg.oprItem, {
		downActivity: !1
	});
	arg.resetOpr();
	em.dispatch('hideImportAnchor', item);
	em.stopCurrentHandle();
};

var event = {
	mousemove: function mousemove(ev, em) {
		var type = getOprType(arg.oprType, compName);
		switch (type) {
			case 'pureMove':
				_handlePureMove(ev, em);
				break;
			case 'moveController':
				_handleMoveController(ev, em);
				break;
		}
	},
	mousedown: function mousedown(ev, em) {
		var item = ev.item,
		    type = void 0;

		if (!item) return;
		type = getOprType(arg.oprType, compName);
		switch (type) {
			case 'waitEditorEdge':
				_handlePureDown(ev, em);
				break;
		}
	},
	mouseup: function mouseup(ev, em) {
		var item = ev.item,
		    model = void 0,
		    shapeName = void 0,
		    isAnchor = !1;
		var type = getOprType(arg.oprType, compName);

		try {
			model = item.getModel();
			shapeName = getShapeName(model.shape, compName);
			isAnchor = 'anchor' == getAnchorName(model.shape);
		} catch (e) {}
		switch (type) {
			case 'pureMove':
				if (!item) return;
				_handlePureUp(em, item);
				break;
			case 'waitEditorEdge':
				_cancelEdgeChoiced(em);
				//如果点击到自身的组件上, 重新处理
				if (isValidShape(item)) _handlePureUp(em, item);
				//如果是在其他组件上up了, 重新走一次 触发其他组件的up事件.
				if ('otherComponentShape' == shapeName) em.reHandleEvent(ev);
				break;
			case 'moveController':
				arg.resetOpr(waitEditorEdge);
				break;
			case 'waitEndLine':
				lineWaitEnd(item, isAnchor, em);
				break;
		}
	},

	//键盘按键事件, 只处理delete.
	keyup: function keyup(ev, em) {
		var graph = em.graph;
		//不是46 或者 无激活线条的话 不做处理.
		if (46 != ev.domEvent.keyCode || 0 == activeItems.length) return;
		// const edgeModel = arg.oprGroup.getModel();
		// const startModel = graph.getItem(edgeModel.relation.sourceGroup).getModel();
		// const endModel = graph.getItem(edgeModel.relation.targetGroup).getModel();

		// startModel.edges.splice(startModel.edges.indexOf(edgeModel.id), 1);
		// endModel.edges.splice(startModel.edges.indexOf(edgeModel.id), 1);

		// graph.remove(arg.oprGroup);
		// graph.remove(arg.oprEdge);

		deleteEdge(graph, arg.oprGroup);
		activeItems = [];
		arg.resetOpr();
	}
};

module.exports = event;
/* WEBPACK VAR INJECTION */}.call(this, "components/flowEdge/event.js"))

/***/ }),

/***/ "./components/flowEdge/index.js":
/*!**************************************!*\
  !*** ./components/flowEdge/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

/*
* @Author: hewuchang
* @Date:   2018-07-16 08:46:59
* @Last Modified by:   hewuchang
* @Last Modified time: 2018-11-14 20:00:06
*/
var _require = __webpack_require__(/*! ./shape */ "./components/flowEdge/shape/index.js"),
    registShape = _require.registShape;
//const { startEvent } = require('./event');


var _require2 = __webpack_require__(/*! ../convert.js */ "./components/convert.js"),
    getFlowEdgeCompose = _require2.getFlowEdgeCompose,
    getFlowEdgeGroup = _require2.getFlowEdgeGroup;

//通过webpack的node配置拿到当前文件路径,将name拆分出来


var compName = __filename.split('/')[1];

module.exports = {
  name: compName,
  //判断一下是否初始化过.
  initedFlag: !1,
  init: function init(graph, g6Interface) {
    registShape(compName, g6Interface);
    //startEvent(graph);
    this.initedFlag = !0;
  },

  /**
   * @Author      hewuchang
   * @DateTime    2018-07-09
   * @lastTime    2018-07-09
   * @description 获取当前step的范围.
   */
  getRange: function getRange() {},

  /**
   * @Author      hewuchang
   * @DateTime    2018-07-06
   * @lastTime    2018-07-06
   * @description 转化源数据, 将所需的拆分数据添加到最终的绘制数组中去.
   */
  convertGraphData: function convertGraphData(targetData) {
    var sourceData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var plus = arguments[2];

    //添加父节点group
    var groupId = getFlowEdgeGroup(targetData, sourceData, plus);
    getFlowEdgeCompose(targetData, sourceData, plus, groupId);
  }
};
/* WEBPACK VAR INJECTION */}.call(this, "components/flowEdge/index.js"))

/***/ }),

/***/ "./components/flowEdge/shape/edges/main.js":
/*!*************************************************!*\
  !*** ./components/flowEdge/shape/edges/main.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-16 08:48:12
* @Last Modified by:   hewuchang
* @Last Modified time: 2018-07-17 20:18:23
*/
var _require = __webpack_require__(/*! util/common.js */ "./src/util/common.js"),
    getCubicController = _require.getCubicController;

module.exports = {
	//节点名称
	name: 'main',
	draw: function draw(item) {
		var group = item.getGraphicGroup();
		var model = item.getModel();
		var source = model.source,
		    target = model.target,
		    c1 = model.c1,
		    c2 = model.c2;


		var tempObj = getCubicController(source, target);
		c1 = c1 || tempObj.c1;
		c2 = c2 || tempObj.c2;
		group.addShape('path', {
			attrs: {
				path: 'M' + source.x + ', ' + source.y + ' C' + c1[0] + ', ' + c1[1] + ' ' + c2[0] + ', ' + c2[1] + ' ' + target.x + ', ' + target.y,
				stroke: model.activity ? '#22b4ed' : '#999'
			}
		});

		return group;
	}
};

/***/ }),

/***/ "./components/flowEdge/shape/groups/index.js":
/*!***************************************************!*\
  !*** ./components/flowEdge/shape/groups/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * @Author: hewuchang
 * @Date:   2018-07-16 08:48:58
 * @Last Modified by:   hewuchang
 * @Last Modified time: 2018-07-18 09:07:06
*/
var _require = __webpack_require__(/*! util/common.js */ "./src/util/common.js"),
    getCubicController = _require.getCubicController;

module.exports = {
  //节点名称
  name: 'group',
  //draw function
  draw: function draw(item) {
    var group = item.getGraphicGroup();
    var model = item.getModel();
    var source = model.source,
        target = model.target,
        activity = model.activity,
        c1 = model.c1,
        c2 = model.c2;

    var x = void 0,
        y = void 0,
        width = void 0,
        height = void 0;
    var p1 = void 0,
        p2 = void 0;

    var tempObj = getCubicController(source, target);
    c1 = c1 || tempObj.c1;
    c2 = c2 || tempObj.c2;

    x = Math.min(target.x, source.x);
    y = Math.min(target.y, source.y);
    width = Math.abs(target.x - source.x);
    height = Math.abs(target.y - source.y);

    // 外线框
    var keyShape = group.addShape('rect', {
      attrs: {
        x: x,
        y: y,
        width: width,
        height: height,
        lineWidth: 1
      }
    });

    p1 = [source.x, source.y];

    p2 = [target.x, target.y];

    var attrs = {
      stroke: '#eb7a0b',
      opacity: activity ? 1 : 0
      //clip: keyShape
    };

    attrs.x1 = p1[0];
    attrs.y1 = p1[1];
    attrs.x2 = c1[0];
    attrs.y2 = c1[1];
    group.addShape('line', {
      attrs: attrs
    });

    attrs.x1 = p2[0];
    attrs.y1 = p2[1];
    attrs.x2 = c2[0];
    attrs.y2 = c2[1];
    group.addShape('line', {
      attrs: attrs
    });

    return group;
  },
  _beforeDraw: function _beforeDraw() {
    console.log(233);
  },
  afterDraw: function afterDraw() {},

  anchor: function anchor(item) {
    var model = item.getModel();
    return model.anchor || [];
  }
};

/***/ }),

/***/ "./components/flowEdge/shape/index.js":
/*!********************************************!*\
  !*** ./components/flowEdge/shape/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

/*
* @Author: hewuchang
* @Date:   2018-07-16 08:47:22
* @Last Modified by:   hewuchang
* @Last Modified time: 2018-07-17 10:41:34
*/
var edgeGroup = __webpack_require__(/*! ./groups */ "./components/flowEdge/shape/groups/index.js");
var edgeController = __webpack_require__(/*! ./nodes/controller.js */ "./components/flowEdge/shape/nodes/controller.js");
var edgeArrow = __webpack_require__(/*! ./nodes/arrow.js */ "./components/flowEdge/shape/nodes/arrow.js");
//const stepLabel = require('./nodes/label.js');
//const edgeAssist = require('./edges/assist.js');
var edgeMain = __webpack_require__(/*! ./edges/main.js */ "./components/flowEdge/shape/edges/main.js");

var config = __webpack_require__(/*! components/config.js */ "./components/config.js");

var _require = __webpack_require__(/*! util/common.js */ "./src/util/common.js"),
    getCompNameFromSubItem = _require.getCompNameFromSubItem;

var curConfig = config[getCompNameFromSubItem(__filename)];

var configObj = Object.defineProperty({}, 'config', {
	writable: false,
	configurable: true,
	enumerable: true,
	value: curConfig
});

module.exports = {
	registShape: function registShape(compName, g6Interface) {
		g6Interface.registerGroup(compName + edgeGroup.name.substr(0, 1).toUpperCase() + edgeGroup.name.substr(1), Object.assign(edgeGroup, configObj));

		var nodes = [edgeController, edgeArrow];
		var edges = [edgeMain];
		nodes.forEach(function (node) {
			g6Interface.registerNode(compName + node.name.substr(0, 1).toUpperCase() + node.name.substr(1), Object.assign(node, configObj));
		});

		edges.forEach(function (edge) {
			g6Interface.registerEdge(compName + edge.name.substr(0, 1).toUpperCase() + edge.name.substr(1), Object.assign(edge, configObj));
		});
	}
};
/* WEBPACK VAR INJECTION */}.call(this, "components/flowEdge/shape/index.js"))

/***/ }),

/***/ "./components/flowEdge/shape/nodes/arrow.js":
/*!**************************************************!*\
  !*** ./components/flowEdge/shape/nodes/arrow.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-16 14:17:58
* @Last Modified by:   hewuchang
* @Last Modified time: 2018-07-18 09:07:44
*/
module.exports = {
	//节点名称
	name: 'arrow',
	draw: function draw(item) {
		var group = item.getGraphicGroup();
		var model = item.getModel();
		var source = model.source,
		    target = model.target;

		var halfLen = Math.tan(Math.PI / 180 * 30) * this.config.arrowLen;
		var points = [[target.x - halfLen, target.y - this.config.arrowLen], [target.x + halfLen, target.y - this.config.arrowLen], [target.x, target.y]];
		return group.addShape('polygon', {
			attrs: {
				points: points,
				fill: model.activity ? '#22b4ed' : '#999'
			}
		});
	}
};

/***/ }),

/***/ "./components/flowEdge/shape/nodes/controller.js":
/*!*******************************************************!*\
  !*** ./components/flowEdge/shape/nodes/controller.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-16 08:50:12
* @Last Modified by:   hewuchang
* @Last Modified time: 2018-07-18 11:29:00
*/
var _require = __webpack_require__(/*! util/common.js */ "./src/util/common.js"),
    getCubicController = _require.getCubicController;

module.exports = {
	//节点名称
	name: 'controller',
	draw: function draw(item) {
		var group = item.getGraphicGroup();
		var model = item.getModel();

		var activity = model.activity,
		    source = model.source,
		    target = model.target,
		    c1 = model.c1,
		    c2 = model.c2;

		var c = void 0;
		var startX = Math.min(target.x, source.x);
		var startY = Math.min(target.y, source.y);
		var x = void 0,
		    y = void 0;

		model.x = startX;
		model.y = startY;

		if ('target' == model.pos) {
			c = c2;
			if (undefined === c) {
				var tempObj = getCubicController(source, target);
				c = tempObj.c2;
			}
		} else {
			c = c1;
			if (undefined === c) {
				var _tempObj = getCubicController(source, target);
				c = _tempObj.c1;
			}
		}

		x = c[0] - startX;
		y = c[1] - startY;

		model.realPos = {
			x: startX + x,
			y: startY + y
		};

		var attrs = {
			x: x,
			y: y,
			r: activity ? 5 : 0,
			fill: model.downActivity ? '#007eff' : '#fff',
			stroke: '#34b8e2',
			opacity: activity ? 1 : 0
		};

		return group.addShape('circle', {
			attrs: attrs
		});
	},
	getScaleOffset: function getScaleOffset(x, y) {
		return {
			x: x + this.anchorInfo[0] * this.config.width,
			y: y + this.anchorInfo[1] * this.config.height
		};
	},
	getRealPos: function getRealPos() {
		return {
			x: this.anchorInfo[0] * this.config.width,
			y: this.anchorInfo[1] * this.config.height
		};
	},
	judgeAchorType: function judgeAchorType() {
		if (0 == this.anchorInfo[1]) return 'import';
		if (1 == this.anchorInfo[1]) return 'export';
	},

	//返回当前锚点在画布上的位置.
	getDomPos: function getDomPos(model, realPos) {
		return {
			x: model.x + realPos.x,
			y: model.y + realPos.y
		};
	}
};

/***/ }),

/***/ "./components/flowStep/config.js":
/*!***************************************!*\
  !*** ./components/flowStep/config.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	width: 178,
	height: 30,
	//文字从哪里开始
	labelStart: 40,
	fontSize: 14,
	toolIcons: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAFVBMVEUAAAAAfv8Afv8Afv8Afv8Afv8Afv9EXOEsAAAABnRSTlMA7pEGiYjxEaxMAAAAuklEQVRYw+3XMQrCQBCFYY1gLRbpRbAWT+ARPIIBffc/gsbmL1bGWRaWMcxfDcgHmtfEVZZlkdsc9mfzLBukm3mWraWdeZZtpfv3M8kiyFxEchml6VhFTnr3rCLjTKYqok9NpCwiYQEXYQE3YQE34cNOhDoRHopNmIhH//hNmAhtk/Lb2ISzI2HVdsJvdhMWcBMWcBOKSPiwA2EiL2EiN2EiN6GI5B9eSJIUpOUFfpCuxln5ZyTLssC9AHQTANtLuJdRAAAAAElFTkSuQmCC', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAkFBMVEUAAAAAfv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv99yR2qAAAAL3RSTlMA/fkepvMLly/2KAbkVzcTu7jq3pLWeDoyGSIEYk9nWxHawomDfs1wRD9KrJ7vczs4VoYAAALtSURBVGje7djXcqswEAbgX3QMGBewKW5xievJvv/bnckIMHhwBm3CHd+VfYPQSrsrgcFgMBgMBr+w/iCaHTz0aS3o2x09Sk2SNujPgwozC33RNSqt0JcTVaboywdVNAt/xQmuFiojqlniKbs6OZh2UyLS7ldI+oNqjKQc4TAnolgHS1ZGZ+8A+WovqCn+2gG6LYp/IRi8OZXEcTWnFubp5FJpD4aEFF2h7kIKuKmjk6I1Nyua5vY2CT0vTLb2nF6JEAxHahDGEjVLQ1DDhF2pniYjvBhNqO4GFpsq7gYtNi5V9uBJq2fMxmg1nlFBOGBalGOM8MaoHOUIrqCIVTUPfTH1NTOeLrJqLu5vB/loZpluiOdW0yGtigqzA8+6uTfXZqNuBZCKPbYAz12+dLEgZ0EN4lwsi5CJymwnMk+MYn0EvRDFXAz5dwx11tWut0DdbKn0usz9ousHuuIIq4lG0rzxulo0tqxxpFF9knMqxKcQXeXnGVVsOREZLL9IOceXAdNfK4N59NCJN6WabS0tNQcFR6ttqS3V7C10caA6+Vw5boRKJNehpYce0MWM6mSU/dcNNJbhk9uQ6nx0QQ0yxlr5u+TJ+BW/G/5uEOvtIEKhYrHDFStcdBQW3qEacUMn63/8Lfzvho7Sh/aSjFl7MmYvyejaqUrnPcVvykpiWcmbshKflZtKdlArkI8MDJapVOpHYDF+blpfjab1CZ7lj+1322y/GzDtux8kfA9Ml9Yjkea3HIk24Dp3P9zZYNpVmT9L0Cp5HlMv4DmqHLjjHLw8Ubo6bMGxUbgEsRNl0nKdC5Iwz8MkkNe5Jh3qcpfU3KAuJUUB1IX0JDqMIbLfrYmILp/U4jP4MqkUgSPcl88aA7gaLjW499t3UO2ygeVgySNBJKZlLlsHqoksSPoxJhJ2Dq70smx+VGtf5tAJe/k8SCl6clLIb7ZUo9ICvbGp4IZQwPyMfkJ/yoPRxEOf1rEg/2BhMBgMBoMB238udDo8mIPvtgAAAABJRU5ErkJggg==', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAaVBMVEUAAAAAfv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8Afv8pB4mAAAAAInRSTlMADubMEAMh4yUG9cSpkeDIPyftsax4OCiEt6CTaSv6uGsdKQCilQAAAV5JREFUaN7t2MtuwjAQRuEQCAWa9JICBUpv8/4P2YgujgqVjJnfUlHnLL35NMrEC1dRFEVRFF1to6Yq3efWFpvCzPTOhtpCCkauMu96O7fxBCNL6SzbyFfy56DNuYjDsF6HYFQPix9nb40KwThRdnmTnLW7qyNlPNIh/B8dCsNJEAxDwVAi0xszFAwRgoGCoUIwUDD8CAa9DAfrwWikCAbKYLQ6BINWB8OUyAyD3W2W5kfShh9JGxrk1OC+WpoXSRuVOZC0cT8YbiRtqJFZfWr4kbShRh5/MfxI2vAjacOPpA018nxs3GI4kKShQFKGHBknDOkkGGpkMme3MMTIfomCIUZaQ8EQI7XZEwqGEnk1+1ZmNYYa2RsKhhhpDaXF0CK1oZAI4ZOglEI+7NDifbVuiiHtAGwByiA7gBIIBRLINSJ5/WOkv9ToM5DuUmRTOR+f0/XdvIqiKIqi6I/0BYqB3dpJjb19AAAAAElFTkSuQmCC', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEUAAAAAfv8Afv8Afv8Afv8Afv+el/cYAAAABXRSTlMA7pEGicokfn8AAABjSURBVFjD7dU7CsAgEIThPEgfcoPcIEfIEWz2/lexk4FdELFQ4f8qp5jSnQ0Amp2vFc/ncuQw8bsc2U3cLkcuE8nloZUkL81UqKxVmfOLVc9F/1Gqnz6wL+wLFSrsC/sCYAYZq/A3UMFLcdQAAAAASUVORK5CYII='],
	deleteIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAaVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8G612AAAAInRSTlMAgNbVKsBA4PvvEvToqHq5sKCOV1EJz6GIYUc6Ix0Cn2xcxILL1gAAAc1JREFUeNrt3NtugkAURuGNdaocFEHxrG3n/R+yxSFemOxt0oBD2rVu+QN84YK7ESIaosoN1oe8sokfrDcxAgIECBAgt1zSWy4qJJHeSoAAAQLkHhAgQIAAAQLkp/8AcVZFqjT3oXl/3W+ZKhXOSvwfCcjYAjK2gIwtSayKbjVzD01mgzVxD818qEisBvuBj+eXDwQIECB2QIAAsQMCBIgdECBA7IDEhZzrstqIUbNcrZZitanK+hwbcszb63tRy7btYJvpi307yE9xIVkRBvo3WYTBTv8eYVA0USHrbrDQBtc8DPKrLg0do0L23WCiDaa+a6ottt1gGQGiP8SG2M8AAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAD5HeRtFOc0Pj05s5mHQd5oi5UPraNCslx9i66FKu36CoM0iwqRT99Witolvb3mRV8433aQuBA51eXuIEZZe95vZi0Ou7KeinACM5AnAQECxA4IECB2QIAAsQMCBIgdkBdAqveIVb1ARhQQICEgQIDYvRjyDQxMQ62yCHEJAAAAAElFTkSuQmCC',
	infoIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAaVBMVEUAAAAnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjgnMjhOUI+VAAAAInRSTlMAo9O6nJgbjr8wEgr23te0rY+KV0MqJQ8F8czJfn1rak5NWqJKTwAAAI1JREFUGNM1jlkWgkAMBDsMm+CuIO5a9z+kNkt9TOVlkn6RWcUa1rHSTAXbiC0cNVJTNHZTkOwDb2topZdnenKZbCMpp9QeTcFfv4TIZC6fwdogChdlorfzpdEEMgXLSpYmoR0yRDlqp46DM697Nyo655yc6v/TdNONR2u3T+4aCairqobQzDnxJ51d/wC/cglHdd5FoQAAAABJRU5ErkJggg==',
	toolWidth: 26,
	toolHeight: 26,
	radius: 15,
	activityStrok: '#f60',
	inactivityStroke: '#dcdcdc',
	activityFill: '#e9a476',
	inactivityFill: '#fff',
	anchor: [{
		pos: [0.5, 0],
		limit: 'in'
	}, {
		pos: [0.5, 1],
		limit: 'out'
	}],
	//默认的icon
	defaultIcon: ''
};

/***/ }),

/***/ "./components/flowStep/event.js":
/*!**************************************!*\
  !*** ./components/flowStep/event.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

/*
* @Author: hewuchang
* @Date:   2018-07-06 17:11:08
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-05-18 16:22:41
*/
var _require = __webpack_require__(/*! util/handle.js */ "./src/util/handle.js"),
    enterAmplificationFunc = _require.enterAmplificationFunc,
    leaveShrinkFunc = _require.leaveShrinkFunc,
    updateEdge = _require.updateEdge,
    updateGroupPos = _require.updateGroupPos;

var _require2 = __webpack_require__(/*! util/common.js */ "./src/util/common.js"),
    getShapeName = _require2.getShapeName,
    getOprType = _require2.getOprType;

var arg = __webpack_require__(/*! components/eventArgument.js */ "./components/eventArgument.js");
var compName = __filename.split('/')[1];

var _require3 = __webpack_require__(/*! src@/events/eventConsts */ "./src/events/eventConsts.js"),
    COMPCLICK = _require3.COMPCLICK,
    COMPDELETE = _require3.COMPDELETE,
    COMPINFOHOVER = _require3.COMPINFOHOVER,
    COMPINFOLOST = _require3.COMPINFOLOST,
    COMPSTEPHOVER = _require3.COMPSTEPHOVER,
    COMPSTEPLOST = _require3.COMPSTEPLOST;

//hover时当前激活的node集合.


var activeItems = [];
//上一次Hover触发激活的item;
var lastItem = null;
//拖动初始参考
var dx = void 0,
    dy = void 0;
//即将被拖动的步骤对象.
var ghostCloneTarget = null;
//组件自身的操作类型定义:
var moveStep = compName + 'moveStep';

var _leave = function _leave(em, flag) {
	if (!!flag === false) return;
	em.emit(lastItem, compName, COMPSTEPLOST);
	activeItems.forEach(function (item) {
		em.graph.update(item, {
			activity: !1
		});
	});
	activeItems = [];
};

var _hover = function _hover(em, item) {
	activeItems = item.getParent().getChildren();
	activeItems.forEach(function (item) {
		em.graph.update(item, {
			activity: !0
		});
	});
};

var _handleNodeLeave = function _handleNodeLeave(em, curItem) {
	var isLeave = !curItem ? !0 : !1;
	/*
  * 如果纯粹是移动到空白区域, 视为离开操作
  * 如果是快速拖动进入其他图形 或者 是其他图形重叠时, 移出直接到其他图形上也要做离开操作.
  */
	if (null == curItem || null !== lastItem) {
		var model = lastItem.getModel();
		var shapeName = getShapeName(model.shape, compName);

		if (curItem && curItem.getParent() != lastItem.getParent()) isLeave = !0;

		switch (shapeName) {
			case 'anchor':
			case 'tool':
				leaveShrinkFunc(lastItem);
				em.emit(lastItem, compName, 'changeCursor', 'pointer');
				break;
			case 'icon':
			case 'label':
			case 'bk':
				break;
			case 'info':
				em.emit(lastItem, compName, COMPINFOLOST);
				break;
		}
		lastItem = null;
		_leave(em, isLeave);
		return;
	}
};
/*
 * @Author: hewuchang
 * @Date:   2018-07-10 10:11:08
 * @description 移动事件处理, 单纯是为了做Hover相应.
 */
var _handlePureMove = function _handlePureMove(ev, em) {
	var item = ev.item;
	if (item == lastItem) return;

	_handleNodeLeave(em, item);
	if (!item) return;
	var model = ev.item.getModel();
	var shapeName = getShapeName(model.shape, compName);
	switch (shapeName) {
		case 'icon':
		case 'label':
		case 'bk':
		case 'delete':
			_hover(em, item);
			em.emit(item.getParent(), compName, COMPSTEPHOVER);
			break;
		case 'anchor':
		case 'tool':
			em.emit(item, compName, 'changeCursor', 'pointer');
			enterAmplificationFunc(item);
			break;
		case 'info':
			em.emit(item, compName, COMPINFOHOVER);
			_hover(em, item);
			break;
	}
	lastItem = item;
};
/*
 * 根据shapeName处理步骤图形上的up事件
 * @param {Object} ev 事件event
 * @param {Object} em 外层事件管理者.
 * @param {Object} item 图形自身
 * @param {String} shapeName 图形的名称.
 */
var _handleStepUp = function _handleStepUp(ev, em, item, shapeName) {
	switch (shapeName) {
		// 在移动的步骤节点上up, 结束拖动事件.
		case 'ghostStep':
			em.hasAccidentClick(ghostCloneTarget, compName);
			_handleStepMoveEnd(ev, em);
			break;
		// 视为click事件.
		case 'bk':
		case 'icon':
		case 'label':
			if (!ghostCloneTarget) ghostCloneTarget = null;
			arg.oprType = 'pureMove';
			// 对外发射点击事件.
			em.emit(item.getParent(), compName, COMPCLICK);
			break;
		case 'delete':
			em.emit(item.getParent(), compName, COMPDELETE);
			break;
		default:
			break;
	}
};
/*
 * @Author: hewuchang
 * @description 清楚动态添加的线条.
 */
var clearExampleLine = function clearExampleLine() {
	graph.remove(arg.oprEdge);
	graph.update(arg.oprItem, {
		downActivity: !1
	});
	arg.resetOpr();
};
/*
 * @Author: hewuchang
 * @description 为整个步骤移动创建一个ghost node.
 */
var _createStepGhost = function _createStepGhost(em) {
	var graph = em.graph;
	var groupModel = ghostCloneTarget.getModel();
	arg.oprItem = graph.add('node', {
		shape: compName + 'GhostStep',
		x: groupModel.x,
		y: groupModel.y,
		width: groupModel.width,
		height: groupModel.height,
		radius: 6,
		lineWidth: 1
	});
	graph.update();
};
/*
 * @Author: hewuchang
 * @description 步骤ghost node移动结束处理
 */
var _handleStepMoveEnd = function _handleStepMoveEnd(ev, em) {
	//arg.oprType = 'pureMove';
	var graph = em.graph;
	var ghostModel = arg.oprItem.getModel();
	var x = ghostModel.x,
	    y = ghostModel.y;

	updateGroupPos(graph, ghostCloneTarget, { x: x, y: y });
	var model = ghostCloneTarget.getModel();
	// console.log(model.edges);
	//更新连线位置.
	model.edges.forEach(function (_ref) {
		var edgeId = _ref.id;

		var edgeGroup = graph.getItem(edgeId);
		var edgeModel = edgeGroup.getModel();
		var sourceModel = graph.getItem(edgeModel.relation.sourceAnchor).getModel();
		var targetModel = graph.getItem(edgeModel.relation.targetAnchor).getModel();

		var target = {
			x: targetModel.domPos.x - 2,
			y: targetModel.domPos.y - 2
		};
		console.log('to update');
		updateEdge(graph, edgeGroup, {
			target: {
				x: targetModel.domPos.x - 2,
				y: targetModel.domPos.y - 2
			},
			source: {
				x: sourceModel.domPos.x,
				y: sourceModel.domPos.y
			},
			c1: undefined,
			c2: undefined
		});
	});
	graph.remove(arg.oprItem);
	ghostCloneTarget = null;
	arg.resetOpr();
};

var event = {
	mousemove: function mousemove(ev, em) {
		var type = getOprType(arg.oprType, compName);
		switch (type) {
			case 'pureMove':
				_handlePureMove(ev, em);
				break;
			case 'moveStep':
				if (null == arg.oprItem) _createStepGhost(em);
				em.graph.update(arg.oprItem, {
					x: ev.x + dx,
					y: ev.y + dy
				});
				break;
		}
	},
	mousedown: function mousedown(ev, em) {
		var item = ev.item;
		if (!item) return;
		var model = item.getModel();
		var shapeName = getShapeName(model.shape, compName);
		var type = getOprType(arg.oprType, compName);

		switch (type) {
			case 'pureMove':
				switch (shapeName) {
					case 'bk':
					case 'icon':
					case 'label':
						ghostCloneTarget = item.getParent();
						var groupModel = ghostCloneTarget.getModel();
						dx = groupModel.x - ev.x;
						dy = groupModel.y - ev.y;
						arg.oprType = moveStep;
						break;
				}
				break;
		}
	},
	mouseup: function mouseup(ev, em) {
		var item = ev.item;
		if (!item) return;
		var model = item.getModel();
		var shapeName = getShapeName(model.shape, compName);
		var type = getOprType(arg.oprType, compName);
		switch (type) {
			case 'pureMove':
			case 'moveStep':
				_handleStepUp(ev, em, item, shapeName);
				break;
		}
	}
};

module.exports = event;
/* WEBPACK VAR INJECTION */}.call(this, "components/flowStep/event.js"))

/***/ }),

/***/ "./components/flowStep/index.js":
/*!**************************************!*\
  !*** ./components/flowStep/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

/*
* @Author: hewuchang
* @Date:   2018-07-06 16:05:20
* @Last Modified by:   hewuchang
* @Last Modified time: 2018-11-14 18:02:41
*/
var _require = __webpack_require__(/*! ./shape */ "./components/flowStep/shape/index.js"),
    registShape = _require.registShape;
// const { startEvent } = require('./event');


var _require2 = __webpack_require__(/*! ../convert.js */ "./components/convert.js"),
    getFlowStepCompose = _require2.getFlowStepCompose,
    getFlowGroup = _require2.getFlowGroup;

// 通过webpack的node配置拿到当前文件路径,将name拆分出来


var compName = __filename.split('/')[1];

module.exports = {
  name: compName,
  // 判断一下是否初始化过.
  initedFlag: !1,
  init: function init(graph, g6Interface) {
    registShape(compName, g6Interface);
    // startEvent(graph);
    this.initedFlag = !0;
  },

  /**
   * @Author      hewuchang
   * @DateTime    2018-07-09
   * @lastTime    2018-07-09
   * @description 获取当前step的范围.
   */
  getRange: function getRange() {},

  /**
   * @Author      hewuchang
   * @DateTime    2018-07-06
   * @lastTime    2018-07-06
   * @description 转化源数据, 将所需的拆分数据添加到最终的绘制数组中去.
   */
  convertGraphData: function convertGraphData(targetData) {
    var sourceData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var plus = arguments[2];

    // let { x, y, label, anchor } = sourceData;  
    // let groupId = plus.getGroupId();
    // 添加父节点group
    var groupId = getFlowGroup(targetData, sourceData, plus);
    getFlowStepCompose(targetData, sourceData, plus, groupId);
  }
};
/* WEBPACK VAR INJECTION */}.call(this, "components/flowStep/index.js"))

/***/ }),

/***/ "./components/flowStep/shape/groups/index.js":
/*!***************************************************!*\
  !*** ./components/flowStep/shape/groups/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-06 16:33:55
* @Last Modified by:   hewuchang
* @Last Modified time: 2018-07-13 08:45:20
*/
module.exports = {
		//节点名称
		name: 'group',
		//draw function
		draw: function draw(item) {
				var group = item.getGraphicGroup();
				var model = item.getModel();
				if (undefined === model.edges) model.edges = [];
				// 外线框
				var keyShape = group.addShape('rect', {
						attrs: {
								x: model.x,
								y: model.y,
								width: model.width,
								height: model.height,
								radius: 6,
								lineWidth: 1
								//  stroke: model.isActive ? '#666' : '#666'
						}
				});
				// 上背景
				group.addShape('rect', {
						attrs: {
								x: model.x,
								y: model.y,
								width: model.width,
								height: model.height,
								fill: 'red',
								clip: keyShape
						}
				});
				/*
      group.addShape('text', {
         	attrs: {
           	x: model.x + 50,
            y: model.y + 25,
            fill: '#333',
            text : '测试组名称',
            textBaseline : 'middle',
            textAlign : 'start',
            fontSize:'20',
         }
       });*/
				return group;
		},
		_beforeDraw: function _beforeDraw() {
				console.log(233);
		},
		afterDraw: function afterDraw() {},

		anchor: function anchor(item) {
				var model = item.getModel();
				return model.anchor || [];
		}
};

/***/ }),

/***/ "./components/flowStep/shape/index.js":
/*!********************************************!*\
  !*** ./components/flowStep/shape/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

/*
* @Author: hewuchang
* @Date:   2018-07-06 16:33:26
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-02-25 09:59:00
*/
var stepGroup = __webpack_require__(/*! ./groups */ "./components/flowStep/shape/groups/index.js");
var stepAnchor = __webpack_require__(/*! ./nodes/anchor.js */ "./components/flowStep/shape/nodes/anchor.js");
var stepIcon = __webpack_require__(/*! ./nodes/icon.js */ "./components/flowStep/shape/nodes/icon.js");
var stepLabel = __webpack_require__(/*! ./nodes/label.js */ "./components/flowStep/shape/nodes/label.js");
var stepTool = __webpack_require__(/*! ./nodes/tool.js */ "./components/flowStep/shape/nodes/tool.js");
var stepBk = __webpack_require__(/*! ./nodes/bk.js */ "./components/flowStep/shape/nodes/bk.js");
var stepDelete = __webpack_require__(/*! ./nodes/delete.js */ "./components/flowStep/shape/nodes/delete.js");
var stepInfo = __webpack_require__(/*! ./nodes/info.js */ "./components/flowStep/shape/nodes/info.js");
var ghostStep = __webpack_require__(/*! ./nodes/ghostStep.js */ "./components/flowStep/shape/nodes/ghostStep.js");
//const stepEdge = require('./edges/edge.js');

var config = __webpack_require__(/*! components/config.js */ "./components/config.js");

var _require = __webpack_require__(/*! util/common.js */ "./src/util/common.js"),
    getCompNameFromSubItem = _require.getCompNameFromSubItem;

var curConfig = config[getCompNameFromSubItem(__filename)];

var configObj = Object.defineProperty({}, 'config', {
	writable: false,
	configurable: true,
	enumerable: true,
	value: curConfig
});

module.exports = {
	registShape: function registShape(compName, g6Interface) {
		g6Interface.registerGroup(compName + stepGroup.name.substr(0, 1).toUpperCase() + stepGroup.name.substr(1), Object.assign(stepGroup, configObj));

		var nodes = [stepAnchor, stepIcon, stepLabel, stepAnchor, stepBk, stepTool, ghostStep, stepDelete, stepInfo];
		nodes.forEach(function (node) {
			g6Interface.registerNode(compName + node.name.substr(0, 1).toUpperCase() + node.name.substr(1), Object.assign(node, configObj));
		});
	}
};
/* WEBPACK VAR INJECTION */}.call(this, "components/flowStep/shape/index.js"))

/***/ }),

/***/ "./components/flowStep/shape/nodes/anchor.js":
/*!***************************************************!*\
  !*** ./components/flowStep/shape/nodes/anchor.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! components/common/anchor.js */ "./components/common/anchor.js");

/***/ }),

/***/ "./components/flowStep/shape/nodes/bk.js":
/*!***********************************************!*\
  !*** ./components/flowStep/shape/nodes/bk.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-09 15:31:09
* @Last Modified by:   hewuchang
* @Last Modified time: 2018-07-13 08:45:40
*/
var config = __webpack_require__(/*! components/flowStep/config.js */ "./components/flowStep/config.js");
var bkCreate = __webpack_require__(/*! components/common/bk.js */ "./components/common/bk.js");
module.exports = bkCreate({
   width: config.width,
   height: config.height,
   radius: config.radius,
   activityStrok: config.activityStrok,
   inactivityStroke: config.inactivityStroke,
   activityFill: config.activityFill,
   inactivityFill: config.inactivityFill
});

/***/ }),

/***/ "./components/flowStep/shape/nodes/delete.js":
/*!***************************************************!*\
  !*** ./components/flowStep/shape/nodes/delete.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-11-09 09:38:17
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-02-19 19:37:15
*/
module.exports = {
	//节点名称
	name: 'delete',
	draw: function draw(item) {
		var group = item.getGraphicGroup();
		var model = item.getModel();
		if (model.delAble === true) {
			return group.addShape('image', {
				attrs: {
					x: this.config.width - 24 - 6,
					y: this.config.height / 2 - 9,
					img: this.config.deleteIcon,
					width: 18,
					height: 18
				}
			});
		}
		return group;
	}
};

/***/ }),

/***/ "./components/flowStep/shape/nodes/ghostStep.js":
/*!******************************************************!*\
  !*** ./components/flowStep/shape/nodes/ghostStep.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-10 18:09:31
* @Last Modified by:   hewuchang
* @Last Modified time: 2018-07-13 08:46:15
*/
module.exports = {
	//节点名称
	name: 'ghostStep',
	draw: function draw(item) {
		var group = item.getGraphicGroup();
		var model = item.getModel();
		return group.addShape('rect', {
			attrs: {
				x: 0,
				y: 0,
				width: this.config.width,
				height: this.config.height,
				radius: this.config.radius,
				lineWidth: 1,
				stroke: '#01befa',
				fill: 'rgba(1, 180, 250, .5)'
			}
		});
	}
};

/***/ }),

/***/ "./components/flowStep/shape/nodes/icon.js":
/*!*************************************************!*\
  !*** ./components/flowStep/shape/nodes/icon.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-06 16:15:00
* @Last Modified by:   hewuchang
* @Last Modified time: 2018-11-12 15:49:07
*/
module.exports = {
	// 节点名称
	name: 'icon',
	draw: function draw(item) {
		var group = item.getGraphicGroup();
		var model = item.getModel();
		return group.addShape('image', {
			attrs: {
				x: 10,
				y: this.config.height / 2 - 12,
				img: model.nodeIcon || 'public/images/' + this.config.defaultIcon,
				width: 24,
				height: 24
			}
		});
	}
};

/***/ }),

/***/ "./components/flowStep/shape/nodes/info.js":
/*!*************************************************!*\
  !*** ./components/flowStep/shape/nodes/info.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * @Author: hewuchang
 * @Date:   2019-02-25 09:56:57
 * @Last Modified by:   hewuchang
 * @Last Modified time: 2019-02-25 10:13:08
 */
module.exports = {
    //节点名称
    name: 'info',
    draw: function draw(item) {
        var group = item.getGraphicGroup();
        var model = item.getModel();
        if (model.infoAble === true) {
            return group.addShape('image', {
                attrs: {
                    x: this.config.width - 24 - 6,
                    y: -9,
                    img: this.config.infoIcon,
                    width: 16,
                    height: 16
                }
            });
        }
        return group;
    }
};

/***/ }),

/***/ "./components/flowStep/shape/nodes/label.js":
/*!**************************************************!*\
  !*** ./components/flowStep/shape/nodes/label.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * @Author: hewuchang
 * @Date:   2018-07-06 16:15:03
 * @Last Modified by:   hewuchang
 * @Last Modified time: 2019-06-19 18:55:22
 */
var config = __webpack_require__(/*! components/flowStep/config.js */ "./components/flowStep/config.js");
var labelCreate = __webpack_require__(/*! components/common/label.js */ "./components/common/label.js");
module.exports = labelCreate({
  x: config.labelStart,
  y: config.height / 2,
  textBaseline: 'middle',
  textAlign: 'start',
  fontSize: config.fontSize
});

/***/ }),

/***/ "./components/flowStep/shape/nodes/tool.js":
/*!*************************************************!*\
  !*** ./components/flowStep/shape/nodes/tool.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-06 16:14:19
* @Last Modified by:   hewuchang
* @Last Modified time: 2018-07-17 13:20:33
*/
module.exports = {
	//节点名称
	name: 'tool',
	scaleOffsetBase: '',
	draw: function draw(item) {
		var group = item.getGraphicGroup();
		var model = item.getModel();
		var x = model.x,
		    y = model.y,
		    scaleOffsetBase = model.scaleOffsetBase,
		    activity = model.activity;


		this.scaleOffsetBase = scaleOffsetBase;
		model.scaleOffset = this.getScaleOffset(x, y);
		var realPos = this.getRealPos();
		model.realPos = realPos;
		return group.addShape('image', {
			attrs: {
				x: realPos.x,
				y: realPos.y,
				img: this.config.toolIcons[scaleOffsetBase],
				width: activity ? this.config.toolWidth : 1,
				height: activity ? this.config.toolHeight : 1,
				opacity: activity ? 1 : 0
			}
		});
	},

	/**
  * 因为有移动的因素在里面, 因此需要动态计算缩放偏移量.
  */
	getScaleOffset: function getScaleOffset(x, y) {
		return {
			x: x + this.scaleOffsetBase * 25 + 10,
			y: y + 10
		};
	},
	getRealPos: function getRealPos() {
		return {
			x: this.scaleOffsetBase * 25,
			y: -1 * this.config.toolHeight / 2 - 10
		};
	}
};

/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	// 正方形节点名称
	ETLNODE: 'etlNode',
	// 直线名称
	FLOWARROWLINE: 'flowArrowLine',
	// 曲线
	FLOWEDGE: 'flowEdge',
	// 正方形节点group
	ETLNODEGROUP: 'etlNodeGroup',
	// 直线group
	FLOWARROWLINEGROUP: 'flowArrowLineGroup'
};

/***/ }),

/***/ "./src/events/commonEvent.js":
/*!***********************************!*\
  !*** ./src/events/commonEvent.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-10 11:17:16
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-03-20 10:32:40
* @description 整个G6自身的一些事件, 非组件部分.
*/
var arg = __webpack_require__(/*! components/eventArgument.js */ "./components/eventArgument.js");

var _require = __webpack_require__(/*! util/common.js */ "./src/util/common.js"),
    getAnchorName = _require.getAnchorName,
    getEdgeName = _require.getEdgeName;

var _require2 = __webpack_require__(/*! util/handle.js */ "./src/util/handle.js"),
    updateEdge = _require2.updateEdge;
//上一次Hover触发激活的item;


var lastItem = null;
var activeItems = [];
// 单次移动,最大范围记录.
var moveRecord = {
	init: {
		x: 0,
		y: 0
	},
	max: {
		x: 0,
		y: 0
	}
};
/*
 * @Author: hewuchang
 * @description 重置某次移动记录.
 */
var resetMoveRecord = function resetMoveRecord(x, y) {
	moveRecord.init = {
		x: x,
		y: y
	};
	moveRecord.max = {
		x: 0,
		y: 0
	};
};
/*
 * @Author: hewuchang
 * @description 处理锚点down事件.
*/
var _handleAnchorDown = function _handleAnchorDown(item, model, em) {
	var graph = em.graph;
	//添加锚点的相应
	graph.update(item, {
		downActivity: !0
	});
	//新增一条连线.
	var anchorX = model.x + model.realPos.x;
	var anchorY = model.y + model.realPos.y;
	var ids = em.plus.dynamicAdd([{
		shape: em.plus.line,
		source: {
			x: anchorX,
			y: anchorY
		},
		target: {
			x: anchorX,
			y: anchorY
		},
		isAdded: false
	}]);

	//lastItem = item;
	arg.oprItem = item;
	arg.oprGroup = graph.getItem(ids.groups[0]);
	//让group的model和线关联, 便于反向查找.
	arg.oprGroup.getModel().edgeId = ids.edges[0];
	activeItems = arg.oprGroup.getChildren();
	arg.oprEdge = graph.getItem(ids.edges[0]);

	arg.oprType = 'waitEndLine';
};

var _handleNodeLeave = function _handleNodeLeave(curItem) {
	var isLeave = !curItem ? !0 : !1;
	/*
  * 如果纯粹是移动到空白区域, 视为离开操作
  * 如果是快速拖动进入其他图形 或者 是其他图形重叠时, 移出直接到其他图形上也要做离开操作.
  */
	if (null !== lastItem) {}
};
/*
 * @Author: hewuchang
 * @Date:   2018-07-10 10:11:08
 * @Last Modified by:   hewuchang
 * @Last Modified time: 2018-07-10 16:33:30
 * @description 移动事件处理, 单纯是为了做Hover相应.
*/
var _handlePureMove = function _handlePureMove(ev, em) {
	var item = ev.item;
	if (item === null) {
		// em.emit('changeCursor', 'default');
	}
};
/*
 * @Author: hewuchang
 * @Date:   2018-07-10 10:11:08
 * @Last Modified by:   hewuchang
 * @Last Modified time: 2018-07-10 16:33:30
 * @description 处理删除事件.
*/
var _handleDeleteEvent = function _handleDeleteEvent(ev) {
	var model = arg.oprItem.getModel();
	var shapeName = getEdgeName(model.shape);
	switch (shapeName) {
		case 'edge':
			console.log('删除连线');
			break;
	}
};
/*
 * @Author: hewuchang
 * @Date:   2018-07-10 09:30:08
 * @Last Modified by:   hewuchang
 * @Last Modified time: 2018-07-10 16:33:30
 * @description 公共的事件处理.
 */
var commonEvent = {
	mousemove: function mousemove(ev, em) {
		var x = ev.x,
		    y = ev.y;

		moveRecord.max.x = Math.max(moveRecord.max.x, Math.abs(x - moveRecord.init.x));
		moveRecord.max.y = Math.max(moveRecord.max.y, Math.abs(y - moveRecord.init.y));
		switch (arg.oprType) {
			case 'waitEndLine':
				updateEdge(em.graph, arg.oprGroup, {
					target: {
						x: x - 2,
						y: y - 2
					}
				});
				break;
			case 'pureMove':
				_handlePureMove(ev, em);
				break;
		}
	},
	mousedown: function mousedown(ev, em) {
		var item = ev.item;
		resetMoveRecord(ev.x, ev.y);
		if (!item) return;
		var model = item.getModel();
		var shapeName = getAnchorName(model.shape);
		// 锚点事件
		switch (shapeName) {
			case 'anchor':
				_handleAnchorDown(item, model, em);
				em.dispatch('showImportAnchor', item);
				break;
		}
	},
	mouseup: function mouseup(ev, em) {
		em.setMoveRange(moveRecord.max);
	},

	//按键事件
	keyup: function keyup(ev, em) {
		if (!arg.oprItem) return;
		switch (ev.domEvent.keyCode) {
			case '46':
				break;
		}
	}
};

module.exports = commonEvent;

/***/ }),

/***/ "./src/events/eventConsts.js":
/*!***********************************!*\
  !*** ./src/events/eventConsts.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
* @Author: hewuchang
* @Date:   2018-11-09 11:46:02
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-02-25 10:06:05
* @description 事件名称常量化. 有基于原生事件的, 有自定义事件的. 主要用来相应外部事件监听, 已经内部部分事件.
*/
var COMPCLICK = exports.COMPCLICK = 'comp_click';
var COMPDELETE = exports.COMPDELETE = 'comp_delete';
var COMPINFOHOVER = exports.COMPINFOHOVER = 'comp_infoHover';
var COMPINFOLOST = exports.COMPINFOLOST = 'comp_infoLost';
var COMPSTEPHOVER = exports.COMPSTEPHOVER = 'comp_stepHover';
var COMPSTEPLOST = exports.COMPSTEPLOST = 'comp_stepLost';

/***/ }),

/***/ "./src/events/index.js":
/*!*****************************!*\
  !*** ./src/events/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
* @Author: hewuchang
* @Date:   2018-07-10 10:16:27
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-03-21 11:07:59
* @description 整个组件事件分发.
* 1, 各种事件归类.
* 	@pureMove,单纯的鼠标移动事件,主要是拿来分发各组件纯粹的hover事件相应.因为单个group里面包含多个node,因此
*            优先使用mousemove事件的判断来替代mouseenter和mouseleave事件.
* 	@waitEndLine, 锚点mouseDown的同时生成一条连线, 该类型表示当前状态, 一直到mouseup表示该状态的结束
* 	@waitEditorEdge, 在某条连线上mouseup, 表示画面当前的状态是等待编辑该连线.
* 	@moveStep, 当在某个步骤图形(icon, label, bk区域)上mousedown的时候, 表示画面当前的状态是准备移动该步骤
* 	@moveController 当在三次贝塞尔曲线的控制点down时, 表示当前状态是准备移动控制点.
* 2, 事件emit说明:
* 	emit事件分为大类: 浏览器原生事件以及内部自定义事件. 原生事件直接暴露给外面注入的事件做相应.
*	内部事件主要是用来处理优化界面交互, 提升用户操作体验而额外增加的一些事件.
*/
// 增加的非原生事件归类.
var unNativeLists = ['pureMove', 'waitEndLine', 'waitEditorEdge', 'moveStep', 'moveController'];
// 组件私有事件
var cmpEvents = __webpack_require__(/*! components/cmpEvent.js */ "./components/cmpEvent.js");
// 公用事件调度, 主要用来协调各组件
var commonEvent = __webpack_require__(/*! ./commonEvent.js */ "./src/events/commonEvent.js");

var _require = __webpack_require__(/*! util/common.js */ "./src/util/common.js"),
    getType = _require.getType,
    mix = _require.mix;

var events = [commonEvent].concat(_toConsumableArray(cmpEvents));

var _require2 = __webpack_require__(/*! src@/events/eventConsts */ "./src/events/eventConsts.js"),
    COMPCLICK = _require2.COMPCLICK;

// 内部事件处理, 是当前event的扩展.


var innerEvent = __webpack_require__(/*! ./innerEvent */ "./src/events/innerEvent/index.js");
var Event = {
	// 设置某轮down-move-up过程中 最大的移动距离.
	setMoveRange: function setMoveRange(range) {
		this.moveRange = range;
	},
	getMoveRange: function getMoveRange() {
		return this.moveRange;
	},

	// 根据某轮点击鼠标事件判断是否触发意外点击事件. 阈值是5.
	hasAccidentClick: function hasAccidentClick(group, compName) {
		var _moveRange = this.moveRange,
		    x = _moveRange.x,
		    y = _moveRange.y;

		if (5 > x && 5 > y) {
			this.emit(group, compName, COMPCLICK);
		}
	},

	// 各组件派发其他组件需要响应事件
	dispatch: function dispatch(type, sender) {
		this.plus.onDispatch(type, sender);
	},

	// 对外发射事件, 例如组件内的click事件.
	emit: function emit(sender, component, eventType, data) {
		var type = eventType.split('_')[1];
		// 内部处理
		this.handle(sender, component, type, data);
		var eventList = this.plus.outerEventList[component];
		if (!eventList) return;
		for (var i = 0, len = eventList.length; i < len; i++) {
			var func = eventList[i][type];
			if (!func) continue;
			if ('Function' != getType(func)) return;
			func(sender);
		}
	},

	// 注册各种事件.
	registEvent: function registEvent(graph, plus) {
		this.plus = plus;
		this.graph = graph;
		graph.on('mousemove', this.handleEvent.bind(this));
		graph.on('mousedown', this.handleEvent.bind(this));
		graph.on('mouseup', this.handleEvent.bind(this));
		graph.on('keyup', this.handleEvent.bind(this));
	},

	// 停止一轮事件处理.
	stopCurrentHandle: function stopCurrentHandle() {
		this.stopHandle = !0;
	},

	// 分发事件
	handleEvent: function handleEvent(ev) {
		var _this = this;

		var type = ev._type || ev.domEvent.type;
		this.stopHandle = !1;
		events.forEach(function (event) {
			if (_this.stopHandle) return;
			event[type] && event[type](ev, _this);
		});
	},

	// 重新分发一次事件循环. 
	reHandleEvent: function reHandleEvent(ev) {
		this.stopCurrentHandle();
		this.handleEvent(ev);
	}
};
mix(Event, innerEvent);
module.exports = Event;

/***/ }),

/***/ "./src/events/innerEvent/handler.js":
/*!******************************************!*\
  !*** ./src/events/innerEvent/handler.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-11-09 11:46:08
* @Last Modified by:   hewuchang
* @Last Modified time: 2018-11-12 11:10:10
*/
var handler = {
	'*': {
		delete: function _delete(item, data) {
			this.plus.deleteItem(item);
		}
	}
};
module.exports = handler;

/***/ }),

/***/ "./src/events/innerEvent/index.js":
/*!****************************************!*\
  !*** ./src/events/innerEvent/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-11-09 11:45:53
* @Last Modified by:   hewuchang
* @Last Modified time: 2018-11-12 11:05:58
* @description 处理一些日常交互中需要在内部作消化的事情, 
*/
var handler = __webpack_require__(/*! ./handler */ "./src/events/innerEvent/handler.js");
var innerEvent = {
	handle: function handle(sender, component, eventType, data) {
		var compHandler = handler['*'];
		var func = compHandler[eventType];
		if (typeof func === 'function') {
			func.call(this, sender, data);
		}
	}
};
module.exports = innerEvent;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
* @Author: hewuchang
* @Date:   2018-07-06 17:59:40
* @Last Modified by:   hewuchang
* @Last Modified time: 2019-05-20 09:17:54
*/

var cmp = __webpack_require__(/*! components/cmp.js */ "./components/cmp.js");
var Event = __webpack_require__(/*! ./events/index.js */ "./src/events/index.js");
// const G6 = require('@antv/g6');

var _require = __webpack_require__(/*! util/handle.js */ "./src/util/handle.js"),
    updateGroupItem = _require.updateGroupItem,
    deleteEdge = _require.deleteEdge;

var _require2 = __webpack_require__(/*! util/common.js */ "./src/util/common.js"),
    uuid = _require2.uuid;

var plusConst = __webpack_require__(/*! ./const.js */ "./src/const.js");
var nodeId = 0;
var groupId = 0;
var edgeId = 0;
/*
 * @Author: hewuchang
 * @Date:   2018-11-09 09:30:08
 * @Last Modified by:   hewuchang
 * @Last Modified time: 2018-11-09 09:30:08
 * @description 派发锚点点击事件
 */
var _showImportAnchor = function _showImportAnchor(graph, sender, unAvailableGroups) {
	var senderGroup = sender.getParent();
	var senderModel = sender.getModel();
	var container = [];
	// 当前anchor的类型.
	var anchorLimt = sender.getModel().limit;
	graph.getGroups().forEach(function (group) {
		// 如果group是当前sender的父group不做操作.
		if (group == senderGroup || unAvailableGroups.indexOf(group) !== -1) return;
		var groupModel = group.getModel();

		if (!groupModel.edges || !(groupModel.edges instanceof Array)) return;
		groupModel.edges.forEach(function (_ref) {
			var id = _ref.id;

			var edgeModel = graph.getItem(id).getModel();
			// 已有连线关系不做操作.
			if (edgeModel.relation.sourceAnchor == senderModel.id) return;
		});
		group.getChildren().forEach(function (childItem) {
			var model = childItem.getModel();
			// 非锚点的节点不更新, 同类型锚点(sender是开始 那么只相应limit配置含有结束的锚点)
			if (-1 == model.shape.indexOf('Anchor') || model.shape.limit === anchorLimt) return;
			graph.update(childItem, {
				showImportAnchor: !0
			});
			container.push(childItem);
		});
	});
	return function () {
		container.forEach(function (item) {
			graph.update(item, {
				showImportAnchor: !1
			});
		});
		container = [];
	};
};

var getFlowGroupsFromPath = function getFlowGroupsFromPath(groups) {
	return groups.flat(Infinity).map(function (path) {
		return path.group;
	});
};

var G6Plus = {
	line: 'flowEdge',
	const: plusConst,
	// 初始化.
	init: function init(graph, targetData, sourceData, option, g6Interface) {
		//添加引用.
		this.graph = graph;
		this.targetData = targetData;
		this.sourceData = sourceData;
		for (var key in option) {
			this[key] = option[key];
		}
		//组件初始化.
		cmp.init(graph, g6Interface);
		//注册监听事件
		Event.registEvent(graph, this);
		//数据转化.
		this.convertGraphData(targetData, sourceData);
	},

	/*
  * @Author: hewuchang
  * @param { Array } newData, 即将被添加的数据集合
  * @return {Object} ids, 将新添加的所有图形的ID集合返回, 便于其他逻辑操作.
  * @description 提供一个动态添加的入口.
  */
	dynamicAdd: function dynamicAdd(newData) {
		var _this = this;

		var ids = {};
		// 先构建一个假的渲染数据.
		var targetData = {
			nodes: [],
			groups: [],
			edges: []
		};
		this.convertGraphData(targetData, newData);
		Object.getOwnPropertyNames(targetData).forEach(function (name, index) {
			var shapeType = name.substr(0, name.length - 1);
			ids[name] = [];
			targetData[name].forEach(function (config) {
				_this.graph.add(shapeType, config);
				ids[name].push(config.id);
			});
		});
		this.graph.update();
		return ids;
	},
	updateItem: function updateItem(item, option) {
		var _this2 = this;

		var model = item.getModel();
		Object.getOwnPropertyNames(option).forEach(function (prop) {
			model[prop] = option[prop];
			var name = void 0,
			    key = void 0,
			    value = option[prop];
			switch (prop) {
				case 'label':
					name = 'label';
					key = 'label';
					break;
				case 'delAble':
					name = 'delete';
					key = 'delAble';
					break;
				case 'infoType':
					name = 'info';
					key = 'infoType';
					break;
			}
			updateGroupItem(_this2.graph, item, {
				name: name,
				key: key,
				value: value
			});
		});
	},
	deleteItem: function deleteItem(item) {
		var _this3 = this;

		var waitDelItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

		var model = item.getModel();
		var edges = [].concat(_toConsumableArray(model.edges));
		// 删除连线
		edges.forEach(function (_ref2) {
			var edgeGroupId = _ref2.id;

			deleteEdge(_this3.graph, edgeGroupId);
		});
		this.graph.remove(item);
		if (waitDelItems.length !== 0) {
			this.deleteItem(this.graph.getItem(waitDelItems.shift()), waitDelItems);
		}
	},

	/*
  * @Author: hewuchang
  * @param {String} type 输入/输出类型
  * @description 根据输入/输入获取某个shape对应锚点.
  */
	getItemAnchor: function getItemAnchor(item, type) {
		if (!item) return;
		var children = item.getChildren();
		var anchors = [];
		for (var i = children.length - 1; i >= 0; i--) {
			var model = children[i].getModel();
			if (model.shape.indexOf('Anchor') !== -1 && (model.limit || '').indexOf(type) !== -1) {
				anchors.push(children[i]);
			}
		}
		return anchors;
	},

	/*
  * @Author: hewuchang
  * @description 根据连线关系 疏离出某个节点的关联关系。.
  */
	getGroupFlowPath: function getGroupFlowPath(group) {
		var paths = [[{
			group: group
		}]];
		var self = this;
		+function traversal(paths) {
			var hasChild = false;

			var _loop = function _loop(_i, _len) {
				var path = paths[_i];
				var model = path[path.length - 1].group.getModel();
				var changedPath = [];
				var inCount = 0;
				(model.edges || []).forEach(function (edge) {
					if (edge.pos === 'in') {
						var edgeGroup = self.getGroupById(edge.id);
						changedPath.push([].concat(_toConsumableArray(path), [{
							edgeId: edge.id,
							group: self.getGroupById(edgeGroup.getModel().relation.sourceGroup)
						}]));
						inCount++;
						hasChild = true;
					}
				});
				if (changedPath.length !== 0) paths.splice.apply(paths, [_i, 1].concat(changedPath));

				var increment = Math.max(0, inCount - 1);
				_i += increment;
				_len += increment;
				i = _i;
				len = _len;
			};

			for (var i = 0, len = paths.length; i < len; i++) {
				_loop(i, len);
			}
			if (hasChild) traversal(paths);
		}(paths);
		return paths;
	},

	/*
  * @Author: hewuchang
  * @description 获取当前绘画的全部信息.
  */
	getGraphInfo: function getGraphInfo() {
		return this.graph.save();
	},
	getAllGroups: function getAllGroups() {
		return this.getGraphInfo().groups || [];
	},
	getGroupById: function getGroupById(id) {
		return this.graph.getItem(id);
	},

	/*
  * @Author: hewuchang
  * @param { Array } eventList, 需要相应的外部组件列表
  * @description 对外暴露一个注册事件的接口
  */
	addEvents: function addEvents(eventList) {
		this.outerEventList = eventList;
	},

	/*
  * @Author: hewuchang
  * @return {String} 唯一的nodeId
  * @description 生成node唯一id
  */
	getNodeId: function getNodeId(pGroupId, type, sqnm) {
		var puuid = pGroupId.split('_')[1];
		var id = 'nodeId_' + puuid + '_' + type + '_' + sqnm;
		return id;
	},

	/*
  * @Author: hewuchang
  * @return {String} 唯一的groupId
  * @description 生成group唯一id
  */
	getGroupId: function getGroupId() {
		return 'groupId_' + uuid();
	},

	/*
  * @Author: hewuchang
  * @return {String} 唯一的groupId
  * @description 获取当前group所有的连线配置.
  */
	getGroupEdges: function getGroupEdges(group) {
		return group.getModel().edges || [];
	},
	getGroupOutEdges: function getGroupOutEdges(group) {
		return this.getGroupEdges(group).filter(function (_ref3) {
			var id = _ref3.id,
			    pos = _ref3.pos;

			if (pos === 'out') {
				return true;
			}
		});
	},

	/*
  * @Author: hewuchang
  * @return {String} 唯一的edgeId
  * @description 生成edge唯一id
  */
	getEdgeId: function getEdgeId() {
		return 'edgeId_' + uuid();
	},
	getDirectGroup: function getDirectGroup(group) {
		var _this4 = this;

		return this.getGroupOutEdges(group).reduce(function (arr, _ref4) {
			var id = _ref4.id,
			    pos = _ref4.pos;

			arr.push(_this4.graph.getItem(_this4.graph.getItem(id).getModel().relation.targetGroup));
			return arr;
		}, []);
	},

	/*
  * @Author: hewuchang
  * @param {Object} targetData 即将被转出的graph read对象
  * @param {Object} sourceData 要被转换的原始数据
  * @description 将后台给的原始数据通过各组件的转换接口做转换.
  */
	convertGraphData: function convertGraphData(targetData, sourceData) {
		var _this5 = this;

		sourceData.forEach(function (data) {
			cmp.convertGraphData(targetData, data, _this5);
		});
	},

	/*
  * @Author: hewuchang
  * @param {String} type 通信的类型.
  * @param {Object} sender 通信发起者.
  * @description 各组件通信入口
  */
	onDispatch: function onDispatch(type, sender) {
		switch (type) {
			case 'showImportAnchor':
				var unAvailableGroups = [];
				var group = sender.getParent();
				if (!this.isAllowCycle) {
					unAvailableGroups = [].concat(_toConsumableArray(new Set(getFlowGroupsFromPath(this.getGroupFlowPath(group)).concat(this.getDirectGroup(group)))));
				}
				this.hideImportAnchor = _showImportAnchor(this.graph, sender, unAvailableGroups);
				break;
			case 'hideImportAnchor':
				this.hideImportAnchor && this.hideImportAnchor();
				this.hideImportAnchor = null;
				break;
		}
	}
};
window.g6Plus = G6Plus;
// G6.Plugins['layout.plus'] = G6Plus;
module.exports = G6Plus;

/***/ }),

/***/ "./src/util/common.js":
/*!****************************!*\
  !*** ./src/util/common.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* @Author: hewuchang
* @Date:   2018-07-09 14:38:48
* @Last Modified by:   hewuchang
* @Last Modified time: 2018-11-14 18:13:16
* @desc 用来提供一些常用的公用方法.
*/
var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
var slice = Array.prototype.slice;
var toArray = function toArray(target) {
				return slice.call(target);
};
module.exports = {
				/*
     * @Author: hewuchang
     * @description 获取对象的真实类型
     */
				getType: function getType(target) {
								return Object.prototype.toString.call(target).slice(8, -1);
				},

				/*
     * @Author: hewuchang
     * @param {String} modelShape 主键最终对外暴露的名字 比如 flowStepIcon
     * @param {String} cp 组件的名称,对应components下文件的目录, 比如flowStep
     * @description 根据组件的完整名字拆分出组件某个组成部分的真实名字. 比如icon.
     */
				getShapeName: function getShapeName(modleShape, cp) {
								if (undefined == cp) throw new Error('拆分获取组件' + modleShape + '真名的时候, 没有传入当前组件名');
								var name = modleShape.split(cp)[1];
								//考虑到垮组件拾取, 如果是undefined, 即当前组件在事件拾取时拾取到其他组件的model, 统一返回一个默认值.
								if (undefined == name) return 'otherComponentShape';
								return name.substr(0, 1).toLowerCase() + name.substr(1);
				},

				/*
     * @Author: hewuchang
     * @param {String} modelShape 主键最终对外暴露的名字 比如 flowStepIcon
     * @param {String} cp 组件的名称,对应components下文件的目录, 比如flowStep
     * @description 在组件某个文件中获取当前组件名.
     */
				getCompNameFromSubItem: function getCompNameFromSubItem(path) {
								return path.split('/')[1];
				},

				/*
     * @Author: hewuchang
     * @param {String} modelShape 主键最终对外暴露的名字 比如 flowStepIcon
     * @description 根据组件的完整名字拆分出当前组件是否是anchor.
     */
				getAnchorName: function getAnchorName(modelShape) {
								var name = modelShape.slice(-6);
								return name.substr(0, 1).toLowerCase() + name.substr(1);
				},

				/*
     * @Author: hewuchang
     * @param {String} modelShape 主键最终对外暴露的名字 比如 flowStepIcon
     * @description 根据组件的完整名字拆分出当前组件是否是edge.
     */
				getEdgeName: function getEdgeName(modelShape) {
								var name = modelShape.slice(-4);
								return name.substr(0, 1).toLowerCase() + name.substr(1);
				},

				/*
     * @Author: hewuchang
     * @param {Object} source 三次贝塞尔曲线的开始坐标
     * @param {Object} target 三次贝塞尔曲线的终点坐标
     * @description 根据起点和终点生成一个默认的控制点.
     */
				getCubicController: function getCubicController(source, target) {
								var c1 = void 0,
								    c2 = void 0;

								var distance = (target.y - source.y) / 5;
								if (distance > 0) distance = Math.max(distance, 80);
								if (distance < 0) distance = Math.min(distance, -80);

								var p1 = [source.x, source.y];

								var p4 = [target.x, target.y];

								if (target.y > source.y) {
												c1 = [source.x, source.y + distance];
												c2 = [target.x, target.y - distance];
								} else {
												c1 = [source.x, source.y - distance];
												c2 = [target.x, target.y + distance];
								}
								return {
												c1: c1,
												c2: c2
								};
				},

				/*
     * @Author: hewuchang
     * @param {String} totalType 完整的事件类型.
     * @param {String} compName 当前组件的名字.
     * @description 解耦组件事件, 拆分出组件自身的事件类型. 如果是公共事件的话直接返回.
     */
				getOprType: function getOprType(totalType, compName) {
								if (-1 == totalType.indexOf(compName)) return totalType;
								return totalType.split(compName)[1];
				},
				mix: function mix() {
								var args = toArray(arguments);
								var obj = args[0];
								var source = void 0;
								var i = void 0;
								if (obj === true) {
												obj = args[1];
												for (i = 2; i < args.length; i++) {
																source = args[i];
																deepMix(obj, source);
												}
								} else {
												for (i = 1; i < args.length; i++) {
																source = args[i];
																for (var k in source) {
																				if (source.hasOwnProperty(k) && k !== 'constructor') {
																								obj[k] = source[k];
																				}
																}
												}
								}
								return obj;
				},

				uuid: function uuid(len, rad) {
								var chars = CHARS;
								var uuid = [];
								var radix = rad || chars.length;
								var i = void 0;
								var r = void 0;
								if (len) {
												// Compact form
												for (i = 0; i < len; i++) {
																uuid[i] = chars[0 | Math.random() * radix];
												}
								} else {
												// rfc4122, version 4 form\
												// rfc4122 requires these characters
												uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
												uuid[14] = '4';
												// Fill in random data.  At i===19 set the high bits of clock sequence as
												// per rfc4122, sec. 4.1.5
												for (i = 0; i < 36; i++) {
																if (!uuid[i]) {
																				r = 0 | Math.random() * 16;
																				uuid[i] = chars[i === 19 ? r & 0x3 | 0x8 : r];
																}
												}
								}
								return uuid.join('');
				},
				// A more performant, but slightly bulkier, RFC4122v4 solution.  We boost performance by minimizing calls to random()
				uuidFast: function uuidFast() {
								var chars = CHARS;
								var uuid = new Array(36);
								var rnd = 0;
								var r = void 0;
								var i = void 0;
								for (i = 0; i < 36; i++) {
												if (i === 8 || i === 13 || i === 18 || i === 23) {
																uuid[i] = '-';
												} else if (i === 14) {
																uuid[i] = '4';
												} else {
																if (rnd <= 0x02) {
																				rnd = 0x2000000 + Math.random() * 0x1000000 | 0;
																}
																r = rnd & 0xf;
																rnd = rnd >> 4;
																uuid[i] = chars[i === 19 ? r & 0x3 | 0x8 : r];
												}
								}
								return uuid.join('');
				},
				// 返回不带横线的UUID
				uuidString: function uuidString() {
								var str = this.uuidFast().replace(new RegExp('-', 'g'), '');
								return str;
				},
				// A more compact, but less performant, RFC4122v4 solution:
				uuidCompact: function uuidCompact() {
								return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
												var r = Math.random() * 16 | 0;
												var v = c === 'x' ? r : r & 0x3 | 0x8;
												return v.toString(16);
								});
				}
};

/***/ }),

/***/ "./src/util/handle.js":
/*!****************************!*\
  !*** ./src/util/handle.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
 * @Author: hewuchang
 * @Date:   2018-07-06 17:17:53
 * @Last Modified by:   hewuchang
 * @Last Modified time: 2019-05-18 16:47:57
 * @desc 用来提供一些公用的相应方法
 */
var getModelGroup = function getModelGroup(item) {
    return {
        group: item.getGraphicGroup(),
        model: item.getModel()
    };
};
//鼠标进入放大效果
var enterAmplificationFunc = function enterAmplificationFunc(item) {
    var _getModelGroup = getModelGroup(item),
        group = _getModelGroup.group,
        model = _getModelGroup.model;

    var _model$scaleOffset = model.scaleOffset,
        x = _model$scaleOffset.x,
        y = _model$scaleOffset.y;


    group && !group.get('destroyed') && group.animate({
        transform: [['t', -x, -y], ['s', 1.2, 1.2], ['t', x, y]]
    }, 100, 'easeCircleOut');
};
//鼠标进入放大效果
var leaveShrinkFunc = function leaveShrinkFunc(item) {
    var _getModelGroup2 = getModelGroup(item),
        group = _getModelGroup2.group,
        model = _getModelGroup2.model;

    var _model$scaleOffset2 = model.scaleOffset,
        x = _model$scaleOffset2.x,
        y = _model$scaleOffset2.y;


    group && !group.get('destroyed') && group.animate({
        transform: [['t', -x, -y], ['s', 0.83333333, 0.83333333], ['t', x, y]]
    }, 100, 'easeCircleOut', function () {
        item.layoutUpdate();
    });
};
/**
 * 更新连线的结束位置, 包括添加时未确定结束点和添加后移动其关联的图形位置的更新.
 * @param {Object} graph
 * @param {Object} edgeItem, 连线对象自身
 * @param {Object} option 连线的属性.
 */
var updateEdge = function updateEdge(graph, edgeGroup, option) {
    var edge = graph.getItem(edgeGroup.getModel().edgeId);
    [edgeGroup].concat(_toConsumableArray(edgeGroup.getChildren()), [edge]).forEach(function (child) {
        graph.update(child, option);
    });
};
/**
 * 更新group的某项属性.
 * @param {Object} graph
 * @param {Object} group, 连线对象自身
 * @param {String} 项配置. 连线的属性.
 */
var updateGroupItem = function updateGroupItem(graph, group, config) {
    (group.getChildren() || []).some(function (item) {
        var model = item.getModel();
        if (model.shape.toLocaleLowerCase().indexOf(config.name) !== -1) {
            graph.update(item, _defineProperty({}, config.key, config.value));
            return true;
        }
    });
};
/**
 * 更新group的坐标.
 * @param {Object} graph
 * @param {Object} group, 连线对象自身
 * @param {Object} pos, 新的坐标位置.
 */
var updateGroupPos = function updateGroupPos(graph, group, pos) {
    // 先更新组自身
    graph.update(group, pos);
    // 子组件位置更新.
    var childrens = group.getChildren();
    childrens.forEach(function (child) {
        graph.update(child, {
            x: pos.x,
            y: pos.y,
            forceUpdata: Math.random() * 10
        });
    });
};
/**
 * 删除连线.
 * @param {Object} graph
 * @param {Object|String} edgeGroup, 可以是组自身也可以是组id
 */
var deleteEdge = function deleteEdge(graph, edgeGroup) {
    var edgeGroupItem = edgeGroup;
    if (typeof edgeGroup === 'string') {
        edgeGroupItem = graph.getItem(edgeGroup);
    }
    var edgeGroupModel = edgeGroupItem.getModel();
    // 获取联系.
    var edge = graph.getItem(edgeGroupModel.edgeId);
    // 删除连线组
    graph.remove(edgeGroupItem);
    // 删除edge
    graph.remove(edge);
    return clearLineRealtion(graph, edgeGroupItem);
};
/**
 * 清除线的联系关系.
 * @param {Object} graph
 * @param {Object} edgeGroupItem, 连线group item.
 */
var clearLineRealtion = function clearLineRealtion(graph, edgeGroupItem) {
    var edgeGroupModel = edgeGroupItem.getModel();
    var edgeGroupId = edgeGroupModel.id;
    // 反向清除当前线的关系.
    var sourceGroupId = edgeGroupModel.relation.sourceGroup;
    var targetGroupId = edgeGroupModel.relation.targetGroup;

    [graph.getItem(sourceGroupId), graph.getItem(targetGroupId)].forEach(function (item) {
        if (!item) return;

        var _item$getModel = item.getModel(),
            edges = _item$getModel.edges;

        edges.some(function (_ref, index) {
            var id = _ref.id;

            if (id === edgeGroupId) {
                edges.splice(index, 1);
                return true;
            }
        });
    });
    return {
        sourceGroupId: sourceGroupId,
        targetGroupId: targetGroupId
    };
};
module.exports = {
    enterAmplificationFunc: enterAmplificationFunc,
    leaveShrinkFunc: leaveShrinkFunc,
    updateEdge: updateEdge,
    updateGroupItem: updateGroupItem,
    updateGroupPos: updateGroupPos,
    deleteEdge: deleteEdge,
    clearLineRealtion: clearLineRealtion
};

/***/ })

/******/ });
});
//# sourceMappingURL=g6plus.js.map