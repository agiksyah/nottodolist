/**
* mainRoutes Module;
*
* Description
*/
var app = angular.module('mainRoutes', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider.when('/', {
		controller: 'mainController',
		templateUrl: '../views/main.php'
	}).when('/about', {
		templateUrl: '../views/home/about.html'
	}).when('/me', {
		templateUrl: '../views/home/me.html'
	}).otherwise({
		redirectTo: '/'
	});
});