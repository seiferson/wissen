package com.seifernet.wissen.model.finance;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Debt {

	@Id
	private String id;
	
	private String description;
	
	private Date billingCycle;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getBillingCycle() {
		return billingCycle;
	}

	public void setBillingCycle(Date billingCycle) {
		this.billingCycle = billingCycle;
	}
	
	
}
