const listaUsuarios = document.getElementById("listaUsuarios");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("La solicitud no se pudo realizar");
    }
    return response.json();
  })
  .then((data) => {
    const usuarios = data;
    const newUsuarios = usuarios.map((usuario) => {
      return {
        ...usuario,
        age: Math.floor(Math.random() * 80) + 25,
        img: `/assets/img/${usuario.id}.jpeg`,
        address: `${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}`,
      };
    });
    mostrar(newUsuarios);
    console.log(newUsuarios);
  })
  .catch((error) => {
    console.log("Ha habido un error");
  });

function mostrar(pepes) {
  pepes.forEach((pepito) => {
    const item = document.createElement("li");
    const contenedor = document.createElement("div");
    contenedor.classList.add("user-card");
    const contenedorDatos1 = document.createElement("div");
    contenedorDatos1.classList.add("card-datos");
    const contenedorDatos2 = document.createElement("div");
    contenedorDatos2.classList.add("address");
    contenedorDatos1.innerHTML = `
    <div>
    <p><b>Name:</b>${pepito.name}</p>
    <p><b>Age:</b> ${pepito.age}</p>
    <p><b>Username:</b> ${pepito.username}</p>
    <p><b>Phone:</b> ${pepito.phone}</p>
    <p><b>Email:</b> ${pepito.email}</p>
    </div>
    <img src="${pepito.img}" alt="${pepito.name}">
    `;
    contenedor.innerHTML = `
     
    `;
    contenedorDatos2.innerHTML = `<p><b>Compan:y</b> ${pepito.company.name}</p>
    <p><b>Address:</b> ${pepito.address}</p>`;
    item.appendChild(contenedor);
    contenedor.appendChild(contenedorDatos1);
    contenedor.appendChild(contenedorDatos2);
    listaUsuarios.appendChild(item);
  });
}
