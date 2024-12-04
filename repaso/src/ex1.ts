function diaDeLaSetmana() {
    const data : string = (<HTMLInputElement>document.getElementById("data")).value;
    console.log(data);
    let regexp : RegExp = /^.{2}\.{2}\.{4}/
    
    if(!regexp.test(data)){
        alert("Formato incorrecto de la fecha. Formato correcto dd/mm/aaaa")
        return;
    }
}
