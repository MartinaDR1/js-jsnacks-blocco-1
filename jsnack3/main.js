//Snack 3
//Il software deve chiedere per 10 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.

/*let result = 0
for (let i = 1; i<=10; i++ ) {
    let num = Number(prompt('Inserisci dieci numeri'));
    result += num
}
console.log(result);*/


//SNACK 3
/*Rifare con WHILE LOOP:  Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

let result = 0
let i = 1;
while ( i<=10) {
    let num = Number(prompt('Inserisci dieci numeri'));
    result += num
    i++ 
}
console.log(result);
