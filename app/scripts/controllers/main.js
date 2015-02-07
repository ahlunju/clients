'use strict';

/**
 * @ngdoc function
 * @name clientsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientsApp
 */
angular.module('clientsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
