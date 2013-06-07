(function() {
  define([], function() {
    var SubscribeView;
    return SubscribeView = Backbone.View.extend({
      initialize: function() {
        this.isPopupVisible = false;
        this.cacheDOMEl();
        return this.cachedElements['subscribeBtn'].bind('click', _.bind(this.toggleSubscribePopup, this));
      },
      cacheDOMEl: function() {
        this.cachedElements = {};
        this.cachedElements['subscribeBtn'] = $('.rd-subscribe-btn', '#rd-subscribe-container');
        return this.cachedElements['subscribePopup'] = $('.rd-subscribe-popup', '#rd-subscribe-container');
      },
      events: {},
      showSubscribePopup: function() {
        if (!this.isPopupVisible) {
          this.cachedElements['subscribePopup'].show();
          return this.isPopupVisible = true;
        }
      },
      hideSubscribePopup: function() {
        if (this.isPopupVisible) {
          this.cachedElements['subscribePopup'].hide();
          return this.isPopupVisible = false;
        }
      },
      toggleSubscribePopup: function() {
        return this.cachedElements['subscribePopup'].toggle();
      },
      render: function() {}
    });
  });

}).call(this);
