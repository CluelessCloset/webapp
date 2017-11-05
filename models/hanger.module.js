var mongoose = require('mongoose');

// Define Hanger Schema
var HangerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    hanger: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    selected: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Hanger', HangerSchema);
