'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);

angular.module('myApp.controllers', []).
  controller('FinanceController', function($scope) {
  	$scope.salary = 0;
  	$scope.percentage = 0;
  	$scope.result = function () {
  		return $scope.salary * $scope.percentage * 0.01;
  	};
  })
  .controller('GreetingController', function($scope){
    this.now = new Date();
    this.helloMessages = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'Hallo'];
    this.greeting = this.helloMessages[0];
    this.getRandomHelloMessage = function () {
    	var randomMsgIndex = parseInt((Math.random() * this.helloMessages.length));
    	this.greeting = this.helloMessages[randomMsgIndex];
    }

  });