Number.prototype.pad = function(size) {
	var s = String(this);
	while (s.length < (size || 2)) {s = "0" + s;}
	return s;
};

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





