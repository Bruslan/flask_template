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
                console.log(json_resp)

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


//Aufwärmen

var wiederholungen_jj = {
    sätze: "3",
    pause: "30 sek.",
    monat1: "10",
    monat2: "15",
    monat3: "20",
    monat4: "25"
}


var wh_fortgeschrittene_jj = {
    sätze: "3",
    pause: "30 sek.",
    monat1: "30",
    monat2: "35",
    monat3: "35",
    monat4: "40"
}


var wh_profi_jj = {
    sätze: "3",
    pause: "30 sek.",
    monat1: "40",
    monat2: "40",
    monat3: "45",
    monat4: "50"
}



// pair_cycling


var wiederholungen_paircycling = {
    sätze: "2",
    pause: "30 sek.",
    monat1: "1 Minute",
    monat2: "1 Minute",
    monat3: "1 Minute",
    monat4: "1:30 Minuten"
}

var wiederholungen_paircycling_fortgeschrittene = {
    sätze: "2",
    pause: "30 sek.",
    monat1: "1:30 Minuten",
    monat2: "1:30 Minuten",
    monat3: "1:30 Minuten",
    monat4: "2 Minuten"
}


var wiederholungen_paircycling_profi = {
    sätze: "2",
    pause: "30 sek.",
    monat1: "2 Minuten",
    monat2: "2 Minuten",
    monat3: "2 Minuten",
    monat4: "2 Minuten"
}

//boxing pads

var wiederholungen_boxing_pads = {
    sätze: "2",
    pause: "30 sek.",
    monat1: "20 sek.",
    monat2: "20 sek.",
    monat3: "20 sek.",
    monat4: "25 sek."
}

var wiederholungen_boxing_pads_fortgeschrittene = {
    sätze: "2",
    pause: "30 sek.",
    monat1: "25 sek.",
    monat2: "25 sek.",
    monat3: "25 sek.",
    monat4: "30 sek."
}
var wiederholungen_boxing_pads_profi = {
    sätze: "2",
    pause: "30 sek.",
    monat1: "30 sek.",
    monat2: "45 sek.",
    monat3: "45 sek",
    monat4: "1 min."
}

// high_knees
var wiederholungen_high_knees = {
    sätze: "2",
    pause: "1 Min.",
    monat1: "15",
    monat2: "20",
    monat3: "20",
    monat4: "25"
}

var wiederholungen_high_knees_fortgeschrittene = {
    sätze: "2",
    pause: "1 Min.",
    monat1: "25",
    monat2: "30",
    monat3: "30",
    monat4: "35"
}

var wiederholungen_high_knees_profi = {
    sätze: "2",
    pause: "1 Min.",
    monat1: "35",
    monat2: "40",
    monat3: "45",
    monat4: "50"
}


var aufwärmen_struct = {
    "Jumping-Jacks": [wiederholungen_jj, wh_fortgeschrittene_jj, wh_profi_jj],
    "Pair-Cycling": [wiederholungen_paircycling, wiederholungen_paircycling_fortgeschrittene, wiederholungen_paircycling_profi],
    "Boxing-Pads": [wiederholungen_boxing_pads, wiederholungen_boxing_pads_fortgeschrittene, wiederholungen_boxing_pads_profi],
    "High Knees And Hold Squat": [wiederholungen_high_knees, wiederholungen_high_knees_fortgeschrittene, wiederholungen_high_knees_profi]

};


//Training Kraft







