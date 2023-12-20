var nombreDeTours = prompt("Combien de tours de manège souhaitez-vous faire ?");

if ((nombreDeTours) || nombreDeTours <= 0) {
    for (var tours = 1; tours <= nombreDeTours; tours++) {
        alert("C'est le tour de manège n°" + tours);
    }
}