import Ember from "ember";
import DS from "ember-data";
Ember.$.ajaxSetup({
  xhrFields: {
    withCredentials: false
  }
});
export default DS.ActiveModelAdapter.extend({
  headers: {
    "X-CSRF-Token": Ember.$('meta[name="csrf-token"]').attr('content')
  },
  host: 'http://localhost:3000',
  ajax: function(url, method, hash) {
    console.log("Adapters - application.js")
    hash = hash || {};
    hash.crossDomain = true;
    hash.xhrFields = {withCredentials: false};
    return this._super(url, method, hash);
  }
});
