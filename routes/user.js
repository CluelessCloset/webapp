var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer = require('multer');

var Clothes = require('../models/clothes');

//Get main page once logged in
//From here all available actions are able to be viewed
router.get('/', function(req, res){
	var accessories_list = [];
	var tops_list = [];
	var bottoms_list = [];
	var user_clothes = Clothes.find({"owner_email": "dan.kirichok@gmail.com" }, function(err, results){
		console.log(results);
		//Accounts for when there are zero results
		if (results.length > 0){
			for (var i = 0; i < results.length; i++){
				
				//This section sorts all of the users clothes between the three categories
				if (results[i].clothing_type === 'Accessory'){
					accessories_list.push(results[i]);
					
					//Check is done to only make first element appear active
					if (accessories_list.length == 1){
						accessories_list[0].isActive = true;
					}
					
					
				}else if (results[i].clothing_type === 'Top'){
					tops_list.push(results[i]);
					
					//Check is done to only make first element appear active
					if (tops_list.length == 1){
						tops_list[0].isActive = true;
					}
					
				}else{
					bottoms_list.push(results[i]);
					
					//Check is done to only make first element appear active
					if (bottoms_list.length == 1){
						bottoms_list[0].isActive = true;
					}
				}
				
				if (i == results.length - 1){
					var context = {
						accessories_list: accessories_list,
						tops_list: tops_list,
						bottoms_list: bottoms_list,
					}
		
					res.render('main', context);
				}
			}
		}else{
			var context = {
			}

			res.render('main', context);
		}
	});
});

var upload = multer({ dest: 'public/clothes_images'});

router.post('/add_clothes', upload.single('img_url'), function(req, res){
	//Gets all of form input and stores it into variables
	var name = req.body.clothing_name;
	var clothing_type = req.body.clothing_type;
	var warmth_rating = req.body.warmth_rating;
	var water_resistant = req.body.water_resistant;
	//var email = ;
	
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
			owner_email: "dan.kirichok@gmail.com",
		});
		
		Clothes.createClothes(newClothes, function(err, clothes){
			if (err) throw err;
		});
		
		req.flash('success_msg', 'You have successfully added clothes to your closest!')
		
		res.redirect('/user');
	}
});

module.exports = router;
