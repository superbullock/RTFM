angular.module("rtfmApp")
  .service("EnvironmentService", function EnvironmentService($window) {
    return {
      getEnv: function () {
        return $window.env;
      },

      saveUsername: function (username) {
        $window.localStorage.setItem('username', username);
        debugger;
      },

      getUsername: function () {
        return $window.localStorage.getItem('username');
      }
    }
  })