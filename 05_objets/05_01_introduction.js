// FEUILLE JS - INTRODUCTION - SEMA 

let auteur = 'Victor Hugo';

let utilisateur = { /* Ici on a une variable objet */
    nom : ['Victor', 'Marie', 'Hugo'],  /* Indice 0 : Ici nous avons des propriétés qui sont dans un tableau, un "array" qui commence à 0 */
    age : 2, /* Indice 1 */
    email : 'totor@hugo.fr', /* Indice 2 */
    adresse : 'Besancon', /* Indice 3 : Nom, age, email, adress, sont des propriétés de l'objet utilisateur */
    bonjour : function(){ /* Une methode qui est un peu comme une fonction */
        alert('bonjour j\ai ' + this.age + ' ans et mon nom est ' + this.nom[0] + ' ' + this.nom[1] + ' ' + this.nom[2]);
    }
}
utilisateur.bonjour(); 

console.info(typeof utilisateur, utilisateur);