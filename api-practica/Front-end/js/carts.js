// carga todos los carritos al entrar a la sección
async function getAllCarts(){
  activarSeccion('carritos');
  var carts = await queue(urlCarts, get);
  var container = document.getElementById("containerCarts");
  container.innerHTML = "";
  loadDataCarts(container, carts);
}

// busca un carrito por su ID
async function getFindByIdCart(){
  var id = document.getElementById("idFilterCart").value;
  let cart = await queue(urlCarts+"/"+id, get);
  var container = document.getElementById("containerCarts");
  container.innerHTML = "";
  loadDataCarts(container, cart);
}

// abre el modal para crear un carrito
function openCreateModalCart(){
  document.getElementById("createCartTitle").value = "";
  document.getElementById("createCartTotal").value = "";
  var modal = new bootstrap.Modal(document.getElementById("modalCrearCart"));
  modal.show();
}

// envía el nuevo carrito al servidor
async function confirmCreateCart(){
  var title = document.getElementById("createCartTitle").value;
  var total = document.getElementById("createCartTotal").value;

  if(title == "" || total == ""){
    alert("Debes llenar Título y Total");
    return;
  }

  // estructura requerida por el servidor
  var newCart = { products: [{ title: title, total: parseFloat(total) }] };
  await queue(urlCarts, post, JSON.stringify(newCart));
  bootstrap.Modal.getInstance(document.getElementById("modalCrearCart")).hide();
  getAllCarts();
}

// abre el modal con los datos del carrito a actualizar
function openUpdateModalCart(id, title, total){
  document.getElementById("modalIdCart").value    = id;
  document.getElementById("modalCartTitle").value = title;
  document.getElementById("modalCartTotal").value = total;
  var modal = new bootstrap.Modal(document.getElementById("modalActualizarCart"));
  modal.show();
}

// envía los datos actualizados al servidor
async function confirmUpdateCart(){
  var id    = document.getElementById("modalIdCart").value;
  var title = document.getElementById("modalCartTitle").value;
  var total = document.getElementById("modalCartTotal").value;

  var updatedCart = { products: [{ title: title, total: parseFloat(total) }] };
  await queue(urlCarts+"/"+id, put, JSON.stringify(updatedCart));
  bootstrap.Modal.getInstance(document.getElementById("modalActualizarCart")).hide();
  getAllCarts();
}

// abre el modal de confirmación para eliminar
function deleteCart(id){
  document.getElementById("deleteId").value       = id;
  document.getElementById("deleteCallback").value = "carrito";
  var modal = new bootstrap.Modal(document.getElementById("modalEliminar"));
  modal.show();
}
