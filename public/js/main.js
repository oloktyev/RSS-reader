(function() {
  require.config({
    paths: {
      jquery: 'libs/jquery',
      underscore: 'libs/underscore',
      backbone: 'libs/backbone'
    },
    shim: {
      'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      'underscore': {
        exports: '_'
      }
    }
  });

  require(['jquery', 'backbone', 'underscore', 'router', 'views/homeView', 'views/SubscribeView'], function($, Backbone, _, Router, HomeView, SubscribeView) {
    var home;

    home = new HomeView({
      el: $('#home')
    });
    home.addElements(new SubscribeView());
    return home.render();
  });

}).call(this);
