let id_productos = 1

class Producto {
  constructor(nombre, precio, metodo_de_pago){
    let metododepago = [
      'TC y TD',
      'Efectivo y QR'
    ]
    this.nombre = nombre
    this.precio = precio
    this.id = id_productos++
    this.stock = Math.ceil(Math.random()*(50-5)+5)
    this.metodo_de_pago = metododepago[metodo_de_pago]
  }
  
}
let productos =[
  new Producto('Martillo',20000, 1),
  new Producto('Destornillador', 8000, 1),
  new Producto('Taladro', 200000, 0),
  new Producto('Amoladora', 250000, 0),
  new Producto('Clavos', 100, 1),
  new Producto('Tornillos', 100, 1),
  new Producto('Cinta métrica', 1000, 1),
]