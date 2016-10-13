var angular = require('angular');
var camCommon = require('../../../../../../common/scripts/module');
var dashboardProcesses = require('./processes');
var dashboardDecisions = require('./decisions');
var dashboardDeployments = require('./deployments');
var dashboardReports = require('./reports');
var dashboardBatches = require('./batches');
var dashboardTasks = require('./tasks');
var decisionsCount = require('./services/decisions-count');

var ngModule = angular.module('cockpit.plugin.base.views.dashboard', [camCommon.name]);

ngModule.config(dashboardProcesses);
ngModule.config(dashboardDecisions);
ngModule.config(dashboardDeployments);
ngModule.config(dashboardReports);
ngModule.config(dashboardBatches);
ngModule.config(dashboardTasks);

ngModule.factory('decisionsCount', decisionsCount);

module.exports = ngModule;
