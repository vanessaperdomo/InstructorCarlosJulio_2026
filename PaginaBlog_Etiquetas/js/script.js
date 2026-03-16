// Muestra la seccion seleccionada y oculta las demas
function cambiarSeccion(id) {

    // Selecciona todas las secciones de la pagina
    let secciones = document.querySelectorAll(".content-view");

    // Quita la clase "active" de cada seccion para ocultarlas
    secciones.forEach(sec => {
        sec.classList.remove("active");
    });

    // Activa unicamente la seccion que se quiere mostrar
    document.getElementById(id).classList.add("active");

}

// Carga una pagina de la biblioteca dentro del iframe
function cargarPagina(pagina) {

    // Muestra la seccion del visor de biblioteca
    cambiarSeccion("sec-biblioteca");

    // Cambia el src del iframe para mostrar la pagina indicada
    document.getElementById("visorBiblioteca").src = pagina;

}