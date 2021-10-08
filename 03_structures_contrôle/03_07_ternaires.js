// FEUILLE JAVASCRIPT - 03_07 OPERATEUR TERNAIRE - SEMA 

let x = 15;
let y = -20;
console.log(x,y) 

// faire un if elese pour verifier si x est supérieur ou égal à 10 et on injecte le resultat dans p1 

if(x >= 10){
    document.getElementById('p1').innerHTML = 'x qui contient ' + x + ' est supérieur ou égal à 10';
} else {
    document.getElementById('p1').innerHTML = 'x qui contient ' + x + ' est inférieur à 10';
}

// La meme chose en ternaire : 

document.getElementById('p2').innerHTML = x >= 10 ? 'x est supérieur ou égal à 10' : 'x est inférieur à 10'; 

// tester si y est supérieur à 10. 
// if else

if(y > 10){
    document.getElementById('p3').innerHTML = 'y qui contient ' + y + ' est supérieur à 10';
} else {
    document.getElementById('p3').innerHTML = 'y qui contient ' + y + ' est inférieur à 10';
}

// la même en ternaire p4

document.getElementById('p4').innerHTML = y > 10 ? 'y est supérieur à 10' : 'y est inférieur à 10'; 


