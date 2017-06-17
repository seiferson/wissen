package com.seifernet.wissen.graph;

public class SObject {
	
	private String id;
	
	private String text;

	public String getText() {
		return text == null ? "" : text.replace( '«' , '"').replace("Otro", "").replace("Otra", "").replace("Otros", "");
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
}
