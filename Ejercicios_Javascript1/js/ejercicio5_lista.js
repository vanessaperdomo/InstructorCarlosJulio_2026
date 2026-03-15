document.getElementById("agregar").addEventListener("click", function(){

let texto = document.getElementById("tarea").value;

let li = document.createElement("li");

li.textContent = texto;

document.getElementById("lista").appendChild(li);

document.getElementById("tarea").value = "";

});