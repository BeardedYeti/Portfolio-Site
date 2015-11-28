angular.module('PortfolioCtrl', []).controller('PortfolioCtrl', ['$scope', function($scope) {
  $scope.title = "Portfolio"
  $scope.images = [
              { "src": "img/logos/portfolio-logo.gif", "alt": "Portfolio", "title": "Portfolio", "caption": "TEST" },
              { "src": "img/logos/lfg-logo.gif", "alt": "Looking For a Group", "title": "Looking For a Group", "caption": "TEST" },
              { "src": "img/logos/shd-logo.jpg", "alt": "Superhero Database", "title": "Superhero Database", "caption": "TEST" },
              { "src": "img/logos/neuro-logo.gif", "alt": "Pediatric TBI Paper", "title": "Pediatric TBI Paper", "caption": "TEST" },
              { "src": "img/logos/beardedyeti-logo.jpg", "alt": "Bearded Yeti Gaming", "title": "Bearded Yeti Gaming", "caption": "TEST" }
          ];
}]);
