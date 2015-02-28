'use strict';

angular.module("rtfmApp")
    .controller("threadsCtrl", function ($scope, threadsRef) {

      $scope.threads = threadsRef.$asArray();

      $scope.createThread = function (username, title) {
        $scope.threads.$add({
          username: username,
          title: title
        })
        $scope.newThreadTitle = '';
      }
    });