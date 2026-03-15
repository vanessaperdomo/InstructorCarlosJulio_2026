class Calculadora{

sumar(){

let n1 = Number(document.getElementById("num1calc").value);
let n2 = Number(document.getElementById("num2calc").value);

document.getElementById("calcular").textContent = n1 + n2;

}

multiplicar(){

let n1 = Number(document.getElementById("num1calc").value);
let n2 = Number(document.getElementById("num2calc").value);

document.getElementById("calcular").textContent = n1 * n2;

}

dividir(){

let n1 = Number(document.getElementById("num1calc").value);
let n2 = Number(document.getElementById("num2calc").value);

document.getElementById("calcular").textContent = n1 / n2;

}

}

let calculadora = new Calculadora();