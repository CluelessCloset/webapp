var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');

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

app.use('/', routes);
app.use('/user', user);

// Sets port to either the preset environment port
// If no preset, then defaults to port 3000
app.set('port', (process.env.PORT || 3000));

//Starts server
app.listen(app.get('port'), function(){
	console.log('Server started on port ' + app.get('port'));
});
