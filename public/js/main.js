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
  }, require(['app'], function(App) {
    return App.initialize();
  }));

}).call(this);
