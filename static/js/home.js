// A $( document ).ready() block.
$( document ).ready(function() {
    //document.getElementById("train4").innerHTML = "✔";

    httpGetAsync('/tasks', function(callback) {
    // do something with response


    console.log(JSON.parse(callback));
    var workouts = JSON.parse(callback)
    var workouts_list = workouts["workouts"]

    var woche  = workouts_list[0]["week_nr"]

    document.getElementById("week_nr").innerHTML = "Woche "+ woche.toString();


    for (i=1; i<workouts_list.length+1; i++)
   {
    document.getElementById("train" + i.toString()).innerHTML = "✔";

   }

   for (j=0; j<workouts_list.length; j++)
   {
    document.getElementById("sprechblase" +  workouts_list[j]["workout_nr"].toString()).innerHTML = "Workout erledigt am: "+ workouts_list[j]["absolviert_am"].toString();

   }






  //  if (workoutnr < 3)
  //  {
  //  	document.getElementById("week_nr").innerHTML = "Woche "+ week_number.toString();
  //  	document.getElementById("sprechblase" + workoutnr.toString()).innerHTML = "Workout erledigt am: "+ workout_created_at.toString();
  //  	document.getElementById("sprechblase" + next_workout.toString()).innerHTML = "Workout muss am .. erledigt werden" ;

  //  	for (i=1; i<workoutnr+1; i++)
  //  {
		// document.getElementById("train" + i.toString()).innerHTML = "✔";
  //  }
  //  }
  //     if (workoutnr == 3)
  //  {
 
 	// document.getElementById("week_nr").innerHTML = "Woche "+ (week_number+1).toString();

  //  }

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