import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function crearCard(nombre,precio,imagem){
    const producto = document.createElement("li");

    producto.className="cajita";

    producto.innerHTML=`<img src="${imagem}" alt="">
    <h2>${nombre}</h2>
    <div class="info-precio">
        <p>${precio}</p>
        <img src="trash1.png" alt="">
    </div>`;

    return producto;
}

async function listarProductos(){
    const listaAPI = await conexionAPI.listarProductos();

    listaAPI.forEach(producto=>lista.appendChild(crearCard(producto.nombre,producto.precio,producto.imagem)))
}

listarProductos()