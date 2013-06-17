(function() {
  define(['backbone'], function(Backboone) {
    var Subscription;

    return Subscription = Backbone.Model.extend({
      defaults: {
        url: ''
      }
    });
  });

}).call(this);
