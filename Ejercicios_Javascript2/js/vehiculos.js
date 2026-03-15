class Vehiculo{

constructor(nombre){
this.nombre = nombre;
this.velocidad = 0;
}

acelerar(){
this.velocidad += 10;
}

frenar(){
this.velocidad -= 10;

if(this.velocidad < 0){
this.velocidad = 0;
}
}

estado(){
return this.nombre + " | Velocidad: " + this.velocidad + " km/h";
}

}

let vehiculos = [];
let vehiculoActual = null;

function obtenerValor(id){
return document.getElementById(id).value;
}

function limpiarCampo(id){
document.getElementById(id).value = "";
}

function mostrarTexto(id,texto){
document.getElementById(id).innerHTML = texto;
}

function crearVehiculo(){

let nombre = obtenerValor("vehiculoNombre");

if(nombre === ""){
alert("Ingrese nombre del vehículo");
return;
}

let vehiculo = new Vehiculo(nombre);

vehiculos.push(vehiculo);

vehiculoActual = vehiculo;

mostrarTexto("estadoVehiculo","Vehículo creado: " + vehiculo.estado());

limpiarCampo("vehiculoNombre");

}

function acelerar(){

if(vehiculoActual == null){
alert("Primero cree un vehículo");
return;
}

vehiculoActual.acelerar();

mostrarTexto("estadoVehiculo",vehiculoActual.estado());

}

function frenar(){

if(vehiculoActual == null){
alert("Primero cree un vehículo");
return;
}

vehiculoActual.frenar();

mostrarTexto("estadoVehiculo",vehiculoActual.estado());

}