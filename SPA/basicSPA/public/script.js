// script.js

    // create the module and name it akhilRouteApp
    // also include ngRoute for all our routing needs
    var rApp = angular.module('akhilRouteApp', ['ngRoute']);

    // configure our routes
    rApp.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })
			
			// route for the home page
            .when('/home', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })		

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    rApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    rApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am on about page.';
    });

    rApp.controller('contactController', function($scope) {
        $scope.message = 'If you are impressed enough, Contact me!';
    });

