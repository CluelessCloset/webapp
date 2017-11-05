function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeOutfit(){
	//Fetches the total amount of items in each carousel of clothes
	//Used in getting a random item from each category
	var total_accesories = $("#accessories_slides").find(".item").length - 1;
	var total_shirts = $("#shirts_slides").find(".item").length - 1;
	var total_pants = $("#pants_slides").find(".item").length - 1;
	
	//Switches each carousel to a random item
	$("#accessories_slides").carousel(getRandomInt(0, total_accesories));
	$("#shirts_slides").carousel(getRandomInt(0, total_shirts));
	$("#pants_slides").carousel(getRandomInt(0, total_pants));
	console.log();
}

window.onLoad = function(){
		// With JQuery
		$('#warmthInputSlider').slider({
			formatter: function(value) {
				return 'Current value: ' + value;
			}
		});
}
