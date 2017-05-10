angular.module('DBservice', [])

.factory('serviceDB', ['$http', function($http) {
   
  function toServer(doc2send, Url) {

    var deferred = $q.defer();  
    var req =              
    {  
      method: 'POST', 
      url: Url,
      data: jQuery.param(doc2send), 
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }   
          
     $http(req).
     success(function(data, status, headers, config) {
         deferred.resolve(data);
         console.log(status); 
     }).
     error(function(data, status, headers, config) { 
      console.log('error '+status);
      deferred.reject(data);
    });
  } 

  return {
      toServer : toServer
  } 
}]);