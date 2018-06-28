package com.seifernet.wissen.model.rpg;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Space {
	
	@Id
	private String id;
	
	@Indexed(unique=true)
	private String name;
	
	private int limitx;
	
	private int limity;
	
	
	public void setId(String id){
		this.id = id;
	}
	
	public void setName(String name){
		this.name = name;
	}
	
	public void setLimitx(int limitx){
		this.limitx = limitx;
	}
	
	public void setLimity(int limity){
		this.limity = limity;
	}
	
	public String getId(){
		return id;
	}
	
	public String getName(){
		return name;
	}
	
	public int getLimitx(){
		return limitx;
	}
	
	public int getLimity(){
		return limity;
	}
	
}
