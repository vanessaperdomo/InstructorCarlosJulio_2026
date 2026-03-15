class Producto {

    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrar(){
        return this.nombre + " - $" + this.precio;
    }
}

let carrito = [];

function obtenerValor(id){
    return document.getElementById(id).value;
}

function limpiarCampo(id){
    document.getElementById(id).value = "";
}

function mostrarMensaje(texto){
    alert(texto);
}

function agregarCarrito(){

    let nombre = obtenerValor("productoCarrito");
    let precio = parseFloat(obtenerValor("precioCarrito"));
    if(nombre == "" || isNaN(precio)){
        mostrarMensaje("Ingrese producto y precio");
        return;
    }

    let producto = new Producto(nombre, precio);
    carrito.push(producto);
    limpiarCampo("productoCarrito");
    limpiarCampo("precioCarrito");
    mostrarCarrito();
}

function mostrarCarrito(){
    let lista = document.getElementById("listaCarrito");
    lista.innerHTML = "";
    for(let i = 0; i < carrito.length; i++){
        let item = document.createElement("li");
        item.innerHTML =
            carrito[i].mostrar() +
            " <button onclick='eliminarProducto("+i+")'>Eliminar</button>";
        lista.appendChild(item);
    }
    calcularTotal();
}

function eliminarProducto(index){
    carrito.splice(index,1);
    mostrarCarrito();
}

function calcularTotal(){
    let total = 0;
    for(let i = 0; i < carrito.length; i++){
        total += carrito[i].precio;
    }
    document.getElementById("totalCarrito").innerHTML =
        "Total: $" + total;
}