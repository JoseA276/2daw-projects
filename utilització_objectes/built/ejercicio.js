"use strict";
function diaDeLaSetmana() {
    // Recupera el valor de l'input
    const dataInput = document.getElementById('data').value;
    // Comprova el format dd/mm/yyyy
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;
    if (!regex.test(dataInput)) {
        alert('Format de data incorrecte. Ha de ser dd/mm/yyyy.');
        return;
    }
    // Trenca el string per obtenir el dia, mes i any
    const parts = dataInput.split('/');
    const dia = parseInt(parts[0], 10);
    6;
    const mes = parseInt(parts[1], 10) - 1; // Els mesos van de 0 a 11
    const any = parseInt(parts[2], 10);
    // Crea un objecte Date
    const data = new Date(any, mes, dia);
    // Obté el dia de la setmana (0 = diumenge, 1 = dilluns, ..., 6 = dissabte)
    const diaSetmana = data.getDay();
    // Mostra l'alert amb el dia de la setmana
    alert(diaSetmana);
    // Calcula l'arrel quadrada del dia de la setmana i ho mostra per consola
    const arrelQuadrada = Math.sqrt(diaSetmana);
    console.log(arrelQuadrada.toFixed(2));
}
function modificarBom() {
    // Recupera el valor de l'input
    const nombreInput = document.getElementById('nombre').value;
    // Converteix l'input a un número
    const nombreFinestres = parseInt(nombreInput, 10);
    // Comprova que el nombre de finestres sigui un número vàlid
    if (isNaN(nombreFinestres) || nombreFinestres <= 0) {
        alert('Si us plau, introdueix un nombre vàlid de finestres.');
        return;
    }
    // Obre les finestres
    for (let i = 0; i < nombreFinestres; i++) {
        const finestra = window.open('', '', 'width=300,height=300');
        if (finestra) {
            // Escriu el número de la posició dins la finestra
            finestra.document.write(`<h1 style="text-align: center; margin-top: 100px;">Finestra ${i + 1}</h1>`);
            // Especifica el color de fons
            let color = Math.floor(Math.random() * 16777215).toString(16);
            finestra.document.body.style.backgroundColor = "#" + color;
        }
    }
}
