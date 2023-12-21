var nombre = parseInt(prompt("Veuillez entrer un nombre:"));


while (nombre <= 49 || nombre >= 101) {
    nombre = parseInt(prompt("Veuillez entrer un nombre entre 50 et 100:"));
}

if (nombre >= 49) {
    alert("Bien joué, votre nombre est supérieur ou égal à 50!");

}
