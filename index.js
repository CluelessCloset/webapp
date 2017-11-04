var express = require('express');
var path = require('path');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost/cluelesscloset');
var db = mongoose.connection;

//Routes where functions for pages come from
var routes = require('./routes/index');
var user = require('./routes/user');

// Initializes App
var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

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

// Connect Flash
app.use(flash());

// Global Vars
// These are what show the messages at the top of a page after an action
app.use(function (req, res, next) {
	res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

app.use('/', routes);
app.use('/user', user);


// Sets port to either the preset environment port
// If no preset, then defaults to port 3000
app.set('port', (process.env.PORT || 3000));

//Starts server
app.listen(app.get('port'), function(){
	console.log('Server started on port ' + app.get('port'));
});
