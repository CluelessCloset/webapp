var Cloths = require ('../models/clothes');
var hanger = require ('../models/hanger.module')

exports.getOutfit = function (req, res) {
    var accessories_list = [];
    var tops_list = [];
    var bottoms_list = [];
    var user_clothes = Cloths.find({"owner_email": req.query.email}, function (err, results) {
        if (results.length > 0) {
            for (var i = 0; i < results.length; ++i) {
                if (results[i].clothing_type === 'Accessory') {
                    accessories_list.push(results[i]);

                    if (accessories_list.length == 1) {
                        accessories_list[0].isActive = true;
                    }
                } else if (results[i].clothing_type == 'Top') {
                    tops_list.push(results[i]);
                    if (tops_list.length == 1) {
                        tops_list[0].isActive = true;
                    }
                } else {
                    bottoms_list.push(results[i]);
                    if (bottoms_list.length == 1) {
                        bottoms_list[0].isActive = true;
                    }
                }

                if (i == results.length - 1) {
                    var context = {
                        accessory: accessories_list[Math.floor(Math.random() * accessories_list.length)],
                        tops: tops_list[Math.floor(Math.random() * tops_list.length)],
                        bottoms: bottoms_list[Math.floor(Math.random() * bottoms_list.length)]
                    }

                    res.json(context);
                }
            }
        } else {
            res.json({"status" : "failed"});
        }
    });
}


exports.getAll = function (req, res) {
    var accessories_list = [];
    var tops_list = [];
    var bottoms_list = [];
    var user_clothes = Cloths.find({"owner_email": req.query.email}, function (err, results) {
        if (results.length > 0) {
            for (var i = 0; i < results.length; ++i) {
                if (results[i].clothing_type === 'Accessory') {
                    accessories_list.push(results[i]);

                    if (accessories_list.length == 1) {
                        accessories_list[0].isActive = true;
                    }
                } else if (results[i].clothing_type == 'Top') {
                    tops_list.push(results[i]);
                    if (tops_list.length == 1) {
                        tops_list[0].isActive = true;
                    }
                } else {
                    bottoms_list.push(results[i]);
                    if (bottoms_list.length == 1) {
                        bottoms_list[0].isActive = true;
                    }
                }

                if (i == results.length - 1) {
                    var context = {
                        accessories_list: accessories_list,
                        tops_list: tops_list,
                        bottoms_list: bottoms_list
                    }

                    res.json(context);
                }
            }
        } else {
            res.json({"status" : "failed"});
        }
    });
}
