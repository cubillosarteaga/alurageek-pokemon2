import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");



async function crearProducto(evento){

    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

   await conexionAPI.enviarProducto(titulo,precio,imagen);


}

formulario.addEventListener("submit",evento=>crearProducto(evento));