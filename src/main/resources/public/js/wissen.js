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