class Libro {

    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }

    prestar(){
        if(this.disponible == false){
            return false;
        }
        this.disponible = false;
        return true;
    }

    devolver(){
        this.disponible = true;
    }

    obtenerEstado(){
        if(this.disponible){
            return "Disponible";
        }else{
            return "Prestado";
        }
    }
}

let biblioteca = [];

function obtenerValor(id){
    return document.getElementById(id).value;
}

function limpiarCampo(id){
    document.getElementById(id).value = "";
}

function mostrarMensaje(texto){
    alert(texto);
}

function agregarLibro(){

    let titulo = obtenerValor("tituloLibro");
    let autor = obtenerValor("autorLibro");

    if(titulo == "" || autor == ""){
        mostrarMensaje("Ingrese título y autor");
        return;
    }

    let libro = new Libro(titulo, autor);

    biblioteca.push(libro);

    limpiarCampo("tituloLibro");
    limpiarCampo("autorLibro");

    mostrarLibros();
}

function mostrarLibros(){

    let lista = document.getElementById("listaLibros");

    lista.innerHTML = "";

    for(let i = 0; i < biblioteca.length; i++){

        let libro = biblioteca[i];

        let item = document.createElement("li");

        item.innerHTML =
            libro.titulo + " - " + libro.autor +
            " | Estado: " + libro.obtenerEstado() +
            " <button onclick='prestarLibro("+i+")'>Prestar</button>" +
            " <button onclick='devolverLibro("+i+")'>Devolver</button>";

        lista.appendChild(item);
    }
}

function prestarLibro(index){
    let resultado = biblioteca[index].prestar();
    if(resultado == false){
        mostrarMensaje("El libro ya está prestado");
    }
    mostrarLibros();
}

function devolverLibro(index){
    biblioteca[index].devolver();
    mostrarLibros();
}