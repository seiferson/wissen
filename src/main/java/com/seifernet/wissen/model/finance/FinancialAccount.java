package com.seifernet.wissen.model.finance;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Document
public class FinancialAccount {

    public enum FinancialAccountType {
		BANK_ACCOUNT,
        CREDIT_CARD,
        LOAN,
        RECURRENT_INCOME,
        RECURRENT_EXPENSE,
        SUB_ACCOUNT,
		INSTALLMENT
	}

    @Id
	private String id;

	@NotBlank
	private String owner;

	@NotBlank
	private String description;

	@NotNull
	private FinancialAccountType type;

	private String account;

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

	public FinancialAccountType getType() {
		return type;
	}

	public void setType(FinancialAccountType type) {
		this.type = type;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAccount() {
		return account;
	}

	public void setAccount(String account) {
		this.account = account;
	}
}
