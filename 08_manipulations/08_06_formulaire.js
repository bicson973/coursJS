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
// FIN PARTIE FONCTION 1 

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
    confpassword2 = event.target.confpassword2.value;
    console.log(prenom, nom, email, password2);
    // On cible dans des variables les values de tous les champs du formulaire

    // expression régulière : https://regex101.com/ 
    let regex = /([a-z0-9](\.?|\_|\-))*@([a-z0-9]{2,})(\.[a-z]{2,}){1,}/;
    // let regex = new RegExp("([a-z0-9](\.?|\_|\-))*@([a-z0-9]{2,})(\.[a-z]{2,}){1,}");
    console.log(typeof regex, regex)

    if (prenom !== '' || nom !== '') {
        if (prenom.length < 2) {
            event.target.prenom.classList.add("error");
            // On ajoute une classe à l'élément event.target
            // classList représente toute les classes de l'élément 
            event.target.prenom.classList.remove("valide");
            // On enlève la classe 
        } else {
            event.target.prenom.classList.add("valide");
            event.target.prenom.classList.remove("error");
        }

        if (nom.length < 4) {
            event.target.nom.classList.add("error");
            event.target.nom.classList.remove("valide");
        } else {
            event.target.nom.classList.add("valide");
            event.target.nom.classList.remove("error");
        }
    }

    // CONDITION 2 L'UTILISATEUR A-T-IL SAISI LE MÊME MOT DE PASSE ?

        if (confpassword2 !== password2) { /* si les mot de passe sont différents est-ce vrai ?*/
            event.target.password2.classList.add("error");
            event.target.password2.classList.remove("valide");
            event.target.confpassword2.classList.add("error");
            event.target.confpassword2.classList.remove("valide");
            document.getElementById('label2').innerHTML = "Mots de passe pas identiques"; 
            document.getElementById('label2').classList.add("rouge"); 
            document.getElementById('label2').innerHTML = "Mots de passe pas identiques"; 
            document.getElementById('label2').classList.add("rouge"); 
        } else if(password2.length < 8 || password2.length > 12) { /* sinon si le mot de passe est trop court ou trop long */
            event.target.password2.classList.add("error");
            event.target.password2.classList.remove("valide"); 
            event.target.password2.classList.add("error");
            event.target.password2.classList.remove("valide");
        } else { /* si les 2 conditions sont vrai tout est bon */
            event.target.password2.classList.add("valide"); 
            event.target.password2.classList.remove("error");
            event.target.confpassword2.classList.add("valide");
            event.target.confpassword2.classList.remove("error");
        }

        // Utilisation de l'expression régulière.
        console.info(regex.test(email));

        if (regex.test(email) === false) {
            event.target.email.classList.add("error");
            event.target.email.classList.remove("valide");

        } else {
            event.target.email.classList.remove("error");
            event.target.email.classList.add("valide");
        }
}
// FIN PARTIE FONCTION 2 

    // UNE FONCTION SUR LE CLIQUE DU BOUTON EFFACER POUR VIDER LES INPUTS.
        document.getElementById('reset').addEventListener('click', function(event){
        event.target.form.prenom.value = '';
        event.target.form.nom.value = '';
        event.target.form.email.value = '';
        event.target.form.password2.value = '';
        event.target.form.confpassword2.value = '';
})












