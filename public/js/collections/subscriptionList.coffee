define(['../models/subscription'], (Subscription)->
    Subscription = Backbone.Collection.extend({
        model: Subscription,
        url: '/feeds'
    })
)