// FEUILLE JAVASCRIPT - 03_07 OPERATEUR TERNAIRE - SEMA 

let x = 15;
let y = -20;
console.log(x,y) 

// faire un if elese pour verifier si x est supérieur ou égal à 10 et on injecte le resultat dans p1 

if(x >= 10){
    document.getElementById('p1').innerHTML = 'x qui contient ' + x + ' est supérieur ou égal à 10';
} else{
    document.getElementById('p1').innerHTML = 'x qui contient ' + x + ' est inférieur à 10';
}