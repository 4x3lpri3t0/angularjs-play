'use strict';


// Declare app level module which depends on filters, and services
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.filters',
//   'myApp.services',
//   'myApp.directives',
//   'myApp.controllers'
// ]).
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
//   $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);


angular.module('myApp', [
  'myApp.controllers'
]);

// Callback passed to angular.module('myApp').run() gets called when all the modules are loaded
angular.module('myApp').run(function($rootScope){
	$rootScope.title = 'Famous Books';
	$rootScope.name = 'Root Scope';
})