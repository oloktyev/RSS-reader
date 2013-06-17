define(['text!../../templates/subscribe.tpl', '../models/subscription'], (Template) ->
  SubscribeView = Backbone.View.extend({
    
    template: _.template(Template, Subscription)
    
    initialize: ->
      this.isPopupVisible = false
      this.model = new Subscription()
    
    bind: ->
      this.$('.rd-subscribe-btn').bind('click', _.bind(this.toggleSubscribePopup, this))
      
    cacheDOMEl: ->
      this.cachedElements = {}
      this.cachedElements['subscribePopup'] = this.$('.rd-subscribe-popup')
      this.cachedElements['addSubscribtionBtn'] = this.$('.rd-add-subscription-btn')
      this.cachedElements['subscriptionURL'] = this.$('.rd-subscription-text')
      
    events: {
      'click .rd-close-popup' : 'toggleSubscribePopup'
      'click .rd-subscribe-btn' : 'toggleSubscribePopup'
      'click .rd-add-subscription-btn' : 'addSubscribtion'
      'keyup .rd-subscription-text' : 'subscribeURLChangeHandler'
    }
    
    render: ->
      this.$el.html(this.template())
      this.cacheDOMEl()
      this.el
    
    showSubscribePopup: ->
      if !this.isPopupVisible
        this.cachedElements['subscribePopup'].show()
        this.isPopupVisible = true
    
    hideSubscribePopup: ->
      if this.isPopupVisible
        this.cachedElements['subscribePopup'].hide()
        this.isPopupVisible = false
    
    toggleSubscribePopup: ->
      this.cachedElements['subscribePopup'].toggle()
    
    toggleSubscribtionBtn: (flag)->
        if flag
            this.cachedElements['addSubscribtionBtn'].addClass('disabled').attr('disabled', 'disabled')
        else
            this.cachedElements['addSubscribtionBtn'].removeClass('disabled').removeAttr('disabled')
    
    addSubscribtion: ->
        url = this.cachedElements['subscriptionURL'].val()
        this.model.set({'url': url})
    
    subscribeURLChangeHandler: (event)->
        $el = $(event.target)
        if $el.val().length > 0
            this.toggleSubscribtionBtn(false)
        else
            this.toggleSubscribtionBtn(true)
  });
);