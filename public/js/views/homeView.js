(function() {
  define(['../bootstrap/bootstrap-dropdown', 'views/SubscribeView'], function(bDropDown, Subscribe) {
    var HomeView;

    return HomeView = Backbone.View.extend({
      initialize: function() {
        return this.components = [];
      },
      addElements: function(el) {
        return this.components.push(el);
      },
      render: function() {
        var component, _i, _len, _ref;

        _ref = this.components;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          component = _ref[_i];
          this.$('#rd-subscribe-container').html(component.render());
        }
        return this.el;
      }
    });
  });

}).call(this);
