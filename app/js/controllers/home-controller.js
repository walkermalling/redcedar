'use strict';

module.exports = function(app) {
  app.controller('homeController', [ '$scope', '$rootScope', 
    function($scope, $rootScope) {
      
      $rootScope.page = 'home';
      

    }
  ]);
};