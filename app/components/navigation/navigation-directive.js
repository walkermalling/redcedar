'use strict';

module.exports = function(app) {
  app.directive('navigation', function() {
    return {
      restrict: 'E',
      templateUrl: 'components/navigation/navigation-template.html',
      controller: 'navigationController'
    };
  });
};