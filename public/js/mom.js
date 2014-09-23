
$(function(){
  var Activity = Backbone.Model.extend({

    defaults: function() {
      return {
        title: "empty",
        order: Activities.nextOrder(),
        done: false
      };
    },

    toggle: function() {
      this.save({done: !this.get("done")});
    }

  });

  var ActivityList = Backbone.Collection.extend({

    model: Activity,

    localStorage: new Backbone.LocalStorage("mom-backbone"),

    done: function() {
      return this.where({done: true});
    },

    remaining: function() {
      return this.where({done: false});
    },

    nextOrder: function() {
      if (!this.length) return 1;
      return this.last().get('order') + 1;
    },

    comparator: 'order'

  });

  var Activities = new ActivityList;


  var ActivityView = Backbone.View.extend({

    tagName:  "li",

    template: _.template($('#item-template').html()),

    events: {
      "click"		: "sendTimer",
      "dblclick .view"  : "edit",
      "click a.destroy" : "clear",
      "keypress .edit"  : "updateOnEnter",
      "blur .edit"      : "close"
    },

    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.toggleClass('done', this.model.get('done'));
      this.input = this.$('.edit');
      return this;
    },

    sendTimer: function() {
	Activities.trigger('ActivityClicked');
    
    },

    edit: function() {
      this.$el.addClass("editing");
      this.input.focus();
    },

    close: function() {
      var value = this.input.val();
      if (!value) {
        this.clear();
      } else {
        this.model.save({title: value});
        this.$el.removeClass("editing");
      }
    },

    // If you hit `enter`, we're through editing the item.
    updateOnEnter: function(e) {
      if (e.keyCode == 13) this.close();
    },

    // Remove the item, destroy the model.
    clear: function() {
      this.model.destroy();
    }
  });


  var TimerView = Backbone.View.extend({

    initialize: function() {
	var timerinterval = false;
	this.listenTo(Activities, 'ActivityClicked', this.timerToggle);
	this.seconds = parseInt($('#divsec').html());
	this.render();
    },

    render: function() {
	var template = _.template( $("#timer-template").html(), {seconds: this.seconds} );
        this.$el.html( template );
	this.$seconds = this.$('#timerval');
	return this;
    },

    timerToggle: function() {
	var timerinterval = setInterval( function() { this.seconds++; }, 200 );


    }

  });

    var timer_view = new TimerView({ el: $("#timer_container") });

  // Our overall **AppView** is the top-level piece of UI.
  var AppView = Backbone.View.extend({

    el: $("#momapp"),

    statsTemplate: _.template($('#stats-template').html()),
    events: {
      "click #new-item":  "createOnEnter",
    },

    initialize: function() {

      this.input = this.$("#new-item");

      this.listenTo(Activities, 'add', this.addOne);
      this.listenTo(Activities, 'reset', this.addAll);
      this.listenTo(Activities, 'all', this.render);

      this.footer = this.$('footer');
      this.main = $('#main');

      Activities.fetch();
    },

    render: function() {
      var done = Activities.done().length;
      var remaining = Activities.remaining().length;

      if (Activities.length) {
        this.main.show();
        this.footer.show();
        this.footer.html(this.statsTemplate({done: done, remaining: remaining}));
      } else {
        this.main.hide();
        this.footer.hide();
      }

    },

    addOne: function(Activity) {
      var view = new ActivityView({model: Activity});
      this.$("#item-list").append(view.render().el);
    },

    addAll: function() {
      Activities.each(this.addOne, this);
    },

    createOnEnter: function(e) {

      Activities.create({title: 'Test Job'});
      this.input.val('');
    },

    clearCompleted: function() {
      _.invoke(Activities.done(), 'destroy');
      return false;
    },

    toggleAllComplete: function () {
      var done = this.allCheckbox.checked;
      Activities.each(function (Activity) { Activity.save({'done': done}); });
    }

  });

  var App = new AppView;

});


