var objects = [];

objects["maincharacter"] = {
	context : null,
	resource : "character",
	sizeX : 84,
	sizeY : 84,
	srcPosX : 0,
	srcPosY : 0,
	currentPosX : 32,
	currentPosY : 32,
	ticksPerFrame : 7,
	frameIndex : 0,
	frameSize : 3,
	tickCount : 0,
	direction : "center",
	init : function(context){
		this.context = context;
		var that = this;
		layers[OBJECTS].push(this);
		
		events[A_KEY].push(function(){
			if(that.currentPosX > BORDER_SIZE)
				that.currentPosX -= STEP_SIZE;
			that.srcPosX = 336;
			that.srcPosY = 168;
			if(that.direction != "left"){
				that.direction = "left";
				that.frameIndex = 0;
			}
		});
		events[W_KEY].push(function(){
			if(that.currentPosY > BORDER_SIZE)
				that.currentPosY -= STEP_SIZE;
			that.srcPosX = 84;
			that.srcPosY = 84;
			if(that.direction != "up"){
				that.direction = "up";
				that.frameIndex = 0;
			}
		});
		events[D_KEY].push(function(){
			if(that.currentPosX < MAP_SIZE_X - that.sizeX - BORDER_SIZE)
				that.currentPosX += STEP_SIZE;
			that.srcPosX = 0;
			that.srcPosY = 168;
			if(that.direction != "right"){
				that.direction = "right";
				that.frameIndex = 0;
			}
		});
		events[S_KEY].push(function(){
			if(that.currentPosY < MAP_SIZE_Y - that.sizeY - BORDER_SIZE)
				that.currentPosY += STEP_SIZE;
			that.srcPosX = 336;
			that.srcPosY = 0;
			if(that.direction != "down"){
				that.direction = "down";
				that.frameIndex = 0;
			}
		});
	},
	reset: function(){
		var that = this;
		setTimeout(function(){
			that.srcPosX = 0;
			that.srcPosY = 0;
			that.frameIndex = 0;
			that.direction = "center";
		}, 200);
	},
	draw : function() {
		if(resources[this.resource].loaded)
			this.context.drawImage(
				resources[this.resource].object, 
				this.srcPosX + (this.frameIndex * this.sizeX), 
				this.srcPosY,
				this.sizeX,
				this.sizeY,
				this.currentPosX,
				this.currentPosY,
				64,
				64
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

objects["background"] = {
	context : null,
	resource : "tileset",
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

objects["cauldron"] = {
	context : null,
	resource : "cauldron",
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