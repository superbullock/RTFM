angular.module('rtfmApp')
  .controller('loginCtrl', function ($scope, EnvironmentService, $location) {

    $scope.env = EnvironmentService.getEnv()

    $scope.logMeIn = function (username) {
      EnvironmentService.saveUsername(username);
      $scope.myUsername = '';
      $location.path('/threads');
    }



  })