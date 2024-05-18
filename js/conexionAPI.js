async function listarProductos(){
    const conexion = await fetch("http://localhost:3000/products");
    const conexionConvertida = conexion.json();
    
    return conexionConvertida;
}

async function enviarProducto(nombre,precio,imagem){
    const conexion = await fetch("http://localhost:3000/products",{
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagem:imagem
        })
    })

    const conexionConvertida= conexion.json();

    return conexionConvertida;

}

export const conexionAPI ={
    listarProductos,enviarProducto
}

//listarProductos();