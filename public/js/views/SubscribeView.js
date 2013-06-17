(function() {
  define(['text!../../templates/subscribe.tpl', '../models/subscription'], function(Template) {
    var SubscribeView;

    return SubscribeView = Backbone.View.extend({
      template: _.template(Template, Subscription),
      initialize: function() {
        this.isPopupVisible = false;
        return this.model = new Subscription();
      },
      bind: function() {
        return this.$('.rd-subscribe-btn').bind('click', _.bind(this.toggleSubscribePopup, this));
      },
      cacheDOMEl: function() {
        this.cachedElements = {};
        this.cachedElements['subscribePopup'] = this.$('.rd-subscribe-popup');
        this.cachedElements['addSubscribtionBtn'] = this.$('.rd-add-subscription-btn');
        return this.cachedElements['subscriptionURL'] = this.$('.rd-subscription-text');
      },
      events: {
        'click .rd-close-popup': 'toggleSubscribePopup',
        'click .rd-subscribe-btn': 'toggleSubscribePopup',
        'click .rd-add-subscription-btn': 'addSubscribtion',
        'keyup .rd-subscription-text': 'subscribeURLChangeHandler'
      },
      render: function() {
        this.$el.html(this.template());
        this.cacheDOMEl();
        return this.el;
      },
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
      toggleSubscribtionBtn: function(flag) {
        if (flag) {
          return this.cachedElements['addSubscribtionBtn'].addClass('disabled').attr('disabled', 'disabled');
        } else {
          return this.cachedElements['addSubscribtionBtn'].removeClass('disabled').removeAttr('disabled');
        }
      },
      addSubscribtion: function() {
        var url;

        url = this.cachedElements['subscriptionURL'].val();
        return this.model.set({
          'url': url
        });
      },
      subscribeURLChangeHandler: function(event) {
        var $el;

        $el = $(event.target);
        if ($el.val().length > 0) {
          return this.toggleSubscribtionBtn(false);
        } else {
          return this.toggleSubscribtionBtn(true);
        }
      }
    });
  });

}).call(this);
