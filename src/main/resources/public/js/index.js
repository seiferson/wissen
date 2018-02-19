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
					var rcontent = $("<div></div>");
					rcontent.addClass("middle aligned right floated content");
					var ddate = new Date(entry.dueDate);
					var tag = $("<div></div>");
					if(ddate.getTime() - (new Date()).getTime() > 18000000){
						tag.addClass("ui teal tiny label");
					} else if (ddate.getTime() - (new Date()).getTime() > 7200000){
						tag.addClass("ui yellow tiny label");
					} else {
						tag.addClass("ui red tiny label");
					}
					tag.text("DD " + (ddate.getMonth()+1).pad(2) + "/"+(ddate.getDate()).pad(2)+"/"+ddate.getFullYear() + " " + (ddate.getHours()).pad(2) + ":"+(ddate.getMinutes()).pad(2));
					rcontent.append(tag);
					item.prepend(rcontent);
					content.addClass("middle aligned content");
					content.text(entry.title);
					console.log(entry.identifier);
					content.click(function(){showTaskModal(entry.identifier)});
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

function irrigate(plantid) {
  if($.cookie("authtoken") === undefined) {
    $("#wrongcredentials").addClass("hidden");
    $("#user").val("");
    $("#passwd").val("");
    $("#authmod").modal("show");
  }
  else {
    var xdata = {
      date: (new Date()).getTime(),
      person : $.cookie("authuser"),
      plant : plantid
    };
    $.ajax({
      type: 'POST',
      url: "/api/irrigationRecords",
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      headers: {
        "Authorization" : "Bearer " + $.cookie("authtoken"),
      },
      data: JSON.stringify(xdata),
        success: function(resultData) {
        var cDate = new Date();
        $("#latest").removeClass("redstatus");
        $("#latest").addClass("greenstatus");
        $("#latest").text("0.00 hours ago");
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        console.log(textStatus);
        console.log(XMLHttpRequest.status);
      }
    });
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

