import Ember from 'ember';
export default Ember.Route.extend({
  model: function(params) {
    console.log(params)
    console.log("above")
	 return this.store.find("vacation");
	},
  setupController:function(controller){
    this._super();
    controller.set('id',(this.controllerFor('vacation').get('model.id')));
    console.log(this.controllerFor('vacation').get('model'))
    controller.set('name',(this.controllerFor('vacation').get('model.name')));
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
