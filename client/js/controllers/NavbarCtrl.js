angular.module('NavbarCtrl', [])
.controller('NavbarCtrl', function($state, $scope) {
  $scope.collapseMenu = function() {
		if ($(window).width() <= 768) {
			console.log('hiding');
		    $scope.navCollapsed = true;
  		}
  	}
  });
