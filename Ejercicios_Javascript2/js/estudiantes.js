class Estudiante{

constructor(nombre,nota){
this.nombre = nombre;
this.nota = nota;
this.estado = this.calcularEstado();
}

calcularEstado(){
if(this.nota >= 3){
return "Aprobo";
}else{
return "No aprobo";
}
}

mostrar(){
return "Nombre: " + this.nombre +
" | Nota: " + this.nota +
" | Resultado: " + this.estado;
}

}

let estudiantes = [];

function obtenerValor(id){
return document.getElementById(id).value;
}

function limpiarCampo(id){
document.getElementById(id).value = "";
}

function mostrarMensaje(texto){
alert(texto);
}

function registrarEstudiante(){

let nombre = obtenerValor("nombreEst");
let nota = parseFloat(obtenerValor("nota"));

if(nombre === "" || isNaN(nota)){
mostrarMensaje("Ingrese nombre y nota");
return;
}

let estudiante = new Estudiante(nombre,nota);

estudiantes.push(estudiante);

limpiarCampo("nombreEst");
limpiarCampo("nota");

mostrarEstudiantes();
}

function mostrarEstudiantes(){

let lista = document.getElementById("listaEst");
lista.innerHTML = "";

for(let i = 0; i < estudiantes.length; i++){

let li = document.createElement("li");

li.textContent = estudiantes[i].mostrar();

lista.appendChild(li);

}

}