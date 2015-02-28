angular.module('rtfmApp').service('threadService', function ThreadService(EnvironmentService, $firebase) {
  var firebaseUrl = EnvironmentService.getEnv().firebase;

  return {

    getThreads: function () {
      return $firebase(new Firebase(firebaseUrl + '/threads'));
    },


    getThread: function (threadId) {
      return $firebase(new Firebase(firebaseUrl + '/threads/' + threadId));
    }

  }

});