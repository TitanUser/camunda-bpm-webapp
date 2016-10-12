'use strict';

var angular = require('camunda-commons-ui/vendor/angular');
var common = require('./common');

module.exports = angular.module('cockpit.plugin.drd', [
  common.name
]).name;
