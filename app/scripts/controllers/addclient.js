'use strict';

/**
 * @ngdoc function
 * @name clientsApp.controller:AddclientCtrl
 * @description
 * # AddclientCtrl
 * Controller of the clientsApp
 */
angular.module('clientsApp')
  .controller('AddclientCtrl', function ($scope, $rootScope, $location, Clientsservice) {
    $scope.client = {
        name : '',
        description : ''
    }

    $scope.types = [{
        value : 'TRADING'
    }, {
        value : 'IA'
    }];

    $scope.isDefault = false;
    $scope.selectedType = $scope.types[0];

    $scope.save = function() {
        console.log('saved');
        $scope.client.id = $rootScope.clients.length + 1;
        $scope.client.isDefault = $scope.isDefault ? 'Y' : 'N';
        $scope.client.type = $scope.selectedType.value;
        $rootScope.clients.push($scope.client);
        Clientsservice.set($rootScope.clients);
        $location.path('#/');
    };
  });
