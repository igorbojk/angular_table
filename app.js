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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_layout_controller__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index__ = __webpack_require__(2);





let modules = [
	__WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* default */],
	__WEBPACK_IMPORTED_MODULE_2__components_index__["a" /* default */]
]

let myApp = angular.module('myApp', modules)
	.controller('LayoutCtrl', __WEBPACK_IMPORTED_MODULE_0__controllers_layout_controller__["a" /* default */])


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__om_table_om_table_component__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (angular.module('myApp.components', [__WEBPACK_IMPORTED_MODULE_0__om_table_om_table_component__["a" /* default */]])
	.name);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class OmTableController {

    constructor(tableDataService) {
        this.tableDataService = tableDataService;
    }   

    $onInit() {
    }

    get test(){
        return this.tableDataService.test;
    }
  
}

OmTableController.$inject = ['tableDataService'];

/* harmony default export */ __webpack_exports__["a"] = (angular.module('app.components.om-table', [])
    .component('omTable', {
        templateUrl: '../app/components/om-table/om-table.template.html',
        controller: OmTableController,
        controllerAs: 'vm',
        bindings: {
        }
    })
    .name);




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class LayoutController { 
    constructor(){
    	this.test = 'test';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LayoutController;


LayoutController.$inject = [];

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_data_service__ = __webpack_require__(6);

/* harmony default export */ __webpack_exports__["a"] = (angular.module('myApp.services', [])
    .service('tableDataService', __WEBPACK_IMPORTED_MODULE_0__table_data_service__["a" /* default */])
	.name);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class tableDataService {
    constructor(){
        this.test = 'test-everest';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = tableDataService;


tableDataService.$inject = [];


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);