Kneeling_Partner_Clap_Pushups = { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "10",  Monat2: "12",  Monat3: "12",  Monat4: "15" }
Front_Raises ={ Sätze: "3", Pause: "2-3 Min.", Monat1: "10", Monat2: "12", Monat3: "12", Monat4: "15" }
Lateral_Raises ={ Sätze: "3",  Pause: "2-3 Min.", Monat1: "10", Monat2: "12", Monat3: "12", Monat4: "15"}
Elbow_Raises ={ Sätze: "3", Pause: "2-3 Min.", Monat1: "10", Monat2: "12", Monat3: "12", Monat4: "15"}
Plank_Tips = {Sätze: "3", Pause: "1-2 Min. ", Monat1: "10", Monat2: "10", Monat3: "12", Monat4: "12"}
Partner_Leg_Curls ={Sätze: "3", Pause: "2-3 Min.", Monat1: "10", Monat2: "12", Monat3: "12", Monat4: "15"}
Partner_Squats = {Sätze: "3", Pause: "2-3 Min.", Monat1: "8", Monat2: "10", Monat3: "12", Monat4: "15"}
Partner_Reaction_Lunges ={Sätze: "3", Pause: "2-3 Min.", Monat1: "6", Monat2: "8", Monat3: "10" Monat4: "12"}
Jump_Overs ={ Sätze: "3", Pause: "1-2 Min.", Monat1: "10", Monat2: "12", Monat3: "15", Monat4: "20"}
Partner_Calve_Pushes ={Sätze: "3", Pause: "1 Min.", Monat1: "10", Monat2: "12", Monat3: "12", Monat4: "15"}
Romanian_Partner_Squats ={Sätze: "4 – 2 pro Seite", Pause: "2-3 Min.", Monat1: "8", Monat2: "10", Monat3: "10", Monat4: "12"}

Partner_Sit_Ups  = {Sätze :"3", Pause: "1-2 Min.", Monat1: "10", Monat2: "12", Monat3: "15", Monat4: "15"}
Partner_Clap_Sit_Ups  ={Sätze :"3", Pause: "2 Min.", Monat1: "8", Monat2: "10", Monat3: "12", Monat4: "12"}
Partner_Leg_Circles  = {Sätze: "3", Pause: "1-2 Min.", Monat1: "10", Monat2: "12", Monat3: "14", Monat4: "16"}
Partner_Planks  ={Sätze: "3", Pause: "1-2 Min.", Monat1: "15 Sek.", Monat2: "20 Sek.", Monat3: "25 Sek.", Monat4: "25 Sek."}


Partner_Bicep_Curls  ={Sätze: "3", Pause: "2-3 Min.", Monat1: "8", Monat2: "10", Monat3: "12", Monat4: "15"}
Partner_Pushes  ={Sätze: "3 – mit erhöhter Intensität", Pause: "2-3 Min.", Monat1: "12", Monat2: "14", Monat3: "16", Monat4: "18"}
Partner_Pulls  ={Sätze: "3 – mit erhöhter Intensität", Pause: "2-3 Min.", Monat1: "12", Monat2: "14", Monat3: "16", Monat4: "18"}
Tricep_Curls  ={Sätze: "3", Pause: "2-3 Min.", Monat1: "8", Monat2: "10", Monat3: "12", Monat4: "15"}


var kraft_struct_anfänger = {
    "brust": [Kneeling_Partner_Clap_Pushups],
    "schulter": [Lateral_Raises, Front_Raises, Elbow_Raises,Plank_Tips],
    "beine": [Partner_Leg_Curls, Partner_Squats, Partner_Reaction_Lunges, Jump_Overs, Partner_Calve_Pushes, Romanian_Partner_Squats],
    "bauch": [Partner_Sit_Ups, Partner_Clap_Sit_Ups, Partner_Leg_Circles, Partner_Planks],
    "arme": [Partner_Bicep_Curls, Partner_Pushes, Partner_Pulls, Tricep_Curls]

};


