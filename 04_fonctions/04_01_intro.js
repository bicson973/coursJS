// FEUILLE JAVASCRIPT - FONCTIONS - SEMA 

console.log(Math.random());
document.getElementById('p1').innerHTML = Math.random(); /* ici on exécute le code "caché" derrière la fonction, on appelle la fonction ou on l'invoque */

let discours1 = 'Bonjour, je suis Donald Trump et j\'ai gagné';
console.log(discours1); 

let discours2 = discours1.replace('Donald Trump', 'Joe Biden');
console.log(discours2); 

document.getElementById('p2').innerHTML = discours2;

// Création de fonctions 

// 1- Multiplier le résultat de random() par 100

function randomfois100(){
    return Math.random() * 100;
}
console.info(randomfois100);

document.getElementById('p3').innerHTML = randomfois100();

// 2- Autres exemple d'une multiplication

function multiplier(nbr1, nbr2){ /* Mot clef + nom de la fonction() */
    // return(nbr1 * nbr2); /* La fonction écrite simplement */
    return('La multiplication : ' + nbr1 + ' x ' + nbr2 + ' = ' + (nbr1 * nbr2)); /* Code qui renvoie une sting avec le calcul */
}
console.log(multiplier(3,9));
document.getElementById('p4').innerHTML = multiplier(3,9);

// Exo faites une fonction pour soustraire deux nombre. 

function soustraction(nbr3, nbr4){
    return(nbr3 - nbr4);
}
console.log(soustraction(6,9));
document.getElementById('p5').innerHTML = soustraction(6,9);

// Exo faites une fonction pour additioner deux nombre. 

function additioner(nbr5, nbr6){
    return(nbr5 + nbr6);
}
console.log(additioner(9,10));
document.getElementById('p6').innerHTML = additioner(9,10);

// Exo faites une fonction pour divisé deux nombre. 

function division(nbr7, nbr8){
    return(nbr7 / nbr8);
}
console.log(division(10,13));
document.getElementById('p7').innerHTML = division(10,13);

// Exo faites une fonction pour modulé deux nombre. 

function modulo(nbr7, nbr8){
    return(nbr7 % nbr8);
}
console.log(modulo(13,16));
document.getElementById('p8').innerHTML = modulo(13,16);


