/*//Fes de nou l’exercici anterior fent servir ara un bucle do while. Que passa a l’hora de crear les constants d’abans? Com ho has solucionat?
let visites_max : number = 3;
var visites : number = 0;
const nom_pagina : String = "MP06";
let missatge : String = "";

visites= 0;
//aqui le decimos al programa que el numero de visitas es 0;
//dentro del do ponemos el mensaje que se repetira todas la veces que la condicion permita.
//una vez la condicion no se cumpla saltará otro mensaje.
do{ visites++
    console.log("Bienvenidos a " + nom_pagina + ". Numero actual de visites: " + visites + ".")

}while(visites_max>visites){
    console.log("No puede haber mas de "+ visites_max + " en clase.")
    
}
//Aqui he vuelto a usar las mismas variables y usando el bucle es mucho mas comodo.
*/