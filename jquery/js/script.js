$(document).ready(function () {
	$("button").css("border-radius", "40px");
	$("#resultat").css("background-color", "white");

	$("#btn").click(function () {
		let val1 = $("#calc1").val();
		let val2 = $("#calc2").val();
		let operateur = $("#selection").val();

		// Vérifications
		if (val1 === "") {
			alert("Merci de saisir un chiffre dans la zone de texte 1..");
			return;
		}

		if (val2 === "") {
			alert("Merci de saisir un chiffre dans la zone de texte 2..");
			return;
		}

		let num1 = parseFloat(val1);
		let num2 = parseFloat(val2);
		let resultat;

		switch (operateur) {
			case "+":
				resultat = num1 + num2;
				break;
			case "-":
				resultat = num1 - num2;
				break;
			case "*":
				resultat = num1 * num2;
				break;
			case "/":
				resultat = num1 / num2;
				break;
		}

		$("#resultat").val(resultat);
	});
});
