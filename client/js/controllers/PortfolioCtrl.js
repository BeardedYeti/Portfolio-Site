angular.module('PortfolioCtrl', []).controller('PortfolioCtrl', ['$scope', function($scope) {
  $scope.title = "Portfolio"
  $scope.images = [
              { "src": "img/logos/portfolio-logo.gif", "alt": "Portfolio", "title": "Portfolio", "caption": "MongoDB, Express, Node.Js, AngularJS, Twitter Bootstrap, SASS, Gulp, Protractor, Karma, Jasmine", "href": "https://github.com/BeardedYeti/Portfolio-Site" },
              { "src": "img/logos/lfg-logo.gif", "alt": "Looking For a Group", "title": "Looking For a Group", "caption": "C#/.Net, DurandalJs, Knockout.Js, Require.Js, Twitter Bootstrap, Gulp, Karma, Jasmine, Phantom, OAUTH", "href": "https://github.com/BeardedYeti/LFG" },
              { "src": "img/logos/shd-logo.jpg", "alt": "Superhero Database", "title": "Superhero Database", "caption": "C#/.Net, DurandalJs, Knockout.Js, Require.Js, Twitter Bootstrap", "href": "https://github.com/BeardedYeti/SuperHeroApp" },
              { "src": "img/logos/neuro-logo.gif", "alt": "Pediatric TBI Paper", "title": "Pediatric TBI Paper", "caption": "Autodesk Maya, Adobe Photoshop, Adobe Illustrator", "href": "http://www.ncbi.nlm.nih.gov/pubmed/25678047" },
              { "src": "img/logos/beardedyeti-logo.jpg", "alt": "Bearded Yeti Gaming", "title": "Bearded Yeti Gaming", "caption": "Website-TBA, Adobe Premiere Pro", "href": "https://www.youtube.com/user/beardedyetigaming" },
              { "src": "img/logos/JavaScript-logo.png", "alt": "Snippets", "title": "Javascript Snippets", "caption": "Javascript Algorithms", "href": "https://github.com/BeardedYeti/Algorithms" }
          ];
}]);
