angular.module('BlogCtrl', []).controller('BlogCtrl', ['$scope', '$http', 'BlogService', function($scope, $http, BlogService) {
  $scope.formData = {};

//Get all Blog Posts
  BlogService.get()
  .success(function(data) {
    $scope.blog = data;
  })
  .error(function(data) {
    console.log('Error: ' + data);
  });

//When Submitting the add form, send the text to the node API
  $scope.createBlog = function() {
    BlogService.create()
    .success(function(data) {
      $scope.formData = {};
      $scope.blog = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };

//Delete a Blog Post
$scope.deleteBlog = function(id) {
  BlogService.delete()
  .success(function(data) {
    $scope.blog = data;
  })
  .error(function(data) {
    console.log('Error: ' + data);
  });
};

}]);
