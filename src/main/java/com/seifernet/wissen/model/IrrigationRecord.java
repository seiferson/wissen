package com.seifernet.wissen.model;

import java.util.Date;

import org.springframework.data.annotation.Id;

/**
 * 
 * @author Seiferson (Cuauhtemoc Herrera)
 */
public class IrrigationRecord {
	
	@Id
	private String id;
	
	private Date date;
	
	private String person;
	
	private String plant;
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getId() {
		return id;
	}
	
	public void setDate(Date date) {
		this.date = date;
	}
	
	public Date getDate() {
		return date;
	}
	
	public void setPerson(String person) {
		this.person = person;
	}
	
	public String getPerson() {
		return person;
	}
	
	public void setPlant(String plant) {
		this.plant = plant;
	}
	
	public String getPlant(){
		return plant;
	}
}
