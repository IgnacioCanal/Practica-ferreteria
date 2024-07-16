const productos = [
  { id: 1, name: "Martillo", price: 20000, productPhoto: "", paymentMethods: ["Tarjeta de Crédito", "Efectivo"]},
  { id: 2, name: "Destornillador", price: 8000, productPhoto: "", paymentMethods: ["Tarjeta de Crédito", "Efectivo"]},
  { id: 3, name: "Taladro", price: 200000, productPhoto: "", paymentMethods: ["Tarjeta de Crédito", "Efectivo", "Tarjeta de Débito"]},
  { id: 4, name: "Amoladora", price: 250000, productPhoto: "", paymentMethods: ["Tarjeta de Crédito", "Transferencia", "Pago con QR", "Efectivo", "Tarjeta de débito"]},
  { id: 5, name: "Clavos y Tornillos", price: 100, productPhoto: "", paymentMethods: ["Efectivo", "Tarjeta de débito", "Pago con QR"]},
  { id: 6, name: "Cinta métrica", price: 10000, productPhoto: "", paymentMethods: ["Efectivo", "Tarjeta de débito", "Pago con QR"]},
];

let opcion = prompt("¿Qué quiere saber? Elija una opción: \n Productos \n salir")

productos.forEach((e) => {
  console.log(`El producto ${e.name} sale ${e.price} y se puede pagar con ${e.paymentMethods}`)
})

//let ingreso = parseInt(prompt("ingrese el producto que quiere conocer: \n 1) Martillo \n 2) Destornillador \n 3) Taladro \n 4) Amoladora \n 5) Clavos y Tornillos \n 6) Cinta Métrica " ))
//const buscar = productos.find(e => e.id === ingreso)
//console.log(buscar);
