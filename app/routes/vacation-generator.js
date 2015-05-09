import Ember from 'ember';
import ENV from '../config/environment';
export default Ember.Route.extend({
  setupController:function(controller){
    this._super();
    controller.set('actionsArray',[{action:"resetMap", label:"Reset Map"},{link:"vacations", label:"Return Home"},{action:"editVacation", label:"Edit"},{action:"deleteVacation", label:"Delete"}])
  },
  actions:{

  }
});
