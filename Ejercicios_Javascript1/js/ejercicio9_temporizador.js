class Temporizador{

constructor(){
this.segundos = 0;
this.intervalo = null;
}

iniciar(){

if(this.intervalo == null){

this.intervalo = setInterval(()=>{

this.segundos++;

document.getElementById("tiempo").textContent = this.segundos;

},1000);

}

}

detener(){

clearInterval(this.intervalo);
this.intervalo = null;

}

reiniciar(){

clearInterval(this.intervalo);
this.intervalo = null;

this.segundos = 0;

document.getElementById("tiempo").textContent = this.segundos;

}

}

let temporizador = new Temporizador();