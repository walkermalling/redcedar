'use strict';

/**
 * Handle log-in and the creation of new accounts
 */

module.exports = function(app) {
  app.controller('mainController', [ '$scope', '$location', function($scope, $location) {

      $scope.page = 'home';
      $scope.message = 'main controller message';

      $scope.isActive = function(route) {
        return route === $location.path();
      };

      $scope.$watch('page', function(){
        console.log('change to ' + $scope.page);
      });
      
      

    }
  ]);
};