"use strict";
var categories = new Set();
function añadirCategoria() {
    let categoria = document.getElementById("categoria").value;
    categories.add(categoria);
    alert("Categoria añadida: " + categoria);
}
function mostrarCategorias() {
    const categoriesArray = Array.from(categories).join(", ");
    const parraf = document.getElementById("categoriesMostrar");
    if (parraf) {
        parraf.textContent = "Categories: " + categoriesArray;
    }
}
