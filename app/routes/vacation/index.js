import Ember from 'ember';
export default Ember.Route.extend({
  model: function(params) {
	 return this.store.find("vacation");
	},
  setupController:function(controller){
    this._super();
    controller.set('id',(this.controllerFor('vacation').get('model.id')));
    controller.set('name',(this.controllerFor('vacation').get('model.name')));
    controller.set(
      'actionsArray',
      [
        {action:"resetMap", label:"Reset Map"},
        {link:"vacations", label:"Return Home"},
        {link:"legs.new", label:"New Leg"},
        {action:"deleteVacation", label:"Delete"}
      ]
    );
  },
  actions:{

  }
});
