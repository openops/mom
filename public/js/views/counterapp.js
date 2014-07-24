var app = app || {};

$(function( $ ) {
    'use strict';
    app.CounterAppView = Backbone.View.extend({
	el: '#counterapp',
	events: {
	    'click #add_counter': 'addCounter'
	},
	initialize: function() {
		},
	render: function() {
	},
	addCounter: function() {
	    var counter = new app.Counter();
	    var view = new app.CounterView({ model: counter});
	    $('#counters').append(view.render().el);
	}

	});
});
