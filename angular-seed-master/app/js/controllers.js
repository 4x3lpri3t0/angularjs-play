'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('FinanceController', function($scope) {
  	$scope.salary = 0;
  	$scope.percentage = 0;
  	$scope.result = function () {
  		return $scope.salary * $scope.percentage * 0.01;
  	}})
  .controller('GreetingController', function($scope){
    this.now = new Date();
    this.helloMessages = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'Hallo'];
    this.greeting = this.helloMessages[0];
    this.getRandomHelloMessage = function () {
    	var randomMsgIndex = parseInt((Math.random() * this.helloMessages.length));
    	this.greeting = this.helloMessages[randomMsgIndex];
    }})
  .controller('SiteController', 
    function($scope){
      $scope.publisher = 'SitePoint';
	  $scope.type = 'Web Development';
	  $scope.name = 'Scope for SiteController';
	})
  .controller('BookController',
    function($scope){
      $scope.books = ['Jump Start HTML5', 'Jump Start CSS', 'Jump Start Responsive Web Design'];
      $scope.name = 'Scope for BookController';
});