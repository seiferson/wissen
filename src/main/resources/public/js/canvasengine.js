const A_KEY = 97;
const W_KEY = 119;
const D_KEY = 100;
const S_KEY = 115;

var registeredKeys = [
	97, 119, 100, 115
];

const MAP_SIZE_X = 640;
const MAP_SIZE_Y = 480;
const BORDER_SIZE = 32;
const STEP_SIZE = 8;

var events = [];
events[A_KEY] = [];
events[W_KEY] = [];
events[D_KEY] = [];
events[S_KEY] = [];

const BACKGROUND = 0;
const FOREGROUND = 1;
const OBJECTS = 2;
const LAYER_SIZE = 3;

var layers = [];
layers[BACKGROUND] = [];
layers[FOREGROUND] = [];
layers[OBJECTS] = [];

function render(context){
	context.clearRect(32, 32, MAP_SIZE_X - 64, MAP_SIZE_Y - 64);

	for(var i = 0; i < LAYER_SIZE; i++){
		for(var j = 0; j < layers[i].length; j++){
			layers[i][j].update();
			layers[i][j].draw();
		}
	}
}

function init(context){
	objects.forEach(function(element){
		element.init(context);
	});
}

$("body").keypress(
	function(event) {
		if(registeredKeys.includes(event.which)){
			event.preventDefault();
			for(var i = 0; i < events[event.which].length; i++){
				events[event.which][i]();
			}	
		}
	}
);

$("body").keyup(function(event) {
	event.preventDefault();
	objects[MAIN_CHARACTER].reset();
});