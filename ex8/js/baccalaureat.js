var moyenne = parseInt(prompt("Veuillez entrer votre moyenne:"));
if (moyenne) {
	if (moyenne < 10) {
		document.write("Vous êtes recalé");
		alert("Vous êtes recalé");
	} else if (moyenne < 12) {
		document.write("Vous êtes reçu");
		alert("Vous êtes reçu");
	} else {
		document.write("Vous êtes reçu avec mention");
		alert("Vous êtes reçu avec mention");
	}
} else {
	alert("Veuillez entrer un nombre");
}