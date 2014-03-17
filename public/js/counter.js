var myModule = angular.module("counterapp", []);

myModule.controller("counterCtrl",['$scope','$timeout', function($scope,$timeout){
  
    //Adding initial value for counter
    
    $scope.counter = 0;
    var stopped;
    //timeout function is 1000ms = 1 second
    
    $scope.start = function() {
	stopped = $timeout(function() {
	console.log($scope.counter);
	$scope.counter++;   
	$scope.start();   
	}, 1000);
    };
    
	
    $scope.stop = function(){
    $timeout.cancel(stopped);
    } 

    $scope.reset = function(){
	$timeout.cancel(stopped);
	$scope.counter = 0;
    }

}]);

function JobsListCtrl ($scope) {
     $scope.jobs = localjobs;
}
    
//Check Local Storage
var retrievedObject = localStorage.getItem('jobs2');
if (retrievedObject == (null)) {
    //No local storage load test data
    localjobs = [
    { "name": "job1"},
    { "name": "job2"}
    ];
    alert('testjobs set(no local storage)');
}
else{
    localjobs = JSON.parse(retrievedObject);
    alert('loading local storage jobs');
}

