angular.module('appRoutes', ['ui.router'])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider

        // Home Page
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'MainCtrl'
        })

        // Bearded Yeti Page (Placeholder)
        .state('yeti', {
            url: '/yeti',
            templateUrl: 'views/yeti.html',
            controller: 'YetiCtrl'
        })
      }])
