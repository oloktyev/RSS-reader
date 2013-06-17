(function() {
  define(['jquery', 'underscore', 'backbone', 'router'], function($, _, Backbone, Router) {
    var initialize;

    initialize = function() {
      return Router.initialize();
    };
    return {
      initialize: initialize
    };
  });

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

  define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var AppRouter, checkAuthorization, initialize;

    AppRouter = Backbone.Router.extend({
      routes: {
        "login": "showLogin",
        "*other": "defaultRoute"
      }
    });
    checkAuthorization = function() {
      var handleUserStateChange, self, testAPI;

      self = this;
      window.fbAsyncInit = function() {
        FB.init({
          appId: '523843644320212',
          channelUrl: '//localhost:3000',
          status: true,
          cookie: true,
          xfbml: true
        });
        FB.getLoginStatus(handleUserStateChange);
        return FB.Event.subscribe('auth.authResponseChange', handleUserStateChange);
      };
      (function(d) {
        var id, js, ref;

        id = 'facebook-jssdk';
        ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {
          void 0;
        }
        js = d.createElement('script');
        js.id = id;
        js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";
        return ref.parentNode.insertBefore(js, ref);
      })(document);
      testAPI = function() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
          return console.log('Good to see you, ' + response.name + '.');
        });
        $("#home").show();
        return $('#login').hide();
      };
      handleUserStateChange = function(response) {
        if (response.status === 'connected') {
          testAPI();
          return self.navigate('/', {
            trigger: true
          });
        } else if (response.status === 'not_authorized') {
          return self.navigate('login', {
            trigger: true
          });
        } else {
          return self.navigate('login', {
            trigger: true
          });
        }
      };
      return void 0;
    };
    initialize = function() {
      var app_router;

      app_router = new AppRouter;
      /* 
      app_router.on('showLogin', function(){
           #Call render on the module we loaded in via the dependency array 'views/projects/list'
          projectListView = new ProjectListView();
          projectListView.render();
      });
      */

      app_router.on('route:showLogin', function() {
        checkAuthorization.call(this);
        $('#login').show();
        return $('#home').hide();
      });
      app_router.on('route:defaultRoute', function(actions) {
        return checkAuthorization.call(this);
      });
      Backbone.history.start();
      return console.log('dincbcvb  cv cvbe fd bfd ');
    };
    return {
      initialize: initialize
    };
  });

}).call(this);
