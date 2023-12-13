var ht = prompt("Entrez le prix HT :", "0");
const tva = 0.2;
ht = +ht;
var prixTTC = ht * (1 + tva);
document.write("Le prix TTC est de " + prixTTC.toFixed(2));
window.alert("Le prix TTC est de " + prixTTC.toFixed(2));
