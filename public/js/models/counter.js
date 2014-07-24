var app = app || {};

$(function() {
    'use strict';

    app.Counter = Backbone.Model.extend({
	defaults: {
	    count: 0
	},
	increment: function() {
	    this.save({
		count: this.get('count') + 1
	    });
	},
	decrement: function() {
	    this.save({
		count: this.get('count') - 1
	    });
	}

    });
});
