import Ember from 'ember';
//This component does not exist.  Need to figure out how to dynamically set values on the template, set data in the Ajax call, and push dynamically to the store.  Also need to decouple controller use for transitions

export default Ember.Component.extend({
  input: [],
  launchModal: function() {
    var component = this;
    var controller=component.get('outerController');
    var fullModalId = "#" + component.get('modalId')
    console.log(fullModalId)
    $(fullModalId).modal();
    $('.btn').removeClass("active");
    $(fullModalId).on("hidden.bs.modal",function(){
      controller.transitionToRoute(component.get('closeTransition'));
    });
  }.on('didInsertElement'),
  actions: {
    create:function(){
      console.log(this.get('name'))
      var component = this;
      var controller=component.get('outerController');
      var fullModalId = "#" + component.get('modalId')
      $.ajax({
        url:"http://localhost:3000/"+component.get('resourceUrl'),
        method:"POST",
        data:{
          "vacation[name]":component.get("name"),
        },
        success:function(data){
          $(fullModalId).modal('hide');
          controller.store.push("vacation",controller.store.normalize("vacation",data.vacation));
          component.get('outerController').transitionToRoute(component.get('successTransition') + "/" + data.vacation.id)
        },
        error:function(){
          console.log("fail");
        }
      });
    },
  }
});
