angular.module('ContactCtrl', []).controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.bostonimage = "img/contact/boston.gif";
  $scope.colinemail = "cmsgoboston41@gmail.com";
  $scope.colinphone = "(603) 801-1325"

  $scope.submitEmail = function() {
    console.log("Test");

    $http.post('/api/email', $scope.email)
    .success(function(data, status) {
      console.log("Email Sent");
    }).error(function(data, status) {
      console.log("Error");
    })
  };
}]);
