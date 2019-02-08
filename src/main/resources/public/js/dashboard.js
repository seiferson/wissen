function loadAuthContent(){
	
}

function loadAnonContent(){
	
}

function retrieveActiveGoals(){
	$.ajax({
		type: 'GET',
		url: "/api/goals/search/mygoals" +
				"?owner=" + $.cookie("hashuser"),
		contentType: "application/json; charset=utf-8",
		headers: {
			"Authorization" : "Bearer " + $.cookie("authtoken"),
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(textStatus);
			console.log(XMLHttpRequest);
		},
		success: function(responseData) {
			console.log(responseData);
		}
	});
}

function addGoal(goal){
	$.ajax({
		type: 'POST',
		url: "/api/goals",
		headers: {
			"Authorization" : "Bearer " + $.cookie("authtoken")
		},
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(goal),
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(textStatus);
			console.log(XMLHttpRequest);
		},
		success: function(responseData) {
			console.log(responseData);
		}
	});
}