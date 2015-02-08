'use strict';

/**
 * @ngdoc service
 * @name clientsApp.Clientsservice
 * @description
 * # Clientsservice
 * Service in the clientsApp.
 */
angular.module('clientsApp')
  .service('Clientsservice', function ($q, $http, $rootScope, localStorageService, $location) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getClients = function() {
        var deferred = $q.defer();

        $http.get('/data/clients.json').success( function(data, status, headers, config) {
            deferred.resolve(data);
            return data;
        }).
        error(function(data, status, headers, config) {
            console.error(status);
            deferred.reject(status);
        });
        return deferred.promise;
    };

    this.get = function(id) {
        $rootScope.clients = $rootScope.clients || localStorageService.get('clients');
        if (!$rootScope.clients) {
            $location.path('#/');
        }
        for (var i = 0 ; i < $rootScope.clients.length; i++) {
            if ($rootScope.clients[i].id === id) {
                return $rootScope.clients[i];
            }
        }
    };

    this.set = function(arr) {
        localStorageService.set('clients', arr);
    };

    this.update = function(id, obj) {
        var client = this.get(id);
        client.description = obj.description;
        client.type = obj.type;
        client.isDefault = obj.isDefault;
        client.name = obj.name;
        this.set($rootScope.clients);
    };

    this.delete = function(id) {
        for (var i = 0; i< $rootScope.clients.length; i++) {
            if ($rootScope.clients[i].id === id ) {
                $rootScope.clients.splice(i, 1);
                this.set($rootScope.clients);
                return;
            }
        }
    };
  });
