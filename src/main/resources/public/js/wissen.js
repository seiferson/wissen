/**
 * Session token validation
 */
//<![CDATA[
function validateToken(callback){
	if($.cookie("authuser") != undefined && $.cookie("authtoken") != undefined) {
		valid = false;
		$.ajax({
			type: 'GET',
			url: "/oauth/check_token?token=" + $.cookie("authtoken"),
			headers: {
				"Authorization" : "Basic bWFzdGVyOjEyMzQ1Ng==",
				"Accept" : "application/json"
			},
			success: function(response) {
				callback(true);
			},
			error: function(XMLHttpRequest) {
				if(XMLHttpRequest.status === 400) {
					callback(false);
				}
				$.removeCookie("authuser");
				$.removeCookie("authtoken");
				//TODO implement other error status handling
			}
		});
	}
}
//]]>

/*eslint-disable no-undef */
$('.ui.dropdown').dropdown();
$('.ui.modal').modal();
$('.progress').progress();
$('.message .close').on('click', function() {
	$(this).closest('.message').transition('fade');
});
















/**
 * Used to raise the modal for authentication
 */
function showAuthModal(origin){
	if($.cookie("authuser") === undefined && $.cookie("authtoken") === undefined) {
		//Modal init
		$("#wrongcredentials").addClass("hidden");
		$("#user").val("");
		$("#passwd").val("");
		if(origin === "menuButton"){
			$("#usageNotex").addClass("hiddenf");
			$("#welcomeNotex").removeClass("hiddenf");
		} else if(origin === "feature"){
			$("#welcomeNotex").addClass("hiddenf");
			$("#usageNotex").removeClass("hiddenf");
		}
		
		$("#authmod").modal("show");
	} else {
		console.log("User already authenticated");
	}
}

/**
 * Authentication step
 */
//<![CDATA[
function authenticate(){
	var user = $("#user").val().trim();
	var passwd = $("#passwd").val().trim();
	$.ajax({
		type: 'POST',
		url: "/oauth/token",
		headers: {
			"Authorization" : "Basic bWFzdGVyOjEyMzQ1Ng==",
			"Accept" : "application/json"
		},
		contentType: "application/x-www-form-urlencoded",
		data: {
			password : passwd,
			username : user,
			grant_type : "password"
		},
		error: function(XMLHttpRequest) {
			if(XMLHttpRequest.status === 400) {
				$("#wrongcredentials").removeClass("hidden");
			}
		},
		success: function(resultData) {
			$.cookie("authtoken", resultData.access_token);
			$.cookie("authuser", user);
			$("#authmod").modal("hide");
			validateToken(refreshPageElements);
		}
	});
}
//]]>




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


