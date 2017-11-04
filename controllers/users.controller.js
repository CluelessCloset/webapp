var User = require('mongoose').model('User'),
    passport = require('passport'),
    jwt = require('jsonwebtoken');

exports.create = function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(user);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.user);
};

exports.userByID = function(req, res, next, _email) {
    User.findOne({
            email: _email
        },
        function(err, user) {
            if (err) {
                return next(err);
            }
            else {
                req.user = user;
                next();
            }
        }
    );
};

exports.update = function(req, res, next) {
    User.findOneAndUpdate({email: req.body.email}, req.body, function(err, user) {
        if (err) {
            return next(err);
        }
        else {
            res.json(user);
        }
    });
};

exports.delete = function(req, res, next) {
    User.findOneAndRemove({email: req.body.email}, function(err){
        if (err) {
            return next(err);
        }
        else {
            res.json(req.body);
        }
    });
};
//
// exports.renderLogin = function(req, res, next) {
//     if (!req.user) {
//         res.render('login', {
//             title: 'Log-in Form',
//             messages: req.flash('error') || req.flash('info')
//         });
//     }
//     else {
//         return res.redirect('/');
//     }
// };
//
// exports.renderRegister = function(req, res, next) {
//     if (!req.user) {
//         res.render('register', {
//             title: 'Register Form',
//             messages: req.flash('error')
//         });
//     }
//     else {
//         return res.redirect('/');
//     }
// };

exports.register = function(req, res, next) {
    if (!req.user) {
        var user = new User(req.body);
        var message = null;
        user.provider = 'local';
        user.save(function(err) {
            if (err) {
                console.log("here");

                return res.status(400).send('Error Registering');
            }

            req.login(user, function(err) {
                if (err) {
                    return res.status(401).send('Login failed');
                }

                return res.status(200).send('Login successfull');
            });
        });
    }
    else {
        return res.status(400).send('Login exists');
    }

}

exports.logout = function(req, res) {
    req.logout();
    res.redirect('/');
};


exports.generateToken = function(req, res) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            res.status(200).json({});
            return res.json(err);
        }
        req.token = jwt.sign({
            email: req.body.email,
        }, 'thisisasupersecretthing');

        User.findOneAndUpdate({email: req.body.email}, {token: req.token}, function(err, user) {
            if (err) {
                return res.json(err);
            }
            else {
                res.json(req.token);
            }
        });
    });
}

exports.respond = function(req, res) {
    res.status(200).json({
        email: req.body.email,
        token: req.token
    });
}
