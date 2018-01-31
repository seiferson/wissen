package com.seifernet.wissen.rpg;

public class Damage {
	
	private DamageType type;
	private int amount;
	private Element element;
	private double criticalRate;
	
	public Damage(DamageType type, int amount, Element element, double criticalRate){
		this.type = type;
		this.amount = amount;
		this.element = element;
		this.criticalRate = criticalRate;
	}
	
	public DamageType getDamageType(){
		return type;
	}
	
	public int getAmount(){
		return amount;
	}
	
	public Element getElement(){
		return element;
	}
	
	public double getCriticalRate(){
		return criticalRate;
	}
}
