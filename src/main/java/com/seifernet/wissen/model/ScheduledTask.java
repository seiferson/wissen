package com.seifernet.wissen.model;

import org.springframework.data.annotation.Id;

public class ScheduledTask {

	@Id
	private String id;
	
	private Task task;
	
	public void setId(String id){
		this.id = id;
	}
	
	public String getId(){
		return this.id;
	}
	
	public Task getTask(){
		return this.task;
	}
	
	public void setTask(Task task){
		this.task = task;
	}
}