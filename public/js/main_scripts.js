function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeOutfit(){
	
	var total_accesories = $("#accessories_slides").find(".item").length - 1;
	var total_shirts = $("#shirts_slides").find(".item").length - 1;
	var total_pants = $("#pants_slides").find(".item").length - 1;
	
	$("#accessories_slides").carousel(getRandomInt(0, total_accesories));
	$("#shirts_slides").carousel(getRandomInt(0, total_shirts));
	$("#pants_slides").carousel(getRandomInt(0, total_pants));
	console.log();
}
