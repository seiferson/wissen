package com.seifernet.wissen.graph;

public class Relation implements Comparable<Relation>{
	
	private String id;
	
	private Subject subject;
	
	private SObject object;
	
	public SObject getOther( ){
		SObject tmp = new SObject();
		tmp.setText("");
		return this.object == null ? tmp : this.object ;
	}
	
	public Subject getSubject() {
		return subject;
	}

	public void setSubject(Subject subject) {
		this.subject = subject;
	}

	public SObject getObject() {
		return object;
	}

	public void setObject(SObject object) {
		this.object = object;
	}

	public Action getAction() {
		return action;
	}

	public void setAction(Action action) {
		this.action = action;
	}

	public String getSentence() {
		return sentence;
	}

	public void setSentence(String sentence) {
		this.sentence = sentence;
	}

	private Action action;
	
	private String sentence;

	@Override
	public int compareTo(Relation o) {
		return this.getSubject().getText().compareTo(o.getSubject().getText());
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	
}
