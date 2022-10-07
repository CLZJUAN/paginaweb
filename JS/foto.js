"use stric"
const PLANETAS = document.getElementById("FOTOS");

sistema = new Array;

sistema[0] = ['../img/SOL.jpg','SOL'],
sistema[1] = ['../img/MERCURIO.png','MERCURIO'],
sistema[2] = ['../img/VENUS.png','VENUS'];
sistema[3] = ['../img/TIERRA.png','TIERRA'],
sistema[4] = ['../img/MARTE.png','MARTE'],
sistema[5] = ['../img/JUPITER.png','JUPITER'],
sistema[6] = ['../img/SATURNO.png','SATURNO'],
sistema[7] = ['../img/URANO.png','URANO'],
sistema[8] = ['../img/neptuno.png','neptuno'];


if(PLANETAS){
for(i=0;i<sistema.length;i++){
let creaDiv = document.createElement('div');
let creaimg =document.createElement('img');

creaDiv.setAttribute('class','foto')
creaimg.innerHTML = sistema[i][1]
creaimg.setAttribute('src' ,sistema[i][0])
PLANETAS.appendChild(creaDiv)
PLANETAS.appendChild(creaimg)

}
}






