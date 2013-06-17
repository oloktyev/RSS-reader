define(['../bootstrap/bootstrap-dropdown', 'views/SubscribeView'], (bDropDown, Subscribe)->
  HomeView = Backbone.View.extend({
    initialize: ->
        this.components = []
    
    addElements: (el)->
        this.components.push(el)
    
    render: ->
      this.$('#rd-subscribe-container').html(component.render()) for component in this.components
      this.el
  });

);

