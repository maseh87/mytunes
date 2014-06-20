// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: function(){
    return {
      count: 0,
    };
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.set('count', this.get('count') + 1);
    var musicCount = this.get('count');
    window.localStorage.setItem('musicAppSongCount', musicCount);
    //'play' is a method located on the AppModel which takes a song as
    //as a parameter
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

});
