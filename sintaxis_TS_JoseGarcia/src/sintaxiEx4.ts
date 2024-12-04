let diners: number = parseFloat(prompt("Quants diners tens?") || "0.0"); // Variable para preguntar cuando dinero tiene
console.log(diners); // Printar por la consola el dinero

let producto: string | null= prompt("Vols introduir un producte? (Si/No)"); // Variable para preguntar si se quiere introducir un producto
//console.log(producto);

if (producto == "Si") { // Condicional para añadir un producto
    let nomProducto: string | null= prompt("Nom del producte?"); // Variable para preguntar el nombre del producto
    let preuProducto: number = parseFloat(prompt("Preu del producte?") || "0.0"); // Variable para preguntar el precio del producto
    let quantitatProducto: number = parseInt(prompt("Quantitat del producte:") || "0"); // Variable para preguntar las veces que se compra ese producto
    
    let esCorrecto: string | null= prompt("El producto es correcto? (Si/No)"); // Variable para preguntar si los datos dados son correctos

    let dinersRestants:number = diners-preuProducto; // Variable para hacer el calculo del dinero que me queda al hacer la compra

    let preuTotal:number = preuProducto * quantitatProducto; // Precio total, multiplicando el precio del producto con las veces que se compra el producto

    if (esCorrecto == "Si") { // Condicional para si la compra es correcta

        if (preuProducto * quantitatProducto <= diners) { // Condicional para si el precioTotal es menor o igual al dinero que tengo para poder hacer la compra
            console.log("ORDRE CONFIRMADA"); // Se printa por la consola
            console.log(nomProducto + " - " + preuProducto + "€"); // Se printa por la consola el nombre del producto y el precio del producto
            console.log("Quantitat demanada - " +quantitatProducto); // Se printa por la consola las veces que vas a comprar el producto
            console.log("Total - " + preuTotal + "€"); // Se printa por pantalla el precio total de la compra
            console.log("Diners restants - " + dinersRestants + "€"); // Se printa por pantalla el dinero restante que me queda

        } else if (preuProducto * quantitatProducto > diners) { // Condicional para si el precioTotal es superior a la compra, entonces no se pordrá realizar la compra
            console.log("ORDRE REBUTJADA"); // Se printa por la consola
            console.log(nomProducto + " - " + preuProducto + "€"); // Se printa por la consola el nombre del producto y el precio del producto
            console.log("Quantitat demanada - " +quantitatProducto); // Se printa por la consola las veces que vas a comprar el producto
            console.log("Total - " + preuTotal + "€"); // Se printa por pantalla el precio total de la compra
            console.log("L'import supera els diners que tens"); // Se printa por pantalla que la compra no se ha podido realizar por no tener dinero suficiente
        }

    } else if (esCorrecto == "No") { // Condicional de que la compra no está correcta
        alert("VUELVE A HACER EL FORMULARIO."); // Alert para que hagas de nuevo el formulario

    } else {
        alert("LA RESPUESTA TIENE QUE SER Si O No");  // else por si el resultado de la variable esCorrecto es diferente a Si o No
    }


} else if (producto == "No") { // else del condicional (no se añade ningún producto)
    alert("No quieres añadir un producto, adiós."); // Alert para decir que no quieres añadir ningún producto

} else {
    alert("LA RESPUESTA TIENE QUE SER Si O No"); // else por si el resultado de la variable producto es diferente a Si o No
}