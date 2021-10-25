// FEUILLE JS - 08_02 SETINTERVAL - SEMA 

let img = 0; /* Initialisation de la variable pour l'image */
console.log(typeof img, img); 

let timer = window.setInterval('monDiaporama()',1000) /* Initialisation du timer avec setInterval ('nomdelafonction(), temps en miliseconde (1000 = 1 seconde)) */
console.log(typeof timer, timer);

// let getattrimg = document.getElementById('img-diapo1').getAttribute('src');
// console.log(typeof getattrimg, getattrimg); 

function monDiaporama(){
    img +=1; /* On incrémente et on affecte 1 */
    imgdiapo1.setAttribute('src','img/' + img + '.jpg'); /* Je confère, je définis, je met en place et j'appelle les images par leur noms automatiquement */
    console.log('img = ' + img);
    if(img == 6){ /* Si la variable est égal à 6 la fonction se réalise */
        clearInterval(timer); /* Clearinterval permet de stopper le timer dès que la variable est égale à 6 */
    }
}
