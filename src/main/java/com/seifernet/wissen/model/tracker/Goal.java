package com.seifernet.wissen.model.tracker;

import java.util.Date;

import org.springframework.data.annotation.Id;

public class Goal {
	
	@Id
	private String id;
	
	private String title;
	
	private Date date;
	
	private String owner;
	
	private Boolean active;

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

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
}
