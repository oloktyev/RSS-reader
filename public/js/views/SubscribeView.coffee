define([], ->
  SubscribeView = Backbone.View.extend({
    
    initialize: ->
      this.isPopupVisible = false
      this.cacheDOMEl()
      this.cachedElements['subscribeBtn'].bind('click', _.bind(this.toggleSubscribePopup, this))
    
    cacheDOMEl: ->
      this.cachedElements = {}
      this.cachedElements['subscribeBtn'] = $('.rd-subscribe-btn', '#rd-subscribe-container')
      this.cachedElements['subscribePopup'] = $('.rd-subscribe-popup', '#rd-subscribe-container')
      
    events: {
      #'click .rd-subscribe-btn' : 'toggleSubscribePopup'
    }
    
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
    
    render: ->

      
  });
);