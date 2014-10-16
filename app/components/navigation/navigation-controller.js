'use strict';

module.exports = function(app) {
  app.controller('navigationController',
    [ '$scope', '$location', function($scope, $location) {

      console.log('controller loaded');
      console.log('...' + $location + '...' + $scope);

    }
  ]);
};