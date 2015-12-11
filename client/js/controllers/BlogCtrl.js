angular.module('BlogCtrl', []).controller('BlogCtrl', ['$scope', '$http', 'BlogService', function($scope, $http, BlogService) {
  var blog = this;

  //Get all Blog Posts
  blog.posts = {};
  BlogService.get()
  .success(function(data) {
    blog.posts = data;
  })
  .error(function(data) {
    console.log('Error: ' + data);
  });

  blog.tab = 'blog';

  blog.selectTab = function(setTab){
    blog.tab = setTab;
    console.log(blog.tab)
  };

  blog.isSelected = function(checkTab){
    return blog.tab === checkTab;
  };

  blog.formData = {};

//When Submitting the add form, send the text to the node API
  blog.createBlog = function() {
    BlogService.create()
    .success(function(data) {
      blog.formData = {};
      blog.posts = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };

//Delete a Blog Post
  blog.deleteBlog = function(id) {
    BlogService.delete()
    .success(function(data) {
      blog.posts = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };


}]);
