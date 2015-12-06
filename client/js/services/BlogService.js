angular.module('BlogService', []).factory('BlogService', ['$http', function($http) {

    return {
        // Call to GET Blog API
        get : function() {
            return $http.get('/api/blog');
        },

        // Call to POST new data using Blog API
        create : function(blogData) {
            return $http.post('/api/blog', $scope.formData);
        },

        // Call to PUT to update data using Blog API
        create : function(blogData) {
            return $http.put('/api/blog', $scope.formData);
        },

        // Call to DELETE data using Blog API
        delete : function(id) {
            return $http.delete('/api/blog/' + id);
        }
    }

}]);
