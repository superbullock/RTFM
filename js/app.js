angular.module('rtfmApp', ['ngRoute', 'firebase'])
    .config(function ($routeProvider) {

      $routeProvider

          .when('/login', {
            templateUrl: "js/views/login/login.html",
            controller: "loginCtrl"

          })

          .when('/threads', {
            templateUrl: "js/views/threads/threads.html",
            controller: "threadsCtrl",
            resolve: {
              threadsRef: function (threadService, $rootScope) {
                $rootScope.loggedin = true;
                return threadService.getThreads();
              }
            }

          })

          .when('/threads/:threadId', {

            templateUrl: "js/views/thread/thread.html",
            controller: "threadCtrl",
            resolve: {

              threadRef: function (threadService, $route) {
                return threadService.getThread($route.current.params.threadId)
              },

              commentsRef: function (threadService, $route) {
                return threadService.getComments($route.current.params.threadId)
              }


            }

          })

          .otherwise('/login')
    })

    .run(function ($rootScope, $location, EnvironmentService) {
      $rootScope.$on('$routeChangeStart', function (event, next, current) {
        if (EnvironmentService.getUsername()) {
          $rootScope.username = EnvironmentService.getUsername();
        } else {
          $location.path('/login');
        }
      })
    })