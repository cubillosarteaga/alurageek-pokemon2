import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function crearCard(nombre,precio,imagem){
    const producto = document.createElement("li");

    producto.className="cajita";

    producto.innerHTML=`<img src="${imagem}" alt="">
    <h2>${nombre}</h2>
    <div class="info-precio">
        <p>${precio}</p>
        <button id="eliminar"><i class="uil uil-trash-alt"></i></button>
    </div>`;

    return producto;
}



async function listarProductos(){
    try{
    const listaAPI = await conexionAPI.listarProductos();

    listaAPI.forEach(producto=>lista.appendChild(crearCard(producto.nombre,producto.precio,producto.imagem)))
}catch{
    lista.innerHTML=`<h3 class="mensaje__titulo">Ha ocurrido un problema con la conexión :(</h3>`;
}
}



listarProductos()