

function change_content(schwierigkeitsgrad,workoutnr)
{



console.log("ich werde ausgeführt")
aufwärmen_pool = ["Jumping-Jacks","Pair-Cycling","Boxing-Pads","High Knees And Hold Squat"]




var aufwärmen = document.getElementById("aufwärmen1")
var aufwärmen_titel = document.getElementById("aufwärm_titel1")
var aufwärmen2 = document.getElementById("aufwärmen2")
var aufwärmen_titel2 = document.getElementById("aufwärm_titel2")

video_titel_aufwärmen = aufwärmen_pool[0]

video_titel_aufwärmen_2 = aufwärmen_pool[workoutnr+1]


aufwärmen_titel.innerHTML = video_titel_aufwärmen

console.log(video_titel_aufwärmen)
aufwärmen_titel2.innerHTML = video_titel_aufwärmen_2


var src_string_aufwärmen = "static/video/workouts/aufwärmen" + "/"+video_titel_aufwärmen+".mp4"

console.log(src_string_aufwärmen)

console.log(aufwärmen)

var src_string_aufwärmen2 = "static/video/workouts/aufwärmen" + "/"+video_titel_aufwärmen_2+".mp4"

aufwärmen.setAttribute("src",src_string_aufwärmen)
aufwärmen2.setAttribute("src",src_string_aufwärmen2)


aufwärmen.load()


$('#aufwärmvideos').load(document.URL +  ' #aufwärmvideos');




}


function set_wiederholungen(woche){


var aufwärmen_text = document.getElementById("aufwärmen_tex_übung1")
var aufwärmen_text_2 = document.getElementById("aufwärmen_tex_übung2")

// console.log("woche"+woche.toString())


aufwärmen_text.innerHTML = "Sätze: 3, Wiederholungen: "+ aufwärmen_struct["Jumping-Jacks"]["monat"+woche.toString()]
aufwärmen_text_2.innerHTML = "Sätze: 2, Wiederholungen: "+ aufwärmen_struct["Pair-Cycling"]["monat"+woche.toString()]

}



brust = {
    anfänger: ["Kneeling Partner-Clap Pushups"],
    fortgeschrittene: ["Partner-Clap Pushups", "Kneeling Partner-Clap Pushups"],
    profis: ["Partner Clap-Pushups","Push & Press","Platform-Pushups"]
}

schulter = {

    anfänger: [],
    fortgeschrittene: [],
    profis: []

}

beine = {

    anfänger: [],
    fortgeschrittene: [],
    profis: []

}

bauch = {

    anfänger: [],
    fortgeschrittene: [],
    profis: []

}

arme = {

    anfänger: [],
    fortgeschrittene: [],
    profis: []

}


anweisung_anfänger = {


        "Kneeling Partner-Clap Pushups": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "10",  Monat2: "12",  Monat3: "12",  Monat4: "15" },


        "Lateral-Raises": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "10",  Monat2: "12",  Monat3: "12",  Monat4: "15" },
        "Front Raises": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "10",  Monat2: "12",  Monat3: "12",  Monat4: "15" },
        "Elbow-Raises": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "10",  Monat2: "12",  Monat3: "12",  Monat4: "15" },
        "Plank-Tips": { Sätze: "3",  Pause: "1-2 Min. ",  Monat1: "10",  Monat2: "10",  Monat3: "12",  Monat4: "12" },

        "Partner Leg Curls": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "10",  Monat2: "12",  Monat3: "12",  Monat4: "15" },
        "Partner-Squats": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "8",  Monat2: "10",  Monat3: "12",  Monat4: "15" },
        "Partner Reaction-Lunges": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "6",  Monat2: "8",  Monat3: "10" , Monat4: "12" },
        "Jump-Overs": { Sätze: "3",  Pause: "1-2 Min.",  Monat1: "10",  Monat2: "12",  Monat3: "15",  Monat4: "20" },
        "Partner Calve-Pushes": { Sätze: "3",  Pause: "1 Min.",  Monat1: "10",  Monat2: "12",  Monat3: "12",  Monat4: "15" },
        "Romanian Partner-Squats": { Sätze: "4 – 2 pro Seite",  Pause: "2-3 Min.",  Monat1: "8",  Monat2: "10",  Monat3: "10",  Monat4: "12" },

        "Partner Sit-Ups " : {Sätze:  "3",  Pause: "1-2 Min.", Monat1: "10", Monat2: "12", Monat3: "15", Monat4: "15"},
	    "Partner-Clap Sit-Ups": { Sätze: "3",  Pause: "2 Min.",  Monat1: "8",  Monat2: "10",  Monat3: "12",  Monat4: "12" },
	    "Partner Leg-Circles": { Sätze: "3",  Pause: "1-2 Min.",  Monat1: "10",  Monat2: "12",  Monat3: "14",  Monat4: "16" },
	    "Partner Planks": { Sätze: "3",  Pause: "1-2 Min.",  Monat1: "15 Sek.",  Monat2: "20 Sek.",  Monat3: "25 Sek.",  Monat4: "25 Sek." },

	    "Partner Bicep-Curls": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "8",  Monat2: "10",  Monat3: "12",  Monat4: "15" },
	    "Partner-Pushes": { Sätze: "3 – mit erhöhter Intensität",  Pause: "2-3 Min.",  Monat1: "12",  Monat2: "14",  Monat3: "16",  Monat4: "18" },
	    "Partner-Pulls": { Sätze: "3 – mit erhöhter Intensität",  Pause: "2-3 Min.",  Monat1: "12",  Monat2: "14",  Monat3: "16",  Monat4: "18" },
	    "Tricep-Curls": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "8",  Monat2: "10",  Monat3: "12",  Monat4: "15" }

