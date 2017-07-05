var app = angular.module('listPeople', []);
app.controller('peopleController', function($scope, $http){
  $http.get('http://localhost:8090/rest/people').then(
    function(response) { $scope.people = response.data; }, function(err) { console.log(err); }
  );
});
