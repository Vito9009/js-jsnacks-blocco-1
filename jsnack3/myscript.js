/*
JSnack 3
Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
*/

const myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; // creazione array

const evenNumber = []; // variabile numeri pari

const oddNumber = []; // variabile numeri dispari

const resultsContainer = document.getElementById("results-container"); // contenitore nel file HTML in cui verranno inseriti i due div

const greenEven = document.createElement("div"); //creazione div ed aggiunta classe per i numeri pari
greenEven.classList.add("green");

const redOdd = document.createElement("div"); //creazione div ed aggiunta classe per i numeri pari
redOdd.classList.add("red");

for (let i = 0; i < myArray.length; i++){ // ciclo for
    if(i %2 == 1){  // se i numeri sono pari
        evenNumber.push(myArray[i]);
        greenEven.innerHTML += myArray[i] + " ";
    }else{ // se i numeri sono dispari
        oddNumber.push(myArray[i]);
        redOdd.innerHTML += myArray[i] + " ";
    }
}

resultsContainer.append(greenEven); // stampa dei numeri pari nel file HTML
resultsContainer.append(redOdd); // stampa dei numeri dispari nel file HTML

console.log("pari", evenNumber, "dispari", oddNumber); // mostra in console del gruppo dei numeri pari e del gruppo dei numeri dispari