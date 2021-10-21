// FEUILLE JAVASCRIPT - JOUR - SEMA 

let jour = prompt('Quel jours sommes-nous ?')
console.log(typeof jour, jour);

// if(jour === 'lundi'){
//     document.getElementById('p1').innerHTML = 'Demain c\'est mardi'; 
// } else if(jour === 'mardi'){
//     document.getElementById('p1').innerHTML = 'Demain c\'est mercredi'; 
// } else if(jour === 'mercredi'){
//     document.getElementById('p1').innerHTML = 'Demain c\'est jeudi';
// } else if(jour === 'jeudi'){
//     document.getElementById('p1').innerHTML = 'Demain c\'est =vendredi';  
// } else if(jour === 'vendredi'){
//         document.getElementById('p1').innerHTML = 'Demain c\'est samedi';
// } else if(jour === 'samedi'){
//     document.getElementById('p1').innerHTML = 'Demain c\'est dimanche';
// } else if(jour === 'samedi'){
//     document.getElementById('p1').innerHTML = 'Demain bon courage pour la semaine !';
// } else {
//     document.getElementById('p1').innerHTML = 'Ce jour n\existe pas !'; 
// }

switch(jour){
        case 'Lundi':
        document.write('<p>Switch - Demain c\'est Mardi</p>');
        break;
        case 'Mardi':
        document.write('<p>Switch -Demain c\'est Mercredi</p>');
        break;
        case 'Mercredi':
        document.write('<p>Switch - Demain c\'est jeudi</p>');
        break;
        case 'Jeudi':
        document.write('<p>Switch - Demain c\'est Vendredi</p>');
        break;
        case 'Vendredi':
        document.write('<p>Switch - Demain c\'est samedi</p>');
        break;
        case 'Samedi':
        document.write('<p>Switch - Demain c\'est Dimanche</p>');
        break;
        case 'dimanche':
        document.write('<p>Switch -Demain c\'est lundi</p>');
        break;
        default:
        document.write('<p>Switch - Ce jour n\'existe pas </p>');
        break;
    }