package com.seifernet.wissen.model.tracker;

import java.util.Date;

import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.Id;

import com.fasterxml.jackson.annotation.JsonInclude;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Task{

	@Id
	private String id;
	
	@NotBlank
	private String title;
	
	private String owner;
	
	private Boolean descriptionRequired;
	
	private String description;
	
	private Date dueDate;
	
	private Boolean completed;
	
	private Date completionDate;
	
	private Date creationDate;
	
	private Boolean expires;
	
	private Date expirationDate;
	
	private Boolean expired;
	
	private Long priority;
	
	public Long getPriority() {
		return priority;
	}

	public void setPriority(Long priority) {
		this.priority = priority;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	public String getIdentifier(){
		return id;
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
	
	public Date getCreationDate(){
		return creationDate;
	}
	
	public void setCreationDate(Date creationDate){
		this.creationDate = creationDate;
	}

	public Boolean getExpired() {
		return expired;
	}

	public void setExpired(Boolean expired) {
		this.expired = expired;
	}
}
