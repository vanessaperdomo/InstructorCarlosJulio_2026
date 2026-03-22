// ============ PRODUCTOS ============

// carga lista de productos en la tabla
function loadData(table, registers){
  clearTable(table);
  if(Array.isArray(registers)){
    registers.forEach(register=>{ loadTable(table, register); })
  } else {
    loadTable(table, registers);
  }
}

// crea una fila de producto en la tabla
function loadTable(table, data){
  var register = document.createElement("tr");

  const cell1 = document.createElement("td");
  cell1.innerText = data.id;

  const cell2 = document.createElement("td");
  cell2.innerText = data.title;

  const cell3 = document.createElement("td");
  cell3.innerText = data.price;

  // botón actualizar - guarda datos en dataset para evitar problemas con caracteres especiales
  const cellUpdate = document.createElement("td");
  const btnUpdate = document.createElement("button");
  btnUpdate.className = "btn btn-warning btn-sm";
  btnUpdate.innerText = "Actualizar";
  btnUpdate.dataset.id    = data.id;
  btnUpdate.dataset.title = data.title;
  btnUpdate.dataset.price = data.price;
  btnUpdate.onclick = function(){
    openUpdateModal(this.dataset.id, this.dataset.title, this.dataset.price);
  };
  cellUpdate.appendChild(btnUpdate);

  // botón eliminar
  const cellDelete = document.createElement("td");
  const btnDelete = document.createElement("button");
  btnDelete.className = "btn btn-danger btn-sm";
  btnDelete.innerText = "Eliminar";
  btnDelete.dataset.id = data.id;
  btnDelete.onclick = function(){ deleteProduct(this.dataset.id); };
  cellDelete.appendChild(btnDelete);

  register.appendChild(cell1);
  register.appendChild(cell2);
  register.appendChild(cell3);
  register.appendChild(cellUpdate);
  register.appendChild(cellDelete);
  table.appendChild(register);
}

// ============ USUARIOS ============

// carga lista de usuarios en la tabla
function loadDataUsers(table, registers){
  clearTable(table);
  if(Array.isArray(registers)){
    registers.forEach(register=>{ loadTableUsers(table, register); })
  } else {
    loadTableUsers(table, registers);
  }
}

// crea una fila de usuario en la tabla
function loadTableUsers(table, data){
  var register = document.createElement("tr");

  const cell1 = document.createElement("td");
  cell1.innerText = data.id;

  const cell2 = document.createElement("td");
  cell2.innerText = data.firstName;

  const cell3 = document.createElement("td");
  cell3.innerText = data.lastName;

  // botón actualizar
  const cellUpdate = document.createElement("td");
  const btnUpdate = document.createElement("button");
  btnUpdate.className = "btn btn-warning btn-sm";
  btnUpdate.innerText = "Actualizar";
  btnUpdate.dataset.id        = data.id;
  btnUpdate.dataset.firstName = data.firstName;
  btnUpdate.dataset.lastName  = data.lastName;
  btnUpdate.onclick = function(){
    openUpdateModalUser(this.dataset.id, this.dataset.firstName, this.dataset.lastName);
  };
  cellUpdate.appendChild(btnUpdate);

  // botón eliminar
  const cellDelete = document.createElement("td");
  const btnDelete = document.createElement("button");
  btnDelete.className = "btn btn-danger btn-sm";
  btnDelete.innerText = "Eliminar";
  btnDelete.dataset.id = data.id;
  btnDelete.onclick = function(){ deleteUser(this.dataset.id); };
  cellDelete.appendChild(btnDelete);

  register.appendChild(cell1);
  register.appendChild(cell2);
  register.appendChild(cell3);
  register.appendChild(cellUpdate);
  register.appendChild(cellDelete);
  table.appendChild(register);
}

// ============ CARRITOS ============

// carga lista de carritos en la tabla
function loadDataCarts(table, registers){
  clearTable(table);
  if(Array.isArray(registers)){
    registers.forEach(register=>{ loadTableCarts(table, register); })
  } else {
    loadTableCarts(table, registers);
  }
}

// crea una fila de carrito en la tabla (muestra el primer producto)
function loadTableCarts(table, data){
  var register = document.createElement("tr");

  const cell1 = document.createElement("td");
  cell1.innerText = data.id;

  // título y total del primer producto del carrito
  const cell2 = document.createElement("td");
  cell2.innerText = data.products[0].title;

  const cell3 = document.createElement("td");
  cell3.innerText = data.products[0].total;

  // botón actualizar
  const cellUpdate = document.createElement("td");
  const btnUpdate = document.createElement("button");
  btnUpdate.className = "btn btn-warning btn-sm";
  btnUpdate.innerText = "Actualizar";
  btnUpdate.dataset.id    = data.id;
  btnUpdate.dataset.title = data.products[0].title;
  btnUpdate.dataset.total = data.products[0].total;
  btnUpdate.onclick = function(){
    openUpdateModalCart(this.dataset.id, this.dataset.title, this.dataset.total);
  };
  cellUpdate.appendChild(btnUpdate);

  // botón eliminar
  const cellDelete = document.createElement("td");
  const btnDelete = document.createElement("button");
  btnDelete.className = "btn btn-danger btn-sm";
  btnDelete.innerText = "Eliminar";
  btnDelete.dataset.id = data.id;
  btnDelete.onclick = function(){ deleteCart(this.dataset.id); };
  cellDelete.appendChild(btnDelete);

  register.appendChild(cell1);
  register.appendChild(cell2);
  register.appendChild(cell3);
  register.appendChild(cellUpdate);
  register.appendChild(cellDelete);
  table.appendChild(register);
}

// ============ POSTS ============

// carga lista de posts en la tabla
function loadDataPosts(table, registers){
  clearTable(table);
  if(Array.isArray(registers)){
    registers.forEach(register=>{ loadTablePosts(table, register); })
  } else {
    loadTablePosts(table, registers);
  }
}

// crea una fila de post en la tabla
function loadTablePosts(table, data){
  var register = document.createElement("tr");

  const cell1 = document.createElement("td");
  cell1.innerText = data.id;

  const cell2 = document.createElement("td");
  cell2.innerText = data.title;

  const cell3 = document.createElement("td");
  cell3.innerText = data.body;

  // botón actualizar
  const cellUpdate = document.createElement("td");
  const btnUpdate = document.createElement("button");
  btnUpdate.className = "btn btn-warning btn-sm";
  btnUpdate.innerText = "Actualizar";
  btnUpdate.dataset.id    = data.id;
  btnUpdate.dataset.title = data.title;
  btnUpdate.dataset.body  = data.body;
  btnUpdate.onclick = function(){
    openUpdateModalPost(this.dataset.id, this.dataset.title, this.dataset.body);
  };
  cellUpdate.appendChild(btnUpdate);

  // botón eliminar
  const cellDelete = document.createElement("td");
  const btnDelete = document.createElement("button");
  btnDelete.className = "btn btn-danger btn-sm";
  btnDelete.innerText = "Eliminar";
  btnDelete.dataset.id = data.id;
  btnDelete.onclick = function(){ deletePost(this.dataset.id); };
  cellDelete.appendChild(btnDelete);

  register.appendChild(cell1);
  register.appendChild(cell2);
  register.appendChild(cell3);
  register.appendChild(cellUpdate);
  register.appendChild(cellDelete);
  table.appendChild(register);
}

// limpia el contenido de una tabla
function clearTable(table){
  table.innerHTML = "";
}
