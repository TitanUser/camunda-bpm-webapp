'use strict';

module.exports = [
  '$q', 'promisifiedCamAPI',
  function($q, camAPI) {
    var decisionDefinitionService = camAPI.resource('decision-definition');
    var historyService = camAPI.resource('history');
    var drdService  = camAPI.resource('drd');

    return {
      getCount: getCount
    };

    function getCount() {
      return $q
        .all({
          definitions: decisionDefinitionService.count({
            latestVersion: true
          }),
          instances: historyService
            .decisionInstanceCount({})
            .then(function(data) {
              return data.count;
            }),
          drds: drdService
            .count()
            .then(function(data) {
              return data.count;
            })
        });
    }
  }
];
