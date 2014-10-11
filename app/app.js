'use strict';

require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');

var redcedar = angular.module('redcedar', [
  'ngRoute',
  'base64',
  'ngCookies'
]);

// Services

// Models

// Controllers
require('./js/controllers/main-controller')(redcedar);
require('./js/controllers/home-controller')(redcedar);
require('./js/controllers/logs-controller')(redcedar);
require('./js/controllers/portfolio-controller')(redcedar);
require('./js/controllers/etc-controller')(redcedar);

// Directives

// Routes

redcedar.config([ '$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home-view.html',
        controller: 'homeController'
      })
      .when('/logs', {
        templateUrl: 'views/logs-view.html',
        controller: 'logsController'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio-view.html',
        controller: 'portfolioController'
      })
      .when('/etc', {
        templateUrl: 'views/etc-view.html',
        controller: 'etcController'
      })
      .otherwise({
        redirectTo: '/'
      });

} ]);