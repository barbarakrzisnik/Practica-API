const formularioNuevoUsuario = document.getElementById("formulario-nuevo-usuario")
const botonNuevoUsuario = document.getElementById("boton-enviar-usuario")
const inputNombre = document.getElementById("input-nombre")
const inputNumero = document.getElementById("input-numero")
const inputEmail = document.getElementById("input-email")
const inputDireccion = document.getElementById("input-direccion")
const abrirModalNuevoUsuario = document.querySelector(".abrir-modal-nuevo-usuario")
const modalNuevoUsuario = document.querySelector(".formulario-nuevo-usuario")
const cerrarModalNuevoUsuario = document.querySelector(".cerrar-formulario-nuevo-usuario")



const crearBotonesBorrar = () => {
  const botonesBorrar = document.querySelectorAll(".boton-borrar")
    
  for (let i = 0; i < botonesBorrar.length; i++) {
    botonesBorrar[i].onclick = () => {
     const idDelUsuarioABorrar = botonesBorrar[i].dataset.id 
     borrarUsuario(idDelUsuarioABorrar)
    }
  }
}

const crearBotonesEditar = () => {
  const botonesEditar = document.querySelectorAll(".boton-editar")
    
  for (let i = 0; i < botonesEditar.length; i++) {
    botonesEditar[i].onclick = () => {
     const idDelUsuarioAEditar = botonesEditar[i].dataset.id 
     editarUsuario(idDelUsuarioAEditar)
    }
  }
}

abrirModalNuevoUsuario.onclick = () => {
  modalNuevoUsuario.style.display = "flex"
}

cerrarModalNuevoUsuario.onclick = () => {
  modalNuevoUsuario.style.display = "none"
}

const borrarUsuario = (id) => {
  console.log("Borro", id)
  fetch(`https://601da02bbe5f340017a19d60.mockapi.io/users/${id}`, {
    method: "DELETE"
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    actualizarUsuarios()
  })
}

// const editarUsuario = (id) => {
//   console.log("Edito", id)

//   modalNuevoUsuario.style.display = "flex"
//   inputNombre.value = ""

//   const editarUsuario = {
//     fullname: inputNombre.value, 
//     phone: inputNumero.value, 
//     address: inputDireccion.value, 
//     email: inputEmail.value
//   }


// //   fetch("https://reqres.in/api/users/2", {
// //   method: "PUT", 
// //   body: JSON.stringify(editarUsuario), 
// //   headers: {
// //     "Content-Type": "application/json"
// //   }
// // }).then(res => res.json())
// // .then((data) => {
// //   console.log(data)
// //   crearTablaHTML(data)
// // })
// }

const crearTablaHTML = (data) => {
  const tabla = document.querySelector("#tabla")
  const html = data.reduce((acc, curr) => {
    return acc + `  
    <tr>
      <td>${curr.fullname}</td>
      <td>${curr.email}</td>
      <td>${curr.address}</td>
      <td>${curr.phone}</td>
      <td>
      <button class="boton-borrar" data-id="${curr.id}">Borrar usuario</button>
      <button class="boton-editar" data-id="${curr.id}">Editar usuario</button>
      </td>
    </tr>
    `
  }, `
    <tr>
      <th>Nombre</th>
      <th>Email</th>
      <th>Direccion</th>
      <th>Telefono</th>
      <th>Acciones</th>
    </tr>
    `)

    tabla.innerHTML = html

    crearBotonesBorrar()
    crearBotonesEditar()
}

const actualizarUsuarios = () => {
  fetch("https://601da02bbe5f340017a19d60.mockapi.io/users")
  .then((res) =>  res.json())
  .then((data) => {
    console.log(data)
    crearTablaHTML(data)
})
}


// Funciones

actualizarUsuarios()

formularioNuevoUsuario.onsubmit = (e) => {
  e.preventDefault()

  const nuevoUsuario = {
    fullname: inputNombre.value, 
    phone: inputNumero.value, 
    address: inputDireccion.value, 
    email: inputEmail.value
  }

  fetch("https://601da02bbe5f340017a19d60.mockapi.io/users", {
    method: "POST", 
    body: JSON.stringify(nuevoUsuario), 
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((res) =>  res.json())
  .then((data) => {
    console.log(data)
    actualizarUsuarios()
  })

  inputNombre.value = ""
  inputNumero.value = ""
  inputDireccion.value = ""
  inputEmail.value = ""
  modalNuevoUsuario.style.display = "none"
}




// Practica con APIS

// En esta api puedo hacer las siguientes acciones

// Get para obtener usuarios
// Post para subir usuario nuevo
// Put edito usuario / Get para pedir de vuelta los usuarios
// Delete borro usuario / Get para pedir de vuelta los usuarios

// Busco comunicarme siempre con la api para actualizar la informacion para tener una sola fuente de verdad


// Cuando filtro las listas, es trabajado de la api y los query params que permite
// La api de Marvel, no solo deja eso, sino que permite ordenar


// En el trabajo nos amoldamos a lo que nos da el backend

//Las apis permiten la existencia de aplicaciones multiplataforma
//Ej. Instagram, puedo tenerlo en todos lados porque todo se comunica con la misma api



// html tiene un atributo que se llama data, es la buena practica
// usar id expecifico para cada elemento en relaidad no se considera buena practica

//Armar un botones de borrar cuando hago el html
// Despues de que se arma el html, sino no anda

// DATA-ID
// si escribo eso, quiero ver la propiedad dataset.id 
// no voy a ver data-id .. eso tiro id
// data se puede repetir
// va siempre que le quieras agregar info extra a un elemento de html
// data- es el nombre real, lo que viene despues es lo que me invento yo

// data-hola = dataset.hola







