//Snack 5
/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

// Creo array vuoto

const numbers = []

//Chiedo per 6 volte all’utente di inserire un numero,

// Ciclo for
/*
let result = 0

for (let i = 1; i<=6; i++ ) {
    let userNum = Number(prompt('Inserisci sei numeri'));
    result += userNum;

    if (userNum % 2 != 0){
        numbers.push (userNum)
    }
}
console.log(numbers);*/

// Ciclo while
let resultWhile = 0

let j = 1;

while ( j<=6) {
    let userNum = Number(prompt('Inserisci sei numeri'));
    resultWhile += userNum;
    j++ 

    if (userNum % 2 != 0){
        numbers.push (userNum)
    }

    
}
console.log(numbers);