//fortgeschrittene
}

anweisung_fortgeschrittene = {
    "Partner-Clap Pushups": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "5-8",  Monat2: "8-10",  Monat3: "8-10",  Monat4: "10-12" },
    "Kneeling Partner-Clap Pushups": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "15",  Monat2: "15",  Monat3: "18",  Monat4: "20" },

    "Partner Sumo-Squat Plank": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "15",  Monat2: "15",  Monat3: "18",  Monat4: "20" },
    "Partner-Squats": { Sätze: "3",  Pause: "2-,3 Min.",  Monat1: "15",  Monat2: "15",  Monat3: "18",  Monat4: "20" },
    "Partner Leg-Press": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "8",  Monat2: "10",  Monat3: "12",  Monat4: "15" },
    "Partner Reaction-Lunges": { Sätze: "3",  Pause: "3 Min.",  Monat1: "12",  Monat2: "14",  Monat3: "14",  Monat4: "16" },
    "Romanian Partner-Squats": { Sätze: "4 – 2 pro Seite; mit erhöhter Intensität",  Pause: "2-3 Min.",  Monat1: "10",  Monat2: "10",  Monat3: "12",  Monat4: "12" },

    "Partner Sit-Ups": { Sätze: "3",  Pause: "2 Min.",  Monat1: "20",  Monat2: "20",  Monat3: "25",  Monat4: "30" },
    "Partner-Clap Sit-Ups": { Sätze: "3",  Pause: "2 Min.",  Monat1: "12",  Monat2: "15",  Monat3: "18",  Monat4: "20" },
    "Sit-Ups & Climbers": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "12",  Monat2: "15",  Monat3: "18",  Monat4: "20" },
    "Partner Leg-Throws": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "12",  Monat2: "15",  Monat3: "18",  Monat4: "20" },
    "Partner Planks": { Sätze: "3",  Pause: "1 Min.",  Monat1: "20 Sek.",  Monat2: "25 Sek.",  Monat3: "30 Sek.",  Monat4: "35 Sek." },
    "Forearm-to-Forearm Plank": { Sätze: "3",  Pause: "1 Min.",  Monat1: "20 Sek.",  Monat2: "25 Sek.",  Monat3: "30 Sek.",  Monat4: "35 Sek." },

    "Partner-Dips": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "6",  Monat2: "8",  Monat3: "10",  Monat4: "12" },
    "Under & Overs": { Sätze: "3",  Pause: "2 Min.",  Monat1: "10",  Monat2: "12",  Monat3: "16",  Monat4: "20" },
    "Plank-Tips": { Sätze: "3",  Pause: "1-2 Min. ",  Monat1: "12",  Monat2: "14",  Monat3: "18",  Monat4: "20" },
    "Lateral-Raises": { Sätze: "3 – mit erhöhter Intensität",  Pause: "2-3 Min.",  Monat1: "10",  Monat2: "12",  Monat3: "12",  Monat4: "15" },
    "Front Raises": { Sätze: "3 – mit erhöhter Intensität",  Pause: "2-3 Min.",  Monat1: "10",  Monat2: "12",  Monat3: "12",  Monat4: "15" },
    "Elbow-Raises": { Sätze: "3 – mit erhöhter Intensität",  Pause: "2-3 Min.",  Monat1: "10",  Monat2: "12",  Monat3: "12",  Monat4: "15" },

    "Partner Bicep-Curls": { Partner Bicep - Curls  Sätze: "3 - mit erhöhter Intensität",  Pause: "2-3 Min. ",  Monat1: "10",  Monat2: "10",  Monat3: "12",  Monat4: "12" },
    "Partner Tricep-Curls": { Sätze: "3 - mit erhöhter Intensität",  Pause: "2-3 Min. ",  Monat1: "10",  Monat2: "10",  Monat3: "12",  Monat4: "12" }
}
// Profi

