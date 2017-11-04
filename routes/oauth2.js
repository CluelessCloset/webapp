var oauth2Controller = require('../controllers/oauth2.controller.js');

module.exports = function(app) {
    router.route('/oauth2/authorize')
        .get(authController.isAuthenticated, oauth2Controller.authorization)
        .post(authController.isAuthenticated, oauth2Controller.decision);

    router.route('/oauth2/token')
        .post(authController.isClientAuthenticated, oauth2Controller.token);
}
