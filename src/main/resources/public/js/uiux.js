const DIV_ELEM = "<div/>"
const P_ELEM = "<p/>";
const SPAN_ELEM = "<span/>";
const FORM_ELEM = "<form/>";
const H4_ELEM = "<h4/>";
const INPUT_ELEM = "<input/>";
const LABEL_ELEM = "<label/>"
const TEXTAREA_ELEM = "<textarea/>";
const BUTTON_ELEM = "<button/>";
const I_ELEM = "<i/>";
	
const FLUID_CARD_CLASS = "ui fluid card";
const HEADER_CLASS = "header";
const META_CLASS = "meta";
const DESCRIPTION_CLASS = "description";
const CONTENT_CLASS = "content";
const BASIC_LABEL_CLASS = "ui basic label";
const COLUMN_CLASS = "column";
const RIGHT_FLOATED_CLASS = "right floated";
const EXTRA_CONTENT_CLASS = "extra content";
const SIMPLE_SEGMENT_CLASS = "ui segment";
const SECONDARY_SEGMENT_CLASS = "ui segment";
const SIMPLE_FORM_CLASS = "ui form";
const DIVIDING_HEADER_CLASS = "ui dividing header";
const FIELD_CLASS = "field";
const TWO_FIELD_CONTAINER_CLASS = "two fields";
const CHECKBOX_CLASS = "ui checkbox";

function createCard(color, headerText, metaText, descriptionContent, id){
	var card = $(DIV_ELEM);
	card.addClass(FLUID_CARD_CLASS);
	
	if(color != null){
		card.addClass(color);
	}
	
	var content = $(DIV_ELEM);
	content.addClass(CONTENT_CLASS);
	
	content.append(
		$(I_ELEM)
			.addClass("right floated trash alternate outline icon")
	)
	content.append(
		$(I_ELEM)
			.addClass("right floated edit outline icon")
	)
	
	content.append(
		$(I_ELEM)
			.addClass("right floated circle outline icon")
			.attr("onclick", "completeActivity('" + id + "')")
	)
	
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

function createNewTaskForm(){
	var elem = $(DIV_ELEM);
	elem.addClass(SECONDARY_SEGMENT_CLASS);
	
	var form = $(FORM_ELEM);
	form.addClass(SIMPLE_FORM_CLASS);
	form.append(
		$(H4_ELEM)
			.addClass(DIVIDING_HEADER_CLASS)
			.text("New task")
	);
	
	var titleField = $(DIV_ELEM);
	titleField.addClass(FIELD_CLASS);
	var titleInput = $(INPUT_ELEM);
	titleInput.attr("type", "text");
	titleInput.attr("name", "tasktitlef");
	titleInput.attr("id", "tasktitlef");
	titleInput.attr("placeholder", "Title");
	titleInput.attr("maxlength", "24");
	titleField.append(titleInput);
	
	var checkboxFieldContainer = $(DIV_ELEM);
	checkboxFieldContainer.addClass(TWO_FIELD_CONTAINER_CLASS);
	var descriptionChkField = $(DIV_ELEM);
	descriptionChkField.addClass(FIELD_CLASS);
	var descriptionCheckbox = $(INPUT_ELEM);
	descriptionCheckbox.attr("type", "checkbox");
	descriptionCheckbox.attr("name", "taskdescneededf");
	descriptionCheckbox.attr("id", "taskdescneededf");
	descriptionCheckbox.attr("onchange", "toggleNewTaskDesc()");
	descriptionCheckbox.attr("checked", "true");
	descriptionChkField.append(
		$(DIV_ELEM)
			.addClass(CHECKBOX_CLASS)
			.append(descriptionCheckbox)
			.append(
				$(LABEL_ELEM)
					.text("Description needed?")
					.attr("for", "taskdescneededf")
			)
	);
	var expirationChkField = $(DIV_ELEM);
	expirationChkField.addClass(FIELD_CLASS);
	var expirationCheckbox = $(INPUT_ELEM);
	expirationCheckbox.attr("type", "checkbox");
	expirationCheckbox.attr("name", "taskexpiresf");
	expirationCheckbox.attr("id", "taskexpiresf");
	expirationCheckbox.attr("onchange", "toggleExpireDate()");
	expirationCheckbox.attr("checked", "true");
	expirationChkField.append(
		$(DIV_ELEM)
			.addClass(CHECKBOX_CLASS)
			.append(expirationCheckbox)
			.append(
				$(LABEL_ELEM)
					.text("Expires?")
					.attr("for", "taskexpiresf")
			)
	);
	checkboxFieldContainer.append(descriptionChkField);
	checkboxFieldContainer.append(expirationChkField);
	
	var descriptionField = $(DIV_ELEM);
	descriptionField.attr("id", "taskdescfieldf");
	descriptionField.addClass(FIELD_CLASS);
	descriptionField.append(
		$(TEXTAREA_ELEM)
			.attr("rows", "2")
			.attr("name", "taskdescf")
			.attr("id", "taskdescf")
			.attr("placeholder", "Details")
	);
	
	var datesFieldContainer = $(DIV_ELEM);
	datesFieldContainer.addClass(TWO_FIELD_CONTAINER_CLASS);
	datesFieldContainer.append(
		$(DIV_ELEM)
			.addClass(FIELD_CLASS)
			.append(
				$(LABEL_ELEM)
					.text("Due date")
			)
			.append(
				$(INPUT_ELEM)
					.attr("type", "datetime-local")
					.attr("name", "taskduedatef")
					.attr("id", "taskduedatef")
			)			
	);
	datesFieldContainer.append(
		$(DIV_ELEM)
			.addClass(FIELD_CLASS)
			.attr("id", "taskexpirationdatefieldf")
			.append(
				$(LABEL_ELEM)
					.text("Expiration date")
			)
			.append(
				$(INPUT_ELEM)
					.attr("type", "datetime-local")
					.attr("name", "taskexpirationdatef")
					.attr("id", "taskexpirationdatef")
			)			
	);
	
	
	form.append(titleField);
	form.append(checkboxFieldContainer);
	form.append(descriptionField);
	form.append(datesFieldContainer);
	form.append(
		$(BUTTON_ELEM)
			.addClass("ui right floated small button")
			.attr("type", "button")
			.attr("onclick", "createTask()")
			.text("Create task")
	);
	
	elem.append(form);
	return elem;
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