'use strict';

var fs = require('fs');

var template = fs.readFileSync(__dirname + '/decisions.html', 'utf8');

module.exports = [
  'ViewsProvider',
  function(
  ViewsProvider
) {
    ViewsProvider.registerDefaultView('cockpit.dashboard.section', {
      id: 'decisions',
      label: 'Decisions',
      template: template,
      pagePath: '#/decisions',
      checkActive: function(path) {
        return path.indexOf('#/decision') > -1;
      },
      controller: [
        '$scope',
        'decisionsCount',
        function(
          $scope,
          decisionsCount
        ) {
          $scope.count = 0;
          $scope.loadingState = 'LOADING';

          decisionsCount
            .getCount()
            .then(function(results) {
              $scope.loadingState = 'LOADED';
              $scope.count = results;
            })
            .catch(function(err) {
              $scope.loadingError = err.message;
              $scope.loadingState = 'ERROR';
              throw err;
            });
        }],

      priority: 80
    });
  }];
