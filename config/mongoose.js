var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);
    require('../models/users.module');
    require('../models/client.module');
    require('../models/code.module');
    require('../models/token.module');
    return db;
};
