import Ember from 'ember';
//This component expects to be created with

export default Ember.Component.extend({
  insertCarousel: function() {
    console.log("here")
    var component = this;
    var controller=component.get('outerController');
    console.log(controller.get('model').length)
  }.on('didInsertElement')
});
