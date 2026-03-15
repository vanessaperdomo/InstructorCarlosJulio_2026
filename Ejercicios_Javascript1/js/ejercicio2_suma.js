function sumarNumeros(){

let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);

let suma = n1 + n2;

document.getElementById("resultadoSuma").textContent =
"Resultado: " + suma;

}

document.getElementById("btnSumar").addEventListener("click", sumarNumeros);