// 'use strict'; //need to use localstorage...

describe('Service: Clientsservice', function () {

  // load the service's module
  beforeEach(module('clientsApp'));

  // instantiate service
  var Clientsservice, httpBackend, storage;
  beforeEach(inject(function (_Clientsservice_, $httpBackend, _localStorageService_) {
    Clientsservice = _Clientsservice_;
    httpBackend = $httpBackend;
    localStorageService = _localStorageService_;
    clients = [{
      'id': 1,
      'name': 'BK',
      'description': 'BNY Mellon',
      'type': 'TRADING',
      'isDefault': 'N'
      },
      {
      'id': 2,
      'name': 'TWX',
      'description': 'Time Warner',
      'type': 'TRADING',
      'isDefault': 'N'
    }];

  }));

  afterEach(function() {
    localStorageService.clearAll();
    storage = null;
  });

  it('should do something', function () {
    expect(!!Clientsservice).toBe(true);
  });

  it('should get from local storage', function() {
    localStorageService.set('test-ls', clients);
    expect(localStorageService.get('test-ls')).toBeDefined();
  });

  it('should fetch an array of clients', function() {
    httpBackend.whenGET('/data/clients.json').respond({
      data: {
        clients : [{
          'id': 1,
          'name': 'BK',
          'description': 'BNY Mellon',
          'type': 'TRADING',
          'isDefault': 'N'
          },
          {
          'id': 2,
          'name': 'TWX',
          'description': 'Time Warner',
          'type': 'TRADING',
          'isDefault': 'N'
        }]
      }
    });

    Clientsservice.getClients().then(function(payload) {
      expect(payload.length).toEqual(2);
      expect(payload[0].id).toEqual(1);
      expect(payload[0].name).toEqual('BK');
      expect(payload[0].description).toEqual('BNY Mellon');
      expect(payload[0].type).toEqual('TRADING');
      expect(payload[0].isDefault).toEqual('N');
    });

  });


  it('should not have any clients upson starting up', function() {
    storage = localStorageService.get('test-ls');
    expect(storage).toBe(null);
  });

  it('should get a client by id from local storage', function () {
    storage = localStorageService.get('test-ls');
    Clientsservice.get(1).then(function(payload) {
      
    });
  });

  it('should save the clients to local storage after getting data from the API', function() {
    httpBackend.whenGET('/data/clients.json').respond({
      data: {
        clients : [{
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
        }]
      }
    });

    Clientsservice.getClients().then(function(payload) {
      // expect(payload).toBeDefined();
      // localStorageService.set('test-ls', payload);
      // storage = localStorageService.get('test-ls');
      // expect(localStorageService.get('test-ls')).toBe(null);
      // expect(storage.length).toEqual(1);
    });
  });

  it('should add a client to the array', function() {
    var newClient = {
      'id': 3,
      'name': 'ABC',
      'description': 'ABCDEF',
      'type': 'TRADING',
      'isDefault': 'N'
    };
    clients.push(newClient);
    localStorageService.set('clients', clients);
    expect(localStorageService.get('clients').length).toEqual(3);
    expect(localStorageService.get('clients')[2].name).toEqual('ABC');
  });

  it('should update a client by id', function() {
    var client = {
      id: 3,
      name: 'Burger King',
      description: 'Whoppers',
      type: 'IA',
      isDefault: 'Y'
    };

    Clientsservice.update(1, client);
  });

  it('should remove a client from local storage', function() {
    localStorageService.set('clients', clients);
    Clientsservice.delete(1);
    expect(localStorageService.get('clients').length).toEqual(1);
  });
});
