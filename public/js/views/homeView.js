(function() {
  define(['../bootstrap/bootstrap-dropdown', 'views/SubscribeView'], function(bDropDown, Subscribe) {
    var HomeView;
    return HomeView = Backbone.View.extend({
      subscribeView: new Subscribe(),
      render: function() {}
    });
  });

}).call(this);
