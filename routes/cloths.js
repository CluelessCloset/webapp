var darksky = require("../controllers/darksky.controller"),
    clarafai = require("../controllers/clarafai.controller"),
    clothes = require("../controllers/clothes.controller");

module.exports = function (app) {
    app.route('/weatherClothes').get(darksky.getWeather);
    app.route('/styleClothes').get(clarafai.getUgly);
    app.route('/getAllClothes').get(clothes.getAll);
    app.route('/getClothes').get(clothes.getOutfit);
}
