"use stric"
let = document.getElementById('nombre');
let = document.getElementById('apellido');
let = document.getElementById('numero');
let = document.getElementById('correo');
let = document.getElementById('enviar');
let = document.getElementById('reset');


nombre.style.color = "red";
nombre.style.border = "40px";
nombre.style.padding = "20px";
nombre.style.margin = "5px";
nombre.style.backgroundColor = "violet";
nombre.style.fontSize = "23px";

apellido.style.color = "green";
apellido.style.border = "20px";
apellido.style.padding = "20px";
apellido.style.backgroundColor = "orange"
apellido.style.margin = "5px";
apellido.style.fontSize = "23px";

numero.style.color = "green";
numero.style.border = "20px";
numero.style.padding = "30px";
numero.style.backgroundColor = "yellow";
numero.style.margin = "5px";
numero.style.fontSize = "23px";

correo.style.color = "green";
correo.style.border = "40px";
correo.style.padding = "20px";
correo.style.backgroundColor = "black";
correo.style.margin = "22px";
correo.style.fontSize = "23px";

enviar.style.border = "40px";
enviar.style.padding = "20px";
enviar.style.backgroundColor = "black";
enviar.style.margin = "22px";
enviar.style.color = "azure"
enviar.style.fontSize = "36px"
enviar.style.borderRadius = "9%";

reset.style.border = "70px";
reset.style.padding = "20px";
reset.style.backgroundColor = "black";
reset.style.margin = "22px";
reset.style.color ="azure"
reset.style.fontSize = "36px"
reset.style.borderRadius = "9%";


function validacion() {
let nombre;
let = document.getElementById('nombre').value;
let = document.getElementById('numero').value;
let = document.getElementById('correo').value;


if (nombre === " ") {
    alert("no se registro ningun dato intente nuevamente")
    return false;
}

if (apellido === " ") {
    alert("no valido")
    return false;
    
}

if (numero === " ") {
    alert("no se registro ningun numero")
    return false;
    
}

if (correo === " ") {
    alert("intente denuevo")
    return false;
    
}

}
