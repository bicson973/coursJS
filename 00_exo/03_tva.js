// FEUILLE JS - TVA - SEMA 

let tva = 1.2; 
console.log(tva);

let prixHT; 
prix = prompt('Prix HT ?')
console.log(prix);

let prixTTC;
prixTTC = prixHT * tva;
document.getElementById('p1').innerHTML = 'Résultat : Prix ' + prixHT + ' $ HT pour un total de ' + prixTTC + ' $ TTC';

