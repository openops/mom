var Checkup = Backbone.Model.extend({
    initialize: function() {
    
    },
});

var Activity = Backbone.Model.extend({
    initialize: function() {

    },
});

var Timer = Backbone.Model.extend({
    defaults: {
	time: 0,
    },
    initialize: function(){

    },
});


var TimerList = Backbone.View.extend({
    initialize: function(){
	this.render();
    },
    events: {
    },
    template: '<button class="button" id="start">Start</button> <button class="alert" id="stop">Stop</button> <button class="alert" id="rem    ove">Remove</button><span id="elapsed">0</span> ms',
    render: function() {
});

