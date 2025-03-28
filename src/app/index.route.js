(function() {
  'use strict';

  angular
    .module('pruebaangularjs')
    .config(routeConfig);

  function routeConfig($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/home', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/add', {
        templateUrl: 'app/add/add.html',
        controller: 'AddController',
        controllerAs: 'add'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

  }

})();
