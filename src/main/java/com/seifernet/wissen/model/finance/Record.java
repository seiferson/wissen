package com.seifernet.wissen.model.finance;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Record {

	public enum RecordType{
		DEBT,
		RECURRENT_INCOME,
		ASSET_BANK_ACCOUNT
	}
	
	public Record(String owner, Double value, String description, RecordType type, Date date, Integer effectiveDay, Integer period) {
		super();
		this.owner = owner;
		this.value = value;
		this.description = description;
		this.type = type;
		this.date = date;
		this.effectiveDay = effectiveDay;
		this.period = period;
	}

	public Record() {
		
	}

	@Id
	private String id;
	
	private String owner;
	
	private Double value;
	
	private String description;
	
	private RecordType type;
	
	private Date date;
	
	private Integer effectiveDay;
	
	private Integer period;

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

	public RecordType getType() {
		return type;
	}

	public void setType(RecordType type) {
		this.type = type;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Integer getEffectiveDay() {
		return effectiveDay;
	}

	public void setEffectiveDay(Integer effectiveDay) {
		this.effectiveDay = effectiveDay;
	}

	public Integer getPeriod() {
		return period;
	}

	public void setPeriod(Integer period) {
		this.period = period;
	}
}
