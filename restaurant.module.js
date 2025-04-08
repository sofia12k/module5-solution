(function() {
  'use strict';

  angular.module('restaurant', ['public'])
    .config(config);

  config.$inject = ['$urlRouterProvider'];
  function config($urlRouterProvider) {
    // Redirect to public root if path doesn't exist
    $urlRouterProvider.otherwise('/');
  }
})();
