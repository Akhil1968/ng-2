// script.js

    // create the module and name it akhilRouteApp
    // also include ngRoute for all our routing needs
    var rApp = angular.module('akhilRouteApp', ['ngRoute']);

    // configure our routes
    rApp.config(function($routeProvider) {
        $routeProvider
		
			// route for the home page
            .when('/', {
                templateUrl : 'pages/first.html',
                controller  : 'addController  as ctrl'
            })		

            // route for the first page
            .when('/second', {
                templateUrl : 'pages/second.html',
                controller  : 'addController  as ctrl'
            })

            // route for the second page
            .when('/first', {
                templateUrl : 'pages/first.html',
                controller  : 'addController as ctrl'
            })
			.otherwise({redirectTo: '/'});
    });

    // create the controller and inject Angular's $scope
    rApp.controller('mainController', function() {
        // create a message to display in our view
        this.message = 'Everyone come and see how good I look!';
    });
	
	//service
	rApp.factory('addService', [function(){
		var xNum = 0;
		return {
			currNum : function(){return xNum},
			incrNum : function(){xNum++; return xNum;}
		};
	}]);
	
	//controller
	rApp.controller('addController', ['addService', function(addService) {
		this.incrementNum = function(){return addService.incrNum();};
		this.currentNum = function(){return addService.currNum();};
    }]);
	

	

	


