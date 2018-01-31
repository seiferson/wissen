package com.seifernet.wissen.model.rpg;

import org.springframework.data.annotation.Id;

import com.seifernet.wissen.rpg.Damage;
import com.seifernet.wissen.rpg.DamageType;
import com.seifernet.wissen.rpg.Dice;
import com.seifernet.wissen.rpg.Element;

public class Player {
	
	private static final int HP_BASE = 80;
	private static final int ATK_BASE = 10;
	
	@Id
	private String id;
	private String name;
	
	private int level;
	private int currentHitPoints;
	private int currentSkillPoints;
	
	private int strength;
	private double criticalRate;
	private Element element;
	
	public Player(String name, int level){
		this.name = name;
		this.level = level;
		criticalRate = 1.05;
		element = Element.NEUTRAL;
		strength = 1;
		currentHitPoints = HP_BASE+level*20;
	}
	
	public void takeDamage(Damage damage){
		int finalDamage = damage.getAmount();
		
		if(Dice.rollDice(20) == Dice.rollDice(20)){
			finalDamage = (int) Math.round(damage.getCriticalRate() * damage.getAmount());
			System.out.println("Crit");
		}
		
		if(currentHitPoints - finalDamage < 0){
			currentHitPoints = 0;
			System.out.println("GameOver");
		} else {
			currentHitPoints -= finalDamage;
		}
	}
	
	public Damage performBasicAttack(){
		int damageAmount = level * 5 + strength * 10 + ATK_BASE;
		return new Damage(DamageType.PHYSICAL, damageAmount, element, criticalRate);
	}
	
	public int getMaxHitPoints(){
		return (HP_BASE+level*20);
	}
	
	public int getCurrentHitPoints(){
		return this.currentHitPoints;
	}
	
	public int getCurrentSkillPoints(){
		return currentSkillPoints;
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
