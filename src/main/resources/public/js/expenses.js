var balance = 0.0;

function updateBalance(){
	$("#balanceval").text(balance.toFixed(2));
	if(balance == 0){
		$("#balancest").removeClass("teal");
		$("#balancest").removeClass("red");
		$("#balancest").addClass("yellow");
		
		$("#balanceseg").removeClass("teal");
		$("#balanceseg").removeClass("red");
		$("#balanceseg").addClass("yellow");
	} else if(balance > 0){
		$("#balancest").removeClass("yellow");
		$("#balancest").removeClass("red");
		$("#balancest").addClass("teal");
		
		$("#balanceseg").removeClass("yellow");
		$("#balanceseg").removeClass("red");
		$("#balanceseg").addClass("teal");
	} else {
		$("#balancest").removeClass("yellow");
		$("#balancest").removeClass("teal");
		$("#balancest").addClass("red");
		
		$("#balanceseg").removeClass("yellow");
		$("#balanceseg").removeClass("teal");
		$("#balanceseg").addClass("red");
	}
}

function loadAuthContent(){
	getBankAccount();
	getCurrentTransactions();
}

function loadAnonContent(){
	
}

function getBankAccount(){
	console.log("yes");
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
			console.log("yes");
			if(XMLHttpRequest.status === 404) {
				$("#bankaccount").text("No info");
				$("#banksegment").append("<button class='ui button' id='addbankbtn' onclick='toggleBankAccountModal()'>Add bank account data</button>")
			}
			console.log(textStatus);
			console.log(XMLHttpRequest);
		},
		success: function(responseData) {
			balance += parseFloat(responseData.value);
			updateBalance();
			$("#bankaccount").text(responseData.value.toFixed(2) + " MXN");
		}
	});
}

function createTableFromList(list, size, title){
	var table = $("<table class='ui striped compact table'></table>");
	var theader = $("<thead><tr><th colspan=" + size + ">Expenses</th></tr></thead>");
	var tcontent = $("<tbody></tbody>");
	list.forEach(function(entry){
		tcontent.append(
			"<tr><td class='collapsing'><i class='shopping cart icon'></i> " +
			entry.description +
			"</td><td>" +
			entry.value +
			" MXN</td><td class='right aligned collapsing'>" +
			formatDate(entry.date) +
			"</td></tr>"
		);
	});
	table.append(theader);
	table.append(tbody);
}

function getCurrentTransactions(){
	$.ajax({
		type: 'GET',
		url: "/api/transactions/search/expensesinperiod" +
				"?owner=" + $.cookie("hashuser") + 
				"&start=12-01-2018-00-00"+
				"&end=12-30-2018-23-59",
		contentType: "application/json; charset=utf-8",
		headers: {
			"Authorization" : "Bearer " + $.cookie("authtoken"),
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			if(XMLHttpRequest.status === 404) {
				console.log("no expenses");
			}
			console.log(textStatus);
			console.log(XMLHttpRequest);
		},
		success: function(responseData) {
			if(responseData._embedded.transactions.length == 0){
				$("#maintable").append("<tr class='positive'><td colspan='3'><i class='check square outline icon'></i> You don't have expenses this month</td></tr>");
			}else {
				responseData._embedded.transactions.forEach(function(entry){
					balance -= parseFloat(entry.value);
					$("#maintable").append(
						"<tr><td class='collapsing'><i class='shopping cart icon'></i> " +
						entry.description +
						"</td><td>" +
						entry.value.toFixed(2) +
						" MXN</td><td class='right aligned collapsing'>" +
						formatDate(entry.date) +
						"</td></tr>"
					);
				});
			}
			updateBalance()
		}
	});
}

function toggleBankAccountModal(){
	$("#bankmodal").modal("show");
}

function toggleNewExpenseModal(){
	$("#expensemod").modal("show");
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