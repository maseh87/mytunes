// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({


  initialize: function(song) {
    // this.on('add', this._enqueue(song),this),
    this.on('add', function(){
      if(this.length === 1){
        this.playFirst()
      }
    }, this),

    this.on('ended', function() {
      this.shift();
      if(this.length){
        this.playFirst();
      }
    },this),

    this.on('dequeue', function(song){
      this.remove(song);
    })
  },

  playFirst: function() {
      this.at(0).play();
  }

});
