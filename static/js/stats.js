// A $( document ).ready() block.
$( document ).ready(function() {

  var Stufen_ = ["Anfänger","Fortgeschrittener", "Profi"," "];

    httpGetAsync('/stats', function(callback) {
    // do something with response


    console.log(JSON.parse(callback));
    var stats = JSON.parse(callback);

if(stats.status)
{
    document.getElementById("Trainingseinheiten").innerHTML = stats["stats"]["trainingseinheiten"].toString();
    document.getElementById("Wochen").innerHTML = stats["stats"]["trainingswochen"].toString();
    document.getElementById("PerfekteWochen").innerHTML = stats["stats"]["perfektewoche"].toString();
    var prozent = stats["stats"]["trainingswochen"]/16 *100;
    var prozent_perfektewochen = stats["stats"]["perfektewoche"]/16 *100;

    //console.log(prozent)
    //console.log("style = width: "+prozent.toString()+"%")
    document.getElementById("progressbar").setAttribute("style", "width: "+prozent.toString()+"%");
    document.getElementById("progress").innerHTML = (stats["stats"]["trainingswochen"]).toString() +"/16 Wochen";



    document.getElementById("progressbar_perfektewoche").setAttribute("style", "width: "+prozent_perfektewochen.toString()+"%");
    document.getElementById("progress_perfektewoche").innerHTML = (stats["stats"]["perfektewoche"]).toString() +"/16";


    document.getElementById("progress_links").innerHTML = Stufen_[stats["stats"]["stufe"]];
    document.getElementById("progress_rechts").innerHTML = Stufen_[stats["stats"]["stufe"]+1];
}


});

});



//Post request an python server

function postRequest(params, handler) {
	console.log("post ausgeführt");
  var r = new XMLHttpRequest();
  r.open("POST", handler, true);
  r.setRequestHeader("Content-Type", "application/json");
  r.onreadystatechange = function() {
      if (r.readyState === 4 && r.status === 200) {
        var json_resp = JSON.parse(r.responseText);
        if (json_resp["status"] == true) {
        	console.log("erfolgreich geaddet");
        } else {
        	console.log("Fehler beim Adden");
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

    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}