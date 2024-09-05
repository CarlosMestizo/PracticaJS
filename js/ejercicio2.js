var productos = [
    { nombre: "amp", precio: 0.80 },
    { nombre: "coca cola lata", precio: 0.65 },
    { nombre: "maruchan", precio: 0.90 },
    { nombre: "gaseosa pepsi", precio: 1.10 },
    { nombre: "churro tozteca", precio: 0.15 },
    { nombre: "Caja de cafe", precio: 3.00 },
    { nombre: "Queso", precio: 0.25 },
    { nombre: "chicharron", precio: 0.35 },
    { nombre: "Dulces de menta", precio: 0.20 },
    { nombre: "Caja de consome", precio: 1.50 },
];

for (var i = 0; i < productos.length; i++) {

    var html = "<tr>";
    html += "        <td>" + productos[i].nombre + "</td>";
    html += "        <td>" + productos[i].precio + "</td>";
    html += "</tr>";

    document.getElementById("tbodyProducto").innerHTML += html;
}
