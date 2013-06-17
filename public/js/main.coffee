# Filename: main.js

# Require.js allows us to configure shortcut alias
# There usage will become more apparent further along in the tutorial.

require.config({
    paths: {
        jquery: 'libs/jquery'
        underscore: 'libs/underscore'
        backbone: 'libs/backbone'
    },
    shim: {
        'backbone': {
            #These script dependencies should be loaded before loading
            #backbone.js
            deps: ['underscore', 'jquery']
            #Once loaded, use the global 'Backbone' as the
            #module value.
            exports: 'Backbone'
        }
        'underscore': {
            exports: '_'
        }
    }
})

require(['jquery', 'backbone', 'underscore', 'router', 'views/homeView', 'views/SubscribeView'],
($, Backbone, _, Router, HomeView, SubscribeView) ->
    #Router.initialize();
    
    home = new HomeView({el: $('#home')})
    home.addElements(new SubscribeView())
    home.render()
)