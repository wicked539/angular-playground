var tobsch = { name: 'tobsch', firstName: 'foo' };
var ctrlScope;

var angularSchule = angular.module('AngularSchule', []);

angularSchule.controller('schuleCtrl', ['$scope', function($scope) {
	$scope.name = 'foobar';

	$scope.schuleInput = 'input';

	$scope.list = [
		{ name: 'angular', firstName: 'foo' },
		tobsch,
		{ name: 'lutz', firstName: 'bar' },
		{ name: 'arnold-franke-museum', firstName: 'foo' }
	];

	$scope.addItem = function() {
		$scope.list.push({
			firstName: 'foo',
			name: $scope.schuleInput
		});
	};

	$scope.removeItem = function(index) {
		$scope.list.splice(index, 1);
	};

	ctrlScope = $scope;
}]);

angularSchule.filter('nameFilter', function() {
	return function(input) {
		return input.firstName + ' ' + input.name;
	}
});

angularSchule.directive('tobsch', function() {
	return {
		restrict: 'A',
		templateUrl: 'templates/tobsch.html'
	}
})