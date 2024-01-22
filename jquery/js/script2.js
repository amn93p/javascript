$(document).ready(function () {
	$("#eye").click(function () {
		let input = $(this).prev("input");
		if (input.attr("type") === "password") {
			input.attr("type", "text");
			$("i").attr("class", "fa-solid fa-eye-slash");
		} else {
			input.attr("type", "password");
            $("i").attr("class", "fa-solid fa-eye");
		}
	});

	$("input").on("input", function () {
		let length = $(this).val().length;
		if (length > 8) {
			$("#img").hide();
		} else {
			$("#img").show();
		}
	});
});
