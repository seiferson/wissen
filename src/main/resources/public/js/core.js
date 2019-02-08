/**
 * Session token validation
 */
//<![CDATA[

function validateToken(){
	if($.cookie("authuser") != undefined && $.cookie("authtoken") != undefined) {
		$.ajax({
			type: 'GET',
			url: "/oauth/check_token?token=" + $.cookie("authtoken"),
			headers: {
				"Authorization" : "Basic bWFzdGVyOjEyMzQ1Ng==",
				"Accept" : "application/json"
			},
			success: function(response) {
				//load
			},
			error: function(XMLHttpRequest) {
				$.removeCookie("authuser");
				$.removeCookie("authtoken");
				//load
			}
		});
	} else {
		//load
	}
}
//]]>

/*eslint-disable no-undef */
$('.ui.dropdown').dropdown();
$('.ui.modal').modal({allowMultiple: false});
$('#regmod').modal('attach events', '#tgrm');
$('.progress').progress();
$('.message .close').on('click', function(){$(this).closest('.message').transition('fade');});
$('.ui.accordion').accordion();

/**Main UI load function**/
$(document).ready(function(){
	validateToken();
});

/**
 * Used to raise the modal for authentication
 */
function showAuthModal(origin){
	if($.cookie("authuser") === undefined && $.cookie("authtoken") === undefined) {
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
	}
}

function logout(){
	$.removeCookie("authuser");
	$.removeCookie("authtoken");
	$.removeCookie("hashuser");
	//load
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
			$.cookie("hashuser", (md5(user)).toUpperCase());
			$("#authmod").modal("hide");
			//load
		}
	});
}
//]]>