function loadData(table, registers){
    clearTable(table);
    if(Array.isArray(registers)){
        registers.forEach(register=>{
            loadTable(table, register);
        })
    } else {
        loadTable(table, registers);
    }
}

function loadTable(table, data){
    var register = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.innerText = data.id;

    const cell2 = document.createElement("td");
    cell2.innerText = data.title;

    const cell3 = document.createElement("td");
    cell3.innerText = data.price;

    register.appendChild(cell1);
    register.appendChild(cell2);
    register.appendChild(cell3);

    table.appendChild(register);
}

function clearTable(table){
    table.innerHTML = "";
}