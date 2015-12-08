angular.module('BlogCtrl', []).controller('BlogCtrl', ['$scope', '$http', 'BlogService', function($scope, $http, BlogService) {
  $scope.title = "Blog"
  var blog = this;
  blog.tab = 'blog';

  blog.selectTab = function(setTab){
    blog.tab = setTab;
    console.log(blog.tab)
  };

  blog.isSelected = function(checkTab){
    return blog.tab === checkTab;
  };

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
