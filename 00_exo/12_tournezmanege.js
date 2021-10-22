// FEUILLE JS - 12 TOURNEZMANEGE - SEMA 

// avec while :

let tour1 = 1;
console.log(typeof tour1, tour1);
while(tour1 < 11){
    document.getElementById('tour1').innerHTML += 'C\'est le tour de manège numéro ' + tour1 + '<br>';
    tour1++;
    console.log(typeof tour1, tour1);
}

// Avec for :

// for(let tour2 = 1; tour2 < 11; tour2++){ 
//     document.getElementById('tour2').innerHTML += 'C\'est le tour de manège numéro ' + tour2 + '<br>';
//     console.info(typeof tour2, tour2);
// }

// Avec l'utilisateur qui rentre le nombre :

// avec while : 

// let tour3 = parseInt(prompt('Combien de tours voulez-vous ?','saisissez un nombre, svp'));


// let tour4 = parseInt(prompt('Combien de tours voulez-vous ?'));
// for(let a = 1; a <= tour4 ; a++){ 
//     document.getElementById('tour4').innerHTML += 'C\'est le tour de manège numéro ' + tour4 + '<br>';
//     console.info(typeof tour4, tour4);
// }