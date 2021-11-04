// FEUILLE JS - 08-06 FORMULAIRE - SEMA 

// TEST DU FORMULAIRE 1  :

function controleForm() {
    // event.preventDefault(); 
     

    if (document.form1.pseudo.value.length < 5 || document.form1.pseudo.value.length > 15) {
        console.log(document.form1.pseudo.value);
        console.log(document.form1.pseudo.value.length);
        alert('Votre pseudo fait normalement entre 5 et 15 caractères');
    }
    // On verifie la longueur des contenus du formulaire de la partie pseudo. 

    if (document.form1.password.value.length < 8 || document.form1.password.value.length > 12) {
        console.log(document.form1.password.value);
        console.log(document.form1.password.value.length);
        alert('Votre mot de passe fait normalement entre 8 et 12 caractères');
    }
    // On verifie la longueur des contenus du formulaire de la partie pseudo. 
}

// CONTROLE DU FORMULAIRE D'INSCRIPTION AVEC UNE FONCTION :

let formInscrip = document.getElementById('formulaireInscription');
console.log(typeof formInscrip, formInscrip);
// On récupère le formulaire d'inscription par son id dans une variable en JS. 

formInscrip.addEventListener('submit', inscriptionForm);
// On fais un écouteur d'évènement de l'envoie du formulaire

function inscriptionForm(event) {
    event.preventDefault();
    // Pour tester le formulaire on met le parametre "event", lorsque le site est terminer on l'enleve.
    let prenom = event.target.prenom.value;
    nom = event.target.nom.value;
    email = event.target.email.value;
    password2 = event.target.password2.value;
    repassword2 = event.target.repassword2.value;
    console.log(prenom, nom, email, password2, repasseword2);
    // On cible dans des variables les values de tous les champs du formulaire
}

