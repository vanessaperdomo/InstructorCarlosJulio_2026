document.getElementById("agregar2").addEventListener("click", function(){

let texto = document.getElementById("tarea2").value;

let li = document.createElement("li");

li.textContent = texto + " ";

let btn = document.createElement("button");
btn.textContent = "Eliminar";

btn.onclick = function(){
li.remove();
};

li.appendChild(btn);

document.getElementById("lista2").appendChild(li);

document.getElementById("tarea2").value = "";

});