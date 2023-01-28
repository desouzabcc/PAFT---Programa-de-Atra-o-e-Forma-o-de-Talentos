// UPDATE LIST
function updateList() {
    let url = "http://127.0.0.1:5000/contacts"
    result.innerHTML = ""
    fetch(url)
        .then(response => response.json())
        .then(json => {
            json.contacts.forEach(element => {
                let c = `<tr>
                    <td onclick="updateContact(${element.id})" class="table1"><button><span class="material-symbols-outlined">edit</span></button></td>
                    <td class="table3">${element.name}</td>
                    <td class="table3">${element.phone}</td>
                    <td  onclick="deleteContact(${element.id})" class="table1"><button><span class="material-symbols-outlined">delete</span></button></td></tr>`
                result.innerHTML += c
            });
        })
        .catch(error => console.error(error))
}

// BUTTON CREATE 
function createContact() {
    let url = "http://127.0.0.1:5000/contacts"
    const name = document.getElementById('name')
    const phone = document.getElementById('phone')
    const contact = { "name": name.value, "phone": phone.value }
    name.value = ""
    phone.value = ""
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    })
    .then(response => response.json())
    .then(json => {
        updateList()
    })
    .catch(error => console.error(error))
}

// BUTTON UPDATE
function updateContact(v) {
    let url = `http://127.0.0.1:5000/contacts/${v}`
    const name = document.getElementById('name')
    const phone = document.getElementById('phone')
    const data = { "name": name.value, "phone": phone.value }
    console.log(name)
    if (name.value === "" || phone.value === "") {
        alert("Por favor preencha os campos para poder editar")
    } else {
        fetch(url, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => {
            updateList()
            console.log(json)
        })
        .catch(error => console.error(error))
    }
}

// BUTTON DELETE
function deleteContact(d) {
    let url = `http://127.0.0.1:5000/contacts/${d}`
    fetch(url, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(json => {
        updateList()
        console.log(json)
    })
    .catch(error => console.error(error))
}