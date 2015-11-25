angular.module('MainCtrl', []).controller('MainCtrl', ['$scope', function($scope) {
    $scope.title = "Colin Smith - Interwebs Engineer";
    $scope.tagline = "Forging the Future"
    $scope.standardLogo = "img/main/new-logo.gif"
    $scope.links = [
      {
        text: 'Imagination',
        url: 'http://www.harrypotter.bloomsbury.com/uk/'
      },{
        text: 'Creativity',
        url: 'http://www.merriam-webster.com/dictionary/unique'
      },{
        text: 'Exploration',
        url: 'http://www.space.com/'
      },{
        text: 'Willpower',
        url: 'http://www.patriots.com/'
      },{
        text: 'Innovation',
        url: 'https://en.wikipedia.org/wiki/Nikola_Tesla'
      }
    ];

}]);
