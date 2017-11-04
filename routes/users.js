var users = require('../controllers/users.controller'),
    passport = require('passport');


module.exports = function(app) {
    app.route('/users/create').post(users.create);

    app.route('/users/:userId').get(users.read).put(users.update).delete(users.delete);

    app.param('email', users.userByID);

    app.route('/register')
        // .get(users.renderRegister)
        .post(users.register);

    app.route('/login')
        // .get(users.renderLogin)
        .post(users.generateToken);

    // app.('/logout', users.logout);
};
