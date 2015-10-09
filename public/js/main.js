var app = angular.module('myApp', []);
app.controller('mainController', ['$scope', function($scope) {
	$scope.about = false;
	$scope.contact = false;
	$scope.portfolio = false;

	$scope.toggle = function(pane) {
		if (pane === 'about') {
			$scope.about = !$scope.about;
			$scope.contact = false;
			$scope.portfolio = false;
		} 
		else if (pane === 'contact') {
			$scope.contact = !$scope.contact;
			$scope.about = false;
			$scope.portfolio = false;
		} 
		else {
			$scope.portfolio = !$scope.portfolio;
			$scope.about = false;
			$scope.contact = false;
		}
	};


}])