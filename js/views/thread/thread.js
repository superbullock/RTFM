angular.module("rtfmApp").controller("threadCtrl", function ($scope, threadRef, commentsRef) {
  $scope.loggedin = true;
  var thread = threadRef.$asObject();
  $scope.comments = commentsRef.$asArray();

  thread.$bindTo($scope, "thread")

  $scope.createComment = function (username, text) {
    $scope.comments.$add({
      username: username,
      text: text
    });
    $scope.newCommentText = '';
  };


})