var User = require('mongoose').model('User');

exports.create = function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err) {
        if (err) {
            return next(err);
        } else {
			console.log("Initial req.session.email value: " + req.body.email);
			req.session.email = req.body.email;
            res.json(user);
        }
    });
};

exports.read = function(req, res) {
    re.json(req.user);
}

exports.userByID = function (req, res, next, id) {
    User.findOne({
        _id : id
    },
    function(err, user) {
        if (err) {
            return next(err);
        } else {
            req.user = user;
            next();
        }
    });
}

exports.update = function(req, res, next) {
    User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
        if (err) {
            return next(err);
        }
        else {
            res.json(user);
        }
    });
};

exports.delete = function(req, res, next) {
    req.user.remove(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(req.user);
        }
    })
};

exports.renderMain = function(req, res) {
	if (req.body.email){
		req.session.email = req.body.email;
		console.log("req.session.email changed to " + req.body.email)
    }
    res.redirect('/user/');
}


