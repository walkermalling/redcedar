'use strict';

module.exports = function(app) {
  app.controller('etcController', [ '$scope', '$rootScope', 
    function($scope, $rootScope) {
      
      $rootScope.page = 'etc';
      
    }
  ]);
};