angular.module('dealerCtrl', [])

.controller('dealerMainCtrl', function($scope) {
	console.log('entered dealerMainCtrl');

    $scope.selTempleteUrl = "views/listOfRetailerD.html";
   
	$scope.navClick = function(url) {
	   console.log('navClick func entered..');
	   url = "views/"+url+".html";
	   $scope.selTempleteUrl = url;
	}
	// $scope.navClick('listOfDealer');
	
});