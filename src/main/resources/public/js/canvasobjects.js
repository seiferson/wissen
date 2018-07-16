var MAIN_CHARACTER = 0;
var BACKGROUND_TILE = 1;
var CAULDRON_SPRITE = 2;

var objects = [];

objects[MAIN_CHARACTER] = {
	context : null,
	resource : CHARACTER,
	sizeX : 84,
	sizeY : 84,
	currentPosX : 32,
	currentPosY : 32,
	ticksPerFrame : 7,
	frameIndex : 0,
	tickCount : 0,
	currentmap : null,
	direction : "center",
	init : function(context){
		this.context = context;
		var that = this;
		layers[OBJECTS].push(this);
		this.currentmap = resources[this.resource].spritemap.standing;
		
		events[A_KEY].push(function(){
			if(that.currentPosX > BORDER_SIZE)
				that.currentPosX -= STEP_SIZE;
			
			if(that.direction != "left"){
				that.direction = "left";
				that.currentmap = resources[that.resource].spritemap.left;
				that.frameIndex = 0;
			}
		});
		events[W_KEY].push(function(){
			if(that.currentPosY > BORDER_SIZE)
				that.currentPosY -= STEP_SIZE;
			if(that.direction != "up"){
				that.direction = "up";
				that.currentmap = resources[that.resource].spritemap.up;
				that.frameIndex = 0;
			}
		});
		events[D_KEY].push(function(){
			if(that.currentPosX < MAP_SIZE_X - that.sizeX - BORDER_SIZE)
				that.currentPosX += STEP_SIZE;
			if(that.direction != "right"){
				that.direction = "right";
				that.currentmap = resources[that.resource].spritemap.right;
				that.frameIndex = 0;
			}
		});
		events[S_KEY].push(function(){
			if(that.currentPosY < MAP_SIZE_Y - that.sizeY - BORDER_SIZE)
				that.currentPosY += STEP_SIZE;
			if(that.direction != "down"){
				that.direction = "down";
				that.currentmap = resources[that.resource].spritemap.down;
				that.frameIndex = 0;
			}
		});
	},
	reset: function(){
		var that = this;
		setTimeout(function(){
			that.frameIndex = 0;
			that.currentmap = resources[that.resource].spritemap.standing;
			that.direction = "center";
		}, 200);
	},
	draw : function() {
		if(resources[this.resource].loaded)
			this.context.drawImage(
				resources[this.resource].object, 
				this.currentmap[this.frameIndex][0], 
				this.currentmap[this.frameIndex][1],
				this.sizeX,
				this.sizeY,
				this.currentPosX,
				this.currentPosY,
				80,
				80
			);
	},
	update : function() {
		this.tickCount += 1;
		if (this.tickCount > this.ticksPerFrame) {
			this.tickCount = 0;
			console.log(this.currentmap.length)
			if (this.frameIndex < this.currentmap.length - 1) {
				this.frameIndex += 1;
			} else {
				this.frameIndex = 0;
			}
		}
	}
};

objects[BACKGROUND_TILE] = {
	context : null,
	resource : TILESET,
	init : function(context){
		this.context = context;
		layers[BACKGROUND].push(this);
	},
	imageSizeX : 32,
	imageSizeY : 32,
	srcPosX : 96,
	srcPosY : 288,
	draw : function() {
		if(resources[this.resource].loaded){
			for(var i = 1; i < (MAP_SIZE_X / 32)-1; i++){
				for(var j = 1; j < (MAP_SIZE_Y / 32)-1; j ++){
					this.context.drawImage(
						resources[this.resource].object, 
						this.srcPosX, 
						this.srcPosY,
						this.imageSizeX,
						this.imageSizeY,
						i*32,
						j*32,
						this.imageSizeX,
						this.imageSizeY
					);
				}
			}
		}
	},
	update : function() {}
};

objects[CAULDRON_SPRITE] = {
	context : null,
	resource : CAULDRON,
	init : function(context){
		this.context = context;
		layers[FOREGROUND].push(this);
	},
	imageSizeX : 32,
	imageSizeY : 32,
	srcPosX : 0,
	srcPosY : 0,
	ticksPerFrame : 7,
	frameIndex : 0,
	frameSize : 3,
	tickCount : 0,
	draw : function() {
		if(resources[this.resource].loaded)
			this.context.drawImage(
				resources[this.resource].object, 
				this.srcPosX, 
				this.srcPosY + (this.frameIndex * this.imageSizeY),
				this.imageSizeX,
				this.imageSizeY,
				192,
				128,
				this.imageSizeX,
				this.imageSizeY
			);
	},
	update : function() {
		this.tickCount += 1;
		if (this.tickCount > this.ticksPerFrame) {
			this.tickCount = 0;
			if (this.frameIndex < this.frameSize) {
				this.frameIndex += 1;
			} else {
				this.frameIndex = 0;
			}
		}
	}
};