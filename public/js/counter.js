var myModule = angular.module("counterapp", []);

function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}


myModule.controller("counterCtrl",['$scope','$timeout', function($scope,$timeout){
    $scope.seconds = 0;
    $scope.hours = 0;
    $scope.minutes = 0;
    $scope.tDur = 0;
    //Format time 
    while ($scope.seconds >= 3600) { 
	$scope.seconds = $scope.seconds - 3600;
	$scope.hours++;
    }

    while ($scope.seconds >= 60) { 
	$scope.seconds = $scope.seconds - 60;
	$scope.minutes++;
    }
    
    
    var stopped;
   
    // These are the functions used when clicking the corresponding
    // buttons displayed on each job


    $scope.start = function() {
	$scope.isDisabled = true;
	$scope.savesession('Session');
	stopped = $timeout(function() {
	    $scope.seconds++;
	    $scope.tDur++;
	    if ($scope.seconds == 60) { $scope.minutes++; $scope.seconds = 0; }
	    if ($scope.minutes == 60) { $scope.hours++; $scope.minutes = 0; }
	    if ($scope.tDur%5 == 0){
		$scope.session.duration = $scope.tDur;
		$scope.savesession('Session');
	    }
	    $scope.start();
	}, 1000);  //1000ms = 1 second
    };
    
	
    $scope.stop = function(){
	//Stops the current timer
	$timeout.cancel(stopped);
	$scope.isDisabled = false;
	$scope.intervalstop();
	$scope.savesession('Session');
	//Add a new start interval
	$scope.session.intervals.push({'start': Date.now(),'stop': 'false'});
    } 

    $scope.reset = function(){
	$scope.isDisabled = false;
	$scope.clearsession();
	$timeout.cancel(stopped);
	$scope.cleartime();
    }

    $scope.log = function(){
	$timeout.cancel(stopped);
	$scope.isDisabled = false;
	$scope.intervalstop();
	$scope.savesession('Session');
	$scope.savesession('Archive');
    }
    


    // These functions are used internally to create more readable,
    // aswell as modular code.


    $scope.savesession = function(name){
	localStorage.setItem(name + '_' + $scope.job.id, JSON.stringify($scope.session));
    }
    
    $scope.intervalstop = function(){
	$scope.session.intervals[$scope.session.intervals.length - 1].stop = Date.now();
    }

    $scope.clearsession = function(){
	$scope.session =
	    { 'start' : Date.now(),
	      'intervals': [
		    {'start': Date.now(),
		     'stop' : 'false'}
	    ],
	    'duration': 0
	    }
    }


    $scope.cleartime = function(){
	$scope.seconds = 0;
	$scope.minutes = 0;
	$scope.hours = 0;
	$scope.tDur = 0;
    }

}]);
function JobsListCtrl ($scope) {

localStorage.clear();

    $scope.session =
	{ 'start' : Date.now(),
	'intervals': [
	    {'start': Date.now(),
	    'stop' : 'false'}
	],
	'duration': 0
	}
	//Store in local storage with job-id


    //Check Local Storage
    var storedJobs = localStorage.getItem('jobs');
    if (storedJobs == (null)) {
	//No local storage load test data
	$scope.jobs = [
	    { 'id' : '2X0XAA', 'name' : 'Working on the MOM app' },
	    { 'id' : 'AH49SJ', 'name' : 'Creating logo'},
	    { 'id' : 'D3FKF4', 'name' : 'Eating Lunch'}
	];
	// If person clicks Start, jobs loads to active session
    }
    else{
	// load stored jobs
        $scope.jobs = JSON.parse(storedJobs);
    }
}
