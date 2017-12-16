function irrigate() {
  if($.cookie("userdata") === undefined) {
    $('.ui.modal').modal('show');
  }
  else {
    var xdata = {
      date: (new Date()).getTime(),
      person : "seiferson",
      plant : "office"
    };
    $.ajax({
      type: 'POST',
      url: "/api/irrigationRecords",
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      headers: {
        "Authorization" : "Bearer " + $.cookie("userdata"),
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
        console.log(XMLHttpRequest);
      }
    });
  }
}