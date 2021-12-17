/*
JSnack 2
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
Ogni volta che ne crei uno, stampalo a schermo.
*/

const requestNumber = prompt("Inserisci un numero"); // prompt per chiedere il numero (che indicherà il numero di array che verranno create)
const number = parseInt(requestNumber); // parseInt del numero inserito


for (let i = 0; i < number; i++){
    let myArray = []; // array vuota
    for (let i = 1; i < 11; i++){ // nelle array ci saranno al massimo 10 numeri
        const randomNumber = Math.floor(Math.random() * 100 + 1); // i 10 numeri creati verranno presi in modo randomico tra quelli compresi tra 1 e 100
        myArray.push(randomNumber); // push dei numeri random creati
    }
    document.write("<div>" + myArray + "</div>"); // stampa delle array con i numeri nel file HTML
    console.log(myArray); // stampa delle array con i numeri in console
}