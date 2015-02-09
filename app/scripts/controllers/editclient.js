'use strict';

/**
 * @ngdoc function
 * @name clientsApp.controller:EditclientCtrl
 * @description
 * # EditclientCtrl
 * Controller of the clientsApp
 */
angular.module('clientsApp')
  .controller('EditclientCtrl', function ($rootScope, $scope, $location, Clientsservice, $routeParams) {

    $scope.clientId = parseInt($routeParams.clientId, 10);

    $scope.types = [{
        value : 'TRADING'
    }, {
        value : 'IA'
    }];

    if (!$rootScope.clients) { //if somehow user got to this page before the service is called...
      var promise = Clientsservice.get($scope.clientId);
      promise.then(function(payload) {
        $scope.client = payload;

        $scope.isDefault = $scope.client.isDefault === 'Y' ? true : false;

        for (var i = 0; i < $scope.types.length; i++) {
          if ($scope.types[i].value === $scope.client.type) {
            $scope.selectedType = $scope.types[i];
            break;
          }
        }
      });
    } else {
      for (var i = 0; i< $rootScope.clients.length; i++) {
        if ($rootScope.clients[i].id === $scope.clientId) {
          $scope.client = $rootScope.clients[i];
          $scope.isDefault = $scope.client.isDefault === 'Y' ? true : false;
          break;
        }
      }

      for (var i = 0; i < $scope.types.length; i++) {
        if ($scope.types[i].value === $scope.client.type) {
          $scope.selectedType = $scope.types[i];
          break;
        }
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
