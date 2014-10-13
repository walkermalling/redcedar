'use strict';

module.exports = function(app) {
  app.controller('logsController', [ '$scope', '$rootScope', function($scope, $rootScope) {
      
      $rootScope.page = 'logs';

      Prism.highlightAll(); /* jshint ignore:line*/

    }
  ]);
};