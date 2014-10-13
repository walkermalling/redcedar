'use strict';

module.exports = function(app) {
  app.controller('mainController', [ '$scope', '$location', '$rootScope', 
    function($scope, $location, $rootScope) {

      $rootScope.page = 'home';
      $rootScope.focus = null;

      $scope.isActive = function(route) {
        return route === $location.path();
      };

      $scope.setFocus = function(id){
        $rootScope.focus = id;
        document.getElementById(id).scrollIntoView();
      };

    }
  ]);
};