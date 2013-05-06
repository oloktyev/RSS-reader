"use strict";

var passport = require('passport'),
    GoogleStrategy = require('passport-google').Strategy;

function configure() {
    passport.use(new GoogleStrategy({
        returnURL: 'http://localhost:3000/auth/google/return',
        realm: 'http://localhost:3000/'
    }, function(identifier, profile, done) {
        return done(null, profile);
    }));

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });
}

exports.configure = configure