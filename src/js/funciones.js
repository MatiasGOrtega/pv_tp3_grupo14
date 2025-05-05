export const mostrarlista = (productos) => {
  console.log("Lista de productos:");
  productos.forEach(producto => {
    console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
  });
}


export const filtrarProductos = (productos) => {
  const productosMayoresA20k = productos.filter(producto => producto.precio > 20000);
  console.log("\n2 - Productos con precio mayor a $20.000:");
  mostrarlista(productosMayoresA20k);
}

export const agregarIVA = (productos) => {
  console.log("\n3 - Productos con IVA incluido (21%):");
  const productosConIVA = productos.map(prod => ({
    descripcion: prod.descripcion,
    precio: (prod.precio * 1.21)
  }));
  mostrarlista(productosConIVA);
}
export const ordenarProductos = (productos) => {
  productos.sort((a, b) => a.precio - b.precio);
  console.log("\n4 - Productos ordenados por precio (menor a mayor):");
  mostrarlista(productos);
}
export const agregarProducto = (productos) => {
  productos.push({ descripcion: "Parlante Bluetooth", precio: 59000.90 });
  console.log("\n5 - Producto agregado:");
  mostrarlista(productos);
}

export const eliminarProducto = (productos) => {
  const productoEliminado = productos.shift();
  console.log("\n6 - Producto con precio más bajo eliminado:");
  console.log(`Eliminado: ${productoEliminado.descripcion} - $${productoEliminado.precio}`);
  console.log("Array final de productos:");
  mostrarlista(productos);
}