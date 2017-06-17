package com.seifernet.wissen.graph;

import java.util.ArrayList;

public class Concept {
	
	public Concept( ){
		this.attributes = new ArrayList<>();
	}
	
	private String subject;
	
	private ArrayList<Attribute> attributes;

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public ArrayList<Attribute> getAttributes() {
		return attributes;
	}

	public void setAttributes(ArrayList<Attribute> attributes) {
		this.attributes = attributes;
	}
	
}
