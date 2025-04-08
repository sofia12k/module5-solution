(function() {
  'use strict';

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['userInfoService'];
  function MyInfoController(userInfoService) {
    var myInfoCtrl = this;

    myInfoCtrl.user = userInfoService.getUserInfo();
  }
})();
