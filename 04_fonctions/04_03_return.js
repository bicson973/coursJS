// FEUILLE JAVASCRIPT - RETURN - SEMA 

function division(x,y){
    if(y == 0){
        return 'Division par 0 impossible';
    } else {
        return (x / y).toFixed(2);
    }
}

let nbr1 = prompt('Entrez le numérateur à diviser')
let nbr2 = prompt('Entrez le dénominateur à diviser')
let resultatDivision = division(nbr1,nbr2);
console.log(resultatDivision);

document.getElementById('p1').innerHTML = nbr1 + ' divisé par ' + nbr2 + ' = ' + resultatDivision;

// remplacer le point par la virgule :
console.log(typeof resultatDivision, resultatDivision);

let nellePhrase = resultatDivision.replace('.',','); 
document.getElementById('p2').innerHTML = nbr1 + ' divisé par ' + nbr2 + ' = ' + nellePhrase; 



