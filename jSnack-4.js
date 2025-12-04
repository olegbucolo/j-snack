let arrParole = [];
let numeroParoleDaInserire = 2
for(let i = 0; i < numeroParoleDaInserire; i++){
    let numeroParola = i;
    let parolaPiuLunga = '';
    let parolaUtente = prompt(`inserisci la parola n. ${numeroParola + 1}`)
    arrParole.push(parolaUtente);
    if(parolaUtente.length > parolaPiuLunga){
        parolaPiuLunga = parolaUtente;
        console.log('riassegnata parole piu lunga', parolaPiuLunga)
    }
}

console.log(arrParole)