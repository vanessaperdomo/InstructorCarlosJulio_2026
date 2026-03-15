document.getElementById("Formulario").addEventListener("submit", function(e){

e.preventDefault();

let nombre = document.getElementById("nombre").value;
let correo = document.getElementById("correo").value;
let edad = document.getElementById("edad").value;

if(nombre == "" || correo == "" || edad == ""){

document.getElementById("mensaje").textContent =
"Debe completar todos los campos";

}else{

document.getElementById("mensaje").textContent =
"Formulario enviado correctamente";

}

});