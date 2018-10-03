package com.seifernet.wissen.model.finance;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Transaction {
	
	public enum TransactionType{
		INCOME,
		EXPENSE
	}
	
	@Id
	private String id;
	
	private String owner;
	
	private Double value;
	
	private String description;
	
	private TransactionType type;
	
	private Date date;
	
	public Transaction() {
		
	}
	
	public Transaction(String owner, Double value, String description, TransactionType type, Date date) {
		super();
		this.owner = owner;
		this.value = value;
		this.description = description;
		this.type = type;
		this.date = date;
	}
	
	@Override
	public String toString() {
		return this.description + " / " + this.value + " / " + this.date; 
	}

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

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public TransactionType getType() {
		return type;
	}

	public void setType(TransactionType type) {
		this.type = type;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
}
