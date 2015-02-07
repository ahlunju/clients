'use strict';

/**
 * @ngdoc function
 * @name clientsApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the clientsApp
 */
angular.module('clientsApp')
  .controller('ClientsCtrl', function ($scope, Clientsservice) {
    var promise = Clientsservice.getClients();
    promise.then(function(payload) {
        $scope.clients = payload;
        console.log($scope.clients);
    }, function(error) {
        $log.error('something went wrong...');
    });
  });
