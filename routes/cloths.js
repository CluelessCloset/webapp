var darksky = require("../controllers/darksky.controller");

module.exports = function (app) {
    app.route('/cloths').get(darksky.getWeather);
}
