"use stric"

let = document.getElementById("nombre");
let = document.getElementById("apellido");
let = document.getElementById("numero");
let = document.getElementById("correo");
let = document.getElementById("msj");
let = document.getElementById("faltandatos");
let = document.getElementById("envio");
let = document.getElementById("reset");

nombre.style.color = "white";
nombre.style.border = "40px";
nombre.style.padding = "20px";
nombre.style.margin = "5px";
nombre.style.backgroundColor = "violet";
nombre.style.fontSize = "23px";

apellido.style.color = "white";
apellido.style.border = "20px";
apellido.style.padding = "20px";
apellido.style.backgroundColor = "orange"
apellido.style.margin = "5px";
apellido.style.fontSize = "23px";

numero.style.color = "white";
numero.style.border = "20px";
numero.style.padding = "20px";
numero.style.backgroundColor = "yellow";
numero.style.margin = "5px";
numero.style.fontSize = "23px";

correo.style.color = "white";
correo.style.border = "30px";
correo.style.padding = "20px";
correo.style.backgroundColor = "black";
correo.style.margin = "5px";
correo.style.fontSize = "23px";

envio.style.border = "40px";
envio.style.padding = "20px";
envio.style.backgroundColor = "black";
envio.style.margin = "22px";
envio.style.color = "azure"
envio.style.fontSize = "36px"
envio.style.borderRadius = "9%";

reset.style.border = "40px";
reset.style.padding = "20px";
reset.style.backgroundColor = "black";
reset.style.margin = "22px";
reset.style.color = "azure"
reset.style.fontSize = "36px"
reset.style.borderRadius = "9%";

msj.style.color = "white";
msj.style.border = "30px";
msj.style.padding = "70px";
msj.style.backgroundColor = "red";
msj.style.margin = "5px";
msj.style.fontSize = "23px";



faltandatos.style.color = "white";



let fors = document.getElementById("formularioss");
fors.addEventListener("submit" ,function(evt){
evt.preventDefault();
let corrupto =[];

if (nombre.value === null | nombre.value === " ") {
corrupto.push("no valido");
    
}

if (apellido.value === null | apellido.value === " ") {
corrupto.push("apellido no valido");
    
}

if (numero.value === null | numero.value === "[a-zA-Z]") {
    corrupto.push("NO SE ADMITEN LETRAS");
    
}

 if (correo.value === null | correo.value === " " ) {
    corrupto.push("correo invalido");
    
 }
    
    faltandatos.innerHTML = corrupto.join(", ");
});
