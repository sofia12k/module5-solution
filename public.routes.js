(function() {
  'use strict';

  angular.module('public')
    .config(routes);

  routes.$inject = ['$stateProvider'];
  function routes($stateProvider) {

    $stateProvider
      .state('public', {
        abstract: true,
        url: '/',
        templateUrl: 'src/public/public.html'
      })
      .state('public.signUp', {
        url: 'sign-up',
        templateUrl: 'src/public/sign-up/sign-up.html',
        controller: 'SignUpController as signUpCtrl'
      })
      .state('public.myInfo', {
        url: 'my-info',
        templateUrl: 'src/public/my-info/my-info.html',
        controller: 'MyInfoController as myInfoCtrl'
      });
  }
})();
