var clientController = require('../controllers/client.controller'),
    authController = require('../controllers/auth.controller');


module.exports = function(app) {
    app.route('/clients')
        .post(authController.isAuthenticated, clientController.postClients)
        .get(authController.isAuthenticated, clientController.getClients);
}
