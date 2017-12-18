function irrigate(plantid) {
  if($.cookie("authtoken") === undefined) {
    $("#wrongcredentials").addClass("hidden");
    $("#user").val("");
    $("#passwd").val("");
    $('.ui.modal').modal('show');
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

//<![CDATA[
function authenticate(){
  var user = $("#user").val();
  var passwd = $("#passwd").val();
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
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      if(XMLHttpRequest.status == 400) {
        $("#wrongcredentials").removeClass("hidden");
      }
    },
    success: function(resultData) {
      $.cookie("authtoken", resultData.access_token);
      $.cookie("authuser", user);
      $('.ui.modal').modal('hide');
      $("#authuser").text(user);
      $("#wrongcredentials").addClass("hidden");
      $("#user").val("");
      $("#passwd").val("");
    }
  });
}
//]]>

