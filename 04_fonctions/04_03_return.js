// FEUILLE JAVASCRIPT - RETURN - SEMA 

function division(x,y){
    if(y == 0){
        return 'Division par 0 impossible';
    } else {
        return x / y;
    }
}

let nbr1 = prompt('Entrez le numérateur à diviser')
let nbr2 = prompt('Entrez le dénominateur à diviser')
let resultatDivision = division(nbr1,nbr2);
console.log(resultatDivision);

document.getElementById('p1').innerHTML = nbr1 + ' divisé par ' + nbr2 + ' = ' + resultatDivision;

// remplacer le point par la virgule
console.log(typeof resultatDivision, resultatDivision);

// nelle variable pour contenir le passage de resultatDivision de number à string 
let divisionString = resultatDivision.toString(); /* Je change le number en string grâce à la fonction prédéfinie toString() */
console.log(typeof divisionString, divisionString); /* Je fais un console log pour vérifier que cela marche */

let nellePhrase = divisionString.replace('.',','); 
document.getElementById('p2').innerHTML = nbr1 + ' divisé par ' + nbr2 + ' = ' + nellePhrase; 

let divisionNumber = parseFloat(divisionString);
console.log(typeof divisionNumber, divisionNumber);


