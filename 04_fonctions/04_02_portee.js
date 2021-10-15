// FEUILLE JAVASCRIPT - PORTEE DES VARIABLES - SEMA 

function porteNew(){
    let xLet = 1;
    var yVar = 2;

    if(true){
        let xLet = 500;
        var yVar = 200;
        document.getElementById('p1').innerHTML = 'la variable let "xLet" dans le if = ' + xLet;
        document.getElementById('p2').innerHTML = 'la variable var "yVar" dans le if = ' + yVar; 
    }
    document.getElementById('p3').innerHTML = 'la variable "xLet" hors du if ' + xLet;
    document.getElementById('p4').innerHTML = 'la variable "yVar" hors du if ' + yVar; // yVar affiche la derniere valeur déclaré car "var" a une portée élargie
}
porteNew(); 


let x = 5; 
var y = 10; 

function portee1(){ /* Dans cette fonction j'appelle des variables qui ont une portée globale */
    document.getElementById('p5').innerHTML = 'Depuis la fonction <code>portee1()</code> : x = ' + x + ' et y = ' + y;
}
portee1(); /* On appelle la fonction */

function portee2(){
    let a = 120; 
    var b = 450;
    document.getElementById('p6').innerHTML = 'Depuis la fonction <code>portee2()</code> : a = ' + a + ' et b = ' + b;
}
portee2(); /* On appelle la fonction */

function portee3(){
    let x = 20;
    var y = 400;
    document.getElementById('p7').innerHTML = 'Depuis la fonction <code>portee3()</code> : x = ' + x + ' et y = ' + y;
}
portee3();

// Ici on affiche les variables qui ont une porté globale
document.getElementById('p8').innerHTML = 'Ce code n\'est pas dans une fonction ! Je suis dans l\'espace globale et je cherche les contenus de x et y : x = ' + x + ' et y = ' + y; 

// Ici on tente d'afficher les locales
document.getElementById('p9').innerHTML = 'Depuis l\'espace local : a = ' + a + ' et b = ' + b;




