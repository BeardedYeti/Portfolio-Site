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

  blog.incrementLikes = function(post) {
      post.likes += 1;
  };
  blog.incrementDislikes = function(post) {
      post.dislikes += 1;
  };


  blog.formData = {};
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
  /*
  blog.commentData = {};
  blog.commentsBlog = function() {
    BlogService.updateComments()
    .success(function(data) {
      blog.commentData = {};
      blog.posts = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };
  blog.deleteBlog = function(id) {
    BlogService.delete()
    .success(function(data) {
      blog.posts = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };*/

}])
.controller('CommentCtrl', function() {
  this.comment = {};
  this.addComment = function(post) {
    this.comment.createdOn = Date.now();
    post.comments.push(this.comment);
    this.comment = {};
  };

});
/*.controller('CommentCtrl', ['$http', 'BlogService', function($http, BlogService) {
  this.comment = {};

  this.addComment = function(post) {
    BlogService.createComment(this.comment)
      .success(function(data) {
        this.comment = {};
        this.comment.createdOn = Date.now();
        post.comments.push(this.comment);
        this.comment = {};
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };

}]);*/
