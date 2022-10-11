"use stric"

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const numero = document.getElementById("numero");
const correo = document.getElementById("correo");
const msj = document.getElementById("msj");
const envio = document.getElementById("envio");
const reset = document.getElementById("reset");
const form = document.getElementById("form");

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





form.addEventListener("submit", e=>{
    e.preventDefault()


    if (nombre.value.length <3) {
        alert("muy corto");
        
    }

    if (nombre.value.length >10) {
        alert("muy largo");
        
    }


    if (apellido.value ==0) {
        alert("no hay datos");
            
        }
    if (numero.value ==0) {
        alert("no valido");
                
        }
    if (correo.value ==0) {
        alert("no se registro ningun dato");

    if (msj.value ==0) {
        alert("escribe tu mensaje")
        
    }
        
    }


})

