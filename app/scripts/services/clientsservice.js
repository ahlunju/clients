'use strict';

/**
 * @ngdoc service
 * @name clientsApp.Clientsservice
 * @description
 * # Clientsservice
 * Service in the clientsApp.
 */
angular.module('clientsApp')
  .service('Clientsservice', function ($q, $http, $rootScope, localStorageService, $location, $timeout) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getClients = function() {
        var deferred = $q.defer();

        if(localStorageService.get('clients')) {
            deferred.resolve(localStorageService.get('clients'));
            console.log('got clients from localstorage...');

        } else {
            $timeout(function() {
                $http.get('/data/clients.json').success( function(data, status, headers, config) {
                    deferred.resolve(data);
                    localStorageService.set('clients', data); //store data in local storage
                    console.log('got clients from json...');
                    return data;
                }).
                error(function(data, status, headers, config) {
                    console.error(status);
                    deferred.reject(status);
                });
            }, Math.random()*2000); //simulating delay
        }
        return deferred.promise;
    };

    this.get = function(id) {
        var deferred = $q.defer();
        $timeout(function() {
            var storage = localStorageService.get('clients');
            for (var i = 0 ; i < storage.length; i++) {
                if (storage[i].id === id) {
                    deferred.resolve(storage[i]);
                    break;
                }
            }
            console.log('got client id:', id);
        }, Math.random()*1000);
        return deferred.promise;
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
        var storage = localStorageService.get('clients');
        for (var i = 0; i< storage.length; i++) {
            if (storage[i].id === id ) {
                storage.splice(i, 1);
                this.set(storage);
                return;
            }
        }
    };
  });
