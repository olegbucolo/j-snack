let arrDispari = [];
for(let i = 0; i < 6; i++){
    let numeroNumero = i;
    let numeroUtente = parseFloat(prompt(`inserisci numero (${numeroNumero + 1})`))
    if(numeroUtente % 2 === 1 ){
        arrDispari.push(numeroUtente);
    }

}

console.log(arrDispari)