var passport = require('passport'),
    mongoose = require('mongoose');

module.exports = function() {
    var User = mongoose.model('User');

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(_email, done) {
        User.findOne(
            {email: _email},
            '-password',
            function(err, user) {
                done(err, user);
            }
        );
    });

    require('./strategies/local.js')();
};
