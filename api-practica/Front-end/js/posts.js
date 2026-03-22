// carga todos los posts al entrar a la sección
async function getAllPosts(){
  activarSeccion('posts');
  var posts = await queue(urlPosts, get);
  var container = document.getElementById("containerPosts");
  container.innerHTML = "";
  loadDataPosts(container, posts);
}

// busca un post por su ID
async function getFindByIdPost(){
  var id = document.getElementById("idFilterPost").value;
  let postData = await queue(urlPosts+"/"+id, get);
  var container = document.getElementById("containerPosts");
  container.innerHTML = "";
  loadDataPosts(container, postData);
}

// abre el modal para crear un post
function openCreateModalPost(){
  document.getElementById("createPostTitle").value = "";
  document.getElementById("createPostBody").value  = "";
  var modal = new bootstrap.Modal(document.getElementById("modalCrearPost"));
  modal.show();
}

// envía el nuevo post al servidor
async function confirmCreatePost(){
  var title = document.getElementById("createPostTitle").value;
  var body  = document.getElementById("createPostBody").value;

  if(title == "" || body == ""){
    alert("Debes llenar Título y Contenido");
    return;
  }

  var newPost = { title: title, body: body };
  // usa "POST" directo para evitar conflicto con la variable post de const.js
  await queue(urlPosts, "POST", JSON.stringify(newPost));
  bootstrap.Modal.getInstance(document.getElementById("modalCrearPost")).hide();
  getAllPosts();
}

// abre el modal con los datos del post a actualizar
function openUpdateModalPost(id, title, body){
  document.getElementById("modalIdPost").value    = id;
  document.getElementById("modalPostTitle").value = title;
  document.getElementById("modalPostBody").value  = body;
  var modal = new bootstrap.Modal(document.getElementById("modalActualizarPost"));
  modal.show();
}

// envía los datos actualizados al servidor
async function confirmUpdatePost(){
  var id    = document.getElementById("modalIdPost").value;
  var title = document.getElementById("modalPostTitle").value;
  var body  = document.getElementById("modalPostBody").value;

  var updatedPost = { title: title, body: body };
  // usa "PUT" directo para evitar conflicto con la variable put de const.js
  await queue(urlPosts+"/"+id, "PUT", JSON.stringify(updatedPost));
  bootstrap.Modal.getInstance(document.getElementById("modalActualizarPost")).hide();
  getAllPosts();
}

// abre el modal de confirmación para eliminar
function deletePost(id){
  document.getElementById("deleteId").value       = id;
  document.getElementById("deleteCallback").value = "post";
  var modal = new bootstrap.Modal(document.getElementById("modalEliminar"));
  modal.show();
}
