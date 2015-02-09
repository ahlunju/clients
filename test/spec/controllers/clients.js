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

  it('should not attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings).toBe(undefined);
  });
});
