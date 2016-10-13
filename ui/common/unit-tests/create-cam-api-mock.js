'use strict';

var sinon = require('sinon');

function createCamApiMock(resourceMethods) {
  resourceMethods = resourceMethods || ['create', 'list', 'count', 'update', 'delete', 'get'];

  var fakeResource = resourceMethods.reduce(function(fakeResource, method) {
    fakeResource[method] = sinon.stub();

    return fakeResource;
  }, {});

  var camAPI = {
    resource: sinon.stub(),
    fakeResource: fakeResource
  };

  camAPI.resource.returns(fakeResource);

  return camAPI;
}

module.exports = createCamApiMock;
