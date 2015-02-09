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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings).toBe(undefined);
  });
});
