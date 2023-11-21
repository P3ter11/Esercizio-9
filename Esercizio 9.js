/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* let x = 10;
let y = 10;

function crazySum(x,y){
    if(x!=y)
        return console.log(x+y);
    else
        return console.log(x*3);
}

crazySum(x,y); */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* let x = 4;

function boundary(x){
    if ((x<100 && x>20) || x ==400)
        return true;
    else
        return false;
}

console.log(boundary(x)); */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/


/* function reverseString(stringa){
    let nuovaStringa = "";
    for(let i=stringa.length -1; i>=0; i--){
        nuovaStringa += stringa[i];
    }
    console.log(nuovaStringa);
}

reverseString("i topi non avevano nipoti"); */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* function upperfirst(stringa){
    console.log(stringa.toUpperCase());
}

upperfirst("epicode"); */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* function giveMeRandom(x){
    let array = [];
    for(let i=0; i<x; i++){
        array.push(Math.floor(Math.random()*10));
        console.log(array[i]);
    }
}

giveMeRandom(5); */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* function area(l1,l2){
    return l1*l2;
}

console.log(area(12,5)); */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* function crazyDiff(x){
    x-=19;
    if (x > 19) {
        return x*3;
    }else{
        return x;
    }
}

console.log(crazyDiff(100)); */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* function codify(stringa){
    let pre = "code";
    if(stringa !== pre){
        return pre +stringa;
    }else{
        return stringa;
    }
}

console.log(codify("code")); */


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* function check3and7(x){
    if (x%3==0 || x%7==0){
        return true;
    }else{
        return false;
    }
}

console.log(check3and7(10)); */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* function cutString(stringa){
    return stringa.slice(1,stringa.length-1);
}

console.log(cutString("balle di fieno")); */