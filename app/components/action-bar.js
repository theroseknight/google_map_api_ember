import Ember from 'ember';
//This component expects to be created with an array of action hashes [{action:"resetMap", label:"Reset Map"},{action:"share", label:"Share"}] from the creators route and  outerController=this to acess route transfers
export default Ember.Component.extend({
  actions: {
    resetMap:function(){
      window.location.reload(true);
    },
  }
});
