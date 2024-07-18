const productos = [
  { id: '1', nombre: "Martillo", precio: 20000, metodosDePago: ["TC", " Efectivo"]},
  { id: '2', nombre: "Destornillador", precio: 8000, metodosDePago: ["TC", " Efectivo"]},
  { id: '3', nombre: "Taladro", precio: 200000, metodosDePago: ["TC", " Efectivo", " TD"]},
  { id: '4', nombre: "Amoladora", precio: 250000, metodosDePago: ["TC", " QR", " Efectivo", " TD"]},
  { id: '5', nombre: "Clavos y Tornillos", precio: 100, metodosDePago: ["Efectivo", " TD", " QR"]},
  { id: '6', nombre: "Cinta métrica", precio: 10000, metodosDePago: ["Efectivo", " TD", " QR"]},
];

const locaciones = ["Buenos Aires 3200","Av Pellegrini 654","Italia esq. Maipú"];

function bienvenido(){
  let opcion = prompt("Bienvenidos a nuestros artículos de Ferretería, por favor elija una opción para continuar: \n Productos \n salir").toLocaleLowerCase();
  if (opcion === "salir"){
    alert('Gracias por visitarnos')
    return
  } else if (opcion === "productos"){
    productos.forEach((e) => {
      console.log(`El producto ${e.nombre} sale ${e.precio} y se puede pagar con ${e.metodosDePago}`)
    })
  } else {
    alert(`ingrese una opción válida por favor.`);
    bienvenido();
  }
}
function elegirProductos(){
  let elegir = parseInt(prompt(`Eliga el número de alguno de los productos para saber más: \n 1 - Martillo \n 2 - Destornillador \n 3 - Taladro \n 4 - Amoladora \n 5 - Clavos y Tornillos \n 6 - Cinta Métrica \n SALIR.`));
  if (elegir === 1){
    const martillo = productos.find(producto =>producto.id === 1);
    console.log(martillo);
//    alert(`El producto ${martillo.nombre}, posee un valor de $${martillo.precio}, las formas de pago son: ${martillo.metodosDePago}`);
  }
}

  
bienvenido();
elegirProductos();

//let ingreso = parseInt(prompt("ingrese el producto que quiere conocer: \n 1) Martillo \n 2) Destornillador \n 3) Taladro \n 4) Amoladora \n 5) Clavos y Tornillos \n 6) Cinta Métrica " ))
//const buscar = productos.find(e => e.id === ingreso)
//console.log(buscar);

//productos.push({id: '7', nombre: "Copia de Llaves", precio: 2000, foto:"", metodosDePago: ["Efectivo", "Pago con QR","Tarjeta de débito"]})

//productos.forEach((e) => {
//  console.log(`El producto ${e.nombre} sale ${e.precio} y se puede pagar con ${e.metodosDePago}`)
//})