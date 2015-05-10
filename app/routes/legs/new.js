import Ember from 'ember';
export default Ember.Route.extend({
  actions: {
    create:function(){
      var route = this;
      var controller = this.controllerFor('legs.new')

      var startingCity = controller.get('model.startingCity')
      var startingState = controller.get('model.startingState')
      var endingCity = controller.get('model.endingCity')
      var endingState = controller.get('model.endingState')

      $.ajax({
        url:"https://maps.googleapis.com/maps/api/geocode/json?address=" + startingCity +","+startingState+"&key=AIzaSyBHZZ5yxy8hAPoKb8g28oqYpfgyC_jvbvQ",
        method:"GET",
        success:function(data){
          console.log("here 4")
          console.log(data)
          var lat = data.results[0].geometry.location.lat
          var lng = data.results[0].geometry.location.lng
          console.log("here 5")
        }
      })

      $.ajax({
        url:"http://localhost:3000/legs",
        method:"POST",
        data:{
          "let[vacation_id]":controller.get("model.id"),
          "leg[starting_city]":controller.get("model.startingCity"),
          "leg[ending_city]":controller.get("model.endingCity"),
          "leg[starting_lat]":controller.get("model.startingLat"),
          "leg[starting_lng]":controller.get("model.startingLng"),
          "leg[ending_lat]":controller.get("model.endingLat"),
          "leg[ending_lng]":controller.get("model.endingLng")
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
