package com.seifernet.wissen.model.tracker;

import java.util.Date;

import org.springframework.data.annotation.Id;

public class ActivityLogEntry {
	
	@Id
	private String id;
	
	private String owner;
	
	private Date date;
	
	private String activity;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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

	public String getActivity() {
		return activity;
	}

	public void setActivity(String activity) {
		this.activity = activity;
	}
	
	
}
