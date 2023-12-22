var multipl = prompt("Veuillez entrer un nombre entre 2 et 9 :");

multipl = parseInt(multipl);

if (multipl >= 2 && multipl <= 9) {
	for (var i = 0; i <= 10; i++) {
		console.log(multipl + " x " + i + " = " + multipl * i);
	}
}