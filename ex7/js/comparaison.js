var nmb1, nmb2;
nmb1 = prompt("Veuillez entrer le premier nombre");
nmb2 = prompt("Veuillez entrer le deuxième nombre");
if (nmb1 == nmb2) {
	alert(nmb1 + " est égal à " + nmb2);
}
else if (nmb1 > nmb2) {
	alert(nmb1 + " est plus grand que " + nmb2);
}
else if (nmb1 < nmb2) {
	alert(nmb1 + " est plus petit que " + nmb2);
}