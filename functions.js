const fs = require('fs');

let obtenerContenido = () => 
{
    let arrayProductos = [];
    try
    {
        const contenido = fs.readFileSync('productos.txt', 'utf-8');

        arrayProductos = contenido.split(',\r\n');
            
        arrayProductos.splice(arrayProductos.length - 1, 1);
    
        return arrayProductos; 
    }
    catch(error)
    {
        console.log('No existe el archivo. Error:', error);
    }
    
}

let getProductos =  () =>
{
    try
    {
        let productos = obtenerContenido();
        
        let objProducto = { items: productos.map((producto) => JSON.parse(producto)), cantidad: productos.length };

        return objProducto;
    }
    catch (error)
    {
        return [];
    }
}

let getItemRandom = () =>
{
    try
    {
        let productos = obtenerContenido();
    
        let item = Math.floor(Math.random() * productos.length);
        
        producto =
        {
            item: JSON.parse(productos[item])
        };
    
        return producto; 
    }
    catch(error)
    {
        return {};
    }
    
}

module.exports = { getProductos, getItemRandom }