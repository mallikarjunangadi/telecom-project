angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		})
		
		.when('/login', {
			templateUrl: 'views/login.html'	
		})

		.when('/mdealer', {
			templateUrl: 'views/masterDealer.html',
			controller: 'mDealerMainCtrl'	
		})

		.when('/dealer', {
			templateUrl: 'views/dealer.html',
			controller: 'dealerMainCtrl'	
		})

		.when('/retailer', {
			templateUrl: 'views/retailer.html',
			controller: 'retailerMainCtrl'		
		})
		
	$locationProvider.html5Mode(true);

}]);