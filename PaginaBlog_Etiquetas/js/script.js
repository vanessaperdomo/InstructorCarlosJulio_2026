function cambiarSeccion(id){

let secciones = document.querySelectorAll(".content-view");

secciones.forEach(sec=>{
sec.classList.remove("active");
});

document.getElementById(id).classList.add("active");

}

function cargarPagina(pagina){

cambiarSeccion("sec-biblioteca");

document.getElementById("visorBiblioteca").src = pagina;

}