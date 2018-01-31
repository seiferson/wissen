package com.seifernet.wissen.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;

import com.fasterxml.jackson.annotation.JsonInclude;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Task{

	@Id
	private String id;
	
	private String title;
	
	private Boolean descriptionRequired;
	
	private String description;
	
	private Date dueDate;
	
	private Boolean completed;
	
	private Date completionDate;
	
	private Date creationDate;
	
	private Boolean expires;
	
	private Date expirationDate;
	
	private Boolean active;
	
	private Boolean containsSubTasks;
	
	private Boolean orderedSubTasks;
	
	private List<SubTask> subTaskList;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	public List<SubTask> getSubTaskList(){
		return subTaskList;
	}
	
	public void setSubTaskList(List<SubTask> subTaskList){
		this.subTaskList = subTaskList;
	}
	
	public Boolean getContainsSubTasks(){
		return this.containsSubTasks;
	}
	
	public void setContainsSubTasks(Boolean containsSubTasks){
		this.containsSubTasks = containsSubTasks;
	}
	
	public Boolean getOrderedSubTasks(){
		return this.orderedSubTasks;
	}
	
	public void setOrderedSubTasks(Boolean orderedSubTasks){
		this.orderedSubTasks = orderedSubTasks;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Boolean getDescriptionRequired() {
		return descriptionRequired;
	}

	public void setDescriptionRequired(Boolean descriptionRequired) {
		this.descriptionRequired = descriptionRequired;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getDueDate() {
		return dueDate;
	}

	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}

	public Boolean getCompleted() {
		return completed;
	}

	public void setCompleted(Boolean completed) {
		this.completed = completed;
	}

	public Date getCompletionDate() {
		return completionDate;
	}

	public void setCompletionDate(Date completionDate) {
		this.completionDate = completionDate;
	}

	public Boolean getExpires() {
		return expires;
	}

	public void setExpires(Boolean expires) {
		this.expires = expires;
	}

	public Date getExpirationDate() {
		return expirationDate;
	}

	public void setExpirationDate(Date expirationDate) {
		this.expirationDate = expirationDate;
	}
	
	public void setActive(Boolean active){
		this.active = active;
	}
	
	public Boolean isActive(){
		return active;
	}
	
	public Date getCreationDate(){
		return creationDate;
	}
	
	public void setCreationDate(Date creationDate){
		this.creationDate = creationDate;
	}
}
