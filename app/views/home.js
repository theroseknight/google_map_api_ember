import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    var view=this;
    console.log("View - home.js - didInsertElement")
  }
});
