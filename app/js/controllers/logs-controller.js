'use strict';

module.exports = function(app) {
  app.controller('logsController', [ '$scope', '$rootScope','$location',
   function($scope, $rootScope, $location) {
      
      $rootScope.page = 'logs';
      $rootScope.focus = 'tutorial';

      if($location.search().focus){
        // if an external request has been made via get param
        $rootScope.focus = $location.search().focus;
      }

      Prism.highlightAll(); /* jshint ignore:line*/

      

    }
  ]);
};