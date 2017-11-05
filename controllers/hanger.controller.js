var Hanger = require('mongoose').model('Hanger');

exports.poll = function(req, res) {
    Hanger.findOne({
        email: req.query.email,
        selected: true
    },
    function(err, hanger) {
        if (err) {
            return res.json((err));
        } else {
            return res.json({"hanger": hanger.hanger});
        }
    });
}

exports.create = function(req, res, next) {
    console.log(req.body);
    var hanger = new Hanger(req.body);
    hanger.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(hanger);
        }
    });
}

exports.update = function(req, res) {
    Hanger.findOneAndUpdate({
        email: req.body.email,
        name: req.body.name
    }, { $set: req.body },
    {upsert: true}, function(err, hanger) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(hanger);
        }
    });
}

exports.delete = function(req, res) {
    req.body.hanger.remove(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(req.body.hanger);
        }
    });
}
