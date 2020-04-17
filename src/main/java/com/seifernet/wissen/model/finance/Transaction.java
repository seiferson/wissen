package com.seifernet.wissen.model.finance;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Document
public class Transaction {

	public enum TransactionType{
		INCOME,
		EXPENSE
	}
	
	@Id
	private String id;

	@NotBlank
	private String owner;

	@DecimalMin("0.0")
	@NotNull
	private Double amount;

	@NotBlank
	private String description;

	@NotNull
	private TransactionType type;

	@NotNull
	private Date date;

	private String icon;

	public Transaction(String owner, Double amount, String description, TransactionType type, Date date) {
		this.owner = owner;
		this.amount = amount;
		this.description = description;
		this.type = type;
		this.date = date;
		this.icon = icon;
	}

	public Transaction() {}

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

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
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

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}
}