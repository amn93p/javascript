var jour = prompt("Veuillez entrer un jour de la semaine: ");
var mardi = "Mardi";
var mercredi = "Mercredi";
var jeudi = "Jeudi";
var vendredi = "Vendredi";
var samedi = "Samedi";
var dimanche = "Dimanche";
if (jour == "Lundi") {
	alert("Le jour suivant est : " + mardi);
} 
else if (jour == mardi) {
	alert("Le jour suivant est : " + mercredi);
} 
else if (jour == mercredi) {
	alert("Le jour suivant est : " + jeudi);
} 
else if (jour == jeudi) {
	alert("Le jour suivant est : " + vendredi);
} 
else if (jour == vendredi) {
	alert("Le jour suivant est : " + samedi);
} 
else if (jour == samedi) {
	alert("Le jour suivant est : " + dimanche);
} 
else if (jour == dimanche) {
	alert("Le jour suivant est : " + "Lundi");
} 
else  {
	alert("Vous n'avez pas entré le jour souhaité!");
}

// VERSION SWITCH:

// switch(jour) {
// 	case "Lundi":
// 	alert("Le jour suivant est : " + mardi);
// 	break;
// } 
// switch(jour) {
// 	case mardi:
// 	alert("Le jour suivant est : " + mercredi);
// 	break;
// } 
// switch(jour) {
// 	case mercredi:
// 	alert("Le jour suivant est : " + jeudi);
// 	break;
// } 
// switch(jour) {
// 	case jeudi:
// 	alert("Le jour suivant est : " + vendredi);
// 	break;
// } 
// switch(jour) {
// 	case vendredi:
// 	alert("Le jour suivant est : " + samedi);
// 	break;
// } 
// switch(jour) {
// 	case samedi:
// 	alert("Le jour suivant est : " + dimanche);
// 	break;
// } 
// switch(jour) {
// 	case dimanche:
// 	alert("Le jour suivant est : " + "Lundi");
// 	break;
// } 

