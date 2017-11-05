process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./config/config');
var express = require('./config/express');
var mongoose = require('./config/mongoose');
var clarafai = require('./config/clarafai');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');

var flash = require('connect-flash');

var db = mongoose(),
    app = express();

app.use(flash());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
	
// Express Validator
// This has to stay below the middleware being made or else doesn't work
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

//Routes where functions for pages come from
//var routes = require('./routes/index');

//This is needed iin order to be able to use both user and users routes
//Otherwise does not work without combining files
var user = require('./routes/user');
app.use('/user', user);


// Global Vars
// These are what show the messages at the top of a page after an action
app.use(function (req, res, next) {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	res.locals.user = req.user || null;
	next();
});

clarafai.createModel();
	
//Starts server
app.listen(config.port, function(){
    console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);
});
