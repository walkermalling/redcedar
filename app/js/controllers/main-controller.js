'use strict';

module.exports = function(app) {
  app.controller('mainController', [ '$scope', '$location', '$rootScope', 
    function($scope, $location, $rootScope) {

      $rootScope.page = 'home';

      $scope.isActive = function(route) {
        return route === $location.path();
      };

    }
  ]);
};