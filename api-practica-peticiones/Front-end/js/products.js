// funcion que trae todos los productos
async function getAllProducts(){
  var products = await queue(urlProducts, get);
  var container = document.getElementById("container");
  container.innerHTML = "";
  loadData(container, products);
}

// funcion que busca un producto por id
async function getFindByIdProduct(){
  var id = document.getElementById("inputId").value;
  let product = await queue(urlProducts+"/"+id, get);
  var container = document.getElementById("container");
  container.innerHTML = "";
  loadData(container, product);
}

// funcion que crea un producto
async function createProduct(){
  let title = document.getElementById("inputTitle").value;
  let price = document.getElementById("inputPrice").value;

  // arma el objeto con los datos del formulario
  let newProduct = {
    title: title,
    price: parseFloat(price)
  };

  await queue(urlProducts, post, JSON.stringify(newProduct));
  getAllProducts(); // sirve para recarga la tabla
}

// funcion que actualiza un producto por su id
async function updateProduct(){
  let id    = document.getElementById("inputId").value;
  let title = document.getElementById("inputTitle").value;
  let price = document.getElementById("inputPrice").value;

  // arma el objeto con los nuevos datos
  let updatedProduct = {
    title: title,
    price: parseFloat(price)
  };

  await queue(urlProducts+"/"+id, put, JSON.stringify(updatedProduct));
  getAllProducts(); // sirve para recarga la tabla
}

// funcion que elimina un producto por su ID
async function deleteProduct(){
  let id = document.getElementById("inputId").value;
  await queue(urlProducts+"/"+id, deletes);
  getAllProducts(); // recarga la tabla
}