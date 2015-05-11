import Ember from 'ember';
export default Ember.Route.extend({
  model: function(params) {
    console.log("Vacation Index Route - model")
    console.log(params)
	 return this.modelFor("vacation").get("legs");
	},
  afterModel:function(vacations, transition) {
    console.log("Vacation Index Route - afterModel")
    console.log(vacations)
  },
  setupController:function(controller){
    this._super();
    console.log("Vacation Index Route - setupController")
    console.log(controller.get('model').length)

    controller.set('legs',this.store.find('leg', this.controllerFor('vacation').get('model.id')))


    Ember.Object.create({ latitude: 40.71356, longitude: -74.00632 })

    controller.set('id',(this.controllerFor('vacation').get('model.id')));

    controller.set('name',(this.controllerFor('vacation').get('model.name')));
    controller.set('markers',[]);
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
