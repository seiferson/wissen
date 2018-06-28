package com.seifernet.wissen.model.rpg;

import com.seifernet.wissen.rpg.Element;

public class Character extends Entity{
	
	private String name;
	
	private int level;
	private int currentHitPoints;
	private int currentSkillPoints;
	
	private int strength;
	private int dexterity;
	private int magic;
	private int agility;
	private int vitality;
	private int luck;
	
	private Element mainElement;
	private Element subElement;
	
	public Character(){
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public int getCurrentHitPoints() {
		return currentHitPoints;
	}

	public void setCurrentHitPoints(int currentHitPoints) {
		this.currentHitPoints = currentHitPoints;
	}

	public int getCurrentSkillPoints() {
		return currentSkillPoints;
	}

	public void setCurrentSkillPoints(int currentSkillPoints) {
		this.currentSkillPoints = currentSkillPoints;
	}

	public int getStrength() {
		return strength;
	}

	public void setStrength(int strength) {
		this.strength = strength;
	}

	public int getDexterity() {
		return dexterity;
	}

	public void setDexterity(int dexterity) {
		this.dexterity = dexterity;
	}

	public int getMagic() {
		return magic;
	}

	public void setMagic(int magic) {
		this.magic = magic;
	}

	public int getAgility() {
		return agility;
	}

	public void setAgility(int agility) {
		this.agility = agility;
	}

	public int getVitality() {
		return vitality;
	}

	public void setVitality(int vitality) {
		this.vitality = vitality;
	}

	public int getLuck() {
		return luck;
	}

	public void setLuck(int luck) {
		this.luck = luck;
	}

	public Element getMainElement() {
		return mainElement;
	}

	public void setMainElement(Element mainElement) {
		this.mainElement = mainElement;
	}

	public Element getSubElement() {
		return subElement;
	}

	public void setSubElement(Element subElement) {
		this.subElement = subElement;
	}
	
	
	
	
	
	
	
	
}
