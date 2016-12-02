package com.seifernet.wissen.graph;

public class Subject {
	private String text;

	public String getText() {
		return text.split( "\\(" )[0].replace('—', ' ').trim( );
	}

	public void setText(String text) {
		this.text = text;
	}
}
