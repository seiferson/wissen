package com.seifernet.wissen.model.rpg;

import org.springframework.data.annotation.Id;

public class MapBlock {
	
	@Id
	private String id;
	
	private enum MapBlockType{
		GRASS,
		SAND,
		WATER
	}
	
	private MapBlockType type;
	
	private int xCoordinate;
	
	private int yCoordinate;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public MapBlockType getType() {
		return type;
	}
	public void setType(MapBlockType type) {
		this.type = type;
	}
	public int getxCoordinate() {
		return xCoordinate;
	}
	public void setxCoordinate(int xCoordinate) {
		this.xCoordinate = xCoordinate;
	}
	public int getyCoordinate() {
		return yCoordinate;
	}
	public void setyCoordinate(int yCoordinate) {
		this.yCoordinate = yCoordinate;
	}
}
