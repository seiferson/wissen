package com.seifernet.wissen.model.rpg;

import java.util.HashMap;

import org.springframework.data.annotation.Id;

public class Map {

	@Id
	private String id;
	
	private HashMap<String, MapBlock> blockList;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public HashMap<String, MapBlock> getBlockList() {
		return blockList;
	}

	public void setBlockList(HashMap<String, MapBlock> blockList) {
		this.blockList = blockList;
	}
}
