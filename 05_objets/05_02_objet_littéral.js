// FEUILLE JS - OBJET LITTERAL - SEMA 

let victor = {
    nom : ['Victor', 'Marie', 'Hugo'],
    age : 2,
    email : 'totor@hugo.fr',

    bonjour : function(){
        alert('Je suis ' + this.nom[0] + ' ' + this.nom[2] + ' et j\ai ' + this.age + ' ans');
    }
}
console.log(typeof victor, victor);

victor.bonjour();
/* On accède aux propriétés qui contiennent des valeurs */
document.getElementById('p1').innerHTML = 'Nom : ' + victor.nom; 
document.getElementById('p2').innerHTML = 'Age : ' + victor.age + ' ans.'; 
document.getElementById('p3').innerHTML = 'Email : ' + victor.email; 

victor.age = 80; /* On modifie la valeur de age */
console.log(typeof victor, victor);
document.ge
document.getElementById('p4').innerHTML = 'Nouvelle age : ' + victor.age + ' ans.';

victor.metier = 'écrivain, dramaturge et poète';
console.info(typeof victor, victor);
victor.metier = 'écrivain éxilé, dramaturge et poète';
console.info(victor.metier);
victor.adresse = 'en son avenue, à Paris'; 
console.info(victor.adresse); 
/* On crée une nouvelle méthode */
victor.bonjour2 = function(){
    alert('Bonjour j\ai maintenant ' + this.age + ' age, je suis ' + this.metier + ' et je suis célèbre dans le monde entier.');
}
victor.bonjour2(); 

document.getElementById('p5').innerHTML = 'Bonjour je suis ' + victor.nom[0] + ' ' + victor.nom[2];
