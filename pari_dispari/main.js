let scelta = prompt("Scegli pari o dispari");
let sceltaNumero = parseInt(prompt("Inserisci un numero da 1 a 5"));

function estrazione(){
    return Math.round((Math.random)*5)
}
function pariDispari(somma){
    if(somma%2==0){
        return true
    }else{
        return false;
    }
}

let somma = sceltaNumero + estrazione();
