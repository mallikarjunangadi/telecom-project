angular.module('mainCtrl', [])

.controller('loginCtrl', function($scope, $location, $rootScope) {
	console.log('main ctrl');
    $scope.login = {};
	$scope.loginValidate = function(login) {
       console.log(login.uname);
	   console.log(login.pwd);

	   if(login.uname == "3004" && login.pwd == "88848") {
		  // $rootScope.showMainNavBar = false;
		   $location.path('/mdealer');
	   } else if(login.uname == "2005" && login.pwd == "88848") {
		 //   $rootScope.showMainNavBar = false;
           $location.path('/dealer');
	   } else if(login.uname == "100637" && login.pwd == "88848") {
		 //   $rootScope.showMainNavBar = false;
           $location.path('/retailer');
	   }
	}
})