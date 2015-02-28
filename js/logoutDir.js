/**
 * Created by danielbullock on 2/28/15.
 */
angular.module('rtfmApp').directive('logout', function(EnvironmentService){
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      elem.bind('click', function(){
        EnvironmentService.saveUsername('');
        scope.loggedin = false;
      })
    }
  }
})