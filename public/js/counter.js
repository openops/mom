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
     $scope.jobs = [
	  { "name": "job1",
	    "duration": 10},
	  { "name": "job2",
	    "duration": 20},
	  { "name": "job3",
	    "duration": 30}
	  ];
}
