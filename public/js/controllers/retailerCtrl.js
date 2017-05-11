angular.module('retailerCtrl', [])

.controller('MainController', function($scope) {
    console.log('entered mainCtrl');
	$scope.tagline = 'To the moon and back!';	

})

.controller('retailerMainCtrl', function($scope) {
	console.log('entered retailerMainCtrl');

    $scope.selTempleteUrl = "views/rechargeR.html";
   
	$scope.navClick = function(url) {
	   console.log('navClick func entered..');
	   url = "views/"+url+".html";
	   $scope.selTempleteUrl = url;
	}
	// $scope.navClick('listOfDealer');
	
});