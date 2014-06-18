// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.model.on("change",this.render(),this);
  },

  render: function() {
    return this.$el;
  }

});
