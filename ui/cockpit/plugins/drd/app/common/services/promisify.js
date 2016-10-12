'use strict';

var angular = require('camunda-commons-ui/vendor/angular');
var includes = require('../../../../../../common/scripts/util/includes');
var getKeys = require('../../../../../../common/scripts/util/getKeys');

module.exports = [
  '$q',
  function($q) {
    return {
      promisifyFunction: promisifyFunction,
      promisifyObject: promisifyObject
    };

    function promisifyObject(obj, methods, onlyOwnProperties) {
      methods = angular.isArray(methods) ? methods : getKeys(obj, !onlyOwnProperties);
      methods = filterMethods(obj, methods);

      return getKeys(obj, !onlyOwnProperties)
        .reduce(function(newObj, key) {
          var value = obj[key];

          if (includes(methods, key)) {
            newObj[key] = promisifyFunction(value, obj);
          } else {
            newObj[key] = value;
          }

          return newObj;
        }, {});
    }

    function filterMethods(obj, methods) {
      return methods
        .filter(function(key) {
          return angular.isFunction(obj[key]);
        });
    }

    function promisifyFunction(func, thisArg) {
      return function() {
        var deferred = $q.defer();
        var args = Array.prototype.slice.call(arguments)
          .concat(callback);

        func.apply(thisArg, args);

        return deferred.promise;

        function callback(err, response) {
          if (err) {
            deferred.reject(err);
          }

          deferred.resolve(response);
        }
      };
    }
  }
];
