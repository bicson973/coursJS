// FEUILLE JAVASCRIPT - IF - SEMA 

let x = 4; 
let y = 0;

if(x > 1) {
    alert('x contient ' + x + ' et cette valeur est supérieur à 1');
}

if(y < 1) {
    alert('y contient ' + y + ' et cette valeur est inférieur à 1');
}

if(x == y) {
    alert('x = ' + x + ', et y = ' + y + ' les deux variables contiennent la meme valeur');
}

// L'alerte ne s'affiche pas car la valeur contient 0 donc on ne peut rien faire 0
if(y) {
    alert('4/ la valeur de y est évaluée à "true"');
}

if(false) {
    alert('5/ true ///vrai');
}

let chaine = '';
if(chaine) {
    alert('5/ true /// vrai');
}
