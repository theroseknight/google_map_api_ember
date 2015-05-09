import Ember from "ember";
import DS from "ember-data";
Ember.$.ajaxSetup({
  xhrFields: {
    withCredentials: true
  }
});
export default DS.ActiveModelAdapter.extend({
  headers: {
    "X-CSRF-Token": Ember.$('meta[name="csrf-token"]').attr('content')
  },
  host: 'http://localhost:3000',
  ajax: function(url, method, hash) {
    hash = hash || {};
    hash.crossDomain = true;
    hash.xhrFields = {withCredentials: true};
    return this._super(url, method, hash);
  }
});
