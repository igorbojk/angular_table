import LayoutController from './controllers/layout.controller';

let modules = []

let myApp = angular.module('myApp', modules)
	.controller('LayoutCtrl', LayoutController)
