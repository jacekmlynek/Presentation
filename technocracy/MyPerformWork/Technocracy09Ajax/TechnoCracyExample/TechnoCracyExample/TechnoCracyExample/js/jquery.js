
var loc = window.location.href;
    loc = (loc.substr(loc.length - 1, 1) == "/") ? loc + "CalendarSearchWebService.aspx" : loc;

$(document).ready(function() {
        $("#CallPagetMethod").click(function(event){
            $.ajax({
                type: "POST",
                url: loc + "/" + GetResult,
                contentType: "application/json; charset=utf-8",
                data: "{}",
                dataType: "json",
                 success: function(msg) {
                     $("#jqueryResult").innerHTML = msg;
                }
             });
        });
     });