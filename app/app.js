import LayoutController from './controllers/layout.controller';
import servicesModule from './services/index';
import componentsModule from './components/index';


let modules = [
	servicesModule,
	componentsModule
]

let myApp = angular.module('myApp', modules)
	.controller('LayoutCtrl', LayoutController)
