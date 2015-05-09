import Ember from 'ember';
export default Ember.Route.extend({
  model: function() {
	 return this.store.find("vacation");
	},
  setupController:function(controller){
    this._super();
    controller.set(
      'actionsArray',
      [
        {action:"resetMap", label:"Reset Map"},
        {link:"vacations", label:"Return Home"},
        {action:"addLeg", label:"Add Leg"},
        {action:"deleteVacation", label:"Delete"}
      ]
    );
  },
  actions:{

  }
});
