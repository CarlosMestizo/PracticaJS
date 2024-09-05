var frutas = ["Manzana", "Uva", "naranja", "durazno", "fresa"]


for (var i = 0; i < frutas.length; i++) {

    document.getElementById("listasFrutas").innerHTML += "<li>" + frutas[i] + "</li>";
}

// Objetos
var persona = { nombre: "Juan", telefono: "12345678" };

// Array de objetos
var contactos = [
    { nombre: "Juan", telefono: "12345678" },
    { nombre: "Carme", telefono: "87654321" },
];

console.log(contactos);

for (var i = 0; i < contactos.length; i++) {

    let li = "<li>" + contactos[i].nombre + ": " + contactos[i].telefono + "</li>";
    document.getElementById("listasContactos").innerHTML += li;
}
