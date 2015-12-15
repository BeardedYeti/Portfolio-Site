angular.module('CarouselCtrl', [])
.controller('CarouselCtrl', ['$scope', function($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 1200 + slides.length + 1;
    slides.push({
      image: 'img/carousel/' + newWidth + '/300.jpg',
      text: [
        'Welcome. Thanks for visiting!',
        'Check out my work on Github.',
        'Read about my research.',
        'Check out my youtube channel.'
      ][slides.length % 4],
      href: [
        'https://github.com/BeardedYeti/Portfolio-Site',
        'https://github.com/BeardedYeti',
        'http://www.ncbi.nlm.nih.gov/pubmed/25678047',
        'https://www.youtube.com/user/beardedyetigaming'
      ][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
}]);
