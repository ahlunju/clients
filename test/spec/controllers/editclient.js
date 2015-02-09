'use strict';

describe('Controller: EditclientCtrl', function () {

  // load the controller's module
  beforeEach(function() {
    module('clientsApp');
    module('clientsApp.Services.Clientsservice');
  });

  var EditclientCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditclientCtrl = $controller('EditclientCtrl', {
      $scope: scope
    });

    $scope.clients = [{
        "id": 1,
        "name": "BK",
        "description": "BNY Mellon",
        "type": "TRADING",
        "isDefault": "N"
    },
    {
        "id": 2,
        "name": "TWX",
        "description": "Time Warner",
        "type": "TRADING",
        "isDefault": "N"
    }];
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings).toBe(undefined);
  });
});