function create_workout_aufwärmen(div_id, video_titel_string, monat, element) {




    var trainingswiederholungen = aufwärmen_struct[video_titel_string][0]["monat" + monat]
    var trainingssätze = aufwärmen_struct[video_titel_string][0]["sätze"]
    var pause = aufwärmen_struct[video_titel_string][0]["pause"]
    var trainingsanweisung_string = `Sätze: ${trainingssätze} - Wiederholungen: ${trainingswiederholungen} - Pause: ${pause}`






    var aufwärm_div = document.getElementById(div_id)

    var aufwärm_titel = document.createElement("h3")
    aufwärm_titel.innerHTML = element + video_titel_string

    var anweisung = document.createElement("p")
    anweisung.innerHTML = trainingsanweisung_string

    var video_element = document.createElement("video")

    video_element.setAttribute("width", "800")

    video_element.setAttribute("controls", "true")

    var source = document.createElement("source")

    var übung = video_titel_string + ".mp4"
    var video_name_string = "aufwärmen/" + übung
    source.setAttribute("src", "static/video/workouts/" + video_name_string)
    source.setAttribute("type", "video/mp4")


    video_element.appendChild(source)
    aufwärm_div.appendChild(aufwärm_titel)
    aufwärm_div.appendChild(anweisung)
    aufwärm_div.appendChild(video_element)


}


function create_workout_kraft(strukt, div_id, video_titel_string, monat, element, partie, übungsnr, stufe) {

    var trainingswiederholungen = strukt[partie][übungsnr]["Monat" + monat]
    var trainingssätze = strukt[partie][übungsnr]["Sätze"]
    var pause = strukt[partie][übungsnr]["Pause"]
    var trainingsanweisung_string = `Sätze: ${trainingssätze} - Wiederholungen: ${trainingswiederholungen} - Pause: ${pause}`


    var aufwärm_div = document.getElementById(div_id)

    var aufwärm_titel = document.createElement("h3")
    aufwärm_titel.innerHTML = element + video_titel_string

    var anweisung = document.createElement("p")
    anweisung.innerHTML = trainingsanweisung_string

    var video_element = document.createElement("video")

    video_element.setAttribute("width", "800")

    video_element.setAttribute("controls", "true")

    var source = document.createElement("source")

    var übung = video_titel_string + ".mp4"
    var video_name_string = übung

    var stufen = ["anfaenger", "fortgeschrittener", "profi"]
    source.setAttribute("src", "static/video/workouts/kraft/" + stufen[stufe] + "/" + partie + "/" + video_name_string)
    source.setAttribute("type", "video/mp4")


    video_element.appendChild(source)
    aufwärm_div.appendChild(aufwärm_titel)
    aufwärm_div.appendChild(anweisung)
    aufwärm_div.appendChild(video_element)


}


$(document).ready(function() {

    httpGetAsync('/tasks', function(callback) {
        // do something with response


        var workouts = JSON.parse(callback);


        if (workouts["status"] == true) {
            var workouts_list = workouts["workouts"]
            woche = workouts_list[0]["week_nr"]
            var monat = (Math.trunc(woche / 4 + 1))
            workout_nr = workouts_list[0]["workout_nr"]
            //var stufe = workouts_list[0]["stufe"]
            var stufe =0;
        } else {
            woche = 1;
            monat = 1;
            workout_nr = 1;
            stufe = 0;
        }

        aufwärmen_pool = ["Jumping-Jacks", "Pair-Cycling", "Boxing-Pads", "High Knees And Hold Squat"]


        create_workout_aufwärmen("aufwärmvideos", aufwärmen_pool[stufe], monat, "1. ")
        create_workout_aufwärmen("aufwärmvideos", aufwärmen_pool[workout_nr], "2. ")


        workout_stufen = [kraft_struct_anfänger]


        create_workout_kraft(workout_stufen[stufe], "kraft_videos", "Partner-Pushups", monat, "1. ", "brust", 0, stufe)
        create_workout_kraft(workout_stufen[stufe], "kraft_videos", "Front-Raises", monat, "2. ", "schulter", 1, stufe)
        create_workout_kraft(workout_stufen[stufe], "kraft_videos", "Front-Raises", monat, "3. ", "schulter", 1, stufe)

    })


});


$(document).on('click', '#Abschließen', function() {

    postRequest(null, "/save_workout");

});


$(document).on('change', '#inlineFormCustomSelectPref', function() {

    schwierigkeitsgrad = document.getElementById("inlineFormCustomSelectPref").value
    //change_content(schwierigkeitsgrad)

});