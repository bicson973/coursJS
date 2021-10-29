// FEUILLE JS - 14 SAISIE - SEMA 

var nombre = 0;
console.log(typeof nombre, nombre);

while(nombre < 50 || nombre > 100){
    nombre = prompt('Entrer un nombre entre 50 et 100 :');
    console.log(typeof nombre, nombre)
}
document.write('<p>Vous avez rentré le nombre : ' + nombre + ' la variable récupéré est bien comprise entre 50 et 100. </p>');
