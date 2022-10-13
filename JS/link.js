"use stric"
let = document.getElementById("btn");
let = document.getElementById("btn1");
let = document.getElementById("btn2");
let = document.getElementById("btn3");
let = document.getElementById("btn4");
let = document.getElementById("btn5");
let = document.getElementById("btn6");
let = document.getElementById("btn7");
let = document.getElementById("btn8");

btn.style.color = "violet";
btn.style.padding= "34px";
btn.style.margin = "30px";
btn.style.fontSize = "66px";
btn.style.backgroundColor = "orange";

btn1.style.color = "white";
btn1.style.padding= "34px";
btn1.style.margin = "30px";
btn1.style.fontSize = "66px";
btn1.style.backgroundColor = "grey";

btn2.style.color = "red";
btn2.style.padding= "34px";
btn2.style.margin = "30px";
btn2.style.fontSize = "66px";
btn2.style.backgroundColor = "black";

btn3.style.color = "yellow";
btn3.style.padding= "34px";
btn3.style.margin = "30px";
btn3.style.fontSize = "66px";
btn3.style.backgroundColor = "#004774 ";

btn4.style.color = "white";
btn4.style.padding= "34px";
btn4.style.margin = "30px";
btn4.style.fontSize = "66px";
btn4.style.backgroundColor = "red";

btn5.style.color = "yellow";
btn5.style.padding= "34px";
btn5.style.margin = "30px";
btn5.style.fontSize = "66px";
btn5.style.backgroundColor = "#00b8ff";

btn6.style.color = "#ffa25a";
btn6.style.padding= "34px";
btn6.style.margin = "30px";
btn6.style.fontSize = "66px";
btn6.style.backgroundColor = "#920088";

btn7.style.color = "white";
btn7.style.padding= "34px";
btn7.style.margin = "30px";
btn7.style.fontSize = "66px";
btn7.style.backgroundColor = "#00f5ad";

btn8.style.color = "white";
btn8.style.padding= "34px";
btn8.style.margin = "30px";
btn8.style.fontSize = "66px";
btn8.style.backgroundColor = "#0013c4";

btn9.style.color = "white";
btn9.style.padding= "34px";
btn9.style.margin = "30px";
btn9.style.fontSize = "66px";
btn9.style.backgroundColor = "black";

document.getElementById("btn").addEventListener("click" ,()=>{
    window.open("https://es.wikipedia.org/wiki/Sol")
});

document.getElementById("btn1").addEventListener("click" ,()=>{
    window.open("https://es.wikipedia.org/wiki/Mercurio_(planeta)")
});

document.getElementById("btn2").addEventListener("click" ,()=>{
    window.open("https://es.wikipedia.org/wiki/Venus_(planeta)")
});

document.getElementById("btn3").addEventListener("click" ,()=>{
    window.open("https://es.wikipedia.org/wiki/Tierra")
});

document.getElementById("btn4").addEventListener("click" ,()=>{
    window.open("https://es.wikipedia.org/wiki/Marte_(planeta)")
});

document.getElementById("btn5").addEventListener("click" ,()=>{
    window.open("https://www.geoenciclopedia.com/jupiter/")
});

document.getElementById("btn6").addEventListener("click" ,()=>{
    window.open("https://www.geoenciclopedia.com/?s=SATURNO")
});

document.getElementById("btn7").addEventListener("click" ,()=>{
    window.open("https://www.nationalgeographic.com.es/ciencia/urano-enigmatico-planeta-gigante-hielo_18641")
});

document.getElementById("btn8").addEventListener("click" ,()=>{
    window.open("https://www.nationalgeographic.com.es/ciencia/neptuno-planeta-azul-y-helado-confines-sistema-solar_18642")
});

document.getElementById("btn9").addEventListener("click" ,()=>{
    window.open("https://www.planetario.net/luna/")
});

let btnn = document.getElementById("btn");
btnn.addEventListener("mouseover" ,function (evt) {
    evt.target.style.backgroundColor = "red";
    evt.target.style.color = "yellow"
     false;
    
});

let lot = document.getElementById("btn");
lot.addEventListener("mouseout" ,function (evt) {
    evt.target.style.backgroundColor = "blue";
    true;
    
})
