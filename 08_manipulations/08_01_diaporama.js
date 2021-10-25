// FEUILLE JS - 08_01_DIAPORAMA - SEMA 


// DIAPORAMA 2

document.getElementById('btn-diapo2').addEventListener('click', function(){
    document.getElementById('img-diapo2').src = 'img/piscine2.jpg';
    document.getElementById('img-diapo2').alt = 'Une piscine à paris';
});
console.log('btn-diapo2');

// DIAPORAMA 3

function tourImages(){
    var getimage3 = document.getElementById('img-diapo3').getAttribute('src');
    console.log(getimage3); /* Ce console log ne s'affiche qu'au clique */
    switch(getimage3){
        case 'img/plage1.jpg':
            document.getElementById('img-diapo3').src = 'img/plage2.jpg';
            document.getElementById('img-diapo3').alt = 'Plage aux bahamas';
            break;
        case 'img/plage2.jpg':
            document.getElementById('img-diapo3').src = 'img/plage3.jpg';
            document.getElementById('img-diapo3').alt = 'Plage du sud';
            break; 
        case 'img/plage3.jpg':
            document.getElementById('img-diapo3').src = 'img/plage4.jpg';
            document.getElementById('img-diapo3').alt = 'Plage des phillipines';
            break; 
        case 'img/plage4.jpg':
            document.getElementById('img-diapo3').src = 'img/plage1.jpg';
            document.getElementById('img-diapo3').alt = 'Plage des cocotiers';
            break; 
    }
}