import Ember from 'ember';
export default Ember.Route.extend({
  actions: {
    create:function(){
      var route = this;
      var controller = this.controllerFor('legs.new')
      $.ajax({
        url:"http://localhost:3000/legs",
        method:"POST",
        data:{
          "let[vacation_id]":controller.get("model.id"),
          "leg[starting_city]":controller.get("model.startingCity"),
          "leg[ending_city]":controller.get("model.endingCity"),
          "leg[starting_coordinate_one]":controller.get("model.startingCoordinateOne"),
          "leg[starting_coordinate_two]":controller.get("model.startingCoordinateTwo"),
          "leg[ending_coordinate_one]":controller.get("model.endingCoordinateOne"),
          "leg[ending_coordinate_two]":controller.get("model.endingCoordinateTwo")
        },
        success:function(data){
          $('#newLegModal').modal('hide');
          controller.store.push("leg",controller.store.normalize("leg",data.leg));
          route.transitionTo('/vacation'+ "/" + controller.get('model.id'))
        },
        error:function(){
          console.log("fail");
        }
      });
    },
  }
});
