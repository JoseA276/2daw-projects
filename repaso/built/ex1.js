"use strict";
function diaDeLaSetmana() {
    const data = document.getElementById("data").value;
    console.log(data);
    let regexp = /^.{2}\.{2}\.{4}/;
    if (!regexp.test(data)) {
        alert("Formato incorrecto de la fecha. Formato correcto dd/mm/aaaa");
        return;
    }
}
