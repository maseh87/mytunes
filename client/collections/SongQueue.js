// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({


  initialize: function(song) {
    this.on('add', this._enqueue(song),this),
    // this.on('enqueue', function() {
    //   if(this.length === 1) {
    //     this.playFirst();
    //   }
    // }, this),
    this.on('ended', function() {
      this.shift();
      if(this.length >= 1) {
        this.playFirst();
      }
    },this)
  },

  _enqueue: function(song) {
    if(this.length === 1){
      this.playFirst();
    }
  },

  // _ended: function(){

  //   console.log('ended');
  //   // this.playFirst();
  //   // this.play());
  // },

  playFirst: function() {
    this.at(0).play();
  }

});
