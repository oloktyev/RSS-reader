var app = app || {};
//menu with subscribed rss
app.SubscribeView = Backbone.View.extend({
	isPopupShown: false,
	isBtnDisabled: true,

	el: '#rd-subscribe-container',
	
	initialize: function(){
		this.$susbscribePopup = this.$('.rd-subscribe-popup');
		this.$closeSubscribePopup = this.$('.rd-close');
		this.$addSubscriptionBtn = this.$('.rd-add-subscription-btn');
		this.$subscriptionURL = this.$('.rd-add-subscription-text');
	},
	events: {
		"click .rd-subscribe-btn": "togglePopup",
		"click .rd-close": "togglePopup",
		"click .rd-add-subscription-btn": "addSubscription",
		"keyup .rd-subscription-text": "toggleSubscriptionBtn"
	},
	
	togglePopup: function(event) {
		if(this.isPopupShown) {
			this.$susbscribePopup.removeClass('show');
		} else {
			this.$susbscribePopup.addClass('show');
		}
		this.isPopupShown = !this.isPopupShown;
	},
	
	toggleSubscriptionBtn: function(event) {
		var $el, len;
		
		$el = $(event.currentTarget);
		len = $el.val().length;
		if(len > 0 && this.isBtnDisabled) {
			this.$addSubscriptionBtn.removeClass('disabled');
			this.$addSubscriptionBtn.removeAttr('disabled');
			this.isBtnDisabled = false;
		} else if(len === 0 && !this.isBtnDisabled) {
			this.$addSubscriptionBtn.addClass('disabled');
			this.$addSubscriptionBtn.attr('disabled', 'disabled');
			this.isBtnDisabled = true;
		}
	},
	
	addSubscription: function() {
		var model;
		
		new app.Subscription({'url': this.$subscriptionURL.val()});
	}
});
new app.SubscribeView();