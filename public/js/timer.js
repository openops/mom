(function() {

  var vent = {};
  _.extend(vent, Backbone.Events);


  var State = Backbone.Model.extend({
    // maintain the time elapsed data and latest start time
    initialize: function() {
      // Do nothing
    },
  });

  var Checkup = Backbone.Model.extend({
      initialize: function() {
        var uid = ""
	var checktime = ""
      },
  });

  var Timer = Backbone.View.extend({
    initialize: function() {
      // Create the model
      this.model = new State();
      this.intervals = [];
      this.uid = Math.floor((Math.random() * 1000) + 1);
      // Running?
      this.running = false;
    },
    events: {
      'click #start': 'start',
      'click #stop': 'stop',
      'click #remove': 'remove'
    },
    template: '<button class="button" id="start">Start</button> <button class="alert" id="stop">Stop</button> <button class="alert" id="remove">Remove</button><span id="elapsed">0</span> ms',
    render: function() {
      this.$el.html(_.template(this.template, this.model.toJSON()));
      this.$elapsed = this.$('#elapsed');
      return this;
    },
    start: function() {
      // When running, update the view ever 100 ms
      if (this.running) {
        // Already running, do nothing
        return;
      }

      // Reset the start time
      this.model.set('start', new Date());
      vent.trigger('MakeCheckup', this.uid);
      this.intervals.push(Date.now());
      var self = this;
      var caller = function() {
        self.update.call(self);
      }

      // Tell the timer to update every 100 ms
      this.running = setInterval(caller, 100)
    },
    stop: function() {
      // Determine the elapsed time
      if (!this.running) {
        // The timer isn't running
        return;
      }
      this.intervals.push(Date.now());
      console.log(this.intervals.toString());
      var elapsed = new Date() - this.model.get('start');
      if (this.model.has('elapsed')) {
        elapsed += this.model.get('elapsed');
      }

      // Save this as the elapsed time
      this.model.set('elapsed', elapsed)


      clearInterval(this.running);
      this.running = false;
    },
    update: function() {
      // Determine the current time

      var now = new Date();

      // This will return elapsed time in ms
      var elapsed = (now - this.model.get('start'));
      if (this.model.has('elapsed')) {
        elapsed += this.model.get('elapsed');
      }

      // Update the view
      this.$elapsed.html(elapsed);
    }

  });
  
  var Activities = Backbone.Collection.extend({
    model: State
  });

  var Checkups = Backbone.Collection.extend({
    model: Checkup
  });
  

  Backbone.Timer = Timer;

}).call(this);
