# Filename: app.js

define([
    'jquery'
    'underscore'
    'backbone'
    'router' #Request router.js
], ($, _, Backbone, Router) ->
    initialize = () ->
        # Pass in our Router module and call it's initialize function
        Router.initialize();
    
    {
        initialize: initialize
    };
);