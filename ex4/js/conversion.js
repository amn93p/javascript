var celsius = prompt("Entrez la température en celsius :", "0");
var fahrenheit = celsius * (9 / 5) + 32;
window.alert(
	"La température fahrenheit de " + celsius + "°C " + "est " + fahrenheit + "°F"
);
document.write(
	"La température fahrenheit de " + celsius + "°C " + "est " + fahrenheit + "°F"
);