'use strict';

/**
 * @ngdoc function
 * @name clientsApp.controller:EditclientCtrl
 * @description
 * # EditclientCtrl
 * Controller of the clientsApp
 */
angular.module('clientsApp')
  .controller('EditclientCtrl', function ($scope, $location, Clientsservice, $routeParams, $rootScope) {
    $scope.clientId = parseInt($routeParams.clientId, 10);
    $scope.client = Clientsservice.get($scope.clientId);
    $scope.types = [{
        value : 'TRADING'
    }, {
        value : 'IA'
    }];
    $scope.isDefault = $scope.client.isDefault === 'Y' ? true : false;

    for (var i = 0; i < $scope.types.length; i++) {
      if ($scope.types[i].value === $scope.client.type) {
        $scope.selectedType = $scope.types[i];
      }
    }

    $scope.update = function() {
      console.log('updated id: ', $scope.client.id, $scope.client.name);
      $scope.client.type = $scope.selectedType.value;
      $scope.isDefault = $scope.isDefault ? 'Y' : 'N';
      Clientsservice.update($scope.clientId, $scope.client);
      $location.path('#/');
    };

    $scope.delete = function() {
      console.log('deleted id: ', $scope.client.id, $scope.client.name);
      Clientsservice.delete($scope.clientId);
      $location.path('#/');
    };
  });
