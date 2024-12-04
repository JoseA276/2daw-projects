"use strict";
var letra = "a";
var resultado = "";
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        resultado = letra.toUpperCase();
    }
    else
        resultado = letra;
    console.log(i + " " + resultado);
}
