var app = app || {};

$(function( $ ) {
    'use strict';
    app.CounterView = Backbone.View.extend({
	tagName: 'div',
	// Cache the template function for a single item.
	template: _.template( $('#counter-template').html() ),
	events: {
	    'click .increment': 'incrementCounter',
	    'click .decrement': 'decrementCounter',
	    'click .remove_counter': 'removeCounter'
	},
	initialize: function() {
	    this.model.on( 'change', this.render, this );
	    this.model.on( 'destroy', this.remove, this );
	},
	render: function() {
	    this.$el.html( this.template( this.model.toJSON() ) );
	    return this;
	},

	incrementCounter: function() {
	    this.model.increment();
	},
	decrementCounter: function() {
	    this.model.decrement();
	},
	removeCounter: function() {
	    this.model.destroy();
	}
    });
});
