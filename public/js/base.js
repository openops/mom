var Job = Backbone.Model.extend({
    defaults: {
        description: "Not specified",
        intervals: ["array of intervals"],
	id: "Not specified"
    },
    initialize: function(){
        console.log("initialize job");
    }
});

var Jobs = Backbone.Collection.extend({
    model: Job
});

var checkup = Backbone.Model.extend({
    defaults: {
	id: "not set"
	time: "time until checkup"
    },
    initialize: function(){
	console.log("initilize checkup");
    }
});


    var job1 = new Job({ description: "Test Job 1", intervals: ["test int"], id: 'test' });
    var job2 = new Job({ description: "Test Job 2", intervals: ["test int"], id: 'test' });

    var myJobs = new Jobs([job1, job2]);
    console.log( myJobs.models );
