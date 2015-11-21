angular.module('MainCtrl', []).controller('MainCtrl', ['$scope', function($scope) {
    $scope.title = "Colin Smith - Interwebs Engineer";
    $scope.standardFace = "img/main/standard-face.gif"
    $scope.links = [
      {
        text: 'Imagine',
        url: 'http://www.space.com/'
      },{
        text: 'Design',
        url: 'http://www.awwwards.com/'
      },{
        text: 'Create',
        url: 'https://github.com/'
      },{
        text: 'Innovate',
        url: 'https://en.wikipedia.org/wiki/Nikola_Tesla'
      }
    ];

    $scope.imagineFace = 'img/main/imagine-face.gif'
    $scope.designFace = 'img/main/design-face.gif'
    $scope.createFace = 'img/main/create-face.gif'
    $scope.innovateFace = 'img/main/innovate-face.gif'

}]);
