// FEUILLE JS - 08 03 KEYDOWN - SEMA 

document.addEventListener('keydown', clavier);
document.onkeydown = clavier;

console.log(document.getElementById('bouge'));

function clavier(e) {
    var carre = document.getElementById('bouge')
    if (e.keyCode == '38') { 
        // 38 = flèche du haut
        carre.style.top = (carre.offsetTop - 05) + 'px';
    } else if (e.keyCode == '39') {
        // 39 = flèche de droite
        carre.style.left = (carre.offsetLeft + 05) + 'px';
    } else if (e.keyCode == '40') {
        // 40 = flèche du bas
        carre.style.top = (carre.offsetTop + 05) + 'px';
    } else if (e.keyCode == '37') {
        // 37 = flèche de gauche
        carre.style.left = (carre.offsetLeft - 05) + 'px';
    }
}
// La fonction clavier



