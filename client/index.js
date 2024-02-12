//El DOMContentLoadedevento se activa cuando el documento HTML se ha analizado por completo y todos los scripts diferido
document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:3000/getAll')
    .then(response => response.json())
    //.then(data => loadHTMLTable(data['data']));
    .then(data => loadHTMLTable(data));
});

document.querySelector('table tbody').addEventListener('click', function(event) {
    if (event.target.className === "delete-row-btn") {
        deleteRowById(event.target.dataset.id);
    }
    if (event.target.className === "edit-row-btn") {
        handleEditRow(event.target.dataset.id);
    }
});

const updateBtn = document.querySelector('#update-row-btn');
const searchBtn = document.querySelector('#search-btn');

searchBtn.onclick = function() {
    const searchValue = document.querySelector('#search-input').value;
    console.log(searchValue)

    fetch('http://localhost:3000/search/' + searchValue)
    .then(response => response.json())
    .then(data => {
        console.log(data),  
        loadHTMLTable(data);
        })
    
}

function deleteRowById(id) {
    fetch('http://localhost:3000/delete/' + id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        location.reload();
    //comprobar si puedo saber si se ha hecho la operacion con exito??????????
    /*
        if (data.status==200) {
            //método recarga el documento actual.
            location.reload();
        }
    */
    });
}

function handleEditRow(id) {
    const updateSection = document.querySelector('#update-row');
    updateSection.hidden = false;
    document.querySelector('#update-name-input').dataset.id = id;
}

updateBtn.onclick = function() {
    const updateNameInput = document.querySelector('#update-name-input');
    //guarda una hora menos????????????????
    const fecha_act = new Date();

    console.log(updateNameInput);

    fetch('http://localhost:3000/update', {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            id: updateNameInput.dataset.id, 
            nombre: updateNameInput.value, 
            fecha_actualizacion: fecha_act
        })
    })
    .then(response => response.json())
    .then(data => {
        location.reload();
        //no funciona
        /*
        if (data.success) {
            location.reload();
        }
        */
    })
}


const addBtn = document.querySelector('#add-name-btn');

addBtn.onclick = function () {
    const nameInput = document.querySelector('#name-input');
    const name = nameInput.value;
    //me guarda una hora menos, mirar????????
    const fecha = new Date();
    const fecha_act = new Date(null);
    console.log(fecha);
    nameInput.value = "";

    fetch('http://localhost:3000/insert', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ nombre : name, fecha_alta: fecha, fecha_actualización : fecha_act})
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data));
}

function insertRowIntoTable(data) {
    console.log(data);
    const table = document.querySelector('table tbody');
    const isTableData = table.querySelector('.no-data');

    let tableHtml = "<tr>";

    //Devuelve un valor booleano que indica si el objeto en el que se llama tiene una propiedad con el nombre del argumento
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            if (key === 'fecha_alta') {
                data[key] = new Date(data[key]).toLocaleString();
            }
            tableHtml += `<td>${data[key]}</td>`;
                        
        }
    }
    //añado a null el valor de la fecha de actualización
    tableHtml += `<td>${null}</td>`;

    tableHtml += `<td><button class="delete-row-btn" data-id=${data.id}>Delete</td>`;
    tableHtml += `<td><button class="edit-row-btn" data-id=${data.id}>Edit</td>`;

    tableHtml += "</tr>";

    if (isTableData) {
        table.innerHTML = tableHtml;
    } else {
        const newRow = table.insertRow();
        newRow.innerHTML = tableHtml;
    }
}

function loadHTMLTable(data) {
    const table = document.querySelector('table tbody');

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({id, nombre, fecha_alta,fecha_actualizacion}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${id}</td>`;
        tableHtml += `<td>${nombre}</td>`;
        tableHtml += `<td>${new Date(fecha_alta).toLocaleString()}</td>`;
        tableHtml += `<td>${fecha_actualizacion}</td>`;
        tableHtml += `<td><button class="delete-row-btn" data-id=${id}>Delete</td>`;
        tableHtml += `<td><button class="edit-row-btn" data-id=${id}>Edit</td>`;
        tableHtml += "</tr>";
    });

    table.innerHTML = tableHtml;
}