(function() {

  var State = Backbone.Model.extend({
    // maintain the time elapsed data and latest start time
    initialize: function() {
      // Do nothing
    },
  });

  var Timer = Backbone.View.extend({
    initialize: function() {
      // Create the model
      this.model = new State();
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
        // The timer isn't running, so what
        return;
      }

      var elapsed = new Date() - this.model.get('start');
      if (this.model.has('elapsed')) {
        elapsed += this.model.get('elapsed');
      }

      // Save this as the elapsed delta
      this.model.set('elapsed', elapsed)


      clearInterval(this.running);
      this.running = false;
    },
    update: function() {
      // Determine the current clock

      var now = new Date();

      // This will return elapsed time in ms 
      var elapsed = (now - this.model.get('start'));
      // Add any pre-existing delta
      if (this.model.has('elapsed')) {
        elapsed += this.model.get('elapsed');
      }

      // Update the view
      this.$elapsed.html(elapsed);
    }


  });

  Backbone.Timer = Timer;

}).call(this);
