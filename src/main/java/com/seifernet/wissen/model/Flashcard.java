package com.seifernet.wissen.model;

import java.util.Date;

import org.springframework.data.annotation.Id;

/**
 * Flashcard data abstraction
 * 
 * @author Seifer ( Cuauhtemoc Herrera )
 * @version 0.0.1
 * @since 0.0.1
 *
 */
public class Flashcard {

	@Id
	private String id;
	
	private Boolean enabled;
	private Date update;
	private String question;
	private String answer;
	private String details;
	private String author;
	private String references;
	
	/**
	 * 
	 */
	public Flashcard( ){
		
	}
	
	/**
	 * @param update
	 * @param question
	 * @param answer
	 * @param details
	 * @param author
	 * @param references
	 */
	public Flashcard( Date update, String question, String answer, String details, String author, String references ) {
		this.update = update;
		this.question = question;
		this.answer = answer;
		this.details = details;
		this.author = author;
		this.references = references;
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
	 */
	public Flashcard( String id, Boolean enabled, Date update, String question, String answer, String details, String author, String references ) {
		this.id = id;
		this.enabled = enabled;
		this.update = update;
		this.question = question;
		this.answer = answer;
		this.details = details;
		this.author = author;
		this.references = references;
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

}
