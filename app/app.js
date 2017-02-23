//Main App Angular.Module

'use strict';

angular.module('fortressWebApp',[
    'ngResource',
    'ngRoute',
    'ngAnimate',
    'duParallax',
    'homepageManager',
    'coreManager'
]).config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider){
    $locationProvider.hashPrefix('!');
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.template.html',
            controller:'homeController'

        })
        .otherwise({
            redirectTo:'/'
        });
}]);

