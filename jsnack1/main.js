//L’utente inserisce due numeri in successione, con due prompt.Il software stampa il maggiore.

// Chiedo all'utente il primo numero
const number1 = Number(prompt('inserisci un numero'));

// Chiedo all'utente il secondo numero
const number2 = Number(prompt('inserisci un secondo numero'));

// Stampo il numero maggiore

if(number1 > number2){
    console.log(`Il numero maggiore è:`
    + number1);
} else if (number2 > number1){
    console.log(`Il numero maggiore è:`
    + number2);
} else{
    console.log('Il numero inserito è uguale');
}