angular.module('globalCtrl', [])

.controller('globalCtrl', function($scope, $rootScope) {

    $rootScope.showMainNavBar = true;
	$scope.tagline = 'Nothing beats a pocket protector!';

});