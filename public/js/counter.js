var myModule = angular.module("counterapp", []);
angular.module('myApp', ['ngTouch']);
angular.module('myApp.services', ['ngTouch']).value('version', '0.1');

// Function to be used for adding padded 0s to the time
function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

// Simple function used to return the array index from the key value


function getArrayIndexForKey(arr, key, val){
    for(var i = 0; i < arr.length; i++){
	if(arr[i][key] == val)
	return i;
    }
    return -1;
}

myModule.controller("counterCtrl",['$scope','$timeout', function($scope,$timeout){

    $scope.jobCounter = function() {
	stopped = $timeout(function() { 
	    $scope.seconds++;
	    $scope.tDur++;
	    if ($scope.seconds == 60) { $scope.minutes++; $scope.seconds = 0; }
	    if ($scope.minutes == 60) { $scope.hours++; $scope.minutes = 0; }
	    if ($scope.tDur%5 == 0) $scope.savesession('Session');
	    $scope.jobCounter();
	}, 1000);  //1000ms = 1 second
    }
    // Initializing timer values
    $scope.tDur = 0;
    $scope.seconds = 0;
    $scope.hours = 0;
    $scope.minutes = 0;

    //Formatting the time -> needs to be function 
    while ($scope.seconds >= 3600) { 
	$scope.seconds = $scope.seconds - 3600;
	$scope.hours++;
    }

    while ($scope.seconds >= 60) { 
	$scope.seconds = $scope.seconds - 60;
	$scope.minutes++;
    }
    
    var stopped;
    var savetimer;

    $scope.session =
	{'intervals': [{start : '', stop: ''}],
	 'duration': 0 };

  
    // Check for stored sessions
    var storedSession = localStorage.getItem('Session_' + $scope.job.id);
    if (storedSession == (null)) {
	//No local storage load blank session for now
	$scope.session =
	    {'intervals': [{start : '', stop: ''}],
	     'duration': 0 };
	// If person clicks Start, jobs loads to active session
    }
    else{
	// load stored session
        $scope.session = JSON.parse(storedSession);
	$scope.tDur = $scope.session.duration;
	$scope.seconds = $scope.tDur;

	while ($scope.seconds >= 3600) { 
	    $scope.seconds = $scope.seconds - 3600;
	    $scope.hours++;
	}

	while ($scope.seconds >= 60) { 
	    $scope.seconds = $scope.seconds - 60;
	    $scope.minutes++;
	}
	if ($scope.session.intervals[$scope.session.intervals.length - 1].stop == 'false') {
	    $scope.ResumeDisabled = true;
	    $scope.StartDisabled = true;
	    $scope.jobCounter();
	}
    }
    // These are the functions used when clicking the corresponding
    // buttons displayed on each job

    $scope.start = function() {
	$scope.StartDisabled = true;
	$scope.ResumeDisabled = true;
	$scope.session.intervals[0].start = Date.now();
	$scope.session.intervals[0].stop = 'false';
	$scope.savesession('Session');
	$scope.jobCounter();
    };
    
    $scope.stop = function(){
	$scope.ResumeDisabled = false;
	//Stops the current timer
	$timeout.cancel(stopped);
	$scope.ResumeDisabled = false;
	$scope.intervalstop();
	$scope.savesession('Session');
	//Add a new start interval
    }

    $scope.resume = function(){
	$scope.ResumeDisabled = true;
	$scope.session.intervals.push({'start': Date.now(),'stop': 'false'});
	$scope.savesession('Session');
	$scope.jobCounter();
    }

    $scope.reset = function(){
	$scope.StartDisabled = false;
	$scope.ResumeDisabled = true;
	$scope.clearsession();
	$timeout.cancel(stopped);
	$scope.cleartime();
    }

    $scope.log = function(){
	$scope.intervalstop();
	$scope.savesession('Session');
	$scope.savesession('Archive');
	$scope.reset();
    }
    
    $scope.removejob = function(){
	$scope.clearsession();
	$timeout.cancel(stopped);
	$scope.cleartime();
	localStorage.removeItem('Session_' + $scope.job.id);
	var indextoremove = getArrayIndexForKey($scope.jobs, "id", $scope.job.id);
	$scope.jobs.splice(indextoremove, 1)
    }

    // These functions are used internally to create more readable,
    // aswell as modular code.


    $scope.savesession = function(name){
	$scope.session.duration = $scope.tDur;
	localStorage.setItem(name + '_' + $scope.job.id, JSON.stringify($scope.session));
    }
    
    $scope.intervalstop = function(){
	$scope.session.intervals[$scope.session.intervals.length - 1].stop = Date.now();
    }

    $scope.clearsession = function(){
	$scope.session =
	    {'intervals': [
		{'start': '',
		 'stop' : ''}
	    ],
	    'duration': 0
	    }
	localStorage.removeItem('Session_' + $scope.job.id);
    }


    $scope.cleartime = function(){
	$scope.seconds = 0;
	$scope.minutes = 0;
	$scope.hours = 0;
	$scope.tDur = 0;
    }
    

}]);


// The following is run when the the job list is first created

function JobsListCtrl ($scope, $timeout) {
    //Store in local storage with job-id
    //Check Local Storage
    var storedJobs = localStorage.getItem('jobs');
    if (storedJobs == (null)) {
	//No local storage load test data
	$scope.jobs = [
	    { 'id' : '2X0XAA', 'name' : 'Working on the MOM app' },
	    { 'id' : 'AH49SJ', 'name' : 'Creating logo'}
	];
	// If person clicks Start, jobs loads to active session
    }
    else{
	// load stored jobs
        $scope.jobs = JSON.parse(storedJobs);
    }
    
/*
    runCounter = function() {
	//GLOBAL TIMER TO SAVE ALL SESSIONS
	$timeout(runCounter, 5000);
    };

    runCounter();    
*/
}
