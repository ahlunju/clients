'use strict';

/**
 * @ngdoc function
 * @name clientsApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the clientsApp
 */
angular.module('clientsApp')
  .controller('ClientsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
