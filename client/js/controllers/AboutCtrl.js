angular.module('AboutCtrl', []).controller('AboutCtrl', ['$scope', function($scope) {
    $scope.title = "About - Colin Smith";
    $scope.descriptions = [
      {
        text: "I\'m a small town New Englander living in the big city \
        of Boston, Massachusetts. I currently work for Massachusetts \
        General Hospital in the Pediatric Neurosurgery Department as a \
        Laboratory Manager researching pediatric traumatic brain injury.\
        I'm involved with numerous projects involving mapping neurogenesis\
        pathways, tracking clinical patients with TBI, modeling abusive \
        head trauma, and observing neurological damage in the adolescent \
        brain. I\'m also involved with a FDA funded pediatric device \
        consortium as the site coordinator for MGH for Children."
      },{
        text: "Currently, I\'m looking to make a career shift from biological \
        work to more computational work involving web development and software \
        engineering. I\'m completely self-taught, utilizing the many facets of \
        the internet. I\'ve received guidance from a friend of mine who works \
        as a senior web application developer. I\'m quite passionate about this \
        change, and feel I have found my true calling. I enjoy problem solving, \
        deep strategy, mathematics and meticulous planning. It is truly amazing \
        how technology can be used to solve real world problems. I want to be a \
        part of that!"
      }
    ];
    $scope.experiences = [
      {
        skillSetTitle: 'Front-End',
        skillSets: [
                    'Javascript',
                    'HTML5',
                    'CSS3',
                    'Jquery',
                    'AngularJS',
                    'Twitter Bootstrap',
                    'SASS',
                    'Git',
                    'Require.js',
                    'Durandal.js',
                    'Node.js',
                    'Gulp/Grunt',
                    'Bower',
                    'npm',
                    'Yeoman',
                    'Unit Testing - Karma, Jasmine',
                    'End-To-End Testing - Protractor',
                    'Wordpress',
                    'Adobe Photoshop',
                    'Adobe Illustrator',
                    'Adobe Premiere Pro',
                    'Autodesk Maya'
                  ]
      },{
        skillSetTitle: 'Back-End',
        skillSets: [
                    'C#',
                    'Node.js',
                    'Express.js',
                    'MongoDB',
                    'Mongoose',
                    'NoSQL',
                    'RESTful API',
                    'PHP',
                    'MySQL',
                    'FTP',
                    'Redis',
                    'SSH'
                  ]
      },{
        skillSetTitle: 'Things to Learn',
        skillSets: [
                    'C++',
                    'Java/E2EE',
                    'Spring',
                    'Linux',
                    'Apache Web Services',
                    'Security/OAuth2',
                    'SOA/Microservices',
                    'Caching/NginX',
                    'DevOps',
                    'ES6',
                    'Typescript',
                    'Jade',
                    'React.js',
                    'Backbone.js',
                    'Docker',
                    'Browserify',
                    'Laravel',
                    'Drupal',
                    'Python',
                    'GoLang',
                    'Unity Engine',
                    'Video Game Development'
                  ]
      }
    ];

}]);
