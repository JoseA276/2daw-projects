//Fes de nou l’exercici anterior fent servir ara un bucle do while. Que passa a l’hora de crear les constants d’abans? Com ho has solucionat?
var visites_max = 3;
var visites = 0;
var nom_pagina = "MP06";
var missatge = "";
visites = 0;
do {
    visites++;
    console.log("Bienvenidos a " + nom_pagina + ". Numero actual de visites: " + visites + ".");
} while (visites_max > visites);
{
    console.log("No puede haber mas de " + visites_max + " en clase.");
}
