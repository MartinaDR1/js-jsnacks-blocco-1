//Snack 4 (sia con for che con while):
/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/

const invited = [
    'Leo',
    'Carey',
    'Marti'
]

// Chiedo all'utente il suo nome

const userName = prompt('Inserisci il tuo nome');
console.log(userName);

// Ciclo for
let access = false
for (let i = 0; i<invited.length; i ++){
    
    if (invited[i] == userName){
        access= true
    }
}
// Verifico se il nome inserito è presente nell'array

if (access){
    console.log('Puoi accedere');

} else{
    console.log('Mi dispiace, non puoi accedere!');
}

// Ciclo while

let accessWhile = false
let j = 0;
while ( j<invited.length){
    
    if (invited[j] == userName){
        accessWhile= true
    }
    j ++
}
// Verifico se il nome inserito è presente nell'array

if (accessWhile){
    console.log('Puoi accedere');

} else{
    console.log('Mi dispiace, non puoi accedere!');
}