package com.seifernet.wissen.model;

import java.util.Date;

import org.springframework.data.annotation.Id;

/**
 * Flashcard data abstraction
 * 
 * @author Seifer ( Cuauhtemoc Herrera )
 * @version 0.0.1
 *
 */
public class Flashcard {

	@Id
	private String id;
	
	private Boolean enabled;
	private Date created;
	private Date update;
	private String question;
	private String answer;
	private String details;
	private String author;
	private String references;
	private String category;
	private Boolean shared;
	private String resource;
	
	/**
	 * 
	 */
	public Flashcard( ){
		this.enabled = true;
	}
	
	/**
	 * @param id
	 * @param enabled
	 * @param update
	 * @param question
	 * @param answer
	 * @param details
	 * @param author
	 * @param references
	 * @param category
	 * @param shared
	 * @param resource
	 */
	public Flashcard( String id, Boolean enabled, Date update, String question, String answer, String details,
					  String author, String references, String category, Boolean shared, String resource, Date created ) {
		this.id = id;
		this.enabled = enabled;
		this.update = update;
		this.question = question;
		this.answer = answer;
		this.details = details;
		this.author = author;
		this.references = references;
		this.category = category;
		this.shared = shared;
		this.resource = resource;
		this.created = created;
	}

	/**
	 * @param update
	 * @param question
	 * @param answer
	 * @param details
	 * @param author
	 * @param references
	 * @param category
	 * @param shared
	 * @param resource
	 */
	public Flashcard( String question, String answer, String details, String author, String references,
					  String category, Boolean shared, String resource ) {
		this.enabled = true;
		this.created = new Date( );
		this.update = new Date( );
		this.question = question;
		this.answer = answer;
		this.details = details;
		this.author = author;
		this.references = references;
		this.category = category;
		this.shared = shared;
		this.resource = resource;
	}

	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}
	/**
	 * @return the enabled
	 */
	public Boolean getEnabled() {
		return enabled;
	}
	/**
	 * @param enabled the enabled to set
	 */
	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}
	/**
	 * @return the update
	 */
	public Date getUpdate() {
		return update;
	}
	/**
	 * @param update the update to set
	 */
	public void setUpdate(Date update) {
		this.update = update;
	}
	/**
	 * @return the question
	 */
	public String getQuestion() {
		return question;
	}
	/**
	 * @param question the question to set
	 */
	public void setQuestion(String question) {
		this.question = question;
	}
	/**
	 * @return the answer
	 */
	public String getAnswer() {
		return answer;
	}
	/**
	 * @param answer the answer to set
	 */
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	/**
	 * @return the details
	 */
	public String getDetails() {
		return details;
	}
	/**
	 * @param details the details to set
	 */
	public void setDetails(String details) {
		this.details = details;
	}
	/**
	 * @return the author
	 */
	public String getAuthor() {
		return author;
	}
	/**
	 * @param author the author to set
	 */
	public void setAuthor(String author) {
		this.author = author;
	}
	/**
	 * @return the references
	 */
	public String getReferences() {
		return references;
	}
	/**
	 * @param references the references to set
	 */
	public void setReferences(String references) {
		this.references = references;
	}

	/**
	 * @return the category
	 */
	public String getCategory() {
		return category;
	}

	/**
	 * @param topic the category to set
	 */
	public void setCategory(String category) {
		this.category = category;
	}



	/**
	 * @return the shared
	 */
	public Boolean getShared() {
		return shared;
	}



	/**
	 * @param shared the shared to set
	 */
	public void setShared(Boolean shared) {
		this.shared = shared;
	}



	/**
	 * @return the resource
	 */
	public String getResource() {
		return resource;
	}



	/**
	 * @param resource the resource to set
	 */
	public void setResource(String resource) {
		this.resource = resource;
	}

	/**
	 * @return the created
	 */
	public Date getCreated() {
		return created;
	}

	/**
	 * @param created the created to set
	 */
	public void setCreated(Date created) {
		this.created = created;
	}

}
