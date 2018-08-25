

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


