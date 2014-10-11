'use strict';

module.exports = function(app) {
  app.controller('portfolioController', [ '$scope', '$rootScope', 
    function($scope, $rootScope) {
      
      $rootScope.page = 'portfolio';
      
    }
  ]);
};