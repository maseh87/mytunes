// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.

//the model for this view is the SongModel.js
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="playNow">(<%= artist %>)</td><td class="playNow"><%= title %></td><td><%= count %></td></td><td class="enqueue">+</td>'),

  events: {
    //this event is triggered when the <td> is clicked
    'click .playNow': function() {
      this.model.play();
    },
    'click .enqueue' : function(){
      this.model.enqueue();
    }

  },
  initialize: function() {
  this.model.on('change:count', function(model) {
      this.render();
    }, this)
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});


