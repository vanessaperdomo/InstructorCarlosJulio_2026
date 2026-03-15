function mostrarMensaje(){

document.getElementById("resultado").textContent =
"Hola mundo desde JavaScript";

}

document.getElementById("btnMensaje").addEventListener("click", mostrarMensaje);