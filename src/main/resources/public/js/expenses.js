function loadAuthContent(){
	getBankAccount();
}

function loadAnonContent(){
	
}

function getBankAccount(){
	$.ajax({
		type: 'GET',
		url: "/api/records/search/findByOwnerAndType" +
				"?owner=" + $.cookie("hashuser") + 
				"&type=ASSET_BANK_ACCOUNT",
		contentType: "application/json; charset=utf-8",
		headers: {
			"Authorization" : "Bearer " + $.cookie("authtoken"),
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			if(XMLHttpRequest.status === 404) {
				$("#bankaccount").text("No info");
				$("#banksegment").append("<button class='ui button' id='addbankbtn' onclick='toggleBankAccountModal()'>Add bank account data</button>")
			}
			console.log(textStatus);
			console.log(XMLHttpRequest);
		},
		success: function(responseData) {
			$("#bankaccount").text(responseData.value + " MXN");
		}
	});
}

function toggleBankAccountModal(){
	$("#bankmodal").modal("show");
}

function registerBankAccount(){
	var amount = $("#bankbalance").val();
	
	var datax = {
			owner : $.cookie("hashuser"),
			value : amount,
			description : "Bank account balance}",
			type : "ASSET_BANK_ACCOUNT",
			date : Date.now()
		};
	
	console.log(datax);
	$.ajax({
		type: 'POST',
		url: "/api/records",
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
			$("#bankbalance").val("");
			$("#bankmodal").modal("hide");
			validateToken();
			$("#addbankbtn").remove();
			
		}
	});
	
}