class Sistema {
  constructor(productos) {
    this.productos = productos;
    this.metodo_de_pago = ["TC y TD", "Efectivo y QR"];
  }

  buscar_producto() {
    let producto_ingresado = prompt(
      "Ingrese el producto que desea buscar por favor:"
    ).toUpperCase();

    let producto_encontrado = this.productos.find(
      (productos) => productos.nombre.toUpperCase() == producto_ingresado
    );

    if (producto_encontrado) {
      alert(`
Se encontro el producto que busca:
Nombre : ${producto_encontrado.nombre}
Precio : $${producto_encontrado
        .precio.toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
Método de Pago : ${producto_encontrado.metodo_de_pago}
			`);
    } else {
      alert("No se encontro el producto que busca");
    }
  }
  lista_productos() {
    let mensaje = "Lista de productos:\n\n";

    productos.forEach((productos) => {
      mensaje += `ID: ${productos.id}, ${
        productos.nombre
      }, Precio: $${productos.precio
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}, Cantidad Disponible: ${
        productos.stock
      }, Métodos de Pago: ${productos.metodo_de_pago}\n\n `;
    });
    alert(mensaje);
  }
  buscar_por_precio() {
    let presupuesto = parseFloat(
      prompt(
        "Ingrese el presupuesto que dispone en pesos (sin puntos ni comas):"
      )
    );
    while (isNaN(presupuesto) || presupuesto <= 0) {
      presupuesto = parseFloat(
        prompt(
          "Presupuesto inválido. Por favor ingrese un número válido para continuar:"
        )
      );
    }

    let productos_comprables = this.productos.filter(
      (producto) => producto.precio <= presupuesto
    );

    if (productos_comprables.length > 0) {
      let resultado = "Los Productos que puedes comprar:\n\n";
      productos_comprables.forEach((producto) => {
        resultado += `${producto.nombre} - Precio: $${producto.precio
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}\n\n`;
      });
      alert(resultado);
    } else {
      alert(
        `Lo siento, no hay productos que puedas comprar con un presupuesto de $${presupuesto}`
      );
    }
  }
}
