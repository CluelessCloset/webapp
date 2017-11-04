var mongoose = require('mongoose');

var ClothesSchema = mongoose.Schema({
	name: {
		type: String,
	},
	
	owner_email: {
		type: String,
		email: true,
	},
	
	clothing_type: {
		type: String,
	},
	
	image: {
		contentType: String,
		data: Buffer, 
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
	Clothes.save(callback);
}

