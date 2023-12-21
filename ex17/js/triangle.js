function construireTriangle(Lignes) {
	for (var i = 1; i <= Lignes; i++) {
		var ligne = "";
		for (var j = 1; j <= Lignes - i; j++) {
			ligne += " ";
		}
		for (var k = 1; k <= 2 * i - 1; k++) {
			ligne += "*";
		}
		console.log(ligne);
	}
}

construireTriangle(7);
