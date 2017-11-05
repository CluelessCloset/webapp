var clarafai = require("../config/clarafai");

exports.getUgly = function(req, res) {
    clarafai.predictModel(req, res);
}
