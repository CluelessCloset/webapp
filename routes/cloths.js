var darksky = require("../controllers/darksky.controller"),
    clarafai = require("../controllers/clarafai.controller");

module.exports = function (app) {
    app.route('/weatherCloths').get(darksky.getWeather);
    app.route('/styleCloths').get(clarafai.getUgly);
}
