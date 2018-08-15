// A $( document ).ready() block.
$( document ).ready(function() {

    httpGetAsync('/stats', function(callback) {
    // do something with response


    console.log(JSON.parse(callback));
    var stats = JSON.parse(callback)

    document.getElementById("Trainingseinheiten").innerHTML = stats["stats"]["trainingseinheiten"].toString();
    document.getElementById("Wochen").innerHTML = stats["stats"]["trainingswochen"].toString();
    document.getElementById("PerfekteWochen").innerHTML = stats["stats"]["perfektewoche"].toString();

});

});



//Post request an python server

function postRequest(params, handler) {
	console.log("post ausgeführt")
  var r = new XMLHttpRequest();
  r.open("POST", handler, true);
  r.setRequestHeader("Content-Type", "application/json");
  r.onreadystatechange = function() {
      if (r.readyState === 4 && r.status === 200) {
        var json_resp = JSON.parse(r.responseText);
        if (json_resp["status"] == true) {
        	console.log("erfolgreich geaddet")
        } else {
        	console.log("Fehler beim Adden")
        }
        return false;
      }
  };
  r.send(JSON.stringify(params));
}


function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
        	// return xmlHttp.responseText;

    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}