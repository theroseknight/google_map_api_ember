import DS from 'ember-data';
var attr=DS.attr;

export default DS.Model.extend({
  name: attr(),
  startingCity: attr(),
  endingcity: attr(),
  startingCoordinateOne: attr(),
  startingCoordinateTwo: attr(),
  endingCoordinateOne: attr(),
  endingCoordinateTwo: attr(),
  vacation:DS.belongsTo("vacation",{async:true})
});
