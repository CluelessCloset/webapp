process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./config/config');
var express = require('./config/express');
var path = require('path');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('./config/passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('./config/mongoose');
var mongo = require('mongodb');
//Routes where functions for pages come from
// Initializes App
var db = mongoose(),
    app = express(),
    passport = passport();

//Starts server
app.listen(config.port, function(){
    console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);
});
