'use strict';

describe('Controller: AddclientCtrl', function () {

  // load the controller's module
  beforeEach(module('clientsApp'));

  var AddclientCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddclientCtrl = $controller('AddclientCtrl', {
      $scope: scope
    });
  }));

  it('should have some default scope variables for binding the form', function() {
    expect(scope.client.name).toEqual('');
    expect(scope.client.description).toEqual('');
    expect(scope.isDefault).toEqual(false);
  });

  it('should have default dropdown value for client type', function() {
    expect(scope.types).toBeDefined();
    expect(scope.types[0].value).toEqual('TRADING');
    expect(scope.types[1].value).toEqual('IA');
  });

  it('should have type default to first option', function() {
    expect(scope.selectedType).toBe(scope.types[0]);
  });

  describe('save functionality', function() {
    it('should be defined', function() {
      expect(scope.save).toBeDefined();
    });

    it('should redirect back to main route after save', function() {
      inject(function($route) {
        scope.clients = [{
          'id': 3,
          'name': 'BKX',
          'description': 'BK Mellon',
          'type': 'TRADING',
          'isDefault': 'N'
          },
          {
          'id': 4,
          'name': 'TWXX',
          'description': 'Timex Warner',
          'type': 'TRADING',
          'isDefault': 'N'
        }];
        scope.save();
        // expect($route.routes['/'].controller).toBe('ClientsCtrl');
        // expect($route.routes['/'].templateUrl).toBe('views/clients.html');
      });

    })
  });

});
