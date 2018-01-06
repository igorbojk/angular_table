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


let modules = []

let myApp = angular.module('myApp', modules)
	.controller('LayoutCtrl', __WEBPACK_IMPORTED_MODULE_0__controllers_layout_controller__["a" /* default */])


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class LayoutController { 
    constructor($timeout, $http){
    	this.$timeout = $timeout;
    	this.$http = $http;
    	this.tableHeadTitles = [
    		'id',
    		'name',
    		'location',
    		'currency',
    	]
    	this.tableData = [];
    	this.isEditNow = false;
    	this.currentEditItem = null;
    	this.currentEditKey = null;
    	this.sortBy = null;
    }

    $onInit() {
        this.getTableData();
    }
    getTableData(){
    	this.$http({
    		method: 'GET',
            url: 'test.json',
    	}) 
		.then(response => {
		    this.tableData = response.data;
		});
    }

    get total(){
        let total = 0;
        this.tableData.forEach((i)=>{
            total += i.currency 
        });
        return total;
    }

    editItem(item, key){
    	if(key == 'currency'){
    		this.inputType = 'number';
    	}else{
    		this.inputType = 'string';
    	}
    	item.edit = true;
    	this.isEditNow = true;
    	this.currentEditItem = angular.copy(item);
    	this.currentEditKey = key;
    }

    cancel(item){
    	item.edit = false;
    	this.resetEditSettings();
    }
    saveField(item, key){
    	item[key] = this.currentEditItem[key];
    	item.edit = false;
    	this.resetEditSettings();
    }

    resetEditSettings(){
    	this.isEditNow = false;
    	this.currentEditItem = null;
    	this.currentEditKey = null;
    }
    setSortType(type){
    	if(type == 'id'){
    		return;
    	}
    	this.sortBy = type;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LayoutController;


LayoutController.$inject = ['$timeout', '$http'];

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);