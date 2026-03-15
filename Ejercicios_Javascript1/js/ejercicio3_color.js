function cambiarColor(color){

document.body.style.backgroundColor = color;

}

document.getElementById("rojo").addEventListener("click", function(){
cambiarColor("red");
});

document.getElementById("azul").addEventListener("click", function(){
cambiarColor("blue");
});

document.getElementById("verde").addEventListener("click", function(){
cambiarColor("green");
});