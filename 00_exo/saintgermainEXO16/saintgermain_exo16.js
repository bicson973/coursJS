// MA FEUILLE JS - EXO_16 - SAINTGERMAIN

// alert('coucou');

let reponse = '';
console.log(reponse);

let x = 1;

while ((reponse !== 'oui') && (reponse !== 'non')) { 
    reponse = prompt(' On joue au Ni oui, Ni non ? :)');
    console.log(reponse);
    x++;
}
console.log(reponse);
document.getElementById('p1').innerHTML += 'Vous avez perdu !'