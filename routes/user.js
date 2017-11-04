var express = require('express');
var router = express.Router();

//Get main page once logged in
//From here all available actions are able to be viewed
router.get('/', function(req, res){
	res.render('main');
});

module.exports = router;
