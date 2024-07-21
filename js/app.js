const sis = new Sistema(productos)


const locaciones = ["Buenos Aires 3200","Av Pellegrini 654","Italia esq. Maipú"];


let menu_principal = `
Bienvenido a Victornillo:, ¿Que quiere hacer?
Ingrese 0 para ver la Lista de Productos
Ingrese 1 para buscar un producto
Ingrese 2 para ver que productos puede comprar en base a su dinero

`
let i = 0
while (true) {

	let opcion = parseInt(prompt(menu_principal))

	if (opcion == 0) {
    sis.lista_productos()
  	} else if (opcion == 1) {
		sis.buscar_producto()
	} else if (opcion == 2) {
    sis.buscar_por_precio(productos)
	} else {
		alert('Opcion incorrecta')
	}



	if (confirm('¿Quiere salir del menu?')) {
		break
	}
}