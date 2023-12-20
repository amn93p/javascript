while (true) {
    var heures = parseInt(prompt("Entrez les heures :"));
    var minutes = parseInt(prompt("Entrez les minutes :"));
    var secondes = parseInt(prompt("Entrez les secondes :"));

    if (heures >= 0 && heures <= 23 && minutes >= 0 && minutes <= 59 && secondes >= 0 && secondes <= 59) {
        secondes ++;
        if  (secondes === 60) {
            secondes = 0;
            minutes ++;

             if (minutes === 60) {
                minutes = 0;
                heures ++;

                if (heures === 24) {
                    heures = 0;
                }
            }
        }

        alert("L'heure une seconde plus tard : " + heures + "h"+ minutes +"m" + secondes + "s");
        document.write("L'heure une seconde plus tard : " + heures + "h"+ minutes +"m" + secondes + "s");
        break;
    }
}