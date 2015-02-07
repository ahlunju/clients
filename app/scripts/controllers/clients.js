'use strict';

/**
 * @ngdoc function
 * @name clientsApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the clientsApp
 */
angular.module('clientsApp')
  .controller('ClientsCtrl', function ($scope, $rootScope, $location, Clientsservice) {

    if (!$rootScope.clients) {
        var promise = Clientsservice.getClients();
        promise.then(function(payload) {
            $rootScope.clients = payload;
            console.log($scope.clients);
        }, function(error) {
            $log.error('something went wrong...');
        });
    }
    

    $scope.editClient = function(id) {
        $location.path('edit/'+id);
    }
  });
