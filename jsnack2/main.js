//SNACK 2:L’utente inserisce due parole in successione, con due prompt.Il software stampa prima la parola più corta, poi la parola più lunga.

// Chiedo all'utente la prima parola
const firstWord = prompt('inserisci una parola');

// Chiedo all'utente la seconda parola
const secondWord = prompt('inserisci un seconda parola');


// Stampo la parola più lunga

if(firstWord.length > secondWord.length){
    console.log(`La parola più corta è: (${secondWord}) la parola più lunga è: (${firstWord})`);
} else if (secondWord.length > firstWord.length){
    console.log(`La parola più corta è: (${firstWord}) la parola più lunga è: (${secondWord})`);

} else{
    console.log(`Le parole inserite hanno la stessa lunghezza (${firstWord}) (${secondWord})`);

}