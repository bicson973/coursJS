// MA FEUILLE JS - EXO 17 - SAINT GERMAIN

// alert('coucou');

for (let i = 1; i < 101; i++) { /* initialisation de la variable -> test ou condition de sortie -> incrémentation */
    if (i % 3 == 0 && i % 5 == 0){
        document.getElementById('p1').innerHTML += '<span style="background: #50b322; color: #fff;text-align: center;"> GralaBu </span><br>';
    }else if (i % 5 == 0){
        document.getElementById('p1').innerHTML += '<span style="background: #ff8a57; color: #fff;text-align: center;"> Bu </span><br>';
    }else if (i % 3 == 0){
        document.getElementById('p1').innerHTML += '<span style="background: #0e1793; color: #fff;text-align: center;"> Grala </span><br>';
    }else {
        document.getElementById('p1').innerHTML += i + '<br>';
    }
    console.log(typeof i, i)
}
