angular.module('BlogService', []).factory('BlogService', ['$http', function($http) {
    //var id = blog_id;
    return {
        // Call to GET Blog API
        get : function() {
            return $http.get('/api/blog');
        },

        // Call to POST new data using Blog API
        create : function(blogData) {
            return $http.post('/api/blog', $scope.formData);
        },
        // Call to POST Comments in Blog API
        createComment : function(comment) {
          return $http ({
            method: 'POST',
            url: '/api/blog/' + id + '/comments',
            header: { 'content-type' : 'application/x-www-form-urlencode' },
            data: $.param(commentData)
          });
        },
        // Call to PUT to update data using Blog API
        update : function(id) {
            return $http.put('/api/blog' + id);
        },

        // Call to DELETE data using Blog API
        delete : function(id) {
            return $http.delete('/api/blog/' + id);
        }
    }

}]);
