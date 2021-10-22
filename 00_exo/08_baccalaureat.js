// FEUILLE JS - 08 BACCALAUREAT - SEMA 

let moyenne = parseFloat(prompt('Quelle est ta moyenne au baccalaureat ?')); 
console.log(typeof moyenne, moyenne);

if(!isNaN(moyenne)){
    if(moyenne >= 0 && moyenne < 10){
        document.getElementById('p1').innerHTML = 'Recalé';
    } if(moyenne >= 10 && moyenne < 12){
        document.getElementById('p1').innerHTML = 'Recu sans mention';
    } else if(moyenne >= 12 && moyenne <= 20){
        document.getElementById('p1').innerHTML = 'Recu avec mention';
    } else{
        document.getElementById('p1').innerHTML = 'La moyenne doit être comprise entre 0 et 20';
    }
} else {
    document.getElementById('p1').innerHTML = 'Vous n\'avez pas saisi de nombre !';
}