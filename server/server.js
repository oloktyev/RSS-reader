"use strict";

var express = require('express'),
    passport = require('passport'),
    auth = require('./auth'),
    router = require('./router');

var app = module.exports = express();

auth.configure();

//app.set('view engine', 'html');

app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.compress());
    app.use(express.bodyParser());
    //app.use(express.methodOverride());
    app.use(express.cookieParser());
    //app.use(express.session({ secret: 'auth-google' }));
    //app.use(passport.initialize());
    //app.use(passport.session());
    app.use(app.router);
    app.use(express.static('../public'));
});

router(app);

app.listen(3000);
console.log('Listening on port 3000...');