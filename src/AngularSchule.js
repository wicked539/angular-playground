var tobsch = { name: 'tobsch', firstName: 'foo' };
var ctrlScope;

var angularSchule = angular.module('AngularSchule', []);

var myScope = {};

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
			name: myScope.myInput
		});
	};

	$scope.removeItem = function(index) {
		$scope.list.splice(index, 1);
	};

	ctrlScope = $scope;

	[].forEach.call(document.querySelectorAll("[refs]"), function(el) {

		var modelName = el.getAttribute("refs");

		var inputElement = document.getElementById(modelName);

		if (!myScope.hasOwnProperty(modelName)) {
			myScope[modelName] = {};
			Object.defineProperty(myScope, modelName, 
				{ 
					set: function(value) {  
						el.innerHTML = value;
						inputElement.value = value;
					},
					get: function() {
						return el.innerHTML;
					}
				}
			)
		}

		inputElement.addEventListener('input', function(event) {
			myScope[modelName] = event.target.value;
		})
	});

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