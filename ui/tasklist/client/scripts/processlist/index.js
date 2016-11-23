'use strict';

var angular = require('camunda-commons-ui/vendor/angular'),

  /* controller */
    camProcessesListCtrl = require('./controller/cam-tasklist-processesList-ctrl');

var ngModule = angular.module('cam.tasklist.processesList', [
  'ui.bootstrap'
]);

  /* controller */
ngModule.controller('camProcessesListCtrl', camProcessesListCtrl);

module.exports = ngModule;
