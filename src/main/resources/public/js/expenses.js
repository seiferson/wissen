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
				$("#banksegment").append("<button class='ui button' onclick='registerBankAccount()'>Add bank account data</button>")
			}
			console.log(textStatus);
			console.log(XMLHttpRequest);
		},
		success: function(responseData) {
			$("#bankaccount").text(responseData.value + " MXN");
		}
	});
}

function registerBankAccount(){
	$("#bankmodal").modal("show");
}