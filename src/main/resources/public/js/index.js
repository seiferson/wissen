/**
 * Refresh page elements based on token validation results
 */
function refreshPageElements(validToken){
	if(validToken){
		
		$("#authuser").text($.cookie("authuser"));
		$("#authuseritem").attr('onclick','').unbind('click');
		var usermenu = $("<div></div>");
		$("#authuseritem").children("div").remove();
		usermenu.addClass("menu");
		$("#authuseritem").append(usermenu);
		var itemtest = $("<div></div>");
		itemtest.addClass("item");
		itemtest.append($("<a href='#'>User profile</a>"));
		usermenu.append(itemtest);
		itemtest = $("<div></div>");
		itemtest.addClass("item");
		itemtest.append($("<a href='#'>Logout</a>"));
		usermenu.append(itemtest);
		$("#authuseritem").addClass("dropdown");
		$('.ui.dropdown').dropdown();
		$("#tasksheader").removeClass("hiddenf");
		$("#taskssegment").removeClass("hiddenf");
		$("#messagenoauthy").addClass("hidden");
		$("#messagenoauthx").addClass("hidden");
		
		$.ajax({
			type: 'GET',
			url: "/api/tasks/search/findAllByOwnerAndCompletedFalseAndActiveTrueOrderByCreationDate" +
					"?owner=" + $.cookie("authuser") + 
					"&page=0&size=30",
			contentType: "application/json; charset=utf-8",
			headers: {
				"Authorization" : "Bearer " + $.cookie("authtoken"),
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				console.log(textStatus);
				console.log(XMLHttpRequest);
			},
			success: function(responseData) {
				$("#taskslist").empty();
				var firstElem = true;
				responseData._embedded.tasks.forEach(function(entry){
					var row = $("<div></div>");
					var column = $("<div></div>");
					var checkboxContainer = $("<div></div>");
					var checkbox = $("<input type='checkbox' name='" + entry.id + "tsk'/>");
					var checkboxLabel = $("<label></label>");
					var ddLabel = $("<div></div>");
					var ddate = new Date(entry.dueDate);
					
					if(firstElem){
						firstElem = false;
						column.addClass("column tlistfcol");
						row.addClass("one column row tlistfelem");
					} else {
						row.addClass("one column row tlistelem");
						column.addClass("column tlistcol");
					}
					
					checkboxContainer.addClass("ui checkbox");
					checkboxLabel.text(entry.title);
					checkboxLabel.click(function(){showTaskModal(entry.identifier)});
					ddLabel.addClass("ui basic label floatfright");
					ddLabel.addClass(getLabelColor(ddate));
					ddLabel.text("DD " + dateToStringCompact(ddate));
					
					$("#taskslist").append(row);
					row.append(column);
					column.append(checkboxContainer);
					checkboxContainer.append(checkbox);
					checkboxContainer.append(checkboxLabel);
					column.append(ddLabel);
				});
				$("#taskslist").append("<div class='one column row'><div class='column tlistaddcol'><button class='ui mini icon button floatfright' onclick='showNewTaskModal()'><i class='plus icon'></i>Add a task</button></div></div>");
			}
		});
	} 
	else {
		$("#authuser").text("Anonymous");
		$("#tasksheader").addClass("hiddenf");
		$("#taskssegment").addClass("hiddenf");
		$("#messagenoauthy").removeClass("hidden");
		$("#messagenoauthx").removeClass("hidden");
	}
}


function toggleNewTaskDesc(){
  if($("#taskdescfieldf").hasClass("hiddenf")){
    $("#taskdescfieldf").removeClass("hiddenf");
  } else {
    $("#taskdescfieldf").addClass("hiddenf");
  }
}

function toggleExpireDate(){
  if($("#taskexpirationdatefieldf").hasClass("hiddenf")){
    $("#taskexpirationdatefieldf").removeClass("hiddenf");
  } else {
    $("#taskexpirationdatefieldf").addClass("hiddenf");
  }
}

/**
 * Process task creation
 */
function createTask(tokenValidation){
	var titlef = $("#tasktitlef").val().trim();
	var descrequiredf = false;
	var descriptionf = null;
	if($("#taskdescneededf").is(":checked")){
		descrequiredf = true;
		descriptionf = $("#taskdescf").val().trim();
	}
	var duedatef = $("#taskduedatef").val();
	
	var expiresf = false;
	var expirationdatef = null;
	if($("#taskexpiresf").is(":checked")){
		expiresf = true;
		expirationdatef = $("#taskexpirationdatef").val();
	}
	
	//TODO data validation
	
	var datax = {
			title : titlef,
			descriptionRequired : descrequiredf,
			description : descriptionf,
			dueDate : (new Date(duedatef)).getTime(),
			completed : false,
			creationDate : Date.now(),
			expires : expiresf,
			expirationDate : (new Date(expirationdatef)).getTime(),
			active : true,
			owner : $.cookie("authuser")
		};
	
	console.log(JSON.stringify(datax));
	
	$.ajax({
		type: 'POST',
		url: "/api/tasks",
		headers: {
			"Authorization" : "Bearer " + $.cookie("authtoken")
		},
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(datax),
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(textStatus);
			console.log(XMLHttpRequest);
		},
		success: function(resultData) {
			validateToken(refreshPageElements);
			$('#newtaskmod').modal('hide');
		}
	});
}

function showNewTaskModal(){
	$('#newtaskmod').modal('show');
}

function showTaskModal(task){
	$.ajax({
		type: 'GET',
		url: "/api/tasks/" + task,
		headers: {
			"Authorization" : "Bearer " + $.cookie("authtoken"),
			"Accept" : "application/json"
		},
		success: function(response) {
			$("#tasktitle").text(response.title);
			var cdate = new Date(response.creationDate);
			$("#taskcreationdate").text("Created " + (cdate.getMonth()+1).pad(2) + "/"+(cdate.getDate()).pad(2)+"/"+cdate.getFullYear() + " " + (cdate.getHours()).pad(2) + ":"+(cdate.getMinutes()).pad(2))
			if(response.descriptionRequired){
				var descontent = $("<p></p>");
				descontent.text(response.description);
				$("#taskdescription").empty();
				$("#taskdescription").append(descontent);
			}else{
				$("#taskdescription").empty();
			}
			$("#tasktags").empty();
			var ddate = new Date(response.dueDate);
			var tag = $("<div></div>");
			if(ddate.getTime() - (new Date()).getTime() > 18000000){
				tag.addClass("ui teal tiny label");
			} else if (ddate.getTime() - (new Date()).getTime() > 7200000){
				tag.addClass("ui yellow tiny label");
			} else {
				tag.addClass("ui red tiny label");
			}
			tag.text("DD " + (ddate.getMonth()+1).pad(2) + "/"+(ddate.getDate()).pad(2)+"/"+ddate.getFullYear() + " " + (ddate.getHours()).pad(2) + ":"+(ddate.getMinutes()).pad(2));
			$("#tasktags").append(tag);
			console.log(response);
			if(response.expires){
				var edate = new Date(response.dueDate);
				var taged = $("<div></div>");
				taged.addClass("ui tiny label");
				taged.text("ED " + (edate.getMonth()+1).pad(2) + "/"+(edate.getDate()).pad(2)+"/"+edate.getFullYear() + " " + (edate.getHours()).pad(2) + ":"+(edate.getMinutes()).pad(2));
				$("#tasktags").append(taged);
			}
			
			$("#taskdetmod").modal("show");
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(textStatus);
			console.log(XMLHttpRequest);
		}
	});
}

validateToken(refreshPageElements);
