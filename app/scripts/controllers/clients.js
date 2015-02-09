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

    $scope.orderByField = 'id';
    $scope.currentPage = 1;
    $scope.itemPerPage = 10;

    var promise = Clientsservice.getClients();
    promise.then(function(payload) {
      $rootScope.clients = payload;
      $scope.totalItems = $rootScope.clients.length;
      $scope.numPage = Math.ceil($rootScope.clients.length / $scope.itemPerPage);

      $scope.$watch('[currentPage, itemPerPage]', function() {
        $scope.begin = ($scope.currentPage - 1) * $scope.itemPerPage;
        $scope.end = $scope.begin + $scope.itemPerPage;
        $scope.filteredClients = $rootScope.clients.slice($scope.begin, $scope.end);
      });
    });
    
    $scope.editClient = function(id) {
      $location.path('edit/'+id);
    };

    $scope.displayAllItems = function() {
        if (!$scope.searchKey) {
          $scope.itemPerPage = 10;
        } else {
          $scope.itemPerPage = $scope.totalItems;
        }
    };
  });
