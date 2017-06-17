package com.seifernet.wissen.graph;

public class Action {
	private String text;

	public String getText() {
		return text.replace('—', ' ').replace("\\(", " ");
	}

	public void setText(String text) {
		this.text = text;
	}
	
	
}
