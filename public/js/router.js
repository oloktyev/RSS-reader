// Filename: router.js
define([
        'jquery',
        'underscore',
        'backbone'
], function($, _, Backbone) {
    var AppRouter, initialize, checkAuthorization;
    
    AppRouter = Backbone.Router.extend({
        routes: {
            "login"  : "showLogin",
            "*other" : "defaultRoute"
        }
    });
    
    checkAuthorization = function() {
        var self = this;
        
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '523843644320212', // App ID
                channelUrl : '//localhost:3000', // Channel File
                status     : true, // check login status
                cookie     : true, // enable cookies to allow the server to access the session
                xfbml      : true  // parse XFBML
            });

            FB.getLoginStatus(handleUserStateChange);
            FB.Event.subscribe('auth.authResponseChange', handleUserStateChange);
        };

        // Load the SDK asynchronously
        (function(d){
            var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement('script'); js.id = id; js.async = true;
            js.src = "//connect.facebook.net/en_US/all.js";
            ref.parentNode.insertBefore(js, ref);
        }(document));

        function testAPI() {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function(response) {
                console.log('Good to see you, ' + response.name + '.');
            });
            $("#home").show();
            $('#login').hide();
        }
        
        function handleUserStateChange(response) {
            // Here we specify what we do with the response anytime this event occurs. 
            if (response.status === 'connected') {
                testAPI();
                self.navigate('/', {trigger: true});
            } else if (response.status === 'not_authorized') {
                self.navigate('login', {trigger: true});
              //FB.login();
            } else {
                self.navigate('login', {trigger: true});
              //FB.login();
            }
        }
    };

    initialize = function() {
        var app_router = new AppRouter;
        /*app_router.on('showLogin', function(){
            // Call render on the module we loaded in via the dependency array
            // 'views/projects/list'
            var projectListView = new ProjectListView();
            projectListView.render();
        });*/
        
        app_router.on('route:showLogin', function() {
            checkAuthorization.call(this);
            $('#login').show();
            $('#home').hide();
        });
        app_router.on('route:defaultRoute', function(actions){
            checkAuthorization.call(this);
        });
        
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});