import Ember from 'ember';
export default Ember.Route.extend({
  model: function(params) {
    console.log("Vacation Route - model")
    return this.store.find("vacation",params.vacationId);
	}
});
