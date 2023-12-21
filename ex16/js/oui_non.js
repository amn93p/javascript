var niOuiNiNon;
while (true) {
	niOuiNiNon = prompt("Première question: Tu veux jouer à ni Oui ni Non ?");
	if (niOuiNiNon === "Oui" || niOuiNiNon === "Non") {
		alert("Tu as perdu!");
		break;
	}

	niOuiNiNon = prompt(
		"Deuxième question: Je surfe beaucoup sur la toile, et toi tu aimes te faire des toiles ?"
	);
	if (niOuiNiNon === "Oui" || niOuiNiNon === "Non") {
		alert("Tu as perdu!");
		break;
	}

	niOuiNiNon = prompt(
		"Troisième question: Tu étais au courant de la dernière nouvelle ?"
	);
	if (niOuiNiNon === "Oui" || niOuiNiNon === "Non") {
		alert("Tu as perdu!");
		break;
	}

	niOuiNiNon = prompt(
		"Quatrième question: J'ai un trou de mémoire, on joue à quel jeu déjà ?"
	);
	if (niOuiNiNon === "Oui" || niOuiNiNon === "Non") {
		alert("Tu as perdu!");
		break;
	}

	niOuiNiNon = prompt(
		"Dernière question: Ouah mais tu es trop fort, tu t'es beaucoup entraîné à ce jeu ?"
	);
	if (niOuiNiNon === "Oui" || niOuiNiNon === "Non") {
		alert("Tu as perdu!");
		break;
	}
}
