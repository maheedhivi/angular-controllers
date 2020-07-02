var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/post", {
        templateUrl : "templates/post.html"
    })
    .when("/view", {
        templateUrl : "templates/view.html"
    })

    
});

app.controller('myController',['$scope',function($scope){
    // alert ('hai');

    $scope.hello = function(){

        alert ($scope.name);
    };
}]);