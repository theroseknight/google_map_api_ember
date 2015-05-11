import Ember from 'ember';
//This component expects to be created with a longitude and a latitude set {{google-summary-map latitude="37.8282" longitude="-98.5795" markers=markers}}
//The markers should be present on the Vacation model object that is loading the component
export default Ember.Component.extend({
  //Will be dynamically createdby Vacation model, filled with test data for now
  markers: [
    Ember.Object.create({ latitude: 40.71356, longitude: -74.00632 }), // New York
    Ember.Object.create({ latitude: 25.7753, longitude: -80.2089 }), // Miami
    //Ember.Object.create({ latitude: 29.7604, longitude: -95.3698}),  // Houston
    //Ember.Object.create({ latitude: 39.7392, longitude: -104.9903})  // Denver
  ],
  //Create the blank map
  insertMap: function() {
    console.log("Google Summary Map component js file with didInsertElement")
    //jQuery grabs the div on google-summary-map.hbs template
    var container = this.$('.map-canvas')[0];
    var options = {
      //Default map centers on the middle of the United States when no Polylines exist.  Polylines will recenter the map based on waypoints.
      center: new window.google.maps.LatLng(
        this.get('latitude'),
        this.get('longitude')
      ),
      zoom: 4
    };
    //Create the map in the DOM and save it for use by the markers and polylines functions
    this.set('map', new google.maps.Map(container, options));
    this.setMarkers();
    this.createPolylines();
  }.on('didInsertElement'),
  setMarkers: function() {
    var map = this.get('map');
    var markers = this.get('markers');

    markers.forEach(function(marker){
      new google.maps.Marker({
        position: new google.maps.LatLng(marker.get('latitude'), marker.get('longitude')),
        map: map
      });
    }, this);
  }.observes('markers.@each.latitude', 'markers.@each.longitude'),
  createPolylines: function() {
    var map = this.get('map');
    //var markers = this.get('markers');
    var pathCoordinates = [
      //new google.maps.LatLng(40.71356,-74.00632),
      //new google.maps.LatLng(25.7753,-80.2089),
      //new google.maps.LatLng(29.7604,-95.3698),
      //new google.maps.LatLng(39.7392,-104.9903),
      //new google.maps.LatLng(40.71356,-74.00632)
    ];

    //var finalPath = new google.maps.Polyline({
      //path: pathCoordinates,
      //strokeColor: '#FF0000',
      //strokeOpacity: 1.0,
      //strokeWeight: 2
    //});

    if(pathCoordinates.length !== 0){
      var service = new google.maps.DirectionsService();

      var directionsDisplay = new google.maps.DirectionsRenderer();

      directionsDisplay.setMap(map);

      var waypts = [];
      var j=0;
      for(j=1;j<pathCoordinates.length-1;j++){
        waypts.push({location: pathCoordinates[j],stopover: true});
      }

      var request = {
        origin: pathCoordinates[0],
        destination: pathCoordinates[pathCoordinates.length-1],
        waypoints: waypts,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
      };

      service.route(request,function(result, status) {
        if(status === google.maps.DirectionsStatus.OK){
          directionsDisplay.setDirections(result);
        }else{
          alert("Directions request failed:" +status);
        }
      });
    }else{
      console.log("No Legs Yet");
    }
  }.observes('pathCoordinates.@each'),
  actions: {
    addMarker: function(){
      var markers = this.get('markers');
    }
  }
});
