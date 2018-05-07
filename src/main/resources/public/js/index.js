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
		$("#maingridauth").removeClass("hiddenf");
		$("#maingrid").addClass("hiddenf");
		
		$.ajax({
			type: 'GET',
			url: "/api/tasks/search/mytasks" +
					"?owner=" + 
					$.cookie("authuser") + 
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
				var columns = [];
				columns[0] = createColumn();
				columns[1] = createColumn();
				
				var colCount = 0;
				responseData._embedded.tasks.forEach(function(entry){
					var labels = [];
					var dueDateLabel = createTag(getLabelColor(entry.dueDate), "DD " + formatDate(entry.dueDate), "tiny");
					labels.push(dueDateLabel);
					
					if(entry.expires){
						var expireDateLabel = createTag(getLabelColor(entry.expirationDate), "ED " + formatDate(entry.expirationDate), "tiny");
						labels.push(expireDateLabel);
					}
					
					var description = null;
					if(entry.descriptionRequired){
						description = createParagraph(entry.description);
					}
					
					var metaText = dateToString(new Date(), new Date(entry.creationDate)) + " ago";
					var card = createCard(null, entry.title, metaText, description);
					columns[colCount%2].append(card);
					colCount++;
				});
				
				var row = $("#xtasks");
				row.empty();
				row.append(columns[0]);
				row.append(columns[1]);
			}
		});
	} 
	else {
		$("#authuser").text("Anonymous");
		$("#maingrid").removeClass("hidden");
		$("#maingridauth").addClass("hiddenf");
	}
}

function showTaskButtons(id){
	var elem = $("#col" + id);
	elem.unbind('touchstart');
	elem.children(".ui.checkbox").children("label").unbind('click');
	elem.children(".label").transition('fade left');
	setTimeout(function(){
		elem.children(".button").transition('fade left');
	}, 270);
}

function hideTaskButtons(id){
	var elem = $("#col" + id);
	elem.bind('touchstart', function(){catchTaskHold(id)});
	elem.bind('touchend',function(){catchTaskRelease(id)});
	elem.unbind('click');
	elem.children(".button").transition('fade left');
	setTimeout(function(){
		elem.children(".label").transition('fade left');
	}, 270);
	elem.children(".ui.checkbox").children("label").click(function(){showTaskModal(id)});
}

function catchTaskHold(id){
	globalTimeOut = setTimeout(function(){showTaskButtons(id)}, 1500);
}

function catchTaskRelease(id){
	var elem = $("#col" + id);
	if(elem.children(".label").hasClass("hidden")){
		elem.unbind('touchend');
		elem.unbind('click');
		setTimeout(function(){elem.click(function(){hideTaskButtons(id)});}, 10);
	}
	clearTimeout(globalTimeOut);
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
			owner : $.cookie("authuser"),
			expired : false,
			priority : "-1"
		};
	
	console.log(datax);
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
