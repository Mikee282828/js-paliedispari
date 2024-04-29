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
    }else if(scelta == "dispari"){
        return false;
    }else{
        return undefined;
    }
}

// somma fra la scelta dell'utente e del numero estratto
let somma = sceltaNumero + estrazione();

// annuncio vincitore
if(converter(scelta) == undefined){
    document.querySelector("body").innerHTML = "Errore, devi inserire la parola 'pari' o 'dispari'"
}else if(sceltaNumero>5 || sceltaNumero<1){
    document.querySelector("body").innerHTML = "Errore, devi inserire un numero compreso tra 1 e 5"
}else if(pariDispari(somma) == converter(scelta)){
    document.querySelector("body").innerHTML = `Hai vinto!`
}else{
    document.querySelector("body").innerHTML = `Hai perso.`
}
