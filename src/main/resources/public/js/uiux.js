const DIV_ELEM = "<div></div>"
const P_ELEM = "<p></p>";
const SPAN_ELEM = "<span></span>";
const FLUID_CARD_CLASS = "ui fluid card";
const HEADER_CLASS = "header";
const META_CLASS = "meta";
const DESCRIPTION_CLASS = "description";
const CONTENT_CLASS = "content";
const BASIC_LABEL_CLASS = "ui basic label";
const COLUMN_CLASS = "column";
const RIGHT_FLOATED_CLASS = "right floated";
const EXTRA_CONTENT_CLASS = "extra content";

function createCard(color, headerText, metaText, descriptionContent, extra){
	var card = $(DIV_ELEM);
	card.addClass(FLUID_CARD_CLASS);
	
	if(color != null){
		card.addClass(color);
	}
	
	var content = $(DIV_ELEM);
	content.addClass(CONTENT_CLASS);
	
	var header = $(DIV_ELEM);
	header.addClass(HEADER_CLASS);
	header.text(headerText);
	
	var meta = $(DIV_ELEM);
	meta.addClass(META_CLASS);
	var span = $(SPAN_ELEM);
	span.text(metaText);
	span.addClass(RIGHT_FLOATED_CLASS);
	meta.append(span);

	
	var description = $(DIV_ELEM);
	description.addClass(DESCRIPTION_CLASS);
	if(description != null){
		description.append(descriptionContent);
	}
	
	content.append(header);
	content.append(meta);
	content.append(description);
	
	card.append(content);
	return card;
}

function createTag(color, content, size){
	var tag = $(DIV_ELEM);
	tag.addClass(BASIC_LABEL_CLASS);
	tag.addClass(RIGHT_FLOATED_CLASS);
	
	if(color != null){
		tag.addClass(color);
	}
	
	if(size != null){
		tag.addClass(size);
	}
	
	tag.text(content);
	return tag;
}

function createColumn(){
	var column = $(DIV_ELEM);
	column.addClass(COLUMN_CLASS);
	return column;
}

function createParagraph(text){
	var paragraph = $(P_ELEM);
	paragraph.text(text);
	return paragraph;
}