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

      //get coordinates for first city
      $.ajax({
        url:"https://maps.googleapis.com/maps/api/geocode/json?address=" + startingCity +","+startingState+"&key=AIzaSyBHZZ5yxy8hAPoKb8g28oqYpfgyC_jvbvQ",
        method:"GET",
        success:function(data){
          var lat = data.results[0].geometry.location.lat
          var lng = data.results[0].geometry.location.lng
          controller.set('model.startingLat',lat);
          controller.set('model.startingLng',lng);

          //get coordinates for second city
          $.ajax({
            url:"https://maps.googleapis.com/maps/api/geocode/json?address=" + endingCity +","+endingState+"&key=AIzaSyBHZZ5yxy8hAPoKb8g28oqYpfgyC_jvbvQ",
            method:"GET",
            success:function(data){
              var lat = data.results[0].geometry.location.lat
              var lng = data.results[0].geometry.location.lng
              controller.set('model.endingLat',lat);
              controller.set('model.endingLng',lng);

              $.ajax({
                url:"http://localhost:3000/legs",
                method:"POST",
                data:{
                  "leg[vacation_id]":controller.get("model.id"),
                  "leg[starting_city]":controller.get("model.startingCity"),
                  "leg[ending_city]":controller.get("model.endingCity"),
                  "leg[starting_state]":controller.get("model.startingState"),
                  "leg[ending_state]":controller.get("model.endingState"),
                  "leg[starting_lat]":controller.get("model.startingLat"),
                  "leg[starting_lng]":controller.get("model.startingLng"),
                  "leg[ending_lat]":controller.get("model.endingLat"),
                  "leg[ending_lng]":controller.get("model.endingLng")
                },
                success:function(data){
                  $('#newLegModal').modal('hide');
                  controller.store.push("leg",controller.store.normalize("leg",data.leg));

                  var startingMarker = Ember.Object.create({ latitude: controller.get("model.startingLat"), longitude: controller.get("model.startingLng") })
                  var endingMarker = Ember.Object.create({ latitude: controller.get("model.endingLat"), longitude: controller.get("model.endingLng") })
                  var currentMarkers = route.controllerFor('vacation').get('model.markers')
                  console.log(currentMarkers)
                  if(currentMarkers===undefined){
                    currentMarkers = [];
                  }else{
                    currentMarkers = route.controllerFor('vacation').get('model.markers')
                  }


                  currentMarkers.push(startingMarker);
                  currentMarkers.push(endingMarker);
                  console.log(currentMarkers)
                  console.log("above")
                  console.log(route.controllerFor('vacation').get('model'))
                  route.controllerFor('vacation').set('model.markers',currentMarkers)
                  console.log(route.controllerFor('vacation').get('model.markers'))
                  console.log("its this one")
                  route.transitionTo('/vacation'+ "/" + controller.get('model.id'))
                },
                error:function(){
                  console.log("fail");
                }
              });
            }
          })
        }
      })
    },
  }
});