anweisungen_profis = {

    "Partner Clap-Pushups": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "10-12",  Monat2: "12-14",  Monat3: "14-16",  Monat4: "16-20" },
    "Push & Press": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "10-12",  Monat2: "12-14",  Monat3: "14-16",  Monat4: "16-20" },
    "Platform-Pushups": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "10-12",  Monat2: "12-14",  Monat3: "14-16",  Monat4: "16-20" },


    "Partner Back-Squats": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "8",  Monat2: "10",  Monat3: "12",  Monat4: "15" },
    "Partner Leg-Press": { Sätze: "3 – mit erhöhtem Gegengewicht",  Pause: "2-3 Min.",  Monat1: "8",  Monat2: "10",  Monat3: "12",  Monat4: "15" },
    "Partner Reaction-Lunges": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "16",  Monat2: "16",  Monat3: "18",  Monat4: "20" },
    "Partner-Squats": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "20",  Monat2: "30",  Monat3: "35",  Monat4: "40" },
    "Romanian Partner-Squats": { Sätze: "4 – 2 pro Seite; mit hoher Intensität",  Pause: "2-3 Min.",  Monat1: "10",  Monat2: "10",  Monat3: "12",  Monat4: "12" },


    "Partner-Clap Sit-Ups": { Sätze: "3",  Pause: "2 Min.",  Monat1: "20",  Monat2: "25",  Monat3: "30",  Monat4: "40" },
    "Partner Leg-Throws": { Sätze: "3",  Pause: "2 Min.",  Monat1: "20",  Monat2: "20",  Monat3: "25",  Monat4: "30" },
    "Sit-Ups & Climbers": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "20",  Monat2: "20",  Monat3: "25",  Monat4: "30" },
    "Partner Sit-Ups": { Sätze: "3",  Pause: "2 Min.",  Monat1: "30",  Monat2: "35",  Monat3: "40",  Monat4: "50" },


    "Handstand-Pushups": { Sätze: "3",  Pause: "3 Min.",  Monat1: "3",  Monat2: "6",  Monat3: "8",  Monat4: "10" },
    "Partner-Dips": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "12-14",  Monat2: "14-16",  Monat3: "16-18",  Monat4: "20" },
    "Lateral-Raises": { Sätze: "3 – mit hoher Intensität",  Pause: "2-3 Min.",  Monat1: "10",  Monat2: "12",  Monat3: "12",  Monat4: "15" },
    "Front Raises": { Sätze: "3 – mit hoher Intensität",  Pause: "2-3 Min.",  Monat1: "10",  Monat2: "12",  Monat3: "12",  Monat4: "15" },
    "Elbow-Raises": { Sätze: "3 – mit hoher Intensität",  Pause: "2-3 Min.",  Monat1: "10",  Monat2: "12",  Monat3: "12",  Monat4: "15" };


    "Partner-Rowing": { Sätze: "3",  Pause: "2-3 Min.",  Monat1: "8",  Monat2: "10",  Monat3: "12",  Monat4: "12-15" },

    "Bicep-Curls": { Sätze: "3 – mit hoher Intensität",  Pause: "2-3 Min. ",  Monat1: "10",  Monat2: "10",  Monat3: "12",  Monat4: "12" },
    "Tricep-Curls": { Sätze: "3 – mit hoher Intensität",  Pause: "2-3 Min. ",  Monat1: "10",  Monat2: "10",  Monat3: "12",  Monat4: "12" }

}




