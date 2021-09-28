// FEUILLE EXTERNE JS - 03 Types de données - SEMA

// 1 STRING :

let presentation = 'Je m\'appelle Michael.';
console.log(typeof(presentation));

let age = 25;
let age2 = 56;

document.getElementById('p1').innerHTML = 'type de données pour la variable presentation : ' + typeof presentation;

document.getElementById('p2').innerHTML = 'type de données pour la variable presentation : ' + typeof age;

document.getElementById('p3').innerHTML = 'type de données pour la variable presentation : ' + typeof age2;

let monFilm1 = 'Mon film préféré est "20000 lieus sous les mers" avec kirk Douglas';
console.log(monFilm1);

let monFilm2 = 'Mon film préféré est \"20 000 lieux sous les mers\"';
console.log(monFilm2);

// 2 NUMBER : 

let x = 10;
let y = -20000;
let z = 3.14;
console.log(z);

console.log (typeof z, z); // On peut passer deux arguments dans la console

// 3 BOOLEAN : true = vrai / false = faux 

let test = 8 > 4;
console.log(typeof test, test);

// 4 Null : ou vide & 5 undefined

let vetement;
console.log(typeof vetement);

let nul = null;
let indefini;

console.log(typeof nul);

document.getElementById('p5').innerHTML = 'Le type de la variable nul est : ' + typeof nul;

document.getElementById('p6').innerHTML = 'Le type de la variable indefini est : ' + typeof indefini;