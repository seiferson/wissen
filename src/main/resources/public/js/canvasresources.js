const CHARACTER = 0;
const TILESET = 1;
const CAULDRON = 2;

var resources = [];

resources[CHARACTER] = {
	type : "image",
	src : "/img/character.png",
	loaded : false,
	object : null,
	spritemap : {
		standing : [ 
			[0,0],
			[84,0],
			[168,0],
			[252,0]
		],
		down : [
			[336,0],
			[420,0],
			[504,0],
			[588,0],
			[0,84]
		],
		up : [
			[84,84],
			[168,84],
			[252,84],
			[336,84],
			[420,84]
		],
		right : [
			[504,84],
			[588,84],
			[0,168],
			[84,168],
			[168,168],
			[252,168]
		],
		left : [
			[336,168],
			[420,168],
			[504,168],
			[588,168],
			[0,252],
			[84,252]
		]
	}
};

resources[TILESET] = {
	type : "image",
	src : "/img/tileset.png",
	loaded : false,
	object : null
};

resources[CAULDRON] = {
	type : "image",
	src : "/img/boil.png",
	loaded : false,
	object : null
};

function loadResources(){
	resources.forEach(function(element){
		if(element.type == "image"){
			element.object = new Image();
			element.object.src = element.src;
			element.object.addEventListener("load", function(){	
				element.loaded = true;
			});
		}
	});
}
	
