let somma = 0;
// for (let i = 0; i < 5; i++){
//     let numeroInBaseIndex = i;
//     let userNumber = parseFloat(prompt(`insertisci numero ${numeroInBaseIndex+1}` ));
//     somma += userNumber;
// }

// console.log('somma con il for loop', somma)

let index = 0;
while(index < 5){
    let numeroInBaseIndexWhile = index;
    let userNumberWhile = parseFloat(prompt(`insertisci numero ${numeroInBaseIndexWhile+1}` ));
    somma += userNumberWhile;
    index++;
}

console.log('somma con il while loop', somma)