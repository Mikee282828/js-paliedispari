let parola = prompt("Inserisci la parola palidroma");

function paliDetector(stringa) {
    let palindroma = false;
    let j=0;
    for(let i=stringa.length - 1; i>=0; i--){
        if(stringa[j] == stringa[i]){
            palindroma = true;
        }else{
            palindroma = false;
        }
        j++;
    }
    return palindroma;
}
let answer = paliDetector(parola);
console.log(answer);

document.querySelector("body").innerHTML = `L'esito dato del paliDetector è: ${answer}`;

