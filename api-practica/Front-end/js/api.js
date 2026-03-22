// función genérica para hacer peticiones al servidor
async function queue(url, method, data=null){

  // cabeceras base
  let headersList = {
    "Accept": "*/*",
    "User-Agent": "calichesoft"
  }

  // agrega Content-Type solo en POST y PUT (cuando se envían datos)
  if(data != null){
    headersList["Content-Type"] = "application/json";
  }

  // hace la petición y retorna la respuesta en JSON
  let response = await fetch(url, {
    method: method,
    body: data,
    headers: headersList
  });

  return response.json();
}
