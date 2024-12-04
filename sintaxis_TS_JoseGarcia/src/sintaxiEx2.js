//Ha d’haver-hi exactament 4 variables (visites màximes, nom de la pàgina, comptador de visites i missatge de benvinguda)
var visites_max = 3;
var visites = 0;
var nom_pagina = "MP06";
var missatge = "";
//Incrementar el comptador de visites
visites++;
console.log(visites);
//aqui simplemente cada vez que se ejecute el programa el contador de visitas se incrementara 1;
//Mostrar el missatge de benvinguda (si el comptador de visites és major al nombre màxim de visites, el missatge serà diferent)
visites++;
if (visites <= visites_max) {
    console.log("Benvinguts a " + nom_pagina + ". Numero de visites: " + visites);
}
else {
    console.log("No pot haver-hi més de 3 persones a clase");
}
//Mostrar el missatge de benvinguda (si el comptador de visites és major al nombre màxim de visites, el missatge serà diferent)
visites++;
if (visites <= visites_max) {
    console.log("Benvinguts a " + nom_pagina + ". Numero de visites: " + visites);
}
else {
    console.log("No pot haver-hi més de 3 persones a clase");
}
visites++;
if (visites <= visites_max) {
    console.log("Benvinguts a " + nom_pagina + ". Numero de visites: " + visites);
}
else {
    console.log("No pot haver-hi més de " + visites_max + " persones a clase");
}
//hemos usados tres if para que el contador de visitas supere el numero maximo de visitas, una vez el contador supera el numero maximo de visitas el mensaje que sale en pantalla cambia.
//Hemos utilizados diferentes tipos de variables. He considerado que el nombre de la pagina no cambiara por eso he utilizado CONS
//Luego entre var y let, no tengo mucha idea de la diferencia de ambas.
//Fes de nou l’exercici anterior fent servir ara un bucle do while. Que passa a l’hora de crear les constants d’abans? Com ho has solucionat?
do {
    visites++;
} while (visites <= visites_max);
{
    console.log("Bienvenidos a " + nom_pagina + ". Numero actual de visites: " + visites + ".");
}
