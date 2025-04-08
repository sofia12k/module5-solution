(function() {
  'use strict';

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$http', 'userInfoService'];
  function SignUpController($http, userInfoService) {
    var signUpCtrl = this;

    signUpCtrl.submitForm = function() {
      if (signUpCtrl.signUpForm.$valid) {
        var url = 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + signUpCtrl.favoriteDishCategory + '/menu_items/' + signUpCtrl.favoriteDishNumber + '.json';

        $http.get(url).then(function(response) {
          if (response.data) {
            signUpCtrl.user.favoriteDish = response.data;
            userInfoService.saveUserInfo(signUpCtrl.user);
            signUpCtrl.successMessage = "Your information has been saved!";
          } else {
            signUpCtrl.favoriteDishError = "No such menu number exists.";
          }
        });
      }
    };
  }
})();
