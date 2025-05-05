export const  mostrarlista =(productos)=>{
    console.log("1 - Lista de productos:");
  productos.forEach(producto => {
    console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
  });
}