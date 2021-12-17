/*
JSnack 1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array fino
a quando la somma degli elementi è minore di 50.
*/

const myArray = []; // creazione array vuoto

let sum = 0; // variabile per la somma degli elementi
let counter = 0; // variabile contatore

do{
    const requestNumber = prompt("Inserisci un numero!"); // prompt per la richiesta dell'inserimento dei numeri all'utente
    const addNumber = parseInt(requestNumber);  // parseInt degli elemti inseriti nel prompt

    myArray.push(addNumber); // push degli elemti
    sum += myArray[counter]; // somma di sum con i numeri inseriti che verranno inseriti nell'array
    counter++;
} while(sum < 50); // condizione richiesta è che la somma sia inferiore a 50
    

console.log(myArray); // stampa dei dati tramite console.log

/*
****************************
*correzione senza contatore*
****************************

const myArray = []; // creazione array vuoto

let sum = 0; // variabile per la somma degli elementi

do{
    const requestNumber = prompt("Inserisci un numero!"); // prompt per la richiesta dell'inserimento dei numeri all'utente
    const addNumber = parseInt(requestNumber);  // parseInt degli elemti inseriti nel prompt

    myArray.push(addNumber); // push degli elemti
    sum += addNumber; // somma di sum con i numeri inseriti che verranno inseriti nell'array
} while(sum < 50); // condizione richiesta è che la somma sia inferiore a 50
    

console.log(myArray); // stampa dei dati tramite console.log
*/