"use strict";
/*function diaDeLaSetmana(){
    const valor = Number( (<HTMLInputElement>document.getElementById("valor")).value);
    
    if(valor%4 == 0){
        console.log(valor + " Es divisible")
    }else{
        console.log(valor + " No es divisible")
    }

}*/
function contarPalabras() {
    const palabra = document.getElementById("valor").value;
    let resultado = "";
    for (let i = 0; i < palabra.length; i++) {
        if (i % 2 == 0) {
            resultado += palabra.charAt(i).toUpperCase();
        }
        else
            resultado += palabra.charAt(i).toLowerCase();
    }
    if (palabra.length % 4 == 0) {
        console.log("Es divisible " + resultado);
    }
    else
        console.log("No es divisible " + resultado);
}
