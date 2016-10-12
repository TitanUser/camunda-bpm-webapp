'use strict';

var fs = require('fs');

var template = fs.readFileSync(__dirname + '/drd-tile.html', 'utf8');
var series = require('camunda-bpm-sdk-js').utils.series;

module.exports = [
  'ViewsProvider',
  function(
    ViewsProvider
  ) {
    ViewsProvider.registerDefaultView('cockpit.dashboard.section', {
      id: 'drd',
      label: 'Decision Requirements Definitions',
      template: template,
      pagePath: '#/drd',
      checkActive: function(path) {
        return path.indexOf('#/drd') > -1;
      },
      controller: [
        '$scope',
        'camAPI',
        'promisify',
        function(
          $scope,
          camAPI,
          promisify
        ) {

        }],

      priority: 30
    });
  }];
