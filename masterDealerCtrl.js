angular.module('masterDealerCtrl', [])

.controller('GeekController', function($scope) {

	$scope.tagline = 'The square root of life is pi!';	

})

.controller('mDealerMainCtrl', function($scope) {
	console.log('entered mDealerMainCtrl');

    $scope.selTempleteUrl = "views/listOfDealerMd.html";
   
	$scope.navClick = function(url) {
	   console.log('navClick func entered..');
	   url = "views/"+url+".html";
	   $scope.selTempleteUrl = url;
	}
	// $scope.navClick('listOfDealer');
	
});