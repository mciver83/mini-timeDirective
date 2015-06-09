var app = angular.module('timeApp');

app.directive('showTime', function(){
	return {
		restrict: 'E',
		template: '<div> The current time is {{time | date: "medium"}}</div>',
		link: function(scope, elem, attrs){
			var currentTime = new Date();
			scope.time = currentTime;
		}
	}
})