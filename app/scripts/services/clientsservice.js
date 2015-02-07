'use strict';

/**
 * @ngdoc service
 * @name clientsApp.Clientsservice
 * @description
 * # Clientsservice
 * Service in the clientsApp.
 */
angular.module('clientsApp')
  .service('Clientsservice', function ($q, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getClients = function() {
        var deferred = $q.defer();
        $http.get('/data/clients.json').success( function(data, status, headers, config) {
            deferred.resolve(data);
            return data;
        }).
        error(function(data, status, headers, config) {
            $log.error(status);
            deferred.reject(status);
        });
        return deferred.promise;
    };

    this.addClient =  function() {

    };

    this.updateClient = function() {

    };
  });
