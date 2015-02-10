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
    
    $scope.promise = Clientsservice.getClients();
    $scope.promise.then(function(payload) {
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

    $scope.clearLS = function() {
      Clientsservice.clearLocalStorage();
    };

    $scope.filteredKeyword = '';
    $scope.search = {
      'id': '',
      'name': '',
      'description': '',
      'type': '',
      'isDefault': '',
      '$': ''
    };
    $scope.advancedFilter = function() {
      var filter = $scope.searchKey.match(/[^:]*/i)[0];
      var filterKeyword = $scope.searchKey.match(/:(.*)/i);
      if(!filterKeyword) {
        $scope.search['$'] = $scope.searchKey;
      } else {
        $scope.search['$'] = '';
        switch(filter){
          case 'id':
            $scope.search.id = filterKeyword[1];
            break;
          case 'name':
            $scope.search.name = filterKeyword[1];
            break;
          case 'description':
            $scope.search.description = filterKeyword[1];
            break;
          case 'type':
            $scope.search.type = filterKeyword[1];
            break;
          case 'default':
            $scope.search['isDefault'] = filterKeyword[1];
            break;
          default:
            $scope.search['$'] = $scope.searchKey;
        }
      }
    }

    // inline table edit
    $scope.selectedClient = {
      id : undefined,
      name: '',
      description: '',
      type: undefined,
      isDefault : undefined,
    };

    $scope.types = [{
        value : 'TRADING'
    }, {
        value : 'IA'
    }];

    $scope.resetSelectedClient = function() {
      $scope.selectedClient = {
        id : undefined,
        name: '',
        description: '',
        type: undefined,
        isDefault : undefined,
      };
    };

    $scope.clientTemplate = function(model) {
      if($scope.selectedClient.id === model.id) {
        return 'edit-client';
      } else {
        return 'display-client';
      }
    };

    $scope.inlineEdit = function(model) {
      $scope.selectedClient = angular.copy(model);
      // mapping isDefault to checkbox
      $scope.selectedClient.isDefault = $scope.selectedClient.isDefault === 'Y' ? true : false;
    };

    $scope.inlineUpdate = function() {
      $scope.selectedClient.isDefault = $scope.selectedClient.isDefault ? 'Y' : 'N';
      for (var i = 0; i < $rootScope.clients.length; i++) {
          if ($rootScope.clients[i].id === $scope.selectedClient.id) {
              $rootScope.clients[i] = angular.copy($scope.selectedClient);
              break;
          }
      }

      // update the filteredClients also because the table is bind to it, not the $rootScope.clients
      $scope.filteredClients = $rootScope.clients.slice($scope.begin, $scope.end);
      $scope.resetSelectedClient();
      Clientsservice.set($rootScope.clients);
      
    };

    $scope.inlineDelete = function() {
      for (var i = 0; i< $rootScope.clients.length; i++) {
        if ($rootScope.clients[i].id === $scope.selectedClient.id ) {
          $rootScope.clients.splice(i, 1);
          break;
        }
      }
      // update the filteredClients also because the table is bind to it, not the $rootScope.clients
      $scope.filteredClients = $rootScope.clients.slice($scope.begin, $scope.end);
      Clientsservice.set($rootScope.clients);
      $scope.resetSelectedClient();
    };
  });
