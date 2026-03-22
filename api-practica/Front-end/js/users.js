// carga todos los usuarios al entrar a la sección
async function getAllUsers(){
  activarSeccion('usuarios');
  var users = await queue(urlUsers, get);
  var container = document.getElementById("containerUsers");
  container.innerHTML = "";
  loadDataUsers(container, users);
}

// busca un usuario por su ID
async function getFindByIdUser(){
  var id = document.getElementById("idFilterUser").value;
  let user = await queue(urlUsers+"/"+id, get);
  var container = document.getElementById("containerUsers");
  container.innerHTML = "";
  loadDataUsers(container, user);
}

// abre el modal para crear un usuario
function openCreateModalUser(){
  document.getElementById("createFirstName").value = "";
  document.getElementById("createLastName").value  = "";
  var modal = new bootstrap.Modal(document.getElementById("modalCrearUser"));
  modal.show();
}

// envía el nuevo usuario al servidor
async function confirmCreateUser(){
  var firstName = document.getElementById("createFirstName").value;
  var lastName  = document.getElementById("createLastName").value;

  if(firstName == "" || lastName == ""){
    alert("Debes llenar Nombre y Apellido");
    return;
  }

  var newUser = { firstName: firstName, lastName: lastName };
  await queue(urlUsers, post, JSON.stringify(newUser));
  bootstrap.Modal.getInstance(document.getElementById("modalCrearUser")).hide();
  getAllUsers();
}

// abre el modal con los datos del usuario a actualizar
function openUpdateModalUser(id, firstName, lastName){
  document.getElementById("modalIdUser").value    = id;
  document.getElementById("modalFirstName").value = firstName;
  document.getElementById("modalLastName").value  = lastName;
  var modal = new bootstrap.Modal(document.getElementById("modalActualizarUser"));
  modal.show();
}

// envía los datos actualizados al servidor
async function confirmUpdateUser(){
  var id        = document.getElementById("modalIdUser").value;
  var firstName = document.getElementById("modalFirstName").value;
  var lastName  = document.getElementById("modalLastName").value;

  var updatedUser = { firstName: firstName, lastName: lastName };
  await queue(urlUsers+"/"+id, put, JSON.stringify(updatedUser));
  bootstrap.Modal.getInstance(document.getElementById("modalActualizarUser")).hide();
  getAllUsers();
}

// abre el modal de confirmación para eliminar
function deleteUser(id){
  document.getElementById("deleteId").value       = id;
  document.getElementById("deleteCallback").value = "usuario";
  var modal = new bootstrap.Modal(document.getElementById("modalEliminar"));
  modal.show();
}
