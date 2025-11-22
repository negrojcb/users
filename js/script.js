const listaUsuarios = document.getElementById("listaUsuarios");
console.log(listaUsuarios);

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

console.log(newUsuarios);

function mostrar(pepes) {
  pepes.forEach((pepito) => {
    const item = document.createElement("li");
    const contenedor = document.createElement("div");
    contenedor.innerHTML = `
    <img src="${pepito.img}" alt="${pepito.name}">
    <h2>${pepito.name}</h2>
    <p>Edad: ${pepito.age}</p>
    <p>Usuario: ${pepito.username}</p>
    <p>Tel: ${pepito.phone}</p>
    <p>Email: ${pepito.email}</p>
    <p>${pepito.address.street}, ${pepito.address.suite}, ${pepito.address.city}</p>
    `;
    item.appendChild(contenedor);
    listaUsuarios.appendChild(item);
  });
}
