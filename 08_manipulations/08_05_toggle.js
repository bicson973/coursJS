// FEUILLE JS - 08 05 TOGGLE - SEMA 

let bouton = document.querySelector('#cacheImage');
console.log(bouton); 

let photo = document.querySelector('.cache'); 
console.log(photo); 

function cliqueBouton(){
    photo.classList.toggle('cache');
}
bouton.addEventListener('click', cliqueBouton);