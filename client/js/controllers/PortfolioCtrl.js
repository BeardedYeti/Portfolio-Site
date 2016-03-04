angular.module('PortfolioCtrl', []).controller('PortfolioCtrl', ['$scope', function($scope) {
  $scope.title = "Portfolio"
  $scope.images = [
              { "src": "img/logos/portfolio-logo.gif", "alt": "Portfolio", "title": "Portfolio Website Code", "caption": "MongoDB, Express, Node.Js, AngularJS, Twitter Bootstrap, SASS, Gulp, Protractor, Karma, Jasmine", "href": "https://github.com/BeardedYeti/Portfolio-Site" },
              { "src": "img/logos/neuro-logo.gif", "alt": "Pediatric TBI Paper", "title": "Pediatric TBI Paper", "caption": "Autodesk Maya, Adobe Photoshop, Adobe Illustrator", "href": "http://www.ncbi.nlm.nih.gov/pubmed/25678047" },
              { "src": "img/logos/ttt-logo.png", "alt": "Tic-Tac-Toe Game", "title": "Tic-Tac-Toe Game", "caption": "AngularJS, ES6/Babel, Jade, Twitter Bootstrap, SASS, MinMax Algorithm", "href": "http://codepen.io/BeardedYeti/pen/wMQZPy" },
              { "src": "img/logos/simon-logo.png", "alt": "Simon Game", "title": "Simon Game", "caption": "AngularJS, ES6/Babel, Jade, Twitter Bootstrap, SASS", "href": "http://codepen.io/BeardedYeti/pen/wMZYJe" },
              { "src": "img/logos/twitch-logo.png", "alt": "Twitch Status Application", "title": "Twitch Status Application", "caption": "AngularJS, ES6/Babel, RESTful API, Jade, Twitter Bootstrap, SASS", "href": "http://codepen.io/BeardedYeti/pen/mVGrjz" },
              { "src": "img/logos/clock-logo.png", "alt": "Pomodoro Clock Application", "title": "Pomodoro Clock Application", "caption": "AngularJS, ES6/Babel, Jade, Twitter Bootstrap, SASS", "href": "http://codepen.io/BeardedYeti/pen/obeqqj" },
              { "src": "img/logos/weather-logo.png", "alt": "Local Weather Application", "title": "Local Weather Application", "caption": "AngularJS, RESTful API, Jade, Twitter Bootstrap, SASS", "href": "http://codepen.io/BeardedYeti/pen/EPoWoq" },
              { "src": "img/logos/wiki-logo.png", "alt": "Wikipedia Viewer", "title": "Wikipedia Viewer", "caption": "AngularJS, RESTful API, Jade, Twitter Bootstrap, SASS", "href": "http://codepen.io/BeardedYeti/pen/MKXZYa" },
              { "src": "img/logos/news-logo.png", "alt": "FCC Camper News", "title": "FCC Camper News", "caption": "AngularJS, RESTful API, Jade, Twitter Bootstrap, SASS", "href": "http://codepen.io/BeardedYeti/pen/Qymzgd" },
              { "src": "img/logos/lfg-logo.gif", "alt": "Looking For a Group", "title": "Looking For a Group", "caption": "C#/.Net, DurandalJs, Knockout.Js, Require.Js, Twitter Bootstrap, Gulp, Karma, Jasmine, Phantom, OAUTH", "href": "https://github.com/BeardedYeti/LFG" },
              { "src": "img/logos/shd-logo.gif", "alt": "Superhero Database", "title": "Superhero Database", "caption": "C#/.Net, DurandalJs, Knockout.Js, Require.Js, Twitter Bootstrap", "href": "https://github.com/BeardedYeti/SuperHeroApp" },
              { "src": "img/logos/cnrfg-logo.gif", "alt": "Chuck Norris Random Fact Generator", "title": "Chuck Norris Random Fact Generator", "caption": "Jquery, RESTful API, Twitter Bootstrap, SASS, Adobe Photoshop", "href": "http://codepen.io/BeardedYeti/pen/yebyxb" },
              { "src": "img/logos/calculator-logo.gif", "alt": "Javascript Calculator", "title": "Javascript Calculator", "caption": "Jquery, Twitter Bootstrap, SASS", "href": "http://codepen.io/BeardedYeti/pen/mVwdvX" },
              { "src": "img/logos/JavaScript-logo.png", "alt": "Snippets", "title": "Javascript Snippets", "caption": "Javascript Algorithms", "href": "https://github.com/BeardedYeti/Algorithms" },
              { "src": "img/logos/beardedyeti-logo.jpg", "alt": "Bearded Yeti Gaming", "title": "Bearded Yeti Gaming", "caption": "Website-TBA, Adobe Premiere Pro", "href": "https://www.youtube.com/user/beardedyetigaming" },
          ];
}]);
