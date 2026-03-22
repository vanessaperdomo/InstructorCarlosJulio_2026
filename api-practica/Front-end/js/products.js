// carga todos los productos al entrar a la sección
async function getAllProducts(){
  activarSeccion('productos');
  var products = await queue(urlProducts, get);
  var container = document.getElementById("container");
  container.innerHTML = "";
  loadData(container, products);
}

// busca un producto por su ID
async function getFindByIdProduct(){
  var id = document.getElementById("idFilter").value;
  let product = await queue(urlProducts+"/"+id, get);
  var container = document.getElementById("container");
  container.innerHTML = "";
  loadData(container, product);
}

// abre el modal para crear un producto
function openCreateModal(){
  document.getElementById("createTitle").value = "";
  document.getElementById("createPrice").value = "";
  var modal = new bootstrap.Modal(document.getElementById("modalCrear"));
  modal.show();
}

// envía el nuevo producto al servidor
async function confirmCreate(){
  var title = document.getElementById("createTitle").value;
  var price = document.getElementById("createPrice").value;

  if(title == "" || price == ""){
    alert("Debes llenar Título y Precio");
    return;
  }

  var newProduct = { title: title, price: parseFloat(price) };
  await queue(urlProducts, post, JSON.stringify(newProduct));
  bootstrap.Modal.getInstance(document.getElementById("modalCrear")).hide();
  getAllProducts();
}

// abre el modal con los datos del producto a actualizar
function openUpdateModal(id, title, price){
  document.getElementById("modalId").value    = id;
  document.getElementById("modalTitle").value = title;
  document.getElementById("modalPrice").value = price;
  var modal = new bootstrap.Modal(document.getElementById("modalActualizar"));
  modal.show();
}

// envía los datos actualizados al servidor
async function confirmUpdate(){
  var id    = document.getElementById("modalId").value;
  var title = document.getElementById("modalTitle").value;
  var price = document.getElementById("modalPrice").value;

  var updatedProduct = { title: title, price: parseFloat(price) };
  await queue(urlProducts+"/"+id, put, JSON.stringify(updatedProduct));
  bootstrap.Modal.getInstance(document.getElementById("modalActualizar")).hide();
  getAllProducts();
}

// abre el modal de confirmación para eliminar
function deleteProduct(id){
  document.getElementById("deleteId").value       = id;
  document.getElementById("deleteCallback").value = "producto";
  var modal = new bootstrap.Modal(document.getElementById("modalEliminar"));
  modal.show();
}
