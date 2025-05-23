import { mostrarlista, filtrarProductos, eliminarProducto, agregarIVA, ordenarProductos, agregarProducto } from "./funciones.js";
let productos =
  [
    { descripcion: "Auriculares", precio: 49000 },
    { descripcion: "Teclado", precio: 30000 },
    { descripcion: "Mouse", precio: 15000 },
    { descripcion: "Monitor", precio: 120000 },
    { descripcion: "Webcam", precio: 22000 }
  ];


// 1 - Mostrar en consola cada producto en el formato: "Producto: [descripción] - Precio: 
// $[precio]", usando forEach. 
mostrarlista(productos);

// 2 - Crear un nuevo array con los productos cuyo precio sea mayor a $20, usando filter. 
filtrarProductos(productos);


// 3 - Crear un array con los productos, pero con el precio con IVA incluido (21%), usando 
// map. 
agregarIVA(productos);


// 4 - Ordenar el array original de productos por precio de menor a mayor, usando sort. 
ordenarProductos(productos);

// 5 - Agregar un nuevo producto al final del array (por ejemplo, { descripcion: "Parlante 
// Bluetooth", precio: 59000.90 }). 
agregarProducto(productos);

// 6 - Eliminar el producto con el precio más bajo del array. Mostrar cómo queda el array. 
eliminarProducto(productos);