'use strict';

/**
 * @ngdoc overview
 * @name clientsApp
 * @description
 * # clientsApp
 *
 * Main module of the application.
 */
angular
  .module('clientsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl'
      // })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl'
      // })
      .when('/', {
        templateUrl: 'views/clients.html',
        controller: 'ClientsCtrl'
      })
      .when('/clients', {
        templateUrl: 'views/clients.html',
        controller: 'ClientsCtrl'
      })
      .when('/add', {
        templateUrl: 'views/addclient.html',
        controller: 'AddclientCtrl'
      })
      .when('/edit', {
        templateUrl: 'views/editclient.html',
        controller: 'EditclientCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
