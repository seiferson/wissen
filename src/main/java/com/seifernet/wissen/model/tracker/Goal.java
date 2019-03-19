package com.seifernet.wissen.model.tracker;

import java.util.Date;

import org.springframework.data.annotation.Id;

public class Goal {
	
	@Id
	private String id;
	
	private String title;
	
	private Date date;
	
	private String owner;
	
	private String state;
	
	private Integer priority;
	
	public Integer getPriority() {
		return priority;
	}
	
	public void setPriority(Integer priority) {
		this.priority = priority;
	}
	
	public String getState() {
		return state;
	}
	
	public void setState(String state) {
		this.state = state;	
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
}
