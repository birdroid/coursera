(function (){
	'use strict';
	angular.module('LunchCheck', [])

	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope', '$filter'];
	function LunchCheckController($scope, $filter) {
		$scope.title = "";

		$scope.idk = function(){
			var tooMuchOrNot = tooMuchChecker($scope.title);
			$scope.howMuch = tooMuchOrNot;			
    		console.log(tooMuchOrNot);
			if (tooMuchOrNot >= 1 && tooMuchOrNot <= 3) {
				$scope.message = "Enjoy!"
			} else if (tooMuchOrNot > 3) {
				$scope.message = "Too much!"
			} else {
				$scope.message = "Please enter data first"
			}
			$scope.message += " (I do NOT consider empty item)"
		};

		function tooMuchChecker(string) {
			var someValue = 0;
			if (string !== "") {
				for (var i = 0; i < string.length; i++) {
	      			if (string[i] == ",") {
	      				someValue += 1;
	      			};	      			
	    		};
	    		return someValue + 1;
	    	};
		};

	};

})();