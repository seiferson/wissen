/** Load of general page elements **/
function refreshGenericPageElements(validToken){
	if(validToken){
		$("#authuser").text($.cookie("authuser"));
		
		$("#authuseritem").attr('onclick','').unbind('click');
		var usermenu = $("<div></div>");
		$("#authuseritem").children("div").remove();
		usermenu.addClass("menu");
		$("#authuseritem").append(usermenu);
		
		var expensesItem = $("<div></div>");
		expensesItem.addClass("item");
		expensesItem.append($("<a href='/expenses'>Expenses</a>"));
		usermenu.append(expensesItem);
		
		var dashboardItem = $("<div></div>");
		dashboardItem.addClass("item");
		dashboardItem.append($("<a href='/dashboard'>Dashboard</a>"));
		usermenu.append(dashboardItem);
		
		usermenu.append("<div class='divider'></div>");
		
		var logoutItem = $("<div></div>");
		logoutItem.addClass("item");
		logoutItem.append($("<span onclick='logout()'>Logout</span>"));
		usermenu.append(logoutItem);
		
		$("#authuseritem").addClass("dropdown");
		$('.ui.dropdown').dropdown();
		
	} else {
		$("#authuseritem").attr('onclick','').unbind('click');
		var bck = $('<div id="authuseritem"></div>');
		bck.addClass('ui right item');
		bck.click(function(){showAuthModal("menuButton")});
		bck.append('<i class="large user circle outline icon"></i><span id="authuser">Anonymous</span>');
		$("#authuseritem").replaceWith(bck);
	}
}

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
				refreshGenericPageElements(true);
				loadAuthContent();
			},
			error: function(XMLHttpRequest) {
				$.removeCookie("authuser");
				$.removeCookie("authtoken");
				if(XMLHttpRequest.status === 400) {
					refreshGenericPageElements(false);
					loadAnonContent();
				}
			}
		});
	} else {
		refreshGenericPageElements(false);
		loadAnonContent();
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
	refreshGenericPageElements(false);
	loadAnonContent();
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
			refreshGenericPageElements(true)
			loadAuthContent();
		}
	});
}
//]]>