(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  function HomeController(Authentication, $state) {
    var vm = this;
    vm.isUser = Authentication.user;
    if (sessionStorage.prevState) {
      var prevState = sessionStorage.prevState;
      delete sessionStorage.prevState;
      $state.go(prevState);
    }
  }
}());
