let scelta = prompt("Scegli pari o dispari");
let sceltaNumero = parseInt(prompt("Inserisci un numero da 1 a 5"));


// funzione estrazione
function estrazione(){
    return Math.round((Math.random())*5);
}

// funzione per verificare se la somma è pari o dispari, ritorna true se pari altrimenti false
function pariDispari(somma){
    if(somma%2==0){
        return true
    }else{
        return false;
    }
}
// funzione per convertire pari == true e dispari == false
function converter(scelta){
    if(scelta == "pari"){
        return true;
    }else{
        return false;
    }
}

// somma fra la scelta dell'utente e del numero estratto
let somma = sceltaNumero + estrazione();

// annuncio vincitore
if(pariDispari() == converter(scelta) ){
    document.querySelector("body").innerHTML = `Hai vinto! ${pariDispari()} ${converter(scelta)}`
}else{
    document.querySelector("body").innerHTML = `Hai perso ${pariDispari()} ${converter(scelta)}`
}
