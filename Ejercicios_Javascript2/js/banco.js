class Cuenta{

constructor(cliente,saldo){
this.cliente = cliente;
this.saldo = saldo;
}

depositar(monto){
this.saldo = this.saldo + monto;
}

retirar(monto){

if(monto > this.saldo){
return false;
}

this.saldo = this.saldo - monto;

return true;
}

}

let cuentas = {};

function crearCuenta(){

let cliente = document.getElementById("cliente").value;
let saldo = Number(document.getElementById("saldo").value);

if(cliente == ""){
document.getElementById("resBanco").innerHTML =
"Ingrese el nombre del cliente";
return;
}

if(cuentas[cliente] != null){
document.getElementById("resBanco").innerHTML =
"La cuenta ya existe";
return;
}

cuentas[cliente] = new Cuenta(cliente,saldo);

document.getElementById("resBanco").innerHTML =
"Cuenta creada para " + cliente;

}

function depositar(){

let cliente = document.getElementById("cliente").value;
let monto = Number(document.getElementById("montoBanco").value);

let cuenta = cuentas[cliente];

if(cuenta == null){
document.getElementById("resBanco").innerHTML =
"La cuenta no existe";
return;
}

cuenta.depositar(monto);

document.getElementById("resBanco").innerHTML =
"Saldo actual $" + cuenta.saldo;

}

function retirar(){

let cliente = document.getElementById("cliente").value;
let monto = Number(document.getElementById("montoBanco").value);

let cuenta = cuentas[cliente];

if(cuenta == null){
document.getElementById("resBanco").innerHTML =
"La cuenta no existe";
return;
}

let resultado = cuenta.retirar(monto);

if(resultado == false){
document.getElementById("resBanco").innerHTML =
"Fondos insuficientes";
return;
}

document.getElementById("resBanco").innerHTML =
"Saldo actual $" + cuenta.saldo;

}