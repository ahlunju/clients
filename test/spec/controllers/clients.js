'use strict';

describe('Controller: ClientsCtrl', function () {

  // load the controller's module
  beforeEach(function() {
    module('clientsApp');
  });

  var ClientsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientsCtrl = $controller('ClientsCtrl', {
      $scope: scope
    });
  }));

  it('should have some default settings', function() {
    expect(scope.orderByField).toBe('id');
    expect(scope.currentPage).toEqual(1);
    expect(scope.itemPerPage).toEqual(10);
  });

  it('should fetch clients', function() {
    //
  });

  it('should be able to route to edit client', function() {
    inject(function($route) {
      expect(scope.editClient).toBeDefined();
      scope.editClient();
      expect($route.routes['/edit/:clientId'].controller).toBe('EditclientCtrl');
      expect($route.routes['/edit/:clientId'].templateUrl).toEqual('views/editclient.html');
    });
  });

  describe('display all items', function() {
    it('should be defined', function() {
      expect(scope.displayAllItems).toBeDefined();
    });

    it('should display all items when user start searching', function() {
      scope.searchKey = 'Hello';
      scope.totalItems = 100;
      scope.displayAllItems();
      expect(scope.itemPerPage).toEqual(100);
    });

    it('should default to the default number per page when', function() {
      scope.searchKey = '';
      scope.displayAllItems();
      expect(scope.itemPerPage).toEqual(10);
    });
  });



});
