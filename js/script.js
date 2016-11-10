// define our application and pull in ngRoute and ngAnimate
var app=angular.module('myApp',['ngRoute', 'ngAnimate']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
app.config(function($routeProvider){

	$routeProvider
		.when('/',{
		templateUrl: 'landing.html',
		controller: 'landingController'
	})
		.when('/landing',{
		templateUrl: 'landing.html',
		controller: 'landingController'
	})
    .when('/about-me',{
    templateUrl: 'about-me.html',
    controller: 'aboutmeController'
  })
    .when('/creative',{
    templateUrl: 'creative.html',
    controller: 'creativeController'
  })
		.when('/experience',{
		templateUrl: 'experience.html',
		controller: 'experienceController'
	})
    .when('/contact',{
    templateUrl: 'contact.html',
    controller: 'contactController'
  });

});

// CONTROLLERS ============================================
// home page controller
app.controller('landingController', function($scope) {
    $scope.pageClass = 'page-landing';
});

// about-me page controller
app.controller('aboutmeController', function($scope) {
    $scope.pageClass = 'page-aboutme';
});

// creative page controller
app.controller('creativeController', function($scope) {
    $scope.pageClass = 'page-creative';
});

// experience page controller
app.controller('experienceController', function($scope) {
    $scope.pageClass = 'page-experience';
});

// contact page controller
app.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});