module.exports = function(app) {
    var index = require('../controllers/index.controller');

    //Get homepage
    app.get('/', index.render);
    
    //Get login page
    app.get('/login', function(req, res){
	    res.render('login');
    });

    //Get register page
    app.get('/register', function(req, res){
	    res.render('register');
    });
};
