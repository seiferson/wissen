package com.seifernet.wissen.model.tracker;

import java.util.Date;
import java.util.List;

import com.seifernet.wissen.model.Comment;
import org.springframework.data.annotation.Id;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Document
public class Task {

	@Id
	private String id;

	@NotBlank
	@Size(max=70)
	private String title;

	private String owner;
	private String description;
	private Date dueDate;
	private Date creationDate;
	private Date lastUpdate;
	private Boolean completed;
	private Date completionDate;
	private String category;

	private List<Comment> updates;

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Date getLastUpdate() {
		return this.lastUpdate;
	}

	public void setLastUpdate(Date lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	public void setOwner(String owner){
		this.owner = owner;
	}
	
	public String getOwner(){
		return owner;
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
	
	public Date getCreationDate(){
		return creationDate;
	}
	
	public void setCreationDate(Date creationDate){
		this.creationDate = creationDate;
	}

	public List<Comment> getUpdates() {
		return updates;
	}

	public void setUpdates(List<Comment> updates) {
		this.updates = updates;
	}
}
