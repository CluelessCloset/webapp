process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./config/config');
var express = require('./config/express');
var mongoose = require('./config/mongoose');

var expressValidator = require('express-validator');

var db = mongoose(),
    app = express();

//Routes where functions for pages come from
//var routes = require('./routes/index');
//var user = require('./routes/user');


// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
		formParam += '[' + namespace.shift() + ']';
    }
    return {
		param : formParam,
		msg   : msg,
		value : value
	};
	}
}));

// Global Vars
// These are what show the messages at the top of a page after an action
app.use(function (req, res, next) {
	res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});


//Starts server
app.listen(config.port, function(){
    console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);
});
