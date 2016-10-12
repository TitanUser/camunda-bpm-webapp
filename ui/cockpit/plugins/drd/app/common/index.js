'use strict';

var angular = require('camunda-commons-ui/vendor/angular');
var promisify = require('./services/promisify');

var ngModule = angular.module('cockpit.plugin.drd.common', []);

ngModule.factory('promisify', promisify);

module.exports = ngModule;




