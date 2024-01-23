$(document).ready(function () {
	$("#prenomInput").keyup(function () {
		var input = $(this).val();

		$.ajax({
			url: "http://192.168.1.75:8080",
			type: "GET",
			data: { nom: input },
			success: function (prenoms) {
				$("#listePrenoms").empty();
				$.each(prenoms, function (i, prenom) {
					$("#listePrenoms").append(
						$("<option>", {
							value: prenom,
							text: prenom,
						})
					);
				});
			},
			error: function () {
				alert("Erreur lors de la récupération des données");
			},
		});
	});
});
