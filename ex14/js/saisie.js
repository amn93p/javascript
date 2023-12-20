var nombre = parseInt(prompt("Veuillez entrer un nombre:"));

while (nombre > 50 && nombre < 100) {
    if (nombre > 50) {
        console.log("Ce nombre est supérieur à 50!");
    } else if (nombre < 100) {
        console.log("Ce nombre est inférieur à 100!");
        break; 
    }
}

if (nombre <= 50) {
    console.log("Ce nombre est inférieur à 50!");
} else if (nombre >= 100) {
    console.log("Ce nombre est supérieur à 100!");
}
