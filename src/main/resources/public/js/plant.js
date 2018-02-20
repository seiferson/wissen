$.ajax({
	type: 'GET',
	url: "/api/irrigationRecords/search/findTop1ByOrderByDateDesc",
	contentType: "application/json; charset=utf-8",
	error: function(XMLHttpRequest, textStatus, errorThrown) {
		console.log(textStatus);
		console.log(XMLHttpRequest);
		$("#latest").text("no data available");
		$("#latest").addClass("redstatus");
	},
	success: function(resultData) {
		var x = document.getElementById("latest");
		if(x != null){
			if(resultData != null){
				var lDate = new Date(resultData.date);
				var cDate = new Date();
				var diff = (cDate.getTime()-lDate.getTime())/1000/60/60;
				$("#latest").text(parseFloat(diff).toFixed(2) + " hours ago");
				if(diff > 48){
					$("#latest").addClass("redstatus");
				}
				else {
					$("#latest").addClass("greenstatus");
				}
			}
			else {
				$("#latest").text("no data available");
				$("#latest").addClass("redstatus");
			}
		}
	}
});