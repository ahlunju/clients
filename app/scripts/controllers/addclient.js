'use strict';

/**
 * @ngdoc function
 * @name clientsApp.controller:AddclientCtrl
 * @description
 * # AddclientCtrl
 * Controller of the clientsApp
 */
angular.module('clientsApp')
  .controller('AddclientCtrl', function ($scope, $rootScope, $location) {
    $scope.name = '';
    $scope.description = '';
    $scope.isDefault = false;
    $scope.type = 'IA';
    $scope.save = function() {
        console.log('saved');
        $rootScope.clients.push({
            id : $rootScope.clients.length + 1,
            name : $scope.name,
            description : $scope.description,
            isDefault : $scope.isDefault,
            type : $scope.type
        });
        console.log($rootScope.clients);
        $location.path('#/');
    };
  });
