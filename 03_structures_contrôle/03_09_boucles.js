// JAVASCRIPT - LES BOUCLES - SEMA 

let w1 = 0;
console.log(typeof w1, w1);
while(w1 < 10){
    document.getElementById('while1').innerHTML += 'w1 contient la valeur ' + w1 + '<br> ';
    w1++;
    console.log(typeof w1, w1);
}

let w2 = 0; 
console.info(typeof w2, w2);
while(w2 < 10){
    document.getElementById('while2').innerHTML += 'w2 contient la valeur ' + w2 + ' <br>';
    console.log(typeof w2, w2);
    w2++;
}

let w3 = 0; 
console.info(typeof w3, w3); 
do {
    document.getElementById('dowhile1').innerHTML += 'do... while // w3 contient la valeur ' + w3 + ' <br>';
    w3++;
}

while(w3 < 10);     

// Incrémentation et décrémentation 

let a = 10, b = 10, c = 20, d = 20;
console.info(a, b, c, d);
document.getElementById('p1').innerHTML = 'post-incrémenter // a contient la valeur ' + a + ' , là je post-incrémente de 1, ce qui fait que a est égal à ' + a++ + ' et donc sera égal à ' + a ; 
console.log(a);

document.getElementById('p2').innerHTML = 'pré-incrémenter // b contient la valeur ' + b + ' , là je pré-incrémente de 1, b est égal à ' + ++b;
console.log(b);

document.getElementById('p3').innerHTML = 'post-décrémenter // c contient la valeur ' + c + ' , là je post-décrémente de 1, c est égal à ' + c-- + ' puis c est égal à ' + c + ' après post-décrémentation.';
console.log(c);

document.getElementById('p4').innerHTML = 'post-incrémenter // d contient la valeur ' + d + ' , là je pré-décrémente de 1, d est égal à ' + --d;;
console.log(d);

 




