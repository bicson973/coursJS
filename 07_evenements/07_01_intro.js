// FEUILLE JS - 07_01 EVENEMENT - SEMA 

// 4- Formulaire

document.querySelector('#email').addEventListener('focus', inputEmailFocus);

function inputEmailFocus(){
    this.classList.add('bg-light');
}

// Blur change l'apparence quand l'input perd le focus 

document.querySelector('#mot de passe').addEventListener('blur', inputpasswordblur);

function inputpasswordblur(){
    this.classList.add('lightblue');
    this.classList.add('text-white');
}

// ecouteur d'évènement sur le bouton avec click
document.querySelector('#submit').addEventListener('click', inputbtnSubmit);

function inputbtnSubmit(event){
    event.preventDefault();
    alert('Nous avons bien recu votre formulaire');
    this.classList.add('bg-success');
    this.innerHTML ="connecté";
}


