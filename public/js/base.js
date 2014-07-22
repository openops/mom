var Job = Backbone.Model.extend({
        defaults: {
            description: "Not specified",
            intervals: ["array of intervals"],
	    duration: "Not specified"
        },
        initialize: function(){
            console.log("initialize job");
        }
    });

    var Jobs = Backbone.Collection.extend({
        model: Job
    });

    var job1 = new Job({ description: "Test Job 1", intervals: ["test int"], duration: 'test' });
    var job2 = new Job({ description: "Test Job 2", intervals: ["test int"], duration: 'test' });

    var myJobs = new Jobs([job1, job2]);
    console.log( myJobs.models );
