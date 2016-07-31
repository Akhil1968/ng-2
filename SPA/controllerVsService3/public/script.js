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

			.otherwise({redirectTo: '/'});
    });

    //defining a service using module.service. begin with creating an independent function
    function addService(){
    var xNum = 0;
	this.currNum = function(){return xNum},
	this.incrNum = function(){xNum++; return xNum;}
    }
	
	//service: add the function created to module.service
	rApp.service('addService', [addService]);
	
	//controller
	rApp.controller('addController', ['addService', function(addService) {
		this.incrementNum = function(){return addService.incrNum();};
		this.currentNum = function(){return addService.currNum();};
    }]);
	

	

	


