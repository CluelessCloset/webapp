var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer = require('multer');

var Clothes = require('../models/clothes');

//Get main page once logged in
//From here all available actions are able to be viewed
router.get('/', function(req, res){
	
	
	res.render('main');
});

var upload = multer({ dest: 'public/clothes_images'});

router.post('/add_clothes', upload.single('img_url'), function(req, res){
	//Gets all of form input and stores it into variables
	var name = req.body.clothing_name;
	var clothing_type = req.body.clothing_type;
	var warmth_rating = req.body.warmth_rating;
	var water_resistant = req.body.water_resistant;
	var image = req.body.img_url;
	
	/*
	 * USER EMAIL WILL EVENTUALLY BE CHANGED TO 
	 * ACTUAL EMAIL ONCE ALL CONNECTED
	 */
	var email = "test@gmail.com";
	
	req.checkBody('name', 'Clothing name is required!');
	req.checkBody('clothing_type', 'Clothing type is required!');
	req.checkBody('warmth_rating', 'Please select a warmth rating!');
	req.checkBody('water_resistant', 'Please select water resistancy!');
	
	var errors = req.validationErrors();
		
	if(errors){
		res.render('/user', {
			errors: errors,
		});
	}else{
		var newClothes = new Clothes({
			name: name,
			clothing_type: clothing_type,
			warmth_rating: warmth_rating,
			water_resistant : water_resistant,
			image: req.file.filename,
			email: email,
		});
		
		Clothes.createClothes(newClothes, function(err, clothes){
			if (err) throw err;
		});
		
		req.flash('success_msg', 'You have successfully added clothes to your closest!')
		
		res.redirect('/user');
	}
})

module.exports = router;
