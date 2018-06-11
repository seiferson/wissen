package com.seifernet.wissen.model;

import org.springframework.data.annotation.Id;

public class ScheduledTask {

	@Id
	private String id;
	
	private Long expirationTime;
	
	private Long dueTime;
	
	private String owner;
	
	private String title;
	
	private String description;
	
	public void setId(String id){
		this.id = id;
	}
	
	public String getId(){
		return this.id;
	}

	public Long getExpirationTime() {
		return expirationTime;
	}

	public void setExpirationTime(Long expirationTime) {
		this.expirationTime = expirationTime;
	}

	public Long getDueTime() {
		return dueTime;
	}

	public void setDueTime(Long dueTime) {
		this.dueTime = dueTime;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
}