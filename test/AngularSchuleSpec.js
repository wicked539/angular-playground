describe('AngularSchule', function() {
	beforeEach(function() {
		module('AngularSchule');	
	});

	describe('controller', function() {
	  	var $controller;

	  	beforeEach(inject(function(_$controller_){
	    	// The injector unwraps the underscores (_) from around the parameter names when matching
	    	$controller = _$controller_;
	  	}));

	  	it('does stuff', function() {
  			var scope = {};

  			var sut = $controller('schuleCtrl', { $scope: scope });

  			expect(scope.schuleInput).toEqual('input');
	  	});
	});
});