package com.seifernet.wissen.model.tracker;

import org.springframework.data.annotation.Id;

public class SubTask {
	
	@Id
	private String id;
	
	private Boolean completed;
	
	private String title;
	
	private Long orderIndex;
	
	public String getId(){
		return id;
	}
	
	public void setId(String id){
		this.id = id;
	}
	
	public String getTitle(){
		return title;
	}
	
	public void setTitle(String title){
		this.title = title;
	}
	
	public Boolean isCompleted(){
		return completed;
	}
	
	public void setCompleted(Boolean completed){
		this.completed = completed;
	}
	
	public void setOrderIndex(Long orderIndex){
		this.orderIndex = orderIndex;
	}
	
	public Long getOrderIndex(){
		return orderIndex;
	}
}
