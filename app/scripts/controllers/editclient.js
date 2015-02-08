'use strict';

/**
 * @ngdoc function
 * @name clientsApp.controller:EditclientCtrl
 * @description
 * # EditclientCtrl
 * Controller of the clientsApp
 */
angular.module('clientsApp')
  .controller('EditclientCtrl', function ($scope, $location, Clientsservice, $routeParams) {
    $scope.clientId = parseInt($routeParams.clientId, 10);
    $scope.client = Clientsservice.get($scope.clientId);

    $scope.update = function() {
      console.log('updated ', $scope.client.name);
      Clientsservice.update($scope.clientId, $scope.client);
      $location.path('#/');
    };

    $scope.delete = function() {
      console.log('deleted ', $scope.client.name);
      Clientsservice.delete($scope.clientId);
      $location.path('#/');
    };
  });
