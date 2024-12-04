function carregarCookies() {
    let arrayCookies: string[] = document.cookie.split("; ");
    let nomCookie: string = "";
    let valorCookie: string = "";
    for (let cookie of arrayCookies) {
      let temp = cookie.split("=");
      nomCookie = temp[0];
      valorCookie = temp[1];
      console.log(`Nom de la cookie: ${nomCookie}; valor de la cookie: ${valorCookie}`);
    };

    let h1: HTMLHeadingElement = document.getElementById("header") as HTMLHeadingElement;
    let p: HTMLParagraphElement = document.getElementById("paragraph") as HTMLParagraphElement;
     
    if(nomCookie == "idioma" && valorCookie == "castella"){
        h1.innerHTML = "Texto en castellano";
        p.innerHTML = "Para ver los cambios, actualiza la pagina";
    }else if(nomCookie == "idioma" && valorCookie == "catala"){
        h1.innerHTML = "Text en catala";
        p.innerHTML = "Para veure els cambis, actualitza la pagina";
    }else if(nomCookie == "idioma" && valorCookie == "angles"){
        h1.innerHTML = "Text in english";
        p.innerHTML = "To see the changes, reload the page";
    }
    if (nomCookie == "fondo") {
        document.body.style.backgroundColor = valorCookie;
      }
    
  


  }
  