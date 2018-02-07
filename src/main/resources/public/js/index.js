/**
 * Refresh page elements based on token validation results
 * TODO change parameter name
 */
function refreshPageElements(tokenValidation){
	if(tokenValidation){
		$("#authuser").text($.cookie("authuser"));
		$("#tasksheader").removeClass("hiddenf");
		$("#taskssegment").removeClass("hiddenf");
		
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
				responseData._embedded.tasks.forEach(function(entry){
					var item = $("<div></div>");
					item.addClass("item");
					$("#taskslist").append(item);
					var content = $("<div></div>");
					item.append(content);
					content.addClass("middle aligned content");
					content.text(entry.title);
					var icon = $("<i></i>");
					content.prepend(icon);
					icon.addClass("large square outline icon");
				});
				$("#taskslist").append('<div class="item"><div class="middle aligned content" onclick="showNewTaskModal()"><i class="large plus square outline icon"></i> Add a task</div></div>');
			}
		});
	} 
	else {
		$("#authuser").text("Anonymous");
		$("#tasksheader").addClass("hiddenf");
		$("#taskssegment").addClass("hiddenf");
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
		expires = true;
		expirationdate = $("#taskexpirationdatef").val();
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

validateToken(refreshPageElements);

