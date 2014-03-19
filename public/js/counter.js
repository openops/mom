var myModule = angular.module("counterapp", []);

myModule.controller("counterCtrl",['$scope','$timeout', function($scope,$timeout){
    
    //Update counter to duration
    
    $scope.counter = $scope.job.dur;
    //Adding initial value for counter
    
    var stopped;
    //timeout function is 1000ms = 1 second
    
    $scope.start = function(dur) {
	$scope.isDisabled = true;
	stopped = $timeout(function() {
	$scope.counter++;   
	$scope.start();   
	}, 100);
    };
    
	
    $scope.stop = function(){
    $timeout.cancel(stopped);
    } 

    $scope.reset = function(){
	$scope.isDisabled = false;
	$timeout.cancel(stopped);
	$scope.counter = 0;
    }

}]);

function JobsListCtrl ($scope) {
    //Check Local Storage
    var retrievedObject = localStorage.getItem('jobs2');
    if (retrievedObject == (null)) {
	//No local storage load test data
	localjobs = [
	    { "name": "job1", 'dur': 10},
	    { "name": "job2", 'dur': 20}
	];
    }
    else{
    localjobs = JSON.parse(retrievedObject);
    }
	$scope.jobs = localjobs;
}
