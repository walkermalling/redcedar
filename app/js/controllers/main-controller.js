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
        console.log(id);
        $rootScope.focus = id;
      };

      $scope.hasFocus = function(id){

        return $rootScope.focus === id;
      };

    }
  ]);
};