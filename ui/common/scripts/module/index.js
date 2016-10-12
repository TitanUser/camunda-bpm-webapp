'use strict';

var angular = require('camunda-commons-ui/vendor/angular');
var promisify = require('./services/promisify');
var promisifiedCamAPI = require('./services/promisified-cam-api');

var ngModule = angular.module('cam-common', []);

ngModule.factory('promisify', promisify);
ngModule.factory('promisifiedCamAPI', promisifiedCamAPI);

module.exports = ngModule;




