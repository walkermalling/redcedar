'use strict';

/**
 * Handle log-in and the creation of new accounts
 */

module.exports = function(app) {
  app.controller('logsController', [ '$scope', function($scope) {
      
      $scope.message = 'blog controller message';

      Prism.highlightAll(); /* jshint ignore:line*/

    }
  ]);
};