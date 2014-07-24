var app = app || {};

$(function() {
	'use strict';

	var Workspace = Backbone.Router.extend({
		routes:{
			'.*': 'index'
		},

		index: function() {
			// do nothing
		}
	});

	app.CounterRouter = new Workspace();
	new app.CounterAppView();
	Backbone.history.start();

});
