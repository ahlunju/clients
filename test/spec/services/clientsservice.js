'use strict';

describe('Service: Clientsservice', function () {

  // load the service's module
  beforeEach(module('clientsApp'));

  // instantiate service
  var Clientsservice;
  beforeEach(inject(function (_Clientsservice_) {
    Clientsservice = _Clientsservice_;
  }));

  it('should do something', function () {
    expect(!!Clientsservice).toBe(true);
  });

});
