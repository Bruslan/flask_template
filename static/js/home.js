$( document ).ready(function() {

    httpGetAsync('/tasks', function(callback) {
    // do something with response


    var workouts = JSON.parse(callback);
    var workouts_list = workouts["workouts"]

    var woche  = workouts_list[0]["week_nr"]
    var first_workout = workouts_list[workouts_list.length-1]["absolviert_am"]

    var today = new Date()

 
    var first_day_week = new Date(first_workout);
    var last_day_week = new Date(first_day_week);
    var second_workout_date = new Date(first_day_week)
    var third_workout_date = new Date(first_day_week)


    second_workout_date.setDate(second_workout_date.getDate()+2)
    console.log(second_workout_date)
    third_workout_date.setDate(second_workout_date.getDate()+2)

    last_day_week.setDate(last_day_week.getDate() + 7);


    if (today<=last_day_week)
    {


    var first_day_week_string = first_day_week.getDate().toString() +"."+(first_day_week.getMonth()+1).toString()
    var last_day_week_string = last_day_week.getDate().toString() +"."+(last_day_week.getMonth()+1).toString()


    var to_do_date = [first_day_week_string, second_workout_date, third_workout_date]




        for (i=1; i<4; i++)
   {

        document.getElementById("trainingbutton" + i.toString()).innerHTML = "Training " + i.toString() +" erst am "+ to_do_date[i-1].toString(); 

   }

   for (i=0; i<to_do_date.length; i++)

   {

    if (today >= to_do_date[i])
    {

      document.getElementById("trainingbutton" + (i+1).toString()).innerHTML = "Training " + (i+1)+" starten"; 
      document.getElementById("trainingbutton" + (i+1).toString()).setAttribute("class","btn btn-light");

    }


   }








        document.getElementById("wochendauer").innerHTML = "von "+ first_day_week_string +" - " + last_day_week_string;
        document.getElementById("week_nr").innerHTML = "Woche "+ woche.toString();
       

    for (i=1; i<workouts_list.length+1; i++)
   {
        document.getElementById("train" + i.toString()).innerHTML = "✔";
        document.getElementById("trainingbutton" + i.toString()).innerHTML = "Training " + i.toString() +" nochmal absolvieren"; 
        document.getElementById("trainingbutton" + i.toString()).setAttribute("class","btn btn-light");
   }

   for (j=0; j<workouts_list.length; j++)
   {

        document.getElementById("sprechblase" +  workouts_list[j]["workout_nr"].toString()).innerHTML = "Workout erledigt am: "+ workouts_list[j]["absolviert_am"].toString();
        console.log(typeof workouts_list[j]["absolviert_am"])
        document.getElementById("sprechblase" +  workouts_list[j]["workout_nr"]).removeAttribute("hidden");
   }

}


else{

  first_day_week.setDate(second_workout_date.getDate()+7)
  last_day_week.setDate(last_day_week.getDate()+7)
    var first_day_week_string = (first_day_week.getDate()).toString() +"."+(first_day_week.getMonth()+1).toString()
    var last_day_week_string = (last_day_week.getDate()).toString() +"."+(last_day_week.getMonth()+1).toString()

        document.getElementById("wochendauer").innerHTML = "von "+ first_day_week_string +" - " + last_day_week_string;
        document.getElementById("week_nr").innerHTML = "Woche "+ (woche +1).toString();
     


}
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