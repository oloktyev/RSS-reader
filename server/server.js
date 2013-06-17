"use strict";
var http = require("http"),
    sys = require("sys"),
    url = require("url"),
    qs = require("querystring"),
    express = require('express'),
    passport = require('passport'),
    auth = require('./auth'),
    router = require('./router');

var ITEMS_BACKLOG = 20;

var urlMap = {
  '/real_time_feed' : function (req, res) {
    var since = parseInt(qs.parse(url.parse(req.url).query).since, 10);
    feed.query(since, function (data) {
      res.simpleJSON(200, data);
    });
  },
  '/send_feed_item' : function (req, res, json) {
    feed.appendMessage( json );
    res.simpleJSON(200, {});
  }
}

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