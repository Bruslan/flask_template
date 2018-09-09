



$(document).on('click', '.rezept_speichern', function() {

var params

var rezept_titel= document.getElementById("rezept_titel").value

console.log(rezept_titel)


//postRequest(null, "/save_rezept")

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
                console.log(json_resp)

            }
            return false;
        }
    };
    r.send(JSON.stringify(params));
}


$(document).ready(function() {




httpGetAsync("/get_rezept",function(callback) {

    var workouts = JSON.parse(callback);
    console.log(workouts);

});
});


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