(function() {
  'use strict';

  angular.module('public')
    .service('userInfoService', userInfoService);

  function userInfoService() {
    var userInfo = {};

    this.saveUserInfo = function(user) {
      userInfo = user;
    };

    this.getUserInfo = function() {
      return userInfo;
    };
  }
})();
