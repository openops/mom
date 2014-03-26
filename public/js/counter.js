var myModule = angular.module("counterapp", []);

function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

myModule.controller("counterCtrl",['$scope','$timeout', function($scope,$timeout){
    //Update counter to duration
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
    //timeout function is 1000ms = 1 second
    
    $scope.start = function() {
	$scope.isDisabled = true;
	stopped = $timeout(function() {
	    $scope.seconds++;
	    $scope.tDur++;
	    if ($scope.seconds == 60) { $scope.minutes++; $scope.seconds = 0; }
	    if ($scope.minutes == 60) { $scope.hours++; $scope.minutes = 0; }
	    if ($scope.tDur%5 == 0){
		$scope.session.duration = $scope.tDur;
		localStorage.setItem('Session_' + $scope.job.id, JSON.stringify($scope.session));
	    }
	    $scope.start();
	}, 1000);
    };
    
	
    $scope.stop = function(){
	//Stops the current timer
	$timeout.cancel(stopped);
	$scope.isDisabled = false;
	$scope.session.intervals[$scope.session.intervals.length - 1].stop = Date.now();
	localStorage.setItem('Session_' + $scope.job.id, JSON.stringify($scope.session));
	//Add a new start interval
	$scope.session.intervals.push({'start': Date.now(),'stop': 'false'});
    } 

    $scope.reset = function(){
	$scope.isDisabled = false;
	$scope.session =
	    { 'start' : Date.now(),
	      'intervals': [
		    {'start': Date.now(),
		     'stop' : 'false'}
	    ],
	    'duration': 0
	    }
	//Store in local storage with job-id
	$timeout.cancel(stopped);
	$scope.seconds = 0;
    }

    $scope.log = function(){
	$timeout.cancel(stopped);
	$scope.isDisabled = false;
	$scope.session.intervals[$scope.session.intervals.length - 1].stop = Date.now();
	localStorage.setItem('Session_' + $scope.job.id, JSON.stringify($scope.session));
	localStorage.setItem('Archive_' + $scope.job.id, JSON.stringify($scope.session.intervals));
    }

    //creates a new session with the job id
    $scope.session =
	{ 'start' : Date.now(),
	'intervals': [
	    {'start': Date.now(),
	     'stop' : 'false'}
	],
	'duration': 0
	}
	//Store in local storage with job-id
	

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
