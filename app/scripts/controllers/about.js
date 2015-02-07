'use strict';

/**
 * @ngdoc function
 * @name clientsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientsApp
 */
angular.module('clientsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
