import Ember from 'ember';
export default Ember.Route.extend({
  model: function(params) {
    console.log("Vacation Route - model")
    return this.store.find("vacation",params.vacationId);
	},
  afterModel: function(vacation) {
    console.log("below")
    console.log(vacation.legs)
    if(vacation.actionsArray){
      //Do nothing because otherwise get a proxy error trying to reset it
    }else{
      vacation.actionsArray = [
        {action:"resetMap", label:"Reset Map"},
        {link:"vacations", label:"Return Home"},
        {link:"legs.new", label:"New Leg"},
        {action:"deleteVacation", label:"Delete"}
      ]
    }
  }
});
