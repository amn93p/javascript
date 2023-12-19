var mois = parseInt(prompt("Veuillez saisir le numéro d'un mois:"));

if (mois >= 1 && mois <= 12) {
    if (mois === 1 || mois === 3 || mois === 5 || mois === 7 || mois === 8 || mois === 10 || mois === 12) {
        document.write("Le mois saisit a 31 jours.");
        alert("Le mois saisit a 31 jours.")
    } else if (mois === 4 || mois === 6 || mois === 9 || mois === 11) {
        document.write("Le mois saisit a 30 jours.");
        alert("Le mois saisit a 30 jours.")
    } else {
        document.write("Le mois saisit a 28 jours.");
        alert("Le mois saisit a 28 jours.")

    }
} else {
    document.write("Le mois est invalide.");
    alert("Le mois est invalide.")
}