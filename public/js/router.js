(function() {
  define(['jquery', 'underscore', 'backbone', 'views/homeView', 'views/loginView'], function($, _, Backbone, Home, Login) {
    var AppRouter, initialize;
    AppRouter = Backbone.Router.extend({
      routes: {
        "login": "showLogin",
        "*other": "defaultRoute"
      }
    });
    /*
    checkAuthorization = ->
        self = this;
        
        window.fbAsyncInit = ->
            FB.init({
                appId      : '523843644320212' # App ID
                channelUrl : '//localhost:3000' # Channel File
                status     : true # check login status
                cookie     : true # enable cookies to allow the server to access the session
                xfbml      : true  # parse XFBML
            });
    
            FB.getLoginStatus(handleUserStateChange);
            FB.Event.subscribe('auth.authResponseChange', handleUserStateChange);
    
        # Load the SDK asynchronously
        ((d)->
            id = 'facebook-jssdk'
            ref = d.getElementsByTagName('script')[0]
            if d.getElementById(id)
              undefined
            js = d.createElement('script')
            js.id = id
            js.async = true
            js.src = "//connect.facebook.net/en_US/all.js"
            ref.parentNode.insertBefore(js, ref)
        )(document)
    
        testAPI = ->
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', (response) ->
                console.log('Good to see you, ' + response.name + '.')
            )
            $("#home").show()
            $('#login').hide()
        
        handleUserStateChange = (response) ->
            # Here we specify what we do with the response anytime this event occurs. 
            if response.status == 'connected' 
                testAPI()
                self.navigate('/', {trigger: true})
            else if response.status == 'not_authorized'
                self.navigate('login', {trigger: true})
                #FB.login();
            else
                self.navigate('login', {trigger: true})
    
        undefined
    */

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
        //checkAuthorization.call(this);
        $('#login').show();
        return $('#home').hide();
      });
      app_router.on('route:defaultRoute', function(actions) {
        //return checkAuthorization.call(this);
      });
      return Backbone.history.start();
    };
    return {
      initialize: initialize
    };
  });

}).call(this);
