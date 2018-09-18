$(document).ready(function() {

    httpGetAsync('/tasks', function(callback) {
        // do something with response

        var workouts = JSON.parse(callback);


        console.log(workouts);


        if (workouts["status"] == true) {

            var workouts_list = workouts["workouts"];
            stufe = workouts_list[0]["stufe"];

            var max_workout_nr;

            if (stufe == 0) {
                max_workout_nr = 3;

            } else {
                max_workout_nr = 4;
            }

            var woche = workouts_list[0]["week_nr"];


            var first_workout = workouts_list[workouts_list.length - 1]["absolviert_am"];
            var last_workout = workouts_list[0]["absolviert_am"];
            var last_workout_nr = workouts_list[0]["workout_nr"];


            var today = new Date();


            var first_day_week = new Date(first_workout);
            var last_day_week = new Date(first_day_week);
            var second_workout_date = new Date(first_day_week);
            var third_workout_date = new Date(first_day_week);
            var forth_workout_date = new Date(first_day_week);
            var last_workout_date = new Date(last_workout);


            second_workout_date.setDate(second_workout_date.getDate() + 2);
            second_workout_date.setHours(0, 0, 0, 0);

  
          

            third_workout_date.setDate(last_workout_date.getDate() + 2);
            forth_workout_date.setDate(last_workout_date.getDate() + 2);
            
            last_workout_date.setHours(0,0,0,0);
            third_workout_date.setHours(0, 0, 0, 0);
            forth_workout_date.setHours(0, 0, 0, 0);
            last_day_week.setDate(last_day_week.getDate() + 7);



            //datum formatting

            today.setHours(0, 0, 0, 0);
            last_day_week.setHours(0, 0, 0, 0);





            console.log("heute ist ", today);
            console.log("letzter tag ist ", last_day_week);


            if (last_workout_nr == 1 || today <= last_day_week) {


                var first_day_week_string = first_day_week.getDate().toString() + "." + (first_day_week.getMonth() + 1).toString() +"."+(first_day_week.toString().split(" ")[3]);
                var last_day_week_string = last_day_week.getDate().toString() + "." + (last_day_week.getMonth() + 1).toString()+"."+(last_day_week.toString().split(" ")[3]);


                var to_do_date;
                if (max_workout_nr == 3) {

                    to_do_date = [first_day_week, second_workout_date, third_workout_date];

                } else {
                    console.log("Profis Timeline");
                    to_do_date = [first_day_week, second_workout_date, third_workout_date, forth_workout_date];


                    var Pause_li = document.createElement("li");
                    Pause_li.setAttribute("class", "progress-step");

                    span1 = document.createElement("span");
                    span2 = document.createElement("span");
                    span1.setAttribute("class", "progress-marker");
                    span1.setAttribute("style", "color: grey");
                    span2.setAttribute("class", "progress-text");

                    span_h = document.createElement("h3");
                    span_h.innerHTML = "⟲";

                    span1.appendChild(span_h);

                    h5_ = document.createElement("h5");
                    h5_.setAttribute("class", "progress-title");
                    h5_.innerHTML = "1 Tag Pause";
                    span2.appendChild(h5_);
                    Pause_li.appendChild(span1);
                    Pause_li.appendChild(span2);
                    


                    var Pause_li2 = document.createElement("li");
                    Pause_li2.setAttribute("class", "progress-step");

                    span1_ = document.createElement("span");
                    span2_ = document.createElement("span");
                    span1_.setAttribute("id", "train4");
                    span1_.setAttribute("class", "progress-marker");
                    span1_.setAttribute("style", "color: green");
                    span2_.setAttribute("class", "progress-text");
                    

                    h5_2 = document.createElement("h5");
                    h5_2.setAttribute("class", "progress-title");
                   


                    bonus_button = document.createElement("a");
                    bonus_button.setAttribute("class", "btn btn-light disabled");
                    bonus_button.setAttribute("id", "trainingbutton4");
                    bonus_button.setAttribute("href", "/training");

                    // bonus_button.innerHTML("Bonus Trainingseinheit");
                    h5_2.appendChild(bonus_button);

                    sprechblase_ = document.createElement("p");
                    sprechblase_.setAttribute("class", "progress-status sprechblase1");
                    sprechblase_.setAttribute("id", "sprechblase4");
                    sprechblase_.setAttribute("hidden","true")



                    var Pause_li2 = document.createElement("li");
                    Pause_li2.setAttribute("class", "progress-step");

                    span2_.appendChild(h5_2);
                    span2_.appendChild(sprechblase_);
                    Pause_li2.appendChild(span1_);
                    Pause_li2.appendChild(span2_);


                    time_line_ul = document.getElementById("time_line");
                    time_line_ul.appendChild(Pause_li);
                    time_line_ul.appendChild(Pause_li2);

                }




                for (i = 1; i < to_do_date.length+1; i++)

                {
                    var zuerledigen_am = to_do_date[i - 1].toString().split(" ");

                    if (i ==  to_do_date.length){


                            // 2-> 4-> 6

                                if (today >= to_do_date[i-1] && last_workout_nr == i-1) {

                                    console.log("wir landen  auch hier");

                                    document.getElementById("trainingbutton" + (i).toString()).innerHTML = "Bonus-Training " + (i) + " starten";
                                    document.getElementById("trainingbutton" + (i).toString()).setAttribute("class", "btn btn-light");

                                }else{

                                    document.getElementById("trainingbutton" + i.toString()).innerHTML = "Bonus-Training " + i.toString() + " erst ab " + zuerledigen_am[2] + ". " + zuerledigen_am[1]+". "+zuerledigen_am[3];
                                }

                    }else{


                                if (today >= to_do_date[i] && last_workout_nr == i-1) {



                                document.getElementById("trainingbutton" + (i).toString()).innerHTML = "Training " + (i) + " starten";
                                document.getElementById("trainingbutton" + (i).toString()).setAttribute("class", "btn btn-light");

                                }else{

                                    document.getElementById("trainingbutton" + i.toString()).innerHTML = "Training " + i.toString() + " erst ab " + zuerledigen_am[2] + ". " + zuerledigen_am[1]+". "+zuerledigen_am[3]; 
                                }

                    }




                }








                document.getElementById("wochendauer").innerHTML = "von " + first_day_week_string + " - " + last_day_week_string;
                document.getElementById("week_nr").innerHTML = "Woche " + woche.toString();


                for (i = 1; i < workouts_list.length + 1; i++) {
                    document.getElementById("train" + i.toString()).innerHTML = "✔";
                    document.getElementById("trainingbutton" + i.toString()).innerHTML = "Training " + i.toString() + " nochmal absolvieren";
                    document.getElementById("trainingbutton" + i.toString()).setAttribute("class", "btn btn-light");
                }

                for (j = 0; j < workouts_list.length; j++) {

                    var erledigt_am_ = workouts_list[j]["absolviert_am"].toString().split(" ");


                    document.getElementById("sprechblase" + workouts_list[j]["workout_nr"].toString()).innerHTML = "Workout erledigt am: " + erledigt_am_[1] + ". " + erledigt_am_[2]+". "+erledigt_am_[3];
                    console.log(typeof workouts_list[j]["absolviert_am"])
                    document.getElementById("sprechblase" + workouts_list[j]["workout_nr"]).removeAttribute("hidden");
                }

            } else if (today.getDay() > last_day_week.getDay() && workouts_list[0]["workout_nr"] >= max_workout_nr - 1) {

                first_day_week.setDate(second_workout_date.getDate() + 7);
                last_day_week.setDate(last_day_week.getDate() + 7);
                var first_day_week_string = (first_day_week.getDate()).toString() + "." + (first_day_week.getMonth() + 1).toString();
                var last_day_week_string = (last_day_week.getDate()).toString() + "." + (last_day_week.getMonth() + 1).toString();

                document.getElementById("wochendauer").innerHTML = "von " + first_day_week_string + " - " + last_day_week_string;
                document.getElementById("week_nr").innerHTML = "Woche " + (woche + 1).toString();



            }

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


function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
        // return xmlHttp.responseText;

    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
