// FEUILLE JS - COMPARAISON - SEMA 

let nombre_1 = parseInt(prompt('Entrée un nombre')); /* parseInt permet de faire la conversion d'un string en number */
console.log(typeof nombre_1, nombre_1); 

let nombre_2 = parseInt(prompt('Entrée un 2ème nombre'));
console.log(typeof nombre_2, nombre_2); 



if( (!isNaN(nombre_1)) && (!isNaN(nombre_2)) ){
    if(nombre_1 < nombre_2){
    document.getElementById('p1').innerHTML = 'Votre premier nombre : ' + nombre_1 + ' est plus petit que ' + nombre_2; 
    } else if(nombre_1 > nombre_2){
    document.getElementById('p1').innerHTML = 'Votre premier nombre : ' + nombre_1 + ' est plus grand que ' + nombre_2;
    } else{
    document.getElementById('p1').innerHTML = 'Votre premier nombre : ' + nombre_1 + ' est egal au second : ' + nombre_2;
    }
} else{
    document.getElementById('p1').innerHTML = 'Vous n\'avez pas saisi de nombre(s)';
}