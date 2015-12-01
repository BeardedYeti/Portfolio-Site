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
        // About Page
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        // Portfolio Page
        .state('portfolio-page', {
            url: '/portfolio',
            templateUrl: 'views/portfolio-page.html',
            controller: 'PortfolioCtrl'
        })
        // Blog Page
        .state('blog', {
            url: '/blog',
            templateUrl: 'views/blog.html',
            controller: 'BlogCtrl'
        })
        // Contact Page
        .state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html',
            controller: 'YetiCtrl'
        })
      }])
