
//Funció per provar les funcions realitzades, comenteu i descomenteu una linea per separat per provar les diferents opcions
function execucions(){
    // Exercici 1: Classificar Paraules
    //const paraules:string[] = ["cotxe", "avió", "ferrocarril", "vaixell", "motocicleta", "tractor"]; //Resultat: 4 elements: ferrocarril, vaixell, motocicleta, tractor
    const paraules:string[] = ["blau", "vermell", "taronja", "gris", "platejat"]; //Resultat: 3 elements: vermell, taronja, platejat
    //const paraules:string[] = ["gos", "gat", "elefant", "caball"]; //Resultat: 2 elements: elefant, caball
    console.log(classificarParaules(paraules));

    // Exercici 2: Analitzar Temperatures
    analitzarTemperatures(12,4,30,2,11,26); //Resultat: Mitjana 14.17, Màxima 30, Mínima 2 
    //analitzarTemperatures(9,15,7,5,8); //Resultat: Mitjana 8.80, Màxima 15, Mínima 5 
    //analitzarTemperatures(19,20,21); //Resultat: Mitjana 20.00, Màxima 21, Mínima 19 

    // Exercici 3: Enviar Missatges
    enviarMissatges("test@mail.com", "Demano informació sobre aquest curs"); //Resultat: Missatge enviat a l'email, contingut: Demano informació sobre aquest curs
    //enviarMissatges("test@mail.com", "Demano informació sobre aquest curs", "Salutacions"); //Resultat: Missatge enviat a l'email, contingut: Salutacions Demano informació sobre aquest curs
    //enviarMissatges(985421122, "Demano informació sobre aquest curs"); //Resultat (alert): Missatge enviat al telèfon, contingut: Demano informació sobre aquest curs
    //enviarMissatges(985421122, "Demano informació sobre aquest curs", "Salutacions"); //Resultat (alert): Missatge enviat al telèfon, contingut: Salutacions Demano informació sobre aquest curs
    //enviarMissatges("error", "error"); //Resultat: L'email no té un format vàlid.
}

function classificarParaules(paraules : string[]){
    let llistaparaules : string[]=[];
    for(let i =  0 ; i<paraules.length; i++){
        if (paraules[i].length>5)
           llistaparaules.push(paraules[i])
            
    }
    return llistaparaules

}
function enviarMissatges(paraula: string, paraula2 :string){

}
function analitzarTemperatures(...temperatura : number[]){
    let maxTemp:number = Math.max(...temperatura);
    let minTemp:number = Math.min(...temperatura);
    console.log(maxTemp);
    console.log(minTemp);
    for (let i = 0 ;  i< temperatura.length ; i++){
        Math.max()
    }
}