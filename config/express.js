var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    exphbs = require('express-handlebars'),
    passport = require('passport'),
    flash = require('connect-flash'),
    session = require('express-session');

module.exports = function() {
    var app = express();

    app.use(bodyParser.urlencoded({
       extended: true
    }));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

    app.use(flash());

    // View Engine
    app.set('views', path.join(__dirname, 'views'));
    app.engine('handlebars', exphbs({defaultLayout:'layout'}));
    app.set('view engine', 'handlebars');

    app.use(express.static(path.join(__dirname, 'public')));

    //initialize passport
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: 'testCookie'
    }));

    require('../routes/index.js')(app);
    require('../routes/client.js')(app);
    require('../routes/users.js')(app);
    require('../routes/cloths.js')(app);
    require('../routes/hanger.js')(app);

    return app;
};
