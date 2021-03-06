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
        {action:"share", label:"Share"},
        {action:"print", label:"Print"},
        {link:"vacations.new", label:"New Vacation"},
        {action:"editVacation", label:"Edit"},
        {action:"deleteVacation", label:"Delete"}
      ]
    );
  },
  actions:{

  }
});
