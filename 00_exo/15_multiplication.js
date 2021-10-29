// FEUILLE JS - EXO 15 MULTIPLICATION - SEMA 

let nombre1 = parseInt(prompt('Choisissez un premier nombre'));
console.log(typeof nombre1, nombre1); 

for (let i = 1; i <= 10; i++) {
    let resultat = nombre1 * i;
    document.getElementById('p1').innerHTML += nombre1 + ' x ' + i + ' = ' + resultat +'<br>';
}

let nombre2 = Number(prompt('Et maintenant un nombre entre 2 et 9.'));
console.log(typeof nombre2, nombre2);

if (nombre2 >= 2 && nombre2 <= 9) {
    for (i = 1; i <= 10; i++) {
        resultat = nombre2 * i;
        document.getElementById('p2').innerHTML += nombre2 + " X " + i + " = " + resultat + "<br>";
    }
} else {
    document.getElementById("p2").innerHTML = "le nombre doit être compris entre 2 et 9 !";
}