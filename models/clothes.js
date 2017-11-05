var mongoose = require('mongoose');

var ClothesSchema = mongoose.Schema({
	name: {
		type: String,
	},
	
	owner_email: {
		type: String,
	},
	
	clothing_type: {
		type: String,
	},
	
	//Name of image inside clothes_images folder
	image: {
		type: String,
	},
	
	warmth: {
		type: Number,
		default: 5,
	},
	
	rain_resistant: {
		type: Boolean,
		default: false,
	},
	
});

var Clothes = module.exports = mongoose.model('Clothes', ClothesSchema);

module.exports.createClothes = function(Clothes, callback){
	Clothes.save(callback, function(callback, err){
		if (err) throw err;
	});
}
