// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'table',
  initialize: function() {

    console.log(this.model)
    this.collection.on("add", function(){
      this.render();
    },this);
    this.render();
    this.collection.on('remove', function(){this.render();},this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Queues</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
