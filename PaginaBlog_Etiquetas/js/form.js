// Obtiene el formulario y el parrafo de mensaje del HTML
const formulario = document.getElementById("formCuenta");
const mensaje = document.getElementById("mensaje");

// Escucha cuando el usuario envia el formulario
formulario.addEventListener("submit", function(e) {

    // Evita que la pagina se recargue al enviar
    e.preventDefault();

    // Captura los valores escritos por el usuario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;

    // Muestra un mensaje de confirmacion con los datos ingresados
    mensaje.innerHTML = "Cuenta creada correctamente para " + nombre + " (" + correo + ")";

});