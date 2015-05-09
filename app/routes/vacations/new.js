import Ember from 'ember';
export default Ember.Route.extend({
  setupController:function(controller){
    this._super();
    controller.set('inputsArray',
      [
        {label:"Name", value:"name", id:"name"}
      ]
    );
  },
  actions: {
    create:function(){
      var route = this;
      var controller = this.controllerFor('vacations.new')
      console.log(controller.get('name'))
      $.ajax({
        url:"http://localhost:3000/vacations",
        method:"POST",
        data:{
          "vacation[name]":controller.get("name"),
        },
        success:function(data){
          $('#newVacationModal').modal('hide');
          controller.store.push("vacation",controller.store.normalize("vacation",data.vacation));
          route.transitionTo('/vacation'+ "/" + data.vacation.id)
        },
        error:function(){
          console.log("fail");
        }
      });
    },
  }
});
