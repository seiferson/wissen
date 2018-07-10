var resources = [];

resources["character"] = {
	type : "image",
	src : "/img/character.png",
	loaded : false,
	object : null
};

resources["tileset"] = {
	type : "image",
	src : "/img/tileset.png",
	loaded : false,
	object : null
};

resources["cauldron"] = {
	type : "image",
	src : "/img/boil.png",
	loaded : false,
	object : null
};

function loadResources(){
	
	resources["character"].object = new Image();
	resources["character"].object.src = resources["character"].src;
	resources["character"].object.addEventListener("load", function(){
		resources["character"].loaded = true;
	});
	resources["tileset"].object = new Image();
	resources["tileset"].object.src = resources["tileset"].src;
	resources["tileset"].object.addEventListener("load", function(){	
		resources["tileset"].loaded = true;
	});
	resources["cauldron"].object = new Image();
	resources["cauldron"].object.src = resources["cauldron"].src;
	resources["cauldron"].object.addEventListener("load", function(){	
		resources["cauldron"].loaded = true;
	});
	
//	resources.forEach(function(element){
//		if(element.type == "image"){
//			console.log("ok");
//			element.object = new Image();
//			element.object.src = element.src;
//			element.addEventListener("load", function(){	
//				element.loaded = true;
//			});
//		}
//	});
}
	
