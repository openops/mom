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
	'click .addOne': 'addOne' 
    },
    
    template: _.template( $('#timerTemplate').html()),
    render: function() {
	this.$el.html(_.template(this.template, this.model.toJSON()));
    },
    addOne: function() {
	console.log('testtt');
	alert('test');
	var timer_view = new TimerList({ el: $("#timer_container") });
    }
});


