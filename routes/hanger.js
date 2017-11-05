var hanger = require('../controllers/hanger.controller.js')

module.exports = function (app) {
   app.route('/hanger').get(hanger.poll).post(hanger.create).put(hanger.update).delete(hanger.delete);
}
