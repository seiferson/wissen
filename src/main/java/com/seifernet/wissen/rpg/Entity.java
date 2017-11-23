package com.seifernet.wissen.rpg;

import org.springframework.data.annotation.Id;

/**
 *
 */
public abstract class Entity {
    
    private static final int HP_BASE = 100;
    
    @Id
    private String id;
    private String name;
    
    
    private int level;
	private int currentHitPoints;
	private int currentSkillPoints;
	
	private int strength;
	private int criticalRate;
	
	public Entity(String name, int level){
	    this.name = name;
	    this.level = level;
	}
	
	public void takeDamage(DamageType type, int maxAmount, Element element, double criticalRate){
	    int finalDamage = 0;
	    
	    //TODO Damage calculation
	    
	    if(currentSkillPoints - finalDamage < 0){
	        currentSkillPoints = 0;
	        //TODO Dead entity
	    } else {
	        currentSkillPoints -= finalDamage;
	    }
	}
	
	public int getMaxHitPoints(){
	    return (HP_BASE*level);
	}
	
	public String getName(){
	    return name;
	}
	
	public String getId(){
	    return id;
	}
	
	public void setName(String name){
	    this.name = name;
	}
	
	public void setId(String id){
	    this.id = id;
	}
	
}