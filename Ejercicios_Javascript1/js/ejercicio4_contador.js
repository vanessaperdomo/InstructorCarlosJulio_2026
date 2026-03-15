class Contador{

constructor(){
this.clics = 0;
}

aumentar(){

this.clics++;

document.getElementById("contador").textContent =
"Clics: " + this.clics;

}

limpiar(){

this.clics = 0;

document.getElementById("contador").textContent = "Clics: 0";

}

}

let contador = new Contador();

document.getElementById("btnContador").addEventListener("click", function(){
contador.aumentar();
});

document.getElementById("btnLimpiar").addEventListener("click", function(){
contador.limpiar();
});