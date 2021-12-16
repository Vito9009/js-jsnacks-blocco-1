/*
JSnack 1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array fino
a quando la somma degli elementi è minore di 50.
*/

const myArray = [];

let sum = 0;
let counter = 0;

do{
    const requestNumber = prompt("Inserisci un numero!");
    const addNumber = parseInt(requestNumber);

    addNumber;
    myArray.push(addNumber);
    sum += myArray[counter];
    counter++;
} while(sum < 50);
    

console.log(myArray);