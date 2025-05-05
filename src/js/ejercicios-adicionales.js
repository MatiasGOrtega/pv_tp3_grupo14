let productos = [
    { descripcion: "Auriculares", precio: 49000 },
    { descripcion: "Teclado", precio: 30000 },
    { descripcion: "Mouse", precio: 15000 },
    { descripcion: "Monitor", precio: 120000 },
    { descripcion: "Webcam", precio: 22000 }
  ];
  
  console.log("1 - Lista de productos:");
  productos.forEach(producto => {
    console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
  });

  const productosMayoresA20k = productos.filter(producto => producto.precio > 20000);
  console.log("\n2 - Productos con precio mayor a $20.000:");
  console.log(productosMayoresA20k);
  