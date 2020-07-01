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

	@NotNull
	private Date date;

	@NotBlank
	private String owner;

	@DecimalMin("0.01")
	@NotNull
	private Double amount;

	@NotBlank
	private String description;

	@NotNull
	private TransactionType type;

	private String account;
	private String targetAccount;
	private String category;

	public Transaction(Date date,String owner, Double amount, String description, TransactionType type) {
		this.date = date;
		this.owner = owner;
		this.amount = amount;
		this.description = description;
		this.type = type;
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

	public String getAccount() {
		return account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	public String getTargetAccount() {
		return targetAccount;
	}

	public void setTargetAccount(String targetAccount) {
		this.targetAccount = targetAccount;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
}