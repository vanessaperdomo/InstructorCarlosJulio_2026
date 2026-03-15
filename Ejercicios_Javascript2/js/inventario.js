class Producto{

constructor(nombre,precio,cantidad){
this.nombre = nombre;
this.precio = precio;
this.cantidad = cantidad;
}

valorTotal(){
return this.precio * this.cantidad;
}

mostrar(){
return this.nombre +
" | Precio: $" + this.precio +
" | Cantidad: " + this.cantidad;
}

}

let inventario = [];

function obtenerValor(id){
return document.getElementById(id).value;
}

function limpiarCampo(id){
document.getElementById(id).value = "";
}

function mostrarTexto(id,texto){
document.getElementById(id).innerHTML = texto;
}

function agregarProducto(){

let nombre = obtenerValor("prod");
let precio = Number(obtenerValor("precio"));
let cantidad = Number(obtenerValor("cantidad"));

if(nombre === "" || precio <= 0 || cantidad <= 0){
mostrarTexto("resInv","Ingrese datos validos");
return;
}

let producto = new Producto(nombre,precio,cantidad);

inventario.push(producto);

mostrarInventario();

limpiarCampo("prod");
limpiarCampo("precio");
limpiarCampo("cantidad");

mostrarTexto("resInv","Producto agregado");
}

function mostrarInventario(){

let lista = document.getElementById("listaInv");
lista.innerHTML = "";

for(let i = 0; i < inventario.length; i++){

let item = document.createElement("li");

item.textContent = inventario[i].mostrar();

lista.appendChild(item);

}

}

function totalInventario(){

let total = 0;

for(let i = 0; i < inventario.length; i++){
total += inventario[i].valorTotal();
}

mostrarTexto("resInv","Valor total del inventario: $" + total);

}