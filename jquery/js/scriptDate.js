$(document).ready(function() {
    // Ajout des jours
    for (let jour = 1; jour <= 31; jour++) {
        let jourTexte = jour < 10 ? '0' + jour : jour; // Formatage du jour
        $('#jour').append(new Option(jourTexte, jourTexte));
    }

    // Ajout des mois
    for (let mois = 1; mois <= 12; mois++) {
        let moisTexte = mois < 10 ? '0' + mois : mois; // Formatage du mois
        $('#mois').append(new Option(moisTexte, moisTexte));
    }

    // Ajout des années
    const anneeActuelle = new Date().getFullYear();
    const anneeDebut = anneeActuelle - 100; // Par exemple, 100 ans en arrière
    const anneeFin = anneeActuelle; // Année actuelle

    for (let annee = anneeDebut; annee <= anneeFin; annee++) {
        $('#annee').append(new Option(annee, annee));
    }
});
