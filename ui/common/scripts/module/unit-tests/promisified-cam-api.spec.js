'use strict';

var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;
var angular = require('camunda-commons-ui/vendor/angular');
var drdCommon = require('../index');
var createCamApiMock = require('../../../unit-tests/create-cam-api-mock');
require('angular-mocks');

var module = angular.mock.module;
var inject = angular.mock.inject;

describe('cam-common promisifiedCamApi service', function() {
  var $rootScope;
  var camAPI;
  var fakeResource;
  var promisifiedCamAPI;

  beforeEach(module(function($provide) {
    camAPI = createCamApiMock();
    fakeResource = camAPI.fakeResource;

    fakeResource.get.onCall(0).callsArgWith(0, null, 12);
    fakeResource.get.onCall(1).callsArgWith(0, 'error');

    $provide.value('camAPI', camAPI);
  }));

  beforeEach(module(drdCommon.name));

  beforeEach(inject(function(_$rootScope_, _promisifiedCamAPI_) {
    $rootScope = _$rootScope_;
    promisifiedCamAPI = _promisifiedCamAPI_;
  }));

  describe('resource', function() {
    var resource;

    beforeEach(function() {
      resource = promisifiedCamAPI.resource('whatever');
    });

    it('should call the resource method of camAPI', function() {
      expect(camAPI.resource.calledOnce).to.be.eql(true);
    });

    it('should promisify the fake resouce', function(done) {
      resource
        .get()
        .then(function(result) {
          expect(result).to.eql(12);

          return resource.get();
        })
        .catch(function(error) {
          expect(error).to.eql('error');

          done();
        });

      $rootScope.$digest();
    });
  });
});
