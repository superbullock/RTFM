angular.module("rtfmApp").controller("threadCtrl", function ($scope, threadRef) {
  var thread = threadRef.$asObject();

  thread.$bindTo($scope, "thread")


})