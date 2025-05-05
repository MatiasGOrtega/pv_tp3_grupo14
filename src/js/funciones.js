export const  mostrarlista =(productos)=>{
    console.log("1 - Lista de productos:");
  productos.forEach(producto => {
    console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
  });
}


export const filtrarProductos = (productos) => {
  const productosMayoresA20k = productos.filter(producto => producto.precio > 20000);
    console.log("\n2 - Productos con precio mayor a $20.000:");
    console.log(productosMayoresA20k);
}

export const agregarIVA = (productos) => {
  const productosConIVA = productos.map(prod => ({
      descripcion: prod.descripcion,
      precio: (prod.precio*1.21)
  }));
  console.log(productosConIVA);
}
export const ordenarProductos = (productos) =>{
  productos.sort((a, b) => a.precio - b.precio);
  console.log("\n4 - Productos ordenados por precio (menor a mayor):");
  console.log(productos);
}

