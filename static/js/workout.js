$(document).on('click', '#Abschließen', function() {

postRequest(null,"/save_workout");




});



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



