"use strict";

var passport = require('passport'),
    data = require('./data');

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/auth/google');
}

module.exports = function(app) {
    app.get('/');

    app.get('/auth/google', passport.authenticate('google'));

    app.get('/auth/google/return',
        passport.authenticate('google', { successRedirect: '/',
            failureRedirect: 'http://localhost:3000/error.html' }));

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });

    app.get('/data', data.findAll);

    app.get('/data/:id', data.findById);
}