package com.seifernet.wissen.model.rpg;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Equipment extends Item{
	
	@Id
	private String id;
	private int bonus;
	private EquipmentType type;
	
	public enum EquipmentType{
		RING,
		NECKLACE,
		GARMENT,
		ARMOR,
		SHOES,
		GLOVES
	}


	public int getBonus() {
		return bonus;
	}


	public void setBonus(int bonus) {
		this.bonus = bonus;
	}


	public EquipmentType getType() {
		return type;
	}


	public void setType(EquipmentType type) {
		this.type = type;
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}
}
