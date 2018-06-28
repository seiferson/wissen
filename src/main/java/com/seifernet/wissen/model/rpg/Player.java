package com.seifernet.wissen.model.rpg;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.seifernet.wissen.model.rpg.Equipment.EquipmentType;

@Document
public class Player extends Character{
	
	@Id
	private String id;
	
	private int experience;
	private int goldCoins;
	
	private Equipment shoes;
	private Equipment garment;
	private Equipment armor;
	private Equipment gloves;
	private Equipment necklace;
	private Equipment rightRing;
	private Equipment leftRing;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public int getExperience() {
		return experience;
	}
	public void setExperience(int experience) {
		this.experience = experience;
	}
	public int getGoldCoins() {
		return goldCoins;
	}
	public void setGoldCoins(int goldCoins) {
		this.goldCoins = goldCoins;
	}
	public Equipment getShoes() {
		return shoes;
	}
	public void setShoes(Equipment shoes) {
		if(shoes!=null && shoes.getType() == EquipmentType.SHOES)
			this.shoes = shoes;
	}
	public Equipment getGarment() {
		return garment;
	}
	public void setGarment(Equipment garment) {
		if(garment!=null && garment.getType() == EquipmentType.GARMENT)
			this.garment = garment;
	}
	public Equipment getArmor() {
		return armor;
	}
	public void setArmor(Equipment armor) {
		if(armor!=null && armor.getType() == EquipmentType.ARMOR)
			this.armor = armor;
	}
	public Equipment getGloves() {
		return gloves;
	}
	public void setGloves(Equipment gloves) {
		if(gloves!=null && gloves.getType() == EquipmentType.GLOVES)
			this.gloves = gloves;
	}
	public Equipment getNecklace() {
		return necklace;
	}
	public void setNecklace(Equipment necklace) {
		if(necklace!=null && necklace.getType() == EquipmentType.NECKLACE)
			this.necklace = necklace;
	}
	public Equipment getRightRing() {
		return rightRing;
	}
	public void setRightRing(Equipment rightRing) {
		if(rightRing!=null && rightRing.getType() == EquipmentType.RING)
			this.rightRing = rightRing;
	}
	public Equipment getLeftRing() {
		return leftRing;
	}
	public void setLeftRing(Equipment leftRing) {
		if(leftRing!=null && leftRing.getType() == EquipmentType.RING)
			this.leftRing = leftRing;
	}
	
	
	
}
