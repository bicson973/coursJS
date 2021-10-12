// FEUILLE JAVASCRIPT - FOR - SEMA 

for(let i = 0; i < 10; i++){ /* initialisation de la variable -> test ou condition de sortie -> incrémentation */
    document.getElementById('p1').innerHTML += 'La variable i contient : ' + i + ' à chaque passage de la boucle <br>';
    console.info(typeof i, i);
}

for(let i = 0; i < 10; i++){ /* initialisation de la variable -> test ou condition de sortie -> incrémentation */
    document.getElementById('t1').innerHTML += '<tr><td>La variable i contient : ' + i + ' à chaque passage de la boucle </td></tr>';
    console.info(typeof i, i);
}

for(let arreteToi = 0; arreteToi < 100; arreteToi++){
    if(arreteToi == 56){ /* Test */
        break; /* Instruction */
    }
    document.getElementById('p2').innerHTML += 'La variable arreteToi contient ' + arreteToi + ' à chaque tour de boucle.<br>';
}