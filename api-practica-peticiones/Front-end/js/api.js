async function queue(url,method,data=null){
  //cabecera de la petición
  let headersList = {
  "Accept": "*/*",
  "User-Agent": "calichesoft"
  }
  //petición al servidor
  //fetch("end point del servidor"
  let response = await fetch(url, { 
    //tipo de petición
    method: method,
    body:data,
    //agregar cabecera
    headers: headersList
  });
  //conversión de la respuesta en json
    return response.json();
}